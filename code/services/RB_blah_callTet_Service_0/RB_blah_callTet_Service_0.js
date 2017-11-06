function RB_blah_callTet_Service_0 (req, resp) {
    
    var reqObject;

    try {
        reqObject = JSON.parse(req.params.body);
    } catch(e) {
        reqObject = req.params.body;
    }
  
    
  if (()) {
    callAlertProvider();
  }
  
    function callAlertProvider () {
    
        ClearBlade.init({request:req});
        ClearBlade.Code().execute("tet", {"objKey":{"str":"hello string","num":42,"array":["hello"]},"stringy":"herrostringy","numb":55,"bool":true}, true, function (err, body){        
            if(err) {
                log("Failure while executing tet; " + JSON.stringify(err));
                resp.error(body);
            } else {
                log("Successfully executed tet");
                resp.success(body);
            }
        })
    
    }
    
    resp.success('Nothing to do');
  }
  