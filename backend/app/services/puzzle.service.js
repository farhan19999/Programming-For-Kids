const puzzle_model = require('../models/puzzle.model')

exports.getAllPuzzles = async () => {
    try{
        const puzzles = await puzzle_model.getAllPuzzles()
        return puzzles;
    }
    catch (error) {
        throw Error(error)
    }
}

exports.createPuzzle = async (puzzle) => {
    try {
        const created_puzzle = await puzzle_model.createPuzzle(puzzle)
        return created_puzzle;
    } catch (error) {
        throw Error(error)
    }
}

exports.getPuzzleById = async (id) => {
    try {
        const puzzle = await puzzle_model.getPuzzleById(id)
        return puzzle;
    } catch (error) {
        throw Error(error)
    }
}

exports.updatePuzzle = async (id, puzzle) => {
    try {
        const updated_puzzle = await puzzle_model.updatePuzzle(id, puzzle)
        return updated_puzzle;
    } catch (error) {
        throw Error(error)
    }

}

exports.getTodaysPuzzle = async (today) => {
    try {
        const puzzle = await puzzle_model.getTodaysPuzzle(today)
        return puzzle;
    } catch (error) {
        throw Error(error)
    }
}

exports.getPuzzleSolutionById = async (id) => {
    try {
        const puzzle_solution = await puzzle_model.getPuzzleSolutionById(id)
        return puzzle_solution;
    } catch (error) {
        throw Error(error)
    }
}

exports.updatePuzzleSolution = async (id, puzzle_solution) => {
    try {
        const updated_puzzle_solution = await puzzle_model.updatePuzzleSolution(id, puzzle_solution)
        return updated_puzzle_solution;
    } catch (error) {
        throw Error(error)
    }
}

exports.createPuzzleSolution = async (puzzle_solution) => {
    try {
        const created_puzzle_solution = await puzzle_model.createPuzzleSolution(puzzle_solution)
        return created_puzzle_solution;
    } catch (error) {
        throw Error(error)
    }
}

exports.getTodaysPuzzleSolution = async (today) => {
    try {
        const puzzle_solution = await puzzle_model.getTodaysPuzzleSolution(today)
        return puzzle_solution;
    } catch (error) {
        throw Error(error)
    }
}

exports.createPuzzleSubmission = async (today, puzzle_submission) => {
    try {
        const created_puzzle_submission = await puzzle_model.createPuzzleSubmission(today, puzzle_submission)
        return created_puzzle_submission;
    } catch (error) {
        throw Error(error)
    }
}

exports.getPuzzleSubmissionByUserId = async (userid) => {
    try {
        const puzzle_submissions = await puzzle_model.getPuzzleSubmissionByUserId(userid)
        return puzzle_submissions;
    } catch (error) {
        throw Error(error)
    }
}

