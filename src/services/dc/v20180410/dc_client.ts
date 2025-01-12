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
  DescribeInternetAddressQuotaRequest,
  BgpPeer,
  DirectConnectTunnelRoute,
  RejectDirectConnectTunnelRequest,
  Coordinate,
  CreateCloudAttachServiceResponse,
  CreateDirectConnectResponse,
  DescribeDirectConnectTunnelExtraRequest,
  DescribePublicDirectConnectTunnelRoutesRequest,
  DirectConnect,
  InternetAddressDetail,
  DescribeAccessPointsResponse,
  DeleteDirectConnectTunnelRequest,
  AcceptDirectConnectTunnelRequest,
  ReleaseInternetAddressRequest,
  DescribeDirectConnectTunnelExtraResponse,
  ReleaseInternetAddressResponse,
  ModifyDirectConnectTunnelAttributeResponse,
  AccessPoint,
  ApplyInternetAddressResponse,
  BGPStatus,
  DirectConnectTunnelExtra,
  Tag,
  CreateDirectConnectTunnelRequest,
  DeleteDirectConnectResponse,
  ModifyDirectConnectTunnelExtraResponse,
  EnableInternetAddressResponse,
  ApplyInternetAddressRequest,
  CreateCloudAttachServiceRequest,
  DescribeDirectConnectsResponse,
  DescribeAccessPointsRequest,
  AcceptDirectConnectTunnelResponse,
  DescribeDirectConnectTunnelsRequest,
  ModifyDirectConnectAttributeRequest,
  DescribeInternetAddressResponse,
  ModifyDirectConnectTunnelAttributeRequest,
  Filter,
  DisableInternetAddressResponse,
  DescribeInternetAddressStatisticsRequest,
  InternetAddressStatistics,
  CreateDirectConnectRequest,
  EnableInternetAddressRequest,
  ModifyDirectConnectAttributeResponse,
  ModifyDirectConnectTunnelExtraRequest,
  RejectDirectConnectTunnelResponse,
  CreateDirectConnectTunnelResponse,
  DescribeDirectConnectsRequest,
  DeleteDirectConnectTunnelResponse,
  BFDInfo,
  DeleteDirectConnectRequest,
  DescribeDirectConnectTunnelsResponse,
  CloudAttachInfo,
  RouteFilterPrefix,
  PortSpecification,
  DescribeInternetAddressStatisticsResponse,
  NQAInfo,
  DescribeInternetAddressRequest,
  DescribePublicDirectConnectTunnelRoutesResponse,
  DescribeInternetAddressQuotaResponse,
  CreateCasInput,
  DirectConnectTunnel,
  DisableInternetAddressRequest,
} from "./dc_models"

/**
 * dc client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("dc.tencentcloudapi.com", "2018-04-10", clientConfig)
  }

  /**
   * 修改专用通道扩展信息。
   */
  async ModifyDirectConnectTunnelExtra(
    req: ModifyDirectConnectTunnelExtraRequest,
    cb?: (error: string, rep: ModifyDirectConnectTunnelExtraResponse) => void
  ): Promise<ModifyDirectConnectTunnelExtraResponse> {
    return this.request("ModifyDirectConnectTunnelExtra", req, cb)
  }

  /**
   * 获取用户互联网公网地址分配统计信息
   */
  async DescribeInternetAddressStatistics(
    req?: DescribeInternetAddressStatisticsRequest,
    cb?: (error: string, rep: DescribeInternetAddressStatisticsResponse) => void
  ): Promise<DescribeInternetAddressStatisticsResponse> {
    return this.request("DescribeInternetAddressStatistics", req, cb)
  }

  /**
   * 删除物理专线。只能删除处于已连接状态的物理专线。
   */
  async DeleteDirectConnect(
    req: DeleteDirectConnectRequest,
    cb?: (error: string, rep: DeleteDirectConnectResponse) => void
  ): Promise<DeleteDirectConnectResponse> {
    return this.request("DeleteDirectConnect", req, cb)
  }

  /**
   * 删除专用通道。
   */
  async DeleteDirectConnectTunnel(
    req: DeleteDirectConnectTunnelRequest,
    cb?: (error: string, rep: DeleteDirectConnectTunnelResponse) => void
  ): Promise<DeleteDirectConnectTunnelResponse> {
    return this.request("DeleteDirectConnectTunnel", req, cb)
  }

  /**
     * 申请物理专线接入。
调用该接口时，请注意：
账号要进行实名认证，否则不允许申请物理专线；
若账户下存在欠费状态的物理专线，则不能申请更多的物理专线。
     */
  async CreateDirectConnect(
    req: CreateDirectConnectRequest,
    cb?: (error: string, rep: CreateDirectConnectResponse) => void
  ): Promise<CreateDirectConnectResponse> {
    return this.request("CreateDirectConnect", req, cb)
  }

  /**
   * 查询物理专线列表。
   */
  async DescribeDirectConnects(
    req: DescribeDirectConnectsRequest,
    cb?: (error: string, rep: DescribeDirectConnectsResponse) => void
  ): Promise<DescribeDirectConnectsResponse> {
    return this.request("DescribeDirectConnects", req, cb)
  }

  /**
   * 启用已停用的互联网公网地址
   */
  async EnableInternetAddress(
    req: EnableInternetAddressRequest,
    cb?: (error: string, rep: EnableInternetAddressResponse) => void
  ): Promise<EnableInternetAddressResponse> {
    return this.request("EnableInternetAddress", req, cb)
  }

  /**
   * 修改物理专线的属性。
   */
  async ModifyDirectConnectAttribute(
    req: ModifyDirectConnectAttributeRequest,
    cb?: (error: string, rep: ModifyDirectConnectAttributeResponse) => void
  ): Promise<ModifyDirectConnectAttributeResponse> {
    return this.request("ModifyDirectConnectAttribute", req, cb)
  }

  /**
   * 查询专用通道扩展信息。
   */
  async DescribeDirectConnectTunnelExtra(
    req: DescribeDirectConnectTunnelExtraRequest,
    cb?: (error: string, rep: DescribeDirectConnectTunnelExtraResponse) => void
  ): Promise<DescribeDirectConnectTunnelExtraResponse> {
    return this.request("DescribeDirectConnectTunnelExtra", req, cb)
  }

  /**
   * 停用用户申请的公网互联网地址
   */
  async DisableInternetAddress(
    req: DisableInternetAddressRequest,
    cb?: (error: string, rep: DisableInternetAddressResponse) => void
  ): Promise<DisableInternetAddressResponse> {
    return this.request("DisableInternetAddress", req, cb)
  }

  /**
   * 查询互联网通道路由列表。
   */
  async DescribePublicDirectConnectTunnelRoutes(
    req: DescribePublicDirectConnectTunnelRoutesRequest,
    cb?: (error: string, rep: DescribePublicDirectConnectTunnelRoutesResponse) => void
  ): Promise<DescribePublicDirectConnectTunnelRoutesResponse> {
    return this.request("DescribePublicDirectConnectTunnelRoutes", req, cb)
  }

  /**
   * 创建专用通道。
   */
  async CreateDirectConnectTunnel(
    req: CreateDirectConnectTunnelRequest,
    cb?: (error: string, rep: CreateDirectConnectTunnelResponse) => void
  ): Promise<CreateDirectConnectTunnelResponse> {
    return this.request("CreateDirectConnectTunnel", req, cb)
  }

  /**
   * 拒绝专用通道申请。
   */
  async RejectDirectConnectTunnel(
    req: RejectDirectConnectTunnelRequest,
    cb?: (error: string, rep: RejectDirectConnectTunnelResponse) => void
  ): Promise<RejectDirectConnectTunnelResponse> {
    return this.request("RejectDirectConnectTunnel", req, cb)
  }

  /**
   * 申请互联网CIDR地址
   */
  async ApplyInternetAddress(
    req: ApplyInternetAddressRequest,
    cb?: (error: string, rep: ApplyInternetAddressResponse) => void
  ): Promise<ApplyInternetAddressResponse> {
    return this.request("ApplyInternetAddress", req, cb)
  }

  /**
   * 获取用户互联网公网地址配额
   */
  async DescribeInternetAddressQuota(
    req?: DescribeInternetAddressQuotaRequest,
    cb?: (error: string, rep: DescribeInternetAddressQuotaResponse) => void
  ): Promise<DescribeInternetAddressQuotaResponse> {
    return this.request("DescribeInternetAddressQuota", req, cb)
  }

  /**
   * 查询专用通道列表。
   */
  async DescribeDirectConnectTunnels(
    req: DescribeDirectConnectTunnelsRequest,
    cb?: (error: string, rep: DescribeDirectConnectTunnelsResponse) => void
  ): Promise<DescribeDirectConnectTunnelsResponse> {
    return this.request("DescribeDirectConnectTunnels", req, cb)
  }

  /**
   * 查询物理专线接入点。
   */
  async DescribeAccessPoints(
    req: DescribeAccessPointsRequest,
    cb?: (error: string, rep: DescribeAccessPointsResponse) => void
  ): Promise<DescribeAccessPointsResponse> {
    return this.request("DescribeAccessPoints", req, cb)
  }

  /**
   * 创建敏捷上云服务
   */
  async CreateCloudAttachService(
    req: CreateCloudAttachServiceRequest,
    cb?: (error: string, rep: CreateCloudAttachServiceResponse) => void
  ): Promise<CreateCloudAttachServiceResponse> {
    return this.request("CreateCloudAttachService", req, cb)
  }

  /**
   * 修改专用通道属性。
   */
  async ModifyDirectConnectTunnelAttribute(
    req: ModifyDirectConnectTunnelAttributeRequest,
    cb?: (error: string, rep: ModifyDirectConnectTunnelAttributeResponse) => void
  ): Promise<ModifyDirectConnectTunnelAttributeResponse> {
    return this.request("ModifyDirectConnectTunnelAttribute", req, cb)
  }

  /**
   * 接受专用通道申请。
   */
  async AcceptDirectConnectTunnel(
    req: AcceptDirectConnectTunnelRequest,
    cb?: (error: string, rep: AcceptDirectConnectTunnelResponse) => void
  ): Promise<AcceptDirectConnectTunnelResponse> {
    return this.request("AcceptDirectConnectTunnel", req, cb)
  }

  /**
   * 获取用户互联网公网地址信息
   */
  async DescribeInternetAddress(
    req: DescribeInternetAddressRequest,
    cb?: (error: string, rep: DescribeInternetAddressResponse) => void
  ): Promise<DescribeInternetAddressResponse> {
    return this.request("DescribeInternetAddress", req, cb)
  }

  /**
   * 释放已申请的互联网地址
   */
  async ReleaseInternetAddress(
    req: ReleaseInternetAddressRequest,
    cb?: (error: string, rep: ReleaseInternetAddressResponse) => void
  ): Promise<ReleaseInternetAddressResponse> {
    return this.request("ReleaseInternetAddress", req, cb)
  }
}
