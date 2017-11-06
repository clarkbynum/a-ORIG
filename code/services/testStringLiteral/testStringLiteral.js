function testStringLiteral(req, resp){
    var name = "Clark";
    
    var stuff = "okay\
wow";
    resp.success(stuff);
}