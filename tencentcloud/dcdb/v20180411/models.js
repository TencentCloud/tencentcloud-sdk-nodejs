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
 * DescribeDBLogFiles请求参数结构体
 * @class
 */
class DescribeDBLogFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：dcdbt-ow7t8lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 分片 ID，形如：shard-7noic7tv
         * @type {string || null}
         */
        this.ShardId = null;

        /**
         * 请求日志类型，取值只能为1、2、3或者4。1-binlog，2-冷备，3-errlog，4-slowlog。
         * @type {number || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = params.InstanceId || null;
        this.ShardId = params.ShardId || null;
        this.Type = params.Type || null;

    }
}

/**
 * 可用区信息
 * @class
 */
class ZonesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区英文ID
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 可用区数字ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 可用区中文名
         * @type {string || null}
         */
        this.ZoneName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = params.Zone || null;
        this.ZoneId = params.ZoneId || null;
        this.ZoneName = params.ZoneName || null;

    }
}

/**
 * DescribeDCDBInstances返回参数结构体
 * @class
 */
class DescribeDCDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的实例数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例详细信息列表
         * @type {Array.<DCDBInstanceInfo> || null}
         */
        this.Instances = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
        this.TotalCount = params.TotalCount || null;

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new DCDBInstanceInfo();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * UpgradeDCDBInstance返回参数结构体
 * @class
 */
class UpgradeDCDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 长订单号。可以据此调用 DescribeOrders
 查询订单详细信息，或在支付失败时调用用户账号相关接口进行支付。
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
        this.DealName = params.DealName || null;
        this.RequestId = params.RequestId || null;

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
         * 返回的订单数量。
         * @type {Array.<number> || null}
         */
        this.TotalCount = null;

        /**
         * 订单信息列表。
         * @type {Array.<Deal> || null}
         */
        this.Deals = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
        this.TotalCount = params.TotalCount || null;

        if (params.Deals) {
            this.Deals = new Array();
            for (let z in params.Deals) {
                let obj = new Deal();
                obj.deserialize(params.Deals[z]);
                this.Deals.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * CreateDCDBInstance请求参数结构体
 * @class
 */
class CreateDCDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分片节点可用区分布，最多可填两个可用区。当分片规格为一主两从时，其中两个节点在第一个可用区。
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * 欲购买实例的数量，目前只支持购买1个实例
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 欲购买的时长，单位：月。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 项目 ID，可以通过查看项目列表获取，不传则关联到默认项目
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 虚拟私有网络 ID，不传或传空表示创建为基础网络
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 虚拟私有网络子网 ID，VpcId不为空时必填
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 分片内存大小，单位：GB，可以通过 DescribeShardSpec
 查询实例规格获得。
         * @type {number || null}
         */
        this.ShardMemory = null;

        /**
         * 分片存储空间大小，单位：GB，可以通过 DescribeShardSpec
 查询实例规格获得。
         * @type {number || null}
         */
        this.ShardStorage = null;

        /**
         * 单个分片节点个数，可以通过 DescribeShardSpec
 查询实例规格获得。
         * @type {number || null}
         */
        this.ShardNodeCount = null;

        /**
         * 实例分片个数，可选范围2-8，可以通过升级实例进行新增分片到最多64个分片。
         * @type {number || null}
         */
        this.ShardCount = null;

        /**
         * 数据库引擎版本，当前可选：10.0.10，10.1.9，5.7.17
         * @type {string || null}
         */
        this.DbVersionId = null;

        /**
         * 是否自动使用代金券进行支付，默认不使用。
         * @type {boolean || null}
         */
        this.AutoVoucher = null;

        /**
         * 代金券ID列表，目前仅支持指定一张代金券。
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
        this.Zones = params.Zones || null;
        this.Count = params.Count || null;
        this.Period = params.Period || null;
        this.ProjectId = params.ProjectId || null;
        this.VpcId = params.VpcId || null;
        this.SubnetId = params.SubnetId || null;
        this.ShardMemory = params.ShardMemory || null;
        this.ShardStorage = params.ShardStorage || null;
        this.ShardNodeCount = params.ShardNodeCount || null;
        this.ShardCount = params.ShardCount || null;
        this.DbVersionId = params.DbVersionId || null;
        this.AutoVoucher = params.AutoVoucher || null;
        this.VoucherIds = params.VoucherIds || null;

    }
}

/**
 * DescribeDCDBUpgradePrice请求参数结构体
 * @class
 */
class DescribeDCDBUpgradePriceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待升级的实例ID。形如：dcdbt-ow728lmc，可以通过 DescribeDCDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 升级类型，取值范围: 
<li> ADD: 新增分片 </li> 
 <li> EXPAND: 升级实例中的已有分片 </li> 
 <li> SPLIT: 将已有分片中的数据切分到新增分片上</li>
         * @type {string || null}
         */
        this.UpgradeType = null;

        /**
         * 新增分片配置，当UpgradeType为ADD时生效。
         * @type {AddShardConfig || null}
         */
        this.AddShardConfig = null;

        /**
         * 扩容分片配置，当UpgradeType为EXPAND时生效。
         * @type {ExpandShardConfig || null}
         */
        this.ExpandShardConfig = null;

        /**
         * 切分分片配置，当UpgradeType为SPLIT时生效。
         * @type {SplitShardConfig || null}
         */
        this.SplitShardConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = params.InstanceId || null;
        this.UpgradeType = params.UpgradeType || null;

        if (params.AddShardConfig) {
            let obj = new AddShardConfig();
            obj.deserialize(params.AddShardConfig)
            this.AddShardConfig = obj;
        }

        if (params.ExpandShardConfig) {
            let obj = new ExpandShardConfig();
            obj.deserialize(params.ExpandShardConfig)
            this.ExpandShardConfig = obj;
        }

        if (params.SplitShardConfig) {
            let obj = new SplitShardConfig();
            obj.deserialize(params.SplitShardConfig)
            this.SplitShardConfig = obj;
        }

    }
}

/**
 * CreateDCDBInstance返回参数结构体
 * @class
 */
class CreateDCDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 长订单号。可以据此调用 DescribeOrders
 查询订单详细信息，或在支付失败时调用用户账号相关接口进行支付。
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * 订单对应的实例 ID 列表，如果此处没有返回实例 ID，可以通过订单查询接口获取。还可通过实例查询接口查询实例是否创建完成。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
        this.DealName = params.DealName || null;
        this.InstanceIds = params.InstanceIds || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 升级实例 -- 新增分片类型
 * @class
 */
class AddShardConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新增分片的数量
         * @type {number || null}
         */
        this.ShardCount = null;

        /**
         * 分片内存大小，单位 GB
         * @type {number || null}
         */
        this.ShardMemory = null;

        /**
         * 分片存储大小，单位 GB
         * @type {number || null}
         */
        this.ShardStorage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShardCount = params.ShardCount || null;
        this.ShardMemory = params.ShardMemory || null;
        this.ShardStorage = params.ShardStorage || null;

    }
}

/**
 * DescribeDCDBPrice返回参数结构体
 * @class
 */
class DescribeDCDBPriceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原价，单位：分
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * 实际价格，单位：分。受折扣等影响，可能和原价不同。
         * @type {number || null}
         */
        this.Price = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
        this.OriginalPrice = params.OriginalPrice || null;
        this.Price = params.Price || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeDCDBRenewalPrice请求参数结构体
 * @class
 */
class DescribeDCDBRenewalPriceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待续费的实例ID。形如：dcdbt-ow728lmc，可以通过 DescribeDCDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 续费时长，单位：月。不传则默认为1个月。
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
        this.InstanceId = params.InstanceId || null;
        this.Period = params.Period || null;

    }
}

/**
 * DescribeDCDBPrice请求参数结构体
 * @class
 */
class DescribeDCDBPriceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 欲新购实例的可用区ID。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 欲购买实例的数量，目前只支持购买1个实例
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 欲购买的时长，单位：月。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 单个分片节点个数大小，可以通过 DescribeShardSpec
 查询实例规格获得。
         * @type {number || null}
         */
        this.ShardNodeCount = null;

        /**
         * 分片内存大小，单位：GB，可以通过 DescribeShardSpec
 查询实例规格获得。
         * @type {number || null}
         */
        this.ShardMemory = null;

        /**
         * 分片存储空间大小，单位：GB，可以通过 DescribeShardSpec
 查询实例规格获得。
         * @type {number || null}
         */
        this.ShardStorage = null;

        /**
         * 实例分片个数，可选范围2-8，可以通过升级实例进行新增分片到最多64个分片。
         * @type {number || null}
         */
        this.ShardCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = params.Zone || null;
        this.Count = params.Count || null;
        this.Period = params.Period || null;
        this.ShardNodeCount = params.ShardNodeCount || null;
        this.ShardMemory = params.ShardMemory || null;
        this.ShardStorage = params.ShardStorage || null;
        this.ShardCount = params.ShardCount || null;

    }
}

/**
 * 升级实例 -- 切分分片类型
 * @class
 */
class SplitShardConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分片ID数组
         * @type {Array.<string> || null}
         */
        this.ShardInstanceIds = null;

        /**
         * 数据切分比例
         * @type {number || null}
         */
        this.SplitRate = null;

        /**
         * 分片内存大小，单位 GB
         * @type {number || null}
         */
        this.ShardMemory = null;

        /**
         * 分片存储大小，单位 GB
         * @type {number || null}
         */
        this.ShardStorage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShardInstanceIds = params.ShardInstanceIds || null;
        this.SplitRate = params.SplitRate || null;
        this.ShardMemory = params.ShardMemory || null;
        this.ShardStorage = params.ShardStorage || null;

    }
}

/**
 * 售卖可用区信息
 * @class
 */
class RegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域英文ID
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 地域数字ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 地域中文名
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 可用区列表
         * @type {Array.<ZonesInfo> || null}
         */
        this.ZoneList = null;

        /**
         * 可选择的主可用区和从可用区
         * @type {Array.<ShardZoneChooseInfo> || null}
         */
        this.AvailableChoice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = params.Region || null;
        this.RegionId = params.RegionId || null;
        this.RegionName = params.RegionName || null;

        if (params.ZoneList) {
            this.ZoneList = new Array();
            for (let z in params.ZoneList) {
                let obj = new ZonesInfo();
                obj.deserialize(params.ZoneList[z]);
                this.ZoneList.push(obj);
            }
        }

        if (params.AvailableChoice) {
            this.AvailableChoice = new Array();
            for (let z in params.AvailableChoice) {
                let obj = new ShardZoneChooseInfo();
                obj.deserialize(params.AvailableChoice[z]);
                this.AvailableChoice.push(obj);
            }
        }

    }
}

/**
 * RenewDCDBInstance返回参数结构体
 * @class
 */
class RenewDCDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 长订单号。可以据此调用 DescribeOrders
 查询订单详细信息，或在支付失败时调用用户账号相关接口进行支付。
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
        this.DealName = params.DealName || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeShardSpec返回参数结构体
 * @class
 */
class DescribeShardSpecResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按机型分类的可售卖规格列表
         * @type {Array.<SpecConfig> || null}
         */
        this.SpecConfig = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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

        if (params.SpecConfig) {
            this.SpecConfig = new Array();
            for (let z in params.SpecConfig) {
                let obj = new SpecConfig();
                obj.deserialize(params.SpecConfig[z]);
                this.SpecConfig.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * UpgradeDCDBInstance请求参数结构体
 * @class
 */
class UpgradeDCDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待升级的实例ID。形如：dcdbt-ow728lmc，可以通过 DescribeDCDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 升级类型，取值范围: 
<li> ADD: 新增分片 </li> 
 <li> EXPAND: 升级实例中的已有分片 </li> 
 <li> SPLIT: 将已有分片中的数据切分到新增分片上</li>
         * @type {string || null}
         */
        this.UpgradeType = null;

        /**
         * 新增分片配置，当UpgradeType为ADD时生效。
         * @type {AddShardConfig || null}
         */
        this.AddShardConfig = null;

        /**
         * 扩容分片配置，当UpgradeType为EXPAND时生效。
         * @type {ExpandShardConfig || null}
         */
        this.ExpandShardConfig = null;

        /**
         * 切分分片配置，当UpgradeType为SPLIT时生效。
         * @type {SplitShardConfig || null}
         */
        this.SplitShardConfig = null;

        /**
         * 是否自动使用代金券进行支付，默认不使用。
         * @type {boolean || null}
         */
        this.AutoVoucher = null;

        /**
         * 代金券ID列表，目前仅支持指定一张代金券。
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
        this.InstanceId = params.InstanceId || null;
        this.UpgradeType = params.UpgradeType || null;

        if (params.AddShardConfig) {
            let obj = new AddShardConfig();
            obj.deserialize(params.AddShardConfig)
            this.AddShardConfig = obj;
        }

        if (params.ExpandShardConfig) {
            let obj = new ExpandShardConfig();
            obj.deserialize(params.ExpandShardConfig)
            this.ExpandShardConfig = obj;
        }

        if (params.SplitShardConfig) {
            let obj = new SplitShardConfig();
            obj.deserialize(params.SplitShardConfig)
            this.SplitShardConfig = obj;
        }
        this.AutoVoucher = params.AutoVoucher || null;
        this.VoucherIds = params.VoucherIds || null;

    }
}

/**
 * DescribeDCDBRenewalPrice返回参数结构体
 * @class
 */
class DescribeDCDBRenewalPriceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原价，单位：分
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * 实际价格，单位：分。受折扣等影响，可能和原价不同。
         * @type {number || null}
         */
        this.Price = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
        this.OriginalPrice = params.OriginalPrice || null;
        this.Price = params.Price || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeDCDBUpgradePrice返回参数结构体
 * @class
 */
class DescribeDCDBUpgradePriceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原价，单位：分
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * 实际价格，单位：分。受折扣等影响，可能和原价不同。
         * @type {number || null}
         */
        this.Price = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
        this.OriginalPrice = params.OriginalPrice || null;
        this.Price = params.Price || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeDCDBSaleInfo请求参数结构体
 * @class
 */
class DescribeDCDBSaleInfoRequest extends  AbstractModel {
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
 * 升级实例 -- 扩容分片类型
 * @class
 */
class ExpandShardConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分片ID数组
         * @type {Array.<string> || null}
         */
        this.ShardInstanceIds = null;

        /**
         * 分片内存大小，单位 GB
         * @type {number || null}
         */
        this.ShardMemory = null;

        /**
         * 分片存储大小，单位 GB
         * @type {number || null}
         */
        this.ShardStorage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShardInstanceIds = params.ShardInstanceIds || null;
        this.ShardMemory = params.ShardMemory || null;
        this.ShardStorage = params.ShardStorage || null;

    }
}

/**
 * RenewDCDBInstance请求参数结构体
 * @class
 */
class RenewDCDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待续费的实例ID。形如：dcdbt-ow728lmc，可以通过 DescribeDCDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 续费时长，单位：月。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 是否自动使用代金券进行支付，默认不使用。
         * @type {boolean || null}
         */
        this.AutoVoucher = null;

        /**
         * 代金券ID列表，目前仅支持指定一张代金券。
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
        this.InstanceId = params.InstanceId || null;
        this.Period = params.Period || null;
        this.AutoVoucher = params.AutoVoucher || null;
        this.VoucherIds = params.VoucherIds || null;

    }
}

/**
 * 分片节点可用区选择
 * @class
 */
class ShardZoneChooseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主可用区
         * @type {ZonesInfo || null}
         */
        this.MasterZone = null;

        /**
         * 可选的从可用区
         * @type {Array.<ZonesInfo> || null}
         */
        this.SlaveZones = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MasterZone) {
            let obj = new ZonesInfo();
            obj.deserialize(params.MasterZone)
            this.MasterZone = obj;
        }

        if (params.SlaveZones) {
            this.SlaveZones = new Array();
            for (let z in params.SlaveZones) {
                let obj = new ZonesInfo();
                obj.deserialize(params.SlaveZones[z]);
                this.SlaveZones.push(obj);
            }
        }

    }
}

/**
 * 分片信息
 * @class
 */
class ShardInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分片ID
         * @type {string || null}
         */
        this.ShardInstanceId = null;

        /**
         * 分片Set ID
         * @type {string || null}
         */
        this.ShardSerialId = null;

        /**
         * 状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.Createtime = null;

        /**
         * 内存大小，单位 GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 存储大小，单位 GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 分片数字ID
         * @type {number || null}
         */
        this.ShardId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShardInstanceId = params.ShardInstanceId || null;
        this.ShardSerialId = params.ShardSerialId || null;
        this.Status = params.Status || null;
        this.Createtime = params.Createtime || null;
        this.Memory = params.Memory || null;
        this.Storage = params.Storage || null;
        this.ShardId = params.ShardId || null;

    }
}

/**
 * 按机型分类的规格配置
 * @class
 */
class SpecConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规格机型
         * @type {string || null}
         */
        this.Machine = null;

        /**
         * 规格列表
         * @type {Array.<SpecConfigInfo> || null}
         */
        this.SpecConfigInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Machine = params.Machine || null;

        if (params.SpecConfigInfos) {
            this.SpecConfigInfos = new Array();
            for (let z in params.SpecConfigInfos) {
                let obj = new SpecConfigInfo();
                obj.deserialize(params.SpecConfigInfos[z]);
                this.SpecConfigInfos.push(obj);
            }
        }

    }
}

/**
 * DescribeDCDBInstances请求参数结构体
 * @class
 */
class DescribeDCDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按照一个或者多个实例 ID 查询。实例 ID 形如：dcdbt-2t4cf98d
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 搜索的字段名，当前支持的值有：instancename、vip、all。传 instancename 表示按实例名进行搜索；传 vip 表示按内网IP进行搜索；传 all 将会按实例ID、实例名和内网IP进行搜索。
         * @type {string || null}
         */
        this.SearchName = null;

        /**
         * 搜索的关键字，支持模糊搜索。多个关键字使用换行符（'\n'）分割。
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * 按项目 ID 查询
         * @type {Array.<number> || null}
         */
        this.ProjectIds = null;

        /**
         * 是否根据 VPC 网络来搜索，0 为否，1 为是
         * @type {Array.<number> || null}
         */
        this.IsFilterVpc = null;

        /**
         * 私有网络 ID， IsFilterVpc 为 1 时有效
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 私有网络的子网 ID， IsFilterVpc 为 1 时有效
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 排序字段， projectId， createtime， instancename 三者之一
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 排序类型， desc 或者 asc
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * 偏移量，默认为 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为 10，最大值为 100。
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
        this.InstanceIds = params.InstanceIds || null;
        this.SearchName = params.SearchName || null;
        this.SearchKey = params.SearchKey || null;
        this.ProjectIds = params.ProjectIds || null;
        this.IsFilterVpc = params.IsFilterVpc || null;
        this.VpcId = params.VpcId || null;
        this.SubnetId = params.SubnetId || null;
        this.OrderBy = params.OrderBy || null;
        this.OrderByType = params.OrderByType || null;
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

    }
}

/**
 * DescribeDCDBSaleInfo返回参数结构体
 * @class
 */
class DescribeDCDBSaleInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可售卖地域信息列表
         * @type {Array.<RegionInfo> || null}
         */
        this.RegionList = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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

        if (params.RegionList) {
            this.RegionList = new Array();
            for (let z in params.RegionList) {
                let obj = new RegionInfo();
                obj.deserialize(params.RegionList[z]);
                this.RegionList.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 订单信息
 * @class
 */
class Deal extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单号
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * 所属账号
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * 商品数量
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 关联的流程 Id，可用于查询流程执行状态
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 只有创建实例的订单会填充该字段，表示该订单创建的实例的 ID。
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
        this.DealName = params.DealName || null;
        this.OwnerUin = params.OwnerUin || null;
        this.Count = params.Count || null;
        this.FlowId = params.FlowId || null;
        this.InstanceIds = params.InstanceIds || null;

    }
}

/**
 * DescribeShardSpec请求参数结构体
 * @class
 */
class DescribeShardSpecRequest extends  AbstractModel {
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
 * 实例可售卖规格详细信息，创建实例和扩容实例时 NodeCount、Memory 确定售卖规格，硬盘大小可用区间为[MinStorage,MaxStorage]
 * @class
 */
class SpecConfigInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点个数，2 表示一主一从，3 表示一主二从
         * @type {number || null}
         */
        this.NodeCount = null;

        /**
         * 内存大小，单位 GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 数据盘规格最小值，单位 GB
         * @type {number || null}
         */
        this.MinStorage = null;

        /**
         * 数据盘规格最大值，单位 GB
         * @type {number || null}
         */
        this.MaxStorage = null;

        /**
         * 推荐的使用场景
         * @type {string || null}
         */
        this.SuitInfo = null;

        /**
         * 产品类型 Id
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * 最大 Qps 值
         * @type {number || null}
         */
        this.Qps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeCount = params.NodeCount || null;
        this.Memory = params.Memory || null;
        this.MinStorage = params.MinStorage || null;
        this.MaxStorage = params.MaxStorage || null;
        this.SuitInfo = params.SuitInfo || null;
        this.Pid = params.Pid || null;
        this.Qps = params.Qps || null;

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
         * 待查询的长订单号列表，创建实例、续费实例、扩容实例接口返回。
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
        this.DealNames = params.DealNames || null;

    }
}

/**
 * DescribeDBLogFiles返回参数结构体
 * @class
 */
class DescribeDBLogFilesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
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
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 分布式数据库实例信息
 * @class
 */
class DCDBInstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * APPID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * VPC数字ID
         * @type {number || null}
         */
        this.VpcId = null;

        /**
         * Subnet数字ID
         * @type {number || null}
         */
        this.SubnetId = null;

        /**
         * 状态中文描述
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * 状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 内网IP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 内网端口
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 自动续费标志
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 内存大小，单位 GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 存储大小，单位 GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 分片个数
         * @type {number || null}
         */
        this.ShardCount = null;

        /**
         * 到期时间
         * @type {string || null}
         */
        this.PeriodEndTime = null;

        /**
         * 隔离时间
         * @type {string || null}
         */
        this.IsolatedTimestamp = null;

        /**
         * UIN
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 分片详情
         * @type {Array.<ShardInfo> || null}
         */
        this.ShardDetail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = params.InstanceId || null;
        this.InstanceName = params.InstanceName || null;
        this.AppId = params.AppId || null;
        this.ProjectId = params.ProjectId || null;
        this.Region = params.Region || null;
        this.Zone = params.Zone || null;
        this.VpcId = params.VpcId || null;
        this.SubnetId = params.SubnetId || null;
        this.StatusDesc = params.StatusDesc || null;
        this.Status = params.Status || null;
        this.Vip = params.Vip || null;
        this.Vport = params.Vport || null;
        this.CreateTime = params.CreateTime || null;
        this.AutoRenewFlag = params.AutoRenewFlag || null;
        this.Memory = params.Memory || null;
        this.Storage = params.Storage || null;
        this.ShardCount = params.ShardCount || null;
        this.PeriodEndTime = params.PeriodEndTime || null;
        this.IsolatedTimestamp = params.IsolatedTimestamp || null;
        this.Uin = params.Uin || null;

        if (params.ShardDetail) {
            this.ShardDetail = new Array();
            for (let z in params.ShardDetail) {
                let obj = new ShardInfo();
                obj.deserialize(params.ShardDetail[z]);
                this.ShardDetail.push(obj);
            }
        }

    }
}

module.exports = {
    DescribeDBLogFilesRequest: DescribeDBLogFilesRequest,
    ZonesInfo: ZonesInfo,
    DescribeDCDBInstancesResponse: DescribeDCDBInstancesResponse,
    UpgradeDCDBInstanceResponse: UpgradeDCDBInstanceResponse,
    DescribeOrdersResponse: DescribeOrdersResponse,
    CreateDCDBInstanceRequest: CreateDCDBInstanceRequest,
    DescribeDCDBUpgradePriceRequest: DescribeDCDBUpgradePriceRequest,
    CreateDCDBInstanceResponse: CreateDCDBInstanceResponse,
    AddShardConfig: AddShardConfig,
    DescribeDCDBPriceResponse: DescribeDCDBPriceResponse,
    DescribeDCDBRenewalPriceRequest: DescribeDCDBRenewalPriceRequest,
    DescribeDCDBPriceRequest: DescribeDCDBPriceRequest,
    SplitShardConfig: SplitShardConfig,
    RegionInfo: RegionInfo,
    RenewDCDBInstanceResponse: RenewDCDBInstanceResponse,
    DescribeShardSpecResponse: DescribeShardSpecResponse,
    UpgradeDCDBInstanceRequest: UpgradeDCDBInstanceRequest,
    DescribeDCDBRenewalPriceResponse: DescribeDCDBRenewalPriceResponse,
    DescribeDCDBUpgradePriceResponse: DescribeDCDBUpgradePriceResponse,
    DescribeDCDBSaleInfoRequest: DescribeDCDBSaleInfoRequest,
    ExpandShardConfig: ExpandShardConfig,
    RenewDCDBInstanceRequest: RenewDCDBInstanceRequest,
    ShardZoneChooseInfo: ShardZoneChooseInfo,
    ShardInfo: ShardInfo,
    SpecConfig: SpecConfig,
    DescribeDCDBInstancesRequest: DescribeDCDBInstancesRequest,
    DescribeDCDBSaleInfoResponse: DescribeDCDBSaleInfoResponse,
    Deal: Deal,
    DescribeShardSpecRequest: DescribeShardSpecRequest,
    SpecConfigInfo: SpecConfigInfo,
    DescribeOrdersRequest: DescribeOrdersRequest,
    DescribeDBLogFilesResponse: DescribeDBLogFilesResponse,
    DCDBInstanceInfo: DCDBInstanceInfo,

}
