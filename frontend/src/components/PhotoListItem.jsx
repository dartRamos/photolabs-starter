import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  return (
    <div className="photo-list__item">
      <img className="photo-list__image"src={props.photo.imageSource} alt={`Photo ${props.photo.id}`} />
        
      <div className="photo-list__user-details">
        
        <img className="photo-list__user-profile"src={props.photo.profile} alt={`Photo of ${props.photo.username}`} />
            
          <div className="photo-list__user-info">
            {props.photo.username}
          </div>
            
            <div className="photo-list__user-location">
              {props.photo.location.city}, {props.photo.location.country}
            </div>

            <PhotoFavButton />
      
      </div>
      
    </div>
  )
};

export default PhotoListItem;
