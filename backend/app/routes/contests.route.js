const router = require('express').Router()
const { param, notEmpty, isInt } = require("express-validator");
const controller = require('../controllers/contests.controller')
const contestMiddleware = require('../middlewares/contests.middleware')
const validator = require('../middlewares/validation.middleware')
/**
 * @swagger
 * tags:
 *   name: Contests
 *   description: The contests managing API
 * components:
 *   schemas:
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
 *   [Contests]
 * /api/contests:
 *   get:
 *     summary: Returns the list of all the contests
 *     tags: [Contests]
 *     responses:
 *       200:
 *         description: The list of the contests
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 contests:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Contest'
 *       500:
 *          description: Some server error
 *    
 *   post:
 *     summary: Create a new contest
 *     tags: [Contests]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#components/schemas/Contest'
 *     responses:
 *       200:
 *         description: The contest was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contest'
 *       500:
 *         description: Some server error
 * 
 * 
 * 
 * 
 */
router.get('/', controller.getContests)
router.post('/', controller.createContest)


router.get('/:id', param('id').notEmpty().isInt(), validator.validate,controller.getContestById)
router.put('/:id',param('id').notEmpty().isInt(), validator.validate, controller.updateContest)
router.delete('/:id',param('id').notEmpty().isInt(), validator.validate, controller.deleteContest)


router.get('/:id/problems',param('id').notEmpty().isInt(), validator.validate, controller.getContestProblems)
router.post('/:id/problems',param('id').notEmpty().isInt(), validator.validate, controller.addContestProblem)

router.get('/:id/problems/:problemid',param('id').notEmpty().isInt(), param('problemid').notEmpty().isInt(), validator.validate, controller.getContestProblemById)
router.get('/:id/problems/categories/:category',param('id').notEmpty().isInt(),param('category').notEmpty(), validator.validate, controller.getContestProblemByCategory)
router.put('/:id/problems/:problemid',param('id').notEmpty().isInt(), param('problemid').notEmpty().isInt(), validator.validate,controller.updateContestProblem)
router.delete('/:id/problems/:problemid',param('id').notEmpty().isInt(), param('problemid').notEmpty().isInt(), validator.validate, controller.deleteContestProblem)

router.get('/:id/problems/:problemid/testcases',param('id').notEmpty().isInt(), param('problemid').notEmpty().isInt(), validator.validate, controller.getContestProblemTestCases);
router.post('/:id/problems/:problemid/testcases',param('id').notEmpty().isInt(), param('problemid').notEmpty().isInt(), validator.validate, controller.addContestProblemTestCase);

router.get('/:id/problems/:problemid/testcases/:testcaseid',param('id').notEmpty().isInt(), param('problemid').notEmpty().isInt(), param('testcaseid').notEmpty().isInt(),validator.validate, controller.getContestProblemTestCaseById);
router.put('/:id/problems/:problemid/testcases/:testcaseid', param('id').notEmpty().isInt(), param('problemid').notEmpty().isInt(), param('testcaseid').notEmpty().isInt(), validator.validate, controller.updateContestProblemTestCase);
router.delete('/:id/problems/:problemid/testcases/:testcaseid', param('id').notEmpty().isInt(), param('problemid').notEmpty().isInt(), param('testcaseid').notEmpty().isInt(), validator.validate,controller.deleteContestProblemTestCase);


router.get('/:id/submissions/user/:userid',
                                controller.getContestSubmissionByUserId, 
                                )



router.post('/:id/submissions/:problemid/:userid',
            param('id').notEmpty().isInt(),
            param('problemid').notEmpty().isInt(),
            param('userid').notEmpty().isInt(),
            validator.validate, controller.addContestProblemSubmission)
router.get('/:id/standings', controller.getContestStanding)


module.exports = router