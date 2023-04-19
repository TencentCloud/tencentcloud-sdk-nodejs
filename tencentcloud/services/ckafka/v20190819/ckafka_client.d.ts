import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DeleteAclRequest, CreateInstancePostResponse, BatchCreateAclRequest, DescribeDatahubTaskResponse, DeleteUserRequest, CreateConnectResourceResponse, DescribeTopicAttributesRequest, DescribeDatahubGroupOffsetsResponse, AuthorizeTokenResponse, DescribeDatahubTaskRequest, FetchLatestDatahubMessageListResponse, DescribeAclRuleResponse, CancelAuthorizationTokenRequest, CancelAuthorizationTokenResponse, CreateRouteRequest, DeleteTopicRequest, DescribeDatahubTasksRequest, DescribeInstancesResponse, BatchModifyTopicAttributesResponse, ModifyDatahubTaskResponse, FetchMessageListByOffsetRequest, ModifyInstancePreRequest, CreateAclRuleRequest, ModifyAclRuleRequest, DescribeInstancesDetailResponse, DescribeAppInfoRequest, CheckCdcClusterResponse, CreateTokenResponse, DescribeTopicSubscribeGroupResponse, DeleteAclRuleRequest, DescribeConnectResourcesRequest, DescribeRouteRequest, ModifyAclRuleResponse, ModifyConnectResourceRequest, ModifyInstanceAttributesResponse, DescribeACLResponse, BatchModifyGroupOffsetsResponse, CreateDatahubTopicRequest, DescribeTopicResponse, ModifyGroupOffsetsRequest, DescribeDatahubTopicResponse, DescribeCkafkaZoneRequest, FetchDatahubMessageByOffsetResponse, CreateConsumerResponse, CreateCdcClusterResponse, DescribeGroupResponse, ModifyPasswordResponse, FetchDatahubMessageByOffsetRequest, AuthorizeTokenRequest, RenewCkafkaInstanceResponse, DescribeACLRequest, CreateUserResponse, CreatePartitionResponse, DeleteGroupRequest, DescribeConsumerGroupRequest, DeleteUserResponse, DescribeConnectResourceRequest, DescribeTopicProduceConnectionRequest, CreateAclRequest, DescribeTopicSyncReplicaResponse, CreateConnectResourceRequest, DeleteRouteResponse, CreateTopicIpWhiteListResponse, ModifyGroupOffsetsResponse, CreateAclResponse, CreateTopicRequest, DeleteAclResponse, DeleteRouteTriggerTimeRequest, DescribeTopicSubscribeGroupRequest, DeleteInstancePreResponse, DescribeInstanceAttributesRequest, DeleteConnectResourceResponse, DescribeRegionRequest, DeleteAclRuleResponse, DescribeGroupInfoRequest, ModifyTopicAttributesResponse, DeleteRouteTriggerTimeResponse, DescribeUserResponse, DescribeGroupInfoResponse, DescribeTopicRequest, CreateTokenRequest, CreatePartitionRequest, DescribeAppInfoResponse, DescribeInstanceAttributesResponse, DeleteInstancePreRequest, DescribeDatahubTopicRequest, ModifyPasswordRequest, ModifyInstanceAttributesRequest, DeleteDatahubTopicRequest, DescribeRegionResponse, CreateTopicResponse, DescribeTopicProduceConnectionResponse, FetchLatestDatahubMessageListRequest, CreateAclRuleResponse, DescribeTopicAttributesResponse, DeleteDatahubTopicResponse, DescribeConsumerGroupResponse, FetchMessageListByOffsetResponse, DeleteDatahubTaskRequest, DescribeGroupOffsetsRequest, DeleteConnectResourceRequest, DeleteDatahubTaskResponse, DescribeInstancesRequest, CreateInstancePostRequest, DescribeDatahubTopicsResponse, DescribeConnectResourceResponse, DescribeGroupRequest, BatchCreateAclResponse, ModifyInstancePreResponse, CreateUserRequest, DeleteRouteRequest, CreateCdcClusterRequest, DeleteTopicIpWhiteListResponse, CreateInstancePreResponse, CheckCdcClusterRequest, FetchMessageByOffsetRequest, DescribeInstancesDetailRequest, FetchMessageByOffsetResponse, CreateConsumerRequest, InquireCkafkaPriceResponse, CreateDatahubTopicResponse, InquireCkafkaPriceRequest, DescribeDatahubTasksResponse, SendMessageResponse, DescribeDatahubGroupOffsetsRequest, DescribeCkafkaZoneResponse, BatchModifyGroupOffsetsRequest, CreateRouteResponse, DescribeRouteResponse, ModifyDatahubTopicResponse, ModifyConnectResourceResponse, DescribeDatahubTopicsRequest, CreateDatahubTaskRequest, DescribeTopicDetailRequest, DescribeGroupOffsetsResponse, SendMessageRequest, BatchModifyTopicAttributesRequest, DeleteGroupResponse, CreateTopicIpWhiteListRequest, RenewCkafkaInstanceRequest, DescribeAclRuleRequest, ModifyDatahubTopicRequest, ModifyTopicAttributesRequest, CreateInstancePreRequest, DeleteTopicIpWhiteListRequest, DeleteTopicResponse, CreateDatahubTaskResponse, DescribeUserRequest, DescribeTopicSyncReplicaRequest, ModifyDatahubTaskRequest, DescribeTopicDetailResponse, DescribeConnectResourcesResponse } from "./ckafka_models";
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
     * 创建按量计费实例
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
     * 修改Datahub主题属性
     */
    ModifyDatahubTopic(req: ModifyDatahubTopicRequest, cb?: (error: string, rep: ModifyDatahubTopicResponse) => void): Promise<ModifyDatahubTopicResponse>;
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
     * 添加实例路由
     */
    CreateRoute(req: CreateRouteRequest, cb?: (error: string, rep: CreateRouteResponse) => void): Promise<CreateRouteResponse>;
    /**
     * 删除Datahub任务
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
     * 根据位点查询消息列表
     */
    FetchMessageListByOffset(req: FetchMessageListByOffsetRequest, cb?: (error: string, rep: FetchMessageListByOffsetResponse) => void): Promise<FetchMessageListByOffsetResponse>;
    /**
     * 创建Datahub主题
     */
    CreateDatahubTopic(req: CreateDatahubTopicRequest, cb?: (error: string, rep: CreateDatahubTopicResponse) => void): Promise<CreateDatahubTopicResponse>;
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
     * 创建实例(预付费包年包月)
     */
    CreateInstancePre(req: CreateInstancePreRequest, cb?: (error: string, rep: CreateInstancePreResponse) => void): Promise<CreateInstancePreResponse>;
    /**
     * 根据指定offset位置的消息
     */
    FetchMessageByOffset(req: FetchMessageByOffsetRequest, cb?: (error: string, rep: FetchMessageByOffsetResponse) => void): Promise<FetchMessageByOffsetResponse>;
    /**
     * 删除Datahub主题
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
     * 修改AC策略，目前只支持预设规则的是否应用到新增topic这一项的修改
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
     * 获取主题属性

     */
    DescribeTopicAttributes(req: DescribeTopicAttributesRequest, cb?: (error: string, rep: DescribeTopicAttributesResponse) => void): Promise<DescribeTopicAttributesResponse>;
    /**
     * 删除预付费实例
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
     * 获取Topic 副本详情信息
     */
    DescribeTopicSyncReplica(req: DescribeTopicSyncReplicaRequest, cb?: (error: string, rep: DescribeTopicSyncReplicaResponse) => void): Promise<DescribeTopicSyncReplicaResponse>;
    /**
     * 获取消费分组offset
     */
    DescribeGroupOffsets(req: DescribeGroupOffsetsRequest, cb?: (error: string, rep: DescribeGroupOffsetsResponse) => void): Promise<DescribeGroupOffsetsResponse>;
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
     * 获取Datahub主题属性
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
