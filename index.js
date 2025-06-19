
// Criar perfis
function criarPerfil(login, password){
    perfil = {
        loginUsuario: login,
        senhaUsuario: password
    }
    return perfil
}

// Salvar perfis em uma array
const usuarios = []

// Codigo principal
function outcome() {

    let login = String(document.getElementById('texto-um').value)
    let senha = String(document.getElementById('texto-dois').value)
    let acesso

    // Verificar login e senha
    if(document.getElementById('box1').checked){
        acesso = 'Negado'  
        for(let usuario of usuarios){
            if (login == usuario.loginUsuario){
                if (senha == usuario.senhaUsuario){
                    acesso = 'Autorizado'
                }
            }
        }      
        document.getElementById('resultArea').innerHTML = 'Acesso: ' + String(acesso)
    }

    // Criar perfil
    else if(document.getElementById('box2').checked){
            let x = criarPerfil(login, senha)
            usuarios.push(x)
            document.getElementById('resultArea').innerHTML = 'Conta Criada'
        }
}
