import React from 'react';
import styled from 'styled-components';
import BudgetForm from '../../Components/BudgetForm/index';
import ExpenseForm from '../../Components/ExpenseForm/index';
import ExpensesTable from '../../Components/ExpensesTable/index';
import Values from '../../Components/Values/index';

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const App = () => (
  <Container>
    <BudgetForm />
    <Values />
    <ExpenseForm />
    <ExpensesTable />
  </Container>
);

export default App;
