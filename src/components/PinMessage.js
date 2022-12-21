import { pipe, prop, length, ifElse } from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';

function PinMessage(props) {
  const {
    pinMessage,
    onPinMessage,
    pinMessagePlaceholder,
    pinMessageButtonText,
    pinLeftButton
  } = props;

  const ticketStatus = pinMessage.status;
  const ticketId = pinMessage._id;

  const renderTicket = () => {
    if (ticketStatus == "New" || ticketStatus == "Ongoing") {
      // show ticket
      return (
        <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
          {pinLeftButton ? pinLeftButton : ""}
          <div className='sc-pin--message--desc'>
            <div className='sc-pin--message--title'>{`Ticket - ${ticketId}`}</div>
          </div>
          <button style={{ float: "right", height: "40px", width: "120px", color: "white", borderRadius: "10px", fontSize: "14px", fontWeight: 700, fontFamily: 'Ubuntu', backgroundColor: ticketStatus == "New" ? "#096191" : "#c46fb2", border: "solid 0px" }}>{ticketStatus}</button>        </div>
      )

    } else {
      // create
      return (
        <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
          {pinLeftButton ? pinLeftButton : ""}
          <div className='sc-pin--message--desc'>
            <div className='sc-pin--message--title'>{pinMessagePlaceholder}</div>
          </div>
          <button style={{ float: "right", height: "40px", maxWidth: "20%", cursor: "pointer", color: "white", borderRadius: "10px", fontSize: "14px", fontWeight: 700, fontFamily: 'Ubuntu', backgroundColor: "#459BFF", border: "solid 0px" }} onClick={() => onPinMessage(pinMessage)}>{pinMessageButtonText}</button>
        </div>
      )
    }
  }

  const title = pipe(
    prop('title'),
    ifElse(
      item => length(item) > 34,
      item => `${item.slice(0, 34)}...`,
      item => item,
    )
  )(pinMessage);

  return (
    <div className='sc-pin--message' >
      {renderTicket()}
    </div>
  );
}

PinMessage.propTypes = {
  pinMessage: PropTypes.object,
  onPinMessage: PropTypes.func,
};

export default PinMessage;
