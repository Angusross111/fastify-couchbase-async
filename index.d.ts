/// <reference types="node" />
import { FastifyPluginAsync } from "fastify";
import { Cluster, ConnectOptions } from "couchbase";
interface Options extends ConnectOptions {
    connStr: string;
}
declare module "fastify" {
    interface FastifyInstance {
        cluster: Cluster;
    }
}
declare const fastifyCouchbase: FastifyPluginAsync<Options, import("http").Server>;
export default fastifyCouchbase;
