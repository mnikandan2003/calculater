function add(){
    let a= Number(document.getElementById("inp1").value);
    let b= Number(document.getElementById("inp2").value);
    let c= document.getElementById("result");
    c.innerHTML=a+b;
    
}
function sub(){  
    let a= Number(document.getElementById("inp1").value);
    let b= Number(document.getElementById("inp2").value);
    let d= document.getElementById("result");
    d.innerHTML=a-b;
}
function module(){
    let a= Number(document.getElementById("inp1").value);
    let b= Number(document.getElementById("inp2").value);
    let e= document.getElementById("result");
    e.innerHTML=a%b;
    
}
function multiple(){
    let a= Number(document.getElementById("inp1").value);
    let b= Number(document.getElementById("inp2").value);
    let g= document.getElementById("result");
    g.innerHTML=a*b;
    
}
function div(){
    let a= Number(document.getElementById("inp1").value);
    let b= Number(document.getElementById("inp2").value);
    let f= document.getElementById("result");
    f.innerHTML=a/b;
}