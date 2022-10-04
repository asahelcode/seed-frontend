"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bookSchema = new mongoose_1.default.Schema({
    timestamp: {
        type: Date,
        default: new Date(),
    },
    cover: String,
    name: String,
    genre: String,
    author: String,
    publisher: String,
    rating: Number,
    review: String,
    url: {
        type: String,
        default: 'https://imgs.search.brave.com/fVcQmUtQdcbo2rf95qsVS_Fgs-frAPqXjkQ6t2cOW2w/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC45/NlM5QlAteGF0ZzNx/MEpYbkp5ZER3SGFF/NyZwaWQ9QXBp',
    },
    pages: Number,
});
exports.default = mongoose_1.default.model('Book', bookSchema);
//# sourceMappingURL=Books.js.map