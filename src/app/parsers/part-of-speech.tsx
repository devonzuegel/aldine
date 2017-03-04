import { IWord } from 'models/part-of-speech'

const POS = require('pos')

const toIWord = ([word, pos]): IWord => ({ word, pos })

const tagPOS = (text: string): IWord[] => {
  const tagger = new POS.Tagger()
  const words = new POS.Lexer().lex(text)
  return tagger.tag(words).map(toIWord)
}

export default tagPOS
