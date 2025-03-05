import '../styles/TopNavigationBar.scss'
import FavIcon from './FavIcon';
import TopicList from './TopicList';

const TopNavigation = (props) => {


  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <FavIcon selected={props.selected} />
    </div>
  )
};

export default TopNavigation;
