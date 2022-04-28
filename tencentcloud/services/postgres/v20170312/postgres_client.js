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
 * postgres client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("postgres.tencentcloudapi.com", "2017-03-12", clientConfig);
    }
    /**
     * 可对RO组进行网络的添加操作。
     */
    async CreateReadOnlyGroupNetworkAccess(req, cb) {
        return this.request("CreateReadOnlyGroupNetworkAccess", req, cb);
    }
    /**
     * 获取实例的密钥信息列表。
     */
    async DescribeEncryptionKeys(req, cb) {
        return this.request("DescribeEncryptionKeys", req, cb);
    }
    /**
     * 本接口（ModifyDBInstancesProject）用于将实例转至其他项目。
     */
    async ModifyDBInstancesProject(req, cb) {
        return this.request("ModifyDBInstancesProject", req, cb);
    }
    /**
     * 本接口（DescribeOrders）用于获取订单信息。
     */
    async DescribeOrders(req, cb) {
        return this.request("DescribeOrders", req, cb);
    }
    /**
     * 本接口 (DescribeDBInstances) 用于查询一个或多个实例的详细信息。
     */
    async DescribeDBInstances(req, cb) {
        return this.request("DescribeDBInstances", req, cb);
    }
    /**
     * 可对RO组进行网络的删除操作。
     */
    async DeleteReadOnlyGroupNetworkAccess(req, cb) {
        return this.request("DeleteReadOnlyGroupNetworkAccess", req, cb);
    }
    /**
     * 本接口（UpgradeDBInstance）用于升级实例配置。
     */
    async UpgradeDBInstance(req, cb) {
        return this.request("UpgradeDBInstance", req, cb);
    }
    /**
     * 批量修改参数
     */
    async ModifyDBInstanceParameters(req, cb) {
        return this.request("ModifyDBInstanceParameters", req, cb);
    }
    /**
     * 本接口 (DestroyDBInstance) 用于彻底下线指定DBInstanceId对应的实例，下线后实例数据将彻底删除，无法找回，只能下线隔离中的实例。
     */
    async DestroyDBInstance(req, cb) {
        return this.request("DestroyDBInstance", req, cb);
    }
    /**
     * 本接口 (DescribeBackupPlans) 用于实例所有的备份计划查询
     */
    async DescribeBackupPlans(req, cb) {
        return this.request("DescribeBackupPlans", req, cb);
    }
    /**
     * 本接口（RenewInstance）用于续费实例。
     */
    async RenewInstance(req, cb) {
        return this.request("RenewInstance", req, cb);
    }
    /**
     * 本接口（DescribeDBBackups）用于查询实例备份列表。
     */
    async DescribeDBBackups(req, cb) {
        return this.request("DescribeDBBackups", req, cb);
    }
    /**
     * 本接口（ResetAccountPassword）用于重置实例的账户密码。
     */
    async ResetAccountPassword(req, cb) {
        return this.request("ResetAccountPassword", req, cb);
    }
    /**
     * 本接口（DescribeDBErrlogs）用于获取错误日志。
     */
    async DescribeDBErrlogs(req, cb) {
        return this.request("DescribeDBErrlogs", req, cb);
    }
    /**
     * 此接口（DescribeSlowQueryAnalysis）用于统计指定时间范围内的所有慢查询，根据SQL语句抽象参数后，进行聚合分析，并返回同类SQL列表。
     */
    async DescribeSlowQueryAnalysis(req, cb) {
        return this.request("DescribeSlowQueryAnalysis", req, cb);
    }
    /**
     * 当升级完成后，对处于等待切换状态下的实例，强制实例立即切换。
     */
    async ModifySwitchTimePeriod(req, cb) {
        return this.request("ModifySwitchTimePeriod", req, cb);
    }
    /**
     * 本接口 (InquiryPriceCreateDBInstances) 用于查询购买一个或多个实例的价格信息。
     */
    async InquiryPriceCreateDBInstances(req, cb) {
        return this.request("InquiryPriceCreateDBInstances", req, cb);
    }
    /**
     * 本接口（OpenDBExtranetAccess）用于开通外网。
     */
    async OpenDBExtranetAccess(req, cb) {
        return this.request("OpenDBExtranetAccess", req, cb);
    }
    /**
     * 可对实例进行网络的删除操作。
     */
    async DeleteDBInstanceNetworkAccess(req, cb) {
        return this.request("DeleteDBInstanceNetworkAccess", req, cb);
    }
    /**
     * 本接口 (ModifyBackupPlan) 用于实例备份计划的修改，默认是在每天的凌晨开始全量备份，备份保留时长是7天。可以根据此接口指定时间进行实例的备份。
     */
    async ModifyBackupPlan(req, cb) {
        return this.request("ModifyBackupPlan", req, cb);
    }
    /**
     * 关闭serverlessDB实例外网
     */
    async CloseServerlessDBExtranetAccess(req, cb) {
        return this.request("CloseServerlessDBExtranetAccess", req, cb);
    }
    /**
     * 本接口(DeleteReadOnlyGroup)用于删除指定的只读组
     */
    async DeleteReadOnlyGroup(req, cb) {
        return this.request("DeleteReadOnlyGroup", req, cb);
    }
    /**
     * 本接口（ModifyAccountRemark）用于修改帐号备注。
     */
    async ModifyAccountRemark(req, cb) {
        return this.request("ModifyAccountRemark", req, cb);
    }
    /**
     * 本接口（DescribeDBXlogs）用于获取实例Xlog列表。
     */
    async DescribeDBXlogs(req, cb) {
        return this.request("DescribeDBXlogs", req, cb);
    }
    /**
     * 本接口（SetAutoRenewFlag）用于设置自动续费。
     */
    async SetAutoRenewFlag(req, cb) {
        return this.request("SetAutoRenewFlag", req, cb);
    }
    /**
     * 本接口 (DescribeDBInstanceAttribute) 用于查询某个实例的详情信息。
     */
    async DescribeDBInstanceAttribute(req, cb) {
        return this.request("DescribeDBInstanceAttribute", req, cb);
    }
    /**
     * 本接口（ModifyDBInstanceName）用于修改postgresql实例名字。
     */
    async ModifyDBInstanceName(req, cb) {
        return this.request("ModifyDBInstanceName", req, cb);
    }
    /**
     * 本接口（InquiryPriceUpgradeDBInstance）用于查询升级实例的价格。
     */
    async InquiryPriceUpgradeDBInstance(req, cb) {
        return this.request("InquiryPriceUpgradeDBInstance", req, cb);
    }
    /**
     * 本接口（ModifyDBInstanceDeployment）用于修改节点可用区部署方式，仅支持主实例。
     */
    async ModifyDBInstanceDeployment(req, cb) {
        return this.request("ModifyDBInstanceDeployment", req, cb);
    }
    /**
     * 本接口 (CreateDBInstances) 用于创建一个或者多个PostgreSQL实例,仅发货实例不会进行初始化。
     */
    async CreateDBInstances(req, cb) {
        return this.request("CreateDBInstances", req, cb);
    }
    /**
     * 本接口 (CreateServerlessDBInstance) 用于创建一个ServerlessDB实例，创建成功返回实例ID。
     */
    async CreateServerlessDBInstance(req, cb) {
        return this.request("CreateServerlessDBInstance", req, cb);
    }
    /**
     * 获取实例可修改参数列表
     */
    async DescribeDBInstanceParameters(req, cb) {
        return this.request("DescribeDBInstanceParameters", req, cb);
    }
    /**
     * 本接口 (DescribeZones) 用于查询支持的可用区信息。
     */
    async DescribeZones(req, cb) {
        return this.request("DescribeZones", req, cb);
    }
    /**
     * 本接口（RestartDBInstance）用于重启实例。
     */
    async RestartDBInstance(req, cb) {
        return this.request("RestartDBInstance", req, cb);
    }
    /**
     * 本接口（IsolateDBInstances）用于隔离实例
     */
    async IsolateDBInstances(req, cb) {
        return this.request("IsolateDBInstances", req, cb);
    }
    /**
     * 本接口 (DeleteServerlessDBInstance) 用于删除一个ServerlessDB实例。
     */
    async DeleteServerlessDBInstance(req, cb) {
        return this.request("DeleteServerlessDBInstance", req, cb);
    }
    /**
     * 本接口 (InitDBInstances) 用于初始化云数据库PostgreSQL实例。
     */
    async InitDBInstances(req, cb) {
        return this.request("InitDBInstances", req, cb);
    }
    /**
     * 可对实例进行网络的添加操作。
     */
    async CreateDBInstanceNetworkAccess(req, cb) {
        return this.request("CreateDBInstanceNetworkAccess", req, cb);
    }
    /**
     * 本接口（ModifyDBInstanceSpec）用于调整实例规格，包括内存、磁盘。
     */
    async ModifyDBInstanceSpec(req, cb) {
        return this.request("ModifyDBInstanceSpec", req, cb);
    }
    /**
     * 本接口（DescribeAvailableRecoveryTime）用于查询实例可恢复的时间范围。
     */
    async DescribeAvailableRecoveryTime(req, cb) {
        return this.request("DescribeAvailableRecoveryTime", req, cb);
    }
    /**
     * 本接口（CreateReadOnlyGroup）用于创建只读组
     */
    async CreateReadOnlyGroup(req, cb) {
        return this.request("CreateReadOnlyGroup", req, cb);
    }
    /**
     * 本接口 (DescribeRegions) 用于查询售卖地域信息。
     */
    async DescribeRegions(req, cb) {
        return this.request("DescribeRegions", req, cb);
    }
    /**
     * 此接口（DescribeSlowQueryList）用于查询指定时间范围内的所有慢查询。
     */
    async DescribeSlowQueryList(req, cb) {
        return this.request("DescribeSlowQueryList", req, cb);
    }
    /**
     * 本接口（ModifyDBInstanceReadOnlyGroup）用于修改实例所属的只读组
     */
    async ModifyDBInstanceReadOnlyGroup(req, cb) {
        return this.request("ModifyDBInstanceReadOnlyGroup", req, cb);
    }
    /**
     * 本接口（CloseDBExtranetAccess）用于关闭实例外网链接。
     */
    async CloseDBExtranetAccess(req, cb) {
        return this.request("CloseDBExtranetAccess", req, cb);
    }
    /**
     * 用于克隆实例，支持指定备份集、指定时间点进行克隆。
     */
    async CloneDBInstance(req, cb) {
        return this.request("CloneDBInstance", req, cb);
    }
    /**
     * 本接口（AddDBInstanceToReadOnlyGroup）用于添加只读实例到只读组
     */
    async AddDBInstanceToReadOnlyGroup(req, cb) {
        return this.request("AddDBInstanceToReadOnlyGroup", req, cb);
    }
    /**
     * 本接口（InquiryPriceRenewDBInstance）用于查询续费实例的价格。
     */
    async InquiryPriceRenewDBInstance(req, cb) {
        return this.request("InquiryPriceRenewDBInstance", req, cb);
    }
    /**
     * 本接口（DescribeAccounts）用于获取实例用户列表。
     */
    async DescribeAccounts(req, cb) {
        return this.request("DescribeAccounts", req, cb);
    }
    /**
     * 本接口（DisIsolateDBInstances）用于解隔离实例
     */
    async DisIsolateDBInstances(req, cb) {
        return this.request("DisIsolateDBInstances", req, cb);
    }
    /**
     * 用于查询一个或多个serverlessDB实例的详细信息
     */
    async DescribeServerlessDBInstances(req, cb) {
        return this.request("DescribeServerlessDBInstances", req, cb);
    }
    /**
     * 本接口(RebalanceReadOnlyGroup)用于重新均衡 RO 组内实例的负载。注意，RO 组内 RO 实例会有一次数据库连接瞬断，请确保应用程序能重连数据库，谨慎操作。
     */
    async RebalanceReadOnlyGroup(req, cb) {
        return this.request("RebalanceReadOnlyGroup", req, cb);
    }
    /**
     * 本接口（DescribeCloneDBInstanceSpec）用于查询克隆实例可选择的最小规格，包括SpecCode和磁盘。
     */
    async DescribeCloneDBInstanceSpec(req, cb) {
        return this.request("DescribeCloneDBInstanceSpec", req, cb);
    }
    /**
     * 接口（DescribeDatabases）用来拉取数据库列表
     */
    async DescribeDatabases(req, cb) {
        return this.request("DescribeDatabases", req, cb);
    }
    /**
     * 本接口(CreateReadOnlyDBInstance)用于创建只读实例
     */
    async CreateReadOnlyDBInstance(req, cb) {
        return this.request("CreateReadOnlyDBInstance", req, cb);
    }
    /**
     * 本接口(DescribeReadOnlyGroups)用于查询用户输入指定实例的只读组
     */
    async DescribeReadOnlyGroups(req, cb) {
        return this.request("DescribeReadOnlyGroups", req, cb);
    }
    /**
     * 本接口(ModifyReadOnlyGroupConfig)用于更新只读组配置信息
     */
    async ModifyReadOnlyGroupConfig(req, cb) {
        return this.request("ModifyReadOnlyGroupConfig", req, cb);
    }
    /**
     * 本接口 (CreateInstances) 用于创建一个或者多个PostgreSQL实例，通过此接口创建的实例无需进行初始化，可直接使用。
     */
    async CreateInstances(req, cb) {
        return this.request("CreateInstances", req, cb);
    }
    /**
     * 本接口（RemoveDBInstanceFromReadOnlyGroup）用户将只读实例从只读组中移除
     */
    async RemoveDBInstanceFromReadOnlyGroup(req, cb) {
        return this.request("RemoveDBInstanceFromReadOnlyGroup", req, cb);
    }
    /**
     * 本接口 (DescribeProductConfig) 用于查询售卖规格配置。
     */
    async DescribeProductConfig(req, cb) {
        return this.request("DescribeProductConfig", req, cb);
    }
    /**
     * 获取参数修改事件详情
     */
    async DescribeParamsEvent(req, cb) {
        return this.request("DescribeParamsEvent", req, cb);
    }
    /**
     * 本接口（DescribeDBSlowlogs）用于获取慢查询日志。已于2021.09.01日正式废弃，后续此接口将不再返回任何数据，新接口为DescribeSlowQueryList，详细请查看：https://cloud.tencent.com/document/product/409/60540
     */
    async DescribeDBSlowlogs(req, cb) {
        return this.request("DescribeDBSlowlogs", req, cb);
    }
    /**
     * 开通serverlessDB实例外网
     */
    async OpenServerlessDBExtranetAccess(req, cb) {
        return this.request("OpenServerlessDBExtranetAccess", req, cb);
    }
}
exports.Client = Client;
