import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/hello')
      .then(response => response.text())
      .then(message => setMessage(message));
  }, []);

  return <div>{message}</div>;
}

export default App;
