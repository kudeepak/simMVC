<?php /***************************** Creation Log *******************************
	  File Name                   -  blog.php
	  Module Name                 -  Blog Listing
	  Project Name                -  Test5Julky
	  Description                 -  This is class for listing bussines logic
	  Version                     -  1.1
	  Created by                  -  DEEPAK KUMAR
	  Created on                  -  July 5, 2013	  
	   ***************************** Update Log ********************************
	  SNo        Updated by       Ver            Updated on          Description
	  -------------------------------------------------------------------------
	   */

class blog_model extends model {
    public function fetchBlogWithCommentCount() {
    	$sSql = "SELECT blog_id, title, body, created_by, created_at, 
    			blog_comment_count(blog_id) as comment_count FROM blog WHERE 1";
    
    	return $this->selectBySQL($sSql);
    }
}
?>