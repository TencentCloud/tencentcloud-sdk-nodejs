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
 * CreateRecord请求参数结构体
 * @class
 */
class CreateRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 记录类型，通过 API 记录类型获得，大写英文，比如：A 。
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * 记录线路，通过 API 记录线路获得，中文，比如：默认。
         * @type {string || null}
         */
        this.RecordLine = null;

        /**
         * 记录值，如 IP : 200.200.200.200， CNAME : cname.dnspod.com.， MX : mail.dnspod.com.。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
         * @type {number || null}
         */
        this.DomainId = null;

        /**
         * 主机记录，如 www，如果不传，默认为 @。
         * @type {string || null}
         */
        this.SubDomain = null;

        /**
         * 线路的 ID，通过 API 记录线路获得，英文字符串，比如：10=1。参数RecordLineId优先级高于RecordLine，如果同时传递二者，优先使用RecordLineId参数。
         * @type {string || null}
         */
        this.RecordLineId = null;

        /**
         * MX 优先级，当记录类型是 MX 时有效，范围1-20，MX 记录时必选。
         * @type {number || null}
         */
        this.MX = null;

        /**
         * TTL，范围1-604800，不同等级域名最小值不同。
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * 权重信息，0到100的整数。仅企业 VIP 域名可用，0 表示关闭，不传该参数，表示不设置权重信息。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 记录初始状态，取值范围为 ENABLE 和 DISABLE 。默认为 ENABLE ，如果传入 DISABLE，解析不会生效，也不会验证负载均衡的限制。
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
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.RecordLine = 'RecordLine' in params ? params.RecordLine : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;
        this.RecordLineId = 'RecordLineId' in params ? params.RecordLineId : null;
        this.MX = 'MX' in params ? params.MX : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeSnapshotRollbackResult返回参数结构体
 * @class
 */
class DescribeSnapshotRollbackResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照所属域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 回滚剩余时间（分钟）
         * @type {number || null}
         */
        this.LeftMinutes = null;

        /**
         * 回滚进度百分比
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 快照 ID
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * 回滚状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 快照回滚任务 ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 成功数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Success = null;

        /**
         * 失败数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Failed = null;

        /**
         * 总数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 失败详细信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SnapshotRecord> || null}
         */
        this.FailedRecordList = null;

        /**
         * 快照的下载地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CosUrl = null;

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
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.LeftMinutes = 'LeftMinutes' in params ? params.LeftMinutes : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Success = 'Success' in params ? params.Success : null;
        this.Failed = 'Failed' in params ? params.Failed : null;
        this.Total = 'Total' in params ? params.Total : null;

        if (params.FailedRecordList) {
            this.FailedRecordList = new Array();
            for (let z in params.FailedRecordList) {
                let obj = new SnapshotRecord();
                obj.deserialize(params.FailedRecordList[z]);
                this.FailedRecordList.push(obj);
            }
        }
        this.CosUrl = 'CosUrl' in params ? params.CosUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DownloadSnapshot请求参数结构体
 * @class
 */
class DownloadSnapshotRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 快照记录 ID
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * 查看任务详情返回结构
 * @class
 */
class DescribeBatchTaskDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 见BatchRecordInfo
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BatchRecordInfo> || null}
         */
        this.RecordList = null;

        /**
         * 任务编号
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名等级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DomainGrade = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 该条任务运行状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 操作类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 域名ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RecordList) {
            this.RecordList = new Array();
            for (let z in params.RecordList) {
                let obj = new BatchRecordInfo();
                obj.deserialize(params.RecordList[z]);
                this.RecordList.push(obj);
            }
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainGrade = 'DomainGrade' in params ? params.DomainGrade : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * ModifyVasAutoRenewStatus返回参数结构体
 * @class
 */
class ModifyVasAutoRenewStatusResponse extends  AbstractModel {
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
 * RollbackSnapshot请求参数结构体
 * @class
 */
class RollbackSnapshotRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 快照记录 ID
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * DeleteDomainAlias返回参数结构体
 * @class
 */
class DeleteDomainAliasResponse extends  AbstractModel {
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
 * DescribeVASStatistic请求参数结构体
 * @class
 */
class DescribeVASStatisticRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名ID
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * DeleteDomainBatch返回参数结构体
 * @class
 */
class DeleteDomainBatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID
         * @type {number || null}
         */
        this.JobId = null;

        /**
         * 任务详情数组
         * @type {Array.<DeleteDomainBatchDetail> || null}
         */
        this.DetailList = null;

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
        this.JobId = 'JobId' in params ? params.JobId : null;

        if (params.DetailList) {
            this.DetailList = new Array();
            for (let z in params.DetailList) {
                let obj = new DeleteDomainBatchDetail();
                obj.deserialize(params.DetailList[z]);
                this.DetailList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 解析记录分组信息
 * @class
 */
class RecordGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分组 ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 分组名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 分组类型：system-系统；user-用户
         * @type {string || null}
         */
        this.GroupType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupType = 'GroupType' in params ? params.GroupType : null;

    }
}

/**
 * ModifySubdomainStatus请求参数结构体
 * @class
 */
class ModifySubdomainStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 记录类型。允许的值为A、CNAME、MX、TXT、NS、AAAA、SPF、SRV、CAA、URL、URL1。若要传多个，用英文逗号分隔，例如A,TXT,CNAME。
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * 记录状态。允许的值为disable。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
         * @type {number || null}
         */
        this.DomainId = null;

        /**
         * 主机记录，如 www，如果不传，默认为 @。
         * @type {string || null}
         */
        this.SubDomain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;

    }
}

/**
 * CreateRecordBatch返回参数结构体
 * @class
 */
class CreateRecordBatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量添加域名信息
         * @type {Array.<CreateRecordBatchDetail> || null}
         */
        this.DetailList = null;

        /**
         * 批量任务的ID
         * @type {number || null}
         */
        this.JobId = null;

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

        if (params.DetailList) {
            this.DetailList = new Array();
            for (let z in params.DetailList) {
                let obj = new CreateRecordBatchDetail();
                obj.deserialize(params.DetailList[z]);
                this.DetailList.push(obj);
            }
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSnapshotList返回参数结构体
 * @class
 */
class DescribeSnapshotListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页信息
         * @type {SnapshotPageInfo || null}
         */
        this.Info = null;

        /**
         * 快照列表
         * @type {Array.<SnapshotInfo> || null}
         */
        this.SnapshotList = null;

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

        if (params.Info) {
            let obj = new SnapshotPageInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }

        if (params.SnapshotList) {
            this.SnapshotList = new Array();
            for (let z in params.SnapshotList) {
                let obj = new SnapshotInfo();
                obj.deserialize(params.SnapshotList[z]);
                this.SnapshotList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 批量添加域名任务中的记录信息
 * @class
 */
class CreateDomainBatchRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子域名(主机记录)。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubDomain = null;

        /**
         * 记录类型, 详见 DescribeRecordType 接口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * 解析记录的线路，详见 DescribeRecordLineList 接口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RecordLine = null;

        /**
         * 记录值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 记录的 TTL 值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * 记录添加状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 操作类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 此条记录在列表中的ID
         * @type {number || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.RecordLine = 'RecordLine' in params ? params.RecordLine : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * 域名解析量统计查询信息
 * @class
 */
class DomainAnalyticsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * DATE:按天维度统计 HOUR:按小时维度统计
         * @type {string || null}
         */
        this.DnsFormat = null;

        /**
         * 当前统计周期解析量总计
         * @type {number || null}
         */
        this.DnsTotal = null;

        /**
         * 当前查询的域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 当前统计周期开始时间
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 当前统计周期结束时间
         * @type {string || null}
         */
        this.EndDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DnsFormat = 'DnsFormat' in params ? params.DnsFormat : null;
        this.DnsTotal = 'DnsTotal' in params ? params.DnsTotal : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;

    }
}

/**
 * ModifyRecordGroup请求参数结构体
 * @class
 */
class ModifyRecordGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 分组名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 要修改的分组 ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * DescribeVASStatistic返回参数结构体
 * @class
 */
class DescribeVASStatisticResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 增值服务用量列表
         * @type {Array.<VASStatisticItem> || null}
         */
        this.VASList = null;

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

        if (params.VASList) {
            this.VASList = new Array();
            for (let z in params.VASList) {
                let obj = new VASStatisticItem();
                obj.deserialize(params.VASList[z]);
                this.VASList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBatchTask请求参数结构体
 * @class
 */
class DescribeBatchTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID。操作批量接口时会返回JobId
         * @type {number || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

/**
 * 当前统计维度解析量小计
 * @class
 */
class DomainAnalyticsDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前统计维度解析量小计
         * @type {number || null}
         */
        this.Num = null;

        /**
         * 按天统计时，为统计日期
         * @type {string || null}
         */
        this.DateKey = null;

        /**
         * 按小时统计时，为统计的当前时间的小时数(0-23)，例：HourKey为23时，统计周期为22点-23点的解析量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HourKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Num = 'Num' in params ? params.Num : null;
        this.DateKey = 'DateKey' in params ? params.DateKey : null;
        this.HourKey = 'HourKey' in params ? params.HourKey : null;

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
 * 键值对
 * @class
 */
class KeyValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 键
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 值
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DeleteRecordGroup请求参数结构体
 * @class
 */
class DeleteRecordGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 分组 ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * PayOrderWithBalance返回参数结构体
 * @class
 */
class PayOrderWithBalanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 此次操作支付成功的订单id数组
         * @type {Array.<string> || null}
         */
        this.DealIdList = null;

        /**
         * 此次操作支付成功的大订单号数组
         * @type {Array.<string> || null}
         */
        this.BigDealIdList = null;

        /**
         * 此次操作支付成功的订单号数组
         * @type {Array.<string> || null}
         */
        this.DealNameList = null;

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
        this.DealIdList = 'DealIdList' in params ? params.DealIdList : null;
        this.BigDealIdList = 'BigDealIdList' in params ? params.BigDealIdList : null;
        this.DealNameList = 'DealNameList' in params ? params.DealNameList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDomain返回参数结构体
 * @class
 */
class DescribeDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名信息
         * @type {DomainInfo || null}
         */
        this.DomainInfo = null;

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

        if (params.DomainInfo) {
            let obj = new DomainInfo();
            obj.deserialize(params.DomainInfo)
            this.DomainInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSnapshotList请求参数结构体
 * @class
 */
class DescribeSnapshotListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * DescribePackageDetail返回参数结构体
 * @class
 */
class DescribePackageDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 套餐配置详情
         * @type {Array.<PackageDetailItem> || null}
         */
        this.Info = null;

        /**
         * 套餐代码列表
         * @type {Array.<string> || null}
         */
        this.LevelMap = null;

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

        if (params.Info) {
            this.Info = new Array();
            for (let z in params.Info) {
                let obj = new PackageDetailItem();
                obj.deserialize(params.Info[z]);
                this.Info.push(obj);
            }
        }
        this.LevelMap = 'LevelMap' in params ? params.LevelMap : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRecordLineList返回参数结构体
 * @class
 */
class DescribeRecordLineListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 线路列表。
         * @type {Array.<LineInfo> || null}
         */
        this.LineList = null;

        /**
         * 线路分组列表。
         * @type {Array.<LineGroupInfo> || null}
         */
        this.LineGroupList = null;

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

        if (params.LineList) {
            this.LineList = new Array();
            for (let z in params.LineList) {
                let obj = new LineInfo();
                obj.deserialize(params.LineList[z]);
                this.LineList.push(obj);
            }
        }

        if (params.LineGroupList) {
            this.LineGroupList = new Array();
            for (let z in params.LineGroupList) {
                let obj = new LineGroupInfo();
                obj.deserialize(params.LineGroupList[z]);
                this.LineGroupList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 快照列表分页信息
 * @class
 */
class SnapshotPageInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照总数
         * @type {number || null}
         */
        this.Total = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Total = 'Total' in params ? params.Total : null;

    }
}

/**
 * 域名详情
 * @class
 */
class DomainInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名ID
         * @type {number || null}
         */
        this.DomainId = null;

        /**
         * 域名状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 域名套餐等级
         * @type {string || null}
         */
        this.Grade = null;

        /**
         * 域名分组ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 是否星标域名
         * @type {string || null}
         */
        this.IsMark = null;

        /**
         * TTL(DNS记录缓存时间)
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * cname加速启用状态
         * @type {string || null}
         */
        this.CnameSpeedup = null;

        /**
         * 域名备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 域名Punycode
         * @type {string || null}
         */
        this.Punycode = null;

        /**
         * 域名DNS状态
         * @type {string || null}
         */
        this.DnsStatus = null;

        /**
         * 域名的NS列表
         * @type {Array.<string> || null}
         */
        this.DnspodNsList = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名等级代号
         * @type {number || null}
         */
        this.GradeLevel = null;

        /**
         * 域名所属的用户ID
         * @type {number || null}
         */
        this.UserId = null;

        /**
         * 是否为付费域名
         * @type {string || null}
         */
        this.IsVip = null;

        /**
         * 域名所有者的账号
         * @type {string || null}
         */
        this.Owner = null;

        /**
         * 域名等级的描述
         * @type {string || null}
         */
        this.GradeTitle = null;

        /**
         * 域名创建时间
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * 最后操作时间
         * @type {string || null}
         */
        this.UpdatedOn = null;

        /**
         * 腾讯云账户Uin
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 域名实际使用的NS列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ActualNsList = null;

        /**
         * 域名的记录数量
         * @type {number || null}
         */
        this.RecordCount = null;

        /**
         * 域名所有者的账户昵称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OwnerNick = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Grade = 'Grade' in params ? params.Grade : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.IsMark = 'IsMark' in params ? params.IsMark : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.CnameSpeedup = 'CnameSpeedup' in params ? params.CnameSpeedup : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Punycode = 'Punycode' in params ? params.Punycode : null;
        this.DnsStatus = 'DnsStatus' in params ? params.DnsStatus : null;
        this.DnspodNsList = 'DnspodNsList' in params ? params.DnspodNsList : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.GradeLevel = 'GradeLevel' in params ? params.GradeLevel : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.IsVip = 'IsVip' in params ? params.IsVip : null;
        this.Owner = 'Owner' in params ? params.Owner : null;
        this.GradeTitle = 'GradeTitle' in params ? params.GradeTitle : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.UpdatedOn = 'UpdatedOn' in params ? params.UpdatedOn : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.ActualNsList = 'ActualNsList' in params ? params.ActualNsList : null;
        this.RecordCount = 'RecordCount' in params ? params.RecordCount : null;
        this.OwnerNick = 'OwnerNick' in params ? params.OwnerNick : null;

    }
}

/**
 * CreateDomainBatch请求参数结构体
 * @class
 */
class CreateDomainBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名数组
         * @type {Array.<string> || null}
         */
        this.DomainList = null;

        /**
         * 每个域名添加 @ 和 www 的 A 记录值，记录值为IP，如果不传此参数或者传空，将只添加域名，不添加记录。
         * @type {string || null}
         */
        this.RecordValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainList = 'DomainList' in params ? params.DomainList : null;
        this.RecordValue = 'RecordValue' in params ? params.RecordValue : null;

    }
}

/**
 * ModifyRecordGroup返回参数结构体
 * @class
 */
class ModifyRecordGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改的分组 ID
         * @type {number || null}
         */
        this.GroupId = null;

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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDomainShareInfo请求参数结构体
 * @class
 */
class DescribeDomainShareInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * 域名列表元素
 * @class
 */
class DomainListItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 系统分配给域名的唯一标识
         * @type {number || null}
         */
        this.DomainId = null;

        /**
         * 域名的原始格式
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 域名的状态，正常：ENABLE，暂停：PAUSE，封禁：SPAM
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 域名默认的解析记录默认TTL值
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * 是否开启CNAME加速，开启：ENABLE，未开启：DISABLE
         * @type {string || null}
         */
        this.CNAMESpeedup = null;

        /**
         * DNS 设置状态，错误：DNSERROR，正常：空字符串
         * @type {string || null}
         */
        this.DNSStatus = null;

        /**
         * 域名的套餐等级代码
         * @type {string || null}
         */
        this.Grade = null;

        /**
         * 域名所属的分组Id
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 是否开启搜索引擎推送优化，是：YES，否：NO
         * @type {string || null}
         */
        this.SearchEnginePush = null;

        /**
         * 域名备注说明
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 经过punycode编码后的域名格式
         * @type {string || null}
         */
        this.Punycode = null;

        /**
         * 系统为域名分配的有效DNS
         * @type {Array.<string> || null}
         */
        this.EffectiveDNS = null;

        /**
         * 域名套餐等级对应的序号
         * @type {number || null}
         */
        this.GradeLevel = null;

        /**
         * 套餐名称
         * @type {string || null}
         */
        this.GradeTitle = null;

        /**
         * 是否是付费套餐
         * @type {string || null}
         */
        this.IsVip = null;

        /**
         * 付费套餐开通时间
         * @type {string || null}
         */
        this.VipStartAt = null;

        /**
         * 付费套餐到期时间
         * @type {string || null}
         */
        this.VipEndAt = null;

        /**
         * 域名是否开通VIP自动续费，是：YES，否：NO，默认：DEFAULT
         * @type {string || null}
         */
        this.VipAutoRenew = null;

        /**
         * 域名下的记录数量
         * @type {number || null}
         */
        this.RecordCount = null;

        /**
         * 域名添加时间
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * 域名更新时间
         * @type {string || null}
         */
        this.UpdatedOn = null;

        /**
         * 域名所属账号
         * @type {string || null}
         */
        this.Owner = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.CNAMESpeedup = 'CNAMESpeedup' in params ? params.CNAMESpeedup : null;
        this.DNSStatus = 'DNSStatus' in params ? params.DNSStatus : null;
        this.Grade = 'Grade' in params ? params.Grade : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.SearchEnginePush = 'SearchEnginePush' in params ? params.SearchEnginePush : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Punycode = 'Punycode' in params ? params.Punycode : null;
        this.EffectiveDNS = 'EffectiveDNS' in params ? params.EffectiveDNS : null;
        this.GradeLevel = 'GradeLevel' in params ? params.GradeLevel : null;
        this.GradeTitle = 'GradeTitle' in params ? params.GradeTitle : null;
        this.IsVip = 'IsVip' in params ? params.IsVip : null;
        this.VipStartAt = 'VipStartAt' in params ? params.VipStartAt : null;
        this.VipEndAt = 'VipEndAt' in params ? params.VipEndAt : null;
        this.VipAutoRenew = 'VipAutoRenew' in params ? params.VipAutoRenew : null;
        this.RecordCount = 'RecordCount' in params ? params.RecordCount : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.UpdatedOn = 'UpdatedOn' in params ? params.UpdatedOn : null;
        this.Owner = 'Owner' in params ? params.Owner : null;

    }
}

/**
 * DeleteDomainBatch请求参数结构体
 * @class
 */
class DeleteDomainBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名数组
         * @type {Array.<string> || null}
         */
        this.DomainList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainList = 'DomainList' in params ? params.DomainList : null;

    }
}

/**
 * DescribeRecordType返回参数结构体
 * @class
 */
class DescribeRecordTypeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录类型列表
         * @type {Array.<string> || null}
         */
        this.TypeList = null;

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
        this.TypeList = 'TypeList' in params ? params.TypeList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDomainRemark返回参数结构体
 * @class
 */
class ModifyDomainRemarkResponse extends  AbstractModel {
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
 * DeleteSnapshot请求参数结构体
 * @class
 */
class DeleteSnapshotRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 快照记录 ID
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * DescribeDomainAliasList返回参数结构体
 * @class
 */
class DescribeDomainAliasListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名别名列表
         * @type {Array.<DomainAliasInfo> || null}
         */
        this.DomainAliasList = null;

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

        if (params.DomainAliasList) {
            this.DomainAliasList = new Array();
            for (let z in params.DomainAliasList) {
                let obj = new DomainAliasInfo();
                obj.deserialize(params.DomainAliasList[z]);
                this.DomainAliasList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RollbackRecordSnapshot请求参数结构体
 * @class
 */
class RollbackRecordSnapshotRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 快照 ID
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * 解析记录信息
         * @type {Array.<SnapshotRecord> || null}
         */
        this.RecordList = null;

        /**
         * 之前的快照回滚任务 ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;

        if (params.RecordList) {
            this.RecordList = new Array();
            for (let z in params.RecordList) {
                let obj = new SnapshotRecord();
                obj.deserialize(params.RecordList[z]);
                this.RecordList.push(obj);
            }
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * ModifyRecordToGroup请求参数结构体
 * @class
 */
class ModifyRecordToGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 分组 ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 记录 ID，多个 ID 用竖线“|”分割
         * @type {string || null}
         */
        this.RecordId = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * DescribeSnapshotConfig返回参数结构体
 * @class
 */
class DescribeSnapshotConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 解析快照配置
         * @type {SnapshotConfig || null}
         */
        this.SnapshotConfig = null;

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

        if (params.SnapshotConfig) {
            let obj = new SnapshotConfig();
            obj.deserialize(params.SnapshotConfig)
            this.SnapshotConfig = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 查询记录列表的数量统计信息
 * @class
 */
class RecordCountInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子域名数量
         * @type {number || null}
         */
        this.SubdomainCount = null;

        /**
         * 列表返回的记录数
         * @type {number || null}
         */
        this.ListCount = null;

        /**
         * 总的记录数
         * @type {number || null}
         */
        this.TotalCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubdomainCount = 'SubdomainCount' in params ? params.SubdomainCount : null;
        this.ListCount = 'ListCount' in params ? params.ListCount : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * DeleteShareDomain返回参数结构体
 * @class
 */
class DeleteShareDomainResponse extends  AbstractModel {
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
 * ModifyRecord请求参数结构体
 * @class
 */
class ModifyRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 记录类型，通过 API 记录类型获得，大写英文，比如：A 。
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * 记录线路，通过 API 记录线路获得，中文，比如：默认。
         * @type {string || null}
         */
        this.RecordLine = null;

        /**
         * 记录值，如 IP : 200.200.200.200， CNAME : cname.dnspod.com.， MX : mail.dnspod.com.。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 记录 ID 。可以通过接口DescribeRecordList查到所有的解析记录列表以及对应的RecordId
         * @type {number || null}
         */
        this.RecordId = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
         * @type {number || null}
         */
        this.DomainId = null;

        /**
         * 主机记录，如 www，如果不传，默认为 @。
         * @type {string || null}
         */
        this.SubDomain = null;

        /**
         * 线路的 ID，通过 API 记录线路获得，英文字符串，比如：10=1。参数RecordLineId优先级高于RecordLine，如果同时传递二者，优先使用RecordLineId参数。
         * @type {string || null}
         */
        this.RecordLineId = null;

        /**
         * MX 优先级，当记录类型是 MX 时有效，范围1-20，MX 记录时必选。
         * @type {number || null}
         */
        this.MX = null;

        /**
         * TTL，范围1-604800，不同等级域名最小值不同。
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * 权重信息，0到100的整数。仅企业 VIP 域名可用，0 表示关闭，不传该参数，表示不设置权重信息。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 记录初始状态，取值范围为 ENABLE 和 DISABLE 。默认为 ENABLE ，如果传入 DISABLE，解析不会生效，也不会验证负载均衡的限制。
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
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.RecordLine = 'RecordLine' in params ? params.RecordLine : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;
        this.RecordLineId = 'RecordLineId' in params ? params.RecordLineId : null;
        this.MX = 'MX' in params ? params.MX : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 批量任务中的记录信息
 * @class
 */
class BatchRecordInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RecordId = null;

        /**
         * 子域名(主机记录)。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubDomain = null;

        /**
         * 记录类型, 详见 DescribeRecordType 接口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * 解析记录的线路，详见 DescribeRecordLineList 接口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RecordLine = null;

        /**
         * 记录值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 记录的 TTL 值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * 记录添加状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 操作类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 此条记录在列表中的ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 记录生效状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Enabled = null;

        /**
         * 记录的MX权重
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MX = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.RecordLine = 'RecordLine' in params ? params.RecordLine : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.MX = 'MX' in params ? params.MX : null;

    }
}

/**
 * 线路分组信息
 * @class
 */
class LineGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 线路分组ID
         * @type {string || null}
         */
        this.LineId = null;

        /**
         * 线路分组名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 分组类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 线路分组包含的线路列表
         * @type {Array.<string> || null}
         */
        this.LineList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LineId = 'LineId' in params ? params.LineId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.LineList = 'LineList' in params ? params.LineList : null;

    }
}

/**
 * DeleteDomain请求参数结构体
 * @class
 */
class DeleteDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * ModifyDomainOwner请求参数结构体
 * @class
 */
class ModifyDomainOwnerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名需要转入的账号，支持Uin或者邮箱格式
         * @type {string || null}
         */
        this.Account = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Account = 'Account' in params ? params.Account : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * ModifyPackageAutoRenew请求参数结构体
 * @class
 */
class ModifyPackageAutoRenewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源ID。可以在控制台查看所有的资源
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * enable 开启自动续费；disable 关闭自动续费
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
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 域名共享信息
 * @class
 */
class DomainShareInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名共享对象的账号
         * @type {string || null}
         */
        this.ShareTo = null;

        /**
         * 共享模式，“rw”：可读写。 “r”:：只读
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 共享状态“enabled”：共享成功。“pending”：共享到的账号不存在, 等待注册
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
        this.ShareTo = 'ShareTo' in params ? params.ShareTo : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeSnapshotConfig请求参数结构体
 * @class
 */
class DescribeSnapshotConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * 解析线路信息
 * @class
 */
class LineInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 线路名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 线路ID
         * @type {string || null}
         */
        this.LineId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.LineId = 'LineId' in params ? params.LineId : null;

    }
}

/**
 * DescribeRecordExistExceptDefaultNS请求参数结构体
 * @class
 */
class DescribeRecordExistExceptDefaultNSRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * DescribeRecordLineList请求参数结构体
 * @class
 */
class DescribeRecordLineListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名等级。
+ 旧套餐：D_FREE、D_PLUS、D_EXTRA、D_EXPERT、D_ULTRA 分别对应免费套餐、个人豪华、企业1、企业2、企业3。
+ 新套餐：DP_FREE、DP_PLUS、DP_EXTRA、DP_EXPERT、DP_ULTRA 分别对应新免费、个人专业版、企业创业版、企业标准版、企业旗舰版。
         * @type {string || null}
         */
        this.DomainGrade = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainGrade = 'DomainGrade' in params ? params.DomainGrade : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * DescribeRecordList返回参数结构体
 * @class
 */
class DescribeRecordListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录的数量统计信息
         * @type {RecordCountInfo || null}
         */
        this.RecordCountInfo = null;

        /**
         * 获取的记录列表
         * @type {Array.<RecordListItem> || null}
         */
        this.RecordList = null;

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

        if (params.RecordCountInfo) {
            let obj = new RecordCountInfo();
            obj.deserialize(params.RecordCountInfo)
            this.RecordCountInfo = obj;
        }

        if (params.RecordList) {
            this.RecordList = new Array();
            for (let z in params.RecordList) {
                let obj = new RecordListItem();
                obj.deserialize(params.RecordList[z]);
                this.RecordList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateRecordBatch请求参数结构体
 * @class
 */
class CreateRecordBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名ID，多个 domain_id 用英文逗号进行分割。
         * @type {Array.<string> || null}
         */
        this.DomainIdList = null;

        /**
         * 记录数组
         * @type {Array.<AddRecordBatch> || null}
         */
        this.RecordList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainIdList = 'DomainIdList' in params ? params.DomainIdList : null;

        if (params.RecordList) {
            this.RecordList = new Array();
            for (let z in params.RecordList) {
                let obj = new AddRecordBatch();
                obj.deserialize(params.RecordList[z]);
                this.RecordList.push(obj);
            }
        }

    }
}

/**
 * DeleteDomainAlias请求参数结构体
 * @class
 */
class DeleteDomainAliasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名别名ID。可以通过接口DescribeDomainAliasList查到所有的域名别名列表以及对应的ID
         * @type {number || null}
         */
        this.DomainAliasId = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名ID，参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainAliasId = 'DomainAliasId' in params ? params.DomainAliasId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * 域名别名信息
 * @class
 */
class DomainAliasInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名别名ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 域名别名
         * @type {string || null}
         */
        this.DomainAlias = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.DomainAlias = 'DomainAlias' in params ? params.DomainAlias : null;

    }
}

/**
 * CreateDeal请求参数结构体
 * @class
 */
class CreateDealRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 询价类型，1 新购，2 续费，3 套餐升级（增值服务暂时只支持新购）
         * @type {number || null}
         */
        this.DealType = null;

        /**
         * 商品类型，1 域名套餐 2 增值服务
         * @type {number || null}
         */
        this.GoodsType = null;

        /**
         * 套餐类型：
DP_PLUS：专业版
DP_EXPERT：企业版
DP_ULTRA：尊享版

增值服务类型
LB：负载均衡
URL：URL转发
DMONITOR_TASKS：D监控任务数
DMONITOR_IP：D监控备用 IP 数
CUSTOMLINE：自定义线路数
         * @type {string || null}
         */
        this.GoodsChildType = null;

        /**
         * 增值服务购买数量，如果是域名套餐固定为1，如果是增值服务则按以下规则：
负载均衡、D监控任务数、D监控备用 IP 数、自定义线路数、URL 转发（必须是5的正整数倍，如 5、10、15 等）
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * 是否开启自动续费，1 开启，2 不开启（增值服务暂不支持自动续费），默认值为 2 不开启
         * @type {number || null}
         */
        this.AutoRenew = null;

        /**
         * 需要绑定套餐的域名，如 dnspod.cn，如果是续费或升级，domain 参数必须要传，新购可不传。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 套餐时长：
1. 套餐以月为单位（按月只能是 3、6 还有 12 的倍数），套餐例如购买一年则传12，最大120 。（续费最低一年）
2. 升级套餐时不需要传。
3. 增值服务的时长单位为年，买一年传1（增值服务新购按年只能是 1，增值服务续费最大为 10）
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 套餐类型，需要升级到的套餐类型，只有升级时需要。
         * @type {string || null}
         */
        this.NewPackageType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealType = 'DealType' in params ? params.DealType : null;
        this.GoodsType = 'GoodsType' in params ? params.GoodsType : null;
        this.GoodsChildType = 'GoodsChildType' in params ? params.GoodsChildType : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.NewPackageType = 'NewPackageType' in params ? params.NewPackageType : null;

    }
}

/**
 * ModifyDomainLock请求参数结构体
 * @class
 */
class ModifyDomainLockRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名要锁定的天数，最多可锁定的天数可以通过获取域名权限接口获取。
         * @type {number || null}
         */
        this.LockDays = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.LockDays = 'LockDays' in params ? params.LockDays : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * DescribeDomainWhois请求参数结构体
 * @class
 */
class DescribeDomainWhoisRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * 子域名别名解析量统计信息
 * @class
 */
class SubdomainAliasAnalyticsItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子域名解析量统计查询信息
         * @type {SubdomainAnalyticsInfo || null}
         */
        this.Info = null;

        /**
         * 当前统计维度解析量小计
         * @type {Array.<DomainAnalyticsDetail> || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Info) {
            let obj = new SubdomainAnalyticsInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new DomainAnalyticsDetail();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

    }
}

/**
 * ModifyDomainStatus返回参数结构体
 * @class
 */
class ModifyDomainStatusResponse extends  AbstractModel {
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
 * 批量添加的记录
 * @class
 */
class AddRecordBatch extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录类型, 详见 DescribeRecordType 接口。
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * 记录值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 子域名(主机记录)，默认为@。
         * @type {string || null}
         */
        this.SubDomain = null;

        /**
         * 解析记录的线路，详见 DescribeRecordLineList 接口，RecordLine和RecordLineId都未填时，默认为「默认」线路。
         * @type {string || null}
         */
        this.RecordLine = null;

        /**
         * 解析记录的线路 ID，RecordLine和RecordLineId都有时，系统优先取 RecordLineId。
         * @type {string || null}
         */
        this.RecordLineId = null;

        /**
         * 记录权重值(暂未支持)。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 记录的 MX 记录值，非 MX 记录类型，默认为 0，MX记录则必选。
         * @type {number || null}
         */
        this.MX = null;

        /**
         * 记录的 TTL 值，默认600。
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * 记录状态(暂未支持)。0表示禁用，1表示启用。默认启用。
         * @type {number || null}
         */
        this.Enabled = null;

        /**
         * 记录备注(暂未支持)。
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
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;
        this.RecordLine = 'RecordLine' in params ? params.RecordLine : null;
        this.RecordLineId = 'RecordLineId' in params ? params.RecordLineId : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.MX = 'MX' in params ? params.MX : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * DescribeRecord请求参数结构体
 * @class
 */
class DescribeRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 记录 ID 。可以通过接口DescribeRecordList查到所有的解析记录列表以及对应的RecordId
         * @type {number || null}
         */
        this.RecordId = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * CreateDomainGroup返回参数结构体
 * @class
 */
class CreateDomainGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名分组ID
         * @type {number || null}
         */
        this.GroupId = null;

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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSubdomainAnalytics请求参数结构体
 * @class
 */
class DescribeSubdomainAnalyticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要查询解析量的域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 查询的开始时间，格式：YYYY-MM-DD
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 查询的结束时间，格式：YYYY-MM-DD
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 要查询解析量的子域名
         * @type {string || null}
         */
        this.Subdomain = null;

        /**
         * DATE:按天维度统计 HOUR:按小时维度统计
         * @type {string || null}
         */
        this.DnsFormat = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.Subdomain = 'Subdomain' in params ? params.Subdomain : null;
        this.DnsFormat = 'DnsFormat' in params ? params.DnsFormat : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * DeleteRecord请求参数结构体
 * @class
 */
class DeleteRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 记录 ID 。可以通过接口DescribeRecordList查到所有的解析记录列表以及对应的RecordId
         * @type {number || null}
         */
        this.RecordId = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * DescribeDomain请求参数结构体
 * @class
 */
class DescribeDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * 域名分组列表
 * @class
 */
class GroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分组ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 分组名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 分组类型
         * @type {string || null}
         */
        this.GroupType = null;

        /**
         * 该分组中域名个数
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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupType = 'GroupType' in params ? params.GroupType : null;
        this.Size = 'Size' in params ? params.Size : null;

    }
}

/**
 * ModifyRecordStatus请求参数结构体
 * @class
 */
class ModifyRecordStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 记录 ID 。可以通过接口DescribeRecordList查到所有的解析记录列表以及对应的RecordId
         * @type {number || null}
         */
        this.RecordId = null;

        /**
         * 记录的状态。取值范围为 ENABLE 和 DISABLE。如果传入 DISABLE，解析不会生效，也不会验证负载均衡的限制。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * CreateRecord返回参数结构体
 * @class
 */
class CreateRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录ID
         * @type {number || null}
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
 * DeleteRecordGroup返回参数结构体
 * @class
 */
class DeleteRecordGroupResponse extends  AbstractModel {
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
 * 记录信息
 * @class
 */
class RecordInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录 ID 。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 子域名(主机记录)。
         * @type {string || null}
         */
        this.SubDomain = null;

        /**
         * 记录类型, 详见 DescribeRecordType 接口。
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * 解析记录的线路，详见 DescribeRecordLineList 接口。
         * @type {string || null}
         */
        this.RecordLine = null;

        /**
         * 解析记录的线路 ID ，详见 DescribeRecordLineList 接口。
         * @type {string || null}
         */
        this.RecordLineId = null;

        /**
         * 记录值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 记录权重值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 记录的 MX 记录值，非 MX 记录类型，默认为 0。
         * @type {number || null}
         */
        this.MX = null;

        /**
         * 记录的 TTL 值。
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * 记录状态。0表示禁用，1表示启用。
         * @type {number || null}
         */
        this.Enabled = null;

        /**
         * 该记录的 D 监控状态。
"Ok" : 服务器正常。
"Warn" : 该记录有报警, 服务器返回 4XX。
"Down" : 服务器宕机。
"" : 该记录未开启 D 监控。
         * @type {string || null}
         */
        this.MonitorStatus = null;

        /**
         * 记录的备注。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 记录最后更新时间。
         * @type {string || null}
         */
        this.UpdatedOn = null;

        /**
         * 域名 ID 。
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.RecordLine = 'RecordLine' in params ? params.RecordLine : null;
        this.RecordLineId = 'RecordLineId' in params ? params.RecordLineId : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.MX = 'MX' in params ? params.MX : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.MonitorStatus = 'MonitorStatus' in params ? params.MonitorStatus : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.UpdatedOn = 'UpdatedOn' in params ? params.UpdatedOn : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * DescribeSnapshotRollbackTask请求参数结构体
 * @class
 */
class DescribeSnapshotRollbackTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * CheckRecordSnapshotRollback返回参数结构体
 * @class
 */
class CheckRecordSnapshotRollbackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Reason = null;

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
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDomainPreview请求参数结构体
 * @class
 */
class DescribeDomainPreviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * 批量添加记录返回结构
 * @class
 */
class CreateRecordBatchDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 见RecordInfoBatch
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CreateRecordBatchRecord> || null}
         */
        this.RecordList = null;

        /**
         * 任务编号
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名等级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DomainGrade = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 该条任务运行状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 操作类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 域名ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RecordList) {
            this.RecordList = new Array();
            for (let z in params.RecordList) {
                let obj = new CreateRecordBatchRecord();
                obj.deserialize(params.RecordList[z]);
                this.RecordList.push(obj);
            }
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainGrade = 'DomainGrade' in params ? params.DomainGrade : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * Whois联系信息
 * @class
 */
class WhoisContact extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {WhoisContactAddress || null}
         */
        this.Admin = null;

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {WhoisContactAddress || null}
         */
        this.Billing = null;

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {WhoisContactAddress || null}
         */
        this.Registrant = null;

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {WhoisContactAddress || null}
         */
        this.Tech = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Admin) {
            let obj = new WhoisContactAddress();
            obj.deserialize(params.Admin)
            this.Admin = obj;
        }

        if (params.Billing) {
            let obj = new WhoisContactAddress();
            obj.deserialize(params.Billing)
            this.Billing = obj;
        }

        if (params.Registrant) {
            let obj = new WhoisContactAddress();
            obj.deserialize(params.Registrant)
            this.Registrant = obj;
        }

        if (params.Tech) {
            let obj = new WhoisContactAddress();
            obj.deserialize(params.Tech)
            this.Tech = obj;
        }

    }
}

/**
 * DescribeSubdomainAnalytics返回参数结构体
 * @class
 */
class DescribeSubdomainAnalyticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前统计维度解析量小计
         * @type {Array.<DomainAnalyticsDetail> || null}
         */
        this.Data = null;

        /**
         * 子域名解析量统计查询信息
         * @type {SubdomainAnalyticsInfo || null}
         */
        this.Info = null;

        /**
         * 子域名别名解析量统计信息
         * @type {Array.<SubdomainAliasAnalyticsItem> || null}
         */
        this.AliasData = null;

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
                let obj = new DomainAnalyticsDetail();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

        if (params.Info) {
            let obj = new SubdomainAnalyticsInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }

        if (params.AliasData) {
            this.AliasData = new Array();
            for (let z in params.AliasData) {
                let obj = new SubdomainAliasAnalyticsItem();
                obj.deserialize(params.AliasData[z]);
                this.AliasData.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyRecord返回参数结构体
 * @class
 */
class ModifyRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录ID
         * @type {number || null}
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
 * ModifyRecordToGroup返回参数结构体
 * @class
 */
class ModifyRecordToGroupResponse extends  AbstractModel {
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
 * 快照解析记录
 * @class
 */
class SnapshotRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子域名
         * @type {string || null}
         */
        this.SubDomain = null;

        /**
         * 记录类型
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * 解析线路
         * @type {string || null}
         */
        this.RecordLine = null;

        /**
         * 解析值
         * @type {string || null}
         */
        this.Value = null;

        /**
         * TTL(秒)
         * @type {string || null}
         */
        this.TTL = null;

        /**
         * 解析记录 ID
         * @type {string || null}
         */
        this.RecordId = null;

        /**
         * MX优先级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MX = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.RecordLine = 'RecordLine' in params ? params.RecordLine : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.MX = 'MX' in params ? params.MX : null;

    }
}

/**
 * ModifyDomainUnlock返回参数结构体
 * @class
 */
class ModifyDomainUnlockResponse extends  AbstractModel {
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
 * DescribeDomainLogList请求参数结构体
 * @class
 */
class DescribeDomainLogListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
         * @type {number || null}
         */
        this.DomainId = null;

        /**
         * 记录开始的偏移，第一条记录为 0，依次类推，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 共要获取的日志条数，比如获取20条，则为20，默认为500条，单次最多获取500条。
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
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeDomainList返回参数结构体
 * @class
 */
class DescribeDomainListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列表页统计信息
         * @type {DomainCountInfo || null}
         */
        this.DomainCountInfo = null;

        /**
         * 域名列表
         * @type {Array.<DomainListItem> || null}
         */
        this.DomainList = null;

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

        if (params.DomainCountInfo) {
            let obj = new DomainCountInfo();
            obj.deserialize(params.DomainCountInfo)
            this.DomainCountInfo = obj;
        }

        if (params.DomainList) {
            this.DomainList = new Array();
            for (let z in params.DomainList) {
                let obj = new DomainListItem();
                obj.deserialize(params.DomainList[z]);
                this.DomainList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyRecordBatch请求参数结构体
 * @class
 */
class ModifyRecordBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录ID数组。可以通过接口DescribeRecordList查到所有的解析记录列表以及对应的RecordId
         * @type {Array.<number> || null}
         */
        this.RecordIdList = null;

        /**
         * 要修改的字段，可选值为 [“sub_domain”、”record_type”、”area”、”value”、”mx”、”ttl”、”status”] 中的某一个。
         * @type {string || null}
         */
        this.Change = null;

        /**
         * 修改为，具体依赖 change 字段，必填参数。
         * @type {string || null}
         */
        this.ChangeTo = null;

        /**
         * 要修改到的记录值，仅当 change 字段为 “record_type” 时为必填参数。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * MX记录优先级，仅当修改为 MX 记录时为必填参数。
         * @type {string || null}
         */
        this.MX = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RecordIdList = 'RecordIdList' in params ? params.RecordIdList : null;
        this.Change = 'Change' in params ? params.Change : null;
        this.ChangeTo = 'ChangeTo' in params ? params.ChangeTo : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.MX = 'MX' in params ? params.MX : null;

    }
}

/**
 * Whois联系信息地址
 * @class
 */
class WhoisContactAddress extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.City = null;

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Country = null;

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Fax = null;

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FaxExt = null;

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Handle = null;

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Organization = null;

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PostalCode = null;

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.State = null;

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Street = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.City = 'City' in params ? params.City : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Fax = 'Fax' in params ? params.Fax : null;
        this.FaxExt = 'FaxExt' in params ? params.FaxExt : null;
        this.Handle = 'Handle' in params ? params.Handle : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Organization = 'Organization' in params ? params.Organization : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.PostalCode = 'PostalCode' in params ? params.PostalCode : null;
        this.State = 'State' in params ? params.State : null;
        this.Street = 'Street' in params ? params.Street : null;

    }
}

/**
 * 域名解析快照配置
 * @class
 */
class SnapshotConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置类型：空字符串-不备份，half_hour-每半小时，hourly-每小时，daily-每天，monthly-每月
         * @type {string || null}
         */
        this.Config = null;

        /**
         * 添加时间
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * 所属域名 ID
         * @type {string || null}
         */
        this.DomainId = null;

        /**
         * 配置 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 快照数量
         * @type {number || null}
         */
        this.SnapshotCount = null;

        /**
         * 状态：enable-启用，disable-禁用
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdatedOn = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Config = 'Config' in params ? params.Config : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.SnapshotCount = 'SnapshotCount' in params ? params.SnapshotCount : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.UpdatedOn = 'UpdatedOn' in params ? params.UpdatedOn : null;

    }
}

/**
 * DeleteRecord返回参数结构体
 * @class
 */
class DeleteRecordResponse extends  AbstractModel {
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
 * 批量添加记录任务中的记录信息
 * @class
 */
class CreateRecordBatchRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子域名(主机记录)。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubDomain = null;

        /**
         * 记录类型, 详见 DescribeRecordType 接口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * 解析记录的线路，详见 DescribeRecordLineList 接口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RecordLine = null;

        /**
         * 记录值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 记录的 TTL 值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * 记录添加状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 操作类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 此条记录在列表中的ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 记录的MX权重
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MX = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.RecordLine = 'RecordLine' in params ? params.RecordLine : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.MX = 'MX' in params ? params.MX : null;

    }
}

/**
 * CreateDomain返回参数结构体
 * @class
 */
class CreateDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名信息
         * @type {DomainCreateInfo || null}
         */
        this.DomainInfo = null;

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

        if (params.DomainInfo) {
            let obj = new DomainCreateInfo();
            obj.deserialize(params.DomainInfo)
            this.DomainInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 列表页分页统计信息
 * @class
 */
class DomainCountInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的域名数量
         * @type {number || null}
         */
        this.DomainTotal = null;

        /**
         * 用户可以查看的所有域名数量
         * @type {number || null}
         */
        this.AllTotal = null;

        /**
         * 用户账号添加的域名数量
         * @type {number || null}
         */
        this.MineTotal = null;

        /**
         * 共享给用户的域名数量
         * @type {number || null}
         */
        this.ShareTotal = null;

        /**
         * 付费域名数量
         * @type {number || null}
         */
        this.VipTotal = null;

        /**
         * 暂停的域名数量
         * @type {number || null}
         */
        this.PauseTotal = null;

        /**
         * dns设置错误的域名数量
         * @type {number || null}
         */
        this.ErrorTotal = null;

        /**
         * 锁定的域名数量
         * @type {number || null}
         */
        this.LockTotal = null;

        /**
         * 封禁的域名数量
         * @type {number || null}
         */
        this.SpamTotal = null;

        /**
         * 30天内即将到期的域名数量
         * @type {number || null}
         */
        this.VipExpire = null;

        /**
         * 分享给其它人的域名数量
         * @type {number || null}
         */
        this.ShareOutTotal = null;

        /**
         * 指定分组内的域名数量
         * @type {number || null}
         */
        this.GroupTotal = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainTotal = 'DomainTotal' in params ? params.DomainTotal : null;
        this.AllTotal = 'AllTotal' in params ? params.AllTotal : null;
        this.MineTotal = 'MineTotal' in params ? params.MineTotal : null;
        this.ShareTotal = 'ShareTotal' in params ? params.ShareTotal : null;
        this.VipTotal = 'VipTotal' in params ? params.VipTotal : null;
        this.PauseTotal = 'PauseTotal' in params ? params.PauseTotal : null;
        this.ErrorTotal = 'ErrorTotal' in params ? params.ErrorTotal : null;
        this.LockTotal = 'LockTotal' in params ? params.LockTotal : null;
        this.SpamTotal = 'SpamTotal' in params ? params.SpamTotal : null;
        this.VipExpire = 'VipExpire' in params ? params.VipExpire : null;
        this.ShareOutTotal = 'ShareOutTotal' in params ? params.ShareOutTotal : null;
        this.GroupTotal = 'GroupTotal' in params ? params.GroupTotal : null;

    }
}

/**
 * 用户信息
 * @class
 */
class UserInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户昵称
         * @type {string || null}
         */
        this.Nick = null;

        /**
         * 用户ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 用户账号, 邮箱格式
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 账号状态：”enabled”: 正常；”disabled”: 被封禁
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 电话号码
         * @type {string || null}
         */
        this.Telephone = null;

        /**
         * 邮箱是否通过验证：”yes”: 通过；”no”: 未通过
         * @type {string || null}
         */
        this.EmailVerified = null;

        /**
         * 手机是否通过验证：”yes”: 通过；”no”: 未通过
         * @type {string || null}
         */
        this.TelephoneVerified = null;

        /**
         * 账号等级, 按照用户账号下域名等级排序, 选取一个最高等级为账号等级, 具体对应情况参见域名等级。
         * @type {string || null}
         */
        this.UserGrade = null;

        /**
         * 用户名称, 企业用户对应为公司名称
         * @type {string || null}
         */
        this.RealName = null;

        /**
         * 是否绑定微信：”yes”: 通过；”no”: 未通过
         * @type {string || null}
         */
        this.WechatBinded = null;

        /**
         * 用户UIN
         * @type {number || null}
         */
        this.Uin = null;

        /**
         * 所属 DNS 服务器
         * @type {Array.<string> || null}
         */
        this.FreeNs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Nick = 'Nick' in params ? params.Nick : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Telephone = 'Telephone' in params ? params.Telephone : null;
        this.EmailVerified = 'EmailVerified' in params ? params.EmailVerified : null;
        this.TelephoneVerified = 'TelephoneVerified' in params ? params.TelephoneVerified : null;
        this.UserGrade = 'UserGrade' in params ? params.UserGrade : null;
        this.RealName = 'RealName' in params ? params.RealName : null;
        this.WechatBinded = 'WechatBinded' in params ? params.WechatBinded : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.FreeNs = 'FreeNs' in params ? params.FreeNs : null;

    }
}

/**
 * ModifyRecordBatch返回参数结构体
 * @class
 */
class ModifyRecordBatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量任务ID
         * @type {number || null}
         */
        this.JobId = null;

        /**
         * 见modifyRecordBatchDetail
         * @type {Array.<ModifyRecordBatchDetail> || null}
         */
        this.DetailList = null;

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
        this.JobId = 'JobId' in params ? params.JobId : null;

        if (params.DetailList) {
            this.DetailList = new Array();
            for (let z in params.DetailList) {
                let obj = new ModifyRecordBatchDetail();
                obj.deserialize(params.DetailList[z]);
                this.DetailList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckSnapshotRollback请求参数结构体
 * @class
 */
class CheckSnapshotRollbackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 快照记录 ID
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * CheckSnapshotRollback返回参数结构体
 * @class
 */
class CheckSnapshotRollbackResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照记录 ID
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * 回滚时长（分钟）
         * @type {number || null}
         */
        this.CostMinutes = null;

        /**
         * 快照所属域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 解析记录总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 值为 1，表示超时
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Timeout = null;

        /**
         * 检查失败数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Failed = null;

        /**
         * 失败记录信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SnapshotRecord> || null}
         */
        this.FailedRecordList = null;

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
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.CostMinutes = 'CostMinutes' in params ? params.CostMinutes : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;
        this.Failed = 'Failed' in params ? params.Failed : null;

        if (params.FailedRecordList) {
            this.FailedRecordList = new Array();
            for (let z in params.FailedRecordList) {
                let obj = new SnapshotRecord();
                obj.deserialize(params.FailedRecordList[z]);
                this.FailedRecordList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRecordType请求参数结构体
 * @class
 */
class DescribeRecordTypeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名等级。
+ 旧套餐：D_FREE、D_PLUS、D_EXTRA、D_EXPERT、D_ULTRA 分别对应免费套餐、个人豪华、企业1、企业2、企业3。
+ 新套餐：DP_FREE、DP_PLUS、DP_EXTRA、DP_EXPERT、DP_ULTRA 分别对应新免费、个人专业版、企业创业版、企业标准版、企业旗舰版。
         * @type {string || null}
         */
        this.DomainGrade = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainGrade = 'DomainGrade' in params ? params.DomainGrade : null;

    }
}

/**
 * DescribeSnapshotRollbackTask返回参数结构体
 * @class
 */
class DescribeSnapshotRollbackTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照所属域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 快照 ID
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * 回滚状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 快照回滚任务 ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 总数量
         * @type {number || null}
         */
        this.RecordCount = null;

        /**
         * 开始回滚时间
         * @type {string || null}
         */
        this.CreatedOn = null;

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
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RecordCount = 'RecordCount' in params ? params.RecordCount : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 记录列表元素
 * @class
 */
class RecordListItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录Id
         * @type {number || null}
         */
        this.RecordId = null;

        /**
         * 记录值
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 记录状态，启用：ENABLE，暂停：DISABLE
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdatedOn = null;

        /**
         * 主机名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 记录线路
         * @type {string || null}
         */
        this.Line = null;

        /**
         * 线路Id
         * @type {string || null}
         */
        this.LineId = null;

        /**
         * 记录类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 记录权重，用于负载均衡记录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 记录监控状态，正常：OK，告警：WARN，宕机：DOWN，未设置监控或监控暂停则为空
         * @type {string || null}
         */
        this.MonitorStatus = null;

        /**
         * 记录备注说明
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 记录缓存时间
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * MX值，只有MX记录有
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MX = null;

        /**
         * 是否是默认的ns记录
         * @type {boolean || null}
         */
        this.DefaultNS = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.UpdatedOn = 'UpdatedOn' in params ? params.UpdatedOn : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Line = 'Line' in params ? params.Line : null;
        this.LineId = 'LineId' in params ? params.LineId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.MonitorStatus = 'MonitorStatus' in params ? params.MonitorStatus : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.MX = 'MX' in params ? params.MX : null;
        this.DefaultNS = 'DefaultNS' in params ? params.DefaultNS : null;

    }
}

/**
 * DescribeDomainPreview返回参数结构体
 * @class
 */
class DescribeDomainPreviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名概览信息
         * @type {PreviewDetail || null}
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

        if (params.Domain) {
            let obj = new PreviewDetail();
            obj.deserialize(params.Domain)
            this.Domain = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDomainBatch返回参数结构体
 * @class
 */
class CreateDomainBatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量添加域名信息
         * @type {Array.<CreateDomainBatchDetail> || null}
         */
        this.DetailList = null;

        /**
         * 批量任务的ID
         * @type {number || null}
         */
        this.JobId = null;

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

        if (params.DetailList) {
            this.DetailList = new Array();
            for (let z in params.DetailList) {
                let obj = new CreateDomainBatchDetail();
                obj.deserialize(params.DetailList[z]);
                this.DetailList.push(obj);
            }
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDomainGroupList返回参数结构体
 * @class
 */
class DescribeDomainGroupListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分组列表
         * @type {Array.<GroupInfo> || null}
         */
        this.GroupList = null;

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

        if (params.GroupList) {
            this.GroupList = new Array();
            for (let z in params.GroupList) {
                let obj = new GroupInfo();
                obj.deserialize(params.GroupList[z]);
                this.GroupList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 域名锁定信息
 * @class
 */
class LockInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名 ID
         * @type {number || null}
         */
        this.DomainId = null;

        /**
         * 域名解锁码
         * @type {string || null}
         */
        this.LockCode = null;

        /**
         * 域名自动解锁日期
         * @type {string || null}
         */
        this.LockEnd = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.LockCode = 'LockCode' in params ? params.LockCode : null;
        this.LockEnd = 'LockEnd' in params ? params.LockEnd : null;

    }
}

/**
 * ModifyDomainOwner返回参数结构体
 * @class
 */
class ModifyDomainOwnerResponse extends  AbstractModel {
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
 * 子域名解析量统计查询信息
 * @class
 */
class SubdomainAnalyticsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * DATE:按天维度统计 HOUR:按小时维度统计
         * @type {string || null}
         */
        this.DnsFormat = null;

        /**
         * 当前统计周期解析量总计
         * @type {number || null}
         */
        this.DnsTotal = null;

        /**
         * 当前查询的域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 当前统计周期开始时间
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 当前统计周期结束时间
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 当前统计的子域名
         * @type {string || null}
         */
        this.Subdomain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DnsFormat = 'DnsFormat' in params ? params.DnsFormat : null;
        this.DnsTotal = 'DnsTotal' in params ? params.DnsTotal : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.Subdomain = 'Subdomain' in params ? params.Subdomain : null;

    }
}

/**
 * 批量添加记录返回结构
 * @class
 */
class ModifyRecordBatchDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 见RecordInfoBatchModify
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BatchRecordInfo> || null}
         */
        this.RecordList = null;

        /**
         * 任务编号
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名等级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DomainGrade = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 该条任务运行状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 操作类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 域名ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RecordList) {
            this.RecordList = new Array();
            for (let z in params.RecordList) {
                let obj = new BatchRecordInfo();
                obj.deserialize(params.RecordList[z]);
                this.RecordList.push(obj);
            }
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainGrade = 'DomainGrade' in params ? params.DomainGrade : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * DescribeUserDetail返回参数结构体
 * @class
 */
class DescribeUserDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 帐户信息
         * @type {UserInfo || null}
         */
        this.UserInfo = null;

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

        if (params.UserInfo) {
            let obj = new UserInfo();
            obj.deserialize(params.UserInfo)
            this.UserInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 批量删除域名详情
 * @class
 */
class DeleteDomainBatchDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名 ID
         * @type {number || null}
         */
        this.DomainId = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Error = null;

        /**
         * 删除状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 操作
         * @type {string || null}
         */
        this.Operation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Error = 'Error' in params ? params.Error : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Operation = 'Operation' in params ? params.Operation : null;

    }
}

/**
 * CreateDomain请求参数结构体
 * @class
 */
class CreateDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名分组ID。可以通过接口DescribeDomainGroupList查看当前域名分组信息
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 是否星标域名，”yes”、”no” 分别代表是和否。
         * @type {string || null}
         */
        this.IsMark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.IsMark = 'IsMark' in params ? params.IsMark : null;

    }
}

/**
 * ModifyPackageAutoRenew返回参数结构体
 * @class
 */
class ModifyPackageAutoRenewResponse extends  AbstractModel {
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
 * 域名别名解析量统计信息
 * @class
 */
class DomainAliasAnalyticsItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名解析量统计查询信息
         * @type {DomainAnalyticsInfo || null}
         */
        this.Info = null;

        /**
         * 当前统计维度解析量小计
         * @type {Array.<DomainAnalyticsDetail> || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Info) {
            let obj = new DomainAnalyticsInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new DomainAnalyticsDetail();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

    }
}

/**
 * DescribeDomainShareInfo返回参数结构体
 * @class
 */
class DescribeDomainShareInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名共享信息
         * @type {Array.<DomainShareInfo> || null}
         */
        this.ShareList = null;

        /**
         * 域名拥有者账号
         * @type {string || null}
         */
        this.Owner = null;

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

        if (params.ShareList) {
            this.ShareList = new Array();
            for (let z in params.ShareList) {
                let obj = new DomainShareInfo();
                obj.deserialize(params.ShareList[z]);
                this.ShareList.push(obj);
            }
        }
        this.Owner = 'Owner' in params ? params.Owner : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDomainRemark请求参数结构体
 * @class
 */
class ModifyDomainRemarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
         * @type {number || null}
         */
        this.DomainId = null;

        /**
         * 域名备注，删除备注请提交空内容。
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
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * CreateDomainAlias返回参数结构体
 * @class
 */
class CreateDomainAliasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名别名ID
         * @type {number || null}
         */
        this.DomainAliasId = null;

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
        this.DomainAliasId = 'DomainAliasId' in params ? params.DomainAliasId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRecordList请求参数结构体
 * @class
 */
class DescribeRecordListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要获取的解析记录所属的域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 要获取的解析记录所属的域名Id，如果传了DomainId，系统将会忽略Domain参数。 可以通过接口DescribeDomainList查到所有的Domain以及DomainId
         * @type {number || null}
         */
        this.DomainId = null;

        /**
         * 解析记录的主机头，如果传了此参数，则只会返回此主机头对应的解析记录
         * @type {string || null}
         */
        this.Subdomain = null;

        /**
         * 获取某种类型的解析记录，如 A，CNAME，NS，AAAA，显性URL，隐性URL，CAA，SPF等
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * 获取某条线路名称的解析记录。可以通过接口DescribeRecordLineList查看当前域名允许的线路信息
         * @type {string || null}
         */
        this.RecordLine = null;

        /**
         * 获取某个线路Id对应的解析记录，如果传RecordLineId，系统会忽略RecordLine参数。可以通过接口DescribeRecordLineList查看当前域名允许的线路信息
         * @type {string || null}
         */
        this.RecordLineId = null;

        /**
         * 获取某个分组下的解析记录时，传这个分组Id。
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 通过关键字搜索解析记录，当前支持搜索主机头和记录值
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * 排序字段，支持 name,line,type,value,weight,mx,ttl,updated_on 几个字段。
         * @type {string || null}
         */
        this.SortField = null;

        /**
         * 排序方式，正序：ASC，逆序：DESC。默认值为ASC。
         * @type {string || null}
         */
        this.SortType = null;

        /**
         * 偏移量，默认值为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制数量，当前Limit最大支持3000。默认值为100。
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
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.Subdomain = 'Subdomain' in params ? params.Subdomain : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.RecordLine = 'RecordLine' in params ? params.RecordLine : null;
        this.RecordLineId = 'RecordLineId' in params ? params.RecordLineId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.SortField = 'SortField' in params ? params.SortField : null;
        this.SortType = 'SortType' in params ? params.SortType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * PayOrderWithBalance请求参数结构体
 * @class
 */
class PayOrderWithBalanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要支付的大订单号数组
         * @type {Array.<string> || null}
         */
        this.BigDealIdList = null;

        /**
         * 代金券ID数组。可以从控制台查到拥有的代金券
         * @type {Array.<string> || null}
         */
        this.VoucherIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BigDealIdList = 'BigDealIdList' in params ? params.BigDealIdList : null;
        this.VoucherIdList = 'VoucherIdList' in params ? params.VoucherIdList : null;

    }
}

/**
 * DescribePackageDetail请求参数结构体
 * @class
 */
class DescribePackageDetailRequest extends  AbstractModel {
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
 * DescribeRecord返回参数结构体
 * @class
 */
class DescribeRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录信息
         * @type {RecordInfo || null}
         */
        this.RecordInfo = null;

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

        if (params.RecordInfo) {
            let obj = new RecordInfo();
            obj.deserialize(params.RecordInfo)
            this.RecordInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyRecordFields请求参数结构体
 * @class
 */
class ModifyRecordFieldsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 记录 ID 。
         * @type {number || null}
         */
        this.RecordId = null;

        /**
         * 要修改的记录属性和值，支持：sub_domain，record_line，record_line_id，record_type，value，ttl，status，mx，weight
         * @type {Array.<KeyValue> || null}
         */
        this.FieldList = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;

        if (params.FieldList) {
            this.FieldList = new Array();
            for (let z in params.FieldList) {
                let obj = new KeyValue();
                obj.deserialize(params.FieldList[z]);
                this.FieldList.push(obj);
            }
        }
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * DeleteSnapshot返回参数结构体
 * @class
 */
class DeleteSnapshotResponse extends  AbstractModel {
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
 * DescribeDomainPurview返回参数结构体
 * @class
 */
class DescribeDomainPurviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名权限列表
         * @type {Array.<PurviewInfo> || null}
         */
        this.PurviewList = null;

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

        if (params.PurviewList) {
            this.PurviewList = new Array();
            for (let z in params.PurviewList) {
                let obj = new PurviewInfo();
                obj.deserialize(params.PurviewList[z]);
                this.PurviewList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 子订单号列表
 * @class
 */
class Deals extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子订单ID
         * @type {string || null}
         */
        this.DealId = null;

        /**
         * 子订单号
         * @type {string || null}
         */
        this.DealName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealId = 'DealId' in params ? params.DealId : null;
        this.DealName = 'DealName' in params ? params.DealName : null;

    }
}

/**
 * ModifySubdomainStatus返回参数结构体
 * @class
 */
class ModifySubdomainStatusResponse extends  AbstractModel {
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
 * DescribeDomainAnalytics返回参数结构体
 * @class
 */
class DescribeDomainAnalyticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前统计维度解析量小计
         * @type {Array.<DomainAnalyticsDetail> || null}
         */
        this.Data = null;

        /**
         * 域名解析量统计查询信息
         * @type {DomainAnalyticsInfo || null}
         */
        this.Info = null;

        /**
         * 域名别名解析量统计信息
         * @type {Array.<DomainAliasAnalyticsItem> || null}
         */
        this.AliasData = null;

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
                let obj = new DomainAnalyticsDetail();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

        if (params.Info) {
            let obj = new DomainAnalyticsInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }

        if (params.AliasData) {
            this.AliasData = new Array();
            for (let z in params.AliasData) {
                let obj = new DomainAliasAnalyticsItem();
                obj.deserialize(params.AliasData[z]);
                this.AliasData.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyRecordStatus返回参数结构体
 * @class
 */
class ModifyRecordStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录ID。
         * @type {number || null}
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
 * CreateRecordGroup请求参数结构体
 * @class
 */
class CreateRecordGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 分组名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * RollbackSnapshot返回参数结构体
 * @class
 */
class RollbackSnapshotResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回滚任务 ID，用来查询回滚状态
         * @type {number || null}
         */
        this.TaskId = null;

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRecordGroupList返回参数结构体
 * @class
 */
class DescribeRecordGroupListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分组列表
         * @type {Array.<RecordGroupInfo> || null}
         */
        this.GroupList = null;

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

        if (params.GroupList) {
            this.GroupList = new Array();
            for (let z in params.GroupList) {
                let obj = new RecordGroupInfo();
                obj.deserialize(params.GroupList[z]);
                this.GroupList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDomainGroup请求参数结构体
 * @class
 */
class CreateDomainGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名分组
         * @type {string || null}
         */
        this.GroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;

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
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * DeleteDomain返回参数结构体
 * @class
 */
class DeleteDomainResponse extends  AbstractModel {
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
 * DescribeRecordSnapshotRollbackResult返回参数结构体
 * @class
 */
class DescribeRecordSnapshotRollbackResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回滚任务 ID
         * @type {number || null}
         */
        this.JobId = null;

        /**
         * 回滚状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 失败的记录信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SnapshotRecord> || null}
         */
        this.FailedRecordList = null;

        /**
         * 所属域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 回滚进度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * 回滚剩余时间（单位：分钟）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LeftMinutes = null;

        /**
         * 总记录数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 失败记录数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Failed = null;

        /**
         * 成功记录数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Success = null;

        /**
         * 快照下载地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CosUrl = null;

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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.FailedRecordList) {
            this.FailedRecordList = new Array();
            for (let z in params.FailedRecordList) {
                let obj = new SnapshotRecord();
                obj.deserialize(params.FailedRecordList[z]);
                this.FailedRecordList.push(obj);
            }
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.LeftMinutes = 'LeftMinutes' in params ? params.LeftMinutes : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.Failed = 'Failed' in params ? params.Failed : null;
        this.Success = 'Success' in params ? params.Success : null;
        this.CosUrl = 'CosUrl' in params ? params.CosUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySnapshotConfig请求参数结构体
 * @class
 */
class ModifySnapshotConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 备件间隔：空字符串-不备份，half_hour-每半小时，hourly-每小时，daily-每天，monthly-每月
         * @type {string || null}
         */
        this.Period = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * DescribeDomainAliasList请求参数结构体
 * @class
 */
class DescribeDomainAliasListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名ID,域名ID，参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * CreateDomainAlias请求参数结构体
 * @class
 */
class CreateDomainAliasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名别名
         * @type {string || null}
         */
        this.DomainAlias = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名ID，参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainAlias = 'DomainAlias' in params ? params.DomainAlias : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * DeleteShareDomain请求参数结构体
 * @class
 */
class DeleteShareDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名共享的账号
         * @type {string || null}
         */
        this.Account = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Account = 'Account' in params ? params.Account : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * 域名增值服务用量
 * @class
 */
class VASStatisticItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 增值服务名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 增值服务标识
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 增值服务最大用量
         * @type {number || null}
         */
        this.LimitCount = null;

        /**
         * 增值服务已使用的用量
         * @type {number || null}
         */
        this.UseCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Key = 'Key' in params ? params.Key : null;
        this.LimitCount = 'LimitCount' in params ? params.LimitCount : null;
        this.UseCount = 'UseCount' in params ? params.UseCount : null;

    }
}

/**
 * 快照信息
 * @class
 */
class SnapshotInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照的对象存储地址
         * @type {string || null}
         */
        this.CosUrl = null;

        /**
         * 添加时间
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * 所属域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 快照记录 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 域名解析记录数
         * @type {string || null}
         */
        this.RecordCount = null;

        /**
         * 状态：normal-正常，create-备份中
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
        this.CosUrl = 'CosUrl' in params ? params.CosUrl : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.RecordCount = 'RecordCount' in params ? params.RecordCount : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * ModifyDynamicDNS请求参数结构体
 * @class
 */
class ModifyDynamicDNSRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 记录ID。 可以通过接口DescribeRecordList查到所有的解析记录列表以及对应的RecordId
         * @type {number || null}
         */
        this.RecordId = null;

        /**
         * 记录线路，通过 API 记录线路获得，中文，比如：默认。
         * @type {string || null}
         */
        this.RecordLine = null;

        /**
         * 记录值，如 IP : 200.200.200.200， CNAME : cname.dnspod.com.， MX : mail.dnspod.com.。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
         * @type {number || null}
         */
        this.DomainId = null;

        /**
         * 主机记录，如 www，如果不传，默认为 @。
         * @type {string || null}
         */
        this.SubDomain = null;

        /**
         * 线路的 ID，通过 API 记录线路获得，英文字符串，比如：10=1。参数RecordLineId优先级高于RecordLine，如果同时传递二者，优先使用RecordLineId参数。
         * @type {string || null}
         */
        this.RecordLineId = null;

        /**
         * TTL值，如果不传，默认为域名的TTL值。
         * @type {number || null}
         */
        this.Ttl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.RecordLine = 'RecordLine' in params ? params.RecordLine : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;
        this.RecordLineId = 'RecordLineId' in params ? params.RecordLineId : null;
        this.Ttl = 'Ttl' in params ? params.Ttl : null;

    }
}

/**
 * DescribeRecordGroupList请求参数结构体
 * @class
 */
class DescribeRecordGroupListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
         * @type {number || null}
         */
        this.DomainId = null;

        /**
         * 分页开始位置
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页每页数
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
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyRecordFields返回参数结构体
 * @class
 */
class ModifyRecordFieldsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录ID
         * @type {number || null}
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
 * 域名权限项
 * @class
 */
class PurviewInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 权限值
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * ModifyRecordRemark请求参数结构体
 * @class
 */
class ModifyRecordRemarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 记录 ID 。可以通过接口DescribeRecordList查到所有的解析记录列表以及对应的RecordId
         * @type {number || null}
         */
        this.RecordId = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
         * @type {number || null}
         */
        this.DomainId = null;

        /**
         * 解析记录备注，删除备注请提交空内容。
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
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * ModifySnapshotConfig返回参数结构体
 * @class
 */
class ModifySnapshotConfigResponse extends  AbstractModel {
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
 * RollbackRecordSnapshot返回参数结构体
 * @class
 */
class RollbackRecordSnapshotResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回滚任务 ID
         * @type {number || null}
         */
        this.JobId = null;

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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUserDetail请求参数结构体
 * @class
 */
class DescribeUserDetailRequest extends  AbstractModel {
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
 * ModifyDomainStatus请求参数结构体
 * @class
 */
class ModifyDomainStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名状态，”enable” 、”disable” 分别代表启用和暂停
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * ModifyRecordRemark返回参数结构体
 * @class
 */
class ModifyRecordRemarkResponse extends  AbstractModel {
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
 * DescribeDomainList请求参数结构体
 * @class
 */
class DescribeDomainListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名分组类型，默认为ALL。可取值为ALL，MINE，SHARE，ISMARK，PAUSE，VIP，RECENT，SHARE_OUT。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 记录开始的偏移, 第一条记录为 0, 依次类推。默认值为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 要获取的域名数量, 比如获取20个, 则为20。默认值为3000。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分组ID, 获取指定分组的域名
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 根据关键字搜索域名
         * @type {string || null}
         */
        this.Keyword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * 域名信息（创建域名时返回）
 * @class
 */
class DomainCreateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名的punycode
         * @type {string || null}
         */
        this.Punycode = null;

        /**
         * 域名的NS列表
         * @type {Array.<string> || null}
         */
        this.GradeNsList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Punycode = 'Punycode' in params ? params.Punycode : null;
        this.GradeNsList = 'GradeNsList' in params ? params.GradeNsList : null;

    }
}

/**
 * DescribeDomainPurview请求参数结构体
 * @class
 */
class DescribeDomainPurviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * 批量添加域名返回结构
 * @class
 */
class CreateDomainBatchDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 见RecordInfoBatch
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CreateDomainBatchRecord> || null}
         */
        this.RecordList = null;

        /**
         * 任务编号
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名等级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DomainGrade = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 该条任务运行状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 操作类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Operation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RecordList) {
            this.RecordList = new Array();
            for (let z in params.RecordList) {
                let obj = new CreateDomainBatchRecord();
                obj.deserialize(params.RecordList[z]);
                this.RecordList.push(obj);
            }
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainGrade = 'DomainGrade' in params ? params.DomainGrade : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Operation = 'Operation' in params ? params.Operation : null;

    }
}

/**
 * ModifyDomainUnlock请求参数结构体
 * @class
 */
class ModifyDomainUnlockRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名解锁码，锁定的时候会返回。
         * @type {string || null}
         */
        this.LockCode = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.LockCode = 'LockCode' in params ? params.LockCode : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * DescribeRecordSnapshotRollbackResult请求参数结构体
 * @class
 */
class DescribeRecordSnapshotRollbackResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 回滚任务 ID
         * @type {number || null}
         */
        this.JobId = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * ModifyDomainLock返回参数结构体
 * @class
 */
class ModifyDomainLockResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名锁定信息
         * @type {LockInfo || null}
         */
        this.LockInfo = null;

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

        if (params.LockInfo) {
            let obj = new LockInfo();
            obj.deserialize(params.LockInfo)
            this.LockInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 套餐配置明细
 * @class
 */
class PackageDetailItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 套餐原价
         * @type {number || null}
         */
        this.RealPrice = null;

        /**
         * 可更换域名次数
         * @type {number || null}
         */
        this.ChangedTimes = null;

        /**
         * 允许设置的最小 TTL 值
         * @type {number || null}
         */
        this.MinTtl = null;

        /**
         * 负载均衡数量
         * @type {number || null}
         */
        this.RecordRoll = null;

        /**
         * 子域名级数
         * @type {number || null}
         */
        this.SubDomainLevel = null;

        /**
         * 泛解析级数
         * @type {number || null}
         */
        this.MaxWildcard = null;

        /**
         * DNS 服务集群个数
         * @type {string || null}
         */
        this.DnsServerRegion = null;

        /**
         * 套餐名称
         * @type {string || null}
         */
        this.DomainGradeCn = null;

        /**
         * 套餐代号
         * @type {number || null}
         */
        this.GradeLevel = null;

        /**
         * 套餐对应的 NS
         * @type {Array.<string> || null}
         */
        this.Ns = null;

        /**
         * 套餐代码
         * @type {string || null}
         */
        this.DomainGrade = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealPrice = 'RealPrice' in params ? params.RealPrice : null;
        this.ChangedTimes = 'ChangedTimes' in params ? params.ChangedTimes : null;
        this.MinTtl = 'MinTtl' in params ? params.MinTtl : null;
        this.RecordRoll = 'RecordRoll' in params ? params.RecordRoll : null;
        this.SubDomainLevel = 'SubDomainLevel' in params ? params.SubDomainLevel : null;
        this.MaxWildcard = 'MaxWildcard' in params ? params.MaxWildcard : null;
        this.DnsServerRegion = 'DnsServerRegion' in params ? params.DnsServerRegion : null;
        this.DomainGradeCn = 'DomainGradeCn' in params ? params.DomainGradeCn : null;
        this.GradeLevel = 'GradeLevel' in params ? params.GradeLevel : null;
        this.Ns = 'Ns' in params ? params.Ns : null;
        this.DomainGrade = 'DomainGrade' in params ? params.DomainGrade : null;

    }
}

/**
 * CreateDeal返回参数结构体
 * @class
 */
class CreateDealResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大订单号，一个大订单号下可以有多个子订单，说明是同一次下单
         * @type {string || null}
         */
        this.BigDealId = null;

        /**
         * 子订单列表
         * @type {Array.<Deals> || null}
         */
        this.DealList = null;

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
        this.BigDealId = 'BigDealId' in params ? params.BigDealId : null;

        if (params.DealList) {
            this.DealList = new Array();
            for (let z in params.DealList) {
                let obj = new Deals();
                obj.deserialize(params.DealList[z]);
                this.DealList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRecordExistExceptDefaultNS返回参数结构体
 * @class
 */
class DescribeRecordExistExceptDefaultNSResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * true 是 false 否
         * @type {boolean || null}
         */
        this.Exist = null;

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
        this.Exist = 'Exist' in params ? params.Exist : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyVasAutoRenewStatus请求参数结构体
 * @class
 */
class ModifyVasAutoRenewStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源ID。可以从控制台查看所有的资源
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * enable 开启自动续费；disable 关闭自动续费
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
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Whois信息
 * @class
 */
class WhoisInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 联系信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {WhoisContact || null}
         */
        this.Contacts = null;

        /**
         * 域名注册时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreationDate = null;

        /**
         * 域名到期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpirationDate = null;

        /**
         * 是否是在腾讯云注册的域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsQcloud = null;

        /**
         * 是否当前操作帐号注册的域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsQcloudOwner = null;

        /**
         * 域名配置的NS
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.NameServers = null;

        /**
         * Whois原始信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Raw = null;

        /**
         * 域名注册商
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Registrar = null;

        /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Status = null;

        /**
         * 更新日期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Contacts) {
            let obj = new WhoisContact();
            obj.deserialize(params.Contacts)
            this.Contacts = obj;
        }
        this.CreationDate = 'CreationDate' in params ? params.CreationDate : null;
        this.ExpirationDate = 'ExpirationDate' in params ? params.ExpirationDate : null;
        this.IsQcloud = 'IsQcloud' in params ? params.IsQcloud : null;
        this.IsQcloudOwner = 'IsQcloudOwner' in params ? params.IsQcloudOwner : null;
        this.NameServers = 'NameServers' in params ? params.NameServers : null;
        this.Raw = 'Raw' in params ? params.Raw : null;
        this.Registrar = 'Registrar' in params ? params.Registrar : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.UpdatedDate = 'UpdatedDate' in params ? params.UpdatedDate : null;

    }
}

/**
 * DownloadSnapshot返回参数结构体
 * @class
 */
class DownloadSnapshotResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照下载链接
         * @type {string || null}
         */
        this.CosUrl = null;

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
        this.CosUrl = 'CosUrl' in params ? params.CosUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 域名概览明细
 * @class
 */
class PreviewDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 域名套餐代码
         * @type {string || null}
         */
        this.Grade = null;

        /**
         * 域名套餐名称
         * @type {string || null}
         */
        this.GradeTitle = null;

        /**
         * 域名记录数
         * @type {number || null}
         */
        this.Records = null;

        /**
         * 域名停靠状态。0 未开启 1 已开启 2 已暂停
         * @type {number || null}
         */
        this.DomainParkingStatus = null;

        /**
         * 自定义线路数量
         * @type {number || null}
         */
        this.LineCount = null;

        /**
         * 自定义线路分组数量
         * @type {number || null}
         */
        this.LineGroupCount = null;

        /**
         * 域名别名数量
         * @type {number || null}
         */
        this.AliasCount = null;

        /**
         * 允许添加的最大域名别名数量
         * @type {number || null}
         */
        this.MaxAliasCount = null;

        /**
         * 昨天的解析量
         * @type {number || null}
         */
        this.ResolveCount = null;

        /**
         * 增值服务数量
         * @type {number || null}
         */
        this.VASCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Grade = 'Grade' in params ? params.Grade : null;
        this.GradeTitle = 'GradeTitle' in params ? params.GradeTitle : null;
        this.Records = 'Records' in params ? params.Records : null;
        this.DomainParkingStatus = 'DomainParkingStatus' in params ? params.DomainParkingStatus : null;
        this.LineCount = 'LineCount' in params ? params.LineCount : null;
        this.LineGroupCount = 'LineGroupCount' in params ? params.LineGroupCount : null;
        this.AliasCount = 'AliasCount' in params ? params.AliasCount : null;
        this.MaxAliasCount = 'MaxAliasCount' in params ? params.MaxAliasCount : null;
        this.ResolveCount = 'ResolveCount' in params ? params.ResolveCount : null;
        this.VASCount = 'VASCount' in params ? params.VASCount : null;

    }
}

/**
 * DescribeDomainWhois返回参数结构体
 * @class
 */
class DescribeDomainWhoisResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名Whois信息
         * @type {WhoisInfo || null}
         */
        this.Info = null;

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

        if (params.Info) {
            let obj = new WhoisInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateRecordGroup返回参数结构体
 * @class
 */
class CreateRecordGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新增的分组 ID
         * @type {number || null}
         */
        this.GroupId = null;

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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDomainGroupList请求参数结构体
 * @class
 */
class DescribeDomainGroupListRequest extends  AbstractModel {
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
 * DescribeBatchTask返回参数结构体
 * @class
 */
class DescribeBatchTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量任务详情
         * @type {Array.<DescribeBatchTaskDetail> || null}
         */
        this.DetailList = null;

        /**
         * 总任务条数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 成功条数
         * @type {number || null}
         */
        this.SuccessCount = null;

        /**
         * 失败条数
         * @type {number || null}
         */
        this.FailCount = null;

        /**
         * 批量任务类型
         * @type {string || null}
         */
        this.JobType = null;

        /**
         * 任务创建时间
         * @type {string || null}
         */
        this.CreatedAt = null;

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

        if (params.DetailList) {
            this.DetailList = new Array();
            for (let z in params.DetailList) {
                let obj = new DescribeBatchTaskDetail();
                obj.deserialize(params.DetailList[z]);
                this.DetailList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.SuccessCount = 'SuccessCount' in params ? params.SuccessCount : null;
        this.FailCount = 'FailCount' in params ? params.FailCount : null;
        this.JobType = 'JobType' in params ? params.JobType : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckRecordSnapshotRollback请求参数结构体
 * @class
 */
class CheckRecordSnapshotRollbackRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 快照 ID
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * 解析记录信息
         * @type {SnapshotRecord || null}
         */
        this.Record = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;

        if (params.Record) {
            let obj = new SnapshotRecord();
            obj.deserialize(params.Record)
            this.Record = obj;
        }
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * DescribeDomainAnalytics请求参数结构体
 * @class
 */
class DescribeDomainAnalyticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要查询解析量的域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 查询的开始时间，格式：YYYY-MM-DD
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 查询的结束时间，格式：YYYY-MM-DD
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * DATE:按天维度统计 HOUR:按小时维度统计
         * @type {string || null}
         */
        this.DnsFormat = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.DnsFormat = 'DnsFormat' in params ? params.DnsFormat : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * ModifyDynamicDNS返回参数结构体
 * @class
 */
class ModifyDynamicDNSResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录ID
         * @type {number || null}
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
 * DescribeSnapshotRollbackResult请求参数结构体
 * @class
 */
class DescribeSnapshotRollbackResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 快照回滚任务 ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
         * @type {number || null}
         */
        this.DomainId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

    }
}

/**
 * DescribeDomainLogList返回参数结构体
 * @class
 */
class DescribeDomainLogListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.LogList = null;

        /**
         * 分页大小
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 日志总条数
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
        this.LogList = 'LogList' in params ? params.LogList : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    CreateRecordRequest: CreateRecordRequest,
    DescribeSnapshotRollbackResultResponse: DescribeSnapshotRollbackResultResponse,
    DownloadSnapshotRequest: DownloadSnapshotRequest,
    DescribeBatchTaskDetail: DescribeBatchTaskDetail,
    ModifyVasAutoRenewStatusResponse: ModifyVasAutoRenewStatusResponse,
    RollbackSnapshotRequest: RollbackSnapshotRequest,
    DeleteDomainAliasResponse: DeleteDomainAliasResponse,
    DescribeVASStatisticRequest: DescribeVASStatisticRequest,
    DeleteDomainBatchResponse: DeleteDomainBatchResponse,
    RecordGroupInfo: RecordGroupInfo,
    ModifySubdomainStatusRequest: ModifySubdomainStatusRequest,
    CreateRecordBatchResponse: CreateRecordBatchResponse,
    DescribeSnapshotListResponse: DescribeSnapshotListResponse,
    CreateDomainBatchRecord: CreateDomainBatchRecord,
    DomainAnalyticsInfo: DomainAnalyticsInfo,
    ModifyRecordGroupRequest: ModifyRecordGroupRequest,
    DescribeVASStatisticResponse: DescribeVASStatisticResponse,
    DescribeBatchTaskRequest: DescribeBatchTaskRequest,
    DomainAnalyticsDetail: DomainAnalyticsDetail,
    CreateSnapshotResponse: CreateSnapshotResponse,
    KeyValue: KeyValue,
    DeleteRecordGroupRequest: DeleteRecordGroupRequest,
    PayOrderWithBalanceResponse: PayOrderWithBalanceResponse,
    DescribeDomainResponse: DescribeDomainResponse,
    DescribeSnapshotListRequest: DescribeSnapshotListRequest,
    DescribePackageDetailResponse: DescribePackageDetailResponse,
    DescribeRecordLineListResponse: DescribeRecordLineListResponse,
    SnapshotPageInfo: SnapshotPageInfo,
    DomainInfo: DomainInfo,
    CreateDomainBatchRequest: CreateDomainBatchRequest,
    ModifyRecordGroupResponse: ModifyRecordGroupResponse,
    DescribeDomainShareInfoRequest: DescribeDomainShareInfoRequest,
    DomainListItem: DomainListItem,
    DeleteDomainBatchRequest: DeleteDomainBatchRequest,
    DescribeRecordTypeResponse: DescribeRecordTypeResponse,
    ModifyDomainRemarkResponse: ModifyDomainRemarkResponse,
    DeleteSnapshotRequest: DeleteSnapshotRequest,
    DescribeDomainAliasListResponse: DescribeDomainAliasListResponse,
    RollbackRecordSnapshotRequest: RollbackRecordSnapshotRequest,
    ModifyRecordToGroupRequest: ModifyRecordToGroupRequest,
    DescribeSnapshotConfigResponse: DescribeSnapshotConfigResponse,
    RecordCountInfo: RecordCountInfo,
    DeleteShareDomainResponse: DeleteShareDomainResponse,
    ModifyRecordRequest: ModifyRecordRequest,
    BatchRecordInfo: BatchRecordInfo,
    LineGroupInfo: LineGroupInfo,
    DeleteDomainRequest: DeleteDomainRequest,
    ModifyDomainOwnerRequest: ModifyDomainOwnerRequest,
    ModifyPackageAutoRenewRequest: ModifyPackageAutoRenewRequest,
    DomainShareInfo: DomainShareInfo,
    DescribeSnapshotConfigRequest: DescribeSnapshotConfigRequest,
    LineInfo: LineInfo,
    DescribeRecordExistExceptDefaultNSRequest: DescribeRecordExistExceptDefaultNSRequest,
    DescribeRecordLineListRequest: DescribeRecordLineListRequest,
    DescribeRecordListResponse: DescribeRecordListResponse,
    CreateRecordBatchRequest: CreateRecordBatchRequest,
    DeleteDomainAliasRequest: DeleteDomainAliasRequest,
    DomainAliasInfo: DomainAliasInfo,
    CreateDealRequest: CreateDealRequest,
    ModifyDomainLockRequest: ModifyDomainLockRequest,
    DescribeDomainWhoisRequest: DescribeDomainWhoisRequest,
    SubdomainAliasAnalyticsItem: SubdomainAliasAnalyticsItem,
    ModifyDomainStatusResponse: ModifyDomainStatusResponse,
    AddRecordBatch: AddRecordBatch,
    DescribeRecordRequest: DescribeRecordRequest,
    CreateDomainGroupResponse: CreateDomainGroupResponse,
    DescribeSubdomainAnalyticsRequest: DescribeSubdomainAnalyticsRequest,
    DeleteRecordRequest: DeleteRecordRequest,
    DescribeDomainRequest: DescribeDomainRequest,
    GroupInfo: GroupInfo,
    ModifyRecordStatusRequest: ModifyRecordStatusRequest,
    CreateRecordResponse: CreateRecordResponse,
    DeleteRecordGroupResponse: DeleteRecordGroupResponse,
    RecordInfo: RecordInfo,
    DescribeSnapshotRollbackTaskRequest: DescribeSnapshotRollbackTaskRequest,
    CheckRecordSnapshotRollbackResponse: CheckRecordSnapshotRollbackResponse,
    DescribeDomainPreviewRequest: DescribeDomainPreviewRequest,
    CreateRecordBatchDetail: CreateRecordBatchDetail,
    WhoisContact: WhoisContact,
    DescribeSubdomainAnalyticsResponse: DescribeSubdomainAnalyticsResponse,
    ModifyRecordResponse: ModifyRecordResponse,
    ModifyRecordToGroupResponse: ModifyRecordToGroupResponse,
    SnapshotRecord: SnapshotRecord,
    ModifyDomainUnlockResponse: ModifyDomainUnlockResponse,
    DescribeDomainLogListRequest: DescribeDomainLogListRequest,
    DescribeDomainListResponse: DescribeDomainListResponse,
    ModifyRecordBatchRequest: ModifyRecordBatchRequest,
    WhoisContactAddress: WhoisContactAddress,
    SnapshotConfig: SnapshotConfig,
    DeleteRecordResponse: DeleteRecordResponse,
    CreateRecordBatchRecord: CreateRecordBatchRecord,
    CreateDomainResponse: CreateDomainResponse,
    DomainCountInfo: DomainCountInfo,
    UserInfo: UserInfo,
    ModifyRecordBatchResponse: ModifyRecordBatchResponse,
    CheckSnapshotRollbackRequest: CheckSnapshotRollbackRequest,
    CheckSnapshotRollbackResponse: CheckSnapshotRollbackResponse,
    DescribeRecordTypeRequest: DescribeRecordTypeRequest,
    DescribeSnapshotRollbackTaskResponse: DescribeSnapshotRollbackTaskResponse,
    RecordListItem: RecordListItem,
    DescribeDomainPreviewResponse: DescribeDomainPreviewResponse,
    CreateDomainBatchResponse: CreateDomainBatchResponse,
    DescribeDomainGroupListResponse: DescribeDomainGroupListResponse,
    LockInfo: LockInfo,
    ModifyDomainOwnerResponse: ModifyDomainOwnerResponse,
    SubdomainAnalyticsInfo: SubdomainAnalyticsInfo,
    ModifyRecordBatchDetail: ModifyRecordBatchDetail,
    DescribeUserDetailResponse: DescribeUserDetailResponse,
    DeleteDomainBatchDetail: DeleteDomainBatchDetail,
    CreateDomainRequest: CreateDomainRequest,
    ModifyPackageAutoRenewResponse: ModifyPackageAutoRenewResponse,
    DomainAliasAnalyticsItem: DomainAliasAnalyticsItem,
    DescribeDomainShareInfoResponse: DescribeDomainShareInfoResponse,
    ModifyDomainRemarkRequest: ModifyDomainRemarkRequest,
    CreateDomainAliasResponse: CreateDomainAliasResponse,
    DescribeRecordListRequest: DescribeRecordListRequest,
    PayOrderWithBalanceRequest: PayOrderWithBalanceRequest,
    DescribePackageDetailRequest: DescribePackageDetailRequest,
    DescribeRecordResponse: DescribeRecordResponse,
    ModifyRecordFieldsRequest: ModifyRecordFieldsRequest,
    DeleteSnapshotResponse: DeleteSnapshotResponse,
    DescribeDomainPurviewResponse: DescribeDomainPurviewResponse,
    Deals: Deals,
    ModifySubdomainStatusResponse: ModifySubdomainStatusResponse,
    DescribeDomainAnalyticsResponse: DescribeDomainAnalyticsResponse,
    ModifyRecordStatusResponse: ModifyRecordStatusResponse,
    CreateRecordGroupRequest: CreateRecordGroupRequest,
    RollbackSnapshotResponse: RollbackSnapshotResponse,
    DescribeRecordGroupListResponse: DescribeRecordGroupListResponse,
    CreateDomainGroupRequest: CreateDomainGroupRequest,
    CreateSnapshotRequest: CreateSnapshotRequest,
    DeleteDomainResponse: DeleteDomainResponse,
    DescribeRecordSnapshotRollbackResultResponse: DescribeRecordSnapshotRollbackResultResponse,
    ModifySnapshotConfigRequest: ModifySnapshotConfigRequest,
    DescribeDomainAliasListRequest: DescribeDomainAliasListRequest,
    CreateDomainAliasRequest: CreateDomainAliasRequest,
    DeleteShareDomainRequest: DeleteShareDomainRequest,
    VASStatisticItem: VASStatisticItem,
    SnapshotInfo: SnapshotInfo,
    ModifyDynamicDNSRequest: ModifyDynamicDNSRequest,
    DescribeRecordGroupListRequest: DescribeRecordGroupListRequest,
    ModifyRecordFieldsResponse: ModifyRecordFieldsResponse,
    PurviewInfo: PurviewInfo,
    ModifyRecordRemarkRequest: ModifyRecordRemarkRequest,
    ModifySnapshotConfigResponse: ModifySnapshotConfigResponse,
    RollbackRecordSnapshotResponse: RollbackRecordSnapshotResponse,
    DescribeUserDetailRequest: DescribeUserDetailRequest,
    ModifyDomainStatusRequest: ModifyDomainStatusRequest,
    ModifyRecordRemarkResponse: ModifyRecordRemarkResponse,
    DescribeDomainListRequest: DescribeDomainListRequest,
    DomainCreateInfo: DomainCreateInfo,
    DescribeDomainPurviewRequest: DescribeDomainPurviewRequest,
    CreateDomainBatchDetail: CreateDomainBatchDetail,
    ModifyDomainUnlockRequest: ModifyDomainUnlockRequest,
    DescribeRecordSnapshotRollbackResultRequest: DescribeRecordSnapshotRollbackResultRequest,
    ModifyDomainLockResponse: ModifyDomainLockResponse,
    PackageDetailItem: PackageDetailItem,
    CreateDealResponse: CreateDealResponse,
    DescribeRecordExistExceptDefaultNSResponse: DescribeRecordExistExceptDefaultNSResponse,
    ModifyVasAutoRenewStatusRequest: ModifyVasAutoRenewStatusRequest,
    WhoisInfo: WhoisInfo,
    DownloadSnapshotResponse: DownloadSnapshotResponse,
    PreviewDetail: PreviewDetail,
    DescribeDomainWhoisResponse: DescribeDomainWhoisResponse,
    CreateRecordGroupResponse: CreateRecordGroupResponse,
    DescribeDomainGroupListRequest: DescribeDomainGroupListRequest,
    DescribeBatchTaskResponse: DescribeBatchTaskResponse,
    CheckRecordSnapshotRollbackRequest: CheckRecordSnapshotRollbackRequest,
    DescribeDomainAnalyticsRequest: DescribeDomainAnalyticsRequest,
    ModifyDynamicDNSResponse: ModifyDynamicDNSResponse,
    DescribeSnapshotRollbackResultRequest: DescribeSnapshotRollbackResultRequest,
    DescribeDomainLogListResponse: DescribeDomainLogListResponse,

}
