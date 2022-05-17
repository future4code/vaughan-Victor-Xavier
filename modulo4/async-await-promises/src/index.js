"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseURL_1 = require("./constants/baseURL");
const axios_1 = __importDefault(require("axios"));
function getAllSubscribers() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield axios_1.default.get(`${baseURL_1.baseURL}/subscribers`);
        return response.data;
    });
}
;
const getAllSubscribers1 = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(`${baseURL_1.baseURL}/subscribers`);
    return response.data;
});
getAllSubscribers1()
    .then(console.log);
const getAllSubscribers2 = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(`${baseURL_1.baseURL}/subscribers`);
    return response.data.map((res) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email,
        };
    });
});
getAllSubscribers2();
const createNews = (news) => {
    return axios_1.default.put(`${baseURL_1.baseURL}/news`, news);
};
const sendNotifications1 = (users, message) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        for (const user of users) {
            yield axios_1.default.post(`${baseURL_1.baseURL}/notifications`, {
                subscriberId: user.id,
                message
            });
        }
        console.log("All notifications sent");
    }
    catch (_a) {
        console.log("Error");
    }
});
const sendNotifications2 = (users, message) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const promises = users.map(user => {
            return axios_1.default.post(`${baseURL_1.baseURL}/notifications`, {
                subscriberId: user.id,
                message: message,
            });
        });
        yield Promise.all(promises);
    }
    catch (_b) {
        console.log("Error");
    }
});
