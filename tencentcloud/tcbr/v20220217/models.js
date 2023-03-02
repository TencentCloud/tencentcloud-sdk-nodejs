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
 * DescribeCloudRunServers返回参数结构体
 * @class
 */
class DescribeCloudRunServersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务列表
         * @type {Array.<ServerBaseInfo> || null}
         */
        this.ServerList = null;

        /**
         * 服务总数
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

        if (params.ServerList) {
            this.ServerList = new Array();
            for (let z in params.ServerList) {
                let obj = new ServerBaseInfo();
                obj.deserialize(params.ServerList[z]);
                this.ServerList.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 代码仓库信息
 * @class
 */
class RepositoryInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * git source
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 仓库名
         * @type {string || null}
         */
        this.Repo = null;

        /**
         * 分支名
         * @type {string || null}
         */
        this.Branch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Source = 'Source' in params ? params.Source : null;
        this.Repo = 'Repo' in params ? params.Repo : null;
        this.Branch = 'Branch' in params ? params.Branch : null;

    }
}

/**
 * ReleaseGray请求参数结构体
 * @class
 */
class ReleaseGrayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境Id
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 服务名
         * @type {string || null}
         */
        this.ServerName = null;

        /**
         * 灰度类型
         * @type {string || null}
         */
        this.GrayType = null;

        /**
         * 流量类型
         * @type {string || null}
         */
        this.TrafficType = null;

        /**
         * 流量策略
         * @type {Array.<VersionFlowInfo> || null}
         */
        this.VersionFlowItems = null;

        /**
         * 操作标识
         * @type {string || null}
         */
        this.OperatorRemark = null;

        /**
         * 流量比例
         * @type {number || null}
         */
        this.GrayFlowRatio = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.ServerName = 'ServerName' in params ? params.ServerName : null;
        this.GrayType = 'GrayType' in params ? params.GrayType : null;
        this.TrafficType = 'TrafficType' in params ? params.TrafficType : null;

        if (params.VersionFlowItems) {
            this.VersionFlowItems = new Array();
            for (let z in params.VersionFlowItems) {
                let obj = new VersionFlowInfo();
                obj.deserialize(params.VersionFlowItems[z]);
                this.VersionFlowItems.push(obj);
            }
        }
        this.OperatorRemark = 'OperatorRemark' in params ? params.OperatorRemark : null;
        this.GrayFlowRatio = 'GrayFlowRatio' in params ? params.GrayFlowRatio : null;

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
 * DescribeEnvBaseInfo返回参数结构体
 * @class
 */
class DescribeEnvBaseInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境基础信息
         * @type {EnvBaseInfo || null}
         */
        this.EnvBaseInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EnvBaseInfo) {
            let obj = new EnvBaseInfo();
            obj.deserialize(params.EnvBaseInfo)
            this.EnvBaseInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCloudRunServer请求参数结构体
 * @class
 */
class CreateCloudRunServerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境Id
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 服务名
         * @type {string || null}
         */
        this.ServerName = null;

        /**
         * 部署信息
         * @type {DeployParam || null}
         */
        this.DeployInfo = null;

        /**
         * 服务配置信息
         * @type {ServerBaseConfig || null}
         */
        this.ServerConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.ServerName = 'ServerName' in params ? params.ServerName : null;

        if (params.DeployInfo) {
            let obj = new DeployParam();
            obj.deserialize(params.DeployInfo)
            this.DeployInfo = obj;
        }

        if (params.ServerConfig) {
            let obj = new ServerBaseConfig();
            obj.deserialize(params.ServerConfig)
            this.ServerConfig = obj;
        }

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
 * DescribeServerManageTask返回参数结构体
 * @class
 */
class DescribeServerManageTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否存在
         * @type {boolean || null}
         */
        this.IsExist = null;

        /**
         * 任务信息
         * @type {ServerManageTaskInfo || null}
         */
        this.Task = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsExist = 'IsExist' in params ? params.IsExist : null;

        if (params.Task) {
            let obj = new ServerManageTaskInfo();
            obj.deserialize(params.Task)
            this.Task = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 任务步骤信息
 * @class
 */
class TaskStepInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 步骤名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 未启动："todo"
运行中："running"
失败："failed"
成功结束："finished"
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 消耗时间：秒
         * @type {number || null}
         */
        this.CostTime = null;

        /**
         * 失败原因
         * @type {string || null}
         */
        this.FailReason = null;

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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.CostTime = 'CostTime' in params ? params.CostTime : null;
        this.FailReason = 'FailReason' in params ? params.FailReason : null;

    }
}

/**
 * DescribeCloudRunEnvs返回参数结构体
 * @class
 */
class DescribeCloudRunEnvsResponse extends  AbstractModel {
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
 * DescribeCloudRunEnvs请求参数结构体
 * @class
 */
class DescribeCloudRunEnvsRequest extends  AbstractModel {
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
 * ReleaseGray返回参数结构体
 * @class
 */
class ReleaseGrayResponse extends  AbstractModel {
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
 * 部署参数
 * @class
 */
class DeployParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署类型：package/image/repository/pipeline/jar/war
         * @type {string || null}
         */
        this.DeployType = null;

        /**
         * 部署类型为image时传入
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 部署类型为package时传入
         * @type {string || null}
         */
        this.PackageName = null;

        /**
         * 部署类型为package时传入
         * @type {string || null}
         */
        this.PackageVersion = null;

        /**
         * 部署备注
         * @type {string || null}
         */
        this.DeployRemark = null;

        /**
         * 代码仓库信息
         * @type {RepositoryInfo || null}
         */
        this.RepoInfo = null;

        /**
         * 无Dockerfile时填写
         * @type {BuildPacksInfo || null}
         */
        this.BuildPacks = null;

        /**
         * 发布类型 GRAY | FULL
         * @type {string || null}
         */
        this.ReleaseType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeployType = 'DeployType' in params ? params.DeployType : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.PackageName = 'PackageName' in params ? params.PackageName : null;
        this.PackageVersion = 'PackageVersion' in params ? params.PackageVersion : null;
        this.DeployRemark = 'DeployRemark' in params ? params.DeployRemark : null;

        if (params.RepoInfo) {
            let obj = new RepositoryInfo();
            obj.deserialize(params.RepoInfo)
            this.RepoInfo = obj;
        }

        if (params.BuildPacks) {
            let obj = new BuildPacksInfo();
            obj.deserialize(params.BuildPacks)
            this.BuildPacks = obj;
        }
        this.ReleaseType = 'ReleaseType' in params ? params.ReleaseType : null;

    }
}

/**
 * OperateServerManage请求参数结构体
 * @class
 */
class OperateServerManageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境Id
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 服务名
         * @type {string || null}
         */
        this.ServerName = null;

        /**
         * 任报Id
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 操作类型:cancel | go_back | done
         * @type {string || null}
         */
        this.OperateType = null;

        /**
         * 操作标识
         * @type {string || null}
         */
        this.OperatorRemark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.ServerName = 'ServerName' in params ? params.ServerName : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.OperateType = 'OperateType' in params ? params.OperateType : null;
        this.OperatorRemark = 'OperatorRemark' in params ? params.OperatorRemark : null;

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
         * @type {string || null}
         */
        this.StaticDomain = null;

        /**
         * 静态CDN默认文件夹，当前为根目录
         * @type {string || null}
         */
        this.DefaultDirName = null;

        /**
         * 资源状态(process/online/offline/init)
         * @type {string || null}
         */
        this.Status = null;

        /**
         * cos所属区域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * bucket信息
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
 * UpdateCloudRunServer请求参数结构体
 * @class
 */
class UpdateCloudRunServerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境Id
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 服务名
         * @type {string || null}
         */
        this.ServerName = null;

        /**
         * 部署信息
         * @type {DeployParam || null}
         */
        this.DeployInfo = null;

        /**
         * 服务配置信息
         * @type {ServerBaseConfig || null}
         */
        this.ServerConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.ServerName = 'ServerName' in params ? params.ServerName : null;

        if (params.DeployInfo) {
            let obj = new DeployParam();
            obj.deserialize(params.DeployInfo)
            this.DeployInfo = obj;
        }

        if (params.ServerConfig) {
            let obj = new ServerBaseConfig();
            obj.deserialize(params.ServerConfig)
            this.ServerConfig = obj;
        }

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
 * OperateServerManage返回参数结构体
 * @class
 */
class OperateServerManageResponse extends  AbstractModel {
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
 * DescribeCloudRunServerDetail请求参数结构体
 * @class
 */
class DescribeCloudRunServerDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境Id
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 服务名
         * @type {string || null}
         */
        this.ServerName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.ServerName = 'ServerName' in params ? params.ServerName : null;

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
 * DescribeCloudRunServers请求参数结构体
 * @class
 */
class DescribeCloudRunServersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境Id
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 默认为9， 最大为30
不传或传0时 取默认9
大于30时取30
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 不传或传0时 会默认为1
         * @type {number || null}
         */
        this.PageNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;

    }
}

/**
 * cls日志信息
 * @class
 */
class ClsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * cls所属地域
         * @type {string || null}
         */
        this.ClsRegion = null;

        /**
         * cls日志集ID
         * @type {string || null}
         */
        this.ClsLogsetId = null;

        /**
         * cls日志主题ID
         * @type {string || null}
         */
        this.ClsTopicId = null;

        /**
         * 创建时间
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
        this.ClsRegion = 'ClsRegion' in params ? params.ClsRegion : null;
        this.ClsLogsetId = 'ClsLogsetId' in params ? params.ClsLogsetId : null;
        this.ClsTopicId = 'ClsTopicId' in params ? params.ClsTopicId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * DescribeServerManageTask请求参数结构体
 * @class
 */
class DescribeServerManageTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境Id
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 服务名
         * @type {string || null}
         */
        this.ServerName = null;

        /**
         * 任务Id
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 操作标识
         * @type {string || null}
         */
        this.OperatorRemark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.ServerName = 'ServerName' in params ? params.ServerName : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.OperatorRemark = 'OperatorRemark' in params ? params.OperatorRemark : null;

    }
}

/**
 * 扩缩容入参
 * @class
 */
class HpaPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 扩缩容类型
         * @type {string || null}
         */
        this.PolicyType = null;

        /**
         * 扩缩容阈值
         * @type {number || null}
         */
        this.PolicyThreshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyType = 'PolicyType' in params ? params.PolicyType : null;
        this.PolicyThreshold = 'PolicyThreshold' in params ? params.PolicyThreshold : null;

    }
}

/**
 * 在线版本信息
 * @class
 */
class OnlineVersionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 版本名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * 镜像url
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 流量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FlowRatio = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.FlowRatio = 'FlowRatio' in params ? params.FlowRatio : null;

    }
}

/**
 * 服务基础配置信息
 * @class
 */
class ServerBaseConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境 Id
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 服务名
         * @type {string || null}
         */
        this.ServerName = null;

        /**
         * 是否开启公网访问
         * @type {Array.<string> || null}
         */
        this.OpenAccessTypes = null;

        /**
         * Cpu 规格
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * Mem 规格
         * @type {number || null}
         */
        this.Mem = null;

        /**
         * 最小副本数
         * @type {number || null}
         */
        this.MinNum = null;

        /**
         * 最大副本数
         * @type {number || null}
         */
        this.MaxNum = null;

        /**
         * 扩缩容配置
         * @type {Array.<HpaPolicy> || null}
         */
        this.PolicyDetails = null;

        /**
         * 日志采集路径
         * @type {string || null}
         */
        this.CustomLogs = null;

        /**
         * 环境变量
         * @type {string || null}
         */
        this.EnvParams = null;

        /**
         * 延迟检测时间
         * @type {number || null}
         */
        this.InitialDelaySeconds = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 服务端口
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 是否有Dockerfile
         * @type {boolean || null}
         */
        this.HasDockerfile = null;

        /**
         * Dockerfile 文件名
         * @type {string || null}
         */
        this.Dockerfile = null;

        /**
         * 构建目录
         * @type {string || null}
         */
        this.BuildDir = null;

        /**
         * 日志类型: none | default | custom
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * cls setId
         * @type {string || null}
         */
        this.LogSetId = null;

        /**
         * cls 主题id
         * @type {string || null}
         */
        this.LogTopicId = null;

        /**
         * 解析类型：json ｜ line
         * @type {string || null}
         */
        this.LogParseType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.ServerName = 'ServerName' in params ? params.ServerName : null;
        this.OpenAccessTypes = 'OpenAccessTypes' in params ? params.OpenAccessTypes : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Mem = 'Mem' in params ? params.Mem : null;
        this.MinNum = 'MinNum' in params ? params.MinNum : null;
        this.MaxNum = 'MaxNum' in params ? params.MaxNum : null;

        if (params.PolicyDetails) {
            this.PolicyDetails = new Array();
            for (let z in params.PolicyDetails) {
                let obj = new HpaPolicy();
                obj.deserialize(params.PolicyDetails[z]);
                this.PolicyDetails.push(obj);
            }
        }
        this.CustomLogs = 'CustomLogs' in params ? params.CustomLogs : null;
        this.EnvParams = 'EnvParams' in params ? params.EnvParams : null;
        this.InitialDelaySeconds = 'InitialDelaySeconds' in params ? params.InitialDelaySeconds : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.HasDockerfile = 'HasDockerfile' in params ? params.HasDockerfile : null;
        this.Dockerfile = 'Dockerfile' in params ? params.Dockerfile : null;
        this.BuildDir = 'BuildDir' in params ? params.BuildDir : null;
        this.LogType = 'LogType' in params ? params.LogType : null;
        this.LogSetId = 'LogSetId' in params ? params.LogSetId : null;
        this.LogTopicId = 'LogTopicId' in params ? params.LogTopicId : null;
        this.LogParseType = 'LogParseType' in params ? params.LogParseType : null;

    }
}

/**
 * DescribeCloudRunServerDetail返回参数结构体
 * @class
 */
class DescribeCloudRunServerDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务基本信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ServerBaseInfo || null}
         */
        this.BaseInfo = null;

        /**
         * 服务配置信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ServerBaseConfig || null}
         */
        this.ServerConfig = null;

        /**
         * 在线版本信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OnlineVersionInfo> || null}
         */
        this.OnlineVersionInfos = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BaseInfo) {
            let obj = new ServerBaseInfo();
            obj.deserialize(params.BaseInfo)
            this.BaseInfo = obj;
        }

        if (params.ServerConfig) {
            let obj = new ServerBaseConfig();
            obj.deserialize(params.ServerConfig)
            this.ServerConfig = obj;
        }

        if (params.OnlineVersionInfos) {
            this.OnlineVersionInfos = new Array();
            for (let z in params.OnlineVersionInfos) {
                let obj = new OnlineVersionInfo();
                obj.deserialize(params.OnlineVersionInfos[z]);
                this.OnlineVersionInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCloudRunEnv返回参数结构体
 * @class
 */
class CreateCloudRunEnvResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境Id
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 后付费订单号
         * @type {string || null}
         */
        this.TranId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.TranId = 'TranId' in params ? params.TranId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 环境基础信息
 * @class
 */
class EnvBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境Id
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 套餐类型：Trial ｜ Standard ｜ Professional ｜ Enterprise
         * @type {string || null}
         */
        this.PackageType = null;

        /**
         * VPC Id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 环境创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 环境别名
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 环境状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 环境地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 环境类型 tcbr ｜ run
         * @type {string || null}
         */
        this.EnvType = null;

        /**
         * 子网id
         * @type {string || null}
         */
        this.SubnetIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.PackageType = 'PackageType' in params ? params.PackageType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.EnvType = 'EnvType' in params ? params.EnvType : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;

    }
}

/**
 * 服务基本信息
 * @class
 */
class ServerBaseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务名
         * @type {string || null}
         */
        this.ServerName = null;

        /**
         * 默认服务域名
         * @type {string || null}
         */
        this.DefaultDomainName = null;

        /**
         * 自定义域名
         * @type {string || null}
         */
        this.CustomDomainName = null;

        /**
         * 服务状态：running/deploying/deploy_failed
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 公网访问类型
         * @type {Array.<string> || null}
         */
        this.AccessTypes = null;

        /**
         * 展示自定义域名
         * @type {Array.<string> || null}
         */
        this.CustomDomainNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServerName = 'ServerName' in params ? params.ServerName : null;
        this.DefaultDomainName = 'DefaultDomainName' in params ? params.DefaultDomainName : null;
        this.CustomDomainName = 'CustomDomainName' in params ? params.CustomDomainName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.AccessTypes = 'AccessTypes' in params ? params.AccessTypes : null;
        this.CustomDomainNames = 'CustomDomainNames' in params ? params.CustomDomainNames : null;

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

        /**
         * 支付方式。包含以下取值：
<li> prepayment：预付费</li>
<li> postpaid：后付费</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * 是否为默认环境
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsDefault = null;

        /**
         * 环境所属地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 环境类型：baas, run, hosting, weda,tcbr
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EnvType = null;

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
         * 环境标签列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 自定义日志服务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ClsInfo> || null}
         */
        this.CustomLogServices = null;

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
        this.IsAutoDegrade = 'IsAutoDegrade' in params ? params.IsAutoDegrade : null;
        this.EnvChannel = 'EnvChannel' in params ? params.EnvChannel : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.EnvType = 'EnvType' in params ? params.EnvType : null;

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

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.CustomLogServices) {
            this.CustomLogServices = new Array();
            for (let z in params.CustomLogServices) {
                let obj = new ClsInfo();
                obj.deserialize(params.CustomLogServices[z]);
                this.CustomLogServices.push(obj);
            }
        }
        this.PackageId = 'PackageId' in params ? params.PackageId : null;
        this.PackageName = 'PackageName' in params ? params.PackageName : null;

    }
}

/**
 * 标签键值对
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 标签值
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
 * DescribeEnvBaseInfo请求参数结构体
 * @class
 */
class DescribeEnvBaseInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境 Id
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
 * CreateCloudRunServer返回参数结构体
 * @class
 */
class CreateCloudRunServerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一键部署任务Id，微信云托管，暂时用不到
         * @type {number || null}
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
 * 版本流量信息
 * @class
 */
class VersionFlowInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 版本名
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * 是否默认版本
         * @type {boolean || null}
         */
        this.IsDefaultPriority = null;

        /**
         * 流量比例
         * @type {number || null}
         */
        this.FlowRatio = null;

        /**
         * 测试KV值
         * @type {ObjectKV || null}
         */
        this.UrlParam = null;

        /**
         * 权重
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
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.IsDefaultPriority = 'IsDefaultPriority' in params ? params.IsDefaultPriority : null;
        this.FlowRatio = 'FlowRatio' in params ? params.FlowRatio : null;

        if (params.UrlParam) {
            let obj = new ObjectKV();
            obj.deserialize(params.UrlParam)
            this.UrlParam = obj;
        }
        this.Priority = 'Priority' in params ? params.Priority : null;

    }
}

/**
 * UpdateCloudRunServer返回参数结构体
 * @class
 */
class UpdateCloudRunServerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境Id
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 一键部署任务Id，暂时用不到
         * @type {number || null}
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
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 通用Key Value
 * @class
 */
class ObjectKV extends  AbstractModel {
    constructor(){
        super();

        /**
         * 键值对Key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 键值对Value
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
 * BuildPacks信息
 * @class
 */
class BuildPacksInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 基础镜像
         * @type {string || null}
         */
        this.BaseImage = null;

        /**
         * 启动命令
         * @type {string || null}
         */
        this.EntryPoint = null;

        /**
         * 语言
         * @type {string || null}
         */
        this.RepoLanguage = null;

        /**
         * 上传文件名
         * @type {string || null}
         */
        this.UploadFilename = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BaseImage = 'BaseImage' in params ? params.BaseImage : null;
        this.EntryPoint = 'EntryPoint' in params ? params.EntryPoint : null;
        this.RepoLanguage = 'RepoLanguage' in params ? params.RepoLanguage : null;
        this.UploadFilename = 'UploadFilename' in params ? params.UploadFilename : null;

    }
}

/**
 * CreateCloudRunEnv请求参数结构体
 * @class
 */
class CreateCloudRunEnvRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Trial,Standard,Professional,Enterprise
         * @type {string || null}
         */
        this.PackageType = null;

        /**
         * 环境别名，要以a-z开头，不能包含 a-z,0-9,- 以外的字符
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 用户享有的免费额度级别，目前只能为“basic”，不传该字段或该字段为空，标识不享受免费额度。
         * @type {string || null}
         */
        this.FreeQuota = null;

        /**
         * 订单标记。建议使用方统一转大小写之后再判断。
QuickStart：快速启动来源
Activity：活动来源
         * @type {string || null}
         */
        this.Flag = null;

        /**
         * 私有网络Id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网列表
         * @type {Array.<string> || null}
         */
        this.SubNetIds = null;

        /**
         * 请求key 用于防重
         * @type {string || null}
         */
        this.ReqKey = null;

        /**
         * 来源：wechat | cloud
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 渠道：wechat | cloud
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
        this.PackageType = 'PackageType' in params ? params.PackageType : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.FreeQuota = 'FreeQuota' in params ? params.FreeQuota : null;
        this.Flag = 'Flag' in params ? params.Flag : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubNetIds = 'SubNetIds' in params ? params.SubNetIds : null;
        this.ReqKey = 'ReqKey' in params ? params.ReqKey : null;
        this.Source = 'Source' in params ? params.Source : null;
        this.Channel = 'Channel' in params ? params.Channel : null;

    }
}

/**
 * 服务管理任务信息
 * @class
 */
class ServerManageTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务Id
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 环境Id
         * @type {string || null}
         */
        this.EnvId = null;

        /**
         * 服务名
         * @type {string || null}
         */
        this.ServerName = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 变更类型
         * @type {string || null}
         */
        this.ChangeType = null;

        /**
         * 发布类型
         * @type {string || null}
         */
        this.ReleaseType = null;

        /**
         * 部署类型
         * @type {string || null}
         */
        this.DeployType = null;

        /**
         * 上一个版本名
         * @type {string || null}
         */
        this.PreVersionName = null;

        /**
         * 版本名
         * @type {string || null}
         */
        this.VersionName = null;

        /**
         * 流水线Id
         * @type {number || null}
         */
        this.PipelineId = null;

        /**
         * 流水线任务Id
         * @type {number || null}
         */
        this.PipelineTaskId = null;

        /**
         * 发布单Id
         * @type {number || null}
         */
        this.ReleaseId = null;

        /**
         * 状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 步骤信息
         * @type {Array.<TaskStepInfo> || null}
         */
        this.Steps = null;

        /**
         * 失败原因
         * @type {string || null}
         */
        this.FailReason = null;

        /**
         * 操作标识
         * @type {string || null}
         */
        this.OperatorRemark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.EnvId = 'EnvId' in params ? params.EnvId : null;
        this.ServerName = 'ServerName' in params ? params.ServerName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ChangeType = 'ChangeType' in params ? params.ChangeType : null;
        this.ReleaseType = 'ReleaseType' in params ? params.ReleaseType : null;
        this.DeployType = 'DeployType' in params ? params.DeployType : null;
        this.PreVersionName = 'PreVersionName' in params ? params.PreVersionName : null;
        this.VersionName = 'VersionName' in params ? params.VersionName : null;
        this.PipelineId = 'PipelineId' in params ? params.PipelineId : null;
        this.PipelineTaskId = 'PipelineTaskId' in params ? params.PipelineTaskId : null;
        this.ReleaseId = 'ReleaseId' in params ? params.ReleaseId : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Steps) {
            this.Steps = new Array();
            for (let z in params.Steps) {
                let obj = new TaskStepInfo();
                obj.deserialize(params.Steps[z]);
                this.Steps.push(obj);
            }
        }
        this.FailReason = 'FailReason' in params ? params.FailReason : null;
        this.OperatorRemark = 'OperatorRemark' in params ? params.OperatorRemark : null;

    }
}

module.exports = {
    DescribeCloudRunServersResponse: DescribeCloudRunServersResponse,
    RepositoryInfo: RepositoryInfo,
    ReleaseGrayRequest: ReleaseGrayRequest,
    StorageInfo: StorageInfo,
    DescribeEnvBaseInfoResponse: DescribeEnvBaseInfoResponse,
    CreateCloudRunServerRequest: CreateCloudRunServerRequest,
    FunctionInfo: FunctionInfo,
    DescribeServerManageTaskResponse: DescribeServerManageTaskResponse,
    TaskStepInfo: TaskStepInfo,
    DescribeCloudRunEnvsResponse: DescribeCloudRunEnvsResponse,
    DescribeCloudRunEnvsRequest: DescribeCloudRunEnvsRequest,
    ReleaseGrayResponse: ReleaseGrayResponse,
    DeployParam: DeployParam,
    OperateServerManageRequest: OperateServerManageRequest,
    StaticStorageInfo: StaticStorageInfo,
    UpdateCloudRunServerRequest: UpdateCloudRunServerRequest,
    LogServiceInfo: LogServiceInfo,
    OperateServerManageResponse: OperateServerManageResponse,
    DescribeCloudRunServerDetailRequest: DescribeCloudRunServerDetailRequest,
    DatabasesInfo: DatabasesInfo,
    DescribeCloudRunServersRequest: DescribeCloudRunServersRequest,
    ClsInfo: ClsInfo,
    DescribeServerManageTaskRequest: DescribeServerManageTaskRequest,
    HpaPolicy: HpaPolicy,
    OnlineVersionInfo: OnlineVersionInfo,
    ServerBaseConfig: ServerBaseConfig,
    DescribeCloudRunServerDetailResponse: DescribeCloudRunServerDetailResponse,
    CreateCloudRunEnvResponse: CreateCloudRunEnvResponse,
    EnvBaseInfo: EnvBaseInfo,
    ServerBaseInfo: ServerBaseInfo,
    EnvInfo: EnvInfo,
    Tag: Tag,
    DescribeEnvBaseInfoRequest: DescribeEnvBaseInfoRequest,
    CreateCloudRunServerResponse: CreateCloudRunServerResponse,
    VersionFlowInfo: VersionFlowInfo,
    UpdateCloudRunServerResponse: UpdateCloudRunServerResponse,
    ObjectKV: ObjectKV,
    BuildPacksInfo: BuildPacksInfo,
    CreateCloudRunEnvRequest: CreateCloudRunEnvRequest,
    ServerManageTaskInfo: ServerManageTaskInfo,

}
