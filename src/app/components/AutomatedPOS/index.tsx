import * as React from 'react'
import * as R     from 'ramda'
import * as classnames from 'classnames'

import { IWord } from '~/models/part-of-speech'

const s = require('./style.css')
const POS = require('pos')

const Word = (props: IWord) => {
  const { word, pos } = props
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
  const toIWord = ([ word, pos ]) => ({ word, pos })

  return tagger.tag(words).map(toIWord)
}

const Separator = ({ nextPOS }) => {
  const notPunctuation = R.not(R.contains(nextPOS, ['.', ',', ':']))
  return (
    <span className={s.separator}>
      {notPunctuation && ' '}
    </span>
  )
}

export const enum Theme {
  default,
  allPartsOfSpeech,
}

interface IProps {
  text: string,
  theme?: Theme,
}

type Type = React.StatelessComponent<IProps>

export const AutomatedPOS: Type = ({ text, theme }: IProps) => (
  <div className={s[`theme--${theme}`]}>
    {tagPOS(text).map((wordProps: IWord, i: number) =>
      <span key={i}>
        {i > 0 && <Separator nextPOS={wordProps.pos} />}
        <Word {...wordProps} />
      </span>
    )}
  </div>
)
