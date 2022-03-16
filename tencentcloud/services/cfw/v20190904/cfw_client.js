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
     * 获取当前用户接入nat防火墙的所有子网数及natfw实例个数
     */
    async DescribeNatFwInfoCount(req, cb) {
        return this.request("DescribeNatFwInfoCount", req, cb);
    }
    /**
     * nat规则列表概况
     */
    async DescribeNatRuleOverview(req, cb) {
        return this.request("DescribeNatRuleOverview", req, cb);
    }
    /**
     * 中止安全组规则下发
     */
    async StopSecurityGroupRuleDispatch(req, cb) {
        return this.request("StopSecurityGroupRuleDispatch", req, cb);
    }
    /**
     * 修改规则表状态
     */
    async ModifyTableStatus(req, cb) {
        return this.request("ModifyTableStatus", req, cb);
    }
    /**
     * 展示当前natfw 实例对应的vpc dns开关
     */
    async DescribeNatFwVpcDnsLst(req, cb) {
        return this.request("DescribeNatFwVpcDnsLst", req, cb);
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
     * 创建、选择vpc
     */
    async CreateChooseVpcs(req, cb) {
        return this.request("CreateChooseVpcs", req, cb);
    }
    /**
     * vpc规则列表概况
     */
    async DescribeVpcRuleOverview(req, cb) {
        return this.request("DescribeVpcRuleOverview", req, cb);
    }
    /**
     * GetNatFwInstanceWithRegion 获取租户新增运维的NAT实例，带上地域
     */
    async DescribeNatFwInstanceWithRegion(req, cb) {
        return this.request("DescribeNatFwInstanceWithRegion", req, cb);
    }
    /**
     * 删除规则
     */
    async DeleteAcRule(req, cb) {
        return this.request("DeleteAcRule", req, cb);
    }
    /**
     * ModifyResourceGroup-资产中心资产组信息修改


     */
    async ModifyResourceGroup(req, cb) {
        return this.request("ModifyResourceGroup", req, cb);
    }
    /**
     * 创建安全组API规则
     */
    async CreateSecurityGroupApiRules(req, cb) {
        return this.request("CreateSecurityGroupApiRules", req, cb);
    }
    /**
     * DescribeResourceGroupNew资产中心资产树信息
     */
    async DescribeResourceGroupNew(req, cb) {
        return this.request("DescribeResourceGroupNew", req, cb);
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
     * 编辑单条安全组规则
     */
    async ModifySecurityGroupRule(req, cb) {
        return this.request("ModifySecurityGroupRule", req, cb);
    }
    /**
     * DescribeNatFwInstance 获取租户所有NAT实例
     */
    async DescribeNatFwInstance(req, cb) {
        return this.request("DescribeNatFwInstance", req, cb);
    }
    /**
     * 资产扫描
     */
    async ModifyAssetScan(req, cb) {
        return this.request("ModifyAssetScan", req, cb);
    }
    /**
     * 防火墙开关列表
     */
    async DescribeSwitchLists(req, cb) {
        return this.request("DescribeSwitchLists", req, cb);
    }
    /**
     * 创建暴露数据库白名单规则
     */
    async CreateDatabaseWhiteListRules(req, cb) {
        return this.request("CreateDatabaseWhiteListRules", req, cb);
    }
    /**
     * 创建防火墙实例和接入域名
     */
    async CreateNatFwInstanceWithDomain(req, cb) {
        return this.request("CreateNatFwInstanceWithDomain", req, cb);
    }
    /**
     * 删除全部规则
     */
    async DeleteSecurityGroupAllRule(req, cb) {
        return this.request("DeleteSecurityGroupAllRule", req, cb);
    }
    /**
     * 添加互联网边界规则
     */
    async AddAcRule(req, cb) {
        return this.request("AddAcRule", req, cb);
    }
    /**
     * 创建新企业安全组规则
     */
    async AddEnterpriseSecurityGroupRules(req, cb) {
        return this.request("AddEnterpriseSecurityGroupRules", req, cb);
    }
    /**
     * 创建规则
     */
    async CreateAcRules(req, cb) {
        return this.request("CreateAcRules", req, cb);
    }
    /**
     * 启用停用全部规则
     */
    async ModifySecurityGroupAllRuleStatus(req, cb) {
        return this.request("ModifySecurityGroupAllRuleStatus", req, cb);
    }
    /**
     * 访问控制列表
     */
    async DescribeAcLists(req, cb) {
        return this.request("DescribeAcLists", req, cb);
    }
    /**
     * 创建企业安全组规则
     */
    async CreateSecurityGroupRules(req, cb) {
        return this.request("CreateSecurityGroupRules", req, cb);
    }
    /**
     * 删除新企业安全组规则
     */
    async RemoveEnterpriseSecurityGroupRule(req, cb) {
        return this.request("RemoveEnterpriseSecurityGroupRule", req, cb);
    }
    /**
     * 查询规则列表概况
     */
    async DescribeRuleOverview(req, cb) {
        return this.request("DescribeRuleOverview", req, cb);
    }
    /**
     * ip防护状态查询
     */
    async DescribeIPStatusList(req, cb) {
        return this.request("DescribeIPStatusList", req, cb);
    }
    /**
     * DescribeTLogInfo告警中心概况

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
     * nat 防火墙VPC DNS 开关切换
     */
    async ModifyNatFwVpcDnsSwitch(req, cb) {
        return this.request("ModifyNatFwVpcDnsSwitch", req, cb);
    }
    /**
     * 单个修改VPC火墙开关
     */
    async ModifyVPCSwitchStatus(req, cb) {
        return this.request("ModifyVPCSwitchStatus", req, cb);
    }
    /**
     * VPC防火墙一键开关
     */
    async ModifyAllVPCSwitchStatus(req, cb) {
        return this.request("ModifyAllVPCSwitchStatus", req, cb);
    }
    /**
     * 查询新企业安全组规则
     */
    async DescribeEnterpriseSecurityGroupRule(req, cb) {
        return this.request("DescribeEnterpriseSecurityGroupRule", req, cb);
    }
    /**
     * 支持对拦截列表、忽略列表如下操作：
批量增加拦截IP、忽略IP/域名
批量删除拦截IP、忽略IP/域名
批量修改拦截IP、忽略IP/域名生效事件
     */
    async ModifyBlockIgnoreList(req, cb) {
        return this.request("ModifyBlockIgnoreList", req, cb);
    }
    /**
     * 删除防火墙实例
     */
    async DeleteVpcInstance(req, cb) {
        return this.request("DeleteVpcInstance", req, cb);
    }
    /**
     * DescribeGuideScanInfo新手引导扫描接口信息
     */
    async DescribeGuideScanInfo(req, cb) {
        return this.request("DescribeGuideScanInfo", req, cb);
    }
    /**
     * DescribeUnHandleEventTabList 告警中心伪攻击链事件未处置接口

     */
    async DescribeUnHandleEventTabList(req, cb) {
        return this.request("DescribeUnHandleEventTabList", req, cb);
    }
    /**
     * 设置防火墙实例弹性公网ip，目前仅支持新增模式的防火墙实例
     */
    async SetNatFwEip(req, cb) {
        return this.request("SetNatFwEip", req, cb);
    }
    /**
     * DescribeSourceAsset-查询资产组全部资产信息

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
     * 创建防火墙实例
     */
    async CreateNatFwInstance(req, cb) {
        return this.request("CreateNatFwInstance", req, cb);
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
     * 修改规则执行顺序
     */
    async ModifySequenceRules(req, cb) {
        return this.request("ModifySequenceRules", req, cb);
    }
    /**
     * 删除互联网边界规则
     */
    async RemoveAcRule(req, cb) {
        return this.request("RemoveAcRule", req, cb);
    }
    /**
     * ModifyBlockTop取消置顶接口
     */
    async ModifyBlockTop(req, cb) {
        return this.request("ModifyBlockTop", req, cb);
    }
    /**
     * 查询规则表状态
     */
    async DescribeTableStatus(req, cb) {
        return this.request("DescribeTableStatus", req, cb);
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
     * DescribeResourceGroup资产中心资产树信息
     */
    async DescribeResourceGroup(req, cb) {
        return this.request("DescribeResourceGroup", req, cb);
    }
    /**
     * 查询防火墙弹性公网IP
     */
    async DescribeCfwEips(req, cb) {
        return this.request("DescribeCfwEips", req, cb);
    }
    /**
     * 同步资产-互联网&VPC
     */
    async RunSyncAsset(req, cb) {
        return this.request("RunSyncAsset", req, cb);
    }
    /**
     * 修改规则
     */
    async ModifyAcRule(req, cb) {
        return this.request("ModifyAcRule", req, cb);
    }
    /**
     * 删除规则
     */
    async DeleteSecurityGroupRule(req, cb) {
        return this.request("DeleteSecurityGroupRule", req, cb);
    }
    /**
     * 企业安全组规则快速排序
     */
    async ModifySecurityGroupSequenceRules(req, cb) {
        return this.request("ModifySecurityGroupSequenceRules", req, cb);
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
     * 启用停用单条企业安全组规则
     */
    async ModifySecurityGroupItemRuleStatus(req, cb) {
        return this.request("ModifySecurityGroupItemRuleStatus", req, cb);
    }
    /**
     * 一键开启和关闭
     */
    async ModifyAllSwitchStatus(req, cb) {
        return this.request("ModifyAllSwitchStatus", req, cb);
    }
    /**
     * 销毁防火墙实例
     */
    async DeleteNatFwInstance(req, cb) {
        return this.request("DeleteNatFwInstance", req, cb);
    }
    /**
     * 单个修改互联网边界防火墙开关
     */
    async ModifyPublicIPSwitchStatus(req, cb) {
        return this.request("ModifyPublicIPSwitchStatus", req, cb);
    }
    /**
     * 同步资产状态查询-互联网&VPC
     */
    async DescribeSyncAssetStatus(req, cb) {
        return this.request("DescribeSyncAssetStatus", req, cb);
    }
    /**
     * 防火墙垂直扩容
     */
    async ExpandCfwVertical(req, cb) {
        return this.request("ExpandCfwVertical", req, cb);
    }
    /**
     * DescribeBlockByIpTimesList 告警中心阻断IP折线图

     */
    async DescribeBlockByIpTimesList(req, cb) {
        return this.request("DescribeBlockByIpTimesList", req, cb);
    }
    /**
     * 获取地址模板列表
     */
    async DescribeAddrTemplateList(req, cb) {
        return this.request("DescribeAddrTemplateList", req, cb);
    }
    /**
     * DescribeBlockStaticList 告警中心柱形图

     */
    async DescribeBlockStaticList(req, cb) {
        return this.request("DescribeBlockStaticList", req, cb);
    }
    /**
     * 修改单个防火墙开关
     */
    async ModifyItemSwitchStatus(req, cb) {
        return this.request("ModifyItemSwitchStatus", req, cb);
    }
}
exports.Client = Client;
