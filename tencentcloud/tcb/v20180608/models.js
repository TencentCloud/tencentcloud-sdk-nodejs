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
 * CreateHostingDomain返回参数结构体
 * @class
 */
class CreateHostingDomainResponse extends  AbstractModel {
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
 * CreateStaticStore返回参数结构体
 * @class
 */
class CreateStaticStoreResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建静态资源结果(succ/fail)
注意：此字段可能返回 null，表示取不到有效值。
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
 * DescribeEnvLimit请求参数结构体
 * @class
 */
class DescribeEnvLimitRequest extends  AbstractModel {
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
 * DescribeQuotaData返回参数结构体
 * @class
 */
class DescribeQuotaDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标名
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 指标的值
         * @type {number || null}
         */
        this.Value = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckTcbService返回参数结构体
 * @class
 */
class CheckTcbServiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * true表示已开通
         * @type {boolean || null}
         */
        this.Initialized = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Initialized = 'Initialized' in params ? params.Initialized : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StorageInfo 资源信息
 * @class
 */
class StorageInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源所属地域。
当前支持ap-shanghai
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 桶名，存储资源的唯一标识
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * cdn 域名
         * @type {string || null}
         */
        this.CdnDomain = null;

        /**
         * 资源所属用户的腾讯云appId
         * @type {string || null}
         */
        this.AppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.CdnDomain = 'CdnDomain' in params ? params.CdnDomain : null;
        this.AppId = 'AppId' in params ? params.AppId : null;

    }
}

/**
 * 函数的信息
 * @class
 */
class FunctionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 所属地域。
当前支持ap-shanghai
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
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * CommonServiceAPI请求参数结构体
 * @class
 */
class CommonServiceAPIRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Service名，需要转发访问的接口名
         * @type {string || null}
         */
        this.Service = null;

        /**
         * 需要转发的云API参数，要转成JSON格式
         * @type {string || null}
         */
        this.JSONData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Service = 'Service' in params ? params.Service : null;
        this.JSONData = 'JSONData' in params ? params.JSONData : null;

    }
}

/**
 * DescribeEndUsers返回参数结构体
 * @class
 */
class DescribeEndUsersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 用户列表
         * @type {Array.<EndUserInfo> || null}
         */
        this.Users = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Users) {
            this.Users = new Array();
            for (let z in params.Users) {
                let obj = new EndUserInfo();
                obj.deserialize(params.Users[z]);
                this.Users.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 合法域名
 * @class
 */
class AuthDomain extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名类型。包含以下取值：
<li>SYSTEM</li>
<li>USER</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 状态。包含以下取值：
<li>ENABLE</li>
<li>DISABLE</li>
         * @type {string || null}
         */
        this.Status = null;

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
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * CreateStaticStore请求参数结构体
 * @class
 */
class CreateStaticStoreRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;

    }
}

/**
 * CommonServiceAPI返回参数结构体
 * @class
 */
class CommonServiceAPIResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * json格式response
         * @type {string || null}
         */
        this.JSONResp = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JSONResp = 'JSONResp' in params ? params.JSONResp : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAuthDomain返回参数结构体
 * @class
 */
class CreateAuthDomainResponse extends  AbstractModel {
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
 * ModifyEnv请求参数结构体
 * @class
 */
class ModifyEnvRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 环境备注名，要以a-z开头，不能包含 a-zA-z0-9- 以外的字符
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
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;

    }
}

/**
 * DescribeEndUsers请求参数结构体
 * @class
 */
class DescribeEndUsersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开发者的环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 按照 uuid 列表过滤，最大个数为100
         * @type {Array.<string> || null}
         */
        this.UUIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.UUIds = 'UUIds' in params ? params.UUIds : null;

    }
}

/**
 * DescribeEnvs请求参数结构体
 * @class
 */
class DescribeEnvsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID，如果传了这个参数则只返回该环境的相关信息
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 指定Channels字段为可见渠道列表或不可见渠道列表
如只想获取渠道A的环境 就填写IsVisible= true,Channels = ["A"], 过滤渠道A拉取其他渠道环境时填写IsVisible= false,Channels = ["A"]
         * @type {boolean || null}
         */
        this.IsVisible = null;

        /**
         * 渠道列表，代表可见或不可见渠道由IsVisible参数指定
         * @type {Array.<string> || null}
         */
        this.Channels = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.IsVisible = 'IsVisible' in params ? params.IsVisible : null;
        this.Channels = 'Channels' in params ? params.Channels : null;

    }
}

/**
 * DescribeQuotaData请求参数结构体
 * @class
 */
class DescribeQuotaDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * <li> 指标名: </li>
<li> StorageSizepkg: 当月存储空间容量, 单位MB </li>
<li> StorageReadpkg: 当月存储读请求次数 </li>
<li> StorageWritepkg: 当月存储写请求次数 </li>
<li> StorageCdnOriginFluxpkg: 当月CDN回源流量, 单位字节 </li>
<li> StorageCdnOriginFluxpkgDay: 当日CDN回源流量, 单位字节 </li>
<li> StorageReadpkgDay: 当日存储读请求次数 </li>
<li> StorageWritepkgDay: 当日写请求次数 </li>
<li> CDNFluxpkg: 当月CDN流量, 单位为字节 </li>
<li> CDNFluxpkgDay: 当日CDN流量, 单位为字节 </li>
<li> FunctionInvocationpkg: 当月云函数调用次数 </li>
<li> FunctionGBspkg: 当月云函数资源使用量, 单位Mb*Ms </li>
<li> FunctionFluxpkg: 当月云函数流量, 单位千字节(KB) </li>
<li> FunctionInvocationpkgDay: 当日云函数调用次数 </li>
<li> FunctionGBspkgDay: 当日云函数资源使用量, 单位Mb*Ms </li>
<li> FunctionFluxpkgDay: 当日云函数流量, 单位千字节(KB) </li>
<li> DbSizepkg: 当月数据库容量大小, 单位MB </li>
<li> DbReadpkg: 当日数据库读请求数 </li>
<li> DbWritepkg: 当日数据库写请求数 </li>
<li> StaticFsFluxPkgDay: 当日静态托管流量 </li>
<li> StaticFsFluxPkg: 当月静态托管流量</li>
<li> StaticFsSizePkg: 当月静态托管容量 </li>
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 资源ID, 目前仅对云函数相关的指标(FunctionInvocationpkg, FunctionGBspkg, FunctionFluxpkg)有意义, 如果想查询某个云函数的指标则在ResourceId中传入函数名; 如果只想查询整个namespace的指标, 则留空或不传.
         * @type {string || null}
         */
        this.ResourceID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.ResourceID = 'ResourceID' in params ? params.ResourceID : null;

    }
}

/**
 * ReinstateEnv返回参数结构体
 * @class
 */
class ReinstateEnvResponse extends  AbstractModel {
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
 * CheckTcbService请求参数结构体
 * @class
 */
class CheckTcbServiceRequest extends  AbstractModel {
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
 * 静态CDN资源信息
 * @class
 */
class StaticStorageInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 静态CDN域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StaticDomain = null;

        /**
         * 静态CDN默认文件夹，当前为根目录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DefaultDirName = null;

        /**
         * 资源状态(process/online/offline/init)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * cos所属区域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * bucket信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Bucket = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StaticDomain = 'StaticDomain' in params ? params.StaticDomain : null;
        this.DefaultDirName = 'DefaultDirName' in params ? params.DefaultDirName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;

    }
}

/**
 * ModifyEnv返回参数结构体
 * @class
 */
class ModifyEnvResponse extends  AbstractModel {
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
 * 云日志服务相关信息
 * @class
 */
class LogServiceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * log名
         * @type {string || null}
         */
        this.LogsetName = null;

        /**
         * log-id
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * topic名
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * topic-id
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * cls日志所属地域
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
        this.LogsetName = 'LogsetName' in params ? params.LogsetName : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * 数据库资源信息
 * @class
 */
class DatabasesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库唯一标识
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 状态。包含以下取值：
<li>INITIALIZING：资源初始化中</li>
<li>RUNNING：运行中，可正常使用的状态</li>
<li>UNUSABLE：禁用，不可用</li>
<li>OVERDUE：资源过期</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 所属地域。
当前支持ap-shanghai
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * DescribeAuthDomains请求参数结构体
 * @class
 */
class DescribeAuthDomainsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;

    }
}

/**
 * DescribeAuthDomains返回参数结构体
 * @class
 */
class DescribeAuthDomainsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全域名列表列表
         * @type {Array.<AuthDomain> || null}
         */
        this.Domains = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
                let obj = new AuthDomain();
                obj.deserialize(params.Domains[z]);
                this.Domains.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ReinstateEnv请求参数结构体
 * @class
 */
class ReinstateEnvRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;

    }
}

/**
 * DescribeDatabaseACL请求参数结构体
 * @class
 */
class DescribeDatabaseACLRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 集合名称
         * @type {string || null}
         */
        this.CollectionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.CollectionName = 'CollectionName' in params ? params.CollectionName : null;

    }
}

/**
 * CreateHostingDomain请求参数结构体
 * @class
 */
class CreateHostingDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 证书ID
         * @type {string || null}
         */
        this.CertId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.CertId = 'CertId' in params ? params.CertId : null;

    }
}

/**
 * DestroyStaticStore返回参数结构体
 * @class
 */
class DestroyStaticStoreResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 条件任务结果(succ/fail)
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
 * DeleteEndUser返回参数结构体
 * @class
 */
class DeleteEndUserResponse extends  AbstractModel {
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
 * ModifyDatabaseACL返回参数结构体
 * @class
 */
class ModifyDatabaseACLResponse extends  AbstractModel {
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
 * DescribeDatabaseACL返回参数结构体
 * @class
 */
class DescribeDatabaseACLResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限标签。包含以下取值：
<li> READONLY：所有用户可读，仅创建者和管理员可写</li>
<li> PRIVATE：仅创建者及管理员可读写</li>
<li> ADMINWRITE：所有用户可读，仅管理员可写</li>
<li> ADMINONLY：仅管理员可读写</li>
         * @type {string || null}
         */
        this.AclTag = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AclTag = 'AclTag' in params ? params.AclTag : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 环境信息
 * @class
 */
class EnvInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账户下该环境唯一标识
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 环境来源。包含以下取值：
<li>miniapp：微信小程序</li>
<li>qcloud ：腾讯云</li>
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 环境别名，要以a-z开头，不能包含 a-zA-z0-9- 以外的字符
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 最后修改时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 环境状态。包含以下取值：
<li>NORMAL：正常可用</li>
<li>UNAVAILABLE：服务不可用，可能是尚未初始化或者初始化过程中</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 数据库列表
         * @type {Array.<DatabasesInfo> || null}
         */
        this.Databases = null;

        /**
         * 存储列表
         * @type {Array.<StorageInfo> || null}
         */
        this.Storages = null;

        /**
         * 函数列表
         * @type {Array.<FunctionInfo> || null}
         */
        this.Functions = null;

        /**
         * tcb产品套餐ID，参考DescribePackages接口的返回值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PackageId = null;

        /**
         * 套餐中文名称，参考DescribePackages接口的返回值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PackageName = null;

        /**
         * 云日志服务列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LogServiceInfo> || null}
         */
        this.LogServices = null;

        /**
         * 静态资源信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<StaticStorageInfo> || null}
         */
        this.StaticStorages = null;

        /**
         * 是否到期自动降为免费版
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsAutoDegrade = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Databases) {
            this.Databases = new Array();
            for (let z in params.Databases) {
                let obj = new DatabasesInfo();
                obj.deserialize(params.Databases[z]);
                this.Databases.push(obj);
            }
        }

        if (params.Storages) {
            this.Storages = new Array();
            for (let z in params.Storages) {
                let obj = new StorageInfo();
                obj.deserialize(params.Storages[z]);
                this.Storages.push(obj);
            }
        }

        if (params.Functions) {
            this.Functions = new Array();
            for (let z in params.Functions) {
                let obj = new FunctionInfo();
                obj.deserialize(params.Functions[z]);
                this.Functions.push(obj);
            }
        }
        this.PackageId = 'PackageId' in params ? params.PackageId : null;
        this.PackageName = 'PackageName' in params ? params.PackageName : null;

        if (params.LogServices) {
            this.LogServices = new Array();
            for (let z in params.LogServices) {
                let obj = new LogServiceInfo();
                obj.deserialize(params.LogServices[z]);
                this.LogServices.push(obj);
            }
        }

        if (params.StaticStorages) {
            this.StaticStorages = new Array();
            for (let z in params.StaticStorages) {
                let obj = new StaticStorageInfo();
                obj.deserialize(params.StaticStorages[z]);
                this.StaticStorages.push(obj);
            }
        }
        this.IsAutoDegrade = 'IsAutoDegrade' in params ? params.IsAutoDegrade : null;

    }
}

/**
 * DestroyEnv请求参数结构体
 * @class
 */
class DestroyEnvRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境Id
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 针对预付费 删除隔离中的环境时要传true 正常环境直接跳过隔离期删除
         * @type {boolean || null}
         */
        this.IsForce = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.IsForce = 'IsForce' in params ? params.IsForce : null;

    }
}

/**
 * DestroyEnv返回参数结构体
 * @class
 */
class DestroyEnvResponse extends  AbstractModel {
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
 * ModifyDatabaseACL请求参数结构体
 * @class
 */
class ModifyDatabaseACLRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 集合名称
         * @type {string || null}
         */
        this.CollectionName = null;

        /**
         * 权限标签。包含以下取值：
<li> READONLY：所有用户可读，仅创建者和管理员可写</li>
<li> PRIVATE：仅创建者及管理员可读写</li>
<li> ADMINWRITE：所有用户可读，仅管理员可写</li>
<li> ADMINONLY：仅管理员可读写</li>
         * @type {string || null}
         */
        this.AclTag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.CollectionName = 'CollectionName' in params ? params.CollectionName : null;
        this.AclTag = 'AclTag' in params ? params.AclTag : null;

    }
}

/**
 * DestroyStaticStore请求参数结构体
 * @class
 */
class DestroyStaticStoreRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * cdn域名
         * @type {string || null}
         */
        this.CdnDomain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.CdnDomain = 'CdnDomain' in params ? params.CdnDomain : null;

    }
}

/**
 * 终端用户信息
 * @class
 */
class EndUserInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户唯一ID
         * @type {string || null}
         */
        this.UUId = null;

        /**
         * 微信ID
         * @type {string || null}
         */
        this.WXOpenId = null;

        /**
         * qq ID
         * @type {string || null}
         */
        this.QQOpenId = null;

        /**
         * 手机号
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 邮箱
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 昵称
         * @type {string || null}
         */
        this.NickName = null;

        /**
         * 性别
         * @type {string || null}
         */
        this.Gender = null;

        /**
         * 头像地址
         * @type {string || null}
         */
        this.AvatarUrl = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 是否为匿名用户
         * @type {boolean || null}
         */
        this.IsAnonymous = null;

        /**
         * 是否禁用账户
         * @type {boolean || null}
         */
        this.IsDisabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UUId = 'UUId' in params ? params.UUId : null;
        this.WXOpenId = 'WXOpenId' in params ? params.WXOpenId : null;
        this.QQOpenId = 'QQOpenId' in params ? params.QQOpenId : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.NickName = 'NickName' in params ? params.NickName : null;
        this.Gender = 'Gender' in params ? params.Gender : null;
        this.AvatarUrl = 'AvatarUrl' in params ? params.AvatarUrl : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.IsAnonymous = 'IsAnonymous' in params ? params.IsAnonymous : null;
        this.IsDisabled = 'IsDisabled' in params ? params.IsDisabled : null;

    }
}

/**
 * DescribeEnvLimit返回参数结构体
 * @class
 */
class DescribeEnvLimitResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境总数上限
         * @type {number || null}
         */
        this.MaxEnvNum = null;

        /**
         * 目前环境总数
         * @type {number || null}
         */
        this.CurrentEnvNum = null;

        /**
         * 免费环境数量上限
         * @type {number || null}
         */
        this.MaxFreeEnvNum = null;

        /**
         * 目前免费环境数量
         * @type {number || null}
         */
        this.CurrentFreeEnvNum = null;

        /**
         * 总计允许销毁环境次数上限
         * @type {number || null}
         */
        this.MaxDeleteTotal = null;

        /**
         * 目前已销毁环境次数
         * @type {number || null}
         */
        this.CurrentDeleteTotal = null;

        /**
         * 每月允许销毁环境次数上限
         * @type {number || null}
         */
        this.MaxDeleteMonthly = null;

        /**
         * 本月已销毁环境次数
         * @type {number || null}
         */
        this.CurrentDeleteMonthly = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxEnvNum = 'MaxEnvNum' in params ? params.MaxEnvNum : null;
        this.CurrentEnvNum = 'CurrentEnvNum' in params ? params.CurrentEnvNum : null;
        this.MaxFreeEnvNum = 'MaxFreeEnvNum' in params ? params.MaxFreeEnvNum : null;
        this.CurrentFreeEnvNum = 'CurrentFreeEnvNum' in params ? params.CurrentFreeEnvNum : null;
        this.MaxDeleteTotal = 'MaxDeleteTotal' in params ? params.MaxDeleteTotal : null;
        this.CurrentDeleteTotal = 'CurrentDeleteTotal' in params ? params.CurrentDeleteTotal : null;
        this.MaxDeleteMonthly = 'MaxDeleteMonthly' in params ? params.MaxDeleteMonthly : null;
        this.CurrentDeleteMonthly = 'CurrentDeleteMonthly' in params ? params.CurrentDeleteMonthly : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteEndUser请求参数结构体
 * @class
 */
class DeleteEndUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 用户列表，每一项都是uuid
         * @type {Array.<string> || null}
         */
        this.UserList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.UserList = 'UserList' in params ? params.UserList : null;

    }
}

/**
 * DescribeEnvs返回参数结构体
 * @class
 */
class DescribeEnvsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境信息列表
         * @type {Array.<EnvInfo> || null}
         */
        this.EnvList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EnvList) {
            this.EnvList = new Array();
            for (let z in params.EnvList) {
                let obj = new EnvInfo();
                obj.deserialize(params.EnvList[z]);
                this.EnvList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAuthDomain请求参数结构体
 * @class
 */
class CreateAuthDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 安全域名
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
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.Domains = 'Domains' in params ? params.Domains : null;

    }
}

module.exports = {
    CreateHostingDomainResponse: CreateHostingDomainResponse,
    CreateStaticStoreResponse: CreateStaticStoreResponse,
    DescribeEnvLimitRequest: DescribeEnvLimitRequest,
    DescribeQuotaDataResponse: DescribeQuotaDataResponse,
    CheckTcbServiceResponse: CheckTcbServiceResponse,
    StorageInfo: StorageInfo,
    FunctionInfo: FunctionInfo,
    CommonServiceAPIRequest: CommonServiceAPIRequest,
    DescribeEndUsersResponse: DescribeEndUsersResponse,
    AuthDomain: AuthDomain,
    CreateStaticStoreRequest: CreateStaticStoreRequest,
    CommonServiceAPIResponse: CommonServiceAPIResponse,
    CreateAuthDomainResponse: CreateAuthDomainResponse,
    ModifyEnvRequest: ModifyEnvRequest,
    DescribeEndUsersRequest: DescribeEndUsersRequest,
    DescribeEnvsRequest: DescribeEnvsRequest,
    DescribeQuotaDataRequest: DescribeQuotaDataRequest,
    ReinstateEnvResponse: ReinstateEnvResponse,
    CheckTcbServiceRequest: CheckTcbServiceRequest,
    StaticStorageInfo: StaticStorageInfo,
    ModifyEnvResponse: ModifyEnvResponse,
    LogServiceInfo: LogServiceInfo,
    DatabasesInfo: DatabasesInfo,
    DescribeAuthDomainsRequest: DescribeAuthDomainsRequest,
    DescribeAuthDomainsResponse: DescribeAuthDomainsResponse,
    ReinstateEnvRequest: ReinstateEnvRequest,
    DescribeDatabaseACLRequest: DescribeDatabaseACLRequest,
    CreateHostingDomainRequest: CreateHostingDomainRequest,
    DestroyStaticStoreResponse: DestroyStaticStoreResponse,
    DeleteEndUserResponse: DeleteEndUserResponse,
    ModifyDatabaseACLResponse: ModifyDatabaseACLResponse,
    DescribeDatabaseACLResponse: DescribeDatabaseACLResponse,
    EnvInfo: EnvInfo,
    DestroyEnvRequest: DestroyEnvRequest,
    DestroyEnvResponse: DestroyEnvResponse,
    ModifyDatabaseACLRequest: ModifyDatabaseACLRequest,
    DestroyStaticStoreRequest: DestroyStaticStoreRequest,
    EndUserInfo: EndUserInfo,
    DescribeEnvLimitResponse: DescribeEnvLimitResponse,
    DeleteEndUserRequest: DeleteEndUserRequest,
    DescribeEnvsResponse: DescribeEnvsResponse,
    CreateAuthDomainRequest: CreateAuthDomainRequest,

}
