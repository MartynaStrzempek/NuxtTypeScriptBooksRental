export * from './state';

export interface Book {
  id: string,
  category: string,
  description: string,
  inserted: string, 
  modified: string,
  subcategory: string,
  title: string,
  user: string
}

export interface Borrowing {
  bookId: string,
  rentals: Array<Rental>
}

export interface Rental {
  dateOfRental: Date,
  user: string
}

export interface Rate {
  bookId: string,
  rate: string
}

export interface UniqueBook {
  book: Book,
  amount: number
}

