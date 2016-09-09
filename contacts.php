<?php 

	/* ==========================  Define variables ========================== */

	#Your e-mail address
	define("__TO__", "aubgolympicscommittee@gmail.com");

	/* ========================  End Define variables ======================== */

	//Send mail function
	function send_mail($to,$subject,$message,$headers){
		if(mail($to,$subject,$message,$headers)){
			echo "<script type='text/javascript'>alert('Съобщението беше изпратено. Благодарим ви!');window.location.href = document.referrer;</script>";
		} else {
			echo "<script type='text/javascript'>alert('Съобщението не беше изпратено. Извиняваме се за причиненото неудобство!');history.go(-1);</script>";	
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
	if(isset($_POST['name']) and isset($_POST['mail']) and isset($_POST['comment']) and isset($_POST['telephone'])){
		$name 	 = $_POST['name'];
		$mail 	 = $_POST['mail'];
		$telephone = $_POST['telephone'];
		$comment = $_POST['comment'];
		

		if($name == '') {
			echo "<script> alert('Моля попълнете полетата за име!');
			history.go(-1);</script>";
			exit();
		} else if($mail == '' or check_email($mail) == false){
			echo "<script> alert('Моля въведете имейл адрес!');
			history.go(-1);</script>";
			exit();
		} else if($comment == ''){
			echo "<script> alert('Моля попълнете полето с Вашето съобщение!');
			history.go(-1);</script>";
			exit();
		} else if($telephone == ''){
			echo "<script> alert('Моля въведете телефонен номер!');
			history.go(-1);</script>";
			exit();
		} else {
			//Send Mail
			$to = __TO__;
			$subject = 'Коментар';
			$message = '
			<!DOCTYPE html>
			<html lang="en">
			<head>
			<title>Сарашка Работилница "Етър"</title>
			</head>
			<body>
			<div style="margin:0 auto;padding:1em;width: 80%;vertical-align: middle; background: transparent; overflow: hidden; clear: both; background: rgba(140, 95, 63, 0.7); font-size: 16pt;">
      		<p style="font-size:25pt; color: #180D01; text-align:center">Съобщение</p>
      		<p>Име: <span style="color: #F3D7B1">'. $name .'</span></p>
      		<p>Електронна поща: <span style="color: #F3D7B1">'. $mail .'</span></p>
      		<p>Телефон: <span style="color: #F3D7B1">'. $telephone .'</span></p>
   			<p>Съобщение: <span style="color: #F3D7B1">'. $comment .'</span></p>
   			</div>
   			</body>
			</html>';
			

			$headers  = 'MIME-Version: 1.0' . "\r\n";
			$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
			$headers .= 'From: ' . $mail . "\r\n";

			send_mail($to,$subject,$message,$headers);
		}
	} else {
		echo json_encode(array('info' => 'error', 'msg' => __MESSAGE_EMPTY_FILDS__));
	}
 ?>