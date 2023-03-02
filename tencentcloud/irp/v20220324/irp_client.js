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
const UserIdInfo = models.UserIdInfo;
const ReportMaterialResponse = models.ReportMaterialResponse;
const DocBehavior = models.DocBehavior;
const AuthorInfo = models.AuthorInfo;
const DocItem = models.DocItem;
const ReportActionResponse = models.ReportActionResponse;
const DislikeInfo = models.DislikeInfo;
const ReportPortraitRequest = models.ReportPortraitRequest;
const ReportPortraitResponse = models.ReportPortraitResponse;
const ReportActionRequest = models.ReportActionRequest;
const PortraitInfo = models.PortraitInfo;
const RecommendContentRequest = models.RecommendContentRequest;
const RecItemData = models.RecItemData;
const ReportMaterialRequest = models.ReportMaterialRequest;
const RecommendContentResponse = models.RecommendContentResponse;
const TagInfo = models.TagInfo;


/**
 * irp client
 * @class
 */
class IrpClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("irp.tencentcloudapi.com", "2022-03-24", credential, region, profile);
    }
    
    /**
     * 获取推荐结果
     * @param {RecommendContentRequest} req
     * @param {function(string, RecommendContentResponse):void} cb
     * @public
     */
    RecommendContent(req, cb) {
        let resp = new RecommendContentResponse();
        this.request("RecommendContent", req, resp, cb);
    }

    /**
     * 上报物料
     * @param {ReportMaterialRequest} req
     * @param {function(string, ReportMaterialResponse):void} cb
     * @public
     */
    ReportMaterial(req, cb) {
        let resp = new ReportMaterialResponse();
        this.request("ReportMaterial", req, resp, cb);
    }

    /**
     * 上报行为
     * @param {ReportActionRequest} req
     * @param {function(string, ReportActionResponse):void} cb
     * @public
     */
    ReportAction(req, cb) {
        let resp = new ReportActionResponse();
        this.request("ReportAction", req, resp, cb);
    }

    /**
     * 上报用户画像
     * @param {ReportPortraitRequest} req
     * @param {function(string, ReportPortraitResponse):void} cb
     * @public
     */
    ReportPortrait(req, cb) {
        let resp = new ReportPortraitResponse();
        this.request("ReportPortrait", req, resp, cb);
    }


}
module.exports = IrpClient;
