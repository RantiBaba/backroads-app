import { pageLinks, socialLinks } from '../data'

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map(({ id, href, text }) => {
          return (
            <li key={id}>
              <a href={href} className="footer-link" data-testid={`footer-${text}`}>
                {text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map(({ id, href, icon, text }) => {
          return (
            <li key={id}>
              <a href={href} target="_blank" className="footer-icon" rel="noreferrer" data-testid={text}>
                <i className={icon}></i>
              </a>
            </li>
          )
        })}
      </ul>
      <p className="copyright" data-testid="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date" data-testid="date">
          {new Date().getFullYear()}
        </span>{' '}
        all rights reserved
      </p>
    </footer>
  )
}
export default Footer
