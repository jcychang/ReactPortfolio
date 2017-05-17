import React from 'react'
import Slider from 'react-slick'
import ModalTemplate from 'ModalTemplate'

class Portfolio extends React.Component {
	componentDidMount() {
	}
	render() {
		var settings = {
			arrows: true,
			autoplay: true,
			autoplaySpeed: 10000,
			// customPaging: function(i) {
			// 	return <a><img src={require(`../assets/Color${i+1}.png`)}/></a>
			// },
			dots: true,
			dotsClass: 'slick-dots slick-thumb',
			infinite: true,
			pauseOnHover: true,
			responsive: [{breakpoint: 639, settings: {arrows: false}}],
			speed: 1000,
			slidesToScroll: 1,
		}

		return (
			<div className = "row">
				<div className = "columns medium-10 large-8 small-centered">
					<h1 className = "page-title">portfolio</h1>
					<Slider {...settings}>
						<div><img src={require('../assets/Color1.png')}/></div>
						<div><img src={require('../assets/Color2.png')}/></div>
						<div><img src={require('../assets/Color3.png')}/></div>
						<div><img src={require('../assets/Color4.png')}/></div>
						<div><img src={require('../assets/Color5.png')}/></div>
						<div><img src={require('../assets/Color6.png')}/></div>
					</Slider>
				</div>
			</div>
		)
	}
}

module.exports = Portfolio;