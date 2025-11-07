function fn_Valform()
{
    var sMsg = "";
    var emailValue = document.getElementById("email").value;
    var regex = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;

    if(document.getElementById("name").value == ""){
        sMsg += "\n* Anda belum mengisikan nama";
    }
    if(document.getElementById("email").value == "") {
        sMsg += "\n* Anda belum mengisikan email";
    } else {
        if(!regex.test(emailValue)) {
            sMsg += "\n* Email yang anda isikan salah";
        }
    }

    if(document.getElementById("message").value == "") {
        sMsg += "\n* Anda belum mengisikan pesan";
    }
    
    if(sMsg != "")
    {
        alert("Peringatan:\n" + sMsg);
        return false;
    } else{
        return true;
    }
}