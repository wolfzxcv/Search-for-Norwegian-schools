import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const List = ({
  className,
  id,
  favorite,
  markFavo,
  countyName,
  fullname,
  email,
  character,
  type,
  basic,
}) => {
  return (
    <div className={className} favorite={favorite}>
      <div className="countyName">
        {countyName}
        <FontAwesomeIcon
          className="favorite"
          favorite={favorite}
          onClick={() => markFavo(id)}
          icon={faHeart}
        />
      </div>
      <div>School Name: {fullname}</div>
      <div>E-mail: {email}</div>
      <div>Character: {character}</div>
      <div>Type: {type}</div>
      <div>Basic: {basic}</div>
    </div>
  );
};

List.propTypes = {
  className: PropTypes.string,
};

const StyledList = styled(List)`
  box-sizing: border-box;
  width: 350px;
  height: 200px;
  margin: 0 10px 20px 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 3px 3px rgba(0, 0, 0, 0.2);
  background-color: #fffff0;
  font-size: 16px;
  color: ${props => props.theme.colors.black};
  line-height: 1.5;

  .countyName {
    padding-right: 5px;
    font-size: 20px;
    color: #330000;
    display: flex;
    justify-content: space-between;
  }

  .favorite {
    color: ${props => (props.favorite ? 'red' : props.theme.colors.borderGray)};
    font-size: 22px;
    &:hover {
      cursor: pointer;
    }
  }
`;

StyledList.displayName = 'List';

export default StyledList;
