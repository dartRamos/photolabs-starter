import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = ({ photos, topics, favorited, toggleFavorite, toggleModal, isModalOpen, setSelectedPhoto }) => {
  return (
    <div className="home-route">
      <TopNavigation 
      topics={topics} 
      favorited={favorited} 
      toggleFavorite={toggleFavorite}/>
      
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