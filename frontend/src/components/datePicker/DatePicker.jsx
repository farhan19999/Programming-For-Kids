import {useState} from 'react';
import { Form } from 'react-bootstrap';
import { DatePicker as DP, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';

export default function DatePicker({ label,date, id }) {
    const [value, setValue] = useState(date);
    return (
        <div>
            <div className='row'>
                <div className='col-md-4'>
                        <LocalizationProvider dateAdapter={AdapterMoment}>
                            <DP
                                id={id}
                                label={label}
                                value={moment(value)}
                                onChange={(newValue) => setValue(newValue)}
                            />
                        </LocalizationProvider>
                </div>
            </div>
        </div >
    )
}
