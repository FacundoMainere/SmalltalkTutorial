function saveLesson(lesson_number) 
{
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  XHR=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  XHR=new ActiveXObject("Microsoft.XMLHTTP");
  }
XHR.open("GET","saveLesson"+ lesson_number,false);
XHR.send();

}

