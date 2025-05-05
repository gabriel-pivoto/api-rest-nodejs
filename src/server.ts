import fastify from 'fastify';

const app = fastify()

// GET, POST, PUT, DELETE, PATCH
app.get('/hello', () => {
    return 'hello world'
})
app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP server running on http://localhost:3333')
})
