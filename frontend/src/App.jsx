import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';
import useApplicationData from './hooks/useApplicationData';

const App = () => {

  // Use the useApplicationData hook to get state and actions
  const { state, toggleFavorite, toggleModal, setSelectedPhoto, photoDataByTopic } = useApplicationData();

  const { isModalOpen, favorited, selectedPhoto, photoData, topicData } = state;

  return (
    <div className="App">
      <HomeRoute 
        photos={photoData}
        topics={topicData}
        favorited={favorited}
        toggleFavorite={toggleFavorite}
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
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
    </div>
  );
};

export default App;
