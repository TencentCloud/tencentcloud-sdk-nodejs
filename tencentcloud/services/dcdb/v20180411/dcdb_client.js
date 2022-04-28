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
 * dcdb client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("dcdb.tencentcloudapi.com", "2018-04-11", clientConfig);
    }
    /**
     * 本接口（DescribeAccountPrivileges）用于查询云数据库账号权限。
注意：注意：相同用户名，不同Host是不同的账号。
     */
    async DescribeAccountPrivileges(req, cb) {
        return this.request("DescribeAccountPrivileges", req, cb);
    }
    /**
     * 解隔离DCDB后付费实例
     */
    async ActiveHourDCDBInstance(req, cb) {
        return this.request("ActiveHourDCDBInstance", req, cb);
    }
    /**
     * 本接口（DescribeDatabaseObjects）用于查询云数据库实例的数据库中的对象列表，包含表、存储过程、视图和函数。
     */
    async DescribeDatabaseObjects(req, cb) {
        return this.request("DescribeDatabaseObjects", req, cb);
    }
    /**
     * 查询可创建的分布式数据库可售卖的分片规格配置。
     */
    async DescribeShardSpec(req, cb) {
        return this.request("DescribeShardSpec", req, cb);
    }
    /**
     * 本接口（ResetAccountPassword）用于重置云数据库账号的密码。
注意：相同用户名，不同Host是不同的账号。
     */
    async ResetAccountPassword(req, cb) {
        return this.request("ResetAccountPassword", req, cb);
    }
    /**
     * 查询云数据库实例列表，支持通过项目ID、实例ID、内网地址、实例名称等来筛选实例。
如果不指定任何筛选条件，则默认返回10条实例记录，单次请求最多支持返回100条实例记录。
     */
    async DescribeDCDBInstances(req, cb) {
        return this.request("DescribeDCDBInstances", req, cb);
    }
    /**
     * 本接口(ModifyRealServerAccessStrategy)用于修改云数据库的VPCGW到RS的访问策略。

**注意**
- 修改策略后只对新建立的连接生效，老连接不受影响
- 就近访问只针对实例是跨可用区部署有用，单可用区部署实例就近与否并无作用
- DB每个Node对应一个proxy，如果开启就近访问，将会把连接集中到对应可用区的proxy上，可能造成热点问题，这种情况下如果是线上业务，请务必根据自己的业务请求量测试符合预期后再进行就近策略变更
     */
    async ModifyRealServerAccessStrategy(req, cb) {
        return this.request("ModifyRealServerAccessStrategy", req, cb);
    }
    /**
     * 本接口(DescribeFileDownloadUrl)用于获取数据库指定备份或日志文件的下载连接。
     */
    async DescribeFileDownloadUrl(req, cb) {
        return this.request("DescribeFileDownloadUrl", req, cb);
    }
    /**
     * 本接口（ModifyAccountDescription）用于修改云数据库账号备注。
注意：相同用户名，不同Host是不同的账号。
     */
    async ModifyAccountDescription(req, cb) {
        return this.request("ModifyAccountDescription", req, cb);
    }
    /**
     * 本接口（DescribeUserTasks）用于拉取用户任务列表
     */
    async DescribeUserTasks(req, cb) {
        return this.request("DescribeUserTasks", req, cb);
    }
    /**
     * 本接口（DescribeDCDBPrice）用于在购买实例前，查询实例的价格。
     */
    async DescribeDCDBPrice(req, cb) {
        return this.request("DescribeDCDBPrice", req, cb);
    }
    /**
     * 本接口(ModifyDBParameters)用于修改数据库参数。
     */
    async ModifyDBParameters(req, cb) {
        return this.request("ModifyDBParameters", req, cb);
    }
    /**
     * 本接口(DescribeDCDBSaleInfo)用于查询分布式数据库可售卖的地域和可用区信息。
     */
    async DescribeDCDBSaleInfo(req, cb) {
        return this.request("DescribeDCDBSaleInfo", req, cb);
    }
    /**
     * 本接口(DescribeDBSlowLogs)用于查询慢查询日志列表。
     */
    async DescribeDBSlowLogs(req, cb) {
        return this.request("DescribeDBSlowLogs", req, cb);
    }
    /**
     * 本接口（DescribeFlow）用于查询流程状态
     */
    async DescribeFlow(req, cb) {
        return this.request("DescribeFlow", req, cb);
    }
    /**
     * 本接口(SwitchDBInstanceHA)用于实例主备切换。
     */
    async SwitchDBInstanceHA(req, cb) {
        return this.request("SwitchDBInstanceHA", req, cb);
    }
    /**
     * 本接口(InitDCDBInstances)用于初始化云数据库实例，包括设置默认字符集、表名大小写敏感等。
     */
    async InitDCDBInstances(req, cb) {
        return this.request("InitDCDBInstances", req, cb);
    }
    /**
     * 创建独享集群DCDB实例
     */
    async CreateDedicatedClusterDCDBInstance(req, cb) {
        return this.request("CreateDedicatedClusterDCDBInstance", req, cb);
    }
    /**
     * 本接口（RenewDCDBInstance）用于续费分布式数据库实例。
     */
    async RenewDCDBInstance(req, cb) {
        return this.request("RenewDCDBInstance", req, cb);
    }
    /**
     * 本接口（DeleteAccount）用于删除云数据库账号。用户名+host唯一确定一个账号。
     */
    async DeleteAccount(req, cb) {
        return this.request("DeleteAccount", req, cb);
    }
    /**
     * 本接口(DescribeDBParameters)用于获取数据库的当前参数设置。
     */
    async DescribeDBParameters(req, cb) {
        return this.request("DescribeDBParameters", req, cb);
    }
    /**
     * 本接口（ModifyDBInstancesProject）用于修改云数据库实例所属项目。
     */
    async ModifyDBInstancesProject(req, cb) {
        return this.request("ModifyDBInstancesProject", req, cb);
    }
    /**
     * 本接口（DescribeSqlLogs）用于获取实例SQL日志。
     */
    async DescribeSqlLogs(req, cb) {
        return this.request("DescribeSqlLogs", req, cb);
    }
    /**
     * 本接口(DescribeDBLogFiles)用于获取数据库的各种日志列表，包括冷备、binlog、errlog和slowlog。
     */
    async DescribeDBLogFiles(req, cb) {
        return this.request("DescribeDBLogFiles", req, cb);
    }
    /**
     * 隔离DCDB后付费实例
     */
    async IsolateHourDCDBInstance(req, cb) {
        return this.request("IsolateHourDCDBInstance", req, cb);
    }
    /**
     * 本接口（DescribeDBSyncMode）用于查询云数据库实例的同步模式。
     */
    async DescribeDBSyncMode(req, cb) {
        return this.request("DescribeDBSyncMode", req, cb);
    }
    /**
     * 本接口（DescribeProjectSecurityGroups）用于查询项目安全组信息
     */
    async DescribeProjectSecurityGroups(req, cb) {
        return this.request("DescribeProjectSecurityGroups", req, cb);
    }
    /**
     * 本接口 (AssociateSecurityGroups) 用于安全组批量绑定云资源。
     */
    async AssociateSecurityGroups(req, cb) {
        return this.request("AssociateSecurityGroups", req, cb);
    }
    /**
     * 本接口（CreateAccount）用于创建云数据库账号。一个实例可以创建多个不同的账号，相同的用户名+不同的host是不同的账号。
     */
    async CreateAccount(req, cb) {
        return this.request("CreateAccount", req, cb);
    }
    /**
     * 本接口（KillSession）用于杀死指定会话。
     */
    async KillSession(req, cb) {
        return this.request("KillSession", req, cb);
    }
    /**
     * 本接口（OpenDBExtranetAccess）用于开通云数据库实例的外网访问。开通外网访问后，您可通过外网域名和端口访问实例，可使用查询实例列表接口获取外网域名和端口信息。
     */
    async OpenDBExtranetAccess(req, cb) {
        return this.request("OpenDBExtranetAccess", req, cb);
    }
    /**
     * 本接口(DestroyDCDBInstance)用于销毁已隔离的包年包月实例。
     */
    async DestroyDCDBInstance(req, cb) {
        return this.request("DestroyDCDBInstance", req, cb);
    }
    /**
     * 本接口（DescribeDCDBInstanceNodeInfo）用于获取实例节点信息
     */
    async DescribeDCDBInstanceNodeInfo(req, cb) {
        return this.request("DescribeDCDBInstanceNodeInfo", req, cb);
    }
    /**
     * 本接口（ModifyDBSyncMode）用于修改云数据库实例的同步模式。
     */
    async ModifyDBSyncMode(req, cb) {
        return this.request("ModifyDBSyncMode", req, cb);
    }
    /**
     * 本接口（DescribeProjects）用于查询项目列表
     */
    async DescribeProjects(req, cb) {
        return this.request("DescribeProjects", req, cb);
    }
    /**
     * 本接口(CloseDBExtranetAccess)用于关闭云数据库实例的外网访问。关闭外网访问后，外网地址将不可访问，查询实例列表接口将不返回对应实例的外网域名和端口信息。
     */
    async CloseDBExtranetAccess(req, cb) {
        return this.request("CloseDBExtranetAccess", req, cb);
    }
    /**
     * 本接口（DescribeAccounts）用于查询指定云数据库实例的账号列表。
     */
    async DescribeAccounts(req, cb) {
        return this.request("DescribeAccounts", req, cb);
    }
    /**
     * 获取实例灾备详情
     */
    async DescribeDcnDetail(req, cb) {
        return this.request("DescribeDcnDetail", req, cb);
    }
    /**
     * 相当于在所有分片的mysqld中执行flush logs，完成切分的binlog将展示在各个分片控制台binlog列表里。
     */
    async FlushBinlog(req, cb) {
        return this.request("FlushBinlog", req, cb);
    }
    /**
     * 本接口（GrantAccountPrivileges）用于给云数据库账号赋权。
注意：相同用户名，不同Host是不同的账号。
     */
    async GrantAccountPrivileges(req, cb) {
        return this.request("GrantAccountPrivileges", req, cb);
    }
    /**
     * 本接口（CopyAccountPrivileges）用于复制云数据库账号的权限。
注意：相同用户名，不同Host是不同的账号，Readonly属性相同的账号之间才能复制权限。
     */
    async CopyAccountPrivileges(req, cb) {
        return this.request("CopyAccountPrivileges", req, cb);
    }
    /**
     * 本接口（DescribeDCDBShards）用于查询云数据库实例的分片信息。
     */
    async DescribeDCDBShards(req, cb) {
        return this.request("DescribeDCDBShards", req, cb);
    }
    /**
     * 本接口（DescribeDatabases）用于查询云数据库实例的数据库列表。
     */
    async DescribeDatabases(req, cb) {
        return this.request("DescribeDatabases", req, cb);
    }
    /**
     * 本接口（CreateDCDBInstance）用于创建包年包月的云数据库实例，可通过传入实例规格、数据库版本号、购买时长等信息创建云数据库实例。
     */
    async CreateDCDBInstance(req, cb) {
        return this.request("CreateDCDBInstance", req, cb);
    }
    /**
     * 本接口（DestroyHourDCDBInstance）用于销毁按量计费实例。
     */
    async DestroyHourDCDBInstance(req, cb) {
        return this.request("DestroyHourDCDBInstance", req, cb);
    }
    /**
     * 本接口（DescribeDatabaseTable）用于查询云数据库实例的表信息。
     */
    async DescribeDatabaseTable(req, cb) {
        return this.request("DescribeDatabaseTable", req, cb);
    }
    /**
     * 本接口（DescribeDCDBUpgradePrice）用于查询变配分布式数据库实例价格。
     */
    async DescribeDCDBUpgradePrice(req, cb) {
        return this.request("DescribeDCDBUpgradePrice", req, cb);
    }
    /**
     * 取消DCN同步
     */
    async CancelDcnJob(req, cb) {
        return this.request("CancelDcnJob", req, cb);
    }
    /**
     * 本接口（CloneAccount）用于克隆实例账户。
     */
    async CloneAccount(req, cb) {
        return this.request("CloneAccount", req, cb);
    }
    /**
     * 本接口（ModifyDBInstanceName）用于修改实例名字
     */
    async ModifyDBInstanceName(req, cb) {
        return this.request("ModifyDBInstanceName", req, cb);
    }
    /**
     * 创建DCDB后付费实例
     */
    async CreateHourDCDBInstance(req, cb) {
        return this.request("CreateHourDCDBInstance", req, cb);
    }
    /**
     * 本接口(DisassociateSecurityGroups)用于安全组批量解绑实例。
     */
    async DisassociateSecurityGroups(req, cb) {
        return this.request("DisassociateSecurityGroups", req, cb);
    }
    /**
     * 本接口（UpgradeDCDBInstance）用于升级分布式数据库实例。本接口完成下单和支付两个动作，如果发生支付失败的错误，调用用户账户相关接口中的支付订单接口（PayDeals）重新支付即可。
     */
    async UpgradeDCDBInstance(req, cb) {
        return this.request("UpgradeDCDBInstance", req, cb);
    }
    /**
     * 本接口（DescribeDCDBRenewalPrice）用于在续费分布式数据库实例时，查询续费的价格。
     */
    async DescribeDCDBRenewalPrice(req, cb) {
        return this.request("DescribeDCDBRenewalPrice", req, cb);
    }
    /**
     * 本接口（ModifyDBInstanceSecurityGroups）用于修改云数据库安全组
     */
    async ModifyDBInstanceSecurityGroups(req, cb) {
        return this.request("ModifyDBInstanceSecurityGroups", req, cb);
    }
}
exports.Client = Client;
