import PropTypes from 'prop-types';
import s from './FriendsList.module.css';

export default function FriendListItem(props) {
  const { isOnline, name, avatar } = props;
  return (
    <li className={s.item}>
      <span className={`${s.status} ${isOnline ? s.online : s.offline}`}>
        {isOnline}
      </span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
