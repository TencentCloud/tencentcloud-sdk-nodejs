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
  DescribeVpcRuleOverviewResponse,
  DescribeSyncAssetStatusResponse,
  ModifyAllSwitchStatusRequest,
  ModifyAllRuleStatusResponse,
  DescribeRuleOverviewResponse,
  CreateSecurityGroupApiRulesRequest,
  DescribeSecurityGroupListResponse,
  AcListsData,
  SequenceData,
  ModifyItemSwitchStatusResponse,
  CreateSecurityGroupApiRulesResponse,
  ModifyAcRuleResponse,
  ModifySequenceRulesResponse,
  DescribeTableStatusResponse,
  DeleteAcRuleResponse,
  ModifySequenceRulesRequest,
  SecurityGroupApiRuleData,
  DescribeSwitchListsResponse,
  DescribeSyncAssetStatusRequest,
  DeleteAllAccessControlRuleRequest,
  RunSyncAssetResponse,
  RunSyncAssetRequest,
  DeleteSecurityGroupRuleRequest,
  ModifyTableStatusResponse,
  ModifyItemSwitchStatusRequest,
  DescribeRuleOverviewRequest,
  DescribeVpcRuleOverviewRequest,
  DescribeAcListsRequest,
  DescribeTableStatusRequest,
  CreateAcRulesResponse,
  DescribeAssociatedInstanceListResponse,
  AssociatedInstanceInfo,
  DescribeAssociatedInstanceListRequest,
  ModifyAcRuleRequest,
  DescribeNatRuleOverviewResponse,
  DeleteAcRuleRequest,
  DeleteAllAccessControlRuleResponse,
  DeleteSecurityGroupAllRuleResponse,
  ModifySecurityGroupAllRuleStatusResponse,
  SecurityGroupListData,
  CreateAcRulesRequest,
  DescribeSecurityGroupListRequest,
  DescribeSwitchListsRequest,
  ModifyTableStatusRequest,
  DeleteSecurityGroupRuleResponse,
  DescribeNatRuleOverviewRequest,
  ModifySecurityGroupAllRuleStatusRequest,
  DeleteSecurityGroupAllRuleRequest,
  ModifyAllRuleStatusRequest,
  RuleInfoData,
  DescribeAcListsResponse,
  SwitchListsData,
  ModifyAllSwitchStatusResponse,
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
   * nat规则列表概况
   */
  async DescribeNatRuleOverview(
    req: DescribeNatRuleOverviewRequest,
    cb?: (error: string, rep: DescribeNatRuleOverviewResponse) => void
  ): Promise<DescribeNatRuleOverviewResponse> {
    return this.request("DescribeNatRuleOverview", req, cb)
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
   * 获取安全组关联实例列表
   */
  async DescribeAssociatedInstanceList(
    req: DescribeAssociatedInstanceListRequest,
    cb?: (error: string, rep: DescribeAssociatedInstanceListResponse) => void
  ): Promise<DescribeAssociatedInstanceListResponse> {
    return this.request("DescribeAssociatedInstanceList", req, cb)
  }

  /**
   * vpc规则列表概况
   */
  async DescribeVpcRuleOverview(
    req: DescribeVpcRuleOverviewRequest,
    cb?: (error: string, rep: DescribeVpcRuleOverviewResponse) => void
  ): Promise<DescribeVpcRuleOverviewResponse> {
    return this.request("DescribeVpcRuleOverview", req, cb)
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
   * 创建安全组API规则
   */
  async CreateSecurityGroupApiRules(
    req: CreateSecurityGroupApiRulesRequest,
    cb?: (error: string, rep: CreateSecurityGroupApiRulesResponse) => void
  ): Promise<CreateSecurityGroupApiRulesResponse> {
    return this.request("CreateSecurityGroupApiRules", req, cb)
  }

  /**
   * 同步资产状态查询-互联网&VPC
   */
  async DescribeSyncAssetStatus(
    req: DescribeSyncAssetStatusRequest,
    cb?: (error: string, rep: DescribeSyncAssetStatusResponse) => void
  ): Promise<DescribeSyncAssetStatusResponse> {
    return this.request("DescribeSyncAssetStatus", req, cb)
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
   * 删除全部规则
   */
  async DeleteSecurityGroupAllRule(
    req: DeleteSecurityGroupAllRuleRequest,
    cb?: (error: string, rep: DeleteSecurityGroupAllRuleResponse) => void
  ): Promise<DeleteSecurityGroupAllRuleResponse> {
    return this.request("DeleteSecurityGroupAllRule", req, cb)
  }

  /**
   * 创建规则
   */
  async CreateAcRules(
    req: CreateAcRulesRequest,
    cb?: (error: string, rep: CreateAcRulesResponse) => void
  ): Promise<CreateAcRulesResponse> {
    return this.request("CreateAcRules", req, cb)
  }

  /**
   * 启用停用全部规则
   */
  async ModifySecurityGroupAllRuleStatus(
    req: ModifySecurityGroupAllRuleStatusRequest,
    cb?: (error: string, rep: ModifySecurityGroupAllRuleStatusResponse) => void
  ): Promise<ModifySecurityGroupAllRuleStatusResponse> {
    return this.request("ModifySecurityGroupAllRuleStatus", req, cb)
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
   * 查询规则列表概况
   */
  async DescribeRuleOverview(
    req: DescribeRuleOverviewRequest,
    cb?: (error: string, rep: DescribeRuleOverviewResponse) => void
  ): Promise<DescribeRuleOverviewResponse> {
    return this.request("DescribeRuleOverview", req, cb)
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
   * 一键开启和关闭
   */
  async ModifyAllSwitchStatus(
    req: ModifyAllSwitchStatusRequest,
    cb?: (error: string, rep: ModifyAllSwitchStatusResponse) => void
  ): Promise<ModifyAllSwitchStatusResponse> {
    return this.request("ModifyAllSwitchStatus", req, cb)
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
   * 查询规则表状态
   */
  async DescribeTableStatus(
    req: DescribeTableStatusRequest,
    cb?: (error: string, rep: DescribeTableStatusResponse) => void
  ): Promise<DescribeTableStatusResponse> {
    return this.request("DescribeTableStatus", req, cb)
  }

  /**
   * 同步资产-互联网&VPC
   */
  async RunSyncAsset(
    req: RunSyncAssetRequest,
    cb?: (error: string, rep: RunSyncAssetResponse) => void
  ): Promise<RunSyncAssetResponse> {
    return this.request("RunSyncAsset", req, cb)
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
   * 访问控制列表
   */
  async DescribeAcLists(
    req: DescribeAcListsRequest,
    cb?: (error: string, rep: DescribeAcListsResponse) => void
  ): Promise<DescribeAcListsResponse> {
    return this.request("DescribeAcLists", req, cb)
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
   * 修改单个防火墙开关
   */
  async ModifyItemSwitchStatus(
    req: ModifyItemSwitchStatusRequest,
    cb?: (error: string, rep: ModifyItemSwitchStatusResponse) => void
  ): Promise<ModifyItemSwitchStatusResponse> {
    return this.request("ModifyItemSwitchStatus", req, cb)
  }
}
