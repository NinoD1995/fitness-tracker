exports.main = function(req, res){
    const path = req.url;
    res.write("Hello World, you requested " + path);
    res.end();
    next();
};