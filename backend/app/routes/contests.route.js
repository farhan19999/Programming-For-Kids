const router = require('express').Router()

const controller = require('../controllers/contests.controller')
const contestMiddleware = require('../middlewares/contests.middleware')
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


router.get('/:id', controller.getContestById)
router.put('/:id', controller.updateContest)


router.get('/:id/problems', controller.getContestProblems)
router.post('/:id/problems', controller.addContestProblem)

router.get('/:id/problems/:problemid', controller.getContestProblemById)
router.get('/:id/problems/categories/:category', controller.getContestProblemByCategory)
router.put('/:id/problems/:problemid', controller.updateContestProblem)
router.delete('/:id/problems/:problemid', controller.deleteContestProblem)

router.get('/:id/problems/:problemid/testcases', controller.getContestProblemTestCases);
router.post('/:id/problems/:problemid/testcases', controller.addContestProblemTestCase);

router.get('/:id/problems/:problemid/testcases/:testcaseid', controller.getContestProblemTestCaseById);
router.put('/:id/problems/:problemid/testcases/:testcaseid', controller.updateContestProblemTestCase);
router.delete('/:id/problems/:problemid/testcases/:testcaseid', controller.deleteContestProblemTestCase);


router.get('/:id/submissions', contestMiddleware.getContestSubmissionByProblemId,
                                contestMiddleware.getContestSubmissionByUserId, 
                                controller.getAllContestSubmissions)
//router.get('/:id/submissions/:problemid', controller.getContestSubmissionsByProblemId)
//router.get('/:id/submissions/:userid', controller.getContestSubmissionByUserId)


router.post('/:id/submissions/:problemid/:userid', controller.addContestProblemSubmission)

router.get('/:id/standings', controller.getContestStanding)


module.exports = router