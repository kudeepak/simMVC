<?php /***************************** Creation Log *******************************
	  File Name                   -  comment.php
	  Module Name                 -  blog
	  Project Name                -  test5july
	  Description                 -  This is class file to show list/ Add/ like dislike and reply comment perocess.
	  Version                     -  1.0
	  Created by                  -  DEEPAK KUMAR
	  Created on                  -  July 5, 2013
	   ***************************** Update Log ********************************
	  SNo        Updated by       Ver            Updated on          Description
	  -------------------------------------------------------------------------*/
class comment extends controller {
	function add() {
		if (isset($_REQUEST['frm']) && $_REQUEST['frm'] != NULL
				&& $_REQUEST['frm'] == 'load') {
			$this->OBJVIEW->assign('blog_id', $_REQUEST['blog_id']);
			$this->OBJVIEW->assign('comment_id', $_REQUEST['comment_id']);
		} else {
			$arComment = array();

			$setError = 0;
			$arComment['blog_id'] = isset($_REQUEST['blog_id'])
					&& $_REQUEST['blog_id'] != NULL ? $_REQUEST['blog_id']
					: $setError = 1;

			$arComment['comment'] = isset($_REQUEST['comment'])
					&& $_REQUEST['comment'] != NULL ? $_REQUEST['comment']
					: $setError = 1;

			$arComment['posted_by'] = isset($_REQUEST['name'])
					&& $_REQUEST['name'] != NULL ? $_REQUEST['name']
					: $setError = 1;

			$arComment['created_at'] = date('Y-m-d H:i:s');

			$arComment['replied_on'] = isset($_REQUEST['comment_id'])
					&& $_REQUEST['comment_id'] != NULL ? $_REQUEST['comment_id']
					: NULL;

			$arComment['email'] = isset($_REQUEST['email'])
					&& $_REQUEST['email'] != NULL ? $_REQUEST['email']
					: $setError = 1;            
			if ($setError == 1) {
				echo "error";
			} else {
				$this->OBJRETURN = $this->OBJMODEL->fnc_InsertUpdate('comment', $arComment, NULL);
				if ($this->OBJRETURN->iIdentity != NULL) {
					echo "success";
				} else {
					echo "error";
				}
			}
			die;
		}
	}
	
	function listcomment() {
		$setError = 0;
		
		$blog_id = isset($_REQUEST['blog_id']) && $_REQUEST['blog_id'] != NULL ? $_REQUEST['blog_id']:$setError =1;
		$comment_id = isset($_REQUEST['comment_id']) && $_REQUEST['comment_id'] != NULL ? $_REQUEST['comment_id']:NULL;
		$sort = isset($_REQUEST['sort']) && $_REQUEST['sort'] != NULL ? $_REQUEST['sort']:NULL;
		$this->OBJVIEW->assign('comment', $this->OBJMODEL->selectCommentTree($blog_id, $sort, $comment_id));
		
		if($comment_id != NULL) {
			$this->OBJVIEW->assign('margin', '15px');			
		}
		if ($setError == 1 ) {
			echo "error"; die;
		} 
	}
	
	function commentcount() {
		$blog_id = isset($_REQUEST['blog_id']) && $_REQUEST['blog_id'] != NULL ? $_REQUEST['blog_id']:$setError =1;
		$comment_id = isset($_REQUEST['comment_id']) && $_REQUEST['comment_id'] != NULL ? $_REQUEST['comment_id']:NULL;		
		echo $this->OBJMODEL->selectCommentCount($blog_id, $comment_id);die;
	}
	
	function likes() {
		$comment_id = isset($_REQUEST['comment_id']) && $_REQUEST['comment_id'] != NULL ? $_REQUEST['comment_id']:NULL;
		echo $this->OBJMODEL->updateLikesCount($comment_id);die;
	}
	
	function dislikes() {
		$comment_id = isset($_REQUEST['comment_id']) && $_REQUEST['comment_id'] != NULL ? $_REQUEST['comment_id']:NULL;
		echo $this->OBJMODEL->updatedisLikesCount($comment_id);die;
	}	
}
?>