import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo, favorited, toggleFavorite, openModal }) => {

  const isFavorited = favorited.includes(photo.id) // Check if the photo is favorited

  const handleClick = (e) => {
    e.stopPropagation(); // Prevent the modal from opening when clicking the favorite button
    toggleFavorite(photo.id);
  }

  return (
    <div className="photo-list__item" onClick={openModal}> {/* Open modal on photo click */}
      <img className="photo-list__image"src={photo.urls.regular} alt={`Photo ${photo.id}`} />
        
      <div className="photo-list__user-details">
        
        <img className="photo-list__user-profile"src={photo.user.profile} alt={`Photo of ${photo.user.name}`} />
            
          <div className="photo-list__user-info">
            {photo.user.name}
          </div>
            
          <div className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </div>

          <PhotoFavButton selected={isFavorited} onClick={handleClick}/>
      
      </div>
      
    </div>
  )
};

export default PhotoListItem;
