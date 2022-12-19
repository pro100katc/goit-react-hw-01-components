import propTypes from 'prop-types';
import css from './TransactionItem.module.css'

const TransactionItem = ({ item }) => (
 
    <tr className={css.line}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>

);

TransactionItem.propTypes = {
  items: propTypes.shape({
    type: propTypes.string.isRequired,
    amount: propTypes.number.isRequired,
    currency: propTypes.string.isRequired,
  }),
};

export default TransactionItem;