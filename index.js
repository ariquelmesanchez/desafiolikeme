require('dotenv').config
const app = require('./src/app')

const { PORT } = process.env

app.listen(PORT || 3001, () => {
    console.log(`Server is up and running on http://localhost:${PORT}`)
})
