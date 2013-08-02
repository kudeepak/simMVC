<?php /***************************** Creation Log *******************************
	  File Name                   -  blog.php
	  Module Name                 -  Blog Listing
	  Project Name                -  Test5Julky
	  Description                 -  This is class for DB bussines logic
	  Version                     -  1.1
	  Created by                  -  DEEPAK KUMAR
	  Created on                  -  July 5, 2013	  
	   ***************************** Update Log ********************************
	  SNo        Updated by       Ver            Updated on          Description
	  -------------------------------------------------------------------------
	   */
class comment_model extends model {
	public function selectCommentTree($blog_id, $sort, $comment_id = NULL) {
		$orderby = '';
        switch($sort) {
        	case 'latest' :
        		$orderby = ' order by created_at DESC ';
        		break;
        	case 'oldest' :
        		$orderby = ' order by created_at ASC ';
        		break;
        	case 'like' :
        		$orderby = ' order by likes DESC ';
        		break;
        	case 'dislike' :
        		$orderby = ' order by dislikes DESC ';
        		break;
        }
		if ($comment_id == NULL) {
			$sSQL = "SELECT comment_id, blog_id, comment, posted_by, created_at, updated_by, 
    		updated_at, replied_on, email, if(likes,likes, 0) as likes , if(dislikes, dislikes, 0) as dislikes, blog_comment_reply_count(comment_id) as comment_count 
					FROM comment where replied_on = 0  AND blog_id = "
					. $blog_id.$orderby;
		} else {
			$sSQL = "SELECT comment_id, blog_id, comment, posted_by, created_at, updated_by,
    		updated_at, replied_on, email, if(likes,likes, 0) as likes , if(dislikes, dislikes, 0) as dislikes, blog_comment_reply_count(comment_id) as comment_count 
					FROM comment WHERE 
       	  	replied_on = " . $comment_id . " AND blog_id = " . $blog_id.$orderby;
		}

		$arr = $this->selectBySQL($sSQL);
		return $arr['data'];
	}

	public function selectCommentCount($blog_id, $comment_id = NULL) {
		if ($comment_id != NULL) {
			$sSQl = "SELECT blog_comment_reply_count(" . $comment_id
					. ") as counter";
		} else {
			$sSQl = "SELECT blog_comment_count(" . $blog_id . ") as counter";
		}

		$arr = $this->selectBySQL($sSQl);
		return $arr['data']['0']['counter'];
	}

	public function updateLikesCount($comment_id) {
		if ($comment_id != NULL && $_COOKIE['likes_' . $comment_id] == NULL) {
			$sSQl = "SELECT likes from comment WHERE comment_id = "
					. $comment_id;
			$arr = $this->selectBySQL($sSQl);
			$likes = $arr['data']['0']['likes'] ? $arr['data']['0']['likes']
							+ 1 : 1;
			$arrUpdate = array('likes' => $likes);
			$where = ' comment_id = ' . $comment_id;
			$this->fnc_InsertUpdate('comment', $arrUpdate, $where);
			setcookie('likes_' . $comment_id, $comment_id, 3600*10000);
			
			echo $likes;
			die;
		}else {
			echo "error";die;
		}
	}

	public function updateDisLikesCount($comment_id) {
		if ($comment_id != NULL && $_COOKIE['dislikes_' . $comment_id] == NULL) {
			$sSQl = "SELECT dislikes from comment WHERE comment_id = "
					. $comment_id;
			$arr = $this->selectBySQL($sSQl);
			$dislikes = $arr['data']['0']['dislikes'] ? $arr['data']['0']['dislikes']
							+ 1 : 1;
			$arrUpdate = array('dislikes' => $dislikes);
			$where = ' comment_id = ' . $comment_id;
			$this->fnc_InsertUpdate('comment', $arrUpdate, $where);
			setcookie('dislikes_' . $comment_id, $comment_id, 3600*10000);
			echo $dislikes;
			die;
		} else {
			echo "error";die;
		}
	}
}