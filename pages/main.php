<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../assets/styles/web/main.css">
    <link rel="stylesheet" href="../assets/styles/mobile/main.css">

    <link rel="stylesheet" href="../assets/styles/web/navbar.css">
    <link rel="stylesheet" href="../assets/styles/mobile/navbar.css">


    <title>SafeBag</title>

    <?php include '../assets/partials/navbar.php'; ?> 

</head>
<body>

    <div class="container">
    <h1 id="main-title">Todos os Alertas</h1>

    <div class="container-right">
    <p id="search-title">CPF do proprietário ou código SAFE</p>
    <div id="divBusca">
        <input type="text" id="txtBusca" placeholder="Buscar..."/>
        <button id="btnBusca">Buscar</button>
      </div>
    </div>
</div>

    <!-- Ver uma forma de duplicar esses alertas 
        Os dados inclusos na div abaixo são para "ilustrações" até ter o bd 
    -->
<div class="alerta">
  <button class="id-mala">Bagagem SAFE00000VIADDMMYYINT</button>
      <div class="info-mala">
        <p>Bianca,s Felipe, Guilherme, Isac, Julia, Vinicius</p>
</div>

<script src="../assets/js/navbar.js"></script>
<script src="../assets/js/accordion.js"></script>

</body>
</html>