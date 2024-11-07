import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="outer-container">
        <div className="App">
          <h1>Hi, Saya Alif</h1>
          <hr />
          <div className="container">
            <p>Saya dari Batch 36 sudah berhasil menginstal React</p>
          </div>
        </div>
      </div>

      <div className="outer-container">
        <div className="App">
          <h1>Data diri peserta kelas Reactjs</h1>
          <hr />
          <div className="container">
            <ul>
              <li><strong>Nama Lengkap:</strong> Muhammad Alif Ananda</li>
              <li><strong>Email:</strong> alifananda66@gmail.com</li>
              <li><strong>Batch Pelatihan:</strong> 36</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
