"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Blog_1 = require("./../controllers/Blog");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', Blog_1.getBlogPost);
router.post('/', Blog_1.createBlogPost);
router.get('/:id', Blog_1.getBlogPostDetail);
exports.default = router;
//# sourceMappingURL=Blog.js.map