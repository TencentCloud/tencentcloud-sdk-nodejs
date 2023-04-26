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

/**
 * RetrieveSimilarWords返回参数结构体
 */
export interface RetrieveSimilarWordsResponse {
  /**
   * 召回的相似词数组。
   */
  WordList?: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SentenceEmbedding请求参数结构体
 */
export interface SentenceEmbeddingRequest {
  /**
   * 输入的文本（仅支持UTF-8格式，不超过500字）
   */
  Text: string
}

/**
 * EvaluateWordSimilarity返回参数结构体
 */
export interface EvaluateWordSimilarityResponse {
  /**
   * 词相似度分值。
   */
  Similarity?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ParseWords返回参数结构体
 */
export interface ParseWordsResponse {
  /**
   * 输入文本正则化的结果。（包括对英文文本中的开头和实体进行大写等）
   */
  NormalText?: string

  /**
      * 基础粒度分词和词性标注的结果。（词性表请参见附录）

      */
  BasicParticiples?: Array<BasicParticiple>

  /**
   * 复合粒度分词和词性标注的结果。（词性表请参见附录）
   */
  CompoundParticiples?: Array<CompoundParticiple>

  /**
      * 实体识别结果。（实体类型数据请参见附录）

      */
  Entities?: Array<Entity>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 基础粒度分词和词性标注的结果
 */
export interface BasicParticiple {
  /**
   * 基础词。
   */
  Word?: string

  /**
   * 基础词在NormalText中的起始位置。
   */
  BeginOffset?: number

  /**
   * 基础词的长度。
   */
  Length?: number

  /**
   * 词性。
   */
  Pos?: string
}

/**
 * 自定义词库信息
 */
export interface DictInfo {
  /**
   * 自定义词库名称。
   */
  Name: string

  /**
   * 自定义词库ID。
   */
  Id: string

  /**
   * 自定义词库描述信息。
   */
  Description?: string

  /**
   * 自定义词库修改时间，形式为:yyyy-mm-dd hh:mm:ss。
   */
  UpdateTime?: string

  /**
   * 自定义词库创建时间，形式为:yyyy-mm-dd hh:mm:ss。
   */
  CreateTime?: string
}

/**
 * 词条信息。
 */
export interface WordItem {
  /**
   * 词条文本内容。
   */
  Text: string

  /**
   * 词条创建时间。
   */
  CreateTime?: string

  /**
   * 词条的词性。
   */
  Pos?: string
}

/**
 * TextCorrectionPro返回参数结构体
 */
export interface TextCorrectionProResponse {
  /**
      * 纠错详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  CCITokens: Array<CCIToken>

  /**
   * 纠错后的文本
   */
  ResultText: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 文本润色结果
 */
export interface Embellish {
  /**
      * 润色后的文本。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Text?: string

  /**
      * 润色类型。类型列表
expansion：扩写
rewriting：改写
translation_m2a：从现代文改写为古文
translation_a2m：从古文改写为现代文


注意：此字段可能返回 null，表示取不到有效值。
      */
  EmbellishType?: string
}

/**
 * EvaluateWordSimilarity请求参数结构体
 */
export interface EvaluateWordSimilarityRequest {
  /**
      * 计算相似度的源词。（仅支持UTF-8格式，不超过10字符）

      */
  SourceWord: string

  /**
      * 计算相似度的目标词。（仅支持UTF-8格式，不超过10字符）

      */
  TargetWord: string
}

/**
 * DeleteDict返回参数结构体
 */
export interface DeleteDictResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TextWriting返回参数结构体
 */
export interface TextWritingResponse {
  /**
   * 续写结果列表。
   */
  WritingList?: Array<Writing>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDict返回参数结构体
 */
export interface CreateDictResponse {
  /**
      * 创建的自定义词库ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DictId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TextClassification返回参数结构体
 */
export interface TextClassificationResponse {
  /**
   * 文本分类结果（文本分类映射表请参见附录）
   */
  Classes: Array<ClassificationResult>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

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
  NerTokens?: Array<NerToken>

  /**
   * 分词&词性标注结果（词性表请参见附录）
   */
  PosTokens?: Array<PosToken>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDict返回参数结构体
 */
export interface DescribeDictResponse {
  /**
      * 查询到的词库信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Dicts?: Array<DictInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDicts返回参数结构体
 */
export interface DescribeDictsResponse {
  /**
   * 记录总条数。
   */
  TotalCount?: number

  /**
      * 自定义词库信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Dicts?: Array<DictInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDict请求参数结构体
 */
export interface DeleteDictRequest {
  /**
   * 要删除的自定义词库ID。
   */
  DictId: string
}

/**
 * 实体识别结果。
 */
export interface Entity {
  /**
   * 基础词。
   */
  Word?: string

  /**
   * 基础词在NormalText中的起始位置。
   */
  BeginOffset?: number

  /**
   * 基础词的长度。
   */
  Length?: number

  /**
   * 实体类型的标准名字。
   */
  Type?: string

  /**
   * 类型名字的自然语言表达。（中文或英文）
   */
  Name?: string
}

/**
 * GeneratePoetry请求参数结构体
 */
export interface GeneratePoetryRequest {
  /**
   * 生成诗词的关键词。
   */
  Text: string

  /**
   * 生成诗词的类型。0：藏头或藏身；1：藏头；2：藏身。默认为0。
   */
  PoetryType?: number

  /**
   * 诗的体裁。0：五言律诗或七言律诗；5：五言律诗；7：七言律诗。默认为0。
   */
  Genre?: number
}

/**
 * SearchWordItems请求参数结构体
 */
export interface SearchWordItemsRequest {
  /**
   * 自定义词库ID。
   */
  DictId: string

  /**
   * 待检索的词条集合。
   */
  WordItems: Array<WordItem>
}

/**
 * GenerateKeywordSentence请求参数结构体
 */
export interface GenerateKeywordSentenceRequest {
  /**
   * 生成句子的关键词，关键词个数需不超过4个，中文关键词长度应不超过10字符，英文关键词长度不超过3个单词。关键词中不可包含标点符号。
   */
  WordList: Array<string>

  /**
      * 返回生成句子的个数。数量需>=1且<=5。
（注意实际结果可能小于指定个数）
      */
  Number: number

  /**
      * 指定生成句子的领域，支持领域列表
general：通用领域，支持中英文
academic：学术领域，仅支持英文
默认为general（通用领域）。
      */
  Domain?: string
}

/**
 * SentimentAnalysis返回参数结构体
 */
export interface SentimentAnalysisResponse {
  /**
   * 正面情感概率
   */
  Positive: number

  /**
      * 中性情感概率，当输入参数Mode取值为3class时有效，否则值为空
注意：此字段可能返回 null，表示取不到有效值。
      */
  Neutral: number

  /**
   * 负面情感概率
   */
  Negative: number

  /**
      * 情感分类结果：
1、positive，表示正面情感
2、negative，表示负面情感
3、neutral，表示中性、无情感
      */
  Sentiment: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChatBot返回参数结构体
 */
export interface ChatBotResponse {
  /**
   * 闲聊回复
   */
  Reply: string

  /**
   * 对于当前输出回复的自信度
   */
  Confidence: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * KeywordsExtraction请求参数结构体
 */
export interface KeywordsExtractionRequest {
  /**
   * 待处理的文本（仅支持UTF-8格式，不超过10000字符）
   */
  Text: string

  /**
   * 指定关键词个数上限（默认值为5）
   */
  Num?: number
}

/**
 * 词条搜索的结果，主要描述该词条是否存在以及相关的词性。
 */
export interface SearchResult {
  /**
   * 被搜索的词条文本。
   */
  Text: string

  /**
   * 0表示词条不存在，1表示存在。
   */
  IsExist: number

  /**
   * 匹配到的词条文本。
   */
  MatchText: string

  /**
   * 词条的词性。
   */
  Pos?: string
}

/**
 * SentenceEmbedding返回参数结构体
 */
export interface SentenceEmbeddingResponse {
  /**
   * 句向量数组
   */
  Vector?: Array<number>

  /**
   * 句向量的维度
   */
  Dimension?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateDict请求参数结构体
 */
export interface UpdateDictRequest {
  /**
   * 自定义词库ID。
   */
  DictId: string

  /**
   * 词库描述，不超过100字。
   */
  Description?: string

  /**
   * 词库名称，不超过20字。
   */
  Name?: string
}

/**
 * SentimentAnalysis请求参数结构体
 */
export interface SentimentAnalysisRequest {
  /**
   * 待分析的文本（仅支持UTF-8格式，不超过200字）
   */
  Text: string

  /**
      * 待分析文本所属的类型，仅当输入参数Mode取值为2class时有效（默认取4值）：
1、商品评论类
2、社交类
3、美食酒店类
4、通用领域类
      */
  Flag?: number

  /**
      * 情感分类模式选项，可取2class或3class（默认值为2class）
1、2class：返回正负面二分类情感结果
2、3class：返回正负面及中性三分类情感结果
      */
  Mode?: string
}

/**
 * TextWriting请求参数结构体
 */
export interface TextWritingRequest {
  /**
   * 待续写的句子，文本统一使用utf-8格式编码，长度不超过200字符。
   */
  Text: string

  /**
      * 待续写文本的语言类型，支持语言列表
zh：中文
en：英文
      */
  SourceLang: string

  /**
      * 返回续写结果的个数。数量需>=1且<=5。
（注意实际结果可能小于指定个数）
      */
  Number: number

  /**
      * 指定续写领域，支持领域列表
general：通用领域，支持中英文补全
academic：学术领域，仅支持英文补全
默认为general（通用领域）。
      */
  Domain?: string

  /**
      * 指定续写风格，支持风格列表
science_fiction：科幻
military_history：军事
xuanhuan_wuxia：武侠
urban_officialdom：职场
默认为xuanhuan_wuxia（武侠）。
      */
  Style?: string
}

/**
 * AutoSummarization返回参数结构体
 */
export interface AutoSummarizationResponse {
  /**
   * 文本摘要结果
   */
  Summary: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TextCorrection返回参数结构体
 */
export interface TextCorrectionResponse {
  /**
      * 纠错详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  CCITokens: Array<CCIToken>

  /**
   * 纠错后的文本
   */
  ResultText: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteWordItems请求参数结构体
 */
export interface DeleteWordItemsRequest {
  /**
   * 自定义词库ID。
   */
  DictId: string

  /**
   * 待删除的词条集合。
   */
  WordItems: Array<WordItem>
}

/**
 * 命名实体识别结果
 */
export interface NerToken {
  /**
   * 基础词
   */
  Word: string

  /**
   * 长度
   */
  Length: number

  /**
   * 起始位置
   */
  BeginOffset: number

  /**
   * 命名实体类型
   */
  Type: string
}

/**
 * SimilarWords返回参数结构体
 */
export interface SimilarWordsResponse {
  /**
   * 相似词数组
   */
  SimilarWords?: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  DpTokens?: Array<DpToken>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GenerateCouplet请求参数结构体
 */
export interface GenerateCoupletRequest {
  /**
   * 生成对联的关键词。长度需>=2，当长度>2时，自动截取前两个字作为关键字。内容需为常用汉字（不含有数字、英文、韩语、日语、符号等等其他）。
   */
  Text: string

  /**
   * 返回的文本结果为繁体还是简体。0：简体；1：繁体。默认为0。
   */
  TargetType?: number
}

/**
 * LexicalAnalysis请求参数结构体
 */
export interface LexicalAnalysisRequest {
  /**
   * 待分析的文本（仅支持UTF-8格式，不超过500字）
   */
  Text: string

  /**
   * 指定要加载的自定义词库ID。
   */
  DictId?: string

  /**
      * 词法分析模式（默认取2值）：
1、高精度（混合粒度分词能力）；
2、高性能（单粒度分词能力）；
      */
  Flag?: number
}

/**
 * CreateWordItems返回参数结构体
 */
export interface CreateWordItemsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TextSimilarityPro请求参数结构体
 */
export interface TextSimilarityProRequest {
  /**
   * 需要与目标句子计算相似度的源句子（仅支持UTF-8格式，不超过128字符）
   */
  SrcText: string

  /**
   * 目标句子（仅支持UTF-8格式，不超过128字符）
   */
  TargetText: Array<string>
}

/**
 * RetrieveSimilarWords请求参数结构体
 */
export interface RetrieveSimilarWordsRequest {
  /**
   * 输入的词语。（仅支持UTF-8格式，不超过10字符）
   */
  Text: string

  /**
   * 召回的相似词个数，取值范围为1-20。
   */
  Number: number
}

/**
 * 文本续写结果
 */
export interface Writing {
  /**
   * 续写的文本。
   */
  TargetText?: string

  /**
   * 续写的前缀。
   */
  PrefixText?: string
}

/**
 * AutoSummarization请求参数结构体
 */
export interface AutoSummarizationRequest {
  /**
   * 待处理的文本（仅支持UTF-8格式，不超过2000字）
   */
  Text: string

  /**
      * 指定摘要的长度上限（默认值为200）
注：为保证摘要的可读性，最终生成的摘要长度会低于指定的长度上限。
      */
  Length?: number
}

/**
 * 文本分类结果
 */
export interface ClassificationResult {
  /**
   * 一级分类名称
   */
  FirstClassName?: string

  /**
   * 二级分类名称
   */
  SecondClassName?: string

  /**
   * 一级分类概率
   */
  FirstClassProbability?: number

  /**
   * 二级分类概率
   */
  SecondClassProbability?: number

  /**
   * 三级分类名称，仅有当新闻领域五分类可能出现，详情见文本分类文档
   */
  ThirdClassName?: string

  /**
   * 三级分类概率，仅有当新闻领域五分类可能出现，详情见文本分类文档
   */
  ThirdClassProbability?: number

  /**
   * 四级分类名称，仅有当新闻领域五分类可能出现，详情见文本分类文档
   */
  FourthClassName?: string

  /**
   * 四级分类概率，仅有当新闻领域五分类可能出现，详情见文本分类文档
   */
  FourthClassProbability?: number

  /**
   * 五级分类名称，仅有当新闻领域五分类可能出现，详情见文本分类文档
   */
  FifthClassName?: string

  /**
   * 五级分类概率，仅有当新闻领域五分类可能出现，详情见文本分类文档
   */
  FifthClassProbability?: number
}

/**
 * DescribeDicts请求参数结构体
 */
export interface DescribeDictsRequest {
  /**
   * 每页数据量，范围为1~100，默认为10。
   */
  Limit?: number

  /**
   * 分页偏移量，从0开始，默认为0。
   */
  Offset?: number
}

/**
 * WordSimilarity返回参数结构体
 */
export interface WordSimilarityResponse {
  /**
   * 两个词语的相似度
   */
  Similarity?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TextEmbellish请求参数结构体
 */
export interface TextEmbellishRequest {
  /**
   * 待润色的文本。中文文本长度需<=50字符；英文文本长度需<=30个单词。
   */
  Text: string

  /**
      * 待润色文本的语言类型，支持语言列表
zh：中文
en：英文
      */
  SourceLang: string

  /**
      * 返回润色结果的个数。数量需>=1且<=5。
（注意实际结果可能小于指定个数）
      */
  Number: number

  /**
      * 控制润色类型，类型列表
both：同时返回改写和扩写
expansion：扩写
rewriting：改写
m2a：从现代文改写为古文
a2m：从古文改写为现代文
默认为both。
      */
  Style?: string
}

/**
 * EvaluateSentenceSimilarity返回参数结构体
 */
export interface EvaluateSentenceSimilarityResponse {
  /**
   * 每个句子对的相似度分值。
   */
  ScoreList?: Array<number>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateWordItems请求参数结构体
 */
export interface CreateWordItemsRequest {
  /**
   * 自定义词库ID。
   */
  DictId: string

  /**
   * 待添加的词条集合。
   */
  WordItems: Array<WordItem>
}

/**
 * SimilarWords请求参数结构体
 */
export interface SimilarWordsRequest {
  /**
   * 输入的词语（仅支持UTF-8格式，不超过20字）
   */
  Text: string

  /**
   * 相似词个数；取值范围：1-200，默认为10；
   */
  WordNumber?: number
}

/**
 * DescribeWordItems请求参数结构体
 */
export interface DescribeWordItemsRequest {
  /**
   * 自定义词库ID。
   */
  DictId: string

  /**
   * 分页偏移量，从0开始，默认为0。
   */
  Offset?: number

  /**
   * 每页数据量，范围为1~100，默认为10。
   */
  Limit?: number

  /**
   * 待检索的词条文本，支持模糊匹配。
   */
  Text?: string
}

/**
 * GenerateCouplet返回参数结构体
 */
export interface GenerateCoupletResponse {
  /**
   * 横批。
   */
  TopScroll: string

  /**
   * 上联与下联。
   */
  Content: Array<string>

  /**
   * 当对联随机生成时，展示随机生成原因。
   */
  RandomCause: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * WordEmbedding返回参数结构体
 */
export interface WordEmbeddingResponse {
  /**
   * 词向量数组
   */
  Vector: Array<number>

  /**
   * 词向量的维度
   */
  Dimension: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 分词&词性标注结果
 */
export interface PosToken {
  /**
   * 基础词
   */
  Word: string

  /**
   * 长度
   */
  Length: number

  /**
   * 起始位置
   */
  BeginOffset: number

  /**
   * 词性
   */
  Pos: string
}

/**
 * KeywordsExtraction返回参数结构体
 */
export interface KeywordsExtractionResponse {
  /**
      * 关键词提取结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  Keywords: Array<Keyword>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SentenceCorrection返回参数结构体
 */
export interface SentenceCorrectionResponse {
  /**
      * 纠错结果列表。
（注意仅展示错误句子的纠错结果，若句子无错则不展示，若全部待纠错句子都被认为无错，则可能返回数组为空）
      */
  CorrectionList?: Array<CorrectionItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EvaluateSentenceSimilarity请求参数结构体
 */
export interface EvaluateSentenceSimilarityRequest {
  /**
   * 待分析的句子对数组。句子对应不超过5对，支持中英文文本，原句子与目标句子均应不超过500字符。
   */
  SentencePairList: Array<SentencePair>
}

/**
 * 文本相似度
 */
export interface Similarity {
  /**
   * 目标文本句子
   */
  Text: string

  /**
   * 相似度分数
   */
  Score: number
}

/**
 * GenerateKeywordSentence返回参数结构体
 */
export interface GenerateKeywordSentenceResponse {
  /**
   * 生成的句子列表。
   */
  KeywordSentenceList?: Array<KeywordSentence>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 文本纠错结果
 */
export interface CCIToken {
  /**
   * 错别字内容
   */
  Word?: string

  /**
   * 错别字的起始位置，从0开始
   */
  BeginOffset?: number

  /**
   * 错别字纠错结果
   */
  CorrectWord?: string
}

/**
 * TextEmbellish返回参数结构体
 */
export interface TextEmbellishResponse {
  /**
   * 润色结果列表。
   */
  EmbellishList?: Array<Embellish>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 纠错结果列表
 */
export interface CorrectionItem {
  /**
   * 纠错句子的序号。
   */
  Order?: number

  /**
   * 错误的起始位置，从0开始。
   */
  BeginOffset?: number

  /**
   * 错误内容长度。
   */
  Len?: number

  /**
   * 错误内容。
   */
  Word?: string

  /**
      * 纠错结果，当为删除类错误时，结果为null。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CorrectWord?: Array<string>

  /**
   * 纠错类型。0：替换；1：插入；2：删除。
   */
  CorrectionType?: number

  /**
   * 纠错信息置信度。0：error；1：warning；error的置信度更高。（仅供参考）
   */
  Confidence?: number

  /**
      * 纠错信息中文描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DescriptionZh?: string

  /**
      * 纠错信息英文描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DescriptionEn?: string
}

/**
 * TextClassification请求参数结构体
 */
export interface TextClassificationRequest {
  /**
   * 待分类的文本（仅支持UTF-8格式，不超过10000字）
   */
  Text: string

  /**
      * 领域分类体系（默认取1值）：
1、通用领域，二分类
2、新闻领域，五分类。类别数据不一定全部返回，详情见类目映射表（注意：目前五分类已下线不可用）
      */
  Flag?: number
}

/**
 * SearchWordItems返回参数结构体
 */
export interface SearchWordItemsResponse {
  /**
      * 词条检索结果集合。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Results: Array<SearchResult>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 句法依存分析结果，包括基础词，基础词的序号，当前词父节点的序号，句法依存关系的类型
 */
export interface DpToken {
  /**
   * 句法依存关系的类型
   */
  Relation?: string

  /**
   * 当前词父节点的序号
   */
  HeadId?: number

  /**
   * 基础词
   */
  Word?: string

  /**
   * 基础词的序号
   */
  Id?: number
}

/**
 * ChatBot请求参数结构体
 */
export interface ChatBotRequest {
  /**
   * 用户请求的query
   */
  Query: string

  /**
   * 服务的id,  主要用于儿童闲聊接口，比如手Q的openid
   */
  OpenId?: string

  /**
   * 0: 通用闲聊, 1:儿童闲聊, 默认是通用闲聊
   */
  Flag?: number
}

/**
 * TextCorrection请求参数结构体
 */
export interface TextCorrectionRequest {
  /**
   * 待纠错的文本（仅支持UTF-8格式，不超过2000字符）
   */
  Text: string
}

/**
 * 关键词提取结果
 */
export interface Keyword {
  /**
   * 权重
   */
  Score?: number

  /**
   * 关键词
   */
  Word?: string
}

/**
 * UpdateDict返回参数结构体
 */
export interface UpdateDictResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * WordSimilarity请求参数结构体
 */
export interface WordSimilarityRequest {
  /**
   * 计算相似度的源词（仅支持UTF-8格式，不超过20字）
   */
  SrcWord: string

  /**
   * 计算相似度的目标词（仅支持UTF-8格式，不超过20字）
   */
  TargetWord: string
}

/**
 * DeleteWordItems返回参数结构体
 */
export interface DeleteWordItemsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TextSimilarity请求参数结构体
 */
export interface TextSimilarityRequest {
  /**
   * 需要与目标句子计算相似度的源句子（仅支持UTF-8格式，不超过500字符）
   */
  SrcText: string

  /**
   * 目标句子（以句子数量为单位消耗资源包）
   */
  TargetText: Array<string>
}

/**
 * WordEmbedding请求参数结构体
 */
export interface WordEmbeddingRequest {
  /**
   * 输入的词语（仅支持UTF-8格式，不超过20字）
   */
  Text: string
}

/**
 * 复合粒度分词和词性标注的结果。
 */
export interface CompoundParticiple {
  /**
   * 基础词。
   */
  Word?: string

  /**
   * 基础词在NormalText中的起始位置。
   */
  BeginOffset?: number

  /**
   * 基础词的长度。
   */
  Length?: number

  /**
   * 词性。
   */
  Pos?: string
}

/**
 * DescribeWordItems返回参数结构体
 */
export interface DescribeWordItemsResponse {
  /**
   * 词条记录总条数。
   */
  TotalCount?: number

  /**
      * 词条信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  WordItems?: Array<WordItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ParseWords请求参数结构体
 */
export interface ParseWordsRequest {
  /**
   * 待分析的文本（支持中英文文本，不超过500字符）
   */
  Text: string
}

/**
 * TextSimilarity返回参数结构体
 */
export interface TextSimilarityResponse {
  /**
   * 每个目标句子与源句子的相似度分值，按照分值降序排列
   */
  Similarity: Array<Similarity>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDict请求参数结构体
 */
export interface DescribeDictRequest {
  /**
   * 自定义词库ID。
   */
  DictId?: string

  /**
   * 自定义词库名称，模糊搜索。
   */
  Name?: string
}

/**
 * GeneratePoetry返回参数结构体
 */
export interface GeneratePoetryResponse {
  /**
   * 诗题，即输入的生成诗词的关键词。
   */
  Title: string

  /**
   * 诗的内容。
   */
  Content: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TextSimilarityPro返回参数结构体
 */
export interface TextSimilarityProResponse {
  /**
   * 每个目标句子与源句子的相似度分值，按照分值降序排列
   */
  Similarity: Array<Similarity>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DependencyParsing请求参数结构体
 */
export interface DependencyParsingRequest {
  /**
   * 待分析的文本（仅支持UTF-8格式，不超过200字）
   */
  Text: string
}

/**
 * 待分析的句子对
 */
export interface SentencePair {
  /**
   * 需要与目标句子计算相似度的源句子。（仅支持UTF-8格式，不超过500字符）
   */
  SourceText: string

  /**
      * 目标句子。（仅支持UTF-8格式，不超过500字符）

      */
  TargetText: string
}

/**
 * 通过关键词生成的句子信息
 */
export interface KeywordSentence {
  /**
   * 通过关键词生成的句子。
   */
  TargetText?: string
}

/**
 * SentenceCorrection请求参数结构体
 */
export interface SentenceCorrectionRequest {
  /**
   * 待纠错的句子列表。可以以数组方式在一次请求中填写多个待纠错的句子。文本统一使用utf-8格式编码，每个中文句子的长度不超过150字符，每个英文句子的长度不超过100个单词，且数组长度需小于150，即句子总数需少于150句。
   */
  TextList: Array<string>
}

/**
 * TextCorrectionPro请求参数结构体
 */
export interface TextCorrectionProRequest {
  /**
   * 待纠错的文本（仅支持UTF-8格式，不超过128字符）
   */
  Text: string
}

/**
 * CreateDict请求参数结构体
 */
export interface CreateDictRequest {
  /**
   * 自定义词库名称，不超过20字。
   */
  Name: string

  /**
   * 自定义词库描述，不超过100字。
   */
  Description?: string
}
