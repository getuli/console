import fastify from 'fastify';
import { pool } from './database'; // Certifique-se de que o arquivo `database.js` está correto.

const server = fastify();

// Rota para criar um post
server.post('/create', async (request, reply) => {
    const content = request.body;

    // Defina a consulta SQL de inserção
    const query = `INSERT INTO posts (author, title, text) 
                   VALUES ($1, $2, $3) RETURNING *`; // Usando parâmetros para evitar SQL Injection

    try {
        
        const res = await pool.query(query, [content.author, content.title, content.text]);
        reply.code(201).send(res.rows[0]);
    } catch (error) {
        console.error(error);
        reply.code(500).send({ message: 'Erro ao criar post' });
    }
});


server.listen({
    port:333
});
