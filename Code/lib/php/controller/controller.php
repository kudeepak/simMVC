<?php
/***************************** Creation Log *******************************
    File Name                   -  view.php
    Module Name                 -  Common Controller to manage the model and view
    Project Name                -  Test 5 July
    Description                 -  This class have controller class to render view and feching data 
    Version                     -  1.0
    Created by                  -  DEEPAK KUMAR
    Created on                  -  July 5, 2013
 ***************************** Update Log ********************************
    SNo        Updated by       Ver            Updated on          Description
    -------------------------------------------------------------------------*/
class controller {
	var $OBJMODEL;
	var $OBJVIEW;
	var $OBJRETURN;
	var $LAYOUT;
	function controller() {
		global $URL;

		$CLASS = $URL['0'] . "_model";

		$this->OBJMODEL = new $CLASS(); //Model object
		$this->OBJMODEL->table = $URL['0'];

		$this->OBJRETURN = new ClsDBReturnmodel(); //Model return Object;

		$this->OBJVIEW = new view(); //view object
		$this->OBJVIEW->viewname = $URL['0'] . '/' . $URL['1'] . ".html"; //view file

		$this->$URL['1'](); //call function of url
		$request = '';
		if (isset($_REQUEST['req']) && $_REQUEST['req'] != NULL
				&& $_REQUEST['req'] = 'ajax') {
			$request = 'ajax';
		}
		$this->OBJVIEW->showdisplay($request); //Display View  		
	}

	function session($name, $value) {
		$_SESSION[$name] = $value;
	}
}
?>