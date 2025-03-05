import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';

const PhotoFavButton = ({ selected, onClick }) => {

  return (
    <div className="photo-list__fav-icon" onClick={onClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
