import { connect } from 'react-redux';
import Values from './Values';

const mapStateToProps = ({ values }) => {
  const { budget, expenses, balance } = values;
  return {
    budget,
    expenses,
    balance,
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Values);
