import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';

const labelStyles = `
  margin-bottom: 16px;
`;

const ExpenseForm = ({
  expenseName,
  expenseAmount,
  inputChange,
  clearInput,
  addExpense,
  saveItem,
}) => {
  const saveExpense = e => {
    e.preventDefault();
    addExpense(expenseAmount);
    clearInput('expenseName');
    clearInput('expenseAmount');
    saveItem({
      id: shortid.generate(),
      expenseName,
      expenseAmount,
    });
  };

  return (
    <Form onSubmit={saveExpense}>
      <Label customStyles={labelStyles}>
        Enter expense name
        <Input
          type="text"
          name="expenseName"
          value={expenseName}
          onChange={inputChange}
        />
      </Label>
      <Label customStyles={labelStyles}>
        Enter expense amount
        <Input
          type="number"
          name="expenseAmount"
          value={expenseAmount}
          onChange={inputChange}
        />
      </Label>

      <Button label="Add" type="submit" />
    </Form>
  );
};

ExpenseForm.propTypes = {
  expenseName: PropTypes.string.isRequired,
  expenseAmount: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
  clearInput: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
  saveItem: PropTypes.func.isRequired,
};

export default ExpenseForm;
