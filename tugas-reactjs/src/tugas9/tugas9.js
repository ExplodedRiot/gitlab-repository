import React from 'react';
import './tugas9.css'; 

const Tugas9 = () => {
  const data = [
    { no: 1, nama: 'John', mataKuliah: 'Algoritma', nilai: 80, indexNilai: 'A' },
    { no: 2, nama: 'Doe', mataKuliah: 'Matematika', nilai: 70, indexNilai: 'B' },
    { no: 3, nama: 'Frank', mataKuliah: 'Kalkulus', nilai: 60, indexNilai: 'C' },
    { no: 4, nama: 'Jason', mataKuliah: 'Basis data', nilai: 90, indexNilai: 'A' },
  ];

  const handleEdit = (id) => {
    console.log(`Editing student with ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Deleting student with ID: ${id}`);
  };

  return (
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
                  <button 
                    className="edit-btn"
                    onClick={() => handleEdit(item.no)}  
                  >
                    Edit
                  </button>
                  <button 
                    className="delete-btn"
                    onClick={() => handleDelete(item.no)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tugas9;
