import { FriendListItem } from "components/FriendListItem/FriendListItem"
import classNames from 'classnames';

import styles from 'components/FriendList/FriendList.module.css';

export const FriendList = ({ friends }) => {
    return <ul className = {classNames(styles.friendlist)}>
        <FriendListItem
        friends={friends}/>
        </ul>;
}

