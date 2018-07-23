import React, { Component } from 'react';
import T from 'prop-types';

import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import IconClose from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

class SelectionDialog extends Component {
  onColumnClicked = ({ target: { value: columnName } }) => {
    this.props.onColumnClicked(columnName);
  };

  render() {
    const { columns, selection, onClose } = this.props;

    return (
      <Dialog maxWidth="xs" aria-labelledby="ra-columns-dialog-title" onClose={onClose} open>
        <DialogTitle id="ra-columns-dialog-title">Configuration</DialogTitle>
        <DialogContent>
          <FormGroup>
            {columns.map(columnName => (
              <FormControlLabel
                key={columnName}
                control={
                  <Checkbox
                    checked={!!selection[columnName]}
                    onChange={this.onColumnClicked}
                    value={columnName}
                  />
                }
                label={columnName}
              />
            ))}
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onClose} color="primary">
            <IconClose />
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

SelectionDialog.propTypes = {
  columns: T.arrayOf(T.string).isRequired,
  selection: T.object,
};

SelectionDialog.defaultProps = {
  columns: [],
  columns: {},
};

export default SelectionDialog;
