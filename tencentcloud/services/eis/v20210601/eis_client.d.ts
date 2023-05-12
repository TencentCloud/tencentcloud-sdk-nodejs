import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ListRuntimesMCResponse, GetRuntimeResourceMonitorMetricMCResponse, ListRuntimeDeployedInstancesMCRequest, ListDeployableRuntimesMCResponse, GetRuntimeMCResponse, ListDeployableRuntimesMCRequest, ListRuntimesMCRequest, GetRuntimeMCRequest, GetRuntimeResourceMonitorMetricMCRequest, ListRuntimeDeployedInstancesMCResponse } from "./eis_models";
/**
 * eis client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取运行时详情
     */
    GetRuntimeMC(req: GetRuntimeMCRequest, cb?: (error: string, rep: GetRuntimeMCResponse) => void): Promise<GetRuntimeMCResponse>;
    /**
     * 返回用户可用的运行时列表，发布应用时返回的运行时环境，仅shared和private运行时，无sandbox运行时，并且只有running/scaling状态的
     */
    ListDeployableRuntimesMC(req: ListDeployableRuntimesMCRequest, cb?: (error: string, rep: ListDeployableRuntimesMCResponse) => void): Promise<ListDeployableRuntimesMCResponse>;
    /**
     * 获取运行时资源监控详情，cpu，memory，bandwidth
     */
    GetRuntimeResourceMonitorMetricMC(req: GetRuntimeResourceMonitorMetricMCRequest, cb?: (error: string, rep: GetRuntimeResourceMonitorMetricMCResponse) => void): Promise<GetRuntimeResourceMonitorMetricMCResponse>;
    /**
     * 获取运行时部署的应用实例列表
     */
    ListRuntimeDeployedInstancesMC(req: ListRuntimeDeployedInstancesMCRequest, cb?: (error: string, rep: ListRuntimeDeployedInstancesMCResponse) => void): Promise<ListRuntimeDeployedInstancesMCResponse>;
    /**
     * 返回用户的运行时列表，运行时管理主页使用，包含沙箱、共享运行时及独立运行时环境，不包含已经删除的运行时
     */
    ListRuntimesMC(req: ListRuntimesMCRequest, cb?: (error: string, rep: ListRuntimesMCResponse) => void): Promise<ListRuntimesMCResponse>;
}
