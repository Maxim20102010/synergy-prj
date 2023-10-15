// import React, { useState } from 'react'
// import './Chat.css'
// export default function Chat() {
// const [message, setMessage] = useState("")
// const [messages, setMessages] = useState([])
// const handleMessageChange = (e) => {
//   setMessage(e.target.value)
// }
// const handleSubmit = (e) => {
//   e.preventDefault()
//   setMessages(...messages, message)
//       setMessage("")
// }
// const handleDelete = (index) => {
//   const newMessages = [...messages]
//   newMessages.splice(index, 1)
//   setMessages(newMessages)
// }
//    return (
//     <div>
//       <h2>Здесь вы можете написать сообщение в чат</h2>
//       <form onSubmit={handleSubmit} action="">
//         <input placeholder='Введите сообщение'  className = 'inp-chat' onChange={handleMessageChange} value={message} type="text" />
//         <button className='btn-chat'>Save</button>
//       </form>
//             <ul>
//         {messages.map((msg, index) => (
//           <li key={index}>
//             {msg}
//             <button onClick={() => handleDelete(index)}>Удалить</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

import React, { useState } from 'react';
import './Chat.css'
const App = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, message]);
    setMessage('');
  };

  const handleDelete = (index) => {
    const newMessages = [...messages];
    newMessages.splice(index, 1);
    setMessages(newMessages);
  };

  return (
    <div>
    <h2 className='chat-h'>Здесь вы можете написать сообщение в чат</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder='Введите сообщение' className='inp-chat' type="text" value={message} onChange={handleMessageChange} />
        <button className='btn-chat' type="submit">Отправить</button>
      </form>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>
            {msg}
            <button className='btn-chat' onClick={() => handleDelete(index)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
