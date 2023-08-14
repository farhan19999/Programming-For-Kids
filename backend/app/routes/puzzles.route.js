const  express = require('express')
const router = express.Router()

const puzzles_controller = require('../controllers/puzzles.controller')

/**
 * @swagger
 * tags:
 *   name: Puzzles
 *   description: The Puzzles managing API
 * components:
 *   schemas:
 *     Puzzle:
 *       type: object
 *       properties:
 *         puzzleid:
 *           type: integer
 *           description: The id of the puzzle
 *         date:
 *           type: string
 *           description: The date of the puzzle
 *           format: date
 *         problem:
 *           type: string
 *           description: The problem of the puzzle
 *         puzzle_code:
 *           type: string
 *           description: The code of the puzzle
 *         puzzle_solution:
 *           type: string
 *           description: The solution of the puzzle
 *     Puzzle_Submission:
 *       type: object
 *       properties:
 *         pzsubmissionid:
 *           type: integer
 *           description: The id of the puzzle submission
 *         puzzleid:
 *           type: integer
 *           description: The id of the puzzle
 *         userid:
 *           type: integer
 *           description: The id of the user
 *         submitted_time:
 *           type: string
 *           description: The time of the submission
 *         submitted_code:
 *           type: string
 *           description: The code of the submission
 *         status:
 *           type: string
 *           description: The status of the submission
 */


/**
 * @swagger
 * /api/puzzles:
 *   get:
 *     summary: Returns the list of all the puzzles
 *     tags: [Puzzles]
 *     responses:
 *       200:
 *         description: The list of the puzzles
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 puzzles:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Puzzle'
 *       500:
 *         description: Some server error
 *   post:
 *     summary: Create a new puzzle
 *     tags: [Puzzles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Puzzle'
 *     responses:
 *       201:
 *         description: The puzzle was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Puzzle'
 *       500:
 *         description: Some server error
 * 
 *                  
 *     
 */

router.get('/', puzzles_controller.getAllPuzzles);
router.post('/', puzzles_controller.createPuzzle);
router.get('/:id', puzzles_controller.getPuzzleById);
router.put('/:id', puzzles_controller.updatePuzzle);


router.get('/:today', puzzles_controller.getTodaysPuzzle);

router.post('/:today/submission', puzzles_controller.createPuzzleSubmission);
router.get('/:today/submission/:userid', puzzles_controller.getPuzzleSubmissionByUserId);

router.get('/:id/solution', puzzles_controller.getPuzzleSolutionById)
router.post('/:id/solution', puzzles_controller.createPuzzleSolution)
router.put('/:id/solution', puzzles_controller.updatePuzzleSolution)

router.get('/:today/solution', puzzles_controller.getTodaysPuzzleSolution)




module.exports = router;
