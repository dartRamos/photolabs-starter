import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import AllFavoritesModal from './routes/AllFavoritesModal';
import './App.scss';
import useApplicationData from './hooks/useApplicationData';

const App = () => {

  // Use the useApplicationData hook to get state and actions
  const { state, toggleFavorite, toggleModal, setSelectedPhoto, photoDataByTopic, toggleFavoritesModal } = useApplicationData();

  const { isModalOpen, favorited, selectedPhoto, photoData, topicData, isFavoritesOpen } = state;

  return (
    <div className="App">
      <HomeRoute 
        photos={photoData}
        topics={topicData}
        favorited={favorited}
        toggleFavorite={toggleFavorite}
        isModalOpen={isModalOpen}
        isFavoritesOpen={isFavoritesOpen}
        toggleModal={toggleModal}
        toggleFavoritesModal={toggleFavoritesModal}
        setSelectedPhoto={setSelectedPhoto}
        photoDataByTopic={photoDataByTopic}
      />
      {/* Render the modal if isModalOpen is true */}
      {isModalOpen && selectedPhoto && (
      <PhotoDetailsModal 
      toggleModal={toggleModal}
      photo={selectedPhoto}
      favorited={favorited}
      toggleFavorite={toggleFavorite}
      />)}
      {/* Render the favorites modal if isFavoritesOpen is true */}
      {isFavoritesOpen && (
      <AllFavoritesModal 
      toggleFavoritesModal={toggleFavoritesModal}
      favorited={favorited}
      photos={photoData}
      />
      )}
    </div>
  );
};

export default App;
