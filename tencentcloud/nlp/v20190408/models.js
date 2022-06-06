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
 * LexicalAnalysis返回参数结构体
 * @class
 */
class LexicalAnalysisResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名实体识别结果。取值范围：
<li>PER：表示人名，如刘德华、贝克汉姆</li>
<li>LOC：表示地名，如北京、华山</li>
<li>ORG：表示机构团体名，如腾讯、最高人民法院、人大附中</li>
<li>PRODUCTION：表示产品名，如QQ、微信、iPhone</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NerToken> || null}
         */
        this.NerTokens = null;

        /**
         * 分词&词性标注结果（词性表请参见附录）
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
 * SearchWordItems返回参数结构体
 * @class
 */
class SearchWordItemsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 词条检索结果集合。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SearchResult> || null}
         */
        this.Results = null;

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

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new SearchResult();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 句法依存关系的类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Relation = null;

        /**
         * 当前词父节点的序号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HeadId = null;

        /**
         * 基础词
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Word = null;

        /**
         * 基础词的序号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Relation = 'Relation' in params ? params.Relation : null;
        this.HeadId = 'HeadId' in params ? params.HeadId : null;
        this.Word = 'Word' in params ? params.Word : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * TextSimilarity返回参数结构体
 * @class
 */
class TextSimilarityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 每个目标句子与源句子的相似度分值，按照分值降序排列
         * @type {Array.<Similarity> || null}
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

        if (params.Similarity) {
            this.Similarity = new Array();
            for (let z in params.Similarity) {
                let obj = new Similarity();
                obj.deserialize(params.Similarity[z]);
                this.Similarity.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * ChatBot返回参数结构体
 * @class
 */
class ChatBotResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 闲聊回复
         * @type {string || null}
         */
        this.Reply = null;

        /**
         * 对于当前输出回复的自信度
         * @type {number || null}
         */
        this.Confidence = null;

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
        this.Reply = 'Reply' in params ? params.Reply : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
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
         * 指定摘要的长度上限（默认值为200）
注：为保证摘要的可读性，最终生成的摘要长度会低于指定的长度上限。
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
 * ChatBot请求参数结构体
 * @class
 */
class ChatBotRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户请求的query
         * @type {string || null}
         */
        this.Query = null;

        /**
         * 服务的id,  主要用于儿童闲聊接口，比如手Q的openid
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 0: 通用闲聊, 1:儿童闲聊, 默认是通用闲聊
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
        this.Query = 'Query' in params ? params.Query : null;
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.Flag = 'Flag' in params ? params.Flag : null;

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
         * 文本分类结果（文本分类映射表请参见附录）
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
 * KeywordsExtraction请求参数结构体
 * @class
 */
class KeywordsExtractionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待处理的文本（仅支持UTF-8格式，不超过10000字符）
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 指定关键词个数上限（默认值为5）
         * @type {number || null}
         */
        this.Num = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.Num = 'Num' in params ? params.Num : null;

    }
}

/**
 * 自定义词库信息
 * @class
 */
class DictInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义词库名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 自定义词库ID。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 自定义词库描述信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 自定义词库修改时间，形式为:yyyy-mm-dd hh:mm:ss。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 自定义词库创建时间，形式为:yyyy-mm-dd hh:mm:ss。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

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
         * 待纠错的文本（仅支持UTF-8格式，不超过2000字符）
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
         * 二级分类名称
         * @type {string || null}
         */
        this.SecondClassName = null;

        /**
         * 一级分类概率
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FirstClassProbability = null;

        /**
         * 二级分类概率
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SecondClassProbability = null;

        /**
         * 三级分类名称，仅有当新闻领域五分类可能出现，详情见文本分类文档
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ThirdClassName = null;

        /**
         * 三级分类概率，仅有当新闻领域五分类可能出现，详情见文本分类文档
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ThirdClassProbability = null;

        /**
         * 四级分类名称，仅有当新闻领域五分类可能出现，详情见文本分类文档
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FourthClassName = null;

        /**
         * 四级分类概率，仅有当新闻领域五分类可能出现，详情见文本分类文档
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FourthClassProbability = null;

        /**
         * 五级分类名称，仅有当新闻领域五分类可能出现，详情见文本分类文档
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FifthClassName = null;

        /**
         * 五级分类概率，仅有当新闻领域五分类可能出现，详情见文本分类文档
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FifthClassProbability = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FirstClassName = 'FirstClassName' in params ? params.FirstClassName : null;
        this.SecondClassName = 'SecondClassName' in params ? params.SecondClassName : null;
        this.FirstClassProbability = 'FirstClassProbability' in params ? params.FirstClassProbability : null;
        this.SecondClassProbability = 'SecondClassProbability' in params ? params.SecondClassProbability : null;
        this.ThirdClassName = 'ThirdClassName' in params ? params.ThirdClassName : null;
        this.ThirdClassProbability = 'ThirdClassProbability' in params ? params.ThirdClassProbability : null;
        this.FourthClassName = 'FourthClassName' in params ? params.FourthClassName : null;
        this.FourthClassProbability = 'FourthClassProbability' in params ? params.FourthClassProbability : null;
        this.FifthClassName = 'FifthClassName' in params ? params.FifthClassName : null;
        this.FifthClassProbability = 'FifthClassProbability' in params ? params.FifthClassProbability : null;

    }
}

/**
 * TextCorrectionPro返回参数结构体
 * @class
 */
class TextCorrectionProResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 纠错详情
注意：此字段可能返回 null，表示取不到有效值。
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
 * TextSimilarityPro请求参数结构体
 * @class
 */
class TextSimilarityProRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要与目标句子计算相似度的源句子（仅支持UTF-8格式，不超过128字符）
         * @type {string || null}
         */
        this.SrcText = null;

        /**
         * 目标句子（仅支持UTF-8格式，不超过128字符）
         * @type {Array.<string> || null}
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
 * UpdateDict返回参数结构体
 * @class
 */
class UpdateDictResponse extends  AbstractModel {
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
 * DescribeDicts请求参数结构体
 * @class
 */
class DescribeDictsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 每页数据量，范围为1~100，默认为10。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移量，从0开始，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * 词条搜索的结果，主要描述该词条是否存在以及相关的词性。
 * @class
 */
class SearchResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 被搜索的词条文本。
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 0表示词条不存在，1表示存在。
         * @type {number || null}
         */
        this.IsExist = null;

        /**
         * 匹配到的词条文本。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MatchText = null;

        /**
         * 词条的词性。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Pos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.IsExist = 'IsExist' in params ? params.IsExist : null;
        this.MatchText = 'MatchText' in params ? params.MatchText : null;
        this.Pos = 'Pos' in params ? params.Pos : null;

    }
}

/**
 * CreateWordItems请求参数结构体
 * @class
 */
class CreateWordItemsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义词库ID。
         * @type {string || null}
         */
        this.DictId = null;

        /**
         * 待添加的词条集合。
         * @type {Array.<WordItem> || null}
         */
        this.WordItems = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DictId = 'DictId' in params ? params.DictId : null;

        if (params.WordItems) {
            this.WordItems = new Array();
            for (let z in params.WordItems) {
                let obj = new WordItem();
                obj.deserialize(params.WordItems[z]);
                this.WordItems.push(obj);
            }
        }

    }
}

/**
 * 词条信息。
 * @class
 */
class WordItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 词条文本内容。
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 词条创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 词条的词性。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Pos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Pos = 'Pos' in params ? params.Pos : null;

    }
}

/**
 * DeleteWordItems返回参数结构体
 * @class
 */
class DeleteWordItemsResponse extends  AbstractModel {
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
 * SentenceEmbedding返回参数结构体
 * @class
 */
class SentenceEmbeddingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 句向量数组
         * @type {Array.<number> || null}
         */
        this.Vector = null;

        /**
         * 句向量的维度
         * @type {number || null}
         */
        this.Dimension = null;

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
        this.Vector = 'Vector' in params ? params.Vector : null;
        this.Dimension = 'Dimension' in params ? params.Dimension : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateDict请求参数结构体
 * @class
 */
class UpdateDictRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义词库ID。
         * @type {string || null}
         */
        this.DictId = null;

        /**
         * 词库描述，不超过100字。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 词库名称，不超过20字。
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DictId = 'DictId' in params ? params.DictId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DeleteDict返回参数结构体
 * @class
 */
class DeleteDictResponse extends  AbstractModel {
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
 * DescribeWordItems请求参数结构体
 * @class
 */
class DescribeWordItemsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义词库ID。
         * @type {string || null}
         */
        this.DictId = null;

        /**
         * 分页偏移量，从0开始，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页数据量，范围为1~100，默认为10。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 待检索的词条文本，支持模糊匹配。
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
        this.DictId = 'DictId' in params ? params.DictId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Text = 'Text' in params ? params.Text : null;

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
         * 待分类的文本（仅支持UTF-8格式，不超过10000字）
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 领域分类体系（默认取1值）：
1、通用领域，二分类
2、新闻领域，五分类。类别数据不一定全部返回，详情见类目映射表（注意：目前五分类已下线不可用）
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
 * CreateDict返回参数结构体
 * @class
 */
class CreateDictResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建的自定义词库ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DictId = null;

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
        this.DictId = 'DictId' in params ? params.DictId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TextSimilarity请求参数结构体
 * @class
 */
class TextSimilarityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要与目标句子计算相似度的源句子（仅支持UTF-8格式，不超过500字符）
         * @type {string || null}
         */
        this.SrcText = null;

        /**
         * 目标句子（以句子数量为单位消耗资源包）
         * @type {Array.<string> || null}
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
 * WordEmbedding返回参数结构体
 * @class
 */
class WordEmbeddingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 词向量数组
         * @type {Array.<number> || null}
         */
        this.Vector = null;

        /**
         * 词向量的维度
         * @type {number || null}
         */
        this.Dimension = null;

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
        this.Vector = 'Vector' in params ? params.Vector : null;
        this.Dimension = 'Dimension' in params ? params.Dimension : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWordItems返回参数结构体
 * @class
 */
class DescribeWordItemsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 词条记录总条数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 词条信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<WordItem> || null}
         */
        this.WordItems = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.WordItems) {
            this.WordItems = new Array();
            for (let z in params.WordItems) {
                let obj = new WordItem();
                obj.deserialize(params.WordItems[z]);
                this.WordItems.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeDict请求参数结构体
 * @class
 */
class DescribeDictRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义词库ID。
         * @type {string || null}
         */
        this.DictId = null;

        /**
         * 自定义词库名称，模糊搜索。
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DictId = 'DictId' in params ? params.DictId : null;
        this.Name = 'Name' in params ? params.Name : null;

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
         * 基础词
         * @type {string || null}
         */
        this.Word = null;

        /**
         * 长度
         * @type {number || null}
         */
        this.Length = null;

        /**
         * 起始位置
         * @type {number || null}
         */
        this.BeginOffset = null;

        /**
         * 词性
         * @type {string || null}
         */
        this.Pos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Word = 'Word' in params ? params.Word : null;
        this.Length = 'Length' in params ? params.Length : null;
        this.BeginOffset = 'BeginOffset' in params ? params.BeginOffset : null;
        this.Pos = 'Pos' in params ? params.Pos : null;

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
         * 正面情感概率
         * @type {number || null}
         */
        this.Positive = null;

        /**
         * 中性情感概率，当输入参数Mode取值为3class时有效，否则值为空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Neutral = null;

        /**
         * 负面情感概率
         * @type {number || null}
         */
        this.Negative = null;

        /**
         * 情感分类结果：
1、positive，表示正面情感
2、negative，表示负面情感
3、neutral，表示中性、无情感
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
        this.Positive = 'Positive' in params ? params.Positive : null;
        this.Neutral = 'Neutral' in params ? params.Neutral : null;
        this.Negative = 'Negative' in params ? params.Negative : null;
        this.Sentiment = 'Sentiment' in params ? params.Sentiment : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteWordItems请求参数结构体
 * @class
 */
class DeleteWordItemsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义词库ID。
         * @type {string || null}
         */
        this.DictId = null;

        /**
         * 待删除的词条集合。
         * @type {Array.<WordItem> || null}
         */
        this.WordItems = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DictId = 'DictId' in params ? params.DictId : null;

        if (params.WordItems) {
            this.WordItems = new Array();
            for (let z in params.WordItems) {
                let obj = new WordItem();
                obj.deserialize(params.WordItems[z]);
                this.WordItems.push(obj);
            }
        }

    }
}

/**
 * DescribeDict返回参数结构体
 * @class
 */
class DescribeDictResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询到的词库信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DictInfo> || null}
         */
        this.Dicts = null;

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

        if (params.Dicts) {
            this.Dicts = new Array();
            for (let z in params.Dicts) {
                let obj = new DictInfo();
                obj.deserialize(params.Dicts[z]);
                this.Dicts.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TextCorrectionPro请求参数结构体
 * @class
 */
class TextCorrectionProRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待纠错的文本（仅支持UTF-8格式，不超过128字符）
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
 * TextCorrection返回参数结构体
 * @class
 */
class TextCorrectionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 纠错详情
注意：此字段可能返回 null，表示取不到有效值。
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
 * TextSimilarityPro返回参数结构体
 * @class
 */
class TextSimilarityProResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 每个目标句子与源句子的相似度分值，按照分值降序排列
         * @type {Array.<Similarity> || null}
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

        if (params.Similarity) {
            this.Similarity = new Array();
            for (let z in params.Similarity) {
                let obj = new Similarity();
                obj.deserialize(params.Similarity[z]);
                this.Similarity.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDicts返回参数结构体
 * @class
 */
class DescribeDictsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录总条数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 自定义词库信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DictInfo> || null}
         */
        this.Dicts = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Dicts) {
            this.Dicts = new Array();
            for (let z in params.Dicts) {
                let obj = new DictInfo();
                obj.deserialize(params.Dicts[z]);
                this.Dicts.push(obj);
            }
        }
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
 * DeleteDict请求参数结构体
 * @class
 */
class DeleteDictRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要删除的自定义词库ID。
         * @type {string || null}
         */
        this.DictId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DictId = 'DictId' in params ? params.DictId : null;

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
         * 基础词
         * @type {string || null}
         */
        this.Word = null;

        /**
         * 长度
         * @type {number || null}
         */
        this.Length = null;

        /**
         * 起始位置
         * @type {number || null}
         */
        this.BeginOffset = null;

        /**
         * 命名实体类型
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Word = 'Word' in params ? params.Word : null;
        this.Length = 'Length' in params ? params.Length : null;
        this.BeginOffset = 'BeginOffset' in params ? params.BeginOffset : null;
        this.Type = 'Type' in params ? params.Type : null;

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
 * DependencyParsing返回参数结构体
 * @class
 */
class DependencyParsingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 句法依存分析结果，其中句法依存关系的类型包括：
<li>主谓关系，eg: 我送她一束花 (我 <-- 送)
<li>动宾关系，eg: 我送她一束花 (送 --> 花)
<li>间宾关系，eg: 我送她一束花 (送 --> 她)
<li>前置宾语，eg: 他什么书都读 (书 <-- 读)
<li>兼语，eg: 他请我吃饭 (请 --> 我)
<li>定中关系，eg: 红苹果 (红 <-- 苹果)
<li>状中结构，eg: 非常美丽 (非常 <-- 美丽)
<li>动补结构，eg: 做完了作业 (做 --> 完)
<li>并列关系，eg: 大山和大海 (大山 --> 大海)
<li>介宾关系，eg: 在贸易区内 (在 --> 内)
<li>左附加关系，eg: 大山和大海 (和 <-- 大海)
<li>右附加关系，eg: 孩子们 (孩子 --> 们)
<li>独立结构，eg: 两个单句在结构上彼此独立
<li>标点符号，eg: 。
<li>核心关系，eg: 整个句子的核心
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
 * 文本相似度
 * @class
 */
class Similarity extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标文本句子
         * @type {string || null}
         */
        this.Text = null;

        /**
         * 相似度分数
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
        this.Text = 'Text' in params ? params.Text : null;
        this.Score = 'Score' in params ? params.Score : null;

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
         * 错别字内容
         * @type {string || null}
         */
        this.Word = null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Word = 'Word' in params ? params.Word : null;
        this.BeginOffset = 'BeginOffset' in params ? params.BeginOffset : null;
        this.CorrectWord = 'CorrectWord' in params ? params.CorrectWord : null;

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
         * 指定要加载的自定义词库ID。
         * @type {string || null}
         */
        this.DictId = null;

        /**
         * 词法分析模式（默认取2值）：
1、高精度（混合粒度分词能力）；
2、高性能（单粒度分词能力）；
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
        this.DictId = 'DictId' in params ? params.DictId : null;
        this.Flag = 'Flag' in params ? params.Flag : null;

    }
}

/**
 * CreateWordItems返回参数结构体
 * @class
 */
class CreateWordItemsResponse extends  AbstractModel {
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
         * 待分析文本所属的类型，仅当输入参数Mode取值为2class时有效（默认取4值）：
1、商品评论类
2、社交类
3、美食酒店类
4、通用领域类
         * @type {number || null}
         */
        this.Flag = null;

        /**
         * 情感分类模式选项，可取2class或3class（默认值为2class）
1、2class：返回正负面二分类情感结果
2、3class：返回正负面及中性三分类情感结果
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
        this.Text = 'Text' in params ? params.Text : null;
        this.Flag = 'Flag' in params ? params.Flag : null;
        this.Mode = 'Mode' in params ? params.Mode : null;

    }
}

/**
 * SearchWordItems请求参数结构体
 * @class
 */
class SearchWordItemsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义词库ID。
         * @type {string || null}
         */
        this.DictId = null;

        /**
         * 待检索的词条集合。
         * @type {Array.<WordItem> || null}
         */
        this.WordItems = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DictId = 'DictId' in params ? params.DictId : null;

        if (params.WordItems) {
            this.WordItems = new Array();
            for (let z in params.WordItems) {
                let obj = new WordItem();
                obj.deserialize(params.WordItems[z]);
                this.WordItems.push(obj);
            }
        }

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
注意：此字段可能返回 null，表示取不到有效值。
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

/**
 * CreateDict请求参数结构体
 * @class
 */
class CreateDictRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义词库名称，不超过20字。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 自定义词库描述，不超过100字。
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

module.exports = {
    LexicalAnalysisResponse: LexicalAnalysisResponse,
    SentenceEmbeddingRequest: SentenceEmbeddingRequest,
    WordSimilarityRequest: WordSimilarityRequest,
    SearchWordItemsResponse: SearchWordItemsResponse,
    DpToken: DpToken,
    TextSimilarityResponse: TextSimilarityResponse,
    WordEmbeddingRequest: WordEmbeddingRequest,
    ChatBotResponse: ChatBotResponse,
    AutoSummarizationRequest: AutoSummarizationRequest,
    ChatBotRequest: ChatBotRequest,
    TextClassificationResponse: TextClassificationResponse,
    KeywordsExtractionRequest: KeywordsExtractionRequest,
    DictInfo: DictInfo,
    TextCorrectionRequest: TextCorrectionRequest,
    ClassificationResult: ClassificationResult,
    TextCorrectionProResponse: TextCorrectionProResponse,
    Keyword: Keyword,
    TextSimilarityProRequest: TextSimilarityProRequest,
    UpdateDictResponse: UpdateDictResponse,
    DescribeDictsRequest: DescribeDictsRequest,
    WordSimilarityResponse: WordSimilarityResponse,
    SearchResult: SearchResult,
    CreateWordItemsRequest: CreateWordItemsRequest,
    WordItem: WordItem,
    DeleteWordItemsResponse: DeleteWordItemsResponse,
    SentenceEmbeddingResponse: SentenceEmbeddingResponse,
    UpdateDictRequest: UpdateDictRequest,
    DeleteDictResponse: DeleteDictResponse,
    DescribeWordItemsRequest: DescribeWordItemsRequest,
    TextClassificationRequest: TextClassificationRequest,
    CreateDictResponse: CreateDictResponse,
    TextSimilarityRequest: TextSimilarityRequest,
    AutoSummarizationResponse: AutoSummarizationResponse,
    WordEmbeddingResponse: WordEmbeddingResponse,
    DescribeWordItemsResponse: DescribeWordItemsResponse,
    SimilarWordsRequest: SimilarWordsRequest,
    DescribeDictRequest: DescribeDictRequest,
    PosToken: PosToken,
    SentimentAnalysisResponse: SentimentAnalysisResponse,
    DeleteWordItemsRequest: DeleteWordItemsRequest,
    DescribeDictResponse: DescribeDictResponse,
    TextCorrectionProRequest: TextCorrectionProRequest,
    TextCorrectionResponse: TextCorrectionResponse,
    TextSimilarityProResponse: TextSimilarityProResponse,
    DescribeDictsResponse: DescribeDictsResponse,
    DependencyParsingRequest: DependencyParsingRequest,
    DeleteDictRequest: DeleteDictRequest,
    NerToken: NerToken,
    SimilarWordsResponse: SimilarWordsResponse,
    DependencyParsingResponse: DependencyParsingResponse,
    Similarity: Similarity,
    CCIToken: CCIToken,
    LexicalAnalysisRequest: LexicalAnalysisRequest,
    CreateWordItemsResponse: CreateWordItemsResponse,
    SentimentAnalysisRequest: SentimentAnalysisRequest,
    SearchWordItemsRequest: SearchWordItemsRequest,
    KeywordsExtractionResponse: KeywordsExtractionResponse,
    CreateDictRequest: CreateDictRequest,

}
