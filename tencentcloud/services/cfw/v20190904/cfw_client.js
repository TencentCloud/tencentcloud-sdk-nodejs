"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * cfw client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("cfw.tencentcloudapi.com", "2019-09-04", clientConfig);
    }
    /**
     * 删除VPC间规则
     */
    async RemoveVpcAcRule(req, cb) {
        return this.request("RemoveVpcAcRule", req, cb);
    }
    /**
     * 批量删除入侵防御封禁列表、放通列表规则（新）
     */
    async DeleteBlockIgnoreRuleNew(req, cb) {
        return this.request("DeleteBlockIgnoreRuleNew", req, cb);
    }
    /**
     * VPC防火墙(组)开关列表
     */
    async DescribeVpcFwGroupSwitch(req, cb) {
        return this.request("DescribeVpcFwGroupSwitch", req, cb);
    }
    /**
     * 启用停用VPC间规则或Nat边界规则
VPC间规则需指定EdgeId。Nat边界规则需指定地域Region与Direction。
     */
    async ModifyEWRuleStatus(req, cb) {
        return this.request("ModifyEWRuleStatus", req, cb);
    }
    /**
     * 中止安全组规则下发
     */
    async StopSecurityGroupRuleDispatch(req, cb) {
        return this.request("StopSecurityGroupRuleDispatch", req, cb);
    }
    /**
     * ModifyResourceGroup-资产中心资产组信息修改
     */
    async ModifyResourceGroup(req, cb) {
        return this.request("ModifyResourceGroup", req, cb);
    }
    /**
     * 资产中心资产组数数据信息查询
     */
    async DescribeResourceGroupNew(req, cb) {
        return this.request("DescribeResourceGroupNew", req, cb);
    }
    /**
     * 编辑VPC间防火墙(防火墙组)
     */
    async ModifyVpcFwGroup(req, cb) {
        return this.request("ModifyVpcFwGroup", req, cb);
    }
    /**
     * 资产同步
     */
    async ModifyAssetSync(req, cb) {
        return this.request("ModifyAssetSync", req, cb);
    }
    /**
     * 删除防火墙(组)，或者删除其中实例
     */
    async DeleteVpcFwGroup(req, cb) {
        return this.request("DeleteVpcFwGroup", req, cb);
    }
    /**
     * 添加VPC内网间规则
     */
    async AddVpcAcRule(req, cb) {
        return this.request("AddVpcAcRule", req, cb);
    }
    /**
     * 创建新企业安全组规则
     */
    async AddEnterpriseSecurityGroupRules(req, cb) {
        return this.request("AddEnterpriseSecurityGroupRules", req, cb);
    }
    /**
     * 查询规则表状态
     */
    async DescribeTableStatus(req, cb) {
        return this.request("DescribeTableStatus", req, cb);
    }
    /**
     * 企业安全组规则快速排序
     */
    async ModifySecurityGroupSequenceRules(req, cb) {
        return this.request("ModifySecurityGroupSequenceRules", req, cb);
    }
    /**
     * 删除新企业安全组规则
     */
    async RemoveEnterpriseSecurityGroupRule(req, cb) {
        return this.request("RemoveEnterpriseSecurityGroupRule", req, cb);
    }
    /**
     * NAT防火墙规则快速排序
     */
    async ModifyNatSequenceRules(req, cb) {
        return this.request("ModifyNatSequenceRules", req, cb);
    }
    /**
     * DescribeUnHandleEventTabList 告警中心伪攻击链事件未处置接口
     */
    async DescribeUnHandleEventTabList(req, cb) {
        return this.request("DescribeUnHandleEventTabList", req, cb);
    }
    /**
     * 创建NAT防火墙实例（Region参数必填）
     */
    async CreateNatFwInstance(req, cb) {
        return this.request("CreateNatFwInstance", req, cb);
    }
    /**
     * ModifyBlockTop取消置顶接口
     */
    async ModifyBlockTop(req, cb) {
        return this.request("ModifyBlockTop", req, cb);
    }
    /**
     * 删除远程运维域名
     */
    async DeleteRemoteAccessDomain(req, cb) {
        return this.request("DeleteRemoteAccessDomain", req, cb);
    }
    /**
     * 删除互联网边界访问控制规则
     */
    async RemoveAclRule(req, cb) {
        return this.request("RemoveAclRule", req, cb);
    }
    /**
     * 销毁防火墙实例
     */
    async DeleteNatFwInstance(req, cb) {
        return this.request("DeleteNatFwInstance", req, cb);
    }
    /**
     * 批量添加入侵防御封禁列表、放通列表规则
     */
    async CreateBlockIgnoreRuleList(req, cb) {
        return this.request("CreateBlockIgnoreRuleList", req, cb);
    }
    /**
     * 编辑单条入侵防御封禁列表、放通列表规则（新）
     */
    async ModifyBlockIgnoreRuleNew(req, cb) {
        return this.request("ModifyBlockIgnoreRuleNew", req, cb);
    }
    /**
     * 修改边界防火墙开关(旁路、串行)
     */
    async ModifyEdgeIpSwitch(req, cb) {
        return this.request("ModifyEdgeIpSwitch", req, cb);
    }
    /**
     * DescribeBlockByIpTimesList 告警中心阻断IP折线图
     */
    async DescribeBlockByIpTimesList(req, cb) {
        return this.request("DescribeBlockByIpTimesList", req, cb);
    }
    /**
     * 查询Nat防火墙Dnat规则
     */
    async DescribeNatFwDnatRule(req, cb) {
        return this.request("DescribeNatFwDnatRule", req, cb);
    }
    /**
     * 查询新版安全组下发进度
     */
    async DescribeEnterpriseSGRuleProgress(req, cb) {
        return this.request("DescribeEnterpriseSGRuleProgress", req, cb);
    }
    /**
     * 获取当前用户接入nat防火墙的所有子网数及natfw实例个数
     */
    async DescribeNatFwInfoCount(req, cb) {
        return this.request("DescribeNatFwInfoCount", req, cb);
    }
    /**
     * 展示当前natfw 实例对应的vpc dns开关
     */
    async DescribeNatFwVpcDnsLst(req, cb) {
        return this.request("DescribeNatFwVpcDnsLst", req, cb);
    }
    /**
     * 编辑单条入侵防御封禁列表、放通列表规则
     */
    async ModifyBlockIgnoreRule(req, cb) {
        return this.request("ModifyBlockIgnoreRule", req, cb);
    }
    /**
     * 查询互联网边界访问控制列表
     */
    async DescribeAclRule(req, cb) {
        return this.request("DescribeAclRule", req, cb);
    }
    /**
     * 编辑单条安全组规则
     */
    async ModifySecurityGroupRule(req, cb) {
        return this.request("ModifySecurityGroupRule", req, cb);
    }
    /**
     * 全部删除规则
     */
    async DeleteAllAccessControlRule(req, cb) {
        return this.request("DeleteAllAccessControlRule", req, cb);
    }
    /**
     * 查询安全组规则列表
     */
    async DescribeSecurityGroupList(req, cb) {
        return this.request("DescribeSecurityGroupList", req, cb);
    }
    /**
     * 修改内网间访问控制规则
     */
    async ModifyVpcAcRule(req, cb) {
        return this.request("ModifyVpcAcRule", req, cb);
    }
    /**
     * 资产同步状态查询
     */
    async DescribeAssetSync(req, cb) {
        return this.request("DescribeAssetSync", req, cb);
    }
    /**
     * 创建企业安全组规则
     */
    async CreateSecurityGroupRules(req, cb) {
        return this.request("CreateSecurityGroupRules", req, cb);
    }
    /**
     * 获取入侵防御按钮列表
     */
    async DescribeDefenseSwitch(req, cb) {
        return this.request("DescribeDefenseSwitch", req, cb);
    }
    /**
     * 获取租户所有VPC防火墙(组)及VPC防火墙实例卡片信息
     */
    async DescribeFwGroupInstanceInfo(req, cb) {
        return this.request("DescribeFwGroupInstanceInfo", req, cb);
    }
    /**
     * nat 防火墙VPC DNS 开关切换
     */
    async ModifyNatFwVpcDnsSwitch(req, cb) {
        return this.request("ModifyNatFwVpcDnsSwitch", req, cb);
    }
    /**
     * 启用停用单条企业安全组规则
     */
    async ModifySecurityGroupItemRuleStatus(req, cb) {
        return this.request("ModifySecurityGroupItemRuleStatus", req, cb);
    }
    /**
     * GetNatFwInstanceWithRegion 获取租户新增运维的NAT实例，带上地域
     */
    async DescribeNatFwInstanceWithRegion(req, cb) {
        return this.request("DescribeNatFwInstanceWithRegion", req, cb);
    }
    /**
     * 删除入侵防御规则白名单接口
     */
    async DeleteIdsWhiteRule(req, cb) {
        return this.request("DeleteIdsWhiteRule", req, cb);
    }
    /**
     * 批量添加入侵防御封禁列表、放通列表规则
     */
    async CreateBlockIgnoreRuleNew(req, cb) {
        return this.request("CreateBlockIgnoreRuleNew", req, cb);
    }
    /**
     * DescribeSourceAsset-查询全部资产信息
     */
    async DescribeSourceAsset(req, cb) {
        return this.request("DescribeSourceAsset", req, cb);
    }
    /**
     * DeleteResourceGroup-资产中心资产组删除
     */
    async DeleteResourceGroup(req, cb) {
        return this.request("DeleteResourceGroup", req, cb);
    }
    /**
     * 删除互联网边界规则
     */
    async RemoveAcRule(req, cb) {
        return this.request("RemoveAcRule", req, cb);
    }
    /**
     * vpc间规则快速排序
     */
    async ModifyVpcFwSequenceRules(req, cb) {
        return this.request("ModifyVpcFwSequenceRules", req, cb);
    }
    /**
     * 用户告警中心-忽略处置按钮
     */
    async CreateAlertCenterOmit(req, cb) {
        return this.request("CreateAlertCenterOmit", req, cb);
    }
    /**
     * 创建入侵防御规则白名单接口
     */
    async CreateIdsWhiteRule(req, cb) {
        return this.request("CreateIdsWhiteRule", req, cb);
    }
    /**
     * 查询内网间访问控制列表
     */
    async DescribeVpcAcRule(req, cb) {
        return this.request("DescribeVpcAcRule", req, cb);
    }
    /**
     * 编辑新企业安全组规则
     */
    async ModifyEnterpriseSecurityGroupRule(req, cb) {
        return this.request("ModifyEnterpriseSecurityGroupRule", req, cb);
    }
    /**
     * 添加互联网边界访问控制规则
     */
    async AddAclRule(req, cb) {
        return this.request("AddAclRule", req, cb);
    }
    /**
     * 修改NAT访问控制规则
     */
    async ModifyNatAcRule(req, cb) {
        return this.request("ModifyNatAcRule", req, cb);
    }
    /**
     * 删除规则
     */
    async DeleteSecurityGroupRule(req, cb) {
        return this.request("DeleteSecurityGroupRule", req, cb);
    }
    /**
     * 修改地址模板
     */
    async ModifyAddressTemplate(req, cb) {
        return this.request("ModifyAddressTemplate", req, cb);
    }
    /**
     * 防火墙开关列表，已废弃，请使用DescribeFwEdgeIps
     */
    async DescribeSwitchLists(req, cb) {
        return this.request("DescribeSwitchLists", req, cb);
    }
    /**
     * 修改规则表状态
     */
    async ModifyTableStatus(req, cb) {
        return this.request("ModifyTableStatus", req, cb);
    }
    /**
     * 用户告警中心-封隔离处置按钮
     */
    async CreateAlertCenterIsolate(req, cb) {
        return this.request("CreateAlertCenterIsolate", req, cb);
    }
    /**
     * 支持对封禁列表、放通列表如下操作：
批量增加封禁IP、放通IP/域名
批量删除封禁IP、放通IP/域名
批量修改封禁IP、放通IP/域名生效事件
     */
    async ModifyBlockIgnoreList(req, cb) {
        return this.request("ModifyBlockIgnoreList", req, cb);
    }
    /**
     * 创建、选择vpc
     */
    async CreateChooseVpcs(req, cb) {
        return this.request("CreateChooseVpcs", req, cb);
    }
    /**
     * 资产扫描
     */
    async ModifyAssetScan(req, cb) {
        return this.request("ModifyAssetScan", req, cb);
    }
    /**
     * 删除地址模板规则
     */
    async DeleteAddressTemplate(req, cb) {
        return this.request("DeleteAddressTemplate", req, cb);
    }
    /**
     * 修改规则执行顺序
     */
    async ModifySequenceRules(req, cb) {
        return this.request("ModifySequenceRules", req, cb);
    }
    /**
     * 互联网边界规则快速排序
     */
    async ModifySequenceAclRules(req, cb) {
        return this.request("ModifySequenceAclRules", req, cb);
    }
    /**
     * 查询规则列表概况
     */
    async DescribeRuleOverview(req, cb) {
        return this.request("DescribeRuleOverview", req, cb);
    }
    /**
     * IP防护状态查询
     */
    async DescribeIPStatusList(req, cb) {
        return this.request("DescribeIPStatusList", req, cb);
    }
    /**
     * 查询新企业安全组规则
     */
    async DescribeEnterpriseSecurityGroupRule(req, cb) {
        return this.request("DescribeEnterpriseSecurityGroupRule", req, cb);
    }
    /**
     * 修改防火墙(组)开关(支持单点模式、多点模式、全互通模式)
     */
    async ModifyFwGroupSwitch(req, cb) {
        return this.request("ModifyFwGroupSwitch", req, cb);
    }
    /**
     * 日志审计日志查询
     */
    async DescribeLogs(req, cb) {
        return this.request("DescribeLogs", req, cb);
    }
    /**
     * 配置防火墙Dnat规则
     */
    async SetNatFwDnatRule(req, cb) {
        return this.request("SetNatFwDnatRule", req, cb);
    }
    /**
     * 启用停用全部规则
     */
    async ModifyAllRuleStatus(req, cb) {
        return this.request("ModifyAllRuleStatus", req, cb);
    }
    /**
     * 批量删除入侵防御封禁列表、放通列表规则
     */
    async DeleteBlockIgnoreRuleList(req, cb) {
        return this.request("DeleteBlockIgnoreRuleList", req, cb);
    }
    /**
     * 设置防火墙实例弹性公网ip，目前仅支持新增模式的防火墙实例
     */
    async SetNatFwEip(req, cb) {
        return this.request("SetNatFwEip", req, cb);
    }
    /**
     * 用户告警中心-封禁、放通处置按钮
     */
    async CreateAlertCenterRule(req, cb) {
        return this.request("CreateAlertCenterRule", req, cb);
    }
    /**
     * 修改互联网边界访问控制规则
     */
    async ModifyAclRule(req, cb) {
        return this.request("ModifyAclRule", req, cb);
    }
    /**
     * 查询新企业安全组规则  从node接口迁移   原接口DescribeSecurityGroupNewList
     */
    async DescribeEnterpriseSecurityGroupRuleList(req, cb) {
        return this.request("DescribeEnterpriseSecurityGroupRuleList", req, cb);
    }
    /**
     * 查询防火墙弹性公网IP
     */
    async DescribeCfwEips(req, cb) {
        return this.request("DescribeCfwEips", req, cb);
    }
    /**
     * 查询入侵防御放通封禁列表
     */
    async DescribeBlockIgnoreList(req, cb) {
        return this.request("DescribeBlockIgnoreList", req, cb);
    }
    /**
     * 删除NAT访问控制规则
     */
    async RemoveNatAcRule(req, cb) {
        return this.request("RemoveNatAcRule", req, cb);
    }
    /**
     * 访问控制列表
     */
    async DescribeAcLists(req, cb) {
        return this.request("DescribeAcLists", req, cb);
    }
    /**
     * 防火墙垂直扩容
     */
    async ExpandCfwVertical(req, cb) {
        return this.request("ExpandCfwVertical", req, cb);
    }
    /**
     * 创建VPC间防火墙(防火墙组)
     */
    async CreateVpcFwGroup(req, cb) {
        return this.request("CreateVpcFwGroup", req, cb);
    }
    /**
     * 互联网边界防火墙一键开关
     */
    async ModifyAllPublicIPSwitchStatus(req, cb) {
        return this.request("ModifyAllPublicIPSwitchStatus", req, cb);
    }
    /**
     * 获取安全组关联实例列表
     */
    async DescribeAssociatedInstanceList(req, cb) {
        return this.request("DescribeAssociatedInstanceList", req, cb);
    }
    /**
     * 编辑NAT防火墙
     */
    async ModifyNatInstance(req, cb) {
        return this.request("ModifyNatInstance", req, cb);
    }
    /**
     * 删除规则
     */
    async DeleteAcRule(req, cb) {
        return this.request("DeleteAcRule", req, cb);
    }
    /**
     * 查询NAT访问控制列表
     */
    async DescribeNatAcRule(req, cb) {
        return this.request("DescribeNatAcRule", req, cb);
    }
    /**
     * 获取防火墙同步状态，一般在执行同步操作后查询
     */
    async DescribeFwSyncStatus(req, cb) {
        return this.request("DescribeFwSyncStatus", req, cb);
    }
    /**
     * DescribeNatFwInstance 获取租户所有NAT实例
     */
    async DescribeNatFwInstance(req, cb) {
        return this.request("DescribeNatFwInstance", req, cb);
    }
    /**
     * 创建暴露数据库白名单规则
     */
    async CreateDatabaseWhiteListRules(req, cb) {
        return this.request("CreateDatabaseWhiteListRules", req, cb);
    }
    /**
     * 创建防火墙实例和接入域名（Region参数必填）
     */
    async CreateNatFwInstanceWithDomain(req, cb) {
        return this.request("CreateNatFwInstanceWithDomain", req, cb);
    }
    /**
     * 创建访问控制规则
     */
    async CreateAcRules(req, cb) {
        return this.request("CreateAcRules", req, cb);
    }
    /**
     * 修改企业安全组下发状态
     */
    async ModifyEnterpriseSecurityDispatchStatus(req, cb) {
        return this.request("ModifyEnterpriseSecurityDispatchStatus", req, cb);
    }
    /**
     * DescribeTLogInfo告警中心概况查询
     */
    async DescribeTLogInfo(req, cb) {
        return this.request("DescribeTLogInfo", req, cb);
    }
    /**
     * 同步资产-互联网&VPC（新）
     */
    async ModifyRunSyncAsset(req, cb) {
        return this.request("ModifyRunSyncAsset", req, cb);
    }
    /**
     * DescribeGuideScanInfo新手引导扫描接口信息
     */
    async DescribeGuideScanInfo(req, cb) {
        return this.request("DescribeGuideScanInfo", req, cb);
    }
    /**
     * 查询地址模板列表
     */
    async DescribeAddressTemplateList(req, cb) {
        return this.request("DescribeAddressTemplateList", req, cb);
    }
    /**
     * GetNatInstance 获取租户所有NAT实例及实例卡片信息
     */
    async DescribeNatFwInstancesInfo(req, cb) {
        return this.request("DescribeNatFwInstancesInfo", req, cb);
    }
    /**
     * 防火墙实例重新选择vpc或nat
     */
    async ModifyNatFwReSelect(req, cb) {
        return this.request("ModifyNatFwReSelect", req, cb);
    }
    /**
     * 日志存储设置，可以修改存储时间和清空日志
     */
    async ModifyStorageSetting(req, cb) {
        return this.request("ModifyStorageSetting", req, cb);
    }
    /**
     * DescribeResourceGroup资产中心资产树信息
     */
    async DescribeResourceGroup(req, cb) {
        return this.request("DescribeResourceGroup", req, cb);
    }
    /**
     * 同步防火墙操作，包括同步防火墙路由（若vpc，专线网关等增加了Cidr，需要手动同步一下路由使之在防火墙上生效）等。
     */
    async SyncFwOperate(req, cb) {
        return this.request("SyncFwOperate", req, cb);
    }
    /**
     * 修改规则
     */
    async ModifyAcRule(req, cb) {
        return this.request("ModifyAcRule", req, cb);
    }
    /**
     * 串行防火墙IP开关列表
     */
    async DescribeFwEdgeIps(req, cb) {
        return this.request("DescribeFwEdgeIps", req, cb);
    }
    /**
     * 修改NAT防火墙开关
     */
    async ModifyNatFwSwitch(req, cb) {
        return this.request("ModifyNatFwSwitch", req, cb);
    }
    /**
     * DescribeTLogIpList告警中心IP柱形图
     */
    async DescribeTLogIpList(req, cb) {
        return this.request("DescribeTLogIpList", req, cb);
    }
    /**
     * 创建地址模板规则
     */
    async CreateAddressTemplate(req, cb) {
        return this.request("CreateAddressTemplate", req, cb);
    }
    /**
     * 添加nat访问控制规则
     */
    async AddNatAcRule(req, cb) {
        return this.request("AddNatAcRule", req, cb);
    }
    /**
     * DescribeBlockStaticList 告警中心柱形图
     */
    async DescribeBlockStaticList(req, cb) {
        return this.request("DescribeBlockStaticList", req, cb);
    }
    /**
     * 查询入侵防御规则白名单接口
     */
    async DescribeIdsWhiteRule(req, cb) {
        return this.request("DescribeIdsWhiteRule", req, cb);
    }
}
exports.Client = Client;
