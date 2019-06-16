import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const List = ({className, countyName, fullname, email, type, publicSchool, basic}) => {
  return (
    <div className={className}>

    <div>{countyName}</div>
    <div className='school'>School Name: {fullname}</div>
    <div>E-mail: {email}</div>
    <div>Type: {type}</div>
    <div>Public: {publicSchool}</div>
    <div>Bsic: {basic}</div>

    </div>
  )
}

List.propTypes = {
  className: PropTypes.string
}

const StyledList = styled(List)`
  box-sizing: border-box;
  width: 320px;
  height: 180px;
  margin: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 3px 2px rgba(0,0,0,0.20);
  

.school{
  display: flex;
  flex-wrap: wrap;
}


`

StyledList.displayName = 'List'

export default StyledList
