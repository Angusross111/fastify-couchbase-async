import { FastifyPluginCallback, FastifyPluginAsync } from "fastify";
import fp from "fastify-plugin";
import couchbase, { Cluster, ConnectOptions } from "couchbase";

interface Options extends ConnectOptions {
    connStr: string;
}
declare module "fastify" {
    interface FastifyInstance {
        cluster: Cluster;
    }
}

const fastifyCouchbase: FastifyPluginAsync<Options> = async (fastify, options) => {
    const cluster = await couchbase.connect(`couchbase://${options.connStr}`, {
        username: options.username,
        password: options.password,
    });

    fastify.decorate("cluster", cluster);
};

export default fp(fastifyCouchbase, {
    fastify: "3.x",
    name: "fastify-couchbase-async",
});
