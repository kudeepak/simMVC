<?php 
function smarty_function_css_include($paras) 
{   
  return "<link rel='stylesheet' href='css/".$paras['css_file']."' />"; 
}
?>