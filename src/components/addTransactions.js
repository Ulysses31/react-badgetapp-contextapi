import React, { useState, useContext } from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { v4 as uuidv4 } from 'uuid';

import { GlobalContext } from '../context/globalstate';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '30px'
  }
}));

export default function AddTransaction() {
  const { addIncome, addExpense } = useContext(
    GlobalContext
  );
  const classes = useStyles();

  const [income, setIncome] = useState({
    incomeText: '',
    incomeAmount: 0
  });

  const [expense, setExpense] = useState({
    expenseText: '',
    expenseAmount: 0
  });

  const handleOnChangeIncome = (e) => {
    setIncome({
      ...income,
      [e.target.name]: e.target.value
    });
  };

  const handleOnSubmitIncomeForm = (e) => {
    e.preventDefault();

    if (income.incomeText.length > 0) {
      const newIncome = {
        id: uuidv4(),
        incomeText: income.incomeText,
        incomeAmount: parseFloat(income.incomeAmount)
      };

      addIncome(newIncome);

      // clear form after submit
      setIncome({
        incomeText: '',
        incomeAmount: 0
      });
    }
  };

  const handleOnChangeExpense = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value
    });
  };

  const handleOnSubmitExpenseForm = (e) => {
    e.preventDefault();

    if (expense.expenseText.length > 0) {
      const newExpense = {
        id: uuidv4(),
        expenseText: expense.expenseText,
        expenseAmount: parseFloat(expense.expenseAmount)
      };

      addExpense(newExpense);

      // clear form after submit
      setExpense({
        expenseText: '',
        expenseAmount: 0
      });
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleOnSubmitIncomeForm}>
            <div className='input-group income'>
              <TextField
                id='incomeText'
                name='incomeText'
                value={income.incomeText}
                onChange={handleOnChangeIncome}
                autoComplete='off'
                label='Add Income...'
                variant='outlined'
                size='small'
                fullWidth
                margin='normal'
              />
              <TextField
                type='number'
                id='incomeAmount'
                name='incomeAmount'
                value={income.incomeAmount}
                onChange={handleOnChangeIncome}
                autoComplete='off'
                label='Amount'
                variant='outlined'
                size='small'
                fullWidth
                margin='normal'
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
              >
                Submit
              </Button>
            </div>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleOnSubmitExpenseForm}>
            <div className='input-group expense'>
              <TextField
                id='expenseText'
                name='expenseText'
                value={expense.expenseText}
                onChange={handleOnChangeExpense}
                autoComplete='off'
                label='Add Expense...'
                variant='outlined'
                size='small'
                fullWidth
                margin='normal'
                className={classes.textField}
              />
              <TextField
                type='number'
                id='expenseAmount'
                name='expenseAmount'
                value={expense.expenseAmount}
                onChange={handleOnChangeExpense}
                autoComplete='off'
                label='Amount'
                variant='outlined'
                size='small'
                fullWidth
                margin='normal'
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='secondary'
              >
                Submit
              </Button>
            </div>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
