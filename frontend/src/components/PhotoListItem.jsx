import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo, favorited, toggleFavorite, toggleModal, setSelectedPhoto }) => {

  const isFavorited = favorited.includes(photo.id) // Check if the photo is favorited

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // Prevent the modal from opening when clicking the favorite button
    toggleFavorite(photo.id);
  }

  const handlePhotoClick = () => {
    setSelectedPhoto(photo);
    toggleModal();
;  }

  return (
    <div className="photo-list__item" onClick={handlePhotoClick}> {/* Open modal with selected photo */}
      <PhotoFavButton 
      key={photo.id}
      selected={isFavorited} 
      onClick={handleFavoriteClick}/>
      <img className="photo-list__image" src={photo.urls.regular} alt={`Photo ${photo.id}`} />
        
      <div className="photo-list__user-details">
        
        <img className="photo-list__user-profile"src={photo.user.profile} alt={`Photo of ${photo.user.name}`} />
            
          <div className="photo-list__user-info">
            {photo.user.name}
          </div>
            
          <div className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </div>
      
      </div>
      
    </div>
  )
};

export default PhotoListItem;
