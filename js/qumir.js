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
var loggedUser = userPool.getCurrentUser();

// Page logic
window.onload = function(){
    var pname = getPageName();
    if(loggedUser == null){
        window.location.replace('/access.html');
    }
    else{
        if(pname === 'access.html' || pname === 'index.html' || pname === ''){
            window.location.replace('/main.html');
        } 
    }
};