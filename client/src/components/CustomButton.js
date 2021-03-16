import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    background: 'linear-gradient(232deg, #0e7575a3 30%, #1c504a 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 20px',
    boxShadow: '0 3px 5px 2px #1f1e1e73',
  },
};

function ClassNames(props) {
  const { classes, children, className, ...other } = props;

  return (
    <Button className={clsx(classes.root, className)} {...other}>
      {children || 'class names'}
    </Button>
  );
}

ClassNames.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(ClassNames);
