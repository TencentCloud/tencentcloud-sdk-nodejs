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
const AbstractModel = require("../../common/abstract_model");

/**
 * CreateDBInstances请求参数结构体
 * @class
 */
class CreateDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 售卖规格ID。该参数可以通过调用DescribeProductConfig的返回值中的SpecCode字段来获取。
         * @type {string || null}
         */
        this.SpecCode = null;

        /**
         * 实例容量大小，单位：GB。
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 一次性购买的实例数量。取值1-100
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * 购买时长，单位：月。目前只支持1,2,3,4,5,6,7,8,9,10,11,12,24,36这些值，按量计费模式下该参数传1。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 可用区ID。该参数可以通过调用 DescribeZones 接口的返回值中的Zone字段来获取。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 项目ID。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * PostgreSQL版本。当输入该参数时，会基于此版本创建对应的最新内核版本号实例。该参数和DBMajorVersion、DBKernelVersion至少需要传递一个。
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * 实例计费类型。目前支持：PREPAID（预付费，即包年包月），POSTPAID_BY_HOUR（后付费，即按量计费）。
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 是否自动使用代金券。1（是），0（否），默认不使用。
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * 代金券ID列表，目前仅支持指定一张代金券。
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * 私有网络ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 私有网络子网ID。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 续费标记：0-正常续费（默认）；1-自动续费；
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 活动ID
         * @type {number || null}
         */
        this.ActivityId = null;

        /**
         * 实例名(后续支持)
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 是否需要支持Ipv6，1：是，0：否
         * @type {number || null}
         */
        this.NeedSupportIpv6 = null;

        /**
         * 实例需要绑定的Tag信息，默认为空
         * @type {Array.<Tag> || null}
         */
        this.TagList = null;

        /**
         * 安全组id
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * PostgreSQL主要版本。当输入该参数时，会基于此版本创建对应的最新内核版本号实例。该参数和DBVersion、DBKernelVersion至少需要传递一个。
         * @type {string || null}
         */
        this.DBMajorVersion = null;

        /**
         * PostgreSQL内核版本。当输入该参数时，会创建该内核版本号实例。该参数和DBVersion、DBMajorVersion至少需要传递一个。
         * @type {string || null}
         */
        this.DBKernelVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SpecCode = 'SpecCode' in params ? params.SpecCode : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.NeedSupportIpv6 = 'NeedSupportIpv6' in params ? params.NeedSupportIpv6 : null;

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new Tag();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.DBMajorVersion = 'DBMajorVersion' in params ? params.DBMajorVersion : null;
        this.DBKernelVersion = 'DBKernelVersion' in params ? params.DBKernelVersion : null;

    }
}

/**
 * SetAutoRenewFlag请求参数结构体
 * @class
 */
class SetAutoRenewFlagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID数组
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

        /**
         * 续费标记。0-正常续费；1-自动续费；2-到期不续费
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;

    }
}

/**
 * DescribeDatabases请求参数结构体
 * @class
 */
class DescribeDatabasesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

    }
}

/**
 * DescribeDBXlogs请求参数结构体
 * @class
 */
class DescribeDBXlogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如postgres-4wdeb0zv。
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 查询开始时间，形如2018-06-10 17:06:38，起始时间不得小于7天以前
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间，形如2018-06-10 17:06:38
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 分页返回，表示返回第几页的条目。从第0页开始计数。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页返回，表示每页有多少条目。取值为1-100。
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CreateReadOnlyGroupNetworkAccess请求参数结构体
 * @class
 */
class CreateReadOnlyGroupNetworkAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * RO组ID，形如：pgro-4t9c6g7k。
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

        /**
         * 私有网络统一 ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网ID。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 是否指定分配vip true-指定分配  false-自动分配。
         * @type {boolean || null}
         */
        this.IsAssignVip = null;

        /**
         * 目标VIP地址。
         * @type {string || null}
         */
        this.Vip = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.IsAssignVip = 'IsAssignVip' in params ? params.IsAssignVip : null;
        this.Vip = 'Vip' in params ? params.Vip : null;

    }
}

/**
 * DescribeAccounts请求参数结构体
 * @class
 */
class DescribeAccountsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如postgres-6fego161
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 分页返回，每页最大返回数目，默认20，取值范围为1-100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页返回，返回第几页的用户数据。页码从0开始计数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数据按照创建时间或者用户名排序。取值只能为createTime或者name。createTime-按照创建时间排序；name-按照用户名排序
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 返回结果是升序还是降序。取值只能为desc或者asc。desc-降序；asc-升序
         * @type {string || null}
         */
        this.OrderByType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

    }
}

/**
 * DeleteReadOnlyGroup返回参数结构体
 * @class
 */
class DeleteReadOnlyGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateInstances请求参数结构体
 * @class
 */
class CreateInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 售卖规格ID。该参数可以通过调用DescribeProductConfig的返回值中的SpecCode字段来获取。
         * @type {string || null}
         */
        this.SpecCode = null;

        /**
         * 实例容量大小，单位：GB。
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 一次性购买的实例数量。取值1-10。
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * 购买时长，单位：月。目前只支持1,2,3,4,5,6,7,8,9,10,11,12,24,36这些值，按量计费模式下该参数传1。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 可用区ID。该参数可以通过调用 DescribeZones 接口的返回值中的Zone字段来获取。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 实例字符集，目前只支持：UTF8、LATIN1。
         * @type {string || null}
         */
        this.Charset = null;

        /**
         * 实例根账号用户名。
         * @type {string || null}
         */
        this.AdminName = null;

        /**
         * 实例根账号用户名对应的密码。
         * @type {string || null}
         */
        this.AdminPassword = null;

        /**
         * 项目ID。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * PostgreSQL版本。当输入该参数时，会基于此版本创建对应的最新内核版本号实例。该参数和DBMajorVersion、DBKernelVersion至少需要传递一个。
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * 实例计费类型。目前支持：PREPAID（预付费，即包年包月），POSTPAID_BY_HOUR（后付费，即按量计费）。
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 是否自动使用代金券。1（是），0（否），默认不使用。
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * 代金券ID列表，目前仅支持指定一张代金券。
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * 私有网络ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 已配置的私有网络中的子网ID。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 续费标记：0-正常续费（默认）；1-自动续费。
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 活动ID。
         * @type {number || null}
         */
        this.ActivityId = null;

        /**
         * 实例名。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 是否需要支持Ipv6，1：是，0：否（默认）。
         * @type {number || null}
         */
        this.NeedSupportIpv6 = null;

        /**
         * 实例需要绑定的Tag信息，默认为空。
         * @type {Array.<Tag> || null}
         */
        this.TagList = null;

        /**
         * 安全组ID。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * PostgreSQL主要版本。目前支持10，11，12，13这几个版本。当输入该参数时，会基于此版本创建对应的最新内核版本号实例。该参数和DBVersion、DBKernelVersion至少需要传递一个。
         * @type {string || null}
         */
        this.DBMajorVersion = null;

        /**
         * PostgreSQL内核版本。当输入该参数时，会创建该内核版本号实例。该参数和DBVersion、DBMajorVersion至少需要传递一个。
         * @type {string || null}
         */
        this.DBKernelVersion = null;

        /**
         * 实例节点信息，购买跨可用区实例时填写。
         * @type {Array.<DBNode> || null}
         */
        this.DBNodeSet = null;

        /**
         * 是否需要支持数据透明加密，1：是，0：否（默认）。
         * @type {number || null}
         */
        this.NeedSupportTDE = null;

        /**
         * 自定义密钥的keyId，若选择自定义密匙加密，则需要传入自定义密匙的keyId，keyId是CMK的唯一标识。
         * @type {string || null}
         */
        this.KMSKeyId = null;

        /**
         * 使用KMS服务的地域，KMSRegion为空默认使用本地域的kms，本地域不支持的情况下需自选其他KMS支持的地域。
         * @type {string || null}
         */
        this.KMSRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SpecCode = 'SpecCode' in params ? params.SpecCode : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Charset = 'Charset' in params ? params.Charset : null;
        this.AdminName = 'AdminName' in params ? params.AdminName : null;
        this.AdminPassword = 'AdminPassword' in params ? params.AdminPassword : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.NeedSupportIpv6 = 'NeedSupportIpv6' in params ? params.NeedSupportIpv6 : null;

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new Tag();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.DBMajorVersion = 'DBMajorVersion' in params ? params.DBMajorVersion : null;
        this.DBKernelVersion = 'DBKernelVersion' in params ? params.DBKernelVersion : null;

        if (params.DBNodeSet) {
            this.DBNodeSet = new Array();
            for (let z in params.DBNodeSet) {
                let obj = new DBNode();
                obj.deserialize(params.DBNodeSet[z]);
                this.DBNodeSet.push(obj);
            }
        }
        this.NeedSupportTDE = 'NeedSupportTDE' in params ? params.NeedSupportTDE : null;
        this.KMSKeyId = 'KMSKeyId' in params ? params.KMSKeyId : null;
        this.KMSRegion = 'KMSRegion' in params ? params.KMSRegion : null;

    }
}

/**
 * 描述一种规格的信息
 * @class
 */
class SpecItemInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规格ID
         * @type {string || null}
         */
        this.SpecCode = null;

        /**
         * PostgreSQL的版本编号
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 内核编号对应的完整版本名称
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * CPU核数
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 内存大小，单位：MB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 该规格所支持最大存储容量，单位：GB
         * @type {number || null}
         */
        this.MaxStorage = null;

        /**
         * 该规格所支持最小存储容量，单位：GB
         * @type {number || null}
         */
        this.MinStorage = null;

        /**
         * 该规格的预估QPS
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * 该规格对应的计费ID
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * 机器类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * PostgreSQL的主要版本编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MajorVersion = null;

        /**
         * PostgreSQL的内核版本编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.KernelVersion = null;

        /**
         * 是否支持TDE数据加密功能，0-不支持，1-支持
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsSupportTDE = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SpecCode = 'SpecCode' in params ? params.SpecCode : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.MaxStorage = 'MaxStorage' in params ? params.MaxStorage : null;
        this.MinStorage = 'MinStorage' in params ? params.MinStorage : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.MajorVersion = 'MajorVersion' in params ? params.MajorVersion : null;
        this.KernelVersion = 'KernelVersion' in params ? params.KernelVersion : null;
        this.IsSupportTDE = 'IsSupportTDE' in params ? params.IsSupportTDE : null;

    }
}

/**
 * CreateDBInstanceNetworkAccess返回参数结构体
 * @class
 */
class CreateDBInstanceNetworkAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAvailableRecoveryTime返回参数结构体
 * @class
 */
class DescribeAvailableRecoveryTimeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可恢复的最早时间，时区为东八区（UTC+8）。
         * @type {string || null}
         */
        this.RecoveryBeginTime = null;

        /**
         * 可恢复的最晚时间，时区为东八区（UTC+8）。
         * @type {string || null}
         */
        this.RecoveryEndTime = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RecoveryBeginTime = 'RecoveryBeginTime' in params ? params.RecoveryBeginTime : null;
        this.RecoveryEndTime = 'RecoveryEndTime' in params ? params.RecoveryEndTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBInstanceReadOnlyGroup返回参数结构体
 * @class
 */
class ModifyDBInstanceReadOnlyGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloneDBInstance请求参数结构体
 * @class
 */
class CloneDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 克隆的源实例ID。
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 售卖规格ID。该参数可以通过调用DescribeProductConfig的返回值中的SpecCode字段来获取。
         * @type {string || null}
         */
        this.SpecCode = null;

        /**
         * 实例容量大小，单位：GB。
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 购买时长，单位：月。目前只支持1,2,3,4,5,6,7,8,9,10,11,12,24,36这些值，按量计费模式下该参数传1。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 续费标记：0-正常续费（默认）；1-自动续费。
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 私有网络ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 已配置的私有网络中的子网ID。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 新购实例的实例名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 实例计费类型。目前支持：PREPAID（预付费，即包年包月），POSTPAID_BY_HOUR（后付费，即按量计费）。
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 安全组ID。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 项目ID。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 实例需要绑定的Tag信息，默认为空。
         * @type {Array.<Tag> || null}
         */
        this.TagList = null;

        /**
         * 购买多可用区实例时填写。
         * @type {Array.<DBNode> || null}
         */
        this.DBNodeSet = null;

        /**
         * 是否自动使用代金券。1（是），0（否），默认不使用。
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * 代金券ID列表。
         * @type {string || null}
         */
        this.VoucherIds = null;

        /**
         * 活动ID。
         * @type {number || null}
         */
        this.ActivityId = null;

        /**
         * 基础备份集ID。
         * @type {string || null}
         */
        this.BackupSetId = null;

        /**
         * 恢复时间点。
         * @type {string || null}
         */
        this.RecoveryTargetTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.SpecCode = 'SpecCode' in params ? params.SpecCode : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new Tag();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }

        if (params.DBNodeSet) {
            this.DBNodeSet = new Array();
            for (let z in params.DBNodeSet) {
                let obj = new DBNode();
                obj.deserialize(params.DBNodeSet[z]);
                this.DBNodeSet.push(obj);
            }
        }
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.BackupSetId = 'BackupSetId' in params ? params.BackupSetId : null;
        this.RecoveryTargetTime = 'RecoveryTargetTime' in params ? params.RecoveryTargetTime : null;

    }
}

/**
 * DescribeCloneDBInstanceSpec请求参数结构体
 * @class
 */
class DescribeCloneDBInstanceSpecRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 基础备份集ID，此入参和RecoveryTargetTime必须选择一个传入。如与RecoveryTargetTime参数同时设置，则以此参数为准。
         * @type {string || null}
         */
        this.BackupSetId = null;

        /**
         * 恢复目标时间，此入参和BackupSetId必须选择一个传入。时区以东八区（UTC+8）为准。
         * @type {string || null}
         */
        this.RecoveryTargetTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.BackupSetId = 'BackupSetId' in params ? params.BackupSetId : null;
        this.RecoveryTargetTime = 'RecoveryTargetTime' in params ? params.RecoveryTargetTime : null;

    }
}

/**
 * 备份计划
 * @class
 */
class BackupPlan extends  AbstractModel {
    constructor(){
        super();

        /**
         * 备份周期
         * @type {string || null}
         */
        this.BackupPeriod = null;

        /**
         * 基础备份保留时长
         * @type {number || null}
         */
        this.BaseBackupRetentionPeriod = null;

        /**
         * 开始备份的最早时间
         * @type {string || null}
         */
        this.MinBackupStartTime = null;

        /**
         * 开始备份的最晚时间
         * @type {string || null}
         */
        this.MaxBackupStartTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BackupPeriod = 'BackupPeriod' in params ? params.BackupPeriod : null;
        this.BaseBackupRetentionPeriod = 'BaseBackupRetentionPeriod' in params ? params.BaseBackupRetentionPeriod : null;
        this.MinBackupStartTime = 'MinBackupStartTime' in params ? params.MinBackupStartTime : null;
        this.MaxBackupStartTime = 'MaxBackupStartTime' in params ? params.MaxBackupStartTime : null;

    }
}

/**
 * OpenServerlessDBExtranetAccess请求参数结构体
 * @class
 */
class OpenServerlessDBExtranetAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例的唯一标识符
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.DBInstanceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.DBInstanceName = 'DBInstanceName' in params ? params.DBInstanceName : null;

    }
}

/**
 * RenewInstance返回参数结构体
 * @class
 */
class RenewInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单名
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteServerlessDBInstance返回参数结构体
 * @class
 */
class DeleteServerlessDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyReadOnlyGroupConfig请求参数结构体
 * @class
 */
class ModifyReadOnlyGroupConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 只读组ID
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

        /**
         * 只读组名称
         * @type {string || null}
         */
        this.ReadOnlyGroupName = null;

        /**
         * 延迟时间配置开关：0关、1开
         * @type {number || null}
         */
        this.ReplayLagEliminate = null;

        /**
         * 延迟日志大小配置开关：0关、1开
         * @type {number || null}
         */
        this.ReplayLatencyEliminate = null;

        /**
         * 延迟日志大小阈值，单位MB
         * @type {number || null}
         */
        this.MaxReplayLatency = null;

        /**
         * 延迟时间大小阈值，单位ms
         * @type {number || null}
         */
        this.MaxReplayLag = null;

        /**
         * 自动负载均衡开关：0关、1开
         * @type {number || null}
         */
        this.Rebalance = null;

        /**
         * 延迟剔除最小保留实例数
         * @type {number || null}
         */
        this.MinDelayEliminateReserve = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;
        this.ReadOnlyGroupName = 'ReadOnlyGroupName' in params ? params.ReadOnlyGroupName : null;
        this.ReplayLagEliminate = 'ReplayLagEliminate' in params ? params.ReplayLagEliminate : null;
        this.ReplayLatencyEliminate = 'ReplayLatencyEliminate' in params ? params.ReplayLatencyEliminate : null;
        this.MaxReplayLatency = 'MaxReplayLatency' in params ? params.MaxReplayLatency : null;
        this.MaxReplayLag = 'MaxReplayLag' in params ? params.MaxReplayLag : null;
        this.Rebalance = 'Rebalance' in params ? params.Rebalance : null;
        this.MinDelayEliminateReserve = 'MinDelayEliminateReserve' in params ? params.MinDelayEliminateReserve : null;

    }
}

/**
 * AddDBInstanceToReadOnlyGroup请求参数结构体
 * @class
 */
class AddDBInstanceToReadOnlyGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 只读组ID
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;

    }
}

/**
 * DescribeProductConfig请求参数结构体
 * @class
 */
class DescribeProductConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区名称
         * @type {string || null}
         */
        this.Zone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * InitDBInstances返回参数结构体
 * @class
 */
class InitDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID集合。
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RenewInstance请求参数结构体
 * @class
 */
class RenewInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如postgres-6fego161
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 续费多少个月
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 是否自动使用代金券,1是,0否，默认不使用
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * 代金券ID列表，目前仅支持指定一张代金券
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;

    }
}

/**
 * RebalanceReadOnlyGroup请求参数结构体
 * @class
 */
class RebalanceReadOnlyGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 只读组ID
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;

    }
}

/**
 * DescribeRegions返回参数结构体
 * @class
 */
class DescribeRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的结果数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 地域信息集合。
         * @type {Array.<RegionInfo> || null}
         */
        this.RegionSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.RegionSet) {
            this.RegionSet = new Array();
            for (let z in params.RegionSet) {
                let obj = new RegionInfo();
                obj.deserialize(params.RegionSet[z]);
                this.RegionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 描述实例的网络连接信息。
 * @class
 */
class DBInstanceNetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * DNS域名
         * @type {string || null}
         */
        this.Address = null;

        /**
         * IP地址
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 连接Port地址
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 网络类型，1、inner（基础网络内网地址）；2、private（私有网络内网地址）；3、public（基础网络或私有网络的外网地址）；
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * 网络连接状态，1、initing（未开通）；2、opened（已开通）；3、closed（已关闭）；4、opening（开通中）；5、closing（关闭中）；
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 私有网络ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubnetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Address = 'Address' in params ? params.Address : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * ModifyDBInstanceDeployment请求参数结构体
 * @class
 */
class ModifyDBInstanceDeploymentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 实例节点信息。
         * @type {Array.<DBNode> || null}
         */
        this.DBNodeSet = null;

        /**
         * 切换时间。默认为 立即切换，入参为 0 ：立即切换 。1：指定时间切换。2：维护时间窗口内切换
         * @type {number || null}
         */
        this.SwitchTag = null;

        /**
         * 切换开始时间，时间格式：HH:MM:SS，例如：01:00:00。当SwitchTag为0或2时，该参数失效。
         * @type {string || null}
         */
        this.SwitchStartTime = null;

        /**
         * 切换截止时间，时间格式：HH:MM:SS，例如：01:30:00。当SwitchTag为0或2时，该参数失效。
         * @type {string || null}
         */
        this.SwitchEndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

        if (params.DBNodeSet) {
            this.DBNodeSet = new Array();
            for (let z in params.DBNodeSet) {
                let obj = new DBNode();
                obj.deserialize(params.DBNodeSet[z]);
                this.DBNodeSet.push(obj);
            }
        }
        this.SwitchTag = 'SwitchTag' in params ? params.SwitchTag : null;
        this.SwitchStartTime = 'SwitchStartTime' in params ? params.SwitchStartTime : null;
        this.SwitchEndTime = 'SwitchEndTime' in params ? params.SwitchEndTime : null;

    }
}

/**
 * DeleteReadOnlyGroupNetworkAccess请求参数结构体
 * @class
 */
class DeleteReadOnlyGroupNetworkAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * RO组ID，形如：pgro-4t9c6g7k。
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

        /**
         * 私有网络统一 ID，若是基础网络则传"0"。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网ID，若是基础网络则传"0"。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 目标VIP地址。
         * @type {string || null}
         */
        this.Vip = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Vip = 'Vip' in params ? params.Vip : null;

    }
}

/**
 * 描述可用区的编码和状态信息
 * @class
 */
class ZoneInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该可用区的英文名称
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 该可用区的中文名称
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 该可用区对应的数字编号
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 可用状态，UNAVAILABLE表示不可用，AVAILABLE表示可用，SELLOUT表示售罄
         * @type {string || null}
         */
        this.ZoneState = null;

        /**
         * 该可用区是否支持Ipv6
         * @type {number || null}
         */
        this.ZoneSupportIpv6 = null;

        /**
         * 该可用区对应的备可用区集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.StandbyZoneSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneState = 'ZoneState' in params ? params.ZoneState : null;
        this.ZoneSupportIpv6 = 'ZoneSupportIpv6' in params ? params.ZoneSupportIpv6 : null;
        this.StandbyZoneSet = 'StandbyZoneSet' in params ? params.StandbyZoneSet : null;

    }
}

/**
 * InquiryPriceCreateDBInstances请求参数结构体
 * @class
 */
class InquiryPriceCreateDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区ID。该参数可以通过调用 DescribeZones 接口的返回值中的Zone字段来获取。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 规格ID。该参数可以通过调用DescribeProductConfig接口的返回值中的SpecCode字段来获取。
         * @type {string || null}
         */
        this.SpecCode = null;

        /**
         * 存储容量大小，单位：GB。
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 实例数量。目前最大数量不超过100，如需一次性创建更多实例，请联系客服支持。
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * 购买时长，单位：月。目前只支持1,2,3,4,5,6,7,8,9,10,11,12,24,36这些值。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 计费ID。该参数可以通过调用DescribeProductConfig接口的返回值中的Pid字段来获取。
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * 实例计费类型。目前只支持：PREPAID（预付费，即包年包月）。
         * @type {string || null}
         */
        this.InstanceChargeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.SpecCode = 'SpecCode' in params ? params.SpecCode : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

    }
}

/**
 * 单条SlowQuery信息
 * @class
 */
class NormalQueryItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 调用次数
         * @type {number || null}
         */
        this.Calls = null;

        /**
         * 粒度点
         * @type {Array.<number> || null}
         */
        this.CallsGrids = null;

        /**
         * 花费总时间
         * @type {number || null}
         */
        this.CostTime = null;

        /**
         * 影响的行数
         * @type {number || null}
         */
        this.Rows = null;

        /**
         * 花费最小时间
         * @type {number || null}
         */
        this.MinCostTime = null;

        /**
         * 花费最大时间
         * @type {number || null}
         */
        this.MaxCostTime = null;

        /**
         * 最早一条慢SQL时间
         * @type {string || null}
         */
        this.FirstTime = null;

        /**
         * 最晚一条慢SQL时间
         * @type {string || null}
         */
        this.LastTime = null;

        /**
         * 读共享内存块数
         * @type {number || null}
         */
        this.SharedReadBlks = null;

        /**
         * 写共享内存块数
         * @type {number || null}
         */
        this.SharedWriteBlks = null;

        /**
         * 读io总耗时
         * @type {number || null}
         */
        this.ReadCostTime = null;

        /**
         * 写io总耗时
         * @type {number || null}
         */
        this.WriteCostTime = null;

        /**
         * 数据库名字
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 脱敏后的慢SQL
         * @type {string || null}
         */
        this.NormalQuery = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Calls = 'Calls' in params ? params.Calls : null;
        this.CallsGrids = 'CallsGrids' in params ? params.CallsGrids : null;
        this.CostTime = 'CostTime' in params ? params.CostTime : null;
        this.Rows = 'Rows' in params ? params.Rows : null;
        this.MinCostTime = 'MinCostTime' in params ? params.MinCostTime : null;
        this.MaxCostTime = 'MaxCostTime' in params ? params.MaxCostTime : null;
        this.FirstTime = 'FirstTime' in params ? params.FirstTime : null;
        this.LastTime = 'LastTime' in params ? params.LastTime : null;
        this.SharedReadBlks = 'SharedReadBlks' in params ? params.SharedReadBlks : null;
        this.SharedWriteBlks = 'SharedWriteBlks' in params ? params.SharedWriteBlks : null;
        this.ReadCostTime = 'ReadCostTime' in params ? params.ReadCostTime : null;
        this.WriteCostTime = 'WriteCostTime' in params ? params.WriteCostTime : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.NormalQuery = 'NormalQuery' in params ? params.NormalQuery : null;

    }
}

/**
 * 实例绑定的标签信息，包含标签键TagKey和标签值TagValue
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签值
         * @type {string || null}
         */
        this.TagValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * DescribeDBInstanceAttribute请求参数结构体
 * @class
 */
class DescribeDBInstanceAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

    }
}

/**
 * CloseServerlessDBExtranetAccess请求参数结构体
 * @class
 */
class CloseServerlessDBExtranetAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例唯一标识符
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.DBInstanceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.DBInstanceName = 'DBInstanceName' in params ? params.DBInstanceName : null;

    }
}

/**
 * CloneDBInstance返回参数结构体
 * @class
 */
class CloneDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单号。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * 订单流水号。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BillId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBInstanceReadOnlyGroup请求参数结构体
 * @class
 */
class ModifyDBInstanceReadOnlyGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 当前实例所在只读组ID
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

        /**
         * 实例修改的目标只读组ID
         * @type {string || null}
         */
        this.NewReadOnlyGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;
        this.NewReadOnlyGroupId = 'NewReadOnlyGroupId' in params ? params.NewReadOnlyGroupId : null;

    }
}

/**
 * AddDBInstanceToReadOnlyGroup返回参数结构体
 * @class
 */
class AddDBInstanceToReadOnlyGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateReadOnlyDBInstance返回参数结构体
 * @class
 */
class CreateReadOnlyDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单号列表。每个实例对应一个订单号
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

        /**
         * 冻结流水号
         * @type {string || null}
         */
        this.BillId = null;

        /**
         * 创建成功的实例ID集合，只在后付费情景下有返回值
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAvailableRecoveryTime请求参数结构体
 * @class
 */
class DescribeAvailableRecoveryTimeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

    }
}

/**
 * 慢SQL耗时分段分析
 * @class
 */
class DurationAnalysis extends  AbstractModel {
    constructor(){
        super();

        /**
         * 慢SQL耗时，时段
         * @type {string || null}
         */
        this.TimeSegment = null;

        /**
         * 对应时段区间慢SQL 条数
         * @type {number || null}
         */
        this.Count = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeSegment = 'TimeSegment' in params ? params.TimeSegment : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * DescribeDBInstanceParameters请求参数结构体
 * @class
 */
class DescribeDBInstanceParametersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 查询指定参数详情。ParamName为空或不传，默认返回全部参数列表
         * @type {string || null}
         */
        this.ParamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.ParamName = 'ParamName' in params ? params.ParamName : null;

    }
}

/**
 * DescribeOrders返回参数结构体
 * @class
 */
class DescribeOrdersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 订单数组
         * @type {Array.<PgDeal> || null}
         */
        this.Deals = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Deals) {
            this.Deals = new Array();
            for (let z in params.Deals) {
                let obj = new PgDeal();
                obj.deserialize(params.Deals[z]);
                this.Deals.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OpenServerlessDBExtranetAccess返回参数结构体
 * @class
 */
class OpenServerlessDBExtranetAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceCreateDBInstances返回参数结构体
 * @class
 */
class InquiryPriceCreateDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原始价格，单位：分
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * 折后价格，单位：分
         * @type {number || null}
         */
        this.Price = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDBInstanceNetworkAccess请求参数结构体
 * @class
 */
class CreateDBInstanceNetworkAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如：postgres-6bwgamo3。
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 私有网络统一 ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网ID。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 是否指定分配vip true-指定分配  false-自动分配。
         * @type {boolean || null}
         */
        this.IsAssignVip = null;

        /**
         * 目标VIP地址。
         * @type {string || null}
         */
        this.Vip = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.IsAssignVip = 'IsAssignVip' in params ? params.IsAssignVip : null;
        this.Vip = 'Vip' in params ? params.Vip : null;

    }
}

/**
 * ModifySwitchTimePeriod返回参数结构体
 * @class
 */
class ModifySwitchTimePeriodResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisIsolateDBInstances请求参数结构体
 * @class
 */
class DisIsolateDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源ID列表
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

        /**
         * 包年包月实例解隔离时购买时常 以月为单位
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 是否使用代金券：true-使用,false-不使用，默认不使用
         * @type {boolean || null}
         */
        this.AutoVoucher = null;

        /**
         * 代金券id列表
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;

    }
}

/**
 * serverless实例网络信息描述
 * @class
 */
class ServerlessDBInstanceNetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Address = null;

        /**
         * ip地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 端口号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 网络类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NetType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Address = 'Address' in params ? params.Address : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.NetType = 'NetType' in params ? params.NetType : null;

    }
}

/**
 * DescribeBackupPlans返回参数结构体
 * @class
 */
class DescribeBackupPlansResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例的备份计划集
         * @type {Array.<BackupPlan> || null}
         */
        this.Plans = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Plans) {
            this.Plans = new Array();
            for (let z in params.Plans) {
                let obj = new BackupPlan();
                obj.deserialize(params.Plans[z]);
                this.Plans.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBInstances请求参数结构体
 * @class
 */
class DescribeDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按照一个或者多个过滤条件进行查询，目前支持的过滤条件有：
db-instance-id：按照实例ID过滤，类型为string
db-instance-name：按照实例名过滤，类型为string
db-project-id：按照项目ID过滤，类型为integer
db-pay-mode：按照付费模式过滤，类型为string
db-tag-key：按照标签键过滤，类型为string
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 每页显示数量，取值范围为1-100，默认为返回10条。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序指标，如实例名、创建时间等，支持DBInstanceId,CreateTime,Name,EndTime
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 页码偏移量，从0开始。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 排序方式，包括升序：asc、降序：desc。
         * @type {string || null}
         */
        this.OrderByType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

    }
}

/**
 * ModifyDBInstanceSpec请求参数结构体
 * @class
 */
class ModifyDBInstanceSpecRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如：postgres-6bwgamo3。
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 修改后的实例内存大小，单位GiB。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 修改后的实例磁盘大小，单位GiB。
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 是否自动使用代金券,1是,0否，默认不使用。
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * 代金券ID列表，目前仅支持指定一张代金券。
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * 活动ID。
         * @type {number || null}
         */
        this.ActivityId = null;

        /**
         * 指定实例配置完成变更后的切换时间，默认为 立即切换，入参为 0 ：立即切换 。1：指定时间切换。2：维护时间窗口内切换。
         * @type {number || null}
         */
        this.SwitchTag = null;

        /**
         * 切换开始时间，时间格式：HH:MM:SS，例如：01:00:00。当SwitchTag为0或2时，该参数失效。
         * @type {string || null}
         */
        this.SwitchStartTime = null;

        /**
         * 切换截止时间，时间格式：HH:MM:SS，例如：01:30:00。当SwitchTag为0或2时，该参数失效。
         * @type {string || null}
         */
        this.SwitchEndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.SwitchTag = 'SwitchTag' in params ? params.SwitchTag : null;
        this.SwitchStartTime = 'SwitchStartTime' in params ? params.SwitchStartTime : null;
        this.SwitchEndTime = 'SwitchEndTime' in params ? params.SwitchEndTime : null;

    }
}

/**
 * ModifyAccountRemark返回参数结构体
 * @class
 */
class ModifyAccountRemarkResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpgradeDBInstance请求参数结构体
 * @class
 */
class UpgradeDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 升级后的实例内存大小，单位GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 升级后的实例磁盘大小，单位GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 实例ID，形如postgres-lnp6j617
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 是否自动使用代金券,1是,0否，默认不使用
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * 代金券ID列表，目前仅支持指定一张代金券
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * 活动ID
         * @type {number || null}
         */
        this.ActivityId = null;

        /**
         * 指定实例配置完成变更后的切换时间，默认为 立即切换，入参为 0 ：立即切换 。1：指定时间切换。
         * @type {number || null}
         */
        this.SwitchTag = null;

        /**
         * 切换开始时间
         * @type {string || null}
         */
        this.SwitchStartTime = null;

        /**
         * 切换截止时间
         * @type {string || null}
         */
        this.SwitchEndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.SwitchTag = 'SwitchTag' in params ? params.SwitchTag : null;
        this.SwitchStartTime = 'SwitchStartTime' in params ? params.SwitchStartTime : null;
        this.SwitchEndTime = 'SwitchEndTime' in params ? params.SwitchEndTime : null;

    }
}

/**
 * DescribeZones请求参数结构体
 * @class
 */
class DescribeZonesRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * 描述某个地域下某个可用区的可售卖规格详细信息。
 * @class
 */
class SpecInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域英文编码，对应RegionSet的Region字段
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 区域英文编码，对应ZoneSet的Zone字段
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 规格详细信息列表
         * @type {Array.<SpecItemInfo> || null}
         */
        this.SpecItemInfoList = null;

        /**
         * 支持KMS的地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SupportKMSRegions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

        if (params.SpecItemInfoList) {
            this.SpecItemInfoList = new Array();
            for (let z in params.SpecItemInfoList) {
                let obj = new SpecItemInfo();
                obj.deserialize(params.SpecItemInfoList[z]);
                this.SpecItemInfoList.push(obj);
            }
        }
        this.SupportKMSRegions = 'SupportKMSRegions' in params ? params.SupportKMSRegions : null;

    }
}

/**
 * DescribeReadOnlyGroups返回参数结构体
 * @class
 */
class DescribeReadOnlyGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 只读组列表
         * @type {Array.<ReadOnlyGroup> || null}
         */
        this.ReadOnlyGroupList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ReadOnlyGroupList) {
            this.ReadOnlyGroupList = new Array();
            for (let z in params.ReadOnlyGroupList) {
                let obj = new ReadOnlyGroup();
                obj.deserialize(params.ReadOnlyGroupList[z]);
                this.ReadOnlyGroupList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetAutoRenewFlag返回参数结构体
 * @class
 */
class SetAutoRenewFlagResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设置成功的实例个数
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Count = 'Count' in params ? params.Count : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 网络相关信息。（该数据结构已废弃，网络相关信息使用DBInstanceNetInfo）
 * @class
 */
class NetworkAccess extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络资源id，实例id或RO组id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 资源类型，1-实例 2-RO组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ResourceType = null;

        /**
         * 私有网络ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * IPV4地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * IPV6地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Vip6 = null;

        /**
         * 访问端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 网络状态，1-申请中，2-使用中，3-删除中，4-已删除
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VpcStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vip6 = 'Vip6' in params ? params.Vip6 : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.VpcStatus = 'VpcStatus' in params ? params.VpcStatus : null;

    }
}

/**
 * ResetAccountPassword返回参数结构体
 * @class
 */
class ResetAccountPasswordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBInstancesProject返回参数结构体
 * @class
 */
class ModifyDBInstancesProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转移项目成功的实例个数
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Count = 'Count' in params ? params.Count : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 只读组信息
 * @class
 */
class ReadOnlyGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 只读组标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

        /**
         * 只读组名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReadOnlyGroupName = null;

        /**
         * 项目id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 主实例id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MasterDBInstanceId = null;

        /**
         * 最小保留实例数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MinDelayEliminateReserve = null;

        /**
         * 延迟空间大小阈值
         * @type {number || null}
         */
        this.MaxReplayLatency = null;

        /**
         * 延迟大小开关
         * @type {number || null}
         */
        this.ReplayLatencyEliminate = null;

        /**
         * 延迟时间大小阈值
         * @type {number || null}
         */
        this.MaxReplayLag = null;

        /**
         * 延迟时间开关
         * @type {number || null}
         */
        this.ReplayLagEliminate = null;

        /**
         * 虚拟网络id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 地域id
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 地区id
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 实例详细信息
         * @type {Array.<DBInstance> || null}
         */
        this.ReadOnlyDBInstanceList = null;

        /**
         * 自动负载均衡开关
         * @type {number || null}
         */
        this.Rebalance = null;

        /**
         * 网络信息
         * @type {Array.<DBInstanceNetInfo> || null}
         */
        this.DBInstanceNetInfo = null;

        /**
         * 只读组网络信息列表（此字段已废弃）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NetworkAccess> || null}
         */
        this.NetworkAccessList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;
        this.ReadOnlyGroupName = 'ReadOnlyGroupName' in params ? params.ReadOnlyGroupName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.MasterDBInstanceId = 'MasterDBInstanceId' in params ? params.MasterDBInstanceId : null;
        this.MinDelayEliminateReserve = 'MinDelayEliminateReserve' in params ? params.MinDelayEliminateReserve : null;
        this.MaxReplayLatency = 'MaxReplayLatency' in params ? params.MaxReplayLatency : null;
        this.ReplayLatencyEliminate = 'ReplayLatencyEliminate' in params ? params.ReplayLatencyEliminate : null;
        this.MaxReplayLag = 'MaxReplayLag' in params ? params.MaxReplayLag : null;
        this.ReplayLagEliminate = 'ReplayLagEliminate' in params ? params.ReplayLagEliminate : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.ReadOnlyDBInstanceList) {
            this.ReadOnlyDBInstanceList = new Array();
            for (let z in params.ReadOnlyDBInstanceList) {
                let obj = new DBInstance();
                obj.deserialize(params.ReadOnlyDBInstanceList[z]);
                this.ReadOnlyDBInstanceList.push(obj);
            }
        }
        this.Rebalance = 'Rebalance' in params ? params.Rebalance : null;

        if (params.DBInstanceNetInfo) {
            this.DBInstanceNetInfo = new Array();
            for (let z in params.DBInstanceNetInfo) {
                let obj = new DBInstanceNetInfo();
                obj.deserialize(params.DBInstanceNetInfo[z]);
                this.DBInstanceNetInfo.push(obj);
            }
        }

        if (params.NetworkAccessList) {
            this.NetworkAccessList = new Array();
            for (let z in params.NetworkAccessList) {
                let obj = new NetworkAccess();
                obj.deserialize(params.NetworkAccessList[z]);
                this.NetworkAccessList.push(obj);
            }
        }

    }
}

/**
 * 订单详情
 * @class
 */
class PgDeal extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单名
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * 所属用户
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * 订单涉及多少个实例
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 付费模式。1-预付费；0-后付费
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 异步任务流程ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 实例ID数组
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;

    }
}

/**
 * DeleteReadOnlyGroupNetworkAccess返回参数结构体
 * @class
 */
class DeleteReadOnlyGroupNetworkAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBErrlogs请求参数结构体
 * @class
 */
class DescribeDBErrlogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如postgres-5bq3wfjd
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 查询起始时间，形如2018-01-01 00:00:00，起始时间不得小于7天以前
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间，形如2018-01-01 00:00:00
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 数据库名字
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 搜索关键字
         * @type {Array.<string> || null}
         */
        this.SearchKeys = null;

        /**
         * 分页返回，每页返回的最大数量。取值为1-100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页返回，返回第几页的数据，从第0页开始计数
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.SearchKeys = 'SearchKeys' in params ? params.SearchKeys : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DestroyDBInstance请求参数结构体
 * @class
 */
class DestroyDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待下线实例ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

    }
}

/**
 * serverless账号描述
 * @class
 */
class ServerlessDBAccount extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DBUser = null;

        /**
         * 密码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DBPassword = null;

        /**
         * 连接数限制
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DBConnLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBUser = 'DBUser' in params ? params.DBUser : null;
        this.DBPassword = 'DBPassword' in params ? params.DBPassword : null;
        this.DBConnLimit = 'DBConnLimit' in params ? params.DBConnLimit : null;

    }
}

/**
 * ModifyDBInstanceDeployment返回参数结构体
 * @class
 */
class ModifyDBInstanceDeploymentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeParamsEvent请求参数结构体
 * @class
 */
class DescribeParamsEventRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例DB ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

    }
}

/**
 * 参数修改事件信息
 * @class
 */
class EventInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * 原参数值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OldValue = null;

        /**
         * 本次修改期望参数值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NewValue = null;

        /**
         * 后台参数修改开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * 后台参数生效开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EffectiveTime = null;

        /**
         * 修改状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.State = null;

        /**
         * 操作者（一般为用户sub UIN）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 时间日志。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EventLog = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.OldValue = 'OldValue' in params ? params.OldValue : null;
        this.NewValue = 'NewValue' in params ? params.NewValue : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.EffectiveTime = 'EffectiveTime' in params ? params.EffectiveTime : null;
        this.State = 'State' in params ? params.State : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.EventLog = 'EventLog' in params ? params.EventLog : null;

    }
}

/**
 * CreateInstances返回参数结构体
 * @class
 */
class CreateInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单号列表。每个实例对应一个订单号。
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

        /**
         * 冻结流水号。
         * @type {string || null}
         */
        this.BillId = null;

        /**
         * 创建成功的实例ID集合，只在后付费情景下有返回值。
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 慢查询分析接口返回的分析详情，按照参数抽象之后进行分类
 * @class
 */
class AnalysisItems extends  AbstractModel {
    constructor(){
        super();

        /**
         * 慢SQL查询的数据库名
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 慢SQL执行的用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 抽象参数之后的慢SQL
         * @type {string || null}
         */
        this.NormalQuery = null;

        /**
         * 慢SQL执行的客户端地址
         * @type {string || null}
         */
        this.ClientAddr = null;

        /**
         * 在选定时间范围内慢SQL语句执行的次数
         * @type {number || null}
         */
        this.CallNum = null;

        /**
         * 在选定时间范围内，慢SQL语句执行的次数占所有慢SQL的比例（小数返回）
         * @type {number || null}
         */
        this.CallPercent = null;

        /**
         * 在选定时间范围内，慢SQL执行的总时间
         * @type {number || null}
         */
        this.CostTime = null;

        /**
         * 在选定时间范围内，慢SQL语句执行的总时间占所有慢SQL的比例（小数返回）
         * @type {number || null}
         */
        this.CostPercent = null;

        /**
         * 在选定时间范围内，慢SQL语句执行的耗时最短的时间（单位：ms）
         * @type {number || null}
         */
        this.MinCostTime = null;

        /**
         * 在选定时间范围内，慢SQL语句执行的耗时最长的时间（单位：ms）
         * @type {number || null}
         */
        this.MaxCostTime = null;

        /**
         * 在选定时间范围内，慢SQL语句执行的耗时平均时间（单位：ms）
         * @type {number || null}
         */
        this.AvgCostTime = null;

        /**
         * 在选定时间范围内，慢SQL第一条开始执行的时间戳
         * @type {string || null}
         */
        this.FirstTime = null;

        /**
         * 在选定时间范围内，慢SQL最后一条开始执行的时间戳
         * @type {string || null}
         */
        this.LastTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.NormalQuery = 'NormalQuery' in params ? params.NormalQuery : null;
        this.ClientAddr = 'ClientAddr' in params ? params.ClientAddr : null;
        this.CallNum = 'CallNum' in params ? params.CallNum : null;
        this.CallPercent = 'CallPercent' in params ? params.CallPercent : null;
        this.CostTime = 'CostTime' in params ? params.CostTime : null;
        this.CostPercent = 'CostPercent' in params ? params.CostPercent : null;
        this.MinCostTime = 'MinCostTime' in params ? params.MinCostTime : null;
        this.MaxCostTime = 'MaxCostTime' in params ? params.MaxCostTime : null;
        this.AvgCostTime = 'AvgCostTime' in params ? params.AvgCostTime : null;
        this.FirstTime = 'FirstTime' in params ? params.FirstTime : null;
        this.LastTime = 'LastTime' in params ? params.LastTime : null;

    }
}

/**
 * 数据库Xlog信息
 * @class
 */
class Xlog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 备份文件唯一标识
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 文件生成的开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 文件生成的结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 内网下载地址
         * @type {string || null}
         */
        this.InternalAddr = null;

        /**
         * 外网下载地址
         * @type {string || null}
         */
        this.ExternalAddr = null;

        /**
         * 备份文件大小
         * @type {number || null}
         */
        this.Size = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.InternalAddr = 'InternalAddr' in params ? params.InternalAddr : null;
        this.ExternalAddr = 'ExternalAddr' in params ? params.ExternalAddr : null;
        this.Size = 'Size' in params ? params.Size : null;

    }
}

/**
 * DescribeServerlessDBInstances请求参数结构体
 * @class
 */
class DescribeServerlessDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询条件
         * @type {Array.<Filter> || null}
         */
        this.Filter = null;

        /**
         * 查询个数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 排序指标，目前支持实例创建时间CreateTime
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 排序方式，包括升序、降序
         * @type {string || null}
         */
        this.OrderByType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filter) {
            this.Filter = new Array();
            for (let z in params.Filter) {
                let obj = new Filter();
                obj.deserialize(params.Filter[z]);
                this.Filter.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

    }
}

/**
 * DescribeDBBackups返回参数结构体
 * @class
 */
class DescribeDBBackupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回备份列表中备份文件的个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 备份列表
         * @type {Array.<DBBackup> || null}
         */
        this.BackupList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.BackupList) {
            this.BackupList = new Array();
            for (let z in params.BackupList) {
                let obj = new DBBackup();
                obj.deserialize(params.BackupList[z]);
                this.BackupList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRegions请求参数结构体
 * @class
 */
class DescribeRegionsRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * DescribeSlowQueryList返回参数结构体
 * @class
 */
class DescribeSlowQueryListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 选定时间范围内慢SQL总条数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 指定时间范围内，慢SQL耗时分段分析。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DurationAnalysis> || null}
         */
        this.DurationAnalysis = null;

        /**
         * 指定时间范围内 慢SQL流水。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RawSlowQuery> || null}
         */
        this.RawSlowQueryList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.DurationAnalysis) {
            this.DurationAnalysis = new Array();
            for (let z in params.DurationAnalysis) {
                let obj = new DurationAnalysis();
                obj.deserialize(params.DurationAnalysis[z]);
                this.DurationAnalysis.push(obj);
            }
        }

        if (params.RawSlowQueryList) {
            this.RawSlowQueryList = new Array();
            for (let z in params.RawSlowQueryList) {
                let obj = new RawSlowQuery();
                obj.deserialize(params.RawSlowQueryList[z]);
                this.RawSlowQueryList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * serverless实例描述
 * @class
 */
class ServerlessDBInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id，唯一标识符
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DBInstanceName = null;

        /**
         * 实例状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DBInstanceStatus = null;

        /**
         * 地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 可用区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 项目id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 私有网络Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 字符集
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DBCharset = null;

        /**
         * 数据库版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 实例网络信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ServerlessDBInstanceNetInfo> || null}
         */
        this.DBInstanceNetInfo = null;

        /**
         * 实例账户信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ServerlessDBAccount> || null}
         */
        this.DBAccountSet = null;

        /**
         * 实例下的db信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.DBDatabaseList = null;

        /**
         * 实例绑定的标签数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.TagList = null;

        /**
         * 数据库内核版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DBKernelVersion = null;

        /**
         * 数据库主要版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DBMajorVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.DBInstanceName = 'DBInstanceName' in params ? params.DBInstanceName : null;
        this.DBInstanceStatus = 'DBInstanceStatus' in params ? params.DBInstanceStatus : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.DBCharset = 'DBCharset' in params ? params.DBCharset : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.DBInstanceNetInfo) {
            this.DBInstanceNetInfo = new Array();
            for (let z in params.DBInstanceNetInfo) {
                let obj = new ServerlessDBInstanceNetInfo();
                obj.deserialize(params.DBInstanceNetInfo[z]);
                this.DBInstanceNetInfo.push(obj);
            }
        }

        if (params.DBAccountSet) {
            this.DBAccountSet = new Array();
            for (let z in params.DBAccountSet) {
                let obj = new ServerlessDBAccount();
                obj.deserialize(params.DBAccountSet[z]);
                this.DBAccountSet.push(obj);
            }
        }
        this.DBDatabaseList = 'DBDatabaseList' in params ? params.DBDatabaseList : null;

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new Tag();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }
        this.DBKernelVersion = 'DBKernelVersion' in params ? params.DBKernelVersion : null;
        this.DBMajorVersion = 'DBMajorVersion' in params ? params.DBMajorVersion : null;

    }
}

/**
 * CreateReadOnlyGroup请求参数结构体
 * @class
 */
class CreateReadOnlyGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主实例ID
         * @type {string || null}
         */
        this.MasterDBInstanceId = null;

        /**
         * 只读组名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 私有网络ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 延迟时间大小开关：0关、1开
         * @type {number || null}
         */
        this.ReplayLagEliminate = null;

        /**
         * 延迟空间大小开关： 0关、1开
         * @type {number || null}
         */
        this.ReplayLatencyEliminate = null;

        /**
         * 延迟时间大小阈值，单位ms
         * @type {number || null}
         */
        this.MaxReplayLag = null;

        /**
         * 延迟空间大小阈值，单位MB
         * @type {number || null}
         */
        this.MaxReplayLatency = null;

        /**
         * 延迟剔除最小保留实例数
         * @type {number || null}
         */
        this.MinDelayEliminateReserve = null;

        /**
         * 安全组id
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MasterDBInstanceId = 'MasterDBInstanceId' in params ? params.MasterDBInstanceId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ReplayLagEliminate = 'ReplayLagEliminate' in params ? params.ReplayLagEliminate : null;
        this.ReplayLatencyEliminate = 'ReplayLatencyEliminate' in params ? params.ReplayLatencyEliminate : null;
        this.MaxReplayLag = 'MaxReplayLag' in params ? params.MaxReplayLag : null;
        this.MaxReplayLatency = 'MaxReplayLatency' in params ? params.MaxReplayLatency : null;
        this.MinDelayEliminateReserve = 'MinDelayEliminateReserve' in params ? params.MinDelayEliminateReserve : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

    }
}

/**
 * CreateReadOnlyGroupNetworkAccess返回参数结构体
 * @class
 */
class CreateReadOnlyGroupNetworkAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeParamsEvent返回参数结构体
 * @class
 */
class DescribeParamsEventResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数修改事件总数，以参数为统计粒度
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例参数修改事件详情
         * @type {Array.<EventItem> || null}
         */
        this.EventItems = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.EventItems) {
            this.EventItems = new Array();
            for (let z in params.EventItems) {
                let obj = new EventItem();
                obj.deserialize(params.EventItems[z]);
                this.EventItems.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloseServerlessDBExtranetAccess返回参数结构体
 * @class
 */
class CloseServerlessDBExtranetAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 修改参数条目，以参数为维度
 * @class
 */
class EventItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * 修改事件数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EventCount = null;

        /**
         * 修改时间详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<EventInfo> || null}
         */
        this.EventDetail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.EventCount = 'EventCount' in params ? params.EventCount : null;

        if (params.EventDetail) {
            this.EventDetail = new Array();
            for (let z in params.EventDetail) {
                let obj = new EventInfo();
                obj.deserialize(params.EventDetail[z]);
                this.EventDetail.push(obj);
            }
        }

    }
}

/**
 * RestartDBInstance请求参数结构体
 * @class
 */
class RestartDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如postgres-6r233v55
         * @type {string || null}
         */
        this.DBInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

    }
}

/**
 * 参数详情
 * @class
 */
class ParamInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 参数名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 参数值类型：integer（整型）、real（浮点型）、bool（布尔型）、enum（枚举类型）、mutil_enum（枚举类型、支持多选）。
当参数类型为integer（整型）、real（浮点型）时，参数的取值范围根据返回值的Max、Min确定； 
当参数类型为bool（布尔型）时，参数设置值取值范围是true | false； 
当参数类型为enum（枚举类型）、mutil_enum（多枚举类型）时，参数的取值范围由返回值中的EnumValue确定。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ParamValueType = null;

        /**
         * 参数值 单位。参数没有单位是，该字段返回空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * 参数默认值。以字符串形式返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DefaultValue = null;

        /**
         * 参数当前运行值。以字符串形式返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * 枚举类型参数，取值范围
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.EnumValue = null;

        /**
         * 数值类型（integer、real）参数，取值下界
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Max = null;

        /**
         * 数值类型（integer、real）参数，取值上界
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Min = null;

        /**
         * 参数中文描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ParamDescriptionCH = null;

        /**
         * 参数英文描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ParamDescriptionEN = null;

        /**
         * 参数修改，是否重启生效。（true为需要，false为不需要）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.NeedReboot = null;

        /**
         * 参数中文分类
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClassificationCN = null;

        /**
         * 参数英文分类
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClassificationEN = null;

        /**
         * 是否和规格相关。（true为相关，false为不想关）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.SpecRelated = null;

        /**
         * 是否为重点参数。（true为重点参数，修改是需要重点关注，可能会影响实例性能）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Advanced = null;

        /**
         * 参数最后一次修改时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastModifyTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ParamValueType = 'ParamValueType' in params ? params.ParamValueType : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.EnumValue = 'EnumValue' in params ? params.EnumValue : null;
        this.Max = 'Max' in params ? params.Max : null;
        this.Min = 'Min' in params ? params.Min : null;
        this.ParamDescriptionCH = 'ParamDescriptionCH' in params ? params.ParamDescriptionCH : null;
        this.ParamDescriptionEN = 'ParamDescriptionEN' in params ? params.ParamDescriptionEN : null;
        this.NeedReboot = 'NeedReboot' in params ? params.NeedReboot : null;
        this.ClassificationCN = 'ClassificationCN' in params ? params.ClassificationCN : null;
        this.ClassificationEN = 'ClassificationEN' in params ? params.ClassificationEN : null;
        this.SpecRelated = 'SpecRelated' in params ? params.SpecRelated : null;
        this.Advanced = 'Advanced' in params ? params.Advanced : null;
        this.LastModifyTime = 'LastModifyTime' in params ? params.LastModifyTime : null;

    }
}

/**
 * 慢SQL 统计分析接口返回详情
 * @class
 */
class Detail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入时间范围内所有慢sql执行的总时间，单位毫秒（ms）
         * @type {number || null}
         */
        this.TotalTime = null;

        /**
         * 输入时间范围内所有慢sql总条数
         * @type {number || null}
         */
        this.TotalCallNum = null;

        /**
         * 慢SQL统计分析列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AnalysisItems> || null}
         */
        this.AnalysisItems = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalTime = 'TotalTime' in params ? params.TotalTime : null;
        this.TotalCallNum = 'TotalCallNum' in params ? params.TotalCallNum : null;

        if (params.AnalysisItems) {
            this.AnalysisItems = new Array();
            for (let z in params.AnalysisItems) {
                let obj = new AnalysisItems();
                obj.deserialize(params.AnalysisItems[z]);
                this.AnalysisItems.push(obj);
            }
        }

    }
}

/**
 * IsolateDBInstances返回参数结构体
 * @class
 */
class IsolateDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OpenDBExtranetAccess返回参数结构体
 * @class
 */
class OpenDBExtranetAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务流程ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceUpgradeDBInstance请求参数结构体
 * @class
 */
class InquiryPriceUpgradeDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例的磁盘大小，单位GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 实例的内存大小，单位GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例ID，形如postgres-hez4fh0v
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 实例计费类型，预付费或者后付费。PREPAID-预付费。目前只支持预付费。
         * @type {string || null}
         */
        this.InstanceChargeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

    }
}

/**
 * RebalanceReadOnlyGroup返回参数结构体
 * @class
 */
class RebalanceReadOnlyGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBInstanceName请求参数结构体
 * @class
 */
class ModifyDBInstanceNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库实例ID，形如postgres-6fego161
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 新的数据库实例名字
         * @type {string || null}
         */
        this.InstanceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

    }
}

/**
 * KMS密钥信息
 * @class
 */
class EncryptionKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * KMS实例加密的KeyId。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * KMS实例加密Key的别名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.KeyAlias = null;

        /**
         * 实例加密密钥DEK的密文。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DEKCipherTextBlob = null;

        /**
         * 密钥是否启用，1-启用， 0-未启用。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsEnabled = null;

        /**
         * KMS密钥所在地域。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.KeyRegion = null;

        /**
         * DEK密钥创建时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.KeyAlias = 'KeyAlias' in params ? params.KeyAlias : null;
        this.DEKCipherTextBlob = 'DEKCipherTextBlob' in params ? params.DEKCipherTextBlob : null;
        this.IsEnabled = 'IsEnabled' in params ? params.IsEnabled : null;
        this.KeyRegion = 'KeyRegion' in params ? params.KeyRegion : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * InquiryPriceRenewDBInstance返回参数结构体
 * @class
 */
class InquiryPriceRenewDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总费用，打折前的。比如24650表示246.5元
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * 实际需要付款金额。比如24650表示246.5元
         * @type {number || null}
         */
        this.Price = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSlowQueryAnalysis请求参数结构体
 * @class
 */
class DescribeSlowQueryAnalysisRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 查询起始时间戳，格式 “YYYY-MM-DD HH:mm:ss” ，日志保留时间默认为7天，起始时间不能超出保留时间范围。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间戳，格式 “YYYY-MM-DD HH:mm:ss”。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 根据数据库名进行筛选，可以为空。
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 排序维度。 可选参数，取值范围[CallNum,CostTime,AvgCostTime]。默认CallNum。
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 排序类型。升序asc、降序desc。默认desc。
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * 分页大小。取值范围[1,100]。默认50。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移。取值范围[0,INF)。默认0。
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * 错误日志详情
 * @class
 */
class ErrLogDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 数据库名字
         * @type {string || null}
         */
        this.Database = null;

        /**
         * 错误发生时间
         * @type {string || null}
         */
        this.ErrTime = null;

        /**
         * 错误消息
         * @type {string || null}
         */
        this.ErrMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Database = 'Database' in params ? params.Database : null;
        this.ErrTime = 'ErrTime' in params ? params.ErrTime : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

    }
}

/**
 * DescribeServerlessDBInstances返回参数结构体
 * @class
 */
class DescribeServerlessDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询结果数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 查询结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ServerlessDBInstance> || null}
         */
        this.DBInstanceSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.DBInstanceSet) {
            this.DBInstanceSet = new Array();
            for (let z in params.DBInstanceSet) {
                let obj = new ServerlessDBInstance();
                obj.deserialize(params.DBInstanceSet[z]);
                this.DBInstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IsolateDBInstances请求参数结构体
 * @class
 */
class IsolateDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID集合
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;

    }
}

/**
 * InitDBInstances请求参数结构体
 * @class
 */
class InitDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID集合。
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

        /**
         * 实例根账号用户名。
         * @type {string || null}
         */
        this.AdminName = null;

        /**
         * 实例根账号用户名对应的密码。
         * @type {string || null}
         */
        this.AdminPassword = null;

        /**
         * 实例字符集，目前只支持：UTF8、LATIN1。
         * @type {string || null}
         */
        this.Charset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
        this.AdminName = 'AdminName' in params ? params.AdminName : null;
        this.AdminPassword = 'AdminPassword' in params ? params.AdminPassword : null;
        this.Charset = 'Charset' in params ? params.Charset : null;

    }
}

/**
 * DeleteDBInstanceNetworkAccess请求参数结构体
 * @class
 */
class DeleteDBInstanceNetworkAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如：postgres-6bwgamo3。
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 私有网络统一 ID，若是基础网络则传"0"。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网ID，若是基础网络则传"0"。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 目标VIP地址。
         * @type {string || null}
         */
        this.Vip = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Vip = 'Vip' in params ? params.Vip : null;

    }
}

/**
 * 描述实例的详细信息
 * @class
 */
class DBInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例所属地域，如: ap-guangzhou，对应RegionSet的Region字段
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 实例所属可用区， 如：ap-guangzhou-3，对应ZoneSet的Zone字段
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 私有网络ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 实例ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.DBInstanceName = null;

        /**
         * 实例状态，分别为：applying（申请中）、init(待初始化)、initing(初始化中)、running(运行中)、limited run（受限运行）、isolated（已隔离）、recycling（回收中）、recycled（已回收）、job running（任务执行中）、offline（下线）、migrating（迁移中）、expanding（扩容中）、waitSwitch（等待切换）、switching（切换中）、readonly（只读）、restarting（重启中）、network changing（网络变更中）
         * @type {string || null}
         */
        this.DBInstanceStatus = null;

        /**
         * 实例分配的内存大小，单位：GB
         * @type {number || null}
         */
        this.DBInstanceMemory = null;

        /**
         * 实例分配的存储空间大小，单位：GB
         * @type {number || null}
         */
        this.DBInstanceStorage = null;

        /**
         * 实例分配的CPU数量，单位：个
         * @type {number || null}
         */
        this.DBInstanceCpu = null;

        /**
         * 售卖规格ID
         * @type {string || null}
         */
        this.DBInstanceClass = null;

        /**
         * 实例类型，类型有：1、primary（主实例）；2、readonly（只读实例）；3、guard（灾备实例）；4、temp（临时实例）
         * @type {string || null}
         */
        this.DBInstanceType = null;

        /**
         * 实例版本，目前只支持standard（双机高可用版, 一主一从）
         * @type {string || null}
         */
        this.DBInstanceVersion = null;

        /**
         * 实例DB字符集
         * @type {string || null}
         */
        this.DBCharset = null;

        /**
         * PostgreSQL版本
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * 实例创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 实例执行最后一次更新的时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 实例到期时间
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 实例隔离时间
         * @type {string || null}
         */
        this.IsolatedTime = null;

        /**
         * 计费模式，1、prepaid（包年包月,预付费）；2、postpaid（按量计费，后付费）
         * @type {string || null}
         */
        this.PayType = null;

        /**
         * 是否自动续费，1：自动续费，0：不自动续费
         * @type {number || null}
         */
        this.AutoRenew = null;

        /**
         * 实例网络连接信息
         * @type {Array.<DBInstanceNetInfo> || null}
         */
        this.DBInstanceNetInfo = null;

        /**
         * 机器类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 用户的AppId
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 实例的Uid
         * @type {number || null}
         */
        this.Uid = null;

        /**
         * 实例是否支持Ipv6，1：支持，0：不支持
         * @type {number || null}
         */
        this.SupportIpv6 = null;

        /**
         * 实例绑定的标签信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.TagList = null;

        /**
         * 主实例信息，仅在实例为只读实例时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MasterDBInstanceId = null;

        /**
         * 只读实例数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ReadOnlyInstanceNum = null;

        /**
         * 只读实例在只读组中的状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StatusInReadonlyGroup = null;

        /**
         * 下线时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OfflineTime = null;

        /**
         * 数据库内核版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DBKernelVersion = null;

        /**
         * 实例网络信息列表（此字段已废弃）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NetworkAccess> || null}
         */
        this.NetworkAccessList = null;

        /**
         * PostgreSQL主要版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DBMajorVersion = null;

        /**
         * 实例的节点信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DBNode> || null}
         */
        this.DBNodeSet = null;

        /**
         * 实例是否支持TDE数据加密  0：不支持，1：支持
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsSupportTDE = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.DBInstanceName = 'DBInstanceName' in params ? params.DBInstanceName : null;
        this.DBInstanceStatus = 'DBInstanceStatus' in params ? params.DBInstanceStatus : null;
        this.DBInstanceMemory = 'DBInstanceMemory' in params ? params.DBInstanceMemory : null;
        this.DBInstanceStorage = 'DBInstanceStorage' in params ? params.DBInstanceStorage : null;
        this.DBInstanceCpu = 'DBInstanceCpu' in params ? params.DBInstanceCpu : null;
        this.DBInstanceClass = 'DBInstanceClass' in params ? params.DBInstanceClass : null;
        this.DBInstanceType = 'DBInstanceType' in params ? params.DBInstanceType : null;
        this.DBInstanceVersion = 'DBInstanceVersion' in params ? params.DBInstanceVersion : null;
        this.DBCharset = 'DBCharset' in params ? params.DBCharset : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.IsolatedTime = 'IsolatedTime' in params ? params.IsolatedTime : null;
        this.PayType = 'PayType' in params ? params.PayType : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;

        if (params.DBInstanceNetInfo) {
            this.DBInstanceNetInfo = new Array();
            for (let z in params.DBInstanceNetInfo) {
                let obj = new DBInstanceNetInfo();
                obj.deserialize(params.DBInstanceNetInfo[z]);
                this.DBInstanceNetInfo.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.SupportIpv6 = 'SupportIpv6' in params ? params.SupportIpv6 : null;

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new Tag();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }
        this.MasterDBInstanceId = 'MasterDBInstanceId' in params ? params.MasterDBInstanceId : null;
        this.ReadOnlyInstanceNum = 'ReadOnlyInstanceNum' in params ? params.ReadOnlyInstanceNum : null;
        this.StatusInReadonlyGroup = 'StatusInReadonlyGroup' in params ? params.StatusInReadonlyGroup : null;
        this.OfflineTime = 'OfflineTime' in params ? params.OfflineTime : null;
        this.DBKernelVersion = 'DBKernelVersion' in params ? params.DBKernelVersion : null;

        if (params.NetworkAccessList) {
            this.NetworkAccessList = new Array();
            for (let z in params.NetworkAccessList) {
                let obj = new NetworkAccess();
                obj.deserialize(params.NetworkAccessList[z]);
                this.NetworkAccessList.push(obj);
            }
        }
        this.DBMajorVersion = 'DBMajorVersion' in params ? params.DBMajorVersion : null;

        if (params.DBNodeSet) {
            this.DBNodeSet = new Array();
            for (let z in params.DBNodeSet) {
                let obj = new DBNode();
                obj.deserialize(params.DBNodeSet[z]);
                this.DBNodeSet.push(obj);
            }
        }
        this.IsSupportTDE = 'IsSupportTDE' in params ? params.IsSupportTDE : null;

    }
}

/**
 * DescribeProductConfig返回参数结构体
 * @class
 */
class DescribeProductConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 售卖规格列表。
         * @type {Array.<SpecInfo> || null}
         */
        this.SpecInfoList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SpecInfoList) {
            this.SpecInfoList = new Array();
            for (let z in params.SpecInfoList) {
                let obj = new SpecInfo();
                obj.deserialize(params.SpecInfoList[z]);
                this.SpecInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteReadOnlyGroup请求参数结构体
 * @class
 */
class DeleteReadOnlyGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待删除只读组ID
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;

    }
}

/**
 * DescribeDBBackups请求参数结构体
 * @class
 */
class DescribeDBBackupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如postgres-4wdeb0zv。
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 备份方式（1-全量）。目前只支持全量，取值为1。
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 查询开始时间，形如2018-06-10 17:06:38，起始时间不得小于7天以前
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间，形如2018-06-10 17:06:38
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 备份列表分页返回，每页返回数量，默认为 20，最小为1，最大值为 100。（当该参数不传或者传0时按默认值处理）
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 返回结果中的第几页，从第0页开始。默认为0。
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称等
* 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
* 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤键的名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 一个或者多个过滤值。
         * @type {Array.<string> || null}
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * DisIsolateDBInstances返回参数结构体
 * @class
 */
class DisIsolateDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBInstanceParameters返回参数结构体
 * @class
 */
class ModifyDBInstanceParametersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OpenDBExtranetAccess请求参数结构体
 * @class
 */
class OpenDBExtranetAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如postgres-hez4fh0v
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 是否开通Ipv6外网，1：是，0：否
         * @type {number || null}
         */
        this.IsIpv6 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.IsIpv6 = 'IsIpv6' in params ? params.IsIpv6 : null;

    }
}

/**
 * 慢查询详情
 * @class
 */
class SlowlogDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 花费总时间
         * @type {number || null}
         */
        this.TotalTime = null;

        /**
         * 调用总次数
         * @type {number || null}
         */
        this.TotalCalls = null;

        /**
         * 脱敏后的慢SQL列表
         * @type {Array.<NormalQueryItem> || null}
         */
        this.NormalQueries = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalTime = 'TotalTime' in params ? params.TotalTime : null;
        this.TotalCalls = 'TotalCalls' in params ? params.TotalCalls : null;

        if (params.NormalQueries) {
            this.NormalQueries = new Array();
            for (let z in params.NormalQueries) {
                let obj = new NormalQueryItem();
                obj.deserialize(params.NormalQueries[z]);
                this.NormalQueries.push(obj);
            }
        }

    }
}

/**
 * RemoveDBInstanceFromReadOnlyGroup请求参数结构体
 * @class
 */
class RemoveDBInstanceFromReadOnlyGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 只读组ID
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;

    }
}

/**
 * 描述实例节点信息，包括节点类型、节点所在可用区。
 * @class
 */
class DBNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点类型，值可以为：
Primary，代表主节点；
Standby，代表备节点。
         * @type {string || null}
         */
        this.Role = null;

        /**
         * 节点所在可用区，例如 ap-guangzhou-1。
         * @type {string || null}
         */
        this.Zone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Role = 'Role' in params ? params.Role : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * ModifyDBInstanceName返回参数结构体
 * @class
 */
class ModifyDBInstanceNameResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloseDBExtranetAccess返回参数结构体
 * @class
 */
class CloseDBExtranetAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务流程ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateReadOnlyDBInstance请求参数结构体
 * @class
 */
class CreateReadOnlyDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 售卖规格ID。该参数可以通过调用DescribeProductConfig的返回值中的SpecCode字段来获取。
         * @type {string || null}
         */
        this.SpecCode = null;

        /**
         * PostgreSQL内核版本，目前强制和主实例保持一致
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * 实例容量大小，单位：GB。
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 一次性购买的实例数量。取值1-100
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * 购买时长，单位：月。目前只支持1,2,3,4,5,6,7,8,9,10,11,12,24,36这些值，按量计费模式下该参数传1。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 只读实例的主实例ID
         * @type {string || null}
         */
        this.MasterDBInstanceId = null;

        /**
         * 可用区ID。该参数可以通过调用 DescribeZones 接口的返回值中的Zone字段来获取。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 项目ID。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 实例计费类型。目前支持：PREPAID（预付费，即包年包月），POSTPAID_BY_HOUR（后付费，即按量计费）。
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 是否自动使用代金券。1（是），0（否），默认不使用。
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * 代金券ID列表，目前仅支持指定一张代金券。
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * 续费标记：0-正常续费（默认）；1-自动续费；
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 私有网络ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 私有网络子网ID。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 优惠活动ID
         * @type {number || null}
         */
        this.ActivityId = null;

        /**
         * 实例名(后续支持)
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 是否需要支持Ipv6，1：是，0：否
         * @type {number || null}
         */
        this.NeedSupportIpv6 = null;

        /**
         * 只读组ID。
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

        /**
         * 实例需要绑定的Tag信息，默认为空（该类型为Tag数组类型）
         * @type {Tag || null}
         */
        this.TagList = null;

        /**
         * 安全组id
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SpecCode = 'SpecCode' in params ? params.SpecCode : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.MasterDBInstanceId = 'MasterDBInstanceId' in params ? params.MasterDBInstanceId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ActivityId = 'ActivityId' in params ? params.ActivityId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.NeedSupportIpv6 = 'NeedSupportIpv6' in params ? params.NeedSupportIpv6 : null;
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;

        if (params.TagList) {
            let obj = new Tag();
            obj.deserialize(params.TagList)
            this.TagList = obj;
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

    }
}

/**
 * DescribeCloneDBInstanceSpec返回参数结构体
 * @class
 */
class DescribeCloneDBInstanceSpecResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可购买的最小规格码。
         * @type {string || null}
         */
        this.MinSpecCode = null;

        /**
         * 可购买的最小磁盘容量，单位GB。
         * @type {number || null}
         */
        this.MinStorage = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MinSpecCode = 'MinSpecCode' in params ? params.MinSpecCode : null;
        this.MinStorage = 'MinStorage' in params ? params.MinStorage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeZones返回参数结构体
 * @class
 */
class DescribeZonesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的结果数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 可用区信息集合。
         * @type {Array.<ZoneInfo> || null}
         */
        this.ZoneSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ZoneSet) {
            this.ZoneSet = new Array();
            for (let z in params.ZoneSet) {
                let obj = new ZoneInfo();
                obj.deserialize(params.ZoneSet[z]);
                this.ZoneSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateServerlessDBInstance返回参数结构体
 * @class
 */
class CreateServerlessDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，该ID全局唯一，如：postgres-xxxxx
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDatabases返回参数结构体
 * @class
 */
class DescribeDatabasesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库信息
         * @type {Array.<string> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Items = 'Items' in params ? params.Items : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOrders请求参数结构体
 * @class
 */
class DescribeOrdersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单名集合
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealNames = 'DealNames' in params ? params.DealNames : null;

    }
}

/**
 * ModifyAccountRemark请求参数结构体
 * @class
 */
class ModifyAccountRemarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如postgres-4wdeb0zv
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 实例用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户UserName对应的新备注
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * CloseDBExtranetAccess请求参数结构体
 * @class
 */
class CloseDBExtranetAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如postgres-6r233v55
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 是否关闭Ipv6外网，1：是，0：否
         * @type {number || null}
         */
        this.IsIpv6 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.IsIpv6 = 'IsIpv6' in params ? params.IsIpv6 : null;

    }
}

/**
 * DescribeEncryptionKeys请求参数结构体
 * @class
 */
class DescribeEncryptionKeysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.DBInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

    }
}

/**
 * ModifyBackupPlan返回参数结构体
 * @class
 */
class ModifyBackupPlanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateServerlessDBInstance请求参数结构体
 * @class
 */
class CreateServerlessDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区ID。公测阶段仅支持ap-shanghai-2、ap-beijing-1,ap-guangzhou-2.
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * DB实例名称，同一个账号下该值必须唯一。
         * @type {string || null}
         */
        this.DBInstanceName = null;

        /**
         * PostgreSQL内核版本，目前只支持：10.4。
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * PostgreSQL数据库字符集，目前支持UTF8。
         * @type {string || null}
         */
        this.DBCharset = null;

        /**
         * 项目ID。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 私有网络ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 私有网络子网ID。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 实例需要绑定的标签数组信息
         * @type {Array.<Tag> || null}
         */
        this.TagList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.DBInstanceName = 'DBInstanceName' in params ? params.DBInstanceName : null;
        this.DBVersion = 'DBVersion' in params ? params.DBVersion : null;
        this.DBCharset = 'DBCharset' in params ? params.DBCharset : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new Tag();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }

    }
}

/**
 * InquiryPriceRenewDBInstance请求参数结构体
 * @class
 */
class InquiryPriceRenewDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 续费周期，按月计算，最大不超过48
         * @type {number || null}
         */
        this.Period = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.Period = 'Period' in params ? params.Period : null;

    }
}

/**
 * CreateReadOnlyGroup返回参数结构体
 * @class
 */
class CreateReadOnlyGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 只读组ID
         * @type {string || null}
         */
        this.ReadOnlyGroupId = null;

        /**
         * 流程ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReadOnlyGroupId = 'ReadOnlyGroupId' in params ? params.ReadOnlyGroupId : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDBInstanceNetworkAccess返回参数结构体
 * @class
 */
class DeleteDBInstanceNetworkAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteServerlessDBInstance请求参数结构体
 * @class
 */
class DeleteServerlessDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * DB实例名称，实例名和实例ID必须至少传一个，如果同时存在，将只以实例ID为准。
         * @type {string || null}
         */
        this.DBInstanceName = null;

        /**
         * DB实例ID，实例名和实例ID必须至少传一个，如果同时存在，将只以实例ID为准。
         * @type {string || null}
         */
        this.DBInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceName = 'DBInstanceName' in params ? params.DBInstanceName : null;
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

    }
}

/**
 * ModifyReadOnlyGroupConfig返回参数结构体
 * @class
 */
class ModifyReadOnlyGroupConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 账户信息
 * @class
 */
class AccountInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如postgres-lnp6j617
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 帐号
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 帐号备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 帐号状态。 1-创建中，2-正常，3-修改中，4-密码重置中，-1-删除中
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 帐号创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 帐号最后一次更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 数据库备份信息
 * @class
 */
class DBBackup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 备份文件唯一标识
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 文件生成的开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 文件生成的结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 文件大小(K)
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 策略（0-实例备份；1-多库备份）
         * @type {number || null}
         */
        this.Strategy = null;

        /**
         * 类型（0-定时）
         * @type {number || null}
         */
        this.Way = null;

        /**
         * 备份方式（1-完整）
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 状态（1-创建中；2-成功；3-失败）
         * @type {number || null}
         */
        this.Status = null;

        /**
         * DB列表
         * @type {Array.<string> || null}
         */
        this.DbList = null;

        /**
         * 内网下载地址
         * @type {string || null}
         */
        this.InternalAddr = null;

        /**
         * 外网下载地址
         * @type {string || null}
         */
        this.ExternalAddr = null;

        /**
         * 备份集ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.Way = 'Way' in params ? params.Way : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.DbList = 'DbList' in params ? params.DbList : null;
        this.InternalAddr = 'InternalAddr' in params ? params.InternalAddr : null;
        this.ExternalAddr = 'ExternalAddr' in params ? params.ExternalAddr : null;
        this.SetId = 'SetId' in params ? params.SetId : null;

    }
}

/**
 * DescribeDBErrlogs返回参数结构体
 * @class
 */
class DescribeDBErrlogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本次调用返回了多少条数据
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 错误日志列表
         * @type {Array.<ErrLogDetail> || null}
         */
        this.Details = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new ErrLogDetail();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyBackupPlan请求参数结构体
 * @class
 */
class ModifyBackupPlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 实例最早开始备份时间
         * @type {string || null}
         */
        this.MinBackupStartTime = null;

        /**
         * 实例最晚开始备份时间
         * @type {string || null}
         */
        this.MaxBackupStartTime = null;

        /**
         * 实例备份保留时长，取值范围为3-7，单位是天
         * @type {number || null}
         */
        this.BaseBackupRetentionPeriod = null;

        /**
         * 实例备份周期，按照星期维度，格式为小写星期英文单词
         * @type {Array.<string> || null}
         */
        this.BackupPeriod = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.MinBackupStartTime = 'MinBackupStartTime' in params ? params.MinBackupStartTime : null;
        this.MaxBackupStartTime = 'MaxBackupStartTime' in params ? params.MaxBackupStartTime : null;
        this.BaseBackupRetentionPeriod = 'BaseBackupRetentionPeriod' in params ? params.BaseBackupRetentionPeriod : null;
        this.BackupPeriod = 'BackupPeriod' in params ? params.BackupPeriod : null;

    }
}

/**
 * 批量修改参数
 * @class
 */
class ParamEntry extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 修改参数值。入参均以字符串形式传递，例如：小数”0.1“、整数”1000“、枚举”replica“
         * @type {string || null}
         */
        this.ExpectedValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ExpectedValue = 'ExpectedValue' in params ? params.ExpectedValue : null;

    }
}

/**
 * InquiryPriceUpgradeDBInstance返回参数结构体
 * @class
 */
class InquiryPriceUpgradeDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总费用，打折前的
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * 实际需要付款金额
         * @type {number || null}
         */
        this.Price = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySwitchTimePeriod请求参数结构体
 * @class
 */
class ModifySwitchTimePeriodRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 处于等待切换状态中的实例ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 入参取值为 0 ，代表立即切换。
         * @type {number || null}
         */
        this.SwitchTag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.SwitchTag = 'SwitchTag' in params ? params.SwitchTag : null;

    }
}

/**
 * DescribeSlowQueryList请求参数结构体
 * @class
 */
class DescribeSlowQueryListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 查询起始时间戳，格式 “YYYY-MM-DD HH:mm:ss” ，日志保留时间默认为7天，起始时间不能超出保留时间范围。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间戳，格式 “YYYY-MM-DD HH:mm:ss”。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 根据数据库名进行筛选，可以为空。
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 排序类型。升序asc、降序desc。默认为desc。
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * 排序维度。 可选参数，取值范围[SessionStartTime,Duration]，默认为SessionStartTime。
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 分页大小。取值范围[1,100],默认为20。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移。取值范围[0,INF)，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeDBInstanceParameters返回参数结构体
 * @class
 */
class DescribeDBInstanceParametersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数列表总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 参数列表返回详情
         * @type {Array.<ParamInfo> || null}
         */
        this.Detail = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Detail) {
            this.Detail = new Array();
            for (let z in params.Detail) {
                let obj = new ParamInfo();
                obj.deserialize(params.Detail[z]);
                this.Detail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 描述地域的编码和状态等信息
 * @class
 */
class RegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该地域对应的英文名称
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 该地域对应的中文名称
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 该地域对应的数字编号
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 可用状态，UNAVAILABLE表示不可用，AVAILABLE表示可用
         * @type {string || null}
         */
        this.RegionState = null;

        /**
         * 该地域是否支持国际站售卖，0：不支持，1：支持
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SupportInternational = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionState = 'RegionState' in params ? params.RegionState : null;
        this.SupportInternational = 'SupportInternational' in params ? params.SupportInternational : null;

    }
}

/**
 * RestartDBInstance返回参数结构体
 * @class
 */
class RestartDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步流程ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBInstances返回参数结构体
 * @class
 */
class DescribeDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询到的实例数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例详细信息集合。
         * @type {Array.<DBInstance> || null}
         */
        this.DBInstanceSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.DBInstanceSet) {
            this.DBInstanceSet = new Array();
            for (let z in params.DBInstanceSet) {
                let obj = new DBInstance();
                obj.deserialize(params.DBInstanceSet[z]);
                this.DBInstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RemoveDBInstanceFromReadOnlyGroup返回参数结构体
 * @class
 */
class RemoveDBInstanceFromReadOnlyGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBackupPlans请求参数结构体
 * @class
 */
class DescribeBackupPlansRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

    }
}

/**
 * ResetAccountPassword请求参数结构体
 * @class
 */
class ResetAccountPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如postgres-4wdeb0zv
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 实例账户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * UserName账户对应的新密码
         * @type {string || null}
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * DescribeSlowQueryAnalysis返回参数结构体
 * @class
 */
class DescribeSlowQueryAnalysisResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询总条数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 慢SQL统计分析接口返回详情。
         * @type {Detail || null}
         */
        this.Detail = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Detail) {
            let obj = new Detail();
            obj.deserialize(params.Detail)
            this.Detail = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBInstanceParameters请求参数结构体
 * @class
 */
class ModifyDBInstanceParametersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 待修改参数及期望值
         * @type {Array.<ParamEntry> || null}
         */
        this.ParamList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;

        if (params.ParamList) {
            this.ParamList = new Array();
            for (let z in params.ParamList) {
                let obj = new ParamEntry();
                obj.deserialize(params.ParamList[z]);
                this.ParamList.push(obj);
            }
        }

    }
}

/**
 * 慢SQL查询接口返回 慢SQL列表详情
 * @class
 */
class RawSlowQuery extends  AbstractModel {
    constructor(){
        super();

        /**
         * 慢SQL 语句
         * @type {string || null}
         */
        this.RawQuery = null;

        /**
         * 慢SQL 查询的数据库
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 慢SQL执行 耗时
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * 执行慢SQL的客户端
         * @type {string || null}
         */
        this.ClientAddr = null;

        /**
         * 执行慢SQL的用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 慢SQL执行的开始时间
         * @type {string || null}
         */
        this.SessionStartTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RawQuery = 'RawQuery' in params ? params.RawQuery : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.ClientAddr = 'ClientAddr' in params ? params.ClientAddr : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.SessionStartTime = 'SessionStartTime' in params ? params.SessionStartTime : null;

    }
}

/**
 * DescribeReadOnlyGroups请求参数结构体
 * @class
 */
class DescribeReadOnlyGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件，必须传入主实例ID进行过滤，否则返回值将为空，过滤参数为：db-master-instance-id
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 查询每一页的条数，默认为10
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 查询的页码，默认为1
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 查询排序依据，目前支持:ROGroupId,CreateTime,Name
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 查询排序依据类型，目前支持:desc,asc
         * @type {string || null}
         */
        this.OrderByType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;

    }
}

/**
 * DescribeAccounts返回参数结构体
 * @class
 */
class DescribeAccountsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本次调用接口共返回了多少条数据。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 帐号列表详细信息。
         * @type {Array.<AccountInfo> || null}
         */
        this.Details = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new AccountInfo();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpgradeDBInstance返回参数结构体
 * @class
 */
class UpgradeDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 交易名字。
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * 冻结流水号
         * @type {string || null}
         */
        this.BillId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBInstancesProject请求参数结构体
 * @class
 */
class ModifyDBInstancesProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * postgresql实例ID数组
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

        /**
         * postgresql实例所属新项目的ID
         * @type {string || null}
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DescribeDBSlowlogs请求参数结构体
 * @class
 */
class DescribeDBSlowlogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如postgres-lnp6j617
         * @type {string || null}
         */
        this.DBInstanceId = null;

        /**
         * 查询起始时间，形如2018-06-10 17:06:38，起始时间不得小于7天以前
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间，形如2018-06-10 17:06:38
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 数据库名字
         * @type {string || null}
         */
        this.DatabaseName = null;

        /**
         * 按照何种指标排序，取值为sum_calls或者sum_cost_time。sum_calls-总调用次数；sum_cost_time-总的花费时间
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 排序规则。desc-降序；asc-升序
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * 分页返回结果，每页最大返回数量，取值为1-100，默认20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页返回结果，返回结果的第几页，从0开始计数
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DBInstanceId = 'DBInstanceId' in params ? params.DBInstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.DatabaseName = 'DatabaseName' in params ? params.DatabaseName : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DestroyDBInstance返回参数结构体
 * @class
 */
class DestroyDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBInstanceAttribute返回参数结构体
 * @class
 */
class DescribeDBInstanceAttributeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例详细信息。
         * @type {DBInstance || null}
         */
        this.DBInstance = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DBInstance) {
            let obj = new DBInstance();
            obj.deserialize(params.DBInstance)
            this.DBInstance = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBInstanceSpec返回参数结构体
 * @class
 */
class ModifyDBInstanceSpecResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单号。
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * 冻结流水号。
         * @type {string || null}
         */
        this.BillId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBXlogs返回参数结构体
 * @class
 */
class DescribeDBXlogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表示此次返回结果有多少条数据。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Xlog列表
         * @type {Array.<Xlog> || null}
         */
        this.XlogList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.XlogList) {
            this.XlogList = new Array();
            for (let z in params.XlogList) {
                let obj = new Xlog();
                obj.deserialize(params.XlogList[z]);
                this.XlogList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEncryptionKeys返回参数结构体
 * @class
 */
class DescribeEncryptionKeysResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例密钥信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<EncryptionKey> || null}
         */
        this.EncryptionKeys = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EncryptionKeys) {
            this.EncryptionKeys = new Array();
            for (let z in params.EncryptionKeys) {
                let obj = new EncryptionKey();
                obj.deserialize(params.EncryptionKeys[z]);
                this.EncryptionKeys.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBSlowlogs返回参数结构体
 * @class
 */
class DescribeDBSlowlogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本次返回多少条数据
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 慢查询日志详情
         * @type {SlowlogDetail || null}
         */
        this.Detail = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Detail) {
            let obj = new SlowlogDetail();
            obj.deserialize(params.Detail)
            this.Detail = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDBInstances返回参数结构体
 * @class
 */
class CreateDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单号列表。每个实例对应一个订单号。
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

        /**
         * 冻结流水号
         * @type {string || null}
         */
        this.BillId = null;

        /**
         * 创建成功的实例ID集合，只在后付费情景下有返回值
         * @type {Array.<string> || null}
         */
        this.DBInstanceIdSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.DBInstanceIdSet = 'DBInstanceIdSet' in params ? params.DBInstanceIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    CreateDBInstancesRequest: CreateDBInstancesRequest,
    SetAutoRenewFlagRequest: SetAutoRenewFlagRequest,
    DescribeDatabasesRequest: DescribeDatabasesRequest,
    DescribeDBXlogsRequest: DescribeDBXlogsRequest,
    CreateReadOnlyGroupNetworkAccessRequest: CreateReadOnlyGroupNetworkAccessRequest,
    DescribeAccountsRequest: DescribeAccountsRequest,
    DeleteReadOnlyGroupResponse: DeleteReadOnlyGroupResponse,
    CreateInstancesRequest: CreateInstancesRequest,
    SpecItemInfo: SpecItemInfo,
    CreateDBInstanceNetworkAccessResponse: CreateDBInstanceNetworkAccessResponse,
    DescribeAvailableRecoveryTimeResponse: DescribeAvailableRecoveryTimeResponse,
    ModifyDBInstanceReadOnlyGroupResponse: ModifyDBInstanceReadOnlyGroupResponse,
    CloneDBInstanceRequest: CloneDBInstanceRequest,
    DescribeCloneDBInstanceSpecRequest: DescribeCloneDBInstanceSpecRequest,
    BackupPlan: BackupPlan,
    OpenServerlessDBExtranetAccessRequest: OpenServerlessDBExtranetAccessRequest,
    RenewInstanceResponse: RenewInstanceResponse,
    DeleteServerlessDBInstanceResponse: DeleteServerlessDBInstanceResponse,
    ModifyReadOnlyGroupConfigRequest: ModifyReadOnlyGroupConfigRequest,
    AddDBInstanceToReadOnlyGroupRequest: AddDBInstanceToReadOnlyGroupRequest,
    DescribeProductConfigRequest: DescribeProductConfigRequest,
    InitDBInstancesResponse: InitDBInstancesResponse,
    RenewInstanceRequest: RenewInstanceRequest,
    RebalanceReadOnlyGroupRequest: RebalanceReadOnlyGroupRequest,
    DescribeRegionsResponse: DescribeRegionsResponse,
    DBInstanceNetInfo: DBInstanceNetInfo,
    ModifyDBInstanceDeploymentRequest: ModifyDBInstanceDeploymentRequest,
    DeleteReadOnlyGroupNetworkAccessRequest: DeleteReadOnlyGroupNetworkAccessRequest,
    ZoneInfo: ZoneInfo,
    InquiryPriceCreateDBInstancesRequest: InquiryPriceCreateDBInstancesRequest,
    NormalQueryItem: NormalQueryItem,
    Tag: Tag,
    DescribeDBInstanceAttributeRequest: DescribeDBInstanceAttributeRequest,
    CloseServerlessDBExtranetAccessRequest: CloseServerlessDBExtranetAccessRequest,
    CloneDBInstanceResponse: CloneDBInstanceResponse,
    ModifyDBInstanceReadOnlyGroupRequest: ModifyDBInstanceReadOnlyGroupRequest,
    AddDBInstanceToReadOnlyGroupResponse: AddDBInstanceToReadOnlyGroupResponse,
    CreateReadOnlyDBInstanceResponse: CreateReadOnlyDBInstanceResponse,
    DescribeAvailableRecoveryTimeRequest: DescribeAvailableRecoveryTimeRequest,
    DurationAnalysis: DurationAnalysis,
    DescribeDBInstanceParametersRequest: DescribeDBInstanceParametersRequest,
    DescribeOrdersResponse: DescribeOrdersResponse,
    OpenServerlessDBExtranetAccessResponse: OpenServerlessDBExtranetAccessResponse,
    InquiryPriceCreateDBInstancesResponse: InquiryPriceCreateDBInstancesResponse,
    CreateDBInstanceNetworkAccessRequest: CreateDBInstanceNetworkAccessRequest,
    ModifySwitchTimePeriodResponse: ModifySwitchTimePeriodResponse,
    DisIsolateDBInstancesRequest: DisIsolateDBInstancesRequest,
    ServerlessDBInstanceNetInfo: ServerlessDBInstanceNetInfo,
    DescribeBackupPlansResponse: DescribeBackupPlansResponse,
    DescribeDBInstancesRequest: DescribeDBInstancesRequest,
    ModifyDBInstanceSpecRequest: ModifyDBInstanceSpecRequest,
    ModifyAccountRemarkResponse: ModifyAccountRemarkResponse,
    UpgradeDBInstanceRequest: UpgradeDBInstanceRequest,
    DescribeZonesRequest: DescribeZonesRequest,
    SpecInfo: SpecInfo,
    DescribeReadOnlyGroupsResponse: DescribeReadOnlyGroupsResponse,
    SetAutoRenewFlagResponse: SetAutoRenewFlagResponse,
    NetworkAccess: NetworkAccess,
    ResetAccountPasswordResponse: ResetAccountPasswordResponse,
    ModifyDBInstancesProjectResponse: ModifyDBInstancesProjectResponse,
    ReadOnlyGroup: ReadOnlyGroup,
    PgDeal: PgDeal,
    DeleteReadOnlyGroupNetworkAccessResponse: DeleteReadOnlyGroupNetworkAccessResponse,
    DescribeDBErrlogsRequest: DescribeDBErrlogsRequest,
    DestroyDBInstanceRequest: DestroyDBInstanceRequest,
    ServerlessDBAccount: ServerlessDBAccount,
    ModifyDBInstanceDeploymentResponse: ModifyDBInstanceDeploymentResponse,
    DescribeParamsEventRequest: DescribeParamsEventRequest,
    EventInfo: EventInfo,
    CreateInstancesResponse: CreateInstancesResponse,
    AnalysisItems: AnalysisItems,
    Xlog: Xlog,
    DescribeServerlessDBInstancesRequest: DescribeServerlessDBInstancesRequest,
    DescribeDBBackupsResponse: DescribeDBBackupsResponse,
    DescribeRegionsRequest: DescribeRegionsRequest,
    DescribeSlowQueryListResponse: DescribeSlowQueryListResponse,
    ServerlessDBInstance: ServerlessDBInstance,
    CreateReadOnlyGroupRequest: CreateReadOnlyGroupRequest,
    CreateReadOnlyGroupNetworkAccessResponse: CreateReadOnlyGroupNetworkAccessResponse,
    DescribeParamsEventResponse: DescribeParamsEventResponse,
    CloseServerlessDBExtranetAccessResponse: CloseServerlessDBExtranetAccessResponse,
    EventItem: EventItem,
    RestartDBInstanceRequest: RestartDBInstanceRequest,
    ParamInfo: ParamInfo,
    Detail: Detail,
    IsolateDBInstancesResponse: IsolateDBInstancesResponse,
    OpenDBExtranetAccessResponse: OpenDBExtranetAccessResponse,
    InquiryPriceUpgradeDBInstanceRequest: InquiryPriceUpgradeDBInstanceRequest,
    RebalanceReadOnlyGroupResponse: RebalanceReadOnlyGroupResponse,
    ModifyDBInstanceNameRequest: ModifyDBInstanceNameRequest,
    EncryptionKey: EncryptionKey,
    InquiryPriceRenewDBInstanceResponse: InquiryPriceRenewDBInstanceResponse,
    DescribeSlowQueryAnalysisRequest: DescribeSlowQueryAnalysisRequest,
    ErrLogDetail: ErrLogDetail,
    DescribeServerlessDBInstancesResponse: DescribeServerlessDBInstancesResponse,
    IsolateDBInstancesRequest: IsolateDBInstancesRequest,
    InitDBInstancesRequest: InitDBInstancesRequest,
    DeleteDBInstanceNetworkAccessRequest: DeleteDBInstanceNetworkAccessRequest,
    DBInstance: DBInstance,
    DescribeProductConfigResponse: DescribeProductConfigResponse,
    DeleteReadOnlyGroupRequest: DeleteReadOnlyGroupRequest,
    DescribeDBBackupsRequest: DescribeDBBackupsRequest,
    Filter: Filter,
    DisIsolateDBInstancesResponse: DisIsolateDBInstancesResponse,
    ModifyDBInstanceParametersResponse: ModifyDBInstanceParametersResponse,
    OpenDBExtranetAccessRequest: OpenDBExtranetAccessRequest,
    SlowlogDetail: SlowlogDetail,
    RemoveDBInstanceFromReadOnlyGroupRequest: RemoveDBInstanceFromReadOnlyGroupRequest,
    DBNode: DBNode,
    ModifyDBInstanceNameResponse: ModifyDBInstanceNameResponse,
    CloseDBExtranetAccessResponse: CloseDBExtranetAccessResponse,
    CreateReadOnlyDBInstanceRequest: CreateReadOnlyDBInstanceRequest,
    DescribeCloneDBInstanceSpecResponse: DescribeCloneDBInstanceSpecResponse,
    DescribeZonesResponse: DescribeZonesResponse,
    CreateServerlessDBInstanceResponse: CreateServerlessDBInstanceResponse,
    DescribeDatabasesResponse: DescribeDatabasesResponse,
    DescribeOrdersRequest: DescribeOrdersRequest,
    ModifyAccountRemarkRequest: ModifyAccountRemarkRequest,
    CloseDBExtranetAccessRequest: CloseDBExtranetAccessRequest,
    DescribeEncryptionKeysRequest: DescribeEncryptionKeysRequest,
    ModifyBackupPlanResponse: ModifyBackupPlanResponse,
    CreateServerlessDBInstanceRequest: CreateServerlessDBInstanceRequest,
    InquiryPriceRenewDBInstanceRequest: InquiryPriceRenewDBInstanceRequest,
    CreateReadOnlyGroupResponse: CreateReadOnlyGroupResponse,
    DeleteDBInstanceNetworkAccessResponse: DeleteDBInstanceNetworkAccessResponse,
    DeleteServerlessDBInstanceRequest: DeleteServerlessDBInstanceRequest,
    ModifyReadOnlyGroupConfigResponse: ModifyReadOnlyGroupConfigResponse,
    AccountInfo: AccountInfo,
    DBBackup: DBBackup,
    DescribeDBErrlogsResponse: DescribeDBErrlogsResponse,
    ModifyBackupPlanRequest: ModifyBackupPlanRequest,
    ParamEntry: ParamEntry,
    InquiryPriceUpgradeDBInstanceResponse: InquiryPriceUpgradeDBInstanceResponse,
    ModifySwitchTimePeriodRequest: ModifySwitchTimePeriodRequest,
    DescribeSlowQueryListRequest: DescribeSlowQueryListRequest,
    DescribeDBInstanceParametersResponse: DescribeDBInstanceParametersResponse,
    RegionInfo: RegionInfo,
    RestartDBInstanceResponse: RestartDBInstanceResponse,
    DescribeDBInstancesResponse: DescribeDBInstancesResponse,
    RemoveDBInstanceFromReadOnlyGroupResponse: RemoveDBInstanceFromReadOnlyGroupResponse,
    DescribeBackupPlansRequest: DescribeBackupPlansRequest,
    ResetAccountPasswordRequest: ResetAccountPasswordRequest,
    DescribeSlowQueryAnalysisResponse: DescribeSlowQueryAnalysisResponse,
    ModifyDBInstanceParametersRequest: ModifyDBInstanceParametersRequest,
    RawSlowQuery: RawSlowQuery,
    DescribeReadOnlyGroupsRequest: DescribeReadOnlyGroupsRequest,
    DescribeAccountsResponse: DescribeAccountsResponse,
    UpgradeDBInstanceResponse: UpgradeDBInstanceResponse,
    ModifyDBInstancesProjectRequest: ModifyDBInstancesProjectRequest,
    DescribeDBSlowlogsRequest: DescribeDBSlowlogsRequest,
    DestroyDBInstanceResponse: DestroyDBInstanceResponse,
    DescribeDBInstanceAttributeResponse: DescribeDBInstanceAttributeResponse,
    ModifyDBInstanceSpecResponse: ModifyDBInstanceSpecResponse,
    DescribeDBXlogsResponse: DescribeDBXlogsResponse,
    DescribeEncryptionKeysResponse: DescribeEncryptionKeysResponse,
    DescribeDBSlowlogsResponse: DescribeDBSlowlogsResponse,
    CreateDBInstancesResponse: CreateDBInstancesResponse,

}
