import PropTypes from 'prop-types';

export default function FriendListItem(props) {
  const { avatar, friendname, isOnline } = props;
  return (
    <li className={props.id}>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt={friendname} width="48" />
      <p className="name">{friendname}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
