import '../styles/HomeRoute.scss';
import TopNavigation from './TopNavigationBar';
import PhotoList from './PhotoList';

const HomeRoute = ({ isFavPhotoExist }) => {
  return (
    <div className="home-route">
      <TopNavigation isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList />
    </div>
  );
};

export default HomeRoute;