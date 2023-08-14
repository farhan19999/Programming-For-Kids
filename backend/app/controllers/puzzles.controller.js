const puzzle_service = require('../services/puzzle.service')

exports.getAllPuzzles = async (req, res) => {
    try {
        const puzzles = await puzzle_service.getAllPuzzles()
        res.status(200).json(puzzles)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

exports.createPuzzle = async (req, res) => {
    try {
        const puzzle = await puzzle_service.createPuzzle(req.body)
        res.status(201).json(puzzle)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

exports.getPuzzleById = async (req, res) => {
    try {
        const puzzle = await puzzle_service.getPuzzleById(req.params.id)
        if (puzzle) {
            res.status(200).json(puzzle)
        } else {
            res.status(404).send('Puzzle not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}


exports.updatePuzzle = async (req, res) => {
    try {
        const puzzle = await puzzle_service.updatePuzzle(req.params.id, req.body)
        res.status(200).json(puzzle)
    } catch (error) {
        res.status(500).send(error.message)
    }
}


exports.getTodaysPuzzle = async (req, res) => {
    try {
        const puzzle = await puzzle_service.getTodaysPuzzle(req.params.today)
        if (puzzle) {
            res.status(200).json(puzzle)
        } else {
            res.status(404).send('Puzzle not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

exports.getPuzzleSolutionById = async (req, res) => {
    try {
        const puzzle_solution = await puzzle_service.getPuzzleSolutionById(req.params.id)
        if (puzzle_solution) {
            res.status(200).json(puzzle_solution)
        } else {
            res.status(404).send('Puzzle solution not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

exports.createPuzzleSolution = async (req, res) => {
    try {
        const puzzle_solution = await puzzle_service.createPuzzleSolution(req.params.id, req.body)
        res.status(201).json(puzzle_solution)
    } catch (error) {
        res.status(500).send(error.message)
    }
}


exports.updatePuzzleSolution = async (req, res) => {
    try {
        const puzzle_solution = await puzzle_service.updatePuzzleSolution(req.params.id, req.body)
        res.status(200).json(puzzle_solution)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

exports.getTodaysPuzzleSolution = async (req, res) => {
    try {
        const puzzle_solution = await puzzle_service.getTodaysPuzzleSolution(req.params.today)
        if (puzzle_solution) {
            res.status(200).json(puzzle_solution)
        } else {
            res.status(404).send('Puzzle solution not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}


exports.createPuzzleSubmission = async (req, res) => {
    try {
        const puzzle_submission = await puzzle_service.createPuzzleSubmission(req.params.today, req.body)
        res.status(201).json(puzzle_submission)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

exports.getPuzzleSubmissionByUserId = async (req, res) => {
    try {
        const puzzle_submission = await puzzle_service.getPuzzleSubmissionByUserId(req.params.today, req.params.userid)
        if (puzzle_submission) {
            res.status(200).json(puzzle_submission)
        } else {
            res.status(404).send('Puzzle submission not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}