import React from 'react'
import Navbar from '../../../components/navbar/Navbar';
import SubNavbar from '../../../components/sub_navbar/SubNavbar';
import PracticeSubmissionTable from '../../../components/practice_submission_table/PracticeSubmissionTable';
import Footer from '../../../components/footer/Footer';
import SubNavbarPracticeProblem from '../../../components/sub_navbar_practice_problem/SubNavbarPracticeProblem';

export default function PracticeProblemSubmission() {
    return (
        <>
            <Navbar />
            <SubNavbarPracticeProblem />
            <PracticeSubmissionTable />
            <Footer/>
        </>
            
    )
}
