import React, { useState, useEffect } from 'react'; 
import './tugas8.css'; 

const Tugas8 = () => {  
  const [count, setCount] = useState(0);  
  const [message, setMessage] = useState('');  

  const handleClick = () => {
    setCount(count + 1);  
  };

  useEffect(() => {
    if (count === 10) {
      setMessage('State count sudah lebih dari 10!!'); 
      setTimeout(() => {
        setCount(0);  
        setMessage(''); 
      }, 2000);
    }
  }, [count]);  

  return (
    <div className="outer-container">
      <div className="App">
        <div className="container">
          <p className="count-display">{count}</p> 
          {message && <p className="status-message">{message}</p>} 
          <button onClick={handleClick}>Tambah</button> 
        </div>
      </div>
    </div>
  );
};

export default Tugas8; 
