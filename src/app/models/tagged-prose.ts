import { ITokenCategories } from '~/models/token-categories'

export interface ITaggedProse {
  categorized: string[],
  selectedCategory: string,
  categories: ITokenCategories,
}

export interface ITaggedProseAction {
  type: string,
  index: number,
  category?: string | null,
}
