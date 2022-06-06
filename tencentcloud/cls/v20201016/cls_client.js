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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const UploadLogResponse = models.UploadLogResponse;
const CreateAlarmResponse = models.CreateAlarmResponse;
const AlarmInfo = models.AlarmInfo;
const LogInfo = models.LogInfo;
const DeleteAlarmNoticeResponse = models.DeleteAlarmNoticeResponse;
const DescribeLogHistogramRequest = models.DescribeLogHistogramRequest;
const DescribeLogContextRequest = models.DescribeLogContextRequest;
const DeleteShipperRequest = models.DeleteShipperRequest;
const ModifyTopicRequest = models.ModifyTopicRequest;
const DeleteLogsetResponse = models.DeleteLogsetResponse;
const ParquetKeyInfo = models.ParquetKeyInfo;
const DescribeShipperTasksResponse = models.DescribeShipperTasksResponse;
const CreateMachineGroupResponse = models.CreateMachineGroupResponse;
const DescribeConfigMachineGroupsRequest = models.DescribeConfigMachineGroupsRequest;
const ModifyConfigExtraResponse = models.ModifyConfigExtraResponse;
const ModifyLogsetRequest = models.ModifyLogsetRequest;
const CreateLogsetRequest = models.CreateLogsetRequest;
const ModifyDataTransformRequest = models.ModifyDataTransformRequest;
const LogItem = models.LogItem;
const SearchLogResponse = models.SearchLogResponse;
const DeleteTopicRequest = models.DeleteTopicRequest;
const DescribePartitionsRequest = models.DescribePartitionsRequest;
const ContainerStdoutInfo = models.ContainerStdoutInfo;
const ModifyAlarmResponse = models.ModifyAlarmResponse;
const DescribeShipperTasksRequest = models.DescribeShipperTasksRequest;
const DescribeAlarmsRequest = models.DescribeAlarmsRequest;
const MergePartitionRequest = models.MergePartitionRequest;
const DescribeShippersResponse = models.DescribeShippersResponse;
const CreateConfigExtraResponse = models.CreateConfigExtraResponse;
const ModifyShipperResponse = models.ModifyShipperResponse;
const RetryShipperTaskRequest = models.RetryShipperTaskRequest;
const ContainerWorkLoadInfo = models.ContainerWorkLoadInfo;
const DescribeConfigExtrasResponse = models.DescribeConfigExtrasResponse;
const CallBackInfo = models.CallBackInfo;
const OpenKafkaConsumerResponse = models.OpenKafkaConsumerResponse;
const AlarmTargetInfo = models.AlarmTargetInfo;
const DescribeIndexRequest = models.DescribeIndexRequest;
const DescribeConfigsResponse = models.DescribeConfigsResponse;
const CreateLogsetResponse = models.CreateLogsetResponse;
const DeleteMachineGroupResponse = models.DeleteMachineGroupResponse;
const Tag = models.Tag;
const DescribeExportsRequest = models.DescribeExportsRequest;
const ExtractRuleInfo = models.ExtractRuleInfo;
const TopicInfo = models.TopicInfo;
const DeleteDataTransformResponse = models.DeleteDataTransformResponse;
const DeleteConfigExtraResponse = models.DeleteConfigExtraResponse;
const ModifyConsumerRequest = models.ModifyConsumerRequest;
const CreateIndexResponse = models.CreateIndexResponse;
const DeleteConfigFromMachineGroupResponse = models.DeleteConfigFromMachineGroupResponse;
const CreateConsumerResponse = models.CreateConsumerResponse;
const ModifyMachineGroupResponse = models.ModifyMachineGroupResponse;
const DataTransformResouceInfo = models.DataTransformResouceInfo;
const DeleteMachineGroupRequest = models.DeleteMachineGroupRequest;
const FullTextInfo = models.FullTextInfo;
const DescribePartitionsResponse = models.DescribePartitionsResponse;
const DescribeConfigMachineGroupsResponse = models.DescribeConfigMachineGroupsResponse;
const ModifyAlarmRequest = models.ModifyAlarmRequest;
const DescribeTopicsResponse = models.DescribeTopicsResponse;
const LogItems = models.LogItems;
const ModifyAlarmNoticeRequest = models.ModifyAlarmNoticeRequest;
const RuleKeyValueInfo = models.RuleKeyValueInfo;
const CreateAlarmRequest = models.CreateAlarmRequest;
const DeleteExportResponse = models.DeleteExportResponse;
const PartitionInfo = models.PartitionInfo;
const DescribeShippersRequest = models.DescribeShippersRequest;
const ExcludePathInfo = models.ExcludePathInfo;
const FilterRuleInfo = models.FilterRuleInfo;
const ConfigExtraInfo = models.ConfigExtraInfo;
const RetryShipperTaskResponse = models.RetryShipperTaskResponse;
const SplitPartitionRequest = models.SplitPartitionRequest;
const DescribeMachineGroupConfigsResponse = models.DescribeMachineGroupConfigsResponse;
const MachineGroupInfo = models.MachineGroupInfo;
const DescribeLogHistogramResponse = models.DescribeLogHistogramResponse;
const CloseKafkaConsumerResponse = models.CloseKafkaConsumerResponse;
const RuleTagInfo = models.RuleTagInfo;
const CreateIndexRequest = models.CreateIndexRequest;
const DeleteConsumerResponse = models.DeleteConsumerResponse;
const DescribeTopicsRequest = models.DescribeTopicsRequest;
const GetAlarmLogResponse = models.GetAlarmLogResponse;
const CreateTopicRequest = models.CreateTopicRequest;
const DescribeMachineGroupsRequest = models.DescribeMachineGroupsRequest;
const AlarmTarget = models.AlarmTarget;
const OpenKafkaConsumerRequest = models.OpenKafkaConsumerRequest;
const DeleteConfigResponse = models.DeleteConfigResponse;
const ModifyIndexResponse = models.ModifyIndexResponse;
const DeleteConsumerRequest = models.DeleteConsumerRequest;
const DeleteIndexRequest = models.DeleteIndexRequest;
const DescribeConsumerResponse = models.DescribeConsumerResponse;
const UploadLogRequest = models.UploadLogRequest;
const ModifyConsumerResponse = models.ModifyConsumerResponse;
const DescribeConfigsRequest = models.DescribeConfigsRequest;
const LogsetInfo = models.LogsetInfo;
const DescribeConsumerRequest = models.DescribeConsumerRequest;
const DeleteConfigRequest = models.DeleteConfigRequest;
const AnalysisDimensional = models.AnalysisDimensional;
const ShipperTaskInfo = models.ShipperTaskInfo;
const CloseKafkaConsumerRequest = models.CloseKafkaConsumerRequest;
const CreateExportRequest = models.CreateExportRequest;
const DescribeAlarmNoticesResponse = models.DescribeAlarmNoticesResponse;
const DeleteDataTransformRequest = models.DeleteDataTransformRequest;
const DeleteConfigExtraRequest = models.DeleteConfigExtraRequest;
const ModifyConfigRequest = models.ModifyConfigRequest;
const DescribeLogsetsResponse = models.DescribeLogsetsResponse;
const JsonInfo = models.JsonInfo;
const CreateShipperRequest = models.CreateShipperRequest;
const CreateTopicResponse = models.CreateTopicResponse;
const DeleteAlarmResponse = models.DeleteAlarmResponse;
const WebCallback = models.WebCallback;
const DescribeAlarmsResponse = models.DescribeAlarmsResponse;
const CreateAlarmNoticeResponse = models.CreateAlarmNoticeResponse;
const ModifyTopicResponse = models.ModifyTopicResponse;
const CreateConfigRequest = models.CreateConfigRequest;
const CreateShipperResponse = models.CreateShipperResponse;
const DeleteIndexResponse = models.DeleteIndexResponse;
const ModifyIndexRequest = models.ModifyIndexRequest;
const Column = models.Column;
const CompressInfo = models.CompressInfo;
const ValueInfo = models.ValueInfo;
const DescribeDataTransformInfoRequest = models.DescribeDataTransformInfoRequest;
const DeleteShipperResponse = models.DeleteShipperResponse;
const ExportInfo = models.ExportInfo;
const DescribeLogContextResponse = models.DescribeLogContextResponse;
const ConfigInfo = models.ConfigInfo;
const DeleteExportRequest = models.DeleteExportRequest;
const SplitPartitionResponse = models.SplitPartitionResponse;
const CreateDataTransformResponse = models.CreateDataTransformResponse;
const LogContextInfo = models.LogContextInfo;
const ModifyShipperRequest = models.ModifyShipperRequest;
const RuleInfo = models.RuleInfo;
const CreateConfigExtraRequest = models.CreateConfigExtraRequest;
const CreateConsumerRequest = models.CreateConsumerRequest;
const AlarmNotice = models.AlarmNotice;
const ModifyConfigResponse = models.ModifyConfigResponse;
const ModifyAlarmNoticeResponse = models.ModifyAlarmNoticeResponse;
const DataTransformTaskInfo = models.DataTransformTaskInfo;
const DescribeMachinesResponse = models.DescribeMachinesResponse;
const PreviewLogStatistic = models.PreviewLogStatistic;
const ContentInfo = models.ContentInfo;
const ApplyConfigToMachineGroupResponse = models.ApplyConfigToMachineGroupResponse;
const DeleteAlarmRequest = models.DeleteAlarmRequest;
const CreateConfigResponse = models.CreateConfigResponse;
const MachineGroupTypeInfo = models.MachineGroupTypeInfo;
const DeleteConfigFromMachineGroupRequest = models.DeleteConfigFromMachineGroupRequest;
const ShipperInfo = models.ShipperInfo;
const KeyValueInfo = models.KeyValueInfo;
const ModifyMachineGroupRequest = models.ModifyMachineGroupRequest;
const DescribeAlarmNoticesRequest = models.DescribeAlarmNoticesRequest;
const NoticeReceiver = models.NoticeReceiver;
const Ckafka = models.Ckafka;
const DescribeMachinesRequest = models.DescribeMachinesRequest;
const DeleteAlarmNoticeRequest = models.DeleteAlarmNoticeRequest;
const DeleteLogsetRequest = models.DeleteLogsetRequest;
const MachineInfo = models.MachineInfo;
const ModifyLogsetResponse = models.ModifyLogsetResponse;
const MonitorTime = models.MonitorTime;
const SearchLogRequest = models.SearchLogRequest;
const CreateMachineGroupRequest = models.CreateMachineGroupRequest;
const DescribeExportsResponse = models.DescribeExportsResponse;
const ApplyConfigToMachineGroupRequest = models.ApplyConfigToMachineGroupRequest;
const GetAlarmLogRequest = models.GetAlarmLogRequest;
const ContainerFileInfo = models.ContainerFileInfo;
const CsvInfo = models.CsvInfo;
const DescribeConfigExtrasRequest = models.DescribeConfigExtrasRequest;
const CreateAlarmNoticeRequest = models.CreateAlarmNoticeRequest;
const DescribeIndexResponse = models.DescribeIndexResponse;
const HistogramInfo = models.HistogramInfo;
const DescribeMachineGroupConfigsRequest = models.DescribeMachineGroupConfigsRequest;
const ModifyConfigExtraRequest = models.ModifyConfigExtraRequest;
const CreateDataTransformRequest = models.CreateDataTransformRequest;
const DescribeMachineGroupsResponse = models.DescribeMachineGroupsResponse;
const DescribeLogsetsRequest = models.DescribeLogsetsRequest;
const ParquetInfo = models.ParquetInfo;
const DeleteTopicResponse = models.DeleteTopicResponse;
const Filter = models.Filter;
const ModifyDataTransformResponse = models.ModifyDataTransformResponse;
const DescribeDataTransformInfoResponse = models.DescribeDataTransformInfoResponse;
const ConsumerContent = models.ConsumerContent;
const CreateExportResponse = models.CreateExportResponse;
const HostFileInfo = models.HostFileInfo;
const KeyRegexInfo = models.KeyRegexInfo;
const MergePartitionResponse = models.MergePartitionResponse;


/**
 * cls client
 * @class
 */
class ClsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cls.tencentcloudapi.com", "2020-10-16", credential, region, profile);
    }
    
    /**
     * 创建机器组
     * @param {CreateMachineGroupRequest} req
     * @param {function(string, CreateMachineGroupResponse):void} cb
     * @public
     */
    CreateMachineGroup(req, cb) {
        let resp = new CreateMachineGroupResponse();
        this.request("CreateMachineGroup", req, resp, cb);
    }

    /**
     * 获取机器组信息列表
     * @param {DescribeMachineGroupsRequest} req
     * @param {function(string, DescribeMachineGroupsResponse):void} cb
     * @public
     */
    DescribeMachineGroups(req, cb) {
        let resp = new DescribeMachineGroupsResponse();
        this.request("DescribeMachineGroups", req, resp, cb);
    }

    /**
     * 本接口用于获取告警任务历史
     * @param {GetAlarmLogRequest} req
     * @param {function(string, GetAlarmLogResponse):void} cb
     * @public
     */
    GetAlarmLog(req, cb) {
        let resp = new GetAlarmLogResponse();
        this.request("GetAlarmLog", req, resp, cb);
    }

    /**
     * 本接口用于创建投递任务
     * @param {CreateConsumerRequest} req
     * @param {function(string, CreateConsumerResponse):void} cb
     * @public
     */
    CreateConsumer(req, cb) {
        let resp = new CreateConsumerResponse();
        this.request("CreateConsumer", req, resp, cb);
    }

    /**
     * 本接口用于修改日志主题。
     * @param {ModifyTopicRequest} req
     * @param {function(string, ModifyTopicResponse):void} cb
     * @public
     */
    ModifyTopic(req, cb) {
        let resp = new ModifyTopicResponse();
        this.request("ModifyTopic", req, resp, cb);
    }

    /**
     * 获取制定机器组下的机器状态
     * @param {DescribeMachinesRequest} req
     * @param {function(string, DescribeMachinesResponse):void} cb
     * @public
     */
    DescribeMachines(req, cb) {
        let resp = new DescribeMachinesResponse();
        this.request("DescribeMachines", req, resp, cb);
    }

    /**
     * 本接口用于获取日志集信息列表。
     * @param {DescribeLogsetsRequest} req
     * @param {function(string, DescribeLogsetsResponse):void} cb
     * @public
     */
    DescribeLogsets(req, cb) {
        let resp = new DescribeLogsetsResponse();
        this.request("DescribeLogsets", req, resp, cb);
    }

    /**
     * 本接口用于修改日志集信息
     * @param {ModifyLogsetRequest} req
     * @param {function(string, ModifyLogsetResponse):void} cb
     * @public
     */
    ModifyLogset(req, cb) {
        let resp = new ModifyLogsetResponse();
        this.request("ModifyLogset", req, resp, cb);
    }

    /**
     * 本接口用于获取日志下载任务列表
     * @param {DescribeExportsRequest} req
     * @param {function(string, DescribeExportsResponse):void} cb
     * @public
     */
    DescribeExports(req, cb) {
        let resp = new DescribeExportsResponse();
        this.request("DescribeExports", req, resp, cb);
    }

    /**
     * 本接口用于修改索引配置

     * @param {ModifyIndexRequest} req
     * @param {function(string, ModifyIndexResponse):void} cb
     * @public
     */
    ModifyIndex(req, cb) {
        let resp = new ModifyIndexResponse();
        this.request("ModifyIndex", req, resp, cb);
    }

    /**
     * 本接口用于修改特殊采集配置任务
     * @param {ModifyConfigExtraRequest} req
     * @param {function(string, ModifyConfigExtraResponse):void} cb
     * @public
     */
    ModifyConfigExtra(req, cb) {
        let resp = new ModifyConfigExtraResponse();
        this.request("ModifyConfigExtra", req, resp, cb);
    }

    /**
     * 本接口用于获取索引配置信息
     * @param {DescribeIndexRequest} req
     * @param {function(string, DescribeIndexResponse):void} cb
     * @public
     */
    DescribeIndex(req, cb) {
        let resp = new DescribeIndexResponse();
        this.request("DescribeIndex", req, resp, cb);
    }

    /**
     * 本接口用于获取主题分区列表。
     * @param {DescribePartitionsRequest} req
     * @param {function(string, DescribePartitionsResponse):void} cb
     * @public
     */
    DescribePartitions(req, cb) {
        let resp = new DescribePartitionsResponse();
        this.request("DescribePartitions", req, resp, cb);
    }

    /**
     * 本接口用于创建索引
     * @param {CreateIndexRequest} req
     * @param {function(string, CreateIndexResponse):void} cb
     * @public
     */
    CreateIndex(req, cb) {
        let resp = new CreateIndexResponse();
        this.request("CreateIndex", req, resp, cb);
    }

    /**
     * 删除采集规则配置
     * @param {DeleteConfigRequest} req
     * @param {function(string, DeleteConfigResponse):void} cb
     * @public
     */
    DeleteConfig(req, cb) {
        let resp = new DeleteConfigResponse();
        this.request("DeleteConfig", req, resp, cb);
    }

    /**
     * 本接口用于获取特殊采集配置
     * @param {DescribeConfigExtrasRequest} req
     * @param {function(string, DescribeConfigExtrasResponse):void} cb
     * @public
     */
    DescribeConfigExtras(req, cb) {
        let resp = new DescribeConfigExtrasResponse();
        this.request("DescribeConfigExtras", req, resp, cb);
    }

    /**
     * 创建新的投递规则，【！！！注意】使用此接口，需要检查是否配置了投递COS的角色和权限。如果没有配置，请参考文档投递权限查看和配置https://cloud.tencent.com/document/product/614/71623。
     * @param {CreateShipperRequest} req
     * @param {function(string, CreateShipperResponse):void} cb
     * @public
     */
    CreateShipper(req, cb) {
        let resp = new CreateShipperResponse();
        this.request("CreateShipper", req, resp, cb);
    }

    /**
     * 本接口用于修改投递任务
     * @param {ModifyConsumerRequest} req
     * @param {function(string, ModifyConsumerResponse):void} cb
     * @public
     */
    ModifyConsumer(req, cb) {
        let resp = new ModifyConsumerResponse();
        this.request("ModifyConsumer", req, resp, cb);
    }

    /**
     * 该接口用于创建通知渠道组。
     * @param {CreateAlarmNoticeRequest} req
     * @param {function(string, CreateAlarmNoticeResponse):void} cb
     * @public
     */
    CreateAlarmNotice(req, cb) {
        let resp = new CreateAlarmNoticeResponse();
        this.request("CreateAlarmNotice", req, resp, cb);
    }

    /**
     * 本接口用于删除投递配置
     * @param {DeleteConsumerRequest} req
     * @param {function(string, DeleteConsumerResponse):void} cb
     * @public
     */
    DeleteConsumer(req, cb) {
        let resp = new DeleteConsumerResponse();
        this.request("DeleteConsumer", req, resp, cb);
    }

    /**
     * 本接口用于修改告警策略。需要至少修改一项有效内容。
     * @param {ModifyAlarmRequest} req
     * @param {function(string, ModifyAlarmResponse):void} cb
     * @public
     */
    ModifyAlarm(req, cb) {
        let resp = new ModifyAlarmResponse();
        this.request("ModifyAlarm", req, resp, cb);
    }

    /**
     * 删除机器组
     * @param {DeleteMachineGroupRequest} req
     * @param {function(string, DeleteMachineGroupResponse):void} cb
     * @public
     */
    DeleteMachineGroup(req, cb) {
        let resp = new DeleteMachineGroupResponse();
        this.request("DeleteMachineGroup", req, resp, cb);
    }

    /**
     *  本接口用于获取日志主题列表，支持分页
     * @param {DescribeTopicsRequest} req
     * @param {function(string, DescribeTopicsResponse):void} cb
     * @public
     */
    DescribeTopics(req, cb) {
        let resp = new DescribeTopicsResponse();
        this.request("DescribeTopics", req, resp, cb);
    }

    /**
     * 本接口用于删除日志集。
     * @param {DeleteLogsetRequest} req
     * @param {function(string, DeleteLogsetResponse):void} cb
     * @public
     */
    DeleteLogset(req, cb) {
        let resp = new DeleteLogsetResponse();
        this.request("DeleteLogset", req, resp, cb);
    }

    /**
     * 获取投递规则信息列表
     * @param {DescribeShippersRequest} req
     * @param {function(string, DescribeShippersResponse):void} cb
     * @public
     */
    DescribeShippers(req, cb) {
        let resp = new DescribeShippersResponse();
        this.request("DescribeShippers", req, resp, cb);
    }

    /**
     * 修改机器组
     * @param {ModifyMachineGroupRequest} req
     * @param {function(string, ModifyMachineGroupResponse):void} cb
     * @public
     */
    ModifyMachineGroup(req, cb) {
        let resp = new ModifyMachineGroupResponse();
        this.request("ModifyMachineGroup", req, resp, cb);
    }

    /**
     * 删除应用到机器组的采集配置
     * @param {DeleteConfigFromMachineGroupRequest} req
     * @param {function(string, DeleteConfigFromMachineGroupResponse):void} cb
     * @public
     */
    DeleteConfigFromMachineGroup(req, cb) {
        let resp = new DeleteConfigFromMachineGroupResponse();
        this.request("DeleteConfigFromMachineGroup", req, resp, cb);
    }

    /**
     * 本接口用于删除数据加工任务
     * @param {DeleteDataTransformRequest} req
     * @param {function(string, DeleteDataTransformResponse):void} cb
     * @public
     */
    DeleteDataTransform(req, cb) {
        let resp = new DeleteDataTransformResponse();
        this.request("DeleteDataTransform", req, resp, cb);
    }

    /**
     * 本接口用于删除特殊采集规则配置
     * @param {DeleteConfigExtraRequest} req
     * @param {function(string, DeleteConfigExtraResponse):void} cb
     * @public
     */
    DeleteConfigExtra(req, cb) {
        let resp = new DeleteConfigExtraResponse();
        this.request("DeleteConfigExtra", req, resp, cb);
    }

    /**
     * 本接口用于创建数据加工任务。
     * @param {CreateDataTransformRequest} req
     * @param {function(string, CreateDataTransformResponse):void} cb
     * @public
     */
    CreateDataTransform(req, cb) {
        let resp = new CreateDataTransformResponse();
        this.request("CreateDataTransform", req, resp, cb);
    }

    /**
     * 本接口用于获取数据加工任务列表基本信息
     * @param {DescribeDataTransformInfoRequest} req
     * @param {function(string, DescribeDataTransformInfoResponse):void} cb
     * @public
     */
    DescribeDataTransformInfo(req, cb) {
        let resp = new DescribeDataTransformInfoResponse();
        this.request("DescribeDataTransformInfo", req, resp, cb);
    }

    /**
     * 该接口用于获取通知渠道组列表
     * @param {DescribeAlarmNoticesRequest} req
     * @param {function(string, DescribeAlarmNoticesResponse):void} cb
     * @public
     */
    DescribeAlarmNotices(req, cb) {
        let resp = new DescribeAlarmNoticesResponse();
        this.request("DescribeAlarmNotices", req, resp, cb);
    }

    /**
     * 本接口用于创建日志主题。
     * @param {CreateTopicRequest} req
     * @param {function(string, CreateTopicResponse):void} cb
     * @public
     */
    CreateTopic(req, cb) {
        let resp = new CreateTopicResponse();
        this.request("CreateTopic", req, resp, cb);
    }

    /**
     * 应用采集配置到指定机器组
     * @param {ApplyConfigToMachineGroupRequest} req
     * @param {function(string, ApplyConfigToMachineGroupResponse):void} cb
     * @public
     */
    ApplyConfigToMachineGroup(req, cb) {
        let resp = new ApplyConfigToMachineGroupResponse();
        this.request("ApplyConfigToMachineGroup", req, resp, cb);
    }

    /**
     * 本接口用于创建日志集，返回新创建的日志集的 ID。
     * @param {CreateLogsetRequest} req
     * @param {function(string, CreateLogsetResponse):void} cb
     * @public
     */
    CreateLogset(req, cb) {
        let resp = new CreateLogsetResponse();
        this.request("CreateLogset", req, resp, cb);
    }

    /**
     * 该接口用于删除通知渠道组
     * @param {DeleteAlarmNoticeRequest} req
     * @param {function(string, DeleteAlarmNoticeResponse):void} cb
     * @public
     */
    DeleteAlarmNotice(req, cb) {
        let resp = new DeleteAlarmNoticeResponse();
        this.request("DeleteAlarmNotice", req, resp, cb);
    }

    /**
     * 本接口用于构建直方图
     * @param {DescribeLogHistogramRequest} req
     * @param {function(string, DescribeLogHistogramResponse):void} cb
     * @public
     */
    DescribeLogHistogram(req, cb) {
        let resp = new DescribeLogHistogramResponse();
        this.request("DescribeLogHistogram", req, resp, cb);
    }

    /**
     * 本接口用于检索分析日志, 该接口除受默认接口请求频率限制外，针对单个日志主题，查询并发数不能超过15。
     * @param {SearchLogRequest} req
     * @param {function(string, SearchLogResponse):void} cb
     * @public
     */
    SearchLog(req, cb) {
        let resp = new SearchLogResponse();
        this.request("SearchLog", req, resp, cb);
    }

    /**
     * 该接口用于修改通知渠道组
     * @param {ModifyAlarmNoticeRequest} req
     * @param {function(string, ModifyAlarmNoticeResponse):void} cb
     * @public
     */
    ModifyAlarmNotice(req, cb) {
        let resp = new ModifyAlarmNoticeResponse();
        this.request("ModifyAlarmNotice", req, resp, cb);
    }

    /**
     * 打开Kafka协议消费功能
     * @param {OpenKafkaConsumerRequest} req
     * @param {function(string, OpenKafkaConsumerResponse):void} cb
     * @public
     */
    OpenKafkaConsumer(req, cb) {
        let resp = new OpenKafkaConsumerResponse();
        this.request("OpenKafkaConsumer", req, resp, cb);
    }

    /**
     * 修改采集规则配置
     * @param {ModifyConfigRequest} req
     * @param {function(string, ModifyConfigResponse):void} cb
     * @public
     */
    ModifyConfig(req, cb) {
        let resp = new ModifyConfigResponse();
        this.request("ModifyConfig", req, resp, cb);
    }

    /**
     * ## 提示
为了保障您日志数据的可靠性以及更高效地使用日志服务，建议您使用CLS优化后的接口[上传结构化日志](https://cloud.tencent.com/document/api/614/16873)上传日志。

同时我们给此接口专门优化定制了多个语言版本的SDK供您选择，SDK提供统一的异步发送、资源控制、自动重试、优雅关闭、感知上报等功能，使上报日志功能更完善，详情请参考[SDK采集](https://cloud.tencent.com/document/product/614/67157)。

同时云API上传日志接口也支持同步上传日志数据，如果您选继续使用此接口请参考下文。

## 功能描述

本接口用于将日志写入到指定的日志主题。

日志服务提供以下两种模式：

#### 负载均衡模式

系统根据当前日志主题下所有可读写的分区，遵循负载均衡原则自动分配写入的目标分区。该模式适合消费不保序的场景。

#### 哈希路由模式

系统根据携带的哈希值（X-CLS-HashKey）将数据写入到符合范围要求的目标分区。例如，可以将某个日志源端通过 hashkey 与某个主题分区强绑定，这样可以保证数据在该分区上写入和消费是严格保序的。

                 

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
     * @param {UploadLogRequest} req
     * @param {function(string, UploadLogResponse):void} cb
     * @public
     */
    UploadLog(req, cb) {
        let resp = new UploadLogResponse();
        this.request("UploadLog", req, resp, cb);
    }

    /**
     * 获取投递任务列表
     * @param {DescribeShipperTasksRequest} req
     * @param {function(string, DescribeShipperTasksResponse):void} cb
     * @public
     */
    DescribeShipperTasks(req, cb) {
        let resp = new DescribeShipperTasksResponse();
        this.request("DescribeShipperTasks", req, resp, cb);
    }

    /**
     * 修改现有的投递规则，客户如果使用此接口，需要自行处理CLS对指定bucket的写权限。
     * @param {ModifyShipperRequest} req
     * @param {function(string, ModifyShipperResponse):void} cb
     * @public
     */
    ModifyShipper(req, cb) {
        let resp = new ModifyShipperResponse();
        this.request("ModifyShipper", req, resp, cb);
    }

    /**
     * 创建采集规则配置
     * @param {CreateConfigRequest} req
     * @param {function(string, CreateConfigResponse):void} cb
     * @public
     */
    CreateConfig(req, cb) {
        let resp = new CreateConfigResponse();
        this.request("CreateConfig", req, resp, cb);
    }

    /**
     * 获取机器组绑定的采集规则配置
     * @param {DescribeMachineGroupConfigsRequest} req
     * @param {function(string, DescribeMachineGroupConfigsResponse):void} cb
     * @public
     */
    DescribeMachineGroupConfigs(req, cb) {
        let resp = new DescribeMachineGroupConfigsResponse();
        this.request("DescribeMachineGroupConfigs", req, resp, cb);
    }

    /**
     * 删除投递规则
     * @param {DeleteShipperRequest} req
     * @param {function(string, DeleteShipperResponse):void} cb
     * @public
     */
    DeleteShipper(req, cb) {
        let resp = new DeleteShipperResponse();
        this.request("DeleteShipper", req, resp, cb);
    }

    /**
     * 本接口用于删除日志主题的索引配置，删除索引配置后将无法检索和查询采集到的日志。
     * @param {DeleteIndexRequest} req
     * @param {function(string, DeleteIndexResponse):void} cb
     * @public
     */
    DeleteIndex(req, cb) {
        let resp = new DeleteIndexResponse();
        this.request("DeleteIndex", req, resp, cb);
    }

    /**
     * 本接口用于修改数据加工任务
     * @param {ModifyDataTransformRequest} req
     * @param {function(string, ModifyDataTransformResponse):void} cb
     * @public
     */
    ModifyDataTransform(req, cb) {
        let resp = new ModifyDataTransformResponse();
        this.request("ModifyDataTransform", req, resp, cb);
    }

    /**
     * 本接口用于删除告警策略。
     * @param {DeleteAlarmRequest} req
     * @param {function(string, DeleteAlarmResponse):void} cb
     * @public
     */
    DeleteAlarm(req, cb) {
        let resp = new DeleteAlarmResponse();
        this.request("DeleteAlarm", req, resp, cb);
    }

    /**
     * 本接口用于搜索日志上下文附近的内容
     * @param {DescribeLogContextRequest} req
     * @param {function(string, DescribeLogContextResponse):void} cb
     * @public
     */
    DescribeLogContext(req, cb) {
        let resp = new DescribeLogContextResponse();
        this.request("DescribeLogContext", req, resp, cb);
    }

    /**
     * 本接口用于获取投递配置
     * @param {DescribeConsumerRequest} req
     * @param {function(string, DescribeConsumerResponse):void} cb
     * @public
     */
    DescribeConsumer(req, cb) {
        let resp = new DescribeConsumerResponse();
        this.request("DescribeConsumer", req, resp, cb);
    }

    /**
     * 本接口用于分裂主题分区
     * @param {SplitPartitionRequest} req
     * @param {function(string, SplitPartitionResponse):void} cb
     * @public
     */
    SplitPartition(req, cb) {
        let resp = new SplitPartitionResponse();
        this.request("SplitPartition", req, resp, cb);
    }

    /**
     * 获取采集规则配置
     * @param {DescribeConfigsRequest} req
     * @param {function(string, DescribeConfigsResponse):void} cb
     * @public
     */
    DescribeConfigs(req, cb) {
        let resp = new DescribeConfigsResponse();
        this.request("DescribeConfigs", req, resp, cb);
    }

    /**
     * 本接口用于合并一个读写态的主题分区，合并时指定一个主题分区 ID，日志服务会自动合并范围右相邻的分区。
     * @param {MergePartitionRequest} req
     * @param {function(string, MergePartitionResponse):void} cb
     * @public
     */
    MergePartition(req, cb) {
        let resp = new MergePartitionResponse();
        this.request("MergePartition", req, resp, cb);
    }

    /**
     * 本接口用于创建特殊采集配置任务
     * @param {CreateConfigExtraRequest} req
     * @param {function(string, CreateConfigExtraResponse):void} cb
     * @public
     */
    CreateConfigExtra(req, cb) {
        let resp = new CreateConfigExtraResponse();
        this.request("CreateConfigExtra", req, resp, cb);
    }

    /**
     * 重试失败的投递任务
     * @param {RetryShipperTaskRequest} req
     * @param {function(string, RetryShipperTaskResponse):void} cb
     * @public
     */
    RetryShipperTask(req, cb) {
        let resp = new RetryShipperTaskResponse();
        this.request("RetryShipperTask", req, resp, cb);
    }

    /**
     * 获取采集规则配置所绑定的机器组
     * @param {DescribeConfigMachineGroupsRequest} req
     * @param {function(string, DescribeConfigMachineGroupsResponse):void} cb
     * @public
     */
    DescribeConfigMachineGroups(req, cb) {
        let resp = new DescribeConfigMachineGroupsResponse();
        this.request("DescribeConfigMachineGroups", req, resp, cb);
    }

    /**
     * 本接口用于删除日志下载任务
     * @param {DeleteExportRequest} req
     * @param {function(string, DeleteExportResponse):void} cb
     * @public
     */
    DeleteExport(req, cb) {
        let resp = new DeleteExportResponse();
        this.request("DeleteExport", req, resp, cb);
    }

    /**
     * 本接口用于创建告警策略。
     * @param {CreateAlarmRequest} req
     * @param {function(string, CreateAlarmResponse):void} cb
     * @public
     */
    CreateAlarm(req, cb) {
        let resp = new CreateAlarmResponse();
        this.request("CreateAlarm", req, resp, cb);
    }

    /**
     * 本接口用于删除日志主题。
     * @param {DeleteTopicRequest} req
     * @param {function(string, DeleteTopicResponse):void} cb
     * @public
     */
    DeleteTopic(req, cb) {
        let resp = new DeleteTopicResponse();
        this.request("DeleteTopic", req, resp, cb);
    }

    /**
     * 本接口仅创建下载任务，任务返回的下载地址，请用户调用DescribeExports查看任务列表。其中有下载地址CosPath参数。参考文档https://cloud.tencent.com/document/product/614/56449
     * @param {CreateExportRequest} req
     * @param {function(string, CreateExportResponse):void} cb
     * @public
     */
    CreateExport(req, cb) {
        let resp = new CreateExportResponse();
        this.request("CreateExport", req, resp, cb);
    }

    /**
     * 关闭Kafka协议消费
     * @param {CloseKafkaConsumerRequest} req
     * @param {function(string, CloseKafkaConsumerResponse):void} cb
     * @public
     */
    CloseKafkaConsumer(req, cb) {
        let resp = new CloseKafkaConsumerResponse();
        this.request("CloseKafkaConsumer", req, resp, cb);
    }

    /**
     * 本接口用于获取告警策略列表。
     * @param {DescribeAlarmsRequest} req
     * @param {function(string, DescribeAlarmsResponse):void} cb
     * @public
     */
    DescribeAlarms(req, cb) {
        let resp = new DescribeAlarmsResponse();
        this.request("DescribeAlarms", req, resp, cb);
    }


}
module.exports = ClsClient;
