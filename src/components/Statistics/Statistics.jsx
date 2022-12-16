import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
    return <section>
        {title && (<h2>{title}</h2>)}
        <ul>
            {stats.map(({ id, label, percentage }) =>(
                <li key={id} style={{
                    backgroundColor: getRandomHexColor(),
                }}>
                    <span>{label}</span>
                    <span>{percentage}%</span>
                </li>))}
        </ul>
</section>;
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
         label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    })),
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}