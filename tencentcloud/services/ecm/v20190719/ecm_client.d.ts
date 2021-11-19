import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateRoutesRequest, DescribeHaVipsResponse, ModifyModuleSecurityGroupsRequest, TerminateInstancesResponse, DescribeMonthPeakNetworkResponse, DescribeNetworkInterfacesRequest, CreateSecurityGroupPoliciesResponse, DescribeMonthPeakNetworkRequest, DescribeNodeResponse, DescribeModuleRequest, RebootInstancesRequest, CreateDisksRequest, AttachDisksRequest, DescribeSnapshotsRequest, RemovePrivateIpAddressesRequest, DescribeImageRequest, DescribeListenersResponse, StartInstancesResponse, CreateVpcResponse, ModifyModuleIpDirectRequest, ResetInstancesMaxBandwidthResponse, DeleteListenerRequest, ResetInstancesMaxBandwidthRequest, ResetRoutesRequest, TerminateDisksRequest, ModifyDefaultSubnetResponse, DescribeRouteTablesResponse, StopInstancesRequest, DetachNetworkInterfaceResponse, ModifyListenerRequest, CreateImageRequest, DeleteLoadBalancerRequest, DescribeVpcsRequest, DescribeRouteConflictsResponse, AssociateSecurityGroupsResponse, BatchDeregisterTargetsRequest, ModifyListenerResponse, DescribeTargetHealthResponse, ModifyDefaultSubnetRequest, DescribeTaskResultRequest, AttachDisksResponse, DescribeLoadBalancersRequest, DeleteRoutesResponse, DescribeCustomImageTaskRequest, DescribeSecurityGroupAssociationStatisticsResponse, AssignPrivateIpAddressesResponse, ImportImageResponse, DescribeSecurityGroupsRequest, DescribePriceRunInstanceResponse, DeleteImageResponse, ModifySubnetAttributeResponse, DisassociateSecurityGroupsRequest, DescribeVpcsResponse, ModifySecurityGroupAttributeRequest, DescribePackingQuotaGroupResponse, ModifyModuleNameResponse, DescribePeakBaseOverviewRequest, BatchModifyTargetWeightResponse, DeleteSecurityGroupPoliciesRequest, ImportCustomImageResponse, AssociateSecurityGroupsRequest, DeleteSubnetResponse, ReplaceRouteTableAssociationRequest, ModifyTargetWeightResponse, DescribeCustomImageTaskResponse, CreateModuleResponse, DescribePackingQuotaGroupRequest, TerminateDisksResponse, CreateListenerResponse, DeleteVpcRequest, CreateSubnetResponse, DescribeSecurityGroupPoliciesResponse, ModifySecurityGroupPoliciesRequest, ReplaceRoutesRequest, DescribeTargetHealthRequest, ModifyInstancesAttributeResponse, ModifySubnetAttributeRequest, DisassociateAddressRequest, ModifyLoadBalancerAttributesResponse, DescribeDefaultSubnetRequest, RunInstancesResponse, DescribeSecurityGroupLimitsResponse, DisassociateInstancesKeyPairsRequest, ModifyTargetPortResponse, ResetRoutesResponse, AllocateAddressesResponse, CreateImageResponse, ModifyModuleNetworkRequest, AssignIpv6AddressesRequest, DescribeModuleDetailResponse, ModifyIpv6AddressesAttributeResponse, ModifyModuleSecurityGroupsResponse, ReplaceSecurityGroupPolicyRequest, CreateKeyPairResponse, DeleteModuleResponse, DescribeModuleDetailRequest, ModifyRouteTableAttributeRequest, ModifyModuleNetworkResponse, DescribeImportImageOsRequest, CreateKeyPairRequest, ModifyModuleIpDirectResponse, ResetInstancesPasswordRequest, AssociateAddressResponse, DescribeAddressesRequest, DescribeSecurityGroupPoliciesRequest, CreateSecurityGroupResponse, DeleteListenerResponse, ResetInstancesRequest, DeleteImageRequest, ModifyHaVipAttributeRequest, ModifyAddressesBandwidthRequest, ModifyImageAttributeResponse, ModifyImageAttributeRequest, CreateModuleRequest, CreateLoadBalancerResponse, SetLoadBalancerSecurityGroupsRequest, DescribeImportImageOsResponse, MigrateNetworkInterfaceResponse, DisassociateSecurityGroupsResponse, ModifyTargetPortRequest, CreateNetworkInterfaceRequest, SetSecurityGroupForLoadbalancersRequest, DescribeInstancesDeniedActionsRequest, ModifyLoadBalancerAttributesRequest, DeleteHaVipResponse, DescribeSubnetsRequest, CreateSubnetRequest, ModifyAddressesBandwidthResponse, RunInstancesRequest, DescribeInstancesResponse, AllocateAddressesRequest, ModifyInstancesAttributeRequest, ResetInstancesResponse, DescribeNodeRequest, ModifySecurityGroupAttributeResponse, ModifyModuleConfigRequest, ModifyAddressAttributeResponse, DescribeInstanceVncUrlRequest, DescribeTaskStatusResponse, ReplaceRouteTableAssociationResponse, DescribeInstancesDeniedActionsResponse, ReleaseIpv6AddressesRequest, StartInstancesRequest, DeleteSnapshotsRequest, DeleteSnapshotsResponse, DescribeAddressesResponse, ModifyIpv6AddressesAttributeRequest, DeleteModuleRequest, DisableRoutesResponse, DescribeConfigResponse, ModifyVpcAttributeResponse, MigratePrivateIpAddressResponse, DeleteRouteTableResponse, ModifyModuleDisableWanIpResponse, DescribeLoadBalanceTaskStatusRequest, ModifyHaVipAttributeResponse, ModifyVpcAttributeRequest, AttachNetworkInterfaceResponse, DescribeRouteTablesRequest, DescribeBaseOverviewRequest, CreateHaVipResponse, ImportImageRequest, DisableRoutesRequest, StopInstancesResponse, ModifyModuleNameRequest, DescribeInstancesRequest, CreateListenerRequest, ReleaseAddressesRequest, CreateRouteTableRequest, ModifyModuleConfigResponse, MigrateNetworkInterfaceRequest, DescribeTaskStatusRequest, ModifyAddressAttributeRequest, DescribePriceRunInstanceRequest, DescribeTargetsResponse, BatchModifyTargetWeightRequest, RebootInstancesResponse, DeleteSecurityGroupPoliciesResponse, DescribeHaVipsRequest, BatchRegisterTargetsRequest, RemovePrivateIpAddressesResponse, ModifyModuleImageResponse, DeleteLoadBalancerListenersResponse, CreateSecurityGroupPoliciesRequest, ModifyRouteTableAttributeResponse, ReleaseIpv6AddressesResponse, DescribeTaskResultResponse, BatchDeregisterTargetsResponse, SetLoadBalancerSecurityGroupsResponse, CreateLoadBalancerRequest, DescribeModuleResponse, DescribeSubnetsResponse, SetSecurityGroupForLoadbalancersResponse, DescribeDefaultSubnetResponse, DeleteSubnetRequest, DeleteNetworkInterfaceRequest, DescribeTargetsRequest, ReplaceRoutesResponse, DeleteHaVipRequest, DeleteLoadBalancerListenersRequest, MigratePrivateIpAddressRequest, DeleteRouteTableRequest, DetachDisksRequest, DescribeConfigRequest, BatchRegisterTargetsResponse, ImportCustomImageRequest, ReleaseAddressesResponse, ReplaceSecurityGroupPolicyResponse, ModifyPrivateIpAddressesAttributeResponse, DeleteSecurityGroupResponse, CreateNetworkInterfaceResponse, DescribeDisksResponse, DescribeAddressQuotaRequest, DescribeInstanceTypeConfigResponse, AssignIpv6AddressesResponse, CreateRoutesResponse, DescribeSecurityGroupsResponse, ModifySecurityGroupPoliciesResponse, DetachNetworkInterfaceRequest, ModifyTargetWeightRequest, DescribeRouteConflictsRequest, AttachNetworkInterfaceRequest, ResetInstancesPasswordResponse, ModifyModuleDisableWanIpRequest, DescribeInstanceVncUrlResponse, DisassociateAddressResponse, DescribeInstanceTypeConfigRequest, DeleteRoutesRequest, AssociateAddressRequest, DescribePeakNetworkOverviewResponse, DescribeLoadBalanceTaskStatusResponse, DescribeSnapshotsResponse, CreateHaVipRequest, CreateDisksResponse, DescribeAddressQuotaResponse, DeleteLoadBalancerResponse, DeleteSecurityGroupRequest, CreateRouteTableResponse, DescribeDisksRequest, ModifyPrivateIpAddressesAttributeRequest, DetachDisksResponse, CreateSecurityGroupRequest, DescribeSecurityGroupLimitsRequest, DisassociateInstancesKeyPairsResponse, TerminateInstancesRequest, DeleteNetworkInterfaceResponse, DescribePeakNetworkOverviewRequest, EnableRoutesRequest, DescribePeakBaseOverviewResponse, DescribeImageResponse, DescribeNetworkInterfacesResponse, EnableRoutesResponse, AssignPrivateIpAddressesRequest, CreateVpcRequest, DescribeSecurityGroupAssociationStatisticsRequest, DescribeListenersRequest, DeleteVpcResponse, ModifyModuleImageRequest, DescribeLoadBalancersResponse, DescribeBaseOverviewResponse } from "./ecm_models";
/**
 * ecm client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 替换单条安全组路由规则, 单个请求中只能替换单个方向的一条规则, 必须要指定索引（PolicyIndex）。
     */
    ReplaceSecurityGroupPolicy(req: ReplaceSecurityGroupPolicyRequest, cb?: (error: string, rep: ReplaceSecurityGroupPolicyResponse) => void): Promise<ReplaceSecurityGroupPolicyResponse>;
    /**
     * 获取带宽硬盘等数据的限制
     */
    DescribeConfig(req?: DescribeConfigRequest, cb?: (error: string, rep: DescribeConfigResponse) => void): Promise<DescribeConfigResponse>;
    /**
     * 查询EIP异步任务执行结果
     */
    DescribeTaskResult(req: DescribeTaskResultRequest, cb?: (error: string, rep: DescribeTaskResultResponse) => void): Promise<DescribeTaskResultResponse>;
    /**
     * 修改模块名称
     */
    ModifyModuleName(req: ModifyModuleNameRequest, cb?: (error: string, rep: ModifyModuleNameResponse) => void): Promise<ModifyModuleNameResponse>;
    /**
     * 查询路由表对象列表
     */
    DescribeRouteTables(req: DescribeRouteTablesRequest, cb?: (error: string, rep: DescribeRouteTablesResponse) => void): Promise<DescribeRouteTablesResponse>;
    /**
     * 创建了VPC后，系统会创建一个默认路由表，所有新建的子网都会关联到默认路由表。默认情况下您可以直接使用默认路由表来管理您的路由策略。当您的路由策略较多时，您可以调用创建路由表接口创建更多路由表管理您的路由策略。
     */
    CreateRouteTable(req: CreateRouteTableRequest, cb?: (error: string, rep: CreateRouteTableResponse) => void): Promise<CreateRouteTableResponse>;
    /**
     * 批量解绑后端服务。
     */
    BatchDeregisterTargets(req: BatchDeregisterTargetsRequest, cb?: (error: string, rep: BatchDeregisterTargetsResponse) => void): Promise<BatchDeregisterTargetsResponse>;
    /**
     * 修改实例的属性。
     */
    ModifyInstancesAttribute(req: ModifyInstancesAttributeRequest, cb?: (error: string, rep: ModifyInstancesAttributeResponse) => void): Promise<ModifyInstancesAttributeResponse>;
    /**
     * 对某个路由表名称和所有路由策略（Route）进行重新设置
     */
    ResetRoutes(req: ResetRoutesRequest, cb?: (error: string, rep: ResetRoutesResponse) => void): Promise<ResetRoutesResponse>;
    /**
     * 用于修改弹性网卡内网IP属性。
     */
    ModifyPrivateIpAddressesAttribute(req: ModifyPrivateIpAddressesAttributeRequest, cb?: (error: string, rep: ModifyPrivateIpAddressesAttributeResponse) => void): Promise<ModifyPrivateIpAddressesAttributeResponse>;
    /**
     * 创建ECM实例。
     */
    RunInstances(req: RunInstancesRequest, cb?: (error: string, rep: RunInstancesResponse) => void): Promise<RunInstancesResponse>;
    /**
     * 从CVM产品导入镜像到ECM
     */
    ImportImage(req: ImportImageRequest, cb?: (error: string, rep: ImportImageResponse) => void): Promise<ImportImageResponse>;
    /**
     * 查询弹性公网IP列表
     */
    DescribeAddresses(req: DescribeAddressesRequest, cb?: (error: string, rep: DescribeAddressesResponse) => void): Promise<DescribeAddressesResponse>;
    /**
     * 修改模块的默认镜像
     */
    ModifyModuleImage(req: ModifyModuleImageRequest, cb?: (error: string, rep: ModifyModuleImageResponse) => void): Promise<ModifyModuleImageResponse>;
    /**
     * 查询负载均衡的监听器列表。
     */
    DescribeListeners(req: DescribeListenersRequest, cb?: (error: string, rep: DescribeListenersResponse) => void): Promise<DescribeListenersResponse>;
    /**
     * 本接口(CreateImage)用于将实例的系统盘制作为新镜像，创建后的镜像可以用于创建实例。
     */
    CreateImage(req: CreateImageRequest, cb?: (error: string, rep: CreateImageResponse) => void): Promise<CreateImageResponse>;
    /**
     * 获取节点列表
     */
    DescribeNode(req: DescribeNodeRequest, cb?: (error: string, rep: DescribeNodeResponse) => void): Promise<DescribeNodeResponse>;
    /**
     * 查询导入镜像任务
     */
    DescribeCustomImageTask(req: DescribeCustomImageTaskRequest, cb?: (error: string, rep: DescribeCustomImageTaskResponse) => void): Promise<DescribeCustomImageTaskResponse>;
    /**
     * 修改子网关联的路由表，一个子网只能关联一个路由表。
     */
    ReplaceRouteTableAssociation(req: ReplaceRouteTableAssociationRequest, cb?: (error: string, rep: ReplaceRouteTableAssociationResponse) => void): Promise<ReplaceRouteTableAssociationResponse>;
    /**
     * 查询负载均衡实例列表。
     */
    DescribeLoadBalancers(req: DescribeLoadBalancersRequest, cb?: (error: string, rep: DescribeLoadBalancersResponse) => void): Promise<DescribeLoadBalancersResponse>;
    /**
     * 查询负载均衡相关的任务状态
     */
    DescribeLoadBalanceTaskStatus(req: DescribeLoadBalanceTaskStatusRequest, cb?: (error: string, rep: DescribeLoadBalanceTaskStatusResponse) => void): Promise<DescribeLoadBalanceTaskStatusResponse>;
    /**
     * 查询私有网络列表
     */
    DescribeVpcs(req: DescribeVpcsRequest, cb?: (error: string, rep: DescribeVpcsResponse) => void): Promise<DescribeVpcsResponse>;
    /**
     * 批量修改监听器绑定的后端机器的转发权重。
     */
    BatchModifyTargetWeight(req: BatchModifyTargetWeightRequest, cb?: (error: string, rep: BatchModifyTargetWeightResponse) => void): Promise<BatchModifyTargetWeightResponse>;
    /**
     * 展示镜像列表
     */
    DescribeImage(req: DescribeImageRequest, cb?: (error: string, rep: DescribeImageResponse) => void): Promise<DescribeImageResponse>;
    /**
     * 解绑安全组
     */
    DisassociateSecurityGroups(req: DisassociateSecurityGroupsRequest, cb?: (error: string, rep: DisassociateSecurityGroupsResponse) => void): Promise<DisassociateSecurityGroupsResponse>;
    /**
     * 弹性网卡迁移
     */
    MigrateNetworkInterface(req: MigrateNetworkInterfaceRequest, cb?: (error: string, rep: MigrateNetworkInterfaceResponse) => void): Promise<MigrateNetworkInterfaceResponse>;
    /**
     * 调整弹性公网IP带宽

     */
    ModifyAddressesBandwidth(req: ModifyAddressesBandwidthRequest, cb?: (error: string, rep: ModifyAddressesBandwidthResponse) => void): Promise<ModifyAddressesBandwidthResponse>;
    /**
     * 创建子网，若创建成功，则此子网会成为此可用区的默认子网。
     */
    CreateSubnet(req: CreateSubnetRequest, cb?: (error: string, rep: CreateSubnetResponse) => void): Promise<CreateSubnetResponse>;
    /**
     * 重置实例的最大带宽上限。
     */
    ResetInstancesMaxBandwidth(req: ResetInstancesMaxBandwidthRequest, cb?: (error: string, rep: ResetInstancesMaxBandwidthResponse) => void): Promise<ResetInstancesMaxBandwidthResponse>;
    /**
     * 获取模块列表
     */
    DescribeModule(req: DescribeModuleRequest, cb?: (error: string, rep: DescribeModuleResponse) => void): Promise<DescribeModuleResponse>;
    /**
     * 只有状态为STOPPED的实例才可以进行此操作；接口调用成功时，实例会进入STARTING状态；启动实例成功时，实例会进入RUNNING状态。
     */
    StartInstances(req: StartInstancesRequest, cb?: (error: string, rep: StartInstancesResponse) => void): Promise<StartInstancesResponse>;
    /**
     * 删除负载均衡监听器。
     */
    DeleteListener(req: DeleteListenerRequest, cb?: (error: string, rep: DeleteListenerResponse) => void): Promise<DeleteListenerResponse>;
    /**
     * 解绑弹性公网IP（简称 EIP）
只有状态为 BIND 和 BIND_ENI 的 EIP 才能进行解绑定操作。
EIP 如果被封堵，则不能进行解绑定操作。
     */
    DisassociateAddress(req: DisassociateAddressRequest, cb?: (error: string, rep: DisassociateAddressResponse) => void): Promise<DisassociateAddressResponse>;
    /**
     * 创建私有网络
     */
    CreateVpc(req: CreateVpcRequest, cb?: (error: string, rep: CreateVpcResponse) => void): Promise<CreateVpcResponse>;
    /**
     * 修改负载均衡实例的属性。
     */
    ModifyLoadBalancerAttributes(req: ModifyLoadBalancerAttributesRequest, cb?: (error: string, rep: ModifyLoadBalancerAttributesResponse) => void): Promise<ModifyLoadBalancerAttributesResponse>;
    /**
     * 本接口（AttachDisks）用于挂载云硬盘。
 
* 支持批量操作，将多块云盘挂载到同一云主机。如果多个云盘中存在不允许挂载的云盘，则操作不执行，返回特定的错误码。
* 本接口为异步接口，当挂载云盘的请求成功返回时，表示后台已发起挂载云盘的操作，可通过接口[DescribeDisks](/document/product/362/16315)来查询对应云盘的状态，如果云盘的状态由“ATTACHING”变为“ATTACHED”，则为挂载成功。
     */
    AttachDisks(req: AttachDisksRequest, cb?: (error: string, rep: AttachDisksResponse) => void): Promise<AttachDisksResponse>;
    /**
     * 设置负载均衡实例的安全组。
     */
    SetLoadBalancerSecurityGroups(req: SetLoadBalancerSecurityGroupsRequest, cb?: (error: string, rep: SetLoadBalancerSecurityGroupsResponse) => void): Promise<SetLoadBalancerSecurityGroupsResponse>;
    /**
     * 申请一个或多个弹性公网IP（简称 EIP）
     */
    AllocateAddresses(req: AllocateAddressesRequest, cb?: (error: string, rep: AllocateAddressesResponse) => void): Promise<AllocateAddressesResponse>;
    /**
     * 修改模块是否禁止分配外网ip的属性。
     */
    ModifyModuleDisableWanIp(req: ModifyModuleDisableWanIpRequest, cb?: (error: string, rep: ModifyModuleDisableWanIpResponse) => void): Promise<ModifyModuleDisableWanIpResponse>;
    /**
     * 修改负载均衡监听器属性。
     */
    ModifyListener(req: ModifyListenerRequest, cb?: (error: string, rep: ModifyListenerResponse) => void): Promise<ModifyListenerResponse>;
    /**
     * 用于解除实例的密钥绑定关系。
     */
    DisassociateInstancesKeyPairs(req: DisassociateInstancesKeyPairsRequest, cb?: (error: string, rep: DisassociateInstancesKeyPairsResponse) => void): Promise<DisassociateInstancesKeyPairsResponse>;
    /**
     * 将弹性公网IP（简称 EIP）绑定到实例或弹性网卡的指定内网 IP 上。
将 EIP 绑定到实例（ECM）上，其本质是将 EIP 绑定到实例上主网卡的主内网 IP 上。
将 EIP 绑定到指定网卡的内网 IP上，内网IP已经绑定了EIP或普通公网IP，则反馈失败。必须先解绑该 EIP，才能再绑定新的。
只有状态为 UNBIND 的 EIP 才能够绑定内网IP。
     */
    AssociateAddress(req: AssociateAddressRequest, cb?: (error: string, rep: AssociateAddressResponse) => void): Promise<AssociateAddressResponse>;
    /**
     * 删除子网，若子网为可用区下的默认子网，则默认子网会回退到系统自动创建的默认子网，非用户最新创建的子网。若默认子网不满足需求，可调用设置默认子网接口设置。
     */
    DeleteSubnet(req: DeleteSubnetRequest, cb?: (error: string, rep: DeleteSubnetResponse) => void): Promise<DeleteSubnetResponse>;
    /**
     * 批量绑定后端目标。
     */
    BatchRegisterTargets(req: BatchRegisterTargetsRequest, cb?: (error: string, rep: BatchRegisterTargetsResponse) => void): Promise<BatchRegisterTargetsResponse>;
    /**
     * 通过实例id获取当前禁止的操作
     */
    DescribeInstancesDeniedActions(req: DescribeInstancesDeniedActionsRequest, cb?: (error: string, rep: DescribeInstancesDeniedActionsResponse) => void): Promise<DescribeInstancesDeniedActionsResponse>;
    /**
     * 创建弹性网卡
     */
    CreateNetworkInterface(req: CreateNetworkInterfaceRequest, cb?: (error: string, rep: CreateNetworkInterfaceResponse) => void): Promise<CreateNetworkInterfaceResponse>;
    /**
     * 只有处于"RUNNING"状态的实例才能够进行关机操作；
调用成功时，实例会进入STOPPING状态；关闭实例成功时，实例会进入STOPPED状态；
支持强制关闭，强制关机的效果等同于关闭物理计算机的电源开关，强制关机可能会导致数据丢失或文件系统损坏，请仅在服务器不能正常关机时使用。
     */
    StopInstances(req: StopInstancesRequest, cb?: (error: string, rep: StopInstancesResponse) => void): Promise<StopInstancesResponse>;
    /**
     * 查询外部导入镜像支持的OS列表
     */
    DescribeImportImageOs(req?: DescribeImportImageOsRequest, cb?: (error: string, rep: DescribeImportImageOsResponse) => void): Promise<DescribeImportImageOsResponse>;
    /**
     * 获取客户节点上的出入带宽月峰和计费带宽信息
     */
    DescribeMonthPeakNetwork(req: DescribeMonthPeakNetworkRequest, cb?: (error: string, rep: DescribeMonthPeakNetworkResponse) => void): Promise<DescribeMonthPeakNetworkResponse>;
    /**
     * 弹性网卡解绑云主机
     */
    DetachNetworkInterface(req: DetachNetworkInterfaceRequest, cb?: (error: string, rep: DetachNetworkInterfaceResponse) => void): Promise<DetachNetworkInterfaceResponse>;
    /**
     * 重装实例，若指定了ImageId参数，则使用指定的镜像重装；否则按照当前实例使用的镜像进行重装；若未指定密码，则密码通过站内信形式随后发送。
     */
    ResetInstances(req: ResetInstancesRequest, cb?: (error: string, rep: ResetInstancesResponse) => void): Promise<ResetInstancesResponse>;
    /**
     * 本接口（TerminateDisks）用于退还云硬盘。

* 不再使用的云盘，可通过本接口主动退还。
* 本接口支持退还预付费云盘和按小时后付费云盘。按小时后付费云盘可直接退还，预付费云盘需符合退还规则。
* 支持批量操作，每次请求批量云硬盘的上限为50。如果批量云盘存在不允许操作的，请求会以特定错误码返回。
     */
    TerminateDisks(req: TerminateDisksRequest, cb?: (error: string, rep: TerminateDisksResponse) => void): Promise<TerminateDisksResponse>;
    /**
     * 修改监听器绑定的后端机器的端口。
     */
    ModifyTargetPort(req: ModifyTargetPortRequest, cb?: (error: string, rep: ModifyTargetPortResponse) => void): Promise<ModifyTargetPortResponse>;
    /**
     * 删除弹性网卡
     */
    DeleteNetworkInterface(req: DeleteNetworkInterfaceRequest, cb?: (error: string, rep: DeleteNetworkInterfaceResponse) => void): Promise<DeleteNetworkInterfaceResponse>;
    /**
     * 删除业务模块
     */
    DeleteModule(req: DeleteModuleRequest, cb?: (error: string, rep: DeleteModuleResponse) => void): Promise<DeleteModuleResponse>;
    /**
     * 本接口（UnassignIpv6Addresses）用于释放弹性网卡IPv6地址。
     */
    ReleaseIpv6Addresses(req: ReleaseIpv6AddressesRequest, cb?: (error: string, rep: ReleaseIpv6AddressesResponse) => void): Promise<ReleaseIpv6AddressesResponse>;
    /**
     * 获取负载均衡后端服务的健康检查状态。
     */
    DescribeTargetHealth(req: DescribeTargetHealthRequest, cb?: (error: string, rep: DescribeTargetHealthResponse) => void): Promise<DescribeTargetHealthResponse>;
    /**
     * 替换路由策略
     */
    ReplaceRoutes(req: ReplaceRoutesRequest, cb?: (error: string, rep: ReplaceRoutesResponse) => void): Promise<ReplaceRoutesResponse>;
    /**
     * 查询自定义路由策略与云联网路由策略冲突列表
     */
    DescribeRouteConflicts(req: DescribeRouteConflictsRequest, cb?: (error: string, rep: DescribeRouteConflictsResponse) => void): Promise<DescribeRouteConflictsResponse>;
    /**
     * 本接口（DetachDisks）用于卸载云硬盘。

* 支持批量操作，卸载挂载在同一主机上的多块云盘。如果多块云盘中存在不允许卸载的云盘，则操作不执行，返回特定的错误码。
* 本接口为异步接口，当请求成功返回时，云盘并未立即从主机卸载，可通过接口[DescribeDisks](/document/product/362/16315)来查询对应云盘的状态，如果云盘的状态由“ATTACHED”变为“UNATTACHED”，则为卸载成功。
     */
    DetachDisks(req: DetachDisksRequest, cb?: (error: string, rep: DetachDisksResponse) => void): Promise<DetachDisksResponse>;
    /**
     * 禁用已启用的子网路由
     */
    DisableRoutes(req: DisableRoutesRequest, cb?: (error: string, rep: DisableRoutesResponse) => void): Promise<DisableRoutesResponse>;
    /**
     * 查询实例价格
     */
    DescribePriceRunInstance(req: DescribePriceRunInstanceRequest, cb?: (error: string, rep: DescribePriceRunInstanceResponse) => void): Promise<DescribePriceRunInstanceResponse>;
    /**
     * 本接口（ModifyIpv6AddressesAttribute）用于修改弹性网卡IPv6地址属性。
     */
    ModifyIpv6AddressesAttribute(req: ModifyIpv6AddressesAttributeRequest, cb?: (error: string, rep: ModifyIpv6AddressesAttributeResponse) => void): Promise<ModifyIpv6AddressesAttributeResponse>;
    /**
     * 获取概览页统计的基本数据
     */
    DescribeBaseOverview(req?: DescribeBaseOverviewRequest, cb?: (error: string, rep: DescribeBaseOverviewResponse) => void): Promise<DescribeBaseOverviewResponse>;
    /**
     * 弹性网卡绑定云主机
     */
    AttachNetworkInterface(req: AttachNetworkInterfaceRequest, cb?: (error: string, rep: AttachNetworkInterfaceResponse) => void): Promise<AttachNetworkInterfaceResponse>;
    /**
     * SecurityGroupPolicySet.Version 用于指定要操作的安全组的版本。传入 Version 版本号若不等于当前安全组的最新版本，将返回失败；若不传 Version 则直接删除指定PolicyIndex的规则。
     */
    DeleteSecurityGroupPolicies(req: DeleteSecurityGroupPoliciesRequest, cb?: (error: string, rep: DeleteSecurityGroupPoliciesResponse) => void): Promise<DeleteSecurityGroupPoliciesResponse>;
    /**
     * 用于创建一个 OpenSSH RSA 密钥对，可以用于登录 Linux 实例。
     */
    CreateKeyPair(req: CreateKeyPairRequest, cb?: (error: string, rep: CreateKeyPairResponse) => void): Promise<CreateKeyPairResponse>;
    /**
     * 修改模块配置，已关联实例的模块不支持调整配置。
     */
    ModifyModuleConfig(req: ModifyModuleConfigRequest, cb?: (error: string, rep: ModifyModuleConfigResponse) => void): Promise<ModifyModuleConfigResponse>;
    /**
     * 修改安全组属性
     */
    ModifySecurityGroupAttribute(req: ModifySecurityGroupAttributeRequest, cb?: (error: string, rep: ModifySecurityGroupAttributeResponse) => void): Promise<ModifySecurityGroupAttributeResponse>;
    /**
     * 展示模块详细信息
     */
    DescribeModuleDetail(req: DescribeModuleDetailRequest, cb?: (error: string, rep: DescribeModuleDetailResponse) => void): Promise<DescribeModuleDetailResponse>;
    /**
     * 删除负载均衡实例。
     */
    DeleteLoadBalancer(req: DeleteLoadBalancerRequest, cb?: (error: string, rep: DeleteLoadBalancerResponse) => void): Promise<DeleteLoadBalancerResponse>;
    /**
     * 获取机型配置列表
     */
    DescribeInstanceTypeConfig(req?: DescribeInstanceTypeConfigRequest, cb?: (error: string, rep: DescribeInstanceTypeConfigResponse) => void): Promise<DescribeInstanceTypeConfigResponse>;
    /**
     * 对某个路由表批量删除路由策略
     */
    DeleteRoutes(req: DeleteRoutesRequest, cb?: (error: string, rep: DeleteRoutesResponse) => void): Promise<DeleteRoutesResponse>;
    /**
     * 修改安全组出站和入站规则
     */
    ModifySecurityGroupPolicies(req: ModifySecurityGroupPoliciesRequest, cb?: (error: string, rep: ModifySecurityGroupPoliciesResponse) => void): Promise<ModifySecurityGroupPoliciesResponse>;
    /**
     * 修改子网属性
     */
    ModifySubnetAttribute(req: ModifySubnetAttributeRequest, cb?: (error: string, rep: ModifySubnetAttributeResponse) => void): Promise<ModifySubnetAttributeResponse>;
    /**
     * 使用本接口获取某种机型在某些区域的装箱配额（当使用虚拟机型时，返回的是一组相互关联的装箱配额）。
     */
    DescribePackingQuotaGroup(req: DescribePackingQuotaGroupRequest, cb?: (error: string, rep: DescribePackingQuotaGroupResponse) => void): Promise<DescribePackingQuotaGroupResponse>;
    /**
     * 查询弹性网卡列表
     */
    DescribeNetworkInterfaces(req: DescribeNetworkInterfacesRequest, cb?: (error: string, rep: DescribeNetworkInterfacesResponse) => void): Promise<DescribeNetworkInterfacesResponse>;
    /**
     * 本接口（CreateDisks）用于创建云硬盘。

* 预付费云盘的购买会预先扣除本次云盘购买所需金额，在调用本接口前请确保账户余额充足。
* 本接口支持传入数据盘快照来创建云盘，实现将快照数据复制到新购云盘上。
* 本接口为异步接口，当创建请求下发成功后会返回一个新建的云盘ID列表，此时云盘的创建并未立即完成。可以通过调用[DescribeDisks](/document/product/362/16315)接口根据DiskId查询对应云盘，如果能查到云盘，且状态为'UNATTACHED'或'ATTACHED'，则表示创建成功。
     */
    CreateDisks(req: CreateDisksRequest, cb?: (error: string, rep: CreateDisksResponse) => void): Promise<CreateDisksResponse>;
    /**
     * 绑定安全组
     */
    AssociateSecurityGroups(req: AssociateSecurityGroupsRequest, cb?: (error: string, rep: AssociateSecurityGroupsResponse) => void): Promise<AssociateSecurityGroupsResponse>;
    /**
     * 本接口（ModifyImageAttribute）用于修改镜像属性。
     */
    ModifyImageAttribute(req: ModifyImageAttributeRequest, cb?: (error: string, rep: ModifyImageAttributeResponse) => void): Promise<ModifyImageAttributeResponse>;
    /**
     * 本接口(DescribeTaskStatus)用于获取异步任务状态
     */
    DescribeTaskStatus(req: DescribeTaskStatusRequest, cb?: (error: string, rep: DescribeTaskStatusResponse) => void): Promise<DescribeTaskStatusResponse>;
    /**
     * 获取网络峰值数据
     */
    DescribePeakNetworkOverview(req: DescribePeakNetworkOverviewRequest, cb?: (error: string, rep: DescribePeakNetworkOverviewResponse) => void): Promise<DescribePeakNetworkOverviewResponse>;
    /**
     * 创建安全组
     */
    CreateSecurityGroup(req: CreateSecurityGroupRequest, cb?: (error: string, rep: CreateSecurityGroupResponse) => void): Promise<CreateSecurityGroupResponse>;
    /**
     * 导入自定义镜像，支持 RAW、VHD、QCOW2、VMDK 镜像格式
     */
    ImportCustomImage(req: ImportCustomImageRequest, cb?: (error: string, rep: ImportCustomImageResponse) => void): Promise<ImportCustomImageResponse>;
    /**
     * 本接口（DescribeSnapshots）用于查询快照的详细信息。

* 根据快照ID、创建快照的云硬盘ID、创建快照的云硬盘类型等对结果进行过滤，不同条件之间为与(AND)的关系，过滤信息详细请见过滤器`Filter`。
*  如果参数为空，返回当前用户一定数量（`Limit`所指定的数量，默认为20）的快照列表。
     */
    DescribeSnapshots(req: DescribeSnapshotsRequest, cb?: (error: string, rep: DescribeSnapshotsResponse) => void): Promise<DescribeSnapshotsResponse>;
    /**
     * 销毁实例
     */
    TerminateInstances(req: TerminateInstancesRequest, cb?: (error: string, rep: TerminateInstancesResponse) => void): Promise<TerminateInstancesResponse>;
    /**
     * 查询实例管理终端地址
     */
    DescribeInstanceVncUrl(req: DescribeInstanceVncUrlRequest, cb?: (error: string, rep: DescribeInstanceVncUrlResponse) => void): Promise<DescribeInstanceVncUrlResponse>;
    /**
     * 删除路由表
     */
    DeleteRouteTable(req: DeleteRouteTableRequest, cb?: (error: string, rep: DeleteRouteTableResponse) => void): Promise<DeleteRouteTableResponse>;
    /**
     * 查询用户安全组配额
     */
    DescribeSecurityGroupLimits(req?: DescribeSecurityGroupLimitsRequest, cb?: (error: string, rep: DescribeSecurityGroupLimitsResponse) => void): Promise<DescribeSecurityGroupLimitsResponse>;
    /**
     * 绑定或解绑一个安全组到多个负载均衡实例。
     */
    SetSecurityGroupForLoadbalancers(req: SetSecurityGroupForLoadbalancersRequest, cb?: (error: string, rep: SetSecurityGroupForLoadbalancersResponse) => void): Promise<SetSecurityGroupForLoadbalancersResponse>;
    /**
     * 修改在一个可用区下创建实例时使用的默认子网（创建实例时，未填写VPC参数时使用的sunbetId）
     */
    ModifyDefaultSubnet(req: ModifyDefaultSubnetRequest, cb?: (error: string, rep: ModifyDefaultSubnetResponse) => void): Promise<ModifyDefaultSubnetResponse>;
    /**
     * 只有状态为RUNNING的实例才可以进行此操作；接口调用成功时，实例会进入REBOOTING状态；重启实例成功时，实例会进入RUNNING状态；支持强制重启，强制重启的效果等同于关闭物理计算机的电源开关再重新启动。强制重启可能会导致数据丢失或文件系统损坏，请仅在服务器不能正常重启时使用。
     */
    RebootInstances(req: RebootInstancesRequest, cb?: (error: string, rep: RebootInstancesResponse) => void): Promise<RebootInstancesResponse>;
    /**
     * 本接口（AssignIpv6Addresses）用于弹性网卡申请IPv6地址。
     */
    AssignIpv6Addresses(req: AssignIpv6AddressesRequest, cb?: (error: string, rep: AssignIpv6AddressesResponse) => void): Promise<AssignIpv6AddressesResponse>;
    /**
     * 弹性网卡内网IP迁移。
该接口用于将一个内网IP从一个弹性网卡上迁移到另外一个弹性网卡，主IP地址不支持迁移。
迁移前后的弹性网卡必须在同一个子网内。
     */
    MigratePrivateIpAddress(req: MigratePrivateIpAddressRequest, cb?: (error: string, rep: MigratePrivateIpAddressResponse) => void): Promise<MigratePrivateIpAddressResponse>;
    /**
     * 购买负载均衡实例。
     */
    CreateLoadBalancer(req: CreateLoadBalancerRequest, cb?: (error: string, rep: CreateLoadBalancerResponse) => void): Promise<CreateLoadBalancerResponse>;
    /**
     * 修改模块默认带宽上限
     */
    ModifyModuleNetwork(req: ModifyModuleNetworkRequest, cb?: (error: string, rep: ModifyModuleNetworkResponse) => void): Promise<ModifyModuleNetworkResponse>;
    /**
     * 用于查询高可用虚拟IP（HAVIP）列表。
     */
    DescribeHaVips(req: DescribeHaVipsRequest, cb?: (error: string, rep: DescribeHaVipsResponse) => void): Promise<DescribeHaVipsResponse>;
    /**
     * 弹性网卡申请内网 IP
     */
    AssignPrivateIpAddresses(req: AssignPrivateIpAddressesRequest, cb?: (error: string, rep: AssignPrivateIpAddressesResponse) => void): Promise<AssignPrivateIpAddressesResponse>;
    /**
     * 用于删除高可用虚拟IP（HAVIP）
     */
    DeleteHaVip(req: DeleteHaVipRequest, cb?: (error: string, rep: DeleteHaVipResponse) => void): Promise<DeleteHaVipResponse>;
    /**
     * 查询您账户的弹性公网IP（简称 EIP）在当前地域的配额信息
     */
    DescribeAddressQuota(req: DescribeAddressQuotaRequest, cb?: (error: string, rep: DescribeAddressQuotaResponse) => void): Promise<DescribeAddressQuotaResponse>;
    /**
     * 删除负载均衡多个监听器
     */
    DeleteLoadBalancerListeners(req: DeleteLoadBalancerListenersRequest, cb?: (error: string, rep: DeleteLoadBalancerListenersResponse) => void): Promise<DeleteLoadBalancerListenersResponse>;
    /**
     * 删除私有网络
     */
    DeleteVpc(req: DeleteVpcRequest, cb?: (error: string, rep: DeleteVpcResponse) => void): Promise<DeleteVpcResponse>;
    /**
     * 查询子网列表
     */
    DescribeSubnets(req: DescribeSubnetsRequest, cb?: (error: string, rep: DescribeSubnetsResponse) => void): Promise<DescribeSubnetsResponse>;
    /**
     * 获取实例的相关信息。
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 查看安全组
     */
    DescribeSecurityGroups(req: DescribeSecurityGroupsRequest, cb?: (error: string, rep: DescribeSecurityGroupsResponse) => void): Promise<DescribeSecurityGroupsResponse>;
    /**
     * 查询安全组规则
     */
    DescribeSecurityGroupPolicies(req: DescribeSecurityGroupPoliciesRequest, cb?: (error: string, rep: DescribeSecurityGroupPoliciesResponse) => void): Promise<DescribeSecurityGroupPoliciesResponse>;
    /**
     * 查询可用区的默认子网
     */
    DescribeDefaultSubnet(req: DescribeDefaultSubnetRequest, cb?: (error: string, rep: DescribeDefaultSubnetResponse) => void): Promise<DescribeDefaultSubnetResponse>;
    /**
     * 重置处于运行中状态的实例的密码，需要显式指定强制关机参数ForceStop。如果没有显式指定强制关机参数，则只有处于关机状态的实例才允许执行重置密码操作。
     */
    ResetInstancesPassword(req: ResetInstancesPasswordRequest, cb?: (error: string, rep: ResetInstancesPasswordResponse) => void): Promise<ResetInstancesPasswordResponse>;
    /**
     * 创建模块
     */
    CreateModule(req: CreateModuleRequest, cb?: (error: string, rep: CreateModuleResponse) => void): Promise<CreateModuleResponse>;
    /**
     * 启用已禁用的子网路由。
本接口会校验启用后，是否与已有路由冲突，如果冲突，则无法启用，失败处理。路由冲突时，需要先禁用与之冲突的路由，才能启用该路由。
     */
    EnableRoutes(req: EnableRoutesRequest, cb?: (error: string, rep: EnableRoutesResponse) => void): Promise<EnableRoutesResponse>;
    /**
     * 本接口（CreateHaVip）用于创建高可用虚拟IP（HAVIP）
     */
    CreateHaVip(req: CreateHaVipRequest, cb?: (error: string, rep: CreateHaVipResponse) => void): Promise<CreateHaVipResponse>;
    /**
     * 本接口（DescribeDisks）用于查询云硬盘列表。

* 可以根据云硬盘ID、云硬盘类型或者云硬盘状态等信息来查询云硬盘的详细信息，不同条件之间为与(AND)的关系，过滤信息详细请见过滤器`Filter`。
* 如果参数为空，返回当前用户一定数量（`Limit`所指定的数量，默认为20）的云硬盘列表。
     */
    DescribeDisks(req: DescribeDisksRequest, cb?: (error: string, rep: DescribeDisksResponse) => void): Promise<DescribeDisksResponse>;
    /**
     * 只有当前账号下的安全组允许被删除。
安全组实例ID如果在其他安全组的规则中被引用，则无法直接删除。这种情况下，需要先进行规则修改，再删除安全组。
删除的安全组无法再找回，请谨慎调用。
     */
    DeleteSecurityGroup(req: DeleteSecurityGroupRequest, cb?: (error: string, rep: DeleteSecurityGroupResponse) => void): Promise<DeleteSecurityGroupResponse>;
    /**
     * 创建负载均衡监听器。
     */
    CreateListener(req: CreateListenerRequest, cb?: (error: string, rep: CreateListenerResponse) => void): Promise<CreateListenerResponse>;
    /**
     * 本接口（DeleteSnapshots）用于删除快照。

* 快照必须处于NORMAL状态，快照状态可以通过[DescribeSnapshots](/document/product/362/15647)接口查询，见输出参数中SnapshotState字段解释。
* 支持批量操作。如果多个快照存在无法删除的快照，则操作不执行，以返回特定的错误码返回。
     */
    DeleteSnapshots(req: DeleteSnapshotsRequest, cb?: (error: string, rep: DeleteSnapshotsResponse) => void): Promise<DeleteSnapshotsResponse>;
    /**
     * 修改路由表属性
     */
    ModifyRouteTableAttribute(req: ModifyRouteTableAttributeRequest, cb?: (error: string, rep: ModifyRouteTableAttributeResponse) => void): Promise<ModifyRouteTableAttributeResponse>;
    /**
     * 修改监听器绑定的后端机器的转发权重。
     */
    ModifyTargetWeight(req: ModifyTargetWeightRequest, cb?: (error: string, rep: ModifyTargetWeightResponse) => void): Promise<ModifyTargetWeightResponse>;
    /**
     * 修改模块默认安全组
     */
    ModifyModuleSecurityGroups(req: ModifyModuleSecurityGroupsRequest, cb?: (error: string, rep: ModifyModuleSecurityGroupsResponse) => void): Promise<ModifyModuleSecurityGroupsResponse>;
    /**
     * 创建路由策略
     */
    CreateRoutes(req: CreateRoutesRequest, cb?: (error: string, rep: CreateRoutesResponse) => void): Promise<CreateRoutesResponse>;
    /**
     * 用于修改高可用虚拟IP（HAVIP）属性
     */
    ModifyHaVipAttribute(req: ModifyHaVipAttributeRequest, cb?: (error: string, rep: ModifyHaVipAttributeResponse) => void): Promise<ModifyHaVipAttributeResponse>;
    /**
     * 释放一个或多个弹性公网IP（简称 EIP）。
该操作不可逆，释放后 EIP 关联的 IP 地址将不再属于您的名下。
只有状态为 UNBIND 的 EIP 才能进行释放操作。
     */
    ReleaseAddresses(req: ReleaseAddressesRequest, cb?: (error: string, rep: ReleaseAddressesResponse) => void): Promise<ReleaseAddressesResponse>;
    /**
     * 修改模块IP直通。
     */
    ModifyModuleIpDirect(req: ModifyModuleIpDirectRequest, cb?: (error: string, rep: ModifyModuleIpDirectResponse) => void): Promise<ModifyModuleIpDirectResponse>;
    /**
     * 查询负载均衡绑定的后端服务列表。
     */
    DescribeTargets(req: DescribeTargetsRequest, cb?: (error: string, rep: DescribeTargetsResponse) => void): Promise<DescribeTargetsResponse>;
    /**
     * 修改私有网络（VPC）的相关属性
     */
    ModifyVpcAttribute(req: ModifyVpcAttributeRequest, cb?: (error: string, rep: ModifyVpcAttributeResponse) => void): Promise<ModifyVpcAttributeResponse>;
    /**
     * 查询安全组关联实例统计
     */
    DescribeSecurityGroupAssociationStatistics(req: DescribeSecurityGroupAssociationStatisticsRequest, cb?: (error: string, rep: DescribeSecurityGroupAssociationStatisticsResponse) => void): Promise<DescribeSecurityGroupAssociationStatisticsResponse>;
    /**
     * CPU 内存 硬盘等基础信息峰值数据
     */
    DescribePeakBaseOverview(req: DescribePeakBaseOverviewRequest, cb?: (error: string, rep: DescribePeakBaseOverviewResponse) => void): Promise<DescribePeakBaseOverviewResponse>;
    /**
     * 修改弹性公网IP属性
     */
    ModifyAddressAttribute(req: ModifyAddressAttributeRequest, cb?: (error: string, rep: ModifyAddressAttributeResponse) => void): Promise<ModifyAddressAttributeResponse>;
    /**
     * 弹性网卡退还内网 IP。
退还弹性网卡上的辅助内网IP，接口自动解关联弹性公网 IP。不能退还弹性网卡的主内网IP。
     */
    RemovePrivateIpAddresses(req: RemovePrivateIpAddressesRequest, cb?: (error: string, rep: RemovePrivateIpAddressesResponse) => void): Promise<RemovePrivateIpAddressesResponse>;
    /**
     * <p>本接口（CreateSecurityGroupPolicies）用于创建安全组规则（SecurityGroupPolicy）。</p>
<p>在 SecurityGroupPolicySet 参数中：</p>
<ul>
<li>Version 安全组规则版本号，用户每次更新安全规则版本会自动加1，防止您更新的路由规则已过期，不填不考虑冲突。</li>
<li>在创建出站和入站规则（Egress 和 Ingress）时：<ul>
<li>Protocol 字段支持输入TCP, UDP, ICMP, GRE, ALL。</li>
<li>CidrBlock 字段允许输入符合cidr格式标准的任意字符串。在基础网络中，如果 CidrBlock 包含您的账户内的云服务器之外的设备在腾讯云的内网 IP，并不代表此规则允许您访问这些设备，租户之间网络隔离规则优先于安全组中的内网规则。</li>
<li>SecurityGroupId 字段允许输入与待修改的安全组位于相同项目中的安全组 ID，包括这个安全组 ID 本身，代表安全组下所有云服务器的内网 IP。使用这个字段时，这条规则用来匹配网络报文的过程中会随着被使用的这个 ID 所关联的云服务器变化而变化，不需要重新修改。</li>
<li>Port 字段允许输入一个单独端口号，或者用减号分隔的两个端口号代表端口范围，例如80或8000-8010。只有当 Protocol 字段是 TCP 或 UDP 时，Port 字段才被接受，即 Protocol 字段不是 TCP 或 UDP 时，Protocol 和 Port 排他关系，不允许同时输入，否则会接口报错。</li>
<li>Action 字段只允许输入 ACCEPT 或 DROP。</li>
<li>CidrBlock, SecurityGroupId, AddressTemplate 是排他关系，不允许同时输入，Protocol + Port 和 ServiceTemplate 二者是排他关系，不允许同时输入。</li>
<li>一次请求中只能创建单个方向的规则, 如果需要指定索引（PolicyIndex）参数, 多条规则的索引必须一致。</li>
</ul></li></ul>
<p>默认接口请求频率限制：20次/秒。</p>
     */
    CreateSecurityGroupPolicies(req: CreateSecurityGroupPoliciesRequest, cb?: (error: string, rep: CreateSecurityGroupPoliciesResponse) => void): Promise<CreateSecurityGroupPoliciesResponse>;
    /**
     * 删除镜像
     */
    DeleteImage(req: DeleteImageRequest, cb?: (error: string, rep: DeleteImageResponse) => void): Promise<DeleteImageResponse>;
}
