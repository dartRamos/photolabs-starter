import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import { useState } from "react";

const PhotoListItem = (props) => {

  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  }

  return (
    <div className="photo-list__item">
      <img className="photo-list__image"src={props.photo.urls.regular} alt={`Photo ${props.photo.id}`} />
        
      <div className="photo-list__user-details">
        
        <img className="photo-list__user-profile"src={props.photo.user.profile} alt={`Photo of ${props.photo.user.name}`} />
            
          <div className="photo-list__user-info">
            {props.photo.user.name}
          </div>
            
            <div className="photo-list__user-location">
              {props.photo.location.city}, {props.photo.location.country}
            </div>

            <PhotoFavButton selected={selected} onClick={handleClick}/>
      
      </div>
      
    </div>
  )
};

export default PhotoListItem;
