import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Left = ({select, value}) => {
  return (
    <div value={value} onClick={()=> alert(value)}>{select}</div>
  )
}

Left.propTypes = {
  className: PropTypes.string
}

const StyledLeft = styled(Left)`

`

StyledLeft.displayName = 'List'

export default StyledLeft
