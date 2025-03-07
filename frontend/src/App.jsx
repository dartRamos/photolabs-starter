import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';
import { useState } from 'react';

const App = () => {

  const [ favorited, setFavorited ] = useState([]); // State for favorited photos
  
  const [ isModalOpen, setIsModalOpen ] = useState(false); // State for modal visibility

  const [ selectedPhoto, setSelecetedPhoto ] = useState(null); // State for selected photo

  // Toggle favorite status of a photo
  const toggleFavorite = (photoId) => {
    if (favorited.includes(photoId)) {
      setFavorited(favorited.filter(id => id !== photoId))
    } else {
      setFavorited([...favorited, photoId])
    }
  }

  // Open the modal & set selected photo
  const openModal = (photo) => {
    setSelecetedPhoto(photo)
    setIsModalOpen(true);
  };

  // Close the modal & clear selected photo
  const closeModal = () => {
    setIsModalOpen(false)
    setSelecetedPhoto(null)
  };

  return (
    <div className="App">
      <HomeRoute 
        photos={photos}
        topics={topics}
        favorited={favorited}
        toggleFavorite={toggleFavorite}
        openModal={openModal}
      />
      {/* Render the modal if isModalOpen is true */}
      {isModalOpen && <PhotoDetailsModal 
      closeModal={closeModal}
      photo={selectedPhoto}
      favorited={favorited}
      toggleFavorite={toggleFavorite}
      />}
    </div>
  );
};

export default App;
