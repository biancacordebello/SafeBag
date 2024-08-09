<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/styles/mobile/login.css">
    <link rel="stylesheet" href="assets/styles/web/login.css">

    <title>SafeBag</title>
</head>
<body>
    <script>
        function redirecionar() {
            window.location.href = "pages/main.php";
        }
    </script>
    <main>
            <div id="form">    
                <div class="container">   
                <p id="container-web-text">Tenha o Melhor Controle das Bagagens na ACME Airlines</p>
                <div class="container-img-text">  
                <img src="assets/images/icon.png" height="30%" width="30%"/>
                <h1>SafeBag</h1>
                </div>
            </div>
            
            <div class="labels">
                <h1 id="web-main-text">Login</h1>
                <p>Utilize suas credenciais para fazer login</p>
                <hr>
                <label>Email</label><input class="email" type="email" placeholder="Digite seu email">
                <label>Senha</label><input class="password" type="password" placeholder="Digite sua senha">
                <button onclick=redirecionar() type="submit">Entrar</button>
            </div>
        </div>

    </main>
    
</body>
</html>