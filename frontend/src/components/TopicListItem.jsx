import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, photoDataByTopic}) => {

  const handleClick = () => {
    photoDataByTopic(topic.id);
  }

  return (
    <div className="topic-list__item">
      <span onClick={handleClick}>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
