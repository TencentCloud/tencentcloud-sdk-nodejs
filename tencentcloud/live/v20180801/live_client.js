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
const CreateLiveSnapshotRuleRequest = models.CreateLiveSnapshotRuleRequest;
const CreateLiveCertRequest = models.CreateLiveCertRequest;
const DescribeLiveCallbackTemplatesRequest = models.DescribeLiveCallbackTemplatesRequest;
const DeleteLiveRecordRuleRequest = models.DeleteLiveRecordRuleRequest;
const ResumeLiveStreamRequest = models.ResumeLiveStreamRequest;
const DeleteLiveTranscodeTemplateResponse = models.DeleteLiveTranscodeTemplateResponse;
const DeleteLiveCallbackRuleResponse = models.DeleteLiveCallbackRuleResponse;
const DescribeLiveWatermarkRulesResponse = models.DescribeLiveWatermarkRulesResponse;
const DescribeLiveCallbackTemplateResponse = models.DescribeLiveCallbackTemplateResponse;
const DeleteLiveSnapshotTemplateRequest = models.DeleteLiveSnapshotTemplateRequest;
const PushAuthKeyInfo = models.PushAuthKeyInfo;
const ModifyPullStreamStatusRequest = models.ModifyPullStreamStatusRequest;
const DescribeLiveStreamOnlineInfoResponse = models.DescribeLiveStreamOnlineInfoResponse;
const DeleteLiveRecordTemplateRequest = models.DeleteLiveRecordTemplateRequest;
const DescribeLivePlayAuthKeyRequest = models.DescribeLivePlayAuthKeyRequest;
const DescribeLiveStreamOnlineListResponse = models.DescribeLiveStreamOnlineListResponse;
const ModifyLivePlayAuthKeyRequest = models.ModifyLivePlayAuthKeyRequest;
const DomainCertInfo = models.DomainCertInfo;
const RecordTemplateInfo = models.RecordTemplateInfo;
const DeleteLiveTranscodeRuleResponse = models.DeleteLiveTranscodeRuleResponse;
const ModifyLiveSnapshotTemplateResponse = models.ModifyLiveSnapshotTemplateResponse;
const ModifyLivePushAuthKeyRequest = models.ModifyLivePushAuthKeyRequest;
const DeleteLiveSnapshotTemplateResponse = models.DeleteLiveSnapshotTemplateResponse;
const DescribeLiveStreamStateRequest = models.DescribeLiveStreamStateRequest;
const DescribeLivePlayAuthKeyResponse = models.DescribeLivePlayAuthKeyResponse;
const DescribeLiveSnapshotTemplateRequest = models.DescribeLiveSnapshotTemplateRequest;
const DescribeLiveTranscodeRulesRequest = models.DescribeLiveTranscodeRulesRequest;
const DeleteLiveSnapshotRuleRequest = models.DeleteLiveSnapshotRuleRequest;
const ModifyPullStreamConfigRequest = models.ModifyPullStreamConfigRequest;
const DescribeLiveSnapshotRulesResponse = models.DescribeLiveSnapshotRulesResponse;
const DescribeLiveStreamPublishedListRequest = models.DescribeLiveStreamPublishedListRequest;
const DeleteLiveTranscodeRuleRequest = models.DeleteLiveTranscodeRuleRequest;
const CreateLiveRecordRuleRequest = models.CreateLiveRecordRuleRequest;
const DescribeLiveSnapshotTemplatesRequest = models.DescribeLiveSnapshotTemplatesRequest;
const AddLiveWatermarkResponse = models.AddLiveWatermarkResponse;
const DescribeLiveDomainCertResponse = models.DescribeLiveDomainCertResponse;
const CreateLiveRecordTemplateResponse = models.CreateLiveRecordTemplateResponse;
const ModifyLiveDomainCertRequest = models.ModifyLiveDomainCertRequest;
const StreamOnlineInfo = models.StreamOnlineInfo;
const CreateLiveWatermarkRuleResponse = models.CreateLiveWatermarkRuleResponse;
const ForbidLiveStreamRequest = models.ForbidLiveStreamRequest;
const StreamInfo = models.StreamInfo;
const AddLiveWatermarkRequest = models.AddLiveWatermarkRequest;
const ModifyLiveRecordTemplateResponse = models.ModifyLiveRecordTemplateResponse;
const DeleteLiveRecordTemplateResponse = models.DeleteLiveRecordTemplateResponse;
const DescribeLiveWatermarkRequest = models.DescribeLiveWatermarkRequest;
const AddDelayLiveStreamRequest = models.AddDelayLiveStreamRequest;
const DescribeLiveDomainCertRequest = models.DescribeLiveDomainCertRequest;
const DescribeLiveStreamEventListRequest = models.DescribeLiveStreamEventListRequest;
const DescribePullStreamConfigsRequest = models.DescribePullStreamConfigsRequest;
const CallBackTemplateInfo = models.CallBackTemplateInfo;
const UnBindLiveDomainCertRequest = models.UnBindLiveDomainCertRequest;
const DeleteLiveRecordResponse = models.DeleteLiveRecordResponse;
const TemplateInfo = models.TemplateInfo;
const PullStreamConfig = models.PullStreamConfig;
const CreateLiveRecordResponse = models.CreateLiveRecordResponse;
const RuleInfo = models.RuleInfo;
const UpdateLiveWatermarkResponse = models.UpdateLiveWatermarkResponse;
const CreateLiveTranscodeTemplateResponse = models.CreateLiveTranscodeTemplateResponse;
const SetLiveWatermarkStatusRequest = models.SetLiveWatermarkStatusRequest;
const ModifyPullStreamStatusResponse = models.ModifyPullStreamStatusResponse;
const WatermarkInfo = models.WatermarkInfo;
const DescribeLiveCertsResponse = models.DescribeLiveCertsResponse;
const ResumeDelayLiveStreamRequest = models.ResumeDelayLiveStreamRequest;
const DescribeLiveRecordTemplatesResponse = models.DescribeLiveRecordTemplatesResponse;
const DescribeLiveCertRequest = models.DescribeLiveCertRequest;
const DeleteLiveWatermarkResponse = models.DeleteLiveWatermarkResponse;
const CreateLiveCallbackTemplateRequest = models.CreateLiveCallbackTemplateRequest;
const DropLiveStreamResponse = models.DropLiveStreamResponse;
const DescribeLiveStreamStateResponse = models.DescribeLiveStreamStateResponse;
const DeletePullStreamConfigResponse = models.DeletePullStreamConfigResponse;
const DeleteLiveWatermarkRuleRequest = models.DeleteLiveWatermarkRuleRequest;
const StreamEventInfo = models.StreamEventInfo;
const DescribeLiveWatermarksRequest = models.DescribeLiveWatermarksRequest;
const CreateLiveTranscodeRuleRequest = models.CreateLiveTranscodeRuleRequest;
const DescribeLiveWatermarkRulesRequest = models.DescribeLiveWatermarkRulesRequest;
const DropLiveStreamRequest = models.DropLiveStreamRequest;
const CreateLiveCertResponse = models.CreateLiveCertResponse;
const ModifyLiveCertResponse = models.ModifyLiveCertResponse;
const DescribeLiveSnapshotTemplateResponse = models.DescribeLiveSnapshotTemplateResponse;
const DescribeLiveTranscodeRulesResponse = models.DescribeLiveTranscodeRulesResponse;
const StreamName = models.StreamName;
const CreatePullStreamConfigRequest = models.CreatePullStreamConfigRequest;
const DescribeLiveCertsRequest = models.DescribeLiveCertsRequest;
const DescribeLiveCertResponse = models.DescribeLiveCertResponse;
const ModifyPullStreamConfigResponse = models.ModifyPullStreamConfigResponse;
const DeleteLiveCallbackTemplateResponse = models.DeleteLiveCallbackTemplateResponse;
const DescribeLiveForbidStreamListResponse = models.DescribeLiveForbidStreamListResponse;
const DescribeLiveWatermarkResponse = models.DescribeLiveWatermarkResponse;
const ResumeLiveStreamResponse = models.ResumeLiveStreamResponse;
const DeletePullStreamConfigRequest = models.DeletePullStreamConfigRequest;
const DescribeLiveTranscodeTemplatesRequest = models.DescribeLiveTranscodeTemplatesRequest;
const DescribeLiveWatermarksResponse = models.DescribeLiveWatermarksResponse;
const DescribeLiveForbidStreamListRequest = models.DescribeLiveForbidStreamListRequest;
const CreatePullStreamConfigResponse = models.CreatePullStreamConfigResponse;
const BindLiveDomainCertRequest = models.BindLiveDomainCertRequest;
const CreateLiveCallbackRuleRequest = models.CreateLiveCallbackRuleRequest;
const DeleteLiveWatermarkRuleResponse = models.DeleteLiveWatermarkRuleResponse;
const PublishTime = models.PublishTime;
const ModifyLiveTranscodeTemplateResponse = models.ModifyLiveTranscodeTemplateResponse;
const DeleteLiveWatermarkRequest = models.DeleteLiveWatermarkRequest;
const UpdateLiveWatermarkRequest = models.UpdateLiveWatermarkRequest;
const DeleteLiveSnapshotRuleResponse = models.DeleteLiveSnapshotRuleResponse;
const CreateLiveRecordRequest = models.CreateLiveRecordRequest;
const ForbidLiveStreamResponse = models.ForbidLiveStreamResponse;
const DescribeLiveSnapshotTemplatesResponse = models.DescribeLiveSnapshotTemplatesResponse;
const CertInfo = models.CertInfo;
const ModifyLivePushAuthKeyResponse = models.ModifyLivePushAuthKeyResponse;
const DeleteLiveTranscodeTemplateRequest = models.DeleteLiveTranscodeTemplateRequest;
const DescribeLiveCallbackRulesRequest = models.DescribeLiveCallbackRulesRequest;
const DescribeLiveTranscodeTemplateResponse = models.DescribeLiveTranscodeTemplateResponse;
const CreateLiveSnapshotTemplateResponse = models.CreateLiveSnapshotTemplateResponse;
const ModifyLiveCertRequest = models.ModifyLiveCertRequest;
const UnBindLiveDomainCertResponse = models.UnBindLiveDomainCertResponse;
const DescribeLiveRecordRulesRequest = models.DescribeLiveRecordRulesRequest;
const DescribeLiveRecordTemplateRequest = models.DescribeLiveRecordTemplateRequest;
const RecordParam = models.RecordParam;
const ModifyLiveRecordTemplateRequest = models.ModifyLiveRecordTemplateRequest;
const DescribeLiveStreamOnlineInfoRequest = models.DescribeLiveStreamOnlineInfoRequest;
const DeleteLiveRecordRequest = models.DeleteLiveRecordRequest;
const StopLiveRecordRequest = models.StopLiveRecordRequest;
const CreateLiveTranscodeTemplateRequest = models.CreateLiveTranscodeTemplateRequest;
const DescribeLiveStreamPublishedListResponse = models.DescribeLiveStreamPublishedListResponse;
const AddDelayLiveStreamResponse = models.AddDelayLiveStreamResponse;
const DescribeLiveTranscodeTemplatesResponse = models.DescribeLiveTranscodeTemplatesResponse;
const DeleteLiveCallbackRuleRequest = models.DeleteLiveCallbackRuleRequest;
const PlayAuthKeyInfo = models.PlayAuthKeyInfo;
const ModifyLiveTranscodeTemplateRequest = models.ModifyLiveTranscodeTemplateRequest;
const ModifyLiveDomainCertResponse = models.ModifyLiveDomainCertResponse;
const ModifyLivePlayAuthKeyResponse = models.ModifyLivePlayAuthKeyResponse;
const CreateLiveTranscodeRuleResponse = models.CreateLiveTranscodeRuleResponse;
const SetLiveWatermarkStatusResponse = models.SetLiveWatermarkStatusResponse;
const CreateLiveCallbackRuleResponse = models.CreateLiveCallbackRuleResponse;
const DescribeLiveRecordTemplateResponse = models.DescribeLiveRecordTemplateResponse;
const BindLiveDomainCertResponse = models.BindLiveDomainCertResponse;
const CallBackRuleInfo = models.CallBackRuleInfo;
const CreateLiveRecordTemplateRequest = models.CreateLiveRecordTemplateRequest;
const DescribeLiveRecordRulesResponse = models.DescribeLiveRecordRulesResponse;
const CreateLiveSnapshotTemplateRequest = models.CreateLiveSnapshotTemplateRequest;
const DescribeLiveStreamOnlineListRequest = models.DescribeLiveStreamOnlineListRequest;
const DeleteLiveCallbackTemplateRequest = models.DeleteLiveCallbackTemplateRequest;
const ModifyLiveCallbackTemplateRequest = models.ModifyLiveCallbackTemplateRequest;
const DeleteLiveCertResponse = models.DeleteLiveCertResponse;
const CreateLiveCallbackTemplateResponse = models.CreateLiveCallbackTemplateResponse;
const DescribeLivePushAuthKeyRequest = models.DescribeLivePushAuthKeyRequest;
const DescribeLiveCallbackTemplateRequest = models.DescribeLiveCallbackTemplateRequest;
const ModifyLiveSnapshotTemplateRequest = models.ModifyLiveSnapshotTemplateRequest;
const CreateLiveRecordRuleResponse = models.CreateLiveRecordRuleResponse;
const DescribeLiveTranscodeTemplateRequest = models.DescribeLiveTranscodeTemplateRequest;
const ModifyLiveCallbackTemplateResponse = models.ModifyLiveCallbackTemplateResponse;
const DescribeLiveCallbackTemplatesResponse = models.DescribeLiveCallbackTemplatesResponse;
const DescribeLivePushAuthKeyResponse = models.DescribeLivePushAuthKeyResponse;
const CreateLiveWatermarkRuleRequest = models.CreateLiveWatermarkRuleRequest;
const DescribeLiveRecordTemplatesRequest = models.DescribeLiveRecordTemplatesRequest;
const StopLiveRecordResponse = models.StopLiveRecordResponse;
const CreateLiveSnapshotRuleResponse = models.CreateLiveSnapshotRuleResponse;
const DescribeLiveStreamEventListResponse = models.DescribeLiveStreamEventListResponse;
const DescribePullStreamConfigsResponse = models.DescribePullStreamConfigsResponse;
const DescribeLiveCallbackRulesResponse = models.DescribeLiveCallbackRulesResponse;
const ForbidStreamInfo = models.ForbidStreamInfo;
const ResumeDelayLiveStreamResponse = models.ResumeDelayLiveStreamResponse;
const DescribeLiveSnapshotRulesRequest = models.DescribeLiveSnapshotRulesRequest;
const DeleteLiveCertRequest = models.DeleteLiveCertRequest;
const SnapshotTemplateInfo = models.SnapshotTemplateInfo;
const DeleteLiveRecordRuleResponse = models.DeleteLiveRecordRuleResponse;


/**
 * live client
 * @class
 */
class LiveClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("live.tencentcloudapi.com", "2018-08-01", credential, region, profile);
    }
    
    /**
     * 获取回调模板列表
     * @param {DescribeLiveCallbackTemplatesRequest} req
     * @param {function(string, DescribeLiveCallbackTemplatesResponse):void} cb
     * @public
     */
    DescribeLiveCallbackTemplates(req, cb) {
        let resp = new DescribeLiveCallbackTemplatesResponse();
        this.request("DescribeLiveCallbackTemplates", req, resp, cb);
    }

    /**
     * 断开推流连接，但可以重新推流
     * @param {DropLiveStreamRequest} req
     * @param {function(string, DropLiveStreamResponse):void} cb
     * @public
     */
    DropLiveStream(req, cb) {
        let resp = new DropLiveStreamResponse();
        this.request("DropLiveStream", req, resp, cb);
    }

    /**
     * 创建转码规则，需要先调用[CreateLiveTranscodeTemplate](/document/product/267/32646)接口创建转码模板，将返回的模板id绑定到流使用。
<br>转码相关文档：[直播转封装及转码](/document/product/267/32736)。
     * @param {CreateLiveTranscodeRuleRequest} req
     * @param {function(string, CreateLiveTranscodeRuleResponse):void} cb
     * @public
     */
    CreateLiveTranscodeRule(req, cb) {
        let resp = new CreateLiveTranscodeRuleResponse();
        this.request("CreateLiveTranscodeRule", req, resp, cb);
    }

    /**
     * 获取截图模板列表
     * @param {DescribeLiveSnapshotTemplatesRequest} req
     * @param {function(string, DescribeLiveSnapshotTemplatesResponse):void} cb
     * @public
     */
    DescribeLiveSnapshotTemplates(req, cb) {
        let resp = new DescribeLiveSnapshotTemplatesResponse();
        this.request("DescribeLiveSnapshotTemplates", req, resp, cb);
    }

    /**
     * - 使用前提
  1. 录制文件存放于点播平台，所以用户如需使用录制功能，需首先自行开通点播服务。
  2. 录制文件存放后相关费用（含存储以及下行播放流量）按照点播平台计费方式收取，具体请参考 [对应文档](https://cloud.tencent.com/document/product/266/2838)。

- 模式说明
  该接口支持两种录制模式：
  1. 定时录制模式【默认模式】。
    需要传入开始时间与结束时间，录制任务根据时间自动开始与结束。
  2. 实时视频录制模式。
    忽略传入的开始时间，在录制任务创建后立即开始录制，录制时长支持最大为30分钟，如果传入的结束时间与当前时间差大于30分钟，则按30分钟计算，实时视频录制主要用于录制精彩视频场景，时长建议控制在5分钟以内。

- 注意事项
  1. 调用接口超时设置应大于3秒，小于3秒重试以及频繁调用都有可能产生重复录制任务。
     * @param {CreateLiveRecordRequest} req
     * @param {function(string, CreateLiveRecordResponse):void} cb
     * @public
     */
    CreateLiveRecord(req, cb) {
        let resp = new CreateLiveRecordResponse();
        this.request("CreateLiveRecord", req, resp, cb);
    }

    /**
     * 更新水印
     * @param {UpdateLiveWatermarkRequest} req
     * @param {function(string, UpdateLiveWatermarkResponse):void} cb
     * @public
     */
    UpdateLiveWatermark(req, cb) {
        let resp = new UpdateLiveWatermarkResponse();
        this.request("UpdateLiveWatermark", req, resp, cb);
    }

    /**
     * 创建回调模板，成功返回模板id后，需要调用[CreateLiveCallbackRule](/document/product/267/32638)接口将模板id绑定到域名/路径使用。
<br>回调协议相关文档：[事件消息通知](/document/product/267/32744)。
     * @param {CreateLiveCallbackTemplateRequest} req
     * @param {function(string, CreateLiveCallbackTemplateResponse):void} cb
     * @public
     */
    CreateLiveCallbackTemplate(req, cb) {
        let resp = new CreateLiveCallbackTemplateResponse();
        this.request("CreateLiveCallbackTemplate", req, resp, cb);
    }

    /**
     * 删除水印
     * @param {DeleteLiveWatermarkRequest} req
     * @param {function(string, DeleteLiveWatermarkResponse):void} cb
     * @public
     */
    DeleteLiveWatermark(req, cb) {
        let resp = new DeleteLiveWatermarkResponse();
        this.request("DeleteLiveWatermark", req, resp, cb);
    }

    /**
     * 修改录制模板配置
     * @param {ModifyLiveRecordTemplateRequest} req
     * @param {function(string, ModifyLiveRecordTemplateResponse):void} cb
     * @public
     */
    ModifyLiveRecordTemplate(req, cb) {
        let resp = new ModifyLiveRecordTemplateResponse();
        this.request("ModifyLiveRecordTemplate", req, resp, cb);
    }

    /**
     * 修改回调模板
     * @param {ModifyLiveCallbackTemplateRequest} req
     * @param {function(string, ModifyLiveCallbackTemplateResponse):void} cb
     * @public
     */
    ModifyLiveCallbackTemplate(req, cb) {
        let resp = new ModifyLiveCallbackTemplateResponse();
        this.request("ModifyLiveCallbackTemplate", req, resp, cb);
    }

    /**
     * 创建水印规则，需要先调用[AddLiveWatermark](/document/product/267/30154)接口添加水印，将返回的水印id绑定到流使用。
     * @param {CreateLiveWatermarkRuleRequest} req
     * @param {function(string, CreateLiveWatermarkRuleResponse):void} cb
     * @public
     */
    CreateLiveWatermarkRule(req, cb) {
        let resp = new CreateLiveWatermarkRuleResponse();
        this.request("CreateLiveWatermarkRule", req, resp, cb);
    }

    /**
     * 修改直播推流鉴权key
     * @param {ModifyLivePushAuthKeyRequest} req
     * @param {function(string, ModifyLivePushAuthKeyResponse):void} cb
     * @public
     */
    ModifyLivePushAuthKey(req, cb) {
        let resp = new ModifyLivePushAuthKeyResponse();
        this.request("ModifyLivePushAuthKey", req, resp, cb);
    }

    /**
     * 更新拉流配置
     * @param {ModifyPullStreamConfigRequest} req
     * @param {function(string, ModifyPullStreamConfigResponse):void} cb
     * @public
     */
    ModifyPullStreamConfig(req, cb) {
        let resp = new ModifyPullStreamConfigResponse();
        this.request("ModifyPullStreamConfig", req, resp, cb);
    }

    /**
     * 查询推断流事件
     * @param {DescribeLiveStreamEventListRequest} req
     * @param {function(string, DescribeLiveStreamEventListResponse):void} cb
     * @public
     */
    DescribeLiveStreamEventList(req, cb) {
        let resp = new DescribeLiveStreamEventListResponse();
        this.request("DescribeLiveStreamEventList", req, resp, cb);
    }

    /**
     * 获取单个转码模板
     * @param {DescribeLiveTranscodeTemplateRequest} req
     * @param {function(string, DescribeLiveTranscodeTemplateResponse):void} cb
     * @public
     */
    DescribeLiveTranscodeTemplate(req, cb) {
        let resp = new DescribeLiveTranscodeTemplateResponse();
        this.request("DescribeLiveTranscodeTemplate", req, resp, cb);
    }

    /**
     * 查询拉流配置
     * @param {DescribePullStreamConfigsRequest} req
     * @param {function(string, DescribePullStreamConfigsResponse):void} cb
     * @public
     */
    DescribePullStreamConfigs(req, cb) {
        let resp = new DescribePullStreamConfigsResponse();
        this.request("DescribePullStreamConfigs", req, resp, cb);
    }

    /**
     * 用于删除录制任务
     * @param {DeleteLiveRecordRequest} req
     * @param {function(string, DeleteLiveRecordResponse):void} cb
     * @public
     */
    DeleteLiveRecord(req, cb) {
        let resp = new DeleteLiveRecordResponse();
        this.request("DeleteLiveRecord", req, resp, cb);
    }

    /**
     * 修改证书
     * @param {ModifyLiveCertRequest} req
     * @param {function(string, ModifyLiveCertResponse):void} cb
     * @public
     */
    ModifyLiveCert(req, cb) {
        let resp = new ModifyLiveCertResponse();
        this.request("ModifyLiveCert", req, resp, cb);
    }

    /**
     * 对流设置延播时间
注意：如果在推流前设置延播，需要提前5分钟设置。

     * @param {AddDelayLiveStreamRequest} req
     * @param {function(string, AddDelayLiveStreamResponse):void} cb
     * @public
     */
    AddDelayLiveStream(req, cb) {
        let resp = new AddDelayLiveStreamResponse();
        this.request("AddDelayLiveStream", req, resp, cb);
    }

    /**
     * 创建截图规则，需要先调用[CreateLiveSnapshotTemplate](/document/product/267/32624)接口创建截图模板，然后将返回的模板id绑定到流进行使用。
<br>截图相关文档：[直播截图](/document/product/267/32737)。
     * @param {CreateLiveSnapshotRuleRequest} req
     * @param {function(string, CreateLiveSnapshotRuleResponse):void} cb
     * @public
     */
    CreateLiveSnapshotRule(req, cb) {
        let resp = new CreateLiveSnapshotRuleResponse();
        this.request("CreateLiveSnapshotRule", req, resp, cb);
    }

    /**
     * 修改截图模板配置
     * @param {ModifyLiveSnapshotTemplateRequest} req
     * @param {function(string, ModifyLiveSnapshotTemplateResponse):void} cb
     * @public
     */
    ModifyLiveSnapshotTemplate(req, cb) {
        let resp = new ModifyLiveSnapshotTemplateResponse();
        this.request("ModifyLiveSnapshotTemplate", req, resp, cb);
    }

    /**
     * 获取截图规则列表
     * @param {DescribeLiveSnapshotRulesRequest} req
     * @param {function(string, DescribeLiveSnapshotRulesResponse):void} cb
     * @public
     */
    DescribeLiveSnapshotRules(req, cb) {
        let resp = new DescribeLiveSnapshotRulesResponse();
        this.request("DescribeLiveSnapshotRules", req, resp, cb);
    }

    /**
     * 修改转码模板配置
     * @param {ModifyLiveTranscodeTemplateRequest} req
     * @param {function(string, ModifyLiveTranscodeTemplateResponse):void} cb
     * @public
     */
    ModifyLiveTranscodeTemplate(req, cb) {
        let resp = new ModifyLiveTranscodeTemplateResponse();
        this.request("ModifyLiveTranscodeTemplate", req, resp, cb);
    }

    /**
     * 删除转码规则
     * @param {DeleteLiveTranscodeRuleRequest} req
     * @param {function(string, DeleteLiveTranscodeRuleResponse):void} cb
     * @public
     */
    DeleteLiveTranscodeRule(req, cb) {
        let resp = new DeleteLiveTranscodeRuleResponse();
        this.request("DeleteLiveTranscodeRule", req, resp, cb);
    }

    /**
     * 删除截图规则
     * @param {DeleteLiveSnapshotRuleRequest} req
     * @param {function(string, DeleteLiveSnapshotRuleResponse):void} cb
     * @public
     */
    DeleteLiveSnapshotRule(req, cb) {
        let resp = new DeleteLiveSnapshotRuleResponse();
        this.request("DeleteLiveSnapshotRule", req, resp, cb);
    }

    /**
     * 查询在线推流信息列表
     * @param {DescribeLiveStreamOnlineInfoRequest} req
     * @param {function(string, DescribeLiveStreamOnlineInfoResponse):void} cb
     * @public
     */
    DescribeLiveStreamOnlineInfo(req, cb) {
        let resp = new DescribeLiveStreamOnlineInfoResponse();
        this.request("DescribeLiveStreamOnlineInfo", req, resp, cb);
    }

    /**
     * 查询水印列表
     * @param {DescribeLiveWatermarksRequest} req
     * @param {function(string, DescribeLiveWatermarksResponse):void} cb
     * @public
     */
    DescribeLiveWatermarks(req, cb) {
        let resp = new DescribeLiveWatermarksResponse();
        this.request("DescribeLiveWatermarks", req, resp, cb);
    }

    /**
     * 恢复某条流的推送。
     * @param {ResumeLiveStreamRequest} req
     * @param {function(string, ResumeLiveStreamResponse):void} cb
     * @public
     */
    ResumeLiveStream(req, cb) {
        let resp = new ResumeLiveStreamResponse();
        this.request("ResumeLiveStream", req, resp, cb);
    }

    /**
     * 获取录制规则列表
     * @param {DescribeLiveRecordRulesRequest} req
     * @param {function(string, DescribeLiveRecordRulesResponse):void} cb
     * @public
     */
    DescribeLiveRecordRules(req, cb) {
        let resp = new DescribeLiveRecordRulesResponse();
        this.request("DescribeLiveRecordRules", req, resp, cb);
    }

    /**
     * 删除转码模板
     * @param {DeleteLiveTranscodeTemplateRequest} req
     * @param {function(string, DeleteLiveTranscodeTemplateResponse):void} cb
     * @public
     */
    DeleteLiveTranscodeTemplate(req, cb) {
        let resp = new DeleteLiveTranscodeTemplateResponse();
        this.request("DeleteLiveTranscodeTemplate", req, resp, cb);
    }

    /**
     * 查询播放鉴权key
     * @param {DescribeLivePlayAuthKeyRequest} req
     * @param {function(string, DescribeLivePlayAuthKeyResponse):void} cb
     * @public
     */
    DescribeLivePlayAuthKey(req, cb) {
        let resp = new DescribeLivePlayAuthKeyResponse();
        this.request("DescribeLivePlayAuthKey", req, resp, cb);
    }

    /**
     * 获取禁推流列表
     * @param {DescribeLiveForbidStreamListRequest} req
     * @param {function(string, DescribeLiveForbidStreamListResponse):void} cb
     * @public
     */
    DescribeLiveForbidStreamList(req, cb) {
        let resp = new DescribeLiveForbidStreamListResponse();
        this.request("DescribeLiveForbidStreamList", req, resp, cb);
    }

    /**
     * 删除录制规则
     * @param {DeleteLiveRecordRuleRequest} req
     * @param {function(string, DeleteLiveRecordRuleResponse):void} cb
     * @public
     */
    DeleteLiveRecordRule(req, cb) {
        let resp = new DeleteLiveRecordRuleResponse();
        this.request("DeleteLiveRecordRule", req, resp, cb);
    }

    /**
     * 创建回调规则，需要先调用[CreateLiveCallbackTemplate](/document/product/267/32637)接口创建回调模板，将返回的模板id绑定到域名/路径进行使用。
<br>回调协议相关文档：[事件消息通知](/document/product/267/32744)。
     * @param {CreateLiveCallbackRuleRequest} req
     * @param {function(string, CreateLiveCallbackRuleResponse):void} cb
     * @public
     */
    CreateLiveCallbackRule(req, cb) {
        let resp = new CreateLiveCallbackRuleResponse();
        this.request("CreateLiveCallbackRule", req, resp, cb);
    }

    /**
     * 删除录制模板
     * @param {DeleteLiveRecordTemplateRequest} req
     * @param {function(string, DeleteLiveRecordTemplateResponse):void} cb
     * @public
     */
    DeleteLiveRecordTemplate(req, cb) {
        let resp = new DeleteLiveRecordTemplateResponse();
        this.request("DeleteLiveRecordTemplate", req, resp, cb);
    }

    /**
     * 域名绑定证书
     * @param {BindLiveDomainCertRequest} req
     * @param {function(string, BindLiveDomainCertResponse):void} cb
     * @public
     */
    BindLiveDomainCert(req, cb) {
        let resp = new BindLiveDomainCertResponse();
        this.request("BindLiveDomainCert", req, resp, cb);
    }

    /**
     * 获取回调规则列表
     * @param {DescribeLiveCallbackRulesRequest} req
     * @param {function(string, DescribeLiveCallbackRulesResponse):void} cb
     * @public
     */
    DescribeLiveCallbackRules(req, cb) {
        let resp = new DescribeLiveCallbackRulesResponse();
        this.request("DescribeLiveCallbackRules", req, resp, cb);
    }

    /**
     * 说明：录制后的文件存放于点播平台。用户如需使用录制功能，需首先自行开通点播账号并确保账号可用。录制文件存放后，相关费用（含存储以及下行播放流量）按照点播平台计费方式收取，请参考对应文档。
     * @param {StopLiveRecordRequest} req
     * @param {function(string, StopLiveRecordResponse):void} cb
     * @public
     */
    StopLiveRecord(req, cb) {
        let resp = new StopLiveRecordResponse();
        this.request("StopLiveRecord", req, resp, cb);
    }

    /**
     * 获取录制模板列表
     * @param {DescribeLiveRecordTemplatesRequest} req
     * @param {function(string, DescribeLiveRecordTemplatesResponse):void} cb
     * @public
     */
    DescribeLiveRecordTemplates(req, cb) {
        let resp = new DescribeLiveRecordTemplatesResponse();
        this.request("DescribeLiveRecordTemplates", req, resp, cb);
    }

    /**
     * 返回已经推过流的流列表
     * @param {DescribeLiveStreamPublishedListRequest} req
     * @param {function(string, DescribeLiveStreamPublishedListResponse):void} cb
     * @public
     */
    DescribeLiveStreamPublishedList(req, cb) {
        let resp = new DescribeLiveStreamPublishedListResponse();
        this.request("DescribeLiveStreamPublishedList", req, resp, cb);
    }

    /**
     * 修改播放鉴权key
     * @param {ModifyLivePlayAuthKeyRequest} req
     * @param {function(string, ModifyLivePlayAuthKeyResponse):void} cb
     * @public
     */
    ModifyLivePlayAuthKey(req, cb) {
        let resp = new ModifyLivePlayAuthKeyResponse();
        this.request("ModifyLivePlayAuthKey", req, resp, cb);
    }

    /**
     * 修改域名和证书绑定信息
     * @param {ModifyLiveDomainCertRequest} req
     * @param {function(string, ModifyLiveDomainCertResponse):void} cb
     * @public
     */
    ModifyLiveDomainCert(req, cb) {
        let resp = new ModifyLiveDomainCertResponse();
        this.request("ModifyLiveDomainCert", req, resp, cb);
    }

    /**
     * 设置水印是否启用
     * @param {SetLiveWatermarkStatusRequest} req
     * @param {function(string, SetLiveWatermarkStatusResponse):void} cb
     * @public
     */
    SetLiveWatermarkStatus(req, cb) {
        let resp = new SetLiveWatermarkStatusResponse();
        this.request("SetLiveWatermarkStatus", req, resp, cb);
    }

    /**
     * 恢复延迟播放设置
     * @param {ResumeDelayLiveStreamRequest} req
     * @param {function(string, ResumeDelayLiveStreamResponse):void} cb
     * @public
     */
    ResumeDelayLiveStream(req, cb) {
        let resp = new ResumeDelayLiveStreamResponse();
        this.request("ResumeDelayLiveStream", req, resp, cb);
    }

    /**
     * 获取域名证书信息
     * @param {DescribeLiveDomainCertRequest} req
     * @param {function(string, DescribeLiveDomainCertResponse):void} cb
     * @public
     */
    DescribeLiveDomainCert(req, cb) {
        let resp = new DescribeLiveDomainCertResponse();
        this.request("DescribeLiveDomainCert", req, resp, cb);
    }

    /**
     * 创建转码模板，成功返回模板id后，需要调用[CreateLiveTranscodeRule](/document/product/267/32647)接口，将返回的模板id绑定到流使用。
<br>转码相关文档：[直播转封装及转码](/document/product/267/32736)。
     * @param {CreateLiveTranscodeTemplateRequest} req
     * @param {function(string, CreateLiveTranscodeTemplateResponse):void} cb
     * @public
     */
    CreateLiveTranscodeTemplate(req, cb) {
        let resp = new CreateLiveTranscodeTemplateResponse();
        this.request("CreateLiveTranscodeTemplate", req, resp, cb);
    }

    /**
     * 删除域名对应的证书
     * @param {DeleteLiveCertRequest} req
     * @param {function(string, DeleteLiveCertResponse):void} cb
     * @public
     */
    DeleteLiveCert(req, cb) {
        let resp = new DeleteLiveCertResponse();
        this.request("DeleteLiveCert", req, resp, cb);
    }

    /**
     * 获取证书信息列表
     * @param {DescribeLiveCertsRequest} req
     * @param {function(string, DescribeLiveCertsResponse):void} cb
     * @public
     */
    DescribeLiveCerts(req, cb) {
        let resp = new DescribeLiveCertsResponse();
        this.request("DescribeLiveCerts", req, resp, cb);
    }

    /**
     * 添加水印，成功返回水印id后，需要调用[CreateLiveWatermarkRule](/document/product/267/32629)接口将水印id绑定到流使用。
     * @param {AddLiveWatermarkRequest} req
     * @param {function(string, AddLiveWatermarkResponse):void} cb
     * @public
     */
    AddLiveWatermark(req, cb) {
        let resp = new AddLiveWatermarkResponse();
        this.request("AddLiveWatermark", req, resp, cb);
    }

    /**
     * 解绑域名证书
     * @param {UnBindLiveDomainCertRequest} req
     * @param {function(string, UnBindLiveDomainCertResponse):void} cb
     * @public
     */
    UnBindLiveDomainCert(req, cb) {
        let resp = new UnBindLiveDomainCertResponse();
        this.request("UnBindLiveDomainCert", req, resp, cb);
    }

    /**
     * 获取水印规则列表
     * @param {DescribeLiveWatermarkRulesRequest} req
     * @param {function(string, DescribeLiveWatermarkRulesResponse):void} cb
     * @public
     */
    DescribeLiveWatermarkRules(req, cb) {
        let resp = new DescribeLiveWatermarkRulesResponse();
        this.request("DescribeLiveWatermarkRules", req, resp, cb);
    }

    /**
     * 返回直播中、无推流或者禁播等状态
     * @param {DescribeLiveStreamStateRequest} req
     * @param {function(string, DescribeLiveStreamStateResponse):void} cb
     * @public
     */
    DescribeLiveStreamState(req, cb) {
        let resp = new DescribeLiveStreamStateResponse();
        this.request("DescribeLiveStreamState", req, resp, cb);
    }

    /**
     * 删除水印规则
     * @param {DeleteLiveWatermarkRuleRequest} req
     * @param {function(string, DeleteLiveWatermarkRuleResponse):void} cb
     * @public
     */
    DeleteLiveWatermarkRule(req, cb) {
        let resp = new DeleteLiveWatermarkRuleResponse();
        this.request("DeleteLiveWatermarkRule", req, resp, cb);
    }

    /**
     * 获取单个截图模板
     * @param {DescribeLiveSnapshotTemplateRequest} req
     * @param {function(string, DescribeLiveSnapshotTemplateResponse):void} cb
     * @public
     */
    DescribeLiveSnapshotTemplate(req, cb) {
        let resp = new DescribeLiveSnapshotTemplateResponse();
        this.request("DescribeLiveSnapshotTemplate", req, resp, cb);
    }

    /**
     * 禁止某条流的推送，可以预设某个时刻将流恢复。
     * @param {ForbidLiveStreamRequest} req
     * @param {function(string, ForbidLiveStreamResponse):void} cb
     * @public
     */
    ForbidLiveStream(req, cb) {
        let resp = new ForbidLiveStreamResponse();
        this.request("ForbidLiveStream", req, resp, cb);
    }

    /**
     * 修改直播拉流配置状态
     * @param {ModifyPullStreamStatusRequest} req
     * @param {function(string, ModifyPullStreamStatusResponse):void} cb
     * @public
     */
    ModifyPullStreamStatus(req, cb) {
        let resp = new ModifyPullStreamStatusResponse();
        this.request("ModifyPullStreamStatus", req, resp, cb);
    }

    /**
     * 删除回调规则
     * @param {DeleteLiveCallbackRuleRequest} req
     * @param {function(string, DeleteLiveCallbackRuleResponse):void} cb
     * @public
     */
    DeleteLiveCallbackRule(req, cb) {
        let resp = new DeleteLiveCallbackRuleResponse();
        this.request("DeleteLiveCallbackRule", req, resp, cb);
    }

    /**
     * 获取证书信息
     * @param {DescribeLiveCertRequest} req
     * @param {function(string, DescribeLiveCertResponse):void} cb
     * @public
     */
    DescribeLiveCert(req, cb) {
        let resp = new DescribeLiveCertResponse();
        this.request("DescribeLiveCert", req, resp, cb);
    }

    /**
     * 获取单个回调模板
     * @param {DescribeLiveCallbackTemplateRequest} req
     * @param {function(string, DescribeLiveCallbackTemplateResponse):void} cb
     * @public
     */
    DescribeLiveCallbackTemplate(req, cb) {
        let resp = new DescribeLiveCallbackTemplateResponse();
        this.request("DescribeLiveCallbackTemplate", req, resp, cb);
    }

    /**
     * 创建截图模板，成功返回模板id后，需要调用[CreateLiveSnapshotRule](/document/product/267/32625)接口，将模板id绑定到流使用。
<br>截图相关文档：[直播截图](/document/product/267/32737)。
     * @param {CreateLiveSnapshotTemplateRequest} req
     * @param {function(string, CreateLiveSnapshotTemplateResponse):void} cb
     * @public
     */
    CreateLiveSnapshotTemplate(req, cb) {
        let resp = new CreateLiveSnapshotTemplateResponse();
        this.request("CreateLiveSnapshotTemplate", req, resp, cb);
    }

    /**
     * 返回正在直播中的流列表
     * @param {DescribeLiveStreamOnlineListRequest} req
     * @param {function(string, DescribeLiveStreamOnlineListResponse):void} cb
     * @public
     */
    DescribeLiveStreamOnlineList(req, cb) {
        let resp = new DescribeLiveStreamOnlineListResponse();
        this.request("DescribeLiveStreamOnlineList", req, resp, cb);
    }

    /**
     * 添加拉流配置，目前限制添加10条任务。
     * @param {CreatePullStreamConfigRequest} req
     * @param {function(string, CreatePullStreamConfigResponse):void} cb
     * @public
     */
    CreatePullStreamConfig(req, cb) {
        let resp = new CreatePullStreamConfigResponse();
        this.request("CreatePullStreamConfig", req, resp, cb);
    }

    /**
     * 删除回调模板
     * @param {DeleteLiveCallbackTemplateRequest} req
     * @param {function(string, DeleteLiveCallbackTemplateResponse):void} cb
     * @public
     */
    DeleteLiveCallbackTemplate(req, cb) {
        let resp = new DeleteLiveCallbackTemplateResponse();
        this.request("DeleteLiveCallbackTemplate", req, resp, cb);
    }

    /**
     * 创建录制规则，需要先调用[CreateLiveRecordTemplate](/document/product/267/32614)接口创建录制模板，将返回的模板id绑定到流使用。
<br>录制相关文档：[直播录制](/document/product/267/32739)。
     * @param {CreateLiveRecordRuleRequest} req
     * @param {function(string, CreateLiveRecordRuleResponse):void} cb
     * @public
     */
    CreateLiveRecordRule(req, cb) {
        let resp = new CreateLiveRecordRuleResponse();
        this.request("CreateLiveRecordRule", req, resp, cb);
    }

    /**
     * 获取单个水印信息
     * @param {DescribeLiveWatermarkRequest} req
     * @param {function(string, DescribeLiveWatermarkResponse):void} cb
     * @public
     */
    DescribeLiveWatermark(req, cb) {
        let resp = new DescribeLiveWatermarkResponse();
        this.request("DescribeLiveWatermark", req, resp, cb);
    }

    /**
     * 获取转码模板列表
     * @param {DescribeLiveTranscodeTemplatesRequest} req
     * @param {function(string, DescribeLiveTranscodeTemplatesResponse):void} cb
     * @public
     */
    DescribeLiveTranscodeTemplates(req, cb) {
        let resp = new DescribeLiveTranscodeTemplatesResponse();
        this.request("DescribeLiveTranscodeTemplates", req, resp, cb);
    }

    /**
     * 添加证书
     * @param {CreateLiveCertRequest} req
     * @param {function(string, CreateLiveCertResponse):void} cb
     * @public
     */
    CreateLiveCert(req, cb) {
        let resp = new CreateLiveCertResponse();
        this.request("CreateLiveCert", req, resp, cb);
    }

    /**
     * 查询直播推流鉴权key
     * @param {DescribeLivePushAuthKeyRequest} req
     * @param {function(string, DescribeLivePushAuthKeyResponse):void} cb
     * @public
     */
    DescribeLivePushAuthKey(req, cb) {
        let resp = new DescribeLivePushAuthKeyResponse();
        this.request("DescribeLivePushAuthKey", req, resp, cb);
    }

    /**
     * 删除直播拉流配置
     * @param {DeletePullStreamConfigRequest} req
     * @param {function(string, DeletePullStreamConfigResponse):void} cb
     * @public
     */
    DeletePullStreamConfig(req, cb) {
        let resp = new DeletePullStreamConfigResponse();
        this.request("DeletePullStreamConfig", req, resp, cb);
    }

    /**
     * 获取转码规则列表
     * @param {DescribeLiveTranscodeRulesRequest} req
     * @param {function(string, DescribeLiveTranscodeRulesResponse):void} cb
     * @public
     */
    DescribeLiveTranscodeRules(req, cb) {
        let resp = new DescribeLiveTranscodeRulesResponse();
        this.request("DescribeLiveTranscodeRules", req, resp, cb);
    }

    /**
     * 创建录制模板，成功返回模板id后，需要调用[CreateLiveRecordRule](/document/product/267/32615)接口，将模板id绑定到流进行使用。
<br>录制相关文档：[直播录制](/document/product/267/32739)。
     * @param {CreateLiveRecordTemplateRequest} req
     * @param {function(string, CreateLiveRecordTemplateResponse):void} cb
     * @public
     */
    CreateLiveRecordTemplate(req, cb) {
        let resp = new CreateLiveRecordTemplateResponse();
        this.request("CreateLiveRecordTemplate", req, resp, cb);
    }

    /**
     * 获取单个录制模板
     * @param {DescribeLiveRecordTemplateRequest} req
     * @param {function(string, DescribeLiveRecordTemplateResponse):void} cb
     * @public
     */
    DescribeLiveRecordTemplate(req, cb) {
        let resp = new DescribeLiveRecordTemplateResponse();
        this.request("DescribeLiveRecordTemplate", req, resp, cb);
    }

    /**
     * 删除截图模板
     * @param {DeleteLiveSnapshotTemplateRequest} req
     * @param {function(string, DeleteLiveSnapshotTemplateResponse):void} cb
     * @public
     */
    DeleteLiveSnapshotTemplate(req, cb) {
        let resp = new DeleteLiveSnapshotTemplateResponse();
        this.request("DeleteLiveSnapshotTemplate", req, resp, cb);
    }


}
module.exports = LiveClient;
