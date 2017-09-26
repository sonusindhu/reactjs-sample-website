/**
 * React Static Boilerplate
 * Copyright (c) 2015-present Kriasoft. All rights reserved.
 */

 /* @flow */

 import React from 'react';

 class Design extends React.Component {
 	render() {
 		return (
 			<div>
 				<div className="container-fluid about_page_container">
					<div className="container">
						<ol className="breadcrumb custom_breadcrumb">
							<li><a href="#">Home</a></li>
							<li className="active">Web Design</li>        
						</ol>
						<h3 className="about_page_head">Web Designing</h3>
						<p className="picnframes_txt">Pic N Frame Technologies is one of the leading software company based in India.</p>
					</div>
				</div>
				
				<div className="container-fluid service_process_sec">
					<div className="container">
						<h3 className="work_process_head">OUR SERVICES</h3>
						<div className="border_sec"></div>
						<p className="work_process_p">Bras urna felis accumsan at ultrde cesid posuere masa socis nautoque penat bus maecenas ultrices sed ipsum lorem dolor sit amet sed ipsum consectetur adipisicing elit sed do eiusmod tempor incididunt</p>
						<div className="row service_row">
							<div className="col-md-4">
								<div className="service_main_sec">
									<div className="service_img_sec">
										<img src="images/service-111.png" className="img-responsive" />
									</div>
									<div className="service_contnt_sec4">
										<h3>WEBSITE DESIGNING</h3>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .</p>
									</div>
								</div>
							</div>	
							<div className="col-md-4">
								<div className="service_main_sec service_main_sec2">
									<div className="service_img_sec">
										<img src="images/service-22.png" className="img-responsive" />
									</div>
									<div className="service_contnt_sec4">
										<h3>UI/UX DESIGNING</h3>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .</p>
									</div>
								</div>
							</div>	
							<div className="col-md-4">	
								<div className="service_main_sec">
									<div className="service_img_sec ">
										<img src="images/service-33.png" className="img-responsive" />
									</div>
									<div className="service_contnt_sec4">
										<h3>LOGO DESIGNING</h3>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .</p>
									</div>
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
						<div className="clearfix"></div>
						<div className="row service_slider_row">
							<div className="col-md-12">
								<div id="myCarousel" className="carousel slide" data-ride="carousel">   
									<ol className="carousel-indicators indicators3">
										<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
										<li data-target="#myCarousel" data-slide-to="1"></li>
										<li data-target="#myCarousel" data-slide-to="2"></li>
									</ol>
									<div className="carousel-inner carousel-inner2">
										<div className="item active">
											<img src="images/service-1a.png" alt="Los Angeles" />
										</div>
										
										<div className="item">
											<img src="images/service-1a.png" alt="Los Angeles" />
										</div>
									
										<div className="item">
											<img src="images/service-1a.png" alt="Los Angeles" />
										</div>
								  
									</div>
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
						<div className="clearfix"></div>
						<div className="row service_row2">
							<div className="col-md-4">
								<div className="service_main_sec">
									<div className="service_img_sec">
										<img src="images/service-44.png" className="img-responsive" />
									</div>
									<div className="service_contnt_sec4">
										<h3>RESPONSIVE WEB DESIGNING</h3>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .</p>
									</div>
								</div>
							</div>	
							<div className="col-md-4">
								<div className="service_main_sec service_main_sec2">
									<div className="service_img_sec">
										<img src="images/service-33.png" className="img-responsive" />
									</div>
									<div className="service_contnt_sec4">
										<h3>WIRE FRAMES & DESIGNING</h3>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .</p>
									</div>
								</div>
							</div>	
							<div className="col-md-4">	
								<div className="service_main_sec">
									<div className="service_img_sec ">
										<img src="images/service-33.png" className="img-responsive" />
									</div>
									<div className="service_contnt_sec4">
										<h3>GRAPHIC DESIGNING</h3>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .</p>
									</div>
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
 			</div>	
 		);
 	}
 }

 export default Design;
