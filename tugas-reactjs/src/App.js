import React, { useState } from 'react';
import './App.css';

const App = () => {
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

  const data = [
    { no: 1, nama: 'John', mataKuliah: 'Algoritma', nilai: 80, indexNilai: 'A' },
    { no: 2, nama: 'Doe', mataKuliah: 'Matematika', nilai: 70, indexNilai: 'B' },
    { no: 3, nama: 'Frank', mataKuliah: 'Kalkulus', nilai: 60, indexNilai: 'C' },
    { no: 4, nama: 'Jason', mataKuliah: 'Basis data', nilai: 90, indexNilai: 'A' },
  ];

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

      <div className="outer-container">
        <div className="App">
          <h1>Data Nilai Mahasiswa</h1>
          <table>
            <thead>
              <tr>
                <th>NO</th>
                <th>NAMA</th>
                <th>MATA KULIAH</th>
                <th>NILAI</th>
                <th>INDEX NILAI</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.no}>
                  <td>{item.no}</td>
                  <td>{item.nama}</td>
                  <td>{item.mataKuliah}</td>
                  <td>{item.nilai}</td>
                  <td>{item.indexNilai}</td>
                  <td>
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default App;
