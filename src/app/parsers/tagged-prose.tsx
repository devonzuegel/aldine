import * as React from 'react'
import * as R from 'ramda'

const split = (tag: string) => (str: string) =>
  R.pipe(
    R.split(tag),                 // Split on tags (removes tags)    => [token, token, ...]
    R.map(token => [token, tag]), // Add tags back in between tokens => [[token, tag], ...]
    R.flatten,                    // Flatten token-tag pairs         => [token, tag, ...]
    R.init,                       // Remove extraneous last tag      => [token, tag, ..., token]
    R.reject(R.isEmpty)           // Remove empty strings
  )(str)

export const tokenizer = (tags: Object) => (content: string) =>
  R.reduce(
    (acc: string[], tag: string) => R.pipe( R.map(split(tag)), R.flatten )(acc),
    [content]
  )(R.keys(tags))

const initClassNames = (tags: Object) => {
  const classNames: string[] = R.pipe(R.values, R.map(String))(tags)
  return R.reduce(
    (acc, c: string) => R.merge(acc, { [c]: false }),
    {}
  )(classNames)
}

const addClassNames = (tags: Object) => (tokens: string[]) => {
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

interface Token {
  content:    string,
  classNames: Object
}

export const mapper = (tags: Object) => (content: string): Token[] =>
  R.pipe(
    tokenizer(tags),
    addClassNames(tags),
    R.prop('output'),
    R.map((x: any) => x as Token)
  )(content)

const getClasses = (classNames: Object): string => {
  const klasses = R.pipe(
    R.keys,
    R.filter((key: string): boolean => classNames[key])
  )(classNames)
  return R.join(' ', klasses)
}

const tokenToSpan = ({ content, classNames }: Token, key) => (
  <span
    className={getClasses(classNames)}
    key={key}
  >
    { content }
  </span>
)

const parseList = (tags: Object) => (content: string[]) =>
  R.map(R.pipe(
    mapper(tags),
    (tokens: Token[]) => tokens.map(tokenToSpan)
  ))(content)

const parseStr = (tags: Object) => (s: string) =>
  <div>
    {R.head(parseList(tags)([s]))}
  </div>

export default parseStr

// R.pipe(
//   R.reduce(
//     ({ highlighting, result, i }, fragment) => ({
//       highlighting: !highlighting,
//       i: i + 1,
//       result: [
//       ...result,
//       highlighting ? <span className={className} key={i}>{fragment}</span> : fragment
//       ]
//     }),
//     { highlighting: false, result: [], i: 0 }
//   ),
// )
