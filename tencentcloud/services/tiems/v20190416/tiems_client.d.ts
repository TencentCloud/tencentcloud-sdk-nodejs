import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DisableRsgAsGroupRequest, ExposeServiceResponse, DeleteJobResponse, DeleteRuntimeResponse, CreateJobRequest, ExposeServiceRequest, DescribeServiceConfigsResponse, CreateJobResponse, DeleteServiceResponse, DescribeRsgAsGroupsResponse, UpdateServiceResponse, UpdateRsgAsGroupResponse, DescribeServicesResponse, DescribeResourceGroupsResponse, DescribeRsgAsGroupsRequest, DeleteResourceGroupRequest, DescribeServiceConfigsRequest, DeleteRsgAsGroupRequest, DeleteServiceConfigResponse, UpdateRsgAsGroupRequest, DeleteRsgAsGroupResponse, CreateRuntimeResponse, UpdateJobRequest, DescribeResourceGroupsRequest, DescribeRuntimesResponse, DeleteInstanceResponse, DescribeInstancesResponse, DeleteResourceGroupResponse, DisableRsgAsGroupResponse, DescribeInstancesRequest, CreateServiceResponse, CreateServiceRequest, EnableRsgAsGroupResponse, UpdateServiceRequest, CreateServiceConfigResponse, DeleteServiceRequest, CreateRsgAsGroupResponse, DescribeRsgAsGroupActivitiesRequest, DeleteJobRequest, DeleteInstanceRequest, CreateRsgAsGroupRequest, DescribeRuntimesRequest, EnableRsgAsGroupRequest, CreateServiceConfigRequest, UpdateJobResponse, CreateRuntimeRequest, DeleteServiceConfigRequest, DeleteRuntimeRequest, DescribeRsgAsGroupActivitiesResponse, DescribeServicesRequest } from "./tiems_models";
/**
 * tiems client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

创建服务
     */
    CreateService(req: CreateServiceRequest, cb?: (error: string, rep: CreateServiceResponse) => void): Promise<CreateServiceResponse>;
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

创建服务配置
     */
    CreateServiceConfig(req: CreateServiceConfigRequest, cb?: (error: string, rep: CreateServiceConfigResponse) => void): Promise<CreateServiceConfigResponse>;
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

创建资源组的伸缩组。当前一个资源组仅允许创建一个伸缩组。
     */
    CreateRsgAsGroup(req: CreateRsgAsGroupRequest, cb?: (error: string, rep: CreateRsgAsGroupResponse) => void): Promise<CreateRsgAsGroupResponse>;
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

删除资源组中的节点。目前仅支持删除已经到期的预付费节点，和按量付费节点。
     */
    DeleteInstance(req: DeleteInstanceRequest, cb?: (error: string, rep: DeleteInstanceResponse) => void): Promise<DeleteInstanceResponse>;
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

删除服务
     */
    DeleteService(req: DeleteServiceRequest, cb?: (error: string, rep: DeleteServiceResponse) => void): Promise<DeleteServiceResponse>;
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

创建任务
     */
    CreateJob(req: CreateJobRequest, cb?: (error: string, rep: CreateJobResponse) => void): Promise<CreateJobResponse>;
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

更新资源组的伸缩组
     */
    UpdateRsgAsGroup(req: UpdateRsgAsGroupRequest, cb?: (error: string, rep: UpdateRsgAsGroupResponse) => void): Promise<UpdateRsgAsGroupResponse>;
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

描述服务
     */
    DescribeServices(req: DescribeServicesRequest, cb?: (error: string, rep: DescribeServicesResponse) => void): Promise<DescribeServicesResponse>;
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

停用资源组的伸缩组
     */
    DisableRsgAsGroup(req: DisableRsgAsGroupRequest, cb?: (error: string, rep: DisableRsgAsGroupResponse) => void): Promise<DisableRsgAsGroupResponse>;
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

更新服务
     */
    UpdateService(req: UpdateServiceRequest, cb?: (error: string, rep: UpdateServiceResponse) => void): Promise<UpdateServiceResponse>;
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

创建运行环境
     */
    CreateRuntime(req: CreateRuntimeRequest, cb?: (error: string, rep: CreateRuntimeResponse) => void): Promise<CreateRuntimeResponse>;
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

删除服务配置
     */
    DeleteServiceConfig(req: DeleteServiceConfigRequest, cb?: (error: string, rep: DeleteServiceConfigResponse) => void): Promise<DeleteServiceConfigResponse>;
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

获取节点列表
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

查询伸缩组活动
     */
    DescribeRsgAsGroupActivities(req: DescribeRsgAsGroupActivitiesRequest, cb?: (error: string, rep: DescribeRsgAsGroupActivitiesResponse) => void): Promise<DescribeRsgAsGroupActivitiesResponse>;
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

描述服务运行环境
     */
    DescribeRuntimes(req?: DescribeRuntimesRequest, cb?: (error: string, rep: DescribeRuntimesResponse) => void): Promise<DescribeRuntimesResponse>;
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

获取资源组列表
     */
    DescribeResourceGroups(req: DescribeResourceGroupsRequest, cb?: (error: string, rep: DescribeResourceGroupsResponse) => void): Promise<DescribeResourceGroupsResponse>;
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

更新任务
     */
    UpdateJob(req: UpdateJobRequest, cb?: (error: string, rep: UpdateJobResponse) => void): Promise<UpdateJobResponse>;
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

伸缩
     */
    DeleteRsgAsGroup(req: DeleteRsgAsGroupRequest, cb?: (error: string, rep: DeleteRsgAsGroupResponse) => void): Promise<DeleteRsgAsGroupResponse>;
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

删除资源组
     */
    DeleteResourceGroup(req: DeleteResourceGroupRequest, cb?: (error: string, rep: DeleteResourceGroupResponse) => void): Promise<DeleteResourceGroupResponse>;
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

删除运行环境
     */
    DeleteRuntime(req: DeleteRuntimeRequest, cb?: (error: string, rep: DeleteRuntimeResponse) => void): Promise<DeleteRuntimeResponse>;
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

暴露服务
     */
    ExposeService(req: ExposeServiceRequest, cb?: (error: string, rep: ExposeServiceResponse) => void): Promise<ExposeServiceResponse>;
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

删除任务
     */
    DeleteJob(req: DeleteJobRequest, cb?: (error: string, rep: DeleteJobResponse) => void): Promise<DeleteJobResponse>;
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

启用资源组的伸缩组
     */
    EnableRsgAsGroup(req: EnableRsgAsGroupRequest, cb?: (error: string, rep: EnableRsgAsGroupResponse) => void): Promise<EnableRsgAsGroupResponse>;
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

描述服务配置
     */
    DescribeServiceConfigs(req: DescribeServiceConfigsRequest, cb?: (error: string, rep: DescribeServiceConfigsResponse) => void): Promise<DescribeServiceConfigsResponse>;
    /**
     * 因业务策略调整，腾讯云TI平台TI-EMS已经于2022年6月30日下线并停止提供服务。若您有新增的业务需求，可前往TI-ONE(https://cloud.tencent.com/document/product/851)使用。

查询资源组的伸缩组信息
     */
    DescribeRsgAsGroups(req: DescribeRsgAsGroupsRequest, cb?: (error: string, rep: DescribeRsgAsGroupsResponse) => void): Promise<DescribeRsgAsGroupsResponse>;
}
