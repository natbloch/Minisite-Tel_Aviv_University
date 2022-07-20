<?php
	// require variables
	require_once '../../config.php';
	$meta_media = 'ווב';
	$img_path = '../images/';
?>

<!DOCTYPE HTML>
<html>
    <head>
    	<?php
			// require meta template for head
			require_once $loc . $assetsDir . 'meta.php';
		?>

        <link rel="stylesheet" href="https://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css" />
        <link rel="stylesheet" href="//basis.org.il/landpages/assets/fonts/assistant/assistant.css" type="text/css" media="screen" />
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Assistant:200,300,400,600,700,800" type="text/css" media="screen" />
        <link rel="stylesheet" href="../css/reset.css" type="text/css" media="screen" />
        <link rel="stylesheet" href="../css/nivo-custom.css" type="text/css" media="screen" />
        <link rel="stylesheet" href="../css/nivo-slider.css" type="text/css" media="screen" />
        <link rel="stylesheet" href="../css/layout.css" type="text/css" media="screen" />
        <link rel="stylesheet" href="../css/ui.css" type="text/css" media="screen" />

        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
        <script src="https://code.jquery.com/ui/1.8.1/jquery-ui.js"></script>
        <script type="text/javascript" src="../js/jquery.nivo.slider.js"></script>
        <script type="text/javascript" src="../js/jet.class.js"></script>
        <script type="text/javascript">
			var meta_gtm = "<?php echo $meta_gtm; ?>";
			var bann_id = "<?php echo $bannID; ?>";
			var meta_title = "<?php echo $meta_title; ?>";
		</script>
    </head>

    <body>
    	<?php
			// require svg logo
			require_once $loc . $assetsDir . 'svg-logo_white.php';
		?>
        <div id="page">
        	<?php
				// require content
				require_once '../content.php';
			?>


        

			<div id="sidebar">
                <div id="thanks">
					<h6>תודה על פנייתכם<br /><span>נציגינו ישובו אליכם בהקדם</span></h6>
				</div>
            </div>

        </div>
        <div id="copyright">
			<div id="twisted"></div>
			<div class="clearfix"></div>
		</div>
        <script type="text/javascript" src="../js/custom.js"></script>

        <?php
			// require google tag manager template
			require_once $loc . $assetsDir . 'gtm.php';
		?>
    </body>
</html>
