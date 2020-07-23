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
 * DescribeEndUserLoginStatistic请求参数结构体
 * @class
 */
class DescribeEndUserLoginStatisticRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境id
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 终端用户来源
<li> qcloud </li>
<li>miniapp</li>
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
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.Source = 'Source' in params ? params.Source : null;

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
 * 终端用户登录新增统计
 * @class
 */
class LoginStatistic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计类型 新增NEWUSER 和登录 LOGIN
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StatisticalType = null;

        /**
         * 统计周期：日DAY，周WEEK，月MONTH
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StatisticalCycle = null;

        /**
         * 统计总量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Count = null;

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
        this.StatisticalType = 'StatisticalType' in params ? params.StatisticalType : null;
        this.StatisticalCycle = 'StatisticalCycle' in params ? params.StatisticalCycle : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 按量付费免费配额信息
 * @class
 */
class PostpayEnvQuota extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源类型
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * 指标名
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 配额值
         * @type {number || null}
         */
        this.Value = null;

        /**
         * 配额生效时间
为空表示没有时间限制
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 配额失效时间
为空表示没有时间限制
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
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

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
 * CreatePostpayPackage返回参数结构体
 * @class
 */
class CreatePostpayPackageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 后付费订单号
         * @type {string || null}
         */
        this.TranId = null;

        /**
         * 环境ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TranId = 'TranId' in params ? params.TranId : null;
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeEndUserStatistic返回参数结构体
 * @class
 */
class DescribeEndUserStatisticResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 终端用户各平台统计
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PlatformStatistic> || null}
         */
        this.PlatformStatistics = null;

        /**
         * 终端用户总数
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

        if (params.PlatformStatistics) {
            this.PlatformStatistics = new Array();
            for (let z in params.PlatformStatistics) {
                let obj = new PlatformStatistic();
                obj.deserialize(params.PlatformStatistics[z]);
                this.PlatformStatistics.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePostpayPackageFreeQuotas请求参数结构体
 * @class
 */
class DescribePostpayPackageFreeQuotasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 免费额度类型标识
         * @type {string || null}
         */
        this.FreeQuotaType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.FreeQuotaType = 'FreeQuotaType' in params ? params.FreeQuotaType : null;

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
         * 可选参数，偏移量，默认 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 可选参数，拉取数量，默认 20
         * @type {number || null}
         */
        this.Limit = null;

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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
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
<li> TkeCpuUsedPkg: 当月容器托管CPU使用量，单位核 </li>
<li> TkeMemUsedPkg: 当月容器托管内存使用量，单位MB </li>
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 资源ID, 目前仅对云函数、容器托管相关的指标有意义。云函数(FunctionInvocationpkg, FunctionGBspkg, FunctionFluxpkg)、容器托管（服务名称）。如果想查询某个云函数的指标则在ResourceId中传入函数名; 如果只想查询整个namespace的指标, 则留空或不传。
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
 * DescribeEndUserStatistic请求参数结构体
 * @class
 */
class DescribeEndUserStatisticRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境id
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
 * 后付费免费额度
 * @class
 */
class PackageFreeQuotaInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源类型
<li>COS</li>
<li>CDN</li>
<li>FLEXDB</li>
<li>SCF</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * 资源指标名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceMetric = null;

        /**
         * 资源指标免费量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FreeQuota = null;

        /**
         * 指标单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MetricUnit = null;

        /**
         * 免费量抵扣周期
<li>sum-month:以月为单位抵扣</li>
<li>sum-day:以天为单位抵扣</li>
<li>totalize:总容量抵扣</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeductType = null;

        /**
         * 免费量类型
<li>basic:通用量抵扣</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FreeQuotaType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceMetric = 'ResourceMetric' in params ? params.ResourceMetric : null;
        this.FreeQuota = 'FreeQuota' in params ? params.FreeQuota : null;
        this.MetricUnit = 'MetricUnit' in params ? params.MetricUnit : null;
        this.DeductType = 'DeductType' in params ? params.DeductType : null;
        this.FreeQuotaType = 'FreeQuotaType' in params ? params.FreeQuotaType : null;

    }
}

/**
 * DescribeEnvFreeQuota返回参数结构体
 * @class
 */
class DescribeEnvFreeQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 免费抵扣配额详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PostpayEnvQuota> || null}
         */
        this.QuotaItems = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.QuotaItems) {
            this.QuotaItems = new Array();
            for (let z in params.QuotaItems) {
                let obj = new PostpayEnvQuota();
                obj.deserialize(params.QuotaItems[z]);
                this.QuotaItems.push(obj);
            }
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
 * DescribeExtraPkgBillingInfo返回参数结构体
 * @class
 */
class DescribeExtraPkgBillingInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 增值包计费信息列表
         * @type {Array.<EnvBillingInfoItem> || null}
         */
        this.EnvInfoList = null;

        /**
         * 增值包数目
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EnvInfoList) {
            this.EnvInfoList = new Array();
            for (let z in params.EnvInfoList) {
                let obj = new EnvBillingInfoItem();
                obj.deserialize(params.EnvInfoList[z]);
                this.EnvInfoList.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeExtraPkgBillingInfo请求参数结构体
 * @class
 */
class DescribeExtraPkgBillingInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 已购买增值包的环境ID
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
 * CreatePostpayPackage请求参数结构体
 * @class
 */
class CreatePostpayPackageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 微信 AppId，微信必传
         * @type {string || null}
         */
        this.WxAppId = null;

        /**
         * 付费来源
<li>miniapp</li>
<li>qcloud</li>
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 用户享有的免费额度级别，目前只能为“basic”，不传该字段或该字段为空，标识不享受免费额度。
         * @type {string || null}
         */
        this.FreeQuota = null;

        /**
         * 环境别名，要以a-z开头，不能包含 a-zA-z0-9- 以外的字符
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 环境创建来源，取值：
<li>miniapp</li>
<li>qcloud</li>
用法同CreateEnv接口的Source参数
和 Channel 参数同时传，或者同时不传；EnvId 为空时必传。
         * @type {string || null}
         */
        this.EnvSource = null;

        /**
         * 如果envsource为miniapp, channel可以为ide或api;
如果envsource为qcloud, channel可以为qc_console,cocos, qq, cloudgame,dcloud
和 EnvSource 参数同时传，或者同时不传；EnvId 为空时必传。
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * 扩展ID
         * @type {string || null}
         */
        this.ExtensionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.WxAppId = 'WxAppId' in params ? params.WxAppId : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.FreeQuota = 'FreeQuota' in params ? params.FreeQuota : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.EnvSource = 'EnvSource' in params ? params.EnvSource : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.ExtensionId = 'ExtensionId' in params ? params.ExtensionId : null;

    }
}

/**
 * DescribeEnvFreeQuota请求参数结构体
 * @class
 */
class DescribeEnvFreeQuotaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 资源类型：可选值：CDN, COS, FLEXDB, HOSTING, SCF
不传则返回全部资源指标
         * @type {Array.<string> || null}
         */
        this.ResourceTypes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.ResourceTypes = 'ResourceTypes' in params ? params.ResourceTypes : null;

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
 * 环境计费信息
 * @class
 */
class EnvBillingInfoItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * tcb产品套餐ID，参考DescribePackages接口的返回值。
         * @type {string || null}
         */
        this.PackageId = null;

        /**
         * 自动续费标记
         * @type {boolean || null}
         */
        this.IsAutoRenew = null;

        /**
         * 状态。包含以下取值：
<li> 空字符串：初始化中</li>
<li> NORMAL：正常</li>
<li> ISOLATE：隔离</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 支付方式。包含以下取值：
<li> PREPAYMENT：预付费</li>
<li> POSTPAID：后付费</li>
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * 隔离时间，最近一次隔离的时间
         * @type {string || null}
         */
        this.IsolatedTime = null;

        /**
         * 过期时间，套餐即将到期的时间
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 创建时间，第一次接入计费方案的时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间，计费信息最近一次更新的时间。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * true表示从未升级过付费版。
         * @type {boolean || null}
         */
        this.IsAlwaysFree = null;

        /**
         * 付费渠道。
<li> miniapp：小程序</li>
<li> qcloud：腾讯云</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentChannel = null;

        /**
         * 最新的订单信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OrderInfo || null}
         */
        this.OrderInfo = null;

        /**
         * 免费配额信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FreeQuota = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.PackageId = 'PackageId' in params ? params.PackageId : null;
        this.IsAutoRenew = 'IsAutoRenew' in params ? params.IsAutoRenew : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.IsolatedTime = 'IsolatedTime' in params ? params.IsolatedTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.IsAlwaysFree = 'IsAlwaysFree' in params ? params.IsAlwaysFree : null;
        this.PaymentChannel = 'PaymentChannel' in params ? params.PaymentChannel : null;

        if (params.OrderInfo) {
            let obj = new OrderInfo();
            obj.deserialize(params.OrderInfo)
            this.OrderInfo = obj;
        }
        this.FreeQuota = 'FreeQuota' in params ? params.FreeQuota : null;

    }
}

/**
 * 终端用户平台统计信息
 * @class
 */
class PlatformStatistic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 终端用户从属平台
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 平台终端用户数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Count = null;

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
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * ModifyEndUser请求参数结构体
 * @class
 */
class ModifyEndUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境ID
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * C端用户端的唯一ID
         * @type {string || null}
         */
        this.UUId = null;

        /**
         * 帐号的状态
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
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.UUId = 'UUId' in params ? params.UUId : null;
        this.Status = 'Status' in params ? params.Status : null;

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

        /**
         * 环境渠道
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EnvChannel = null;

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
        this.EnvChannel = 'EnvChannel' in params ? params.EnvChannel : null;

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
 * ModifyEndUser返回参数结构体
 * @class
 */
class ModifyEndUserResponse extends  AbstractModel {
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

        /**
         * 是否设置过密码
         * @type {boolean || null}
         */
        this.HasPassword = null;

        /**
         * 用户名
         * @type {string || null}
         */
        this.UserName = null;

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
        this.HasPassword = 'HasPassword' in params ? params.HasPassword : null;
        this.UserName = 'UserName' in params ? params.UserName : null;

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
 * DescribePostpayPackageFreeQuotas返回参数结构体
 * @class
 */
class DescribePostpayPackageFreeQuotasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 免费量资源信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PackageFreeQuotaInfo> || null}
         */
        this.PackageFreeQuotaInfos = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PackageFreeQuotaInfos) {
            this.PackageFreeQuotaInfos = new Array();
            for (let z in params.PackageFreeQuotaInfos) {
                let obj = new PackageFreeQuotaInfo();
                obj.deserialize(params.PackageFreeQuotaInfos[z]);
                this.PackageFreeQuotaInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEndUserLoginStatistic返回参数结构体
 * @class
 */
class DescribeEndUserLoginStatisticResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境终端用户新增与登录统计
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LoginStatistic> || null}
         */
        this.LoginStatistics = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LoginStatistics) {
            this.LoginStatistics = new Array();
            for (let z in params.LoginStatistics) {
                let obj = new LoginStatistic();
                obj.deserialize(params.LoginStatistics[z]);
                this.LoginStatistics.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 订单信息
 * @class
 */
class OrderInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单号
         * @type {string || null}
         */
        this.TranId = null;

        /**
         * 订单要切换的套餐ID
         * @type {string || null}
         */
        this.PackageId = null;

        /**
         * 订单类型
<li>1 购买</li>
<li>2 续费</li>
<li>3 变配</li>
         * @type {string || null}
         */
        this.TranType = null;

        /**
         * 订单状态。
<li>1未支付</li>
<li>2 支付中</li>
<li>3 发货中</li>
<li>4 发货成功</li>
<li>5 发货失败</li>
<li>6 已退款</li>
<li>7 已取消</li>
<li>100 已删除</li>
         * @type {string || null}
         */
        this.TranStatus = null;

        /**
         * 订单更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 订单创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 付费模式.
<li>prepayment 预付费</li>
<li>postpaid 后付费</li>
         * @type {string || null}
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
        this.TranId = 'TranId' in params ? params.TranId : null;
        this.PackageId = 'PackageId' in params ? params.PackageId : null;
        this.TranType = 'TranType' in params ? params.TranType : null;
        this.TranStatus = 'TranStatus' in params ? params.TranStatus : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;

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
    DescribeEndUserLoginStatisticRequest: DescribeEndUserLoginStatisticRequest,
    StorageInfo: StorageInfo,
    LoginStatistic: LoginStatistic,
    PostpayEnvQuota: PostpayEnvQuota,
    FunctionInfo: FunctionInfo,
    CreatePostpayPackageResponse: CreatePostpayPackageResponse,
    CommonServiceAPIRequest: CommonServiceAPIRequest,
    DescribeEndUsersResponse: DescribeEndUsersResponse,
    AuthDomain: AuthDomain,
    LogServiceInfo: LogServiceInfo,
    CreateStaticStoreRequest: CreateStaticStoreRequest,
    CommonServiceAPIResponse: CommonServiceAPIResponse,
    DescribeEndUserStatisticResponse: DescribeEndUserStatisticResponse,
    DescribePostpayPackageFreeQuotasRequest: DescribePostpayPackageFreeQuotasRequest,
    CreateAuthDomainResponse: CreateAuthDomainResponse,
    ModifyEnvRequest: ModifyEnvRequest,
    DescribeEndUsersRequest: DescribeEndUsersRequest,
    DescribeEnvsRequest: DescribeEnvsRequest,
    DescribeQuotaDataRequest: DescribeQuotaDataRequest,
    ReinstateEnvResponse: ReinstateEnvResponse,
    DescribeEndUserStatisticRequest: DescribeEndUserStatisticRequest,
    PackageFreeQuotaInfo: PackageFreeQuotaInfo,
    DescribeEnvFreeQuotaResponse: DescribeEnvFreeQuotaResponse,
    CheckTcbServiceRequest: CheckTcbServiceRequest,
    ModifyDatabaseACLResponse: ModifyDatabaseACLResponse,
    StaticStorageInfo: StaticStorageInfo,
    DescribeExtraPkgBillingInfoResponse: DescribeExtraPkgBillingInfoResponse,
    DescribeExtraPkgBillingInfoRequest: DescribeExtraPkgBillingInfoRequest,
    CreatePostpayPackageRequest: CreatePostpayPackageRequest,
    DescribeEnvFreeQuotaRequest: DescribeEnvFreeQuotaRequest,
    DatabasesInfo: DatabasesInfo,
    DescribeAuthDomainsRequest: DescribeAuthDomainsRequest,
    DeleteEndUserRequest: DeleteEndUserRequest,
    DescribeAuthDomainsResponse: DescribeAuthDomainsResponse,
    ReinstateEnvRequest: ReinstateEnvRequest,
    DescribeDatabaseACLRequest: DescribeDatabaseACLRequest,
    CreateHostingDomainRequest: CreateHostingDomainRequest,
    DestroyStaticStoreResponse: DestroyStaticStoreResponse,
    DeleteEndUserResponse: DeleteEndUserResponse,
    EnvBillingInfoItem: EnvBillingInfoItem,
    PlatformStatistic: PlatformStatistic,
    ModifyEndUserRequest: ModifyEndUserRequest,
    DescribeDatabaseACLResponse: DescribeDatabaseACLResponse,
    EnvInfo: EnvInfo,
    DestroyEnvRequest: DestroyEnvRequest,
    DestroyEnvResponse: DestroyEnvResponse,
    ModifyDatabaseACLRequest: ModifyDatabaseACLRequest,
    DestroyStaticStoreRequest: DestroyStaticStoreRequest,
    ModifyEndUserResponse: ModifyEndUserResponse,
    EndUserInfo: EndUserInfo,
    DescribeEnvLimitResponse: DescribeEnvLimitResponse,
    DescribePostpayPackageFreeQuotasResponse: DescribePostpayPackageFreeQuotasResponse,
    DescribeEndUserLoginStatisticResponse: DescribeEndUserLoginStatisticResponse,
    DescribeEnvsResponse: DescribeEnvsResponse,
    ModifyEnvResponse: ModifyEnvResponse,
    OrderInfo: OrderInfo,
    CreateAuthDomainRequest: CreateAuthDomainRequest,

}
