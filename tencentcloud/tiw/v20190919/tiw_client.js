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
const LayoutParams = models.LayoutParams;
const ResumeOnlineRecordResponse = models.ResumeOnlineRecordResponse;
const StartOnlineRecordRequest = models.StartOnlineRecordRequest;
const SetTranscodeCallbackResponse = models.SetTranscodeCallbackResponse;
const StopOnlineRecordRequest = models.StopOnlineRecordRequest;
const StreamLayout = models.StreamLayout;
const CreateTranscodeResponse = models.CreateTranscodeResponse;
const VideoInfo = models.VideoInfo;
const CustomLayout = models.CustomLayout;
const Concat = models.Concat;
const DescribeOnlineRecordRequest = models.DescribeOnlineRecordRequest;
const StartOnlineRecordResponse = models.StartOnlineRecordResponse;
const DescribeOnlineRecordResponse = models.DescribeOnlineRecordResponse;
const CreateTranscodeRequest = models.CreateTranscodeRequest;
const Whiteboard = models.Whiteboard;
const PauseOnlineRecordResponse = models.PauseOnlineRecordResponse;
const DescribeTranscodeRequest = models.DescribeTranscodeRequest;
const SetTranscodeCallbackRequest = models.SetTranscodeCallbackRequest;
const SetOnlineRecordCallbackResponse = models.SetOnlineRecordCallbackResponse;
const StopOnlineRecordResponse = models.StopOnlineRecordResponse;
const ResumeOnlineRecordRequest = models.ResumeOnlineRecordRequest;
const DescribeTranscodeResponse = models.DescribeTranscodeResponse;
const SetOnlineRecordCallbackRequest = models.SetOnlineRecordCallbackRequest;
const MixStream = models.MixStream;
const OmittedDuration = models.OmittedDuration;
const PauseOnlineRecordRequest = models.PauseOnlineRecordRequest;


/**
 * tiw client
 * @class
 */
class TiwClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tiw.tencentcloudapi.com", "2019-09-19", credential, region, profile);
    }
    
    /**
     * 设置实时录制回调地址
     * @param {SetOnlineRecordCallbackRequest} req
     * @param {function(string, SetOnlineRecordCallbackResponse):void} cb
     * @public
     */
    SetOnlineRecordCallback(req, cb) {
        let resp = new SetOnlineRecordCallbackResponse();
        this.request("SetOnlineRecordCallback", req, resp, cb);
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
     * 设置文档转码回调地址
     * @param {SetTranscodeCallbackRequest} req
     * @param {function(string, SetTranscodeCallbackResponse):void} cb
     * @public
     */
    SetTranscodeCallback(req, cb) {
        let resp = new SetTranscodeCallbackResponse();
        this.request("SetTranscodeCallback", req, resp, cb);
    }

    /**
     * 查询实时录制任务状态与结果
     * @param {DescribeOnlineRecordRequest} req
     * @param {function(string, DescribeOnlineRecordResponse):void} cb
     * @public
     */
    DescribeOnlineRecord(req, cb) {
        let resp = new DescribeOnlineRecordResponse();
        this.request("DescribeOnlineRecord", req, resp, cb);
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


}
module.exports = TiwClient;
