import * as React from 'react';
const s = require('./style.css');
const md = require('./test.md?tagged-prose').default;

class Home extends React.Component<any, any> {
  public render() {
    return (
      <div className={s.home}>
        <img src={require('./barbar.png')} />
        <p>Hello!</p>

        <h3>{md}</h3>
      </div>
    );
  }
}

export { Home }
