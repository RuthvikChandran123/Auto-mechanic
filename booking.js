document.getElementById("BookForm").addEventListener("submit", function(validation){

    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var mobile=document.getElementById("mobile").value;
    var service=document.getElementById("service").value;
    var cartype=document.getElementById("cartype").value;
    var carmodel=document.getElementById("carmodel").value;
    var fueltype=document.getElementById("petrol").value;
    var kilometer=document.getElementById("kilometer").value;
    var valid=true;

    if(name==""){
        document.getElementById("Nameerror").innerHTML="Required**";
        valid=false;
    }

    if(email==""){
        document.getElementById("Emailerror").innerHTML="Required**";
        valid=false;
    }

    if (!email.includes("@")) {
        document.getElementById("Emailerror").innerHTML = "Invalid email format";
        valid = false;
    }

    if(mobile==""){
        document.getElementById("Mobileerror").innerHTML="Required**";
        valid=false;
    }

    if(mobile.length != 10){
        document.getElementById("Mobileerror").innerHTML="must be 10 numbers";
        valid=false;
    }

    if(cartype==""){
        document.getElementById("Cartypeerror").innerHTML="Required**";
        valid=false;
    }

    if(carmodel==""){
        document.getElementById("Carmodelerror").innerHTML="Required**";
        valid=false;
    }

    if(kilometer==""){
        document.getElementById("Kilometererror").innerHTML="Required**";
        valid=false;
    }

    if(valid){
        window.location.href="thankyou.html";
    }
    validation.preventDefault();
});