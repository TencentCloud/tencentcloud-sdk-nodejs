/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const TextProcessResponse = models.TextProcessResponse;
const Group = models.Group;
const SlotInfo = models.SlotInfo;
const TextResetRequest = models.TextResetRequest;
const TextResetResponse = models.TextResetResponse;
const ResponseMessage = models.ResponseMessage;
const TextProcessRequest = models.TextProcessRequest;


/**
 * tbp client
 * @class
 */
class TbpClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tbp.tencentcloudapi.com", "2019-06-27", credential, region, profile);
    }
    
    /**
     * 会话重置接口。
     * @param {TextResetRequest} req
     * @param {function(string, TextResetResponse):void} cb
     * @public
     */
    TextReset(req, cb) {
        let resp = new TextResetResponse();
        this.request("TextReset", req, resp, cb);
    }

    /**
     * 接收调用侧的文本输入，返回应答文本。
     * @param {TextProcessRequest} req
     * @param {function(string, TextProcessResponse):void} cb
     * @public
     */
    TextProcess(req, cb) {
        let resp = new TextProcessResponse();
        this.request("TextProcess", req, resp, cb);
    }


}
module.exports = TbpClient;
