import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component {
  
  constructor() {
      super();
      this.state = { banners: [] };
  }
  
  componentDidMount() {
      var options = {
        method: 'get',
        dataType:'json'  
      }
      fetch("http://localhost/API/index.php",options) 
      .then(response => response.json())
      .then(json => {
        this.setState({
          banners: json
        });
      });
  }
  
  render() {


    return (

      <div className="MainContents">
        <div className="container-fluid banner_sec animations animatedParent">

          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">

              {this.state.banners.map((banner, index) =>

                <li data-target="#myCarousel" data-slide-to={banner.id} className={index==0 ? 'active' : ''}></li>
              )}
            </ol>

            <div className="carousel-inner">


              {this.state.banners.map((banner,index) =>

                <div className={index==0 ? 'item active' : 'item'}> 
                  <img src={banner.image_back} className="slider_img" alt="Chicago" />
                  <div className="carousel-caption">
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <div className="slider_contnt animated bounceInLeft">
                          <h3>{banner.title}</h3>
                          <p>{banner.description}</p>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <img src={banner.image_right} className="img-responsive animated bounceInUp" />
                      </div>
                      <div className="clearfix"></div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>

              )}

            </div>
            
            
          </div>
        </div>
        
        <div className="container-fluid about_sec" id="about" >
          <div className="container animations animatedParent ">
            <div className="border_sec animated bounceInLeft"></div>
            <div className="row">
              <div className="col-md-3 col-sm-4">
                <div className="ab_sec  animated bounceInLeft">
                  <h3>About </h3>
                  <p>Us</p>
                </div>
              </div>
              <div className="col-md-9 col-sm-8">
                <p className="about_p animated bounceInLeft">Picnframes Technologies is a leading Mobile and Web application Development Company with a strength of 40 members,. We are in operation from Nov 2009 and have earned over a Million USDs from a total of 772 jobs completed till date for clients all over the globe. We are growing as per the new trends and latest technologies evolving in the market to best suit the requirements of our clients. </p>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="clearfix"></div>
            <div className="row about_row">
              <div className="col-md-5 col-sm-4">
                <div className="about_img_sec animatedParent">
                  <img src="images/about_img.png" alt="About" className="img-responsive animated growIn slowest"  />
                </div>
              </div>
              <div className="col-md-7 col-sm-8 about_col_sec acs  animatedParent">
                <h3 className="animated bounceInRight">Who We Are</h3>
                <p className="animated bounceInRight">PIC N FRAMES Technologies is one of the leading software company based in India, where our expertise is in the arena of Web Development, Responsive Web Design, Internet Marketing and Mobile Solutions has been providing innovative business solutions and bringing results that you have never experienced before since 2008.</p>
                <p className=" animated bounceInRight">Our people are our biggest asset. We want to ensure that our team is happy before we can ensure that we will add value to our customers. happy team leads to happy customers.As a business our vision empowers us to be continuously profitable for our investors thereby ensuring that we continue to grow into a better company all the time.</p>
                <div className="read_btn_sec animated bounceInUp">
                  <Link to="/about" className="read_btn">READ MORE</Link>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
        
        <div className="container-fluid why_sec" id="gallery" >
          <div className="container animations animatedParent">
            <h3 className="why_heading text-center animated bounceInRight">Why Us</h3>
            <p className="why_p text-center animated bounceInRight">We PIC N FRAMES TECHNOLOGIES are pleased to introduce ourselves, as a professionally managed mobile application development, software products & web development company having a workforce of over 50.</p>
            <div className="row portfolio_row">
              <div className="col-md-5 col-sm-5">
                <div className="circle_grp">
                  <img src="images/small_circle.png" id="small_circle" className="img-responsive " />
                  <img src="images/med_circle.png" id="med_circle" className="img-responsive pos_circle" />
                  <img src="images/large_circle.png" id="large_circle" className="img-responsive pos_circle" />
                  <img src="images/app_screen.png" id="mobile" className="img-responsive pos_screen" />
                </div>
              </div>
              <div className="col-md-7 col-sm-7">
                <div className="feature_main_sec animatedParent">
                  <div className="row feature_row">
                    <div className="col-md-6 col-sm-6 text-center brder_btm animated bounceIn">
                      <div className="feature_main_col ">
                        <div className="feature_icn_sec">
                          <i className="fa fa-thumbs-o-up feature_icn" aria-hidden="true"></i>
                        </div>
                        <div className="feature_contnt_sec text-center">
                          <h3 className="feature_head">8+ Years of Experience</h3>
                          <p className="feature_p">Extensive experience of working on 1000+ projects using latest trends and technologies  technologies</p>
                        </div>
                      </div>  
                    </div>
                    <div className="col-md-6 col-sm-6 text-center border_lft brder_btm animated bounceIn">
                      <div className="feature_main_col  ">
                        <div className="feature_icn_sec">
                          <i className="fa fa-lightbulb-o feature_icn" aria-hidden="true"></i>
                        </div>
                        <div className="feature_contnt_sec text-center">
                          <h3 className="feature_head">Quality Guaranteed</h3>
                          <p className="feature_p">Highly experienced team using agile methodology to ensure high quality and greater client satisfaction</p>
                        </div>
                      </div>  
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="clearfix"></div>
                  <div className="row">
                    <div className="col-md-6 col-sm-6 text-center animated bounceIn">
                      <div className="feature_main_col">
                        <div className="feature_icn_sec">
                          <i className="fa fa-ticket feature_icn" aria-hidden="true"></i>
                        </div>
                        <div className="feature_contnt_sec text-center">
                          <h3 className="feature_head">24×7 Support</h3>
                          <p className="feature_p">24×7 Customer support to resolve any urgent issues, just a call away.</p>
                        </div>
                      </div>  
                    </div>
                    <div className="col-md-6 col-sm-6 text-center border_lft animated bounceIn">
                      <div className="feature_main_col ">
                        <div className="feature_icn_sec">
                          <i className="fa fa-signal feature_icn" aria-hidden="true"></i>
                        </div>
                        <div className="feature_contnt_sec text-center">
                          <h3 className="feature_head">Product Delivery</h3>
                          <p className="feature_p">Ensure delivery within the specified time hitting the milestones agreed before start.</p>
                        </div>
                      </div>  
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
          <div className="clearfix"></div>
          </div>
        </div>
        
        
        <div className="container-fluid service_sec">
          <div className="container client_container animations animatedParent">
          <div className="border_sec animated fadeInLeft"></div>
            <div className="row">
              <div className="col-md-3 col-sm-4">
                <div className="ab_sec  animated bounceInLeft">
                  <h3>OUR</h3>
                  <p>SERVICES</p>
                </div>
              </div>
              <div className="col-md-9 col-sm-8">
                <p className="about_p animated bounceInLeft">“Client Satisfaction” – We communicate with our clients through the most convenient mode to analyze their specifications as well as requirements thoroughly. We assure our clients with highly precise and best quality resultsWe've spent over a decade to design & develop ITES and IT Solutions for Small Business and Large business, from small to enterprise level. We specialize in delivering custom software solutions, hybrid Mobile apps, VAS products for telecom operators, creating and integrating APIs. </p>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="clearfix"></div>
          </div>  
          
          <div className="animatedParent">
            <ul className="nav nav-tabs custom_tabs_ul">
              <li className="active animated tada">
                <a data-toggle="tab" href="#home">
                  <img src="images/service-1.png" className="img-responsive service_img" /><span className="service_name design_name">Web Design</span>
                </a>
              </li>
              <li className="animated tada">
                <a data-toggle="tab" href="#menu1">
                  <img src="images/service-2.png" className="img-responsive service_img" /><span className="service_name">Web<p className="development_p">Development</p></span>
                </a>
              </li>
              <li className="animated tada">
                <a data-toggle="tab" href="#menu2">
                  <img src="images/service-3.png" className="img-responsive service_img" /><span className="service_name">Android App Development</span>
                </a>
              </li>
              <li className="animated tada">
                <a data-toggle="tab" href="#menu3">
                  <img src="images/service-4.png" className="img-responsive service_img" /><span className="service_name">IOS App Development</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="container animations animatedParent">
            <div className="tab-content">
              <div id="home" className="tab-pane fade in active">
                <h3 className="service_name2">Web & Graphic Design</h3>
                <div className="row animatedParent">
                  <div className="col-md-4 col-sm-4">
                    <img src="images/design.png" className="img-responsive animated flipInX" />
                  </div>
                  <div className="col-md-8 ">
                    <p className="full_service_typ">Our full-service team of marketing strategists, designers, and developers build high converting websites that typically see an increase of 200% after launch.</p>
                    <div className="col-md-12 clr_col">
                      <div className="row">
                        <div className="col-md-6 col-sm-6 ">
                          <div className="service_contnt_sec animated bounceInLeft">
                            <h3>Responsive Web Design</h3>
                            <p>With the number of mobile users increasing daily, responsive web designs have become an urgent need for business owners. Such designs eliminate the need for separate mobile sites, saving both time and money. Considered to be the future of the web, responsive design allows users to access information from any device and also enhances the web surfing experience</p>
                          </div>
                        </div>  
                        <div className="col-md-6 col-sm-6 ">
                          <div className="service_contnt_sec animated bounceInLeft">
                            <h3>Graphic Design</h3>
                            <p>When business owners hear the phrase “graphic design,” they often think of postcards or brochures. While these types of collateral can be useful, a visually appealing website is of equal (if not greater) importance in today’s digital age. Our designers at Picnframes Technologies combine striking elements and colors to deeply connect with your customers.</p>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                      <div className="clearfix"></div>    
                      <div className="row">
                        <div className="col-md-6 col-sm-6 ">
                          <div className="service_contnt_sec animated bounceInLeft">
                            <h3>Landing Pages</h3>
                            <p>Picnframes Technologies has built thousands of attractive and engaging landing pages, built specifically to convert visitors to leads. Our team of developers, designers, and SEO experts collaborate to deliver the complete package, simplifying the creation of landing pages – which helps you generate more business from your website.</p>
                          </div>
                        </div>  
                        <div className="col-md-6 col-sm-6">
                          <div className="service_contnt_sec animated bounceInLeft">
                            <h3>Parallax Web Design</h3>
                            <p> Our web designers are skilled at implementing parallax effects on websites and banner ad graphics. By combining CSS and HTML 5 elements, we are able to simulate an overlapping effect, bringing the 3D effect to life. By leveraging this time-tested technique, our designers can help transform your web pages.</p>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                      </div>  
                      <div className="clearfix"></div>
                      <div className="row">
                        <div className="col-md-6 col-sm-6">
                          <div className="service_contnt_sec2 animated bounceInLeft">
                            <h3>TECHNOLOGIES WE USE</h3>
                            <img src="images/design-service.png" className="img-responsive" />
                          </div>
                        </div>  
                        <div className="col-md-6 col-sm-6">
                          <div className="service_contnt_sec2 animated bounceInLeft">
                            <h3>CONTENT MANAGEMENT SYSTEMS WE USE</h3>
                            <img src="images/development-service.png" className="img-responsive" />
                          </div>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                      <div className="clearfix"></div>  
                    </div>
                  </div>  
                </div>
              </div>
              <div id="menu1" className="tab-pane fade">
                <h3 className="service_name2">Web Development</h3>
                <div className="row">
                  <div className="col-md-4 col-sm-4">
                    <img src="images/design.png" className="img-responsive" />
                  </div>
                  <div className="col-md-8">
                    <p className="full_service_typ">Our full-service team of marketing strategists, designers, and developers build high converting websites that typically see an increase of 200% after launch.</p>
                    <div className="col-md-12 clr_col">
                      <div className="row">
                        <div className="col-md-6 col-sm-6">
                          <div className="service_contnt_sec">
                            <h3>Php Web Development</h3>
                            <p>The web development world has greatly changed since the PHP scripting language was created in 1994. Over the past decade, our team at Picnframes Technologies has had the privilege of assisting with over 1,000 PHP projects. This robust server-side language is used each day by our team for developing static and dynamic open-source applications with distinction.</p>
                          </div>
                        </div>  
                        <div className="col-md-6 col-sm-6">
                          <div className="service_contnt_sec">
                            <h3>Ruby on Rails Development</h3>
                            <p>For the development of sleek and effective web applications, there is no better platform than the Ruby on Rails framework. As the industry shifts toward open source and rapid implementation, this framework is becoming one of the top choices for website development. Picnframes Technologies has the experience and know-how to take your Ruby on Rails project to the next level.</p>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                      <div className="clearfix"></div>    
                      <div className="row">
                        <div className="col-md-6 col-sm-6">
                          <div className="service_contnt_sec">
                            <h3>Python Development</h3>
                            <p>This open-source, OSI-approved language is available for enterprise usage and can be a great option for building elegant web applications and high-performance software. From custom to full-cycle development, our team of experienced developers leverage the Python framework to deliver highly secured web-apps that meet your needs.</p>
                          </div>
                        </div>  
                        <div className="col-md-6 col-sm-6">
                          <div className="service_contnt_sec">
                            <h3>.Net Development</h3>
                            <p>From pre-development project consulting to ongoing maintenance, Picnframes Technologies offers a variety of .NET services for both professional and enterprise users. Tapping into our wealth of .NET technology experience (7 years and 200+ projects), we leverage the framework’s security and efficacy to produce excellent results. </p>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                      </div>  
                      <div className="clearfix"></div>
                      <div className="row">
                        <div className="col-md-6 col-sm-6">
                          <div className="service_contnt_sec2">
                            <h3>TECHNOLOGIES WE USE</h3>
                            <img src="images/design-service.png" className="img-responsive" />
                          </div>
                        </div>  
                        <div className="col-md-6 col-sm-6">
                          <div className="service_contnt_sec2">
                            <h3>CONTENT MANAGEMENT SYSTEMS WE USE</h3>
                            <img src="images/development-service.png" className="img-responsive" />
                          </div>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                      <div className="clearfix"></div>  
                    </div>
                  </div>  
                </div>
              </div>
              <div id="menu2" className="tab-pane fade">
                <h3 className="service_name2">Android App Development</h3>
                <div className="row">
                  <div className="col-md-4 col-sm-4">
                    <img src="images/design.png" className="img-responsive" />
                  </div>
                  <div className="col-md-8">
                    <p className="full_service_typ">Our full-service team of marketing strategists, designers, and developers build high converting websites that typically see an increase of 200% after launch.</p>
                    <div className="col-md-12 clr_col">
                      <div className="row">
                        <div className="col-md-6 col-sm-6">
                          <div className="service_contnt_sec">
                            <h3>Material Design UI/UX</h3>
                            <p>Leveraging animation, style, layout, patterns and usability of Material Design and expanded UI toolkit for integrating new graphics and user-experience, we carve user-friendly designs on Android.</p>
                          </div>
                        </div>  
                        <div className="col-md-6 col-sm-6">
                          <div className="service_contnt_sec">
                            <h3>Device Connectivity</h3>
                            <p>We build custom Android app solutions with powerful connectivity features to perform concurrent operations with Bluetooth Low Energy (BLE), giving control of external hardware on users’ Android mobile devices</p>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                      <div className="clearfix"></div>    
                      <div className="row">
                        <div className="col-md-6 col-sm-6">
                          <div className="service_contnt_sec">
                            <h3>Device Compatibility</h3>
                            <p>Android supports a variety of features your application can leverage through platform APIs. Some features are hardware-based (such as a compass sensor), some are software-based (such as app widgets), and some are dependent on the platform version.</p>
                          </div>
                        </div>  
                        <div className="col-md-6 col-sm-6">
                          <div className="service_contnt_sec">
                            <h3>New Sensors</h3>
                            <p>Using composite internal sensors and external hardware to detect specific interactions like wake up, pick up, glance, shake and other gestures, we deliver app solutions connected to end-users and business needs.</p>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                      </div>  
                      <div className="clearfix"></div>
                      <div className="row">
                        <div className="col-md-6 col-sm-6">
                          <div className="service_contnt_sec2">
                            <h3>TECHNOLOGIES WE USE</h3>
                            <img src="images/design-service.png" className="img-responsive" />
                          </div>
                        </div>  
                        <div className="col-md-6 col-sm-6">
                          <div className="service_contnt_sec2">
                            <h3>CONTENT MANAGEMENT SYSTEMS WE USE</h3>
                            <img src="images/development-service.png" className="img-responsive" />
                          </div>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                      <div className="clearfix"></div>  
                    </div>
                  </div>  
                </div>
              </div>
              <div id="menu3" className="tab-pane fade">
                <h3 className="service_name2">IOS App Development</h3>
                <div className="row">
                  <div className="col-md-4 col-sm-4">
                    <img src="images/design.png" className="img-responsive" />
                  </div>
                  <div className="col-md-8">
                    <p className="full_service_typ">Our full-service team of marketing strategists, designers, and developers build high converting websites that typically see an increase of 200% after launch.</p>
                    <div className="col-md-12 clr_col">
                      <div className="row">
                        <div className="col-md-6 col-sm-6">
                          <div className="service_contnt_sec">
                            <h3>About Objective-C</h3>
                            <p>Objective-C is the primary programming language you use when writing software for OS X and iOS. It’s a superset of the C programming language and provides object-oriented capabilities and a dynamic runtime. Objective-C inherits the syntax, primitive types, and flow control statements of C and adds syntax for defining classes and methods.</p>
                          </div>
                        </div>  
                        <div className="col-md-6 col-sm-6">
                          <div className="service_contnt_sec">
                            <h3>About Swift </h3>
                            <p>The powerful programming language that is also easy to learn.Swift is a powerful and intuitive programming language for macOS, iOS, watchOS and tvOS. Writing Swift code is interactive and fun, the syntax is concise yet expressive, and Swift includes modern features developers love. Swift code is safe by design, yet also produces software that runs lightning-fast.</p>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                      <div className="clearfix"></div>    
                      <div className="row">
                        <div className="col-md-6 col-sm-6">
                          <div className="service_contnt_sec">
                            <h3>Xcode </h3>
                            <p>Xcode includes everything developers need to create great applications for Mac, iPhone, iPad, Apple TV, and Apple Watch. Xcode provides developers a unified workflow for user interface design, coding, testing, and debugging. The Xcode IDE combined with the Swift programming language make developing apps easier and more fun than ever before.</p>
                          </div>
                        </div>  
                        <div className="col-md-6 col-sm-6">
                          <div className="service_contnt_sec">
                            <h3>Latest Update Version</h3>
                            <p>Xcode 8.3.3 includes Swift 3.1 and SDKs for iOS 10.3, watchOS 3.2, tvOS 10.2, and macOS Sierra 10.12 Swift 3 interfaces with Objective-C APIs in a more powerful way than previous versions.</p>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                      </div>  
                      <div className="clearfix"></div>
                      <div className="row">
                        <div className="col-md-6 col-sm-6">
                          <div className="service_contnt_sec2">
                            <h3>TECHNOLOGIES WE USE</h3>
                            <img src="images/design-service.png" className="img-responsive" />
                          </div>
                        </div>  
                        <div className="col-md-6 col-sm-6">
                          <div className="service_contnt_sec2">
                            <h3>CONTENT MANAGEMENT SYSTEMS WE USE</h3>
                            <img src="images/development-service.png" className="img-responsive" />
                          </div>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                      <div className="clearfix"></div>  
                    </div>
                  </div>  
                </div>
              </div>
            </div>
          </div>  
        </div>
        
        <div className="container-fluid industries_sec">
          <div className="container animations animatedParent">
            <h3 className="industries_head text-center animated growIn">We Serve All Industries</h3>
            <p className="industries_p text-center animated growIn">We stay on top of our industry by being experts in yours.</p>
            <div className="row text-center">
              <div className="col-md-11 col-sm-12 center-block gradient_layer">
                <div className="col-md-2 col-sm-2 text-center">
                  <div className="industries_col animated rotateInDownLeft">
                    <img src="images/industries-1.png" className="img-responsive" />
                    <div className="industries_contnt">
                      <h3>B2B</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-sm-2 text-center">
                  <div className="industries_col animated rotateInDownLeft">
                    <img src="images/industries-2.png" className="img-responsive" />
                    <div className="industries_contnt">
                      <h3>Enterprise</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-sm-2 text-center">
                  <div className="industries_col animated rotateInDownLeft">
                    <img src="images/industries-3.png" className="img-responsive" />
                    <div className="industries_contnt">
                      <h3>Education</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-sm-2 text-center">
                  <div className="industries_col animated rotateInDownLeft">
                    <img src="images/industries-4.png" className="img-responsive" />
                    <div className="industries_contnt">
                      <h3>Non-Profit</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-sm-2 text-center">
                  <div className="industries_col animated rotateInDownLeft">
                    <img src="images/industries-5.png" className="img-responsive" />
                    <div className="industries_contnt">
                      <h3>E-Commerce</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-sm-2 text-center">
                  <div className="industries_col animated rotateInDownLeft">
                    <img src="images/industries-6.png" className="img-responsive" />
                    <div className="industries_contnt">
                      <h3>B2C</h3>
                    </div>
                  </div>
                </div>
              <div className="clearfix"></div>
                <div className="row expand_row">
                  <div className="col-md-12">
                    <div className="col-md-4 col-sm-4">
                      <div className="indus_col_sec">
                        <ul>
                          <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Automative</a></li>
                          <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> B2B</a></li>
                          <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Beauty & Fashion</a></li>
                          <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> E-Commerce</a></li>
                          <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Entertainment & Media</a></li>
                          <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Financial</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="indus_col_sec">
                        <ul>
                          <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Food & Beverage</a></li>
                          <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Government</a></li>
                          <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Luxury</a></li>
                          <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Medical & Healthcare</a></li>
                          <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Non-Profit</a></li>
                          <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Publication</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="indus_col_sec">
                        <ul>
                          <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Real Estate</a></li>
                          <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Schools & Institutions</a></li>
                          <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> SmallBusiness</a></li>
                          <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Sports</a></li>
                          <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Technology Services</a></li>
                          <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Travel</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="clearfix"></div>
              </div>  
              <div className="clearfix"></div>
            </div>
            <div className="clearfix"></div>
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="expand_btn_sec animated tada">
                  
                  <input type="button" value="Expand To View More" className="expand_btn" onclick="return change(this);" />
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
        
        <div className="container-fluid portfolio_sec">
          <div className="container animations animatedParent">
            <div className="border_sec animated fadeInLeft"></div>
            <div className="row">
              <div className="col-md-3 col-sm-4">
                <div className="ab_sec  animated bounceInLeft">
                  <h3>OUR</h3>
                  <p>GALLERY</p>
                </div>
              </div>
              <div className="col-md-9 col-sm-8">
                <p className="about_p animated bounceInLeft">We don’t build products we build relations with our clients. Our work tells about our achievements. We've put together our work experience together. And from time to time we also put down our thoughts on interesting issues and concepts relating to software development assessments. And from time to time we also put down our thoughts on interesting issues and concepts relating to software development assessments. </p>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="clearfix"></div>
            <div className="row port_row animated growIn">
              <div className="col-md-12 grid ">
                <div className="col-md-4 col-sm-4 port_col">
                  <figure className="portfolio_col effect-apollo">
                    
                    <img src="images/portfolio-1.png" className="img-responsive" />
                    <figcaption>
                      <h2>Crazy <span>Layla</span></h2>
                      <p>When Layla appears, she brings an eternal summer along.</p>
                      <a href="#">View more</a>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-4 col-sm-4 port_col">
                  <figure className="portfolio_col effect-apollo">
                    <img src="images/portfolio-2.png" className="img-responsive" />
                    <figcaption>
                      <h2>Crazy <span>Layla</span></h2>
                      <p>When Layla appears, she brings an eternal summer along.</p>
                      <a href="#">View more</a>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-4 col-sm-4 port_col">
                  <figure className="portfolio_col effect-apollo">
                    <img src="images/portfolio-3.png" className="img-responsive" />
                    <figcaption>
                      <h2>Crazy <span>Layla</span></h2>
                      <p>When Layla appears, she brings an eternal summer along.</p>
                      <a href="#">View more</a>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-4 col-sm-4 port_col">
                  <figure className="portfolio_col effect-apollo">
                    <img src="images/portfolio-4.png" className="img-responsive" />
                    <figcaption>
                      <h2>Crazy <span>Layla</span></h2>
                      <p>When Layla appears, she brings an eternal summer along.</p>
                      <a href="#">View more</a>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-4 col-sm-4 port_col">
                  <figure className="portfolio_col effect-apollo">
                    <img src="images/portfolio-5.png" className="img-responsive" />
                    <figcaption>
                      <h2>Crazy <span>Layla</span></h2>
                      <p>When Layla appears, she brings an eternal summer along.</p>
                      <a href="#">View more</a>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-4 col-sm-4 port_col">
                  <figure className="portfolio_col effect-apollo">
                    <img src="images/portfolio-6.png" className="img-responsive" />
                    <figcaption>
                      <h2>Crazy <span>Layla</span></h2>
                      <p>When Layla appears, she brings an eternal summer along.</p>
                      <a href="#">View more</a>
                    </figcaption>
                  </figure>
                </div>
                <div className="clearfix"></div>
              </div>  
            </div>
            <div className="clearfix"></div>
            <div className="row text-center view_btn_row animated shake">
              <div className="col-md-12">
                <Link to="/portfolio" className="view_btn">View Our Portfolio</Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container-fluid purchase_sec">
          <div className="container animations animatedParent">
            <div className="row">
              <div className="col-md-9 col-sm-8">
                <div className="discuss_sec animated fadeInLeft">
                  <h3 className="purchase_heading">What we Can Do For You?</h3>
                  <p>We are happy to discuss the project with you in person or just call us at 1-877-293-2007</p>
                </div>  
              </div>
              <div className="col-md-3 col-sm-4 text-center contact_col_sec">
                <div className="get_btn_sec animated shake">
                  <Link to="/contact" className="get_btn">Contact Us</Link>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
        
        <div className="container-fluid client_sec">
          <div className="container animations animatedParent">
            <div className="border_sec animated fadeInLeft"></div>
            <div className="row">
              <div className="col-md-3 col-sm-4">
                <div className="ab_sec  animated bounceInLeft">
                  <h3>OUR</h3>
                  <p>CLIENTS</p>
                </div>
              </div>
              <div className="col-md-9 col-sm-8">
                <p className="about_p animated bounceInLeft">Picnframes Technologies 24X7 support will make you smile always. We does not rely on a one-solution-for-all approach. We work together closely with our clients to develop comfortable, flexible IT/ITES solutions. We have a well managed support system that enable us to understand ITES & IT solutions job description in shortest possible time. </p>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="clearfix"></div>
            <div className="row client_row">
              <div className="col-md-6 col-sm-6">
                <div id="myCarousel2" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="item active">
                      <div className="carousel-caption2">
                        <div className="row client_row2">
                          <div className="col-md-12">
                            <div className="client_box">
                              <img src="images/client.png" className="img-responsive" />
                              <div className="client_contnt_sec">
                                <p>PicnFrames are a very competent company who have been responsive to requests and provided a very good quality of work both on the frontend and backend. I highly rate this company.</p>
                                <p className="client_name ">- Sam Chamberlain</p>
                              </div>
                            </div>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>

                    <div className="item">
                      
                      <div className="carousel-caption2">
                        <div className="row client_row2">
                          <div className="col-md-12">
                            <div className="client_box">
                              <img src="images/client.png" className="img-responsive" />
                              <div className="client_contnt_sec">
                                <p>I enjoyed working with the team from PicNFrames, they were always available and responsive to any developments of the project. I would definitely work with them again.</p>
                                <p className="client_name">- Hector Guerrero</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="clearfix"></div>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  
                    <div className="item">
                      
                      <div className="carousel-caption2 ">
                        <div className="row client_row2">
                          <div className="col-md-12">
                            <div className="client_box">
                              <img src="images/client.png" className="img-responsive" />
                              <div className="client_contnt_sec">
                                <p>It was a pleasure working with Smith and Team Picnframes. They did a great job. They are highly experienced group of professionals who communicate extremely well throughout the progress of the project. I would recommend them for any kind of complex Mobile projects</p>
                                <p className="client_name">- Charlie Curtis – Toronto, CA</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="clearfix"></div>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                  <ol className="carousel-indicators indicators2">
                    <li data-target="#myCarousel2" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel2" data-slide-to="1"></li>
                    <li data-target="#myCarousel2" data-slide-to="2"></li>
                  </ol>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="frame_sec">
                  <iframe className="youtube_vid" src="https://www.youtube.com/embed/DPjKErfQahQ" frameborder="0" allowfullscreen></iframe>
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
