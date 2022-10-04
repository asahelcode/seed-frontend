"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("./../controllers/Book");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', Book_1.getBooks);
router.post('/', Book_1.createBook);
exports.default = router;
//# sourceMappingURL=Book.js.map