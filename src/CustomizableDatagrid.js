import React, { Component } from 'react';

import { Datagrid } from 'react-admin';

/* utils */
import isEmpty from 'lodash/isEmpty';

/* icons */
import Icon from '@material-ui/icons/ViewColumn';
import IconClose from '@material-ui/icons/Close';

/* material-ui */
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';

const LS = 'raColumnsConfig';

// CustomizableDatagrid allows to show/hide columns dynamically
// the preferences are stored in local storage
class CustomizableDatagrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      selection: {},
    };

    // default behaviour: display all columns
    React.Children.forEach(props.children, field => {
      this.state.selection[field.props.source] = true;
    });

    // we try to apply the local storage state to our internal state
    try {
      const localStorageValue = JSON.parse(isEmpty(window.localStorage.getItem(LS)) ? '{}' : window.localStorage.getItem(LS));
      const localStorageValueForResource = localStorageValue[props.resource] || {};

      Object.keys(localStorageValueForResource).forEach(key => {
        this.state.selection[key] = localStorageValueForResource[key];
      });

    } catch (e) { } // ignore - window.localStorage is unreliable

    this.updateLocalStorage();
  }

  // updates the local storage with the internal state value
  updateLocalStorage = () => {
    const { resource } = this.props;
    const { selection } = this.state;

    // maybe there isnt an old value
    let oldValue = {};
    try {
      oldValue = JSON.parse(window.localStorage.getItem(LS));
    } catch (e) { };

    const value = JSON.stringify({
      ...oldValue,
      [resource]: selection,
    });

    try {
      window.localStorage.setItem(LS, value);
    } catch (e) { };
  }

  toggleColumn = (event) => {
    this.setState({
      selection: {
        ...this.state.selection,
        [event.target.value]: !this.state.selection[event.target.value]
      }
    }, this.updateLocalStorage);
  }

  handleOpen = () => this.setState({ open: true });
  handleClose = () => this.setState({ open: false });

  render() {
    const { children } = this.props;

    const columns = React.Children.map(children, field => field.props.source);

    return (
      <div>
        <div style={{ float: 'right', marginRight: '1rem' }}>
          <Button variant="outlined" mini color="secondary" aria-label="add" onClick={this.handleOpen}><Icon /></Button>
          {this.state.open &&
            <Dialog
              maxWidth="xs"
              aria-labelledby="confirmation-dialog-title"
              open={this.state.open}
              onEscapeKeyDown={this.handleClose}
              onBackdropClick={this.handleClose}
            >
              <DialogTitle id="confirmation-dialog-title">Configuration</DialogTitle>
              <DialogContent>
                <FormGroup>
                  {columns.map(column => (
                    <FormControlLabel
                      key={column}
                      control={
                        <Checkbox
                          checked={!!this.state.selection[column]}
                          onChange={this.toggleColumn}
                          value={column}
                        />
                      }
                      label={column}
                    />
                  ))}
                </FormGroup>

              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  <IconClose />
                </Button>
              </DialogActions>
            </Dialog>
          }
        </div>
        <Datagrid {...this.props}>
          {React.Children.map(
            children,
            child => child && !!this.state.selection[child.props.source] ? React.cloneElement(child, {}) : null
          )}
        </Datagrid>
      </div>
    )
  }
}

export default CustomizableDatagrid;
