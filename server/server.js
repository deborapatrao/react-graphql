import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import http from 'http'
import { resolvers, typeDefs } from "./src/schema";

const startApolloServer = async (typeDefs, resolvers) => {
    const app = express ()

    const httpServer = http.createServer(app)


    const server = new ApolloServer({
        typeDefs,
        resolvers,
        //plugin designed for use with express middleware built on top of node http.server - recommended to use to ensure that server shuts down gracefully
        //plugin not necessary with satrtStandaloneServer
        plugins: [ApolloServerPluginDrainHttpServer({httpServer})]
    })

    await server.start()

    server.applyMiddleware({ app })

    await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve))

    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
}

startApolloServer(typeDefs, resolvers)