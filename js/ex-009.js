function CriarTurmas(){
    let quantidadedeTurmas = document.querySelector("#quantidadedeTurmas").value;
    let campos = document.querySelector("#campos");
    campos.innerHTML = "";

    for(let i = 1; i <= quantidadedeTurmas; i++){
        campos.innerHTML += "Turmas" + i + "<input type='number' id='turma" + i + "' max='40'><br>"; 
    }
}

function MediaDeAlunos(){
    let quantidadedeTurmas = document.querySelector("#quantidadedeTurmas").value;
    let totalAlunos = 0;
    for(let i = 1; i <= quantidadedeTurmas; i++){
        totalAlunos += parseFloat(document.querySelector("#turma"+i).value);
    }
    
    let media = totalAlunos / quantidadedeTurmas;
    document.querySelector("#resultado").innerHTML = " A média de alunos por turma é: " + media;
}