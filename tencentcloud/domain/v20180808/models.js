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
 * CheckDomain返回参数结构体
 * @class
 */
class CheckDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 所查询域名名称
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 是否能够注册
         * @type {boolean || null}
         */
        this.Available = null;

        /**
         * 不能注册原因
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * 是否是溢价词
         * @type {boolean || null}
         */
        this.Premium = null;

        /**
         * 域名价格
         * @type {number || null}
         */
        this.Price = null;

        /**
         * 是否是敏感词
         * @type {boolean || null}
         */
        this.BlackWord = null;

        /**
         * 溢价词描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Describe = null;

        /**
         * 溢价词的续费价格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FeeRenew = null;

        /**
         * 域名真实价格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RealPrice = null;

        /**
         * 溢价词的转入价格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FeeTransfer = null;

        /**
         * 溢价词的赎回价格
         * @type {number || null}
         */
        this.FeeRestore = null;

        /**
         * 检测年限
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 是否支持北京备案  true 支持  false 不支持
         * @type {boolean || null}
         */
        this.RecordSupport = null;

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
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.Available = 'Available' in params ? params.Available : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.Premium = 'Premium' in params ? params.Premium : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.BlackWord = 'BlackWord' in params ? params.BlackWord : null;
        this.Describe = 'Describe' in params ? params.Describe : null;
        this.FeeRenew = 'FeeRenew' in params ? params.FeeRenew : null;
        this.RealPrice = 'RealPrice' in params ? params.RealPrice : null;
        this.FeeTransfer = 'FeeTransfer' in params ? params.FeeTransfer : null;
        this.FeeRestore = 'FeeRestore' in params ? params.FeeRestore : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.RecordSupport = 'RecordSupport' in params ? params.RecordSupport : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 批量任务状态
 * @class
 */
class BatchStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量任务id
         * @type {number || null}
         */
        this.LogId = null;

        /**
         * 批量任务状态  doing：进行中  success：成功  failed：失败  partial_success：部分成功
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 批量任务类型
         * @type {string || null}
         */
        this.BatchAction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogId = 'LogId' in params ? params.LogId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.BatchAction = 'BatchAction' in params ? params.BatchAction : null;

    }
}

/**
 * 域名列表
 * @class
 */
class DomainList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否是溢价域名：
ture 是    
false 不是
         * @type {boolean || null}
         */
        this.IsPremium = null;

        /**
         * 域名资源ID。
         * @type {string || null}
         */
        this.DomainId = null;

        /**
         * 域名名称。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 是否已设置自动续费 。
0：未设置 
1：已设置
         * @type {number || null}
         */
        this.AutoRenew = null;

        /**
         * 注册时间。
         * @type {string || null}
         */
        this.CreationDate = null;

        /**
         * 到期时间。
         * @type {string || null}
         */
        this.ExpirationDate = null;

        /**
         * 域名后缀
         * @type {string || null}
         */
        this.Tld = null;

        /**
         * 编码后的后缀（中文会进行编码）
         * @type {string || null}
         */
        this.CodeTld = null;

        /**
         * 域名购买状态。
ok：正常
AboutToExpire: 即将到期
RegisterPending：注册中
RegisterDoing：注册中
RegisterFailed：注册失败
RenewPending：续费期
RenewDoing：续费中
RedemptionPending：赎回期
RedemptionDoing：赎回中
TransferPending：转入中
TransferTransing：转入中
TransferFailed：转入失败
         * @type {string || null}
         */
        this.BuyStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsPremium = 'IsPremium' in params ? params.IsPremium : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;
        this.CreationDate = 'CreationDate' in params ? params.CreationDate : null;
        this.ExpirationDate = 'ExpirationDate' in params ? params.ExpirationDate : null;
        this.Tld = 'Tld' in params ? params.Tld : null;
        this.CodeTld = 'CodeTld' in params ? params.CodeTld : null;
        this.BuyStatus = 'BuyStatus' in params ? params.BuyStatus : null;

    }
}

/**
 * DescribeDomainPriceList请求参数结构体
 * @class
 */
class DescribeDomainPriceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询价格的后缀列表。默认则为全部后缀
         * @type {Array.<string> || null}
         */
        this.TldList = null;

        /**
         * 查询购买的年份，默认会列出所有年份的价格
         * @type {Array.<number> || null}
         */
        this.Year = null;

        /**
         * 域名的购买类型：new  新购，renew 续费，redem 赎回，tran 转入
         * @type {Array.<string> || null}
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
        this.TldList = 'TldList' in params ? params.TldList : null;
        this.Year = 'Year' in params ? params.Year : null;
        this.Operation = 'Operation' in params ? params.Operation : null;

    }
}

/**
 * DescribeDomainBaseInfo返回参数结构体
 * @class
 */
class DescribeDomainBaseInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名信息
         * @type {DomainBaseInfo || null}
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
            let obj = new DomainBaseInfo();
            obj.deserialize(params.DomainInfo)
            this.DomainInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Template数据
 * @class
 */
class TemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板ID
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 认证状态
         * @type {string || null}
         */
        this.AuditStatus = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdatedOn = null;

        /**
         * 用户UIN
         * @type {string || null}
         */
        this.UserUin = null;

        /**
         * 是否是默认模板
         * @type {string || null}
         */
        this.IsDefault = null;

        /**
         * 认证失败原因
         * @type {string || null}
         */
        this.AuditReason = null;

        /**
         * 认证信息
         * @type {CertificateInfo || null}
         */
        this.CertificateInfo = null;

        /**
         * 联系人信息
         * @type {ContactInfo || null}
         */
        this.ContactInfo = null;

        /**
         * 模板是否符合规范， 1是 0 否
         * @type {number || null}
         */
        this.IsValidTemplate = null;

        /**
         * 不符合规范原因
         * @type {string || null}
         */
        this.InvalidReason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.AuditStatus = 'AuditStatus' in params ? params.AuditStatus : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.UpdatedOn = 'UpdatedOn' in params ? params.UpdatedOn : null;
        this.UserUin = 'UserUin' in params ? params.UserUin : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.AuditReason = 'AuditReason' in params ? params.AuditReason : null;

        if (params.CertificateInfo) {
            let obj = new CertificateInfo();
            obj.deserialize(params.CertificateInfo)
            this.CertificateInfo = obj;
        }

        if (params.ContactInfo) {
            let obj = new ContactInfo();
            obj.deserialize(params.ContactInfo)
            this.ContactInfo = obj;
        }
        this.IsValidTemplate = 'IsValidTemplate' in params ? params.IsValidTemplate : null;
        this.InvalidReason = 'InvalidReason' in params ? params.InvalidReason : null;

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
         * 模板ID
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 购买域名的年限，可选值：[1-10]
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 批量购买的域名,最多为4000个
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 付费模式 0手动在线付费，1使用余额付费
         * @type {number || null}
         */
        this.PayMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;

    }
}

/**
 * CheckBatchStatus请求参数结构体
 * @class
 */
class CheckBatchStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量任务id数组，最多 200 个
         * @type {Array.<number> || null}
         */
        this.LogIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogIds = 'LogIds' in params ? params.LogIds : null;

    }
}

/**
 * CheckBatchStatus返回参数结构体
 * @class
 */
class CheckBatchStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量任务状态集
         * @type {Array.<BatchStatus> || null}
         */
        this.StatusSet = null;

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

        if (params.StatusSet) {
            this.StatusSet = new Array();
            for (let z in params.StatusSet) {
                let obj = new BatchStatus();
                obj.deserialize(params.StatusSet[z]);
                this.StatusSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTemplateList返回参数结构体
 * @class
 */
class DescribeTemplateListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 模板详细信息列表。
         * @type {Array.<TemplateInfo> || null}
         */
        this.TemplateSet = null;

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

        if (params.TemplateSet) {
            this.TemplateSet = new Array();
            for (let z in params.TemplateSet) {
                let obj = new TemplateInfo();
                obj.deserialize(params.TemplateSet[z]);
                this.TemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDomainBaseInfo请求参数结构体
 * @class
 */
class DescribeDomainBaseInfoRequest extends  AbstractModel {
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
 * DescribeTemplateList请求参数结构体
 * @class
 */
class DescribeTemplateListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 用户注册类型，默认:all , 个人：I ,企业: E
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 认证状态：未实名认证:NotUpload, 实名审核中:InAudit，已实名认证:Approved，实名审核失败:Reject
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;

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
         * 批量日志ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LogId = null;

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
        this.LogId = 'LogId' in params ? params.LogId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 获取域名基础信息
 * @class
 */
class DomainBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名资源ID。
         * @type {string || null}
         */
        this.DomainId = null;

        /**
         * 域名名称。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 域名实名认证状态。
NotUpload：未实名认证
InAudit：实名审核中
Approved：实名审核通过
Reject：实名审核失败
         * @type {string || null}
         */
        this.RealNameAuditStatus = null;

        /**
         * 域名实名认证不通过原因。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RealNameAuditUnpassReason = null;

        /**
         * 域名命名审核状态。
NotAudit：命名审核未上传
Pending：命名审核待上传
Auditing：域名命名审核中
Approved：域名命名审核通过
Rejected：域名命名审核拒绝
         * @type {string || null}
         */
        this.DomainNameAuditStatus = null;

        /**
         * 域名命名审核不通过原因。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DomainNameAuditUnpassReason = null;

        /**
         * 注册时间。
         * @type {string || null}
         */
        this.CreationDate = null;

        /**
         * 到期时间
         * @type {string || null}
         */
        this.ExpirationDate = null;

        /**
         * 域名状态。
ok：正常
serverHold：注册局暂停解析 
clientHold：注册商暂停解析
pendingTransfer：转移中
renewingPeriod：续费期
redemptionPeriod：偿还期
pendingDelete：删除期
serverTransferProhibited：注册局禁止转移
serverUpdateProhibited：注册局禁止更新
serverDeleteProhibited：注册局禁止删除
clientTransferProhibited：注册商禁止转移
clientUpdateProhibited：注册商禁止更新
clientDeleteProhibited：注册商禁止删除
         * @type {Array.<string> || null}
         */
        this.DomainStatus = null;

        /**
         * 域名购买状态。
ok：正常
RegisterPending：待注册
RegisterDoing：注册中
RegisterFailed：注册失败
AboutToExpire: 即将过期
RenewPending：已进入续费期，需要进行续费
RenewDoing：续费中
RedemptionPending：已进入赎回期，需要进行续费
RedemptionDoing：赎回中
TransferPending：待转入中
TransferTransing：转入中
TransferFailed：转入失败
         * @type {string || null}
         */
        this.BuyStatus = null;

        /**
         * 注册类型
epp （腾讯云自有域名）
xinnet (新网域名)
         * @type {string || null}
         */
        this.RegistrarType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.RealNameAuditStatus = 'RealNameAuditStatus' in params ? params.RealNameAuditStatus : null;
        this.RealNameAuditUnpassReason = 'RealNameAuditUnpassReason' in params ? params.RealNameAuditUnpassReason : null;
        this.DomainNameAuditStatus = 'DomainNameAuditStatus' in params ? params.DomainNameAuditStatus : null;
        this.DomainNameAuditUnpassReason = 'DomainNameAuditUnpassReason' in params ? params.DomainNameAuditUnpassReason : null;
        this.CreationDate = 'CreationDate' in params ? params.CreationDate : null;
        this.ExpirationDate = 'ExpirationDate' in params ? params.ExpirationDate : null;
        this.DomainStatus = 'DomainStatus' in params ? params.DomainStatus : null;
        this.BuyStatus = 'BuyStatus' in params ? params.BuyStatus : null;
        this.RegistrarType = 'RegistrarType' in params ? params.RegistrarType : null;

    }
}

/**
 * 域名价格信息
 * @class
 */
class PriceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名后缀，例如.com
         * @type {string || null}
         */
        this.Tld = null;

        /**
         * 购买年限，范围[1-10]
         * @type {number || null}
         */
        this.Year = null;

        /**
         * 域名原价
         * @type {number || null}
         */
        this.Price = null;

        /**
         * 域名现价
         * @type {number || null}
         */
        this.RealPrice = null;

        /**
         * 商品的购买类型，新购，续费，赎回，转入，续费并转入
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
        this.Tld = 'Tld' in params ? params.Tld : null;
        this.Year = 'Year' in params ? params.Year : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.RealPrice = 'RealPrice' in params ? params.RealPrice : null;
        this.Operation = 'Operation' in params ? params.Operation : null;

    }
}

/**
 * DescribeDomainNameList请求参数结构体
 * @class
 */
class DescribeDomainNameListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，取值范围[1,100]
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeDomainNameList返回参数结构体
 * @class
 */
class DescribeDomainNameListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名信息集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DomainList> || null}
         */
        this.DomainSet = null;

        /**
         * 域名总数量
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

        if (params.DomainSet) {
            this.DomainSet = new Array();
            for (let z in params.DomainSet) {
                let obj = new DomainList();
                obj.deserialize(params.DomainSet[z]);
                this.DomainSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 域名联系人信息
 * @class
 */
class ContactInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 注册人（中文）
         * @type {string || null}
         */
        this.OrganizationNameCN = null;

        /**
         * 注册人（英文）
         * @type {string || null}
         */
        this.OrganizationName = null;

        /**
         * 联系人（中文）
         * @type {string || null}
         */
        this.RegistrantNameCN = null;

        /**
         * 联系人（英文）
         * @type {string || null}
         */
        this.RegistrantName = null;

        /**
         * 省份（中文）
         * @type {string || null}
         */
        this.ProvinceCN = null;

        /**
         * 城市（中文）
         * @type {string || null}
         */
        this.CityCN = null;

        /**
         * 街道（中文）
         * @type {string || null}
         */
        this.StreetCN = null;

        /**
         * 街道（英文）
         * @type {string || null}
         */
        this.Street = null;

        /**
         * 国家（中文）
         * @type {string || null}
         */
        this.CountryCN = null;

        /**
         * 联系人手机号
         * @type {string || null}
         */
        this.Telephone = null;

        /**
         * 联系人邮箱
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 邮编
         * @type {string || null}
         */
        this.ZipCode = null;

        /**
         * 用户类型 E:组织， I:个人
         * @type {string || null}
         */
        this.RegistrantType = null;

        /**
         * 省份（英文）。作为入参时可以不填
         * @type {string || null}
         */
        this.Province = null;

        /**
         * 城市（英文）。作为入参时可以不填
         * @type {string || null}
         */
        this.City = null;

        /**
         * 国家（英文）。作为入参时可以不填
         * @type {string || null}
         */
        this.Country = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrganizationNameCN = 'OrganizationNameCN' in params ? params.OrganizationNameCN : null;
        this.OrganizationName = 'OrganizationName' in params ? params.OrganizationName : null;
        this.RegistrantNameCN = 'RegistrantNameCN' in params ? params.RegistrantNameCN : null;
        this.RegistrantName = 'RegistrantName' in params ? params.RegistrantName : null;
        this.ProvinceCN = 'ProvinceCN' in params ? params.ProvinceCN : null;
        this.CityCN = 'CityCN' in params ? params.CityCN : null;
        this.StreetCN = 'StreetCN' in params ? params.StreetCN : null;
        this.Street = 'Street' in params ? params.Street : null;
        this.CountryCN = 'CountryCN' in params ? params.CountryCN : null;
        this.Telephone = 'Telephone' in params ? params.Telephone : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.ZipCode = 'ZipCode' in params ? params.ZipCode : null;
        this.RegistrantType = 'RegistrantType' in params ? params.RegistrantType : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.Country = 'Country' in params ? params.Country : null;

    }
}

/**
 * DescribeDomainPriceList返回参数结构体
 * @class
 */
class DescribeDomainPriceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名价格列表
         * @type {Array.<PriceInfo> || null}
         */
        this.PriceList = null;

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

        if (params.PriceList) {
            this.PriceList = new Array();
            for (let z in params.PriceList) {
                let obj = new PriceInfo();
                obj.deserialize(params.PriceList[z]);
                this.PriceList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckDomain请求参数结构体
 * @class
 */
class CheckDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 所查询域名名称
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 年限
         * @type {string || null}
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
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.Period = 'Period' in params ? params.Period : null;

    }
}

/**
 * 认证资料信息
 * @class
 */
class CertificateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证件号码。
         * @type {string || null}
         */
        this.CertificateCode = null;

        /**
         * 证件类型。
         * @type {string || null}
         */
        this.CertificateType = null;

        /**
         * 证件照片地址。
         * @type {string || null}
         */
        this.ImgUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateCode = 'CertificateCode' in params ? params.CertificateCode : null;
        this.CertificateType = 'CertificateType' in params ? params.CertificateType : null;
        this.ImgUrl = 'ImgUrl' in params ? params.ImgUrl : null;

    }
}

module.exports = {
    CheckDomainResponse: CheckDomainResponse,
    BatchStatus: BatchStatus,
    DomainList: DomainList,
    DescribeDomainPriceListRequest: DescribeDomainPriceListRequest,
    DescribeDomainBaseInfoResponse: DescribeDomainBaseInfoResponse,
    TemplateInfo: TemplateInfo,
    CreateDomainBatchRequest: CreateDomainBatchRequest,
    CheckBatchStatusRequest: CheckBatchStatusRequest,
    CheckBatchStatusResponse: CheckBatchStatusResponse,
    DescribeTemplateListResponse: DescribeTemplateListResponse,
    DescribeDomainBaseInfoRequest: DescribeDomainBaseInfoRequest,
    DescribeTemplateListRequest: DescribeTemplateListRequest,
    CreateDomainBatchResponse: CreateDomainBatchResponse,
    DomainBaseInfo: DomainBaseInfo,
    PriceInfo: PriceInfo,
    DescribeDomainNameListRequest: DescribeDomainNameListRequest,
    DescribeDomainNameListResponse: DescribeDomainNameListResponse,
    ContactInfo: ContactInfo,
    DescribeDomainPriceListResponse: DescribeDomainPriceListResponse,
    CheckDomainRequest: CheckDomainRequest,
    CertificateInfo: CertificateInfo,

}
