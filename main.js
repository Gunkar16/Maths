document.addEventListener('keydown', event => {
    if (event.code === 'Space') {
        hi();
    }
    if (event.code === 'Enter') {
        lol();
    }
});

function hi(){
    first = parseInt(document.getElementById("first").value);
    second = parseInt(document.getElementById("second").value);
    console.log(first)
    console.log(second)
    x = Math.floor((Math.random() * (second-first + 1) + first ));
    y = Math.floor((Math.random() * (7) + 3));
    z=x*y
    // console.log(x)
    // console.log(y)
    // console.log(z)
    document.getElementById("N").innerHTML=x;
    document.getElementById("N2").innerHTML=y;
    document.getElementById("final").innerHTML="";
    document.getElementById("input").innerHTML="";
    
}
function lol(){
    a=document.getElementById("input").value;
    // console.log(a)
    if (a==z){
        console.log("YESSSSS")
        document.getElementById("final").innerHTML="✅";
        document.getElementById("input").value=" ";
    }
    else{
        console.log("NOOOOOOO")
        document.getElementById("final").innerHTML="❌";
        document.getElementById("input").value=" ";
    }
}


