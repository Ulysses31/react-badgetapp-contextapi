import React, { useContext } from 'react';

import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import { GlobalContext } from '../context/globalstate';

export default function Balance() {
  const {
    incomeTransactions,
    expenseTransactions
  } = useContext(GlobalContext);

  const incomeAmounts = incomeTransactions.map(
    (trans) => trans.incomeAmount
  );

  const expenseAmounts = expenseTransactions.map(
    (trans) => trans.expenseAmount
  );

  const income = incomeAmounts.reduce(
    (acc, item) => (acc += item),
    0
  );

  const expense = expenseAmounts.reduce(
    (acc, item) => (acc += item),
    0
  );

  const balance = income - expense;

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant='h5'>Your Balance</Typography>
          <Typography variant='h5'>
            {balance.toFixed(2)} €
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={12}>
          <Typography variant='h5' color='primary'>
            Income
          </Typography>
          <Typography variant='body1'>
            +{income.toFixed(2)} €
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={12}>
          <Typography variant='h5' color='secondary'>
            Expenses
          </Typography>
          <Typography variant='body1'>
            -{expense.toFixed(2)} €
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
