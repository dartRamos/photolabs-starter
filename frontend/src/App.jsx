import HomeRoute from './components/HomeRoute';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';

const App = () => {
  const isFavPhotoExist = false;

  return (
    <div className="App">
      <HomeRoute 
        photos={photos}
        topics={topics}
        isFavPhotoExist={isFavPhotoExist}
      />
    </div>
  );
};

export default App;
