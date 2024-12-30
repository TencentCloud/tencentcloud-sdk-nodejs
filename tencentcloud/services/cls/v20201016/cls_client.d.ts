import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeAlarmNoticesRequest, CreateAlarmResponse, DeleteAlarmNoticeResponse, DescribeLogHistogramRequest, DeleteAlarmShieldRequest, DescribeLogContextRequest, DeleteShipperRequest, DeleteScheduledSqlRequest, DeleteLogsetResponse, UploadLogResponse, DescribeCosRechargesResponse, CreateCloudProductLogTaskRequest, DescribeShipperTasksResponse, CheckFunctionRequest, DescribeAlarmShieldsResponse, ModifyConfigExtraResponse, SearchCosRechargeInfoRequest, DeleteScheduledSqlResponse, DescribeNoticeContentsRequest, DeleteConsoleSharingRequest, DescribeWebCallbacksResponse, CreateLogsetRequest, DescribeShippersRequest, CreateScheduledSqlResponse, DescribeDashboardsRequest, CreateConsoleSharingRequest, CreateCloudProductLogTaskResponse, DeleteNoticeContentResponse, DeleteTopicRequest, DescribePartitionsRequest, QueryRangeMetricRequest, ModifyAlarmResponse, DescribeShipperTasksRequest, MergePartitionRequest, DescribeShippersResponse, DescribeKafkaConsumerResponse, CreateConfigExtraResponse, DeleteKafkaRechargeResponse, ModifyDataTransformRequest, DescribeScheduledSqlInfoResponse, OpenKafkaConsumerResponse, DescribeIndexRequest, ModifyScheduledSqlResponse, DeleteCloudProductLogTaskRequest, DeleteMachineGroupInfoRequest, CreateLogsetResponse, DescribeConfigMachineGroupsRequest, ModifyTopicRequest, CreateCosRechargeRequest, DescribeConfigsResponse, DescribeNoticeContentsResponse, CreateAlarmShieldResponse, DeleteDataTransformResponse, DeleteConfigExtraResponse, ModifyConsumerRequest, CreateIndexResponse, DeleteConfigFromMachineGroupResponse, ModifyDashboardSubscribeResponse, ModifyDashboardSubscribeRequest, CreateConsumerResponse, DescribeConsoleSharingListResponse, DeleteWebCallbackResponse, ModifyMachineGroupResponse, CreateDashboardSubscribeRequest, DeleteMachineGroupRequest, QueryMetricResponse, DescribeAlarmShieldsRequest, ModifyLogsetRequest, ModifyNoticeContentResponse, SearchDashboardSubscribeRequest, DescribePartitionsResponse, DescribeConfigMachineGroupsResponse, ModifyAlarmRequest, DescribeTopicsResponse, ModifyAlarmNoticeRequest, CreateAlarmRequest, DeleteDataTransformRequest, DeleteExportResponse, DescribeDashboardSubscribesRequest, DeleteMachineGroupResponse, CreateNoticeContentResponse, DeleteCloudProductLogTaskResponse, CreateConfigExtraRequest, DescribeCloudProductLogTasksResponse, SplitPartitionRequest, DescribeMachineGroupConfigsResponse, CheckRechargeKafkaServerRequest, CreateAlarmShieldRequest, DeleteDashboardSubscribeResponse, DescribeLogHistogramResponse, CloseKafkaConsumerResponse, DeleteAlarmShieldResponse, DescribeConsumerRequest, CreateIndexRequest, DescribeLogsetsResponse, CreateTopicRequest, DescribeTopicsRequest, DeleteConsumerResponse, GetAlarmLogResponse, CreateWebCallbackResponse, CreateDashboardSubscribeResponse, DescribeExportsRequest, CreateMachineGroupResponse, DescribeCosRechargesRequest, CreateKafkaRechargeResponse, ModifyScheduledSqlRequest, ModifyAlarmShieldResponse, CreateDeliverCloudFunctionRequest, DeleteConsumerRequest, CreateWebCallbackRequest, DescribeMachineGroupsRequest, DeleteIndexRequest, ModifyConsumerResponse, DescribeAlertRecordHistoryRequest, DescribeConfigsRequest, DeleteConfigRequest, DeleteWebCallbackRequest, ModifyCloudProductLogTaskResponse, CloseKafkaConsumerRequest, ModifyCloudProductLogTaskRequest, CreateExportRequest, DescribeAlarmNoticesResponse, ModifyAlarmShieldRequest, DescribeMachineGroupsResponse, DeleteConfigExtraRequest, ModifyConfigRequest, AddMachineGroupInfoRequest, DescribeKafkaRechargesRequest, ModifyConsoleSharingRequest, PreviewKafkaRechargeResponse, ModifyWebCallbackRequest, CreateShipperRequest, CreateTopicResponse, DeleteAlarmResponse, DescribeAlarmsResponse, CreateAlarmNoticeResponse, DeleteConsoleSharingResponse, CreateConfigRequest, CreateShipperResponse, DescribeKafkaRechargesResponse, DeleteIndexResponse, ModifyTopicResponse, ModifyIndexRequest, DescribeDataTransformInfoRequest, DeleteConfigResponse, DeleteShipperResponse, ModifyKafkaConsumerRequest, ModifyIndexResponse, DescribeLogContextResponse, SearchLogResponse, CheckFunctionResponse, DeleteExportRequest, PreviewKafkaRechargeRequest, SplitPartitionResponse, CreateDataTransformResponse, ModifyShipperRequest, CreateKafkaRechargeRequest, DeleteKafkaRechargeRequest, CreateConfigResponse, CreateConsumerRequest, ModifyWebCallbackResponse, ModifyConfigResponse, ModifyNoticeContentRequest, OpenKafkaConsumerRequest, QueryRangeMetricResponse, ModifyKafkaRechargeResponse, ModifyAlarmNoticeResponse, CreateDeliverCloudFunctionResponse, DescribeMachinesResponse, ModifyCosRechargeResponse, DescribeDashboardsResponse, ApplyConfigToMachineGroupResponse, DeleteAlarmRequest, CreateConsoleSharingResponse, ModifyKafkaConsumerResponse, ModifyConsoleSharingResponse, DeleteConfigFromMachineGroupRequest, SearchCosRechargeInfoResponse, DescribeAlarmsRequest, QueryMetricRequest, DescribeDashboardSubscribesResponse, CreateCosRechargeResponse, DescribeAlertRecordHistoryResponse, SearchDashboardSubscribeResponse, AddMachineGroupInfoResponse, ModifyMachineGroupRequest, DeleteDashboardSubscribeRequest, DescribeConsumerResponse, CreateNoticeContentRequest, DescribeMachinesRequest, DeleteAlarmNoticeRequest, DescribeScheduledSqlInfoRequest, DeleteLogsetRequest, ModifyLogsetResponse, CreateMachineGroupRequest, DescribeExportsResponse, ApplyConfigToMachineGroupRequest, DescribeConfigExtrasRequest, DescribeCloudProductLogTasksRequest, CreateAlarmNoticeRequest, ModifyShipperResponse, DescribeIndexResponse, DescribeMachineGroupConfigsRequest, ModifyConfigExtraRequest, ModifyKafkaRechargeRequest, CreateDataTransformRequest, DeleteMachineGroupInfoResponse, CheckRechargeKafkaServerResponse, ModifyCosRechargeRequest, DescribeLogsetsRequest, DeleteTopicResponse, SearchLogRequest, DescribeWebCallbacksRequest, DeleteNoticeContentRequest, DescribeKafkaConsumerRequest, ModifyDataTransformResponse, DescribeDataTransformInfoResponse, UploadLogRequest, RetryShipperTaskRequest, CreateExportResponse, DescribeConsoleSharingListRequest, GetAlarmLogRequest, MergePartitionResponse, CreateScheduledSqlRequest, RetryShipperTaskResponse, DescribeConfigExtrasResponse } from "./cls_models";
/**
 * cls client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 修改Kafka协议消费信息
     */
    ModifyKafkaConsumer(req: ModifyKafkaConsumerRequest, cb?: (error: string, rep: ModifyKafkaConsumerResponse) => void): Promise<ModifyKafkaConsumerResponse>;
    /**
     * 本接口用于创建Kafka数据订阅任务
     */
    CreateKafkaRecharge(req: CreateKafkaRechargeRequest, cb?: (error: string, rep: CreateKafkaRechargeResponse) => void): Promise<CreateKafkaRechargeResponse>;
    /**
     * 本接口用于获取日志下载任务列表
     */
    DescribeExports(req: DescribeExportsRequest, cb?: (error: string, rep: DescribeExportsResponse) => void): Promise<DescribeExportsResponse>;
    /**
     * 本接口用于获取告警策略执行详情
     */
    GetAlarmLog(req: GetAlarmLogRequest, cb?: (error: string, rep: GetAlarmLogResponse) => void): Promise<GetAlarmLogResponse>;
    /**
     * 本接口用于创建索引
     */
    CreateIndex(req: CreateIndexRequest, cb?: (error: string, rep: CreateIndexResponse) => void): Promise<CreateIndexResponse>;
    /**
     * 查询指定时刻指标的最新值。
如果该时刻向前推5分钟内均无指标数据，则无相应的查询结果。
     */
    QueryMetric(req: QueryMetricRequest, cb?: (error: string, rep: QueryMetricResponse) => void): Promise<QueryMetricResponse>;
    /**
     * 修改现有的投递规则，客户如果使用此接口，需要自行处理CLS对指定bucket的写权限。
     */
    ModifyShipper(req: ModifyShipperRequest, cb?: (error: string, rep: ModifyShipperResponse) => void): Promise<ModifyShipperResponse>;
    /**
     * 该接口用于创建告警渠道回调配置。
     */
    CreateWebCallback(req: CreateWebCallbackRequest, cb?: (error: string, rep: CreateWebCallbackResponse) => void): Promise<CreateWebCallbackResponse>;
    /**
     * 获取采集规则配置
     */
    DescribeConfigs(req: DescribeConfigsRequest, cb?: (error: string, rep: DescribeConfigsResponse) => void): Promise<DescribeConfigsResponse>;
    /**
     * 本接口用于创建投递SCF任务
     */
    CreateDeliverCloudFunction(req: CreateDeliverCloudFunctionRequest, cb?: (error: string, rep: CreateDeliverCloudFunctionResponse) => void): Promise<CreateDeliverCloudFunctionResponse>;
    /**
     * 本接口用于删除日志集。
     */
    DeleteLogset(req: DeleteLogsetRequest, cb?: (error: string, rep: DeleteLogsetResponse) => void): Promise<DeleteLogsetResponse>;
    /**
     * 删除应用到机器组的采集配置
     */
    DeleteConfigFromMachineGroup(req: DeleteConfigFromMachineGroupRequest, cb?: (error: string, rep: DeleteConfigFromMachineGroupResponse) => void): Promise<DeleteConfigFromMachineGroupResponse>;
    /**
     * 本接口用于删除数据加工任务
     */
    DeleteDataTransform(req: DeleteDataTransformRequest, cb?: (error: string, rep: DeleteDataTransformResponse) => void): Promise<DeleteDataTransformResponse>;
    /**
     * 本接口用于创建日志集，返回新创建的日志集的 ID。
     */
    CreateLogset(req: CreateLogsetRequest, cb?: (error: string, rep: CreateLogsetResponse) => void): Promise<CreateLogsetResponse>;
    /**
     * 本接口用于创建日志主题。
     */
    CreateTopic(req: CreateTopicRequest, cb?: (error: string, rep: CreateTopicResponse) => void): Promise<CreateTopicResponse>;
    /**
     * 云产品接入使用相关接口
     */
    DescribeCloudProductLogTasks(req: DescribeCloudProductLogTasksRequest, cb?: (error: string, rep: DescribeCloudProductLogTasksResponse) => void): Promise<DescribeCloudProductLogTasksResponse>;
    /**
     * 内部云产品接入使用相关接口
     */
    DeleteCloudProductLogTask(req: DeleteCloudProductLogTaskRequest, cb?: (error: string, rep: DeleteCloudProductLogTaskResponse) => void): Promise<DeleteCloudProductLogTaskResponse>;
    /**
     * 该接口用于删除通知渠道组
     */
    DeleteAlarmNotice(req: DeleteAlarmNoticeRequest, cb?: (error: string, rep: DeleteAlarmNoticeResponse) => void): Promise<DeleteAlarmNoticeResponse>;
    /**
     * 获取告警历史，例如今天未恢复的告警
     */
    DescribeAlertRecordHistory(req: DescribeAlertRecordHistoryRequest, cb?: (error: string, rep: DescribeAlertRecordHistoryResponse) => void): Promise<DescribeAlertRecordHistoryResponse>;
    /**
     * 本接口用于删除Kafka数据订阅任务
     */
    DeleteKafkaRecharge(req: DeleteKafkaRechargeRequest, cb?: (error: string, rep: DeleteKafkaRechargeResponse) => void): Promise<DeleteKafkaRechargeResponse>;
    /**
     * 创建采集规则配置
     */
    CreateConfig(req: CreateConfigRequest, cb?: (error: string, rep: CreateConfigResponse) => void): Promise<CreateConfigResponse>;
    /**
     * 获取机器组绑定的采集规则配置
     */
    DescribeMachineGroupConfigs(req: DescribeMachineGroupConfigsRequest, cb?: (error: string, rep: DescribeMachineGroupConfigsResponse) => void): Promise<DescribeMachineGroupConfigsResponse>;
    /**
     * 本接口用于获取日志主题列表，支持分页
     */
    DescribeTopics(req: DescribeTopicsRequest, cb?: (error: string, rep: DescribeTopicsResponse) => void): Promise<DescribeTopicsResponse>;
    /**
     * 本接口用于创建cos导入任务
     */
    CreateCosRecharge(req: CreateCosRechargeRequest, cb?: (error: string, rep: CreateCosRechargeResponse) => void): Promise<CreateCosRechargeResponse>;
    /**
     * 该接口已废弃，如需修改分区数量，请使用ModifyTopic接口。
     */
    MergePartition(req: MergePartitionRequest, cb?: (error: string, rep: MergePartitionResponse) => void): Promise<MergePartitionResponse>;
    /**
     * 本接口用于删除定时SQL分析任务
     */
    DeleteScheduledSql(req: DeleteScheduledSqlRequest, cb?: (error: string, rep: DeleteScheduledSqlResponse) => void): Promise<DeleteScheduledSqlResponse>;
    /**
     * 本接口仅创建下载任务，任务返回的下载地址，请用户调用DescribeExports查看任务列表。其中有下载地址CosPath参数。参考文档https://cloud.tencent.com/document/product/614/56449
     */
    CreateExport(req: CreateExportRequest, cb?: (error: string, rep: CreateExportResponse) => void): Promise<CreateExportResponse>;
    /**
     * 关闭Kafka协议消费
     */
    CloseKafkaConsumer(req: CloseKafkaConsumerRequest, cb?: (error: string, rep: CloseKafkaConsumerResponse) => void): Promise<CloseKafkaConsumerResponse>;
    /**
     * 本接口用于修改索引配置，该接口除受默认接口请求频率限制外，针对单个日志主题，并发数不能超过1，即同一时间同一个日志主题只能有一个正在执行的索引配置修改操作。
     */
    ModifyIndex(req: ModifyIndexRequest, cb?: (error: string, rep: ModifyIndexResponse) => void): Promise<ModifyIndexResponse>;
    /**
     * 本接口用于修改Kafka数据订阅任务
     */
    ModifyKafkaRecharge(req: ModifyKafkaRechargeRequest, cb?: (error: string, rep: ModifyKafkaRechargeResponse) => void): Promise<ModifyKafkaRechargeResponse>;
    /**
     * 该接口用于创建告警屏蔽规则。
     */
    CreateAlarmShield(req: CreateAlarmShieldRequest, cb?: (error: string, rep: CreateAlarmShieldResponse) => void): Promise<CreateAlarmShieldResponse>;
    /**
     * 新建投递到COS的任务，【！！！注意】使用此接口，需要检查是否配置了投递COS的角色和权限。如果没有配置，请参考文档投递权限查看和配置https://cloud.tencent.com/document/product/614/71623。
     */
    CreateShipper(req: CreateShipperRequest, cb?: (error: string, rep: CreateShipperResponse) => void): Promise<CreateShipperResponse>;
    /**
     * 该接口用于创建通知内容。
     */
    CreateNoticeContent(req: CreateNoticeContentRequest, cb?: (error: string, rep: CreateNoticeContentResponse) => void): Promise<CreateNoticeContentResponse>;
    /**
     * 内部云产品接入使用相关接口
     */
    ModifyCloudProductLogTask(req: ModifyCloudProductLogTaskRequest, cb?: (error: string, rep: ModifyCloudProductLogTaskResponse) => void): Promise<ModifyCloudProductLogTaskResponse>;
    /**
     * 本接口用于删除投递配置
     */
    DeleteConsumer(req: DeleteConsumerRequest, cb?: (error: string, rep: DeleteConsumerResponse) => void): Promise<DeleteConsumerResponse>;
    /**
     * 删除机器组
     */
    DeleteMachineGroup(req: DeleteMachineGroupRequest, cb?: (error: string, rep: DeleteMachineGroupResponse) => void): Promise<DeleteMachineGroupResponse>;
    /**
     * 本接口用于获取Kafka数据订阅任务
     */
    DescribeKafkaRecharges(req: DescribeKafkaRechargesRequest, cb?: (error: string, rep: DescribeKafkaRechargesResponse) => void): Promise<DescribeKafkaRechargesResponse>;
    /**
     * 本接口用于获取告警策略列表。
     */
    DescribeAlarms(req: DescribeAlarmsRequest, cb?: (error: string, rep: DescribeAlarmsResponse) => void): Promise<DescribeAlarmsResponse>;
    /**
     * 本接口用于获取cos导入配置
     */
    DescribeCosRecharges(req: DescribeCosRechargesRequest, cb?: (error: string, rep: DescribeCosRechargesResponse) => void): Promise<DescribeCosRechargesResponse>;
    /**
     * 应用采集配置到指定机器组
     */
    ApplyConfigToMachineGroup(req: ApplyConfigToMachineGroupRequest, cb?: (error: string, rep: ApplyConfigToMachineGroupResponse) => void): Promise<ApplyConfigToMachineGroupResponse>;
    /**
     * 该接口用于删除告警屏蔽规则。
     */
    DeleteAlarmShield(req: DeleteAlarmShieldRequest, cb?: (error: string, rep: DeleteAlarmShieldResponse) => void): Promise<DeleteAlarmShieldResponse>;
    /**
     * 本接口用于构建日志数量直方图
     */
    DescribeLogHistogram(req: DescribeLogHistogramRequest, cb?: (error: string, rep: DescribeLogHistogramResponse) => void): Promise<DescribeLogHistogramResponse>;
    /**
     * 该接口用于修改通知渠道组
     */
    ModifyAlarmNotice(req: ModifyAlarmNoticeRequest, cb?: (error: string, rep: ModifyAlarmNoticeResponse) => void): Promise<ModifyAlarmNoticeResponse>;
    /**
     * 打开Kafka协议消费功能
     */
    OpenKafkaConsumer(req: OpenKafkaConsumerRequest, cb?: (error: string, rep: OpenKafkaConsumerResponse) => void): Promise<OpenKafkaConsumerResponse>;
    /**
     * 获取投递任务列表
     */
    DescribeShipperTasks(req: DescribeShipperTasksRequest, cb?: (error: string, rep: DescribeShipperTasksResponse) => void): Promise<DescribeShipperTasksResponse>;
    /**
     * 此接口用于修改仪表盘订阅
     */
    ModifyDashboardSubscribe(req: ModifyDashboardSubscribeRequest, cb?: (error: string, rep: ModifyDashboardSubscribeResponse) => void): Promise<ModifyDashboardSubscribeResponse>;
    /**
     * 本接口用于删除日志主题的索引配置，删除索引配置后将无法检索和查询采集到的日志。
     */
    DeleteIndex(req: DeleteIndexRequest, cb?: (error: string, rep: DeleteIndexResponse) => void): Promise<DeleteIndexResponse>;
    /**
     * 获取Kafka协议消费信息
     */
    DescribeKafkaConsumer(req: DescribeKafkaConsumerRequest, cb?: (error: string, rep: DescribeKafkaConsumerResponse) => void): Promise<DescribeKafkaConsumerResponse>;
    /**
     * 本接口用于预览Kafka数据订阅任务客户日志信息
     */
    PreviewKafkaRecharge(req: PreviewKafkaRechargeRequest, cb?: (error: string, rep: PreviewKafkaRechargeResponse) => void): Promise<PreviewKafkaRechargeResponse>;
    /**
     * 本接口用于修改特殊采集配置任务，特殊采集配置应用于自建K8S环境的采集Agent
     */
    ModifyConfigExtra(req: ModifyConfigExtraRequest, cb?: (error: string, rep: ModifyConfigExtraResponse) => void): Promise<ModifyConfigExtraResponse>;
    /**
     * 该接口用于修改告警屏蔽规则。
     */
    ModifyAlarmShield(req: ModifyAlarmShieldRequest, cb?: (error: string, rep: ModifyAlarmShieldResponse) => void): Promise<ModifyAlarmShieldResponse>;
    /**
     * 内部云产品接入使用相关接口
     */
    CreateCloudProductLogTask(req: CreateCloudProductLogTaskRequest, cb?: (error: string, rep: CreateCloudProductLogTaskResponse) => void): Promise<CreateCloudProductLogTaskResponse>;
    /**
     * 本接口用于创建特殊采集配置任务，特殊采集配置应用于自建K8S环境的采集Agent
     */
    CreateConfigExtra(req: CreateConfigExtraRequest, cb?: (error: string, rep: CreateConfigExtraResponse) => void): Promise<CreateConfigExtraResponse>;
    /**
     * 获取告警屏蔽配置规则
     */
    DescribeAlarmShields(req: DescribeAlarmShieldsRequest, cb?: (error: string, rep: DescribeAlarmShieldsResponse) => void): Promise<DescribeAlarmShieldsResponse>;
    /**
     * 本接口用于修改定时SQL分析任务
     */
    ModifyScheduledSql(req: ModifyScheduledSqlRequest, cb?: (error: string, rep: ModifyScheduledSqlResponse) => void): Promise<ModifyScheduledSqlResponse>;
    /**
     * 创建机器组
     */
    CreateMachineGroup(req: CreateMachineGroupRequest, cb?: (error: string, rep: CreateMachineGroupResponse) => void): Promise<CreateMachineGroupResponse>;
    /**
     * 用于删除机器组信息
     */
    DeleteMachineGroupInfo(req: DeleteMachineGroupInfoRequest, cb?: (error: string, rep: DeleteMachineGroupInfoResponse) => void): Promise<DeleteMachineGroupInfoResponse>;
    /**
     * 批量查询控制台分享列表
     */
    DescribeConsoleSharingList(req?: DescribeConsoleSharingListRequest, cb?: (error: string, rep: DescribeConsoleSharingListResponse) => void): Promise<DescribeConsoleSharingListResponse>;
    /**
     * 创建控制台分享
     */
    CreateConsoleSharing(req: CreateConsoleSharingRequest, cb?: (error: string, rep: CreateConsoleSharingResponse) => void): Promise<CreateConsoleSharingResponse>;
    /**
     * 本接口用于创建定时SQL分析任务
     */
    CreateScheduledSql(req: CreateScheduledSqlRequest, cb?: (error: string, rep: CreateScheduledSqlResponse) => void): Promise<CreateScheduledSqlResponse>;
    /**
     * 本接口用于获取日志集信息列表。
     */
    DescribeLogsets(req: DescribeLogsetsRequest, cb?: (error: string, rep: DescribeLogsetsResponse) => void): Promise<DescribeLogsetsResponse>;
    /**
     * 此接口用于创建仪表盘订阅
     */
    CreateDashboardSubscribe(req: CreateDashboardSubscribeRequest, cb?: (error: string, rep: CreateDashboardSubscribeResponse) => void): Promise<CreateDashboardSubscribeResponse>;
    /**
     * 该接口用于修改通知内容配置
     */
    ModifyNoticeContent(req: ModifyNoticeContentRequest, cb?: (error: string, rep: ModifyNoticeContentResponse) => void): Promise<ModifyNoticeContentResponse>;
    /**
     * 本接口用于预览cos导入信息
     */
    SearchCosRechargeInfo(req: SearchCosRechargeInfoRequest, cb?: (error: string, rep: SearchCosRechargeInfoResponse) => void): Promise<SearchCosRechargeInfoResponse>;
    /**
     * 本接口用于获取索引配置信息
     */
    DescribeIndex(req: DescribeIndexRequest, cb?: (error: string, rep: DescribeIndexResponse) => void): Promise<DescribeIndexResponse>;
    /**
     * 该接口用于创建通知渠道组，提供两种配置模式，二选一：
1，简易模式，提供最基本的通知渠道功能。需填写如下参数：
- Type
- NoticeReceivers
- WebCallbacks

2，高级模式，在简易模式基础上，支持设定规则，为不同类型的告警分别设定通知渠道，并支持告警升级功能。需填写如下参数：
- NoticeRules
     */
    CreateAlarmNotice(req: CreateAlarmNoticeRequest, cb?: (error: string, rep: CreateAlarmNoticeResponse) => void): Promise<CreateAlarmNoticeResponse>;
    /**
     * 此接口用于删除仪表盘订阅
     */
    DeleteDashboardSubscribe(req: DeleteDashboardSubscribeRequest, cb?: (error: string, rep: DeleteDashboardSubscribeResponse) => void): Promise<DeleteDashboardSubscribeResponse>;
    /**
     * 本接口用于创建数据加工任务。
     */
    CreateDataTransform(req: CreateDataTransformRequest, cb?: (error: string, rep: CreateDataTransformResponse) => void): Promise<CreateDataTransformResponse>;
    /**
     * 用于添加机器组信息
     */
    AddMachineGroupInfo(req: AddMachineGroupInfoRequest, cb?: (error: string, rep: AddMachineGroupInfoResponse) => void): Promise<AddMachineGroupInfoResponse>;
    /**
     * 该接口用于删除通知内容配置
     */
    DeleteNoticeContent(req: DeleteNoticeContentRequest, cb?: (error: string, rep: DeleteNoticeContentResponse) => void): Promise<DeleteNoticeContentResponse>;
    /**
     * 本接口用于获取数据加工任务列表基本信息
     */
    DescribeDataTransformInfo(req: DescribeDataTransformInfoRequest, cb?: (error: string, rep: DescribeDataTransformInfoResponse) => void): Promise<DescribeDataTransformInfoResponse>;
    /**
     * 该接口用于获取通知渠道组列表
     */
    DescribeAlarmNotices(req: DescribeAlarmNoticesRequest, cb?: (error: string, rep: DescribeAlarmNoticesResponse) => void): Promise<DescribeAlarmNoticesResponse>;
    /**
     * 该接口已废弃，如需获取分区数量，请使用DescribeTopics接口。
     */
    DescribePartitions(req: DescribePartitionsRequest, cb?: (error: string, rep: DescribePartitionsResponse) => void): Promise<DescribePartitionsResponse>;
    /**
     * 本接口用于删除特殊采集规则配置，特殊采集配置应用于自建K8S环境的采集Agent
     */
    DeleteConfigExtra(req: DeleteConfigExtraRequest, cb?: (error: string, rep: DeleteConfigExtraResponse) => void): Promise<DeleteConfigExtraResponse>;
    /**
     * 本接口用于数据加工DSL函数的语法校验。
     */
    CheckFunction(req: CheckFunctionRequest, cb?: (error: string, rep: CheckFunctionResponse) => void): Promise<CheckFunctionResponse>;
    /**
     * 本接口用于检索分析日志，使用该接口时请注意如下事项：
1. 该接口除受默认接口请求频率限制外，针对单个日志主题，查询并发数不能超过15。
2. 检索语法建议使用日志服务专用检索语法CQL，请使用SyntaxRule参数，将值设置为1，控制台默认也使用该语法规则。
3. API返回数据包最大49MB，建议启用 gzip 压缩（HTTP Request Header Accept-Encoding:gzip）。
     */
    SearchLog(req: SearchLogRequest, cb?: (error: string, rep: SearchLogResponse) => void): Promise<SearchLogResponse>;
    /**
     * 删除投递COS任务
     */
    DeleteShipper(req: DeleteShipperRequest, cb?: (error: string, rep: DeleteShipperResponse) => void): Promise<DeleteShipperResponse>;
    /**
     * 该接口用于删除告警渠道回调配置。
     */
    DeleteWebCallback(req: DeleteWebCallbackRequest, cb?: (error: string, rep: DeleteWebCallbackResponse) => void): Promise<DeleteWebCallbackResponse>;
    /**
     * 查询指定时间范围内指标的变化趋势
     */
    QueryRangeMetric(req: QueryRangeMetricRequest, cb?: (error: string, rep: QueryRangeMetricResponse) => void): Promise<QueryRangeMetricResponse>;
    /**
     * 获取采集规则配置所绑定的机器组
     */
    DescribeConfigMachineGroups(req: DescribeConfigMachineGroupsRequest, cb?: (error: string, rep: DescribeConfigMachineGroupsResponse) => void): Promise<DescribeConfigMachineGroupsResponse>;
    /**
     * 本接口用于删除日志下载任务
     */
    DeleteExport(req: DeleteExportRequest, cb?: (error: string, rep: DeleteExportResponse) => void): Promise<DeleteExportResponse>;
    /**
     * 该接口已废弃，如需修改分区数量，请使用ModifyTopic接口。
     */
    SplitPartition(req: SplitPartitionRequest, cb?: (error: string, rep: SplitPartitionResponse) => void): Promise<SplitPartitionResponse>;
    /**
     * 删除控制台分享
     */
    DeleteConsoleSharing(req: DeleteConsoleSharingRequest, cb?: (error: string, rep: DeleteConsoleSharingResponse) => void): Promise<DeleteConsoleSharingResponse>;
    /**
     * 获取机器组信息列表
     */
    DescribeMachineGroups(req: DescribeMachineGroupsRequest, cb?: (error: string, rep: DescribeMachineGroupsResponse) => void): Promise<DescribeMachineGroupsResponse>;
    /**
     * 本接口用于创建投递CKafka任务
     */
    CreateConsumer(req: CreateConsumerRequest, cb?: (error: string, rep: CreateConsumerResponse) => void): Promise<CreateConsumerResponse>;
    /**
     * 本接口用于修改日志主题。
     */
    ModifyTopic(req: ModifyTopicRequest, cb?: (error: string, rep: ModifyTopicResponse) => void): Promise<ModifyTopicResponse>;
    /**
     * 本接口用于获取仪表盘订阅列表，支持分页
     */
    DescribeDashboardSubscribes(req: DescribeDashboardSubscribesRequest, cb?: (error: string, rep: DescribeDashboardSubscribesResponse) => void): Promise<DescribeDashboardSubscribesResponse>;
    /**
     * 该接口用于修改告警渠道回调配置。
     */
    ModifyWebCallback(req: ModifyWebCallbackRequest, cb?: (error: string, rep: ModifyWebCallbackResponse) => void): Promise<ModifyWebCallbackResponse>;
    /**
     * 修改机器组
     */
    ModifyMachineGroup(req: ModifyMachineGroupRequest, cb?: (error: string, rep: ModifyMachineGroupResponse) => void): Promise<ModifyMachineGroupResponse>;
    /**
     * 本接口用于获取定时SQL分析任务列表
     */
    DescribeScheduledSqlInfo(req: DescribeScheduledSqlInfoRequest, cb?: (error: string, rep: DescribeScheduledSqlInfoResponse) => void): Promise<DescribeScheduledSqlInfoResponse>;
    /**
     * 删除采集规则配置
     */
    DeleteConfig(req: DeleteConfigRequest, cb?: (error: string, rep: DeleteConfigResponse) => void): Promise<DeleteConfigResponse>;
    /**
     * 本接口用于获取特殊采集配置，特殊采集配置应用于自建K8S环境的采集Agent
     */
    DescribeConfigExtras(req: DescribeConfigExtrasRequest, cb?: (error: string, rep: DescribeConfigExtrasResponse) => void): Promise<DescribeConfigExtrasResponse>;
    /**
     * 此接口用于预览仪表盘订阅
     */
    SearchDashboardSubscribe(req: SearchDashboardSubscribeRequest, cb?: (error: string, rep: SearchDashboardSubscribeResponse) => void): Promise<SearchDashboardSubscribeResponse>;
    /**
     * 本接口用于校验Kafka服务集群是否可以正常访问
     */
    CheckRechargeKafkaServer(req: CheckRechargeKafkaServerRequest, cb?: (error: string, rep: CheckRechargeKafkaServerResponse) => void): Promise<CheckRechargeKafkaServerResponse>;
    /**
     * 本接口用于修改告警策略。需要至少修改一项有效内容。
     */
    ModifyAlarm(req: ModifyAlarmRequest, cb?: (error: string, rep: ModifyAlarmResponse) => void): Promise<ModifyAlarmResponse>;
    /**
     * 获取投递到COS的任务配置信息
     */
    DescribeShippers(req: DescribeShippersRequest, cb?: (error: string, rep: DescribeShippersResponse) => void): Promise<DescribeShippersResponse>;
    /**
     * 修改控制台分享，目前仅允许修改有效期
     */
    ModifyConsoleSharing(req: ModifyConsoleSharingRequest, cb?: (error: string, rep: ModifyConsoleSharingResponse) => void): Promise<ModifyConsoleSharingResponse>;
    /**
     * 本接口用于获取仪表盘
     */
    DescribeDashboards(req: DescribeDashboardsRequest, cb?: (error: string, rep: DescribeDashboardsResponse) => void): Promise<DescribeDashboardsResponse>;
    /**
     * 本接口用于修改cos导入任务
     */
    ModifyCosRecharge(req: ModifyCosRechargeRequest, cb?: (error: string, rep: ModifyCosRechargeResponse) => void): Promise<ModifyCosRechargeResponse>;
    /**
     * 修改采集规则配置
     */
    ModifyConfig(req: ModifyConfigRequest, cb?: (error: string, rep: ModifyConfigResponse) => void): Promise<ModifyConfigResponse>;
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
    UploadLog(req: UploadLogRequest, cb?: (error: string, rep: UploadLogResponse) => void): Promise<UploadLogResponse>;
    /**
     * 本接口用于删除日志主题。
     */
    DeleteTopic(req: DeleteTopicRequest, cb?: (error: string, rep: DeleteTopicResponse) => void): Promise<DeleteTopicResponse>;
    /**
     * 本接口用于修改日志集信息
     */
    ModifyLogset(req: ModifyLogsetRequest, cb?: (error: string, rep: ModifyLogsetResponse) => void): Promise<ModifyLogsetResponse>;
    /**
     * 本接口用于修改投递Ckafka任务
     */
    ModifyConsumer(req: ModifyConsumerRequest, cb?: (error: string, rep: ModifyConsumerResponse) => void): Promise<ModifyConsumerResponse>;
    /**
     * 本接口用于修改数据加工任务
     */
    ModifyDataTransform(req: ModifyDataTransformRequest, cb?: (error: string, rep: ModifyDataTransformResponse) => void): Promise<ModifyDataTransformResponse>;
    /**
     * 本接口用于删除告警策略。
     */
    DeleteAlarm(req: DeleteAlarmRequest, cb?: (error: string, rep: DeleteAlarmResponse) => void): Promise<DeleteAlarmResponse>;
    /**
     * 本接口用于搜索日志上下文附近的内容，详情参考[上下文检索](https://cloud.tencent.com/document/product/614/53248)。
API返回数据包最大49MB，建议启用 gzip 压缩（HTTP Request Header Accept-Encoding:gzip）。
     */
    DescribeLogContext(req: DescribeLogContextRequest, cb?: (error: string, rep: DescribeLogContextResponse) => void): Promise<DescribeLogContextResponse>;
    /**
     * 本接口用于获取投递配置
     */
    DescribeConsumer(req: DescribeConsumerRequest, cb?: (error: string, rep: DescribeConsumerResponse) => void): Promise<DescribeConsumerResponse>;
    /**
     * 获取通知内容列表
     */
    DescribeNoticeContents(req: DescribeNoticeContentsRequest, cb?: (error: string, rep: DescribeNoticeContentsResponse) => void): Promise<DescribeNoticeContentsResponse>;
    /**
     * 获取指定机器组下的机器状态
     */
    DescribeMachines(req: DescribeMachinesRequest, cb?: (error: string, rep: DescribeMachinesResponse) => void): Promise<DescribeMachinesResponse>;
    /**
     * 重试失败的投递任务
     */
    RetryShipperTask(req: RetryShipperTaskRequest, cb?: (error: string, rep: RetryShipperTaskResponse) => void): Promise<RetryShipperTaskResponse>;
    /**
     * 本接口用于创建告警策略。
     */
    CreateAlarm(req: CreateAlarmRequest, cb?: (error: string, rep: CreateAlarmResponse) => void): Promise<CreateAlarmResponse>;
    /**
     * 获取告警渠道回调配置列表。
     */
    DescribeWebCallbacks(req: DescribeWebCallbacksRequest, cb?: (error: string, rep: DescribeWebCallbacksResponse) => void): Promise<DescribeWebCallbacksResponse>;
}
