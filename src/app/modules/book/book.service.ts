import { IBook } from "./book.interface";
import Book from "./book.model";

const createBook = async (payload: IBook) => {
  const result = await Book.create(payload);
  return result;
};
const getAllBook = async () => {
  const result = await Book.find();
  return result;
};

export const BookService = {
  createBook,
  getAllBook,
};
