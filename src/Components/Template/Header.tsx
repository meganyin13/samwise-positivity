import React from 'react';
import { Row, Col } from 'react-bootstrap';

import '../../css/Header.css';
import sambear from '../../imgs/samwise-bear.png';

export default (): React.ReactElement => (
  <div className="header">
    <div className="header-content">
      <Row>
        <Col>
          <div>
            <br className="top-space" />
            <h1 className="title">
              <strong>
                #SpreadThe
                <span className="love">Love</span>
              </strong>

            </h1>
          </div>
          <div>
            <h2 className="subtitle">
              Brought to you by the creators of
              {' '}
              <a className="samwiselink" href="https://www.samwise.today" rel="noopener noreferrer" target="_blank">Samwise</a>
              !
            </h2>
          </div>
          <div>
            <h2 className="subtitle">May 1, 2020</h2>
          </div>
          <div className="bear-align">
            <a href="https://www.samwise.today" rel="noopener noreferrer" target="_blank"><img className="samwise-bear" src={sambear} alt="samwise bear" /></a>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);
