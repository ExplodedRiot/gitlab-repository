import React, { useState, useEffect } from 'react';

const Tugas11 = () => {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: '', course: '', grade: 0 });

  useEffect(() => {
    fetch('https://backendexample.sanbercloud.com/api/student-scores')
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://backendexample.sanbercloud.com/api/student-scores/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setStudents(students.filter(student => student.id !== id));
      } else {
        console.error('Failed to delete student score');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newStudent = {
      name: form.name,
      course: form.course,
      score: parseInt(form.grade),
    };

    try {
      const response = await fetch('https://backendexample.sanbercloud.com/api/student-scores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newStudent),
      });
      if (response.ok) {
        const result = await response.json();
        setStudents([...students, result]); 
        setForm({ name: '', course: '', grade: 0 });  
      } else {
        console.error('Failed to create new student score');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getGradeIndex = (grade) => {
    if (grade >= 80) return 'A';
    if (grade >= 70 && grade < 80) return 'B';
    if (grade >= 60 && grade < 70) return 'C';
    if (grade >= 50 && grade < 60) return 'D';
    return 'E';
  };

  return (
    <div className="p-4">
      <table className="min-w-full bg-white border mb-4">
        <thead className="bg-purple-500 text-white">
          <tr>
            <th className="py-2 px-4">NO</th>
            <th className="py-2 px-4">NAMA</th>
            <th className="py-2 px-4">MATA KULIAH</th>
            <th className="py-2 px-4">NILAI</th>
            <th className="py-2 px-4">INDEX NILAI</th>
            <th className="py-2 px-4">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id} className="text-center border-b">
              <td className="py-2 px-4">{index + 1}</td>
              <td className="py-2 px-4">{student.name}</td>
              <td className="py-2 px-4">{student.course}</td>
              <td className="py-2 px-4">{student.score}</td>
              <td className="py-2 px-4">{getGradeIndex(student.score)}</td>
              <td className="py-2 px-4">
                <button
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                  onClick={() => handleDelete(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="mb-1">Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="border py-2 px-3"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Mata Kuliah:</label>
          <input
            type="text"
            name="course"
            value={form.course}
            onChange={handleChange}
            className="border py-2 px-3"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Nilai:</label>
          <input
            type="number"
            name="grade"
            value={form.grade}
            onChange={handleChange}
            className="border py-2 px-3"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Tugas11;
