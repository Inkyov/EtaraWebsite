<?php
session_start();

// get the product id
$id = isset($_POST['id']) ? $_POST['id'] : "";
$quantity = isset($_POST['quantity']) ? $_POST['quantity'] : "";
/*
 * check if the 'cart' session array was created
 * if it is NOT, create the 'cart' session array
 */
 
// check if the item is in the array, if it is, do not add
if(array_key_exists($id, $_SESSION['cart_items'])){
    // redirect to product list and tell the user it was added to cart
    echo "Този артикул вече е в кошницата Ви!";
}
 
// else, add the item to the array
else{
    $_SESSION['cart_items'][$id] = array('quantity' => $quantity);
 
    // redirect to product list and tell the user it was added to cart
    echo "Артикулът беше успешно добавен в кошницата!";
}
?>