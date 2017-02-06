import * as React from 'react'
import { AutomatedPOS as Component } from '~/components/AutomatedPOS'

const txt = (
  'The book theorized that sufficiently intense competition for suburban houses in ' +
  'good school districts meant that people had to throw away lots of other values – ' +
  'time at home with their children, financial security – to optimize for ' +
  'house-buying-ability or else be consigned to the ghetto.'
)
export const AutomatedPOS = () => (
  <div>
    <br />
    <Component text='This is a sentence' />
    <br />
    <Component text={txt} />
  </div>
)
