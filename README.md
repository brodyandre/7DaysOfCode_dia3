🕹️ Desafio - Escolhas no Mundo da Programação.

O objetivo deste desafio é criar um pequeno jogo interativo onde o usuário poderá escolher seu caminho na programação, decidir entre Front-End ou Back-End, e adicionar tecnologias para aprender no futuro.

🖥️ Código Completo
Salve este código como index.html e abra no navegador para testar a interação! 👇


<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
    <title>Jogo da Programação</title>
  
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
            background-color: #f4f4f4;
        }
        h1 {
            color: #333;
        }
        #game-box {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            margin: auto;
        }
        button {
            padding: 10px;
            margin: 5px;
            font-size: 16px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
        }
        .option {
            background-color: #3498db;
            color: white;
        }
        .option:hover {
            background-color: #2980b9;
        }
    </style>
</head>
<body>

    <h1>🕹️ Escolhas no Mundo da Programação</h1>
    <div id="game-box">
        <p id="question">Você quer seguir para a área de Front-End ou Back-End?</p>
        <button class="option" onclick="choosePath('Front-End')">Front-End</button>
        <button class="option" onclick="choosePath('Back-End')">Back-End</button>
        <div id="response"></div>
    </div>

    <script>
        let path = "";
        let stack = "";
        let techs = [];

        function choosePath(choice) {
            path = choice;
            document.getElementById("question").innerHTML = 
                `Ótimo! Você escolheu ${path}. Agora, qual tecnologia deseja aprender?`;
            if (path === "Front-End") {
                document.getElementById("response").innerHTML = `
                    <button class="option" onclick="chooseStack('React')">React</button>
                    <button class="option" onclick="chooseStack('Vue')">Vue</button>
                `;
            } else {
                document.getElementById("response").innerHTML = `
                    <button class="option" onclick="chooseStack('C#')">C#</button>
                    <button class="option" onclick="chooseStack('Java')">Java</button>
                `;
            }
        }

        function chooseStack(tech) {
            stack = tech;
            document.getElementById("question").innerHTML = 
                `Você escolheu aprender ${stack}. Agora, deseja se especializar na área ou se tornar Fullstack?`;
            document.getElementById("response").innerHTML = `
                <button class="option" onclick="chooseCareer('Especialista')">Especializar</button>
                <button class="option" onclick="chooseCareer('Fullstack')">Fullstack</button>
            `;
        }

        function chooseCareer(choice) {
            document.getElementById("question").innerHTML = 
                `Você escolheu seguir o caminho de ${choice}! Agora, quais tecnologias você gostaria de aprender?`;
            document.getElementById("response").innerHTML = `
                <input type="text" id="techInput" placeholder="Digite uma tecnologia">
                <button class="option" onclick="addTech()">Adicionar</button>
                <p id="techList"></p>
                <button class="option" onclick="finishGame()">Finalizar</button>
            `;
        }

        function addTech() {
            let tech = document.getElementById("techInput").value;
            if (tech) {
                techs.push(tech);
                document.getElementById("techList").innerHTML = 
                    `Tecnologias escolhidas: ${techs.join(", ")}`;
                document.getElementById("techInput").value = "";
            }
        }

        function finishGame() {
            document.getElementById("question").innerHTML = 
                `Parabéns! Você escolheu o caminho de ${path}, aprendeu ${stack}, e deseja explorar as tecnologias: ${techs.join(", ")}. 🚀`;
            document.getElementById("response").innerHTML = "";
        }
    </script>

</body>
</html>

🚀 Como Rodar o Código
Clone o repositório no seu computador:

git clone https://github.com/brodyandre/7DaysOfCode_dia3.git

Acesse a pasta do projeto:    cd 7DaysOfCode_dia3

Abra o arquivo index.html no navegador para rodar a aplicação interativa!

📌 Explicação do Código
O jogo começa perguntando se você quer seguir Front-End ou Back-End.
Dependendo da escolha, ele pergunta qual tecnologia você deseja aprender.
Depois, você decide se quer se especializar ou virar Fullstack.
O usuário pode adicionar quantas tecnologias quiser antes de finalizar.
O resultado final exibe um resumo da trajetória escolhida.

🛠️ Tecnologias Utilizadas

✅ HTML → Estrutura da página.

✅ CSS → Estilização e layout amigável.

✅ JavaScript → Lógica do jogo e interação com o usuário.

📢 Contribua!
Se quiser melhorar este jogo, sinta-se livre para modificar e compartilhar no seu GitHub! 🚀💻

