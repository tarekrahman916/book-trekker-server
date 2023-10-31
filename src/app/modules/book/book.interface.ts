import { Model } from "mongoose";

export type IBook = {
  title: string;
  description?: string;
  author: string;
  genre: string;
  publishedYear: string;
  userEmail: string;
  image?: string;
  reviews?: string[];
};

export type BookModel = Model<IBook, Record<string, unknown>>;

export type IBookFilters = {
  searchTerm?: string;
  genre?: string;
  publicationDate?: string;
};
