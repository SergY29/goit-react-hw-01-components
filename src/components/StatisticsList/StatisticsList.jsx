import PropTypes from 'prop-types';
import { Statistics } from "components/Statistic/Statistics";

export const StatisticsList = ({ stats, title }) => {
    // console.log({ items, title })
    return <section>
        {title && (<h2>{title}</h2>)}
        <ul>
            {stats.map(stat =>(
                <li key={stat.id}>
                    <Statistics
                    label={stat.label}
                    percentage={stat.percentage} />
            </li>))}
        </ul>
</section>;
}

StatisticsList.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })),
}