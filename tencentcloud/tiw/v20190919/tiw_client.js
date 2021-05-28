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
const Canvas = models.Canvas;
const SetWhiteboardPushCallbackKeyRequest = models.SetWhiteboardPushCallbackKeyRequest;
const TimeValue = models.TimeValue;
const LayoutParams = models.LayoutParams;
const SetVideoGenerationTaskCallbackRequest = models.SetVideoGenerationTaskCallbackRequest;
const StreamControl = models.StreamControl;
const StopOnlineRecordResponse = models.StopOnlineRecordResponse;
const SetVideoGenerationTaskCallbackKeyRequest = models.SetVideoGenerationTaskCallbackKeyRequest;
const StartWhiteboardPushRequest = models.StartWhiteboardPushRequest;
const OmittedDuration = models.OmittedDuration;
const DescribeWhiteboardPushRequest = models.DescribeWhiteboardPushRequest;
const DescribeQualityMetricsResponse = models.DescribeQualityMetricsResponse;
const ResumeOnlineRecordResponse = models.ResumeOnlineRecordResponse;
const SetVideoGenerationTaskCallbackResponse = models.SetVideoGenerationTaskCallbackResponse;
const SetWhiteboardPushCallbackKeyResponse = models.SetWhiteboardPushCallbackKeyResponse;
const WhiteboardPushBackupParam = models.WhiteboardPushBackupParam;
const StartOnlineRecordRequest = models.StartOnlineRecordRequest;
const DescribeVideoGenerationTaskCallbackResponse = models.DescribeVideoGenerationTaskCallbackResponse;
const StartWhiteboardPushResponse = models.StartWhiteboardPushResponse;
const DescribeOnlineRecordCallbackRequest = models.DescribeOnlineRecordCallbackRequest;
const DescribeOnlineRecordCallbackResponse = models.DescribeOnlineRecordCallbackResponse;
const StopWhiteboardPushRequest = models.StopWhiteboardPushRequest;
const SetTranscodeCallbackResponse = models.SetTranscodeCallbackResponse;
const StopOnlineRecordRequest = models.StopOnlineRecordRequest;
const SetVideoGenerationTaskCallbackKeyResponse = models.SetVideoGenerationTaskCallbackKeyResponse;
const CreateTranscodeResponse = models.CreateTranscodeResponse;
const DescribeVideoGenerationTaskResponse = models.DescribeVideoGenerationTaskResponse;
const DescribeWhiteboardPushCallbackResponse = models.DescribeWhiteboardPushCallbackResponse;
const CustomLayout = models.CustomLayout;
const VideoInfo = models.VideoInfo;
const SetTranscodeCallbackKeyResponse = models.SetTranscodeCallbackKeyResponse;
const Concat = models.Concat;
const DescribeOnlineRecordRequest = models.DescribeOnlineRecordRequest;
const DescribeWhiteboardPushResponse = models.DescribeWhiteboardPushResponse;
const StartOnlineRecordResponse = models.StartOnlineRecordResponse;
const SetOnlineRecordCallbackKeyResponse = models.SetOnlineRecordCallbackKeyResponse;
const DescribeVideoGenerationTaskRequest = models.DescribeVideoGenerationTaskRequest;
const CreateVideoGenerationTaskResponse = models.CreateVideoGenerationTaskResponse;
const PauseOnlineRecordResponse = models.PauseOnlineRecordResponse;
const CreateTranscodeRequest = models.CreateTranscodeRequest;
const DescribeWhiteboardPushCallbackRequest = models.DescribeWhiteboardPushCallbackRequest;
const DescribeOnlineRecordResponse = models.DescribeOnlineRecordResponse;
const SetTranscodeCallbackKeyRequest = models.SetTranscodeCallbackKeyRequest;
const DescribeTranscodeRequest = models.DescribeTranscodeRequest;
const DescribeTranscodeResponse = models.DescribeTranscodeResponse;
const StreamLayout = models.StreamLayout;
const DescribeQualityMetricsRequest = models.DescribeQualityMetricsRequest;
const SetOnlineRecordCallbackKeyRequest = models.SetOnlineRecordCallbackKeyRequest;
const CreateVideoGenerationTaskRequest = models.CreateVideoGenerationTaskRequest;
const DescribeTranscodeCallbackRequest = models.DescribeTranscodeCallbackRequest;
const ResumeOnlineRecordRequest = models.ResumeOnlineRecordRequest;
const DescribeTranscodeCallbackResponse = models.DescribeTranscodeCallbackResponse;
const SetTranscodeCallbackRequest = models.SetTranscodeCallbackRequest;
const SetWhiteboardPushCallbackRequest = models.SetWhiteboardPushCallbackRequest;
const SetWhiteboardPushCallbackResponse = models.SetWhiteboardPushCallbackResponse;
const RecordControl = models.RecordControl;
const SetOnlineRecordCallbackRequest = models.SetOnlineRecordCallbackRequest;
const Whiteboard = models.Whiteboard;
const MixStream = models.MixStream;
const DescribeVideoGenerationTaskCallbackRequest = models.DescribeVideoGenerationTaskCallbackRequest;
const PauseOnlineRecordRequest = models.PauseOnlineRecordRequest;
const StopWhiteboardPushResponse = models.StopWhiteboardPushResponse;
const SetOnlineRecordCallbackResponse = models.SetOnlineRecordCallbackResponse;


/**
 * tiw client
 * @class
 */
class TiwClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tiw.tencentcloudapi.com", "2019-09-19", credential, region, profile);
    }
    
    /**
     * 设置实时录制回调地址，回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40258
     * @param {SetOnlineRecordCallbackRequest} req
     * @param {function(string, SetOnlineRecordCallbackResponse):void} cb
     * @public
     */
    SetOnlineRecordCallback(req, cb) {
        let resp = new SetOnlineRecordCallbackResponse();
        this.request("SetOnlineRecordCallback", req, resp, cb);
    }

    /**
     * 设置录制视频生成回调地址
     * @param {SetVideoGenerationTaskCallbackRequest} req
     * @param {function(string, SetVideoGenerationTaskCallbackResponse):void} cb
     * @public
     */
    SetVideoGenerationTaskCallback(req, cb) {
        let resp = new SetVideoGenerationTaskCallbackResponse();
        this.request("SetVideoGenerationTaskCallback", req, resp, cb);
    }

    /**
     * 创建视频生成任务
     * @param {CreateVideoGenerationTaskRequest} req
     * @param {function(string, CreateVideoGenerationTaskResponse):void} cb
     * @public
     */
    CreateVideoGenerationTask(req, cb) {
        let resp = new CreateVideoGenerationTaskResponse();
        this.request("CreateVideoGenerationTask", req, resp, cb);
    }

    /**
     * 设置实时录制回调鉴权密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
     * @param {SetOnlineRecordCallbackKeyRequest} req
     * @param {function(string, SetOnlineRecordCallbackKeyResponse):void} cb
     * @public
     */
    SetOnlineRecordCallbackKey(req, cb) {
        let resp = new SetOnlineRecordCallbackKeyResponse();
        this.request("SetOnlineRecordCallbackKey", req, resp, cb);
    }

    /**
     * 设置文档转码回调地址，回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40260
     * @param {SetTranscodeCallbackRequest} req
     * @param {function(string, SetTranscodeCallbackResponse):void} cb
     * @public
     */
    SetTranscodeCallback(req, cb) {
        let resp = new SetTranscodeCallbackResponse();
        this.request("SetTranscodeCallback", req, resp, cb);
    }

    /**
     * 恢复实时录制
     * @param {ResumeOnlineRecordRequest} req
     * @param {function(string, ResumeOnlineRecordResponse):void} cb
     * @public
     */
    ResumeOnlineRecord(req, cb) {
        let resp = new ResumeOnlineRecordResponse();
        this.request("ResumeOnlineRecord", req, resp, cb);
    }

    /**
     * 设置文档转码回调鉴权密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
     * @param {SetTranscodeCallbackKeyRequest} req
     * @param {function(string, SetTranscodeCallbackKeyResponse):void} cb
     * @public
     */
    SetTranscodeCallbackKey(req, cb) {
        let resp = new SetTranscodeCallbackKeyResponse();
        this.request("SetTranscodeCallbackKey", req, resp, cb);
    }

    /**
     * 查询文档转码任务的执行进度与转码结果
     * @param {DescribeTranscodeRequest} req
     * @param {function(string, DescribeTranscodeResponse):void} cb
     * @public
     */
    DescribeTranscode(req, cb) {
        let resp = new DescribeTranscodeResponse();
        this.request("DescribeTranscode", req, resp, cb);
    }

    /**
     * 查询录制任务状态与结果
     * @param {DescribeOnlineRecordRequest} req
     * @param {function(string, DescribeOnlineRecordResponse):void} cb
     * @public
     */
    DescribeOnlineRecord(req, cb) {
        let resp = new DescribeOnlineRecordResponse();
        this.request("DescribeOnlineRecord", req, resp, cb);
    }

    /**
     * 查询实时录制回调地址
     * @param {DescribeOnlineRecordCallbackRequest} req
     * @param {function(string, DescribeOnlineRecordCallbackResponse):void} cb
     * @public
     */
    DescribeOnlineRecordCallback(req, cb) {
        let resp = new DescribeOnlineRecordCallbackResponse();
        this.request("DescribeOnlineRecordCallback", req, resp, cb);
    }

    /**
     * 查询白板推流回调地址
     * @param {DescribeWhiteboardPushCallbackRequest} req
     * @param {function(string, DescribeWhiteboardPushCallbackResponse):void} cb
     * @public
     */
    DescribeWhiteboardPushCallback(req, cb) {
        let resp = new DescribeWhiteboardPushCallbackResponse();
        this.request("DescribeWhiteboardPushCallback", req, resp, cb);
    }

    /**
     * 发起一个白板推流任务
     * @param {StartWhiteboardPushRequest} req
     * @param {function(string, StartWhiteboardPushResponse):void} cb
     * @public
     */
    StartWhiteboardPush(req, cb) {
        let resp = new StartWhiteboardPushResponse();
        this.request("StartWhiteboardPush", req, resp, cb);
    }

    /**
     * 创建一个文档转码任务
     * @param {CreateTranscodeRequest} req
     * @param {function(string, CreateTranscodeResponse):void} cb
     * @public
     */
    CreateTranscode(req, cb) {
        let resp = new CreateTranscodeResponse();
        this.request("CreateTranscode", req, resp, cb);
    }

    /**
     * 查询录制视频生成回调地址
     * @param {DescribeVideoGenerationTaskCallbackRequest} req
     * @param {function(string, DescribeVideoGenerationTaskCallbackResponse):void} cb
     * @public
     */
    DescribeVideoGenerationTaskCallback(req, cb) {
        let resp = new DescribeVideoGenerationTaskCallbackResponse();
        this.request("DescribeVideoGenerationTaskCallback", req, resp, cb);
    }

    /**
     * 设置白板推流回调地址，回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40257
     * @param {SetWhiteboardPushCallbackRequest} req
     * @param {function(string, SetWhiteboardPushCallbackResponse):void} cb
     * @public
     */
    SetWhiteboardPushCallback(req, cb) {
        let resp = new SetWhiteboardPushCallbackResponse();
        this.request("SetWhiteboardPushCallback", req, resp, cb);
    }

    /**
     * 发起一个实时录制任务
     * @param {StartOnlineRecordRequest} req
     * @param {function(string, StartOnlineRecordResponse):void} cb
     * @public
     */
    StartOnlineRecord(req, cb) {
        let resp = new StartOnlineRecordResponse();
        this.request("StartOnlineRecord", req, resp, cb);
    }

    /**
     * 停止实时录制
     * @param {StopOnlineRecordRequest} req
     * @param {function(string, StopOnlineRecordResponse):void} cb
     * @public
     */
    StopOnlineRecord(req, cb) {
        let resp = new StopOnlineRecordResponse();
        this.request("StopOnlineRecord", req, resp, cb);
    }

    /**
     * 设置白板推流回调鉴权密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
     * @param {SetWhiteboardPushCallbackKeyRequest} req
     * @param {function(string, SetWhiteboardPushCallbackKeyResponse):void} cb
     * @public
     */
    SetWhiteboardPushCallbackKey(req, cb) {
        let resp = new SetWhiteboardPushCallbackKeyResponse();
        this.request("SetWhiteboardPushCallbackKey", req, resp, cb);
    }

    /**
     * 停止白板推流任务
     * @param {StopWhiteboardPushRequest} req
     * @param {function(string, StopWhiteboardPushResponse):void} cb
     * @public
     */
    StopWhiteboardPush(req, cb) {
        let resp = new StopWhiteboardPushResponse();
        this.request("StopWhiteboardPush", req, resp, cb);
    }

    /**
     * 查询互动白板质量数据
     * @param {DescribeQualityMetricsRequest} req
     * @param {function(string, DescribeQualityMetricsResponse):void} cb
     * @public
     */
    DescribeQualityMetrics(req, cb) {
        let resp = new DescribeQualityMetricsResponse();
        this.request("DescribeQualityMetrics", req, resp, cb);
    }

    /**
     * 暂停实时录制
     * @param {PauseOnlineRecordRequest} req
     * @param {function(string, PauseOnlineRecordResponse):void} cb
     * @public
     */
    PauseOnlineRecord(req, cb) {
        let resp = new PauseOnlineRecordResponse();
        this.request("PauseOnlineRecord", req, resp, cb);
    }

    /**
     * 查询文档转码回调地址
     * @param {DescribeTranscodeCallbackRequest} req
     * @param {function(string, DescribeTranscodeCallbackResponse):void} cb
     * @public
     */
    DescribeTranscodeCallback(req, cb) {
        let resp = new DescribeTranscodeCallbackResponse();
        this.request("DescribeTranscodeCallback", req, resp, cb);
    }

    /**
     * 设置视频生成回调鉴权密钥
     * @param {SetVideoGenerationTaskCallbackKeyRequest} req
     * @param {function(string, SetVideoGenerationTaskCallbackKeyResponse):void} cb
     * @public
     */
    SetVideoGenerationTaskCallbackKey(req, cb) {
        let resp = new SetVideoGenerationTaskCallbackKeyResponse();
        this.request("SetVideoGenerationTaskCallbackKey", req, resp, cb);
    }

    /**
     * 查询推流任务状态与结果
     * @param {DescribeWhiteboardPushRequest} req
     * @param {function(string, DescribeWhiteboardPushResponse):void} cb
     * @public
     */
    DescribeWhiteboardPush(req, cb) {
        let resp = new DescribeWhiteboardPushResponse();
        this.request("DescribeWhiteboardPush", req, resp, cb);
    }

    /**
     * 查询录制视频生成任务状态与结果
     * @param {DescribeVideoGenerationTaskRequest} req
     * @param {function(string, DescribeVideoGenerationTaskResponse):void} cb
     * @public
     */
    DescribeVideoGenerationTask(req, cb) {
        let resp = new DescribeVideoGenerationTaskResponse();
        this.request("DescribeVideoGenerationTask", req, resp, cb);
    }


}
module.exports = TiwClient;
