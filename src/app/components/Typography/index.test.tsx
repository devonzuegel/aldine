import * as React from 'react'
import * as R     from 'ramda'
import { mount  } from 'enzyme'
import { expect } from 'chai'
import { klass  } from '~/helpers/TestHelper'

import { H1, H2, H3 } from './index'

const s = require('./style.css')

describe('<Typography />', () => {

  beforeEach(() => {
  })

  it('has children', () => {
    const str = 'Lorem ipsum'
    expect(mount(<H1>{str}</H1>).text()).to.eql(str)
  })

})
