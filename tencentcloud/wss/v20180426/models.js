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
 * DeleteCert请求参数结构体
 * @class
 */
class DeleteCertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书 ID，即通过 GetList 拿到的证书列表的 ID 字段
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 模块名称，应填ssl
         * @type {string || null}
         */
        this.ModuleType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.ModuleType = 'ModuleType' in params ? params.ModuleType : null;

    }
}

/**
 * UploadCert返回参数结构体
 * @class
 */
class UploadCertResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书ID
         * @type {string || null}
         */
        this.Id = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCert返回参数结构体
 * @class
 */
class DeleteCertResponse extends  AbstractModel {
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
 * DescribeCertList返回参数结构体
 * @class
 */
class DescribeCertListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 列表
         * @type {Array.<SSLCertificate> || null}
         */
        this.CertificateSet = null;

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

        if (params.CertificateSet) {
            this.CertificateSet = new Array();
            for (let z in params.CertificateSet) {
                let obj = new SSLCertificate();
                obj.deserialize(params.CertificateSet[z]);
                this.CertificateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UploadCert请求参数结构体
 * @class
 */
class UploadCertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书内容
         * @type {string || null}
         */
        this.Cert = null;

        /**
         * 证书类型（目前支持：CA 为客户端证书，SVR 为服务器证书）
         * @type {string || null}
         */
        this.CertType = null;

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 模块名称，应填ssl
         * @type {string || null}
         */
        this.ModuleType = null;

        /**
         * 证书私钥，certType=SVR 时必填
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 证书备注
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
        this.Cert = 'Cert' in params ? params.Cert : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ModuleType = 'ModuleType' in params ? params.ModuleType : null;
        this.Key = 'Key' in params ? params.Key : null;
        this.Alias = 'Alias' in params ? params.Alias : null;

    }
}

/**
 * 获取证书列表（SSLCertificate）返回参数键为CertificateSet的内容
 * @class
 */
class SSLCertificate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 所属账户
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 证书来源：trustasia = 亚洲诚信， upload = 用户上传
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.From = null;

        /**
         * 证书类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 证书类型（目前支持：CA = 客户端证书，SVR = 服务器证书）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertType = null;

        /**
         * 证书办法者名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductZhName = null;

        /**
         * 主域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 别名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 状态值 0：审核中，1：已通过，2：审核失败，3：已过期，4：已添加云解析记录，5：OV/EV 证书，待提交资料，6：订单取消中，7：已取消，8：已提交资料， 待上传确认函
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 漏洞扫描状态：INACTIVE = 未开启，ACTIVE = 已开启
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VulnerabilityStatus = null;

        /**
         * 状态信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StatusMsg = null;

        /**
         * 验证类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VerifyType = null;

        /**
         * 证书生效时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertBeginTime = null;

        /**
         * 证书过期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertEndTime = null;

        /**
         * 证书过期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ValidityPeriod = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InsertTime = null;

        /**
         * 项目信息，ProjectId：项目ID，OwnerUin：项目所属的 uin（默认项目为0），Name：项目名称，CreatorUin：创建项目的 uin，CreateTime：项目创建时间，Info：项目说明
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SSLProjectInfo || null}
         */
        this.ProjectInfo = null;

        /**
         * 证书Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 证书包含的多个域名（包含主域名）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SubjectAltName = null;

        /**
         * 证书类型名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TypeName = null;

        /**
         * 状态名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StatusName = null;

        /**
         * 是否为 VIP 客户
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsVip = null;

        /**
         * 是否我 DV 版证书
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsDv = null;

        /**
         * 是否为泛域名证书
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsWildcard = null;

        /**
         * 是否启用了漏洞扫描功能
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsVulnerability = null;

        /**
         * 证书
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Cert = null;

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
        this.Type = 'Type' in params ? params.Type : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.ProductZhName = 'ProductZhName' in params ? params.ProductZhName : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.VulnerabilityStatus = 'VulnerabilityStatus' in params ? params.VulnerabilityStatus : null;
        this.StatusMsg = 'StatusMsg' in params ? params.StatusMsg : null;
        this.VerifyType = 'VerifyType' in params ? params.VerifyType : null;
        this.CertBeginTime = 'CertBeginTime' in params ? params.CertBeginTime : null;
        this.CertEndTime = 'CertEndTime' in params ? params.CertEndTime : null;
        this.ValidityPeriod = 'ValidityPeriod' in params ? params.ValidityPeriod : null;
        this.InsertTime = 'InsertTime' in params ? params.InsertTime : null;

        if (params.ProjectInfo) {
            let obj = new SSLProjectInfo();
            obj.deserialize(params.ProjectInfo)
            this.ProjectInfo = obj;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.SubjectAltName = 'SubjectAltName' in params ? params.SubjectAltName : null;
        this.TypeName = 'TypeName' in params ? params.TypeName : null;
        this.StatusName = 'StatusName' in params ? params.StatusName : null;
        this.IsVip = 'IsVip' in params ? params.IsVip : null;
        this.IsDv = 'IsDv' in params ? params.IsDv : null;
        this.IsWildcard = 'IsWildcard' in params ? params.IsWildcard : null;
        this.IsVulnerability = 'IsVulnerability' in params ? params.IsVulnerability : null;
        this.Cert = 'Cert' in params ? params.Cert : null;

    }
}

/**
 * DescribeCertList请求参数结构体
 * @class
 */
class DescribeCertListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名称，应填ssl
         * @type {string || null}
         */
        this.ModuleType = null;

        /**
         * 页数，默认第一页
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页条数，默认每页20条
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 搜索关键字
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * 证书类型（目前支持:CA=客户端证书,SVR=服务器证书）
         * @type {string || null}
         */
        this.CertType = null;

        /**
         * 证书id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 是否同时获取证书内容
         * @type {string || null}
         */
        this.WithCert = null;

        /**
         * 如传，则只返回可以给该域名使用的证书
         * @type {string || null}
         */
        this.AltDomain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModuleType = 'ModuleType' in params ? params.ModuleType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.WithCert = 'WithCert' in params ? params.WithCert : null;
        this.AltDomain = 'AltDomain' in params ? params.AltDomain : null;

    }
}

/**
 * 获取证书列表接口（SSLProjectInfo）出参键为CertificateSet下的元素ProjectIno详情
 * @class
 */
class SSLProjectInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 项目所属的 uin（默认项目为0）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OwnerUin = null;

        /**
         * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 创建项目的 uin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreatorUin = null;

        /**
         * 项目创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 项目说明
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Info = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.CreatorUin = 'CreatorUin' in params ? params.CreatorUin : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Info = 'Info' in params ? params.Info : null;

    }
}

module.exports = {
    DeleteCertRequest: DeleteCertRequest,
    UploadCertResponse: UploadCertResponse,
    DeleteCertResponse: DeleteCertResponse,
    DescribeCertListResponse: DescribeCertListResponse,
    UploadCertRequest: UploadCertRequest,
    SSLCertificate: SSLCertificate,
    DescribeCertListRequest: DescribeCertListRequest,
    SSLProjectInfo: SSLProjectInfo,

}
