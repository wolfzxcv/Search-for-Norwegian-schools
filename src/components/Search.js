import React, { useContext } from 'react';
import { SharedContext } from '../contexts/SharedContext';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Search = ({ className }) => {
  const { setInput } = useContext(SharedContext);
  const { setPage } = useContext(SharedContext);

  return (
    <div className={className}>
      <div>
        <input
          type="text"
          placeholder="Skolens navn"
          onChange={e => {
            setInput(e.target.value.toLowerCase());
            setPage(0);
          }}
        />
        <div>SØK</div>
      </div>
    </div>
  );
};

Search.propTypes = {
  className: PropTypes.string,
};

const StyledSearch = styled(Search)`
  margin: 30px;
  height: 60px;
  display: flex;

  div {
    width: 1170px;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    input {
      width: 1100px;
      height: 50px;
      font-size: 20px;
      border: 1px solid ${props => props.theme.colors.borderGray};
      padding-left: 18px;
    }
    div {
      width: 80px;
      height: 50px;
      background-color: ${props => props.theme.colors.backgroundGray};
      border: 1px solid ${props => props.theme.colors.borderGray};
      font-weight: 600;
      color: ${props => props.theme.colors.black};
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        cursor: not-allowed;
      }
    }
  }
`;

StyledSearch.displayName = 'Search';

export default StyledSearch;
