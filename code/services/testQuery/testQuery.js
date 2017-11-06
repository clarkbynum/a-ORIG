function testQuery(req, resp){
    ClearBlade.init({request: req});
    var query1 = ClearBlade.Query().matches('ble','name')
    var query2 = ClearBlade.Query().matches('ble','desc')
    var query3 = ClearBlade.Query().matches('plugin','type')
    var query4 = ClearBlade.Query().matches('portal','type')
    var or1 = query1.or(query2)
    var or2 = query3.or(query4)
    // var finalQuery = or1.and(or2)
    
    
}