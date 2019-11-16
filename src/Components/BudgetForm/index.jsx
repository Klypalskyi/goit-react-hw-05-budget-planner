import { connect } from 'react-redux';
import BudgetForm from './BudgetForm';
import { inputChange, clearInput } from '../../Redux/actions/inputActions';
import { addBudget } from '../../Redux/actions/valuesAction';

const mapStateToProps = ({ inputs }) => {
  const { budgetAmount } = inputs;
  return { budgetAmount };
};

const mapDispatchToProps = {
  inputChange,
  clearInput,
  addBudget,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BudgetForm);
