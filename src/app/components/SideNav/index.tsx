import * as React      from 'react'
import * as classnames from 'classnames'

const s = require('./style.css')

interface ITocItem {
  name: string,
  onClick: any,
  children?: ITocItem[],
}

interface IProps {
  children?: any,
  debug?: boolean,
  toc: ITocItem[],
}

type Type = React.StatelessComponent<IProps>

const classes = (level: number) => (
  classnames({
    [s[`toc-${level}`]]: true,
    [s['toc-li']]: true,
  })
)

const TableOfContents = (items: ITocItem[], level: number = 0) => (
  <ul className={s.toc}>
    {items.map(({ name, onClick, children }: ITocItem, i: number) =>
      <div key={i}>
        <li {...{ className: classes(level), onClick }}>
          {name}
        </li>
        {!!children && TableOfContents(children, level + 1)}
      </div>
    )}
  </ul>
)

export const SideNav: Type = (props: IProps) => (
  <div className={s.sideNav}>
    <div className={s.fixed}>
      {TableOfContents(props.toc)}
      {props.children}
    </div>
  </div>
)
