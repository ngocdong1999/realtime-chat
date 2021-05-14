import React, { useState, useEffect } from 'react';
import './App.css';
import Message from './Message.js';
import { Button, FormControl,InputLabel,Input, IconButton} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  }, []);

  useEffect(() => {
    const username = prompt('Please enter your name');
    setUsername(username);
  }, [] );

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setInput('');
  }

  return (
    <div className="App">
      <img src="" />
      <h1>Web này lập ra chỉ để nhắn tin với Huyền 💗💗💗</h1>
      <h2>Welcome {username}!!!</h2>
      <form className="app__form">
        <FormControl className='app__formControl'>
          <InputLabel >Enter a message...</InputLabel>
          <Input className='app__input' placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className='app__iconButton' disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>
        
      </form>

      <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>

    </div>
  );
}

export default App;
