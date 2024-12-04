import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeACLRequest, DescribeTopicSyncReplicaResponse, DescribeDatahubGroupOffsetsResponse, AuthorizeTokenResponse, DescribeAclRuleResponse, CancelAuthorizationTokenRequest, DeleteTopicRequest, FetchMessageListByOffsetRequest, CreateAclRuleRequest, DescribeInstancesDetailResponse, DescribeTaskStatusRequest, DescribeAclRuleRequest, ModifyAclRuleResponse, FetchMessageListByOffsetResponse, DeleteRouteTriggerTimeRequest, CreatePostPaidInstanceRequest, AuthorizeTokenRequest, RenewCkafkaInstanceResponse, CreatePartitionResponse, DescribeTopicResponse, CreateTopicIpWhiteListResponse, CreateTopicRequest, DeleteAclResponse, ModifyInstancePreRequest, DeleteConnectResourceResponse, DescribeTopicRequest, ModifyAclRuleRequest, ModifyRoutineMaintenanceTaskRequest, DescribeInstanceAttributesResponse, DescribeRegionResponse, CreateTopicResponse, DescribeConsumerGroupResponse, DeleteDatahubTaskResponse, DescribeDatahubTopicsResponse, BatchCreateAclResponse, DeleteRouteRequest, BatchModifyTopicAttributesResponse, DescribeTopicDetailRequest, DescribeGroupOffsetsResponse, DeleteGroupResponse, CreateTokenResponse, DescribeGroupOffsetsRequest, DescribeTopicDetailResponse, DeleteAclRequest, CreateInstancePostResponse, DescribeDatahubTaskResponse, FetchLatestDatahubMessageListRequest, CreateConnectResourceResponse, DescribeDatahubTasksResponse, FetchMessageByOffsetResponse, DescribeACLResponse, InquireCkafkaPriceRequest, DescribeCkafkaZoneRequest, FetchMessageListByTimestampRequest, DeleteConnectResourceRequest, DescribeTopicAttributesResponse, CreateConsumerResponse, DescribeGroupResponse, DescribeDatahubTopicRequest, DeleteUserResponse, CreateAclRequest, CreateConnectResourceRequest, ModifyInstanceAttributesResponse, DescribeRegionRequest, DescribeGroupInfoResponse, DescribeAppInfoResponse, ModifyInstanceAttributesRequest, CreateAclRuleResponse, FetchDatahubMessageByOffsetResponse, DeleteDatahubTaskRequest, ModifyConnectResourceResponse, DescribeGroupRequest, InstanceScalingDownRequest, CreateCdcClusterRequest, DeleteTopicIpWhiteListResponse, DescribeInstancesDetailRequest, CreateConsumerRequest, CreateDatahubTopicResponse, FetchDatahubMessageByOffsetRequest, DescribeDatahubGroupOffsetsRequest, BatchModifyGroupOffsetsRequest, SendMessageRequest, BatchModifyTopicAttributesRequest, DescribePrometheusRequest, FetchMessageListByTimestampResponse, DeleteInstancePostResponse, ModifyDatahubTopicRequest, ModifyDatahubTaskResponse, DescribeConnectResourcesResponse, DeleteUserRequest, DescribeTopicAttributesRequest, DescribeDatahubTaskRequest, FetchLatestDatahubMessageListResponse, DescribeInstancesResponse, DescribeTopicSubscribeGroupResponse, DeleteAclRuleRequest, ModifyConnectResourceRequest, CreateTokenRequest, DescribeTaskStatusResponse, CreateUserResponse, DeleteInstancePostRequest, DescribeTopicProduceConnectionRequest, DescribeAppInfoRequest, DescribeTopicSubscribeGroupRequest, DeleteAclRuleResponse, DescribeGroupInfoRequest, DescribeDatahubTopicsRequest, DescribeUserResponse, DeleteInstancePreRequest, DescribeInstancesRequest, CreateInstancePostRequest, DescribeCkafkaZoneResponse, ModifyInstancePreResponse, CreateUserRequest, CreateInstancePreResponse, CheckCdcClusterRequest, InstanceScalingDownResponse, DescribeRouteRequest, CreatePostPaidInstanceResponse, DescribeRouteResponse, ModifyDatahubTopicResponse, CreateTopicIpWhiteListRequest, ModifyTopicAttributesRequest, CreateInstancePreRequest, DeleteTopicResponse, BatchCreateAclRequest, DescribeConnectResourcesRequest, CreatePartitionRequest, DescribeInstanceAttributesRequest, CancelAuthorizationTokenResponse, CreateRouteRequest, DescribePrometheusResponse, CheckCdcClusterResponse, DescribeDatahubTasksRequest, DescribeTopicFlowRankingRequest, BatchModifyGroupOffsetsResponse, CreateDatahubTopicRequest, DescribeDatahubTopicResponse, CreateCdcClusterResponse, DeleteGroupRequest, DescribeConnectResourceRequest, DeleteRouteResponse, CreatePrometheusResponse, ModifyGroupOffsetsResponse, CreateAclResponse, DeleteInstancePreResponse, DeleteRouteTriggerTimeResponse, DescribeUserRequest, FetchMessageByOffsetRequest, ModifyPasswordRequest, DeleteDatahubTopicRequest, ModifyTopicAttributesResponse, DescribeConsumerGroupRequest, DescribeTopicProduceConnectionResponse, DeleteDatahubTopicResponse, SendMessageResponse, ModifyRoutineMaintenanceTaskResponse, DescribeConnectResourceResponse, ModifyPasswordResponse, InquireCkafkaPriceResponse, CreateRouteResponse, DescribeTopicFlowRankingResponse, CreateDatahubTaskRequest, ModifyGroupOffsetsRequest, RenewCkafkaInstanceRequest, DeleteTopicIpWhiteListRequest, CreateDatahubTaskResponse, DescribeTopicSyncReplicaRequest, ModifyDatahubTaskRequest, CreatePrometheusRequest } from "./ckafka_models";
/**
 * ckafka client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 续费Ckafka实例, 目前只支持国内站包年包月实例续费
     */
    RenewCkafkaInstance(req: RenewCkafkaInstanceRequest, cb?: (error: string, rep: RenewCkafkaInstanceResponse) => void): Promise<RenewCkafkaInstanceResponse>;
    /**
     * 查看路由信息
     */
    DescribeRoute(req: DescribeRouteRequest, cb?: (error: string, rep: DescribeRouteResponse) => void): Promise<DescribeRouteResponse>;
    /**
     * 获取消费分组信息
     */
    DescribeGroupInfo(req: DescribeGroupInfoRequest, cb?: (error: string, rep: DescribeGroupInfoResponse) => void): Promise<DescribeGroupInfoResponse>;
    /**
     * 创建消费者组
     */
    CreateConsumer(req: CreateConsumerRequest, cb?: (error: string, rep: CreateConsumerResponse) => void): Promise<CreateConsumerResponse>;
    /**
     * 查询消费分组信息
     */
    DescribeConsumerGroup(req: DescribeConsumerGroupRequest, cb?: (error: string, rep: DescribeConsumerGroupResponse) => void): Promise<DescribeConsumerGroupResponse>;
    /**
     * 查询Datahub连接源
     */
    DescribeConnectResource(req: DescribeConnectResourceRequest, cb?: (error: string, rep: DescribeConnectResourceResponse) => void): Promise<DescribeConnectResourceResponse>;
    /**
     * 由于出参需要更新，当前接口将会在未来版本中废弃，建议用户迁移使用 CreatePostPaidInstance 接口。创建按量计费实例。通常用于 SDK 或云 API 控制台调用接口，创建后付费 CKafka 实例。调用接口与在 CKafka 控制台购买按量付费实例效果相同。
     */
    CreateInstancePost(req: CreateInstancePostRequest, cb?: (error: string, rep: CreateInstancePostResponse) => void): Promise<CreateInstancePostResponse>;
    /**
     * 查询ACL规则列表
     */
    DescribeAclRule(req: DescribeAclRuleRequest, cb?: (error: string, rep: DescribeAclRuleResponse) => void): Promise<DescribeAclRuleResponse>;
    /**
     * 查询订阅某主题消息分组信息
     */
    DescribeTopicSubscribeGroup(req: DescribeTopicSubscribeGroupRequest, cb?: (error: string, rep: DescribeTopicSubscribeGroupResponse) => void): Promise<DescribeTopicSubscribeGroupResponse>;
    /**
     * 预付费实例变配接口，调整磁盘，带宽
     */
    ModifyInstancePre(req: ModifyInstancePreRequest, cb?: (error: string, rep: ModifyInstancePreResponse) => void): Promise<ModifyInstancePreResponse>;
    /**
     * 获取主题列表详情（仅控制台调用）
     */
    DescribeTopicDetail(req: DescribeTopicDetailRequest, cb?: (error: string, rep: DescribeTopicDetailResponse) => void): Promise<DescribeTopicDetailResponse>;
    /**
     * 批量设置主题属性
     */
    BatchModifyTopicAttributes(req: BatchModifyTopicAttributesRequest, cb?: (error: string, rep: BatchModifyTopicAttributesResponse) => void): Promise<BatchModifyTopicAttributesResponse>;
    /**
     * 删除路由
     */
    DeleteRoute(req: DeleteRouteRequest, cb?: (error: string, rep: DeleteRouteResponse) => void): Promise<DeleteRouteResponse>;
    /**
     * 通过HTTP接入层发送消息
     */
    SendMessage(req: SendMessageRequest, cb?: (error: string, rep: SendMessageResponse) => void): Promise<SendMessageResponse>;
    /**
     * 修改DIP主题属性
     */
    ModifyDatahubTopic(req: ModifyDatahubTopicRequest, cb?: (error: string, rep: ModifyDatahubTopicResponse) => void): Promise<ModifyDatahubTopicResponse>;
    /**
     * 设置自动化运维属性
     */
    ModifyRoutineMaintenanceTask(req: ModifyRoutineMaintenanceTaskRequest, cb?: (error: string, rep: ModifyRoutineMaintenanceTaskResponse) => void): Promise<ModifyRoutineMaintenanceTaskResponse>;
    /**
     * 创建主题ip白名单
     */
    CreateTopicIpWhiteList(req: CreateTopicIpWhiteListRequest, cb?: (error: string, rep: CreateTopicIpWhiteListResponse) => void): Promise<CreateTopicIpWhiteListResponse>;
    /**
     * 删除Datahub连接源
     */
    DeleteConnectResource(req: DeleteConnectResourceRequest, cb?: (error: string, rep: DeleteConnectResourceResponse) => void): Promise<DeleteConnectResourceResponse>;
    /**
     * 枚举消费分组(精简版)
     */
    DescribeGroup(req: DescribeGroupRequest, cb?: (error: string, rep: DescribeGroupResponse) => void): Promise<DescribeGroupResponse>;
    /**
     * 根据位点查询消息列表
     */
    FetchMessageListByOffset(req: FetchMessageListByOffsetRequest, cb?: (error: string, rep: FetchMessageListByOffsetResponse) => void): Promise<FetchMessageListByOffsetResponse>;
    /**
     * 修改Datahub任务
     */
    ModifyDatahubTask(req: ModifyDatahubTaskRequest, cb?: (error: string, rep: ModifyDatahubTaskResponse) => void): Promise<ModifyDatahubTaskResponse>;
    /**
     * 查询Datahub任务列表
     */
    DescribeDatahubTasks(req: DescribeDatahubTasksRequest, cb?: (error: string, rep: DescribeDatahubTasksResponse) => void): Promise<DescribeDatahubTasksResponse>;
    /**
     * 本接口（DescribeInstance）用于在用户账户下获取消息队列 CKafka 实例列表
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 获取Topic 副本详情信息
     */
    DescribeTopicSyncReplica(req: DescribeTopicSyncReplicaRequest, cb?: (error: string, rep: DescribeTopicSyncReplicaResponse) => void): Promise<DescribeTopicSyncReplicaResponse>;
    /**
     * 添加实例路由
     */
    CreateRoute(req: CreateRouteRequest, cb?: (error: string, rep: CreateRouteResponse) => void): Promise<CreateRouteResponse>;
    /**
     * 删除Dip任务
     */
    DeleteDatahubTask(req: DeleteDatahubTaskRequest, cb?: (error: string, rep: DeleteDatahubTaskResponse) => void): Promise<DeleteDatahubTaskResponse>;
    /**
     * 删除消费组
     */
    DeleteGroup(req: DeleteGroupRequest, cb?: (error: string, rep: DeleteGroupResponse) => void): Promise<DeleteGroupResponse>;
    /**
     * 查询用户信息
     */
    DescribeUser(req: DescribeUserRequest, cb?: (error: string, rep: DescribeUserResponse) => void): Promise<DescribeUserResponse>;
    /**
     * 获取实例Prometheus信息
     */
    DescribePrometheus(req: DescribePrometheusRequest, cb?: (error: string, rep: DescribePrometheusResponse) => void): Promise<DescribePrometheusResponse>;
    /**
     * 创建DIP主题
     */
    CreateDatahubTopic(req: CreateDatahubTopicRequest, cb?: (error: string, rep: CreateDatahubTopicResponse) => void): Promise<CreateDatahubTopicResponse>;
    /**
     * 删除后付费实例
     */
    DeleteInstancePost(req: DeleteInstancePostRequest, cb?: (error: string, rep: DeleteInstancePostResponse) => void): Promise<DeleteInstancePostResponse>;
    /**
     * 枚举ACL
     */
    DescribeACL(req: DescribeACLRequest, cb?: (error: string, rep: DescribeACLResponse) => void): Promise<DescribeACLResponse>;
    /**
     * 查询DIP主题列表
     */
    DescribeDatahubTopics(req: DescribeDatahubTopicsRequest, cb?: (error: string, rep: DescribeDatahubTopicsResponse) => void): Promise<DescribeDatahubTopicsResponse>;
    /**
     * 取消授权token
     */
    CancelAuthorizationToken(req: CancelAuthorizationTokenRequest, cb?: (error: string, rep: CancelAuthorizationTokenResponse) => void): Promise<CancelAuthorizationTokenResponse>;
    /**
     * 创建实例(预付费包年包月),  仅支持创建专业版实例
     */
    CreateInstancePre(req: CreateInstancePreRequest, cb?: (error: string, rep: CreateInstancePreResponse) => void): Promise<CreateInstancePreResponse>;
    /**
     * 根据指定offset位置的消息
     */
    FetchMessageByOffset(req: FetchMessageByOffsetRequest, cb?: (error: string, rep: FetchMessageByOffsetResponse) => void): Promise<FetchMessageByOffsetResponse>;
    /**
     * 删除DIP主题
     */
    DeleteDatahubTopic(req: DeleteDatahubTopicRequest, cb?: (error: string, rep: DeleteDatahubTopicResponse) => void): Promise<DeleteDatahubTopicResponse>;
    /**
     * 删除主题IP白名单
     */
    DeleteTopicIpWhiteList(req: DeleteTopicIpWhiteListRequest, cb?: (error: string, rep: DeleteTopicIpWhiteListResponse) => void): Promise<DeleteTopicIpWhiteListResponse>;
    /**
     * 枚举地域,只支持广州地域
     */
    DescribeRegion(req: DescribeRegionRequest, cb?: (error: string, rep: DescribeRegionResponse) => void): Promise<DescribeRegionResponse>;
    /**
     * 设置Groups 消费分组offset
     */
    ModifyGroupOffsets(req: ModifyGroupOffsetsRequest, cb?: (error: string, rep: ModifyGroupOffsetsResponse) => void): Promise<ModifyGroupOffsetsResponse>;
    /**
     * 添加 ACL 策略
     */
    CreateAcl(req: CreateAclRequest, cb?: (error: string, rep: CreateAclResponse) => void): Promise<CreateAclResponse>;
    /**
     * 创建ckafka主题
     */
    CreateTopic(req: CreateTopicRequest, cb?: (error: string, rep: CreateTopicResponse) => void): Promise<CreateTopicResponse>;
    /**
     * 创建Datahub连接源
     */
    CreateConnectResource(req: CreateConnectResourceRequest, cb?: (error: string, rep: CreateConnectResourceResponse) => void): Promise<CreateConnectResourceResponse>;
    /**
     * 查询Datahub任务信息
     */
    DescribeDatahubTask(req: DescribeDatahubTaskRequest, cb?: (error: string, rep: DescribeDatahubTaskResponse) => void): Promise<DescribeDatahubTaskResponse>;
    /**
     * 用于查询cdc-ckafka任务状态
     */
    CheckCdcCluster(req: CheckCdcClusterRequest, cb?: (error: string, rep: CheckCdcClusterResponse) => void): Promise<CheckCdcClusterResponse>;
    /**
     * 获取Topic流量排行，消费者流量排行
     */
    DescribeTopicFlowRanking(req: DescribeTopicFlowRankingRequest, cb?: (error: string, rep: DescribeTopicFlowRankingResponse) => void): Promise<DescribeTopicFlowRankingResponse>;
    /**
     * 修改ACL策略，目前只支持预设规则的是否应用到新增topic这一项的修改
     */
    ModifyAclRule(req: ModifyAclRuleRequest, cb?: (error: string, rep: ModifyAclRuleResponse) => void): Promise<ModifyAclRuleResponse>;
    /**
     * 本接口用于增加主题中的分区
     */
    CreatePartition(req: CreatePartitionRequest, cb?: (error: string, rep: CreatePartitionResponse) => void): Promise<CreatePartitionResponse>;
    /**
     * 查询最新消息列表
     */
    FetchLatestDatahubMessageList(req: FetchLatestDatahubMessageListRequest, cb?: (error: string, rep: FetchLatestDatahubMessageListResponse) => void): Promise<FetchLatestDatahubMessageListResponse>;
    /**
     * 查询任务状态
     */
    DescribeTaskStatus(req: DescribeTaskStatusRequest, cb?: (error: string, rep: DescribeTaskStatusResponse) => void): Promise<DescribeTaskStatusResponse>;
    /**
     * 删除用户
     */
    DeleteUser(req: DeleteUserRequest, cb?: (error: string, rep: DeleteUserResponse) => void): Promise<DeleteUserResponse>;
    /**
     * 编辑Datahub连接源
     */
    ModifyConnectResource(req: ModifyConnectResourceRequest, cb?: (error: string, rep: ModifyConnectResourceResponse) => void): Promise<ModifyConnectResourceResponse>;
    /**
     * 根据指定offset位置的消息
     */
    FetchDatahubMessageByOffset(req: FetchDatahubMessageByOffsetRequest, cb?: (error: string, rep: FetchDatahubMessageByOffsetResponse) => void): Promise<FetchDatahubMessageByOffsetResponse>;
    /**
     * 创建最高权限的token
     */
    CreateToken(req: CreateTokenRequest, cb?: (error: string, rep: CreateTokenResponse) => void): Promise<CreateTokenResponse>;
    /**
     * 获取Datahub消费分组offset
     */
    DescribeDatahubGroupOffsets(req: DescribeDatahubGroupOffsetsRequest, cb?: (error: string, rep: DescribeDatahubGroupOffsetsResponse) => void): Promise<DescribeDatahubGroupOffsetsResponse>;
    /**
     * 删除ACL
     */
    DeleteAcl(req: DeleteAclRequest, cb?: (error: string, rep: DeleteAclResponse) => void): Promise<DeleteAclResponse>;
    /**
     * 查询用户列表
     */
    DescribeAppInfo(req: DescribeAppInfoRequest, cb?: (error: string, rep: DescribeAppInfoResponse) => void): Promise<DescribeAppInfoResponse>;
    /**
     * 添加普罗米修斯监控1
     */
    CreatePrometheus(req: CreatePrometheusRequest, cb?: (error: string, rep: CreatePrometheusResponse) => void): Promise<CreatePrometheusResponse>;
    /**
     * 按量实例缩容
     */
    InstanceScalingDown(req: InstanceScalingDownRequest, cb?: (error: string, rep: InstanceScalingDownResponse) => void): Promise<InstanceScalingDownResponse>;
    /**
     * 获取主题属性
     */
    DescribeTopicAttributes(req: DescribeTopicAttributesRequest, cb?: (error: string, rep: DescribeTopicAttributesResponse) => void): Promise<DescribeTopicAttributesResponse>;
    /**
     * 删除预付费实例，该接口会对实例执行隔离并删除的动作，执行成功后实例会被直接删除销毁
     */
    DeleteInstancePre(req: DeleteInstancePreRequest, cb?: (error: string, rep: DeleteInstancePreResponse) => void): Promise<DeleteInstancePreResponse>;
    /**
     * 获取实例属性
     */
    DescribeInstanceAttributes(req: DescribeInstanceAttributesRequest, cb?: (error: string, rep: DescribeInstanceAttributesResponse) => void): Promise<DescribeInstanceAttributesResponse>;
    /**
     * 用户账户下获取实例列表详情
     */
    DescribeInstancesDetail(req: DescribeInstancesDetailRequest, cb?: (error: string, rep: DescribeInstancesDetailResponse) => void): Promise<DescribeInstancesDetailResponse>;
    /**
     * 批量添加ACL策略
     */
    BatchCreateAcl(req: BatchCreateAclRequest, cb?: (error: string, rep: BatchCreateAclResponse) => void): Promise<BatchCreateAclResponse>;
    /**
     * 创建DIP转储任务
     */
    CreateDatahubTask(req: CreateDatahubTaskRequest, cb?: (error: string, rep: CreateDatahubTaskResponse) => void): Promise<CreateDatahubTaskResponse>;
    /**
     * 删除ACL规则
     */
    DeleteAclRule(req: DeleteAclRuleRequest, cb?: (error: string, rep: DeleteAclRuleResponse) => void): Promise<DeleteAclRuleResponse>;
    /**
     * 修改删除路由延迟触发时间
     */
    DeleteRouteTriggerTime(req: DeleteRouteTriggerTimeRequest, cb?: (error: string, rep: DeleteRouteTriggerTimeResponse) => void): Promise<DeleteRouteTriggerTimeResponse>;
    /**
     * 批量修改消费组offset
     */
    BatchModifyGroupOffsets(req: BatchModifyGroupOffsetsRequest, cb?: (error: string, rep: BatchModifyGroupOffsetsResponse) => void): Promise<BatchModifyGroupOffsetsResponse>;
    /**
     * 当前接口用来替代 CreateInstancePost 接口。创建按量计费实例。通常用于 SDK 或云 API 控制台调用接口，创建后付费 CKafka 实例。调用接口与在 CKafka 控制台购买按量付费实例效果相同。
     */
    CreatePostPaidInstance(req: CreatePostPaidInstanceRequest, cb?: (error: string, rep: CreatePostPaidInstanceResponse) => void): Promise<CreatePostPaidInstanceResponse>;
    /**
     * 获取消费分组offset
     */
    DescribeGroupOffsets(req: DescribeGroupOffsetsRequest, cb?: (error: string, rep: DescribeGroupOffsetsResponse) => void): Promise<DescribeGroupOffsetsResponse>;
    /**
     * 根据时间戳查询消息列表
     */
    FetchMessageListByTimestamp(req: FetchMessageListByTimestampRequest, cb?: (error: string, rep: FetchMessageListByTimestampResponse) => void): Promise<FetchMessageListByTimestampResponse>;
    /**
     * 给实例授权token
     */
    AuthorizeToken(req: AuthorizeTokenRequest, cb?: (error: string, rep: AuthorizeTokenResponse) => void): Promise<AuthorizeTokenResponse>;
    /**
     * 设置实例属性
     */
    ModifyInstanceAttributes(req: ModifyInstanceAttributesRequest, cb?: (error: string, rep: ModifyInstanceAttributesResponse) => void): Promise<ModifyInstanceAttributesResponse>;
    /**
     * 查询topic 生产端连接信息
     */
    DescribeTopicProduceConnection(req: DescribeTopicProduceConnectionRequest, cb?: (error: string, rep: DescribeTopicProduceConnectionResponse) => void): Promise<DescribeTopicProduceConnectionResponse>;
    /**
     * 接口请求域名：https://ckafka.tencentcloudapi.com
本接口（DescribeTopic）用于在用户获取消息队列 CKafka 实例的主题列表
     */
    DescribeTopic(req: DescribeTopicRequest, cb?: (error: string, rep: DescribeTopicResponse) => void): Promise<DescribeTopicResponse>;
    /**
     * 添加 ACL 规则
     */
    CreateAclRule(req: CreateAclRuleRequest, cb?: (error: string, rep: CreateAclRuleResponse) => void): Promise<CreateAclRuleResponse>;
    /**
     * 获取DIP主题属性
     */
    DescribeDatahubTopic(req: DescribeDatahubTopicRequest, cb?: (error: string, rep: DescribeDatahubTopicResponse) => void): Promise<DescribeDatahubTopicResponse>;
    /**
     * 用于查看ckafka的可用区列表
     */
    DescribeCkafkaZone(req: DescribeCkafkaZoneRequest, cb?: (error: string, rep: DescribeCkafkaZoneResponse) => void): Promise<DescribeCkafkaZoneResponse>;
    /**
     * 查询Datahub连接源列表
     */
    DescribeConnectResources(req: DescribeConnectResourcesRequest, cb?: (error: string, rep: DescribeConnectResourcesResponse) => void): Promise<DescribeConnectResourcesResponse>;
    /**
     * 用于cdc的专用ckafka集群
     */
    CreateCdcCluster(req: CreateCdcClusterRequest, cb?: (error: string, rep: CreateCdcClusterResponse) => void): Promise<CreateCdcClusterResponse>;
    /**
     * 添加用户
     */
    CreateUser(req: CreateUserRequest, cb?: (error: string, rep: CreateUserResponse) => void): Promise<CreateUserResponse>;
    /**
     * 删除ckafka主题
     */
    DeleteTopic(req: DeleteTopicRequest, cb?: (error: string, rep: DeleteTopicResponse) => void): Promise<DeleteTopicResponse>;
    /**
     * 修改密码
     */
    ModifyPassword(req: ModifyPasswordRequest, cb?: (error: string, rep: ModifyPasswordResponse) => void): Promise<ModifyPasswordResponse>;
    /**
     * Ckafka实例购买/续费询价
     */
    InquireCkafkaPrice(req: InquireCkafkaPriceRequest, cb?: (error: string, rep: InquireCkafkaPriceResponse) => void): Promise<InquireCkafkaPriceResponse>;
    /**
     * 本接口用于修改主题属性。
     */
    ModifyTopicAttributes(req: ModifyTopicAttributesRequest, cb?: (error: string, rep: ModifyTopicAttributesResponse) => void): Promise<ModifyTopicAttributesResponse>;
}
