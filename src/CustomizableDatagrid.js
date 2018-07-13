import React, { Component } from 'react';

import { Datagrid } from 'react-admin';

class CustomizableDatagrid extends Component {
  constructor(props) {
    super(props);
    console.log('props', props);

    // const resource =
    //
    // this.state = {
    //   selection: locationStorage.raColumnsConfig[resource],
    // }
  }

  // isColumnVisible(field) {
  //   return isEmpty(this.state.selection) || this.state.selection.includes(field.props.source);
  // }
  //
  // toggleColumn(columnName) {
  //   ...
  // }

  isColumnVisible = () => {
    return true;
  }

  render() {
    const { children } = this.props;

    // const columns = React.Children.map(children, field => field.props.source);
    // console.log('mai.." React.cloneElement(children)', React.cloneElement(children));

    // debugger;


    // {/*<ColumnsSelector columns={columns} selection={this.state.selection} />*/}
    return (
      <Datagrid {...this.props}>
        {React.Children.map(
          children,
          child => child && this.isColumnVisible(child) ? React.cloneElement(child, {}) : null
        )}
      </Datagrid>
    )
  }
}

export default CustomizableDatagrid;
