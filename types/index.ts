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
  dateFrom: Date,
  dateTo: Date,
  user: Book["user"]
}

export interface Rate {
  bookId: string,
  rate: string
}

export type BooksDict = {
  [title in string]: Array<Book>
}

export type BooksBorrowingDict = {
  [id in Book["id"]]: Array<Borrowing>
}