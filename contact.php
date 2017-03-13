<!DOCTYPE html>
<html lang="en">
<head>
<title>Сарашка Работилница "Етър"</title>
<meta charset="utf-8">
<meta name="keywords" content="сарачи, етър, палдъм, хамут, юзда, юлар, ръчна изработка, занаятчийска камара, кожар">
<meta name="description" content="Ръчна изработка на сарашки и кожени изделия.">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="corner-master/jquery.corner.js"></script>
<script src="javascript.js"></script>
<link rel="stylesheet" type="text/css" href="style.css">
<link href="http://bg.allfont.net/allfont.css?fonts=cyrillicold" rel="stylesheet" type="text/css" />
<script>
function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(42.8098, 25.3468),
    zoom:15,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=&callback=initialize" async defer></script>
</head>
<body>
<div id="navbar">
  <div id="header">
    <p id='logo'>Сарашка работилница "Етър"</p>
    <ul>
      <div id="addition">
      <li><a href="index.php">Начало</a></li>
      <li><a href="workplace.html">Работилницата</a></li>
      <li><a>Каталог</a>
        <ul>
          <li>Аксесоари
              <ul>
              <li><a href="art.php">Сарашко Изкуство</a></li>
              <li><a href="otherModels.php">Други модели</a></li>
              </ul>
          </li>
          <li>Сарашки изделия
            <ul>
              <li><a href="paldam.php">Палдъм</a></li>
              <li><a href="hamut.php">Хамут</a></li>
              <li><a href="others.php">Други изделия</a></li>
            </ul>
          </li>
          <li>Кожени изделия
          <ul>
              <li><a href="wallets.php">Портфейли</a></li>
              <li><a href="cases.php">Калъфи за очила</a></li>
              <li><a href="keyrings.php">Ключодържатели</a></li>
              <li><a href="belts.php">Колани</a></li>
              <li><a href="leashes.php">Кучешки каишки</a></li>
              <li><a href="bags.php">Чанти</a></li>
            </ul>
          </li>
      </ul>
      </li>
      <li><a href="contact.php">Контакти</a></li>
      <li><a href="cart.php">Кошница</a></li>
      </div>
    </ul>
  </div>
<div id="centerColumn">
  <div id="cell_1about">  
          <form action="contact.php" method="post">
            <h2 id="center">Очакваме Вашите съобщения!</h2>
                <input class="field" name="name" type="text" placeholder="Две имена">
                <input class="field" name="mail" type="text" placeholder="Електронна поща">
                <input class="field" name="telephone" type="text" placeholder="Телефон">
                <textarea name="comment" placeholder="Съобщение"></textarea>
                <input type="submit" id="btnContacts"class="submit" value="Изпрати">
          </form>
  </div>
  <div id="contacts">
    <h3>Адрес: <span id="beige">Габрово, АЕК Етър</span></h3>
    <h3>Телефон: <span id="beige">+359 885 59 77 46</span> </h3>
    <h3>Електронна поща: <span id="beige">stanimirmitevmitev@abv.bg</span> </h3>
    <h3>Работно време: <span id="beige">Понеделник-Неделя 09:00-19:00</span> </h3>
    <h3>Лице за контакт: <span id="beige">Станимир Митев</span> </h3>
    </div>
  <div id="cell_3map"> 
   <div id="googleMap"></div>
  </div>
<?php
include "layout_foot.html";
?>
