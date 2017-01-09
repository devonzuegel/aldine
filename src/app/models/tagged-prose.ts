export interface ITaggedProse {
  categorized: string[],
  selectedCategory: string,
}

export interface ITaggedProseAction {
  type: string,
  index: number,
}
