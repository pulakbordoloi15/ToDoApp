module.exports.profile=function(req,res){
    return res.render('user_profile',{
        title:"Profile"
    });
};

//Render the sign up page
module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title:"ToDoApp | Sign Up"
    })
}

//Render the sign in Page
module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title:"ToDoApp | Sign In"
    })
}

//get the signup data
module.exports.create =function(req,res){
    //TO DO LATER
}

//Sign in and create a session for user
module.exports.createSession=function(req,res){
    //To do later
}