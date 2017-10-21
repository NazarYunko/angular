export class Book {

  private _id: number;
  private _name: string;
  private _author: string;
  private _price: number;
  private _image: string;

  constructor(id: number, name: string, author: string, price: number, image: string) {
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

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  public static getBooks(): Book[] {
    return [
      new Book(1, 'Angels and Demons', 'Den Brown', 85,
        'https://images-na.ssl-images-amazon.com/images/I/81-%2BZ-hkITL.jpg'),
      new Book(2, 'IT', 'Stephen King', 215,
        'https://images-na.ssl-images-amazon.com/images/I/51xPIEYPWWL._SX326_BO1,204,203,200_.jpg'),
      new Book(3, 'The road', 'Cormac McCarthy', 66,
        'https://images.gr-assets.com/books/1428351742l/6746212.jpg'),
      new Book(4, '1984', 'George Orwell', 110,
        'http://wwwcdn.printmag.com/wp-content/uploads/1984-book-covers-5.jpg'),
      new Book(5, 'Code da Vinci', 'Den Brown', 78,
        'https://images-na.ssl-images-amazon.com/images/I/51W%2B5lYSiOL._SX319_BO1,204,203,200_.jpg')
    ];
  }
}
