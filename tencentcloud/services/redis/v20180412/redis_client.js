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
 * redis client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("redis.tencentcloudapi.com", "2018-04-12", clientConfig);
    }
    /**
     * 设置实例输入模式
     */
    async ModifyInstanceReadOnly(req, cb) {
        return this.request("ModifyInstanceReadOnly", req, cb);
    }
    /**
     * 腾讯云数据库 Redis 已经于2022年10月31日下线查询实例大 Key 接口。具体公告，请参见 [查询实例大 Key 接口下线公告](https://cloud.tencent.com/document/product/239/81005)。
     */
    async DescribeInstanceMonitorBigKeySizeDist(req, cb) {
        return this.request("DescribeInstanceMonitorBigKeySizeDist", req, cb);
    }
    /**
     * 查询任务列表信息
     */
    async DescribeTaskList(req, cb) {
        return this.request("DescribeTaskList", req, cb);
    }
    /**
     * 移除复制组成员 注：接口下线中，请使用 RemoveReplicationInstance
     */
    async DeleteReplicationInstance(req, cb) {
        return this.request("DeleteReplicationInstance", req, cb);
    }
    /**
     * 回收站实例立即下线
     */
    async CleanUpInstance(req, cb) {
        return this.request("CleanUpInstance", req, cb);
    }
    /**
     * 查看实例子账号信息
     */
    async DescribeInstanceAccount(req, cb) {
        return this.request("DescribeInstanceAccount", req, cb);
    }
    /**
     * 该接口仅支持多AZ实例副本组提主和单AZ副本提主
     */
    async ChangeReplicaToMaster(req, cb) {
        return this.request("ChangeReplicaToMaster", req, cb);
    }
    /**
     * 查询实例访问命令
     */
    async DescribeInstanceMonitorTopNCmd(req, cb) {
        return this.request("DescribeInstanceMonitorTopNCmd", req, cb);
    }
    /**
     * 将原本实例升级到高版本实例，或者将主从版实例升级到集群版实例
     */
    async UpgradeInstanceVersion(req, cb) {
        return this.request("UpgradeInstanceVersion", req, cb);
    }
    /**
     * 本接口（DescribeProductInfo）用于查询全地域 Redis 的售卖规格。
     */
    async DescribeProductInfo(req, cb) {
        return this.request("DescribeProductInfo", req, cb);
    }
    /**
     * 用于查询任务结果
     */
    async DescribeTaskInfo(req, cb) {
        return this.request("DescribeTaskInfo", req, cb);
    }
    /**
     * 本接口（ModifyBackupDownloadRestriction）用于修改备份文件下载的网络信息与地址。
     */
    async ModifyBackupDownloadRestriction(req, cb) {
        return this.request("ModifyBackupDownloadRestriction", req, cb);
    }
    /**
     * 修改实例子账号
     */
    async ModifyInstanceAccount(req, cb) {
        return this.request("ModifyInstanceAccount", req, cb);
    }
    /**
     * 查询实例安全组信息
     */
    async DescribeInstanceSecurityGroup(req, cb) {
        return this.request("DescribeInstanceSecurityGroup", req, cb);
    }
    /**
     * 升级实例支持多AZ
     */
    async UpgradeVersionToMultiAvailabilityZones(req, cb) {
        return this.request("UpgradeVersionToMultiAvailabilityZones", req, cb);
    }
    /**
     * 本接口(ModifyInstanceParams)用于修改Redis实例的参数配置。
     */
    async ModifyInstanceParams(req, cb) {
        return this.request("ModifyInstanceParams", req, cb);
    }
    /**
     * 清空Redis实例的实例数据。
     */
    async ClearInstance(req, cb) {
        return this.request("ClearInstance", req, cb);
    }
    /**
     * 本接口（DescribeBackupUrl）用于查询备份 Rdb 文件的下载地址。
     */
    async DescribeBackupUrl(req, cb) {
        return this.request("DescribeBackupUrl", req, cb);
    }
    /**
     * 删除实例子账号
     */
    async DeleteInstanceAccount(req, cb) {
        return this.request("DeleteInstanceAccount", req, cb);
    }
    /**
     * 修改实例的连接配置，包括带宽和最大连接数。
     */
    async ModifyConnectionConfig(req, cb) {
        return this.request("ModifyConnectionConfig", req, cb);
    }
    /**
     * 修改实例相关信息
     */
    async ModifyInstance(req, cb) {
        return this.request("ModifyInstance", req, cb);
    }
    /**
     * 复制组实例更换角色
     */
    async ChangeInstanceRole(req, cb) {
        return this.request("ChangeInstanceRole", req, cb);
    }
    /**
     * 查询实例节点信息
     */
    async DescribeInstanceNodeInfo(req, cb) {
        return this.request("DescribeInstanceNodeInfo", req, cb);
    }
    /**
     * 创建实例子账号
     */
    async CreateInstanceAccount(req, cb) {
        return this.request("CreateInstanceAccount", req, cb);
    }
    /**
     * 实例proxy版本升级
     */
    async UpgradeProxyVersion(req, cb) {
        return this.request("UpgradeProxyVersion", req, cb);
    }
    /**
     * 查询实例CPU耗时
     */
    async DescribeInstanceMonitorTopNCmdTook(req, cb) {
        return this.request("DescribeInstanceMonitorTopNCmdTook", req, cb);
    }
    /**
     * 本接口（ModifyAutoBackupConfig）用于设置自动备份的配置。
     */
    async ModifyAutoBackupConfig(req, cb) {
        return this.request("ModifyAutoBackupConfig", req, cb);
    }
    /**
     * 删除参数模板
     */
    async DeleteParamTemplate(req, cb) {
        return this.request("DeleteParamTemplate", req, cb);
    }
    /**
     * 添加复制组成员
     */
    async AddReplicationInstance(req, cb) {
        return this.request("AddReplicationInstance", req, cb);
    }
    /**
     * 本接口（CloneInstances）用于基于当前实例的备份文件克隆一个完整的新实例。
     */
    async CloneInstances(req, cb) {
        return this.request("CloneInstances", req, cb);
    }
    /**
     * 创建参数模板。
     */
    async CreateParamTemplate(req, cb) {
        return this.request("CreateParamTemplate", req, cb);
    }
    /**
     * 禁用读写分离
     */
    async DisableReplicaReadonly(req, cb) {
        return this.request("DisableReplicaReadonly", req, cb);
    }
    /**
     * 查询实例DTS信息
     */
    async DescribeInstanceDTSInfo(req, cb) {
        return this.request("DescribeInstanceDTSInfo", req, cb);
    }
    /**
     * 查询实例扩容价格
     */
    async InquiryPriceUpgradeInstance(req, cb) {
        return this.request("InquiryPriceUpgradeInstance", req, cb);
    }
    /**
     * 本接口（RenewInstance）可用于为实例续费。
     */
    async RenewInstance(req, cb) {
        return this.request("RenewInstance", req, cb);
    }
    /**
     * 开通外网
     */
    async AllocateWanAddress(req, cb) {
        return this.request("AllocateWanAddress", req, cb);
    }
    /**
     * 本接口(DescribeProjectSecurityGroups)用于查询项目的安全组详情。
     */
    async DescribeProjectSecurityGroups(req, cb) {
        return this.request("DescribeProjectSecurityGroups", req, cb);
    }
    /**
     * 查询Tendis慢查询
     */
    async DescribeTendisSlowLog(req, cb) {
        return this.request("DescribeTendisSlowLog", req, cb);
    }
    /**
     * 修改参数模板
     */
    async ModifyParamTemplate(req, cb) {
        return this.request("ModifyParamTemplate", req, cb);
    }
    /**
     * 查询新购实例价格
     */
    async InquiryPriceCreateInstance(req, cb) {
        return this.request("InquiryPriceCreateInstance", req, cb);
    }
    /**
     * 查询实例参数列表
     */
    async DescribeInstanceParams(req, cb) {
        return this.request("DescribeInstanceParams", req, cb);
    }
    /**
     * 腾讯云数据库 Redis 已经于2022年10月31日下线查询实例大 Key 接口。具体公告，请参见 [查询实例大 Key 接口下线公告](https://cloud.tencent.com/document/product/239/81005)。
     */
    async DescribeInstanceMonitorBigKeyTypeDist(req, cb) {
        return this.request("DescribeInstanceMonitorBigKeyTypeDist", req, cb);
    }
    /**
     * 关闭外网
     */
    async ReleaseWanAddress(req, cb) {
        return this.request("ReleaseWanAddress", req, cb);
    }
    /**
     * 本接口(DisassociateSecurityGroups)用于安全组批量解绑实例。
     */
    async DisassociateSecurityGroups(req, cb) {
        return this.request("DisassociateSecurityGroups", req, cb);
    }
    /**
     * 手动备份Redis实例
     */
    async ManualBackupInstance(req, cb) {
        return this.request("ManualBackupInstance", req, cb);
    }
    /**
     * Proxy模拟故障接口
     */
    async SwitchProxy(req, cb) {
        return this.request("SwitchProxy", req, cb);
    }
    /**
     * 包年包月实例退还
     */
    async DestroyPrepaidInstance(req, cb) {
        return this.request("DestroyPrepaidInstance", req, cb);
    }
    /**
     * 查询参数修改历史列表
     */
    async DescribeInstanceParamRecords(req, cb) {
        return this.request("DescribeInstanceParamRecords", req, cb);
    }
    /**
     * 本接口（DescribeParamTemplateInfo）用于查询参数模板详情。
     */
    async DescribeParamTemplateInfo(req, cb) {
        return this.request("DescribeParamTemplateInfo", req, cb);
    }
    /**
     * 按量计费实例销毁
     */
    async DestroyPostpaidInstance(req, cb) {
        return this.request("DestroyPostpaidInstance", req, cb);
    }
    /**
     * 查询实例访问的耗时分布
     */
    async DescribeInstanceMonitorTookDist(req, cb) {
        return this.request("DescribeInstanceMonitorTookDist", req, cb);
    }
    /**
     * 查询参数模板列表
     */
    async DescribeParamTemplates(req, cb) {
        return this.request("DescribeParamTemplates", req, cb);
    }
    /**
     * 本接口（DescribeInstanceBackups）用于查询实例备份列表。
     */
    async DescribeInstanceBackups(req, cb) {
        return this.request("DescribeInstanceBackups", req, cb);
    }
    /**
     * 重置密码
     */
    async ResetPassword(req, cb) {
        return this.request("ResetPassword", req, cb);
    }
    /**
     * 移除复制组成员
     */
    async RemoveReplicationInstance(req, cb) {
        return this.request("RemoveReplicationInstance", req, cb);
    }
    /**
     * 实例小版本升级
     */
    async UpgradeSmallVersion(req, cb) {
        return this.request("UpgradeSmallVersion", req, cb);
    }
    /**
     * 创建复制组
     */
    async CreateReplicationGroup(req, cb) {
        return this.request("CreateReplicationGroup", req, cb);
    }
    /**
     * 查询实例访问来源信息
     */
    async DescribeInstanceMonitorSIP(req, cb) {
        return this.request("DescribeInstanceMonitorSIP", req, cb);
    }
    /**
     * 查询项目安全组信息
     */
    async DescribeProjectSecurityGroup(req, cb) {
        return this.request("DescribeProjectSecurityGroup", req, cb);
    }
    /**
     * 查询实例热Key
     */
    async DescribeInstanceMonitorHotKey(req, cb) {
        return this.request("DescribeInstanceMonitorHotKey", req, cb);
    }
    /**
     * 本接口（ModfiyInstancePassword）用于修改实例访问密码。
     */
    async ModfiyInstancePassword(req, cb) {
        return this.request("ModfiyInstancePassword", req, cb);
    }
    /**
     * 启用读写分离
     */
    async EnableReplicaReadonly(req, cb) {
        return this.request("EnableReplicaReadonly", req, cb);
    }
    /**
     * 本接口 (AssociateSecurityGroups) 用于安全组批量绑定多个指定实例。
     */
    async AssociateSecurityGroups(req, cb) {
        return this.request("AssociateSecurityGroups", req, cb);
    }
    /**
     * 本接口（DescribeSSLStatus）用于查询实例 SSL 认证相关信息，包括开启状态、配置状态、证书地址等。
     */
    async DescribeSSLStatus(req, cb) {
        return this.request("DescribeSSLStatus", req, cb);
    }
    /**
     * 腾讯云数据库 Redis 已经于2022年10月31日下线查询实例大 Key 接口。具体公告，请参见[查询实例大 Key 接口下线公告](https://cloud.tencent.com/document/product/239/81005)。
     */
    async DescribeInstanceMonitorBigKey(req, cb) {
        return this.request("DescribeInstanceMonitorBigKey", req, cb);
    }
    /**
     * 本接口（KillMasterGroup）模拟故障。
     */
    async KillMasterGroup(req, cb) {
        return this.request("KillMasterGroup", req, cb);
    }
    /**
     * 查询Redis实例列表信息。该接口已废弃。
     */
    async DescribeCommonDBInstances(req, cb) {
        return this.request("DescribeCommonDBInstances", req, cb);
    }
    /**
     * 本接口（DescribeSlowLog）查询实例慢查询记录。
     */
    async DescribeSlowLog(req, cb) {
        return this.request("DescribeSlowLog", req, cb);
    }
    /**
     * 本接口（DescribeBackupDownloadRestriction）用于查询当前地域数据库备份文件的下载地址。
     */
    async DescribeBackupDownloadRestriction(req, cb) {
        return this.request("DescribeBackupDownloadRestriction", req, cb);
    }
    /**
     * 查询Redis节点详细信息
     */
    async DescribeInstanceZoneInfo(req, cb) {
        return this.request("DescribeInstanceZoneInfo", req, cb);
    }
    /**
     * 在通过DTS支持跨可用区灾备的场景中，通过该接口交换实例VIP完成实例灾备切换。交换VIP后目标实例可写，源和目标实例VIP互换，同时源与目标实例间DTS同步任务断开
     */
    async SwitchInstanceVip(req, cb) {
        return this.request("SwitchInstanceVip", req, cb);
    }
    /**
     * 本接口（DescribeReplicationGroup）查询复制组。
     */
    async DescribeReplicationGroup(req, cb) {
        return this.request("DescribeReplicationGroup", req, cb);
    }
    /**
     * 查询实例续费价格（包年包月）
     */
    async InquiryPriceRenewInstance(req, cb) {
        return this.request("InquiryPriceRenewInstance", req, cb);
    }
    /**
     * 修改实例维护时间窗时间，需要进行版本升级或者架构升级的实例，会在维护时间窗内进行时间切换。注意：已经发起版本升级或者架构升级的实例，无法修改维护时间窗。
     */
    async ModifyMaintenanceWindow(req, cb) {
        return this.request("ModifyMaintenanceWindow", req, cb);
    }
    /**
     * 本接口（ModifyNetworkConfig）用于修改实例网络配置。
     */
    async ModifyNetworkConfig(req, cb) {
        return this.request("ModifyNetworkConfig", req, cb);
    }
    /**
     * 本接口（DescribeInstanceShards）用于获取集群架构实例的分片信息。
     */
    async DescribeInstanceShards(req, cb) {
        return this.request("DescribeInstanceShards", req, cb);
    }
    /**
     * 恢复 CRS 实例
     */
    async RestoreInstance(req, cb) {
        return this.request("RestoreInstance", req, cb);
    }
    /**
     * 本接口（DescribeInstances）用于查询Redis实例列表。
     */
    async DescribeInstances(req, cb) {
        return this.request("DescribeInstances", req, cb);
    }
    /**
     * 开启SSL
     */
    async OpenSSL(req, cb) {
        return this.request("OpenSSL", req, cb);
    }
    /**
     * 获取备份配置
     */
    async DescribeAutoBackupConfig(req, cb) {
        return this.request("DescribeAutoBackupConfig", req, cb);
    }
    /**
     * 本接口（DescribeBandwidthRange）用于查询实例带宽信息。
     */
    async DescribeBandwidthRange(req, cb) {
        return this.request("DescribeBandwidthRange", req, cb);
    }
    /**
     * 实例解隔离
     */
    async StartupInstance(req, cb) {
        return this.request("StartupInstance", req, cb);
    }
    /**
     * 本接口（DescribeProxySlowLog）用于查询代理慢查询。
     */
    async DescribeProxySlowLog(req, cb) {
        return this.request("DescribeProxySlowLog", req, cb);
    }
    /**
     * 本接口(ModifyDBInstanceSecurityGroups)用于修改实例绑定的安全组。
     */
    async ModifyDBInstanceSecurityGroups(req, cb) {
        return this.request("ModifyDBInstanceSecurityGroups", req, cb);
    }
    /**
     * 复制组实例切主
     */
    async ChangeMasterInstance(req, cb) {
        return this.request("ChangeMasterInstance", req, cb);
    }
    /**
     * 变更实例配置
     */
    async UpgradeInstance(req, cb) {
        return this.request("UpgradeInstance", req, cb);
    }
    /**
     * 本接口(DescribeDBSecurityGroups)用于查询实例的安全组详情。
     */
    async DescribeDBSecurityGroups(req, cb) {
        return this.request("DescribeDBSecurityGroups", req, cb);
    }
    /**
     * 应用参数模板到实例
     */
    async ApplyParamsTemplate(req, cb) {
        return this.request("ApplyParamsTemplate", req, cb);
    }
    /**
     * 查询实例维护时间窗，在实例需要进行版本升级或者架构升级的时候，会在维护时间窗时间内进行切换
     */
    async DescribeMaintenanceWindow(req, cb) {
        return this.request("DescribeMaintenanceWindow", req, cb);
    }
    /**
     * 本接口（CreateInstances）用于创建 Redis 实例。
     */
    async CreateInstances(req, cb) {
        return this.request("CreateInstances", req, cb);
    }
    /**
     * 本接口（DescribeInstanceDealDetail）用于查询订单信息。
     */
    async DescribeInstanceDealDetail(req, cb) {
        return this.request("DescribeInstanceDealDetail", req, cb);
    }
    /**
     * 关闭SSL
     */
    async CloseSSL(req, cb) {
        return this.request("CloseSSL", req, cb);
    }
}
exports.Client = Client;
