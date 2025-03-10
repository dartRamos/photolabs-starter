import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics,photoDataByTopic }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(topic => (
        <TopicListItem 
        key={topic.id} 
        topic={topic}
        photoDataByTopic={photoDataByTopic}
        />
      ))}
    </div>
  );
};

export default TopicList;
