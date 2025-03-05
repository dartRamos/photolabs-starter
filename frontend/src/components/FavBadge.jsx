import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, favorited }) => {

  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} favorited={favorited}/>
    </div>
  ) 
};

export default FavBadge;
