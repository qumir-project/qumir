function checkCORS(){
    var xhttp = new XMLHttpRequest();
    var ak = '';
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log('hola...');
            console.log(this.getAllResponseHeaders());
            console.log(this.response);
        }
    };

    apikey = new Promise(function fetchCurrentAuthToken(resolve, reject) {
        var cognitoUser = userPool.getCurrentUser();

        if (cognitoUser) {
            cognitoUser.getSession(function sessionCallback(err, session) {
                if (err) {
                    reject(err);
                } else if (!session.isValid()) {
                    resolve(null);
                } else {
                    resolve(session.getIdToken().getJwtToken());
                }
            });
        } else {
            resolve(null);
        }
    });
    apikey.then(function(result){
        ak = result;
        console.log(ak);
        //url = 'https://w04co8lo5b.execute-api.us-east-1.amazonaws.com/dev/data?TableName=plants';
        url = 'https://mn6ujt3rtl.execute-api.us-east-1.amazonaws.com/development/items?';
        xhttp.open('GET', url);
        //xhttp.withCredentials = true;
        xhttp.setRequestHeader('Content-Type', 'application/json');
        xhttp.setRequestHeader('QUMIR-TOKEN', ak);
        xhttp.send();
    });
}