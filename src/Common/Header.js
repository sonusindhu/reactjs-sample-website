import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {
  
  render() {
    return (
      <header>
        <div className="container-fluid top_section">
          <div className="container">
            <div className="row">
              <div className="pull-left email_left_sec">
                <span className="email_sec">
                  <i className="fa fa-envelope-o " aria-hidden="true"></i>
                  <p >info@picnframes.com</p>
                </span>
                <span className="email_sec2">
                  <i className="fa fa-mobile" aria-hidden="true"></i>
                  <p>+91-1724623482 </p>
                </span>
              </div>
              <div className="logo_sec">
                <Link to="/">
                  <img src="images/logo.png" className="img-responsive" />
                </Link>
              </div>
              <div className="pull-right topbar_social">
                <Link to="/quatation" className="quote_btn">Get A Quot</Link>
              </div>
              <div className="clearfix"></div>
            </div>  
            <div className="clearfix"></div>
          </div>
        </div>

        <div className="container-fluid navbar_sec">
          <div className="navbar_position">
            <div className="container nav_container">
              <div className="row">
                <nav className="navbar navbar-inverse ">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle toggle_btn" data-toggle="collapse" data-target="#myNavbar">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>                        
                    </button>
                  </div>
                  <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav custom_navbar_ul">
                      <li className="active">
                        <Link to="/" className="page-scroll">Home</Link>
                      </li>
                      <li>
                        <Link to="/about" className="page-scroll">About</Link>
                      </li>
                      <li id="webdesign">
                        <Link to="/web-design" className="page-scroll">Web Design</Link>
                        
                        <div className="row mm_row mm_row_div">
                          <div className="mega_menu_sec">
                            <div className="col-md-3 m_col">
                              <div className="mega_menu_col">
                                <img src="images/design.png" className="img-responsive" />
                                <h3>Logo Design</h3>
                                <p>A great logo is a step forward to building a great brand image among your audience!</p>
                              </div>
                            </div>
                            <div className="col-md-3 m_col">
                              <div className="mega_menu_col">
                                <img src="images/design.png" className="img-responsive" />
                                <h3>Logo Design</h3>
                                <p>A great logo is a step forward to building a great brand image among your audience!</p>
                              </div>
                            </div>
                            <div className="col-md-3 m_col">
                              <div className="mega_menu_col">
                                <img src="images/design.png" className="img-responsive" />
                                <h3>Logo Design</h3>
                                <p>A great logo is a step forward to building a great brand image among your audience!</p>
                              </div>
                            </div>
                            <div className="col-md-3 m_col">
                              <div className="mega_menu_col">
                                <img src="images/design.png" className="img-responsive" />
                                <h3>Logo Design</h3>
                                <p>A great logo is a step forward to building a great brand image among your audience!</p>
                              </div>
                            </div>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                        <div className="clearfix"></div>
                      </li>
                      <li id="webdevelopment">
                        <Link to="/web-development" className="page-scroll">Web Development</Link>
                        
                        <div className="row mm_row2">
                          <div className="mega_menu_sec">
                            <div className="col-md-3 m_col">
                              <div className="mega_menu_col">
                                <h3>Web Development</h3>
                                <ul>
                                  <li><a href="#">Php Web Development</a></li>
                                  <li><a href="#">Ruby on Rails Development</a></li>
                                  <li><a href="#">.Net Development</a></li>
                                  <li><a href="#">Java App Development</a></li>
                                  <li><a href="#">Python Development</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-3 m_col">
                              <div className="mega_menu_col">
                                <img src="images/design.png" className="img-responsive" />
                                <h3>Logo Design</h3>
                                <p>A great logo is a step forward to building a great brand image among your audience!</p>
                              </div>
                            </div>
                            <div className="col-md-3 m_col">
                              <div className="mega_menu_col">
                                <h3>Frameworks</h3>
                                <ul>
                                  <li><a href="#">Laravel Development</a></li>
                                  <li><a href="#">CakePHP Development</a></li>
                                  <li><a href="#">CodeIgniter Development</a></li>
                                  <li><a href="#">Yii Development</a></li>
                                  <li><a href="#">Symfony Development</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-3 m_col">
                              <div className="mega_menu_col">
                                <img src="images/design.png" className="img-responsive" />
                                <h3>Logo Design</h3>
                                <p>A great logo is a step forward to building a great brand image among your audience!</p>
                              </div>
                            </div>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                        <div className="clearfix"></div>
                      </li>
                      <li id="mobile">
                        <Link to="/app-development" className="page-scroll">App Development</Link>
                        
                        <div className="row mm_row3">
                          <div className="mega_menu_sec">
                            <div className="col-md-3 m_col">
                              <div className="mega_menu_col">
                                <img src="images/ios.jpg" className="img-responsive" />
                                <h3>iPhone App Development</h3>
                                <p>A great logo is a step forward to building a great brand image among your audience!</p>
                              </div>
                            </div>
                            <div className="col-md-3 m_col">
                              <div className="mega_menu_col">
                                <img src="images/ipad.jpg" className="img-responsive" />
                                <h3>iPad App Development</h3>
                                <p>A great logo is a step forward to building a great brand image among your audience!</p>
                              </div>
                            </div>
                            <div className="col-md-3 m_col">
                              <div className="mega_menu_col">
                                <img src="images/android.jpg" className="img-responsive" />
                                <h3>Android App Development</h3>
                                <p>A great logo is a step forward to building a great brand image among your audience!</p>
                              </div>
                            </div>
                            <div className="col-md-3 m_col">
                              <div className="mega_menu_col">
                                <img src="images/hybrid.png" className="img-responsive" />
                                <h3>Hybrid App Development</h3>
                                <p>A great logo is a step forward to building a great brand image among your audience!</p>
                              </div>
                            </div>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                        <div className="clearfix"></div>
                      </li>
                      <li>
                        <Link to="/portfolio" className="page-scroll">Portfolio</Link>
                      </li>
                      <li>
                        <Link to="/blog" className="page-scroll">Blog</Link>
                      </li>
                      <li>
                        <Link to="/careers" className="page-scroll">Careers</Link>
                      </li>
                      <li>
                        <Link to="/contact" className="page-scroll">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
                <div className="clearfix"></div>
              </div>  
              <div className="clearfix"></div>
            </div>
          </div>  
        </div>  
      </header>
    );
  }
}

export default Header;
