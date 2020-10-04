const express = require("express")
const router = express.Router()


/**
 * @swagger
 *
 * definitions:
 *   NewUser:
 *     type: object
 *     required:
 *       - username
 *       - password
 *     properties:
 *       username:
 *         type: string
 *       password:
 *         type: string
 *         format: password
 *   User:
 *     allOf:
 *       - $ref: '#/definitions/NewUser'
 *       - required:
 *         - id
 *       - properties:
 *         id:
 *           type: integer
 *           format: int64
 */

/**
 * @swagger
 * /users:
 *   get:
 *     description: Returns users
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: users
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/User'
 */
router.get('/users', (req, res) => {
    res.status(200).send({
        API: "GET /api/users",
        mensagem: "Teste realizado com sucesso"
    })
  })
  
  /**
   * @swagger
   *
   * /users:
   *   post:
   *     description: Creates a user
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: user
   *         description: User object
   *         in:  body
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/NewUser'
   *     responses:
   *       200:
   *         description: users
   *         schema:
   *           $ref: '#/definitions/User'
   */
  router.post('/users', (req, res) => {
    res.status(200).send({
        API: "POST /api/users",
        mensagem: "Teste realizado com sucesso"
    })
  })

  /**
 * @swagger
 *
 * /login:
 *   post:
 *     description: Login para acessar a API
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: Username será o CNPJ/CPF do cliente.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: Senha enviada para uso da API.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login API
 */
router.post('/login', (req, res) => {
    res.status(200).send({
        API: "POST /api/login",
        mensagem: "Teste realizado com sucesso"
    })
  })

  module.exports = router