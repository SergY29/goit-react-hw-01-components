import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from 'components/FriendListItem/FriendListItem.module.css';

export const FriendListItem = ({ friends } ) => {
     return friends.map(({id, avatar, name, isOnline}) => (
        <li key={id} className = {classNames(styles.item)}>
            <span className = {classNames(isOnline ? styles.online : styles.offline )}></span>
            <img className = {classNames(styles.avatar)} src={avatar} alt="User avatar" width="48" />
            <p className = {classNames(styles.name)}>{name}</p>
        </li>))
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    })),
}