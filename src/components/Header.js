import React from 'react';

function Header(props) {
  return (
    <div className="sc-header">
      <img className="sc-header--img" src={props.imageUrl} alt="" />
      {props.address 
        ? 
          <>
            <div className="sc-header--team-name">{props.teamName} {`${props.address.slice(0, 6)}......${props.address.slice(-4)}`}</div>
            <button className="sc-header--signout-button" onClick={props.onSignout}>Sign Out</button>
          </>
        :
          <div className="sc-header--team-name"> {props.teamName}</div>
      }
      <div className="sc-header--close-button" onClick={props.onClose}>
        <img src={props.closeIconUrl} alt="" />
      </div>
    </div>
  );
}

export default Header;
