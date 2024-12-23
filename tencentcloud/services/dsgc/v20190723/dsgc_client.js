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
 * dsgc client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("dsgc.tencentcloudapi.com", "2019-07-23", clientConfig);
    }
    /**
     * 新增分级，单个Casb实例最多允许创建100个数据分级
     */
    async CreateDSPALevelGroup(req, cb) {
        return this.request("CreateDSPALevelGroup", req, cb);
    }
    /**
     * 遗留待处理&昨日完成风险处置概览统计
     */
    async DescribeDSPAAssessmentRiskDealedOverview(req, cb) {
        return this.request("DescribeDSPAAssessmentRiskDealedOverview", req, cb);
    }
    /**
     * 复制合规组模板
     */
    async CopyDSPATemplate(req, cb) {
        return this.request("CopyDSPATemplate", req, cb);
    }
    /**
     * 风险项页面----查询风险等级的详情数据
     */
    async DescribeDSPAAssessmentRiskLevelDetail(req, cb) {
        return this.request("DescribeDSPAAssessmentRiskLevelDetail", req, cb);
    }
    /**
     * 风险项页面--查看评估模板详情
     */
    async DescribeDSPAAssessmentRiskTemplateDetail(req, cb) {
        return this.request("DescribeDSPAAssessmentRiskTemplateDetail", req, cb);
    }
    /**
     * 修改DSPA评估风险项，支持修改Status
     */
    async ModifyDSPAAssessmentRisk(req, cb) {
        return this.request("ModifyDSPAAssessmentRisk", req, cb);
    }
    /**
     * 修改分类分级关系
     */
    async ModifyDSPACategoryRelation(req, cb) {
        return this.request("ModifyDSPACategoryRelation", req, cb);
    }
    /**
     * 取消用户云资源授权
     */
    async DisableDSPAMetaResourceAuth(req, cb) {
        return this.request("DisableDSPAMetaResourceAuth", req, cb);
    }
    /**
     * 立即启动分类分级任务，该接口只有在任务状态为以下状态时才支持正确执行立即扫描：
0 待扫描，
2 扫描终止，
3 扫描成功，
4 扫描失败
     */
    async StartDSPADiscoveryTask(req, cb) {
        return this.request("StartDSPADiscoveryTask", req, cb);
    }
    /**
     * 查询最新的风险详情列表数据
     */
    async DescribeDSPAAssessmentLatestRiskList(req, cb) {
        return this.request("DescribeDSPAAssessmentLatestRiskList", req, cb);
    }
    /**
     * 获取分类分级规则列表
     */
    async DescribeDSPADiscoveryRules(req, cb) {
        return this.request("DescribeDSPADiscoveryRules", req, cb);
    }
    /**
     * 创建合规组分类规则关联关系
     */
    async CreateDSPAComplianceRules(req, cb) {
        return this.request("CreateDSPAComplianceRules", req, cb);
    }
    /**
     * 创建资产梳理报表导出重试任务
     */
    async CreateAssetSortingReportRetryTask(req, cb) {
        return this.request("CreateAssetSortingReportRetryTask", req, cb);
    }
    /**
     * 获取COS单个模板下的敏感数据资产
     */
    async DescribeDSPACOSDataAssetByComplianceId(req, cb) {
        return this.request("DescribeDSPACOSDataAssetByComplianceId", req, cb);
    }
    /**
     * 风险项页面----查询风险等级的列表
     */
    async DescribeDSPAAssessmentRiskLevelList(req, cb) {
        return this.request("DescribeDSPAAssessmentRiskLevelList", req, cb);
    }
    /**
     * 编辑识别规则
     */
    async ModifyClassificationRule(req, cb) {
        return this.request("ModifyClassificationRule", req, cb);
    }
    /**
     * 获取分类规则统计信息
     */
    async DescribeDSPACategoryRuleStatistic(req, cb) {
        return this.request("DescribeDSPACategoryRuleStatistic", req, cb);
    }
    /**
     * 查询分类规则详情

     */
    async DescribeRuleDetail(req, cb) {
        return this.request("DescribeRuleDetail", req, cb);
    }
    /**
     * 删除COS分类分级任务结果
     */
    async DeleteDSPACOSDiscoveryTaskResult(req, cb) {
        return this.request("DeleteDSPACOSDiscoveryTaskResult", req, cb);
    }
    /**
     * 获取COS分类分级数据资产详情
     */
    async DescribeDSPACOSDataAssetDetail(req, cb) {
        return this.request("DescribeDSPACOSDataAssetDetail", req, cb);
    }
    /**
     * 数据资产报告-查询rbd 的敏感资产报告，包含（数据库资产，设敏级别数据库top10，资产详情）
     */
    async DescribeRDBAssetSensitiveDistribution(req, cb) {
        return this.request("DescribeRDBAssetSensitiveDistribution", req, cb);
    }
    /**
     * 修改COS分类分级任务，该接口只有在任务状态为以下状态时才支持正确修改：
0 待扫描，
2 扫描终止，
3 扫描成功，
4 扫描失败
     */
    async ModifyDSPACOSDiscoveryTask(req, cb) {
        return this.request("ModifyDSPACOSDiscoveryTask", req, cb);
    }
    /**
     * 删除用户云资源
     */
    async DeleteDSPAMetaResource(req, cb) {
        return this.request("DeleteDSPAMetaResource", req, cb);
    }
    /**
     * 本接口（DeleteCOSMetaData）用于删除COS元数据信息。
     */
    async DeleteCosMetaResource(req, cb) {
        return this.request("DeleteCosMetaResource", req, cb);
    }
    /**
     * 修改分级分类模板信息
     */
    async ModifyStandardInfo(req, cb) {
        return this.request("ModifyStandardInfo", req, cb);
    }
    /**
     * 获取报表下载链接
     */
    async DescribeReportTaskDownloadUrl(req, cb) {
        return this.request("DescribeReportTaskDownloadUrl", req, cb);
    }
    /**
     * 获取COS分类分级任务结果，该接口只有在任务状态为以下状态时才支持结果正常查询：
3 扫描成功，
4 扫描失败
     */
    async DescribeDSPACOSDiscoveryTaskResult(req, cb) {
        return this.request("DescribeDSPACOSDiscoveryTaskResult", req, cb);
    }
    /**
     * 绑定或解绑COS桶
     */
    async BindDSPAResourceCosBuckets(req, cb) {
        return this.request("BindDSPAResourceCosBuckets", req, cb);
    }
    /**
     * 修改分类分级模板，内置模板不支持修改。
     */
    async ModifyDSPAComplianceGroup(req, cb) {
        return this.request("ModifyDSPAComplianceGroup", req, cb);
    }
    /**
     * 查询敏感数据导出结果URL
     */
    async DescribeAssetDetailDataExportResult(req, cb) {
        return this.request("DescribeAssetDetailDataExportResult", req, cb);
    }
    /**
     * 风险评估概览页，查询风险面的分布
     */
    async DescribeDSPAAssessmentRiskSideDistributed(req, cb) {
        return this.request("DescribeDSPAAssessmentRiskSideDistributed", req, cb);
    }
    /**
     * 获取分类分级任务结果详情，该接口只有在任务状态为时才支持结果正确查询：
3 扫描成功
     */
    async DescribeDSPADiscoveryTaskResultDetail(req, cb) {
        return this.request("DescribeDSPADiscoveryTaskResultDetail", req, cb);
    }
    /**
     * 风险级别趋势统计
     */
    async DescribeDSPAAssessmentRiskLevelTrend(req, cb) {
        return this.request("DescribeDSPAAssessmentRiskLevelTrend", req, cb);
    }
    /**
     * 获取DSPA评估风险项列表
     */
    async DescribeDSPAAssessmentRisks(req, cb) {
        return this.request("DescribeDSPAAssessmentRisks", req, cb);
    }
    /**
     * 获取模板详情信息
     */
    async DescribeDSPAComplianceGroupDetail(req, cb) {
        return this.request("DescribeDSPAComplianceGroupDetail", req, cb);
    }
    /**
     * 风险项页面---创建风险等级
     */
    async CreateDSPAAssessmentRiskLevel(req, cb) {
        return this.request("CreateDSPAAssessmentRiskLevel", req, cb);
    }
    /**
     * 获取COS分类分级任务结果详情，该接口只有在任务状态为时才支持结果正确查询：
3 扫描成功
     */
    async DescribeDSPACOSTaskResultDetail(req, cb) {
        return this.request("DescribeDSPACOSTaskResultDetail", req, cb);
    }
    /**
     * 获取单个合规组下的RDB关系数据库分类分级数据资产
     */
    async DescribeDSPARDBDataAssetByComplianceId(req, cb) {
        return this.request("DescribeDSPARDBDataAssetByComplianceId", req, cb);
    }
    /**
     * 查询DB绑定的列表
     */
    async DescribeBindDBList(req, cb) {
        return this.request("DescribeBindDBList", req, cb);
    }
    /**
     * 获取导出任务结果
     */
    async DescribeExportTaskResult(req, cb) {
        return this.request("DescribeExportTaskResult", req, cb);
    }
    /**
     * 本接口用于获取COS元数据信息，返回COS元数据信息列表。
     */
    async ListDSPACosMetaResources(req, cb) {
        return this.request("ListDSPACosMetaResources", req, cb);
    }
    /**
     * 拉取用户云资源
     */
    async ListDSPAMetaResources(req, cb) {
        return this.request("ListDSPAMetaResources", req, cb);
    }
    /**
     * 获取敏感数据分类列表
     */
    async DescribeDSPACategories(req, cb) {
        return this.request("DescribeDSPACategories", req, cb);
    }
    /**
     * 创建新分类
     */
    async CreateNewClassification(req, cb) {
        return this.request("CreateNewClassification", req, cb);
    }
    /**
     * 风险模板---修改风险模板
     */
    async ModifyDSPAAssessmentRiskTemplate(req, cb) {
        return this.request("ModifyDSPAAssessmentRiskTemplate", req, cb);
    }
    /**
     * 获取分类分级任务详情
     */
    async DescribeDSPADiscoveryTaskDetail(req, cb) {
        return this.request("DescribeDSPADiscoveryTaskDetail", req, cb);
    }
    /**
     * 修改分类分级任务，该接口只有在任务状态为以下状态时才支持正确修改：
0 待扫描，
2 扫描终止，
3 扫描成功，
4 扫描失败
     */
    async ModifyDSPADiscoveryTask(req, cb) {
        return this.request("ModifyDSPADiscoveryTask", req, cb);
    }
    /**
     * 风险概览页风险数量和受影响资产数概览统计
     */
    async DescribeDSPAAssessmentRiskAmountOverview(req, cb) {
        return this.request("DescribeDSPAAssessmentRiskAmountOverview", req, cb);
    }
    /**
     * 创建识别规则
     */
    async CreateClassificationRule(req, cb) {
        return this.request("CreateClassificationRule", req, cb);
    }
    /**
     * 根据合规组id，去查询ES的概览页统计数据
     */
    async DescribeDSPAESDataAssetByComplianceId(req, cb) {
        return this.request("DescribeDSPAESDataAssetByComplianceId", req, cb);
    }
    /**
     * 获取分类分级模板列表
     */
    async DescribeDSPAComplianceGroups(req, cb) {
        return this.request("DescribeDSPAComplianceGroups", req, cb);
    }
    /**
     * 修改级别名称
     */
    async ModifyLevelName(req, cb) {
        return this.request("ModifyLevelName", req, cb);
    }
    /**
     * 获取COS分类分级任务详情
     */
    async DescribeDSPACOSDiscoveryTaskDetail(req, cb) {
        return this.request("DescribeDSPACOSDiscoveryTaskDetail", req, cb);
    }
    /**
     * 获取扫描结果数据样本
     */
    async DescribeDSPATaskResultDataSample(req, cb) {
        return this.request("DescribeDSPATaskResultDataSample", req, cb);
    }
    /**
     * 删除COS分类分级任务，该接口只有在任务状态为以下几个状态值时才支持正确删除：
0 待扫描，
2 扫描终止，
3 扫描成功，
4 扫描失败
     */
    async DeleteDSPACOSDiscoveryTask(req, cb) {
        return this.request("DeleteDSPACOSDiscoveryTask", req, cb);
    }
    /**
     * 数据资产报告-查询mongo 的敏感资产报告，包含（数据库资产，设敏级别数据库top10，资产详情）
     */
    async DescribeMongoAssetSensitiveDistribution(req, cb) {
        return this.request("DescribeMongoAssetSensitiveDistribution", req, cb);
    }
    /**
     * 修改敏感级别信息
     */
    async ModifyLevelInfo(req, cb) {
        return this.request("ModifyLevelInfo", req, cb);
    }
    /**
     * 创建分类关联关系
     */
    async CreateDSPACategoryRelation(req, cb) {
        return this.request("CreateDSPACategoryRelation", req, cb);
    }
    /**
     * 数据资产报告-查询cos的敏感数据分布（分级分布 分类分布 敏感规则分布详情列表）
     */
    async DescribeSensitiveCOSDataDistribution(req, cb) {
        return this.request("DescribeSensitiveCOSDataDistribution", req, cb);
    }
    /**
     * 受影响资产TOP5统计
     */
    async DescribeDSPAAssessmentRiskDatasourceTop5(req, cb) {
        return this.request("DescribeDSPAAssessmentRiskDatasourceTop5", req, cb);
    }
    /**
     * 获取资产报表任务列表
     */
    async DescribeReportTasks(req, cb) {
        return this.request("DescribeReportTasks", req, cb);
    }
    /**
     * 获取COS分类分级任务结果详情文件列表
     */
    async DescribeDSPACOSDiscoveryTaskFiles(req, cb) {
        return this.request("DescribeDSPACOSDiscoveryTaskFiles", req, cb);
    }
    /**
     * 获取DSPA评估模板列表
     */
    async DescribeDSPAAssessmentTemplates(req, cb) {
        return this.request("DescribeDSPAAssessmentTemplates", req, cb);
    }
    /**
     * 修改最新评估风险项状态
     */
    async ModifyDSPAAssessmentRiskLatest(req, cb) {
        return this.request("ModifyDSPAAssessmentRiskLatest", req, cb);
    }
    /**
     * 打开或者关闭分类分级规则
注：此API同时对该规则下的RDB跟COS规则操作。
     */
    async EnableDSPADiscoveryRule(req, cb) {
        return this.request("EnableDSPADiscoveryRule", req, cb);
    }
    /**
     * 创建规则别名
     */
    async CreateIdentifyRuleAnotherName(req, cb) {
        return this.request("CreateIdentifyRuleAnotherName", req, cb);
    }
    /**
     * 风险等级的定义页面-创建风险等级的时候生成的一个默认的矩阵
     */
    async DecribeSuggestRiskLevelMatrix(req, cb) {
        return this.request("DecribeSuggestRiskLevelMatrix", req, cb);
    }
    /**
     * 风险概览-查询待处理风险统计数
     */
    async DescribeDSPAAssessmentPendingRiskOverview(req, cb) {
        return this.request("DescribeDSPAAssessmentPendingRiskOverview", req, cb);
    }
    /**
     * 调整ES任务扫描结果
     */
    async ModifyDSPAESTaskResult(req, cb) {
        return this.request("ModifyDSPAESTaskResult", req, cb);
    }
    /**
     * 获取RDB关系数据库分类分级资产详情
     */
    async DescribeDSPARDBDataAssetDetail(req, cb) {
        return this.request("DescribeDSPARDBDataAssetDetail", req, cb);
    }
    /**
     * 查询分类信息

     */
    async DescribeClassificationInfo(req, cb) {
        return this.request("DescribeClassificationInfo", req, cb);
    }
    /**
     * 风险分类TOP5统计
     */
    async DescribeDSPAAssessmentRiskItemTop5(req, cb) {
        return this.request("DescribeDSPAAssessmentRiskItemTop5", req, cb);
    }
    /**
     * 获取资源绑定DB状态
     */
    async QueryResourceDbBindStatus(req, cb) {
        return this.request("QueryResourceDbBindStatus", req, cb);
    }
    /**
     * 用于查询该用户是否已开通分类分级服务
     */
    async DescribeDSPADiscoveryServiceStatus(req, cb) {
        return this.request("DescribeDSPADiscoveryServiceStatus", req, cb);
    }
    /**
     * 启用版本体验
     */
    async EnableTrialVersion(req, cb) {
        return this.request("EnableTrialVersion", req, cb);
    }
    /**
     * 调整任务扫描结果
     */
    async ModifyDSPATaskResult(req, cb) {
        return this.request("ModifyDSPATaskResult", req, cb);
    }
    /**
     * 新增分类，单个用户最多允许创建100个数据分类。
     */
    async CreateDSPACategory(req, cb) {
        return this.request("CreateDSPACategory", req, cb);
    }
    /**
     * 新增COS分类分级扫描任务，单个用户最多允许创建100个任务。
     */
    async CreateDSPACOSDiscoveryTask(req, cb) {
        return this.request("CreateDSPACOSDiscoveryTask", req, cb);
    }
    /**
     * 获取合规组分类规则信息
     */
    async DescribeDSPACategoryRules(req, cb) {
        return this.request("DescribeDSPACategoryRules", req, cb);
    }
    /**
     * 风险模板页面--查询风险模板中的脆弱项配置
     */
    async DescribeDSPAAssessmentRiskTemplateVulnerableList(req, cb) {
        return this.request("DescribeDSPAAssessmentRiskTemplateVulnerableList", req, cb);
    }
    /**
     * 一个分类合并到另一个分类中（分类拖拽功能）
     */
    async ModifyMergeClassification(req, cb) {
        return this.request("ModifyMergeClassification", req, cb);
    }
    /**
     * 删除DSPA风险评估任务
     */
    async DeleteDSPAAssessmentTask(req, cb) {
        return this.request("DeleteDSPAAssessmentTask", req, cb);
    }
    /**
     * 验证分类分级规则
     */
    async VerifyDSPADiscoveryRule(req, cb) {
        return this.request("VerifyDSPADiscoveryRule", req, cb);
    }
    /**
     * 获取COS分类分级任务列表
     */
    async DescribeDSPACOSDiscoveryTasks(req, cb) {
        return this.request("DescribeDSPACOSDiscoveryTasks", req, cb);
    }
    /**
     * 获取分级详情
     */
    async DescribeDSPALevelDetail(req, cb) {
        return this.request("DescribeDSPALevelDetail", req, cb);
    }
    /**
     * 创建或复制分级分类模板
     */
    async CreateOrCopyStandard(req, cb) {
        return this.request("CreateOrCopyStandard", req, cb);
    }
    /**
     * 数据资产报告页面-查询数据资产概览接口（包括数据库资产详情和存储资产详情）
     */
    async DescribeAssetOverview(req, cb) {
        return this.request("DescribeAssetOverview", req, cb);
    }
    /**
     * 新建DSPA风险评估任务
     */
    async CreateDSPAAssessmentTask(req, cb) {
        return this.request("CreateDSPAAssessmentTask", req, cb);
    }
    /**
     * 验证COS分类分级规则
     */
    async VerifyDSPACOSRule(req, cb) {
        return this.request("VerifyDSPACOSRule", req, cb);
    }
    /**
     * 风险评估模板---创建风险评估模板
     */
    async CreateDSPAAssessmentRiskTemplate(req, cb) {
        return this.request("CreateDSPAAssessmentRiskTemplate", req, cb);
    }
    /**
     * 风险数量概览统计
     */
    async DescribeDSPAAssessmentRiskOverview(req, cb) {
        return this.request("DescribeDSPAAssessmentRiskOverview", req, cb);
    }
    /**
     * 根据合规组id，去查询ES的概览页下的统计列表数据
     */
    async DescribeDSPAESDataAssetDetail(req, cb) {
        return this.request("DescribeDSPAESDataAssetDetail", req, cb);
    }
    /**
     * 新增分类分级模板，单个用户最多允许创建100个合规组。
     */
    async CreateDSPAComplianceGroup(req, cb) {
        return this.request("CreateDSPAComplianceGroup", req, cb);
    }
    /**
     * 获取数据源的数据库信息
     */
    async DescribeDSPADataSourceDbInfo(req, cb) {
        return this.request("DescribeDSPADataSourceDbInfo", req, cb);
    }
    /**
     * 添加用户云上资源列表
     */
    async CreateDSPAMetaResources(req, cb) {
        return this.request("CreateDSPAMetaResources", req, cb);
    }
    /**
     * 修改识别规则状态
     */
    async ModifyClassificationRuleState(req, cb) {
        return this.request("ModifyClassificationRuleState", req, cb);
    }
    /**
     * 修改DSPA集群信息
     */
    async ModifyDSPAClusterInfo(req, cb) {
        return this.request("ModifyDSPAClusterInfo", req, cb);
    }
    /**
     * 查询高风险资产的top10
     */
    async DescribeDSPAAssessmentHighRiskTop10Overview(req, cb) {
        return this.request("DescribeDSPAAssessmentHighRiskTop10Overview", req, cb);
    }
    /**
     * 查询最新风险项详情数据
     */
    async DescribeDSPAAssessmentLatestRiskDetailInfo(req, cb) {
        return this.request("DescribeDSPAAssessmentLatestRiskDetailInfo", req, cb);
    }
    /**
     * 查询分类下规则列表

     */
    async DescribeRuleList(req, cb) {
        return this.request("DescribeRuleList", req, cb);
    }
    /**
     * 获取DSPA评估任务列表
     */
    async DescribeDSPAAssessmentTasks(req, cb) {
        return this.request("DescribeDSPAAssessmentTasks", req, cb);
    }
    /**
     * 获取分级分级扫描的表集合
     */
    async DescribeDSPADiscoveryTaskTables(req, cb) {
        return this.request("DescribeDSPADiscoveryTaskTables", req, cb);
    }
    /**
     * 获取用户购买配额信息
     */
    async GetUserQuotaInfo(req, cb) {
        return this.request("GetUserQuotaInfo", req, cb);
    }
    /**
     * 获取模板更新提示信息
     */
    async DescribeDSPAComplianceUpdateNotification(req, cb) {
        return this.request("DescribeDSPAComplianceUpdateNotification", req, cb);
    }
    /**
     * 添加用户云上数据库类型资源
     */
    async CreateDSPADbMetaResources(req, cb) {
        return this.request("CreateDSPADbMetaResources", req, cb);
    }
    /**
     * 调整COS任务扫描结果
     */
    async ModifyDSPACOSTaskResult(req, cb) {
        return this.request("ModifyDSPACOSTaskResult", req, cb);
    }
    /**
     * 绑定或解绑数据库实例DB
     */
    async BindDSPAResourceDatabases(req, cb) {
        return this.request("BindDSPAResourceDatabases", req, cb);
    }
    /**
     * 数据资产报告-查询es的敏感资产报告，包含（数据库资产，设敏级别数据库top10，资产详情）
     */
    async DescribeESAssetSensitiveDistribution(req, cb) {
        return this.request("DescribeESAssetSensitiveDistribution", req, cb);
    }
    /**
     * 授权用户云资源
     */
    async AuthorizeDSPAMetaResources(req, cb) {
        return this.request("AuthorizeDSPAMetaResources", req, cb);
    }
    /**
     * 拉取DSPA支持的Meta元数据类型，返回包括：元数据类型，支持的元数据地域信息
     */
    async DescribeDSPASupportedMetas(req, cb) {
        return this.request("DescribeDSPASupportedMetas", req, cb);
    }
    /**
     * 风险项处理趋势统计
     */
    async DescribeDSPAAssessmentRiskDealedTrend(req, cb) {
        return this.request("DescribeDSPAAssessmentRiskDealedTrend", req, cb);
    }
    /**
     * 数据资产报告-查询rdb的敏感数据分布-敏感规则字段分布-敏感分布详情
     */
    async DescribeSensitiveRDBDataDistribution(req, cb) {
        return this.request("DescribeSensitiveRDBDataDistribution", req, cb);
    }
    /**
     * 重新启动DSPA风险评估任务
     */
    async RestartDSPAAssessmentTask(req, cb) {
        return this.request("RestartDSPAAssessmentTask", req, cb);
    }
    /**
     * 获取ES的分类分级任务结果详情，该接口只有在任务状态为时才支持结果正确查询：
3 扫描成功
     */
    async DescribeDSPAESDiscoveryTaskResultDetail(req, cb) {
        return this.request("DescribeDSPAESDiscoveryTaskResultDetail", req, cb);
    }
    /**
     * 删除分类分级识别任务，该接口只有在任务状态为以下几个状态值时才支持正确删除：
0 待扫描，
2 扫描终止，
3 扫描成功，
4 扫描失败
     */
    async DeleteDSPADiscoveryTask(req, cb) {
        return this.request("DeleteDSPADiscoveryTask", req, cb);
    }
    /**
     * 更新自建资源基础信息，包括：端口、账户名、密码。
请注意：
如果资源自身的VPC、VIP信息发生变化，后台会自动更新。
如果监听的端口发生变化，请显式输入端口。
如果账户名密码任意一个发生变化，请务必同时显式输入账户名密码。
     */
    async UpdateDSPASelfBuildResource(req, cb) {
        return this.request("UpdateDSPASelfBuildResource", req, cb);
    }
    /**
     * 获取分类分级任务结果，该接口只有在任务状态为以下状态时才支持结果正常查询：
3 扫描成功，
4 扫描失败
     */
    async DescribeDSPADiscoveryTaskResult(req, cb) {
        return this.request("DescribeDSPADiscoveryTaskResult", req, cb);
    }
    /**
     * 风险项页面----修改风险等级的详情数据
     */
    async ModifyDSPAAssessmentRiskLevel(req, cb) {
        return this.request("ModifyDSPAAssessmentRiskLevel", req, cb);
    }
    /**
     * 新增分类分级规则，单个用户最多允许创建200个规则。
     */
    async CreateDSPADiscoveryRule(req, cb) {
        return this.request("CreateDSPADiscoveryRule", req, cb);
    }
    /**
     * 修改分类信息
     */
    async ModifyNewClassification(req, cb) {
        return this.request("ModifyNewClassification", req, cb);
    }
    /**
     * 数据资产报告-查询cos的资产分布详情接口
     */
    async DescribeCOSAssetSensitiveDistribution(req, cb) {
        return this.request("DescribeCOSAssetSensitiveDistribution", req, cb);
    }
    /**
     * 查询标准下所有叶子节点分类
     */
    async DescribeLeafClassification(req, cb) {
        return this.request("DescribeLeafClassification", req, cb);
    }
    /**
     * 新增分类分级任务，单个用户最多允许创建100个任务。
     */
    async CreateDSPADiscoveryTask(req, cb) {
        return this.request("CreateDSPADiscoveryTask", req, cb);
    }
    /**
     * 风险概览-查询新发现风险统计数
     */
    async DescribeDSPAAssessmentNewDiscoveredRiskOverview(req, cb) {
        return this.request("DescribeDSPAAssessmentNewDiscoveredRiskOverview", req, cb);
    }
    /**
     * 查询风险的处理历史
     */
    async DescribeDSPAAssessmentRiskProcessHistory(req, cb) {
        return this.request("DescribeDSPAAssessmentRiskProcessHistory", req, cb);
    }
    /**
     * 查询DSPA实例的db列表
     */
    async QueryDSPAMetaResourceDbList(req, cb) {
        return this.request("QueryDSPAMetaResourceDbList", req, cb);
    }
    /**
     * 获取体验版本信息
     */
    async GetTrialVersion(req, cb) {
        return this.request("GetTrialVersion", req, cb);
    }
    /**
     * 查询风险分布数据，包含风险类型分布，风险详情分布，风险资产的分布
     */
    async DescribeDSPAAssessmentRiskDistributionOverview(req, cb) {
        return this.request("DescribeDSPAAssessmentRiskDistributionOverview", req, cb);
    }
    /**
     * 查询标准下所有分类的识别规则数量(不算子分类下的识别规则)
     */
    async DescribeClassificationRuleCount(req, cb) {
        return this.request("DescribeClassificationRuleCount", req, cb);
    }
    /**
     * 获取分类规则树信息
     */
    async DescribeDSPACategoryTreeWithRules(req, cb) {
        return this.request("DescribeDSPACategoryTreeWithRules", req, cb);
    }
    /**
     * 获取授权资源的连接状态
     */
    async GetResourceConnectionStatus(req, cb) {
        return this.request("GetResourceConnectionStatus", req, cb);
    }
    /**
     * 获取ES扫描结果数据样本
     */
    async DescribeDSPAESDataSample(req, cb) {
        return this.request("DescribeDSPAESDataSample", req, cb);
    }
    /**
     * 获取DSPA评估模版关联的评估控制项列表
     */
    async DescribeDSPAAssessmentTemplateControlItems(req, cb) {
        return this.request("DescribeDSPAAssessmentTemplateControlItems", req, cb);
    }
    /**
     * 开启级别或关闭级别
     */
    async ModifyLevelState(req, cb) {
        return this.request("ModifyLevelState", req, cb);
    }
    /**
     * 获取分级列表，限制100个 不分页返回
     */
    async DescribeDSPALevelGroups(req, cb) {
        return this.request("DescribeDSPALevelGroups", req, cb);
    }
    /**
     * 拉取DSPA集群列表
     */
    async ListDSPAClusters(req, cb) {
        return this.request("ListDSPAClusters", req, cb);
    }
    /**
     * 创建敏感数据导出任务
     */
    async ExportAssetDetailData(req, cb) {
        return this.request("ExportAssetDetailData", req, cb);
    }
    /**
     * 获取分类树信息
     */
    async DescribeDSPACategoryTree(req, cb) {
        return this.request("DescribeDSPACategoryTree", req, cb);
    }
    /**
     * 新建用户自建云资源
     */
    async CreateDSPASelfBuildMetaResource(req, cb) {
        return this.request("CreateDSPASelfBuildMetaResource", req, cb);
    }
    /**
     * 停止分类分级任务，该接口只有在任务状态为以下状态时才支持正确执行停止扫描：
1 扫描中
     */
    async StopDSPADiscoveryTask(req, cb) {
        return this.request("StopDSPADiscoveryTask", req, cb);
    }
    /**
     * 添加COS元数据
     */
    async CreateDSPACosMetaResources(req, cb) {
        return this.request("CreateDSPACosMetaResources", req, cb);
    }
    /**
     * 修改分类，内置分类不支持修改。
     */
    async ModifyDSPACategory(req, cb) {
        return this.request("ModifyDSPACategory", req, cb);
    }
    /**
     * 修改分类分级规则，单个用户最多允许创建200个规则。
注：此API同时适用RDB跟COS类型数据。
     */
    async ModifyDSPADiscoveryRule(req, cb) {
        return this.request("ModifyDSPADiscoveryRule", req, cb);
    }
    /**
     * 删除分类分级识别任务结果
     */
    async DeleteDSPADiscoveryTaskResult(req, cb) {
        return this.request("DeleteDSPADiscoveryTaskResult", req, cb);
    }
    /**
     * 风险评估概览页，查询风险面的分布
     */
    async DescribeDSPAAssessmentRiskSideList(req, cb) {
        return this.request("DescribeDSPAAssessmentRiskSideList", req, cb);
    }
    /**
     * 获取COS敏感数据资产桶列表
     */
    async DescribeDSPACOSDataAssetBuckets(req, cb) {
        return this.request("DescribeDSPACOSDataAssetBuckets", req, cb);
    }
    /**
     * 风险概览-查询处理中风险统计数
     */
    async DescribeDSPAAssessmentProcessingRiskOverview(req, cb) {
        return this.request("DescribeDSPAAssessmentProcessingRiskOverview", req, cb);
    }
    /**
     * 创建资产梳理报告任务
     */
    async CreateAssetSortingReportTask(req, cb) {
        return this.request("CreateAssetSortingReportTask", req, cb);
    }
}
exports.Client = Client;
