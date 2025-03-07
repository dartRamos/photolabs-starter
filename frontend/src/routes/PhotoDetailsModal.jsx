import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = ({ closeModal, photo, favorited, toggleFavorite }) => {

  // Access the similar_photos property
  const similarPhotos = photo.similar_photos ? Object.values(photo.similar_photos) : [];
  

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      {/* Selected photo section */}
      <div className="photo-details-modal__images">
      <PhotoFavButton 
          selected={favorited.includes(photo.id)} 
          onClick={() => toggleFavorite(photo.id)} 
        />
        <img
          className="photo-details-modal__image"
          src={photo.urls.full}
          alt={`Selected Photo ${photo.id}`}
        />
        <div className="photo-details-modal__top-bar">
          <section className="photo-details-modal__photographer-details">
            <img
              className="photo-details-modal__photographer-profile"
              src={photo.user.profile}
              alt={`Profile of ${photo.user.name}`}
            />
            <section className="photo-details-modal__photographer-info">
              <div>{photo.user.name}</div>
              <div className="photo-details-modal__photographer-location">
                {photo.location.city}, {photo.location.country}
              </div>
            </section>
          </section>
        </div>
      </div>

      {/* Similar photos section */}
      <p className="photo-details-modal__header">Similar Photos</p>
      <div className="photo-details-modal__images">
        {/* Use PhotoList to display similar photos */}
        <PhotoList 
          photos={similarPhotos}
          favorited={favorited}
          toggleFavorite={toggleFavorite}
        />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
