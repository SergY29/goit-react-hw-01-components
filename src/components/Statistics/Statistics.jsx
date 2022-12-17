import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from 'components/Statistics/Statistics.module.css';

export const Statistics = ({ stats, title }) => {
    return <section className = {classNames(styles.statistics)}>
        {title && (<h2 className = {classNames(styles.title)}>{title}</h2>)}
        <ul className = {classNames(styles.statlist)}>
            {stats.map(({ id, label, percentage }) =>(
                <li key={id} className = {classNames(styles.item)}
                    style={{backgroundColor: getRandomHexColor(),
                }}>
                    <span className = {classNames(styles.label)}>{label}</span>
                    <span className = {classNames(styles.percentage)}>{percentage}%</span>
                </li>))}
        </ul>
</section>;
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
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