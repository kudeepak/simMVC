// JavaScript Document
        var id;
		function getW(id)
        {
            var theImg = document.getElementById(id);
            return theImg.width;
        }
        
		function getH(id)
        {
            var theImg = document.getElementById(id);
            return theImg.height;
        }
		var file;
		function validateImageHightWidth(id,file,maxHight,maxWidth,type)
		{
			if(file!=''){
				if(document.getElementById(id).src!=file){
				document.getElementById(id).src = file;	
				}
				
				
		  		if(type=='fix')
				{
			  		if(maxWidth==getW(id) && maxHight==getH(id))
			  		{
				      return true;      
			  		}
			  		else
			  		{
				   	  document.getElementById(id).width = '130';
					  document.getElementById(id).height ='128';
					  //this.value = '';
					  alert("You can not upload image of size more than "+maxHight+'*'+maxWidth + '. \n Please upload another one.');
					  return false;
					}
				}
		    }
		}