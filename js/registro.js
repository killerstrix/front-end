$(document).ready(function () {
    $("#btnvolverlogin").click(function () {
        window.location.href = "login.html";
    });
});

$("#btnenviarL").click(function (e) {
    var erroresR = validarR();
    if (erroresR !== "") {
        Swal.fire("Error de envío", erroresR, "error");
    } else {
        Swal.fire("Datos Validos", "Bienvenido", "success")
            .then(function () {
                window.location.href = "login.html";

            });
    }
    e.preventDefault();
});

function validarR() {
    var html = "";
    var UserName = $("#txtUserName").val().trim();
    var Contraseña = $("#txtPassword").val().trim();
    var NombreUsuario = $("#txtNombreUsuario").val().trim();
    var correo = $("#txtCorreo").val().trim();
    var NumTel = $("#NumTelefonico").val().trim();
    var password = $("#txtPassword").val().trim();
    var valpassword = $("#txtValPassword").val().trim();
    var radio = document.querySelector("#ValTerms");

    if (UserName === "") {
        html += "-Debe ingresar el nombre de usuario<br>";
    } else if (!UserName.length > 7) {
        html += "-El nombre de usuario debe tener al menos 8 caracteres<br>";
    }

    if (Contraseña === "") {
        html += "-Debe ingresar la contraseña<br>";
    }else if (!txtPasswordEmp.match(/^[a-zA-Z0-9_-]{8,}$/)) {
        html += "-La contraseña debe tener al menos 8 caracteres y solo debe contener letras, números, guiones bajos y guiones\n";
    }

    if (NombreUsuario === "") {
        html += "-Debe ingresar el nombre de usuario \n";
    } else if (!NombreUsuario.length > 7) {
        html += "-El nombre de usuario debe tener al menos 8 caracteres \n";
    }

    if (correo === "") {
        html += "-Debe ingresar el correo electrónico \n";
    }

    if (NumTel === "" || parseInt(NumTel) > 99999999 || parseInt(NumTel) < 10000000) {
        html += "-El número telefónico debe tener 8 o 9 dígitos \n";
    }

    if (password === "") {
        html += "-Debe ingresar la contraseña\n";
    } else if (!password.length > 8) {
        html += "-La contraseña debe tener al menos 8 caracteres \n";
    }

    if (valpassword === "") {
        html += "-Debe ingresar nuevamente la contraseña \n";
    } else if (valpassword !== password) {
        html += "-Las contraseñas no coinciden \n";
    }

    if (!radio.checked) {
        html += "-Debe aceptar los términos y condiciones \n";
    }

    return html;
}
