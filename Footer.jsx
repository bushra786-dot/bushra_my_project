const Footer = () => {
    return (
        <footer>
        <div className="footer-container">
          <div className="footer-branding">
            <a href="index.html" className="logo">AᎶRＯ Farm</a>
            <p className="footer-description">We supply our best product without compromising on the quality.</p>
          </div>
          <div className="footer-links">
            <a href="about.html">About Us</a>
            <a href="contact.html">Contact Us</a>
          </div>
          <div className="footer-social">
            <a href="#"><img className="twitter" src="/image/twitter.png" alt="Twitter" /></a>
            <a href="#"><img className="facebook" src="/image/facebook.png" alt="Facebook" /></a>
            <a href="#"><img className="instagram" src="/image/instagram.png" alt="Instagram" /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2024/2030. All Rights Reserved.</p>
        </div>
      </footer>
    );

}

export default Footer;
     