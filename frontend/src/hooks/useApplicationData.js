import { useReducer } from "react";

// Action types
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

function reducer(state, action) {
  switch (action.type) {

    // Update favorited state to include new photo
    case ACTIONS.FAV_PHOTO_ADDED:
      return {...state, favorited: [...state.favorited, action.photoId]};

    // Update favorited state to remove photo
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {...state, favorited: state.favorited.filter(id => id !== action.photoId)};
    
    // Update selectedPhoto state when photo is clicked
    case ACTIONS.SELECT_PHOTO:
      return {...state, selectedPhoto: action.photo};

    // Update isModalOpen state to open/close modal
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {...state, isModalOpen: !state.isModalOpen};

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}



const useApplicationData = () => {

  // Creates a state variable that contains all states
  const [state, dispatch] = useReducer(reducer,
    {
      favorited: [],
      isModalOpen: false,
      selectedPhoto: null
    }
  )

  // Function to add/remove photo from favorites
  const toggleFavorite = (photoId) => {
    dispatch({
      type: state.favorited.includes(photoId)
      ? ACTIONS.FAV_PHOTO_REMOVED
      : ACTIONS.FAV_PHOTO_ADDED,
      photoId
    });
  }

  // Function to open/close modal
  const toggleModal = () => {
    dispatch({
      type: ACTIONS.DISPLAY_PHOTO_DETAILS
    })
  };

  // Function to set photo when clicked
  const setSelectedPhoto = (photo) => {
    dispatch({
      type: ACTIONS.SELECT_PHOTO,
      photo
    })
  };


  return {
    state,
    toggleFavorite,
    toggleModal,
    setSelectedPhoto
  };
}

export default useApplicationData;