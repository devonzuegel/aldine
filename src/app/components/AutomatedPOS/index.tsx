import * as React from 'react'
import * as R     from 'ramda'
import * as classnames from 'classnames'

const s = require('./style.css')

// import * as tagPOS from '~/parsers/part-of-speech'
// import * as Word   from '~/components/Word'

import { IWord } from '~/models/part-of-speech'

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

const POS = require('pos')

const toIWord = ([word, pos]) => ({ word, pos })

const tagPOS = (text: string) => {
  const tagger = new POS.Tagger()
  const words = new POS.Lexer().lex(text)
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

export const AutomatedPOS = ({ text }: { text: string }) => (
  <div>
    {tagPOS(text).map((wordProps: IWord, i: number) =>
      <span key={i}>
        {i > 0 && <Separator nextPOS={wordProps.pos} />}
        <Word {...wordProps} />
      </span>
    )}
  </div>
)
