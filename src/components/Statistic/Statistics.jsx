import PropTypes from 'prop-types';

export const Statistics = (props) => {
    const { label, percentage } = props;
    return <li>
                <span>{label}</span>
                <span>{percentage}%</span>
            </li>;
}

Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}