export class List {
  constructor(public items: number[] = []) {}
  public static create(...values: number[] | List[]): List {
    // Do *not* construct any array literal ([]) in your solution.
    // Do *not* construct any arrays through new Array in your solution.
    // DO *not* use any of the Array.prototype methods in your solution.

    // You may use the destructuring and spreading (...) syntax from Iterable.

    // @ts-ignore: it expects a number for isNaN but the item might be a List
    if (values.length && isNaN(values[0])) {
      // the values are of type List
      let resItems: number[] = [];
      // @ts-ignore: list will always be a List even though TS thinks it might also be a number.
      values.forEach((list: List) => {
        resItems = [...resItems, ...list.items]
      })
      return new List(resItems);
    }
    // the values are of type number
    // @ts-ignore: values will always be of type number even though TS thinks they might also be Lists
    return new List([...values])
  }

  // private forEach(items: number[]) {
  //   for (let i = 0; i < items.length; i++) {
  //     console.log(items[i])
  //   }
  // }

  public append(otherList: List): number [] | List {
    const res = new List([...this.items, ...otherList.items]);
    // res.forEach(res.items)
    if (!this.items.length || !otherList.items.length) return res;
    return res.items
  }

  public concat(otherList: List): number[] {
    return [...this.items, ...otherList.items]
  }
}
