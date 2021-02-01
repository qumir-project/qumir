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

