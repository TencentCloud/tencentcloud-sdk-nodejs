import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateVocabLibResponse, SubmitImageTaskPlusRequest, DeleteVocabLibRequest, DescribeAITaskResultRequest, CreatePersonRequest, DescribePersonsRequest, SubmitOneByOneClassTaskRequest, CreateVocabResponse, SubmitConversationTaskResponse, DescribeVocabLibRequest, DescribePersonsResponse, CreateFaceRequest, DescribeImageTaskStatisticRequest, SubmitCheckAttendanceTaskPlusResponse, SubmitImageTaskRequest, ModifyLibraryRequest, DeleteLibraryResponse, SubmitFullBodyClassTaskRequest, DescribeAttendanceResultRequest, SubmitOpenClassTaskResponse, SubmitCheckAttendanceTaskPlusRequest, DescribeConversationTaskResponse, CreatePersonResponse, DescribeImageTaskRequest, SubmitTraditionalClassTaskRequest, DeleteFaceResponse, SubmitDoubleVideoHighlightsRequest, TransmitAudioStreamResponse, DeletePersonRequest, DescribeLibrariesResponse, DeleteFaceRequest, DeleteLibraryRequest, DescribePersonResponse, DescribeVocabLibResponse, SubmitCheckAttendanceTaskResponse, DeleteVocabResponse, CheckFacePhotoRequest, DeleteVocabRequest, CreateFaceResponse, DescribeAITaskResultResponse, DescribeAudioTaskResponse, DescribePersonRequest, ModifyLibraryResponse, SubmitPartialBodyClassTaskResponse, CancelTaskRequest, SubmitPartialBodyClassTaskRequest, DescribeHighlightResultResponse, SubmitOneByOneClassTaskResponse, SubmitHighlightsRequest, ModifyPersonResponse, DescribeVocabResponse, DescribeImageTaskStatisticResponse, SubmitCheckAttendanceTaskRequest, CancelTaskResponse, SubmitConversationTaskRequest, SubmitHighlightsResponse, DeletePersonResponse, CheckFacePhotoResponse, DescribeHighlightResultRequest, DescribeVocabRequest, DeleteVocabLibResponse, SubmitImageTaskPlusResponse, SubmitDoubleVideoHighlightsResponse, DescribeAudioTaskRequest, DescribeAttendanceResultResponse, AIAssistantRequest, DescribeLibrariesRequest, SubmitFullBodyClassTaskResponse, ModifyPersonRequest, DescribeImageTaskResponse, SubmitOpenClassTaskRequest, SubmitAudioTaskRequest, CreateVocabRequest, TransmitAudioStreamRequest, SubmitTraditionalClassTaskResponse, AIAssistantResponse, SubmitImageTaskResponse, CreateVocabLibRequest, CreateLibraryResponse, SubmitAudioTaskResponse, DescribeConversationTaskRequest, CreateLibraryRequest } from "./tci_models";
/**
 * tci client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * **提交线下小班（无课桌）课任务**
线下小班课是指有学生无课桌的课堂，满座15人以下，全局画面且背景不动，能清晰看到。
  
**提供的功能接口有：**学生人脸识别、学生表情识别、学生肢体动作识别。  可分析的指标维度包括：身份识别、正脸、侧脸、抬头、低头、高兴、中性、高兴、中性、惊讶、厌恶、恐惧、愤怒、蔑视、悲伤、站立、举手、坐着等。
  
**对场景的要求为：**真实常规教室，满座15人以下，全局画面且背景不动；人脸上下角度在20度以内，左右角度在15度以内，歪头角度在15度以内；光照均匀，无遮挡，人脸清晰可见；像素最好在 100X100 像素以上但是图像整体质量不能超过1080p。
    
**结果查询方式：**图像任务直接返回结果，点播及直播任务通过DescribeAITaskResult查询结果。
     */
    SubmitOpenClassTask(req: SubmitOpenClassTaskRequest, cb?: (error: string, rep: SubmitOpenClassTaskResponse) => void): Promise<SubmitOpenClassTaskResponse>;
    /**
     * 支持多路视频流，提交高级人员考勤任务
     */
    SubmitCheckAttendanceTaskPlus(req: SubmitCheckAttendanceTaskPlusRequest, cb?: (error: string, rep: SubmitCheckAttendanceTaskPlusResponse) => void): Promise<SubmitCheckAttendanceTaskPlusResponse>;
    /**
     * 创建人员库
     */
    CreateLibrary(req: CreateLibraryRequest, cb?: (error: string, rep: CreateLibraryResponse) => void): Promise<CreateLibraryResponse>;
    /**
     * 音频任务提交接口
     */
    SubmitAudioTask(req: SubmitAudioTaskRequest, cb?: (error: string, rep: SubmitAudioTaskResponse) => void): Promise<SubmitAudioTaskResponse>;
    /**
     * 创建人脸
     */
    CreateFace(req: CreateFaceRequest, cb?: (error: string, rep: CreateFaceResponse) => void): Promise<CreateFaceResponse>;
    /**
     * 修改人员信息
     */
    ModifyPerson(req: ModifyPersonRequest, cb?: (error: string, rep: ModifyPersonResponse) => void): Promise<ModifyPersonResponse>;
    /**
     * 获取图像任务统计信息
     */
    DescribeImageTaskStatistic(req: DescribeImageTaskStatisticRequest, cb?: (error: string, rep: DescribeImageTaskStatisticResponse) => void): Promise<DescribeImageTaskStatisticResponse>;
    /**
     * 提供 AI 助教基础版本功能接口
     */
    AIAssistant(req: AIAssistantRequest, cb?: (error: string, rep: AIAssistantResponse) => void): Promise<AIAssistantResponse>;
    /**
     * 修改人员库信息
     */
    ModifyLibrary(req: ModifyLibraryRequest, cb?: (error: string, rep: ModifyLibraryResponse) => void): Promise<ModifyLibraryResponse>;
    /**
     * 发起双路视频生成精彩集锦接口。该接口可以通过客户传入的学生音视频及老师视频两路Url，自动生成一堂课程的精彩集锦。需要通过DescribeHighlightResult
接口获取生成结果。
     */
    SubmitDoubleVideoHighlights(req: SubmitDoubleVideoHighlightsRequest, cb?: (error: string, rep: SubmitDoubleVideoHighlightsResponse) => void): Promise<SubmitDoubleVideoHighlightsResponse>;
    /**
     * 拉取人员列表
     */
    DescribePersons(req: DescribePersonsRequest, cb?: (error: string, rep: DescribePersonsResponse) => void): Promise<DescribePersonsResponse>;
    /**
     * 对话任务分析接口
     */
    SubmitConversationTask(req: SubmitConversationTaskRequest, cb?: (error: string, rep: SubmitConversationTaskResponse) => void): Promise<SubmitConversationTaskResponse>;
    /**
     * 视频精彩集锦结果查询接口，异步查询客户提交的请求的结果。
     */
    DescribeHighlightResult(req: DescribeHighlightResultRequest, cb?: (error: string, rep: DescribeHighlightResultResponse) => void): Promise<DescribeHighlightResultResponse>;
    /**
     * **提交线下传统面授大班课（含课桌）任务。**
传统教室课堂是指有学生课堂有课桌的课堂，满座20-50人，全局画面且背景不动。
  
**提供的功能接口有：**学生人脸识别、学生表情识别、学生肢体动作识别。可分析的指标维度包括：学生身份识别、正脸、侧脸、抬头、低头、高兴、中性、高兴、中性、惊讶、厌恶、恐惧、愤怒、蔑视、悲伤、举手、站立、坐着、趴桌子、玩手机等
  
**对场景的要求为：**传统的学生上课教室，满座20-50人，全局画面且背景不动；人脸上下角度在20度以内，左右角度在15度以内，歪头角度在15度以内；光照均匀，无遮挡，人脸清晰可见；像素最好在 100X100 像素以上，但是图像整体质量不能超过1080p。
    
**结果查询方式：**图像任务直接返回结果，点播及直播任务通过DescribeAITaskResult查询结果。
  
     */
    SubmitTraditionalClassTask(req: SubmitTraditionalClassTaskRequest, cb?: (error: string, rep: SubmitTraditionalClassTaskResponse) => void): Promise<SubmitTraditionalClassTaskResponse>;
    /**
     * 获取标准化接口任务结果
     */
    DescribeAITaskResult(req: DescribeAITaskResultRequest, cb?: (error: string, rep: DescribeAITaskResultResponse) => void): Promise<DescribeAITaskResultResponse>;
    /**
     * 删除人员
     */
    DeletePerson(req: DeletePersonRequest, cb?: (error: string, rep: DeletePersonResponse) => void): Promise<DeletePersonResponse>;
    /**
     * 获取人员库列表
     */
    DescribeLibraries(req?: DescribeLibrariesRequest, cb?: (error: string, rep: DescribeLibrariesResponse) => void): Promise<DescribeLibrariesResponse>;
    /**
     * 用于取消已经提交的任务，目前只支持图像任务。
     */
    CancelTask(req: CancelTaskRequest, cb?: (error: string, rep: CancelTaskResponse) => void): Promise<CancelTaskResponse>;
    /**
     * 发起视频生成精彩集锦接口。该接口可以通过客户传入的课程音频数据及相关策略（如微笑抽取，专注抽取等），自动生成一堂课程的精彩集锦。需要通过QueryHighlightResult接口获取生成结果。
     */
    SubmitHighlights(req: SubmitHighlightsRequest, cb?: (error: string, rep: SubmitHighlightsResponse) => void): Promise<SubmitHighlightsResponse>;
    /**
     * 查询词汇库
     */
    DescribeVocabLib(req?: DescribeVocabLibRequest, cb?: (error: string, rep: DescribeVocabLibResponse) => void): Promise<DescribeVocabLibResponse>;
    /**
     * 创建词汇
     */
    CreateVocab(req: CreateVocabRequest, cb?: (error: string, rep: CreateVocabResponse) => void): Promise<CreateVocabResponse>;
    /**
     * **提交在线1对1课堂任务**
对于在线1对1课堂，老师通过视频向学生授课，并且学生人数为1人。通过上传学生端的图像信息，可以获取学生的听课情况分析。 具体指一路全局画面且背景不动，有1位学生的头像或上半身的画面，要求画面稳定清晰。
  
**提供的功能接口有：**学生人脸识别、学生表情识别、语音识别。可分析的指标维度包括：学生身份识别、正脸、侧脸、抬头、低头、人脸坐标、人脸尺寸、高兴、中性、高兴、中性、惊讶、厌恶、恐惧、愤怒、蔑视、悲伤、语音转文字、发音时长、非发音时长、音量、语速等。
  
**对场景的要求为：**真实常规1v1授课场景，学生2人以下，全局画面且背景不动；人脸上下角度在20度以内，左右角度在15度以内，歪头角度在15度以内；光照均匀，无遮挡，人脸清晰可见；像素最好在 100X100 像素以上，但是图像整体质量不能超过1080p。
    
**结果查询方式：**图像任务直接返回结果，点播及直播任务通过DescribeAITaskResult查询结果。
     */
    SubmitOneByOneClassTask(req: SubmitOneByOneClassTaskRequest, cb?: (error: string, rep: SubmitOneByOneClassTaskResponse) => void): Promise<SubmitOneByOneClassTaskResponse>;
    /**
     * **在线小班课任务**：此场景是在线授课场景，老师一般为坐着授课，摄像头可以拍摄到老师的头部及上半身。拍摄视频为一路全局画面，且背景不动，要求画面稳定清晰。通过此接口可分析老师授课的行为及语音，以支持AI评教。
  
**提供的功能接口有：**老师人脸识别、老师表情识别、老师手势识别、光线识别、语音识别。 可分析的指标维度包括：身份识别、正脸、侧脸、人脸坐标、人脸尺寸、高兴、中性、高兴、中性、惊讶、厌恶、恐惧、愤怒、蔑视、悲伤、点赞手势、听你说手势、听我说手势、拿教具行为、语音转文字、发音时长、非发音时长、音量、语速、指定关键词的使用等
  
**对场景的要求为：**在线常规授课场景，全局画面且背景不动；人脸上下角度在20度以内，左右角度在15度以内，歪头角度在15度以内；光照均匀，无遮挡，人脸清晰可见；像素最好在 100X100 像素以上，但是图像整体质量不能超过1080p。
    
**结果查询方式：**图像任务直接返回结果，点播及直播任务通过DescribeAITaskResult查询结果。
     */
    SubmitPartialBodyClassTask(req: SubmitPartialBodyClassTaskRequest, cb?: (error: string, rep: SubmitPartialBodyClassTaskResponse) => void): Promise<SubmitPartialBodyClassTaskResponse>;
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
    SubmitCheckAttendanceTask(req: SubmitCheckAttendanceTaskRequest, cb?: (error: string, rep: SubmitCheckAttendanceTaskResponse) => void): Promise<SubmitCheckAttendanceTaskResponse>;
    /**
     * 创建人员
     */
    CreatePerson(req: CreatePersonRequest, cb?: (error: string, rep: CreatePersonResponse) => void): Promise<CreatePersonResponse>;
    /**
     * 音频对话任务评估任务信息查询接口，异步查询客户提交的请求的结果。
     */
    DescribeConversationTask(req: DescribeConversationTaskRequest, cb?: (error: string, rep: DescribeConversationTaskResponse) => void): Promise<DescribeConversationTaskResponse>;
    /**
     * 删除人员库
     */
    DeleteLibrary(req: DeleteLibraryRequest, cb?: (error: string, rep: DeleteLibraryResponse) => void): Promise<DeleteLibraryResponse>;
    /**
     * 拉取任务详情
     */
    DescribeImageTask(req: DescribeImageTaskRequest, cb?: (error: string, rep: DescribeImageTaskResponse) => void): Promise<DescribeImageTaskResponse>;
    /**
     * 提交图像分析任务
     */
    SubmitImageTask(req: SubmitImageTaskRequest, cb?: (error: string, rep: SubmitImageTaskResponse) => void): Promise<SubmitImageTaskResponse>;
    /**
     * 人脸考勤查询结果
     */
    DescribeAttendanceResult(req: DescribeAttendanceResultRequest, cb?: (error: string, rep: DescribeAttendanceResultResponse) => void): Promise<DescribeAttendanceResultResponse>;
    /**
     * 高级图像分析任务，开放了图像任务里的所有开关，可以根据场景深度定制图像分析任务。支持的图像类别有，图片链接、图片二进制数据、点播链接和直播链接。
     */
    SubmitImageTaskPlus(req: SubmitImageTaskPlusRequest, cb?: (error: string, rep: SubmitImageTaskPlusResponse) => void): Promise<SubmitImageTaskPlusResponse>;
    /**
     * 建立词汇库
     */
    CreateVocabLib(req: CreateVocabLibRequest, cb?: (error: string, rep: CreateVocabLibResponse) => void): Promise<CreateVocabLibResponse>;
    /**
     * 删除词汇
     */
    DeleteVocab(req: DeleteVocabRequest, cb?: (error: string, rep: DeleteVocabResponse) => void): Promise<DeleteVocabResponse>;
    /**
     * **传统课堂授课任务**：在此场景中，老师为站立授课，有白板或投影供老师展示课程内容，摄像头可以拍摄到老师的半身或者全身。拍摄视频为一路全局画面，且背景不动，要求画面稳定清晰。通过此接口可分析老师授课的行为及语音，以支持AI评教。
  
**提供的功能接口有：**老师人脸识别、老师表情识别、老师肢体动作识别、语音识别。  可分析的指标维度包括：身份识别、正脸、侧脸、人脸坐标、人脸尺寸、高兴、中性、高兴、中性、惊讶、厌恶、恐惧、愤怒、蔑视、悲伤、正面讲解、写板书、指黑板、语音转文字、发音时长、非发音时长、音量、语速、指定关键词的使用等
  
**对场景的要求为：**真实场景老师1人出现在画面中，全局画面且背景不动；人脸上下角度在20度以内，左右角度在15度以内，歪头角度在15度以内；光照均匀，无遮挡，人脸清晰可见；像素最好在 100X100 像素以上，但是图像整体质量不能超过1080p。
    
**结果查询方式：**图像任务直接返回结果，点播及直播任务通过DescribeAITaskResult查询结果。
     */
    SubmitFullBodyClassTask(req: SubmitFullBodyClassTaskRequest, cb?: (error: string, rep: SubmitFullBodyClassTaskResponse) => void): Promise<SubmitFullBodyClassTaskResponse>;
    /**
     * 检查人脸图片是否合法
     */
    CheckFacePhoto(req: CheckFacePhotoRequest, cb?: (error: string, rep: CheckFacePhotoResponse) => void): Promise<CheckFacePhotoResponse>;
    /**
     * 查询词汇
     */
    DescribeVocab(req: DescribeVocabRequest, cb?: (error: string, rep: DescribeVocabResponse) => void): Promise<DescribeVocabResponse>;
    /**
     * 删除词汇库
     */
    DeleteVocabLib(req: DeleteVocabLibRequest, cb?: (error: string, rep: DeleteVocabLibResponse) => void): Promise<DeleteVocabLibResponse>;
    /**
     * 获取人员详情
     */
    DescribePerson(req: DescribePersonRequest, cb?: (error: string, rep: DescribePersonResponse) => void): Promise<DescribePersonResponse>;
    /**
     * 删除人脸
     */
    DeleteFace(req: DeleteFaceRequest, cb?: (error: string, rep: DeleteFaceResponse) => void): Promise<DeleteFaceResponse>;
    /**
     * 音频评估任务信息查询接口，异步查询客户提交的请求的结果。
     */
    DescribeAudioTask(req: DescribeAudioTaskRequest, cb?: (error: string, rep: DescribeAudioTaskResponse) => void): Promise<DescribeAudioTaskResponse>;
    /**
     * 分析音频信息
     */
    TransmitAudioStream(req: TransmitAudioStreamRequest, cb?: (error: string, rep: TransmitAudioStreamResponse) => void): Promise<TransmitAudioStreamResponse>;
}
