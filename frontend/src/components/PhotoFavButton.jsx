// import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { useState } from 'react';
import FavIcon from './FavIcon';

const PhotoFavButton = () => {

  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isSelected} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
