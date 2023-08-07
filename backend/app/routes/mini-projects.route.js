const router = require('express').Router();
const controller = require('../controllers/mini-projects.controller');

/**
 * @swagger
 * tags:
 *   name: Mini-Projects
 *   description: The mini project managing API
 * components:
 *   schemas:
 *     Mini-Project:
 *       type: object
 *       properties:
 *         projectid:
 *           type: integer
 *           description: id of the contest
 *         title:
 *           type: string
 *           description: title of the contest
 *           default: "Mini Project"
 *         project_description:
 *           type: string
 *           description: description of the contest
 *         starting_code:
 *           type: string
 *           description: starting code of the contest
 *         starting_time:
 *           type: string
 *           format: date-time
 *           description: starting time of the contest
 *     Mini-Porject-Submission:
 *       type: object
 *       properties:
 *         submissionid:
 *           type: integer
 *           description: id of the submission
 *         projectid:
 *           type: integer
 *           description: id of the project
 *         userid:
 *           type: integer
 *           description: id of the user
 *         submission_time:
 *           type: string
 *           format: date-time
 *           description: submission time of the submission
 *              
 *       
 */

/**
 * @swagger
 * tags:
 *   [Mini-Projects]
 *   
 * /api/mini-projects:
 *   get:
 *     summary: Returns the list of all the mini projects
 *     tags: [Mini-Projects]
 *     responses:
 *       200:
 *         description: The list of the mini projects
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mini-projects:
 *                   type: array
 *                   items:
 *                     $ref : '#/components/schemas/Mini-Project'
 *   post:
 *     summary: Create a new mini project
 *     tags: [Mini-Projects]
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Mini-Project'
 *     responses:
 *       200:
 *         description: The mini project was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Mini-Project'
 *       500:
 *         description: Some server error  
 *                
 */

router.get('/', controller.getAllMiniProjects);
router.post('/', controller.createMiniProject);

/**
 * @swagger
 * tags:
 *   [Mini-Projects]
 *   
 * /api/mini-projects/{id}:
 *   get:
 *     summary: Returns the mini project with the given id
 *     tags: [Mini-Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     description: The mini project id
 *     responses:
 *       200:
 *         description: The mini project with the given id
 *         content:
 *           application/json:
 *             schema:
 *               $ref : '#/components/schemas/Mini-Project'
 *   put:
 *     summary: Update the mini project with the given id
 *     tags: [Mini-Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     description: The mini project id
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Mini-Project'
 *     responses:
 *       200:
 *         description: The mini project was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Mini-Project'
 *       500:
 *         description: Some server error  
 *                
 */

router.get('/:id', controller.getMiniProjectById);
router.put('/:id', controller.updateMiniProject);


router.get('/:id/submissions', controller.getAllMiniProjectSubmissions)
router.post('/:id/submissions', controller.createMiniProjectSubmission)

router.get('/:id/submissions/:userid', controller.getMiniProjectSubmissionByUserId)
router.get('/:id/standings', controller.getMiniProjectStanding)




module.exports = router;