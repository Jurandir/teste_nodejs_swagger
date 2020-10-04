const express = require("express")
const morgan = require("morgan")
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const rotas = require("./routes/rotasAPI")

const app = express()


if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const swaggerDefinition = {
    info: {
        title: 'API Exemplo', 
        version: '0.0.01', 
        description: 'API para estudar o Swagger',
      },
      host: "localhost:3000", 
      basePath: '/api', 
}

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], 
};

const swaggerSpec = swaggerJSDoc(options);


app.use(morgan("dev"))

app.get('/', function (req, res, next) {
    res.status(200).send({
        API: "Node Express API",
        mensagem: "0.0.1"
    })
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
})

app.use('/api',rotas)

const port = process.env.PORT || '3000'
const modo = process.env.NODE_ENV || 'Test'

app.listen(port, function () {
    console.log(`Servidor rodando na porta ${port} : Modo ${modo}`)
})