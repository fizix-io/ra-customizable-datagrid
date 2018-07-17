<p align="center">
  <a href="https://fizix.io/" rel="noopener" target="_blank"><img width="200" src="https://s3.eu-central-1.amazonaws.com/fizix-assets/images/logos/fizix-logo-black.png" alt="Fizix logo"></a></p>
</p>

<h1 align="center">ra-customizable-datagrid for <a rel="noopener" target="_blank" href="https://github.com/marmelab/react-admin/">React Admin</a></h1>

<div align="center">

[React Admin](https://github.com/marmelab/react-admin/) plugin that allows to hide / show columns dynamically. Preferences are stored in local storage.

</div>


## Preview
<p align="center">
  <img width="800" src="./demo/demo.gif" alt="Demo">
</p>

## How to run the demo locally

```
$> npm run demo-install
$> npm run demo
```

## Features
* preferences are stored in local storage

## Installation

ra-customizable-datagrid is available from npm. You can install it (and its required dependencies) using:
```
$> npm install --save ra-customizable-datagrid
```
or
```
$> yarn add ra-customizable-datagrid
```

## At a glance

Just replace `Datagrid`

```jsx
import CustomizableDatagrid from 'ra-customizable-datagrid';

const PostList = props => (
  <List {...props}>
    <CustomizableDatagrid>
      <TextField source="id" />
      <TextField source="title" />
    </CustomizableDatagrid>
  </List>
);

```

## License
`ra-customizable-datagrid` is licensed under the MIT License, sponsored and supported by <a href="https://fizix.io/" rel="noopener" target="_blank">Fxizix</a>.
