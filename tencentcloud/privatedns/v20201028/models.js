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
 * ModifyPrivateZoneVpc请求参数结构体
 * @class
 */
class ModifyPrivateZoneVpcRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私有域ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 私有域关联的全部VPC列表
         * @type {Array.<VpcInfo> || null}
         */
        this.VpcSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

        if (params.VpcSet) {
            this.VpcSet = new Array();
            for (let z in params.VpcSet) {
                let obj = new VpcInfo();
                obj.deserialize(params.VpcSet[z]);
                this.VpcSet.push(obj);
            }
        }

    }
}

/**
 * DescribeAuditLog返回参数结构体
 * @class
 */
class DescribeAuditLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作日志列表
         * @type {Array.<AuditLog> || null}
         */
        this.Data = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new AuditLog();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePrivateZoneRecordList请求参数结构体
 * @class
 */
class DescribePrivateZoneRecordListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私有域ID: zone-xxxxxx
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 过滤参数
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 分页偏移量，从0开始
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页限制数目， 最大100，默认20
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

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
 * DescribePrivateZone请求参数结构体
 * @class
 */
class DescribePrivateZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名，格式必须是标准的TLD
         * @type {string || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * 时间统计值
 * @class
 */
class DatePoint extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 值
         * @type {number || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Date = 'Date' in params ? params.Date : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 私有域信息
 * @class
 */
class PrivateZoneRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录id
         * @type {string || null}
         */
        this.RecordId = null;

        /**
         * 私有域id: zone-xxxxxxxx
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 子域名
         * @type {string || null}
         */
        this.SubDomain = null;

        /**
         * 记录类型，可选的记录类型为："A", "AAAA", "CNAME", "MX", "TXT", "PTR"
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * 记录值
         * @type {string || null}
         */
        this.RecordValue = null;

        /**
         * 记录缓存时间，数值越小生效越快，取值1-86400s, 默认 600
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * MX优先级：记录类型为MX时必填。取值范围：5,10,15,20,30,40,50
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MX = null;

        /**
         * 记录状态：ENABLED
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 记录权重，值为1-100
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 记录创建时间
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * 记录更新时间
         * @type {string || null}
         */
        this.UpdatedOn = null;

        /**
         * 附加信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Extra = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.RecordValue = 'RecordValue' in params ? params.RecordValue : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.MX = 'MX' in params ? params.MX : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.UpdatedOn = 'UpdatedOn' in params ? params.UpdatedOn : null;
        this.Extra = 'Extra' in params ? params.Extra : null;

    }
}

/**
 * 日志详情
 * @class
 */
class AuditLogInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 操作人uin
         * @type {string || null}
         */
        this.OperatorUin = null;

        /**
         * 日志内容
         * @type {string || null}
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Date = 'Date' in params ? params.Date : null;
        this.OperatorUin = 'OperatorUin' in params ? params.OperatorUin : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * DescribeRequestData请求参数结构体
 * @class
 */
class DescribeRequestDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求量统计起始时间
         * @type {string || null}
         */
        this.TimeRangeBegin = null;

        /**
         * 筛选参数：
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 请求量统计结束时间
         * @type {string || null}
         */
        this.TimeRangeEnd = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeRangeBegin = 'TimeRangeBegin' in params ? params.TimeRangeBegin : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.TimeRangeEnd = 'TimeRangeEnd' in params ? params.TimeRangeEnd : null;

    }
}

/**
 * ModifyPrivateZoneRecord返回参数结构体
 * @class
 */
class ModifyPrivateZoneRecordResponse extends  AbstractModel {
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
 * DescribePrivateZoneRecordList返回参数结构体
 * @class
 */
class DescribePrivateZoneRecordListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 解析记录数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 解析记录列表
         * @type {Array.<PrivateZoneRecord> || null}
         */
        this.RecordSet = null;

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

        if (params.RecordSet) {
            this.RecordSet = new Array();
            for (let z in params.RecordSet) {
                let obj = new PrivateZoneRecord();
                obj.deserialize(params.RecordSet[z]);
                this.RecordSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRequestData返回参数结构体
 * @class
 */
class DescribeRequestDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求量统计表
         * @type {Array.<MetricData> || null}
         */
        this.Data = null;

        /**
         * 请求量单位时间: Day：天，Hour：小时
         * @type {string || null}
         */
        this.Interval = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new MetricData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyPrivateZone请求参数结构体
 * @class
 */
class ModifyPrivateZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名，格式必须是标准的TLD
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 是否开启子域名递归, ENABLED， DISABLED
         * @type {string || null}
         */
        this.DnsForwardStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.DnsForwardStatus = 'DnsForwardStatus' in params ? params.DnsForwardStatus : null;

    }
}

/**
 * 标签
 * @class
 */
class TagInfo extends  AbstractModel {
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
 * CreatePrivateZone请求参数结构体
 * @class
 */
class CreatePrivateZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名，格式必须是标准的TLD
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 创建私有域的同时，为其打上标签
         * @type {Array.<TagInfo> || null}
         */
        this.TagSet = null;

        /**
         * 创建私有域的同时，将其关联至VPC
         * @type {Array.<VpcInfo> || null}
         */
        this.VpcSet = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 是否开启子域名递归, ENABLED， DISABLED
         * @type {string || null}
         */
        this.DnsForwardStatus = null;

        /**
         * 创建私有域的同时，将其关联至VPC
         * @type {Array.<VpcInfo> || null}
         */
        this.Vpcs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new TagInfo();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

        if (params.VpcSet) {
            this.VpcSet = new Array();
            for (let z in params.VpcSet) {
                let obj = new VpcInfo();
                obj.deserialize(params.VpcSet[z]);
                this.VpcSet.push(obj);
            }
        }
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.DnsForwardStatus = 'DnsForwardStatus' in params ? params.DnsForwardStatus : null;

        if (params.Vpcs) {
            this.Vpcs = new Array();
            for (let z in params.Vpcs) {
                let obj = new VpcInfo();
                obj.deserialize(params.Vpcs[z]);
                this.Vpcs.push(obj);
            }
        }

    }
}

/**
 * ModifyPrivateZone返回参数结构体
 * @class
 */
class ModifyPrivateZoneResponse extends  AbstractModel {
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
 * CreatePrivateZone返回参数结构体
 * @class
 */
class CreatePrivateZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私有域ID, zone-xxxxxx
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 私有域名
         * @type {string || null}
         */
        this.Domain = null;

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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SubscribePrivateZoneService请求参数结构体
 * @class
 */
class SubscribePrivateZoneServiceRequest extends  AbstractModel {
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
 * DescribePrivateZone返回参数结构体
 * @class
 */
class DescribePrivateZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私有域详情
         * @type {PrivateZone || null}
         */
        this.PrivateZone = null;

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

        if (params.PrivateZone) {
            let obj = new PrivateZone();
            obj.deserialize(params.PrivateZone)
            this.PrivateZone = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePrivateZoneList请求参数结构体
 * @class
 */
class DescribePrivateZoneListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页偏移量，从0开始
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页限制数目， 最大100，默认20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤参数
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
 * DescribeDashboard返回参数结构体
 * @class
 */
class DescribeDashboardResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私有域解析总数
         * @type {number || null}
         */
        this.ZoneTotal = null;

        /**
         * 私有域关联VPC数量
         * @type {number || null}
         */
        this.ZoneVpcCount = null;

        /**
         * 历史请求量总数
         * @type {number || null}
         */
        this.RequestTotalCount = null;

        /**
         * 流量包用量
         * @type {Array.<FlowUsage> || null}
         */
        this.FlowUsage = null;

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
        this.ZoneTotal = 'ZoneTotal' in params ? params.ZoneTotal : null;
        this.ZoneVpcCount = 'ZoneVpcCount' in params ? params.ZoneVpcCount : null;
        this.RequestTotalCount = 'RequestTotalCount' in params ? params.RequestTotalCount : null;

        if (params.FlowUsage) {
            this.FlowUsage = new Array();
            for (let z in params.FlowUsage) {
                let obj = new FlowUsage();
                obj.deserialize(params.FlowUsage[z]);
                this.FlowUsage.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePrivateZoneRecord返回参数结构体
 * @class
 */
class CreatePrivateZoneRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录Id
         * @type {string || null}
         */
        this.RecordId = null;

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
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePrivateZoneService返回参数结构体
 * @class
 */
class DescribePrivateZoneServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私有域解析服务开通状态
         * @type {string || null}
         */
        this.ServiceStatus = null;

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
        this.ServiceStatus = 'ServiceStatus' in params ? params.ServiceStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Vpc信息
 * @class
 */
class VpcInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * VpcId： vpc-xadsafsdasd
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * Vpc所属地区: ap-guangzhou, ap-shanghai
         * @type {string || null}
         */
        this.Region = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * DescribeAuditLog请求参数结构体
 * @class
 */
class DescribeAuditLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求量统计起始时间
         * @type {string || null}
         */
        this.TimeRangeBegin = null;

        /**
         * 筛选参数：
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 请求量统计结束时间
         * @type {string || null}
         */
        this.TimeRangeEnd = null;

        /**
         * 分页偏移量，从0开始
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页限制数目， 最大100，默认20
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
        this.TimeRangeBegin = 'TimeRangeBegin' in params ? params.TimeRangeBegin : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.TimeRangeEnd = 'TimeRangeEnd' in params ? params.TimeRangeEnd : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeDashboard请求参数结构体
 * @class
 */
class DescribeDashboardRequest extends  AbstractModel {
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
 * DeletePrivateZone请求参数结构体
 * @class
 */
class DeletePrivateZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私有域ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 私有域ID数组，ZoneId 优先
         * @type {Array.<string> || null}
         */
        this.ZoneIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneIdSet = 'ZoneIdSet' in params ? params.ZoneIdSet : null;

    }
}

/**
 * 操作日志
 * @class
 */
class AuditLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志类型
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * 日志表名
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * 日志总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 日志列表
         * @type {Array.<AuditLogInfo> || null}
         */
        this.DataSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.DataSet) {
            this.DataSet = new Array();
            for (let z in params.DataSet) {
                let obj = new AuditLogInfo();
                obj.deserialize(params.DataSet[z]);
                this.DataSet.push(obj);
            }
        }

    }
}

/**
 * SubscribePrivateZoneService返回参数结构体
 * @class
 */
class SubscribePrivateZoneServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私有域解析服务开通状态
         * @type {string || null}
         */
        this.ServiceStatus = null;

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
        this.ServiceStatus = 'ServiceStatus' in params ? params.ServiceStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeletePrivateZoneRecord请求参数结构体
 * @class
 */
class DeletePrivateZoneRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私有域ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 记录ID
         * @type {string || null}
         */
        this.RecordId = null;

        /**
         * 记录ID数组，RecordId 优先
         * @type {Array.<string> || null}
         */
        this.RecordIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.RecordIdSet = 'RecordIdSet' in params ? params.RecordIdSet : null;

    }
}

/**
 * 筛选参数
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 参数值数组
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
 * DeletePrivateZone返回参数结构体
 * @class
 */
class DeletePrivateZoneResponse extends  AbstractModel {
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
 * DescribePrivateZoneList返回参数结构体
 * @class
 */
class DescribePrivateZoneListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私有域数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 私有域列表
         * @type {Array.<PrivateZone> || null}
         */
        this.PrivateZoneSet = null;

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

        if (params.PrivateZoneSet) {
            this.PrivateZoneSet = new Array();
            for (let z in params.PrivateZoneSet) {
                let obj = new PrivateZone();
                obj.deserialize(params.PrivateZoneSet[z]);
                this.PrivateZoneSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 统计数据表
 * @class
 */
class MetricData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源描述
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * 表名
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * 表数据
         * @type {Array.<DatePoint> || null}
         */
        this.DataSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.Metric = 'Metric' in params ? params.Metric : null;

        if (params.DataSet) {
            this.DataSet = new Array();
            for (let z in params.DataSet) {
                let obj = new DatePoint();
                obj.deserialize(params.DataSet[z]);
                this.DataSet.push(obj);
            }
        }

    }
}

/**
 * DescribePrivateZoneService请求参数结构体
 * @class
 */
class DescribePrivateZoneServiceRequest extends  AbstractModel {
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
 * 私有域信息
 * @class
 */
class PrivateZone extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私有域id: zone-xxxxxxxx
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 域名所有者uin
         * @type {number || null}
         */
        this.OwnerUin = null;

        /**
         * 私有域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.UpdatedOn = null;

        /**
         * 记录数
         * @type {number || null}
         */
        this.RecordCount = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 绑定的Vpc列表
         * @type {Array.<VpcInfo> || null}
         */
        this.VpcSet = null;

        /**
         * 私有域状态：正常解析：ENABLED, 暂停解析：SUSPEND, 锁定：FROZEN
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 域名递归解析状态：开通：ENABLED, 关闭，DISABLED
         * @type {string || null}
         */
        this.DnsForwardStatus = null;

        /**
         * 标签键值对集合
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.UpdatedOn = 'UpdatedOn' in params ? params.UpdatedOn : null;
        this.RecordCount = 'RecordCount' in params ? params.RecordCount : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

        if (params.VpcSet) {
            this.VpcSet = new Array();
            for (let z in params.VpcSet) {
                let obj = new VpcInfo();
                obj.deserialize(params.VpcSet[z]);
                this.VpcSet.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.DnsForwardStatus = 'DnsForwardStatus' in params ? params.DnsForwardStatus : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * CreatePrivateZoneRecord请求参数结构体
 * @class
 */
class CreatePrivateZoneRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私有域ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 记录类型，可选的记录类型为："A", "AAAA", "CNAME", "MX", "TXT", "PTR"
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * 子域名，例如 "www", "m", "@"
         * @type {string || null}
         */
        this.SubDomain = null;

        /**
         * 记录值，例如 IP：192.168.10.2，CNAME：cname.qcloud.com.，MX：mail.qcloud.com.
         * @type {string || null}
         */
        this.RecordValue = null;

        /**
         * 记录权重，值为1-100
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * MX优先级：记录类型为MX时必填。取值范围：5,10,15,20,30,40,50
         * @type {number || null}
         */
        this.MX = null;

        /**
         * 记录缓存时间，数值越小生效越快，取值1-86400s, 默认 600
         * @type {number || null}
         */
        this.TTL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;
        this.RecordValue = 'RecordValue' in params ? params.RecordValue : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.MX = 'MX' in params ? params.MX : null;
        this.TTL = 'TTL' in params ? params.TTL : null;

    }
}

/**
 * ModifyPrivateZoneRecord请求参数结构体
 * @class
 */
class ModifyPrivateZoneRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私有域ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 记录ID
         * @type {string || null}
         */
        this.RecordId = null;

        /**
         * 记录类型，可选的记录类型为："A", "AAAA", "CNAME", "MX", "TXT", "PTR"
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * 子域名，例如 "www", "m", "@"
         * @type {string || null}
         */
        this.SubDomain = null;

        /**
         * 记录值，例如 IP：192.168.10.2，CNAME：cname.qcloud.com.，MX：mail.qcloud.com.
         * @type {string || null}
         */
        this.RecordValue = null;

        /**
         * 记录权重，值为1-100
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * MX优先级：记录类型为MX时必填。取值范围：5,10,15,20,30,40,50
         * @type {number || null}
         */
        this.MX = null;

        /**
         * 记录缓存时间，数值越小生效越快，取值1-86400s, 默认 600
         * @type {number || null}
         */
        this.TTL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;
        this.RecordValue = 'RecordValue' in params ? params.RecordValue : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.MX = 'MX' in params ? params.MX : null;
        this.TTL = 'TTL' in params ? params.TTL : null;

    }
}

/**
 * 流量包用量
 * @class
 */
class FlowUsage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流量包类型：ZONE 私有域；TRAFFIC 解析流量包
         * @type {string || null}
         */
        this.FlowType = null;

        /**
         * 流量包总额度
         * @type {number || null}
         */
        this.TotalQuantity = null;

        /**
         * 流量包可用额度
         * @type {number || null}
         */
        this.AvailableQuantity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowType = 'FlowType' in params ? params.FlowType : null;
        this.TotalQuantity = 'TotalQuantity' in params ? params.TotalQuantity : null;
        this.AvailableQuantity = 'AvailableQuantity' in params ? params.AvailableQuantity : null;

    }
}

/**
 * DeletePrivateZoneRecord返回参数结构体
 * @class
 */
class DeletePrivateZoneRecordResponse extends  AbstractModel {
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
 * ModifyPrivateZoneVpc返回参数结构体
 * @class
 */
class ModifyPrivateZoneVpcResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私有域ID, zone-xxxxxx
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 解析域关联的VPC列表
         * @type {Array.<VpcInfo> || null}
         */
        this.VpcSet = null;

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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

        if (params.VpcSet) {
            this.VpcSet = new Array();
            for (let z in params.VpcSet) {
                let obj = new VpcInfo();
                obj.deserialize(params.VpcSet[z]);
                this.VpcSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    ModifyPrivateZoneVpcRequest: ModifyPrivateZoneVpcRequest,
    DescribeAuditLogResponse: DescribeAuditLogResponse,
    DescribePrivateZoneRecordListRequest: DescribePrivateZoneRecordListRequest,
    DescribePrivateZoneRequest: DescribePrivateZoneRequest,
    DatePoint: DatePoint,
    PrivateZoneRecord: PrivateZoneRecord,
    AuditLogInfo: AuditLogInfo,
    DescribeRequestDataRequest: DescribeRequestDataRequest,
    ModifyPrivateZoneRecordResponse: ModifyPrivateZoneRecordResponse,
    DescribePrivateZoneRecordListResponse: DescribePrivateZoneRecordListResponse,
    DescribeRequestDataResponse: DescribeRequestDataResponse,
    ModifyPrivateZoneRequest: ModifyPrivateZoneRequest,
    TagInfo: TagInfo,
    CreatePrivateZoneRequest: CreatePrivateZoneRequest,
    ModifyPrivateZoneResponse: ModifyPrivateZoneResponse,
    CreatePrivateZoneResponse: CreatePrivateZoneResponse,
    SubscribePrivateZoneServiceRequest: SubscribePrivateZoneServiceRequest,
    DescribePrivateZoneResponse: DescribePrivateZoneResponse,
    DescribePrivateZoneListRequest: DescribePrivateZoneListRequest,
    DescribeDashboardResponse: DescribeDashboardResponse,
    CreatePrivateZoneRecordResponse: CreatePrivateZoneRecordResponse,
    DescribePrivateZoneServiceResponse: DescribePrivateZoneServiceResponse,
    VpcInfo: VpcInfo,
    DescribeAuditLogRequest: DescribeAuditLogRequest,
    DescribeDashboardRequest: DescribeDashboardRequest,
    DeletePrivateZoneRequest: DeletePrivateZoneRequest,
    AuditLog: AuditLog,
    SubscribePrivateZoneServiceResponse: SubscribePrivateZoneServiceResponse,
    DeletePrivateZoneRecordRequest: DeletePrivateZoneRecordRequest,
    Filter: Filter,
    DeletePrivateZoneResponse: DeletePrivateZoneResponse,
    DescribePrivateZoneListResponse: DescribePrivateZoneListResponse,
    MetricData: MetricData,
    DescribePrivateZoneServiceRequest: DescribePrivateZoneServiceRequest,
    PrivateZone: PrivateZone,
    CreatePrivateZoneRecordRequest: CreatePrivateZoneRecordRequest,
    ModifyPrivateZoneRecordRequest: ModifyPrivateZoneRecordRequest,
    FlowUsage: FlowUsage,
    DeletePrivateZoneRecordResponse: DeletePrivateZoneRecordResponse,
    ModifyPrivateZoneVpcResponse: ModifyPrivateZoneVpcResponse,

}
