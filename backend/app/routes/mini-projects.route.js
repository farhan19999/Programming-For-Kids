const router = require('express').Router();
const controller = require('../controllers/mini-projects.controller');

router.get('/', controller.getAllMiniProjects);
router.post('/', controller.createMiniProject);

router.get('/:id', controller.getMiniProjectById);
router.put('/:id', controller.updateMiniProject);

router.get('/:id/submissions', controller.getAllMiniProjectSubmissions)
router.post('/:id/submissions', controller.createMiniProjectSubmission)

router.get('/:id/submissions/:userid', controller.getMiniProjectSubmissionByUserId)
router.get('/:id/standings', controller.getMiniProjectStanding)




module.exports = router;