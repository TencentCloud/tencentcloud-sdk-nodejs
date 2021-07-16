import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateAlarmResponse, DeleteAlarmNoticeResponse, DescribeLogContextRequest, DeleteShipperRequest, ModifyTopicRequest, DeleteLogsetResponse, DescribeShipperTasksResponse, CreateMachineGroupResponse, DescribeConfigMachineGroupsRequest, CreateLogsetRequest, SearchLogResponse, DeleteTopicRequest, DescribePartitionsRequest, ModifyAlarmResponse, DescribeShipperTasksRequest, DescribeAlarmsRequest, DescribeShippersResponse, ModifyShipperResponse, RetryShipperTaskRequest, DescribeIndexRequest, DescribeConfigsResponse, CreateLogsetResponse, DeleteMachineGroupResponse, DescribeMachineGroupsRequest, CreateIndexResponse, DeleteConfigFromMachineGroupResponse, ModifyMachineGroupResponse, DeleteMachineGroupRequest, DescribePartitionsResponse, DescribeConfigMachineGroupsResponse, ModifyAlarmRequest, DescribeTopicsResponse, ModifyAlarmNoticeRequest, CreateAlarmRequest, DeleteExportResponse, DescribeShippersRequest, RetryShipperTaskResponse, SplitPartitionRequest, CreateIndexRequest, CreateTopicRequest, DescribeTopicsRequest, GetAlarmLogResponse, DescribeConfigsRequest, DescribeExportsRequest, DeleteConfigResponse, ModifyIndexResponse, DeleteIndexRequest, DeleteConfigRequest, CreateExportRequest, DescribeAlarmNoticesResponse, ModifyConfigRequest, DescribeLogsetsResponse, CreateShipperRequest, CreateTopicResponse, DeleteAlarmResponse, DescribeAlarmsResponse, CreateAlarmNoticeResponse, ModifyTopicResponse, CreateConfigRequest, CreateShipperResponse, DeleteIndexResponse, ModifyIndexRequest, GetAlarmLogRequest, DeleteShipperResponse, DeleteExportRequest, SplitPartitionResponse, ModifyShipperRequest, DescribeLogContextResponse, ModifyConfigResponse, ModifyAlarmNoticeResponse, DescribeMachinesResponse, ApplyConfigToMachineGroupResponse, DeleteAlarmRequest, CreateConfigResponse, DeleteConfigFromMachineGroupRequest, ModifyMachineGroupRequest, DescribeAlarmNoticesRequest, MergePartitionRequest, CreateExportResponse, DeleteAlarmNoticeRequest, DeleteLogsetRequest, ModifyLogsetResponse, SearchLogRequest, CreateMachineGroupRequest, DescribeExportsResponse, ApplyConfigToMachineGroupRequest, DescribeMachineGroupConfigsResponse, CreateAlarmNoticeRequest, DescribeIndexResponse, DescribeMachineGroupConfigsRequest, ModifyLogsetRequest, DescribeMachineGroupsResponse, DescribeLogsetsRequest, DeleteTopicResponse, DescribeMachinesRequest, MergePartitionResponse } from "./cls_models";
/**
 * cls client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建机器组
     */
    CreateMachineGroup(req: CreateMachineGroupRequest, cb?: (error: string, rep: CreateMachineGroupResponse) => void): Promise<CreateMachineGroupResponse>;
    /**
     * 获取机器组信息列表
     */
    DescribeMachineGroups(req: DescribeMachineGroupsRequest, cb?: (error: string, rep: DescribeMachineGroupsResponse) => void): Promise<DescribeMachineGroupsResponse>;
    /**
     * 本接口用于获取告警任务历史
     */
    GetAlarmLog(req: GetAlarmLogRequest, cb?: (error: string, rep: GetAlarmLogResponse) => void): Promise<GetAlarmLogResponse>;
    /**
     * 本接口用于修改日志主题。
     */
    ModifyTopic(req: ModifyTopicRequest, cb?: (error: string, rep: ModifyTopicResponse) => void): Promise<ModifyTopicResponse>;
    /**
     * 本接口用于修改索引配置

     */
    ModifyIndex(req: ModifyIndexRequest, cb?: (error: string, rep: ModifyIndexResponse) => void): Promise<ModifyIndexResponse>;
    /**
     * 本接口用于获取日志集信息列表。
     */
    DescribeLogsets(req: DescribeLogsetsRequest, cb?: (error: string, rep: DescribeLogsetsResponse) => void): Promise<DescribeLogsetsResponse>;
    /**
     * 本接口用于修改日志集信息
     */
    ModifyLogset(req: ModifyLogsetRequest, cb?: (error: string, rep: ModifyLogsetResponse) => void): Promise<ModifyLogsetResponse>;
    /**
     * 本接口用于获取日志导出列表
     */
    DescribeExports(req: DescribeExportsRequest, cb?: (error: string, rep: DescribeExportsResponse) => void): Promise<DescribeExportsResponse>;
    /**
     * 本接口用于获取索引配置信息
     */
    DescribeIndex(req: DescribeIndexRequest, cb?: (error: string, rep: DescribeIndexResponse) => void): Promise<DescribeIndexResponse>;
    /**
     * 本接口用于获取主题分区列表。
     */
    DescribePartitions(req: DescribePartitionsRequest, cb?: (error: string, rep: DescribePartitionsResponse) => void): Promise<DescribePartitionsResponse>;
    /**
     * 本接口用于创建索引
     */
    CreateIndex(req: CreateIndexRequest, cb?: (error: string, rep: CreateIndexResponse) => void): Promise<CreateIndexResponse>;
    /**
     * 删除采集规则配置
     */
    DeleteConfig(req: DeleteConfigRequest, cb?: (error: string, rep: DeleteConfigResponse) => void): Promise<DeleteConfigResponse>;
    /**
     * 创建新的投递规则，客户如果使用此接口，需要自行处理CLS对指定bucket的写权限。
     */
    CreateShipper(req: CreateShipperRequest, cb?: (error: string, rep: CreateShipperResponse) => void): Promise<CreateShipperResponse>;
    /**
     * 修改现有的投递规则，客户如果使用此接口，需要自行处理CLS对指定bucket的写权限。
     */
    ModifyShipper(req: ModifyShipperRequest, cb?: (error: string, rep: ModifyShipperResponse) => void): Promise<ModifyShipperResponse>;
    /**
     * 该接口用户创建告警通知模板。
     */
    CreateAlarmNotice(req: CreateAlarmNoticeRequest, cb?: (error: string, rep: CreateAlarmNoticeResponse) => void): Promise<CreateAlarmNoticeResponse>;
    /**
     * 获取采集规则配置
     */
    DescribeConfigs(req: DescribeConfigsRequest, cb?: (error: string, rep: DescribeConfigsResponse) => void): Promise<DescribeConfigsResponse>;
    /**
     * 本接口用于修改告警策略。需要至少修改一项有效内容。
     */
    ModifyAlarm(req: ModifyAlarmRequest, cb?: (error: string, rep: ModifyAlarmResponse) => void): Promise<ModifyAlarmResponse>;
    /**
     * 删除机器组
     */
    DeleteMachineGroup(req: DeleteMachineGroupRequest, cb?: (error: string, rep: DeleteMachineGroupResponse) => void): Promise<DeleteMachineGroupResponse>;
    /**
     *  本接口用于获取日志主题列表，支持分页
     */
    DescribeTopics(req: DescribeTopicsRequest, cb?: (error: string, rep: DescribeTopicsResponse) => void): Promise<DescribeTopicsResponse>;
    /**
     * 本接口用于删除日志集。
     */
    DeleteLogset(req: DeleteLogsetRequest, cb?: (error: string, rep: DeleteLogsetResponse) => void): Promise<DeleteLogsetResponse>;
    /**
     * 获取投递规则信息列表
     */
    DescribeShippers(req: DescribeShippersRequest, cb?: (error: string, rep: DescribeShippersResponse) => void): Promise<DescribeShippersResponse>;
    /**
     * 修改机器组
     */
    ModifyMachineGroup(req: ModifyMachineGroupRequest, cb?: (error: string, rep: ModifyMachineGroupResponse) => void): Promise<ModifyMachineGroupResponse>;
    /**
     * 删除应用到机器组的采集配置
     */
    DeleteConfigFromMachineGroup(req: DeleteConfigFromMachineGroupRequest, cb?: (error: string, rep: DeleteConfigFromMachineGroupResponse) => void): Promise<DeleteConfigFromMachineGroupResponse>;
    /**
     * 本接口用于创建日志集，返回新创建的日志集的 ID。
     */
    CreateLogset(req: CreateLogsetRequest, cb?: (error: string, rep: CreateLogsetResponse) => void): Promise<CreateLogsetResponse>;
    /**
     * 本接口用于获取告警策略。
     */
    DescribeAlarms(req: DescribeAlarmsRequest, cb?: (error: string, rep: DescribeAlarmsResponse) => void): Promise<DescribeAlarmsResponse>;
    /**
     * 该接口用于获取告警通知模板列表
     */
    DescribeAlarmNotices(req: DescribeAlarmNoticesRequest, cb?: (error: string, rep: DescribeAlarmNoticesResponse) => void): Promise<DescribeAlarmNoticesResponse>;
    /**
     * 本接口用于创建日志主题。
     */
    CreateTopic(req: CreateTopicRequest, cb?: (error: string, rep: CreateTopicResponse) => void): Promise<CreateTopicResponse>;
    /**
     * 应用采集配置到指定机器组
     */
    ApplyConfigToMachineGroup(req: ApplyConfigToMachineGroupRequest, cb?: (error: string, rep: ApplyConfigToMachineGroupResponse) => void): Promise<ApplyConfigToMachineGroupResponse>;
    /**
     * 该接口用于删除告警通知模板
     */
    DeleteAlarmNotice(req: DeleteAlarmNoticeRequest, cb?: (error: string, rep: DeleteAlarmNoticeResponse) => void): Promise<DeleteAlarmNoticeResponse>;
    /**
     * 该接口用于修改告警通知模板。
     */
    ModifyAlarmNotice(req: ModifyAlarmNoticeRequest, cb?: (error: string, rep: ModifyAlarmNoticeResponse) => void): Promise<ModifyAlarmNoticeResponse>;
    /**
     * 本接口用于搜索日志
     */
    SearchLog(req: SearchLogRequest, cb?: (error: string, rep: SearchLogResponse) => void): Promise<SearchLogResponse>;
    /**
     * 修改采集规则配置
     */
    ModifyConfig(req: ModifyConfigRequest, cb?: (error: string, rep: ModifyConfigResponse) => void): Promise<ModifyConfigResponse>;
    /**
     * 获取投递任务列表
     */
    DescribeShipperTasks(req: DescribeShipperTasksRequest, cb?: (error: string, rep: DescribeShipperTasksResponse) => void): Promise<DescribeShipperTasksResponse>;
    /**
     * 创建采集规则配置
     */
    CreateConfig(req: CreateConfigRequest, cb?: (error: string, rep: CreateConfigResponse) => void): Promise<CreateConfigResponse>;
    /**
     * 获取机器组绑定的采集规则配置
     */
    DescribeMachineGroupConfigs(req: DescribeMachineGroupConfigsRequest, cb?: (error: string, rep: DescribeMachineGroupConfigsResponse) => void): Promise<DescribeMachineGroupConfigsResponse>;
    /**
     * 删除投递规则
     */
    DeleteShipper(req: DeleteShipperRequest, cb?: (error: string, rep: DeleteShipperResponse) => void): Promise<DeleteShipperResponse>;
    /**
     * 本接口用于日志主题的索引配置
     */
    DeleteIndex(req: DeleteIndexRequest, cb?: (error: string, rep: DeleteIndexResponse) => void): Promise<DeleteIndexResponse>;
    /**
     * 本接口用于删除告警策略。
     */
    DeleteAlarm(req: DeleteAlarmRequest, cb?: (error: string, rep: DeleteAlarmResponse) => void): Promise<DeleteAlarmResponse>;
    /**
     * 本接口用于搜索日志上下文附近的内容
     */
    DescribeLogContext(req: DescribeLogContextRequest, cb?: (error: string, rep: DescribeLogContextResponse) => void): Promise<DescribeLogContextResponse>;
    /**
     * 本接口用于合并一个读写态的主题分区，合并时指定一个主题分区 ID，日志服务会自动合并范围右相邻的分区。
     */
    MergePartition(req: MergePartitionRequest, cb?: (error: string, rep: MergePartitionResponse) => void): Promise<MergePartitionResponse>;
    /**
     * 获取制定机器组下的机器状态
     */
    DescribeMachines(req: DescribeMachinesRequest, cb?: (error: string, rep: DescribeMachinesResponse) => void): Promise<DescribeMachinesResponse>;
    /**
     * 重试失败的投递任务
     */
    RetryShipperTask(req: RetryShipperTaskRequest, cb?: (error: string, rep: RetryShipperTaskResponse) => void): Promise<RetryShipperTaskResponse>;
    /**
     * 获取采集规则配置所绑定的机器组
     */
    DescribeConfigMachineGroups(req: DescribeConfigMachineGroupsRequest, cb?: (error: string, rep: DescribeConfigMachineGroupsResponse) => void): Promise<DescribeConfigMachineGroupsResponse>;
    /**
     * 本接口用于删除日志导出
     */
    DeleteExport(req: DeleteExportRequest, cb?: (error: string, rep: DeleteExportResponse) => void): Promise<DeleteExportResponse>;
    /**
     * 本接口用于创建告警策略。
     */
    CreateAlarm(req: CreateAlarmRequest, cb?: (error: string, rep: CreateAlarmResponse) => void): Promise<CreateAlarmResponse>;
    /**
     * 本接口用于删除日志主题。
     */
    DeleteTopic(req: DeleteTopicRequest, cb?: (error: string, rep: DeleteTopicResponse) => void): Promise<DeleteTopicResponse>;
    /**
     * 本接口用于创建日志导出
     */
    CreateExport(req: CreateExportRequest, cb?: (error: string, rep: CreateExportResponse) => void): Promise<CreateExportResponse>;
    /**
     * 本接口用于分裂主题分区
     */
    SplitPartition(req: SplitPartitionRequest, cb?: (error: string, rep: SplitPartitionResponse) => void): Promise<SplitPartitionResponse>;
}
