import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeDedicatedClusterInstanceTypesResponse, DescribeDedicatedClustersRequest, DescribeDedicatedClusterTypesResponse, DeleteSitesRequest, DescribeDedicatedClusterOverviewResponse, DescribeSitesRequest, DescribeDedicatedClusterTypesRequest, CreateSiteResponse, DescribeDedicatedSupportedZonesResponse, ModifySiteInfoResponse, CreateDedicatedClusterOrderRequest, ModifyOrderStatusRequest, CreateSiteRequest, DescribeDedicatedSupportedZonesRequest, ModifyOrderStatusResponse, DescribeDedicatedClusterCosCapacityRequest, DescribeSitesResponse, DescribeSitesDetailRequest, ModifyDedicatedClusterInfoRequest, DescribeDedicatedClusterCbsStatisticsRequest, DescribeDedicatedClusterHostsRequest, CreateDedicatedClusterOrderResponse, DescribeDedicatedClusterCosCapacityResponse, CreateDedicatedClusterResponse, DescribeSitesDetailResponse, DescribeDedicatedClusterOrdersRequest, DescribeDedicatedClustersResponse, ModifySiteDeviceInfoResponse, DescribeDedicatedClusterCbsStatisticsResponse, DescribeDedicatedClusterHostsResponse, DescribeDedicatedClusterInstanceTypesRequest, ModifyDedicatedClusterInfoResponse, ModifySiteInfoRequest, DeleteSitesResponse, ModifySiteDeviceInfoRequest, DescribeDedicatedClusterHostStatisticsResponse, CreateDedicatedClusterRequest, DescribeDedicatedClusterOrdersResponse, DescribeDedicatedClusterHostStatisticsRequest, DescribeDedicatedClusterOverviewRequest, DeleteDedicatedClustersRequest, DeleteDedicatedClustersResponse } from "./cdc_models";
/**
 * cdc client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 修改机房设备信息
     */
    ModifySiteDeviceInfo(req: ModifySiteDeviceInfoRequest, cb?: (error: string, rep: ModifySiteDeviceInfoResponse) => void): Promise<ModifySiteDeviceInfoResponse>;
    /**
     * 创建专用集群订单
     */
    CreateDedicatedClusterOrder(req: CreateDedicatedClusterOrderRequest, cb?: (error: string, rep: CreateDedicatedClusterOrderResponse) => void): Promise<CreateDedicatedClusterOrderResponse>;
    /**
     * 删除专用集群
     */
    DeleteDedicatedClusters(req: DeleteDedicatedClustersRequest, cb?: (error: string, rep: DeleteDedicatedClustersResponse) => void): Promise<DeleteDedicatedClustersResponse>;
    /**
     * 修改机房信息
     */
    ModifySiteInfo(req: ModifySiteInfoRequest, cb?: (error: string, rep: ModifySiteInfoResponse) => void): Promise<ModifySiteInfoResponse>;
    /**
     * 查询专用集群内宿主机的统计信息
     */
    DescribeDedicatedClusterHostStatistics(req: DescribeDedicatedClusterHostStatisticsRequest, cb?: (error: string, rep: DescribeDedicatedClusterHostStatisticsResponse) => void): Promise<DescribeDedicatedClusterHostStatisticsResponse>;
    /**
     * 修改本地专用集群信息
     */
    ModifyDedicatedClusterInfo(req: ModifyDedicatedClusterInfoRequest, cb?: (error: string, rep: ModifyDedicatedClusterInfoResponse) => void): Promise<ModifyDedicatedClusterInfoResponse>;
    /**
     * 查询站点列表
     */
    DescribeSites(req: DescribeSitesRequest, cb?: (error: string, rep: DescribeSitesResponse) => void): Promise<DescribeSitesResponse>;
    /**
     * 查询专用集群订单列表
     */
    DescribeDedicatedClusterOrders(req: DescribeDedicatedClusterOrdersRequest, cb?: (error: string, rep: DescribeDedicatedClusterOrdersResponse) => void): Promise<DescribeDedicatedClusterOrdersResponse>;
    /**
     * 修改大订单、小订单的状态
     */
    ModifyOrderStatus(req: ModifyOrderStatusRequest, cb?: (error: string, rep: ModifyOrderStatusResponse) => void): Promise<ModifyOrderStatusResponse>;
    /**
     * 创建专用集群
     */
    CreateDedicatedCluster(req: CreateDedicatedClusterRequest, cb?: (error: string, rep: CreateDedicatedClusterResponse) => void): Promise<CreateDedicatedClusterResponse>;
    /**
     * 查询专用集群列表
     */
    DescribeDedicatedClusters(req: DescribeDedicatedClustersRequest, cb?: (error: string, rep: DescribeDedicatedClustersResponse) => void): Promise<DescribeDedicatedClustersResponse>;
    /**
     * 查询专用集群宿主机信息
     */
    DescribeDedicatedClusterHosts(req: DescribeDedicatedClusterHostsRequest, cb?: (error: string, rep: DescribeDedicatedClusterHostsResponse) => void): Promise<DescribeDedicatedClusterHostsResponse>;
    /**
     * 查询专用集群支持的可用区列表
     */
    DescribeDedicatedSupportedZones(req: DescribeDedicatedSupportedZonesRequest, cb?: (error: string, rep: DescribeDedicatedSupportedZonesResponse) => void): Promise<DescribeDedicatedSupportedZonesResponse>;
    /**
     * 查询本地专用集群云硬盘仓库信息
     */
    DescribeDedicatedClusterCbsStatistics(req: DescribeDedicatedClusterCbsStatisticsRequest, cb?: (error: string, rep: DescribeDedicatedClusterCbsStatisticsResponse) => void): Promise<DescribeDedicatedClusterCbsStatisticsResponse>;
    /**
     * 查询专用集群概览信息
     */
    DescribeDedicatedClusterOverview(req: DescribeDedicatedClusterOverviewRequest, cb?: (error: string, rep: DescribeDedicatedClusterOverviewResponse) => void): Promise<DescribeDedicatedClusterOverviewResponse>;
    /**
     * 删除站点
     */
    DeleteSites(req: DeleteSitesRequest, cb?: (error: string, rep: DeleteSitesResponse) => void): Promise<DeleteSitesResponse>;
    /**
     * 查询站点详情
     */
    DescribeSitesDetail(req: DescribeSitesDetailRequest, cb?: (error: string, rep: DescribeSitesDetailResponse) => void): Promise<DescribeSitesDetailResponse>;
    /**
     * 查询专用集群内cos的容量信息
     */
    DescribeDedicatedClusterCosCapacity(req: DescribeDedicatedClusterCosCapacityRequest, cb?: (error: string, rep: DescribeDedicatedClusterCosCapacityResponse) => void): Promise<DescribeDedicatedClusterCosCapacityResponse>;
    /**
     * 查询专用集群支持的实例规格列表
     */
    DescribeDedicatedClusterInstanceTypes(req: DescribeDedicatedClusterInstanceTypesRequest, cb?: (error: string, rep: DescribeDedicatedClusterInstanceTypesResponse) => void): Promise<DescribeDedicatedClusterInstanceTypesResponse>;
    /**
     * 查询专有集群配置列表
     */
    DescribeDedicatedClusterTypes(req: DescribeDedicatedClusterTypesRequest, cb?: (error: string, rep: DescribeDedicatedClusterTypesResponse) => void): Promise<DescribeDedicatedClusterTypesResponse>;
    /**
     * 创建站点
     */
    CreateSite(req: CreateSiteRequest, cb?: (error: string, rep: CreateSiteResponse) => void): Promise<CreateSiteResponse>;
}
