import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';

export const Header = () => {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar><h2>Multiple Step Form</h2></Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
