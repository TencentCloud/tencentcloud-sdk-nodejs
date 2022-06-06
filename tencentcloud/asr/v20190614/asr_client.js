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
const SetVocabStateResponse = models.SetVocabStateResponse;
const CreateCustomizationResponse = models.CreateCustomizationResponse;
const DescribeAsyncRecognitionTasksRequest = models.DescribeAsyncRecognitionTasksRequest;
const ModifyCustomizationStateRequest = models.ModifyCustomizationStateRequest;
const GetAsrVocabResponse = models.GetAsrVocabResponse;
const CreateAsyncRecognitionTaskRequest = models.CreateAsyncRecognitionTaskRequest;
const HotWord = models.HotWord;
const GetAsrVocabRequest = models.GetAsrVocabRequest;
const DescribeTaskStatusResponse = models.DescribeTaskStatusResponse;
const SentenceRecognitionRequest = models.SentenceRecognitionRequest;
const CloseAsyncRecognitionTaskResponse = models.CloseAsyncRecognitionTaskResponse;
const SentenceWord = models.SentenceWord;
const CreateCustomizationRequest = models.CreateCustomizationRequest;
const DownloadAsrVocabResponse = models.DownloadAsrVocabResponse;
const CreateRecTaskResponse = models.CreateRecTaskResponse;
const ModifyCustomizationResponse = models.ModifyCustomizationResponse;
const CreateAsyncRecognitionTaskResponse = models.CreateAsyncRecognitionTaskResponse;
const DeleteAsrVocabResponse = models.DeleteAsrVocabResponse;
const DownloadCustomizationResponse = models.DownloadCustomizationResponse;
const CreateRecTaskRequest = models.CreateRecTaskRequest;
const GetAsrVocabListRequest = models.GetAsrVocabListRequest;
const GetCustomizationListResponse = models.GetCustomizationListResponse;
const DownloadAsrVocabRequest = models.DownloadAsrVocabRequest;
const SetVocabStateRequest = models.SetVocabStateRequest;
const Vocab = models.Vocab;
const CloseAsyncRecognitionTaskRequest = models.CloseAsyncRecognitionTaskRequest;
const Task = models.Task;
const AsyncRecognitionTasks = models.AsyncRecognitionTasks;
const ModifyCustomizationRequest = models.ModifyCustomizationRequest;
const DeleteCustomizationResponse = models.DeleteCustomizationResponse;
const TaskStatus = models.TaskStatus;
const DeleteAsrVocabRequest = models.DeleteAsrVocabRequest;
const GetCustomizationListRequest = models.GetCustomizationListRequest;
const UpdateAsrVocabResponse = models.UpdateAsrVocabResponse;
const CreateAsrVocabResponse = models.CreateAsrVocabResponse;
const Model = models.Model;
const CreateAsrVocabRequest = models.CreateAsrVocabRequest;
const SentenceDetail = models.SentenceDetail;
const UpdateAsrVocabRequest = models.UpdateAsrVocabRequest;
const DescribeTaskStatusRequest = models.DescribeTaskStatusRequest;
const SentenceRecognitionResponse = models.SentenceRecognitionResponse;
const DeleteCustomizationRequest = models.DeleteCustomizationRequest;
const AsyncRecognitionTaskInfo = models.AsyncRecognitionTaskInfo;
const ModifyCustomizationStateResponse = models.ModifyCustomizationStateResponse;
const DescribeAsyncRecognitionTasksResponse = models.DescribeAsyncRecognitionTasksResponse;
const GetAsrVocabListResponse = models.GetAsrVocabListResponse;
const SentenceWords = models.SentenceWords;
const DownloadCustomizationRequest = models.DownloadCustomizationRequest;


/**
 * asr client
 * @class
 */
class AsrClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("asr.tencentcloudapi.com", "2019-06-14", credential, region, profile);
    }
    
    /**
     * 本接口用于关闭语音流异步识别任务。
     * @param {CloseAsyncRecognitionTaskRequest} req
     * @param {function(string, CloseAsyncRecognitionTaskResponse):void} cb
     * @public
     */
    CloseAsyncRecognitionTask(req, cb) {
        let resp = new CloseAsyncRecognitionTaskResponse();
        this.request("CloseAsyncRecognitionTask", req, resp, cb);
    }

    /**
     * 用户通过该接口，可获得所有的热词表及其信息。
     * @param {GetAsrVocabListRequest} req
     * @param {function(string, GetAsrVocabListResponse):void} cb
     * @public
     */
    GetAsrVocabList(req, cb) {
        let resp = new GetAsrVocabListResponse();
        this.request("GetAsrVocabList", req, resp, cb);
    }

    /**
     * 用户通过本接口进行热词表的下载，获得词表权重文件形式的 base64 值，文件形式为通过 “|” 分割的词和权重，即 word|weight 的形式。
     * @param {DownloadAsrVocabRequest} req
     * @param {function(string, DownloadAsrVocabResponse):void} cb
     * @public
     */
    DownloadAsrVocab(req, cb) {
        let resp = new DownloadAsrVocabResponse();
        this.request("DownloadAsrVocab", req, resp, cb);
    }

    /**
     * 本接口服务对时长5小时以内的录音文件进行识别，异步返回识别全部结果。
• 支持中文普通话、英语、粤语、日语、上海话、四川话、武汉话、贵阳话、昆明话、西安话、郑州话、太原话、兰州话、银川话、西宁话、南京话、合肥话、南昌话、长沙话、苏州话、杭州话、济南话、天津话、石家庄话、黑龙江话、吉林话、辽宁话。
• 支持通用、音视频领域
• 支持wav、mp3、m4a、flv、mp4、wma、3gp、amr、aac、ogg-opus、flac格式
• 支持语音 URL 和本地语音文件两种请求方式
• 语音 URL 的音频时长不能长于5小时，文件大小不超过512MB
• 本地语音文件不能大于5MB
• 提交录音文件识别请求后，在3小时内完成识别（大多数情况下1小时音频约3分钟以内完成识别，半小时内发送超过1000小时录音或者2万条识别任务的除外），识别结果在服务端可保存7天
• 支持回调或轮询的方式获取结果，结果获取请参考[ 录音文件识别结果查询](https://cloud.tencent.com/document/product/1093/37822)。
•   请求方法为 HTTP POST , Content-Type为"application/json; charset=utf-8"
•   签名方法参考 [公共参数](https://cloud.tencent.com/document/api/1093/35640) 中签名方法v3。
• 默认接口请求频率限制：20次/秒，如您有提高请求频率限制的需求，请提[工单](https://console.cloud.tencent.com/workorder/category)进行咨询。
     * @param {CreateRecTaskRequest} req
     * @param {function(string, CreateRecTaskResponse):void} cb
     * @public
     */
    CreateRecTask(req, cb) {
        let resp = new CreateRecTaskResponse();
        this.request("CreateRecTask", req, resp, cb);
    }

    /**
     * 用户根据词表的ID可以获取对应的热词表信息
     * @param {GetAsrVocabRequest} req
     * @param {function(string, GetAsrVocabResponse):void} cb
     * @public
     */
    GetAsrVocab(req, cb) {
        let resp = new GetAsrVocabResponse();
        this.request("GetAsrVocab", req, resp, cb);
    }

    /**
     * 在调用录音文件识别请求接口后，有回调和轮询两种方式获取识别结果。
<br>• 当采用回调方式时，识别完成后会将结果通过 POST 请求的形式通知到用户在请求时填写的回调 URL，具体请参见[ 录音识别结果回调 ](https://cloud.tencent.com/document/product/1093/52632)。
<br>• 当采用轮询方式时，需要主动提交任务ID来轮询识别结果，共有任务成功、等待、执行中和失败四种结果，具体信息请参见下文说明。
<br>•   请求方法为 HTTP POST , Content-Type为"application/json; charset=utf-8"
<br>•   签名方法参考 [公共参数](https://cloud.tencent.com/document/api/1093/35640) 中签名方法v3。
<br>•   默认接口请求频率限制：50次/秒，如您有提高请求频率限制的需求，请提[工单](https://console.cloud.tencent.com/workorder/category)进行咨询。
     * @param {DescribeTaskStatusRequest} req
     * @param {function(string, DescribeTaskStatusResponse):void} cb
     * @public
     */
    DescribeTaskStatus(req, cb) {
        let resp = new DescribeTaskStatusResponse();
        this.request("DescribeTaskStatus", req, resp, cb);
    }

    /**
     * 通过该接口，用户可以修改自学习模型状态，上下线自学习模型
     * @param {ModifyCustomizationStateRequest} req
     * @param {function(string, ModifyCustomizationStateResponse):void} cb
     * @public
     */
    ModifyCustomizationState(req, cb) {
        let resp = new ModifyCustomizationStateResponse();
        this.request("ModifyCustomizationState", req, resp, cb);
    }

    /**
     * 用户通过本接口进行对应的词表信息更新。
     * @param {UpdateAsrVocabRequest} req
     * @param {function(string, UpdateAsrVocabResponse):void} cb
     * @public
     */
    UpdateAsrVocab(req, cb) {
        let resp = new UpdateAsrVocabResponse();
        this.request("UpdateAsrVocab", req, resp, cb);
    }

    /**
     * 用户通过该接口可以设置热词表的默认状态。初始状态为0，用户可设置状态为1，即为默认状态。默认状态表示用户在请求识别时，如不设置热词表ID，则默认使用状态为1的热词表。
     * @param {SetVocabStateRequest} req
     * @param {function(string, SetVocabStateResponse):void} cb
     * @public
     */
    SetVocabState(req, cb) {
        let resp = new SetVocabStateResponse();
        this.request("SetVocabState", req, resp, cb);
    }

    /**
     * 本接口用于对语音流进行准实时识别，通过异步回调来返回识别结果。适用于直播审核等场景。
<br>• 支持rtmp、hls、rtsp等流媒体协议，以及各类基于http协议的直播流
<br>• 音频流时长无限制，服务会自动拉取音频流数据，若连续10分钟拉不到流数据时，服务会终止识别任务
<br>• 服务通过回调的方式来提供识别结果，用户需要提供CallbackUrl。回调时机为一小段话(最长15秒)回调一次。
<br>• 签名方法参考 [公共参数](https://cloud.tencent.com/document/api/1093/35640) 中签名方法v3。
<br>• 默认单账号限制并发数为20路，如您有提高并发限制的需求，请提[工单](https://console.cloud.tencent.com/workorder/category)进行咨询。
     * @param {CreateAsyncRecognitionTaskRequest} req
     * @param {function(string, CreateAsyncRecognitionTaskResponse):void} cb
     * @public
     */
    CreateAsyncRecognitionTask(req, cb) {
        let resp = new CreateAsyncRecognitionTaskResponse();
        this.request("CreateAsyncRecognitionTask", req, resp, cb);
    }

    /**
     * 用户通过本接口进行热词表的创建。
<br>•   默认最多可创建30个热词表。
<br>•   每个热词表最多可添加128个词，每个词最长10个字，不能超出限制。
<br>•   热词表可以通过数组或者本地文件形式上传。
<br>•   本地文件必须为UTF-8编码格式，每行仅添加一个热词且不能包含标点和特殊字符。
<br>•   热词权重取值范围为[1,10]之间的整数，权重越大代表该词被识别出来的概率越大。
     * @param {CreateAsrVocabRequest} req
     * @param {function(string, CreateAsrVocabResponse):void} cb
     * @public
     */
    CreateAsrVocab(req, cb) {
        let resp = new CreateAsrVocabResponse();
        this.request("CreateAsrVocab", req, resp, cb);
    }

    /**
     * 用户通过该接口可以删除自学习模型
     * @param {DeleteCustomizationRequest} req
     * @param {function(string, DeleteCustomizationResponse):void} cb
     * @public
     */
    DeleteCustomization(req, cb) {
        let resp = new DeleteCustomizationResponse();
        this.request("DeleteCustomization", req, resp, cb);
    }

    /**
     * 用户使用该接口可以创建自学习模型，以供识别调用
     * @param {CreateCustomizationRequest} req
     * @param {function(string, CreateCustomizationResponse):void} cb
     * @public
     */
    CreateCustomization(req, cb) {
        let resp = new CreateCustomizationResponse();
        this.request("CreateCustomization", req, resp, cb);
    }

    /**
     * 本接口用于查询当前在运行的语音流异步识别任务列表。
<br>•   签名方法参考 [公共参数](https://cloud.tencent.com/document/api/1093/35640) 中签名方法v3。
     * @param {DescribeAsyncRecognitionTasksRequest} req
     * @param {function(string, DescribeAsyncRecognitionTasksResponse):void} cb
     * @public
     */
    DescribeAsyncRecognitionTasks(req, cb) {
        let resp = new DescribeAsyncRecognitionTasksResponse();
        this.request("DescribeAsyncRecognitionTasks", req, resp, cb);
    }

    /**
     * 查询自学习模型列表
     * @param {GetCustomizationListRequest} req
     * @param {function(string, GetCustomizationListResponse):void} cb
     * @public
     */
    GetCustomizationList(req, cb) {
        let resp = new GetCustomizationListResponse();
        this.request("GetCustomizationList", req, resp, cb);
    }

    /**
     * 用户通过本接口进行热词表的删除。
     * @param {DeleteAsrVocabRequest} req
     * @param {function(string, DeleteAsrVocabResponse):void} cb
     * @public
     */
    DeleteAsrVocab(req, cb) {
        let resp = new DeleteAsrVocabResponse();
        this.request("DeleteAsrVocab", req, resp, cb);
    }

    /**
     * 用户通过该接口可以更新自学习模型，如模型名称、模型类型、模型语料。
     * @param {ModifyCustomizationRequest} req
     * @param {function(string, ModifyCustomizationResponse):void} cb
     * @public
     */
    ModifyCustomization(req, cb) {
        let resp = new ModifyCustomizationResponse();
        this.request("ModifyCustomization", req, resp, cb);
    }

    /**
     * 本接口用于对60秒之内的短音频文件进行识别。<br>•   支持中文普通话、英语、粤语、日语、上海话、四川话、武汉话、贵阳话、昆明话、西安话、郑州话、太原话、兰州话、银川话、西宁话、南京话、合肥话、南昌话、长沙话、苏州话、杭州话、济南话、天津话、石家庄话、黑龙江话、吉林话、辽宁话。<br>•   支持本地语音文件上传和语音URL上传两种请求方式，音频时长不能超过60s，音频文件大小不能超过3MB。<br>•   音频格式支持wav、pcm、ogg-opus、speex、silk、mp3、m4a、aac；采样率建议8000Hz或者16000Hz；采样精度建议16bits；声道支持单声道。<br>•   请求方法为 HTTP POST , Content-Type为"application/json; charset=utf-8"<br>•   签名方法参考 [公共参数](https://cloud.tencent.com/document/api/1093/35640) 中签名方法v3。<br>•   默认接口请求频率限制：25次/秒，如您有提高请求频率限制的需求，请提[工单](https://console.cloud.tencent.com/workorder/category)进行咨询。
     * @param {SentenceRecognitionRequest} req
     * @param {function(string, SentenceRecognitionResponse):void} cb
     * @public
     */
    SentenceRecognition(req, cb) {
        let resp = new SentenceRecognitionResponse();
        this.request("SentenceRecognition", req, resp, cb);
    }

    /**
     * 用户通过该接口可以下载自学习模型的语料
     * @param {DownloadCustomizationRequest} req
     * @param {function(string, DownloadCustomizationResponse):void} cb
     * @public
     */
    DownloadCustomization(req, cb) {
        let resp = new DownloadCustomizationResponse();
        this.request("DownloadCustomization", req, resp, cb);
    }


}
module.exports = AsrClient;
