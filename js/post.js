var fPost = (function() {
function fPost(){};
function inprivate(){
addEventListener("submit", function(e){
e.stopImmediatePropagation();
e.preventDefault();
filter_priv();
var login = document.querySelector("#send_login").value;
var senha = document.querySelector("#send_senha").value;
var sessao = document.querySelector("#send_sessao").value;
$.post('./post.php',{login:login,senha:senha},
function(returnedData){
try{
var jsona = JSON.stringify(eval("("+returnedData+")"));
var jsonb = JSON.parse(jsona);
}catch(e){
console.log(returnedData);
$("#msgtext").html(returnedData);
}
if(jsonb.MENSAGEM=="Logado"){
var path = window.location.pathname;
var fileIndex = path.lastIndexOf('/')+1;
var fileName = path.substr(fileIndex);
window.location.replace(fileName);
}else{
var msg_div = document.querySelector("#msg");
var msg_text = document.querySelector("#msgtext");
$("#msgtext").html(jsonb.MENSAGEM);
}
});
});
}
function filter_priv(){
var formulario = document.forms;
for(i=0;formulario.length>i;i++){
for(j=0;formulario[i].elements.length>j;j++){
formulario[i].elements[j].value=formulario[i].elements[j].value.replace(/[&\/\\#,+$~%'":*?<>={}]/gi, "");
formulario[i].elements[j].value=formulario[i].elements[j].value.replace(/math/gi, "");
formulario[i].elements[j].value=formulario[i].elements[j].value.replace(/svg/gi, "");
formulario[i].elements[j].value=formulario[i].elements[j].value.replace(/less/gi, "");
formulario[i].elements[j].value=formulario[i].elements[j].value.replace(/include/gi, "");
formulario[i].elements[j].value=formulario[i].elements[j].value.replace(/src/gi, "");
formulario[i].elements[j].value=formulario[i].elements[j].value.replace(/link/gi, "");
formulario[i].elements[j].value=formulario[i].elements[j].value.replace(/script/gi, "");
formulario[i].elements[j].value=formulario[i].elements[j].value.replace(/on/gi, "");
formulario[i].elements[j].value=formulario[i].elements[j].value.replace(/undefined/gi, "");
formulario[i].elements[j].value=formulario[i].elements[j].value.replace(/css/gi, "");
formulario[i].elements[j].value=formulario[i].elements[j].value.replace(/url/gi, "");
}
}
}
fPost.prototype.inpublic = function (){
return inprivate.call(this);
}
return fPost;
})();
var obj = new fPost();
obj.inpublic();