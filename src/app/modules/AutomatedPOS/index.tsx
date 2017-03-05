import * as React from 'react'
import { AutomatedPOS as Component } from '~/components/AutomatedPOS'

const txt1 = (
  'The book theorized that sufficiently intense competition for suburban houses in ' +
  'good school districts meant that people had to throw away lots of other values – ' +
  'time at home with their children, financial security – to optimize for ' +
  'house-buying-ability or else be consigned to the ghetto.'
)
const txt2 = (
  'Reading, like any human activity, has a history. Modern reading is a silent and solitary ' +
  'activity. Ancient reading was usually oral, either aloud, in groups, or individually, in ' +
  'a muffled voice. The text format in which thought has been presented to readers has ' +
  'undergone many changes in order to reach the form that the modern Western reader now ' +
  'views as immutable and nearly universal. This book explains how a change in writing—the ' +
  'introduction of word separation—led to the development of silent reading during the period ' +
  'from late antiquity to the fifteenth century.'
)
export const AutomatedPOS = () => (
  <div>
    <br />
    <Component text='This is a sentence' />
    <br />
    <Component text={txt1} />
    <br />
    <Component text={txt2} />
  </div>
)
