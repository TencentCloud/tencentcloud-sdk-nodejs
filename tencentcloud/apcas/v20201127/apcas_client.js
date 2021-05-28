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
const UploadIdResponse = models.UploadIdResponse;
const QueryCallDetailsRequest = models.QueryCallDetailsRequest;
const GeneralStat = models.GeneralStat;
const LabelValue = models.LabelValue;
const GetTaskDetailResponse = models.GetTaskDetailResponse;
const QueryCallDetailsResponse = models.QueryCallDetailsResponse;
const UploadIdRequest = models.UploadIdRequest;
const LabelDetailData = models.LabelDetailData;
const QueryGeneralStatResponse = models.QueryGeneralStatResponse;
const PredictRatingRequest = models.PredictRatingRequest;
const GetTaskListResponse = models.GetTaskListResponse;
const CallStatItem = models.CallStatItem;
const CallDetailItem = models.CallDetailItem;
const GetTaskListRequest = models.GetTaskListRequest;
const TaskListData = models.TaskListData;
const GetTaskDetailRequest = models.GetTaskDetailRequest;
const CallDetails = models.CallDetails;
const TaskDetailData = models.TaskDetailData;
const RatingData = models.RatingData;
const QueryCallStatResponse = models.QueryCallStatResponse;
const QueryCallStatRequest = models.QueryCallStatRequest;
const ListModel = models.ListModel;
const TaskData = models.TaskData;
const QueryGeneralStatRequest = models.QueryGeneralStatRequest;
const PredictRatingResponse = models.PredictRatingResponse;


/**
 * apcas client
 * @class
 */
class ApcasClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("apcas.tencentcloudapi.com", "2020-11-27", credential, region, profile);
    }
    
    /**
     * 获取日/月/周/总调用量统计数据
     * @param {QueryGeneralStatRequest} req
     * @param {function(string, QueryGeneralStatResponse):void} cb
     * @public
     */
    QueryGeneralStat(req, cb) {
        let resp = new QueryGeneralStatResponse();
        this.request("QueryGeneralStat", req, resp, cb);
    }

    /**
     * 查询当前账号AppID下的画像洞察任务列表
     * @param {GetTaskListRequest} req
     * @param {function(string, GetTaskListResponse):void} cb
     * @public
     */
    GetTaskList(req, cb) {
        let resp = new GetTaskListResponse();
        this.request("GetTaskList", req, resp, cb);
    }

    /**
     * 按时间维度获取调用量统计
     * @param {QueryCallStatRequest} req
     * @param {function(string, QueryCallStatResponse):void} cb
     * @public
     */
    QueryCallStat(req, cb) {
        let resp = new QueryCallStatResponse();
        this.request("QueryCallStat", req, resp, cb);
    }

    /**
     * 上传群体画像的ID列表（支持的ID类型：0:imei 7:IDFA 8:MD5(imei)），后台返回生成的画像分析任务ID
     * @param {UploadIdRequest} req
     * @param {function(string, UploadIdResponse):void} cb
     * @public
     */
    UploadId(req, cb) {
        let resp = new UploadIdResponse();
        this.request("UploadId", req, resp, cb);
    }

    /**
     * 查询画像洞察任务详情
     * @param {GetTaskDetailRequest} req
     * @param {function(string, GetTaskDetailResponse):void} cb
     * @public
     */
    GetTaskDetail(req, cb) {
        let resp = new GetTaskDetailResponse();
        this.request("GetTaskDetail", req, resp, cb);
    }

    /**
     * 查询调用明细
     * @param {QueryCallDetailsRequest} req
     * @param {function(string, QueryCallDetailsResponse):void} cb
     * @public
     */
    QueryCallDetails(req, cb) {
        let resp = new QueryCallDetailsResponse();
        this.request("QueryCallDetails", req, resp, cb);
    }

    /**
     * 根据传入的设备号（IMEI、IDFA、手机号、手机号MD5），返回意向评级结果
     * @param {PredictRatingRequest} req
     * @param {function(string, PredictRatingResponse):void} cb
     * @public
     */
    PredictRating(req, cb) {
        let resp = new PredictRatingResponse();
        this.request("PredictRating", req, resp, cb);
    }


}
module.exports = ApcasClient;
