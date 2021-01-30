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

function registerAction(e){
    e.preventDefault();
    var elements = document.getElementById("register-form").elements;
    var registerObj ={};
    for(var i = 0 ; i < elements.length ; i++){
        var item = elements.item(i);
        registerObj[item.name] = item.value;
    }

    if(registerObj.password1 != registerObj.password2){
        // Password not matching
        document.getElementById("register-msg").innerHTML = "Please write matching passwords...";
    }
    else{
        // register action through cognito
        var attList = [];
		
		var cognitoObjEmail = {
			Name : 'email', 
			Value : registerObj.email
        };

        var usrname = registerObj.email.split('@');
        usrname = usrname[0];
        console.log(usrname);
        
        var cognitoAttEmail = new AmazonCognitoIdentity.CognitoUserAttribute(cognitoObjEmail);

        attList.push(cognitoAttEmail);

        // Connection to cognito
        userPool.signUp(usrname+'',
                        registerObj.password1,
                        attList,
                        null,
                        function(err, result){
			                if (err) {
				                alert(err.message || JSON.stringify(err));
				                return;
			                }
                            cognitoUser = result.user;
                            console.log('user name is ' + cognitoUser.getUsername());
                            //change elements of page
                            document.getElementById("register-msg").innerHTML = "Check your email for a verification link";
        });
        
        console.log(attList);
    }
    
}