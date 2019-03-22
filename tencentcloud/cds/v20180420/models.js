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
 * ModifyDbauditInstancesRenewFlag返回参数结构体
 * @class
 */
class ModifyDbauditInstancesRenewFlagResponse extends  AbstractModel {
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
 * DescribeDbauditInstanceType返回参数结构体
 * @class
 */
class DescribeDbauditInstanceTypeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据安全审计产品规格信息列表
         * @type {Array.<DbauditTypesInfo> || null}
         */
        this.DbauditTypesSet = null;

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

        if (params.DbauditTypesSet) {
            this.DbauditTypesSet = new Array();
            for (let z in params.DbauditTypesSet) {
                let obj = new DbauditTypesInfo();
                obj.deserialize(params.DbauditTypesSet[z]);
                this.DbauditTypesSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceDbauditInstance返回参数结构体
 * @class
 */
class InquiryPriceDbauditInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总价，单位：元
         * @type {number || null}
         */
        this.TotalPrice = null;

        /**
         * 真实价钱，预支费用的折扣价，单位：元
         * @type {number || null}
         */
        this.RealTotalCost = null;

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
        this.TotalPrice = 'TotalPrice' in params ? params.TotalPrice : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 数据安全产品实例信息
 * @class
 */
class CdsAuditInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 用户AppId
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * 用户Uin
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 续费标识
         * @type {number || null}
         */
        this.RenewFlag = null;

        /**
         * 所属地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 付费模式（数据安全审计只支持预付费：1）
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 实例状态： 0，未生效；1：正常运行； 2：被隔离； 3，已过期
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 实例被隔离时间，格式：yyyy-mm-dd HH:ii:ss
         * @type {string || null}
         */
        this.IsolatedTimestamp = null;

        /**
         * 实例创建时间，格式： yyyy-mm-dd HH:ii:ss
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 实例过期时间，格式：yyyy-mm-dd HH:ii:ss
         * @type {string || null}
         */
        this.ExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.IsolatedTimestamp = 'IsolatedTimestamp' in params ? params.IsolatedTimestamp : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * ModifyDbauditInstancesRenewFlag请求参数结构体
 * @class
 */
class ModifyDbauditInstancesRenewFlagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 0，表示默认状态(用户未设置，即初始状态)；1，表示自动续费；2，表示明确不自动续费
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;

    }
}

/**
 * DescribeDbauditUsedRegions返回参数结构体
 * @class
 */
class DescribeDbauditUsedRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可售卖地域信息列表
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
 * DescribeDbauditInstances请求参数结构体
 * @class
 */
class DescribeDbauditInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询条件地域
         * @type {string || null}
         */
        this.SearchRegion = null;

        /**
         * 限制数目，默认10， 最大50
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认1
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
        this.SearchRegion = 'SearchRegion' in params ? params.SearchRegion : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeDbauditInstanceType请求参数结构体
 * @class
 */
class DescribeDbauditInstanceTypeRequest extends  AbstractModel {
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
 * 数盾地域信息
 * @class
 */
class RegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 地域名称
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 地域描述
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 地域可用状态
         * @type {number || null}
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
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RegionState = 'RegionState' in params ? params.RegionState : null;

    }
}

/**
 * DescribeDbauditInstances返回参数结构体
 * @class
 */
class DescribeDbauditInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总实例数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 数据安全审计实例信息列表
         * @type {Array.<CdsAuditInstance> || null}
         */
        this.CdsAuditInstanceSet = null;

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

        if (params.CdsAuditInstanceSet) {
            this.CdsAuditInstanceSet = new Array();
            for (let z in params.CdsAuditInstanceSet) {
                let obj = new CdsAuditInstance();
                obj.deserialize(params.CdsAuditInstanceSet[z]);
                this.CdsAuditInstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 数据安全审计产品规格信息
 * @class
 */
class DbauditTypesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规格描述
         * @type {string || null}
         */
        this.InstanceVersionName = null;

        /**
         * 规格名称
         * @type {string || null}
         */
        this.InstanceVersionKey = null;

        /**
         * 最大吞吐量
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * 最大实例数
         * @type {number || null}
         */
        this.MaxInstances = null;

        /**
         * 入库速率（每小时）
         * @type {number || null}
         */
        this.InsertSpeed = null;

        /**
         * 最大在线存储量，单位：条
         * @type {number || null}
         */
        this.OnlineStorageCapacity = null;

        /**
         * 最大归档存储量，单位：条
         * @type {number || null}
         */
        this.ArchivingStorageCapacity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceVersionName = 'InstanceVersionName' in params ? params.InstanceVersionName : null;
        this.InstanceVersionKey = 'InstanceVersionKey' in params ? params.InstanceVersionKey : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.MaxInstances = 'MaxInstances' in params ? params.MaxInstances : null;
        this.InsertSpeed = 'InsertSpeed' in params ? params.InsertSpeed : null;
        this.OnlineStorageCapacity = 'OnlineStorageCapacity' in params ? params.OnlineStorageCapacity : null;
        this.ArchivingStorageCapacity = 'ArchivingStorageCapacity' in params ? params.ArchivingStorageCapacity : null;

    }
}

/**
 * DescribeDbauditUsedRegions请求参数结构体
 * @class
 */
class DescribeDbauditUsedRegionsRequest extends  AbstractModel {
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
 * InquiryPriceDbauditInstance请求参数结构体
 * @class
 */
class InquiryPriceDbauditInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例规格，取值范围： cdsaudit，cdsaudit_adv， cdsaudit_ent 分别为合规版，高级版，企业版
         * @type {string || null}
         */
        this.InstanceVersion = null;

        /**
         * 询价类型： renew，续费；newbuy，新购
         * @type {string || null}
         */
        this.InquiryType = null;

        /**
         * 购买实例的时长。取值范围：1（y/m），2（y/m）,，3（y/m），4（m）， 5（m），6（m）， 7（m），8（m），9（m）， 10（m）
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 购买时长单位，y：年；m：月
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 实例所在地域
         * @type {string || null}
         */
        this.ServiceRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceVersion = 'InstanceVersion' in params ? params.InstanceVersion : null;
        this.InquiryType = 'InquiryType' in params ? params.InquiryType : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.ServiceRegion = 'ServiceRegion' in params ? params.ServiceRegion : null;

    }
}

module.exports = {
    ModifyDbauditInstancesRenewFlagResponse: ModifyDbauditInstancesRenewFlagResponse,
    DescribeDbauditInstanceTypeResponse: DescribeDbauditInstanceTypeResponse,
    InquiryPriceDbauditInstanceResponse: InquiryPriceDbauditInstanceResponse,
    CdsAuditInstance: CdsAuditInstance,
    ModifyDbauditInstancesRenewFlagRequest: ModifyDbauditInstancesRenewFlagRequest,
    DescribeDbauditUsedRegionsResponse: DescribeDbauditUsedRegionsResponse,
    DescribeDbauditInstancesRequest: DescribeDbauditInstancesRequest,
    DescribeDbauditInstanceTypeRequest: DescribeDbauditInstanceTypeRequest,
    RegionInfo: RegionInfo,
    DescribeDbauditInstancesResponse: DescribeDbauditInstancesResponse,
    DbauditTypesInfo: DbauditTypesInfo,
    DescribeDbauditUsedRegionsRequest: DescribeDbauditUsedRegionsRequest,
    InquiryPriceDbauditInstanceRequest: InquiryPriceDbauditInstanceRequest,

}
