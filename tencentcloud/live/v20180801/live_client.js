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
const BillDataInfo = models.BillDataInfo;
const EnableLiveDomainResponse = models.EnableLiveDomainResponse;
const DescribeUploadStreamNumsResponse = models.DescribeUploadStreamNumsResponse;
const HlsSpecialParam = models.HlsSpecialParam;
const TranscodeTotalInfo = models.TranscodeTotalInfo;
const StopRecordTaskResponse = models.StopRecordTaskResponse;
const DescribeDeliverBandwidthListResponse = models.DescribeDeliverBandwidthListResponse;
const DeleteLiveRecordRuleRequest = models.DeleteLiveRecordRuleRequest;
const ResumeLiveStreamRequest = models.ResumeLiveStreamRequest;
const DeleteLiveTranscodeTemplateResponse = models.DeleteLiveTranscodeTemplateResponse;
const FlvSpecialParam = models.FlvSpecialParam;
const DescribeBillBandwidthAndFluxListResponse = models.DescribeBillBandwidthAndFluxListResponse;
const CreateScreenshotTaskResponse = models.CreateScreenshotTaskResponse;
const DeleteLiveCallbackRuleResponse = models.DeleteLiveCallbackRuleResponse;
const ResumeDelayLiveStreamRequest = models.ResumeDelayLiveStreamRequest;
const DescribeLiveStreamPublishedListRequest = models.DescribeLiveStreamPublishedListRequest;
const DescribeLiveCallbackTemplateResponse = models.DescribeLiveCallbackTemplateResponse;
const CreateLivePullStreamTaskRequest = models.CreateLivePullStreamTaskRequest;
const DeleteLiveSnapshotTemplateRequest = models.DeleteLiveSnapshotTemplateRequest;
const DescribeGroupProIspPlayInfoListResponse = models.DescribeGroupProIspPlayInfoListResponse;
const PushAuthKeyInfo = models.PushAuthKeyInfo;
const DomainInfoList = models.DomainInfoList;
const PlayCodeTotalInfo = models.PlayCodeTotalInfo;
const DeleteLiveRecordTemplateRequest = models.DeleteLiveRecordTemplateRequest;
const DeleteLiveCallbackTemplateResponse = models.DeleteLiveCallbackTemplateResponse;
const CreateScreenshotTaskRequest = models.CreateScreenshotTaskRequest;
const PushQualityData = models.PushQualityData;
const UnBindLiveDomainCertResponse = models.UnBindLiveDomainCertResponse;
const ModifyLivePlayAuthKeyRequest = models.ModifyLivePlayAuthKeyRequest;
const DescribeLiveDelayInfoListRequest = models.DescribeLiveDelayInfoListRequest;
const HttpCodeValue = models.HttpCodeValue;
const DomainCertInfo = models.DomainCertInfo;
const CreateLiveTimeShiftRuleResponse = models.CreateLiveTimeShiftRuleResponse;
const DeleteLiveTranscodeRuleResponse = models.DeleteLiveTranscodeRuleResponse;
const ConcurrentRecordStreamNum = models.ConcurrentRecordStreamNum;
const DescribeStreamPlayInfoListResponse = models.DescribeStreamPlayInfoListResponse;
const DescribeScreenShotSheetNumListResponse = models.DescribeScreenShotSheetNumListResponse;
const ForbidLiveStreamResponse = models.ForbidLiveStreamResponse;
const DescribeLiveCertRequest = models.DescribeLiveCertRequest;
const CreateLivePullStreamTaskResponse = models.CreateLivePullStreamTaskResponse;
const ModifyLivePushAuthKeyRequest = models.ModifyLivePushAuthKeyRequest;
const DeleteLiveSnapshotTemplateResponse = models.DeleteLiveSnapshotTemplateResponse;
const DescribeLiveStreamStateRequest = models.DescribeLiveStreamStateRequest;
const DescribeLivePlayAuthKeyResponse = models.DescribeLivePlayAuthKeyResponse;
const DescribeLiveCallbackTemplatesRequest = models.DescribeLiveCallbackTemplatesRequest;
const DomainInfo = models.DomainInfo;
const DescribeLiveTranscodeRulesRequest = models.DescribeLiveTranscodeRulesRequest;
const DeleteLiveSnapshotRuleRequest = models.DeleteLiveSnapshotRuleRequest;
const DescribePlayErrorCodeDetailInfoListRequest = models.DescribePlayErrorCodeDetailInfoListRequest;
const DeleteLivePullStreamTaskRequest = models.DeleteLivePullStreamTaskRequest;
const CreateLiveTimeShiftRuleRequest = models.CreateLiveTimeShiftRuleRequest;
const CommonMixOutputParams = models.CommonMixOutputParams;
const DescribePushBandwidthAndFluxListResponse = models.DescribePushBandwidthAndFluxListResponse;
const DescribeUploadStreamNumsRequest = models.DescribeUploadStreamNumsRequest;
const DescribeLiveSnapshotRulesResponse = models.DescribeLiveSnapshotRulesResponse;
const DescribeLiveTranscodeDetailInfoResponse = models.DescribeLiveTranscodeDetailInfoResponse;
const DescribeLiveDomainRequest = models.DescribeLiveDomainRequest;
const AuthenticateDomainOwnerResponse = models.AuthenticateDomainOwnerResponse;
const DeleteLiveTranscodeRuleRequest = models.DeleteLiveTranscodeRuleRequest;
const DescribePushBandwidthAndFluxListRequest = models.DescribePushBandwidthAndFluxListRequest;
const CreateLiveRecordRuleRequest = models.CreateLiveRecordRuleRequest;
const DescribeLiveSnapshotTemplatesRequest = models.DescribeLiveSnapshotTemplatesRequest;
const AddLiveWatermarkResponse = models.AddLiveWatermarkResponse;
const DescribeLiveStreamPushInfoListResponse = models.DescribeLiveStreamPushInfoListResponse;
const DescribeLiveDomainCertResponse = models.DescribeLiveDomainCertResponse;
const DescribeLiveRecordTemplateRequest = models.DescribeLiveRecordTemplateRequest;
const MonitorStreamPlayInfo = models.MonitorStreamPlayInfo;
const StreamOnlineInfo = models.StreamOnlineInfo;
const CreateLiveWatermarkRuleResponse = models.CreateLiveWatermarkRuleResponse;
const ModifyLiveSnapshotTemplateResponse = models.ModifyLiveSnapshotTemplateResponse;
const DeleteScreenshotTaskRequest = models.DeleteScreenshotTaskRequest;
const DescribeProIspPlaySumInfoListRequest = models.DescribeProIspPlaySumInfoListRequest;
const DescribeTimeShiftStreamListRequest = models.DescribeTimeShiftStreamListRequest;
const DescribeDeliverBandwidthListRequest = models.DescribeDeliverBandwidthListRequest;
const DescribeScreenshotTaskResponse = models.DescribeScreenshotTaskResponse;
const AddLiveWatermarkRequest = models.AddLiveWatermarkRequest;
const TranscodeTaskNum = models.TranscodeTaskNum;
const BillCountryInfo = models.BillCountryInfo;
const ModifyLivePlayDomainRequest = models.ModifyLivePlayDomainRequest;
const DeleteLiveRecordTemplateResponse = models.DeleteLiveRecordTemplateResponse;
const DescribeLiveWatermarkRequest = models.DescribeLiveWatermarkRequest;
const LogInfo = models.LogInfo;
const CommonMixLayoutParams = models.CommonMixLayoutParams;
const DescribeLiveDomainCertRequest = models.DescribeLiveDomainCertRequest;
const DescribeLiveStreamEventListRequest = models.DescribeLiveStreamEventListRequest;
const DescribePullStreamConfigsRequest = models.DescribePullStreamConfigsRequest;
const CallBackTemplateInfo = models.CallBackTemplateInfo;
const DescribePlayErrorCodeSumInfoListResponse = models.DescribePlayErrorCodeSumInfoListResponse;
const DescribeLiveTimeShiftTemplatesRequest = models.DescribeLiveTimeShiftTemplatesRequest;
const DeleteLiveRecordResponse = models.DeleteLiveRecordResponse;
const DescribeScreenShotSheetNumListRequest = models.DescribeScreenShotSheetNumListRequest;
const ForbidLiveStreamRequest = models.ForbidLiveStreamRequest;
const DescribeLiveDomainsResponse = models.DescribeLiveDomainsResponse;
const TimeValue = models.TimeValue;
const ModifyLiveTimeShiftTemplateRequest = models.ModifyLiveTimeShiftTemplateRequest;
const ModifyLiveDomainCertBindingsResponse = models.ModifyLiveDomainCertBindingsResponse;
const PullStreamConfig = models.PullStreamConfig;
const CreateLiveRecordResponse = models.CreateLiveRecordResponse;
const RuleInfo = models.RuleInfo;
const UpdateLiveWatermarkResponse = models.UpdateLiveWatermarkResponse;
const ModifyLiveDomainCertBindingsRequest = models.ModifyLiveDomainCertBindingsRequest;
const DescribeRecordTaskRequest = models.DescribeRecordTaskRequest;
const LivePackageInfo = models.LivePackageInfo;
const CreateLiveTranscodeTemplateResponse = models.CreateLiveTranscodeTemplateResponse;
const BillAreaInfo = models.BillAreaInfo;
const TimeShiftTemplate = models.TimeShiftTemplate;
const LiveCertDomainInfo = models.LiveCertDomainInfo;
const DescribeLiveTimeShiftRulesRequest = models.DescribeLiveTimeShiftRulesRequest;
const DescribeVisitTopSumInfoListRequest = models.DescribeVisitTopSumInfoListRequest;
const DayStreamPlayInfo = models.DayStreamPlayInfo;
const ModifyPullStreamStatusResponse = models.ModifyPullStreamStatusResponse;
const DeleteLiveTimeShiftRuleRequest = models.DeleteLiveTimeShiftRuleRequest;
const CancelCommonMixStreamResponse = models.CancelCommonMixStreamResponse;
const DescribeLiveDomainCertBindingsResponse = models.DescribeLiveDomainCertBindingsResponse;
const DescribeConcurrentRecordStreamNumResponse = models.DescribeConcurrentRecordStreamNumResponse;
const DescribeLiveTimeShiftBillInfoListRequest = models.DescribeLiveTimeShiftBillInfoListRequest;
const RecordTask = models.RecordTask;
const DescribeLiveCertsResponse = models.DescribeLiveCertsResponse;
const CommonMixInputParam = models.CommonMixInputParam;
const WatermarkInfo = models.WatermarkInfo;
const DescribeLiveWatermarkRulesResponse = models.DescribeLiveWatermarkRulesResponse;
const DescribeLiveRecordTemplatesResponse = models.DescribeLiveRecordTemplatesResponse;
const DescribeScreenshotTaskRequest = models.DescribeScreenshotTaskRequest;
const PlayDataInfoByStream = models.PlayDataInfoByStream;
const DescribeCallbackRecordsListRequest = models.DescribeCallbackRecordsListRequest;
const DescribeLiveCallbackTemplatesResponse = models.DescribeLiveCallbackTemplatesResponse;
const ModifyLivePlayAuthKeyResponse = models.ModifyLivePlayAuthKeyResponse;
const CreateLiveCallbackTemplateRequest = models.CreateLiveCallbackTemplateRequest;
const CallbackEventInfo = models.CallbackEventInfo;
const DescribeTopClientIpSumInfoListResponse = models.DescribeTopClientIpSumInfoListResponse;
const DropLiveStreamResponse = models.DropLiveStreamResponse;
const DescribeLiveStreamStateResponse = models.DescribeLiveStreamStateResponse;
const ScreenshotTask = models.ScreenshotTask;
const DeletePullStreamConfigResponse = models.DeletePullStreamConfigResponse;
const DeleteLiveWatermarkRuleRequest = models.DeleteLiveWatermarkRuleRequest;
const StreamEventInfo = models.StreamEventInfo;
const DeleteRecordTaskResponse = models.DeleteRecordTaskResponse;
const DescribeLiveWatermarksRequest = models.DescribeLiveWatermarksRequest;
const CreateLiveTranscodeRuleRequest = models.CreateLiveTranscodeRuleRequest;
const DescribeLiveWatermarkRulesRequest = models.DescribeLiveWatermarkRulesRequest;
const DropLiveStreamRequest = models.DropLiveStreamRequest;
const DeleteLiveTimeShiftRuleResponse = models.DeleteLiveTimeShiftRuleResponse;
const PullPushWatermarkInfo = models.PullPushWatermarkInfo;
const UnBindLiveDomainCertRequest = models.UnBindLiveDomainCertRequest;
const DescribeProvinceIspPlayInfoListResponse = models.DescribeProvinceIspPlayInfoListResponse;
const CreateCommonMixStreamRequest = models.CreateCommonMixStreamRequest;
const RefererAuthConfig = models.RefererAuthConfig;
const DescribeTimeShiftRecordDetailRequest = models.DescribeTimeShiftRecordDetailRequest;
const PushDataInfo = models.PushDataInfo;
const AddDelayLiveStreamRequest = models.AddDelayLiveStreamRequest;
const DescribeGroupProIspPlayInfoListRequest = models.DescribeGroupProIspPlayInfoListRequest;
const ModifyPullStreamStatusRequest = models.ModifyPullStreamStatusRequest;
const DescribeStreamDayPlayInfoListRequest = models.DescribeStreamDayPlayInfoListRequest;
const TranscodeDetailInfo = models.TranscodeDetailInfo;
const DescribeLiveSnapshotTemplateResponse = models.DescribeLiveSnapshotTemplateResponse;
const DescribeLiveTranscodeRulesResponse = models.DescribeLiveTranscodeRulesResponse;
const CreateLiveTimeShiftTemplateRequest = models.CreateLiveTimeShiftTemplateRequest;
const DescribeLiveDomainRefererResponse = models.DescribeLiveDomainRefererResponse;
const AddLiveDomainRequest = models.AddLiveDomainRequest;
const StreamName = models.StreamName;
const DescribeLivePackageInfoRequest = models.DescribeLivePackageInfoRequest;
const CreatePullStreamConfigRequest = models.CreatePullStreamConfigRequest;
const DescribeLiveCertsRequest = models.DescribeLiveCertsRequest;
const DeleteLiveTimeShiftTemplateRequest = models.DeleteLiveTimeShiftTemplateRequest;
const ModifyLivePlayDomainResponse = models.ModifyLivePlayDomainResponse;
const CdnPlayStatData = models.CdnPlayStatData;
const AddLiveDomainResponse = models.AddLiveDomainResponse;
const DescribeHttpStatusInfoListRequest = models.DescribeHttpStatusInfoListRequest;
const ModifyPullStreamConfigResponse = models.ModifyPullStreamConfigResponse;
const ModifyLiveCallbackTemplateRequest = models.ModifyLiveCallbackTemplateRequest;
const ProIspPlayCodeDataInfo = models.ProIspPlayCodeDataInfo;
const DescribeProvinceIspPlayInfoListRequest = models.DescribeProvinceIspPlayInfoListRequest;
const DescribeLivePlayAuthKeyRequest = models.DescribeLivePlayAuthKeyRequest;
const DeleteLivePullStreamTaskResponse = models.DeleteLivePullStreamTaskResponse;
const AuthenticateDomainOwnerRequest = models.AuthenticateDomainOwnerRequest;
const DescribeLiveForbidStreamListResponse = models.DescribeLiveForbidStreamListResponse;
const DescribeStreamPushInfoListRequest = models.DescribeStreamPushInfoListRequest;
const DeleteLiveTimeShiftTemplateResponse = models.DeleteLiveTimeShiftTemplateResponse;
const ModifyLivePushAuthKeyResponse = models.ModifyLivePushAuthKeyResponse;
const DescribeLiveWatermarkResponse = models.DescribeLiveWatermarkResponse;
const ResumeLiveStreamResponse = models.ResumeLiveStreamResponse;
const DescribeLiveStreamOnlineListResponse = models.DescribeLiveStreamOnlineListResponse;
const DeletePullStreamConfigRequest = models.DeletePullStreamConfigRequest;
const DescribeTimeShiftStreamListResponse = models.DescribeTimeShiftStreamListResponse;
const ModifyPullStreamConfigRequest = models.ModifyPullStreamConfigRequest;
const ModifyLiveTimeShiftTemplateResponse = models.ModifyLiveTimeShiftTemplateResponse;
const DescribeStreamPushInfoListResponse = models.DescribeStreamPushInfoListResponse;
const DescribeLiveStreamPushInfoListRequest = models.DescribeLiveStreamPushInfoListRequest;
const StopLiveRecordResponse = models.StopLiveRecordResponse;
const DescribeLiveWatermarksResponse = models.DescribeLiveWatermarksResponse;
const TimeShiftBillData = models.TimeShiftBillData;
const DescribeLiveForbidStreamListRequest = models.DescribeLiveForbidStreamListRequest;
const DescribeLiveDomainPlayInfoListRequest = models.DescribeLiveDomainPlayInfoListRequest;
const CreatePullStreamConfigResponse = models.CreatePullStreamConfigResponse;
const DescribeLivePackageInfoResponse = models.DescribeLivePackageInfoResponse;
const DescribeTopClientIpSumInfoListRequest = models.DescribeTopClientIpSumInfoListRequest;
const CreateLiveCallbackRuleRequest = models.CreateLiveCallbackRuleRequest;
const DeleteLiveWatermarkRuleResponse = models.DeleteLiveWatermarkRuleResponse;
const TimeShiftRecord = models.TimeShiftRecord;
const DescribeCallbackRecordsListResponse = models.DescribeCallbackRecordsListResponse;
const PublishTime = models.PublishTime;
const ModifyLiveTranscodeTemplateResponse = models.ModifyLiveTranscodeTemplateResponse;
const ModifyLivePullStreamTaskRequest = models.ModifyLivePullStreamTaskRequest;
const DescribePlayErrorCodeSumInfoListRequest = models.DescribePlayErrorCodeSumInfoListRequest;
const DescribeLiveTranscodeDetailInfoRequest = models.DescribeLiveTranscodeDetailInfoRequest;
const ModifyLiveDomainRefererResponse = models.ModifyLiveDomainRefererResponse;
const DeleteLiveWatermarkRequest = models.DeleteLiveWatermarkRequest;
const DescribeLiveDomainsRequest = models.DescribeLiveDomainsRequest;
const ProIspPlaySumInfo = models.ProIspPlaySumInfo;
const SnapshotTemplateInfo = models.SnapshotTemplateInfo;
const DeleteLiveSnapshotRuleResponse = models.DeleteLiveSnapshotRuleResponse;
const CreateLiveRecordRequest = models.CreateLiveRecordRequest;
const DescribeLiveTimeShiftBillInfoListResponse = models.DescribeLiveTimeShiftBillInfoListResponse;
const BandwidthInfo = models.BandwidthInfo;
const DescribeLogDownloadListResponse = models.DescribeLogDownloadListResponse;
const CancelCommonMixStreamRequest = models.CancelCommonMixStreamRequest;
const RecentPullInfo = models.RecentPullInfo;
const CertInfo = models.CertInfo;
const DescribeRecordTaskResponse = models.DescribeRecordTaskResponse;
const DescribeLiveDelayInfoListResponse = models.DescribeLiveDelayInfoListResponse;
const DeleteLiveTranscodeTemplateRequest = models.DeleteLiveTranscodeTemplateRequest;
const DescribeLiveCallbackRulesRequest = models.DescribeLiveCallbackRulesRequest;
const ClientIpPlaySumInfo = models.ClientIpPlaySumInfo;
const DescribeLiveTranscodeTemplateResponse = models.DescribeLiveTranscodeTemplateResponse;
const CreateLiveSnapshotTemplateResponse = models.CreateLiveSnapshotTemplateResponse;
const DescribeConcurrentRecordStreamNumRequest = models.DescribeConcurrentRecordStreamNumRequest;
const RecordTemplateInfo = models.RecordTemplateInfo;
const DeleteScreenshotTaskResponse = models.DeleteScreenshotTaskResponse;
const ModifyLiveRecordTemplateResponse = models.ModifyLiveRecordTemplateResponse;
const CommonMixControlParams = models.CommonMixControlParams;
const ModifyLiveRecordTemplateRequest = models.ModifyLiveRecordTemplateRequest;
const DescribeTranscodeTaskNumResponse = models.DescribeTranscodeTaskNumResponse;
const DescribeAreaBillBandwidthAndFluxListResponse = models.DescribeAreaBillBandwidthAndFluxListResponse;
const ForbidLiveDomainRequest = models.ForbidLiveDomainRequest;
const DescribeLiveRecordRulesRequest = models.DescribeLiveRecordRulesRequest;
const DescribePlayErrorCodeDetailInfoListResponse = models.DescribePlayErrorCodeDetailInfoListResponse;
const TimeShiftStreamInfo = models.TimeShiftStreamInfo;
const CreateLiveRecordTemplateResponse = models.CreateLiveRecordTemplateResponse;
const GroupProIspDataInfo = models.GroupProIspDataInfo;
const RecordParam = models.RecordParam;
const DomainDetailInfo = models.DomainDetailInfo;
const HttpStatusInfo = models.HttpStatusInfo;
const DeleteLiveRecordRequest = models.DeleteLiveRecordRequest;
const DescribeLiveSnapshotTemplatesResponse = models.DescribeLiveSnapshotTemplatesResponse;
const StopRecordTaskRequest = models.StopRecordTaskRequest;
const DescribeLiveDomainRefererRequest = models.DescribeLiveDomainRefererRequest;
const HttpStatusData = models.HttpStatusData;
const StopScreenshotTaskRequest = models.StopScreenshotTaskRequest;
const HttpCodeInfo = models.HttpCodeInfo;
const DescribeStreamPlayInfoListRequest = models.DescribeStreamPlayInfoListRequest;
const CreateLiveTranscodeTemplateRequest = models.CreateLiveTranscodeTemplateRequest;
const DescribeLiveStreamPublishedListResponse = models.DescribeLiveStreamPublishedListResponse;
const DescribeLiveTimeShiftRulesResponse = models.DescribeLiveTimeShiftRulesResponse;
const DeleteLiveDomainRequest = models.DeleteLiveDomainRequest;
const ForbidLiveDomainResponse = models.ForbidLiveDomainResponse;
const DescribeLiveTimeShiftTemplatesResponse = models.DescribeLiveTimeShiftTemplatesResponse;
const AddDelayLiveStreamResponse = models.AddDelayLiveStreamResponse;
const DescribeLiveTranscodeTemplatesResponse = models.DescribeLiveTranscodeTemplatesResponse;
const DeleteLiveCallbackRuleRequest = models.DeleteLiveCallbackRuleRequest;
const PlayAuthKeyInfo = models.PlayAuthKeyInfo;
const BatchDomainOperateErrors = models.BatchDomainOperateErrors;
const ModifyLiveTranscodeTemplateRequest = models.ModifyLiveTranscodeTemplateRequest;
const ModifyLiveCallbackTemplateResponse = models.ModifyLiveCallbackTemplateResponse;
const EnableLiveDomainRequest = models.EnableLiveDomainRequest;
const DescribeAllStreamPlayInfoListResponse = models.DescribeAllStreamPlayInfoListResponse;
const DescribeLiveTranscodeTotalInfoResponse = models.DescribeLiveTranscodeTotalInfoResponse;
const DescribeLiveSnapshotRulesRequest = models.DescribeLiveSnapshotRulesRequest;
const CreateRecordTaskRequest = models.CreateRecordTaskRequest;
const DescribeLivePullStreamTasksResponse = models.DescribeLivePullStreamTasksResponse;
const CreateLiveTranscodeRuleResponse = models.CreateLiveTranscodeRuleResponse;
const ResumeDelayLiveStreamResponse = models.ResumeDelayLiveStreamResponse;
const CreateLiveCallbackRuleResponse = models.CreateLiveCallbackRuleResponse;
const DescribeLiveRecordTemplateResponse = models.DescribeLiveRecordTemplateResponse;
const DescribeAreaBillBandwidthAndFluxListRequest = models.DescribeAreaBillBandwidthAndFluxListRequest;
const CallBackRuleInfo = models.CallBackRuleInfo;
const PlaySumStatInfo = models.PlaySumStatInfo;
const DescribeLiveTranscodeTemplatesRequest = models.DescribeLiveTranscodeTemplatesRequest;
const DescribeBillBandwidthAndFluxListRequest = models.DescribeBillBandwidthAndFluxListRequest;
const DescribeLiveRecordRulesResponse = models.DescribeLiveRecordRulesResponse;
const CreateLiveSnapshotTemplateRequest = models.CreateLiveSnapshotTemplateRequest;
const DescribeLiveDomainPlayInfoListResponse = models.DescribeLiveDomainPlayInfoListResponse;
const DescribeLivePullStreamTasksRequest = models.DescribeLivePullStreamTasksRequest;
const DescribeLiveStreamOnlineListRequest = models.DescribeLiveStreamOnlineListRequest;
const DeleteLiveCallbackTemplateRequest = models.DeleteLiveCallbackTemplateRequest;
const DescribeLiveSnapshotTemplateRequest = models.DescribeLiveSnapshotTemplateRequest;
const LiveDomainCertBindings = models.LiveDomainCertBindings;
const CreateCommonMixStreamResponse = models.CreateCommonMixStreamResponse;
const ModifyLiveDomainRefererRequest = models.ModifyLiveDomainRefererRequest;
const CreateLiveCallbackTemplateResponse = models.CreateLiveCallbackTemplateResponse;
const DescribeLivePushAuthKeyRequest = models.DescribeLivePushAuthKeyRequest;
const PlayStatInfo = models.PlayStatInfo;
const DescribeLiveCallbackTemplateRequest = models.DescribeLiveCallbackTemplateRequest;
const ModifyLiveSnapshotTemplateRequest = models.ModifyLiveSnapshotTemplateRequest;
const DescribeLiveCertResponse = models.DescribeLiveCertResponse;
const CreateLiveRecordRuleResponse = models.CreateLiveRecordRuleResponse;
const DescribeLiveTranscodeTemplateRequest = models.DescribeLiveTranscodeTemplateRequest;
const DescribeLogDownloadListRequest = models.DescribeLogDownloadListRequest;
const DeleteLiveWatermarkResponse = models.DeleteLiveWatermarkResponse;
const DescribeLivePushAuthKeyResponse = models.DescribeLivePushAuthKeyResponse;
const CreateLiveWatermarkRuleRequest = models.CreateLiveWatermarkRuleRequest;
const DescribeLiveRecordTemplatesRequest = models.DescribeLiveRecordTemplatesRequest;
const DescribeAllStreamPlayInfoListRequest = models.DescribeAllStreamPlayInfoListRequest;
const DescribeLiveDomainResponse = models.DescribeLiveDomainResponse;
const DeleteRecordTaskRequest = models.DeleteRecordTaskRequest;
const PullStreamTaskInfo = models.PullStreamTaskInfo;
const UpdateLiveWatermarkRequest = models.UpdateLiveWatermarkRequest;
const CreateLiveTimeShiftTemplateResponse = models.CreateLiveTimeShiftTemplateResponse;
const DescribeStreamDayPlayInfoListResponse = models.DescribeStreamDayPlayInfoListResponse;
const StopLiveRecordRequest = models.StopLiveRecordRequest;
const DescribeVisitTopSumInfoListResponse = models.DescribeVisitTopSumInfoListResponse;
const ModifyLivePullStreamTaskResponse = models.ModifyLivePullStreamTaskResponse;
const CreateLiveSnapshotRuleResponse = models.CreateLiveSnapshotRuleResponse;
const DelayInfo = models.DelayInfo;
const DescribeLiveStreamEventListResponse = models.DescribeLiveStreamEventListResponse;
const DescribePullStreamConfigsResponse = models.DescribePullStreamConfigsResponse;
const DescribeTranscodeTaskNumRequest = models.DescribeTranscodeTaskNumRequest;
const DescribeLiveCallbackRulesResponse = models.DescribeLiveCallbackRulesResponse;
const DescribeLiveTranscodeTotalInfoRequest = models.DescribeLiveTranscodeTotalInfoRequest;
const StopScreenshotTaskResponse = models.StopScreenshotTaskResponse;
const CreateRecordTaskResponse = models.CreateRecordTaskResponse;
const ForbidStreamInfo = models.ForbidStreamInfo;
const DescribeTimeShiftRecordDetailResponse = models.DescribeTimeShiftRecordDetailResponse;
const DescribeLiveDomainCertBindingsRequest = models.DescribeLiveDomainCertBindingsRequest;
const DeleteLiveDomainResponse = models.DeleteLiveDomainResponse;
const CommonMixCropParams = models.CommonMixCropParams;
const CreateLiveRecordTemplateRequest = models.CreateLiveRecordTemplateRequest;
const TemplateInfo = models.TemplateInfo;
const DescribeProIspPlaySumInfoListResponse = models.DescribeProIspPlaySumInfoListResponse;
const DescribeHttpStatusInfoListResponse = models.DescribeHttpStatusInfoListResponse;
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
     * 断开推流连接，但可以重新推流。
注：对已经不活跃的流，调用该断流接口时，接口返回成功。
     * @param {DropLiveStreamRequest} req
     * @param {function(string, DropLiveStreamResponse):void} cb
     * @public
     */
    DropLiveStream(req, cb) {
        let resp = new DropLiveStreamResponse();
        this.request("DropLiveStream", req, resp, cb);
    }

    /**
     * 查询水印列表。
     * @param {DescribeLiveWatermarksRequest} req
     * @param {function(string, DescribeLiveWatermarksResponse):void} cb
     * @public
     */
    DescribeLiveWatermarks(req, cb) {
        let resp = new DescribeLiveWatermarksResponse();
        this.request("DescribeLiveWatermarks", req, resp, cb);
    }

    /**
     * 查询并发录制路数，对慢直播和普通直播适用。
     * @param {DescribeConcurrentRecordStreamNumRequest} req
     * @param {function(string, DescribeConcurrentRecordStreamNumResponse):void} cb
     * @public
     */
    DescribeConcurrentRecordStreamNum(req, cb) {
        let resp = new DescribeConcurrentRecordStreamNumResponse();
        this.request("DescribeConcurrentRecordStreamNum", req, resp, cb);
    }

    /**
     * - 使用前提
  1. 录制文件存放于点播平台，所以用户如需使用录制功能，需首先自行开通点播服务。
  2. 录制文件存放后相关费用（含存储以及下行播放流量）按照点播平台计费方式收取，具体请参考 [对应文档](https://cloud.tencent.com/document/product/266/2838)。

- 模式说明
  该接口支持两种录制模式：
  1. 定时录制模式【默认模式】。
    需要传入开始时间与结束时间，录制任务根据起止时间自动开始与结束。在所设置结束时间过期之前（且未调用StopLiveRecord提前终止任务），录制任务都是有效的，期间多次断流然后重推都会启动录制任务。
  2. 实时视频录制模式。
    忽略传入的开始时间，在录制任务创建后立即开始录制，录制时长支持最大为30分钟，如果传入的结束时间与当前时间差大于30分钟，则按30分钟计算，实时视频录制主要用于录制精彩视频场景，时长建议控制在5分钟以内。

- 注意事项
  1. 调用接口超时设置应大于3秒，小于3秒重试以及按不同起止时间调用都有可能产生重复录制任务，进而导致额外录制费用。
  2. 受限于音视频文件格式（FLV/MP4/HLS）对编码类型的支持，视频编码类型支持 H.264，音频编码类型支持 AAC。
  3. 为避免恶意或非主观的频繁 API 请求，对定时录制模式最大创建任务数做了限制：其中，当天可以创建的最大任务数不超过4000（不含已删除的任务）；当前时刻并发运行的任务数不超过400。有超出此限制的需要提工单申请。
  4. 此调用方式暂时不支持海外推流录制。
     * @param {CreateLiveRecordRequest} req
     * @param {function(string, CreateLiveRecordResponse):void} cb
     * @public
     */
    CreateLiveRecord(req, cb) {
        let resp = new CreateLiveRecordResponse();
        this.request("CreateLiveRecord", req, resp, cb);
    }

    /**
     * 更新水印。
     * @param {UpdateLiveWatermarkRequest} req
     * @param {function(string, UpdateLiveWatermarkResponse):void} cb
     * @public
     */
    UpdateLiveWatermark(req, cb) {
        let resp = new UpdateLiveWatermarkResponse();
        this.request("UpdateLiveWatermark", req, resp, cb);
    }

    /**
     * 修改截图模板配置。
     * @param {ModifyLiveSnapshotTemplateRequest} req
     * @param {function(string, ModifyLiveSnapshotTemplateResponse):void} cb
     * @public
     */
    ModifyLiveSnapshotTemplate(req, cb) {
        let resp = new ModifyLiveSnapshotTemplateResponse();
        this.request("ModifyLiveSnapshotTemplate", req, resp, cb);
    }

    /**
     * 查询指定时间段范围内启动和结束的录制任务列表。
- 使用前提
1. 仅用于查询由 CreateRecordTask 接口创建的录制任务。
2. 不能查询被 DeleteRecordTask 接口删除以及已过期（平台侧保留3个月）的录制任务。

     * @param {DescribeRecordTaskRequest} req
     * @param {function(string, DescribeRecordTaskResponse):void} cb
     * @public
     */
    DescribeRecordTask(req, cb) {
        let resp = new DescribeRecordTaskResponse();
        this.request("DescribeRecordTask", req, resp, cb);
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
     * 用于查询推断流事件。<br>

注意：
1. 该接口提供离线推断流记录查询功能，不可作为重要业务场景强依赖接口。
2. 该接口可通过使用IsFilter进行过滤，返回推流历史记录。
     * @param {DescribeLiveStreamEventListRequest} req
     * @param {function(string, DescribeLiveStreamEventListResponse):void} cb
     * @public
     */
    DescribeLiveStreamEventList(req, cb) {
        let resp = new DescribeLiveStreamEventListResponse();
        this.request("DescribeLiveStreamEventList", req, resp, cb);
    }

    /**
     * 该接口用来创建通用混流。用法与旧接口 mix_streamv2.start_mix_stream_advanced 基本一致。
注意：当前最多支持16路混流。
最佳实践：https://cloud.tencent.com/document/product/267/45566
     * @param {CreateCommonMixStreamRequest} req
     * @param {function(string, CreateCommonMixStreamResponse):void} cb
     * @public
     */
    CreateCommonMixStream(req, cb) {
        let resp = new CreateCommonMixStreamResponse();
        this.request("CreateCommonMixStream", req, resp, cb);
    }

    /**
     * 查询某段时间内5分钟粒度的各播放http状态码的个数。
备注：数据延迟1小时，如10:00-10:59点的数据12点才能查到。
     * @param {DescribeHttpStatusInfoListRequest} req
     * @param {function(string, DescribeHttpStatusInfoListResponse):void} cb
     * @public
     */
    DescribeHttpStatusInfoList(req, cb) {
        let resp = new DescribeHttpStatusInfoListResponse();
        this.request("DescribeHttpStatusInfoList", req, resp, cb);
    }

    /**
     * 查询某省份某运营商下行播放数据，包括带宽，流量，请求数，并发连接数信息。
     * @param {DescribeProvinceIspPlayInfoListRequest} req
     * @param {function(string, DescribeProvinceIspPlayInfoListResponse):void} cb
     * @public
     */
    DescribeProvinceIspPlayInfoList(req, cb) {
        let resp = new DescribeProvinceIspPlayInfoListResponse();
        this.request("DescribeProvinceIspPlayInfoList", req, resp, cb);
    }

    /**
     * 修改播放域名信息。
     * @param {ModifyLivePlayDomainRequest} req
     * @param {function(string, ModifyLivePlayDomainResponse):void} cb
     * @public
     */
    ModifyLivePlayDomain(req, cb) {
        let resp = new ModifyLivePlayDomainResponse();
        this.request("ModifyLivePlayDomain", req, resp, cb);
    }

    /**
     * 查询流id的上行推流质量数据，包括音视频的帧率，码率，流逝时间，编码格式等。
     * @param {DescribeStreamPushInfoListRequest} req
     * @param {function(string, DescribeStreamPushInfoListResponse):void} cb
     * @public
     */
    DescribeStreamPushInfoList(req, cb) {
        let resp = new DescribeStreamPushInfoListResponse();
        this.request("DescribeStreamPushInfoList", req, resp, cb);
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
     * 查询某个时间范围内所有时移流列表。最大支持查询24小时内的数据。
     * @param {DescribeTimeShiftStreamListRequest} req
     * @param {function(string, DescribeTimeShiftStreamListResponse):void} cb
     * @public
     */
    DescribeTimeShiftStreamList(req, cb) {
        let resp = new DescribeTimeShiftStreamListResponse();
        this.request("DescribeTimeShiftStreamList", req, resp, cb);
    }

    /**
     * 删除转码模板。
     * @param {DeleteLiveTranscodeTemplateRequest} req
     * @param {function(string, DeleteLiveTranscodeTemplateResponse):void} cb
     * @public
     */
    DeleteLiveTranscodeTemplate(req, cb) {
        let resp = new DeleteLiveTranscodeTemplateResponse();
        this.request("DeleteLiveTranscodeTemplate", req, resp, cb);
    }

    /**
     * 查询直播域名 Referer 黑白名单配置。
由于 Referer 信息包含在 http 协议中，在开启配置后，播放协议为 rtmp 或 WebRTC 不会校验 Referer 配置，仍可正常播放。如需配置 Referer 鉴权建议使用 http-flv 或 http-hls 协议播放。
     * @param {DescribeLiveDomainRefererRequest} req
     * @param {function(string, DescribeLiveDomainRefererResponse):void} cb
     * @public
     */
    DescribeLiveDomainReferer(req, cb) {
        let resp = new DescribeLiveDomainRefererResponse();
        this.request("DescribeLiveDomainReferer", req, resp, cb);
    }

    /**
     * 查询某段时间top n客户端ip汇总信息（暂支持top 1000）
     * @param {DescribeTopClientIpSumInfoListRequest} req
     * @param {function(string, DescribeTopClientIpSumInfoListResponse):void} cb
     * @public
     */
    DescribeTopClientIpSumInfoList(req, cb) {
        let resp = new DescribeTopClientIpSumInfoListResponse();
        this.request("DescribeTopClientIpSumInfoList", req, resp, cb);
    }

    /**
     * 修改直播拉流配置的状态。该接口已下线,请使用新接口 ModifyLivePullStreamTask。
     * @param {ModifyPullStreamStatusRequest} req
     * @param {function(string, ModifyPullStreamStatusResponse):void} cb
     * @public
     */
    ModifyPullStreamStatus(req, cb) {
        let resp = new ModifyPullStreamStatusResponse();
        this.request("ModifyPullStreamStatus", req, resp, cb);
    }

    /**
     * 创建一个在指定时间启动、结束的截图任务，并使用指定截图模板ID对应的配置进行截图。
- 注意事项
1. 断流会结束当前截图。在结束时间到达之前任务仍然有效，期间只要正常推流都会正常截图，与是否多次推、断流无关。
2. 使用上避免创建时间段相互重叠的截图任务。若同一条流当前存在多个时段重叠的任务，为避免重复系统将启动最多3个截图任务。
3. 创建的截图任务记录在平台侧只保留3个月。
4. 当前截图任务管理API（CreateScreenshotTask/StopScreenshotTask/DeleteScreenshotTask）与旧API（CreateLiveInstantSnapshot/StopLiveInstantSnapshot）不兼容，两套接口不能混用。
5. 避免 创建截图任务 与 推流 操作同时进行，可能导致因截图任务未生效而引起任务延迟启动问题，两者操作间隔建议大于3秒。
     * @param {CreateScreenshotTaskRequest} req
     * @param {function(string, CreateScreenshotTaskResponse):void} cb
     * @public
     */
    CreateScreenshotTask(req, cb) {
        let resp = new CreateScreenshotTaskResponse();
        this.request("CreateScreenshotTask", req, resp, cb);
    }

    /**
     * 获取录制模板列表。
     * @param {DescribeLiveRecordTemplatesRequest} req
     * @param {function(string, DescribeLiveRecordTemplatesResponse):void} cb
     * @public
     */
    DescribeLiveRecordTemplates(req, cb) {
        let resp = new DescribeLiveRecordTemplatesResponse();
        this.request("DescribeLiveRecordTemplates", req, resp, cb);
    }

    /**
     * 验证用户是否拥有特定直播域名。
     * @param {AuthenticateDomainOwnerRequest} req
     * @param {function(string, AuthenticateDomainOwnerResponse):void} cb
     * @public
     */
    AuthenticateDomainOwner(req, cb) {
        let resp = new AuthenticateDomainOwnerResponse();
        this.request("AuthenticateDomainOwner", req, resp, cb);
    }

    /**
     * 查询某时间段top n的域名或流id信息（暂支持top 1000）。
     * @param {DescribeVisitTopSumInfoListRequest} req
     * @param {function(string, DescribeVisitTopSumInfoListResponse):void} cb
     * @public
     */
    DescribeVisitTopSumInfoList(req, cb) {
        let resp = new DescribeVisitTopSumInfoListResponse();
        this.request("DescribeVisitTopSumInfoList", req, resp, cb);
    }

    /**
     * 修改录制模板配置。
     * @param {ModifyLiveRecordTemplateRequest} req
     * @param {function(string, ModifyLiveRecordTemplateResponse):void} cb
     * @public
     */
    ModifyLiveRecordTemplate(req, cb) {
        let resp = new ModifyLiveRecordTemplateResponse();
        this.request("ModifyLiveRecordTemplate", req, resp, cb);
    }

    /**
     * 获取域名证书信息。
     * @param {DescribeLiveDomainCertRequest} req
     * @param {function(string, DescribeLiveDomainCertResponse):void} cb
     * @public
     */
    DescribeLiveDomainCert(req, cb) {
        let resp = new DescribeLiveDomainCertResponse();
        this.request("DescribeLiveDomainCert", req, resp, cb);
    }

    /**
     * 添加水印，成功返回水印 ID 后，需要调用[CreateLiveWatermarkRule](/document/product/267/32629)接口将水印 ID 绑定到流使用。
水印数量上限 100，超过后需要先删除，再添加。
     * @param {AddLiveWatermarkRequest} req
     * @param {function(string, AddLiveWatermarkResponse):void} cb
     * @public
     */
    AddLiveWatermark(req, cb) {
        let resp = new AddLiveWatermarkResponse();
        this.request("AddLiveWatermark", req, resp, cb);
    }

    /**
     * 海外分区直播播放带宽和流量数据查询。
     * @param {DescribeAreaBillBandwidthAndFluxListRequest} req
     * @param {function(string, DescribeAreaBillBandwidthAndFluxListResponse):void} cb
     * @public
     */
    DescribeAreaBillBandwidthAndFluxList(req, cb) {
        let resp = new DescribeAreaBillBandwidthAndFluxListResponse();
        this.request("DescribeAreaBillBandwidthAndFluxList", req, resp, cb);
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
     * 删除回调规则。
     * @param {DeleteLiveCallbackRuleRequest} req
     * @param {function(string, DeleteLiveCallbackRuleResponse):void} cb
     * @public
     */
    DeleteLiveCallbackRule(req, cb) {
        let resp = new DeleteLiveCallbackRuleResponse();
        this.request("DeleteLiveCallbackRule", req, resp, cb);
    }

    /**
     * 更新拉流配置。该接口为已下线接口，请使用新接口 ModifyLivePullStreamTask。 
     * @param {ModifyPullStreamConfigRequest} req
     * @param {function(string, ModifyPullStreamConfigResponse):void} cb
     * @public
     */
    ModifyPullStreamConfig(req, cb) {
        let resp = new ModifyPullStreamConfigResponse();
        this.request("ModifyPullStreamConfig", req, resp, cb);
    }

    /**
     * 创建截图模板，数量上限：50，成功返回模板id后，需要调用[CreateLiveSnapshotRule](/document/product/267/32625)接口，将模板id绑定到流使用。
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
     * 返回正在直播中的流列表。适用于推流成功后查询在线流信息。

注意：
1. 该接口仅提供辅助查询在线流列表功能，业务重要场景不可强依赖该接口。
2. 该接口仅适用于流数少于2万路的情况，对于流数较大用户请联系售后。

     * @param {DescribeLiveStreamOnlineListRequest} req
     * @param {function(string, DescribeLiveStreamOnlineListResponse):void} cb
     * @public
     */
    DescribeLiveStreamOnlineList(req, cb) {
        let resp = new DescribeLiveStreamOnlineListResponse();
        this.request("DescribeLiveStreamOnlineList", req, resp, cb);
    }

    /**
     * 删除回调模板。
     * @param {DeleteLiveCallbackTemplateRequest} req
     * @param {function(string, DeleteLiveCallbackTemplateResponse):void} cb
     * @public
     */
    DeleteLiveCallbackTemplate(req, cb) {
        let resp = new DeleteLiveCallbackTemplateResponse();
        this.request("DeleteLiveCallbackTemplate", req, resp, cb);
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
     * 删除直播拉流配置。该接口已下线,请使用新接口 DeleteLivePullStreamTask。
     * @param {DeletePullStreamConfigRequest} req
     * @param {function(string, DeletePullStreamConfigResponse):void} cb
     * @public
     */
    DeletePullStreamConfig(req, cb) {
        let resp = new DeletePullStreamConfigResponse();
        this.request("DeletePullStreamConfig", req, resp, cb);
    }

    /**
     * 前提调用 DescribeTimeShiftStreamList 获得请求必要参数。查询指定范围内的时移流录制详情，最大支持24小时范围查询。
     * @param {DescribeTimeShiftRecordDetailRequest} req
     * @param {function(string, DescribeTimeShiftRecordDetailResponse):void} cb
     * @public
     */
    DescribeTimeShiftRecordDetail(req, cb) {
        let resp = new DescribeTimeShiftRecordDetailResponse();
        this.request("DescribeTimeShiftRecordDetail", req, resp, cb);
    }

    /**
     * 获取单个录制模板。
     * @param {DescribeLiveRecordTemplateRequest} req
     * @param {function(string, DescribeLiveRecordTemplateResponse):void} cb
     * @public
     */
    DescribeLiveRecordTemplate(req, cb) {
        let resp = new DescribeLiveRecordTemplateResponse();
        this.request("DescribeLiveRecordTemplate", req, resp, cb);
    }

    /**
     * 提前结束截图，中止运行中的截图任务。任务被成功终止后，本次任务将不再启动。
     * @param {StopScreenshotTaskRequest} req
     * @param {function(string, StopScreenshotTaskResponse):void} cb
     * @public
     */
    StopScreenshotTask(req, cb) {
        let resp = new StopScreenshotTaskResponse();
        this.request("StopScreenshotTask", req, resp, cb);
    }

    /**
     * 查询直播拉流配置。该接口已下线,请使用新接口 DescribeLivePullStreamTasks。
     * @param {DescribePullStreamConfigsRequest} req
     * @param {function(string, DescribePullStreamConfigsResponse):void} cb
     * @public
     */
    DescribePullStreamConfigs(req, cb) {
        let resp = new DescribePullStreamConfigsResponse();
        this.request("DescribePullStreamConfigs", req, resp, cb);
    }

    /**
     * 删除水印。
     * @param {DeleteLiveWatermarkRequest} req
     * @param {function(string, DeleteLiveWatermarkResponse):void} cb
     * @public
     */
    DeleteLiveWatermark(req, cb) {
        let resp = new DeleteLiveWatermarkResponse();
        this.request("DeleteLiveWatermark", req, resp, cb);
    }

    /**
     * 查询绑定证书的域名列表。
     * @param {DescribeLiveDomainCertBindingsRequest} req
     * @param {function(string, DescribeLiveDomainCertBindingsResponse):void} cb
     * @public
     */
    DescribeLiveDomainCertBindings(req, cb) {
        let resp = new DescribeLiveDomainCertBindingsResponse();
        this.request("DescribeLiveDomainCertBindings", req, resp, cb);
    }

    /**
     * 查询下行播放错误码信息。
     * @param {DescribePlayErrorCodeSumInfoListRequest} req
     * @param {function(string, DescribePlayErrorCodeSumInfoListResponse):void} cb
     * @public
     */
    DescribePlayErrorCodeSumInfoList(req, cb) {
        let resp = new DescribePlayErrorCodeSumInfoListResponse();
        this.request("DescribePlayErrorCodeSumInfoList", req, resp, cb);
    }

    /**
     * 针对大型活动直播，通过对直播流设置延时来控制现场与观众播放画面的时间间隔，避免突发状况造成影响。

注意：如果在推流前设置延播，需要提前5分钟设置，目前该接口只支持流粒度。
     * @param {AddDelayLiveStreamRequest} req
     * @param {function(string, AddDelayLiveStreamResponse):void} cb
     * @public
     */
    AddDelayLiveStream(req, cb) {
        let resp = new AddDelayLiveStreamResponse();
        this.request("AddDelayLiveStream", req, resp, cb);
    }

    /**
     * 直播上行路数查询
     * @param {DescribeUploadStreamNumsRequest} req
     * @param {function(string, DescribeUploadStreamNumsResponse):void} cb
     * @public
     */
    DescribeUploadStreamNums(req, cb) {
        let resp = new DescribeUploadStreamNumsResponse();
        this.request("DescribeUploadStreamNums", req, resp, cb);
    }

    /**
     * 查询天维度每条流的播放数据，包括总流量等。
     * @param {DescribeStreamDayPlayInfoListRequest} req
     * @param {function(string, DescribeStreamDayPlayInfoListResponse):void} cb
     * @public
     */
    DescribeStreamDayPlayInfoList(req, cb) {
        let resp = new DescribeStreamDayPlayInfoListResponse();
        this.request("DescribeStreamDayPlayInfoList", req, resp, cb);
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
     * 修改转码模板配置。
     * @param {ModifyLiveTranscodeTemplateRequest} req
     * @param {function(string, ModifyLiveTranscodeTemplateResponse):void} cb
     * @public
     */
    ModifyLiveTranscodeTemplate(req, cb) {
        let resp = new ModifyLiveTranscodeTemplateResponse();
        this.request("ModifyLiveTranscodeTemplate", req, resp, cb);
    }

    /**
     * 删除转码规则。
DomainName+AppName+StreamName+TemplateId唯一标识单个转码规则，如需删除需要强匹配。其中TemplateId必填，其余参数为空时也需要传空字符串进行强匹配。
     * @param {DeleteLiveTranscodeRuleRequest} req
     * @param {function(string, DeleteLiveTranscodeRuleResponse):void} cb
     * @public
     */
    DeleteLiveTranscodeRule(req, cb) {
        let resp = new DeleteLiveTranscodeRuleResponse();
        this.request("DeleteLiveTranscodeRule", req, resp, cb);
    }

    /**
     * 查询转码总量数据，可查询近三个月内的数据。
注意：
如果是查询某一天内，则返回5分钟粒度数据；
如果是查询跨天或指定域名， 则返回1小时粒度数据。
     * @param {DescribeLiveTranscodeTotalInfoRequest} req
     * @param {function(string, DescribeLiveTranscodeTotalInfoResponse):void} cb
     * @public
     */
    DescribeLiveTranscodeTotalInfo(req, cb) {
        let resp = new DescribeLiveTranscodeTotalInfoResponse();
        this.request("DescribeLiveTranscodeTotalInfo", req, resp, cb);
    }

    /**
     * 删除截图规则。
     * @param {DeleteLiveSnapshotRuleRequest} req
     * @param {function(string, DeleteLiveSnapshotRuleResponse):void} cb
     * @public
     */
    DeleteLiveSnapshotRule(req, cb) {
        let resp = new DeleteLiveSnapshotRuleResponse();
        this.request("DeleteLiveSnapshotRule", req, resp, cb);
    }

    /**
     * 删除接口 CreateLivePullStreamTask 创建的拉流任务。
注意：
1. 入参中的 TaskId 为 CreateLivePullStreamTask 接口创建时返回的TaskId。
2. 也可通过 DescribeLivePullStreamTasks 进行查询创建的任务。
     * @param {DeleteLivePullStreamTaskRequest} req
     * @param {function(string, DeleteLivePullStreamTaskResponse):void} cb
     * @public
     */
    DeleteLivePullStreamTask(req, cb) {
        let resp = new DeleteLivePullStreamTaskResponse();
        this.request("DeleteLivePullStreamTask", req, resp, cb);
    }

    /**
     * 获取禁推流列表。

注意：该接口仅作为直播辅助查询接口，重要业务场景不可强依赖该接口。
     * @param {DescribeLiveForbidStreamListRequest} req
     * @param {function(string, DescribeLiveForbidStreamListResponse):void} cb
     * @public
     */
    DescribeLiveForbidStreamList(req, cb) {
        let resp = new DescribeLiveForbidStreamListResponse();
        this.request("DescribeLiveForbidStreamList", req, resp, cb);
    }

    /**
     * 创建直播拉流任务。支持将外部已有的点播文件，或者直播源拉取过来转推到指定的目标地址。
注意：
1. 默认支持任务数上限20个，如有特殊需求，可通过提单到售后进行评估增加上限。
2. 源流视频编码目前只支持: H264, H265。其他编码格式建议先进行转码处理。
3. 源流音频编码目前只支持: AAC。其他编码格式建议先进行转码处理。
4. 可在控制台开启过期自动清理，避免过期任务占用任务数额度。
5. 拉流转推功能为计费增值服务，计费规则详情可参见[计费文档](https://cloud.tencent.com/document/product/267/53308)。
6. 拉流转推功能仅提供内容拉取与推送服务，请确保内容已获得授权并符合内容传播相关的法律法规。若内容有侵权或违规相关问题，云直播会停止相关的功能服务并保留追究法律责任的权利。
     * @param {CreateLivePullStreamTaskRequest} req
     * @param {function(string, CreateLivePullStreamTaskResponse):void} cb
     * @public
     */
    CreateLivePullStreamTask(req, cb) {
        let resp = new CreateLivePullStreamTaskResponse();
        this.request("CreateLivePullStreamTask", req, resp, cb);
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
     * 批量绑定证书对应的播放域名，并更新启用状态。
新建自有证书将自动上传至腾讯云ssl。
     * @param {ModifyLiveDomainCertBindingsRequest} req
     * @param {function(string, ModifyLiveDomainCertBindingsResponse):void} cb
     * @public
     */
    ModifyLiveDomainCertBindings(req, cb) {
        let resp = new ModifyLiveDomainCertBindingsResponse();
        this.request("ModifyLiveDomainCertBindings", req, resp, cb);
    }

    /**
     * 根据域名状态、类型等信息查询用户的域名信息。
     * @param {DescribeLiveDomainsRequest} req
     * @param {function(string, DescribeLiveDomainsResponse):void} cb
     * @public
     */
    DescribeLiveDomains(req, cb) {
        let resp = new DescribeLiveDomainsResponse();
        this.request("DescribeLiveDomains", req, resp, cb);
    }

    /**
     * 更新直播拉流任务。 
1. 不支持修改目标地址，如需推到新地址，请创建新任务。
2. 不支持修改拉流源类型，如需更换，请创建新任务。
     * @param {ModifyLivePullStreamTaskRequest} req
     * @param {function(string, ModifyLivePullStreamTaskResponse):void} cb
     * @public
     */
    ModifyLivePullStreamTask(req, cb) {
        let resp = new ModifyLivePullStreamTaskResponse();
        this.request("ModifyLivePullStreamTask", req, resp, cb);
    }

    /**
     * 创建回调模板，数量上限：50，成功返回模板id后，需要调用[CreateLiveCallbackRule](/document/product/267/32638)接口将模板 ID 绑定到域名/路径使用。
<br>回调协议相关文档：[事件消息通知](/document/product/267/32744)。
注意：至少填写一个回调 URL。
     * @param {CreateLiveCallbackTemplateRequest} req
     * @param {function(string, CreateLiveCallbackTemplateResponse):void} cb
     * @public
     */
    CreateLiveCallbackTemplate(req, cb) {
        let resp = new CreateLiveCallbackTemplateResponse();
        this.request("CreateLiveCallbackTemplate", req, resp, cb);
    }

    /**
     * 恢复某条流的推流。
     * @param {ResumeLiveStreamRequest} req
     * @param {function(string, ResumeLiveStreamResponse):void} cb
     * @public
     */
    ResumeLiveStream(req, cb) {
        let resp = new ResumeLiveStreamResponse();
        this.request("ResumeLiveStream", req, resp, cb);
    }

    /**
     * 获取单个回调模板。
     * @param {DescribeLiveCallbackTemplateRequest} req
     * @param {function(string, DescribeLiveCallbackTemplateResponse):void} cb
     * @public
     */
    DescribeLiveCallbackTemplate(req, cb) {
        let resp = new DescribeLiveCallbackTemplateResponse();
        this.request("DescribeLiveCallbackTemplate", req, resp, cb);
    }

    /**
     * 删除已添加的直播域名
     * @param {DeleteLiveDomainRequest} req
     * @param {function(string, DeleteLiveDomainResponse):void} cb
     * @public
     */
    DeleteLiveDomain(req, cb) {
        let resp = new DeleteLiveDomainResponse();
        this.request("DeleteLiveDomain", req, resp, cb);
    }

    /**
     * 修改回调模板。
     * @param {ModifyLiveCallbackTemplateRequest} req
     * @param {function(string, ModifyLiveCallbackTemplateResponse):void} cb
     * @public
     */
    ModifyLiveCallbackTemplate(req, cb) {
        let resp = new ModifyLiveCallbackTemplateResponse();
        this.request("ModifyLiveCallbackTemplate", req, resp, cb);
    }

    /**
     * 查询使用 CreateLivePullStreamTask 接口创建的直播拉流任务。
排序方式：默认按更新时间 倒序排列。
     * @param {DescribeLivePullStreamTasksRequest} req
     * @param {function(string, DescribeLivePullStreamTasksResponse):void} cb
     * @public
     */
    DescribeLivePullStreamTasks(req, cb) {
        let resp = new DescribeLivePullStreamTasksResponse();
        this.request("DescribeLivePullStreamTasks", req, resp, cb);
    }

    /**
     * 查询按省份和运营商分组的下行播放数据。
     * @param {DescribeGroupProIspPlayInfoListRequest} req
     * @param {function(string, DescribeGroupProIspPlayInfoListResponse):void} cb
     * @public
     */
    DescribeGroupProIspPlayInfoList(req, cb) {
        let resp = new DescribeGroupProIspPlayInfoListResponse();
        this.request("DescribeGroupProIspPlayInfoList", req, resp, cb);
    }

    /**
     * 查询播放数据，支持按流名称查询详细播放数据，也可按播放域名查询详细总数据，数据延迟4分钟左右。
注意：按AppName查询请先联系工单申请，开通后配置生效预计需要5个工作日左右，具体时间以最终回复为准。
     * @param {DescribeStreamPlayInfoListRequest} req
     * @param {function(string, DescribeStreamPlayInfoListResponse):void} cb
     * @public
     */
    DescribeStreamPlayInfoList(req, cb) {
        let resp = new DescribeStreamPlayInfoListResponse();
        this.request("DescribeStreamPlayInfoList", req, resp, cb);
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
     * 获取单个截图模板。
     * @param {DescribeLiveSnapshotTemplateRequest} req
     * @param {function(string, DescribeLiveSnapshotTemplateResponse):void} cb
     * @public
     */
    DescribeLiveSnapshotTemplate(req, cb) {
        let resp = new DescribeLiveSnapshotTemplateResponse();
        this.request("DescribeLiveSnapshotTemplate", req, resp, cb);
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
     * 提前结束录制，中止运行中的录制任务并生成录制文件。任务被成功终止后，本次任务将不再启动。
     * @param {StopRecordTaskRequest} req
     * @param {function(string, StopRecordTaskResponse):void} cb
     * @public
     */
    StopRecordTask(req, cb) {
        let resp = new StopRecordTaskResponse();
        this.request("StopRecordTask", req, resp, cb);
    }

    /**
     * 修改直播时移模板。
     * @param {ModifyLiveTimeShiftTemplateRequest} req
     * @param {function(string, ModifyLiveTimeShiftTemplateResponse):void} cb
     * @public
     */
    ModifyLiveTimeShiftTemplate(req, cb) {
        let resp = new ModifyLiveTimeShiftTemplateResponse();
        this.request("ModifyLiveTimeShiftTemplate", req, resp, cb);
    }

    /**
     * 获取截图模板列表。
     * @param {DescribeLiveSnapshotTemplatesRequest} req
     * @param {function(string, DescribeLiveSnapshotTemplatesResponse):void} cb
     * @public
     */
    DescribeLiveSnapshotTemplates(req, cb) {
        let resp = new DescribeLiveSnapshotTemplatesResponse();
        this.request("DescribeLiveSnapshotTemplates", req, resp, cb);
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
     * 获取单个转码模板。
     * @param {DescribeLiveTranscodeTemplateRequest} req
     * @param {function(string, DescribeLiveTranscodeTemplateResponse):void} cb
     * @public
     */
    DescribeLiveTranscodeTemplate(req, cb) {
        let resp = new DescribeLiveTranscodeTemplateResponse();
        this.request("DescribeLiveTranscodeTemplate", req, resp, cb);
    }

    /**
     * 接口用来查询直播增值业务--截图的张数
     * @param {DescribeScreenShotSheetNumListRequest} req
     * @param {function(string, DescribeScreenShotSheetNumListResponse):void} cb
     * @public
     */
    DescribeScreenShotSheetNumList(req, cb) {
        let resp = new DescribeScreenShotSheetNumListResponse();
        this.request("DescribeScreenShotSheetNumList", req, resp, cb);
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
     * 删除录制任务配置。删除操作不影响正在运行当中的任务，仅对删除之后新的推流有效。
     * @param {DeleteRecordTaskRequest} req
     * @param {function(string, DeleteRecordTaskResponse):void} cb
     * @public
     */
    DeleteRecordTask(req, cb) {
        let resp = new DeleteRecordTaskResponse();
        this.request("DeleteRecordTask", req, resp, cb);
    }

    /**
     * 支持查询某天或某段时间的转码详细信息。由于转码数据量较大，如果查询时间跨度太长可能会拉不到数据，可以尝试将查询时间范围缩小些再重试。
     * @param {DescribeLiveTranscodeDetailInfoRequest} req
     * @param {function(string, DescribeLiveTranscodeDetailInfoResponse):void} cb
     * @public
     */
    DescribeLiveTranscodeDetailInfo(req, cb) {
        let resp = new DescribeLiveTranscodeDetailInfoResponse();
        this.request("DescribeLiveTranscodeDetailInfo", req, resp, cb);
    }

    /**
     * 批量获取日志URL。
     * @param {DescribeLogDownloadListRequest} req
     * @param {function(string, DescribeLogDownloadListResponse):void} cb
     * @public
     */
    DescribeLogDownloadList(req, cb) {
        let resp = new DescribeLogDownloadListResponse();
        this.request("DescribeLogDownloadList", req, resp, cb);
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
     * 获取直播时移模板。
     * @param {DescribeLiveTimeShiftTemplatesRequest} req
     * @param {function(string, DescribeLiveTimeShiftTemplatesResponse):void} cb
     * @public
     */
    DescribeLiveTimeShiftTemplates(req, cb) {
        let resp = new DescribeLiveTimeShiftTemplatesResponse();
        this.request("DescribeLiveTimeShiftTemplates", req, resp, cb);
    }

    /**
     * 获取直播延播列表。
     * @param {DescribeLiveDelayInfoListRequest} req
     * @param {function(string, DescribeLiveDelayInfoListResponse):void} cb
     * @public
     */
    DescribeLiveDelayInfoList(req, cb) {
        let resp = new DescribeLiveDelayInfoListResponse();
        this.request("DescribeLiveDelayInfoList", req, resp, cb);
    }

    /**
     * 获取直播时移规则列表。
     * @param {DescribeLiveTimeShiftRulesRequest} req
     * @param {function(string, DescribeLiveTimeShiftRulesResponse):void} cb
     * @public
     */
    DescribeLiveTimeShiftRules(req, cb) {
        let resp = new DescribeLiveTimeShiftRulesResponse();
        this.request("DescribeLiveTimeShiftRules", req, resp, cb);
    }

    /**
     * 删除录制规则。
     * @param {DeleteLiveRecordRuleRequest} req
     * @param {function(string, DeleteLiveRecordRuleResponse):void} cb
     * @public
     */
    DeleteLiveRecordRule(req, cb) {
        let resp = new DeleteLiveRecordRuleResponse();
        this.request("DeleteLiveRecordRule", req, resp, cb);
    }

    /**
     * 查询直播域名信息。
     * @param {DescribeLiveDomainRequest} req
     * @param {function(string, DescribeLiveDomainResponse):void} cb
     * @public
     */
    DescribeLiveDomain(req, cb) {
        let resp = new DescribeLiveDomainResponse();
        this.request("DescribeLiveDomain", req, resp, cb);
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
     * 查询下行播放错误码信息，某段时间内1分钟粒度的各http错误码出现的次数，包括4xx，5xx。


     * @param {DescribePlayErrorCodeDetailInfoListRequest} req
     * @param {function(string, DescribePlayErrorCodeDetailInfoListResponse):void} cb
     * @public
     */
    DescribePlayErrorCodeDetailInfoList(req, cb) {
        let resp = new DescribePlayErrorCodeDetailInfoListResponse();
        this.request("DescribePlayErrorCodeDetailInfoList", req, resp, cb);
    }

    /**
     * 提供给客户对账，按天统计，维度：推流域名、时移文件时长（累加）、配置天数（不累加）、时移总时长（累加）。
     * @param {DescribeLiveTimeShiftBillInfoListRequest} req
     * @param {function(string, DescribeLiveTimeShiftBillInfoListResponse):void} cb
     * @public
     */
    DescribeLiveTimeShiftBillInfoList(req, cb) {
        let resp = new DescribeLiveTimeShiftBillInfoListResponse();
        this.request("DescribeLiveTimeShiftBillInfoList", req, resp, cb);
    }

    /**
     * 返回已经推过流的流列表。<br>
注意：分页最多支持查询1万条记录，可通过调整查询时间范围来获取更多数据。
     * @param {DescribeLiveStreamPublishedListRequest} req
     * @param {function(string, DescribeLiveStreamPublishedListResponse):void} cb
     * @public
     */
    DescribeLiveStreamPublishedList(req, cb) {
        let resp = new DescribeLiveStreamPublishedListResponse();
        this.request("DescribeLiveStreamPublishedList", req, resp, cb);
    }

    /**
     * 查询指定时间段范围内启动和结束的截图任务列表。
- 使用前提
1. 仅用于查询由 CreateScreenshotTask接口创建的截图任务。
2. 不能查询被 DeleteScreenshotTask接口删除以及已过期（平台侧保留3个月）的截图任务。
     * @param {DescribeScreenshotTaskRequest} req
     * @param {function(string, DescribeScreenshotTaskResponse):void} cb
     * @public
     */
    DescribeScreenshotTask(req, cb) {
        let resp = new DescribeScreenshotTaskResponse();
        this.request("DescribeScreenshotTask", req, resp, cb);
    }

    /**
     * 直播推流带宽和流量数据查询。
推流计费会先取全球推流用量和全球播放用量进行比较，满足计费条件后再按各地区用量出账。详情参见[计费文档](https://cloud.tencent.com/document/product/267/34175)。
     * @param {DescribePushBandwidthAndFluxListRequest} req
     * @param {function(string, DescribePushBandwidthAndFluxListResponse):void} cb
     * @public
     */
    DescribePushBandwidthAndFluxList(req, cb) {
        let resp = new DescribePushBandwidthAndFluxListResponse();
        this.request("DescribePushBandwidthAndFluxList", req, resp, cb);
    }

    /**
     * 删除截图任务配置。删除操作不影响正在运行当中的任务，仅对删除之后新的推流有效。
     * @param {DeleteScreenshotTaskRequest} req
     * @param {function(string, DeleteScreenshotTaskResponse):void} cb
     * @public
     */
    DeleteScreenshotTask(req, cb) {
        let resp = new DeleteScreenshotTaskResponse();
        this.request("DeleteScreenshotTask", req, resp, cb);
    }

    /**
     * 禁止某条流的推送，可以预设某个时刻将流恢复。
注意：
1. 默认只要流名称正确，禁推就会生效。
2. 如需要推流域名+推流路径+流名称 强匹配生效禁推，需提单联系售后开启配置。
3. 如果配置了域名分组，需填写准确推流域名，才可断掉当前推流。
     * @param {ForbidLiveStreamRequest} req
     * @param {function(string, ForbidLiveStreamResponse):void} cb
     * @public
     */
    ForbidLiveStream(req, cb) {
        let resp = new ForbidLiveStreamResponse();
        this.request("ForbidLiveStream", req, resp, cb);
    }

    /**
     * 添加域名，一次只能提交一个域名。域名必须已备案。
     * @param {AddLiveDomainRequest} req
     * @param {function(string, AddLiveDomainResponse):void} cb
     * @public
     */
    AddLiveDomain(req, cb) {
        let resp = new AddLiveDomainResponse();
        this.request("AddLiveDomain", req, resp, cb);
    }

    /**
     * 查询直播转推计费带宽，查询时间范围最大支持3个月内的数据，时间跨度最长31天。
     * @param {DescribeDeliverBandwidthListRequest} req
     * @param {function(string, DescribeDeliverBandwidthListResponse):void} cb
     * @public
     */
    DescribeDeliverBandwidthList(req, cb) {
        let resp = new DescribeDeliverBandwidthListResponse();
        this.request("DescribeDeliverBandwidthList", req, resp, cb);
    }

    /**
     * 查询实时的域名维度下行播放数据，由于数据处理有耗时，接口默认查询4分钟前的准实时数据。
     * @param {DescribeLiveDomainPlayInfoListRequest} req
     * @param {function(string, DescribeLiveDomainPlayInfoListResponse):void} cb
     * @public
     */
    DescribeLiveDomainPlayInfoList(req, cb) {
        let resp = new DescribeLiveDomainPlayInfoListResponse();
        this.request("DescribeLiveDomainPlayInfoList", req, resp, cb);
    }

    /**
     * 创建直播时移规则，需要先调用[CreateLiveTimeShiftTemplate](/document/product/267/86169)接口创建直播时移模板，将返回的模板id绑定到流使用。
<br>直播时移相关文档：[直播时移](/document/product/267/86134)。
     * @param {CreateLiveTimeShiftRuleRequest} req
     * @param {function(string, CreateLiveTimeShiftRuleResponse):void} cb
     * @public
     */
    CreateLiveTimeShiftRule(req, cb) {
        let resp = new CreateLiveTimeShiftRuleResponse();
        this.request("CreateLiveTimeShiftRule", req, resp, cb);
    }

    /**
     * 用于查询回调事件。
     * @param {DescribeCallbackRecordsListRequest} req
     * @param {function(string, DescribeCallbackRecordsListResponse):void} cb
     * @public
     */
    DescribeCallbackRecordsList(req, cb) {
        let resp = new DescribeCallbackRecordsListResponse();
        this.request("DescribeCallbackRecordsList", req, resp, cb);
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
     * 获取单个水印信息。
     * @param {DescribeLiveWatermarkRequest} req
     * @param {function(string, DescribeLiveWatermarkResponse):void} cb
     * @public
     */
    DescribeLiveWatermark(req, cb) {
        let resp = new DescribeLiveWatermarkResponse();
        this.request("DescribeLiveWatermark", req, resp, cb);
    }

    /**
     * 获取转码模板列表。
     * @param {DescribeLiveTranscodeTemplatesRequest} req
     * @param {function(string, DescribeLiveTranscodeTemplatesResponse):void} cb
     * @public
     */
    DescribeLiveTranscodeTemplates(req, cb) {
        let resp = new DescribeLiveTranscodeTemplatesResponse();
        this.request("DescribeLiveTranscodeTemplates", req, resp, cb);
    }

    /**
     * 创建录制模板，数量上限：50，成功返回模板id后，需要调用[CreateLiveRecordRule](/document/product/267/32615)接口，将模板id绑定到流进行使用。
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
     * 直播播放带宽和流量数据查询。
     * @param {DescribeBillBandwidthAndFluxListRequest} req
     * @param {function(string, DescribeBillBandwidthAndFluxListResponse):void} cb
     * @public
     */
    DescribeBillBandwidthAndFluxList(req, cb) {
        let resp = new DescribeBillBandwidthAndFluxListResponse();
        this.request("DescribeBillBandwidthAndFluxList", req, resp, cb);
    }

    /**
     * 停止使用某个直播域名。
     * @param {ForbidLiveDomainRequest} req
     * @param {function(string, ForbidLiveDomainResponse):void} cb
     * @public
     */
    ForbidLiveDomain(req, cb) {
        let resp = new ForbidLiveDomainResponse();
        this.request("ForbidLiveDomain", req, resp, cb);
    }

    /**
     * 创建转码规则，数量上限：50，需要先调用[CreateLiveTranscodeTemplate](/document/product/267/32646)接口创建转码模板，将返回的模板id绑定到流使用。
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
     * 删除直播时移规则。
     * @param {DeleteLiveTimeShiftRuleRequest} req
     * @param {function(string, DeleteLiveTimeShiftRuleResponse):void} cb
     * @public
     */
    DeleteLiveTimeShiftRule(req, cb) {
        let resp = new DeleteLiveTimeShiftRuleResponse();
        this.request("DeleteLiveTimeShiftRule", req, resp, cb);
    }

    /**
     * 获取水印规则列表。
     * @param {DescribeLiveWatermarkRulesRequest} req
     * @param {function(string, DescribeLiveWatermarkRulesResponse):void} cb
     * @public
     */
    DescribeLiveWatermarkRules(req, cb) {
        let resp = new DescribeLiveWatermarkRulesResponse();
        this.request("DescribeLiveWatermarkRules", req, resp, cb);
    }

    /**
     * 注：DeleteLiveRecord 接口仅用于删除录制任务记录，不具备停止录制的功能，也不能删除正在进行中的录制。如果需要停止录制任务，请使用终止录制[StopLiveRecord](/document/product/267/30146) 接口。
     * @param {DeleteLiveRecordRequest} req
     * @param {function(string, DeleteLiveRecordResponse):void} cb
     * @public
     */
    DeleteLiveRecord(req, cb) {
        let resp = new DeleteLiveRecordResponse();
        this.request("DeleteLiveRecord", req, resp, cb);
    }

    /**
     * 创建截图规则，需要先调用[CreateLiveSnapshotTemplate](/document/product/267/32624)接口创建截图模板，然后将返回的模板 ID 绑定到流进行使用。
<br>截图相关文档：[直播截图](/document/product/267/32737)。
注意：单个域名仅支持关联一个截图模板。
     * @param {CreateLiveSnapshotRuleRequest} req
     * @param {function(string, CreateLiveSnapshotRuleResponse):void} cb
     * @public
     */
    CreateLiveSnapshotRule(req, cb) {
        let resp = new CreateLiveSnapshotRuleResponse();
        this.request("CreateLiveSnapshotRule", req, resp, cb);
    }

    /**
     * 创建直播时移模板。
     * @param {CreateLiveTimeShiftTemplateRequest} req
     * @param {function(string, CreateLiveTimeShiftTemplateResponse):void} cb
     * @public
     */
    CreateLiveTimeShiftTemplate(req, cb) {
        let resp = new CreateLiveTimeShiftTemplateResponse();
        this.request("CreateLiveTimeShiftTemplate", req, resp, cb);
    }

    /**
     * 删除直播时移模板。
     * @param {DeleteLiveTimeShiftTemplateRequest} req
     * @param {function(string, DeleteLiveTimeShiftTemplateResponse):void} cb
     * @public
     */
    DeleteLiveTimeShiftTemplate(req, cb) {
        let resp = new DeleteLiveTimeShiftTemplateResponse();
        this.request("DeleteLiveTimeShiftTemplate", req, resp, cb);
    }

    /**
     * 查询某段时间内每个国家地区每个省份每个运营商的平均每秒流量，总流量，总请求数信息。
     * @param {DescribeProIspPlaySumInfoListRequest} req
     * @param {function(string, DescribeProIspPlaySumInfoListResponse):void} cb
     * @public
     */
    DescribeProIspPlaySumInfoList(req, cb) {
        let resp = new DescribeProIspPlaySumInfoListResponse();
        this.request("DescribeProIspPlaySumInfoList", req, resp, cb);
    }

    /**
     * 输入某个时间点（1分钟维度），查询该时间点所有流的下行信息。
     * @param {DescribeAllStreamPlayInfoListRequest} req
     * @param {function(string, DescribeAllStreamPlayInfoListResponse):void} cb
     * @public
     */
    DescribeAllStreamPlayInfoList(req, cb) {
        let resp = new DescribeAllStreamPlayInfoListResponse();
        this.request("DescribeAllStreamPlayInfoList", req, resp, cb);
    }

    /**
     * 查询播放鉴权key。
     * @param {DescribeLivePlayAuthKeyRequest} req
     * @param {function(string, DescribeLivePlayAuthKeyResponse):void} cb
     * @public
     */
    DescribeLivePlayAuthKey(req, cb) {
        let resp = new DescribeLivePlayAuthKeyResponse();
        this.request("DescribeLivePlayAuthKey", req, resp, cb);
    }

    /**
     * 返回直播中、无推流或者禁播等状态。

使用建议：
该接口提供实时流状态查询功能，鉴于网络抖动等一些不可抗因素，使用该接口作为判断主播是否开播等重要业务场景时，请参考以下使用建议。
1. 优先使用业务自身的房间开关播逻辑，判断主播是否在线，譬如客户端开播信令和主播在线心跳等。
2. 对于没有房间管理的直播场景，可以结合以下方案综合判断。
2.1 根据[推断流事件通知](/document/product/267/20388) 判断主播在线状态。
2.2 通过定时（间隔>1min）查询[直播中的流接口](/document/api/267/20472)，判断主播是否在线。
2.3 通过 本接口 查询直播流状态，判断主播是否在线。
2.4 以上任一方式判断为在线，都认为主播开播中，并且接口查询超时或解析异常时，也默认为在线，减少对业务的影响。
     * @param {DescribeLiveStreamStateRequest} req
     * @param {function(string, DescribeLiveStreamStateResponse):void} cb
     * @public
     */
    DescribeLiveStreamState(req, cb) {
        let resp = new DescribeLiveStreamStateResponse();
        this.request("DescribeLiveStreamState", req, resp, cb);
    }

    /**
     * 设置直播域名 Referer 黑白名单。
由于 Referer 信息包含在 http 协议中，在开启配置后，播放协议为 rtmp 或 WebRTC 不会校验 Referer 配置，仍可正常播放。如需配置 Referer 鉴权建议使用 http-flv 或 http-hls 协议播放。
     * @param {ModifyLiveDomainRefererRequest} req
     * @param {function(string, ModifyLiveDomainRefererResponse):void} cb
     * @public
     */
    ModifyLiveDomainReferer(req, cb) {
        let resp = new ModifyLiveDomainRefererResponse();
        this.request("ModifyLiveDomainReferer", req, resp, cb);
    }

    /**
     * 删除录制模板。
     * @param {DeleteLiveRecordTemplateRequest} req
     * @param {function(string, DeleteLiveRecordTemplateResponse):void} cb
     * @public
     */
    DeleteLiveRecordTemplate(req, cb) {
        let resp = new DeleteLiveRecordTemplateResponse();
        this.request("DeleteLiveRecordTemplate", req, resp, cb);
    }

    /**
     * 取消直播流设置的延时配置，恢复实时直播画面。
     * @param {ResumeDelayLiveStreamRequest} req
     * @param {function(string, ResumeDelayLiveStreamResponse):void} cb
     * @public
     */
    ResumeDelayLiveStream(req, cb) {
        let resp = new ResumeDelayLiveStreamResponse();
        this.request("ResumeDelayLiveStream", req, resp, cb);
    }

    /**
     * 创建一个在指定时间启动、结束的录制任务，并使用指定录制模板ID对应的配置进行录制。
- 使用前提
1. 录制文件存放于点播平台，所以用户如需使用录制功能，需首先自行开通点播服务。
2. 录制文件存放后相关费用（含存储以及下行播放流量）按照点播平台计费方式收取，具体请参考 [对应文档](https://cloud.tencent.com/document/product/266/2837)。
- 注意事项
1. 断流会结束当前录制并生成录制文件。在结束时间到达之前任务仍然有效，期间只要正常推流都会正常录制，与是否多次推、断流无关。
2. 使用上避免创建时间段相互重叠的录制任务。若同一条流当前存在多个时段重叠的任务，为避免重复录制系统将启动最多3个录制任务。
3. 创建的录制任务记录在平台侧只保留3个月。
4. 当前录制任务管理API（[CreateRecordTask](https://cloud.tencent.com/document/product/267/45983)/[StopRecordTask](https://cloud.tencent.com/document/product/267/45981)/[DeleteRecordTask](https://cloud.tencent.com/document/product/267/45982)）与旧API（CreateLiveRecord/StopLiveRecord/DeleteLiveRecord）不兼容，两套接口不能混用。
5. 避免 创建录制任务 与 推流 操作同时进行，可能导致因录制任务未生效而引起任务延迟启动问题，两者操作间隔建议大于3秒。
     * @param {CreateRecordTaskRequest} req
     * @param {function(string, CreateRecordTaskResponse):void} cb
     * @public
     */
    CreateRecordTask(req, cb) {
        let resp = new CreateRecordTaskResponse();
        this.request("CreateRecordTask", req, resp, cb);
    }

    /**
     * 创建转码模板，数量上限：50，成功返回模板id后，需要调用[CreateLiveTranscodeRule](/document/product/267/32647)接口，将返回的模板id绑定到流使用。
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
     * 启用状态为停用的直播域名。
     * @param {EnableLiveDomainRequest} req
     * @param {function(string, EnableLiveDomainResponse):void} cb
     * @public
     */
    EnableLiveDomain(req, cb) {
        let resp = new EnableLiveDomainResponse();
        this.request("EnableLiveDomain", req, resp, cb);
    }

    /**
     * 该接口用来取消混流。用法与 mix_streamv2.cancel_mix_stream 基本一致。
     * @param {CancelCommonMixStreamRequest} req
     * @param {function(string, CancelCommonMixStreamResponse):void} cb
     * @public
     */
    CancelCommonMixStream(req, cb) {
        let resp = new CancelCommonMixStreamResponse();
        this.request("CancelCommonMixStream", req, resp, cb);
    }

    /**
     * 查询用户套餐包总量、使用量、剩余量、包状态、购买时间和过期时间等。
     * @param {DescribeLivePackageInfoRequest} req
     * @param {function(string, DescribeLivePackageInfoResponse):void} cb
     * @public
     */
    DescribeLivePackageInfo(req, cb) {
        let resp = new DescribeLivePackageInfoResponse();
        this.request("DescribeLivePackageInfo", req, resp, cb);
    }

    /**
     * 创建临时拉流转推任务，目前限制添加10条任务。
该接口已下线,请使用新接口 CreateLivePullStreamTask。

注意：该接口用于创建临时拉流转推任务，
拉流源地址即 FromUrl 可以是腾讯或非腾讯数据源，
但转推目标地址即 ToUrl 目前限制为已注册的腾讯直播域名。
     * @param {CreatePullStreamConfigRequest} req
     * @param {function(string, CreatePullStreamConfigResponse):void} cb
     * @public
     */
    CreatePullStreamConfig(req, cb) {
        let resp = new CreatePullStreamConfigResponse();
        this.request("CreatePullStreamConfig", req, resp, cb);
    }

    /**
     * 查询转码任务数。
     * @param {DescribeTranscodeTaskNumRequest} req
     * @param {function(string, DescribeTranscodeTaskNumResponse):void} cb
     * @public
     */
    DescribeTranscodeTaskNum(req, cb) {
        let resp = new DescribeTranscodeTaskNumResponse();
        this.request("DescribeTranscodeTaskNum", req, resp, cb);
    }

    /**
     * 查询所有实时流的推流信息，包括客户端IP，服务端IP，帧率，码率，域名，开始推流时间。
     * @param {DescribeLiveStreamPushInfoListRequest} req
     * @param {function(string, DescribeLiveStreamPushInfoListResponse):void} cb
     * @public
     */
    DescribeLiveStreamPushInfoList(req, cb) {
        let resp = new DescribeLiveStreamPushInfoListResponse();
        this.request("DescribeLiveStreamPushInfoList", req, resp, cb);
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
