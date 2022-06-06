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
 * 智能压缩配置
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
 * 域名证书配置
 * @class
 */
class HostCertSetting extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 服务端证书配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ServerCertInfo> || null}
         */
        this.CertInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Host = 'Host' in params ? params.Host : null;

        if (params.CertInfo) {
            this.CertInfo = new Array();
            for (let z in params.CertInfo) {
                let obj = new ServerCertInfo();
                obj.deserialize(params.CertInfo[z]);
                this.CertInfo.push(obj);
            }
        }

    }
}

/**
 * ModifyDefaultCertificate请求参数结构体
 * @class
 */
class ModifyDefaultCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 默认证书ID
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * 证书状态
deployed: 部署证书
disabled:禁用证书
失败状态下重新deployed即可重试失败
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeZoneDetails返回参数结构体
 * @class
 */
class DescribeZoneDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 站点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 用户当前使用的 NS 列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.OriginalNameServers = null;

        /**
         * 腾讯云分配给用户的 NS 列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.NameServers = null;

        /**
         * 站点状态
- active：NS 已切换
- pending：NS 未切换
- moved：NS 已切走
- deactivated：被封禁
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 站点接入方式
- full：NS 接入
- partial：CNAME 接入
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 站点是否关闭
         * @type {boolean || null}
         */
        this.Paused = null;

        /**
         * 站点创建时间
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * 站点修改时间
         * @type {string || null}
         */
        this.ModifiedOn = null;

        /**
         * 用户自定义 NS 信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {VanityNameServers || null}
         */
        this.VanityNameServers = null;

        /**
         * 用户自定义 NS IP 信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VanityNameServersIps> || null}
         */
        this.VanityNameServersIps = null;

        /**
         * 是否开启 CNAME 加速
- enabled：开启
- disabled：关闭
         * @type {string || null}
         */
        this.CnameSpeedUp = null;

        /**
         * cname切换验证状态
- finished 切换完成
- pending 切换验证中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CnameStatus = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.OriginalNameServers = 'OriginalNameServers' in params ? params.OriginalNameServers : null;
        this.NameServers = 'NameServers' in params ? params.NameServers : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Paused = 'Paused' in params ? params.Paused : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;

        if (params.VanityNameServers) {
            let obj = new VanityNameServers();
            obj.deserialize(params.VanityNameServers)
            this.VanityNameServers = obj;
        }

        if (params.VanityNameServersIps) {
            this.VanityNameServersIps = new Array();
            for (let z in params.VanityNameServersIps) {
                let obj = new VanityNameServersIps();
                obj.deserialize(params.VanityNameServersIps[z]);
                this.VanityNameServersIps.push(obj);
            }
        }
        this.CnameSpeedUp = 'CnameSpeedUp' in params ? params.CnameSpeedUp : null;
        this.CnameStatus = 'CnameStatus' in params ? params.CnameStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteApplicationProxy返回参数结构体
 * @class
 */
class DeleteApplicationProxyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 代理ID
         * @type {string || null}
         */
        this.ProxyId = null;

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
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * http2 配置开关
on：开启
off：关闭
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
         * Tls版本设置，支持设置 TLSv1, TLSV1.1, TLSV1.2, TLSv1.3，修改时必须开启连续的版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.TlsVersion = null;

        /**
         * HSTS 配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Hsts || null}
         */
        this.Hsts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Http2 = 'Http2' in params ? params.Http2 : null;
        this.OcspStapling = 'OcspStapling' in params ? params.OcspStapling : null;
        this.TlsVersion = 'TlsVersion' in params ? params.TlsVersion : null;

        if (params.Hsts) {
            let obj = new Hsts();
            obj.deserialize(params.Hsts)
            this.Hsts = obj;
        }

    }
}

/**
 * ScanDnsRecords返回参数结构体
 * @class
 */
class ScanDnsRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 扫描状态
- doing 扫描中
- done 扫描完成
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 扫描后添加的记录数
         * @type {number || null}
         */
        this.RecordsAdded = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.RecordsAdded = 'RecordsAdded' in params ? params.RecordsAdded : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 站点查询过滤条件
 * @class
 */
class ZoneFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤字段名，支持的列表如下：
- name: 站点名。
- status: 站点状态
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 过滤字段值
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * 是否启用模糊查询，仅支持过滤字段名为name。模糊查询时，Values长度最大为1
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
        this.Values = 'Values' in params ? params.Values : null;
        this.Fuzzy = 'Fuzzy' in params ? params.Fuzzy : null;

    }
}

/**
 * ModifyLoadBalancingStatus返回参数结构体
 * @class
 */
class ModifyLoadBalancingStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

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
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePrefetchTasks返回参数结构体
 * @class
 */
class DescribePrefetchTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该查询条件总共条目数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 任务结果列表
         * @type {Array.<Task> || null}
         */
        this.Tasks = null;

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

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new Task();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteApplicationProxy请求参数结构体
 * @class
 */
class DeleteApplicationProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 代理ID
         * @type {string || null}
         */
        this.ProxyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;

    }
}

/**
 * DescribeZoneSetting请求参数结构体
 * @class
 */
class DescribeZoneSettingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID
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
 * ModifyZoneStatus请求参数结构体
 * @class
 */
class ModifyZoneStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 站点状态
- false 开启站点
- true 关闭站点
         * @type {boolean || null}
         */
        this.Paused = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Paused = 'Paused' in params ? params.Paused : null;

    }
}

/**
 * ModifyDnsRecord请求参数结构体
 * @class
 */
class ModifyDnsRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 站点 ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 记录类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 记录名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 记录内容
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 生存时间值
         * @type {number || null}
         */
        this.Ttl = null;

        /**
         * 优先级
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * 代理模式
         * @type {string || null}
         */
        this.Mode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Ttl = 'Ttl' in params ? params.Ttl : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.Mode = 'Mode' in params ? params.Mode : null;

    }
}

/**
 * CreateApplicationProxyRules请求参数结构体
 * @class
 */
class CreateApplicationProxyRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 代理ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 规则列表
         * @type {Array.<ApplicationProxyRule> || null}
         */
        this.Rule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;

        if (params.Rule) {
            this.Rule = new Array();
            for (let z in params.Rule) {
                let obj = new ApplicationProxyRule();
                obj.deserialize(params.Rule[z]);
                this.Rule.push(obj);
            }
        }

    }
}

/**
 * 负载均衡信息
 * @class
 */
class LoadBalancing extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 子域名，填写@表示根域
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 代理模式：
dns_only: 仅DNS
proxied: 开启代理
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 当Type=dns_only表示DNS的TTL时间
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * 使用的源站组ID
         * @type {Array.<string> || null}
         */
        this.OriginId = null;

        /**
         * 使用的源站信息
         * @type {Array.<OriginGroup> || null}
         */
        this.Origin = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 调度域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Cname = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.OriginId = 'OriginId' in params ? params.OriginId : null;

        if (params.Origin) {
            this.Origin = new Array();
            for (let z in params.Origin) {
                let obj = new OriginGroup();
                obj.deserialize(params.Origin[z]);
                this.Origin.push(obj);
            }
        }
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Cname = 'Cname' in params ? params.Cname : null;

    }
}

/**
 * ModifyDnssec请求参数结构体
 * @class
 */
class ModifyDnssecRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * DNSSEC 状态
- enabled 开启
- disabled 关闭
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * ModifyZoneSetting请求参数结构体
 * @class
 */
class ModifyZoneSettingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待变更的站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 缓存过期时间配置
         * @type {CacheConfig || null}
         */
        this.Cache = null;

        /**
         * 节点缓存键配置
         * @type {CacheKey || null}
         */
        this.CacheKey = null;

        /**
         * 浏览器缓存配置
         * @type {MaxAge || null}
         */
        this.MaxAge = null;

        /**
         * 离线缓存
         * @type {OfflineCache || null}
         */
        this.OfflineCache = null;

        /**
         * Quic访问
         * @type {Quic || null}
         */
        this.Quic = null;

        /**
         * POST请求传输配置
         * @type {PostMaxSize || null}
         */
        this.PostMaxSize = null;

        /**
         * 智能压缩配置
         * @type {Compression || null}
         */
        this.Compression = null;

        /**
         * http2回源配置
         * @type {UpstreamHttp2 || null}
         */
        this.UpstreamHttp2 = null;

        /**
         * 访问协议强制https跳转配置
         * @type {ForceRedirect || null}
         */
        this.ForceRedirect = null;

        /**
         * Https 加速配置
         * @type {Https || null}
         */
        this.Https = null;

        /**
         * 源站配置
         * @type {Origin || null}
         */
        this.Origin = null;

        /**
         * 智能加速配置
         * @type {SmartRouting || null}
         */
        this.SmartRouting = null;

        /**
         * WebSocket配置
         * @type {WebSocket || null}
         */
        this.WebSocket = null;

        /**
         * 客户端IP回源请求头配置
         * @type {ClientIp || null}
         */
        this.ClientIpHeader = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

        if (params.Cache) {
            let obj = new CacheConfig();
            obj.deserialize(params.Cache)
            this.Cache = obj;
        }

        if (params.CacheKey) {
            let obj = new CacheKey();
            obj.deserialize(params.CacheKey)
            this.CacheKey = obj;
        }

        if (params.MaxAge) {
            let obj = new MaxAge();
            obj.deserialize(params.MaxAge)
            this.MaxAge = obj;
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

        if (params.PostMaxSize) {
            let obj = new PostMaxSize();
            obj.deserialize(params.PostMaxSize)
            this.PostMaxSize = obj;
        }

        if (params.Compression) {
            let obj = new Compression();
            obj.deserialize(params.Compression)
            this.Compression = obj;
        }

        if (params.UpstreamHttp2) {
            let obj = new UpstreamHttp2();
            obj.deserialize(params.UpstreamHttp2)
            this.UpstreamHttp2 = obj;
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

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }

        if (params.SmartRouting) {
            let obj = new SmartRouting();
            obj.deserialize(params.SmartRouting)
            this.SmartRouting = obj;
        }

        if (params.WebSocket) {
            let obj = new WebSocket();
            obj.deserialize(params.WebSocket)
            this.WebSocket = obj;
        }

        if (params.ClientIpHeader) {
            let obj = new ClientIp();
            obj.deserialize(params.ClientIpHeader)
            this.ClientIpHeader = obj;
        }

    }
}

/**
 * DescribeApplicationProxyDetail请求参数结构体
 * @class
 */
class DescribeApplicationProxyDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 实例ID
         * @type {string || null}
         */
        this.ProxyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;

    }
}

/**
 * CreateApplicationProxy返回参数结构体
 * @class
 */
class CreateApplicationProxyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新增的四层代理应用ID
         * @type {string || null}
         */
        this.ProxyId = null;

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
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ImportDnsRecords请求参数结构体
 * @class
 */
class ImportDnsRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 文件内容
         * @type {string || null}
         */
        this.File = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.File = 'File' in params ? params.File : null;

    }
}

/**
 * 不缓存配置
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
 * 源站配置。
 * @class
 */
class Origin extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回源协议配置
http：强制 http 回源
follow：协议跟随回源
https：强制 https 回源，https 回源时仅支持源站 443 端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OriginPullProtocol = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginPullProtocol = 'OriginPullProtocol' in params ? params.OriginPullProtocol : null;

    }
}

/**
 * 内容管理任务结果
 * @class
 */
class Task extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 资源
         * @type {string || null}
         */
        this.Target = null;

        /**
         * 任务类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 任务创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 任务完成时间
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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Target = 'Target' in params ? params.Target : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 查询结果排序条件。
 * @class
 */
class CertSort extends  AbstractModel {
    constructor(){
        super();

        /**
         * 排序字段，当前支持：
createTime，域名创建时间
certExpireTime，证书过期时间
certDeployTime,  证书部署时间
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
 * DescribeHostsSetting返回参数结构体
 * @class
 */
class DescribeHostsSettingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名列表
         * @type {Array.<DetailHost> || null}
         */
        this.Hosts = null;

        /**
         * 域名数量
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

        if (params.Hosts) {
            this.Hosts = new Array();
            for (let z in params.Hosts) {
                let obj = new DetailHost();
                obj.deserialize(params.Hosts[z]);
                this.Hosts.push(obj);
            }
        }
        this.TotalNumber = 'TotalNumber' in params ? params.TotalNumber : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyZone返回参数结构体
 * @class
 */
class ModifyZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 站点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 站点当前使用的 NS
         * @type {Array.<string> || null}
         */
        this.OriginalNameServers = null;

        /**
         * 站点状态
- pending 未接入 NS
- active 已接入 NS
- moved NS 已切走
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 站点接入方式
- full NS 接入
- partial CNAME 接入
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 腾讯云分配的 NS 列表
         * @type {Array.<string> || null}
         */
        this.NameServers = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifiedOn = null;

        /**
         * cname 接入状态
- finished 站点验证完成
- pending 站点验证中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CnameStatus = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.OriginalNameServers = 'OriginalNameServers' in params ? params.OriginalNameServers : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.NameServers = 'NameServers' in params ? params.NameServers : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.CnameStatus = 'CnameStatus' in params ? params.CnameStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyZone请求参数结构体
 * @class
 */
class ModifyZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID，用于唯一标识站点信息
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 站点接入方式
- full NS 接入
- partial CNAME 接入
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 自定义站点信息
         * @type {VanityNameServers || null}
         */
        this.VanityNameServers = null;

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

        if (params.VanityNameServers) {
            let obj = new VanityNameServers();
            obj.deserialize(params.VanityNameServers)
            this.VanityNameServers = obj;
        }

    }
}

/**
 * DeleteZone返回参数结构体
 * @class
 */
class DeleteZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID
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
 * ReclaimZone返回参数结构体
 * @class
 */
class ReclaimZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点名称
         * @type {string || null}
         */
        this.Name = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePurgeTask返回参数结构体
 * @class
 */
class CreatePurgeTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 失败的任务列表及原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FailReason> || null}
         */
        this.FailedList = null;

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

        if (params.FailedList) {
            this.FailedList = new Array();
            for (let z in params.FailedList) {
                let obj = new FailReason();
                obj.deserialize(params.FailedList[z]);
                this.FailedList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteApplicationProxyRule返回参数结构体
 * @class
 */
class DeleteApplicationProxyRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则ID
         * @type {string || null}
         */
        this.RuleId = null;

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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIdentification请求参数结构体
 * @class
 */
class DescribeIdentificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点名称
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
 * CreateDnsRecord请求参数结构体
 * @class
 */
class CreateDnsRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 记录类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 记录名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 记录内容
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 代理模式，可选值：dns_only, cdn_only, secure_cdn
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 生存时间值
         * @type {number || null}
         */
        this.Ttl = null;

        /**
         * 优先级
         * @type {number || null}
         */
        this.Priority = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Ttl = 'Ttl' in params ? params.Ttl : null;
        this.Priority = 'Priority' in params ? params.Priority : null;

    }
}

/**
 * 离线日志详细信息
 * @class
 */
class L7OfflineLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志打包开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LogTime = null;

        /**
         * 站点名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 原始大小 单位byte
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 下载地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 日志数据包名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogPacketName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogTime = 'LogTime' in params ? params.LogTime : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.LogPacketName = 'LogPacketName' in params ? params.LogPacketName : null;

    }
}

/**
 * 应用代理规则
 * @class
 */
class ApplicationProxyRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 协议，取值为TCP或者UDP
         * @type {string || null}
         */
        this.Proto = null;

        /**
         * 端口，支持格式：
80：80端口
81-90：81至90端口
         * @type {Array.<string> || null}
         */
        this.Port = null;

        /**
         * 源站类型，取值：
custom：手动添加
origins：源站组
load_balancing：负载均衡
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * 源站信息：
当OriginType=custom时，表示多个：
IP:端口
域名:端口
当OriginType=origins时，包含一个元素，表示源站组ID
当OriginType=load_balancing时，包含一个元素，表示负载均衡ID
         * @type {Array.<string> || null}
         */
        this.OriginValue = null;

        /**
         * 规则ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 状态：
online：启用
offline：停用
progress：部署中
stopping：停用中
fail：部署失败/停用失败
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 传递客户端IP，当Proto=TCP时，取值：
TOA：TOA
PPV1: Proxy Protocol传递，协议版本V1
PPV2: Proxy Protocol传递，协议版本V2
OFF：不传递
当Proto=UDP时，取值：
PPV2: Proxy Protocol传递，协议版本V2
OFF：不传递
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * 是否开启会话保持
         * @type {boolean || null}
         */
        this.SessionPersist = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Proto = 'Proto' in params ? params.Proto : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.OriginValue = 'OriginValue' in params ? params.OriginValue : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ForwardClientIp = 'ForwardClientIp' in params ? params.ForwardClientIp : null;
        this.SessionPersist = 'SessionPersist' in params ? params.SessionPersist : null;

    }
}

/**
 * 智能加速配置
 * @class
 */
class SmartRouting extends  AbstractModel {
    constructor(){
        super();

        /**
         * 智能加速配置开关
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
 * DescribeDnsData返回参数结构体
 * @class
 */
class DescribeDnsDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计曲线数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DataItem> || null}
         */
        this.Data = null;

        /**
         * 时间粒度
注意：此字段可能返回 null，表示取不到有效值。
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
                let obj = new DataItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 站点信息
 * @class
 */
class Zone extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 站点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 站点当前使用的 NS 列表
         * @type {Array.<string> || null}
         */
        this.OriginalNameServers = null;

        /**
         * 腾讯云分配的 NS 列表
         * @type {Array.<string> || null}
         */
        this.NameServers = null;

        /**
         * 站点状态
- active：NS 已切换
- pending：NS 未切换
- moved：NS 已切走
- deactivated：被封禁
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 站点接入方式
- full：NS 接入
- partial：CNAME 接入
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 站点是否关闭
         * @type {boolean || null}
         */
        this.Paused = null;

        /**
         * 站点创建时间
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * 站点修改时间
         * @type {string || null}
         */
        this.ModifiedOn = null;

        /**
         * cname 接入状态
- finished 站点已验证
- pending 站点验证中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CnameStatus = null;

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
        this.OriginalNameServers = 'OriginalNameServers' in params ? params.OriginalNameServers : null;
        this.NameServers = 'NameServers' in params ? params.NameServers : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Paused = 'Paused' in params ? params.Paused : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.CnameStatus = 'CnameStatus' in params ? params.CnameStatus : null;

    }
}

/**
 * ModifyApplicationProxyStatus请求参数结构体
 * @class
 */
class ModifyApplicationProxyStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 四层代理ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 状态
offline: 停用
online: 启用
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 缓存时间设置
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
         * 是否开启强制缓存
开启：on
关闭：off
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IgnoreCacheControl = null;

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
        this.IgnoreCacheControl = 'IgnoreCacheControl' in params ? params.IgnoreCacheControl : null;

    }
}

/**
 * 证书查询过滤条件
 * @class
 */
class CertFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤字段名，支持的列表如下:
 - host：域名。
 - certId: 证书ID
 - certAlias: 证书备用名
 - certType: default: 默认证书, upload: 上传证书, managed:腾讯云证书
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 过滤字段值
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * 是否启用模糊查询，仅支持过滤字段名host。
模糊查询时，Value长度最大为1。
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
        this.Values = 'Values' in params ? params.Values : null;
        this.Fuzzy = 'Fuzzy' in params ? params.Fuzzy : null;

    }
}

/**
 * ModifyLoadBalancingStatus请求参数结构体
 * @class
 */
class ModifyLoadBalancingStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 负载均衡ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

        /**
         * 状态
online: 启用
offline: 停用
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;
        this.Status = 'Status' in params ? params.Status : null;

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
 * DescribeCnameStatus返回参数结构体
 * @class
 */
class DescribeCnameStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态列表
         * @type {Array.<CnameStatus> || null}
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

        if (params.Status) {
            this.Status = new Array();
            for (let z in params.Status) {
                let obj = new CnameStatus();
                obj.deserialize(params.Status[z]);
                this.Status.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLoadBalancing请求参数结构体
 * @class
 */
class DescribeLoadBalancingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 分页参数Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页参数Limit
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤参数Host
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 过滤参数Host是否支持模糊匹配
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Fuzzy = 'Fuzzy' in params ? params.Fuzzy : null;

    }
}

/**
 * ModifyApplicationProxyRule请求参数结构体
 * @class
 */
class ModifyApplicationProxyRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 代理ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 规则ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 协议，取值为TCP或者UDP
         * @type {string || null}
         */
        this.Proto = null;

        /**
         * 端口，支持格式：
80：80端口
81-90：81至90端口
         * @type {Array.<string> || null}
         */
        this.Port = null;

        /**
         * 源站类型，取值：
custom：手动添加
origins：源站组
load_balancing：负载均衡
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * 源站信息：
当OriginType=custom时，表示多个：
IP:端口
域名:端口
当OriginType=origins时，包含一个元素，表示源站组ID
当OriginType=load_balancing时，包含一个元素，表示负载均衡ID
         * @type {Array.<string> || null}
         */
        this.OriginValue = null;

        /**
         * 传递客户端IP，当Proto=TCP时，取值：
TOA：TOA
PPV1: Proxy Protocol传递，协议版本V1
PPV2: Proxy Protocol传递，协议版本V2
OFF：不传递
当Proto=UDP时，取值：
PPV2: Proxy Protocol传递，协议版本V2
OFF：不传递
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * 是否开启会话保持
         * @type {boolean || null}
         */
        this.SessionPersist = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Proto = 'Proto' in params ? params.Proto : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.OriginValue = 'OriginValue' in params ? params.OriginValue : null;
        this.ForwardClientIp = 'ForwardClientIp' in params ? params.ForwardClientIp : null;
        this.SessionPersist = 'SessionPersist' in params ? params.SessionPersist : null;

    }
}

/**
 * CNAME 状态
 * @class
 */
class CnameStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * CNAME 地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * 状态
生效：active
不生效：moved
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * ModifyZoneSetting返回参数结构体
 * @class
 */
class ModifyZoneSettingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DownloadL7Logs返回参数结构体
 * @class
 */
class DownloadL7LogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 七层离线日志data
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<L7OfflineLog> || null}
         */
        this.Data = null;

        /**
         * 页面大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 页号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * 总页数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Pages = null;

        /**
         * 总条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalSize = null;

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
                let obj = new L7OfflineLog();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.Pages = 'Pages' in params ? params.Pages : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDnsRecord返回参数结构体
 * @class
 */
class CreateDnsRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 记录类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 记录名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 记录内容
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 生存时间值
         * @type {number || null}
         */
        this.Ttl = null;

        /**
         * 优先级
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * 代理模式
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 解析状态
active: 生效
pending: 不生效
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 已锁定
         * @type {boolean || null}
         */
        this.Locked = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifiedOn = null;

        /**
         * 站点 ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 站点名称
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * CNAME 地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Cname = null;

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
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Ttl = 'Ttl' in params ? params.Ttl : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Locked = 'Locked' in params ? params.Locked : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * https 服务端证书配置
 * @class
 */
class ServerCertInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器证书 ID, 默认证书ID, 或在 SSL 证书管理进行证书托管时自动生成
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * 证书备注名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 证书类型:
default: 默认证书
upload:用户上传
managed:腾讯云托管
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 证书过期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 证书部署时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeployTime = null;

        /**
         * 部署状态:
processing: 部署中
deployed: 已部署
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
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.DeployTime = 'DeployTime' in params ? params.DeployTime : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeZones请求参数结构体
 * @class
 */
class DescribeZonesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页参数，页偏移
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页参数，每页返回的站点个数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询条件过滤器，复杂类型
         * @type {Array.<ZoneFilter> || null}
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
                let obj = new ZoneFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * 源站组记录
 * @class
 */
class OriginRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录值
         * @type {string || null}
         */
        this.Record = null;

        /**
         * 当源站配置类型Type=area时，表示区域
当源站类型Type=area时，为空表示默认区域
         * @type {Array.<string> || null}
         */
        this.Area = null;

        /**
         * 当源站配置类型Type=weight时，表示权重
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 端口
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 记录ID
         * @type {string || null}
         */
        this.RecordId = null;

        /**
         * 是否私有鉴权
当源站类型OriginType=third_part时有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Private = null;

        /**
         * 私有鉴权参数
当源站类型Private=true时有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OriginRecordPrivateParameter> || null}
         */
        this.PrivateParameter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Record = 'Record' in params ? params.Record : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.Private = 'Private' in params ? params.Private : null;

        if (params.PrivateParameter) {
            this.PrivateParameter = new Array();
            for (let z in params.PrivateParameter) {
                let obj = new OriginRecordPrivateParameter();
                obj.deserialize(params.PrivateParameter[z]);
                this.PrivateParameter.push(obj);
            }
        }

    }
}

/**
 * CreatePrefetchTask请求参数结构体
 * @class
 */
class CreatePrefetchTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 要预热的资源列表，每个元素格式类似如下:
http://www.example.com/example.txt
         * @type {Array.<string> || null}
         */
        this.Targets = null;

        /**
         * 是否对url进行encode
若内容含有非 ASCII 字符集的字符，请开启此开关，编码转换（编码规则遵循 RFC3986）
         * @type {boolean || null}
         */
        this.EncodeUrl = null;

        /**
         * 附带的http头部信息
         * @type {Array.<Header> || null}
         */
        this.Headers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Targets = 'Targets' in params ? params.Targets : null;
        this.EncodeUrl = 'EncodeUrl' in params ? params.EncodeUrl : null;

        if (params.Headers) {
            this.Headers = new Array();
            for (let z in params.Headers) {
                let obj = new Header();
                obj.deserialize(params.Headers[z]);
                this.Headers.push(obj);
            }
        }

    }
}

/**
 * DeleteApplicationProxyRule请求参数结构体
 * @class
 */
class DeleteApplicationProxyRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 代理ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 规则ID
         * @type {string || null}
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * 缓存遵循源站配置
 * @class
 */
class CacheConfigFollowOrigin extends  AbstractModel {
    constructor(){
        super();

        /**
         * 遵循源站配置开关
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
 * 自定义 nameservers
 * @class
 */
class VanityNameServers extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义 ns 开关
- on 开启
- off 关闭
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 自定义 ns 列表
         * @type {Array.<string> || null}
         */
        this.Servers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Servers = 'Servers' in params ? params.Servers : null;

    }
}

/**
 * DescribeApplicationProxy返回参数结构体
 * @class
 */
class DescribeApplicationProxyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ApplicationProxy> || null}
         */
        this.Data = null;

        /**
         * 记录总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 当ZoneId不为空时，表示当前站点允许创建的实例数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Quota = null;

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
                let obj = new ApplicationProxy();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.Quota = 'Quota' in params ? params.Quota : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLoadBalancing返回参数结构体
 * @class
 */
class CreateLoadBalancingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

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
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IdentifyZone返回参数结构体
 * @class
 */
class IdentifyZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 子域
         * @type {string || null}
         */
        this.Subdomain = null;

        /**
         * 记录类型
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * 记录值
         * @type {string || null}
         */
        this.RecordValue = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Subdomain = 'Subdomain' in params ? params.Subdomain : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.RecordValue = 'RecordValue' in params ? params.RecordValue : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * WebSocket配置
 * @class
 */
class WebSocket extends  AbstractModel {
    constructor(){
        super();

        /**
         * WebSocket 超时配置开关, 开关为off时，平台仍支持WebSocket连接，此时超时时间默认为15秒，若需要调整超时时间，将开关置为on.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 设置超时时间，单位为秒，最大超时时间120秒。
         * @type {number || null}
         */
        this.Timeout = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;

    }
}

/**
 * 统计曲线数据项
 * @class
 */
class DataItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 数值
注意：此字段可能返回 null，表示取不到有效值。
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
 * ModifyLoadBalancing请求参数结构体
 * @class
 */
class ModifyLoadBalancingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 负载均衡ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

        /**
         * 代理模式：
dns_only: 仅DNS
proxied: 开启代理
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 使用的源站组ID
         * @type {Array.<string> || null}
         */
        this.OriginId = null;

        /**
         * 当Type=dns_only表示DNS的TTL时间
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
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
        this.TTL = 'TTL' in params ? params.TTL : null;

    }
}

/**
 * CreateLoadBalancing请求参数结构体
 * @class
 */
class CreateLoadBalancingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 子域名，填写@表示根域
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 代理模式：
dns_only: 仅DNS
proxied: 开启代理
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 使用的源站组ID
         * @type {Array.<string> || null}
         */
        this.OriginId = null;

        /**
         * 当Type=dns_only表示DNS的TTL时间
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
        this.Host = 'Host' in params ? params.Host : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
        this.TTL = 'TTL' in params ? params.TTL : null;

    }
}

/**
 * DescribeDnssec请求参数结构体
 * @class
 */
class DescribeDnssecRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID
         * @type {string || null}
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
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeLoadBalancingDetail返回参数结构体
 * @class
 */
class DescribeLoadBalancingDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 子域名，填写@表示根域
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 代理模式：
dns_only: 仅DNS
proxied: 开启代理
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 当Type=dns_only表示DNS的TTL时间
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * 使用的源站组ID
         * @type {Array.<string> || null}
         */
        this.OriginId = null;

        /**
         * 使用的源站信息
         * @type {Array.<OriginGroup> || null}
         */
        this.Origin = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 调度域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Cname = null;

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
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.OriginId = 'OriginId' in params ? params.OriginId : null;

        if (params.Origin) {
            this.Origin = new Array();
            for (let z in params.Origin) {
                let obj = new OriginGroup();
                obj.deserialize(params.Origin[z]);
                this.Origin.push(obj);
            }
        }
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePrefetchTasks请求参数结构体
 * @class
 */
class DescribePrefetchTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 查询起始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 查询起始偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询最大返回的结果条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询的状态
允许的值为：processing、success、failed、timeout、invalid
         * @type {Array.<string> || null}
         */
        this.Statuses = null;

        /**
         * zone id
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 查询的域名列表
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 查询的资源
         * @type {string || null}
         */
        this.Target = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Statuses = 'Statuses' in params ? params.Statuses : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Target = 'Target' in params ? params.Target : null;

    }
}

/**
 * DNS 记录
 * @class
 */
class DnsRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 记录类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 主机记录
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 记录值
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 代理模式
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * TTL 值
         * @type {number || null}
         */
        this.Ttl = null;

        /**
         * 优先级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifiedOn = null;

        /**
         * 域名锁
         * @type {boolean || null}
         */
        this.Locked = null;

        /**
         * 站点 ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 站点名称
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 解析状态
active: 生效
pending: 不生效
         * @type {string || null}
         */
        this.Status = null;

        /**
         * CNAME 地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * 域名是否开启了lb，四层，安全
- lb 负载均衡
- security 安全
- l4 四层
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.DomainStatus = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Ttl = 'Ttl' in params ? params.Ttl : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.Locked = 'Locked' in params ? params.Locked : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.DomainStatus = 'DomainStatus' in params ? params.DomainStatus : null;

    }
}

/**
 * DescribeDnsRecords请求参数结构体
 * @class
 */
class DescribeDnsRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询条件过滤器
         * @type {Array.<DnsRecordFilter> || null}
         */
        this.Filters = null;

        /**
         * 排序
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 可选值 asc, desc
         * @type {string || null}
         */
        this.Direction = null;

        /**
         * 可选值 all, any
         * @type {string || null}
         */
        this.Match = null;

        /**
         * 分页查询限制数目，默认为 100，最大可设置为 1000
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页查询偏移量，默认为 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 站点 ID
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new DnsRecordFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.Match = 'Match' in params ? params.Match : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * CreatePrefetchTask返回参数结构体
 * @class
 */
class CreatePrefetchTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 失败的任务列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FailReason> || null}
         */
        this.FailedList = null;

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

        if (params.FailedList) {
            this.FailedList = new Array();
            for (let z in params.FailedList) {
                let obj = new FailReason();
                obj.deserialize(params.FailedList[z]);
                this.FailedList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDefaultCertificates请求参数结构体
 * @class
 */
class DescribeDefaultCertificatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID
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
 * ModifyApplicationProxyRule返回参数结构体
 * @class
 */
class ModifyApplicationProxyRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则ID
         * @type {string || null}
         */
        this.RuleId = null;

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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 失败原因
 * @class
 */
class FailReason extends  AbstractModel {
    constructor(){
        super();

        /**
         * 失败原因
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * 处理失败的资源列表。
该列表元素来源于输入参数中的Targets，因此格式和入参中的Targets保持一致
         * @type {Array.<string> || null}
         */
        this.Targets = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.Targets = 'Targets' in params ? params.Targets : null;

    }
}

/**
 * CreateZone请求参数结构体
 * @class
 */
class CreateZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点名字
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 接入方式，默认full
- full NS接入
- partial CNAME接入
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 是否跳过站点历史解析记录扫描
         * @type {boolean || null}
         */
        this.JumpStart = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.JumpStart = 'JumpStart' in params ? params.JumpStart : null;

    }
}

/**
 * 源站记录私有鉴权参数
 * @class
 */
class OriginRecordPrivateParameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私有鉴权参数名称：
"AccessKeyId"：Access Key ID
"SecretAccessKey"：Secret Access Key
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 私有鉴权参数数值
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
 * CheckCertificate返回参数结构体
 * @class
 */
class CheckCertificateResponse extends  AbstractModel {
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
 * DescribePurgeTasks返回参数结构体
 * @class
 */
class DescribePurgeTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该查询条件总共条目数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 任务结果列表
         * @type {Array.<Task> || null}
         */
        this.Tasks = null;

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

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new Task();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DownloadL7Logs请求参数结构体
 * @class
 */
class DownloadL7LogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始时间(需严格按照RFC3339标准传参)
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间(需严格按照RFC3339标准传参)
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 每页展示条数
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 当前页
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * 站点集合
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * 域名集合
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.Zones = 'Zones' in params ? params.Zones : null;
        this.Domains = 'Domains' in params ? params.Domains : null;

    }
}

/**
 * DeleteLoadBalancing返回参数结构体
 * @class
 */
class DeleteLoadBalancingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

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
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckCertificate请求参数结构体
 * @class
 */
class CheckCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书
         * @type {string || null}
         */
        this.Certificate = null;

        /**
         * 私钥
         * @type {string || null}
         */
        this.PrivateKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Certificate = 'Certificate' in params ? params.Certificate : null;
        this.PrivateKey = 'PrivateKey' in params ? params.PrivateKey : null;

    }
}

/**
 * CreateApplicationProxyRule请求参数结构体
 * @class
 */
class CreateApplicationProxyRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 代理ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 协议，取值为TCP或者UDP
         * @type {string || null}
         */
        this.Proto = null;

        /**
         * 端口，支持格式：
80：80端口
81-90：81至90端口
         * @type {Array.<string> || null}
         */
        this.Port = null;

        /**
         * 源站类型，取值：
custom：手动添加
origins：源站组
load_balancing：负载均衡
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * 源站信息：
当OriginType=custom时，表示多个：
IP:端口
域名:端口
当OriginType=origins时，包含一个元素，表示源站组ID
当OriginType=load_balancing时，包含一个元素，表示负载均衡ID
         * @type {Array.<string> || null}
         */
        this.OriginValue = null;

        /**
         * 传递客户端IP，当Proto=TCP时，取值：
TOA：TOA
PPV1: Proxy Protocol传递，协议版本V1
PPV2: Proxy Protocol传递，协议版本V2
OFF：不传递
当Proto=UDP时，取值：
PPV2: Proxy Protocol传递，协议版本V2
OFF：不传递
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * 是否开启会话保持
         * @type {boolean || null}
         */
        this.SessionPersist = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.Proto = 'Proto' in params ? params.Proto : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.OriginValue = 'OriginValue' in params ? params.OriginValue : null;
        this.ForwardClientIp = 'ForwardClientIp' in params ? params.ForwardClientIp : null;
        this.SessionPersist = 'SessionPersist' in params ? params.SessionPersist : null;

    }
}

/**
 * 访问协议强制https跳转配置
 * @class
 */
class ForceRedirect extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问强制跳转配置开关
on：开启
off：关闭
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 重定向状态码
301
302
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RedirectStatusCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.RedirectStatusCode = 'RedirectStatusCode' in params ? params.RedirectStatusCode : null;

    }
}

/**
 * ModifyApplicationProxy请求参数结构体
 * @class
 */
class ModifyApplicationProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 四层代理ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 四层代理名称
         * @type {string || null}
         */
        this.ProxyName = null;

        /**
         * 参数已经废弃
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * 参数已经废弃
         * @type {boolean || null}
         */
        this.SessionPersist = null;

        /**
         * 会话保持时间，取值范围：30-3600，单位：秒
         * @type {number || null}
         */
        this.SessionPersistTime = null;

        /**
         * 服务类型
hostname：子域名
instance：实例
         * @type {string || null}
         */
        this.ProxyType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.ProxyName = 'ProxyName' in params ? params.ProxyName : null;
        this.ForwardClientIp = 'ForwardClientIp' in params ? params.ForwardClientIp : null;
        this.SessionPersist = 'SessionPersist' in params ? params.SessionPersist : null;
        this.SessionPersistTime = 'SessionPersistTime' in params ? params.SessionPersistTime : null;
        this.ProxyType = 'ProxyType' in params ? params.ProxyType : null;

    }
}

/**
 * ModifyApplicationProxyStatus返回参数结构体
 * @class
 */
class ModifyApplicationProxyStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 四层代理ID
         * @type {string || null}
         */
        this.ProxyId = null;

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
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 域名配置信息
 * @class
 */
class DetailHost extends  AbstractModel {
    constructor(){
        super();

        /**
         * 腾讯云账号ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 加速服务状态
process：部署中
online：已启动
offline：已关闭
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Host = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Host = 'Host' in params ? params.Host : null;

    }
}

/**
 * DescribeDnsRecords返回参数结构体
 * @class
 */
class DescribeDnsRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数，用于分页查询
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * DNS 记录列表
         * @type {Array.<DnsRecord> || null}
         */
        this.Records = null;

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

        if (params.Records) {
            this.Records = new Array();
            for (let z in params.Records) {
                let obj = new DnsRecord();
                obj.deserialize(params.Records[z]);
                this.Records.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeApplicationProxyDetail返回参数结构体
 * @class
 */
class DescribeApplicationProxyDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.ProxyName = null;

        /**
         * 调度模式：
ip表示Anycast IP
domain表示CNAME
         * @type {string || null}
         */
        this.PlatType = null;

        /**
         * 0关闭安全，1开启安全
         * @type {number || null}
         */
        this.SecurityType = null;

        /**
         * 0关闭加速，1开启加速
         * @type {number || null}
         */
        this.AccelerateType = null;

        /**
         * 字段已经移至Rule.ForwardClientIp
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * 字段已经移至Rule.SessionPersist
         * @type {boolean || null}
         */
        this.SessionPersist = null;

        /**
         * 规则列表
         * @type {Array.<ApplicationProxyRule> || null}
         */
        this.Rule = null;

        /**
         * 状态：
online：启用
offline：停用
progress：部署中
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 调度信息
         * @type {Array.<string> || null}
         */
        this.ScheduleValue = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 站点名称
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 会话保持时间
         * @type {number || null}
         */
        this.SessionPersistTime = null;

        /**
         * 服务类型
hostname：子域名
instance：实例
         * @type {string || null}
         */
        this.ProxyType = null;

        /**
         * 七层实例ID
         * @type {string || null}
         */
        this.HostId = null;

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
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.ProxyName = 'ProxyName' in params ? params.ProxyName : null;
        this.PlatType = 'PlatType' in params ? params.PlatType : null;
        this.SecurityType = 'SecurityType' in params ? params.SecurityType : null;
        this.AccelerateType = 'AccelerateType' in params ? params.AccelerateType : null;
        this.ForwardClientIp = 'ForwardClientIp' in params ? params.ForwardClientIp : null;
        this.SessionPersist = 'SessionPersist' in params ? params.SessionPersist : null;

        if (params.Rule) {
            this.Rule = new Array();
            for (let z in params.Rule) {
                let obj = new ApplicationProxyRule();
                obj.deserialize(params.Rule[z]);
                this.Rule.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ScheduleValue = 'ScheduleValue' in params ? params.ScheduleValue : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.SessionPersistTime = 'SessionPersistTime' in params ? params.SessionPersistTime : null;
        this.ProxyType = 'ProxyType' in params ? params.ProxyType : null;
        this.HostId = 'HostId' in params ? params.HostId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyZoneCnameSpeedUp请求参数结构体
 * @class
 */
class ModifyZoneCnameSpeedUpRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * CNAME 加速状态
- enabled 开启
- disabled 关闭
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeHostsCertificate请求参数结构体
 * @class
 */
class DescribeHostsCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID
         * @type {string || null}
         */
        this.ZoneId = null;

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
         * 查询条件过滤器
         * @type {Array.<CertFilter> || null}
         */
        this.Filters = null;

        /**
         * 排序方式
         * @type {CertSort || null}
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new CertFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.Sort) {
            let obj = new CertSort();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }

    }
}

/**
 * Hsts配置
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

        /**
         * 是否预加载，on或off。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Preload = null;

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
        this.Preload = 'Preload' in params ? params.Preload : null;

    }
}

/**
 * ModifyHostsCertificate返回参数结构体
 * @class
 */
class ModifyHostsCertificateResponse extends  AbstractModel {
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
 * ModifyLoadBalancing返回参数结构体
 * @class
 */
class ModifyLoadBalancingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

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
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateApplicationProxyRule返回参数结构体
 * @class
 */
class CreateApplicationProxyRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则ID
         * @type {string || null}
         */
        this.RuleId = null;

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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDnsRecord返回参数结构体
 * @class
 */
class ModifyDnsRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 记录类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 记录名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 记录内容
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 生存时间值
         * @type {number || null}
         */
        this.Ttl = null;

        /**
         * 优先级
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * 代理模式
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 解析状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * CNAME 地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * 锁定状态
         * @type {boolean || null}
         */
        this.Locked = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifiedOn = null;

        /**
         * 站点 ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 站点名称
         * @type {string || null}
         */
        this.ZoneName = null;

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
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Ttl = 'Ttl' in params ? params.Ttl : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.Locked = 'Locked' in params ? params.Locked : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateApplicationProxy请求参数结构体
 * @class
 */
class CreateApplicationProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 站点名称
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 四层代理名称
         * @type {string || null}
         */
        this.ProxyName = null;

        /**
         * 调度模式：
ip表示Anycast IP
domain表示CNAME
         * @type {string || null}
         */
        this.PlatType = null;

        /**
         * 0关闭安全，1开启安全
         * @type {number || null}
         */
        this.SecurityType = null;

        /**
         * 0关闭加速，1开启加速
         * @type {number || null}
         */
        this.AccelerateType = null;

        /**
         * 字段已经移至Rule.ForwardClientIp
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * 字段已经移至Rule.SessionPersist
         * @type {boolean || null}
         */
        this.SessionPersist = null;

        /**
         * 规则详细信息
         * @type {Array.<ApplicationProxyRule> || null}
         */
        this.Rule = null;

        /**
         * 会话保持时间，取值范围：30-3600，单位：秒
         * @type {number || null}
         */
        this.SessionPersistTime = null;

        /**
         * 服务类型
hostname：子域名
instance：实例
         * @type {string || null}
         */
        this.ProxyType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ProxyName = 'ProxyName' in params ? params.ProxyName : null;
        this.PlatType = 'PlatType' in params ? params.PlatType : null;
        this.SecurityType = 'SecurityType' in params ? params.SecurityType : null;
        this.AccelerateType = 'AccelerateType' in params ? params.AccelerateType : null;
        this.ForwardClientIp = 'ForwardClientIp' in params ? params.ForwardClientIp : null;
        this.SessionPersist = 'SessionPersist' in params ? params.SessionPersist : null;

        if (params.Rule) {
            this.Rule = new Array();
            for (let z in params.Rule) {
                let obj = new ApplicationProxyRule();
                obj.deserialize(params.Rule[z]);
                this.Rule.push(obj);
            }
        }
        this.SessionPersistTime = 'SessionPersistTime' in params ? params.SessionPersistTime : null;
        this.ProxyType = 'ProxyType' in params ? params.ProxyType : null;

    }
}

/**
 * POST请求上传文件流式传输最大限制
 * @class
 */
class PostMaxSize extends  AbstractModel {
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
         * 最大限制，取值在1MB和500MB之间。单位字节
注意：此字段可能返回 null，表示取不到有效值。
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
 * DescribeCnameStatus请求参数结构体
 * @class
 */
class DescribeCnameStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 域名列表
         * @type {Array.<string> || null}
         */
        this.Names = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Names = 'Names' in params ? params.Names : null;

    }
}

/**
 * DescribeDnssec返回参数结构体
 * @class
 */
class DescribeDnssecResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 站点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * DNSSEC 状态
- enabled 开启
- disabled 关闭
         * @type {string || null}
         */
        this.Status = null;

        /**
         * DNSSEC 相关信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DnssecInfo || null}
         */
        this.Dnssec = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifiedOn = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Dnssec) {
            let obj = new DnssecInfo();
            obj.deserialize(params.Dnssec)
            this.Dnssec = obj;
        }
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateZone返回参数结构体
 * @class
 */
class CreateZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 站点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 站点接入方式
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 站点状态
- pending 未切换NS
- active NS 已切换到分配的 NS
- moved NS 从腾讯云切走
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 当前使用的 NS 列表
         * @type {Array.<string> || null}
         */
        this.OriginalNameServers = null;

        /**
         * 给用户分配的 NS 列表
         * @type {Array.<string> || null}
         */
        this.NameServers = null;

        /**
         * 站点创建时间
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * 站点更新时间
         * @type {string || null}
         */
        this.ModifiedOn = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OriginalNameServers = 'OriginalNameServers' in params ? params.OriginalNameServers : null;
        this.NameServers = 'NameServers' in params ? params.NameServers : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Dns数据曲线过滤参数
 * @class
 */
class DnsDataFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数名称，取值范围：
zone：站点名
host：域名
type：dns解析类型
code：dns返回状态码
area：解析服务器所在区域
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 参数值
当Name=area时，Value取值范围：
亚洲：Asia
欧洲：Europe
非洲：Africa
大洋洲：Oceania
美洲：Americas

当Name=code时，Value取值范围：
NoError：成功的响应
NXDomain：只在权威域名服务器的响应消息中有效，标示请求中请求的域不存在
NotImp：域名服务器不支持请求的类型
Refused：域名服务器因为策略的原因拒绝执行请求的操作
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 参数值
当Name=area时，Value取值范围：
亚洲：Asia
欧洲：Europe
非洲：Africa
大洋洲：Oceania
美洲：Americas

当Name=code时，Value取值范围：
NoError：成功的响应
NXDomain：只在权威域名服务器的响应消息中有效，标示请求中请求的域不存在
NotImp：域名服务器不支持请求的类型
Refused：域名服务器因为策略的原因拒绝执行请求的操作
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
        this.Value = 'Value' in params ? params.Value : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * DeleteLoadBalancing请求参数结构体
 * @class
 */
class DeleteLoadBalancingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 负载均衡ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;

    }
}

/**
 * 应用代理实例
 * @class
 */
class ApplicationProxy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.ProxyName = null;

        /**
         * 调度模式：
ip表示Anycast IP
domain表示CNAME
         * @type {string || null}
         */
        this.PlatType = null;

        /**
         * 0关闭安全，1开启安全
         * @type {number || null}
         */
        this.SecurityType = null;

        /**
         * 0关闭加速，1开启加速
         * @type {number || null}
         */
        this.AccelerateType = null;

        /**
         * 字段已经移至Rule.ForwardClientIp
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * 字段已经移至Rule.SessionPersist
         * @type {boolean || null}
         */
        this.SessionPersist = null;

        /**
         * 规则列表
         * @type {Array.<ApplicationProxyRule> || null}
         */
        this.Rule = null;

        /**
         * 状态：
online：启用
offline：停用
progress：部署中
stopping：停用中
fail：部署失败/停用失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 调度信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ScheduleValue = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 站点ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 站点名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 会话保持时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SessionPersistTime = null;

        /**
         * 服务类型
hostname：子域名
instance：实例
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProxyType = null;

        /**
         * 七层实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HostId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.ProxyName = 'ProxyName' in params ? params.ProxyName : null;
        this.PlatType = 'PlatType' in params ? params.PlatType : null;
        this.SecurityType = 'SecurityType' in params ? params.SecurityType : null;
        this.AccelerateType = 'AccelerateType' in params ? params.AccelerateType : null;
        this.ForwardClientIp = 'ForwardClientIp' in params ? params.ForwardClientIp : null;
        this.SessionPersist = 'SessionPersist' in params ? params.SessionPersist : null;

        if (params.Rule) {
            this.Rule = new Array();
            for (let z in params.Rule) {
                let obj = new ApplicationProxyRule();
                obj.deserialize(params.Rule[z]);
                this.Rule.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ScheduleValue = 'ScheduleValue' in params ? params.ScheduleValue : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.SessionPersistTime = 'SessionPersistTime' in params ? params.SessionPersistTime : null;
        this.ProxyType = 'ProxyType' in params ? params.ProxyType : null;
        this.HostId = 'HostId' in params ? params.HostId : null;

    }
}

/**
 * ModifyApplicationProxy返回参数结构体
 * @class
 */
class ModifyApplicationProxyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 四层代理ID
         * @type {string || null}
         */
        this.ProxyId = null;

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
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 缓存键配置
 * @class
 */
class CacheKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启全路径缓存
on：开启全路径缓存（即关闭参数忽略）
off：关闭全路径缓存（即开启参数忽略）
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
         * @type {QueryString || null}
         */
        this.QueryString = null;

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
            let obj = new QueryString();
            obj.deserialize(params.QueryString)
            this.QueryString = obj;
        }

    }
}

/**
 * ModifyApplicationProxyRuleStatus返回参数结构体
 * @class
 */
class ModifyApplicationProxyRuleStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则ID
         * @type {string || null}
         */
        this.RuleId = null;

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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeZones返回参数结构体
 * @class
 */
class DescribeZonesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的站点数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 站点详细信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Zone> || null}
         */
        this.Zones = null;

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

        if (params.Zones) {
            this.Zones = new Array();
            for (let z in params.Zones) {
                let obj = new Zone();
                obj.deserialize(params.Zones[z]);
                this.Zones.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 刷新预热附带的头部信息
 * @class
 */
class Header extends  AbstractModel {
    constructor(){
        super();

        /**
         * HTTP头部
         * @type {string || null}
         */
        this.Name = null;

        /**
         * HTTP头部值
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
 * DescribeZoneDetails请求参数结构体
 * @class
 */
class DescribeZoneDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID
         * @type {string || null}
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
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeDefaultCertificates返回参数结构体
 * @class
 */
class DescribeDefaultCertificatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 默认证书列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DefaultServerCertInfo> || null}
         */
        this.CertInfo = null;

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

        if (params.CertInfo) {
            this.CertInfo = new Array();
            for (let z in params.CertInfo) {
                let obj = new DefaultServerCertInfo();
                obj.deserialize(params.CertInfo[z]);
                this.CertInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeApplicationProxy请求参数结构体
 * @class
 */
class DescribeApplicationProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 分页参数Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页参数Limit
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyApplicationProxyRuleStatus请求参数结构体
 * @class
 */
class ModifyApplicationProxyRuleStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 四层代理ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 规则ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 状态
offline: 停用
online: 启用
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * CacheKey中包含请求参数
 * @class
 */
class QueryString extends  AbstractModel {
    constructor(){
        super();

        /**
         * on | off CacheKey是否由QueryString组成
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * includeCustom:使用部分url参数
excludeCustom:排除部分url参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 使用/排除的url参数数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
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
 * ReclaimZone请求参数结构体
 * @class
 */
class ReclaimZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点名称
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
 * DeleteZone请求参数结构体
 * @class
 */
class DeleteZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID
         * @type {string || null}
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
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * ModifyDefaultCertificate返回参数结构体
 * @class
 */
class ModifyDefaultCertificateResponse extends  AbstractModel {
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
 * 客户端IP头部
 * @class
 */
class ClientIp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户端IP头部配置开关
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 回源客户端IP请求头名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HeaderName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.HeaderName = 'HeaderName' in params ? params.HeaderName : null;

    }
}

/**
 * DescribeHostsCertificate返回参数结构体
 * @class
 */
class DescribeHostsCertificateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数，用于分页查询
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 域名证书配置列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<HostCertSetting> || null}
         */
        this.Hosts = null;

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

        if (params.Hosts) {
            this.Hosts = new Array();
            for (let z in params.Hosts) {
                let obj = new HostCertSetting();
                obj.deserialize(params.Hosts[z]);
                this.Hosts.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeZoneSetting返回参数结构体
 * @class
 */
class DescribeZoneSettingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 缓存过期时间配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CacheConfig || null}
         */
        this.Cache = null;

        /**
         * 节点缓存键配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CacheKey || null}
         */
        this.CacheKey = null;

        /**
         * 浏览器缓存配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MaxAge || null}
         */
        this.MaxAge = null;

        /**
         * 离线缓存
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OfflineCache || null}
         */
        this.OfflineCache = null;

        /**
         * Quic访问
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Quic || null}
         */
        this.Quic = null;

        /**
         * POST请求传输配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PostMaxSize || null}
         */
        this.PostMaxSize = null;

        /**
         * 智能压缩配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Compression || null}
         */
        this.Compression = null;

        /**
         * http2回源配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {UpstreamHttp2 || null}
         */
        this.UpstreamHttp2 = null;

        /**
         * 访问协议强制https跳转配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ForceRedirect || null}
         */
        this.ForceRedirect = null;

        /**
         * Https 加速配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Https || null}
         */
        this.Https = null;

        /**
         * 源站配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Origin || null}
         */
        this.Origin = null;

        /**
         * 动态加速配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SmartRouting || null}
         */
        this.SmartRouting = null;

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 站点域名
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * WebSocket配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {WebSocket || null}
         */
        this.WebSocket = null;

        /**
         * 客户端IP回源请求头配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ClientIp || null}
         */
        this.ClientIpHeader = null;

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

        if (params.Cache) {
            let obj = new CacheConfig();
            obj.deserialize(params.Cache)
            this.Cache = obj;
        }

        if (params.CacheKey) {
            let obj = new CacheKey();
            obj.deserialize(params.CacheKey)
            this.CacheKey = obj;
        }

        if (params.MaxAge) {
            let obj = new MaxAge();
            obj.deserialize(params.MaxAge)
            this.MaxAge = obj;
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

        if (params.PostMaxSize) {
            let obj = new PostMaxSize();
            obj.deserialize(params.PostMaxSize)
            this.PostMaxSize = obj;
        }

        if (params.Compression) {
            let obj = new Compression();
            obj.deserialize(params.Compression)
            this.Compression = obj;
        }

        if (params.UpstreamHttp2) {
            let obj = new UpstreamHttp2();
            obj.deserialize(params.UpstreamHttp2)
            this.UpstreamHttp2 = obj;
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

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }

        if (params.SmartRouting) {
            let obj = new SmartRouting();
            obj.deserialize(params.SmartRouting)
            this.SmartRouting = obj;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

        if (params.WebSocket) {
            let obj = new WebSocket();
            obj.deserialize(params.WebSocket)
            this.WebSocket = obj;
        }

        if (params.ClientIpHeader) {
            let obj = new ClientIp();
            obj.deserialize(params.ClientIpHeader)
            this.ClientIpHeader = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 任务ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 查询起始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 查询起始偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询最大返回的结果条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询的状态
允许的值为：processing、success、failed、timeout、invalid
         * @type {Array.<string> || null}
         */
        this.Statuses = null;

        /**
         * zone id
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 查询的域名列表
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 查询内容
         * @type {string || null}
         */
        this.Target = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Statuses = 'Statuses' in params ? params.Statuses : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Target = 'Target' in params ? params.Target : null;

    }
}

/**
 * IdentifyZone请求参数结构体
 * @class
 */
class IdentifyZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点名称
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
 * 缓存规则配置。
 * @class
 */
class CacheConfig extends  AbstractModel {
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
 * ModifyZoneCnameSpeedUp返回参数结构体
 * @class
 */
class ModifyZoneCnameSpeedUpResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 站点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * CNAME 加速状态
- enabled 开启
- disabled 关闭
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.ModifiedOn = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 浏览器缓存规则配置，用于设置 MaxAge 默认值，默认为关闭状态
 * @class
 */
class MaxAge extends  AbstractModel {
    constructor(){
        super();

        /**
         * MaxAge 时间设置，单位秒，最大365天
注意：时间为0，即不缓存。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.MaxAgeTime = 'MaxAgeTime' in params ? params.MaxAgeTime : null;
        this.FollowOrigin = 'FollowOrigin' in params ? params.FollowOrigin : null;

    }
}

/**
 * DeleteDnsRecords请求参数结构体
 * @class
 */
class DeleteDnsRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 记录 ID
         * @type {Array.<string> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * ModifyHostsCertificate请求参数结构体
 * @class
 */
class ModifyHostsCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 本次变更的域名
         * @type {Array.<string> || null}
         */
        this.Hosts = null;

        /**
         * 证书信息, 只需要传入 CertId 即可, 如果为空, 则使用默认证书
         * @type {Array.<ServerCertInfo> || null}
         */
        this.CertInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Hosts = 'Hosts' in params ? params.Hosts : null;

        if (params.CertInfo) {
            this.CertInfo = new Array();
            for (let z in params.CertInfo) {
                let obj = new ServerCertInfo();
                obj.deserialize(params.CertInfo[z]);
                this.CertInfo.push(obj);
            }
        }

    }
}

/**
 * ModifyZoneStatus返回参数结构体
 * @class
 */
class ModifyZoneStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 站点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 站点状态
- false 开启站点
- true 关闭站点
         * @type {boolean || null}
         */
        this.Paused = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.ModifiedOn = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Paused = 'Paused' in params ? params.Paused : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDnsData请求参数结构体
 * @class
 */
class DescribeDnsDataRequest extends  AbstractModel {
    constructor(){
        super();

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
         * 过滤参数
         * @type {Array.<DnsDataFilter> || null}
         */
        this.Filters = null;

        /**
         * 时间粒度，默认为1分钟粒度，服务端根据时间范围自适应。
支持指定以下几种粒度：
min：1分钟粒度
5min：5分钟粒度
hour：1小时粒度
day：天粒度
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new DnsDataFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Interval = 'Interval' in params ? params.Interval : null;

    }
}

/**
 * CreatePurgeTask请求参数结构体
 * @class
 */
class CreatePurgeTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 类型，当前支持的类型：
- purge_url：URL
- purge_prefix：前缀
- purge_host：Hostname
- purge_all：全部缓存
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 要刷新的资源列表，每个元素格式依据Type而定
1) Type = purge_host 时
形如：www.example.com 或 foo.bar.example.com
2) Type = purge_prefix 时
形如：http://www.example.com/example
3) Type = purge_url 时
形如：https://www.example.com/example.jpg
4）Type = purge_all 时
Targets可为空，不需要填写
         * @type {Array.<string> || null}
         */
        this.Targets = null;

        /**
         * 若有编码转换，仅清除编码转换后匹配的资源
若内容含有非 ASCII 字符集的字符，请开启此开关，编码转换（编码规则遵循 RFC3986）
         * @type {boolean || null}
         */
        this.EncodeUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Targets = 'Targets' in params ? params.Targets : null;
        this.EncodeUrl = 'EncodeUrl' in params ? params.EncodeUrl : null;

    }
}

/**
 * DeleteDnsRecords返回参数结构体
 * @class
 */
class DeleteDnsRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录 ID
         * @type {Array.<string> || null}
         */
        this.Ids = null;

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
        this.Ids = 'Ids' in params ? params.Ids : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeHostsSetting请求参数结构体
 * @class
 */
class DescribeHostsSettingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

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
         * 指定域名查询
         * @type {Array.<string> || null}
         */
        this.Hosts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Hosts = 'Hosts' in params ? params.Hosts : null;

    }
}

/**
 * CreateApplicationProxyRules返回参数结构体
 * @class
 */
class CreateApplicationProxyRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新增的规则ID数组
         * @type {Array.<string> || null}
         */
        this.RuleId = null;

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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIdentification返回参数结构体
 * @class
 */
class DescribeIdentificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 验证状态
- pending 验证中
- finished 验证完成
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 子域
         * @type {string || null}
         */
        this.Subdomain = null;

        /**
         * 记录类型
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * 记录值
         * @type {string || null}
         */
        this.RecordValue = null;

        /**
         * 域名当前的 NS 记录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.OriginalNameServers = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Subdomain = 'Subdomain' in params ? params.Subdomain : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.RecordValue = 'RecordValue' in params ? params.RecordValue : null;
        this.OriginalNameServers = 'OriginalNameServers' in params ? params.OriginalNameServers : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 源站组信息
 * @class
 */
class OriginGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源站组ID
         * @type {string || null}
         */
        this.OriginId = null;

        /**
         * 源站组名称
         * @type {string || null}
         */
        this.OriginName = null;

        /**
         * 配置类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 记录
         * @type {Array.<OriginRecord> || null}
         */
        this.Record = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 站点名称
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 源站类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * 是否为四层代理使用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.ApplicationProxyUsed = null;

        /**
         * 是否为负载均衡使用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.LoadBalancingUsed = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
        this.OriginName = 'OriginName' in params ? params.OriginName : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Record) {
            this.Record = new Array();
            for (let z in params.Record) {
                let obj = new OriginRecord();
                obj.deserialize(params.Record[z]);
                this.Record.push(obj);
            }
        }
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.ApplicationProxyUsed = 'ApplicationProxyUsed' in params ? params.ApplicationProxyUsed : null;
        this.LoadBalancingUsed = 'LoadBalancingUsed' in params ? params.LoadBalancingUsed : null;

    }
}

/**
 * DescribeLoadBalancing返回参数结构体
 * @class
 */
class DescribeLoadBalancingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 负载均衡信息
         * @type {Array.<LoadBalancing> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new LoadBalancing();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDnssec返回参数结构体
 * @class
 */
class ModifyDnssecResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 站点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * DNSSEC 状态
- enabled 开启
- disabled 关闭
         * @type {string || null}
         */
        this.Status = null;

        /**
         * DNSSEC 相关信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DnssecInfo || null}
         */
        this.Dnssec = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifiedOn = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Dnssec) {
            let obj = new DnssecInfo();
            obj.deserialize(params.Dnssec)
            this.Dnssec = obj;
        }
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ScanDnsRecords请求参数结构体
 * @class
 */
class ScanDnsRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID
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
 * ImportDnsRecords返回参数结构体
 * @class
 */
class ImportDnsRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录 ID
         * @type {Array.<string> || null}
         */
        this.Ids = null;

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
        this.Ids = 'Ids' in params ? params.Ids : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLoadBalancingDetail请求参数结构体
 * @class
 */
class DescribeLoadBalancingDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 负载均衡ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;

    }
}

/**
 * https 服务端证书配置
 * @class
 */
class DefaultServerCertInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器证书 ID, 默认证书ID, 或在 SSL 证书管理进行证书托管时自动生成
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * 证书备注名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 证书类型:
default: 默认证书
upload:用户上传
managed:腾讯云托管
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 证书过期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 证书生效时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EffectiveTime = null;

        /**
         * 证书公用名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CommonName = null;

        /**
         * 证书SAN域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SubjectAltName = null;

        /**
         * 证书状态:
applying: 证书申请中
failed: 证书(申请)失败
processing: 证书部署中
deployed: 证书已部署
disabled: 证书被禁用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Status为失败时,此字段返回失败原因
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
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.EffectiveTime = 'EffectiveTime' in params ? params.EffectiveTime : null;
        this.CommonName = 'CommonName' in params ? params.CommonName : null;
        this.SubjectAltName = 'SubjectAltName' in params ? params.SubjectAltName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * DNSSEC 相关信息
 * @class
 */
class DnssecInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标志
         * @type {number || null}
         */
        this.Flags = null;

        /**
         * 加密算法
         * @type {string || null}
         */
        this.Algorithm = null;

        /**
         * 加密类型
         * @type {string || null}
         */
        this.KeyType = null;

        /**
         * 摘要类型
         * @type {string || null}
         */
        this.DigestType = null;

        /**
         * 摘要算法
         * @type {string || null}
         */
        this.DigestAlgorithm = null;

        /**
         * 摘要信息
         * @type {string || null}
         */
        this.Digest = null;

        /**
         * DS 记录值
         * @type {string || null}
         */
        this.DS = null;

        /**
         * 密钥标签
         * @type {number || null}
         */
        this.KeyTag = null;

        /**
         * 公钥
         * @type {string || null}
         */
        this.PublicKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Flags = 'Flags' in params ? params.Flags : null;
        this.Algorithm = 'Algorithm' in params ? params.Algorithm : null;
        this.KeyType = 'KeyType' in params ? params.KeyType : null;
        this.DigestType = 'DigestType' in params ? params.DigestType : null;
        this.DigestAlgorithm = 'DigestAlgorithm' in params ? params.DigestAlgorithm : null;
        this.Digest = 'Digest' in params ? params.Digest : null;
        this.DS = 'DS' in params ? params.DS : null;
        this.KeyTag = 'KeyTag' in params ? params.KeyTag : null;
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;

    }
}

/**
 * DNS 记录查询过滤条件
 * @class
 */
class DnsRecordFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤字段名，支持的列表如下：
- name: 站点名。
- status: 站点状态
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 过滤字段值
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * 是否启用模糊查询，仅支持过滤字段名为name。模糊查询时，Values长度最大为1
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
        this.Values = 'Values' in params ? params.Values : null;
        this.Fuzzy = 'Fuzzy' in params ? params.Fuzzy : null;

    }
}

/**
 * Http2回源配置
 * @class
 */
class UpstreamHttp2 extends  AbstractModel {
    constructor(){
        super();

        /**
         * http2回源配置开关
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
 * 离线缓存是否开启
 * @class
 */
class OfflineCache extends  AbstractModel {
    constructor(){
        super();

        /**
         * on | off, 离线缓存是否开启
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
 * 自定义名字服务器 IP 信息
 * @class
 */
class VanityNameServersIps extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义名字服务器名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 自定义名字服务器 IPv4 地址
         * @type {string || null}
         */
        this.IPv4 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.IPv4 = 'IPv4' in params ? params.IPv4 : null;

    }
}

module.exports = {
    Compression: Compression,
    HostCertSetting: HostCertSetting,
    ModifyDefaultCertificateRequest: ModifyDefaultCertificateRequest,
    DescribeZoneDetailsResponse: DescribeZoneDetailsResponse,
    DeleteApplicationProxyResponse: DeleteApplicationProxyResponse,
    Https: Https,
    ScanDnsRecordsResponse: ScanDnsRecordsResponse,
    ZoneFilter: ZoneFilter,
    ModifyLoadBalancingStatusResponse: ModifyLoadBalancingStatusResponse,
    DescribePrefetchTasksResponse: DescribePrefetchTasksResponse,
    DeleteApplicationProxyRequest: DeleteApplicationProxyRequest,
    DescribeZoneSettingRequest: DescribeZoneSettingRequest,
    ModifyZoneStatusRequest: ModifyZoneStatusRequest,
    ModifyDnsRecordRequest: ModifyDnsRecordRequest,
    CreateApplicationProxyRulesRequest: CreateApplicationProxyRulesRequest,
    LoadBalancing: LoadBalancing,
    ModifyDnssecRequest: ModifyDnssecRequest,
    ModifyZoneSettingRequest: ModifyZoneSettingRequest,
    DescribeApplicationProxyDetailRequest: DescribeApplicationProxyDetailRequest,
    CreateApplicationProxyResponse: CreateApplicationProxyResponse,
    ImportDnsRecordsRequest: ImportDnsRecordsRequest,
    CacheConfigNoCache: CacheConfigNoCache,
    Origin: Origin,
    Task: Task,
    CertSort: CertSort,
    DescribeHostsSettingResponse: DescribeHostsSettingResponse,
    ModifyZoneResponse: ModifyZoneResponse,
    ModifyZoneRequest: ModifyZoneRequest,
    DeleteZoneResponse: DeleteZoneResponse,
    ReclaimZoneResponse: ReclaimZoneResponse,
    CreatePurgeTaskResponse: CreatePurgeTaskResponse,
    DeleteApplicationProxyRuleResponse: DeleteApplicationProxyRuleResponse,
    DescribeIdentificationRequest: DescribeIdentificationRequest,
    CreateDnsRecordRequest: CreateDnsRecordRequest,
    L7OfflineLog: L7OfflineLog,
    ApplicationProxyRule: ApplicationProxyRule,
    SmartRouting: SmartRouting,
    DescribeDnsDataResponse: DescribeDnsDataResponse,
    Zone: Zone,
    ModifyApplicationProxyStatusRequest: ModifyApplicationProxyStatusRequest,
    CacheConfigCache: CacheConfigCache,
    CertFilter: CertFilter,
    ModifyLoadBalancingStatusRequest: ModifyLoadBalancingStatusRequest,
    Quic: Quic,
    DescribeCnameStatusResponse: DescribeCnameStatusResponse,
    DescribeLoadBalancingRequest: DescribeLoadBalancingRequest,
    ModifyApplicationProxyRuleRequest: ModifyApplicationProxyRuleRequest,
    CnameStatus: CnameStatus,
    ModifyZoneSettingResponse: ModifyZoneSettingResponse,
    DownloadL7LogsResponse: DownloadL7LogsResponse,
    CreateDnsRecordResponse: CreateDnsRecordResponse,
    ServerCertInfo: ServerCertInfo,
    DescribeZonesRequest: DescribeZonesRequest,
    OriginRecord: OriginRecord,
    CreatePrefetchTaskRequest: CreatePrefetchTaskRequest,
    DeleteApplicationProxyRuleRequest: DeleteApplicationProxyRuleRequest,
    CacheConfigFollowOrigin: CacheConfigFollowOrigin,
    VanityNameServers: VanityNameServers,
    DescribeApplicationProxyResponse: DescribeApplicationProxyResponse,
    CreateLoadBalancingResponse: CreateLoadBalancingResponse,
    IdentifyZoneResponse: IdentifyZoneResponse,
    WebSocket: WebSocket,
    DataItem: DataItem,
    ModifyLoadBalancingRequest: ModifyLoadBalancingRequest,
    CreateLoadBalancingRequest: CreateLoadBalancingRequest,
    DescribeDnssecRequest: DescribeDnssecRequest,
    DescribeLoadBalancingDetailResponse: DescribeLoadBalancingDetailResponse,
    DescribePrefetchTasksRequest: DescribePrefetchTasksRequest,
    DnsRecord: DnsRecord,
    DescribeDnsRecordsRequest: DescribeDnsRecordsRequest,
    CreatePrefetchTaskResponse: CreatePrefetchTaskResponse,
    DescribeDefaultCertificatesRequest: DescribeDefaultCertificatesRequest,
    ModifyApplicationProxyRuleResponse: ModifyApplicationProxyRuleResponse,
    FailReason: FailReason,
    CreateZoneRequest: CreateZoneRequest,
    OriginRecordPrivateParameter: OriginRecordPrivateParameter,
    CheckCertificateResponse: CheckCertificateResponse,
    DescribePurgeTasksResponse: DescribePurgeTasksResponse,
    DownloadL7LogsRequest: DownloadL7LogsRequest,
    DeleteLoadBalancingResponse: DeleteLoadBalancingResponse,
    CheckCertificateRequest: CheckCertificateRequest,
    CreateApplicationProxyRuleRequest: CreateApplicationProxyRuleRequest,
    ForceRedirect: ForceRedirect,
    ModifyApplicationProxyRequest: ModifyApplicationProxyRequest,
    ModifyApplicationProxyStatusResponse: ModifyApplicationProxyStatusResponse,
    DetailHost: DetailHost,
    DescribeDnsRecordsResponse: DescribeDnsRecordsResponse,
    DescribeApplicationProxyDetailResponse: DescribeApplicationProxyDetailResponse,
    ModifyZoneCnameSpeedUpRequest: ModifyZoneCnameSpeedUpRequest,
    DescribeHostsCertificateRequest: DescribeHostsCertificateRequest,
    Hsts: Hsts,
    ModifyHostsCertificateResponse: ModifyHostsCertificateResponse,
    ModifyLoadBalancingResponse: ModifyLoadBalancingResponse,
    CreateApplicationProxyRuleResponse: CreateApplicationProxyRuleResponse,
    ModifyDnsRecordResponse: ModifyDnsRecordResponse,
    CreateApplicationProxyRequest: CreateApplicationProxyRequest,
    PostMaxSize: PostMaxSize,
    DescribeCnameStatusRequest: DescribeCnameStatusRequest,
    DescribeDnssecResponse: DescribeDnssecResponse,
    CreateZoneResponse: CreateZoneResponse,
    DnsDataFilter: DnsDataFilter,
    DeleteLoadBalancingRequest: DeleteLoadBalancingRequest,
    ApplicationProxy: ApplicationProxy,
    ModifyApplicationProxyResponse: ModifyApplicationProxyResponse,
    CacheKey: CacheKey,
    ModifyApplicationProxyRuleStatusResponse: ModifyApplicationProxyRuleStatusResponse,
    DescribeZonesResponse: DescribeZonesResponse,
    Header: Header,
    DescribeZoneDetailsRequest: DescribeZoneDetailsRequest,
    DescribeDefaultCertificatesResponse: DescribeDefaultCertificatesResponse,
    DescribeApplicationProxyRequest: DescribeApplicationProxyRequest,
    ModifyApplicationProxyRuleStatusRequest: ModifyApplicationProxyRuleStatusRequest,
    QueryString: QueryString,
    ReclaimZoneRequest: ReclaimZoneRequest,
    DeleteZoneRequest: DeleteZoneRequest,
    ModifyDefaultCertificateResponse: ModifyDefaultCertificateResponse,
    ClientIp: ClientIp,
    DescribeHostsCertificateResponse: DescribeHostsCertificateResponse,
    DescribeZoneSettingResponse: DescribeZoneSettingResponse,
    DescribePurgeTasksRequest: DescribePurgeTasksRequest,
    IdentifyZoneRequest: IdentifyZoneRequest,
    CacheConfig: CacheConfig,
    ModifyZoneCnameSpeedUpResponse: ModifyZoneCnameSpeedUpResponse,
    MaxAge: MaxAge,
    DeleteDnsRecordsRequest: DeleteDnsRecordsRequest,
    ModifyHostsCertificateRequest: ModifyHostsCertificateRequest,
    ModifyZoneStatusResponse: ModifyZoneStatusResponse,
    DescribeDnsDataRequest: DescribeDnsDataRequest,
    CreatePurgeTaskRequest: CreatePurgeTaskRequest,
    DeleteDnsRecordsResponse: DeleteDnsRecordsResponse,
    DescribeHostsSettingRequest: DescribeHostsSettingRequest,
    CreateApplicationProxyRulesResponse: CreateApplicationProxyRulesResponse,
    DescribeIdentificationResponse: DescribeIdentificationResponse,
    OriginGroup: OriginGroup,
    DescribeLoadBalancingResponse: DescribeLoadBalancingResponse,
    ModifyDnssecResponse: ModifyDnssecResponse,
    ScanDnsRecordsRequest: ScanDnsRecordsRequest,
    ImportDnsRecordsResponse: ImportDnsRecordsResponse,
    DescribeLoadBalancingDetailRequest: DescribeLoadBalancingDetailRequest,
    DefaultServerCertInfo: DefaultServerCertInfo,
    DnssecInfo: DnssecInfo,
    DnsRecordFilter: DnsRecordFilter,
    UpstreamHttp2: UpstreamHttp2,
    OfflineCache: OfflineCache,
    VanityNameServersIps: VanityNameServersIps,

}
