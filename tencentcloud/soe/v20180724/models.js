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
 * 语音过程中断句的中间结果
 * @class
 */
class SentenceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 句子序号，在段落、自由说模式下有效，表示断句序号，最后的综合结果的为-1.
         * @type {number || null}
         */
        this.SentenceId = null;

        /**
         * 详细发音评估结果
         * @type {Array.<WordRsp> || null}
         */
        this.Words = null;

        /**
         * 发音精准度，取值范围[-1, 100]，当取-1时指完全不匹配，当为句子模式时，是所有已识别单词准确度的加权平均值，在reftext中但未识别出来的词不计入分数中。
         * @type {number || null}
         */
        this.PronAccuracy = null;

        /**
         * 发音流利度，取值范围[0, 1]，当为词模式时，取值无意义；当为流式模式且请求中IsEnd未置1时，取值无意义
         * @type {number || null}
         */
        this.PronFluency = null;

        /**
         * 发音完整度，取值范围[0, 1]，当为词模式时，取值无意义；当为流式模式且请求中IsEnd未置1时，取值无意义
         * @type {number || null}
         */
        this.PronCompletion = null;

        /**
         * 建议评分，取值范围[0,100]，评分方式为建议评分 = 准确度（PronAccuracyfloat）* 完整度（PronCompletionfloat）*（2 - 完整度（PronCompletionfloat）），如若评分策略不符合请参考Words数组中的详细分数自定义评分逻辑。
         * @type {number || null}
         */
        this.SuggestedScore = null;

        /**
         * 匹配候选文本的序号，在句子多分支、情景对 话、段落模式下表示匹配到的文本序号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RefTextId = null;

        /**
         * 主题词命中标志，0表示没命中，1表示命中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.KeyWordHits = null;

        /**
         * 负向主题词命中标志，0表示没命中，1表示命中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.UnKeyWordHits = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SentenceId = 'SentenceId' in params ? params.SentenceId : null;

        if (params.Words) {
            this.Words = new Array();
            for (let z in params.Words) {
                let obj = new WordRsp();
                obj.deserialize(params.Words[z]);
                this.Words.push(obj);
            }
        }
        this.PronAccuracy = 'PronAccuracy' in params ? params.PronAccuracy : null;
        this.PronFluency = 'PronFluency' in params ? params.PronFluency : null;
        this.PronCompletion = 'PronCompletion' in params ? params.PronCompletion : null;
        this.SuggestedScore = 'SuggestedScore' in params ? params.SuggestedScore : null;
        this.RefTextId = 'RefTextId' in params ? params.RefTextId : null;
        this.KeyWordHits = 'KeyWordHits' in params ? params.KeyWordHits : null;
        this.UnKeyWordHits = 'UnKeyWordHits' in params ? params.UnKeyWordHits : null;

    }
}

/**
 * InitOralProcess请求参数结构体
 * @class
 */
class InitOralProcessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语音段唯一标识，一段完整语音使用一个SessionId，不同语音段的评测需要使用不同的SessionId。一般使用uuid(通用唯一识别码)来作为它的值，要尽量保证SessionId的唯一性。
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 被评估语音对应的文本，仅支持中文和英文。
句子模式下不超过个 30 单词或者中文文字，段落模式不超过 120 单词或者中文文字，中文评估使用 utf-8 编码，自由说模式RefText可以不填。
关于RefText的文本键入要求，请参考[评测模式介绍](https://cloud.tencent.com/document/product/884/56131)。
如需要在评测模式下使用自定义注音（支持中英文），可以通过设置「TextMode」参数实现，设置方式请参考[音素标注](https://cloud.tencent.com/document/product/884/33698)。
         * @type {string || null}
         */
        this.RefText = null;

        /**
         * 语音输入模式
0：流式分片
1：非流式一次性评估
推荐使用流式分片传输。
         * @type {number || null}
         */
        this.WorkMode = null;

        /**
         * 评测模式
0：单词/单字模式（中文评测模式下为单字模式）
1：句子模式
2：段落模式
3：自由说模式
4：单词音素纠错模式
5：情景评测模式
6：句子多分支评测模式
7：单词实时评测模式
8：拼音评测模式
关于每种评测模式的详细介绍，以及适用场景，请参考[评测模式介绍](https://cloud.tencent.com/document/product/884/56131)。
         * @type {number || null}
         */
        this.EvalMode = null;

        /**
         * 评价苛刻指数。取值为[1.0 - 4.0]范围内的浮点数，用于平滑不同年龄段的分数。
1.0：适用于最小年龄段用户，一般对应儿童应用场景；
4.0：适用于最高年龄段用户，一般对应成人严格打分场景。苛刻度影响范围参考：[苛刻度影响范围](https://cloud.tencent.com/document/product/884/78824#.E8.8B.9B.E5.88.BB.E5.BA.A6)
         * @type {number || null}
         */
        this.ScoreCoeff = null;

        /**
         * 业务应用ID，与账号应用APPID无关，是用来方便客户管理服务的参数，新的 SoeAppId 可以在[控制台](https://console.cloud.tencent.com/soe)【应用管理】下新建。如果没有新建SoeAppId，请勿填入该参数，否则会报欠费错误。使用指南：[业务应用](https://cloud.tencent.com/document/product/884/78824#.E4.B8.9A.E5.8A.A1.E5.BA.94.E7.94.A8)
         * @type {string || null}
         */
        this.SoeAppId = null;

        /**
         * 长效session标识，当该参数为1时，session的持续时间为300s，但会一定程度上影响第一个数据包的返回速度，且TransmitOralProcess必须同时为1才可生效。
         * @type {number || null}
         */
        this.IsLongLifeSession = null;

        /**
         * 音频存储模式，此参数已废弃，无需设置，设置与否都默认为0不存储；
注：有存储需求的用户建议自行存储至腾讯云COS[对象存储](https://cloud.tencent.com/product/cos)使用。
         * @type {number || null}
         */
        this.StorageMode = null;

        /**
         * 输出断句中间结果标识
0：不输出
1：输出，通过设置该参数
可以在评估过程中的分片传输请求中，返回已经评估断句的中间结果，中间结果可用于客户端 UI 更新，输出结果为TransmitOralProcess请求返回结果 SentenceInfoSet 字段。
         * @type {number || null}
         */
        this.SentenceInfoEnabled = null;

        /**
         * 评估语言
0：英文（默认）
1：中文
         * @type {number || null}
         */
        this.ServerType = null;

        /**
         * 异步模式标识
0：同步模式
1：异步模式（一般情况不建议使用异步模式）
可选值参考[服务模式](https://cloud.tencent.com/document/product/884/33697)。
         * @type {number || null}
         */
        this.IsAsync = null;

        /**
         * 输入文本模式
0: 普通文本
1：[音素结构](https://cloud.tencent.com/document/product/884/33698)文本
         * @type {number || null}
         */
        this.TextMode = null;

        /**
         * 主题词和关键词
         * @type {string || null}
         */
        this.Keyword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.RefText = 'RefText' in params ? params.RefText : null;
        this.WorkMode = 'WorkMode' in params ? params.WorkMode : null;
        this.EvalMode = 'EvalMode' in params ? params.EvalMode : null;
        this.ScoreCoeff = 'ScoreCoeff' in params ? params.ScoreCoeff : null;
        this.SoeAppId = 'SoeAppId' in params ? params.SoeAppId : null;
        this.IsLongLifeSession = 'IsLongLifeSession' in params ? params.IsLongLifeSession : null;
        this.StorageMode = 'StorageMode' in params ? params.StorageMode : null;
        this.SentenceInfoEnabled = 'SentenceInfoEnabled' in params ? params.SentenceInfoEnabled : null;
        this.ServerType = 'ServerType' in params ? params.ServerType : null;
        this.IsAsync = 'IsAsync' in params ? params.IsAsync : null;
        this.TextMode = 'TextMode' in params ? params.TextMode : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * 评测关键词
 * @class
 */
class Keyword extends  AbstractModel {
    constructor(){
        super();

        /**
         * 被评估语音对应的文本，句子模式下不超过 20个单词或者中文文字，段落模式不超过 120个单词或者中文文字，中文文字需使用 utf-8 编码，自由说模式RefText可以不填。如需要在单词模式和句子模式下使用自定义音素，可以通过设置 TextMode 使用[音素标注](https://cloud.tencent.com/document/product/884/33698)。
         * @type {string || null}
         */
        this.RefText = null;

        /**
         * 评估模式，0：词模式（中文评测模式下为文字模式），1：句子模式，2：段落模式，3：自由说模式，当为词模式评估时，能够提供每个音节的评估信息，当为句子模式时，能够提供完整度和流利度信息。
         * @type {number || null}
         */
        this.EvalMode = null;

        /**
         * 评价苛刻指数，取值为[1.0 - 4.0]范围内的浮点数，用于平滑不同年龄段的分数，1.0为小年龄段，4.0为最高年龄段
         * @type {number || null}
         */
        this.ScoreCoeff = null;

        /**
         * 评估语言，0：英文，1：中文。
ServerType不填默认为0
         * @type {number || null}
         */
        this.ServerType = null;

        /**
         * 输入文本模式，0: 普通文本，1：[音素结构](https://cloud.tencent.com/document/product/884/33698)文本。
         * @type {number || null}
         */
        this.TextMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RefText = 'RefText' in params ? params.RefText : null;
        this.EvalMode = 'EvalMode' in params ? params.EvalMode : null;
        this.ScoreCoeff = 'ScoreCoeff' in params ? params.ScoreCoeff : null;
        this.ServerType = 'ServerType' in params ? params.ServerType : null;
        this.TextMode = 'TextMode' in params ? params.TextMode : null;

    }
}

/**
 * KeywordEvaluate请求参数结构体
 * @class
 */
class KeywordEvaluateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流式数据包的序号，从1开始，当IsEnd字段为1后后续序号无意义，非流式模式时无意义。
注意：序号上限为3000，不能超过上限。
         * @type {number || null}
         */
        this.SeqId = null;

        /**
         * 是否传输完毕标志，若为0表示未完毕，若为1则传输完毕开始评估，非流式模式下无意义。
         * @type {number || null}
         */
        this.IsEnd = null;

        /**
         * 语音文件类型
1: raw/pcm
2: wav
3: mp3
4: speex
[音频上传格式](https://cloud.tencent.com/document/product/884/56132)
         * @type {number || null}
         */
        this.VoiceFileType = null;

        /**
         * 语音编码类型
1:pcm
         * @type {number || null}
         */
        this.VoiceEncodeType = null;

        /**
         * 当前语音数据, 编码格式要求为BASE64且必须保证分片帧完整（16bit的数据必须保证音频长度为偶数）。格式要求参考[音频上传格式](https://cloud.tencent.com/document/product/884/56132)
流式模式下需要将语音数据进行分片处理，参考：[分片大小设置](https://cloud.tencent.com/document/product/884/78985#.E5.88.86.E7.89.87.E5.A4.A7.E5.B0.8F.E8.AE.BE.E7.BD.AE.E4.B8.BA.E5.A4.9A.E5.A4.A7.E6.AF.94.E8.BE.83.E5.90.88.E9.80.82.3F)
如何进行流式分片参考：[流式评测](https://cloud.tencent.com/document/product/884/78824#.E6.B5.81.E5.BC.8F.E8.AF.84.E6.B5.8B)
         * @type {string || null}
         */
        this.UserVoiceData = null;

        /**
         * 语音段唯一标识，一段完整语音使用一个SessionId，不同语音段的评测需要使用不同的SessionId。一般使用uuid(通用唯一识别码)来作为它的值，要尽量保证SessionId的唯一性。
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 关键词列表
         * @type {Array.<Keyword> || null}
         */
        this.Keywords = null;

        /**
         * 业务应用ID，与账号应用APPID无关，是用来方便客户管理服务的参数，新的 SoeAppId 可以在[控制台](https://console.cloud.tencent.com/soe)【应用管理】下新建。如果没有新建SoeAppId，请勿填入该参数，否则会报欠费错误。使用指南：[业务应用](https://cloud.tencent.com/document/product/884/78824#.E4.B8.9A.E5.8A.A1.E5.BA.94.E7.94.A8)
         * @type {string || null}
         */
        this.SoeAppId = null;

        /**
         * 查询标识，当该参数为1时，该请求为查询请求，请求返回该 Session 评估结果。
         * @type {number || null}
         */
        this.IsQuery = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SeqId = 'SeqId' in params ? params.SeqId : null;
        this.IsEnd = 'IsEnd' in params ? params.IsEnd : null;
        this.VoiceFileType = 'VoiceFileType' in params ? params.VoiceFileType : null;
        this.VoiceEncodeType = 'VoiceEncodeType' in params ? params.VoiceEncodeType : null;
        this.UserVoiceData = 'UserVoiceData' in params ? params.UserVoiceData : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;

        if (params.Keywords) {
            this.Keywords = new Array();
            for (let z in params.Keywords) {
                let obj = new Keyword();
                obj.deserialize(params.Keywords[z]);
                this.Keywords.push(obj);
            }
        }
        this.SoeAppId = 'SoeAppId' in params ? params.SoeAppId : null;
        this.IsQuery = 'IsQuery' in params ? params.IsQuery : null;

    }
}

/**
 * TransmitOralProcess请求参数结构体
 * @class
 */
class TransmitOralProcessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流式数据包的序号，从1开始，当IsEnd字段为1后后续序号无意义，当IsLongLifeSession不为1且为非流式模式时无意义。
注意：序号上限为3000，不能超过上限。
         * @type {number || null}
         */
        this.SeqId = null;

        /**
         * 是否传输完毕标志，若为0表示未完毕，若为1则传输完毕开始评估，非流式模式下无意义。
         * @type {number || null}
         */
        this.IsEnd = null;

        /**
         * 1: raw/pcm
2: wav
3: mp3
4: speex
[音频上传格式](https://cloud.tencent.com/document/product/884/56132)
         * @type {number || null}
         */
        this.VoiceFileType = null;

        /**
         * 语音编码类型
1:pcm
         * @type {number || null}
         */
        this.VoiceEncodeType = null;

        /**
         * 当前语音数据, 编码格式要求为BASE64且必须保证分片帧完整（16bit的数据必须保证音频长度为偶数）。格式要求参考[音频上传格式](https://cloud.tencent.com/document/product/884/56132)
流式模式下需要将语音数据进行分片处理，参考：[分片大小设置](https://cloud.tencent.com/document/product/884/78985#.E5.88.86.E7.89.87.E5.A4.A7.E5.B0.8F.E8.AE.BE.E7.BD.AE.E4.B8.BA.E5.A4.9A.E5.A4.A7.E6.AF.94.E8.BE.83.E5.90.88.E9.80.82.3F)
如何进行流式分片参考：[流式评测](https://cloud.tencent.com/document/product/884/78824#.E6.B5.81.E5.BC.8F.E8.AF.84.E6.B5.8B)
         * @type {string || null}
         */
        this.UserVoiceData = null;

        /**
         * 语音段唯一标识，一段完整语音使用一个SessionId，不同语音段的评测需要使用不同的SessionId。一般使用uuid(通用唯一识别码)来作为它的值，要尽量保证SessionId的唯一性。
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 业务应用ID，与账号应用APPID无关，是用来方便客户管理服务的参数，新的 SoeAppId 可以在[控制台](https://console.cloud.tencent.com/soe)【应用管理】下新建。如果没有新建SoeAppId，请勿填入该参数，否则会报欠费错误。使用指南：[业务应用](https://cloud.tencent.com/document/product/884/78824#.E4.B8.9A.E5.8A.A1.E5.BA.94.E7.94.A8)
         * @type {string || null}
         */
        this.SoeAppId = null;

        /**
         * 长效session标识，当该参数为1时，session的持续时间为300s，但会一定程度上影响第一个数据包的返回速度。当InitOralProcess接口调用时此项为1时，此项必填1才可生效。
         * @type {number || null}
         */
        this.IsLongLifeSession = null;

        /**
         * 查询标识，当该参数为1时，该请求为查询请求，请求返回该 Session 的评估结果。
         * @type {number || null}
         */
        this.IsQuery = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SeqId = 'SeqId' in params ? params.SeqId : null;
        this.IsEnd = 'IsEnd' in params ? params.IsEnd : null;
        this.VoiceFileType = 'VoiceFileType' in params ? params.VoiceFileType : null;
        this.VoiceEncodeType = 'VoiceEncodeType' in params ? params.VoiceEncodeType : null;
        this.UserVoiceData = 'UserVoiceData' in params ? params.UserVoiceData : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SoeAppId = 'SoeAppId' in params ? params.SoeAppId : null;
        this.IsLongLifeSession = 'IsLongLifeSession' in params ? params.IsLongLifeSession : null;
        this.IsQuery = 'IsQuery' in params ? params.IsQuery : null;

    }
}

/**
 * TransmitOralProcess返回参数结构体
 * @class
 */
class TransmitOralProcessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发音精准度，取值范围[-1, 100]，当取-1时指完全不匹配，当为句子模式时，是所有已识别单词准确度的加权平均值，在reftext中但未识别出来的词不计入分数中。当为流式模式且请求中IsEnd未置1时，取值无意义。
         * @type {number || null}
         */
        this.PronAccuracy = null;

        /**
         * 发音流利度，取值范围[0, 1]，当为词模式时，取值无意义；当为流式模式且请求中IsEnd未置1时，取值无意义。取值无意义时，值为-1
         * @type {number || null}
         */
        this.PronFluency = null;

        /**
         * 发音完整度，取值范围[0, 1]，当为词模式或自由说模式时，取值无意义；当为流式模式且请求中IsEnd未置1时，取值无意义。取值无意义时，值为-1
         * @type {number || null}
         */
        this.PronCompletion = null;

        /**
         * 详细发音评估结果
         * @type {Array.<WordRsp> || null}
         */
        this.Words = null;

        /**
         * 语音段唯一标识，一段语音一个SessionId
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 已废弃，不再保存语音音频文件下载地址
         * @type {string || null}
         */
        this.AudioUrl = null;

        /**
         * 断句中间结果，中间结果是局部最优而非全局最优的结果，所以中间结果有可能和最终整体结果对应部分不一致；中间结果的输出便于客户端UI更新；待用户发音完全结束后，系统会给出一个综合所有句子的整体结果。
         * @type {Array.<SentenceInfo> || null}
         */
        this.SentenceInfoSet = null;

        /**
         * 评估 session 状态，“Evaluating"：评估中、"Failed"：评估失败、"Finished"：评估完成
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 建议评分，取值范围[0,100]，评分方式为建议评分 = 准确度（PronAccuracy）× 完整度（PronCompletion）×（2 - 完整度（PronCompletion）），如若评分策略不符合请参考Words数组中的详细分数自定义评分逻辑。
         * @type {number || null}
         */
        this.SuggestedScore = null;

        /**
         * 匹配候选文本的序号，在句子多分支、情景对 话、段落模式下表示匹配到的文本序号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RefTextId = null;

        /**
         * 主题词命中标志，0表示没命中，1表示命中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.KeyWordHits = null;

        /**
         * 负向主题词命中标志，0表示没命中，1表示命中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.UnKeyWordHits = null;

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
        this.PronAccuracy = 'PronAccuracy' in params ? params.PronAccuracy : null;
        this.PronFluency = 'PronFluency' in params ? params.PronFluency : null;
        this.PronCompletion = 'PronCompletion' in params ? params.PronCompletion : null;

        if (params.Words) {
            this.Words = new Array();
            for (let z in params.Words) {
                let obj = new WordRsp();
                obj.deserialize(params.Words[z]);
                this.Words.push(obj);
            }
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.AudioUrl = 'AudioUrl' in params ? params.AudioUrl : null;

        if (params.SentenceInfoSet) {
            this.SentenceInfoSet = new Array();
            for (let z in params.SentenceInfoSet) {
                let obj = new SentenceInfo();
                obj.deserialize(params.SentenceInfoSet[z]);
                this.SentenceInfoSet.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.SuggestedScore = 'SuggestedScore' in params ? params.SuggestedScore : null;
        this.RefTextId = 'RefTextId' in params ? params.RefTextId : null;
        this.KeyWordHits = 'KeyWordHits' in params ? params.KeyWordHits : null;
        this.UnKeyWordHits = 'UnKeyWordHits' in params ? params.UnKeyWordHits : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InitOralProcess返回参数结构体
 * @class
 */
class InitOralProcessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语音段唯一标识，一个完整语音一个SessionId
         * @type {string || null}
         */
        this.SessionId = null;

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
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * KeywordEvaluate返回参数结构体
 * @class
 */
class KeywordEvaluateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 关键词得分
         * @type {Array.<KeywordScore> || null}
         */
        this.KeywordScores = null;

        /**
         * 语音段唯一标识，一段完整语音使用一个SessionId，不同语音段的评测需要使用不同的SessionId。一般使用uuid(通用唯一识别码)来作为它的值，要尽量保证SessionId的唯一性。
         * @type {string || null}
         */
        this.SessionId = null;

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

        if (params.KeywordScores) {
            this.KeywordScores = new Array();
            for (let z in params.KeywordScores) {
                let obj = new KeywordScore();
                obj.deserialize(params.KeywordScores[z]);
                this.KeywordScores.push(obj);
            }
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 单音节评价结果
 * @class
 */
class PhoneInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前音节语音起始时间点，单位为ms
         * @type {number || null}
         */
        this.MemBeginTime = null;

        /**
         * 当前音节语音终止时间点，单位为ms
         * @type {number || null}
         */
        this.MemEndTime = null;

        /**
         * 音节发音准确度，取值范围[-1, 100]，当取-1时指完全不匹配
         * @type {number || null}
         */
        this.PronAccuracy = null;

        /**
         * 当前音节是否检测为重音
         * @type {boolean || null}
         */
        this.DetectedStress = null;

        /**
         * 当前音节，当前评测识别的音素
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 当前音节是否应为重音
         * @type {boolean || null}
         */
        this.Stress = null;

        /**
         * 参考音素，在单词诊断模式下，代表标准音素
         * @type {string || null}
         */
        this.ReferencePhone = null;

        /**
         * 当前词与输入语句的匹配情况，0：匹配单词、1：新增单词、2：缺少单词、3：错读的词、4：未录入单词。
         * @type {number || null}
         */
        this.MatchTag = null;

        /**
         * 参考字符，在单词诊断模式下，代表音素对应的原始文本
         * @type {string || null}
         */
        this.ReferenceLetter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemBeginTime = 'MemBeginTime' in params ? params.MemBeginTime : null;
        this.MemEndTime = 'MemEndTime' in params ? params.MemEndTime : null;
        this.PronAccuracy = 'PronAccuracy' in params ? params.PronAccuracy : null;
        this.DetectedStress = 'DetectedStress' in params ? params.DetectedStress : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Stress = 'Stress' in params ? params.Stress : null;
        this.ReferencePhone = 'ReferencePhone' in params ? params.ReferencePhone : null;
        this.MatchTag = 'MatchTag' in params ? params.MatchTag : null;
        this.ReferenceLetter = 'ReferenceLetter' in params ? params.ReferenceLetter : null;

    }
}

/**
 * 单词评分细则
 * @class
 */
class WordRsp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前单词语音起始时间点，单位为ms，该字段段落模式下无意义。
         * @type {number || null}
         */
        this.MemBeginTime = null;

        /**
         * 当前单词语音终止时间点，单位为ms，该字段段落模式下无意义。
         * @type {number || null}
         */
        this.MemEndTime = null;

        /**
         * 单词发音准确度，取值范围[-1, 100]，当取-1时指完全不匹配
         * @type {number || null}
         */
        this.PronAccuracy = null;

        /**
         * 单词发音流利度，取值范围[0, 1]
         * @type {number || null}
         */
        this.PronFluency = null;

        /**
         * 当前词
         * @type {string || null}
         */
        this.Word = null;

        /**
         * 当前词与输入语句的匹配情况，0：匹配单词、1：新增单词、2：缺少单词、3：错读的词、4：未录入单词。
         * @type {number || null}
         */
        this.MatchTag = null;

        /**
         * 音节评估详情
         * @type {Array.<PhoneInfo> || null}
         */
        this.PhoneInfos = null;

        /**
         * 参考词，目前为保留字段。
         * @type {string || null}
         */
        this.ReferenceWord = null;

        /**
         * 主题词命中标志，0表示没命中，1表示命中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.KeywordTag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemBeginTime = 'MemBeginTime' in params ? params.MemBeginTime : null;
        this.MemEndTime = 'MemEndTime' in params ? params.MemEndTime : null;
        this.PronAccuracy = 'PronAccuracy' in params ? params.PronAccuracy : null;
        this.PronFluency = 'PronFluency' in params ? params.PronFluency : null;
        this.Word = 'Word' in params ? params.Word : null;
        this.MatchTag = 'MatchTag' in params ? params.MatchTag : null;

        if (params.PhoneInfos) {
            this.PhoneInfos = new Array();
            for (let z in params.PhoneInfos) {
                let obj = new PhoneInfo();
                obj.deserialize(params.PhoneInfos[z]);
                this.PhoneInfos.push(obj);
            }
        }
        this.ReferenceWord = 'ReferenceWord' in params ? params.ReferenceWord : null;
        this.KeywordTag = 'KeywordTag' in params ? params.KeywordTag : null;

    }
}

/**
 * 关键词得分
 * @class
 */
class KeywordScore extends  AbstractModel {
    constructor(){
        super();

        /**
         * 关键词
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * 发音精准度，取值范围[-1, 100]，当取-1时指完全不匹配，当为句子模式时，是所有已识别单词准确度的加权平均值，在reftext中但未识别出来的词不计入分数中。当为流式模式且请求中IsEnd未置1时，取值无意义。
         * @type {number || null}
         */
        this.PronAccuracy = null;

        /**
         * 发音流利度，取值范围[0, 1]，当为词模式时，取值无意义；当为流式模式且请求中IsEnd未置1时，取值无意义
         * @type {number || null}
         */
        this.PronFluency = null;

        /**
         * 发音完整度，取值范围[0, 1]，当为词模式时，取值无意义；当为流式模式且请求中IsEnd未置1时，取值无意义
         * @type {number || null}
         */
        this.PronCompletion = null;

        /**
         * 详细发音评估结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<WordRsp> || null}
         */
        this.Words = null;

        /**
         * 建议评分，取值范围[0,100]，评分方式为建议评分 = 准确度（PronAccuracy）× 完整度（PronCompletion）×（2 - 完整度（PronCompletion）），如若评分策略不符合请参考Words数组中的详细分数自定义评分逻辑。
         * @type {number || null}
         */
        this.SuggestedScore = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.PronAccuracy = 'PronAccuracy' in params ? params.PronAccuracy : null;
        this.PronFluency = 'PronFluency' in params ? params.PronFluency : null;
        this.PronCompletion = 'PronCompletion' in params ? params.PronCompletion : null;

        if (params.Words) {
            this.Words = new Array();
            for (let z in params.Words) {
                let obj = new WordRsp();
                obj.deserialize(params.Words[z]);
                this.Words.push(obj);
            }
        }
        this.SuggestedScore = 'SuggestedScore' in params ? params.SuggestedScore : null;

    }
}

/**
 * TransmitOralProcessWithInit请求参数结构体
 * @class
 */
class TransmitOralProcessWithInitRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流式数据包的序号，从1开始，当IsEnd字段为1后后续序号无意义，当IsLongLifeSession不为1且为非流式模式时无意义。
注意：序号上限为3000，不能超过上限。
         * @type {number || null}
         */
        this.SeqId = null;

        /**
         * 是否传输完毕标志，若为0表示未完毕，若为1则传输完毕开始评估，非流式模式下无意义。
         * @type {number || null}
         */
        this.IsEnd = null;

        /**
         * 语音文件类型
1: raw/pcm
2: wav
3: mp3
4: speex
语音文件格式目前仅支持 16k 采样率 16bit 编码单声道，如有不一致可能导致评估不准确或失败。
[音频上传格式](https://cloud.tencent.com/document/product/884/56132)
         * @type {number || null}
         */
        this.VoiceFileType = null;

        /**
         * 语音编码类型
1:pcm
         * @type {number || null}
         */
        this.VoiceEncodeType = null;

        /**
         * 当前语音数据, 编码格式要求为BASE64且必须保证分片帧完整（16bit的数据必须保证音频长度为偶数）。格式要求参考[音频上传格式](https://cloud.tencent.com/document/product/884/56132)
流式模式下需要将语音数据进行分片处理，参考：[分片大小设置](https://cloud.tencent.com/document/product/884/78985#.E5.88.86.E7.89.87.E5.A4.A7.E5.B0.8F.E8.AE.BE.E7.BD.AE.E4.B8.BA.E5.A4.9A.E5.A4.A7.E6.AF.94.E8.BE.83.E5.90.88.E9.80.82.3F)
如何进行流式分片参考：[流式测试](https://cloud.tencent.com/document/product/884/78824#.E6.B5.81.E5.BC.8F.E8.AF.84.E6.B5.8B)
         * @type {string || null}
         */
        this.UserVoiceData = null;

        /**
         * 语音段唯一标识，一段完整语音使用一个SessionId，不同语音段的评测需要使用不同的SessionId。一般使用uuid(通用唯一识别码)来作为它的值，要尽量保证SessionId的唯一性。
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 被评估语音对应的文本，仅支持中文和英文。
句子模式下不超过个 30 单词或者中文文字，段落模式不超过 120 单词或者中文文字，中文评估使用 utf-8 编码，自由说模式RefText可以不填。
关于RefText的文本键入要求，请参考[评测模式介绍](https://cloud.tencent.com/document/product/884/56131)。
如需要在评测模式下使用自定义注音（支持中英文），可以通过设置「TextMode」参数实现，设置方式请参考[音素标注](https://cloud.tencent.com/document/product/884/33698)。
         * @type {string || null}
         */
        this.RefText = null;

        /**
         * 语音输入模式
0：流式分片
1：非流式一次性评估
推荐使用流式分片传输。
         * @type {number || null}
         */
        this.WorkMode = null;

        /**
         * 评测模式
0：单词/单字模式（中文评测模式下为单字模式）
1：句子模式
2：段落模式
3：自由说模式
4：单词音素纠错模式
5：情景评测模式
6：句子多分支评测模式
7：单词实时评测模式
8：拼音评测模式
关于每种评测模式的详细介绍，以及适用场景，请参考[评测模式介绍](https://cloud.tencent.com/document/product/884/56131)。
         * @type {number || null}
         */
        this.EvalMode = null;

        /**
         * 评价苛刻指数。取值为[1.0 - 4.0]范围内的浮点数，用于平滑不同年龄段的分数。
1.0：适用于最小年龄段用户，一般对应儿童应用场景；
4.0：适用于最高年龄段用户，一般对应成人严格打分场景。
苛刻度影响范围参考：[苛刻度影响范围](https://cloud.tencent.com/document/product/884/78824#.E8.8B.9B.E5.88.BB.E5.BA.A6)
         * @type {number || null}
         */
        this.ScoreCoeff = null;

        /**
         * 业务应用ID，与账号应用APPID无关，是用来方便客户管理服务的参数，新的 SoeAppId 可以在[控制台](https://console.cloud.tencent.com/soe)【应用管理】下新建。如果没有新建SoeAppId，请勿填入该参数，否则会报欠费错误。使用指南：[业务应用](https://cloud.tencent.com/document/product/884/78824#.E4.B8.9A.E5.8A.A1.E5.BA.94.E7.94.A8)
         * @type {string || null}
         */
        this.SoeAppId = null;

        /**
         * 音频存储模式，此参数已废弃，无需设置，设置与否都默认为0不存储；
注：有存储需求的用户建议自行存储至腾讯云COS[对象存储](https://cloud.tencent.com/product/cos)使用。
         * @type {number || null}
         */
        this.StorageMode = null;

        /**
         * 输出断句中间结果标识
0：不输出（默认）
1：输出，通过设置该参数
可以在评估过程中的分片传输请求中，返回已经评估断句的中间结果，中间结果可用于客户端 UI 更新，输出结果为TransmitOralProcessWithInit请求返回结果 SentenceInfoSet 字段。
         * @type {number || null}
         */
        this.SentenceInfoEnabled = null;

        /**
         * 评估语言
0：英文（默认）
1：中文
         * @type {number || null}
         */
        this.ServerType = null;

        /**
         * 异步模式标识
0：同步模式（默认）
1：异步模式（一般情况不建议使用异步模式，如需使用参考：[异步轮询](https://cloud.tencent.com/document/product/884/78824#.E7.BB.93.E6.9E.9C.E6.9F.A5.E8.AF.A2)）
可选值参考[服务模式](https://cloud.tencent.com/document/product/884/33697)。
         * @type {number || null}
         */
        this.IsAsync = null;

        /**
         * 查询标识，当该参数为1时，该请求为查询请求，请求返回该 Session 评估结果。
         * @type {number || null}
         */
        this.IsQuery = null;

        /**
         * 输入文本模式
0: 普通文本（默认）
1：[音素结构](https://cloud.tencent.com/document/product/884/33698)文本
         * @type {number || null}
         */
        this.TextMode = null;

        /**
         * 主题词和关键词
         * @type {string || null}
         */
        this.Keyword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SeqId = 'SeqId' in params ? params.SeqId : null;
        this.IsEnd = 'IsEnd' in params ? params.IsEnd : null;
        this.VoiceFileType = 'VoiceFileType' in params ? params.VoiceFileType : null;
        this.VoiceEncodeType = 'VoiceEncodeType' in params ? params.VoiceEncodeType : null;
        this.UserVoiceData = 'UserVoiceData' in params ? params.UserVoiceData : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.RefText = 'RefText' in params ? params.RefText : null;
        this.WorkMode = 'WorkMode' in params ? params.WorkMode : null;
        this.EvalMode = 'EvalMode' in params ? params.EvalMode : null;
        this.ScoreCoeff = 'ScoreCoeff' in params ? params.ScoreCoeff : null;
        this.SoeAppId = 'SoeAppId' in params ? params.SoeAppId : null;
        this.StorageMode = 'StorageMode' in params ? params.StorageMode : null;
        this.SentenceInfoEnabled = 'SentenceInfoEnabled' in params ? params.SentenceInfoEnabled : null;
        this.ServerType = 'ServerType' in params ? params.ServerType : null;
        this.IsAsync = 'IsAsync' in params ? params.IsAsync : null;
        this.IsQuery = 'IsQuery' in params ? params.IsQuery : null;
        this.TextMode = 'TextMode' in params ? params.TextMode : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * TransmitOralProcessWithInit返回参数结构体
 * @class
 */
class TransmitOralProcessWithInitResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发音精准度，取值范围[-1, 100]，当取-1时指完全不匹配，当为句子模式时，是所有已识别单词准确度的加权平均值，在reftext中但未识别出来的词不计入分数中。当为流式模式且请求中IsEnd未置1时，取值无意义。
         * @type {number || null}
         */
        this.PronAccuracy = null;

        /**
         * 发音流利度，取值范围[0, 1]，当为词模式时，取值无意义；当为流式模式且请求中IsEnd未置1时，取值无意义。取值无意义时，值为-1
         * @type {number || null}
         */
        this.PronFluency = null;

        /**
         * 发音完整度，取值范围[0, 1]，当为词模式或自由说模式时，取值无意义；当为流式模式且请求中IsEnd未置1时，取值无意义。取值无意义时，值为-1
         * @type {number || null}
         */
        this.PronCompletion = null;

        /**
         * 详细发音评估结果
         * @type {Array.<WordRsp> || null}
         */
        this.Words = null;

        /**
         * 语音段唯一标识，一段语音一个SessionId
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 已废弃，不再保存语音音频文件下载地址
         * @type {string || null}
         */
        this.AudioUrl = null;

        /**
         * 断句中间结果，中间结果是局部最优而非全局最优的结果，所以中间结果有可能和最终整体结果对应部分不一致；中间结果的输出便于客户端UI更新；待用户发音完全结束后，系统会给出一个综合所有句子的整体结果。
         * @type {Array.<SentenceInfo> || null}
         */
        this.SentenceInfoSet = null;

        /**
         * 评估 session 状态，“Evaluating"：评估中、"Failed"：评估失败、"Finished"：评估完成
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 建议评分，取值范围[0,100]，评分方式为建议评分 = 准确度（PronAccuracy）× 完整度（PronCompletion）×（2 - 完整度（PronCompletion）），如若评分策略不符合请参考Words数组中的详细分数自定义评分逻辑。
         * @type {number || null}
         */
        this.SuggestedScore = null;

        /**
         * 匹配候选文本的序号，在句子多分支、情景对 话、段落模式下表示匹配到的文本序号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RefTextId = null;

        /**
         * 主题词命中标志，0表示没命中，1表示命中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.KeyWordHits = null;

        /**
         * 负向主题词命中标志，0表示没命中，1表示命中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.UnKeyWordHits = null;

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
        this.PronAccuracy = 'PronAccuracy' in params ? params.PronAccuracy : null;
        this.PronFluency = 'PronFluency' in params ? params.PronFluency : null;
        this.PronCompletion = 'PronCompletion' in params ? params.PronCompletion : null;

        if (params.Words) {
            this.Words = new Array();
            for (let z in params.Words) {
                let obj = new WordRsp();
                obj.deserialize(params.Words[z]);
                this.Words.push(obj);
            }
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.AudioUrl = 'AudioUrl' in params ? params.AudioUrl : null;

        if (params.SentenceInfoSet) {
            this.SentenceInfoSet = new Array();
            for (let z in params.SentenceInfoSet) {
                let obj = new SentenceInfo();
                obj.deserialize(params.SentenceInfoSet[z]);
                this.SentenceInfoSet.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.SuggestedScore = 'SuggestedScore' in params ? params.SuggestedScore : null;
        this.RefTextId = 'RefTextId' in params ? params.RefTextId : null;
        this.KeyWordHits = 'KeyWordHits' in params ? params.KeyWordHits : null;
        this.UnKeyWordHits = 'UnKeyWordHits' in params ? params.UnKeyWordHits : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    SentenceInfo: SentenceInfo,
    InitOralProcessRequest: InitOralProcessRequest,
    Keyword: Keyword,
    KeywordEvaluateRequest: KeywordEvaluateRequest,
    TransmitOralProcessRequest: TransmitOralProcessRequest,
    TransmitOralProcessResponse: TransmitOralProcessResponse,
    InitOralProcessResponse: InitOralProcessResponse,
    KeywordEvaluateResponse: KeywordEvaluateResponse,
    PhoneInfo: PhoneInfo,
    WordRsp: WordRsp,
    KeywordScore: KeywordScore,
    TransmitOralProcessWithInitRequest: TransmitOralProcessWithInitRequest,
    TransmitOralProcessWithInitResponse: TransmitOralProcessWithInitResponse,

}
