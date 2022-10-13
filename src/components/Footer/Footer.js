import './Footer.css';

const Footer = _ => {
  return (
    <footer className='footer'>
      <p className="footer__copyright">
        &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
