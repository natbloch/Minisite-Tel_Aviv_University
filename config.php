<?php
	// get root location
	$loc = $_SERVER['DOCUMENT_ROOT'];
	// get includes location
	$assetsDir = '/landpages/assets/includes/';

	// parse querystring
	$queryString = $_SERVER['QUERY_STRING'];
	parse_str($queryString, $httpQuery);
	$bannID = $httpQuery['BannID'];
	$exceptID = array( 'direct'=>'6160' );
	$exc = array_values($exceptID);

	// variables
	$meta_title = 'בסיס לאמנות ותרבות | לימודי צילום | לימודי פיסול | לימודי ציור';
	$meta_description = 'בסיס לאמנות ותרבות - בית לתרבות, אמנות, גלריות, תערוכות, אירועי תרבות שונים ובית ספר לאומנות הכולל לימודי ציור, פיסול וצילום';
	$meta_keywords = 'בסיס, Basis, תרבות, אמנות, אומנות, צילום, פיסול, תערוכות, גלריות, אירועי תרבות, בית ספר לאמנות, בית ספר לאומנות, art, painting, drawing, design, sculpture, photography, art gallery, art galleries, culture, cultural events';
	$meta_favicon = 'https://www.basis.org.il/landpages/assets/gfx/favicon_red.ico';
	$meta_image = '';
	$meta_type= 'website';
	$meta_url = 'https://www.basis.org.il/landpages/campaigns/2020/0520_grading-days/';
	$meta_designer = 'Natasha Kravetz';
	$meta_developer = 'Nathaniel Bloch';
	$meta_copyright = 'twisted';
	$meta_name = 'יום מיונים אפריל 20';
	$meta_event = '1335';

	// google tag manager id
	$meta_gtm = 'GTM-P596D7';
?>
