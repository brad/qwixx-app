import React from 'react';
import './Portrait.css';

const Portrait = ({ show }) => {
  return (
    <div
      id="portrait-mode-blocker"
      className={show ? 'show' : ''}
      data-testid="portrait-blocker"
    >
      <div className="phone"></div>
      <div className="message">
        Please rotate your device to landscape mode to play.
      </div>
    </div>
  );
};

export default Portrait;
