import * as React from 'react'
import * as Helmet from 'react-helmet'

interface IHtmlProps {
  manifest?: { [key: string]: any }
  markup?: string
  store?: Redux.Store<any>
}

class Html extends React.Component<IHtmlProps, {}> {
  private resolve(files: any[]) {
    return files.map((src) => {
      if (!this.props.manifest[src]) { return null }
      return '/public/' + this.props.manifest[src]
    }).filter((file) => file !== undefined)
  }

  public render() {
    const head = Helmet.rewind()
    const { markup, store } = this.props

    const styles = this.resolve([ 'vendor.css', 'app.css' ])
    const renderStyles = styles.map((src: string, i: number) =>
      <link key={i} rel="stylesheet" type="text/css" href={src} />
    )

    const scripts: string[] = this.resolve(['vendor.js', 'app.js'])
    const renderScripts = scripts.map((src: string, i: number) =>
      <script src={src} key={i}></script>
    )

    const __html = `window.__INITIAL_STATE__=${JSON.stringify(store.getState())}`
    const initialState = <script charSet='UTF-8' dangerouslySetInnerHTML={{ __html }} />

    return (
      <html>
        <head>
          {head.base.toComponent()}
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          {head.script.toComponent()}

          {renderStyles}
          <link rel="shortcut icon" href="/favicon.ico" />
        </head>
        <body style={{ margin: '0' }}>
          <main id="app" dangerouslySetInnerHTML={{ __html: markup }}></main>
          {initialState}
          {renderScripts}
        </body>
      </html>
    )
  }
}

export { Html }
