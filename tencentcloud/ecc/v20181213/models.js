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
 * EHOCR返回参数结构体
 * @class
 */
class EHOCRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别后的作文内容
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
        this.Outline = null;

        /**
         * 范文标题，可选参数，本接口可以依据提供的范文对作文进行评分。
         * @type {string || null}
         */
        this.ModelSubject = null;

        /**
         * 范文内容，可选参数，同上，范文的正文部分。
         * @type {string || null}
         */
        this.ModelContent = null;

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
        this.Outline = 'Outline' in params ? params.Outline : null;
        this.ModelSubject = 'ModelSubject' in params ? params.ModelSubject : null;
        this.ModelContent = 'ModelContent' in params ? params.ModelContent : null;

    }
}

/**
 * 句子点评
 * @class
 */
class SentenceCom extends  AbstractModel {
    constructor(){
        super();

        /**
         * 点评内容
         * @type {Array.<SentenceSuggest> || null}
         */
        this.Suggestions = null;

        /**
         * 点评的句子信息
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
         * @type {CorrectData || null}
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
            let obj = new CorrectData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 词汇项
         * @type {Aspect || null}
         */
        this.Words = null;

        /**
         * 句子项
         * @type {Aspect || null}
         */
        this.Sentences = null;

        /**
         * 篇章结构
         * @type {Aspect || null}
         */
        this.Structure = null;

        /**
         * 内容
         * @type {Aspect || null}
         */
        this.Content = null;

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
         * 项目 名字
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 该项得分
         * @type {number || null}
         */
        this.Score = null;

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

    }
}

/**
 * ocr返回的作文文本信息
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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Content = 'Content' in params ? params.Content : null;

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
         * 输出图片类型，0表示Image字段是图片所在的url，1表示Image字段是base64编码后的图像数据
         * @type {number || null}
         */
        this.InputType = null;

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

    }
}

module.exports = {
    SentenceItem: SentenceItem,
    CorrectData: CorrectData,
    EHOCRResponse: EHOCRResponse,
    ECCRequest: ECCRequest,
    SentenceCom: SentenceCom,
    SentenceSuggest: SentenceSuggest,
    ECCResponse: ECCResponse,
    ScoreCategory: ScoreCategory,
    Aspect: Aspect,
    CompostionContext: CompostionContext,
    EHOCRRequest: EHOCRRequest,

}
