import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateRegisterCodeResponse, PreviewReplacedCommandContentResponse, CreateCommandResponse, DisableInvokerRequest, DisableRegisterCodesRequest, DescribeRegisterInstancesRequest, DeleteRegisterCodesRequest, RunCommandRequest, InvokeCommandRequest, DescribeInvocationTasksRequest, DeleteRegisterInstanceResponse, DescribeRegionsRequest, DescribeInvokerRecordsResponse, ModifyInvokerRequest, DeleteCommandsRequest, EnableInvokerResponse, DescribeQuotasRequest, EnableInvokerRequest, DescribeScenesResponse, DescribeRegisterInstancesResponse, ModifyCommandResponse, DescribeInvokersResponse, CancelInvocationResponse, DeleteRegisterInstanceRequest, DeleteCommandResponse, DisableInvokerResponse, DescribeCommandsResponse, CreateRegisterCodeRequest, CreateInvokerRequest, DescribeAutomationAgentStatusRequest, InvokeCommandResponse, ModifyCommandRequest, DescribeInvokersRequest, DescribeCommandsRequest, DeleteInvokerResponse, DescribeInvocationsRequest, DescribeInvocationsResponse, DescribeInvocationTasksResponse, PreviewReplacedCommandContentRequest, ModifyInvokerResponse, ModifyRegisterInstanceResponse, DescribeRegisterCodesResponse, DescribeAutomationAgentStatusResponse, CreateInvokerResponse, CancelInvocationRequest, DescribeRegisterCodesRequest, DeleteCommandRequest, DeleteCommandsResponse, DescribeScenesRequest, DeleteRegisterCodesResponse, DescribeInvokerRecordsRequest, DeleteInvokerRequest, ModifyRegisterInstanceRequest, RunCommandResponse, DisableRegisterCodesResponse, DescribeQuotasResponse, DescribeRegionsResponse, CreateCommandRequest } from "./tat_models";
/**
 * tat client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 取消一台或多台CVM实例执行的命令

* 如果命令还未下发到agent，任务状态处于处于PENDING、DELIVERING、DELIVER_DELAYED，取消后任务状态是CANCELLED
* 如果命令已下发到agent，任务状态处于RUNNING， 取消后任务状态是TERMINATED
     */
    CancelInvocation(req: CancelInvocationRequest, cb?: (error: string, rep: CancelInvocationResponse) => void): Promise<CancelInvocationResponse>;
    /**
     * 接口用于修改托管实例信息。
     */
    ModifyRegisterInstance(req: ModifyRegisterInstanceRequest, cb?: (error: string, rep: ModifyRegisterInstanceResponse) => void): Promise<ModifyRegisterInstanceResponse>;
    /**
     * 此接口用于创建执行器。
     */
    CreateInvoker(req: CreateInvokerRequest, cb?: (error: string, rep: CreateInvokerResponse) => void): Promise<CreateInvokerResponse>;
    /**
     * 此接口用于删除命令。
如果命令与执行器关联，则无法被删除。
     */
    DeleteCommand(req: DeleteCommandRequest, cb?: (error: string, rep: DeleteCommandResponse) => void): Promise<DeleteCommandResponse>;
    /**
     * 接口用于创建注册码。
     */
    CreateRegisterCode(req: CreateRegisterCodeRequest, cb?: (error: string, rep: CreateRegisterCodeResponse) => void): Promise<CreateRegisterCodeResponse>;
    /**
     * 此接口用于启用执行器。
     */
    EnableInvoker(req: EnableInvokerRequest, cb?: (error: string, rep: EnableInvokerResponse) => void): Promise<EnableInvokerResponse>;
    /**
     * 此接口用于删除执行器。
     */
    DeleteInvoker(req: DeleteInvokerRequest, cb?: (error: string, rep: DeleteInvokerResponse) => void): Promise<DeleteInvokerResponse>;
    /**
     * 此接口用于查询命令详情。
     */
    DescribeCommands(req: DescribeCommandsRequest, cb?: (error: string, rep: DescribeCommandsResponse) => void): Promise<DescribeCommandsResponse>;
    /**
     * 此接口用于查询执行活动详情。
     */
    DescribeInvocations(req: DescribeInvocationsRequest, cb?: (error: string, rep: DescribeInvocationsResponse) => void): Promise<DescribeInvocationsResponse>;
    /**
     * 此接口用于查询执行任务详情。
     */
    DescribeInvocationTasks(req: DescribeInvocationTasksRequest, cb?: (error: string, rep: DescribeInvocationTasksResponse) => void): Promise<DescribeInvocationTasksResponse>;
    /**
     * 此接口用于预览自定义参数替换后的命令内容。不会触发真实执行。
     */
    PreviewReplacedCommandContent(req: PreviewReplacedCommandContentRequest, cb?: (error: string, rep: PreviewReplacedCommandContentResponse) => void): Promise<PreviewReplacedCommandContentResponse>;
    /**
     * 此接口用于停止执行器。
     */
    DisableInvoker(req: DisableInvokerRequest, cb?: (error: string, rep: DisableInvokerResponse) => void): Promise<DisableInvokerResponse>;
    /**
     * 接口用于删除托管实例。
     */
    DeleteRegisterInstance(req: DeleteRegisterInstanceRequest, cb?: (error: string, rep: DeleteRegisterInstanceResponse) => void): Promise<DeleteRegisterInstanceResponse>;
    /**
     * 此接口用于修改命令。
     */
    ModifyCommand(req: ModifyCommandRequest, cb?: (error: string, rep: ModifyCommandResponse) => void): Promise<ModifyCommandResponse>;
    /**
     * 在指定的实例上触发命令，调用成功返回执行活动ID（inv-xxxxxxxx），每个执行活动内部有一个或多个执行任务（invt-xxxxxxxx），每个执行任务代表命令在一台 CVM 或一台 Lighthouse 上的执行记录。

* 如果指定实例未安装 agent，或 agent 不在线，返回失败
* 如果命令类型与 agent 运行环境不符，返回失败
* 指定的实例需要处于 VPC 网络
* 指定的实例需要处于 RUNNING 状态
* 不可同时指定 CVM 和 Lighthouse
     */
    InvokeCommand(req: InvokeCommandRequest, cb?: (error: string, rep: InvokeCommandResponse) => void): Promise<InvokeCommandResponse>;
    /**
     * 批量删除命令接口
     */
    DeleteCommands(req: DeleteCommandsRequest, cb?: (error: string, rep: DeleteCommandsResponse) => void): Promise<DeleteCommandsResponse>;
    /**
     * 接口用于查询被托管的实例信息。
     */
    DescribeRegisterInstances(req: DescribeRegisterInstancesRequest, cb?: (error: string, rep: DescribeRegisterInstancesResponse) => void): Promise<DescribeRegisterInstancesResponse>;
    /**
     * 此接口用于查询 TAT 产品后台地域列表。
RegionState 为 AVAILABLE，代表该地域的 TAT 后台服务已经可用；未返回，代表该地域的 TAT 后台服务尚不可用。
     */
    DescribeRegions(req?: DescribeRegionsRequest, cb?: (error: string, rep: DescribeRegionsResponse) => void): Promise<DescribeRegionsResponse>;
    /**
     * 此接口用于创建命令。
     */
    CreateCommand(req: CreateCommandRequest, cb?: (error: string, rep: CreateCommandResponse) => void): Promise<CreateCommandResponse>;
    /**
     * 此接口用于批量删除注册码。
     */
    DeleteRegisterCodes(req: DeleteRegisterCodesRequest, cb?: (error: string, rep: DeleteRegisterCodesResponse) => void): Promise<DeleteRegisterCodesResponse>;
    /**
     * 接口用于查询注册码信息。
     */
    DescribeRegisterCodes(req: DescribeRegisterCodesRequest, cb?: (error: string, rep: DescribeRegisterCodesResponse) => void): Promise<DescribeRegisterCodesResponse>;
    /**
     * 此接口用于查询自动化助手客户端的状态。
     */
    DescribeAutomationAgentStatus(req: DescribeAutomationAgentStatusRequest, cb?: (error: string, rep: DescribeAutomationAgentStatusResponse) => void): Promise<DescribeAutomationAgentStatusResponse>;
    /**
     * 此接口用于获取配额信息
     */
    DescribeQuotas(req: DescribeQuotasRequest, cb?: (error: string, rep: DescribeQuotasResponse) => void): Promise<DescribeQuotasResponse>;
    /**
     * 此接口用于批量禁用注册码。
     */
    DisableRegisterCodes(req: DisableRegisterCodesRequest, cb?: (error: string, rep: DisableRegisterCodesResponse) => void): Promise<DisableRegisterCodesResponse>;
    /**
     * 此接口用于查询场景详情。
     */
    DescribeScenes(req: DescribeScenesRequest, cb?: (error: string, rep: DescribeScenesResponse) => void): Promise<DescribeScenesResponse>;
    /**
     * 此接口用于查询执行器的执行记录。
     */
    DescribeInvokerRecords(req: DescribeInvokerRecordsRequest, cb?: (error: string, rep: DescribeInvokerRecordsResponse) => void): Promise<DescribeInvokerRecordsResponse>;
    /**
     * 此接口用于修改执行器。
     */
    ModifyInvoker(req: ModifyInvokerRequest, cb?: (error: string, rep: ModifyInvokerResponse) => void): Promise<ModifyInvokerResponse>;
    /**
     * 此接口用于查询执行器信息。
     */
    DescribeInvokers(req: DescribeInvokersRequest, cb?: (error: string, rep: DescribeInvokersResponse) => void): Promise<DescribeInvokersResponse>;
    /**
     * 执行命令，调用成功返回执行活动ID（inv-xxxxxxxx），每个执行活动内部有一个或多个执行任务（invt-xxxxxxxx），每个执行任务代表命令在一台 CVM 或一台 Lighthouse 上的执行记录。

* 如果指定实例未安装 agent，或 agent 不在线，返回失败
* 如果命令类型与 agent 运行环境不符，返回失败
* 指定的实例需要处于 VPC 网络
* 指定的实例需要处于 `RUNNING` 状态
* 不可同时指定 CVM 和 Lighthouse
     */
    RunCommand(req: RunCommandRequest, cb?: (error: string, rep: RunCommandResponse) => void): Promise<RunCommandResponse>;
}
