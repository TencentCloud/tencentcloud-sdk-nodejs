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
  CreateAlarmResponse,
  AlarmInfo,
  LogInfo,
  DeleteAlarmNoticeResponse,
  DescribeLogContextRequest,
  DeleteShipperRequest,
  ModifyTopicRequest,
  DeleteLogsetResponse,
  DescribeShipperTasksResponse,
  CreateMachineGroupResponse,
  DescribeConfigMachineGroupsRequest,
  CreateLogsetRequest,
  LogItem,
  SearchLogResponse,
  DeleteTopicRequest,
  DescribePartitionsRequest,
  ModifyAlarmResponse,
  DescribeShipperTasksRequest,
  DescribeAlarmsRequest,
  DescribeShippersResponse,
  ModifyShipperResponse,
  RetryShipperTaskRequest,
  CallBackInfo,
  AlarmTargetInfo,
  DescribeIndexRequest,
  DescribeConfigsResponse,
  CreateLogsetResponse,
  DeleteMachineGroupResponse,
  Tag,
  DescribeMachineGroupsRequest,
  ExtractRuleInfo,
  TopicInfo,
  ShipperTaskInfo,
  CreateIndexResponse,
  DeleteConfigFromMachineGroupResponse,
  ModifyMachineGroupResponse,
  RuleInfo,
  DeleteMachineGroupRequest,
  FullTextInfo,
  DescribePartitionsResponse,
  DescribeConfigMachineGroupsResponse,
  ModifyAlarmRequest,
  DescribeTopicsResponse,
  LogItems,
  ModifyAlarmNoticeRequest,
  RuleKeyValueInfo,
  CreateAlarmRequest,
  DeleteExportResponse,
  PartitionInfo,
  DescribeShippersRequest,
  ExcludePathInfo,
  FilterRuleInfo,
  RetryShipperTaskResponse,
  SplitPartitionRequest,
  MachineGroupInfo,
  RuleTagInfo,
  CreateIndexRequest,
  CreateTopicRequest,
  DescribeTopicsRequest,
  GetAlarmLogResponse,
  DescribeConfigsRequest,
  DescribeExportsRequest,
  AlarmTarget,
  DeleteConfigResponse,
  ModifyIndexResponse,
  DeleteIndexRequest,
  DeleteConfigRequest,
  LogsetInfo,
  CreateExportRequest,
  DescribeAlarmNoticesResponse,
  ModifyConfigRequest,
  DescribeLogsetsResponse,
  JsonInfo,
  CreateShipperRequest,
  CreateTopicResponse,
  DeleteAlarmResponse,
  WebCallback,
  DescribeAlarmsResponse,
  CreateAlarmNoticeResponse,
  ModifyTopicResponse,
  CreateConfigRequest,
  CreateShipperResponse,
  DeleteIndexResponse,
  ModifyIndexRequest,
  CompressInfo,
  ValueInfo,
  GetAlarmLogRequest,
  DeleteShipperResponse,
  ExportInfo,
  ConfigInfo,
  DeleteExportRequest,
  SplitPartitionResponse,
  LogContextInfo,
  ModifyShipperRequest,
  DescribeLogContextResponse,
  AlarmNotice,
  ModifyConfigResponse,
  ModifyAlarmNoticeResponse,
  DescribeMachinesResponse,
  ContentInfo,
  ApplyConfigToMachineGroupResponse,
  DeleteAlarmRequest,
  CreateConfigResponse,
  MachineGroupTypeInfo,
  DeleteConfigFromMachineGroupRequest,
  ShipperInfo,
  KeyValueInfo,
  ModifyMachineGroupRequest,
  DescribeAlarmNoticesRequest,
  NoticeReceiver,
  MergePartitionRequest,
  CreateExportResponse,
  DeleteAlarmNoticeRequest,
  DeleteLogsetRequest,
  MachineInfo,
  ModifyLogsetResponse,
  MonitorTime,
  SearchLogRequest,
  CreateMachineGroupRequest,
  DescribeExportsResponse,
  ApplyConfigToMachineGroupRequest,
  DescribeMachineGroupConfigsResponse,
  CsvInfo,
  CreateAlarmNoticeRequest,
  DescribeIndexResponse,
  DescribeMachineGroupConfigsRequest,
  ModifyLogsetRequest,
  DescribeMachineGroupsResponse,
  DescribeLogsetsRequest,
  DeleteTopicResponse,
  Filter,
  DescribeMachinesRequest,
  KeyRegexInfo,
  MergePartitionResponse,
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
   * 创建机器组
   */
  async CreateMachineGroup(
    req: CreateMachineGroupRequest,
    cb?: (error: string, rep: CreateMachineGroupResponse) => void
  ): Promise<CreateMachineGroupResponse> {
    return this.request("CreateMachineGroup", req, cb)
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
   * 本接口用于获取告警任务历史
   */
  async GetAlarmLog(
    req: GetAlarmLogRequest,
    cb?: (error: string, rep: GetAlarmLogResponse) => void
  ): Promise<GetAlarmLogResponse> {
    return this.request("GetAlarmLog", req, cb)
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
     * 本接口用于修改索引配置

     */
  async ModifyIndex(
    req: ModifyIndexRequest,
    cb?: (error: string, rep: ModifyIndexResponse) => void
  ): Promise<ModifyIndexResponse> {
    return this.request("ModifyIndex", req, cb)
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
   * 本接口用于修改日志集信息
   */
  async ModifyLogset(
    req: ModifyLogsetRequest,
    cb?: (error: string, rep: ModifyLogsetResponse) => void
  ): Promise<ModifyLogsetResponse> {
    return this.request("ModifyLogset", req, cb)
  }

  /**
   * 本接口用于获取日志导出列表
   */
  async DescribeExports(
    req: DescribeExportsRequest,
    cb?: (error: string, rep: DescribeExportsResponse) => void
  ): Promise<DescribeExportsResponse> {
    return this.request("DescribeExports", req, cb)
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
   * 本接口用于获取主题分区列表。
   */
  async DescribePartitions(
    req: DescribePartitionsRequest,
    cb?: (error: string, rep: DescribePartitionsResponse) => void
  ): Promise<DescribePartitionsResponse> {
    return this.request("DescribePartitions", req, cb)
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
   * 删除采集规则配置
   */
  async DeleteConfig(
    req: DeleteConfigRequest,
    cb?: (error: string, rep: DeleteConfigResponse) => void
  ): Promise<DeleteConfigResponse> {
    return this.request("DeleteConfig", req, cb)
  }

  /**
   * 创建新的投递规则，客户如果使用此接口，需要自行处理CLS对指定bucket的写权限。
   */
  async CreateShipper(
    req: CreateShipperRequest,
    cb?: (error: string, rep: CreateShipperResponse) => void
  ): Promise<CreateShipperResponse> {
    return this.request("CreateShipper", req, cb)
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
   * 该接口用户创建告警通知模板。
   */
  async CreateAlarmNotice(
    req: CreateAlarmNoticeRequest,
    cb?: (error: string, rep: CreateAlarmNoticeResponse) => void
  ): Promise<CreateAlarmNoticeResponse> {
    return this.request("CreateAlarmNotice", req, cb)
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
   * 本接口用于修改告警策略。需要至少修改一项有效内容。
   */
  async ModifyAlarm(
    req: ModifyAlarmRequest,
    cb?: (error: string, rep: ModifyAlarmResponse) => void
  ): Promise<ModifyAlarmResponse> {
    return this.request("ModifyAlarm", req, cb)
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
   *  本接口用于获取日志主题列表，支持分页
   */
  async DescribeTopics(
    req: DescribeTopicsRequest,
    cb?: (error: string, rep: DescribeTopicsResponse) => void
  ): Promise<DescribeTopicsResponse> {
    return this.request("DescribeTopics", req, cb)
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
   * 获取投递规则信息列表
   */
  async DescribeShippers(
    req: DescribeShippersRequest,
    cb?: (error: string, rep: DescribeShippersResponse) => void
  ): Promise<DescribeShippersResponse> {
    return this.request("DescribeShippers", req, cb)
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
   * 删除应用到机器组的采集配置
   */
  async DeleteConfigFromMachineGroup(
    req: DeleteConfigFromMachineGroupRequest,
    cb?: (error: string, rep: DeleteConfigFromMachineGroupResponse) => void
  ): Promise<DeleteConfigFromMachineGroupResponse> {
    return this.request("DeleteConfigFromMachineGroup", req, cb)
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
   * 本接口用于获取告警策略。
   */
  async DescribeAlarms(
    req: DescribeAlarmsRequest,
    cb?: (error: string, rep: DescribeAlarmsResponse) => void
  ): Promise<DescribeAlarmsResponse> {
    return this.request("DescribeAlarms", req, cb)
  }

  /**
   * 该接口用于获取告警通知模板列表
   */
  async DescribeAlarmNotices(
    req: DescribeAlarmNoticesRequest,
    cb?: (error: string, rep: DescribeAlarmNoticesResponse) => void
  ): Promise<DescribeAlarmNoticesResponse> {
    return this.request("DescribeAlarmNotices", req, cb)
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
   * 应用采集配置到指定机器组
   */
  async ApplyConfigToMachineGroup(
    req: ApplyConfigToMachineGroupRequest,
    cb?: (error: string, rep: ApplyConfigToMachineGroupResponse) => void
  ): Promise<ApplyConfigToMachineGroupResponse> {
    return this.request("ApplyConfigToMachineGroup", req, cb)
  }

  /**
   * 该接口用于删除告警通知模板
   */
  async DeleteAlarmNotice(
    req: DeleteAlarmNoticeRequest,
    cb?: (error: string, rep: DeleteAlarmNoticeResponse) => void
  ): Promise<DeleteAlarmNoticeResponse> {
    return this.request("DeleteAlarmNotice", req, cb)
  }

  /**
   * 该接口用于修改告警通知模板。
   */
  async ModifyAlarmNotice(
    req: ModifyAlarmNoticeRequest,
    cb?: (error: string, rep: ModifyAlarmNoticeResponse) => void
  ): Promise<ModifyAlarmNoticeResponse> {
    return this.request("ModifyAlarmNotice", req, cb)
  }

  /**
   * 本接口用于搜索日志
   */
  async SearchLog(
    req: SearchLogRequest,
    cb?: (error: string, rep: SearchLogResponse) => void
  ): Promise<SearchLogResponse> {
    return this.request("SearchLog", req, cb)
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
   * 获取投递任务列表
   */
  async DescribeShipperTasks(
    req: DescribeShipperTasksRequest,
    cb?: (error: string, rep: DescribeShipperTasksResponse) => void
  ): Promise<DescribeShipperTasksResponse> {
    return this.request("DescribeShipperTasks", req, cb)
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
   * 删除投递规则
   */
  async DeleteShipper(
    req: DeleteShipperRequest,
    cb?: (error: string, rep: DeleteShipperResponse) => void
  ): Promise<DeleteShipperResponse> {
    return this.request("DeleteShipper", req, cb)
  }

  /**
   * 本接口用于日志主题的索引配置
   */
  async DeleteIndex(
    req: DeleteIndexRequest,
    cb?: (error: string, rep: DeleteIndexResponse) => void
  ): Promise<DeleteIndexResponse> {
    return this.request("DeleteIndex", req, cb)
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
   * 本接口用于搜索日志上下文附近的内容
   */
  async DescribeLogContext(
    req: DescribeLogContextRequest,
    cb?: (error: string, rep: DescribeLogContextResponse) => void
  ): Promise<DescribeLogContextResponse> {
    return this.request("DescribeLogContext", req, cb)
  }

  /**
   * 本接口用于合并一个读写态的主题分区，合并时指定一个主题分区 ID，日志服务会自动合并范围右相邻的分区。
   */
  async MergePartition(
    req: MergePartitionRequest,
    cb?: (error: string, rep: MergePartitionResponse) => void
  ): Promise<MergePartitionResponse> {
    return this.request("MergePartition", req, cb)
  }

  /**
   * 获取制定机器组下的机器状态
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
   * 获取采集规则配置所绑定的机器组
   */
  async DescribeConfigMachineGroups(
    req: DescribeConfigMachineGroupsRequest,
    cb?: (error: string, rep: DescribeConfigMachineGroupsResponse) => void
  ): Promise<DescribeConfigMachineGroupsResponse> {
    return this.request("DescribeConfigMachineGroups", req, cb)
  }

  /**
   * 本接口用于删除日志导出
   */
  async DeleteExport(
    req: DeleteExportRequest,
    cb?: (error: string, rep: DeleteExportResponse) => void
  ): Promise<DeleteExportResponse> {
    return this.request("DeleteExport", req, cb)
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
   * 本接口用于删除日志主题。
   */
  async DeleteTopic(
    req: DeleteTopicRequest,
    cb?: (error: string, rep: DeleteTopicResponse) => void
  ): Promise<DeleteTopicResponse> {
    return this.request("DeleteTopic", req, cb)
  }

  /**
   * 本接口用于创建日志导出
   */
  async CreateExport(
    req: CreateExportRequest,
    cb?: (error: string, rep: CreateExportResponse) => void
  ): Promise<CreateExportResponse> {
    return this.request("CreateExport", req, cb)
  }

  /**
   * 本接口用于分裂主题分区
   */
  async SplitPartition(
    req: SplitPartitionRequest,
    cb?: (error: string, rep: SplitPartitionResponse) => void
  ): Promise<SplitPartitionResponse> {
    return this.request("SplitPartition", req, cb)
  }
}
