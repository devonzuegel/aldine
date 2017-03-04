import * as React from 'react'
import * as classnames from 'classnames'

import { IWord } from 'models/part-of-speech'

const s = require('./style.css')

const Word = (props: IWord) => {
  const { word, pos } = props
  const classes = classnames({
    [s.word]: true,
    [pos]: true,
  })

  return (
    <span className={classes}>
      {word}
    </span>
  )
}

export default Word
