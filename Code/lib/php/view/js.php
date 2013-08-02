<?php  
/***************************** Creation Log *******************************
    File Name                   -  model.php
    Module Name                 -  
    Project Name                -
    Description                 -  database interaction
    Version                     -
    Created by                  -  DEEPAK KUMAR
    Created on                  -  Jan 04, 2007

    ***************************** Update Log ********************************
    SNo        Updated by       Ver            Updated on          Description
    -------------------------------------------------------------------------*/
class js
{
	 function ajaxlink()
	 {
			echo "<a href='' id='link' onclick='event.returnValue = false; return false;'></a>
			       <script type='text/javascript'>
					//<![CDATA[
					Event.observe('link', 'click', function(event) { new Ajax.Updater('$idofposition','$urltocall', 
					{asynchronous:true, evalScripts:true, 		insertion:Insertion.Top, requestHeaders:['X-Update', 'post']}) }, false);
					//]]>
				   </script>";
	}	
	
 
}
?>