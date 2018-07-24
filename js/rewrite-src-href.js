/*===== REPLACE OLD URL ELEMENTS =====*/
/*
function replaceItGood(theVal){
  theVal = theVal.replace(/(http:|https:)(\/\/)(dx5br1z4f6n0k.cloudfront.net|coamfte.org|www.coamfte.org|)(\/imis15|)/ig,"");
  return theVal;
}
*/
function replaceItGood(orgVal){
  var newVal = orgVal
    .replace('dx5br1z4f6n0k.cloudfront.net','www.coamfte.org')
    .replace(/(\/imis15\/coamfte\/)/ig,"/")
    .replace(/(\/imis15\/)/ig,"/");
  if(newVal != orgVal){
    console.log(orgVal);
  };
 return newVal;
}

/*==== UPDATE OLD HREF IN LINKS ====*/
var oldHrefs = 0;
jQuery('a').each(function(){
  if(jQuery(this).attr('href')){
    jQuery(this).attr('href',replaceItGood(jQuery(this).attr('href')));
    oldHrefs ++;
  }
});
//console.log("Old Hrefs = " + oldHrefs); 

/*==== UPDATE OLD SRC IN IMAGES ====*/
var oldSrcs = 0;
jQuery('img').each(function(){
  if(jQuery(this).attr('src')){
    jQuery(this).attr('src',replaceItGood(jQuery(this).attr('src')));
    oldSrcs ++;
  }
});
//console.log("Old Srcs = " + oldSrcs); 