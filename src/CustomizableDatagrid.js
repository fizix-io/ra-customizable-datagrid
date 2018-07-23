import React, { Component } from 'react';
import T from 'prop-types';

import { Datagrid } from 'react-admin';

import isEmpty from 'lodash/isEmpty';
import filter from 'lodash/filter';
import get from 'lodash/get';

import ColumnIcon from '@material-ui/icons/ViewColumn';
import Button from '@material-ui/core/Button';

import SelectionDialog from './SelectionDialog';
import LocalStorage from './LocalStorage';

const arrayToSelection = values =>
  values.reduce((selection, columnName) => {
    selection[columnName] = true;
    return selection;
  }, {});

// CustomizableDatagrid allows to show/hide columns dynamically
// the preferences are stored in local storage
class CustomizableDatagrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpened: false,
      selection: this.getInitialSelection(),
    };
  }

  getColumnNames() {
    const { children } = this.props;
    return filter(React.Children.map(children, field => get(field, ['props', 'source'])));
  }

  getInitialSelection() {
    const { defaultColumns, resource, children, storage } = this.props;

    const previousSelection = storage.get(resource);

    // if we have a previously stored value, let's return it
    if (!isEmpty(previousSelection)) {
      return previousSelection;
    }

    // if defaultColumns are set let's return them
    if (!isEmpty(defaultColumns)) {
      return arrayToSelection(defaultColumns);
    }

    // otherwise we fallback on the default behaviour : display all columns
    return arrayToSelection(this.getColumnNames());
  }

  // updates the storage with the internal state value
  updateStorage = () => {
    this.props.storage.set(this.props.resource, this.state.selection);
  };

  toggleColumn = columnName => {
    const previousSelection = this.state.selection;
    const selection = {
      ...previousSelection,
      [columnName]: !previousSelection[columnName],
    };
    this.setState({ selection }, this.updateStorage);
  };

  handleOpen = () => this.setState({ modalOpened: true });
  handleClose = () => this.setState({ modalOpened: false });

  render() {
    const { children, defaultColumns, ...rest } = this.props;
    const { selection, modalOpened } = this.state;

    return (
      <div>
        <div style={{ float: 'right', marginRight: '1rem' }}>
          <Button variant="outlined" mini aria-label="add" onClick={this.handleOpen}>
            <ColumnIcon />
          </Button>
        </div>
        {modalOpened && (
          <SelectionDialog
            selection={selection}
            columns={this.getColumnNames()}
            onColumnClicked={this.toggleColumn}
            onClose={this.handleClose}
          />
        )}
        <Datagrid {...rest}>
          {React.Children.map(
            children,
            child =>
              child && !!selection[child.props.source] ? React.cloneElement(child, {}) : null,
          )}
        </Datagrid>
      </div>
    );
  }
}

CustomizableDatagrid.propTypes = {
  defaultColumns: T.arrayOf(T.string),
  storage: T.shape({
    get: T.func.isRequired,
    set: T.func.isRequired,
  }),
};

CustomizableDatagrid.defaultProps = {
  defaultColumns: [],
  storage: LocalStorage,
};

export default CustomizableDatagrid;
