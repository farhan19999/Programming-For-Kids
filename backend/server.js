const app = require('./app')
const port = process.env.PORT || '3000'

app.listen(port, () => {
    console.log(`Server running on port http://192.168.56.1:${port}`)
    console.log(`API DOC http://192.168.56.1:${port}/api-docs/`)
})

