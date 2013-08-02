<?php 
function smarty_function_grid_view($paras) 
{ 
      $gridview ="<table class='".$paras['css']."'><tr>";
  	  		
	  foreach($paras['fields'] as $value){
    		$gridview.= "<td><strong>".strtoupper($value)."</strong></td>";
   	  }
			
	  $gridview.= "</tr>";
			
	  for($i=0;$i<$paras['counts']; $i++)
	  {
		  $gridview.= "<tr>";
		  foreach($paras['data'][$i] as $value){
    			$gridview.= "<td>".$value."</td>";
   		  }
		  $gridview.= "</tr>";
	  }							 
     		
	  $gridview.= "</table>";
			
	  return  $gridview;
}
?>