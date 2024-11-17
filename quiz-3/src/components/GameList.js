import React from 'react';

const GameList = ({ games, setCurrentGame, deleteGame }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mt-4">Manage Data</h2>
      <table className="min-w-full divide-y divide-gray-200 mt-2">
        <thead className="bg-gray-50">
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Kategori</th>
            <th>Deskripsi</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Release Year</th>
            <th>Size</th>
            <th>Android</th>
            <th>iOS</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {games.map((game, index) => (
            <tr key={game.id}>
              <td>{index + 1}</td>
              <td>{game.name}</td>
              <td>{game.category}</td>
              <td>{game.description}</td>
              <td>{game.price}</td>
              <td>{game.rating}</td>
              <td>{game.releaseYear}</td>
              <td>{game.size}</td>
              <td>{game.isAndroidApp ? 'Yes' : 'No'}</td>
              <td>{game.isIosApp ? 'Yes' : 'No'}</td>
              <td>
                <button onClick={() => setCurrentGame(game)}>Edit</button>
                <button onClick={() => deleteGame(game.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GameList;
