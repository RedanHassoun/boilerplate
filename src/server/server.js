"use strict";
exports.__esModule = true;
var my_data_service_1 = require("./my-data-service");
var server_constants_1 = require("./server-constants");
var express = require("express");
var bodyParser = require("body-parser");
var ServerApp = /** @class */ (function () {
    function ServerApp(dataService) {
        this.dataService = dataService;
        this.app = express();
    }
    ServerApp.prototype.init = function () {
        var _this = this;
        this.app.use(bodyParser.json());
        this.app.get('/api/getAllPeople', function (req, res) {
            _this.dataService.getAllPeople()
                .then(function (peopleArray) {
                res.send(peopleArray);
            }, function (error) {
                res.send('undefined');
            });
        });
        this.app.listen(server_constants_1.SERVER_PORT, function () { });
    };
    return ServerApp;
}());
var serverApp = new ServerApp(new my_data_service_1.MyDataService());
serverApp.init();
