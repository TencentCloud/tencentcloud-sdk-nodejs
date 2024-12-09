"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * lke client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("lke.tencentcloudapi.com", "2023-11-30", clientConfig);
    }
    /**
     * 查询不满意回复列表
     */
    async ListUnsatisfiedReply(req, cb) {
        return this.request("ListUnsatisfiedReply", req, cb);
    }
    /**
     * 删除属性标签
     */
    async DeleteAttributeLabel(req, cb) {
        return this.request("DeleteAttributeLabel", req, cb);
    }
    /**
     * 查询企业知识库容量饼图
     */
    async DescribeKnowledgeUsagePieGraph(req, cb) {
        return this.request("DescribeKnowledgeUsagePieGraph", req, cb);
    }
    /**
     * 批量修改问答适用范围
     */
    async ModifyQAAttrRange(req, cb) {
        return this.request("ModifyQAAttrRange", req, cb);
    }
    /**
     * 本接口为异步接口的查询结果接口，用于获取文档解析处理结果。
     */
    async GetReconstructDocumentResult(req, cb) {
        return this.request("GetReconstructDocumentResult", req, cb);
    }
    /**
     * 获取账户信息
     */
    async ListSelectDoc(req, cb) {
        return this.request("ListSelectDoc", req, cb);
    }
    /**
     * 批量修改文档适用范围
     */
    async ModifyDocAttrRange(req, cb) {
        return this.request("ModifyDocAttrRange", req, cb);
    }
    /**
     * 创建发布
     */
    async CreateRelease(req, cb) {
        return this.request("CreateRelease", req, cb);
    }
    /**
     * 删除问答
     */
    async DeleteQA(req, cb) {
        return this.request("DeleteQA", req, cb);
    }
    /**
     * 终止文档解析
     */
    async StopDocParse(req, cb) {
        return this.request("StopDocParse", req, cb);
    }
    /**
     * 创建属性
     */
    async CreateAttributeLabel(req, cb) {
        return this.request("CreateAttributeLabel", req, cb);
    }
    /**
     * 获取Doc分类
     */
    async ListDocCate(req, cb) {
        return this.request("ListDocCate", req, cb);
    }
    /**
     * 产品规划

接口支持图片和PDF转可编辑word格式文件，将文件中的图片、文本、表格等元素识别，并根据位置进行还原。
     */
    async ConvertDocument(req, cb) {
        return this.request("ConvertDocument", req, cb);
    }
    /**
     * 查询属性标签详情
     */
    async DescribeAttributeLabel(req, cb) {
        return this.request("DescribeAttributeLabel", req, cb);
    }
    /**
     * 发布拒答问题预览
     */
    async ListRejectedQuestionPreview(req, cb) {
        return this.request("ListRejectedQuestionPreview", req, cb);
    }
    /**
     * 基于知识引擎精调模型技术的rerank模型，支持对多路召回的结果进行重排序，根据query与切片内容的相关性，按分数由高到低对切片进行排序，并输出对应的打分结果。
     */
    async RunReRank(req, cb) {
        return this.request("RunReRank", req, cb);
    }
    /**
     * 文档解析重试
     */
    async RetryDocParse(req, cb) {
        return this.request("RetryDocParse", req, cb);
    }
    /**
     * 录入问答
     */
    async CreateQA(req, cb) {
        return this.request("CreateQA", req, cb);
    }
    /**
     * 接口调用token折线图
     */
    async DescribeTokenUsageGraph(req, cb) {
        return this.request("DescribeTokenUsageGraph", req, cb);
    }
    /**
     * 文档生成问答
     */
    async GenerateQA(req, cb) {
        return this.request("GenerateQA", req, cb);
    }
    /**
     * 获取企业下应用详情
     */
    async DescribeApp(req, cb) {
        return this.request("DescribeApp", req, cb);
    }
    /**
     * 获取ws token
     */
    async GetWsToken(req, cb) {
        return this.request("GetWsToken", req, cb);
    }
    /**
     * 查询属性标签列表
     */
    async ListAttributeLabel(req, cb) {
        return this.request("ListAttributeLabel", req, cb);
    }
    /**
     * 发布配置项预览
     */
    async ListReleaseConfigPreview(req, cb) {
        return this.request("ListReleaseConfigPreview", req, cb);
    }
    /**
     * 查询搜索服务调用折线图
     */
    async DescribeSearchStatsGraph(req, cb) {
        return this.request("DescribeSearchStatsGraph", req, cb);
    }
    /**
     * 接口已迁移到新接口了，无调用量

查询文档解析结果。该接口需开通文档解析原子能力后调用。文档解析原子能力内测中，如有需要请联系架构师或[联系客服](https://cloud.tencent.com/act/event/Online_service) 。
     */
    async QueryParseDocResult(req, cb) {
        return this.request("QueryParseDocResult", req, cb);
    }
    /**
     * 校验问答
     */
    async VerifyQA(req, cb) {
        return this.request("VerifyQA", req, cb);
    }
    /**
     * 创建Doc分类
     */
    async CreateDocCate(req, cb) {
        return this.request("CreateDocCate", req, cb);
    }
    /**
     * 检查属性下的标签名是否存在
     */
    async CheckAttributeLabelExist(req, cb) {
        return this.request("CheckAttributeLabelExist", req, cb);
    }
    /**
     * 文档详情
     */
    async DescribeDoc(req, cb) {
        return this.request("DescribeDoc", req, cb);
    }
    /**
     * 列表查询单次调用明细
     */
    async ListUsageCallDetail(req, cb) {
        return this.request("ListUsageCallDetail", req, cb);
    }
    /**
     * 获取文件上传临时密钥
     */
    async DescribeStorageCredential(req, cb) {
        return this.request("DescribeStorageCredential", req, cb);
    }
    /**
     * 点赞点踩消息
     */
    async RateMsgRecord(req, cb) {
        return this.request("RateMsgRecord", req, cb);
    }
    /**
     * 文档列表
     */
    async ListReleaseQAPreview(req, cb) {
        return this.request("ListReleaseQAPreview", req, cb);
    }
    /**
     * 更新QA分类
     */
    async ModifyQACate(req, cb) {
        return this.request("ModifyQACate", req, cb);
    }
    /**
     * 删除应用
     */
    async DeleteApp(req, cb) {
        return this.request("DeleteApp", req, cb);
    }
    /**
     * 检查属性标签引用
     */
    async CheckAttributeLabelRefer(req, cb) {
        return this.request("CheckAttributeLabelRefer", req, cb);
    }
    /**
     * 企业详情
     */
    async DescribeCorp(req, cb) {
        return this.request("DescribeCorp", req, cb);
    }
    /**
     * 获取不满意回复上下文
     */
    async DescribeUnsatisfiedReplyContext(req, cb) {
        return this.request("DescribeUnsatisfiedReplyContext", req, cb);
    }
    /**
     * Doc分组
     */
    async GroupDoc(req, cb) {
        return this.request("GroupDoc", req, cb);
    }
    /**
     * 获取企业下应用列表
     */
    async ListApp(req, cb) {
        return this.request("ListApp", req, cb);
    }
    /**
     * 接口调用token详情
     */
    async DescribeTokenUsage(req, cb) {
        return this.request("DescribeTokenUsage", req, cb);
    }
    /**
     * Doc分类删除
     */
    async DeleteDocCate(req, cb) {
        return this.request("DeleteDocCate", req, cb);
    }
    /**
     * 获取QA分类
     */
    async ListQACate(req, cb) {
        return this.request("ListQACate", req, cb);
    }
    /**
     * 应用类型列表
     */
    async ListAppCategory(req, cb) {
        return this.request("ListAppCategory", req, cb);
    }
    /**
     * 问答详情
     */
    async DescribeQA(req, cb) {
        return this.request("DescribeQA", req, cb);
    }
    /**
     * 创建知识引擎应用。
     */
    async CreateApp(req, cb) {
        return this.request("CreateApp", req, cb);
    }
    /**
     * 修改文档
     */
    async ModifyDoc(req, cb) {
        return this.request("ModifyDoc", req, cb);
    }
    /**
     * 创建QA分类
     */
    async CreateQACate(req, cb) {
        return this.request("CreateQACate", req, cb);
    }
    /**
     * 导出属性标签
     */
    async ExportAttributeLabel(req, cb) {
        return this.request("ExportAttributeLabel", req, cb);
    }
    /**
     * 获取来源详情列表
     */
    async DescribeRefer(req, cb) {
        return this.request("DescribeRefer", req, cb);
    }
    /**
     * 查询知识库用量
     */
    async DescribeKnowledgeUsage(req, cb) {
        return this.request("DescribeKnowledgeUsage", req, cb);
    }
    /**
     * 通过appKey获取应用业务ID
     */
    async DescribeRobotBizIDByAppKey(req, cb) {
        return this.request("DescribeRobotBizIDByAppKey", req, cb);
    }
    /**
     * 文档列表
     */
    async ListDoc(req, cb) {
        return this.request("ListDoc", req, cb);
    }
    /**
     * 问答列表
     */
    async ListQA(req, cb) {
        return this.request("ListQA", req, cb);
    }
    /**
     * 点赞点踩数据统计
     */
    async GetLikeDataCount(req, cb) {
        return this.request("GetLikeDataCount", req, cb);
    }
    /**
     * 修改Doc分类
     */
    async ModifyDocCate(req, cb) {
        return this.request("ModifyDocCate", req, cb);
    }
    /**
     * 导出QA列表
     */
    async ExportQAList(req, cb) {
        return this.request("ExportQAList", req, cb);
    }
    /**
     * 本接口为异步接口的发起请求接口，用于发起文档解析任务。
文档解析支持将图片或PDF文件转换成Markdown格式文件，可解析包括表格、公式、图片、标题、段落、页眉、页脚等内容元素，并将内容智能转换成阅读顺序。

体验期间单账号限制qps仅为1，若有正式接入需要请与产研团队沟通开放。
     */
    async CreateReconstructDocumentFlow(req, cb) {
        return this.request("CreateReconstructDocumentFlow", req, cb);
    }
    /**
     * 上传导入属性标签
     */
    async UploadAttributeLabel(req, cb) {
        return this.request("UploadAttributeLabel", req, cb);
    }
    /**
     * 获取文档预览信息
     */
    async GetDocPreview(req, cb) {
        return this.request("GetDocPreview", req, cb);
    }
    /**
     * 并发调用响应
     */
    async DescribeConcurrencyUsage(req, cb) {
        return this.request("DescribeConcurrencyUsage", req, cb);
    }
    /**
     * 修改拒答问题
     */
    async ModifyRejectedQuestion(req, cb) {
        return this.request("ModifyRejectedQuestion", req, cb);
    }
    /**
     * 接口已迁移到新接口了，无调用量

接口即将下线，请切换使用新接口：[文档解析](https://cloud.tencent.com/document/product/1759/107504)
     */
    async ParseDoc(req, cb) {
        return this.request("ParseDoc", req, cb);
    }
    /**
     * 是否意图转人工
     */
    async IsTransferIntent(req, cb) {
        return this.request("IsTransferIntent", req, cb);
    }
    /**
     * 拉取发布按钮状态、最后发布时间
     */
    async DescribeReleaseInfo(req, cb) {
        return this.request("DescribeReleaseInfo", req, cb);
    }
    /**
     * 发布列表
     */
    async ListRelease(req, cb) {
        return this.request("ListRelease", req, cb);
    }
    /**
     * 获取模型列表
     */
    async ListModel(req, cb) {
        return this.request("ListModel", req, cb);
    }
    /**
     * 获取拒答问题
     */
    async ListRejectedQuestion(req, cb) {
        return this.request("ListRejectedQuestion", req, cb);
    }
    /**
     * 分类删除
     */
    async DeleteQACate(req, cb) {
        return this.request("DeleteQACate", req, cb);
    }
    /**
     * 导出不满意回复
     */
    async ExportUnsatisfiedReply(req, cb) {
        return this.request("ExportUnsatisfiedReply", req, cb);
    }
    /**
     * 发布暂停后重试
     */
    async RetryRelease(req, cb) {
        return this.request("RetryRelease", req, cb);
    }
    /**
     * 更新问答
     */
    async ModifyQA(req, cb) {
        return this.request("ModifyQA", req, cb);
    }
    /**
     * 保存文档
     */
    async SaveDoc(req, cb) {
        return this.request("SaveDoc", req, cb);
    }
    /**
     * 删除文档
     */
    async DeleteDoc(req, cb) {
        return this.request("DeleteDoc", req, cb);
    }
    /**
     * 删除拒答问题
     */
    async DeleteRejectedQuestion(req, cb) {
        return this.request("DeleteRejectedQuestion", req, cb);
    }
    /**
     * 多轮改写（QueryRewrite）主要用于多轮对话中，进行指代消解和省略补全。使用本接口，无需输入prompt描述，根据对话历史即可生成更精确的用户查询。在应用场景上，本接口可应用于智能问答、对话式搜索等多种场景。
本接口（QueryRewrite）有单账号调用上限控制，如您有提高并发限制的需求请 [联系我们](https://cloud.tencent.com/act/event/Online_service) 。
     */
    async QueryRewrite(req, cb) {
        return this.request("QueryRewrite", req, cb);
    }
    /**
     * 文档解析重试
     */
    async RetryDocAudit(req, cb) {
        return this.request("RetryDocAudit", req, cb);
    }
    /**
     * 修改应用请求结构体
     */
    async ModifyApp(req, cb) {
        return this.request("ModifyApp", req, cb);
    }
    /**
     * 本接口（GetEmbedding）调用文本表示模型，将文本转化为用数值表示的向量形式，可用于文本检索、信息推荐、知识挖掘等场景。
本接口（GetEmbedding）有单账号调用上限控制，如您有提高并发限制的需求请 [联系我们](https://cloud.tencent.com/act/event/Online_service) 。
     */
    async GetEmbedding(req, cb) {
        return this.request("GetEmbedding", req, cb);
    }
    /**
     * 获取应用密钥
     */
    async GetAppSecret(req, cb) {
        return this.request("GetAppSecret", req, cb);
    }
    /**
     * 编辑属性标签
     */
    async ModifyAttributeLabel(req, cb) {
        return this.request("ModifyAttributeLabel", req, cb);
    }
    /**
     * 回答类型数据统计
     */
    async GetAnswerTypeDataCount(req, cb) {
        return this.request("GetAnswerTypeDataCount", req, cb);
    }
    /**
     * 发布文档预览
     */
    async ListReleaseDocPreview(req, cb) {
        return this.request("ListReleaseDocPreview", req, cb);
    }
    /**
     * 发布详情
     */
    async DescribeRelease(req, cb) {
        return this.request("DescribeRelease", req, cb);
    }
    /**
     * 创建企业
     */
    async CreateCorp(req, cb) {
        return this.request("CreateCorp", req, cb);
    }
    /**
     * 获取模型列表
     */
    async GetAppKnowledgeCount(req, cb) {
        return this.request("GetAppKnowledgeCount", req, cb);
    }
    /**
     * 并发调用折线图
     */
    async DescribeConcurrencyUsageGraph(req, cb) {
        return this.request("DescribeConcurrencyUsageGraph", req, cb);
    }
    /**
     * 获取聊天历史请求
     */
    async GetMsgRecord(req, cb) {
        return this.request("GetMsgRecord", req, cb);
    }
    /**
     * 创建拒答问题
     */
    async CreateRejectedQuestion(req, cb) {
        return this.request("CreateRejectedQuestion", req, cb);
    }
    /**
     * 接口调用折线图
     */
    async DescribeCallStatsGraph(req, cb) {
        return this.request("DescribeCallStatsGraph", req, cb);
    }
    /**
     * QA分组
     */
    async GroupQA(req, cb) {
        return this.request("GroupQA", req, cb);
    }
    /**
     * 获取片段详情
     */
    async DescribeSegments(req, cb) {
        return this.request("DescribeSegments", req, cb);
    }
    /**
     * 获取任务状态
     */
    async GetTaskStatus(req, cb) {
        return this.request("GetTaskStatus", req, cb);
    }
    /**
     * 支持将图片或PDF文件转换成Markdown格式文件，可解析包括表格、公式、图片、标题、段落、页眉、页脚等内容元素，并将内容智能转换成阅读顺序。

体验期间单账号限制qps仅为1，若有正式接入需要请与产研团队沟通开放。
     */
    async ReconstructDocument(req, cb) {
        return this.request("ReconstructDocument", req, cb);
    }
    /**
     * 重置会话
     */
    async ResetSession(req, cb) {
        return this.request("ResetSession", req, cb);
    }
    /**
     * 列表查询知识库容量详情
     */
    async ListAppKnowledgeDetail(req, cb) {
        return this.request("ListAppKnowledgeDetail", req, cb);
    }
    /**
     * 忽略不满意回复
     */
    async IgnoreUnsatisfiedReply(req, cb) {
        return this.request("IgnoreUnsatisfiedReply", req, cb);
    }
}
exports.Client = Client;
