import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MessageList from './MessageList';
import UserInput from './UserInput';
import Header from './Header';
import PinMessage from './PinMessage';

function ChatWindow(props) {
  const {
    isOpen,
    onClose,
    agentProfile,
    messageProfile,
    launcherProfile,
    showEmoji,
    fileUpload,
    messageList,
    onUserInputSubmit,
    onFilesSelected,
    pinMessage,
	  onPinMessage,
    placeholder,
    pinMessagePlaceholder,
    pinMessageButtonText,
    autoReplyNote,
    isAuth,
    onSignout,
    address,
    pinLeftButton
  } = props;

  const {
    teamName,
    imageUrl,
  } = agentProfile;

  const {
    closeIconUrl
  } = launcherProfile


  return (
    <div className={classNames('sc-chat-window', { 'opened': isOpen }, { 'closed': !isOpen })}>
      {isAuth ?
        <Header
          teamName="User: "
          imageUrl={imageUrl}
          address={address}
          closeIconUrl={closeIconUrl}
          onClose={onClose}
          onSignout={onSignout}
        />  
      : 
        <Header
          teamName={teamName}
          imageUrl={imageUrl}
          closeIconUrl={closeIconUrl}
          onClose={onClose}
        />
      }

      {pinMessage && 
       <PinMessage pinMessage={pinMessage} onPinMessage={onPinMessage} pinMessagePlaceholder={pinMessagePlaceholder} pinMessageButtonText={pinMessageButtonText} pinLeftButton={pinLeftButton}/>}

      <MessageList
        messages={messageList}
        messageProfile={messageProfile}
        autoReplyNote={autoReplyNote}
      />

      <UserInput
        onSubmit={onUserInputSubmit}
        onFilesSelected={onFilesSelected}
        showEmoji={showEmoji}
        fileUpload={fileUpload}
        placeholder={placeholder}
      />
    </div>
  );
}

ChatWindow.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  agentProfile: PropTypes.object.isRequired,
  showEmoji: PropTypes.bool,
  fileUpload: PropTypes.bool,
  messageList: PropTypes.array,
  onUserInputSubmit: PropTypes.func.isRequired,
  onFilesSelected: PropTypes.func,
  pinMessage: PropTypes.object,
  onPinMessage: PropTypes.func,
  placeholder: PropTypes.string,
};

export default ChatWindow;
