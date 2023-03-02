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
const StatusNode = models.StatusNode;
const Scf = models.Scf;
const ApproveOpinion = models.ApproveOpinion;
const OutApproveBpaasApplicationResponse = models.OutApproveBpaasApplicationResponse;
const GetBpaasApproveDetailRequest = models.GetBpaasApproveDetailRequest;
const ApproveUser = models.ApproveUser;
const GetBpaasApproveDetailResponse = models.GetBpaasApproveDetailResponse;
const OutApproveBpaasApplicationRequest = models.OutApproveBpaasApplicationRequest;
const ScfParam = models.ScfParam;
const ApplyParam = models.ApplyParam;


/**
 * bpaas client
 * @class
 */
class BpaasClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("bpaas.tencentcloudapi.com", "2018-12-17", credential, region, profile);
    }
    
    /**
     * 查看审批详情
     * @param {GetBpaasApproveDetailRequest} req
     * @param {function(string, GetBpaasApproveDetailResponse):void} cb
     * @public
     */
    GetBpaasApproveDetail(req, cb) {
        let resp = new GetBpaasApproveDetailResponse();
        this.request("GetBpaasApproveDetail", req, resp, cb);
    }

    /**
     * 外部审批申请单
     * @param {OutApproveBpaasApplicationRequest} req
     * @param {function(string, OutApproveBpaasApplicationResponse):void} cb
     * @public
     */
    OutApproveBpaasApplication(req, cb) {
        let resp = new OutApproveBpaasApplicationResponse();
        this.request("OutApproveBpaasApplication", req, resp, cb);
    }


}
module.exports = BpaasClient;
