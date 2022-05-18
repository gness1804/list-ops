export class List<T> {
  constructor(public items: T[] = []) {}
  public static create<T>(...values: T[] | List<T>[]): List<T> {
    // Do *not* construct any array literal ([]) in your solution.
    // Do *not* construct any arrays through new Array in your solution.
    // DO *not* use any of the Array.prototype methods in your solution.

    // You may use the destructuring and spreading (...) syntax from Iterable.

    if (values.length && values[0].items) {
      // the values are of type List
      let resItems: T[] = [];
      values.forEach((list) => {
        resItems = [...resItems, ...list.items]
      })
      return new List(resItems);
    }
    // the values are not of type List
    return new List([...values])
  }

  public append(otherList: List<T>): T [] | List<T> {
    const res = new List([...this.items, ...otherList.items]);
    if (!this.length() || !otherList.length()) return res;
    return res.items
  }

  public concat(otherList: List<T>): T[] {
    return [...this.items, ...otherList.items]
  }

  public filter<T>(callback: (el: T) => boolean): T[] {
    const res: T[] = []
    for (let i = 0; i < this.length(); i++) {
      const item = this.items[i]
      if (callback(item)) {
        res.push(item);
      }
    }
    return res;
  }

  public length(): number {
    let count = 0;
    for (const item of this.items) {
      count++;
    }
    return count;
  }

  public map<T>(callback: (item: T) => T): T[] {
    const res: T[] = []
    for (let i = 0; i < this.length(); i++) {
      const transformedItem = callback(this.items[i]);
      res.push(transformedItem);
    }
    return res;
  }
}
