import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from 'components/Profile/Profile.module.css';

export const Profile = (props) => {
    const { username, tag, location, avatar, stats } = props;
    const { followers, views, likes } = stats;
    return <div className = {classNames(styles.profile)}>
        <div className = {classNames(styles.description)}>
            <img
                src={avatar}
                alt={username}
                className = {classNames(styles.avatar)}
            />
            <p className = {classNames(styles.name)}>{username}</p>
            <p className = {classNames(styles.tag)}>@{tag}</p>
            <p className = {classNames(styles.location)}>{location}</p>
        </div>

        <ul className = {classNames(styles.stats)}>
            <li>
                <span className = {classNames(styles.label)}>Followers</span>
                <span className = {classNames(styles.quantity)}>{followers}</span>
            </li>
            <li>
                <span className = {classNames(styles.label)}>Views</span>
                <span className = {classNames(styles.quantity)}>{views}</span>
            </li>
            <li>
                <span className = {classNames(styles.label)}>Likes</span>
                <span className = {classNames(styles.quantity)}>{likes}</span>
            </li>
        </ul>
    </div>;
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number.isRequired),
}