"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BookSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    author: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    publishedYear: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    reviews: {
        type: [String],
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
const Book = (0, mongoose_1.model)("Book", BookSchema);
exports.default = Book;
