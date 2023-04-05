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
  DescribeNatFwInstanceRequest,
  ModifyNatFwVpcDnsSwitchResponse,
  DescribeNatFwInstanceWithRegionRequest,
  ModifyNatAcRuleResponse,
  DescribeRuleOverviewResponse,
  CfwNatDnatRule,
  FwCidrInfo,
  StaticInfo,
  DescribeNatAcRuleResponse,
  ModifyPublicIPSwitchStatusResponse,
  ModifyNatAcRuleRequest,
  ModifyAcRuleResponse,
  ModifyNatSequenceRulesRequest,
  DescribeTableStatusResponse,
  AddAcRuleRequest,
  IPDefendStatus,
  BlockIgnoreRule,
  ModifyNatFwVpcDnsSwitchRequest,
  DeleteNatFwInstanceResponse,
  DeleteAllAccessControlRuleRequest,
  ModifySecurityGroupRuleRequest,
  ModifyAllVPCSwitchStatusResponse,
  VpcZoneData,
  DatabaseWhiteListRuleData,
  DescribeNatFwVpcDnsLstRequest,
  DescribeCfwEipsRequest,
  DescribeTLogInfoResponse,
  DescribeUnHandleEventTabListRequest,
  DescribeAssociatedInstanceListResponse,
  AssociatedInstanceInfo,
  ModifyStorageSettingResponse,
  RemoveAcRuleResponse,
  NatFwInstance,
  CreateSecurityGroupRulesResponse,
  ExpandCfwVerticalRequest,
  ModifyAllPublicIPSwitchStatusResponse,
  DeleteVpcInstanceResponse,
  ModifyAssetScanRequest,
  ModifyBlockIgnoreListRequest,
  AddEnterpriseSecurityGroupRulesRequest,
  SecurityGroupRule,
  DeleteSecurityGroupRuleResponse,
  ModifySequenceRulesRequest,
  SequenceData,
  CreateNatFwInstanceRequest,
  ModifySecurityGroupItemRuleStatusResponse,
  DescribeEnterpriseSecurityGroupRuleResponse,
  VpcDnsInfo,
  DescribeEnterpriseSecurityGroupRuleRequest,
  ModifyNatFwReSelectResponse,
  DeleteSecurityGroupRuleRequest,
  SetNatFwEipRequest,
  SetNatFwEipResponse,
  AcListsData,
  ModifyPublicIPSwitchStatusRequest,
  CreateNatRuleItem,
  ModifySecurityGroupItemRuleStatusRequest,
  DescribeSourceAssetRequest,
  SecurityGroupOrderIndexData,
  DescribeSourceAssetResponse,
  DescribeTLogInfoRequest,
  DescribeSecurityGroupListResponse,
  AssetZone,
  RuleChangeItem,
  DescribeTLogIpListRequest,
  CommonFilter,
  DescribeNatFwInstancesInfoRequest,
  ModifyNatSequenceRulesResponse,
  DescribeTableStatusRequest,
  DescribeSecurityGroupListRequest,
  ModifyResourceGroupRequest,
  CreateNatFwInstanceResponse,
  NewModeItems,
  DescribeNatFwInfoCountResponse,
  DescribeDefenseSwitchRequest,
  ModifyEnterpriseSecurityDispatchStatusResponse,
  SecurityGroupListData,
  RemoveNatAcRuleResponse,
  CreateNatFwInstanceWithDomainResponse,
  RemoveAcRuleRequest,
  BetaInfoByACL,
  RemoveNatAcRuleRequest,
  ModifyAllRuleStatusRequest,
  RuleInfoData,
  DescribeAcListsResponse,
  ModifyAllPublicIPSwitchStatusRequest,
  DescribeBlockStaticListResponse,
  AddNatAcRuleRequest,
  ModifySecurityGroupSequenceRulesRequest,
  CreateDatabaseWhiteListRulesResponse,
  ScanInfo,
  CreateChooseVpcsResponse,
  DescribeUnHandleEventTabListResponse,
  NatFwFilter,
  ScanResultInfo,
  ModifyRunSyncAssetResponse,
  ModifyEnterpriseSecurityGroupRuleResponse,
  ModifySecurityGroupSequenceRulesResponse,
  IpStatic,
  AddEnterpriseSecurityGroupRulesResponse,
  UnHandleEventDetail,
  RemoveEnterpriseSecurityGroupRuleRequest,
  DeleteResourceGroupRequest,
  DescribeBlockByIpTimesListRequest,
  RemoveEnterpriseSecurityGroupRuleResponse,
  ModifyEnterpriseSecurityGroupRuleRequest,
  ModifySequenceRulesResponse,
  DescribeResourceGroupNewResponse,
  DescribeNatFwInstanceWithRegionResponse,
  DescribeResourceGroupNewRequest,
  ModifyBlockTopRequest,
  DeleteAcRuleResponse,
  IocListData,
  InstanceInfo,
  DescribeIPStatusListRequest,
  ModifyNatFwSwitchResponse,
  DescribeBlockByIpTimesListResponse,
  SetNatFwDnatRuleResponse,
  DescribeRuleOverviewRequest,
  DescribeDefenseSwitchResponse,
  DescribeAcListsRequest,
  DescribeGuideScanInfoRequest,
  UnHandleEvent,
  DescribeAssociatedInstanceListRequest,
  DeleteAcRuleRequest,
  DeleteAllAccessControlRuleResponse,
  ModifyNatFwSwitchRequest,
  DescribeIPStatusListResponse,
  CreateDatabaseWhiteListRulesRequest,
  NatInstanceInfo,
  NatFwEipsInfo,
  DescribeResourceGroupResponse,
  DescribeTLogIpListResponse,
  StopSecurityGroupRuleDispatchResponse,
  DescribeNatFwInfoCountRequest,
  AddAcRuleResponse,
  ModifyNatFwReSelectRequest,
  SetNatFwDnatRuleRequest,
  ModifyAllVPCSwitchStatusRequest,
  SecurityGroupBothWayInfo,
  ModifyAllRuleStatusResponse,
  StopSecurityGroupRuleDispatchRequest,
  DescribeBlockIgnoreListRequest,
  ModifyBlockTopResponse,
  DeleteNatFwInstanceRequest,
  ModifyStorageSettingRequest,
  DescribeNatFwVpcDnsLstResponse,
  DescAcItem,
  CreateChooseVpcsRequest,
  ExpandCfwVerticalResponse,
  DescribeNatAcRuleRequest,
  TLogInfo,
  CreateSecurityGroupRulesRequest,
  DeleteVpcInstanceRequest,
  SwitchListsData,
  CreateNatFwInstanceWithDomainRequest,
  DescribeSwitchListsResponse,
  DescribeCfwEipsResponse,
  ModifyResourceGroupResponse,
  DeleteResourceGroupResponse,
  DescribeSwitchListsRequest,
  DescribeBlockStaticListRequest,
  FwVpcCidr,
  ModifyRunSyncAssetRequest,
  CreateAcRulesResponse,
  ModifyAssetScanResponse,
  ModifyAcRuleRequest,
  DescribeNatFwInstancesInfoResponse,
  AddNatAcRuleResponse,
  ModifyBlockIgnoreListResponse,
  DescribeNatFwInstanceResponse,
  ModifySecurityGroupRuleResponse,
  DnsVpcSwitch,
  DescribeResourceGroupRequest,
  CreateAcRulesRequest,
  ModifyEnterpriseSecurityDispatchStatusRequest,
  DescribeBlockIgnoreListResponse,
  ModifyTableStatusRequest,
  ModifyTableStatusResponse,
  DescribeGuideScanInfoResponse,
} from "./cfw_models"

/**
 * cfw client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cfw.tencentcloudapi.com", "2019-09-04", clientConfig)
  }

  /**
   * 获取当前用户接入nat防火墙的所有子网数及natfw实例个数
   */
  async DescribeNatFwInfoCount(
    req?: DescribeNatFwInfoCountRequest,
    cb?: (error: string, rep: DescribeNatFwInfoCountResponse) => void
  ): Promise<DescribeNatFwInfoCountResponse> {
    return this.request("DescribeNatFwInfoCount", req, cb)
  }

  /**
   * 中止安全组规则下发
   */
  async StopSecurityGroupRuleDispatch(
    req: StopSecurityGroupRuleDispatchRequest,
    cb?: (error: string, rep: StopSecurityGroupRuleDispatchResponse) => void
  ): Promise<StopSecurityGroupRuleDispatchResponse> {
    return this.request("StopSecurityGroupRuleDispatch", req, cb)
  }

  /**
   * 修改规则表状态
   */
  async ModifyTableStatus(
    req: ModifyTableStatusRequest,
    cb?: (error: string, rep: ModifyTableStatusResponse) => void
  ): Promise<ModifyTableStatusResponse> {
    return this.request("ModifyTableStatus", req, cb)
  }

  /**
   * 展示当前natfw 实例对应的vpc dns开关
   */
  async DescribeNatFwVpcDnsLst(
    req: DescribeNatFwVpcDnsLstRequest,
    cb?: (error: string, rep: DescribeNatFwVpcDnsLstResponse) => void
  ): Promise<DescribeNatFwVpcDnsLstResponse> {
    return this.request("DescribeNatFwVpcDnsLst", req, cb)
  }

  /**
   * 互联网边界防火墙一键开关
   */
  async ModifyAllPublicIPSwitchStatus(
    req: ModifyAllPublicIPSwitchStatusRequest,
    cb?: (error: string, rep: ModifyAllPublicIPSwitchStatusResponse) => void
  ): Promise<ModifyAllPublicIPSwitchStatusResponse> {
    return this.request("ModifyAllPublicIPSwitchStatus", req, cb)
  }

  /**
   * 获取安全组关联实例列表
   */
  async DescribeAssociatedInstanceList(
    req: DescribeAssociatedInstanceListRequest,
    cb?: (error: string, rep: DescribeAssociatedInstanceListResponse) => void
  ): Promise<DescribeAssociatedInstanceListResponse> {
    return this.request("DescribeAssociatedInstanceList", req, cb)
  }

  /**
   * 创建、选择vpc
   */
  async CreateChooseVpcs(
    req: CreateChooseVpcsRequest,
    cb?: (error: string, rep: CreateChooseVpcsResponse) => void
  ): Promise<CreateChooseVpcsResponse> {
    return this.request("CreateChooseVpcs", req, cb)
  }

  /**
   * GetNatFwInstanceWithRegion 获取租户新增运维的NAT实例，带上地域
   */
  async DescribeNatFwInstanceWithRegion(
    req?: DescribeNatFwInstanceWithRegionRequest,
    cb?: (error: string, rep: DescribeNatFwInstanceWithRegionResponse) => void
  ): Promise<DescribeNatFwInstanceWithRegionResponse> {
    return this.request("DescribeNatFwInstanceWithRegion", req, cb)
  }

  /**
   * 删除规则
   */
  async DeleteAcRule(
    req: DeleteAcRuleRequest,
    cb?: (error: string, rep: DeleteAcRuleResponse) => void
  ): Promise<DeleteAcRuleResponse> {
    return this.request("DeleteAcRule", req, cb)
  }

  /**
     * ModifyResourceGroup-资产中心资产组信息修改


     */
  async ModifyResourceGroup(
    req: ModifyResourceGroupRequest,
    cb?: (error: string, rep: ModifyResourceGroupResponse) => void
  ): Promise<ModifyResourceGroupResponse> {
    return this.request("ModifyResourceGroup", req, cb)
  }

  /**
   * 启用停用单条企业安全组规则
   */
  async ModifySecurityGroupItemRuleStatus(
    req: ModifySecurityGroupItemRuleStatusRequest,
    cb?: (error: string, rep: ModifySecurityGroupItemRuleStatusResponse) => void
  ): Promise<ModifySecurityGroupItemRuleStatusResponse> {
    return this.request("ModifySecurityGroupItemRuleStatus", req, cb)
  }

  /**
   * DescribeResourceGroupNew资产中心资产树信息
   */
  async DescribeResourceGroupNew(
    req: DescribeResourceGroupNewRequest,
    cb?: (error: string, rep: DescribeResourceGroupNewResponse) => void
  ): Promise<DescribeResourceGroupNewResponse> {
    return this.request("DescribeResourceGroupNew", req, cb)
  }

  /**
   * 全部删除规则
   */
  async DeleteAllAccessControlRule(
    req: DeleteAllAccessControlRuleRequest,
    cb?: (error: string, rep: DeleteAllAccessControlRuleResponse) => void
  ): Promise<DeleteAllAccessControlRuleResponse> {
    return this.request("DeleteAllAccessControlRule", req, cb)
  }

  /**
   * 查询安全组规则列表
   */
  async DescribeSecurityGroupList(
    req: DescribeSecurityGroupListRequest,
    cb?: (error: string, rep: DescribeSecurityGroupListResponse) => void
  ): Promise<DescribeSecurityGroupListResponse> {
    return this.request("DescribeSecurityGroupList", req, cb)
  }

  /**
   * 编辑单条安全组规则
   */
  async ModifySecurityGroupRule(
    req: ModifySecurityGroupRuleRequest,
    cb?: (error: string, rep: ModifySecurityGroupRuleResponse) => void
  ): Promise<ModifySecurityGroupRuleResponse> {
    return this.request("ModifySecurityGroupRule", req, cb)
  }

  /**
   * DescribeNatFwInstance 获取租户所有NAT实例
   */
  async DescribeNatFwInstance(
    req?: DescribeNatFwInstanceRequest,
    cb?: (error: string, rep: DescribeNatFwInstanceResponse) => void
  ): Promise<DescribeNatFwInstanceResponse> {
    return this.request("DescribeNatFwInstance", req, cb)
  }

  /**
   * 资产扫描
   */
  async ModifyAssetScan(
    req: ModifyAssetScanRequest,
    cb?: (error: string, rep: ModifyAssetScanResponse) => void
  ): Promise<ModifyAssetScanResponse> {
    return this.request("ModifyAssetScan", req, cb)
  }

  /**
   * 防火墙开关列表
   */
  async DescribeSwitchLists(
    req: DescribeSwitchListsRequest,
    cb?: (error: string, rep: DescribeSwitchListsResponse) => void
  ): Promise<DescribeSwitchListsResponse> {
    return this.request("DescribeSwitchLists", req, cb)
  }

  /**
   * 创建暴露数据库白名单规则
   */
  async CreateDatabaseWhiteListRules(
    req: CreateDatabaseWhiteListRulesRequest,
    cb?: (error: string, rep: CreateDatabaseWhiteListRulesResponse) => void
  ): Promise<CreateDatabaseWhiteListRulesResponse> {
    return this.request("CreateDatabaseWhiteListRules", req, cb)
  }

  /**
   * 创建防火墙实例和接入域名（Region参数必填）
   */
  async CreateNatFwInstanceWithDomain(
    req: CreateNatFwInstanceWithDomainRequest,
    cb?: (error: string, rep: CreateNatFwInstanceWithDomainResponse) => void
  ): Promise<CreateNatFwInstanceWithDomainResponse> {
    return this.request("CreateNatFwInstanceWithDomain", req, cb)
  }

  /**
   * 修改规则执行顺序
   */
  async ModifySequenceRules(
    req: ModifySequenceRulesRequest,
    cb?: (error: string, rep: ModifySequenceRulesResponse) => void
  ): Promise<ModifySequenceRulesResponse> {
    return this.request("ModifySequenceRules", req, cb)
  }

  /**
   * 添加互联网边界规则
   */
  async AddAcRule(
    req: AddAcRuleRequest,
    cb?: (error: string, rep: AddAcRuleResponse) => void
  ): Promise<AddAcRuleResponse> {
    return this.request("AddAcRule", req, cb)
  }

  /**
   * 创建新企业安全组规则
   */
  async AddEnterpriseSecurityGroupRules(
    req: AddEnterpriseSecurityGroupRulesRequest,
    cb?: (error: string, rep: AddEnterpriseSecurityGroupRulesResponse) => void
  ): Promise<AddEnterpriseSecurityGroupRulesResponse> {
    return this.request("AddEnterpriseSecurityGroupRules", req, cb)
  }

  /**
   * 创建访问控制规则
   */
  async CreateAcRules(
    req: CreateAcRulesRequest,
    cb?: (error: string, rep: CreateAcRulesResponse) => void
  ): Promise<CreateAcRulesResponse> {
    return this.request("CreateAcRules", req, cb)
  }

  /**
   * 销毁防火墙实例
   */
  async DeleteNatFwInstance(
    req: DeleteNatFwInstanceRequest,
    cb?: (error: string, rep: DeleteNatFwInstanceResponse) => void
  ): Promise<DeleteNatFwInstanceResponse> {
    return this.request("DeleteNatFwInstance", req, cb)
  }

  /**
   * 创建企业安全组规则
   */
  async CreateSecurityGroupRules(
    req: CreateSecurityGroupRulesRequest,
    cb?: (error: string, rep: CreateSecurityGroupRulesResponse) => void
  ): Promise<CreateSecurityGroupRulesResponse> {
    return this.request("CreateSecurityGroupRules", req, cb)
  }

  /**
   * 删除新企业安全组规则
   */
  async RemoveEnterpriseSecurityGroupRule(
    req: RemoveEnterpriseSecurityGroupRuleRequest,
    cb?: (error: string, rep: RemoveEnterpriseSecurityGroupRuleResponse) => void
  ): Promise<RemoveEnterpriseSecurityGroupRuleResponse> {
    return this.request("RemoveEnterpriseSecurityGroupRule", req, cb)
  }

  /**
   * 查询规则列表概况
   */
  async DescribeRuleOverview(
    req: DescribeRuleOverviewRequest,
    cb?: (error: string, rep: DescribeRuleOverviewResponse) => void
  ): Promise<DescribeRuleOverviewResponse> {
    return this.request("DescribeRuleOverview", req, cb)
  }

  /**
   * ip防护状态查询
   */
  async DescribeIPStatusList(
    req: DescribeIPStatusListRequest,
    cb?: (error: string, rep: DescribeIPStatusListResponse) => void
  ): Promise<DescribeIPStatusListResponse> {
    return this.request("DescribeIPStatusList", req, cb)
  }

  /**
   * 编辑新企业安全组规则
   */
  async ModifyEnterpriseSecurityGroupRule(
    req: ModifyEnterpriseSecurityGroupRuleRequest,
    cb?: (error: string, rep: ModifyEnterpriseSecurityGroupRuleResponse) => void
  ): Promise<ModifyEnterpriseSecurityGroupRuleResponse> {
    return this.request("ModifyEnterpriseSecurityGroupRule", req, cb)
  }

  /**
   * 获取入侵防御按钮列表
   */
  async DescribeDefenseSwitch(
    req?: DescribeDefenseSwitchRequest,
    cb?: (error: string, rep: DescribeDefenseSwitchResponse) => void
  ): Promise<DescribeDefenseSwitchResponse> {
    return this.request("DescribeDefenseSwitch", req, cb)
  }

  /**
     * DescribeTLogInfo告警中心概况

     */
  async DescribeTLogInfo(
    req: DescribeTLogInfoRequest,
    cb?: (error: string, rep: DescribeTLogInfoResponse) => void
  ): Promise<DescribeTLogInfoResponse> {
    return this.request("DescribeTLogInfo", req, cb)
  }

  /**
   * 同步资产-互联网&VPC（新）
   */
  async ModifyRunSyncAsset(
    req: ModifyRunSyncAssetRequest,
    cb?: (error: string, rep: ModifyRunSyncAssetResponse) => void
  ): Promise<ModifyRunSyncAssetResponse> {
    return this.request("ModifyRunSyncAsset", req, cb)
  }

  /**
   * NAT防火墙规则快速排序
   */
  async ModifyNatSequenceRules(
    req: ModifyNatSequenceRulesRequest,
    cb?: (error: string, rep: ModifyNatSequenceRulesResponse) => void
  ): Promise<ModifyNatSequenceRulesResponse> {
    return this.request("ModifyNatSequenceRules", req, cb)
  }

  /**
   * nat 防火墙VPC DNS 开关切换
   */
  async ModifyNatFwVpcDnsSwitch(
    req: ModifyNatFwVpcDnsSwitchRequest,
    cb?: (error: string, rep: ModifyNatFwVpcDnsSwitchResponse) => void
  ): Promise<ModifyNatFwVpcDnsSwitchResponse> {
    return this.request("ModifyNatFwVpcDnsSwitch", req, cb)
  }

  /**
   * VPC防火墙一键开关
   */
  async ModifyAllVPCSwitchStatus(
    req: ModifyAllVPCSwitchStatusRequest,
    cb?: (error: string, rep: ModifyAllVPCSwitchStatusResponse) => void
  ): Promise<ModifyAllVPCSwitchStatusResponse> {
    return this.request("ModifyAllVPCSwitchStatus", req, cb)
  }

  /**
   * 日志存储设置，可以修改存储时间和清空日志
   */
  async ModifyStorageSetting(
    req?: ModifyStorageSettingRequest,
    cb?: (error: string, rep: ModifyStorageSettingResponse) => void
  ): Promise<ModifyStorageSettingResponse> {
    return this.request("ModifyStorageSetting", req, cb)
  }

  /**
   * 查询新企业安全组规则
   */
  async DescribeEnterpriseSecurityGroupRule(
    req: DescribeEnterpriseSecurityGroupRuleRequest,
    cb?: (error: string, rep: DescribeEnterpriseSecurityGroupRuleResponse) => void
  ): Promise<DescribeEnterpriseSecurityGroupRuleResponse> {
    return this.request("DescribeEnterpriseSecurityGroupRule", req, cb)
  }

  /**
     * 支持对封禁列表、放通列表如下操作：
批量增加封禁IP、放通IP/域名
批量删除封禁IP、放通IP/域名
批量修改封禁IP、放通IP/域名生效事件
     */
  async ModifyBlockIgnoreList(
    req: ModifyBlockIgnoreListRequest,
    cb?: (error: string, rep: ModifyBlockIgnoreListResponse) => void
  ): Promise<ModifyBlockIgnoreListResponse> {
    return this.request("ModifyBlockIgnoreList", req, cb)
  }

  /**
   * 删除防火墙实例
   */
  async DeleteVpcInstance(
    req?: DeleteVpcInstanceRequest,
    cb?: (error: string, rep: DeleteVpcInstanceResponse) => void
  ): Promise<DeleteVpcInstanceResponse> {
    return this.request("DeleteVpcInstance", req, cb)
  }

  /**
   * DescribeGuideScanInfo新手引导扫描接口信息
   */
  async DescribeGuideScanInfo(
    req?: DescribeGuideScanInfoRequest,
    cb?: (error: string, rep: DescribeGuideScanInfoResponse) => void
  ): Promise<DescribeGuideScanInfoResponse> {
    return this.request("DescribeGuideScanInfo", req, cb)
  }

  /**
     * DescribeUnHandleEventTabList 告警中心伪攻击链事件未处置接口

     */
  async DescribeUnHandleEventTabList(
    req: DescribeUnHandleEventTabListRequest,
    cb?: (error: string, rep: DescribeUnHandleEventTabListResponse) => void
  ): Promise<DescribeUnHandleEventTabListResponse> {
    return this.request("DescribeUnHandleEventTabList", req, cb)
  }

  /**
   * 修改NAT防火墙开关
   */
  async ModifyNatFwSwitch(
    req: ModifyNatFwSwitchRequest,
    cb?: (error: string, rep: ModifyNatFwSwitchResponse) => void
  ): Promise<ModifyNatFwSwitchResponse> {
    return this.request("ModifyNatFwSwitch", req, cb)
  }

  /**
     * DescribeSourceAsset-查询资产组全部资产信息

     */
  async DescribeSourceAsset(
    req: DescribeSourceAssetRequest,
    cb?: (error: string, rep: DescribeSourceAssetResponse) => void
  ): Promise<DescribeSourceAssetResponse> {
    return this.request("DescribeSourceAsset", req, cb)
  }

  /**
   * DeleteResourceGroup-资产中心资产组删除
   */
  async DeleteResourceGroup(
    req: DeleteResourceGroupRequest,
    cb?: (error: string, rep: DeleteResourceGroupResponse) => void
  ): Promise<DeleteResourceGroupResponse> {
    return this.request("DeleteResourceGroup", req, cb)
  }

  /**
   * 创建NAT防火墙实例（Region参数必填）
   */
  async CreateNatFwInstance(
    req: CreateNatFwInstanceRequest,
    cb?: (error: string, rep: CreateNatFwInstanceResponse) => void
  ): Promise<CreateNatFwInstanceResponse> {
    return this.request("CreateNatFwInstance", req, cb)
  }

  /**
   * 配置防火墙Dnat规则
   */
  async SetNatFwDnatRule(
    req: SetNatFwDnatRuleRequest,
    cb?: (error: string, rep: SetNatFwDnatRuleResponse) => void
  ): Promise<SetNatFwDnatRuleResponse> {
    return this.request("SetNatFwDnatRule", req, cb)
  }

  /**
   * 启用停用全部规则
   */
  async ModifyAllRuleStatus(
    req: ModifyAllRuleStatusRequest,
    cb?: (error: string, rep: ModifyAllRuleStatusResponse) => void
  ): Promise<ModifyAllRuleStatusResponse> {
    return this.request("ModifyAllRuleStatus", req, cb)
  }

  /**
   * 删除互联网边界规则
   */
  async RemoveAcRule(
    req: RemoveAcRuleRequest,
    cb?: (error: string, rep: RemoveAcRuleResponse) => void
  ): Promise<RemoveAcRuleResponse> {
    return this.request("RemoveAcRule", req, cb)
  }

  /**
   * 设置防火墙实例弹性公网ip，目前仅支持新增模式的防火墙实例
   */
  async SetNatFwEip(
    req: SetNatFwEipRequest,
    cb?: (error: string, rep: SetNatFwEipResponse) => void
  ): Promise<SetNatFwEipResponse> {
    return this.request("SetNatFwEip", req, cb)
  }

  /**
   * ModifyBlockTop取消置顶接口
   */
  async ModifyBlockTop(
    req: ModifyBlockTopRequest,
    cb?: (error: string, rep: ModifyBlockTopResponse) => void
  ): Promise<ModifyBlockTopResponse> {
    return this.request("ModifyBlockTop", req, cb)
  }

  /**
   * 查询规则表状态
   */
  async DescribeTableStatus(
    req: DescribeTableStatusRequest,
    cb?: (error: string, rep: DescribeTableStatusResponse) => void
  ): Promise<DescribeTableStatusResponse> {
    return this.request("DescribeTableStatus", req, cb)
  }

  /**
   * GetNatInstance 获取租户所有NAT实例及实例卡片信息
   */
  async DescribeNatFwInstancesInfo(
    req: DescribeNatFwInstancesInfoRequest,
    cb?: (error: string, rep: DescribeNatFwInstancesInfoResponse) => void
  ): Promise<DescribeNatFwInstancesInfoResponse> {
    return this.request("DescribeNatFwInstancesInfo", req, cb)
  }

  /**
   * 防火墙实例重新选择vpc或nat
   */
  async ModifyNatFwReSelect(
    req: ModifyNatFwReSelectRequest,
    cb?: (error: string, rep: ModifyNatFwReSelectResponse) => void
  ): Promise<ModifyNatFwReSelectResponse> {
    return this.request("ModifyNatFwReSelect", req, cb)
  }

  /**
   * DescribeResourceGroup资产中心资产树信息
   */
  async DescribeResourceGroup(
    req: DescribeResourceGroupRequest,
    cb?: (error: string, rep: DescribeResourceGroupResponse) => void
  ): Promise<DescribeResourceGroupResponse> {
    return this.request("DescribeResourceGroup", req, cb)
  }

  /**
   * 查询防火墙弹性公网IP
   */
  async DescribeCfwEips(
    req: DescribeCfwEipsRequest,
    cb?: (error: string, rep: DescribeCfwEipsResponse) => void
  ): Promise<DescribeCfwEipsResponse> {
    return this.request("DescribeCfwEips", req, cb)
  }

  /**
   * 修改NAT访问控制规则
   */
  async ModifyNatAcRule(
    req: ModifyNatAcRuleRequest,
    cb?: (error: string, rep: ModifyNatAcRuleResponse) => void
  ): Promise<ModifyNatAcRuleResponse> {
    return this.request("ModifyNatAcRule", req, cb)
  }

  /**
   * 修改规则
   */
  async ModifyAcRule(
    req: ModifyAcRuleRequest,
    cb?: (error: string, rep: ModifyAcRuleResponse) => void
  ): Promise<ModifyAcRuleResponse> {
    return this.request("ModifyAcRule", req, cb)
  }

  /**
   * 删除规则
   */
  async DeleteSecurityGroupRule(
    req: DeleteSecurityGroupRuleRequest,
    cb?: (error: string, rep: DeleteSecurityGroupRuleResponse) => void
  ): Promise<DeleteSecurityGroupRuleResponse> {
    return this.request("DeleteSecurityGroupRule", req, cb)
  }

  /**
   * 企业安全组规则快速排序
   */
  async ModifySecurityGroupSequenceRules(
    req: ModifySecurityGroupSequenceRulesRequest,
    cb?: (error: string, rep: ModifySecurityGroupSequenceRulesResponse) => void
  ): Promise<ModifySecurityGroupSequenceRulesResponse> {
    return this.request("ModifySecurityGroupSequenceRules", req, cb)
  }

  /**
   * 修改企业安全组下发状态
   */
  async ModifyEnterpriseSecurityDispatchStatus(
    req: ModifyEnterpriseSecurityDispatchStatusRequest,
    cb?: (error: string, rep: ModifyEnterpriseSecurityDispatchStatusResponse) => void
  ): Promise<ModifyEnterpriseSecurityDispatchStatusResponse> {
    return this.request("ModifyEnterpriseSecurityDispatchStatus", req, cb)
  }

  /**
     * DescribeTLogIpList告警中心IP柱形图

     */
  async DescribeTLogIpList(
    req: DescribeTLogIpListRequest,
    cb?: (error: string, rep: DescribeTLogIpListResponse) => void
  ): Promise<DescribeTLogIpListResponse> {
    return this.request("DescribeTLogIpList", req, cb)
  }

  /**
   * 查询入侵防御放通封禁列表
   */
  async DescribeBlockIgnoreList(
    req: DescribeBlockIgnoreListRequest,
    cb?: (error: string, rep: DescribeBlockIgnoreListResponse) => void
  ): Promise<DescribeBlockIgnoreListResponse> {
    return this.request("DescribeBlockIgnoreList", req, cb)
  }

  /**
   * 删除NAT访问控制规则
   */
  async RemoveNatAcRule(
    req: RemoveNatAcRuleRequest,
    cb?: (error: string, rep: RemoveNatAcRuleResponse) => void
  ): Promise<RemoveNatAcRuleResponse> {
    return this.request("RemoveNatAcRule", req, cb)
  }

  /**
   * 访问控制列表
   */
  async DescribeAcLists(
    req: DescribeAcListsRequest,
    cb?: (error: string, rep: DescribeAcListsResponse) => void
  ): Promise<DescribeAcListsResponse> {
    return this.request("DescribeAcLists", req, cb)
  }

  /**
   * 单个修改互联网边界防火墙开关
   */
  async ModifyPublicIPSwitchStatus(
    req: ModifyPublicIPSwitchStatusRequest,
    cb?: (error: string, rep: ModifyPublicIPSwitchStatusResponse) => void
  ): Promise<ModifyPublicIPSwitchStatusResponse> {
    return this.request("ModifyPublicIPSwitchStatus", req, cb)
  }

  /**
   * 查询NAT访问控制列表
   */
  async DescribeNatAcRule(
    req: DescribeNatAcRuleRequest,
    cb?: (error: string, rep: DescribeNatAcRuleResponse) => void
  ): Promise<DescribeNatAcRuleResponse> {
    return this.request("DescribeNatAcRule", req, cb)
  }

  /**
   * 添加nat访问控制规则
   */
  async AddNatAcRule(
    req: AddNatAcRuleRequest,
    cb?: (error: string, rep: AddNatAcRuleResponse) => void
  ): Promise<AddNatAcRuleResponse> {
    return this.request("AddNatAcRule", req, cb)
  }

  /**
   * 防火墙垂直扩容
   */
  async ExpandCfwVertical(
    req: ExpandCfwVerticalRequest,
    cb?: (error: string, rep: ExpandCfwVerticalResponse) => void
  ): Promise<ExpandCfwVerticalResponse> {
    return this.request("ExpandCfwVertical", req, cb)
  }

  /**
     * DescribeBlockByIpTimesList 告警中心阻断IP折线图

     */
  async DescribeBlockByIpTimesList(
    req: DescribeBlockByIpTimesListRequest,
    cb?: (error: string, rep: DescribeBlockByIpTimesListResponse) => void
  ): Promise<DescribeBlockByIpTimesListResponse> {
    return this.request("DescribeBlockByIpTimesList", req, cb)
  }

  /**
     * DescribeBlockStaticList 告警中心柱形图

     */
  async DescribeBlockStaticList(
    req: DescribeBlockStaticListRequest,
    cb?: (error: string, rep: DescribeBlockStaticListResponse) => void
  ): Promise<DescribeBlockStaticListResponse> {
    return this.request("DescribeBlockStaticList", req, cb)
  }
}
