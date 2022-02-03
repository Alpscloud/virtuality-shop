<?php

$method = $_SERVER['REQUEST_METHOD'];

// Выносим переменную на все случаи жизни вне проверки на POST/GET
$admin_email = array('admin@email'); // первым поставь почту, на которую будет указывать ответ и т.п.

//Script Foreach
$c = true;
if ( $method === 'POST' ) {

	$project_name = trim($_POST["project_name"]);
	// $admin_email  = trim($_POST["admin_email"]);

	$form_subject = trim($_POST["form_subject"]);

	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "form_subject" ) { // здесь убрали проверку на поле admin_email в массиве #_POST
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
		</tr>
		";
	}
}
} else if ( $method === 'GET' ) {

	$project_name = trim($_GET["project_name"]);
	$form_subject = trim($_GET["form_subject"]);

	foreach ( $_GET as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "form_subject" ) { // Аналогично убрали проверку
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
		</tr>
		";
	}
}
}

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text) {
	return '=?UTF-8?B?'.base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <no-reply@domain>' . PHP_EOL .  // Вот тут как раз мы и используем первый адрес
'Reply-To: '.$admin_email[0].'' . PHP_EOL;													// -------- ---------

foreach ($admin_email as $mail) {															// Открываем цикл перебором всех адресов в массиве
	mail($mail, adopt($form_subject), $message, $headers );     // На каждый адрес отправляем свою копию письма
}

