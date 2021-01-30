/******************************************************
 *                UTILITY FUNCTIONS                   *
 *****************************************************/

function checkEmail(txt){
    if(txt.length >= 7){
        return true;
    }
    return false;
}

function checkPassword(txt){
    if(txt.length >= 6){
        return true;
    }
    return false;
}

function getPageName(){
    var path = window.location.pathname;
    return path.split('/').slice(-1).pop();
}

function signoutAction(){
    if (loggedUser != null) {
        loggedUser.signOut();	  
    }
}

function checkCORS(){
    var xhttp = new XMLHttpRequest();
    var ak = '';
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log('hola...');
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
        url = 'https://6wpoasstje.execute-api.us-east-1.amazonaws.com/development/items?';
        xhttp.open('GET', url);
        xhttp.setRequestHeader('Content-Type', 'application/json');
        xhttp.setRequestHeader('QUMIR-TOKEN', ak);
        xhttp.send();
    });
}