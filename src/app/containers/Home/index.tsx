import * as React from 'react';
const s = require('./style.css');
const json = require('./test.json');

class Home extends React.Component<any, any> {
  public render() {
    return (
      <div className={s.home}>
        <img src={require('./barbar.png')} />
        <p>Hello!</p>
        <pre>{JSON.stringify(json, null, 2)}</pre>
      </div>
    );
  }
}

export { Home }
