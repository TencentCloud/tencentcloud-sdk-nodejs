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
 * ManageExternalEndpoint请求参数结构体
 * @class
 */
class ManageExternalEndpointRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 操作（Create/Delete）
         * @type {string || null}
         */
        this.Operation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.Operation = 'Operation' in params ? params.Operation : null;

    }
}

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
 * 触发器目标
 * @class
 */
class WebhookTarget extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标地址
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 自定义 Headers
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
        this.Address = 'Address' in params ? params.Address : null;

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
 * DescribeReplicationInstances返回参数结构体
 * @class
 */
class DescribeReplicationInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总实例个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 同步实例列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ReplicationRegistry> || null}
         */
        this.ReplicationRegistries = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ReplicationRegistries) {
            this.ReplicationRegistries = new Array();
            for (let z in params.ReplicationRegistries) {
                let obj = new ReplicationRegistry();
                obj.deserialize(params.ReplicationRegistries[z]);
                this.ReplicationRegistries.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeReplicationInstanceCreateTasks返回参数结构体
 * @class
 */
class DescribeReplicationInstanceCreateTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务详情
         * @type {Array.<TaskDetail> || null}
         */
        this.TaskDetail = null;

        /**
         * 整体任务状态
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

        if (params.TaskDetail) {
            this.TaskDetail = new Array();
            for (let z in params.TaskDetail) {
                let obj = new TaskDetail();
                obj.deserialize(params.TaskDetail[z]);
                this.TaskDetail.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 触发器日志
 * @class
 */
class WebhookTriggerLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志 Id
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 触发器 Id
         * @type {number || null}
         */
        this.TriggerId = null;

        /**
         * 事件类型
         * @type {string || null}
         */
        this.EventType = null;

        /**
         * 通知类型
         * @type {string || null}
         */
        this.NotifyType = null;

        /**
         * 详情
         * @type {string || null}
         */
        this.Detail = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreationTime = null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.TriggerId = 'TriggerId' in params ? params.TriggerId : null;
        this.EventType = 'EventType' in params ? params.EventType : null;
        this.NotifyType = 'NotifyType' in params ? params.NotifyType : null;
        this.Detail = 'Detail' in params ? params.Detail : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 内网接入信息
 * @class
 */
class AccessVpc extends  AbstractModel {
    constructor(){
        super();

        /**
         * Vpc的Id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网Id
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 内网接入状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 内网接入Ip
         * @type {string || null}
         */
        this.AccessIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AccessIp = 'AccessIp' in params ? params.AccessIp : null;

    }
}

/**
 * ModifyTagRetentionRule请求参数结构体
 * @class
 */
class ModifyTagRetentionRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主实例iD
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 命名空间的Id，必须填写原有的命名空间id
         * @type {number || null}
         */
        this.NamespaceId = null;

        /**
         * 保留策略
         * @type {RetentionRule || null}
         */
        this.RetentionRule = null;

        /**
         * 执行周期，必须填写为原来的设置
         * @type {string || null}
         */
        this.CronSetting = null;

        /**
         * 规则Id
         * @type {number || null}
         */
        this.RetentionId = null;

        /**
         * 是否禁用规则
         * @type {boolean || null}
         */
        this.Disabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;

        if (params.RetentionRule) {
            let obj = new RetentionRule();
            obj.deserialize(params.RetentionRule)
            this.RetentionRule = obj;
        }
        this.CronSetting = 'CronSetting' in params ? params.CronSetting : null;
        this.RetentionId = 'RetentionId' in params ? params.RetentionId : null;
        this.Disabled = 'Disabled' in params ? params.Disabled : null;

    }
}

/**
 * ModifyRepository返回参数结构体
 * @class
 */
class ModifyRepositoryResponse extends  AbstractModel {
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
 * DescribeNamespaces返回参数结构体
 * @class
 */
class DescribeNamespacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间列表信息
         * @type {Array.<TcrNamespaceInfo> || null}
         */
        this.NamespaceList = null;

        /**
         * 总个数
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

        if (params.NamespaceList) {
            this.NamespaceList = new Array();
            for (let z in params.NamespaceList) {
                let obj = new TcrNamespaceInfo();
                obj.deserialize(params.NamespaceList[z]);
                this.NamespaceList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DownloadHelmChart请求参数结构体
 * @class
 */
class DownloadHelmChartRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 命名空间名称
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * Helm chart名称
         * @type {string || null}
         */
        this.ChartName = null;

        /**
         * Helm chart版本
         * @type {string || null}
         */
        this.ChartVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.ChartName = 'ChartName' in params ? params.ChartName : null;
        this.ChartVersion = 'ChartVersion' in params ? params.ChartVersion : null;

    }
}

/**
 * 版本保留规则
 * @class
 */
class RetentionRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 支持的策略，可选值为latestPushedK（保留最新推送多少个版本）nDaysSinceLastPush（保留近天内推送）
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 规则设置下的对应值
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

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
 * DeleteInstanceToken请求参数结构体
 * @class
 */
class DeleteInstanceTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 访问凭证 ID
         * @type {string || null}
         */
        this.TokenId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.TokenId = 'TokenId' in params ? params.TokenId : null;

    }
}

/**
 * 任务详情
 * @class
 */
class TaskDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 任务UUID
         * @type {string || null}
         */
        this.TaskUUID = null;

        /**
         * 任务状态
         * @type {string || null}
         */
        this.TaskStatus = null;

        /**
         * 任务的状态信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaskMessage = null;

        /**
         * 任务开始时间
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 任务结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FinishedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.TaskUUID = 'TaskUUID' in params ? params.TaskUUID : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.TaskMessage = 'TaskMessage' in params ? params.TaskMessage : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.FinishedTime = 'FinishedTime' in params ? params.FinishedTime : null;

    }
}

/**
 * ModifyRepository请求参数结构体
 * @class
 */
class ModifyRepositoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 命名空间名称
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 镜像仓库名称
         * @type {string || null}
         */
        this.RepositoryName = null;

        /**
         * 仓库简短描述
         * @type {string || null}
         */
        this.BriefDescription = null;

        /**
         * 仓库详细描述
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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.RepositoryName = 'RepositoryName' in params ? params.RepositoryName : null;
        this.BriefDescription = 'BriefDescription' in params ? params.BriefDescription : null;
        this.Description = 'Description' in params ? params.Description : null;

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
 * DescribeInternalEndpointDnsStatus请求参数结构体
 * @class
 */
class DescribeInternalEndpointDnsStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * vpc列表
         * @type {Array.<VpcAndDomainInfo> || null}
         */
        this.VpcSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.VpcSet) {
            this.VpcSet = new Array();
            for (let z in params.VpcSet) {
                let obj = new VpcAndDomainInfo();
                obj.deserialize(params.VpcSet[z]);
                this.VpcSet.push(obj);
            }
        }

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
 * DeleteInternalEndpointDns请求参数结构体
 * @class
 */
class DeleteInternalEndpointDnsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * tcr实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 私有网络id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * tcr内网访问链路ip
         * @type {string || null}
         */
        this.EniLBIp = null;

        /**
         * true：使用默认域名
false:  使用带有vpc的域名
         * @type {boolean || null}
         */
        this.UsePublicDomain = null;

        /**
         * 解析地域，需要保证和vpc处于同一地域，如果不填则默认为主实例地域
         * @type {string || null}
         */
        this.RegionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.EniLBIp = 'EniLBIp' in params ? params.EniLBIp : null;
        this.UsePublicDomain = 'UsePublicDomain' in params ? params.UsePublicDomain : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;

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
 * ModifyInstance请求参数结构体
 * @class
 */
class ModifyInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 实例的规格
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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.RegistryType = 'RegistryType' in params ? params.RegistryType : null;

    }
}

/**
 * RenewInstance返回参数结构体
 * @class
 */
class RenewInstanceResponse extends  AbstractModel {
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
 * CreateImmutableTagRules请求参数结构体
 * @class
 */
class CreateImmutableTagRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 Id
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 命名空间
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 规则
         * @type {ImmutableTagRule || null}
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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;

        if (params.Rule) {
            let obj = new ImmutableTagRule();
            obj.deserialize(params.Rule)
            this.Rule = obj;
        }

    }
}

/**
 * DescribeRepositories返回参数结构体
 * @class
 */
class DescribeRepositoriesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库信息列表
         * @type {Array.<TcrRepositoryInfo> || null}
         */
        this.RepositoryList = null;

        /**
         * 总个数
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

        if (params.RepositoryList) {
            this.RepositoryList = new Array();
            for (let z in params.RepositoryList) {
                let obj = new TcrRepositoryInfo();
                obj.deserialize(params.RepositoryList[z]);
                this.RepositoryList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * vpc和domain信息
 * @class
 */
class VpcAndDomainInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * tcr实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 私有网络id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * tcr内网访问链路ip
         * @type {string || null}
         */
        this.EniLBIp = null;

        /**
         * true：use instance name as subdomain
false: use instancename+"-vpc" as subdomain
         * @type {boolean || null}
         */
        this.UsePublicDomain = null;

        /**
         * 解析地域，需要保证和vpc处于同一地域，如果不填则默认为主实例地域
         * @type {string || null}
         */
        this.RegionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.EniLBIp = 'EniLBIp' in params ? params.EniLBIp : null;
        this.UsePublicDomain = 'UsePublicDomain' in params ? params.UsePublicDomain : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;

    }
}

/**
 * DeleteInstanceToken返回参数结构体
 * @class
 */
class DeleteInstanceTokenResponse extends  AbstractModel {
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
 * CreateReplicationInstance请求参数结构体
 * @class
 */
class CreateReplicationInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主实例iD
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 复制实例地域ID
         * @type {number || null}
         */
        this.ReplicationRegionId = null;

        /**
         * 复制实例地域名称
         * @type {string || null}
         */
        this.ReplicationRegionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.ReplicationRegionId = 'ReplicationRegionId' in params ? params.ReplicationRegionId : null;
        this.ReplicationRegionName = 'ReplicationRegionName' in params ? params.ReplicationRegionName : null;

    }
}

/**
 * ModifyInstanceToken返回参数结构体
 * @class
 */
class ModifyInstanceTokenResponse extends  AbstractModel {
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
 * CreateMultipleSecurityPolicy返回参数结构体
 * @class
 */
class CreateMultipleSecurityPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
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
 * CreateTagRetentionRule返回参数结构体
 * @class
 */
class CreateTagRetentionRuleResponse extends  AbstractModel {
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
 * DescribeChartDownloadInfo返回参数结构体
 * @class
 */
class DescribeChartDownloadInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于下载的url的预签名地址
         * @type {string || null}
         */
        this.PreSignedDownloadURL = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PreSignedDownloadURL = 'PreSignedDownloadURL' in params ? params.PreSignedDownloadURL : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeExternalEndpointStatus请求参数结构体
 * @class
 */
class DescribeExternalEndpointStatusRequest extends  AbstractModel {
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
 * DeleteRepository返回参数结构体
 * @class
 */
class DeleteRepositoryResponse extends  AbstractModel {
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
 * DescribeWebhookTriggerLog返回参数结构体
 * @class
 */
class DescribeWebhookTriggerLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 日志列表
         * @type {Array.<WebhookTriggerLog> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Logs) {
            this.Logs = new Array();
            for (let z in params.Logs) {
                let obj = new WebhookTriggerLog();
                obj.deserialize(params.Logs[z]);
                this.Logs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DownloadHelmChart返回参数结构体
 * @class
 */
class DownloadHelmChartResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 临时token
         * @type {string || null}
         */
        this.TmpToken = null;

        /**
         * 临时的secretId
         * @type {string || null}
         */
        this.TmpSecretId = null;

        /**
         * 临时的secretKey
         * @type {string || null}
         */
        this.TmpSecretKey = null;

        /**
         * 存储桶信息
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * 实例ID
         * @type {string || null}
         */
        this.Region = null;

        /**
         * chart信息
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 开始时间时间戳
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * token过期时间时间戳
         * @type {number || null}
         */
        this.ExpiredTime = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TmpToken = 'TmpToken' in params ? params.TmpToken : null;
        this.TmpSecretId = 'TmpSecretId' in params ? params.TmpSecretId : null;
        this.TmpSecretKey = 'TmpSecretKey' in params ? params.TmpSecretKey : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ManageReplication请求参数结构体
 * @class
 */
class ManageReplicationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 复制源实例ID
         * @type {string || null}
         */
        this.SourceRegistryId = null;

        /**
         * 复制目标实例ID
         * @type {string || null}
         */
        this.DestinationRegistryId = null;

        /**
         * 同步规则
         * @type {ReplicationRule || null}
         */
        this.Rule = null;

        /**
         * 规则描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 目标实例的地域ID，如广州是1
         * @type {number || null}
         */
        this.DestinationRegionId = null;

        /**
         * 开启跨主账号实例同步配置项
         * @type {PeerReplicationOption || null}
         */
        this.PeerReplicationOption = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceRegistryId = 'SourceRegistryId' in params ? params.SourceRegistryId : null;
        this.DestinationRegistryId = 'DestinationRegistryId' in params ? params.DestinationRegistryId : null;

        if (params.Rule) {
            let obj = new ReplicationRule();
            obj.deserialize(params.Rule)
            this.Rule = obj;
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.DestinationRegionId = 'DestinationRegionId' in params ? params.DestinationRegionId : null;

        if (params.PeerReplicationOption) {
            let obj = new PeerReplicationOption();
            obj.deserialize(params.PeerReplicationOption)
            this.PeerReplicationOption = obj;
        }

    }
}

/**
 * DeleteWebhookTrigger返回参数结构体
 * @class
 */
class DeleteWebhookTriggerResponse extends  AbstractModel {
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
 * DeleteImageLifecycleGlobalPersonal返回参数结构体
 * @class
 */
class DeleteImageLifecycleGlobalPersonalResponse extends  AbstractModel {
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
 * ModifySecurityPolicy请求参数结构体
 * @class
 */
class ModifySecurityPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例的Id
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * PolicyId
         * @type {number || null}
         */
        this.PolicyIndex = null;

        /**
         * 192.168.0.0/24 白名单Ip
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * 备注
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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.PolicyIndex = 'PolicyIndex' in params ? params.PolicyIndex : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeReplicationInstanceSyncStatus返回参数结构体
 * @class
 */
class DescribeReplicationInstanceSyncStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 同步状态
         * @type {string || null}
         */
        this.ReplicationStatus = null;

        /**
         * 同步完成时间
         * @type {string || null}
         */
        this.ReplicationTime = null;

        /**
         * 同步日志
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ReplicationLog || null}
         */
        this.ReplicationLog = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReplicationStatus = 'ReplicationStatus' in params ? params.ReplicationStatus : null;
        this.ReplicationTime = 'ReplicationTime' in params ? params.ReplicationTime : null;

        if (params.ReplicationLog) {
            let obj = new ReplicationLog();
            obj.deserialize(params.ReplicationLog)
            this.ReplicationLog = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyImmutableTagRules返回参数结构体
 * @class
 */
class ModifyImmutableTagRulesResponse extends  AbstractModel {
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
 * 云标签Tag
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云标签的key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 云标签的值
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
 * DescribeTagRetentionExecutionTask返回参数结构体
 * @class
 */
class DescribeTagRetentionExecutionTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 版本保留执行任务列表
         * @type {Array.<RetentionTask> || null}
         */
        this.RetentionTaskList = null;

        /**
         * 版本保留执行任务总数
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

        if (params.RetentionTaskList) {
            this.RetentionTaskList = new Array();
            for (let z in params.RetentionTaskList) {
                let obj = new RetentionTask();
                obj.deserialize(params.RetentionTaskList[z]);
                this.RetentionTaskList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInternalEndpoints返回参数结构体
 * @class
 */
class DescribeInternalEndpointsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内网接入信息的列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AccessVpc> || null}
         */
        this.AccessVpcSet = null;

        /**
         * 内网接入总数
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

        if (params.AccessVpcSet) {
            this.AccessVpcSet = new Array();
            for (let z in params.AccessVpcSet) {
                let obj = new AccessVpc();
                obj.deserialize(params.AccessVpcSet[z]);
                this.AccessVpcSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteImmutableTagRules返回参数结构体
 * @class
 */
class DeleteImmutableTagRulesResponse extends  AbstractModel {
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
 * CreateTagRetentionRule请求参数结构体
 * @class
 */
class CreateTagRetentionRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主实例iD
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 命名空间的Id
         * @type {number || null}
         */
        this.NamespaceId = null;

        /**
         * 保留策略
         * @type {RetentionRule || null}
         */
        this.RetentionRule = null;

        /**
         * 执行周期，当前只能选择： manual;daily;weekly;monthly
         * @type {string || null}
         */
        this.CronSetting = null;

        /**
         * 是否禁用规则，默认值为false
         * @type {boolean || null}
         */
        this.Disabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;

        if (params.RetentionRule) {
            let obj = new RetentionRule();
            obj.deserialize(params.RetentionRule)
            this.RetentionRule = obj;
        }
        this.CronSetting = 'CronSetting' in params ? params.CronSetting : null;
        this.Disabled = 'Disabled' in params ? params.Disabled : null;

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
 * ModifyInstanceToken请求参数结构体
 * @class
 */
class ModifyInstanceTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例长期访问凭证 ID
         * @type {string || null}
         */
        this.TokenId = null;

        /**
         * 实例 ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 启用或禁用实例长期访问凭证
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * 访问凭证描述
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 1为修改描述 2为操作启动禁用，默认值为2
         * @type {number || null}
         */
        this.ModifyFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TokenId = 'TokenId' in params ? params.TokenId : null;
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.ModifyFlag = 'ModifyFlag' in params ? params.ModifyFlag : null;

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
 * CreateNamespace返回参数结构体
 * @class
 */
class CreateNamespaceResponse extends  AbstractModel {
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
 * ModifyImmutableTagRules请求参数结构体
 * @class
 */
class ModifyImmutableTagRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 Id
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 命名空间
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 规则 Id
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * 规则
         * @type {ImmutableTagRule || null}
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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

        if (params.Rule) {
            let obj = new ImmutableTagRule();
            obj.deserialize(params.Rule)
            this.Rule = obj;
        }

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
 * vpc私有域名解析状态
 * @class
 */
class VpcPrivateDomainStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * unique vpc id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * ENABLE代表已经开启，DISABLE代表未开启，ERROR代表查询出错
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
        this.Region = 'Region' in params ? params.Region : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeSecurityPolicies返回参数结构体
 * @class
 */
class DescribeSecurityPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例安全策略组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SecurityPolicy> || null}
         */
        this.SecurityPolicySet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SecurityPolicySet) {
            this.SecurityPolicySet = new Array();
            for (let z in params.SecurityPolicySet) {
                let obj = new SecurityPolicy();
                obj.deserialize(params.SecurityPolicySet[z]);
                this.SecurityPolicySet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeReplicationInstances请求参数结构体
 * @class
 */
class DescribeReplicationInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.RegistryId = null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
 * 镜像信息
 * @class
 */
class TcrImageInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 哈希值
         * @type {string || null}
         */
        this.Digest = null;

        /**
         * 镜像大小
         * @type {number || null}
         */
        this.Size = null;

        /**
         * Tag名称
         * @type {string || null}
         */
        this.ImageVersion = null;

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
        this.Digest = 'Digest' in params ? params.Digest : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.ImageVersion = 'ImageVersion' in params ? params.ImageVersion : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeImageLifecycleGlobalPersonal返回参数结构体
 * @class
 */
class DescribeImageLifecycleGlobalPersonalResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 全局自动删除策略信息
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
 * DescribeReplicationInstanceSyncStatus请求参数结构体
 * @class
 */
class DescribeReplicationInstanceSyncStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主实例Id
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 复制实例Id
         * @type {string || null}
         */
        this.ReplicationRegistryId = null;

        /**
         * 复制实例的地域Id
         * @type {number || null}
         */
        this.ReplicationRegionId = null;

        /**
         * 是否显示同步日志
         * @type {boolean || null}
         */
        this.ShowReplicationLog = null;

        /**
         * 日志页号, 默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 最大输出条数，默认5，最大为20
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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.ReplicationRegistryId = 'ReplicationRegistryId' in params ? params.ReplicationRegistryId : null;
        this.ReplicationRegionId = 'ReplicationRegionId' in params ? params.ReplicationRegionId : null;
        this.ShowReplicationLog = 'ShowReplicationLog' in params ? params.ShowReplicationLog : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DeleteInstance返回参数结构体
 * @class
 */
class DeleteInstanceResponse extends  AbstractModel {
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
 * DeleteImageLifecycleGlobalPersonal请求参数结构体
 * @class
 */
class DeleteImageLifecycleGlobalPersonalRequest extends  AbstractModel {
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
 * ModifyWebhookTrigger请求参数结构体
 * @class
 */
class ModifyWebhookTriggerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 触发器参数
         * @type {WebhookTrigger || null}
         */
        this.Trigger = null;

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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;

        if (params.Trigger) {
            let obj = new WebhookTrigger();
            obj.deserialize(params.Trigger)
            this.Trigger = obj;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * CheckInstanceName请求参数结构体
 * @class
 */
class CheckInstanceNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待创建的实例名称
         * @type {string || null}
         */
        this.RegistryName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryName = 'RegistryName' in params ? params.RegistryName : null;

    }
}

/**
 * DeleteNamespace返回参数结构体
 * @class
 */
class DeleteNamespaceResponse extends  AbstractModel {
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
 * CreateWebhookTrigger请求参数结构体
 * @class
 */
class CreateWebhookTriggerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 Id
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 触发器参数
         * @type {WebhookTrigger || null}
         */
        this.Trigger = null;

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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;

        if (params.Trigger) {
            let obj = new WebhookTrigger();
            obj.deserialize(params.Trigger)
            this.Trigger = obj;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

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
 * CreateSecurityPolicy返回参数结构体
 * @class
 */
class CreateSecurityPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
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
 * DescribeRepositories请求参数结构体
 * @class
 */
class DescribeRepositoriesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 指定命名空间，不填写默认为查询所有命名空间下镜像仓库
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 指定镜像仓库，不填写默认查询指定命名空间下所有镜像仓库
         * @type {string || null}
         */
        this.RepositoryName = null;

        /**
         * 页数，用于分页
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页个数，用于分页
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 基于字段排序，支持的值有-creation_time,-name, -update_time
         * @type {string || null}
         */
        this.SortBy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.RepositoryName = 'RepositoryName' in params ? params.RepositoryName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SortBy = 'SortBy' in params ? params.SortBy : null;

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
         * 用户密码，密码必须为8到16位
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
 * ModifyNamespace返回参数结构体
 * @class
 */
class ModifyNamespaceResponse extends  AbstractModel {
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
 * Tcr 命名空间的描述
 * @class
 */
class TcrNamespaceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * 访问级别
         * @type {boolean || null}
         */
        this.Public = null;

        /**
         * 命名空间的Id
         * @type {number || null}
         */
        this.NamespaceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.Public = 'Public' in params ? params.Public : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;

    }
}

/**
 * DescribeImages返回参数结构体
 * @class
 */
class DescribeImagesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器镜像信息列表
         * @type {Array.<TcrImageInfo> || null}
         */
        this.ImageInfoList = null;

        /**
         * 容器镜像总数
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

        if (params.ImageInfoList) {
            this.ImageInfoList = new Array();
            for (let z in params.ImageInfoList) {
                let obj = new TcrImageInfo();
                obj.deserialize(params.ImageInfoList[z]);
                this.ImageInfoList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
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
 * DescribeWebhookTriggerLog请求参数结构体
 * @class
 */
class DescribeWebhookTriggerLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 Id
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 触发器 Id
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 分页单页数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移量
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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * RenewInstance请求参数结构体
 * @class
 */
class RenewInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 预付费自动续费标识和购买时长,0：手动续费，1：自动续费，2：不续费并且不通知;单位为月
         * @type {RegistryChargePrepaid || null}
         */
        this.RegistryChargePrepaid = null;

        /**
         * 0 续费， 1按量转包年包月
         * @type {number || null}
         */
        this.Flag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;

        if (params.RegistryChargePrepaid) {
            let obj = new RegistryChargePrepaid();
            obj.deserialize(params.RegistryChargePrepaid)
            this.RegistryChargePrepaid = obj;
        }
        this.Flag = 'Flag' in params ? params.Flag : null;

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
 * DescribeTagRetentionExecutionTask请求参数结构体
 * @class
 */
class DescribeTagRetentionExecutionTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主实例iD
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 规则Id
         * @type {number || null}
         */
        this.RetentionId = null;

        /**
         * 规则执行Id
         * @type {number || null}
         */
        this.ExecutionId = null;

        /**
         * 分页Page
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页PageSize
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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.RetentionId = 'RetentionId' in params ? params.RetentionId : null;
        this.ExecutionId = 'ExecutionId' in params ? params.ExecutionId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 同步规则
 * @class
 */
class ReplicationRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 同步规则名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 目标命名空间
         * @type {string || null}
         */
        this.DestNamespace = null;

        /**
         * 是否覆盖
         * @type {boolean || null}
         */
        this.Override = null;

        /**
         * 同步过滤条件
         * @type {Array.<ReplicationFilter> || null}
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
        this.Name = 'Name' in params ? params.Name : null;
        this.DestNamespace = 'DestNamespace' in params ? params.DestNamespace : null;
        this.Override = 'Override' in params ? params.Override : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new ReplicationFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

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
 * DeleteTagRetentionRule返回参数结构体
 * @class
 */
class DeleteTagRetentionRuleResponse extends  AbstractModel {
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
 * DeleteMultipleSecurityPolicy请求参数结构体
 * @class
 */
class DeleteMultipleSecurityPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 安全组策略
         * @type {Array.<SecurityPolicy> || null}
         */
        this.SecurityGroupPolicySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;

        if (params.SecurityGroupPolicySet) {
            this.SecurityGroupPolicySet = new Array();
            for (let z in params.SecurityGroupPolicySet) {
                let obj = new SecurityPolicy();
                obj.deserialize(params.SecurityGroupPolicySet[z]);
                this.SecurityGroupPolicySet.push(obj);
            }
        }

    }
}

/**
 * DeleteSecurityPolicy返回参数结构体
 * @class
 */
class DeleteSecurityPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
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
 * DescribeInternalEndpointDnsStatus返回参数结构体
 * @class
 */
class DescribeInternalEndpointDnsStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * vpc私有域名解析状态列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VpcPrivateDomainStatus> || null}
         */
        this.VpcSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.VpcSet) {
            this.VpcSet = new Array();
            for (let z in params.VpcSet) {
                let obj = new VpcPrivateDomainStatus();
                obj.deserialize(params.VpcSet[z]);
                this.VpcSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Webhook 触发器
 * @class
 */
class WebhookTrigger extends  AbstractModel {
    constructor(){
        super();

        /**
         * 触发器名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 触发器目标
         * @type {Array.<WebhookTarget> || null}
         */
        this.Targets = null;

        /**
         * 触发动作
         * @type {Array.<string> || null}
         */
        this.EventTypes = null;

        /**
         * 触发规则
         * @type {string || null}
         */
        this.Condition = null;

        /**
         * 启用触发器
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * 触发器Id
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 触发器描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 触发器所属命名空间 Id
         * @type {number || null}
         */
        this.NamespaceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new WebhookTarget();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }
        this.EventTypes = 'EventTypes' in params ? params.EventTypes : null;
        this.Condition = 'Condition' in params ? params.Condition : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;

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
 * 安全策略
 * @class
 */
class SecurityPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略索引
         * @type {number || null}
         */
        this.PolicyIndex = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 运行访问的公网IP地址端
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * 安全策略的版本
         * @type {string || null}
         */
        this.PolicyVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyIndex = 'PolicyIndex' in params ? params.PolicyIndex : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.PolicyVersion = 'PolicyVersion' in params ? params.PolicyVersion : null;

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
 * CreateInstanceToken返回参数结构体
 * @class
 */
class CreateInstanceTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Username = null;

        /**
         * 访问凭证
         * @type {string || null}
         */
        this.Token = null;

        /**
         * 访问凭证过期时间戳，是一个时间戳数字，无单位
         * @type {number || null}
         */
        this.ExpTime = null;

        /**
         * 长期凭证的TokenId，短期凭证没有TokenId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TokenId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Username = 'Username' in params ? params.Username : null;
        this.Token = 'Token' in params ? params.Token : null;
        this.ExpTime = 'ExpTime' in params ? params.ExpTime : null;
        this.TokenId = 'TokenId' in params ? params.TokenId : null;
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
 * 版本保留执行的规则
 * @class
 */
class RetentionTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务Id
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 所属的规则执行Id
         * @type {number || null}
         */
        this.ExecutionId = null;

        /**
         * 任务开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 任务结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 任务的执行状态，Failed, Succeed, Stopped, InProgress
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 总tag数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 保留tag数
         * @type {number || null}
         */
        this.Retained = null;

        /**
         * 应用的仓库
         * @type {string || null}
         */
        this.Repository = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ExecutionId = 'ExecutionId' in params ? params.ExecutionId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.Retained = 'Retained' in params ? params.Retained : null;
        this.Repository = 'Repository' in params ? params.Repository : null;

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
         * 返回tag镜像内容相同的tag列表
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
 * DeleteWebhookTrigger请求参数结构体
 * @class
 */
class DeleteWebhookTriggerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 触发器 Id
         * @type {number || null}
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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Id = 'Id' in params ? params.Id : null;

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
 * DescribeWebhookTrigger返回参数结构体
 * @class
 */
class DescribeWebhookTriggerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 触发器总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 触发器列表
         * @type {Array.<WebhookTrigger> || null}
         */
        this.Triggers = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Triggers) {
            this.Triggers = new Array();
            for (let z in params.Triggers) {
                let obj = new WebhookTrigger();
                obj.deserialize(params.Triggers[z]);
                this.Triggers.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeImageManifests请求参数结构体
 * @class
 */
class DescribeImageManifestsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 命名空间名称
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 镜像仓库名称
         * @type {string || null}
         */
        this.RepositoryName = null;

        /**
         * 镜像版本
         * @type {string || null}
         */
        this.ImageVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.RepositoryName = 'RepositoryName' in params ? params.RepositoryName : null;
        this.ImageVersion = 'ImageVersion' in params ? params.ImageVersion : null;

    }
}

/**
 * 实例预付费模式
 * @class
 */
class RegistryChargePrepaid extends  AbstractModel {
    constructor(){
        super();

        /**
         * 购买实例的时长，单位：月
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 自动续费标识，0：手动续费，1：自动续费，2：不续费并且不通知
         * @type {number || null}
         */
        this.RenewFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Period = 'Period' in params ? params.Period : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;

    }
}

/**
 * ModifyNamespace请求参数结构体
 * @class
 */
class ModifyNamespaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 命名空间名称
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 访问级别，True为公开，False为私有
         * @type {boolean || null}
         */
        this.IsPublic = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.IsPublic = 'IsPublic' in params ? params.IsPublic : null;

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
         * 默认值为0, 1公共，0私有
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
 * 云标签
 * @class
 */
class TagSpecification extends  AbstractModel {
    constructor(){
        super();

        /**
         * 默认值为instance
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * 云标签数组
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
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;

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
 * CreateMultipleSecurityPolicy请求参数结构体
 * @class
 */
class CreateMultipleSecurityPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 安全组策略
         * @type {Array.<SecurityPolicy> || null}
         */
        this.SecurityGroupPolicySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;

        if (params.SecurityGroupPolicySet) {
            this.SecurityGroupPolicySet = new Array();
            for (let z in params.SecurityGroupPolicySet) {
                let obj = new SecurityPolicy();
                obj.deserialize(params.SecurityGroupPolicySet[z]);
                this.SecurityGroupPolicySet.push(obj);
            }
        }

    }
}

/**
 * DescribeNamespaces请求参数结构体
 * @class
 */
class DescribeNamespacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 指定命名空间，不填写默认查询所有命名空间
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 每页个数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 页偏移
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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeImageLifecycleGlobalPersonal请求参数结构体
 * @class
 */
class DescribeImageLifecycleGlobalPersonalRequest extends  AbstractModel {
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
 * DeleteSecurityPolicy请求参数结构体
 * @class
 */
class DeleteSecurityPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 白名单Id
         * @type {number || null}
         */
        this.PolicyIndex = null;

        /**
         * 白名单版本
         * @type {string || null}
         */
        this.PolicyVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.PolicyIndex = 'PolicyIndex' in params ? params.PolicyIndex : null;
        this.PolicyVersion = 'PolicyVersion' in params ? params.PolicyVersion : null;

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
         * 企业版实例类型（basic 基础版；standard 标准版；premium 高级版）
         * @type {string || null}
         */
        this.RegistryType = null;

        /**
         * 云标签描述
         * @type {TagSpecification || null}
         */
        this.TagSpecification = null;

        /**
         * 实例计费类型，0表示按量计费，1表示预付费，默认为按量计费
         * @type {number || null}
         */
        this.RegistryChargeType = null;

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

        if (params.TagSpecification) {
            let obj = new TagSpecification();
            obj.deserialize(params.TagSpecification)
            this.TagSpecification = obj;
        }
        this.RegistryChargeType = 'RegistryChargeType' in params ? params.RegistryChargeType : null;

    }
}

/**
 * DescribeInstanceToken请求参数结构体
 * @class
 */
class DescribeInstanceTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 分页单页数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移量
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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * CreateNamespace请求参数结构体
 * @class
 */
class CreateNamespaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 命名空间的名称（长度2-30个字符，只能包含小写字母、数字及分隔符("."、"_"、"-")，且不能以分隔符开头、结尾或连续）
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 是否公开，true为公开，fale为私有
         * @type {boolean || null}
         */
        this.IsPublic = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.IsPublic = 'IsPublic' in params ? params.IsPublic : null;

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

        /**
         * 实例内部访问地址
         * @type {string || null}
         */
        this.InternalEndpoint = null;

        /**
         * 实例云标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TagSpecification || null}
         */
        this.TagSpecification = null;

        /**
         * 实例过期时间（预付费）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpiredAt = null;

        /**
         * 实例付费类型，0表示后付费，1表示预付费
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PayMod = null;

        /**
         * 预付费续费标识，0表示手动续费，1表示自动续费，2不续费并且不通知
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RenewFlag = null;

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
        this.InternalEndpoint = 'InternalEndpoint' in params ? params.InternalEndpoint : null;

        if (params.TagSpecification) {
            let obj = new TagSpecification();
            obj.deserialize(params.TagSpecification)
            this.TagSpecification = obj;
        }
        this.ExpiredAt = 'ExpiredAt' in params ? params.ExpiredAt : null;
        this.PayMod = 'PayMod' in params ? params.PayMod : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;

    }
}

/**
 * DescribeChartDownloadInfo请求参数结构体
 * @class
 */
class DescribeChartDownloadInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 命名空间
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * Chart包的名称
         * @type {string || null}
         */
        this.ChartName = null;

        /**
         * Chart包的版本
         * @type {string || null}
         */
        this.ChartVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.ChartName = 'ChartName' in params ? params.ChartName : null;
        this.ChartVersion = 'ChartVersion' in params ? params.ChartVersion : null;

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
         * 验证个人版仓库是否存在返回信息
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
 * DescribeExternalEndpointStatus返回参数结构体
 * @class
 */
class DescribeExternalEndpointStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开启公网访问状态，开启中（Opening）、已开启（Opened）、关闭（Closed）
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckInstance返回参数结构体
 * @class
 */
class CheckInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检查结果，true为合法，false为非法
         * @type {boolean || null}
         */
        this.IsValidated = null;

        /**
         * 实例所在的RegionId
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsValidated = 'IsValidated' in params ? params.IsValidated : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * CreateInternalEndpointDns请求参数结构体
 * @class
 */
class CreateInternalEndpointDnsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * tcr实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 私有网络id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * tcr内网访问链路ip
         * @type {string || null}
         */
        this.EniLBIp = null;

        /**
         * true：为默认域名，公网域名一致
false: 使用vpc域名
默认为vpc域名
         * @type {boolean || null}
         */
        this.UsePublicDomain = null;

        /**
         * 解析地域，需要保证和vpc处于同一地域，如果不填则默认为主实例地域
         * @type {string || null}
         */
        this.RegionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.EniLBIp = 'EniLBIp' in params ? params.EniLBIp : null;
        this.UsePublicDomain = 'UsePublicDomain' in params ? params.UsePublicDomain : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;

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
 * DescribeImmutableTagRules请求参数结构体
 * @class
 */
class DescribeImmutableTagRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 Id
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
 * 版本保留规则执行
 * @class
 */
class RetentionExecution extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行Id
         * @type {number || null}
         */
        this.ExecutionId = null;

        /**
         * 所属规则id
         * @type {number || null}
         */
        this.RetentionId = null;

        /**
         * 执行的开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 执行的结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 执行的状态，Failed, Succeed, Stopped, InProgress
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
        this.ExecutionId = 'ExecutionId' in params ? params.ExecutionId : null;
        this.RetentionId = 'RetentionId' in params ? params.RetentionId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * ManageReplication返回参数结构体
 * @class
 */
class ManageReplicationResponse extends  AbstractModel {
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
 * DescribeReplicationInstanceCreateTasks请求参数结构体
 * @class
 */
class DescribeReplicationInstanceCreateTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 同步实例Id，见实例返回列表中的同步实例ID
         * @type {string || null}
         */
        this.ReplicationRegistryId = null;

        /**
         * 同步实例的地域ID，见实例返回列表中地域ID
         * @type {number || null}
         */
        this.ReplicationRegionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReplicationRegistryId = 'ReplicationRegistryId' in params ? params.ReplicationRegistryId : null;
        this.ReplicationRegionId = 'ReplicationRegionId' in params ? params.ReplicationRegionId : null;

    }
}

/**
 * ModifyWebhookTrigger返回参数结构体
 * @class
 */
class ModifyWebhookTriggerResponse extends  AbstractModel {
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
 * ManageImageLifecycleGlobalPersonal请求参数结构体
 * @class
 */
class ManageImageLifecycleGlobalPersonalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * global_keep_last_days:全局保留最近几天的数据;global_keep_last_nums:全局保留最近多少个
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Val = 'Val' in params ? params.Val : null;

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
 * ModifySecurityPolicy返回参数结构体
 * @class
 */
class ModifySecurityPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
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
 * DeleteInstance请求参数结构体
 * @class
 */
class DeleteInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 是否删除存储桶，默认为false
         * @type {boolean || null}
         */
        this.DeleteBucket = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.DeleteBucket = 'DeleteBucket' in params ? params.DeleteBucket : null;

    }
}

/**
 * DescribeImageManifests返回参数结构体
 * @class
 */
class DescribeImageManifestsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像的Manifest信息
         * @type {string || null}
         */
        this.Manifest = null;

        /**
         * 镜像的配置信息
         * @type {string || null}
         */
        this.Config = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Manifest = 'Manifest' in params ? params.Manifest : null;
        this.Config = 'Config' in params ? params.Config : null;
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
 * 镜像 tag 不可变规则
 * @class
 */
class ImmutableTagRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库匹配规则
         * @type {string || null}
         */
        this.RepositoryPattern = null;

        /**
         * Tag 匹配规则
         * @type {string || null}
         */
        this.TagPattern = null;

        /**
         * repoMatches或repoExcludes
         * @type {string || null}
         */
        this.RepositoryDecoration = null;

        /**
         * matches或excludes
         * @type {string || null}
         */
        this.TagDecoration = null;

        /**
         * 禁用规则
         * @type {boolean || null}
         */
        this.Disabled = null;

        /**
         * 规则 Id
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * 命名空间
         * @type {string || null}
         */
        this.NsName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RepositoryPattern = 'RepositoryPattern' in params ? params.RepositoryPattern : null;
        this.TagPattern = 'TagPattern' in params ? params.TagPattern : null;
        this.RepositoryDecoration = 'RepositoryDecoration' in params ? params.RepositoryDecoration : null;
        this.TagDecoration = 'TagDecoration' in params ? params.TagDecoration : null;
        this.Disabled = 'Disabled' in params ? params.Disabled : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.NsName = 'NsName' in params ? params.NsName : null;

    }
}

/**
 * Header KV
 * @class
 */
class Header extends  AbstractModel {
    constructor(){
        super();

        /**
         * Header Key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Header Values
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * 版本保留策略
 * @class
 */
class RetentionPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 版本保留策略Id
         * @type {number || null}
         */
        this.RetentionId = null;

        /**
         * 命名空间的名称
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 规则列表
         * @type {Array.<RetentionRule> || null}
         */
        this.RetentionRuleList = null;

        /**
         * 定期执行方式
         * @type {string || null}
         */
        this.CronSetting = null;

        /**
         * 是否启用规则
         * @type {boolean || null}
         */
        this.Disabled = null;

        /**
         * 基于当前时间根据cronSetting后下一次任务要执行的时间，仅做参考使用
         * @type {string || null}
         */
        this.NextExecutionTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RetentionId = 'RetentionId' in params ? params.RetentionId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;

        if (params.RetentionRuleList) {
            this.RetentionRuleList = new Array();
            for (let z in params.RetentionRuleList) {
                let obj = new RetentionRule();
                obj.deserialize(params.RetentionRuleList[z]);
                this.RetentionRuleList.push(obj);
            }
        }
        this.CronSetting = 'CronSetting' in params ? params.CronSetting : null;
        this.Disabled = 'Disabled' in params ? params.Disabled : null;
        this.NextExecutionTime = 'NextExecutionTime' in params ? params.NextExecutionTime : null;

    }
}

/**
 * CreateSecurityPolicy请求参数结构体
 * @class
 */
class CreateSecurityPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 192.168.0.0/24
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * 备注
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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DeleteImage请求参数结构体
 * @class
 */
class DeleteImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 镜像仓库名称
         * @type {string || null}
         */
        this.RepositoryName = null;

        /**
         * 镜像版本
         * @type {string || null}
         */
        this.ImageVersion = null;

        /**
         * 命名空间名称
         * @type {string || null}
         */
        this.NamespaceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.RepositoryName = 'RepositoryName' in params ? params.RepositoryName : null;
        this.ImageVersion = 'ImageVersion' in params ? params.ImageVersion : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;

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
 * DeleteMultipleSecurityPolicy返回参数结构体
 * @class
 */
class DeleteMultipleSecurityPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
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
 * ManageInternalEndpoint返回参数结构体
 * @class
 */
class ManageInternalEndpointResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
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
 * CreateTagRetentionExecution返回参数结构体
 * @class
 */
class CreateTagRetentionExecutionResponse extends  AbstractModel {
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
 * CheckInstanceName返回参数结构体
 * @class
 */
class CheckInstanceNameResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检查结果，true为合法，false为非法
         * @type {boolean || null}
         */
        this.IsValidated = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsValidated = 'IsValidated' in params ? params.IsValidated : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ManageImageLifecycleGlobalPersonal返回参数结构体
 * @class
 */
class ManageImageLifecycleGlobalPersonalResponse extends  AbstractModel {
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
 * DescribeTagRetentionRules返回参数结构体
 * @class
 */
class DescribeTagRetentionRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 版本保留策略列表
         * @type {Array.<RetentionPolicy> || null}
         */
        this.RetentionPolicyList = null;

        /**
         * 版本保留策略总数
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

        if (params.RetentionPolicyList) {
            this.RetentionPolicyList = new Array();
            for (let z in params.RetentionPolicyList) {
                let obj = new RetentionPolicy();
                obj.deserialize(params.RetentionPolicyList[z]);
                this.RetentionPolicyList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
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
 * ManageExternalEndpoint返回参数结构体
 * @class
 */
class ManageExternalEndpointResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
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
 * DescribeImmutableTagRules返回参数结构体
 * @class
 */
class DescribeImmutableTagRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ImmutableTagRule> || null}
         */
        this.Rules = null;

        /**
         * 未创建规则的命名空间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.EmptyNs = null;

        /**
         * 规则总量
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

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new ImmutableTagRule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.EmptyNs = 'EmptyNs' in params ? params.EmptyNs : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 触发器名称，必填参数
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
 * CreateReplicationInstance返回参数结构体
 * @class
 */
class CreateReplicationInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业版复制实例Id
         * @type {string || null}
         */
        this.ReplicationRegistryId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReplicationRegistryId = 'ReplicationRegistryId' in params ? params.ReplicationRegistryId : null;
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

        /**
         * 访问凭证类型，longterm 为长期访问凭证，temp 为临时访问凭证，默认是临时访问凭证，有效期1小时
         * @type {string || null}
         */
        this.TokenType = null;

        /**
         * 长期访问凭证描述信息
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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.TokenType = 'TokenType' in params ? params.TokenType : null;
        this.Desc = 'Desc' in params ? params.Desc : null;

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
 * 跨主账号实例同步参数
 * @class
 */
class PeerReplicationOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待同步实例的uin
         * @type {string || null}
         */
        this.PeerRegistryUin = null;

        /**
         * 待同步实例的访问永久Token
         * @type {string || null}
         */
        this.PeerRegistryToken = null;

        /**
         * 是否开启跨主账号实例同步
         * @type {boolean || null}
         */
        this.EnablePeerReplication = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PeerRegistryUin = 'PeerRegistryUin' in params ? params.PeerRegistryUin : null;
        this.PeerRegistryToken = 'PeerRegistryToken' in params ? params.PeerRegistryToken : null;
        this.EnablePeerReplication = 'EnablePeerReplication' in params ? params.EnablePeerReplication : null;

    }
}

/**
 * DescribeSecurityPolicies请求参数结构体
 * @class
 */
class DescribeSecurityPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例的Id
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
 * ModifyInstance返回参数结构体
 * @class
 */
class ModifyInstanceResponse extends  AbstractModel {
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
 * 企业版复制实例
 * @class
 */
class ReplicationRegistry extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主实例ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 复制实例ID
         * @type {string || null}
         */
        this.ReplicationRegistryId = null;

        /**
         * 复制实例的地域ID
         * @type {number || null}
         */
        this.ReplicationRegionId = null;

        /**
         * 复制实例的地域名称
         * @type {string || null}
         */
        this.ReplicationRegionName = null;

        /**
         * 复制实例的状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedAt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.ReplicationRegistryId = 'ReplicationRegistryId' in params ? params.ReplicationRegistryId : null;
        this.ReplicationRegionId = 'ReplicationRegionId' in params ? params.ReplicationRegionId : null;
        this.ReplicationRegionName = 'ReplicationRegionName' in params ? params.ReplicationRegionName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;

    }
}

/**
 * DescribeInternalEndpoints请求参数结构体
 * @class
 */
class DescribeInternalEndpointsRequest extends  AbstractModel {
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
 * ValidateNamespaceExistPersonal返回参数结构体
 * @class
 */
class ValidateNamespaceExistPersonalResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验证命名空间是否存在返回信息
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
 * CheckInstance请求参数结构体
 * @class
 */
class CheckInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待检测的实例Id
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
 * CreateRepository请求参数结构体
 * @class
 */
class CreateRepositoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 命名空间名称
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 仓库名称
         * @type {string || null}
         */
        this.RepositoryName = null;

        /**
         * 仓库简短描述
         * @type {string || null}
         */
        this.BriefDescription = null;

        /**
         * 仓库详细描述
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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.RepositoryName = 'RepositoryName' in params ? params.RepositoryName : null;
        this.BriefDescription = 'BriefDescription' in params ? params.BriefDescription : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DeleteImage返回参数结构体
 * @class
 */
class DeleteImageResponse extends  AbstractModel {
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
 * DescribeWebhookTrigger请求参数结构体
 * @class
 */
class DescribeWebhookTriggerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 分页单页数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移量
         * @type {number || null}
         */
        this.Offset = null;

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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * DeleteNamespace请求参数结构体
 * @class
 */
class DeleteNamespaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 命名空间的名称
         * @type {string || null}
         */
        this.NamespaceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;

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
 * DescribeImages请求参数结构体
 * @class
 */
class DescribeImagesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 命名空间名称
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 镜像仓库名称
         * @type {string || null}
         */
        this.RepositoryName = null;

        /**
         * 指定镜像版本进行查找，当前为模糊搜索
         * @type {string || null}
         */
        this.ImageVersion = null;

        /**
         * 每页个数，用于分页，默认20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 页数，默认值为1
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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.RepositoryName = 'RepositoryName' in params ? params.RepositoryName : null;
        this.ImageVersion = 'ImageVersion' in params ? params.ImageVersion : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * ModifyTagRetentionRule返回参数结构体
 * @class
 */
class ModifyTagRetentionRuleResponse extends  AbstractModel {
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
 * DescribeTagRetentionExecution请求参数结构体
 * @class
 */
class DescribeTagRetentionExecutionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主实例iD
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 规则Id
         * @type {number || null}
         */
        this.RetentionId = null;

        /**
         * 分页PageSize
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页Page
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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.RetentionId = 'RetentionId' in params ? params.RetentionId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * CreateRepository返回参数结构体
 * @class
 */
class CreateRepositoryResponse extends  AbstractModel {
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
 * DescribeTagRetentionRules请求参数结构体
 * @class
 */
class DescribeTagRetentionRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主实例iD
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 命名空间的名称
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 分页PageSize
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页Page
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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * CreateImmutableTagRules返回参数结构体
 * @class
 */
class CreateImmutableTagRulesResponse extends  AbstractModel {
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
 * DescribeInstanceToken返回参数结构体
 * @class
 */
class DescribeInstanceTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 长期访问凭证总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 长期访问凭证列表
         * @type {Array.<TcrInstanceToken> || null}
         */
        this.Tokens = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Tokens) {
            this.Tokens = new Array();
            for (let z in params.Tokens) {
                let obj = new TcrInstanceToken();
                obj.deserialize(params.Tokens[z]);
                this.Tokens.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeTagRetentionExecution返回参数结构体
 * @class
 */
class DescribeTagRetentionExecutionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 版本保留执行记录列表
         * @type {Array.<RetentionExecution> || null}
         */
        this.RetentionExecutionList = null;

        /**
         * 版本保留执行记录总数
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

        if (params.RetentionExecutionList) {
            this.RetentionExecutionList = new Array();
            for (let z in params.RetentionExecutionList) {
                let obj = new RetentionExecution();
                obj.deserialize(params.RetentionExecutionList[z]);
                this.RetentionExecutionList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DeleteImmutableTagRules请求参数结构体
 * @class
 */
class DeleteImmutableTagRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 Id
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 命名空间
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 规则 Id
         * @type {number || null}
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
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * CreateWebhookTrigger返回参数结构体
 * @class
 */
class CreateWebhookTriggerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新建的触发器
         * @type {WebhookTrigger || null}
         */
        this.Trigger = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Trigger) {
            let obj = new WebhookTrigger();
            obj.deserialize(params.Trigger)
            this.Trigger = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 同步规则过滤器
 * @class
 */
class ReplicationFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 类型（name、tag和resource）
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 默认为空
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DeleteTagRetentionRule请求参数结构体
 * @class
 */
class DeleteTagRetentionRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主实例iD
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 版本保留规则的Id
         * @type {number || null}
         */
        this.RetentionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.RetentionId = 'RetentionId' in params ? params.RetentionId : null;

    }
}

/**
 * Tcr镜像仓库信息
 * @class
 */
class TcrRepositoryInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 仓库名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 命名空间名称
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * 是否公开
         * @type {boolean || null}
         */
        this.Public = null;

        /**
         * 仓库详细描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 简单描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BriefDescription = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.Public = 'Public' in params ? params.Public : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.BriefDescription = 'BriefDescription' in params ? params.BriefDescription : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 实例登录令牌
 * @class
 */
class TcrInstanceToken extends  AbstractModel {
    constructor(){
        super();

        /**
         * 令牌ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 令牌描述
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 令牌所属实例ID
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 令牌启用状态
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * 令牌创建时间
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 令牌过期时间戳
         * @type {number || null}
         */
        this.ExpiredAt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.ExpiredAt = 'ExpiredAt' in params ? params.ExpiredAt : null;

    }
}

/**
 * DeleteRepository请求参数结构体
 * @class
 */
class DeleteRepositoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 命名空间的名称
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 镜像仓库的名称
         * @type {string || null}
         */
        this.RepositoryName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.RepositoryName = 'RepositoryName' in params ? params.RepositoryName : null;

    }
}

/**
 * CreateInternalEndpointDns返回参数结构体
 * @class
 */
class CreateInternalEndpointDnsResponse extends  AbstractModel {
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
 * CreateTagRetentionExecution请求参数结构体
 * @class
 */
class CreateTagRetentionExecutionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主实例iD
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * 版本保留规则Id
         * @type {number || null}
         */
        this.RetentionId = null;

        /**
         * 是否模拟执行，默认值为false，即非模拟执行
         * @type {boolean || null}
         */
        this.DryRun = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.RetentionId = 'RetentionId' in params ? params.RetentionId : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;

    }
}

/**
 * 同步日志
 * @class
 */
class ReplicationLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * 源资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 目的资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Destination = null;

        /**
         * 同步状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Source = 'Source' in params ? params.Source : null;
        this.Destination = 'Destination' in params ? params.Destination : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

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
 * ManageInternalEndpoint请求参数结构体
 * @class
 */
class ManageInternalEndpointRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.RegistryId = null;

        /**
         * Create/Delete
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 需要接入的用户vpcid
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 需要接入的用户子网id
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 请求的地域ID，用于实例复制地域
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 请求的地域名称，用于实例复制地域
         * @type {string || null}
         */
        this.RegionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistryId = 'RegistryId' in params ? params.RegistryId : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;

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
 * DeleteInternalEndpointDns返回参数结构体
 * @class
 */
class DeleteInternalEndpointDnsResponse extends  AbstractModel {
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
    DuplicateImagePersonalRequest: DuplicateImagePersonalRequest,
    ManageExternalEndpointRequest: ManageExternalEndpointRequest,
    DescribeImagePersonalResponse: DescribeImagePersonalResponse,
    DescribeUserQuotaPersonalRequest: DescribeUserQuotaPersonalRequest,
    WebhookTarget: WebhookTarget,
    DescribeReplicationInstancesResponse: DescribeReplicationInstancesResponse,
    DescribeReplicationInstanceCreateTasksResponse: DescribeReplicationInstanceCreateTasksResponse,
    WebhookTriggerLog: WebhookTriggerLog,
    AccessVpc: AccessVpc,
    ModifyTagRetentionRuleRequest: ModifyTagRetentionRuleRequest,
    ModifyRepositoryResponse: ModifyRepositoryResponse,
    TriggerInvokePara: TriggerInvokePara,
    DescribeNamespacesResponse: DescribeNamespacesResponse,
    TriggerLogResp: TriggerLogResp,
    DownloadHelmChartRequest: DownloadHelmChartRequest,
    RetentionRule: RetentionRule,
    CreateInstanceResponse: CreateInstanceResponse,
    DeleteInstanceTokenRequest: DeleteInstanceTokenRequest,
    TaskDetail: TaskDetail,
    ModifyRepositoryRequest: ModifyRepositoryRequest,
    RegistryCondition: RegistryCondition,
    DescribeInternalEndpointDnsStatusRequest: DescribeInternalEndpointDnsStatusRequest,
    CreateApplicationTriggerPersonalRequest: CreateApplicationTriggerPersonalRequest,
    AutoDelStrategyInfo: AutoDelStrategyInfo,
    DeleteInternalEndpointDnsRequest: DeleteInternalEndpointDnsRequest,
    ValidateNamespaceExistPersonalRequest: ValidateNamespaceExistPersonalRequest,
    ModifyInstanceRequest: ModifyInstanceRequest,
    RenewInstanceResponse: RenewInstanceResponse,
    CreateImmutableTagRulesRequest: CreateImmutableTagRulesRequest,
    DescribeRepositoriesResponse: DescribeRepositoriesResponse,
    VpcAndDomainInfo: VpcAndDomainInfo,
    DeleteInstanceTokenResponse: DeleteInstanceTokenResponse,
    DescribeInstancesResponse: DescribeInstancesResponse,
    CreateReplicationInstanceRequest: CreateReplicationInstanceRequest,
    ModifyInstanceTokenResponse: ModifyInstanceTokenResponse,
    DescribeApplicationTriggerPersonalRequest: DescribeApplicationTriggerPersonalRequest,
    FavorResp: FavorResp,
    DeleteNamespacePersonalRequest: DeleteNamespacePersonalRequest,
    NamespaceInfo: NamespaceInfo,
    CreateMultipleSecurityPolicyResponse: CreateMultipleSecurityPolicyResponse,
    CreateTagRetentionRuleResponse: CreateTagRetentionRuleResponse,
    Limit: Limit,
    DescribeChartDownloadInfoResponse: DescribeChartDownloadInfoResponse,
    DescribeExternalEndpointStatusRequest: DescribeExternalEndpointStatusRequest,
    DeleteRepositoryResponse: DeleteRepositoryResponse,
    DeleteImagePersonalResponse: DeleteImagePersonalResponse,
    DescribeWebhookTriggerLogResponse: DescribeWebhookTriggerLogResponse,
    DownloadHelmChartResponse: DownloadHelmChartResponse,
    ManageReplicationRequest: ManageReplicationRequest,
    DeleteWebhookTriggerResponse: DeleteWebhookTriggerResponse,
    DeleteImageLifecycleGlobalPersonalResponse: DeleteImageLifecycleGlobalPersonalResponse,
    ModifySecurityPolicyRequest: ModifySecurityPolicyRequest,
    DescribeReplicationInstanceSyncStatusResponse: DescribeReplicationInstanceSyncStatusResponse,
    ModifyImmutableTagRulesResponse: ModifyImmutableTagRulesResponse,
    Tag: Tag,
    DupImageTagResp: DupImageTagResp,
    DeleteApplicationTriggerPersonalResponse: DeleteApplicationTriggerPersonalResponse,
    DescribeRepositoryFilterPersonalRequest: DescribeRepositoryFilterPersonalRequest,
    DescribeTagRetentionExecutionTaskResponse: DescribeTagRetentionExecutionTaskResponse,
    DescribeInternalEndpointsResponse: DescribeInternalEndpointsResponse,
    DeleteImmutableTagRulesResponse: DeleteImmutableTagRulesResponse,
    DescribeRepositoryPersonalRequest: DescribeRepositoryPersonalRequest,
    AutoDelStrategyInfoResp: AutoDelStrategyInfoResp,
    TriggerResp: TriggerResp,
    DeleteApplicationTriggerPersonalRequest: DeleteApplicationTriggerPersonalRequest,
    SearchUserRepositoryResp: SearchUserRepositoryResp,
    CreateTagRetentionRuleRequest: CreateTagRetentionRuleRequest,
    DuplicateImagePersonalResponse: DuplicateImagePersonalResponse,
    DescribeImageLifecyclePersonalResponse: DescribeImageLifecyclePersonalResponse,
    DescribeInstanceStatusResponse: DescribeInstanceStatusResponse,
    ModifyInstanceTokenRequest: ModifyInstanceTokenRequest,
    DeleteImageLifecyclePersonalResponse: DeleteImageLifecyclePersonalResponse,
    CreateNamespaceResponse: CreateNamespaceResponse,
    ModifyImmutableTagRulesRequest: ModifyImmutableTagRulesRequest,
    DescribeRepositoryOwnerPersonalResponse: DescribeRepositoryOwnerPersonalResponse,
    VpcPrivateDomainStatus: VpcPrivateDomainStatus,
    DescribeSecurityPoliciesResponse: DescribeSecurityPoliciesResponse,
    DescribeReplicationInstancesRequest: DescribeReplicationInstancesRequest,
    CreateImageLifecyclePersonalResponse: CreateImageLifecyclePersonalResponse,
    RepoIsExistResp: RepoIsExistResp,
    TcrImageInfo: TcrImageInfo,
    DescribeImageLifecycleGlobalPersonalResponse: DescribeImageLifecycleGlobalPersonalResponse,
    CreateNamespacePersonalResponse: CreateNamespacePersonalResponse,
    DescribeReplicationInstanceSyncStatusRequest: DescribeReplicationInstanceSyncStatusRequest,
    DeleteInstanceResponse: DeleteInstanceResponse,
    DeleteImageLifecycleGlobalPersonalRequest: DeleteImageLifecycleGlobalPersonalRequest,
    DescribeInstanceStatusRequest: DescribeInstanceStatusRequest,
    ModifyWebhookTriggerRequest: ModifyWebhookTriggerRequest,
    CheckInstanceNameRequest: CheckInstanceNameRequest,
    DeleteNamespaceResponse: DeleteNamespaceResponse,
    TagInfoResp: TagInfoResp,
    Favors: Favors,
    CreateWebhookTriggerRequest: CreateWebhookTriggerRequest,
    DescribeRepositoryPersonalResponse: DescribeRepositoryPersonalResponse,
    CreateSecurityPolicyResponse: CreateSecurityPolicyResponse,
    DescribeRepositoriesRequest: DescribeRepositoriesRequest,
    CreateUserPersonalRequest: CreateUserPersonalRequest,
    ModifyNamespaceResponse: ModifyNamespaceResponse,
    ValidateRepositoryExistPersonalRequest: ValidateRepositoryExistPersonalRequest,
    ModifyUserPasswordPersonalResponse: ModifyUserPasswordPersonalResponse,
    TcrNamespaceInfo: TcrNamespaceInfo,
    DescribeImagesResponse: DescribeImagesResponse,
    ModifyRepositoryInfoPersonalResponse: ModifyRepositoryInfoPersonalResponse,
    DescribeWebhookTriggerLogRequest: DescribeWebhookTriggerLogRequest,
    RenewInstanceRequest: RenewInstanceRequest,
    DescribeImageFilterPersonalRequest: DescribeImageFilterPersonalRequest,
    DescribeTagRetentionExecutionTaskRequest: DescribeTagRetentionExecutionTaskRequest,
    ReplicationRule: ReplicationRule,
    RepoInfoResp: RepoInfoResp,
    DeleteTagRetentionRuleResponse: DeleteTagRetentionRuleResponse,
    DeleteMultipleSecurityPolicyRequest: DeleteMultipleSecurityPolicyRequest,
    DeleteSecurityPolicyResponse: DeleteSecurityPolicyResponse,
    DescribeInternalEndpointDnsStatusResponse: DescribeInternalEndpointDnsStatusResponse,
    WebhookTrigger: WebhookTrigger,
    RegistryStatus: RegistryStatus,
    SecurityPolicy: SecurityPolicy,
    DescribeNamespacePersonalRequest: DescribeNamespacePersonalRequest,
    DeleteRepositoryPersonalResponse: DeleteRepositoryPersonalResponse,
    CreateInstanceTokenResponse: CreateInstanceTokenResponse,
    DescribeApplicationTriggerLogPersonalResp: DescribeApplicationTriggerLogPersonalResp,
    DeleteImagePersonalRequest: DeleteImagePersonalRequest,
    DescribeApplicationTriggerPersonalResponse: DescribeApplicationTriggerPersonalResponse,
    RetentionTask: RetentionTask,
    NamespaceInfoResp: NamespaceInfoResp,
    CreateRepositoryPersonalRequest: CreateRepositoryPersonalRequest,
    DescribeImageFilterPersonalResponse: DescribeImageFilterPersonalResponse,
    CreateImageLifecyclePersonalRequest: CreateImageLifecyclePersonalRequest,
    DeleteWebhookTriggerRequest: DeleteWebhookTriggerRequest,
    TriggerInvokeResult: TriggerInvokeResult,
    CreateUserPersonalResponse: CreateUserPersonalResponse,
    DescribeWebhookTriggerResponse: DescribeWebhookTriggerResponse,
    DescribeImageManifestsRequest: DescribeImageManifestsRequest,
    RegistryChargePrepaid: RegistryChargePrepaid,
    ModifyNamespaceRequest: ModifyNamespaceRequest,
    ModifyRepositoryAccessPersonalRequest: ModifyRepositoryAccessPersonalRequest,
    TagSpecification: TagSpecification,
    CreateMultipleSecurityPolicyRequest: CreateMultipleSecurityPolicyRequest,
    DescribeNamespacesRequest: DescribeNamespacesRequest,
    DescribeImageLifecycleGlobalPersonalRequest: DescribeImageLifecycleGlobalPersonalRequest,
    DescribeImageLifecyclePersonalRequest: DescribeImageLifecyclePersonalRequest,
    DeleteSecurityPolicyRequest: DeleteSecurityPolicyRequest,
    RepositoryInfoResp: RepositoryInfoResp,
    CreateInstanceRequest: CreateInstanceRequest,
    DescribeInstanceTokenRequest: DescribeInstanceTokenRequest,
    BatchDeleteRepositoryPersonalResponse: BatchDeleteRepositoryPersonalResponse,
    CreateNamespaceRequest: CreateNamespaceRequest,
    BatchDeleteRepositoryPersonalRequest: BatchDeleteRepositoryPersonalRequest,
    Registry: Registry,
    DescribeChartDownloadInfoRequest: DescribeChartDownloadInfoRequest,
    ValidateRepositoryExistPersonalResponse: ValidateRepositoryExistPersonalResponse,
    DescribeExternalEndpointStatusResponse: DescribeExternalEndpointStatusResponse,
    CheckInstanceResponse: CheckInstanceResponse,
    NamespaceIsExistsResp: NamespaceIsExistsResp,
    DescribeInstancesRequest: DescribeInstancesRequest,
    CreateInternalEndpointDnsRequest: CreateInternalEndpointDnsRequest,
    TriggerInvokeCondition: TriggerInvokeCondition,
    DescribeImmutableTagRulesRequest: DescribeImmutableTagRulesRequest,
    Filter: Filter,
    RetentionExecution: RetentionExecution,
    ManageReplicationResponse: ManageReplicationResponse,
    DescribeReplicationInstanceCreateTasksRequest: DescribeReplicationInstanceCreateTasksRequest,
    ModifyWebhookTriggerResponse: ModifyWebhookTriggerResponse,
    RepoInfo: RepoInfo,
    ManageImageLifecycleGlobalPersonalRequest: ManageImageLifecycleGlobalPersonalRequest,
    DescribeUserQuotaPersonalResponse: DescribeUserQuotaPersonalResponse,
    DescribeImagePersonalRequest: DescribeImagePersonalRequest,
    ModifySecurityPolicyResponse: ModifySecurityPolicyResponse,
    DeleteImageLifecyclePersonalRequest: DeleteImageLifecyclePersonalRequest,
    ModifyApplicationTriggerPersonalResponse: ModifyApplicationTriggerPersonalResponse,
    DeleteInstanceRequest: DeleteInstanceRequest,
    DescribeImageManifestsResponse: DescribeImageManifestsResponse,
    DescribeNamespacePersonalResponse: DescribeNamespacePersonalResponse,
    DeleteNamespacePersonalResponse: DeleteNamespacePersonalResponse,
    ImmutableTagRule: ImmutableTagRule,
    Header: Header,
    RetentionPolicy: RetentionPolicy,
    CreateSecurityPolicyRequest: CreateSecurityPolicyRequest,
    DeleteImageRequest: DeleteImageRequest,
    DescribeRepositoryOwnerPersonalRequest: DescribeRepositoryOwnerPersonalRequest,
    ModifyRepositoryInfoPersonalRequest: ModifyRepositoryInfoPersonalRequest,
    DescribeApplicationTriggerLogPersonalRequest: DescribeApplicationTriggerLogPersonalRequest,
    DescribeFavorRepositoryPersonalRequest: DescribeFavorRepositoryPersonalRequest,
    DescribeApplicationTriggerLogPersonalResponse: DescribeApplicationTriggerLogPersonalResponse,
    DeleteMultipleSecurityPolicyResponse: DeleteMultipleSecurityPolicyResponse,
    ManageInternalEndpointResponse: ManageInternalEndpointResponse,
    CreateRepositoryPersonalResponse: CreateRepositoryPersonalResponse,
    DescribeRepositoryFilterPersonalResponse: DescribeRepositoryFilterPersonalResponse,
    CreateTagRetentionExecutionResponse: CreateTagRetentionExecutionResponse,
    DescribeFavorRepositoryPersonalResponse: DescribeFavorRepositoryPersonalResponse,
    CheckInstanceNameResponse: CheckInstanceNameResponse,
    ManageImageLifecycleGlobalPersonalResponse: ManageImageLifecycleGlobalPersonalResponse,
    DescribeTagRetentionRulesResponse: DescribeTagRetentionRulesResponse,
    ModifyRepositoryAccessPersonalResponse: ModifyRepositoryAccessPersonalResponse,
    ManageExternalEndpointResponse: ManageExternalEndpointResponse,
    DescribeImmutableTagRulesResponse: DescribeImmutableTagRulesResponse,
    ModifyApplicationTriggerPersonalRequest: ModifyApplicationTriggerPersonalRequest,
    CreateReplicationInstanceResponse: CreateReplicationInstanceResponse,
    CreateInstanceTokenRequest: CreateInstanceTokenRequest,
    ModifyUserPasswordPersonalRequest: ModifyUserPasswordPersonalRequest,
    PeerReplicationOption: PeerReplicationOption,
    DescribeSecurityPoliciesRequest: DescribeSecurityPoliciesRequest,
    ModifyInstanceResponse: ModifyInstanceResponse,
    ReplicationRegistry: ReplicationRegistry,
    DescribeInternalEndpointsRequest: DescribeInternalEndpointsRequest,
    ValidateNamespaceExistPersonalResponse: ValidateNamespaceExistPersonalResponse,
    CheckInstanceRequest: CheckInstanceRequest,
    DescribeApplicationTriggerPersonalResp: DescribeApplicationTriggerPersonalResp,
    TagInfo: TagInfo,
    CreateRepositoryRequest: CreateRepositoryRequest,
    DeleteImageResponse: DeleteImageResponse,
    DescribeWebhookTriggerRequest: DescribeWebhookTriggerRequest,
    DeleteNamespaceRequest: DeleteNamespaceRequest,
    BatchDeleteImagePersonalRequest: BatchDeleteImagePersonalRequest,
    DescribeImagesRequest: DescribeImagesRequest,
    ModifyTagRetentionRuleResponse: ModifyTagRetentionRuleResponse,
    DescribeTagRetentionExecutionRequest: DescribeTagRetentionExecutionRequest,
    CreateRepositoryResponse: CreateRepositoryResponse,
    DescribeTagRetentionRulesRequest: DescribeTagRetentionRulesRequest,
    RespLimit: RespLimit,
    CreateImmutableTagRulesResponse: CreateImmutableTagRulesResponse,
    DescribeInstanceTokenResponse: DescribeInstanceTokenResponse,
    SameImagesResp: SameImagesResp,
    DescribeTagRetentionExecutionResponse: DescribeTagRetentionExecutionResponse,
    CreateNamespacePersonalRequest: CreateNamespacePersonalRequest,
    DeleteImmutableTagRulesRequest: DeleteImmutableTagRulesRequest,
    CreateWebhookTriggerResponse: CreateWebhookTriggerResponse,
    ReplicationFilter: ReplicationFilter,
    DeleteTagRetentionRuleRequest: DeleteTagRetentionRuleRequest,
    TcrRepositoryInfo: TcrRepositoryInfo,
    TcrInstanceToken: TcrInstanceToken,
    DeleteRepositoryRequest: DeleteRepositoryRequest,
    CreateInternalEndpointDnsResponse: CreateInternalEndpointDnsResponse,
    CreateTagRetentionExecutionRequest: CreateTagRetentionExecutionRequest,
    ReplicationLog: ReplicationLog,
    CreateApplicationTriggerPersonalResponse: CreateApplicationTriggerPersonalResponse,
    ManageInternalEndpointRequest: ManageInternalEndpointRequest,
    BatchDeleteImagePersonalResponse: BatchDeleteImagePersonalResponse,
    DeleteInternalEndpointDnsResponse: DeleteInternalEndpointDnsResponse,
    DeleteRepositoryPersonalRequest: DeleteRepositoryPersonalRequest,

}
