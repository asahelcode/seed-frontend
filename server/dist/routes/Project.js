"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Project_1 = require("./../controllers/Project");
const Project_2 = require("../controllers/Project");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', Project_2.getProjects);
router.post('/', Project_1.createProject);
exports.default = router;
//# sourceMappingURL=Project.js.map