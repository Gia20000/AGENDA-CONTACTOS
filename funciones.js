// 1-clasp login 2- clasp create  luego se trabaja con clasp push y pull
function doGet(){
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda');
}

function obtenerDatosHTML(nombre)
{
   return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos(){
let hoja = SpreadsheetApp.openById("1ESYTLWVpBs43pmbXle8Hu776uB7OSGQrgEroIbi63FA").getActiveSheet();
let datos = hoja.getDataRange().getValues();
//getValues() devuelve una matriz de objeto q hay q recorresrla para obtener c/u de esos elementos
return datos;
}