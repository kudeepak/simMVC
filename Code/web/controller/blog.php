<?php /***************************** Creation Log *******************************
	  File Name                   -  blog.php
	  Module Name                 -  blog
	  Project Name                -  test5july
	  Description                 -  This is class to show the blog list.
	  Version                     -  1,0
	  Created by                  -  DEEPAK KUMAR
	  Created on                  -  July 5, 2013
	   ***************************** Update Log ********************************
	  SNo        Updated by       Ver            Updated on          Description
	  -------------------------------------------------------------------------*/

class blog extends controller {
	function index() {
		$arr = array();
		$arr = $this->OBJMODEL->fetchBlogWithCommentCount();
		if ($arr['count'] > 0) {
			$this->OBJVIEW->assign('data', $arr['data']);
		}
	}
}
?>