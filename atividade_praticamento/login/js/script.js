function entrar(){
    $user = document.getElementById("usuario").value;
    $passoword = document.getElementById("senha").value;
    
    if($user = "user" && $passoword == "senha"){
        location.href("paginaPrincipal");
    }
    else{
        alert("Usuario ou senha incorreta");
    }
    return;
}