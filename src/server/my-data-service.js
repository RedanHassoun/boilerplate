"use strict";
exports.__esModule = true;
var MyDataService = /** @class */ (function () {
    function MyDataService() {
    }
    MyDataService.prototype.getAllPeople = function () {
        var promise = new Promise(function (resolve, reject) {
            resolve('{ "name" : "redan" }');
        });
        return promise;
    };
    return MyDataService;
}());
exports.MyDataService = MyDataService;
