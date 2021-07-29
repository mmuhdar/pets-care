const checkIsLogin = (req, res, next) => {
  if(req.session.isLogin){
    next()
  }else{
    res.redirect("/users/login")
  }
}

module.exports = checkIsLogin