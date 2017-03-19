import * as React from 'react'
import * as R from 'ramda'
import * as classnames from 'classnames'
import { ITokenCategories } from '~/models/token-categories'
const s = require('./style.css')

interface IProps {
  categories: ITokenCategories
  select:     Function
  selected:   string
}

const Category = ({ select, categories, selected }: IProps) => (c: string, i: number) => {
  const classes = classnames({
    [s.category]:              true,
    [categories[c]]:           true,
    [s['category--selected']]: selected === c,
  })
  return (
    <li key={i} className={classes} onClick={select(c)}>
      {c}
    </li>
  )
}

const CategorySelector = (props: IProps) => (
  <ul>
    {R.keys(props.categories).map(Category(props))}
  </ul>
)

export default CategorySelector
