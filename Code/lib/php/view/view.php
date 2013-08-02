<?php
/***************************** Creation Log *******************************
    File Name                   -  view.php
    Module Name                 -  Comman View Randering Class
    Project Name                -  Test 5 July
    Description                 -  This file have class to render the view
    Version                     -  1.0
    Created by                  -  DEEPAK KUMAR
    Created on                  -  July 5, 2013

 ***************************** Update Log ********************************
    SNo        Updated by       Ver            Updated on          Description
    -------------------------------------------------------------------------
 */
class view extends Smarty {
	var $LAYOUT;
	var $CONTANT;
	var $DATA_ARRAY = array();
	var $viewname; //same as method name;

	function showdisplay($REQUEST_TYPE = NULL) { 
		
		switch ($REQUEST_TYPE) {
		case 'ajax':
			$this->withoutLayout($this->viewname, $CATCH_id = NULL,
							$compile_id = NULL);
			break;
		default :			
			$this->withLayout($this->viewname, $CATCH_id = NULL,
							$compile_id = NULL);
			
			break;
		}
	}

	function withLayout($viewName, $CATCH_id = NULL, $compile_id = NULL) {
		
		global $APP_VIEW, $APP_VIEW_CAMPILE;
		global $APP_VIEW_CONFIG;
		global $APP_VIEW_CATCHE;
		global $APP_VIEW_COMPILECHECK;
		global $APP_VIEW_CATCH_LIFE;
		global $APP_VIEW_CATCHING;
		global $cache_modified_check;
		global $SITE_TITLE;
		global $LAYOUT;
		global $META_INFO;
		
		$this->template_dir = $APP_VIEW;
		$this->compile_dir = $APP_VIEW_CAMPILE;
		$this->config_dir = $APP_VIEW_CONFIG;
		$this->cache_dir = $APP_VIEW_CATCHE;
		$this->caching = $APP_VIEW_CATCHING;
		$this->compile_check = $APP_VIEW_COMPILECHECK;
		$this->cache_lifetime = $APP_VIEW_CATCH_LIFE;
		$this->cache_modified_check = $cache_modified_check;
		
		$this->assign('TITAL', $SITE_TITLE);
		$this->assign('META_INFO', $META_INFO);
		
		$this->randerValue();				
		$this->assign('CONTANT', $this->fetch($viewName, $CATCH_id, $compile_id));
		
		if (isset($this->LAYOUT) && $this->LAYOUT != NULL) {
			$this->display($this->LAYOUT, $CATCH_id, $compile_id);
		} else {
			$this->display($LAYOUT, $CATCH_id, $compile_id);
		}
		
	}

	function withoutLayout($viewName, $CATCH_id = NULL, $compile_id = NULL) {
		global $APP_VIEW, $APP_VIEW_CAMPILE;
		global $APP_VIEW_CONFIG;
		global $APP_VIEW_CATCHE;
		global $APP_VIEW_COMPILECHECK;
		global $APP_VIEW_CATCH_LIFE;
		global $APP_VIEW_CATCHING;
		global $cache_modified_check;
		global $SITE_TITLE;
		global $LAYOUT;
		global $META_INFO;
		$this->template_dir = $APP_VIEW;
		$this->compile_dir = $APP_VIEW_CAMPILE;
		$this->config_dir = $APP_VIEW_CONFIG;
		$this->cache_dir = $APP_VIEW_CATCHE;
		$this->caching = $APP_VIEW_CATCHING;
		$this->compile_check = $APP_VIEW_COMPILECHECK;
		$this->cache_lifetime = $APP_VIEW_CATCH_LIFE;
		$this->cache_modified_check = $cache_modified_check;
		$this->assign('TITAL', $SITE_TITLE);
		$this->assign('META_INFO', $META_INFO);
		$this->randerValue();
		echo $this->fetch($viewName, $CATCH_id, $compile_id);
	}

	function GoToMail($viewName, $CATCH_id = NULL, $compile_id = NULL) {
		global $APP_VIEW, $APP_VIEW_CAMPILE;
		global $APP_VIEW_CONFIG;
		global $APP_VIEW_CATCHE;
		global $APP_VIEW_COMPILECHECK;
		global $APP_VIEW_CATCH_LIFE;
		global $APP_VIEW_CATCHING;
		global $cache_modified_check;
		global $SITE_TITLE;
		global $LAYOUT;
		global $META_INFO;
		$this->template_dir = $APP_VIEW;
		$this->compile_dir = $APP_VIEW_CAMPILE;
		$this->config_dir = $APP_VIEW_CONFIG;
		$this->cache_dir = $APP_VIEW_CATCHE;
		$this->caching = $APP_VIEW_CATCHING;
		$this->compile_check = $APP_VIEW_COMPILECHECK;
		$this->cache_lifetime = $APP_VIEW_CATCH_LIFE;
		$this->cache_modified_check = $cache_modified_check;
		return $this->fetch($viewName, $CATCH_id, $compile_id); //set as massage.................................
	}

	function OutPutInPDF($viewName, $CATCH_id = NULL, $compile_id = NULL) {

	}

	function OutPutInDoc($viewName, $CATCH_id = NULL, $compile_id = NULL) {

	}

	function randerValue() {
		if (isset($this->DATA_ARRAY['data']) && $this->DATA_ARRAY['data']
						!= NULL) {
			$arr = array();
			$arr = $this->DATA_ARRAY['data'];
			foreach ($arr as $key => $value) {
				$this->assign("'" . $key . "'", $value);
			}
		}
	}

	function pageingview($arr = array()) {

	}
}
?>