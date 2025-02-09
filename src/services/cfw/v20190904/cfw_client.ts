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
  ModifyEWRuleStatusResponse,
  DescribeNatFwInstanceRequest,
  DescribeNatFwInstanceWithRegionRequest,
  DescribeLogsRequest,
  ModifyFwGroupSwitchRequest,
  ModifySecurityGroupRuleRequest,
  ModifyAssetSyncResponse,
  ModifyNatFwVpcDnsSwitchResponse,
  CreateBlockIgnoreRuleNewRequest,
  ModifyAddressTemplateRequest,
  DescribeRuleOverviewResponse,
  CfwNatDnatRule,
  ScanInfo,
  ModifyEnterpriseSecurityGroupRuleResponse,
  FwCidrInfo,
  StaticInfo,
  ModifySequenceRulesRequest,
  DescribeNatAcRuleResponse,
  ModifyBlockTopRequest,
  AddAclRuleRequest,
  DescribeVpcFwGroupSwitchRequest,
  FwDeploy,
  CreateAlertCenterIsolateResponse,
  ModifyNatAcRuleRequest,
  ModifyAclRuleRequest,
  ModifyAcRuleResponse,
  ModifyAssetScanResponse,
  ModifyNatSequenceRulesRequest,
  DescribeAclRuleResponse,
  DescribeNatFwInstanceWithRegionResponse,
  DescribeTLogInfoRequest,
  BlockIgnoreRule,
  ModifyFwGroupSwitchResponse,
  DeleteNatFwInstanceResponse,
  DeleteBlockIgnoreRuleNewResponse,
  DeleteAllAccessControlRuleRequest,
  ModifyEdgeIpSwitchRequest,
  VpcZoneData,
  DatabaseWhiteListRuleData,
  DescribeNatFwVpcDnsLstRequest,
  DescribeCfwEipsRequest,
  DescribeTLogInfoResponse,
  DescribeUnHandleEventTabListRequest,
  ModifyNatInstanceRequest,
  DescribeNatFwDnatRuleRequest,
  DescribeAssociatedInstanceListResponse,
  AssociatedInstanceInfo,
  CreateBlockIgnoreRuleListRequest,
  RemoveAcRuleResponse,
  NatFwInstance,
  ModifyNatAcRuleResponse,
  DescribeAclRuleRequest,
  NatInstanceInfo,
  CreateSecurityGroupRulesResponse,
  ExpandCfwVerticalRequest,
  ModifyAllPublicIPSwitchStatusResponse,
  SyncFwOperateRequest,
  ModifyAssetScanRequest,
  ModifyBlockIgnoreListRequest,
  BanAndAllowRuleDel,
  AddEnterpriseSecurityGroupRulesRequest,
  FwGateway,
  ModifySecurityGroupSequenceRulesResponse,
  SecurityGroupRule,
  DeleteIdsWhiteRuleRequest,
  ModifyNatFwSwitchResponse,
  ModifyAclRuleResponse,
  SequenceData,
  CreateNatFwInstanceRequest,
  ModifySecurityGroupItemRuleStatusResponse,
  DescribeEnterpriseSecurityGroupRuleResponse,
  VpcFwGroupInfo,
  DeleteBlockIgnoreRuleListResponse,
  IpStatic,
  CreateVpcFwGroupResponse,
  VpcFwCvmInsInfo,
  DescribeEnterpriseSecurityGroupRuleRequest,
  CreateAlertCenterRuleRequest,
  ModifyNatFwReSelectResponse,
  CreateAlertCenterOmitRequest,
  DescribeVpcAcRuleRequest,
  DeleteRemoteAccessDomainResponse,
  VpcFwInstanceInfo,
  DescribeSwitchListsRequest,
  NatFwEipsInfo,
  AddAclRuleResponse,
  DeleteRemoteAccessDomainRequest,
  SetNatFwEipResponse,
  DeleteSecurityGroupRuleResponse,
  CreateNatRuleItem,
  ModifyStorageSettingResponse,
  AcListsData,
  ModifySecurityGroupItemRuleStatusRequest,
  ModifyBlockIgnoreRuleNewResponse,
  DescribeSourceAssetRequest,
  SecurityGroupOrderIndexData,
  DescribeFwGroupInstanceInfoResponse,
  DescribeSourceAssetResponse,
  DescribeFwGroupInstanceInfoRequest,
  ModifyBlockIgnoreRuleRequest,
  DescribeEnterpriseSGRuleProgressRequest,
  FwVpcCidr,
  EdgeIpInfo,
  AssetZone,
  RuleChangeItem,
  IntrusionDefenseRule,
  DescribeTLogIpListRequest,
  CommonFilter,
  DescribeNatFwInstancesInfoRequest,
  AddVpcAcRuleRequest,
  DescribeTableStatusRequest,
  ModifyNatSequenceRulesResponse,
  DescribeAssetSyncResponse,
  DescribeSecurityGroupListRequest,
  ModifyAddressTemplateResponse,
  CreateNatFwInstanceResponse,
  NewModeItems,
  DescribeNatFwInfoCountResponse,
  DescribeDefenseSwitchRequest,
  ModifyVpcFwGroupRequest,
  ModifyEnterpriseSecurityDispatchStatusResponse,
  CreateIdsWhiteRuleResponse,
  ModifyResourceGroupRequest,
  SecurityGroupListData,
  EdgeIpSwitch,
  ModifySequenceAclRulesRequest,
  ModifyVpcAcRuleRequest,
  CreateNatFwInstanceWithDomainResponse,
  DescribeFwSyncStatusRequest,
  ModifyEnterpriseSecurityGroupRuleRequest,
  BetaInfoByACL,
  RemoveNatAcRuleRequest,
  DescribeAssetSyncRequest,
  DeleteVpcFwGroupRequest,
  IPDefendStatus,
  RuleInfoData,
  DescribeAcListsResponse,
  ModifyAllPublicIPSwitchStatusRequest,
  ModifySequenceAclRulesResponse,
  CreateAddressTemplateRequest,
  CreateBlockIgnoreRuleNewResponse,
  AddNatAcRuleRequest,
  ModifySecurityGroupSequenceRulesRequest,
  CreateDatabaseWhiteListRulesResponse,
  DeleteBlockIgnoreRuleListRequest,
  SyncFwOperateResponse,
  DeleteVpcFwGroupResponse,
  CreateChooseVpcsResponse,
  DescribeUnHandleEventTabListResponse,
  NatFwFilter,
  ScanResultInfo,
  ModifyRunSyncAssetResponse,
  AddVpcAcRuleResponse,
  DescribeSecurityGroupListResponse,
  DescribeVpcAcRuleResponse,
  AddEnterpriseSecurityGroupRulesResponse,
  UnHandleEventDetail,
  RemoveEnterpriseSecurityGroupRuleRequest,
  DeleteResourceGroupRequest,
  SecurityGroupSimplifyRule,
  DescribeBlockByIpTimesListRequest,
  VpcRuleItem,
  DescribeIdsWhiteRuleResponse,
  RemoveEnterpriseSecurityGroupRuleResponse,
  NetInstancesInfo,
  DescribeEnterpriseSecurityGroupRuleListRequest,
  VpcDnsInfo,
  CreateAddressTemplateResponse,
  DescribeTableStatusResponse,
  ModifySequenceRulesResponse,
  DeleteIdsWhiteRuleResponse,
  CreateAlertCenterOmitResponse,
  DescribeResourceGroupNewResponse,
  ModifyEdgeIpSwitchResponse,
  DescribeResourceGroupNewRequest,
  DescribeAddressTemplateListRequest,
  RemoveAclRuleRequest,
  DeleteAcRuleResponse,
  EnterpriseSecurityGroupRuleRuleInfo,
  IocListData,
  InstanceInfo,
  DescribeIPStatusListRequest,
  DescribeNatFwDnatRuleResponse,
  ModifyNatFwVpcDnsSwitchRequest,
  DescribeFwSyncStatusResponse,
  DescribeBlockByIpTimesListResponse,
  ModifyAllRuleStatusRequest,
  SetNatFwDnatRuleResponse,
  VpcFwInstanceShow,
  DescribeRuleOverviewRequest,
  DescribeDefenseSwitchResponse,
  DescribeAcListsRequest,
  IdsWhiteInfo,
  DescribeGuideScanInfoRequest,
  UnHandleEvent,
  DescribeAssociatedInstanceListRequest,
  ModifyVpcAcRuleResponse,
  ModifyBlockIgnoreRuleNewRequest,
  ModifyEWRuleStatusRequest,
  DeleteAcRuleRequest,
  DeleteAllAccessControlRuleResponse,
  ModifyNatFwSwitchRequest,
  DeleteBlockIgnoreRuleNewRequest,
  RemoveNatAcRuleResponse,
  CustomWhiteRule,
  DescribeFwEdgeIpsResponse,
  DescribeIPStatusListResponse,
  CreateDatabaseWhiteListRulesRequest,
  FwGroupSwitch,
  TemplateListInfo,
  VpcFwJoinInstanceType,
  DescribeVpcFwGroupSwitchResponse,
  ModifyBlockIgnoreRuleResponse,
  DescribeTLogIpListResponse,
  StopSecurityGroupRuleDispatchResponse,
  DescribeNatFwInfoCountRequest,
  BanAndAllowRule,
  RemoveAcRuleRequest,
  FwGroupSwitchShow,
  ModifyNatFwReSelectRequest,
  ModifyVpcFwSequenceRulesResponse,
  SetNatFwDnatRuleRequest,
  SecurityGroupBothWayInfo,
  ModifyAllRuleStatusResponse,
  StopSecurityGroupRuleDispatchRequest,
  EnterpriseSecurityGroupRuleBetaInfo,
  SetNatFwEipRequest,
  DescribeBlockIgnoreListRequest,
  ModifyBlockTopResponse,
  RemoveAclRuleResponse,
  DeleteNatFwInstanceRequest,
  ModifyVpcFwSequenceRulesRequest,
  ModifyStorageSettingRequest,
  DescribeIdsWhiteRuleRequest,
  ModifyAssetSyncRequest,
  DescribeNatFwVpcDnsLstResponse,
  DescAcItem,
  CreateChooseVpcsRequest,
  ExpandCfwVerticalResponse,
  DescribeBlockStaticListRequest,
  TLogInfo,
  DescribeLogsResponse,
  CreateSecurityGroupRulesRequest,
  DnsVpcSwitch,
  SwitchListsData,
  CreateVpcFwGroupRequest,
  CreateNatFwInstanceWithDomainRequest,
  RemoveVpcAcRuleRequest,
  TagInfo,
  DescribeResourceGroupResponse,
  DeleteAddressTemplateResponse,
  CreateBlockIgnoreRuleListResponse,
  DescribeCfwEipsResponse,
  ModifyResourceGroupResponse,
  ModifyVpcFwGroupResponse,
  DeleteResourceGroupResponse,
  DeleteSecurityGroupRuleRequest,
  CreateAlertCenterIsolateRequest,
  DescribeNatAcRuleRequest,
  DescribeEnterpriseSecurityGroupRuleListResponse,
  ModifyRunSyncAssetRequest,
  DeleteAddressTemplateRequest,
  CreateAcRulesResponse,
  DescribeEnterpriseSGRuleProgressResponse,
  DescribeSwitchListsResponse,
  ModifyAcRuleRequest,
  RemoveVpcAcRuleResponse,
  DescribeNatFwInstancesInfoResponse,
  AddNatAcRuleResponse,
  ModifyBlockIgnoreListResponse,
  DescribeNatFwInstanceResponse,
  ModifySecurityGroupRuleResponse,
  DescribeFwEdgeIpsRequest,
  CreateRuleItem,
  DescribeResourceGroupRequest,
  CreateAcRulesRequest,
  ModifyEnterpriseSecurityDispatchStatusRequest,
  DescNatDnatRule,
  DescribeBlockIgnoreListResponse,
  ModifyNatInstanceResponse,
  ModifyTableStatusRequest,
  ModifyTableStatusResponse,
  DescribeBlockStaticListResponse,
  DescribeGuideScanInfoResponse,
  VpcFwInstance,
  CreateAlertCenterRuleResponse,
  DescribeAddressTemplateListResponse,
  CreateIdsWhiteRuleRequest,
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
   * 删除VPC间规则
   */
  async RemoveVpcAcRule(
    req: RemoveVpcAcRuleRequest,
    cb?: (error: string, rep: RemoveVpcAcRuleResponse) => void
  ): Promise<RemoveVpcAcRuleResponse> {
    return this.request("RemoveVpcAcRule", req, cb)
  }

  /**
   * 批量删除入侵防御封禁列表、放通列表规则（新）
   */
  async DeleteBlockIgnoreRuleNew(
    req: DeleteBlockIgnoreRuleNewRequest,
    cb?: (error: string, rep: DeleteBlockIgnoreRuleNewResponse) => void
  ): Promise<DeleteBlockIgnoreRuleNewResponse> {
    return this.request("DeleteBlockIgnoreRuleNew", req, cb)
  }

  /**
   * VPC防火墙(组)开关列表
   */
  async DescribeVpcFwGroupSwitch(
    req: DescribeVpcFwGroupSwitchRequest,
    cb?: (error: string, rep: DescribeVpcFwGroupSwitchResponse) => void
  ): Promise<DescribeVpcFwGroupSwitchResponse> {
    return this.request("DescribeVpcFwGroupSwitch", req, cb)
  }

  /**
     * 启用停用VPC间规则或Nat边界规则
VPC间规则需指定EdgeId。Nat边界规则需指定地域Region与Direction。
     */
  async ModifyEWRuleStatus(
    req: ModifyEWRuleStatusRequest,
    cb?: (error: string, rep: ModifyEWRuleStatusResponse) => void
  ): Promise<ModifyEWRuleStatusResponse> {
    return this.request("ModifyEWRuleStatus", req, cb)
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
   * ModifyResourceGroup-资产中心资产组信息修改
   */
  async ModifyResourceGroup(
    req: ModifyResourceGroupRequest,
    cb?: (error: string, rep: ModifyResourceGroupResponse) => void
  ): Promise<ModifyResourceGroupResponse> {
    return this.request("ModifyResourceGroup", req, cb)
  }

  /**
   * 资产中心资产组数数据信息查询
   */
  async DescribeResourceGroupNew(
    req: DescribeResourceGroupNewRequest,
    cb?: (error: string, rep: DescribeResourceGroupNewResponse) => void
  ): Promise<DescribeResourceGroupNewResponse> {
    return this.request("DescribeResourceGroupNew", req, cb)
  }

  /**
   * 编辑VPC间防火墙(防火墙组)
   */
  async ModifyVpcFwGroup(
    req: ModifyVpcFwGroupRequest,
    cb?: (error: string, rep: ModifyVpcFwGroupResponse) => void
  ): Promise<ModifyVpcFwGroupResponse> {
    return this.request("ModifyVpcFwGroup", req, cb)
  }

  /**
   * 资产同步
   */
  async ModifyAssetSync(
    req?: ModifyAssetSyncRequest,
    cb?: (error: string, rep: ModifyAssetSyncResponse) => void
  ): Promise<ModifyAssetSyncResponse> {
    return this.request("ModifyAssetSync", req, cb)
  }

  /**
   * 删除防火墙(组)，或者删除其中实例
   */
  async DeleteVpcFwGroup(
    req: DeleteVpcFwGroupRequest,
    cb?: (error: string, rep: DeleteVpcFwGroupResponse) => void
  ): Promise<DeleteVpcFwGroupResponse> {
    return this.request("DeleteVpcFwGroup", req, cb)
  }

  /**
   * 添加VPC内网间规则
   */
  async AddVpcAcRule(
    req: AddVpcAcRuleRequest,
    cb?: (error: string, rep: AddVpcAcRuleResponse) => void
  ): Promise<AddVpcAcRuleResponse> {
    return this.request("AddVpcAcRule", req, cb)
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
   * 查询规则表状态
   */
  async DescribeTableStatus(
    req: DescribeTableStatusRequest,
    cb?: (error: string, rep: DescribeTableStatusResponse) => void
  ): Promise<DescribeTableStatusResponse> {
    return this.request("DescribeTableStatus", req, cb)
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
   * 删除新企业安全组规则
   */
  async RemoveEnterpriseSecurityGroupRule(
    req: RemoveEnterpriseSecurityGroupRuleRequest,
    cb?: (error: string, rep: RemoveEnterpriseSecurityGroupRuleResponse) => void
  ): Promise<RemoveEnterpriseSecurityGroupRuleResponse> {
    return this.request("RemoveEnterpriseSecurityGroupRule", req, cb)
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
   * DescribeUnHandleEventTabList 告警中心伪攻击链事件未处置接口
   */
  async DescribeUnHandleEventTabList(
    req: DescribeUnHandleEventTabListRequest,
    cb?: (error: string, rep: DescribeUnHandleEventTabListResponse) => void
  ): Promise<DescribeUnHandleEventTabListResponse> {
    return this.request("DescribeUnHandleEventTabList", req, cb)
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
   * ModifyBlockTop取消置顶接口
   */
  async ModifyBlockTop(
    req: ModifyBlockTopRequest,
    cb?: (error: string, rep: ModifyBlockTopResponse) => void
  ): Promise<ModifyBlockTopResponse> {
    return this.request("ModifyBlockTop", req, cb)
  }

  /**
   * 删除远程运维域名
   */
  async DeleteRemoteAccessDomain(
    req: DeleteRemoteAccessDomainRequest,
    cb?: (error: string, rep: DeleteRemoteAccessDomainResponse) => void
  ): Promise<DeleteRemoteAccessDomainResponse> {
    return this.request("DeleteRemoteAccessDomain", req, cb)
  }

  /**
   * 删除互联网边界访问控制规则
   */
  async RemoveAclRule(
    req: RemoveAclRuleRequest,
    cb?: (error: string, rep: RemoveAclRuleResponse) => void
  ): Promise<RemoveAclRuleResponse> {
    return this.request("RemoveAclRule", req, cb)
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
   * 批量添加入侵防御封禁列表、放通列表规则
   */
  async CreateBlockIgnoreRuleList(
    req: CreateBlockIgnoreRuleListRequest,
    cb?: (error: string, rep: CreateBlockIgnoreRuleListResponse) => void
  ): Promise<CreateBlockIgnoreRuleListResponse> {
    return this.request("CreateBlockIgnoreRuleList", req, cb)
  }

  /**
   * 编辑单条入侵防御封禁列表、放通列表规则（新）
   */
  async ModifyBlockIgnoreRuleNew(
    req: ModifyBlockIgnoreRuleNewRequest,
    cb?: (error: string, rep: ModifyBlockIgnoreRuleNewResponse) => void
  ): Promise<ModifyBlockIgnoreRuleNewResponse> {
    return this.request("ModifyBlockIgnoreRuleNew", req, cb)
  }

  /**
   * 修改边界防火墙开关(旁路、串行)
   */
  async ModifyEdgeIpSwitch(
    req: ModifyEdgeIpSwitchRequest,
    cb?: (error: string, rep: ModifyEdgeIpSwitchResponse) => void
  ): Promise<ModifyEdgeIpSwitchResponse> {
    return this.request("ModifyEdgeIpSwitch", req, cb)
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
   * 查询Nat防火墙Dnat规则
   */
  async DescribeNatFwDnatRule(
    req: DescribeNatFwDnatRuleRequest,
    cb?: (error: string, rep: DescribeNatFwDnatRuleResponse) => void
  ): Promise<DescribeNatFwDnatRuleResponse> {
    return this.request("DescribeNatFwDnatRule", req, cb)
  }

  /**
   * 查询新版安全组下发进度
   */
  async DescribeEnterpriseSGRuleProgress(
    req?: DescribeEnterpriseSGRuleProgressRequest,
    cb?: (error: string, rep: DescribeEnterpriseSGRuleProgressResponse) => void
  ): Promise<DescribeEnterpriseSGRuleProgressResponse> {
    return this.request("DescribeEnterpriseSGRuleProgress", req, cb)
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
   * 展示当前natfw 实例对应的vpc dns开关
   */
  async DescribeNatFwVpcDnsLst(
    req: DescribeNatFwVpcDnsLstRequest,
    cb?: (error: string, rep: DescribeNatFwVpcDnsLstResponse) => void
  ): Promise<DescribeNatFwVpcDnsLstResponse> {
    return this.request("DescribeNatFwVpcDnsLst", req, cb)
  }

  /**
   * 编辑单条入侵防御封禁列表、放通列表规则
   */
  async ModifyBlockIgnoreRule(
    req: ModifyBlockIgnoreRuleRequest,
    cb?: (error: string, rep: ModifyBlockIgnoreRuleResponse) => void
  ): Promise<ModifyBlockIgnoreRuleResponse> {
    return this.request("ModifyBlockIgnoreRule", req, cb)
  }

  /**
   * 查询互联网边界访问控制列表
   */
  async DescribeAclRule(
    req: DescribeAclRuleRequest,
    cb?: (error: string, rep: DescribeAclRuleResponse) => void
  ): Promise<DescribeAclRuleResponse> {
    return this.request("DescribeAclRule", req, cb)
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
   * 修改内网间访问控制规则
   */
  async ModifyVpcAcRule(
    req: ModifyVpcAcRuleRequest,
    cb?: (error: string, rep: ModifyVpcAcRuleResponse) => void
  ): Promise<ModifyVpcAcRuleResponse> {
    return this.request("ModifyVpcAcRule", req, cb)
  }

  /**
   * 资产同步状态查询
   */
  async DescribeAssetSync(
    req?: DescribeAssetSyncRequest,
    cb?: (error: string, rep: DescribeAssetSyncResponse) => void
  ): Promise<DescribeAssetSyncResponse> {
    return this.request("DescribeAssetSync", req, cb)
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
   * 获取入侵防御按钮列表
   */
  async DescribeDefenseSwitch(
    req?: DescribeDefenseSwitchRequest,
    cb?: (error: string, rep: DescribeDefenseSwitchResponse) => void
  ): Promise<DescribeDefenseSwitchResponse> {
    return this.request("DescribeDefenseSwitch", req, cb)
  }

  /**
   * 获取租户所有VPC防火墙(组)及VPC防火墙实例卡片信息
   */
  async DescribeFwGroupInstanceInfo(
    req: DescribeFwGroupInstanceInfoRequest,
    cb?: (error: string, rep: DescribeFwGroupInstanceInfoResponse) => void
  ): Promise<DescribeFwGroupInstanceInfoResponse> {
    return this.request("DescribeFwGroupInstanceInfo", req, cb)
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
   * 启用停用单条企业安全组规则
   */
  async ModifySecurityGroupItemRuleStatus(
    req: ModifySecurityGroupItemRuleStatusRequest,
    cb?: (error: string, rep: ModifySecurityGroupItemRuleStatusResponse) => void
  ): Promise<ModifySecurityGroupItemRuleStatusResponse> {
    return this.request("ModifySecurityGroupItemRuleStatus", req, cb)
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
   * 删除入侵防御规则白名单接口
   */
  async DeleteIdsWhiteRule(
    req: DeleteIdsWhiteRuleRequest,
    cb?: (error: string, rep: DeleteIdsWhiteRuleResponse) => void
  ): Promise<DeleteIdsWhiteRuleResponse> {
    return this.request("DeleteIdsWhiteRule", req, cb)
  }

  /**
   * 批量添加入侵防御封禁列表、放通列表规则
   */
  async CreateBlockIgnoreRuleNew(
    req: CreateBlockIgnoreRuleNewRequest,
    cb?: (error: string, rep: CreateBlockIgnoreRuleNewResponse) => void
  ): Promise<CreateBlockIgnoreRuleNewResponse> {
    return this.request("CreateBlockIgnoreRuleNew", req, cb)
  }

  /**
   * DescribeSourceAsset-查询全部资产信息
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
   * 删除互联网边界规则
   */
  async RemoveAcRule(
    req: RemoveAcRuleRequest,
    cb?: (error: string, rep: RemoveAcRuleResponse) => void
  ): Promise<RemoveAcRuleResponse> {
    return this.request("RemoveAcRule", req, cb)
  }

  /**
   * vpc间规则快速排序
   */
  async ModifyVpcFwSequenceRules(
    req: ModifyVpcFwSequenceRulesRequest,
    cb?: (error: string, rep: ModifyVpcFwSequenceRulesResponse) => void
  ): Promise<ModifyVpcFwSequenceRulesResponse> {
    return this.request("ModifyVpcFwSequenceRules", req, cb)
  }

  /**
   * 用户告警中心-忽略处置按钮
   */
  async CreateAlertCenterOmit(
    req: CreateAlertCenterOmitRequest,
    cb?: (error: string, rep: CreateAlertCenterOmitResponse) => void
  ): Promise<CreateAlertCenterOmitResponse> {
    return this.request("CreateAlertCenterOmit", req, cb)
  }

  /**
   * 创建入侵防御规则白名单接口
   */
  async CreateIdsWhiteRule(
    req: CreateIdsWhiteRuleRequest,
    cb?: (error: string, rep: CreateIdsWhiteRuleResponse) => void
  ): Promise<CreateIdsWhiteRuleResponse> {
    return this.request("CreateIdsWhiteRule", req, cb)
  }

  /**
   * 查询内网间访问控制列表
   */
  async DescribeVpcAcRule(
    req: DescribeVpcAcRuleRequest,
    cb?: (error: string, rep: DescribeVpcAcRuleResponse) => void
  ): Promise<DescribeVpcAcRuleResponse> {
    return this.request("DescribeVpcAcRule", req, cb)
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
   * 添加互联网边界访问控制规则
   */
  async AddAclRule(
    req: AddAclRuleRequest,
    cb?: (error: string, rep: AddAclRuleResponse) => void
  ): Promise<AddAclRuleResponse> {
    return this.request("AddAclRule", req, cb)
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
   * 删除规则
   */
  async DeleteSecurityGroupRule(
    req: DeleteSecurityGroupRuleRequest,
    cb?: (error: string, rep: DeleteSecurityGroupRuleResponse) => void
  ): Promise<DeleteSecurityGroupRuleResponse> {
    return this.request("DeleteSecurityGroupRule", req, cb)
  }

  /**
   * 修改地址模板
   */
  async ModifyAddressTemplate(
    req: ModifyAddressTemplateRequest,
    cb?: (error: string, rep: ModifyAddressTemplateResponse) => void
  ): Promise<ModifyAddressTemplateResponse> {
    return this.request("ModifyAddressTemplate", req, cb)
  }

  /**
   * 防火墙开关列表，已废弃，请使用DescribeFwEdgeIps
   */
  async DescribeSwitchLists(
    req: DescribeSwitchListsRequest,
    cb?: (error: string, rep: DescribeSwitchListsResponse) => void
  ): Promise<DescribeSwitchListsResponse> {
    return this.request("DescribeSwitchLists", req, cb)
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
   * 用户告警中心-封隔离处置按钮
   */
  async CreateAlertCenterIsolate(
    req: CreateAlertCenterIsolateRequest,
    cb?: (error: string, rep: CreateAlertCenterIsolateResponse) => void
  ): Promise<CreateAlertCenterIsolateResponse> {
    return this.request("CreateAlertCenterIsolate", req, cb)
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
   * 创建、选择vpc
   */
  async CreateChooseVpcs(
    req: CreateChooseVpcsRequest,
    cb?: (error: string, rep: CreateChooseVpcsResponse) => void
  ): Promise<CreateChooseVpcsResponse> {
    return this.request("CreateChooseVpcs", req, cb)
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
   * 删除地址模板规则
   */
  async DeleteAddressTemplate(
    req: DeleteAddressTemplateRequest,
    cb?: (error: string, rep: DeleteAddressTemplateResponse) => void
  ): Promise<DeleteAddressTemplateResponse> {
    return this.request("DeleteAddressTemplate", req, cb)
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
   * 互联网边界规则快速排序
   */
  async ModifySequenceAclRules(
    req: ModifySequenceAclRulesRequest,
    cb?: (error: string, rep: ModifySequenceAclRulesResponse) => void
  ): Promise<ModifySequenceAclRulesResponse> {
    return this.request("ModifySequenceAclRules", req, cb)
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
   * IP防护状态查询
   */
  async DescribeIPStatusList(
    req: DescribeIPStatusListRequest,
    cb?: (error: string, rep: DescribeIPStatusListResponse) => void
  ): Promise<DescribeIPStatusListResponse> {
    return this.request("DescribeIPStatusList", req, cb)
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
   * 修改防火墙(组)开关(支持单点模式、多点模式、全互通模式)
   */
  async ModifyFwGroupSwitch(
    req: ModifyFwGroupSwitchRequest,
    cb?: (error: string, rep: ModifyFwGroupSwitchResponse) => void
  ): Promise<ModifyFwGroupSwitchResponse> {
    return this.request("ModifyFwGroupSwitch", req, cb)
  }

  /**
   * 日志审计日志查询
   */
  async DescribeLogs(
    req: DescribeLogsRequest,
    cb?: (error: string, rep: DescribeLogsResponse) => void
  ): Promise<DescribeLogsResponse> {
    return this.request("DescribeLogs", req, cb)
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
   * 批量删除入侵防御封禁列表、放通列表规则
   */
  async DeleteBlockIgnoreRuleList(
    req: DeleteBlockIgnoreRuleListRequest,
    cb?: (error: string, rep: DeleteBlockIgnoreRuleListResponse) => void
  ): Promise<DeleteBlockIgnoreRuleListResponse> {
    return this.request("DeleteBlockIgnoreRuleList", req, cb)
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
   * 用户告警中心-封禁、放通处置按钮
   */
  async CreateAlertCenterRule(
    req: CreateAlertCenterRuleRequest,
    cb?: (error: string, rep: CreateAlertCenterRuleResponse) => void
  ): Promise<CreateAlertCenterRuleResponse> {
    return this.request("CreateAlertCenterRule", req, cb)
  }

  /**
   * 修改互联网边界访问控制规则
   */
  async ModifyAclRule(
    req: ModifyAclRuleRequest,
    cb?: (error: string, rep: ModifyAclRuleResponse) => void
  ): Promise<ModifyAclRuleResponse> {
    return this.request("ModifyAclRule", req, cb)
  }

  /**
   * 查询新企业安全组规则  从node接口迁移   原接口DescribeSecurityGroupNewList
   */
  async DescribeEnterpriseSecurityGroupRuleList(
    req: DescribeEnterpriseSecurityGroupRuleListRequest,
    cb?: (error: string, rep: DescribeEnterpriseSecurityGroupRuleListResponse) => void
  ): Promise<DescribeEnterpriseSecurityGroupRuleListResponse> {
    return this.request("DescribeEnterpriseSecurityGroupRuleList", req, cb)
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
   * 防火墙垂直扩容
   */
  async ExpandCfwVertical(
    req: ExpandCfwVerticalRequest,
    cb?: (error: string, rep: ExpandCfwVerticalResponse) => void
  ): Promise<ExpandCfwVerticalResponse> {
    return this.request("ExpandCfwVertical", req, cb)
  }

  /**
   * 创建VPC间防火墙(防火墙组)
   */
  async CreateVpcFwGroup(
    req: CreateVpcFwGroupRequest,
    cb?: (error: string, rep: CreateVpcFwGroupResponse) => void
  ): Promise<CreateVpcFwGroupResponse> {
    return this.request("CreateVpcFwGroup", req, cb)
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
   * 编辑NAT防火墙
   */
  async ModifyNatInstance(
    req: ModifyNatInstanceRequest,
    cb?: (error: string, rep: ModifyNatInstanceResponse) => void
  ): Promise<ModifyNatInstanceResponse> {
    return this.request("ModifyNatInstance", req, cb)
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
   * 查询NAT访问控制列表
   */
  async DescribeNatAcRule(
    req: DescribeNatAcRuleRequest,
    cb?: (error: string, rep: DescribeNatAcRuleResponse) => void
  ): Promise<DescribeNatAcRuleResponse> {
    return this.request("DescribeNatAcRule", req, cb)
  }

  /**
   * 获取防火墙同步状态，一般在执行同步操作后查询
   */
  async DescribeFwSyncStatus(
    req: DescribeFwSyncStatusRequest,
    cb?: (error: string, rep: DescribeFwSyncStatusResponse) => void
  ): Promise<DescribeFwSyncStatusResponse> {
    return this.request("DescribeFwSyncStatus", req, cb)
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
   * 创建访问控制规则
   */
  async CreateAcRules(
    req: CreateAcRulesRequest,
    cb?: (error: string, rep: CreateAcRulesResponse) => void
  ): Promise<CreateAcRulesResponse> {
    return this.request("CreateAcRules", req, cb)
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
   * DescribeTLogInfo告警中心概况查询
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
   * DescribeGuideScanInfo新手引导扫描接口信息
   */
  async DescribeGuideScanInfo(
    req?: DescribeGuideScanInfoRequest,
    cb?: (error: string, rep: DescribeGuideScanInfoResponse) => void
  ): Promise<DescribeGuideScanInfoResponse> {
    return this.request("DescribeGuideScanInfo", req, cb)
  }

  /**
   * 查询地址模板列表
   */
  async DescribeAddressTemplateList(
    req: DescribeAddressTemplateListRequest,
    cb?: (error: string, rep: DescribeAddressTemplateListResponse) => void
  ): Promise<DescribeAddressTemplateListResponse> {
    return this.request("DescribeAddressTemplateList", req, cb)
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
   * 日志存储设置，可以修改存储时间和清空日志
   */
  async ModifyStorageSetting(
    req?: ModifyStorageSettingRequest,
    cb?: (error: string, rep: ModifyStorageSettingResponse) => void
  ): Promise<ModifyStorageSettingResponse> {
    return this.request("ModifyStorageSetting", req, cb)
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
   * 同步防火墙操作，包括同步防火墙路由（若vpc，专线网关等增加了Cidr，需要手动同步一下路由使之在防火墙上生效）等。
   */
  async SyncFwOperate(
    req: SyncFwOperateRequest,
    cb?: (error: string, rep: SyncFwOperateResponse) => void
  ): Promise<SyncFwOperateResponse> {
    return this.request("SyncFwOperate", req, cb)
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
   * 串行防火墙IP开关列表
   */
  async DescribeFwEdgeIps(
    req: DescribeFwEdgeIpsRequest,
    cb?: (error: string, rep: DescribeFwEdgeIpsResponse) => void
  ): Promise<DescribeFwEdgeIpsResponse> {
    return this.request("DescribeFwEdgeIps", req, cb)
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
   * DescribeTLogIpList告警中心IP柱形图
   */
  async DescribeTLogIpList(
    req: DescribeTLogIpListRequest,
    cb?: (error: string, rep: DescribeTLogIpListResponse) => void
  ): Promise<DescribeTLogIpListResponse> {
    return this.request("DescribeTLogIpList", req, cb)
  }

  /**
   * 创建地址模板规则
   */
  async CreateAddressTemplate(
    req: CreateAddressTemplateRequest,
    cb?: (error: string, rep: CreateAddressTemplateResponse) => void
  ): Promise<CreateAddressTemplateResponse> {
    return this.request("CreateAddressTemplate", req, cb)
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
   * DescribeBlockStaticList 告警中心柱形图
   */
  async DescribeBlockStaticList(
    req: DescribeBlockStaticListRequest,
    cb?: (error: string, rep: DescribeBlockStaticListResponse) => void
  ): Promise<DescribeBlockStaticListResponse> {
    return this.request("DescribeBlockStaticList", req, cb)
  }

  /**
   * 查询入侵防御规则白名单接口
   */
  async DescribeIdsWhiteRule(
    req: DescribeIdsWhiteRuleRequest,
    cb?: (error: string, rep: DescribeIdsWhiteRuleResponse) => void
  ): Promise<DescribeIdsWhiteRuleResponse> {
    return this.request("DescribeIdsWhiteRule", req, cb)
  }
}
