import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { UpdateAuthorizationPolicyPriorityResponse, UpdateAuthorizationPolicyPriorityRequest, CreateJWTAuthenticatorResponse, DeleteAuthorizationPolicyRequest, ModifyJWKSAuthenticatorResponse, RegisterDeviceCertificateResponse, ModifyJWTAuthenticatorResponse, DescribeAuthorizationPoliciesRequest, DescribeTopicListRequest, DescribeInstanceListRequest, ModifyAuthorizationPolicyResponse, CreateAuthorizationPolicyRequest, ActivateDeviceCertificateRequest, DescribeInstanceResponse, DescribeAuthenticatorResponse, DeleteDeviceCertificateRequest, CreateTopicResponse, ModifyJWTAuthenticatorRequest, DescribeDeviceCertificateResponse, RevokedDeviceCertificateRequest, CreateAuthorizationPolicyResponse, DeleteDeviceCertificateResponse, CreateJWTAuthenticatorRequest, DeleteTopicRequest, CreateJWKSAuthenticatorRequest, ModifyTopicResponse, DescribeTopicResponse, DescribeDeviceCertificatesRequest, CreateJWKSAuthenticatorResponse, DeleteAuthenticatorRequest, DescribeAuthorizationPoliciesResponse, RegisterDeviceCertificateRequest, CreateTopicRequest, DeleteAuthorizationPolicyResponse, DescribeDeviceCertificatesResponse, ModifyJWKSAuthenticatorRequest, ModifyTopicRequest, DescribeTopicListResponse, DescribeAuthenticatorRequest, RevokedDeviceCertificateResponse, DeleteTopicResponse, DeactivateDeviceCertificateResponse, DescribeDeviceCertificateRequest, DeactivateDeviceCertificateRequest, DescribeInstanceRequest, DeleteAuthenticatorResponse, ModifyAuthorizationPolicyRequest, ActivateDeviceCertificateResponse, DescribeInstanceListResponse, DescribeTopicRequest } from "./mqtt_models";
/**
 * mqtt client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 修改主题属性
     */
    ModifyTopic(req: ModifyTopicRequest, cb?: (error: string, rep: ModifyTopicResponse) => void): Promise<ModifyTopicResponse>;
    /**
     * 失效Ca证书
     */
    DeactivateDeviceCertificate(req: DeactivateDeviceCertificateRequest, cb?: (error: string, rep: DeactivateDeviceCertificateResponse) => void): Promise<DeactivateDeviceCertificateResponse>;
    /**
     * 查询mqtt主题详情
     */
    DescribeTopic(req: DescribeTopicRequest, cb?: (error: string, rep: DescribeTopicResponse) => void): Promise<DescribeTopicResponse>;
    /**
     * 创建一个jwks的认证
     */
    CreateJWTAuthenticator(req: CreateJWTAuthenticatorRequest, cb?: (error: string, rep: CreateJWTAuthenticatorResponse) => void): Promise<CreateJWTAuthenticatorResponse>;
    /**
     * 删除设备证书
     */
    DeleteDeviceCertificate(req: DeleteDeviceCertificateRequest, cb?: (error: string, rep: DeleteDeviceCertificateResponse) => void): Promise<DeleteDeviceCertificateResponse>;
    /**
     * 修改MQTT JWKS 认证器
     */
    ModifyJWTAuthenticator(req: ModifyJWTAuthenticatorRequest, cb?: (error: string, rep: ModifyJWTAuthenticatorResponse) => void): Promise<ModifyJWTAuthenticatorResponse>;
    /**
     * 修改MQTT JWKS 认证器
     */
    ModifyJWKSAuthenticator(req: ModifyJWKSAuthenticatorRequest, cb?: (error: string, rep: ModifyJWKSAuthenticatorResponse) => void): Promise<ModifyJWKSAuthenticatorResponse>;
    /**
     * 分页查询设备证书
     */
    DescribeDeviceCertificates(req: DescribeDeviceCertificatesRequest, cb?: (error: string, rep: DescribeDeviceCertificatesResponse) => void): Promise<DescribeDeviceCertificatesResponse>;
    /**
     * 注册设备证书
     */
    RegisterDeviceCertificate(req: RegisterDeviceCertificateRequest, cb?: (error: string, rep: RegisterDeviceCertificateResponse) => void): Promise<RegisterDeviceCertificateResponse>;
    /**
     * 创建主题
     */
    CreateTopic(req: CreateTopicRequest, cb?: (error: string, rep: CreateTopicResponse) => void): Promise<CreateTopicResponse>;
    /**
     * 生效设备证书
     */
    ActivateDeviceCertificate(req: ActivateDeviceCertificateRequest, cb?: (error: string, rep: ActivateDeviceCertificateResponse) => void): Promise<ActivateDeviceCertificateResponse>;
    /**
     * 查询授权规则
     */
    DescribeAuthorizationPolicies(req: DescribeAuthorizationPoliciesRequest, cb?: (error: string, rep: DescribeAuthorizationPoliciesResponse) => void): Promise<DescribeAuthorizationPoliciesResponse>;
    /**
     * 查询设备证书详情接口
     */
    DescribeDeviceCertificate(req: DescribeDeviceCertificateRequest, cb?: (error: string, rep: DescribeDeviceCertificateResponse) => void): Promise<DescribeDeviceCertificateResponse>;
    /**
     * 获取实例列表，Filters参数使用说明如下：
1. InstanceName, 名称模糊查询
2. InstanceId，实例ID查询
3. InstanceStatus，实例状态查询，支持多选

当使用TagFilters查询时，Filters参数失效。
     */
    DescribeInstanceList(req: DescribeInstanceListRequest, cb?: (error: string, rep: DescribeInstanceListResponse) => void): Promise<DescribeInstanceListResponse>;
    /**
     * 吊销设备证书
     */
    RevokedDeviceCertificate(req: RevokedDeviceCertificateRequest, cb?: (error: string, rep: RevokedDeviceCertificateResponse) => void): Promise<RevokedDeviceCertificateResponse>;
    /**
     * 查询实例信息
     */
    DescribeInstance(req: DescribeInstanceRequest, cb?: (error: string, rep: DescribeInstanceResponse) => void): Promise<DescribeInstanceResponse>;
    /**
     * 删除MQTT主题
     */
    DeleteTopic(req: DeleteTopicRequest, cb?: (error: string, rep: DeleteTopicResponse) => void): Promise<DeleteTopicResponse>;
    /**
     * 创建一个jwks的认证
     */
    CreateJWKSAuthenticator(req: CreateJWKSAuthenticatorRequest, cb?: (error: string, rep: CreateJWKSAuthenticatorResponse) => void): Promise<CreateJWKSAuthenticatorResponse>;
    /**
     * 修改策略规则
     */
    ModifyAuthorizationPolicy(req: ModifyAuthorizationPolicyRequest, cb?: (error: string, rep: ModifyAuthorizationPolicyResponse) => void): Promise<ModifyAuthorizationPolicyResponse>;
    /**
     * 删除策略规则
     */
    DeleteAuthorizationPolicy(req: DeleteAuthorizationPolicyRequest, cb?: (error: string, rep: DeleteAuthorizationPolicyResponse) => void): Promise<DeleteAuthorizationPolicyResponse>;
    /**
     * 根据认证器类型删除一个MQTT认证器
     */
    DeleteAuthenticator(req: DeleteAuthenticatorRequest, cb?: (error: string, rep: DeleteAuthenticatorResponse) => void): Promise<DeleteAuthenticatorResponse>;
    /**
     * 查询MQTT认证器
     */
    DescribeAuthenticator(req: DescribeAuthenticatorRequest, cb?: (error: string, rep: DescribeAuthenticatorResponse) => void): Promise<DescribeAuthenticatorResponse>;
    /**
     * 修改策略规则优先级
     */
    UpdateAuthorizationPolicyPriority(req: UpdateAuthorizationPolicyPriorityRequest, cb?: (error: string, rep: UpdateAuthorizationPolicyPriorityResponse) => void): Promise<UpdateAuthorizationPolicyPriorityResponse>;
    /**
     * 获取主题列表，Filter参数使用说明如下：

1. TopicName，主题名称模糊搜索
2. TopicType，主题类型查询，支持多选，可选值：Normal,Order,Transaction,DelayScheduled
     */
    DescribeTopicList(req: DescribeTopicListRequest, cb?: (error: string, rep: DescribeTopicListResponse) => void): Promise<DescribeTopicListResponse>;
    /**
     * 创建MQTT实例的性能测试任务
     */
    CreateAuthorizationPolicy(req: CreateAuthorizationPolicyRequest, cb?: (error: string, rep: CreateAuthorizationPolicyResponse) => void): Promise<CreateAuthorizationPolicyResponse>;
}
