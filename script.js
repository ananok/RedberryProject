
function validation(){
    let name = document.getElementById("fname").value;
    let surname = document.getElementById("lname").value;
    let mail = document.getElementById("email").value;
    let min=3;
    let max=255;
    let pattern=/^[A-Za-zა-ჰ]+$/
    
    
    
    let text=document.getElementById("text")
    let text2=document.getElementById("text2")
    let text3=document.getElementById("text3")
    let text4=document.getElementById("text4")
    
    
    if (name===""){
        text.innerHTML=""
    }else if( !name.match(pattern)){
        text.innerHTML="სახელის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს";
        text.style.color= "red"  
        
    }else if(name.length<= min ){
        text.innerHTML="სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან";
        text.style.color= "red"
        
    }else if (name.length>min && name.length<max){
        text.innerHTML="";
    }else if (name.length>max){
        text.innerHTML="სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან";
        text.style.color= "red"
    }else{
        text.innerHTML="";
    }
    
    if (surname===""){
        
        text2.innerHTML=""
    }
    else if(!surname.match(pattern)){
        text2.innerHTML="გვარის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს";
        text2.style.color= "red"   
    }else if(surname.length<= min ){
        text2.innerHTML="გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან";
        text2.style.color= "red"
    }else if (surname.length>min && surname.length<max){
        text2.innerHTML="";
    }else if (surname.length>max){
        text2.innerHTML="გვარის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან";
        text2.style.color= "red"
    } 

    if (mail===""){
        text3.innerHTML=""  
        text4.innerHTML=""
    }else if (!mail.match(/^\w+([-+.']\w+)*@?(redberry.ge)$/)){
        text3.innerHTML="თქვენ მიერ შეყვანილი მეილი არასწორია"
        text3.style.color= "red" 
        text4.innerHTML= "გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)"
        text4.style.color= "red"  
    }else{
        text3.innerHTML=""
        text4.innerHTML=""  
    }


    if (name!==""  && surname!=="" && mail!==""){
        document.querySelector(".next").style.backgroundImage = "url('/assets/turnonleft.png')";
       
    }
    
}

function show1(){
    document.querySelector('#div').style.display ='block';
  }
  function show2(){
    document.querySelector('#div').style.display = 'none';
    document.querySelector('#div2').style.display ='none';
    document.querySelector('#div3').style.display = 'none';
  }
function show3(){
    document.querySelector('#div2').style.display ='block';
    document.querySelector('#div3').style.display = 'none';
  }
function show4(){
    document.querySelector('#div2').style.display = 'none';
    document.querySelector('#div3').style.display = 'block';
  }

  
function radioValidation(){
    let valid = false;
    let x = document.querySelectorAll("input[type=radio]");
    let y= document.querySelector(".text").value;
    let z= document.querySelector(".text2").value;
    let m=document.querySelector(".number").value;
    for(var i=0;i<x.length;i++){
        if((x[1].checked || x[2].checked)|| (x[0].checked && x[3].checked || x[4].checked) && (y!=="" || z!=="") && m!==""){
            valid = true;
            window.location.href='page3.html'
          
        }else{
        alert("გთხოვთ, შეავსეთ გამოტოვებული გრაფა");
        return false;
    }
    }
    
  
}





function show5(){
    document.querySelector('#choose-dose').style.display ='block';
    document.querySelector('#why').style.display = 'none';
    document.querySelector('#text6').style.display = 'none'; 
    document.querySelector('#text7').style.display = 'none'; 
    
}

  function show6(){
    document.querySelector('#choose-dose').style.display = 'none';
    document.querySelector('#why').style.display = 'block';
    document.querySelector('#text5').style.display = 'none';
}

function show7(){
    document.querySelector('#text5').style.display = 'block';
   
}

function show7a(){
    document.querySelector('#text5').style.display = 'none';
   
}
function show8(){
    document.querySelector('#text6').style.display = 'block'; 
    document.querySelector('#text7').style.display = 'none'; 
    
}
function show8a(){
    document.querySelector('#text6').style.display = 'none'; 
    document.querySelector('#text7').style.display = 'none'; 
    
}
function show9(){
    document.querySelector('#text6').style.display = 'none'; 
    document.querySelector('#text7').style.display = 'block'; 
}

function radioValidation2(){
    let valid = false;
    let x = document.querySelectorAll("input[type=radio]");
    for(var i=0;i<x.length;i++){
        if(((x[0].checked && (x[2].checked)|| (x[3].checked || x[4].checked)) || (x[1].checked && (x[5].checked)|| x[6].checked || x[7].checked))) {
            valid = true;  
            window.location.href='page4.html'
        }else{
        alert("გთხოვთ, შეავსეთ გამოტოვებული გრაფა");
        return false;
    }

    }
}


