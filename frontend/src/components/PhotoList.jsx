import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, favorited, toggleFavorite }) => {
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem key={photo.id} photo={photo} favorited={favorited} toggleFavorite={toggleFavorite}/>
      ))}
    </ul>
  );
};

export default PhotoList;
