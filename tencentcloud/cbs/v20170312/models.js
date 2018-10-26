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
 * DetachDisks请求参数结构体
 * @class
 */
class DetachDisksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 将要解挂的云硬盘ID， 通过[DescribeDisks](/document/product/362/16315)接口查询，单次请求最多可解挂10块弹性云盘。
         * @type {Array.<string> || null}
         */
        this.DiskIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskIds = params.DiskIds || null;

    }
}

/**
 * DescribeDiskOperationLogs返回参数结构体
 * @class
 */
class DescribeDiskOperationLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云盘的操作日志列表。
         * @type {Array.<DiskOperationLog> || null}
         */
        this.DiskOperationLogSet = null;

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

        if (params.DiskOperationLogSet) {
            this.DiskOperationLogSet = new Array();
            for (let z in params.DiskOperationLogSet) {
                let obj = new DiskOperationLog();
                obj.deserialize(params.DiskOperationLogSet[z]);
                this.DiskOperationLogSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * ResizeDisk请求参数结构体
 * @class
 */
class ResizeDiskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云硬盘ID， 通过[DescribeDisks](/document/product/362/16315)接口查询。
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * 云硬盘扩容后的大小，单位为GB，必须大于当前云硬盘大小。云盘大小取值范围参见云硬盘[产品分类](/document/product/362/2353)的说明。
         * @type {number || null}
         */
        this.DiskSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskId = params.DiskId || null;
        this.DiskSize = params.DiskSize || null;

    }
}

/**
 * ModifyDiskAttributes返回参数结构体
 * @class
 */
class ModifyDiskAttributesResponse extends  AbstractModel {
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
        this.RequestId = params.RequestId || null;

    }
}

/**
 * TerminateDisks请求参数结构体
 * @class
 */
class TerminateDisksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需退还的云盘ID列表。
         * @type {Array.<string> || null}
         */
        this.DiskIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskIds = params.DiskIds || null;

    }
}

/**
 * DescribeDisks请求参数结构体
 * @class
 */
class DescribeDisksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按照一个或者多个云硬盘ID查询。云硬盘ID形如：`disk-11112222`，此参数的具体格式可参考API[简介](/document/product/362/15633)的ids.N一节）。参数不支持同时指定`DiskIds`和`Filters`。
         * @type {Array.<string> || null}
         */
        this.DiskIds = null;

        /**
         * 过滤条件。参数不支持同时指定`DiskIds`和`Filters`。<br><li>disk-usage - Array of String - 是否必填：否 -（过滤条件）按云盘类型过滤。 (SYSTEM_DISK：表示系统盘 | DATA_DISK：表示数据盘)<br><li>disk-charge-type - Array of String - 是否必填：否 -（过滤条件）按照云硬盘计费模式过滤。 (PREPAID：表示预付费，即包年包月 | POSTPAID_BY_HOUR：表示后付费，即按量计费。)<br><li>portable - Array of String - 是否必填：否 -（过滤条件）按是否为弹性云盘过滤。 (TRUE：表示弹性云盘 | FALSE：表示非弹性云盘。)<br><li>project-id - Array of Integer - 是否必填：否 -（过滤条件）按云硬盘所属项目ID过滤。<br><li>disk-id - Array of String - 是否必填：否 -（过滤条件）按照云硬盘ID过滤。云盘ID形如：`disk-11112222`。<br><li>disk-name - Array of String - 是否必填：否 -（过滤条件）按照云盘名称过滤。<br><li>disk-type - Array of String - 是否必填：否 -（过滤条件）按照云盘介质类型过滤。(CLOUD_BASIC：表示普通云硬盘 | CLOUD_PREMIUM：表示高性能云硬盘。| CLOUD_SSD：SSD表示SSD云硬盘。)<br><li>disk-state - Array of String - 是否必填：否 -（过滤条件）按照云盘状态过滤。(UNATTACHED：未挂载 | ATTACHING：挂载中 | ATTACHED：已挂载 | DETACHING：解挂中 | EXPANDING：扩容中 | ROLLBACKING：回滚中 | TORECYCLE：待回收。)<br><li>instance-id - Array of String - 是否必填：否 -（过滤条件）按照云盘挂载的云主机实例ID过滤。可根据此参数查询挂载在指定云主机下的云硬盘。<br><li>zone - Array of String - 是否必填：否 -（过滤条件）按照[可用区](/document/api/213/9452#zone)过滤。<br><li>instance-ip-address - Array of String - 是否必填：否 -（过滤条件）按云盘所挂载云主机的内网或外网IP过滤。<br><li>instance-name - Array of String - 是否必填：否 -（过滤条件）按云盘所挂载的实例名称过滤。<br><li>tag-key - Array of String - 是否必填：否 -（过滤条件）按照标签键进行过滤。<br><li>tag-value - Array of String - 是否必填：否 -（过滤条件）照标签值进行过滤。<br><li>tag:tag-key - Array of String - 是否必填：否 -（过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考API[简介](/document/product/362/15633)中的相关小节。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](/document/product/362/15633)中的相关小节。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 输出云盘列表的排列顺序。取值范围：<br><li>ASC：升序排列<br><li>DESC：降序排列。
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 云盘列表排序的依据字段。取值范围：<br><li>CREATE_TIME：依据云盘的创建时间排序<br><li>DEADLINE：依据云盘的到期时间排序<br>默认按云盘创建时间排序。
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 云盘详情中是否需要返回云盘绑定的定期快照策略ID，TRUE表示需要返回，FALSE表示不返回。
         * @type {boolean || null}
         */
        this.ReturnBindAutoSnapshotPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskIds = params.DiskIds || null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;
        this.Order = params.Order || null;
        this.OrderField = params.OrderField || null;
        this.ReturnBindAutoSnapshotPolicy = params.ReturnBindAutoSnapshotPolicy || null;

    }
}

/**
 * DescribeInstancesDiskNum请求参数结构体
 * @class
 */
class DescribeInstancesDiskNumRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云服务器实例ID，通过[DescribeInstances](/document/product/213/15728)接口查询。
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
        this.InstanceIds = params.InstanceIds || null;

    }
}

/**
 * 描述了实例的抽象位置，包括其所在的可用区，所属的项目
 * @class
 */
class Placement extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例所属的[可用区](/document/api/213/9452#zone)ID。该参数也可以通过调用  [DescribeZones](/document/product/213/15707) 的返回值中的Zone字段来获取。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 实例所属项目ID。该参数可以通过调用 [DescribeProject](/document/api/378/4400) 的返回值中的 projectId 字段来获取。不填为默认项目。
         * @type {number || null}
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
        this.Zone = params.Zone || null;
        this.ProjectId = params.ProjectId || null;

    }
}

/**
 * ModifySnapshotAttribute请求参数结构体
 * @class
 */
class ModifySnapshotAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照ID, 可通过[DescribeSnapshots](/document/product/362/15647)查询。
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * 新的快照名称。最长为60个字符。
         * @type {string || null}
         */
        this.SnapshotName = null;

        /**
         * 快照的保留时间，FALSE表示非永久保留，TRUE表示永久保留。仅支持将非永久快照修改为永久快照。
         * @type {boolean || null}
         */
        this.IsPermanent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SnapshotId = params.SnapshotId || null;
        this.SnapshotName = params.SnapshotName || null;
        this.IsPermanent = params.IsPermanent || null;

    }
}

/**
 * InquiryPriceRenewDisks请求参数结构体
 * @class
 */
class InquiryPriceRenewDisksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云硬盘ID， 通过[DescribeDisks](/document/product/362/16315)接口查询。
         * @type {Array.<string> || null}
         */
        this.DiskIds = null;

        /**
         * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月云盘的购买时长。如果在该参数中指定CurInstanceDeadline，则会按对齐到子机到期时间来续费。如果是批量续费询价，该参数与Disks参数一一对应，元素数量需保持一致。
         * @type {Array.<DiskChargePrepaid> || null}
         */
        this.DiskChargePrepaids = null;

        /**
         * 指定云盘新的到期时间，形式如：2017-12-17 00:00:00。参数`NewDeadline`和`DiskChargePrepaids`是两种指定询价时长的方式，两者必传一个。
         * @type {string || null}
         */
        this.NewDeadline = null;

        /**
         * 云盘所属项目ID。 如传入则仅用于鉴权。
         * @type {number || null}
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
        this.DiskIds = params.DiskIds || null;

        if (params.DiskChargePrepaids) {
            this.DiskChargePrepaids = new Array();
            for (let z in params.DiskChargePrepaids) {
                let obj = new DiskChargePrepaid();
                obj.deserialize(params.DiskChargePrepaids[z]);
                this.DiskChargePrepaids.push(obj);
            }
        }
        this.NewDeadline = params.NewDeadline || null;
        this.ProjectId = params.ProjectId || null;

    }
}

/**
 * InquiryPriceRenewDisks返回参数结构体
 * @class
 */
class InquiryPriceRenewDisksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 描述了续费云盘的价格。
         * @type {PrepayPrice || null}
         */
        this.DiskPrice = null;

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

        if (params.DiskPrice) {
            let obj = new PrepayPrice();
            obj.deserialize(params.DiskPrice)
            this.DiskPrice = obj;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 描述预付费或后付费云盘的价格。
 * @class
 */
class Price extends  AbstractModel {
    constructor(){
        super();

        /**
         * 预付费云盘预支费用的原价，单位：元。
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * 预付费云盘预支费用的折扣价，单位：元。
         * @type {number || null}
         */
        this.DiscountPrice = null;

        /**
         * 后付费云盘的单价，单位：元。
         * @type {number || null}
         */
        this.UnitPrice = null;

        /**
         * 后付费云盘的计价单元，取值范围：<br><li>HOUR：表示后付费云盘的计价单元是按小时计算。
         * @type {string || null}
         */
        this.ChargeUnit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginalPrice = params.OriginalPrice || null;
        this.DiscountPrice = params.DiscountPrice || null;
        this.UnitPrice = params.UnitPrice || null;
        this.ChargeUnit = params.ChargeUnit || null;

    }
}

/**
 * InquiryPriceCreateDisks返回参数结构体
 * @class
 */
class InquiryPriceCreateDisksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 描述了新购云盘的价格。
         * @type {Price || null}
         */
        this.DiskPrice = null;

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

        if (params.DiskPrice) {
            let obj = new Price();
            obj.deserialize(params.DiskPrice)
            this.DiskPrice = obj;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 云盘配置。
 * @class
 */
class DiskConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置是否可用。
         * @type {boolean || null}
         */
        this.Available = null;

        /**
         * 云盘介质类型。取值范围：<br><li>CLOUD_BASIC：表示普通云硬盘<br><li>CLOUD_PREMIUM：表示高性能云硬盘<br><li>CLOUD_SSD：SSD表示SSD云硬盘。
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 云盘类型。取值范围：<br><li>SYSTEM_DISK：表示系统盘<br><li>DATA_DISK：表示数据盘。
         * @type {string || null}
         */
        this.DiskUsage = null;

        /**
         * 付费模式。取值范围：<br><li>PREPAID：表示预付费，即包年包月<br><li>POSTPAID_BY_HOUR：表示后付费，即按量计费。
         * @type {string || null}
         */
        this.DiskChargeType = null;

        /**
         * 最大可配置云盘大小，单位GB。
         * @type {number || null}
         */
        this.MaxDiskSize = null;

        /**
         * 最小可配置云盘大小，单位GB。
         * @type {number || null}
         */
        this.MinDiskSize = null;

        /**
         * 所在[可用区](/document/api/213/9452#zone)。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 实例机型。
         * @type {string || null}
         */
        this.DeviceClass = null;

        /**
         * 实例机型系列。详见[实例类型](https://cloud.tencent.com/document/product/213/11518)
         * @type {string || null}
         */
        this.InstanceFamily = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Available = params.Available || null;
        this.DiskType = params.DiskType || null;
        this.DiskUsage = params.DiskUsage || null;
        this.DiskChargeType = params.DiskChargeType || null;
        this.MaxDiskSize = params.MaxDiskSize || null;
        this.MinDiskSize = params.MinDiskSize || null;
        this.Zone = params.Zone || null;
        this.DeviceClass = params.DeviceClass || null;
        this.InstanceFamily = params.InstanceFamily || null;

    }
}

/**
 * CreateSnapshot返回参数结构体
 * @class
 */
class CreateSnapshotResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新创建的快照ID。
         * @type {string || null}
         */
        this.SnapshotId = null;

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
        this.SnapshotId = params.SnapshotId || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DeleteSnapshots请求参数结构体
 * @class
 */
class DeleteSnapshotsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要删除的快照ID列表，可通过[DescribeSnapshots](/document/product/362/15647)查询。
         * @type {Array.<string> || null}
         */
        this.SnapshotIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SnapshotIds = params.SnapshotIds || null;

    }
}

/**
 * DescribeDiskConfigQuota请求参数结构体
 * @class
 */
class DescribeDiskConfigQuotaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询类别，取值范围。<br><li>INQUIRY_CBS_CONFIG：查询云盘配置列表<br><li>INQUIRY_CVM_CONFIG：查询云盘与实例搭配的配置列表。
         * @type {string || null}
         */
        this.InquiryType = null;

        /**
         * 查询一个或多个[可用区](/document/api/213/9452#zone)下的配置。
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * 付费模式。取值范围：<br><li>PREPAID：预付费<br><li>POSTPAID_BY_HOUR：后付费。
         * @type {string || null}
         */
        this.DiskChargeType = null;

        /**
         * 硬盘介质类型。取值范围：<br><li>CLOUD_BASIC：表示普通云硬盘<br><li>CLOUD_PREMIUM：表示高性能云硬盘<br><li>CLOUD_SSD：表示SSD云硬盘。
         * @type {Array.<string> || null}
         */
        this.DiskTypes = null;

        /**
         * 系统盘或数据盘。取值范围：<br><li>SYSTEM_DISK：表示系统盘<br><li>DATA_DISK：表示数据盘。
         * @type {string || null}
         */
        this.DiskUsage = null;

        /**
         * 按照实例机型系列过滤。实例机型系列形如：S1、I1、M1等。详见[实例类型](https://cloud.tencent.com/document/product/213/11518)
         * @type {Array.<string> || null}
         */
        this.InstanceFamilies = null;

        /**
         * 实例CPU核数。
         * @type {number || null}
         */
        this.CPU = null;

        /**
         * 实例内存大小。
         * @type {number || null}
         */
        this.Memory = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InquiryType = params.InquiryType || null;
        this.Zones = params.Zones || null;
        this.DiskChargeType = params.DiskChargeType || null;
        this.DiskTypes = params.DiskTypes || null;
        this.DiskUsage = params.DiskUsage || null;
        this.InstanceFamilies = params.InstanceFamilies || null;
        this.CPU = params.CPU || null;
        this.Memory = params.Memory || null;

    }
}

/**
 * ModifyDisksRenewFlag返回参数结构体
 * @class
 */
class ModifyDisksRenewFlagResponse extends  AbstractModel {
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
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 描述了实例的计费模式
 * @class
 */
class DiskChargePrepaid extends  AbstractModel {
    constructor(){
        super();

        /**
         * 购买云盘的时长，默认单位为月，取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 自动续费标识。取值范围：<br><li>NOTIFY_AND_AUTO_RENEW：通知过期且自动续费<br><li>NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费<br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费<br><br>默认取值：NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费。
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * 需要将云盘的到期时间与挂载的子机对齐时，可传入该参数。该参数表示子机当前的到期时间，此时Period如果传入，则表示子机需要续费的时长，云盘会自动按对齐到子机续费后的到期时间续费。
         * @type {string || null}
         */
        this.CurInstanceDeadline = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Period = params.Period || null;
        this.RenewFlag = params.RenewFlag || null;
        this.CurInstanceDeadline = params.CurInstanceDeadline || null;

    }
}

/**
 * InquiryPriceResizeDisk请求参数结构体
 * @class
 */
class InquiryPriceResizeDiskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云硬盘ID， 通过[DescribeDisks](/document/product/362/16315)接口查询。
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * 云硬盘扩容后的大小，单位为GB，不得小于当前云硬盘大小。云盘大小取值范围参见云硬盘[产品分类](/document/product/362/2353)的说明。
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 云盘所属项目ID。 如传入则仅用于鉴权。
         * @type {number || null}
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
        this.DiskId = params.DiskId || null;
        this.DiskSize = params.DiskSize || null;
        this.ProjectId = params.ProjectId || null;

    }
}

/**
 * ApplySnapshot返回参数结构体
 * @class
 */
class ApplySnapshotResponse extends  AbstractModel {
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
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeDisks返回参数结构体
 * @class
 */
class DescribeDisksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的云硬盘数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 云硬盘的详细信息列表。
         * @type {Array.<Disk> || null}
         */
        this.DiskSet = null;

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
        this.TotalCount = params.TotalCount || null;

        if (params.DiskSet) {
            this.DiskSet = new Array();
            for (let z in params.DiskSet) {
                let obj = new Disk();
                obj.deserialize(params.DiskSet[z]);
                this.DiskSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * ModifySnapshotAttribute返回参数结构体
 * @class
 */
class ModifySnapshotAttributeResponse extends  AbstractModel {
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
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 预付费订单的费用。
 * @class
 */
class PrepayPrice extends  AbstractModel {
    constructor(){
        super();

        /**
         * 预付费云盘或快照预支费用的原价，单位：元。
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * 预付费云盘或快照预支费用的折扣价，单位：元。
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
        this.OriginalPrice = params.OriginalPrice || null;
        this.DiscountPrice = params.DiscountPrice || null;

    }
}

/**
 * DeleteSnapshots返回参数结构体
 * @class
 */
class DeleteSnapshotsResponse extends  AbstractModel {
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
        this.RequestId = params.RequestId || null;

    }
}

/**
 * ModifyDisksRenewFlag请求参数结构体
 * @class
 */
class ModifyDisksRenewFlagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一个或多个待操作的云硬盘ID。
         * @type {Array.<string> || null}
         */
        this.DiskIds = null;

        /**
         * 云盘的续费标识。取值范围：<br><li>NOTIFY_AND_AUTO_RENEW：通知过期且自动续费<br><li>NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费<br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费。
         * @type {string || null}
         */
        this.RenewFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskIds = params.DiskIds || null;
        this.RenewFlag = params.RenewFlag || null;

    }
}

/**
 * 描述键值对过滤器，用于条件过滤查询。
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
 * InquiryPriceCreateDisks请求参数结构体
 * @class
 */
class InquiryPriceCreateDisksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云硬盘类型。取值范围：<br><li>普通云硬盘：CLOUD_BASIC<br><li>高性能云硬盘：CLOUD_PREMIUM<br><li>SSD云硬盘：CLOUD_SSD。
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 云硬盘大小，单位为GB。云盘大小取值范围参见云硬盘[产品分类](/document/product/362/2353)的说明。
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 云硬盘计费类型。<br><li>PREPAID：预付费，即包年包月<br><li>POSTPAID_BY_HOUR：按小时后付费
         * @type {string || null}
         */
        this.DiskChargeType = null;

        /**
         * 预付费模式，即包年包月相关参数设置。通过该参数指定包年包月云盘的购买时长、是否设置自动续费等属性。<br>创建预付费云盘该参数必传，创建按小时后付费云盘无需传该参数。
         * @type {DiskChargePrepaid || null}
         */
        this.DiskChargePrepaid = null;

        /**
         * 购买云盘的数量。不填则默认为1。
         * @type {number || null}
         */
        this.DiskCount = null;

        /**
         * 云盘所属项目ID。
         * @type {number || null}
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
        this.DiskType = params.DiskType || null;
        this.DiskSize = params.DiskSize || null;
        this.DiskChargeType = params.DiskChargeType || null;

        if (params.DiskChargePrepaid) {
            let obj = new DiskChargePrepaid();
            obj.deserialize(params.DiskChargePrepaid)
            this.DiskChargePrepaid = obj;
        }
        this.DiskCount = params.DiskCount || null;
        this.ProjectId = params.ProjectId || null;

    }
}

/**
 * DescribeSnapshots返回参数结构体
 * @class
 */
class DescribeSnapshotsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照的数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 快照的详情列表。
         * @type {Array.<Snapshot> || null}
         */
        this.SnapshotSet = null;

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
        this.TotalCount = params.TotalCount || null;

        if (params.SnapshotSet) {
            this.SnapshotSet = new Array();
            for (let z in params.SnapshotSet) {
                let obj = new Snapshot();
                obj.deserialize(params.SnapshotSet[z]);
                this.SnapshotSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 描述了快照的详细信息
 * @class
 */
class Snapshot extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照ID。
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * 快照所在的位置。
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * 创建此快照的云硬盘类型。取值范围：<br><li>SYSTEM_DISK：系统盘<br><li>DATA_DISK：数据盘。
         * @type {string || null}
         */
        this.DiskUsage = null;

        /**
         * 创建此快照的云硬盘ID。
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * 创建此快照的云硬盘大小，单位GB。
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 快照的状态。取值范围：<br><li>NORMAL：正常<br><li>CREATING：创建中<br><li>ROLLBACKING：回滚中<br><li>COPYING_FROM_REMOTE：跨地域复制快照拷贝中。
         * @type {string || null}
         */
        this.SnapshotState = null;

        /**
         * 快照名称，用户自定义的快照别名。调用[ModifySnapshotAttribute](/document/product/362/15650)可修改此字段。
         * @type {string || null}
         */
        this.SnapshotName = null;

        /**
         * 快照创建进度百分比，快照创建成功后此字段恒为100。
         * @type {number || null}
         */
        this.Percent = null;

        /**
         * 快照的创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 快照到期时间。如果快照为永久保留，此字段为空。
         * @type {string || null}
         */
        this.DeadlineTime = null;

        /**
         * 是否为加密盘创建的快照。取值范围：<br><li>true：该快照为加密盘创建的<br><li>false:非加密盘创建的快照。
         * @type {boolean || null}
         */
        this.Encrypt = null;

        /**
         * 是否为永久快照。取值范围：<br><li>true：永久快照<br><li>false：非永久快照。
         * @type {boolean || null}
         */
        this.IsPermanent = null;

        /**
         * 快照正在跨地域复制的目的地域，默认取值为[]。
         * @type {Array.<string> || null}
         */
        this.CopyingToRegions = null;

        /**
         * 是否为跨地域复制的快照。取值范围：<br><li>true：表示为跨地域复制的快照。<br><li>false:本地域的快照。
         * @type {boolean || null}
         */
        this.CopyFromRemote = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SnapshotId = params.SnapshotId || null;

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.DiskUsage = params.DiskUsage || null;
        this.DiskId = params.DiskId || null;
        this.DiskSize = params.DiskSize || null;
        this.SnapshotState = params.SnapshotState || null;
        this.SnapshotName = params.SnapshotName || null;
        this.Percent = params.Percent || null;
        this.CreateTime = params.CreateTime || null;
        this.DeadlineTime = params.DeadlineTime || null;
        this.Encrypt = params.Encrypt || null;
        this.IsPermanent = params.IsPermanent || null;
        this.CopyingToRegions = params.CopyingToRegions || null;
        this.CopyFromRemote = params.CopyFromRemote || null;

    }
}

/**
 * CreateDisks返回参数结构体
 * @class
 */
class CreateDisksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建的云硬盘ID列表。
         * @type {Array.<string> || null}
         */
        this.DiskIdSet = null;

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
        this.DiskIdSet = params.DiskIdSet || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * AttachDisks返回参数结构体
 * @class
 */
class AttachDisksResponse extends  AbstractModel {
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
        this.RequestId = params.RequestId || null;

    }
}

/**
 * RenewDisk请求参数结构体
 * @class
 */
class RenewDiskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月云盘的续费时长。<br>在云盘与挂载的实例一起续费的场景下，可以指定参数CurInstanceDeadline，此时云盘会按对齐到实例续费后的到期时间来续费。
         * @type {DiskChargePrepaid || null}
         */
        this.DiskChargePrepaid = null;

        /**
         * 云硬盘ID， 通过[DescribeDisks](/document/product/362/16315)接口查询。
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

        if (params.DiskChargePrepaid) {
            let obj = new DiskChargePrepaid();
            obj.deserialize(params.DiskChargePrepaid)
            this.DiskChargePrepaid = obj;
        }
        this.DiskId = params.DiskId || null;

    }
}

/**
 * 云盘操作日志。
 * @class
 */
class DiskOperationLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作者的UIN。
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 操作类型。取值范围：
CBS_OPERATION_ATTACH：挂载云硬盘
CBS_OPERATION_DETACH：解挂云硬盘
CBS_OPERATION_RENEW：续费
CBS_OPERATION_EXPAND：扩容
CBS_OPERATION_CREATE：创建
CBS_OPERATION_ISOLATE：隔离
CBS_OPERATION_MODIFY：修改云硬盘属性
ASP_OPERATION_BIND：关联定期快照策略
ASP_OPERATION_UNBIND：取消关联定期快照策略
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 操作的云盘ID。
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * 操作的状态。取值范围：
SUCCESS :表示操作成功 
FAILED :表示操作失败 
PROCESSING :表示操作中。
         * @type {string || null}
         */
        this.OperationState = null;

        /**
         * 开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Operator = params.Operator || null;
        this.Operation = params.Operation || null;
        this.DiskId = params.DiskId || null;
        this.OperationState = params.OperationState || null;
        this.StartTime = params.StartTime || null;
        this.EndTime = params.EndTime || null;

    }
}

/**
 * RenewDisk返回参数结构体
 * @class
 */
class RenewDiskResponse extends  AbstractModel {
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
        this.RequestId = params.RequestId || null;

    }
}

/**
 * CreateDisks请求参数结构体
 * @class
 */
class CreateDisksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 硬盘介质类型。取值范围：<br><li>CLOUD_BASIC：表示普通云硬盘<br><li>CLOUD_PREMIUM：表示高性能云硬盘<br><li>CLOUD_SSD：表示SSD云硬盘。
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 云硬盘计费类型。<br><li>PREPAID：预付费，即包年包月<br><li>POSTPAID_BY_HOUR：按小时后付费<br>各类型价格请参考云硬盘[价格总览](/document/product/362/2413)。
         * @type {string || null}
         */
        this.DiskChargeType = null;

        /**
         * 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目。若不指定项目，将在默认项目下进行创建。
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * 云盘显示名称。不传则默认为“未命名”。最大长度不能超60个字节。
         * @type {string || null}
         */
        this.DiskName = null;

        /**
         * 创建云硬盘数量，不传则默认为1。单次请求最多可创建的云盘数有限制，具体参见[云硬盘使用限制](https://cloud.tencent.com/doc/product/362/5145)。
         * @type {number || null}
         */
        this.DiskCount = null;

        /**
         * 预付费模式，即包年包月相关参数设置。通过该参数指定包年包月云盘的购买时长、是否设置自动续费等属性。<br>创建预付费云盘该参数必传，创建按小时后付费云盘无需传该参数。
         * @type {DiskChargePrepaid || null}
         */
        this.DiskChargePrepaid = null;

        /**
         * 云硬盘大小，单位为GB。<br><li>如果传入`SnapshotId`则可不传`DiskSize`，此时新建云盘的大小为快照大小<br><li>如果传入`SnapshotId`同时传入`DiskSize`，则云盘大小必须大于或等于快照大小<br><li>云盘大小取值范围参见云硬盘[产品分类](/document/product/362/2353)的说明。
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 快照ID，如果传入则根据此快照创建云硬盘，快照类型必须为数据盘快照，可通过[DescribeSnapshots](/document/product/362/15647)接口查询快照，见输出参数DiskUsage解释。
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * 传入该参数用于创建加密云盘，取值固定为ENCRYPT。
         * @type {string || null}
         */
        this.Encrypt = null;

        /**
         * 云盘绑定的标签。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 可选参数，不传该参数则仅执行挂载操作。传入True时，新创建的云盘将设置为随云主机销毁模式，仅对按量计费云硬盘有效。
         * @type {boolean || null}
         */
        this.DeleteWithInstance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskType = params.DiskType || null;
        this.DiskChargeType = params.DiskChargeType || null;

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.DiskName = params.DiskName || null;
        this.DiskCount = params.DiskCount || null;

        if (params.DiskChargePrepaid) {
            let obj = new DiskChargePrepaid();
            obj.deserialize(params.DiskChargePrepaid)
            this.DiskChargePrepaid = obj;
        }
        this.DiskSize = params.DiskSize || null;
        this.SnapshotId = params.SnapshotId || null;
        this.ClientToken = params.ClientToken || null;
        this.Encrypt = params.Encrypt || null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.DeleteWithInstance = params.DeleteWithInstance || null;

    }
}

/**
 * AttachDisks请求参数结构体
 * @class
 */
class AttachDisksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 将要被挂载的弹性云盘ID。通过[DescribeDisks](/document/product/362/16315)接口查询。单次最多可挂载10块弹性云盘。
         * @type {Array.<string> || null}
         */
        this.DiskIds = null;

        /**
         * 云服务器实例ID。云盘将被挂载到此云服务器上，通过[DescribeInstances](/document/product/213/15728)接口查询。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 可选参数，不传该参数则仅执行挂载操作。传入`True`时，会在挂载成功后将云硬盘设置为随云主机销毁模式，仅对按量计费云硬盘有效。
         * @type {boolean || null}
         */
        this.DeleteWithInstance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskIds = params.DiskIds || null;
        this.InstanceId = params.InstanceId || null;
        this.DeleteWithInstance = params.DeleteWithInstance || null;

    }
}

/**
 * DescribeDiskOperationLogs请求参数结构体
 * @class
 */
class DescribeDiskOperationLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件。支持以下条件：
<li>disk-id - Array of String - 是否必填：是 - 按云盘ID过滤，每个请求最多可指定10个云盘ID。
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
 * 标签。
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签健。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 标签值。
         * @type {string || null}
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
        this.Key = params.Key || null;
        this.Value = params.Value || null;

    }
}

/**
 * DescribeSnapshots请求参数结构体
 * @class
 */
class DescribeSnapshotsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要查询快照的ID列表。参数不支持同时指定`SnapshotIds`和`Filters`。
         * @type {Array.<string> || null}
         */
        this.SnapshotIds = null;

        /**
         * 过滤条件。参数不支持同时指定`SnapshotIds`和`Filters`。<br><li>snapshot-id - Array of String - 是否必填：否 -（过滤条件）按照快照的ID过滤。快照ID形如：`snap-11112222`。<br><li>snapshot-name - Array of String - 是否必填：否 -（过滤条件）按照快照名称过滤。<br><li>snapshot-state - Array of String - 是否必填：否 -（过滤条件）按照快照状态过滤。 (NORMAL：正常 | CREATING：创建中 | ROLLBACKING：回滚中。)<br><li>disk-usage - Array of String - 是否必填：否 -（过滤条件）按创建快照的云盘类型过滤。 (SYSTEM_DISK：代表系统盘 | DATA_DISK：代表数据盘。)<br><li>project-id  - Array of String - 是否必填：否 -（过滤条件）按云硬盘所属项目ID过滤。<br><li>disk-id  - Array of String - 是否必填：否 -（过滤条件）按照创建快照的云硬盘ID过滤。<br><li>zone - Array of String - 是否必填：否 -（过滤条件）按照[可用区](/document/api/213/9452#zone)过滤。<br><li>encrypt - Array of String - 是否必填：否 -（过滤条件）按是否加密盘快照过滤。 (TRUE：表示加密盘快照 | FALSE：表示非加密盘快照。)
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考API[简介](/document/product/362/15633)中的相关小节。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](/document/product/362/15633)中的相关小节。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 输出云盘列表的排列顺序。取值范围：<br><li>ASC：升序排列<br><li>DESC：降序排列。
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 快照列表排序的依据字段。取值范围：<br><li>CREATE_TIME：依据快照的创建时间排序<br>默认按创建时间排序。
         * @type {string || null}
         */
        this.OrderField = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SnapshotIds = params.SnapshotIds || null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;
        this.Order = params.Order || null;
        this.OrderField = params.OrderField || null;

    }
}

/**
 * TerminateDisks返回参数结构体
 * @class
 */
class TerminateDisksResponse extends  AbstractModel {
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
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeDiskConfigQuota返回参数结构体
 * @class
 */
class DescribeDiskConfigQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云盘配置列表。
         * @type {Array.<DiskConfig> || null}
         */
        this.DiskConfigSet = null;

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

        if (params.DiskConfigSet) {
            this.DiskConfigSet = new Array();
            for (let z in params.DiskConfigSet) {
                let obj = new DiskConfig();
                obj.deserialize(params.DiskConfigSet[z]);
                this.DiskConfigSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * ModifyDiskAttributes请求参数结构体
 * @class
 */
class ModifyDiskAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一个或多个待操作的云硬盘ID。如果传入多个云盘ID，仅支持所有云盘修改为同一属性。
         * @type {Array.<string> || null}
         */
        this.DiskIds = null;

        /**
         * 新的云硬盘项目ID，只支持修改弹性云盘的项目ID。通过[DescribeProject](/document/api/378/4400)接口查询可用项目及其ID。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 新的云硬盘名称。
         * @type {string || null}
         */
        this.DiskName = null;

        /**
         * 是否为弹性云盘，FALSE表示非弹性云盘，TRUE表示弹性云盘。仅支持非弹性云盘修改为弹性云盘。
         * @type {boolean || null}
         */
        this.Portable = null;

        /**
         * 成功挂载到云主机后该云硬盘是否随云主机销毁，TRUE表示随云主机销毁，FALSE表示不随云主机销毁。仅支持按量计费云硬盘数据盘。
         * @type {boolean || null}
         */
        this.DeleteWithInstance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskIds = params.DiskIds || null;
        this.ProjectId = params.ProjectId || null;
        this.DiskName = params.DiskName || null;
        this.Portable = params.Portable || null;
        this.DeleteWithInstance = params.DeleteWithInstance || null;

    }
}

/**
 * CreateSnapshot请求参数结构体
 * @class
 */
class CreateSnapshotRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要创建快照的云硬盘ID，可通过[DescribeDisks](/document/product/362/16315)接口查询。
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * 快照名称，不传则新快照名称默认为“未命名”。
         * @type {string || null}
         */
        this.SnapshotName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskId = params.DiskId || null;
        this.SnapshotName = params.SnapshotName || null;

    }
}

/**
 * 描述一个实例已挂载和可挂载数据盘的数量。
 * @class
 */
class AttachDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例已挂载数据盘的数量。
         * @type {number || null}
         */
        this.AttachedDiskCount = null;

        /**
         * 实例最大可挂载数据盘的数量。
         * @type {number || null}
         */
        this.MaxAttachCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = params.InstanceId || null;
        this.AttachedDiskCount = params.AttachedDiskCount || null;
        this.MaxAttachCount = params.MaxAttachCount || null;

    }
}

/**
 * InquiryPriceResizeDisk返回参数结构体
 * @class
 */
class InquiryPriceResizeDiskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 描述了扩容云盘的价格。
         * @type {PrepayPrice || null}
         */
        this.DiskPrice = null;

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

        if (params.DiskPrice) {
            let obj = new PrepayPrice();
            obj.deserialize(params.DiskPrice)
            this.DiskPrice = obj;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeInstancesDiskNum返回参数结构体
 * @class
 */
class DescribeInstancesDiskNumResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 各个云服务器已挂载和可挂载弹性云盘的数量。
         * @type {Array.<AttachDetail> || null}
         */
        this.AttachDetail = null;

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

        if (params.AttachDetail) {
            this.AttachDetail = new Array();
            for (let z in params.AttachDetail) {
                let obj = new AttachDetail();
                obj.deserialize(params.AttachDetail[z]);
                this.AttachDetail.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DetachDisks返回参数结构体
 * @class
 */
class DetachDisksResponse extends  AbstractModel {
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
        this.RequestId = params.RequestId || null;

    }
}

/**
 * ResizeDisk返回参数结构体
 * @class
 */
class ResizeDiskResponse extends  AbstractModel {
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
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 描述了云硬盘的详细信息
 * @class
 */
class Disk extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云硬盘ID。
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * 云硬盘类型。取值范围：<br><li>SYSTEM_DISK：系统盘<br><li>DATA_DISK：数据盘。
         * @type {string || null}
         */
        this.DiskUsage = null;

        /**
         * 付费模式。取值范围：<br><li>PREPAID：预付费，即包年包月<br><li>POSTPAID_BY_HOUR：后付费，即按量计费。
         * @type {string || null}
         */
        this.DiskChargeType = null;

        /**
         * 是否为弹性云盘，false表示非弹性云盘，true表示弹性云盘。
         * @type {boolean || null}
         */
        this.Portable = null;

        /**
         * 云硬盘所在的位置。
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * 云盘是否具备创建快照的能力。取值范围：<br><li>false表示不具备<br><li>true表示具备。
         * @type {boolean || null}
         */
        this.SnapshotAbility = null;

        /**
         * 云硬盘名称。
         * @type {string || null}
         */
        this.DiskName = null;

        /**
         * 云硬盘大小，单位GB。
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 云盘状态。取值范围：<br><li>UNATTACHED：未挂载<br><li>ATTACHING：挂载中<br><li>ATTACHED：已挂载<br><li>DETACHING：解挂中<br><li>EXPANDING：扩容中<br><li>ROLLBACKING：回滚中。
         * @type {string || null}
         */
        this.DiskState = null;

        /**
         * 云盘介质类型。取值范围：<br><li>CLOUD_BASIC：表示普通云硬<br><li>CLOUD_PREMIUM：表示高性能云硬盘<br><li>CLOUD_SSD：SSD表示SSD云硬盘。
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 云盘是否挂载到云主机上。取值范围：<br><li>false:表示未挂载<br><li>true:表示已挂载。
         * @type {boolean || null}
         */
        this.Attached = null;

        /**
         * 云硬盘挂载的云主机ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 云硬盘的创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 云硬盘的到期时间。
         * @type {string || null}
         */
        this.DeadlineTime = null;

        /**
         * 云盘是否处于快照回滚状态。取值范围：<br><li>false:表示不处于快照回滚状态<br><li>true:表示处于快照回滚状态。
         * @type {boolean || null}
         */
        this.Rollbacking = null;

        /**
         * 云盘快照回滚的进度。
         * @type {number || null}
         */
        this.RollbackPercent = null;

        /**
         * 云盘是否为加密盘。取值范围：<br><li>false:表示非加密盘<br><li>true:表示加密盘。
         * @type {boolean || null}
         */
        this.Encrypt = null;

        /**
         * 云盘已挂载到子机，且子机与云盘都是包年包月。<br><li>true：子机设置了自动续费标识，但云盘未设置<br><li>false：云盘自动续费标识正常。
         * @type {boolean || null}
         */
        this.AutoRenewFlagError = null;

        /**
         * 自动续费标识。取值范围：<br><li>NOTIFY_AND_AUTO_RENEW：通知过期且自动续费<br><li>NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费<br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费。
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * 在云盘已挂载到实例，且实例与云盘都是包年包月的条件下，此字段才有意义。<br><li>true:云盘到期时间早于实例。<br><li>false：云盘到期时间晚于实例。
         * @type {boolean || null}
         */
        this.DeadlineError = null;

        /**
         * 判断预付费的云盘是否支持主动退还。<br><li>true:支持主动退还<br><li>false:不支持主动退还。
         * @type {boolean || null}
         */
        this.IsReturnable = null;

        /**
         * 预付费云盘在不支持主动退还的情况下，该参数表明不支持主动退还的具体原因。取值范围：<br><li>1：云硬盘已经退还<br><li>2：云硬盘已过期<br><li>3：云盘不支持退还<br><li>8：超过可退还数量的限制。
         * @type {number || null}
         */
        this.ReturnFailCode = null;

        /**
         * 云盘关联的定期快照ID。只有在调用DescribeDisks接口时，入参ReturnBindAutoSnapshotPolicy取值为TRUE才会返回该参数。
         * @type {Array.<string> || null}
         */
        this.AutoSnapshotPolicyIds = null;

        /**
         * 与云盘绑定的标签，云盘未绑定标签则取值为空。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 云盘是否与挂载的实例一起销毁。<br><li>true:销毁实例时会同时销毁云盘，只支持按小时后付费云盘。<br><li>false：销毁实例时不销毁云盘。
         * @type {boolean || null}
         */
        this.DeleteWithInstance = null;

        /**
         * 当前时间距离盘到期的天数（仅对预付费盘有意义）。
         * @type {number || null}
         */
        this.DifferDaysOfDeadline = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskId = params.DiskId || null;
        this.DiskUsage = params.DiskUsage || null;
        this.DiskChargeType = params.DiskChargeType || null;
        this.Portable = params.Portable || null;

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.SnapshotAbility = params.SnapshotAbility || null;
        this.DiskName = params.DiskName || null;
        this.DiskSize = params.DiskSize || null;
        this.DiskState = params.DiskState || null;
        this.DiskType = params.DiskType || null;
        this.Attached = params.Attached || null;
        this.InstanceId = params.InstanceId || null;
        this.CreateTime = params.CreateTime || null;
        this.DeadlineTime = params.DeadlineTime || null;
        this.Rollbacking = params.Rollbacking || null;
        this.RollbackPercent = params.RollbackPercent || null;
        this.Encrypt = params.Encrypt || null;
        this.AutoRenewFlagError = params.AutoRenewFlagError || null;
        this.RenewFlag = params.RenewFlag || null;
        this.DeadlineError = params.DeadlineError || null;
        this.IsReturnable = params.IsReturnable || null;
        this.ReturnFailCode = params.ReturnFailCode || null;
        this.AutoSnapshotPolicyIds = params.AutoSnapshotPolicyIds || null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.DeleteWithInstance = params.DeleteWithInstance || null;
        this.DifferDaysOfDeadline = params.DifferDaysOfDeadline || null;

    }
}

/**
 * ApplySnapshot请求参数结构体
 * @class
 */
class ApplySnapshotRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照ID, 可通过[DescribeSnapshots](/document/product/362/15647)查询。
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * 快照原云硬盘ID，可通过[DescribeDisks](/document/product/362/16315)接口查询。
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
        this.SnapshotId = params.SnapshotId || null;
        this.DiskId = params.DiskId || null;

    }
}

module.exports = {
    DetachDisksRequest: DetachDisksRequest,
    DescribeDiskOperationLogsResponse: DescribeDiskOperationLogsResponse,
    ResizeDiskRequest: ResizeDiskRequest,
    ModifyDiskAttributesResponse: ModifyDiskAttributesResponse,
    TerminateDisksRequest: TerminateDisksRequest,
    DescribeDisksRequest: DescribeDisksRequest,
    DescribeInstancesDiskNumRequest: DescribeInstancesDiskNumRequest,
    Placement: Placement,
    ModifySnapshotAttributeRequest: ModifySnapshotAttributeRequest,
    InquiryPriceRenewDisksRequest: InquiryPriceRenewDisksRequest,
    InquiryPriceRenewDisksResponse: InquiryPriceRenewDisksResponse,
    Price: Price,
    InquiryPriceCreateDisksResponse: InquiryPriceCreateDisksResponse,
    DiskConfig: DiskConfig,
    CreateSnapshotResponse: CreateSnapshotResponse,
    DeleteSnapshotsRequest: DeleteSnapshotsRequest,
    DescribeDiskConfigQuotaRequest: DescribeDiskConfigQuotaRequest,
    ModifyDisksRenewFlagResponse: ModifyDisksRenewFlagResponse,
    DiskChargePrepaid: DiskChargePrepaid,
    InquiryPriceResizeDiskRequest: InquiryPriceResizeDiskRequest,
    ApplySnapshotResponse: ApplySnapshotResponse,
    DescribeDisksResponse: DescribeDisksResponse,
    ModifySnapshotAttributeResponse: ModifySnapshotAttributeResponse,
    PrepayPrice: PrepayPrice,
    DeleteSnapshotsResponse: DeleteSnapshotsResponse,
    ModifyDisksRenewFlagRequest: ModifyDisksRenewFlagRequest,
    Filter: Filter,
    InquiryPriceCreateDisksRequest: InquiryPriceCreateDisksRequest,
    DescribeSnapshotsResponse: DescribeSnapshotsResponse,
    Snapshot: Snapshot,
    CreateDisksResponse: CreateDisksResponse,
    AttachDisksResponse: AttachDisksResponse,
    RenewDiskRequest: RenewDiskRequest,
    DiskOperationLog: DiskOperationLog,
    RenewDiskResponse: RenewDiskResponse,
    CreateDisksRequest: CreateDisksRequest,
    AttachDisksRequest: AttachDisksRequest,
    DescribeDiskOperationLogsRequest: DescribeDiskOperationLogsRequest,
    Tag: Tag,
    DescribeSnapshotsRequest: DescribeSnapshotsRequest,
    TerminateDisksResponse: TerminateDisksResponse,
    DescribeDiskConfigQuotaResponse: DescribeDiskConfigQuotaResponse,
    ModifyDiskAttributesRequest: ModifyDiskAttributesRequest,
    CreateSnapshotRequest: CreateSnapshotRequest,
    AttachDetail: AttachDetail,
    InquiryPriceResizeDiskResponse: InquiryPriceResizeDiskResponse,
    DescribeInstancesDiskNumResponse: DescribeInstancesDiskNumResponse,
    DetachDisksResponse: DetachDisksResponse,
    ResizeDiskResponse: ResizeDiskResponse,
    Disk: Disk,
    ApplySnapshotRequest: ApplySnapshotRequest,

}
