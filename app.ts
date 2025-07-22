import fastify from 'fastify';

const app = fastify();

app.get("/", async (_request, reply) => {
  reply.send("Hello World from Fastify + TypeScript!");
});

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`🚀 Server listening at ${address}`);
});
