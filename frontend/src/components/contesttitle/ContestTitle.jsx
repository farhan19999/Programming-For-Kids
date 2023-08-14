import { useState, useEffect } from 'react';
import axios from 'axios';

function ContestTitle() {
  const default_rc = {
    'registered-contests': [], // Initialize with an empty array
  };

  const [rc, setRc] = useState(default_rc);

  useEffect(() => {
    axios.get("http://localhost:3000/api/users/6/registered-contests").then((response) => {
      setRc(response.data);
      console.log(response.data);
    })
  }, []);

  return (
      <div className="row" >
        {rc['registered-contests'].length > 0 ? (
          rc['registered-contests'].map((item) => (
            <div className='d-flex justify-content-center align-items-center shadow-sm p-3 mb-5 bg-body-tertiary rounded' style={{width:'51%'}}  key={item.id}>
              <a href='/contest/1'style={{fontSize:'20px',width:'80%',color: 'black'}}>Contest Title: {item.title} div-{item.div} </a>
            </div>
          ))
        ) : (
          <div className='d-flex justify-content-center align-items-center shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
            No registered Contests.
          </div>
        )}
      </div>
  );
};

export default ContestTitle;
