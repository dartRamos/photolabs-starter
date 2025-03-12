import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = ({ photos, topics, favorited, toggleFavorite, toggleModal, isModalOpen, isFavoritesOpen, setSelectedPhoto, photoDataByTopic, toggleFavoritesModal }) => {

  return (
    <div className="home-route">
      <TopNavigation 
      topics={topics} 
      favorited={favorited} 
      photoDataByTopic={photoDataByTopic}
      toggleFavoritesModal={toggleFavoritesModal}
      isFavoritesOpen={isFavoritesOpen}
      />
      
      <PhotoList 
      photos={photos} 
      favorited={favorited} 
      toggleFavorite={toggleFavorite}
      isModalOpen={isModalOpen} 
      toggleModal={toggleModal}
      setSelectedPhoto={setSelectedPhoto} />
    </div>
  );
};

export default HomeRoute;