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
const DescribeFilterResultListResponse = models.DescribeFilterResultListResponse;
const VoiceFilter = models.VoiceFilter;
const VoiceFilterRequest = models.VoiceFilterRequest;
const VoiceFilterResponse = models.VoiceFilterResponse;
const DescribeFilterResultListRequest = models.DescribeFilterResultListRequest;
const VoiceFilterInfo = models.VoiceFilterInfo;
const DescribeFilterResultResponse = models.DescribeFilterResultResponse;
const DescribeFilterResultRequest = models.DescribeFilterResultRequest;


/**
 * gme client
 * @class
 */
class GmeClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("gme.tencentcloudapi.com", "2018-07-11", credential, region, profile);
    }
    
    /**
     * 根据应用ID和文件ID查询识别结果
     * @param {DescribeFilterResultRequest} req
     * @param {function(string, DescribeFilterResultResponse):void} cb
     * @public
     */
    DescribeFilterResult(req, cb) {
        let resp = new DescribeFilterResultResponse();
        this.request("DescribeFilterResult", req, resp, cb);
    }

    /**
     * 根据日期查询识别结果列表
     * @param {DescribeFilterResultListRequest} req
     * @param {function(string, DescribeFilterResultListResponse):void} cb
     * @public
     */
    DescribeFilterResultList(req, cb) {
        let resp = new DescribeFilterResultListResponse();
        this.request("DescribeFilterResultList", req, resp, cb);
    }

    /**
     * 本接口用于识别涉黄、涉政等违规音频，成功会回调配置在应用的回调地址。回调示例如下：
{"BizId":0,"FileId":"test_file_id","FileName":"test_file_name","FileUrl":"test_file_url","OpenId":"test_open_id","TimeStamp":"0000-00-00 00:00:00","Data":[{"Type":1,"Word":"xx"}]}
Type表示过滤类型，1：政治，2：色情
     * @param {VoiceFilterRequest} req
     * @param {function(string, VoiceFilterResponse):void} cb
     * @public
     */
    VoiceFilter(req, cb) {
        let resp = new VoiceFilterResponse();
        this.request("VoiceFilter", req, resp, cb);
    }


}
module.exports = GmeClient;
