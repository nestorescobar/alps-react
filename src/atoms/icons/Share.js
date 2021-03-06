import React from 'react'
import PropTypes from 'prop-types'

import Svg from '../../helpers/Svg'

const ShareIcon = ({ fill }) => (
  <Svg title="Share" viewBox="0 0 96.35 82.35" className={fill}>
    <path d="M70.87,66.46A10.22,10.22,0,0,1,60.65,76.68H15.89A10.22,10.22,0,0,1,5.67,66.46h0V21.71A10.22,10.22,0,0,1,15.89,11.49H53.6c.93-.22,1.82-.41,2.66-.57l-1.39-5.1h-39A15.91,15.91,0,0,0,0,21.71V66.46A15.91,15.91,0,0,0,15.89,82.35H60.64a15.91,15.91,0,0,0,15.9-15.89V47.19l-5.67,4Z" />
    <path d="M95.34,23.7,62.43.73C60.34-.73,59.19.08,59.86,2.54L63.47,15.8s-39,0-36.54,42.45C37.44,31.81,63.81,33.78,63.81,33.78l-4,14.53c-.67,2.46.48,3.27,2.57,1.81l32.9-23a2,2,0,0,0,.06-3.42Z" />
  </Svg>
)

ShareIcon.propTypes = {
  fill: PropTypes.string,
}

export default ShareIcon
