import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

function GoogleLoginButton() {
  const handleSuccess = (credentialResponse) => {
    const decodedToken = jwtDecode(credentialResponse.credential);
    console.log('Google user info:', decodedToken);
  }

  const handleError = () => {
    console.log('Google login failed');
  }

  return (
    <GoogleLogin
      theme='filled_black' // 'outline' or 'filled_blue or 'filled_black
      type='standard' // 'standard' or 'icon'
      size='large' // 'large' or 'medium' or 'small'
      shape='rectangle' // 'rectangle' or 'pill'
      onSuccess={handleSuccess}
      onError={handleError}
    />
  )
}

export default GoogleLoginButton