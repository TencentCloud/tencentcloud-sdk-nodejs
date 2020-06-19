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
const GetAsrVocabResponse = models.GetAsrVocabResponse;
const HotWord = models.HotWord;
const GetAsrVocabRequest = models.GetAsrVocabRequest;
const DescribeTaskStatusResponse = models.DescribeTaskStatusResponse;
const DownloadAsrVocabResponse = models.DownloadAsrVocabResponse;
const CreateRecTaskResponse = models.CreateRecTaskResponse;
const UpdateAsrVocabResponse = models.UpdateAsrVocabResponse;
const DeleteAsrVocabResponse = models.DeleteAsrVocabResponse;
const GetAsrVocabListRequest = models.GetAsrVocabListRequest;
const CreateRecTaskRequest = models.CreateRecTaskRequest;
const SentenceDetail = models.SentenceDetail;
const DownloadAsrVocabRequest = models.DownloadAsrVocabRequest;
const SetVocabStateRequest = models.SetVocabStateRequest;
const Vocab = models.Vocab;
const Task = models.Task;
const TaskStatus = models.TaskStatus;
const DeleteAsrVocabRequest = models.DeleteAsrVocabRequest;
const SentenceRecognitionRequest = models.SentenceRecognitionRequest;
const CreateAsrVocabRequest = models.CreateAsrVocabRequest;
const UpdateAsrVocabRequest = models.UpdateAsrVocabRequest;
const CreateAsrVocabResponse = models.CreateAsrVocabResponse;
const SentenceRecognitionResponse = models.SentenceRecognitionResponse;
const DescribeTaskStatusRequest = models.DescribeTaskStatusRequest;
const GetAsrVocabListResponse = models.GetAsrVocabListResponse;
const SentenceWords = models.SentenceWords;


/**
 * asr client
 * @class
 */
class AsrClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("asr.tencentcloudapi.com", "2019-06-14", credential, region, profile);
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
     * 本接口服务对时长5小时以内的录音文件进行识别，异步返回识别全部结果， HTTP RESTful 形式。
<br>• 支持中文普通话、英语和粤语
<br>• 支持通用、音视频领域
<br>• 支持wav、mp3、m4a的音频格式
<br>• 支持语音 URL 和本地语音文件两种请求方式
<br>• 语音 URL 的音频时长不能长于5小时，文件大小不超过512MB
<br>• 本地语音文件上传的文件不能大于5MB
<br>• 支持回调或轮询的方式获取结果，结果获取请参考[ 录音文件识别结果查询](https://cloud.tencent.com/document/product/1093/37822)。
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
<br>• 当采用回调方式时，识别完成后会将结果通过 POST 请求的形式通知到用户在请求时填写的回调 URL，具体请参见[ 录音识别结果回调 ](https://cloud.tencent.com/document/product/1093/37139#callback)。
<br>• 当采用轮询方式时，需要主动提交任务ID来轮询识别结果，共有任务成功、等待、执行中和失败四种结果，具体信息请参见下文说明。

     * @param {DescribeTaskStatusRequest} req
     * @param {function(string, DescribeTaskStatusResponse):void} cb
     * @public
     */
    DescribeTaskStatus(req, cb) {
        let resp = new DescribeTaskStatusResponse();
        this.request("DescribeTaskStatus", req, resp, cb);
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
     * 本接口用于对60秒之内的短音频文件进行识别。
<br>•   支持中文普通话、英语、粤语。
<br>•   支持本地语音文件上传和语音URL上传两种请求方式。
<br>•   音频格式支持wav、mp3；采样率支持8000Hz或者16000Hz；采样精度支持16bits；声道支持单声道。
<br>•   当音频文件通过请求中body内容上传时，请求大小不能超过600KB；当音频以URL方式传输时，音频时长不可超过60s。
<br>•   所有请求参数放在POST请求的body中，编码类型采用x-www-form-urlencoded，参数进行urlencode编码后传输。
     * @param {SentenceRecognitionRequest} req
     * @param {function(string, SentenceRecognitionResponse):void} cb
     * @public
     */
    SentenceRecognition(req, cb) {
        let resp = new SentenceRecognitionResponse();
        this.request("SentenceRecognition", req, resp, cb);
    }


}
module.exports = AsrClient;
