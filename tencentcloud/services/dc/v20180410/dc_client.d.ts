import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeInternetAddressQuotaRequest, RejectDirectConnectTunnelRequest, CreateCloudAttachServiceResponse, CreateDirectConnectResponse, DescribeDirectConnectTunnelExtraRequest, DescribePublicDirectConnectTunnelRoutesRequest, DescribeAccessPointsResponse, DeleteDirectConnectTunnelRequest, AcceptDirectConnectTunnelRequest, ReleaseInternetAddressRequest, DescribeDirectConnectTunnelExtraResponse, ReleaseInternetAddressResponse, ModifyDirectConnectTunnelAttributeResponse, ApplyInternetAddressResponse, CreateDirectConnectTunnelRequest, DeleteDirectConnectResponse, ModifyDirectConnectTunnelExtraResponse, EnableInternetAddressResponse, ApplyInternetAddressRequest, CreateCloudAttachServiceRequest, DescribeDirectConnectsResponse, DescribeAccessPointsRequest, AcceptDirectConnectTunnelResponse, DescribeDirectConnectTunnelsRequest, ModifyDirectConnectAttributeRequest, DescribeInternetAddressResponse, ModifyDirectConnectTunnelAttributeRequest, DisableInternetAddressResponse, DescribeInternetAddressStatisticsRequest, CreateDirectConnectRequest, EnableInternetAddressRequest, ModifyDirectConnectAttributeResponse, ModifyDirectConnectTunnelExtraRequest, RejectDirectConnectTunnelResponse, CreateDirectConnectTunnelResponse, DescribeDirectConnectsRequest, DeleteDirectConnectTunnelResponse, DeleteDirectConnectRequest, DescribeDirectConnectTunnelsResponse, DescribeInternetAddressStatisticsResponse, DescribeInternetAddressRequest, DescribePublicDirectConnectTunnelRoutesResponse, DescribeInternetAddressQuotaResponse, DisableInternetAddressRequest } from "./dc_models";
/**
 * dc client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 修改专用通道扩展信息。
     */
    ModifyDirectConnectTunnelExtra(req: ModifyDirectConnectTunnelExtraRequest, cb?: (error: string, rep: ModifyDirectConnectTunnelExtraResponse) => void): Promise<ModifyDirectConnectTunnelExtraResponse>;
    /**
     * 获取用户互联网公网地址分配统计信息
     */
    DescribeInternetAddressStatistics(req?: DescribeInternetAddressStatisticsRequest, cb?: (error: string, rep: DescribeInternetAddressStatisticsResponse) => void): Promise<DescribeInternetAddressStatisticsResponse>;
    /**
     * 删除物理专线。只能删除处于已连接状态的物理专线。
     */
    DeleteDirectConnect(req: DeleteDirectConnectRequest, cb?: (error: string, rep: DeleteDirectConnectResponse) => void): Promise<DeleteDirectConnectResponse>;
    /**
     * 删除专用通道。
     */
    DeleteDirectConnectTunnel(req: DeleteDirectConnectTunnelRequest, cb?: (error: string, rep: DeleteDirectConnectTunnelResponse) => void): Promise<DeleteDirectConnectTunnelResponse>;
    /**
     * 申请物理专线接入。
调用该接口时，请注意：
账号要进行实名认证，否则不允许申请物理专线；
若账户下存在欠费状态的物理专线，则不能申请更多的物理专线。
     */
    CreateDirectConnect(req: CreateDirectConnectRequest, cb?: (error: string, rep: CreateDirectConnectResponse) => void): Promise<CreateDirectConnectResponse>;
    /**
     * 查询物理专线列表。
     */
    DescribeDirectConnects(req: DescribeDirectConnectsRequest, cb?: (error: string, rep: DescribeDirectConnectsResponse) => void): Promise<DescribeDirectConnectsResponse>;
    /**
     * 启用已停用的互联网公网地址
     */
    EnableInternetAddress(req: EnableInternetAddressRequest, cb?: (error: string, rep: EnableInternetAddressResponse) => void): Promise<EnableInternetAddressResponse>;
    /**
     * 修改物理专线的属性。
     */
    ModifyDirectConnectAttribute(req: ModifyDirectConnectAttributeRequest, cb?: (error: string, rep: ModifyDirectConnectAttributeResponse) => void): Promise<ModifyDirectConnectAttributeResponse>;
    /**
     * 查询专用通道扩展信息。
     */
    DescribeDirectConnectTunnelExtra(req: DescribeDirectConnectTunnelExtraRequest, cb?: (error: string, rep: DescribeDirectConnectTunnelExtraResponse) => void): Promise<DescribeDirectConnectTunnelExtraResponse>;
    /**
     * 停用用户申请的公网互联网地址
     */
    DisableInternetAddress(req: DisableInternetAddressRequest, cb?: (error: string, rep: DisableInternetAddressResponse) => void): Promise<DisableInternetAddressResponse>;
    /**
     * 查询互联网通道路由列表。
     */
    DescribePublicDirectConnectTunnelRoutes(req: DescribePublicDirectConnectTunnelRoutesRequest, cb?: (error: string, rep: DescribePublicDirectConnectTunnelRoutesResponse) => void): Promise<DescribePublicDirectConnectTunnelRoutesResponse>;
    /**
     * 创建专用通道。
     */
    CreateDirectConnectTunnel(req: CreateDirectConnectTunnelRequest, cb?: (error: string, rep: CreateDirectConnectTunnelResponse) => void): Promise<CreateDirectConnectTunnelResponse>;
    /**
     * 拒绝专用通道申请。
     */
    RejectDirectConnectTunnel(req: RejectDirectConnectTunnelRequest, cb?: (error: string, rep: RejectDirectConnectTunnelResponse) => void): Promise<RejectDirectConnectTunnelResponse>;
    /**
     * 申请互联网CIDR地址
     */
    ApplyInternetAddress(req: ApplyInternetAddressRequest, cb?: (error: string, rep: ApplyInternetAddressResponse) => void): Promise<ApplyInternetAddressResponse>;
    /**
     * 获取用户互联网公网地址配额
     */
    DescribeInternetAddressQuota(req?: DescribeInternetAddressQuotaRequest, cb?: (error: string, rep: DescribeInternetAddressQuotaResponse) => void): Promise<DescribeInternetAddressQuotaResponse>;
    /**
     * 查询专用通道列表。
     */
    DescribeDirectConnectTunnels(req: DescribeDirectConnectTunnelsRequest, cb?: (error: string, rep: DescribeDirectConnectTunnelsResponse) => void): Promise<DescribeDirectConnectTunnelsResponse>;
    /**
     * 查询物理专线接入点。
     */
    DescribeAccessPoints(req: DescribeAccessPointsRequest, cb?: (error: string, rep: DescribeAccessPointsResponse) => void): Promise<DescribeAccessPointsResponse>;
    /**
     * 创建敏捷上云服务
     */
    CreateCloudAttachService(req: CreateCloudAttachServiceRequest, cb?: (error: string, rep: CreateCloudAttachServiceResponse) => void): Promise<CreateCloudAttachServiceResponse>;
    /**
     * 修改专用通道属性。
     */
    ModifyDirectConnectTunnelAttribute(req: ModifyDirectConnectTunnelAttributeRequest, cb?: (error: string, rep: ModifyDirectConnectTunnelAttributeResponse) => void): Promise<ModifyDirectConnectTunnelAttributeResponse>;
    /**
     * 接受专用通道申请。
     */
    AcceptDirectConnectTunnel(req: AcceptDirectConnectTunnelRequest, cb?: (error: string, rep: AcceptDirectConnectTunnelResponse) => void): Promise<AcceptDirectConnectTunnelResponse>;
    /**
     * 获取用户互联网公网地址信息
     */
    DescribeInternetAddress(req: DescribeInternetAddressRequest, cb?: (error: string, rep: DescribeInternetAddressResponse) => void): Promise<DescribeInternetAddressResponse>;
    /**
     * 释放已申请的互联网地址
     */
    ReleaseInternetAddress(req: ReleaseInternetAddressRequest, cb?: (error: string, rep: ReleaseInternetAddressResponse) => void): Promise<ReleaseInternetAddressResponse>;
}
