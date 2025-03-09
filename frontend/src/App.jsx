import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';
import useApplicationData from './hooks/useApplicationData';

const App = () => {

  // Use the useApplicationData hook to get state and actions
  const { state, toggleFavorite, toggleModal, setSelectedPhoto } = useApplicationData();

  const { isModalOpen, favorited, selectedPhoto } = state;

  return (
    <div className="App">
      <HomeRoute 
        photos={photos}
        topics={topics}
        favorited={favorited}
        toggleFavorite={toggleFavorite}
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        setSelectedPhoto={setSelectedPhoto}
      />
      {/* Render the modal if isModalOpen is true */}
      {isModalOpen && selectedPhoto && (
      <PhotoDetailsModal 
      toggleModal={toggleModal}
      photo={selectedPhoto}
      favorited={favorited}
      toggleFavorite={toggleFavorite}
      />)}
    </div>
  );
};

export default App;
