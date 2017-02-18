import * as React from 'react'
import { mount  } from 'enzyme'
import { expect } from 'chai'

import { Codeblock } from '~/components/Codeblock'


describe('<Codeblock />', () => {

  it('has the expected text', () => {
    const str  = 'This is the inner content'
    const cmpt = mount(
      <Codeblock>
        {str}
      </Codeblock>
    )
    expect(cmpt.text()).to.eql(str)
  })

  it('requires at least one child to be defined', () =>
    expect(() => mount(<Codeblock />)).to.throw('Codeblock must have children')
  )

})
