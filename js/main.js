// Page parameters
window._config = {
    cognito: {
        userPoolId: 'us-east-1_SUfk0V2Mn',
        region: 'us-east-1',
		clientId: '23o0opq63mbbuh8mjgr15argfd'
    },
};

var poolData = {
    UserPoolId : _config.cognito.userPoolId,
    ClientId : _config.cognito.clientId
}; // Cognito user pool parameters
var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
var loggedUser = userPool.getCurrentUser();
var ak = '';

// Page logic
window.onload = function(){
    var pname = getPageName();
    if(loggedUser == null){
        window.location.replace('/access.html');
    }
    else if( sessionStorage.getItem('ak') == null){
        
        
        new Promise(function fetchCurrentAuthToken(resolve, reject) {
            if (loggedUser) {
                loggedUser.getSession(function sessionCallback(err, session) {
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
        }).then(function(result){
            ak = result;
            sessionStorage.setItem('ak',ak);

            // Load data and render it 
            loadGardens();

            //url = 'https://w04co8lo5b.execute-api.us-east-1.amazonaws.com/dev/data?TableName=plants';
            //url = 'https://mn6ujt3rtl.execute-api.us-east-1.amazonaws.com/development/items?';
            //xhttp.open('GET', url);
            //xhttp.withCredentials = true;
            //xhttp.setRequestHeader('Content-Type', 'application/json');
            //xhttp.setRequestHeader('QUMIR-TOKEN', ak);
            //xhttp.send();
        });
    }
    else{
        ak = sessionStorage.getItem('ak');
        // Load data and render it 
        loadGardens();
    }
};

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

async function loadGardenerInfo(){
    var url = 'https://mn6ujt3rtl.execute-api.us-east-1.amazonaws.com/development/items/getgardenerinfo?env=prod';
    var url2 = 'https://mn6ujt3rtl.execute-api.us-east-1.amazonaws.com/development/items?';
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        //mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            'QUMIR-TOKEN': ak
            //'Access-Control-Allow-Origin' : '*'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }//,
        //redirect: 'follow', // manual, *follow, error
        //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    var out_var = await response.json();
    console.log(out_var);
    var status = response.status;
    var ok = response.ok;
    console.log('Status: '+status+' OK: '+ok);

    // Check the output
    if(ok){
        if(out_var.out_res === 'USRCRT'){
            // We need th complete the user info
            console.log('usuario...');
        }
        else{
            // Render the gardens
            console.log('Render the gardens...');
        }
    }
}

// Load Gardens - Render Gardener's gardens
function loadGardens(){
    console.log('loading... data');
}

function toggleModal(){
    document.getElementById('usr-modal').style.display='block';
}

function closeModal(objectId){
    document.getElementById(objectId).style.display = 'none';
}
