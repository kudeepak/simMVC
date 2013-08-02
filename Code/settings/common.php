<?php
/***************************** Creation Log *******************************
    File Name                   -  common.php
    Module Name                 -  
    Project Name                -
    Description                 -  
    Version                     -
    Created by                  -  DEEPAK KUMAR
    Created on                  -  July 5, 2013

 ***************************** Update Log ********************************
    SNo        Updated by       Ver            Updated on          Description
    -------------------------------------------------------------------------
 */
////////////////////////////////////////////////FOR LAYOUT/////////////////////
//Application Folder Path SETTINGS
//VIEW INFO GOES HERE
$APP_MODEL = "web/model/";
$APP_CONTROLLER = "web/controller/";
//Following variable is user for smarty view directory settings
$APP_VIEW = "web/view";
$APP_VIEW_CAMPILE = "web/view/view_c";
$APP_VIEW_CATCHE = "web/view/cache";
$APP_VIEW_CONFIG = "web/view/configs";
$APP_VIEW_COMPILECHECK = true;
$APP_VIEW_CATCHING = true;
$APP_VIEW_CATCH_LIFE = 1;
$CACHE_MODEFIED_CHECK = true;
$LAYOUT = "layout/layout.html";

//APPLICATION WILL START FROM HERE
$DEFAULT_PAGE = "blog";
$DEFAULT_PAGE_CLASS = "blog";
$DEFAULT_PAGE_FUNCTION = "index";

//ERROR MASSAGE
$ERROR_MASSAGE_FOR_INVALID_URL = "<body bgcolor=#FFCC66><br><br><br><br><br><center><font color=#CC0000 size=+2 face=Courier New, Courier, monospace>
######################################################################################################################################################
  <BR><font color=#CC0000 size=+2 face=Courier New, Courier, monospace><strong>ERROR::This is not a valid url................................</strong></font>
<BR><font color=#CC0000 size=+2 face=Courier New, Courier, monospace><strong>Please enter valid url only................................</strong></font><BR>
######################################################################################################################################################</font></center>";

$ERROR_MASSAGE_FOR_INVALID_METHOD = "<body bgcolor=#FFCC66><br><br><br><br><br><center><font color=#CC0000 size=+2 face=Courier New, Courier, monospace>
######################################################################################################################################################
  <BR><font color=#CC0000 size=+2 face=Courier New, Courier, monospace><strong>ERROR::This is not a valid method................................</strong></font>
<BR><font color=#CC0000 size=+2 face=Courier New, Courier, monospace><strong>Please enter valid method only................................</strong></font><BR>
######################################################################################################################################################</font></center>";

$ERROR_MASSAGE_FOR_INVALID_METHOD = "<body bgcolor=#FFCC66><br><br><br><br><br><center><font color=#CC0000 size=+2 face=Courier New, Courier, monospace>
######################################################################################################################################################
  <BR><font color=#CC0000 size=+2 face=Courier New, Courier, monospace><strong>ERROR::View is not available................................</strong></font>
<BR><font color=#CC0000 size=+2 face=Courier New, Courier, monospace><strong>Please create a view..................................</strong></font><BR>
######################################################################################################################################################</font></center>";
$ERROR_MASSAGE_FOR_INVALID_VIEW = "<body bgcolor=#FFCC66><br><br><br><br><br><center><font color=#CC0000 size=+2 face=Courier New, Courier, monospace>
######################################################################################################################################################
  <BR><font color=#CC0000 size=+2 face=Courier New, Courier, monospace><strong>ERROR::View is not available................................</strong></font>
<BR><font color=#CC0000 size=+2 face=Courier New, Courier, monospace><strong>Please create a view..................................</strong></font><BR>
######################################################################################################################################################</font></center>";

$MASSAGE_LOGIN = "Username and password is not valide.";

$MASSAGE_LOGOUT = "You are logout.";
?>