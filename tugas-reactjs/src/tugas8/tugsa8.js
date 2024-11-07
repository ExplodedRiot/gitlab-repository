import React, { useState } from 'react';
import './tugas8.css';

function Tugas8() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setCount(count + 1);
  };

  React.useEffect(() => {
    if (count === 10) {
      setMessage('State count sudah lebih dari 10!!');
      setTimeout(() => {
        setCount(0);
        setMessage('');
      }, 2000);
    }
  }, [count]);

  return (
    <>
      <div className="outer-container left-align">
        <div className="App">
          <h1>Hi, Saya Alif</h1>
          <hr />
          <div className="container">
            <p className="left-text">Saya dari Batch 36 sudah berhasil menginstal React</p>
          </div>
        </div>
      </div>

      <div className="outer-container left-align">
        <div className="App">
          <h1>Data diri peserta kelas Reactjs</h1>
          <hr />
          <div className="container">
            <ul className="left-text">
              <li><strong>Nama Lengkap:</strong> Muhammad Alif Ananda</li>
              <li><strong>Email:</strong> alifananda66@gmail.com</li>
              <li><strong>Batch Pelatihan:</strong> 36</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="outer-container">
        <div className="App">
          <div className="container">
            <p className="count-display">{count}</p>
            {message && <p className="status-message">{message}</p>}
            <button onClick={handleClick}>Tambah</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tugas8;
