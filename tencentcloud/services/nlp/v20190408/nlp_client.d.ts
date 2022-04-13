import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { LexicalAnalysisResponse, SentenceEmbeddingRequest, WordSimilarityRequest, SearchWordItemsResponse, TextSimilarityResponse, WordEmbeddingRequest, ChatBotResponse, AutoSummarizationRequest, ChatBotRequest, TextClassificationResponse, KeywordsExtractionRequest, TextCorrectionRequest, TextCorrectionProResponse, TextSimilarityProRequest, UpdateDictResponse, DescribeDictsRequest, WordSimilarityResponse, CreateWordItemsRequest, DeleteWordItemsResponse, SentenceEmbeddingResponse, UpdateDictRequest, DeleteDictResponse, DescribeWordItemsRequest, TextClassificationRequest, CreateDictResponse, TextSimilarityRequest, AutoSummarizationResponse, WordEmbeddingResponse, DescribeWordItemsResponse, SimilarWordsRequest, DescribeDictRequest, SentimentAnalysisResponse, DeleteWordItemsRequest, DescribeDictResponse, TextCorrectionProRequest, TextCorrectionResponse, TextSimilarityProResponse, DescribeDictsResponse, DependencyParsingRequest, DeleteDictRequest, SimilarWordsResponse, DependencyParsingResponse, LexicalAnalysisRequest, CreateWordItemsResponse, SentimentAnalysisRequest, SearchWordItemsRequest, KeywordsExtractionResponse, CreateDictRequest } from "./nlp_models";
/**
 * nlp client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 根据id或名称查询自定义词库信息。
     */
    DescribeDict(req: DescribeDictRequest, cb?: (error: string, rep: DescribeDictResponse) => void): Promise<DescribeDictResponse>;
    /**
     * 查询指定自定义词库中的词条是否存在。
     */
    SearchWordItems(req: SearchWordItemsRequest, cb?: (error: string, rep: SearchWordItemsResponse) => void): Promise<SearchWordItemsResponse>;
    /**
     * 用于删除自定义词库中的词条。
     */
    DeleteWordItems(req: DeleteWordItemsRequest, cb?: (error: string, rep: DeleteWordItemsResponse) => void): Promise<DeleteWordItemsResponse>;
    /**
     * 修改自定义词库元数据信息，包括名称、描述。
     */
    UpdateDict(req: UpdateDictRequest, cb?: (error: string, rep: UpdateDictResponse) => void): Promise<UpdateDictResponse>;
    /**
     * 句法依存分析接口能够分析出句子中词与词之间的相互依存关系，并揭示其句法结构，包括主谓关系、动宾关系、核心关系等等，可用于提取句子主干、提取句子核心词等，在机器翻译、自动问答、知识抽取等领域都有很好的应用。
     */
    DependencyParsing(req: DependencyParsingRequest, cb?: (error: string, rep: DependencyParsingResponse) => void): Promise<DependencyParsingResponse>;
    /**
     * 词向量接口能够将输入的词语映射成一个固定维度的词向量，用来表示这个词语的语义特征。词向量是很多自然语言处理技术的基础，能够显著提高它们的效果。

该词向量服务由腾讯知文自然语言处理团队联合腾讯AI Lab共同打造。使用的词向量基于千亿级大规模互联网语料并采用AI Lab自研的DSG算法训练而成，开源的词向量包含800多万中文词汇，在覆盖率、新鲜度及准确性等三方面性能突出。

腾讯AI Lab词向量相关资料：

https://ai.tencent.com/ailab/zh/news/detial?id=22

https://ai.tencent.com/ailab/nlp/zh/embedding.html
     */
    WordEmbedding(req: WordEmbeddingRequest, cb?: (error: string, rep: WordEmbeddingResponse) => void): Promise<WordEmbeddingResponse>;
    /**
     * 返回属于当前用户的所有自定义词库列表。
     */
    DescribeDicts(req: DescribeDictsRequest, cb?: (error: string, rep: DescribeDictsResponse) => void): Promise<DescribeDictsResponse>;
    /**
     * 根据指定的名称、描述创建自定义词库。
     */
    CreateDict(req: CreateDictRequest, cb?: (error: string, rep: CreateDictResponse) => void): Promise<CreateDictResponse>;
    /**
     * 文本分类接口能够对用户输入的文本进行自动分类，将其映射到具体的类目上，用户只需要提供待分类的文本，而无需关注具体实现。

该功能基于千亿级大规模互联网语料和LSTM、BERT等深度神经网络模型进行训练，并持续迭代更新，以保证效果不断提升。

目前已提供：

- 通用领域分类体系，二级分类，包括14个分类类目，分别是汽车、科技、健康、体育、旅行、教育、职业、文化、房产、娱乐、女性、奥运、财经以及其他，适用于通用的场景。
     */
    TextClassification(req: TextClassificationRequest, cb?: (error: string, rep: TextClassificationResponse) => void): Promise<TextClassificationResponse>;
    /**
     * 词相似度接口能够基于词向量技术来计算两个输入词语的余弦相似度，相似度数值越大的两个词语在语义上越相似。
     */
    WordSimilarity(req: WordSimilarityRequest, cb?: (error: string, rep: WordSimilarityResponse) => void): Promise<WordSimilarityResponse>;
    /**
     * 句向量接口能够将输入的句子映射成一个固定维度的向量，用来表示这个句子的语义特征，可用于文本聚类、文本相似度、文本分类等任务，能够显著提高它们的效果。

该句向量服务由腾讯云自然语言处理团队联合微信智言团队共同打造，基于千亿级大规模互联网语料并采用Bert等领先的深度神经网络模型训练而成，在腾讯内部诸多业务的NLP任务上实测效果显著。
     */
    SentenceEmbedding(req: SentenceEmbeddingRequest, cb?: (error: string, rep: SentenceEmbeddingResponse) => void): Promise<SentenceEmbeddingResponse>;
    /**
     * 依据自定义词库的ID，查询对应的词条信息。
     */
    DescribeWordItems(req: DescribeWordItemsRequest, cb?: (error: string, rep: DescribeWordItemsResponse) => void): Promise<DescribeWordItemsResponse>;
    /**
     * 提供对中文文本的自动纠错功能，能够识别输入文本中的错误片段，定位错误并给出正确的文本结果；支持长度不超过2000字符（含标点符号）的长文本纠错。

此功能是基于千亿级大规模互联网语料和LSTM、BERT等深度神经网络模型进行训练，并持续迭代更新，以保证效果不断提升，是搜索引擎、语音识别、内容审核等功能更好运行的基础之一。
     */
    TextCorrection(req: TextCorrectionRequest, cb?: (error: string, rep: TextCorrectionResponse) => void): Promise<TextCorrectionResponse>;
    /**
     * 向指定的词库中添加词条。
     */
    CreateWordItems(req: CreateWordItemsRequest, cb?: (error: string, rep: CreateWordItemsResponse) => void): Promise<CreateWordItemsResponse>;
    /**
     * 句子相似度接口能够基于深度学习技术来计算一个源句子和多个目标句子的相似度，相似度分值越大的两个句子在语义上越相似。目前仅支持短文本（不超过128字符）的相似度计算，长文本的相似度计算也即将推出。

鉴于句子相似度是一个应用非常广泛的功能，腾讯云自然语言处理团队在Bert等领先的深度神经网络模型的基础上，专门针对文本相似任务进行了优化，并持续迭代更新。基于句子相似度，可以轻松实现诸如文本去重、相似推荐等功能。

接口将以句子数量为单位消耗资源包，而不是调用接口次数为单位。
     */
    TextSimilarityPro(req: TextSimilarityProRequest, cb?: (error: string, rep: TextSimilarityProResponse) => void): Promise<TextSimilarityProResponse>;
    /**
     * 句子相似度接口能够基于深度学习技术来计算一个源句子和多个目标句子的相似度，相似度分值越大的两个句子在语义上越相似。目前仅支持短文本（不超过500字符）的相似度计算，长文本的相似度计算也即将推出。

鉴于句子相似度是一个应用非常广泛的功能，腾讯云自然语言处理团队在Bert等领先的深度神经网络模型的基础上，专门针对文本相似任务进行了优化，并持续迭代更新。基于句子相似度，可以轻松实现诸如文本去重、相似推荐等功能。

接口将以句子数量为单位消耗资源包，而不是调用接口次数为单位。
     */
    TextSimilarity(req: TextSimilarityRequest, cb?: (error: string, rep: TextSimilarityResponse) => void): Promise<TextSimilarityResponse>;
    /**
     * 情感分析接口能够对带有情感色彩的主观性文本进行分析、处理、归纳和推理，识别出用户的情感倾向，是积极还是消极，并且提供各自概率。

该功能基于千亿级大规模互联网语料和LSTM、BERT等深度神经网络模型进行训练，并持续迭代更新，以保证效果不断提升。
     */
    SentimentAnalysis(req: SentimentAnalysisRequest, cb?: (error: string, rep: SentimentAnalysisResponse) => void): Promise<SentimentAnalysisResponse>;
    /**
     * 闲聊服务基于腾讯领先的NLP引擎能力、数据运算能力和千亿级互联网语料数据的支持，同时集成了广泛的知识问答能力，可实现上百种自定义属性配置，以及儿童语言风格及说话方式，从而让聊天变得更睿智、简单和有趣。


     */
    ChatBot(req: ChatBotRequest, cb?: (error: string, rep: ChatBotResponse) => void): Promise<ChatBotResponse>;
    /**
     * 词法分析接口提供以下三个功能：

1、智能分词：将连续的自然语言文本，切分成具有语义合理性和完整性的词汇序列；

2、词性标注：为每一个词附上对应的词性，例如名词、代词、形容词、动词等；

3、命名实体识别：快速识别文本中的实体，例如人名、地名、机构名等。

所有的功能均基于千亿级大规模互联网语料进行持续迭代更新，以保证效果不断提升，用户无需担心新词发现、歧义消除、调用性能等问题。目前词法分析已经在泛互联网、金融、政务等不同垂直领域提供业务支持，并取得良好的效果。
     */
    LexicalAnalysis(req: LexicalAnalysisRequest, cb?: (error: string, rep: LexicalAnalysisResponse) => void): Promise<LexicalAnalysisResponse>;
    /**
     * 基于关键词提取平台，通过对文本内容进行深度分析，提取出文本内容中的关键信息，为用户实现诸如新闻内容关键词自动提取、评论关键词提取等提供基础服务。
     */
    KeywordsExtraction(req: KeywordsExtractionRequest, cb?: (error: string, rep: KeywordsExtractionResponse) => void): Promise<KeywordsExtractionResponse>;
    /**
     * 提供对中文文本的自动纠错功能，能够识别输入文本中的错误片段，定位错误并给出正确的文本结果；支持长度不超过128字符（含标点符号）的长文本纠错。

此功能是基于千亿级大规模互联网语料和LSTM、BERT等深度神经网络模型进行训练，并持续迭代更新，以保证效果不断提升，是搜索引擎、语音识别、内容审核等功能更好运行的基础之一。
     */
    TextCorrectionPro(req: TextCorrectionProRequest, cb?: (error: string, rep: TextCorrectionProResponse) => void): Promise<TextCorrectionProResponse>;
    /**
     * 删除自定义词库，会附带相应删除词库包含的所有词条。
     */
    DeleteDict(req: DeleteDictRequest, cb?: (error: string, rep: DeleteDictResponse) => void): Promise<DeleteDictResponse>;
    /**
     * 相似词接口能够基于同义词库及词向量技术，检索出与输入词语在语义上最相似的若干个词语，可广泛用于检索系统、问答系统、文档归档等场景。
     */
    SimilarWords(req: SimilarWordsRequest, cb?: (error: string, rep: SimilarWordsResponse) => void): Promise<SimilarWordsResponse>;
    /**
     * 利用人工智能算法，自动抽取文本中的关键信息并生成指定长度的文本摘要。可用于新闻标题生成、科技文献摘要生成和商品评论摘要等。
     */
    AutoSummarization(req: AutoSummarizationRequest, cb?: (error: string, rep: AutoSummarizationResponse) => void): Promise<AutoSummarizationResponse>;
}
