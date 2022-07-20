<?php
	// require variables
	require_once '../config.php';
	$meta_media = 'ווב';
	$img_path = 'images/';
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
        <link rel="stylesheet" href="css/reset.css" type="text/css" media="screen" />
        <link rel="stylesheet" href="css/nivo-custom.css" type="text/css" media="screen" />
        <link rel="stylesheet" href="css/nivo-slider.css" type="text/css" media="screen" />
        <link rel="stylesheet" href="css/layout.css" type="text/css" media="screen" />
        <link rel="stylesheet" href="css/ui.css" type="text/css" media="screen" />

        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
        <script src="https://code.jquery.com/ui/1.8.1/jquery-ui.js"></script>
        <script type="text/javascript" src="js/jquery.nivo.slider.js"></script>
        <script type="text/javascript" src="js/jet.class.js"></script>
        <script type="text/javascript">
			var meta_gtm = "<?php echo $meta_gtm; ?>";
			var bann_id = "<?php echo $bannID; ?>";
			var meta_title = "<?php echo $meta_title; ?>";
		</script>
    </head>

    <body>

        <div id="page">
        	<?php
						// require content
						require_once 'content.php';
					?>



						<div id="sidebar">

							<h4>
								לפגישת ייעוץ<br>השאירו פרטיכם:
							</h4>
						</div>
							<form method="post" action="http://campaign.twisted.co.il/manager/" name="<?php echo $meta_name; ?>" id="theForm">

	                    <div id="name-field" class="form-input">
	                        <label for="fullname">שם</label>
	                        <input type="text" id="fullname" name="fullname" class="transparent" maxlength="255" tabindex="1" />
	                    </div>
	                    <div id="phone-field" class="form-input">
	                        <label for="phone">טלפון</label>
	                        <input type="text" id="phone" name="phone" class="transparent" maxlength="7" tabindex="3" />
	                        <div id="prefix-select" class="select-style">
	                            <select id="prefix" name="prefix" tabindex="2">
	                                <option value="052">052</option>
	                                <option value="050">050</option>
	                                <option value="053">053</option>
	                                <option value="054">054</option>
	                                <option value="055">055</option>
	                                <option value="057">057</option>
	                                <option value="058">058</option>
	                                <option value="02">02</option>
	                                <option value="03">03</option>
	                                <option value="04">04</option>
	                                <option value="08">08</option>
	                                <option value="09">09</option>
	                                <option value="072">072</option>
	                                <option value="073">073</option>
	                                <option value="074">074</option>
	                                <option value="076">076</option>
	                                <option value="077">077</option>
	                                <option value="078">078</option>
	                            </select>
	                        </div>
	                    </div>
	                    <div id="email-field" class="form-input">
	                        <label for="email">מייל</label>
	                        <input type="text" id="email" name="email" class="transparent" maxlength="255" tabindex="4" />
	                    </div>
	                    <!-- <div id="newsletter-field" class="form-checkbox squaredFour"> -->
	                        <!-- <label class="small">הנני מאשר קבלת תוכן פרסומי בכל אמצעי אלקטרוני</label> -->
	                        <!-- <input type="checkbox" id="newsletter" name="newsletter" class="transparent" <?php if($bannID == $exc[0]) { echo ''; } else { echo 'checked="checked"'; } ?> tabindex="5" /> -->
	                        <!-- <input type="checkbox" id="newsletter" name="newsletter" class="transparent" tabindex="5" />
	                        <label for="newsletter"></label> -->
	                    <!-- </div> -->

						<div id="submit_btn" class="submit">שלח</div>
						<div class="chk">
								<input type="checkbox" name="news" id="news">
								<label for="news">הנני מאשר קבלת תוכן פרסומי בכל אמצעי אלקטרוני</label>
						</div>

						<input type="hidden" id="form_name" name="form_name" value="<?php echo $meta_name; ?>" />
						<input type="hidden" id="furl" name="furl" value="" />
	                    <input type="hidden" id="L" name="L" value="" />
	                    <input type="hidden" id="R" name="R" value="" />
	                    <input type="hidden" id="user_browser" name="user_browser" value="false" />
	                    <input type="hidden" id="browser_next_url" name="browser_next_url" value="" />
	                    <input type="hidden" id="ref" name="ref" value="" />
	                    <input type="hidden" id="eventID" name="eventID" value="<?php echo $meta_event; ?>" />
	                    <input type="hidden" id="media" name="media" value="<?php echo $meta_media; ?>" />
	                    <input type="hidden" id="bannID" name="bannID" value="<?php echo $bannID; ?>" />
	                    <input type="hidden" id="cID" name="cID" value="" />
	                    <!-- Walla+ -->
	                    <input type="hidden" id="lm_supplier" name="lm_supplier" value="" />
	                    <input type="hidden" id="lm_bc" name="lm_bc" value="" />
					</form>

				<div id="preloader">
					<h6>שולח פרטים...</h6>
					<div id="preloader_2">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
      </div>
        <div id="copyright">
					<div id="twisted"></div>
					<div class="clearfix"></div>
				</div>
        <script type="text/javascript" src="js/validation.js"></script>
        <script type="text/javascript" src="js/custom.js"></script>
        <script src="https://cdn.enable.co.il/licenses/enable-L442rn2ytf9quk-0817-3203/init.js"></script>

        <?php
			// require google tag manager template
			require_once $loc . $assetsDir . 'gtm.php';
		?>
    </body>
</html>
