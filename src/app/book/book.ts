export class Book {

  private _id: number;
  private _name: string;
  private _author: string;
  private _price: string;
  private _image: string;

  constructor(id: number, name: string, author: string, price: string, image: string) {
    this._id = id;
    this._name = name;
    this._author = author;
    this._price = price;
    this._image = image;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get price(): string {
    return this._price;
  }

  set price(value: string) {
    this._price = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }
}
