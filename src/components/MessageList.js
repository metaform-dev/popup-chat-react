import { prop } from 'ramda';
import React, { useRef, useEffect } from 'react';
import Message from './Messages';

const renderreplyNote = (message) => {
  if (message) {
    if(message.author == "me"){
      return <div style ={{color:"darkgray", fontSize:12, textAlign:"center", marginTop:20}}>--- We will reply to you as soon as possible ---</div>
    }
  }
}

function MessageList(props) {
  const element = useRef(null);
  const elementCurrent = prop('current', element);

  useEffect(() => {
    if (elementCurrent) {
      elementCurrent.scrollTop = elementCurrent.scrollHeight;
    }
  }, [props]);

  return (
    <div className="sc-message-list" ref={element}>
      {props.messages.map((message, i) => <Message message={message} key={i} />)}
      {renderreplyNote(props.messages.at(-1))}
    </div>
  );
}

export default MessageList;
