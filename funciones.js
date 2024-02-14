// 1-clasp login 2- clasp create  luego se trabaja con clasp push y pull
function doGet(){
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda');
}

function obtenerDatosHTML(nombre){
   return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}