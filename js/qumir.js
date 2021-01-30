// Page parameters
window._config = {
    cognito: {
        userPoolId: 'us-east-1_SUfk0V2Mn',
        region: 'us-east-1',
		clientId: '23o0opq63mbbuh8mjgr15argfd'
    },
};

var userPool = new AmazonCognitoIdentity.CognitoUserPool({
    UserPoolId : _config.cognito.userPoolId,
    ClientId : _config.cognito.clientId
});
var loggedUser = null;

// Page logic
window.onload = function(){
    var pname = getPageName();
    if(loggedUser == null){
        console.log(loggedUser);
        console.log('Loaded...');
    }
    else{
        if(pname === 'signin.html' || pname === 'signup.html'){
            window.location.replace('/');
        } 
    }
};