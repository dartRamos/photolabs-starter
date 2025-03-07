import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import { useState } from 'react';

const PhotoDetailsModal = ({ closeModal, photo }) => {

  if(photo) {
    console.log(`Selected Photo:`, {
      id: photo.id,
      image: photo.urls.regular,
      username: photo.user.username,
      name: photo.user.name,
      location: `${photo.location.city}, ${photo.location.country}`
    })
  }

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
