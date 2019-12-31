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
 * TextTranslateBatch请求参数结构体
 * @class
 */
class TextTranslateBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源语言，参照Target支持语言列表
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 目标语言，参照支持语言列表
<li> zh : 简体中文 </li> <li> zh-TW : 繁体中文 </li><li> en : 英文 </li><li> jp : 日语 </li> <li> kr : 韩语 </li><li> de : 德语 </li><li> fr : 法语 </li><li> es : 西班牙文 </li> <li> it : 意大利文 </li><li> tr : 土耳其文 </li><li> ru : 俄文 </li><li> pt : 葡萄牙文 </li><li> vi : 越南文 </li><li> id : 印度尼西亚文 </li><li> ms : 马来西亚文 </li><li> th : 泰文 </li><li> auto : 自动识别源语言，只能用于source字段 </li>
         * @type {string || null}
         */
        this.Target = null;

        /**
         * 项目ID，可以根据控制台-账号中心-项目管理中的配置填写，如无配置请填写默认项目ID:0
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 待翻译的文本列表，批量接口可以以数组方式在一次请求中填写多个待翻译文本。文本统一使用utf-8格式编码，非utf-8格式编码字符会翻译失败，请传入有效文本，html标记等非常规翻译文本会翻译失败。单次请求的文本长度总和需要低于2000。
         * @type {Array.<string> || null}
         */
        this.SourceTextList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Source = 'Source' in params ? params.Source : null;
        this.Target = 'Target' in params ? params.Target : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SourceTextList = 'SourceTextList' in params ? params.SourceTextList : null;

    }
}

/**
 * ImageTranslate返回参数结构体
 * @class
 */
class ImageTranslateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求的SessionUuid返回
         * @type {string || null}
         */
        this.SessionUuid = null;

        /**
         * 源语言
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 目标语言
         * @type {string || null}
         */
        this.Target = null;

        /**
         * 图片翻译结果，翻译结果按识别的文本每一行独立翻译，后续会推出按段落划分并翻译的版本
         * @type {ImageRecord || null}
         */
        this.ImageRecord = null;

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
        this.SessionUuid = 'SessionUuid' in params ? params.SessionUuid : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Target = 'Target' in params ? params.Target : null;

        if (params.ImageRecord) {
            let obj = new ImageRecord();
            obj.deserialize(params.ImageRecord)
            this.ImageRecord = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SpeechTranslate返回参数结构体
 * @class
 */
class SpeechTranslateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求的SessionUuid直接返回
         * @type {string || null}
         */
        this.SessionUuid = null;

        /**
         * 语音识别状态 1-进行中 0-完成
         * @type {number || null}
         */
        this.RecognizeStatus = null;

        /**
         * 识别出的源文
         * @type {string || null}
         */
        this.SourceText = null;

        /**
         * 翻译出的译文
         * @type {string || null}
         */
        this.TargetText = null;

        /**
         * 第几个语音分片
         * @type {number || null}
         */
        this.Seq = null;

        /**
         * 源语言
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 目标语言
         * @type {string || null}
         */
        this.Target = null;

        /**
         * 当请求的Mode参数填写bvad是，启动VadSeq。此时Seq会被设置为后台vad（静音检测）后的新序号，而VadSeq代表客户端原始Seq值
         * @type {number || null}
         */
        this.VadSeq = null;

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
        this.SessionUuid = 'SessionUuid' in params ? params.SessionUuid : null;
        this.RecognizeStatus = 'RecognizeStatus' in params ? params.RecognizeStatus : null;
        this.SourceText = 'SourceText' in params ? params.SourceText : null;
        this.TargetText = 'TargetText' in params ? params.TargetText : null;
        this.Seq = 'Seq' in params ? params.Seq : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Target = 'Target' in params ? params.Target : null;
        this.VadSeq = 'VadSeq' in params ? params.VadSeq : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 图片翻译结果
 * @class
 */
class ImageRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图片翻译结果
         * @type {Array.<ItemValue> || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Value) {
            this.Value = new Array();
            for (let z in params.Value) {
                let obj = new ItemValue();
                obj.deserialize(params.Value[z]);
                this.Value.push(obj);
            }
        }

    }
}

/**
 * LanguageDetect请求参数结构体
 * @class
 */
class LanguageDetectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待识别的文本，文本统一使用utf-8格式编码，非utf-8格式编码字符会翻译失败。单次请求的文本长度需要低于2000。
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 项目ID，可以根据控制台-账号中心-项目管理中的配置填写，如无配置请填写默认项目ID:0
         * @type {number || null}
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * TextTranslateBatch返回参数结构体
 * @class
 */
class TextTranslateBatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源语言，详见入参Target
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 目标语言，详见入参Target
         * @type {string || null}
         */
        this.Target = null;

        /**
         * 翻译后的文本列表
         * @type {Array.<string> || null}
         */
        this.TargetTextList = null;

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
        this.Source = 'Source' in params ? params.Source : null;
        this.Target = 'Target' in params ? params.Target : null;
        this.TargetTextList = 'TargetTextList' in params ? params.TargetTextList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * LanguageDetect返回参数结构体
 * @class
 */
class LanguageDetectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的语言种类，参考语言列表
<li> zh : 中文 </li> <li> en : 英文 </li><li> jp : 日语 </li> <li> kr : 韩语 </li><li> de : 德语 </li><li> fr : 法语 </li><li> es : 西班牙文 </li> <li> it : 意大利文 </li><li> tr : 土耳其文 </li><li> ru : 俄文 </li><li> pt : 葡萄牙文 </li><li> vi : 越南文 </li><li> id : 印度尼西亚文 </li><li> ms : 马来西亚文 </li><li> th : 泰文 </li>
         * @type {string || null}
         */
        this.Lang = null;

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
        this.Lang = 'Lang' in params ? params.Lang : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 翻译结果
 * @class
 */
class ItemValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 识别出的源文
         * @type {string || null}
         */
        this.SourceText = null;

        /**
         * 翻译后的译文
         * @type {string || null}
         */
        this.TargetText = null;

        /**
         * X坐标
         * @type {number || null}
         */
        this.X = null;

        /**
         * Y坐标
         * @type {number || null}
         */
        this.Y = null;

        /**
         * 宽度
         * @type {number || null}
         */
        this.W = null;

        /**
         * 高度
         * @type {number || null}
         */
        this.H = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceText = 'SourceText' in params ? params.SourceText : null;
        this.TargetText = 'TargetText' in params ? params.TargetText : null;
        this.X = 'X' in params ? params.X : null;
        this.Y = 'Y' in params ? params.Y : null;
        this.W = 'W' in params ? params.W : null;
        this.H = 'H' in params ? params.H : null;

    }
}

/**
 * TextTranslate返回参数结构体
 * @class
 */
class TextTranslateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 翻译后的文本
         * @type {string || null}
         */
        this.TargetText = null;

        /**
         * 源语言，详见入参Target
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 目标语言，详见入参Target
         * @type {string || null}
         */
        this.Target = null;

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
        this.TargetText = 'TargetText' in params ? params.TargetText : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Target = 'Target' in params ? params.Target : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SpeechTranslate请求参数结构体
 * @class
 */
class SpeechTranslateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一段完整的语音对应一个SessionUuid
         * @type {string || null}
         */
        this.SessionUuid = null;

        /**
         * 音频中的语言类型，支持语言列表<li> zh : 中文 </li> <li> en : 英文 </li>
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 翻译目标语⾔言类型 ，支持的语言列表<li> zh : 中文 </li> <li> en : 英文 </li>
         * @type {string || null}
         */
        this.Target = null;

        /**
         * pcm : 146   amr : 33554432   mp3 : 83886080
         * @type {number || null}
         */
        this.AudioFormat = null;

        /**
         * 语音分片的序号，从0开始
         * @type {number || null}
         */
        this.Seq = null;

        /**
         * 是否最后一片语音分片，0-否，1-是
         * @type {number || null}
         */
        this.IsEnd = null;

        /**
         * 语音分片内容的base64字符串，音频内容应含有效并可识别的文本
         * @type {string || null}
         */
        this.Data = null;

        /**
         * 项目ID，可以根据控制台-账号中心-项目管理中的配置填写，如无配置请填写默认项目ID:0
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 识别模式，该参数已废弃
         * @type {string || null}
         */
        this.Mode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SessionUuid = 'SessionUuid' in params ? params.SessionUuid : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Target = 'Target' in params ? params.Target : null;
        this.AudioFormat = 'AudioFormat' in params ? params.AudioFormat : null;
        this.Seq = 'Seq' in params ? params.Seq : null;
        this.IsEnd = 'IsEnd' in params ? params.IsEnd : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Mode = 'Mode' in params ? params.Mode : null;

    }
}

/**
 * ImageTranslate请求参数结构体
 * @class
 */
class ImageTranslateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一id，返回时原样返回
         * @type {string || null}
         */
        this.SessionUuid = null;

        /**
         * doc:文档扫描
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * 图片数据的Base64字符串，图片大小上限为4M，建议对源图片进行一定程度压缩
         * @type {string || null}
         */
        this.Data = null;

        /**
         * 源语言，支持语言列表<li> zh : 中文 </li> <li> en : 英文 </li>
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 目标语言，支持语言列表<li> zh : 中文 </li> <li> en : 英文 </li>
         * @type {string || null}
         */
        this.Target = null;

        /**
         * 项目ID，可以根据控制台-账号中心-项目管理中的配置填写，如无配置请填写默认项目ID:0
         * @type {number || null}
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SessionUuid = 'SessionUuid' in params ? params.SessionUuid : null;
        this.Scene = 'Scene' in params ? params.Scene : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Target = 'Target' in params ? params.Target : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * TextTranslate请求参数结构体
 * @class
 */
class TextTranslateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待翻译的文本，文本统一使用utf-8格式编码，非utf-8格式编码字符会翻译失败，请传入有效文本，html标记等非常规翻译文本会翻译失败。单次请求的文本长度需要低于2000。
         * @type {string || null}
         */
        this.SourceText = null;

        /**
         * 源语言，参照Target支持语言列表
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 目标语言，参照支持语言列表
<li> zh : 简体中文 </li> <li> zh-TW : 繁体中文 </li><li> en : 英文 </li><li> jp : 日语 </li> <li> kr : 韩语 </li><li> de : 德语 </li><li> fr : 法语 </li><li> es : 西班牙文 </li> <li> it : 意大利文 </li><li> tr : 土耳其文 </li><li> ru : 俄文 </li><li> pt : 葡萄牙文 </li><li> vi : 越南文 </li><li> id : 印度尼西亚文 </li><li> ms : 马来西亚文 </li><li> th : 泰文 </li><li> auto : 自动识别源语言，只能用于source字段 </li>
         * @type {string || null}
         */
        this.Target = null;

        /**
         * 项目ID，可以根据控制台-账号中心-项目管理中的配置填写，如无配置请填写默认项目ID:0
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 用来标记不希望被翻译的文本内容，如句子中的特殊符号、人名、地名等；每次请求只支持配置一个不被翻译的单词；仅支持配置人名、地名等名词，不要配置动词或短语，否则会影响翻译结果。
         * @type {string || null}
         */
        this.UntranslatedText = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceText = 'SourceText' in params ? params.SourceText : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Target = 'Target' in params ? params.Target : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.UntranslatedText = 'UntranslatedText' in params ? params.UntranslatedText : null;

    }
}

module.exports = {
    TextTranslateBatchRequest: TextTranslateBatchRequest,
    ImageTranslateResponse: ImageTranslateResponse,
    SpeechTranslateResponse: SpeechTranslateResponse,
    ImageRecord: ImageRecord,
    LanguageDetectRequest: LanguageDetectRequest,
    TextTranslateBatchResponse: TextTranslateBatchResponse,
    LanguageDetectResponse: LanguageDetectResponse,
    ItemValue: ItemValue,
    TextTranslateResponse: TextTranslateResponse,
    SpeechTranslateRequest: SpeechTranslateRequest,
    ImageTranslateRequest: ImageTranslateRequest,
    TextTranslateRequest: TextTranslateRequest,

}
