import * as React      from 'react'
import * as R          from 'ramda'
import * as classnames from 'classnames'

import { IWord, EPartOfSpeech } from '~/models/part-of-speech'
import * as Theme               from './types/Theme'

const POS = require('pos')
const s   = require('./style.css')

const Word = (props: IWord) => {
  const { word, pos }: IWord = props
  const classes = classnames({
    [s.word]: true,
    [s[pos]]: true,
  })
  return (
    <span className={classes}>
      {word}
    </span>
  )
}

const tagPOS = (text: string) => {
  const tagger  = new POS.Tagger()
  const words   = new POS.Lexer().lex(text)
  const toIWord = ([ word, pos ]: [string, EPartOfSpeech]): IWord => ({ word, pos })

  return tagger.tag(words).map(toIWord)
}

const Separator = ({ nextPOS }: { nextPOS: number | EPartOfSpeech | string }) => {
  const notPunctuation = R.not(R.contains(nextPOS, ['.', ',', ':']))
  return (
    <span className={s.separator}>
      {notPunctuation && ' '}
    </span>
  )
}

interface IProps {
  text: string,
  theme?: Theme.Type,
}

type Type = React.StatelessComponent<IProps>

export const AutomatedPOS: Type = ({ text, theme }) => (
  <div className={s[`theme--${theme || Theme.Enum.default}`]}>
    {tagPOS(text).map((wordProps: IWord, i: number) =>
      <span key={i}>
        {i > 0 && <Separator nextPOS={wordProps.pos} />}
        <Word {...wordProps} />
      </span>
    )}
  </div>
)
