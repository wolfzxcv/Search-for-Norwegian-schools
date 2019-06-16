import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const borderGray = '#C2C2A3'
const black = '#404040'
const backgroundGray = '#F5F5EF'


const Left = ({className, select, value, handleChange}) => {
  return ( 
    <div className={className} value={value} onClick={()=> handleChange(value)}>
      <div className='select'>{select}</div>
      <div className='arrow'>></div>
    </div>
  )
}

Left.propTypes = {
  className: PropTypes.string
}

const StyledLeft = styled(Left)`
 height: 52px;
 padding: 0 10px;
 border-top: 1px solid ${borderGray};
 display: flex;
 justify-content: space-between;
 font-weight: 600;
 font-size: 18px;
 &:hover{
  background-color: ${backgroundGray};
  cursor: pointer;
 }

.select{
  color: ${black};
  display: flex;
  justify-items: center;
  align-items: center;
}

.arrow{
  color: ${borderGray};
  display: flex;
  justify-items: center;
  align-items: center;
}

`

StyledLeft.displayName = 'List'

export default StyledLeft
