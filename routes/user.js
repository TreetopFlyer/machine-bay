var router = require('express').Router();
var neo4j = require('neo4j-driver').v1;
var neo4jDriver = neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j', 'admin'));
neo4jDriver.onCompleted = function()
{
    console.log("completed");
};
neo4jDriver.onError = function()
{
    console.log("error");
};
var neo4jSession = neo4jDriver.session();

neo4jSession
.run("match (u:User) return u")
.then(function(inSuccess)
{
    console.log(inSuccess.records);
    neo4jSession.close();
})
.catch(function(inError)
{
    console.log(inError);
});

router.get('/', function(inReq, inRes)
{
    inRes.status(200).send("hey");
});

module.exports = router;