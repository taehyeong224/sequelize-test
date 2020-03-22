"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_express_utils_1 = require("inversify-express-utils");
var inversify_1 = require("inversify");
var UserService_1 = require("../service/UserService");
var express = require("express");
var types_1 = require("../constant/types");
var util_1 = require("../util/util");
// import { checkContentType } from "../middleware/contentType";
var token_1 = require("../middleware/token");
var TestController = /** @class */ (function () {
    function TestController(userService) {
        this.userService = userService;
    }
    TestController.prototype.getall = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var users, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userService.getAll()];
                    case 1:
                        users = _a.sent();
                        response.status(200).json(users);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        util_1.errorHandle(e_1, response);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TestController.prototype.someGet = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var user, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userService.getTestByIdx(request.params.id)];
                    case 1:
                        user = _a.sent();
                        response.status(200).json(user);
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        util_1.errorHandle(e_2, response);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TestController.prototype.somePost = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    response.status(201).json({ msg: "success" });
                }
                catch (e) {
                    util_1.errorHandle(e, response);
                }
                return [2 /*return*/];
            });
        });
    };
    TestController.prototype.somePut = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    response.status(200).json({ msg: "success" });
                }
                catch (e) {
                    console.log("error : ", e);
                    util_1.errorHandle(e, response);
                }
                return [2 /*return*/];
            });
        });
    };
    TestController.prototype.someDelete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    response.status(204).json({});
                }
                catch (e) {
                    util_1.errorHandle(e, response);
                }
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        inversify_express_utils_1.httpGet('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], TestController.prototype, "getall", null);
    __decorate([
        inversify_express_utils_1.httpGet('/:id'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], TestController.prototype, "someGet", null);
    __decorate([
        inversify_express_utils_1.httpPost('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], TestController.prototype, "somePost", null);
    __decorate([
        inversify_express_utils_1.httpPut('/', token_1.checkToken),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], TestController.prototype, "somePut", null);
    __decorate([
        inversify_express_utils_1.httpDelete('/:id', token_1.checkToken),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], TestController.prototype, "someDelete", null);
    TestController = __decorate([
        inversify_express_utils_1.controller('/user'),
        __param(0, inversify_1.inject(types_1.default.UserService)),
        __metadata("design:paramtypes", [UserService_1.UserService])
    ], TestController);
    return TestController;
}());
exports.TestController = TestController;
