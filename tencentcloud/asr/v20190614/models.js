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
 * SetVocabState返回参数结构体
 * @class
 */
class SetVocabStateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 热词表ID
         * @type {string || null}
         */
        this.VocabId = null;

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
        this.VocabId = 'VocabId' in params ? params.VocabId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetAsrVocab返回参数结构体
 * @class
 */
class GetAsrVocabResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 热词表名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 热词表描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 热词表ID
         * @type {string || null}
         */
        this.VocabId = null;

        /**
         * 词权重列表
         * @type {Array.<HotWord> || null}
         */
        this.WordWeights = null;

        /**
         * 词表创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 词表更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 热词表状态，1为默认状态即在识别时默认加载该热词表进行识别，0为初始状态
         * @type {number || null}
         */
        this.State = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.VocabId = 'VocabId' in params ? params.VocabId : null;

        if (params.WordWeights) {
            this.WordWeights = new Array();
            for (let z in params.WordWeights) {
                let obj = new HotWord();
                obj.deserialize(params.WordWeights[z]);
                this.WordWeights.push(obj);
            }
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.State = 'State' in params ? params.State : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 热词的词和权重
 * @class
 */
class HotWord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 热词
         * @type {string || null}
         */
        this.Word = null;

        /**
         * 权重
         * @type {number || null}
         */
        this.Weight = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Word = 'Word' in params ? params.Word : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

    }
}

/**
 * GetAsrVocab请求参数结构体
 * @class
 */
class GetAsrVocabRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 热词表ID
         * @type {string || null}
         */
        this.VocabId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VocabId = 'VocabId' in params ? params.VocabId : null;

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
 * DownloadAsrVocab返回参数结构体
 * @class
 */
class DownloadAsrVocabResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 词表ID。
         * @type {string || null}
         */
        this.VocabId = null;

        /**
         * 词表权重文件形式的base64值。
         * @type {string || null}
         */
        this.WordWeightStr = null;

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
        this.VocabId = 'VocabId' in params ? params.VocabId : null;
        this.WordWeightStr = 'WordWeightStr' in params ? params.WordWeightStr : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

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
 * UpdateAsrVocab返回参数结构体
 * @class
 */
class UpdateAsrVocabResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 热词表ID
         * @type {string || null}
         */
        this.VocabId = null;

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
        this.VocabId = 'VocabId' in params ? params.VocabId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAsrVocab返回参数结构体
 * @class
 */
class DeleteAsrVocabResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetAsrVocabList请求参数结构体
 * @class
 */
class GetAsrVocabListRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

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
电话场景：
• 8k_zh：电话 8k 中文普通话通用（可用于双声道音频）；
• 8k_zh_s：电话 8k 中文普通话话者分离（仅适用于单声道音频）；
非电话场景：
• 16k_zh：16k 中文普通话通用；
• 16k_zh_video：16k 音视频领域；
• 16k_en：16k 英语；
• 16k_ca：16k 粤语；
         * @type {string || null}
         */
        this.EngineModelType = null;

        /**
         * 语音声道数。1：单声道；2：双声道（仅支持 8k_zh 引擎模型）。
         * @type {number || null}
         */
        this.ChannelNum = null;

        /**
         * 识别结果返回形式。0： 识别结果文本(含分段时间戳)； 1：仅支持16k中文引擎，含识别结果详情(词时间戳列表，一般用于生成字幕场景)。
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

        /**
         * 热词id。用于调用对应的热词表，如果在调用语音识别服务时，不进行单独的热词id设置，自动生效默认热词；如果进行了单独的热词id设置，那么将生效单独设置的热词id。
         * @type {string || null}
         */
        this.HotwordId = null;

        /**
         * 是否过滤脏词（目前支持中文普通话引擎）。0：不过滤脏词；1：过滤脏词；2：将脏词替换为 * 。默认值为 0。
         * @type {number || null}
         */
        this.FilterDirty = null;

        /**
         * 是否过语气词（目前支持中文普通话引擎）。0：不过滤语气词；1：部分过滤；2：严格过滤 。默认值为 0。
         * @type {number || null}
         */
        this.FilterModal = null;

        /**
         * 是否进行阿拉伯数字智能转换（目前支持中文普通话引擎）。0：不转换，直接输出中文数字，1：根据场景智能转换为阿拉伯数字。默认值为 1。
         * @type {number || null}
         */
        this.ConvertNumMode = null;

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
        this.HotwordId = 'HotwordId' in params ? params.HotwordId : null;
        this.FilterDirty = 'FilterDirty' in params ? params.FilterDirty : null;
        this.FilterModal = 'FilterModal' in params ? params.FilterModal : null;
        this.ConvertNumMode = 'ConvertNumMode' in params ? params.ConvertNumMode : null;

    }
}

/**
 * 单句的详细识别结果，包含单个词的时间偏移，一般用于生成字幕的场景。
 * @class
 */
class SentenceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单句最终识别结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FinalSentence = null;

        /**
         * 单句中间识别结果，使用空格拆分为多个词
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SliceSentence = null;

        /**
         * 单句开始时间（毫秒）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StartMs = null;

        /**
         * 单句结束时间（毫秒）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EndMs = null;

        /**
         * 单句中词个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.WordsNum = null;

        /**
         * 单句中词详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SentenceWords> || null}
         */
        this.Words = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FinalSentence = 'FinalSentence' in params ? params.FinalSentence : null;
        this.SliceSentence = 'SliceSentence' in params ? params.SliceSentence : null;
        this.StartMs = 'StartMs' in params ? params.StartMs : null;
        this.EndMs = 'EndMs' in params ? params.EndMs : null;
        this.WordsNum = 'WordsNum' in params ? params.WordsNum : null;

        if (params.Words) {
            this.Words = new Array();
            for (let z in params.Words) {
                let obj = new SentenceWords();
                obj.deserialize(params.Words[z]);
                this.Words.push(obj);
            }
        }

    }
}

/**
 * DownloadAsrVocab请求参数结构体
 * @class
 */
class DownloadAsrVocabRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 词表ID。
         * @type {string || null}
         */
        this.VocabId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VocabId = 'VocabId' in params ? params.VocabId : null;

    }
}

/**
 * SetVocabState请求参数结构体
 * @class
 */
class SetVocabStateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 热词表ID。
         * @type {string || null}
         */
        this.VocabId = null;

        /**
         * 热词表状态，1：设为默认状态；0：设为非默认状态。
         * @type {number || null}
         */
        this.State = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VocabId = 'VocabId' in params ? params.VocabId : null;
        this.State = 'State' in params ? params.State : null;

    }
}

/**
 * 词表内容
 * @class
 */
class Vocab extends  AbstractModel {
    constructor(){
        super();

        /**
         * 热词表名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 热词表描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 热词表ID
         * @type {string || null}
         */
        this.VocabId = null;

        /**
         * 词权重列表
         * @type {Array.<HotWord> || null}
         */
        this.WordWeights = null;

        /**
         * 词表创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 词表更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 热词表状态，1为默认状态即在识别时默认加载该热词表进行识别，0为初始状态
         * @type {number || null}
         */
        this.State = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.VocabId = 'VocabId' in params ? params.VocabId : null;

        if (params.WordWeights) {
            this.WordWeights = new Array();
            for (let z in params.WordWeights) {
                let obj = new HotWord();
                obj.deserialize(params.WordWeights[z]);
                this.WordWeights.push(obj);
            }
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.State = 'State' in params ? params.State : null;

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

        /**
         * 识别结果详情，包含每个句子中的词时间偏移，一般用于生成字幕的场景。(录音识别请求中ResTextFormat=1时该字段不为空)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SentenceDetail> || null}
         */
        this.ResultDetail = null;

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

        if (params.ResultDetail) {
            this.ResultDetail = new Array();
            for (let z in params.ResultDetail) {
                let obj = new SentenceDetail();
                obj.deserialize(params.ResultDetail[z]);
                this.ResultDetail.push(obj);
            }
        }

    }
}

/**
 * DeleteAsrVocab请求参数结构体
 * @class
 */
class DeleteAsrVocabRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 热词表Id
         * @type {string || null}
         */
        this.VocabId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VocabId = 'VocabId' in params ? params.VocabId : null;

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
         * 引擎模型类型。
8k_zh：电话 8k 中文普通话通用；
16k_zh：16k 中文普通话通用；
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

        /**
         * 热词id。用于调用对应的热词表，如果在调用语音识别服务时，不进行单独的热词id设置，自动生效默认热词；如果进行了单独的热词id设置，那么将生效单独设置的热词id。
         * @type {string || null}
         */
        this.HotwordId = null;

        /**
         * 是否过滤脏词（目前支持中文普通话引擎）。0：不过滤脏词；1：过滤脏词；2：将脏词替换为 * 。
         * @type {number || null}
         */
        this.FilterDirty = null;

        /**
         * 是否过语气词（目前支持中文普通话引擎）。0：不过滤语气词；1：部分过滤；2：严格过滤 。
         * @type {number || null}
         */
        this.FilterModal = null;

        /**
         * 是否过滤句末的句号（目前支持中文普通话引擎）。0：不过滤句末的句号；1：过滤句末的句号。
         * @type {number || null}
         */
        this.FilterPunc = null;

        /**
         * 是否进行阿拉伯数字智能转换。0：不转换，直接输出中文数字，1：根据场景智能转换为阿拉伯数字。默认值为1
         * @type {number || null}
         */
        this.ConvertNumMode = null;

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
        this.HotwordId = 'HotwordId' in params ? params.HotwordId : null;
        this.FilterDirty = 'FilterDirty' in params ? params.FilterDirty : null;
        this.FilterModal = 'FilterModal' in params ? params.FilterModal : null;
        this.FilterPunc = 'FilterPunc' in params ? params.FilterPunc : null;
        this.ConvertNumMode = 'ConvertNumMode' in params ? params.ConvertNumMode : null;

    }
}

/**
 * CreateAsrVocab请求参数结构体
 * @class
 */
class CreateAsrVocabRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 热词表名称，长度在1-255之间
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 热词表描述，长度在0-1000之间
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 词权重数组，包含全部的热词和对应的权重。每个热词的长度不大于10，权重为[1,10]之间整数，数组长度不大于128
         * @type {Array.<HotWord> || null}
         */
        this.WordWeights = null;

        /**
         * 词权重文件（纯文本文件）的二进制base64编码，以行分隔，每行的格式为word|weight，即以英文符号|为分割，左边为词，右边为权重，如：你好|5。
当用户传此参数（参数长度大于0），即以此参数解析词权重，WordWeights会被忽略
         * @type {string || null}
         */
        this.WordWeightStr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.WordWeights) {
            this.WordWeights = new Array();
            for (let z in params.WordWeights) {
                let obj = new HotWord();
                obj.deserialize(params.WordWeights[z]);
                this.WordWeights.push(obj);
            }
        }
        this.WordWeightStr = 'WordWeightStr' in params ? params.WordWeightStr : null;

    }
}

/**
 * UpdateAsrVocab请求参数结构体
 * @class
 */
class UpdateAsrVocabRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 热词表ID
         * @type {string || null}
         */
        this.VocabId = null;

        /**
         * 热词表名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 词权重数组，包含全部的热词和对应的权重。每个热词的长度不大于10，权重为[1,10]之间整数，数组长度不大于128
         * @type {Array.<HotWord> || null}
         */
        this.WordWeights = null;

        /**
         * 词权重文件（纯文本文件）的二进制base64编码，以行分隔，每行的格式为word|weight，即以英文符号|为分割，左边为词，右边为权重，如：你好|5。
当用户传此参数（参数长度大于0），即以此参数解析词权重，WordWeights会被忽略
         * @type {string || null}
         */
        this.WordWeightStr = null;

        /**
         * 热词表描述
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VocabId = 'VocabId' in params ? params.VocabId : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.WordWeights) {
            this.WordWeights = new Array();
            for (let z in params.WordWeights) {
                let obj = new HotWord();
                obj.deserialize(params.WordWeights[z]);
                this.WordWeights.push(obj);
            }
        }
        this.WordWeightStr = 'WordWeightStr' in params ? params.WordWeightStr : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * CreateAsrVocab返回参数结构体
 * @class
 */
class CreateAsrVocabResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 词表ID，可用于获取词表信息
         * @type {string || null}
         */
        this.VocabId = null;

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
        this.VocabId = 'VocabId' in params ? params.VocabId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * GetAsrVocabList返回参数结构体
 * @class
 */
class GetAsrVocabListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 热词表列表
         * @type {Array.<Vocab> || null}
         */
        this.VocabList = null;

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

        if (params.VocabList) {
            this.VocabList = new Array();
            for (let z in params.VocabList) {
                let obj = new Vocab();
                obj.deserialize(params.VocabList[z]);
                this.VocabList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 识别结果中词文本，以及对应时间偏移
 * @class
 */
class SentenceWords extends  AbstractModel {
    constructor(){
        super();

        /**
         * 词文本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Word = null;

        /**
         * 在句子中的开始时间偏移量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OffsetStartMs = null;

        /**
         * 在句子中的结束时间偏移量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OffsetEndMs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Word = 'Word' in params ? params.Word : null;
        this.OffsetStartMs = 'OffsetStartMs' in params ? params.OffsetStartMs : null;
        this.OffsetEndMs = 'OffsetEndMs' in params ? params.OffsetEndMs : null;

    }
}

module.exports = {
    SetVocabStateResponse: SetVocabStateResponse,
    GetAsrVocabResponse: GetAsrVocabResponse,
    HotWord: HotWord,
    GetAsrVocabRequest: GetAsrVocabRequest,
    DescribeTaskStatusResponse: DescribeTaskStatusResponse,
    DownloadAsrVocabResponse: DownloadAsrVocabResponse,
    CreateRecTaskResponse: CreateRecTaskResponse,
    UpdateAsrVocabResponse: UpdateAsrVocabResponse,
    DeleteAsrVocabResponse: DeleteAsrVocabResponse,
    GetAsrVocabListRequest: GetAsrVocabListRequest,
    CreateRecTaskRequest: CreateRecTaskRequest,
    SentenceDetail: SentenceDetail,
    DownloadAsrVocabRequest: DownloadAsrVocabRequest,
    SetVocabStateRequest: SetVocabStateRequest,
    Vocab: Vocab,
    Task: Task,
    TaskStatus: TaskStatus,
    DeleteAsrVocabRequest: DeleteAsrVocabRequest,
    SentenceRecognitionRequest: SentenceRecognitionRequest,
    CreateAsrVocabRequest: CreateAsrVocabRequest,
    UpdateAsrVocabRequest: UpdateAsrVocabRequest,
    CreateAsrVocabResponse: CreateAsrVocabResponse,
    SentenceRecognitionResponse: SentenceRecognitionResponse,
    DescribeTaskStatusRequest: DescribeTaskStatusRequest,
    GetAsrVocabListResponse: GetAsrVocabListResponse,
    SentenceWords: SentenceWords,

}
