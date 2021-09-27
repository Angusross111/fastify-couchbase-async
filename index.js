"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const couchbase_1 = __importDefault(require("couchbase"));
const fastifyCouchbase = async (fastify, options) => {
    const cluster = await couchbase_1.default.connect(`couchbase://${options.connStr}`, {
        username: options.username,
        password: options.password,
    });
    fastify.decorate("cluster", cluster);
};
exports.default = (0, fastify_plugin_1.default)(fastifyCouchbase, {
    fastify: "3.x",
    name: "fastify-couchbase-async",
});
