import React from 'react'
import PropTypes from 'prop-types'

export const Container = (props) => {
  const {
    children
  } = props

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node
}

export default Container
