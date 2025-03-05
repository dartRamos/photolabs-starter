import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = ({ photos, topics, favorited, toggleFavorite }) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} favorited={favorited}/>
      <PhotoList photos={photos} favorited={favorited} toggleFavorite={toggleFavorite}/>
    </div>
  );
};

export default HomeRoute;