import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeRuleListResponse, DescribeDSPADiscoveryTaskTablesResponse, DescribeCOSAssetSensitiveDistributionResponse, ModifyDSPAAssessmentRiskTemplateRequest, DescribeESAssetSensitiveDistributionResponse, DescribeDSPARDBDataAssetDetailResponse, CreateDSPACategoryRequest, ModifyDSPATaskResultResponse, DescribeDSPAAssessmentRiskLevelDetailResponse, DescribeDSPADiscoveryServiceStatusRequest, DescribeExportTaskResultResponse, CreateDSPADiscoveryTaskResponse, DescribeDSPACategoryTreeRequest, DeleteCosMetaResourceRequest, DescribeDSPAAssessmentLatestRiskDetailInfoRequest, DescribeReportTaskDownloadUrlRequest, ModifyClassificationRuleRequest, DescribeDSPADiscoveryServiceStatusResponse, DescribeRuleDetailResponse, ModifyDSPATaskResultRequest, DescribeAssetOverviewResponse, DescribeDSPAESDataAssetByComplianceIdRequest, ModifyLevelNameRequest, ModifyDSPAAssessmentRiskLevelResponse, DescribeMongoAssetSensitiveDistributionResponse, ModifyDSPACOSDiscoveryTaskResponse, BindDSPAResourceDatabasesResponse, DecribeSuggestRiskLevelMatrixResponse, UpdateDSPASelfBuildResourceResponse, DescribeDSPAAssessmentRiskDealedTrendResponse, DescribeRDBAssetSensitiveDistributionRequest, GetResourceConnectionStatusRequest, DisableDSPAMetaResourceAuthRequest, CreateAssetSortingReportTaskRequest, CreateDSPAComplianceGroupResponse, DeleteDSPADiscoveryTaskRequest, DescribeDSPAAssessmentRiskDatasourceTop5Response, ModifyDSPADiscoveryTaskResponse, DescribeDSPAAssessmentRiskItemTop5Request, ModifyDSPAESTaskResultRequest, DescribeDSPACOSDataAssetByComplianceIdRequest, CreateDSPAMetaResourcesResponse, DescribeDSPADiscoveryRulesRequest, DeleteDSPACOSDiscoveryTaskRequest, CreateDSPAAssessmentTaskResponse, DescribeClassificationRuleCountResponse, DescribeDSPAESDataAssetByComplianceIdResponse, ModifyDSPAAssessmentRiskRequest, DeleteDSPAMetaResourceResponse, DescribeAssetDetailDataExportResultResponse, DeleteDSPADiscoveryTaskResultResponse, DescribeRuleDetailRequest, ModifyDSPADiscoveryTaskRequest, DeleteDSPAAssessmentTaskResponse, CreateDSPASelfBuildMetaResourceRequest, ModifyDSPACategoryRelationRequest, DescribeDSPAAssessmentRiskOverviewResponse, DescribeLeafClassificationRequest, CreateClassificationRuleRequest, DescribeDSPAAssessmentTemplatesRequest, ModifyDSPAClusterInfoResponse, ModifyStandardInfoResponse, DescribeDSPAAssessmentRiskTemplateDetailRequest, DescribeDSPADiscoveryTaskResultDetailResponse, ModifyDSPACategoryRelationResponse, DescribeDSPAAssessmentRiskDistributionOverviewResponse, CreateDSPACOSDiscoveryTaskRequest, DescribeDSPAAssessmentNewDiscoveredRiskOverviewRequest, DescribeDSPACOSDataAssetBucketsRequest, RestartDSPAAssessmentTaskRequest, VerifyDSPACOSRuleRequest, DescribeReportTasksRequest, CreateDSPADiscoveryRuleRequest, AuthorizeDSPAMetaResourcesResponse, ModifyDSPACategoryRequest, DescribeDSPAAssessmentRiskLevelListResponse, CreateDSPADiscoveryTaskRequest, DescribeESAssetSensitiveDistributionRequest, DeleteCosMetaResourceResponse, ListDSPAMetaResourcesRequest, ModifyDSPAAssessmentRiskTemplateResponse, DescribeDSPAESDiscoveryTaskResultDetailRequest, DeleteDSPADiscoveryTaskResultRequest, ModifyLevelInfoResponse, DescribeDSPACOSDataAssetByComplianceIdResponse, CreateDSPAAssessmentRiskTemplateResponse, DescribeDSPACOSDataAssetBucketsResponse, DescribeDSPADiscoveryTaskDetailRequest, DescribeDSPARDBDataAssetByComplianceIdResponse, CreateNewClassificationResponse, ListDSPAClustersResponse, CopyDSPATemplateRequest, VerifyDSPADiscoveryRuleRequest, DescribeDSPAAssessmentRiskOverviewRequest, DeleteDSPACOSDiscoveryTaskResultResponse, DescribeDSPAAssessmentRiskAmountOverviewResponse, CreateAssetSortingReportRetryTaskResponse, DescribeDSPACategoriesResponse, DescribeDSPADiscoveryRulesResponse, ModifyLevelStateResponse, StopDSPADiscoveryTaskRequest, DecribeSuggestRiskLevelMatrixRequest, DescribeDSPAAssessmentRiskProcessHistoryResponse, DescribeDSPAESDataAssetDetailResponse, DescribeDSPAAssessmentTasksResponse, DescribeDSPACOSDiscoveryTaskFilesRequest, CreateDSPALevelGroupResponse, DescribeDSPAAssessmentRiskDistributionOverviewRequest, DeleteDSPAMetaResourceRequest, ModifyDSPADiscoveryRuleRequest, DescribeRDBAssetSensitiveDistributionResponse, ModifyDSPACategoryResponse, CreateDSPAComplianceRulesRequest, DescribeReportTaskDownloadUrlResponse, DescribeDSPAAssessmentRisksResponse, CreateClassificationRuleResponse, ModifyClassificationRuleResponse, CreateIdentifyRuleAnotherNameResponse, DescribeDSPACategoryTreeResponse, DescribeBindDBListRequest, CreateDSPADbMetaResourcesRequest, ModifyDSPACOSDiscoveryTaskRequest, DescribeDSPACategoryRulesRequest, DescribeDSPAComplianceGroupDetailRequest, CreateDSPADbMetaResourcesResponse, ModifyDSPAClusterInfoRequest, ListDSPACosMetaResourcesRequest, DescribeDSPATaskResultDataSampleResponse, CreateDSPALevelGroupRequest, DescribeDSPAComplianceGroupsResponse, CopyDSPATemplateResponse, DeleteDSPACOSDiscoveryTaskResponse, DescribeDSPAAssessmentRiskDealedOverviewRequest, DescribeDSPACategoryTreeWithRulesResponse, DescribeDSPAAssessmentRiskLevelDetailRequest, DescribeLeafClassificationResponse, DescribeDSPAAssessmentRiskLevelTrendRequest, DescribeDSPAAssessmentProcessingRiskOverviewRequest, DescribeDSPAAssessmentRiskSideListResponse, CreateAssetSortingReportRetryTaskRequest, CreateDSPADiscoveryRuleResponse, DescribeAssetOverviewRequest, RestartDSPAAssessmentTaskResponse, DescribeDSPAAssessmentHighRiskTop10OverviewResponse, ModifyLevelNameResponse, EnableTrialVersionResponse, ModifyStandardInfoRequest, DescribeDSPAComplianceGroupDetailResponse, DescribeDSPAAssessmentRiskTemplateVulnerableListRequest, CreateDSPACategoryRelationResponse, DescribeDSPAAssessmentTemplatesResponse, DescribeDSPACOSTaskResultDetailResponse, DescribeRuleListRequest, DescribeDSPADataSourceDbInfoRequest, CreateOrCopyStandardRequest, QueryResourceDbBindStatusResponse, CreateDSPACosMetaResourcesResponse, CreateDSPAComplianceRulesResponse, DescribeAssetDetailDataExportResultRequest, DescribeDSPAAssessmentRiskDatasourceTop5Request, DeleteDSPACOSDiscoveryTaskResultRequest, DescribeDSPAESDiscoveryTaskResultDetailResponse, DescribeDSPAComplianceUpdateNotificationRequest, AuthorizeDSPAMetaResourcesRequest, ModifyDSPAComplianceGroupResponse, DescribeClassificationInfoRequest, DescribeDSPAESDataSampleRequest, GetUserQuotaInfoResponse, DescribeSensitiveCOSDataDistributionResponse, DescribeCOSAssetSensitiveDistributionRequest, CreateDSPAAssessmentRiskTemplateRequest, DescribeDSPACOSDiscoveryTaskFilesResponse, BindDSPAResourceCosBucketsRequest, ModifyDSPAESTaskResultResponse, CreateDSPACosMetaResourcesRequest, DescribeDSPAAssessmentRiskSideListRequest, ModifyNewClassificationRequest, CreateIdentifyRuleAnotherNameRequest, DescribeDSPACategoryRuleStatisticResponse, ModifyDSPADiscoveryRuleResponse, QueryResourceDbBindStatusRequest, DescribeDSPAAssessmentLatestRiskListRequest, DescribeDSPADiscoveryTaskResultResponse, ModifyNewClassificationResponse, BindDSPAResourceDatabasesRequest, DescribeMongoAssetSensitiveDistributionRequest, GetUserQuotaInfoRequest, ModifyLevelStateRequest, ModifyDSPACOSTaskResultResponse, DescribeDSPACOSDiscoveryTaskResultRequest, DescribeDSPAAssessmentLatestRiskDetailInfoResponse, DescribeDSPACOSDiscoveryTaskDetailResponse, StartDSPADiscoveryTaskResponse, CreateOrCopyStandardResponse, DescribeDSPALevelGroupsResponse, DescribeDSPAAssessmentProcessingRiskOverviewResponse, DescribeDSPAAssessmentRiskProcessHistoryRequest, DescribeDSPASupportedMetasResponse, ExportAssetDetailDataRequest, DeleteDSPADiscoveryTaskResponse, CreateDSPASelfBuildMetaResourceResponse, DescribeDSPAAssessmentHighRiskTop10OverviewRequest, DescribeDSPAAssessmentTemplateControlItemsResponse, DescribeSensitiveRDBDataDistributionRequest, ModifyDSPAAssessmentRiskLevelRequest, DescribeDSPAAssessmentPendingRiskOverviewRequest, DescribeDSPAAssessmentRiskLevelTrendResponse, DescribeDSPAAssessmentRiskDealedTrendRequest, ModifyLevelInfoRequest, DescribeDSPARDBDataAssetDetailRequest, DescribeDSPACOSDataAssetDetailResponse, DescribeDSPACategoriesRequest, UpdateDSPASelfBuildResourceRequest, DescribeDSPAAssessmentTasksRequest, DescribeDSPALevelDetailRequest, ListDSPAClustersRequest, ModifyDSPAAssessmentRiskLatestRequest, StopDSPADiscoveryTaskResponse, VerifyDSPADiscoveryRuleResponse, DescribeDSPAAssessmentTemplateControlItemsRequest, DescribeDSPAAssessmentRiskItemTop5Response, BindDSPAResourceCosBucketsResponse, DescribeDSPAESDataSampleResponse, CreateDSPAComplianceGroupRequest, VerifyDSPACOSRuleResponse, QueryDSPAMetaResourceDbListResponse, DescribeDSPALevelGroupsRequest, CreateDSPACOSDiscoveryTaskResponse, DescribeDSPADiscoveryTaskResultDetailRequest, DescribeClassificationInfoResponse, DescribeDSPATaskResultDataSampleRequest, DescribeDSPAAssessmentRiskDealedOverviewResponse, ModifyDSPAAssessmentRiskLatestResponse, DescribeDSPACOSDiscoveryTaskDetailRequest, EnableTrialVersionRequest, DescribeDSPADiscoveryTaskTablesRequest, DescribeDSPAAssessmentRiskSideDistributedRequest, DescribeDSPAAssessmentNewDiscoveredRiskOverviewResponse, DescribeDSPAAssessmentRiskAmountOverviewRequest, DescribeDSPADiscoveryTaskDetailResponse, DescribeDSPACOSDiscoveryTasksResponse, EnableDSPADiscoveryRuleRequest, DescribeDSPACOSDataAssetDetailRequest, DescribeDSPAAssessmentRiskTemplateDetailResponse, ModifyDSPACOSTaskResultRequest, DescribeDSPASupportedMetasRequest, ExportAssetDetailDataResponse, CreateDSPAMetaResourcesRequest, CreateDSPAAssessmentTaskRequest, CreateDSPAAssessmentRiskLevelResponse, DescribeDSPADiscoveryTaskResultRequest, DescribeDSPACategoryTreeWithRulesRequest, DescribeClassificationRuleCountRequest, CreateNewClassificationRequest, DescribeDSPAAssessmentRiskLevelListRequest, GetTrialVersionResponse, DescribeDSPAComplianceUpdateNotificationResponse, DescribeDSPAComplianceGroupsRequest, ListDSPACosMetaResourcesResponse, DescribeDSPADataSourceDbInfoResponse, CreateDSPACategoryRelationRequest, ModifyMergeClassificationResponse, CreateAssetSortingReportTaskResponse, GetResourceConnectionStatusResponse, DescribeDSPACategoryRuleStatisticRequest, DescribeDSPARDBDataAssetByComplianceIdRequest, CreateDSPAAssessmentRiskLevelRequest, StartDSPADiscoveryTaskRequest, DeleteDSPAAssessmentTaskRequest, DescribeSensitiveCOSDataDistributionRequest, DescribeDSPAAssessmentRiskTemplateVulnerableListResponse, DescribeDSPACOSDiscoveryTaskResultResponse, ModifyDSPAComplianceGroupRequest, DescribeDSPAAssessmentRisksRequest, DescribeDSPAAssessmentLatestRiskListResponse, EnableDSPADiscoveryRuleResponse, DescribeSensitiveRDBDataDistributionResponse, ModifyClassificationRuleStateResponse, DescribeDSPAESDataAssetDetailRequest, ListDSPAMetaResourcesResponse, CreateDSPACategoryResponse, DescribeDSPACategoryRulesResponse, DescribeExportTaskResultRequest, QueryDSPAMetaResourceDbListRequest, DescribeBindDBListResponse, DisableDSPAMetaResourceAuthResponse, DescribeReportTasksResponse, GetTrialVersionRequest, DescribeDSPACOSTaskResultDetailRequest, DescribeDSPALevelDetailResponse, DescribeDSPAAssessmentRiskSideDistributedResponse, DescribeDSPACOSDiscoveryTasksRequest, ModifyMergeClassificationRequest, DescribeDSPAAssessmentPendingRiskOverviewResponse, ModifyDSPAAssessmentRiskResponse, ModifyClassificationRuleStateRequest } from "./dsgc_models";
/**
 * dsgc client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 新增分级，单个Casb实例最多允许创建100个数据分级
     */
    CreateDSPALevelGroup(req: CreateDSPALevelGroupRequest, cb?: (error: string, rep: CreateDSPALevelGroupResponse) => void): Promise<CreateDSPALevelGroupResponse>;
    /**
     * 遗留待处理&昨日完成风险处置概览统计
     */
    DescribeDSPAAssessmentRiskDealedOverview(req: DescribeDSPAAssessmentRiskDealedOverviewRequest, cb?: (error: string, rep: DescribeDSPAAssessmentRiskDealedOverviewResponse) => void): Promise<DescribeDSPAAssessmentRiskDealedOverviewResponse>;
    /**
     * 复制合规组模板
     */
    CopyDSPATemplate(req: CopyDSPATemplateRequest, cb?: (error: string, rep: CopyDSPATemplateResponse) => void): Promise<CopyDSPATemplateResponse>;
    /**
     * 风险项页面----查询风险等级的详情数据
     */
    DescribeDSPAAssessmentRiskLevelDetail(req: DescribeDSPAAssessmentRiskLevelDetailRequest, cb?: (error: string, rep: DescribeDSPAAssessmentRiskLevelDetailResponse) => void): Promise<DescribeDSPAAssessmentRiskLevelDetailResponse>;
    /**
     * 风险项页面--查看评估模板详情
     */
    DescribeDSPAAssessmentRiskTemplateDetail(req: DescribeDSPAAssessmentRiskTemplateDetailRequest, cb?: (error: string, rep: DescribeDSPAAssessmentRiskTemplateDetailResponse) => void): Promise<DescribeDSPAAssessmentRiskTemplateDetailResponse>;
    /**
     * 修改DSPA评估风险项，支持修改Status
     */
    ModifyDSPAAssessmentRisk(req: ModifyDSPAAssessmentRiskRequest, cb?: (error: string, rep: ModifyDSPAAssessmentRiskResponse) => void): Promise<ModifyDSPAAssessmentRiskResponse>;
    /**
     * 修改分类分级关系
     */
    ModifyDSPACategoryRelation(req: ModifyDSPACategoryRelationRequest, cb?: (error: string, rep: ModifyDSPACategoryRelationResponse) => void): Promise<ModifyDSPACategoryRelationResponse>;
    /**
     * 取消用户云资源授权
     */
    DisableDSPAMetaResourceAuth(req: DisableDSPAMetaResourceAuthRequest, cb?: (error: string, rep: DisableDSPAMetaResourceAuthResponse) => void): Promise<DisableDSPAMetaResourceAuthResponse>;
    /**
     * 立即启动分类分级任务，该接口只有在任务状态为以下状态时才支持正确执行立即扫描：
0 待扫描，
2 扫描终止，
3 扫描成功，
4 扫描失败
     */
    StartDSPADiscoveryTask(req: StartDSPADiscoveryTaskRequest, cb?: (error: string, rep: StartDSPADiscoveryTaskResponse) => void): Promise<StartDSPADiscoveryTaskResponse>;
    /**
     * 查询最新的风险详情列表数据
     */
    DescribeDSPAAssessmentLatestRiskList(req: DescribeDSPAAssessmentLatestRiskListRequest, cb?: (error: string, rep: DescribeDSPAAssessmentLatestRiskListResponse) => void): Promise<DescribeDSPAAssessmentLatestRiskListResponse>;
    /**
     * 获取分类分级规则列表
     */
    DescribeDSPADiscoveryRules(req: DescribeDSPADiscoveryRulesRequest, cb?: (error: string, rep: DescribeDSPADiscoveryRulesResponse) => void): Promise<DescribeDSPADiscoveryRulesResponse>;
    /**
     * 创建合规组分类规则关联关系
     */
    CreateDSPAComplianceRules(req: CreateDSPAComplianceRulesRequest, cb?: (error: string, rep: CreateDSPAComplianceRulesResponse) => void): Promise<CreateDSPAComplianceRulesResponse>;
    /**
     * 创建资产梳理报表导出重试任务
     */
    CreateAssetSortingReportRetryTask(req: CreateAssetSortingReportRetryTaskRequest, cb?: (error: string, rep: CreateAssetSortingReportRetryTaskResponse) => void): Promise<CreateAssetSortingReportRetryTaskResponse>;
    /**
     * 获取COS单个模板下的敏感数据资产
     */
    DescribeDSPACOSDataAssetByComplianceId(req: DescribeDSPACOSDataAssetByComplianceIdRequest, cb?: (error: string, rep: DescribeDSPACOSDataAssetByComplianceIdResponse) => void): Promise<DescribeDSPACOSDataAssetByComplianceIdResponse>;
    /**
     * 风险项页面----查询风险等级的列表
     */
    DescribeDSPAAssessmentRiskLevelList(req: DescribeDSPAAssessmentRiskLevelListRequest, cb?: (error: string, rep: DescribeDSPAAssessmentRiskLevelListResponse) => void): Promise<DescribeDSPAAssessmentRiskLevelListResponse>;
    /**
     * 编辑识别规则
     */
    ModifyClassificationRule(req?: ModifyClassificationRuleRequest, cb?: (error: string, rep: ModifyClassificationRuleResponse) => void): Promise<ModifyClassificationRuleResponse>;
    /**
     * 获取分类规则统计信息
     */
    DescribeDSPACategoryRuleStatistic(req: DescribeDSPACategoryRuleStatisticRequest, cb?: (error: string, rep: DescribeDSPACategoryRuleStatisticResponse) => void): Promise<DescribeDSPACategoryRuleStatisticResponse>;
    /**
     * 查询分类规则详情

     */
    DescribeRuleDetail(req?: DescribeRuleDetailRequest, cb?: (error: string, rep: DescribeRuleDetailResponse) => void): Promise<DescribeRuleDetailResponse>;
    /**
     * 删除COS分类分级任务结果
     */
    DeleteDSPACOSDiscoveryTaskResult(req: DeleteDSPACOSDiscoveryTaskResultRequest, cb?: (error: string, rep: DeleteDSPACOSDiscoveryTaskResultResponse) => void): Promise<DeleteDSPACOSDiscoveryTaskResultResponse>;
    /**
     * 获取COS分类分级数据资产详情
     */
    DescribeDSPACOSDataAssetDetail(req: DescribeDSPACOSDataAssetDetailRequest, cb?: (error: string, rep: DescribeDSPACOSDataAssetDetailResponse) => void): Promise<DescribeDSPACOSDataAssetDetailResponse>;
    /**
     * 数据资产报告-查询rbd 的敏感资产报告，包含（数据库资产，设敏级别数据库top10，资产详情）
     */
    DescribeRDBAssetSensitiveDistribution(req: DescribeRDBAssetSensitiveDistributionRequest, cb?: (error: string, rep: DescribeRDBAssetSensitiveDistributionResponse) => void): Promise<DescribeRDBAssetSensitiveDistributionResponse>;
    /**
     * 修改COS分类分级任务，该接口只有在任务状态为以下状态时才支持正确修改：
0 待扫描，
2 扫描终止，
3 扫描成功，
4 扫描失败
     */
    ModifyDSPACOSDiscoveryTask(req: ModifyDSPACOSDiscoveryTaskRequest, cb?: (error: string, rep: ModifyDSPACOSDiscoveryTaskResponse) => void): Promise<ModifyDSPACOSDiscoveryTaskResponse>;
    /**
     * 删除用户云资源
     */
    DeleteDSPAMetaResource(req: DeleteDSPAMetaResourceRequest, cb?: (error: string, rep: DeleteDSPAMetaResourceResponse) => void): Promise<DeleteDSPAMetaResourceResponse>;
    /**
     * 本接口（DeleteCOSMetaData）用于删除COS元数据信息。
     */
    DeleteCosMetaResource(req: DeleteCosMetaResourceRequest, cb?: (error: string, rep: DeleteCosMetaResourceResponse) => void): Promise<DeleteCosMetaResourceResponse>;
    /**
     * 修改分级分类模板信息
     */
    ModifyStandardInfo(req?: ModifyStandardInfoRequest, cb?: (error: string, rep: ModifyStandardInfoResponse) => void): Promise<ModifyStandardInfoResponse>;
    /**
     * 获取报表下载链接
     */
    DescribeReportTaskDownloadUrl(req: DescribeReportTaskDownloadUrlRequest, cb?: (error: string, rep: DescribeReportTaskDownloadUrlResponse) => void): Promise<DescribeReportTaskDownloadUrlResponse>;
    /**
     * 获取COS分类分级任务结果，该接口只有在任务状态为以下状态时才支持结果正常查询：
3 扫描成功，
4 扫描失败
     */
    DescribeDSPACOSDiscoveryTaskResult(req: DescribeDSPACOSDiscoveryTaskResultRequest, cb?: (error: string, rep: DescribeDSPACOSDiscoveryTaskResultResponse) => void): Promise<DescribeDSPACOSDiscoveryTaskResultResponse>;
    /**
     * 绑定或解绑COS桶
     */
    BindDSPAResourceCosBuckets(req: BindDSPAResourceCosBucketsRequest, cb?: (error: string, rep: BindDSPAResourceCosBucketsResponse) => void): Promise<BindDSPAResourceCosBucketsResponse>;
    /**
     * 修改分类分级模板，内置模板不支持修改。
     */
    ModifyDSPAComplianceGroup(req: ModifyDSPAComplianceGroupRequest, cb?: (error: string, rep: ModifyDSPAComplianceGroupResponse) => void): Promise<ModifyDSPAComplianceGroupResponse>;
    /**
     * 查询敏感数据导出结果URL
     */
    DescribeAssetDetailDataExportResult(req: DescribeAssetDetailDataExportResultRequest, cb?: (error: string, rep: DescribeAssetDetailDataExportResultResponse) => void): Promise<DescribeAssetDetailDataExportResultResponse>;
    /**
     * 风险评估概览页，查询风险面的分布
     */
    DescribeDSPAAssessmentRiskSideDistributed(req: DescribeDSPAAssessmentRiskSideDistributedRequest, cb?: (error: string, rep: DescribeDSPAAssessmentRiskSideDistributedResponse) => void): Promise<DescribeDSPAAssessmentRiskSideDistributedResponse>;
    /**
     * 获取分类分级任务结果详情，该接口只有在任务状态为时才支持结果正确查询：
3 扫描成功
     */
    DescribeDSPADiscoveryTaskResultDetail(req: DescribeDSPADiscoveryTaskResultDetailRequest, cb?: (error: string, rep: DescribeDSPADiscoveryTaskResultDetailResponse) => void): Promise<DescribeDSPADiscoveryTaskResultDetailResponse>;
    /**
     * 风险级别趋势统计
     */
    DescribeDSPAAssessmentRiskLevelTrend(req: DescribeDSPAAssessmentRiskLevelTrendRequest, cb?: (error: string, rep: DescribeDSPAAssessmentRiskLevelTrendResponse) => void): Promise<DescribeDSPAAssessmentRiskLevelTrendResponse>;
    /**
     * 获取DSPA评估风险项列表
     */
    DescribeDSPAAssessmentRisks(req: DescribeDSPAAssessmentRisksRequest, cb?: (error: string, rep: DescribeDSPAAssessmentRisksResponse) => void): Promise<DescribeDSPAAssessmentRisksResponse>;
    /**
     * 获取模板详情信息
     */
    DescribeDSPAComplianceGroupDetail(req: DescribeDSPAComplianceGroupDetailRequest, cb?: (error: string, rep: DescribeDSPAComplianceGroupDetailResponse) => void): Promise<DescribeDSPAComplianceGroupDetailResponse>;
    /**
     * 风险项页面---创建风险等级
     */
    CreateDSPAAssessmentRiskLevel(req: CreateDSPAAssessmentRiskLevelRequest, cb?: (error: string, rep: CreateDSPAAssessmentRiskLevelResponse) => void): Promise<CreateDSPAAssessmentRiskLevelResponse>;
    /**
     * 获取COS分类分级任务结果详情，该接口只有在任务状态为时才支持结果正确查询：
3 扫描成功
     */
    DescribeDSPACOSTaskResultDetail(req: DescribeDSPACOSTaskResultDetailRequest, cb?: (error: string, rep: DescribeDSPACOSTaskResultDetailResponse) => void): Promise<DescribeDSPACOSTaskResultDetailResponse>;
    /**
     * 获取单个合规组下的RDB关系数据库分类分级数据资产
     */
    DescribeDSPARDBDataAssetByComplianceId(req: DescribeDSPARDBDataAssetByComplianceIdRequest, cb?: (error: string, rep: DescribeDSPARDBDataAssetByComplianceIdResponse) => void): Promise<DescribeDSPARDBDataAssetByComplianceIdResponse>;
    /**
     * 查询DB绑定的列表
     */
    DescribeBindDBList(req: DescribeBindDBListRequest, cb?: (error: string, rep: DescribeBindDBListResponse) => void): Promise<DescribeBindDBListResponse>;
    /**
     * 获取导出任务结果
     */
    DescribeExportTaskResult(req: DescribeExportTaskResultRequest, cb?: (error: string, rep: DescribeExportTaskResultResponse) => void): Promise<DescribeExportTaskResultResponse>;
    /**
     * 本接口用于获取COS元数据信息，返回COS元数据信息列表。
     */
    ListDSPACosMetaResources(req: ListDSPACosMetaResourcesRequest, cb?: (error: string, rep: ListDSPACosMetaResourcesResponse) => void): Promise<ListDSPACosMetaResourcesResponse>;
    /**
     * 拉取用户云资源
     */
    ListDSPAMetaResources(req: ListDSPAMetaResourcesRequest, cb?: (error: string, rep: ListDSPAMetaResourcesResponse) => void): Promise<ListDSPAMetaResourcesResponse>;
    /**
     * 获取敏感数据分类列表
     */
    DescribeDSPACategories(req: DescribeDSPACategoriesRequest, cb?: (error: string, rep: DescribeDSPACategoriesResponse) => void): Promise<DescribeDSPACategoriesResponse>;
    /**
     * 创建新分类
     */
    CreateNewClassification(req?: CreateNewClassificationRequest, cb?: (error: string, rep: CreateNewClassificationResponse) => void): Promise<CreateNewClassificationResponse>;
    /**
     * 风险模板---修改风险模板
     */
    ModifyDSPAAssessmentRiskTemplate(req: ModifyDSPAAssessmentRiskTemplateRequest, cb?: (error: string, rep: ModifyDSPAAssessmentRiskTemplateResponse) => void): Promise<ModifyDSPAAssessmentRiskTemplateResponse>;
    /**
     * 获取分类分级任务详情
     */
    DescribeDSPADiscoveryTaskDetail(req: DescribeDSPADiscoveryTaskDetailRequest, cb?: (error: string, rep: DescribeDSPADiscoveryTaskDetailResponse) => void): Promise<DescribeDSPADiscoveryTaskDetailResponse>;
    /**
     * 修改分类分级任务，该接口只有在任务状态为以下状态时才支持正确修改：
0 待扫描，
2 扫描终止，
3 扫描成功，
4 扫描失败
     */
    ModifyDSPADiscoveryTask(req: ModifyDSPADiscoveryTaskRequest, cb?: (error: string, rep: ModifyDSPADiscoveryTaskResponse) => void): Promise<ModifyDSPADiscoveryTaskResponse>;
    /**
     * 风险概览页风险数量和受影响资产数概览统计
     */
    DescribeDSPAAssessmentRiskAmountOverview(req: DescribeDSPAAssessmentRiskAmountOverviewRequest, cb?: (error: string, rep: DescribeDSPAAssessmentRiskAmountOverviewResponse) => void): Promise<DescribeDSPAAssessmentRiskAmountOverviewResponse>;
    /**
     * 创建识别规则
     */
    CreateClassificationRule(req?: CreateClassificationRuleRequest, cb?: (error: string, rep: CreateClassificationRuleResponse) => void): Promise<CreateClassificationRuleResponse>;
    /**
     * 根据合规组id，去查询ES的概览页统计数据
     */
    DescribeDSPAESDataAssetByComplianceId(req: DescribeDSPAESDataAssetByComplianceIdRequest, cb?: (error: string, rep: DescribeDSPAESDataAssetByComplianceIdResponse) => void): Promise<DescribeDSPAESDataAssetByComplianceIdResponse>;
    /**
     * 获取分类分级模板列表
     */
    DescribeDSPAComplianceGroups(req: DescribeDSPAComplianceGroupsRequest, cb?: (error: string, rep: DescribeDSPAComplianceGroupsResponse) => void): Promise<DescribeDSPAComplianceGroupsResponse>;
    /**
     * 修改级别名称
     */
    ModifyLevelName(req?: ModifyLevelNameRequest, cb?: (error: string, rep: ModifyLevelNameResponse) => void): Promise<ModifyLevelNameResponse>;
    /**
     * 获取COS分类分级任务详情
     */
    DescribeDSPACOSDiscoveryTaskDetail(req: DescribeDSPACOSDiscoveryTaskDetailRequest, cb?: (error: string, rep: DescribeDSPACOSDiscoveryTaskDetailResponse) => void): Promise<DescribeDSPACOSDiscoveryTaskDetailResponse>;
    /**
     * 获取扫描结果数据样本
     */
    DescribeDSPATaskResultDataSample(req: DescribeDSPATaskResultDataSampleRequest, cb?: (error: string, rep: DescribeDSPATaskResultDataSampleResponse) => void): Promise<DescribeDSPATaskResultDataSampleResponse>;
    /**
     * 删除COS分类分级任务，该接口只有在任务状态为以下几个状态值时才支持正确删除：
0 待扫描，
2 扫描终止，
3 扫描成功，
4 扫描失败
     */
    DeleteDSPACOSDiscoveryTask(req: DeleteDSPACOSDiscoveryTaskRequest, cb?: (error: string, rep: DeleteDSPACOSDiscoveryTaskResponse) => void): Promise<DeleteDSPACOSDiscoveryTaskResponse>;
    /**
     * 数据资产报告-查询mongo 的敏感资产报告，包含（数据库资产，设敏级别数据库top10，资产详情）
     */
    DescribeMongoAssetSensitiveDistribution(req: DescribeMongoAssetSensitiveDistributionRequest, cb?: (error: string, rep: DescribeMongoAssetSensitiveDistributionResponse) => void): Promise<DescribeMongoAssetSensitiveDistributionResponse>;
    /**
     * 修改敏感级别信息
     */
    ModifyLevelInfo(req?: ModifyLevelInfoRequest, cb?: (error: string, rep: ModifyLevelInfoResponse) => void): Promise<ModifyLevelInfoResponse>;
    /**
     * 创建分类关联关系
     */
    CreateDSPACategoryRelation(req: CreateDSPACategoryRelationRequest, cb?: (error: string, rep: CreateDSPACategoryRelationResponse) => void): Promise<CreateDSPACategoryRelationResponse>;
    /**
     * 数据资产报告-查询cos的敏感数据分布（分级分布 分类分布 敏感规则分布详情列表）
     */
    DescribeSensitiveCOSDataDistribution(req: DescribeSensitiveCOSDataDistributionRequest, cb?: (error: string, rep: DescribeSensitiveCOSDataDistributionResponse) => void): Promise<DescribeSensitiveCOSDataDistributionResponse>;
    /**
     * 受影响资产TOP5统计
     */
    DescribeDSPAAssessmentRiskDatasourceTop5(req: DescribeDSPAAssessmentRiskDatasourceTop5Request, cb?: (error: string, rep: DescribeDSPAAssessmentRiskDatasourceTop5Response) => void): Promise<DescribeDSPAAssessmentRiskDatasourceTop5Response>;
    /**
     * 获取资产报表任务列表
     */
    DescribeReportTasks(req: DescribeReportTasksRequest, cb?: (error: string, rep: DescribeReportTasksResponse) => void): Promise<DescribeReportTasksResponse>;
    /**
     * 获取COS分类分级任务结果详情文件列表
     */
    DescribeDSPACOSDiscoveryTaskFiles(req: DescribeDSPACOSDiscoveryTaskFilesRequest, cb?: (error: string, rep: DescribeDSPACOSDiscoveryTaskFilesResponse) => void): Promise<DescribeDSPACOSDiscoveryTaskFilesResponse>;
    /**
     * 获取DSPA评估模板列表
     */
    DescribeDSPAAssessmentTemplates(req: DescribeDSPAAssessmentTemplatesRequest, cb?: (error: string, rep: DescribeDSPAAssessmentTemplatesResponse) => void): Promise<DescribeDSPAAssessmentTemplatesResponse>;
    /**
     * 修改最新评估风险项状态
     */
    ModifyDSPAAssessmentRiskLatest(req: ModifyDSPAAssessmentRiskLatestRequest, cb?: (error: string, rep: ModifyDSPAAssessmentRiskLatestResponse) => void): Promise<ModifyDSPAAssessmentRiskLatestResponse>;
    /**
     * 打开或者关闭分类分级规则
注：此API同时对该规则下的RDB跟COS规则操作。
     */
    EnableDSPADiscoveryRule(req: EnableDSPADiscoveryRuleRequest, cb?: (error: string, rep: EnableDSPADiscoveryRuleResponse) => void): Promise<EnableDSPADiscoveryRuleResponse>;
    /**
     * 创建规则别名
     */
    CreateIdentifyRuleAnotherName(req: CreateIdentifyRuleAnotherNameRequest, cb?: (error: string, rep: CreateIdentifyRuleAnotherNameResponse) => void): Promise<CreateIdentifyRuleAnotherNameResponse>;
    /**
     * 风险等级的定义页面-创建风险等级的时候生成的一个默认的矩阵
     */
    DecribeSuggestRiskLevelMatrix(req: DecribeSuggestRiskLevelMatrixRequest, cb?: (error: string, rep: DecribeSuggestRiskLevelMatrixResponse) => void): Promise<DecribeSuggestRiskLevelMatrixResponse>;
    /**
     * 风险概览-查询待处理风险统计数
     */
    DescribeDSPAAssessmentPendingRiskOverview(req: DescribeDSPAAssessmentPendingRiskOverviewRequest, cb?: (error: string, rep: DescribeDSPAAssessmentPendingRiskOverviewResponse) => void): Promise<DescribeDSPAAssessmentPendingRiskOverviewResponse>;
    /**
     * 调整ES任务扫描结果
     */
    ModifyDSPAESTaskResult(req: ModifyDSPAESTaskResultRequest, cb?: (error: string, rep: ModifyDSPAESTaskResultResponse) => void): Promise<ModifyDSPAESTaskResultResponse>;
    /**
     * 获取RDB关系数据库分类分级资产详情
     */
    DescribeDSPARDBDataAssetDetail(req: DescribeDSPARDBDataAssetDetailRequest, cb?: (error: string, rep: DescribeDSPARDBDataAssetDetailResponse) => void): Promise<DescribeDSPARDBDataAssetDetailResponse>;
    /**
     * 查询分类信息

     */
    DescribeClassificationInfo(req?: DescribeClassificationInfoRequest, cb?: (error: string, rep: DescribeClassificationInfoResponse) => void): Promise<DescribeClassificationInfoResponse>;
    /**
     * 风险分类TOP5统计
     */
    DescribeDSPAAssessmentRiskItemTop5(req: DescribeDSPAAssessmentRiskItemTop5Request, cb?: (error: string, rep: DescribeDSPAAssessmentRiskItemTop5Response) => void): Promise<DescribeDSPAAssessmentRiskItemTop5Response>;
    /**
     * 获取资源绑定DB状态
     */
    QueryResourceDbBindStatus(req: QueryResourceDbBindStatusRequest, cb?: (error: string, rep: QueryResourceDbBindStatusResponse) => void): Promise<QueryResourceDbBindStatusResponse>;
    /**
     * 用于查询该用户是否已开通分类分级服务
     */
    DescribeDSPADiscoveryServiceStatus(req: DescribeDSPADiscoveryServiceStatusRequest, cb?: (error: string, rep: DescribeDSPADiscoveryServiceStatusResponse) => void): Promise<DescribeDSPADiscoveryServiceStatusResponse>;
    /**
     * 启用版本体验
     */
    EnableTrialVersion(req: EnableTrialVersionRequest, cb?: (error: string, rep: EnableTrialVersionResponse) => void): Promise<EnableTrialVersionResponse>;
    /**
     * 调整任务扫描结果
     */
    ModifyDSPATaskResult(req: ModifyDSPATaskResultRequest, cb?: (error: string, rep: ModifyDSPATaskResultResponse) => void): Promise<ModifyDSPATaskResultResponse>;
    /**
     * 新增分类，单个用户最多允许创建100个数据分类。
     */
    CreateDSPACategory(req: CreateDSPACategoryRequest, cb?: (error: string, rep: CreateDSPACategoryResponse) => void): Promise<CreateDSPACategoryResponse>;
    /**
     * 新增COS分类分级扫描任务，单个用户最多允许创建100个任务。
     */
    CreateDSPACOSDiscoveryTask(req: CreateDSPACOSDiscoveryTaskRequest, cb?: (error: string, rep: CreateDSPACOSDiscoveryTaskResponse) => void): Promise<CreateDSPACOSDiscoveryTaskResponse>;
    /**
     * 获取合规组分类规则信息
     */
    DescribeDSPACategoryRules(req: DescribeDSPACategoryRulesRequest, cb?: (error: string, rep: DescribeDSPACategoryRulesResponse) => void): Promise<DescribeDSPACategoryRulesResponse>;
    /**
     * 风险模板页面--查询风险模板中的脆弱项配置
     */
    DescribeDSPAAssessmentRiskTemplateVulnerableList(req: DescribeDSPAAssessmentRiskTemplateVulnerableListRequest, cb?: (error: string, rep: DescribeDSPAAssessmentRiskTemplateVulnerableListResponse) => void): Promise<DescribeDSPAAssessmentRiskTemplateVulnerableListResponse>;
    /**
     * 一个分类合并到另一个分类中（分类拖拽功能）
     */
    ModifyMergeClassification(req?: ModifyMergeClassificationRequest, cb?: (error: string, rep: ModifyMergeClassificationResponse) => void): Promise<ModifyMergeClassificationResponse>;
    /**
     * 删除DSPA风险评估任务
     */
    DeleteDSPAAssessmentTask(req: DeleteDSPAAssessmentTaskRequest, cb?: (error: string, rep: DeleteDSPAAssessmentTaskResponse) => void): Promise<DeleteDSPAAssessmentTaskResponse>;
    /**
     * 验证分类分级规则
     */
    VerifyDSPADiscoveryRule(req: VerifyDSPADiscoveryRuleRequest, cb?: (error: string, rep: VerifyDSPADiscoveryRuleResponse) => void): Promise<VerifyDSPADiscoveryRuleResponse>;
    /**
     * 获取COS分类分级任务列表
     */
    DescribeDSPACOSDiscoveryTasks(req: DescribeDSPACOSDiscoveryTasksRequest, cb?: (error: string, rep: DescribeDSPACOSDiscoveryTasksResponse) => void): Promise<DescribeDSPACOSDiscoveryTasksResponse>;
    /**
     * 获取分级详情
     */
    DescribeDSPALevelDetail(req: DescribeDSPALevelDetailRequest, cb?: (error: string, rep: DescribeDSPALevelDetailResponse) => void): Promise<DescribeDSPALevelDetailResponse>;
    /**
     * 创建或复制分级分类模板
     */
    CreateOrCopyStandard(req?: CreateOrCopyStandardRequest, cb?: (error: string, rep: CreateOrCopyStandardResponse) => void): Promise<CreateOrCopyStandardResponse>;
    /**
     * 数据资产报告页面-查询数据资产概览接口（包括数据库资产详情和存储资产详情）
     */
    DescribeAssetOverview(req: DescribeAssetOverviewRequest, cb?: (error: string, rep: DescribeAssetOverviewResponse) => void): Promise<DescribeAssetOverviewResponse>;
    /**
     * 新建DSPA风险评估任务
     */
    CreateDSPAAssessmentTask(req: CreateDSPAAssessmentTaskRequest, cb?: (error: string, rep: CreateDSPAAssessmentTaskResponse) => void): Promise<CreateDSPAAssessmentTaskResponse>;
    /**
     * 验证COS分类分级规则
     */
    VerifyDSPACOSRule(req: VerifyDSPACOSRuleRequest, cb?: (error: string, rep: VerifyDSPACOSRuleResponse) => void): Promise<VerifyDSPACOSRuleResponse>;
    /**
     * 风险评估模板---创建风险评估模板
     */
    CreateDSPAAssessmentRiskTemplate(req: CreateDSPAAssessmentRiskTemplateRequest, cb?: (error: string, rep: CreateDSPAAssessmentRiskTemplateResponse) => void): Promise<CreateDSPAAssessmentRiskTemplateResponse>;
    /**
     * 风险数量概览统计
     */
    DescribeDSPAAssessmentRiskOverview(req: DescribeDSPAAssessmentRiskOverviewRequest, cb?: (error: string, rep: DescribeDSPAAssessmentRiskOverviewResponse) => void): Promise<DescribeDSPAAssessmentRiskOverviewResponse>;
    /**
     * 根据合规组id，去查询ES的概览页下的统计列表数据
     */
    DescribeDSPAESDataAssetDetail(req: DescribeDSPAESDataAssetDetailRequest, cb?: (error: string, rep: DescribeDSPAESDataAssetDetailResponse) => void): Promise<DescribeDSPAESDataAssetDetailResponse>;
    /**
     * 新增分类分级模板，单个用户最多允许创建100个合规组。
     */
    CreateDSPAComplianceGroup(req: CreateDSPAComplianceGroupRequest, cb?: (error: string, rep: CreateDSPAComplianceGroupResponse) => void): Promise<CreateDSPAComplianceGroupResponse>;
    /**
     * 获取数据源的数据库信息
     */
    DescribeDSPADataSourceDbInfo(req: DescribeDSPADataSourceDbInfoRequest, cb?: (error: string, rep: DescribeDSPADataSourceDbInfoResponse) => void): Promise<DescribeDSPADataSourceDbInfoResponse>;
    /**
     * 添加用户云上资源列表
     */
    CreateDSPAMetaResources(req: CreateDSPAMetaResourcesRequest, cb?: (error: string, rep: CreateDSPAMetaResourcesResponse) => void): Promise<CreateDSPAMetaResourcesResponse>;
    /**
     * 修改识别规则状态
     */
    ModifyClassificationRuleState(req?: ModifyClassificationRuleStateRequest, cb?: (error: string, rep: ModifyClassificationRuleStateResponse) => void): Promise<ModifyClassificationRuleStateResponse>;
    /**
     * 修改DSPA集群信息
     */
    ModifyDSPAClusterInfo(req: ModifyDSPAClusterInfoRequest, cb?: (error: string, rep: ModifyDSPAClusterInfoResponse) => void): Promise<ModifyDSPAClusterInfoResponse>;
    /**
     * 查询高风险资产的top10
     */
    DescribeDSPAAssessmentHighRiskTop10Overview(req: DescribeDSPAAssessmentHighRiskTop10OverviewRequest, cb?: (error: string, rep: DescribeDSPAAssessmentHighRiskTop10OverviewResponse) => void): Promise<DescribeDSPAAssessmentHighRiskTop10OverviewResponse>;
    /**
     * 查询最新风险项详情数据
     */
    DescribeDSPAAssessmentLatestRiskDetailInfo(req: DescribeDSPAAssessmentLatestRiskDetailInfoRequest, cb?: (error: string, rep: DescribeDSPAAssessmentLatestRiskDetailInfoResponse) => void): Promise<DescribeDSPAAssessmentLatestRiskDetailInfoResponse>;
    /**
     * 查询分类下规则列表

     */
    DescribeRuleList(req?: DescribeRuleListRequest, cb?: (error: string, rep: DescribeRuleListResponse) => void): Promise<DescribeRuleListResponse>;
    /**
     * 获取DSPA评估任务列表
     */
    DescribeDSPAAssessmentTasks(req: DescribeDSPAAssessmentTasksRequest, cb?: (error: string, rep: DescribeDSPAAssessmentTasksResponse) => void): Promise<DescribeDSPAAssessmentTasksResponse>;
    /**
     * 获取分级分级扫描的表集合
     */
    DescribeDSPADiscoveryTaskTables(req: DescribeDSPADiscoveryTaskTablesRequest, cb?: (error: string, rep: DescribeDSPADiscoveryTaskTablesResponse) => void): Promise<DescribeDSPADiscoveryTaskTablesResponse>;
    /**
     * 获取用户购买配额信息
     */
    GetUserQuotaInfo(req: GetUserQuotaInfoRequest, cb?: (error: string, rep: GetUserQuotaInfoResponse) => void): Promise<GetUserQuotaInfoResponse>;
    /**
     * 获取模板更新提示信息
     */
    DescribeDSPAComplianceUpdateNotification(req: DescribeDSPAComplianceUpdateNotificationRequest, cb?: (error: string, rep: DescribeDSPAComplianceUpdateNotificationResponse) => void): Promise<DescribeDSPAComplianceUpdateNotificationResponse>;
    /**
     * 添加用户云上数据库类型资源
     */
    CreateDSPADbMetaResources(req: CreateDSPADbMetaResourcesRequest, cb?: (error: string, rep: CreateDSPADbMetaResourcesResponse) => void): Promise<CreateDSPADbMetaResourcesResponse>;
    /**
     * 调整COS任务扫描结果
     */
    ModifyDSPACOSTaskResult(req: ModifyDSPACOSTaskResultRequest, cb?: (error: string, rep: ModifyDSPACOSTaskResultResponse) => void): Promise<ModifyDSPACOSTaskResultResponse>;
    /**
     * 绑定或解绑数据库实例DB
     */
    BindDSPAResourceDatabases(req: BindDSPAResourceDatabasesRequest, cb?: (error: string, rep: BindDSPAResourceDatabasesResponse) => void): Promise<BindDSPAResourceDatabasesResponse>;
    /**
     * 数据资产报告-查询es的敏感资产报告，包含（数据库资产，设敏级别数据库top10，资产详情）
     */
    DescribeESAssetSensitiveDistribution(req: DescribeESAssetSensitiveDistributionRequest, cb?: (error: string, rep: DescribeESAssetSensitiveDistributionResponse) => void): Promise<DescribeESAssetSensitiveDistributionResponse>;
    /**
     * 授权用户云资源
     */
    AuthorizeDSPAMetaResources(req: AuthorizeDSPAMetaResourcesRequest, cb?: (error: string, rep: AuthorizeDSPAMetaResourcesResponse) => void): Promise<AuthorizeDSPAMetaResourcesResponse>;
    /**
     * 拉取DSPA支持的Meta元数据类型，返回包括：元数据类型，支持的元数据地域信息
     */
    DescribeDSPASupportedMetas(req: DescribeDSPASupportedMetasRequest, cb?: (error: string, rep: DescribeDSPASupportedMetasResponse) => void): Promise<DescribeDSPASupportedMetasResponse>;
    /**
     * 风险项处理趋势统计
     */
    DescribeDSPAAssessmentRiskDealedTrend(req: DescribeDSPAAssessmentRiskDealedTrendRequest, cb?: (error: string, rep: DescribeDSPAAssessmentRiskDealedTrendResponse) => void): Promise<DescribeDSPAAssessmentRiskDealedTrendResponse>;
    /**
     * 数据资产报告-查询rdb的敏感数据分布-敏感规则字段分布-敏感分布详情
     */
    DescribeSensitiveRDBDataDistribution(req: DescribeSensitiveRDBDataDistributionRequest, cb?: (error: string, rep: DescribeSensitiveRDBDataDistributionResponse) => void): Promise<DescribeSensitiveRDBDataDistributionResponse>;
    /**
     * 重新启动DSPA风险评估任务
     */
    RestartDSPAAssessmentTask(req: RestartDSPAAssessmentTaskRequest, cb?: (error: string, rep: RestartDSPAAssessmentTaskResponse) => void): Promise<RestartDSPAAssessmentTaskResponse>;
    /**
     * 获取ES的分类分级任务结果详情，该接口只有在任务状态为时才支持结果正确查询：
3 扫描成功
     */
    DescribeDSPAESDiscoveryTaskResultDetail(req: DescribeDSPAESDiscoveryTaskResultDetailRequest, cb?: (error: string, rep: DescribeDSPAESDiscoveryTaskResultDetailResponse) => void): Promise<DescribeDSPAESDiscoveryTaskResultDetailResponse>;
    /**
     * 删除分类分级识别任务，该接口只有在任务状态为以下几个状态值时才支持正确删除：
0 待扫描，
2 扫描终止，
3 扫描成功，
4 扫描失败
     */
    DeleteDSPADiscoveryTask(req: DeleteDSPADiscoveryTaskRequest, cb?: (error: string, rep: DeleteDSPADiscoveryTaskResponse) => void): Promise<DeleteDSPADiscoveryTaskResponse>;
    /**
     * 更新自建资源基础信息，包括：端口、账户名、密码。
请注意：
如果资源自身的VPC、VIP信息发生变化，后台会自动更新。
如果监听的端口发生变化，请显式输入端口。
如果账户名密码任意一个发生变化，请务必同时显式输入账户名密码。
     */
    UpdateDSPASelfBuildResource(req: UpdateDSPASelfBuildResourceRequest, cb?: (error: string, rep: UpdateDSPASelfBuildResourceResponse) => void): Promise<UpdateDSPASelfBuildResourceResponse>;
    /**
     * 获取分类分级任务结果，该接口只有在任务状态为以下状态时才支持结果正常查询：
3 扫描成功，
4 扫描失败
     */
    DescribeDSPADiscoveryTaskResult(req: DescribeDSPADiscoveryTaskResultRequest, cb?: (error: string, rep: DescribeDSPADiscoveryTaskResultResponse) => void): Promise<DescribeDSPADiscoveryTaskResultResponse>;
    /**
     * 风险项页面----修改风险等级的详情数据
     */
    ModifyDSPAAssessmentRiskLevel(req: ModifyDSPAAssessmentRiskLevelRequest, cb?: (error: string, rep: ModifyDSPAAssessmentRiskLevelResponse) => void): Promise<ModifyDSPAAssessmentRiskLevelResponse>;
    /**
     * 新增分类分级规则，单个用户最多允许创建200个规则。
     */
    CreateDSPADiscoveryRule(req: CreateDSPADiscoveryRuleRequest, cb?: (error: string, rep: CreateDSPADiscoveryRuleResponse) => void): Promise<CreateDSPADiscoveryRuleResponse>;
    /**
     * 修改分类信息
     */
    ModifyNewClassification(req?: ModifyNewClassificationRequest, cb?: (error: string, rep: ModifyNewClassificationResponse) => void): Promise<ModifyNewClassificationResponse>;
    /**
     * 数据资产报告-查询cos的资产分布详情接口
     */
    DescribeCOSAssetSensitiveDistribution(req: DescribeCOSAssetSensitiveDistributionRequest, cb?: (error: string, rep: DescribeCOSAssetSensitiveDistributionResponse) => void): Promise<DescribeCOSAssetSensitiveDistributionResponse>;
    /**
     * 查询标准下所有叶子节点分类
     */
    DescribeLeafClassification(req?: DescribeLeafClassificationRequest, cb?: (error: string, rep: DescribeLeafClassificationResponse) => void): Promise<DescribeLeafClassificationResponse>;
    /**
     * 新增分类分级任务，单个用户最多允许创建100个任务。
     */
    CreateDSPADiscoveryTask(req: CreateDSPADiscoveryTaskRequest, cb?: (error: string, rep: CreateDSPADiscoveryTaskResponse) => void): Promise<CreateDSPADiscoveryTaskResponse>;
    /**
     * 风险概览-查询新发现风险统计数
     */
    DescribeDSPAAssessmentNewDiscoveredRiskOverview(req: DescribeDSPAAssessmentNewDiscoveredRiskOverviewRequest, cb?: (error: string, rep: DescribeDSPAAssessmentNewDiscoveredRiskOverviewResponse) => void): Promise<DescribeDSPAAssessmentNewDiscoveredRiskOverviewResponse>;
    /**
     * 查询风险的处理历史
     */
    DescribeDSPAAssessmentRiskProcessHistory(req: DescribeDSPAAssessmentRiskProcessHistoryRequest, cb?: (error: string, rep: DescribeDSPAAssessmentRiskProcessHistoryResponse) => void): Promise<DescribeDSPAAssessmentRiskProcessHistoryResponse>;
    /**
     * 查询DSPA实例的db列表
     */
    QueryDSPAMetaResourceDbList(req: QueryDSPAMetaResourceDbListRequest, cb?: (error: string, rep: QueryDSPAMetaResourceDbListResponse) => void): Promise<QueryDSPAMetaResourceDbListResponse>;
    /**
     * 获取体验版本信息
     */
    GetTrialVersion(req: GetTrialVersionRequest, cb?: (error: string, rep: GetTrialVersionResponse) => void): Promise<GetTrialVersionResponse>;
    /**
     * 查询风险分布数据，包含风险类型分布，风险详情分布，风险资产的分布
     */
    DescribeDSPAAssessmentRiskDistributionOverview(req: DescribeDSPAAssessmentRiskDistributionOverviewRequest, cb?: (error: string, rep: DescribeDSPAAssessmentRiskDistributionOverviewResponse) => void): Promise<DescribeDSPAAssessmentRiskDistributionOverviewResponse>;
    /**
     * 查询标准下所有分类的识别规则数量(不算子分类下的识别规则)
     */
    DescribeClassificationRuleCount(req?: DescribeClassificationRuleCountRequest, cb?: (error: string, rep: DescribeClassificationRuleCountResponse) => void): Promise<DescribeClassificationRuleCountResponse>;
    /**
     * 获取分类规则树信息
     */
    DescribeDSPACategoryTreeWithRules(req: DescribeDSPACategoryTreeWithRulesRequest, cb?: (error: string, rep: DescribeDSPACategoryTreeWithRulesResponse) => void): Promise<DescribeDSPACategoryTreeWithRulesResponse>;
    /**
     * 获取授权资源的连接状态
     */
    GetResourceConnectionStatus(req: GetResourceConnectionStatusRequest, cb?: (error: string, rep: GetResourceConnectionStatusResponse) => void): Promise<GetResourceConnectionStatusResponse>;
    /**
     * 获取ES扫描结果数据样本
     */
    DescribeDSPAESDataSample(req: DescribeDSPAESDataSampleRequest, cb?: (error: string, rep: DescribeDSPAESDataSampleResponse) => void): Promise<DescribeDSPAESDataSampleResponse>;
    /**
     * 获取DSPA评估模版关联的评估控制项列表
     */
    DescribeDSPAAssessmentTemplateControlItems(req: DescribeDSPAAssessmentTemplateControlItemsRequest, cb?: (error: string, rep: DescribeDSPAAssessmentTemplateControlItemsResponse) => void): Promise<DescribeDSPAAssessmentTemplateControlItemsResponse>;
    /**
     * 开启级别或关闭级别
     */
    ModifyLevelState(req?: ModifyLevelStateRequest, cb?: (error: string, rep: ModifyLevelStateResponse) => void): Promise<ModifyLevelStateResponse>;
    /**
     * 获取分级列表，限制100个 不分页返回
     */
    DescribeDSPALevelGroups(req: DescribeDSPALevelGroupsRequest, cb?: (error: string, rep: DescribeDSPALevelGroupsResponse) => void): Promise<DescribeDSPALevelGroupsResponse>;
    /**
     * 拉取DSPA集群列表
     */
    ListDSPAClusters(req: ListDSPAClustersRequest, cb?: (error: string, rep: ListDSPAClustersResponse) => void): Promise<ListDSPAClustersResponse>;
    /**
     * 创建敏感数据导出任务
     */
    ExportAssetDetailData(req: ExportAssetDetailDataRequest, cb?: (error: string, rep: ExportAssetDetailDataResponse) => void): Promise<ExportAssetDetailDataResponse>;
    /**
     * 获取分类树信息
     */
    DescribeDSPACategoryTree(req: DescribeDSPACategoryTreeRequest, cb?: (error: string, rep: DescribeDSPACategoryTreeResponse) => void): Promise<DescribeDSPACategoryTreeResponse>;
    /**
     * 新建用户自建云资源
     */
    CreateDSPASelfBuildMetaResource(req: CreateDSPASelfBuildMetaResourceRequest, cb?: (error: string, rep: CreateDSPASelfBuildMetaResourceResponse) => void): Promise<CreateDSPASelfBuildMetaResourceResponse>;
    /**
     * 停止分类分级任务，该接口只有在任务状态为以下状态时才支持正确执行停止扫描：
1 扫描中
     */
    StopDSPADiscoveryTask(req: StopDSPADiscoveryTaskRequest, cb?: (error: string, rep: StopDSPADiscoveryTaskResponse) => void): Promise<StopDSPADiscoveryTaskResponse>;
    /**
     * 添加COS元数据
     */
    CreateDSPACosMetaResources(req: CreateDSPACosMetaResourcesRequest, cb?: (error: string, rep: CreateDSPACosMetaResourcesResponse) => void): Promise<CreateDSPACosMetaResourcesResponse>;
    /**
     * 修改分类，内置分类不支持修改。
     */
    ModifyDSPACategory(req: ModifyDSPACategoryRequest, cb?: (error: string, rep: ModifyDSPACategoryResponse) => void): Promise<ModifyDSPACategoryResponse>;
    /**
     * 修改分类分级规则，单个用户最多允许创建200个规则。
注：此API同时适用RDB跟COS类型数据。
     */
    ModifyDSPADiscoveryRule(req: ModifyDSPADiscoveryRuleRequest, cb?: (error: string, rep: ModifyDSPADiscoveryRuleResponse) => void): Promise<ModifyDSPADiscoveryRuleResponse>;
    /**
     * 删除分类分级识别任务结果
     */
    DeleteDSPADiscoveryTaskResult(req: DeleteDSPADiscoveryTaskResultRequest, cb?: (error: string, rep: DeleteDSPADiscoveryTaskResultResponse) => void): Promise<DeleteDSPADiscoveryTaskResultResponse>;
    /**
     * 风险评估概览页，查询风险面的分布
     */
    DescribeDSPAAssessmentRiskSideList(req: DescribeDSPAAssessmentRiskSideListRequest, cb?: (error: string, rep: DescribeDSPAAssessmentRiskSideListResponse) => void): Promise<DescribeDSPAAssessmentRiskSideListResponse>;
    /**
     * 获取COS敏感数据资产桶列表
     */
    DescribeDSPACOSDataAssetBuckets(req: DescribeDSPACOSDataAssetBucketsRequest, cb?: (error: string, rep: DescribeDSPACOSDataAssetBucketsResponse) => void): Promise<DescribeDSPACOSDataAssetBucketsResponse>;
    /**
     * 风险概览-查询处理中风险统计数
     */
    DescribeDSPAAssessmentProcessingRiskOverview(req: DescribeDSPAAssessmentProcessingRiskOverviewRequest, cb?: (error: string, rep: DescribeDSPAAssessmentProcessingRiskOverviewResponse) => void): Promise<DescribeDSPAAssessmentProcessingRiskOverviewResponse>;
    /**
     * 创建资产梳理报告任务
     */
    CreateAssetSortingReportTask(req: CreateAssetSortingReportTaskRequest, cb?: (error: string, rep: CreateAssetSortingReportTaskResponse) => void): Promise<CreateAssetSortingReportTaskResponse>;
}
