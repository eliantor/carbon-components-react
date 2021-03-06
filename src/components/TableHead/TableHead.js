import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { settings } from 'carbon-components';

const { prefix } = settings;

const TableHead = props => {
  const { children, className, ...other } = props;

  const tableHeadClasses = classNames(className, `${prefix}--table-head`);

  return (
    <thead {...other} className={tableHeadClasses}>
      {children}
    </thead>
  );
};

TableHead.propTypes = {
  /**
   * Provide the contents of your TableHead
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to your TableHead
   */
  className: PropTypes.string,
};

export default TableHead;
