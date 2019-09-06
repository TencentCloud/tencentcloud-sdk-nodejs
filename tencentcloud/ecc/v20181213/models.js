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
 * DescribeTask请求参数结构体
 * @class
 */
class DescribeTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 业务应用ID，与账号应用APPID无关，是用来方便客户管理服务的参数（暂时无需传入）。
         * @type {string || null}
         */
        this.EccAppid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.EccAppid = 'EccAppid' in params ? params.EccAppid : null;

    }
}

/**
 * 句子的相关信息
 * @class
 */
class SentenceItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 英语句子
         * @type {string || null}
         */
        this.Sentence = null;

        /**
         * 段落id
         * @type {number || null}
         */
        this.ParaID = null;

        /**
         * 句子id
         * @type {number || null}
         */
        this.SentenceID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Sentence = 'Sentence' in params ? params.Sentence : null;
        this.ParaID = 'ParaID' in params ? params.ParaID : null;
        this.SentenceID = 'SentenceID' in params ? params.SentenceID : null;

    }
}

/**
 * ECC返回参数结构体
 * @class
 */
class ECCResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 整体的批改结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CorrectData || null}
         */
        this.Data = null;

        /**
         * 任务 id，用于查询接口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskId = null;

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
            let obj = new CorrectData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EHOCR返回参数结构体
 * @class
 */
class EHOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口返回数据
         * @type {CompostionContext || null}
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
            let obj = new CompostionContext();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 维度单词坐标
 * @class
 */
class ErrorCoordinate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 维度单词坐标
         * @type {Array.<number> || null}
         */
        this.Coordinate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Coordinate = 'Coordinate' in params ? params.Coordinate : null;

    }
}

/**
 * ECC请求参数结构体
 * @class
 */
class ECCRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作文文本，必填
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 作文题目，可选参数
         * @type {string || null}
         */
        this.Title = null;

        /**
         * 年级标准， 默认以cet4为标准，取值与意义如下：elementary 小学，grade7 grade8 grade9分别对应初一，初二，初三。 grade10 grade11 grade12 分别对应高一，高二，高三，以及cet4和cet6 分别表示 英语4级和6级。
         * @type {string || null}
         */
        this.Grade = null;

        /**
         * 作文提纲，可选参数，作文的写作要求。
         * @type {string || null}
         */
        this.Requirement = null;

        /**
         * 范文标题，可选参数，本接口可以依据提供的范文对作文进行评分。
         * @type {string || null}
         */
        this.ModelTitle = null;

        /**
         * 范文内容，可选参数，同上，范文的正文部分。
         * @type {string || null}
         */
        this.ModelContent = null;

        /**
         * 业务应用ID，与账号应用APPID无关，是用来方便客户管理服务的参数（暂时无需传入）。
         * @type {string || null}
         */
        this.EccAppid = null;

        /**
         * 异步模式标识，0：同步模式，1：异步模式，默认为同步模式
         * @type {number || null}
         */
        this.IsAsync = null;

        /**
         * 图像识别唯一标识，一次识别一个 SessionId。当传入此前识别接口使用过的 SessionId，则本次批改按图像批改价格收费；如使用了识别接口且本次没有传入 SessionId，则需要加取文本批改的费用；如果直接使用文本批改接口，则只收取文本批改的费用
         * @type {string || null}
         */
        this.SessionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Content = 'Content' in params ? params.Content : null;
        this.Title = 'Title' in params ? params.Title : null;
        this.Grade = 'Grade' in params ? params.Grade : null;
        this.Requirement = 'Requirement' in params ? params.Requirement : null;
        this.ModelTitle = 'ModelTitle' in params ? params.ModelTitle : null;
        this.ModelContent = 'ModelContent' in params ? params.ModelContent : null;
        this.EccAppid = 'EccAppid' in params ? params.EccAppid : null;
        this.IsAsync = 'IsAsync' in params ? params.IsAsync : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;

    }
}

/**
 * 批改结果按句点评的详细信息
 * @class
 */
class SentenceCom extends  AbstractModel {
    constructor(){
        super();

        /**
         * 句子错误纠正信息
         * @type {Array.<SentenceSuggest> || null}
         */
        this.Suggestions = null;

        /**
         * 句子信息
         * @type {SentenceItem || null}
         */
        this.Sentence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Suggestions) {
            this.Suggestions = new Array();
            for (let z in params.Suggestions) {
                let obj = new SentenceSuggest();
                obj.deserialize(params.Suggestions[z]);
                this.Suggestions.push(obj);
            }
        }

        if (params.Sentence) {
            let obj = new SentenceItem();
            obj.deserialize(params.Sentence)
            this.Sentence = obj;
        }

    }
}

/**
 * 句子批阅建议
 * @class
 */
class SentenceSuggest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 错误类型
         * @type {string || null}
         */
        this.ErrorType = null;

        /**
         * 原始单词
         * @type {string || null}
         */
        this.Origin = null;

        /**
         * 替换成 的单词
         * @type {string || null}
         */
        this.Replace = null;

        /**
         * 提示信息
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 维度单词位置，在句子的第几个到第几个单词之间
         * @type {Array.<number> || null}
         */
        this.ErrorPosition = null;

        /**
         * 维度单词坐标，错误单词在图片中的坐标，只有传图片时正常返回，传文字时返回[ ]
         * @type {Array.<ErrorCoordinate> || null}
         */
        this.ErrorCoordinates = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.ErrorType = 'ErrorType' in params ? params.ErrorType : null;
        this.Origin = 'Origin' in params ? params.Origin : null;
        this.Replace = 'Replace' in params ? params.Replace : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.ErrorPosition = 'ErrorPosition' in params ? params.ErrorPosition : null;

        if (params.ErrorCoordinates) {
            this.ErrorCoordinates = new Array();
            for (let z in params.ErrorCoordinates) {
                let obj = new ErrorCoordinate();
                obj.deserialize(params.ErrorCoordinates[z]);
                this.ErrorCoordinates.push(obj);
            }
        }

    }
}

/**
 * 批改的结果
 * @class
 */
class CorrectData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总得分
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 各项得分详情
         * @type {ScoreCategory || null}
         */
        this.ScoreCat = null;

        /**
         * 综合评价
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 句子点评
         * @type {Array.<SentenceCom> || null}
         */
        this.SentenceComments = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Score = 'Score' in params ? params.Score : null;

        if (params.ScoreCat) {
            let obj = new ScoreCategory();
            obj.deserialize(params.ScoreCat)
            this.ScoreCat = obj;
        }
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.SentenceComments) {
            this.SentenceComments = new Array();
            for (let z in params.SentenceComments) {
                let obj = new SentenceCom();
                obj.deserialize(params.SentenceComments[z]);
                this.SentenceComments.push(obj);
            }
        }

    }
}

/**
 * 四个维度的得分
 * @class
 */
class ScoreCategory extends  AbstractModel {
    constructor(){
        super();

        /**
         * 词汇维度
         * @type {Aspect || null}
         */
        this.Words = null;

        /**
         * 句子维度
         * @type {Aspect || null}
         */
        this.Sentences = null;

        /**
         * 篇章结构维度
         * @type {Aspect || null}
         */
        this.Structure = null;

        /**
         * 内容维度
         * @type {Aspect || null}
         */
        this.Content = null;

        /**
         * 维度得分
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 维度分数占比
         * @type {number || null}
         */
        this.Percentage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Words) {
            let obj = new Aspect();
            obj.deserialize(params.Words)
            this.Words = obj;
        }

        if (params.Sentences) {
            let obj = new Aspect();
            obj.deserialize(params.Sentences)
            this.Sentences = obj;
        }

        if (params.Structure) {
            let obj = new Aspect();
            obj.deserialize(params.Structure)
            this.Structure = obj;
        }

        if (params.Content) {
            let obj = new Aspect();
            obj.deserialize(params.Content)
            this.Content = obj;
        }
        this.Score = 'Score' in params ? params.Score : null;
        this.Percentage = 'Percentage' in params ? params.Percentage : null;

    }
}

/**
 * 作文批改每个维度名字与得分
 * @class
 */
class Aspect extends  AbstractModel {
    constructor(){
        super();

        /**
         * 维度名字
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 维度得分
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 维度分数占比
         * @type {number || null}
         */
        this.Percentage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.Percentage = 'Percentage' in params ? params.Percentage : null;

    }
}

/**
 * 图像识别批改接口返回的作文文本信息或批改信息
 * @class
 */
class CompostionContext extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作文内容
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 批改结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CorrectData || null}
         */
        this.CorrectData = null;

        /**
         * 任务 id，用于查询接口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 图像识别唯一标识，一次识别一个 SessionId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SessionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Content = 'Content' in params ? params.Content : null;

        if (params.CorrectData) {
            let obj = new CorrectData();
            obj.deserialize(params.CorrectData)
            this.CorrectData = obj;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;

    }
}

/**
 * DescribeTask返回参数结构体
 * @class
 */
class DescribeTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作文识别文本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 整体的批改结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CorrectData || null}
         */
        this.CorrectData = null;

        /**
         * 任务状态，“Progressing”: 处理中（此时无结果返回）、“Finished”: 处理完成
         * @type {string || null}
         */
        this.Status = null;

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
        this.Content = 'Content' in params ? params.Content : null;

        if (params.CorrectData) {
            let obj = new CorrectData();
            obj.deserialize(params.CorrectData)
            this.CorrectData = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EHOCR请求参数结构体
 * @class
 */
class EHOCRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片所在的url或base64编码后的图像数据，依据InputType而定
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 输出图片类型，0 表示 Image 字段是图片所在的 url，1 表示 Image 字段是 base64 编码后的图像数据
         * @type {number || null}
         */
        this.InputType = null;

        /**
         * 业务应用ID，与账号应用APPID无关，是用来方便客户管理服务的参数（暂时无需传入）。
         * @type {string || null}
         */
        this.EccAppid = null;

        /**
         * 图像识别唯一标识，一次识别一个 SessionId，使用识别功能时 SessionId 可用于使用文本批改接口，此时按图像批改价格收费；如使用文本批改接口时没有传入 SessionId，则需要收取文本批改的费用
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * 服务类型，0：“图像识别”，只返回识别结果，1：“图像批改”，同时返回识别结果与批改结果。默认为 0
         * @type {number || null}
         */
        this.ServerType = null;

        /**
         * 作文题目，可选参数
         * @type {string || null}
         */
        this.Title = null;

        /**
         * 年级标准， 默认以 cet4 为标准，取值与意义如下：elementary 小学，grade7 grade8 grade9分别对应初一，初二，初三。 grade10 grade11 grade12 分别对应高一，高二，高三，以及 cet4 和 cet6 分别表示 英语4级和6级。
         * @type {string || null}
         */
        this.Grade = null;

        /**
         * 作文提纲，可选参数，作文的写作要求。
         * @type {string || null}
         */
        this.Requirement = null;

        /**
         * 范文标题，可选参数，本接口可以依据提供的范文对作文进行评分。
         * @type {string || null}
         */
        this.ModelTitle = null;

        /**
         * 范文内容，可选参数，同上，范文的正文部分。
         * @type {string || null}
         */
        this.ModelContent = null;

        /**
         * 异步模式标识，0：同步模式，1：异步模式。默认为同步模式
         * @type {number || null}
         */
        this.IsAsync = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Image = 'Image' in params ? params.Image : null;
        this.InputType = 'InputType' in params ? params.InputType : null;
        this.EccAppid = 'EccAppid' in params ? params.EccAppid : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.ServerType = 'ServerType' in params ? params.ServerType : null;
        this.Title = 'Title' in params ? params.Title : null;
        this.Grade = 'Grade' in params ? params.Grade : null;
        this.Requirement = 'Requirement' in params ? params.Requirement : null;
        this.ModelTitle = 'ModelTitle' in params ? params.ModelTitle : null;
        this.ModelContent = 'ModelContent' in params ? params.ModelContent : null;
        this.IsAsync = 'IsAsync' in params ? params.IsAsync : null;

    }
}

module.exports = {
    DescribeTaskRequest: DescribeTaskRequest,
    SentenceItem: SentenceItem,
    ECCResponse: ECCResponse,
    EHOCRResponse: EHOCRResponse,
    ErrorCoordinate: ErrorCoordinate,
    ECCRequest: ECCRequest,
    SentenceCom: SentenceCom,
    SentenceSuggest: SentenceSuggest,
    CorrectData: CorrectData,
    ScoreCategory: ScoreCategory,
    Aspect: Aspect,
    CompostionContext: CompostionContext,
    DescribeTaskResponse: DescribeTaskResponse,
    EHOCRRequest: EHOCRRequest,

}
