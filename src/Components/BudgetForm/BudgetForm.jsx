import React from 'react';
import PropTypes from 'prop-types';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';

const labelStyles = `
  margin-bottom: 16px;
`;

const BudgetForm = ({ budgetAmount, addBudget, clearInput, inputChange }) => {
  const saveBudget = e => {
    e.preventDefault();
    addBudget(budgetAmount);
    clearInput('budgetAmount');
  };

  return (
    <Form onSubmit={saveBudget}>
      <Label customStyles={labelStyles}>
        Enter your total budget
        <Input
          type="number"
          value={budgetAmount}
          onChange={inputChange}
          name="budgetAmount"
        />
      </Label>

      <Button label="Save" type="submit" />
    </Form>
  );
};

BudgetForm.propTypes = {
  budgetAmount: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
  addBudget: PropTypes.func.isRequired,
  clearInput: PropTypes.func.isRequired,
};

export default BudgetForm;
