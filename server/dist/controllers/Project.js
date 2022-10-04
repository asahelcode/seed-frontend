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
exports.createProject = exports.getProjects = void 0;
const Project_1 = __importDefault(require("../models/Project"));
const getProjects = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projects = yield Project_1.default.find();
        res.status(200).json(projects);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getProjects = getProjects;
const createProject = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = _req.body;
    const newProject = new Project_1.default(body);
    try {
        yield newProject.save();
        res.status(200).json('success');
    }
    catch (error) {
        console.log(error);
    }
});
exports.createProject = createProject;
//# sourceMappingURL=Project.js.map