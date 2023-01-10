import PropTypes from 'prop-types';

import styles from "./TransactionHistory.module.css";

export const TransactionHistory = ({items}) => (
    <table className={styles.transactionHistory}>
        <thead className={styles.transactionHistoryHead}>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {
                items.map(({id, type, amount, currency}) =>
                    <tr key={id} className={styles.tableRow}>
                        <td className={styles.tableCell}>{type}</td>
                        <td className={styles.tableCell}>{amount}</td>
                        <td className={styles.tableCell}>{currency}</td>
                    </tr>
                )
            }
        </tbody>    
    </table>
);

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })),
};