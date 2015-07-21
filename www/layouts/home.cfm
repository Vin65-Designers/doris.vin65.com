<cfoutput> 
<!--[if lte IE 9]><html class="ie no-canvas"><![endif]-->
<!--[if gt IE 9]><html><![endif]-->
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<cf_metaTags>

	<link rel="Shortcut Icon" href="/favicon.ico" type="image/x-icon">
	<link rel="apple-touch-icon" href="/apple-touch-icon.png"/>

	<cf_vin65GlobalAssets>
	
	<link href='https://fonts.googleapis.com/css?family=Montserrat:400,700|Arapey:400italic,400' rel='stylesheet' type='text/css'>
	<cf_css files="/assets/css/screen.min.css">
	
	<!--[if lt IE 9]>
		<script src="/assets/js/html5shiv-printshiv.js"></script>
		<script src="/assets/js/respond.min.js"></script>
	<![endif]-->


</head>
<body>

	<header class="primary v65-group">
		
		<div class="wideWrapper">
			<div id="user-tools">
				<cf_modalCart>	
				<cf_login>
			</div><!--/user-tools-->

			<h1 class="logo hideText">
				<a href="/" accesskey="h"><cf_websiteName></a>
			</h1>

			<div class="menu-icon"><span></span></div>

			<nav class="mainMenu" id="main-menu">
				<cf_layoutHeaderNav depth="2">
			</nav>
		</div>
	</header>

	<cf_contentBlock group="Homepage Banner">

	<section class="content v65-group">
		<a class="backToTop" href="##"><i class="icon-small-up"></i></a>
		<a name="scrollDown"></a>
		<div class="two-thirds">
			<div class="homepageProductGroup">
			<cf_product_group code="HomepageProductGroup">
		</div>
		</div>

		<div class="blogPosts one-third">
			<cf_pods location="Homepage Blog" type="description">
			<cf_blogWidget maxRows="2">
		</div>
	</section>

	<section class="content v65-group">
		<cf_contentBlock group="Homepage Links">
	</section>

	<section class="content v65-group">
		<div class="subscribeSection one-third">
			<cf_pods location="Homepage Subscribe Content" type="description">
			<cf_subscribe contactType="Newsletter">
		</div>

		<div class="two-thirds upcomingEvents">
			<div class="responsiveWrapper v65-group">
				<cf_eventUpcoming eventCount="2">

				<cf_contentBlock group="Homepage Events">
			</div>
		</div>
	</section>

	<section class="content homepageContent v65-group">
		<div class="responsiveWrapper">
			<cf_mainContent>
		</div>
	</section>
	
	<footer>
		<div class="wideWrapper v65-group">
			<div class="upperFooter v65-group">
				<ul class="socialIcons">
					<cf_customFile file="/v65html/_social.html">
				</ul>

				<nav>
					<cf_layoutFooterNav>
				</nav>

				<div class="footerAddress">
					<cf_pods location="Footer Address" type="description">
				</div>

				<div class="footerBand">
					<i class="icon-swirl"></i>
				</div>
			</div>
				
			<div class="legalInformation">
				<p><span class="copyright"><cf_copyright></span><cf_vin65Accolade></p>
			</div>
		</div>
	</footer>

	<cf_js files="/assets/js/scripts.js,/assets/nivo/jquery.nivo.slider.pack.js">

	<cf_vin65GlobalFooterAssets>

</body>
</html>