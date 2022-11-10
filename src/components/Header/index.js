import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'

import './index.css'

const Header = props => {
  const onClickLogOut = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const onClickLogo = () => {
    const {history} = props
    history.replace('/')
  }

  return (
    <div className="header-container">
      <button onClick={onClickLogo} type="button" className="logo-button">
        <img
          className="logo-image"
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        />
      </button>
      <ul className="header-home-jobs">
        <Link to="/">
          <li className="list-el">Home</li>
        </Link>
        <Link to="/jobs">
          <li className="list-el">Jobs</li>
        </Link>
      </ul>
      <button onClick={onClickLogOut} className="logout-button" type="button">
        Logout
      </button>
    </div>
  )
}
export default withRouter(Header)
