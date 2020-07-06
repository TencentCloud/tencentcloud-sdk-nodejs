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
const SegmentPortraitPicResponse = models.SegmentPortraitPicResponse;
const DetectBodyJointsResponse = models.DetectBodyJointsResponse;
const Candidate = models.Candidate;
const DeletePersonRequest = models.DeletePersonRequest;
const ModifyGroupResponse = models.ModifyGroupResponse;
const UpperBodyClothSleeve = models.UpperBodyClothSleeve;
const BodyAttributeInfo = models.BodyAttributeInfo;
const GetGroupListResponse = models.GetGroupListResponse;
const GroupInfo = models.GroupInfo;
const ModifyGroupRequest = models.ModifyGroupRequest;
const CreatePersonRequest = models.CreatePersonRequest;
const ModifyPersonInfoResponse = models.ModifyPersonInfoResponse;
const Trace = models.Trace;
const DeleteGroupRequest = models.DeleteGroupRequest;
const ModifyPersonInfoRequest = models.ModifyPersonInfoRequest;
const Gender = models.Gender;
const CreateGroupRequest = models.CreateGroupRequest;
const LowerBodyCloth = models.LowerBodyCloth;
const UpperBodyClothTexture = models.UpperBodyClothTexture;
const TraceInfo = models.TraceInfo;
const DeleteGroupResponse = models.DeleteGroupResponse;
const BodyRect = models.BodyRect;
const DetectBodyRequest = models.DetectBodyRequest;
const Age = models.Age;
const SearchTraceRequest = models.SearchTraceRequest;
const KeyPointInfo = models.KeyPointInfo;
const DetectBodyResponse = models.DetectBodyResponse;
const PersonInfo = models.PersonInfo;
const Bag = models.Bag;
const DetectBodyJointsRequest = models.DetectBodyJointsRequest;
const SegmentPortraitPicRequest = models.SegmentPortraitPicRequest;
const UpperBodyClothColor = models.UpperBodyClothColor;
const GetGroupListRequest = models.GetGroupListRequest;
const BodyDetectResult = models.BodyDetectResult;
const Orientation = models.Orientation;
const BodyJointsResult = models.BodyJointsResult;
const UpperBodyCloth = models.UpperBodyCloth;
const LowerBodyClothLength = models.LowerBodyClothLength;
const SearchTraceResponse = models.SearchTraceResponse;
const CreateTraceResponse = models.CreateTraceResponse;
const CreatePersonResponse = models.CreatePersonResponse;
const BoundRect = models.BoundRect;
const LowerBodyClothColor = models.LowerBodyClothColor;
const GetPersonListResponse = models.GetPersonListResponse;
const GetPersonListRequest = models.GetPersonListRequest;
const LowerBodyClothType = models.LowerBodyClothType;
const CreateTraceRequest = models.CreateTraceRequest;
const DeletePersonResponse = models.DeletePersonResponse;
const AttributesOptions = models.AttributesOptions;
const CreateGroupResponse = models.CreateGroupResponse;


/**
 * bda client
 * @class
 */
class BdaClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("bda.tencentcloudapi.com", "2020-03-24", credential, region, profile);
    }
    
    /**
     * 本接口用于对一组待识别的人体轨迹（Trace）图片，在人体库中识别出最相似的 TopK 人体，按照相似度从大到小排列。

人体轨迹（Trace）图片要求：图片中当且仅包含一个人体。人体完整、无遮挡。

> 请注意：
- 我们希望您的输入为严格符合轨迹图片要求的图片。如果您输入的图片不符合轨迹图片要求，会对最终效果产生较大负面影响；
- 人体轨迹，是一个包含1-5张图片的图片序列。您可以输入1张图片作为轨迹，也可以输入多张。单个轨迹中包含越多符合质量的图片，搜索效果越好。
- 构成人体轨迹单张图片大小不得超过2M，分辨率不得超过1920*1080。
     * @param {SearchTraceRequest} req
     * @param {function(string, SearchTraceResponse):void} cb
     * @public
     */
    SearchTrace(req, cb) {
        let resp = new SearchTraceResponse();
        this.request("SearchTrace", req, resp, cb);
    }

    /**
     * 检测给定图片中的人体（Body）的位置信息及属性信息。

     * @param {DetectBodyRequest} req
     * @param {function(string, DetectBodyResponse):void} cb
     * @public
     */
    DetectBody(req, cb) {
        let resp = new DetectBodyResponse();
        this.request("DetectBody", req, resp, cb);
    }

    /**
     * 识别传入图片中人体的完整轮廓，进行抠像。

     * @param {SegmentPortraitPicRequest} req
     * @param {function(string, SegmentPortraitPicResponse):void} cb
     * @public
     */
    SegmentPortraitPic(req, cb) {
        let resp = new SegmentPortraitPicResponse();
        this.request("SegmentPortraitPic", req, resp, cb);
    }

    /**
     * 检测图片中人体的14个关键点。建议用于人体图像清晰、无遮挡的场景。支持一张图片中存在多个人体的识别。

     * @param {DetectBodyJointsRequest} req
     * @param {function(string, DetectBodyJointsResponse):void} cb
     * @public
     */
    DetectBodyJoints(req, cb) {
        let resp = new DetectBodyJointsResponse();
        this.request("DetectBodyJoints", req, resp, cb);
    }

    /**
     * 将一个人体轨迹添加到一个人员中。一个人员最多允许包含 5 个人体轨迹。同一人的人体轨迹越多，搜索识别效果越好。

>请注意：
- 我们希望您的输入为 严格符合轨迹图片 要求的图片。如果您输入的图片不符合轨迹图片要求，会对最终效果产生较大负面影响。请您尽量保证一个Trace中的图片人体清晰、无遮挡、连贯。
- 一个人体轨迹（Trace）可以包含1-5张人体图片。提供越多质量高的人体图片有助于提升最终识别结果。
- 无论您在单个Trace中提供了多少张人体图片，我们都将生成一个对应的轨迹（Trace）信息。即，Trace仅和本次输入的图片序列相关，和图片的个数无关。
- 输入的图片组中，若有部分图片输入不合法（如图片大小过大、分辨率过大、无法解码等），我们将舍弃这部分图片，确保合法图片被正确搜索。即，我们将尽可能保证请求成功，去除不合法的输入；
- 构成人体轨迹单张图片大小限制为2M，分辨率限制为1920*1080。
     * @param {CreateTraceRequest} req
     * @param {function(string, CreateTraceResponse):void} cb
     * @public
     */
    CreateTrace(req, cb) {
        let resp = new CreateTraceResponse();
        this.request("CreateTrace", req, resp, cb);
    }

    /**
     * 删除该人体库及包含的所有的人员。
     * @param {DeleteGroupRequest} req
     * @param {function(string, DeleteGroupResponse):void} cb
     * @public
     */
    DeleteGroup(req, cb) {
        let resp = new DeleteGroupResponse();
        this.request("DeleteGroup", req, resp, cb);
    }

    /**
     * 删除人员。
     * @param {DeletePersonRequest} req
     * @param {function(string, DeletePersonResponse):void} cb
     * @public
     */
    DeletePerson(req, cb) {
        let resp = new DeletePersonResponse();
        this.request("DeletePerson", req, resp, cb);
    }

    /**
     * 修改人员信息。
     * @param {ModifyPersonInfoRequest} req
     * @param {function(string, ModifyPersonInfoResponse):void} cb
     * @public
     */
    ModifyPersonInfo(req, cb) {
        let resp = new ModifyPersonInfoResponse();
        this.request("ModifyPersonInfo", req, resp, cb);
    }

    /**
     * 修改人体库名称、备注。
     * @param {ModifyGroupRequest} req
     * @param {function(string, ModifyGroupResponse):void} cb
     * @public
     */
    ModifyGroup(req, cb) {
        let resp = new ModifyGroupResponse();
        this.request("ModifyGroup", req, resp, cb);
    }

    /**
     * 获取人体库列表。
     * @param {GetGroupListRequest} req
     * @param {function(string, GetGroupListResponse):void} cb
     * @public
     */
    GetGroupList(req, cb) {
        let resp = new GetGroupListResponse();
        this.request("GetGroupList", req, resp, cb);
    }

    /**
     * 用于创建一个空的人体库，如果人体库已存在返回错误。

1个APPID下最多有2000W个人体轨迹（Trace），最多1W个人体库（Group）。

单个人体库（Group）最多10W个人体轨迹（Trace）。

单个人员（Person）最多添加 5 个人体轨迹（Trace）。
     * @param {CreateGroupRequest} req
     * @param {function(string, CreateGroupResponse):void} cb
     * @public
     */
    CreateGroup(req, cb) {
        let resp = new CreateGroupResponse();
        this.request("CreateGroup", req, resp, cb);
    }

    /**
     * 创建人员，添加对应人员的人体轨迹信息。

请注意：
- 我们希望您的输入为 严格符合轨迹图片 要求的图片。如果您输入的图片不符合轨迹图片要求，会对最终效果产生较大负面影响。请您尽量保证一个Trace中的图片人体清晰、无遮挡、连贯；
- 一个人体轨迹（Trace）可以包含1-5张人体图片。提供越多质量高的人体图片有助于提升最终识别结果；
- 无论您在单个Trace中提供了多少张人体图片，我们都将生成一个对应的轨迹（Trace）信息。即，Trace仅和本次输入的图片序列相关，和图片的个数无关；
- 输入的图片组中，若有部分图片输入不合法（如图片大小过大、分辨率过大、无法解码等），我们将舍弃这部分图片，确保合法图片被正确搜索。即，我们将尽可能保证请求成功，去除不合法的输入；
- 构成人体轨迹单张图片大小不得超过2M，分辨率不得超过1920*1080。
     * @param {CreatePersonRequest} req
     * @param {function(string, CreatePersonResponse):void} cb
     * @public
     */
    CreatePerson(req, cb) {
        let resp = new CreatePersonResponse();
        this.request("CreatePerson", req, resp, cb);
    }

    /**
     * 获取指定人体库中的人员列表。
     * @param {GetPersonListRequest} req
     * @param {function(string, GetPersonListResponse):void} cb
     * @public
     */
    GetPersonList(req, cb) {
        let resp = new GetPersonListResponse();
        this.request("GetPersonList", req, resp, cb);
    }


}
module.exports = BdaClient;
