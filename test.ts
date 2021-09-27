"use strict";

import t from "tap";
import Fastify from "fastify";
import fastifyCouchbase from "./index.js";
const test = t.test;

const COUCHBASE_URL = "localhost";
const USERNAME = "admin";
const PASSWORD = "password";

test("fastify.cb should exist", (t) => {
    t.plan(1);

    const fastify = Fastify();

    fastify.register(fastifyCouchbase, {
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
