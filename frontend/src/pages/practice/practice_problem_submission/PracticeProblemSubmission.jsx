import React from 'react'
import SubmissionTable from "../../../components/my_submissions_table/SubmissionTable";
import Navbar from '../../../components/navbar/Navbar';
import SubNavbar from '../../../components/sub_navbar/SubNavbar';

export default function PracticeProblemSubmission() {
    return (
        <div>
            <Navbar />
            <SubNavbar />
            <SubmissionTable />
        </div>
    )
}
