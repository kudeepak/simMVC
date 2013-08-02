<?php session_start();
/***************************** Creation Log *******************************
  File Name                   -  index.php
  Module Name                 -  Root Module 
  Project Name                -  test5July
  Description                 -  Module will used as root
  Version                     -  1.0
  Created by                  -  DEEPAK KUMAR
  Created on                  -  July 5, 2013

 ***************************** Update Log ********************************
  SNo        Updated by       Ver            Updated on          Description
  -------------------------------------------------------------------------*/
//LIB FILE AND SETTINGS
require_once "settings/db.php";
require_once "settings/common.php";
//require_once "settings/adn.php";
//require_once "settings/web.php";
require_once "lib/php/view/Smarty.class.php";
require_once "lib/php/view/view.php";
require_once "lib/php/controller/controller.php";
require_once "lib/php/model/model.php";
$DB_DEBUG_MODE = 1;
global $URL;
//SET WHEN CALL BY URL
if (isset($_REQUEST['loc']) && $_REQUEST['loc'] != NULL) {
	$URL = array();
	$URL = explode('/', $_REQUEST['loc']);

	if (file_exists($APP_MODEL . $URL['0'] . ".php")
			&& file_exists($APP_CONTROLLER . $URL['0'] . ".php")) {
		require_once $APP_MODEL . $URL['0'] . ".php";
		require_once $APP_CONTROLLER . $URL['0'] . ".php";

		$CLASS = "" . $URL['0'];
		$OBJ = new $CLASS();
	}
} else {
	$URL['0'] = $DEFAULT_PAGE;
	$URL['1'] = $DEFAULT_PAGE_FUNCTION;
	$URL['2'] = $DEFAULT_PAGE_ARGS;
	require_once $APP_MODEL . $DEFAULT_PAGE . ".php";
	require_once $APP_CONTROLLER . $DEFAULT_PAGE . ".php";

	$CLASS = "" . $DEFAULT_PAGE;
	$OBJ = new $CLASS();	
}
?>