var chai = require('chai');
var chaiHTTP = require('chai-http');

var server = require('../server.js');
var express;

var should = chai.should();
chai.use(chaiHTTP);

describe("tests", function(){

    before(function(done){
        express = server.listen(7357);
        done();
    });
    after(function(done){
        express.close();
        done();
    });

    describe("API", function()
    {
        it("should provide a token with correct login", function(done)
        {

            done();
        });
        it("should let a user create an empty project", function(done)
        {

            done();
        });
        it("should let a user upload matricies to the project", function(done)
        {

            done();
        });
        it("should accept an empty request to a finished project and return a schema", function(done)
        {

            done();
        });
        it("should accept a CSV request to a finished project and return labels", function(done)
        {

            done();
        });
    });

});
