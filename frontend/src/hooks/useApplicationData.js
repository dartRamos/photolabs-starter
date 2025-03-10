import { useReducer, useEffect } from "react";

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

    case ACTIONS.SET_PHOTO_DATA:
      return {...state, photoData: action.photoData};

    case ACTIONS.SET_TOPIC_DATA:
      return {...state, topicData: action.topicData}

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
      selectedPhoto: null,
      photoData: [],
      topicData: []
    }
  )

  useEffect(() => {

    // Fetch photo data from backend server
    fetch('http://localhost:8001/api/photos')
    .then(res => res.json())
    .then(data => dispatch({
      type: ACTIONS.SET_PHOTO_DATA,
      photoData: data
    }))

    // Fetch topic data from backend server
    fetch('http://localhost:8001/api/topics')
    .then(res => res.json())
    .then(data => dispatch({
      type: ACTIONS.SET_TOPIC_DATA,
      topicData: data
    }))
  }, [])

  

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