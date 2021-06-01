import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateAlarmResponse, DeleteAlarmNoticeResponse, DescribeLogContextRequest, CreateMachineGroupResponse, SearchLogResponse, DeleteTopicRequest, DescribePartitionsRequest, ModifyAlarmResponse, DescribeAlarmsRequest, MergePartitionRequest, DescribeIndexRequest, DeleteMachineGroupResponse, CreateIndexResponse, DescribeExportsRequest, ModifyMachineGroupResponse, DeleteMachineGroupRequest, DescribePartitionsResponse, DescribeTopicsResponse, ModifyAlarmNoticeRequest, CreateAlarmRequest, DeleteExportResponse, ModifyAlarmRequest, SplitPartitionRequest, CreateIndexRequest, CreateTopicRequest, DescribeTopicsRequest, GetAlarmLogResponse, DescribeMachineGroupsRequest, ModifyIndexResponse, DeleteIndexRequest, CreateExportRequest, DescribeAlarmNoticesResponse, CreateTopicResponse, DeleteAlarmResponse, DescribeAlarmsResponse, CreateAlarmNoticeResponse, ModifyTopicResponse, DeleteIndexResponse, ModifyIndexRequest, GetAlarmLogRequest, ModifyTopicRequest, DeleteExportRequest, SplitPartitionResponse, DeleteAlarmRequest, ModifyAlarmNoticeResponse, DescribeMachinesResponse, DescribeLogContextResponse, ModifyMachineGroupRequest, DescribeAlarmNoticesRequest, CreateExportResponse, DeleteAlarmNoticeRequest, SearchLogRequest, CreateMachineGroupRequest, DescribeExportsResponse, CreateAlarmNoticeRequest, DescribeIndexResponse, DescribeMachineGroupsResponse, DeleteTopicResponse, DescribeMachinesRequest, MergePartitionResponse } from "./cls_models";
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
     * 修改机器组
     */
    ModifyMachineGroup(req: ModifyMachineGroupRequest, cb?: (error: string, rep: ModifyMachineGroupResponse) => void): Promise<ModifyMachineGroupResponse>;
    /**
     * 本接口用于获取日志导出列表
     */
    DescribeExports(req: DescribeExportsRequest, cb?: (error: string, rep: DescribeExportsResponse) => void): Promise<DescribeExportsResponse>;
    /**
     * 本接口用于获取索引配置信息
     */
    DescribeIndex(req: DescribeIndexRequest, cb?: (error: string, rep: DescribeIndexResponse) => void): Promise<DescribeIndexResponse>;
    /**
     * 本接口用于创建索引
     */
    CreateIndex(req: CreateIndexRequest, cb?: (error: string, rep: CreateIndexResponse) => void): Promise<CreateIndexResponse>;
    /**
     * 该接口用户创建告警通知模板。
     */
    CreateAlarmNotice(req: CreateAlarmNoticeRequest, cb?: (error: string, rep: CreateAlarmNoticeResponse) => void): Promise<CreateAlarmNoticeResponse>;
    /**
     * 本接口用于修改告警策略。需要至少修改一项有效内容。
     */
    ModifyAlarm(req: ModifyAlarmRequest, cb?: (error: string, rep: ModifyAlarmResponse) => void): Promise<ModifyAlarmResponse>;
    /**
     * 删除机器组
     */
    DeleteMachineGroup(req: DeleteMachineGroupRequest, cb?: (error: string, rep: DeleteMachineGroupResponse) => void): Promise<DeleteMachineGroupResponse>;
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
     * 本接口用于获取主题分区列表。
     */
    DescribePartitions(req: DescribePartitionsRequest, cb?: (error: string, rep: DescribePartitionsResponse) => void): Promise<DescribePartitionsResponse>;
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
     *  本接口用于获取日志主题列表，支持分页
     */
    DescribeTopics(req: DescribeTopicsRequest, cb?: (error: string, rep: DescribeTopicsResponse) => void): Promise<DescribeTopicsResponse>;
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
