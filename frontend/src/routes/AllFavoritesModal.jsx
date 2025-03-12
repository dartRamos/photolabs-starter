import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';

const AllFavoritesModal = ({ toggleFavoritesModal, favorited, photos }) => {
  
  // Access all favorited photos
  const favoritedPhotos = photos.filter(photo => favorited.includes(photo.id));
  

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={toggleFavoritesModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

        <div className="photo-details-modal__images">
        {/* Use PhotoList to display favorited photos */}
        <h1>Your Favorited Photos</h1>
        <PhotoList 
          photos={favoritedPhotos}
          favorited={favorited}
        />
      </div>
    </div>
  )
};

export default AllFavoritesModal;
