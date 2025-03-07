import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = ({ photos, topics, favorited, toggleFavorite, openModal }) => {
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
      openModal={openModal} />
    </div>
  );
};

export default HomeRoute;