import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { UpdateAuthorizationPolicyPriorityResponse, UpdateAuthorizationPolicyPriorityRequest, CreateJWTAuthenticatorResponse, DeleteAuthorizationPolicyRequest, ModifyJWKSAuthenticatorResponse, RegisterDeviceCertificateResponse, ModifyJWTAuthenticatorResponse, DescribeAuthorizationPoliciesRequest, DescribeTopicListRequest, DescribeInstanceListRequest, ModifyAuthorizationPolicyResponse, CreateAuthorizationPolicyRequest, DescribeInstanceResponse, DescribeAuthenticatorResponse, CreateTopicResponse, ModifyJWTAuthenticatorRequest, CreateAuthorizationPolicyResponse, CreateJWTAuthenticatorRequest, DeleteTopicRequest, CreateJWKSAuthenticatorRequest, ModifyTopicResponse, DescribeTopicResponse, CreateJWKSAuthenticatorResponse, DeleteAuthenticatorRequest, DescribeAuthorizationPoliciesResponse, RegisterDeviceCertificateRequest, CreateTopicRequest, DeleteAuthorizationPolicyResponse, ModifyJWKSAuthenticatorRequest, ModifyTopicRequest, DescribeTopicListResponse, DescribeAuthenticatorRequest, DeleteTopicResponse, ModifyAuthorizationPolicyRequest, DescribeInstanceRequest, DeleteAuthenticatorResponse, DescribeInstanceListResponse, DescribeTopicRequest } from "./mqtt_models";
/**
 * mqtt client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询实例信息
     */
    DescribeInstance(req: DescribeInstanceRequest, cb?: (error: string, rep: DescribeInstanceResponse) => void): Promise<DescribeInstanceResponse>;
    /**
     * 创建主题
     */
    CreateTopic(req: CreateTopicRequest, cb?: (error: string, rep: CreateTopicResponse) => void): Promise<CreateTopicResponse>;
    /**
     * 注册设备证书
     */
    RegisterDeviceCertificate(req: RegisterDeviceCertificateRequest, cb?: (error: string, rep: RegisterDeviceCertificateResponse) => void): Promise<RegisterDeviceCertificateResponse>;
    /**
     * 查询授权规则
     */
    DescribeAuthorizationPolicies(req: DescribeAuthorizationPoliciesRequest, cb?: (error: string, rep: DescribeAuthorizationPoliciesResponse) => void): Promise<DescribeAuthorizationPoliciesResponse>;
    /**
     * 修改主题属性
     */
    ModifyTopic(req: ModifyTopicRequest, cb?: (error: string, rep: ModifyTopicResponse) => void): Promise<ModifyTopicResponse>;
    /**
     * 修改策略规则
     */
    ModifyAuthorizationPolicy(req: ModifyAuthorizationPolicyRequest, cb?: (error: string, rep: ModifyAuthorizationPolicyResponse) => void): Promise<ModifyAuthorizationPolicyResponse>;
    /**
     * 获取实例列表，Filters参数使用说明如下：
1. InstanceName, 名称模糊查询
2. InstanceId，实例ID查询
3. InstanceType, 实例类型查询，支持多选
3. InstanceStatus，实例状态查询，支持多选

当使用TagFilters查询时，Filters参数失效。
     */
    DescribeInstanceList(req: DescribeInstanceListRequest, cb?: (error: string, rep: DescribeInstanceListResponse) => void): Promise<DescribeInstanceListResponse>;
    /**
     * 删除策略规则
     */
    DeleteAuthorizationPolicy(req: DeleteAuthorizationPolicyRequest, cb?: (error: string, rep: DeleteAuthorizationPolicyResponse) => void): Promise<DeleteAuthorizationPolicyResponse>;
    /**
     * 根据认证器类型删除一个MQTT认证器
     */
    DeleteAuthenticator(req: DeleteAuthenticatorRequest, cb?: (error: string, rep: DeleteAuthenticatorResponse) => void): Promise<DeleteAuthenticatorResponse>;
    /**
     * 查询mqtt主题详情
     */
    DescribeTopic(req: DescribeTopicRequest, cb?: (error: string, rep: DescribeTopicResponse) => void): Promise<DescribeTopicResponse>;
    /**
     * 查询MQTT认证器
     */
    DescribeAuthenticator(req: DescribeAuthenticatorRequest, cb?: (error: string, rep: DescribeAuthenticatorResponse) => void): Promise<DescribeAuthenticatorResponse>;
    /**
     * 创建一个jwks的认证
     */
    CreateJWTAuthenticator(req: CreateJWTAuthenticatorRequest, cb?: (error: string, rep: CreateJWTAuthenticatorResponse) => void): Promise<CreateJWTAuthenticatorResponse>;
    /**
     * 修改策略规则优先级
     */
    UpdateAuthorizationPolicyPriority(req: UpdateAuthorizationPolicyPriorityRequest, cb?: (error: string, rep: UpdateAuthorizationPolicyPriorityResponse) => void): Promise<UpdateAuthorizationPolicyPriorityResponse>;
    /**
     * 修改MQTT JWKS 认证器
     */
    ModifyJWTAuthenticator(req: ModifyJWTAuthenticatorRequest, cb?: (error: string, rep: ModifyJWTAuthenticatorResponse) => void): Promise<ModifyJWTAuthenticatorResponse>;
    /**
     * 获取主题列表，Filter参数使用说明如下：

1. TopicName，主题名称模糊搜索
2. TopicType，主题类型查询，支持多选，可选值：Normal,Order,Transaction,DelayScheduled
     */
    DescribeTopicList(req: DescribeTopicListRequest, cb?: (error: string, rep: DescribeTopicListResponse) => void): Promise<DescribeTopicListResponse>;
    /**
     * 删除MQTT主题
     */
    DeleteTopic(req: DeleteTopicRequest, cb?: (error: string, rep: DeleteTopicResponse) => void): Promise<DeleteTopicResponse>;
    /**
     * 创建MQTT实例的性能测试任务
     */
    CreateAuthorizationPolicy(req: CreateAuthorizationPolicyRequest, cb?: (error: string, rep: CreateAuthorizationPolicyResponse) => void): Promise<CreateAuthorizationPolicyResponse>;
    /**
     * 修改MQTT JWKS 认证器
     */
    ModifyJWKSAuthenticator(req: ModifyJWKSAuthenticatorRequest, cb?: (error: string, rep: ModifyJWKSAuthenticatorResponse) => void): Promise<ModifyJWKSAuthenticatorResponse>;
    /**
     * 创建一个jwks的认证
     */
    CreateJWKSAuthenticator(req: CreateJWKSAuthenticatorRequest, cb?: (error: string, rep: CreateJWKSAuthenticatorResponse) => void): Promise<CreateJWKSAuthenticatorResponse>;
}
