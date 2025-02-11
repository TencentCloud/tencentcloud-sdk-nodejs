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
 * mongodb client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("mongodb.tencentcloudapi.com", "2019-07-25", clientConfig);
    }
    /**
     * 本接口（TerminateDBInstances）可将包年包月实例退还隔离。
     */
    async TerminateDBInstances(req, cb) {
        return this.request("TerminateDBInstances", req, cb);
    }
    /**
     * 本接口（DescribeDBInstanceURL）用于获取指定实例的 URI 形式的连接串访问地址示例。
     */
    async DescribeDBInstanceURL(req, cb) {
        return this.request("DescribeDBInstanceURL", req, cb);
    }
    /**
     * 本接口用于查询节点的属性，包括节点所在可用区、节点名称、地址、角色、状态、主从延迟、优先级、投票权、标签等属性。
     */
    async DescribeDBInstanceNodeProperty(req, cb) {
        return this.request("DescribeDBInstanceNodeProperty", req, cb);
    }
    /**
     * 本接口(DescribeDBInstanceParamTpl )用于查询当前账号下所有MongoDB数据库参数模板
**说明：DescribeDBInstanceParamTpl  API正在公测中，在此期间，该接口仅对公测用户开放**
     */
    async DescribeDBInstanceParamTpl(req, cb) {
        return this.request("DescribeDBInstanceParamTpl", req, cb);
    }
    /**
     * 本接口（DescribeDBInstanceDeal）用于获取MongoDB购买、续费及变配订单详细。
     */
    async DescribeDBInstanceDeal(req, cb) {
        return this.request("DescribeDBInstanceDeal", req, cb);
    }
    /**
     * 本接口（DescribeCurrentOp）用于查询云数据库实例的当前正在执行的操作。
     */
    async DescribeCurrentOp(req, cb) {
        return this.request("DescribeCurrentOp", req, cb);
    }
    /**
     * 本接口（DescribeClientConnections）用于查询实例客户端连接信息，包括连接 IP 和连接数量。
     */
    async DescribeClientConnections(req, cb) {
        return this.request("DescribeClientConnections", req, cb);
    }
    /**
     * 修改实例用户的密码
     */
    async ResetDBInstancePassword(req, cb) {
        return this.request("ResetDBInstancePassword", req, cb);
    }
    /**
     * 本接口（DescribeSecurityGroup）用于查询实例绑定的安全组。
     */
    async DescribeSecurityGroup(req, cb) {
        return this.request("DescribeSecurityGroup", req, cb);
    }
    /**
     * 本接口（SetAccountUserPrivilege）用于设置实例的账号权限。
     */
    async SetAccountUserPrivilege(req, cb) {
        return this.request("SetAccountUserPrivilege", req, cb);
    }
    /**
     * 在所有mongos上执行FlushRouterConfig命令
     */
    async FlushInstanceRouterConfig(req, cb) {
        return this.request("FlushInstanceRouterConfig", req, cb);
    }
    /**
     * 本接口（DescribeDBBackups）用于查询实例备份列表，目前只支持查询7天内的备份记录。
     */
    async DescribeDBBackups(req, cb) {
        return this.request("DescribeDBBackups", req, cb);
    }
    /**
     * 本接口(IsolateDBInstance)用于隔离MongoDB云数据库按量计费实例。隔离后实例保留在回收站中，不能再写入数据。隔离一定时间后，实例会彻底删除，回收站保存时间请参考按量计费的服务条款。在隔离中的按量计费实例无法恢复，请谨慎操作。
     */
    async IsolateDBInstance(req, cb) {
        return this.request("IsolateDBInstance", req, cb);
    }
    /**
     * 本接口(SetBackupRules)用于设置 MongoDB 云数据库的自动备份规则。
     */
    async SetBackupRules(req, cb) {
        return this.request("SetBackupRules", req, cb);
    }
    /**
     * 本接口 (InquirePriceModifyDBInstanceSpec) 用于查询实例配置变更后的价格。
     */
    async InquirePriceModifyDBInstanceSpec(req, cb) {
        return this.request("InquirePriceModifyDBInstanceSpec", req, cb);
    }
    /**
     * 本接口用于重启数据库节点。
     */
    async RestartNodes(req, cb) {
        return this.request("RestartNodes", req, cb);
    }
    /**
     * 本接口（DescribeBackupRules）用于获取实例自动备份配置信息。
     */
    async DescribeBackupRules(req, cb) {
        return this.request("DescribeBackupRules", req, cb);
    }
    /**
     * 本接口(RenameInstance)用于修改云数据库实例的名称。
     */
    async RenameInstance(req, cb) {
        return this.request("RenameInstance", req, cb);
    }
    /**
     * 本接口（DescribeAsyncRequestInfo）用于查询异步任务状态接口。
     */
    async DescribeAsyncRequestInfo(req, cb) {
        return this.request("DescribeAsyncRequestInfo", req, cb);
    }
    /**
     * 本接口（CreateAccountUser）用于自定义实例访问账号。
     */
    async CreateAccountUser(req, cb) {
        return this.request("CreateAccountUser", req, cb);
    }
    /**
     * 本接口(ModifyDBInstanceParamTpl )用于修改MongoDB云数据库实例的参数模板。
**说明：ModifyDBInstanceParamTpl  API正在公测中，在此期间，该接口仅对公测用户开放**
     */
    async ModifyDBInstanceParamTpl(req, cb) {
        return this.request("ModifyDBInstanceParamTpl", req, cb);
    }
    /**
     * 本接口（CreateDBInstanceHour）用于创建按量计费的MongoDB云数据库实例。
     */
    async CreateDBInstanceHour(req, cb) {
        return this.request("CreateDBInstanceHour", req, cb);
    }
    /**
     * 本接口(CreateDBInstanceParamTpl)用于创建云数据库MongoDB实例的参数模板
**说明：CreateDBInstanceParamTpl API正在公测中，在此期间，该接口仅对公测用户开放**
     */
    async CreateDBInstanceParamTpl(req, cb) {
        return this.request("CreateDBInstanceParamTpl", req, cb);
    }
    /**
     * 本接口(DropDBInstanceParamTpl )用于删除云数据库MongoDB实例的参数模板
**说明：DropDBInstanceParamTpl  API正在公测中，在此期间，该接口仅对公测用户开放**
     */
    async DropDBInstanceParamTpl(req, cb) {
        return this.request("DropDBInstanceParamTpl", req, cb);
    }
    /**
     * 本接口(RenewDBInstance)用于续费云数据库实例，仅支持付费模式为包年包月的实例。按量计费实例不需要续费。
     */
    async RenewDBInstances(req, cb) {
        return this.request("RenewDBInstances", req, cb);
    }
    /**
     * 本接口用来创建某个备份文件的下载任务
     */
    async CreateBackupDownloadTask(req, cb) {
        return this.request("CreateBackupDownloadTask", req, cb);
    }
    /**
     * 该接口用于发起按 Key 闪回任务，依据数据的闪回 Key（默认为 id）对数据进行极速回档，快速恢复业务。
**说明：按 Key 闪回于2023年09月11日正式进行公测，在此期间，该接口仅对公测用户开放。**
     */
    async FlashBackDBInstance(req, cb) {
        return this.request("FlashBackDBInstance", req, cb);
    }
    /**
     * 本接口（DescribeDBInstances）用于查询云数据库实例列表，支持通过项目ID、实例ID、实例状态等过滤条件来筛选主实例、灾备实例和只读实例信息列表。
     */
    async DescribeDBInstances(req, cb) {
        return this.request("DescribeDBInstances", req, cb);
    }
    /**
     * 本接口(OfflineIsolatedDBInstance)用于立即下线隔离状态的云数据库实例。进行操作的实例状态必须为隔离状态。
     */
    async OfflineIsolatedDBInstance(req, cb) {
        return this.request("OfflineIsolatedDBInstance", req, cb);
    }
    /**
     * 本接口（DescribeSlowLogPatterns）用于获取数据库实例慢日志的统计信息。
     */
    async DescribeSlowLogPatterns(req, cb) {
        return this.request("DescribeSlowLogPatterns", req, cb);
    }
    /**
     * 本接口（DescribeSlowLogs）用于获取云数据库慢日志信息。接口只支持查询最近7天内慢日志。
     */
    async DescribeSlowLogs(req, cb) {
        return this.request("DescribeSlowLogs", req, cb);
    }
    /**
     * 本接口（ModifyDBInstanceNetworkAddress）用于修改云数据库实例的网络信息，支持基础网络切换为私有网络、私有网络切换私有网络。
     */
    async ModifyDBInstanceNetworkAddress(req, cb) {
        return this.request("ModifyDBInstanceNetworkAddress", req, cb);
    }
    /**
     * 本接口(CreateDBInstance)用于创建包年包月的MongoDB云数据库实例。接口支持的售卖规格，可从查询云数据库的售卖规格（DescribeSpecInfo）获取。
     */
    async CreateDBInstance(req, cb) {
        return this.request("CreateDBInstance", req, cb);
    }
    /**
     * 本接口（ModifyDBInstanceSpec）用于调整MongoDB云数据库实例配置。接口支持的售卖规格，可从查询云数据库的售卖规格（DescribeSpecInfo）获取。
     */
    async ModifyDBInstanceSpec(req, cb) {
        return this.request("ModifyDBInstanceSpec", req, cb);
    }
    /**
     * 本接口（DescribeInstanceParams）用于查询当前实例可修改的参数列表。
     */
    async DescribeInstanceParams(req, cb) {
        return this.request("DescribeInstanceParams", req, cb);
    }
    /**
     * 本接口(DescribeSpecInfo)用于查询实例的售卖规格。
     */
    async DescribeSpecInfo(req, cb) {
        return this.request("DescribeSpecInfo", req, cb);
    }
    /**
     * 查询备份下载任务信息
     */
    async DescribeBackupDownloadTask(req, cb) {
        return this.request("DescribeBackupDownloadTask", req, cb);
    }
    /**
     * 本接口（InquirePriceCreateDBInstances）用于创建数据库实例询价。本接口参数中必须传入region参数，否则无法通过校验。本接口仅允许针对购买限制范围内的实例配置进行询价。
     */
    async InquirePriceCreateDBInstances(req, cb) {
        return this.request("InquirePriceCreateDBInstances", req, cb);
    }
    /**
     * 本接口(AssignProject)用于指定云数据库实例的所属项目。
     */
    async AssignProject(req, cb) {
        return this.request("AssignProject", req, cb);
    }
    /**
     * 获取实例透明加密的开启状态
     */
    async DescribeTransparentDataEncryptionStatus(req, cb) {
        return this.request("DescribeTransparentDataEncryptionStatus", req, cb);
    }
    /**
     * 本接口（DescribeAccountUsers）用于获取当前实例的全部账号。
     */
    async DescribeAccountUsers(req, cb) {
        return this.request("DescribeAccountUsers", req, cb);
    }
    /**
     * 本接口（SetInstanceMaintenance ） 用于设置实例维护时间窗。
     */
    async SetInstanceMaintenance(req, cb) {
        return this.request("SetInstanceMaintenance", req, cb);
    }
    /**
     * 本接口（ModifyInstanceParams）用于修改mongoDB实例的参数配置。
     */
    async ModifyInstanceParams(req, cb) {
        return this.request("ModifyInstanceParams", req, cb);
    }
    /**
     * 本接口(DescribeDBInstanceParamTplDetail )用于查询MongoDB云数据库实例的参数模板详情。
**说明：DescribeDBInstanceParamTplDetail  API正在公测中，在此期间，该接口仅对公测用户开放**
     */
    async DescribeDBInstanceParamTplDetail(req, cb) {
        return this.request("DescribeDBInstanceParamTplDetail", req, cb);
    }
    /**
     * 本接口(KillOps)用于终止MongoDB云数据库实例上执行的特定操作。
     */
    async KillOps(req, cb) {
        return this.request("KillOps", req, cb);
    }
    /**
     * 本接口(EnableTransparentDataEncryption)用于开启云数据库 MongoDB 的透明加密能力。
     */
    async EnableTransparentDataEncryption(req, cb) {
        return this.request("EnableTransparentDataEncryption", req, cb);
    }
    /**
     * 本接口（CreateBackupDBInstance）用于备份实例。
     */
    async CreateBackupDBInstance(req, cb) {
        return this.request("CreateBackupDBInstance", req, cb);
    }
    /**
     * 本接口 (InquiryPriceRenewDBInstances) 用于续费包年包月实例询价。
     */
    async InquirePriceRenewDBInstances(req, cb) {
        return this.request("InquirePriceRenewDBInstances", req, cb);
    }
    /**
     * 本接口（DeleteAccountUser）用于删除实例的自定义账号。
     */
    async DeleteAccountUser(req, cb) {
        return this.request("DeleteAccountUser", req, cb);
    }
    /**
     * 本接口（ModifyDBInstanceSecurityGroup）用于修改实例绑定的安全组
     */
    async ModifyDBInstanceSecurityGroup(req, cb) {
        return this.request("ModifyDBInstanceSecurityGroup", req, cb);
    }
}
exports.Client = Client;
