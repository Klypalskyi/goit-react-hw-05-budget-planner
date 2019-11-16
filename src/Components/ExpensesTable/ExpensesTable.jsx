import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../shared/Button';

const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
  width: 100%;

  tr {
    border-bottom: 1px solid #212121;
  }

  td,
  th {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

const ExpensesTable = ({ expenses, deleteItem, removeExpense }) => {
  const removeFromList = (id, value) => {
    deleteItem(id);
    removeExpense(value);
  };
  return expenses.length > 0 ? (
    <Table>
      <thead>
        <tr>
          <th>Expense name</th>
          <th>Expense amount</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {expenses.map(({ id, expenseName, expenseAmount }) => (
          <tr key={id}>
            <td>{expenseName}</td>
            <td>{expenseAmount}</td>
            <td>
              <Button
                label="Delete"
                onClick={() => removeFromList(id, expenseAmount)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  ) : null;
};

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      expenseName: PropTypes.string.isRequired,
      expenseAmount: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  deleteItem: PropTypes.func.isRequired,
  removeExpense: PropTypes.func.isRequired,
};

export default ExpensesTable;
