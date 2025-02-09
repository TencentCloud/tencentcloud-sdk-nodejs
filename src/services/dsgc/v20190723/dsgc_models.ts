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
 * DescribeRuleList返回参数结构体
 */
export interface DescribeRuleListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据资产报告-涉敏top的资产
 */
export interface TopAsset {
  /**
   * 分级名称
   */
  LevelName?: string
  /**
   * top数据信息
   */
  TopStat?: Array<TopAssetStat>
}

/**
 * DescribeDSPADiscoveryTaskTables返回参数结构体
 */
export interface DescribeDSPADiscoveryTaskTablesResponse {
  /**
   * 分类分级扫描表集合
   */
  Items?: Array<DSPATableInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCOSAssetSensitiveDistribution返回参数结构体
 */
export interface DescribeCOSAssetSensitiveDistributionResponse {
  /**
   * cos的涉敏资产
   */
  CosAsset?: CosAsset
  /**
   * 涉敏top
   */
  TopAsset?: Array<TopAsset>
  /**
   * cos资产详情列表
   */
  CosDetail?: Array<AssetCosDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDSPAAssessmentRiskTemplate请求参数结构体
 */
export interface ModifyDSPAAssessmentRiskTemplateRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 模板名称
   */
  TemplateName: string
  /**
   * 模板id
   */
  TemplateId: number
  /**
   * 修改的风险等级id
   */
  RiskLevelId: number
  /**
   * 模板的描述
   */
  TemplateDescription?: string
  /**
   * 脆弱项列表
   */
  RiskIdList?: Array<number | bigint>
}

/**
 * DSPA评估控制项
 */
export interface AssessmentControlItem {
  /**
   * 评估项Id
   */
  ItemId?: string
  /**
   * 评估项名称
   */
  ItemName?: string
  /**
   * 评估项描述
   */
  Description?: string
  /**
   * 评估项来源，内置/用户自定，取值（system，user）
   */
  Source?: string
  /**
   * 评估项类型，问卷/自动化，取值（questionnaire，auto）
   */
  ItemType?: string
  /**
   * 评估项子类型，单选/多选/时间/文本/AKSK等，取值（singlechoice，multichoice，date，text，AKSK……等）
   */
  ItemSubType?: string
  /**
   * 评估项创建时间
   */
  CreatedTime?: string
  /**
   * 评估项启用状态，启用/未启用，取值draft / launched
   */
  Status?: string
  /**
   * 评估项关联的模板数量
   */
  TemplateCount?: number
}

/**
 * DescribeESAssetSensitiveDistribution返回参数结构体
 */
export interface DescribeESAssetSensitiveDistributionResponse {
  /**
   * ES的资产统计数据
   */
  ESAsset?: ESAsset
  /**
   * 涉敏top数据
   */
  TopAsset?: Array<TopAsset>
  /**
   * ES的详情列表
   */
  ESDetail?: Array<ESAssetDBDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPARDBDataAssetDetail返回参数结构体
 */
export interface DescribeDSPARDBDataAssetDetailResponse {
  /**
   * RDB关系数据库敏感数据资产详情列表
   */
  Details?: Array<DspaRDBDataAssetDetail>
  /**
   * 符合条件的RDB关系数据库敏感数据资产数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 创建评估任务的ES详情
 */
export interface ESInstance {
  /**
   * 数据源id
   */
  DataSourceId: string
  /**
   * 数据源类型
   */
  DataSourceType: string
  /**
   * 地域
   */
  ResourceRegion: string
  /**
   * 扫描任务ID
   */
  DiscoveryTaskId?: number
  /**
   * 扫描任务实例ID
   */
  DiscoveryTaskInstanceID?: number
}

/**
 * CreateDSPACategory请求参数结构体
 */
export interface CreateDSPACategoryRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 敏感数据分类名称，1-60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字，Name不可重复
   */
  Name: string
}

/**
 * ModifyDSPATaskResult返回参数结构体
 */
export interface ModifyDSPATaskResultResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPAAssessmentRiskLevelDetail返回参数结构体
 */
export interface DescribeDSPAAssessmentRiskLevelDetailResponse {
  /**
   * 风险级别名称
   */
  RiskLevelName?: string
  /**
   * 风险级别描述
   */
  RiskLevelDescription?: string
  /**
   * 分类分级id
   */
  IdentifyComplianceId?: number
  /**
   * 分类分级模板名称
   */
  IdentifyComplianceName?: string
  /**
   * 风险数据
   */
  RiskLevelMatrix?: Array<RiskLevelMatrix>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPADiscoveryServiceStatus请求参数结构体
 */
export interface DescribeDSPADiscoveryServiceStatusRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
}

/**
 * DescribeExportTaskResult返回参数结构体
 */
export interface DescribeExportTaskResultResponse {
  /**
   * 导出任务结果
   */
  ExportResult?: string
  /**
   * 导出文件地址
   */
  ExportFileUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 敏感识别任务RDB数据规则
 */
export interface ScanTaskRDBRules {
  /**
   * 规则状态；0 不启用, 1 启用
   */
  Status: number
  /**
   * 只能取and 、or两个值其中之一，and：字段和内容同时满足，or：字段和内容满足其一
   */
  MatchOperator: string
  /**
   * 字段名包含规则，最大支持选择9项
   */
  MetaRule: DataRules
  /**
   * 内容包含规则，最大支持选择9项
   */
  ContentRule: DataRules
}

/**
 * CreateDSPADiscoveryTask返回参数结构体
 */
export interface CreateDSPADiscoveryTaskResponse {
  /**
   * 任务ID
   */
  TaskId?: number
  /**
   * 扫描结果ID
   */
  ResultId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPACategoryTree请求参数结构体
 */
export interface DescribeDSPACategoryTreeRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 合规组id
   */
  ComplianceId: number
}

/**
 * DeleteCosMetaResource请求参数结构体
 */
export interface DeleteCosMetaResourceRequest {
  /**
   * 实例Id。
   */
  DspaId: string
  /**
   * 资源所处地域。
   */
  ResourceRegion: string
  /**
   * 资源实例ID。
   */
  ResourceIds?: Array<string>
}

/**
 * 扫描规则内容
 */
export interface DataContent {
  /**
   * 规则内容，可以是正则规则，关键词，
忽略词扥
   */
  RuleContent: string
  /**
   * 是否区分大小写
false: 不区分大小写
true:区分大小写
   */
  IsIgnoreCase?: boolean
}

/**
 * DescribeDSPAAssessmentLatestRiskDetailInfo请求参数结构体
 */
export interface DescribeDSPAAssessmentLatestRiskDetailInfoRequest {
  /**
   * dspa实例Id
   */
  DspaId: string
  /**
   * 评估模板id
   */
  TemplateId: number
  /**
   * 风险id
   */
  RiskId: number
}

/**
 * DescribeReportTaskDownloadUrl请求参数结构体
 */
export interface DescribeReportTaskDownloadUrlRequest {
  /**
   * 任务id
   */
  ReportTaskId: number
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 是否同时下载敏感资产详情报告
   */
  IsWithSensitiveDetailReport?: boolean
}

/**
 * 数据样本
 */
export interface DspaFieldResultDataSample {
  /**
   * 数据样本
   */
  DataSample?: string
}

/**
 * ModifyClassificationRule请求参数结构体
 */
export type ModifyClassificationRuleRequest = null

/**
 * DescribeDSPADiscoveryServiceStatus返回参数结构体
 */
export interface DescribeDSPADiscoveryServiceStatusResponse {
  /**
   * 分类分级服务是否开通，true 表示已开通，false表示未开通
   */
  ServiceEnabled: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云数据库资源项
 */
export interface CloudResourceItem {
  /**
   * 资源所处地域。
   */
  Region: string
  /**
   * 	云上资源列表。
   */
  Items: Array<DspaCloudResourceMeta>
}

/**
 * DescribeRuleDetail返回参数结构体
 */
export interface DescribeRuleDetailResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * COS元数据信息
 */
export interface DSPACosMetaDataInfo {
  /**
   * COS桶名
   */
  Bucket?: string
  /**
   * COS桶创建时间
   */
  CreateTime?: string
  /**
   * 1 -- 有效，0 -- 无效，资源可能已被删除。
   */
  Valid?: number
  /**
   * DSPA为COS资源生成的资源ID
   */
  ResourceId?: string
  /**
   * COS资源所处的地域
   */
  ResourceRegion?: string
  /**
   * COS桶绑定状态
   */
  BindStatus?: string
  /**
   * COS桶存储量
   */
  Storage?: number
  /**
   * 治理授权状态，0:关闭 1：开启
   */
  GovernAuthStatus?: number
}

/**
 * DSPA评估模板
 */
export interface AssessmentTemplate {
  /**
   * id
   */
  Id?: number
  /**
   * 评估模板Id
   */
  TemplateId?: string
  /**
   * 评估模板名称
   */
  TemplateName?: string
  /**
   * 描述信息
   */
  Description?: string
  /**
   * 模板来源，内置/用户自定，取值（system，user）
   */
  Source?: string
  /**
   * 模板类型，自动化/半自动化/问卷，取值（auto，semi-auto，law）等
   */
  UseType?: string
  /**
   * 评估模板创建时间
   */
  CreatedTime?: string
  /**
   * 模板关联的评估项数量
   */
  ControlItemCount?: number
  /**
   * 模板已启用的评估项数量
   */
  AppliedItemCount?: number
  /**
   * 模板启用状态，草稿/已启用，取值draft / launched
   */
  Status?: string
  /**
   * 支持的数据源类型
   */
  SupportDataSource?: Array<string>
  /**
   * 是否包含攻击面风险
   */
  IsASMTemplate?: boolean
  /**
   * 合规组id
   */
  IdentifyComplianceId?: number
}

/**
 * ModifyDSPATaskResult请求参数结构体
 */
export interface ModifyDSPATaskResultRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 字段扫描结果ID
   */
  FieldResultId: number
  /**
   * 合规组ID
   */
  ComplianceId: number
  /**
   * 是否设置为非敏感字段
   */
  IsSetNonSensitiveField?: boolean
  /**
   * 调整后新的规则ID
   */
  DestRuleId?: number
  /**
   * 调整后新的分类ID
   */
  DestCategoryId?: number
  /**
   * 调整后新的分级ID
   */
  DestLevelId?: number
  /**
   * 调整前的规则ID

   */
  SrcRuleId?: number
  /**
   * 调整之前的分类id
   */
  SrcCategoryId?: number
  /**
   * 调整之前的分级id
   */
  SrcLevelId?: number
  /**
   * 识别方式
0-系统识别，1-人工打标
   */
  IdentifyType?: number
}

/**
 * rdb的资产统计结果
 */
export interface RDBAsset {
  /**
   * DB总数量
   */
  DbNums?: number
  /**
   * 敏感DB数量
   */
  SensitiveDbNums?: number
  /**
   * 表数量
   */
  TableNums?: number
  /**
   * 敏感表的数量
   */
  SensitiveTableNums?: number
  /**
   * 字段数量
   */
  FieldNums?: number
  /**
   * 敏感的字段数量
   */
  SensitiveFieldNums?: number
}

/**
 * DescribeAssetOverview返回参数结构体
 */
export interface DescribeAssetOverviewResponse {
  /**
   * 数据库实例id
   */
  DBInstanceNums?: number
  /**
   * 数据库个数
   */
  DBNums?: number
  /**
   * 表的个数
   */
  TableNums?: number
  /**
   * 字段个数
   */
  FieldNums?: number
  /**
   * 数据库实例的分布情况
   */
  DBInstanceDistribution?: Array<Note>
  /**
   * db分布情况
   */
  DBDistribution?: Array<Note>
  /**
   * cos桶的数量
   */
  BucketNums?: number
  /**
   * 文件个数
   */
  FileNums?: number
  /**
   * 用于对用户进行提示信息
   */
  Remark?: string
  /**
   * es实例数量
   */
  EsInstanceNums?: number
  /**
   * es索引数量
   */
  EsIndexNums?: number
  /**
   * es字段数量
   */
  EsFieldNums?: number
  /**
   * mongo实例数量
   */
  MongoInstanceNums?: number
  /**
   * mongo数据库数量
   */
  MongoDbNums?: number
  /**
   * mongo集合数量
   */
  MongoColNums?: number
  /**
   * mongo字段数量
   */
  MongoFieldNums?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 报表信息
 */
export interface ReportInfo {
  /**
   * 任务id
   */
  Id?: number
  /**
   * 报告名称
   */
  ReportName?: string
  /**
   * 报告类型（AssetSorting:资产梳理）
   */
  ReportType?: string
  /**
   * 报告周期（0单次 1每天 2每周 3每月）
   */
  ReportPeriod?: number
  /**
   * 执行计划 （0:单次报告 1:定时报告）
   */
  ReportPlan?: number
  /**
   * 报告导出状态（Success 成功, Failed 失败, InProgress 进行中）
   */
  ReportStatus?: string
  /**
   * 任务下次启动时间
   */
  TimingStartTime?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 完成时间
   */
  FinishedTime?: string
  /**
   * 子账号uin
   */
  SubUin?: string
  /**
   * 失败信息
   */
  FailedMessage?: string
  /**
   * 是否启用（0：否 1：是）
   */
  Enable?: number
  /**
   * 识别模板名称
   */
  ComplianceName?: string
  /**
   * 进度百分比
   */
  ProgressPercent?: number
  /**
   * 报告模版名称
   */
  ReportTemplateName?: string
}

/**
 * DescribeDSPAESDataAssetByComplianceId请求参数结构体
 */
export interface DescribeDSPAESDataAssetByComplianceIdRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 合规组id
   */
  ComplianceId: number
  /**
   * 云上还是自建

   */
  BuildType?: string
  /**
   * 数据源类型
   */
  DataSourceType?: string
}

/**
 * ModifyLevelName请求参数结构体
 */
export type ModifyLevelNameRequest = null

/**
 * ModifyDSPAAssessmentRiskLevel返回参数结构体
 */
export interface ModifyDSPAAssessmentRiskLevelResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * COS敏感数据扫描任务相关信息
 */
export interface DspaCOSDiscoveryTask {
  /**
   * 任务名称
   */
  Name?: string
  /**
   * 任务描述
   */
  Description?: string
  /**
   * 执行周期，0单次 1每天 2每周 3每月
   */
  Period?: number
  /**
   * 执行计划，0立即 1定时
   */
  Plan?: number
  /**
   * 任务开关；1 打开，0 关闭
   */
  Enable?: number
  /**
   * 数据源对象信息
   */
  DataSourceInfo?: DspaCOSDiscoveryTaskDataSourceInfo
  /**
   * 通用规则集开关，0 关闭，1 启用
   */
  GeneralRuleSetEnable?: number
  /**
   * 任务最新的一次执行结果信息，该字段用于查询任务列表接口
   */
  Result?: ScanTaskResult
  /**
   * 定时开始时间
   */
  TimingStartTime?: string
  /**
   * 关联分类模板是否更新
   */
  ComplianceUpdate?: boolean
}

/**
 * COS敏感数据识别规则
 */
export interface COSDataRule {
  /**
   * 只能取and 、or两个值其中之一，and：字段和内容同时满足，or：字段和内容满足其一.
默认值为or
   */
  Operator?: string
  /**
   * 规则内容
   */
  Contents?: Array<DataContent>
}

/**
 * DSPA数据源的数据库信息
 */
export interface DSPADataSourceDbInfo {
  /**
   * 数据库名称
   */
  DbName?: string
}

/**
 * DescribeMongoAssetSensitiveDistribution返回参数结构体
 */
export interface DescribeMongoAssetSensitiveDistributionResponse {
  /**
   * mongo的资产统计数据
   */
  MongoAsset?: MongoAsset
  /**
   * 涉敏top数据
   */
  TopAsset?: Array<TopAsset>
  /**
   * mongo的详情列表
   */
  MongoDetail?: Array<MongoAssetDBDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 模板详情
 */
export interface ComplianceGroupDetail {
  /**
   * 模板id
   */
  Id?: number
  /**
   * 模板名称
   */
  Name?: string
  /**
   * 描述
   */
  Description?: string
  /**
   * 模板类型
   */
  ComplianceGroupType?: number
  /**
   * 模板分级方案id
   */
  LevelGroupId?: number
  /**
   * 模板分级方案名称
   */
  LevelGroupName?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 更新时间
   */
  ModifyTime?: string
  /**
   * 是否开启别名
   */
  IsAlias?: boolean
}

/**
 * ModifyDSPACOSDiscoveryTask返回参数结构体
 */
export interface ModifyDSPACOSDiscoveryTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BindDSPAResourceDatabases返回参数结构体
 */
export interface BindDSPAResourceDatabasesResponse {
  /**
   * 绑定结果数组
   */
  DbTaskResults?: Array<DbTaskResult>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * database批量操作返回结果结构体
 */
export interface DbTaskResult {
  /**
   * 结果类型。
   */
  Result?: string
  /**
   * 结果描述。
   */
  ResultDescription?: string
  /**
   * 错误信息描述。
   */
  ErrDescription?: ErrDescription
  /**
   * 资源ID。
   */
  ResourceId?: string
  /**
   * database名称。
   */
  DbName?: string
}

/**
 * 数据资产报告-rdb的敏感数据规则分布
 */
export interface RuleDistribution {
  /**
   * 规则id
   */
  RuleId?: number
  /**
   * 规则名称
   */
  RuleName?: string
  /**
   * 分级id
   */
  LevelId?: number
  /**
   * 分级名称
   */
  LevelName?: string
  /**
   * 规则数量
   */
  RuleCnt?: number
}

/**
 * DecribeSuggestRiskLevelMatrix返回参数结构体
 */
export interface DecribeSuggestRiskLevelMatrixResponse {
  /**
   * 矩阵
   */
  SuggestRiskLevelMatrix?: Array<SuggestRiskLevelMatrix>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateDSPASelfBuildResource返回参数结构体
 */
export interface UpdateDSPASelfBuildResourceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPAAssessmentRiskDealedTrend返回参数结构体
 */
export interface DescribeDSPAAssessmentRiskDealedTrendResponse {
  /**
   * 趋势统计结果
   */
  Items?: Array<RiskDealedTrendItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRDBAssetSensitiveDistribution请求参数结构体
 */
export interface DescribeRDBAssetSensitiveDistributionRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 合规组id
   */
  ComplianceId: number
  /**
   * 查询的资产信息列表
   */
  AssetList: Array<AssetList>
}

/**
 * GetResourceConnectionStatus请求参数结构体
 */
export interface GetResourceConnectionStatusRequest {
  /**
   * DSPA实例ID。
   */
  DspaId: string
  /**
   * 资源类型。
   */
  MetaType: string
  /**
   * 资源所处地域。
   */
  ResourceRegion: string
  /**
   * 资源列表中展示的资源ID。
   */
  ResourceId: string
}

/**
 * DisableDSPAMetaResourceAuth请求参数结构体
 */
export interface DisableDSPAMetaResourceAuthRequest {
  /**
   * DSPA实例ID。
   */
  DspaId: string
  /**
   * 资源类型。
   */
  MetaType: string
  /**
   * 资源所处地域。
   */
  ResourceRegion: string
  /**
   * 用户云资源ID列表。
   */
  ResourceIDs: Array<string>
}

/**
 * 用于生成默认的风险级别矩阵
 */
export interface RiskMatrixLevel {
  /**
   * 名称
   */
  Name?: string
  /**
   * 就是id
   */
  Id?: number
  /**
   * 分数
   */
  Score?: number
}

/**
 * 数据资产报告页面-用户查询入参
 */
export interface AssetList {
  /**
   * 数据源类型
   */
  DataSourceType: string
  /**
   * 数据源信息
   */
  DataSourceInfo: Array<DataSourceInfo>
}

/**
 * CreateAssetSortingReportTask请求参数结构体
 */
export interface CreateAssetSortingReportTaskRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 识别模板id
   */
  ComplianceId: number
  /**
   * 选中资产列表
   */
  AssetList: Array<AssetList>
}

/**
 * CreateDSPAComplianceGroup返回参数结构体
 */
export interface CreateDSPAComplianceGroupResponse {
  /**
   * 合规组ID
   */
  ComplianceGroupId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDSPADiscoveryTask请求参数结构体
 */
export interface DeleteDSPADiscoveryTaskRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 任务ID
   */
  TaskId: number
  /**
   * 数据源类型
   */
  DataSourceType?: string
}

/**
 * DescribeDSPAAssessmentRiskDatasourceTop5返回参数结构体
 */
export interface DescribeDSPAAssessmentRiskDatasourceTop5Response {
  /**
   * 风险值
   */
  Items?: Array<RiskItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDSPADiscoveryTask返回参数结构体
 */
export interface ModifyDSPADiscoveryTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPAAssessmentRiskItemTop5请求参数结构体
 */
export interface DescribeDSPAAssessmentRiskItemTop5Request {
  /**
   * dspa实例id
   */
  DspaId: string
}

/**
 * ModifyDSPAESTaskResult请求参数结构体
 */
export interface ModifyDSPAESTaskResultRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 字段扫描结果ID
   */
  FieldResultId: number
  /**
   * 合规组ID
   */
  ComplianceId: number
  /**
   * 是否设置为非敏感字段
   */
  IsSetNonSensitiveField?: boolean
  /**
   * 调整后新的规则ID
   */
  DestRuleId?: number
  /**
   * 调整后新的分类ID
   */
  DestCategoryId?: number
  /**
   * 调整后新的分级ID
   */
  DestLevelId?: number
  /**
   * 调整前的规则id（系统识别的id）
   */
  SrcRuleId?: number
  /**
   * 调整前的规则id（系统识别的id）
   */
  SrcCategoryId?: number
  /**
   * 调整前的等级id
   */
  SrcLevelId?: number
  /**
   * 0系统识别，1人工打标
   */
  IdentifyType?: number
}

/**
 * DescribeDSPACOSDataAssetByComplianceId请求参数结构体
 */
export interface DescribeDSPACOSDataAssetByComplianceIdRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 合规组ID
   */
  ComplianceId: number
}

/**
 * CreateDSPAMetaResources返回参数结构体
 */
export interface CreateDSPAMetaResourcesResponse {
  /**
   * 本次更新的ID号，用来标记一次完整的更新过程。
   */
  UpdateId?: string
  /**
   * 资源类型，支持：cdb（云数据库 MySQL）、dcdb（TDSQL MySQL版）、mariadb（云数据库 MariaDB）、postgres（云数据库 PostgreSQL）、cynosdbpg（TDSQL-C PostgreSQL版）、cynosdbmysql（TDSQL-C MySQL版）
   */
  MetaType?: string
  /**
   * DSPA实例ID。
   */
  DspaId?: string
  /**
   * 资源所处地域。
   */
  ResourceRegion?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 扫描任务结果信息
 */
export interface ScanTaskResult {
  /**
   * 任务最新一次运行结果ID
   */
  Id?: number
  /**
   * 任务扫描结束的时间，格式如：2021-12-12 12:12:12
   */
  EndTime?: string
  /**
   * 任务状态，-1待触发 0待扫描 1扫描中 2扫描终止 3扫描成功 4扫描失败
   */
  Status?: number
  /**
   * 扫描任务结果展示，如果扫描失败，则显示失败原因
   */
  Result?: string
  /**
   * 结果描述
   */
  ResultDescription?: string
  /**
   * 结果建议
   */
  Suggestion?: string
}

/**
 * DescribeDSPADiscoveryRules请求参数结构体
 */
export interface DescribeDSPADiscoveryRulesRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 返回上限，默认值10， 最大值10000。
   */
  Limit?: number
  /**
   * 规则ID
   */
  RuleId?: number
  /**
   * 规则名称
   */
  Name?: string
  /**
   * 是否需要过滤别名
   */
  FilterRuleSource?: boolean
}

/**
 * RDB关系型数据库敏感数据资产统计
 */
export interface DspaRDBDataAssetCount {
  /**
   * 数组资产类型，0代表关系型数据库资产，1代表对象存储COS资产
   */
  DataAssetType?: number
  /**
   * 已扫描的数据库的个数
   */
  TotalDbCnt?: number
  /**
   * 数据库表的个数
   */
  TotalTableCnt?: number
  /**
   * 敏感数据类型个数
   */
  SensitiveCategoryCnt?: number
  /**
   * 敏感字段的个数
   */
  SensitiveFieldCnt?: number
  /**
   * 敏感等级分布
   */
  SensitiveLevel?: Array<SensitiveLevel>
  /**
   * 敏感数据库的个数
   */
  SensitiveDbCnt?: number
  /**
   * 敏感数据库表的个数
   */
  SensitiveTableCnt?: number
  /**
   * 扫描字段的个数
   */
  TotalFieldCnt?: number
  /**
   * 数据分类分布
   */
  CategoryDistributed?: Array<DspaDataCategoryDistributed>
}

/**
 * DeleteDSPACOSDiscoveryTask请求参数结构体
 */
export interface DeleteDSPACOSDiscoveryTaskRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 任务ID
   */
  TaskId: number
}

/**
 * 合规组中规则信息，用于合规组列表中规则信息展示
 */
export interface DspaDiscoveryComplianceGroupRule {
  /**
   * 敏感数据识别规则ID
   */
  RuleId?: number
  /**
   * 敏感数据识别规则名称
   */
  RuleName?: string
  /**
   * 敏感数据分类ID
   */
  CategoryId?: number
  /**
   * 敏感数据分级ID, 目前只支持高、中、低三级
   */
  LevelId?: number
  /**
   * 合规组对应的分类信息
   */
  CategoryName?: string
  /**
   * 分级名称
   */
  LevelRiskName?: string
}

/**
 * CreateDSPAAssessmentTask返回参数结构体
 */
export interface CreateDSPAAssessmentTaskResponse {
  /**
   * 评估任务Id，格式“task-xxxxxxxx”
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClassificationRuleCount返回参数结构体
 */
export interface DescribeClassificationRuleCountResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPAESDataAssetByComplianceId返回参数结构体
 */
export interface DescribeDSPAESDataAssetByComplianceIdResponse {
  /**
   * 概览统计结果
   */
  Stats?: ESDataAssetCountDto
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDSPAAssessmentRisk请求参数结构体
 */
export interface ModifyDSPAAssessmentRiskRequest {
  /**
   * DSPA实例Id，格式“dspa-xxxxxxxx”
   */
  DspaId: string
  /**
   * 评估任务Id，格式“task-xxxxxxxx”
   */
  TaskId: string
  /**
   * 风险项Id，格式“risk-xxxxxxxx”
   */
  RiskId: string
  /**
   * 风险项状态。（waiting:待处理，processing:处理中，finished:已处理）
   */
  Status: string
}

/**
 * 资源账户信息
 */
export interface DspaResourceAccount {
  /**
   * 资源ID。
   */
  ResourceId: string
  /**
   * 用户名。
   */
  UserName: string
  /**
   * 密码。
   */
  Password: string
}

/**
 * 敏感数据扫描任务相关信息
 */
export interface DspaDiscoveryTaskDetail {
  /**
   * 任务名称
   */
  Name?: string
  /**
   * 任务描述
   */
  Description?: string
  /**
   * 执行周期，0单次 1每天 2每周 3每月
   */
  Period?: number
  /**
   * 执行计划，0立即 1定时
   */
  Plan?: number
  /**
   * 任务开关；1 打开，0 关闭
   */
  Enable?: number
  /**
   * 元数据对象信息
   */
  DataSourceInfo?: DspaDiscoveryTaskDataSource
  /**
   * 通用规则集开关，0 关闭，1 启用
   */
  GeneralRuleSetEnable?: number
  /**
   * 当创建任务时，用户打开了通用规则集开关，则该字段就会保存默认合规组信息
   */
  DefaultComplianceInfo?: Array<ScanTaskComplianceInfo>
  /**
   * 该任务中用户选择的合规组信息列表
   */
  CustomComplianceInfo?: Array<ScanTaskComplianceInfo>
  /**
   * 定时开始时间
   */
  TimingStartTime?: string
}

/**
 * DeleteDSPAMetaResource返回参数结构体
 */
export interface DeleteDSPAMetaResourceResponse {
  /**
   * DSPA实例ID。
   */
  DspaId?: string
  /**
   * 删除结果。
   */
  Results?: Array<DspaTaskResult>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetDetailDataExportResult返回参数结构体
 */
export interface DescribeAssetDetailDataExportResultResponse {
  /**
   * 导出结果
   */
  ExportResult?: string
  /**
   * 导出文件地址
   */
  ExportFileUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDSPADiscoveryTaskResult返回参数结构体
 */
export interface DeleteDSPADiscoveryTaskResultResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 扫描任务数据源信息
 */
export interface DspaDiscoveryTaskDataSource {
  /**
   * 数据源ID
   */
  DataSourceId?: string
  /**
   * 用于传入的数据源的条件，可以选择多个数据库，数据库之间通过逗号分隔，如果为空，默认是全部数据库
   */
  Condition?: string
  /**
   * 代理地址
   */
  ProxyAddress?: Array<string>
  /**
   * 数据源名称
   */
  DataSourceName?: string
  /**
   * 资源所在地域
   */
  ResourceRegion?: string
  /**
   * 数据源类型
   */
  DataSourceType?: string
}

/**
 * DescribeRuleDetail请求参数结构体
 */
export type DescribeRuleDetailRequest = null

/**
 * ModifyDSPADiscoveryTask请求参数结构体
 */
export interface ModifyDSPADiscoveryTaskRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 任务ID
   */
  TaskId: number
  /**
   * 任务名称，1-60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字，Name不可重复
   */
  Name?: string
  /**
   * 任务描述，最大长度为1024个字符
   */
  Description?: string
  /**
   * 任务开关，0 关闭，1 启用
   */
  Enable?: number
  /**
   * 数据源ID
   */
  DataSourceId?: string
  /**
   * 用于传入的数据源的条件，目前只支持数据库，所以目前表示数据库的名称，最多添加5个数据库，之间通过逗号分隔
   */
  Condition?: string
  /**
   * 通用规则集开关；0 关闭，1 启用
   */
  GeneralRuleSetEnable?: number
  /**
   * 合规组ID列表，最多支持添加5个
   */
  ComplianceGroupIds?: Array<number | bigint>
  /**
   * 执行计划； 0立即 1定时，选择“立即”时，扫描周期只能选择单次
   */
  Plan?: number
  /**
   * 扫描周期；0单次 1每天 2每周 3每月
   */
  Period?: number
  /**
   * 任务定时启动时间，格式：2006-01-02 15:04:05
当执行计划（Plan字段）为”立即“时，定时启动时间不会生效，此场景下给该字段传值不会被保存。
   */
  TimingStartTime?: string
  /**
   * 资源所在地域
   */
  ResourceRegion?: string
  /**
   * 数据源类型，可取值如下：
cdb 表示云数据库 MySQL,
dcdb 表示TDSQL MySQL版,
mariadb 表示云数据库 MariaDB,
postgres 表示云数据库 PostgreSQL,
cynosdbpg 表示TDSQL-C PostgreSQL版,
cynosdbmysql 表示TDSQL-C MySQL版,
selfbuilt-db 表示自建数据库
   */
  DataSourceType?: string
}

/**
 * DeleteDSPAAssessmentTask返回参数结构体
 */
export interface DeleteDSPAAssessmentTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 合规组中规则信息，用于合规组列表中规则信息展示
 */
export interface DspaDiscoveryComplianceGroupRuleInfo {
  /**
   * 敏感数据识别规则ID
   */
  RuleId?: number
  /**
   * 敏感数据识别规则名称
   */
  RuleName?: string
  /**
   * 敏感数据分类ID
   */
  CategoryId?: number
  /**
   * 敏感数据分级ID, 目前只支持高、中、低三级
   */
  LevelId?: number
}

/**
 * CreateDSPASelfBuildMetaResource请求参数结构体
 */
export interface CreateDSPASelfBuildMetaResourceRequest {
  /**
   * Dspa实例ID。
   */
  DspaId: string
  /**
   * 自建数据库类型。目前支持的自建数据库类型按照协议进行区分，支持两种开源数据库协议：
mysql_like_proto -- Mysql协议类关系型数据库，
postgre_like_proto -- Postgre协议类关系型数据库。
其他闭源协议的数据库如SqlServer、Oracle等暂不支持。
   */
  MetaType: string
  /**
   * 资源所处地域。
   */
  ResourceRegion: string
  /**
   * 自建云资源ID。
   */
  ResourceId: string
  /**
   * 自建云资源的VPC ID。
   */
  ResourceUniqueVpcId: string
  /**
   * 自建云资源的Subnet ID。
   */
  ResourceUniqueSubnetId: string
  /**
   * 自建云资源所处的服务类型，可选：
cvm - 通过云服务器直接访问。
clb - 通过LB的方式进行访问。
   */
  ResourceAccessType: string
  /**
   * 可用于访问自建云资源的IP。
emr的连接不需要使用该字段
   */
  ResourceVip: string
  /**
   * 可用于访问自建云资源的端口。
emr的连接不需要使用该字段
   */
  ResourceVPort: number
  /**
   * 账户名。如果emr_hive的连接方式为“LDAP”，则复用该字段
   */
  UserName: string
  /**
   * 账户密码。如果emr_hive的连接方式为“LDAP”，则复用该字段
   */
  Password: string
  /**
   * 资源名称，1-60个字符。
   */
  ResourceName?: string
  /**
   * 实例类型
databse
sid
serviceName
   */
  InstanceType?: string
  /**
   * 实例值
   */
  InstanceValue?: string
  /**
   * 授权范围（all:授权整个数据源 manual:手动指定数据库）
   */
  AuthRange?: string
}

/**
 * ModifyDSPACategoryRelation请求参数结构体
 */
export interface ModifyDSPACategoryRelationRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 当前分类id
   */
  CategoryId: number
  /**
   * 合并到的分类id
   */
  MergedCategoryId: number
  /**
   * 合规组模板id
   */
  ComplianceId: number
}

/**
 * DescribeDSPAAssessmentRiskOverview返回参数结构体
 */
export interface DescribeDSPAAssessmentRiskOverviewResponse {
  /**
   * 风险总数
   */
  TotalCount: number
  /**
   * 高危风险数
   */
  HighRiskCount: number
  /**
   * 周同比
   */
  HighRiskWeekRatio: number
  /**
   * 高危风险数日环比
   */
  HighRiskDayRatio: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 扫描任务结果详情
 */
export interface DspaDiscoveryTaskResultDetail {
  /**
   * 任务ID
   */
  TaskId?: number
  /**
   * 扫描结果详情ID
   */
  FieldResultId?: number
  /**
   * 所属数据表名
   */
  TableName?: string
  /**
   * 字段名
   */
  FieldName?: string
  /**
   * 敏感数据分类ID
   */
  CategoryId?: number
  /**
   * 敏感数据分类名称
   */
  CategoryName?: string
  /**
   * 敏感数据分级ID
   */
  LevelId?: number
  /**
   * 敏感数据分级名称
   */
  LevelName?: string
  /**
   * 规则名称
   */
  RuleName?: string
  /**
   * 规则ID
   */
  RuleId?: number
  /**
   * 敏感数据分级分数
   */
  LevelRiskScore?: number
  /**
   * 保护措施
   */
  SafeGuard?: DspaSafeGuard
  /**
   * 分类路径
   */
  CategoryFullPath?: string
  /**
   * 模式名
   */
  SchemaName?: string
}

/**
 * DescribeLeafClassification请求参数结构体
 */
export type DescribeLeafClassificationRequest = null

/**
 * CreateClassificationRule请求参数结构体
 */
export type CreateClassificationRuleRequest = null

/**
 * DescribeDSPAAssessmentTemplates请求参数结构体
 */
export interface DescribeDSPAAssessmentTemplatesRequest {
  /**
   * DSPA实例Id，格式“dspa-xxxxxxxx”
   */
  DspaId: string
  /**
   * 偏移量。默认为0
   */
  Offset?: number
  /**
   * 结果集个数限制。默认为20，最大值为100
   */
  Limit?: number
  /**
   * 过滤项。支持模糊搜索：（TemplateId，TemplateName）支持过滤：Source：模板来源，system / userUseType：模板类型，auto，semi-auto，law等Status：模板启用状态，draft / launched，ComplianceId：关联的分类分级模板id
   */
  Filters?: Array<DspaAssessmentFilter>
}

/**
 * 高风险资产详情信息
 */
export interface HighRiskAssetsDetail {
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * 数据源类型
   */
  DataSourceType?: string
  /**
   * 数据源名称
   */
  DataSourceName?: string
  /**
   * 资产对象名称
   */
  AssetsName?: string
  /**
   * 高风险个数
   */
  HighRiskCount?: number
  /**
   * 风险类型
   */
  RiskType?: string
  /**
   * 总的风险个数
   */
  TotalRiskCount?: number
  /**
   * 风险面
   */
  RiskSide?: string
  /**
   * 地域
   */
  ResourceRegion?: string
}

/**
 * 分类分级扫描结果字段的保护措施
 */
export interface DspaSafeGuard {
  /**
   * 加密状态，可取值如下：
UNSET 未设置
DISABLE 规则设置未启用
ENABLE 规则设置并启用
   */
  Encrypt?: string
  /**
   * 脱敏状态，可取值如下：
UNSET 未设置
DISABLE 规则设置未启用
ENABLE 规则设置并启用
   */
  Desensitization?: string
}

/**
 * 某个分级单个信息
 */
export interface ItemLevel {
  /**
   * 分级标识名称，1-60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字，Name不可重复
   */
  LevelRiskName: string
  /**
   * 分级标识对应的风险分数值，1-10，最小为1，最大为10
   */
  LevelRiskScore: number
}

/**
 * 敏感数据识别规则扩展参数
 */
export interface DatagovRuleExtendParameter {
  /**
   * 扩展参数名称，目前支持如下两个扩展属性名称：
IsFullWordMatch，表示是否全文匹配，该Name对应的Value可取值为"true"或"false":，默认值为"false"，
IsIgnoreCase，表示是否忽略大小写，该Name对应的Value可取值为"true"或"false"，默认值为"true"
   */
  Name?: string
  /**
   * 扩展参数值
   */
  Value?: string
}

/**
 * ModifyDSPAClusterInfo返回参数结构体
 */
export interface ModifyDSPAClusterInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DSPA敏感数据扫描数据源条件
 */
export interface DiscoveryCondition {
  /**
   * RDB实例列表
   */
  RDBInstances?: Array<RDBInstance>
  /**
   * COS实例列表
   */
  COSInstances?: Array<COSInstance>
  /**
   * Mongo实例列表
   */
  NOSQLInstances?: Array<NOSQLInstance>
  /**
   * ES实例列表
   */
  ESInstances?: Array<ESInstance>
}

/**
 * ModifyStandardInfo返回参数结构体
 */
export interface ModifyStandardInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPAAssessmentRiskTemplateDetail请求参数结构体
 */
export interface DescribeDSPAAssessmentRiskTemplateDetailRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 模板id
   */
  TemplateId: number
  /**
   * 限制条数
   */
  Limit: number
  /**
   * 偏移量
   */
  Offset: number
}

/**
 * DescribeDSPADiscoveryTaskResultDetail返回参数结构体
 */
export interface DescribeDSPADiscoveryTaskResultDetailResponse {
  /**
   * 扫描结果详情列表
   */
  Items?: Array<DspaDiscoveryTaskResultDetail>
  /**
   * 符合条件的扫描结果详情记录数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDSPACategoryRelation返回参数结构体
 */
export interface ModifyDSPACategoryRelationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 风险级别详情的矩阵
 */
export interface RiskLevelMatrix {
  /**
   * 存储id
   */
  Id?: number
  /**
   * 分类分级levelID
   */
  SensitiveLevelId?: number
  /**
   * 分类分级名称
   */
  SensitiveLevelName?: string
  /**
   * 漏洞级别
   */
  VulnerabilityLevel?: string
  /**
   * 风险级别
   */
  RiskLevel?: string
}

/**
 * 扫描任务选择的合规组信息
 */
export interface ScanTaskComplianceInfo {
  /**
   * 合规组ID
   */
  ComplianceGroupId: number
  /**
   * 合规组名称
   */
  ComplianceGroupName: string
}

/**
 * DescribeDSPAAssessmentRiskDistributionOverview返回参数结构体
 */
export interface DescribeDSPAAssessmentRiskDistributionOverviewResponse {
  /**
   * 风险类型分布
   */
  RiskTypeDistribution?: Array<Note>
  /**
   * 风险详情分布
   */
  RiskDetailDistribution?: Array<Note>
  /**
   * 风险资产详情
   */
  RiskAssetsDistribution?: Array<Note>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * COS资源的桶信息
 */
export interface CosResourceItem {
  /**
   * cos数据源ID。
   */
  ResourceId: string
  /**
   * 桶所在地域。
   */
  ResourceRegion: string
  /**
   * 桶名称。
   */
  ResourceName: string
}

/**
 * CreateDSPACOSDiscoveryTask请求参数结构体
 */
export interface CreateDSPACOSDiscoveryTaskRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 任务名称，1-60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字，Name不可重复
   */
  Name: string
  /**
   * 数据源ID
   */
  DataSourceId: string
  /**
   * 任务开关，0 关闭，1 启用
   */
  Enable: number
  /**
   * 桶名
   */
  Bucket: string
  /**
   * 执行计划， 0立即 1定时，选择“立即”时，扫描周期只能选择单次。
   */
  Plan: number
  /**
   * 扫描周期，0单次 1每天 2每周 3每月
   */
  Period: number
  /**
   * 待扫描文件类型，用逗号隔开，格式如：[".txt", ".csv", ".log", ".xml",".html", ".json"]。
   */
  FileTypes: Array<string>
  /**
   * 文件大小上限，单位为KB，如1000, 目前单个文件最大只支持100MB（102400KB）
   */
  FileSizeLimit: number
  /**
   * 资源所在地域
   */
  ResourceRegion: string
  /**
   * 任务描述，最大长度为1024个字符
   */
  Description?: string
  /**
   * 通用规则集开关，0 关闭，1 启用
   */
  GeneralRuleSetEnable?: number
  /**
   * 合规组ID列表，最多支持添加5个
   */
  ComplianceGroupIds?: Array<number | bigint>
  /**
   * 任务定时启动时间，格式如：2006-01-02 15:04:05
当执行计划（Plan字段）为”立即“时，定时启动时间不会生效，此场景下给该字段传值不会被保存。
   */
  TimingStartTime?: string
}

/**
 * COS敏感数据识别规则
 */
export interface DspaDiscoveryCOSDataRule {
  /**
   * 只能取and 、or两个值其中之一，and：字段和内容同时满足，or：字段和内容满足其一.
默认值为or
   */
  Operator?: string
  /**
   * 规则内容
   */
  Contents?: Array<DspaDiscoveryDataContent>
}

/**
 * DescribeDSPAAssessmentNewDiscoveredRiskOverview请求参数结构体
 */
export interface DescribeDSPAAssessmentNewDiscoveredRiskOverviewRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 评估模板id
   */
  TemplateId: number
}

/**
 * 扫描规则内容
 */
export interface DspaDiscoveryDataContent {
  /**
   * 规则内容，可以是正则规则，关键词，
忽略词扥
   */
  RuleContent?: string
  /**
   * 是否区分大小写
false: 不区分大小写
true:区分大小写
   */
  IsIgnoreCase?: boolean
}

/**
 * DescribeDSPACOSDataAssetBuckets请求参数结构体
 */
export interface DescribeDSPACOSDataAssetBucketsRequest {
  /**
   * DSPA实例Id
   */
  DspaId: string
  /**
   * 合规组Id
   */
  ComplianceId: number
}

/**
 * RestartDSPAAssessmentTask请求参数结构体
 */
export interface RestartDSPAAssessmentTaskRequest {
  /**
   * DSPA实例Id，格式“dspa-xxxxxxxx”
   */
  DspaId: string
  /**
   * 评估任务Id，格式“task-xxxxxxxx”
   */
  TaskId: string
}

/**
 * VerifyDSPACOSRule请求参数结构体
 */
export interface VerifyDSPACOSRuleRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 待验证COS规则
   */
  COSRules: ScanTaskCOSRules
  /**
   * 待验证数据
   */
  Data: string
}

/**
 * DescribeReportTasks请求参数结构体
 */
export interface DescribeReportTasksRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 分页大小
   */
  Limit: number
  /**
   * 分页偏移量
   */
  Offset: number
  /**
   * 报表名称
   */
  ReportName?: string
}

/**
 * CreateDSPADiscoveryRule请求参数结构体
 */
export interface CreateDSPADiscoveryRuleRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 规则名称，1-60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字，Name不可重复
   */
  Name: string
  /**
   * 规则描述，最大长度为1024个字符
   */
  Description?: string
  /**
   * RDB类敏感数据识别规则
   */
  RDBRules?: DspaDiscoveryRDBRules
  /**
   * COS类敏感数据识别规则
   */
  COSRules?: DspaDiscoveryCOSRules
  /**
   * 规则状态；0 不启用, 1 启用
   */
  Status?: number
}

/**
 * AuthorizeDSPAMetaResources返回参数结构体
 */
export interface AuthorizeDSPAMetaResourcesResponse {
  /**
   * DSPA实例ID。
   */
  DspaId?: string
  /**
   * 授权结果。
   */
  Results?: Array<DspaTaskResult>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 敏感数据扫描任务识别规则详情
 */
export interface DspaDiscoveryRuleDetail {
  /**
   * 规则ID
   */
  RuleId?: number
  /**
   * 规则名称
   */
  Name?: string
  /**
   * 规则描述
   */
  Description?: string
  /**
   * 规则来源，取值：0 内置, 1 自定义
   */
  Source?: number
  /**
   * RDB规则详情
   */
  RDBRules?: DspaDiscoveryRDBRules
  /**
   * COS规则详情
   */
  COSRules?: DspaDiscoveryCOSRules
  /**
   * 0关闭，1开启
   */
  Status?: number
}

/**
 * ModifyDSPACategory请求参数结构体
 */
export interface ModifyDSPACategoryRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 数据分类ID
   */
  CategoryId: number
  /**
   * 敏感数据分类名称，1-60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字，Name不可重复
   */
  Name: string
}

/**
 * COS对象存储数据资产详情
 */
export interface DspaCOSDataAssetDetail {
  /**
   * 对象桶
   */
  BucketName?: string
  /**
   * 对象名称
   */
  FileName?: string
  /**
   * 规则名称
   */
  RuleName?: string
  /**
   * 出现次数
   */
  SensitiveDataCount?: number
  /**
   * 敏感数据分类
   */
  CategoryName?: string
  /**
   * 敏感等级
   */
  LevelRiskName?: string
  /**
   * KMS加密
   */
  KMSEncrypted?: boolean
  /**
   * 文件类型
   */
  FileType?: string
  /**
   * 文件大小
   */
  FileSize?: string
  /**
   * 敏感数据分级分数
   */
  LevelRiskScore?: number
  /**
   * 数据源ID
   */
  DataSourceId?: string
  /**
   * 规则id
   */
  RuleId?: number
  /**
   * 资源所在地域
   */
  ResourceRegion?: string
  /**
   * 分类ID
   */
  CategoryId?: number
  /**
   * 分级ID
   */
  LevelId?: number
  /**
   * 文件扫描结果ID
   */
  FileResultId?: number
  /**
   * 数据源名称
   */
  DataSourceName?: string
  /**
   * 分类路径
   */
  CategoryFullPath?: string
  /**
   * 0-系统识别
1-人工识别
   */
  IdentifyType?: number
  /**
   * 0-系统识别
1-人工识别
   */
  CheckStatus?: number
}

/**
 * 数据库信息
 */
export interface DBStatements {
  /**
   * 数据库名称
   */
  DBName: string
  /**
   * 数据库Schema
   */
  DBSchema: string
}

/**
 * DescribeDSPAAssessmentRiskLevelList返回参数结构体
 */
export interface DescribeDSPAAssessmentRiskLevelListResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 风险等级列表
   */
  RiskLevelList?: Array<RiskLevelRisk>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDSPADiscoveryTask请求参数结构体
 */
export interface CreateDSPADiscoveryTaskRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 任务名称，1-60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字，Name不可重复
   */
  Name: string
  /**
   * 数据源ID
   */
  DataSourceId: string
  /**
   * 任务开关，0 关闭，1 启用
   */
  Enable: number
  /**
   * 执行计划， 0立即 1定时，选择“立即”时，扫描周期只能选择单次
   */
  Plan: number
  /**
   * 扫描周期，0单次 1每天 2每周 3每月
   */
  Period: number
  /**
   * 资源所在地域
   */
  ResourceRegion: string
  /**
   * 数据源类型，可取值如下：
cdb 表示云数据库 MySQL,
dcdb 表示TDSQL MySQL版,
mariadb 表示云数据库 MariaDB,
postgres 表示云数据库 PostgreSQL,
cynosdbpg 表示TDSQL-C PostgreSQL版,
cynosdbmysql 表示TDSQL-C MySQL版,
selfbuilt-db 表示自建数据库
   */
  DataSourceType: string
  /**
   * 通用规则集开关，0 关闭，1 启用
   * @deprecated
   */
  GeneralRuleSetEnable?: number
  /**
   * 任务描述，最大长度为1024个字符
   */
  Description?: string
  /**
   * 用于传入的数据源的条件，目前只支持数据库，所以目前表示数据库的名称，选择多个数据库，之间通过逗号分隔，若不选，则默认选择全部数据库
   */
  Condition?: string
  /**
   * 合规组ID列表，最多支持添加5个
   */
  ComplianceGroupIds?: Array<number | bigint>
  /**
   * 任务定时启动时间，格式如：2006-01-02 15:04:05
当执行计划（Plan字段）为”立即“时，定时启动时间不会生效，此场景下给该字段传值不会被保存。
   */
  TimingStartTime?: string
  /**
   * random-随机，asc生序，desc降序
   */
  Order?: string
  /**
   * 抽样的条数，范围30-1000
   */
  Rows?: number
  /**
   * 抽样的排序字段
   */
  GlobalOrderField?: string
}

/**
 * 权限风险详情
 */
export interface PrivilegeRisk {
  /**
   * 账户名
   */
  AccountName?: Array<string>
  /**
   * 表名称
   */
  TableName?: string
  /**
   * 说明
   */
  Description?: string
}

/**
 * COS对象存储敏感数据资产统计
 */
export interface DspaCOSDataAssetCount {
  /**
   * 数组资产类型，0代表关系型数据库资产，1代表对象存储COS资产
   */
  DataAssetType?: number
  /**
   * 已扫描的存储桶的个数
   */
  TotalBucketCnt?: number
  /**
   * 对象总数
   */
  TotalObjectCnt?: number
  /**
   * 敏感数据类型个数
   */
  SensitiveCategoryCnt?: number
  /**
   * 敏感数据条数
   */
  SensitiveDataCnt?: number
  /**
   * 敏感等级分布
   */
  SensitiveLevel?: Array<SensitiveLevel>
  /**
   * 敏感存储桶个数
   */
  SensitiveBucketCnt?: number
  /**
   * 敏感对象个数
   */
  SensitiveObjectCnt?: number
  /**
   * 数据分类分布
   */
  CategoryDistributed?: Array<DspaDataCategoryDistributed>
}

/**
 * ES扫描任务结果详情
 */
export interface ESTaskResultDetail {
  /**
   * id
   */
  Id?: number
  /**
   * 任务id
   */
  TaskId?: number
  /**
   * 字段名称
   */
  FieldName?: string
  /**
   * 规则id
   */
  RuleId?: number
  /**
   * 规则名称
   */
  RuleName?: string
  /**
   * 分类id
   */
  CategoryId?: number
  /**
   * 分类名称
   */
  CategoryName?: string
  /**
   * 多级分类的路径
   */
  CategoryArr?: Array<string>
  /**
   * 分级id
   */
  LevelId?: number
  /**
   * 分级名称
   */
  LevelName?: string
  /**
   * 分级分数
   */
  LevelRiskScore?: number
}

/**
 * 云上资源元数据
 */
export interface DspaCloudResourceMeta {
  /**
   * 用户资源ID。
   */
  ResourceId: string
  /**
   * 资源名称。
   */
  ResourceName: string
  /**
   * 资源VIP。
   */
  ResourceVip: string
  /**
   * 资源端口。
   */
  ResourceVPort: number
  /**
   * 资源被创建时间。
   */
  ResourceCreateTime: string
  /**
   * 用户资源VPC ID 字符串。
   */
  ResourceUniqueVpcId: string
  /**
   * 用户资源Subnet ID 字符串。
   */
  ResourceUniqueSubnetId: string
}

/**
 * DescribeESAssetSensitiveDistribution请求参数结构体
 */
export interface DescribeESAssetSensitiveDistributionRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 合规组id
   */
  ComplianceId: number
  /**
   * 查询的资产信息列表
   */
  AssetList: Array<AssetList>
}

/**
 * DeleteCosMetaResource返回参数结构体
 */
export interface DeleteCosMetaResourceResponse {
  /**
   * 结果集合。
   */
  Results?: Array<DspaTaskResult>
  /**
   * DSPA实例ID。
   */
  DspaId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListDSPAMetaResources请求参数结构体
 */
export interface ListDSPAMetaResourcesRequest {
  /**
   * DSPA实例ID。
   */
  DspaId: string
  /**
   * 过滤项。
可过滤值包括：
ResoureRegion - 资源所处地域，需要填写完整地域名称，不支持模糊匹配。

AuthStatus - authorized（已授权）、unauthorized（未授权）、deleted（资源已被删除），不支持模糊匹配，需要填写完整。

BuildType - cloud（云原生资源）、build（用户自建资源），不支持模糊匹配，需要填写完整。

MetaType - cdb（云数据Mysql）、dcdb（TDSQL MySQL版）、mariadb（云数据库 MariaDB）、postgres（云数据库 PostgreSQL）、cynosdbmysql（TDSQL-C MySQL版）、cos（对象存储）、mysql_like_proto（自建型Mysql协议类关系型数据库）、postgre_like_proto（自建型Postgre协议类关系型数据库）。

ResourceId - 资源ID，支持模糊搜索。

CvmID - 自建资源对应CvmId，如：ins-xxxxxxxx。该字段用于casb调用dsgc接口时，根据cvmId和vport确定具体的自建实例
   */
  Filters?: Array<DspaDataSourceMngFilter>
  /**
   * 分页步长，默认为100。
   */
  Limit?: number
  /**
   * 分页偏移量，默认为0。
   */
  Offset?: number
  /**
   * 资源绑定状态过滤，默认为全部
   */
  BindType?: string
}

/**
 * ModifyDSPAAssessmentRiskTemplate返回参数结构体
 */
export interface ModifyDSPAAssessmentRiskTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 风险级别趋势项
 */
export interface RiskLevelTrendItem {
  /**
   * 日期
   */
  Date: string
  /**
   * 高风险数量
   */
  High: number
  /**
   * 中风险数量
   */
  Medium: number
  /**
   * 低风险数量
   */
  Low: number
  /**
   * 总数
   */
  Total: number
}

/**
 * DescribeDSPAESDiscoveryTaskResultDetail请求参数结构体
 */
export interface DescribeDSPAESDiscoveryTaskResultDetailRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 任务ID
   */
  TaskId: number
  /**
   * 合规组ID
   */
  ComplianceId: number
  /**
   * 偏移量，默认为0
   */
  Offset: number
  /**
   * 返回数量，默认值为20，最大值为100
   */
  Limit: number
  /**
   * 多级分类的分类ID集合
   */
  CategoryIdList?: Array<number | bigint>
  /**
   * 敏感数据分级ID
   */
  LevelId?: number
  /**
   * 数据库名称
   */
  DbName?: string
}

/**
 * NOSQL类型的数据源实例
 */
export interface NOSQLInstance {
  /**
   * 数据源id
   */
  DataSourceId: string
  /**
   * cdb, dcdb, mariadb, postgres, cynosdbpg, cynosdbmysql, cos, mysql_like_proto, postgre_like_proto,mongodb
   */
  DataSourceType: string
  /**
   * 资源所在地域
   */
  ResourceRegion: string
  /**
   * 根据实例创建的敏感数据识别扫描任务Id
   */
  DiscoveryTaskId?: number
  /**
   * 敏感数据识别任务实例id
   */
  DiscoveryTaskInstanceID?: number
}

/**
 * DeleteDSPADiscoveryTaskResult请求参数结构体
 */
export interface DeleteDSPADiscoveryTaskResultRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 扫描数据库结果ID
   */
  DbResultId: number
}

/**
 * ModifyLevelInfo返回参数结构体
 */
export interface ModifyLevelInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 分类分级任务RDB数据规则
 */
export interface DspaDiscoveryRDBRules {
  /**
   * 规则状态；0 不启用, 1 启用
   */
  Status: number
  /**
   * 只能取and 、or两个值其中之一，and：字段和内容同时满足，or：字段和内容满足其一
   */
  MatchOperator: string
  /**
   * 字段名包含规则，最大支持选择9项
   */
  MetaRule: DspaDiscoveryDataRules
  /**
   * 内容包含规则，最大支持选择9项
   */
  ContentRule: DspaDiscoveryDataRules
}

/**
 * DescribeDSPACOSDataAssetByComplianceId返回参数结构体
 */
export interface DescribeDSPACOSDataAssetByComplianceIdResponse {
  /**
   * 符合条件的COS存储对象的敏感数据资产统计记录
注意：此字段可能返回 null，表示取不到有效值。
   */
  Stats?: DspaCOSDataAssetCount
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDSPAAssessmentRiskTemplate返回参数结构体
 */
export interface CreateDSPAAssessmentRiskTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPACOSDataAssetBuckets返回参数结构体
 */
export interface DescribeDSPACOSDataAssetBucketsResponse {
  /**
   * COS对象存储敏感数据资产已扫描的桶集合。
   */
  Buckets?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPADiscoveryTaskDetail请求参数结构体
 */
export interface DescribeDSPADiscoveryTaskDetailRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 任务ID
   */
  TaskId: number
}

/**
 * DescribeDSPARDBDataAssetByComplianceId返回参数结构体
 */
export interface DescribeDSPARDBDataAssetByComplianceIdResponse {
  /**
   * 符合条件的RDB关系数据库敏感数据资产统计记录
注意：此字段可能返回 null，表示取不到有效值。
   */
  Stats?: DspaRDBDataAssetCount
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateNewClassification返回参数结构体
 */
export interface CreateNewClassificationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListDSPAClusters返回参数结构体
 */
export interface ListDSPAClustersResponse {
  /**
   * 资源总数。
   */
  TotalCount?: number
  /**
   * 资源列表。
   */
  InstanceList?: Array<DspaInstance>
  /**
   * 是否被拒绝访问所有dspa实例资源。
   */
  DenyAll?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CopyDSPATemplate请求参数结构体
 */
export interface CopyDSPATemplateRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 合规组ID
   */
  TemplateId: number
}

/**
 * VerifyDSPADiscoveryRule请求参数结构体
 */
export interface VerifyDSPADiscoveryRuleRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 只能取and 、or两个值其中之一，and：字段和内容同时满足，or：字段和内容满足其一
   */
  MatchOperator: string
  /**
   * 字段名包含规则，最大支持选择9项
   */
  MetaRule?: DataRules
  /**
   * 内容包含规则，最大支持选择9项
   */
  ContentRule?: DataRules
  /**
   * 验证规则字段名，最大长度为1024个字符
   */
  VerifyMeta?: string
  /**
   * 验证规则数据内容，最大长度为1024个字符
   */
  VerifyContent?: string
}

/**
 * 风险等级列表
 */
export interface RiskLevelRisk {
  /**
   * 风险id
   */
  Id?: number
  /**
   * 风险等级列表
   */
  RiskLevelName?: string
  /**
   * 风险级别描述
   */
  RiskLevelDescription?: string
  /**
   * 引用的分类分级模板
   */
  IdentifyComplianceName?: string
  /**
   * 类型，区分自定义还是系统内置
   */
  Type?: string
}

/**
 * DescribeDSPAAssessmentRiskOverview请求参数结构体
 */
export interface DescribeDSPAAssessmentRiskOverviewRequest {
  /**
   * dspa实例id
   */
  DspaId: string
}

/**
 * DeleteDSPACOSDiscoveryTaskResult返回参数结构体
 */
export interface DeleteDSPACOSDiscoveryTaskResultResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPAAssessmentRiskAmountOverview返回参数结构体
 */
export interface DescribeDSPAAssessmentRiskAmountOverviewResponse {
  /**
   * 风险总数
   */
  TotalRiskCount?: number
  /**
   * 受影响的资产数
   */
  TotalAffectedAssetCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAssetSortingReportRetryTask返回参数结构体
 */
export interface CreateAssetSortingReportRetryTaskResponse {
  /**
   * 任务id
   */
  ReportTaskId?: number
  /**
   * 提示信息
   */
  Remark?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPACategories返回参数结构体
 */
export interface DescribeDSPACategoriesResponse {
  /**
   * 敏感数据分类列表
   */
  Items?: Array<DataCategory>
  /**
   * 符合条件的敏感数据分类数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPADiscoveryRules返回参数结构体
 */
export interface DescribeDSPADiscoveryRulesResponse {
  /**
   * 规则ID
   */
  TotalCount?: number
  /**
   * 规则集合
   */
  Items?: Array<DspaDiscoveryRuleDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLevelState返回参数结构体
 */
export interface ModifyLevelStateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopDSPADiscoveryTask请求参数结构体
 */
export interface StopDSPADiscoveryTaskRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 任务ID
   */
  TaskId: number
}

/**
 * 风险面的分布
 */
export interface RiskSideDistributed {
  /**
   * 风险面
   */
  AssessmentRiskSide?: Note
  /**
   * 风险类型
   */
  AssessmentRisk?: Array<Note>
}

/**
 * 分级单项信息
 */
export interface LevelItem {
  /**
   * 分级ID
   */
  LevelId: number
  /**
   * 分级组ID
   */
  LevelGroupId: number
  /**
   * 分级标识名称，支持内置分级，内置分级取值：高，中，低，也可以自定义
   */
  LevelRiskName: string
  /**
   * 分级风险分数，1-10，最小值为1，最大值为10
   */
  LevelRiskScore: number
}

/**
 * DecribeSuggestRiskLevelMatrix请求参数结构体
 */
export interface DecribeSuggestRiskLevelMatrixRequest {
  /**
   * dspaId

   */
  DspaId: string
  /**
   * 分类分级等级列表
   */
  SensitiveLevelList: Array<RiskMatrixLevel>
  /**
   * 脆弱项等级列表
   */
  VulnerabilityLevelList: Array<RiskMatrixLevel>
}

/**
 * 数据资产报告-cos的资产详情
 */
export interface AssetCosDetail {
  /**
   * 桶的名
   */
  Bucket?: string
  /**
   * 数据源类型
   */
  DataType?: string
  /**
   * 文件的个数
   */
  FileNums?: number
  /**
   * 敏感的文件个数
   */
  SensitiveFileNums?: number
  /**
   * 敏感分布
   */
  DistributionData?: Array<Note>
  /**
   * cos文件的敏感数据个数
   */
  MatchedNum?: number
}

/**
 * mongo的资产统计结果
 */
export interface MongoAsset {
  /**
   * DB总数量
   */
  DbNums?: number
  /**
   * 敏感DB数量
   */
  SensitiveDbNums?: number
  /**
   * 集合数量
   */
  ColNums?: number
  /**
   * 敏感集合的数量
   */
  SensitiveColNums?: number
  /**
   * 字段数量
   */
  FieldNums?: number
  /**
   * 敏感的字段数量
   */
  SensitiveFieldNums?: number
}

/**
 * 最新的风险详情信息数据
 */
export interface RiskItemInfo {
  /**
   * 最新风险项id
   */
  Id?: number
  /**
   * 数据源id
   */
  DataSourceId?: string
  /**
   * 数据源名称
   */
  DataSourceName?: string
  /**
   * 数据源类型
   */
  DataSourceType?: string
  /**
   * 资源地域
   */
  ResourceRegion?: string
  /**
   * 资产名称
   */
  AssetName?: string
  /**
   * 风险类型
   */
  RiskType?: string
  /**
   * 风险项
   */
  RiskName?: string
  /**
   * 风险级别
   */
  RiskLevel?: string
  /**
   * 风险描述
   */
  RiskDescription?: string
  /**
   * 建议措施
   */
  SuggestAction?: string
  /**
   * 安全产品（可能有多个）
   */
  SecurityProduct?: Array<SecurityProduct>
  /**
   * 状态(waiting:待处理，processing:处理中，finished:已处理，ignored:已忽略)
   */
  Status?: number
  /**
   * 扫描时间
   */
  ScanTime?: string
  /**
   * 最后处置时间
   */
  LastProcessTime?: string
  /**
   * 分类分级合规组Id
   */
  IdentifyComplianceId?: number
  /**
   * 类型
   */
  ItemSubType?: string
  /**
   * 风险面
   */
  RiskSide?: string
  /**
   * API安全风险链接
   */
  APIRiskLinkURL?: string
  /**
   * 备注
   */
  Remark?: string
}

/**
 * DescribeDSPAAssessmentRiskProcessHistory返回参数结构体
 */
export interface DescribeDSPAAssessmentRiskProcessHistoryResponse {
  /**
   * 处理的历史
   */
  ProcessHistory?: Array<ProcessHistory>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPAESDataAssetDetail返回参数结构体
 */
export interface DescribeDSPAESDataAssetDetailResponse {
  /**
   * 总的个数
   */
  TotalCount?: number
  /**
   * 概览详情列表
   */
  Details?: Array<ESDataAssetDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPAAssessmentTasks返回参数结构体
 */
export interface DescribeDSPAAssessmentTasksResponse {
  /**
   * 符合条件的评估任务数目
   */
  TotalCount?: number
  /**
   * 评估任务列表
   */
  Items?: Array<AssessmentTask>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPACOSDiscoveryTaskFiles请求参数结构体
 */
export interface DescribeDSPACOSDiscoveryTaskFilesRequest {
  /**
   * DSPA实例Id
   */
  DspaId: string
  /**
   * 扫描任务ID
   */
  TaskId: number
  /**
   * 扫描Bucket任务结果ID
   */
  BucketResultId: number
}

/**
 * CreateDSPALevelGroup返回参数结构体
 */
export interface CreateDSPALevelGroupResponse {
  /**
   * 分级组ID
   */
  LevelGroupId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPAAssessmentRiskDistributionOverview请求参数结构体
 */
export interface DescribeDSPAAssessmentRiskDistributionOverviewRequest {
  /**
   * dspa实例Id
   */
  DspaId: string
  /**
   * 评估模板id
   */
  TemplateId: number
  /**
   * 风险资产分布的过滤条件
（rdb，cos，不传就筛选全部）
   */
  Filter?: string
}

/**
 * DeleteDSPAMetaResource请求参数结构体
 */
export interface DeleteDSPAMetaResourceRequest {
  /**
   * DSPA实例ID。
   */
  DspaId: string
  /**
   * 用户云资源ID。
   */
  ResourceIDs: Array<string>
}

/**
 * ModifyDSPADiscoveryRule请求参数结构体
 */
export interface ModifyDSPADiscoveryRuleRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 规则名称，1-60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字，Name不可重复
   */
  Name: string
  /**
   * 规则ID
   */
  RuleId: number
  /**
   * 规则描述，最大长度为1024个字符
   */
  Description?: string
  /**
   * RDB类敏感数据识别规则
   */
  RDBRules?: ScanTaskRDBRules
  /**
   * COS类敏感数据识别规则
   */
  COSRules?: ScanTaskCOSRules
  /**
   * 规则状态
   */
  Status?: number
}

/**
 * DescribeRDBAssetSensitiveDistribution返回参数结构体
 */
export interface DescribeRDBAssetSensitiveDistributionResponse {
  /**
   * rdb的资产统计数据
   */
  RDBAsset?: RDBAsset
  /**
   * 涉敏top数据
   */
  TopAsset?: Array<TopAsset>
  /**
   * rdb的详情列表
   */
  RDBDetail?: Array<AssetDBDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDSPACategory返回参数结构体
 */
export interface ModifyDSPACategoryResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDSPAComplianceRules请求参数结构体
 */
export interface CreateDSPAComplianceRulesRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 分类id
   */
  CategoryId: number
  /**
   * 合规组模板id
   */
  ComplianceId: number
  /**
   * 规则列表
   */
  Rules: Array<CreateComplianceRules>
}

/**
 * DescribeReportTaskDownloadUrl返回参数结构体
 */
export interface DescribeReportTaskDownloadUrlResponse {
  /**
   * 下载链接集合
   */
  DownloadUrlSet?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPAAssessmentRisks返回参数结构体
 */
export interface DescribeDSPAAssessmentRisksResponse {
  /**
   * 符合条件的评估风险项数目
   */
  TotalCount?: number
  /**
   * 评估风险项列表
   */
  Items?: Array<AssessmentRisk>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateClassificationRule返回参数结构体
 */
export interface CreateClassificationRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询绑定的db信息
 */
export interface DbInfo {
  /**
   * 数据库名称
   */
  DbName?: string
  /**
   * 绑定的状态
   */
  ValidStatus?: string
  /**
   * 绑定的类型
   */
  BindType?: string
}

/**
 * ModifyClassificationRule返回参数结构体
 */
export interface ModifyClassificationRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateIdentifyRuleAnotherName返回参数结构体
 */
export interface CreateIdentifyRuleAnotherNameResponse {
  /**
   * 创建的别名规则id
   */
  AliasRuleId?: number
  /**
   * 别名规则名称
   */
  AliasRuleName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPACategoryTree返回参数结构体
 */
export interface DescribeDSPACategoryTreeResponse {
  /**
   * 分类树json
   */
  ResultJson?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBindDBList请求参数结构体
 */
export interface DescribeBindDBListRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 数据源类型
   */
  DataSourceType?: string
  /**
   * 数据源ID
   */
  DataSourceId?: string
}

/**
 * COS扫描任务结果详情
 */
export interface DspaDiscoveryCOSTaskResultDetail {
  /**
   * 任务ID
   */
  TaskId?: number
  /**
   * 扫描File结果详情ID
   */
  FileResultId?: number
  /**
   * 所属桶名
   */
  BucketName?: string
  /**
   * 所属文件名
   */
  FileName?: string
  /**
   * 敏感数据分类ID
   */
  CategoryId?: number
  /**
   * 敏感数据分类名称
   */
  CategoryName?: string
  /**
   * 敏感数据分级ID
   */
  LevelId?: number
  /**
   * 敏感数据分级名称
   */
  LevelName?: string
  /**
   * KMS加密，true or false
   */
  KMSEncrypted?: boolean
  /**
   * 规则名称
   */
  RuleName?: string
  /**
   * 规则ID
   */
  RuleId?: number
  /**
   * 敏感数据分级分数
   */
  LevelRiskScore?: number
  /**
   * 文件大小，单位为KB
   */
  FileSize?: number
  /**
   * 文件类型，如csv，txt
   */
  FileType?: string
  /**
   * 敏感数据出现次数
   */
  SensitiveDataCount?: number
  /**
   * 分类树路径
   */
  CategoryFullPath?: Array<string>
  /**
   * 分类树路径
   */
  CategoryArr?: Array<string>
  /**
   * 合规组ID
   */
  ComplianceId?: number
  /**
   * 结果id
   */
  ResultId?: number
}

/**
 * CreateDSPADbMetaResources请求参数结构体
 */
export interface CreateDSPADbMetaResourcesRequest {
  /**
   * DSPA实例ID。
   */
  DspaId: string
  /**
   * 资源类型，支持：cdb（云数据库 MySQL）、dcdb（TDSQL MySQL版）、mariadb（云数据库 MariaDB）、postgres（云数据库 PostgreSQL）、cynosdbpg（TDSQL-C PostgreSQL版）、cynosdbmysql（TDSQL-C MySQL版）
   */
  MetaType: string
  /**
   * 资源所处地域。
   * @deprecated
   */
  ResourceRegion?: string
  /**
   * 用来标记本次更新是否已经是最后一次，可选值：continue（后续还需要更新）、finished（本次是最后一次更新）。
   * @deprecated
   */
  UpdateStatus?: string
  /**
   * 本次更新的ID号，用来标记一次完整的更新过程。
   * @deprecated
   */
  UpdateId?: string
  /**
   * 云上资源列表。
   * @deprecated
   */
  Items?: Array<DspaCloudResourceMeta>
  /**
   * 必填，云数据库资源列表。
   */
  CloudResourceItems?: Array<CloudResourceItem>
}

/**
 * ModifyDSPACOSDiscoveryTask请求参数结构体
 */
export interface ModifyDSPACOSDiscoveryTaskRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 任务ID
   */
  TaskId: number
  /**
   * 任务名称，1-60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字，Name不可重复
   */
  Name?: string
  /**
   * 任务描述，最大长度为1024个字符
   */
  Description?: string
  /**
   * 任务开关，0 关闭，1 启用
   */
  Enable?: number
  /**
   * 通用规则集开关；0 关闭，1 启用
   */
  GeneralRuleSetEnable?: number
  /**
   * 合规组ID列表，最多支持添加5个
   */
  ComplianceGroupIds?: Array<number | bigint>
  /**
   * 执行计划； 0立即 1定时，选择“立即”时，扫描周期只能选择单次
   */
  Plan?: number
  /**
   * 扫描周期；0单次 1每天 2每周 3每月
   */
  Period?: number
  /**
   * 任务定时启动时间，格式：2006-01-02 15:04:05
当执行计划（Plan字段）为”立即“时，定时启动时间不会生效，此场景下给该字段传值不会被保存。
   */
  TimingStartTime?: string
  /**
   * 待扫描文件类型，用逗号隔开，格式如：[".txt", ".csv", ".log", ".xml",".html", ".json"]。
   */
  FileTypes?: Array<string>
  /**
   * 文件大小上限，单位为KB，如1000, 目前单个文件最大只支持100MB（102400KB）
   */
  FileSizeLimit?: number
  /**
   * 资源所在地域
   */
  ResourceRegion?: string
}

/**
 * DescribeDSPACategoryRules请求参数结构体
 */
export interface DescribeDSPACategoryRulesRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 分类id
   */
  CategoryId: number
  /**
   * 合规组模板id
   */
  ComplianceId: number
}

/**
 * DescribeDSPAComplianceGroupDetail请求参数结构体
 */
export interface DescribeDSPAComplianceGroupDetailRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 模板id
   */
  ComplianceId: number
}

/**
 * CreateDSPADbMetaResources返回参数结构体
 */
export interface CreateDSPADbMetaResourcesResponse {
  /**
   * 本次更新的ID号，用来标记一次完整的更新过程。
   * @deprecated
   */
  UpdateId?: string
  /**
   * 资源类型，支持：cdb（云数据库 MySQL）、dcdb（TDSQL MySQL版）、mariadb（云数据库 MariaDB）、postgres（云数据库 PostgreSQL）、cynosdbpg（TDSQL-C PostgreSQL版）、cynosdbmysql（TDSQL-C MySQL版）
   */
  MetaType?: string
  /**
   * DSPA实例ID。
   */
  DspaId?: string
  /**
   * 资源所处地域。
   * @deprecated
   */
  ResourceRegion?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDSPAClusterInfo请求参数结构体
 */
export interface ModifyDSPAClusterInfoRequest {
  /**
   * DSPA实例ID。
   */
  DspaId: string
  /**
   * DSPA实例名。1-60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字。
   */
  DspaName?: string
  /**
   * DSPA实例描述信息。最长1024个字符。
   */
  DspaDescription?: string
}

/**
 * ListDSPACosMetaResources请求参数结构体
 */
export interface ListDSPACosMetaResourcesRequest {
  /**
   * 实例Id
   */
  DspaId: string
  /**
   * 过滤数组。支持的Name：
Bucket - 桶名，支持模糊匹配

ResoureRegion - 资源所处地域，需要填写完整地域名称，不支持模糊匹配。

Valid -- 资源是否有效，"1" 表示有效，"0"表示无效。
   */
  Filters?: Array<DspaDataSourceMngFilter>
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 返回数量，默认为100。
   */
  Limit?: number
  /**
   * 资源绑定状态过滤，默认为全部
   */
  BindType?: string
}

/**
 * DescribeDSPATaskResultDataSample返回参数结构体
 */
export interface DescribeDSPATaskResultDataSampleResponse {
  /**
   * 数据样本列表，最多10条数据
   */
  Items?: Array<DspaFieldResultDataSample>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDSPALevelGroup请求参数结构体
 */
export interface CreateDSPALevelGroupRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 分级组名称，唯一性约束，最多60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字，Name不可重复
   */
  Name: string
  /**
   * 分级标识配置
   */
  ItemLevels: Array<ItemLevel>
  /**
   * 分级组描述，最多1024字符
   */
  Description?: string
}

/**
 * DescribeDSPAComplianceGroups返回参数结构体
 */
export interface DescribeDSPAComplianceGroupsResponse {
  /**
   * 合规组列表
   */
  Items?: Array<DspaDiscoveryComplianceGroupInfo>
  /**
   * 符合条件的合规组列表数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CopyDSPATemplate返回参数结构体
 */
export interface CopyDSPATemplateResponse {
  /**
   * 模板id
   */
  TemplateId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDSPACOSDiscoveryTask返回参数结构体
 */
export interface DeleteDSPACOSDiscoveryTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 处理历史
 */
export interface ProcessHistory {
  /**
   * 处理时间
   */
  Time?: string
  /**
   * 状态
   */
  Status?: number
  /**
   * 处理人
   */
  Handler?: string
  /**
   * 备注
   */
  Note?: string
}

/**
 * DescribeDSPAAssessmentRiskDealedOverview请求参数结构体
 */
export interface DescribeDSPAAssessmentRiskDealedOverviewRequest {
  /**
   * dspa实例id
   */
  DspaId: string
}

/**
 * 账户风险
 */
export interface AccountRisk {
  /**
   * id（可不参考）
   */
  Id?: string
  /**
   * 风险账户
   */
  RiskAccount?: string
}

/**
 * DescribeDSPACategoryTreeWithRules返回参数结构体
 */
export interface DescribeDSPACategoryTreeWithRulesResponse {
  /**
   * 分类树json
   */
  ResultJson?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPAAssessmentRiskLevelDetail请求参数结构体
 */
export interface DescribeDSPAAssessmentRiskLevelDetailRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 风险级别id
   */
  RiskLevelId: number
}

/**
 * DescribeLeafClassification返回参数结构体
 */
export interface DescribeLeafClassificationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPAAssessmentRiskLevelTrend请求参数结构体
 */
export interface DescribeDSPAAssessmentRiskLevelTrendRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 开始日期
   */
  StartTime: string
  /**
   * 结束时日期
   */
  EndTime: string
  /**
   * 评估模板id
   */
  TemplateId?: string
}

/**
 * 敏感数据识别规则集
 */
export interface DataRules {
  /**
   * 操作符；只能取and, or的其中一种
   */
  Operator: string
  /**
   * 规则
   */
  Contents: Array<DataRule>
}

/**
 * DescribeDSPAAssessmentProcessingRiskOverview请求参数结构体
 */
export interface DescribeDSPAAssessmentProcessingRiskOverviewRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 评估模板id
   */
  TemplateId: number
}

/**
 * 数据资产报告-cos的敏感资产报告详情
 */
export interface CosAsset {
  /**
   * 桶的个数
   */
  BucketNums?: number
  /**
   * 敏感桶的个数
   */
  SensitiveBucketNums?: number
  /**
   * 文件个数
   */
  FileNums?: number
  /**
   * 敏感文件的个数
   */
  SensitiveFileNums?: number
}

/**
 * DescribeDSPAAssessmentRiskSideList返回参数结构体
 */
export interface DescribeDSPAAssessmentRiskSideListResponse {
  /**
   * 风险面列表
   */
  RiskSideItmeList?: Array<Note>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 敏感等级分布
 */
export interface SensitiveLevel {
  /**
   * 分级标识ID
   */
  LevelId: number
  /**
   * 分级标识统计
   */
  LevelCnt: number
  /**
   * 分级标识名称
   */
  LevelRiskName: string
  /**
   * 分级标识分数
   */
  LevelRiskScore: number
}

/**
 * CreateAssetSortingReportRetryTask请求参数结构体
 */
export interface CreateAssetSortingReportRetryTaskRequest {
  /**
   * 任务id
   */
  ReportTaskId: number
  /**
   * dspa实例id
   */
  DspaId: string
}

/**
 * CreateDSPADiscoveryRule返回参数结构体
 */
export interface CreateDSPADiscoveryRuleResponse {
  /**
   * 规则ID
   */
  RuleId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetOverview请求参数结构体
 */
export interface DescribeAssetOverviewRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 合规组id
   */
  ComplianceId: number
  /**
   * 查询的资产信息列表
   */
  AssetList: Array<AssetList>
}

/**
 * RestartDSPAAssessmentTask返回参数结构体
 */
export interface RestartDSPAAssessmentTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPAAssessmentHighRiskTop10Overview返回参数结构体
 */
export interface DescribeDSPAAssessmentHighRiskTop10OverviewResponse {
  /**
   * 含高风险资产TOP10的列表数据
   */
  AssetsList?: Array<HighRiskAssetsDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DSPA分类分级任务扫描的表信息
 */
export interface DSPATableInfo {
  /**
   * 表名
   */
  TableName?: string
}

/**
 * DSPA评估风险项
 */
export interface AssessmentRisk {
  /**
   * 风险项Id
   */
  RiskId?: string
  /**
   * 风险项描述
   */
  RiskDescription?: string
  /**
   * 评估模板Id
   */
  TemplateId?: string
  /**
   * 评估模板名称
   */
  TemplateName?: string
  /**
   * 评估项Id
   */
  ControlItemId?: string
  /**
   * 评估项名称
   */
  ControlItemName?: string
  /**
   * 评估描述
   */
  ControlItemDesc?: string
  /**
   * 风险等级，取值（high，medium，low）
   */
  RiskLevel?: string
  /**
   * 风险缓解措施
   */
  RiskMitigation?: string
  /**
   * 风险处理状态。(waiting待处理, processing处理中, finished已处理)
   */
  Status?: string
  /**
   * 风险生成时间
   */
  CreatedTime?: string
  /**
   * 风险负责人
   */
  RiskOwner?: string
  /**
   * 风险涉及资产
   */
  RelatedAsset?: string
  /**
   * 风险涉及资产id
   */
  DataSourceId?: string
  /**
   * 风险涉及资产名称
   */
  DataSourceName?: string
  /**
   * 资产名称
   */
  AssetName?: string
  /**
   * 建议使用安全产品
   */
  SecurityProduct?: Array<SecurityProduct>
  /**
   * 风险类型
   */
  RiskType?: string
  /**
   * 风险面
   */
  RiskSide?: string
  /**
   * 数据源类型
   */
  DataSourceType?: string
}

/**
 * 关系型数据库资产详情
 */
export interface DspaRDBDataAssetDetail {
  /**
   * 数据源ID
   */
  DataSourceId?: string
  /**
   * 数据库类型
   */
  DbType?: string
  /**
   * 数据库名称
   */
  DbName?: string
  /**
   * 数据库表名称
   */
  TableName?: string
  /**
   * 数据库表字段名称
   */
  FieldName?: string
  /**
   * 规则名称
   */
  RuleName?: string
  /**
   * 数据分类
   */
  CategoryName?: string
  /**
   * 敏感等级
   */
  LevelRiskName?: string
  /**
   * 分级风险分数，1-10，最小值为1，最大值为10
   */
  LevelRiskScore?: number
  /**
   * 可信分
   */
  TrustedScore?: string
  /**
   * 资源所在地域
   */
  ResourceRegion?: string
  /**
   * 字段扫描结果ID
   */
  FieldResultId?: string
  /**
   * 规则ID
   */
  RuleId?: number
  /**
   * 分级ID
   */
  LevelId?: number
  /**
   * 分类ID
   */
  CategoryId?: number
  /**
   * 数据源名称
   */
  DataSourceName?: string
  /**
   * 保护措施
   */
  SafeGuard?: DspaSafeGuard
  /**
   * 分类路径
   */
  CategoryFullPath?: string
  /**
   * 0.系统识别，1人工打标
   */
  IdentifyType?: number
  /**
   * 0未核查 1已核查
   */
  CheckStatus?: number
  /**
   * 0非敏感，1敏感
   */
  IsSensitiveData?: number
  /**
   * 模式名
   */
  SchemaName?: string
}

/**
 * 敏感数据识别规则
 */
export interface DataRule {
  /**
   * 规则类型；取值：
keyword 关键字, 
regex 正则
   */
  RuleType: string
  /**
   * 内容
   */
  RuleContent: string
  /**
   * 该字段是针对规则类型RuleType为keyword类型时的一个扩展属性
   */
  ExtendParameters?: Array<DatagovRuleExtendParameter>
}

/**
 * ModifyLevelName返回参数结构体
 */
export interface ModifyLevelNameResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EnableTrialVersion返回参数结构体
 */
export interface EnableTrialVersionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 元数据类型
 */
export interface DSPAMetaType {
  /**
   * 元数据类型
   */
  MetaType?: string
  /**
   * 支持的此元数据类型的地域列表
   */
  Regions?: Array<string>
  /**
   * 此元数据类型支持的授权类型：
account    -- 账户名密码授权，账户的最高只读权限需要由用户自行赋予；
automatic -- 一键授权，由DSPA自动生成账户名密码并自动在实例中给账户名赋予最高只读权限；
如果此列表为空，表明此类资源不支持以上的授权机制，无法通过后台进行授权。
   */
  SupportedAuthTypes?: Array<string>
}

/**
 * ModifyStandardInfo请求参数结构体
 */
export type ModifyStandardInfoRequest = null

/**
 * DescribeDSPAComplianceGroupDetail返回参数结构体
 */
export interface DescribeDSPAComplianceGroupDetailResponse {
  /**
   * 模板详情
   */
  Detail?: ComplianceGroupDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPAAssessmentRiskTemplateVulnerableList请求参数结构体
 */
export interface DescribeDSPAAssessmentRiskTemplateVulnerableListRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 限制条数
   */
  Limit: number
  /**
   * 偏移量
   */
  Offset: number
  /**
   * 风险类型
   */
  RiskType?: string
  /**
   * 风险名称
   */
  RiskName?: string
  /**
   * 风险面
   */
  RiskSide?: string
}

/**
 * CreateDSPACategoryRelation返回参数结构体
 */
export interface CreateDSPACategoryRelationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPAAssessmentTemplates返回参数结构体
 */
export interface DescribeDSPAAssessmentTemplatesResponse {
  /**
   * 符合条件的模板数目
   */
  TotalCount?: number
  /**
   * 模板列表。
   */
  Items?: Array<AssessmentTemplate>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPACOSTaskResultDetail返回参数结构体
 */
export interface DescribeDSPACOSTaskResultDetailResponse {
  /**
   * 扫描结果详情列表
   */
  Items?: Array<DspaDiscoveryCOSTaskResultDetail>
  /**
   * 符合条件的详情数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务执行结果描述。
 */
export interface DspaTaskResult {
  /**
   * 任务结果。
   */
  Result?: string
  /**
   * 结果描述。
   */
  ResultDescription?: string
  /**
   * 资源ID。
   */
  ResourceId?: string
  /**
   * 资源类型。
   */
  MetaType?: string
}

/**
 * DescribeRuleList请求参数结构体
 */
export type DescribeRuleListRequest = null

/**
 * DescribeDSPADataSourceDbInfo请求参数结构体
 */
export interface DescribeDSPADataSourceDbInfoRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 数据源ID
   */
  DataSourceId: string
  /**
   * 数据源类型
   */
  DataSourceType?: string
}

/**
 * CreateOrCopyStandard请求参数结构体
 */
export type CreateOrCopyStandardRequest = null

/**
 * 扫描任务结果，按照数据库级别展示
 */
export interface DspaDiscoveryTaskDbResult {
  /**
   * 扫描数据库结果ID
   */
  DbResultId?: number
  /**
   * 任务ID
   */
  TaskId?: number
  /**
   * 任务名称
   */
  TaskName?: string
  /**
   * 扫描任务最新一次扫描结果ID
   */
  ResultId?: number
  /**
   * 数据源ID
   */
  DataSourceId?: string
  /**
   * 数据库名称
   */
  DbName?: string
  /**
   * 总表数
   */
  TotalTables?: number
  /**
   * 敏感表数
   */
  SensitiveTables?: number
  /**
   * DB扫描的结束时间，格式如：2006-01-02 15:04:05
   */
  EndTime?: string
  /**
   * 数据源名称
   */
  DataSourceName?: string
  /**
   * DB扫描状态，0待扫描 1扫描中 2扫描终止 3扫描成功 4扫描失败
   */
  Status?: number
  /**
   * DB扫描结果错误信息
   */
  ErrorInfo?: string
  /**
   * 资源所在地域
   */
  ResourceRegion?: string
  /**
   * 敏感字段数
   */
  SensitiveField?: number
  /**
   * 总的字段数
   */
  TotalField?: number
}

/**
 * QueryResourceDbBindStatus返回参数结构体
 */
export interface QueryResourceDbBindStatusResponse {
  /**
   * 绑定DB数量。
   */
  BindDbNums?: number
  /**
   * 未绑定DB数量。
   */
  UnbindDbNums?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 过滤内容
 */
export interface DspaDataSourceMngFilter {
  /**
   * 过滤类型。
   */
  Name: string
  /**
   * 过滤类型的值。
   */
  Values: Array<string>
}

/**
 * CreateDSPACosMetaResources返回参数结构体
 */
export interface CreateDSPACosMetaResourcesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDSPAComplianceRules返回参数结构体
 */
export interface CreateDSPAComplianceRulesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetDetailDataExportResult请求参数结构体
 */
export interface DescribeAssetDetailDataExportResultRequest {
  /**
   * 导出任务id
   */
  ExportTaskId: number
  /**
   * DSPA实例Id，格式“dspa-xxxxxxxx”
   */
  DspaId: string
}

/**
 * DescribeDSPAAssessmentRiskDatasourceTop5请求参数结构体
 */
export interface DescribeDSPAAssessmentRiskDatasourceTop5Request {
  /**
   * dspa实例id
   */
  DspaId: string
}

/**
 * 敏感数据识别规则集
 */
export interface DspaDiscoveryDataRules {
  /**
   * 操作符；只能取and, or的其中一种
   */
  Operator: string
  /**
   * 规则
   */
  Contents: Array<DspaDiscoveryDataRule>
}

/**
 * DeleteDSPACOSDiscoveryTaskResult请求参数结构体
 */
export interface DeleteDSPACOSDiscoveryTaskResultRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 扫描bucket结果ID
   */
  BucketResultId: number
}

/**
 * DescribeDSPAESDiscoveryTaskResultDetail返回参数结构体
 */
export interface DescribeDSPAESDiscoveryTaskResultDetailResponse {
  /**
   * ES扫描结果详情列表
   */
  Items?: Array<ESTaskResultDetail>
  /**
   * 符合条件的扫描结果详情记录数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * es的资产统计结果
 */
export interface ESAsset {
  /**
   * 索引总数量
   */
  IndexNums?: number
  /**
   * 敏感索引的数量
   */
  SensitiveIndexNums?: number
  /**
   * 字段数量
   */
  FieldNums?: number
  /**
   * 敏感的字段数量
   */
  SensitiveFieldNums?: number
}

/**
 * DescribeDSPAComplianceUpdateNotification请求参数结构体
 */
export interface DescribeDSPAComplianceUpdateNotificationRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 合规组分类模板id
   */
  ComplianceId: number
}

/**
 * AuthorizeDSPAMetaResources请求参数结构体
 */
export interface AuthorizeDSPAMetaResourcesRequest {
  /**
   * DSPA实例ID。
   */
  DspaId: string
  /**
   * 授权方式，可选：automatic(一键自动授权) 、 account(指定用户名授权)。
   */
  AuthType: string
  /**
   * 资源类型。
   */
  MetaType: string
  /**
   * 资源所处地域。
   */
  ResourceRegion: string
  /**
   * 用户授权的账户信息，如果是一键自动授权模式，则不需要填写账户名与密码。
   */
  ResourcesAccount: Array<DspaResourceAccount>
  /**
   * 创建默认主模板扫描任务
   */
  CreateDefaultTask?: boolean
  /**
   * 授权范围（all:授权整个数据源 manual:手动指定数据库）
   */
  AuthRange?: string
}

/**
 * 绑定的实例信息
 */
export interface DBInstanceInfo {
  /**
   * 数据源id
   */
  ResourceId?: string
  /**
   * 数据源绑定的db信息
   */
  DbInfos?: Array<DbInfo>
}

/**
 * ModifyDSPAComplianceGroup返回参数结构体
 */
export interface ModifyDSPAComplianceGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DSPA评估任务
 */
export interface AssessmentTask {
  /**
   * 评估任务Id
   */
  TaskId: string
  /**
   * 评估任务的自增ID

   */
  TaskUid: number
  /**
   * 评估任务名称
   */
  TaskName: string
  /**
   * 业务名称
   */
  BusinessName: string
  /**
   * 业务所属部门
   */
  BusinessDept: string
  /**
   * 业务负责人
   */
  BusinessOwner: string
  /**
   * 评估模板Id
   */
  TemplateId: string
  /**
   * 评估模板名称
   */
  TemplateName: string
  /**
   * 分类分级模板Id
   */
  ComplianceGroupId: number
  /**
   * 分类分级模板名称
   */
  ComplianceGroupName: string
  /**
   * 评估项数量
   */
  ControlItemCount: number
  /**
   * 风险项数量（仅状态为finished的风险项不计入总数，其余状态均算入该数量）
   */
  RiskCount: number
  /**
   * 评估任务完成时间
   */
  FinishedTime: string
  /**
   * 评估任务发起时间
   */
  CreatedTime: string
  /**
   * 评估状态。(waiting待评估，processing评估中, , finished已评估, failed评估失败)
   */
  Status: string
  /**
   * 待处理各等级风险项信息
   */
  RiskCountInfoList: Array<RiskCountInfo>
  /**
   * 数据源信息
   */
  DiscoveryCondition: DiscoveryCondition
  /**
   * 评估任务失败信息
   */
  ErrorInfo: string
  /**
   * 模板主键id
   */
  TemplateUid: number
  /**
   * 进度百分比
   */
  ProgressPercent: number
}

/**
 * DescribeClassificationInfo请求参数结构体
 */
export type DescribeClassificationInfoRequest = null

/**
 * DescribeDSPAESDataSample请求参数结构体
 */
export interface DescribeDSPAESDataSampleRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 字段扫描结果ID
   */
  FieldResultId: number
  /**
   * 排序方式
   */
  Order?: string
  /**
   * 排序字段
   */
  OrderField?: string
}

/**
 * GetUserQuotaInfo返回参数结构体
 */
export interface GetUserQuotaInfoResponse {
  /**
   * DSPA实例ID。
   */
  DspaId?: string
  /**
   * 用户购买的DB配额。
   */
  DbTotalQuota?: number
  /**
   * 用户购买的COS存储量配额。
   */
  CosTotalQuota?: number
  /**
   * 用户可用的DB配额。
   */
  DbRemainQuota?: number
  /**
   * 用户可用的COS存储量配额。
   */
  CosRemainQuota?: number
  /**
   * COS存储量单位，例如TB。
   */
  CosQuotaUnit?: string
  /**
   * db月解绑次数
   */
  DBUnbindNum?: number
  /**
   * cos月解绑次数
   */
  COSUnbindNum?: number
  /**
   * 用户购买的实例配额。
   */
  InsTotalQuota?: number
  /**
   * 用户可用的实例配额。
   */
  InsRemainQuota?: number
  /**
   * 用户购买的版本
   */
  Version?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * COS敏感数据扫描任务相关信息
 */
export interface DspaCOSDiscoveryTaskDetail {
  /**
   * 任务名称
   */
  Name?: string
  /**
   * 任务描述
   */
  Description?: string
  /**
   * 执行周期，0单次 1每天 2每周 3每月
   */
  Period?: number
  /**
   * 执行计划，0立即 1定时
   */
  Plan?: number
  /**
   * 任务开关；1 打开，0 关闭
   */
  Enable?: number
  /**
   * 数据源对象信息
   */
  DataSourceInfo?: DspaCOSDiscoveryTaskDataSourceInfo
  /**
   * 通用规则集开关，0 关闭，1 启用
   */
  GeneralRuleSetEnable?: number
  /**
   * 当创建任务时，用户打开了通用规则集开关，则该字段就会保存默认合规组信息
   */
  DefaultComplianceInfo?: Array<ScanTaskComplianceInfo>
  /**
   * 该任务中用户选择的合规组信息列表
   */
  CustomComplianceInfo?: Array<ScanTaskComplianceInfo>
  /**
   * 定时开始时间
   */
  TimingStartTime?: string
}

/**
 * DescribeSensitiveCOSDataDistribution返回参数结构体
 */
export interface DescribeSensitiveCOSDataDistributionResponse {
  /**
   * 分级分布
   */
  LevelDistribution?: Array<Note>
  /**
   * 分类分布
   */
  CategoryDistribution?: Array<Note>
  /**
   * 规则分布详情
   */
  RuleDistribution?: Array<RuleDistribution>
  /**
   * 计算占比
   */
  SensitiveDataNum?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCOSAssetSensitiveDistribution请求参数结构体
 */
export interface DescribeCOSAssetSensitiveDistributionRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 合规组id
   */
  ComplianceId: number
  /**
   * 查询的资产列表
   */
  AssetList: Array<AssetList>
}

/**
 * CreateDSPAAssessmentRiskTemplate请求参数结构体
 */
export interface CreateDSPAAssessmentRiskTemplateRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 模板名称
   */
  TemplateName: string
  /**
   * 风险等级id
   */
  RiskLevelId: number
  /**
   * 风险id列表
   */
  RiskIdList: Array<number | bigint>
  /**
   * 模板描述
   */
  TemplateDescription?: string
}

/**
 * 评估模板的详情数据
 */
export interface TemplateInfo {
  /**
   * 模板id
   */
  TemplateId: number
  /**
   * 模板名称
   */
  TemplateName: string
}

/**
 * DescribeDSPACOSDiscoveryTaskFiles返回参数结构体
 */
export interface DescribeDSPACOSDiscoveryTaskFilesResponse {
  /**
   * 文件列表
   */
  Files?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BindDSPAResourceCosBuckets请求参数结构体
 */
export interface BindDSPAResourceCosBucketsRequest {
  /**
   * DSPA实例ID。
   */
  DspaId: string
  /**
   * 绑定的COS桶信息。
   */
  BindCosResourceItems?: Array<CosResourceItem>
  /**
   * 解绑的COS桶信息。
   */
  UnbindCosResourceItems?: Array<CosResourceItem>
}

/**
 * ModifyDSPAESTaskResult返回参数结构体
 */
export interface ModifyDSPAESTaskResultResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDSPACosMetaResources请求参数结构体
 */
export interface CreateDSPACosMetaResourcesRequest {
  /**
   * DSPA实例ID。
   */
  DspaId: string
  /**
   * 资源所处地域。
   * @deprecated
   */
  ResourceRegion?: string
  /**
   * COS桶列表
   * @deprecated
   */
  Buckets?: Array<string>
  /**
   * 必填，COS资源列表
   */
  CosBucketItems?: Array<CosBucketItem>
}

/**
 * DescribeDSPAAssessmentRiskSideList请求参数结构体
 */
export interface DescribeDSPAAssessmentRiskSideListRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 评估模板id
   */
  TemplateId: number
}

/**
 * ModifyNewClassification请求参数结构体
 */
export type ModifyNewClassificationRequest = null

/**
 * DSPA用户资源元信息
 */
export interface DspaUserResourceMeta {
  /**
   * 用户资源ID。
   */
  ResourceId: string
  /**
   * 资源名称。
   */
  ResourceName: string
  /**
   * 资源VIP。
   */
  ResourceVip: string
  /**
   * 资源端口。
   */
  ResourceVPort: number
  /**
   * 资源被创建时间。
   */
  ResourceCreateTime: string
  /**
   * 用户资源VPC ID 字符串。
   */
  ResourceUniqueVpcId: string
  /**
   * 用户资源Subnet ID 字符串。
   */
  ResourceUniqueSubnetId: string
  /**
   * 用户资源类型信息。
   */
  MetaType?: string
  /**
   * 资源所处地域。
   */
  ResourceRegion?: string
  /**
   * 资源被同步时间。
   */
  ResourceSyncTime?: string
  /**
   * 资源被授权状态。
   */
  AuthStatus?: string
  /**
   * 资源创建类型，cloud-云原生资源，build-用户自建资源。
   */
  BuildType?: string
  /**
   * 主实例ID。
   */
  MasterInsId?: string
  /**
   * 用户资源VPC ID 整数。
   */
  ResourceVpcId?: number
  /**
   * 用户资源Subnet ID 整数。
   */
  ResourceSubnetId?: number
  /**
   * 协议类型。
   */
  Protocol?: string
  /**
   * 资源版本号。
   */
  ResourceVersion?: string
  /**
   * 授权方式
   */
  ResourceAuthType?: string
  /**
   * 授权账号名
   */
  ResourceAuthAccount?: string
  /**
   * 实例类型
   */
  InstanceType?: string
  /**
   * 实例值
   */
  InstanceValue?: string
  /**
   * //治理授权状态（0：关闭 1：开启）
   */
  GovernAuthStatus?: number
  /**
   * 授权范围：all - 授权整个数据源 manual:手动指定数据源
   */
  AuthRange?: string
}

/**
 * 敏感数据分类
 */
export interface DataCategory {
  /**
   * 分类ID
   */
  CategoryId: number
  /**
   * 敏感数据分类名称
   */
  Name: string
  /**
   * 敏感数据分类来源，取值：0 内置, 1 自定义
   */
  Source: number
  /**
   * 关联模板数量
   */
  RelateComplianceCount: number
}

/**
 * CreateIdentifyRuleAnotherName请求参数结构体
 */
export interface CreateIdentifyRuleAnotherNameRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 合规组ID
   */
  ComplianceId: number
  /**
   * 规则绑定的分类id
   */
  CategoryId: number
  /**
   * 规则id
   */
  RuleId: number
  /**
   * 规则名称
   */
  RuleName: string
  /**
   * 规则别名
   */
  AnotherName: string
  /**
   * 别名规则id
   */
  AliasRuleId?: number
  /**
   * 别名规则名称
   */
  AliasRuleName?: string
}

/**
 * DescribeDSPACategoryRuleStatistic返回参数结构体
 */
export interface DescribeDSPACategoryRuleStatisticResponse {
  /**
   * 分类规则统计信息
   */
  StatisticSet?: Array<CategoryRuleStatistic>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 合规组
 */
export interface DspaDiscoveryComplianceGroup {
  /**
   * 合规组ID
   */
  ComplianceGroupId?: number
  /**
   * 合规组名称
   */
  Name?: string
  /**
   * 合规组描述信息
   */
  Description?: string
  /**
   * 合规组类型；0 默认合规组，1 系统合规组（除默认合规组外）, 2 自定义合规组
   */
  ComplianceGroupType?: number
  /**
   * 合规组对应的规则项
   */
  ComplianceGroupRules?: Array<DspaDiscoveryComplianceGroupRuleInfo>
  /**
   * 合规组对应的分级组ID
   */
  LevelGroupId?: number
}

/**
 * ModifyDSPADiscoveryRule返回参数结构体
 */
export interface ModifyDSPADiscoveryRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 错误信息描述
 */
export interface ErrDescription {
  /**
   * 错误码。
   */
  ErrCode?: string
  /**
   * 具体错误信息。
   */
  ErrMessage?: string
}

/**
 * QueryResourceDbBindStatus请求参数结构体
 */
export interface QueryResourceDbBindStatusRequest {
  /**
   * DSPA实例ID。
   */
  DspaId: string
  /**
   * 资源ID。
   */
  ResourceId: string
  /**
   * 资源所在地域。
   */
  ResourceRegion: string
  /**
   * 资源类型。
   */
  MetaType: string
}

/**
 * 敏感识别任务COS识别规则
 */
export interface ScanTaskCOSRules {
  /**
   * regex规则内容
   */
  RegexRule: COSDataRule
  /**
   * 规则状态；0 不启用, 1 启用
   */
  Status?: number
  /**
   * 关键词规则内容组，最大支持5个关键词。
   */
  KeywordRule?: COSDataRule
  /**
   * 忽略词规则内容组，最大支持5个忽略词。
   */
  IgnoreStringRule?: COSDataRule
  /**
   * 最大匹配距离，默认值为100。上限为500.
   */
  MaxMatch?: number
}

/**
 * mongo敏感资产详情列表
 */
export interface MongoAssetDBDetail {
  /**
   * 数据源id
   */
  DataSourceId?: string
  /**
   * 数据库名称
   */
  DdName?: string
  /**
   * 数据库类型
   */
  DataType?: string
  /**
   * 集合的数量
   */
  ColNums?: number
  /**
   * 敏感集合数量
   */
  SensitiveColNums?: number
  /**
   * 字段的数量
   */
  FieldNums?: number
  /**
   * 敏感字段的数量
   */
  SensitiveFieldNums?: number
  /**
   * 敏感数据分布
   */
  DistributionData?: Array<Note>
}

/**
 * DescribeDSPAAssessmentLatestRiskList请求参数结构体
 */
export interface DescribeDSPAAssessmentLatestRiskListRequest {
  /**
   * dspa实例Id
   */
  DspaId: string
  /**
   * 评估模板id
   */
  TemplateId: number
  /**
   * 限制条数
   */
  Limit?: number
  /**
   * 分页偏移量
   */
  Offset?: string
  /**
   * 资产名称，数据源id
   */
  DataSourceId?: string
  /**
   * 风险类型
   */
  RiskType?: string
  /**
   * 风险项
   */
  ControlItemId?: string
  /**
   * 风险状态
   */
  Status?: number
  /**
   * 扫描开始时间
   */
  BeginTime?: string
  /**
   * 扫描结束时间
   */
  EndTime?: string
  /**
   * 风险等级筛选
   */
  RiskLevel?: string
  /**
   * 风险面筛选
   */
  RiskSide?: Array<string>
  /**
   * ASC 正序，DESC倒叙
   */
  TimeSort?: string
}

/**
 * DescribeDSPADiscoveryTaskResult返回参数结构体
 */
export interface DescribeDSPADiscoveryTaskResultResponse {
  /**
   * 扫描任务结果项
   */
  Items?: Array<DspaDiscoveryTaskDbResult>
  /**
   * 符合条件的扫描任务结果记录数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 风险项列表详细数据
 */
export interface AssessmentRiskItem {
  /**
   * 脆弱项id
   */
  Id?: number
  /**
   * 名称
   */
  RiskName?: string
  /**
   * 脆弱性级别
   */
  Level?: string
  /**
   * 说明
   */
  Description?: string
  /**
   * 风险类型
   */
  RiskType?: string
  /**
   * 关联模板个数
   */
  ReferTemplateCount?: number
  /**
   * 支持的数据源
   */
  SupportDataSource?: Array<string>
  /**
   * 风险面
   */
  RiskSide?: string
  /**
   * 关联模板列表
   */
  ReferTemplateList?: Array<TemplateInfo>
}

/**
 * ModifyNewClassification返回参数结构体
 */
export interface ModifyNewClassificationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BindDSPAResourceDatabases请求参数结构体
 */
export interface BindDSPAResourceDatabasesRequest {
  /**
   * DSPA实例ID。
   */
  DspaId: string
  /**
   * 数据库实例ID。
   */
  ResourceId: string
  /**
   * 数据库实例类型。
   */
  MetaType: string
  /**
   * 绑定DB列表。
   */
  BindDbItems?: Array<DbResourceItem>
  /**
   * 解绑DB列表。
   */
  UnbindDbItems?: Array<DbResourceItem>
}

/**
 * DescribeMongoAssetSensitiveDistribution请求参数结构体
 */
export interface DescribeMongoAssetSensitiveDistributionRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 合规组id
   */
  ComplianceId: number
  /**
   * 查询的资产信息列表
   */
  AssetList: Array<AssetList>
}

/**
 * GetUserQuotaInfo请求参数结构体
 */
export interface GetUserQuotaInfoRequest {
  /**
   * DSPA实例ID。
   */
  DspaId: string
}

/**
 * ModifyLevelState请求参数结构体
 */
export type ModifyLevelStateRequest = null

/**
 * ModifyDSPACOSTaskResult返回参数结构体
 */
export interface ModifyDSPACOSTaskResultResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据资产报告-各种key-value的展示数据结构
 */
export interface Note {
  /**
   * 通用key，例如分类名称
   */
  Key?: string
  /**
   * 通用value，例如分类个数
   */
  Value?: number
}

/**
 * DescribeDSPACOSDiscoveryTaskResult请求参数结构体
 */
export interface DescribeDSPACOSDiscoveryTaskResultRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 偏移量，默认值为0
   */
  Offset?: number
  /**
   * 返回数量，默认值为20，最大值为100
   */
  Limit?: number
  /**
   * Array of Filter	此参数对外不可见。过滤数组。支持的Name：
BucketName 对象桶名
TaskID 任务ID，
TaskName 任务名，
DataSourceId：数据源ID，
ResourceRegion：资源所在地域
每项过滤条件最多支持5个。
   */
  Filters?: Array<Filter>
}

/**
 * DescribeDSPAAssessmentLatestRiskDetailInfo返回参数结构体
 */
export interface DescribeDSPAAssessmentLatestRiskDetailInfoResponse {
  /**
   * 数据源id
   */
  DataSourceId?: string
  /**
   * 数据源name
   */
  DataSourceName?: string
  /**
   * 资产对象名称
   */
  AssetName?: string
  /**
   * 风险评估模板id
   */
  AssessmentTemplateId?: number
  /**
   * 分类分级的模板id
   */
  IdentifyTemplateId?: number
  /**
   * 风险类型
   */
  RiskType?: string
  /**
   * 风险项
   */
  RiskName?: string
  /**
   * 风险的描述
   */
  RiskDescription?: string
  /**
   * 风险的级别
   */
  RiskLevel?: string
  /**
   * 处置的建议
   */
  SuggestAction?: string
  /**
   * 处置状态
   */
  Status?: number
  /**
   * 备注
   */
  Remark?: string
  /**
   * 安全产品
   */
  SecurityProduct?: Array<SecurityProduct>
  /**
   * 风险归属
   */
  RiskDimension?: string
  /**
   * 关联数据库（如果风险归属是instance）
   */
  RelationAsset?: Array<string>
  /**
   * 风险账号详情
   */
  AccountRiskDetail?: Array<AccountRisk>
  /**
   * 权限风险详情
   */
  PrivilegeRiskDetail?: Array<PrivilegeRisk>
  /**
   * 策略风险的cos风险文件列表
   */
  PolicyRiskCosFileList?: Array<string>
  /**
   * AKSK泄漏列表
   */
  AKSKLeak?: Array<AKSKLeak>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 设敏top资产的信息
 */
export interface TopAssetStat {
  /**
   * 数据源id
   */
  DataSourceId?: string
  /**
   * db_name
   */
  SubData?: string
  /**
   * 敏感个数
   */
  SensitiveCnt?: number
}

/**
 * DescribeDSPACOSDiscoveryTaskDetail返回参数结构体
 */
export interface DescribeDSPACOSDiscoveryTaskDetailResponse {
  /**
   * 任务详情
   */
  Task?: DspaCOSDiscoveryTaskDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartDSPADiscoveryTask返回参数结构体
 */
export interface StartDSPADiscoveryTaskResponse {
  /**
   * 任务扫描结果ID
   */
  ResultId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateOrCopyStandard返回参数结构体
 */
export interface CreateOrCopyStandardResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPALevelGroups返回参数结构体
 */
export interface DescribeDSPALevelGroupsResponse {
  /**
   * 符合条件的敏感数据分级标识记录
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<DspaDiscoveryLevelDetail>
  /**
   * 符合条件的敏感数据分级标识记录数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPAAssessmentProcessingRiskOverview返回参数结构体
 */
export interface DescribeDSPAAssessmentProcessingRiskOverviewResponse {
  /**
   * 待处理的风险数
   */
  ProcessingRiskCount?: number
  /**
   * 受影响的资产数
   */
  AffectedAssetCount?: number
  /**
   * 周同比
   */
  WeekRatio?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPAAssessmentRiskProcessHistory请求参数结构体
 */
export interface DescribeDSPAAssessmentRiskProcessHistoryRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 风险id
   */
  RiskId: number
}

/**
 * DescribeDSPASupportedMetas返回参数结构体
 */
export interface DescribeDSPASupportedMetasResponse {
  /**
   * 支持的元数据类型
   */
  Metas?: Array<DSPAMetaType>
  /**
   * 最大支持每批次同步数量
   */
  MaxDBInstanceLimit?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 分类规则统计信息
 */
export interface CategoryRuleStatistic {
  /**
   * 分类id
   */
  CategoryId?: number
  /**
   * 规则数量
   */
  RuleCount?: number
  /**
   * 分类名称
   */
  CategoryName?: string
}

/**
 * ExportAssetDetailData请求参数结构体
 */
export interface ExportAssetDetailDataRequest {
  /**
   * DSPA实例Id，格式“dspa-xxxxxxxx”
   */
  DspaId: string
  /**
   * 合规组id
   */
  ComplianceId: number
  /**
   * 资产类型（rdb,cvm_db,cos）
   */
  MetaDataType: string
  /**
   * 过滤数组。支持的Name：
DataSourceID 数据源ID
DbName 数据库名称
CategoryID 敏感数据分类ID
RuleID 规则ID
LevelID 敏感分级ID
ResourceRegion 资源所在地域
DataSourceType 数据源类型，不填默认过滤非自建的所有关系型数据源类型，填selfbuilt-db只过滤自建类型
注意：每个name默认支持最多5个values。
   */
  Filters?: Array<Filter>
  /**
   * casbId
   */
  CasbId?: string
}

/**
 * 合规组中规则信息：包括规则ID，数据分类ID, 数据分级标识ID
 */
export interface ComplianceGroupRuleIdInfo {
  /**
   * 敏感数据识别规则ID
   */
  RuleId: number
  /**
   * 敏感数据分类ID
   */
  CategoryId: number
  /**
   * 敏感数据分级标识ID, 系统支持高、中、低三级，也支持自定义分级
   */
  LevelId: number
}

/**
 * DeleteDSPADiscoveryTask返回参数结构体
 */
export interface DeleteDSPADiscoveryTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Dspa实例信息
 */
export interface DspaInstance {
  /**
   * DSPA实例ID。
   */
  DspaId?: string
  /**
   * DSPA实例名称。
   */
  DspaName?: string
  /**
   * DSPA实例描述信息。
   */
  DspaDescription?: string
  /**
   * DSPA实例已授权的数据库实例数量。
   */
  DBAuthCount?: number
  /**
   * DSPA实例已绑定的cos桶数量。
   */
  CosBindCount?: number
  /**
   * DSPA实例版本。
   */
  InstanceVersion?: string
  /**
   * DSPA实例状态。
   */
  Status?: string
  /**
   * 实例过期时间戳。
   */
  ExpiredAt?: number
  /**
   * 账户APPID。
   */
  AppId?: number
  /**
   * 体验版本信息。
   */
  TrialVersion?: string
  /**
   * 体验版本过期时间戳。
   */
  TrialEndAt?: number
  /**
   * DB已购配额。
   */
  DbTotalQuota?: number
  /**
   * COS已购配额。
   */
  CosTotalQuota?: number
  /**
   * COS配额单位，例如:TB。
   */
  CosQuotaUnit?: string
  /**
   * 0: 默认状态(用户未设置)
1: 开启自动续费
2: 明确不自动续费
   */
  RenewFlag?: number
  /**
   * 实例渠道
   */
  Channel?: string
  /**
   * 已授权的实例数量
   */
  InsAuthCount?: number
  /**
   * 已购买的实例数量
   */
  InsTotalQuota?: number
}

/**
 * CreateDSPASelfBuildMetaResource返回参数结构体
 */
export interface CreateDSPASelfBuildMetaResourceResponse {
  /**
   * 连通性测试情况，success表示可正常访问，failed表示无法访问。
   */
  ConnectivityStatus?: string
  /**
   * 连通性描述字段，如果连通性测试失败，这里会返回无法访问的相关信息说明。
   */
  ConnectivityDescription?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 分类分级任务COS识别规则
 */
export interface DspaDiscoveryCOSRules {
  /**
   * 规则状态；0 不启用, 1 启用
   */
  Status?: number
  /**
   * regex规则内容
   */
  RegexRule?: DspaDiscoveryCOSDataRule
  /**
   * 关键词规则内容组，最大支持5个关键词。
   */
  KeywordRule?: DspaDiscoveryCOSDataRule
  /**
   * 忽略词规则内容组，最大支持5个忽略词。
   */
  IgnoreStringRule?: DspaDiscoveryCOSDataRule
  /**
   * 最大匹配距离，默认值为100。上限为500.
   */
  MaxMatch?: number
}

/**
 * DescribeDSPAAssessmentHighRiskTop10Overview请求参数结构体
 */
export interface DescribeDSPAAssessmentHighRiskTop10OverviewRequest {
  /**
   * dspa实例Id
   */
  DspaId: string
  /**
   * 评估模板id
   */
  TemplateId: number
  /**
   * 过滤条件， rdb（数据库）cos（对象存储）
不传就是全部
   */
  Filter?: string
}

/**
 * DescribeDSPAAssessmentTemplateControlItems返回参数结构体
 */
export interface DescribeDSPAAssessmentTemplateControlItemsResponse {
  /**
   * 符合条件的评估项数目
   */
  TotalCount?: number
  /**
   * 模板关联的评估项列表
   */
  Items?: Array<AssessmentControlItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSensitiveRDBDataDistribution请求参数结构体
 */
export interface DescribeSensitiveRDBDataDistributionRequest {
  /**
   * dspa-实例id
   */
  DspaId: string
  /**
   * 合规组id
   */
  ComplianceId: number
  /**
   * 查询的资产信息列表
   */
  AssetList: Array<AssetList>
}

/**
 * ModifyDSPAAssessmentRiskLevel请求参数结构体
 */
export interface ModifyDSPAAssessmentRiskLevelRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 风险等级名称
   */
  RiskLevelName: string
  /**
   * 风险的描述
   */
  RiskLevelDescription: string
  /**
   * 风险id
   */
  RiskId: number
  /**
   * 需要修改的风险列表
   */
  ModifyRiskItem?: Array<RiskLevelMatrix>
}

/**
 * 描述键值对过滤器，用于条件过滤查询
 */
export interface DspaAssessmentFilter {
  /**
   * 过滤类型。
   */
  Name: string
  /**
   * 过滤类型的值。
   */
  Values: Array<string>
}

/**
 * DescribeDSPAAssessmentPendingRiskOverview请求参数结构体
 */
export interface DescribeDSPAAssessmentPendingRiskOverviewRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 评估模板id
   */
  TemplateId: number
}

/**
 * 风险TOP5统计项
 */
export interface RiskItem {
  /**
   * 名称
   */
  ItemName: string
  /**
   * 风险数量
   */
  RiskNum: number
}

/**
 * DescribeDSPAAssessmentRiskLevelTrend返回参数结构体
 */
export interface DescribeDSPAAssessmentRiskLevelTrendResponse {
  /**
   * 结果集
   */
  Items?: Array<RiskLevelTrendItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPAAssessmentRiskDealedTrend请求参数结构体
 */
export interface DescribeDSPAAssessmentRiskDealedTrendRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 开始日期
   */
  StartTime: string
  /**
   * 结束日期
   */
  EndTime: string
  /**
   * 评估模板id
   */
  TemplateId?: string
}

/**
 * ModifyLevelInfo请求参数结构体
 */
export type ModifyLevelInfoRequest = null

/**
 * dsgc-资产梳理报表-数据源信息
 */
export interface DataSourceInfo {
  /**
   * 数据源ID
   */
  DataSourceId: string
  /**
   * 针对rbd-就是绑定的db_name
   */
  BindList?: Array<string>
}

/**
 * DSPA数据分类分布
 */
export interface DspaDataCategoryDistributed {
  /**
   * 数据分类ID
   */
  CategoryId?: number
  /**
   * 数据分类名称
   */
  CategoryName?: string
  /**
   * 数据分类统计个数
   */
  Count?: number
  /**
   * 分类路径
   */
  CategoryFullPath?: string
}

/**
 * COS数据源实例信息
 */
export interface COSInstance {
  /**
   * 数据源Id
   */
  DataSourceId: string
  /**
   * 桶名
   */
  BucketName: string
  /**
   * 资源所在地域
   */
  ResourceRegion: string
}

/**
 * DescribeDSPARDBDataAssetDetail请求参数结构体
 */
export interface DescribeDSPARDBDataAssetDetailRequest {
  /**
   * DSPA实例Id
   */
  DspaId: string
  /**
   * 合规组Id
   */
  ComplianceId: number
  /**
   * 过滤数组。支持的Name：
DataSourceID 数据源ID
DbName 数据库名称
CategoryID 敏感数据分类ID
RuleID 规则ID
LevelID 敏感分级ID
ResourceRegion 资源所在地域
SensitiveField 过滤敏感字段，可选值为1，或者无此SensitiveField字段
DataSourceType 数据源类型，不填默认过滤非自建的所有关系型数据源类型，填selfbuilt-db只过滤自建类型
注意：每个name默认支持最多5个values。
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
  /**
   * 可信分排序，ASC-升序
DESC降序
   */
  CreditScore?: string
}

/**
 * DescribeDSPACOSDataAssetDetail返回参数结构体
 */
export interface DescribeDSPACOSDataAssetDetailResponse {
  /**
   * COS对象存储敏感数据资产详情列表
   */
  Details?: Array<DspaCOSDataAssetDetail>
  /**
   * 符合条件的COS对象存储敏感数据资产数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPACategories请求参数结构体
 */
export interface DescribeDSPACategoriesRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 数据分类ID
   */
  CategoryId?: number
  /**
   * 敏感数据分类名称
   */
  Name?: string
  /**
   * 偏移量，默认值为0
   */
  Offset?: number
  /**
   * 返回结果集数量，默认值是10000，最大值为10000，根据该资源的个数限制条件，该资源的个数不会超过10000，所以如果不输入该字段，默认获取全量数据
   */
  Limit?: number
}

/**
 * COS扫描任务结果，按照数据库级别展示
 */
export interface DspaCOSDiscoveryTaskResult {
  /**
   * 扫描bucket结果ID
   */
  BucketResultId?: number
  /**
   * 任务ID
   */
  TaskId?: number
  /**
   * 任务名称
   */
  TaskName?: string
  /**
   * 扫描任务最新一次扫描结果ID
   */
  ResultId?: number
  /**
   * 数据源ID
   */
  DataSourceId?: string
  /**
   * 桶名称
   */
  BucketName?: string
  /**
   * 总文件数
   */
  TotalFiles?: number
  /**
   * 被识别出的敏感数据数
   */
  SensitiveDataNums?: number
  /**
   * Bucket扫描的结束时间，格式如：2006-01-02 15:04:05
   */
  EndTime?: string
  /**
   * 数据源名称
   */
  DataSourceName?: string
  /**
   * Bucket扫描状态，0待扫描 1扫描中 2扫描终止 3扫描成功 4扫描失败
   */
  Status?: number
  /**
   * Bucket扫描结果错误信息
   */
  ErrorInfo?: string
  /**
   * 资源所在地域
   */
  ResourceRegion?: string
  /**
   * 是否超额
   */
  OverSize?: string
}

/**
 * 扫描任务元数据信息
 */
export interface DspaCOSDiscoveryTaskDataSourceInfo {
  /**
   * 数据源ID
   */
  DataSourceId?: string
  /**
   * 代理地址
   */
  ProxyAddress?: Array<string>
  /**
   * 数据源名称
   */
  DataSourceName?: string
  /**
   * 扫描任务条件
   */
  Condition?: DspaDiscoveryTaskCOSCondition
  /**
   * 资源所在地域
   */
  ResourceRegion?: string
}

/**
 * UpdateDSPASelfBuildResource请求参数结构体
 */
export interface UpdateDSPASelfBuildResourceRequest {
  /**
   * DSPA实例ID。
   */
  DspaId: string
  /**
   * 云资源名称，如果是通过CVM访问则填写CVM的资源ID，如果是通过LB访问则填写LB的资源ID。
   */
  ResourceId: string
  /**
   * 资源绑定的端口，为0则表示不更新。
   */
  ResourceVPort?: number
  /**
   * 账户名，为空则表示不更新。
UserName和Password必须同时填写或同时为空。
   */
  UserName?: string
  /**
   * 账户密码，为空则表示不更新。
UserName和Password必须同时填写或同时为空。
   */
  Password?: string
  /**
   * 授权范围：all 授权全部  manual：手动指定
   */
  AuthRange?: string
  /**
   * 自建数据资产的名称，支持修改
   */
  ResourceName?: string
}

/**
 * DescribeDSPAAssessmentTasks请求参数结构体
 */
export interface DescribeDSPAAssessmentTasksRequest {
  /**
   * DSPA实例Id，格式“dspa-xxxxxxxx”
   */
  DspaId: string
  /**
   * 偏移量。默认为0
   */
  Offset?: number
  /**
   * 结果集个数限制。默认为20，最大值为100
   */
  Limit?: number
  /**
   * 过滤项。支持模糊搜索：TaskId，TaskName支持过滤：BusinessName：业务名称BusinessDept：业务部门名称TemplateName：评估模板名称Status：评估状态 (waiting待评估，processing评估中, , finished已评估, failed评估失败)
   */
  Filters?: Array<DspaAssessmentFilter>
}

/**
 * DescribeDSPALevelDetail请求参数结构体
 */
export interface DescribeDSPALevelDetailRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 过滤数组。支持的Name：
ComplianceId 合规组ID
LevelGroupId 敏感分级组ID
   */
  Filters?: Array<Filter>
}

/**
 * ES的概览页统计数据
 */
export interface ESDataAssetCountDto {
  /**
   * es
   */
  DataAssetType?: number
  /**
   * 敏感索引个数
   */
  SensitiveIndexCnt?: number
  /**
   * 总的索引个数
   */
  TotalIndexCnt?: number
  /**
   * 敏感字段个数
   */
  SensitiveFieldCnt?: number
  /**
   * 总的字段个数
   */
  TotalFieldCnt?: number
  /**
   * 敏感分类的个数
   */
  SensitiveCategoryCnt?: number
  /**
   * 敏感分级的分布
   */
  SensitiveLevel?: Array<SensitiveLevel>
  /**
   * 敏感分类的分布
   */
  CategoryDistributed?: Array<DspaDataCategoryDistributed>
}

/**
 * ListDSPAClusters请求参数结构体
 */
export interface ListDSPAClustersRequest {
  /**
   * 分页步长，默认为100。
   */
  Limit?: number
  /**
   * 分页偏移量，默认为0。
   */
  Offset?: number
  /**
   * 过滤项。
支持的过滤项包括：DspaId、Status、Version、DspaName、Channel。
DspaId和DspaName支持模糊搜索。
Status支持的可选值：enabled、disabled。
Version支持的可选值：trial、official。
Channel支持的可选值：sp_cds_dsgc_pre（代表dsgc实例）、sp_cds_dsgc_wedata_dc（代表wedata实例）
   */
  Filters?: Array<DspaDataSourceMngFilter>
  /**
   * 展示模式。

目前只有两个值的处理逻辑：

空值：需要查询每个实例的配额信息，因为是串行查询，所以速度很慢，limit最大为100

"simple"：不需要查询每个实例的配额信息，速度快，limit最大为1000
   */
  ListMode?: string
}

/**
 * ModifyDSPAAssessmentRiskLatest请求参数结构体
 */
export interface ModifyDSPAAssessmentRiskLatestRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 风险状态（waiting:待处理，processing:处理中，finished:已处理，ignored:已忽略）
   */
  Status: string
  /**
   * 最新风险项Id
   * @deprecated
   */
  RiskLatestTableId?: number
  /**
   * 备注
   */
  Note?: string
  /**
   * 处置人
   */
  ProcessPeople?: string
  /**
   * 批量处理的列表
   */
  BathRiskIdList?: Array<number | bigint>
}

/**
 * StopDSPADiscoveryTask返回参数结构体
 */
export interface StopDSPADiscoveryTaskResponse {
  /**
   * 任务扫描结果ID
   */
  ResultId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VerifyDSPADiscoveryRule返回参数结构体
 */
export interface VerifyDSPADiscoveryRuleResponse {
  /**
   * 验证结果
Success 验证成功
Failed 验证失败
   */
  VerifyResult?: string
  /**
   * 验证结果详情
   */
  DetailInfo?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPAAssessmentTemplateControlItems请求参数结构体
 */
export interface DescribeDSPAAssessmentTemplateControlItemsRequest {
  /**
   * DSPA实例Id。格式“dspa-xxxxxxxx”
   */
  DspaId: string
  /**
   * 评估模板Id。格式“template-xxxxxxxx”
   */
  TemplateId: string
  /**
   * 偏移量。默认为0
   */
  Offset?: number
  /**
   * 结果集个数限制。默认为20，最大值为100
   */
  Limit?: number
  /**
   * 过滤项。
支持模糊搜索：ItemId，ItemName
支持过滤：
Source：评估项来源，system / user
ItemType：评估项类型，questionnaire / auto
ItemSubType：评估项子类型
Status：评估项启用状态，draft / launched
   */
  Filters?: Array<DspaAssessmentFilter>
}

/**
 * DescribeDSPAAssessmentRiskItemTop5返回参数结构体
 */
export interface DescribeDSPAAssessmentRiskItemTop5Response {
  /**
   * 风险结果
   */
  Items?: Array<RiskItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 敏感数据识别规则
 */
export interface DspaDiscoveryDataRule {
  /**
   * 规则类型；取值：
keyword 关键字, 
regex 正则
   */
  RuleType: string
  /**
   * 内容
   */
  RuleContent: string
  /**
   * 该字段是针对规则类型RuleType为keyword类型时的一个扩展属性
   */
  ExtendParameters?: Array<DatagovRuleExtendParameter>
}

/**
 * BindDSPAResourceCosBuckets返回参数结构体
 */
export interface BindDSPAResourceCosBucketsResponse {
  /**
   * 绑定结果数组
   */
  CosTaskResults?: Array<CosTaskResult>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPAESDataSample返回参数结构体
 */
export interface DescribeDSPAESDataSampleResponse {
  /**
   * 数据样本列表，最多10条数据
   */
  Items?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDSPAComplianceGroup请求参数结构体
 */
export interface CreateDSPAComplianceGroupRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 合规组名称，1-60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字，Name不可重复
   */
  Name: string
  /**
   * 合规组描述，最大长度为1024个字符
   */
  Description?: string
  /**
   * 合规组规则配置（参数已废弃，请传空数组）
   */
  ComplianceGroupRules?: Array<ComplianceGroupRuleIdInfo>
  /**
   * 分级组ID，默认值为1，新增参数，可选
   */
  LevelGroupId?: number
  /**
   * 1代表模版开启，0代表模版关闭
   */
  Status?: number
  /**
   * 该complianceId的开启状态将被关闭
   */
  CloseComplianceId?: number
}

/**
 * VerifyDSPACOSRule返回参数结构体
 */
export interface VerifyDSPACOSRuleResponse {
  /**
   * 验证结果
Success 验证成功
Failed 验证失败
   */
  VerifyResult?: string
  /**
   * 验证结果详情
   */
  DetailInfo?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryDSPAMetaResourceDbList返回参数结构体
 */
export interface QueryDSPAMetaResourceDbListResponse {
  /**
   * 数据库实例DB列表的查询结果。
   */
  DbRelationStatusItems?: Array<DbRelationStatusItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPALevelGroups请求参数结构体
 */
export interface DescribeDSPALevelGroupsRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 分级组名称
   */
  Name?: string
}

/**
 * CreateDSPACOSDiscoveryTask返回参数结构体
 */
export interface CreateDSPACOSDiscoveryTaskResponse {
  /**
   * 任务ID
   */
  TaskId?: number
  /**
   * 扫描结果ID
   */
  ResultId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPADiscoveryTaskResultDetail请求参数结构体
 */
export interface DescribeDSPADiscoveryTaskResultDetailRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 任务ID
   */
  TaskId: number
  /**
   * 扫描数据库结果ID
   */
  DbResultId: number
  /**
   * 合规组ID
   */
  ComplianceId: number
  /**
   * 数据库名
   */
  DbName: string
  /**
   * 所属数据表名
   */
  TableName?: string
  /**
   * 敏感数据分类ID
   */
  CategoryId?: number
  /**
   * 敏感数据分级ID
   */
  LevelId?: number
  /**
   * 偏移量，默认为0
   */
  Offset?: number
  /**
   * 返回数量，默认值为20，最大值为100
   */
  Limit?: number
  /**
   * 多级分类的分类ID集合
   */
  CategoryIdList?: Array<number | bigint>
}

/**
 * DescribeClassificationInfo返回参数结构体
 */
export interface DescribeClassificationInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPATaskResultDataSample请求参数结构体
 */
export interface DescribeDSPATaskResultDataSampleRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 字段扫描结果ID
   */
  FieldResultId: number
  /**
   * 排序方式
   */
  Order?: string
  /**
   * 排序字段
   */
  OrderField?: string
}

/**
 * 生成的建议的风险等级矩阵
 */
export interface SuggestRiskLevelMatrix {
  /**
   * 矩阵
   */
  RiskLevelMatrix?: Array<SuggestRiskLevelMatrixItem>
}

/**
 * DescribeDSPAAssessmentRiskDealedOverview返回参数结构体
 */
export interface DescribeDSPAAssessmentRiskDealedOverviewResponse {
  /**
   * 遗留待处理风险总数
   */
  TotalCount: number
  /**
   * 昨日完成风险处置数
   */
  YesterdayDealedCount: number
  /**
   * 遗留待处理风险数周同比
   */
  UnDealedRiskWeekRatio: number
  /**
   * 遗留待处理风险数日环比
   */
  UnDealedRiskDayRatio: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDSPAAssessmentRiskLatest返回参数结构体
 */
export interface ModifyDSPAAssessmentRiskLatestResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPACOSDiscoveryTaskDetail请求参数结构体
 */
export interface DescribeDSPACOSDiscoveryTaskDetailRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 任务ID
   */
  TaskId: number
}

/**
 * 合规组分类关联规则信息
 */
export interface CreateComplianceRules {
  /**
   * 规则id
   */
  RuleId: number
  /**
   * 级别id
   */
  LevelId: number
}

/**
 * EnableTrialVersion请求参数结构体
 */
export interface EnableTrialVersionRequest {
  /**
   * DSPA实例ID。
   */
  DspaId: string
  /**
   * 体验版本名称。
   */
  TrialVersion: string
}

/**
 * DescribeDSPADiscoveryTaskTables请求参数结构体
 */
export interface DescribeDSPADiscoveryTaskTablesRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 任务ID
   */
  TaskId: number
  /**
   * 数据库扫描结果ID
   */
  DbResultId: number
  /**
   * db名称
   */
  DbName?: string
}

/**
 * DescribeDSPAAssessmentRiskSideDistributed请求参数结构体
 */
export interface DescribeDSPAAssessmentRiskSideDistributedRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 评估模板id
   */
  TemplateId: number
}

/**
 * DescribeDSPAAssessmentNewDiscoveredRiskOverview返回参数结构体
 */
export interface DescribeDSPAAssessmentNewDiscoveredRiskOverviewResponse {
  /**
   * 待处理的风险数
   */
  NewDiscoveredRiskCount?: number
  /**
   * 受影响的资产数
   */
  AffectedAssetCount?: number
  /**
   * 周同比
   */
  WeekRatio?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPAAssessmentRiskAmountOverview请求参数结构体
 */
export interface DescribeDSPAAssessmentRiskAmountOverviewRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 评估模板id
   */
  TemplateId: number
}

/**
 * DescribeDSPADiscoveryTaskDetail返回参数结构体
 */
export interface DescribeDSPADiscoveryTaskDetailResponse {
  /**
   * 任务详情
   */
  Task?: DspaDiscoveryTaskDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPACOSDiscoveryTasks返回参数结构体
 */
export interface DescribeDSPACOSDiscoveryTasksResponse {
  /**
   * 任务列表
   */
  Items?: Array<DspaCOSDiscoveryTask>
  /**
   * 符合条件的任务列表数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EnableDSPADiscoveryRule请求参数结构体
 */
export interface EnableDSPADiscoveryRuleRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 规则ID
   */
  RuleId: number
  /**
   * 开关ScanRule
   */
  Enable: boolean
}

/**
 * 描述对象存储类敏感识别扫描人元数据条件。
 */
export interface DspaDiscoveryTaskCOSCondition {
  /**
   * 数据桶名称
   */
  Bucket?: string
  /**
   * 文件类型
   */
  FileTypes?: Array<string>
  /**
   * 文件大小上限，单位为KB，如1000, 目前单个文件最大只支持1GB（1048576KB）
   */
  FileSizeLimit?: number
}

/**
 * DescribeDSPACOSDataAssetDetail请求参数结构体
 */
export interface DescribeDSPACOSDataAssetDetailRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 合规组ID
   */
  ComplianceId: number
}

/**
 * DescribeDSPAAssessmentRiskTemplateDetail返回参数结构体
 */
export interface DescribeDSPAAssessmentRiskTemplateDetailResponse {
  /**
   * 模板id
   */
  TemplateId?: number
  /**
   * 模板名称
   */
  TemplateName?: string
  /**
   * 模板的描述
   */
  TemplateDescription?: string
  /**
   * 风险等级
   */
  RiskLevelId?: number
  /**
   * 风险等级名称
   */
  RiskLevelName?: string
  /**
   * 脆弱项配置列表
   */
  RiskItemList?: Array<AssessmentRiskItem>
  /**
   * 脆弱项配置条数
   */
  TotalCount?: number
  /**
   * 被任务引用次数
   */
  TaskCitations?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDSPACOSTaskResult请求参数结构体
 */
export interface ModifyDSPACOSTaskResultRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 合规组ID
   */
  ComplianceId: number
  /**
   * 文件扫描结果ID
   */
  FileResultId: number
  /**
   * 是否设置为非敏感文件
   */
  IsSetNonSensitiveFile?: boolean
  /**
   * 文件名
   */
  FileName?: string
  /**
   * 桶名
   */
  BucketName?: string
  /**
   * 数据源id
   */
  DataSourceId?: string
}

/**
 * DescribeDSPASupportedMetas请求参数结构体
 */
export interface DescribeDSPASupportedMetasRequest {
  /**
   * 元数据类型
   */
  MetaTypes?: Array<string>
}

/**
 * ExportAssetDetailData返回参数结构体
 */
export interface ExportAssetDetailDataResponse {
  /**
   * 导出任务id
   */
  ExportTaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 分类分级规则数量
 */
export interface RuleEffectItem {
  /**
   * 规则描述
   */
  Name?: string
  /**
   * 规则值
   */
  Value?: number
}

/**
 * 分类规则信息
 */
export interface CategoryRule {
  /**
   * 分类id
   */
  CategoryId?: number
  /**
   * 规则id
   */
  RuleId?: number
  /**
   * 规则名称
   */
  RuleName?: string
  /**
   * 级别id
   */
  LevelId?: number
  /**
   * 级别名称
   */
  LevelName?: string
  /**
   * 分类规则绑定关系id
   */
  Id?: number
  /**
   * 别名ID
   */
  AliasRuleId?: number
  /**
   * 别名规则名称
   */
  AliasRuleName?: string
  /**
   * 各类分类分级规则数量
   */
  RuleEffectItems?: Array<RuleEffectItem>
  /**
   * 规则状态
   */
  RuleStatus?: number
}

/**
 * CreateDSPAMetaResources请求参数结构体
 */
export interface CreateDSPAMetaResourcesRequest {
  /**
   * 资源类型，支持：cdb（云数据库 MySQL）、dcdb（TDSQL MySQL版）、mariadb（云数据库 MariaDB）、postgres（云数据库 PostgreSQL）、cynosdbpg（TDSQL-C PostgreSQL版）、cynosdbmysql（TDSQL-C MySQL版）
   */
  MetaType: string
  /**
   * 资源所处地域。
   */
  ResourceRegion: string
  /**
   * DSPA实例ID。
   */
  DspaId: string
  /**
   * 用来标记本次更新是否已经是最后一次，可选值：continue（后续还需要更新）、finished（本次是最后一次更新）。
   */
  UpdateStatus: string
  /**
   * 本次更新的ID号，用来标记一次完整的更新过程。
   */
  UpdateId: string
  /**
   * 资源列表。
   */
  Items: Array<DspaUserResourceMeta>
}

/**
 * 待处理风险项数量信息
 */
export interface RiskCountInfo {
  /**
   * 风险等级
   */
  RiskLevel: string
  /**
   * 该等级风险项数量
   */
  Count: number
  /**
   * 风险等级名称
   */
  RiskLevelName: string
}

/**
 * CreateDSPAAssessmentTask请求参数结构体
 */
export interface CreateDSPAAssessmentTaskRequest {
  /**
   * DSPA实例Id，格式“dspa-xxxxxxxx”
   */
  DspaId: string
  /**
   * 评估任务名称。1-20个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字
   */
  Name: string
  /**
   * 评估模板Id，格式“template-xxxxxxxx”
   */
  TemplateId: string
  /**
   * 评估业务名称。1-60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字
   * @deprecated
   */
  BusinessName?: string
  /**
   * 业务所属部门。1-60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字
   * @deprecated
   */
  BusinessDept?: string
  /**
   * 业务负责人。1-60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字
   * @deprecated
   */
  BusinessOwner?: string
  /**
   * 分类分级模板Id
   */
  ComplianceId?: number
  /**
   * 敏感数据扫描数据源条件。
   */
  DiscoveryCondition?: DiscoveryCondition
  /**
   * 说明
   */
  Description?: string
}

/**
 * CreateDSPAAssessmentRiskLevel返回参数结构体
 */
export interface CreateDSPAAssessmentRiskLevelResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPADiscoveryTaskResult请求参数结构体
 */
export interface DescribeDSPADiscoveryTaskResultRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 数据源类型，可取值如下：
cdb 表示云数据库 MySQL,
dcdb 表示TDSQL MySQL版,
mariadb 表示云数据库 MariaDB,
postgres 表示云数据库 PostgreSQL,
cynosdbpg 表示TDSQL-C PostgreSQL版,
cynosdbmysql 表示TDSQL-C MySQL版,
selfbuilt-db 表示自建数据库
   */
  DataSourceType: string
  /**
   * 任务ID
   */
  TaskId?: number
  /**
   * 任务名称
   */
  TaskName?: string
  /**
   * 数据源ID
   */
  DataSourceId?: string
  /**
   * 数据库名称
   */
  DbName?: string
  /**
   * 偏移量，默认值为0
   */
  Offset?: number
  /**
   * 返回数量，默认值为20，最大值为100
   */
  Limit?: number
  /**
   * 资源所在地域
   */
  ResourceRegion?: string
}

/**
 * DescribeDSPACategoryTreeWithRules请求参数结构体
 */
export interface DescribeDSPACategoryTreeWithRulesRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 合规组模板id
   */
  ComplianceId: number
  /**
   * 分类id
   */
  CategoryId?: number
}

/**
 * DescribeClassificationRuleCount请求参数结构体
 */
export type DescribeClassificationRuleCountRequest = null

/**
 * 数据库实例的DB绑定关系状态信息。
 */
export interface DbRelationStatusItem {
  /**
   * DB名称。
   */
  DbName?: string
  /**
   * DB绑定状态。
   */
  BindStatus?: string
  /**
   * DB有效性状态。
   */
  ValidStatus?: string
}

/**
 * CreateNewClassification请求参数结构体
 */
export type CreateNewClassificationRequest = null

/**
 * 建议使用的安全产品
 */
export interface SecurityProduct {
  /**
   * 产品名称
   */
  ProductName?: string
  /**
   * 产品链接
   */
  ReferUrl?: string
}

/**
 * DescribeDSPAAssessmentRiskLevelList请求参数结构体
 */
export interface DescribeDSPAAssessmentRiskLevelListRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 限制条数
   */
  Limit: number
  /**
   * 偏移量
   */
  Offset: number
}

/**
 * GetTrialVersion返回参数结构体
 */
export interface GetTrialVersionResponse {
  /**
   * 体验版本名称。
   */
  TrialVersion?: string
  /**
   * 版本体验结束时间戳。
   */
  TrialEndAt?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPAComplianceUpdateNotification返回参数结构体
 */
export interface DescribeDSPAComplianceUpdateNotificationResponse {
  /**
   * 模板是否更新
   */
  IsUpdated?: boolean
  /**
   * 任务名称集合
   */
  TaskNameSet?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPAComplianceGroups请求参数结构体
 */
export interface DescribeDSPAComplianceGroupsRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 合规组ID
   */
  ComplianceGroupId?: number
  /**
   * 合规组名称
   */
  Name?: string
  /**
   * 偏移量，默认值为0
   */
  Offset?: number
  /**
   * 返回结果集数量，默认值是10000，最大值为10000，根据该资源的个数限制条件，该资源的个数不会超过10000，所以如果不输入该字段，默认获取全量数据
   */
  Limit?: number
  /**
   * 合规组类型可选值：0 默认合规组, 1 系统合规组, 2 自定义合规组
   */
  ComplianceGroupTypeList?: Array<number | bigint>
  /**
   * 是否仅显示已开启模版
   */
  IsFilterCloseComplianceGroup?: boolean
}

/**
 * ListDSPACosMetaResources返回参数结构体
 */
export interface ListDSPACosMetaResourcesResponse {
  /**
   * 符合条件的COS元数据数量。
   */
  TotalCount?: number
  /**
   * COS元数据信息
   */
  Items?: Array<DSPACosMetaDataInfo>
  /**
   * DSPA实例ID
   */
  DspaId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * cos桶资源项
 */
export interface CosBucketItem {
  /**
   * 资源所处地域。
   */
  Region: string
  /**
   * COS桶列表。
   */
  Buckets: Array<string>
}

/**
 * cos批量操作返回结果结构体
 */
export interface CosTaskResult {
  /**
   * 结果类型。
   */
  Result?: string
  /**
   * 结果描述。
   */
  ResultDescription?: string
  /**
   * 错误信息描述。
   */
  ErrDescription?: ErrDescription
  /**
   * 资源ID。
   */
  ResourceId?: string
}

/**
 * AKSK泄漏信息
 */
export interface AKSKLeak {
  /**
   * AK编码
   */
  AK?: string
  /**
   * SK编码
   */
  SK?: string
  /**
   * URL编码
   */
  URL?: string
}

/**
 * DescribeDSPADataSourceDbInfo返回参数结构体
 */
export interface DescribeDSPADataSourceDbInfoResponse {
  /**
   * 数据库信息列表
   */
  Items?: Array<DSPADataSourceDbInfo>
  /**
   * 数据源id
   */
  DataSourceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据库DB资源项
 */
export interface DbResourceItem {
  /**
   * DB名称。
   */
  DbName: string
}

/**
 * CreateDSPACategoryRelation请求参数结构体
 */
export interface CreateDSPACategoryRelationRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 分类id
   */
  CategoryId: number
  /**
   * 父级分类id（无父级分类传-1）
   */
  ParentCategoryId: number
  /**
   * 分类模板id
   */
  ComplianceId: number
}

/**
 * ModifyMergeClassification返回参数结构体
 */
export interface ModifyMergeClassificationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAssetSortingReportTask返回参数结构体
 */
export interface CreateAssetSortingReportTaskResponse {
  /**
   * 报表任务id
   */
  ReportTaskId?: number
  /**
   * 提示信息
   */
  Remark?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetResourceConnectionStatus返回参数结构体
 */
export interface GetResourceConnectionStatusResponse {
  /**
   * 连接状态，success -- 连接成功，failed -- 连接失败
   */
  ConnectionStatus?: string
  /**
   * 连接状态的描述信息。
   */
  ConnectionDesc?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPACategoryRuleStatistic请求参数结构体
 */
export interface DescribeDSPACategoryRuleStatisticRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 合规组模板id
   */
  ComplianceId: number
}

/**
 * DescribeDSPARDBDataAssetByComplianceId请求参数结构体
 */
export interface DescribeDSPARDBDataAssetByComplianceIdRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 合规组ID
   */
  ComplianceId: number
  /**
   * 数据源类型，不填默认过滤非自建的所有关系型数据源类型，填selfbuilt-db只过滤自建类型
   */
  DataSourceType?: string
  /**
   * 自建还是云上
   */
  BuildType?: string
}

/**
 * CreateDSPAAssessmentRiskLevel请求参数结构体
 */
export interface CreateDSPAAssessmentRiskLevelRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 风险等级名称
   */
  RiskLevelName: string
  /**
   * 识别模板
   */
  IdentifyComplianceId: number
  /**
   * 风险等级矩阵
   */
  RiskLevelRule: Array<RiskLevelMatrix>
  /**
   * 风险等级的描述
   */
  RiskLevelDescription?: string
}

/**
 * es敏感资产详情列表
 */
export interface ESAssetDBDetail {
  /**
   * 数据源id
   */
  DataSourceId?: string
  /**
   * 索引名称
   */
  IndexName?: string
  /**
   * 数据库类型
   */
  DataType?: string
  /**
   * 字段的数量
   */
  FieldNums?: number
  /**
   * 敏感字段的数量
   */
  SensitiveFieldNums?: number
  /**
   * 敏感数据分布
   */
  DistributionData?: Array<Note>
}

/**
 * StartDSPADiscoveryTask请求参数结构体
 */
export interface StartDSPADiscoveryTaskRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 任务ID
   */
  TaskId: number
}

/**
 * DeleteDSPAAssessmentTask请求参数结构体
 */
export interface DeleteDSPAAssessmentTaskRequest {
  /**
   * DSPA实例Id，格式“dspa-xxxxxxxx”
   */
  DspaId: string
  /**
   * 评估任务Id，格式“task-xxxxxxxx”
   */
  TaskId: string
}

/**
 * DescribeSensitiveCOSDataDistribution请求参数结构体
 */
export interface DescribeSensitiveCOSDataDistributionRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 2331
   */
  ComplianceId: number
  /**
   * 查询的资产信息列表
   */
  AssetList: Array<AssetList>
}

/**
 * DescribeDSPAAssessmentRiskTemplateVulnerableList返回参数结构体
 */
export interface DescribeDSPAAssessmentRiskTemplateVulnerableListResponse {
  /**
   * 脆弱项列表
   */
  RiskItemList?: Array<AssessmentRiskItem>
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPACOSDiscoveryTaskResult返回参数结构体
 */
export interface DescribeDSPACOSDiscoveryTaskResultResponse {
  /**
   * 扫描任务结果项
   */
  Items?: Array<DspaCOSDiscoveryTaskResult>
  /**
   * 符合条件的数据结果数目
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等

若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 */
export interface Filter {
  /**
   * 需要过滤的字段。
   */
  Name: string
  /**
   * 字段的过滤值。
   */
  Values: Array<string>
}

/**
 * ModifyDSPAComplianceGroup请求参数结构体
 */
export interface ModifyDSPAComplianceGroupRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 合规组ID
   */
  ComplianceGroupId: number
  /**
   * 合规组名称，1-60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字，Name不可重复
   */
  Name?: string
  /**
   * 合规组描述，最大长度为1024个字符
   */
  Description?: string
  /**
   * 合规组规则配置（参数已废弃，请传空数组）
   */
  ComplianceGroupRules?: Array<ComplianceGroupRuleIdInfo>
  /**
   * 分级组ID，新增参数，可选参数，默认值为1
   */
  LevelGroupId?: number
  /**
   * 是否开启别名
   */
  RuleAlias?: boolean
}

/**
 * DescribeDSPAAssessmentRisks请求参数结构体
 */
export interface DescribeDSPAAssessmentRisksRequest {
  /**
   * DSPA实例Id，格式“dspa-xxxxxxxx”
   */
  DspaId: string
  /**
   * 评估任务Id，格式“task-xxxxxxxx”
   */
  TaskId: string
  /**
   * 偏移量。默认为0
   */
  Offset?: number
  /**
   * 结果集个数限制。默认为20，最大值为100
   */
  Limit?: number
  /**
   * 过滤项。
支持模糊搜索：ControlItemName。
支持过滤：
RiskLevel：风险等级（high，medium，low）
Status：风险处理状态(waiting待处理, processing处理中, stopped处理暂停, finished已处理, failed处理失败)
   */
  Filters?: Array<DspaAssessmentFilter>
}

/**
 * RDB实例信息
 */
export interface RDBInstance {
  /**
   * 数据源Id
   */
  DataSourceId: string
  /**
   * cdb, dcdb, mariadb, postgres, cynosdbpg, cynosdbmysql, cos, mysql_like_proto, postgre_like_proto
   */
  DataSourceType: string
  /**
   * 资源所在地域
   */
  ResourceRegion: string
  /**
   * 若未来扩展到DBName粒度，可采用
   */
  DBs?: Array<DBStatements>
}

/**
 * DescribeDSPAAssessmentLatestRiskList返回参数结构体
 */
export interface DescribeDSPAAssessmentLatestRiskListResponse {
  /**
   * 最新风险详情列表
   */
  LatestRiskList?: Array<RiskItemInfo>
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EnableDSPADiscoveryRule返回参数结构体
 */
export interface EnableDSPADiscoveryRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSensitiveRDBDataDistribution返回参数结构体
 */
export interface DescribeSensitiveRDBDataDistributionResponse {
  /**
   * 分级分布
   */
  LevelDistribution?: Array<Note>
  /**
   * 分类分布
   */
  CategoryDistribution?: Array<Note>
  /**
   * 敏感规则分布详情列表
   */
  RuleDistribution?: Array<RuleDistribution>
  /**
   * 计算占比字段
   */
  SensitiveDataNum?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 建议生成的二位矩阵的第二层
 */
export interface SuggestRiskLevelMatrixItem {
  /**
   * 分类分级等级
   */
  SensitiveLevel?: RiskMatrixLevel
  /**
   * 脆弱项等级
   */
  VulnerabilityLevel?: RiskMatrixLevel
  /**
   * 风险名
   */
  RiskName?: string
  /**
   * 分数
   */
  RiskScore?: number
}

/**
 * 敏感数据分级信息
 */
export interface DspaDiscoveryLevelDetail {
  /**
   * 分级组名称，唯一性约束，最多60个字符，仅允许输入中文、英文字母、数字、'_'、'-'，并且开头和结尾需为中文、英文字母或者数字，Name不可重复
   */
  LevelGroupName?: string
  /**
   * 分级组来源，0为内置，1为自定义
   */
  Source?: number
  /**
   * 分级组描述，最多1024字符
   */
  LevelGroupDesc?: string
  /**
   * 具体分级标识详情
   */
  LevelDetail?: Array<LevelItem>
  /**
   * 引用合规组次数
   */
  RefComplianceCnt?: number
  /**
   * 引用合规组
   */
  RefCompliance?: Array<DspaDiscoveryComplianceGroup>
  /**
   * 分级组ID
   */
  LevelGroupId?: number
}

/**
 * ModifyClassificationRuleState返回参数结构体
 */
export interface ModifyClassificationRuleStateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPAESDataAssetDetail请求参数结构体
 */
export interface DescribeDSPAESDataAssetDetailRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 合规组id
   */
  ComplianceId: number
  /**
   * 偏移量
   */
  Offset: number
  /**
   * 限制条目数
   */
  Limit: number
  /**
   * 过滤条件
   */
  Filters?: Array<Filter>
  /**
   * 可信分排序，ASC升序
DESC降序
   */
  CreditScore?: string
}

/**
 * ListDSPAMetaResources返回参数结构体
 */
export interface ListDSPAMetaResourcesResponse {
  /**
   * DSPA实例ID。
   */
  DspaId?: string
  /**
   * 用户资源列表。
   */
  Resources?: Array<DspaUserResourceMeta>
  /**
   * 资源总量。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDSPACategory返回参数结构体
 */
export interface CreateDSPACategoryResponse {
  /**
   * 敏感数据分类ID
   */
  CategoryId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPACategoryRules返回参数结构体
 */
export interface DescribeDSPACategoryRulesResponse {
  /**
   * 分类规则信息
   */
  CategoryRules?: Array<CategoryRule>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeExportTaskResult请求参数结构体
 */
export interface DescribeExportTaskResultRequest {
  /**
   * dspa实例id
   */
  DspaId: string
  /**
   * 导出任务id
   */
  ExportTaskId: number
}

/**
 * QueryDSPAMetaResourceDbList请求参数结构体
 */
export interface QueryDSPAMetaResourceDbListRequest {
  /**
   * DSPA实例ID。
   */
  DspaId: string
  /**
   * 数据库实例ID。
   */
  ResourceId: string
  /**
   * 数据库实例所在地域。
   */
  ResourceRegion: string
  /**
   * 数据库实例类型。
   */
  MetaType: string
}

/**
 * DescribeBindDBList返回参数结构体
 */
export interface DescribeBindDBListResponse {
  /**
   * 绑定的DB列表（已废弃）
   */
  BindDBList?: Array<string>
  /**
   * 绑定信息
   */
  BindList?: Array<DBInstanceInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisableDSPAMetaResourceAuth返回参数结构体
 */
export interface DisableDSPAMetaResourceAuthResponse {
  /**
   * DSPA实例ID。
   */
  DspaId?: string
  /**
   * 授权结果。
   */
  Results?: Array<DspaTaskResult>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeReportTasks返回参数结构体
 */
export interface DescribeReportTasksResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 报表信息
   */
  ItemSet?: Array<ReportInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetTrialVersion请求参数结构体
 */
export interface GetTrialVersionRequest {
  /**
   * DSPA实例ID。
   */
  DspaId: string
}

/**
 * 合规组信息
 */
export interface DspaDiscoveryComplianceGroupInfo {
  /**
   * 合规组ID
   */
  ComplianceGroupId?: number
  /**
   * 合规组名称
   */
  Name?: string
  /**
   * 合规组描述信息
   */
  Description?: string
  /**
   * 合规组类型；0 默认合规组，1 系统合规组（除默认合规组外）, 2 自定义合规组
   */
  ComplianceGroupType?: number
  /**
   * 合规组对应的规则项
   */
  ComplianceGroupRules?: Array<DspaDiscoveryComplianceGroupRule>
  /**
   * 合规组对应的分级组ID
   */
  LevelGroupId?: number
  /**
   * 是否禁止使用（true，禁止使用，false，可以使用）
   */
  Disabled?: boolean
  /**
   * 是否别名
   */
  IsAlias?: boolean
  /**
   * 1代表模版开启，0代表模版关闭
   */
  Status?: number
  /**
   * 模版最后修改时间
   */
  ModifyTime?: string
}

/**
 * ES的概览页资产详情
 */
export interface ESDataAssetDetail {
  /**
   * id
   */
  FieldResultId?: number
  /**
   * 数据源id
   */
  DataSourceId?: string
  /**
   * 数据源名称
   */
  DataSourceName?: string
  /**
   * 类型
   */
  DataSourceType?: string
  /**
   * 地域信息
   */
  ResourceRegion?: string
  /**
   * 索引名称
   */
  IndexName?: string
  /**
   * 字段名称
   */
  FieldName?: string
  /**
   * 分类id
   */
  CategoryId?: number
  /**
   * 分类名称
   */
  CategoryName?: string
  /**
   * 分类路径数组
   */
  CategoryArr?: Array<string>
  /**
   * 等级id
   */
  LevelId?: number
  /**
   * 分级名称
   */
  LevelRiskName?: string
  /**
   * 分级分数
   */
  LevelRiskScore?: number
  /**
   * 可信分
   */
  TrustedScore?: number
  /**
   * 规则id
   */
  RuleId?: number
  /**
   * 规则名称
   */
  RuleName?: string
  /**
   * 0系统识别，1人工打标
   */
  IdentifyType?: number
  /**
   * 0未核查，1已核查
   */
  CheckStatus?: number
}

/**
 * DescribeDSPACOSTaskResultDetail请求参数结构体
 */
export interface DescribeDSPACOSTaskResultDetailRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 任务ID
   */
  TaskId: number
  /**
   * 扫描Bucket结果ID
   */
  BucketResultId: number
  /**
   * 合规组ID
   */
  ComplianceId: number
  /**
   * 文件名
   */
  FileName?: string
  /**
   * 敏感数据分类ID
   */
  CategoryId?: number
  /**
   * 敏感数据分级ID
   */
  LevelId?: number
  /**
   * 偏移量，默认为0
   */
  Offset?: number
  /**
   * 返回数量，默认值为20，最大值为100
   */
  Limit?: number
  /**
   * 扫描桶名称。
   */
  BucketName?: string
  /**
   * 多级分类的分类ID集合
   */
  CategoryIdList?: Array<number | bigint>
}

/**
 * DescribeDSPALevelDetail返回参数结构体
 */
export interface DescribeDSPALevelDetailResponse {
  /**
   * 符合条件的敏感数据分级标识记录
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<LevelItem>
  /**
   * 符合条件的敏感数据分级标识记录数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPAAssessmentRiskSideDistributed返回参数结构体
 */
export interface DescribeDSPAAssessmentRiskSideDistributedResponse {
  /**
   * 风险面的分布
   */
  RiskSideDistributed?: Array<RiskSideDistributed>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDSPACOSDiscoveryTasks请求参数结构体
 */
export interface DescribeDSPACOSDiscoveryTasksRequest {
  /**
   * DSPA实例ID
   */
  DspaId: string
  /**
   * 任务ID
   */
  TaskId?: number
  /**
   * 任务名称
   */
  Name?: string
  /**
   * 任务扫描结果状态，可供选择的状态值有：-1待触发 0待扫描 1扫描中 2扫描终止 3扫描成功 4扫描失败
   */
  StatusList?: Array<number | bigint>
  /**
   * 偏移量，默认为0
   */
  Offset?: number
  /**
   * 返回结果集数量，默认值是10000，最大值为10000，根据该资源的个数限制条件，该资源的个数不会超过10000，所以如果不输入该字段，默认获取全量数据
   */
  Limit?: number
}

/**
 * ModifyMergeClassification请求参数结构体
 */
export type ModifyMergeClassificationRequest = null

/**
 * DescribeDSPAAssessmentPendingRiskOverview返回参数结构体
 */
export interface DescribeDSPAAssessmentPendingRiskOverviewResponse {
  /**
   * 待处理的风险数
   */
  PendingRiskCount?: number
  /**
   * 受影响的资产数
   */
  AffectedAssetCount?: number
  /**
   * 周同比
   */
  WeekRatio?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDSPAAssessmentRisk返回参数结构体
 */
export interface ModifyDSPAAssessmentRiskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RDB敏感资产详情列表
 */
export interface AssetDBDetail {
  /**
   * 数据源id
   */
  DataSourceId?: string
  /**
   * 数据库名称
   */
  DdName?: string
  /**
   * 数据库类型
   */
  DataType?: string
  /**
   * 表的数量
   */
  TableNums?: number
  /**
   * 敏感表数量
   */
  SensitiveTableNums?: number
  /**
   * 字段的数量
   */
  FieldNums?: number
  /**
   * 敏感字段的数量
   */
  SensitiveFieldNums?: number
  /**
   * 敏感数据分布
   */
  DistributionData?: Array<Note>
}

/**
 * ModifyClassificationRuleState请求参数结构体
 */
export type ModifyClassificationRuleStateRequest = null

/**
 * 风险趋势项
 */
export interface RiskDealedTrendItem {
  /**
   * 日期
   */
  Date?: string
  /**
   * 未解决数量
   */
  Unhandled?: number
  /**
   * 已解决数量
   */
  Handled?: number
  /**
   * 新发现
   */
  NewDiscoveryHandled?: number
}
