import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from 'components/TransactionHistory/TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return <table className = {classNames(styles.transaction_history)}>
            <thead>
                <tr className = {classNames(styles.head)}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
        <tbody>
            {items.map(({ id, type, amount, currency }) => (
                <tr key={id} className = {classNames(styles.row)}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>))}
        </tbody>
    </table>
}

TransactionHistory.propTypes = {
    props: PropTypes.arrayOf(PropTypes.string.isRequired),
}