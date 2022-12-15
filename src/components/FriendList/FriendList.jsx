import {FriendListItem} from "components/FriendListItem/FriendListItem"

export const FriendList = ({ friends }) => {
    return <ul>
        <FriendListItem
        friends={friends}/>
        </ul>;
}

