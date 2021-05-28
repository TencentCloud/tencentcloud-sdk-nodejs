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
 * RefreshDomain返回参数结构体
 * @class
 */
class RefreshDomainResponse extends  AbstractModel {
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
 * DeleteDomain请求参数结构体
 * @class
 */
class DeleteDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名ID，可通过搜索域名接口获得
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
 * DescribeNoticeInfo请求参数结构体
 * @class
 */
class DescribeNoticeInfoRequest extends  AbstractModel {
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
 * ModifyDomainTags返回参数结构体
 * @class
 */
class ModifyDomainTagsResponse extends  AbstractModel {
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
 * DescribeDomainCerts请求参数结构体
 * @class
 */
class DescribeDomainCertsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名ID，可通过搜索域名接口获得
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
 * RefreshDomain请求参数结构体
 * @class
 */
class RefreshDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名列表中的ID，可通过搜索域名接口获得
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
 * ResolveDomain请求参数结构体
 * @class
 */
class ResolveDomainRequest extends  AbstractModel {
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
 * 监控域名列表
 * @class
 */
class DescribeDomains extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列表数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DomainSiteInfo> || null}
         */
        this.Result = null;

        /**
         * 搜索出来的数量
         * @type {number || null}
         */
        this.SearchTotal = null;

        /**
         * 总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 允许的监控数量
         * @type {number || null}
         */
        this.AllowMonitoringCount = null;

        /**
         * 当前监控的数量
         * @type {number || null}
         */
        this.CurrentMonitoringCount = null;

        /**
         * 允许添加域名总数
         * @type {number || null}
         */
        this.AllowMaxAddDomain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new DomainSiteInfo();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.SearchTotal = 'SearchTotal' in params ? params.SearchTotal : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.AllowMonitoringCount = 'AllowMonitoringCount' in params ? params.AllowMonitoringCount : null;
        this.CurrentMonitoringCount = 'CurrentMonitoringCount' in params ? params.CurrentMonitoringCount : null;
        this.AllowMaxAddDomain = 'AllowMaxAddDomain' in params ? params.AllowMaxAddDomain : null;

    }
}

/**
 * 面板数据
 * @class
 */
class DashboardResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全等级图表
         * @type {Array.<ChartNameValue> || null}
         */
        this.SecurityLevelPie = null;

        /**
         * 证书品牌图表
         * @type {Array.<ChartNameValue> || null}
         */
        this.CertBrandsPie = null;

        /**
         * 证书有效时间图表
         * @type {Array.<ChartNameValue> || null}
         */
        this.CertValidTimePie = null;

        /**
         * 证书类型图表
         * @type {Array.<ChartNameValue> || null}
         */
        this.CertTypePie = null;

        /**
         * ssl bugs图表
         * @type {Array.<ChartHistogram> || null}
         */
        this.SSLBugsLoopholeHistogram = null;

        /**
         * 合规图表
         * @type {Array.<ChartHistogram> || null}
         */
        this.ComplianceHistogram = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SecurityLevelPie) {
            this.SecurityLevelPie = new Array();
            for (let z in params.SecurityLevelPie) {
                let obj = new ChartNameValue();
                obj.deserialize(params.SecurityLevelPie[z]);
                this.SecurityLevelPie.push(obj);
            }
        }

        if (params.CertBrandsPie) {
            this.CertBrandsPie = new Array();
            for (let z in params.CertBrandsPie) {
                let obj = new ChartNameValue();
                obj.deserialize(params.CertBrandsPie[z]);
                this.CertBrandsPie.push(obj);
            }
        }

        if (params.CertValidTimePie) {
            this.CertValidTimePie = new Array();
            for (let z in params.CertValidTimePie) {
                let obj = new ChartNameValue();
                obj.deserialize(params.CertValidTimePie[z]);
                this.CertValidTimePie.push(obj);
            }
        }

        if (params.CertTypePie) {
            this.CertTypePie = new Array();
            for (let z in params.CertTypePie) {
                let obj = new ChartNameValue();
                obj.deserialize(params.CertTypePie[z]);
                this.CertTypePie.push(obj);
            }
        }

        if (params.SSLBugsLoopholeHistogram) {
            this.SSLBugsLoopholeHistogram = new Array();
            for (let z in params.SSLBugsLoopholeHistogram) {
                let obj = new ChartHistogram();
                obj.deserialize(params.SSLBugsLoopholeHistogram[z]);
                this.SSLBugsLoopholeHistogram.push(obj);
            }
        }

        if (params.ComplianceHistogram) {
            this.ComplianceHistogram = new Array();
            for (let z in params.ComplianceHistogram) {
                let obj = new ChartHistogram();
                obj.deserialize(params.ComplianceHistogram[z]);
                this.ComplianceHistogram.push(obj);
            }
        }

    }
}

/**
 * DescribeNoticeInfo返回参数结构体
 * @class
 */
class DescribeNoticeInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通知信息结果
         * @type {NoticeInfoResult || null}
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
            let obj = new NoticeInfoResult();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 通用图表键值对
 * @class
 */
class ChartNameValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 图表项名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 图表项值
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

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
         * 监控的服务器类型（0：web，1：smtp，2：imap，3：pops）
         * @type {number || null}
         */
        this.ServerType = null;

        /**
         * 添加的域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 添加的端口
         * @type {string || null}
         */
        this.Port = null;

        /**
         * 指定域名的IP
         * @type {string || null}
         */
        this.IP = null;

        /**
         * 是否开启通知告警
         * @type {boolean || null}
         */
        this.Notice = null;

        /**
         * 给域名添加标签，多个以逗号隔开
         * @type {string || null}
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
        this.ServerType = 'ServerType' in params ? params.ServerType : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.IP = 'IP' in params ? params.IP : null;
        this.Notice = 'Notice' in params ? params.Notice : null;
        this.Tags = 'Tags' in params ? params.Tags : null;

    }
}

/**
 * ResolveDomain返回参数结构体
 * @class
 */
class ResolveDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 响应数据
         * @type {Array.<string> || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDomainTags请求参数结构体
 * @class
 */
class ModifyDomainTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账号下域名ID
         * @type {number || null}
         */
        this.AccountDomainId = null;

        /**
         * 更新后的tag，多个以逗号隔开
         * @type {string || null}
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
        this.AccountDomainId = 'AccountDomainId' in params ? params.AccountDomainId : null;
        this.Tags = 'Tags' in params ? params.Tags : null;

    }
}

/**
 * 证书信息
 * @class
 */
class CertInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书sha1
         * @type {string || null}
         */
        this.Hash = null;

        /**
         * 证书通用名称
         * @type {string || null}
         */
        this.CN = null;

        /**
         * 备用名称
         * @type {string || null}
         */
        this.SANs = null;

        /**
         * 公钥算法
         * @type {string || null}
         */
        this.KeyAlgo = null;

        /**
         * 颁发者
         * @type {string || null}
         */
        this.Issuer = null;

        /**
         * 有效期开始
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 有效期结束
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 剩余天数
         * @type {number || null}
         */
        this.Days = null;

        /**
         * 品牌
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * 信任状态
         * @type {string || null}
         */
        this.TrustStatus = null;

        /**
         * 证书类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Hash = 'Hash' in params ? params.Hash : null;
        this.CN = 'CN' in params ? params.CN : null;
        this.SANs = 'SANs' in params ? params.SANs : null;
        this.KeyAlgo = 'KeyAlgo' in params ? params.KeyAlgo : null;
        this.Issuer = 'Issuer' in params ? params.Issuer : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Days = 'Days' in params ? params.Days : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.TrustStatus = 'TrustStatus' in params ? params.TrustStatus : null;
        this.CertType = 'CertType' in params ? params.CertType : null;

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
         * dashboard面板数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DashboardResult || null}
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
            let obj = new DashboardResult();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDomainTags返回参数结构体
 * @class
 */
class DescribeDomainTagsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag数组
         * @type {Array.<string> || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 直方图数据结构
 * @class
 */
class ChartHistogram extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 项目值
         * @type {Array.<ChartNameValue> || null}
         */
        this.Children = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Children) {
            this.Children = new Array();
            for (let z in params.Children) {
                let obj = new ChartNameValue();
                obj.deserialize(params.Children[z]);
                this.Children.push(obj);
            }
        }

    }
}

/**
 * 通知额度限制信息
 * @class
 */
class LimitInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通知类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 总量
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 已发送
         * @type {number || null}
         */
        this.Sent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.Sent = 'Sent' in params ? params.Sent : null;

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
 * DescribeDomains返回参数结构体
 * @class
 */
class DescribeDomainsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列表数据
         * @type {DescribeDomains || null}
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
            let obj = new DescribeDomains();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 通知信息结果
 * @class
 */
class NoticeInfoResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通知ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 通知开关信息
         * @type {number || null}
         */
        this.NoticeType = null;

        /**
         * 额度信息
         * @type {Array.<LimitInfo> || null}
         */
        this.LimitInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.NoticeType = 'NoticeType' in params ? params.NoticeType : null;

        if (params.LimitInfos) {
            this.LimitInfos = new Array();
            for (let z in params.LimitInfos) {
                let obj = new LimitInfo();
                obj.deserialize(params.LimitInfos[z]);
                this.LimitInfos.push(obj);
            }
        }

    }
}

/**
 * DescribeDomainCerts返回参数结构体
 * @class
 */
class DescribeDomainCertsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书信息
         * @type {Array.<CertInfo> || null}
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
                let obj = new CertInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 监控的域名站点信息
 * @class
 */
class DomainSiteInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * IP地址
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 是否自动获取IP
         * @type {boolean || null}
         */
        this.AutoIP = null;

        /**
         * 监控服务类型
         * @type {number || null}
         */
        this.ServerType = null;

        /**
         * 证书品牌
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * 评级
         * @type {string || null}
         */
        this.Grade = null;

        /**
         * 评级Code
         * @type {number || null}
         */
        this.GradeCode = null;

        /**
         * 是否监控告警
         * @type {boolean || null}
         */
        this.Notice = null;

        /**
         * 账号域名关系ID
         * @type {number || null}
         */
        this.AccountDomainId = null;

        /**
         * 标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * 域名状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 域名端口
         * @type {string || null}
         */
        this.Port = null;

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
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.AutoIP = 'AutoIP' in params ? params.AutoIP : null;
        this.ServerType = 'ServerType' in params ? params.ServerType : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Grade = 'Grade' in params ? params.Grade : null;
        this.GradeCode = 'GradeCode' in params ? params.GradeCode : null;
        this.Notice = 'Notice' in params ? params.Notice : null;
        this.AccountDomainId = 'AccountDomainId' in params ? params.AccountDomainId : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Port = 'Port' in params ? params.Port : null;

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
 * DescribeDomainTags请求参数结构体
 * @class
 */
class DescribeDomainTagsRequest extends  AbstractModel {
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
 * DescribeDomains请求参数结构体
 * @class
 */
class DescribeDomainsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 获取数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 搜索的类型 Enums(none,tags,grade,brand,code,hash,limit)
         * @type {string || null}
         */
        this.SearchType = null;

        /**
         * 标签，多个标签用逗号分隔
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * 等级
         * @type {string || null}
         */
        this.Grade = null;

        /**
         * 品牌
         * @type {string || null}
         */
        this.Brand = null;

        /**
         * 混合搜索
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 证书指纹
         * @type {string || null}
         */
        this.Hash = null;

        /**
         * 搜索图标类型
         * @type {string || null}
         */
        this.Item = null;

        /**
         * 搜索图标值
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
        this.SearchType = 'SearchType' in params ? params.SearchType : null;
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.Grade = 'Grade' in params ? params.Grade : null;
        this.Brand = 'Brand' in params ? params.Brand : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Hash = 'Hash' in params ? params.Hash : null;
        this.Item = 'Item' in params ? params.Item : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

module.exports = {
    RefreshDomainResponse: RefreshDomainResponse,
    DeleteDomainRequest: DeleteDomainRequest,
    DescribeNoticeInfoRequest: DescribeNoticeInfoRequest,
    ModifyDomainTagsResponse: ModifyDomainTagsResponse,
    DescribeDomainCertsRequest: DescribeDomainCertsRequest,
    RefreshDomainRequest: RefreshDomainRequest,
    ResolveDomainRequest: ResolveDomainRequest,
    DescribeDomains: DescribeDomains,
    DashboardResult: DashboardResult,
    DescribeNoticeInfoResponse: DescribeNoticeInfoResponse,
    ChartNameValue: ChartNameValue,
    CreateDomainRequest: CreateDomainRequest,
    ResolveDomainResponse: ResolveDomainResponse,
    ModifyDomainTagsRequest: ModifyDomainTagsRequest,
    CertInfo: CertInfo,
    DescribeDashboardResponse: DescribeDashboardResponse,
    DescribeDomainTagsResponse: DescribeDomainTagsResponse,
    ChartHistogram: ChartHistogram,
    LimitInfo: LimitInfo,
    DescribeDashboardRequest: DescribeDashboardRequest,
    DescribeDomainsResponse: DescribeDomainsResponse,
    NoticeInfoResult: NoticeInfoResult,
    DescribeDomainCertsResponse: DescribeDomainCertsResponse,
    DomainSiteInfo: DomainSiteInfo,
    DeleteDomainResponse: DeleteDomainResponse,
    CreateDomainResponse: CreateDomainResponse,
    DescribeDomainTagsRequest: DescribeDomainTagsRequest,
    DescribeDomainsRequest: DescribeDomainsRequest,

}
