import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = ({ topics, favorited, photoDataByTopic, toggleFavoritesModal, isFavoritesOpen  }) => {

  const isFavPhotoExist = favorited.length > 0; // Check if there are favorited photos

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList 
      topics={topics}
      photoDataByTopic={photoDataByTopic}
      />
      <FavBadge 
      isFavPhotoExist={isFavPhotoExist} 
      favorited={favorited}
      toggleFavoritesModal={toggleFavoritesModal}
      isFavoritesOpen={isFavoritesOpen}
      />
    </div>
  );
};

export default TopNavigation;