"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tap_1 = __importDefault(require("tap"));
const fastify_1 = __importDefault(require("fastify"));
const index_js_1 = __importDefault(require("./index.js"));
const test = tap_1.default.test;
const COUCHBASE_URL = "localhost";
const USERNAME = "admin";
const PASSWORD = "password";
test("fastify.cb should exist", (t) => {
    t.plan(1);
    const fastify = (0, fastify_1.default)();
    fastify.register(index_js_1.default, {
        connStr: COUCHBASE_URL,
        username: USERNAME,
        password: PASSWORD,
    });
    fastify.ready((err) => {
        t.error(err);
        t.ok(fastify.cluster);
        fastify.close();
    });
});
