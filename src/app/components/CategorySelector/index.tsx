import * as React from 'react'
import * as classnames from 'classnames'
const s = require('./style.css')

interface IProps {
  select: Function,
  categories: string[],
  selected: number,
}

const Category = (select, selected) => (c, i) => {
  const classes = classnames({
    [s.category]: true,
    [s['category--selected']]: selected === i,
  })
  return (
    <div key={i} className={classes} onClick={select(i)}>
      {c}
    </div>
  )
}

const CategorySelector = (props: IProps) => {
  const { select, categories, selected } = props
  return (
    <div>
      {categories.map(Category(select, selected))}
    </div>
  )
}

export default CategorySelector
