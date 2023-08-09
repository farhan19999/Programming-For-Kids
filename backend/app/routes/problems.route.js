const router = require('express').Router()
const problemsController = require('../controllers/problems.controller')

//create a swagger api documentation

/**
 * @swagger
 * components:
 *  schemas:
 *    Problem:
 *      type: object
 *      properties:
 *        problemid
 *          type: integer
 *          
 */

router.get('/', problemsController.getAllProblems);


router.get('/:id', problemsController.getProblemById);

router.post('/:id/submissions', problemsController.createNewSubmission);
router.get('/:id/submissions/:userid', problemsController.getProblemSubmissionByUserId);
router.get('/:id/problems/discussions', problemsController.getProblemDiscussion)
router.post('/:id/problems/discussions', problemsController.createNewProblemDiscussion)
router.post('/:id/problems/discussions/:commentid', problemsController.createReplyProblemDiscussion)
router.delete('/:id/discussions/:commentid', problemsController.deleteComment)

router.get('/:id/solutions', problemsController.getProblemSolution)
router.post('/:id/solutions', problemsController.createproblemSolution)
router.put('/:id/solutions/:solutionid', problemsController.updateproblemSolution)


module.exports = router;