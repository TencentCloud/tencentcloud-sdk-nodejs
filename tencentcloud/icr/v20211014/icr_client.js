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
const ReqMetadataVagrant = models.ReqMetadataVagrant;
const GetIndustryV1HomeMembersRespIndustry = models.GetIndustryV1HomeMembersRespIndustry;
const ReqMetadata = models.ReqMetadata;
const GetIndustryV1HomeMembersRespData = models.GetIndustryV1HomeMembersRespData;
const GetIndustryV1HomeMembersRequest = models.GetIndustryV1HomeMembersRequest;
const GetIndustryV1HomeMembersRespFeature = models.GetIndustryV1HomeMembersRespFeature;
const GetIndustryV1HomeMembersReqPayload = models.GetIndustryV1HomeMembersReqPayload;
const GetIndustryV1HomeMembersRespProduct = models.GetIndustryV1HomeMembersRespProduct;
const RspMetadata = models.RspMetadata;
const GetIndustryV1HomeMembersRespPayload = models.GetIndustryV1HomeMembersRespPayload;
const GetIndustryV1HomeMembersResponse = models.GetIndustryV1HomeMembersResponse;
const ReqMetadataLBS = models.ReqMetadataLBS;
const GetIndustryV1HomeMembersRespType = models.GetIndustryV1HomeMembersRespType;


/**
 * icr client
 * @class
 */
class IcrClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("icr.tencentcloudapi.com", "2021-10-14", credential, region, profile);
    }
    
    /**
     * 获取成员列表接口
     * @param {GetIndustryV1HomeMembersRequest} req
     * @param {function(string, GetIndustryV1HomeMembersResponse):void} cb
     * @public
     */
    GetIndustryV1HomeMembers(req, cb) {
        let resp = new GetIndustryV1HomeMembersResponse();
        this.request("GetIndustryV1HomeMembers", req, resp, cb);
    }


}
module.exports = IcrClient;
