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
var loggedUser = [];

function loginAction(e){
    e.preventDefault();

    // Get elements from the form
    var elements = $1('#login-form').querySelector('form').elements;
    var loginObj ={};
    for(var i = 0 ; i < elements.length ; i++){
        var item = elements.item(i);
        loginObj[item.name] = item.value;
    }

    // Checking that fields was completed
    if(!checkEmail(loginObj.email)){
        // Email
        document.getElementById("login-msg").innerHTML = "You must enter a valid email address.";
    }
    else if(!checkPassword(loginObj.password)){
        // Password
        document.getElementById("login-msg").innerHTML = "The password you enter is too short.";
    }
    else{
        // Goes ok
        console.log('Register action...');
        // We have a solid email and password to check through cognito
        var authDet = new AmazonCognitoIdentity.AuthenticationDetails({
            Username : loginObj.email,
            Password : loginObj.password
        }); // Usr credentials
        
        var loggedUser = new AmazonCognitoIdentity.CognitoUser({
            Username : loginObj.email,
            Pool : userPool
        }); // Usr obj

        loggedUser.authenticateUser(authDet, {
            onSuccess: function(result){
                console.log(result);
                //window.location.reload();
            },
            onFailure: function(err){
                console.log(err);
            }
        });
    }
}

$1('#login1-link').onclick = function(e){
    $1('#login-form').style.display = 'block';
    $1('#register-form').style.display = 'none';
    $1('#forgot-form').style.display = 'none';
};

$1('#register-link').onclick = function(e){
    $1('#login-form').style.display = 'none';
    $1('#register-form').style.display = 'block';
    $1('#forgot-form').style.display = 'none';
};

$1('#login2-link').onclick = function(e){
    $1('#login-form').style.display = 'block';
    $1('#register-form').style.display = 'none';
    $1('#forgot-form').style.display = 'none';
};