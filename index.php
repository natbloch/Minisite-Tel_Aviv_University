<?php
	$loc = $_SERVER['DOCUMENT_ROOT'];
	$assetsDir = '/landpages/assets/includes/';
	require_once $loc . $assetsDir . 'Mobile_Detect.php';

	$detect = new Mobile_Detect;

	$queryString = $_SERVER['QUERY_STRING'];
	parse_str($queryString, $httpQuery);
	$creativeID = $httpQuery['creative'];
	$url = 'https://www.basis.org.il/landpages/campaigns/2020/0520_grading-days/';
	$queryStr = (strlen($_SERVER['QUERY_STRING']) > 0) ? '?'.$_SERVER["QUERY_STRING"] : '';

	if( $detect->isMobile() && !$detect->isTablet() ){
		header('Location: ' . $url . 'mobile/' . $queryStr);
	}
	else if( !$detect->isMobile() && $detect->isTablet() ){
		header('Location: ' . $url . 'mobile/' . $queryStr);
	}
	else {
		header('Location: ' . $url . 'minisite/' . $queryStr);
	}
?>
