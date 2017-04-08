function returnGradedValues() {
 
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var lastRow = sheet.getLastRow();
  var range = sheet.getDataRange(); //Última fila con datos (la enviada por el formulario)
  var values = range.getValues(); //Meto todos los valores de la hoja en una variable
 
  // Buscamos las columnas cuyo encabezado empieza por PTOS EST 
  
  var calificacionEstandares=new Array();
  var estandaresCalificados=new Array();
    for (var i=0; i<sheet.getLastColumn();i++){
      var check= values[0][i].indexOf("PTOS EST");
      if (values[0][i].indexOf("PTOS EST")>-1){ //si la columna de encabezado contiene "PTOS EST"
          calificacionEstandares.push(values[lastRow-1][i].toString()); // metemos los valores en calificacionEstandares
          estandaresCalificados.push(values[0][i].toString().slice(9)); // metemos los nombres de las columnas como estándares
      }
      
    }
  Logger.log(estandaresCalificados);
  Logger.log(calificacionEstandares);
  var estandaresYGradedValues=[estandaresCalificados,calificacionEstandares];
  Logger.log(estandaresYGradedValues);
  return(estandaresYGradedValues);
}