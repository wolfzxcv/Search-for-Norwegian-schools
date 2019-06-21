import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const ToTop = ({className}) => {
  return (
    <div className={className}><a href="#top">
    <FontAwesomeIcon icon={faArrowUp} />
    </a></div>
  )
}

ToTop.propTypes = {
  className: PropTypes.string
}

const StyledToTop = styled(ToTop)` 
  font-size: 48px;
  color: ${props => props.theme.colors.green};
  font-weight: 700;
  position: fixed;
  bottom: 50px;
  right: 50px;
`

StyledToTop.displayName = 'ToTop'

export default StyledToTop