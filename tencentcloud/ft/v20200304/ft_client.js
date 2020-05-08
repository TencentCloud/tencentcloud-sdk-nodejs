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
const SwapGenderPicRequest = models.SwapGenderPicRequest;
const AgeInfo = models.AgeInfo;
const GenderInfo = models.GenderInfo;
const SwapGenderPicResponse = models.SwapGenderPicResponse;
const ChangeAgePicResponse = models.ChangeAgePicResponse;
const FaceRect = models.FaceRect;
const ChangeAgePicRequest = models.ChangeAgePicRequest;


/**
 * ft client
 * @class
 */
class FtClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ft.tencentcloudapi.com", "2020-03-04", credential, region, profile);
    }
    
    /**
     * 用户上传一张人脸图片，基于人脸编辑与生成算法，输出一张人脸性别转换的图片。男变女可实现美颜、淡妆、加刘海和长发的效果；女变男可实现加胡须、变短发的效果。 
     * @param {SwapGenderPicRequest} req
     * @param {function(string, SwapGenderPicResponse):void} cb
     * @public
     */
    SwapGenderPic(req, cb) {
        let resp = new SwapGenderPicResponse();
        this.request("SwapGenderPic", req, resp, cb);
    }

    /**
     * 用户上传一张人脸图片，基于人脸编辑与生成算法，输出一张人脸变老或变年轻的图片，支持实现人脸不同年龄的变化。
     * @param {ChangeAgePicRequest} req
     * @param {function(string, ChangeAgePicResponse):void} cb
     * @public
     */
    ChangeAgePic(req, cb) {
        let resp = new ChangeAgePicResponse();
        this.request("ChangeAgePic", req, resp, cb);
    }


}
module.exports = FtClient;
