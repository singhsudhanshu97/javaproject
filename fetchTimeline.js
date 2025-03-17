"use strict";
// import express from "express";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// const app = express();
function CallApi(product) {
    return __awaiter(this, void 0, void 0, function* () {
        let produtRetrieved = product;
        let url = `https://endoflife.date/api/${produtRetrieved}.json`;
        const options = { method: 'GET', headers: { Accept: 'application/json' } };
        try {
            const response = yield fetch(url, options);
            const data = yield response.json();
            return data;
        }
        catch (error) {
            console.error(error);
        }
    });
}
function ProcessingOutput(calledProduct) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield CallApi(calledProduct);
        // console.log("This is Data",response);
        console.log(`The latest three versions of ${calledProduct} along with eol`);
        for (let i = 0; i <= 2; i++) {
            console.log(response[i].cycle);
            console.log(response[i].eol);
        }
    });
}
ProcessingOutput('python');
ProcessingOutput('ubuntu');
