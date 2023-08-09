//routes/users.route.js
const controller = require('../controllers/users.controller')
const router = require('express').Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         -userid
 *       properties:
 *         userid:
 *           type: integer
 *           description: id of the user
 *         username:
 *           type: string
 *           description: name of the user
 *         password:
 *           type: string
 *           format: password
 *           description: password of the user
 *         rating:
 *           type: integer
 *           description: rating of the user
 *         ranking:
 *           type: string
 *           description: ranking of the user
 *         phone_no:
 *           type: string
 *           format: phone number
 *           description: phone number of the user
 *         email_address:
 *          type: string
 *          format: email
 *          description: email of the user 
 *       example:
 *         userid: 1
 *         username: Arif
 *         password: 1234
 *         rating: 1
 *         ranking: 1
 *         phone_no: 880
 *         email_address: arif@gmail.com
 *     Contest:
 *       type: object
 *       required:
 *         -contestid
 *       properties:
 *         contestid:
 *           type: integer
 *           description: id of the contest
 *         title:
 *           type: string
 *           description: title of the contest
 *         div:
 *           type: int
 *           description: div of the contest
 *         start_time:
 *           type: string
 *           format: date-time
 *           description: start time of the contest
 *         duration:
 *           type: integer
 *           description: hour duration of the contest
 */



/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The User managing API
 * /api/users:
 *   get:
 *     summary: Returns the list of all the users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 users:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *               example:
 *                 - users: [ {userid: 1, username: Arif, password: 1234, rating: 1, ranking: 1, phone_no: 880, email_address: arif@gmail.com } ]
 *       500:
 *          description: Some server error
 * 
 * 
 * 
 */
router.get('/', controller.getAllUsers)


/** 
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The user was successfully created
 *         content:
 *          application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error  
 */
router.post('/', controller.createUser)


/** 
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get user with id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: The created User.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *          description: Some server error
 *        
 */
router.get('/:id', controller.getUserById)


/** 
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Update user with id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: The updated User.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *          description: Some server error      
 */

router.put('/:id', controller.updateUser)
//router.delete('/:id', controller.deleteUser)



/** 
 * @swagger
 * /api/users/{id}/registered-contests:
 *   get:
 *     summary: Get registered contests of user with id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: The registered contests of the user.
 *         content:
 *           application/json:
 *             schema:
 *              type: object
 *              properties:
 *                registered-contests:
 *                  type: array
 *                  items:
 *                   $ref: '#/components/schemas/Contest'
 *       500:
 *          description: Some server error      
 */
router.get('/:id/registered-contests',controller.getRegisteredContests)

//TODO #1: add contest recommendation feature
//router.get('/:id/recommended-contests',controller.getRecommendedContests)


router.get('/:id/practice-submissions', controller.getAllPracticeSubmissionByUserId)


module.exports = router