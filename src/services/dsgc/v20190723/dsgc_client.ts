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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  DescribeRuleListResponse,
  TopAsset,
  DescribeDSPADiscoveryTaskTablesResponse,
  DescribeCOSAssetSensitiveDistributionResponse,
  ModifyDSPAAssessmentRiskTemplateRequest,
  AssessmentControlItem,
  DescribeESAssetSensitiveDistributionResponse,
  DescribeDSPARDBDataAssetDetailResponse,
  ESInstance,
  CreateDSPACategoryRequest,
  ModifyDSPATaskResultResponse,
  DescribeDSPAAssessmentRiskLevelDetailResponse,
  DescribeDSPADiscoveryServiceStatusRequest,
  DescribeExportTaskResultResponse,
  ScanTaskRDBRules,
  CreateDSPADiscoveryTaskResponse,
  DescribeDSPACategoryTreeRequest,
  DeleteCosMetaResourceRequest,
  DataContent,
  DescribeDSPAAssessmentLatestRiskDetailInfoRequest,
  DescribeReportTaskDownloadUrlRequest,
  DspaFieldResultDataSample,
  ModifyClassificationRuleRequest,
  DescribeDSPADiscoveryServiceStatusResponse,
  CloudResourceItem,
  DescribeRuleDetailResponse,
  DSPACosMetaDataInfo,
  AssessmentTemplate,
  ModifyDSPATaskResultRequest,
  RDBAsset,
  DescribeAssetOverviewResponse,
  ReportInfo,
  DescribeDSPAESDataAssetByComplianceIdRequest,
  ModifyLevelNameRequest,
  ModifyDSPAAssessmentRiskLevelResponse,
  DspaCOSDiscoveryTask,
  COSDataRule,
  DSPADataSourceDbInfo,
  DescribeMongoAssetSensitiveDistributionResponse,
  ComplianceGroupDetail,
  ModifyDSPACOSDiscoveryTaskResponse,
  BindDSPAResourceDatabasesResponse,
  DbTaskResult,
  RuleDistribution,
  DecribeSuggestRiskLevelMatrixResponse,
  UpdateDSPASelfBuildResourceResponse,
  DescribeDSPAAssessmentRiskDealedTrendResponse,
  DescribeRDBAssetSensitiveDistributionRequest,
  GetResourceConnectionStatusRequest,
  DisableDSPAMetaResourceAuthRequest,
  RiskMatrixLevel,
  AssetList,
  CreateAssetSortingReportTaskRequest,
  CreateDSPAComplianceGroupResponse,
  DeleteDSPADiscoveryTaskRequest,
  DescribeDSPAAssessmentRiskDatasourceTop5Response,
  ModifyDSPADiscoveryTaskResponse,
  DescribeDSPAAssessmentRiskItemTop5Request,
  ModifyDSPAESTaskResultRequest,
  DescribeDSPACOSDataAssetByComplianceIdRequest,
  CreateDSPAMetaResourcesResponse,
  ScanTaskResult,
  DescribeDSPADiscoveryRulesRequest,
  DspaRDBDataAssetCount,
  DeleteDSPACOSDiscoveryTaskRequest,
  DspaDiscoveryComplianceGroupRule,
  CreateDSPAAssessmentTaskResponse,
  DescribeClassificationRuleCountResponse,
  DescribeDSPAESDataAssetByComplianceIdResponse,
  ModifyDSPAAssessmentRiskRequest,
  DspaResourceAccount,
  DspaDiscoveryTaskDetail,
  DeleteDSPAMetaResourceResponse,
  DescribeAssetDetailDataExportResultResponse,
  DeleteDSPADiscoveryTaskResultResponse,
  DspaDiscoveryTaskDataSource,
  DescribeRuleDetailRequest,
  ModifyDSPADiscoveryTaskRequest,
  DeleteDSPAAssessmentTaskResponse,
  DspaDiscoveryComplianceGroupRuleInfo,
  CreateDSPASelfBuildMetaResourceRequest,
  ModifyDSPACategoryRelationRequest,
  DescribeDSPAAssessmentRiskOverviewResponse,
  DspaDiscoveryTaskResultDetail,
  DescribeLeafClassificationRequest,
  CreateClassificationRuleRequest,
  DescribeDSPAAssessmentTemplatesRequest,
  HighRiskAssetsDetail,
  DspaSafeGuard,
  ItemLevel,
  DatagovRuleExtendParameter,
  ModifyDSPAClusterInfoResponse,
  DiscoveryCondition,
  ModifyStandardInfoResponse,
  DescribeDSPAAssessmentRiskTemplateDetailRequest,
  DescribeDSPADiscoveryTaskResultDetailResponse,
  ModifyDSPACategoryRelationResponse,
  RiskLevelMatrix,
  ScanTaskComplianceInfo,
  DescribeDSPAAssessmentRiskDistributionOverviewResponse,
  CosResourceItem,
  CreateDSPACOSDiscoveryTaskRequest,
  DspaDiscoveryCOSDataRule,
  DescribeDSPAAssessmentNewDiscoveredRiskOverviewRequest,
  DspaDiscoveryDataContent,
  DescribeDSPACOSDataAssetBucketsRequest,
  RestartDSPAAssessmentTaskRequest,
  VerifyDSPACOSRuleRequest,
  DescribeReportTasksRequest,
  CreateDSPADiscoveryRuleRequest,
  AuthorizeDSPAMetaResourcesResponse,
  DspaDiscoveryRuleDetail,
  ModifyDSPACategoryRequest,
  DspaCOSDataAssetDetail,
  DBStatements,
  DescribeDSPAAssessmentRiskLevelListResponse,
  CreateDSPADiscoveryTaskRequest,
  PrivilegeRisk,
  DspaCOSDataAssetCount,
  ESTaskResultDetail,
  DspaCloudResourceMeta,
  DescribeESAssetSensitiveDistributionRequest,
  DeleteCosMetaResourceResponse,
  ListDSPAMetaResourcesRequest,
  ModifyDSPAAssessmentRiskTemplateResponse,
  RiskLevelTrendItem,
  DescribeDSPAESDiscoveryTaskResultDetailRequest,
  NOSQLInstance,
  DeleteDSPADiscoveryTaskResultRequest,
  ModifyLevelInfoResponse,
  DspaDiscoveryRDBRules,
  DescribeDSPACOSDataAssetByComplianceIdResponse,
  CreateDSPAAssessmentRiskTemplateResponse,
  DescribeDSPACOSDataAssetBucketsResponse,
  DescribeDSPADiscoveryTaskDetailRequest,
  DescribeDSPARDBDataAssetByComplianceIdResponse,
  CreateNewClassificationResponse,
  ListDSPAClustersResponse,
  CopyDSPATemplateRequest,
  VerifyDSPADiscoveryRuleRequest,
  RiskLevelRisk,
  DescribeDSPAAssessmentRiskOverviewRequest,
  DeleteDSPACOSDiscoveryTaskResultResponse,
  DescribeDSPAAssessmentRiskAmountOverviewResponse,
  CreateAssetSortingReportRetryTaskResponse,
  DescribeDSPACategoriesResponse,
  DescribeDSPADiscoveryRulesResponse,
  ModifyLevelStateResponse,
  StopDSPADiscoveryTaskRequest,
  RiskSideDistributed,
  LevelItem,
  DecribeSuggestRiskLevelMatrixRequest,
  AssetCosDetail,
  MongoAsset,
  RiskItemInfo,
  DescribeDSPAAssessmentRiskProcessHistoryResponse,
  DescribeDSPAESDataAssetDetailResponse,
  DescribeDSPAAssessmentTasksResponse,
  DescribeDSPACOSDiscoveryTaskFilesRequest,
  CreateDSPALevelGroupResponse,
  DescribeDSPAAssessmentRiskDistributionOverviewRequest,
  DeleteDSPAMetaResourceRequest,
  ModifyDSPADiscoveryRuleRequest,
  DescribeRDBAssetSensitiveDistributionResponse,
  ModifyDSPACategoryResponse,
  CreateDSPAComplianceRulesRequest,
  DescribeReportTaskDownloadUrlResponse,
  DescribeDSPAAssessmentRisksResponse,
  CreateClassificationRuleResponse,
  DbInfo,
  ModifyClassificationRuleResponse,
  CreateIdentifyRuleAnotherNameResponse,
  DescribeDSPACategoryTreeResponse,
  DescribeBindDBListRequest,
  DspaDiscoveryCOSTaskResultDetail,
  CreateDSPADbMetaResourcesRequest,
  ModifyDSPACOSDiscoveryTaskRequest,
  DescribeDSPACategoryRulesRequest,
  DescribeDSPAComplianceGroupDetailRequest,
  CreateDSPADbMetaResourcesResponse,
  ModifyDSPAClusterInfoRequest,
  ListDSPACosMetaResourcesRequest,
  DescribeDSPATaskResultDataSampleResponse,
  CreateDSPALevelGroupRequest,
  DescribeDSPAComplianceGroupsResponse,
  CopyDSPATemplateResponse,
  DeleteDSPACOSDiscoveryTaskResponse,
  ProcessHistory,
  DescribeDSPAAssessmentRiskDealedOverviewRequest,
  AccountRisk,
  DescribeDSPACategoryTreeWithRulesResponse,
  DescribeDSPAAssessmentRiskLevelDetailRequest,
  DescribeLeafClassificationResponse,
  DescribeDSPAAssessmentRiskLevelTrendRequest,
  DataRules,
  DescribeDSPAAssessmentProcessingRiskOverviewRequest,
  CosAsset,
  DescribeDSPAAssessmentRiskSideListResponse,
  SensitiveLevel,
  CreateAssetSortingReportRetryTaskRequest,
  CreateDSPADiscoveryRuleResponse,
  DescribeAssetOverviewRequest,
  RestartDSPAAssessmentTaskResponse,
  DescribeDSPAAssessmentHighRiskTop10OverviewResponse,
  DSPATableInfo,
  AssessmentRisk,
  DspaRDBDataAssetDetail,
  DataRule,
  ModifyLevelNameResponse,
  EnableTrialVersionResponse,
  DSPAMetaType,
  ModifyStandardInfoRequest,
  DescribeDSPAComplianceGroupDetailResponse,
  DescribeDSPAAssessmentRiskTemplateVulnerableListRequest,
  CreateDSPACategoryRelationResponse,
  DescribeDSPAAssessmentTemplatesResponse,
  DescribeDSPACOSTaskResultDetailResponse,
  DspaTaskResult,
  DescribeRuleListRequest,
  DescribeDSPADataSourceDbInfoRequest,
  CreateOrCopyStandardRequest,
  DspaDiscoveryTaskDbResult,
  QueryResourceDbBindStatusResponse,
  DspaDataSourceMngFilter,
  CreateDSPACosMetaResourcesResponse,
  CreateDSPAComplianceRulesResponse,
  DescribeAssetDetailDataExportResultRequest,
  DescribeDSPAAssessmentRiskDatasourceTop5Request,
  DspaDiscoveryDataRules,
  DeleteDSPACOSDiscoveryTaskResultRequest,
  DescribeDSPAESDiscoveryTaskResultDetailResponse,
  ESAsset,
  DescribeDSPAComplianceUpdateNotificationRequest,
  AuthorizeDSPAMetaResourcesRequest,
  DBInstanceInfo,
  ModifyDSPAComplianceGroupResponse,
  AssessmentTask,
  DescribeClassificationInfoRequest,
  DescribeDSPAESDataSampleRequest,
  GetUserQuotaInfoResponse,
  DspaCOSDiscoveryTaskDetail,
  DescribeSensitiveCOSDataDistributionResponse,
  DescribeCOSAssetSensitiveDistributionRequest,
  CreateDSPAAssessmentRiskTemplateRequest,
  TemplateInfo,
  DescribeDSPACOSDiscoveryTaskFilesResponse,
  BindDSPAResourceCosBucketsRequest,
  ModifyDSPAESTaskResultResponse,
  CreateDSPACosMetaResourcesRequest,
  DescribeDSPAAssessmentRiskSideListRequest,
  ModifyNewClassificationRequest,
  DspaUserResourceMeta,
  DataCategory,
  CreateIdentifyRuleAnotherNameRequest,
  DescribeDSPACategoryRuleStatisticResponse,
  DspaDiscoveryComplianceGroup,
  ModifyDSPADiscoveryRuleResponse,
  ErrDescription,
  QueryResourceDbBindStatusRequest,
  ScanTaskCOSRules,
  MongoAssetDBDetail,
  DescribeDSPAAssessmentLatestRiskListRequest,
  DescribeDSPADiscoveryTaskResultResponse,
  AssessmentRiskItem,
  ModifyNewClassificationResponse,
  BindDSPAResourceDatabasesRequest,
  DescribeMongoAssetSensitiveDistributionRequest,
  GetUserQuotaInfoRequest,
  ModifyLevelStateRequest,
  ModifyDSPACOSTaskResultResponse,
  Note,
  DescribeDSPACOSDiscoveryTaskResultRequest,
  DescribeDSPAAssessmentLatestRiskDetailInfoResponse,
  TopAssetStat,
  DescribeDSPACOSDiscoveryTaskDetailResponse,
  StartDSPADiscoveryTaskResponse,
  CreateOrCopyStandardResponse,
  DescribeDSPALevelGroupsResponse,
  DescribeDSPAAssessmentProcessingRiskOverviewResponse,
  DescribeDSPAAssessmentRiskProcessHistoryRequest,
  DescribeDSPASupportedMetasResponse,
  CategoryRuleStatistic,
  ExportAssetDetailDataRequest,
  ComplianceGroupRuleIdInfo,
  DeleteDSPADiscoveryTaskResponse,
  DspaInstance,
  CreateDSPASelfBuildMetaResourceResponse,
  DspaDiscoveryCOSRules,
  DescribeDSPAAssessmentHighRiskTop10OverviewRequest,
  DescribeDSPAAssessmentTemplateControlItemsResponse,
  DescribeSensitiveRDBDataDistributionRequest,
  ModifyDSPAAssessmentRiskLevelRequest,
  DspaAssessmentFilter,
  DescribeDSPAAssessmentPendingRiskOverviewRequest,
  RiskItem,
  DescribeDSPAAssessmentRiskLevelTrendResponse,
  DescribeDSPAAssessmentRiskDealedTrendRequest,
  ModifyLevelInfoRequest,
  DataSourceInfo,
  DspaDataCategoryDistributed,
  COSInstance,
  DescribeDSPARDBDataAssetDetailRequest,
  DescribeDSPACOSDataAssetDetailResponse,
  DescribeDSPACategoriesRequest,
  DspaCOSDiscoveryTaskResult,
  DspaCOSDiscoveryTaskDataSourceInfo,
  UpdateDSPASelfBuildResourceRequest,
  DescribeDSPAAssessmentTasksRequest,
  DescribeDSPALevelDetailRequest,
  ESDataAssetCountDto,
  ListDSPAClustersRequest,
  ModifyDSPAAssessmentRiskLatestRequest,
  StopDSPADiscoveryTaskResponse,
  VerifyDSPADiscoveryRuleResponse,
  DescribeDSPAAssessmentTemplateControlItemsRequest,
  DescribeDSPAAssessmentRiskItemTop5Response,
  DspaDiscoveryDataRule,
  BindDSPAResourceCosBucketsResponse,
  DescribeDSPAESDataSampleResponse,
  CreateDSPAComplianceGroupRequest,
  VerifyDSPACOSRuleResponse,
  QueryDSPAMetaResourceDbListResponse,
  DescribeDSPALevelGroupsRequest,
  CreateDSPACOSDiscoveryTaskResponse,
  DescribeDSPADiscoveryTaskResultDetailRequest,
  DescribeClassificationInfoResponse,
  DescribeDSPATaskResultDataSampleRequest,
  SuggestRiskLevelMatrix,
  DescribeDSPAAssessmentRiskDealedOverviewResponse,
  ModifyDSPAAssessmentRiskLatestResponse,
  DescribeDSPACOSDiscoveryTaskDetailRequest,
  CreateComplianceRules,
  EnableTrialVersionRequest,
  DescribeDSPADiscoveryTaskTablesRequest,
  DescribeDSPAAssessmentRiskSideDistributedRequest,
  DescribeDSPAAssessmentNewDiscoveredRiskOverviewResponse,
  DescribeDSPAAssessmentRiskAmountOverviewRequest,
  DescribeDSPADiscoveryTaskDetailResponse,
  DescribeDSPACOSDiscoveryTasksResponse,
  EnableDSPADiscoveryRuleRequest,
  DspaDiscoveryTaskCOSCondition,
  DescribeDSPACOSDataAssetDetailRequest,
  DescribeDSPAAssessmentRiskTemplateDetailResponse,
  ModifyDSPACOSTaskResultRequest,
  DescribeDSPASupportedMetasRequest,
  ExportAssetDetailDataResponse,
  RuleEffectItem,
  CategoryRule,
  CreateDSPAMetaResourcesRequest,
  RiskCountInfo,
  CreateDSPAAssessmentTaskRequest,
  CreateDSPAAssessmentRiskLevelResponse,
  DescribeDSPADiscoveryTaskResultRequest,
  DescribeDSPACategoryTreeWithRulesRequest,
  DescribeClassificationRuleCountRequest,
  DbRelationStatusItem,
  CreateNewClassificationRequest,
  SecurityProduct,
  DescribeDSPAAssessmentRiskLevelListRequest,
  GetTrialVersionResponse,
  DescribeDSPAComplianceUpdateNotificationResponse,
  DescribeDSPAComplianceGroupsRequest,
  ListDSPACosMetaResourcesResponse,
  CosBucketItem,
  CosTaskResult,
  AKSKLeak,
  DescribeDSPADataSourceDbInfoResponse,
  DbResourceItem,
  CreateDSPACategoryRelationRequest,
  ModifyMergeClassificationResponse,
  CreateAssetSortingReportTaskResponse,
  GetResourceConnectionStatusResponse,
  DescribeDSPACategoryRuleStatisticRequest,
  DescribeDSPARDBDataAssetByComplianceIdRequest,
  CreateDSPAAssessmentRiskLevelRequest,
  ESAssetDBDetail,
  StartDSPADiscoveryTaskRequest,
  DeleteDSPAAssessmentTaskRequest,
  DescribeSensitiveCOSDataDistributionRequest,
  DescribeDSPAAssessmentRiskTemplateVulnerableListResponse,
  DescribeDSPACOSDiscoveryTaskResultResponse,
  Filter,
  ModifyDSPAComplianceGroupRequest,
  DescribeDSPAAssessmentRisksRequest,
  RDBInstance,
  DescribeDSPAAssessmentLatestRiskListResponse,
  EnableDSPADiscoveryRuleResponse,
  DescribeSensitiveRDBDataDistributionResponse,
  SuggestRiskLevelMatrixItem,
  DspaDiscoveryLevelDetail,
  ModifyClassificationRuleStateResponse,
  DescribeDSPAESDataAssetDetailRequest,
  ListDSPAMetaResourcesResponse,
  CreateDSPACategoryResponse,
  DescribeDSPACategoryRulesResponse,
  DescribeExportTaskResultRequest,
  QueryDSPAMetaResourceDbListRequest,
  DescribeBindDBListResponse,
  DisableDSPAMetaResourceAuthResponse,
  DescribeReportTasksResponse,
  GetTrialVersionRequest,
  DspaDiscoveryComplianceGroupInfo,
  ESDataAssetDetail,
  DescribeDSPACOSTaskResultDetailRequest,
  DescribeDSPALevelDetailResponse,
  DescribeDSPAAssessmentRiskSideDistributedResponse,
  DescribeDSPACOSDiscoveryTasksRequest,
  ModifyMergeClassificationRequest,
  DescribeDSPAAssessmentPendingRiskOverviewResponse,
  ModifyDSPAAssessmentRiskResponse,
  AssetDBDetail,
  ModifyClassificationRuleStateRequest,
  RiskDealedTrendItem,
} from "./dsgc_models"

/**
 * dsgc client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("dsgc.tencentcloudapi.com", "2019-07-23", clientConfig)
  }

  /**
   * 新增分级，单个Casb实例最多允许创建100个数据分级
   */
  async CreateDSPALevelGroup(
    req: CreateDSPALevelGroupRequest,
    cb?: (error: string, rep: CreateDSPALevelGroupResponse) => void
  ): Promise<CreateDSPALevelGroupResponse> {
    return this.request("CreateDSPALevelGroup", req, cb)
  }

  /**
   * 遗留待处理&昨日完成风险处置概览统计
   */
  async DescribeDSPAAssessmentRiskDealedOverview(
    req: DescribeDSPAAssessmentRiskDealedOverviewRequest,
    cb?: (error: string, rep: DescribeDSPAAssessmentRiskDealedOverviewResponse) => void
  ): Promise<DescribeDSPAAssessmentRiskDealedOverviewResponse> {
    return this.request("DescribeDSPAAssessmentRiskDealedOverview", req, cb)
  }

  /**
   * 复制合规组模板
   */
  async CopyDSPATemplate(
    req: CopyDSPATemplateRequest,
    cb?: (error: string, rep: CopyDSPATemplateResponse) => void
  ): Promise<CopyDSPATemplateResponse> {
    return this.request("CopyDSPATemplate", req, cb)
  }

  /**
   * 风险项页面----查询风险等级的详情数据
   */
  async DescribeDSPAAssessmentRiskLevelDetail(
    req: DescribeDSPAAssessmentRiskLevelDetailRequest,
    cb?: (error: string, rep: DescribeDSPAAssessmentRiskLevelDetailResponse) => void
  ): Promise<DescribeDSPAAssessmentRiskLevelDetailResponse> {
    return this.request("DescribeDSPAAssessmentRiskLevelDetail", req, cb)
  }

  /**
   * 风险项页面--查看评估模板详情
   */
  async DescribeDSPAAssessmentRiskTemplateDetail(
    req: DescribeDSPAAssessmentRiskTemplateDetailRequest,
    cb?: (error: string, rep: DescribeDSPAAssessmentRiskTemplateDetailResponse) => void
  ): Promise<DescribeDSPAAssessmentRiskTemplateDetailResponse> {
    return this.request("DescribeDSPAAssessmentRiskTemplateDetail", req, cb)
  }

  /**
   * 修改DSPA评估风险项，支持修改Status
   */
  async ModifyDSPAAssessmentRisk(
    req: ModifyDSPAAssessmentRiskRequest,
    cb?: (error: string, rep: ModifyDSPAAssessmentRiskResponse) => void
  ): Promise<ModifyDSPAAssessmentRiskResponse> {
    return this.request("ModifyDSPAAssessmentRisk", req, cb)
  }

  /**
   * 修改分类分级关系
   */
  async ModifyDSPACategoryRelation(
    req: ModifyDSPACategoryRelationRequest,
    cb?: (error: string, rep: ModifyDSPACategoryRelationResponse) => void
  ): Promise<ModifyDSPACategoryRelationResponse> {
    return this.request("ModifyDSPACategoryRelation", req, cb)
  }

  /**
   * 取消用户云资源授权
   */
  async DisableDSPAMetaResourceAuth(
    req: DisableDSPAMetaResourceAuthRequest,
    cb?: (error: string, rep: DisableDSPAMetaResourceAuthResponse) => void
  ): Promise<DisableDSPAMetaResourceAuthResponse> {
    return this.request("DisableDSPAMetaResourceAuth", req, cb)
  }

  /**
     * 立即启动分类分级任务，该接口只有在任务状态为以下状态时才支持正确执行立即扫描：
0 待扫描，
2 扫描终止，
3 扫描成功，
4 扫描失败
     */
  async StartDSPADiscoveryTask(
    req: StartDSPADiscoveryTaskRequest,
    cb?: (error: string, rep: StartDSPADiscoveryTaskResponse) => void
  ): Promise<StartDSPADiscoveryTaskResponse> {
    return this.request("StartDSPADiscoveryTask", req, cb)
  }

  /**
   * 查询最新的风险详情列表数据
   */
  async DescribeDSPAAssessmentLatestRiskList(
    req: DescribeDSPAAssessmentLatestRiskListRequest,
    cb?: (error: string, rep: DescribeDSPAAssessmentLatestRiskListResponse) => void
  ): Promise<DescribeDSPAAssessmentLatestRiskListResponse> {
    return this.request("DescribeDSPAAssessmentLatestRiskList", req, cb)
  }

  /**
   * 获取分类分级规则列表
   */
  async DescribeDSPADiscoveryRules(
    req: DescribeDSPADiscoveryRulesRequest,
    cb?: (error: string, rep: DescribeDSPADiscoveryRulesResponse) => void
  ): Promise<DescribeDSPADiscoveryRulesResponse> {
    return this.request("DescribeDSPADiscoveryRules", req, cb)
  }

  /**
   * 创建合规组分类规则关联关系
   */
  async CreateDSPAComplianceRules(
    req: CreateDSPAComplianceRulesRequest,
    cb?: (error: string, rep: CreateDSPAComplianceRulesResponse) => void
  ): Promise<CreateDSPAComplianceRulesResponse> {
    return this.request("CreateDSPAComplianceRules", req, cb)
  }

  /**
   * 创建资产梳理报表导出重试任务
   */
  async CreateAssetSortingReportRetryTask(
    req: CreateAssetSortingReportRetryTaskRequest,
    cb?: (error: string, rep: CreateAssetSortingReportRetryTaskResponse) => void
  ): Promise<CreateAssetSortingReportRetryTaskResponse> {
    return this.request("CreateAssetSortingReportRetryTask", req, cb)
  }

  /**
   * 获取COS单个模板下的敏感数据资产
   */
  async DescribeDSPACOSDataAssetByComplianceId(
    req: DescribeDSPACOSDataAssetByComplianceIdRequest,
    cb?: (error: string, rep: DescribeDSPACOSDataAssetByComplianceIdResponse) => void
  ): Promise<DescribeDSPACOSDataAssetByComplianceIdResponse> {
    return this.request("DescribeDSPACOSDataAssetByComplianceId", req, cb)
  }

  /**
   * 风险项页面----查询风险等级的列表
   */
  async DescribeDSPAAssessmentRiskLevelList(
    req: DescribeDSPAAssessmentRiskLevelListRequest,
    cb?: (error: string, rep: DescribeDSPAAssessmentRiskLevelListResponse) => void
  ): Promise<DescribeDSPAAssessmentRiskLevelListResponse> {
    return this.request("DescribeDSPAAssessmentRiskLevelList", req, cb)
  }

  /**
   * 编辑识别规则
   */
  async ModifyClassificationRule(
    req?: ModifyClassificationRuleRequest,
    cb?: (error: string, rep: ModifyClassificationRuleResponse) => void
  ): Promise<ModifyClassificationRuleResponse> {
    return this.request("ModifyClassificationRule", req, cb)
  }

  /**
   * 获取分类规则统计信息
   */
  async DescribeDSPACategoryRuleStatistic(
    req: DescribeDSPACategoryRuleStatisticRequest,
    cb?: (error: string, rep: DescribeDSPACategoryRuleStatisticResponse) => void
  ): Promise<DescribeDSPACategoryRuleStatisticResponse> {
    return this.request("DescribeDSPACategoryRuleStatistic", req, cb)
  }

  /**
     * 查询分类规则详情

     */
  async DescribeRuleDetail(
    req?: DescribeRuleDetailRequest,
    cb?: (error: string, rep: DescribeRuleDetailResponse) => void
  ): Promise<DescribeRuleDetailResponse> {
    return this.request("DescribeRuleDetail", req, cb)
  }

  /**
   * 删除COS分类分级任务结果
   */
  async DeleteDSPACOSDiscoveryTaskResult(
    req: DeleteDSPACOSDiscoveryTaskResultRequest,
    cb?: (error: string, rep: DeleteDSPACOSDiscoveryTaskResultResponse) => void
  ): Promise<DeleteDSPACOSDiscoveryTaskResultResponse> {
    return this.request("DeleteDSPACOSDiscoveryTaskResult", req, cb)
  }

  /**
   * 获取COS分类分级数据资产详情
   */
  async DescribeDSPACOSDataAssetDetail(
    req: DescribeDSPACOSDataAssetDetailRequest,
    cb?: (error: string, rep: DescribeDSPACOSDataAssetDetailResponse) => void
  ): Promise<DescribeDSPACOSDataAssetDetailResponse> {
    return this.request("DescribeDSPACOSDataAssetDetail", req, cb)
  }

  /**
   * 数据资产报告-查询rbd 的敏感资产报告，包含（数据库资产，设敏级别数据库top10，资产详情）
   */
  async DescribeRDBAssetSensitiveDistribution(
    req: DescribeRDBAssetSensitiveDistributionRequest,
    cb?: (error: string, rep: DescribeRDBAssetSensitiveDistributionResponse) => void
  ): Promise<DescribeRDBAssetSensitiveDistributionResponse> {
    return this.request("DescribeRDBAssetSensitiveDistribution", req, cb)
  }

  /**
     * 修改COS分类分级任务，该接口只有在任务状态为以下状态时才支持正确修改：
0 待扫描，
2 扫描终止， 
3 扫描成功，
4 扫描失败
     */
  async ModifyDSPACOSDiscoveryTask(
    req: ModifyDSPACOSDiscoveryTaskRequest,
    cb?: (error: string, rep: ModifyDSPACOSDiscoveryTaskResponse) => void
  ): Promise<ModifyDSPACOSDiscoveryTaskResponse> {
    return this.request("ModifyDSPACOSDiscoveryTask", req, cb)
  }

  /**
   * 删除用户云资源
   */
  async DeleteDSPAMetaResource(
    req: DeleteDSPAMetaResourceRequest,
    cb?: (error: string, rep: DeleteDSPAMetaResourceResponse) => void
  ): Promise<DeleteDSPAMetaResourceResponse> {
    return this.request("DeleteDSPAMetaResource", req, cb)
  }

  /**
   * 本接口（DeleteCOSMetaData）用于删除COS元数据信息。
   */
  async DeleteCosMetaResource(
    req: DeleteCosMetaResourceRequest,
    cb?: (error: string, rep: DeleteCosMetaResourceResponse) => void
  ): Promise<DeleteCosMetaResourceResponse> {
    return this.request("DeleteCosMetaResource", req, cb)
  }

  /**
   * 修改分级分类模板信息
   */
  async ModifyStandardInfo(
    req?: ModifyStandardInfoRequest,
    cb?: (error: string, rep: ModifyStandardInfoResponse) => void
  ): Promise<ModifyStandardInfoResponse> {
    return this.request("ModifyStandardInfo", req, cb)
  }

  /**
   * 获取报表下载链接
   */
  async DescribeReportTaskDownloadUrl(
    req: DescribeReportTaskDownloadUrlRequest,
    cb?: (error: string, rep: DescribeReportTaskDownloadUrlResponse) => void
  ): Promise<DescribeReportTaskDownloadUrlResponse> {
    return this.request("DescribeReportTaskDownloadUrl", req, cb)
  }

  /**
     * 获取COS分类分级任务结果，该接口只有在任务状态为以下状态时才支持结果正常查询：
3 扫描成功，
4 扫描失败
     */
  async DescribeDSPACOSDiscoveryTaskResult(
    req: DescribeDSPACOSDiscoveryTaskResultRequest,
    cb?: (error: string, rep: DescribeDSPACOSDiscoveryTaskResultResponse) => void
  ): Promise<DescribeDSPACOSDiscoveryTaskResultResponse> {
    return this.request("DescribeDSPACOSDiscoveryTaskResult", req, cb)
  }

  /**
   * 绑定或解绑COS桶
   */
  async BindDSPAResourceCosBuckets(
    req: BindDSPAResourceCosBucketsRequest,
    cb?: (error: string, rep: BindDSPAResourceCosBucketsResponse) => void
  ): Promise<BindDSPAResourceCosBucketsResponse> {
    return this.request("BindDSPAResourceCosBuckets", req, cb)
  }

  /**
   * 修改分类分级模板，内置模板不支持修改。
   */
  async ModifyDSPAComplianceGroup(
    req: ModifyDSPAComplianceGroupRequest,
    cb?: (error: string, rep: ModifyDSPAComplianceGroupResponse) => void
  ): Promise<ModifyDSPAComplianceGroupResponse> {
    return this.request("ModifyDSPAComplianceGroup", req, cb)
  }

  /**
   * 查询敏感数据导出结果URL
   */
  async DescribeAssetDetailDataExportResult(
    req: DescribeAssetDetailDataExportResultRequest,
    cb?: (error: string, rep: DescribeAssetDetailDataExportResultResponse) => void
  ): Promise<DescribeAssetDetailDataExportResultResponse> {
    return this.request("DescribeAssetDetailDataExportResult", req, cb)
  }

  /**
   * 风险评估概览页，查询风险面的分布
   */
  async DescribeDSPAAssessmentRiskSideDistributed(
    req: DescribeDSPAAssessmentRiskSideDistributedRequest,
    cb?: (error: string, rep: DescribeDSPAAssessmentRiskSideDistributedResponse) => void
  ): Promise<DescribeDSPAAssessmentRiskSideDistributedResponse> {
    return this.request("DescribeDSPAAssessmentRiskSideDistributed", req, cb)
  }

  /**
     * 获取分类分级任务结果详情，该接口只有在任务状态为时才支持结果正确查询：
3 扫描成功
     */
  async DescribeDSPADiscoveryTaskResultDetail(
    req: DescribeDSPADiscoveryTaskResultDetailRequest,
    cb?: (error: string, rep: DescribeDSPADiscoveryTaskResultDetailResponse) => void
  ): Promise<DescribeDSPADiscoveryTaskResultDetailResponse> {
    return this.request("DescribeDSPADiscoveryTaskResultDetail", req, cb)
  }

  /**
   * 风险级别趋势统计
   */
  async DescribeDSPAAssessmentRiskLevelTrend(
    req: DescribeDSPAAssessmentRiskLevelTrendRequest,
    cb?: (error: string, rep: DescribeDSPAAssessmentRiskLevelTrendResponse) => void
  ): Promise<DescribeDSPAAssessmentRiskLevelTrendResponse> {
    return this.request("DescribeDSPAAssessmentRiskLevelTrend", req, cb)
  }

  /**
   * 获取DSPA评估风险项列表
   */
  async DescribeDSPAAssessmentRisks(
    req: DescribeDSPAAssessmentRisksRequest,
    cb?: (error: string, rep: DescribeDSPAAssessmentRisksResponse) => void
  ): Promise<DescribeDSPAAssessmentRisksResponse> {
    return this.request("DescribeDSPAAssessmentRisks", req, cb)
  }

  /**
   * 获取模板详情信息
   */
  async DescribeDSPAComplianceGroupDetail(
    req: DescribeDSPAComplianceGroupDetailRequest,
    cb?: (error: string, rep: DescribeDSPAComplianceGroupDetailResponse) => void
  ): Promise<DescribeDSPAComplianceGroupDetailResponse> {
    return this.request("DescribeDSPAComplianceGroupDetail", req, cb)
  }

  /**
   * 风险项页面---创建风险等级
   */
  async CreateDSPAAssessmentRiskLevel(
    req: CreateDSPAAssessmentRiskLevelRequest,
    cb?: (error: string, rep: CreateDSPAAssessmentRiskLevelResponse) => void
  ): Promise<CreateDSPAAssessmentRiskLevelResponse> {
    return this.request("CreateDSPAAssessmentRiskLevel", req, cb)
  }

  /**
     * 获取COS分类分级任务结果详情，该接口只有在任务状态为时才支持结果正确查询：
3 扫描成功
     */
  async DescribeDSPACOSTaskResultDetail(
    req: DescribeDSPACOSTaskResultDetailRequest,
    cb?: (error: string, rep: DescribeDSPACOSTaskResultDetailResponse) => void
  ): Promise<DescribeDSPACOSTaskResultDetailResponse> {
    return this.request("DescribeDSPACOSTaskResultDetail", req, cb)
  }

  /**
   * 获取单个合规组下的RDB关系数据库分类分级数据资产
   */
  async DescribeDSPARDBDataAssetByComplianceId(
    req: DescribeDSPARDBDataAssetByComplianceIdRequest,
    cb?: (error: string, rep: DescribeDSPARDBDataAssetByComplianceIdResponse) => void
  ): Promise<DescribeDSPARDBDataAssetByComplianceIdResponse> {
    return this.request("DescribeDSPARDBDataAssetByComplianceId", req, cb)
  }

  /**
   * 查询DB绑定的列表
   */
  async DescribeBindDBList(
    req: DescribeBindDBListRequest,
    cb?: (error: string, rep: DescribeBindDBListResponse) => void
  ): Promise<DescribeBindDBListResponse> {
    return this.request("DescribeBindDBList", req, cb)
  }

  /**
   * 获取导出任务结果
   */
  async DescribeExportTaskResult(
    req: DescribeExportTaskResultRequest,
    cb?: (error: string, rep: DescribeExportTaskResultResponse) => void
  ): Promise<DescribeExportTaskResultResponse> {
    return this.request("DescribeExportTaskResult", req, cb)
  }

  /**
   * 本接口用于获取COS元数据信息，返回COS元数据信息列表。
   */
  async ListDSPACosMetaResources(
    req: ListDSPACosMetaResourcesRequest,
    cb?: (error: string, rep: ListDSPACosMetaResourcesResponse) => void
  ): Promise<ListDSPACosMetaResourcesResponse> {
    return this.request("ListDSPACosMetaResources", req, cb)
  }

  /**
   * 拉取用户云资源
   */
  async ListDSPAMetaResources(
    req: ListDSPAMetaResourcesRequest,
    cb?: (error: string, rep: ListDSPAMetaResourcesResponse) => void
  ): Promise<ListDSPAMetaResourcesResponse> {
    return this.request("ListDSPAMetaResources", req, cb)
  }

  /**
   * 获取敏感数据分类列表
   */
  async DescribeDSPACategories(
    req: DescribeDSPACategoriesRequest,
    cb?: (error: string, rep: DescribeDSPACategoriesResponse) => void
  ): Promise<DescribeDSPACategoriesResponse> {
    return this.request("DescribeDSPACategories", req, cb)
  }

  /**
   * 创建新分类
   */
  async CreateNewClassification(
    req?: CreateNewClassificationRequest,
    cb?: (error: string, rep: CreateNewClassificationResponse) => void
  ): Promise<CreateNewClassificationResponse> {
    return this.request("CreateNewClassification", req, cb)
  }

  /**
   * 风险模板---修改风险模板
   */
  async ModifyDSPAAssessmentRiskTemplate(
    req: ModifyDSPAAssessmentRiskTemplateRequest,
    cb?: (error: string, rep: ModifyDSPAAssessmentRiskTemplateResponse) => void
  ): Promise<ModifyDSPAAssessmentRiskTemplateResponse> {
    return this.request("ModifyDSPAAssessmentRiskTemplate", req, cb)
  }

  /**
   * 获取分类分级任务详情
   */
  async DescribeDSPADiscoveryTaskDetail(
    req: DescribeDSPADiscoveryTaskDetailRequest,
    cb?: (error: string, rep: DescribeDSPADiscoveryTaskDetailResponse) => void
  ): Promise<DescribeDSPADiscoveryTaskDetailResponse> {
    return this.request("DescribeDSPADiscoveryTaskDetail", req, cb)
  }

  /**
     * 修改分类分级任务，该接口只有在任务状态为以下状态时才支持正确修改：
0 待扫描，
2 扫描终止， 
3 扫描成功，
4 扫描失败
     */
  async ModifyDSPADiscoveryTask(
    req: ModifyDSPADiscoveryTaskRequest,
    cb?: (error: string, rep: ModifyDSPADiscoveryTaskResponse) => void
  ): Promise<ModifyDSPADiscoveryTaskResponse> {
    return this.request("ModifyDSPADiscoveryTask", req, cb)
  }

  /**
   * 风险概览页风险数量和受影响资产数概览统计
   */
  async DescribeDSPAAssessmentRiskAmountOverview(
    req: DescribeDSPAAssessmentRiskAmountOverviewRequest,
    cb?: (error: string, rep: DescribeDSPAAssessmentRiskAmountOverviewResponse) => void
  ): Promise<DescribeDSPAAssessmentRiskAmountOverviewResponse> {
    return this.request("DescribeDSPAAssessmentRiskAmountOverview", req, cb)
  }

  /**
   * 创建识别规则
   */
  async CreateClassificationRule(
    req?: CreateClassificationRuleRequest,
    cb?: (error: string, rep: CreateClassificationRuleResponse) => void
  ): Promise<CreateClassificationRuleResponse> {
    return this.request("CreateClassificationRule", req, cb)
  }

  /**
   * 根据合规组id，去查询ES的概览页统计数据
   */
  async DescribeDSPAESDataAssetByComplianceId(
    req: DescribeDSPAESDataAssetByComplianceIdRequest,
    cb?: (error: string, rep: DescribeDSPAESDataAssetByComplianceIdResponse) => void
  ): Promise<DescribeDSPAESDataAssetByComplianceIdResponse> {
    return this.request("DescribeDSPAESDataAssetByComplianceId", req, cb)
  }

  /**
   * 获取分类分级模板列表
   */
  async DescribeDSPAComplianceGroups(
    req: DescribeDSPAComplianceGroupsRequest,
    cb?: (error: string, rep: DescribeDSPAComplianceGroupsResponse) => void
  ): Promise<DescribeDSPAComplianceGroupsResponse> {
    return this.request("DescribeDSPAComplianceGroups", req, cb)
  }

  /**
   * 修改级别名称
   */
  async ModifyLevelName(
    req?: ModifyLevelNameRequest,
    cb?: (error: string, rep: ModifyLevelNameResponse) => void
  ): Promise<ModifyLevelNameResponse> {
    return this.request("ModifyLevelName", req, cb)
  }

  /**
   * 获取COS分类分级任务详情
   */
  async DescribeDSPACOSDiscoveryTaskDetail(
    req: DescribeDSPACOSDiscoveryTaskDetailRequest,
    cb?: (error: string, rep: DescribeDSPACOSDiscoveryTaskDetailResponse) => void
  ): Promise<DescribeDSPACOSDiscoveryTaskDetailResponse> {
    return this.request("DescribeDSPACOSDiscoveryTaskDetail", req, cb)
  }

  /**
   * 获取扫描结果数据样本
   */
  async DescribeDSPATaskResultDataSample(
    req: DescribeDSPATaskResultDataSampleRequest,
    cb?: (error: string, rep: DescribeDSPATaskResultDataSampleResponse) => void
  ): Promise<DescribeDSPATaskResultDataSampleResponse> {
    return this.request("DescribeDSPATaskResultDataSample", req, cb)
  }

  /**
     * 删除COS分类分级任务，该接口只有在任务状态为以下几个状态值时才支持正确删除：
0 待扫描，
2 扫描终止， 
3 扫描成功，
4 扫描失败
     */
  async DeleteDSPACOSDiscoveryTask(
    req: DeleteDSPACOSDiscoveryTaskRequest,
    cb?: (error: string, rep: DeleteDSPACOSDiscoveryTaskResponse) => void
  ): Promise<DeleteDSPACOSDiscoveryTaskResponse> {
    return this.request("DeleteDSPACOSDiscoveryTask", req, cb)
  }

  /**
   * 数据资产报告-查询mongo 的敏感资产报告，包含（数据库资产，设敏级别数据库top10，资产详情）
   */
  async DescribeMongoAssetSensitiveDistribution(
    req: DescribeMongoAssetSensitiveDistributionRequest,
    cb?: (error: string, rep: DescribeMongoAssetSensitiveDistributionResponse) => void
  ): Promise<DescribeMongoAssetSensitiveDistributionResponse> {
    return this.request("DescribeMongoAssetSensitiveDistribution", req, cb)
  }

  /**
   * 修改敏感级别信息
   */
  async ModifyLevelInfo(
    req?: ModifyLevelInfoRequest,
    cb?: (error: string, rep: ModifyLevelInfoResponse) => void
  ): Promise<ModifyLevelInfoResponse> {
    return this.request("ModifyLevelInfo", req, cb)
  }

  /**
   * 创建分类关联关系
   */
  async CreateDSPACategoryRelation(
    req: CreateDSPACategoryRelationRequest,
    cb?: (error: string, rep: CreateDSPACategoryRelationResponse) => void
  ): Promise<CreateDSPACategoryRelationResponse> {
    return this.request("CreateDSPACategoryRelation", req, cb)
  }

  /**
   * 数据资产报告-查询cos的敏感数据分布（分级分布 分类分布 敏感规则分布详情列表）
   */
  async DescribeSensitiveCOSDataDistribution(
    req: DescribeSensitiveCOSDataDistributionRequest,
    cb?: (error: string, rep: DescribeSensitiveCOSDataDistributionResponse) => void
  ): Promise<DescribeSensitiveCOSDataDistributionResponse> {
    return this.request("DescribeSensitiveCOSDataDistribution", req, cb)
  }

  /**
   * 受影响资产TOP5统计
   */
  async DescribeDSPAAssessmentRiskDatasourceTop5(
    req: DescribeDSPAAssessmentRiskDatasourceTop5Request,
    cb?: (error: string, rep: DescribeDSPAAssessmentRiskDatasourceTop5Response) => void
  ): Promise<DescribeDSPAAssessmentRiskDatasourceTop5Response> {
    return this.request("DescribeDSPAAssessmentRiskDatasourceTop5", req, cb)
  }

  /**
   * 获取资产报表任务列表
   */
  async DescribeReportTasks(
    req: DescribeReportTasksRequest,
    cb?: (error: string, rep: DescribeReportTasksResponse) => void
  ): Promise<DescribeReportTasksResponse> {
    return this.request("DescribeReportTasks", req, cb)
  }

  /**
   * 获取COS分类分级任务结果详情文件列表
   */
  async DescribeDSPACOSDiscoveryTaskFiles(
    req: DescribeDSPACOSDiscoveryTaskFilesRequest,
    cb?: (error: string, rep: DescribeDSPACOSDiscoveryTaskFilesResponse) => void
  ): Promise<DescribeDSPACOSDiscoveryTaskFilesResponse> {
    return this.request("DescribeDSPACOSDiscoveryTaskFiles", req, cb)
  }

  /**
   * 获取DSPA评估模板列表
   */
  async DescribeDSPAAssessmentTemplates(
    req: DescribeDSPAAssessmentTemplatesRequest,
    cb?: (error: string, rep: DescribeDSPAAssessmentTemplatesResponse) => void
  ): Promise<DescribeDSPAAssessmentTemplatesResponse> {
    return this.request("DescribeDSPAAssessmentTemplates", req, cb)
  }

  /**
   * 修改最新评估风险项状态
   */
  async ModifyDSPAAssessmentRiskLatest(
    req: ModifyDSPAAssessmentRiskLatestRequest,
    cb?: (error: string, rep: ModifyDSPAAssessmentRiskLatestResponse) => void
  ): Promise<ModifyDSPAAssessmentRiskLatestResponse> {
    return this.request("ModifyDSPAAssessmentRiskLatest", req, cb)
  }

  /**
     * 打开或者关闭分类分级规则
注：此API同时对该规则下的RDB跟COS规则操作。
     */
  async EnableDSPADiscoveryRule(
    req: EnableDSPADiscoveryRuleRequest,
    cb?: (error: string, rep: EnableDSPADiscoveryRuleResponse) => void
  ): Promise<EnableDSPADiscoveryRuleResponse> {
    return this.request("EnableDSPADiscoveryRule", req, cb)
  }

  /**
   * 创建规则别名
   */
  async CreateIdentifyRuleAnotherName(
    req: CreateIdentifyRuleAnotherNameRequest,
    cb?: (error: string, rep: CreateIdentifyRuleAnotherNameResponse) => void
  ): Promise<CreateIdentifyRuleAnotherNameResponse> {
    return this.request("CreateIdentifyRuleAnotherName", req, cb)
  }

  /**
   * 风险等级的定义页面-创建风险等级的时候生成的一个默认的矩阵
   */
  async DecribeSuggestRiskLevelMatrix(
    req: DecribeSuggestRiskLevelMatrixRequest,
    cb?: (error: string, rep: DecribeSuggestRiskLevelMatrixResponse) => void
  ): Promise<DecribeSuggestRiskLevelMatrixResponse> {
    return this.request("DecribeSuggestRiskLevelMatrix", req, cb)
  }

  /**
   * 风险概览-查询待处理风险统计数
   */
  async DescribeDSPAAssessmentPendingRiskOverview(
    req: DescribeDSPAAssessmentPendingRiskOverviewRequest,
    cb?: (error: string, rep: DescribeDSPAAssessmentPendingRiskOverviewResponse) => void
  ): Promise<DescribeDSPAAssessmentPendingRiskOverviewResponse> {
    return this.request("DescribeDSPAAssessmentPendingRiskOverview", req, cb)
  }

  /**
   * 调整ES任务扫描结果
   */
  async ModifyDSPAESTaskResult(
    req: ModifyDSPAESTaskResultRequest,
    cb?: (error: string, rep: ModifyDSPAESTaskResultResponse) => void
  ): Promise<ModifyDSPAESTaskResultResponse> {
    return this.request("ModifyDSPAESTaskResult", req, cb)
  }

  /**
   * 获取RDB关系数据库分类分级资产详情
   */
  async DescribeDSPARDBDataAssetDetail(
    req: DescribeDSPARDBDataAssetDetailRequest,
    cb?: (error: string, rep: DescribeDSPARDBDataAssetDetailResponse) => void
  ): Promise<DescribeDSPARDBDataAssetDetailResponse> {
    return this.request("DescribeDSPARDBDataAssetDetail", req, cb)
  }

  /**
     * 查询分类信息

     */
  async DescribeClassificationInfo(
    req?: DescribeClassificationInfoRequest,
    cb?: (error: string, rep: DescribeClassificationInfoResponse) => void
  ): Promise<DescribeClassificationInfoResponse> {
    return this.request("DescribeClassificationInfo", req, cb)
  }

  /**
   * 风险分类TOP5统计
   */
  async DescribeDSPAAssessmentRiskItemTop5(
    req: DescribeDSPAAssessmentRiskItemTop5Request,
    cb?: (error: string, rep: DescribeDSPAAssessmentRiskItemTop5Response) => void
  ): Promise<DescribeDSPAAssessmentRiskItemTop5Response> {
    return this.request("DescribeDSPAAssessmentRiskItemTop5", req, cb)
  }

  /**
   * 获取资源绑定DB状态
   */
  async QueryResourceDbBindStatus(
    req: QueryResourceDbBindStatusRequest,
    cb?: (error: string, rep: QueryResourceDbBindStatusResponse) => void
  ): Promise<QueryResourceDbBindStatusResponse> {
    return this.request("QueryResourceDbBindStatus", req, cb)
  }

  /**
   * 用于查询该用户是否已开通分类分级服务
   */
  async DescribeDSPADiscoveryServiceStatus(
    req: DescribeDSPADiscoveryServiceStatusRequest,
    cb?: (error: string, rep: DescribeDSPADiscoveryServiceStatusResponse) => void
  ): Promise<DescribeDSPADiscoveryServiceStatusResponse> {
    return this.request("DescribeDSPADiscoveryServiceStatus", req, cb)
  }

  /**
   * 启用版本体验
   */
  async EnableTrialVersion(
    req: EnableTrialVersionRequest,
    cb?: (error: string, rep: EnableTrialVersionResponse) => void
  ): Promise<EnableTrialVersionResponse> {
    return this.request("EnableTrialVersion", req, cb)
  }

  /**
   * 调整任务扫描结果
   */
  async ModifyDSPATaskResult(
    req: ModifyDSPATaskResultRequest,
    cb?: (error: string, rep: ModifyDSPATaskResultResponse) => void
  ): Promise<ModifyDSPATaskResultResponse> {
    return this.request("ModifyDSPATaskResult", req, cb)
  }

  /**
   * 新增分类，单个用户最多允许创建100个数据分类。
   */
  async CreateDSPACategory(
    req: CreateDSPACategoryRequest,
    cb?: (error: string, rep: CreateDSPACategoryResponse) => void
  ): Promise<CreateDSPACategoryResponse> {
    return this.request("CreateDSPACategory", req, cb)
  }

  /**
   * 新增COS分类分级扫描任务，单个用户最多允许创建100个任务。
   */
  async CreateDSPACOSDiscoveryTask(
    req: CreateDSPACOSDiscoveryTaskRequest,
    cb?: (error: string, rep: CreateDSPACOSDiscoveryTaskResponse) => void
  ): Promise<CreateDSPACOSDiscoveryTaskResponse> {
    return this.request("CreateDSPACOSDiscoveryTask", req, cb)
  }

  /**
   * 获取合规组分类规则信息
   */
  async DescribeDSPACategoryRules(
    req: DescribeDSPACategoryRulesRequest,
    cb?: (error: string, rep: DescribeDSPACategoryRulesResponse) => void
  ): Promise<DescribeDSPACategoryRulesResponse> {
    return this.request("DescribeDSPACategoryRules", req, cb)
  }

  /**
   * 风险模板页面--查询风险模板中的脆弱项配置
   */
  async DescribeDSPAAssessmentRiskTemplateVulnerableList(
    req: DescribeDSPAAssessmentRiskTemplateVulnerableListRequest,
    cb?: (error: string, rep: DescribeDSPAAssessmentRiskTemplateVulnerableListResponse) => void
  ): Promise<DescribeDSPAAssessmentRiskTemplateVulnerableListResponse> {
    return this.request("DescribeDSPAAssessmentRiskTemplateVulnerableList", req, cb)
  }

  /**
   * 一个分类合并到另一个分类中（分类拖拽功能）
   */
  async ModifyMergeClassification(
    req?: ModifyMergeClassificationRequest,
    cb?: (error: string, rep: ModifyMergeClassificationResponse) => void
  ): Promise<ModifyMergeClassificationResponse> {
    return this.request("ModifyMergeClassification", req, cb)
  }

  /**
   * 删除DSPA风险评估任务
   */
  async DeleteDSPAAssessmentTask(
    req: DeleteDSPAAssessmentTaskRequest,
    cb?: (error: string, rep: DeleteDSPAAssessmentTaskResponse) => void
  ): Promise<DeleteDSPAAssessmentTaskResponse> {
    return this.request("DeleteDSPAAssessmentTask", req, cb)
  }

  /**
   * 验证分类分级规则
   */
  async VerifyDSPADiscoveryRule(
    req: VerifyDSPADiscoveryRuleRequest,
    cb?: (error: string, rep: VerifyDSPADiscoveryRuleResponse) => void
  ): Promise<VerifyDSPADiscoveryRuleResponse> {
    return this.request("VerifyDSPADiscoveryRule", req, cb)
  }

  /**
   * 获取COS分类分级任务列表
   */
  async DescribeDSPACOSDiscoveryTasks(
    req: DescribeDSPACOSDiscoveryTasksRequest,
    cb?: (error: string, rep: DescribeDSPACOSDiscoveryTasksResponse) => void
  ): Promise<DescribeDSPACOSDiscoveryTasksResponse> {
    return this.request("DescribeDSPACOSDiscoveryTasks", req, cb)
  }

  /**
   * 获取分级详情
   */
  async DescribeDSPALevelDetail(
    req: DescribeDSPALevelDetailRequest,
    cb?: (error: string, rep: DescribeDSPALevelDetailResponse) => void
  ): Promise<DescribeDSPALevelDetailResponse> {
    return this.request("DescribeDSPALevelDetail", req, cb)
  }

  /**
   * 创建或复制分级分类模板
   */
  async CreateOrCopyStandard(
    req?: CreateOrCopyStandardRequest,
    cb?: (error: string, rep: CreateOrCopyStandardResponse) => void
  ): Promise<CreateOrCopyStandardResponse> {
    return this.request("CreateOrCopyStandard", req, cb)
  }

  /**
   * 数据资产报告页面-查询数据资产概览接口（包括数据库资产详情和存储资产详情）
   */
  async DescribeAssetOverview(
    req: DescribeAssetOverviewRequest,
    cb?: (error: string, rep: DescribeAssetOverviewResponse) => void
  ): Promise<DescribeAssetOverviewResponse> {
    return this.request("DescribeAssetOverview", req, cb)
  }

  /**
   * 新建DSPA风险评估任务
   */
  async CreateDSPAAssessmentTask(
    req: CreateDSPAAssessmentTaskRequest,
    cb?: (error: string, rep: CreateDSPAAssessmentTaskResponse) => void
  ): Promise<CreateDSPAAssessmentTaskResponse> {
    return this.request("CreateDSPAAssessmentTask", req, cb)
  }

  /**
   * 验证COS分类分级规则
   */
  async VerifyDSPACOSRule(
    req: VerifyDSPACOSRuleRequest,
    cb?: (error: string, rep: VerifyDSPACOSRuleResponse) => void
  ): Promise<VerifyDSPACOSRuleResponse> {
    return this.request("VerifyDSPACOSRule", req, cb)
  }

  /**
   * 风险评估模板---创建风险评估模板
   */
  async CreateDSPAAssessmentRiskTemplate(
    req: CreateDSPAAssessmentRiskTemplateRequest,
    cb?: (error: string, rep: CreateDSPAAssessmentRiskTemplateResponse) => void
  ): Promise<CreateDSPAAssessmentRiskTemplateResponse> {
    return this.request("CreateDSPAAssessmentRiskTemplate", req, cb)
  }

  /**
   * 风险数量概览统计
   */
  async DescribeDSPAAssessmentRiskOverview(
    req: DescribeDSPAAssessmentRiskOverviewRequest,
    cb?: (error: string, rep: DescribeDSPAAssessmentRiskOverviewResponse) => void
  ): Promise<DescribeDSPAAssessmentRiskOverviewResponse> {
    return this.request("DescribeDSPAAssessmentRiskOverview", req, cb)
  }

  /**
   * 根据合规组id，去查询ES的概览页下的统计列表数据
   */
  async DescribeDSPAESDataAssetDetail(
    req: DescribeDSPAESDataAssetDetailRequest,
    cb?: (error: string, rep: DescribeDSPAESDataAssetDetailResponse) => void
  ): Promise<DescribeDSPAESDataAssetDetailResponse> {
    return this.request("DescribeDSPAESDataAssetDetail", req, cb)
  }

  /**
   * 新增分类分级模板，单个用户最多允许创建100个合规组。
   */
  async CreateDSPAComplianceGroup(
    req: CreateDSPAComplianceGroupRequest,
    cb?: (error: string, rep: CreateDSPAComplianceGroupResponse) => void
  ): Promise<CreateDSPAComplianceGroupResponse> {
    return this.request("CreateDSPAComplianceGroup", req, cb)
  }

  /**
   * 获取数据源的数据库信息
   */
  async DescribeDSPADataSourceDbInfo(
    req: DescribeDSPADataSourceDbInfoRequest,
    cb?: (error: string, rep: DescribeDSPADataSourceDbInfoResponse) => void
  ): Promise<DescribeDSPADataSourceDbInfoResponse> {
    return this.request("DescribeDSPADataSourceDbInfo", req, cb)
  }

  /**
   * 添加用户云上资源列表
   */
  async CreateDSPAMetaResources(
    req: CreateDSPAMetaResourcesRequest,
    cb?: (error: string, rep: CreateDSPAMetaResourcesResponse) => void
  ): Promise<CreateDSPAMetaResourcesResponse> {
    return this.request("CreateDSPAMetaResources", req, cb)
  }

  /**
   * 修改识别规则状态
   */
  async ModifyClassificationRuleState(
    req?: ModifyClassificationRuleStateRequest,
    cb?: (error: string, rep: ModifyClassificationRuleStateResponse) => void
  ): Promise<ModifyClassificationRuleStateResponse> {
    return this.request("ModifyClassificationRuleState", req, cb)
  }

  /**
   * 修改DSPA集群信息
   */
  async ModifyDSPAClusterInfo(
    req: ModifyDSPAClusterInfoRequest,
    cb?: (error: string, rep: ModifyDSPAClusterInfoResponse) => void
  ): Promise<ModifyDSPAClusterInfoResponse> {
    return this.request("ModifyDSPAClusterInfo", req, cb)
  }

  /**
   * 查询高风险资产的top10
   */
  async DescribeDSPAAssessmentHighRiskTop10Overview(
    req: DescribeDSPAAssessmentHighRiskTop10OverviewRequest,
    cb?: (error: string, rep: DescribeDSPAAssessmentHighRiskTop10OverviewResponse) => void
  ): Promise<DescribeDSPAAssessmentHighRiskTop10OverviewResponse> {
    return this.request("DescribeDSPAAssessmentHighRiskTop10Overview", req, cb)
  }

  /**
   * 查询最新风险项详情数据
   */
  async DescribeDSPAAssessmentLatestRiskDetailInfo(
    req: DescribeDSPAAssessmentLatestRiskDetailInfoRequest,
    cb?: (error: string, rep: DescribeDSPAAssessmentLatestRiskDetailInfoResponse) => void
  ): Promise<DescribeDSPAAssessmentLatestRiskDetailInfoResponse> {
    return this.request("DescribeDSPAAssessmentLatestRiskDetailInfo", req, cb)
  }

  /**
     * 查询分类下规则列表

     */
  async DescribeRuleList(
    req?: DescribeRuleListRequest,
    cb?: (error: string, rep: DescribeRuleListResponse) => void
  ): Promise<DescribeRuleListResponse> {
    return this.request("DescribeRuleList", req, cb)
  }

  /**
   * 获取DSPA评估任务列表
   */
  async DescribeDSPAAssessmentTasks(
    req: DescribeDSPAAssessmentTasksRequest,
    cb?: (error: string, rep: DescribeDSPAAssessmentTasksResponse) => void
  ): Promise<DescribeDSPAAssessmentTasksResponse> {
    return this.request("DescribeDSPAAssessmentTasks", req, cb)
  }

  /**
   * 获取分级分级扫描的表集合
   */
  async DescribeDSPADiscoveryTaskTables(
    req: DescribeDSPADiscoveryTaskTablesRequest,
    cb?: (error: string, rep: DescribeDSPADiscoveryTaskTablesResponse) => void
  ): Promise<DescribeDSPADiscoveryTaskTablesResponse> {
    return this.request("DescribeDSPADiscoveryTaskTables", req, cb)
  }

  /**
   * 获取用户购买配额信息
   */
  async GetUserQuotaInfo(
    req: GetUserQuotaInfoRequest,
    cb?: (error: string, rep: GetUserQuotaInfoResponse) => void
  ): Promise<GetUserQuotaInfoResponse> {
    return this.request("GetUserQuotaInfo", req, cb)
  }

  /**
   * 获取模板更新提示信息
   */
  async DescribeDSPAComplianceUpdateNotification(
    req: DescribeDSPAComplianceUpdateNotificationRequest,
    cb?: (error: string, rep: DescribeDSPAComplianceUpdateNotificationResponse) => void
  ): Promise<DescribeDSPAComplianceUpdateNotificationResponse> {
    return this.request("DescribeDSPAComplianceUpdateNotification", req, cb)
  }

  /**
   * 添加用户云上数据库类型资源
   */
  async CreateDSPADbMetaResources(
    req: CreateDSPADbMetaResourcesRequest,
    cb?: (error: string, rep: CreateDSPADbMetaResourcesResponse) => void
  ): Promise<CreateDSPADbMetaResourcesResponse> {
    return this.request("CreateDSPADbMetaResources", req, cb)
  }

  /**
   * 调整COS任务扫描结果
   */
  async ModifyDSPACOSTaskResult(
    req: ModifyDSPACOSTaskResultRequest,
    cb?: (error: string, rep: ModifyDSPACOSTaskResultResponse) => void
  ): Promise<ModifyDSPACOSTaskResultResponse> {
    return this.request("ModifyDSPACOSTaskResult", req, cb)
  }

  /**
   * 绑定或解绑数据库实例DB
   */
  async BindDSPAResourceDatabases(
    req: BindDSPAResourceDatabasesRequest,
    cb?: (error: string, rep: BindDSPAResourceDatabasesResponse) => void
  ): Promise<BindDSPAResourceDatabasesResponse> {
    return this.request("BindDSPAResourceDatabases", req, cb)
  }

  /**
   * 数据资产报告-查询es的敏感资产报告，包含（数据库资产，设敏级别数据库top10，资产详情）
   */
  async DescribeESAssetSensitiveDistribution(
    req: DescribeESAssetSensitiveDistributionRequest,
    cb?: (error: string, rep: DescribeESAssetSensitiveDistributionResponse) => void
  ): Promise<DescribeESAssetSensitiveDistributionResponse> {
    return this.request("DescribeESAssetSensitiveDistribution", req, cb)
  }

  /**
   * 授权用户云资源
   */
  async AuthorizeDSPAMetaResources(
    req: AuthorizeDSPAMetaResourcesRequest,
    cb?: (error: string, rep: AuthorizeDSPAMetaResourcesResponse) => void
  ): Promise<AuthorizeDSPAMetaResourcesResponse> {
    return this.request("AuthorizeDSPAMetaResources", req, cb)
  }

  /**
   * 拉取DSPA支持的Meta元数据类型，返回包括：元数据类型，支持的元数据地域信息
   */
  async DescribeDSPASupportedMetas(
    req: DescribeDSPASupportedMetasRequest,
    cb?: (error: string, rep: DescribeDSPASupportedMetasResponse) => void
  ): Promise<DescribeDSPASupportedMetasResponse> {
    return this.request("DescribeDSPASupportedMetas", req, cb)
  }

  /**
   * 风险项处理趋势统计
   */
  async DescribeDSPAAssessmentRiskDealedTrend(
    req: DescribeDSPAAssessmentRiskDealedTrendRequest,
    cb?: (error: string, rep: DescribeDSPAAssessmentRiskDealedTrendResponse) => void
  ): Promise<DescribeDSPAAssessmentRiskDealedTrendResponse> {
    return this.request("DescribeDSPAAssessmentRiskDealedTrend", req, cb)
  }

  /**
   * 数据资产报告-查询rdb的敏感数据分布-敏感规则字段分布-敏感分布详情
   */
  async DescribeSensitiveRDBDataDistribution(
    req: DescribeSensitiveRDBDataDistributionRequest,
    cb?: (error: string, rep: DescribeSensitiveRDBDataDistributionResponse) => void
  ): Promise<DescribeSensitiveRDBDataDistributionResponse> {
    return this.request("DescribeSensitiveRDBDataDistribution", req, cb)
  }

  /**
   * 重新启动DSPA风险评估任务
   */
  async RestartDSPAAssessmentTask(
    req: RestartDSPAAssessmentTaskRequest,
    cb?: (error: string, rep: RestartDSPAAssessmentTaskResponse) => void
  ): Promise<RestartDSPAAssessmentTaskResponse> {
    return this.request("RestartDSPAAssessmentTask", req, cb)
  }

  /**
     * 获取ES的分类分级任务结果详情，该接口只有在任务状态为时才支持结果正确查询：
3 扫描成功
     */
  async DescribeDSPAESDiscoveryTaskResultDetail(
    req: DescribeDSPAESDiscoveryTaskResultDetailRequest,
    cb?: (error: string, rep: DescribeDSPAESDiscoveryTaskResultDetailResponse) => void
  ): Promise<DescribeDSPAESDiscoveryTaskResultDetailResponse> {
    return this.request("DescribeDSPAESDiscoveryTaskResultDetail", req, cb)
  }

  /**
     * 删除分类分级识别任务，该接口只有在任务状态为以下几个状态值时才支持正确删除：
0 待扫描，
2 扫描终止， 
3 扫描成功，
4 扫描失败
     */
  async DeleteDSPADiscoveryTask(
    req: DeleteDSPADiscoveryTaskRequest,
    cb?: (error: string, rep: DeleteDSPADiscoveryTaskResponse) => void
  ): Promise<DeleteDSPADiscoveryTaskResponse> {
    return this.request("DeleteDSPADiscoveryTask", req, cb)
  }

  /**
     * 更新自建资源基础信息，包括：端口、账户名、密码。
请注意：
如果资源自身的VPC、VIP信息发生变化，后台会自动更新。
如果监听的端口发生变化，请显式输入端口。
如果账户名密码任意一个发生变化，请务必同时显式输入账户名密码。
     */
  async UpdateDSPASelfBuildResource(
    req: UpdateDSPASelfBuildResourceRequest,
    cb?: (error: string, rep: UpdateDSPASelfBuildResourceResponse) => void
  ): Promise<UpdateDSPASelfBuildResourceResponse> {
    return this.request("UpdateDSPASelfBuildResource", req, cb)
  }

  /**
     * 获取分类分级任务结果，该接口只有在任务状态为以下状态时才支持结果正常查询：
3 扫描成功，
4 扫描失败
     */
  async DescribeDSPADiscoveryTaskResult(
    req: DescribeDSPADiscoveryTaskResultRequest,
    cb?: (error: string, rep: DescribeDSPADiscoveryTaskResultResponse) => void
  ): Promise<DescribeDSPADiscoveryTaskResultResponse> {
    return this.request("DescribeDSPADiscoveryTaskResult", req, cb)
  }

  /**
   * 风险项页面----修改风险等级的详情数据
   */
  async ModifyDSPAAssessmentRiskLevel(
    req: ModifyDSPAAssessmentRiskLevelRequest,
    cb?: (error: string, rep: ModifyDSPAAssessmentRiskLevelResponse) => void
  ): Promise<ModifyDSPAAssessmentRiskLevelResponse> {
    return this.request("ModifyDSPAAssessmentRiskLevel", req, cb)
  }

  /**
   * 新增分类分级规则，单个用户最多允许创建200个规则。
   */
  async CreateDSPADiscoveryRule(
    req: CreateDSPADiscoveryRuleRequest,
    cb?: (error: string, rep: CreateDSPADiscoveryRuleResponse) => void
  ): Promise<CreateDSPADiscoveryRuleResponse> {
    return this.request("CreateDSPADiscoveryRule", req, cb)
  }

  /**
   * 修改分类信息
   */
  async ModifyNewClassification(
    req?: ModifyNewClassificationRequest,
    cb?: (error: string, rep: ModifyNewClassificationResponse) => void
  ): Promise<ModifyNewClassificationResponse> {
    return this.request("ModifyNewClassification", req, cb)
  }

  /**
   * 数据资产报告-查询cos的资产分布详情接口
   */
  async DescribeCOSAssetSensitiveDistribution(
    req: DescribeCOSAssetSensitiveDistributionRequest,
    cb?: (error: string, rep: DescribeCOSAssetSensitiveDistributionResponse) => void
  ): Promise<DescribeCOSAssetSensitiveDistributionResponse> {
    return this.request("DescribeCOSAssetSensitiveDistribution", req, cb)
  }

  /**
   * 查询标准下所有叶子节点分类
   */
  async DescribeLeafClassification(
    req?: DescribeLeafClassificationRequest,
    cb?: (error: string, rep: DescribeLeafClassificationResponse) => void
  ): Promise<DescribeLeafClassificationResponse> {
    return this.request("DescribeLeafClassification", req, cb)
  }

  /**
   * 新增分类分级任务，单个用户最多允许创建100个任务。
   */
  async CreateDSPADiscoveryTask(
    req: CreateDSPADiscoveryTaskRequest,
    cb?: (error: string, rep: CreateDSPADiscoveryTaskResponse) => void
  ): Promise<CreateDSPADiscoveryTaskResponse> {
    return this.request("CreateDSPADiscoveryTask", req, cb)
  }

  /**
   * 风险概览-查询新发现风险统计数
   */
  async DescribeDSPAAssessmentNewDiscoveredRiskOverview(
    req: DescribeDSPAAssessmentNewDiscoveredRiskOverviewRequest,
    cb?: (error: string, rep: DescribeDSPAAssessmentNewDiscoveredRiskOverviewResponse) => void
  ): Promise<DescribeDSPAAssessmentNewDiscoveredRiskOverviewResponse> {
    return this.request("DescribeDSPAAssessmentNewDiscoveredRiskOverview", req, cb)
  }

  /**
   * 查询风险的处理历史
   */
  async DescribeDSPAAssessmentRiskProcessHistory(
    req: DescribeDSPAAssessmentRiskProcessHistoryRequest,
    cb?: (error: string, rep: DescribeDSPAAssessmentRiskProcessHistoryResponse) => void
  ): Promise<DescribeDSPAAssessmentRiskProcessHistoryResponse> {
    return this.request("DescribeDSPAAssessmentRiskProcessHistory", req, cb)
  }

  /**
   * 查询DSPA实例的db列表
   */
  async QueryDSPAMetaResourceDbList(
    req: QueryDSPAMetaResourceDbListRequest,
    cb?: (error: string, rep: QueryDSPAMetaResourceDbListResponse) => void
  ): Promise<QueryDSPAMetaResourceDbListResponse> {
    return this.request("QueryDSPAMetaResourceDbList", req, cb)
  }

  /**
   * 获取体验版本信息
   */
  async GetTrialVersion(
    req: GetTrialVersionRequest,
    cb?: (error: string, rep: GetTrialVersionResponse) => void
  ): Promise<GetTrialVersionResponse> {
    return this.request("GetTrialVersion", req, cb)
  }

  /**
   * 查询风险分布数据，包含风险类型分布，风险详情分布，风险资产的分布
   */
  async DescribeDSPAAssessmentRiskDistributionOverview(
    req: DescribeDSPAAssessmentRiskDistributionOverviewRequest,
    cb?: (error: string, rep: DescribeDSPAAssessmentRiskDistributionOverviewResponse) => void
  ): Promise<DescribeDSPAAssessmentRiskDistributionOverviewResponse> {
    return this.request("DescribeDSPAAssessmentRiskDistributionOverview", req, cb)
  }

  /**
   * 查询标准下所有分类的识别规则数量(不算子分类下的识别规则)
   */
  async DescribeClassificationRuleCount(
    req?: DescribeClassificationRuleCountRequest,
    cb?: (error: string, rep: DescribeClassificationRuleCountResponse) => void
  ): Promise<DescribeClassificationRuleCountResponse> {
    return this.request("DescribeClassificationRuleCount", req, cb)
  }

  /**
   * 获取分类规则树信息
   */
  async DescribeDSPACategoryTreeWithRules(
    req: DescribeDSPACategoryTreeWithRulesRequest,
    cb?: (error: string, rep: DescribeDSPACategoryTreeWithRulesResponse) => void
  ): Promise<DescribeDSPACategoryTreeWithRulesResponse> {
    return this.request("DescribeDSPACategoryTreeWithRules", req, cb)
  }

  /**
   * 获取授权资源的连接状态
   */
  async GetResourceConnectionStatus(
    req: GetResourceConnectionStatusRequest,
    cb?: (error: string, rep: GetResourceConnectionStatusResponse) => void
  ): Promise<GetResourceConnectionStatusResponse> {
    return this.request("GetResourceConnectionStatus", req, cb)
  }

  /**
   * 获取ES扫描结果数据样本
   */
  async DescribeDSPAESDataSample(
    req: DescribeDSPAESDataSampleRequest,
    cb?: (error: string, rep: DescribeDSPAESDataSampleResponse) => void
  ): Promise<DescribeDSPAESDataSampleResponse> {
    return this.request("DescribeDSPAESDataSample", req, cb)
  }

  /**
   * 获取DSPA评估模版关联的评估控制项列表
   */
  async DescribeDSPAAssessmentTemplateControlItems(
    req: DescribeDSPAAssessmentTemplateControlItemsRequest,
    cb?: (error: string, rep: DescribeDSPAAssessmentTemplateControlItemsResponse) => void
  ): Promise<DescribeDSPAAssessmentTemplateControlItemsResponse> {
    return this.request("DescribeDSPAAssessmentTemplateControlItems", req, cb)
  }

  /**
   * 开启级别或关闭级别
   */
  async ModifyLevelState(
    req?: ModifyLevelStateRequest,
    cb?: (error: string, rep: ModifyLevelStateResponse) => void
  ): Promise<ModifyLevelStateResponse> {
    return this.request("ModifyLevelState", req, cb)
  }

  /**
   * 获取分级列表，限制100个 不分页返回
   */
  async DescribeDSPALevelGroups(
    req: DescribeDSPALevelGroupsRequest,
    cb?: (error: string, rep: DescribeDSPALevelGroupsResponse) => void
  ): Promise<DescribeDSPALevelGroupsResponse> {
    return this.request("DescribeDSPALevelGroups", req, cb)
  }

  /**
   * 拉取DSPA集群列表
   */
  async ListDSPAClusters(
    req: ListDSPAClustersRequest,
    cb?: (error: string, rep: ListDSPAClustersResponse) => void
  ): Promise<ListDSPAClustersResponse> {
    return this.request("ListDSPAClusters", req, cb)
  }

  /**
   * 创建敏感数据导出任务
   */
  async ExportAssetDetailData(
    req: ExportAssetDetailDataRequest,
    cb?: (error: string, rep: ExportAssetDetailDataResponse) => void
  ): Promise<ExportAssetDetailDataResponse> {
    return this.request("ExportAssetDetailData", req, cb)
  }

  /**
   * 获取分类树信息
   */
  async DescribeDSPACategoryTree(
    req: DescribeDSPACategoryTreeRequest,
    cb?: (error: string, rep: DescribeDSPACategoryTreeResponse) => void
  ): Promise<DescribeDSPACategoryTreeResponse> {
    return this.request("DescribeDSPACategoryTree", req, cb)
  }

  /**
   * 新建用户自建云资源
   */
  async CreateDSPASelfBuildMetaResource(
    req: CreateDSPASelfBuildMetaResourceRequest,
    cb?: (error: string, rep: CreateDSPASelfBuildMetaResourceResponse) => void
  ): Promise<CreateDSPASelfBuildMetaResourceResponse> {
    return this.request("CreateDSPASelfBuildMetaResource", req, cb)
  }

  /**
     * 停止分类分级任务，该接口只有在任务状态为以下状态时才支持正确执行停止扫描：
1 扫描中
     */
  async StopDSPADiscoveryTask(
    req: StopDSPADiscoveryTaskRequest,
    cb?: (error: string, rep: StopDSPADiscoveryTaskResponse) => void
  ): Promise<StopDSPADiscoveryTaskResponse> {
    return this.request("StopDSPADiscoveryTask", req, cb)
  }

  /**
   * 添加COS元数据
   */
  async CreateDSPACosMetaResources(
    req: CreateDSPACosMetaResourcesRequest,
    cb?: (error: string, rep: CreateDSPACosMetaResourcesResponse) => void
  ): Promise<CreateDSPACosMetaResourcesResponse> {
    return this.request("CreateDSPACosMetaResources", req, cb)
  }

  /**
   * 修改分类，内置分类不支持修改。
   */
  async ModifyDSPACategory(
    req: ModifyDSPACategoryRequest,
    cb?: (error: string, rep: ModifyDSPACategoryResponse) => void
  ): Promise<ModifyDSPACategoryResponse> {
    return this.request("ModifyDSPACategory", req, cb)
  }

  /**
     * 修改分类分级规则，单个用户最多允许创建200个规则。
注：此API同时适用RDB跟COS类型数据。
     */
  async ModifyDSPADiscoveryRule(
    req: ModifyDSPADiscoveryRuleRequest,
    cb?: (error: string, rep: ModifyDSPADiscoveryRuleResponse) => void
  ): Promise<ModifyDSPADiscoveryRuleResponse> {
    return this.request("ModifyDSPADiscoveryRule", req, cb)
  }

  /**
   * 删除分类分级识别任务结果
   */
  async DeleteDSPADiscoveryTaskResult(
    req: DeleteDSPADiscoveryTaskResultRequest,
    cb?: (error: string, rep: DeleteDSPADiscoveryTaskResultResponse) => void
  ): Promise<DeleteDSPADiscoveryTaskResultResponse> {
    return this.request("DeleteDSPADiscoveryTaskResult", req, cb)
  }

  /**
   * 风险评估概览页，查询风险面的分布
   */
  async DescribeDSPAAssessmentRiskSideList(
    req: DescribeDSPAAssessmentRiskSideListRequest,
    cb?: (error: string, rep: DescribeDSPAAssessmentRiskSideListResponse) => void
  ): Promise<DescribeDSPAAssessmentRiskSideListResponse> {
    return this.request("DescribeDSPAAssessmentRiskSideList", req, cb)
  }

  /**
   * 获取COS敏感数据资产桶列表
   */
  async DescribeDSPACOSDataAssetBuckets(
    req: DescribeDSPACOSDataAssetBucketsRequest,
    cb?: (error: string, rep: DescribeDSPACOSDataAssetBucketsResponse) => void
  ): Promise<DescribeDSPACOSDataAssetBucketsResponse> {
    return this.request("DescribeDSPACOSDataAssetBuckets", req, cb)
  }

  /**
   * 风险概览-查询处理中风险统计数
   */
  async DescribeDSPAAssessmentProcessingRiskOverview(
    req: DescribeDSPAAssessmentProcessingRiskOverviewRequest,
    cb?: (error: string, rep: DescribeDSPAAssessmentProcessingRiskOverviewResponse) => void
  ): Promise<DescribeDSPAAssessmentProcessingRiskOverviewResponse> {
    return this.request("DescribeDSPAAssessmentProcessingRiskOverview", req, cb)
  }

  /**
   * 创建资产梳理报告任务
   */
  async CreateAssetSortingReportTask(
    req: CreateAssetSortingReportTaskRequest,
    cb?: (error: string, rep: CreateAssetSortingReportTaskResponse) => void
  ): Promise<CreateAssetSortingReportTaskResponse> {
    return this.request("CreateAssetSortingReportTask", req, cb)
  }
}
