import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  return (
    <article className="photo-list-item">
      <img className="photo-list-item-regular"src={props.imageSource} alt={`Photo ${props.id}`} />
      
      <div className="profile-list-item-user">
        <img className="user-profile-picture"src={props.profile} alt={`Photo of ${props.username}`} />
        <p className="user-name">{props.username}</p>
        <p className="user-location">{props.city}, {props.country}</p>
      </div>
      
    </article>
  )
};

export default PhotoListItem;
