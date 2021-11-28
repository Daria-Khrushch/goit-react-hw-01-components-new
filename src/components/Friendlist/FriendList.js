import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

export default function Friendlist(props) {
  const { friends } = props;
  return (
    <ul className="friend-list">
      {friends.map(({ id, name, avatar, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            friendname={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
}

Friendlist.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
