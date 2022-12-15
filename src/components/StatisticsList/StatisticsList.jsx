import PropTypes from 'prop-types';

export const StatisticsList = ({ items, title }) => {
    // console.log({ items, title })
    return <section>
        <h2>{title}</h2>
        <ul>
            {items.map(item =>(
            <li key={item.id}>

            </li>))}

        </ul>
</section>;
}

// Profile.propTypes = {
//     username: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//     stats: PropTypes.objectOf(PropTypes.number.isRequired),
// }