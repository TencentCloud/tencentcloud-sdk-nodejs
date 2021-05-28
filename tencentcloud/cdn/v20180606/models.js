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
 * DescribeCdnDomainLogs返回参数结构体
 * @class
 */
class DescribeCdnDomainLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志包下载链接
         * @type {Array.<DomainLog> || null}
         */
        this.DomainLogs = null;

        /**
         * 查询到的总条数
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

        if (params.DomainLogs) {
            this.DomainLogs = new Array();
            for (let z in params.DomainLogs) {
                let obj = new DomainLog();
                obj.deserialize(params.DomainLogs[z]);
                this.DomainLogs.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SCDN攻击数据Top URL展示
 * @class
 */
class ScdnTopUrlData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Top数据的URL
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 数值
         * @type {number || null}
         */
        this.Value = null;

        /**
         * 时间
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 域名
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Url = 'Url' in params ? params.Url : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Time = 'Time' in params ? params.Time : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * SCDN日志事件详细信息
 * @class
 */
class ScdnLogTaskDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * scdn域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 防护类型
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 查询任务开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询任务结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 任务创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 日志包下载链接
成功返回下载链接，其他情况返回'-'
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 任务状态
created->任务已经创建
processing->任务正在执行
done->任务执行成功
failed->任务执行失败
no-log->没有日志产生
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 日志任务唯一id
         * @type {string || null}
         */
        this.TaskID = null;

        /**
         * 攻击类型, 可以为"all"
AttackType映射如下:
  other = '未知类型'
  malicious_scan = "恶意扫描"
  sql_inject = "SQL注入攻击"
  xss = "XSS攻击"
  cmd_inject = "命令注入攻击"
  ldap_inject = "LDAP注入攻击"
  ssi_inject = "SSI注入攻击"
  xml_inject = "XML注入攻击"
  web_service = "WEB服务漏洞攻击"
  web_app = "WEB应用漏洞攻击"
  path_traversal = "路径跨越攻击"
  illegal_access_core_file = "核心文件非法访问"
  file_upload = "文件上传攻击"
  trojan_horse = "木马后门攻击"
  csrf = "CSRF攻击"
  custom_policy = "自定义策略"
  ai_engine= 'AI引擎检出'
  malicious_file_upload= '恶意文件上传'
         * @type {string || null}
         */
        this.AttackType = null;

        /**
         * 防御模式,可以为"all"
DefenceMode映射如下：
  observe = '观察模式'
  intercept = '防御模式'
         * @type {string || null}
         */
        this.DefenceMode = null;

        /**
         * 查询条件
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ScdnEventLogConditions> || null}
         */
        this.Conditions = null;

        /**
         * mainland或overseas
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Area = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TaskID = 'TaskID' in params ? params.TaskID : null;
        this.AttackType = 'AttackType' in params ? params.AttackType : null;
        this.DefenceMode = 'DefenceMode' in params ? params.DefenceMode : null;

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new ScdnEventLogConditions();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * 时间戳防盗链高级版配置，白名单功能
 * @class
 */
class AdvancedAuthentication extends  AbstractModel {
    constructor(){
        super();

        /**
         * 防盗链配置开关，on或off，开启时必须且只能配置一种模式，其余模式为null。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 时间戳防盗链高级版模式A配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AdvancedAuthenticationTypeA || null}
         */
        this.TypeA = null;

        /**
         * 时间戳防盗链高级版模式B配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AdvancedAuthenticationTypeB || null}
         */
        this.TypeB = null;

        /**
         * 时间戳防盗链高级版模式C配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AdvancedAuthenticationTypeC || null}
         */
        this.TypeC = null;

        /**
         * 时间戳防盗链高级版模式D配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AdvancedAuthenticationTypeD || null}
         */
        this.TypeD = null;

        /**
         * 时间戳防盗链高级版模式E配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AdvancedAuthenticationTypeE || null}
         */
        this.TypeE = null;

        /**
         * 时间戳防盗链高级版模式F配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AdvancedAuthenticationTypeF || null}
         */
        this.TypeF = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.TypeA) {
            let obj = new AdvancedAuthenticationTypeA();
            obj.deserialize(params.TypeA)
            this.TypeA = obj;
        }

        if (params.TypeB) {
            let obj = new AdvancedAuthenticationTypeB();
            obj.deserialize(params.TypeB)
            this.TypeB = obj;
        }

        if (params.TypeC) {
            let obj = new AdvancedAuthenticationTypeC();
            obj.deserialize(params.TypeC)
            this.TypeC = obj;
        }

        if (params.TypeD) {
            let obj = new AdvancedAuthenticationTypeD();
            obj.deserialize(params.TypeD)
            this.TypeD = obj;
        }

        if (params.TypeE) {
            let obj = new AdvancedAuthenticationTypeE();
            obj.deserialize(params.TypeE)
            this.TypeE = obj;
        }

        if (params.TypeF) {
            let obj = new AdvancedAuthenticationTypeF();
            obj.deserialize(params.TypeF)
            this.TypeF = obj;
        }

    }
}

/**
 * 智能压缩配置，默认对 js、html、css、xml、json、shtml、htm 后缀且大小为 256 ~ 2097152 字节的文件进行 GZIP 压缩
 * @class
 */
class Compression extends  AbstractModel {
    constructor(){
        super();

        /**
         * 智能压缩配置开关
on：开启
off：关闭
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 压缩规则数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CompressionRule> || null}
         */
        this.CompressionRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.CompressionRules) {
            this.CompressionRules = new Array();
            for (let z in params.CompressionRules) {
                let obj = new CompressionRule();
                obj.deserialize(params.CompressionRules[z]);
                this.CompressionRules.push(obj);
            }
        }

    }
}

/**
 * 是否回源站校验
 * @class
 */
class Revalidate extends  AbstractModel {
    constructor(){
        super();

        /**
         * on | off 是否总是回源校验
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 只在特定请求路径回源站校验
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Path = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Path = 'Path' in params ? params.Path : null;

    }
}

/**
 * 查询对象及其对应的访问明细数据
 * @class
 */
class ResourceData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源名称，根据查询条件不同分为以下几类：
具体域名：表示该域名明细数据
multiDomains：表示多域名汇总明细数据
项目 ID：指定项目查询时，显示为项目 ID
all：账号维度明细数据
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * 资源对应的数据明细
         * @type {Array.<CdnData> || null}
         */
        this.CdnData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;

        if (params.CdnData) {
            this.CdnData = new Array();
            for (let z in params.CdnData) {
                let obj = new CdnData();
                obj.deserialize(params.CdnData[z]);
                this.CdnData.push(obj);
            }
        }

    }
}

/**
 * 封禁url的详细信息
 * @class
 */
class UrlRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态(disable表示封禁，enable表示解封)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 对应的url
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RealUrl = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.RealUrl = 'RealUrl' in params ? params.RealUrl : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribePushQuota返回参数结构体
 * @class
 */
class DescribePushQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Url预热用量及配额。
         * @type {Array.<Quota> || null}
         */
        this.UrlPush = null;

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

        if (params.UrlPush) {
            this.UrlPush = new Array();
            for (let z in params.UrlPush) {
                let obj = new Quota();
                obj.deserialize(params.UrlPush[z]);
                this.UrlPush.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePurgeQuota返回参数结构体
 * @class
 */
class DescribePurgeQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * URL刷新用量及配额。
         * @type {Array.<Quota> || null}
         */
        this.UrlPurge = null;

        /**
         * 目录刷新用量及配额。
         * @type {Array.<Quota> || null}
         */
        this.PathPurge = null;

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

        if (params.UrlPurge) {
            this.UrlPurge = new Array();
            for (let z in params.UrlPurge) {
                let obj = new Quota();
                obj.deserialize(params.UrlPurge[z]);
                this.UrlPurge.push(obj);
            }
        }

        if (params.PathPurge) {
            this.PathPurge = new Array();
            for (let z in params.PathPurge) {
                let obj = new Quota();
                obj.deserialize(params.PathPurge[z]);
                this.PathPurge.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 时间戳防盗链配置
 * @class
 */
class Authentication extends  AbstractModel {
    constructor(){
        super();

        /**
         * 防盗链配置开关
on：开启
off：关闭
开启时必须且只配置一种模式，其余模式需要设置为 null
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 时间戳防盗链模式 A 配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AuthenticationTypeA || null}
         */
        this.TypeA = null;

        /**
         * 时间戳防盗链模式 B 配置（模式 B 后台升级中，暂时不支持配置）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AuthenticationTypeB || null}
         */
        this.TypeB = null;

        /**
         * 时间戳防盗链模式 C 配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AuthenticationTypeC || null}
         */
        this.TypeC = null;

        /**
         * 时间戳防盗链模式 D 配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AuthenticationTypeD || null}
         */
        this.TypeD = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.TypeA) {
            let obj = new AuthenticationTypeA();
            obj.deserialize(params.TypeA)
            this.TypeA = obj;
        }

        if (params.TypeB) {
            let obj = new AuthenticationTypeB();
            obj.deserialize(params.TypeB)
            this.TypeB = obj;
        }

        if (params.TypeC) {
            let obj = new AuthenticationTypeC();
            obj.deserialize(params.TypeC)
            this.TypeC = obj;
        }

        if (params.TypeD) {
            let obj = new AuthenticationTypeD();
            obj.deserialize(params.TypeD)
            this.TypeD = obj;
        }

    }
}

/**
 * DescribeScdnTopData返回参数结构体
 * @class
 */
class DescribeScdnTopDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * WAF 攻击类型统计
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ScdnTypeData> || null}
         */
        this.TopTypeData = null;

        /**
         * TOP 攻击源 IP 统计
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ScdnTopData> || null}
         */
        this.TopIpData = null;

        /**
         * 查询的SCDN类型，当前仅支持 waf
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * TOP URL 统计
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ScdnTopUrlData> || null}
         */
        this.TopUrlData = null;

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

        if (params.TopTypeData) {
            this.TopTypeData = new Array();
            for (let z in params.TopTypeData) {
                let obj = new ScdnTypeData();
                obj.deserialize(params.TopTypeData[z]);
                this.TopTypeData.push(obj);
            }
        }

        if (params.TopIpData) {
            this.TopIpData = new Array();
            for (let z in params.TopIpData) {
                let obj = new ScdnTopData();
                obj.deserialize(params.TopIpData[z]);
                this.TopIpData.push(obj);
            }
        }
        this.Mode = 'Mode' in params ? params.Mode : null;

        if (params.TopUrlData) {
            this.TopUrlData = new Array();
            for (let z in params.TopUrlData) {
                let obj = new ScdnTopUrlData();
                obj.deserialize(params.TopUrlData[z]);
                this.TopUrlData.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ImageOptimization配置
 * @class
 */
class ImageOptimization extends  AbstractModel {
    constructor(){
        super();

        /**
         * WebpAdapter配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {WebpAdapter || null}
         */
        this.WebpAdapter = null;

        /**
         * TpgAdapter配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TpgAdapter || null}
         */
        this.TpgAdapter = null;

        /**
         * GuetzliAdapter配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {GuetzliAdapter || null}
         */
        this.GuetzliAdapter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.WebpAdapter) {
            let obj = new WebpAdapter();
            obj.deserialize(params.WebpAdapter)
            this.WebpAdapter = obj;
        }

        if (params.TpgAdapter) {
            let obj = new TpgAdapter();
            obj.deserialize(params.TpgAdapter)
            this.TpgAdapter = obj;
        }

        if (params.GuetzliAdapter) {
            let obj = new GuetzliAdapter();
            obj.deserialize(params.GuetzliAdapter)
            this.GuetzliAdapter = obj;
        }

    }
}

/**
 * 域名 https 加速配置，默认为关闭状态
 * @class
 */
class Https extends  AbstractModel {
    constructor(){
        super();

        /**
         * https 配置开关
on：开启
off：关闭
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * http2 配置开关
on：开启
off：关闭
初次启用 https 加速会默认开启 http2 配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Http2 = null;

        /**
         * OCSP 配置开关
on：开启
off：关闭
默认为关闭状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OcspStapling = null;

        /**
         * 客户端证书校验功能
on：开启
off：关闭
默认为关闭状态，开启时需要上传客户端证书信息，该配置项目前在灰度中，尚未全量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VerifyClient = null;

        /**
         * 服务端证书配置信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ServerCert || null}
         */
        this.CertInfo = null;

        /**
         * 客户端证书配置信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ClientCert || null}
         */
        this.ClientCertInfo = null;

        /**
         * Spdy 配置开关
on：开启
off：关闭
默认为关闭状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Spdy = null;

        /**
         * https 证书部署状态
closed：已关闭
deploying：部署中
deployed：部署成功
failed：部署失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SslStatus = null;

        /**
         * Hsts配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Hsts || null}
         */
        this.Hsts = null;

        /**
         * Tls版本设置，仅支持部分Advance域名，支持设置 TLSv1, TLSV1.1, TLSV1.2, TLSv1.3，修改时必须开启连续的版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.TlsVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Http2 = 'Http2' in params ? params.Http2 : null;
        this.OcspStapling = 'OcspStapling' in params ? params.OcspStapling : null;
        this.VerifyClient = 'VerifyClient' in params ? params.VerifyClient : null;

        if (params.CertInfo) {
            let obj = new ServerCert();
            obj.deserialize(params.CertInfo)
            this.CertInfo = obj;
        }

        if (params.ClientCertInfo) {
            let obj = new ClientCert();
            obj.deserialize(params.ClientCertInfo)
            this.ClientCertInfo = obj;
        }
        this.Spdy = 'Spdy' in params ? params.Spdy : null;
        this.SslStatus = 'SslStatus' in params ? params.SslStatus : null;

        if (params.Hsts) {
            let obj = new Hsts();
            obj.deserialize(params.Hsts)
            this.Hsts = obj;
        }
        this.TlsVersion = 'TlsVersion' in params ? params.TlsVersion : null;

    }
}

/**
 * 缓存配置分路径版本。
默认情况下所有文件缓存过期时间为 30 天 
默认情况下静态加速类型的域名 .php;.jsp;.asp;.aspx 不缓存
 * @class
 */
class RuleCache extends  AbstractModel {
    constructor(){
        super();

        /**
         * CacheType 对应类型下的匹配内容：
all 时填充 *
file 时填充后缀名，如 jpg、txt
directory 时填充路径，如 /xxx/test
path 时填充绝对路径，如 /xxx/test.html
index 时填充 /
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.RulePaths = null;

        /**
         * 规则类型：
all：所有文件生效
file：指定文件后缀生效
directory：指定路径生效
path：指定绝对路径生效
index：首页
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * 缓存配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleCacheConfig || null}
         */
        this.CacheConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RulePaths = 'RulePaths' in params ? params.RulePaths : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;

        if (params.CacheConfig) {
            let obj = new RuleCacheConfig();
            obj.deserialize(params.CacheConfig)
            this.CacheConfig = obj;
        }

    }
}

/**
 * DescribeCdnDomainLogs请求参数结构体
 * @class
 */
class DescribeCdnDomainLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定域名查询
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 开始时间，如 2019-09-04 00:00:00
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，如 2019-09-04 12:00:00
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 分页查询偏移量，默认为 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页查询限制数目，默认为 100，最大为 1000
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 指定区域下载日志
mainland：获取境内加速日志包下载链接
overseas：获取境外加速日志包下载链接
global：同时获取境内、境外加速日志包下载链接（分开打包）
不指定时默认为 mainland
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 指定下载日志的类型。
access：获取访问日志
         * @type {string || null}
         */
        this.LogType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.LogType = 'LogType' in params ? params.LogType : null;

    }
}

/**
 * DescribeTrafficPackages请求参数结构体
 * @class
 */
class DescribeTrafficPackagesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页查询起始地址，默认 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页查询记录个数，默认100，最大1000
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
 * CreateClsLogTopic返回参数结构体
 * @class
 */
class CreateClsLogTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TopicId = null;

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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 精准访问控制匹配规则
 * @class
 */
class ScdnAclRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配关键字, params | url | ip | referer | user-agent
         * @type {string || null}
         */
        this.MatchKey = null;

        /**
         * 逻辑操作符，取值 exclude, include, notequal, equal, len-less, len-equal, len-more
         * @type {string || null}
         */
        this.LogiOperator = null;

        /**
         * 匹配值
         * @type {string || null}
         */
        this.MatchValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MatchKey = 'MatchKey' in params ? params.MatchKey : null;
        this.LogiOperator = 'LogiOperator' in params ? params.LogiOperator : null;
        this.MatchValue = 'MatchValue' in params ? params.MatchValue : null;

    }
}

/**
 * PurgePathCache返回参数结构体
 * @class
 */
class PurgePathCacheResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 刷新任务 ID，同一批次提交的目录共用一个任务 ID
         * @type {string || null}
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
 * 域名查询时过滤条件。
 * @class
 */
class DomainFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤字段名，支持的列表如下：
- origin：主源站。
- domain：域名。
- resourceId：域名id。
- status：域名状态，online，offline或processing。
- serviceType：业务类型，web，download或media。
- projectId：项目ID。
- domainType：主源站类型，cname表示自有源，cos表示cos接入。
- fullUrlCache：全路径缓存，on或off。
- https：是否配置https，on，off或processing。
- originPullProtocol：回源协议类型，支持http，follow或https。
- tagKey：标签键。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 过滤字段值。
         * @type {Array.<string> || null}
         */
        this.Value = null;

        /**
         * 是否启用模糊查询，仅支持过滤字段名为origin，domain。
模糊查询时，Value长度最大为1，否则Value长度最大为5。
         * @type {boolean || null}
         */
        this.Fuzzy = null;

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
        this.Fuzzy = 'Fuzzy' in params ? params.Fuzzy : null;

    }
}

/**
 * DescribeCdnOriginIp返回参数结构体
 * @class
 */
class DescribeCdnOriginIpResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回源节点IP详情。
         * @type {Array.<OriginIp> || null}
         */
        this.Ips = null;

        /**
         * 回源节点IP总个数。
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

        if (params.Ips) {
            this.Ips = new Array();
            for (let z in params.Ips) {
                let obj = new OriginIp();
                obj.deserialize(params.Ips[z]);
                this.Ips.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 域名国内海外分地区特殊配置。
 * @class
 */
class SpecificConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 国内特殊配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MainlandConfig || null}
         */
        this.Mainland = null;

        /**
         * 海外特殊配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OverseaConfig || null}
         */
        this.Overseas = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Mainland) {
            let obj = new MainlandConfig();
            obj.deserialize(params.Mainland)
            this.Mainland = obj;
        }

        if (params.Overseas) {
            let obj = new OverseaConfig();
            obj.deserialize(params.Overseas)
            this.Overseas = obj;
        }

    }
}

/**
 * 回源 301/302 状态码自动跟随配置，默认为关闭状态
 * @class
 */
class FollowRedirect extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回源跟随开关
on：开启
off：关闭
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * 自定义请求头配置，默认为关闭状态
 * @class
 */
class RequestHeader extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义请求头配置开关
on：开启
off：关闭
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 自定义请求头配置规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<HttpHeaderPathRule> || null}
         */
        this.HeaderRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.HeaderRules) {
            this.HeaderRules = new Array();
            for (let z in params.HeaderRules) {
                let obj = new HttpHeaderPathRule();
                obj.deserialize(params.HeaderRules[z]);
                this.HeaderRules.push(obj);
            }
        }

    }
}

/**
 * DescribePurgeQuota请求参数结构体
 * @class
 */
class DescribePurgeQuotaRequest extends  AbstractModel {
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
 * Referer 黑白名单配置，默认为关闭状态
 * @class
 */
class Referer extends  AbstractModel {
    constructor(){
        super();

        /**
         * referer 黑白名单配置开关
on：开启
off：关闭
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * referer 黑白名单配置规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RefererRule> || null}
         */
        this.RefererRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.RefererRules) {
            this.RefererRules = new Array();
            for (let z in params.RefererRules) {
                let obj = new RefererRule();
                obj.deserialize(params.RefererRules[z]);
                this.RefererRules.push(obj);
            }
        }

    }
}

/**
 * StartScdnDomain请求参数结构体
 * @class
 */
class StartScdnDomainRequest extends  AbstractModel {
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
 * POST请求上传文件流式传输最大限制
 * @class
 */
class PostSize extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是调整POST请求限制，平台默认为32MB。
关闭：off，
开启：on。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 最大限制，取值在1MB和200MB之间。
         * @type {number || null}
         */
        this.MaxSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;

    }
}

/**
 * DescribeCdnData返回参数结构体
 * @class
 */
class DescribeCdnDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数据的时间粒度，查询时指定：
min：1 分钟粒度
5min：5 分钟粒度
hour：1 小时粒度
day：天粒度
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * 指定条件查询得到的数据明细
         * @type {Array.<ResourceData> || null}
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
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ResourceData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EnableClsLogTopic请求参数结构体
 * @class
 */
class EnableClsLogTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志集ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * 日志主题ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 接入渠道，默认值为cdn
         * @type {string || null}
         */
        this.Channel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Channel = 'Channel' in params ? params.Channel : null;

    }
}

/**
 * UpdateImageConfig返回参数结构体
 * @class
 */
class UpdateImageConfigResponse extends  AbstractModel {
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
 * 聚合了SCDN域名的基本信息
 * @class
 */
class ScdnDomain extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 当前状态，取值online | offline | process
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Waf 状态默认为‘/’，取值 close | intercept | observe
         * @type {string || null}
         */
        this.Waf = null;

        /**
         * Acl 状态默认为‘/’，取值 close | open
         * @type {string || null}
         */
        this.Acl = null;

        /**
         * CC 状态默认为‘/’，取值 close | open
         * @type {string || null}
         */
        this.CC = null;

        /**
         * Ddos 状态默认为‘/’，取值 close | open
         * @type {string || null}
         */
        this.Ddos = null;

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * Acl 规则数
         * @type {number || null}
         */
        this.AclRuleNumbers = null;

        /**
         * Bot 状态默认为‘/’，取值 close | open
         * @type {string || null}
         */
        this.Bot = null;

        /**
         * 域名加速区域，取值global | mainland |  overseas
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Area = null;

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
        this.Waf = 'Waf' in params ? params.Waf : null;
        this.Acl = 'Acl' in params ? params.Acl : null;
        this.CC = 'CC' in params ? params.CC : null;
        this.Ddos = 'Ddos' in params ? params.Ddos : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.AclRuleNumbers = 'AclRuleNumbers' in params ? params.AclRuleNumbers : null;
        this.Bot = 'Bot' in params ? params.Bot : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * 路径缓存不缓存配置
 * @class
 */
class CacheConfigNoCache extends  AbstractModel {
    constructor(){
        super();

        /**
         * 不缓存配置开关
on：开启
off：关闭
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 总是回源站校验
on：开启
off：关闭
默认为关闭状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Revalidate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Revalidate = 'Revalidate' in params ? params.Revalidate : null;

    }
}

/**
 * 请求头部及请求url访问控制
 * @class
 */
class AccessControl extends  AbstractModel {
    constructor(){
        super();

        /**
         * on | off 是否启用请求头部及请求url访问控制
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 请求头部及请求url访问规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AccessControlRule> || null}
         */
        this.AccessControlRules = null;

        /**
         * 返回状态码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ReturnCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.AccessControlRules) {
            this.AccessControlRules = new Array();
            for (let z in params.AccessControlRules) {
                let obj = new AccessControlRule();
                obj.deserialize(params.AccessControlRules[z]);
                this.AccessControlRules.push(obj);
            }
        }
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;

    }
}

/**
 * DeleteCdnDomain请求参数结构体
 * @class
 */
class DeleteCdnDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
域名状态需要为【已停用】
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
 * DescribePayType返回参数结构体
 * @class
 */
class DescribePayTypeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计费类型：
flux：流量计费
bandwidth：带宽计费
日结计费方式切换时，若当日产生消耗，则此字段表示第二天即将生效的计费方式，若未产生消耗，则表示已经生效的计费方式。
         * @type {string || null}
         */
        this.PayType = null;

        /**
         * 计费周期：
day：日结计费
month：月结计费
         * @type {string || null}
         */
        this.BillingCycle = null;

        /**
         * 计费方式：
monthMax：日峰值月平均计费，月结模式
day95：日 95 带宽计费，月结模式
month95：月95带宽计费，月结模式
sum：总流量计费，日结与月结均有流量计费模式
max：峰值带宽计费，日结模式
         * @type {string || null}
         */
        this.StatType = null;

        /**
         * 境外计费类型：
all：全地区统一计费
multiple：分地区计费
         * @type {string || null}
         */
        this.RegionType = null;

        /**
         * 当前生效计费类型：
flux：流量计费
bandwidth：带宽计费
         * @type {string || null}
         */
        this.CurrentPayType = null;

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
        this.PayType = 'PayType' in params ? params.PayType : null;
        this.BillingCycle = 'BillingCycle' in params ? params.BillingCycle : null;
        this.StatType = 'StatType' in params ? params.StatType : null;
        this.RegionType = 'RegionType' in params ? params.RegionType : null;
        this.CurrentPayType = 'CurrentPayType' in params ? params.CurrentPayType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 访问协议强制跳转配置，默认为关闭状态
 * @class
 */
class ForceRedirect extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问强制跳转配置开关
on：开启
off：关闭
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 访问强制跳转类型
http：强制 http 跳转
https：强制 https 跳转
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RedirectType = null;

        /**
         * 强制跳转时返回状态码 
支持 301、302
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RedirectStatusCode = null;

        /**
         * 强制跳转时是否返回增加的头部。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CarryHeaders = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.RedirectType = 'RedirectType' in params ? params.RedirectType : null;
        this.RedirectStatusCode = 'RedirectStatusCode' in params ? params.RedirectStatusCode : null;
        this.CarryHeaders = 'CarryHeaders' in params ? params.CarryHeaders : null;

    }
}

/**
 * 分路径回源配置规则。
 * @class
 */
class PathRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启通配符“*”匹配：
false：关闭
true：开启
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Regex = null;

        /**
         * 匹配的URL路径，仅支持Url路径，不支持参数。默认完全匹配，开启通配符“*”匹配后，最多支持5个通配符，最大长度为1024个字符。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 路径匹配时的回源源站。暂不支持开了私有读写的COS源。不填写时沿用默认源站。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Origin = null;

        /**
         * 路径匹配时回源的Host头部。不填写时沿用默认ServerName。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServerName = null;

        /**
         * 源站所属区域，支持CN，OV：
CN：中国境内
OV：中国境外
默认为CN。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OriginArea = null;

        /**
         * 路径匹配时回源的URI路径，必须以“/”开头，不包含参数部分。最大长度为1024个字符。可使用$1, $2, $3, $4, $5分别捕获匹配路径中的通配符号“*”，最多支持10个捕获值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ForwardUri = null;

        /**
         * 路径匹配时回源的头部设置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<HttpHeaderRule> || null}
         */
        this.RequestHeaders = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Regex = 'Regex' in params ? params.Regex : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Origin = 'Origin' in params ? params.Origin : null;
        this.ServerName = 'ServerName' in params ? params.ServerName : null;
        this.OriginArea = 'OriginArea' in params ? params.OriginArea : null;
        this.ForwardUri = 'ForwardUri' in params ? params.ForwardUri : null;

        if (params.RequestHeaders) {
            this.RequestHeaders = new Array();
            for (let z in params.RequestHeaders) {
                let obj = new HttpHeaderRule();
                obj.deserialize(params.RequestHeaders[z]);
                this.RequestHeaders.push(obj);
            }
        }

    }
}

/**
 * ListTopData请求参数结构体
 * @class
 */
class ListTopDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询起始日期：yyyy-MM-dd HH:mm:ss
仅支持按天粒度的数据查询，取入参中的天信息作为起始日期
返回大于等于起始日期当天 00:00:00 点产生的数据
仅支持 90 天内数据查询
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束日期：yyyy-MM-dd HH:mm:ss
仅支持按天粒度的数据查询，取入参中的天信息作为结束日期
返回小于等于结束日期当天 23:59:59 产生的数据
EndTime 需要大于等于 StartTime
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 排序对象，支持以下几种形式：
url：访问 URL 排序（无参数的URL），支持的 Filter 为 flux、request
district：省份、国家/地区排序，支持的 Filter 为 flux、request
isp：运营商排序，支持的 Filter 为 flux、request
host：域名访问数据排序，支持的 Filter 为：flux、request、bandwidth、fluxHitRate、2XX、3XX、4XX、5XX、statusCode
originHost：域名回源数据排序，支持的 Filter 为 flux、request、bandwidth、origin_2XX、origin_3XX、origin_4XX、origin_5XX、OriginStatusCode
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * 排序使用的指标名称：
flux：Metric 为 host 时指代访问流量，originHost 时指代回源流量
bandwidth：Metric 为 host 时指代访问带宽，originHost 时指代回源带宽
request：Metric 为 host 时指代访问请求数，originHost 时指代回源请求数
fluxHitRate：平均流量命中率
2XX：访问 2XX 状态码
3XX：访问 3XX 状态码
4XX：访问 4XX 状态码
5XX：访问 5XX 状态码
origin_2XX：回源 2XX 状态码
origin_3XX：回源 3XX 状态码
origin_4XX：回源 4XX 状态码
origin_5XX：回源 5XX 状态码
statusCode：指定访问状态码统计，在 Code 参数中填充指定状态码
OriginStatusCode：指定回源状态码统计，在 Code 参数中填充指定状态码
         * @type {string || null}
         */
        this.Filter = null;

        /**
         * 指定查询域名列表，最多可一次性查询 30 个加速域名明细
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 指定要查询的项目 ID，[前往查看项目 ID](https://console.cloud.tencent.com/project)
未填充域名情况下，指定项目查询，若填充了具体域名信息，以域名为主
         * @type {number || null}
         */
        this.Project = null;

        /**
         * 多域名查询时，默认（false)返回所有域名汇总排序结果
Metric 为 url、path、district、isp，Filter 为 flux、request 时，可设置为 true，返回每一个 Domain 的排序数据
         * @type {boolean || null}
         */
        this.Detail = null;

        /**
         * Filter 为 statusCode、OriginStatusCode 时，填充指定状态码查询排序结果
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 指定服务地域查询，不填充表示查询中国境内 CDN 数据
mainland：指定查询中国境内 CDN 数据
overseas：指定查询中国境外 CDN 数据，支持的 Metric 为 url、district、host、originHost，当 Metric 为 originHost 时仅支持 flux、request、bandwidth Filter
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 查询中国境外CDN数据，且仅当 Metric 为 district 或 host 时，可指定地区类型查询，不填充表示查询服务地区数据（仅在 Area 为 overseas，且 Metric 是 district 或 host 时可用）
server：指定查询服务地区（腾讯云 CDN 节点服务器所在地区）数据
client：指定查询客户端地区（用户请求终端所在地区）数据，当 Metric 为 host 时仅支持 flux、request、bandwidth Filter
         * @type {string || null}
         */
        this.AreaType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.Filter = 'Filter' in params ? params.Filter : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Project = 'Project' in params ? params.Project : null;
        this.Detail = 'Detail' in params ? params.Detail : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.AreaType = 'AreaType' in params ? params.AreaType : null;

    }
}

/**
 * ListClsTopicDomains请求参数结构体
 * @class
 */
class ListClsTopicDomainsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志集ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * 日志主题ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 接入渠道，默认值为cdn
         * @type {string || null}
         */
        this.Channel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Channel = 'Channel' in params ? params.Channel : null;

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
         * 域名列表
         * @type {Array.<BriefDomain> || null}
         */
        this.Domains = null;

        /**
         * 符合查询条件的域名总数
用于分页查询
         * @type {number || null}
         */
        this.TotalNumber = null;

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

        if (params.Domains) {
            this.Domains = new Array();
            for (let z in params.Domains) {
                let obj = new BriefDomain();
                obj.deserialize(params.Domains[z]);
                this.Domains.push(obj);
            }
        }
        this.TotalNumber = 'TotalNumber' in params ? params.TotalNumber : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePayType请求参数结构体
 * @class
 */
class DescribePayTypeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定服务地域查询
mainland：境内计费方式查询
overseas：境外计费方式查询
未填充时默认为 mainland
         * @type {string || null}
         */
        this.Area = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * UpdateImageConfig请求参数结构体
 * @class
 */
class UpdateImageConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * WebpAdapter配置项
         * @type {WebpAdapter || null}
         */
        this.WebpAdapter = null;

        /**
         * TpgAdapter配置项
         * @type {TpgAdapter || null}
         */
        this.TpgAdapter = null;

        /**
         * GuetzliAdapter配置项
         * @type {GuetzliAdapter || null}
         */
        this.GuetzliAdapter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

        if (params.WebpAdapter) {
            let obj = new WebpAdapter();
            obj.deserialize(params.WebpAdapter)
            this.WebpAdapter = obj;
        }

        if (params.TpgAdapter) {
            let obj = new TpgAdapter();
            obj.deserialize(params.TpgAdapter)
            this.TpgAdapter = obj;
        }

        if (params.GuetzliAdapter) {
            let obj = new GuetzliAdapter();
            obj.deserialize(params.GuetzliAdapter)
            this.GuetzliAdapter = obj;
        }

    }
}

/**
 * DisableCaches请求参数结构体
 * @class
 */
class DisableCachesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 禁用的 URL 列表（分协议生效，必须包含http://或https://）
每次最多可提交 100 条，每日最多可提交 3000 条
         * @type {Array.<string> || null}
         */
        this.Urls = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Urls = 'Urls' in params ? params.Urls : null;

    }
}

/**
 * 时间戳防盗链高级版模式D配置。
 * @class
 */
class AdvancedAuthenticationTypeD extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于计算签名的密钥，只允许字母和数字，长度6-32字节。
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * 备份密钥，当使用SecretKey鉴权失败时会使用该密钥重新鉴权。
         * @type {string || null}
         */
        this.BackupSecretKey = null;

        /**
         * uri串中签名的字段名，字母，数字或下划线构成，同时必须以字母开头。
         * @type {string || null}
         */
        this.SignParam = null;

        /**
         * uri串中时间的字段名，字母，数字或下划线构成，同时必须以字母开头。
         * @type {string || null}
         */
        this.TimeParam = null;

        /**
         * 过期时间，单位秒。
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * 时间格式，dec，hex分别表示十进制，十六进制。
         * @type {string || null}
         */
        this.TimeFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.BackupSecretKey = 'BackupSecretKey' in params ? params.BackupSecretKey : null;
        this.SignParam = 'SignParam' in params ? params.SignParam : null;
        this.TimeParam = 'TimeParam' in params ? params.TimeParam : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.TimeFormat = 'TimeFormat' in params ? params.TimeFormat : null;

    }
}

/**
 * StartCdnDomain返回参数结构体
 * @class
 */
class StartCdnDomainResponse extends  AbstractModel {
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
 * 压缩规则配置，最多可设置 100 条
 * @class
 */
class CompressionRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * true：需要设置为 ture，启用压缩
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Compress = null;

        /**
         * 根据文件后缀类型压缩
例如 jpg、txt
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.FileExtensions = null;

        /**
         * 触发压缩的文件长度最小值，单位为字节数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MinLength = null;

        /**
         * 触发压缩的文件长度最大值，单位为字节数
最大可设置为 30MB
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxLength = null;

        /**
         * 文件压缩算法
gzip：指定 GZIP 压缩
brotli：指定Brotli压缩
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Algorithms = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Compress = 'Compress' in params ? params.Compress : null;
        this.FileExtensions = 'FileExtensions' in params ? params.FileExtensions : null;
        this.MinLength = 'MinLength' in params ? params.MinLength : null;
        this.MaxLength = 'MaxLength' in params ? params.MaxLength : null;
        this.Algorithms = 'Algorithms' in params ? params.Algorithms : null;

    }
}

/**
 * 图片优化-GuetzliAdapter配置
 * @class
 */
class GuetzliAdapter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开关，"on/off"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * UpdateScdnDomain返回参数结构体
 * @class
 */
class UpdateScdnDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 提交结果，Success表示成功
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 源站配置复杂类型，支持以下配置：
+ 源站指定为单个域名
+ 源站指定为多个 IP，可配置端口（1~65535），可配置权重（1~100），格式为 IP:端口:权重
+ 回源域名配置
+ 对象存储（COS）作为源站
+ 热备源站指定为单个域名
+ 热备源站指定为多个 IP，可配置端口（1~65535），暂不支持权重配置
+ 热备源站回源域名配置
 * @class
 */
class Origin extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主源站列表
修改源站时，需要同时填充对应的 OriginType
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Origins = null;

        /**
         * 主源站类型
入参支持以下几种类型：
domain：域名类型
cos：对象存储源站
ip：IP 列表作为源站
ipv6：源站列表为一个单独的 IPv6 地址
ip_ipv6：源站列表为多个 IPv4 地址和一个 IPv6 地址
出参增加以下几种类型：
image：数据万象源站
ftp：历史 FTP 托管源源站，现已不维护
修改 Origins 时需要同时填充对应的 OriginType
IPv6 功能目前尚未全量，需要先申请试用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * 回主源站时 Host 头部，不填充则默认为加速域名
若接入的是泛域名，则回源 Host 默认为访问时的子域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServerName = null;

        /**
         * OriginType 为对象存储（COS）时，可以指定是否允许访问私有 bucket
注意：需要先授权 CDN 访问该私有 Bucket 的权限后，才可开启此配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CosPrivateAccess = null;

        /**
         * 回源协议配置
http：强制 http 回源
follow：协议跟随回源
https：强制 https 回源，https 回源时仅支持源站 443 端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OriginPullProtocol = null;

        /**
         * 备源站列表
修改备源站时，需要同时填充对应的 BackupOriginType
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.BackupOrigins = null;

        /**
         * 备源站类型，支持以下类型：
domain：域名类型
ip：IP 列表作为源站
修改 BackupOrigins 时需要同时填充对应的 BackupOriginType
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BackupOriginType = null;

        /**
         * 回备源站时 Host 头部，不填充则默认为主源站的 ServerName
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BackupServerName = null;

        /**
         * 回源路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BasePath = null;

        /**
         * 回源路径重写规则配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PathRule> || null}
         */
        this.PathRules = null;

        /**
         * 分路径回源配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PathBasedOriginRule> || null}
         */
        this.PathBasedOrigin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Origins = 'Origins' in params ? params.Origins : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.ServerName = 'ServerName' in params ? params.ServerName : null;
        this.CosPrivateAccess = 'CosPrivateAccess' in params ? params.CosPrivateAccess : null;
        this.OriginPullProtocol = 'OriginPullProtocol' in params ? params.OriginPullProtocol : null;
        this.BackupOrigins = 'BackupOrigins' in params ? params.BackupOrigins : null;
        this.BackupOriginType = 'BackupOriginType' in params ? params.BackupOriginType : null;
        this.BackupServerName = 'BackupServerName' in params ? params.BackupServerName : null;
        this.BasePath = 'BasePath' in params ? params.BasePath : null;

        if (params.PathRules) {
            this.PathRules = new Array();
            for (let z in params.PathRules) {
                let obj = new PathRule();
                obj.deserialize(params.PathRules[z]);
                this.PathRules.push(obj);
            }
        }

        if (params.PathBasedOrigin) {
            this.PathBasedOrigin = new Array();
            for (let z in params.PathBasedOrigin) {
                let obj = new PathBasedOriginRule();
                obj.deserialize(params.PathBasedOrigin[z]);
                this.PathBasedOrigin.push(obj);
            }
        }

    }
}

/**
 * 违规 URL 详情
 * @class
 */
class ViolationUrl extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 违规资源原始访问 URL
         * @type {string || null}
         */
        this.RealUrl = null;

        /**
         * 快照路径，用于控制台展示违规内容快照
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 违规资源当前状态
forbid：已封禁
release：已解封
delay ： 延迟处理
reject ：申诉驳回，状态仍为封禁态
complain：申诉进行中
         * @type {string || null}
         */
        this.UrlStatus = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.RealUrl = 'RealUrl' in params ? params.RealUrl : null;
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.UrlStatus = 'UrlStatus' in params ? params.UrlStatus : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeDomainsConfig请求参数结构体
 * @class
 */
class DescribeDomainsConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页查询偏移量，默认为 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页查询限制数目，默认为 100，最大可设置为 1000
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询条件过滤器，复杂类型
         * @type {Array.<DomainFilter> || null}
         */
        this.Filters = null;

        /**
         * 排序规则
         * @type {Sort || null}
         */
        this.Sort = null;

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
                let obj = new DomainFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.Sort) {
            let obj = new Sort();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }

    }
}

/**
 * 排序类型数据结构
 * @class
 */
class TopData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源名称，根据查询条件不同分为以下几类：
具体域名：表示该域名明细数据
multiDomains：表示多域名汇总明细数据
项目 ID：指定项目查询时，显示为项目 ID
all：账号维度明细数据
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * 排序结果详情
         * @type {Array.<TopDetailData> || null}
         */
        this.DetailData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;

        if (params.DetailData) {
            this.DetailData = new Array();
            for (let z in params.DetailData) {
                let obj = new TopDetailData();
                obj.deserialize(params.DetailData[z]);
                this.DetailData.push(obj);
            }
        }

    }
}

/**
 * EnableCaches请求参数结构体
 * @class
 */
class EnableCachesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 解封 URL 列表
         * @type {Array.<string> || null}
         */
        this.Urls = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Urls = 'Urls' in params ? params.Urls : null;

    }
}

/**
 * 刷新/预热 可用量及配额
 * @class
 */
class Quota extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单次批量提交配额上限。
         * @type {number || null}
         */
        this.Batch = null;

        /**
         * 每日提交配额上限。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 每日剩余的可提交配额。
         * @type {number || null}
         */
        this.Available = null;

        /**
         * 配额的区域。
         * @type {string || null}
         */
        this.Area = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Batch = 'Batch' in params ? params.Batch : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.Available = 'Available' in params ? params.Available : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * 组成CacheKey
 * @class
 */
class HeaderKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否组成Cachekey
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 组成CacheKey的header数组，';' 分割
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
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeBillingData请求参数结构体
 * @class
 */
class DescribeBillingDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询起始时间，如：2018-09-04 10:40:00，返回结果大于等于指定时间
根据指定时间粒度参数不同，会进行向前取整，如指定起始时间为 2018-09-04 10:40:00 按小时粒度查询，返回的第一个数据对应时间点为 2018-09-04 10:00:00
起始时间与结束时间间隔小于等于 90 天
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间，如：2018-09-04 10:40:00，返回结果小于等于指定时间
根据指定时间粒度参数不同，会进行向前取整，如指定结束时间为  2018-09-04 10:40:00 按小时粒度查询时，返回的最后一个数据对应时间点为 2018-09-04 10:00:00
起始时间与结束时间间隔小于等于 90 天
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 时间粒度，支持模式如下：
min：1 分钟粒度，查询区间需要小于等于 24 小时
5min：5 分钟粒度，查询区间需要小于等于 31 天
hour：1 小时粒度，查询区间需要小于等于 31 天内
day：天粒度，查询区间需要大于 31 天

Area 字段为 overseas 时暂不支持1分钟粒度数据查询
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * 指定域名查询计费数据
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 指定项目 ID 查询，[前往查看项目 ID](https://console.cloud.tencent.com/project)
若 Domain 参数填充了具体域名信息，则返回该域名的计费数据，而非指定项目计费数据
         * @type {number || null}
         */
        this.Project = null;

        /**
         * 指定加速区域查询计费数据：
mainland：中国境内
overseas：中国境外
不填充时，默认为 mainland
         * @type {string || null}
         */
        this.Area = null;

        /**
         * Area 为 overseas 时，指定国家/地区查询
省份、国家/地区编码可以查看 [省份编码映射](https://cloud.tencent.com/document/product/228/6316#.E7.9C.81.E4.BB.BD.E6.98.A0.E5.B0.84)
不填充时，查询所有国家/地区
         * @type {number || null}
         */
        this.District = null;

        /**
         * 计费统计类型
flux：计费流量
bandwidth：计费带宽
默认为 bandwidth
         * @type {string || null}
         */
        this.Metric = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Project = 'Project' in params ? params.Project : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.District = 'District' in params ? params.District : null;
        this.Metric = 'Metric' in params ? params.Metric : null;

    }
}

/**
 * 缓存配置基础版本
默认情况下所有文件缓存过期时间为 30 天
默认情况下静态加速类型的域名 .php;.jsp;.asp;.aspx 不缓存
注意：该版本不支持设置源站未返回 max-age 情况下的缓存过期规则设置
 * @class
 */
class SimpleCache extends  AbstractModel {
    constructor(){
        super();

        /**
         * 缓存过期时间规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SimpleCacheRule> || null}
         */
        this.CacheRules = null;

        /**
         * 遵循源站 Cache-Control: max-age 配置
on：开启
off：关闭
开启后，未能匹配 CacheRules 规则的资源将根据源站返回的 max-age 值进行节点缓存；匹配了 CacheRules 规则的资源将按照 CacheRules 中设置的缓存过期时间在节点进行缓存
与 CompareMaxAge 冲突，不能同时开启
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FollowOrigin = null;

        /**
         * 强制缓存
on：开启
off：关闭
默认为关闭状态，开启后，源站返回的 no-store、no-cache 资源，也将按照 CacheRules 规则进行缓存
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IgnoreCacheControl = null;

        /**
         * 忽略源站的Set-Cookie头部
on：开启
off：关闭
默认为关闭状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IgnoreSetCookie = null;

        /**
         * 高级缓存过期配置，开启时会对比源站返回的 max-age 值与 CacheRules 中设置的缓存过期时间，取最小值在节点进行缓存
on：开启
off：关闭
默认为关闭状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CompareMaxAge = null;

        /**
         * 总是回源站校验
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Revalidate || null}
         */
        this.Revalidate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CacheRules) {
            this.CacheRules = new Array();
            for (let z in params.CacheRules) {
                let obj = new SimpleCacheRule();
                obj.deserialize(params.CacheRules[z]);
                this.CacheRules.push(obj);
            }
        }
        this.FollowOrigin = 'FollowOrigin' in params ? params.FollowOrigin : null;
        this.IgnoreCacheControl = 'IgnoreCacheControl' in params ? params.IgnoreCacheControl : null;
        this.IgnoreSetCookie = 'IgnoreSetCookie' in params ? params.IgnoreSetCookie : null;
        this.CompareMaxAge = 'CompareMaxAge' in params ? params.CompareMaxAge : null;

        if (params.Revalidate) {
            let obj = new Revalidate();
            obj.deserialize(params.Revalidate)
            this.Revalidate = obj;
        }

    }
}

/**
 * DeleteClsLogTopic请求参数结构体
 * @class
 */
class DeleteClsLogTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志主题ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 日志集ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * 接入渠道，默认值为cdn
         * @type {string || null}
         */
        this.Channel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.Channel = 'Channel' in params ? params.Channel : null;

    }
}

/**
 * UserAgent黑白名单配置
 * @class
 */
class UserAgentFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开关，on或off
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * UA黑白名单生效规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UserAgentFilterRule> || null}
         */
        this.FilterRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.FilterRules) {
            this.FilterRules = new Array();
            for (let z in params.FilterRules) {
                let obj = new UserAgentFilterRule();
                obj.deserialize(params.FilterRules[z]);
                this.FilterRules.push(obj);
            }
        }

    }
}

/**
 * DeleteScdnDomain请求参数结构体
 * @class
 */
class DeleteScdnDomainRequest extends  AbstractModel {
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
 * DescribeDistrictIspData返回参数结构体
 * @class
 */
class DescribeDistrictIspDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地区运营商数据明细
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DistrictIspInfo> || null}
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
                let obj = new DistrictIspInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCdnOriginIp请求参数结构体
 * @class
 */
class DescribeCdnOriginIpRequest extends  AbstractModel {
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
 * UpdatePayType返回参数结构体
 * @class
 */
class UpdatePayTypeResponse extends  AbstractModel {
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
 * CLS主题信息
 * @class
 */
class TopicInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 主题名字
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 是否启用投递
         * @type {number || null}
         */
        this.Enabled = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * DescribeDomainsConfig返回参数结构体
 * @class
 */
class DescribeDomainsConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名列表
         * @type {Array.<DetailDomain> || null}
         */
        this.Domains = null;

        /**
         * 符合查询条件的域名总数
用于分页查询
         * @type {number || null}
         */
        this.TotalNumber = null;

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

        if (params.Domains) {
            this.Domains = new Array();
            for (let z in params.Domains) {
                let obj = new DetailDomain();
                obj.deserialize(params.Domains[z]);
                this.Domains.push(obj);
            }
        }
        this.TotalNumber = 'TotalNumber' in params ? params.TotalNumber : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDiagnoseReport请求参数结构体
 * @class
 */
class DescribeDiagnoseReportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 报告ID
         * @type {string || null}
         */
        this.ReportId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReportId = 'ReportId' in params ? params.ReportId : null;

    }
}

/**
 * 域名基础配置信息，含 CNAME、状态、业务类型、加速区域、创建时间、更新时间、源站配置等。
 * @class
 */
class BriefDomain extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名 ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 腾讯云账号 ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 加速域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名对应的 CNAME 地址
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * 加速服务状态
rejected：域名审核未通过，域名备案过期/被注销导致
processing：部署中
online：已启动
offline：已关闭
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 项目 ID，可前往腾讯云项目管理页面查看
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 域名业务类型
web：静态加速
download：下载加速
media：流媒体点播加速
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * 域名创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 域名更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 源站配置详情
         * @type {Origin || null}
         */
        this.Origin = null;

        /**
         * 域名封禁状态
normal：正常状态
overdue：账号欠费导致域名关闭，充值完成后可自行启动加速服务
malicious：域名出现恶意行为，强制关闭加速服务
ddos：域名被大规模 DDoS 攻击，关闭加速服务
idle：域名超过 90 天内无任何操作、数据产生，判定为不活跃域名自动关闭加速服务，可自行启动加速服务
unlicensed：域名未备案/备案注销，自动关闭加速服务，备案完成后可自行启动加速服务
capping：触发配置的带宽阈值上限
readonly：域名存在特殊配置，被锁定
         * @type {string || null}
         */
        this.Disable = null;

        /**
         * 加速区域
mainland：中国境内加速
overseas：中国境外加速
global：全球加速
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 域名锁定状态
normal：未锁定
mainland：中国境内锁定
overseas：中国境外锁定
global：全球锁定
         * @type {string || null}
         */
        this.Readonly = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }
        this.Disable = 'Disable' in params ? params.Disable : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Readonly = 'Readonly' in params ? params.Readonly : null;

    }
}

/**
 * 时间戳与其对应的数值
 * @class
 */
class TimestampData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据统计时间点，采用向前汇总模式
以 5 分钟粒度为例，13:35:00 时间点代表的统计数据区间为 13:35:00 至 13:39:59
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 数据值
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
        this.Time = 'Time' in params ? params.Time : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 图片优化-TpgAdapter配置
 * @class
 */
class TpgAdapter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开关，"on/off"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * 路径缓存缓存配置
 * @class
 */
class CacheConfigCache extends  AbstractModel {
    constructor(){
        super();

        /**
         * 缓存配置开关
on：开启
off：关闭
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 缓存过期时间设置
单位为秒，最大可设置为 365 天
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CacheTime = null;

        /**
         * 高级缓存过期配置，开启时会对比源站返回的 max-age 值与 CacheRules 中设置的缓存过期时间，取最小值在节点进行缓存
on：开启
off：关闭
默认为关闭状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CompareMaxAge = null;

        /**
         * 强制缓存
on：开启
off：关闭
默认为关闭状态，开启后，源站返回的 no-store、no-cache 资源，也将按照 CacheRules 规则进行缓存
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IgnoreCacheControl = null;

        /**
         * 当源站返回Set-Cookie头部时，节点是否缓存该头部及body
on：开启，不缓存该头部及body
off：关闭，遵循用户自定义的节点缓存规则
默认为关闭状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IgnoreSetCookie = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.CacheTime = 'CacheTime' in params ? params.CacheTime : null;
        this.CompareMaxAge = 'CompareMaxAge' in params ? params.CompareMaxAge : null;
        this.IgnoreCacheControl = 'IgnoreCacheControl' in params ? params.IgnoreCacheControl : null;
        this.IgnoreSetCookie = 'IgnoreSetCookie' in params ? params.IgnoreSetCookie : null;

    }
}

/**
 * DescribeReportData返回参数结构体
 * @class
 */
class DescribeReportDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名维度数据详情
         * @type {Array.<ReportData> || null}
         */
        this.DomainReport = null;

        /**
         * 项目维度数据详情
         * @type {Array.<ReportData> || null}
         */
        this.ProjectReport = null;

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

        if (params.DomainReport) {
            this.DomainReport = new Array();
            for (let z in params.DomainReport) {
                let obj = new ReportData();
                obj.deserialize(params.DomainReport[z]);
                this.DomainReport.push(obj);
            }
        }

        if (params.ProjectReport) {
            this.ProjectReport = new Array();
            for (let z in params.ProjectReport) {
                let obj = new ReportData();
                obj.deserialize(params.ProjectReport[z]);
                this.ProjectReport.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisableClsLogTopic请求参数结构体
 * @class
 */
class DisableClsLogTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志集ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * 日志主题ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 接入渠道，默认值为cdn
         * @type {string || null}
         */
        this.Channel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Channel = 'Channel' in params ? params.Channel : null;

    }
}

/**
 * 路径缓存缓存配置（三种缓存模式中选取一种）
 * @class
 */
class RuleCacheConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 缓存配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CacheConfigCache || null}
         */
        this.Cache = null;

        /**
         * 不缓存配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CacheConfigNoCache || null}
         */
        this.NoCache = null;

        /**
         * 遵循源站配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CacheConfigFollowOrigin || null}
         */
        this.FollowOrigin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Cache) {
            let obj = new CacheConfigCache();
            obj.deserialize(params.Cache)
            this.Cache = obj;
        }

        if (params.NoCache) {
            let obj = new CacheConfigNoCache();
            obj.deserialize(params.NoCache)
            this.NoCache = obj;
        }

        if (params.FollowOrigin) {
            let obj = new CacheConfigFollowOrigin();
            obj.deserialize(params.FollowOrigin)
            this.FollowOrigin = obj;
        }

    }
}

/**
 * ListClsTopicDomains返回参数结构体
 * @class
 */
class ListClsTopicDomainsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开发者ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 渠道
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * 日志集ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * 日志主题ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 域名区域配置，其中可能含有已删除的域名，如果要再传回ManageClsTopicDomains接口，需要结合ListCdnDomains接口排除掉已删除的域名
         * @type {Array.<DomainAreaConfig> || null}
         */
        this.DomainAreaConfigs = null;

        /**
         * 日志主题名称
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 日志主题最近更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

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
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

        if (params.DomainAreaConfigs) {
            this.DomainAreaConfigs = new Array();
            for (let z in params.DomainAreaConfigs) {
                let obj = new DomainAreaConfig();
                obj.deserialize(params.DomainAreaConfigs[z]);
                this.DomainAreaConfigs.push(obj);
            }
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CDN加速流量包。
 * @class
 */
class TrafficPackage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流量包 Id
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 流量包类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 流量包大小（单位为 Byte）
         * @type {number || null}
         */
        this.Bytes = null;

        /**
         * 已消耗流量（单位为 Byte）
         * @type {number || null}
         */
        this.BytesUsed = null;

        /**
         * 流量包状态
enabled：已启用
expired：已过期
disabled：未启用
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 流量包发放时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 流量包生效时间
         * @type {string || null}
         */
        this.EnableTime = null;

        /**
         * 流量包过期时间
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 流量包是否续订
         * @type {boolean || null}
         */
        this.ContractExtension = null;

        /**
         * 流量包是否自动续订
         * @type {boolean || null}
         */
        this.AutoExtension = null;

        /**
         * 流量包来源
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * 流量包生效区域，目前仅支持mainland
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 流量包生命周期月数
         * @type {number || null}
         */
        this.LifeTimeMonth = null;

        /**
         * 流量包是否支持续订
         * @type {boolean || null}
         */
        this.ExtensionAvailable = null;

        /**
         * 流量包是否支持退费
         * @type {boolean || null}
         */
        this.RefundAvailable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Bytes = 'Bytes' in params ? params.Bytes : null;
        this.BytesUsed = 'BytesUsed' in params ? params.BytesUsed : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.EnableTime = 'EnableTime' in params ? params.EnableTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.ContractExtension = 'ContractExtension' in params ? params.ContractExtension : null;
        this.AutoExtension = 'AutoExtension' in params ? params.AutoExtension : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.LifeTimeMonth = 'LifeTimeMonth' in params ? params.LifeTimeMonth : null;
        this.ExtensionAvailable = 'ExtensionAvailable' in params ? params.ExtensionAvailable : null;
        this.RefundAvailable = 'RefundAvailable' in params ? params.RefundAvailable : null;

    }
}

/**
 * Bot cookie策略
 * @class
 */
class BotCookie extends  AbstractModel {
    constructor(){
        super();

        /**
         * on|off
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 规则类型，当前只有all
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * 规则值，['*']
         * @type {Array.<string> || null}
         */
        this.RuleValue = null;

        /**
         * 执行动作，monitor|intercept|redirect|captcha
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 重定向时设置的重定向页面
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RedirectUrl = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.RuleValue = 'RuleValue' in params ? params.RuleValue : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.RedirectUrl = 'RedirectUrl' in params ? params.RedirectUrl : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeCdnIp请求参数结构体
 * @class
 */
class DescribeCdnIpRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要查询的 IP 列表
         * @type {Array.<string> || null}
         */
        this.Ips = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ips = 'Ips' in params ? params.Ips : null;

    }
}

/**
 * Ipv6启用配置，不可更改
 * @class
 */
class Ipv6 extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名是否开启ipv6功能，on或off。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * Waf子规则开关状态
 * @class
 */
class WafSubRuleStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子规则状态，on|off
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 规则id列表
         * @type {Array.<number> || null}
         */
        this.SubIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.SubIds = 'SubIds' in params ? params.SubIds : null;

    }
}

/**
 * SCDN 事件日志查询条件
 * @class
 */
class ScdnEventLogConditions extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配关键字，ip, attack_location
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 逻辑操作符，取值 exclude, include
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 匹配值，允许使用通配符(*)查询，匹配零个、单个、多个字符，例如 1.2.*
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
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 状态码缓存过期配置，默认情况下会对 404 状态码缓存 10 秒
 * @class
 */
class StatusCodeCache extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态码缓存过期配置开关
on：开启
off：关闭
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 状态码缓存过期规则明细
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<StatusCodeCacheRule> || null}
         */
        this.CacheRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.CacheRules) {
            this.CacheRules = new Array();
            for (let z in params.CacheRules) {
                let obj = new StatusCodeCacheRule();
                obj.deserialize(params.CacheRules[z]);
                this.CacheRules.push(obj);
            }
        }

    }
}

/**
 * DescribeIpVisit返回参数结构体
 * @class
 */
class DescribeIpVisitResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据统计的时间粒度，支持5min,  day，分别表示5分钟，1天的时间粒度。
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * 各个资源的回源数据详情。
         * @type {Array.<ResourceData> || null}
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
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ResourceData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EnableClsLogTopic返回参数结构体
 * @class
 */
class EnableClsLogTopicResponse extends  AbstractModel {
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
 * ListClsLogTopics返回参数结构体
 * @class
 */
class ListClsLogTopicsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志集信息
         * @type {LogSetInfo || null}
         */
        this.Logset = null;

        /**
         * 日志主题信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TopicInfo> || null}
         */
        this.Topics = null;

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

        if (params.Logset) {
            let obj = new LogSetInfo();
            obj.deserialize(params.Logset)
            this.Logset = obj;
        }

        if (params.Topics) {
            this.Topics = new Array();
            for (let z in params.Topics) {
                let obj = new TopicInfo();
                obj.deserialize(params.Topics[z]);
                this.Topics.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 域名海外地区特殊配置。UpdateDomainConfig接口只支持修改部分分地区配置，为了兼容旧版本配置，本类型会列出旧版本所有可能存在差异的配置列表，支持修改的配置列表如下：
+ Authentication
+ BandwidthAlert
+ ErrorPage
+ IpFilter
+ Origin
+ Referer
 * @class
 */
class OverseaConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间戳防盗链配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Authentication || null}
         */
        this.Authentication = null;

        /**
         * 带宽封顶配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BandwidthAlert || null}
         */
        this.BandwidthAlert = null;

        /**
         * 缓存规则配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Cache || null}
         */
        this.Cache = null;

        /**
         * 缓存相关配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CacheKey || null}
         */
        this.CacheKey = null;

        /**
         * 智能压缩配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Compression || null}
         */
        this.Compression = null;

        /**
         * 下载限速配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DownstreamCapping || null}
         */
        this.DownstreamCapping = null;

        /**
         * 错误码重定向配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ErrorPage || null}
         */
        this.ErrorPage = null;

        /**
         * 301和302自动回源跟随配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FollowRedirect || null}
         */
        this.FollowRedirect = null;

        /**
         * 访问协议强制跳转配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ForceRedirect || null}
         */
        this.ForceRedirect = null;

        /**
         * Https配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Https || null}
         */
        this.Https = null;

        /**
         * IP黑白名单配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IpFilter || null}
         */
        this.IpFilter = null;

        /**
         * IP限频配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IpFreqLimit || null}
         */
        this.IpFreqLimit = null;

        /**
         * 浏览器缓存规则配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MaxAge || null}
         */
        this.MaxAge = null;

        /**
         * 源站配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Origin || null}
         */
        this.Origin = null;

        /**
         * 跨国优化配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OriginPullOptimization || null}
         */
        this.OriginPullOptimization = null;

        /**
         * Range回源配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RangeOriginPull || null}
         */
        this.RangeOriginPull = null;

        /**
         * 防盗链配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Referer || null}
         */
        this.Referer = null;

        /**
         * 回源请求头部配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RequestHeader || null}
         */
        this.RequestHeader = null;

        /**
         * 源站响应头部配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ResponseHeader || null}
         */
        this.ResponseHeader = null;

        /**
         * 遵循源站缓存头部配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ResponseHeaderCache || null}
         */
        this.ResponseHeaderCache = null;

        /**
         * seo优化配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Seo || null}
         */
        this.Seo = null;

        /**
         * 域名业务类型，web，download，media分别表示静态加速，下载加速和流媒体加速。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * 状态码缓存配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {StatusCodeCache || null}
         */
        this.StatusCodeCache = null;

        /**
         * 视频拖拽配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {VideoSeek || null}
         */
        this.VideoSeek = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Authentication) {
            let obj = new Authentication();
            obj.deserialize(params.Authentication)
            this.Authentication = obj;
        }

        if (params.BandwidthAlert) {
            let obj = new BandwidthAlert();
            obj.deserialize(params.BandwidthAlert)
            this.BandwidthAlert = obj;
        }

        if (params.Cache) {
            let obj = new Cache();
            obj.deserialize(params.Cache)
            this.Cache = obj;
        }

        if (params.CacheKey) {
            let obj = new CacheKey();
            obj.deserialize(params.CacheKey)
            this.CacheKey = obj;
        }

        if (params.Compression) {
            let obj = new Compression();
            obj.deserialize(params.Compression)
            this.Compression = obj;
        }

        if (params.DownstreamCapping) {
            let obj = new DownstreamCapping();
            obj.deserialize(params.DownstreamCapping)
            this.DownstreamCapping = obj;
        }

        if (params.ErrorPage) {
            let obj = new ErrorPage();
            obj.deserialize(params.ErrorPage)
            this.ErrorPage = obj;
        }

        if (params.FollowRedirect) {
            let obj = new FollowRedirect();
            obj.deserialize(params.FollowRedirect)
            this.FollowRedirect = obj;
        }

        if (params.ForceRedirect) {
            let obj = new ForceRedirect();
            obj.deserialize(params.ForceRedirect)
            this.ForceRedirect = obj;
        }

        if (params.Https) {
            let obj = new Https();
            obj.deserialize(params.Https)
            this.Https = obj;
        }

        if (params.IpFilter) {
            let obj = new IpFilter();
            obj.deserialize(params.IpFilter)
            this.IpFilter = obj;
        }

        if (params.IpFreqLimit) {
            let obj = new IpFreqLimit();
            obj.deserialize(params.IpFreqLimit)
            this.IpFreqLimit = obj;
        }

        if (params.MaxAge) {
            let obj = new MaxAge();
            obj.deserialize(params.MaxAge)
            this.MaxAge = obj;
        }

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }

        if (params.OriginPullOptimization) {
            let obj = new OriginPullOptimization();
            obj.deserialize(params.OriginPullOptimization)
            this.OriginPullOptimization = obj;
        }

        if (params.RangeOriginPull) {
            let obj = new RangeOriginPull();
            obj.deserialize(params.RangeOriginPull)
            this.RangeOriginPull = obj;
        }

        if (params.Referer) {
            let obj = new Referer();
            obj.deserialize(params.Referer)
            this.Referer = obj;
        }

        if (params.RequestHeader) {
            let obj = new RequestHeader();
            obj.deserialize(params.RequestHeader)
            this.RequestHeader = obj;
        }

        if (params.ResponseHeader) {
            let obj = new ResponseHeader();
            obj.deserialize(params.ResponseHeader)
            this.ResponseHeader = obj;
        }

        if (params.ResponseHeaderCache) {
            let obj = new ResponseHeaderCache();
            obj.deserialize(params.ResponseHeaderCache)
            this.ResponseHeaderCache = obj;
        }

        if (params.Seo) {
            let obj = new Seo();
            obj.deserialize(params.Seo)
            this.Seo = obj;
        }
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;

        if (params.StatusCodeCache) {
            let obj = new StatusCodeCache();
            obj.deserialize(params.StatusCodeCache)
            this.StatusCodeCache = obj;
        }

        if (params.VideoSeek) {
            let obj = new VideoSeek();
            obj.deserialize(params.VideoSeek)
            this.VideoSeek = obj;
        }

    }
}

/**
 * AddCdnDomain请求参数结构体
 * @class
 */
class AddCdnDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 加速域名业务类型
web：静态加速
download：下载加速
media：流媒体点播加速
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * 源站配置
         * @type {Origin || null}
         */
        this.Origin = null;

        /**
         * 项目 ID，默认为 0，代表【默认项目】
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * IP 黑白名单配置
         * @type {IpFilter || null}
         */
        this.IpFilter = null;

        /**
         * IP 限频配置
         * @type {IpFreqLimit || null}
         */
        this.IpFreqLimit = null;

        /**
         * 状态码缓存配置
         * @type {StatusCodeCache || null}
         */
        this.StatusCodeCache = null;

        /**
         * 智能压缩配置
         * @type {Compression || null}
         */
        this.Compression = null;

        /**
         * 带宽封顶配置
         * @type {BandwidthAlert || null}
         */
        this.BandwidthAlert = null;

        /**
         * Range 回源配置
         * @type {RangeOriginPull || null}
         */
        this.RangeOriginPull = null;

        /**
         * 301/302 回源跟随配置。
         * @type {FollowRedirect || null}
         */
        this.FollowRedirect = null;

        /**
         * 错误码重定向配置（功能灰度中，尚未全量）
         * @type {ErrorPage || null}
         */
        this.ErrorPage = null;

        /**
         * 请求头部配置
         * @type {RequestHeader || null}
         */
        this.RequestHeader = null;

        /**
         * 响应头部配置
         * @type {ResponseHeader || null}
         */
        this.ResponseHeader = null;

        /**
         * 下载速度配置
         * @type {DownstreamCapping || null}
         */
        this.DownstreamCapping = null;

        /**
         * 节点缓存键配置
         * @type {CacheKey || null}
         */
        this.CacheKey = null;

        /**
         * 头部缓存配置
         * @type {ResponseHeaderCache || null}
         */
        this.ResponseHeaderCache = null;

        /**
         * 视频拖拽配置
         * @type {VideoSeek || null}
         */
        this.VideoSeek = null;

        /**
         * 缓存过期时间配置
         * @type {Cache || null}
         */
        this.Cache = null;

        /**
         * 跨国链路优化配置
         * @type {OriginPullOptimization || null}
         */
        this.OriginPullOptimization = null;

        /**
         * Https 加速配置
         * @type {Https || null}
         */
        this.Https = null;

        /**
         * 时间戳防盗链配置
         * @type {Authentication || null}
         */
        this.Authentication = null;

        /**
         * SEO 优化配置
         * @type {Seo || null}
         */
        this.Seo = null;

        /**
         * 访问协议强制跳转配置
         * @type {ForceRedirect || null}
         */
        this.ForceRedirect = null;

        /**
         * Referer 防盗链配置
         * @type {Referer || null}
         */
        this.Referer = null;

        /**
         * 浏览器缓存配置（功能灰度中，尚未全量）
         * @type {MaxAge || null}
         */
        this.MaxAge = null;

        /**
         * Ipv6 配置（功能灰度中，尚未全量）
         * @type {Ipv6 || null}
         */
        this.Ipv6 = null;

        /**
         * 地域属性特殊配置
适用于域名境内加速、境外加速配置不一致场景
         * @type {SpecificConfig || null}
         */
        this.SpecificConfig = null;

        /**
         * 域名加速区域
mainland：中国境内加速
overseas：中国境外加速
global：全球加速
使用中国境外加速、全球加速时，需要先开通中国境外加速服务
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 回源超时配置
         * @type {OriginPullTimeout || null}
         */
        this.OriginPullTimeout = null;

        /**
         * 标签配置
         * @type {Array.<Tag> || null}
         */
        this.Tag = null;

        /**
         * Ipv6 访问配置
         * @type {Ipv6Access || null}
         */
        this.Ipv6Access = null;

        /**
         * 离线缓存
         * @type {OfflineCache || null}
         */
        this.OfflineCache = null;

        /**
         * QUIC正在内测中，请先提交内测申请，详情请前往QUIC产品文档。
         * @type {Quic || null}
         */
        this.Quic = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.IpFilter) {
            let obj = new IpFilter();
            obj.deserialize(params.IpFilter)
            this.IpFilter = obj;
        }

        if (params.IpFreqLimit) {
            let obj = new IpFreqLimit();
            obj.deserialize(params.IpFreqLimit)
            this.IpFreqLimit = obj;
        }

        if (params.StatusCodeCache) {
            let obj = new StatusCodeCache();
            obj.deserialize(params.StatusCodeCache)
            this.StatusCodeCache = obj;
        }

        if (params.Compression) {
            let obj = new Compression();
            obj.deserialize(params.Compression)
            this.Compression = obj;
        }

        if (params.BandwidthAlert) {
            let obj = new BandwidthAlert();
            obj.deserialize(params.BandwidthAlert)
            this.BandwidthAlert = obj;
        }

        if (params.RangeOriginPull) {
            let obj = new RangeOriginPull();
            obj.deserialize(params.RangeOriginPull)
            this.RangeOriginPull = obj;
        }

        if (params.FollowRedirect) {
            let obj = new FollowRedirect();
            obj.deserialize(params.FollowRedirect)
            this.FollowRedirect = obj;
        }

        if (params.ErrorPage) {
            let obj = new ErrorPage();
            obj.deserialize(params.ErrorPage)
            this.ErrorPage = obj;
        }

        if (params.RequestHeader) {
            let obj = new RequestHeader();
            obj.deserialize(params.RequestHeader)
            this.RequestHeader = obj;
        }

        if (params.ResponseHeader) {
            let obj = new ResponseHeader();
            obj.deserialize(params.ResponseHeader)
            this.ResponseHeader = obj;
        }

        if (params.DownstreamCapping) {
            let obj = new DownstreamCapping();
            obj.deserialize(params.DownstreamCapping)
            this.DownstreamCapping = obj;
        }

        if (params.CacheKey) {
            let obj = new CacheKey();
            obj.deserialize(params.CacheKey)
            this.CacheKey = obj;
        }

        if (params.ResponseHeaderCache) {
            let obj = new ResponseHeaderCache();
            obj.deserialize(params.ResponseHeaderCache)
            this.ResponseHeaderCache = obj;
        }

        if (params.VideoSeek) {
            let obj = new VideoSeek();
            obj.deserialize(params.VideoSeek)
            this.VideoSeek = obj;
        }

        if (params.Cache) {
            let obj = new Cache();
            obj.deserialize(params.Cache)
            this.Cache = obj;
        }

        if (params.OriginPullOptimization) {
            let obj = new OriginPullOptimization();
            obj.deserialize(params.OriginPullOptimization)
            this.OriginPullOptimization = obj;
        }

        if (params.Https) {
            let obj = new Https();
            obj.deserialize(params.Https)
            this.Https = obj;
        }

        if (params.Authentication) {
            let obj = new Authentication();
            obj.deserialize(params.Authentication)
            this.Authentication = obj;
        }

        if (params.Seo) {
            let obj = new Seo();
            obj.deserialize(params.Seo)
            this.Seo = obj;
        }

        if (params.ForceRedirect) {
            let obj = new ForceRedirect();
            obj.deserialize(params.ForceRedirect)
            this.ForceRedirect = obj;
        }

        if (params.Referer) {
            let obj = new Referer();
            obj.deserialize(params.Referer)
            this.Referer = obj;
        }

        if (params.MaxAge) {
            let obj = new MaxAge();
            obj.deserialize(params.MaxAge)
            this.MaxAge = obj;
        }

        if (params.Ipv6) {
            let obj = new Ipv6();
            obj.deserialize(params.Ipv6)
            this.Ipv6 = obj;
        }

        if (params.SpecificConfig) {
            let obj = new SpecificConfig();
            obj.deserialize(params.SpecificConfig)
            this.SpecificConfig = obj;
        }
        this.Area = 'Area' in params ? params.Area : null;

        if (params.OriginPullTimeout) {
            let obj = new OriginPullTimeout();
            obj.deserialize(params.OriginPullTimeout)
            this.OriginPullTimeout = obj;
        }

        if (params.Tag) {
            this.Tag = new Array();
            for (let z in params.Tag) {
                let obj = new Tag();
                obj.deserialize(params.Tag[z]);
                this.Tag.push(obj);
            }
        }

        if (params.Ipv6Access) {
            let obj = new Ipv6Access();
            obj.deserialize(params.Ipv6Access)
            this.Ipv6Access = obj;
        }

        if (params.OfflineCache) {
            let obj = new OfflineCache();
            obj.deserialize(params.OfflineCache)
            this.OfflineCache = obj;
        }

        if (params.Quic) {
            let obj = new Quic();
            obj.deserialize(params.Quic)
            this.Quic = obj;
        }

    }
}

/**
 * UserAgent黑白名单规则配置
 * @class
 */
class UserAgentFilterRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问路径生效类型
all: 所有访问路径生效
file: 根据文件后缀类型生效
directory: 根据目录生效
path: 根据完整访问路径生效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * 访问路径生效内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.RulePaths = null;

        /**
         * UserAgent列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.UserAgents = null;

        /**
         * 黑名单或白名单，blacklist或whitelist
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FilterType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.RulePaths = 'RulePaths' in params ? params.RulePaths : null;
        this.UserAgents = 'UserAgents' in params ? params.UserAgents : null;
        this.FilterType = 'FilterType' in params ? params.FilterType : null;

    }
}

/**
 * UpdateDomainConfig请求参数结构体
 * @class
 */
class UpdateDomainConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 项目 ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 源站配置
         * @type {Origin || null}
         */
        this.Origin = null;

        /**
         * IP 黑白名单配置
         * @type {IpFilter || null}
         */
        this.IpFilter = null;

        /**
         * IP 限频配置
         * @type {IpFreqLimit || null}
         */
        this.IpFreqLimit = null;

        /**
         * 状态码缓存配置
         * @type {StatusCodeCache || null}
         */
        this.StatusCodeCache = null;

        /**
         * 智能压缩配置
         * @type {Compression || null}
         */
        this.Compression = null;

        /**
         * 带宽封顶配置
         * @type {BandwidthAlert || null}
         */
        this.BandwidthAlert = null;

        /**
         * Range 回源配置
         * @type {RangeOriginPull || null}
         */
        this.RangeOriginPull = null;

        /**
         * 301/302 回源跟随配置
         * @type {FollowRedirect || null}
         */
        this.FollowRedirect = null;

        /**
         * 错误码重定向配置（功能灰度中，尚未全量）
         * @type {ErrorPage || null}
         */
        this.ErrorPage = null;

        /**
         * 请求头部配置
         * @type {RequestHeader || null}
         */
        this.RequestHeader = null;

        /**
         * 响应头部配置
         * @type {ResponseHeader || null}
         */
        this.ResponseHeader = null;

        /**
         * 下载速度配置
         * @type {DownstreamCapping || null}
         */
        this.DownstreamCapping = null;

        /**
         * 节点缓存键配置
         * @type {CacheKey || null}
         */
        this.CacheKey = null;

        /**
         * 头部缓存配置
         * @type {ResponseHeaderCache || null}
         */
        this.ResponseHeaderCache = null;

        /**
         * 视频拖拽配置
         * @type {VideoSeek || null}
         */
        this.VideoSeek = null;

        /**
         * 缓存过期时间配置
         * @type {Cache || null}
         */
        this.Cache = null;

        /**
         * 跨国链路优化配置
         * @type {OriginPullOptimization || null}
         */
        this.OriginPullOptimization = null;

        /**
         * Https 加速配置
         * @type {Https || null}
         */
        this.Https = null;

        /**
         * 时间戳防盗链配置
         * @type {Authentication || null}
         */
        this.Authentication = null;

        /**
         * SEO 优化配置
         * @type {Seo || null}
         */
        this.Seo = null;

        /**
         * 访问协议强制跳转配置
         * @type {ForceRedirect || null}
         */
        this.ForceRedirect = null;

        /**
         * Referer 防盗链配置
         * @type {Referer || null}
         */
        this.Referer = null;

        /**
         * 浏览器缓存配置（功能灰度中，尚未全量）
         * @type {MaxAge || null}
         */
        this.MaxAge = null;

        /**
         * 域名业务类型
web：静态加速
download：下载加速
media：流媒体点播加速
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * 地域属性特殊配置
适用于域名境内加速、境外加速配置不一致场景
         * @type {SpecificConfig || null}
         */
        this.SpecificConfig = null;

        /**
         * 域名加速区域
mainland：中国境内加速
overseas：中国境外加速
global：全球加速
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 回源超时配置
         * @type {OriginPullTimeout || null}
         */
        this.OriginPullTimeout = null;

        /**
         * 回源S3私有鉴权
         * @type {AwsPrivateAccess || null}
         */
        this.AwsPrivateAccess = null;

        /**
         * UA黑白名单配置
         * @type {UserAgentFilter || null}
         */
        this.UserAgentFilter = null;

        /**
         * 访问控制
         * @type {AccessControl || null}
         */
        this.AccessControl = null;

        /**
         * URL重定向配置
         * @type {UrlRedirect || null}
         */
        this.UrlRedirect = null;

        /**
         * 访问端口配置
         * @type {Array.<number> || null}
         */
        this.AccessPort = null;

        /**
         * 时间戳防盗链高级版配置，白名单功能
         * @type {AdvancedAuthentication || null}
         */
        this.AdvancedAuthentication = null;

        /**
         * 回源鉴权高级版配置，白名单功能
         * @type {OriginAuthentication || null}
         */
        this.OriginAuthentication = null;

        /**
         * Ipv6 访问配置
         * @type {Ipv6Access || null}
         */
        this.Ipv6Access = null;

        /**
         * 离线缓存
         * @type {OfflineCache || null}
         */
        this.OfflineCache = null;

        /**
         * 合并回源
         * @type {OriginCombine || null}
         */
        this.OriginCombine = null;

        /**
         * QUIC正在内测中，请先提交内测申请，详情请前往QUIC产品文档。
         * @type {Quic || null}
         */
        this.Quic = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }

        if (params.IpFilter) {
            let obj = new IpFilter();
            obj.deserialize(params.IpFilter)
            this.IpFilter = obj;
        }

        if (params.IpFreqLimit) {
            let obj = new IpFreqLimit();
            obj.deserialize(params.IpFreqLimit)
            this.IpFreqLimit = obj;
        }

        if (params.StatusCodeCache) {
            let obj = new StatusCodeCache();
            obj.deserialize(params.StatusCodeCache)
            this.StatusCodeCache = obj;
        }

        if (params.Compression) {
            let obj = new Compression();
            obj.deserialize(params.Compression)
            this.Compression = obj;
        }

        if (params.BandwidthAlert) {
            let obj = new BandwidthAlert();
            obj.deserialize(params.BandwidthAlert)
            this.BandwidthAlert = obj;
        }

        if (params.RangeOriginPull) {
            let obj = new RangeOriginPull();
            obj.deserialize(params.RangeOriginPull)
            this.RangeOriginPull = obj;
        }

        if (params.FollowRedirect) {
            let obj = new FollowRedirect();
            obj.deserialize(params.FollowRedirect)
            this.FollowRedirect = obj;
        }

        if (params.ErrorPage) {
            let obj = new ErrorPage();
            obj.deserialize(params.ErrorPage)
            this.ErrorPage = obj;
        }

        if (params.RequestHeader) {
            let obj = new RequestHeader();
            obj.deserialize(params.RequestHeader)
            this.RequestHeader = obj;
        }

        if (params.ResponseHeader) {
            let obj = new ResponseHeader();
            obj.deserialize(params.ResponseHeader)
            this.ResponseHeader = obj;
        }

        if (params.DownstreamCapping) {
            let obj = new DownstreamCapping();
            obj.deserialize(params.DownstreamCapping)
            this.DownstreamCapping = obj;
        }

        if (params.CacheKey) {
            let obj = new CacheKey();
            obj.deserialize(params.CacheKey)
            this.CacheKey = obj;
        }

        if (params.ResponseHeaderCache) {
            let obj = new ResponseHeaderCache();
            obj.deserialize(params.ResponseHeaderCache)
            this.ResponseHeaderCache = obj;
        }

        if (params.VideoSeek) {
            let obj = new VideoSeek();
            obj.deserialize(params.VideoSeek)
            this.VideoSeek = obj;
        }

        if (params.Cache) {
            let obj = new Cache();
            obj.deserialize(params.Cache)
            this.Cache = obj;
        }

        if (params.OriginPullOptimization) {
            let obj = new OriginPullOptimization();
            obj.deserialize(params.OriginPullOptimization)
            this.OriginPullOptimization = obj;
        }

        if (params.Https) {
            let obj = new Https();
            obj.deserialize(params.Https)
            this.Https = obj;
        }

        if (params.Authentication) {
            let obj = new Authentication();
            obj.deserialize(params.Authentication)
            this.Authentication = obj;
        }

        if (params.Seo) {
            let obj = new Seo();
            obj.deserialize(params.Seo)
            this.Seo = obj;
        }

        if (params.ForceRedirect) {
            let obj = new ForceRedirect();
            obj.deserialize(params.ForceRedirect)
            this.ForceRedirect = obj;
        }

        if (params.Referer) {
            let obj = new Referer();
            obj.deserialize(params.Referer)
            this.Referer = obj;
        }

        if (params.MaxAge) {
            let obj = new MaxAge();
            obj.deserialize(params.MaxAge)
            this.MaxAge = obj;
        }
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;

        if (params.SpecificConfig) {
            let obj = new SpecificConfig();
            obj.deserialize(params.SpecificConfig)
            this.SpecificConfig = obj;
        }
        this.Area = 'Area' in params ? params.Area : null;

        if (params.OriginPullTimeout) {
            let obj = new OriginPullTimeout();
            obj.deserialize(params.OriginPullTimeout)
            this.OriginPullTimeout = obj;
        }

        if (params.AwsPrivateAccess) {
            let obj = new AwsPrivateAccess();
            obj.deserialize(params.AwsPrivateAccess)
            this.AwsPrivateAccess = obj;
        }

        if (params.UserAgentFilter) {
            let obj = new UserAgentFilter();
            obj.deserialize(params.UserAgentFilter)
            this.UserAgentFilter = obj;
        }

        if (params.AccessControl) {
            let obj = new AccessControl();
            obj.deserialize(params.AccessControl)
            this.AccessControl = obj;
        }

        if (params.UrlRedirect) {
            let obj = new UrlRedirect();
            obj.deserialize(params.UrlRedirect)
            this.UrlRedirect = obj;
        }
        this.AccessPort = 'AccessPort' in params ? params.AccessPort : null;

        if (params.AdvancedAuthentication) {
            let obj = new AdvancedAuthentication();
            obj.deserialize(params.AdvancedAuthentication)
            this.AdvancedAuthentication = obj;
        }

        if (params.OriginAuthentication) {
            let obj = new OriginAuthentication();
            obj.deserialize(params.OriginAuthentication)
            this.OriginAuthentication = obj;
        }

        if (params.Ipv6Access) {
            let obj = new Ipv6Access();
            obj.deserialize(params.Ipv6Access)
            this.Ipv6Access = obj;
        }

        if (params.OfflineCache) {
            let obj = new OfflineCache();
            obj.deserialize(params.OfflineCache)
            this.OfflineCache = obj;
        }

        if (params.OriginCombine) {
            let obj = new OriginCombine();
            obj.deserialize(params.OriginCombine)
            this.OriginCombine = obj;
        }

        if (params.Quic) {
            let obj = new Quic();
            obj.deserialize(params.Quic)
            this.Quic = obj;
        }

    }
}

/**
 * 域名标签配置
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签值
注意：此字段可能返回 null，表示取不到有效值。
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
 * 路径缓存遵循源站配置
 * @class
 */
class CacheConfigFollowOrigin extends  AbstractModel {
    constructor(){
        super();

        /**
         * 遵循源站配置开关
on：开启
off：关闭
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * MagAge 规则配置
 * @class
 */
class MaxAgeRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则类型：
all：所有文件生效
file：指定文件后缀生效
directory：指定路径生效
path：指定绝对路径生效
index: 指定主页生效
         * @type {string || null}
         */
        this.MaxAgeType = null;

        /**
         * MaxAgeType 对应类型下的匹配内容：
all 时填充 *
file 时填充后缀名，如 jpg、txt
directory 时填充路径，如 /xxx/test/
path 时填充绝对路径，如 /xxx/test.html
index 时填充 /
注意：all规则不可删除，默认遵循源站，可修改。
         * @type {Array.<string> || null}
         */
        this.MaxAgeContents = null;

        /**
         * MaxAge 时间设置，单位秒
注意：时间为0，即不缓存。
         * @type {number || null}
         */
        this.MaxAgeTime = null;

        /**
         * 是否遵循源站，on或off，开启时忽略时间设置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FollowOrigin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxAgeType = 'MaxAgeType' in params ? params.MaxAgeType : null;
        this.MaxAgeContents = 'MaxAgeContents' in params ? params.MaxAgeContents : null;
        this.MaxAgeTime = 'MaxAgeTime' in params ? params.MaxAgeTime : null;
        this.FollowOrigin = 'FollowOrigin' in params ? params.FollowOrigin : null;

    }
}

/**
 * 时间戳防盗链高级版模式E配置。
 * @class
 */
class AdvancedAuthenticationTypeE extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于计算签名的密钥，只允许字母和数字，长度6-32字节。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * uri串中签名的字段名，字母，数字或下划线构成，同时必须以字母开头。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SignParam = null;

        /**
         * uri串中Acl签名的字段名，字母，数字或下划线构成，同时必须以字母开头。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AclSignParam = null;

        /**
         * uri串中开始时间字段名，字母，数字或下划线构成，同时必须以字母开头。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTimeParam = null;

        /**
         * uri串中过期时间字段名，字母，数字或下划线构成，同时必须以字母开头。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireTimeParam = null;

        /**
         * 时间格式，dec
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.SignParam = 'SignParam' in params ? params.SignParam : null;
        this.AclSignParam = 'AclSignParam' in params ? params.AclSignParam : null;
        this.StartTimeParam = 'StartTimeParam' in params ? params.StartTimeParam : null;
        this.ExpireTimeParam = 'ExpireTimeParam' in params ? params.ExpireTimeParam : null;
        this.TimeFormat = 'TimeFormat' in params ? params.TimeFormat : null;

    }
}

/**
 * DescribeCertDomains请求参数结构体
 * @class
 */
class DescribeCertDomainsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * PEM格式证书Base64编码后的字符串
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
        this.Cert = 'Cert' in params ? params.Cert : null;

    }
}

/**
 * 时间戳防盗链高级鉴权模式TypeF配置
 * @class
 */
class AdvancedAuthenticationTypeF extends  AbstractModel {
    constructor(){
        super();

        /**
         * uri串中签名的字段名，字母，数字或下划线构成，同时必须以字母开头。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SignParam = null;

        /**
         * uri串中时间的字段名，字母，数字或下划线构成，同时必须以字母开头。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeParam = null;

        /**
         * uri串中Transaction字段名，字母，数字或下划线构成，同时必须以字母开头。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TransactionParam = null;

        /**
         * 用于计算签名的主密钥，只允许字母和数字，长度6-32字节。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * 用于计算签名的备选密钥，主密钥校验失败后再次尝试备选密钥，只允许字母和数字，长度6-32字节。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BackupSecretKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SignParam = 'SignParam' in params ? params.SignParam : null;
        this.TimeParam = 'TimeParam' in params ? params.TimeParam : null;
        this.TransactionParam = 'TransactionParam' in params ? params.TransactionParam : null;
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.BackupSecretKey = 'BackupSecretKey' in params ? params.BackupSecretKey : null;

    }
}

/**
 * 时间戳防盗链高级版模式A配置。
 * @class
 */
class AdvancedAuthenticationTypeA extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于计算签名的密钥，只允许字母和数字，长度6-32字节。
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * uri串中签名的字段名，字母，数字或下划线构成，同时必须以字母开头。
         * @type {string || null}
         */
        this.SignParam = null;

        /**
         * uri串中时间的字段名，字母，数字或下划线构成，同时必须以字母开头。
         * @type {string || null}
         */
        this.TimeParam = null;

        /**
         * 过期时间，单位秒。
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * 是否必须提供过期时间参数。
         * @type {boolean || null}
         */
        this.ExpireTimeRequired = null;

        /**
         * Url组成格式，如：${private_key}${schema}${host}${full_uri。
         * @type {string || null}
         */
        this.Format = null;

        /**
         * 时间格式，dec，hex分别表示十进制，十六进制。
         * @type {string || null}
         */
        this.TimeFormat = null;

        /**
         * 鉴权失败时返回的状态码。
         * @type {number || null}
         */
        this.FailCode = null;

        /**
         * 链接过期时返回的状态码。
         * @type {number || null}
         */
        this.ExpireCode = null;

        /**
         * 需要鉴权的url路径列表。
         * @type {Array.<string> || null}
         */
        this.RulePaths = null;

        /**
         * 保留字段。
         * @type {number || null}
         */
        this.Transformation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.SignParam = 'SignParam' in params ? params.SignParam : null;
        this.TimeParam = 'TimeParam' in params ? params.TimeParam : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.ExpireTimeRequired = 'ExpireTimeRequired' in params ? params.ExpireTimeRequired : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.TimeFormat = 'TimeFormat' in params ? params.TimeFormat : null;
        this.FailCode = 'FailCode' in params ? params.FailCode : null;
        this.ExpireCode = 'ExpireCode' in params ? params.ExpireCode : null;
        this.RulePaths = 'RulePaths' in params ? params.RulePaths : null;
        this.Transformation = 'Transformation' in params ? params.Transformation : null;

    }
}

/**
 * 缓存过期配置高级版（功能灰度中，尚未全量）
注意：该版本不支持设置首页缓存规则
 * @class
 */
class AdvancedCache extends  AbstractModel {
    constructor(){
        super();

        /**
         * 缓存过期规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AdvanceCacheRule> || null}
         */
        this.CacheRules = null;

        /**
         * 强制缓存配置
on：开启
off：关闭
开启时，源站返回 no-cache、no-store 头部时，仍按照缓存过期规则进行节点缓存
默认为关闭状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IgnoreCacheControl = null;

        /**
         * 当源站返回Set-Cookie头部时，节点是否缓存该头部及body
on：开启，不缓存该头部及body
off：关闭，遵循用户自定义的节点缓存规则
默认为关闭状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IgnoreSetCookie = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CacheRules) {
            this.CacheRules = new Array();
            for (let z in params.CacheRules) {
                let obj = new AdvanceCacheRule();
                obj.deserialize(params.CacheRules[z]);
                this.CacheRules.push(obj);
            }
        }
        this.IgnoreCacheControl = 'IgnoreCacheControl' in params ? params.IgnoreCacheControl : null;
        this.IgnoreSetCookie = 'IgnoreSetCookie' in params ? params.IgnoreSetCookie : null;

    }
}

/**
 * 时间戳防盗链高级版模式C配置。
 * @class
 */
class AdvancedAuthenticationTypeC extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问密钥。
         * @type {string || null}
         */
        this.AccessKey = null;

        /**
         * 鉴权密钥。
         * @type {string || null}
         */
        this.SecretKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessKey = 'AccessKey' in params ? params.AccessKey : null;
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;

    }
}

/**
 * 时间戳防盗链高级版模式B配置。
 * @class
 */
class AdvancedAuthenticationTypeB extends  AbstractModel {
    constructor(){
        super();

        /**
         * alpha键名。
         * @type {string || null}
         */
        this.KeyAlpha = null;

        /**
         * beta键名。
         * @type {string || null}
         */
        this.KeyBeta = null;

        /**
         * gamma键名。
         * @type {string || null}
         */
        this.KeyGamma = null;

        /**
         * uri串中签名的字段名，字母，数字或下划线构成，同时必须以字母开头。
         * @type {string || null}
         */
        this.SignParam = null;

        /**
         * uri串中时间的字段名，字母，数字或下划线构成，同时必须以字母开头。
         * @type {string || null}
         */
        this.TimeParam = null;

        /**
         * 过期时间，单位秒。
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * 时间格式，dec，hex分别表示十进制，十六进制。
         * @type {string || null}
         */
        this.TimeFormat = null;

        /**
         * 鉴权失败时返回的状态码。
         * @type {number || null}
         */
        this.FailCode = null;

        /**
         * 链接过期时返回的状态码。
         * @type {number || null}
         */
        this.ExpireCode = null;

        /**
         * 需要鉴权的url路径列表。
         * @type {Array.<string> || null}
         */
        this.RulePaths = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyAlpha = 'KeyAlpha' in params ? params.KeyAlpha : null;
        this.KeyBeta = 'KeyBeta' in params ? params.KeyBeta : null;
        this.KeyGamma = 'KeyGamma' in params ? params.KeyGamma : null;
        this.SignParam = 'SignParam' in params ? params.SignParam : null;
        this.TimeParam = 'TimeParam' in params ? params.TimeParam : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.TimeFormat = 'TimeFormat' in params ? params.TimeFormat : null;
        this.FailCode = 'FailCode' in params ? params.FailCode : null;
        this.ExpireCode = 'ExpireCode' in params ? params.ExpireCode : null;
        this.RulePaths = 'RulePaths' in params ? params.RulePaths : null;

    }
}

/**
 * 图片优化-WebpAdapter配置
 * @class
 */
class WebpAdapter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开关，"on/off"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * CreateScdnLogTask返回参数结构体
 * @class
 */
class CreateScdnLogTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建结果, 
"0" -> 创建成功
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 名称与ID映射关系
 * @class
 */
class MapInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对象 Id
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 对象名称
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DescribeCertDomains返回参数结构体
 * @class
 */
class DescribeCertDomainsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 已接入CDN的域名列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 已配置证书的CDN域名列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.CertifiedDomains = null;

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
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.CertifiedDomains = 'CertifiedDomains' in params ? params.CertifiedDomains : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * bot配置类型
 * @class
 */
class ScdnBotConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * on|off
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Bot cookie策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BotCookie> || null}
         */
        this.BotCookie = null;

        /**
         * Bot Js策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BotJavaScript> || null}
         */
        this.BotJavaScript = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.BotCookie) {
            this.BotCookie = new Array();
            for (let z in params.BotCookie) {
                let obj = new BotCookie();
                obj.deserialize(params.BotCookie[z]);
                this.BotCookie.push(obj);
            }
        }

        if (params.BotJavaScript) {
            this.BotJavaScript = new Array();
            for (let z in params.BotJavaScript) {
                let obj = new BotJavaScript();
                obj.deserialize(params.BotJavaScript[z]);
                this.BotJavaScript.push(obj);
            }
        }

    }
}

/**
 * DuplicateDomainConfig请求参数结构体
 * @class
 */
class DuplicateDomainConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新增域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 被拷贝配置的域名
         * @type {string || null}
         */
        this.ReferenceDomain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.ReferenceDomain = 'ReferenceDomain' in params ? params.ReferenceDomain : null;

    }
}

/**
 * 时间戳防盗链模式 D 配置
时间戳防盗链模式 D 的访问 URL 格式为：http://DomainName/FileName?sign=md5hash&t=timestamp
其中 timestamp 为十进制或十六进制 UNIX 时间戳；
md5hash：MD5（自定义密钥 + 文件路径 + timestamp）
 * @class
 */
class AuthenticationTypeD extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算签名的密钥
仅允许大小写字母与数字，长度 6~32 位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * 签名过期时间设置
单位为秒，最大可设置为 630720000
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * 鉴权/不做鉴权的文件扩展名列表设置
如果包含字符 *  则表示所有文件
         * @type {Array.<string> || null}
         */
        this.FileExtensions = null;

        /**
         * whitelist：白名单，表示对除了 FileExtensions 列表之外的所有类型进行鉴权
blacklist：黑名单，表示仅对 FileExtensions 中的类型进行鉴权
         * @type {string || null}
         */
        this.FilterType = null;

        /**
         * 签名参数名设置
仅允许大小写字母、数字或下划线，长度 1~100 位，不能以数字开头
         * @type {string || null}
         */
        this.SignParam = null;

        /**
         * 时间戳参数名设置
仅允许大小写字母、数字或下划线，长度 1~100 位，不能以数字开头
         * @type {string || null}
         */
        this.TimeParam = null;

        /**
         * 时间戳进制设置
dec：十进制
hex：十六进制
         * @type {string || null}
         */
        this.TimeFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.FileExtensions = 'FileExtensions' in params ? params.FileExtensions : null;
        this.FilterType = 'FilterType' in params ? params.FilterType : null;
        this.SignParam = 'SignParam' in params ? params.SignParam : null;
        this.TimeParam = 'TimeParam' in params ? params.TimeParam : null;
        this.TimeFormat = 'TimeFormat' in params ? params.TimeFormat : null;

    }
}

/**
 * 时间戳防盗链模式 C 配置
时间戳防盗链模式 C 的访问 URL 格式为：http://DomainName/md5hash/timestamp/FileName
其中 timestamp 为十六进制 UNIX 时间戳；
md5hash：MD5（自定义密钥 + 文件路径 + timestamp）
 * @class
 */
class AuthenticationTypeC extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算签名的密钥
仅允许大小写字母与数字，长度 6~32 位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * 签名过期时间设置
单位为秒，最大可设置为 630720000
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * 鉴权/不做鉴权的文件扩展名列表设置
如果包含字符 *  则表示所有文件
         * @type {Array.<string> || null}
         */
        this.FileExtensions = null;

        /**
         * whitelist：白名单，表示对除了 FileExtensions 列表之外的所有类型进行鉴权
blacklist：黑名单，表示仅对 FileExtensions 中的类型进行鉴权
         * @type {string || null}
         */
        this.FilterType = null;

        /**
         * 时间戳进制设置
dec：十进制
hex：十六进制
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.FileExtensions = 'FileExtensions' in params ? params.FileExtensions : null;
        this.FilterType = 'FilterType' in params ? params.FilterType : null;
        this.TimeFormat = 'TimeFormat' in params ? params.TimeFormat : null;

    }
}

/**
 * 时间戳防盗链模式 B 配置（B 模式正在进行平台升级，暂不支持配置）
 * @class
 */
class AuthenticationTypeB extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算签名的密钥
仅允许大小写字母与数字，长度 6~32 位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * 签名过期时间设置
单位为秒，最大可设置为 630720000
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * 鉴权/不做鉴权的文件扩展名列表设置
如果包含字符 *  则表示所有文件
         * @type {Array.<string> || null}
         */
        this.FileExtensions = null;

        /**
         * whitelist：白名单，表示对除了 FileExtensions 列表之外的所有类型进行鉴权
blacklist：黑名单，表示仅对 FileExtensions 中的类型进行鉴权
         * @type {string || null}
         */
        this.FilterType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.FileExtensions = 'FileExtensions' in params ? params.FileExtensions : null;
        this.FilterType = 'FilterType' in params ? params.FilterType : null;

    }
}

/**
 * 时间戳防盗链模式 A 配置
时间戳防盗链模式 A 的访问 URL 格式为：http://DomainName/Filename?sign=timestamp-rand-uid-md5hash
其中 timestamp 为十进制 UNIX 时间戳；
rand 为随机字符串，0 ~ 100 位大小写字母与数字组成；
uid 为 0；
md5hash：MD5（文件路径-timestamp-rand-uid-自定义密钥）

 * @class
 */
class AuthenticationTypeA extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算签名的密钥
仅允许大小写字母与数字，长度 6~32 位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * 签名参数名设置
仅允许大小写字母、数字或下划线，长度 1~100 位，不能以数字开头
         * @type {string || null}
         */
        this.SignParam = null;

        /**
         * 签名过期时间设置
单位为秒，最大可设置为 630720000
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * 鉴权/不做鉴权的文件扩展名列表设置
如果包含字符 *  则表示所有文件
         * @type {Array.<string> || null}
         */
        this.FileExtensions = null;

        /**
         * whitelist：白名单，表示对除了 FileExtensions 列表之外的所有类型进行鉴权
blacklist：黑名单，表示仅对 FileExtensions 中的类型进行鉴权
         * @type {string || null}
         */
        this.FilterType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;
        this.SignParam = 'SignParam' in params ? params.SignParam : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.FileExtensions = 'FileExtensions' in params ? params.FileExtensions : null;
        this.FilterType = 'FilterType' in params ? params.FilterType : null;

    }
}

/**
 * 回源鉴权高级配置TypeA
 * @class
 */
class OriginAuthenticationTypeA extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于计算签名的密钥，只允许字母和数字，长度6-32字节。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SecretKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;

    }
}

/**
 * scdn相关的配置
 * @class
 */
class SecurityConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * on|off
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * DescribePushTasks返回参数结构体
 * @class
 */
class DescribePushTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 预热历史记录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PushTask> || null}
         */
        this.PushLogs = null;

        /**
         * 任务总数，用于分页
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.PushLogs) {
            this.PushLogs = new Array();
            for (let z in params.PushLogs) {
                let obj = new PushTask();
                obj.deserialize(params.PushLogs[z]);
                this.PushLogs.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 查询对象及其对应的回源明细数据
 * @class
 */
class ResourceOriginData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源名称，根据查询条件不同分为以下几类：
具体域名：表示该域名明细数据
multiDomains：表示多域名汇总明细数据
项目 ID：指定项目查询时，显示为项目 ID
all：账号维度明细数据
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * 回源数据详情
         * @type {Array.<CdnData> || null}
         */
        this.OriginData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;

        if (params.OriginData) {
            this.OriginData = new Array();
            for (let z in params.OriginData) {
                let obj = new CdnData();
                obj.deserialize(params.OriginData[z]);
                this.OriginData.push(obj);
            }
        }

    }
}

/**
 * 节点 IP 信息
 * @class
 */
class IpStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点 IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 节点所属区域
         * @type {string || null}
         */
        this.District = null;

        /**
         * 节点所属运营商
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * 节点所在城市
         * @type {string || null}
         */
        this.City = null;

        /**
         * 节点状态
online：上线状态，正常调度服务中
offline：下线状态
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
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.District = 'District' in params ? params.District : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.City = 'City' in params ? params.City : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * AddCdnDomain返回参数结构体
 * @class
 */
class AddCdnDomainResponse extends  AbstractModel {
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
 * ListScdnDomains返回参数结构体
 * @class
 */
class ListScdnDomainsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名列表信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ScdnDomain> || null}
         */
        this.DomainList = null;

        /**
         * 域名的总条数。
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.DomainList) {
            this.DomainList = new Array();
            for (let z in params.DomainList) {
                let obj = new ScdnDomain();
                obj.deserialize(params.DomainList[z]);
                this.DomainList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VerifyDomainRecord返回参数结构体
 * @class
 */
class VerifyDomainRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否验证成功
         * @type {boolean || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 域名地区配置
 * @class
 */
class DomainAreaConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 地区列表，其中元素可为mainland/overseas
         * @type {Array.<string> || null}
         */
        this.Area = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * ListScdnDomains请求参数结构体
 * @class
 */
class ListScdnDomainsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页起始地址
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 列表分页记录条数，最大1000
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 域名信息
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * https 加速服务端证书配置：
+ 支持使用托管至 SSL 证书管理的证书进行部署
+ 支持上传 PEM 格式的证书进行部署
注意：上传 PEM 证书时，需要进行 Base 64 编码
 * @class
 */
class ServerCert extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器证书 ID
在 SSL 证书管理进行证书托管时自动生成
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * 服务器证书名称
在 SSL 证书管理进行证书托管时自动生成
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertName = null;

        /**
         * 服务器证书信息
上传自有证书时必填，需要包含完整的证书链
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Certificate = null;

        /**
         * 服务器密钥信息
上传自有证书时必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PrivateKey = null;

        /**
         * 证书过期时间
作为入参配置时无需填充
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 证书颁发时间
作为入参配置时无需填充
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeployTime = null;

        /**
         * 证书备注信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.Certificate = 'Certificate' in params ? params.Certificate : null;
        this.PrivateKey = 'PrivateKey' in params ? params.PrivateKey : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.DeployTime = 'DeployTime' in params ? params.DeployTime : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * 访问控制规则
 * @class
 */
class AccessControlRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * requestHeader ：对请求头部进行访问控制
url ： 对访问url进行访问控制
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * 封禁内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleContent = null;

        /**
         * on ：正则匹配
off ：字面匹配
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Regex = null;

        /**
         * RuleType为requestHeader时必填，否则不需要填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleHeader = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.RuleContent = 'RuleContent' in params ? params.RuleContent : null;
        this.Regex = 'Regex' in params ? params.Regex : null;
        this.RuleHeader = 'RuleHeader' in params ? params.RuleHeader : null;

    }
}

/**
 * Http 头部设置规则，最多可设置 100 条
 * @class
 */
class HttpHeaderPathRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * http 头部设置方式
set：设置。变更指定头部参数的取值为设置后的值；若设置的头部不存在，则会增加该头部；若存在多个重复的头部参数，则会全部变更，同时合并为一个头部。
del：删除。删除指定的头部参数
add：增加。增加指定的头部参数，默认允许重复添加，即重复添加相同的头部（注：重复添加可能会影响浏览器响应，请优先使用set操作）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HeaderMode = null;

        /**
         * http 头部名称，最多可设置 100 个字符
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HeaderName = null;

        /**
         * http 头部值，最多可设置 1000 个字符
Mode 为 del 时非必填
Mode 为 add/set 时必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HeaderValue = null;

        /**
         * 规则类型：
all：所有文件生效
file：指定文件后缀生效
directory：指定路径生效
path：指定绝对路径生效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * RuleType 对应类型下的匹配内容：
all 时填充 *
file 时填充后缀名，如 jpg、txt
directory 时填充路径，如 /xxx/test/
path 时填充绝对路径，如 /xxx/test.html
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.RulePaths = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HeaderMode = 'HeaderMode' in params ? params.HeaderMode : null;
        this.HeaderName = 'HeaderName' in params ? params.HeaderName : null;
        this.HeaderValue = 'HeaderValue' in params ? params.HeaderValue : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.RulePaths = 'RulePaths' in params ? params.RulePaths : null;

    }
}

/**
 * CreateScdnLogTask请求参数结构体
 * @class
 */
class CreateScdnLogTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 防护类型
Mode 映射如下：
  waf = "Web攻击"
  cc = "CC攻击"
  bot = "Bot攻击"
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 查询起始时间，如：2018-09-04 10:40:00，返回结果大于等于指定时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间，如：2018-09-04 10:40:00，返回结果小于等于指定时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 指定域名查询, 不填默认查询全部域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 指定攻击类型, 不填默认查询全部攻击类型
AttackType 映射如下:
  other = '未知类型'
  malicious_scan = "恶意扫描"
  sql_inject = "SQL注入攻击"
  xss = "XSS攻击"
  cmd_inject = "命令注入攻击"
  ldap_inject = "LDAP注入攻击"
  ssi_inject = "SSI注入攻击"
  xml_inject = "XML注入攻击"
  web_service = "WEB服务漏洞攻击"
  web_app = "WEB应用漏洞攻击"
  path_traversal = "路径跨越攻击"
  illegal_access_core_file = "核心文件非法访问"
  trojan_horse = "木马后门攻击"
  csrf = "CSRF攻击"
  malicious_file_upload= '恶意文件上传'
  js = "JS主动探测"
  cookie = "Cookie指纹"
         * @type {string || null}
         */
        this.AttackType = null;

        /**
         * 指定执行动作, 不填默认查询全部执行动作
DefenceMode 映射如下：
  observe = '观察模式'
  intercept = '拦截模式'
  captcha = "验证码"
  redirect = "重定向"
         * @type {string || null}
         */
        this.DefenceMode = null;

        /**
         * 不填为全部ip
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 指定域名查询, 与 Domain 参数同时有值时使用 Domains 参数，不填默认查询全部域名，指定域名查询时最多支持同时选择 5 个域名查询
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 指定攻击类型查询, 与 AttackType 参数同时有值时使用 AttackTypes 参数，不填默认查询全部攻击类型
         * @type {Array.<string> || null}
         */
        this.AttackTypes = null;

        /**
         * 查询条件
         * @type {Array.<ScdnEventLogConditions> || null}
         */
        this.Conditions = null;

        /**
         * 来源产品 cdn ecdn
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 地域：mainland 或 overseas
         * @type {string || null}
         */
        this.Area = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.AttackType = 'AttackType' in params ? params.AttackType : null;
        this.DefenceMode = 'DefenceMode' in params ? params.DefenceMode : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.AttackTypes = 'AttackTypes' in params ? params.AttackTypes : null;

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new ScdnEventLogConditions();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }
        this.Source = 'Source' in params ? params.Source : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * 地区运营商明细数据
 * @class
 */
class DistrictIspInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 协议类型
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * IP协议类型
         * @type {string || null}
         */
        this.IpProtocol = null;

        /**
         * 起始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 时间间隔，单位为分钟
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * 指标名称
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * 地区ID
         * @type {number || null}
         */
        this.District = null;

        /**
         * 运营商ID
         * @type {number || null}
         */
        this.Isp = null;

        /**
         * 指标数据点
         * @type {Array.<number> || null}
         */
        this.DataPoints = null;

        /**
         * 地区名称
         * @type {string || null}
         */
        this.DistrictName = null;

        /**
         * 运营商名称
         * @type {string || null}
         */
        this.IspName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.IpProtocol = 'IpProtocol' in params ? params.IpProtocol : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.District = 'District' in params ? params.District : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.DataPoints = 'DataPoints' in params ? params.DataPoints : null;
        this.DistrictName = 'DistrictName' in params ? params.DistrictName : null;
        this.IspName = 'IspName' in params ? params.IspName : null;

    }
}

/**
 * 缓存过期规则配置
 * @class
 */
class SimpleCacheRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则类型：
all：所有文件生效
file：指定文件后缀生效
directory：指定路径生效
path：指定绝对路径生效
index：首页
         * @type {string || null}
         */
        this.CacheType = null;

        /**
         * CacheType 对应类型下的匹配内容：
all 时填充 *
file 时填充后缀名，如 jpg、txt
directory 时填充路径，如 /xxx/test
path 时填充绝对路径，如 /xxx/test.html
index 时填充 /
         * @type {Array.<string> || null}
         */
        this.CacheContents = null;

        /**
         * 缓存过期时间设置
单位为秒，最大可设置为 365 天
         * @type {number || null}
         */
        this.CacheTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CacheType = 'CacheType' in params ? params.CacheType : null;
        this.CacheContents = 'CacheContents' in params ? params.CacheContents : null;
        this.CacheTime = 'CacheTime' in params ? params.CacheTime : null;

    }
}

/**
 * DisableClsLogTopic返回参数结构体
 * @class
 */
class DisableClsLogTopicResponse extends  AbstractModel {
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
 * HSTS 配置。
 * @class
 */
class Hsts extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启，on或off。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * MaxAge数值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxAge = null;

        /**
         * 是否包含子域名，on或off。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IncludeSubDomains = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.MaxAge = 'MaxAge' in params ? params.MaxAge : null;
        this.IncludeSubDomains = 'IncludeSubDomains' in params ? params.IncludeSubDomains : null;

    }
}

/**
 * DescribeIpStatus请求参数结构体
 * @class
 */
class DescribeIpStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 加速域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 节点类型：
edge：表示边缘节点
last：表示回源层节点
不填充情况下，默认返回边缘节点信息
         * @type {string || null}
         */
        this.Layer = null;

        /**
         * 查询区域：
mainland: 国内节点
overseas: 海外节点
global: 全球节点
         * @type {string || null}
         */
        this.Area = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Layer = 'Layer' in params ? params.Layer : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * 加速域名全量配置信息
 * @class
 */
class DetailDomain extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名 ID
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 腾讯云账号ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 加速域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名对应的 CNAME 地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * 加速服务状态
rejected：域名审核未通过，域名备案过期/被注销导致
processing：部署中
online：已启动
offline：已关闭
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 项目 ID，可前往腾讯云项目管理页面查看
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 域名业务类型
web：静态加速
download：下载加速
media：流媒体点播加速
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * 域名创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 域名更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 源站配置
         * @type {Origin || null}
         */
        this.Origin = null;

        /**
         * IP 黑白名单配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IpFilter || null}
         */
        this.IpFilter = null;

        /**
         * IP 访问限频配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IpFreqLimit || null}
         */
        this.IpFreqLimit = null;

        /**
         * 状态码缓存配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {StatusCodeCache || null}
         */
        this.StatusCodeCache = null;

        /**
         * 智能压缩配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Compression || null}
         */
        this.Compression = null;

        /**
         * 带宽封顶配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BandwidthAlert || null}
         */
        this.BandwidthAlert = null;

        /**
         * Range 回源配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RangeOriginPull || null}
         */
        this.RangeOriginPull = null;

        /**
         * 301/302 回源自动跟随配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FollowRedirect || null}
         */
        this.FollowRedirect = null;

        /**
         * 自定义错误页面配置（功能灰度中，敬请期待）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ErrorPage || null}
         */
        this.ErrorPage = null;

        /**
         * 自定义请求头部配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RequestHeader || null}
         */
        this.RequestHeader = null;

        /**
         * 自定义响应头部配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ResponseHeader || null}
         */
        this.ResponseHeader = null;

        /**
         * 单链接下行限速配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DownstreamCapping || null}
         */
        this.DownstreamCapping = null;

        /**
         * 带参/不带参缓存配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CacheKey || null}
         */
        this.CacheKey = null;

        /**
         * 源站头部缓存配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ResponseHeaderCache || null}
         */
        this.ResponseHeaderCache = null;

        /**
         * 视频拖拽配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {VideoSeek || null}
         */
        this.VideoSeek = null;

        /**
         * 节点缓存过期规则配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Cache || null}
         */
        this.Cache = null;

        /**
         * 跨国链路优化配置（功能灰度中，敬请期待）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OriginPullOptimization || null}
         */
        this.OriginPullOptimization = null;

        /**
         * Https 加速相关配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Https || null}
         */
        this.Https = null;

        /**
         * 时间戳防盗链配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Authentication || null}
         */
        this.Authentication = null;

        /**
         * SEO 优化配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Seo || null}
         */
        this.Seo = null;

        /**
         * 域名封禁状态
normal：正常状态
overdue：账号欠费导致域名关闭，充值完成后可自行启动加速服务
malicious：域名出现恶意行为，强制关闭加速服务
ddos：域名被大规模 DDoS 攻击，关闭加速服务
idle：域名超过 90 天内无任何操作、数据产生，判定为不活跃域名自动关闭加速服务，可自行启动加速服务
unlicensed：域名未备案/备案注销，自动关闭加速服务，备案完成后可自行启动加速服务
capping：触发配置的带宽阈值上限
readonly：域名存在特殊配置，被锁定
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Disable = null;

        /**
         * 访问协议强制跳转配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ForceRedirect || null}
         */
        this.ForceRedirect = null;

        /**
         * Referer 防盗链配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Referer || null}
         */
        this.Referer = null;

        /**
         * 浏览器缓存过期规则配置（功能灰度中，敬请期待）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MaxAge || null}
         */
        this.MaxAge = null;

        /**
         * Ipv6 回源配置（功能灰度中，敬请期待）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Ipv6 || null}
         */
        this.Ipv6 = null;

        /**
         * 是否兼容旧版本配置（内部兼容性字段）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Compatibility || null}
         */
        this.Compatibility = null;

        /**
         * 区域特殊配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SpecificConfig || null}
         */
        this.SpecificConfig = null;

        /**
         * 加速区域
mainland：中国境内加速
overseas：中国境外加速
global：全球加速
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 域名锁定状态
normal：未锁定
mainland：中国境内锁定
overseas：中国境外锁定
global：全球锁定
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Readonly = null;

        /**
         * 回源超时配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OriginPullTimeout || null}
         */
        this.OriginPullTimeout = null;

        /**
         * 回源S3鉴权配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AwsPrivateAccess || null}
         */
        this.AwsPrivateAccess = null;

        /**
         * Scdn配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SecurityConfig || null}
         */
        this.SecurityConfig = null;

        /**
         * ImageOptimization配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ImageOptimization || null}
         */
        this.ImageOptimization = null;

        /**
         * UA黑白名单配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {UserAgentFilter || null}
         */
        this.UserAgentFilter = null;

        /**
         * 访问控制
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AccessControl || null}
         */
        this.AccessControl = null;

        /**
         * 是否支持高级配置项
on：支持
off：不支持
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Advance = null;

        /**
         * URL重定向配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {UrlRedirect || null}
         */
        this.UrlRedirect = null;

        /**
         * 访问端口配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.AccessPort = null;

        /**
         * 标签配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tag = null;

        /**
         * 时间戳防盗链高级配置，白名单功能
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AdvancedAuthentication || null}
         */
        this.AdvancedAuthentication = null;

        /**
         * 回源鉴权高级配置，白名单功能
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OriginAuthentication || null}
         */
        this.OriginAuthentication = null;

        /**
         * Ipv6访问配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Ipv6Access || null}
         */
        this.Ipv6Access = null;

        /**
         * 高级配置集合。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AdvanceConfig> || null}
         */
        this.AdvanceSet = null;

        /**
         * 离线缓存
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OfflineCache || null}
         */
        this.OfflineCache = null;

        /**
         * 合并回源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OriginCombine || null}
         */
        this.OriginCombine = null;

        /**
         * POST上传配置项
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PostSize || null}
         */
        this.PostMaxSize = null;

        /**
         * Quic配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Quic || null}
         */
        this.Quic = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }

        if (params.IpFilter) {
            let obj = new IpFilter();
            obj.deserialize(params.IpFilter)
            this.IpFilter = obj;
        }

        if (params.IpFreqLimit) {
            let obj = new IpFreqLimit();
            obj.deserialize(params.IpFreqLimit)
            this.IpFreqLimit = obj;
        }

        if (params.StatusCodeCache) {
            let obj = new StatusCodeCache();
            obj.deserialize(params.StatusCodeCache)
            this.StatusCodeCache = obj;
        }

        if (params.Compression) {
            let obj = new Compression();
            obj.deserialize(params.Compression)
            this.Compression = obj;
        }

        if (params.BandwidthAlert) {
            let obj = new BandwidthAlert();
            obj.deserialize(params.BandwidthAlert)
            this.BandwidthAlert = obj;
        }

        if (params.RangeOriginPull) {
            let obj = new RangeOriginPull();
            obj.deserialize(params.RangeOriginPull)
            this.RangeOriginPull = obj;
        }

        if (params.FollowRedirect) {
            let obj = new FollowRedirect();
            obj.deserialize(params.FollowRedirect)
            this.FollowRedirect = obj;
        }

        if (params.ErrorPage) {
            let obj = new ErrorPage();
            obj.deserialize(params.ErrorPage)
            this.ErrorPage = obj;
        }

        if (params.RequestHeader) {
            let obj = new RequestHeader();
            obj.deserialize(params.RequestHeader)
            this.RequestHeader = obj;
        }

        if (params.ResponseHeader) {
            let obj = new ResponseHeader();
            obj.deserialize(params.ResponseHeader)
            this.ResponseHeader = obj;
        }

        if (params.DownstreamCapping) {
            let obj = new DownstreamCapping();
            obj.deserialize(params.DownstreamCapping)
            this.DownstreamCapping = obj;
        }

        if (params.CacheKey) {
            let obj = new CacheKey();
            obj.deserialize(params.CacheKey)
            this.CacheKey = obj;
        }

        if (params.ResponseHeaderCache) {
            let obj = new ResponseHeaderCache();
            obj.deserialize(params.ResponseHeaderCache)
            this.ResponseHeaderCache = obj;
        }

        if (params.VideoSeek) {
            let obj = new VideoSeek();
            obj.deserialize(params.VideoSeek)
            this.VideoSeek = obj;
        }

        if (params.Cache) {
            let obj = new Cache();
            obj.deserialize(params.Cache)
            this.Cache = obj;
        }

        if (params.OriginPullOptimization) {
            let obj = new OriginPullOptimization();
            obj.deserialize(params.OriginPullOptimization)
            this.OriginPullOptimization = obj;
        }

        if (params.Https) {
            let obj = new Https();
            obj.deserialize(params.Https)
            this.Https = obj;
        }

        if (params.Authentication) {
            let obj = new Authentication();
            obj.deserialize(params.Authentication)
            this.Authentication = obj;
        }

        if (params.Seo) {
            let obj = new Seo();
            obj.deserialize(params.Seo)
            this.Seo = obj;
        }
        this.Disable = 'Disable' in params ? params.Disable : null;

        if (params.ForceRedirect) {
            let obj = new ForceRedirect();
            obj.deserialize(params.ForceRedirect)
            this.ForceRedirect = obj;
        }

        if (params.Referer) {
            let obj = new Referer();
            obj.deserialize(params.Referer)
            this.Referer = obj;
        }

        if (params.MaxAge) {
            let obj = new MaxAge();
            obj.deserialize(params.MaxAge)
            this.MaxAge = obj;
        }

        if (params.Ipv6) {
            let obj = new Ipv6();
            obj.deserialize(params.Ipv6)
            this.Ipv6 = obj;
        }

        if (params.Compatibility) {
            let obj = new Compatibility();
            obj.deserialize(params.Compatibility)
            this.Compatibility = obj;
        }

        if (params.SpecificConfig) {
            let obj = new SpecificConfig();
            obj.deserialize(params.SpecificConfig)
            this.SpecificConfig = obj;
        }
        this.Area = 'Area' in params ? params.Area : null;
        this.Readonly = 'Readonly' in params ? params.Readonly : null;

        if (params.OriginPullTimeout) {
            let obj = new OriginPullTimeout();
            obj.deserialize(params.OriginPullTimeout)
            this.OriginPullTimeout = obj;
        }

        if (params.AwsPrivateAccess) {
            let obj = new AwsPrivateAccess();
            obj.deserialize(params.AwsPrivateAccess)
            this.AwsPrivateAccess = obj;
        }

        if (params.SecurityConfig) {
            let obj = new SecurityConfig();
            obj.deserialize(params.SecurityConfig)
            this.SecurityConfig = obj;
        }

        if (params.ImageOptimization) {
            let obj = new ImageOptimization();
            obj.deserialize(params.ImageOptimization)
            this.ImageOptimization = obj;
        }

        if (params.UserAgentFilter) {
            let obj = new UserAgentFilter();
            obj.deserialize(params.UserAgentFilter)
            this.UserAgentFilter = obj;
        }

        if (params.AccessControl) {
            let obj = new AccessControl();
            obj.deserialize(params.AccessControl)
            this.AccessControl = obj;
        }
        this.Advance = 'Advance' in params ? params.Advance : null;

        if (params.UrlRedirect) {
            let obj = new UrlRedirect();
            obj.deserialize(params.UrlRedirect)
            this.UrlRedirect = obj;
        }
        this.AccessPort = 'AccessPort' in params ? params.AccessPort : null;

        if (params.Tag) {
            this.Tag = new Array();
            for (let z in params.Tag) {
                let obj = new Tag();
                obj.deserialize(params.Tag[z]);
                this.Tag.push(obj);
            }
        }

        if (params.AdvancedAuthentication) {
            let obj = new AdvancedAuthentication();
            obj.deserialize(params.AdvancedAuthentication)
            this.AdvancedAuthentication = obj;
        }

        if (params.OriginAuthentication) {
            let obj = new OriginAuthentication();
            obj.deserialize(params.OriginAuthentication)
            this.OriginAuthentication = obj;
        }

        if (params.Ipv6Access) {
            let obj = new Ipv6Access();
            obj.deserialize(params.Ipv6Access)
            this.Ipv6Access = obj;
        }

        if (params.AdvanceSet) {
            this.AdvanceSet = new Array();
            for (let z in params.AdvanceSet) {
                let obj = new AdvanceConfig();
                obj.deserialize(params.AdvanceSet[z]);
                this.AdvanceSet.push(obj);
            }
        }

        if (params.OfflineCache) {
            let obj = new OfflineCache();
            obj.deserialize(params.OfflineCache)
            this.OfflineCache = obj;
        }

        if (params.OriginCombine) {
            let obj = new OriginCombine();
            obj.deserialize(params.OriginCombine)
            this.OriginCombine = obj;
        }

        if (params.PostMaxSize) {
            let obj = new PostSize();
            obj.deserialize(params.PostMaxSize)
            this.PostMaxSize = obj;
        }

        if (params.Quic) {
            let obj = new Quic();
            obj.deserialize(params.Quic)
            this.Quic = obj;
        }

    }
}

/**
 * GetDisableRecords返回参数结构体
 * @class
 */
class GetDisableRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 封禁历史记录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UrlRecord> || null}
         */
        this.UrlRecordList = null;

        /**
         * 任务总数，用于分页
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.UrlRecordList) {
            this.UrlRecordList = new Array();
            for (let z in params.UrlRecordList) {
                let obj = new UrlRecord();
                obj.deserialize(params.UrlRecordList[z]);
                this.UrlRecordList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Ipv6访问配置
 * @class
 */
class Ipv6Access extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名是否开启ipv6访问功能，on或off。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * 自定义响应头配置，默认为关闭状态
 * @class
 */
class ResponseHeader extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义响应头开关
on：开启
off：关闭
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 自定义响应头规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<HttpHeaderPathRule> || null}
         */
        this.HeaderRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.HeaderRules) {
            this.HeaderRules = new Array();
            for (let z in params.HeaderRules) {
                let obj = new HttpHeaderPathRule();
                obj.deserialize(params.HeaderRules[z]);
                this.HeaderRules.push(obj);
            }
        }

    }
}

/**
 * DuplicateDomainConfig返回参数结构体
 * @class
 */
class DuplicateDomainConfigResponse extends  AbstractModel {
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
 * CDN 节点上下线历史记录
 * @class
 */
class CdnIpHistory extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作类型
online：节点上线
offline：节点下线
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 操作类型对应的操作时间
当该值为 null 时表示无历史状态变更记录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Datetime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Datetime = 'Datetime' in params ? params.Datetime : null;

    }
}

/**
 * 明细数据的汇总值，各指标根据其特性不同拥有不同汇总方式
 * @class
 */
class SummarizedData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 汇总方式，存在以下几种：
sum：累加求和
max：最大值，带宽模式下，采用 5 分钟粒度汇总数据，计算峰值带宽
avg：平均值
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 汇总后的数据值
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
 * UpdateScdnDomain请求参数结构体
 * @class
 */
class UpdateScdnDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Web 攻击防护（WAF）配置
         * @type {ScdnWafConfig || null}
         */
        this.Waf = null;

        /**
         * 自定义防护策略配置
         * @type {ScdnAclConfig || null}
         */
        this.Acl = null;

        /**
         * CC 防护配置，目前 CC 防护默认开启
         * @type {ScdnConfig || null}
         */
        this.CC = null;

        /**
         * DDOS 防护配置，目前 DDoS 防护默认开启
         * @type {ScdnDdosConfig || null}
         */
        this.Ddos = null;

        /**
         * BOT 防护配置
         * @type {ScdnBotConfig || null}
         */
        this.Bot = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

        if (params.Waf) {
            let obj = new ScdnWafConfig();
            obj.deserialize(params.Waf)
            this.Waf = obj;
        }

        if (params.Acl) {
            let obj = new ScdnAclConfig();
            obj.deserialize(params.Acl)
            this.Acl = obj;
        }

        if (params.CC) {
            let obj = new ScdnConfig();
            obj.deserialize(params.CC)
            this.CC = obj;
        }

        if (params.Ddos) {
            let obj = new ScdnDdosConfig();
            obj.deserialize(params.Ddos)
            this.Ddos = obj;
        }

        if (params.Bot) {
            let obj = new ScdnBotConfig();
            obj.deserialize(params.Bot)
            this.Bot = obj;
        }

    }
}

/**
 * UpdatePayType请求参数结构体
 * @class
 */
class UpdatePayTypeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计费区域，mainland或overseas。
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 计费类型，flux或bandwidth。
         * @type {string || null}
         */
        this.PayType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Area = 'Area' in params ? params.Area : null;
        this.PayType = 'PayType' in params ? params.PayType : null;

    }
}

/**
 * ManageClsTopicDomains请求参数结构体
 * @class
 */
class ManageClsTopicDomainsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志集ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * 日志主题ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 接入渠道，默认值为cdn
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * 域名区域配置，注意：如果此字段为空，则表示解绑对应主题下的所有域名
         * @type {Array.<DomainAreaConfig> || null}
         */
        this.DomainAreaConfigs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Channel = 'Channel' in params ? params.Channel : null;

        if (params.DomainAreaConfigs) {
            this.DomainAreaConfigs = new Array();
            for (let z in params.DomainAreaConfigs) {
                let obj = new DomainAreaConfig();
                obj.deserialize(params.DomainAreaConfigs[z]);
                this.DomainAreaConfigs.push(obj);
            }
        }

    }
}

/**
 * ListDiagnoseReport请求参数结构体
 * @class
 */
class ListDiagnoseReportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于搜索诊断URL的关键字，不填时返回用户所有的诊断任务。
         * @type {string || null}
         */
        this.KeyWords = null;

        /**
         * 用于搜索诊断系统返回的诊断链接，形如：http://cdn.cloud.tencent.com/self_diagnose/xxxxx
         * @type {string || null}
         */
        this.DiagnoseLink = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyWords = 'KeyWords' in params ? params.KeyWords : null;
        this.DiagnoseLink = 'DiagnoseLink' in params ? params.DiagnoseLink : null;

    }
}

/**
 * waf配置类型
 * @class
 */
class ScdnWafConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * on|off
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * intercept|observe，默认intercept
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 重定向的错误页面
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ScdnErrorPage || null}
         */
        this.ErrorPage = null;

        /**
         * webshell拦截开关，on|off，默认off
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WebShellSwitch = null;

        /**
         * 类型拦截规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ScdnWafRule> || null}
         */
        this.Rules = null;

        /**
         * waf规则等级，可取100|200|300
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Level = null;

        /**
         * waf子规则开关
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<WafSubRuleStatus> || null}
         */
        this.SubRuleSwitch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Mode = 'Mode' in params ? params.Mode : null;

        if (params.ErrorPage) {
            let obj = new ScdnErrorPage();
            obj.deserialize(params.ErrorPage)
            this.ErrorPage = obj;
        }
        this.WebShellSwitch = 'WebShellSwitch' in params ? params.WebShellSwitch : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new ScdnWafRule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.Level = 'Level' in params ? params.Level : null;

        if (params.SubRuleSwitch) {
            this.SubRuleSwitch = new Array();
            for (let z in params.SubRuleSwitch) {
                let obj = new WafSubRuleStatus();
                obj.deserialize(params.SubRuleSwitch[z]);
                this.SubRuleSwitch.push(obj);
            }
        }

    }
}

/**
 * CreateScdnFailedLogTask请求参数结构体
 * @class
 */
class CreateScdnFailedLogTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 重试失败任务的taskID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 地域：mainland或overseas
         * @type {string || null}
         */
        this.Area = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * 节点缓存过期时间配置，分为以下两种：
+ 基础版缓存过期规则配置
+ 高级版缓存过期规则配置
 * @class
 */
class Cache extends  AbstractModel {
    constructor(){
        super();

        /**
         * 基础缓存过期时间配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SimpleCache || null}
         */
        this.SimpleCache = null;

        /**
         * 高级缓存过期时间配置（功能灰度中，尚未全量）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AdvancedCache || null}
         */
        this.AdvancedCache = null;

        /**
         * 高级路径缓存配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RuleCache> || null}
         */
        this.RuleCache = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SimpleCache) {
            let obj = new SimpleCache();
            obj.deserialize(params.SimpleCache)
            this.SimpleCache = obj;
        }

        if (params.AdvancedCache) {
            let obj = new AdvancedCache();
            obj.deserialize(params.AdvancedCache)
            this.AdvancedCache = obj;
        }

        if (params.RuleCache) {
            this.RuleCache = new Array();
            for (let z in params.RuleCache) {
                let obj = new RuleCache();
                obj.deserialize(params.RuleCache[z]);
                this.RuleCache.push(obj);
            }
        }

    }
}

/**
 * 诊断报告内容数据
 * @class
 */
class DiagnoseData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 诊断报告内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DiagnoseUnit> || null}
         */
        this.Data = null;

        /**
         * 当前诊断项是否正常。
"ok"：正常
"error"：异常
"warning"："警告"
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new DiagnoseUnit();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeOriginData请求参数结构体
 * @class
 */
class DescribeOriginDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询起始时间，如：2018-09-04 10:40:00，返回结果大于等于指定时间
根据指定时间粒度不同，会进行向前归整，如 2018-09-04 10:40:00 在按 1 小时的时间粒度查询时，返回的第一个数据对应时间点为 2018-09-04 10:00:00
起始时间与结束时间间隔小于等于 90 天
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间，如：2018-09-04 10:40:00，返回结果小于等于指定时间
根据指定时间粒度不同，会进行向前归整，如 2018-09-04 10:40:00 在按 1 小时的时间粒度查询时，返回的最后一个数据对应时间点为 2018-09-04 10:00:00
起始时间与结束时间间隔小于等于 90 天
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 指定查询指标，支持的类型有：
flux：回源流量，单位为 byte
bandwidth：回源带宽，单位为 bps
request：回源请求数，单位为 次
failRequest：回源失败请求数，单位为 次
failRate：回源失败率，单位为 %
statusCode：回源状态码，返回 2xx、3xx、4xx、5xx 汇总数据，单位为 个
2xx：返回 2xx 回源状态码汇总及各 2 开头回源状态码数据，单位为 个
3xx：返回 3xx 回源状态码汇总及各 3 开头回源状态码数据，单位为 个
4xx：返回 4xx 回源状态码汇总及各 4 开头回源状态码数据，单位为 个
5xx：返回 5xx 回源状态码汇总及各 5 开头回源状态码数据，单位为 个
支持指定具体状态码查询，若未产生过，则返回为空
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * 指定查询域名列表，最多可一次性查询 30 个加速域名明细
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 指定要查询的项目 ID，[前往查看项目 ID](https://console.cloud.tencent.com/project)
未填充域名情况下，指定项目查询，最多可一次性查询 30 个加速域名明细
若填充了具体域名信息，以域名为主
         * @type {number || null}
         */
        this.Project = null;

        /**
         * 时间粒度，支持以下几种模式：
min：1 分钟粒度，指定查询区间 24 小时内（含 24 小时），可返回 1 分钟粒度明细数据（指定查询服务地域为中国境外时不支持 1 分钟粒度）
5min：5 分钟粒度，指定查询区间 31 天内（含 31 天），可返回 5 分钟粒度明细数据
hour：1 小时粒度，指定查询区间 31 天内（含 31 天），可返回 1 小时粒度明细数据
day：天粒度，指定查询区间大于 31 天，可返回天粒度明细数据
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * Domains 传入多个时，默认（false)返回多个域名的汇总数据
可按需指定为 true，返回每一个 Domain 的明细数据（statusCode 指标暂不支持）
         * @type {boolean || null}
         */
        this.Detail = null;

        /**
         * 指定服务地域查询，不填充表示查询中国境内 CDN 数据
mainland：指定查询中国境内 CDN 数据
overseas：指定查询中国境外 CDN 数据
         * @type {string || null}
         */
        this.Area = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Project = 'Project' in params ? params.Project : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Detail = 'Detail' in params ? params.Detail : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * 分片回源配置，默认为开启状态
 * @class
 */
class RangeOriginPull extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分片回源配置开关
on：开启
off：关闭
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * ListScdnLogTasks请求参数结构体
 * @class
 */
class ListScdnLogTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品来源 cdn/ecdn
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 地域：mainland 或 overseas 为空表示查询所有地域
         * @type {string || null}
         */
        this.Area = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Source = 'Source' in params ? params.Source : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * SearchClsLog返回参数结构体
 * @class
 */
class SearchClsLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询结果
         * @type {ClsSearchLogs || null}
         */
        this.Logs = null;

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

        if (params.Logs) {
            let obj = new ClsSearchLogs();
            obj.deserialize(params.Logs)
            this.Logs = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 分路径回源规则
 * @class
 */
class PathBasedOriginRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则类型：
file：指定文件后缀生效
directory：指定路径生效
path：指定绝对路径生效
index: 指定主页生效
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * RuleType 对应类型下的匹配内容：
file 时填充后缀名，如 jpg、txt
directory 时填充路径，如 /xxx/test/
path 时填充绝对路径，如 /xxx/test.html
index 时填充 /
         * @type {Array.<string> || null}
         */
        this.RulePaths = null;

        /**
         * 源站列表，支持域名或ipv4地址
         * @type {Array.<string> || null}
         */
        this.Origin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.RulePaths = 'RulePaths' in params ? params.RulePaths : null;
        this.Origin = 'Origin' in params ? params.Origin : null;

    }
}

/**
 * PushUrlsCache请求参数结构体
 * @class
 */
class PushUrlsCacheRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * URL 列表，需要包含协议头部 http:// 或 https://
         * @type {Array.<string> || null}
         */
        this.Urls = null;

        /**
         * 指定预热请求回源时 HTTP 请求的 User-Agent 头部
默认为 TencentCdn
         * @type {string || null}
         */
        this.UserAgent = null;

        /**
         * 预热生效区域
mainland：预热至境内节点
overseas：预热至境外节点
global：预热全球节点
不填充情况下，默认为 mainland， URL 中域名必须在对应区域启用了加速服务才能提交对应区域的预热任务
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 填写"middle"或不填充时预热至中间层节点
         * @type {string || null}
         */
        this.Layer = null;

        /**
         * 是否递归解析m3u8文件中的ts分片预热
注意事项：
1. 该功能要求m3u8索引文件能直接请求获取
2. 当前只支持递归解析一级索引和子索引中的ts分片，递归深度不超过3层
3. 解析获取的ts分片会正常累加每日预热用量，当用量超出配额时，会静默处理，不再执行预热
         * @type {boolean || null}
         */
        this.ParseM3U8 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Urls = 'Urls' in params ? params.Urls : null;
        this.UserAgent = 'UserAgent' in params ? params.UserAgent : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Layer = 'Layer' in params ? params.Layer : null;
        this.ParseM3U8 = 'ParseM3U8' in params ? params.ParseM3U8 : null;

    }
}

/**
 * 域名国内地区特殊配置。分地区特殊配置。UpdateDomainConfig接口只支持修改部分分地区配置，为了兼容旧版本配置，本类型会列出旧版本所有可能存在差异的配置列表，支持修改的配置列表如下：
+ Authentication
+ BandwidthAlert
+ ErrorPage
+ IpFilter
+ Origin
+ Referer
 * @class
 */
class MainlandConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间戳防盗链配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Authentication || null}
         */
        this.Authentication = null;

        /**
         * 带宽封顶配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BandwidthAlert || null}
         */
        this.BandwidthAlert = null;

        /**
         * 缓存规则配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Cache || null}
         */
        this.Cache = null;

        /**
         * 缓存相关配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CacheKey || null}
         */
        this.CacheKey = null;

        /**
         * 智能压缩配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Compression || null}
         */
        this.Compression = null;

        /**
         * 下载限速配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DownstreamCapping || null}
         */
        this.DownstreamCapping = null;

        /**
         * 错误码重定向配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ErrorPage || null}
         */
        this.ErrorPage = null;

        /**
         * 301和302自动回源跟随配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FollowRedirect || null}
         */
        this.FollowRedirect = null;

        /**
         * 访问协议强制跳转配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ForceRedirect || null}
         */
        this.ForceRedirect = null;

        /**
         * Https配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Https || null}
         */
        this.Https = null;

        /**
         * IP黑白名单配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IpFilter || null}
         */
        this.IpFilter = null;

        /**
         * IP限频配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IpFreqLimit || null}
         */
        this.IpFreqLimit = null;

        /**
         * 浏览器缓存规则配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MaxAge || null}
         */
        this.MaxAge = null;

        /**
         * 源站配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Origin || null}
         */
        this.Origin = null;

        /**
         * 跨国优化配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OriginPullOptimization || null}
         */
        this.OriginPullOptimization = null;

        /**
         * Range回源配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RangeOriginPull || null}
         */
        this.RangeOriginPull = null;

        /**
         * 防盗链配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Referer || null}
         */
        this.Referer = null;

        /**
         * 回源请求头部配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RequestHeader || null}
         */
        this.RequestHeader = null;

        /**
         * 源站响应头部配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ResponseHeader || null}
         */
        this.ResponseHeader = null;

        /**
         * 遵循源站缓存头部配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ResponseHeaderCache || null}
         */
        this.ResponseHeaderCache = null;

        /**
         * seo优化配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Seo || null}
         */
        this.Seo = null;

        /**
         * 域名业务类型，web，download，media分别表示静态加速，下载加速和流媒体加速。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * 状态码缓存配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {StatusCodeCache || null}
         */
        this.StatusCodeCache = null;

        /**
         * 视频拖拽配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {VideoSeek || null}
         */
        this.VideoSeek = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Authentication) {
            let obj = new Authentication();
            obj.deserialize(params.Authentication)
            this.Authentication = obj;
        }

        if (params.BandwidthAlert) {
            let obj = new BandwidthAlert();
            obj.deserialize(params.BandwidthAlert)
            this.BandwidthAlert = obj;
        }

        if (params.Cache) {
            let obj = new Cache();
            obj.deserialize(params.Cache)
            this.Cache = obj;
        }

        if (params.CacheKey) {
            let obj = new CacheKey();
            obj.deserialize(params.CacheKey)
            this.CacheKey = obj;
        }

        if (params.Compression) {
            let obj = new Compression();
            obj.deserialize(params.Compression)
            this.Compression = obj;
        }

        if (params.DownstreamCapping) {
            let obj = new DownstreamCapping();
            obj.deserialize(params.DownstreamCapping)
            this.DownstreamCapping = obj;
        }

        if (params.ErrorPage) {
            let obj = new ErrorPage();
            obj.deserialize(params.ErrorPage)
            this.ErrorPage = obj;
        }

        if (params.FollowRedirect) {
            let obj = new FollowRedirect();
            obj.deserialize(params.FollowRedirect)
            this.FollowRedirect = obj;
        }

        if (params.ForceRedirect) {
            let obj = new ForceRedirect();
            obj.deserialize(params.ForceRedirect)
            this.ForceRedirect = obj;
        }

        if (params.Https) {
            let obj = new Https();
            obj.deserialize(params.Https)
            this.Https = obj;
        }

        if (params.IpFilter) {
            let obj = new IpFilter();
            obj.deserialize(params.IpFilter)
            this.IpFilter = obj;
        }

        if (params.IpFreqLimit) {
            let obj = new IpFreqLimit();
            obj.deserialize(params.IpFreqLimit)
            this.IpFreqLimit = obj;
        }

        if (params.MaxAge) {
            let obj = new MaxAge();
            obj.deserialize(params.MaxAge)
            this.MaxAge = obj;
        }

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }

        if (params.OriginPullOptimization) {
            let obj = new OriginPullOptimization();
            obj.deserialize(params.OriginPullOptimization)
            this.OriginPullOptimization = obj;
        }

        if (params.RangeOriginPull) {
            let obj = new RangeOriginPull();
            obj.deserialize(params.RangeOriginPull)
            this.RangeOriginPull = obj;
        }

        if (params.Referer) {
            let obj = new Referer();
            obj.deserialize(params.Referer)
            this.Referer = obj;
        }

        if (params.RequestHeader) {
            let obj = new RequestHeader();
            obj.deserialize(params.RequestHeader)
            this.RequestHeader = obj;
        }

        if (params.ResponseHeader) {
            let obj = new ResponseHeader();
            obj.deserialize(params.ResponseHeader)
            this.ResponseHeader = obj;
        }

        if (params.ResponseHeaderCache) {
            let obj = new ResponseHeaderCache();
            obj.deserialize(params.ResponseHeaderCache)
            this.ResponseHeaderCache = obj;
        }

        if (params.Seo) {
            let obj = new Seo();
            obj.deserialize(params.Seo)
            this.Seo = obj;
        }
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;

        if (params.StatusCodeCache) {
            let obj = new StatusCodeCache();
            obj.deserialize(params.StatusCodeCache)
            this.StatusCodeCache = obj;
        }

        if (params.VideoSeek) {
            let obj = new VideoSeek();
            obj.deserialize(params.VideoSeek)
            this.VideoSeek = obj;
        }

    }
}

/**
 * DescribeReportData请求参数结构体
 * @class
 */
class DescribeReportDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询起始时间：yyyy-MM-dd
当报表类型为daily，起始时间和结束时间必须为同一天
当报表类型为weekly，起始时间须为周一，结束时间须为同一周的周日
当报表类型为monthly，起始时间须为自然月第一天，即1号，结束时间须为该自然月最后一天
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间：yyyy-MM-dd
当报表类型为daily，起始时间和结束时间必须为同一天
当报表类型为weekly，起始时间须为周一，结束时间须为同一周的周日
当报表类型为monthly，起始时间须为自然月第一天，即1号，结束时间须为该自然月最后一天
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 报表类型
daily：日报表
weekly：周报表（周一至周日）
monthly：月报表（自然月）
         * @type {string || null}
         */
        this.ReportType = null;

        /**
         * 域名加速区域
mainland：中国境内
overseas：中国境外
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 偏移量，默认0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 数据个数，默认1000。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 按项目ID筛选
         * @type {number || null}
         */
        this.Project = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ReportType = 'ReportType' in params ? params.ReportType : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Project = 'Project' in params ? params.Project : null;

    }
}

/**
 * DescribePushTasks请求参数结构体
 * @class
 */
class DescribePushTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间，如2018-08-08 00:00:00。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，如2018-08-08 23:59:59。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 指定任务 ID 查询
TaskId 和起始时间必须指定一项
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 查询关键字，请输入域名或 http(s):// 开头完整 URL
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * 分页查询偏移量，默认为 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页查询限制数目，默认为 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 指定地区查询预热纪录
mainland：境内
overseas：境外
global：全球
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 指定任务状态查询
fail：预热失败
done：预热成功
process：预热中
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeScdnTopData请求参数结构体
 * @class
 */
class DescribeScdnTopDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询起始时间，如：2018-09-04 10:40:00，返回结果大于等于指定时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间，如：2018-09-04 10:40:00，返回结果小于等于指定时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 查询的SCDN TOP攻击数据类型：
waf：Web 攻击防护TOP数据
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 排序对象，支持以下几种形式：
url：攻击目标 url 排序
ip：攻击源 IP 排序
attackType：攻击类型排序
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * 排序使用的指标名称：
request：请求次数
         * @type {string || null}
         */
        this.Filter = null;

        /**
         * 指定域名查询
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 指定攻击类型, 仅 Mode=waf 时有效
不填则查询所有攻击类型的数据总和
AttackType 映射如下:
  other = '未知类型'
  malicious_scan = "恶意扫描"
  sql_inject = "SQL注入攻击"
  xss = "XSS攻击"
  cmd_inject = "命令注入攻击"
  ldap_inject = "LDAP注入攻击"
  ssi_inject = "SSI注入攻击"
  xml_inject = "XML注入攻击"
  web_service = "WEB服务漏洞攻击"
  web_app = "WEB应用漏洞攻击"
  path_traversal = "路径跨越攻击"
  illegal_access_core_file = "核心文件非法访问"
  trojan_horse = "木马后门攻击"
  csrf = "CSRF攻击"
  malicious_file_upload= '恶意文件上传'
         * @type {string || null}
         */
        this.AttackType = null;

        /**
         * 指定防御模式,仅 Mode=waf 时有效
不填则查询所有防御模式的数据总和
DefenceMode 映射如下：
  observe = '观察模式'
  intercept = '拦截模式'
         * @type {string || null}
         */
        this.DefenceMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.Filter = 'Filter' in params ? params.Filter : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.AttackType = 'AttackType' in params ? params.AttackType : null;
        this.DefenceMode = 'DefenceMode' in params ? params.DefenceMode : null;

    }
}

/**
 * DescribeUrlViolations请求参数结构体
 * @class
 */
class DescribeUrlViolationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页查询偏移量，默认为 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页查询限制数目，默认为 100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 指定的域名查询
         * @type {Array.<string> || null}
         */
        this.Domains = null;

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
        this.Domains = 'Domains' in params ? params.Domains : null;

    }
}

/**
 * Referer 黑白名单配置规则，针对特定资源生效
 * @class
 */
class RefererRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则类型：
all：所有文件生效
file：指定文件后缀生效
directory：指定路径生效
path：指定绝对路径生效
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * RuleType 对应类型下的匹配内容：
all 时填充 *
file 时填充后缀名，如 jpg、txt
directory 时填充路径，如 /xxx/test/
path 时填充绝对路径，如 /xxx/test.html
         * @type {Array.<string> || null}
         */
        this.RulePaths = null;

        /**
         * referer 配置类型
whitelist：白名单
blacklist：黑名单
         * @type {string || null}
         */
        this.RefererType = null;

        /**
         * referer 内容列表列表
         * @type {Array.<string> || null}
         */
        this.Referers = null;

        /**
         * 是否允许空 referer
true：允许空 referer
false：不允许空 referer
         * @type {boolean || null}
         */
        this.AllowEmpty = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.RulePaths = 'RulePaths' in params ? params.RulePaths : null;
        this.RefererType = 'RefererType' in params ? params.RefererType : null;
        this.Referers = 'Referers' in params ? params.Referers : null;
        this.AllowEmpty = 'AllowEmpty' in params ? params.AllowEmpty : null;

    }
}

/**
 * scdn 的自定义 cc 规则
 * @class
 */
class ScdnCCRules extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则类型：
all：所有文件生效
file：指定文件后缀生效
directory：指定路径生效
path：指定绝对路径生效
index：首页
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * 规则值
         * @type {Array.<string> || null}
         */
        this.RuleValue = null;

        /**
         * 规则限频
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * 探测时长
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DetectionTime = null;

        /**
         * 限频阈值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FrequencyLimit = null;

        /**
         * IP 惩罚开关，可选on|off
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PunishmentSwitch = null;

        /**
         * IP 惩罚时长
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PunishmentTime = null;

        /**
         * 执行动作，intercept|redirect
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 动作为 redirect 时，重定向的url
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RedirectUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.RuleValue = 'RuleValue' in params ? params.RuleValue : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.DetectionTime = 'DetectionTime' in params ? params.DetectionTime : null;
        this.FrequencyLimit = 'FrequencyLimit' in params ? params.FrequencyLimit : null;
        this.PunishmentSwitch = 'PunishmentSwitch' in params ? params.PunishmentSwitch : null;
        this.PunishmentTime = 'PunishmentTime' in params ? params.PunishmentTime : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.RedirectUrl = 'RedirectUrl' in params ? params.RedirectUrl : null;

    }
}

/**
 * 单节点单 IP 访问限频配置，默认为关闭状态 
 * @class
 */
class IpFreqLimit extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP 限频配置开关
on：开启
off：关闭
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 设置每秒请求数限制
超出限制的请求会直接返回 514
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Qps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Qps = 'Qps' in params ? params.Qps : null;

    }
}

/**
 * ddos配置类型
 * @class
 */
class ScdnDdosConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * on|off
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * CreateDiagnoseUrl返回参数结构体
 * @class
 */
class CreateDiagnoseUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 系统生成的诊断链接，一个诊断链接最多可访问10次，有效期为24h。
         * @type {string || null}
         */
        this.DiagnoseLink = null;

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
        this.DiagnoseLink = 'DiagnoseLink' in params ? params.DiagnoseLink : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateClsLogTopic请求参数结构体
 * @class
 */
class CreateClsLogTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志主题名称
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 日志集ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * 接入渠道，默认值为cdn
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * 域名区域信息
         * @type {Array.<DomainAreaConfig> || null}
         */
        this.DomainAreaConfigs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.Channel = 'Channel' in params ? params.Channel : null;

        if (params.DomainAreaConfigs) {
            this.DomainAreaConfigs = new Array();
            for (let z in params.DomainAreaConfigs) {
                let obj = new DomainAreaConfig();
                obj.deserialize(params.DomainAreaConfigs[z]);
                this.DomainAreaConfigs.push(obj);
            }
        }

    }
}

/**
 * 违规资源封禁/解封返回类型
 * @class
 */
class CacheOptResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功的url列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SuccessUrls = null;

        /**
         * 失败的url列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.FailUrls = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SuccessUrls = 'SuccessUrls' in params ? params.SuccessUrls : null;
        this.FailUrls = 'FailUrls' in params ? params.FailUrls : null;

    }
}

/**
 * CreateVerifyRecord返回参数结构体
 * @class
 */
class CreateVerifyRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子解析
         * @type {string || null}
         */
        this.SubDomain = null;

        /**
         * 解析值
         * @type {string || null}
         */
        this.Record = null;

        /**
         * 解析类型
         * @type {string || null}
         */
        this.RecordType = null;

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
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;
        this.Record = 'Record' in params ? params.Record : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopCdnDomain请求参数结构体
 * @class
 */
class StopCdnDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
域名需要为【已启动】状态
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
 * DescribeMapInfo返回参数结构体
 * @class
 */
class DescribeMapInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 映射关系数组。
         * @type {Array.<MapInfo> || null}
         */
        this.MapInfoList = null;

        /**
         * 服务端区域id和子区域id的映射关系。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RegionMapRelation> || null}
         */
        this.ServerRegionRelation = null;

        /**
         * 客户端区域id和子区域id的映射关系。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RegionMapRelation> || null}
         */
        this.ClientRegionRelation = null;

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

        if (params.MapInfoList) {
            this.MapInfoList = new Array();
            for (let z in params.MapInfoList) {
                let obj = new MapInfo();
                obj.deserialize(params.MapInfoList[z]);
                this.MapInfoList.push(obj);
            }
        }

        if (params.ServerRegionRelation) {
            this.ServerRegionRelation = new Array();
            for (let z in params.ServerRegionRelation) {
                let obj = new RegionMapRelation();
                obj.deserialize(params.ServerRegionRelation[z]);
                this.ServerRegionRelation.push(obj);
            }
        }

        if (params.ClientRegionRelation) {
            this.ClientRegionRelation = new Array();
            for (let z in params.ClientRegionRelation) {
                let obj = new RegionMapRelation();
                obj.deserialize(params.ClientRegionRelation[z]);
                this.ClientRegionRelation.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTrafficPackages返回参数结构体
 * @class
 */
class DescribeTrafficPackagesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流量包总个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 流量包详情
         * @type {Array.<TrafficPackage> || null}
         */
        this.TrafficPackages = null;

        /**
         * 即将过期的流量包个数（7天内）
         * @type {number || null}
         */
        this.ExpiringCount = null;

        /**
         * 有效流量包个数
         * @type {number || null}
         */
        this.EnabledCount = null;

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

        if (params.TrafficPackages) {
            this.TrafficPackages = new Array();
            for (let z in params.TrafficPackages) {
                let obj = new TrafficPackage();
                obj.deserialize(params.TrafficPackages[z]);
                this.TrafficPackages.push(obj);
            }
        }
        this.ExpiringCount = 'ExpiringCount' in params ? params.ExpiringCount : null;
        this.EnabledCount = 'EnabledCount' in params ? params.EnabledCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMapInfo请求参数结构体
 * @class
 */
class DescribeMapInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 映射查询类别：
isp：运营商映射查询
district：省份（中国境内）、国家/地区（中国境外）映射查询
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * EnableCaches返回参数结构体
 * @class
 */
class EnableCachesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CacheOptResult || null}
         */
        this.CacheOptResult = null;

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

        if (params.CacheOptResult) {
            let obj = new CacheOptResult();
            obj.deserialize(params.CacheOptResult)
            this.CacheOptResult = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 路径保留参数配置
 * @class
 */
class RuleQueryString extends  AbstractModel {
    constructor(){
        super();

        /**
         * on | off CacheKey是否由QueryString组成
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * includeCustom 包含部分url参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 使用/排除的url参数数组，';' 分割
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
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeIpVisit请求参数结构体
 * @class
 */
class DescribeIpVisitRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询起始时间，如：2018-09-04 10:40:10，返回结果大于等于指定时间
根据指定时间粒度不同，会进行向前归整，如 2018-09-04 10:40:10 在按 5 分钟的时间粒度查询时，返回的第一个数据对应时间点为 2018-09-04 10:40:00
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间，如：2018-09-04 10:40:10，返回结果小于等于指定时间
根据指定时间粒度不同，会进行向前归整，如 2018-09-04 10:40:10 在按 5 分钟的时间粒度查询时，返回的最后一个数据对应时间点为 2018-09-04 10:40:00
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 指定查询域名列表，最多可一次性查询 30 个加速域名明细
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 指定要查询的项目 ID，[前往查看项目 ID](https://console.cloud.tencent.com/project)
未填充域名情况下，指定项目查询，若填充了具体域名信息，以域名为主
         * @type {number || null}
         */
        this.Project = null;

        /**
         * 时间粒度，支持以下几种模式：
5min：5 分钟粒度，查询时间区间 24 小时内，默认返回 5 分钟粒度活跃用户数
day：天粒度，查询时间区间大于 1 天时，默认返回天粒度活跃用户数
         * @type {string || null}
         */
        this.Interval = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Project = 'Project' in params ? params.Project : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

    }
}

/**
 * http头部设置规则。
 * @class
 */
class HttpHeaderRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * http头部设置方式，支持add，set或del，分别表示新增，设置或删除头部。
         * @type {string || null}
         */
        this.HeaderMode = null;

        /**
         * http头部名称。
         * @type {string || null}
         */
        this.HeaderName = null;

        /**
         * http头部值。
         * @type {string || null}
         */
        this.HeaderValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HeaderMode = 'HeaderMode' in params ? params.HeaderMode : null;
        this.HeaderName = 'HeaderName' in params ? params.HeaderName : null;
        this.HeaderValue = 'HeaderValue' in params ? params.HeaderValue : null;

    }
}

/**
 * 状态码缓存过期时间规则配置
 * @class
 */
class StatusCodeCacheRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * http 状态码
支持 403、404 状态码
         * @type {string || null}
         */
        this.StatusCode = null;

        /**
         * 状态码缓存过期时间，单位秒
         * @type {number || null}
         */
        this.CacheTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;
        this.CacheTime = 'CacheTime' in params ? params.CacheTime : null;

    }
}

/**
 * https 客户端证书配置
 * @class
 */
class ClientCert extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户端证书
PEM 格式，需要进行 Base 64 编码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Certificate = null;

        /**
         * 客户端证书名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertName = null;

        /**
         * 证书过期时间
作为入参时无需填充
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 证书颁发时间
作为入参时无需填充
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeployTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Certificate = 'Certificate' in params ? params.Certificate : null;
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.DeployTime = 'DeployTime' in params ? params.DeployTime : null;

    }
}

/**
 * SCDN攻击数据Top展示
 * @class
 */
class ScdnTopData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 数值
         * @type {number || null}
         */
        this.Value = null;

        /**
         * 运营商
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * IP地址
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 区域
         * @type {string || null}
         */
        this.District = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.District = 'District' in params ? params.District : null;

    }
}

/**
 * cc的配置类型
 * @class
 */
class ScdnConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * on | off
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 自定义 cc 防护规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ScdnCCRules> || null}
         */
        this.Rules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new ScdnCCRules();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }

    }
}

/**
 * 日志包下载链接详情
 * @class
 */
class DomainLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志包起始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 日志包结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 日志包下载链接
         * @type {string || null}
         */
        this.LogPath = null;

        /**
         * 日志包对应加速区域
mainland：境内
overseas：境外
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 日志包文件名
         * @type {string || null}
         */
        this.LogName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.LogPath = 'LogPath' in params ? params.LogPath : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.LogName = 'LogName' in params ? params.LogName : null;

    }
}

/**
 * GetDisableRecords请求参数结构体
 * @class
 */
class GetDisableRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间，如：2018-12-12 10:24:00。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，如：2018-12-14 10:24:00。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 指定 URL 查询
         * @type {string || null}
         */
        this.Url = null;

        /**
         * URL 当前状态
disable：当前仍为禁用状态，访问返回 403
enable：当前为可用状态，已解禁，可正常访问
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 分页查询偏移量，默认为 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页查询限制数目，默认为20。
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CreateDiagnoseUrl请求参数结构体
 * @class
 */
class CreateDiagnoseUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需诊断的url，形如：http://www.test.com/test.txt。
         * @type {string || null}
         */
        this.Url = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * PurgeUrlsCache返回参数结构体
 * @class
 */
class PurgeUrlsCacheResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 刷新任务 ID，同一批次提交的 URL 共用一个任务 ID
         * @type {string || null}
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
 * StartScdnDomain返回参数结构体
 * @class
 */
class StartScdnDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开启结果，Success表示成功
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Bot js策略
 * @class
 */
class BotJavaScript extends  AbstractModel {
    constructor(){
        super();

        /**
         * on|off
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 规则类型，当前只有file
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * 规则值，['html', 'htm']
         * @type {Array.<string> || null}
         */
        this.RuleValue = null;

        /**
         * 执行动作，monitor|intercept|redirect|captcha
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 重定向时设置的重定向页面
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RedirectUrl = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.RuleValue = 'RuleValue' in params ? params.RuleValue : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.RedirectUrl = 'RedirectUrl' in params ? params.RedirectUrl : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DeleteClsLogTopic返回参数结构体
 * @class
 */
class DeleteClsLogTopicResponse extends  AbstractModel {
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
 * DescribeBillingData返回参数结构体
 * @class
 */
class DescribeBillingDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间粒度，根据查询时传递参数指定：
min：1 分钟粒度
5min：5 分钟粒度
hour：1 小时粒度
day：天粒度
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * 数据明细
         * @type {Array.<ResourceBillingData> || null}
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
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ResourceBillingData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisableCaches返回参数结构体
 * @class
 */
class DisableCachesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 提交结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CacheOptResult || null}
         */
        this.CacheOptResult = null;

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

        if (params.CacheOptResult) {
            let obj = new CacheOptResult();
            obj.deserialize(params.CacheOptResult)
            this.CacheOptResult = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 作为CacheKey的一部分
 * @class
 */
class SchemeKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * on | off 是否使用scheme作为cache key的一部分
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * DescribeImageConfig请求参数结构体
 * @class
 */
class DescribeImageConfigRequest extends  AbstractModel {
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
 * DescribeCdnIp返回参数结构体
 * @class
 */
class DescribeCdnIpResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询的节点归属详情。
         * @type {Array.<CdnIp> || null}
         */
        this.Ips = null;

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

        if (params.Ips) {
            this.Ips = new Array();
            for (let z in params.Ips) {
                let obj = new CdnIp();
                obj.deserialize(params.Ips[z]);
                this.Ips.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 缓存配置高级版本规则
 * @class
 */
class AdvanceCacheRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则类型：
all：所有文件生效
file：指定文件后缀生效
directory：指定路径生效
path：指定绝对路径生效
default：源站未返回 max-age 情况下的缓存规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CacheType = null;

        /**
         * 对应类型下的匹配内容：
all 时填充 *
file 时填充后缀名，如 jpg、txt
directory 时填充路径，如 /xxx/test/
path 时填充绝对路径，如 /xxx/test.html
default 时填充 "no max-age"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.CacheContents = null;

        /**
         * 缓存过期时间
单位为秒，最大可设置为 365 天
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CacheTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CacheType = 'CacheType' in params ? params.CacheType : null;
        this.CacheContents = 'CacheContents' in params ? params.CacheContents : null;
        this.CacheTime = 'CacheTime' in params ? params.CacheTime : null;

    }
}

/**
 * DescribeIpStatus返回参数结构体
 * @class
 */
class DescribeIpStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点列表
         * @type {Array.<IpStatus> || null}
         */
        this.Ips = null;

        /**
         * 节点总个数
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

        if (params.Ips) {
            this.Ips = new Array();
            for (let z in params.Ips) {
                let obj = new IpStatus();
                obj.deserialize(params.Ips[z]);
                this.Ips.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDistrictIspData请求参数结构体
 * @class
 */
class DescribeDistrictIspDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名列表，最多支持20个域名
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 查询起始时间，如：2018-09-04 10:40:00，返回结果大于等于指定时间
支持近 60 天内的数据查询，每次查询时间区间为 3 小时
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间，如：2018-09-04 10:40:00，返回结果小于等于指定时间
结束时间与起始时间区间最大为 3 小时
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 指定查询指标，支持:
bandwidth：带宽，单位为 bps
request：请求数，单位为 次
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * 指定省份查询，不填充表示查询所有省份
省份、国家/地区编码可以查看 [省份编码映射](https://cloud.tencent.com/document/product/228/6316#.E5.8C.BA.E5.9F.9F-.2F-.E8.BF.90.E8.90.A5.E5.95.86.E6.98.A0.E5.B0.84.E8.A1.A8)
         * @type {Array.<number> || null}
         */
        this.Districts = null;

        /**
         * 指定运营商查询，不填充表示查询所有运营商
运营商编码可以查看 [运营商编码映射](https://cloud.tencent.com/document/product/228/6316#.E5.8C.BA.E5.9F.9F-.2F-.E8.BF.90.E8.90.A5.E5.95.86.E6.98.A0.E5.B0.84.E8.A1.A8)
         * @type {Array.<number> || null}
         */
        this.Isps = null;

        /**
         * 指定协议查询，不填充表示查询所有协议
all：所有协议
http：指定查询 HTTP 对应指标
https：指定查询 HTTPS 对应指标
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 指定IP协议查询，不填充表示查询所有协议
all：所有协议
ipv4：指定查询 ipv4 对应指标
ipv6：指定查询 ipv6 对应指标
指定IP协议查询时，不可同时指定省份、运营商查询
         * @type {string || null}
         */
        this.IpProtocol = null;

        /**
         * 时间粒度，支持以下几种模式（默认5min）：
min：1 分钟粒度，支持近 60 天内的数据查询，每次查询时间区间不超过10分钟，可返回 1 分钟粒度明细数据
5min：5 分钟粒度，支持近 60 天内的数据查询，每次查询时间区间不超过3 小时，可返回 5 分钟粒度明细数据
         * @type {string || null}
         */
        this.Interval = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.Districts = 'Districts' in params ? params.Districts : null;
        this.Isps = 'Isps' in params ? params.Isps : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.IpProtocol = 'IpProtocol' in params ? params.IpProtocol : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

    }
}

/**
 * ListScdnLogTasks返回参数结构体
 * @class
 */
class ListScdnLogTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志下载任务详情
         * @type {Array.<ScdnLogTaskDetail> || null}
         */
        this.TaskList = null;

        /**
         * 查询到的下载任务的总数
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

        if (params.TaskList) {
            this.TaskList = new Array();
            for (let z in params.TaskList) {
                let obj = new ScdnLogTaskDetail();
                obj.deserialize(params.TaskList[z]);
                this.TaskList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * acl的错误页面
 * @class
 */
class ScdnErrorPage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态码
         * @type {number || null}
         */
        this.RedirectCode = null;

        /**
         * 重定向url
         * @type {string || null}
         */
        this.RedirectUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RedirectCode = 'RedirectCode' in params ? params.RedirectCode : null;
        this.RedirectUrl = 'RedirectUrl' in params ? params.RedirectUrl : null;

    }
}

/**
 * 缓存键配置（过滤参数配置）
 * @class
 */
class CacheKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启全路径缓存
on：开启全路径缓存（即关闭参数过滤）
off：关闭全路径缓存（即开启参数过滤）
         * @type {string || null}
         */
        this.FullUrlCache = null;

        /**
         * 是否忽略大小写缓存
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IgnoreCase = null;

        /**
         * CacheKey中包含请求参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {QueryStringKey || null}
         */
        this.QueryString = null;

        /**
         * CacheKey中包含Cookie
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CookieKey || null}
         */
        this.Cookie = null;

        /**
         * CacheKey中包含请求头部
注意：此字段可能返回 null，表示取不到有效值。
         * @type {HeaderKey || null}
         */
        this.Header = null;

        /**
         * CacheKey中包含自定义字符串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CacheTagKey || null}
         */
        this.CacheTag = null;

        /**
         * CacheKey中包含请求协议
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SchemeKey || null}
         */
        this.Scheme = null;

        /**
         * 分路径缓存键配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<KeyRule> || null}
         */
        this.KeyRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FullUrlCache = 'FullUrlCache' in params ? params.FullUrlCache : null;
        this.IgnoreCase = 'IgnoreCase' in params ? params.IgnoreCase : null;

        if (params.QueryString) {
            let obj = new QueryStringKey();
            obj.deserialize(params.QueryString)
            this.QueryString = obj;
        }

        if (params.Cookie) {
            let obj = new CookieKey();
            obj.deserialize(params.Cookie)
            this.Cookie = obj;
        }

        if (params.Header) {
            let obj = new HeaderKey();
            obj.deserialize(params.Header)
            this.Header = obj;
        }

        if (params.CacheTag) {
            let obj = new CacheTagKey();
            obj.deserialize(params.CacheTag)
            this.CacheTag = obj;
        }

        if (params.Scheme) {
            let obj = new SchemeKey();
            obj.deserialize(params.Scheme)
            this.Scheme = obj;
        }

        if (params.KeyRules) {
            this.KeyRules = new Array();
            for (let z in params.KeyRules) {
                let obj = new KeyRule();
                obj.deserialize(params.KeyRules[z]);
                this.KeyRules.push(obj);
            }
        }

    }
}

/**
 * URL重定向配置
 * @class
 */
class UrlRedirect extends  AbstractModel {
    constructor(){
        super();

        /**
         * URL重定向配置开关
on：开启
off：关闭
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * URL重定向规则，当Switch为on时必填，规则数量最大为10个。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UrlRedirectRule> || null}
         */
        this.PathRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.PathRules) {
            this.PathRules = new Array();
            for (let z in params.PathRules) {
                let obj = new UrlRedirectRule();
                obj.deserialize(params.PathRules[z]);
                this.PathRules.push(obj);
            }
        }

    }
}

/**
 * 单链接下行限速配置，默认为关闭状态
 * @class
 */
class DownstreamCapping extends  AbstractModel {
    constructor(){
        super();

        /**
         * 下行速度配置开关
on：开启
off：关闭
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 下行限速规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CappingRule> || null}
         */
        this.CappingRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.CappingRules) {
            this.CappingRules = new Array();
            for (let z in params.CappingRules) {
                let obj = new CappingRule();
                obj.deserialize(params.CappingRules[z]);
                this.CappingRules.push(obj);
            }
        }

    }
}

/**
 * 组成CacheKey的一部分
 * @class
 */
class CookieKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * on | off 是否使用Cookie作为Cache的一部分
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 使用的cookie，';' 分割
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
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * StopScdnDomain返回参数结构体
 * @class
 */
class StopScdnDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 关闭结果，Success表示成功
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * VerifyDomainRecord请求参数结构体
 * @class
 */
class VerifyDomainRecordRequest extends  AbstractModel {
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
 * 缓存键分路径配置
 * @class
 */
class KeyRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * CacheType 对应类型下的匹配内容：
file 时填充后缀名，如 jpg、txt
directory 时填充路径，如 /xxx/test
path 时填充绝对路径，如 /xxx/test.html
index 时填充 /
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.RulePaths = null;

        /**
         * 规则类型：
file：指定文件后缀生效
directory：指定路径生效
path：指定绝对路径生效
index：首页
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * 是否开启全路径缓存
on：开启全路径缓存（即关闭参数过滤）
off：关闭全路径缓存（即开启参数过滤）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FullUrlCache = null;

        /**
         * 是否忽略大小写缓存
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IgnoreCase = null;

        /**
         * CacheKey中包含请求参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleQueryString || null}
         */
        this.QueryString = null;

        /**
         * 路径缓存键标签，传 user
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleTag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RulePaths = 'RulePaths' in params ? params.RulePaths : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.FullUrlCache = 'FullUrlCache' in params ? params.FullUrlCache : null;
        this.IgnoreCase = 'IgnoreCase' in params ? params.IgnoreCase : null;

        if (params.QueryString) {
            let obj = new RuleQueryString();
            obj.deserialize(params.QueryString)
            this.QueryString = obj;
        }
        this.RuleTag = 'RuleTag' in params ? params.RuleTag : null;

    }
}

/**
 * 下行限速配置规则，最多可配置 100 条
 * @class
 */
class CappingRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则类型：
all：所有文件生效
file：指定文件后缀生效
directory：指定路径生效
path：指定绝对路径生效
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * RuleType 对应类型下的匹配内容： 
all 时填充 *
file 时填充后缀名，如 jpg、txt
directory 时填充路径，如 /xxx/test/
path 时填充绝对路径，如 /xxx/test.html
         * @type {Array.<string> || null}
         */
        this.RulePaths = null;

        /**
         * 下行速度值设置，单位为 KB/s
         * @type {number || null}
         */
        this.KBpsThreshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.RulePaths = 'RulePaths' in params ? params.RulePaths : null;
        this.KBpsThreshold = 'KBpsThreshold' in params ? params.KBpsThreshold : null;

    }
}

/**
 * DeleteScdnDomain返回参数结构体
 * @class
 */
class DeleteScdnDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建结果，Success表示成功
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListClsLogTopics请求参数结构体
 * @class
 */
class ListClsLogTopicsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接入渠道，默认值为cdn
         * @type {string || null}
         */
        this.Channel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Channel = 'Channel' in params ? params.Channel : null;

    }
}

/**
 * SEO 搜索引擎优化配置，默认为关闭状态
 * @class
 */
class Seo extends  AbstractModel {
    constructor(){
        super();

        /**
         * SEO 配置开关
on：开启
off：关闭
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * 带宽封顶配置，默认为关闭状态
 * @class
 */
class BandwidthAlert extends  AbstractModel {
    constructor(){
        super();

        /**
         * 带宽封顶配置开关
on：开启
off：关闭
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 带宽封顶阈值，单位为bps
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BpsThreshold = null;

        /**
         * 达到阈值后的操作
RESOLVE_DNS_TO_ORIGIN：直接回源，仅自有源站域名支持
RETURN_404：全部请求返回 404
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CounterMeasure = null;

        /**
         * 上次触发带宽封顶阈值的时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastTriggerTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BpsThreshold = 'BpsThreshold' in params ? params.BpsThreshold : null;
        this.CounterMeasure = 'CounterMeasure' in params ? params.CounterMeasure : null;
        this.LastTriggerTime = 'LastTriggerTime' in params ? params.LastTriggerTime : null;

    }
}

/**
 * CreateVerifyRecord请求参数结构体
 * @class
 */
class CreateVerifyRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要取回的域名
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
 * CLS日志搜索对象
 * @class
 */
class ClsLogObject extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 主题名字
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 日志时间
         * @type {string || null}
         */
        this.Timestamp = null;

        /**
         * 日志内容
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 采集路径
         * @type {string || null}
         */
        this.Filename = null;

        /**
         * 日志来源设备
         * @type {string || null}
         */
        this.Source = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Filename = 'Filename' in params ? params.Filename : null;
        this.Source = 'Source' in params ? params.Source : null;

    }
}

/**
 * 区域映射id和子区域id的关联信息。
 * @class
 */
class RegionMapRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 区域ID。
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 子区域ID列表
         * @type {Array.<number> || null}
         */
        this.SubRegionIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.SubRegionIdList = 'SubRegionIdList' in params ? params.SubRegionIdList : null;

    }
}

/**
 * PurgePathCache请求参数结构体
 * @class
 */
class PurgePathCacheRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目录列表，需要包含协议头部 http:// 或 https://
         * @type {Array.<string> || null}
         */
        this.Paths = null;

        /**
         * 刷新类型
flush：刷新产生更新的资源
delete：刷新全部资源
         * @type {string || null}
         */
        this.FlushType = null;

        /**
         * 是否对中文字符进行编码后刷新
         * @type {boolean || null}
         */
        this.UrlEncode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Paths = 'Paths' in params ? params.Paths : null;
        this.FlushType = 'FlushType' in params ? params.FlushType : null;
        this.UrlEncode = 'UrlEncode' in params ? params.UrlEncode : null;

    }
}

/**
 * DescribeDiagnoseReport返回参数结构体
 * @class
 */
class DescribeDiagnoseReportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 诊断报告基础信息
         * @type {DiagnoseData || null}
         */
        this.BaskInfo = null;

        /**
         * CNAME检测信息
         * @type {DiagnoseData || null}
         */
        this.CnameInfo = null;

        /**
         * 客户端检测信息
         * @type {DiagnoseData || null}
         */
        this.ClientInfo = null;

        /**
         * DNS检测信息
         * @type {DiagnoseData || null}
         */
        this.DnsInfo = null;

        /**
         * 网络检测信息
         * @type {DiagnoseData || null}
         */
        this.NetworkInfo = null;

        /**
         * 边缘节点检测信息
         * @type {DiagnoseData || null}
         */
        this.OcNodeInfo = null;

        /**
         * 中间源节点检测信息
         * @type {DiagnoseData || null}
         */
        this.MidNodeInfo = null;

        /**
         * 源站检测信息
         * @type {DiagnoseData || null}
         */
        this.OriginInfo = null;

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

        if (params.BaskInfo) {
            let obj = new DiagnoseData();
            obj.deserialize(params.BaskInfo)
            this.BaskInfo = obj;
        }

        if (params.CnameInfo) {
            let obj = new DiagnoseData();
            obj.deserialize(params.CnameInfo)
            this.CnameInfo = obj;
        }

        if (params.ClientInfo) {
            let obj = new DiagnoseData();
            obj.deserialize(params.ClientInfo)
            this.ClientInfo = obj;
        }

        if (params.DnsInfo) {
            let obj = new DiagnoseData();
            obj.deserialize(params.DnsInfo)
            this.DnsInfo = obj;
        }

        if (params.NetworkInfo) {
            let obj = new DiagnoseData();
            obj.deserialize(params.NetworkInfo)
            this.NetworkInfo = obj;
        }

        if (params.OcNodeInfo) {
            let obj = new DiagnoseData();
            obj.deserialize(params.OcNodeInfo)
            this.OcNodeInfo = obj;
        }

        if (params.MidNodeInfo) {
            let obj = new DiagnoseData();
            obj.deserialize(params.MidNodeInfo)
            this.MidNodeInfo = obj;
        }

        if (params.OriginInfo) {
            let obj = new DiagnoseData();
            obj.deserialize(params.OriginInfo)
            this.OriginInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateScdnFailedLogTask返回参数结构体
 * @class
 */
class CreateScdnFailedLogTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建结果, 
"0" -> 创建成功
         * @type {string || null}
         */
        this.Result = null;

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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 访问明细数据类型
 * @class
 */
class CdnData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询指定的指标名称：
flux：流量，单位为 byte
bandwidth：带宽，单位为 bps
request：请求数，单位为 次
fluxHitRate：流量命中率，单位为 %
statusCode：状态码，返回 2XX、3XX、4XX、5XX 汇总数据，单位为 个
2XX：返回 2XX 状态码汇总及各 2 开头状态码数据，单位为 个
3XX：返回 3XX 状态码汇总及各 3 开头状态码数据，单位为 个
4XX：返回 4XX 状态码汇总及各 4 开头状态码数据，单位为 个
5XX：返回 5XX 状态码汇总及各 5 开头状态码数据，单位为 个
或指定查询的某一具体状态码
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * 明细数据组合
         * @type {Array.<TimestampData> || null}
         */
        this.DetailData = null;

        /**
         * 汇总数据组合
         * @type {SummarizedData || null}
         */
        this.SummarizedData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Metric = 'Metric' in params ? params.Metric : null;

        if (params.DetailData) {
            this.DetailData = new Array();
            for (let z in params.DetailData) {
                let obj = new TimestampData();
                obj.deserialize(params.DetailData[z]);
                this.DetailData.push(obj);
            }
        }

        if (params.SummarizedData) {
            let obj = new SummarizedData();
            obj.deserialize(params.SummarizedData)
            this.SummarizedData = obj;
        }

    }
}

/**
 * PurgeUrlsCache请求参数结构体
 * @class
 */
class PurgeUrlsCacheRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * URL 列表，需要包含协议头部 http:// 或 https://
         * @type {Array.<string> || null}
         */
        this.Urls = null;

        /**
         * 刷新区域
无此参数时，默认刷新加速域名所在加速区域
填充 mainland 时，仅刷新中国境内加速节点上缓存内容
填充 overseas 时，仅刷新中国境外加速节点上缓存内容
指定刷新区域时，需要与域名加速区域匹配
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 是否对中文字符进行编码后刷新
         * @type {boolean || null}
         */
        this.UrlEncode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Urls = 'Urls' in params ? params.Urls : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.UrlEncode = 'UrlEncode' in params ? params.UrlEncode : null;

    }
}

/**
 * StartCdnDomain请求参数结构体
 * @class
 */
class StartCdnDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
域名状态需要为【已停用】
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
 * 跨国回源优化配置，默认为关闭状态（功能灰度中，尚未全量）
 * @class
 */
class OriginPullOptimization extends  AbstractModel {
    constructor(){
        super();

        /**
         * 跨国回源优化配置开关
on：开启
off：关闭
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 跨国类型
OVToCN：境外回源境内
CNToOV：境内回源境外
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OptimizationType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.OptimizationType = 'OptimizationType' in params ? params.OptimizationType : null;

    }
}

/**
 * 状态码重定向配置，默认为关闭状态（功能灰度中，尚未全量）
 * @class
 */
class ErrorPage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态码重定向配置开关
on：开启
off：关闭
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 状态码重定向规则配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ErrorPageRule> || null}
         */
        this.PageRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.PageRules) {
            this.PageRules = new Array();
            for (let z in params.PageRules) {
                let obj = new ErrorPageRule();
                obj.deserialize(params.PageRules[z]);
                this.PageRules.push(obj);
            }
        }

    }
}

/**
 * 预热任务详情
 * @class
 */
class PushTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 预热任务 ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 预热 URL
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 预热任务状态
fail：预热失败
done：预热成功
process：预热中
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 预热进度百分比
         * @type {number || null}
         */
        this.Percent = null;

        /**
         * 预热任务提交时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 预热区域
mainland：境内
overseas：境外
global：全球
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 预热任务更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Percent = 'Percent' in params ? params.Percent : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * CreateEdgePackTask返回参数结构体
 * @class
 */
class CreateEdgePackTaskResponse extends  AbstractModel {
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
 * CDN报表数据
 * @class
 */
class ReportData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID/域名ID。
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 项目名称/域名。
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * 流量总和/带宽最大值，单位分别为bytes，bps。
         * @type {number || null}
         */
        this.Value = null;

        /**
         * 单个资源占总体百分比。
         * @type {number || null}
         */
        this.Percentage = null;

        /**
         * 计费流量总和/计费带宽最大值，单位分别为bytes，bps。
         * @type {number || null}
         */
        this.BillingValue = null;

        /**
         * 计费数值占总体百分比。
         * @type {number || null}
         */
        this.BillingPercentage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.Resource = 'Resource' in params ? params.Resource : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Percentage = 'Percentage' in params ? params.Percentage : null;
        this.BillingValue = 'BillingValue' in params ? params.BillingValue : null;
        this.BillingPercentage = 'BillingPercentage' in params ? params.BillingPercentage : null;

    }
}

/**
 * DescribeScdnConfig返回参数结构体
 * @class
 */
class DescribeScdnConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义防护策略配置
         * @type {ScdnAclConfig || null}
         */
        this.Acl = null;

        /**
         * Web 攻击防护（WAF）配置
         * @type {ScdnWafConfig || null}
         */
        this.Waf = null;

        /**
         * CC 防护配置
         * @type {ScdnConfig || null}
         */
        this.CC = null;

        /**
         * DDOS 防护配置
         * @type {ScdnDdosConfig || null}
         */
        this.Ddos = null;

        /**
         * BOT 防护配置
         * @type {ScdnBotConfig || null}
         */
        this.Bot = null;

        /**
         * 当前状态，取值online | offline
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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

        if (params.Acl) {
            let obj = new ScdnAclConfig();
            obj.deserialize(params.Acl)
            this.Acl = obj;
        }

        if (params.Waf) {
            let obj = new ScdnWafConfig();
            obj.deserialize(params.Waf)
            this.Waf = obj;
        }

        if (params.CC) {
            let obj = new ScdnConfig();
            obj.deserialize(params.CC)
            this.CC = obj;
        }

        if (params.Ddos) {
            let obj = new ScdnDdosConfig();
            obj.deserialize(params.Ddos)
            this.Ddos = obj;
        }

        if (params.Bot) {
            let obj = new ScdnBotConfig();
            obj.deserialize(params.Bot)
            this.Bot = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePushQuota请求参数结构体
 * @class
 */
class DescribePushQuotaRequest extends  AbstractModel {
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
 * 排序类型的数据结构
 * @class
 */
class TopDetailData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据类型的名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 数据值
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
 * 源站头部缓存配置，默认为开启状态，缓存所有头部信息
 * @class
 */
class ResponseHeaderCache extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源站头部缓存开关
on：开启
off：关闭
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * 计费数据明细
 * @class
 */
class ResourceBillingData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源名称，根据查询条件不同分为以下几类：
某一个具体域名：表示该域名明细数据
multiDomains：表示多域名汇总明细数据
某一个项目 ID：指定项目查询时，显示为项目 ID
all：账号维度数据明细
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * 计费数据详情
         * @type {Array.<CdnData> || null}
         */
        this.BillingData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;

        if (params.BillingData) {
            this.BillingData = new Array();
            for (let z in params.BillingData) {
                let obj = new CdnData();
                obj.deserialize(params.BillingData[z]);
                this.BillingData.push(obj);
            }
        }

    }
}

/**
 * 查询结果排序条件
 * @class
 */
class Sort extends  AbstractModel {
    constructor(){
        super();

        /**
         * 排序字段，当前支持：
createTime，域名创建时间
certExpireTime，证书过期时间
默认createTime。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * asc/desc，默认desc。
         * @type {string || null}
         */
        this.Sequence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Sequence = 'Sequence' in params ? params.Sequence : null;

    }
}

/**
 * 客户端信息
 * @class
 */
class ClientInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 省份。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProvName = null;

        /**
         * 国家。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Country = null;

        /**
         * 运营商。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IspName = null;

        /**
         * 客户端IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Ip = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProvName = 'ProvName' in params ? params.ProvName : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.IspName = 'IspName' in params ? params.IspName : null;
        this.Ip = 'Ip' in params ? params.Ip : null;

    }
}

/**
 * DescribePurgeTasks请求参数结构体
 * @class
 */
class DescribePurgeTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定刷新类型查询
url：url 刷新记录
path：目录刷新记录
         * @type {string || null}
         */
        this.PurgeType = null;

        /**
         * 根据时间区间查询时，填充开始时间，如 2018-08-08 00:00:00
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 根据时间区间查询时，填充结束时间，如 2018-08-08 23:59:59
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 根据任务 ID 查询时，填充任务 ID
查询时任务 ID 与起始时间必须填充一项
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 分页查询偏移量，默认为 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页查询限制数目，默认为 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 支持域名过滤，或 http(s):// 开头完整 URL 过滤
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * 指定任务状态查询
fail：刷新失败
done：刷新成功
process：刷新中
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 指定刷新地域查询
mainland：境内
overseas：境外
global：全球
         * @type {string || null}
         */
        this.Area = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PurgeType = 'PurgeType' in params ? params.PurgeType : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * PushUrlsCache返回参数结构体
 * @class
 */
class PushUrlsCacheResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 此批提交的任务 ID
         * @type {string || null}
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
 * 合并回源配置项
 * @class
 */
class OriginCombine extends  AbstractModel {
    constructor(){
        super();

        /**
         * on|off 是否开启合并回源
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * 组成CacheKey的一部分
 * @class
 */
class QueryStringKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * on | off CacheKey是否由QueryString组成
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 是否重新排序
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Reorder = null;

        /**
         * includeAll | excludeAll | includeCustom | excludeAll 使用/排除部分url参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 使用/排除的url参数数组，';' 分割
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
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Reorder = 'Reorder' in params ? params.Reorder : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * ListTopData返回参数结构体
 * @class
 */
class ListTopDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 各个资源的Top 访问数据详情。
         * @type {Array.<TopData> || null}
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
                let obj = new TopData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 浏览器缓存规则配置，用于设置 MaxAge 默认值，默认为关闭状态（功能灰度中，尚未全量）
 * @class
 */
class MaxAge extends  AbstractModel {
    constructor(){
        super();

        /**
         * 浏览器缓存配置开关
on：开启
off：关闭
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * MaxAge 规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MaxAgeRule> || null}
         */
        this.MaxAgeRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.MaxAgeRules) {
            this.MaxAgeRules = new Array();
            for (let z in params.MaxAgeRules) {
                let obj = new MaxAgeRule();
                obj.deserialize(params.MaxAgeRules[z]);
                this.MaxAgeRules.push(obj);
            }
        }

    }
}

/**
 * UpdateDomainConfig返回参数结构体
 * @class
 */
class UpdateDomainConfigResponse extends  AbstractModel {
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
 * 日志集信息
 * @class
 */
class LogSetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开发者ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 渠道
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * 日志集ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * 日志集名字
         * @type {string || null}
         */
        this.LogsetName = null;

        /**
         * 是否默认日志集
         * @type {number || null}
         */
        this.IsDefault = null;

        /**
         * 日志保存时间，单位为天
         * @type {number || null}
         */
        this.LogsetSavePeriod = null;

        /**
         * 创建日期
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 区域
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
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.LogsetName = 'LogsetName' in params ? params.LogsetName : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.LogsetSavePeriod = 'LogsetSavePeriod' in params ? params.LogsetSavePeriod : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * ListDiagnoseReport返回参数结构体
 * @class
 */
class ListDiagnoseReportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 诊断信息。
         * @type {Array.<DiagnoseInfo> || null}
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
                let obj = new DiagnoseInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SearchClsLog请求参数结构体
 * @class
 */
class SearchClsLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要查询的日志集ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * 需要查询的日志主题ID组合，以逗号分隔
         * @type {string || null}
         */
        this.TopicIds = null;

        /**
         * 需要查询的日志的起始时间，格式 YYYY-mm-dd HH:MM:SS
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 需要查询的日志的结束时间，格式 YYYY-mm-dd HH:MM:SS
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 单次要返回的日志条数，单次返回的最大条数为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 接入渠道，默认值为cdn
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * 需要查询的内容，详情请参考https://cloud.tencent.com/document/product/614/16982
         * @type {string || null}
         */
        this.Query = null;

        /**
         * 加载更多使用，透传上次返回的 context 值，获取后续的日志内容，通过游标最多可获取10000条，请尽可能缩小时间范围
         * @type {string || null}
         */
        this.Context = null;

        /**
         * 按日志时间排序， asc（升序）或者 desc（降序），默认为 desc
         * @type {string || null}
         */
        this.Sort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.TopicIds = 'TopicIds' in params ? params.TopicIds : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.Query = 'Query' in params ? params.Query : null;
        this.Context = 'Context' in params ? params.Context : null;
        this.Sort = 'Sort' in params ? params.Sort : null;

    }
}

/**
 * 高级配置集合
 * @class
 */
class AdvanceConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 高级配置名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 是否支持高级配置，
on：支持
off：不支持
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * s3源站回源鉴权。
 * @class
 */
class AwsPrivateAccess extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开关，on/off。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 访问ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccessKey = null;

        /**
         * 密钥。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SecretKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.AccessKey = 'AccessKey' in params ? params.AccessKey : null;
        this.SecretKey = 'SecretKey' in params ? params.SecretKey : null;

    }
}

/**
 * ManageClsTopicDomains返回参数结构体
 * @class
 */
class ManageClsTopicDomainsResponse extends  AbstractModel {
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
 * 视频拖拽配置，默认为关闭状态
 * @class
 */
class VideoSeek extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频拖拽开关
on：开启
off：关闭
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * 是否兼容旧版配置
 * @class
 */
class Compatibility extends  AbstractModel {
    constructor(){
        super();

        /**
         * 兼容标志状态码。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Code = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;

    }
}

/**
 * SCDN精准访问控制配置
 * @class
 */
class ScdnAclGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则名称
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 具体配置
         * @type {Array.<ScdnAclRule> || null}
         */
        this.Configure = null;

        /**
         * 规则行为，一般为refuse
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 规则是否生效中active|inactive
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
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

        if (params.Configure) {
            this.Configure = new Array();
            for (let z in params.Configure) {
                let obj = new ScdnAclRule();
                obj.deserialize(params.Configure[z]);
                this.Configure.push(obj);
            }
        }
        this.Result = 'Result' in params ? params.Result : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Waf 规则信息
 * @class
 */
class ScdnWafRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 攻击类型
         * @type {string || null}
         */
        this.AttackType = null;

        /**
         * 防护措施，observe
         * @type {string || null}
         */
        this.Operate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AttackType = 'AttackType' in params ? params.AttackType : null;
        this.Operate = 'Operate' in params ? params.Operate : null;

    }
}

/**
 * Cls日志搜索结果
 * @class
 */
class ClsSearchLogs extends  AbstractModel {
    constructor(){
        super();

        /**
         * 获取更多检索结果的游标
         * @type {string || null}
         */
        this.Context = null;

        /**
         * 搜索结果是否已经全部返回
         * @type {boolean || null}
         */
        this.Listover = null;

        /**
         * 日志内容信息
         * @type {Array.<ClsLogObject> || null}
         */
        this.Results = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Context = 'Context' in params ? params.Context : null;
        this.Listover = 'Listover' in params ? params.Listover : null;

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new ClsLogObject();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }

    }
}

/**
 * DescribeUrlViolations返回参数结构体
 * @class
 */
class DescribeUrlViolationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 违规 URL 详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ViolationUrl> || null}
         */
        this.UrlRecordList = null;

        /**
         * 记录总数，用于分页
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

        if (params.UrlRecordList) {
            this.UrlRecordList = new Array();
            for (let z in params.UrlRecordList) {
                let obj = new ViolationUrl();
                obj.deserialize(params.UrlRecordList[z]);
                this.UrlRecordList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IP 黑白名单配置，默认为关闭状态
 * @class
 */
class IpFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP 黑白名单配置开关
on：开启
off：关闭
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * IP 黑白名单类型
whitelist：白名单
blacklist：黑名单
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FilterType = null;

        /**
         * IP 黑白名单列表
支持 X.X.X.X 形式 IP，或 /8、 /16、/24 形式网段
最多可填充 50 个白名单或 50 个黑名单
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Filters = null;

        /**
         * IP 黑白名单分路径配置，白名单功能
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IpFilterPathRule> || null}
         */
        this.FilterRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.FilterType = 'FilterType' in params ? params.FilterType : null;
        this.Filters = 'Filters' in params ? params.Filters : null;

        if (params.FilterRules) {
            this.FilterRules = new Array();
            for (let z in params.FilterRules) {
                let obj = new IpFilterPathRule();
                obj.deserialize(params.FilterRules[z]);
                this.FilterRules.push(obj);
            }
        }

    }
}

/**
 * SCDN访问控制
 * @class
 */
class ScdnAclConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启，on | off
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Acl规则组，switch为on时必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ScdnAclGroup> || null}
         */
        this.ScriptData = null;

        /**
         * 错误页面配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ScdnErrorPage || null}
         */
        this.ErrorPage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.ScriptData) {
            this.ScriptData = new Array();
            for (let z in params.ScriptData) {
                let obj = new ScdnAclGroup();
                obj.deserialize(params.ScriptData[z]);
                this.ScriptData.push(obj);
            }
        }

        if (params.ErrorPage) {
            let obj = new ScdnErrorPage();
            obj.deserialize(params.ErrorPage)
            this.ErrorPage = obj;
        }

    }
}

/**
 * 诊断报告单元信息
 * @class
 */
class DiagnoseUnit extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内容单元英文名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 内容单元中文名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.KeyText = null;

        /**
         * 报告内容。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 报告内容。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ValueText = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.KeyText = 'KeyText' in params ? params.KeyText : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.ValueText = 'ValueText' in params ? params.ValueText : null;

    }
}

/**
 * 诊断信息
 * @class
 */
class DiagnoseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待诊断的URL。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiagnoseUrl = null;

        /**
         * 由系统生成的诊断链接。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiagnoseLink = null;

        /**
         * 诊断创建时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 诊断链接过期时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireDate = null;

        /**
         * 诊断链接当前访问次数，一个诊断链接最多可访问10次。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VisitCount = null;

        /**
         * 访问诊断链接的客户端简易信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DiagnoseList> || null}
         */
        this.ClientList = null;

        /**
         * 域名加速区域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Area = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiagnoseUrl = 'DiagnoseUrl' in params ? params.DiagnoseUrl : null;
        this.DiagnoseLink = 'DiagnoseLink' in params ? params.DiagnoseLink : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ExpireDate = 'ExpireDate' in params ? params.ExpireDate : null;
        this.VisitCount = 'VisitCount' in params ? params.VisitCount : null;

        if (params.ClientList) {
            this.ClientList = new Array();
            for (let z in params.ClientList) {
                let obj = new DiagnoseList();
                obj.deserialize(params.ClientList[z]);
                this.ClientList.push(obj);
            }
        }
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * DescribePurgeTasks返回参数结构体
 * @class
 */
class DescribePurgeTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 详细刷新记录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PurgeTask> || null}
         */
        this.PurgeLogs = null;

        /**
         * 任务总数，用于分页
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.PurgeLogs) {
            this.PurgeLogs = new Array();
            for (let z in params.PurgeLogs) {
                let obj = new PurgeTask();
                obj.deserialize(params.PurgeLogs[z]);
                this.PurgeLogs.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 回源鉴权高级配置
 * @class
 */
class OriginAuthentication extends  AbstractModel {
    constructor(){
        super();

        /**
         * 鉴权开关，on或off
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 鉴权类型A配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OriginAuthenticationTypeA || null}
         */
        this.TypeA = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.TypeA) {
            let obj = new OriginAuthenticationTypeA();
            obj.deserialize(params.TypeA)
            this.TypeA = obj;
        }

    }
}

/**
 * 状态码重定向规则配置
 * @class
 */
class ErrorPageRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态码
支持 400、403、404、500
         * @type {number || null}
         */
        this.StatusCode = null;

        /**
         * 重定向状态码设置
支持 301 或 302
         * @type {number || null}
         */
        this.RedirectCode = null;

        /**
         * 重定向 URL
需要为完整跳转路径，如 https://www.test.com/error.html
         * @type {string || null}
         */
        this.RedirectUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;
        this.RedirectCode = 'RedirectCode' in params ? params.RedirectCode : null;
        this.RedirectUrl = 'RedirectUrl' in params ? params.RedirectUrl : null;

    }
}

/**
 * DescribeOriginData返回参数结构体
 * @class
 */
class DescribeOriginDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据统计的时间粒度，支持min, 5min, hour, day，分别表示1分钟，5分钟，1小时和1天的时间粒度。
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * 各个资源的回源数据详情。
         * @type {Array.<ResourceOriginData> || null}
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
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ResourceOriginData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 刷新任务详情
 * @class
 */
class PurgeTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 刷新任务 ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 刷新 URL
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 刷新任务状态
fail：刷新失败
done：刷新成功
process：刷新中
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 刷新类型
url：URL 刷新
path：目录刷新
         * @type {string || null}
         */
        this.PurgeType = null;

        /**
         * 刷新方式
flush：刷新更新资源（仅目录刷新时有此类型）
delete：刷新全部资源
         * @type {string || null}
         */
        this.FlushType = null;

        /**
         * 刷新任务提交时间
         * @type {string || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.PurgeType = 'PurgeType' in params ? params.PurgeType : null;
        this.FlushType = 'FlushType' in params ? params.FlushType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * 回源超时配置
 * @class
 */
class OriginPullTimeout extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回源建连超时时间，单位为秒，要求5~60之间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ConnectTimeout = null;

        /**
         * 回源接收超时时间，单位为秒，要求10 ~ 60之间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ReceiveTimeout = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConnectTimeout = 'ConnectTimeout' in params ? params.ConnectTimeout : null;
        this.ReceiveTimeout = 'ReceiveTimeout' in params ? params.ReceiveTimeout : null;

    }
}

/**
 * DeleteCdnDomain返回参数结构体
 * @class
 */
class DeleteCdnDomainResponse extends  AbstractModel {
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
 * CDN回源节点IP信息
 * @class
 */
class OriginIp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回源IP段/回源IP，默认返回IP段信息。
         * @type {string || null}
         */
        this.Ip = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;

    }
}

/**
 * IP 属性信息
 * @class
 */
class CdnIp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定查询的 IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * IP 归属：
yes：节点归属于腾讯云 CDN
no：节点不属于腾讯云 CDN
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 节点所处的省份/国家
unknown 表示节点位置未知
         * @type {string || null}
         */
        this.Location = null;

        /**
         * 节点上下线历史记录
         * @type {Array.<CdnIpHistory> || null}
         */
        this.History = null;

        /**
         * 节点的所在区域
mainland：中国境内加速节点
overseas：中国境外加速节点
unknown：服务地域无法获取
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 节点的所在城市
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.City = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Location = 'Location' in params ? params.Location : null;

        if (params.History) {
            this.History = new Array();
            for (let z in params.History) {
                let obj = new CdnIpHistory();
                obj.deserialize(params.History[z]);
                this.History.push(obj);
            }
        }
        this.Area = 'Area' in params ? params.Area : null;
        this.City = 'City' in params ? params.City : null;

    }
}

/**
 * DescribeCdnData请求参数结构体
 * @class
 */
class DescribeCdnDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询起始时间，如：2018-09-04 10:40:00，返回结果大于等于指定时间
根据指定时间粒度不同，会进行向前归整，如 2018-09-04 10:40:00 在按 1 小时的时间粒度查询时，返回的第一个数据对应时间点为 2018-09-04 10:00:00
起始时间与结束时间间隔小于等于 90 天
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间，如：2018-09-04 10:40:00，返回结果小于等于指定时间
根据指定时间粒度不同，会进行向前归整，如 2018-09-04 10:40:00 在按 1 小时的时间粒度查询时，返回的最后一个数据对应时间点为 2018-09-04 10:00:00
起始时间与结束时间间隔小于等于 90 天
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 指定查询指标，支持的类型有：
flux：流量，单位为 byte
bandwidth：带宽，单位为 bps
request：请求数，单位为 次
hitRequest：命中请求数，单位为 次
requestHitRate：请求命中率，单位为 %，保留小数点后两位
hitFlux：命中流量，单位为byte
fluxHitRate：流量命中率，单位为 %，保留小数点后两位
statusCode：状态码，返回 2xx、3xx、4xx、5xx 汇总数据，单位为 个
2xx：返回 2xx 状态码汇总及各 2 开头状态码数据，单位为 个
3xx：返回 3xx 状态码汇总及各 3 开头状态码数据，单位为 个
4xx：返回 4xx 状态码汇总及各 4 开头状态码数据，单位为 个
5xx：返回 5xx 状态码汇总及各 5 开头状态码数据，单位为 个
支持指定具体状态码查询，若未产生过，则返回为空
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * 指定查询域名列表
最多可一次性查询 30 个加速域名明细
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 指定要查询的项目 ID，[前往查看项目 ID](https://console.cloud.tencent.com/project)
未填充域名情况下，指定项目查询，若填充了具体域名信息，以域名为主
         * @type {number || null}
         */
        this.Project = null;

        /**
         * 时间粒度，支持以下几种模式：
min：1 分钟粒度，指定查询区间 24 小时内（含 24 小时），可返回 1 分钟粒度明细数据（指定查询服务地域为中国境外时不支持 1 分钟粒度）
5min：5 分钟粒度，指定查询区间 31 天内（含 31 天），可返回 5 分钟粒度明细数据
hour：1 小时粒度，指定查询区间 31 天内（含 31 天），可返回 1 小时粒度明细数据
day：天粒度，指定查询区间大于 31 天，可返回天粒度明细数据
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * 多域名查询时，默认（false)返回多个域名的汇总数据
可按需指定为 true，返回每一个 Domain 的明细数据（statusCode 指标暂不支持）
         * @type {boolean || null}
         */
        this.Detail = null;

        /**
         * 查询中国境内CDN数据时，指定运营商查询，不填充表示查询所有运营商
运营商编码可以查看 [运营商编码映射](https://cloud.tencent.com/document/product/228/6316#.E5.8C.BA.E5.9F.9F-.2F-.E8.BF.90.E8.90.A5.E5.95.86.E6.98.A0.E5.B0.84.E8.A1.A8)
指定运营商查询时，不可同时指定省份、IP协议查询
         * @type {number || null}
         */
        this.Isp = null;

        /**
         * 查询中国境内CDN数据时，指定省份查询，不填充表示查询所有省份
查询中国境外CDN数据时，指定国家/地区查询，不填充表示查询所有国家/地区
省份、国家/地区编码可以查看 [省份编码映射](https://cloud.tencent.com/document/product/228/6316#.E5.8C.BA.E5.9F.9F-.2F-.E8.BF.90.E8.90.A5.E5.95.86.E6.98.A0.E5.B0.84.E8.A1.A8)
指定（中国境内）省份查询时，不可同时指定运营商、IP协议查询
         * @type {number || null}
         */
        this.District = null;

        /**
         * 指定协议查询，不填充表示查询所有协议
all：所有协议
http：指定查询 HTTP 对应指标
https：指定查询 HTTPS 对应指标
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 指定数据源查询，白名单功能
         * @type {string || null}
         */
        this.DataSource = null;

        /**
         * 指定IP协议查询，不填充表示查询所有协议
all：所有协议
ipv4：指定查询 ipv4 对应指标
ipv6：指定查询 ipv6 对应指标
指定IP协议查询时，不可同时指定省份、运营商查询
注意：非IPv6白名单用户不可指定ipv4、ipv6进行查询
         * @type {string || null}
         */
        this.IpProtocol = null;

        /**
         * 指定服务地域查询，不填充表示查询中国境内CDN数据
mainland：指定查询中国境内 CDN 数据
overseas：指定查询中国境外 CDN 数据
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 查询中国境外CDN数据时，可指定地区类型查询，不填充表示查询服务地区数据（仅在 Area 为 overseas 时可用）
server：指定查询服务地区（腾讯云 CDN 节点服务器所在地区）数据
client：指定查询客户端地区（用户请求终端所在地区）数据
         * @type {string || null}
         */
        this.AreaType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Metric = 'Metric' in params ? params.Metric : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Project = 'Project' in params ? params.Project : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Detail = 'Detail' in params ? params.Detail : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.District = 'District' in params ? params.District : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.DataSource = 'DataSource' in params ? params.DataSource : null;
        this.IpProtocol = 'IpProtocol' in params ? params.IpProtocol : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.AreaType = 'AreaType' in params ? params.AreaType : null;

    }
}

/**
 * DescribeImageConfig返回参数结构体
 * @class
 */
class DescribeImageConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * WebpAdapter配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {WebpAdapter || null}
         */
        this.WebpAdapter = null;

        /**
         * TpgAdapter配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TpgAdapter || null}
         */
        this.TpgAdapter = null;

        /**
         * GuetzliAdapter配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {GuetzliAdapter || null}
         */
        this.GuetzliAdapter = null;

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

        if (params.WebpAdapter) {
            let obj = new WebpAdapter();
            obj.deserialize(params.WebpAdapter)
            this.WebpAdapter = obj;
        }

        if (params.TpgAdapter) {
            let obj = new TpgAdapter();
            obj.deserialize(params.TpgAdapter)
            this.TpgAdapter = obj;
        }

        if (params.GuetzliAdapter) {
            let obj = new GuetzliAdapter();
            obj.deserialize(params.GuetzliAdapter)
            this.GuetzliAdapter = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeScdnConfig请求参数结构体
 * @class
 */
class DescribeScdnConfigRequest extends  AbstractModel {
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
 * 组成CacheKey的一部分
 * @class
 */
class CacheTagKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否使用CacheTag作为CacheKey的一部分
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 自定义CacheTag的值
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
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * StopScdnDomain请求参数结构体
 * @class
 */
class StopScdnDomainRequest extends  AbstractModel {
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
 * Scdn饼图数据，waf仅有
 * @class
 */
class ScdnTypeData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 攻击类型
         * @type {string || null}
         */
        this.AttackType = null;

        /**
         * 攻击值
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
        this.AttackType = 'AttackType' in params ? params.AttackType : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * Quic配置项
 * @class
 */
class Quic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否启动Quic配置
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

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
         * 分页查询偏移量，默认为 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页查询限制数目，默认为 100，最大可设置为 1000
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询条件过滤器，复杂类型
         * @type {Array.<DomainFilter> || null}
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
                let obj = new DomainFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * 离线缓存是否开启
 * @class
 */
class OfflineCache extends  AbstractModel {
    constructor(){
        super();

        /**
         * on | off, 离线缓存是否开启
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * CreateEdgePackTask请求参数结构体
 * @class
 */
class CreateEdgePackTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * apk 所在的 cos 存储桶, 如 edgepack-xxxxxxxx
         * @type {string || null}
         */
        this.CosBucket = null;

        /**
         * apk 源文件的存储路径, 如 /apk/xxxx.apk
         * @type {string || null}
         */
        this.CosUriFrom = null;

        /**
         * BlockID 的值, WALLE为1903654775(0x71777777)，VasDolly为2282837503(0x881155ff),传0或不传时默认为 WALLE 方案
         * @type {number || null}
         */
        this.BlockID = null;

        /**
         * 拓展之后的 apk 目标存储路径,如 /out/xxxx.apk
         * @type {string || null}
         */
        this.CosUriTo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CosBucket = 'CosBucket' in params ? params.CosBucket : null;
        this.CosUriFrom = 'CosUriFrom' in params ? params.CosUriFrom : null;
        this.BlockID = 'BlockID' in params ? params.BlockID : null;
        this.CosUriTo = 'CosUriTo' in params ? params.CosUriTo : null;

    }
}

/**
 * StopCdnDomain返回参数结构体
 * @class
 */
class StopCdnDomainResponse extends  AbstractModel {
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
 * Url重定向规则配置
 * @class
 */
class UrlRedirectRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 重定向状态码，301 | 302
         * @type {number || null}
         */
        this.RedirectStatusCode = null;

        /**
         * 待匹配的Url，仅支持Url路径，不支持参数。默认完全匹配，支持通配符 *，最多支持5个通配符，最大长度1024字符。
         * @type {string || null}
         */
        this.Pattern = null;

        /**
         * 目标URL，必须以“/”开头，不包含参数部分。最大长度1024字符。可使用$1, $2, $3, $4, $5分别捕获匹配路径中的通配符号，最多支持10个捕获值。
         * @type {string || null}
         */
        this.RedirectUrl = null;

        /**
         * 目标host，必须以http://或https://开头，并填写标准格式域名，如果不填写，默认为http:// + 当前域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RedirectHost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RedirectStatusCode = 'RedirectStatusCode' in params ? params.RedirectStatusCode : null;
        this.Pattern = 'Pattern' in params ? params.Pattern : null;
        this.RedirectUrl = 'RedirectUrl' in params ? params.RedirectUrl : null;
        this.RedirectHost = 'RedirectHost' in params ? params.RedirectHost : null;

    }
}

/**
 * 客户端访问诊断URL信息列表
 * @class
 */
class DiagnoseList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 诊断任务标签。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiagnoseTag = null;

        /**
         * 报告ID，用于获取详细诊断报告。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReportId = null;

        /**
         * 客户端信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ClientInfo> || null}
         */
        this.ClientInfo = null;

        /**
         * 最终诊断结果。
-1：已提交
0  ：检测中
1  ：检测正常
2  ： 检测异常
3  ： 诊断页面异常关闭
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FinalDiagnose = null;

        /**
         * 诊断任务创建时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiagnoseTag = 'DiagnoseTag' in params ? params.DiagnoseTag : null;
        this.ReportId = 'ReportId' in params ? params.ReportId : null;

        if (params.ClientInfo) {
            this.ClientInfo = new Array();
            for (let z in params.ClientInfo) {
                let obj = new ClientInfo();
                obj.deserialize(params.ClientInfo[z]);
                this.ClientInfo.push(obj);
            }
        }
        this.FinalDiagnose = 'FinalDiagnose' in params ? params.FinalDiagnose : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * IP黑白名单分路径配置
 * @class
 */
class IpFilterPathRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP 黑白名单类型
whitelist：白名单
blacklist：黑名单
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FilterType = null;

        /**
         * IP 黑白名单列表
支持 X.X.X.X 形式 IP，或 /8、 /16、/24 形式网段
最多可填充 50 个白名单或 50 个黑名单
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Filters = null;

        /**
         * 规则类型：
all：所有文件生效
file：指定文件后缀生效
directory：指定路径生效
path：指定绝对路径生效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * RuleType 对应类型下的匹配内容：
all 时填充 *
file 时填充后缀名，如 jpg、txt
directory 时填充路径，如 /xxx/test/
path 时填充绝对路径，如 /xxx/test.html
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.RulePaths = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FilterType = 'FilterType' in params ? params.FilterType : null;
        this.Filters = 'Filters' in params ? params.Filters : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.RulePaths = 'RulePaths' in params ? params.RulePaths : null;

    }
}

module.exports = {
    DescribeCdnDomainLogsResponse: DescribeCdnDomainLogsResponse,
    ScdnTopUrlData: ScdnTopUrlData,
    ScdnLogTaskDetail: ScdnLogTaskDetail,
    AdvancedAuthentication: AdvancedAuthentication,
    Compression: Compression,
    Revalidate: Revalidate,
    ResourceData: ResourceData,
    UrlRecord: UrlRecord,
    DescribePushQuotaResponse: DescribePushQuotaResponse,
    DescribePurgeQuotaResponse: DescribePurgeQuotaResponse,
    Authentication: Authentication,
    DescribeScdnTopDataResponse: DescribeScdnTopDataResponse,
    ImageOptimization: ImageOptimization,
    Https: Https,
    RuleCache: RuleCache,
    DescribeCdnDomainLogsRequest: DescribeCdnDomainLogsRequest,
    DescribeTrafficPackagesRequest: DescribeTrafficPackagesRequest,
    CreateClsLogTopicResponse: CreateClsLogTopicResponse,
    ScdnAclRule: ScdnAclRule,
    PurgePathCacheResponse: PurgePathCacheResponse,
    DomainFilter: DomainFilter,
    DescribeCdnOriginIpResponse: DescribeCdnOriginIpResponse,
    SpecificConfig: SpecificConfig,
    FollowRedirect: FollowRedirect,
    RequestHeader: RequestHeader,
    DescribePurgeQuotaRequest: DescribePurgeQuotaRequest,
    Referer: Referer,
    StartScdnDomainRequest: StartScdnDomainRequest,
    PostSize: PostSize,
    DescribeCdnDataResponse: DescribeCdnDataResponse,
    EnableClsLogTopicRequest: EnableClsLogTopicRequest,
    UpdateImageConfigResponse: UpdateImageConfigResponse,
    ScdnDomain: ScdnDomain,
    CacheConfigNoCache: CacheConfigNoCache,
    AccessControl: AccessControl,
    DeleteCdnDomainRequest: DeleteCdnDomainRequest,
    DescribePayTypeResponse: DescribePayTypeResponse,
    ForceRedirect: ForceRedirect,
    PathRule: PathRule,
    ListTopDataRequest: ListTopDataRequest,
    ListClsTopicDomainsRequest: ListClsTopicDomainsRequest,
    DescribeDomainsResponse: DescribeDomainsResponse,
    DescribePayTypeRequest: DescribePayTypeRequest,
    UpdateImageConfigRequest: UpdateImageConfigRequest,
    DisableCachesRequest: DisableCachesRequest,
    AdvancedAuthenticationTypeD: AdvancedAuthenticationTypeD,
    StartCdnDomainResponse: StartCdnDomainResponse,
    CompressionRule: CompressionRule,
    GuetzliAdapter: GuetzliAdapter,
    UpdateScdnDomainResponse: UpdateScdnDomainResponse,
    Origin: Origin,
    ViolationUrl: ViolationUrl,
    DescribeDomainsConfigRequest: DescribeDomainsConfigRequest,
    TopData: TopData,
    EnableCachesRequest: EnableCachesRequest,
    Quota: Quota,
    HeaderKey: HeaderKey,
    DescribeBillingDataRequest: DescribeBillingDataRequest,
    SimpleCache: SimpleCache,
    DeleteClsLogTopicRequest: DeleteClsLogTopicRequest,
    UserAgentFilter: UserAgentFilter,
    DeleteScdnDomainRequest: DeleteScdnDomainRequest,
    DescribeDistrictIspDataResponse: DescribeDistrictIspDataResponse,
    DescribeCdnOriginIpRequest: DescribeCdnOriginIpRequest,
    UpdatePayTypeResponse: UpdatePayTypeResponse,
    TopicInfo: TopicInfo,
    DescribeDomainsConfigResponse: DescribeDomainsConfigResponse,
    DescribeDiagnoseReportRequest: DescribeDiagnoseReportRequest,
    BriefDomain: BriefDomain,
    TimestampData: TimestampData,
    TpgAdapter: TpgAdapter,
    CacheConfigCache: CacheConfigCache,
    DescribeReportDataResponse: DescribeReportDataResponse,
    DisableClsLogTopicRequest: DisableClsLogTopicRequest,
    RuleCacheConfig: RuleCacheConfig,
    ListClsTopicDomainsResponse: ListClsTopicDomainsResponse,
    TrafficPackage: TrafficPackage,
    BotCookie: BotCookie,
    DescribeCdnIpRequest: DescribeCdnIpRequest,
    Ipv6: Ipv6,
    WafSubRuleStatus: WafSubRuleStatus,
    ScdnEventLogConditions: ScdnEventLogConditions,
    StatusCodeCache: StatusCodeCache,
    DescribeIpVisitResponse: DescribeIpVisitResponse,
    EnableClsLogTopicResponse: EnableClsLogTopicResponse,
    ListClsLogTopicsResponse: ListClsLogTopicsResponse,
    OverseaConfig: OverseaConfig,
    AddCdnDomainRequest: AddCdnDomainRequest,
    UserAgentFilterRule: UserAgentFilterRule,
    UpdateDomainConfigRequest: UpdateDomainConfigRequest,
    Tag: Tag,
    CacheConfigFollowOrigin: CacheConfigFollowOrigin,
    MaxAgeRule: MaxAgeRule,
    AdvancedAuthenticationTypeE: AdvancedAuthenticationTypeE,
    DescribeCertDomainsRequest: DescribeCertDomainsRequest,
    AdvancedAuthenticationTypeF: AdvancedAuthenticationTypeF,
    AdvancedAuthenticationTypeA: AdvancedAuthenticationTypeA,
    AdvancedCache: AdvancedCache,
    AdvancedAuthenticationTypeC: AdvancedAuthenticationTypeC,
    AdvancedAuthenticationTypeB: AdvancedAuthenticationTypeB,
    WebpAdapter: WebpAdapter,
    CreateScdnLogTaskResponse: CreateScdnLogTaskResponse,
    MapInfo: MapInfo,
    DescribeCertDomainsResponse: DescribeCertDomainsResponse,
    ScdnBotConfig: ScdnBotConfig,
    DuplicateDomainConfigRequest: DuplicateDomainConfigRequest,
    AuthenticationTypeD: AuthenticationTypeD,
    AuthenticationTypeC: AuthenticationTypeC,
    AuthenticationTypeB: AuthenticationTypeB,
    AuthenticationTypeA: AuthenticationTypeA,
    OriginAuthenticationTypeA: OriginAuthenticationTypeA,
    SecurityConfig: SecurityConfig,
    DescribePushTasksResponse: DescribePushTasksResponse,
    ResourceOriginData: ResourceOriginData,
    IpStatus: IpStatus,
    AddCdnDomainResponse: AddCdnDomainResponse,
    ListScdnDomainsResponse: ListScdnDomainsResponse,
    VerifyDomainRecordResponse: VerifyDomainRecordResponse,
    DomainAreaConfig: DomainAreaConfig,
    ListScdnDomainsRequest: ListScdnDomainsRequest,
    ServerCert: ServerCert,
    AccessControlRule: AccessControlRule,
    HttpHeaderPathRule: HttpHeaderPathRule,
    CreateScdnLogTaskRequest: CreateScdnLogTaskRequest,
    DistrictIspInfo: DistrictIspInfo,
    SimpleCacheRule: SimpleCacheRule,
    DisableClsLogTopicResponse: DisableClsLogTopicResponse,
    Hsts: Hsts,
    DescribeIpStatusRequest: DescribeIpStatusRequest,
    DetailDomain: DetailDomain,
    GetDisableRecordsResponse: GetDisableRecordsResponse,
    Ipv6Access: Ipv6Access,
    ResponseHeader: ResponseHeader,
    DuplicateDomainConfigResponse: DuplicateDomainConfigResponse,
    CdnIpHistory: CdnIpHistory,
    SummarizedData: SummarizedData,
    UpdateScdnDomainRequest: UpdateScdnDomainRequest,
    UpdatePayTypeRequest: UpdatePayTypeRequest,
    ManageClsTopicDomainsRequest: ManageClsTopicDomainsRequest,
    ListDiagnoseReportRequest: ListDiagnoseReportRequest,
    ScdnWafConfig: ScdnWafConfig,
    CreateScdnFailedLogTaskRequest: CreateScdnFailedLogTaskRequest,
    Cache: Cache,
    DiagnoseData: DiagnoseData,
    DescribeOriginDataRequest: DescribeOriginDataRequest,
    RangeOriginPull: RangeOriginPull,
    ListScdnLogTasksRequest: ListScdnLogTasksRequest,
    SearchClsLogResponse: SearchClsLogResponse,
    PathBasedOriginRule: PathBasedOriginRule,
    PushUrlsCacheRequest: PushUrlsCacheRequest,
    MainlandConfig: MainlandConfig,
    DescribeReportDataRequest: DescribeReportDataRequest,
    DescribePushTasksRequest: DescribePushTasksRequest,
    DescribeScdnTopDataRequest: DescribeScdnTopDataRequest,
    DescribeUrlViolationsRequest: DescribeUrlViolationsRequest,
    RefererRule: RefererRule,
    ScdnCCRules: ScdnCCRules,
    IpFreqLimit: IpFreqLimit,
    ScdnDdosConfig: ScdnDdosConfig,
    CreateDiagnoseUrlResponse: CreateDiagnoseUrlResponse,
    CreateClsLogTopicRequest: CreateClsLogTopicRequest,
    CacheOptResult: CacheOptResult,
    CreateVerifyRecordResponse: CreateVerifyRecordResponse,
    StopCdnDomainRequest: StopCdnDomainRequest,
    DescribeMapInfoResponse: DescribeMapInfoResponse,
    DescribeTrafficPackagesResponse: DescribeTrafficPackagesResponse,
    DescribeMapInfoRequest: DescribeMapInfoRequest,
    EnableCachesResponse: EnableCachesResponse,
    RuleQueryString: RuleQueryString,
    DescribeIpVisitRequest: DescribeIpVisitRequest,
    HttpHeaderRule: HttpHeaderRule,
    StatusCodeCacheRule: StatusCodeCacheRule,
    ClientCert: ClientCert,
    ScdnTopData: ScdnTopData,
    ScdnConfig: ScdnConfig,
    DomainLog: DomainLog,
    GetDisableRecordsRequest: GetDisableRecordsRequest,
    CreateDiagnoseUrlRequest: CreateDiagnoseUrlRequest,
    PurgeUrlsCacheResponse: PurgeUrlsCacheResponse,
    StartScdnDomainResponse: StartScdnDomainResponse,
    BotJavaScript: BotJavaScript,
    DeleteClsLogTopicResponse: DeleteClsLogTopicResponse,
    DescribeBillingDataResponse: DescribeBillingDataResponse,
    DisableCachesResponse: DisableCachesResponse,
    SchemeKey: SchemeKey,
    DescribeImageConfigRequest: DescribeImageConfigRequest,
    DescribeCdnIpResponse: DescribeCdnIpResponse,
    AdvanceCacheRule: AdvanceCacheRule,
    DescribeIpStatusResponse: DescribeIpStatusResponse,
    DescribeDistrictIspDataRequest: DescribeDistrictIspDataRequest,
    ListScdnLogTasksResponse: ListScdnLogTasksResponse,
    ScdnErrorPage: ScdnErrorPage,
    CacheKey: CacheKey,
    UrlRedirect: UrlRedirect,
    DownstreamCapping: DownstreamCapping,
    CookieKey: CookieKey,
    StopScdnDomainResponse: StopScdnDomainResponse,
    VerifyDomainRecordRequest: VerifyDomainRecordRequest,
    KeyRule: KeyRule,
    CappingRule: CappingRule,
    DeleteScdnDomainResponse: DeleteScdnDomainResponse,
    ListClsLogTopicsRequest: ListClsLogTopicsRequest,
    Seo: Seo,
    BandwidthAlert: BandwidthAlert,
    CreateVerifyRecordRequest: CreateVerifyRecordRequest,
    ClsLogObject: ClsLogObject,
    RegionMapRelation: RegionMapRelation,
    PurgePathCacheRequest: PurgePathCacheRequest,
    DescribeDiagnoseReportResponse: DescribeDiagnoseReportResponse,
    CreateScdnFailedLogTaskResponse: CreateScdnFailedLogTaskResponse,
    CdnData: CdnData,
    PurgeUrlsCacheRequest: PurgeUrlsCacheRequest,
    StartCdnDomainRequest: StartCdnDomainRequest,
    OriginPullOptimization: OriginPullOptimization,
    ErrorPage: ErrorPage,
    PushTask: PushTask,
    CreateEdgePackTaskResponse: CreateEdgePackTaskResponse,
    ReportData: ReportData,
    DescribeScdnConfigResponse: DescribeScdnConfigResponse,
    DescribePushQuotaRequest: DescribePushQuotaRequest,
    TopDetailData: TopDetailData,
    ResponseHeaderCache: ResponseHeaderCache,
    ResourceBillingData: ResourceBillingData,
    Sort: Sort,
    ClientInfo: ClientInfo,
    DescribePurgeTasksRequest: DescribePurgeTasksRequest,
    PushUrlsCacheResponse: PushUrlsCacheResponse,
    OriginCombine: OriginCombine,
    QueryStringKey: QueryStringKey,
    ListTopDataResponse: ListTopDataResponse,
    MaxAge: MaxAge,
    UpdateDomainConfigResponse: UpdateDomainConfigResponse,
    LogSetInfo: LogSetInfo,
    ListDiagnoseReportResponse: ListDiagnoseReportResponse,
    SearchClsLogRequest: SearchClsLogRequest,
    AdvanceConfig: AdvanceConfig,
    AwsPrivateAccess: AwsPrivateAccess,
    ManageClsTopicDomainsResponse: ManageClsTopicDomainsResponse,
    VideoSeek: VideoSeek,
    Compatibility: Compatibility,
    ScdnAclGroup: ScdnAclGroup,
    ScdnWafRule: ScdnWafRule,
    ClsSearchLogs: ClsSearchLogs,
    DescribeUrlViolationsResponse: DescribeUrlViolationsResponse,
    IpFilter: IpFilter,
    ScdnAclConfig: ScdnAclConfig,
    DiagnoseUnit: DiagnoseUnit,
    DiagnoseInfo: DiagnoseInfo,
    DescribePurgeTasksResponse: DescribePurgeTasksResponse,
    OriginAuthentication: OriginAuthentication,
    ErrorPageRule: ErrorPageRule,
    DescribeOriginDataResponse: DescribeOriginDataResponse,
    PurgeTask: PurgeTask,
    OriginPullTimeout: OriginPullTimeout,
    DeleteCdnDomainResponse: DeleteCdnDomainResponse,
    OriginIp: OriginIp,
    CdnIp: CdnIp,
    DescribeCdnDataRequest: DescribeCdnDataRequest,
    DescribeImageConfigResponse: DescribeImageConfigResponse,
    DescribeScdnConfigRequest: DescribeScdnConfigRequest,
    CacheTagKey: CacheTagKey,
    StopScdnDomainRequest: StopScdnDomainRequest,
    ScdnTypeData: ScdnTypeData,
    Quic: Quic,
    DescribeDomainsRequest: DescribeDomainsRequest,
    OfflineCache: OfflineCache,
    CreateEdgePackTaskRequest: CreateEdgePackTaskRequest,
    StopCdnDomainResponse: StopCdnDomainResponse,
    UrlRedirectRule: UrlRedirectRule,
    DiagnoseList: DiagnoseList,
    IpFilterPathRule: IpFilterPathRule,

}
