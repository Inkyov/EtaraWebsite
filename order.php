<?php
session_start();
	/* ==========================  Define variables ========================== */

	#Your e-mail address
	define("__TO__", "aubgolympicscommittee@gmail.com");

	/* ========================  End Define variables ======================== */

	//Send mail function
	function send_mail($to,$subject,$message,$headers){
		if(mail($to,$subject,$message,$headers)){
			echo "<script type='text/javascript'>alert('Поръчката ви е приета. Благодарим ви!');window.location.href = 'cart.php'</script>";
			unset($_SESSION['cart_items']);
    		$_SESSION['cart_items'] = array();
		} else {
			echo "<script type='text/javascript'>alert('Поръчката ви не беше получена! Извиняваме се за причиненото неудобство!');history.go(-1);</script>";	
		}
	}

	//Check e-mail validation
	function check_email($email){
		if(!@eregi("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$", $email)){
			return false;
		} else {
			return true;
		}
	}

	//Get post data
	if(isset($_POST['first']) and isset($_POST['family']) and isset($_POST['address']) and isset($_POST['city']) and isset($_POST['zip']) and isset($_POST['mail']) and isset($_POST['comment']) and isset($_POST['telephone'])){
		$name 	 = $_POST['first'];
		$family 	 = $_POST['family'];
		$mail 	 = $_POST['mail'];
		$telephone = $_POST['telephone'];
		$address = $_POST['address'];
		$city 	 = $_POST['city'];
		$zip 	 = $_POST['zip'];
		$comment = $_POST['comment'];
		

		if($name == '' and $family == '') {
			echo "<script> alert('Моля попълнете полетата за име!');
			history.go(-1);</script>";
			exit();
		} else if($mail == '' or check_email($mail) == false){
			echo "<script> alert('Моля въведете имейл адрес!');
			history.go(-1);</script>";
			exit();
		} else if($telephone == ''){
			echo "<script> alert('Моля въведете телефонен номер!');
			history.go(-1);</script>";
			exit();
		} else if($address == ''){
			echo "<script> alert('Моля въведете адрес!');
			history.go(-1);</script>";
			exit();
		} else if($city == ''){
			echo "<script> alert('Моля въведете град!');
			history.go(-1);</script>";
			exit();
		} else if($zip == ''){
			echo "<script> alert('Моля въведете пощенски код!');
			history.go(-1);</script>";
			exit();
		} else {

if(count($_SESSION['cart_items'])>0){

    $ids = "";
    foreach($_SESSION['cart_items'] as $id=>$value){
        $ids = $ids . $id . ",";
    }
 
    // remove the last comma
    $ids = rtrim($ids, ',');
			//Send Mail
			$to = __TO__;
			$subject = 'Поръчка';
			$message = '
		<!DOCTYPE html>
		<html lang="en">
		<head>
		<title>Сарашка Работилница "Етър"</title>
		</head>
		<body>
		<div style="margin:0 auto;padding:1em;width: 100%;vertical-align: middle; background: transparent; overflow: hidden; clear: both; background: rgba(140, 95, 63, 0.7); font-size: 16pt;">
      		<p style="font-size:25pt; color: #180D01;">Поръчка</p>
			<p style="font-size:20pt">Данни на поръчителя</p>
			<p>Име: <span style="color: #F3D7B1">'. $name .' '. $family .'</span></p>
			<p>Електронна поща: <span style="color: #F3D7B1">'. $mail .'</span></p>
			<p>Телефон: <span style="color: #F3D7B1">'. $telephone .'</span></p>
			<p>Адрес: <span style="color: #F3D7B1">'. $address .', '. $city .' '. $zip .'</span></p>
			<table style="font-size:12pt">
    		<tr>
        		<th></th>
        		<th>Име на продукта</th>
        		<th>Размер</th>
        		<th>Единична цена</th>
        		<th>Количество</th>
        		<th>Цвят</th>
        		<th>Материал</th>
        		<th>Текущо</th>
    		</tr>';

include 'configure.php';    		
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
			$message .='<tr><td style="width:200px;   height: 150px;  margin-right: 20px;"><img id="cartImg" src='. $row['Image']. '></td>';
			$message .='<td><div style="display:none;:">'. $row['ProductID'] .'</div><div>'. $row['Name'].'</div></td>';
			$message .='<td style="text-align:right">' . $row['Size'] .'</td>';
			$message .='<td style="text-align:right">' . $row['Price'] .'</td>';
			$message .='<td style="text-align:center">'. $_SESSION['cart_items'][$row['ProductID']]['quantity'].'</td>';
			$message .='<td style="text-align:center">' . $row['Color'] .'</td>';
			$message .='<td style="text-align:center">' . $row['Material'] .'</td>';
            $Subtotal = intval($_SESSION['cart_items'][$row['ProductID']]['quantity']) * intval($row['Price']);
            $message .='<td style="text-align:right">' . number_format($Subtotal, 2, '.', ',') . 'лв.' . '</td></tr>';

        $total += $Subtotal;
		}
		$stmt = null;
		$con = null;

		$message .='<tr><td colspan="8"><hr/></td></tr>
					<tr><td></td><td></td><td></td><td></td><td></td><td></td>
					<td id="center"><b>Общо</b></td><td>' . number_format($total, 2, '.', ',') . 'лв.' . '</td></tr><tr><td colspan="8"><hr/></td></tr>';
		$message .='</table>';
		$message .='<h4>Допълнителна информация</h4>';
		$message .='<p>' . $comment . '</p>';
		$message .='</div></body></html>';
			

			$headers  = 'MIME-Version: 1.0' . "\r\n";
			$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
			$headers .= 'From: ' . $mail . "\r\n";

			send_mail($to,$subject,$message,$headers);
		}
	}
}
	else {
		echo json_encode(array(__MESSAGE_EMPTY_FILDS__));
	}
 ?>