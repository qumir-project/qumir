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
    if(loggedUser == null){
        window.location.replace('/access.html');
    }
    else if( sessionStorage.getItem('ak') === null){
        
        
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
            loadGardenerInfo();
        });
    }
    else{
        ak = sessionStorage.getItem('ak');
        // Load data and render it 
        loadGardenerInfo();
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

function loadGardenerInfo(){
    var url = 'https://mn6ujt3rtl.execute-api.us-east-1.amazonaws.com/development/items/getgardenerinfo?env=prod';
    var url2 = 'https://mn6ujt3rtl.execute-api.us-east-1.amazonaws.com/development/items?';

    fetch(url, {
        method : 'GET',
        cache : 'no-cache',
        headers : {
            'Content-Type' : 'application/json',
            'QUMIR-TOKEN' : ak
        }
    })
    .then(response => response.json()) // Pura notación de promesas... Equivalente a { return response.json() }
    .then(data => {
        if(data.out_res === 'USRCRT'){
            // Please provide me with your name
            toggleModal();
        }
        else{
            // render the garden
            renderGardens(data);
        }
    })
    .catch(() => {
        sessionStorage.removeItem('ak');
    });
}

function setGardenerInfo(name, lastname){
    // SET THE NAME OF THE GARDENER THE VERY FIRST TIME

    var url = 'https://mn6ujt3rtl.execute-api.us-east-1.amazonaws.com/development/items/setgardenerinfo?env=prod&mode=new&firstname='+name+'&lastname='+lastname;
    fetch(url, {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            'QUMIR-TOKEN' : ak
        }
    })
    .catch(e => {
        console.log('ERROR: '+e)
    })
}

$1('#btsave').onclick = (e) => {
    e.preventDefault();
    let elements = $('#name-form>*');
    let nameObj ={};
    for(var i = 0 ; i < elements.length ; i++){
        var item = elements.item(i);
        nameObj[item.name] = item.value;
    }

    if(nameObj.nombre.length >= 3){
        console.log('Guardar...'+nameObj.nombre);
        let usrname = nameObj.nombre
            .replace('<','')
            .replace('>','')
            .replace('/','')
            .replace(':','')
            .replace(';','')
            .replace('@','')
            .replace(')','')
            .replace('(','')
            .replace('{','')
            .replace('}','')
            .replace('[','')
            .replace(']','');
        setGardenerInfo(usrname, usrname);

        setTimeout(() => {
            window.location.replace('/main.html')
        },
        3000);
    }
};

function toggleModal(){
    document.getElementById('usr-modal').style.display='block';
}

function closeModal(objectId){
    document.getElementById(objectId).style.display = 'none';
}

function renderGardens(data){
    let gardener = data.gardener_info;
    let gardens = data.gardens_info;
    console.log('Gardener: '+gardener.firstname.S+' | Gardens: '+gardens);
}
