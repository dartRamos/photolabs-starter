import PhotoListItem from './components/PhotoListItem';
import PhotoFavButton from './components/PhotoFavButton';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `/profile-1.jpg`,
};

const App = () => {
  const photos = new Array(3).fill(sampleDataForPhotoListItem)

  return (
    <div className="App">
      {photos.map((photo, index) => (
        <PhotoListItem key={index} photo={photo}>
        </PhotoListItem>
      ))}
    </div>
  )
}

export default App;