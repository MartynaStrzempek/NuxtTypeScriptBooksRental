import { UniqueBook, Book } from "~/types";

export const createUniqueBooksWithAmount = (booksWithAmount: Array<UniqueBook>, book: Book): Array<UniqueBook> => {
    const theSameBook = booksWithAmount.find(bookWithAmount => bookWithAmount.book.title === book.title);
    theSameBook ? ++theSameBook.amount : booksWithAmount.push({ book, amount: 1 });
    return booksWithAmount;
}