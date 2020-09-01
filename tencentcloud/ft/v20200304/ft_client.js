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
const QueryFaceMorphJobResponse = models.QueryFaceMorphJobResponse;
const CancelFaceMorphJobResponse = models.CancelFaceMorphJobResponse;
const AgeInfo = models.AgeInfo;
const FaceRect = models.FaceRect;
const GenderInfo = models.GenderInfo;
const SwapGenderPicRequest = models.SwapGenderPicRequest;
const GradientInfo = models.GradientInfo;
const SwapGenderPicResponse = models.SwapGenderPicResponse;
const FaceMorphOutput = models.FaceMorphOutput;
const MorphFaceRequest = models.MorphFaceRequest;
const ChangeAgePicResponse = models.ChangeAgePicResponse;
const ChangeAgePicRequest = models.ChangeAgePicRequest;
const CancelFaceMorphJobRequest = models.CancelFaceMorphJobRequest;
const FaceCartoonPicRequest = models.FaceCartoonPicRequest;
const QueryFaceMorphJobRequest = models.QueryFaceMorphJobRequest;
const FaceCartoonPicResponse = models.FaceCartoonPicResponse;
const MorphFaceResponse = models.MorphFaceResponse;


/**
 * ft client
 * @class
 */
class FtClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ft.tencentcloudapi.com", "2020-03-04", credential, region, profile);
    }
    
    /**
     * 撤销人像渐变任务请求
     * @param {CancelFaceMorphJobRequest} req
     * @param {function(string, CancelFaceMorphJobResponse):void} cb
     * @public
     */
    CancelFaceMorphJob(req, cb) {
        let resp = new CancelFaceMorphJobResponse();
        this.request("CancelFaceMorphJob", req, resp, cb);
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
     * 输入2-5张人脸照片，生成一段以人脸为焦点的渐变视频或GIF图，支持自定义图片播放速度、视频每秒传输帧数，可用于短视频、表情包、创意H5等应用场景，丰富静态图片的玩法。
     * @param {MorphFaceRequest} req
     * @param {function(string, MorphFaceResponse):void} cb
     * @public
     */
    MorphFace(req, cb) {
        let resp = new MorphFaceResponse();
        this.request("MorphFace", req, resp, cb);
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

    /**
     * 查询人像渐变处理进度
     * @param {QueryFaceMorphJobRequest} req
     * @param {function(string, QueryFaceMorphJobResponse):void} cb
     * @public
     */
    QueryFaceMorphJob(req, cb) {
        let resp = new QueryFaceMorphJobResponse();
        this.request("QueryFaceMorphJob", req, resp, cb);
    }

    /**
     * 输入一张人脸照片，生成个性化的二次元动漫形象，可用于打造个性头像、趣味活动、特效类应用等场景，提升社交娱乐的体验。
     * @param {FaceCartoonPicRequest} req
     * @param {function(string, FaceCartoonPicResponse):void} cb
     * @public
     */
    FaceCartoonPic(req, cb) {
        let resp = new FaceCartoonPicResponse();
        this.request("FaceCartoonPic", req, resp, cb);
    }


}
module.exports = FtClient;
