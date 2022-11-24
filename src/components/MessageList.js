import { prop } from 'ramda';
import React, { useRef, useEffect } from 'react';
import Message from './Messages';

const renderAutoReplyNote = (message, autoReplyNote) => {
  if (message) {
    if(message.author == "me"){
      return <div style ={{color:"darkgray", fontSize:12, textAlign:"center", marginTop:20}}>{autoReplyNote}</div>
    }
  }
}

function MessageList(props) {
  const {
    messages, messageProfile, autoReplyNote
  } = props;
  const element = useRef(null);
  const elementCurrent = prop('current', element);

  useEffect(() => {
    if (elementCurrent) {
      elementCurrent.scrollTop = elementCurrent.scrollHeight;
    }
  }, [props]);

  return (
    <div className="sc-message-list" ref={element}>
      {messages.map((message, i) => <Message message={message} messageProfile={messageProfile} key={i} />)}
      {renderAutoReplyNote(messages.at(-1), autoReplyNote)}
    </div>
  );
}

export default MessageList;
