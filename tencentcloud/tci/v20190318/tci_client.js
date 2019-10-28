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
const CreateVocabLibResponse = models.CreateVocabLibResponse;
const FaceIdentifyStatistic = models.FaceIdentifyStatistic;
const DetailInfo = models.DetailInfo;
const SubmitImageTaskPlusRequest = models.SubmitImageTaskPlusRequest;
const FacePoseResult = models.FacePoseResult;
const DeleteVocabLibRequest = models.DeleteVocabLibRequest;
const DescribeAITaskResultRequest = models.DescribeAITaskResultRequest;
const ActionDurationStatistic = models.ActionDurationStatistic;
const CreatePersonRequest = models.CreatePersonRequest;
const LightStatistic = models.LightStatistic;
const DescribePersonsRequest = models.DescribePersonsRequest;
const SubmitOneByOneClassTaskRequest = models.SubmitOneByOneClassTaskRequest;
const CreateVocabResponse = models.CreateVocabResponse;
const SubmitConversationTaskResponse = models.SubmitConversationTaskResponse;
const DescribeVocabLibRequest = models.DescribeVocabLibRequest;
const ActionType = models.ActionType;
const DescribePersonsResponse = models.DescribePersonsResponse;
const HLFunction = models.HLFunction;
const CreateFaceRequest = models.CreateFaceRequest;
const DescribeImageTaskStatisticRequest = models.DescribeImageTaskStatisticRequest;
const SubmitCheckAttendanceTaskPlusResponse = models.SubmitCheckAttendanceTaskPlusResponse;
const SubmitImageTaskRequest = models.SubmitImageTaskRequest;
const WordTimePair = models.WordTimePair;
const ModifyLibraryRequest = models.ModifyLibraryRequest;
const FaceInfo = models.FaceInfo;
const LightDistributionStatistic = models.LightDistributionStatistic;
const DeleteLibraryResponse = models.DeleteLibraryResponse;
const SubmitFullBodyClassTaskRequest = models.SubmitFullBodyClassTaskRequest;
const LightResult = models.LightResult;
const DescribeAttendanceResultRequest = models.DescribeAttendanceResultRequest;
const SubmitOpenClassTaskResponse = models.SubmitOpenClassTaskResponse;
const WholeTextItem = models.WholeTextItem;
const SubmitCheckAttendanceTaskPlusRequest = models.SubmitCheckAttendanceTaskPlusRequest;
const DescribeConversationTaskResponse = models.DescribeConversationTaskResponse;
const CreatePersonResponse = models.CreatePersonResponse;
const DescribeImageTaskRequest = models.DescribeImageTaskRequest;
const HighlightsInfomation = models.HighlightsInfomation;
const TimeType = models.TimeType;
const SubmitTraditionalClassTaskRequest = models.SubmitTraditionalClassTaskRequest;
const DeleteFaceResponse = models.DeleteFaceResponse;
const SubmitDoubleVideoHighlightsRequest = models.SubmitDoubleVideoHighlightsRequest;
const ExpressRatioStatistic = models.ExpressRatioStatistic;
const TransmitAudioStreamResponse = models.TransmitAudioStreamResponse;
const DeletePersonRequest = models.DeletePersonRequest;
const DescribeLibrariesResponse = models.DescribeLibrariesResponse;
const DeleteFaceRequest = models.DeleteFaceRequest;
const DeleteLibraryRequest = models.DeleteLibraryRequest;
const DescribePersonResponse = models.DescribePersonResponse;
const StandardImageResult = models.StandardImageResult;
const DescribeVocabLibResponse = models.DescribeVocabLibResponse;
const AttendanceInfo = models.AttendanceInfo;
const SubmitCheckAttendanceTaskResponse = models.SubmitCheckAttendanceTaskResponse;
const DeleteVocabResponse = models.DeleteVocabResponse;
const CheckFacePhotoRequest = models.CheckFacePhotoRequest;
const TeacherOutScreenResult = models.TeacherOutScreenResult;
const Word = models.Word;
const DeleteVocabRequest = models.DeleteVocabRequest;
const ActionInfo = models.ActionInfo;
const FaceExpressionResult = models.FaceExpressionResult;
const StatInfo = models.StatInfo;
const ActionCountStatistic = models.ActionCountStatistic;
const GestureResult = models.GestureResult;
const CreateFaceResponse = models.CreateFaceResponse;
const BodyMovementResult = models.BodyMovementResult;
const DescribeAITaskResultResponse = models.DescribeAITaskResultResponse;
const DescribeAudioTaskResponse = models.DescribeAudioTaskResponse;
const ActionDurationRatioStatistic = models.ActionDurationRatioStatistic;
const DescribePersonRequest = models.DescribePersonRequest;
const StandardVideoResult = models.StandardVideoResult;
const ModifyLibraryResponse = models.ModifyLibraryResponse;
const TimeInfoResult = models.TimeInfoResult;
const SubmitPartialBodyClassTaskResponse = models.SubmitPartialBodyClassTaskResponse;
const ASRStat = models.ASRStat;
const TextItem = models.TextItem;
const CancelTaskRequest = models.CancelTaskRequest;
const AllMuteSlice = models.AllMuteSlice;
const DoubleVideoFunction = models.DoubleVideoFunction;
const SubmitPartialBodyClassTaskRequest = models.SubmitPartialBodyClassTaskRequest;
const DescribeHighlightResultResponse = models.DescribeHighlightResultResponse;
const SubmitOneByOneClassTaskResponse = models.SubmitOneByOneClassTaskResponse;
const LightStandard = models.LightStandard;
const SubmitHighlightsRequest = models.SubmitHighlightsRequest;
const ModifyPersonResponse = models.ModifyPersonResponse;
const PersonInfo = models.PersonInfo;
const Face = models.Face;
const Person = models.Person;
const LightLevelRatioStatistic = models.LightLevelRatioStatistic;
const DescribeVocabResponse = models.DescribeVocabResponse;
const DescribeImageTaskStatisticResponse = models.DescribeImageTaskStatisticResponse;
const SubmitCheckAttendanceTaskRequest = models.SubmitCheckAttendanceTaskRequest;
const CancelTaskResponse = models.CancelTaskResponse;
const StudentBodyMovementResult = models.StudentBodyMovementResult;
const AbsenceInfo = models.AbsenceInfo;
const ImageTaskFunction = models.ImageTaskFunction;
const FrameInfo = models.FrameInfo;
const Library = models.Library;
const SubmitConversationTaskRequest = models.SubmitConversationTaskRequest;
const SubmitHighlightsResponse = models.SubmitHighlightsResponse;
const DeletePersonResponse = models.DeletePersonResponse;
const ImageTaskStatistic = models.ImageTaskStatistic;
const SuspectedInfo = models.SuspectedInfo;
const CheckFacePhotoResponse = models.CheckFacePhotoResponse;
const ActionStatistic = models.ActionStatistic;
const DescribeHighlightResultRequest = models.DescribeHighlightResultRequest;
const DescribeVocabRequest = models.DescribeVocabRequest;
const DeleteVocabLibResponse = models.DeleteVocabLibResponse;
const ImageTaskResult = models.ImageTaskResult;
const SubmitImageTaskPlusResponse = models.SubmitImageTaskPlusResponse;
const VocabStatInfomation = models.VocabStatInfomation;
const SubmitDoubleVideoHighlightsResponse = models.SubmitDoubleVideoHighlightsResponse;
const Function = models.Function;
const DescribeAudioTaskRequest = models.DescribeAudioTaskRequest;
const DescribeAttendanceResultResponse = models.DescribeAttendanceResultResponse;
const FaceExpressStatistic = models.FaceExpressStatistic;
const AIAssistantRequest = models.AIAssistantRequest;
const DescribeLibrariesRequest = models.DescribeLibrariesRequest;
const SubmitFullBodyClassTaskResponse = models.SubmitFullBodyClassTaskResponse;
const ModifyPersonRequest = models.ModifyPersonRequest;
const DescribeImageTaskResponse = models.DescribeImageTaskResponse;
const StandardAudioResult = models.StandardAudioResult;
const HandTrackingResult = models.HandTrackingResult;
const SubmitOpenClassTaskRequest = models.SubmitOpenClassTaskRequest;
const SubmitAudioTaskRequest = models.SubmitAudioTaskRequest;
const CreateVocabRequest = models.CreateVocabRequest;
const TransmitAudioStreamRequest = models.TransmitAudioStreamRequest;
const FaceAttrResult = models.FaceAttrResult;
const SubmitTraditionalClassTaskResponse = models.SubmitTraditionalClassTaskResponse;
const AIAssistantResponse = models.AIAssistantResponse;
const SubmitImageTaskResponse = models.SubmitImageTaskResponse;
const CreateVocabLibRequest = models.CreateVocabLibRequest;
const CreateLibraryResponse = models.CreateLibraryResponse;
const FaceIdentifyResult = models.FaceIdentifyResult;
const SubmitAudioTaskResponse = models.SubmitAudioTaskResponse;
const MuteSlice = models.MuteSlice;
const DescribeConversationTaskRequest = models.DescribeConversationTaskRequest;
const VocabDetailInfomation = models.VocabDetailInfomation;
const CreateLibraryRequest = models.CreateLibraryRequest;
const FaceInfoResult = models.FaceInfoResult;
const FaceDetectStatistic = models.FaceDetectStatistic;


/**
 * tci client
 * @class
 */
class TciClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tci.tencentcloudapi.com", "2019-03-18", credential, region, profile);
    }
    
    /**
     * **提交线下小班（无课桌）课任务**  
线下小班课是指有学生无课桌的课堂，满座15人以下，全局画面且背景不动，能清晰看到。  
  
**提供的功能接口有：**学生人脸识别、学生表情识别、学生肢体动作识别。  可分析的指标维度包括：身份识别、正脸、侧脸、抬头、低头、高兴、中性、高兴、中性、惊讶、厌恶、恐惧、愤怒、蔑视、悲伤、站立、举手、坐着等。
  
**对场景的要求为：**真实常规教室，满座15人以下，全局画面且背景不动；人脸上下角度在20度以内，左右角度在15度以内，歪头角度在15度以内；光照均匀，无遮挡，人脸清晰可见；像素最好在 100X100 像素以上但是图像整体质量不能超过1080p。
    
**结果查询方式：**图像任务直接返回结果，点播及直播任务通过DescribeAITaskResult查询结果。
     * @param {SubmitOpenClassTaskRequest} req
     * @param {function(string, SubmitOpenClassTaskResponse):void} cb
     * @public
     */
    SubmitOpenClassTask(req, cb) {
        let resp = new SubmitOpenClassTaskResponse();
        this.request("SubmitOpenClassTask", req, resp, cb);
    }

    /**
     * 支持多路视频流，提交高级人员考勤任务
     * @param {SubmitCheckAttendanceTaskPlusRequest} req
     * @param {function(string, SubmitCheckAttendanceTaskPlusResponse):void} cb
     * @public
     */
    SubmitCheckAttendanceTaskPlus(req, cb) {
        let resp = new SubmitCheckAttendanceTaskPlusResponse();
        this.request("SubmitCheckAttendanceTaskPlus", req, resp, cb);
    }

    /**
     * 创建人员库
     * @param {CreateLibraryRequest} req
     * @param {function(string, CreateLibraryResponse):void} cb
     * @public
     */
    CreateLibrary(req, cb) {
        let resp = new CreateLibraryResponse();
        this.request("CreateLibrary", req, resp, cb);
    }

    /**
     * 音频任务提交接口
     * @param {SubmitAudioTaskRequest} req
     * @param {function(string, SubmitAudioTaskResponse):void} cb
     * @public
     */
    SubmitAudioTask(req, cb) {
        let resp = new SubmitAudioTaskResponse();
        this.request("SubmitAudioTask", req, resp, cb);
    }

    /**
     * 创建人脸
     * @param {CreateFaceRequest} req
     * @param {function(string, CreateFaceResponse):void} cb
     * @public
     */
    CreateFace(req, cb) {
        let resp = new CreateFaceResponse();
        this.request("CreateFace", req, resp, cb);
    }

    /**
     * 修改人员信息
     * @param {ModifyPersonRequest} req
     * @param {function(string, ModifyPersonResponse):void} cb
     * @public
     */
    ModifyPerson(req, cb) {
        let resp = new ModifyPersonResponse();
        this.request("ModifyPerson", req, resp, cb);
    }

    /**
     * 获取图像任务统计信息
     * @param {DescribeImageTaskStatisticRequest} req
     * @param {function(string, DescribeImageTaskStatisticResponse):void} cb
     * @public
     */
    DescribeImageTaskStatistic(req, cb) {
        let resp = new DescribeImageTaskStatisticResponse();
        this.request("DescribeImageTaskStatistic", req, resp, cb);
    }

    /**
     * 提供 AI 助教基础版本功能接口
     * @param {AIAssistantRequest} req
     * @param {function(string, AIAssistantResponse):void} cb
     * @public
     */
    AIAssistant(req, cb) {
        let resp = new AIAssistantResponse();
        this.request("AIAssistant", req, resp, cb);
    }

    /**
     * 修改人员库信息
     * @param {ModifyLibraryRequest} req
     * @param {function(string, ModifyLibraryResponse):void} cb
     * @public
     */
    ModifyLibrary(req, cb) {
        let resp = new ModifyLibraryResponse();
        this.request("ModifyLibrary", req, resp, cb);
    }

    /**
     * 发起双路视频生成精彩集锦接口。该接口可以通过客户传入的学生音视频及老师视频两路Url，自动生成一堂课程的精彩集锦。需要通过DescribeHighlightResult
接口获取生成结果。
     * @param {SubmitDoubleVideoHighlightsRequest} req
     * @param {function(string, SubmitDoubleVideoHighlightsResponse):void} cb
     * @public
     */
    SubmitDoubleVideoHighlights(req, cb) {
        let resp = new SubmitDoubleVideoHighlightsResponse();
        this.request("SubmitDoubleVideoHighlights", req, resp, cb);
    }

    /**
     * 拉取人员列表
     * @param {DescribePersonsRequest} req
     * @param {function(string, DescribePersonsResponse):void} cb
     * @public
     */
    DescribePersons(req, cb) {
        let resp = new DescribePersonsResponse();
        this.request("DescribePersons", req, resp, cb);
    }

    /**
     * 对话任务分析接口
     * @param {SubmitConversationTaskRequest} req
     * @param {function(string, SubmitConversationTaskResponse):void} cb
     * @public
     */
    SubmitConversationTask(req, cb) {
        let resp = new SubmitConversationTaskResponse();
        this.request("SubmitConversationTask", req, resp, cb);
    }

    /**
     * 视频精彩集锦结果查询接口，异步查询客户提交的请求的结果。
     * @param {DescribeHighlightResultRequest} req
     * @param {function(string, DescribeHighlightResultResponse):void} cb
     * @public
     */
    DescribeHighlightResult(req, cb) {
        let resp = new DescribeHighlightResultResponse();
        this.request("DescribeHighlightResult", req, resp, cb);
    }

    /**
     * **提交线下传统面授大班课（含课桌）任务。**  
传统教室课堂是指有学生课堂有课桌的课堂，满座20-50人，全局画面且背景不动。  
  
**提供的功能接口有：**学生人脸识别、学生表情识别、学生肢体动作识别。可分析的指标维度包括：学生身份识别、正脸、侧脸、抬头、低头、高兴、中性、高兴、中性、惊讶、厌恶、恐惧、愤怒、蔑视、悲伤、举手、站立、坐着、趴桌子、玩手机等  
  
**对场景的要求为：**传统的学生上课教室，满座20-50人，全局画面且背景不动；人脸上下角度在20度以内，左右角度在15度以内，歪头角度在15度以内；光照均匀，无遮挡，人脸清晰可见；像素最好在 100X100 像素以上，但是图像整体质量不能超过1080p。
    
**结果查询方式：**图像任务直接返回结果，点播及直播任务通过DescribeAITaskResult查询结果。
  
     * @param {SubmitTraditionalClassTaskRequest} req
     * @param {function(string, SubmitTraditionalClassTaskResponse):void} cb
     * @public
     */
    SubmitTraditionalClassTask(req, cb) {
        let resp = new SubmitTraditionalClassTaskResponse();
        this.request("SubmitTraditionalClassTask", req, resp, cb);
    }

    /**
     * 获取标准化接口任务结果
     * @param {DescribeAITaskResultRequest} req
     * @param {function(string, DescribeAITaskResultResponse):void} cb
     * @public
     */
    DescribeAITaskResult(req, cb) {
        let resp = new DescribeAITaskResultResponse();
        this.request("DescribeAITaskResult", req, resp, cb);
    }

    /**
     * 删除人员
     * @param {DeletePersonRequest} req
     * @param {function(string, DeletePersonResponse):void} cb
     * @public
     */
    DeletePerson(req, cb) {
        let resp = new DeletePersonResponse();
        this.request("DeletePerson", req, resp, cb);
    }

    /**
     * 获取人员库列表
     * @param {DescribeLibrariesRequest} req
     * @param {function(string, DescribeLibrariesResponse):void} cb
     * @public
     */
    DescribeLibraries(req, cb) {
        let resp = new DescribeLibrariesResponse();
        this.request("DescribeLibraries", req, resp, cb);
    }

    /**
     * 用于取消已经提交的任务，目前只支持图像任务。
     * @param {CancelTaskRequest} req
     * @param {function(string, CancelTaskResponse):void} cb
     * @public
     */
    CancelTask(req, cb) {
        let resp = new CancelTaskResponse();
        this.request("CancelTask", req, resp, cb);
    }

    /**
     * 发起视频生成精彩集锦接口。该接口可以通过客户传入的课程音频数据及相关策略（如微笑抽取，专注抽取等），自动生成一堂课程的精彩集锦。需要通过QueryHighlightResult接口获取生成结果。
     * @param {SubmitHighlightsRequest} req
     * @param {function(string, SubmitHighlightsResponse):void} cb
     * @public
     */
    SubmitHighlights(req, cb) {
        let resp = new SubmitHighlightsResponse();
        this.request("SubmitHighlights", req, resp, cb);
    }

    /**
     * 查询词汇库
     * @param {DescribeVocabLibRequest} req
     * @param {function(string, DescribeVocabLibResponse):void} cb
     * @public
     */
    DescribeVocabLib(req, cb) {
        let resp = new DescribeVocabLibResponse();
        this.request("DescribeVocabLib", req, resp, cb);
    }

    /**
     * 创建词汇
     * @param {CreateVocabRequest} req
     * @param {function(string, CreateVocabResponse):void} cb
     * @public
     */
    CreateVocab(req, cb) {
        let resp = new CreateVocabResponse();
        this.request("CreateVocab", req, resp, cb);
    }

    /**
     * **提交在线1对1课堂任务**  
对于在线1对1课堂，老师通过视频向学生授课，并且学生人数为1人。通过上传学生端的图像信息，可以获取学生的听课情况分析。 具体指一路全局画面且背景不动，有1位学生的头像或上半身的画面，要求画面稳定清晰。
  
**提供的功能接口有：**学生人脸识别、学生表情识别、语音识别。可分析的指标维度包括：学生身份识别、正脸、侧脸、抬头、低头、人脸坐标、人脸尺寸、高兴、中性、高兴、中性、惊讶、厌恶、恐惧、愤怒、蔑视、悲伤、语音转文字、发音时长、非发音时长、音量、语速等。
  
**对场景的要求为：**真实常规1v1授课场景，学生2人以下，全局画面且背景不动；人脸上下角度在20度以内，左右角度在15度以内，歪头角度在15度以内；光照均匀，无遮挡，人脸清晰可见；像素最好在 100X100 像素以上，但是图像整体质量不能超过1080p。
    
**结果查询方式：**图像任务直接返回结果，点播及直播任务通过DescribeAITaskResult查询结果。
     * @param {SubmitOneByOneClassTaskRequest} req
     * @param {function(string, SubmitOneByOneClassTaskResponse):void} cb
     * @public
     */
    SubmitOneByOneClassTask(req, cb) {
        let resp = new SubmitOneByOneClassTaskResponse();
        this.request("SubmitOneByOneClassTask", req, resp, cb);
    }

    /**
     * **在线小班课任务**：此场景是在线授课场景，老师一般为坐着授课，摄像头可以拍摄到老师的头部及上半身。拍摄视频为一路全局画面，且背景不动，要求画面稳定清晰。通过此接口可分析老师授课的行为及语音，以支持AI评教。    
  
**提供的功能接口有：**老师人脸识别、老师表情识别、老师手势识别、光线识别、语音识别。 可分析的指标维度包括：身份识别、正脸、侧脸、人脸坐标、人脸尺寸、高兴、中性、高兴、中性、惊讶、厌恶、恐惧、愤怒、蔑视、悲伤、点赞手势、听你说手势、听我说手势、拿教具行为、语音转文字、发音时长、非发音时长、音量、语速、指定关键词的使用等 
  
**对场景的要求为：**在线常规授课场景，全局画面且背景不动；人脸上下角度在20度以内，左右角度在15度以内，歪头角度在15度以内；光照均匀，无遮挡，人脸清晰可见；像素最好在 100X100 像素以上，但是图像整体质量不能超过1080p。
    
**结果查询方式：**图像任务直接返回结果，点播及直播任务通过DescribeAITaskResult查询结果。
     * @param {SubmitPartialBodyClassTaskRequest} req
     * @param {function(string, SubmitPartialBodyClassTaskResponse):void} cb
     * @public
     */
    SubmitPartialBodyClassTask(req, cb) {
        let resp = new SubmitPartialBodyClassTaskResponse();
        this.request("SubmitPartialBodyClassTask", req, resp, cb);
    }

    /**
     * 提交人员考勤任务，支持包括点播和直播资源；支持通过DescribeAttendanceResult查询结果，也支持通过NoticeUrl设置考勤回调结果，回调结果结构如下：
##### 回调事件结构
 | 参数名称 | 类型 | 描述 | 
 | ----  | ---  | ------  |
 | jobid | Integer | 任务ID | 
 | person_info | array of PersonInfo | 识别到的人员列表 | 
#####子结构PersonInfo
 | 参数名称 | 类型 | 描述 | 
 | ----  | ---  | ------  |
 | traceid | String | 可用于区分同一路视频流下的不同陌生人 | 
 | personid | String | 识别到的人员ID，如果是陌生人则返回空串 | 
 | libid | String | 识别到的人员所在的库ID，如果是陌生人则返回空串 | 
 | timestamp | uint64 | 识别到人脸的绝对时间戳，单位ms | 
 | image_url | string | 识别到人脸的事件抓图的下载地址，不长期保存，需要请及时下载 | 
     * @param {SubmitCheckAttendanceTaskRequest} req
     * @param {function(string, SubmitCheckAttendanceTaskResponse):void} cb
     * @public
     */
    SubmitCheckAttendanceTask(req, cb) {
        let resp = new SubmitCheckAttendanceTaskResponse();
        this.request("SubmitCheckAttendanceTask", req, resp, cb);
    }

    /**
     * 创建人员
     * @param {CreatePersonRequest} req
     * @param {function(string, CreatePersonResponse):void} cb
     * @public
     */
    CreatePerson(req, cb) {
        let resp = new CreatePersonResponse();
        this.request("CreatePerson", req, resp, cb);
    }

    /**
     * 音频对话任务评估任务信息查询接口，异步查询客户提交的请求的结果。
     * @param {DescribeConversationTaskRequest} req
     * @param {function(string, DescribeConversationTaskResponse):void} cb
     * @public
     */
    DescribeConversationTask(req, cb) {
        let resp = new DescribeConversationTaskResponse();
        this.request("DescribeConversationTask", req, resp, cb);
    }

    /**
     * 删除人员库
     * @param {DeleteLibraryRequest} req
     * @param {function(string, DeleteLibraryResponse):void} cb
     * @public
     */
    DeleteLibrary(req, cb) {
        let resp = new DeleteLibraryResponse();
        this.request("DeleteLibrary", req, resp, cb);
    }

    /**
     * 拉取任务详情
     * @param {DescribeImageTaskRequest} req
     * @param {function(string, DescribeImageTaskResponse):void} cb
     * @public
     */
    DescribeImageTask(req, cb) {
        let resp = new DescribeImageTaskResponse();
        this.request("DescribeImageTask", req, resp, cb);
    }

    /**
     * 提交图像分析任务
     * @param {SubmitImageTaskRequest} req
     * @param {function(string, SubmitImageTaskResponse):void} cb
     * @public
     */
    SubmitImageTask(req, cb) {
        let resp = new SubmitImageTaskResponse();
        this.request("SubmitImageTask", req, resp, cb);
    }

    /**
     * 人脸考勤查询结果
     * @param {DescribeAttendanceResultRequest} req
     * @param {function(string, DescribeAttendanceResultResponse):void} cb
     * @public
     */
    DescribeAttendanceResult(req, cb) {
        let resp = new DescribeAttendanceResultResponse();
        this.request("DescribeAttendanceResult", req, resp, cb);
    }

    /**
     * 高级图像分析任务，开放了图像任务里的所有开关，可以根据场景深度定制图像分析任务。支持的图像类别有，图片链接、图片二进制数据、点播链接和直播链接。
     * @param {SubmitImageTaskPlusRequest} req
     * @param {function(string, SubmitImageTaskPlusResponse):void} cb
     * @public
     */
    SubmitImageTaskPlus(req, cb) {
        let resp = new SubmitImageTaskPlusResponse();
        this.request("SubmitImageTaskPlus", req, resp, cb);
    }

    /**
     * 建立词汇库
     * @param {CreateVocabLibRequest} req
     * @param {function(string, CreateVocabLibResponse):void} cb
     * @public
     */
    CreateVocabLib(req, cb) {
        let resp = new CreateVocabLibResponse();
        this.request("CreateVocabLib", req, resp, cb);
    }

    /**
     * 删除词汇
     * @param {DeleteVocabRequest} req
     * @param {function(string, DeleteVocabResponse):void} cb
     * @public
     */
    DeleteVocab(req, cb) {
        let resp = new DeleteVocabResponse();
        this.request("DeleteVocab", req, resp, cb);
    }

    /**
     * **传统课堂授课任务**：在此场景中，老师为站立授课，有白板或投影供老师展示课程内容，摄像头可以拍摄到老师的半身或者全身。拍摄视频为一路全局画面，且背景不动，要求画面稳定清晰。通过此接口可分析老师授课的行为及语音，以支持AI评教。  
  
**提供的功能接口有：**老师人脸识别、老师表情识别、老师肢体动作识别、语音识别。  可分析的指标维度包括：身份识别、正脸、侧脸、人脸坐标、人脸尺寸、高兴、中性、高兴、中性、惊讶、厌恶、恐惧、愤怒、蔑视、悲伤、正面讲解、写板书、指黑板、语音转文字、发音时长、非发音时长、音量、语速、指定关键词的使用等
  
**对场景的要求为：**真实场景老师1人出现在画面中，全局画面且背景不动；人脸上下角度在20度以内，左右角度在15度以内，歪头角度在15度以内；光照均匀，无遮挡，人脸清晰可见；像素最好在 100X100 像素以上，但是图像整体质量不能超过1080p。
    
**结果查询方式：**图像任务直接返回结果，点播及直播任务通过DescribeAITaskResult查询结果。
     * @param {SubmitFullBodyClassTaskRequest} req
     * @param {function(string, SubmitFullBodyClassTaskResponse):void} cb
     * @public
     */
    SubmitFullBodyClassTask(req, cb) {
        let resp = new SubmitFullBodyClassTaskResponse();
        this.request("SubmitFullBodyClassTask", req, resp, cb);
    }

    /**
     * 检查人脸图片是否合法
     * @param {CheckFacePhotoRequest} req
     * @param {function(string, CheckFacePhotoResponse):void} cb
     * @public
     */
    CheckFacePhoto(req, cb) {
        let resp = new CheckFacePhotoResponse();
        this.request("CheckFacePhoto", req, resp, cb);
    }

    /**
     * 查询词汇
     * @param {DescribeVocabRequest} req
     * @param {function(string, DescribeVocabResponse):void} cb
     * @public
     */
    DescribeVocab(req, cb) {
        let resp = new DescribeVocabResponse();
        this.request("DescribeVocab", req, resp, cb);
    }

    /**
     * 删除词汇库
     * @param {DeleteVocabLibRequest} req
     * @param {function(string, DeleteVocabLibResponse):void} cb
     * @public
     */
    DeleteVocabLib(req, cb) {
        let resp = new DeleteVocabLibResponse();
        this.request("DeleteVocabLib", req, resp, cb);
    }

    /**
     * 获取人员详情
     * @param {DescribePersonRequest} req
     * @param {function(string, DescribePersonResponse):void} cb
     * @public
     */
    DescribePerson(req, cb) {
        let resp = new DescribePersonResponse();
        this.request("DescribePerson", req, resp, cb);
    }

    /**
     * 删除人脸
     * @param {DeleteFaceRequest} req
     * @param {function(string, DeleteFaceResponse):void} cb
     * @public
     */
    DeleteFace(req, cb) {
        let resp = new DeleteFaceResponse();
        this.request("DeleteFace", req, resp, cb);
    }

    /**
     * 音频评估任务信息查询接口，异步查询客户提交的请求的结果。
     * @param {DescribeAudioTaskRequest} req
     * @param {function(string, DescribeAudioTaskResponse):void} cb
     * @public
     */
    DescribeAudioTask(req, cb) {
        let resp = new DescribeAudioTaskResponse();
        this.request("DescribeAudioTask", req, resp, cb);
    }

    /**
     * 分析音频信息
     * @param {TransmitAudioStreamRequest} req
     * @param {function(string, TransmitAudioStreamResponse):void} cb
     * @public
     */
    TransmitAudioStream(req, cb) {
        let resp = new TransmitAudioStreamResponse();
        this.request("TransmitAudioStream", req, resp, cb);
    }


}
module.exports = TciClient;
