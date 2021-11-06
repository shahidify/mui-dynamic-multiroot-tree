// src/server.js
import { createServer, Model } from "miragejs";
const faker = require("faker");

function generateRecord() {
  return {
    id: faker.random.uuid(),
    key: faker.random.uuid(),
    name: faker.random.word(),
    isLeaf: faker.random.boolean()
  };
}
export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model
    },

    seeds(server) {},

    routes() {
      this.namespace = "api";
      this.get("/treedata", () => ({
        data: [generateRecord(), generateRecord(), generateRecord()]
      }));
    }
  });

  return server;
}
