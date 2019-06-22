import React, { useContext } from 'react';
import { SharedContext } from '../contexts/SharedContext';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Left = ({ className, select, value, handleChange }) => {
  const { setPage } = useContext(SharedContext);

  return (
    <div
      className={className}
      value={value}
      onClick={() => {
        handleChange(value);
        setPage(0);
      }}
    >
      <div className="select">{select}</div>
      <div className="arrow">></div>
    </div>
  );
};

Left.propTypes = {
  className: PropTypes.string,
};

const StyledLeft = styled(Left)`
  height: 52px;
  padding: 0 10px;
  border-top: 1px solid ${props => props.theme.colors.borderGray};
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 18px;
  &:hover {
    background-color: ${props => props.theme.colors.backgroundGray};
    cursor: pointer;
  }

  .select {
    color: ${props => props.theme.colors.black};
    display: flex;
    justify-items: center;
    align-items: center;
  }

  .arrow {
    color: ${props => props.theme.colors.borderGray};
    display: flex;
    justify-items: center;
    align-items: center;
  }
`;

StyledLeft.displayName = 'List';

export default StyledLeft;
