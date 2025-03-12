import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import TopNavigation from "./TopNavigationBar";

const PhotoList = ({ photos, favorited, toggleFavorite, toggleModal, isModalOpen, setSelectedPhoto }) => {
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem 
          key={photo.id} 
          photo={photo} 
          favorited={favorited}
          toggleFavorite={toggleFavorite}
          isModalOpen={isModalOpen}
          toggleModal={toggleModal}
          setSelectedPhoto={setSelectedPhoto} 
        />
      ))}
    </ul>
  );
};

export default PhotoList;