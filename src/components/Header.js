import React from 'react';

function Header(props) {
  return (
    <div className="sc-header">
      <img className="sc-header--img" src={props.imageUrl} alt="" />
      <div className="sc-header--team-name"> {props.teamName} </div>
      <div className="sc-header--close-button" onClick={props.onClose}>
        <img src={props.closeIconUrl} alt="" />
      </div>
    </div>
  );
}

export default Header;
