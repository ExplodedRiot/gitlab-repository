import React from 'react';

const Tugas10 = () => {
  const data = [
    { no: 1, nama: 'miu', mataKuliah: 'kagemani', nilai: 10, indexNilai: 'E' },
    { no: 2, nama: 'kahirin', mataKuliah: 'manjemen', nilai: 100, indexNilai: 'A' },
    { no: 3, nama: 'barui', mataKuliah: 'pendidik', nilai: 9, indexNilai: 'E' },
    { no: 4, nama: 'Ihsan', mataKuliah: 'React', nilai: 90, indexNilai: 'A' },
    { no: 5, nama: 'naruto', mataKuliah: 'kunai', nilai: 0, indexNilai: 'E' },
    { no: 6, nama: 'ping', mataKuliah: 'desain rumah', nilai: 0, indexNilai: 'E' },
    { no: 7, nama: 'Muhammad Ihsan Rahmatullah', mataKuliah: 'JS', nilai: 1, indexNilai: 'E' },
  ];

  const handleIndexScore = (score) => {
    if (score >= 80) return 'A';
    if (score >= 70 && score < 80) return 'B';
    if (score >= 60 && score < 70) return 'C';
    if (score >= 50 && score < 60) return 'D';
    return 'E'; 
  };

  console.log('Tugas10 Component Rendered');  

  return (
    <div className="App">
      <table className="min-w-full bg-white border">
        <thead className="bg-purple-500 text-white">
          <tr>
            <th className="w-1/12 py-2 px-4">NO</th>
            <th className="w-2/12 py-2 px-4">NAMA</th>
            <th className="w-3/12 py-2 px-4">MATA KULIAH</th>
            <th className="w-1/12 py-2 px-4">NILAI</th>
            <th className="w-2/12 py-2 px-4">INDEX NILAI</th>
            <th className="w-3/12 py-2 px-4">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.no} className="border-t">
              <td className="py-2 px-4">{item.no}</td>
              <td className="py-2 px-4">{item.nama}</td>
              <td className="py-2 px-4">{item.mataKuliah}</td>
              <td className="py-2 px-4">{item.nilai}</td>
              <td className="py-2 px-4">
                {handleIndexScore(item.nilai)}
              </td>
              <td className="py-2 px-4">
                <button className="bg-gray-300 text-black py-1 px-3 rounded mr-2 hover:bg-gray-400">Edit</button>
                <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tugas10;
