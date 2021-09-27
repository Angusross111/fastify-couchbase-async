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
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const couchbase_1 = __importDefault(require("couchbase"));
const fastifyCouchbase = (fastify, options) => __awaiter(void 0, void 0, void 0, function* () {
    const cluster = yield couchbase_1.default.connect(`couchbase://${options.connStr}`, {
        username: options.username,
        password: options.password,
    });
    fastify.decorate("cluster", cluster);
});
exports.default = (0, fastify_plugin_1.default)(fastifyCouchbase, "3.x");
