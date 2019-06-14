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
 * SentenceEmbedding请求参数结构体
 * @class
 */
class SentenceEmbeddingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入的文本（仅支持UTF-8格式，不超过500字）
         * @type {string || null}
         */
        this.Text = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;

    }
}

/**
 * 句法依存分析结果，包括基础词，基础词的序号，当前词父节点的序号，句法依存关系的类型
 * @class
 */
class DpToken extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前词父节点的序号
         * @type {number || null}
         */
        this.HeadId = null;

        /**
         * 基础词的序号
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 句法依存关系的类型
         * @type {string || null}
         */
        this.Relation = null;

        /**
         * 基础词
         * @type {string || null}
         */
        this.Word = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HeadId = 'HeadId' in params ? params.HeadId : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Relation = 'Relation' in params ? params.Relation : null;
        this.Word = 'Word' in params ? params.Word : null;

    }
}

/**
 * ContentApproval返回参数结构体
 * @class
 */
class ContentApprovalResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本是否恶意：
0、正常；
1、恶意；
2、可疑送审
         * @type {number || null}
         */
        this.EvilFlag = null;

        /**
         * 恶意关键词组
         * @type {Array.<string> || null}
         */
        this.EvilKeywords = null;

        /**
         * 文本恶意类型：
0、正常；
1、政治；
2、色情；
3、辱骂/低俗；
4、暴恐/毒品；
5、广告/灌水；
6、迷信/邪教；
7、其他违法（如跨站追杀/恶意竞争等）；
8、综合
         * @type {number || null}
         */
        this.EvilType = null;

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
        this.EvilFlag = 'EvilFlag' in params ? params.EvilFlag : null;
        this.EvilKeywords = 'EvilKeywords' in params ? params.EvilKeywords : null;
        this.EvilType = 'EvilType' in params ? params.EvilType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AutoSummarization请求参数结构体
 * @class
 */
class AutoSummarizationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待处理的文本（仅支持UTF-8格式，不超过2000字）
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 指定摘要的长度（默认值为200）
注：为保证摘要的可读性，最终生成的摘要长度并不会严格遵循这个值，会有略微的浮动
         * @type {number || null}
         */
        this.Length = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.Length = 'Length' in params ? params.Length : null;

    }
}

/**
 * KeywordsExtraction请求参数结构体
 * @class
 */
class KeywordsExtractionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待处理的文本（仅支持UTF-8格式，不超过2000字）
         * @type {string || null}
         */
        this.Text = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;

    }
}

/**
 * TextCorrection请求参数结构体
 * @class
 */
class TextCorrectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待纠错的文本（仅支持UTF-8格式，不超过200字）
         * @type {string || null}
         */
        this.Text = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;

    }
}

/**
 * 文本分类结果
 * @class
 */
class ClassificationResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一级分类名称
         * @type {string || null}
         */
        this.FirstClassName = null;

        /**
         * 一级分类概率
         * @type {number || null}
         */
        this.FirstClassProbability = null;

        /**
         * 二级分类名称
         * @type {string || null}
         */
        this.SecondClassName = null;

        /**
         * 二级分类概率
         * @type {number || null}
         */
        this.SecondClassProbability = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FirstClassName = 'FirstClassName' in params ? params.FirstClassName : null;
        this.FirstClassProbability = 'FirstClassProbability' in params ? params.FirstClassProbability : null;
        this.SecondClassName = 'SecondClassName' in params ? params.SecondClassName : null;
        this.SecondClassProbability = 'SecondClassProbability' in params ? params.SecondClassProbability : null;

    }
}

/**
 * AutoSummarization返回参数结构体
 * @class
 */
class AutoSummarizationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本摘要结果
         * @type {string || null}
         */
        this.Summary = null;

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
        this.Summary = 'Summary' in params ? params.Summary : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * WordSimilarity返回参数结构体
 * @class
 */
class WordSimilarityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 两个词语的相似度
         * @type {number || null}
         */
        this.Similarity = null;

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
        this.Similarity = 'Similarity' in params ? params.Similarity : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * WordSimilarity请求参数结构体
 * @class
 */
class WordSimilarityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算相似度的源词（仅支持UTF-8格式，不超过20字）
         * @type {string || null}
         */
        this.SrcWord = null;

        /**
         * 计算相似度的目标词（仅支持UTF-8格式，不超过20字）
         * @type {string || null}
         */
        this.TargetWord = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SrcWord = 'SrcWord' in params ? params.SrcWord : null;
        this.TargetWord = 'TargetWord' in params ? params.TargetWord : null;

    }
}

/**
 * ContentApproval请求参数结构体
 * @class
 */
class ContentApprovalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待审核的文本（仅支持UTF-8格式，不超过2000字）
         * @type {string || null}
         */
        this.Text = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;

    }
}

/**
 * SentenceEmbedding返回参数结构体
 * @class
 */
class SentenceEmbeddingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 句向量的维度
         * @type {number || null}
         */
        this.Dimension = null;

        /**
         * 句向量数组
         * @type {Array.<number> || null}
         */
        this.Vector = null;

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
        this.Dimension = 'Dimension' in params ? params.Dimension : null;
        this.Vector = 'Vector' in params ? params.Vector : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SentenceSimilarity请求参数结构体
 * @class
 */
class SentenceSimilarityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算相似度的源句子（仅支持UTF-8格式，不超过500字）
         * @type {string || null}
         */
        this.SrcText = null;

        /**
         * 计算相似度的目标句子（仅支持UTF-8格式，不超过500字）
         * @type {string || null}
         */
        this.TargetText = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SrcText = 'SrcText' in params ? params.SrcText : null;
        this.TargetText = 'TargetText' in params ? params.TargetText : null;

    }
}

/**
 * SimilarWords请求参数结构体
 * @class
 */
class SimilarWordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入的词语（仅支持UTF-8格式，不超过20字）
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 相似词个数；取值范围：1-200，默认为10；
         * @type {number || null}
         */
        this.WordNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.WordNumber = 'WordNumber' in params ? params.WordNumber : null;

    }
}

/**
 * TextClassification返回参数结构体
 * @class
 */
class TextClassificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本分类结果
         * @type {Array.<ClassificationResult> || null}
         */
        this.Classes = null;

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

        if (params.Classes) {
            this.Classes = new Array();
            for (let z in params.Classes) {
                let obj = new ClassificationResult();
                obj.deserialize(params.Classes[z]);
                this.Classes.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TextClassification请求参数结构体
 * @class
 */
class TextClassificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待分类的文本（仅支持UTF-8格式，不超过2000字）
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 领域分类体系（默认取1值）：
1、通用领域
2、新闻领域
         * @type {number || null}
         */
        this.Flag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.Flag = 'Flag' in params ? params.Flag : null;

    }
}

/**
 * 关键词提取结果
 * @class
 */
class Keyword extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权重
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 关键词
         * @type {string || null}
         */
        this.Word = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Score = 'Score' in params ? params.Score : null;
        this.Word = 'Word' in params ? params.Word : null;

    }
}

/**
 * WordEmbedding返回参数结构体
 * @class
 */
class WordEmbeddingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 词向量的维度
         * @type {number || null}
         */
        this.Dimension = null;

        /**
         * 词向量数组
         * @type {Array.<number> || null}
         */
        this.Vector = null;

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
        this.Dimension = 'Dimension' in params ? params.Dimension : null;
        this.Vector = 'Vector' in params ? params.Vector : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 分词&词性标注结果
 * @class
 */
class PosToken extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始位置
         * @type {number || null}
         */
        this.BeginOffset = null;

        /**
         * 长度
         * @type {number || null}
         */
        this.Length = null;

        /**
         * 词性
         * @type {string || null}
         */
        this.Pos = null;

        /**
         * 基础词
         * @type {string || null}
         */
        this.Word = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginOffset = 'BeginOffset' in params ? params.BeginOffset : null;
        this.Length = 'Length' in params ? params.Length : null;
        this.Pos = 'Pos' in params ? params.Pos : null;
        this.Word = 'Word' in params ? params.Word : null;

    }
}

/**
 * SentimentAnalysis返回参数结构体
 * @class
 */
class SentimentAnalysisResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负面情感概率
         * @type {number || null}
         */
        this.Negative = null;

        /**
         * 正面情感概率
         * @type {number || null}
         */
        this.Positive = null;

        /**
         * 情感属性
         * @type {string || null}
         */
        this.Sentiment = null;

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
        this.Negative = 'Negative' in params ? params.Negative : null;
        this.Positive = 'Positive' in params ? params.Positive : null;
        this.Sentiment = 'Sentiment' in params ? params.Sentiment : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * LexicalAnalysis返回参数结构体
 * @class
 */
class LexicalAnalysisResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名实体识别结果
         * @type {Array.<NerToken> || null}
         */
        this.NerTokens = null;

        /**
         * 分词&词性标注结果
         * @type {Array.<PosToken> || null}
         */
        this.PosTokens = null;

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

        if (params.NerTokens) {
            this.NerTokens = new Array();
            for (let z in params.NerTokens) {
                let obj = new NerToken();
                obj.deserialize(params.NerTokens[z]);
                this.NerTokens.push(obj);
            }
        }

        if (params.PosTokens) {
            this.PosTokens = new Array();
            for (let z in params.PosTokens) {
                let obj = new PosToken();
                obj.deserialize(params.PosTokens[z]);
                this.PosTokens.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TextCorrection返回参数结构体
 * @class
 */
class TextCorrectionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 纠错详情
         * @type {Array.<CCIToken> || null}
         */
        this.CCITokens = null;

        /**
         * 纠错后的文本
         * @type {string || null}
         */
        this.ResultText = null;

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

        if (params.CCITokens) {
            this.CCITokens = new Array();
            for (let z in params.CCITokens) {
                let obj = new CCIToken();
                obj.deserialize(params.CCITokens[z]);
                this.CCITokens.push(obj);
            }
        }
        this.ResultText = 'ResultText' in params ? params.ResultText : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DependencyParsing请求参数结构体
 * @class
 */
class DependencyParsingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待分析的文本（仅支持UTF-8格式，不超过200字）
         * @type {string || null}
         */
        this.Text = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;

    }
}

/**
 * WordEmbedding请求参数结构体
 * @class
 */
class WordEmbeddingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入的词语（仅支持UTF-8格式，不超过20字）
         * @type {string || null}
         */
        this.Text = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;

    }
}

/**
 * SentenceSimilarity返回参数结构体
 * @class
 */
class SentenceSimilarityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 两个文本的相似度
         * @type {number || null}
         */
        this.Similarity = null;

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
        this.Similarity = 'Similarity' in params ? params.Similarity : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 命名实体识别结果
 * @class
 */
class NerToken extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始位置
         * @type {number || null}
         */
        this.BeginOffset = null;

        /**
         * 长度
         * @type {number || null}
         */
        this.Length = null;

        /**
         * 命名实体类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 基础词
         * @type {string || null}
         */
        this.Word = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginOffset = 'BeginOffset' in params ? params.BeginOffset : null;
        this.Length = 'Length' in params ? params.Length : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Word = 'Word' in params ? params.Word : null;

    }
}

/**
 * SimilarWords返回参数结构体
 * @class
 */
class SimilarWordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 相似词数组
         * @type {Array.<string> || null}
         */
        this.SimilarWords = null;

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
        this.SimilarWords = 'SimilarWords' in params ? params.SimilarWords : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SensitiveWordsRecognition返回参数结构体
 * @class
 */
class SensitiveWordsRecognitionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 敏感词数组
         * @type {Array.<string> || null}
         */
        this.SensitiveWords = null;

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
        this.SensitiveWords = 'SensitiveWords' in params ? params.SensitiveWords : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DependencyParsing返回参数结构体
 * @class
 */
class DependencyParsingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 句法依存分析结果
         * @type {Array.<DpToken> || null}
         */
        this.DpTokens = null;

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

        if (params.DpTokens) {
            this.DpTokens = new Array();
            for (let z in params.DpTokens) {
                let obj = new DpToken();
                obj.deserialize(params.DpTokens[z]);
                this.DpTokens.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 文本纠错结果
 * @class
 */
class CCIToken extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错别字的起始位置，从0开始
         * @type {number || null}
         */
        this.BeginOffset = null;

        /**
         * 错别字纠错结果
         * @type {string || null}
         */
        this.CorrectWord = null;

        /**
         * 错别字内容
         * @type {string || null}
         */
        this.Word = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginOffset = 'BeginOffset' in params ? params.BeginOffset : null;
        this.CorrectWord = 'CorrectWord' in params ? params.CorrectWord : null;
        this.Word = 'Word' in params ? params.Word : null;

    }
}

/**
 * LexicalAnalysis请求参数结构体
 * @class
 */
class LexicalAnalysisRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待分析的文本（仅支持UTF-8格式，不超过500字）
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 词法分析模式（默认取1值）：
1、高精度；
2、高性能；
         * @type {number || null}
         */
        this.Flag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.Flag = 'Flag' in params ? params.Flag : null;

    }
}

/**
 * SentimentAnalysis请求参数结构体
 * @class
 */
class SentimentAnalysisRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待分析的文本（仅支持UTF-8格式，不超过200字）
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 文本所属类型（默认取4值）：
1、电商
2、APP
3、美食
4、酒店和其他
         * @type {number || null}
         */
        this.Flag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.Flag = 'Flag' in params ? params.Flag : null;

    }
}

/**
 * SensitiveWordsRecognition请求参数结构体
 * @class
 */
class SensitiveWordsRecognitionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待识别的文本（仅支持UTF-8格式，不超过2000字）
         * @type {string || null}
         */
        this.Text = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;

    }
}

/**
 * KeywordsExtraction返回参数结构体
 * @class
 */
class KeywordsExtractionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 关键词提取结果
         * @type {Array.<Keyword> || null}
         */
        this.Keywords = null;

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

        if (params.Keywords) {
            this.Keywords = new Array();
            for (let z in params.Keywords) {
                let obj = new Keyword();
                obj.deserialize(params.Keywords[z]);
                this.Keywords.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    SentenceEmbeddingRequest: SentenceEmbeddingRequest,
    DpToken: DpToken,
    ContentApprovalResponse: ContentApprovalResponse,
    AutoSummarizationRequest: AutoSummarizationRequest,
    KeywordsExtractionRequest: KeywordsExtractionRequest,
    TextCorrectionRequest: TextCorrectionRequest,
    ClassificationResult: ClassificationResult,
    AutoSummarizationResponse: AutoSummarizationResponse,
    WordSimilarityResponse: WordSimilarityResponse,
    WordSimilarityRequest: WordSimilarityRequest,
    ContentApprovalRequest: ContentApprovalRequest,
    SentenceEmbeddingResponse: SentenceEmbeddingResponse,
    SentenceSimilarityRequest: SentenceSimilarityRequest,
    SimilarWordsRequest: SimilarWordsRequest,
    TextClassificationResponse: TextClassificationResponse,
    TextClassificationRequest: TextClassificationRequest,
    Keyword: Keyword,
    WordEmbeddingResponse: WordEmbeddingResponse,
    PosToken: PosToken,
    SentimentAnalysisResponse: SentimentAnalysisResponse,
    LexicalAnalysisResponse: LexicalAnalysisResponse,
    TextCorrectionResponse: TextCorrectionResponse,
    DependencyParsingRequest: DependencyParsingRequest,
    WordEmbeddingRequest: WordEmbeddingRequest,
    SentenceSimilarityResponse: SentenceSimilarityResponse,
    NerToken: NerToken,
    SimilarWordsResponse: SimilarWordsResponse,
    SensitiveWordsRecognitionResponse: SensitiveWordsRecognitionResponse,
    DependencyParsingResponse: DependencyParsingResponse,
    CCIToken: CCIToken,
    LexicalAnalysisRequest: LexicalAnalysisRequest,
    SentimentAnalysisRequest: SentimentAnalysisRequest,
    SensitiveWordsRecognitionRequest: SensitiveWordsRecognitionRequest,
    KeywordsExtractionResponse: KeywordsExtractionResponse,

}
