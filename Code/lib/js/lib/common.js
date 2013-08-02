function fnc_LoadSection(divID,str)
{
	//alert(str+divID);
	//--- use ajax library to submit form data
		var randomnumber	=	Math.floor(Math.random()*10000);
    var myAjax = new Ajax.Updater (divID,
										str+"&rnd="+randomnumber,
										{ 
											method : 'GET',
											encoding :'iso-8859-1', 
											evalScripts : true,
											onCreate: createFunc(divID),
											onSuccess: successFunc,
                                            onFailure:  failureFunc
										}
									);
	//alert(str);
}
// submit pages /divs section
function fnc_SubmitSection(divID,str,frm)
{
	//--- use ajax library to submit form data
   //--- use ajax library to submit form data
  //alert(str+frm+divID);
  //document.getElementById(divID).innerHTML="W3Schools";
  	var randomnumber	=	Math.floor(Math.random()*10000);
    var myAjax = new Ajax.Updater	(divID,
										str+"&rnd="+randomnumber,
										{
											method : 'POST',
											parameters : Form.serialize(frm),
											evalScripts : true,
											onCreate: createFunc(divID),
											onSuccess: successFunc,
											onFailure:  failureFunc
										}	
									);
	//alert('dddd'+str);
}


function createFunc(divID)
{
  	document.getElementById(divID).innerHTML = "<P valign=middle align=center>Please wait..<img src=loading2.gif></img></p>";
}


function successFunc(response)
{
    //alert(response.status);
    if (200 == response.status){
        //alert("Call is success");
    }
	//var container = $('notice');                  // IF YOU WANT TO UPDATE OTHER ID BY RESULT set id at notice......
    //var content = response.requestHeaders;
    //alert(content)
	//container.update(content);                    // Call this......................................................
}


function failureFunc(response)
{
     //alert("Call is failed" );
}



function GetXmlHttpObject()
{
	var xmlHttp=null;
   //Internet Explorer*/
		try
	{
		var xmlHttp = new ActiveXObject("MSXML2.XMLHTTP");
	}
		catch (e)
	{
		xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	return xmlHttp;
}

// call httpresponse to execute given path and return output
function GetData(str)
{
	var xhttp = GetXmlHttpObject(); // for detecting browser's support for httpsresponse object
	xhttp.Open("GET", str, false);
	xhttp.Send("");
	/*if (xhttp.readyState==4 || xhttp.readyState=="complete")
	alert(xhttp.ResponseText);*/
	return xhttp.ResponseText;
}

function fnc_LoadFooter()
{
	var randomnumber	=	Math.floor(Math.random()*10000);
	var str = site_ref + "footer.php?Rnd="+randomnumber;
	fnc_LoadSection('footer',str);
}

function fnc_LoadHeader()
{
	var randomnumber	=	Math.floor(Math.random()*10000);
	var str = site_ref + "header.php?Rnd="+randomnumber;
	fnc_LoadSection('header',str);
}

/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Name        :    fnc_IsValidMobile
    Purpose     :    This function checks for Mobile validation.
                    This function will return a false value if the parameter passed
                    in contains a non-Phone character.
    Usage       :    fnc_IsValidMobile("text")
    Arguments   :    text
    Return      :    true/false
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

function fnc_IsValidMobile(aValue)
{
	var i=0;
	var temp="";
	var test="";

	for (i=0; i < aValue.length; i++)
	{
		temp = aValue.substring(i, i+1);
		if (((temp < "0" || temp > "9") && temp != ' ' && temp != '-'))
		    test ="no";
	}
	if (test != "" )
		return false;
	else
		return true;
}



/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Name        :    fnc_TrimSpaces
    Purpose     :    This function removes any leading & trailing blanks from a string.
    Usage       :    fnc_TrimSpaces(document.formName.firstName.value);
    Arguments   :
            str    -    String. The string to be trimmed.
    Return      :    String. Having all leading and trailing blanks removed.
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

function fnc_TrimSpaces(str)
{
    var rtn = "";
    var len = str.length;
    var i = 0;
    var startLoc = 0;
    var endLoc = 0;
    var started = false;

    for (i=0; (i < len) && (!started) ; i++)
    {
        if (str.charAt(i) != ' ')
        {
            started = true;
            startLoc = i;
        }
    }

    if (!started) return rtn;

    started = false;
    for (i=len-1; (i > -1) && (!started) ; i--)
    {
        if (str.charAt(i) != ' ')
        {
            started = true;
            endLoc = i + 1;
        }
    }

    for (i=startLoc ; i<endLoc; i++)
    {
        rtn = rtn+str.charAt(i);
    }
    return rtn;
}


/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Name        :    fnc_ConvertVariable
    Purpose     :    This function formats the name of a variable so that it could be used
                in a message. e.g. it converts "userName" to "User Name"
                This function will mainly be used by another function in this file.
    Usage       :    fnc_ConvertVariable("userName");
    Arguments   :
            varName    -    String. The name of the variable to be formatted.
    Return      :    String. A formatted variable name.
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

    function fnc_ConvertVariable(varName)
    {
        varNewName = "";
        if( varName.indexOf("_") != -1 )
        {
            varName = varName.substring( varName.indexOf("_")+1 );
        }

        for(j=0; j<varName.length; j++)
        {
            prevCh = varName.charAt(j-1);
            ch = varName.charAt(j);
            if( (ch >= 'A' && ch <= 'Z') && (j != 0) && !(prevCh >= 'A' && prevCh <= 'Z') )
            {
                varNewName += " " +ch;
            }
            else
            {
                varNewName += ch;
            }
        }
        varName = varNewName;
        varNewName = varName.charAt(0).toUpperCase();
        varNewName += varName.substring(1);
        return varNewName;
    }




/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Name        :    popUpWindow
    Purpose     :    This function pops up a new window.
    Usage       :    popUpWindow( "somepath/somefile.php", 500, 250, "_myWindow" );
    Arguments   :
        url       	-    String. The url that will open in the poped up window.
        width     	-    integer. width of the window.
        height    	-    integer. height of the window.
        [windName]	-    String. Pass this argument only if a fresh window is to be
                    poped up. This argument    should not contain any spaces.
    Return      :    void.
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

function fnc_PopUpWindow(url,width,height,windName)
{
	
    wind = window.open(url, (windName?windName:"_sameWindow"), "width="+width+",height="+height+",scrollbars=yes");
	//alert(url);
    x = (screen.availWidth/2)  - (width/2);
    y = (screen.availHeight/2) - (height/2);
    wind.moveTo(x, y);
    wind.resizeTo( width, (height+23) );
    wind.focus();
}

function fnc_adjust()
{
    width  =  0;
    height = 0;
    if( navigator.appName.indexOf("Microsoft") != -1 )
    { // Microsoft
        width  = document.body.scrollWidth+50;
        height = document.body.scrollHeight+80;
    }
    else
    {
        width  = document.width+50;
        height = document.height+60;
    }

    // Put condition here
    width  = ( width  > screen.availWidth  ? screen.availWidth  : width );
    height = ( height > screen.availHeight ? screen.availHeight : height );

    x = (screen.availWidth/2)  - (width/2);
    y = (screen.availHeight/2) - (height/2);

    window.moveTo( x, y );
    window.resizeTo( width, height );
}


/*    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Name        :    fnc_ValidateRequireds
    Purpose     :    This function checks for any blank field. If a blank field is found
                		then it alerts the user to fill it.
    Usage       :    validateRequireds(document.formName, 'firstName', 'lastName', 'emailID');
    Arguments   :    variable # of arguments with first argument being the <form> reference
            		(Object) and rest of the arguments as form field names(String).
    Return      :    Boolean. true if all the fields contain some data, otherwise false.
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
function fnc_ValidateRequireds()
{
    var vRFormName = "";
    var vMissingInfo= "";
    var vFocusCounter=0;
    ///alert('ss');
    if(arguments.length > 1)
    {
        vRFormName = arguments[0];
        for(vRCounter=1; vRCounter<arguments.length; vRCounter++)
        {
            if( vRFormName[arguments[vRCounter]] )
            {
                if(fnc_TrimSpaces( vRFormName[arguments[vRCounter]].value).length == 0)
                {
                    vMissingInfo += "\n     -  "+fnc_ConvertVariable(vRFormName[arguments[vRCounter]].name);
                    if(vFocusCounter==0)
                    {
                    	vFocusCounter=vRCounter;
                    }

                }
            }
        }
        if (vMissingInfo != "")
        {
            vMissingInfo ="_____________________________\n" + "You failed to fill in your required fields:\n" +
            vMissingInfo +"\n_____________________________" + "\n Please re-enter and submit again!";
            alert(vMissingInfo);
            vRFormName[arguments[vFocusCounter]].focus();
            return false;
        }
    }
    return true;
}

/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Name        :    fnc_ValidateMobile
    Purpose     :    This function checks for Phone values. I
    Usage       :    validatePhone(document.formName, 'firstName', 'lastName', 'emailID');
    Arguments   :    variable # of arguments with first argument being the <form> reference
                    (Object) and rest of the arguments as form field names(String).
    Return      :    Boolean. true if all the fields contain Phone data, otherwise false.
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
function fnc_ValidateMobile()
{
    var vRFormName = "";
    var vMissingInfo= "";
    var vFocusCounter=0;

    if(arguments.length > 1)
    {
        vRFormName = arguments[0];
        for(vRCounter=1; vRCounter<arguments.length; vRCounter++)
        {
            if(fnc_IsValidMobile(fnc_TrimSpaces(vRFormName[arguments[vRCounter]].value)) == false)
            {
                vMissingInfo += "\n     -  "+fnc_ConvertVariable(vRFormName[arguments[vRCounter]].name);
                if(vFocusCounter==0)
                    vFocusCounter=vRCounter;
            }
        }
        if (vMissingInfo != "")
        {
            vMissingInfo ="_________________________________\n" + "You failed to fill correct Mobile values:\n" +
            vMissingInfo +"\n_________________________________" + "\n Please re-enter and submit again!";
            alert(vMissingInfo);
            vRFormName[arguments[vFocusCounter]].focus();
            return false;
        }
    }
    return true;
}



/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Name        :    fnc_ValidateDoubles
    Purpose     :    This function checks for integer and floating point values.
    Usage       :    validateDoubles(document.formName, 'dec', 'mortgageAmount', 'loanAmount')
    Arguments   :
            			formObj        -    Object. The <form> object.
            			arg_DataType    -    String. "int" for integer and "dec" for floating point values.
            			****        -    String. Rest of the arguments should be the names of
                        the form fields that have to be validated.
    Return      :    Boolean. true if all values are valid otherwise false.
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

function fnc_ValidateDoubles(formObj, arg_DataType)
{
    vDSResult = true;
    arg_DataType = arg_DataType.toLowerCase();
    var vMissingInfo= "";
    var vFocusObject="";

    for(vDSCounter=2; vDSCounter<arguments.length; vDSCounter++)
    {
        vDSObj = formObj[arguments[vDSCounter]];
        if(vDSObj)
        {
            for(fvDSCounter=0; fvDSCounter<vDSObj.value.length; fvDSCounter++)
            {
                fObjVal = vDSObj.value.charAt(fvDSCounter);
                if(!(fObjVal >= '0' && fObjVal <= '9'))
                { // If not in between 0-9
                    if(arg_DataType == "dec" && fObjVal != ".")
                    {
                        vDSResult = false;
                        vMissingInfo += "\n     -  "+fnc_ConvertVariable(vDSObj.name);
                        if(vFocusObject=="")
                            vFocusObject=vDSObj;
                        break;
                    }

                    if(arg_DataType == "int")
                    {
                        vDSResult = false;
                        vMissingInfo += "\n     -  "+fnc_ConvertVariable(vDSObj.name);
                        if(vFocusObject=="")
                            vFocusObject=vDSObj;
                        break;
                    }
                }
            }
        }
    }
    if (vMissingInfo != "")
    {
        vMissingInfo ="_________________________________\n" + "You failed to fill correct values:\n" +
        vMissingInfo +"\n_________________________________" + "\n Please re-enter and submit again!";
        alert(vMissingInfo);
        vFocusObject.focus();
        return false;
    }
    return true;
}


/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Name        :    fnc_ValidateEmail
    Purpose     :    This function checks for a valid email address.
    Usage       :    validateEmail( "some-id@some-domain.ext" );
    Arguments   :
            		email    -    String. A String representing an email address.
    Return      :    Boolean. true if valid email address otherwise false.
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

function fnc_ValidateEmail(email)
{
    invalidChars = " /:,;'\"!#&*()"
    if(email == "")
    {                 //email cannot be empty
        return false;
    }

    for(i=0; i<invalidChars.length; i++)
    { //check for invalid characters
        badChar = invalidChars.charAt(i);
        if(email.indexOf(badChar,0) != -1)
        {
            return false;
        }
    }

    atPos = email.indexOf("@",1);         //there must be one "@" symbol
    if(atPos == -1)
    {
        return false;
    }
    if(email.indexOf("@",atPos+1) != -1)
    { //check to make sure only one "@" symbol
        return false;
    }

    periodPos = email.indexOf(".",atPos);
    if (periodPos == -1)
    { // make sure there is one "." after the "@"
        return false;
    }

    if(periodPos+3 > email.length)
    { // must be at least 2 chars after the "."
        return false;
    }
    return true;
}


/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Name        :    fnc_ValidateSelects
    Purpose     :    This function forces selection of options other than first one in <select> controls.
                Prompts the user to choose another option if the user has selected the first option.
    Usage       :    validateSelects(document.formName, 'selectObj1', 'selectObj2', 'selectObjN');
    Arguments   :
            formObj    -    Object. A reference to the <form> object.
            ***    -    String. Rest of the arguments should be <select> Object names(String).
    Return      :    Boolean. true if some other option is chosen but the first one in each of the
                <select> controls, otherwise false.
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

function fnc_ValidateSelects(formObj)
{
    vSSResult = true;
    for(vSSCounter=1; vSSCounter<arguments.length; vSSCounter++)
    {
        vSSObj = formObj[arguments[vSSCounter]];
        if( vSSObj && vSSObj.selectedIndex == 0 )
        {
            alert( "Please choose another option from '" +fnc_ConvertVariable(vSSObj.name)+ "'" );
            vSSObj.focus();
            vSSResult = false;
            break;
        }
    }
    return vSSResult;
}

/*
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        Name        	:    fnc_DateEntry
        Purpose        	:    This function format the date fields
        Usage        	:    Date fields
        Arguments    	:    textbox object, event(i.e pressed key)
        Return        	:	 true/false
        Created by		:	 Deep@k Goyal on 29/7/2k6
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

function fnc_DateEntry(frmObject, e) {

			var i, j;

			var t = frmObject.value;

			if(t.charAt(0) == "/")			//check whether dd i.e day field is empty
			{
				frmObject.value = "__"+t;	//insert format "__" for date(i.e dd)
				t = frmObject.value;

			}

			if(t.charAt(0) == ""){					//check for blank textbox
				frmObject.value = "__/__/____";		//insert the date format
			}
			else{


				if(t.charAt(1) == ""){				//check for a single value in text box
					var  sub = t.substring(0, 1);
					frmObject.value = sub+"_/__/____";	//insert the format "_/__/____"

				}

				if(t.charAt(1) == "/"){					//check for single digit in day field
					frmObject.value = t.substring(0, 1)+"_"+t.substring(1, t.length+1);	//makes date field(i.e dd) of two digit

				}else{
					if(t.charAt(3) == "/" ){			//check for sing entry in month field
						frmObject.value = t.substring(0, 2)+"__"+t.substring(2, t.length+1);		//makes month field(i.e. mm) of two digit
					}

					if(t.charAt(3) == ""){				//check date format for only 3 letters long (i.e. "__/_" format)
						var  sub = t.substring(0, 3);
						frmObject.value = sub+"__/____";	//makes date format "__/__/____"

					}else{
						if(t.charAt(4) == "/"){			//check for single digit in month (i.e. mm) field
							if(t.charAt(2) == "/")		//check for double digit day (i.e. dd as "__")
							{
								frmObject.value = t.substring(0, 4)+"_"+t.substring(4, t.length+1);	//makes month of two digit

							}
							else
							{
								frmObject.value = t.substring(0, 2)+"/"+t.substring(2, t.length+1); //insert slash(/) between day & month

							}

						}
						if(t.charAt(4) == ""){				//check for "__/_" format
							var  sub = t.substring(0, 4);
							frmObject.value = sub+"_/____";	//makes "__/__/____" format

						}
					}
				}
			}


			/*if(frmObject.value.length == 5){
				var  sub = frmObject.value.substring(0, 5);
				frmObject.value = sub+"/____";
			}

			if(frmObject.value.length == 6){
				var  sub = frmObject.value.substring(0, 6);
				frmObject.value = sub+"____";
			}

			if(frmObject.value.length == 7){
				var  sub = frmObject.value.substring(0, 7);
				frmObject.value = sub+"___";
			}

			if(frmObject.value.length == 8){
				var  sub = frmObject.value.substring(0, 8);
				frmObject.value = sub+"__";
			}

			if(frmObject.value.length == 9){
				var  sub = frmObject.value.substring(0, 9);
				frmObject.value = sub+"_";
			}*/

			var temp = frmObject.value;

			var count = 0;

			for(i=0;i<frmObject.value.length;i++) {


				if(frmObject.value.charAt(i) == "/")		//count number of delimiters(i.e. "/")
				{
					count++;
					if(count == 1)							//gets first "/"
						temp = frmObject.value.substring(0, i)+frmObject.value.substring(i+1);		//removes the delimiter "/"


					if(count == 2)							//gets second "/"
						temp = temp.substring(0, i-1)+frmObject.value.substring(i+1);				//removes the second delimiter "/"


				}



			}

			frmObject.value = temp.substring(0, 2)+"/"+temp.substring(2, 4)+"/"+temp.substring(4, 8);	//insert delimiter "/" between dd,mm,yyyy


			if(e.keyCode >= 48 && e.keyCode <= 57){			//check for digits i.e. 0 to 9 only

				var t = String.fromCharCode(e.keyCode);		//changes the ascii into equivalent character

				var x = frmObject.value;

				for(i=0;i<frmObject.value.length;i++) {		//search for underscore i.e. "_"
					if(x.charAt(i)=="_"){					//underscore found
						break;								//break for replacing "_" with entered digit
					}
						if(x.charAt(i)=="/"){				//search for delimiter i.e. "/"
							continue;						//if delimiter "/" found no replacement so continue
					}
				}

				TRange = frmObject.createTextRange();		//creates range for replacing "/" with enterd digit.
				strFound = TRange.findText("_");			//finds the first "_"

				if (strFound ) TRange.select("");			//replacement of "_"
	   				return true;
			}else{
				return false;								//if entered character is non digit returns false without any change
			}


		}


/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Name        :    moveOptions
    Purpose        :    This function moves the option from one <select> object to the other one.
    Usage        :    moveOptions(document.formName.sourceSelectObject, document.formName.destinationSelectObject);
    Arguments    :
            objSource    -    Object. A reference to the source <select> object from which the selected
                        option has to move to the destination <select> object.
            objDestination    -    Object. A reference to the destination <select> object to which the selected
                        option has to come from the source <select> object.
    Return        :    void.
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

function moveOptions( objSource, objDestination ){
    if( objSource.selectedIndex != -1)
    {
        for( mo_Ctr=(objSource.options.length-1); mo_Ctr>=0; mo_Ctr-- )
        {
            if( objSource.options[mo_Ctr].selected )
            {
                t_Opt = objSource.options[mo_Ctr];
                option = new Option( t_Opt.text, t_Opt.value);

                objDestination.options.length++;
                objDestination.options[objDestination.options.length-1] = option;
                objSource.options[mo_Ctr] = null;
            }
        }
    }
    else
    {
        alert( "Please select an option." );
        objSource.focus();
    }
}


/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Name        :    fnc_validateDate
    Purpose        :    This function checks for valid date.
    Usage        :    validateDate("22/09/2001") checks within range of 1900-2099
    Arguments    :    dateVal    -    String. A String representing a date in whichever locale according to need.
    Return        :    true/false.
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

function fnc_validateDate(dateString)
{
	//alert(dateString);
	if(dateString == "__/__/____"){
		return true;
	}
	var delimeter = "/";
    var dayStr;
    var monthStr;
    var yearStr;
    var    strDateArray;

    if (dateString.indexOf(delimeter) != -1)
    {
        strDateArray = dateString.split(delimeter);
        if (strDateArray.length != 3)
            return false;
        else
        {
            dayStr        = strDateArray[0];
            monthStr    = strDateArray[1];
            yearStr        = strDateArray[2];
        }
    }
    else
        return false;

    if(dayStr.length == 0 || monthStr.length == 0 || yearStr.length != 4 )
        return false;
    if(isNaN(dayStr))
        return false;
    if(isNaN(monthStr))
        return false;
    if(isNaN(yearStr))
        return false;
    // SR#1 Start
    // Convert strings to ints .
    var day   = parseInt(dayStr,10);
    var month = parseInt(monthStr,10);
    var year  = parseInt(yearStr,10);
    // SR#1 End
    return getDateStatus(day,month,year);

}

/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Name        :    getDateStatus
    Purpose        :    This function returns the no of days in particular month of particular year.
    Usage        :    getDateStatus(2,2,2002)
    Arguments    :    month,year
    Return        :    true/false
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
    function getDateStatus(day,month,year)
    {
    	if(year<0 )
            return false;
        else
        {
            switch(month)
            {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                {
                    if (day <1 || day > 31)
                        return false;
                    else
                        return true;
                }
                case 4:
                case 6:
                case 9:
                case 11:
                {
                    if (day <1 || day > 30)
                        return false;
                    else
                        return true;
                }
                case 2:
                {
                    if(((year%4==0)&&(year%100!=0))||(year%400==0))
                    {
                        if(day<0 || day>29)
                            return false;
                        else
                            return true;
                    }
                    else
                    {
                        if(day < 0 || day>28)
                            return false;
                        else
                            return true;
                    }
                }
                default :
                    return false;
            }
        }
    }


// get window center
function MoveWindowToCenter()
{
    width  = 0;
    height = 0;

    if( navigator.appName.indexOf("Microsoft") != -1 )
    { // Microsoft
        width  = document.body.scrollWidth;
        height = document.body.scrollHeight;
    }
    else
    {
    		self.sizeToContent();
        width  = self.document.width;
        height = self.document.height;
    }


    // Put condition here
    width  = ( width  > screen.availWidth  ? screen.availWidth  : width );
    height = ( height > screen.availHeight ? screen.availHeight : height );



    x = (screen.availWidth/2)  - (width/2);
    y = (screen.availHeight/2) - (height/2);

    if( navigator.appName.indexOf("Microsoft") != -1 )
    {
    	window.moveTo( x, y );
	    window.resizeTo( width, height );
		}
		else
		{
			/*self.parent.document.getElementById("popups").style.top   = y
			self.parent.document.getElementById("popups").style.left  = x;
			self.parent.document.getElementById("popups").height			= height + 20;
			self.parent.document.getElementById("popups").width				= 200;*/

			//self.moveTo(x,y);
			//self.sizeToContent();
			//self.width = 400;
			//self.height = 400;
		}

}

function MoveCalanderToCenter(CalWin)
{
    width  = 0;
    height = 0;
    if( navigator.appName.indexOf("Microsoft") != -1 )
    { // Microsoft
        width  = document.body.scrollWidth+50;
        height = document.body.scrollHeight+80;
    }
    else
    {
        width  = document.width+50;
        height = document.height+60;
    }

    // Put condition here
    width  = ( width  > screen.availWidth  ? screen.availWidth  : width );
    height = ( height > screen.availHeight ? screen.availHeight : height );

    x = (screen.availWidth/2)  - 100;
    y = (screen.availHeight/2) - 100;

    CalWin.moveTo( x, y );
    //window.resizeTo( width, height );
}

function fnc_ClosePopUp()
{
	Obj = window.parent.document.getElementById("popups");
	Obj.src = "";
	Obj.style.display = 'none';
	Obj.style.height = 1;
	Obj.style.width = 1;
}

// for detecting browser's support for httpsresponse object
function GetXmlHttpObject()
{
	var xmlHttp=null;

		//Internet Explorer*/
		try
	{
		var xmlHttp = new ActiveXObject("MSXML2.XMLHTTP");
	}
		catch (e)
	{
		xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	return xmlHttp;
}


/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Name        :    validatePeriod
    Purpose        :    This function checks whether the first date is after the second date.
    Usage        :    validatePeriod("22/09/2001", "22/09/2002")
    Arguments    :
            startDate    -    String. A String representing a date in UK locale.
            termDate    -    String. A String representing a date in UK locale.
    Return        :    Boolean. true if first date is before or equal to the second date otherwise false.
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

function validatePeriod(startDate, termDate){
    date1 = new Date( swapDayMonth(startDate) );
    date2 = new Date( swapDayMonth(termDate) );
    return (((date2 - date1) < 0) ? false : true);
}


/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Name        :    swapDayMonth
    Purpose        :    This function swaps day and month in date.
                i.e., converts "22/02/2001 10:20:00" to "02/22/2001 10:20:00"
    Usage        :    swapDayMonth("22/09/2001")
    Arguments    :
            dateVal    -    String. A String representing a date in whichever locale according to need.
    Return        :    String. Represeting a date having its day and month swapped.
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

function swapDayMonth(dateVal){
    firstIndex = dateVal.indexOf("/");
    dd = dateVal.substring(0, firstIndex);
    secondIndex = dateVal.indexOf("/", (firstIndex+1));
    mm = dateVal.substring((firstIndex+1), secondIndex);
    yy = dateVal.substring((secondIndex+1));
    return (mm+"/"+dd+"/"+yy);
}

function fn_restrict_spchMark(formObj)
{
	for(i=0;i<formObj.elements.length;i++ )
	{
		if(formObj.elements[i].type!="textarea")
		{
			var spchMark = formObj.elements[i].value.indexOf("\"");

			if(spchMark>"-1"){
				alert("Double speech marks \" are not allowed in the field. Please enter another value");
				formObj.elements[i].focus();
				return false;
			}
		}
	}
	return true;
}