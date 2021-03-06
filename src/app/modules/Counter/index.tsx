import * as React from 'react'
const { connect } = require('react-redux')

import { ICounter } from '~/models/counter'

import { increment, decrement } from './redux'
const s = require('./style.css')

interface IProps {
  counter: ICounter
  increment: Redux.ActionCreator<any>
  decrement: Redux.ActionCreator<any>
}

@connect(
  (state: { counter: ICounter }) => ({ counter: state.counter }),
  (dispatch: Function) => ({
    decrement: () => dispatch(decrement()),
    increment: () => dispatch(increment()),
  })
)
class Counter extends React.Component<IProps, void> {

  public render() {
    const { increment, decrement, counter } = this.props

    return (
      <div className={s.counter}>
        <h4>Counter Example</h4>
        <button
          name="incBtn"
          onClick={increment}>
            INCREMENT
        </button>
        <button
          name="decBtn"
          onClick={decrement}
          disabled={counter.count <= 0}>
            DECREMENT
        </button>
        <p>{counter.count}</p>
      </div>
    )
  }
}

export { Counter }
