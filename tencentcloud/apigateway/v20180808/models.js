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
 * UnBindSubDomain返回参数结构体
 * @class
 */
class UnBindSubDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 解绑自定义域名操作是否成功。
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
 * UpdateApiKey请求参数结构体
 * @class
 */
class UpdateApiKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待更换的密钥 ID。
         * @type {string || null}
         */
        this.AccessKeyId = null;

        /**
         * 待更换的密钥 Key，更新自定义密钥时，该字段为必传。长度10 - 50字符，包括字母、数字、英文下划线。
         * @type {string || null}
         */
        this.AccessKeySecret = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessKeyId = 'AccessKeyId' in params ? params.AccessKeyId : null;
        this.AccessKeySecret = 'AccessKeySecret' in params ? params.AccessKeySecret : null;

    }
}

/**
 * 展示服务列表用
 * @class
 */
class Service extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内网访问https端口。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InnerHttpsPort = null;

        /**
         * 用户自定义的服务描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceDesc = null;

        /**
         * 服务的前端请求类型。如http、https 或者 http&https。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 最后修改时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModifiedTime = null;

        /**
         * 服务支持的网络类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.NetTypes = null;

        /**
         * 独占集群名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExclusiveSetName = null;

        /**
         * 服务唯一 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * IP版本。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IpVersion = null;

        /**
         * 已经发布的环境列表。如test、prepub、release。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.AvailableEnvironments = null;

        /**
         * 用户自定义的服务名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * 系统为该服务分配的外网域名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OuterSubDomain = null;

        /**
         * 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 内网访问http端口。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InnerHttpPort = null;

        /**
         * 系统为该服务自动分配的内网域名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InnerSubDomain = null;

        /**
         * 服务的计费状态。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TradeIsolateStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InnerHttpsPort = 'InnerHttpsPort' in params ? params.InnerHttpsPort : null;
        this.ServiceDesc = 'ServiceDesc' in params ? params.ServiceDesc : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;
        this.NetTypes = 'NetTypes' in params ? params.NetTypes : null;
        this.ExclusiveSetName = 'ExclusiveSetName' in params ? params.ExclusiveSetName : null;
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.IpVersion = 'IpVersion' in params ? params.IpVersion : null;
        this.AvailableEnvironments = 'AvailableEnvironments' in params ? params.AvailableEnvironments : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.OuterSubDomain = 'OuterSubDomain' in params ? params.OuterSubDomain : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.InnerHttpPort = 'InnerHttpPort' in params ? params.InnerHttpPort : null;
        this.InnerSubDomain = 'InnerSubDomain' in params ? params.InnerSubDomain : null;
        this.TradeIsolateStatus = 'TradeIsolateStatus' in params ? params.TradeIsolateStatus : null;

    }
}

/**
 * 服务发布版本
 * @class
 */
class ServiceReleaseVersion extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发布版本总数量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 发布版本列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ServiceReleaseHistoryInfo> || null}
         */
        this.VersionList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.VersionList) {
            this.VersionList = new Array();
            for (let z in params.VersionList) {
                let obj = new ServiceReleaseHistoryInfo();
                obj.deserialize(params.VersionList[z]);
                this.VersionList.push(obj);
            }
        }

    }
}

/**
 * api绑定使用计划列表
 * @class
 */
class ApiUsagePlanSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * API 绑定的使用计划总数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * API 绑定使用计划列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ApiUsagePlan> || null}
         */
        this.ApiUsagePlanList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ApiUsagePlanList) {
            this.ApiUsagePlanList = new Array();
            for (let z in params.ApiUsagePlanList) {
                let obj = new ApiUsagePlan();
                obj.deserialize(params.ApiUsagePlanList[z]);
                this.ApiUsagePlanList.push(obj);
            }
        }

    }
}

/**
 * DescribeUsagePlan请求参数结构体
 * @class
 */
class DescribeUsagePlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待查询的使用计划唯一 ID。
         * @type {string || null}
         */
        this.UsagePlanId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UsagePlanId = 'UsagePlanId' in params ? params.UsagePlanId : null;

    }
}

/**
 * DeleteUsagePlan返回参数结构体
 * @class
 */
class DeleteUsagePlanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
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
 * DisableApiKey返回参数结构体
 * @class
 */
class DisableApiKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 禁用密钥操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
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
 * UnReleaseService请求参数结构体
 * @class
 */
class UnReleaseServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待下线服务的唯一 ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 待下线的环境名称，当前支持三个环境，test（测试环境）、prepub（预发布环境）和 release（发布环境）。
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * 保留字段，待下线的API列表。
         * @type {Array.<string> || null}
         */
        this.ApiIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.ApiIds = 'ApiIds' in params ? params.ApiIds : null;

    }
}

/**
 * ModifySubDomain请求参数结构体
 * @class
 */
class ModifySubDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务唯一 ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 待修改路径映射的自定义的域名。
         * @type {string || null}
         */
        this.SubDomain = null;

        /**
         * 是否修改为使用默认路径映射。为 true，表示使用默认路径映射，为 false，表示使用自定义路径映射。
         * @type {boolean || null}
         */
        this.IsDefaultMapping = null;

        /**
         * 证书 ID，协议包含 HTTPS 的时候要传该字段。
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * 修改后的自定义域名协议类型。（http，https 或 http&https)
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 修改后的路径映射列表。
         * @type {Array.<PathMapping> || null}
         */
        this.PathMappingSet = null;

        /**
         * 网络类型 （'INNER' 或 'OUTER'）
         * @type {string || null}
         */
        this.NetType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;
        this.IsDefaultMapping = 'IsDefaultMapping' in params ? params.IsDefaultMapping : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

        if (params.PathMappingSet) {
            this.PathMappingSet = new Array();
            for (let z in params.PathMappingSet) {
                let obj = new PathMapping();
                obj.deserialize(params.PathMappingSet[z]);
                this.PathMappingSet.push(obj);
            }
        }
        this.NetType = 'NetType' in params ? params.NetType : null;

    }
}

/**
 * DescribeServiceEnvironmentList返回参数结构体
 * @class
 */
class DescribeServiceEnvironmentListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务绑定环境详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ServiceEnvironmentSet || null}
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

        if (params.Result) {
            let obj = new ServiceEnvironmentSet();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyApi返回参数结构体
 * @class
 */
class ModifyApiResponse extends  AbstractModel {
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
 * 服务环境策略
 * @class
 */
class ServiceEnvironmentStrategy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境名。
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * 访问服务对应环境的url。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 发布状态。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 发布的版本号。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * 限流值。
         * @type {number || null}
         */
        this.Strategy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;

    }
}

/**
 * DemoteServiceUsagePlan请求参数结构体
 * @class
 */
class DemoteServiceUsagePlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 使用计划ID。
         * @type {string || null}
         */
        this.UsagePlanId = null;

        /**
         * 待降级的服务唯一 ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 环境名称。
         * @type {string || null}
         */
        this.Environment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UsagePlanId = 'UsagePlanId' in params ? params.UsagePlanId : null;
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.Environment = 'Environment' in params ? params.Environment : null;

    }
}

/**
 * tsf serverless入参
 * @class
 */
class TargetServicesReq extends  AbstractModel {
    constructor(){
        super();

        /**
         * vm ip
         * @type {string || null}
         */
        this.VmIp = null;

        /**
         * vpc id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * vm port
         * @type {number || null}
         */
        this.VmPort = null;

        /**
         * cvm所在宿主机ip
         * @type {string || null}
         */
        this.HostIp = null;

        /**
         * docker ip
         * @type {string || null}
         */
        this.DockerIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VmIp = 'VmIp' in params ? params.VmIp : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VmPort = 'VmPort' in params ? params.VmPort : null;
        this.HostIp = 'HostIp' in params ? params.HostIp : null;
        this.DockerIp = 'DockerIp' in params ? params.DockerIp : null;

    }
}

/**
 * TsfLoadBalanceConf 出参使用
 * @class
 */
class TsfLoadBalanceConfResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启负载均衡。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsLoadBalance = null;

        /**
         * 负载均衡方式。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 是否开启会话保持。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.SessionStickRequired = null;

        /**
         * 会话保持超时时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SessionStickTimeout = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsLoadBalance = 'IsLoadBalance' in params ? params.IsLoadBalance : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.SessionStickRequired = 'SessionStickRequired' in params ? params.SessionStickRequired : null;
        this.SessionStickTimeout = 'SessionStickTimeout' in params ? params.SessionStickTimeout : null;

    }
}

/**
 * CreateIPStrategy请求参数结构体
 * @class
 */
class CreateIPStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务的唯一ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 用户自定义的策略名称。
         * @type {string || null}
         */
        this.StrategyName = null;

        /**
         * 策略类型。支持WHITE（白名单）和BLACK（黑名单）。
         * @type {string || null}
         */
        this.StrategyType = null;

        /**
         * 策略详情。
         * @type {string || null}
         */
        this.StrategyData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.StrategyName = 'StrategyName' in params ? params.StrategyName : null;
        this.StrategyType = 'StrategyType' in params ? params.StrategyType : null;
        this.StrategyData = 'StrategyData' in params ? params.StrategyData : null;

    }
}

/**
 * ip策略
 * @class
 */
class IPStrategy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略唯一ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StrategyId = null;

        /**
         * 用户自定义策略名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StrategyName = null;

        /**
         * 策略类型。支持WHITE（白名单）和BLACK（黑名单）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StrategyType = null;

        /**
         * IP列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StrategyData = null;

        /**
         * 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 修改时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModifiedTime = null;

        /**
         * 最后修改时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 策略绑定的API数量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BindApiTotalCount = null;

        /**
         * 绑定的API详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DesApisStatus> || null}
         */
        this.BindApis = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StrategyId = 'StrategyId' in params ? params.StrategyId : null;
        this.StrategyName = 'StrategyName' in params ? params.StrategyName : null;
        this.StrategyType = 'StrategyType' in params ? params.StrategyType : null;
        this.StrategyData = 'StrategyData' in params ? params.StrategyData : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.BindApiTotalCount = 'BindApiTotalCount' in params ? params.BindApiTotalCount : null;

        if (params.BindApis) {
            this.BindApis = new Array();
            for (let z in params.BindApis) {
                let obj = new DesApisStatus();
                obj.deserialize(params.BindApis[z]);
                this.BindApis.push(obj);
            }
        }

    }
}

/**
 * DescribeUsagePlansStatus返回参数结构体
 * @class
 */
class DescribeUsagePlansStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 使用计划列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {UsagePlansStatus || null}
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

        if (params.Result) {
            let obj = new UsagePlansStatus();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 健康检查配置，包括TsfHealthCheckConf和TargetServicesHealthCheckConf
 * @class
 */
class HealthCheckConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启健康检查。
         * @type {boolean || null}
         */
        this.IsHealthCheck = null;

        /**
         * 健康检查阈值。
         * @type {number || null}
         */
        this.RequestVolumeThreshold = null;

        /**
         * 窗口大小。
         * @type {number || null}
         */
        this.SleepWindowInMilliseconds = null;

        /**
         * 阈值百分比。
         * @type {number || null}
         */
        this.ErrorThresholdPercentage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsHealthCheck = 'IsHealthCheck' in params ? params.IsHealthCheck : null;
        this.RequestVolumeThreshold = 'RequestVolumeThreshold' in params ? params.RequestVolumeThreshold : null;
        this.SleepWindowInMilliseconds = 'SleepWindowInMilliseconds' in params ? params.SleepWindowInMilliseconds : null;
        this.ErrorThresholdPercentage = 'ErrorThresholdPercentage' in params ? params.ErrorThresholdPercentage : null;

    }
}

/**
 * DescribeApiUsagePlan返回参数结构体
 * @class
 */
class DescribeApiUsagePlanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * api绑定使用计划列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ApiUsagePlanSet || null}
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

        if (params.Result) {
            let obj = new ApiUsagePlanSet();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteIPStrategy请求参数结构体
 * @class
 */
class DeleteIPStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待删除的IP策略所属的服务唯一ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 待删除的IP策略唯一ID。
         * @type {string || null}
         */
        this.StrategyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.StrategyId = 'StrategyId' in params ? params.StrategyId : null;

    }
}

/**
 * 自定义服务域名展示
 * @class
 */
class DomainSets extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务下的自定义域名数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 自定义服务域名列表。
         * @type {Array.<DomainSetList> || null}
         */
        this.DomainSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.DomainSet) {
            this.DomainSet = new Array();
            for (let z in params.DomainSet) {
                let obj = new DomainSetList();
                obj.deserialize(params.DomainSet[z]);
                this.DomainSet.push(obj);
            }
        }

    }
}

/**
 * DeleteUsagePlan请求参数结构体
 * @class
 */
class DeleteUsagePlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待删除的使用计划唯一 ID。
         * @type {string || null}
         */
        this.UsagePlanId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UsagePlanId = 'UsagePlanId' in params ? params.UsagePlanId : null;

    }
}

/**
 * DeleteService请求参数结构体
 * @class
 */
class DeleteServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待删除服务的唯一 ID。
         * @type {string || null}
         */
        this.ServiceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;

    }
}

/**
 * DescribeApiEnvironmentStrategy请求参数结构体
 * @class
 */
class DescribeApiEnvironmentStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * API所属服务唯一ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 环境列表。
         * @type {Array.<string> || null}
         */
        this.EnvironmentNames = null;

        /**
         * API唯一ID。
         * @type {string || null}
         */
        this.ApiId = null;

        /**
         * 返回数量，默认为 20，最大值为 100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为 0。
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.EnvironmentNames = 'EnvironmentNames' in params ? params.EnvironmentNames : null;
        this.ApiId = 'ApiId' in params ? params.ApiId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * UpdateService返回参数结构体
 * @class
 */
class UpdateServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 切换版本操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
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
 * ServiceConfig
 * @class
 */
class ServiceConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 后端类型。启用vpc时生效，目前支持的类型为clb。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * vpc 的唯一ID。
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * API 的后端服务url。如果ServiceType是HTTP，则此参数必传。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * API 的后端服务路径，如 /path。如果 ServiceType 是 HTTP，则此参数必传。前后端路径可不同。
         * @type {string || null}
         */
        this.Path = null;

        /**
         * API的后端服务请求方法，如 GET。如果 ServiceType 是 HTTP，则此参数必传。前后端方法可不同。
         * @type {string || null}
         */
        this.Method = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Product = 'Product' in params ? params.Product : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Method = 'Method' in params ? params.Method : null;

    }
}

/**
 * 服务绑定环境详情
 * @class
 */
class ServiceEnvironmentSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务绑定环境总数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 服务绑定环境列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Environment> || null}
         */
        this.EnvironmentList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.EnvironmentList) {
            this.EnvironmentList = new Array();
            for (let z in params.EnvironmentList) {
                let obj = new Environment();
                obj.deserialize(params.EnvironmentList[z]);
                this.EnvironmentList.push(obj);
            }
        }

    }
}

/**
 * DescribeService返回参数结构体
 * @class
 */
class DescribeServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务唯一ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 服务 环境列表。
         * @type {Array.<string> || null}
         */
        this.AvailableEnvironments = null;

        /**
         * 服务名称。
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * 服务描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceDesc = null;

        /**
         * 服务支持协议，可选值为http、https、http&https。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 服务创建时间。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 服务修改时间。
         * @type {string || null}
         */
        this.ModifiedTime = null;

        /**
         * 独立集群名称。
         * @type {string || null}
         */
        this.ExclusiveSetName = null;

        /**
         * 网络类型列表，INNER为内网访问，OUTER为外网访问。
         * @type {Array.<string> || null}
         */
        this.NetTypes = null;

        /**
         * 内网访问子域名。
         * @type {string || null}
         */
        this.InternalSubDomain = null;

        /**
         * 外网访问子域名。
         * @type {string || null}
         */
        this.OuterSubDomain = null;

        /**
         * 内网访问http服务端口号。
         * @type {number || null}
         */
        this.InnerHttpPort = null;

        /**
         * 内网访问https端口号。
         * @type {number || null}
         */
        this.InnerHttpsPort = null;

        /**
         * API总数。
         * @type {number || null}
         */
        this.ApiTotalCount = null;

        /**
         * API列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ApiIdStatus> || null}
         */
        this.ApiIdStatusSet = null;

        /**
         * 使用计划总数量。
         * @type {number || null}
         */
        this.UsagePlanTotalCount = null;

        /**
         * 使用计划数组。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UsagePlan> || null}
         */
        this.UsagePlanList = null;

        /**
         * IP版本。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IpVersion = null;

        /**
         * 此服务的用户类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserType = null;

        /**
         * 预留字段。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SetId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.AvailableEnvironments = 'AvailableEnvironments' in params ? params.AvailableEnvironments : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.ServiceDesc = 'ServiceDesc' in params ? params.ServiceDesc : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;
        this.ExclusiveSetName = 'ExclusiveSetName' in params ? params.ExclusiveSetName : null;
        this.NetTypes = 'NetTypes' in params ? params.NetTypes : null;
        this.InternalSubDomain = 'InternalSubDomain' in params ? params.InternalSubDomain : null;
        this.OuterSubDomain = 'OuterSubDomain' in params ? params.OuterSubDomain : null;
        this.InnerHttpPort = 'InnerHttpPort' in params ? params.InnerHttpPort : null;
        this.InnerHttpsPort = 'InnerHttpsPort' in params ? params.InnerHttpsPort : null;
        this.ApiTotalCount = 'ApiTotalCount' in params ? params.ApiTotalCount : null;

        if (params.ApiIdStatusSet) {
            this.ApiIdStatusSet = new Array();
            for (let z in params.ApiIdStatusSet) {
                let obj = new ApiIdStatus();
                obj.deserialize(params.ApiIdStatusSet[z]);
                this.ApiIdStatusSet.push(obj);
            }
        }
        this.UsagePlanTotalCount = 'UsagePlanTotalCount' in params ? params.UsagePlanTotalCount : null;

        if (params.UsagePlanList) {
            this.UsagePlanList = new Array();
            for (let z in params.UsagePlanList) {
                let obj = new UsagePlan();
                obj.deserialize(params.UsagePlanList[z]);
                this.UsagePlanList.push(obj);
            }
        }
        this.IpVersion = 'IpVersion' in params ? params.IpVersion : null;
        this.UserType = 'UserType' in params ? params.UserType : null;
        this.SetId = 'SetId' in params ? params.SetId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 使用计划绑定环境的列表。
 * @class
 */
class UsagePlanEnvironmentStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 使用计划绑定的服务的环境数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 使用计划已经绑定的各个服务的环境状态。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UsagePlanEnvironment> || null}
         */
        this.EnvironmentList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.EnvironmentList) {
            this.EnvironmentList = new Array();
            for (let z in params.EnvironmentList) {
                let obj = new UsagePlanEnvironment();
                obj.deserialize(params.EnvironmentList[z]);
                this.EnvironmentList.push(obj);
            }
        }

    }
}

/**
 * ModifyIPStrategy返回参数结构体
 * @class
 */
class ModifyIPStrategyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
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
 * BindSubDomain返回参数结构体
 * @class
 */
class BindSubDomainResponse extends  AbstractModel {
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
 * BindEnvironment返回参数结构体
 * @class
 */
class BindEnvironmentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 绑定操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
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
 * API绑定的标签信息。
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签的 key。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 便签的 value。
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
 * DescribeServiceEnvironmentStrategy返回参数结构体
 * @class
 */
class DescribeServiceEnvironmentStrategyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 限流策略列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ServiceEnvironmentStrategyStatus || null}
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

        if (params.Result) {
            let obj = new ServiceEnvironmentStrategyStatus();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 常量参数
 * @class
 */
class ConstantParameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 常量参数名称。只有 ServiceType 是 HTTP 才会用到此参数。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 常量参数描述。只有 ServiceType 是 HTTP 才会用到此参数。
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 常量参数位置。只有 ServiceType 是 HTTP 才会用到此参数。
         * @type {string || null}
         */
        this.Position = null;

        /**
         * 常量参数默认值。只有 ServiceType 是 HTTP 才会用到此参数。
         * @type {string || null}
         */
        this.DefaultValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.Position = 'Position' in params ? params.Position : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;

    }
}

/**
 * 使用计划列表
 * @class
 */
class UsagePlansStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的使用计划数量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 使用计划列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UsagePlanStatusInfo> || null}
         */
        this.UsagePlanStatusSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.UsagePlanStatusSet) {
            this.UsagePlanStatusSet = new Array();
            for (let z in params.UsagePlanStatusSet) {
                let obj = new UsagePlanStatusInfo();
                obj.deserialize(params.UsagePlanStatusSet[z]);
                this.UsagePlanStatusSet.push(obj);
            }
        }

    }
}

/**
 * ModifySubDomain返回参数结构体
 * @class
 */
class ModifySubDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改自定义域名操作是否成功。
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
 * 检索条件入参
 * @class
 */
class LogQuery extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检索字段
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 操作符
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 检索值
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
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * ServiceParameter
 * @class
 */
class ServiceParameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * API的后端服务参数名称。只有ServiceType是HTTP才会用到此参数。前后端参数名称可不同。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * API 的后端服务参数位置，如 head。只有 ServiceType 是 HTTP 才会用到此参数。前后端参数位置可配置不同。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Position = null;

        /**
         * API 的后端服务参数对应的前端参数位置，如 head。只有 ServiceType 是 HTTP 才会用到此参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RelevantRequestParameterPosition = null;

        /**
         * API 的后端服务参数对应的前端参数名称。只有 ServiceType 是 HTTP 才会用到此参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RelevantRequestParameterName = null;

        /**
         * API 的后端服务参数默认值。只有 ServiceType 是 HTTP 才会用到此参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DefaultValue = null;

        /**
         * API 的后端服务参数备注。只有 ServiceType 是 HTTP 才会用到此参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RelevantRequestParameterDesc = null;

        /**
         * API 的后端服务参数类型。只有 ServiceType 是 HTTP 才会用到此参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RelevantRequestParameterType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Position = 'Position' in params ? params.Position : null;
        this.RelevantRequestParameterPosition = 'RelevantRequestParameterPosition' in params ? params.RelevantRequestParameterPosition : null;
        this.RelevantRequestParameterName = 'RelevantRequestParameterName' in params ? params.RelevantRequestParameterName : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.RelevantRequestParameterDesc = 'RelevantRequestParameterDesc' in params ? params.RelevantRequestParameterDesc : null;
        this.RelevantRequestParameterType = 'RelevantRequestParameterType' in params ? params.RelevantRequestParameterType : null;

    }
}

/**
 * ModifyService返回参数结构体
 * @class
 */
class ModifyServiceResponse extends  AbstractModel {
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
 * DisableApiKey请求参数结构体
 * @class
 */
class DisableApiKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待禁用的密钥 ID。
         * @type {string || null}
         */
        this.AccessKeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessKeyId = 'AccessKeyId' in params ? params.AccessKeyId : null;

    }
}

/**
 * 自定义域名的路径映射。
 * @class
 */
class PathMapping extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路径。
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 发布环境，可选值为“test”、 ”prepub“、”release“。
         * @type {string || null}
         */
        this.Environment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Path = 'Path' in params ? params.Path : null;
        this.Environment = 'Environment' in params ? params.Environment : null;

    }
}

/**
 * UnBindIPStrategy返回参数结构体
 * @class
 */
class UnBindIPStrategyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 解绑操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
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
 * BindIPStrategy返回参数结构体
 * @class
 */
class BindIPStrategyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 绑定操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
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
 * DescribeApisStatus请求参数结构体
 * @class
 */
class DescribeApisStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * API 所在的服务唯一 ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 偏移量，默认为 0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为 20，最大值为 100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * API过滤条件。支持ApiId、ApiName、ApiPath、ApiType、AuthRelationApiId、AuthType、ApiBuniessType、NotUsagePlanId、Environment、Tags (values为 $tag_key:tag_value的列表)、TagKeys （values 为 tag key的列表）。
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
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
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
 * DeleteServiceSubDomainMapping请求参数结构体
 * @class
 */
class DeleteServiceSubDomainMappingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务唯一 ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 服务绑定的自定义域名。
         * @type {string || null}
         */
        this.SubDomain = null;

        /**
         * 待删除映射的环境名称，当前支持三个环境，test（测试环境）、prepub（预发布环境）和 release（发布环境）。
         * @type {string || null}
         */
        this.Environment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;
        this.Environment = 'Environment' in params ? params.Environment : null;

    }
}

/**
 * DescribeIPStrategy返回参数结构体
 * @class
 */
class DescribeIPStrategyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP策略详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IPStrategy || null}
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

        if (params.Result) {
            let obj = new IPStrategy();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteApi返回参数结构体
 * @class
 */
class DeleteApiResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
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
 * CreateApi返回参数结构体
 * @class
 */
class CreateApiResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * api信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CreateApiRsp || null}
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

        if (params.Result) {
            let obj = new CreateApiRsp();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIPStrategyApisStatus请求参数结构体
 * @class
 */
class DescribeIPStrategyApisStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务唯一ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 策略唯一ID。
         * @type {string || null}
         */
        this.StrategyId = null;

        /**
         * 策略所在环境。
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * 返回数量，默认为 20，最大值为 100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为 0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件。支持 ApiPath、ApiName、KeyWord（模糊查询Path 和Name）。
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
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.StrategyId = 'StrategyId' in params ? params.StrategyId : null;
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * UnBindEnvironment请求参数结构体
 * @class
 */
class UnBindEnvironmentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 绑定类型，取值为 API、SERVICE，默认值为 SERVICE。
         * @type {string || null}
         */
        this.BindType = null;

        /**
         * 待绑定的使用计划唯一 ID 列表。
         * @type {Array.<string> || null}
         */
        this.UsagePlanIds = null;

        /**
         * 待解绑的服务环境。
         * @type {string || null}
         */
        this.Environment = null;

        /**
         * 待解绑的服务唯一 ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * API 唯一 ID 数组，当 BindType=API 时，需要传入此参数。
         * @type {Array.<string> || null}
         */
        this.ApiIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BindType = 'BindType' in params ? params.BindType : null;
        this.UsagePlanIds = 'UsagePlanIds' in params ? params.UsagePlanIds : null;
        this.Environment = 'Environment' in params ? params.Environment : null;
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ApiIds = 'ApiIds' in params ? params.ApiIds : null;

    }
}

/**
 * Oauth授权配置信息
 * @class
 */
class OauthConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 公钥，用于验证用户token。
         * @type {string || null}
         */
        this.PublicKey = null;

        /**
         * token传递位置。
         * @type {string || null}
         */
        this.TokenLocation = null;

        /**
         * 重定向地址，用于引导用户登录操作。
         * @type {string || null}
         */
        this.LoginRedirectUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;
        this.TokenLocation = 'TokenLocation' in params ? params.TokenLocation : null;
        this.LoginRedirectUrl = 'LoginRedirectUrl' in params ? params.LoginRedirectUrl : null;

    }
}

/**
 * ModifyApiEnvironmentStrategy请求参数结构体
 * @class
 */
class ModifyApiEnvironmentStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务唯一ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 限流值。
         * @type {number || null}
         */
        this.Strategy = null;

        /**
         * 环境名。
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * API列表。
         * @type {Array.<string> || null}
         */
        this.ApiIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.ApiIds = 'ApiIds' in params ? params.ApiIds : null;

    }
}

/**
 * ModifyUsagePlan返回参数结构体
 * @class
 */
class ModifyUsagePlanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 使用计划详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {UsagePlanInfo || null}
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

        if (params.Result) {
            let obj = new UsagePlanInfo();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateUsagePlan返回参数结构体
 * @class
 */
class CreateUsagePlanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 使用计划详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {UsagePlanInfo || null}
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

        if (params.Result) {
            let obj = new UsagePlanInfo();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 请求参数
 * @class
 */
class ReqParameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * API 的前端参数名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * API 的前端参数位置，如 head。目前支持 head、query、path。
         * @type {string || null}
         */
        this.Position = null;

        /**
         * API 的前端参数类型，如 String、int。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * API 的前端参数默认值。
         * @type {string || null}
         */
        this.DefaultValue = null;

        /**
         * API 的前端参数是否必填，True：表示必填，False：表示可选。
         * @type {boolean || null}
         */
        this.Required = null;

        /**
         * API 的前端参数备注。
         * @type {string || null}
         */
        this.Desc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Position = 'Position' in params ? params.Position : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.Required = 'Required' in params ? params.Required : null;
        this.Desc = 'Desc' in params ? params.Desc : null;

    }
}

/**
 * DescribeServicesStatus请求参数结构体
 * @class
 */
class DescribeServicesStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数量，默认为 20，最大值为 100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为 0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件。支持ServiceId、ServiceName、NotUsagePlanId、Environment、IpVersion。
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * 前端路径配置
 * @class
 */
class RequestConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * API 的路径，如 /path。
         * @type {string || null}
         */
        this.Path = null;

        /**
         * API 的请求方法，如 GET。
         * @type {string || null}
         */
        this.Method = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Path = 'Path' in params ? params.Path : null;
        this.Method = 'Method' in params ? params.Method : null;

    }
}

/**
 * DeleteApiKey返回参数结构体
 * @class
 */
class DeleteApiKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
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
 * usagePlan详情
 * @class
 */
class UsagePlan extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境名称。
         * @type {string || null}
         */
        this.Environment = null;

        /**
         * 使用计划唯一ID。
         * @type {string || null}
         */
        this.UsagePlanId = null;

        /**
         * 使用计划名称。
         * @type {string || null}
         */
        this.UsagePlanName = null;

        /**
         * 使用计划描述。
         * @type {string || null}
         */
        this.UsagePlanDesc = null;

        /**
         * 使用计划qps，-1表示没有限制。
         * @type {number || null}
         */
        this.MaxRequestNumPreSec = null;

        /**
         * 使用计划时间。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 使用计划修改时间。
         * @type {string || null}
         */
        this.ModifiedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Environment = 'Environment' in params ? params.Environment : null;
        this.UsagePlanId = 'UsagePlanId' in params ? params.UsagePlanId : null;
        this.UsagePlanName = 'UsagePlanName' in params ? params.UsagePlanName : null;
        this.UsagePlanDesc = 'UsagePlanDesc' in params ? params.UsagePlanDesc : null;
        this.MaxRequestNumPreSec = 'MaxRequestNumPreSec' in params ? params.MaxRequestNumPreSec : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;

    }
}

/**
 * DescribeServiceReleaseVersion请求参数结构体
 * @class
 */
class DescribeServiceReleaseVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待查询的服务唯一 ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 返回数量，默认为 20，最大值为 100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeUsagePlanSecretIds请求参数结构体
 * @class
 */
class DescribeUsagePlanSecretIdsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 绑定的使用计划唯一 ID。
         * @type {string || null}
         */
        this.UsagePlanId = null;

        /**
         * 返回数量，默认为 20，最大值为 100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为 0。
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UsagePlanId = 'UsagePlanId' in params ? params.UsagePlanId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeLogSearch返回参数结构体
 * @class
 */
class DescribeLogSearchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 获取更多检索结果的游标，值为""表示无后续结果
         * @type {string || null}
         */
        this.ConText = null;

        /**
         * 由0或多条日志组成，每条日志格式如下：
'[$app_id][$env_name][$service_id][$http_host][$api_id][$uri][$scheme][rsp_st:$status][ups_st:$upstream_status]'
'[cip:$remote_addr][uip:$upstream_addr][vip:$server_addr][rsp_len:$bytes_sent][req_len:$request_length]'
'[req_t:$request_time][ups_rsp_t:$upstream_response_time][ups_conn_t:$upstream_connect_time][ups_head_t:$upstream_header_time]’
'[err_msg:$err_msg][tcp_rtt:$tcpinfo_rtt][$pid][$time_local][req_id:$request_id]';

说明：
app_id： 用户 ID。
env_name：环境名称。
service_id： 服务 ID。
http_host： 域名。
api_id： API 的 ID。
uri：请求的路径。
scheme： HTTP/HTTPS 协议。
rsp_st： 请求响应状态码。
ups_st： 后端业务服务器的响应状态码（如果请求透传到后端，改变量不为空。如果请求在 APIGW 就被拦截了，那么该变量显示为 -）。
cip： 客户端 IP。
uip： 后端业务服务（upstream）的 IP。
vip： 请求访问的 VIP。
rsp_len： 响应长度。
req_len： 请求长度。
req_t： 请求响应的总时间。
ups_rsp_t： 后端响应的总时间（apigw 建立连接到接收到后端响应的时间）。
ups_conn_t: 与后端业务服务器连接建立成功时间。
ups_head_t：后端响应的头部到达时间。
err_msg： 错误信息。
tcp_rtt： 客户端 TCP 连接信息，RTT（Round Trip Time）由三部分组成：链路的传播时间（propagation delay）、末端系统的处理时间、路由器缓存中的排队和处理时间（queuing delay）。
req_id：请求id。
         * @type {Array.<string> || null}
         */
        this.LogSet = null;

        /**
         * 单次搜索返回的日志条数，TotalCount <= Limit
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
        this.ConText = 'ConText' in params ? params.ConText : null;
        this.LogSet = 'LogSet' in params ? params.LogSet : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 错误码入参
 * @class
 */
class ResponseErrorCodeReq extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义响应配置错误码。
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 自定义响应配置错误信息。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 自定义响应配置错误码备注。
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 自定义错误码转换。
         * @type {number || null}
         */
        this.ConvertedCode = null;

        /**
         * 是否需要开启错误码转换。
         * @type {boolean || null}
         */
        this.NeedConvert = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.ConvertedCode = 'ConvertedCode' in params ? params.ConvertedCode : null;
        this.NeedConvert = 'NeedConvert' in params ? params.NeedConvert : null;

    }
}

/**
 * CreateService请求参数结构体
 * @class
 */
class CreateServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户自定义的服务名称。如果没传，则系统自动生成一个唯一名称。
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * 服务的前端请求类型。如 http、https、http&https。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 用户自定义的服务描述。
         * @type {string || null}
         */
        this.ServiceDesc = null;

        /**
         * 独立集群名称，用于指定创建服务所在的独立集群。
         * @type {string || null}
         */
        this.ExclusiveSetName = null;

        /**
         * 网络类型列表，用于指定支持的访问类型，INNER为内网访问，OUTER为外网访问。默认为OUTER。
         * @type {Array.<string> || null}
         */
        this.NetTypes = null;

        /**
         * IP版本号，支持IPv4和IPv6，默认为IPv4。
         * @type {string || null}
         */
        this.IpVersion = null;

        /**
         * 集群名称。保留字段，tsf serverlss类型使用。
         * @type {string || null}
         */
        this.SetServerName = null;

        /**
         * 用户类型。保留类型，serverless用户使用。
         * @type {string || null}
         */
        this.AppIdType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.ServiceDesc = 'ServiceDesc' in params ? params.ServiceDesc : null;
        this.ExclusiveSetName = 'ExclusiveSetName' in params ? params.ExclusiveSetName : null;
        this.NetTypes = 'NetTypes' in params ? params.NetTypes : null;
        this.IpVersion = 'IpVersion' in params ? params.IpVersion : null;
        this.SetServerName = 'SetServerName' in params ? params.SetServerName : null;
        this.AppIdType = 'AppIdType' in params ? params.AppIdType : null;

    }
}

/**
 * DescribeIPStrategysStatus请求参数结构体
 * @class
 */
class DescribeIPStrategysStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务唯一ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 过滤条件。支持StrategyName。
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
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;

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
 * DemoteServiceUsagePlan返回参数结构体
 * @class
 */
class DemoteServiceUsagePlanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 降级操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
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
 * EnableApiKey返回参数结构体
 * @class
 */
class EnableApiKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 启动密钥操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
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
 * 服务发布历史
 * @class
 */
class ServiceReleaseHistory extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发布版本总数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 历史版本列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ServiceReleaseHistoryInfo> || null}
         */
        this.VersionList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.VersionList) {
            this.VersionList = new Array();
            for (let z in params.VersionList) {
                let obj = new ServiceReleaseHistoryInfo();
                obj.deserialize(params.VersionList[z]);
                this.VersionList.push(obj);
            }
        }

    }
}

/**
 * UnReleaseService返回参数结构体
 * @class
 */
class UnReleaseServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 下线操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
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
 * DescribeService请求参数结构体
 * @class
 */
class DescribeServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待查询的服务唯一 ID。
         * @type {string || null}
         */
        this.ServiceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;

    }
}

/**
 * CreateUsagePlan请求参数结构体
 * @class
 */
class CreateUsagePlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户自定义的使用计划名称。
         * @type {string || null}
         */
        this.UsagePlanName = null;

        /**
         * 用户自定义的使用计划描述。
         * @type {string || null}
         */
        this.UsagePlanDesc = null;

        /**
         * 请求配额总数，取值范围为-1或者[1, 99999999]，默认为-1，表示不开启。
         * @type {number || null}
         */
        this.MaxRequestNum = null;

        /**
         * 每秒请求限制数，取值范围为-1或者[1, 2000]，默认-1，表示不开启。
         * @type {number || null}
         */
        this.MaxRequestNumPreSec = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UsagePlanName = 'UsagePlanName' in params ? params.UsagePlanName : null;
        this.UsagePlanDesc = 'UsagePlanDesc' in params ? params.UsagePlanDesc : null;
        this.MaxRequestNum = 'MaxRequestNum' in params ? params.MaxRequestNum : null;
        this.MaxRequestNumPreSec = 'MaxRequestNumPreSec' in params ? params.MaxRequestNumPreSec : null;

    }
}

/**
 * DescribeUsagePlanSecretIds返回参数结构体
 * @class
 */
class DescribeUsagePlanSecretIdsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 使用计划绑定的密钥列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {UsagePlanBindSecretStatus || null}
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

        if (params.Result) {
            let obj = new UsagePlanBindSecretStatus();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateService请求参数结构体
 * @class
 */
class UpdateServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待切换服务的唯一 Id。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 待切换的环境名称，当前支持三个环境，test（测试环境）、prepub（预发布环境）和 release（发布环境）。
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * 切换的版本号。
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * 本次的切换描述。
         * @type {string || null}
         */
        this.UpdateDesc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.UpdateDesc = 'UpdateDesc' in params ? params.UpdateDesc : null;

    }
}

/**
 * 发布服务返回
 * @class
 */
class ReleaseService extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发布时的备注信息填写。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReleaseDesc = null;

        /**
         * 发布的版本id。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReleaseVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReleaseDesc = 'ReleaseDesc' in params ? params.ReleaseDesc : null;
        this.ReleaseVersion = 'ReleaseVersion' in params ? params.ReleaseVersion : null;

    }
}

/**
 * DescribeServiceSubDomainMappings返回参数结构体
 * @class
 */
class DescribeServiceSubDomainMappingsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义路径映射列表。
         * @type {ServiceSubDomainMappings || null}
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

        if (params.Result) {
            let obj = new ServiceSubDomainMappings();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindSecretIds请求参数结构体
 * @class
 */
class BindSecretIdsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待绑定的使用计划唯一 ID。
         * @type {string || null}
         */
        this.UsagePlanId = null;

        /**
         * 待绑定的密钥 ID 数组。
         * @type {Array.<string> || null}
         */
        this.AccessKeyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UsagePlanId = 'UsagePlanId' in params ? params.UsagePlanId : null;
        this.AccessKeyIds = 'AccessKeyIds' in params ? params.AccessKeyIds : null;

    }
}

/**
 * UnBindEnvironment返回参数结构体
 * @class
 */
class UnBindEnvironmentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 解绑操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
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
 * 使用计划绑定密钥
 * @class
 */
class UsagePlanBindSecret extends  AbstractModel {
    constructor(){
        super();

        /**
         * 密钥ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccessKeyId = null;

        /**
         * 密钥名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * 密钥状态，0表示已禁用，1表示启用中。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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
        this.AccessKeyId = 'AccessKeyId' in params ? params.AccessKeyId : null;
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DeleteApiKey请求参数结构体
 * @class
 */
class DeleteApiKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待删除的密钥 ID。
         * @type {string || null}
         */
        this.AccessKeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessKeyId = 'AccessKeyId' in params ? params.AccessKeyId : null;

    }
}

/**
 * ModifyApiEnvironmentStrategy返回参数结构体
 * @class
 */
class ModifyApiEnvironmentStrategyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
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
 * 服务自定义域名列表
 * @class
 */
class DomainSetList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名名称。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 域名解析状态。True 表示正常解析，False 表示解析失败。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 证书ID。
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * 是否使用默认路径映射。
         * @type {boolean || null}
         */
        this.IsDefaultMapping = null;

        /**
         * 自定义域名协议类型。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 网络类型（'INNER' 或 'OUTER'）。
         * @type {string || null}
         */
        this.NetType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.IsDefaultMapping = 'IsDefaultMapping' in params ? params.IsDefaultMapping : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.NetType = 'NetType' in params ? params.NetType : null;

    }
}

/**
 * 策略列表
 * @class
 */
class IPStrategysStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略数量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 策略列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IPStrategy> || null}
         */
        this.StrategySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.StrategySet) {
            this.StrategySet = new Array();
            for (let z in params.StrategySet) {
                let obj = new IPStrategy();
                obj.deserialize(params.StrategySet[z]);
                this.StrategySet.push(obj);
            }
        }

    }
}

/**
 * DescribeApiKey返回参数结构体
 * @class
 */
class DescribeApiKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 密钥详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ApiKey || null}
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

        if (params.Result) {
            let obj = new ApiKey();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyApiIncrement返回参数结构体
 * @class
 */
class ModifyApiIncrementResponse extends  AbstractModel {
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
 * ModifyApi请求参数结构体
 * @class
 */
class ModifyApiRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * API 所在的服务唯一 ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * API 的后端服务类型。支持HTTP、MOCK、TSF、CLB、SCF、WEBSOCKET、TARGET（内测）。
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * 请求的前端配置。
         * @type {RequestConfig || null}
         */
        this.RequestConfig = null;

        /**
         * API 接口唯一 ID。
         * @type {string || null}
         */
        this.ApiId = null;

        /**
         * 用户自定义的 API 名称。
         * @type {string || null}
         */
        this.ApiName = null;

        /**
         * 用户自定义的 API 接口描述。
         * @type {string || null}
         */
        this.ApiDesc = null;

        /**
         * API 类型，支持NORMAL和TSF，默认为NORMAL。
         * @type {string || null}
         */
        this.ApiType = null;

        /**
         * API 鉴权类型。支持SECRET、NONE、OAUTH。默认为NONE。
         * @type {string || null}
         */
        this.AuthType = null;

        /**
         * 是否需要签名认证，True 表示需要，False 表示不需要。待废弃。
         * @type {boolean || null}
         */
        this.AuthRequired = null;

        /**
         * API 的后端服务超时时间，单位是秒。
         * @type {number || null}
         */
        this.ServiceTimeout = null;

        /**
         * API 的前端请求类型，如 HTTP 或 HTTPS 或者 HTTP 和 HTTPS。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 是否需要开启跨域，Ture 表示需要，False 表示不需要。
         * @type {boolean || null}
         */
        this.EnableCORS = null;

        /**
         * 常量参数。
         * @type {Array.<ConstantParameter> || null}
         */
        this.ConstantParameters = null;

        /**
         * 前端请求参数。
         * @type {Array.<ReqParameter> || null}
         */
        this.RequestParameters = null;

        /**
         * 当AuthType 为 OAUTH时，该字段有效， NORMAL：业务api   OAUTH：授权API。
         * @type {string || null}
         */
        this.ApiBusinessType = null;

        /**
         * API 的后端 Mock 返回信息。如果 ServiceType 是 Mock，则此参数必传。
         * @type {string || null}
         */
        this.ServiceMockReturnMessage = null;

        /**
         * API绑定微服务服务列表。
         * @type {Array.<MicroServiceReq> || null}
         */
        this.MicroServices = null;

        /**
         * 微服务的负载均衡配置。
         * @type {TsfLoadBalanceConfResp || null}
         */
        this.ServiceTsfLoadBalanceConf = null;

        /**
         * 微服务的健康检查配置。
         * @type {HealthCheckConf || null}
         */
        this.ServiceTsfHealthCheckConf = null;

        /**
         * target类型负载均衡配置。（内测阶段）
         * @type {number || null}
         */
        this.TargetServicesLoadBalanceConf = null;

        /**
         * target健康检查配置。（内测阶段）
         * @type {HealthCheckConf || null}
         */
        this.TargetServicesHealthCheckConf = null;

        /**
         * scf 函数名称。当后端类型是SCF时生效。
         * @type {string || null}
         */
        this.ServiceScfFunctionName = null;

        /**
         * scf websocket注册函数。当前端类型是WEBSOCKET且后端类型是SCF时生效。
         * @type {string || null}
         */
        this.ServiceWebsocketRegisterFunctionName = null;

        /**
         * scf websocket清理函数。当前端类型是WEBSOCKET且后端类型是SCF时生效。
         * @type {string || null}
         */
        this.ServiceWebsocketCleanupFunctionName = null;

        /**
         * scf websocket传输函数。当前端类型是WEBSOCKET且后端类型是SCF时生效。
         * @type {string || null}
         */
        this.ServiceWebsocketTransportFunctionName = null;

        /**
         * scf 函数命名空间。当后端类型是SCF时生效。
         * @type {string || null}
         */
        this.ServiceScfFunctionNamespace = null;

        /**
         * scf函数版本。当后端类型是SCF时生效。
         * @type {string || null}
         */
        this.ServiceScfFunctionQualifier = null;

        /**
         * scf websocket注册函数命名空间。当前端类型是WEBSOCKET且后端类型是SCF时生效。
         * @type {string || null}
         */
        this.ServiceWebsocketRegisterFunctionNamespace = null;

        /**
         * scf websocket传输函数版本。当前端类型是WEBSOCKET且后端类型是SCF时生效。
         * @type {string || null}
         */
        this.ServiceWebsocketRegisterFunctionQualifier = null;

        /**
         * scf websocket传输函数命名空间。当前端类型是WEBSOCKET且后端类型是SCF时生效。
         * @type {string || null}
         */
        this.ServiceWebsocketTransportFunctionNamespace = null;

        /**
         * scf websocket传输函数版本。当前端类型是WEBSOCKET且后端类型是SCF时生效。
         * @type {string || null}
         */
        this.ServiceWebsocketTransportFunctionQualifier = null;

        /**
         * scf websocket清理函数命名空间。当前端类型是WEBSOCKET且后端类型是SCF时生效。
         * @type {string || null}
         */
        this.ServiceWebsocketCleanupFunctionNamespace = null;

        /**
         * scf websocket清理函数版本。当前端类型是WEBSOCKET且后端类型是SCF时生效。
         * @type {string || null}
         */
        this.ServiceWebsocketCleanupFunctionQualifier = null;

        /**
         * 是否开启响应集成。当后端类型是SCF时生效。
         * @type {boolean || null}
         */
        this.ServiceScfIsIntegratedResponse = null;

        /**
         * 开始调试后计费。（云市场预留字段）
         * @type {boolean || null}
         */
        this.IsDebugAfterCharge = null;

        /**
         * 标签。
         * @type {Tag || null}
         */
        this.TagSpecifications = null;

        /**
         * 是否删除自定义响应配置错误码，如果不传或者传 False，不删除，当传 True 时，则删除此 API 所有自定义响应配置错误码。
         * @type {boolean || null}
         */
        this.IsDeleteResponseErrorCodes = null;

        /**
         * 返回类型。
         * @type {string || null}
         */
        this.ResponseType = null;

        /**
         * 自定义响应配置成功响应示例。
         * @type {string || null}
         */
        this.ResponseSuccessExample = null;

        /**
         * 自定义响应配置失败响应示例。
         * @type {string || null}
         */
        this.ResponseFailExample = null;

        /**
         * API 的后端服务配置。
         * @type {ServiceConfig || null}
         */
        this.ServiceConfig = null;

        /**
         * 关联的授权API 唯一 ID，当AuthType为OAUTH且ApiBusinessType为NORMAL时生效。标示业务API绑定的oauth2.0授权API唯一ID。
         * @type {string || null}
         */
        this.AuthRelationApiId = null;

        /**
         * API的后端服务参数。
         * @type {Array.<ServiceParameter> || null}
         */
        this.ServiceParameters = null;

        /**
         * oauth配置。当AuthType是OAUTH时生效。
         * @type {OauthConfig || null}
         */
        this.OauthConfig = null;

        /**
         * 用户自定义错误码配置。
         * @type {Array.<ResponseErrorCodeReq> || null}
         */
        this.ResponseErrorCodes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;

        if (params.RequestConfig) {
            let obj = new RequestConfig();
            obj.deserialize(params.RequestConfig)
            this.RequestConfig = obj;
        }
        this.ApiId = 'ApiId' in params ? params.ApiId : null;
        this.ApiName = 'ApiName' in params ? params.ApiName : null;
        this.ApiDesc = 'ApiDesc' in params ? params.ApiDesc : null;
        this.ApiType = 'ApiType' in params ? params.ApiType : null;
        this.AuthType = 'AuthType' in params ? params.AuthType : null;
        this.AuthRequired = 'AuthRequired' in params ? params.AuthRequired : null;
        this.ServiceTimeout = 'ServiceTimeout' in params ? params.ServiceTimeout : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.EnableCORS = 'EnableCORS' in params ? params.EnableCORS : null;

        if (params.ConstantParameters) {
            this.ConstantParameters = new Array();
            for (let z in params.ConstantParameters) {
                let obj = new ConstantParameter();
                obj.deserialize(params.ConstantParameters[z]);
                this.ConstantParameters.push(obj);
            }
        }

        if (params.RequestParameters) {
            this.RequestParameters = new Array();
            for (let z in params.RequestParameters) {
                let obj = new ReqParameter();
                obj.deserialize(params.RequestParameters[z]);
                this.RequestParameters.push(obj);
            }
        }
        this.ApiBusinessType = 'ApiBusinessType' in params ? params.ApiBusinessType : null;
        this.ServiceMockReturnMessage = 'ServiceMockReturnMessage' in params ? params.ServiceMockReturnMessage : null;

        if (params.MicroServices) {
            this.MicroServices = new Array();
            for (let z in params.MicroServices) {
                let obj = new MicroServiceReq();
                obj.deserialize(params.MicroServices[z]);
                this.MicroServices.push(obj);
            }
        }

        if (params.ServiceTsfLoadBalanceConf) {
            let obj = new TsfLoadBalanceConfResp();
            obj.deserialize(params.ServiceTsfLoadBalanceConf)
            this.ServiceTsfLoadBalanceConf = obj;
        }

        if (params.ServiceTsfHealthCheckConf) {
            let obj = new HealthCheckConf();
            obj.deserialize(params.ServiceTsfHealthCheckConf)
            this.ServiceTsfHealthCheckConf = obj;
        }
        this.TargetServicesLoadBalanceConf = 'TargetServicesLoadBalanceConf' in params ? params.TargetServicesLoadBalanceConf : null;

        if (params.TargetServicesHealthCheckConf) {
            let obj = new HealthCheckConf();
            obj.deserialize(params.TargetServicesHealthCheckConf)
            this.TargetServicesHealthCheckConf = obj;
        }
        this.ServiceScfFunctionName = 'ServiceScfFunctionName' in params ? params.ServiceScfFunctionName : null;
        this.ServiceWebsocketRegisterFunctionName = 'ServiceWebsocketRegisterFunctionName' in params ? params.ServiceWebsocketRegisterFunctionName : null;
        this.ServiceWebsocketCleanupFunctionName = 'ServiceWebsocketCleanupFunctionName' in params ? params.ServiceWebsocketCleanupFunctionName : null;
        this.ServiceWebsocketTransportFunctionName = 'ServiceWebsocketTransportFunctionName' in params ? params.ServiceWebsocketTransportFunctionName : null;
        this.ServiceScfFunctionNamespace = 'ServiceScfFunctionNamespace' in params ? params.ServiceScfFunctionNamespace : null;
        this.ServiceScfFunctionQualifier = 'ServiceScfFunctionQualifier' in params ? params.ServiceScfFunctionQualifier : null;
        this.ServiceWebsocketRegisterFunctionNamespace = 'ServiceWebsocketRegisterFunctionNamespace' in params ? params.ServiceWebsocketRegisterFunctionNamespace : null;
        this.ServiceWebsocketRegisterFunctionQualifier = 'ServiceWebsocketRegisterFunctionQualifier' in params ? params.ServiceWebsocketRegisterFunctionQualifier : null;
        this.ServiceWebsocketTransportFunctionNamespace = 'ServiceWebsocketTransportFunctionNamespace' in params ? params.ServiceWebsocketTransportFunctionNamespace : null;
        this.ServiceWebsocketTransportFunctionQualifier = 'ServiceWebsocketTransportFunctionQualifier' in params ? params.ServiceWebsocketTransportFunctionQualifier : null;
        this.ServiceWebsocketCleanupFunctionNamespace = 'ServiceWebsocketCleanupFunctionNamespace' in params ? params.ServiceWebsocketCleanupFunctionNamespace : null;
        this.ServiceWebsocketCleanupFunctionQualifier = 'ServiceWebsocketCleanupFunctionQualifier' in params ? params.ServiceWebsocketCleanupFunctionQualifier : null;
        this.ServiceScfIsIntegratedResponse = 'ServiceScfIsIntegratedResponse' in params ? params.ServiceScfIsIntegratedResponse : null;
        this.IsDebugAfterCharge = 'IsDebugAfterCharge' in params ? params.IsDebugAfterCharge : null;

        if (params.TagSpecifications) {
            let obj = new Tag();
            obj.deserialize(params.TagSpecifications)
            this.TagSpecifications = obj;
        }
        this.IsDeleteResponseErrorCodes = 'IsDeleteResponseErrorCodes' in params ? params.IsDeleteResponseErrorCodes : null;
        this.ResponseType = 'ResponseType' in params ? params.ResponseType : null;
        this.ResponseSuccessExample = 'ResponseSuccessExample' in params ? params.ResponseSuccessExample : null;
        this.ResponseFailExample = 'ResponseFailExample' in params ? params.ResponseFailExample : null;

        if (params.ServiceConfig) {
            let obj = new ServiceConfig();
            obj.deserialize(params.ServiceConfig)
            this.ServiceConfig = obj;
        }
        this.AuthRelationApiId = 'AuthRelationApiId' in params ? params.AuthRelationApiId : null;

        if (params.ServiceParameters) {
            this.ServiceParameters = new Array();
            for (let z in params.ServiceParameters) {
                let obj = new ServiceParameter();
                obj.deserialize(params.ServiceParameters[z]);
                this.ServiceParameters.push(obj);
            }
        }

        if (params.OauthConfig) {
            let obj = new OauthConfig();
            obj.deserialize(params.OauthConfig)
            this.OauthConfig = obj;
        }

        if (params.ResponseErrorCodes) {
            this.ResponseErrorCodes = new Array();
            for (let z in params.ResponseErrorCodes) {
                let obj = new ResponseErrorCodeReq();
                obj.deserialize(params.ResponseErrorCodes[z]);
                this.ResponseErrorCodes.push(obj);
            }
        }

    }
}

/**
 * ModifyUsagePlan请求参数结构体
 * @class
 */
class ModifyUsagePlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 使用计划唯一 ID。
         * @type {string || null}
         */
        this.UsagePlanId = null;

        /**
         * 修改后的用户自定义的使用计划名称。
         * @type {string || null}
         */
        this.UsagePlanName = null;

        /**
         * 修改后的用户自定义的使用计划描述。
         * @type {string || null}
         */
        this.UsagePlanDesc = null;

        /**
         * 请求配额总数，取值范围为-1或者[1, 99999999]，默认为-1，表示不开启。
         * @type {number || null}
         */
        this.MaxRequestNum = null;

        /**
         * 每秒请求限制数，取值范围为-1或者[1, 2000]，默认-1，表示不开启。
         * @type {number || null}
         */
        this.MaxRequestNumPreSec = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UsagePlanId = 'UsagePlanId' in params ? params.UsagePlanId : null;
        this.UsagePlanName = 'UsagePlanName' in params ? params.UsagePlanName : null;
        this.UsagePlanDesc = 'UsagePlanDesc' in params ? params.UsagePlanDesc : null;
        this.MaxRequestNum = 'MaxRequestNum' in params ? params.MaxRequestNum : null;
        this.MaxRequestNumPreSec = 'MaxRequestNumPreSec' in params ? params.MaxRequestNumPreSec : null;

    }
}

/**
 * api请求配置
 * @class
 */
class ApiRequestConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * path
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 方法
         * @type {string || null}
         */
        this.Method = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Path = 'Path' in params ? params.Path : null;
        this.Method = 'Method' in params ? params.Method : null;

    }
}

/**
 * ModifyService请求参数结构体
 * @class
 */
class ModifyServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待修改服务的唯一 Id。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 修改后的服务名称。
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * 修改后的服务描述。
         * @type {string || null}
         */
        this.ServiceDesc = null;

        /**
         * 修改后的服务前端请求类型，如 http、https和 http&https。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 网络类型列表，用于指定支持的访问类型，INNER为内网访问，OUTER为外网访问。默认为OUTER。
         * @type {Array.<string> || null}
         */
        this.NetTypes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.ServiceDesc = 'ServiceDesc' in params ? params.ServiceDesc : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.NetTypes = 'NetTypes' in params ? params.NetTypes : null;

    }
}

/**
 * API状态
 * @class
 */
class ApiIdStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务唯一ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * API唯一ID。
         * @type {string || null}
         */
        this.ApiId = null;

        /**
         * API描述
         * @type {string || null}
         */
        this.ApiDesc = null;

        /**
         * API PATH。
         * @type {string || null}
         */
        this.Path = null;

        /**
         * API METHOD。
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 服务创建时间。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 服务修改时间。
         * @type {string || null}
         */
        this.ModifiedTime = null;

        /**
         * API名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApiName = null;

        /**
         * VPC唯一ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * API类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApiType = null;

        /**
         * API协议。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 是否买后调试。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsDebugAfterCharge = null;

        /**
         * 授权类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AuthType = null;

        /**
         * API业务类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApiBusinessType = null;

        /**
         * 关联授权API唯一ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AuthRelationApiId = null;

        /**
         * 授权API关联的业务API列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.RelationBuniessApiIds = null;

        /**
         * oauth配置信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OauthConfig || null}
         */
        this.OauthConfig = null;

        /**
         * oauth2.0API请求，token存放位置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TokenLocation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ApiId = 'ApiId' in params ? params.ApiId : null;
        this.ApiDesc = 'ApiDesc' in params ? params.ApiDesc : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;
        this.ApiName = 'ApiName' in params ? params.ApiName : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.ApiType = 'ApiType' in params ? params.ApiType : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.IsDebugAfterCharge = 'IsDebugAfterCharge' in params ? params.IsDebugAfterCharge : null;
        this.AuthType = 'AuthType' in params ? params.AuthType : null;
        this.ApiBusinessType = 'ApiBusinessType' in params ? params.ApiBusinessType : null;
        this.AuthRelationApiId = 'AuthRelationApiId' in params ? params.AuthRelationApiId : null;
        this.RelationBuniessApiIds = 'RelationBuniessApiIds' in params ? params.RelationBuniessApiIds : null;

        if (params.OauthConfig) {
            let obj = new OauthConfig();
            obj.deserialize(params.OauthConfig)
            this.OauthConfig = obj;
        }
        this.TokenLocation = 'TokenLocation' in params ? params.TokenLocation : null;

    }
}

/**
 * CreateApi请求参数结构体
 * @class
 */
class CreateApiRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * API 所在的服务唯一 ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * API 的后端服务类型。支持HTTP、MOCK、TSF、CLB、SCF、WEBSOCKET、TARGET（内测）。
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * API 的后端服务超时时间，单位是秒。
         * @type {number || null}
         */
        this.ServiceTimeout = null;

        /**
         * API 的前端请求类型，如 HTTP 或 HTTPS 或者 HTTP 和 HTTPS。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 请求的前端配置。
         * @type {ApiRequestConfig || null}
         */
        this.RequestConfig = null;

        /**
         * 用户自定义的 API 名称。
         * @type {string || null}
         */
        this.ApiName = null;

        /**
         * 用户自定义的 API 接口描述。
         * @type {string || null}
         */
        this.ApiDesc = null;

        /**
         * API 类型，支持NORMAL（普通API）和TSF（微服务API），默认为NORMAL。
         * @type {string || null}
         */
        this.ApiType = null;

        /**
         * API 鉴权类型。支持SECRET（密钥对鉴权）、NONE（免鉴权）、OAUTH。默认为NONE。
         * @type {string || null}
         */
        this.AuthType = null;

        /**
         * 是否开启跨域。
         * @type {boolean || null}
         */
        this.EnableCORS = null;

        /**
         * 常量参数。
         * @type {Array.<ConstantParameter> || null}
         */
        this.ConstantParameters = null;

        /**
         * 前端请求参数。
         * @type {Array.<RequestParameter> || null}
         */
        this.RequestParameters = null;

        /**
         * 当AuthType 为 OAUTH时，该字段有效， NORMAL：业务api OAUTH：授权API。
         * @type {string || null}
         */
        this.ApiBusinessType = null;

        /**
         * API 的后端 Mock 返回信息。如果 ServiceType 是 Mock，则此参数必传。
         * @type {string || null}
         */
        this.ServiceMockReturnMessage = null;

        /**
         * API绑定微服务服务列表。
         * @type {Array.<MicroServiceReq> || null}
         */
        this.MicroServices = null;

        /**
         * 微服务的负载均衡配置。
         * @type {TsfLoadBalanceConfResp || null}
         */
        this.ServiceTsfLoadBalanceConf = null;

        /**
         * 微服务的健康检查配置。
         * @type {HealthCheckConf || null}
         */
        this.ServiceTsfHealthCheckConf = null;

        /**
         * target类型后端资源信息。（内测阶段）
         * @type {Array.<TargetServicesReq> || null}
         */
        this.TargetServices = null;

        /**
         * target类型负载均衡配置。（内测阶段）
         * @type {number || null}
         */
        this.TargetServicesLoadBalanceConf = null;

        /**
         * target健康检查配置。（内测阶段）
         * @type {HealthCheckConf || null}
         */
        this.TargetServicesHealthCheckConf = null;

        /**
         * scf 函数名称。当后端类型是SCF时生效。
         * @type {string || null}
         */
        this.ServiceScfFunctionName = null;

        /**
         * scf websocket注册函数。当前端类型是WEBSOCKET且后端类型是SCF时生效。
         * @type {string || null}
         */
        this.ServiceWebsocketRegisterFunctionName = null;

        /**
         * scf websocket清理函数。当前端类型是WEBSOCKET且后端类型是SCF时生效。
         * @type {string || null}
         */
        this.ServiceWebsocketCleanupFunctionName = null;

        /**
         * scf websocket传输函数。当前端类型是WEBSOCKET且后端类型是SCF时生效。
         * @type {string || null}
         */
        this.ServiceWebsocketTransportFunctionName = null;

        /**
         * scf 函数命名空间。当后端类型是SCF时生效。
         * @type {string || null}
         */
        this.ServiceScfFunctionNamespace = null;

        /**
         * scf函数版本。当后端类型是SCF时生效。
         * @type {string || null}
         */
        this.ServiceScfFunctionQualifier = null;

        /**
         * scf websocket注册函数命名空间。当前端类型是WEBSOCKET且后端类型是SCF时生效。
         * @type {string || null}
         */
        this.ServiceWebsocketRegisterFunctionNamespace = null;

        /**
         * scf websocket传输函数版本。当前端类型是WEBSOCKET且后端类型是SCF时生效。
         * @type {string || null}
         */
        this.ServiceWebsocketRegisterFunctionQualifier = null;

        /**
         * scf websocket传输函数命名空间。当前端类型是WEBSOCKET且后端类型是SCF时生效。
         * @type {string || null}
         */
        this.ServiceWebsocketTransportFunctionNamespace = null;

        /**
         * scf websocket传输函数版本。当前端类型是WEBSOCKET且后端类型是SCF时生效。
         * @type {string || null}
         */
        this.ServiceWebsocketTransportFunctionQualifier = null;

        /**
         * scf websocket清理函数命名空间。当前端类型是WEBSOCKET且后端类型是SCF时生效。
         * @type {string || null}
         */
        this.ServiceWebsocketCleanupFunctionNamespace = null;

        /**
         * scf websocket清理函数版本。当前端类型是WEBSOCKET且后端类型是SCF时生效。
         * @type {string || null}
         */
        this.ServiceWebsocketCleanupFunctionQualifier = null;

        /**
         * 是否开启响应集成。当后端类型是SCF时生效。
         * @type {boolean || null}
         */
        this.ServiceScfIsIntegratedResponse = null;

        /**
         * 开始调试后计费。（云市场预留字段）
         * @type {boolean || null}
         */
        this.IsDebugAfterCharge = null;

        /**
         * 是否删除自定义响应配置错误码，如果不传或者传 False，不删除，当传 True 时，则删除此 API 所有自定义响应配置错误码。
         * @type {boolean || null}
         */
        this.IsDeleteResponseErrorCodes = null;

        /**
         * 返回类型。
         * @type {string || null}
         */
        this.ResponseType = null;

        /**
         * 自定义响应配置成功响应示例。
         * @type {string || null}
         */
        this.ResponseSuccessExample = null;

        /**
         * 自定义响应配置失败响应示例。
         * @type {string || null}
         */
        this.ResponseFailExample = null;

        /**
         * API 的后端服务配置。
         * @type {ServiceConfig || null}
         */
        this.ServiceConfig = null;

        /**
         * 关联的授权API 唯一 ID，当AuthType为OAUTH且ApiBusinessType为NORMAL时生效。标示业务API绑定的oauth2.0授权API唯一ID。
         * @type {string || null}
         */
        this.AuthRelationApiId = null;

        /**
         * API的后端服务参数。
         * @type {Array.<ServiceParameter> || null}
         */
        this.ServiceParameters = null;

        /**
         * oauth配置。当AuthType是OAUTH时生效。
         * @type {OauthConfig || null}
         */
        this.OauthConfig = null;

        /**
         * 用户自定义错误码配置。
         * @type {Array.<ResponseErrorCodeReq> || null}
         */
        this.ResponseErrorCodes = null;

        /**
         * tsf serverless 命名空间ID。（内测中）
         * @type {string || null}
         */
        this.TargetNamespaceId = null;

        /**
         * 用户类型。
         * @type {string || null}
         */
        this.UserType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;
        this.ServiceTimeout = 'ServiceTimeout' in params ? params.ServiceTimeout : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

        if (params.RequestConfig) {
            let obj = new ApiRequestConfig();
            obj.deserialize(params.RequestConfig)
            this.RequestConfig = obj;
        }
        this.ApiName = 'ApiName' in params ? params.ApiName : null;
        this.ApiDesc = 'ApiDesc' in params ? params.ApiDesc : null;
        this.ApiType = 'ApiType' in params ? params.ApiType : null;
        this.AuthType = 'AuthType' in params ? params.AuthType : null;
        this.EnableCORS = 'EnableCORS' in params ? params.EnableCORS : null;

        if (params.ConstantParameters) {
            this.ConstantParameters = new Array();
            for (let z in params.ConstantParameters) {
                let obj = new ConstantParameter();
                obj.deserialize(params.ConstantParameters[z]);
                this.ConstantParameters.push(obj);
            }
        }

        if (params.RequestParameters) {
            this.RequestParameters = new Array();
            for (let z in params.RequestParameters) {
                let obj = new RequestParameter();
                obj.deserialize(params.RequestParameters[z]);
                this.RequestParameters.push(obj);
            }
        }
        this.ApiBusinessType = 'ApiBusinessType' in params ? params.ApiBusinessType : null;
        this.ServiceMockReturnMessage = 'ServiceMockReturnMessage' in params ? params.ServiceMockReturnMessage : null;

        if (params.MicroServices) {
            this.MicroServices = new Array();
            for (let z in params.MicroServices) {
                let obj = new MicroServiceReq();
                obj.deserialize(params.MicroServices[z]);
                this.MicroServices.push(obj);
            }
        }

        if (params.ServiceTsfLoadBalanceConf) {
            let obj = new TsfLoadBalanceConfResp();
            obj.deserialize(params.ServiceTsfLoadBalanceConf)
            this.ServiceTsfLoadBalanceConf = obj;
        }

        if (params.ServiceTsfHealthCheckConf) {
            let obj = new HealthCheckConf();
            obj.deserialize(params.ServiceTsfHealthCheckConf)
            this.ServiceTsfHealthCheckConf = obj;
        }

        if (params.TargetServices) {
            this.TargetServices = new Array();
            for (let z in params.TargetServices) {
                let obj = new TargetServicesReq();
                obj.deserialize(params.TargetServices[z]);
                this.TargetServices.push(obj);
            }
        }
        this.TargetServicesLoadBalanceConf = 'TargetServicesLoadBalanceConf' in params ? params.TargetServicesLoadBalanceConf : null;

        if (params.TargetServicesHealthCheckConf) {
            let obj = new HealthCheckConf();
            obj.deserialize(params.TargetServicesHealthCheckConf)
            this.TargetServicesHealthCheckConf = obj;
        }
        this.ServiceScfFunctionName = 'ServiceScfFunctionName' in params ? params.ServiceScfFunctionName : null;
        this.ServiceWebsocketRegisterFunctionName = 'ServiceWebsocketRegisterFunctionName' in params ? params.ServiceWebsocketRegisterFunctionName : null;
        this.ServiceWebsocketCleanupFunctionName = 'ServiceWebsocketCleanupFunctionName' in params ? params.ServiceWebsocketCleanupFunctionName : null;
        this.ServiceWebsocketTransportFunctionName = 'ServiceWebsocketTransportFunctionName' in params ? params.ServiceWebsocketTransportFunctionName : null;
        this.ServiceScfFunctionNamespace = 'ServiceScfFunctionNamespace' in params ? params.ServiceScfFunctionNamespace : null;
        this.ServiceScfFunctionQualifier = 'ServiceScfFunctionQualifier' in params ? params.ServiceScfFunctionQualifier : null;
        this.ServiceWebsocketRegisterFunctionNamespace = 'ServiceWebsocketRegisterFunctionNamespace' in params ? params.ServiceWebsocketRegisterFunctionNamespace : null;
        this.ServiceWebsocketRegisterFunctionQualifier = 'ServiceWebsocketRegisterFunctionQualifier' in params ? params.ServiceWebsocketRegisterFunctionQualifier : null;
        this.ServiceWebsocketTransportFunctionNamespace = 'ServiceWebsocketTransportFunctionNamespace' in params ? params.ServiceWebsocketTransportFunctionNamespace : null;
        this.ServiceWebsocketTransportFunctionQualifier = 'ServiceWebsocketTransportFunctionQualifier' in params ? params.ServiceWebsocketTransportFunctionQualifier : null;
        this.ServiceWebsocketCleanupFunctionNamespace = 'ServiceWebsocketCleanupFunctionNamespace' in params ? params.ServiceWebsocketCleanupFunctionNamespace : null;
        this.ServiceWebsocketCleanupFunctionQualifier = 'ServiceWebsocketCleanupFunctionQualifier' in params ? params.ServiceWebsocketCleanupFunctionQualifier : null;
        this.ServiceScfIsIntegratedResponse = 'ServiceScfIsIntegratedResponse' in params ? params.ServiceScfIsIntegratedResponse : null;
        this.IsDebugAfterCharge = 'IsDebugAfterCharge' in params ? params.IsDebugAfterCharge : null;
        this.IsDeleteResponseErrorCodes = 'IsDeleteResponseErrorCodes' in params ? params.IsDeleteResponseErrorCodes : null;
        this.ResponseType = 'ResponseType' in params ? params.ResponseType : null;
        this.ResponseSuccessExample = 'ResponseSuccessExample' in params ? params.ResponseSuccessExample : null;
        this.ResponseFailExample = 'ResponseFailExample' in params ? params.ResponseFailExample : null;

        if (params.ServiceConfig) {
            let obj = new ServiceConfig();
            obj.deserialize(params.ServiceConfig)
            this.ServiceConfig = obj;
        }
        this.AuthRelationApiId = 'AuthRelationApiId' in params ? params.AuthRelationApiId : null;

        if (params.ServiceParameters) {
            this.ServiceParameters = new Array();
            for (let z in params.ServiceParameters) {
                let obj = new ServiceParameter();
                obj.deserialize(params.ServiceParameters[z]);
                this.ServiceParameters.push(obj);
            }
        }

        if (params.OauthConfig) {
            let obj = new OauthConfig();
            obj.deserialize(params.OauthConfig)
            this.OauthConfig = obj;
        }

        if (params.ResponseErrorCodes) {
            this.ResponseErrorCodes = new Array();
            for (let z in params.ResponseErrorCodes) {
                let obj = new ResponseErrorCodeReq();
                obj.deserialize(params.ResponseErrorCodes[z]);
                this.ResponseErrorCodes.push(obj);
            }
        }
        this.TargetNamespaceId = 'TargetNamespaceId' in params ? params.TargetNamespaceId : null;
        this.UserType = 'UserType' in params ? params.UserType : null;

    }
}

/**
 * DescribeServiceEnvironmentStrategy请求参数结构体
 * @class
 */
class DescribeServiceEnvironmentStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务唯一ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 返回数量，默认为 20，最大值为 100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为 0。
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * ReleaseService请求参数结构体
 * @class
 */
class ReleaseServiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待发布服务的唯一 ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 待发布的环境名称，当前支持三个环境，test（测试环境）、prepub（预发布环境）和 release（发布环境）。
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * 本次的发布描述。
         * @type {string || null}
         */
        this.ReleaseDesc = null;

        /**
         * apiId列表，预留字段，默认全量api发布。
         * @type {Array.<string> || null}
         */
        this.ApiIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.ReleaseDesc = 'ReleaseDesc' in params ? params.ReleaseDesc : null;
        this.ApiIds = 'ApiIds' in params ? params.ApiIds : null;

    }
}

/**
 * DeleteService返回参数结构体
 * @class
 */
class DeleteServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
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
 * DescribeServiceEnvironmentReleaseHistory返回参数结构体
 * @class
 */
class DescribeServiceEnvironmentReleaseHistoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务发布历史。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ServiceReleaseHistory || null}
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

        if (params.Result) {
            let obj = new ServiceReleaseHistory();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 服务发布的环境信息。
 * @class
 */
class Environment extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境名称。
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * 访问路径。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 发布状态，1 表示已发布，0 表示未发布。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 运行版本。
         * @type {string || null}
         */
        this.VersionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;

    }
}

/**
 * 服务发布列表详情
 * @class
 */
class ServiceReleaseHistoryInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 版本号。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * 版本描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VersionDesc = null;

        /**
         * 版本发布时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReleaseTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.VersionDesc = 'VersionDesc' in params ? params.VersionDesc : null;
        this.ReleaseTime = 'ReleaseTime' in params ? params.ReleaseTime : null;

    }
}

/**
 * ReleaseService返回参数结构体
 * @class
 */
class ReleaseServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发布信息。
         * @type {ReleaseService || null}
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

        if (params.Result) {
            let obj = new ReleaseService();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnBindIPStrategy请求参数结构体
 * @class
 */
class UnBindIPStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待解绑的服务唯一ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 待解绑的IP策略唯一ID。
         * @type {string || null}
         */
        this.StrategyId = null;

        /**
         * 待解绑的环境。
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * 待解绑的 API 列表。
         * @type {Array.<string> || null}
         */
        this.UnBindApiIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.StrategyId = 'StrategyId' in params ? params.StrategyId : null;
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.UnBindApiIds = 'UnBindApiIds' in params ? params.UnBindApiIds : null;

    }
}

/**
 * ModifyApiIncrement请求参数结构体
 * @class
 */
class ModifyApiIncrementRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务ID
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 接口ID
         * @type {string || null}
         */
        this.ApiId = null;

        /**
         * 需要修改的API auth类型(可选择OAUTH-授权API)
         * @type {string || null}
         */
        this.BusinessType = null;

        /**
         * oauth接口需要修改的公钥值
         * @type {string || null}
         */
        this.PublicKey = null;

        /**
         * oauth接口重定向地址
         * @type {string || null}
         */
        this.LoginRedirectUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ApiId = 'ApiId' in params ? params.ApiId : null;
        this.BusinessType = 'BusinessType' in params ? params.BusinessType : null;
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;
        this.LoginRedirectUrl = 'LoginRedirectUrl' in params ? params.LoginRedirectUrl : null;

    }
}

/**
 * GenerateApiDocument请求参数结构体
 * @class
 */
class GenerateApiDocumentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待创建文档的服务唯一 ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 待创建 SDK 的服务所在环境。
         * @type {string || null}
         */
        this.GenEnvironment = null;

        /**
         * 待创建 SDK 的语言。当前只支持 Python 和 JavaScript。
         * @type {string || null}
         */
        this.GenLanguage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.GenEnvironment = 'GenEnvironment' in params ? params.GenEnvironment : null;
        this.GenLanguage = 'GenLanguage' in params ? params.GenLanguage : null;

    }
}

/**
 * 服务绑定使用计划列表
 * @class
 */
class ServiceUsagePlanSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务上绑定的使用计划总数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 服务上绑定的使用计划列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ApiUsagePlan> || null}
         */
        this.ServiceUsagePlanList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ServiceUsagePlanList) {
            this.ServiceUsagePlanList = new Array();
            for (let z in params.ServiceUsagePlanList) {
                let obj = new ApiUsagePlan();
                obj.deserialize(params.ServiceUsagePlanList[z]);
                this.ServiceUsagePlanList.push(obj);
            }
        }

    }
}

/**
 * DescribeIPStrategyApisStatus返回参数结构体
 * @class
 */
class DescribeIPStrategyApisStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境绑定API列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IPStrategyApiStatus || null}
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

        if (params.Result) {
            let obj = new IPStrategyApiStatus();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyServiceEnvironmentStrategy返回参数结构体
 * @class
 */
class ModifyServiceEnvironmentStrategyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
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
 * UpdateApiKey返回参数结构体
 * @class
 */
class UpdateApiKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 更换后的密钥详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ApiKey || null}
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

        if (params.Result) {
            let obj = new ApiKey();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeApisStatus返回参数结构体
 * @class
 */
class DescribeApisStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * API 详情列表。
         * @type {ApisStatus || null}
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

        if (params.Result) {
            let obj = new ApisStatus();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeApiKeysStatus请求参数结构体
 * @class
 */
class DescribeApiKeysStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数量，默认为 20，最大值为 100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为 0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件。支持AccessKeyId、AccessKeySecret、SecretName、NotUsagePlanId、Status、KeyWord（ 可以匹配name或者path）。
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * DescribeApi返回参数结构体
 * @class
 */
class DescribeApiResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * API 详情。
         * @type {ApiInfo || null}
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

        if (params.Result) {
            let obj = new ApiInfo();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindSecretIds返回参数结构体
 * @class
 */
class BindSecretIdsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 绑定操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
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
 * 创建api返回
 * @class
 */
class CreateApiRsp extends  AbstractModel {
    constructor(){
        super();

        /**
         * api id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApiId = null;

        /**
         * path
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Path = null;

        /**
         * method
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApiId = 'ApiId' in params ? params.ApiId : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * 使用计划绑定环境信息
 * @class
 */
class UsagePlanBindEnvironment extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * 服务唯一ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;

    }
}

/**
 * DeleteApi请求参数结构体
 * @class
 */
class DeleteApiRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * API 所在的服务唯一 ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * API 接口唯一 ID。
         * @type {string || null}
         */
        this.ApiId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ApiId = 'ApiId' in params ? params.ApiId : null;

    }
}

/**
 * DescribeServiceSubDomainMappings请求参数结构体
 * @class
 */
class DescribeServiceSubDomainMappingsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务唯一 ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 服务绑定的自定义域名。
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
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;

    }
}

/**
 * DescribeServiceEnvironmentList请求参数结构体
 * @class
 */
class DescribeServiceEnvironmentListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待查询的服务唯一 ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 返回数量，默认为 20，最大值为 100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为 0。
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * 服务自定义域名路径映射
 * @class
 */
class ServiceSubDomainMappings extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否使用默认路径映射，为 True 表示使用默认路径映射；为 False 的话，表示使用自定义路径映射，此时 PathMappingSet 不为空。
         * @type {boolean || null}
         */
        this.IsDefaultMapping = null;

        /**
         * 自定义路径映射列表。
         * @type {Array.<PathMapping> || null}
         */
        this.PathMappingSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsDefaultMapping = 'IsDefaultMapping' in params ? params.IsDefaultMapping : null;

        if (params.PathMappingSet) {
            this.PathMappingSet = new Array();
            for (let z in params.PathMappingSet) {
                let obj = new PathMapping();
                obj.deserialize(params.PathMappingSet[z]);
                this.PathMappingSet.push(obj);
            }
        }

    }
}

/**
 * DescribeApiKey请求参数结构体
 * @class
 */
class DescribeApiKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * API 密钥 ID。
         * @type {string || null}
         */
        this.AccessKeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessKeyId = 'AccessKeyId' in params ? params.AccessKeyId : null;

    }
}

/**
 * DescribeUsagePlan返回参数结构体
 * @class
 */
class DescribeUsagePlanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 使用计划详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {UsagePlanInfo || null}
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

        if (params.Result) {
            let obj = new UsagePlanInfo();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * >描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等
> * 若存在多个`Filter`时，`Filter`间的关系为逻辑与（`AND`）关系。
> * 若同一个`Filter`存在多个`Values`，同一`Filter`下`Values`间的关系为逻辑或（`OR`）关系。
>

 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要过滤的字段。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 字段的过滤值。
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
 * 使用计划绑定密钥列表
 * @class
 */
class UsagePlanBindSecretStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 使用计划绑定密钥的数量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 密钥详情列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UsagePlanBindSecret> || null}
         */
        this.AccessKeyList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.AccessKeyList) {
            this.AccessKeyList = new Array();
            for (let z in params.AccessKeyList) {
                let obj = new UsagePlanBindSecret();
                obj.deserialize(params.AccessKeyList[z]);
                this.AccessKeyList.push(obj);
            }
        }

    }
}

/**
 * DeleteServiceSubDomainMapping返回参数结构体
 * @class
 */
class DeleteServiceSubDomainMappingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除自定义域名的路径映射操作是否成功。
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
 * DescribeServiceUsagePlan请求参数结构体
 * @class
 */
class DescribeServiceUsagePlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待查询的服务唯一 ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 返回数量，默认为20，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeUsagePlansStatus请求参数结构体
 * @class
 */
class DescribeUsagePlansStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数量，默认为 20，最大值为 100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为 0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 使用计划过滤条件。支持UsagePlanId、UsagePlanName、NotServiceId、NotApiId、Environment。
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * 使用计划绑定环境详情。
 * @class
 */
class UsagePlanEnvironment extends  AbstractModel {
    constructor(){
        super();

        /**
         * 绑定的服务唯一 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * API 的唯一ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApiId = null;

        /**
         * API 的名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApiName = null;

        /**
         * API 的路径。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Path = null;

        /**
         * API 的方法。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 已经绑定的环境名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Environment = null;

        /**
         * 已经使用的配额。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InUseRequestNum = null;

        /**
         * 最大请求量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxRequestNum = null;

        /**
         * 每秒最大请求次数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxRequestNumPreSec = null;

        /**
         * 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 最后修改时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModifiedTime = null;

        /**
         * 服务名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ApiId = 'ApiId' in params ? params.ApiId : null;
        this.ApiName = 'ApiName' in params ? params.ApiName : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.Environment = 'Environment' in params ? params.Environment : null;
        this.InUseRequestNum = 'InUseRequestNum' in params ? params.InUseRequestNum : null;
        this.MaxRequestNum = 'MaxRequestNum' in params ? params.MaxRequestNum : null;
        this.MaxRequestNumPreSec = 'MaxRequestNumPreSec' in params ? params.MaxRequestNumPreSec : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;

    }
}

/**
 * ModifyIPStrategy请求参数结构体
 * @class
 */
class ModifyIPStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待修改的策略所属服务的唯一ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 待修改的策略唯一ID。
         * @type {string || null}
         */
        this.StrategyId = null;

        /**
         * 待修改的策略详情。
         * @type {string || null}
         */
        this.StrategyData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.StrategyId = 'StrategyId' in params ? params.StrategyId : null;
        this.StrategyData = 'StrategyData' in params ? params.StrategyData : null;

    }
}

/**
 * UnBindSecretIds请求参数结构体
 * @class
 */
class UnBindSecretIdsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待解绑的使用计划唯一 ID。
         * @type {string || null}
         */
        this.UsagePlanId = null;

        /**
         * 待解绑的密钥 ID 数组。
         * @type {Array.<string> || null}
         */
        this.AccessKeyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UsagePlanId = 'UsagePlanId' in params ? params.UsagePlanId : null;
        this.AccessKeyIds = 'AccessKeyIds' in params ? params.AccessKeyIds : null;

    }
}

/**
 * api环境绑定策略
 * @class
 */
class ApiEnvironmentStrategy extends  AbstractModel {
    constructor(){
        super();

        /**
         * API唯一ID。
         * @type {string || null}
         */
        this.ApiId = null;

        /**
         * 用户自定义API名称。
         * @type {string || null}
         */
        this.ApiName = null;

        /**
         * API的路径。如/path。
         * @type {string || null}
         */
        this.Path = null;

        /**
         * API的方法。如GET。
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 环境的限流信息。
         * @type {Array.<EnvironmentStrategy> || null}
         */
        this.EnvironmentStrategySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApiId = 'ApiId' in params ? params.ApiId : null;
        this.ApiName = 'ApiName' in params ? params.ApiName : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Method = 'Method' in params ? params.Method : null;

        if (params.EnvironmentStrategySet) {
            this.EnvironmentStrategySet = new Array();
            for (let z in params.EnvironmentStrategySet) {
                let obj = new EnvironmentStrategy();
                obj.deserialize(params.EnvironmentStrategySet[z]);
                this.EnvironmentStrategySet.push(obj);
            }
        }

    }
}

/**
 * UnBindSecretIds返回参数结构体
 * @class
 */
class UnBindSecretIdsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 解绑操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
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
 * api或service绑定使用计划详情
 * @class
 */
class ApiUsagePlan extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务唯一ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * API 唯一 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApiId = null;

        /**
         * API 名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApiName = null;

        /**
         * API 路径。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Path = null;

        /**
         * API 方法。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 使用计划的唯一 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UsagePlanId = null;

        /**
         * 使用计划的名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UsagePlanName = null;

        /**
         * 使用计划的描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UsagePlanDesc = null;

        /**
         * 使用计划绑定的服务环境。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Environment = null;

        /**
         * 已经使用的配额。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InUseRequestNum = null;

        /**
         * 请求配额总量，-1表示没有限制。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxRequestNum = null;

        /**
         * 请求 QPS 上限，-1 表示没有限制。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxRequestNumPreSec = null;

        /**
         * 使用计划创建时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 使用计划最后修改时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModifiedTime = null;

        /**
         * 服务名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ApiId = 'ApiId' in params ? params.ApiId : null;
        this.ApiName = 'ApiName' in params ? params.ApiName : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.UsagePlanId = 'UsagePlanId' in params ? params.UsagePlanId : null;
        this.UsagePlanName = 'UsagePlanName' in params ? params.UsagePlanName : null;
        this.UsagePlanDesc = 'UsagePlanDesc' in params ? params.UsagePlanDesc : null;
        this.Environment = 'Environment' in params ? params.Environment : null;
        this.InUseRequestNum = 'InUseRequestNum' in params ? params.InUseRequestNum : null;
        this.MaxRequestNum = 'MaxRequestNum' in params ? params.MaxRequestNum : null;
        this.MaxRequestNumPreSec = 'MaxRequestNumPreSec' in params ? params.MaxRequestNumPreSec : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;

    }
}

/**
 * 策略绑定api列表
 * @class
 */
class IPStrategyApi extends  AbstractModel {
    constructor(){
        super();

        /**
         * API 唯一 ID。
         * @type {string || null}
         */
        this.ApiId = null;

        /**
         * 用户自定义的 API 名称。
         * @type {string || null}
         */
        this.ApiName = null;

        /**
         * API 类型。取值为NORMAL（普通API）和TSF （微服务API）。
         * @type {string || null}
         */
        this.ApiType = null;

        /**
         * API 的路径。如 /path。
         * @type {string || null}
         */
        this.Path = null;

        /**
         * API 的请求方法。如 GET。
         * @type {string || null}
         */
        this.Method = null;

        /**
         * API 已经绑定的其他策略唯一ID。
         * @type {string || null}
         */
        this.OtherIPStrategyId = null;

        /**
         * API 已经绑定的环境。
         * @type {string || null}
         */
        this.OtherEnvironmentName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApiId = 'ApiId' in params ? params.ApiId : null;
        this.ApiName = 'ApiName' in params ? params.ApiName : null;
        this.ApiType = 'ApiType' in params ? params.ApiType : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.OtherIPStrategyId = 'OtherIPStrategyId' in params ? params.OtherIPStrategyId : null;
        this.OtherEnvironmentName = 'OtherEnvironmentName' in params ? params.OtherEnvironmentName : null;

    }
}

/**
 * api文档下载
 * @class
 */
class DocumentSDK extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生成的 document 会存放到 COS 中，此出参返回产生文件的下载链接。
         * @type {string || null}
         */
        this.DocumentURL = null;

        /**
         * 生成的 SDK 会存放到 COS 中，此出参返回产生 SDK 文件的下载链接。
         * @type {string || null}
         */
        this.SdkURL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DocumentURL = 'DocumentURL' in params ? params.DocumentURL : null;
        this.SdkURL = 'SdkURL' in params ? params.SdkURL : null;

    }
}

/**
 * ModifyServiceEnvironmentStrategy请求参数结构体
 * @class
 */
class ModifyServiceEnvironmentStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务的唯一ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 限流值。
         * @type {number || null}
         */
        this.Strategy = null;

        /**
         * 环境列表。
         * @type {Array.<string> || null}
         */
        this.EnvironmentNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.EnvironmentNames = 'EnvironmentNames' in params ? params.EnvironmentNames : null;

    }
}

/**
 * DescribeServiceSubDomains请求参数结构体
 * @class
 */
class DescribeServiceSubDomainsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务唯一 ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 返回数量，默认为 20，最大值为 100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为 0。
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * GenerateApiDocument返回参数结构体
 * @class
 */
class GenerateApiDocumentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * api文档&sdk链接。
         * @type {DocumentSDK || null}
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

        if (params.Result) {
            let obj = new DocumentSDK();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUsagePlanEnvironments返回参数结构体
 * @class
 */
class DescribeUsagePlanEnvironmentsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 使用计划绑定详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {UsagePlanEnvironmentStatus || null}
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

        if (params.Result) {
            let obj = new UsagePlanEnvironmentStatus();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeServiceSubDomains返回参数结构体
 * @class
 */
class DescribeServiceSubDomainsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询服务自定义域名列表。
         * @type {DomainSets || null}
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

        if (params.Result) {
            let obj = new DomainSets();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindSubDomain请求参数结构体
 * @class
 */
class BindSubDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务唯一 ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 待绑定的自定义的域名。
         * @type {string || null}
         */
        this.SubDomain = null;

        /**
         * 服务支持协议，可选值为http、https、http&https。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 网络类型，可选值为OUTER、INNER。
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * 是否使用默认路径映射，默认为 true。为 false 时，表示自定义路径映射，此时 PathMappingSet 必填。
         * @type {boolean || null}
         */
        this.IsDefaultMapping = null;

        /**
         * 默认域名。
         * @type {string || null}
         */
        this.NetSubDomain = null;

        /**
         * 待绑定自定义域名的证书唯一 ID。针对Protocol 为https或http&https可以选择上传。
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * 自定义域名路径映射，最多输入三个Environment，并且只能分别取值“test”、 ”prepub“、”release“。
         * @type {Array.<PathMapping> || null}
         */
        this.PathMappingSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.IsDefaultMapping = 'IsDefaultMapping' in params ? params.IsDefaultMapping : null;
        this.NetSubDomain = 'NetSubDomain' in params ? params.NetSubDomain : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;

        if (params.PathMappingSet) {
            this.PathMappingSet = new Array();
            for (let z in params.PathMappingSet) {
                let obj = new PathMapping();
                obj.deserialize(params.PathMappingSet[z]);
                this.PathMappingSet.push(obj);
            }
        }

    }
}

/**
 * ip策略绑定api详情
 * @class
 */
class IPStrategyApiStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境绑定API数量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 环境绑定API详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IPStrategyApi> || null}
         */
        this.ApiIdStatusSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ApiIdStatusSet) {
            this.ApiIdStatusSet = new Array();
            for (let z in params.ApiIdStatusSet) {
                let obj = new IPStrategyApi();
                obj.deserialize(params.ApiIdStatusSet[z]);
                this.ApiIdStatusSet.push(obj);
            }
        }

    }
}

/**
 * CreateIPStrategy返回参数结构体
 * @class
 */
class CreateIPStrategyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新建的IP策略详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IPStrategy || null}
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

        if (params.Result) {
            let obj = new IPStrategy();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindIPStrategy请求参数结构体
 * @class
 */
class BindIPStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待绑定的IP策略所属的服务唯一ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 待绑定的IP策略唯一ID。
         * @type {string || null}
         */
        this.StrategyId = null;

        /**
         * IP策略待绑定的环境。
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * IP策略待绑定的API列表。
         * @type {Array.<string> || null}
         */
        this.BindApiIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.StrategyId = 'StrategyId' in params ? params.StrategyId : null;
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.BindApiIds = 'BindApiIds' in params ? params.BindApiIds : null;

    }
}

/**
 * tsf类型入参
 * @class
 */
class MicroServiceReq extends  AbstractModel {
    constructor(){
        super();

        /**
         * 微服务集群。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 微服务命名空间。
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 微服务名称。
         * @type {string || null}
         */
        this.MicroServiceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.MicroServiceName = 'MicroServiceName' in params ? params.MicroServiceName : null;

    }
}

/**
 * 用户自定义错误码
 * @class
 */
class ErrorCodes extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义响应配置错误码。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 自定义响应配置错误信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 自定义响应配置错误码备注。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 自定义错误码转换。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ConvertedCode = null;

        /**
         * 是否需要开启错误码转换。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.NeedConvert = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.ConvertedCode = 'ConvertedCode' in params ? params.ConvertedCode : null;
        this.NeedConvert = 'NeedConvert' in params ? params.NeedConvert : null;

    }
}

/**
 * 环境绑定策略列表
 * @class
 */
class ServiceEnvironmentStrategyStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 限流策略数量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 限流策略列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ServiceEnvironmentStrategy> || null}
         */
        this.EnvironmentList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.EnvironmentList) {
            this.EnvironmentList = new Array();
            for (let z in params.EnvironmentList) {
                let obj = new ServiceEnvironmentStrategy();
                obj.deserialize(params.EnvironmentList[z]);
                this.EnvironmentList.push(obj);
            }
        }

    }
}

/**
 * DescribeApiEnvironmentStrategy返回参数结构体
 * @class
 */
class DescribeApiEnvironmentStrategyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * api绑定策略详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ApiEnvironmentStrategyStataus || null}
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

        if (params.Result) {
            let obj = new ApiEnvironmentStrategyStataus();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * API绑定的微服务信息。
 * @class
 */
class MicroService extends  AbstractModel {
    constructor(){
        super();

        /**
         * 微服务集群ID。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 微服务命名空间ID。
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 微服务名称。
         * @type {string || null}
         */
        this.MicroServiceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.MicroServiceName = 'MicroServiceName' in params ? params.MicroServiceName : null;

    }
}

/**
 * API绑定策略列表
 * @class
 */
class ApiEnvironmentStrategyStataus extends  AbstractModel {
    constructor(){
        super();

        /**
         * API绑定的限流策略数量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * API绑定的限流策略列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ApiEnvironmentStrategy> || null}
         */
        this.ApiEnvironmentStrategySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ApiEnvironmentStrategySet) {
            this.ApiEnvironmentStrategySet = new Array();
            for (let z in params.ApiEnvironmentStrategySet) {
                let obj = new ApiEnvironmentStrategy();
                obj.deserialize(params.ApiEnvironmentStrategySet[z]);
                this.ApiEnvironmentStrategySet.push(obj);
            }
        }

    }
}

/**
 * DeleteIPStrategy返回参数结构体
 * @class
 */
class DeleteIPStrategyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
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
 * 密钥详情
 * @class
 */
class ApiKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建的 API 密钥 ID 。
         * @type {string || null}
         */
        this.AccessKeyId = null;

        /**
         * 创建的 API 密钥 Key。
         * @type {string || null}
         */
        this.AccessKeySecret = null;

        /**
         * 密钥类型，auto 或者 manual。
         * @type {string || null}
         */
        this.AccessKeyType = null;

        /**
         * 用户自定义密钥名称。
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * 最后一次修改时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
         * @type {string || null}
         */
        this.ModifiedTime = null;

        /**
         * 密钥状态。0表示禁用，1表示启用。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
         * @type {string || null}
         */
        this.CreatedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessKeyId = 'AccessKeyId' in params ? params.AccessKeyId : null;
        this.AccessKeySecret = 'AccessKeySecret' in params ? params.AccessKeySecret : null;
        this.AccessKeyType = 'AccessKeyType' in params ? params.AccessKeyType : null;
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * BindEnvironment请求参数结构体
 * @class
 */
class BindEnvironmentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待绑定的使用计划唯一 ID 列表。
         * @type {Array.<string> || null}
         */
        this.UsagePlanIds = null;

        /**
         * 绑定类型，取值为API、SERVICE，默认值为SERVICE。
         * @type {string || null}
         */
        this.BindType = null;

        /**
         * 待绑定的环境。
         * @type {string || null}
         */
        this.Environment = null;

        /**
         * 待绑定的服务唯一 ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * API唯一ID数组，当bindType=API时，需要传入此参数。
         * @type {Array.<string> || null}
         */
        this.ApiIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UsagePlanIds = 'UsagePlanIds' in params ? params.UsagePlanIds : null;
        this.BindType = 'BindType' in params ? params.BindType : null;
        this.Environment = 'Environment' in params ? params.Environment : null;
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ApiIds = 'ApiIds' in params ? params.ApiIds : null;

    }
}

/**
 * DescribeIPStrategy请求参数结构体
 * @class
 */
class DescribeIPStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务唯一ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * IP 策略唯一ID。
         * @type {string || null}
         */
        this.StrategyId = null;

        /**
         * 策略关联的环境。
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * 返回数量，默认为 20，最大值为 100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为 0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件。预留字段，目前不支持过滤。
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
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.StrategyId = 'StrategyId' in params ? params.StrategyId : null;
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * DescribeUsagePlanEnvironments请求参数结构体
 * @class
 */
class DescribeUsagePlanEnvironmentsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待查询的使用计划唯一 ID。
         * @type {string || null}
         */
        this.UsagePlanId = null;

        /**
         * 定类型，取值为 API、SERVICE，默认值为 SERVICE。
         * @type {string || null}
         */
        this.BindType = null;

        /**
         * 返回数量，默认为 20，最大值为 100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为 0。
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UsagePlanId = 'UsagePlanId' in params ? params.UsagePlanId : null;
        this.BindType = 'BindType' in params ? params.BindType : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * CreateApiKey返回参数结构体
 * @class
 */
class CreateApiKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新增的密钥详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ApiKey || null}
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

        if (params.Result) {
            let obj = new ApiKey();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeServiceReleaseVersion返回参数结构体
 * @class
 */
class DescribeServiceReleaseVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务发布版本列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ServiceReleaseVersion || null}
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

        if (params.Result) {
            let obj = new ServiceReleaseVersion();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 请求参数
 * @class
 */
class RequestParameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求参数名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 参数位置
         * @type {string || null}
         */
        this.Position = null;

        /**
         * 参数类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 默认值
         * @type {string || null}
         */
        this.DefaultValue = null;

        /**
         * 是否必须
         * @type {boolean || null}
         */
        this.Required = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.Position = 'Position' in params ? params.Position : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.Required = 'Required' in params ? params.Required : null;

    }
}

/**
 * 使用计划详情。
 * @class
 */
class UsagePlanInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 使用计划唯一 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UsagePlanId = null;

        /**
         * 使用计划名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UsagePlanName = null;

        /**
         * 使用计划描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UsagePlanDesc = null;

        /**
         * 初始化调用次数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InitQuota = null;

        /**
         * 每秒请求限制数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxRequestNumPreSec = null;

        /**
         * 最大调用次数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxRequestNum = null;

        /**
         * 是否隐藏。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsHide = null;

        /**
         * 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 最后修改时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModifiedTime = null;

        /**
         * 绑定密钥的数量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BindSecretIdTotalCount = null;

        /**
         * 绑定密钥的详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.BindSecretIds = null;

        /**
         * 绑定环境数量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BindEnvironmentTotalCount = null;

        /**
         * 绑定环境详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UsagePlanBindEnvironment> || null}
         */
        this.BindEnvironments = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UsagePlanId = 'UsagePlanId' in params ? params.UsagePlanId : null;
        this.UsagePlanName = 'UsagePlanName' in params ? params.UsagePlanName : null;
        this.UsagePlanDesc = 'UsagePlanDesc' in params ? params.UsagePlanDesc : null;
        this.InitQuota = 'InitQuota' in params ? params.InitQuota : null;
        this.MaxRequestNumPreSec = 'MaxRequestNumPreSec' in params ? params.MaxRequestNumPreSec : null;
        this.MaxRequestNum = 'MaxRequestNum' in params ? params.MaxRequestNum : null;
        this.IsHide = 'IsHide' in params ? params.IsHide : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;
        this.BindSecretIdTotalCount = 'BindSecretIdTotalCount' in params ? params.BindSecretIdTotalCount : null;
        this.BindSecretIds = 'BindSecretIds' in params ? params.BindSecretIds : null;
        this.BindEnvironmentTotalCount = 'BindEnvironmentTotalCount' in params ? params.BindEnvironmentTotalCount : null;

        if (params.BindEnvironments) {
            this.BindEnvironments = new Array();
            for (let z in params.BindEnvironments) {
                let obj = new UsagePlanBindEnvironment();
                obj.deserialize(params.BindEnvironments[z]);
                this.BindEnvironments.push(obj);
            }
        }

    }
}

/**
 * DescribeServiceEnvironmentReleaseHistory请求参数结构体
 * @class
 */
class DescribeServiceEnvironmentReleaseHistoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待查询的服务唯一 ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 环境名称。
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * 返回数量，默认为 20，最大值为 100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为 0。
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * 用于使用计划列表展示
 * @class
 */
class UsagePlanStatusInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 使用计划唯一 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UsagePlanId = null;

        /**
         * 用户自定义的使用计划名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UsagePlanName = null;

        /**
         * 用户自定义的使用计划描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UsagePlanDesc = null;

        /**
         * 每秒最大请求次数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxRequestNumPreSec = null;

        /**
         * 请求配额总量，-1表示没有限制。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxRequestNum = null;

        /**
         * 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 最后修改时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModifiedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UsagePlanId = 'UsagePlanId' in params ? params.UsagePlanId : null;
        this.UsagePlanName = 'UsagePlanName' in params ? params.UsagePlanName : null;
        this.UsagePlanDesc = 'UsagePlanDesc' in params ? params.UsagePlanDesc : null;
        this.MaxRequestNumPreSec = 'MaxRequestNumPreSec' in params ? params.MaxRequestNumPreSec : null;
        this.MaxRequestNum = 'MaxRequestNum' in params ? params.MaxRequestNum : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;

    }
}

/**
 * CreateService返回参数结构体
 * @class
 */
class CreateServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务唯一ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 用户自定义服务名称。
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * 用户自定义服务描述。
         * @type {string || null}
         */
        this.ServiceDesc = null;

        /**
         * 外网默认域名。
         * @type {string || null}
         */
        this.OuterSubDomain = null;

        /**
         * vpc内网默认域名。
         * @type {string || null}
         */
        this.InnerSubDomain = null;

        /**
         * 服务创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 网络类型列表，INNER为内网访问，OUTER为外网访问。
         * @type {Array.<string> || null}
         */
        this.NetTypes = null;

        /**
         * IP版本号。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IpVersion = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.ServiceDesc = 'ServiceDesc' in params ? params.ServiceDesc : null;
        this.OuterSubDomain = 'OuterSubDomain' in params ? params.OuterSubDomain : null;
        this.InnerSubDomain = 'InnerSubDomain' in params ? params.InnerSubDomain : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.NetTypes = 'NetTypes' in params ? params.NetTypes : null;
        this.IpVersion = 'IpVersion' in params ? params.IpVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * api状态详情
 * @class
 */
class DesApisStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务唯一ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * API唯一ID。
         * @type {string || null}
         */
        this.ApiId = null;

        /**
         * 用户自定义的 API 接口描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApiDesc = null;

        /**
         * 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 最后修改时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModifiedTime = null;

        /**
         * API 接口的名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApiName = null;

        /**
         * VPCID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VpcId = null;

        /**
         * VPC唯一ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * API类型。取值为NORMAL（普通API）和TSF（微服务API）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApiType = null;

        /**
         * API协议。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 是否买后调试。（云市场预留字段）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsDebugAfterCharge = null;

        /**
         * API 鉴权类型。取值为SECRET（密钥对鉴权）、NONE（免鉴权）、OAUTH。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AuthType = null;

        /**
         * OAUTH API的类型。当AuthType 为 OAUTH时该字段有效， 取值为NORMAL（业务API）和 OAUTH（授权API）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApiBusinessType = null;

        /**
         * 关联的授权API 唯一 ID，当AuthType为OAUTH且ApiBusinessType为NORMAL时生效。标示业务API绑定的oauth2.0授权API唯一ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AuthRelationApiId = null;

        /**
         * OAUTH 配置信息。当AuthType是OAUTH时生效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OauthConfig || null}
         */
        this.OauthConfig = null;

        /**
         * 授权API关联的业务API列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.RelationBuniessApiIds = null;

        /**
         * API关联的标签信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * API 的路径，如 /path。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Path = null;

        /**
         * API 的请求方法，如 GET。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Method = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ApiId = 'ApiId' in params ? params.ApiId : null;
        this.ApiDesc = 'ApiDesc' in params ? params.ApiDesc : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;
        this.ApiName = 'ApiName' in params ? params.ApiName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.ApiType = 'ApiType' in params ? params.ApiType : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.IsDebugAfterCharge = 'IsDebugAfterCharge' in params ? params.IsDebugAfterCharge : null;
        this.AuthType = 'AuthType' in params ? params.AuthType : null;
        this.ApiBusinessType = 'ApiBusinessType' in params ? params.ApiBusinessType : null;
        this.AuthRelationApiId = 'AuthRelationApiId' in params ? params.AuthRelationApiId : null;

        if (params.OauthConfig) {
            let obj = new OauthConfig();
            obj.deserialize(params.OauthConfig)
            this.OauthConfig = obj;
        }
        this.RelationBuniessApiIds = 'RelationBuniessApiIds' in params ? params.RelationBuniessApiIds : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Method = 'Method' in params ? params.Method : null;

    }
}

/**
 * DescribeApiKeysStatus返回参数结构体
 * @class
 */
class DescribeApiKeysStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 密钥列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ApiKeysStatus || null}
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

        if (params.Result) {
            let obj = new ApiKeysStatus();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 服务列表展示
 * @class
 */
class ServicesStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务列表总数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 服务列表详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Service> || null}
         */
        this.ServiceSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ServiceSet) {
            this.ServiceSet = new Array();
            for (let z in params.ServiceSet) {
                let obj = new Service();
                obj.deserialize(params.ServiceSet[z]);
                this.ServiceSet.push(obj);
            }
        }

    }
}

/**
 * DescribeLogSearch请求参数结构体
 * @class
 */
class DescribeLogSearchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 日志结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 服务id
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 保留字段
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 单次要返回的日志条数，单次返回的最大条数为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 根据上次返回的ConText，获取后续的内容，最多可获取10000条
         * @type {string || null}
         */
        this.ConText = null;

        /**
         * 按时间排序 asc（升序）或者 desc（降序），默认为 desc
         * @type {string || null}
         */
        this.Sort = null;

        /**
         * 保留字段
         * @type {string || null}
         */
        this.Query = null;

        /**
         * 检索条件,支持的检索条件如下：
req_id：“=”
api_id：“=”
cip：“=”
uip：“:”
err_msg：“:”
rsp_st：“=” 、“!=” 、 “:” 、 “>” 、 “<”
req_t：”>=“ 、 ”<=“

说明：
“:”表示包含，“!=”表示不等于，字段含义见输出参数的LogSet说明
         * @type {Array.<LogQuery> || null}
         */
        this.LogQuerys = null;

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
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ConText = 'ConText' in params ? params.ConText : null;
        this.Sort = 'Sort' in params ? params.Sort : null;
        this.Query = 'Query' in params ? params.Query : null;

        if (params.LogQuerys) {
            this.LogQuerys = new Array();
            for (let z in params.LogQuerys) {
                let obj = new LogQuery();
                obj.deserialize(params.LogQuerys[z]);
                this.LogQuerys.push(obj);
            }
        }

    }
}

/**
 * 描述api列表状态
 * @class
 */
class ApisStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的 API 接口数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * API 接口列表。
         * @type {Array.<DesApisStatus> || null}
         */
        this.ApiIdStatusSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ApiIdStatusSet) {
            this.ApiIdStatusSet = new Array();
            for (let z in params.ApiIdStatusSet) {
                let obj = new DesApisStatus();
                obj.deserialize(params.ApiIdStatusSet[z]);
                this.ApiIdStatusSet.push(obj);
            }
        }

    }
}

/**
 * 密钥列表
 * @class
 */
class ApiKeysStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的 API 密钥数量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * API 密钥列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ApiKey> || null}
         */
        this.ApiKeySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ApiKeySet) {
            this.ApiKeySet = new Array();
            for (let z in params.ApiKeySet) {
                let obj = new ApiKey();
                obj.deserialize(params.ApiKeySet[z]);
                this.ApiKeySet.push(obj);
            }
        }

    }
}

/**
 * DescribeServiceUsagePlan返回参数结构体
 * @class
 */
class DescribeServiceUsagePlanResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务绑定使用计划列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ServiceUsagePlanSet || null}
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

        if (params.Result) {
            let obj = new ServiceUsagePlanSet();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeApiUsagePlan请求参数结构体
 * @class
 */
class DescribeApiUsagePlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待查询的服务唯一 ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 返回数量，默认为 20，最大值为 100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为 0。
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * UnBindSubDomain请求参数结构体
 * @class
 */
class UnBindSubDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务唯一 ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 待解绑的自定义的域名。
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
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.SubDomain = 'SubDomain' in params ? params.SubDomain : null;

    }
}

/**
 * DescribeApi请求参数结构体
 * @class
 */
class DescribeApiRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * API 所在的服务唯一 ID。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * API 接口唯一 ID。
         * @type {string || null}
         */
        this.ApiId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ApiId = 'ApiId' in params ? params.ApiId : null;

    }
}

/**
 * DescribeIPStrategysStatus返回参数结构体
 * @class
 */
class DescribeIPStrategysStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的策略列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IPStrategysStatus || null}
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

        if (params.Result) {
            let obj = new IPStrategysStatus();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 展示api信息
 * @class
 */
class ApiInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * API 所在的服务唯一 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * API 所在的服务的名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * API 所在的服务的描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceDesc = null;

        /**
         * API 接口唯一 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApiId = null;

        /**
         * API 接口的描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApiDesc = null;

        /**
         * 创建时间，按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 最后修改时间，按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModifiedTime = null;

        /**
         * API 接口的名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApiName = null;

        /**
         * API 类型。可取值为NORMAL（普通API）、TSF（微服务API）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApiType = null;

        /**
         * API 的前端请求类型，如 HTTP 或 HTTPS 或者 HTTP 和 HTTPS。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * API 鉴权类型。可取值为 SECRET（密钥对鉴权）、NONE（免鉴权）、OAUTH。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AuthType = null;

        /**
         * OAUTH API的类型。可取值为NORMAL（业务API）、OAUTH（授权API）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApiBusinessType = null;

        /**
         * OAUTH 业务API 关联的授权API 唯一 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AuthRelationApiId = null;

        /**
         * OAUTH配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OauthConfig || null}
         */
        this.OauthConfig = null;

        /**
         * 是否购买后调试（云市场预留参数）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsDebugAfterCharge = null;

        /**
         * 请求的前端配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RequestConfig || null}
         */
        this.RequestConfig = null;

        /**
         * 返回类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResponseType = null;

        /**
         * 自定义响应配置成功响应示例。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResponseSuccessExample = null;

        /**
         * 自定义响应配置失败响应示例。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResponseFailExample = null;

        /**
         * 用户自定义错误码配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ErrorCodes> || null}
         */
        this.ResponseErrorCodes = null;

        /**
         * 前端请求参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ReqParameter> || null}
         */
        this.RequestParameters = null;

        /**
         * API 的后端服务超时时间，单位是秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ServiceTimeout = null;

        /**
         * API 的后端服务类型。可取值为 HTTP、MOCK、TSF、CLB、SCF、WEBSOCKET、TARGET（内测）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceType = null;

        /**
         * API 的后端服务配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ServiceConfig || null}
         */
        this.ServiceConfig = null;

        /**
         * API的后端服务参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ServiceParameter> || null}
         */
        this.ServiceParameters = null;

        /**
         * 常量参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ConstantParameter> || null}
         */
        this.ConstantParameters = null;

        /**
         * API 的后端 Mock 返回信息。如果 ServiceType 是 Mock，则此参数必传。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceMockReturnMessage = null;

        /**
         * scf 函数名称。当后端类型是SCF时生效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceScfFunctionName = null;

        /**
         * scf 函数命名空间。当后端类型是SCF时生效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceScfFunctionNamespace = null;

        /**
         * scf函数版本。当后端类型是SCF时生效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceScfFunctionQualifier = null;

        /**
         * 是否开启集成响应。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.ServiceScfIsIntegratedResponse = null;

        /**
         * scf websocket注册函数命名空间。当前端类型是WEBSOCKET且后端类型是SCF时生效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceWebsocketRegisterFunctionName = null;

        /**
         * scf websocket注册函数命名空间。当前端类型是WEBSOCKET且后端类型是SCF时生效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceWebsocketRegisterFunctionNamespace = null;

        /**
         * scf websocket传输函数版本。当前端类型是WEBSOCKET且后端类型是SCF时生效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceWebsocketRegisterFunctionQualifier = null;

        /**
         * scf websocket清理函数。当前端类型是WEBSOCKET且后端类型是SCF时生效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceWebsocketCleanupFunctionName = null;

        /**
         * scf websocket清理函数命名空间。当前端类型是WEBSOCKET且后端类型是SCF时生效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceWebsocketCleanupFunctionNamespace = null;

        /**
         * scf websocket清理函数版本。当前端类型是WEBSOCKET且后端类型是SCF时生效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceWebsocketCleanupFunctionQualifier = null;

        /**
         * WEBSOCKET 回推地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InternalDomain = null;

        /**
         * scf websocket传输函数。当前端类型是WEBSOCKET且后端类型是SCF时生效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceWebsocketTransportFunctionName = null;

        /**
         * scf websocket传输函数命名空间。当前端类型是WEBSOCKET且后端类型是SCF时生效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceWebsocketTransportFunctionNamespace = null;

        /**
         * scf websocket传输函数版本。当前端类型是WEBSOCKET且后端类型是SCF时生效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceWebsocketTransportFunctionQualifier = null;

        /**
         * API绑定微服务服务列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MicroService> || null}
         */
        this.MicroServices = null;

        /**
         * 微服务信息详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.MicroServicesInfo = null;

        /**
         * 微服务的负载均衡配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TsfLoadBalanceConfResp || null}
         */
        this.ServiceTsfLoadBalanceConf = null;

        /**
         * 微服务的健康检查配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {HealthCheckConf || null}
         */
        this.ServiceTsfHealthCheckConf = null;

        /**
         * 是否开启跨域。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.EnableCORS = null;

        /**
         * API绑定的tag信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
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
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.ServiceDesc = 'ServiceDesc' in params ? params.ServiceDesc : null;
        this.ApiId = 'ApiId' in params ? params.ApiId : null;
        this.ApiDesc = 'ApiDesc' in params ? params.ApiDesc : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ModifiedTime = 'ModifiedTime' in params ? params.ModifiedTime : null;
        this.ApiName = 'ApiName' in params ? params.ApiName : null;
        this.ApiType = 'ApiType' in params ? params.ApiType : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.AuthType = 'AuthType' in params ? params.AuthType : null;
        this.ApiBusinessType = 'ApiBusinessType' in params ? params.ApiBusinessType : null;
        this.AuthRelationApiId = 'AuthRelationApiId' in params ? params.AuthRelationApiId : null;

        if (params.OauthConfig) {
            let obj = new OauthConfig();
            obj.deserialize(params.OauthConfig)
            this.OauthConfig = obj;
        }
        this.IsDebugAfterCharge = 'IsDebugAfterCharge' in params ? params.IsDebugAfterCharge : null;

        if (params.RequestConfig) {
            let obj = new RequestConfig();
            obj.deserialize(params.RequestConfig)
            this.RequestConfig = obj;
        }
        this.ResponseType = 'ResponseType' in params ? params.ResponseType : null;
        this.ResponseSuccessExample = 'ResponseSuccessExample' in params ? params.ResponseSuccessExample : null;
        this.ResponseFailExample = 'ResponseFailExample' in params ? params.ResponseFailExample : null;

        if (params.ResponseErrorCodes) {
            this.ResponseErrorCodes = new Array();
            for (let z in params.ResponseErrorCodes) {
                let obj = new ErrorCodes();
                obj.deserialize(params.ResponseErrorCodes[z]);
                this.ResponseErrorCodes.push(obj);
            }
        }

        if (params.RequestParameters) {
            this.RequestParameters = new Array();
            for (let z in params.RequestParameters) {
                let obj = new ReqParameter();
                obj.deserialize(params.RequestParameters[z]);
                this.RequestParameters.push(obj);
            }
        }
        this.ServiceTimeout = 'ServiceTimeout' in params ? params.ServiceTimeout : null;
        this.ServiceType = 'ServiceType' in params ? params.ServiceType : null;

        if (params.ServiceConfig) {
            let obj = new ServiceConfig();
            obj.deserialize(params.ServiceConfig)
            this.ServiceConfig = obj;
        }

        if (params.ServiceParameters) {
            this.ServiceParameters = new Array();
            for (let z in params.ServiceParameters) {
                let obj = new ServiceParameter();
                obj.deserialize(params.ServiceParameters[z]);
                this.ServiceParameters.push(obj);
            }
        }

        if (params.ConstantParameters) {
            this.ConstantParameters = new Array();
            for (let z in params.ConstantParameters) {
                let obj = new ConstantParameter();
                obj.deserialize(params.ConstantParameters[z]);
                this.ConstantParameters.push(obj);
            }
        }
        this.ServiceMockReturnMessage = 'ServiceMockReturnMessage' in params ? params.ServiceMockReturnMessage : null;
        this.ServiceScfFunctionName = 'ServiceScfFunctionName' in params ? params.ServiceScfFunctionName : null;
        this.ServiceScfFunctionNamespace = 'ServiceScfFunctionNamespace' in params ? params.ServiceScfFunctionNamespace : null;
        this.ServiceScfFunctionQualifier = 'ServiceScfFunctionQualifier' in params ? params.ServiceScfFunctionQualifier : null;
        this.ServiceScfIsIntegratedResponse = 'ServiceScfIsIntegratedResponse' in params ? params.ServiceScfIsIntegratedResponse : null;
        this.ServiceWebsocketRegisterFunctionName = 'ServiceWebsocketRegisterFunctionName' in params ? params.ServiceWebsocketRegisterFunctionName : null;
        this.ServiceWebsocketRegisterFunctionNamespace = 'ServiceWebsocketRegisterFunctionNamespace' in params ? params.ServiceWebsocketRegisterFunctionNamespace : null;
        this.ServiceWebsocketRegisterFunctionQualifier = 'ServiceWebsocketRegisterFunctionQualifier' in params ? params.ServiceWebsocketRegisterFunctionQualifier : null;
        this.ServiceWebsocketCleanupFunctionName = 'ServiceWebsocketCleanupFunctionName' in params ? params.ServiceWebsocketCleanupFunctionName : null;
        this.ServiceWebsocketCleanupFunctionNamespace = 'ServiceWebsocketCleanupFunctionNamespace' in params ? params.ServiceWebsocketCleanupFunctionNamespace : null;
        this.ServiceWebsocketCleanupFunctionQualifier = 'ServiceWebsocketCleanupFunctionQualifier' in params ? params.ServiceWebsocketCleanupFunctionQualifier : null;
        this.InternalDomain = 'InternalDomain' in params ? params.InternalDomain : null;
        this.ServiceWebsocketTransportFunctionName = 'ServiceWebsocketTransportFunctionName' in params ? params.ServiceWebsocketTransportFunctionName : null;
        this.ServiceWebsocketTransportFunctionNamespace = 'ServiceWebsocketTransportFunctionNamespace' in params ? params.ServiceWebsocketTransportFunctionNamespace : null;
        this.ServiceWebsocketTransportFunctionQualifier = 'ServiceWebsocketTransportFunctionQualifier' in params ? params.ServiceWebsocketTransportFunctionQualifier : null;

        if (params.MicroServices) {
            this.MicroServices = new Array();
            for (let z in params.MicroServices) {
                let obj = new MicroService();
                obj.deserialize(params.MicroServices[z]);
                this.MicroServices.push(obj);
            }
        }
        this.MicroServicesInfo = 'MicroServicesInfo' in params ? params.MicroServicesInfo : null;

        if (params.ServiceTsfLoadBalanceConf) {
            let obj = new TsfLoadBalanceConfResp();
            obj.deserialize(params.ServiceTsfLoadBalanceConf)
            this.ServiceTsfLoadBalanceConf = obj;
        }

        if (params.ServiceTsfHealthCheckConf) {
            let obj = new HealthCheckConf();
            obj.deserialize(params.ServiceTsfHealthCheckConf)
            this.ServiceTsfHealthCheckConf = obj;
        }
        this.EnableCORS = 'EnableCORS' in params ? params.EnableCORS : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * 环境限流
 * @class
 */
class EnvironmentStrategy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境名
         * @type {string || null}
         */
        this.EnvironmentName = null;

        /**
         * 限流值
         * @type {number || null}
         */
        this.Quota = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentName = 'EnvironmentName' in params ? params.EnvironmentName : null;
        this.Quota = 'Quota' in params ? params.Quota : null;

    }
}

/**
 * EnableApiKey请求参数结构体
 * @class
 */
class EnableApiKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待启用的密钥 ID。
         * @type {string || null}
         */
        this.AccessKeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessKeyId = 'AccessKeyId' in params ? params.AccessKeyId : null;

    }
}

/**
 * DescribeServicesStatus返回参数结构体
 * @class
 */
class DescribeServicesStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务列表查询结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ServicesStatus || null}
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

        if (params.Result) {
            let obj = new ServicesStatus();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateApiKey请求参数结构体
 * @class
 */
class CreateApiKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户自定义密钥名称。
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * 密钥类型，支持 auto 和 manual（自定义密钥），默认为 auto。
         * @type {string || null}
         */
        this.AccessKeyType = null;

        /**
         * 用户自定义密钥 ID，AccessKeyType 为 manual 时必传。长度为5 - 50字符，由字母、数字、英文下划线组成。
         * @type {string || null}
         */
        this.AccessKeyId = null;

        /**
         * 用户自定义密钥 Key，AccessKeyType 为 manual 时必传。长度为10 - 50字符，由字母、数字、英文下划线。
         * @type {string || null}
         */
        this.AccessKeySecret = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.AccessKeyType = 'AccessKeyType' in params ? params.AccessKeyType : null;
        this.AccessKeyId = 'AccessKeyId' in params ? params.AccessKeyId : null;
        this.AccessKeySecret = 'AccessKeySecret' in params ? params.AccessKeySecret : null;

    }
}

module.exports = {
    UnBindSubDomainResponse: UnBindSubDomainResponse,
    UpdateApiKeyRequest: UpdateApiKeyRequest,
    Service: Service,
    ServiceReleaseVersion: ServiceReleaseVersion,
    ApiUsagePlanSet: ApiUsagePlanSet,
    DescribeUsagePlanRequest: DescribeUsagePlanRequest,
    DeleteUsagePlanResponse: DeleteUsagePlanResponse,
    DisableApiKeyResponse: DisableApiKeyResponse,
    UnReleaseServiceRequest: UnReleaseServiceRequest,
    ModifySubDomainRequest: ModifySubDomainRequest,
    DescribeServiceEnvironmentListResponse: DescribeServiceEnvironmentListResponse,
    ModifyApiResponse: ModifyApiResponse,
    ServiceEnvironmentStrategy: ServiceEnvironmentStrategy,
    DemoteServiceUsagePlanRequest: DemoteServiceUsagePlanRequest,
    TargetServicesReq: TargetServicesReq,
    TsfLoadBalanceConfResp: TsfLoadBalanceConfResp,
    CreateIPStrategyRequest: CreateIPStrategyRequest,
    IPStrategy: IPStrategy,
    DescribeUsagePlansStatusResponse: DescribeUsagePlansStatusResponse,
    HealthCheckConf: HealthCheckConf,
    DescribeApiUsagePlanResponse: DescribeApiUsagePlanResponse,
    DeleteIPStrategyRequest: DeleteIPStrategyRequest,
    DomainSets: DomainSets,
    DeleteUsagePlanRequest: DeleteUsagePlanRequest,
    DeleteServiceRequest: DeleteServiceRequest,
    DescribeApiEnvironmentStrategyRequest: DescribeApiEnvironmentStrategyRequest,
    UpdateServiceResponse: UpdateServiceResponse,
    ServiceConfig: ServiceConfig,
    ServiceEnvironmentSet: ServiceEnvironmentSet,
    DescribeServiceResponse: DescribeServiceResponse,
    UsagePlanEnvironmentStatus: UsagePlanEnvironmentStatus,
    ModifyIPStrategyResponse: ModifyIPStrategyResponse,
    BindSubDomainResponse: BindSubDomainResponse,
    BindEnvironmentResponse: BindEnvironmentResponse,
    Tag: Tag,
    DescribeServiceEnvironmentStrategyResponse: DescribeServiceEnvironmentStrategyResponse,
    ConstantParameter: ConstantParameter,
    UsagePlansStatus: UsagePlansStatus,
    ModifySubDomainResponse: ModifySubDomainResponse,
    LogQuery: LogQuery,
    ServiceParameter: ServiceParameter,
    ModifyServiceResponse: ModifyServiceResponse,
    DisableApiKeyRequest: DisableApiKeyRequest,
    PathMapping: PathMapping,
    UnBindIPStrategyResponse: UnBindIPStrategyResponse,
    BindIPStrategyResponse: BindIPStrategyResponse,
    DescribeApisStatusRequest: DescribeApisStatusRequest,
    DeleteServiceSubDomainMappingRequest: DeleteServiceSubDomainMappingRequest,
    DescribeIPStrategyResponse: DescribeIPStrategyResponse,
    DeleteApiResponse: DeleteApiResponse,
    CreateApiResponse: CreateApiResponse,
    DescribeIPStrategyApisStatusRequest: DescribeIPStrategyApisStatusRequest,
    UnBindEnvironmentRequest: UnBindEnvironmentRequest,
    OauthConfig: OauthConfig,
    ModifyApiEnvironmentStrategyRequest: ModifyApiEnvironmentStrategyRequest,
    ModifyUsagePlanResponse: ModifyUsagePlanResponse,
    CreateUsagePlanResponse: CreateUsagePlanResponse,
    ReqParameter: ReqParameter,
    DescribeServicesStatusRequest: DescribeServicesStatusRequest,
    RequestConfig: RequestConfig,
    DeleteApiKeyResponse: DeleteApiKeyResponse,
    UsagePlan: UsagePlan,
    DescribeServiceReleaseVersionRequest: DescribeServiceReleaseVersionRequest,
    DescribeUsagePlanSecretIdsRequest: DescribeUsagePlanSecretIdsRequest,
    DescribeLogSearchResponse: DescribeLogSearchResponse,
    ResponseErrorCodeReq: ResponseErrorCodeReq,
    CreateServiceRequest: CreateServiceRequest,
    DescribeIPStrategysStatusRequest: DescribeIPStrategysStatusRequest,
    DemoteServiceUsagePlanResponse: DemoteServiceUsagePlanResponse,
    EnableApiKeyResponse: EnableApiKeyResponse,
    ServiceReleaseHistory: ServiceReleaseHistory,
    UnReleaseServiceResponse: UnReleaseServiceResponse,
    DescribeServiceRequest: DescribeServiceRequest,
    CreateUsagePlanRequest: CreateUsagePlanRequest,
    DescribeUsagePlanSecretIdsResponse: DescribeUsagePlanSecretIdsResponse,
    UpdateServiceRequest: UpdateServiceRequest,
    ReleaseService: ReleaseService,
    DescribeServiceSubDomainMappingsResponse: DescribeServiceSubDomainMappingsResponse,
    BindSecretIdsRequest: BindSecretIdsRequest,
    UnBindEnvironmentResponse: UnBindEnvironmentResponse,
    UsagePlanBindSecret: UsagePlanBindSecret,
    DeleteApiKeyRequest: DeleteApiKeyRequest,
    ModifyApiEnvironmentStrategyResponse: ModifyApiEnvironmentStrategyResponse,
    DomainSetList: DomainSetList,
    IPStrategysStatus: IPStrategysStatus,
    DescribeApiKeyResponse: DescribeApiKeyResponse,
    ModifyApiIncrementResponse: ModifyApiIncrementResponse,
    ModifyApiRequest: ModifyApiRequest,
    ModifyUsagePlanRequest: ModifyUsagePlanRequest,
    ApiRequestConfig: ApiRequestConfig,
    ModifyServiceRequest: ModifyServiceRequest,
    ApiIdStatus: ApiIdStatus,
    CreateApiRequest: CreateApiRequest,
    DescribeServiceEnvironmentStrategyRequest: DescribeServiceEnvironmentStrategyRequest,
    ReleaseServiceRequest: ReleaseServiceRequest,
    DeleteServiceResponse: DeleteServiceResponse,
    DescribeServiceEnvironmentReleaseHistoryResponse: DescribeServiceEnvironmentReleaseHistoryResponse,
    Environment: Environment,
    ServiceReleaseHistoryInfo: ServiceReleaseHistoryInfo,
    ReleaseServiceResponse: ReleaseServiceResponse,
    UnBindIPStrategyRequest: UnBindIPStrategyRequest,
    ModifyApiIncrementRequest: ModifyApiIncrementRequest,
    GenerateApiDocumentRequest: GenerateApiDocumentRequest,
    ServiceUsagePlanSet: ServiceUsagePlanSet,
    DescribeIPStrategyApisStatusResponse: DescribeIPStrategyApisStatusResponse,
    ModifyServiceEnvironmentStrategyResponse: ModifyServiceEnvironmentStrategyResponse,
    UpdateApiKeyResponse: UpdateApiKeyResponse,
    DescribeApisStatusResponse: DescribeApisStatusResponse,
    DescribeApiKeysStatusRequest: DescribeApiKeysStatusRequest,
    DescribeApiResponse: DescribeApiResponse,
    BindSecretIdsResponse: BindSecretIdsResponse,
    CreateApiRsp: CreateApiRsp,
    UsagePlanBindEnvironment: UsagePlanBindEnvironment,
    DeleteApiRequest: DeleteApiRequest,
    DescribeServiceSubDomainMappingsRequest: DescribeServiceSubDomainMappingsRequest,
    DescribeServiceEnvironmentListRequest: DescribeServiceEnvironmentListRequest,
    ServiceSubDomainMappings: ServiceSubDomainMappings,
    DescribeApiKeyRequest: DescribeApiKeyRequest,
    DescribeUsagePlanResponse: DescribeUsagePlanResponse,
    Filter: Filter,
    UsagePlanBindSecretStatus: UsagePlanBindSecretStatus,
    DeleteServiceSubDomainMappingResponse: DeleteServiceSubDomainMappingResponse,
    DescribeServiceUsagePlanRequest: DescribeServiceUsagePlanRequest,
    DescribeUsagePlansStatusRequest: DescribeUsagePlansStatusRequest,
    UsagePlanEnvironment: UsagePlanEnvironment,
    ModifyIPStrategyRequest: ModifyIPStrategyRequest,
    UnBindSecretIdsRequest: UnBindSecretIdsRequest,
    ApiEnvironmentStrategy: ApiEnvironmentStrategy,
    UnBindSecretIdsResponse: UnBindSecretIdsResponse,
    ApiUsagePlan: ApiUsagePlan,
    IPStrategyApi: IPStrategyApi,
    DocumentSDK: DocumentSDK,
    ModifyServiceEnvironmentStrategyRequest: ModifyServiceEnvironmentStrategyRequest,
    DescribeServiceSubDomainsRequest: DescribeServiceSubDomainsRequest,
    GenerateApiDocumentResponse: GenerateApiDocumentResponse,
    DescribeUsagePlanEnvironmentsResponse: DescribeUsagePlanEnvironmentsResponse,
    DescribeServiceSubDomainsResponse: DescribeServiceSubDomainsResponse,
    BindSubDomainRequest: BindSubDomainRequest,
    IPStrategyApiStatus: IPStrategyApiStatus,
    CreateIPStrategyResponse: CreateIPStrategyResponse,
    BindIPStrategyRequest: BindIPStrategyRequest,
    MicroServiceReq: MicroServiceReq,
    ErrorCodes: ErrorCodes,
    ServiceEnvironmentStrategyStatus: ServiceEnvironmentStrategyStatus,
    DescribeApiEnvironmentStrategyResponse: DescribeApiEnvironmentStrategyResponse,
    MicroService: MicroService,
    ApiEnvironmentStrategyStataus: ApiEnvironmentStrategyStataus,
    DeleteIPStrategyResponse: DeleteIPStrategyResponse,
    ApiKey: ApiKey,
    BindEnvironmentRequest: BindEnvironmentRequest,
    DescribeIPStrategyRequest: DescribeIPStrategyRequest,
    DescribeUsagePlanEnvironmentsRequest: DescribeUsagePlanEnvironmentsRequest,
    CreateApiKeyResponse: CreateApiKeyResponse,
    DescribeServiceReleaseVersionResponse: DescribeServiceReleaseVersionResponse,
    RequestParameter: RequestParameter,
    UsagePlanInfo: UsagePlanInfo,
    DescribeServiceEnvironmentReleaseHistoryRequest: DescribeServiceEnvironmentReleaseHistoryRequest,
    UsagePlanStatusInfo: UsagePlanStatusInfo,
    CreateServiceResponse: CreateServiceResponse,
    DesApisStatus: DesApisStatus,
    DescribeApiKeysStatusResponse: DescribeApiKeysStatusResponse,
    ServicesStatus: ServicesStatus,
    DescribeLogSearchRequest: DescribeLogSearchRequest,
    ApisStatus: ApisStatus,
    ApiKeysStatus: ApiKeysStatus,
    DescribeServiceUsagePlanResponse: DescribeServiceUsagePlanResponse,
    DescribeApiUsagePlanRequest: DescribeApiUsagePlanRequest,
    UnBindSubDomainRequest: UnBindSubDomainRequest,
    DescribeApiRequest: DescribeApiRequest,
    DescribeIPStrategysStatusResponse: DescribeIPStrategysStatusResponse,
    ApiInfo: ApiInfo,
    EnvironmentStrategy: EnvironmentStrategy,
    EnableApiKeyRequest: EnableApiKeyRequest,
    DescribeServicesStatusResponse: DescribeServicesStatusResponse,
    CreateApiKeyRequest: CreateApiKeyRequest,

}
