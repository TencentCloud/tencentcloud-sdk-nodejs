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
 * DescribeBlueprints返回参数结构体
 * @class
 */
class DescribeBlueprintsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的镜像数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 镜像详细信息列表。
         * @type {Array.<Blueprint> || null}
         */
        this.BlueprintSet = null;

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

        if (params.BlueprintSet) {
            this.BlueprintSet = new Array();
            for (let z in params.BlueprintSet) {
                let obj = new Blueprint();
                obj.deserialize(params.BlueprintSet[z]);
                this.BlueprintSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstancesTrafficPackages请求参数结构体
 * @class
 */
class DescribeInstancesTrafficPackagesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 偏移量，默认为 0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为 20，最大值为 100。
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DeleteFirewallRules请求参数结构体
 * @class
 */
class DeleteFirewallRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 防火墙规则列表。
         * @type {Array.<FirewallRule> || null}
         */
        this.FirewallRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.FirewallRules) {
            this.FirewallRules = new Array();
            for (let z in params.FirewallRules) {
                let obj = new FirewallRule();
                obj.deserialize(params.FirewallRules[z]);
                this.FirewallRules.push(obj);
            }
        }

    }
}

/**
 * 描述了实例登录相关配置与信息。
 * @class
 */
class LoginSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * 密钥 ID 列表。关联密钥后，就可以通过对应的私钥来访问实例。注意：此字段可能返回 []，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;

    }
}

/**
 * 实例流量包详情
 * @class
 */
class InstanceTrafficPackage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 流量包详情列表。
         * @type {Array.<TrafficPackage> || null}
         */
        this.TrafficPackageSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.TrafficPackageSet) {
            this.TrafficPackageSet = new Array();
            for (let z in params.TrafficPackageSet) {
                let obj = new TrafficPackage();
                obj.deserialize(params.TrafficPackageSet[z]);
                this.TrafficPackageSet.push(obj);
            }
        }

    }
}

/**
 * StartInstances返回参数结构体
 * @class
 */
class StartInstancesResponse extends  AbstractModel {
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
 * 描述了实例信息。
 * @class
 */
class Instance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 套餐 ID。
         * @type {string || null}
         */
        this.BundleId = null;

        /**
         * 镜像 ID。
         * @type {string || null}
         */
        this.BlueprintId = null;

        /**
         * 实例的 CPU 核数，单位：核。
         * @type {number || null}
         */
        this.CPU = null;

        /**
         * 实例内存容量，单位：GB 。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例名称。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例计费模式。取值范围： 
PREPAID：表示预付费，即包年包月。
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 实例系统盘信息。
         * @type {SystemDisk || null}
         */
        this.SystemDisk = null;

        /**
         * 实例主网卡的内网 IP。 
注意：此字段可能返回 空，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.PrivateAddresses = null;

        /**
         * 实例主网卡的公网 IP。 
注意：此字段可能返回 空，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.PublicAddresses = null;

        /**
         * 实例带宽信息。
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * 自动续费标识。取值范围： 
NOTIFY_AND_MANUAL_RENEW：表示通知即将过期，但不自动续费  
NOTIFY_AND_AUTO_RENEW：表示通知即将过期，而且自动续费 。
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * 实例登录设置。
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * 实例状态。取值范围： 
<li>PENDING：表示创建中</li><li>LAUNCH_FAILED：表示创建失败</li><li>RUNNING：表示运行中</li><li>STOPPED：表示关机</li><li>STARTING：表示开机中</li><li>STOPPING：表示关机中</li><li>REBOOTING：表示重启中</li><li>SHUTDOWN：表示停止待销毁</li><li>TERMINATING：表示销毁中</li>
         * @type {string || null}
         */
        this.InstanceState = null;

        /**
         * 实例全局唯一 ID。
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 实例的最新操作。例：StopInstances、ResetInstance。注意：此字段可能返回 空值，表示取不到有效值。
         * @type {string || null}
         */
        this.LatestOperation = null;

        /**
         * 实例的最新操作状态。取值范围： 
SUCCESS：表示操作成功 
OPERATING：表示操作执行中 
FAILED：表示操作失败 
注意：此字段可能返回 空值，表示取不到有效值。
         * @type {string || null}
         */
        this.LatestOperationState = null;

        /**
         * 实例最新操作的唯一请求 ID。 
注意：此字段可能返回 空值，表示取不到有效值。
         * @type {string || null}
         */
        this.LatestOperationRequestId = null;

        /**
         * 隔离时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 
格式为： YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsolatedTime = null;

        /**
         * 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 
格式为： YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 到期时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 
格式为： YYYY-MM-DDThh:mm:ssZ 。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpiredTime = null;

        /**
         * 操作系统平台类型，如 LINUX_UNIX、WINDOWS。
         * @type {string || null}
         */
        this.PlatformType = null;

        /**
         * 操作系统平台。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 操作系统名称。
         * @type {string || null}
         */
        this.OsName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BundleId = 'BundleId' in params ? params.BundleId : null;
        this.BlueprintId = 'BlueprintId' in params ? params.BlueprintId : null;
        this.CPU = 'CPU' in params ? params.CPU : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

        if (params.SystemDisk) {
            let obj = new SystemDisk();
            obj.deserialize(params.SystemDisk)
            this.SystemDisk = obj;
        }
        this.PrivateAddresses = 'PrivateAddresses' in params ? params.PrivateAddresses : null;
        this.PublicAddresses = 'PublicAddresses' in params ? params.PublicAddresses : null;

        if (params.InternetAccessible) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }
        this.InstanceState = 'InstanceState' in params ? params.InstanceState : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.LatestOperation = 'LatestOperation' in params ? params.LatestOperation : null;
        this.LatestOperationState = 'LatestOperationState' in params ? params.LatestOperationState : null;
        this.LatestOperationRequestId = 'LatestOperationRequestId' in params ? params.LatestOperationRequestId : null;
        this.IsolatedTime = 'IsolatedTime' in params ? params.IsolatedTime : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.PlatformType = 'PlatformType' in params ? params.PlatformType : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.OsName = 'OsName' in params ? params.OsName : null;

    }
}

/**
 * DescribeInstancesTrafficPackages返回参数结构体
 * @class
 */
class DescribeInstancesTrafficPackagesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的实例流量包详情数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例流量包详情列表。
         * @type {Array.<InstanceTrafficPackage> || null}
         */
        this.InstanceTrafficPackageSet = null;

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

        if (params.InstanceTrafficPackageSet) {
            this.InstanceTrafficPackageSet = new Array();
            for (let z in params.InstanceTrafficPackageSet) {
                let obj = new InstanceTrafficPackage();
                obj.deserialize(params.InstanceTrafficPackageSet[z]);
                this.InstanceTrafficPackageSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 流量包详情
 * @class
 */
class TrafficPackage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流量包ID。
         * @type {string || null}
         */
        this.TrafficPackageId = null;

        /**
         * 流量包生效周期内的总流量，单位字节。
         * @type {number || null}
         */
        this.TrafficUsed = null;

        /**
         * 流量包生效周期内的总流量，单位字节。
         * @type {number || null}
         */
        this.TrafficPackageTotal = null;

        /**
         * 流量包生效周期内的剩余流量，单位字节。
         * @type {number || null}
         */
        this.TrafficPackageRemaining = null;

        /**
         * 流量包生效周期内超出流量包额度的流量，单位字节。
         * @type {number || null}
         */
        this.TrafficOverflow = null;

        /**
         * 流量包生效周期开始时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 
格式为： YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 流量包生效周期结束时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 
格式为： YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 流量包到期时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 
格式为： YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Deadline = null;

        /**
         * 流量包状态：
<li>NETWORK_NORMAL：正常</li>
<li>OVERDUE_NETWORK_DISABLED：欠费断网</li>
         * @type {string || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrafficPackageId = 'TrafficPackageId' in params ? params.TrafficPackageId : null;
        this.TrafficUsed = 'TrafficUsed' in params ? params.TrafficUsed : null;
        this.TrafficPackageTotal = 'TrafficPackageTotal' in params ? params.TrafficPackageTotal : null;
        this.TrafficPackageRemaining = 'TrafficPackageRemaining' in params ? params.TrafficPackageRemaining : null;
        this.TrafficOverflow = 'TrafficOverflow' in params ? params.TrafficOverflow : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Deadline = 'Deadline' in params ? params.Deadline : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * RebootInstances返回参数结构体
 * @class
 */
class RebootInstancesResponse extends  AbstractModel {
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
 * DescribeBundles请求参数结构体
 * @class
 */
class DescribeBundlesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 套餐 ID 列表。
         * @type {Array.<string> || null}
         */
        this.BundleIds = null;

        /**
         * 偏移量，默认为 0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为 20，最大值为 100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤器列表。
<li>bundle-id</li>按照【镜像 ID】进行过滤。
类型：String
必选：否
<li>support-platform-type</li>按照【系统类型】进行过滤。
取值： LINUX_UNIX（Linux/Unix系统）；WINDOWS（Windows 系统）
类型：String
必选：否
每次请求的 Filters 的上限为 10，Filter.Values 的上限为 5。参数不支持同时指定 BundleIds 和 Filters。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BundleIds = 'BundleIds' in params ? params.BundleIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * 描述了镜像信息。
 * @class
 */
class Blueprint extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像 ID  ，是 blueprint 的唯一标识。
         * @type {string || null}
         */
        this.BlueprintId = null;

        /**
         * 镜像对外展示标题。
         * @type {string || null}
         */
        this.DisplayTitle = null;

        /**
         * 镜像对外展示版本。
         * @type {string || null}
         */
        this.DisplayVersion = null;

        /**
         * 镜像描述信息。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 操作系统名称。
         * @type {string || null}
         */
        this.OsName = null;

        /**
         * 操作系统平台。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 操作系统平台类型，如 LINUX_UNIX、WINDOWS。
         * @type {string || null}
         */
        this.PlatformType = null;

        /**
         * 镜像类型，如 APP_OS、PURE_OS。
         * @type {string || null}
         */
        this.BlueprintType = null;

        /**
         * 镜像图片 URL。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 镜像所需系统盘大小
         * @type {number || null}
         */
        this.RequiredSystemDiskSize = null;

        /**
         * 镜像状态，取值：ONLINE、OFFLINE
         * @type {string || null}
         */
        this.BlueprintState = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BlueprintId = 'BlueprintId' in params ? params.BlueprintId : null;
        this.DisplayTitle = 'DisplayTitle' in params ? params.DisplayTitle : null;
        this.DisplayVersion = 'DisplayVersion' in params ? params.DisplayVersion : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.OsName = 'OsName' in params ? params.OsName : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.PlatformType = 'PlatformType' in params ? params.PlatformType : null;
        this.BlueprintType = 'BlueprintType' in params ? params.BlueprintType : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.RequiredSystemDiskSize = 'RequiredSystemDiskSize' in params ? params.RequiredSystemDiskSize : null;
        this.BlueprintState = 'BlueprintState' in params ? params.BlueprintState : null;

    }
}

/**
 * 价格信息
 * @class
 */
class Price extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例价格。
         * @type {InstancePrice || null}
         */
        this.InstancePrice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstancePrice) {
            let obj = new InstancePrice();
            obj.deserialize(params.InstancePrice)
            this.InstancePrice = obj;
        }

    }
}

/**
 * 套餐信息。
 * @class
 */
class Bundle extends  AbstractModel {
    constructor(){
        super();

        /**
         * 套餐 ID。
         * @type {string || null}
         */
        this.BundleId = null;

        /**
         * 内存大小，单位 GB。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 系统盘类型。
取值范围： 
<li> LOCAL_BASIC：本地硬盘</li><li> LOCAL_SSD：本地 SSD 硬盘</li><li> CLOUD_BASIC：普通云硬盘</li><li> CLOUD_SSD：SSD 云硬盘</li><li> CLOUD_PREMIUM：高性能云硬盘</li>
         * @type {string || null}
         */
        this.SystemDiskType = null;

        /**
         * 系统盘大小。
         * @type {number || null}
         */
        this.SystemDiskSize = null;

        /**
         * 每月网络流量，单位 Gb。
         * @type {number || null}
         */
        this.MonthlyTraffic = null;

        /**
         * 是否支持 Linux/Unix 平台。
         * @type {boolean || null}
         */
        this.SupportLinuxUnixPlatform = null;

        /**
         * 是否支持 Windows 平台。
         * @type {boolean || null}
         */
        this.SupportWindowsPlatform = null;

        /**
         * 套餐当前单位价格信息。
         * @type {Price || null}
         */
        this.Price = null;

        /**
         * CPU 核数。
         * @type {number || null}
         */
        this.CPU = null;

        /**
         * 峰值带宽，单位 Mbps。
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * 网络计费类型。
         * @type {string || null}
         */
        this.InternetChargeType = null;

        /**
         * 套餐售卖状态,取值:‘AVAILABLE’(可用) , ‘SOLD_OUT’(售罄)
         * @type {string || null}
         */
        this.BundleSalesState = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BundleId = 'BundleId' in params ? params.BundleId : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.SystemDiskType = 'SystemDiskType' in params ? params.SystemDiskType : null;
        this.SystemDiskSize = 'SystemDiskSize' in params ? params.SystemDiskSize : null;
        this.MonthlyTraffic = 'MonthlyTraffic' in params ? params.MonthlyTraffic : null;
        this.SupportLinuxUnixPlatform = 'SupportLinuxUnixPlatform' in params ? params.SupportLinuxUnixPlatform : null;
        this.SupportWindowsPlatform = 'SupportWindowsPlatform' in params ? params.SupportWindowsPlatform : null;

        if (params.Price) {
            let obj = new Price();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.CPU = 'CPU' in params ? params.CPU : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.InternetChargeType = 'InternetChargeType' in params ? params.InternetChargeType : null;
        this.BundleSalesState = 'BundleSalesState' in params ? params.BundleSalesState : null;

    }
}

/**
 * StartInstances请求参数结构体
 * @class
 */
class StartInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * DeleteFirewallRules返回参数结构体
 * @class
 */
class DeleteFirewallRulesResponse extends  AbstractModel {
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
 * RebootInstances请求参数结构体
 * @class
 */
class RebootInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * DescribeBlueprints请求参数结构体
 * @class
 */
class DescribeBlueprintsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像 ID 列表。
         * @type {Array.<string> || null}
         */
        this.BlueprintIds = null;

        /**
         * 偏移量，默认为 0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为 20，最大值为 100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤器列表。
<li>blueprint-id</li>按照【镜像 ID】进行过滤。
类型：String
必选：否
<li>blueprint-type</li>按照【镜像类型】进行过滤。
取值： APP_OS（预置应用的系统 ）；PURE_OS（纯净的 OS 系统）。
类型：String
必选：否
<li>platform-type</li>按照【镜像平台类型】进行过滤。
取值： LINUX_UNIX（Linux/Unix系统）；WINDOWS（Windows 系统）。
类型：String
必选：否
每次请求的 Filters 的上限为 10，Filter.Values 的上限为 5。参数不支持同时指定 BlueprintIds 和 Filters 。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BlueprintIds = 'BlueprintIds' in params ? params.BlueprintIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribeInstances返回参数结构体
 * @class
 */
class DescribeInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的实例数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例详细信息列表。
         * @type {Array.<Instance> || null}
         */
        this.InstanceSet = null;

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

        if (params.InstanceSet) {
            this.InstanceSet = new Array();
            for (let z in params.InstanceSet) {
                let obj = new Instance();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 关于Lighthouse Instance实例的价格信息
 * @class
 */
class InstancePrice extends  AbstractModel {
    constructor(){
        super();

        /**
         * 套餐单价原价。
         * @type {number || null}
         */
        this.OriginalBundlePrice = null;

        /**
         * 原价。
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * 折扣。
         * @type {number || null}
         */
        this.Discount = null;

        /**
         * 折后价。
         * @type {number || null}
         */
        this.DiscountPrice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginalBundlePrice = 'OriginalBundlePrice' in params ? params.OriginalBundlePrice : null;
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.DiscountPrice = 'DiscountPrice' in params ? params.DiscountPrice : null;

    }
}

/**
 * 描述了操作系统所在块设备即系统盘的信息。
 * @class
 */
class SystemDisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * 系统盘类型。
取值范围： 
<li> LOCAL_BASIC：本地硬盘</li><li> LOCAL_SSD：本地 SSD 硬盘</li><li> CLOUD_BASIC：普通云硬盘</li><li> CLOUD_SSD：SSD 云硬盘</li><li> CLOUD_PREMIUM：高性能云硬盘</li>
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 系统盘大小，单位：GB。
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 系统盘ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.DiskId = 'DiskId' in params ? params.DiskId : null;

    }
}

/**
 * ResetInstance请求参数结构体
 * @class
 */
class ResetInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 镜像 ID。可通过[DescribeBlueprints](https://cloud.tencent.com/document/product/1207/47689)接口返回值中的BlueprintId获取。
         * @type {string || null}
         */
        this.BlueprintId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BlueprintId = 'BlueprintId' in params ? params.BlueprintId : null;

    }
}

/**
 * DescribeBundles返回参数结构体
 * @class
 */
class DescribeBundlesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 套餐详细信息列表。
         * @type {Array.<Bundle> || null}
         */
        this.BundleSet = null;

        /**
         * 符合要求的套餐总数，用于分页展示。
         * @type {number || null}
         */
        this.TotalCount = null;

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

        if (params.BundleSet) {
            this.BundleSet = new Array();
            for (let z in params.BundleSet) {
                let obj = new Bundle();
                obj.deserialize(params.BundleSet[z]);
                this.BundleSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstances请求参数结构体
 * @class
 */
class DescribeInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID 列表。每次请求批量实例的上限为 100。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 过滤器列表。
<li>instance-name</li>按照【实例名称】进行过滤。
类型：String
必选：否
<li>private-ip-address</li>按照【实例主网卡的内网 IP】进行过滤。
类型：String
必选：否
<li>public-ip-address</li>按照【实例主网卡的公网 IP】进行过滤。
类型：String
必选：否
每次请求的 Filters 的上限为 10，Filter.Values 的上限为 5。参数不支持同时指定 InstanceIds 和 Filters。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为 0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为 20，最大值为 100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * >描述键值对过滤器，用于条件过滤查询。例如过滤名称等
> * 若存在多个`Filter`时，`Filter`间的关系为逻辑与（`AND`）关系。
> * 若同一个`Filter`存在多个`Values`，同一`Filter`下`Values`间的关系为逻辑或（`OR`）关系。
>
> 以DescribeInstances接口的`Filter`为例。若我们需要查询实例名称（`instance-name`）为test ***并且*** 实例内网IP（`private-ip-address`）为10.10.10.10的实例时，可如下实现：
```
Filters.0.Name=instance-name
&Filters.0.Values.0=test
&Filters.1.Name=private-ip-address
&Filters.1.Values.0=10.10.10.10
```
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要过滤的字段。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 字段的过滤值。
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
 * ResetInstance返回参数结构体
 * @class
 */
class ResetInstanceResponse extends  AbstractModel {
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
 * CreateFirewallRules请求参数结构体
 * @class
 */
class CreateFirewallRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 防火墙规则列表。
         * @type {Array.<FirewallRule> || null}
         */
        this.FirewallRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.FirewallRules) {
            this.FirewallRules = new Array();
            for (let z in params.FirewallRules) {
                let obj = new FirewallRule();
                obj.deserialize(params.FirewallRules[z]);
                this.FirewallRules.push(obj);
            }
        }

    }
}

/**
 * DescribeFirewallRules请求参数结构体
 * @class
 */
class DescribeFirewallRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 偏移量，默认为 0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为 20，最大值为 100。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeFirewallRules返回参数结构体
 * @class
 */
class DescribeFirewallRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的防火墙规则数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 防火墙规则详细信息列表。
         * @type {Array.<FirewallRuleInfo> || null}
         */
        this.FirewallRuleSet = null;

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

        if (params.FirewallRuleSet) {
            this.FirewallRuleSet = new Array();
            for (let z in params.FirewallRuleSet) {
                let obj = new FirewallRuleInfo();
                obj.deserialize(params.FirewallRuleSet[z]);
                this.FirewallRuleSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 描述防火墙规则信息。
 * @class
 */
class FirewallRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 协议，取值：TCP，UDP，ALL。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 端口，取值：ALL，单独的端口，逗号分隔的离散端口，减号分隔的端口范围。
         * @type {string || null}
         */
        this.Port = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * 描述防火墙规则详细信息。
 * @class
 */
class FirewallRuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用类型，取值：自定义，HTTP(80)，HTTPS(443)，Linux登录(22)，Windows登录(3389)，MySQL(3306)，SQL Server(1433)，全部TCP，全部UDP，ALL。
         * @type {string || null}
         */
        this.AppType = null;

        /**
         * 协议，取值：TCP，UDP，ALL。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 端口，取值：ALL，单独的端口，逗号分隔的离散端口，减号分隔的端口范围。
         * @type {string || null}
         */
        this.Port = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppType = 'AppType' in params ? params.AppType : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * CreateFirewallRules返回参数结构体
 * @class
 */
class CreateFirewallRulesResponse extends  AbstractModel {
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
 * StopInstances返回参数结构体
 * @class
 */
class StopInstancesResponse extends  AbstractModel {
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
 * 描述了启动配置创建实例的公网可访问性，声明了实例的公网使用计费模式，最大带宽等。
 * @class
 */
class InternetAccessible extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络计费类型。
         * @type {string || null}
         */
        this.InternetChargeType = null;

        /**
         * 公网出带宽上限，单位：Mbps。
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * 是否分配公网 IP。
         * @type {boolean || null}
         */
        this.PublicIpAssigned = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InternetChargeType = 'InternetChargeType' in params ? params.InternetChargeType : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.PublicIpAssigned = 'PublicIpAssigned' in params ? params.PublicIpAssigned : null;

    }
}

/**
 * StopInstances请求参数结构体
 * @class
 */
class StopInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

module.exports = {
    DescribeBlueprintsResponse: DescribeBlueprintsResponse,
    DescribeInstancesTrafficPackagesRequest: DescribeInstancesTrafficPackagesRequest,
    DeleteFirewallRulesRequest: DeleteFirewallRulesRequest,
    LoginSettings: LoginSettings,
    InstanceTrafficPackage: InstanceTrafficPackage,
    StartInstancesResponse: StartInstancesResponse,
    Instance: Instance,
    DescribeInstancesTrafficPackagesResponse: DescribeInstancesTrafficPackagesResponse,
    TrafficPackage: TrafficPackage,
    RebootInstancesResponse: RebootInstancesResponse,
    DescribeBundlesRequest: DescribeBundlesRequest,
    Blueprint: Blueprint,
    Price: Price,
    Bundle: Bundle,
    StartInstancesRequest: StartInstancesRequest,
    DeleteFirewallRulesResponse: DeleteFirewallRulesResponse,
    RebootInstancesRequest: RebootInstancesRequest,
    DescribeBlueprintsRequest: DescribeBlueprintsRequest,
    DescribeInstancesResponse: DescribeInstancesResponse,
    InstancePrice: InstancePrice,
    SystemDisk: SystemDisk,
    ResetInstanceRequest: ResetInstanceRequest,
    DescribeBundlesResponse: DescribeBundlesResponse,
    DescribeInstancesRequest: DescribeInstancesRequest,
    Filter: Filter,
    ResetInstanceResponse: ResetInstanceResponse,
    CreateFirewallRulesRequest: CreateFirewallRulesRequest,
    DescribeFirewallRulesRequest: DescribeFirewallRulesRequest,
    DescribeFirewallRulesResponse: DescribeFirewallRulesResponse,
    FirewallRule: FirewallRule,
    FirewallRuleInfo: FirewallRuleInfo,
    CreateFirewallRulesResponse: CreateFirewallRulesResponse,
    StopInstancesResponse: StopInstancesResponse,
    InternetAccessible: InternetAccessible,
    StopInstancesRequest: StopInstancesRequest,

}
