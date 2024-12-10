function doGet(e) {
  var op = e.parameter.action;
  if (op == "delok")
    return cekcoin(e);
  if (op == "tambah")
    return tambahcoin(e);
  if (op == "jupuk")
    return kurangicoin(e);
}
function kurangicoin(req){
  var sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('user');
  var conf = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('configs');
  var tekoapp = req.parameter.aa;
  const ddddd = tekoapp.split("_,_");
  var cola = ddddd[0];
  var colb = "Usr_"+cola.substring(19);
  var colc = ddddd[1];
  var lr = sh.getLastRow();
  for (var i = 1; i <= lr; i++) { //lihat mulai baris kedua
        var idsA = sh.getRange(i, 1).getValue(); //lihat email kolom A
        if(cola==idsA){
          var coin = sh.getRange(i, 3).getValue(); //lihat email kolom C
          sh.getRange(i,3).setValue("=SUM("+coin+"-"+colc+")");
          var gesd = sh.getRange(i, 3).getValue();
        }
    }
    
  return ContentService.createTextOutput(gesd).setMimeType(ContentService.MimeType.TEXT);
}
function tambahcoin(req){
  var sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('user');
  var conf = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('configs');
  var tekoapp = req.parameter.aa;
  const ddddd = tekoapp.split("_,_");
  var cola = ddddd[0];
  var colb = "Usr_"+cola.substring(19);
  var colc = ddddd[1];
  var lr = sh.getLastRow();
  for (var i = 1; i <= lr; i++) { //lihat mulai baris kedua
        var idsA = sh.getRange(i, 1).getValue(); //lihat email kolom A
        if(cola==idsA){
          var coin = sh.getRange(i, 3).getValue(); //lihat email kolom C
          sh.getRange(i,3).setValue("=SUM("+coin+"+"+colc+")");
          var gesd = sh.getRange(i, 3).getValue();
        }
    }
    
  return ContentService.createTextOutput(gesd).setMimeType(ContentService.MimeType.TEXT);
}
function cekcoin(req){
  var sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('user');
  var conf = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('configs');
  var tekoapp = req.parameter.aa;
  const ddddd = tekoapp.split("_,_");
  var cola = ddddd[0];
  var colb = "Usr_"+cola.substring(19);
  var colc = ddddd[1];
  var flag = 0;
  var lr = sh.getLastRow();
  for (var i = 1; i <= lr; i++) { //lihat mulai baris kedua
        var idsA = sh.getRange(i, 1).getValue(); //lihat email kolom A
        if(cola==idsA){
          // var coin = sh.getRange(i, 3).getValue(); //lihat email kolom C
          // sh.getRange(i,3).setValue("=SUM("+coin+"-"+colc+")");
          var gesd = sh.getRange(i, 3).getValue();
          flag = 1;
        }
    }
    if (flag == 0){
      var gesd = conf.getRange('A4').getValue();
      sh.appendRow([cola,colb,gesd]);
    }
  return ContentService.createTextOutput(gesd).setMimeType(ContentService.MimeType.TEXT);
}
