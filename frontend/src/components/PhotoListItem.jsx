import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import { useState } from "react";

const PhotoListItem = ({ photo, favorited, toggleFavorite }) => {

  const isFavorited = favorited.includes(photo.id)

  const handleClick = () => {
    toggleFavorite(photo.id);
  }

  return (
    <div className="photo-list__item">
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
