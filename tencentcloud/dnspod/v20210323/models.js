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
        this.Account = 'Account' in params ? params.Account : null;
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
        this.Account = 'Account' in params ? params.Account : null;
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
         * 域名状态，”enable” 、”disable” 分别代表启用和暂
         * @type {string || null}
         */
        this.Status = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

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
         * 记录ID。
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
        this.DomainGrade = 'DomainGrade' in params ? params.DomainGrade : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

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
         * 记录 ID 。
         * @type {number || null}
         */
        this.RecordId = null;

        /**
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
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
 * DeleteDomainAlias请求参数结构体
 * @class
 */
class DeleteDomainAliasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名别名ID
         * @type {number || null}
         */
        this.DomainAliasId = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名ID，参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain
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
        this.LockDays = 'LockDays' in params ? params.LockDays : null;
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
         * 域名分组类型，默认为ALL
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 记录开始的偏移, 第一条记录为 0, 依次类推
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 要获取的域名数量, 比如获取20个, 则为20
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
 * DescribeBatchTask请求参数结构体
 * @class
 */
class DescribeBatchTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
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
         * 记录 ID 。
         * @type {number || null}
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
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

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
        this.LockCode = 'LockCode' in params ? params.LockCode : null;
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
         * 记录 ID 。
         * @type {number || null}
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
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

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
         * 要获取的解析记录所属的域名Id，如果传了DomainId，系统将会忽略Domain参数
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
         * 获取某条线路名称的解析记录
         * @type {string || null}
         */
        this.RecordLine = null;

        /**
         * 获取某个线路Id对应的解析记录，如果传RecordLineId，系统会忽略RecordLine参数
         * @type {string || null}
         */
        this.RecordLineId = null;

        /**
         * 获取某个分组下的解析记录时，传这个分组Id
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 通过关键字搜索解析记录，当前支持搜索主机头和记录值
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * 排序字段，支持 name,line,type,value,weight,mx,ttl,updated_on 几个字段
         * @type {string || null}
         */
        this.SortField = null;

        /**
         * 排序方式，正序：ASC，逆序：DESC
         * @type {string || null}
         */
        this.SortType = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制数量，当前Limit最大支持3000
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
         * 记录 ID 。
         * @type {number || null}
         */
        this.RecordId = null;

        /**
         * 记录的状态。取值范围为 ENABLE 和 DISABLE。如果传入 DISABLE，解析不会生效，也不会验证负载均衡的限制。
         * @type {string || null}
         */
        this.Status = null;

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
        this.Status = 'Status' in params ? params.Status : null;
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
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
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
         * 域名分组ID
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
 * ModifyRecordBatch请求参数结构体
 * @class
 */
class ModifyRecordBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录ID数组
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
         * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
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
         * 子域名(主机记录)。
         * @type {string || null}
         */
        this.SubDomain = null;

        /**
         * 解析记录的线路，详见 DescribeRecordLineList 接口。
         * @type {string || null}
         */
        this.RecordLine = null;

        /**
         * 解析记录的线路 ID，RecordLine和RecordLineId都有时，系统优先取 RecordLineId
         * @type {string || null}
         */
        this.RecordLineId = null;

        /**
         * 记录权重值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 记录的 MX 记录值，非 MX 记录类型，默认为 0，MX记录则必选
         * @type {number || null}
         */
        this.MX = null;

        /**
         * 记录的 TTL 值，默认600
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * 记录状态。0表示禁用，1表示启用，默认启用
         * @type {number || null}
         */
        this.Enabled = null;

        /**
         * 记录别名
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
         * 记录 ID 。
         * @type {number || null}
         */
        this.RecordId = null;

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
         * 域名ID,域名ID，参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain
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

module.exports = {
    BatchRecordInfo: BatchRecordInfo,
    CreateRecordRequest: CreateRecordRequest,
    DescribeRecordTypeRequest: DescribeRecordTypeRequest,
    DeleteDomainRequest: DeleteDomainRequest,
    ModifyDomainOwnerRequest: ModifyDomainOwnerRequest,
    DeleteShareDomainRequest: DeleteShareDomainRequest,
    DescribeBatchTaskDetail: DescribeBatchTaskDetail,
    RecordInfo: RecordInfo,
    LineGroupInfo: LineGroupInfo,
    DomainShareInfo: DomainShareInfo,
    DeleteDomainAliasResponse: DeleteDomainAliasResponse,
    RecordListItem: RecordListItem,
    CreateDomainBatchResponse: CreateDomainBatchResponse,
    ModifyDomainStatusRequest: ModifyDomainStatusRequest,
    ModifyDynamicDNSRequest: ModifyDynamicDNSRequest,
    ModifyDomainOwnerResponse: ModifyDomainOwnerResponse,
    DescribeRecordLineListRequest: DescribeRecordLineListRequest,
    ModifyRecordRemarkRequest: ModifyRecordRemarkRequest,
    DescribeRecordListResponse: DescribeRecordListResponse,
    CreateRecordBatchRequest: CreateRecordBatchRequest,
    DescribeUserDetailRequest: DescribeUserDetailRequest,
    DeleteDomainAliasRequest: DeleteDomainAliasRequest,
    ModifyRecordBatchDetail: ModifyRecordBatchDetail,
    CreateRecordBatchResponse: CreateRecordBatchResponse,
    DescribeUserDetailResponse: DescribeUserDetailResponse,
    CreateDomainBatchRecord: CreateDomainBatchRecord,
    ModifyDomainLockRequest: ModifyDomainLockRequest,
    ModifyRecordRemarkResponse: ModifyRecordRemarkResponse,
    DescribeDomainListRequest: DescribeDomainListRequest,
    DomainCreateInfo: DomainCreateInfo,
    DescribeDomainShareInfoResponse: DescribeDomainShareInfoResponse,
    DescribeBatchTaskRequest: DescribeBatchTaskRequest,
    DescribeDomainPurviewRequest: DescribeDomainPurviewRequest,
    ModifyDomainStatusResponse: ModifyDomainStatusResponse,
    CreateDomainBatchDetail: CreateDomainBatchDetail,
    DescribeRecordRequest: DescribeRecordRequest,
    ModifyDomainUnlockRequest: ModifyDomainUnlockRequest,
    CreateDomainGroupResponse: CreateDomainGroupResponse,
    ModifyDomainLockResponse: ModifyDomainLockResponse,
    DescribeDomainResponse: DescribeDomainResponse,
    DomainInfo: DomainInfo,
    DeleteRecordRequest: DeleteRecordRequest,
    CreateDomainAliasResponse: CreateDomainAliasResponse,
    DescribeRecordListRequest: DescribeRecordListRequest,
    DescribeDomainRequest: DescribeDomainRequest,
    DescribeRecordLineListResponse: DescribeRecordLineListResponse,
    DescribeRecordResponse: DescribeRecordResponse,
    ModifyRecordStatusRequest: ModifyRecordStatusRequest,
    ModifyDynamicDNSResponse: ModifyDynamicDNSResponse,
    CreateRecordResponse: CreateRecordResponse,
    CreateDomainBatchRequest: CreateDomainBatchRequest,
    DescribeDomainLogListRequest: DescribeDomainLogListRequest,
    DescribeDomainPurviewResponse: DescribeDomainPurviewResponse,
    DescribeDomainShareInfoRequest: DescribeDomainShareInfoRequest,
    CreateRecordBatchDetail: CreateRecordBatchDetail,
    DomainListItem: DomainListItem,
    ModifyRecordStatusResponse: ModifyRecordStatusResponse,
    LockInfo: LockInfo,
    ModifyRecordResponse: ModifyRecordResponse,
    PurviewInfo: PurviewInfo,
    DescribeRecordTypeResponse: DescribeRecordTypeResponse,
    ModifyDomainUnlockResponse: ModifyDomainUnlockResponse,
    CreateDomainRequest: CreateDomainRequest,
    ModifyRecordBatchResponse: ModifyRecordBatchResponse,
    DescribeDomainListResponse: DescribeDomainListResponse,
    ModifyDomainRemarkResponse: ModifyDomainRemarkResponse,
    ModifyRecordBatchRequest: ModifyRecordBatchRequest,
    ModifyDomainRemarkRequest: ModifyDomainRemarkRequest,
    DescribeBatchTaskResponse: DescribeBatchTaskResponse,
    DeleteRecordResponse: DeleteRecordResponse,
    CreateDomainGroupRequest: CreateDomainGroupRequest,
    CreateRecordBatchRecord: CreateRecordBatchRecord,
    LineInfo: LineInfo,
    DeleteDomainResponse: DeleteDomainResponse,
    CreateDomainResponse: CreateDomainResponse,
    DomainCountInfo: DomainCountInfo,
    AddRecordBatch: AddRecordBatch,
    ModifyRecordRequest: ModifyRecordRequest,
    UserInfo: UserInfo,
    RecordCountInfo: RecordCountInfo,
    DeleteShareDomainResponse: DeleteShareDomainResponse,
    DescribeDomainLogListResponse: DescribeDomainLogListResponse,
    CreateDomainAliasRequest: CreateDomainAliasRequest,

}
