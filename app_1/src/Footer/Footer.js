function Footer(props) {
  return (
    <footer>
      <div className="footer">
        <div className="footer-social">
          <img src={props.twitter} alt="Image social" />
          <img src={props.pinterest} alt="Image social" />
          <img src={props.instagram} alt="Image social" />
          <img src={props.google} alt="Image social" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
