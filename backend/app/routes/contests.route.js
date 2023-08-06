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
 *                 users:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Contest'
 *               example:
 *                 - contests: [ {contestid: 1, title: Contest 1, div: 1, start_time: 2021-04-01 00:00:00, duration: 2 } ]
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
router.put('/:id/problems/:problemid', controller.updateContestProblem)
router.delete('/:id/problems/:problemid', controller.deleteContestProblem)


router.get('/:id/submissions', controller.getAllContestSubmissions)
router.get('/:id/submissions/:problemid', controller.getContestSubmissionsByProblemId)
router.get('/:id/submissions/:userid/', controller.getContestSubmissionByUserId)


router.post('/:id/submissions/:problemid/:userid', controller.addContestProblemSubmission)


router.get('/:id/standing', controller.getContestStanding)


module.exports = router