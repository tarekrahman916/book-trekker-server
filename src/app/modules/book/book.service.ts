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
const getSingleBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findOne({ _id: id });
  return result;
};

export const BookService = {
  createBook,
  getAllBook,
  getSingleBook,
};
