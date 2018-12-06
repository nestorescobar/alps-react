import React from 'react'
import PropTypes from 'prop-types'

import Svg from '../../helpers/Svg'

const DotsIcon = ({ fill }) => (
  <Svg title="o-icon__dots" viewBox="0 0 10 10" className={fill} fill="#9b9b9b">
    <path d="M0,0H2V2H0ZM0,10H2V8H0ZM0,6H2V4H0Z" />
  </Svg>
)

DotsIcon.propTypes = {
  fill: PropTypes.string,
}

export default DotsIcon