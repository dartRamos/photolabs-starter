import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';

const PhotoFavButton = (props) => {

  return (
    <div className="photo-list__fav-icon" onClick={props.onClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={props.selected} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
