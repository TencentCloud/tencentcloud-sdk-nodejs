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
const DescribeStatusRequest = models.DescribeStatusRequest;
const StartAnalyseResponse = models.StartAnalyseResponse;
const StartAnalyseRequest = models.StartAnalyseRequest;
const DescribeStatusResponse = models.DescribeStatusResponse;


/**
 * habo client
 * @class
 */
class HaboClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("habo.tencentcloudapi.com", "2018-12-03", credential, region, profile);
    }
    
    /**
     * 上传样本到哈勃进行分析，异步生成分析日志。
     * @param {StartAnalyseRequest} req
     * @param {function(string, StartAnalyseResponse):void} cb
     * @public
     */
    StartAnalyse(req, cb) {
        let resp = new StartAnalyseResponse();
        this.request("StartAnalyse", req, resp, cb);
    }

    /**
     * 查询指定md5样本是否分析完成，并获取分析日志下载地址。
     * @param {DescribeStatusRequest} req
     * @param {function(string, DescribeStatusResponse):void} cb
     * @public
     */
    DescribeStatus(req, cb) {
        let resp = new DescribeStatusResponse();
        this.request("DescribeStatus", req, resp, cb);
    }


}
module.exports = HaboClient;
