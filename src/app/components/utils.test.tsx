import { expect } from 'chai'
import * as U     from './utils'

describe('Utils', () => {

  it('converts spaced to camel', () => {
    expect(U.spaceToCamel('hello my name is dog')).to.eql('helloMyNameIsDog')
  })

  it('converts uppercased, spaced to camel', () => {
    expect(U.spaceToCamel('Hello my name is dog')).to.eql('helloMyNameIsDog')
  })

})
