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
  DescribeAlarmNoticesRequest,
  CreateAlarmResponse,
  AlarmInfo,
  LogInfo,
  DeleteAlarmNoticeResponse,
  DescribeLogHistogramRequest,
  DeleteAlarmShieldRequest,
  DescribeLogContextRequest,
  DeleteShipperRequest,
  DeleteScheduledSqlRequest,
  DynamicIndex,
  DeleteLogsetResponse,
  UploadLogResponse,
  ParquetKeyInfo,
  DescribeCosRechargesResponse,
  CreateCloudProductLogTaskRequest,
  DescribeShipperTasksResponse,
  CheckFunctionRequest,
  Filter,
  DescribeAlarmShieldsResponse,
  ModifyConfigExtraResponse,
  SearchCosRechargeInfoRequest,
  DeleteScheduledSqlResponse,
  DescribeNoticeContentsRequest,
  ConsoleSharingConfig,
  DeleteConsoleSharingRequest,
  EscalateNoticeInfo,
  DescribeWebCallbacksResponse,
  CreateLogsetRequest,
  DescribeShippersRequest,
  CreateScheduledSqlResponse,
  DescribeDashboardsRequest,
  CreateConsoleSharingRequest,
  CreateCloudProductLogTaskResponse,
  DeleteNoticeContentResponse,
  DeleteTopicRequest,
  DescribePartitionsRequest,
  ContainerStdoutInfo,
  ConfigInfo,
  QueryRangeMetricRequest,
  ModifyAlarmResponse,
  DescribeShipperTasksRequest,
  CollectInfo,
  MergePartitionRequest,
  DescribeShippersResponse,
  TopicIdAndRegion,
  DescribeKafkaConsumerResponse,
  CreateConfigExtraResponse,
  KafkaRechargeInfo,
  DeleteKafkaRechargeResponse,
  Tag,
  ContainerWorkLoadInfo,
  CloudProductLogTaskInfo,
  ModifyDataTransformRequest,
  DescribeScheduledSqlInfoResponse,
  CallBackInfo,
  OpenKafkaConsumerResponse,
  AlarmTargetInfo,
  RuleKeyValueInfo,
  AlarmClassification,
  ScheduledSqlResouceInfo,
  FilePathInfo,
  DescribeIndexRequest,
  ModifyScheduledSqlResponse,
  FilterRuleInfo,
  DeleteCloudProductLogTaskRequest,
  ConditionInfo,
  MachineGroupInfo,
  DeleteMachineGroupInfoRequest,
  CreateLogsetResponse,
  NoticeRule,
  DashboardNoticeMode,
  KafkaProtocolInfo,
  ScheduledSqlTaskInfo,
  DescribeConfigMachineGroupsRequest,
  MetaTagInfo,
  ModifyTopicRequest,
  CreateCosRechargeRequest,
  DescribeConfigsResponse,
  DescribeNoticeContentsResponse,
  CreateAlarmShieldResponse,
  DeleteDataTransformResponse,
  DeleteConfigExtraResponse,
  ModifyConsumerRequest,
  CreateIndexResponse,
  DeleteConfigFromMachineGroupResponse,
  ModifyDashboardSubscribeResponse,
  ModifyDashboardSubscribeRequest,
  CreateConsumerResponse,
  DescribeConsoleSharingListResponse,
  DeleteWebCallbackResponse,
  ModifyMachineGroupResponse,
  DataTransformResouceInfo,
  CreateDashboardSubscribeRequest,
  DeleteMachineGroupRequest,
  FullTextInfo,
  QueryMetricResponse,
  DescribeAlarmShieldsRequest,
  ModifyLogsetRequest,
  WebCallbackInfo,
  ModifyNoticeContentResponse,
  SearchDashboardSubscribeRequest,
  DescribePartitionsResponse,
  DescribeConfigMachineGroupsResponse,
  ModifyAlarmRequest,
  DescribeTopicsResponse,
  LogItems,
  ModifyAlarmNoticeRequest,
  TopicExtendInfo,
  EventLog,
  CreateAlarmRequest,
  DeleteDataTransformRequest,
  DeleteExportResponse,
  DescribeDashboardSubscribesRequest,
  SearchLogInfos,
  DeleteMachineGroupResponse,
  PartitionInfo,
  NoticeContentTemplate,
  CreateNoticeContentResponse,
  DeleteCloudProductLogTaskResponse,
  CreateConfigExtraRequest,
  ExcludePathInfo,
  DescribeCloudProductLogTasksResponse,
  ConfigExtraInfo,
  AdvanceFilterRuleInfo,
  SplitPartitionRequest,
  DescribeMachineGroupConfigsResponse,
  CheckRechargeKafkaServerRequest,
  CreateAlarmShieldRequest,
  DeleteDashboardSubscribeResponse,
  DescribeLogHistogramResponse,
  CloseKafkaConsumerResponse,
  DeleteAlarmShieldResponse,
  DescribeConsumerRequest,
  CreateIndexRequest,
  DescribeLogsetsResponse,
  CreateTopicRequest,
  DescribeTopicsRequest,
  DeleteConsumerResponse,
  GetAlarmLogResponse,
  CreateWebCallbackResponse,
  CreateDashboardSubscribeResponse,
  DescribeExportsRequest,
  CreateMachineGroupResponse,
  DescribeCosRechargesRequest,
  AlarmTarget,
  CreateKafkaRechargeResponse,
  ModifyScheduledSqlRequest,
  DashboardSubscribeData,
  ModifyAlarmShieldResponse,
  CreateDeliverCloudFunctionRequest,
  DeleteConsumerRequest,
  NoticeContentInfo,
  CreateWebCallbackRequest,
  DescribeMachineGroupsRequest,
  DeleteIndexRequest,
  AnonymousInfo,
  ExtractRuleInfo,
  ModifyConsumerResponse,
  DescribeAlertRecordHistoryRequest,
  DescribeConfigsRequest,
  KafkaConsumerContent,
  LogsetInfo,
  DashboardTopicInfo,
  DeleteConfigRequest,
  AnalysisDimensional,
  DeleteWebCallbackRequest,
  LogRechargeRuleInfo,
  ModifyCloudProductLogTaskResponse,
  CloseKafkaConsumerRequest,
  ModifyCloudProductLogTaskRequest,
  CreateExportRequest,
  DashboardTemplateVariable,
  DescribeAlarmNoticesResponse,
  ModifyAlarmShieldRequest,
  AlarmNoticeDeliverConfig,
  DescribeMachineGroupsResponse,
  DeleteConfigExtraRequest,
  DashboardInfo,
  ModifyConfigRequest,
  AddMachineGroupInfoRequest,
  DescribeKafkaRechargesRequest,
  JsonInfo,
  ModifyConsoleSharingRequest,
  PreviewKafkaRechargeResponse,
  ModifyWebCallbackRequest,
  CreateShipperRequest,
  CreateTopicResponse,
  DeleteAlarmResponse,
  WebCallback,
  DescribeAlarmsResponse,
  CreateAlarmNoticeResponse,
  DeleteConsoleSharingResponse,
  CreateConfigRequest,
  CreateShipperResponse,
  AlertHistoryRecord,
  DescribeKafkaRechargesResponse,
  DeleteIndexResponse,
  ModifyTopicResponse,
  AlarmAnalysisConfig,
  PreviewLogStatistic,
  SearchLogErrors,
  ModifyIndexRequest,
  Column,
  ContentInfo,
  ValueInfo,
  DescribeDataTransformInfoRequest,
  DeleteConfigResponse,
  DeleteShipperResponse,
  ModifyKafkaConsumerRequest,
  RuleTagInfo,
  ExportInfo,
  ModifyIndexResponse,
  TopicInfo,
  GroupTriggerConditionInfo,
  DescribeLogContextResponse,
  SearchLogResponse,
  NoticeContent,
  ShipperTaskInfo,
  CheckFunctionResponse,
  DeleteExportRequest,
  PreviewKafkaRechargeRequest,
  SplitPartitionResponse,
  CreateDataTransformResponse,
  LogContextInfo,
  ModifyShipperRequest,
  NoticeReceiver,
  CreateKafkaRechargeRequest,
  DeleteKafkaRechargeRequest,
  RuleInfo,
  CreateConfigResponse,
  CreateConsumerRequest,
  ModifyWebCallbackResponse,
  AlarmNotice,
  ModifyConfigResponse,
  ModifyNoticeContentRequest,
  OpenKafkaConsumerRequest,
  QueryRangeMetricResponse,
  ModifyKafkaRechargeResponse,
  ModifyAlarmNoticeResponse,
  CreateDeliverCloudFunctionResponse,
  DataTransformTaskInfo,
  DescribeMachinesResponse,
  ModifyCosRechargeResponse,
  DescribeDashboardsResponse,
  CompressInfo,
  ApplyConfigToMachineGroupResponse,
  AlertHistoryNotice,
  DeleteAlarmRequest,
  AlarmShieldInfo,
  CreateConsoleSharingResponse,
  ModifyKafkaConsumerResponse,
  ModifyConsoleSharingResponse,
  MachineGroupTypeInfo,
  DeleteConfigFromMachineGroupRequest,
  SearchCosRechargeInfoResponse,
  DescribeAlarmsRequest,
  QueryMetricRequest,
  DescribeDashboardSubscribesResponse,
  CreateCosRechargeResponse,
  DescribeAlertRecordHistoryResponse,
  KeyValueInfo,
  SearchDashboardSubscribeResponse,
  ShipperInfo,
  AddMachineGroupInfoResponse,
  ModifyMachineGroupRequest,
  DeleteDashboardSubscribeRequest,
  DescribeConsumerResponse,
  MetricLabel,
  CreateNoticeContentRequest,
  Ckafka,
  DescribeMachinesRequest,
  MultiCondition,
  DeleteAlarmNoticeRequest,
  DescribeScheduledSqlInfoRequest,
  DeleteLogsetRequest,
  MachineInfo,
  ModifyLogsetResponse,
  MonitorTime,
  SearchLogTopics,
  MultiTopicSearchInformation,
  CreateMachineGroupRequest,
  LogItem,
  KeyRegexInfo,
  DescribeExportsResponse,
  ApplyConfigToMachineGroupRequest,
  CollectConfig,
  ContainerFileInfo,
  CsvInfo,
  DescribeConfigExtrasRequest,
  DescribeCloudProductLogTasksRequest,
  CreateAlarmNoticeRequest,
  ModifyShipperResponse,
  DescribeIndexResponse,
  HistogramInfo,
  DescribeMachineGroupConfigsRequest,
  ModifyConfigExtraRequest,
  ModifyKafkaRechargeRequest,
  CreateDataTransformRequest,
  DeleteMachineGroupInfoResponse,
  CheckRechargeKafkaServerResponse,
  ModifyCosRechargeRequest,
  DescribeLogsetsRequest,
  ParquetInfo,
  DeleteTopicResponse,
  CosRechargeInfo,
  SearchLogRequest,
  DescribeWebCallbacksRequest,
  DeleteNoticeContentRequest,
  DescribeKafkaConsumerRequest,
  ConsoleSharingParam,
  ModifyDataTransformResponse,
  DescribeDataTransformInfoResponse,
  ConsumerContent,
  UploadLogRequest,
  DeliverConfig,
  HighLightItem,
  RetryShipperTaskRequest,
  CreateExportResponse,
  HostFileInfo,
  DescribeConsoleSharingListRequest,
  GetAlarmLogRequest,
  MergePartitionResponse,
  CreateScheduledSqlRequest,
  RetryShipperTaskResponse,
  DescribeConfigExtrasResponse,
} from "./cls_models"

/**
 * cls client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cls.tencentcloudapi.com", "2020-10-16", clientConfig)
  }

  /**
   * 修改Kafka协议消费信息
   */
  async ModifyKafkaConsumer(
    req: ModifyKafkaConsumerRequest,
    cb?: (error: string, rep: ModifyKafkaConsumerResponse) => void
  ): Promise<ModifyKafkaConsumerResponse> {
    return this.request("ModifyKafkaConsumer", req, cb)
  }

  /**
   * 本接口用于创建Kafka数据订阅任务
   */
  async CreateKafkaRecharge(
    req: CreateKafkaRechargeRequest,
    cb?: (error: string, rep: CreateKafkaRechargeResponse) => void
  ): Promise<CreateKafkaRechargeResponse> {
    return this.request("CreateKafkaRecharge", req, cb)
  }

  /**
   * 本接口用于获取日志下载任务列表
   */
  async DescribeExports(
    req: DescribeExportsRequest,
    cb?: (error: string, rep: DescribeExportsResponse) => void
  ): Promise<DescribeExportsResponse> {
    return this.request("DescribeExports", req, cb)
  }

  /**
   * 本接口用于获取告警策略执行详情
   */
  async GetAlarmLog(
    req: GetAlarmLogRequest,
    cb?: (error: string, rep: GetAlarmLogResponse) => void
  ): Promise<GetAlarmLogResponse> {
    return this.request("GetAlarmLog", req, cb)
  }

  /**
   * 本接口用于创建索引
   */
  async CreateIndex(
    req: CreateIndexRequest,
    cb?: (error: string, rep: CreateIndexResponse) => void
  ): Promise<CreateIndexResponse> {
    return this.request("CreateIndex", req, cb)
  }

  /**
     * 查询指定时刻指标的最新值。
如果该时刻向前推5分钟内均无指标数据，则无相应的查询结果。
     */
  async QueryMetric(
    req: QueryMetricRequest,
    cb?: (error: string, rep: QueryMetricResponse) => void
  ): Promise<QueryMetricResponse> {
    return this.request("QueryMetric", req, cb)
  }

  /**
   * 修改现有的投递规则，客户如果使用此接口，需要自行处理CLS对指定bucket的写权限。
   */
  async ModifyShipper(
    req: ModifyShipperRequest,
    cb?: (error: string, rep: ModifyShipperResponse) => void
  ): Promise<ModifyShipperResponse> {
    return this.request("ModifyShipper", req, cb)
  }

  /**
   * 该接口用于创建告警渠道回调配置。
   */
  async CreateWebCallback(
    req: CreateWebCallbackRequest,
    cb?: (error: string, rep: CreateWebCallbackResponse) => void
  ): Promise<CreateWebCallbackResponse> {
    return this.request("CreateWebCallback", req, cb)
  }

  /**
   * 获取采集规则配置
   */
  async DescribeConfigs(
    req: DescribeConfigsRequest,
    cb?: (error: string, rep: DescribeConfigsResponse) => void
  ): Promise<DescribeConfigsResponse> {
    return this.request("DescribeConfigs", req, cb)
  }

  /**
   * 本接口用于创建投递SCF任务
   */
  async CreateDeliverCloudFunction(
    req: CreateDeliverCloudFunctionRequest,
    cb?: (error: string, rep: CreateDeliverCloudFunctionResponse) => void
  ): Promise<CreateDeliverCloudFunctionResponse> {
    return this.request("CreateDeliverCloudFunction", req, cb)
  }

  /**
   * 本接口用于删除日志集。
   */
  async DeleteLogset(
    req: DeleteLogsetRequest,
    cb?: (error: string, rep: DeleteLogsetResponse) => void
  ): Promise<DeleteLogsetResponse> {
    return this.request("DeleteLogset", req, cb)
  }

  /**
   * 删除应用到机器组的采集配置
   */
  async DeleteConfigFromMachineGroup(
    req: DeleteConfigFromMachineGroupRequest,
    cb?: (error: string, rep: DeleteConfigFromMachineGroupResponse) => void
  ): Promise<DeleteConfigFromMachineGroupResponse> {
    return this.request("DeleteConfigFromMachineGroup", req, cb)
  }

  /**
   * 本接口用于删除数据加工任务
   */
  async DeleteDataTransform(
    req: DeleteDataTransformRequest,
    cb?: (error: string, rep: DeleteDataTransformResponse) => void
  ): Promise<DeleteDataTransformResponse> {
    return this.request("DeleteDataTransform", req, cb)
  }

  /**
   * 本接口用于创建日志集，返回新创建的日志集的 ID。
   */
  async CreateLogset(
    req: CreateLogsetRequest,
    cb?: (error: string, rep: CreateLogsetResponse) => void
  ): Promise<CreateLogsetResponse> {
    return this.request("CreateLogset", req, cb)
  }

  /**
   * 本接口用于创建日志主题。
   */
  async CreateTopic(
    req: CreateTopicRequest,
    cb?: (error: string, rep: CreateTopicResponse) => void
  ): Promise<CreateTopicResponse> {
    return this.request("CreateTopic", req, cb)
  }

  /**
   * 云产品接入使用相关接口
   */
  async DescribeCloudProductLogTasks(
    req: DescribeCloudProductLogTasksRequest,
    cb?: (error: string, rep: DescribeCloudProductLogTasksResponse) => void
  ): Promise<DescribeCloudProductLogTasksResponse> {
    return this.request("DescribeCloudProductLogTasks", req, cb)
  }

  /**
   * 内部云产品接入使用相关接口
   */
  async DeleteCloudProductLogTask(
    req: DeleteCloudProductLogTaskRequest,
    cb?: (error: string, rep: DeleteCloudProductLogTaskResponse) => void
  ): Promise<DeleteCloudProductLogTaskResponse> {
    return this.request("DeleteCloudProductLogTask", req, cb)
  }

  /**
   * 该接口用于删除通知渠道组
   */
  async DeleteAlarmNotice(
    req: DeleteAlarmNoticeRequest,
    cb?: (error: string, rep: DeleteAlarmNoticeResponse) => void
  ): Promise<DeleteAlarmNoticeResponse> {
    return this.request("DeleteAlarmNotice", req, cb)
  }

  /**
   * 获取告警历史，例如今天未恢复的告警
   */
  async DescribeAlertRecordHistory(
    req: DescribeAlertRecordHistoryRequest,
    cb?: (error: string, rep: DescribeAlertRecordHistoryResponse) => void
  ): Promise<DescribeAlertRecordHistoryResponse> {
    return this.request("DescribeAlertRecordHistory", req, cb)
  }

  /**
   * 本接口用于删除Kafka数据订阅任务
   */
  async DeleteKafkaRecharge(
    req: DeleteKafkaRechargeRequest,
    cb?: (error: string, rep: DeleteKafkaRechargeResponse) => void
  ): Promise<DeleteKafkaRechargeResponse> {
    return this.request("DeleteKafkaRecharge", req, cb)
  }

  /**
   * 创建采集规则配置
   */
  async CreateConfig(
    req: CreateConfigRequest,
    cb?: (error: string, rep: CreateConfigResponse) => void
  ): Promise<CreateConfigResponse> {
    return this.request("CreateConfig", req, cb)
  }

  /**
   * 获取机器组绑定的采集规则配置
   */
  async DescribeMachineGroupConfigs(
    req: DescribeMachineGroupConfigsRequest,
    cb?: (error: string, rep: DescribeMachineGroupConfigsResponse) => void
  ): Promise<DescribeMachineGroupConfigsResponse> {
    return this.request("DescribeMachineGroupConfigs", req, cb)
  }

  /**
   * 本接口用于获取日志主题列表，支持分页
   */
  async DescribeTopics(
    req: DescribeTopicsRequest,
    cb?: (error: string, rep: DescribeTopicsResponse) => void
  ): Promise<DescribeTopicsResponse> {
    return this.request("DescribeTopics", req, cb)
  }

  /**
   * 本接口用于创建cos导入任务
   */
  async CreateCosRecharge(
    req: CreateCosRechargeRequest,
    cb?: (error: string, rep: CreateCosRechargeResponse) => void
  ): Promise<CreateCosRechargeResponse> {
    return this.request("CreateCosRecharge", req, cb)
  }

  /**
   * 该接口已废弃，如需修改分区数量，请使用ModifyTopic接口。
   */
  async MergePartition(
    req: MergePartitionRequest,
    cb?: (error: string, rep: MergePartitionResponse) => void
  ): Promise<MergePartitionResponse> {
    return this.request("MergePartition", req, cb)
  }

  /**
   * 本接口用于删除定时SQL分析任务
   */
  async DeleteScheduledSql(
    req: DeleteScheduledSqlRequest,
    cb?: (error: string, rep: DeleteScheduledSqlResponse) => void
  ): Promise<DeleteScheduledSqlResponse> {
    return this.request("DeleteScheduledSql", req, cb)
  }

  /**
   * 本接口仅创建下载任务，任务返回的下载地址，请用户调用DescribeExports查看任务列表。其中有下载地址CosPath参数。参考文档https://cloud.tencent.com/document/product/614/56449
   */
  async CreateExport(
    req: CreateExportRequest,
    cb?: (error: string, rep: CreateExportResponse) => void
  ): Promise<CreateExportResponse> {
    return this.request("CreateExport", req, cb)
  }

  /**
   * 关闭Kafka协议消费
   */
  async CloseKafkaConsumer(
    req: CloseKafkaConsumerRequest,
    cb?: (error: string, rep: CloseKafkaConsumerResponse) => void
  ): Promise<CloseKafkaConsumerResponse> {
    return this.request("CloseKafkaConsumer", req, cb)
  }

  /**
   * 本接口用于修改索引配置，该接口除受默认接口请求频率限制外，针对单个日志主题，并发数不能超过1，即同一时间同一个日志主题只能有一个正在执行的索引配置修改操作。
   */
  async ModifyIndex(
    req: ModifyIndexRequest,
    cb?: (error: string, rep: ModifyIndexResponse) => void
  ): Promise<ModifyIndexResponse> {
    return this.request("ModifyIndex", req, cb)
  }

  /**
   * 本接口用于修改Kafka数据订阅任务
   */
  async ModifyKafkaRecharge(
    req: ModifyKafkaRechargeRequest,
    cb?: (error: string, rep: ModifyKafkaRechargeResponse) => void
  ): Promise<ModifyKafkaRechargeResponse> {
    return this.request("ModifyKafkaRecharge", req, cb)
  }

  /**
   * 该接口用于创建告警屏蔽规则。
   */
  async CreateAlarmShield(
    req: CreateAlarmShieldRequest,
    cb?: (error: string, rep: CreateAlarmShieldResponse) => void
  ): Promise<CreateAlarmShieldResponse> {
    return this.request("CreateAlarmShield", req, cb)
  }

  /**
   * 新建投递到COS的任务，【！！！注意】使用此接口，需要检查是否配置了投递COS的角色和权限。如果没有配置，请参考文档投递权限查看和配置https://cloud.tencent.com/document/product/614/71623。
   */
  async CreateShipper(
    req: CreateShipperRequest,
    cb?: (error: string, rep: CreateShipperResponse) => void
  ): Promise<CreateShipperResponse> {
    return this.request("CreateShipper", req, cb)
  }

  /**
   * 该接口用于创建通知内容。
   */
  async CreateNoticeContent(
    req: CreateNoticeContentRequest,
    cb?: (error: string, rep: CreateNoticeContentResponse) => void
  ): Promise<CreateNoticeContentResponse> {
    return this.request("CreateNoticeContent", req, cb)
  }

  /**
   * 内部云产品接入使用相关接口
   */
  async ModifyCloudProductLogTask(
    req: ModifyCloudProductLogTaskRequest,
    cb?: (error: string, rep: ModifyCloudProductLogTaskResponse) => void
  ): Promise<ModifyCloudProductLogTaskResponse> {
    return this.request("ModifyCloudProductLogTask", req, cb)
  }

  /**
   * 本接口用于删除投递配置
   */
  async DeleteConsumer(
    req: DeleteConsumerRequest,
    cb?: (error: string, rep: DeleteConsumerResponse) => void
  ): Promise<DeleteConsumerResponse> {
    return this.request("DeleteConsumer", req, cb)
  }

  /**
   * 删除机器组
   */
  async DeleteMachineGroup(
    req: DeleteMachineGroupRequest,
    cb?: (error: string, rep: DeleteMachineGroupResponse) => void
  ): Promise<DeleteMachineGroupResponse> {
    return this.request("DeleteMachineGroup", req, cb)
  }

  /**
   * 本接口用于获取Kafka数据订阅任务
   */
  async DescribeKafkaRecharges(
    req: DescribeKafkaRechargesRequest,
    cb?: (error: string, rep: DescribeKafkaRechargesResponse) => void
  ): Promise<DescribeKafkaRechargesResponse> {
    return this.request("DescribeKafkaRecharges", req, cb)
  }

  /**
   * 本接口用于获取告警策略列表。
   */
  async DescribeAlarms(
    req: DescribeAlarmsRequest,
    cb?: (error: string, rep: DescribeAlarmsResponse) => void
  ): Promise<DescribeAlarmsResponse> {
    return this.request("DescribeAlarms", req, cb)
  }

  /**
   * 本接口用于获取cos导入配置
   */
  async DescribeCosRecharges(
    req: DescribeCosRechargesRequest,
    cb?: (error: string, rep: DescribeCosRechargesResponse) => void
  ): Promise<DescribeCosRechargesResponse> {
    return this.request("DescribeCosRecharges", req, cb)
  }

  /**
   * 应用采集配置到指定机器组
   */
  async ApplyConfigToMachineGroup(
    req: ApplyConfigToMachineGroupRequest,
    cb?: (error: string, rep: ApplyConfigToMachineGroupResponse) => void
  ): Promise<ApplyConfigToMachineGroupResponse> {
    return this.request("ApplyConfigToMachineGroup", req, cb)
  }

  /**
   * 该接口用于删除告警屏蔽规则。
   */
  async DeleteAlarmShield(
    req: DeleteAlarmShieldRequest,
    cb?: (error: string, rep: DeleteAlarmShieldResponse) => void
  ): Promise<DeleteAlarmShieldResponse> {
    return this.request("DeleteAlarmShield", req, cb)
  }

  /**
   * 本接口用于构建日志数量直方图
   */
  async DescribeLogHistogram(
    req: DescribeLogHistogramRequest,
    cb?: (error: string, rep: DescribeLogHistogramResponse) => void
  ): Promise<DescribeLogHistogramResponse> {
    return this.request("DescribeLogHistogram", req, cb)
  }

  /**
   * 该接口用于修改通知渠道组
   */
  async ModifyAlarmNotice(
    req: ModifyAlarmNoticeRequest,
    cb?: (error: string, rep: ModifyAlarmNoticeResponse) => void
  ): Promise<ModifyAlarmNoticeResponse> {
    return this.request("ModifyAlarmNotice", req, cb)
  }

  /**
   * 打开Kafka协议消费功能
   */
  async OpenKafkaConsumer(
    req: OpenKafkaConsumerRequest,
    cb?: (error: string, rep: OpenKafkaConsumerResponse) => void
  ): Promise<OpenKafkaConsumerResponse> {
    return this.request("OpenKafkaConsumer", req, cb)
  }

  /**
   * 获取投递任务列表
   */
  async DescribeShipperTasks(
    req: DescribeShipperTasksRequest,
    cb?: (error: string, rep: DescribeShipperTasksResponse) => void
  ): Promise<DescribeShipperTasksResponse> {
    return this.request("DescribeShipperTasks", req, cb)
  }

  /**
   * 此接口用于修改仪表盘订阅
   */
  async ModifyDashboardSubscribe(
    req: ModifyDashboardSubscribeRequest,
    cb?: (error: string, rep: ModifyDashboardSubscribeResponse) => void
  ): Promise<ModifyDashboardSubscribeResponse> {
    return this.request("ModifyDashboardSubscribe", req, cb)
  }

  /**
   * 本接口用于删除日志主题的索引配置，删除索引配置后将无法检索和查询采集到的日志。
   */
  async DeleteIndex(
    req: DeleteIndexRequest,
    cb?: (error: string, rep: DeleteIndexResponse) => void
  ): Promise<DeleteIndexResponse> {
    return this.request("DeleteIndex", req, cb)
  }

  /**
   * 获取Kafka协议消费信息
   */
  async DescribeKafkaConsumer(
    req: DescribeKafkaConsumerRequest,
    cb?: (error: string, rep: DescribeKafkaConsumerResponse) => void
  ): Promise<DescribeKafkaConsumerResponse> {
    return this.request("DescribeKafkaConsumer", req, cb)
  }

  /**
   * 本接口用于预览Kafka数据订阅任务客户日志信息
   */
  async PreviewKafkaRecharge(
    req: PreviewKafkaRechargeRequest,
    cb?: (error: string, rep: PreviewKafkaRechargeResponse) => void
  ): Promise<PreviewKafkaRechargeResponse> {
    return this.request("PreviewKafkaRecharge", req, cb)
  }

  /**
   * 本接口用于修改特殊采集配置任务，特殊采集配置应用于自建K8S环境的采集Agent
   */
  async ModifyConfigExtra(
    req: ModifyConfigExtraRequest,
    cb?: (error: string, rep: ModifyConfigExtraResponse) => void
  ): Promise<ModifyConfigExtraResponse> {
    return this.request("ModifyConfigExtra", req, cb)
  }

  /**
   * 该接口用于修改告警屏蔽规则。
   */
  async ModifyAlarmShield(
    req: ModifyAlarmShieldRequest,
    cb?: (error: string, rep: ModifyAlarmShieldResponse) => void
  ): Promise<ModifyAlarmShieldResponse> {
    return this.request("ModifyAlarmShield", req, cb)
  }

  /**
   * 内部云产品接入使用相关接口
   */
  async CreateCloudProductLogTask(
    req: CreateCloudProductLogTaskRequest,
    cb?: (error: string, rep: CreateCloudProductLogTaskResponse) => void
  ): Promise<CreateCloudProductLogTaskResponse> {
    return this.request("CreateCloudProductLogTask", req, cb)
  }

  /**
   * 本接口用于创建特殊采集配置任务，特殊采集配置应用于自建K8S环境的采集Agent
   */
  async CreateConfigExtra(
    req: CreateConfigExtraRequest,
    cb?: (error: string, rep: CreateConfigExtraResponse) => void
  ): Promise<CreateConfigExtraResponse> {
    return this.request("CreateConfigExtra", req, cb)
  }

  /**
   * 获取告警屏蔽配置规则
   */
  async DescribeAlarmShields(
    req: DescribeAlarmShieldsRequest,
    cb?: (error: string, rep: DescribeAlarmShieldsResponse) => void
  ): Promise<DescribeAlarmShieldsResponse> {
    return this.request("DescribeAlarmShields", req, cb)
  }

  /**
   * 本接口用于修改定时SQL分析任务
   */
  async ModifyScheduledSql(
    req: ModifyScheduledSqlRequest,
    cb?: (error: string, rep: ModifyScheduledSqlResponse) => void
  ): Promise<ModifyScheduledSqlResponse> {
    return this.request("ModifyScheduledSql", req, cb)
  }

  /**
   * 创建机器组
   */
  async CreateMachineGroup(
    req: CreateMachineGroupRequest,
    cb?: (error: string, rep: CreateMachineGroupResponse) => void
  ): Promise<CreateMachineGroupResponse> {
    return this.request("CreateMachineGroup", req, cb)
  }

  /**
   * 用于删除机器组信息
   */
  async DeleteMachineGroupInfo(
    req: DeleteMachineGroupInfoRequest,
    cb?: (error: string, rep: DeleteMachineGroupInfoResponse) => void
  ): Promise<DeleteMachineGroupInfoResponse> {
    return this.request("DeleteMachineGroupInfo", req, cb)
  }

  /**
   * 批量查询控制台分享列表
   */
  async DescribeConsoleSharingList(
    req?: DescribeConsoleSharingListRequest,
    cb?: (error: string, rep: DescribeConsoleSharingListResponse) => void
  ): Promise<DescribeConsoleSharingListResponse> {
    return this.request("DescribeConsoleSharingList", req, cb)
  }

  /**
   * 创建控制台分享
   */
  async CreateConsoleSharing(
    req: CreateConsoleSharingRequest,
    cb?: (error: string, rep: CreateConsoleSharingResponse) => void
  ): Promise<CreateConsoleSharingResponse> {
    return this.request("CreateConsoleSharing", req, cb)
  }

  /**
   * 本接口用于创建定时SQL分析任务
   */
  async CreateScheduledSql(
    req: CreateScheduledSqlRequest,
    cb?: (error: string, rep: CreateScheduledSqlResponse) => void
  ): Promise<CreateScheduledSqlResponse> {
    return this.request("CreateScheduledSql", req, cb)
  }

  /**
   * 本接口用于获取日志集信息列表。
   */
  async DescribeLogsets(
    req: DescribeLogsetsRequest,
    cb?: (error: string, rep: DescribeLogsetsResponse) => void
  ): Promise<DescribeLogsetsResponse> {
    return this.request("DescribeLogsets", req, cb)
  }

  /**
   * 此接口用于创建仪表盘订阅
   */
  async CreateDashboardSubscribe(
    req: CreateDashboardSubscribeRequest,
    cb?: (error: string, rep: CreateDashboardSubscribeResponse) => void
  ): Promise<CreateDashboardSubscribeResponse> {
    return this.request("CreateDashboardSubscribe", req, cb)
  }

  /**
   * 该接口用于修改通知内容配置
   */
  async ModifyNoticeContent(
    req: ModifyNoticeContentRequest,
    cb?: (error: string, rep: ModifyNoticeContentResponse) => void
  ): Promise<ModifyNoticeContentResponse> {
    return this.request("ModifyNoticeContent", req, cb)
  }

  /**
   * 本接口用于预览cos导入信息
   */
  async SearchCosRechargeInfo(
    req: SearchCosRechargeInfoRequest,
    cb?: (error: string, rep: SearchCosRechargeInfoResponse) => void
  ): Promise<SearchCosRechargeInfoResponse> {
    return this.request("SearchCosRechargeInfo", req, cb)
  }

  /**
   * 本接口用于获取索引配置信息
   */
  async DescribeIndex(
    req: DescribeIndexRequest,
    cb?: (error: string, rep: DescribeIndexResponse) => void
  ): Promise<DescribeIndexResponse> {
    return this.request("DescribeIndex", req, cb)
  }

  /**
     * 该接口用于创建通知渠道组，提供两种配置模式，二选一：
1，简易模式，提供最基本的通知渠道功能。需填写如下参数：
- Type
- NoticeReceivers
- WebCallbacks

2，高级模式，在简易模式基础上，支持设定规则，为不同类型的告警分别设定通知渠道，并支持告警升级功能。需填写如下参数：
- NoticeRules
     */
  async CreateAlarmNotice(
    req: CreateAlarmNoticeRequest,
    cb?: (error: string, rep: CreateAlarmNoticeResponse) => void
  ): Promise<CreateAlarmNoticeResponse> {
    return this.request("CreateAlarmNotice", req, cb)
  }

  /**
   * 此接口用于删除仪表盘订阅
   */
  async DeleteDashboardSubscribe(
    req: DeleteDashboardSubscribeRequest,
    cb?: (error: string, rep: DeleteDashboardSubscribeResponse) => void
  ): Promise<DeleteDashboardSubscribeResponse> {
    return this.request("DeleteDashboardSubscribe", req, cb)
  }

  /**
   * 本接口用于创建数据加工任务。
   */
  async CreateDataTransform(
    req: CreateDataTransformRequest,
    cb?: (error: string, rep: CreateDataTransformResponse) => void
  ): Promise<CreateDataTransformResponse> {
    return this.request("CreateDataTransform", req, cb)
  }

  /**
   * 用于添加机器组信息
   */
  async AddMachineGroupInfo(
    req: AddMachineGroupInfoRequest,
    cb?: (error: string, rep: AddMachineGroupInfoResponse) => void
  ): Promise<AddMachineGroupInfoResponse> {
    return this.request("AddMachineGroupInfo", req, cb)
  }

  /**
   * 该接口用于删除通知内容配置
   */
  async DeleteNoticeContent(
    req: DeleteNoticeContentRequest,
    cb?: (error: string, rep: DeleteNoticeContentResponse) => void
  ): Promise<DeleteNoticeContentResponse> {
    return this.request("DeleteNoticeContent", req, cb)
  }

  /**
   * 本接口用于获取数据加工任务列表基本信息
   */
  async DescribeDataTransformInfo(
    req: DescribeDataTransformInfoRequest,
    cb?: (error: string, rep: DescribeDataTransformInfoResponse) => void
  ): Promise<DescribeDataTransformInfoResponse> {
    return this.request("DescribeDataTransformInfo", req, cb)
  }

  /**
   * 该接口用于获取通知渠道组列表
   */
  async DescribeAlarmNotices(
    req: DescribeAlarmNoticesRequest,
    cb?: (error: string, rep: DescribeAlarmNoticesResponse) => void
  ): Promise<DescribeAlarmNoticesResponse> {
    return this.request("DescribeAlarmNotices", req, cb)
  }

  /**
   * 该接口已废弃，如需获取分区数量，请使用DescribeTopics接口。
   */
  async DescribePartitions(
    req: DescribePartitionsRequest,
    cb?: (error: string, rep: DescribePartitionsResponse) => void
  ): Promise<DescribePartitionsResponse> {
    return this.request("DescribePartitions", req, cb)
  }

  /**
   * 本接口用于删除特殊采集规则配置，特殊采集配置应用于自建K8S环境的采集Agent
   */
  async DeleteConfigExtra(
    req: DeleteConfigExtraRequest,
    cb?: (error: string, rep: DeleteConfigExtraResponse) => void
  ): Promise<DeleteConfigExtraResponse> {
    return this.request("DeleteConfigExtra", req, cb)
  }

  /**
   * 本接口用于数据加工DSL函数的语法校验。
   */
  async CheckFunction(
    req: CheckFunctionRequest,
    cb?: (error: string, rep: CheckFunctionResponse) => void
  ): Promise<CheckFunctionResponse> {
    return this.request("CheckFunction", req, cb)
  }

  /**
     * 本接口用于检索分析日志，使用该接口时请注意如下事项：
1. 该接口除受默认接口请求频率限制外，针对单个日志主题，查询并发数不能超过15。
2. 检索语法建议使用日志服务专用检索语法CQL，请使用SyntaxRule参数，将值设置为1，控制台默认也使用该语法规则。
3. API返回数据包最大49MB，建议启用 gzip 压缩（HTTP Request Header Accept-Encoding:gzip）。
     */
  async SearchLog(
    req: SearchLogRequest,
    cb?: (error: string, rep: SearchLogResponse) => void
  ): Promise<SearchLogResponse> {
    return this.request("SearchLog", req, cb)
  }

  /**
   * 删除投递COS任务
   */
  async DeleteShipper(
    req: DeleteShipperRequest,
    cb?: (error: string, rep: DeleteShipperResponse) => void
  ): Promise<DeleteShipperResponse> {
    return this.request("DeleteShipper", req, cb)
  }

  /**
   * 该接口用于删除告警渠道回调配置。
   */
  async DeleteWebCallback(
    req: DeleteWebCallbackRequest,
    cb?: (error: string, rep: DeleteWebCallbackResponse) => void
  ): Promise<DeleteWebCallbackResponse> {
    return this.request("DeleteWebCallback", req, cb)
  }

  /**
   * 查询指定时间范围内指标的变化趋势
   */
  async QueryRangeMetric(
    req: QueryRangeMetricRequest,
    cb?: (error: string, rep: QueryRangeMetricResponse) => void
  ): Promise<QueryRangeMetricResponse> {
    return this.request("QueryRangeMetric", req, cb)
  }

  /**
   * 获取采集规则配置所绑定的机器组
   */
  async DescribeConfigMachineGroups(
    req: DescribeConfigMachineGroupsRequest,
    cb?: (error: string, rep: DescribeConfigMachineGroupsResponse) => void
  ): Promise<DescribeConfigMachineGroupsResponse> {
    return this.request("DescribeConfigMachineGroups", req, cb)
  }

  /**
   * 本接口用于删除日志下载任务
   */
  async DeleteExport(
    req: DeleteExportRequest,
    cb?: (error: string, rep: DeleteExportResponse) => void
  ): Promise<DeleteExportResponse> {
    return this.request("DeleteExport", req, cb)
  }

  /**
   * 该接口已废弃，如需修改分区数量，请使用ModifyTopic接口。
   */
  async SplitPartition(
    req: SplitPartitionRequest,
    cb?: (error: string, rep: SplitPartitionResponse) => void
  ): Promise<SplitPartitionResponse> {
    return this.request("SplitPartition", req, cb)
  }

  /**
   * 删除控制台分享
   */
  async DeleteConsoleSharing(
    req: DeleteConsoleSharingRequest,
    cb?: (error: string, rep: DeleteConsoleSharingResponse) => void
  ): Promise<DeleteConsoleSharingResponse> {
    return this.request("DeleteConsoleSharing", req, cb)
  }

  /**
   * 获取机器组信息列表
   */
  async DescribeMachineGroups(
    req: DescribeMachineGroupsRequest,
    cb?: (error: string, rep: DescribeMachineGroupsResponse) => void
  ): Promise<DescribeMachineGroupsResponse> {
    return this.request("DescribeMachineGroups", req, cb)
  }

  /**
   * 本接口用于创建投递CKafka任务
   */
  async CreateConsumer(
    req: CreateConsumerRequest,
    cb?: (error: string, rep: CreateConsumerResponse) => void
  ): Promise<CreateConsumerResponse> {
    return this.request("CreateConsumer", req, cb)
  }

  /**
   * 本接口用于修改日志主题。
   */
  async ModifyTopic(
    req: ModifyTopicRequest,
    cb?: (error: string, rep: ModifyTopicResponse) => void
  ): Promise<ModifyTopicResponse> {
    return this.request("ModifyTopic", req, cb)
  }

  /**
   * 本接口用于获取仪表盘订阅列表，支持分页
   */
  async DescribeDashboardSubscribes(
    req: DescribeDashboardSubscribesRequest,
    cb?: (error: string, rep: DescribeDashboardSubscribesResponse) => void
  ): Promise<DescribeDashboardSubscribesResponse> {
    return this.request("DescribeDashboardSubscribes", req, cb)
  }

  /**
   * 该接口用于修改告警渠道回调配置。
   */
  async ModifyWebCallback(
    req: ModifyWebCallbackRequest,
    cb?: (error: string, rep: ModifyWebCallbackResponse) => void
  ): Promise<ModifyWebCallbackResponse> {
    return this.request("ModifyWebCallback", req, cb)
  }

  /**
   * 修改机器组
   */
  async ModifyMachineGroup(
    req: ModifyMachineGroupRequest,
    cb?: (error: string, rep: ModifyMachineGroupResponse) => void
  ): Promise<ModifyMachineGroupResponse> {
    return this.request("ModifyMachineGroup", req, cb)
  }

  /**
   * 本接口用于获取定时SQL分析任务列表
   */
  async DescribeScheduledSqlInfo(
    req: DescribeScheduledSqlInfoRequest,
    cb?: (error: string, rep: DescribeScheduledSqlInfoResponse) => void
  ): Promise<DescribeScheduledSqlInfoResponse> {
    return this.request("DescribeScheduledSqlInfo", req, cb)
  }

  /**
   * 删除采集规则配置
   */
  async DeleteConfig(
    req: DeleteConfigRequest,
    cb?: (error: string, rep: DeleteConfigResponse) => void
  ): Promise<DeleteConfigResponse> {
    return this.request("DeleteConfig", req, cb)
  }

  /**
   * 本接口用于获取特殊采集配置，特殊采集配置应用于自建K8S环境的采集Agent
   */
  async DescribeConfigExtras(
    req: DescribeConfigExtrasRequest,
    cb?: (error: string, rep: DescribeConfigExtrasResponse) => void
  ): Promise<DescribeConfigExtrasResponse> {
    return this.request("DescribeConfigExtras", req, cb)
  }

  /**
   * 此接口用于预览仪表盘订阅
   */
  async SearchDashboardSubscribe(
    req: SearchDashboardSubscribeRequest,
    cb?: (error: string, rep: SearchDashboardSubscribeResponse) => void
  ): Promise<SearchDashboardSubscribeResponse> {
    return this.request("SearchDashboardSubscribe", req, cb)
  }

  /**
   * 本接口用于校验Kafka服务集群是否可以正常访问
   */
  async CheckRechargeKafkaServer(
    req: CheckRechargeKafkaServerRequest,
    cb?: (error: string, rep: CheckRechargeKafkaServerResponse) => void
  ): Promise<CheckRechargeKafkaServerResponse> {
    return this.request("CheckRechargeKafkaServer", req, cb)
  }

  /**
   * 本接口用于修改告警策略。需要至少修改一项有效内容。
   */
  async ModifyAlarm(
    req: ModifyAlarmRequest,
    cb?: (error: string, rep: ModifyAlarmResponse) => void
  ): Promise<ModifyAlarmResponse> {
    return this.request("ModifyAlarm", req, cb)
  }

  /**
   * 获取投递到COS的任务配置信息
   */
  async DescribeShippers(
    req: DescribeShippersRequest,
    cb?: (error: string, rep: DescribeShippersResponse) => void
  ): Promise<DescribeShippersResponse> {
    return this.request("DescribeShippers", req, cb)
  }

  /**
   * 修改控制台分享，目前仅允许修改有效期
   */
  async ModifyConsoleSharing(
    req: ModifyConsoleSharingRequest,
    cb?: (error: string, rep: ModifyConsoleSharingResponse) => void
  ): Promise<ModifyConsoleSharingResponse> {
    return this.request("ModifyConsoleSharing", req, cb)
  }

  /**
   * 本接口用于获取仪表盘
   */
  async DescribeDashboards(
    req: DescribeDashboardsRequest,
    cb?: (error: string, rep: DescribeDashboardsResponse) => void
  ): Promise<DescribeDashboardsResponse> {
    return this.request("DescribeDashboards", req, cb)
  }

  /**
   * 本接口用于修改cos导入任务
   */
  async ModifyCosRecharge(
    req: ModifyCosRechargeRequest,
    cb?: (error: string, rep: ModifyCosRechargeResponse) => void
  ): Promise<ModifyCosRechargeResponse> {
    return this.request("ModifyCosRecharge", req, cb)
  }

  /**
   * 修改采集规则配置
   */
  async ModifyConfig(
    req: ModifyConfigRequest,
    cb?: (error: string, rep: ModifyConfigResponse) => void
  ): Promise<ModifyConfigResponse> {
    return this.request("ModifyConfig", req, cb)
  }

  /**
     * ## 提示
为了保障您日志数据的可靠性以及更高效地使用日志服务，建议您使用CLS优化后的接口[上传结构化日志](https://cloud.tencent.com/document/product/614/16873)。

同时我们给此接口专门优化定制了多个语言版本的SDK供您选择，SDK提供统一的异步发送、资源控制、自动重试、优雅关闭、感知上报等功能，使上报日志功能更完善，详情请参考[SDK采集](https://cloud.tencent.com/document/product/614/67157)。

同时云API上传日志接口也支持同步上传日志数据，如果您选择继续使用此接口请参考下文。

## 功能描述

本接口用于将日志写入到指定的日志主题。

#### 输入参数(pb二进制流，位于body中)

| 字段名       | 类型    | 位置 | 必须 | 含义                                                         |
| ------------ | ------- | ---- | ---- | ------------------------------------------------------------ |
| logGroupList | message | pb   | 是   | logGroup 列表，封装好的日志组列表内容，建议 logGroup 数量不要超过5个 |

LogGroup 说明：

| 字段名      | 是否必选 | 含义                                                         |
| ----------- | -------- | ------------------------------------------------------------ |
| logs        | 是       | 日志数组，表示有多个 Log 组成的集合，一个 Log 表示一条日志，一个 LogGroup 中 Log 个数不能超过10000 |
| contextFlow | 否       | LogGroup 的唯一ID，需要使用上下文功能时传入。格式："{上下文ID}-{LogGroupID}"。<br>上下文ID：唯一标识一个上下文（连续滚动的一系列日志文件，或者是需要保序的一系列日志），16进制64位整型字符串。<br>LogGroupID：连续递增的一串整型，16进制64位整型字符串。样例："102700A66102516A-59F59"。                        |
| filename    | 否       | 日志文件名                                                   |
| source      | 否       | 日志来源，一般使用机器 IP 作为标识                           |
| logTags     | 否       | 日志的标签列表                                               |

Log 说明：

| 字段名   | 是否必选 | 含义                                                         |
| -------- | -------- | ------------------------------------------------------------ |
| time     | 是       | 日志时间（Unix 格式时间戳），支持秒、毫秒，建议采用毫秒      |
| contents | 否       | key-value 格式的日志内容，表示一条日志里的多个 key-value 组合 |

Content 说明：

| 字段名 | 是否必选 | 含义                                                         |
| ------ | -------- | ------------------------------------------------------------ |
| key    | 是       | 单条日志里某个字段组的 key 值，不能以`_`开头                 |
| value  | 是       | 单条日志某个字段组的 value 值，单条日志 value 不能超过1MB，LogGroup 中所有 value 总和不能超过5MB |

LogTag 说明：

| 字段名 | 是否必选 | 含义                             |
| ------ | -------- | -------------------------------- |
| key    | 是       | 自定义的标签 key                 |
| value  | 是       | 自定义的标签 key 对应的 value 值 |

## PB 编译示例

本示例将说明如何使用官方 protoc 编译工具将 PB 描述文件 编译生成为 C++ 语言可调用的上传日志接口。

> ?目前 protoc 官方支持 Java、C++、Python 等语言的编译，详情请参见 [protoc](https://github.com/protocolbuffers/protobuf)。

#### 1. 安装 Protocol Buffer

下载 [Protocol Buffer](https://main.qcloudimg.com/raw/d7810aaf8b3073fbbc9d4049c21532aa/protobuf-2.6.1.tar.gz) ，解压并安装。示例版本为 protobuf 2.6.1，环境为 Centos 7.3 系统。 解压`protobuf-2.6.1.tar.gz`压缩包至`/usr/local`目录并进入该目录，执行命令如下：

```
tar -zxvf protobuf-2.6.1.tar.gz -C /usr/local/ && cd /usr/local/protobuf-2.6.1
```

开始编译和安装，配置环境变量，执行命令如下：

```
[root@VM_0_8_centos protobuf-2.6.1]# ./configure 
[root@VM_0_8_centos protobuf-2.6.1]# make && make install
[root@VM_0_8_centos protobuf-2.6.1]# export PATH=$PATH:/usr/local/protobuf-2.6.1/bin
```

编译成功后，您可以使用以下命令查看版本：

```
[root@VM_0_8_centos protobuf-2.6.1]# protoc --version
liprotoc 2.6.1
```

#### 2. 创建 PB 描述文件

PB 描述文件是通信双方约定的数据交换格式，上传日志时须将规定的协议格式编译成对应语言版本的调用接口，然后添加到工程代码里，详情请参见 [protoc](https://github.com/protocolbuffers/protobuf) 。

以日志服务所规定的 PB 数据格式内容为准， 在本地创建 PB 消息描述文件 cls.proto。

> !PB 描述文件内容不可更改，且文件名须以`.proto`结尾。

cls.proto 内容（PB 描述文件）如下：

```
package cls;

message Log
{
    message Content
    {
        required string key   = 1; // 每组字段的 key
        required string value = 2; // 每组字段的 value
    }
    required int64   time     = 1; // 时间戳，UNIX时间格式
    repeated Content contents = 2; // 一条日志里的多个kv组合
}

message LogTag
{
    required string key       = 1;
    required string value     = 2;
}

message LogGroup
{
    repeated Log    logs        = 1; // 多条日志合成的日志数组
    optional string contextFlow = 2; // 目前暂无效用
    optional string filename    = 3; // 日志文件名
    optional string source      = 4; // 日志来源，一般使用机器IP
    repeated LogTag logTags     = 5;
}

message LogGroupList
{
    repeated LogGroup logGroupList = 1; // 日志组列表
}
```

#### 3. 编译生成

此例中，使用 proto 编译器生成 C++ 语言的文件，在 cls.proto 文件的同一目录下，执行如下编译命令：

```
protoc --cpp_out=./ ./cls.proto 
```

> ?`--cpp_out=./`表示编译成 cpp 格式并输出当前目录下，`./cls.proto`表示位于当前目录下的 cls.proto 描述文件。

编译成功后，会输出对应语言的代码文件。此例会生成 cls.pb.h 头文件和 [cls.pb.cc](http://cls.pb.cc) 代码实现文件，如下所示：

```
[root@VM_0_8_centos protobuf-2.6.1]# protoc --cpp_out=./ ./cls.proto
[root@VM_0_8_centos protobuf-2.6.1]# ls
cls.pb.cc cls.pb.h cls.proto
```

#### 4. 调用

将生成的 cls.pb.h 头文件引入代码中，调用接口进行数据格式封装。
     */
  async UploadLog(
    req: UploadLogRequest,
    cb?: (error: string, rep: UploadLogResponse) => void
  ): Promise<UploadLogResponse> {
    return this.request("UploadLog", req, cb)
  }

  /**
   * 本接口用于删除日志主题。
   */
  async DeleteTopic(
    req: DeleteTopicRequest,
    cb?: (error: string, rep: DeleteTopicResponse) => void
  ): Promise<DeleteTopicResponse> {
    return this.request("DeleteTopic", req, cb)
  }

  /**
   * 本接口用于修改日志集信息
   */
  async ModifyLogset(
    req: ModifyLogsetRequest,
    cb?: (error: string, rep: ModifyLogsetResponse) => void
  ): Promise<ModifyLogsetResponse> {
    return this.request("ModifyLogset", req, cb)
  }

  /**
   * 本接口用于修改投递Ckafka任务
   */
  async ModifyConsumer(
    req: ModifyConsumerRequest,
    cb?: (error: string, rep: ModifyConsumerResponse) => void
  ): Promise<ModifyConsumerResponse> {
    return this.request("ModifyConsumer", req, cb)
  }

  /**
   * 本接口用于修改数据加工任务
   */
  async ModifyDataTransform(
    req: ModifyDataTransformRequest,
    cb?: (error: string, rep: ModifyDataTransformResponse) => void
  ): Promise<ModifyDataTransformResponse> {
    return this.request("ModifyDataTransform", req, cb)
  }

  /**
   * 本接口用于删除告警策略。
   */
  async DeleteAlarm(
    req: DeleteAlarmRequest,
    cb?: (error: string, rep: DeleteAlarmResponse) => void
  ): Promise<DeleteAlarmResponse> {
    return this.request("DeleteAlarm", req, cb)
  }

  /**
     * 本接口用于搜索日志上下文附近的内容，详情参考[上下文检索](https://cloud.tencent.com/document/product/614/53248)。
API返回数据包最大49MB，建议启用 gzip 压缩（HTTP Request Header Accept-Encoding:gzip）。
     */
  async DescribeLogContext(
    req: DescribeLogContextRequest,
    cb?: (error: string, rep: DescribeLogContextResponse) => void
  ): Promise<DescribeLogContextResponse> {
    return this.request("DescribeLogContext", req, cb)
  }

  /**
   * 本接口用于获取投递配置
   */
  async DescribeConsumer(
    req: DescribeConsumerRequest,
    cb?: (error: string, rep: DescribeConsumerResponse) => void
  ): Promise<DescribeConsumerResponse> {
    return this.request("DescribeConsumer", req, cb)
  }

  /**
   * 获取通知内容列表
   */
  async DescribeNoticeContents(
    req: DescribeNoticeContentsRequest,
    cb?: (error: string, rep: DescribeNoticeContentsResponse) => void
  ): Promise<DescribeNoticeContentsResponse> {
    return this.request("DescribeNoticeContents", req, cb)
  }

  /**
   * 获取指定机器组下的机器状态
   */
  async DescribeMachines(
    req: DescribeMachinesRequest,
    cb?: (error: string, rep: DescribeMachinesResponse) => void
  ): Promise<DescribeMachinesResponse> {
    return this.request("DescribeMachines", req, cb)
  }

  /**
   * 重试失败的投递任务
   */
  async RetryShipperTask(
    req: RetryShipperTaskRequest,
    cb?: (error: string, rep: RetryShipperTaskResponse) => void
  ): Promise<RetryShipperTaskResponse> {
    return this.request("RetryShipperTask", req, cb)
  }

  /**
   * 本接口用于创建告警策略。
   */
  async CreateAlarm(
    req: CreateAlarmRequest,
    cb?: (error: string, rep: CreateAlarmResponse) => void
  ): Promise<CreateAlarmResponse> {
    return this.request("CreateAlarm", req, cb)
  }

  /**
   * 获取告警渠道回调配置列表。
   */
  async DescribeWebCallbacks(
    req: DescribeWebCallbacksRequest,
    cb?: (error: string, rep: DescribeWebCallbacksResponse) => void
  ): Promise<DescribeWebCallbacksResponse> {
    return this.request("DescribeWebCallbacks", req, cb)
  }
}
