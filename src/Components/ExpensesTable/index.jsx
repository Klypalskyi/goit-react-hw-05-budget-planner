import { connect } from 'react-redux';
import ExpenseTable from './ExpensesTable';
import { deleteItem } from '../../Redux/actions/collectionActions';
import { removeExpense } from '../../Redux/actions/valuesAction';

const mapStateToProps = ({ expenses }) => ({
  expenses,
});

const mapDispatchToProps = {
  deleteItem,
  removeExpense,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpenseTable);
