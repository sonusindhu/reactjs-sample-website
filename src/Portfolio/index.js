/**
 * React Static Boilerplate
 * Copyright (c) 2015-present Kriasoft. All rights reserved.
 */

 /* @flow */

 import React from 'react';

 class PortfolioPage extends React.Component {
 	render() {
 		return (
 			<div>
 				<div className="container-fluid about_page_container">
					<div className="container">
						<ol className="breadcrumb custom_breadcrumb">
							<li><a href="#">Home</a></li>
							<li className="active">Portfolio</li>        
						</ol>
						<h3 className="about_page_head">Portfolio</h3>
						<p className="picnframes_txt">Pic N Frame Technologies is one of the leading software company based in India.</p>
					</div>
				</div>
				
				<div className="container-fluid gallery_page_sec">
					<div className="container">
						<div className="row">
							<div className="gallery_post_sec">
								<div className="port_contnt_sec">
									<h3>GALLERY 1</h3>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</p>
								</div>
							</div>
							<div className="gallry_img_sec">
								<img src="images/gallry_mobile1.jpg" id="responsive_port" className="img-responsive" />
								<img src="images/gallry1.jpg" id="web_port" className="img-responsive" />
								<img src="images/gallry11.jpg" id="port_pic" className="img-responsive" />
							</div>	
						</div>
					</div>
				</div>
				
				<div className="container-fluid gallery_page_sec">
					<div className="container">
						<div className="row">
							<div className="gallery_post_sec">
								<div className="port_contnt_sec">
									<h3>GALLERY 2</h3>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</p>
								</div>
							</div>
							<div className="gallry_img_sec">
								<img src="images/gallry_mobile1.jpg" id="responsive_port" className="img-responsive" />
								<img src="images/gallry1.jpg" id="web_port" className="img-responsive" />
								<img src="images/gallry11.jpg" id="port_pic" className="img-responsive" />
							</div>	
						</div>
					</div>
				</div>
				
				<div className="container-fluid gallery_page_sec">
					<div className="container">
						<div className="row">
							<div className="gallery_post_sec">
								<div className="port_contnt_sec">
									<h3>GALLERY 3</h3>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</p>
								</div>
							</div>
							<div className="gallry_img_sec">
								<img src="images/gallry_mobile1.jpg" id="responsive_port" className="img-responsive" />
								<img src="images/gallry1.jpg" id="web_port" className="img-responsive" />
								<img src="images/gallry11.jpg" id="port_pic" className="img-responsive" />
							</div>	
						</div>
					</div>
				</div>
				
				<div className="container-fluid status_sec">
					<div className="overlay3"></div>
					<div className="container">
						<div className="row">
							<div className="col-md-3">
								<div className="status_work_sec">
									<div className="status_icn_sec">
										<i className="fa fa-pencil-square-o" aria-hidden="true"></i>
									</div>
									<h3>4005</h3>
									<div className="border_sec3"></div>
									<p>DESIGNS CREATED</p>
								</div>
							</div>
							<div className="col-md-3">
								<div className="status_work_sec">
									<div className="status_icn_sec">
										<i className="fa fa-user-o" aria-hidden="true"></i>
									</div>
									<h3>1980</h3>
									<div className="border_sec3"></div>
									<p>CLIENTS WORLDWIDE</p>
								</div>
							</div>
							<div className="col-md-3">
								<div className="status_work_sec">
									<div className="status_icn_sec">
										<i className="fa fa-rocket" aria-hidden="true"></i>
									</div>
									<h3>3640</h3>
									<div className="border_sec3"></div>
									<p>PROJECTS DELIVERED</p>
								</div>
							</div>
							<div className="col-md-3">
								<div className="status_work_sec">
									<div className="status_icn_sec">
										<i className="fa fa-coffee" aria-hidden="true"></i>
									</div>
									<h3>2060</h3>
									<div className="border_sec3"></div>
									<p>CUPS OF COFFEE</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="container-fluid client_sec">
					<div className="container">
						<div className="border_sec"></div>
						<h3 className="about_heading">Our Clients</h3>
						<p className="about_p">Client Satisfaction” – We communicate with our clients through the most convenient mode to analyze their specifications as well as requirements thoroughly.</p>
						<div className="row client_row">
							<div className="col-md-12">
								<div id="myCarousel2" className="carousel slide" data-ride="carousel">
									<div className="carousel-inner">

										<div className="item active">
											
											<div className="carousel-caption2">
												<div className="row client_row2">
													<div className="col-md-6">
														<div className="client_box">
															<img src="images/client.png" className="img-responsive" />
															<div className="client_contnt_sec">
																<p>Lorem Ipsum is simply dummy text of the printing and typesetting of industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a of gallery of type and scrambled it to make a type specimen at book lorem is Lorem Ipsum is simply dummy text of the printi ngsdsatypesetting industry.</p>
																<p className="client_name ">- Sindhu holla</p>
															</div>
														</div>
													</div>
													<div className="col-md-6 ">
														<div className="client_box">
															<img src="images/client.png" className="img-responsive" />
															<div className="client_contnt_sec">
																<p>Lorem Ipsum is simply dummy text of the printing and typesetting of industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a of gallery of type and scrambled it to make a type specimen at book lorem is Lorem Ipsum is simply dummy text of the printi ngsdsatypesetting industry.</p>
																<p className="client_name ">- Sindhu holla</p>
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
													<div className="col-md-6">
														<div className="client_box">
															<img src="images/client.png" className="img-responsive" />
															<div className="client_contnt_sec">
																<p>Lorem Ipsum is simply dummy text of the printing and typesetting of industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a of gallery of type and scrambled it to make a type specimen at book lorem is Lorem Ipsum is simply dummy text of the printi ngsdsatypesetting industry.</p>
																<p className="client_name">- Sindhu holla</p>
															</div>
														</div>
													</div>
													<div className="col-md-6">
														<div className="client_box">
															<img src="images/client.png" className="img-responsive" />
															<div className="client_contnt_sec">
																<p>Lorem Ipsum is simply dummy text of the printing and typesetting of industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a of gallery of type and scrambled it to make a type specimen at book lorem is Lorem Ipsum is simply dummy text of the printi ngsdsatypesetting industry.</p>
																<p className="client_name">- Sindhu holla</p>
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
													<div className="col-md-6">
														<div className="client_box">
															<img src="images/client.png" className="img-responsive" />
															<div className="client_contnt_sec">
																<p>Lorem Ipsum is simply dummy text of the printing and typesetting of industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a of gallery of type and scrambled it to make a type specimen at book lorem is Lorem Ipsum is simply dummy text of the printi ngsdsatypesetting industry.</p>
																<p className="client_name">- Sindhu holla</p>
															</div>
														</div>
													</div>
													<div className="col-md-6">
														<div className="client_box">
															<img src="images/client.png" className="img-responsive" />
															<div className="client_contnt_sec">
																<p>Lorem Ipsum is simply dummy text of the printing and typesetting of industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a of gallery of type and scrambled it to make a type specimen at book lorem is Lorem Ipsum is simply dummy text of the printi ngsdsatypesetting industry.</p>
																<p className="client_name">- Sindhu holla</p>
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
						</div>
					</div>
				</div>
 			</div>	
 		);
 	}
 }

 export default PortfolioPage;
