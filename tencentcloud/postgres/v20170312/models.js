const AbstractModel = require("../../common/abstract_model");

/**
 * CreateDBInstances请求参数结构体
 * @class
 */
class CreateDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 售卖规格ID。该参数可以通过调用DescribeProductConfig的返回值中的SpecCode字段来获取。
         * @type {string || null}
         */
        this.SpecCode = null;

        /**
         * PostgreSQL内核版本，目前只支持：9.3.5、9.5.4两种版本。
         * @type {string || null}
         */
        this.DBVersion = null;

        /**
         * 实例容量大小，单位：GB。
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 一次性购买的实例数量。
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * 购买时长，单位：月。目前只支持1,2,3,4,5,6,7,8,9,10,11,12,24,36这些值。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 实例计费类型。目前只支持：PREPAID（预付费，即包年包月）。
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
         * 可用区ID。该参数可以通过调用 DescribeZones 接口的返回值中的Zone字段来获取。
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
        this.ProjectId = params.ProjectId || null;
        this.SpecCode = params.SpecCode || null;
        this.DBVersion = params.DBVersion || null;
        this.Storage = params.Storage || null;
        this.InstanceCount = params.InstanceCount || null;
        this.Period = params.Period || null;
        this.InstanceChargeType = params.InstanceChargeType || null;
        this.AutoVoucher = params.AutoVoucher || null;
        this.VoucherIds = params.VoucherIds || null;
        this.VpcId = params.VpcId || null;
        this.SubnetId = params.SubnetId || null;
        this.Zone = params.Zone || null;

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
 * 描述一种规格的信息信息
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
         * PostgreSQL的内核版本编号
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
         * @type {Array.<number> || null}
         */
        this.Cpu = null;

        /**
         * 内存大小，单位：MB
         * @type {Array.<number> || null}
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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SpecCode = params.SpecCode || null;
        this.Version = params.Version || null;
        this.VersionName = params.VersionName || null;
        this.Cpu = params.Cpu || null;
        this.Memory = params.Memory || null;
        this.MaxStorage = params.MaxStorage || null;
        this.MinStorage = params.MinStorage || null;
        this.Qps = params.Qps || null;
        this.Pid = params.Pid || null;

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
         * 每页显示数量，默认返回10条。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 分页序号，从1开始。
         * @type {number || null}
         */
        this.PageNumber = null;

        /**
         * 过滤条件，目前支持：db-instance-id、db-instance-name两种。
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
        this.PageSize = params.PageSize || null;
        this.PageNumber = params.PageNumber || null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = params.Region || null;
        this.RegionName = params.RegionName || null;
        this.RegionId = params.RegionId || null;
        this.RegionState = params.RegionState || null;

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
         * SubnetId
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
         * 实例状态
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
         * PostgreSQL内核版本
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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = params.Region || null;
        this.Zone = params.Zone || null;
        this.ProjectId = params.ProjectId || null;
        this.VpcId = params.VpcId || null;
        this.SubnetId = params.SubnetId || null;
        this.DBInstanceId = params.DBInstanceId || null;
        this.DBInstanceName = params.DBInstanceName || null;
        this.DBInstanceStatus = params.DBInstanceStatus || null;
        this.DBInstanceMemory = params.DBInstanceMemory || null;
        this.DBInstanceStorage = params.DBInstanceStorage || null;
        this.DBInstanceCpu = params.DBInstanceCpu || null;
        this.DBInstanceClass = params.DBInstanceClass || null;
        this.DBInstanceType = params.DBInstanceType || null;
        this.DBInstanceVersion = params.DBInstanceVersion || null;
        this.DBCharset = params.DBCharset || null;
        this.DBVersion = params.DBVersion || null;
        this.CreateTime = params.CreateTime || null;
        this.UpdateTime = params.UpdateTime || null;
        this.ExpireTime = params.ExpireTime || null;
        this.IsolatedTime = params.IsolatedTime || null;
        this.PayType = params.PayType || null;
        this.AutoRenew = params.AutoRenew || null;

        if (params.DBInstanceNetInfo) {
            this.DBInstanceNetInfo = new Array();
            for (let z in params.DBInstanceNetInfo) {
                let obj = new DBInstanceNetInfo();
                obj.deserialize(params.DBInstanceNetInfo[z]);
                this.DBInstanceNetInfo.push(obj);
            }
        }

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
        this.DBInstanceIdSet = params.DBInstanceIdSet || null;
        this.AdminName = params.AdminName || null;
        this.AdminPassword = params.AdminPassword || null;
        this.Charset = params.Charset || null;

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

        if (params.DBInstanceSet) {
            this.DBInstanceSet = new Array();
            for (let z in params.DBInstanceSet) {
                let obj = new DBInstance();
                obj.deserialize(params.DBInstanceSet[z]);
                this.DBInstanceSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = params.Region || null;
        this.Zone = params.Zone || null;

        if (params.SpecItemInfoList) {
            this.SpecItemInfoList = new Array();
            for (let z in params.SpecItemInfoList) {
                let obj = new SpecItemInfo();
                obj.deserialize(params.SpecItemInfoList[z]);
                this.SpecItemInfoList.push(obj);
            }
        }

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

        if (params.SpecInfoList) {
            this.SpecInfoList = new Array();
            for (let z in params.SpecInfoList) {
                let obj = new SpecInfo();
                obj.deserialize(params.SpecInfoList[z]);
                this.SpecInfoList.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
        this.Zone = params.Zone || null;

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
        this.DBInstanceIdSet = params.DBInstanceIdSet || null;
        this.RequestId = params.RequestId || null;

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
        this.Name = params.Name || null;
        this.Values = params.Values || null;

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

        if (params.RegionSet) {
            this.RegionSet = new Array();
            for (let z in params.RegionSet) {
                let obj = new RegionInfo();
                obj.deserialize(params.RegionSet[z]);
                this.RegionSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 描述实例的网络连接信息
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
         * Ip
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 连接Port地址
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 网络类型，1、inner（内网地址）；2、public（外网地址）
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * 网络连接状态
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
        this.Address = params.Address || null;
        this.Ip = params.Ip || null;
        this.Port = params.Port || null;
        this.NetType = params.NetType || null;
        this.Status = params.Status || null;

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

        if (params.DBInstance) {
            let obj = new DBInstance();
            obj.deserialize(params.DBInstance)
            this.DBInstance = obj;
        }
        this.RequestId = params.RequestId || null;

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
        this.Zone = params.Zone || null;
        this.SpecCode = params.SpecCode || null;
        this.Storage = params.Storage || null;
        this.InstanceCount = params.InstanceCount || null;
        this.Period = params.Period || null;
        this.Pid = params.Pid || null;
        this.InstanceChargeType = params.InstanceChargeType || null;

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

        if (params.ZoneSet) {
            this.ZoneSet = new Array();
            for (let z in params.ZoneSet) {
                let obj = new ZoneInfo();
                obj.deserialize(params.ZoneSet[z]);
                this.ZoneSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
        this.DBInstanceId = params.DBInstanceId || null;

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
        this.DealNames = params.DealNames || null;
        this.RequestId = params.RequestId || null;

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
         * 可用状态，UNAVAILABLE表示不可用，AVAILABLE表示可用
         * @type {string || null}
         */
        this.ZoneState = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = params.Zone || null;
        this.ZoneName = params.ZoneName || null;
        this.ZoneId = params.ZoneId || null;
        this.ZoneState = params.ZoneState || null;

    }
}

module.exports = {
    CreateDBInstancesRequest: CreateDBInstancesRequest,
    InquiryPriceCreateDBInstancesResponse: InquiryPriceCreateDBInstancesResponse,
    DescribeRegionsRequest: DescribeRegionsRequest,
    SpecItemInfo: SpecItemInfo,
    DescribeDBInstancesRequest: DescribeDBInstancesRequest,
    DescribeZonesRequest: DescribeZonesRequest,
    RegionInfo: RegionInfo,
    DBInstance: DBInstance,
    InitDBInstancesRequest: InitDBInstancesRequest,
    DescribeDBInstancesResponse: DescribeDBInstancesResponse,
    SpecInfo: SpecInfo,
    DescribeProductConfigResponse: DescribeProductConfigResponse,
    DescribeProductConfigRequest: DescribeProductConfigRequest,
    InitDBInstancesResponse: InitDBInstancesResponse,
    Filter: Filter,
    DescribeRegionsResponse: DescribeRegionsResponse,
    DBInstanceNetInfo: DBInstanceNetInfo,
    DescribeDBInstanceAttributeResponse: DescribeDBInstanceAttributeResponse,
    InquiryPriceCreateDBInstancesRequest: InquiryPriceCreateDBInstancesRequest,
    DescribeZonesResponse: DescribeZonesResponse,
    DescribeDBInstanceAttributeRequest: DescribeDBInstanceAttributeRequest,
    CreateDBInstancesResponse: CreateDBInstancesResponse,
    ZoneInfo: ZoneInfo,

}
