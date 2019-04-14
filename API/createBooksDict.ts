import { BooksDict, Book } from "~/types";

export const createBooksDict = (dict: BooksDict, book: Book): BooksDict => {
    dict[book.title] ?  dict[book.title].push(book) : dict[book.title] = [book];
    return dict;
}