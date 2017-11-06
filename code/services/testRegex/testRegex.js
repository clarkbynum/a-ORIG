function testRegex(req, resp){
    ClearBlade.init({request: req});
    var query = ClearBlade.Query({collectionName: "one"});
    
    var regex = new RegExp(/wow/i);
    query.matches('hey', regex.source);
    
    query.fetch(function(err, body) {
        if(err) {
            resp.error('fail; ' + JSON.stringify(body));
        } else {
            resp.success(body);
        }
    })
}