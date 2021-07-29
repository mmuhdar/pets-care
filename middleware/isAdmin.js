const checkIsAdmin = (req, res, next) => {
  if(req.session.isAdmin == "admin"){
    next()
  }else{
    const message = "Anda tidak punya izin untuk mengakses ini"
    res.redirect(`/?msg=${message}`)
  }
}

module.exports = checkIsAdmin