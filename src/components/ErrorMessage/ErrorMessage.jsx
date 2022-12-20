import React from 'react'
import './ErrorMessage.css'

export const ErrorMessage = ({ children }) => {
  return <div className='error-root'>{children + ' !'}</div>
}
export default ErrorMessage
