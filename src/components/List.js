import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const List = ({className, countyName, fullname, email, character, type, basic}) => {

  return (
    <div className={className}>

    <div className='countyName'>{countyName}</div>
    <div>School Name: {fullname}</div>
    <div>E-mail: {email}</div>
    <div>Character: {character}</div>
    <div>Type: {type}</div>
    <div>Basic: {basic}</div>

    </div>
  )
}

List.propTypes = {
  className: PropTypes.string
}

const StyledList = styled(List)`
  box-sizing: border-box;
  width: 350px;
  height: 200px;
  margin: 0 10px 20px 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 3px 3px rgba(0,0,0,0.20);
  background-color: #FFFFF0;
  font-size: 16px;
  color: ${props => props.theme.colors.black};
  line-height: 1.5;

.countyName{
  font-size: 20px; 
  color: #330000;
}

`

StyledList.displayName = 'List'

export default StyledList
