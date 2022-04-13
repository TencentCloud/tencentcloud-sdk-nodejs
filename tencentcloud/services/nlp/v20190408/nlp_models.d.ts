/**
 * LexicalAnalysis返回参数结构体
 */
export interface LexicalAnalysisResponse {
    /**
      * 命名实体识别结果。取值范围：
<li>PER：表示人名，如刘德华、贝克汉姆</li>
<li>LOC：表示地名，如北京、华山</li>
<li>ORG：表示机构团体名，如腾讯、最高人民法院、人大附中</li>
<li>PRODUCTION：表示产品名，如QQ、微信、iPhone</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
    NerTokens?: Array<NerToken>;
    /**
      * 分词&词性标注结果（词性表请参见附录）
      */
    PosTokens?: Array<PosToken>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SentenceEmbedding请求参数结构体
 */
export interface SentenceEmbeddingRequest {
    /**
      * 输入的文本（仅支持UTF-8格式，不超过500字）
      */
    Text: string;
}
/**
 * WordSimilarity请求参数结构体
 */
export interface WordSimilarityRequest {
    /**
      * 计算相似度的源词（仅支持UTF-8格式，不超过20字）
      */
    SrcWord: string;
    /**
      * 计算相似度的目标词（仅支持UTF-8格式，不超过20字）
      */
    TargetWord: string;
}
/**
 * SearchWordItems返回参数结构体
 */
export interface SearchWordItemsResponse {
    /**
      * 词条检索结果集合。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Results: Array<SearchResult>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 句法依存分析结果，包括基础词，基础词的序号，当前词父节点的序号，句法依存关系的类型
 */
export interface DpToken {
    /**
      * 句法依存关系的类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Relation?: string;
    /**
      * 当前词父节点的序号
注意：此字段可能返回 null，表示取不到有效值。
      */
    HeadId?: number;
    /**
      * 基础词
注意：此字段可能返回 null，表示取不到有效值。
      */
    Word?: string;
    /**
      * 基础词的序号
注意：此字段可能返回 null，表示取不到有效值。
      */
    Id?: number;
}
/**
 * TextSimilarity返回参数结构体
 */
export interface TextSimilarityResponse {
    /**
      * 每个目标句子与源句子的相似度分值，按照分值降序排列
      */
    Similarity: Array<Similarity>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * WordEmbedding请求参数结构体
 */
export interface WordEmbeddingRequest {
    /**
      * 输入的词语（仅支持UTF-8格式，不超过20字）
      */
    Text: string;
}
/**
 * ChatBot返回参数结构体
 */
export interface ChatBotResponse {
    /**
      * 闲聊回复
      */
    Reply?: string;
    /**
      * 对于当前输出回复的自信度
      */
    Confidence?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AutoSummarization请求参数结构体
 */
export interface AutoSummarizationRequest {
    /**
      * 待处理的文本（仅支持UTF-8格式，不超过2000字）
      */
    Text: string;
    /**
      * 指定摘要的长度上限（默认值为200）
注：为保证摘要的可读性，最终生成的摘要长度会低于指定的长度上限。
      */
    Length?: number;
}
/**
 * ChatBot请求参数结构体
 */
export interface ChatBotRequest {
    /**
      * 用户请求的query
      */
    Query: string;
    /**
      * 服务的id,  主要用于儿童闲聊接口，比如手Q的openid
      */
    OpenId?: string;
    /**
      * 0: 通用闲聊, 1:儿童闲聊, 默认是通用闲聊
      */
    Flag?: number;
}
/**
 * TextClassification返回参数结构体
 */
export interface TextClassificationResponse {
    /**
      * 文本分类结果（文本分类映射表请参见附录）
      */
    Classes: Array<ClassificationResult>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * KeywordsExtraction请求参数结构体
 */
export interface KeywordsExtractionRequest {
    /**
      * 待处理的文本（仅支持UTF-8格式，不超过10000字符）
      */
    Text: string;
    /**
      * 指定关键词个数上限（默认值为5）
      */
    Num?: number;
}
/**
 * 自定义词库信息
 */
export interface DictInfo {
    /**
      * 自定义词库名称。
      */
    Name: string;
    /**
      * 自定义词库ID。
      */
    Id: string;
    /**
      * 自定义词库描述信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description?: string;
    /**
      * 自定义词库修改时间，形式为:yyyy-mm-dd hh:mm:ss。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime?: string;
    /**
      * 自定义词库创建时间，形式为:yyyy-mm-dd hh:mm:ss。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime?: string;
}
/**
 * TextCorrection请求参数结构体
 */
export interface TextCorrectionRequest {
    /**
      * 待纠错的文本（仅支持UTF-8格式，不超过2000字符）
      */
    Text: string;
}
/**
 * 文本分类结果
 */
export interface ClassificationResult {
    /**
      * 一级分类名称
      */
    FirstClassName?: string;
    /**
      * 二级分类名称
      */
    SecondClassName?: string;
    /**
      * 一级分类概率
注意：此字段可能返回 null，表示取不到有效值。
      */
    FirstClassProbability?: number;
    /**
      * 二级分类概率
注意：此字段可能返回 null，表示取不到有效值。
      */
    SecondClassProbability?: number;
    /**
      * 三级分类名称，仅有当新闻领域五分类可能出现，详情见文本分类文档
注意：此字段可能返回 null，表示取不到有效值。
      */
    ThirdClassName?: string;
    /**
      * 三级分类概率，仅有当新闻领域五分类可能出现，详情见文本分类文档
注意：此字段可能返回 null，表示取不到有效值。
      */
    ThirdClassProbability?: number;
    /**
      * 四级分类名称，仅有当新闻领域五分类可能出现，详情见文本分类文档
注意：此字段可能返回 null，表示取不到有效值。
      */
    FourthClassName?: string;
    /**
      * 四级分类概率，仅有当新闻领域五分类可能出现，详情见文本分类文档
注意：此字段可能返回 null，表示取不到有效值。
      */
    FourthClassProbability?: number;
    /**
      * 五级分类名称，仅有当新闻领域五分类可能出现，详情见文本分类文档
注意：此字段可能返回 null，表示取不到有效值。
      */
    FifthClassName?: string;
    /**
      * 五级分类概率，仅有当新闻领域五分类可能出现，详情见文本分类文档
注意：此字段可能返回 null，表示取不到有效值。
      */
    FifthClassProbability?: number;
}
/**
 * TextCorrectionPro返回参数结构体
 */
export interface TextCorrectionProResponse {
    /**
      * 纠错详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    CCITokens: Array<CCIToken>;
    /**
      * 纠错后的文本
      */
    ResultText: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 关键词提取结果
 */
export interface Keyword {
    /**
      * 权重
      */
    Score?: number;
    /**
      * 关键词
      */
    Word?: string;
}
/**
 * TextSimilarityPro请求参数结构体
 */
export interface TextSimilarityProRequest {
    /**
      * 需要与目标句子计算相似度的源句子（仅支持UTF-8格式，不超过128字符）
      */
    SrcText: string;
    /**
      * 目标句子（仅支持UTF-8格式，不超过128字符）
      */
    TargetText: Array<string>;
}
/**
 * UpdateDict返回参数结构体
 */
export interface UpdateDictResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDicts请求参数结构体
 */
export interface DescribeDictsRequest {
    /**
      * 每页数据量，范围为1~100，默认为10。
      */
    Limit?: number;
    /**
      * 分页偏移量，从0开始，默认为0。
      */
    Offset?: number;
}
/**
 * WordSimilarity返回参数结构体
 */
export interface WordSimilarityResponse {
    /**
      * 两个词语的相似度
      */
    Similarity?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 词条搜索的结果，主要描述该词条是否存在以及相关的词性。
 */
export interface SearchResult {
    /**
      * 被搜索的词条文本。
      */
    Text: string;
    /**
      * 0表示词条不存在，1表示存在。
      */
    IsExist: number;
    /**
      * 匹配到的词条文本。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MatchText: string;
    /**
      * 词条的词性。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Pos?: string;
}
/**
 * CreateWordItems请求参数结构体
 */
export interface CreateWordItemsRequest {
    /**
      * 自定义词库ID。
      */
    DictId: string;
    /**
      * 待添加的词条集合。
      */
    WordItems: Array<WordItem>;
}
/**
 * 词条信息。
 */
export interface WordItem {
    /**
      * 词条文本内容。
      */
    Text: string;
    /**
      * 词条创建时间。
      */
    CreateTime?: string;
    /**
      * 词条的词性。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Pos?: string;
}
/**
 * DeleteWordItems返回参数结构体
 */
export interface DeleteWordItemsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SentenceEmbedding返回参数结构体
 */
export interface SentenceEmbeddingResponse {
    /**
      * 句向量数组
      */
    Vector?: Array<number>;
    /**
      * 句向量的维度
      */
    Dimension?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateDict请求参数结构体
 */
export interface UpdateDictRequest {
    /**
      * 自定义词库ID。
      */
    DictId: string;
    /**
      * 词库描述，不超过100字。
      */
    Description?: string;
    /**
      * 词库名称，不超过20字。
      */
    Name?: string;
}
/**
 * DeleteDict返回参数结构体
 */
export interface DeleteDictResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeWordItems请求参数结构体
 */
export interface DescribeWordItemsRequest {
    /**
      * 自定义词库ID。
      */
    DictId: string;
    /**
      * 分页偏移量，从0开始，默认为0。
      */
    Offset?: number;
    /**
      * 每页数据量，范围为1~100，默认为10。
      */
    Limit?: number;
    /**
      * 待检索的词条文本，支持模糊匹配。
      */
    Text?: string;
}
/**
 * TextClassification请求参数结构体
 */
export interface TextClassificationRequest {
    /**
      * 待分类的文本（仅支持UTF-8格式，不超过10000字）
      */
    Text: string;
    /**
      * 领域分类体系（默认取1值）：
1、通用领域，二分类
2、新闻领域，五分类。类别数据不一定全部返回，详情见类目映射表（注意：目前五分类已下线不可用）
      */
    Flag?: number;
}
/**
 * CreateDict返回参数结构体
 */
export interface CreateDictResponse {
    /**
      * 创建的自定义词库ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DictId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * TextSimilarity请求参数结构体
 */
export interface TextSimilarityRequest {
    /**
      * 需要与目标句子计算相似度的源句子（仅支持UTF-8格式，不超过500字符）
      */
    SrcText: string;
    /**
      * 目标句子（以句子数量为单位消耗资源包）
      */
    TargetText: Array<string>;
}
/**
 * AutoSummarization返回参数结构体
 */
export interface AutoSummarizationResponse {
    /**
      * 文本摘要结果
      */
    Summary?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * WordEmbedding返回参数结构体
 */
export interface WordEmbeddingResponse {
    /**
      * 词向量数组
      */
    Vector?: Array<number>;
    /**
      * 词向量的维度
      */
    Dimension?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeWordItems返回参数结构体
 */
export interface DescribeWordItemsResponse {
    /**
      * 词条记录总条数。
      */
    TotalCount?: number;
    /**
      * 词条信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    WordItems?: Array<WordItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SimilarWords请求参数结构体
 */
export interface SimilarWordsRequest {
    /**
      * 输入的词语（仅支持UTF-8格式，不超过20字）
      */
    Text: string;
    /**
      * 相似词个数；取值范围：1-200，默认为10；
      */
    WordNumber?: number;
}
/**
 * DescribeDict请求参数结构体
 */
export interface DescribeDictRequest {
    /**
      * 自定义词库ID。
      */
    DictId?: string;
    /**
      * 自定义词库名称，模糊搜索。
      */
    Name?: string;
}
/**
 * 分词&词性标注结果
 */
export interface PosToken {
    /**
      * 基础词
      */
    Word: string;
    /**
      * 长度
      */
    Length: number;
    /**
      * 起始位置
      */
    BeginOffset: number;
    /**
      * 词性
      */
    Pos: string;
}
/**
 * SentimentAnalysis返回参数结构体
 */
export interface SentimentAnalysisResponse {
    /**
      * 正面情感概率
      */
    Positive?: number;
    /**
      * 中性情感概率，当输入参数Mode取值为3class时有效，否则值为空
注意：此字段可能返回 null，表示取不到有效值。
      */
    Neutral?: number;
    /**
      * 负面情感概率
      */
    Negative?: number;
    /**
      * 情感分类结果：
1、positive，表示正面情感
2、negative，表示负面情感
3、neutral，表示中性、无情感
      */
    Sentiment?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteWordItems请求参数结构体
 */
export interface DeleteWordItemsRequest {
    /**
      * 自定义词库ID。
      */
    DictId: string;
    /**
      * 待删除的词条集合。
      */
    WordItems: Array<WordItem>;
}
/**
 * DescribeDict返回参数结构体
 */
export interface DescribeDictResponse {
    /**
      * 查询到的词库信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Dicts?: Array<DictInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * TextCorrectionPro请求参数结构体
 */
export interface TextCorrectionProRequest {
    /**
      * 待纠错的文本（仅支持UTF-8格式，不超过128字符）
      */
    Text: string;
}
/**
 * TextCorrection返回参数结构体
 */
export interface TextCorrectionResponse {
    /**
      * 纠错详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    CCITokens?: Array<CCIToken>;
    /**
      * 纠错后的文本
      */
    ResultText?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * TextSimilarityPro返回参数结构体
 */
export interface TextSimilarityProResponse {
    /**
      * 每个目标句子与源句子的相似度分值，按照分值降序排列
      */
    Similarity: Array<Similarity>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDicts返回参数结构体
 */
export interface DescribeDictsResponse {
    /**
      * 记录总条数。
      */
    TotalCount?: number;
    /**
      * 自定义词库信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Dicts?: Array<DictInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DependencyParsing请求参数结构体
 */
export interface DependencyParsingRequest {
    /**
      * 待分析的文本（仅支持UTF-8格式，不超过200字）
      */
    Text: string;
}
/**
 * DeleteDict请求参数结构体
 */
export interface DeleteDictRequest {
    /**
      * 要删除的自定义词库ID。
      */
    DictId: string;
}
/**
 * 命名实体识别结果
 */
export interface NerToken {
    /**
      * 基础词
      */
    Word: string;
    /**
      * 长度
      */
    Length: number;
    /**
      * 起始位置
      */
    BeginOffset: number;
    /**
      * 命名实体类型
      */
    Type: string;
}
/**
 * SimilarWords返回参数结构体
 */
export interface SimilarWordsResponse {
    /**
      * 相似词数组
      */
    SimilarWords?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DependencyParsing返回参数结构体
 */
export interface DependencyParsingResponse {
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
      */
    DpTokens?: Array<DpToken>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 文本相似度
 */
export interface Similarity {
    /**
      * 目标文本句子
      */
    Text: string;
    /**
      * 相似度分数
      */
    Score: number;
}
/**
 * 文本纠错结果
 */
export interface CCIToken {
    /**
      * 错别字内容
      */
    Word?: string;
    /**
      * 错别字的起始位置，从0开始
      */
    BeginOffset?: number;
    /**
      * 错别字纠错结果
      */
    CorrectWord?: string;
}
/**
 * LexicalAnalysis请求参数结构体
 */
export interface LexicalAnalysisRequest {
    /**
      * 待分析的文本（仅支持UTF-8格式，不超过500字）
      */
    Text: string;
    /**
      * 指定要加载的自定义词库ID。
      */
    DictId?: string;
    /**
      * 词法分析模式（默认取2值）：
1、高精度（混合粒度分词能力）；
2、高性能（单粒度分词能力）；
      */
    Flag?: number;
}
/**
 * CreateWordItems返回参数结构体
 */
export interface CreateWordItemsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SentimentAnalysis请求参数结构体
 */
export interface SentimentAnalysisRequest {
    /**
      * 待分析的文本（仅支持UTF-8格式，不超过200字）
      */
    Text: string;
    /**
      * 待分析文本所属的类型，仅当输入参数Mode取值为2class时有效（默认取4值）：
1、商品评论类
2、社交类
3、美食酒店类
4、通用领域类
      */
    Flag?: number;
    /**
      * 情感分类模式选项，可取2class或3class（默认值为2class）
1、2class：返回正负面二分类情感结果
2、3class：返回正负面及中性三分类情感结果
      */
    Mode?: string;
}
/**
 * SearchWordItems请求参数结构体
 */
export interface SearchWordItemsRequest {
    /**
      * 自定义词库ID。
      */
    DictId: string;
    /**
      * 待检索的词条集合。
      */
    WordItems: Array<WordItem>;
}
/**
 * KeywordsExtraction返回参数结构体
 */
export interface KeywordsExtractionResponse {
    /**
      * 关键词提取结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    Keywords: Array<Keyword>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateDict请求参数结构体
 */
export interface CreateDictRequest {
    /**
      * 自定义词库名称，不超过20字。
      */
    Name: string;
    /**
      * 自定义词库描述，不超过100字。
      */
    Description?: string;
}
