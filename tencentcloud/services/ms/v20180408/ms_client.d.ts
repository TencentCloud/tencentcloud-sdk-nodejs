import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateShieldPlanInstanceResponse, CreateResourceInstancesRequest, DescribeShieldInstancesResponse, DescribeShieldResultRequest, CreateShieldInstanceRequest, CreateCosSecKeyInstanceRequest, DescribeUserBaseInfoInstanceResponse, CreateShieldPlanInstanceRequest, CreateBindInstanceRequest, CreateShieldInstanceResponse, DeleteShieldInstancesRequest, DescribeShieldInstancesRequest, DescribeUrlDetectionResultRequest, DescribeShieldPlanInstanceResponse, DescribeApkDetectionResultRequest, DescribeResourceInstancesRequest, DescribeShieldPlanInstanceRequest, DescribeUserBaseInfoInstanceRequest, CreateResourceInstancesResponse, DeleteShieldInstancesResponse, DescribeUrlDetectionResultResponse, DescribeApkDetectionResultResponse, DescribeResourceInstancesResponse, CreateCosSecKeyInstanceResponse, DescribeShieldResultResponse, CreateBindInstanceResponse } from "./ms_models";
/**
 * ms client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 通过唯一标识获取加固的结果。（注意：根据国家互联网用户实名制相关要求，使用该产品前，需先完成实名认证。）
     */
    DescribeShieldResult(req: DescribeShieldResultRequest, cb?: (error: string, rep: DescribeShieldResultResponse) => void): Promise<DescribeShieldResultResponse>;
    /**
     * 用户可以使用该接口自建资源，只支持白名单用户
     */
    CreateResourceInstances(req: CreateResourceInstancesRequest, cb?: (error: string, rep: CreateResourceInstancesResponse) => void): Promise<CreateResourceInstancesResponse>;
    /**
     * 将应用和资源进行绑定。（注意：根据国家互联网用户实名制相关要求，使用该产品前，需先完成实名认证。）
     */
    CreateBindInstance(req: CreateBindInstanceRequest, cb?: (error: string, rep: CreateBindInstanceResponse) => void): Promise<CreateBindInstanceResponse>;
    /**
     * 获取云COS文件存储临时密钥，密钥仅限于临时上传文件，有访问限制和时效性，请保管好临时密钥。
     */
    CreateCosSecKeyInstance(req: CreateCosSecKeyInstanceRequest, cb?: (error: string, rep: CreateCosSecKeyInstanceResponse) => void): Promise<CreateCosSecKeyInstanceResponse>;
    /**
     * 获取某个用户的所有资源信息。（注意：根据国家互联网用户实名制相关要求，使用该产品前，需先完成实名认证。）
     */
    DescribeResourceInstances(req: DescribeResourceInstancesRequest, cb?: (error: string, rep: DescribeResourceInstancesResponse) => void): Promise<DescribeResourceInstancesResponse>;
    /**
     * 查询加固策略。（注意：根据国家互联网用户实名制相关要求，使用该产品前，需先完成实名认证。）
     */
    DescribeShieldPlanInstance(req: DescribeShieldPlanInstanceRequest, cb?: (error: string, rep: DescribeShieldPlanInstanceResponse) => void): Promise<DescribeShieldPlanInstanceResponse>;
    /**
     * 用户通过该接口提交应用进行应用加固，加固后需通过DescribeShieldResult接口查询加固结果。（注意：根据国家互联网用户实名制相关要求，使用该产品前，需先完成实名认证。）
     */
    CreateShieldInstance(req: CreateShieldInstanceRequest, cb?: (error: string, rep: CreateShieldInstanceResponse) => void): Promise<CreateShieldInstanceResponse>;
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
     * 对资源进行策略新增。（注意：根据国家互联网用户实名制相关要求，使用该产品前，需先完成实名认证。）
     */
    CreateShieldPlanInstance(req: CreateShieldPlanInstanceRequest, cb?: (error: string, rep: CreateShieldPlanInstanceResponse) => void): Promise<CreateShieldPlanInstanceResponse>;
    /**
     * 获取用户基础信息
     */
    DescribeUserBaseInfoInstance(req?: DescribeUserBaseInfoInstanceRequest, cb?: (error: string, rep: DescribeUserBaseInfoInstanceResponse) => void): Promise<DescribeUserBaseInfoInstanceResponse>;
    /**
     * 该接口采用同步模式请求腾讯APK云检测服务，即时返回检测数据，需要用户用轮询的方式调用本接口来进行样本送检并获取检测结果(每隔60s发送一次请求，传相同的参数，重试30次)，一般情况下0.5h内会出检测结果，最长时间是3h。当Result为ok并且ResultList数组非空有值时，代表检测完毕，若长时间获取不到检测结果，请联系客服。
     */
    DescribeApkDetectionResult(req: DescribeApkDetectionResultRequest, cb?: (error: string, rep: DescribeApkDetectionResultResponse) => void): Promise<DescribeApkDetectionResultResponse>;
    /**
     * 删除一个或者多个app加固信息。（注意：根据国家互联网用户实名制相关要求，使用该产品前，需先完成实名认证。）
     */
    DeleteShieldInstances(req: DeleteShieldInstancesRequest, cb?: (error: string, rep: DeleteShieldInstancesResponse) => void): Promise<DeleteShieldInstancesResponse>;
}
