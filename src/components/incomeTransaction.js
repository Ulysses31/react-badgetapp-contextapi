import React from 'react';

import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  transHistory: {
    backgroundColor: theme.palette.background.paper
  }
}));

export default function IncomeTransaction(props) {
  const { incomeTransaction, handleDlgSelectedId } = props;
  const classes = useStyles();

  const handleOpenDlgSelectedId = (id) => {
    handleDlgSelectedId(id);
  };

  return (
    <div className={classes.transHistory}>
      <List>
        <ListItem>
          <ListItemText
            primary={incomeTransaction.incomeText}
          />
          {incomeTransaction.incomeAmount.toFixed(2)} €
          &nbsp;
          <ListItemSecondaryAction>
            <IconButton
              edge='end'
              aria-label='delete'
              color='secondary'
              onClick={() =>
                handleOpenDlgSelectedId(
                  incomeTransaction.id
                )
              }
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
      </List>
    </div>
  );
}

// ****** Props Validations ********
IncomeTransaction.propTypes = {
  incomeTransaction: PropTypes.object.isRequired,
  incomeText: PropTypes.string,
  handleDlgSelectedId: PropTypes.func.isRequired
};
