import React from 'react'
// import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const HomeHeader = () => (
	<div>
		<header id="header">
			<div class="inner">
				<a href="index.html" class="logo"><strong>Projection</strong> by TEMPLATED</a>
				<nav id="nav">
					<a href="/home">Home</a>
					<a href="/generic">Generic</a>
					<a href="elements.html">Elements</a>
					<a href="/loginsignup">SignUp/Login </a>
				</nav>
				<a href="#navPanel" class="navPanelToggle"><span class="fa fa-bars"></span></a>
			</div>
		</header>
		<section id="banner">
			<div class="inner">
				<header>
					<h1>Welcome to Projection</h1>
				</header>
				<div class="flex ">
					<div>
						<span class="icon fa-car"></span>
						<h3>Aliquam</h3>
						<p>Suspendisse amet ullamco</p>
					</div>
					<div>
						<span class="icon fa-camera"></span>
						<h3>Elementum</h3>
						<p>Class aptent taciti ad litora</p>
					</div>
					<div>
						<span class="icon fa-bug"></span>
						<h3>Ultrices</h3>
						<p>Nulla vitae mauris non felis</p>
					</div>
				</div>
				<footer>
					{/* <a href="#" class="button">Get Started</a> */}
				</footer>
			</div>
		</section>
	</div>
)
export default HomeHeader
