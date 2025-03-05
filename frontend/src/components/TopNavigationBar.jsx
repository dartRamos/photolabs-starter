import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = ({ topics, favorited }) => {

  const isFavPhotoExist = favorited.length > 0; // Check if there are favorited photos

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics}/>
      <FavBadge isFavPhotoExist={isFavPhotoExist} favorited={favorited}/>
    </div>
  );
};

export default TopNavigation;