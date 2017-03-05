import * as React from 'react'
import * as R from 'ramda'
import * as classnames from 'classnames'
import { ITokenCategories } from '~/models/token-categories'
const s = require('./style.css')

interface IProps {
  select: Function,
  categories: ITokenCategories,
  selected: string,
}

const Category = (select, selected, categories) => (c, i) => {
  const classes = classnames({
    [s.category]: true,
    [categories[c]]: true,
    [s['category--selected']]: selected === c,
  })
  return (
    <li key={i} className={classes} onClick={select(c)}>
      {c}
    </li>
  )
}

const CategorySelector = (props: IProps) => {
  const { select, categories, selected } = props
  return (
    <ul>
      {R.keys(categories).map(Category(select, selected, categories))}
    </ul>
  )
}

export default CategorySelector
