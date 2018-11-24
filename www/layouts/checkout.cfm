<cfoutput> <!DOCTYPE html>
<!--[if lte IE 9]><html class="ie no-canvas"><![endif]-->
<!--[if gt IE 9]><html><![endif]-->
<html lang="en">
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="user-scalable=yes, width=device-width, initial-scale=1.0, maximum-scale=5.0" />
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

			<h1 class="logo hideText">
				<a href="/" accesskey="h"><cf_websiteName></a>
			</h1>

			<nav class="mainMenu" id="main-menu" aria-label="Main Menu">

			</nav>
		</div>
	</header>

	<article class="content wideContent v65-group">		
		<a class="backToTop" href="##"><span class="icon-small-up"></span></a>
		<div class="wideWrapper v65-group">
			<cf_mainContent>
		</div>
	</article><!--/contentWide-->
	
	<footer>
		<div class="wideWrapper v65-group">
			<div class="upperFooter v65-group">
				<ul class="socialIcons">
					<cf_customFile file="/v65html/_social.html">
				</ul>

				<nav aria-label="Footer Menu">
					<cf_layoutFooterNav>
				</nav>

				<div class="footerAddress">
					<cf_pods location="Footer Address" type="description">
				</div>

				<div class="footerBand">
					<span class="icon-swirl"></span>
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
</html> </cfoutput>
