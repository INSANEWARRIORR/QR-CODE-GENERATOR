function genQR()
{
    // Google Chart Api
    var gapi ="https://chart.googleapis.com/chart?chf=bg,s,66432100&cht=qr&chs=";
    //For accessing the element
    var myimg=document.getElementById("img");
    var mytext=document.getElementById("qrtext").value;
    var mysize=document.getElementById("size").value;
    var err = document.getElementById("err").value;
    if (mytext !== "") {
            myimg.src = gapi + mysize + "x" + mysize + "&chl=" + encodeURIComponent(mytext);    
    }else{
        document.getElementById("err").innerHTML="Please enter Text!";
    }
}