import HomeRoute from './routes/HomeRoute';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';
import { useState } from 'react';

const App = () => {

  const [ favorited, setFavorited ] = useState([]);

  const toggleFavorite = (photoId) => {
    if (favorited.includes(photoId)) {
      setFavorited(favorited.filter(id => id !== photoId))
    } else {
      setFavorited([...favorited, photoId])
    }
  }

  return (
    <div className="App">
      <HomeRoute 
        photos={photos}
        topics={topics}
        favorited={favorited}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default App;
