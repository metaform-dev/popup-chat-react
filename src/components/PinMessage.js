import { pipe, prop, propOr, length, ifElse } from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../assets/image.png';

function PinMessage({ pinMessage, onPinMessage }) {
  const title = pipe(
    prop('title'),
    ifElse(
      item => length(item) > 34,
      item => `${item.slice(0, 34)}...`,
      item => item,
    )
  )(pinMessage);
  const text = pipe(
    prop('text'),
    ifElse(
      item => length(item) > 50,
      item => `${item.slice(0, 50)}...`,
      item => item,
    )
  )(pinMessage);

  return (
    <div className='sc-pin--message' >
      <div className='sc-pin--message--desc'>
        <div className='sc-pin--message--title'>{title}</div>
      </div>
      <button style={{float:"right", height:"40px", width:"120px", cursor:"pointer", color:"white", borderRadius:"10px", fontSize:"8px", fontWeight:700,fontFamily:'Ubuntu', backgroundColor:"#459BFF", border:"solid 0px"}} onClick={() => onPinMessage(pinMessage)}>+ Create Ticket</button>
    </div>
  );
}

PinMessage.propTypes = {
  pinMessage: PropTypes.object,
  onPinMessage: PropTypes.func,
};

export default PinMessage;
