function task2(){
    var result4=document.getElementById("task1").style.display="none";
    console.log(result4);
}
task2();
function homepage(){
     var result=document.getElementById("home-page");
     console.log(result);
    var result2=document.getElementById("signup").style.display="none";
    console.log(result2);
    var result3=document.getElementById("signin").style.display="none";
    console.log(result3);
}
homepage();
function signuppage1(){
     var result2=document.getElementById("signup");
    console.log(result2);
     var result=document.getElementById("home-page").style.display="none";
     console.log(result);
    var result3=document.getElementById("signin").style.display="none";
    console.log(result3);
}
signuppage1();
function signinpage(){
     var result3=document.getElementById("signin");
    console.log(result3);
     var result=document.getElementById("home-page").style.display="none";
     console.log(result);
    var result2=document.getElementById("signup").style.display="none";
    console.log(result2); 
}
signinpage();