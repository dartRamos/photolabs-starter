import PhotoList from './components/PhotoList';
import './App.scss';

const App = () => (
  <div className="App">
    {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
   <PhotoList/>
  </div>
)
