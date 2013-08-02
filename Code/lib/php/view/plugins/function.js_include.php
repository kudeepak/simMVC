<?php 
function smarty_function_js_include($paras) 
{   
  return "<script language='javascript' type='text/javascript' src='lib/js/".$paras['js_file'].".js'></script>";	
}
?>