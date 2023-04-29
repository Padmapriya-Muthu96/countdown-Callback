let count=10;

function displaycount(){

    document.getElementById("count").innerHTML=count;
    count--;
    if(count>=0){
        setTimeout(displaycount, 1000);
        
    }else {
        document.getElementById("message").innerHTML="Happy Indipendence Day";
        count="";
    }
}

