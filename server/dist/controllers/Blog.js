"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlogPostDetail = exports.createBlogPost = exports.getBlogPost = void 0;
const BlogPost_1 = __importDefault(require("../models/BlogPost"));
const mongoose_1 = __importDefault(require("mongoose"));
const getBlogPost = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield BlogPost_1.default.find();
        res.status(200).json(posts);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getBlogPost = getBlogPost;
const createBlogPost = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = _req.body;
    const newBlogPost = new BlogPost_1.default(body);
    try {
        yield newBlogPost.save();
        res.status(200).json(newBlogPost);
    }
    catch (error) {
        console.log(error);
    }
});
exports.createBlogPost = createBlogPost;
const getBlogPostDetail = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: _id } = _req.params;
    if (!mongoose_1.default.isValidObjectId(_id))
        return res.status(404).json('Not a valid Id');
    try {
        const blogPost = yield BlogPost_1.default.findById(_id);
        res.status(200).json(blogPost);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getBlogPostDetail = getBlogPostDetail;
//# sourceMappingURL=Blog.js.map