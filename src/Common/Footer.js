import React from 'react';
import { Link } from 'react-router-dom'

class Footer extends React.Component {
  
  render() {
    return (
      <footer>
        <div className="container-fluid footer_sec">
          <div className="container contact_container">
            <div className="row">
              <div className="col-md-3">
                <div className="footer_contnt_sec">
                  <h3>About Us</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer_contnt_sec">
                  <h3>Services</h3>
                  <ul className="footer_ul">
                    <li><a href="/web-design"><i className="fa fa-angle-right right_icn" aria-hidden="true"></i> Web Design</a></li>
                    <li><a href="/web-development"><i className="fa fa-angle-right right_icn" aria-hidden="true"></i> Web Development</a></li>
                    <li><a href="/android-development"><i className="fa fa-angle-right right_icn" aria-hidden="true"></i> Android Apps Development</a></li>
                    <li><a href="ios-development"><i className="fa fa-angle-right right_icn" aria-hidden="true"></i> IOS Apps Development</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer_contnt_sec">
                  <h3>Industries</h3>
                  <ul className="footer_ul">
                    <li><a href="#"><i className="fa fa-angle-right right_icn" aria-hidden="true"></i> B2B</a></li>
                    <li><a href="#"><i className="fa fa-angle-right right_icn" aria-hidden="true"></i> Enterprise</a></li>
                    <li><a href="#"><i className="fa fa-angle-right right_icn" aria-hidden="true"></i> Education</a></li>
                    <li><a href="#"><i className="fa fa-angle-right right_icn" aria-hidden="true"></i> Non-Profit</a></li>
                    <li><a href="#"><i className="fa fa-angle-right right_icn" aria-hidden="true"></i> E-Commerce</a></li>
                    <li><a href="#"><i className="fa fa-angle-right right_icn" aria-hidden="true"></i> B2C</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer_contnt_sec">
                  <h3>Newsletter</h3>
                  <div className="form-group custom_form">
                    <input type="text" className="form-control" id="usr" />
                  </div>
                  <div className="subscribe_btn_sec">
                    <a href="#" className="subscribe_btn">Subscribe</a>
                  </div>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="clearfix"></div>
            <div className="row footer_row">
              <div className="col-md-9">
                <div className="footer_links_sec">
                  <ul className="footer_link_ul">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/careers">Career</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="social_icn_sec">
                  <ul className="social_ul">
                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-skype" aria-hidden="true"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container-fluid copyright_sec">
          <div className="container">
            <div className="row">
              <div className="pull-left left_logo_sec">
                <img src="images/logo.png" alt="Logo" className="img-responsive" />
              </div>
              <div className="pull-right term_sec">
                <p className="copyright_p">Copyright ©2017 Pic N Frame Technologies.</p>
              </div>
            </div>      
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
