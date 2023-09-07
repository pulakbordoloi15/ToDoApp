module.exports.home=function(req,res){
    console.log(req.cookies);
    return res.render('home',{
        title:"Home"
    });
};

//module.exports.actionName = funtion(req,res){}