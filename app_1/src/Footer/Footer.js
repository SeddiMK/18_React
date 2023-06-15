function Footer(props) {
  return (
    <footer>
      <div className="footer">
        <div className="footer-social">
          <img src={props.image} alt={props.title} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
