/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  DescribeDedicatedClusterInstanceTypesResponse,
  DescribeDedicatedClustersRequest,
  DescribeDedicatedClusterTypesResponse,
  DedicatedClusterInstanceType,
  DedicatedClusterType,
  DeleteSitesRequest,
  CosInfo,
  ZoneInfo,
  DescribeDedicatedClusterOverviewResponse,
  DescribeSitesRequest,
  DescribeDedicatedClusterTypesRequest,
  CreateSiteResponse,
  DescribeDedicatedSupportedZonesResponse,
  ModifySiteInfoResponse,
  CreateDedicatedClusterOrderRequest,
  ModifyOrderStatusRequest,
  DedicatedClusterOrderItem,
  CreateSiteRequest,
  DescribeDedicatedSupportedZonesRequest,
  DedicatedClusterTypeInfo,
  ModifyOrderStatusResponse,
  SetInfo,
  InBandwidth,
  DescribeDedicatedClusterCosCapacityRequest,
  VpngwBandwidthData,
  DescribeSitesResponse,
  DescribeSitesDetailRequest,
  DetailData,
  DedicatedClusterOrder,
  ModifyDedicatedClusterInfoRequest,
  DescribeDedicatedClusterCbsStatisticsRequest,
  DescribeDedicatedClusterHostsRequest,
  CreateDedicatedClusterOrderResponse,
  DescribeDedicatedClusterCosCapacityResponse,
  RegionZoneInfo,
  CreateDedicatedClusterResponse,
  DedicatedCluster,
  DescribeSitesDetailResponse,
  DescribeDedicatedClusterOrdersRequest,
  DescribeDedicatedClustersResponse,
  HostStatistic,
  HostDetailInfo,
  CbsInfo,
  ModifySiteDeviceInfoResponse,
  DescribeDedicatedClusterCbsStatisticsResponse,
  DescribeDedicatedClusterHostsResponse,
  LocalNetInfo,
  DescribeDedicatedClusterInstanceTypesRequest,
  ModifyDedicatedClusterInfoResponse,
  ModifySiteInfoRequest,
  SiteDetail,
  DeleteSitesResponse,
  CosCapacity,
  HostInfo,
  ModifySiteDeviceInfoRequest,
  DescribeDedicatedClusterHostStatisticsResponse,
  Site,
  CreateDedicatedClusterRequest,
  DescribeDedicatedClusterOrdersResponse,
  DescribeDedicatedClusterHostStatisticsRequest,
  OutBandwidth,
  DescribeDedicatedClusterOverviewRequest,
  DeleteDedicatedClustersRequest,
  DeleteDedicatedClustersResponse,
} from "./cdc_models"

/**
 * cdc client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cdc.tencentcloudapi.com", "2020-12-14", clientConfig)
  }

  /**
   * 修改机房设备信息
   */
  async ModifySiteDeviceInfo(
    req: ModifySiteDeviceInfoRequest,
    cb?: (error: string, rep: ModifySiteDeviceInfoResponse) => void
  ): Promise<ModifySiteDeviceInfoResponse> {
    return this.request("ModifySiteDeviceInfo", req, cb)
  }

  /**
   * 创建专用集群订单
   */
  async CreateDedicatedClusterOrder(
    req: CreateDedicatedClusterOrderRequest,
    cb?: (error: string, rep: CreateDedicatedClusterOrderResponse) => void
  ): Promise<CreateDedicatedClusterOrderResponse> {
    return this.request("CreateDedicatedClusterOrder", req, cb)
  }

  /**
   * 删除专用集群
   */
  async DeleteDedicatedClusters(
    req: DeleteDedicatedClustersRequest,
    cb?: (error: string, rep: DeleteDedicatedClustersResponse) => void
  ): Promise<DeleteDedicatedClustersResponse> {
    return this.request("DeleteDedicatedClusters", req, cb)
  }

  /**
   * 修改机房信息
   */
  async ModifySiteInfo(
    req: ModifySiteInfoRequest,
    cb?: (error: string, rep: ModifySiteInfoResponse) => void
  ): Promise<ModifySiteInfoResponse> {
    return this.request("ModifySiteInfo", req, cb)
  }

  /**
   * 查询专用集群内宿主机的统计信息
   */
  async DescribeDedicatedClusterHostStatistics(
    req: DescribeDedicatedClusterHostStatisticsRequest,
    cb?: (error: string, rep: DescribeDedicatedClusterHostStatisticsResponse) => void
  ): Promise<DescribeDedicatedClusterHostStatisticsResponse> {
    return this.request("DescribeDedicatedClusterHostStatistics", req, cb)
  }

  /**
   * 修改本地专用集群信息
   */
  async ModifyDedicatedClusterInfo(
    req: ModifyDedicatedClusterInfoRequest,
    cb?: (error: string, rep: ModifyDedicatedClusterInfoResponse) => void
  ): Promise<ModifyDedicatedClusterInfoResponse> {
    return this.request("ModifyDedicatedClusterInfo", req, cb)
  }

  /**
   * 查询站点列表
   */
  async DescribeSites(
    req: DescribeSitesRequest,
    cb?: (error: string, rep: DescribeSitesResponse) => void
  ): Promise<DescribeSitesResponse> {
    return this.request("DescribeSites", req, cb)
  }

  /**
   * 查询专用集群订单列表
   */
  async DescribeDedicatedClusterOrders(
    req: DescribeDedicatedClusterOrdersRequest,
    cb?: (error: string, rep: DescribeDedicatedClusterOrdersResponse) => void
  ): Promise<DescribeDedicatedClusterOrdersResponse> {
    return this.request("DescribeDedicatedClusterOrders", req, cb)
  }

  /**
   * 修改大订单、小订单的状态
   */
  async ModifyOrderStatus(
    req: ModifyOrderStatusRequest,
    cb?: (error: string, rep: ModifyOrderStatusResponse) => void
  ): Promise<ModifyOrderStatusResponse> {
    return this.request("ModifyOrderStatus", req, cb)
  }

  /**
   * 创建专用集群
   */
  async CreateDedicatedCluster(
    req: CreateDedicatedClusterRequest,
    cb?: (error: string, rep: CreateDedicatedClusterResponse) => void
  ): Promise<CreateDedicatedClusterResponse> {
    return this.request("CreateDedicatedCluster", req, cb)
  }

  /**
   * 查询专用集群列表
   */
  async DescribeDedicatedClusters(
    req: DescribeDedicatedClustersRequest,
    cb?: (error: string, rep: DescribeDedicatedClustersResponse) => void
  ): Promise<DescribeDedicatedClustersResponse> {
    return this.request("DescribeDedicatedClusters", req, cb)
  }

  /**
   * 查询专用集群宿主机信息
   */
  async DescribeDedicatedClusterHosts(
    req: DescribeDedicatedClusterHostsRequest,
    cb?: (error: string, rep: DescribeDedicatedClusterHostsResponse) => void
  ): Promise<DescribeDedicatedClusterHostsResponse> {
    return this.request("DescribeDedicatedClusterHosts", req, cb)
  }

  /**
   * 查询专用集群支持的可用区列表
   */
  async DescribeDedicatedSupportedZones(
    req: DescribeDedicatedSupportedZonesRequest,
    cb?: (error: string, rep: DescribeDedicatedSupportedZonesResponse) => void
  ): Promise<DescribeDedicatedSupportedZonesResponse> {
    return this.request("DescribeDedicatedSupportedZones", req, cb)
  }

  /**
   * 查询本地专用集群云硬盘仓库信息
   */
  async DescribeDedicatedClusterCbsStatistics(
    req: DescribeDedicatedClusterCbsStatisticsRequest,
    cb?: (error: string, rep: DescribeDedicatedClusterCbsStatisticsResponse) => void
  ): Promise<DescribeDedicatedClusterCbsStatisticsResponse> {
    return this.request("DescribeDedicatedClusterCbsStatistics", req, cb)
  }

  /**
   * 查询专用集群概览信息
   */
  async DescribeDedicatedClusterOverview(
    req: DescribeDedicatedClusterOverviewRequest,
    cb?: (error: string, rep: DescribeDedicatedClusterOverviewResponse) => void
  ): Promise<DescribeDedicatedClusterOverviewResponse> {
    return this.request("DescribeDedicatedClusterOverview", req, cb)
  }

  /**
   * 删除站点
   */
  async DeleteSites(
    req: DeleteSitesRequest,
    cb?: (error: string, rep: DeleteSitesResponse) => void
  ): Promise<DeleteSitesResponse> {
    return this.request("DeleteSites", req, cb)
  }

  /**
   * 查询站点详情
   */
  async DescribeSitesDetail(
    req: DescribeSitesDetailRequest,
    cb?: (error: string, rep: DescribeSitesDetailResponse) => void
  ): Promise<DescribeSitesDetailResponse> {
    return this.request("DescribeSitesDetail", req, cb)
  }

  /**
   * 查询专用集群内cos的容量信息
   */
  async DescribeDedicatedClusterCosCapacity(
    req: DescribeDedicatedClusterCosCapacityRequest,
    cb?: (error: string, rep: DescribeDedicatedClusterCosCapacityResponse) => void
  ): Promise<DescribeDedicatedClusterCosCapacityResponse> {
    return this.request("DescribeDedicatedClusterCosCapacity", req, cb)
  }

  /**
   * 查询专用集群支持的实例规格列表
   */
  async DescribeDedicatedClusterInstanceTypes(
    req: DescribeDedicatedClusterInstanceTypesRequest,
    cb?: (error: string, rep: DescribeDedicatedClusterInstanceTypesResponse) => void
  ): Promise<DescribeDedicatedClusterInstanceTypesResponse> {
    return this.request("DescribeDedicatedClusterInstanceTypes", req, cb)
  }

  /**
   * 查询专有集群配置列表
   */
  async DescribeDedicatedClusterTypes(
    req: DescribeDedicatedClusterTypesRequest,
    cb?: (error: string, rep: DescribeDedicatedClusterTypesResponse) => void
  ): Promise<DescribeDedicatedClusterTypesResponse> {
    return this.request("DescribeDedicatedClusterTypes", req, cb)
  }

  /**
   * 创建站点
   */
  async CreateSite(
    req: CreateSiteRequest,
    cb?: (error: string, rep: CreateSiteResponse) => void
  ): Promise<CreateSiteResponse> {
    return this.request("CreateSite", req, cb)
  }
}
