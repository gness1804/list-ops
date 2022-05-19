export class List<T> {
  constructor(public items: T[] = []) { }
  public static create<T>(...values: T[]): List<T> {
    return new List(values)
  }

  public append(otherList: List<T>): T[] | List<T> {
    const res = new List([...this.items, ...otherList.items]);
    if (!this.length() || !otherList.length()) return res;
    return res.items
  }

  public concat(otherList: List<T>): T[] {
    let res: T[] = [];
    otherList.forEach(item => {
      if (item instanceof List) {
        for (let index = 0; index < item.items.length; index++) {
          const element = item.items[index];
          res.push(element)
        }
      } else {
        res.push(item);
      }
    })
    return [...this.items, ...res]
  }

  private forEach(callback: (item: T) => void): void {
    for (let i = 0; i < this.length(); i++) {
      callback(this.items[i]);
    }
  }

  public filter<U extends T>(callback: (el: U) => boolean): U[] {
    const res: U[] = []
    for (let i = 0; i < this.length(); i++) {
      const item = this.items[i] as U;
      if (callback(item)) { res.push(item) }
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

  public map<U extends T>(callback: (item: U) => U): U[] {
    const res: U[] = []
    for (let i = 0; i < this.length(); i++) {
      const item = this.items[i] as U;
      const transformedItem = callback(item);
      res.push(transformedItem);
    }
    return res;
  }

  public foldl<T, U>(callback: (acc: U, curr: T) => T, acc: U): U {
    let _acc = acc;
    for (let i = 0; i < this.length(); i++) {
      const element = this.items[i];
      _acc = callback(_acc, element);
    }
    return _acc;
  }

  public foldr<T, U>(callback: (acc: U, curr: T) => T, acc: U): U {
    let _acc = acc;
    for (let i = this.length() - 1; i >= 0; i--) {
      const element = this.items[i];
      _acc = callback(_acc, element);
    }
    return _acc;
  }

  public reverse(): T[] {
    const res: T[] = []
    for (let i = this.length() - 1; i >= 0; i--) {
      const element = this.items[i];
      res.push(element);
    }
    return res;
  }
}
