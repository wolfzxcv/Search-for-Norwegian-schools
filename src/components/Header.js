import React, { useContext } from 'react'
import styled from 'styled-components'
import { SelectContext } from '../contexts/SelectContext'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faUtensils, faLeaf, faUnlockAlt, faUser, faSearch, faBars } from '@fortawesome/free-solid-svg-icons'

const Header = ({className}) => {
  const {select} = useContext(SelectContext)

  return (
    <header className={className}>
      <div className='title normal'>{select}</div> 

      <div className='three normal'>
        <a href="https://www.linkedin.com/in/nien-ying-chou-169604186/" target="_blank">
        <div className='underline'>
        <FontAwesomeIcon icon={faMapMarkerAlt} /> 
        LinkedIn</div></a>
      
        <a href="https://github.com/wolfzxcv" target="_blank">
        <div>
        <FontAwesomeIcon icon={faUtensils} /> 
        GitHub</div></a>

        <a href="https://codepen.io/nienyingchou/" target="_blank">
        <div>
        <FontAwesomeIcon icon={faLeaf} /> 
        CodePen</div></a>  
      </div> 

      <div className='member small'>
        <a href="https://www.youtube.com/user/wolfzxcvb/videos?view_as=subscriber" target="_blank">
        <div>
        <FontAwesomeIcon icon={faUnlockAlt} />
        <span>Logg  inn</span>
        </div></a>

        <a href="https://www.youtube.com/user/naomichou/videos?view_as=subscriber" target="_blank">
        <div>
        <FontAwesomeIcon icon={faUser} />
        <span>Bli  Norge  PLUSS-kunde</span>
        </div></a>

      </div>
      
      <div className='green normal'>
        <a href="https://www.facebook.com/wolfzxcv" target="_blank">
        <div>
        <FontAwesomeIcon icon={faSearch} />
        </div></a>

        <a href="https://www.instagram.com/nienyingchou/" target="_blank">
        <div>
        <FontAwesomeIcon icon={faBars} />
        </div></a>
      </div>
    </header>
  )
}

Header.propTypes = {
  className: PropTypes.string
}

const StyledHeader = styled(Header)` 
width: 100vw;
height: 79px;
display: flex;
flex: 1;
color: ${props => props.theme.colors.black};
font-weight: 400;
border-bottom: 1px solid ${props => props.theme.colors.borderGray}; 

  .title{
    background-color: ${props => props.theme.colors.headerWhite};
    width: 340px;
    padding: 0 20px;
    font-size: 22px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    &:hover{
      color: ${props => props.theme.colors.green};
      cursor: pointer;
    }        
  }

  .three{
    background-color: ${props => props.theme.colors.headerWhite};
    display: flex;
    justify-content: space-evenly;
    flex: 1;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 1px;
    &:hover{
      cursor: pointer;
    }
      
    .underline{
      color: ${props => props.theme.colors.green};
      border-bottom: 5px solid ${props => props.theme.colors.green};
    }  

    div{
      display: flex;
      align-items: center;
      width: 140px;
      height: 100%;
      margin-right: 20px;
      &:hover{
      color: ${props => props.theme.colors.green};
      border-bottom: 5px solid ${props => props.theme.colors.green};
      }
    }  
  }

  .member{
    background-color: ${props => props.theme.colors.headerWhite};
    width: 210px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 1;
    border-left: 1px solid #C2C2A3;
    padding-left: 10px;
    font-size: 14px;
    span{
      margin-left: 5px;
    &:hover{
      color: ${props => props.theme.colors.green};
      text-decoration: underline;
      cursor: pointer;
    }  
    }
  }

  .green{
    display: flex;
    flex: 1;      
    background-color: ${props => props.theme.colors.green};
    div{
      display: flex;
      justify-content: center;
      align-items: center;      
      font-size: 24px;
      color: white;
      width: 80px;
      height: 79px;
      &:hover{
      background-color: ${props => props.theme.colors.darkGreen};
      cursor: pointer;
      }
    }
  }

  .normal{
    flex-grow: 7;
    flex-shrink: 1;
    flex-basis: 0%;
  }

  .small{
    flex-grow: 4;
    flex-shrink: 1;
    flex-basis: 0%;
  }
`

StyledHeader.displayName = 'Header'

export default StyledHeader 
