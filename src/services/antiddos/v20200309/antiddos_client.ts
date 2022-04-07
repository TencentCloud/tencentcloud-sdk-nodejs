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
  DescribeDDoSConnectLimitListRequest,
  DescribeListBGPIPInstancesResponse,
  DescribeBlackWhiteIpListResponse,
  PacketFilterConfig,
  DeleteCCLevelPolicyRequest,
  ProxyTypeInfo,
  CreateBoundIPRequest,
  CCReqLimitPolicyRecord,
  DescribeListSchedulingDomainRequest,
  CreateWaterPrintConfigRequest,
  DDoSGeoIPBlockConfig,
  CreateBlackWhiteIpListResponse,
  IPAlarmThresholdRelation,
  DeleteCCRequestLimitPolicyRequest,
  DescribeL7RulesBySSLCertIdResponse,
  DescribeDDoSBlackWhiteIpListResponse,
  InstanceRelation,
  ModifyNewDomainRulesRequest,
  RegionInfo,
  DescribeListProtocolBlockConfigResponse,
  DescribeListBGPInstancesRequest,
  KeyValue,
  ModifyCcBlackWhiteIpListRequest,
  DeleteDDoSSpeedLimitConfigRequest,
  CreatePacketFilterConfigResponse,
  CreateCCReqLimitPolicyResponse,
  DescribeListWaterPrintConfigRequest,
  CreateL7RuleCertsRequest,
  CreateCCPrecisionPolicyResponse,
  DeleteCcGeoIPBlockConfigResponse,
  DeleteDDoSGeoIPBlockConfigRequest,
  ModifyDDoSGeoIPBlockConfigResponse,
  DescribeCcBlackWhiteIpListResponse,
  ModifyCCLevelPolicyResponse,
  CreateIPAlarmThresholdConfigRequest,
  CreateCcBlackWhiteIpListResponse,
  DescribeDefaultAlarmThresholdResponse,
  CreateDDoSAIRequest,
  DescribeListProtectThresholdConfigRequest,
  ModifyNewDomainRulesResponse,
  CcBlackWhiteIpPolicy,
  DescribeDDoSConnectLimitListResponse,
  ModifyPacketFilterConfigResponse,
  DescribeCCLevelPolicyRequest,
  CreateWaterPrintConfigResponse,
  ModifyPortAclConfigRequest,
  DescribeListBGPIPInstancesRequest,
  StaticPackRelation,
  CreatePortAclConfigRequest,
  DescribeCCThresholdListResponse,
  DescribeL7RulesBySSLCertIdRequest,
  DescribeListPacketFilterConfigResponse,
  DeleteBlackWhiteIpListResponse,
  CreateSchedulingDomainRequest,
  BoundIpInfo,
  CreateDDoSBlackWhiteIpListRequest,
  ModifyCCReqLimitPolicyRequest,
  DisassociateDDoSEipAddressResponse,
  DeleteCCThresholdPolicyResponse,
  DeleteBlackWhiteIpListRequest,
  SourceServer,
  CCLevelPolicy,
  ModifyCcBlackWhiteIpListResponse,
  CreatePortAclConfigListRequest,
  AclConfig,
  DisassociateDDoSEipAddressRequest,
  SwitchWaterPrintConfigResponse,
  BlackWhiteIpRelation,
  DeleteWaterPrintKeyResponse,
  EipAddressPackRelation,
  CreateDDoSBlackWhiteIpListResponse,
  ProtocolBlockRelation,
  DescribeListPacketFilterConfigRequest,
  BGPIPInstanceUsages,
  ModifyDDoSBlackWhiteIpListRequest,
  DescribeListDDoSGeoIPBlockConfigRequest,
  CreateCcGeoIPBlockConfigResponse,
  ModifyDDoSGeoIPBlockConfigRequest,
  Layer7Rule,
  ModifyPortAclConfigResponse,
  DescribeBasicDeviceStatusRequest,
  DeleteCcGeoIPBlockConfigRequest,
  DescribeCCLevelListResponse,
  CreateDDoSSpeedLimitConfigRequest,
  CreateDDoSGeoIPBlockConfigRequest,
  CreateProtocolBlockConfigRequest,
  DeleteWaterPrintKeyRequest,
  SuccessCode,
  AssociateDDoSEipAddressResponse,
  DDoSSpeedLimitConfigRelation,
  DeleteCCLevelPolicyResponse,
  ModifyPacketFilterConfigRequest,
  DescribeBlackWhiteIpListRequest,
  CreateCcGeoIPBlockConfigRequest,
  DeletePortAclConfigResponse,
  CreateDDoSSpeedLimitConfigResponse,
  DeletePacketFilterConfigRequest,
  ModifyL7RulesEdgeRequest,
  DescribeListDDoSGeoIPBlockConfigResponse,
  DescribeBasicDeviceStatusResponse,
  WaterPrintConfig,
  L4RuleSource,
  ProtocolBlockConfig,
  DeleteCCPrecisionPolicyRequest,
  BGPIPInstance,
  DeleteWaterPrintConfigResponse,
  Layer4Rule,
  DeletePacketFilterConfigResponse,
  CreateProtocolBlockConfigResponse,
  BGPIPInstanceSpecification,
  CreateIPAlarmThresholdConfigResponse,
  CreatePortAclConfigListResponse,
  DeleteWaterPrintConfigRequest,
  DescribeDDoSBlackWhiteIpListRequest,
  ConnectLimitRelation,
  DescribeListBlackWhiteIpListResponse,
  DDoSAIRelation,
  DescribeCCReqLimitPolicyListRequest,
  AclConfigRelation,
  DescribeListDDoSSpeedLimitConfigResponse,
  ModifyDDoSThresholdResponse,
  CreateDDoSGeoIPBlockConfigResponse,
  CCPrecisionPolicy,
  ListenerCcThreholdConfig,
  EipAddressRelation,
  DeleteDDoSBlackWhiteIpListRequest,
  PackInfo,
  CreateDDoSConnectLimitResponse,
  IPLineInfo,
  DescribeCcBlackWhiteIpListRequest,
  DescribeListListenerResponse,
  DeletePortAclConfigRequest,
  ProtectThresholdRelation,
  CreatePortAclConfigResponse,
  ModifyDDoSLevelResponse,
  CreateL7RuleCertsResponse,
  CreateCCPrecisionPolicyRequest,
  ConnectLimitConfig,
  DDoSSpeedLimitConfig,
  AssociateDDoSEipLoadBalancerRequest,
  DescribeListProtectThresholdConfigResponse,
  CertIdInsL7Rules,
  IpSegment,
  CreateDefaultAlarmThresholdResponse,
  ModifyDDoSThresholdRequest,
  ModifyDDoSLevelRequest,
  DescribeListIPAlarmConfigResponse,
  CcGeoIpPolicyNew,
  ModifyDDoSBlackWhiteIpListResponse,
  CCReqLimitPolicy,
  DescribeCCPrecisionPlyListRequest,
  ModifyL7RulesEdgeResponse,
  ProtocolPort,
  DescribeCCLevelListRequest,
  ModifyCCThresholdPolicyRequest,
  DeleteDDoSGeoIPBlockConfigResponse,
  DescribeListDDoSAIRequest,
  DescribeListIPAlarmConfigRequest,
  PortSegment,
  ModifyCCReqLimitPolicyResponse,
  DefaultAlarmThreshold,
  ForwardListener,
  BGPInstanceSpecification,
  ModifyDomainUsrNameRequest,
  CreateDDoSConnectLimitRequest,
  CreateWaterPrintKeyRequest,
  WaterPrintRelation,
  InsL7Rules,
  DescribeCCReqLimitPolicyListResponse,
  DescribeListDDoSAIResponse,
  ModifyCCPrecisionPolicyResponse,
  CcGeoIPBlockConfig,
  ModifyDDoSSpeedLimitConfigRequest,
  AssociateDDoSEipAddressRequest,
  AssociateDDoSEipLoadBalancerResponse,
  DescribeCCThresholdListRequest,
  CreateBlackWhiteIpListRequest,
  DescribeBizTrendResponse,
  NewL7RuleEntry,
  DeleteCcBlackWhiteIpListResponse,
  CreateBoundIPResponse,
  DescribeListDDoSSpeedLimitConfigRequest,
  SpeedValue,
  SwitchWaterPrintConfigRequest,
  DescribeListSchedulingDomainResponse,
  ModifyCCPrecisionPolicyRequest,
  DeleteDDoSBlackWhiteIpListResponse,
  CCThresholdPolicy,
  ModifyDomainUsrNameResponse,
  DescribeCCTrendResponse,
  CreateSchedulingDomainResponse,
  EipProductInfo,
  DeleteCcBlackWhiteIpListRequest,
  DescribeCcGeoIPBlockConfigListResponse,
  CreateDDoSAIResponse,
  DDoSGeoIPBlockConfigRelation,
  DescribeListProtocolBlockConfigRequest,
  DescribeListBGPInstancesResponse,
  DescribeDDoSTrendRequest,
  DeleteCCRequestLimitPolicyResponse,
  CreateCcBlackWhiteIpListRequest,
  BGPInstance,
  DescribeListPortAclListResponse,
  CCPrecisionPlyRecord,
  DescribeCCPrecisionPlyListResponse,
  DescribeBizTrendRequest,
  DescribeListPortAclListRequest,
  DescribeCCLevelPolicyResponse,
  DescribeListWaterPrintConfigResponse,
  BGPInstanceUsages,
  DeleteDDoSSpeedLimitConfigResponse,
  DeleteCCThresholdPolicyRequest,
  DescribeListListenerRequest,
  L7RuleEntry,
  ModifyCCThresholdPolicyResponse,
  CreateWaterPrintKeyResponse,
  DeleteCCPrecisionPolicyResponse,
  DescribeDDoSTrendResponse,
  DescribeListBlackWhiteIpListRequest,
  CreateCCReqLimitPolicyRequest,
  ModifyDDoSSpeedLimitConfigResponse,
  SchedulingDomainInfo,
  DescribeDefaultAlarmThresholdRequest,
  WaterPrintKey,
  ModifyCCLevelPolicyRequest,
  DescribeCcGeoIPBlockConfigListRequest,
  PacketFilterRelation,
  CreatePacketFilterConfigRequest,
  DescribeCCTrendRequest,
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
   * 修改CC防护等级
   */
  async ModifyCCLevelPolicy(
    req: ModifyCCLevelPolicyRequest,
    cb?: (error: string, rep: ModifyCCLevelPolicyResponse) => void
  ): Promise<ModifyCCLevelPolicyResponse> {
    return this.request("ModifyCCLevelPolicy", req, cb)
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
   * 修改DDoS清洗阈值
   */
  async ModifyDDoSThreshold(
    req: ModifyDDoSThresholdRequest,
    cb?: (error: string, rep: ModifyDDoSThresholdResponse) => void
  ): Promise<ModifyDDoSThresholdResponse> {
    return this.request("ModifyDDoSThreshold", req, cb)
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
   * 修改7层转发规则
   */
  async ModifyNewDomainRules(
    req: ModifyNewDomainRulesRequest,
    cb?: (error: string, rep: ModifyNewDomainRulesResponse) => void
  ): Promise<ModifyNewDomainRulesResponse> {
    return this.request("ModifyNewDomainRules", req, cb)
  }

  /**
   * 新建CC四层黑白名单
   */
  async CreateCcBlackWhiteIpList(
    req: CreateCcBlackWhiteIpListRequest,
    cb?: (error: string, rep: CreateCcBlackWhiteIpListResponse) => void
  ): Promise<CreateCcBlackWhiteIpListResponse> {
    return this.request("CreateCcBlackWhiteIpList", req, cb)
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
   * 获取业务流量曲线
   */
  async DescribeBizTrend(
    req: DescribeBizTrendRequest,
    cb?: (error: string, rep: DescribeBizTrendResponse) => void
  ): Promise<DescribeBizTrendResponse> {
    return this.request("DescribeBizTrend", req, cb)
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
   * 修改智能解析域名名称
   */
  async ModifyDomainUsrName(
    req: ModifyDomainUsrNameRequest,
    cb?: (error: string, rep: ModifyDomainUsrNameResponse) => void
  ): Promise<ModifyDomainUsrNameResponse> {
    return this.request("ModifyDomainUsrName", req, cb)
  }

  /**
   * 获取CC精准防护列表
   */
  async DescribeCCPrecisionPlyList(
    req: DescribeCCPrecisionPlyListRequest,
    cb?: (error: string, rep: DescribeCCPrecisionPlyListResponse) => void
  ): Promise<DescribeCCPrecisionPlyListResponse> {
    return this.request("DescribeCCPrecisionPlyList", req, cb)
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
   * 添加DDoS防护的特征过滤规则
   */
  async CreatePacketFilterConfig(
    req: CreatePacketFilterConfigRequest,
    cb?: (error: string, rep: CreatePacketFilterConfigResponse) => void
  ): Promise<CreatePacketFilterConfigResponse> {
    return this.request("CreatePacketFilterConfig", req, cb)
  }

  /**
   * 删除CC精准防护策略
   */
  async DeleteCCPrecisionPolicy(
    req: DeleteCCPrecisionPolicyRequest,
    cb?: (error: string, rep: DeleteCCPrecisionPolicyResponse) => void
  ): Promise<DeleteCCPrecisionPolicyResponse> {
    return this.request("DeleteCCPrecisionPolicy", req, cb)
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
   * 获取单IP告警阈值配置列表
   */
  async DescribeListIPAlarmConfig(
    req: DescribeListIPAlarmConfigRequest,
    cb?: (error: string, rep: DescribeListIPAlarmConfigResponse) => void
  ): Promise<DescribeListIPAlarmConfigResponse> {
    return this.request("DescribeListIPAlarmConfig", req, cb)
  }

  /**
   * 获取DDoS攻击流量带宽和攻击包速率数据
   */
  async DescribeDDoSTrend(
    req: DescribeDDoSTrendRequest,
    cb?: (error: string, rep: DescribeDDoSTrendResponse) => void
  ): Promise<DescribeDDoSTrendResponse> {
    return this.request("DescribeDDoSTrend", req, cb)
  }

  /**
   * 删除DDoS防护的IP网段黑白名单
   */
  async DeleteDDoSBlackWhiteIpList(
    req: DeleteDDoSBlackWhiteIpListRequest,
    cb?: (error: string, rep: DeleteDDoSBlackWhiteIpListResponse) => void
  ): Promise<DeleteDDoSBlackWhiteIpListResponse> {
    return this.request("DeleteDDoSBlackWhiteIpList", req, cb)
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
   * 删除CC清洗阈值策略
   */
  async DeleteCCThresholdPolicy(
    req: DeleteCCThresholdPolicyRequest,
    cb?: (error: string, rep: DeleteCCThresholdPolicyResponse) => void
  ): Promise<DeleteCCThresholdPolicyResponse> {
    return this.request("DeleteCCThresholdPolicy", req, cb)
  }

  /**
   * 修改CC频率限制策略
   */
  async ModifyCCReqLimitPolicy(
    req: ModifyCCReqLimitPolicyRequest,
    cb?: (error: string, rep: ModifyCCReqLimitPolicyResponse) => void
  ): Promise<ModifyCCReqLimitPolicyResponse> {
    return this.request("ModifyCCReqLimitPolicy", req, cb)
  }

  /**
   * 获取CC四层黑白名单列表
   */
  async DescribeCcBlackWhiteIpList(
    req: DescribeCcBlackWhiteIpListRequest,
    cb?: (error: string, rep: DescribeCcBlackWhiteIpListResponse) => void
  ): Promise<DescribeCcBlackWhiteIpListResponse> {
    return this.request("DescribeCcBlackWhiteIpList", req, cb)
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
   * 获取CC分级策略
   */
  async DescribeCCLevelPolicy(
    req: DescribeCCLevelPolicyRequest,
    cb?: (error: string, rep: DescribeCCLevelPolicyResponse) => void
  ): Promise<DescribeCCLevelPolicyResponse> {
    return this.request("DescribeCCLevelPolicy", req, cb)
  }

  /**
   * 读取或修改DDoS的防护等级
   */
  async ModifyDDoSLevel(
    req: ModifyDDoSLevelRequest,
    cb?: (error: string, rep: ModifyDDoSLevelResponse) => void
  ): Promise<ModifyDDoSLevelResponse> {
    return this.request("ModifyDDoSLevel", req, cb)
  }

  /**
   * 修改CC清洗阈值
   */
  async ModifyCCThresholdPolicy(
    req: ModifyCCThresholdPolicyRequest,
    cb?: (error: string, rep: ModifyCCThresholdPolicyResponse) => void
  ): Promise<ModifyCCThresholdPolicyResponse> {
    return this.request("ModifyCCThresholdPolicy", req, cb)
  }

  /**
   * 绑定IP到高防包实例，支持独享包、共享包；需要注意的是此接口绑定或解绑IP是异步接口，当处于绑定或解绑中时，则不允许再进行绑定或解绑，需要等待当前绑定或解绑完成。
   */
  async CreateBoundIP(
    req: CreateBoundIPRequest,
    cb?: (error: string, rep: CreateBoundIPResponse) => void
  ): Promise<CreateBoundIPResponse> {
    return this.request("CreateBoundIP", req, cb)
  }

  /**
   * 修改CC四层黑白名单
   */
  async ModifyCcBlackWhiteIpList(
    req: ModifyCcBlackWhiteIpListRequest,
    cb?: (error: string, rep: ModifyCcBlackWhiteIpListResponse) => void
  ): Promise<ModifyCcBlackWhiteIpListResponse> {
    return this.request("ModifyCcBlackWhiteIpList", req, cb)
  }

  /**
   * 删除CC防护的区域封禁配置
   */
  async DeleteCcGeoIPBlockConfig(
    req: DeleteCcGeoIPBlockConfigRequest,
    cb?: (error: string, rep: DeleteCcGeoIPBlockConfigResponse) => void
  ): Promise<DeleteCcGeoIPBlockConfigResponse> {
    return this.request("DeleteCcGeoIPBlockConfig", req, cb)
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
   * 获取CC防护等级列表
   */
  async DescribeCCLevelList(
    req: DescribeCCLevelListRequest,
    cb?: (error: string, rep: DescribeCCLevelListResponse) => void
  ): Promise<DescribeCCLevelListResponse> {
    return this.request("DescribeCCLevelList", req, cb)
  }

  /**
   * 修改DDoS黑白名单列表
   */
  async ModifyDDoSBlackWhiteIpList(
    req: ModifyDDoSBlackWhiteIpListRequest,
    cb?: (error: string, rep: ModifyDDoSBlackWhiteIpListResponse) => void
  ): Promise<ModifyDDoSBlackWhiteIpListResponse> {
    return this.request("ModifyDDoSBlackWhiteIpList", req, cb)
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
   * 获取CC频率限制策略列表
   */
  async DescribeCCReqLimitPolicyList(
    req: DescribeCCReqLimitPolicyListRequest,
    cb?: (error: string, rep: DescribeCCReqLimitPolicyListResponse) => void
  ): Promise<DescribeCCReqLimitPolicyListResponse> {
    return this.request("DescribeCCReqLimitPolicyList", req, cb)
  }

  /**
   * 添加DDoS防护的IP网段黑白名单
   */
  async CreateDDoSBlackWhiteIpList(
    req: CreateDDoSBlackWhiteIpListRequest,
    cb?: (error: string, rep: CreateDDoSBlackWhiteIpListResponse) => void
  ): Promise<CreateDDoSBlackWhiteIpListResponse> {
    return this.request("CreateDDoSBlackWhiteIpList", req, cb)
  }

  /**
   * 获取CC清洗阈值列表
   */
  async DescribeCCThresholdList(
    req: DescribeCCThresholdListRequest,
    cb?: (error: string, rep: DescribeCCThresholdListResponse) => void
  ): Promise<DescribeCCThresholdListResponse> {
    return this.request("DescribeCCThresholdList", req, cb)
  }

  /**
   * 修改CC精准防护策略
   */
  async ModifyCCPrecisionPolicy(
    req: ModifyCCPrecisionPolicyRequest,
    cb?: (error: string, rep: ModifyCCPrecisionPolicyResponse) => void
  ): Promise<ModifyCCPrecisionPolicyResponse> {
    return this.request("ModifyCCPrecisionPolicy", req, cb)
  }

  /**
   * 修改边界防护L7转发规则
   */
  async ModifyL7RulesEdge(
    req: ModifyL7RulesEdgeRequest,
    cb?: (error: string, rep: ModifyL7RulesEdgeResponse) => void
  ): Promise<ModifyL7RulesEdgeResponse> {
    return this.request("ModifyL7RulesEdge", req, cb)
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
   * 删除CC分级策略
   */
  async DeleteCCLevelPolicy(
    req: DeleteCCLevelPolicyRequest,
    cb?: (error: string, rep: DeleteCCLevelPolicyResponse) => void
  ): Promise<DeleteCCLevelPolicyResponse> {
    return this.request("DeleteCCLevelPolicy", req, cb)
  }

  /**
   * 查询与证书ID对于域名匹配的七层规则
   */
  async DescribeL7RulesBySSLCertId(
    req: DescribeL7RulesBySSLCertIdRequest,
    cb?: (error: string, rep: DescribeL7RulesBySSLCertIdResponse) => void
  ): Promise<DescribeL7RulesBySSLCertIdResponse> {
    return this.request("DescribeL7RulesBySSLCertId", req, cb)
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
   * 删除DDoS防护的端口acl策略
   */
  async DeletePortAclConfig(
    req: DeletePortAclConfigRequest,
    cb?: (error: string, rep: DeletePortAclConfigResponse) => void
  ): Promise<DeletePortAclConfigResponse> {
    return this.request("DeletePortAclConfig", req, cb)
  }

  /**
   * 删除CC四层黑白名单
   */
  async DeleteCcBlackWhiteIpList(
    req: DeleteCcBlackWhiteIpListRequest,
    cb?: (error: string, rep: DeleteCcBlackWhiteIpListResponse) => void
  ): Promise<DeleteCcBlackWhiteIpListResponse> {
    return this.request("DeleteCcBlackWhiteIpList", req, cb)
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
   * 添加DDoS防护的端口acl策略
   */
  async CreatePortAclConfig(
    req: CreatePortAclConfigRequest,
    cb?: (error: string, rep: CreatePortAclConfigResponse) => void
  ): Promise<CreatePortAclConfigResponse> {
    return this.request("CreatePortAclConfig", req, cb)
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
   * 获取基础防护攻击状态
   */
  async DescribeBasicDeviceStatus(
    req: DescribeBasicDeviceStatusRequest,
    cb?: (error: string, rep: DescribeBasicDeviceStatusResponse) => void
  ): Promise<DescribeBasicDeviceStatusResponse> {
    return this.request("DescribeBasicDeviceStatus", req, cb)
  }

  /**
   * 配置DDoS连接抑制选项
   */
  async CreateDDoSConnectLimit(
    req: CreateDDoSConnectLimitRequest,
    cb?: (error: string, rep: CreateDDoSConnectLimitResponse) => void
  ): Promise<CreateDDoSConnectLimitResponse> {
    return this.request("CreateDDoSConnectLimit", req, cb)
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
   * 本接口 (AssociateDDoSEipLoadBalancer) 用于将高防弹性公网IP绑定到负载均衡指定内网 IP 上。
   */
  async AssociateDDoSEipLoadBalancer(
    req: AssociateDDoSEipLoadBalancerRequest,
    cb?: (error: string, rep: AssociateDDoSEipLoadBalancerResponse) => void
  ): Promise<AssociateDDoSEipLoadBalancerResponse> {
    return this.request("AssociateDDoSEipLoadBalancer", req, cb)
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
   * 修改DDoS防护的特征过滤规则
   */
  async ModifyPacketFilterConfig(
    req: ModifyPacketFilterConfigRequest,
    cb?: (error: string, rep: ModifyPacketFilterConfigResponse) => void
  ): Promise<ModifyPacketFilterConfigResponse> {
    return this.request("ModifyPacketFilterConfig", req, cb)
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
   * 获取DDoS防护的区域封禁配置列表
   */
  async DescribeListDDoSGeoIPBlockConfig(
    req: DescribeListDDoSGeoIPBlockConfigRequest,
    cb?: (error: string, rep: DescribeListDDoSGeoIPBlockConfigResponse) => void
  ): Promise<DescribeListDDoSGeoIPBlockConfigResponse> {
    return this.request("DescribeListDDoSGeoIPBlockConfig", req, cb)
  }

  /**
   * 新增CC精准防护策略
   */
  async CreateCCPrecisionPolicy(
    req: CreateCCPrecisionPolicyRequest,
    cb?: (error: string, rep: CreateCCPrecisionPolicyResponse) => void
  ): Promise<CreateCCPrecisionPolicyResponse> {
    return this.request("CreateCCPrecisionPolicy", req, cb)
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
   * 获取CC防护的区域封禁配置列表
   */
  async DescribeCcGeoIPBlockConfigList(
    req: DescribeCcGeoIPBlockConfigListRequest,
    cb?: (error: string, rep: DescribeCcGeoIPBlockConfigListResponse) => void
  ): Promise<DescribeCcGeoIPBlockConfigListResponse> {
    return this.request("DescribeCcGeoIPBlockConfigList", req, cb)
  }

  /**
   * 新增CC频率限制策略
   */
  async CreateCCReqLimitPolicy(
    req: CreateCCReqLimitPolicyRequest,
    cb?: (error: string, rep: CreateCCReqLimitPolicyResponse) => void
  ): Promise<CreateCCReqLimitPolicyResponse> {
    return this.request("CreateCCReqLimitPolicy", req, cb)
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
   * 开启或关闭DDoS防护的水印防护配置
   */
  async SwitchWaterPrintConfig(
    req: SwitchWaterPrintConfigRequest,
    cb?: (error: string, rep: SwitchWaterPrintConfigResponse) => void
  ): Promise<SwitchWaterPrintConfigResponse> {
    return this.request("SwitchWaterPrintConfig", req, cb)
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
    req: CreateSchedulingDomainRequest,
    cb?: (error: string, rep: CreateSchedulingDomainResponse) => void
  ): Promise<CreateSchedulingDomainResponse> {
    return this.request("CreateSchedulingDomain", req, cb)
  }

  /**
   * 获取DDoS防护的IP网段黑白名单
   */
  async DescribeDDoSBlackWhiteIpList(
    req: DescribeDDoSBlackWhiteIpListRequest,
    cb?: (error: string, rep: DescribeDDoSBlackWhiteIpListResponse) => void
  ): Promise<DescribeDDoSBlackWhiteIpListResponse> {
    return this.request("DescribeDDoSBlackWhiteIpList", req, cb)
  }

  /**
   * 获取CC攻击指标数据，包括总请求峰值(QPS)和攻击请求(QPS)以及总请求次数和攻击请求次数
   */
  async DescribeCCTrend(
    req: DescribeCCTrendRequest,
    cb?: (error: string, rep: DescribeCCTrendResponse) => void
  ): Promise<DescribeCCTrendResponse> {
    return this.request("DescribeCCTrend", req, cb)
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
   * 批量添加DDoS防护的端口acl策略
   */
  async CreatePortAclConfigList(
    req: CreatePortAclConfigListRequest,
    cb?: (error: string, rep: CreatePortAclConfigListResponse) => void
  ): Promise<CreatePortAclConfigListResponse> {
    return this.request("CreatePortAclConfigList", req, cb)
  }

  /**
   * 批量配置L7转发规则的证书供SSL测调用
   */
  async CreateL7RuleCerts(
    req: CreateL7RuleCertsRequest,
    cb?: (error: string, rep: CreateL7RuleCertsResponse) => void
  ): Promise<CreateL7RuleCertsResponse> {
    return this.request("CreateL7RuleCerts", req, cb)
  }

  /**
   * 获取DDoS防护的端口acl策略列表
   */
  async DescribeListPortAclList(
    req: DescribeListPortAclListRequest,
    cb?: (error: string, rep: DescribeListPortAclListResponse) => void
  ): Promise<DescribeListPortAclListResponse> {
    return this.request("DescribeListPortAclList", req, cb)
  }

  /**
   * 获取DDoS连接抑制配置列表
   */
  async DescribeDDoSConnectLimitList(
    req: DescribeDDoSConnectLimitListRequest,
    cb?: (error: string, rep: DescribeDDoSConnectLimitListResponse) => void
  ): Promise<DescribeDDoSConnectLimitListResponse> {
    return this.request("DescribeDDoSConnectLimitList", req, cb)
  }

  /**
   * 新建cc防护的地域封禁配置
   */
  async CreateCcGeoIPBlockConfig(
    req: CreateCcGeoIPBlockConfigRequest,
    cb?: (error: string, rep: CreateCcGeoIPBlockConfigResponse) => void
  ): Promise<CreateCcGeoIPBlockConfigResponse> {
    return this.request("CreateCcGeoIPBlockConfig", req, cb)
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
   * 修改DDoS防护的端口acl策略
   */
  async ModifyPortAclConfig(
    req: ModifyPortAclConfigRequest,
    cb?: (error: string, rep: ModifyPortAclConfigResponse) => void
  ): Promise<ModifyPortAclConfigResponse> {
    return this.request("ModifyPortAclConfig", req, cb)
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

  /**
   * 删除CC频率限制策略
   */
  async DeleteCCRequestLimitPolicy(
    req: DeleteCCRequestLimitPolicyRequest,
    cb?: (error: string, rep: DeleteCCRequestLimitPolicyResponse) => void
  ): Promise<DeleteCCRequestLimitPolicyResponse> {
    return this.request("DeleteCCRequestLimitPolicy", req, cb)
  }
}
