export class List {
  constructor(public items: number[] = []) {}
  public static create(...values: number[]): List {
    // Do *not* construct any array literal ([]) in your solution.
    // Do *not* construct any arrays through new Array in your solution.
    // DO *not* use any of the Array.prototype methods in your solution.

    // You may use the destructuring and spreading (...) syntax from Iterable.
    return new List([...values])
  }

  private forEach(items: number[]) {
    for (let i = 0; i < items.length; i++) {
      console.log(items[i])
    }
  }

  public append(otherList: List): number [] | List {
    const res = new List([...this.items, ...otherList.items]);
    res.forEach(res.items)
    if (!this.items.length || !otherList.items.length) return res;
    return res.items
  }
}
