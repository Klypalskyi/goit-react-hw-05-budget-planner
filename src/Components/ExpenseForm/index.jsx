import { connect } from 'react-redux';
import ExpensesForm from './ExpenseForm';
import { inputChange, clearInput } from '../../Redux/actions/inputActions';
import { addExpense } from '../../Redux/actions/valuesAction';
import { saveItem } from '../../Redux/actions/collectionActions';

const mapStateToProps = ({ inputs }) => {
  const { expenseName, expenseAmount } = inputs;
  return {
    expenseName,
    expenseAmount,
  };
};

const mapDispatchToProps = {
  inputChange,
  clearInput,
  addExpense,
  saveItem,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpensesForm);
