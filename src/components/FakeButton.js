import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack } from '@fortawesome/free-solid-svg-icons'

const FakeButton = ({className}) => {
  return (
    <div className={className}>
      <div className='button1'>ALLE BUTIKKER</div>
      <div className='button'>SØNDAGSÅPNE BUTIKKER</div>
      <div className='button'>KVELDSÅPNE TIL 23:00</div>
      <div className='button4'>
      <FontAwesomeIcon icon={faThumbtack} />
      MIN POSISJON</div>
    </div>
  )
}

FakeButton.propTypes = {
  className: PropTypes.string
}

const StyledFakeButton = styled(FakeButton)` 
width: 1200px;
display:flex;
justify-content: space-around;
margin: 0 auto;
&:hover{
  cursor: pointer;
}

div{
  width: 270px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 14px;
}

.button1{
  color: white;
  border: 2px solid ${props => props.theme.colors.green}; 
  background-color: ${props => props.theme.colors.green};
}

.button{
  color: ${props => props.theme.colors.green};
  border: 2px solid ${props => props.theme.colors.green};
  &:hover{
    color: white;
    background-color: ${props => props.theme.colors.green};    
  }
}

.button4{
  color: ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.backgroundGray}; 
  border: 1px solid ${props => props.theme.colors.borderGray};
}

`

StyledFakeButton.displayName = 'FakeButton'

export default StyledFakeButton
