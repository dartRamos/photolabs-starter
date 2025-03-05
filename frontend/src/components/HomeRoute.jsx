import '../styles/HomeRoute.scss';
import TopNavigation from './TopNavigationBar';
import PhotoList from './PhotoList';

const HomeRoute = ({ photos, topics, isFavPhotoExist }) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList photos={photos}/>
    </div>
  );
};

export default HomeRoute;