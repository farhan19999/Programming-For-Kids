import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCamera,
  faVideoCamera,
  faFile,
  faThumbsUp,
  faThumbsDown,
  faHeart,
  faGlobe,
  faMobile,
} from '@fortawesome/free-solid-svg-icons';

import './style.css'; // Import your custom CSS file

export default function Discussion() {
  return (
    <div>
      <div className="container bootdey">
        <div className="col-md-12 bootstrap snippets">
          <div className="panel">
            <div className="panel-body">
              <textarea
                className="form-control"
                rows="2"
                placeholder="What are you thinking?"
              ></textarea>
              <div className="mar-top clearfix">
                <button className="btn btn-sm btn-primary pull-right" type="submit">
                  <FontAwesomeIcon icon={faThumbsUp} /> Share
                </button>
                <a className="btn btn-trans btn-icon add-tooltip" href="#">
                  <FontAwesomeIcon icon={faVideoCamera} />
                </a>
                <a className="btn btn-trans btn-icon add-tooltip" href="#">
                  <FontAwesomeIcon icon={faCamera} />
                </a>
                <a className="btn btn-trans btn-icon add-tooltip" href="#">
                  <FontAwesomeIcon icon={faFile} />
                </a>
              </div>
            </div>
          </div>
          <div className="panel">
            <div className="panel-body">
              {/* Newsfeed Content */}
              {/*===================================================*/}
              {/* Media blocks */}
              {/*===================================================*/}
              {/* Comments */}
              {/*===================================================*/}
            </div>
          </div>
          {/* Add more panel content here */}
        </div>
      </div>
    </div>
  );
}
