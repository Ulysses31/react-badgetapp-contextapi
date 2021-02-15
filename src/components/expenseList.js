import React, { useContext, useState } from 'react';

import { Typography } from '@material-ui/core';

import { GlobalContext } from '../context/globalstate';
import AlertDialog from './alertDlg';
import ExpenseTransaction from './expenseTransaction';

export default function ExpenseList() {
  const {
    expenseTransactions,
    deleteTransaction
  } = useContext(GlobalContext);
  const [openDlg, setOpenDlg] = useState(false);
  const [title, setTitle] = useState({});
  const [descr, setDescr] = useState({});
  const [selectedId, setSelectedId] = useState({});

  const handleClose = (curState) => {
    if (curState) {
      deleteTransaction(selectedId);
    }
    setOpenDlg(false);
    clearDeleteTransactionDlgText();
  };

  const handleSelectedId = (id) => {
    setDeleteTransactionDlgText(id);
    setSelectedId(id);
    setOpenDlg(true);
  };

  const setDeleteTransactionDlgText = (id) => {
    setTitle('Delete Transaction');
    setDescr(`Do you want to delete transaction ${id}`);
  };

  const clearDeleteTransactionDlgText = () => {
    setTitle('');
    setDescr('');
  };

  return (
    <div>
      <AlertDialog
        open={openDlg}
        handleDlgClose={handleClose}
        title={title}
        descr={descr}
      />
      <Typography variant='h6' color='secondary'>
        Expense Transaction History
      </Typography>
      <ul className='transaction-list'>
        {expenseTransactions.map((expenseTransaction) => (
          <ExpenseTransaction
            expenseTransaction={expenseTransaction}
            key={expenseTransaction.id}
            handleDlgSelectedId={handleSelectedId}
          />
        ))}
      </ul>
    </div>
  );
}
