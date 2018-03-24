<?php

main::run();

class main {

static function run(){

$cont=0;

if(isset($_POST['login']) && isset($_POST['senha'])){
$cont=1;
$login=$_POST['login'];
$senha=$_POST['senha'];
$msg = array();
$msg['MENSAGEM']="".$login." não existe, cadastre-se para acessar";
$msglogin = (json_encode($msg));
print_r($msglogin);
}

if($cont==0){
header("Location:home.html");
}
}
}

?>