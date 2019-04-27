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
const ImageModerationRequest = models.ImageModerationRequest;
const Candidate = models.Candidate;
const TerrorismResult = models.TerrorismResult;
const PoliticsResult = models.PoliticsResult;
const PornResult = models.PornResult;
const DisgustResult = models.DisgustResult;
const FaceRect = models.FaceRect;
const FaceResult = models.FaceResult;
const ImageModerationResponse = models.ImageModerationResponse;


/**
 * ticm client
 * @class
 */
class TicmClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ticm.tencentcloudapi.com", "2018-11-27", credential, region, profile);
    }
    
    /**
     * 本接口提供多种维度的图像审核能力，支持色情和性感内容识别，政治人物和涉政敏感场景识别，以及暴恐人物、场景、旗帜标识等违禁内容的识别。
     * @param {ImageModerationRequest} req
     * @param {function(string, ImageModerationResponse):void} cb
     * @public
     */
    ImageModeration(req, cb) {
        let resp = new ImageModerationResponse();
        this.request("ImageModeration", req, resp, cb);
    }


}
module.exports = TicmClient;
