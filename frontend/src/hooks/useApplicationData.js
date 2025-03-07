import { useState } from "react";

const useApplicationData = () => {

  const [ favorited, setFavorited ] = useState([]); // State for favorited photos

  const [ isModalOpen, setIsModalOpen ] = useState(false); // State for modal visibility

  const [ selectedPhoto, setSelecetedPhoto ] = useState(null); // State for selected photo

  const toggleFavorite = (photoId) => {
    if (favorited.includes(photoId)) {
      setFavorited(favorited.filter(id => id !== photoId))
    } else {
      setFavorited([...favorited, photoId])
    }
  }

  const openModal = (photo) => {
    setSelecetedPhoto(photo)
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false)
    setSelecetedPhoto(null)
  };

  const state = {
    isModalOpen,
    selectedPhoto,
    openModal,
    closeModal,
    toggleFavorite
  }

  return state;
}

export default useApplicationData;