const express = require('express')
const cors = require('cors')
const pool = require('./config/db')

const app = express()

app.use(cors())

app.use(express.json())

app.get('/posts', async (req,res) => {
    try {
        const result = await pool.query( 'select * from posts');
        res,json(result.rows)
    } catch (error) {
        console.error('error al obtener posts', error)
        res.status(500).json({ error: 'Error al obtener los posts'})
        
    }
})

app.post('/posts', async (req,res) => {
    const { title, img, description } = req.body
    try {
        const result = await pool.query(
            'insert into posts (titulo, img, descripcion, likes) values ($1, $2, $3, 0) returning *',
            [titulo, img, descripcion]
        )
        res.status(201).json(results.rows[0])
    } catch (error) {
        console.error('Error al crear post', error)
        res.status(500).json({ error: 'Error al crear post'})
        
    }
})

module.exports = app
