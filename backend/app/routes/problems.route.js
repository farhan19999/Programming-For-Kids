const router = require('express').Router()
const problemsController = require('../controllers/problems.controller')

//create a swagger api documentation

/**
 * @swagger
 * tags:
 *  name: Problems
 *  description: Problems management
 *  
 * components:
 *   schemas:
 *     Problem:
 *       type: object
 *       properties:
 *         problemid:
 *           type: integer
 *         contestid:
 *           type: integer
 *         title:
 *           type: string
 *         difficulty:
 *           type: string
 *         problem_statement:
 *           type: string
 *         topic:
 *           type: string
 *         sample_input:
 *           type: string
 *         sample_output:
 *           type: string
 *         time_limit:
 *           type: string
 *     Problem_Submission:
 *       type: object
 *       properties:
 *         ppsubmissionid:
 *           type: integer
 *         problemid:
 *           type: integer
 *         userid:
 *           type: integer
 *         language:
 *           type: string
 *         submitted_code:
 *           type: string
 *         submitted_time:
 *           type: string
 *         status:
 *           type: string
 *     Problem_Discussion:
 *       type: object
 *       properties:
 *         commentid:
 *           type: integer
 *         problemid:
 *           type: integer
 *         userid:
 *           type: integer
 *         parent_commentid:
 *           type: integer
 *         comment_text:
 *           type: string
 *         comment_time:
 *           type: string
 *           format: date-time
 *     Problem_Solution:
 *       type: object
 *       properties:
 *         solutionid:
 *           type: integer
 *           description: id of the solution
 *         problemid:
 *           type: integer
 *           description: id of the problem
 *         description:
 *           type: string
 *           description: description of the solution
 *         video_link:
 *           type: string
 *           description: link of the video 
 */

/**
 * @swagger
 * /api/problems:
 *   get:
 *     summary: Returns the list of all the problems
 *     tags: [Problems]
 *     responses:
 *       200:
 *         description: The list of the problems
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 problems:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Problem'
 *       500:
 *         description: Some server error
 *   
 */
router.get('/', problemsController.getAllProblems);

/**
 * @swagger
 * /api/problems/{id}:
 *   get:
 *     summary: Get the problem by id
 *     tags: [Problems]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The problem id
 *     responses:
 *       200:
 *         description: The problem description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Problem'
 *       404:
 *         description: The problem was not found
 *       500:
 *         description: Some error happened     
 */
router.get('/:id', problemsController.getProblemById);

/**
 * @swagger
 * /api/problems/{id}/submissions:
 *   post:
 *     summary: Create a new submission
 *     tags: [Problems]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Problem id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Problem_Submission'
 *     responses:
 *       200:
 *         description : new submission created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Problem_Submission'
 *      
 *         
 */
router.post('/:id/submissions', problemsController.createNewSubmission);

/**
 * @swagger
 * /api/problems/{id}/submissions/{userid}:
 *   get:
 *     summary: Get the submission by userid
 *     tags: [Problems]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Problem id
 *       - in: path
 *         name: userid
 *         schema:
 *           type: integer
 *         required: true
 *         description: User id
 *     responses:
 *       200:
 *         description: The submission description by userid
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Problem_Submission'
 *       404:
 *         description: The submission was not found
 *       500:
 *         description: Some error happened
 */
router.get('/:id/submissions/:userid', problemsController.getProblemSubmissionByUserId);

/**
 * @swagger
 * /api/problems/{id}/discussions:
 *   get:
 *     summary: Get the discussion by problemid
 *     tags: [Problems]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Problem id
 *     responses:
 *       200:
 *         description: The discussions of problem with id
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 comments:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Problem_Discussion'
 *       404:
 *         description: The discussion was not found
 *       500:
 *         description: Some error happened
 *   post:
 *     summary: Create a new discussion
 *     tags: [Problems]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Problem id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Problem_Discussion'
 *     responses:
 *       200:
 *         description: new discussion created
 *         content:  
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Problem_Discussion'
 *       404:
 *         description: The discussion was not found
 *       500:
 *         description: Some error happened
 *      
 */
router.get('/:id/discussions', problemsController.getProblemDiscussion)
router.post('/:id/discussions', problemsController.createNewProblemDiscussion)



/**
 * @swagger
 * /api/problems/{id}/discussions/{commentid}:
 *   post:
 *     summary: Create a new reply to discussion
 *     tags: [Problems]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Problem id
 *       - in: path
 *         name: commentid
 *         schema:
 *           type: integer
 *         required: true
 *         description: comment id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Problem_Discussion'
 *     responses:
 *       200:
 *         description: new reply to discussion created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Problem_Discussion'
 *       404:
 *         description: The discussion was not found
 *       500:
 *         description: Some error happened
 *   delete:
 *     summary: Delete a reply to discussion
 *     tags: [Problems] 
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Problem id
 *       - in: path
 *         name: commentid
 *         schema:
 *           type: integer
 *         required: true
 *         description: comment id
 *     responses:
 *       200:
 *         description: reply to discussion deleted
 *       404:
 *         description: The discussion was not found
 *       500:
 *         description: Some error happened
 */
router.post('/:id/discussions/:commentid', problemsController.createReplyProblemDiscussion)
router.delete('/:id/discussions/:commentid', problemsController.deleteComment)

/**
 * @swagger
 * /api/problems/{id}/solutions:
 *   get:
 *     summary: Get the solutions by problemid
 *     tags: [Problems]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Problem id
 *     responses:
 *       200:
 *         description: The solutions of problem with id
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 solutions:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Problem_Solution'
 *       404:
 *         description: The solution was not found
 *       500:
 *         description: Some error happened
 *   post:
 *     summary: Create a new solution
 *     tags: [Problems]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer 
 *         required: true
 *         description: Problem id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Problem_Solution'
 *     responses:
 *       200:
 *         description: new solution created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Problem_Solution'
 *       404:
 *         description: The solution was not found
 *       500:
 *         description: Some error happened
 *  
 * 
 */ 

router.get('/:id/solutions', problemsController.getProblemSolution)
router.post('/:id/solutions', problemsController.createproblemSolution)

/**
 * @swagger
 * /api/problems/{id}/solutions/{solutionid}:
 *   put:
 *     summary: Update a solution
 *     tags: [Problems]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Problem id
 *       - in: path
 *         name: solutionid
 *         schema:
 *           type: integer
 *         required: true
 *         description: solution id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Problem_Solution'
 *       responses:
 *         200:
 *           description: The solution was updated
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Problem_Solution'
 *         404:
 *           description: The solution was not found
 *         500:
 *           description: Some error happened
 */

router.put('/:id/solutions/:solutionid', problemsController.updateproblemSolution)


router.get('/:id/testcases', problemsController.getAllProblemTestCases);
router.post('/:id/testcases', problemsController.addProblemTestCase);


router.get('/:id/testcases/:testcaseid', problemsController.getProblemTestCaseById);
router.put('/:id/testcases/:testcaseid', problemsController.updateProblemTestCase);



module.exports = router;