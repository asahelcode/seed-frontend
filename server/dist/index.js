"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const Blog_js_1 = __importDefault(require("./routes/Blog.js"));
const Project_js_1 = __importDefault(require("./routes/Project.js"));
const Book_js_1 = __importDefault(require("./routes/Book.js"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
const MONGODB_CONN_URL = process.env.CONNECTION_URL;
const PORT = Number(process.env.PORT);
app.use('/blog', Blog_js_1.default);
app.use('/project', Project_js_1.default);
app.use('/book', Book_js_1.default);
mongoose_1.default.connect(String(MONGODB_CONN_URL)).then(() => app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
}));
//# sourceMappingURL=index.js.map