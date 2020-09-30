/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  CreateVocabLibResponse,
  FaceIdentifyStatistic,
  DetailInfo,
  SubmitImageTaskPlusRequest,
  FacePoseResult,
  DeleteVocabLibRequest,
  DescribeAITaskResultRequest,
  ActionDurationStatistic,
  CreatePersonRequest,
  LightStatistic,
  DescribePersonsRequest,
  SubmitOneByOneClassTaskRequest,
  CreateVocabResponse,
  SubmitConversationTaskResponse,
  DescribeVocabLibRequest,
  ActionType,
  DescribePersonsResponse,
  HLFunction,
  CreateFaceRequest,
  DescribeImageTaskStatisticRequest,
  SubmitCheckAttendanceTaskPlusResponse,
  SubmitImageTaskRequest,
  WordTimePair,
  ModifyLibraryRequest,
  FaceInfo,
  LightDistributionStatistic,
  DeleteLibraryResponse,
  SubmitFullBodyClassTaskRequest,
  LightResult,
  DescribeAttendanceResultRequest,
  SubmitOpenClassTaskResponse,
  WholeTextItem,
  SubmitCheckAttendanceTaskPlusRequest,
  DescribeConversationTaskResponse,
  CreatePersonResponse,
  DescribeImageTaskRequest,
  HighlightsInfomation,
  TimeType,
  SubmitTraditionalClassTaskRequest,
  DeleteFaceResponse,
  SubmitDoubleVideoHighlightsRequest,
  ExpressRatioStatistic,
  TransmitAudioStreamResponse,
  DeletePersonRequest,
  DescribeLibrariesResponse,
  DeleteFaceRequest,
  DeleteLibraryRequest,
  DescribePersonResponse,
  StandardImageResult,
  DescribeVocabLibResponse,
  AttendanceInfo,
  SubmitCheckAttendanceTaskResponse,
  DeleteVocabResponse,
  CheckFacePhotoRequest,
  TeacherOutScreenResult,
  Word,
  DeleteVocabRequest,
  ActionInfo,
  FaceExpressionResult,
  StatInfo,
  ActionCountStatistic,
  GestureResult,
  CreateFaceResponse,
  BodyMovementResult,
  DescribeAITaskResultResponse,
  DescribeAudioTaskResponse,
  ActionDurationRatioStatistic,
  DescribePersonRequest,
  StandardVideoResult,
  ModifyLibraryResponse,
  TimeInfoResult,
  SubmitPartialBodyClassTaskResponse,
  ASRStat,
  TextItem,
  CancelTaskRequest,
  AllMuteSlice,
  DoubleVideoFunction,
  SubmitPartialBodyClassTaskRequest,
  DescribeHighlightResultResponse,
  SubmitOneByOneClassTaskResponse,
  LightStandard,
  SubmitHighlightsRequest,
  ModifyPersonResponse,
  PersonInfo,
  Face,
  Person,
  LightLevelRatioStatistic,
  DescribeVocabResponse,
  DescribeImageTaskStatisticResponse,
  SubmitCheckAttendanceTaskRequest,
  CancelTaskResponse,
  StudentBodyMovementResult,
  AbsenceInfo,
  ImageTaskFunction,
  FrameInfo,
  Library,
  SubmitConversationTaskRequest,
  SubmitHighlightsResponse,
  DeletePersonResponse,
  ImageTaskStatistic,
  SuspectedInfo,
  CheckFacePhotoResponse,
  ActionStatistic,
  DescribeHighlightResultRequest,
  DescribeVocabRequest,
  DeleteVocabLibResponse,
  ImageTaskResult,
  SubmitImageTaskPlusResponse,
  VocabStatInfomation,
  SubmitDoubleVideoHighlightsResponse,
  Function,
  DescribeAudioTaskRequest,
  DescribeAttendanceResultResponse,
  FaceExpressStatistic,
  AIAssistantRequest,
  DescribeLibrariesRequest,
  SubmitFullBodyClassTaskResponse,
  ModifyPersonRequest,
  DescribeImageTaskResponse,
  StandardAudioResult,
  HandTrackingResult,
  SubmitOpenClassTaskRequest,
  SubmitAudioTaskRequest,
  CreateVocabRequest,
  TransmitAudioStreamRequest,
  FaceAttrResult,
  SubmitTraditionalClassTaskResponse,
  AIAssistantResponse,
  SubmitImageTaskResponse,
  CreateVocabLibRequest,
  CreateLibraryResponse,
  FaceIdentifyResult,
  SubmitAudioTaskResponse,
  MuteSlice,
  DescribeConversationTaskRequest,
  VocabDetailInfomation,
  CreateLibraryRequest,
  FaceInfoResult,
  FaceDetectStatistic,
} from "./tci_models"

/**
 * tci client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tci.tencentcloudapi.com", "2019-03-18", clientConfig)
  }

  /**
     * **提交线下小班（无课桌）课任务**  
线下小班课是指有学生无课桌的课堂，满座15人以下，全局画面且背景不动，能清晰看到。  
  
**提供的功能接口有：**学生人脸识别、学生表情识别、学生肢体动作识别。  可分析的指标维度包括：身份识别、正脸、侧脸、抬头、低头、高兴、中性、高兴、中性、惊讶、厌恶、恐惧、愤怒、蔑视、悲伤、站立、举手、坐着等。
  
**对场景的要求为：**真实常规教室，满座15人以下，全局画面且背景不动；人脸上下角度在20度以内，左右角度在15度以内，歪头角度在15度以内；光照均匀，无遮挡，人脸清晰可见；像素最好在 100X100 像素以上但是图像整体质量不能超过1080p。
    
**结果查询方式：**图像任务直接返回结果，点播及直播任务通过DescribeAITaskResult查询结果。
     */
  async SubmitOpenClassTask(
    req: SubmitOpenClassTaskRequest,
    cb?: (error: string, rep: SubmitOpenClassTaskResponse) => void
  ): Promise<SubmitOpenClassTaskResponse> {
    return this.request("SubmitOpenClassTask", req, cb)
  }

  /**
   * 支持多路视频流，提交高级人员考勤任务
   */
  async SubmitCheckAttendanceTaskPlus(
    req: SubmitCheckAttendanceTaskPlusRequest,
    cb?: (error: string, rep: SubmitCheckAttendanceTaskPlusResponse) => void
  ): Promise<SubmitCheckAttendanceTaskPlusResponse> {
    return this.request("SubmitCheckAttendanceTaskPlus", req, cb)
  }

  /**
   * 创建人员库
   */
  async CreateLibrary(
    req: CreateLibraryRequest,
    cb?: (error: string, rep: CreateLibraryResponse) => void
  ): Promise<CreateLibraryResponse> {
    return this.request("CreateLibrary", req, cb)
  }

  /**
   * 音频任务提交接口
   */
  async SubmitAudioTask(
    req: SubmitAudioTaskRequest,
    cb?: (error: string, rep: SubmitAudioTaskResponse) => void
  ): Promise<SubmitAudioTaskResponse> {
    return this.request("SubmitAudioTask", req, cb)
  }

  /**
   * 创建人脸
   */
  async CreateFace(
    req: CreateFaceRequest,
    cb?: (error: string, rep: CreateFaceResponse) => void
  ): Promise<CreateFaceResponse> {
    return this.request("CreateFace", req, cb)
  }

  /**
   * 修改人员信息
   */
  async ModifyPerson(
    req: ModifyPersonRequest,
    cb?: (error: string, rep: ModifyPersonResponse) => void
  ): Promise<ModifyPersonResponse> {
    return this.request("ModifyPerson", req, cb)
  }

  /**
   * 获取图像任务统计信息
   */
  async DescribeImageTaskStatistic(
    req: DescribeImageTaskStatisticRequest,
    cb?: (error: string, rep: DescribeImageTaskStatisticResponse) => void
  ): Promise<DescribeImageTaskStatisticResponse> {
    return this.request("DescribeImageTaskStatistic", req, cb)
  }

  /**
   * 提供 AI 助教基础版本功能接口
   */
  async AIAssistant(
    req: AIAssistantRequest,
    cb?: (error: string, rep: AIAssistantResponse) => void
  ): Promise<AIAssistantResponse> {
    return this.request("AIAssistant", req, cb)
  }

  /**
   * 修改人员库信息
   */
  async ModifyLibrary(
    req: ModifyLibraryRequest,
    cb?: (error: string, rep: ModifyLibraryResponse) => void
  ): Promise<ModifyLibraryResponse> {
    return this.request("ModifyLibrary", req, cb)
  }

  /**
     * 发起双路视频生成精彩集锦接口。该接口可以通过客户传入的学生音视频及老师视频两路Url，自动生成一堂课程的精彩集锦。需要通过DescribeHighlightResult
接口获取生成结果。
     */
  async SubmitDoubleVideoHighlights(
    req: SubmitDoubleVideoHighlightsRequest,
    cb?: (error: string, rep: SubmitDoubleVideoHighlightsResponse) => void
  ): Promise<SubmitDoubleVideoHighlightsResponse> {
    return this.request("SubmitDoubleVideoHighlights", req, cb)
  }

  /**
   * 拉取人员列表
   */
  async DescribePersons(
    req: DescribePersonsRequest,
    cb?: (error: string, rep: DescribePersonsResponse) => void
  ): Promise<DescribePersonsResponse> {
    return this.request("DescribePersons", req, cb)
  }

  /**
   * 对话任务分析接口
   */
  async SubmitConversationTask(
    req: SubmitConversationTaskRequest,
    cb?: (error: string, rep: SubmitConversationTaskResponse) => void
  ): Promise<SubmitConversationTaskResponse> {
    return this.request("SubmitConversationTask", req, cb)
  }

  /**
   * 视频精彩集锦结果查询接口，异步查询客户提交的请求的结果。
   */
  async DescribeHighlightResult(
    req: DescribeHighlightResultRequest,
    cb?: (error: string, rep: DescribeHighlightResultResponse) => void
  ): Promise<DescribeHighlightResultResponse> {
    return this.request("DescribeHighlightResult", req, cb)
  }

  /**
     * **提交线下传统面授大班课（含课桌）任务。**  
传统教室课堂是指有学生课堂有课桌的课堂，满座20-50人，全局画面且背景不动。  
  
**提供的功能接口有：**学生人脸识别、学生表情识别、学生肢体动作识别。可分析的指标维度包括：学生身份识别、正脸、侧脸、抬头、低头、高兴、中性、高兴、中性、惊讶、厌恶、恐惧、愤怒、蔑视、悲伤、举手、站立、坐着、趴桌子、玩手机等  
  
**对场景的要求为：**传统的学生上课教室，满座20-50人，全局画面且背景不动；人脸上下角度在20度以内，左右角度在15度以内，歪头角度在15度以内；光照均匀，无遮挡，人脸清晰可见；像素最好在 100X100 像素以上，但是图像整体质量不能超过1080p。
    
**结果查询方式：**图像任务直接返回结果，点播及直播任务通过DescribeAITaskResult查询结果。
  
     */
  async SubmitTraditionalClassTask(
    req: SubmitTraditionalClassTaskRequest,
    cb?: (error: string, rep: SubmitTraditionalClassTaskResponse) => void
  ): Promise<SubmitTraditionalClassTaskResponse> {
    return this.request("SubmitTraditionalClassTask", req, cb)
  }

  /**
   * 获取标准化接口任务结果
   */
  async DescribeAITaskResult(
    req: DescribeAITaskResultRequest,
    cb?: (error: string, rep: DescribeAITaskResultResponse) => void
  ): Promise<DescribeAITaskResultResponse> {
    return this.request("DescribeAITaskResult", req, cb)
  }

  /**
   * 删除人员
   */
  async DeletePerson(
    req: DeletePersonRequest,
    cb?: (error: string, rep: DeletePersonResponse) => void
  ): Promise<DeletePersonResponse> {
    return this.request("DeletePerson", req, cb)
  }

  /**
   * 获取人员库列表
   */
  async DescribeLibraries(
    req?: DescribeLibrariesRequest,
    cb?: (error: string, rep: DescribeLibrariesResponse) => void
  ): Promise<DescribeLibrariesResponse> {
    return this.request("DescribeLibraries", req, cb)
  }

  /**
   * 用于取消已经提交的任务，目前只支持图像任务。
   */
  async CancelTask(
    req: CancelTaskRequest,
    cb?: (error: string, rep: CancelTaskResponse) => void
  ): Promise<CancelTaskResponse> {
    return this.request("CancelTask", req, cb)
  }

  /**
   * 发起视频生成精彩集锦接口。该接口可以通过客户传入的课程音频数据及相关策略（如微笑抽取，专注抽取等），自动生成一堂课程的精彩集锦。需要通过QueryHighlightResult接口获取生成结果。
   */
  async SubmitHighlights(
    req: SubmitHighlightsRequest,
    cb?: (error: string, rep: SubmitHighlightsResponse) => void
  ): Promise<SubmitHighlightsResponse> {
    return this.request("SubmitHighlights", req, cb)
  }

  /**
   * 查询词汇库
   */
  async DescribeVocabLib(
    req?: DescribeVocabLibRequest,
    cb?: (error: string, rep: DescribeVocabLibResponse) => void
  ): Promise<DescribeVocabLibResponse> {
    return this.request("DescribeVocabLib", req, cb)
  }

  /**
   * 创建词汇
   */
  async CreateVocab(
    req: CreateVocabRequest,
    cb?: (error: string, rep: CreateVocabResponse) => void
  ): Promise<CreateVocabResponse> {
    return this.request("CreateVocab", req, cb)
  }

  /**
     * **提交在线1对1课堂任务**  
对于在线1对1课堂，老师通过视频向学生授课，并且学生人数为1人。通过上传学生端的图像信息，可以获取学生的听课情况分析。 具体指一路全局画面且背景不动，有1位学生的头像或上半身的画面，要求画面稳定清晰。
  
**提供的功能接口有：**学生人脸识别、学生表情识别、语音识别。可分析的指标维度包括：学生身份识别、正脸、侧脸、抬头、低头、人脸坐标、人脸尺寸、高兴、中性、高兴、中性、惊讶、厌恶、恐惧、愤怒、蔑视、悲伤、语音转文字、发音时长、非发音时长、音量、语速等。
  
**对场景的要求为：**真实常规1v1授课场景，学生2人以下，全局画面且背景不动；人脸上下角度在20度以内，左右角度在15度以内，歪头角度在15度以内；光照均匀，无遮挡，人脸清晰可见；像素最好在 100X100 像素以上，但是图像整体质量不能超过1080p。
    
**结果查询方式：**图像任务直接返回结果，点播及直播任务通过DescribeAITaskResult查询结果。
     */
  async SubmitOneByOneClassTask(
    req: SubmitOneByOneClassTaskRequest,
    cb?: (error: string, rep: SubmitOneByOneClassTaskResponse) => void
  ): Promise<SubmitOneByOneClassTaskResponse> {
    return this.request("SubmitOneByOneClassTask", req, cb)
  }

  /**
     * **在线小班课任务**：此场景是在线授课场景，老师一般为坐着授课，摄像头可以拍摄到老师的头部及上半身。拍摄视频为一路全局画面，且背景不动，要求画面稳定清晰。通过此接口可分析老师授课的行为及语音，以支持AI评教。    
  
**提供的功能接口有：**老师人脸识别、老师表情识别、老师手势识别、光线识别、语音识别。 可分析的指标维度包括：身份识别、正脸、侧脸、人脸坐标、人脸尺寸、高兴、中性、高兴、中性、惊讶、厌恶、恐惧、愤怒、蔑视、悲伤、点赞手势、听你说手势、听我说手势、拿教具行为、语音转文字、发音时长、非发音时长、音量、语速、指定关键词的使用等 
  
**对场景的要求为：**在线常规授课场景，全局画面且背景不动；人脸上下角度在20度以内，左右角度在15度以内，歪头角度在15度以内；光照均匀，无遮挡，人脸清晰可见；像素最好在 100X100 像素以上，但是图像整体质量不能超过1080p。
    
**结果查询方式：**图像任务直接返回结果，点播及直播任务通过DescribeAITaskResult查询结果。
     */
  async SubmitPartialBodyClassTask(
    req: SubmitPartialBodyClassTaskRequest,
    cb?: (error: string, rep: SubmitPartialBodyClassTaskResponse) => void
  ): Promise<SubmitPartialBodyClassTaskResponse> {
    return this.request("SubmitPartialBodyClassTask", req, cb)
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
     */
  async SubmitCheckAttendanceTask(
    req: SubmitCheckAttendanceTaskRequest,
    cb?: (error: string, rep: SubmitCheckAttendanceTaskResponse) => void
  ): Promise<SubmitCheckAttendanceTaskResponse> {
    return this.request("SubmitCheckAttendanceTask", req, cb)
  }

  /**
   * 创建人员
   */
  async CreatePerson(
    req: CreatePersonRequest,
    cb?: (error: string, rep: CreatePersonResponse) => void
  ): Promise<CreatePersonResponse> {
    return this.request("CreatePerson", req, cb)
  }

  /**
   * 音频对话任务评估任务信息查询接口，异步查询客户提交的请求的结果。
   */
  async DescribeConversationTask(
    req: DescribeConversationTaskRequest,
    cb?: (error: string, rep: DescribeConversationTaskResponse) => void
  ): Promise<DescribeConversationTaskResponse> {
    return this.request("DescribeConversationTask", req, cb)
  }

  /**
   * 删除人员库
   */
  async DeleteLibrary(
    req: DeleteLibraryRequest,
    cb?: (error: string, rep: DeleteLibraryResponse) => void
  ): Promise<DeleteLibraryResponse> {
    return this.request("DeleteLibrary", req, cb)
  }

  /**
   * 拉取任务详情
   */
  async DescribeImageTask(
    req: DescribeImageTaskRequest,
    cb?: (error: string, rep: DescribeImageTaskResponse) => void
  ): Promise<DescribeImageTaskResponse> {
    return this.request("DescribeImageTask", req, cb)
  }

  /**
   * 提交图像分析任务
   */
  async SubmitImageTask(
    req: SubmitImageTaskRequest,
    cb?: (error: string, rep: SubmitImageTaskResponse) => void
  ): Promise<SubmitImageTaskResponse> {
    return this.request("SubmitImageTask", req, cb)
  }

  /**
   * 人脸考勤查询结果
   */
  async DescribeAttendanceResult(
    req: DescribeAttendanceResultRequest,
    cb?: (error: string, rep: DescribeAttendanceResultResponse) => void
  ): Promise<DescribeAttendanceResultResponse> {
    return this.request("DescribeAttendanceResult", req, cb)
  }

  /**
   * 高级图像分析任务，开放了图像任务里的所有开关，可以根据场景深度定制图像分析任务。支持的图像类别有，图片链接、图片二进制数据、点播链接和直播链接。
   */
  async SubmitImageTaskPlus(
    req: SubmitImageTaskPlusRequest,
    cb?: (error: string, rep: SubmitImageTaskPlusResponse) => void
  ): Promise<SubmitImageTaskPlusResponse> {
    return this.request("SubmitImageTaskPlus", req, cb)
  }

  /**
   * 建立词汇库
   */
  async CreateVocabLib(
    req: CreateVocabLibRequest,
    cb?: (error: string, rep: CreateVocabLibResponse) => void
  ): Promise<CreateVocabLibResponse> {
    return this.request("CreateVocabLib", req, cb)
  }

  /**
   * 删除词汇
   */
  async DeleteVocab(
    req: DeleteVocabRequest,
    cb?: (error: string, rep: DeleteVocabResponse) => void
  ): Promise<DeleteVocabResponse> {
    return this.request("DeleteVocab", req, cb)
  }

  /**
     * **传统课堂授课任务**：在此场景中，老师为站立授课，有白板或投影供老师展示课程内容，摄像头可以拍摄到老师的半身或者全身。拍摄视频为一路全局画面，且背景不动，要求画面稳定清晰。通过此接口可分析老师授课的行为及语音，以支持AI评教。  
  
**提供的功能接口有：**老师人脸识别、老师表情识别、老师肢体动作识别、语音识别。  可分析的指标维度包括：身份识别、正脸、侧脸、人脸坐标、人脸尺寸、高兴、中性、高兴、中性、惊讶、厌恶、恐惧、愤怒、蔑视、悲伤、正面讲解、写板书、指黑板、语音转文字、发音时长、非发音时长、音量、语速、指定关键词的使用等
  
**对场景的要求为：**真实场景老师1人出现在画面中，全局画面且背景不动；人脸上下角度在20度以内，左右角度在15度以内，歪头角度在15度以内；光照均匀，无遮挡，人脸清晰可见；像素最好在 100X100 像素以上，但是图像整体质量不能超过1080p。
    
**结果查询方式：**图像任务直接返回结果，点播及直播任务通过DescribeAITaskResult查询结果。
     */
  async SubmitFullBodyClassTask(
    req: SubmitFullBodyClassTaskRequest,
    cb?: (error: string, rep: SubmitFullBodyClassTaskResponse) => void
  ): Promise<SubmitFullBodyClassTaskResponse> {
    return this.request("SubmitFullBodyClassTask", req, cb)
  }

  /**
   * 检查人脸图片是否合法
   */
  async CheckFacePhoto(
    req: CheckFacePhotoRequest,
    cb?: (error: string, rep: CheckFacePhotoResponse) => void
  ): Promise<CheckFacePhotoResponse> {
    return this.request("CheckFacePhoto", req, cb)
  }

  /**
   * 查询词汇
   */
  async DescribeVocab(
    req: DescribeVocabRequest,
    cb?: (error: string, rep: DescribeVocabResponse) => void
  ): Promise<DescribeVocabResponse> {
    return this.request("DescribeVocab", req, cb)
  }

  /**
   * 删除词汇库
   */
  async DeleteVocabLib(
    req: DeleteVocabLibRequest,
    cb?: (error: string, rep: DeleteVocabLibResponse) => void
  ): Promise<DeleteVocabLibResponse> {
    return this.request("DeleteVocabLib", req, cb)
  }

  /**
   * 获取人员详情
   */
  async DescribePerson(
    req: DescribePersonRequest,
    cb?: (error: string, rep: DescribePersonResponse) => void
  ): Promise<DescribePersonResponse> {
    return this.request("DescribePerson", req, cb)
  }

  /**
   * 删除人脸
   */
  async DeleteFace(
    req: DeleteFaceRequest,
    cb?: (error: string, rep: DeleteFaceResponse) => void
  ): Promise<DeleteFaceResponse> {
    return this.request("DeleteFace", req, cb)
  }

  /**
   * 音频评估任务信息查询接口，异步查询客户提交的请求的结果。
   */
  async DescribeAudioTask(
    req: DescribeAudioTaskRequest,
    cb?: (error: string, rep: DescribeAudioTaskResponse) => void
  ): Promise<DescribeAudioTaskResponse> {
    return this.request("DescribeAudioTask", req, cb)
  }

  /**
   * 分析音频信息
   */
  async TransmitAudioStream(
    req: TransmitAudioStreamRequest,
    cb?: (error: string, rep: TransmitAudioStreamResponse) => void
  ): Promise<TransmitAudioStreamResponse> {
    return this.request("TransmitAudioStream", req, cb)
  }
}
