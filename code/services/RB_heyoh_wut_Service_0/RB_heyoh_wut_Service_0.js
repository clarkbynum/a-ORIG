function RB_heyoh_wut_Service_0 (req, resp) {
    
    var reqObject;

    try {
        reqObject = JSON.parse(req.params);
    } catch(e) {
        reqObject = req.params;
    }
  
    
  if (true) {
    callAlertProvider();
  }
  
    function callAlertProvider () {
    
        ClearBlade.init({request:req});
        ClearBlade.Code().execute("tet", {}, true, function (err, body){        
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
  