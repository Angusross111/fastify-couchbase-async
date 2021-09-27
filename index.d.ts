/// <reference types="node" />
import { FastifyPluginCallback } from "fastify";
import { Cluster, ConnectOptions } from "couchbase";
interface Options extends ConnectOptions {
    connStr: string;
}
declare module "fastify" {
    interface FastifyInstance {
        cluster: Cluster;
    }
}
export const fastifyCouchbase: FastifyPluginCallback<Options>;

export default fastifyCouchbase;
