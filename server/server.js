import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import http from 'http'

const startApolloServer = async () => {
    const app = express ()

    const httpServer = http.createServer(app)

    const server = new ApolloServer({
        plugins: [ApolloServerPluginDrainHttpServer({httpServer})]
    })

    await server.start

    server.applyMiddleware({ app })

    await new Promise(resolve => httpServer.listen({ port: 400 }, resolve))

    console.log()
}