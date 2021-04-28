var images =["Sumitra.jpeg","Chandan.jpeg","Rupa.jpeg","aayu.jpeg","Lakshay.jpeg"];
var names =["Sumitra","Chandan","Rupa","Aayu","lakshay"];
var i =0;
function update(){
    i++;
    var familymemberarray =5;
    if(i>familymemberarray){
        i=0;
    }
    var updateimage=images[i];
    var updatename=names[i];
    document.getElementById("family").src=updateimage;
    document.getElementById("name").innerHTML=updatename;
}