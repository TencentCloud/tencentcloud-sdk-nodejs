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
 * DescribeImagePersonal返回参数结构体
 * @class
 */
class DescribeImagePersonalResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像tag信息
         * @type {TagInfoResp || null}
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
            let obj = new TagInfoResp();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUserQuotaPersonal请求参数结构体
 * @class
 */
class DescribeUserQuotaPersonalRequest extends  AbstractModel {
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
 * 触发器触发参数
 * @class
 */
class TriggerInvokePara extends  AbstractModel {
    constructor(){
        super();

        /**
         * AppId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * TKE集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * TKE集群命名空间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * TKE集群工作负载名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceName = null;

        /**
         * TKE集群工作负载中容器名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContainerName = null;

        /**
         * TKE集群地域数字ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ClusterRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.ServiceName = 'ServiceName' in params ? params.ServiceName : null;
        this.ContainerName = 'ContainerName' in params ? params.ContainerName : null;
        this.ClusterRegion = 'ClusterRegion' in params ? params.ClusterRegion : null;

    }
}

/**
 * 触发器日志
 * @class
 */
class TriggerLogResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RepoName = null;

        /**
         * Tag名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TagName = null;

        /**
         * 触发器名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TriggerName = null;

        /**
         * 触发方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InvokeSource = null;

        /**
         * 触发动作
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InvokeAction = null;

        /**
         * 触发时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InvokeTime = null;

        /**
         * 触发条件
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TriggerInvokeCondition || null}
         */
        this.InvokeCondition = null;

        /**
         * 触发参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TriggerInvokePara || null}
         */
        this.InvokePara = null;

        /**
         * 触发结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TriggerInvokeResult || null}
         */
        this.InvokeResult = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepoName = 'RepoName' in params ? params.RepoName : null;
        this.TagName = 'TagName' in params ? params.TagName : null;
        this.TriggerName = 'TriggerName' in params ? params.TriggerName : null;
        this.InvokeSource = 'InvokeSource' in params ? params.InvokeSource : null;
        this.InvokeAction = 'InvokeAction' in params ? params.InvokeAction : null;
        this.InvokeTime = 'InvokeTime' in params ? params.InvokeTime : null;

        if (params.InvokeCondition) {
            let obj = new TriggerInvokeCondition();
            obj.deserialize(params.InvokeCondition)
            this.InvokeCondition = obj;
        }

        if (params.InvokePara) {
            let obj = new TriggerInvokePara();
            obj.deserialize(params.InvokePara)
            this.InvokePara = obj;
        }

        if (params.InvokeResult) {
            let obj = new TriggerInvokeResult();
            obj.deserialize(params.InvokeResult)
            this.InvokeResult = obj;
        }

    }
}

/**
 * Tag列表的返回值
 * @class
 */
class TagInfoResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag的总数
         * @type {number || null}
         */
        this.TagCount = null;

        /**
         * TagInfo列表
         * @type {Array.<TagInfo> || null}
         */
        this.TagInfo = null;

        /**
         * Server
         * @type {string || null}
         */
        this.Server = null;

        /**
         * 仓库名称
         * @type {string || null}
         */
        this.RepoName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagCount = 'TagCount' in params ? params.TagCount : null;

        if (params.TagInfo) {
            this.TagInfo = new Array();
            for (let z in params.TagInfo) {
                let obj = new TagInfo();
                obj.deserialize(params.TagInfo[z]);
                this.TagInfo.push(obj);
            }
        }
        this.Server = 'Server' in params ? params.Server : null;
        this.RepoName = 'RepoName' in params ? params.RepoName : null;

    }
}

/**
 * CreateInstance返回参数结构体
 * @class
 */
class CreateInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业版实例Id
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ValidateRepositoryExistPersonal请求参数结构体
 * @class
 */
class ValidateRepositoryExistPersonalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库名称
         * @type {string || null}
         */
        this.RepoName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepoName = 'RepoName' in params ? params.RepoName : null;

    }
}

/**
 * CreateApplicationTriggerPersonal请求参数结构体
 * @class
 */
class CreateApplicationTriggerPersonalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 触发器关联的镜像仓库，library/test格式
         * @type {string || null}
         */
        this.RepoName = null;

        /**
         * 触发器名称
         * @type {string || null}
         */
        this.TriggerName = null;

        /**
         * 触发方式，"all"全部触发，"taglist"指定tag触发，"regex"正则触发
         * @type {string || null}
         */
        this.InvokeMethod = null;

        /**
         * 应用所在TKE集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 应用所在TKE集群命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 应用所在TKE集群工作负载类型,支持Deployment、StatefulSet、DaemonSet、CronJob、Job。
         * @type {string || null}
         */
        this.WorkloadType = null;

        /**
         * 应用所在TKE集群工作负载名称
         * @type {string || null}
         */
        this.WorkloadName = null;

        /**
         * 应用所在TKE集群工作负载下容器名称
         * @type {string || null}
         */
        this.ContainerName = null;

        /**
         * 应用所在TKE集群地域
         * @type {number || null}
         */
        this.ClusterRegion = null;

        /**
         * 触发方式对应的表达式
         * @type {string || null}
         */
        this.InvokeExpr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepoName = 'RepoName' in params ? params.RepoName : null;
        this.TriggerName = 'TriggerName' in params ? params.TriggerName : null;
        this.InvokeMethod = 'InvokeMethod' in params ? params.InvokeMethod : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.WorkloadType = 'WorkloadType' in params ? params.WorkloadType : null;
        this.WorkloadName = 'WorkloadName' in params ? params.WorkloadName : null;
        this.ContainerName = 'ContainerName' in params ? params.ContainerName : null;
        this.ClusterRegion = 'ClusterRegion' in params ? params.ClusterRegion : null;
        this.InvokeExpr = 'InvokeExpr' in params ? params.InvokeExpr : null;

    }
}

/**
 * 自动删除策略信息
 * @class
 */
class AutoDelStrategyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户名
         * @type {string || null}
         */
        this.Username = null;

        /**
         * 仓库名
         * @type {string || null}
         */
        this.RepoName = null;

        /**
         * 类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 策略值
         * @type {number || null}
         */
        this.Value = null;

        /**
         * Valid
         * @type {number || null}
         */
        this.Valid = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreationTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Username = 'Username' in params ? params.Username : null;
        this.RepoName = 'RepoName' in params ? params.RepoName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Valid = 'Valid' in params ? params.Valid : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;

    }
}

/**
 * ValidateNamespaceExistPersonal请求参数结构体
 * @class
 */
class ValidateNamespaceExistPersonalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间名称
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * 实例信息结构体
 * @class
 */
class Registry extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.RegistryName = null;

        /**
         * 实例规格
         * @type {string || null}
         */
        this.RegistryType = null;

        /**
         * 实例状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 实例的公共访问地址
         * @type {string || null}
         */
        this.PublicDomain = null;

        /**
         * 实例创建时间
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 地域名称
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 地域Id
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 是否支持匿名
         * @type {boolean || null}
         */
        this.EnableAnonymous = null;

        /**
         * Token有效时间
         * @type {number || null}
         */
        this.TokenValidTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.RegistryName = 'RegistryName' in params ? params.RegistryName : null;
        this.RegistryType = 'RegistryType' in params ? params.RegistryType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.PublicDomain = 'PublicDomain' in params ? params.PublicDomain : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.EnableAnonymous = 'EnableAnonymous' in params ? params.EnableAnonymous : null;
        this.TokenValidTime = 'TokenValidTime' in params ? params.TokenValidTime : null;

    }
}

/**
 * ModifyApplicationTriggerPersonal请求参数结构体
 * @class
 */
class ModifyApplicationTriggerPersonalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 触发器关联的镜像仓库，library/test格式
         * @type {string || null}
         */
        this.RepoName = null;

        /**
         * 触发器名称
         * @type {string || null}
         */
        this.TriggerName = null;

        /**
         * 触发方式，"all"全部触发，"taglist"指定tag触发，"regex"正则触发
         * @type {string || null}
         */
        this.InvokeMethod = null;

        /**
         * 触发方式对应的表达式
         * @type {string || null}
         */
        this.InvokeExpr = null;

        /**
         * 应用所在TKE集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 应用所在TKE集群命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 应用所在TKE集群工作负载类型,支持Deployment、StatefulSet、DaemonSet、CronJob、Job。
         * @type {string || null}
         */
        this.WorkloadType = null;

        /**
         * 应用所在TKE集群工作负载名称
         * @type {string || null}
         */
        this.WorkloadName = null;

        /**
         * 应用所在TKE集群工作负载下容器名称
         * @type {string || null}
         */
        this.ContainerName = null;

        /**
         * 应用所在TKE集群地域数字ID，如1（广州）、16（成都）
         * @type {number || null}
         */
        this.ClusterRegion = null;

        /**
         * 新触发器名称
         * @type {string || null}
         */
        this.NewTriggerName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepoName = 'RepoName' in params ? params.RepoName : null;
        this.TriggerName = 'TriggerName' in params ? params.TriggerName : null;
        this.InvokeMethod = 'InvokeMethod' in params ? params.InvokeMethod : null;
        this.InvokeExpr = 'InvokeExpr' in params ? params.InvokeExpr : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.WorkloadType = 'WorkloadType' in params ? params.WorkloadType : null;
        this.WorkloadName = 'WorkloadName' in params ? params.WorkloadName : null;
        this.ContainerName = 'ContainerName' in params ? params.ContainerName : null;
        this.ClusterRegion = 'ClusterRegion' in params ? params.ClusterRegion : null;
        this.NewTriggerName = 'NewTriggerName' in params ? params.NewTriggerName : null;

    }
}

/**
 * DescribeInstances返回参数结构体
 * @class
 */
class DescribeInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总实例个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Registry> || null}
         */
        this.Registries = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Registries) {
            this.Registries = new Array();
            for (let z in params.Registries) {
                let obj = new Registry();
                obj.deserialize(params.Registries[z]);
                this.Registries.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeApplicationTriggerPersonal请求参数结构体
 * @class
 */
class DescribeApplicationTriggerPersonalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库名称
         * @type {string || null}
         */
        this.RepoName = null;

        /**
         * 触发器名称
         * @type {string || null}
         */
        this.TriggerName = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回最大数量，默认 20, 最大值 100
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
        this.RepoName = 'RepoName' in params ? params.RepoName : null;
        this.TriggerName = 'TriggerName' in params ? params.TriggerName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 用于获取收藏仓库的响应
 * @class
 */
class FavorResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 收藏仓库的总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 仓库信息数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Favors> || null}
         */
        this.RepoInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.RepoInfo) {
            this.RepoInfo = new Array();
            for (let z in params.RepoInfo) {
                let obj = new Favors();
                obj.deserialize(params.RepoInfo[z]);
                this.RepoInfo.push(obj);
            }
        }

    }
}

/**
 * DeleteNamespacePersonal请求参数结构体
 * @class
 */
class DeleteNamespacePersonalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间名称
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * 共享镜像仓库用户配额
 * @class
 */
class Limit extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户名
         * @type {string || null}
         */
        this.Username = null;

        /**
         * 配额的类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 配置的值
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
        this.Username = 'Username' in params ? params.Username : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DeleteImagePersonal返回参数结构体
 * @class
 */
class DeleteImagePersonalResponse extends  AbstractModel {
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
 * 实例创建过程
 * @class
 */
class RegistryCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例创建过程类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 实例创建过程状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 转换到该过程的简明原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Reason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Reason = 'Reason' in params ? params.Reason : null;

    }
}

/**
 * DuplicateImagePersonal返回参数结构体
 * @class
 */
class DuplicateImagePersonalResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 复制镜像返回值
         * @type {DupImageTagResp || null}
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
            let obj = new DupImageTagResp();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 复制镜像tag返回值
 * @class
 */
class DupImageTagResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像Digest值
         * @type {string || null}
         */
        this.Digest = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Digest = 'Digest' in params ? params.Digest : null;

    }
}

/**
 * DeleteApplicationTriggerPersonal返回参数结构体
 * @class
 */
class DeleteApplicationTriggerPersonalResponse extends  AbstractModel {
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
 * DescribeRepositoryFilterPersonal请求参数结构体
 * @class
 */
class DescribeRepositoryFilterPersonalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 搜索镜像名
         * @type {string || null}
         */
        this.RepoName = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回最大数量，默认 20，最大100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 筛选条件：1表示public，0表示private
         * @type {number || null}
         */
        this.Public = null;

        /**
         * 命名空间
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepoName = 'RepoName' in params ? params.RepoName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Public = 'Public' in params ? params.Public : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * DescribeRepositoryPersonal请求参数结构体
 * @class
 */
class DescribeRepositoryPersonalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库名字
         * @type {string || null}
         */
        this.RepoName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepoName = 'RepoName' in params ? params.RepoName : null;

    }
}

/**
 * 获取自动删除策略
 * @class
 */
class AutoDelStrategyInfoResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数目
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 自动删除策略列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AutoDelStrategyInfo> || null}
         */
        this.StrategyInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.StrategyInfo) {
            this.StrategyInfo = new Array();
            for (let z in params.StrategyInfo) {
                let obj = new AutoDelStrategyInfo();
                obj.deserialize(params.StrategyInfo[z]);
                this.StrategyInfo.push(obj);
            }
        }

    }
}

/**
 * DeleteApplicationTriggerPersonal请求参数结构体
 * @class
 */
class DeleteApplicationTriggerPersonalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 触发器名称
         * @type {string || null}
         */
        this.TriggerName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TriggerName = 'TriggerName' in params ? params.TriggerName : null;

    }
}

/**
 * 获取满足输入搜索条件的用户镜像仓库
 * @class
 */
class SearchUserRepositoryResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 仓库列表
         * @type {Array.<RepoInfo> || null}
         */
        this.RepoInfo = null;

        /**
         * Server
         * @type {string || null}
         */
        this.Server = null;

        /**
         * PrivilegeFiltered
         * @type {boolean || null}
         */
        this.PrivilegeFiltered = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.RepoInfo) {
            this.RepoInfo = new Array();
            for (let z in params.RepoInfo) {
                let obj = new RepoInfo();
                obj.deserialize(params.RepoInfo[z]);
                this.RepoInfo.push(obj);
            }
        }
        this.Server = 'Server' in params ? params.Server : null;
        this.PrivilegeFiltered = 'PrivilegeFiltered' in params ? params.PrivilegeFiltered : null;

    }
}

/**
 * DescribeImageLifecyclePersonal返回参数结构体
 * @class
 */
class DescribeImageLifecyclePersonalResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自动删除策略信息
         * @type {AutoDelStrategyInfoResp || null}
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
            let obj = new AutoDelStrategyInfoResp();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteImageLifecyclePersonal返回参数结构体
 * @class
 */
class DeleteImageLifecyclePersonalResponse extends  AbstractModel {
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
 * DescribeRepositoryOwnerPersonal返回参数结构体
 * @class
 */
class DescribeRepositoryOwnerPersonalResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库信息
         * @type {RepoInfoResp || null}
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
            let obj = new RepoInfoResp();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateImageLifecyclePersonal返回参数结构体
 * @class
 */
class CreateImageLifecyclePersonalResponse extends  AbstractModel {
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
 * 仓库是否存在的返回值
 * @class
 */
class RepoIsExistResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库是否存在
         * @type {boolean || null}
         */
        this.IsExist = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsExist = 'IsExist' in params ? params.IsExist : null;

    }
}

/**
 * CreateNamespacePersonal返回参数结构体
 * @class
 */
class CreateNamespacePersonalResponse extends  AbstractModel {
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
 * DescribeInstanceStatus请求参数结构体
 * @class
 */
class DescribeInstanceStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID的数组
         * @type {Array.<string> || null}
         */
        this.RegistryIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryIds = 'RegistryIds' in params ? params.RegistryIds : null;

    }
}

/**
 * DescribeInstanceStatus返回参数结构体
 * @class
 */
class DescribeInstanceStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例的状态列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RegistryStatus> || null}
         */
        this.RegistryStatusSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RegistryStatusSet) {
            this.RegistryStatusSet = new Array();
            for (let z in params.RegistryStatusSet) {
                let obj = new RegistryStatus();
                obj.deserialize(params.RegistryStatusSet[z]);
                this.RegistryStatusSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 仓库收藏
 * @class
 */
class Favors extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库名字
         * @type {string || null}
         */
        this.RepoName = null;

        /**
         * 仓库类型
         * @type {string || null}
         */
        this.RepoType = null;

        /**
         * Pull总共的次数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PullCount = null;

        /**
         * 仓库收藏次数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FavorCount = null;

        /**
         * 仓库是否公开
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Public = null;

        /**
         * 是否为官方所有
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsQcloudOfficial = null;

        /**
         * 仓库Tag的数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TagCount = null;

        /**
         * Logo
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Logo = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 地域的Id
         * @type {number || null}
         */
        this.RegionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepoName = 'RepoName' in params ? params.RepoName : null;
        this.RepoType = 'RepoType' in params ? params.RepoType : null;
        this.PullCount = 'PullCount' in params ? params.PullCount : null;
        this.FavorCount = 'FavorCount' in params ? params.FavorCount : null;
        this.Public = 'Public' in params ? params.Public : null;
        this.IsQcloudOfficial = 'IsQcloudOfficial' in params ? params.IsQcloudOfficial : null;
        this.TagCount = 'TagCount' in params ? params.TagCount : null;
        this.Logo = 'Logo' in params ? params.Logo : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;

    }
}

/**
 * DescribeRepositoryPersonal返回参数结构体
 * @class
 */
class DescribeRepositoryPersonalResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库信息
         * @type {RepositoryInfoResp || null}
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
            let obj = new RepositoryInfoResp();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateUserPersonal请求参数结构体
 * @class
 */
class CreateUserPersonalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户密码
         * @type {string || null}
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * ModifyUserPasswordPersonal返回参数结构体
 * @class
 */
class ModifyUserPasswordPersonalResponse extends  AbstractModel {
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
 * ModifyRepositoryInfoPersonal返回参数结构体
 * @class
 */
class ModifyRepositoryInfoPersonalResponse extends  AbstractModel {
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
 * DescribeImageFilterPersonal请求参数结构体
 * @class
 */
class DescribeImageFilterPersonalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库名称
         * @type {string || null}
         */
        this.RepoName = null;

        /**
         * Tag名
         * @type {string || null}
         */
        this.Tag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepoName = 'RepoName' in params ? params.RepoName : null;
        this.Tag = 'Tag' in params ? params.Tag : null;

    }
}

/**
 * CreateNamespacePersonal请求参数结构体
 * @class
 */
class CreateNamespacePersonalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间名称
         * @type {string || null}
         */
        this.Namespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * 实例状态
 * @class
 */
class RegistryStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例的Id
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 实例的状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 附加状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RegistryCondition> || null}
         */
        this.Conditions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new RegistryCondition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }

    }
}

/**
 * DescribeNamespacePersonal请求参数结构体
 * @class
 */
class DescribeNamespacePersonalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间，支持模糊查询
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 单页数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量
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
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * 命名空间信息
 * @class
 */
class NamespaceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * 命名空间下仓库数量
         * @type {number || null}
         */
        this.RepoCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.RepoCount = 'RepoCount' in params ? params.RepoCount : null;

    }
}

/**
 * CreateInstanceToken返回参数结构体
 * @class
 */
class CreateInstanceTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 临时密码
         * @type {string || null}
         */
        this.Token = null;

        /**
         * 临时密码有效期时间戳
         * @type {number || null}
         */
        this.ExpTime = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Token = 'Token' in params ? params.Token : null;
        this.ExpTime = 'ExpTime' in params ? params.ExpTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 查询应用更新触发器触发日志返回值
 * @class
 */
class DescribeApplicationTriggerLogPersonalResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 触发日志列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TriggerLogResp> || null}
         */
        this.LogInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.LogInfo) {
            this.LogInfo = new Array();
            for (let z in params.LogInfo) {
                let obj = new TriggerLogResp();
                obj.deserialize(params.LogInfo[z]);
                this.LogInfo.push(obj);
            }
        }

    }
}

/**
 * DeleteImagePersonal请求参数结构体
 * @class
 */
class DeleteImagePersonalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库名称
         * @type {string || null}
         */
        this.RepoName = null;

        /**
         * Tag名
         * @type {string || null}
         */
        this.Tag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepoName = 'RepoName' in params ? params.RepoName : null;
        this.Tag = 'Tag' in params ? params.Tag : null;

    }
}

/**
 * DescribeApplicationTriggerPersonal返回参数结构体
 * @class
 */
class DescribeApplicationTriggerPersonalResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 触发器列表返回值
         * @type {DescribeApplicationTriggerPersonalResp || null}
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
            let obj = new DescribeApplicationTriggerPersonalResp();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 获取命名空间信息返回
 * @class
 */
class NamespaceInfoResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间数量
         * @type {number || null}
         */
        this.NamespaceCount = null;

        /**
         * 命名空间信息
         * @type {Array.<NamespaceInfo> || null}
         */
        this.NamespaceInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NamespaceCount = 'NamespaceCount' in params ? params.NamespaceCount : null;

        if (params.NamespaceInfo) {
            this.NamespaceInfo = new Array();
            for (let z in params.NamespaceInfo) {
                let obj = new NamespaceInfo();
                obj.deserialize(params.NamespaceInfo[z]);
                this.NamespaceInfo.push(obj);
            }
        }

    }
}

/**
 * CreateRepositoryPersonal请求参数结构体
 * @class
 */
class CreateRepositoryPersonalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库名称
         * @type {string || null}
         */
        this.RepoName = null;

        /**
         * 是否公共,1:公共,0:私有
         * @type {number || null}
         */
        this.Public = null;

        /**
         * 仓库描述
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepoName = 'RepoName' in params ? params.RepoName : null;
        this.Public = 'Public' in params ? params.Public : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeImageFilterPersonal返回参数结构体
 * @class
 */
class DescribeImageFilterPersonalResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * payload
         * @type {SameImagesResp || null}
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
            let obj = new SameImagesResp();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateImageLifecyclePersonal请求参数结构体
 * @class
 */
class CreateImageLifecyclePersonalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库名称
         * @type {string || null}
         */
        this.RepoName = null;

        /**
         * keep_last_days:保留最近几天的数据;keep_last_nums:保留最近多少个
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 策略值
         * @type {number || null}
         */
        this.Val = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepoName = 'RepoName' in params ? params.RepoName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Val = 'Val' in params ? params.Val : null;

    }
}

/**
 * 触发器触发结果
 * @class
 */
class TriggerInvokeResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求TKE返回值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ReturnCode = null;

        /**
         * 请求TKE返回信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReturnMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.ReturnMsg = 'ReturnMsg' in params ? params.ReturnMsg : null;

    }
}

/**
 * CreateUserPersonal返回参数结构体
 * @class
 */
class CreateUserPersonalResponse extends  AbstractModel {
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
 * ModifyRepositoryAccessPersonal请求参数结构体
 * @class
 */
class ModifyRepositoryAccessPersonalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库名称
         * @type {string || null}
         */
        this.RepoName = null;

        /**
         * 默认值为0
         * @type {number || null}
         */
        this.Public = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepoName = 'RepoName' in params ? params.RepoName : null;
        this.Public = 'Public' in params ? params.Public : null;

    }
}

/**
 * DescribeImageLifecyclePersonal请求参数结构体
 * @class
 */
class DescribeImageLifecyclePersonalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库名称
         * @type {string || null}
         */
        this.RepoName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepoName = 'RepoName' in params ? params.RepoName : null;

    }
}

/**
 * 查询共享版仓库信息返回
 * @class
 */
class RepositoryInfoResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像仓库名字
         * @type {string || null}
         */
        this.RepoName = null;

        /**
         * 镜像仓库类型
         * @type {string || null}
         */
        this.RepoType = null;

        /**
         * 镜像仓库服务地址
         * @type {string || null}
         */
        this.Server = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * 镜像仓库描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 是否为公有镜像
         * @type {number || null}
         */
        this.Public = null;

        /**
         * 下载次数
         * @type {number || null}
         */
        this.PullCount = null;

        /**
         * 收藏次数
         * @type {number || null}
         */
        this.FavorCount = null;

        /**
         * 是否为用户收藏
         * @type {boolean || null}
         */
        this.IsUserFavor = null;

        /**
         * 是否为腾讯云官方镜像
         * @type {boolean || null}
         */
        this.IsQcloudOfficial = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepoName = 'RepoName' in params ? params.RepoName : null;
        this.RepoType = 'RepoType' in params ? params.RepoType : null;
        this.Server = 'Server' in params ? params.Server : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Public = 'Public' in params ? params.Public : null;
        this.PullCount = 'PullCount' in params ? params.PullCount : null;
        this.FavorCount = 'FavorCount' in params ? params.FavorCount : null;
        this.IsUserFavor = 'IsUserFavor' in params ? params.IsUserFavor : null;
        this.IsQcloudOfficial = 'IsQcloudOfficial' in params ? params.IsQcloudOfficial : null;

    }
}

/**
 * CreateInstance请求参数结构体
 * @class
 */
class CreateInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业版实例名称
         * @type {string || null}
         */
        this.RegistryName = null;

        /**
         * 企业版实例类型
         * @type {string || null}
         */
        this.RegistryType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryName = 'RegistryName' in params ? params.RegistryName : null;
        this.RegistryType = 'RegistryType' in params ? params.RegistryType : null;

    }
}

/**
 * BatchDeleteRepositoryPersonal返回参数结构体
 * @class
 */
class BatchDeleteRepositoryPersonalResponse extends  AbstractModel {
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
 * BatchDeleteRepositoryPersonal请求参数结构体
 * @class
 */
class BatchDeleteRepositoryPersonalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库名称数组
         * @type {Array.<string> || null}
         */
        this.RepoNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepoNames = 'RepoNames' in params ? params.RepoNames : null;

    }
}

/**
 * 触发器触发条件
 * @class
 */
class TriggerInvokeCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 触发方式
         * @type {string || null}
         */
        this.InvokeMethod = null;

        /**
         * 触发表达式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InvokeExpr = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InvokeMethod = 'InvokeMethod' in params ? params.InvokeMethod : null;
        this.InvokeExpr = 'InvokeExpr' in params ? params.InvokeExpr : null;

    }
}

/**
 * NamespaceIsExists返回类型
 * @class
 */
class NamespaceIsExistsResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间是否存在
         * @type {boolean || null}
         */
        this.IsExist = null;

        /**
         * 是否为保留命名空间
         * @type {boolean || null}
         */
        this.IsPreserved = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsExist = 'IsExist' in params ? params.IsExist : null;
        this.IsPreserved = 'IsPreserved' in params ? params.IsPreserved : null;

    }
}

/**
 * DescribeInstances请求参数结构体
 * @class
 */
class DescribeInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID列表(为空时，
表示获取账号下所有实例)
         * @type {Array.<string> || null}
         */
        this.Registryids = null;

        /**
         * 偏移量,默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 最大输出条数，默认20，最大为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 获取所有地域的实例，默认为False
         * @type {boolean || null}
         */
        this.AllRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Registryids = 'Registryids' in params ? params.Registryids : null;
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
        this.AllRegion = 'AllRegion' in params ? params.AllRegion : null;

    }
}

/**
 * 过滤器
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 属性名称, 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 属性值, 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
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
 * 仓库的信息
 * @class
 */
class RepoInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库名称
         * @type {string || null}
         */
        this.RepoName = null;

        /**
         * 仓库类型
         * @type {string || null}
         */
        this.RepoType = null;

        /**
         * Tag数量
         * @type {number || null}
         */
        this.TagCount = null;

        /**
         * 是否为公开
         * @type {number || null}
         */
        this.Public = null;

        /**
         * 是否为用户收藏
         * @type {boolean || null}
         */
        this.IsUserFavor = null;

        /**
         * 是否为腾讯云官方仓库
         * @type {boolean || null}
         */
        this.IsQcloudOfficial = null;

        /**
         * 被收藏的个数
         * @type {number || null}
         */
        this.FavorCount = null;

        /**
         * 拉取的数量
         * @type {number || null}
         */
        this.PullCount = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 仓库创建时间
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * 仓库更新时间
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
        this.RepoName = 'RepoName' in params ? params.RepoName : null;
        this.RepoType = 'RepoType' in params ? params.RepoType : null;
        this.TagCount = 'TagCount' in params ? params.TagCount : null;
        this.Public = 'Public' in params ? params.Public : null;
        this.IsUserFavor = 'IsUserFavor' in params ? params.IsUserFavor : null;
        this.IsQcloudOfficial = 'IsQcloudOfficial' in params ? params.IsQcloudOfficial : null;
        this.FavorCount = 'FavorCount' in params ? params.FavorCount : null;
        this.PullCount = 'PullCount' in params ? params.PullCount : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeUserQuotaPersonal返回参数结构体
 * @class
 */
class DescribeUserQuotaPersonalResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配额返回信息
         * @type {RespLimit || null}
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
            let obj = new RespLimit();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeImagePersonal请求参数结构体
 * @class
 */
class DescribeImagePersonalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库名称
         * @type {string || null}
         */
        this.RepoName = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回最大数量，默认 20, 最大值 100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * tag名称，可根据输入搜索
         * @type {string || null}
         */
        this.Tag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepoName = 'RepoName' in params ? params.RepoName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Tag = 'Tag' in params ? params.Tag : null;

    }
}

/**
 * DeleteImageLifecyclePersonal请求参数结构体
 * @class
 */
class DeleteImageLifecyclePersonalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库名称
         * @type {string || null}
         */
        this.RepoName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepoName = 'RepoName' in params ? params.RepoName : null;

    }
}

/**
 * ModifyApplicationTriggerPersonal返回参数结构体
 * @class
 */
class ModifyApplicationTriggerPersonalResponse extends  AbstractModel {
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
 * DescribeNamespacePersonal返回参数结构体
 * @class
 */
class DescribeNamespacePersonalResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户命名空间返回信息
         * @type {NamespaceInfoResp || null}
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
            let obj = new NamespaceInfoResp();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteNamespacePersonal返回参数结构体
 * @class
 */
class DeleteNamespacePersonalResponse extends  AbstractModel {
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
 * DescribeRepositoryOwnerPersonal请求参数结构体
 * @class
 */
class DescribeRepositoryOwnerPersonalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回最大数量，默认 20, 最大值 100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 仓库名称
         * @type {string || null}
         */
        this.RepoName = null;

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
        this.RepoName = 'RepoName' in params ? params.RepoName : null;

    }
}

/**
 * ModifyRepositoryInfoPersonal请求参数结构体
 * @class
 */
class ModifyRepositoryInfoPersonalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库名称
         * @type {string || null}
         */
        this.RepoName = null;

        /**
         * 仓库描述
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepoName = 'RepoName' in params ? params.RepoName : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeApplicationTriggerLogPersonal请求参数结构体
 * @class
 */
class DescribeApplicationTriggerLogPersonalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库名称
         * @type {string || null}
         */
        this.RepoName = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回最大数量，默认 20, 最大值 100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 升序或降序
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 按某列排序
         * @type {string || null}
         */
        this.OrderBy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepoName = 'RepoName' in params ? params.RepoName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;

    }
}

/**
 * DescribeFavorRepositoryPersonal请求参数结构体
 * @class
 */
class DescribeFavorRepositoryPersonalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库名称
         * @type {string || null}
         */
        this.RepoName = null;

        /**
         * 分页Limit
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset用于分页
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
        this.RepoName = 'RepoName' in params ? params.RepoName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeApplicationTriggerLogPersonal返回参数结构体
 * @class
 */
class DescribeApplicationTriggerLogPersonalResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 触发日志返回值
         * @type {DescribeApplicationTriggerLogPersonalResp || null}
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
            let obj = new DescribeApplicationTriggerLogPersonalResp();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRepositoryFilterPersonal返回参数结构体
 * @class
 */
class DescribeRepositoryFilterPersonalResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库信息
         * @type {SearchUserRepositoryResp || null}
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
            let obj = new SearchUserRepositoryResp();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFavorRepositoryPersonal返回参数结构体
 * @class
 */
class DescribeFavorRepositoryPersonalResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 个人收藏仓库列表返回信息
         * @type {FavorResp || null}
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
            let obj = new FavorResp();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyRepositoryAccessPersonal返回参数结构体
 * @class
 */
class ModifyRepositoryAccessPersonalResponse extends  AbstractModel {
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
 * CreateInstanceToken请求参数结构体
 * @class
 */
class CreateInstanceTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.RegistryId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;

    }
}

/**
 * ModifyUserPasswordPersonal请求参数结构体
 * @class
 */
class ModifyUserPasswordPersonalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 更新后的密码
         * @type {string || null}
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * ValidateNamespaceExistPersonal返回参数结构体
 * @class
 */
class ValidateNamespaceExistPersonalResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间是否存在
         * @type {NamespaceIsExistsResp || null}
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
            let obj = new NamespaceIsExistsResp();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 拉取触发器列表返回值
 * @class
 */
class DescribeApplicationTriggerPersonalResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回条目总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 触发器列表
         * @type {Array.<TriggerResp> || null}
         */
        this.TriggerInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.TriggerInfo) {
            this.TriggerInfo = new Array();
            for (let z in params.TriggerInfo) {
                let obj = new TriggerResp();
                obj.deserialize(params.TriggerInfo[z]);
                this.TriggerInfo.push(obj);
            }
        }

    }
}

/**
 * 镜像tag信息
 * @class
 */
class TagInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag名称
         * @type {string || null}
         */
        this.TagName = null;

        /**
         * 镜像Id
         * @type {string || null}
         */
        this.TagId = null;

        /**
         * docker image 可以看到的id
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 大小
         * @type {string || null}
         */
        this.Size = null;

        /**
         * 镜像的创建时间
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * 镜像创建至今时间长度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DurationDays = null;

        /**
         * 镜像的作者
         * @type {string || null}
         */
        this.Author = null;

        /**
         * 次镜像建议运行的系统架构
         * @type {string || null}
         */
        this.Architecture = null;

        /**
         * 创建此镜像的docker版本
         * @type {string || null}
         */
        this.DockerVersion = null;

        /**
         * 此镜像建议运行系统
         * @type {string || null}
         */
        this.OS = null;

        /**
         * SizeByte
         * @type {number || null}
         */
        this.SizeByte = null;

        /**
         * Id
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 数据更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 镜像更新时间
         * @type {string || null}
         */
        this.PushTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagName = 'TagName' in params ? params.TagName : null;
        this.TagId = 'TagId' in params ? params.TagId : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.DurationDays = 'DurationDays' in params ? params.DurationDays : null;
        this.Author = 'Author' in params ? params.Author : null;
        this.Architecture = 'Architecture' in params ? params.Architecture : null;
        this.DockerVersion = 'DockerVersion' in params ? params.DockerVersion : null;
        this.OS = 'OS' in params ? params.OS : null;
        this.SizeByte = 'SizeByte' in params ? params.SizeByte : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.PushTime = 'PushTime' in params ? params.PushTime : null;

    }
}

/**
 * DuplicateImagePersonal请求参数结构体
 * @class
 */
class DuplicateImagePersonalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源镜像名称，不包含domain。例如： tencentyun/foo:v1
         * @type {string || null}
         */
        this.SrcImage = null;

        /**
         * 目的镜像名称，不包含domain。例如： tencentyun/foo:latest
         * @type {string || null}
         */
        this.DestImage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SrcImage = 'SrcImage' in params ? params.SrcImage : null;
        this.DestImage = 'DestImage' in params ? params.DestImage : null;

    }
}

/**
 * BatchDeleteImagePersonal请求参数结构体
 * @class
 */
class BatchDeleteImagePersonalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库名称
         * @type {string || null}
         */
        this.RepoName = null;

        /**
         * Tag列表
         * @type {Array.<string> || null}
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
        this.RepoName = 'RepoName' in params ? params.RepoName : null;
        this.Tags = 'Tags' in params ? params.Tags : null;

    }
}

/**
 * 触发器返回值
 * @class
 */
class TriggerResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 触发器名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TriggerName = null;

        /**
         * 触发来源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InvokeSource = null;

        /**
         * 触发动作
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InvokeAction = null;

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

        /**
         * 触发条件
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TriggerInvokeCondition || null}
         */
        this.InvokeCondition = null;

        /**
         * 触发器参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TriggerInvokePara || null}
         */
        this.InvokePara = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TriggerName = 'TriggerName' in params ? params.TriggerName : null;
        this.InvokeSource = 'InvokeSource' in params ? params.InvokeSource : null;
        this.InvokeAction = 'InvokeAction' in params ? params.InvokeAction : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.InvokeCondition) {
            let obj = new TriggerInvokeCondition();
            obj.deserialize(params.InvokeCondition)
            this.InvokeCondition = obj;
        }

        if (params.InvokePara) {
            let obj = new TriggerInvokePara();
            obj.deserialize(params.InvokePara)
            this.InvokePara = obj;
        }

    }
}

/**
 * 用户配额返回值
 * @class
 */
class RespLimit extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配额信息
         * @type {Array.<Limit> || null}
         */
        this.LimitInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LimitInfo) {
            this.LimitInfo = new Array();
            for (let z in params.LimitInfo) {
                let obj = new Limit();
                obj.deserialize(params.LimitInfo[z]);
                this.LimitInfo.push(obj);
            }
        }

    }
}

/**
 * 指定tag镜像内容相同的tag列表
 * @class
 */
class SameImagesResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * tag列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SameImages = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SameImages = 'SameImages' in params ? params.SameImages : null;

    }
}

/**
 * 仓库信息的返回信息
 * @class
 */
class RepoInfoResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 仓库信息列表
         * @type {Array.<RepoInfo> || null}
         */
        this.RepoInfo = null;

        /**
         * Server信息
         * @type {string || null}
         */
        this.Server = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.RepoInfo) {
            this.RepoInfo = new Array();
            for (let z in params.RepoInfo) {
                let obj = new RepoInfo();
                obj.deserialize(params.RepoInfo[z]);
                this.RepoInfo.push(obj);
            }
        }
        this.Server = 'Server' in params ? params.Server : null;

    }
}

/**
 * DeleteRepositoryPersonal返回参数结构体
 * @class
 */
class DeleteRepositoryPersonalResponse extends  AbstractModel {
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
 * ValidateRepositoryExistPersonal返回参数结构体
 * @class
 */
class ValidateRepositoryExistPersonalResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库是否存在
         * @type {RepoIsExistResp || null}
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
            let obj = new RepoIsExistResp();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateRepositoryPersonal返回参数结构体
 * @class
 */
class CreateRepositoryPersonalResponse extends  AbstractModel {
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
 * CreateApplicationTriggerPersonal返回参数结构体
 * @class
 */
class CreateApplicationTriggerPersonalResponse extends  AbstractModel {
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
 * BatchDeleteImagePersonal返回参数结构体
 * @class
 */
class BatchDeleteImagePersonalResponse extends  AbstractModel {
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
 * DeleteRepositoryPersonal请求参数结构体
 * @class
 */
class DeleteRepositoryPersonalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库名称
         * @type {string || null}
         */
        this.RepoName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepoName = 'RepoName' in params ? params.RepoName : null;

    }
}

module.exports = {
    DescribeImagePersonalResponse: DescribeImagePersonalResponse,
    DescribeUserQuotaPersonalRequest: DescribeUserQuotaPersonalRequest,
    TriggerInvokePara: TriggerInvokePara,
    TriggerLogResp: TriggerLogResp,
    TagInfoResp: TagInfoResp,
    CreateInstanceResponse: CreateInstanceResponse,
    ValidateRepositoryExistPersonalRequest: ValidateRepositoryExistPersonalRequest,
    CreateApplicationTriggerPersonalRequest: CreateApplicationTriggerPersonalRequest,
    AutoDelStrategyInfo: AutoDelStrategyInfo,
    ValidateNamespaceExistPersonalRequest: ValidateNamespaceExistPersonalRequest,
    Registry: Registry,
    ModifyApplicationTriggerPersonalRequest: ModifyApplicationTriggerPersonalRequest,
    DescribeInstancesResponse: DescribeInstancesResponse,
    DescribeApplicationTriggerPersonalRequest: DescribeApplicationTriggerPersonalRequest,
    FavorResp: FavorResp,
    DeleteNamespacePersonalRequest: DeleteNamespacePersonalRequest,
    Limit: Limit,
    DeleteImagePersonalResponse: DeleteImagePersonalResponse,
    RegistryCondition: RegistryCondition,
    DuplicateImagePersonalResponse: DuplicateImagePersonalResponse,
    DupImageTagResp: DupImageTagResp,
    DeleteApplicationTriggerPersonalResponse: DeleteApplicationTriggerPersonalResponse,
    DescribeRepositoryFilterPersonalRequest: DescribeRepositoryFilterPersonalRequest,
    DescribeRepositoryPersonalRequest: DescribeRepositoryPersonalRequest,
    AutoDelStrategyInfoResp: AutoDelStrategyInfoResp,
    DeleteApplicationTriggerPersonalRequest: DeleteApplicationTriggerPersonalRequest,
    SearchUserRepositoryResp: SearchUserRepositoryResp,
    DescribeImageLifecyclePersonalResponse: DescribeImageLifecyclePersonalResponse,
    DeleteImageLifecyclePersonalResponse: DeleteImageLifecyclePersonalResponse,
    DescribeRepositoryOwnerPersonalResponse: DescribeRepositoryOwnerPersonalResponse,
    CreateImageLifecyclePersonalResponse: CreateImageLifecyclePersonalResponse,
    RepoIsExistResp: RepoIsExistResp,
    CreateNamespacePersonalResponse: CreateNamespacePersonalResponse,
    DescribeInstanceStatusRequest: DescribeInstanceStatusRequest,
    DescribeInstanceStatusResponse: DescribeInstanceStatusResponse,
    Favors: Favors,
    DescribeRepositoryPersonalResponse: DescribeRepositoryPersonalResponse,
    CreateUserPersonalRequest: CreateUserPersonalRequest,
    ModifyUserPasswordPersonalResponse: ModifyUserPasswordPersonalResponse,
    ModifyRepositoryInfoPersonalResponse: ModifyRepositoryInfoPersonalResponse,
    DescribeImageFilterPersonalRequest: DescribeImageFilterPersonalRequest,
    CreateNamespacePersonalRequest: CreateNamespacePersonalRequest,
    RegistryStatus: RegistryStatus,
    DescribeNamespacePersonalRequest: DescribeNamespacePersonalRequest,
    NamespaceInfo: NamespaceInfo,
    CreateInstanceTokenResponse: CreateInstanceTokenResponse,
    DescribeApplicationTriggerLogPersonalResp: DescribeApplicationTriggerLogPersonalResp,
    DeleteImagePersonalRequest: DeleteImagePersonalRequest,
    DescribeApplicationTriggerPersonalResponse: DescribeApplicationTriggerPersonalResponse,
    NamespaceInfoResp: NamespaceInfoResp,
    CreateRepositoryPersonalRequest: CreateRepositoryPersonalRequest,
    DescribeImageFilterPersonalResponse: DescribeImageFilterPersonalResponse,
    CreateImageLifecyclePersonalRequest: CreateImageLifecyclePersonalRequest,
    TriggerInvokeResult: TriggerInvokeResult,
    CreateUserPersonalResponse: CreateUserPersonalResponse,
    ModifyRepositoryAccessPersonalRequest: ModifyRepositoryAccessPersonalRequest,
    DescribeImageLifecyclePersonalRequest: DescribeImageLifecyclePersonalRequest,
    RepositoryInfoResp: RepositoryInfoResp,
    CreateInstanceRequest: CreateInstanceRequest,
    BatchDeleteRepositoryPersonalResponse: BatchDeleteRepositoryPersonalResponse,
    BatchDeleteRepositoryPersonalRequest: BatchDeleteRepositoryPersonalRequest,
    TriggerInvokeCondition: TriggerInvokeCondition,
    NamespaceIsExistsResp: NamespaceIsExistsResp,
    DescribeInstancesRequest: DescribeInstancesRequest,
    Filter: Filter,
    RepoInfo: RepoInfo,
    DescribeUserQuotaPersonalResponse: DescribeUserQuotaPersonalResponse,
    DescribeImagePersonalRequest: DescribeImagePersonalRequest,
    DeleteImageLifecyclePersonalRequest: DeleteImageLifecyclePersonalRequest,
    ModifyApplicationTriggerPersonalResponse: ModifyApplicationTriggerPersonalResponse,
    DescribeNamespacePersonalResponse: DescribeNamespacePersonalResponse,
    DeleteNamespacePersonalResponse: DeleteNamespacePersonalResponse,
    DescribeRepositoryOwnerPersonalRequest: DescribeRepositoryOwnerPersonalRequest,
    ModifyRepositoryInfoPersonalRequest: ModifyRepositoryInfoPersonalRequest,
    DescribeApplicationTriggerLogPersonalRequest: DescribeApplicationTriggerLogPersonalRequest,
    DescribeFavorRepositoryPersonalRequest: DescribeFavorRepositoryPersonalRequest,
    DescribeApplicationTriggerLogPersonalResponse: DescribeApplicationTriggerLogPersonalResponse,
    DescribeRepositoryFilterPersonalResponse: DescribeRepositoryFilterPersonalResponse,
    DescribeFavorRepositoryPersonalResponse: DescribeFavorRepositoryPersonalResponse,
    ModifyRepositoryAccessPersonalResponse: ModifyRepositoryAccessPersonalResponse,
    CreateInstanceTokenRequest: CreateInstanceTokenRequest,
    ModifyUserPasswordPersonalRequest: ModifyUserPasswordPersonalRequest,
    ValidateNamespaceExistPersonalResponse: ValidateNamespaceExistPersonalResponse,
    DescribeApplicationTriggerPersonalResp: DescribeApplicationTriggerPersonalResp,
    TagInfo: TagInfo,
    DuplicateImagePersonalRequest: DuplicateImagePersonalRequest,
    BatchDeleteImagePersonalRequest: BatchDeleteImagePersonalRequest,
    TriggerResp: TriggerResp,
    RespLimit: RespLimit,
    SameImagesResp: SameImagesResp,
    RepoInfoResp: RepoInfoResp,
    DeleteRepositoryPersonalResponse: DeleteRepositoryPersonalResponse,
    ValidateRepositoryExistPersonalResponse: ValidateRepositoryExistPersonalResponse,
    CreateRepositoryPersonalResponse: CreateRepositoryPersonalResponse,
    CreateApplicationTriggerPersonalResponse: CreateApplicationTriggerPersonalResponse,
    BatchDeleteImagePersonalResponse: BatchDeleteImagePersonalResponse,
    DeleteRepositoryPersonalRequest: DeleteRepositoryPersonalRequest,

}
