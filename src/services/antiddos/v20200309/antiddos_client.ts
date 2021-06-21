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
  CreateDefaultAlarmThresholdRequest,
  DescribeListBGPIPInstancesResponse,
  DescribeBlackWhiteIpListResponse,
  ProxyTypeInfo,
  DescribeListSchedulingDomainRequest,
  CreateWaterPrintConfigRequest,
  DDoSGeoIPBlockConfig,
  CreateBlackWhiteIpListResponse,
  ModifyDDoSGeoIPBlockConfigRequest,
  DescribeListDDoSSpeedLimitConfigRequest,
  InstanceRelation,
  DescribeListProtocolBlockConfigResponse,
  DescribeListBGPInstancesRequest,
  DeleteDDoSSpeedLimitConfigRequest,
  CreatePacketFilterConfigResponse,
  DescribeListSchedulingDomainResponse,
  DescribeListPacketFilterConfigRequest,
  DescribeDefaultAlarmThresholdResponse,
  CreateDDoSAIRequest,
  DescribeListProtectThresholdConfigRequest,
  CreateWaterPrintConfigResponse,
  DescribeListBGPIPInstancesRequest,
  StaticPackRelation,
  DescribeListPacketFilterConfigResponse,
  DeleteBlackWhiteIpListResponse,
  CreateSchedulingDomainRequest,
  DisassociateDDoSEipAddressResponse,
  BGPIPInstance,
  DeleteBlackWhiteIpListRequest,
  SourceServer,
  ModifyDomainUsrNameResponse,
  CreateWaterPrintKeyRequest,
  BlackWhiteIpRelation,
  DeleteWaterPrintKeyResponse,
  EipAddressPackRelation,
  ProtocolBlockRelation,
  IPAlarmThresholdRelation,
  BGPIPInstanceUsages,
  ModifyPacketFilterConfigResponse,
  DescribeListDDoSGeoIPBlockConfigRequest,
  Layer7Rule,
  CreateDDoSSpeedLimitConfigRequest,
  CreateDDoSGeoIPBlockConfigRequest,
  CreateProtocolBlockConfigRequest,
  DeleteWaterPrintKeyRequest,
  AssociateDDoSEipAddressResponse,
  DDoSSpeedLimitConfigRelation,
  PackInfo,
  ModifyPacketFilterConfigRequest,
  DescribeBlackWhiteIpListRequest,
  ModifyDomainUsrNameRequest,
  CreateDDoSSpeedLimitConfigResponse,
  DeletePacketFilterConfigRequest,
  DescribeListDDoSGeoIPBlockConfigResponse,
  WaterPrintConfig,
  ProtocolBlockConfig,
  DescribeListListenerRequest,
  DeleteWaterPrintConfigResponse,
  Layer4Rule,
  DeletePacketFilterConfigResponse,
  CreateProtocolBlockConfigResponse,
  BGPIPInstanceSpecification,
  CreateIPAlarmThresholdConfigResponse,
  DeleteWaterPrintConfigRequest,
  DescribeListBlackWhiteIpListResponse,
  DDoSAIRelation,
  DescribeListDDoSSpeedLimitConfigResponse,
  CreateDDoSGeoIPBlockConfigResponse,
  ListenerCcThreholdConfig,
  IPLineInfo,
  EipAddressRelation,
  DescribeListListenerResponse,
  ProtectThresholdRelation,
  DDoSSpeedLimitConfig,
  DescribeListProtectThresholdConfigResponse,
  CreateDefaultAlarmThresholdResponse,
  DescribeListIPAlarmConfigResponse,
  DescribeListBGPInstancesResponse,
  DescribeListDDoSAIRequest,
  DescribeListIPAlarmConfigRequest,
  PortSegment,
  PacketFilterConfig,
  DefaultAlarmThreshold,
  ForwardListener,
  BGPInstanceSpecification,
  DisassociateDDoSEipAddressRequest,
  WaterPrintRelation,
  DescribeListDDoSAIResponse,
  ModifyDDoSSpeedLimitConfigRequest,
  AssociateDDoSEipAddressRequest,
  CreateBlackWhiteIpListRequest,
  SpeedValue,
  DeleteDDoSGeoIPBlockConfigRequest,
  CreateSchedulingDomainResponse,
  DescribeDefaultAlarmThresholdRequest,
  CreateDDoSAIResponse,
  DDoSGeoIPBlockConfigRelation,
  DescribeListProtocolBlockConfigRequest,
  RegionInfo,
  DescribeListWaterPrintConfigRequest,
  ModifyDDoSGeoIPBlockConfigResponse,
  BGPInstance,
  CreateIPAlarmThresholdConfigRequest,
  DescribeListWaterPrintConfigResponse,
  BGPInstanceUsages,
  DeleteDDoSSpeedLimitConfigResponse,
  CreateWaterPrintKeyResponse,
  DeleteDDoSGeoIPBlockConfigResponse,
  DescribeListBlackWhiteIpListRequest,
  ModifyDDoSSpeedLimitConfigResponse,
  SchedulingDomainInfo,
  EipProductInfo,
  WaterPrintKey,
  PacketFilterRelation,
  CreatePacketFilterConfigRequest,
} from "./antiddos_models"

/**
 * antiddos client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("antiddos.tencentcloudapi.com", "2020-03-09", clientConfig)
  }

  /**
   * 本接口 (AssociateDDoSEipAddress) 用于将高防弹性公网IP绑定到实例或弹性网卡的指定内网 IP 上。
   */
  async AssociateDDoSEipAddress(
    req: AssociateDDoSEipAddressRequest,
    cb?: (error: string, rep: AssociateDDoSEipAddressResponse) => void
  ): Promise<AssociateDDoSEipAddressResponse> {
    return this.request("AssociateDDoSEipAddress", req, cb)
  }

  /**
   * 修改智能解析域名名称
   */
  async ModifyDomainUsrName(
    req: ModifyDomainUsrNameRequest,
    cb?: (error: string, rep: ModifyDomainUsrNameResponse) => void
  ): Promise<ModifyDomainUsrNameResponse> {
    return this.request("ModifyDomainUsrName", req, cb)
  }

  /**
   * 获取DDoS防护的水印防护配置列表
   */
  async DescribeListWaterPrintConfig(
    req: DescribeListWaterPrintConfigRequest,
    cb?: (error: string, rep: DescribeListWaterPrintConfigResponse) => void
  ): Promise<DescribeListWaterPrintConfigResponse> {
    return this.request("DescribeListWaterPrintConfig", req, cb)
  }

  /**
   * 删除DDoS防护的访问限速配置
   */
  async DeleteDDoSSpeedLimitConfig(
    req: DeleteDDoSSpeedLimitConfigRequest,
    cb?: (error: string, rep: DeleteDDoSSpeedLimitConfigResponse) => void
  ): Promise<DeleteDDoSSpeedLimitConfigResponse> {
    return this.request("DeleteDDoSSpeedLimitConfig", req, cb)
  }

  /**
   * 修改DDoS防护的访问限速配置
   */
  async ModifyDDoSSpeedLimitConfig(
    req: ModifyDDoSSpeedLimitConfigRequest,
    cb?: (error: string, rep: ModifyDDoSSpeedLimitConfigResponse) => void
  ): Promise<ModifyDDoSSpeedLimitConfigResponse> {
    return this.request("ModifyDDoSSpeedLimitConfig", req, cb)
  }

  /**
   * 删除DDoS防护的区域封禁配置
   */
  async DeleteDDoSGeoIPBlockConfig(
    req: DeleteDDoSGeoIPBlockConfigRequest,
    cb?: (error: string, rep: DeleteDDoSGeoIPBlockConfigResponse) => void
  ): Promise<DeleteDDoSGeoIPBlockConfigResponse> {
    return this.request("DeleteDDoSGeoIPBlockConfig", req, cb)
  }

  /**
   * 修改DDoS防护的特征过滤规则
   */
  async ModifyPacketFilterConfig(
    req: ModifyPacketFilterConfigRequest,
    cb?: (error: string, rep: ModifyPacketFilterConfigResponse) => void
  ): Promise<ModifyPacketFilterConfigResponse> {
    return this.request("ModifyPacketFilterConfig", req, cb)
  }

  /**
   * 添加DDoS防护的特征过滤规则
   */
  async CreatePacketFilterConfig(
    req: CreatePacketFilterConfigRequest,
    cb?: (error: string, rep: CreatePacketFilterConfigResponse) => void
  ): Promise<CreatePacketFilterConfigResponse> {
    return this.request("CreatePacketFilterConfig", req, cb)
  }

  /**
   * 获取单IP告警阈值配置列表
   */
  async DescribeListIPAlarmConfig(
    req: DescribeListIPAlarmConfigRequest,
    cb?: (error: string, rep: DescribeListIPAlarmConfigResponse) => void
  ): Promise<DescribeListIPAlarmConfigResponse> {
    return this.request("DescribeListIPAlarmConfig", req, cb)
  }

  /**
     * 获取高防IP资产实例列表

     */
  async DescribeListBGPIPInstances(
    req: DescribeListBGPIPInstancesRequest,
    cb?: (error: string, rep: DescribeListBGPIPInstancesResponse) => void
  ): Promise<DescribeListBGPIPInstancesResponse> {
    return this.request("DescribeListBGPIPInstances", req, cb)
  }

  /**
   * 获取单IP默认告警阈值配置
   */
  async DescribeDefaultAlarmThreshold(
    req: DescribeDefaultAlarmThresholdRequest,
    cb?: (error: string, rep: DescribeDefaultAlarmThresholdResponse) => void
  ): Promise<DescribeDefaultAlarmThresholdResponse> {
    return this.request("DescribeDefaultAlarmThreshold", req, cb)
  }

  /**
   * 获取DDoS防护的IP黑白名单列表
   */
  async DescribeListBlackWhiteIpList(
    req: DescribeListBlackWhiteIpListRequest,
    cb?: (error: string, rep: DescribeListBlackWhiteIpListResponse) => void
  ): Promise<DescribeListBlackWhiteIpListResponse> {
    return this.request("DescribeListBlackWhiteIpList", req, cb)
  }

  /**
   * 获取DDoS防护的区域封禁配置列表
   */
  async DescribeListDDoSGeoIPBlockConfig(
    req: DescribeListDDoSGeoIPBlockConfigRequest,
    cb?: (error: string, rep: DescribeListDDoSGeoIPBlockConfigResponse) => void
  ): Promise<DescribeListDDoSGeoIPBlockConfigResponse> {
    return this.request("DescribeListDDoSGeoIPBlockConfig", req, cb)
  }

  /**
   * 本接口 (DisassociateDDoSEipAddress) 用于解绑高防弹性公网IP。
   */
  async DisassociateDDoSEipAddress(
    req: DisassociateDDoSEipAddressRequest,
    cb?: (error: string, rep: DisassociateDDoSEipAddressResponse) => void
  ): Promise<DisassociateDDoSEipAddressResponse> {
    return this.request("DisassociateDDoSEipAddress", req, cb)
  }

  /**
   * 获取智能调度域名列表
   */
  async DescribeListSchedulingDomain(
    req: DescribeListSchedulingDomainRequest,
    cb?: (error: string, rep: DescribeListSchedulingDomainResponse) => void
  ): Promise<DescribeListSchedulingDomainResponse> {
    return this.request("DescribeListSchedulingDomain", req, cb)
  }

  /**
   * 删除DDoS防护的水印防护密钥
   */
  async DeleteWaterPrintKey(
    req: DeleteWaterPrintKeyRequest,
    cb?: (error: string, rep: DeleteWaterPrintKeyResponse) => void
  ): Promise<DeleteWaterPrintKeyResponse> {
    return this.request("DeleteWaterPrintKey", req, cb)
  }

  /**
   * 设置单IP默认告警阈值配置
   */
  async CreateDefaultAlarmThreshold(
    req: CreateDefaultAlarmThresholdRequest,
    cb?: (error: string, rep: CreateDefaultAlarmThresholdResponse) => void
  ): Promise<CreateDefaultAlarmThresholdResponse> {
    return this.request("CreateDefaultAlarmThreshold", req, cb)
  }

  /**
   * 添加DDoS防护的水印防护配置
   */
  async CreateWaterPrintConfig(
    req: CreateWaterPrintConfigRequest,
    cb?: (error: string, rep: CreateWaterPrintConfigResponse) => void
  ): Promise<CreateWaterPrintConfigResponse> {
    return this.request("CreateWaterPrintConfig", req, cb)
  }

  /**
   * 获取DDoS防护的IP黑白名单
   */
  async DescribeBlackWhiteIpList(
    req: DescribeBlackWhiteIpListRequest,
    cb?: (error: string, rep: DescribeBlackWhiteIpListResponse) => void
  ): Promise<DescribeBlackWhiteIpListResponse> {
    return this.request("DescribeBlackWhiteIpList", req, cb)
  }

  /**
   * 获取DDoS防护的AI防护开关列表
   */
  async DescribeListDDoSAI(
    req: DescribeListDDoSAIRequest,
    cb?: (error: string, rep: DescribeListDDoSAIResponse) => void
  ): Promise<DescribeListDDoSAIResponse> {
    return this.request("DescribeListDDoSAI", req, cb)
  }

  /**
   * 设置单IP告警阈值配置
   */
  async CreateIPAlarmThresholdConfig(
    req: CreateIPAlarmThresholdConfigRequest,
    cb?: (error: string, rep: CreateIPAlarmThresholdConfigResponse) => void
  ): Promise<CreateIPAlarmThresholdConfigResponse> {
    return this.request("CreateIPAlarmThresholdConfig", req, cb)
  }

  /**
   * 获取DDoS防护的特征过滤规则列表
   */
  async DescribeListPacketFilterConfig(
    req: DescribeListPacketFilterConfigRequest,
    cb?: (error: string, rep: DescribeListPacketFilterConfigResponse) => void
  ): Promise<DescribeListPacketFilterConfigResponse> {
    return this.request("DescribeListPacketFilterConfig", req, cb)
  }

  /**
   * 获取DDoS防护的访问限速配置列表
   */
  async DescribeListDDoSSpeedLimitConfig(
    req: DescribeListDDoSSpeedLimitConfigRequest,
    cb?: (error: string, rep: DescribeListDDoSSpeedLimitConfigResponse) => void
  ): Promise<DescribeListDDoSSpeedLimitConfigResponse> {
    return this.request("DescribeListDDoSSpeedLimitConfig", req, cb)
  }

  /**
   * 获取防护阈值配置列表，包括DDoS的AI、等级、CC阈值开关等
   */
  async DescribeListProtectThresholdConfig(
    req: DescribeListProtectThresholdConfigRequest,
    cb?: (error: string, rep: DescribeListProtectThresholdConfigResponse) => void
  ): Promise<DescribeListProtectThresholdConfigResponse> {
    return this.request("DescribeListProtectThresholdConfig", req, cb)
  }

  /**
   * 添加DDoS防护的访问限速配置
   */
  async CreateDDoSSpeedLimitConfig(
    req: CreateDDoSSpeedLimitConfigRequest,
    cb?: (error: string, rep: CreateDDoSSpeedLimitConfigResponse) => void
  ): Promise<CreateDDoSSpeedLimitConfigResponse> {
    return this.request("CreateDDoSSpeedLimitConfig", req, cb)
  }

  /**
     * 获取高防包资产实例列表

     */
  async DescribeListBGPInstances(
    req: DescribeListBGPInstancesRequest,
    cb?: (error: string, rep: DescribeListBGPInstancesResponse) => void
  ): Promise<DescribeListBGPInstancesResponse> {
    return this.request("DescribeListBGPInstances", req, cb)
  }

  /**
   * 添加DDoS防护的IP黑白名单
   */
  async CreateBlackWhiteIpList(
    req: CreateBlackWhiteIpListRequest,
    cb?: (error: string, rep: CreateBlackWhiteIpListResponse) => void
  ): Promise<CreateBlackWhiteIpListResponse> {
    return this.request("CreateBlackWhiteIpList", req, cb)
  }

  /**
   * 删除DDoS防护的IP黑白名单
   */
  async DeleteBlackWhiteIpList(
    req: DeleteBlackWhiteIpListRequest,
    cb?: (error: string, rep: DeleteBlackWhiteIpListResponse) => void
  ): Promise<DeleteBlackWhiteIpListResponse> {
    return this.request("DeleteBlackWhiteIpList", req, cb)
  }

  /**
   * 添加DDoS防护的区域封禁配置
   */
  async CreateDDoSGeoIPBlockConfig(
    req: CreateDDoSGeoIPBlockConfigRequest,
    cb?: (error: string, rep: CreateDDoSGeoIPBlockConfigResponse) => void
  ): Promise<CreateDDoSGeoIPBlockConfigResponse> {
    return this.request("CreateDDoSGeoIPBlockConfig", req, cb)
  }

  /**
   * 删除DDoS防护的水印防护配置
   */
  async DeleteWaterPrintConfig(
    req: DeleteWaterPrintConfigRequest,
    cb?: (error: string, rep: DeleteWaterPrintConfigResponse) => void
  ): Promise<DeleteWaterPrintConfigResponse> {
    return this.request("DeleteWaterPrintConfig", req, cb)
  }

  /**
   * 设置DDoS防护的AI防护开关
   */
  async CreateDDoSAI(
    req: CreateDDoSAIRequest,
    cb?: (error: string, rep: CreateDDoSAIResponse) => void
  ): Promise<CreateDDoSAIResponse> {
    return this.request("CreateDDoSAI", req, cb)
  }

  /**
   * 删除DDoS防护的特征过滤规则
   */
  async DeletePacketFilterConfig(
    req: DeletePacketFilterConfigRequest,
    cb?: (error: string, rep: DeletePacketFilterConfigResponse) => void
  ): Promise<DeletePacketFilterConfigResponse> {
    return this.request("DeletePacketFilterConfig", req, cb)
  }

  /**
   * 获取DDoS防护的协议封禁配置列表
   */
  async DescribeListProtocolBlockConfig(
    req: DescribeListProtocolBlockConfigRequest,
    cb?: (error: string, rep: DescribeListProtocolBlockConfigResponse) => void
  ): Promise<DescribeListProtocolBlockConfigResponse> {
    return this.request("DescribeListProtocolBlockConfig", req, cb)
  }

  /**
   * 创建一个域名，可用于在封堵时调度切换IP
   */
  async CreateSchedulingDomain(
    req?: CreateSchedulingDomainRequest,
    cb?: (error: string, rep: CreateSchedulingDomainResponse) => void
  ): Promise<CreateSchedulingDomainResponse> {
    return this.request("CreateSchedulingDomain", req, cb)
  }

  /**
   * 添加DDoS防护的水印防护密钥
   */
  async CreateWaterPrintKey(
    req: CreateWaterPrintKeyRequest,
    cb?: (error: string, rep: CreateWaterPrintKeyResponse) => void
  ): Promise<CreateWaterPrintKeyResponse> {
    return this.request("CreateWaterPrintKey", req, cb)
  }

  /**
   * 设置DDoS防护的协议封禁配置
   */
  async CreateProtocolBlockConfig(
    req: CreateProtocolBlockConfigRequest,
    cb?: (error: string, rep: CreateProtocolBlockConfigResponse) => void
  ): Promise<CreateProtocolBlockConfigResponse> {
    return this.request("CreateProtocolBlockConfig", req, cb)
  }

  /**
   * 修改DDoS防护的区域封禁配置
   */
  async ModifyDDoSGeoIPBlockConfig(
    req: ModifyDDoSGeoIPBlockConfigRequest,
    cb?: (error: string, rep: ModifyDDoSGeoIPBlockConfigResponse) => void
  ): Promise<ModifyDDoSGeoIPBlockConfigResponse> {
    return this.request("ModifyDDoSGeoIPBlockConfig", req, cb)
  }

  /**
   * 获取转发监听器列表
   */
  async DescribeListListener(
    req?: DescribeListListenerRequest,
    cb?: (error: string, rep: DescribeListListenerResponse) => void
  ): Promise<DescribeListListenerResponse> {
    return this.request("DescribeListListener", req, cb)
  }
}
