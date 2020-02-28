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
 * ApplyCertificate返回参数结构体
 * @class
 */
class ApplyCertificateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书ID。
         * @type {string || null}
         */
        this.CertificateId = null;

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
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCertificate请求参数结构体
 * @class
 */
class DeleteCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书ID。
         * @type {string || null}
         */
        this.CertificateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;

    }
}

/**
 * DescribeCertificateOperateLogs返回参数结构体
 * @class
 */
class DescribeCertificateOperateLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前查询条件日志总数。
         * @type {number || null}
         */
        this.AllTotal = null;

        /**
         * 本次请求返回的日志数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 证书操作日志列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OperationLog> || null}
         */
        this.OperateLogs = null;

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
        this.AllTotal = 'AllTotal' in params ? params.AllTotal : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.OperateLogs) {
            this.OperateLogs = new Array();
            for (let z in params.OperateLogs) {
                let obj = new OperationLog();
                obj.deserialize(params.OperateLogs[z]);
                this.OperateLogs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CommitCertificateInformation请求参数结构体
 * @class
 */
class CommitCertificateInformationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书id。
         * @type {string || null}
         */
        this.CertificateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;

    }
}

/**
 * CommitCertificateInformation返回参数结构体
 * @class
 */
class CommitCertificateInformationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 亚信订单号。
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 证书状态。
         * @type {number || null}
         */
        this.Status = null;

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
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ReplaceCertificate返回参数结构体
 * @class
 */
class ReplaceCertificateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书ID。
         * @type {string || null}
         */
        this.CertificateId = null;

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
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DownloadCertificate请求参数结构体
 * @class
 */
class DownloadCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书ID。
         * @type {string || null}
         */
        this.CertificateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;

    }
}

/**
 * CancelCertificateOrder请求参数结构体
 * @class
 */
class CancelCertificateOrderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书id。
         * @type {string || null}
         */
        this.CertificateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;

    }
}

/**
 * ModifyCertificateProject返回参数结构体
 * @class
 */
class ModifyCertificateProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改所属项目成功的证书集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SuccessCertificates = null;

        /**
         * 修改所属项目失败的证书集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.FailCertificates = null;

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
        this.SuccessCertificates = 'SuccessCertificates' in params ? params.SuccessCertificates : null;
        this.FailCertificates = 'FailCertificates' in params ? params.FailCertificates : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 获取证书列表（DescribeCertificates）返回参数键为 Certificates 的内容。
 * @class
 */
class Certificates extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户UIN。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * 项目ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 证书来源。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.From = null;

        /**
         * 证书套餐类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PackageType = null;

        /**
         * 证书类型（目前支持：CA = 客户端证书，SVR = 服务器证书）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertificateType = null;

        /**
         * 证书办法者名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductZhName = null;

        /**
         * 主域名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 别名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 状态值 0：审核中，1：已通过，2：审核失败，3：已过期，4：已添加云解析记录，5：OV/EV 证书，待提交资料，6：订单取消中，7：已取消，8：已提交资料， 待上传确认函。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 证书扩展信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CertificateExtra || null}
         */
        this.CertificateExtra = null;

        /**
         * 漏洞扫描状态：INACTIVE = 未开启，ACTIVE = 已开启
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VulnerabilityStatus = null;

        /**
         * 状态信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StatusMsg = null;

        /**
         * 验证类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VerifyType = null;

        /**
         * 证书生效时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertBeginTime = null;

        /**
         * 证书过期时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertEndTime = null;

        /**
         * 证书过期时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ValidityPeriod = null;

        /**
         * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InsertTime = null;

        /**
         * 证书ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * 证书包含的多个域名（包含主域名）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SubjectAltName = null;

        /**
         * 证书类型名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PackageTypeName = null;

        /**
         * 状态名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StatusName = null;

        /**
         * 是否为 VIP 客户。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsVip = null;

        /**
         * 是否为 DV 版证书。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsDv = null;

        /**
         * 是否为泛域名证书。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsWildcard = null;

        /**
         * 是否启用了漏洞扫描功能。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsVulnerability = null;

        /**
         * 是否可重颁发证书。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.RenewAble = null;

        /**
         * 项目信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ProjectInfo || null}
         */
        this.ProjectInfo = null;

        /**
         * 需要权限的资源。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.BoundResource = null;

        /**
         * 是否可部署。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Deployable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.From = 'From' in params ? params.From : null;
        this.PackageType = 'PackageType' in params ? params.PackageType : null;
        this.CertificateType = 'CertificateType' in params ? params.CertificateType : null;
        this.ProductZhName = 'ProductZhName' in params ? params.ProductZhName : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.CertificateExtra) {
            let obj = new CertificateExtra();
            obj.deserialize(params.CertificateExtra)
            this.CertificateExtra = obj;
        }
        this.VulnerabilityStatus = 'VulnerabilityStatus' in params ? params.VulnerabilityStatus : null;
        this.StatusMsg = 'StatusMsg' in params ? params.StatusMsg : null;
        this.VerifyType = 'VerifyType' in params ? params.VerifyType : null;
        this.CertBeginTime = 'CertBeginTime' in params ? params.CertBeginTime : null;
        this.CertEndTime = 'CertEndTime' in params ? params.CertEndTime : null;
        this.ValidityPeriod = 'ValidityPeriod' in params ? params.ValidityPeriod : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.SubjectAltName = 'SubjectAltName' in params ? params.SubjectAltName : null;
        this.PackageTypeName = 'PackageTypeName' in params ? params.PackageTypeName : null;
        this.StatusName = 'StatusName' in params ? params.StatusName : null;
        this.IsVip = 'IsVip' in params ? params.IsVip : null;
        this.IsDv = 'IsDv' in params ? params.IsDv : null;
        this.IsWildcard = 'IsWildcard' in params ? params.IsWildcard : null;
        this.IsVulnerability = 'IsVulnerability' in params ? params.IsVulnerability : null;
        this.RenewAble = 'RenewAble' in params ? params.RenewAble : null;

        if (params.ProjectInfo) {
            let obj = new ProjectInfo();
            obj.deserialize(params.ProjectInfo)
            this.ProjectInfo = obj;
        }
        this.BoundResource = 'BoundResource' in params ? params.BoundResource : null;
        this.Deployable = 'Deployable' in params ? params.Deployable : null;

    }
}

/**
 * 获取证书列表（DescribeCertificates）返回参数键为 Certificates数组下，key为CertificateExtra 的内容。
 * @class
 */
class CertificateExtra extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书可配置域名数量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DomainNumber = null;

        /**
         * 原始证书ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OriginCertificateId = null;

        /**
         * 重颁发证书原始ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReplacedBy = null;

        /**
         * 重颁发证书新ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReplacedFor = null;

        /**
         * 新订单证书ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RenewOrder = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainNumber = 'DomainNumber' in params ? params.DomainNumber : null;
        this.OriginCertificateId = 'OriginCertificateId' in params ? params.OriginCertificateId : null;
        this.ReplacedBy = 'ReplacedBy' in params ? params.ReplacedBy : null;
        this.ReplacedFor = 'ReplacedFor' in params ? params.ReplacedFor : null;
        this.RenewOrder = 'RenewOrder' in params ? params.RenewOrder : null;

    }
}

/**
 * DescribeCertificate返回参数结构体
 * @class
 */
class DescribeCertificateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户uin。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * 项目ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 证书来源（trustasia = 亚洲诚信，upload = 用户上传）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.From = null;

        /**
         * 证书类型（目前支持：CA = 客户端证书，SVR = 服务器证书）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertificateType = null;

        /**
         * 证书类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PackageType = null;

        /**
         * 证书办法者名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductZhName = null;

        /**
         * 域名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 别名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 证书类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 状态信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StatusMsg = null;

        /**
         * 证书验证类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VerifyType = null;

        /**
         * 漏洞扫描状态。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VulnerabilityStatus = null;

        /**
         * 证书生效时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertBeginTime = null;

        /**
         * 证书失效时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertEndTime = null;

        /**
         * 证书有效期：单位(月)。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ValidityPeriod = null;

        /**
         * 申请时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InsertTime = null;

        /**
         * 订单ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 证书扩展信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CertificateExtra || null}
         */
        this.CertificateExtra = null;

        /**
         * DV认证信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DvAuthDetail || null}
         */
        this.DvAuthDetail = null;

        /**
         * 漏洞扫描评估报告。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VulnerabilityReport = null;

        /**
         * 证书ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * 证书类型名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PackageTypeName = null;

        /**
         * 状态描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StatusName = null;

        /**
         * 证书包含的多个域名（包含主域名）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SubjectAltName = null;

        /**
         * 是否为 VIP 客户。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsVip = null;

        /**
         * 是否为泛域名证书。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsWildcard = null;

        /**
         * 是否为 DV 版证书。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsDv = null;

        /**
         * 是否启用了漏洞扫描功能。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsVulnerability = null;

        /**
         * 是否可重颁发证书。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.RenewAble = null;

        /**
         * 提交的资料信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SubmittedData || null}
         */
        this.SubmittedData = null;

        /**
         * 是否可部署。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Deployable = null;

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
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.From = 'From' in params ? params.From : null;
        this.CertificateType = 'CertificateType' in params ? params.CertificateType : null;
        this.PackageType = 'PackageType' in params ? params.PackageType : null;
        this.ProductZhName = 'ProductZhName' in params ? params.ProductZhName : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusMsg = 'StatusMsg' in params ? params.StatusMsg : null;
        this.VerifyType = 'VerifyType' in params ? params.VerifyType : null;
        this.VulnerabilityStatus = 'VulnerabilityStatus' in params ? params.VulnerabilityStatus : null;
        this.CertBeginTime = 'CertBeginTime' in params ? params.CertBeginTime : null;
        this.CertEndTime = 'CertEndTime' in params ? params.CertEndTime : null;
        this.ValidityPeriod = 'ValidityPeriod' in params ? params.ValidityPeriod : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;

        if (params.CertificateExtra) {
            let obj = new CertificateExtra();
            obj.deserialize(params.CertificateExtra)
            this.CertificateExtra = obj;
        }

        if (params.DvAuthDetail) {
            let obj = new DvAuthDetail();
            obj.deserialize(params.DvAuthDetail)
            this.DvAuthDetail = obj;
        }
        this.VulnerabilityReport = 'VulnerabilityReport' in params ? params.VulnerabilityReport : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.PackageTypeName = 'PackageTypeName' in params ? params.PackageTypeName : null;
        this.StatusName = 'StatusName' in params ? params.StatusName : null;
        this.SubjectAltName = 'SubjectAltName' in params ? params.SubjectAltName : null;
        this.IsVip = 'IsVip' in params ? params.IsVip : null;
        this.IsWildcard = 'IsWildcard' in params ? params.IsWildcard : null;
        this.IsDv = 'IsDv' in params ? params.IsDv : null;
        this.IsVulnerability = 'IsVulnerability' in params ? params.IsVulnerability : null;
        this.RenewAble = 'RenewAble' in params ? params.RenewAble : null;

        if (params.SubmittedData) {
            let obj = new SubmittedData();
            obj.deserialize(params.SubmittedData)
            this.SubmittedData = obj;
        }
        this.Deployable = 'Deployable' in params ? params.Deployable : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 证书操作日志
 * @class
 */
class OperationLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作证书动作
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 操作时间
         * @type {string || null}
         */
        this.CreatedOn = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;

    }
}

/**
 * UploadCertificate请求参数结构体
 * @class
 */
class UploadCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书公钥。
         * @type {string || null}
         */
        this.CertificatePublicKey = null;

        /**
         * 私钥内容，证书类型为SVR时必填，为CA时可不填。
         * @type {string || null}
         */
        this.CertificatePrivateKey = null;

        /**
         * 证书类型，可选值：CA，SVR，默认SVR。
         * @type {string || null}
         */
        this.CertificateType = null;

        /**
         * 证书别名。
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 项目id。
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
        this.CertificatePublicKey = 'CertificatePublicKey' in params ? params.CertificatePublicKey : null;
        this.CertificatePrivateKey = 'CertificatePrivateKey' in params ? params.CertificatePrivateKey : null;
        this.CertificateType = 'CertificateType' in params ? params.CertificateType : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DescribeCertificateDetail请求参数结构体
 * @class
 */
class DescribeCertificateDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书id
         * @type {string || null}
         */
        this.CertificateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;

    }
}

/**
 * ApplyCertificate请求参数结构体
 * @class
 */
class ApplyCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验证方式（'DNS_AUTO'， 'DNS'， 'FILE'）：DNS_AUTO = 自动DNS验证。
         * @type {string || null}
         */
        this.DvAuthMethod = null;

        /**
         * 域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 项目ID。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 证书类型，默认2。免费证书目前只有 2 了。
         * @type {string || null}
         */
        this.PackageType = null;

        /**
         * 邮箱。
         * @type {string || null}
         */
        this.ContactEmail = null;

        /**
         * 手机。
         * @type {string || null}
         */
        this.ContactPhone = null;

        /**
         * 有效期，默认12。
         * @type {string || null}
         */
        this.ValidityPeriod = null;

        /**
         * 加密算法，仅支持RSA。
         * @type {string || null}
         */
        this.CsrEncryptAlgo = null;

        /**
         * 密钥对参数，仅支持2048。
         * @type {string || null}
         */
        this.CsrKeyParameter = null;

        /**
         * csr的加密密码。
         * @type {string || null}
         */
        this.CsrKeyPassword = null;

        /**
         * 备注名称。
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 原证书id，用于重新申请。
         * @type {string || null}
         */
        this.OldCertificateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DvAuthMethod = 'DvAuthMethod' in params ? params.DvAuthMethod : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.PackageType = 'PackageType' in params ? params.PackageType : null;
        this.ContactEmail = 'ContactEmail' in params ? params.ContactEmail : null;
        this.ContactPhone = 'ContactPhone' in params ? params.ContactPhone : null;
        this.ValidityPeriod = 'ValidityPeriod' in params ? params.ValidityPeriod : null;
        this.CsrEncryptAlgo = 'CsrEncryptAlgo' in params ? params.CsrEncryptAlgo : null;
        this.CsrKeyParameter = 'CsrKeyParameter' in params ? params.CsrKeyParameter : null;
        this.CsrKeyPassword = 'CsrKeyPassword' in params ? params.CsrKeyPassword : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.OldCertificateId = 'OldCertificateId' in params ? params.OldCertificateId : null;

    }
}

/**
 * ReplaceCertificate请求参数结构体
 * @class
 */
class ReplaceCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书ID。
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * 验证类型 DNS,DNS_AUTO,FILE
         * @type {string || null}
         */
        this.ValidType = null;

        /**
         * 类型，可选项：Original、Upload、Online，默认original。
         * @type {string || null}
         */
        this.CsrType = null;

        /**
         * CSR内容。
         * @type {string || null}
         */
        this.CsrContent = null;

        /**
         * key密码。
         * @type {string || null}
         */
        this.CsrkeyPassword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.ValidType = 'ValidType' in params ? params.ValidType : null;
        this.CsrType = 'CsrType' in params ? params.CsrType : null;
        this.CsrContent = 'CsrContent' in params ? params.CsrContent : null;
        this.CsrkeyPassword = 'CsrkeyPassword' in params ? params.CsrkeyPassword : null;

    }
}

/**
 * DeleteCertificate返回参数结构体
 * @class
 */
class DeleteCertificateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除结果。
         * @type {boolean || null}
         */
        this.DeleteResult = null;

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
        this.DeleteResult = 'DeleteResult' in params ? params.DeleteResult : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 获取证书列表（DescribeCertificate）返回参数键为 DvAuthDetail的内容。
 * @class
 */
class DvAuthDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * DV认证密钥。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DvAuthKey = null;

        /**
         * DV认证值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DvAuthValue = null;

        /**
         * DV认证值域名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DvAuthDomain = null;

        /**
         * DV认证值路径。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DvAuthPath = null;

        /**
         * DV认证子域名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DvAuthKeySubDomain = null;

        /**
         * DV认证信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DvAuths> || null}
         */
        this.DvAuths = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DvAuthKey = 'DvAuthKey' in params ? params.DvAuthKey : null;
        this.DvAuthValue = 'DvAuthValue' in params ? params.DvAuthValue : null;
        this.DvAuthDomain = 'DvAuthDomain' in params ? params.DvAuthDomain : null;
        this.DvAuthPath = 'DvAuthPath' in params ? params.DvAuthPath : null;
        this.DvAuthKeySubDomain = 'DvAuthKeySubDomain' in params ? params.DvAuthKeySubDomain : null;

        if (params.DvAuths) {
            this.DvAuths = new Array();
            for (let z in params.DvAuths) {
                let obj = new DvAuths();
                obj.deserialize(params.DvAuths[z]);
                this.DvAuths.push(obj);
            }
        }

    }
}

/**
 * ModifyCertificateProject请求参数结构体
 * @class
 */
class ModifyCertificateProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要修改所属项目的证书id集合，最多100个证书
         * @type {Array.<string> || null}
         */
        this.CertificateIdList = null;

        /**
         * 项目id。
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
        this.CertificateIdList = 'CertificateIdList' in params ? params.CertificateIdList : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * 获取证书列表（Certificate）返回参数键为 DvAuths 的内容。
 * @class
 */
class DvAuths extends  AbstractModel {
    constructor(){
        super();

        /**
         * DV认证密钥。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DvAuthKey = null;

        /**
         * DV认证值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DvAuthValue = null;

        /**
         * DV认证值域名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DvAuthDomain = null;

        /**
         * DV认证值路径。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DvAuthPath = null;

        /**
         * DV认证子域名，
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DvAuthSubDomain = null;

        /**
         * DV认证类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DvAuthVerifyType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DvAuthKey = 'DvAuthKey' in params ? params.DvAuthKey : null;
        this.DvAuthValue = 'DvAuthValue' in params ? params.DvAuthValue : null;
        this.DvAuthDomain = 'DvAuthDomain' in params ? params.DvAuthDomain : null;
        this.DvAuthPath = 'DvAuthPath' in params ? params.DvAuthPath : null;
        this.DvAuthSubDomain = 'DvAuthSubDomain' in params ? params.DvAuthSubDomain : null;
        this.DvAuthVerifyType = 'DvAuthVerifyType' in params ? params.DvAuthVerifyType : null;

    }
}

/**
 * ModifyCertificateAlias请求参数结构体
 * @class
 */
class ModifyCertificateAliasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书id。
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * 证书备注。
         * @type {string || null}
         */
        this.Alias = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;

    }
}

/**
 * DescribeCertificate请求参数结构体
 * @class
 */
class DescribeCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书ID。
         * @type {string || null}
         */
        this.CertificateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;

    }
}

/**
 * 获取证书列表（DescribeCertificates）返回参数键为 Certificates下，key为 ProjectInfo的内容。
 * @class
 */
class ProjectInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * 项目创建用户UIN。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProjectCreatorUin = null;

        /**
         * 项目创建时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectCreateTime = null;

        /**
         * 项目信息简述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectResume = null;

        /**
         * 用户UIN。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OwnerUin = null;

        /**
         * 项目ID。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.ProjectCreatorUin = 'ProjectCreatorUin' in params ? params.ProjectCreatorUin : null;
        this.ProjectCreateTime = 'ProjectCreateTime' in params ? params.ProjectCreateTime : null;
        this.ProjectResume = 'ProjectResume' in params ? params.ProjectResume : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DescribeCertificateOperateLogs请求参数结构体
 * @class
 */
class DescribeCertificateOperateLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 请求日志数量，默认为20。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 开始时间，默认15天前。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，默认现在时间。
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * CancelCertificateOrder返回参数结构体
 * @class
 */
class CancelCertificateOrderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 取消订单成功的证书id
         * @type {string || null}
         */
        this.CertificateId = null;

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
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SubmitCertificateInformation返回参数结构体
 * @class
 */
class SubmitCertificateInformationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书id。
         * @type {string || null}
         */
        this.CertificateId = null;

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
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCertificates返回参数结构体
 * @class
 */
class DescribeCertificatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Certificates> || null}
         */
        this.Certificates = null;

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

        if (params.Certificates) {
            this.Certificates = new Array();
            for (let z in params.Certificates) {
                let obj = new Certificates();
                obj.deserialize(params.Certificates[z]);
                this.Certificates.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DownloadCertificate返回参数结构体
 * @class
 */
class DownloadCertificateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ZIP base64编码内容。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Content = null;

        /**
         * MIME类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContentType = null;

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
        this.Content = 'Content' in params ? params.Content : null;
        this.ContentType = 'ContentType' in params ? params.ContentType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UploadCertificate返回参数结构体
 * @class
 */
class UploadCertificateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书ID。
         * @type {string || null}
         */
        this.CertificateId = null;

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
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCertificateDetail返回参数结构体
 * @class
 */
class DescribeCertificateDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户uin。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * 项目ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 证书来源（trustasia = 亚洲诚信，upload = 用户上传）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.From = null;

        /**
         * 证书类型（目前支持：CA = 客户端证书，SVR = 服务器证书）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertificateType = null;

        /**
         * 证书类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PackageType = null;

        /**
         * 证书办法者名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductZhName = null;

        /**
         * 域名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 别名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 证书状态。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 状态信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StatusMsg = null;

        /**
         * 证书验证类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VerifyType = null;

        /**
         * 漏洞扫描状态。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VulnerabilityStatus = null;

        /**
         * 证书生效时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertBeginTime = null;

        /**
         * 证书失效时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertEndTime = null;

        /**
         * 证书有效期：单位(月)。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ValidityPeriod = null;

        /**
         * 申请时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InsertTime = null;

        /**
         * 订单ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 证书扩展信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CertificateExtra || null}
         */
        this.CertificateExtra = null;

        /**
         * 证书私钥
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertificatePrivateKey = null;

        /**
         * 证书公钥
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertificatePublicKey = null;

        /**
         * DV认证信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DvAuthDetail || null}
         */
        this.DvAuthDetail = null;

        /**
         * 漏洞扫描评估报告。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VulnerabilityReport = null;

        /**
         * 证书ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * 证书类型名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TypeName = null;

        /**
         * 状态描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StatusName = null;

        /**
         * 证书包含的多个域名（包含主域名）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SubjectAltName = null;

        /**
         * 是否为 VIP 客户。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsVip = null;

        /**
         * 是否为泛域名证书。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsWildcard = null;

        /**
         * 是否为 DV 版证书。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsDv = null;

        /**
         * 是否启用了漏洞扫描功能。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsVulnerability = null;

        /**
         * 提交的资料信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SubmittedData || null}
         */
        this.SubmittedData = null;

        /**
         * 是否可重颁发证书。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.RenewAble = null;

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
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.From = 'From' in params ? params.From : null;
        this.CertificateType = 'CertificateType' in params ? params.CertificateType : null;
        this.PackageType = 'PackageType' in params ? params.PackageType : null;
        this.ProductZhName = 'ProductZhName' in params ? params.ProductZhName : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusMsg = 'StatusMsg' in params ? params.StatusMsg : null;
        this.VerifyType = 'VerifyType' in params ? params.VerifyType : null;
        this.VulnerabilityStatus = 'VulnerabilityStatus' in params ? params.VulnerabilityStatus : null;
        this.CertBeginTime = 'CertBeginTime' in params ? params.CertBeginTime : null;
        this.CertEndTime = 'CertEndTime' in params ? params.CertEndTime : null;
        this.ValidityPeriod = 'ValidityPeriod' in params ? params.ValidityPeriod : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;

        if (params.CertificateExtra) {
            let obj = new CertificateExtra();
            obj.deserialize(params.CertificateExtra)
            this.CertificateExtra = obj;
        }
        this.CertificatePrivateKey = 'CertificatePrivateKey' in params ? params.CertificatePrivateKey : null;
        this.CertificatePublicKey = 'CertificatePublicKey' in params ? params.CertificatePublicKey : null;

        if (params.DvAuthDetail) {
            let obj = new DvAuthDetail();
            obj.deserialize(params.DvAuthDetail)
            this.DvAuthDetail = obj;
        }
        this.VulnerabilityReport = 'VulnerabilityReport' in params ? params.VulnerabilityReport : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.TypeName = 'TypeName' in params ? params.TypeName : null;
        this.StatusName = 'StatusName' in params ? params.StatusName : null;
        this.SubjectAltName = 'SubjectAltName' in params ? params.SubjectAltName : null;
        this.IsVip = 'IsVip' in params ? params.IsVip : null;
        this.IsWildcard = 'IsWildcard' in params ? params.IsWildcard : null;
        this.IsDv = 'IsDv' in params ? params.IsDv : null;
        this.IsVulnerability = 'IsVulnerability' in params ? params.IsVulnerability : null;

        if (params.SubmittedData) {
            let obj = new SubmittedData();
            obj.deserialize(params.SubmittedData)
            this.SubmittedData = obj;
        }
        this.RenewAble = 'RenewAble' in params ? params.RenewAble : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCertificateAlias返回参数结构体
 * @class
 */
class ModifyCertificateAliasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改成功的证书id。
         * @type {string || null}
         */
        this.CertificateId = null;

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
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SubmitCertificateInformation请求参数结构体
 * @class
 */
class SubmitCertificateInformationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书id。
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * Csr生成方式: online = 在线生成, parse = 手动上传 。
         * @type {string || null}
         */
        this.CsrType = null;

        /**
         * 上传的Csr内容。
         * @type {string || null}
         */
        this.CsrContent = null;

        /**
         * 绑定证书的域名 。
         * @type {string || null}
         */
        this.CertificateDomain = null;

        /**
         * 上传的域名数组（多域名证书可以上传）。
         * @type {Array.<string> || null}
         */
        this.DomainList = null;

        /**
         * 私钥密码 。
         * @type {string || null}
         */
        this.KeyPassword = null;

        /**
         * 公司名称 。
         * @type {string || null}
         */
        this.OrganizationName = null;

        /**
         * 部门名称。
         * @type {string || null}
         */
        this.OrganizationDivision = null;

        /**
         * 公司详细地址 。
         * @type {string || null}
         */
        this.OrganizationAddress = null;

        /**
         * 国家名称 如中国:CN 。
         * @type {string || null}
         */
        this.OrganizationCountry = null;

        /**
         * 公司所在城市 。
         * @type {string || null}
         */
        this.OrganizationCity = null;

        /**
         * 公司所在省份。
         * @type {string || null}
         */
        this.OrganizationRegion = null;

        /**
         * 公司邮编 。
         * @type {string || null}
         */
        this.PostalCode = null;

        /**
         * 公司座机区号 。
         * @type {string || null}
         */
        this.PhoneAreaCode = null;

        /**
         * 公司座机号码 。
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 证书验证方式 。
         * @type {string || null}
         */
        this.VerifyType = null;

        /**
         * 管理人姓。
         * @type {string || null}
         */
        this.AdminFirstName = null;

        /**
         * 管理人名。
         * @type {string || null}
         */
        this.AdminLastName = null;

        /**
         * 管理人手机号码。
         * @type {string || null}
         */
        this.AdminPhoneNum = null;

        /**
         * 管理人邮箱地址。
         * @type {string || null}
         */
        this.AdminEmail = null;

        /**
         * 管理人职位。
         * @type {string || null}
         */
        this.AdminPosition = null;

        /**
         * 联系人姓。
         * @type {string || null}
         */
        this.ContactFirstName = null;

        /**
         * 联系人名。
         * @type {string || null}
         */
        this.ContactLastName = null;

        /**
         * 联系人邮箱地址 。
         * @type {string || null}
         */
        this.ContactEmail = null;

        /**
         * 联系人手机号码 。
         * @type {string || null}
         */
        this.ContactNumber = null;

        /**
         * 联系人职位。
         * @type {string || null}
         */
        this.ContactPosition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.CsrType = 'CsrType' in params ? params.CsrType : null;
        this.CsrContent = 'CsrContent' in params ? params.CsrContent : null;
        this.CertificateDomain = 'CertificateDomain' in params ? params.CertificateDomain : null;
        this.DomainList = 'DomainList' in params ? params.DomainList : null;
        this.KeyPassword = 'KeyPassword' in params ? params.KeyPassword : null;
        this.OrganizationName = 'OrganizationName' in params ? params.OrganizationName : null;
        this.OrganizationDivision = 'OrganizationDivision' in params ? params.OrganizationDivision : null;
        this.OrganizationAddress = 'OrganizationAddress' in params ? params.OrganizationAddress : null;
        this.OrganizationCountry = 'OrganizationCountry' in params ? params.OrganizationCountry : null;
        this.OrganizationCity = 'OrganizationCity' in params ? params.OrganizationCity : null;
        this.OrganizationRegion = 'OrganizationRegion' in params ? params.OrganizationRegion : null;
        this.PostalCode = 'PostalCode' in params ? params.PostalCode : null;
        this.PhoneAreaCode = 'PhoneAreaCode' in params ? params.PhoneAreaCode : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.VerifyType = 'VerifyType' in params ? params.VerifyType : null;
        this.AdminFirstName = 'AdminFirstName' in params ? params.AdminFirstName : null;
        this.AdminLastName = 'AdminLastName' in params ? params.AdminLastName : null;
        this.AdminPhoneNum = 'AdminPhoneNum' in params ? params.AdminPhoneNum : null;
        this.AdminEmail = 'AdminEmail' in params ? params.AdminEmail : null;
        this.AdminPosition = 'AdminPosition' in params ? params.AdminPosition : null;
        this.ContactFirstName = 'ContactFirstName' in params ? params.ContactFirstName : null;
        this.ContactLastName = 'ContactLastName' in params ? params.ContactLastName : null;
        this.ContactEmail = 'ContactEmail' in params ? params.ContactEmail : null;
        this.ContactNumber = 'ContactNumber' in params ? params.ContactNumber : null;
        this.ContactPosition = 'ContactPosition' in params ? params.ContactPosition : null;

    }
}

/**
 * 获取证书列表（DescribeCertificate）返回参数键为 SubmittedData的内容。
 * @class
 */
class SubmittedData extends  AbstractModel {
    constructor(){
        super();

        /**
         * CSR类型，（online = 在线生成CSR，parse = 粘贴CSR）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CsrType = null;

        /**
         * CSR内容。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CsrContent = null;

        /**
         * 域名信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertificateDomain = null;

        /**
         * DNS信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.DomainList = null;

        /**
         * 私钥密码。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.KeyPassword = null;

        /**
         * 企业或单位名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrganizationName = null;

        /**
         * 部门。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrganizationDivision = null;

        /**
         * 地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrganizationAddress = null;

        /**
         * 国家。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrganizationCountry = null;

        /**
         * 省。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrganizationCity = null;

        /**
         * 市。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrganizationRegion = null;

        /**
         * 邮政编码。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PostalCode = null;

        /**
         * 座机区号。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PhoneAreaCode = null;

        /**
         * 座机号码。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 管理员名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AdminFirstName = null;

        /**
         * 管理员姓。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AdminLastName = null;

        /**
         * 管理员电话号码。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AdminPhoneNum = null;

        /**
         * 管理员邮箱地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AdminEmail = null;

        /**
         * 管理员职位。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AdminPosition = null;

        /**
         * 联系人名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContactFirstName = null;

        /**
         * 联系人姓。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContactLastName = null;

        /**
         * 联系人电话号码。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContactNumber = null;

        /**
         * 联系人邮箱地址，
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContactEmail = null;

        /**
         * 联系人职位。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContactPosition = null;

        /**
         * 验证类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VerifyType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CsrType = 'CsrType' in params ? params.CsrType : null;
        this.CsrContent = 'CsrContent' in params ? params.CsrContent : null;
        this.CertificateDomain = 'CertificateDomain' in params ? params.CertificateDomain : null;
        this.DomainList = 'DomainList' in params ? params.DomainList : null;
        this.KeyPassword = 'KeyPassword' in params ? params.KeyPassword : null;
        this.OrganizationName = 'OrganizationName' in params ? params.OrganizationName : null;
        this.OrganizationDivision = 'OrganizationDivision' in params ? params.OrganizationDivision : null;
        this.OrganizationAddress = 'OrganizationAddress' in params ? params.OrganizationAddress : null;
        this.OrganizationCountry = 'OrganizationCountry' in params ? params.OrganizationCountry : null;
        this.OrganizationCity = 'OrganizationCity' in params ? params.OrganizationCity : null;
        this.OrganizationRegion = 'OrganizationRegion' in params ? params.OrganizationRegion : null;
        this.PostalCode = 'PostalCode' in params ? params.PostalCode : null;
        this.PhoneAreaCode = 'PhoneAreaCode' in params ? params.PhoneAreaCode : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.AdminFirstName = 'AdminFirstName' in params ? params.AdminFirstName : null;
        this.AdminLastName = 'AdminLastName' in params ? params.AdminLastName : null;
        this.AdminPhoneNum = 'AdminPhoneNum' in params ? params.AdminPhoneNum : null;
        this.AdminEmail = 'AdminEmail' in params ? params.AdminEmail : null;
        this.AdminPosition = 'AdminPosition' in params ? params.AdminPosition : null;
        this.ContactFirstName = 'ContactFirstName' in params ? params.ContactFirstName : null;
        this.ContactLastName = 'ContactLastName' in params ? params.ContactLastName : null;
        this.ContactNumber = 'ContactNumber' in params ? params.ContactNumber : null;
        this.ContactEmail = 'ContactEmail' in params ? params.ContactEmail : null;
        this.ContactPosition = 'ContactPosition' in params ? params.ContactPosition : null;
        this.VerifyType = 'VerifyType' in params ? params.VerifyType : null;

    }
}

/**
 * DescribeCertificates请求参数结构体
 * @class
 */
class DescribeCertificatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页数。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页数量。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 搜索关键词。
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * 证书类型，可选值：CA，SVR。
         * @type {string || null}
         */
        this.CertificateType = null;

        /**
         * 项目ID。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 按到期时间排序：DESC降序， ASC 升序。
         * @type {string || null}
         */
        this.ExpirationSort = null;

        /**
         * 证书状态。
         * @type {Array.<number> || null}
         */
        this.CertificateStatus = null;

        /**
         * 是否可部署，可选值：1 = 可部署，0 =  不可部署。
         * @type {number || null}
         */
        this.Deployable = null;

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
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.CertificateType = 'CertificateType' in params ? params.CertificateType : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ExpirationSort = 'ExpirationSort' in params ? params.ExpirationSort : null;
        this.CertificateStatus = 'CertificateStatus' in params ? params.CertificateStatus : null;
        this.Deployable = 'Deployable' in params ? params.Deployable : null;

    }
}

module.exports = {
    ApplyCertificateResponse: ApplyCertificateResponse,
    DeleteCertificateRequest: DeleteCertificateRequest,
    DescribeCertificateOperateLogsResponse: DescribeCertificateOperateLogsResponse,
    CommitCertificateInformationRequest: CommitCertificateInformationRequest,
    CommitCertificateInformationResponse: CommitCertificateInformationResponse,
    ReplaceCertificateResponse: ReplaceCertificateResponse,
    DownloadCertificateRequest: DownloadCertificateRequest,
    CancelCertificateOrderRequest: CancelCertificateOrderRequest,
    ModifyCertificateProjectResponse: ModifyCertificateProjectResponse,
    Certificates: Certificates,
    CertificateExtra: CertificateExtra,
    DescribeCertificateResponse: DescribeCertificateResponse,
    OperationLog: OperationLog,
    UploadCertificateRequest: UploadCertificateRequest,
    DescribeCertificateDetailRequest: DescribeCertificateDetailRequest,
    ApplyCertificateRequest: ApplyCertificateRequest,
    ReplaceCertificateRequest: ReplaceCertificateRequest,
    DeleteCertificateResponse: DeleteCertificateResponse,
    DvAuthDetail: DvAuthDetail,
    ModifyCertificateProjectRequest: ModifyCertificateProjectRequest,
    DvAuths: DvAuths,
    ModifyCertificateAliasRequest: ModifyCertificateAliasRequest,
    DescribeCertificateRequest: DescribeCertificateRequest,
    ProjectInfo: ProjectInfo,
    DescribeCertificateOperateLogsRequest: DescribeCertificateOperateLogsRequest,
    CancelCertificateOrderResponse: CancelCertificateOrderResponse,
    SubmitCertificateInformationResponse: SubmitCertificateInformationResponse,
    DescribeCertificatesResponse: DescribeCertificatesResponse,
    DownloadCertificateResponse: DownloadCertificateResponse,
    UploadCertificateResponse: UploadCertificateResponse,
    DescribeCertificateDetailResponse: DescribeCertificateDetailResponse,
    ModifyCertificateAliasResponse: ModifyCertificateAliasResponse,
    SubmitCertificateInformationRequest: SubmitCertificateInformationRequest,
    SubmittedData: SubmittedData,
    DescribeCertificatesRequest: DescribeCertificatesRequest,

}
