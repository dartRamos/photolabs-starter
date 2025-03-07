import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';
import { useState } from 'react';

const App = () => {

  const [ favorited, setFavorited ] = useState([]); // State for favorited photos
  
  const [ isModalOpen, setIsModalOpen ] = useState(false); // State for modal visibility

  // Toggle favorite status of a photo
  const toggleFavorite = (photoId) => {
    if (favorited.includes(photoId)) {
      setFavorited(favorited.filter(id => id !== photoId))
    } else {
      setFavorited([...favorited, photoId])
    }
  }

  // Open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false)
  };

  return (
    <div className="App">
      <HomeRoute 
        photos={photos}
        topics={topics}
        favorited={favorited}
        toggleFavorite={toggleFavorite}
        openModal={openModal}
        closeModal={closeModal}
      />
      {/* Render the modal if isModalOpen is true */}
      {isModalOpen && <PhotoDetailsModal 
      closeModal={closeModal}
      />}
    </div>
  );
};

export default App;
