

const Footer = () => {
    return (
        <footer className="footer bg-black text-white p-10">
        <div>
          <h1 className="font-bold text-2xl text-white">CareerHub</h1><br />
          <p className="text-base">There are many variations of passages <br />of Lorem Ipsum, but the majority have <br />suffered alteration in some form.</p><br />
          <img src="https://i.postimg.cc/vTtM7kym/social.png" alt="" />
        </div>
        <nav>
          <h6 className="footer-title text-white">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Work</a>
          <a className="link link-hover">Latest News</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav>
          <h6 className="footer-title text-white">Product</h6>
          <a className="link link-hover">Prototype</a>
          <a className="link link-hover">Plans & Pricing</a>
          <a className="link link-hover">Customers</a>
          <a className="link link-hover">Integrations</a>
        </nav>
        <nav>
          <h6 className="footer-title text-white">Support</h6>
          <a className="link link-hover">Help Desk</a>
          <a className="link link-hover">Sales</a>
          <a className="link link-hover">Becomes a Partner</a>
          <a className="link link-hover">Developers</a>
        </nav>
        <nav>
          <h6 className="footer-title text-white">Contact</h6>
          <a className="link link-hover">524 Broadway, NYC</a>
          <a className="link link-hover">+177-978-5570</a>
        </nav>
      </footer>
      
    );
};

export default Footer;