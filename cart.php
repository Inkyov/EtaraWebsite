<?php
include 'layout_head.php';
// parameters
$action = isset($_GET['action']) ? $_GET['action'] : "";
$name = isset($_GET['name']) ? $_GET['name'] : "";
 
if($action=='removed'){
    echo "<div class='alert alert-info'>";
        echo "Артикулът беше успешно изтрит!";
    echo "</div>";
} 
 if(count($_SESSION['cart_items'])>0){

    $ids = "";
    foreach($_SESSION['cart_items'] as $id=>$value){
        $ids = $ids . $id . ",";
    }
 
    // remove the last comma
    $ids = rtrim($ids, ',');
    //start table
    echo "<table class='cartItems'>";
     
    // our table heading
    echo "<tr>";
        echo "<th></th>";
        echo "<th>Име на продукта</th>";
        echo "<th>Размер</th>";
        echo "<th>Единична цена</th>";
        echo "<th>Количество</th>";
        echo "<th>Цвят</th>";
        echo "<th>Материал</th>";
        echo "<th>Текущо</th>";
        echo "<th></th>";
    echo "</tr>";
// select products in the cart
$query="SELECT productsonesize.ProductID, colormaterialcombination.colName AS Color, colormaterialcombination.matName AS Material, sizes.sizeName AS Size, names.Name AS Name, productsonesize.Price AS Price, productsonesize.Image AS Image, description.Description AS Description, productsonesize.Stock AS Stock
FROM productsonesize
LEFT JOIN sizes ON productsonesize.sizeID=sizes.sizeID
LEFT JOIN colormaterialcombination ON productsonesize.colMatID=colormaterialcombination.colMatID
LEFT JOIN names ON productsonesize.nameID=names.nameID
LEFT JOIN description ON productsonesize.DescriptionID=description.descriptionID
Where productID IN ({$ids})"; 
 
$stmt=$con->prepare( $query );
$stmt->execute();
  
    $total=0;
     
    while( $row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        echo "<tr>";
            echo "<td id='imageSpot'>";
                        echo "<img id='cartImg' src={$Image}>";
            echo "</td>";
            echo "<td>";
                        echo "<div class='product-id' style='display:none;'>{$ProductID}</div>";
                        echo "<div>{$Name}</div>";
            echo "</td>";
            echo "<td class='right'>{$Size}</td>";
            echo "<td class='right'>" . number_format($Price, 2, '.', ',') . "лв." . "</td>";
            echo "<td id='center'>". $_SESSION['cart_items'][$ProductID]['quantity']."</td>";
            echo "<td>{$Color}</td>";
            echo "<td>{$Material}</td>";
            $Subtotal = intval($_SESSION['cart_items'][$ProductID]['quantity']) * intval($Price);
            echo "<td class='right'>" . number_format($Subtotal, 2, '.', ',') . "лв." . "</td>";
            echo "<td>";
            echo "<a href='remove_from_cart.php?id={$ProductID}&name={$Name}'>";
                        echo "<div id='center'>Изтрий</div>";
            echo "</a>";
            echo "</td>";
        echo "</tr>";
             
        $total += $Subtotal;
    }
    $stmt = null;
    $con = null;

    echo "<tr>";
    echo "<td colspan='9'><hr/></td>";
    echo "</tr>";
    echo "<tr>";
    echo "<td></td><td></td><td></td><td></td><td></td><td></td>";
    echo "<td id='finalSum'><b>Общо</b></td>";
    echo "<td id='finalSum'><b>" . number_format($total, 2, '.', ',') . "лв." . "</b></td>";
    echo "<td>";
            echo "<a href='checkout.php' class='btn btn-success'>";
            echo "<div id='center'>Поръчай</div>";
            echo "</a>";
    echo "</td>";
    echo "</tr>";
    echo "</table>";
    echo "</div>";
}else{
    echo "<p id='emptyCart'>Вашата кошница е празна!</p>";
}
?>
</div>
</body>
</html>