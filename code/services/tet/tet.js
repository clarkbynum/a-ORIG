function tet(req, resp){
    log(JSON.stringify(req));
    resp.success(Math.random());
}