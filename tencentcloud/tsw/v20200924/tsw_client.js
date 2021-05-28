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
const DescribeAgentShellResponse = models.DescribeAgentShellResponse;
const AgentShell = models.AgentShell;
const DescribeAgentShellRequest = models.DescribeAgentShellRequest;


/**
 * tsw client
 * @class
 */
class TswClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tsw.tencentcloudapi.com", "2020-09-24", credential, region, profile);
    }
    
    /**
     * 获取服务接入信息
     * @param {DescribeAgentShellRequest} req
     * @param {function(string, DescribeAgentShellResponse):void} cb
     * @public
     */
    DescribeAgentShell(req, cb) {
        let resp = new DescribeAgentShellResponse();
        this.request("DescribeAgentShell", req, resp, cb);
    }


}
module.exports = TswClient;
