import { Model } from "mongoose";

export type IBook = {
  title: string;
  description?: string;
  author: string;
  genre: string;
  publicationDate: Date;
  userEmail: string;
  reviews?: string[];
};

export type BookModel = Model<IBook, Record<string, unknown>>;

export type IBookFilters = {
  searchTerm?: string;
  genre?: string;
  publicationDate?: string;
};
