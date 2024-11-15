import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateShieldPlanInstanceResponse, DescribeEncryptInstancesResponse, CreateResourceInstancesRequest, DescribeShieldInstancesResponse, UpdateClientStateRequest, DescribeShieldResultRequest, CancelEncryptTaskResponse, DescribeOrderInstancesResponse, CreateCosSecKeyInstanceRequest, DescribeUserBaseInfoInstanceResponse, UpdateLocalTaskResultResponse, CreateShieldPlanInstanceRequest, CreateEncryptInstanceResponse, DestroyResourceInstancesRequest, RequestLocalTaskResponse, UpdateLocalTaskResultRequest, CreateBindInstanceRequest, CreateShieldInstanceResponse, DeleteShieldInstancesRequest, DescribeUserBaseInfoInstanceRequest, DescribeShieldInstancesRequest, DescribeUrlDetectionResultRequest, DescribeShieldPlanInstanceResponse, DescribeEncryptPlanRequest, DescribeEncryptInstancesRequest, DescribeApkDetectionResultRequest, DeleteShieldInstancesResponse, DestroyResourceInstancesResponse, DescribeUrlDetectionResultResponse, CreateShieldInstanceRequest, DescribeShieldPlanInstanceRequest, DescribeEncryptPlanResponse, CreateResourceInstancesResponse, RequestLocalTaskRequest, DescribeOrderInstancesRequest, DescribeResourceInstancesRequest, CreateOrderInstanceRequest, DescribeApkDetectionResultResponse, DescribeResourceInstancesResponse, CreateOrderInstanceResponse, CancelEncryptTaskRequest, CreateCosSecKeyInstanceResponse, CreateEncryptInstanceRequest, DescribeShieldResultResponse, CreateBindInstanceResponse, UpdateClientStateResponse } from "./ms_models";
/**
 * ms client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * client任务请求
     */
    RequestLocalTask(req: RequestLocalTaskRequest, cb?: (error: string, rep: RequestLocalTaskResponse) => void): Promise<RequestLocalTaskResponse>;
    /**
     * 获取某个用户的所有资源信息。（注意：根据国家互联网用户实名制相关要求，使用该产品前，需先完成实名认证。）
     */
    DescribeResourceInstances(req: DescribeResourceInstancesRequest, cb?: (error: string, rep: DescribeResourceInstancesResponse) => void): Promise<DescribeResourceInstancesResponse>;
    /**
     * 查询加固策略。（注意：根据国家互联网用户实名制相关要求，使用该产品前，需先完成实名认证。）
     */
    DescribeShieldPlanInstance(req: DescribeShieldPlanInstanceRequest, cb?: (error: string, rep: DescribeShieldPlanInstanceResponse) => void): Promise<DescribeShieldPlanInstanceResponse>;
    /**
     * 本接口用于查看app列表。
可以通过指定任务唯一标识ItemId来查询指定app的详细信息，或通过设定过滤器来查询满足过滤条件的app的详细信息。 指定偏移(Offset)和限制(Limit)来选择结果中的一部分，默认返回满足条件的前20个app信息。（注意：根据国家互联网用户实名制相关要求，使用该产品前，需先完成实名认证。）
     */
    DescribeShieldInstances(req: DescribeShieldInstancesRequest, cb?: (error: string, rep: DescribeShieldInstancesResponse) => void): Promise<DescribeShieldInstancesResponse>;
    /**
     * 移动安全-网址检测服务
     */
    DescribeUrlDetectionResult(req: DescribeUrlDetectionResultRequest, cb?: (error: string, rep: DescribeUrlDetectionResultResponse) => void): Promise<DescribeUrlDetectionResultResponse>;
    /**
     * 该接口供渠道合作应用加固使用，接口调用有白名单用户限制，用于创建加固任务。
     */
    CreateEncryptInstance(req: CreateEncryptInstanceRequest, cb?: (error: string, rep: CreateEncryptInstanceResponse) => void): Promise<CreateEncryptInstanceResponse>;
    /**
     * 该接口供渠道合作应用加固使用，接口调用有白名单用户限制。入参中的条件过滤字段均为精准匹配。
     */
    DescribeEncryptPlan(req: DescribeEncryptPlanRequest, cb?: (error: string, rep: DescribeEncryptPlanResponse) => void): Promise<DescribeEncryptPlanResponse>;
    /**
     * 该接口供渠道合作应用加固使用，接口调用有白名单用户限制。 接口返回的结果为：创建订单后，订单审批状态信息，以及与订单关联的资源状态等信息，入参中的条件过滤字段均为精准匹配.
接口功能点：
1.支持多订单分页查询；
2.支持唯一订单号精准匹配查询；
3.支持唯一资源号精准匹配查询；
     */
    DescribeOrderInstances(req: DescribeOrderInstancesRequest, cb?: (error: string, rep: DescribeOrderInstancesResponse) => void): Promise<DescribeOrderInstancesResponse>;
    /**
     * 更新本地任务执行结果
     */
    UpdateLocalTaskResult(req: UpdateLocalTaskResultRequest, cb?: (error: string, rep: UpdateLocalTaskResultResponse) => void): Promise<UpdateLocalTaskResultResponse>;
    /**
     * 对资源进行策略新增。（注意：根据国家互联网用户实名制相关要求，使用该产品前，需先完成实名认证。）
     */
    CreateShieldPlanInstance(req: CreateShieldPlanInstanceRequest, cb?: (error: string, rep: CreateShieldPlanInstanceResponse) => void): Promise<CreateShieldPlanInstanceResponse>;
    /**
     * 不再使用

用户可以使用该接口自建资源，只支持白名单用户
     */
    CreateResourceInstances(req: CreateResourceInstancesRequest, cb?: (error: string, rep: CreateResourceInstancesResponse) => void): Promise<CreateResourceInstancesResponse>;
    /**
     * 将应用和资源进行绑定。（注意：根据国家互联网用户实名制相关要求，使用该产品前，需先完成实名认证。）
     */
    CreateBindInstance(req: CreateBindInstanceRequest, cb?: (error: string, rep: CreateBindInstanceResponse) => void): Promise<CreateBindInstanceResponse>;
    /**
     * 用户通过该接口提交应用进行应用加固，加固后需通过DescribeShieldResult接口查询加固结果。（注意：根据国家互联网用户实名制相关要求，使用该产品前，需先完成实名认证。）
     */
    CreateShieldInstance(req: CreateShieldInstanceRequest, cb?: (error: string, rep: CreateShieldInstanceResponse) => void): Promise<CreateShieldInstanceResponse>;
    /**
     * 删除一个或者多个app加固信息。（注意：根据国家互联网用户实名制相关要求，使用该产品前，需先完成实名认证。）
     */
    DeleteShieldInstances(req: DeleteShieldInstancesRequest, cb?: (error: string, rep: DeleteShieldInstancesResponse) => void): Promise<DeleteShieldInstancesResponse>;
    /**
     * 通过唯一标识获取加固的结果。（注意：根据国家互联网用户实名制相关要求，使用该产品前，需先完成实名认证。）
     */
    DescribeShieldResult(req: DescribeShieldResultRequest, cb?: (error: string, rep: DescribeShieldResultResponse) => void): Promise<DescribeShieldResultResponse>;
    /**
     * 更新client状态，需要白名单
     */
    UpdateClientState(req: UpdateClientStateRequest, cb?: (error: string, rep: UpdateClientStateResponse) => void): Promise<UpdateClientStateResponse>;
    /**
     * 渠道合作资源销毁
安卓应用加固-按年收费资源销毁，其他类型暂不支持
     */
    DestroyResourceInstances(req: DestroyResourceInstancesRequest, cb?: (error: string, rep: DestroyResourceInstancesResponse) => void): Promise<DestroyResourceInstancesResponse>;
    /**
     * 获取云COS文件存储临时密钥，密钥仅限于临时上传文件，有访问限制和时效性，请保管好临时密钥。
     */
    CreateCosSecKeyInstance(req: CreateCosSecKeyInstanceRequest, cb?: (error: string, rep: CreateCosSecKeyInstanceResponse) => void): Promise<CreateCosSecKeyInstanceResponse>;
    /**
     * 该接口供渠道合作应用加固使用，接口调用有白名单用户限制，取消渠道合作加固中的任务
     */
    CancelEncryptTask(req: CancelEncryptTaskRequest, cb?: (error: string, rep: CancelEncryptTaskResponse) => void): Promise<CancelEncryptTaskResponse>;
    /**
     * 获取用户基础信息
     */
    DescribeUserBaseInfoInstance(req?: DescribeUserBaseInfoInstanceRequest, cb?: (error: string, rep: DescribeUserBaseInfoInstanceResponse) => void): Promise<DescribeUserBaseInfoInstanceResponse>;
    /**
     * 该接口采用同步模式请求腾讯APK云检测服务，即时返回检测数据，需要用户用轮询的方式调用本接口来进行样本送检并获取检测结果(每隔60s发送一次请求，传相同的参数，重试30次)，一般情况下0.5h内会出检测结果，最长时间是3h。当Result为ok并且ResultList数组非空有值时，代表检测完毕，若长时间获取不到检测结果，请联系客服。
     */
    DescribeApkDetectionResult(req: DescribeApkDetectionResultRequest, cb?: (error: string, rep: DescribeApkDetectionResultResponse) => void): Promise<DescribeApkDetectionResultResponse>;
    /**
     * 该接口供渠道合作应用加固使用，接口调用有白名单用户限制，用于查询加固任务，入参中的条件过滤字段均为精准匹配。支持功能点: 1. 多任务分页查询  2.根据任务Id唯一值查询单记录
     */
    DescribeEncryptInstances(req: DescribeEncryptInstancesRequest, cb?: (error: string, rep: DescribeEncryptInstancesResponse) => void): Promise<DescribeEncryptInstancesResponse>;
    /**
     * 该接口供渠道合作应用加固使用，接口调用有白名单用户限制。
订单类型有：免费试用、按年收费、按次收费。
应用加固支持的平台类型有：android加固 、ios源码混淆 、sdk加固、applet小程序加固
     */
    CreateOrderInstance(req: CreateOrderInstanceRequest, cb?: (error: string, rep: CreateOrderInstanceResponse) => void): Promise<CreateOrderInstanceResponse>;
}
