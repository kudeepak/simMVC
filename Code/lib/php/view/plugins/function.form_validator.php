<?php 
/**
 * Smarty plugin
 * @package Smarty
 * @subpackage plugins
 */


/**
 * Smarty {mailto} function plugin
 *
 * Type:     function<br>
 * Name:     mailto<br>
 * Date:     May 21, 2002
 * Purpose:  automate mailto address link creation, and optionally
 *           encode them.<br>
 * Input:<br>
 *         - address = e-mail address
 *         - text = (optional) text to display, default is address
 *         - encode = (optional) can be one of:
 *                * none : no encoding (default)
 *                * javascript : encode with javascript
 *                * javascript_charcode : encode with javascript charcode
 *                * hex : encode with hexidecimal (no javascript)
 *         - cc = (optional) address(es) to carbon copy
 *         - bcc = (optional) address(es) to blind carbon copy
 *         - subject = (optional) e-mail subject
 *         - newsgroups = (optional) newsgroup(s) to post to
 *         - followupto = (optional) address(es) to follow up to
 *         - extra = (optional) extra tags for the href link
 *
 * Examples:
 * <pre>
 * {mailto address="me@domain.com"}
 * {mailto address="me@domain.com" encode="javascript"}
 * {mailto address="me@domain.com" encode="hex"}
 * {mailto address="me@domain.com" subject="Hello to you!"}
 * {mailto address="me@domain.com" cc="you@domain.com,they@domain.com"}
 * {mailto address="me@domain.com" extra='class="mailto"'}
 * </pre>
 * @link http://smarty.php.net/manual/en/language.function.mailto.php {mailto}
 *          (Smarty online manual)
 * @version  1.2
 * @author   Monte Ohrt <monte at ohrt dot com>
 * @author   credits to Jason Sweat (added cc, bcc and subject functionality)
 * @param    array
 * @param    Smarty
 * @return   string
 */

function smarty_function_form_validator($paras) 
{   
  return "<script language='javascript' type='text/javascript'>
                // form fields description structure
				var a_fields = {
					'uname' : {
						'l': 'Name',  // label
						'r': false,    // required
						'f': 'alpha',  // format (see below)
						't': 't_uname',// id of the element to highlight if input not validated
						
						'm': null,     // must match specified form field
						'mn': 2,       // minimum length
						'mx': null       // maximum length
					},
					'email' : {'l':'E-mail','r':true,'f':'email','t':'t_email'},
					'pass' : {'l':'Password','r':true,'f':'alphanum','t':'t_password','m':'pass_copy'},
					'pass_copy' : {'l':'Password copy','r':true,'f':'alphanum','t':'t_password_copy'}
				},
				o_config = {
					'to_disable' : ['Submit'],
					'alert' : 1
				}
				
				//validator constructor call
				var v = new validator('login', a_fields, o_config);
           </script>"; 
}
?>