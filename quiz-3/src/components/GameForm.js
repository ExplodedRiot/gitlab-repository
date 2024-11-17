import React, { useState, useEffect } from 'react';

const GameForm = ({ addGame, updateGame, currentGame, setCurrentGame }) => {
  const [gameData, setGameData] = useState({
    name: '',
    description: '',
    category: '',
    release_year: 2009,
    size: 0,
    price: 0,
    rating: 0,
    image_url: '',
    is_android_app: 0,
    is_ios_app: 0,
  });

  useEffect(() => {
    if (currentGame) {
      setGameData(currentGame); 
    }
  }, [currentGame]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setGameData({
      ...gameData,
      [name]: type === 'checkbox' ? checked ? 1 : 0 : value, 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (gameData.name === '' || gameData.description === '') {
      alert('Name and Description are required');
      return;
    }

    if (gameData.release_year < 2009 || gameData.release_year > 2024) {
      alert('Release year must be between 2009 and 2024');
      return;
    }

    if (gameData.size <= 0) {
      alert('Size must be greater than 0');
      return;
    }

    if (gameData.price < 0) {
      alert('Price must be at least 0');
      return;
    }

    if (gameData.rating < 0 || gameData.rating > 5) {
      alert('Rating must be between 0 and 5');
      return;
    }

    if (currentGame) {
      updateGame(gameData);
      setCurrentGame(null);
    } else {
      addGame(gameData);
    }

    setGameData({
      name: '',
      description: '',
      category: '',
      release_year: 2009,
      size: 0,
      price: 0,
      rating: 0,
      image_url: '',
      is_android_app: 0,
      is_ios_app: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border border-gray-300 rounded">
      <h2 className="text-xl font-bold mb-4">{currentGame ? 'Update Game' : 'Add New Game'}</h2>
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Game Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={gameData.name}
          onChange={handleChange}
          placeholder="Enter game name"
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          name="description"
          value={gameData.description}
          onChange={handleChange}
          placeholder="Enter description"
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
        <input
          type="text"
          id="category"
          name="category"
          value={gameData.category}
          onChange={handleChange}
          placeholder="Enter game category"
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="release_year" className="block text-sm font-medium text-gray-700">Release Year</label>
        <input
          type="number"
          id="release_year"
          name="release_year"
          value={gameData.release_year}
          onChange={handleChange}
          placeholder="Enter release year (2009 - 2024)"
          min="2009"
          max="2024"
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="size" className="block text-sm font-medium text-gray-700">Size (MB)</label>
        <input
          type="number"
          id="size"
          name="size"
          value={gameData.size}
          onChange={handleChange}
          placeholder="Enter size in MB"
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          value={gameData.price}
          onChange={handleChange}
          placeholder="Enter price"
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating (0-5)</label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={gameData.rating}
          onChange={handleChange}
          placeholder="Enter rating (0-5)"
          min="0"
          max="5"
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="image_url" className="block text-sm font-medium text-gray-700">Image URL</label>
        <input
          type="url"
          id="image_url"
          name="image_url"
          value={gameData.image_url}
          onChange={handleChange}
          placeholder="Enter image URL"
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Android App</label>
        <input
          type="checkbox"
          id="is_android_app"
          name="is_android_app"
          checked={gameData.is_android_app === 1}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">iOS App</label>
        <input
          type="checkbox"
          id="is_ios_app"
          name="is_ios_app"
          checked={gameData.is_ios_app === 1}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded"
      >
        {currentGame ? 'Update Game' : 'Add Game'}
      </button>
    </form>
  );
};

export default GameForm;
