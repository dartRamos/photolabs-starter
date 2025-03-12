import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, toggleFavoritesModal, isFavoritesOpen  }) => {

  return (
    <div className='fav-badge' onClick={toggleFavoritesModal}>
      <FavIcon 
      displayAlert={!!isFavPhotoExist} 
      toggleFavoritesModal={toggleFavoritesModal}
      isFavoritesOpen={isFavoritesOpen}
      />
    </div>
  ) 
};

export default FavBadge;
