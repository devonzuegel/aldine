import * as React from 'react'
import * as R     from 'ramda'
import tag        from '~/parsers/tagged-prose'

const s = require('./style.css')

const TAGS = {
  '**': s.noun,
  __:   s.verb,
  '~~': s.highlight,
}

const parse = (str: string) =>
  tag(TAGS)(str)

const space = (str: string) =>
  R.split('|', str).map((substr: string, i: number) => (
    <span key={i} className={s.spaced}>{substr}</span>
  ))

const samples = {
  tagged: [
    'The old __man__ the boat.',
    'The complex __houses__ married and single soldiers and their families.',
    'The horse raced past the barn __fell__.',
    'The florist sent the flowers __was__ pleased.',
    'Time __flies__ like an arrow; fruit flies __like__ a banana.',
    'The man whistling __tunes__ pianos',
    'The man who hunts __ducks__ out on weekends.',
    'The cotton clothing is made of __grows__ in Mississippi. ',
    'I __convinced__ her children are noisy.',
    'The man returned to his house __was__ happy. ',
    'Mary gave the child the dog bit a bandaid.',
    'The government plans to raise taxes __were__ defeated.',
    'The girl told the story __cried__.',
    "I know the words to that song about the queen __don't__ rhyme.",
    'The sour __drink__ from the ocean. ',
    'She __told__ me a little white lie __will__ come back to haunt me',
    'While Anna dressed(,) the baby spit up on the bed.',
  ],
  chunked: [
    'The old | man | the boat.',
    'The complex | houses | married and single soldiers and their families.',
    'The horse raced past the barn | fell.',
    'The florist sent the flowers | was | pleased.',
    'Time | flies | like an arrow; fruit flies | like | a banana.',
    'The man whistling | tunes | pianos',
    'The man who hunts | ducks | out on weekends.',
    'The cotton clothing is made of | grows | in Mississippi.',
    'I convinced her | children are noisy.',
    'The man returned to his house | was | happy. ',
    'Mary | gave | the child the dog bit | a bandaid.',
    'The government | plans to raise taxes | were defeated.',
    'The girl told the story | cried.',
    "I know the words to that song about the queen don't rhyme.",
    'The sour | drink | from the ocean. ',
    'She told me a little white lie | will | come back to haunt me',
    'While Anna dressed(,) the baby spit up on the bed.',
  ],
}

export const verbs = (
  <ul className={s.gardenPaths}>
    {samples.tagged.map((sample, i) =>
      <li className={s.gardenPath} key={i}>
        {parse(sample)}
      </li>
    )}
  </ul>
)

export const spaced = (
  <ul className={s.gardenPaths}>
    {samples.chunked.map((sample, i) =>
      <li className={s.gardenPath} key={i}>
        {space(sample)}
      </li>
    )}
  </ul>
)

/*
  MORE GARDEN PATHS:

  The courageous guard freedom tenaciously.
  The old man the boat
  The Inuit can fish in their new factory in town.
  Southern European people like Italians like dishes like pasta.
  An old buddy just dropped by his girlfriend was happy to see her.
  The complex houses married or single students.
  The fat people eat accumulates.
  Is that gold mine producing?
  We painted the wall with cracks.
  The government plans to raise taxes were defeated.
  Beverly Hills 90210, Denver 3.
  The cotton clothing is usually made of grows in the southern U. S.
  The man who hunts ducks out on weekends.
  When Mike eats food gets wasted.
  I gave the kid the dog bit a band-aid.
  The British left waffles on the Falkland Islands.
  I've convinced her children are noisy.
  Helen is expecting tomorrow to be a great day.
  The horse raced past the barn fell.
  She told me a little white lie would haunt me someday.
  The man who whistles tunes pianos.
  A sharp jab to the boxer's abs will wind him up.
  Have the patients who didn't pass take the supplement.
  The raft floated down the river sank.
  Time flies like an arrow; fruit flies like a banana.
  While I dressed the baby stayed in the playpen.
*/
