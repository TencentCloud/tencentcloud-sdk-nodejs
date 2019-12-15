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
const AbstractModel = require("../../common/abstract_model");

/**
 * CreateRecTask返回参数结构体
 * @class
 */
class CreateRecTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录音文件识别的请求返回结果，包含结果查询需要的TaskId
         * @type {Task || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            let obj = new Task();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 录音文件识别请求的返回数据
 * @class
 */
class Task extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID，可通过此ID在轮询接口获取识别状态与结果
         * @type {number || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DescribeTaskStatus请求参数结构体
 * @class
 */
class DescribeTaskStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 从CreateRecTask接口获取的TaskId，用于获取任务状态与结果。
         * @type {number || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * SentenceRecognition返回参数结构体
 * @class
 */
class SentenceRecognitionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别结果。
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 获取录音识别结果结果的返回参数
 * @class
 */
class TaskStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务标识。
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 任务状态码，0：任务等待，1：任务执行中，2：任务成功，3：任务失败。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 任务状态，waiting：任务等待，doing：任务执行中，success：任务成功，failed：任务失败。
         * @type {string || null}
         */
        this.StatusStr = null;

        /**
         * 识别结果。
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 失败原因说明。
         * @type {string || null}
         */
        this.ErrorMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusStr = 'StatusStr' in params ? params.StatusStr : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;

    }
}

/**
 * CreateRecTask请求参数结构体
 * @class
 */
class CreateRecTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 引擎模型类型。
8k_0：电话 8k 中文普通话通用，可用于双声道音频的识别；
8k_6：电话 8k 中文普通话话者分离，仅用于单声道；
16k_0：16k 中文普通话通用；
16k_en：16k 英语；
16k_ca：16k 粤语。
         * @type {string || null}
         */
        this.EngineModelType = null;

        /**
         * 语音声道数。1：单声道；2：双声道（仅在电话 8k 通用模型下支持）。
         * @type {number || null}
         */
        this.ChannelNum = null;

        /**
         * 识别结果文本编码方式。0：UTF-8。
         * @type {number || null}
         */
        this.ResTextFormat = null;

        /**
         * 语音数据来源。0：语音 URL；1：语音数据（post body）。
         * @type {number || null}
         */
        this.SourceType = null;

        /**
         * 回调 URL，用户自行搭建的用于接收识别结果的服务器地址， 长度小于2048字节。如果用户使用回调方式获取识别结果，需提交该参数；如果用户使用轮询方式获取识别结果，则无需提交该参数。
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * 语音的URL地址，需要公网可下载。长度小于2048字节，当 SourceType 值为 0 时须填写该字段，为 1 时不需要填写。注意：请确保录音文件时长在一个小时之内，否则可能识别失败。请保证文件的下载速度，否则可能下载失败。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 语音数据，当SourceType 值为1时必须填写，为0可不写。要base64编码(采用python语言时注意读取文件应该为string而不是byte，以byte格式读取后要decode()。编码后的数据不可带有回车换行符)。音频数据要小于5MB。
         * @type {string || null}
         */
        this.Data = null;

        /**
         * 数据长度，当 SourceType 值为1时必须填写，为0可不写（此数据长度为数据未进行base64编码时的数据长度）。
         * @type {number || null}
         */
        this.DataLen = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EngineModelType = 'EngineModelType' in params ? params.EngineModelType : null;
        this.ChannelNum = 'ChannelNum' in params ? params.ChannelNum : null;
        this.ResTextFormat = 'ResTextFormat' in params ? params.ResTextFormat : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.DataLen = 'DataLen' in params ? params.DataLen : null;

    }
}

/**
 * DescribeTaskStatus返回参数结构体
 * @class
 */
class DescribeTaskStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 录音文件识别的请求返回结果。
         * @type {TaskStatus || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            let obj = new TaskStatus();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SentenceRecognition请求参数结构体
 * @class
 */
class SentenceRecognitionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 腾讯云项目 ID，可填 0，总长度不超过 1024 字节。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 子服务类型。2： 一句话识别。
         * @type {number || null}
         */
        this.SubServiceType = null;

        /**
         * 引擎类型。
8k：电话 8k 中文普通话通用；
16k：16k 中文普通话通用；
16k_en：16k 英语；
16k_ca：16k 粤语。
         * @type {string || null}
         */
        this.EngSerViceType = null;

        /**
         * 语音数据来源。0：语音 URL；1：语音数据（post body）。
         * @type {number || null}
         */
        this.SourceType = null;

        /**
         * 识别音频的音频格式。mp3、wav。
         * @type {string || null}
         */
        this.VoiceFormat = null;

        /**
         * 用户端对此任务的唯一标识，用户自助生成，用于用户查找识别结果。
         * @type {string || null}
         */
        this.UsrAudioKey = null;

        /**
         * 语音 URL，公网可下载。当 SourceType 值为 0（语音 URL上传） 时须填写该字段，为 1 时不填；URL 的长度大于 0，小于 2048，需进行urlencode编码。音频时间长度要小于60s。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 语音数据，当SourceType 值为1（本地语音数据上传）时必须填写，当SourceType 值为0（语音 URL上传）可不写。要使用base64编码(采用python语言时注意读取文件应该为string而不是byte，以byte格式读取后要decode()。编码后的数据不可带有回车换行符)。音频数据要小于600KB。
         * @type {string || null}
         */
        this.Data = null;

        /**
         * 数据长度，单位为字节。当 SourceType 值为1（本地语音数据上传）时必须填写，当 SourceType 值为0（语音 URL上传）可不写（此数据长度为数据未进行base64编码时的数据长度）。
         * @type {number || null}
         */
        this.DataLen = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SubServiceType = 'SubServiceType' in params ? params.SubServiceType : null;
        this.EngSerViceType = 'EngSerViceType' in params ? params.EngSerViceType : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.VoiceFormat = 'VoiceFormat' in params ? params.VoiceFormat : null;
        this.UsrAudioKey = 'UsrAudioKey' in params ? params.UsrAudioKey : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.DataLen = 'DataLen' in params ? params.DataLen : null;

    }
}

module.exports = {
    CreateRecTaskResponse: CreateRecTaskResponse,
    Task: Task,
    DescribeTaskStatusRequest: DescribeTaskStatusRequest,
    SentenceRecognitionResponse: SentenceRecognitionResponse,
    TaskStatus: TaskStatus,
    CreateRecTaskRequest: CreateRecTaskRequest,
    DescribeTaskStatusResponse: DescribeTaskStatusResponse,
    SentenceRecognitionRequest: SentenceRecognitionRequest,

}
