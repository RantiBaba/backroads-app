import logo from '../images/logo.svg'
import { pageLinks, socialLinks } from '../data'

const Navbar = () => {
  return (
    <nav className="navbar" data-testid="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" data-testid="logo" />
          <button type="button" className="nav-toggle" id="nav-toggle" data-testid="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/*//* Iterate over the page links and return them using the map method! */}
        <ul className="nav-links" id="nav-links" data-testid="nav-links">
          {pageLinks.map(({ id, href, text }) => {
            return (
              <li key={id}>
                <a href={href} className="nav-link" data-testid={`navbar-${text}`}>
                  {text}
                </a>
              </li>
            )
          })}
        </ul>

        <ul className="nav-icons" data-testid="nav-icons">
          {socialLinks.map(({ id, href, icon, text }) => {
            return (
              <li key={id}>
                <a href={href} target="_blank" className="nav-icon" rel="noreferrer" data-testid={text}>
                  <i className={icon}></i>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
