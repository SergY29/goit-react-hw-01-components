export const Profile = (props) => {
    const { username, tag, location, avatar, stats } = props;
    const { followers, views, likes } = stats;
    return <div>
        <div >
            <img
                src={avatar}
                alt={username}
            />
            <p>{username}</p>
            <p>@{tag}</p>
            <p >{location}</p>
        </div>

        <ul >
            <li>
                <span>Followers</span>
                <span>{followers}</span>
            </li>
            <li>
                <span>Views</span>
                <span>{views}</span>
            </li>
            <li>
                <span>Likes</span>
                <span>{likes}</span>
            </li>
        </ul>
    </div>;
}