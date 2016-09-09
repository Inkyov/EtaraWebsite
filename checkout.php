<?php
include 'layout_head.php';
?>
<div id="cell_1order">
          <form id="contact-form" action="order.php" method="post">
            <h2>Данни за поръчка</h2>
            <p style="color:#6b0003; font-size:15px;">&#42;Всички поръчки са с наложен платеж!</p>
                <input class="field" name="first" type="text" placeholder="Първо име">
                <input class="field" name="family" type="text" placeholder="Фамилно име">
                <input class="field" name="mail" type="text" placeholder="Електронна Поща">
                <input class="field" name="telephone" type="text" placeholder="Телефон">
                <input class="field" name="address" type="text" placeholder="Адрес">
                <input class="field" name="city" type="text" placeholder="Град">
                <input class="field" name="zip" type="text" placeholder="Пощенски код">
                <textarea name="comment" placeholder="Допълнителна информация"></textarea>
                <input type="submit" class="submit" value="Поръчай">
          </form>
      </div>
</div>
</body>
</html>