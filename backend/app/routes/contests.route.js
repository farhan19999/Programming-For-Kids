const router = require('express').Router()

const controller = require('../controllers/contests.controller')
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
router.put('/:id/problems/:problemid', controller.updateContestProblem)
router.delete('/:id/problems/:problemid', controller.deleteContestProblem)


router.get('/:id/submissions', controller.getAllContestSubmissions)
router.get('/:id/submissions/:problemid', controller.getContestSubmissionsByProblemId)
router.get('/:id/submissions/:userid/', controller.getContestSubmissionByUserId)


router.post('/:id/submissions/:problemid/:userid', controller.addContestProblemSubmission)


router.get('/:id/standings', controller.getContestStanding)


module.exports = router