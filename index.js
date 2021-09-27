"use strict";

import fp from "fastify-plugin";
import couchbase from "couchbase";

const fastifyCouchbase = async (fastify, options) => {
    const cluster = await couchbase.connect(`couchbase://${options.connStr}`, {
        username: options.username,
        password: options.password,
    });

    fastify.decorate("cluster", cluster);
};

module.exports = fp(fastifyCouchbase, {
    fastify: "3.x",
    name: "fastify-couchbase-async",
});
