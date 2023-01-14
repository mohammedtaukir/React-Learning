import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='662212331231-d3bkk051lti31ngcuuursdjmk2h6dm4s.apps.googleusercontent.com'>
    <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
