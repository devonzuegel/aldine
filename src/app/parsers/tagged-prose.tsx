import * as React from 'react'
import * as R from 'ramda'

type strObject = {
  [key: string]: string
}

// Specify type of `tokens` explicitly
const strListInit = (tokens: string[]) => R.init(tokens)

const split = (tag: string) => (str: string) =>
  R.pipe(
    R.split(tag),                 // Split on tags (removes tags)    => [token, token, ...]
    R.map(token => [token, tag]), // Add tags back in between tokens => [[token, tag], ...]
    R.flatten,                    // Flatten token-tag pairs         => [token, tag, ...]
    strListInit,                  // Remove extraneous last tag      => [token, tag, ..., token]
    R.reject(R.isEmpty)           // Remove empty strings
  )(str)

export const tokenizer = (tags: strObject) => (content: string) =>
  R.reduce(
    (acc: string[], tag: string) => R.pipe( R.map(split(tag)), R.flatten )(acc),
    [content]
  )(R.keys(tags))

const initClassNames = (tags: strObject) => {
  const classNames: string[] = R.pipe(R.values, R.map(String))(tags)
  return R.reduce(
    (acc, c: string) => R.merge(acc, { [c]: false }),
    {}
  )(classNames)
}

const addClassNames = (tags: strObject) => (tokens: string[]) => {
  const toggleTagClass = (t: string) => R.evolve({ [tags[t]]: R.not })
  const isTag          = (t: string) => R.contains(t, R.keys(tags))

  return R.reduce(
    ({ classNames, output }, t: string) => ({
      classNames: isTag(t) ? toggleTagClass(t)(classNames) : classNames,
      output:     isTag(t) ? output : [ ...output, { content: t, classNames } ],
    }),
    { classNames: initClassNames(tags), output: [] }
  )(tokens)
}

interface IToken {
  content: string
  classNames: strObject
}

export const mapper = (tags: strObject) => (content: string): IToken[] =>
  R.pipe(
    tokenizer(tags),
    addClassNames(tags),
    R.prop('output'),
    R.map((x: any) => x as IToken)
  )(content)

const getClasses = (classNames: strObject): string => {
  const klasses = R.pipe(
    R.keys,
    R.filter((key: string): boolean => !!classNames[key])
  )(classNames)
  return R.join(' ', klasses)
}

const tokenToSpan = ({ content, classNames }: IToken, key: number) => (
  <span
    className={getClasses(classNames)}
    key={key}
  >
    { content }
  </span>
)

const parseList = (tags: strObject) => (content: string[]) =>
  R.map(R.pipe(
    mapper(tags),
    (tokens: IToken[]) => tokens.map(tokenToSpan)
  ))(content)

const parseStr = (tags: strObject) => (s: string) =>
  <span>
    {R.head(parseList(tags)([s]))}
  </span>

export default parseStr
