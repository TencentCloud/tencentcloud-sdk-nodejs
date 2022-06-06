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
 * DescribeApplicationYaml返回参数结构体
 * @class
 */
class DescribeApplicationYamlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * base64 后的yaml
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Yaml = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Yaml = 'Yaml' in params ? params.Yaml : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 操作日志状态查询条件
 * @class
 */
class OperationLogsCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
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
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * RedeployEdgeUnitApplication返回参数结构体
 * @class
 */
class RedeployEdgeUnitApplicationResponse extends  AbstractModel {
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
 * CreateEdgeUnitCloud返回参数结构体
 * @class
 */
class CreateEdgeUnitCloudResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * tke集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * IECP集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyEdgeUnitApplicationBasicInfo请求参数结构体
 * @class
 */
class ModifyEdgeUnitApplicationBasicInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用基本信息
         * @type {ApplicationBasicInfo || null}
         */
        this.BasicInfo = null;

        /**
         * 单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * 应用ID
         * @type {number || null}
         */
        this.ApplicationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BasicInfo) {
            let obj = new ApplicationBasicInfo();
            obj.deserialize(params.BasicInfo)
            this.BasicInfo = obj;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

    }
}

/**
 * CreateEdgeNodeGroup请求参数结构体
 * @class
 */
class CreateEdgeNodeGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IECP边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * NodeGroup名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 命名空间，不填默认为default
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 模版ID数组
         * @type {Array.<number> || null}
         */
        this.NodeUnitTemplateIDs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.NodeUnitTemplateIDs = 'NodeUnitTemplateIDs' in params ? params.NodeUnitTemplateIDs : null;

    }
}

/**
 * CreateEdgeUnitApplicationVisualization请求参数结构体
 * @class
 */
class CreateEdgeUnitApplicationVisualizationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 基本信息
         * @type {ApplicationBasicInfo || null}
         */
        this.BasicInfo = null;

        /**
         * 基本配置
         * @type {ApplicationBasicConfig || null}
         */
        this.BasicConfig = null;

        /**
         * 单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * 卷列表
         * @type {Array.<Volume> || null}
         */
        this.Volumes = null;

        /**
         * 服务配置
         * @type {Service || null}
         */
        this.Service = null;

        /**
         * 模版ID
         * @type {number || null}
         */
        this.TemplateID = null;

        /**
         * Job配置
         * @type {Job || null}
         */
        this.Job = null;

        /**
         * CronJob配置
         * @type {CronJob || null}
         */
        this.CronJob = null;

        /**
         * 重新运行策略
         * @type {string || null}
         */
        this.RestartPolicy = null;

        /**
         * 镜像拉取密钥
         * @type {Array.<string> || null}
         */
        this.ImagePullSecrets = null;

        /**
         * HPA配置
         * @type {HorizontalPodAutoscaler || null}
         */
        this.HorizontalPodAutoscaler = null;

        /**
         * 初始化容器列表
         * @type {Array.<Container> || null}
         */
        this.InitContainers = null;

        /**
         * 容器列表
         * @type {Array.<Container> || null}
         */
        this.Containers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BasicInfo) {
            let obj = new ApplicationBasicInfo();
            obj.deserialize(params.BasicInfo)
            this.BasicInfo = obj;
        }

        if (params.BasicConfig) {
            let obj = new ApplicationBasicConfig();
            obj.deserialize(params.BasicConfig)
            this.BasicConfig = obj;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;

        if (params.Volumes) {
            this.Volumes = new Array();
            for (let z in params.Volumes) {
                let obj = new Volume();
                obj.deserialize(params.Volumes[z]);
                this.Volumes.push(obj);
            }
        }

        if (params.Service) {
            let obj = new Service();
            obj.deserialize(params.Service)
            this.Service = obj;
        }
        this.TemplateID = 'TemplateID' in params ? params.TemplateID : null;

        if (params.Job) {
            let obj = new Job();
            obj.deserialize(params.Job)
            this.Job = obj;
        }

        if (params.CronJob) {
            let obj = new CronJob();
            obj.deserialize(params.CronJob)
            this.CronJob = obj;
        }
        this.RestartPolicy = 'RestartPolicy' in params ? params.RestartPolicy : null;
        this.ImagePullSecrets = 'ImagePullSecrets' in params ? params.ImagePullSecrets : null;

        if (params.HorizontalPodAutoscaler) {
            let obj = new HorizontalPodAutoscaler();
            obj.deserialize(params.HorizontalPodAutoscaler)
            this.HorizontalPodAutoscaler = obj;
        }

        if (params.InitContainers) {
            this.InitContainers = new Array();
            for (let z in params.InitContainers) {
                let obj = new Container();
                obj.deserialize(params.InitContainers[z]);
                this.InitContainers.push(obj);
            }
        }

        if (params.Containers) {
            this.Containers = new Array();
            for (let z in params.Containers) {
                let obj = new Container();
                obj.deserialize(params.Containers[z]);
                this.Containers.push(obj);
            }
        }

    }
}

/**
 * GridPod信息
 * @class
 */
class GridPodInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pod名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 命名空间
         * @type {string || null}
         */
        this.NameSpace = null;

        /**
         * 状态(Pending｜Running｜Succeeded｜Failed｜Unknown)
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 节点名
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * 节点IP
         * @type {string || null}
         */
        this.NodeIP = null;

        /**
         * Pod的IP
         * @type {string || null}
         */
        this.PodIP = null;

        /**
         * 启动时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 运行时长（秒）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RunSec = null;

        /**
         * 重启次数
         * @type {number || null}
         */
        this.RestartCount = null;

        /**
         * 集群名称ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.NameSpace = 'NameSpace' in params ? params.NameSpace : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.NodeIP = 'NodeIP' in params ? params.NodeIP : null;
        this.PodIP = 'PodIP' in params ? params.PodIP : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.RunSec = 'RunSec' in params ? params.RunSec : null;
        this.RestartCount = 'RestartCount' in params ? params.RestartCount : null;
        this.ClusterID = 'ClusterID' in params ? params.ClusterID : null;

    }
}

/**
 * CreateSecret请求参数结构体
 * @class
 */
class CreateSecretRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单元ID
         * @type {number || null}
         */
        this.EdgeUnitID = null;

        /**
         * secret名
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * 命名空间（默认:default）
         * @type {string || null}
         */
        this.SecretNamespace = null;

        /**
         * secret类型(取值范围:DockerConfigJson,Opaque 默认Opaque)
         * @type {string || null}
         */
        this.SecretType = null;

        /**
         * DockerConfig的序列化base64编码后的字符串
         * @type {string || null}
         */
        this.DockerConfigJson = null;

        /**
         * Opaque类型的Secret内容
         * @type {Array.<KeyValueObj> || null}
         */
        this.CloudData = null;

        /**
         * DockerConfig配置
         * @type {DockerConfig || null}
         */
        this.DockerConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitID = 'EdgeUnitID' in params ? params.EdgeUnitID : null;
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.SecretNamespace = 'SecretNamespace' in params ? params.SecretNamespace : null;
        this.SecretType = 'SecretType' in params ? params.SecretType : null;
        this.DockerConfigJson = 'DockerConfigJson' in params ? params.DockerConfigJson : null;

        if (params.CloudData) {
            this.CloudData = new Array();
            for (let z in params.CloudData) {
                let obj = new KeyValueObj();
                obj.deserialize(params.CloudData[z]);
                this.CloudData.push(obj);
            }
        }

        if (params.DockerConfig) {
            let obj = new DockerConfig();
            obj.deserialize(params.DockerConfig)
            this.DockerConfig = obj;
        }

    }
}

/**
 * DescribeEdgeUnitApplicationYaml请求参数结构体
 * @class
 */
class DescribeEdgeUnitApplicationYamlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * 应用ID
         * @type {number || null}
         */
        this.ApplicationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

    }
}

/**
 * CreateEdgeUnitApplicationVisualization返回参数结构体
 * @class
 */
class CreateEdgeUnitApplicationVisualizationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ApplicationId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateEdgeNodeBatch返回参数结构体
 * @class
 */
class CreateEdgeNodeBatchResponse extends  AbstractModel {
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
 * DescribeNamespaces返回参数结构体
 * @class
 */
class DescribeNamespacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间信息列表
         * @type {Array.<NamespaceInfo> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new NamespaceInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSecret返回参数结构体
 * @class
 */
class DescribeSecretResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Secret名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 命名空间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * secret的yaml格式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Yaml = null;

        /**
         * secret的json格式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Json = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Yaml = 'Yaml' in params ? params.Yaml : null;
        this.Json = 'Json' in params ? params.Json : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * NodeUnit模版信息
 * @class
 */
class NodeUnitTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * NodeUnit模版ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * NodeUnit模版名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 包含节点列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NodeSimpleInfo> || null}
         */
        this.NodeList = null;

        /**
         * NodeGroup列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.NodeGroups = null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.NodeList) {
            this.NodeList = new Array();
            for (let z in params.NodeList) {
                let obj = new NodeSimpleInfo();
                obj.deserialize(params.NodeList[z]);
                this.NodeList.push(obj);
            }
        }
        this.NodeGroups = 'NodeGroups' in params ? params.NodeGroups : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * DescribeSecretYamlError返回参数结构体
 * @class
 */
class DescribeSecretYamlErrorResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 校验是通过
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.CheckPass = null;

        /**
         * 错误类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrType = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CheckPass = 'CheckPass' in params ? params.CheckPass : null;
        this.ErrType = 'ErrType' in params ? params.ErrType : null;
        this.ErrInfo = 'ErrInfo' in params ? params.ErrInfo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyEdgeUnitDeployGridItem请求参数结构体
 * @class
 */
class ModifyEdgeUnitDeployGridItemRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IECP边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * Grid名称
         * @type {string || null}
         */
        this.GridItemName = null;

        /**
         * 负载类型（StatefulSetGrid｜DeploymentGrid）
         * @type {string || null}
         */
        this.WorkloadKind = null;

        /**
         * 副本数
         * @type {number || null}
         */
        this.Replicas = null;

        /**
         * 命名空间，默认default
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
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.GridItemName = 'GridItemName' in params ? params.GridItemName : null;
        this.WorkloadKind = 'WorkloadKind' in params ? params.WorkloadKind : null;
        this.Replicas = 'Replicas' in params ? params.Replicas : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * 指定NodeGroup中查询NodeUnit模版
 * @class
 */
class NodeGroupNodeUnitTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模版ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 包含节点列表
         * @type {Array.<NodeSimpleInfo> || null}
         */
        this.NodeList = null;

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
         * 是否关联
         * @type {boolean || null}
         */
        this.Relation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.NodeList) {
            this.NodeList = new Array();
            for (let z in params.NodeList) {
                let obj = new NodeSimpleInfo();
                obj.deserialize(params.NodeList[z]);
                this.NodeList.push(obj);
            }
        }
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Relation = 'Relation' in params ? params.Relation : null;

    }
}

/**
 * DescribeEdgeUnitMonitorStatus请求参数结构体
 * @class
 */
class DescribeEdgeUnitMonitorStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IECP边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;

    }
}

/**
 * GetMarketComponent返回参数结构体
 * @class
 */
class GetMarketComponentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组件ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 组件名称
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 发行组织
         * @type {string || null}
         */
        this.Author = null;

        /**
         * 发布时间
         * @type {string || null}
         */
        this.ReleaseTime = null;

        /**
         * 组件简介
         * @type {string || null}
         */
        this.Outline = null;

        /**
         * 详细介绍链接
         * @type {string || null}
         */
        this.Detail = null;

        /**
         * 图标连接
         * @type {string || null}
         */
        this.Icon = null;

        /**
         * 组件版本
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 组件可视化配置
         * @type {string || null}
         */
        this.WorkloadVisualConfig = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.Author = 'Author' in params ? params.Author : null;
        this.ReleaseTime = 'ReleaseTime' in params ? params.ReleaseTime : null;
        this.Outline = 'Outline' in params ? params.Outline : null;
        this.Detail = 'Detail' in params ? params.Detail : null;
        this.Icon = 'Icon' in params ? params.Icon : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.WorkloadVisualConfig = 'WorkloadVisualConfig' in params ? params.WorkloadVisualConfig : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateApplicationVisualization请求参数结构体
 * @class
 */
class CreateApplicationVisualizationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 基本信息
         * @type {ApplicationBasicInfo || null}
         */
        this.BasicInfo = null;

        /**
         * 基本配置
         * @type {ApplicationBasicConfig || null}
         */
        this.BasicConfig = null;

        /**
         * 卷列表
         * @type {Array.<Volume> || null}
         */
        this.Volumes = null;

        /**
         * 服务配置
         * @type {Service || null}
         */
        this.Service = null;

        /**
         * Job配置
         * @type {Job || null}
         */
        this.Job = null;

        /**
         * CronJob配置
         * @type {CronJob || null}
         */
        this.CronJob = null;

        /**
         * 重新运行策略
         * @type {string || null}
         */
        this.RestartPolicy = null;

        /**
         * 镜像拉取密钥
         * @type {Array.<string> || null}
         */
        this.ImagePullSecrets = null;

        /**
         * HPA配置
         * @type {HorizontalPodAutoscaler || null}
         */
        this.HorizontalPodAutoscaler = null;

        /**
         * 初始化容器列表
         * @type {Array.<Container> || null}
         */
        this.InitContainers = null;

        /**
         * 容器列表
         * @type {Array.<Container> || null}
         */
        this.Containers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BasicInfo) {
            let obj = new ApplicationBasicInfo();
            obj.deserialize(params.BasicInfo)
            this.BasicInfo = obj;
        }

        if (params.BasicConfig) {
            let obj = new ApplicationBasicConfig();
            obj.deserialize(params.BasicConfig)
            this.BasicConfig = obj;
        }

        if (params.Volumes) {
            this.Volumes = new Array();
            for (let z in params.Volumes) {
                let obj = new Volume();
                obj.deserialize(params.Volumes[z]);
                this.Volumes.push(obj);
            }
        }

        if (params.Service) {
            let obj = new Service();
            obj.deserialize(params.Service)
            this.Service = obj;
        }

        if (params.Job) {
            let obj = new Job();
            obj.deserialize(params.Job)
            this.Job = obj;
        }

        if (params.CronJob) {
            let obj = new CronJob();
            obj.deserialize(params.CronJob)
            this.CronJob = obj;
        }
        this.RestartPolicy = 'RestartPolicy' in params ? params.RestartPolicy : null;
        this.ImagePullSecrets = 'ImagePullSecrets' in params ? params.ImagePullSecrets : null;

        if (params.HorizontalPodAutoscaler) {
            let obj = new HorizontalPodAutoscaler();
            obj.deserialize(params.HorizontalPodAutoscaler)
            this.HorizontalPodAutoscaler = obj;
        }

        if (params.InitContainers) {
            this.InitContainers = new Array();
            for (let z in params.InitContainers) {
                let obj = new Container();
                obj.deserialize(params.InitContainers[z]);
                this.InitContainers.push(obj);
            }
        }

        if (params.Containers) {
            this.Containers = new Array();
            for (let z in params.Containers) {
                let obj = new Container();
                obj.deserialize(params.Containers[z]);
                this.Containers.push(obj);
            }
        }

    }
}

/**
 * NodeUnit中边缘节点信息
 * @class
 */
class NodeUnitNodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 节点状态  NodeStatusHealthy (健康)/NodeStatusAbnormal (异常)/NodeStatusOffline (下线)/NodeStatusNotActivated (未激活
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 节点名称
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * 内网节点IP
         * @type {string || null}
         */
        this.InternalIP = null;

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
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.InternalIP = 'InternalIP' in params ? params.InternalIP : null;

    }
}

/**
 * DeleteNodeUnit返回参数结构体
 * @class
 */
class DeleteNodeUnitResponse extends  AbstractModel {
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
 * NFS挂载卷
 * @class
 */
class VolumeNFS extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务地址
         * @type {string || null}
         */
        this.Server = null;

        /**
         * 对应服务器路径
         * @type {string || null}
         */
        this.ServerPath = null;

        /**
         * 对应本地路径
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
        this.Server = 'Server' in params ? params.Server : null;
        this.ServerPath = 'ServerPath' in params ? params.ServerPath : null;
        this.Path = 'Path' in params ? params.Path : null;

    }
}

/**
 * 服务配置
 * @class
 */
class Service extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 类型 (ClusterIP|NodePort)
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 端口配置
         * @type {Array.<PortConfig> || null}
         */
        this.Ports = null;

        /**
         * 标签
         * @type {Array.<Label> || null}
         */
        this.Labels = null;

        /**
         * 命名空间默认default
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 服务IP
         * @type {string || null}
         */
        this.ClusterIP = null;

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

        if (params.Ports) {
            this.Ports = new Array();
            for (let z in params.Ports) {
                let obj = new PortConfig();
                obj.deserialize(params.Ports[z]);
                this.Ports.push(obj);
            }
        }

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new Label();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.ClusterIP = 'ClusterIP' in params ? params.ClusterIP : null;

    }
}

/**
 * DescribeEdgeUnitApplications返回参数结构体
 * @class
 */
class DescribeEdgeUnitApplicationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 应用列表
         * @type {Array.<ApplicationStatusInfo> || null}
         */
        this.ApplicationSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ApplicationSet) {
            this.ApplicationSet = new Array();
            for (let z in params.ApplicationSet) {
                let obj = new ApplicationStatusInfo();
                obj.deserialize(params.ApplicationSet[z]);
                this.ApplicationSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeNodeUnitTemplateOnNodeGroup返回参数结构体
 * @class
 */
class DescribeNodeUnitTemplateOnNodeGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * NodeUnit模板
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NodeGroupNodeUnitTemplateInfo> || null}
         */
        this.NodeUnitTemplates = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.NodeUnitTemplates) {
            this.NodeUnitTemplates = new Array();
            for (let z in params.NodeUnitTemplates) {
                let obj = new NodeGroupNodeUnitTemplateInfo();
                obj.deserialize(params.NodeUnitTemplates[z]);
                this.NodeUnitTemplates.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 应用状态
 * @class
 */
class ApplicationStatusInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 应用版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 应用状态(1:待部署 2:部署中 3:运行中 4:待更新 5:更新中 6:待删除 7:删除中 8:已删除
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
         * 管理地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ManageUrl = null;

        /**
         * 负载类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WorkloadKind = null;

        /**
         * 应用部署模式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ApplicationDeployMode || null}
         */
        this.DeployMode = null;

        /**
         * 期望Pod数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Replicas = null;

        /**
         * 运行Pod数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AvailableReplicas = null;

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
        this.Version = 'Version' in params ? params.Version : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.ManageUrl = 'ManageUrl' in params ? params.ManageUrl : null;
        this.WorkloadKind = 'WorkloadKind' in params ? params.WorkloadKind : null;

        if (params.DeployMode) {
            let obj = new ApplicationDeployMode();
            obj.deserialize(params.DeployMode)
            this.DeployMode = obj;
        }
        this.Replicas = 'Replicas' in params ? params.Replicas : null;
        this.AvailableReplicas = 'AvailableReplicas' in params ? params.AvailableReplicas : null;

    }
}

/**
 * DescribeEdgeUnitGridEvents返回参数结构体
 * @class
 */
class DescribeEdgeUnitGridEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GridEventInfo> || null}
         */
        this.EventSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EventSet) {
            this.EventSet = new Array();
            for (let z in params.EventSet) {
                let obj = new GridEventInfo();
                obj.deserialize(params.EventSet[z]);
                this.EventSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 子设备列表信息
 * @class
 */
class IotDevicesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备id
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 设备状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 设备打开状态
         * @type {boolean || null}
         */
        this.Disabled = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 设备创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 最后在线时间
         * @type {string || null}
         */
        this.LastOnlineTime = null;

        /**
         * 设备是否绑定到节点
         * @type {boolean || null}
         */
        this.IsBound = null;

        /**
         * 设备版本
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 无
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 无
         * @type {number || null}
         */
        this.UnitID = null;

        /**
         * 无
         * @type {string || null}
         */
        this.UnitName = null;

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
        this.Disabled = 'Disabled' in params ? params.Disabled : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.LastOnlineTime = 'LastOnlineTime' in params ? params.LastOnlineTime : null;
        this.IsBound = 'IsBound' in params ? params.IsBound : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.UnitID = 'UnitID' in params ? params.UnitID : null;
        this.UnitName = 'UnitName' in params ? params.UnitName : null;

    }
}

/**
 * DescribeEdgeUnitApplicationYamlError返回参数结构体
 * @class
 */
class DescribeEdgeUnitApplicationYamlErrorResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否通过
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.CheckPass = null;

        /**
         * 错误类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrType = null;

        /**
         * 错误信息
         * @type {string || null}
         */
        this.ErrInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CheckPass = 'CheckPass' in params ? params.CheckPass : null;
        this.ErrType = 'ErrType' in params ? params.ErrType : null;
        this.ErrInfo = 'ErrInfo' in params ? params.ErrInfo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteEdgeUnitCloud返回参数结构体
 * @class
 */
class DeleteEdgeUnitCloudResponse extends  AbstractModel {
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
 * ModifyConfigMap请求参数结构体
 * @class
 */
class ModifyConfigMapRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单元ID
         * @type {number || null}
         */
        this.EdgeUnitID = null;

        /**
         * ConfigMap名称
         * @type {string || null}
         */
        this.ConfigMapName = null;

        /**
         * Yaml配置, base64之后的串
         * @type {string || null}
         */
        this.Yaml = null;

        /**
         * ConfigMap命名空间
         * @type {string || null}
         */
        this.ConfigMapNamespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitID = 'EdgeUnitID' in params ? params.EdgeUnitID : null;
        this.ConfigMapName = 'ConfigMapName' in params ? params.ConfigMapName : null;
        this.Yaml = 'Yaml' in params ? params.Yaml : null;
        this.ConfigMapNamespace = 'ConfigMapNamespace' in params ? params.ConfigMapNamespace : null;

    }
}

/**
 * 应用基本配置
 * @class
 */
class ApplicationBasicConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 工作负载类型
         * @type {string || null}
         */
        this.WorkflowKind = null;

        /**
         * 标签信息
         * @type {Array.<Label> || null}
         */
        this.Labels = null;

        /**
         * Grid唯一Key
         * @type {string || null}
         */
        this.GridUniqKey = null;

        /**
         * NodeSelector标签
         * @type {Array.<Label> || null}
         */
        this.NodeSelector = null;

        /**
         * 实例数
         * @type {number || null}
         */
        this.Replicas = null;

        /**
         * 可用实例数
         * @type {number || null}
         */
        this.AvailableReplicas = null;

        /**
         * 是否开启service环境变量注入pod
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.EnableServiceLinks = null;

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
        this.WorkflowKind = 'WorkflowKind' in params ? params.WorkflowKind : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new Label();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }
        this.GridUniqKey = 'GridUniqKey' in params ? params.GridUniqKey : null;

        if (params.NodeSelector) {
            this.NodeSelector = new Array();
            for (let z in params.NodeSelector) {
                let obj = new Label();
                obj.deserialize(params.NodeSelector[z]);
                this.NodeSelector.push(obj);
            }
        }
        this.Replicas = 'Replicas' in params ? params.Replicas : null;
        this.AvailableReplicas = 'AvailableReplicas' in params ? params.AvailableReplicas : null;
        this.EnableServiceLinks = 'EnableServiceLinks' in params ? params.EnableServiceLinks : null;

    }
}

/**
 * 数据挂载
 * @class
 */
class VolumeMount extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 挂载路径
         * @type {string || null}
         */
        this.MountPath = null;

        /**
         * 子路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubPath = null;

        /**
         * 是否只读
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.ReadOnly = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.MountPath = 'MountPath' in params ? params.MountPath : null;
        this.SubPath = 'SubPath' in params ? params.SubPath : null;
        this.ReadOnly = 'ReadOnly' in params ? params.ReadOnly : null;

    }
}

/**
 * ModifyApplicationBasicInfo返回参数结构体
 * @class
 */
class ModifyApplicationBasicInfoResponse extends  AbstractModel {
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
 * DeleteEdgeUnitDeployGridItem返回参数结构体
 * @class
 */
class DeleteEdgeUnitDeployGridItemResponse extends  AbstractModel {
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
 * DescribeApplicationVisualization请求参数结构体
 * @class
 */
class DescribeApplicationVisualizationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用模板ID
         * @type {number || null}
         */
        this.ApplicationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

    }
}

/**
 * DescribeEdgeSnNodes返回参数结构体
 * @class
 */
class DescribeEdgeSnNodesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 满足条件的总条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 节点详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<EdgeDracoNodeInfo> || null}
         */
        this.NodeSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.NodeSet) {
            this.NodeSet = new Array();
            for (let z in params.NodeSet) {
                let obj = new EdgeDracoNodeInfo();
                obj.deserialize(params.NodeSet[z]);
                this.NodeSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEdgeUnitApplications请求参数结构体
 * @class
 */
class DescribeEdgeUnitApplicationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * 翻页偏移
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 翻页大小
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 名称模糊匹配
         * @type {string || null}
         */
        this.NamePattern = null;

        /**
         * 字段排序 (Sort.Filed为:StartTime）
         * @type {Array.<FieldSort> || null}
         */
        this.Sort = null;

        /**
         * 命名空间过滤
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
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.NamePattern = 'NamePattern' in params ? params.NamePattern : null;

        if (params.Sort) {
            this.Sort = new Array();
            for (let z in params.Sort) {
                let obj = new FieldSort();
                obj.deserialize(params.Sort[z]);
                this.Sort.push(obj);
            }
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * DescribeEdgeUnitApplicationYaml返回参数结构体
 * @class
 */
class DescribeEdgeUnitApplicationYamlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Yaml配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Yaml = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Yaml = 'Yaml' in params ? params.Yaml : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeConfigMapYamlError返回参数结构体
 * @class
 */
class DescribeConfigMapYamlErrorResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 校验是通过
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.CheckPass = null;

        /**
         * 错误类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrType = null;

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CheckPass = 'CheckPass' in params ? params.CheckPass : null;
        this.ErrType = 'ErrType' in params ? params.ErrType : null;
        this.ErrInfo = 'ErrInfo' in params ? params.ErrInfo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeConfigMap返回参数结构体
 * @class
 */
class DescribeConfigMapResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 命名空间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * yaml配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Yaml = null;

        /**
         * 配置项的json格式(base64编码)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Json = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Yaml = 'Yaml' in params ? params.Yaml : null;
        this.Json = 'Json' in params ? params.Json : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetMarketComponentList请求参数结构体
 * @class
 */
class GetMarketComponentListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页偏移，从0开始
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 名称模糊筛选
         * @type {string || null}
         */
        this.Filter = null;

        /**
         * 以名称排序，ASC、DESC
         * @type {string || null}
         */
        this.Order = null;

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
        this.Filter = 'Filter' in params ? params.Filter : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * DescribeApplicationYaml请求参数结构体
 * @class
 */
class DescribeApplicationYamlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用模板ID
         * @type {number || null}
         */
        this.ApplicationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

    }
}

/**
 * ModifyApplicationVisualization请求参数结构体
 * @class
 */
class ModifyApplicationVisualizationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {number || null}
         */
        this.ApplicationId = null;

        /**
         * 应用配置
         * @type {ApplicationBasicConfig || null}
         */
        this.BasicConfig = null;

        /**
         * 卷配置
         * @type {Array.<Volume> || null}
         */
        this.Volumes = null;

        /**
         * 初始容器
         * @type {Array.<Container> || null}
         */
        this.InitContainers = null;

        /**
         * 容器配置
         * @type {Array.<Container> || null}
         */
        this.Containers = null;

        /**
         * 服务配置
         * @type {Service || null}
         */
        this.Service = null;

        /**
         * Job配置
         * @type {Job || null}
         */
        this.Job = null;

        /**
         * CronJob配置
         * @type {CronJob || null}
         */
        this.CronJob = null;

        /**
         * 重启策略
         * @type {string || null}
         */
        this.RestartPolicy = null;

        /**
         * 镜像拉取密钥
         * @type {Array.<string> || null}
         */
        this.ImagePullSecrets = null;

        /**
         * HPA配置
         * @type {HorizontalPodAutoscaler || null}
         */
        this.HorizontalPodAutoscaler = null;

        /**
         * 单个初始化容器
         * @type {Container || null}
         */
        this.InitContainer = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

        if (params.BasicConfig) {
            let obj = new ApplicationBasicConfig();
            obj.deserialize(params.BasicConfig)
            this.BasicConfig = obj;
        }

        if (params.Volumes) {
            this.Volumes = new Array();
            for (let z in params.Volumes) {
                let obj = new Volume();
                obj.deserialize(params.Volumes[z]);
                this.Volumes.push(obj);
            }
        }

        if (params.InitContainers) {
            this.InitContainers = new Array();
            for (let z in params.InitContainers) {
                let obj = new Container();
                obj.deserialize(params.InitContainers[z]);
                this.InitContainers.push(obj);
            }
        }

        if (params.Containers) {
            this.Containers = new Array();
            for (let z in params.Containers) {
                let obj = new Container();
                obj.deserialize(params.Containers[z]);
                this.Containers.push(obj);
            }
        }

        if (params.Service) {
            let obj = new Service();
            obj.deserialize(params.Service)
            this.Service = obj;
        }

        if (params.Job) {
            let obj = new Job();
            obj.deserialize(params.Job)
            this.Job = obj;
        }

        if (params.CronJob) {
            let obj = new CronJob();
            obj.deserialize(params.CronJob)
            this.CronJob = obj;
        }
        this.RestartPolicy = 'RestartPolicy' in params ? params.RestartPolicy : null;
        this.ImagePullSecrets = 'ImagePullSecrets' in params ? params.ImagePullSecrets : null;

        if (params.HorizontalPodAutoscaler) {
            let obj = new HorizontalPodAutoscaler();
            obj.deserialize(params.HorizontalPodAutoscaler)
            this.HorizontalPodAutoscaler = obj;
        }

        if (params.InitContainer) {
            let obj = new Container();
            obj.deserialize(params.InitContainer)
            this.InitContainer = obj;
        }

    }
}

/**
 * DescribeEdgeUnitNodeUnitTemplates请求参数结构体
 * @class
 */
class DescribeEdgeUnitNodeUnitTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IECP边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * 命名空间，默认为default
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 分页查询offset，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页查询limit，默认为20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 模糊匹配，精确匹配时失效
         * @type {string || null}
         */
        this.NameFilter = null;

        /**
         * 精确匹配
         * @type {string || null}
         */
        this.NameMatched = null;

        /**
         * 按时间排序顺序，默认为DESC
         * @type {string || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.NameFilter = 'NameFilter' in params ? params.NameFilter : null;
        this.NameMatched = 'NameMatched' in params ? params.NameMatched : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * DeleteEdgeUnitApplications请求参数结构体
 * @class
 */
class DeleteEdgeUnitApplicationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单元ID
         * @type {number || null}
         */
        this.EdgeUnitID = null;

        /**
         * 应用ID列表
         * @type {Array.<number> || null}
         */
        this.ApplicationIDs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitID = 'EdgeUnitID' in params ? params.EdgeUnitID : null;
        this.ApplicationIDs = 'ApplicationIDs' in params ? params.ApplicationIDs : null;

    }
}

/**
 * DeleteApplications请求参数结构体
 * @class
 */
class DeleteApplicationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用模板ID列表
         * @type {Array.<number> || null}
         */
        this.ApplicationIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationIds = 'ApplicationIds' in params ? params.ApplicationIds : null;

    }
}

/**
 * DescribeEdgeUnitApplicationPodContainers请求参数结构体
 * @class
 */
class DescribeEdgeUnitApplicationPodContainersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * 应用ID
         * @type {number || null}
         */
        this.ApplicationId = null;

        /**
         * Pod名
         * @type {string || null}
         */
        this.PodName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.PodName = 'PodName' in params ? params.PodName : null;

    }
}

/**
 * TCP探测配置
 * @class
 */
class TcpProbe extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * ConfigMap的key挂载到路径
 * @class
 */
class VolumeConfigMapKeyToPath extends  AbstractModel {
    constructor(){
        super();

        /**
         * 健名
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 对应本地路径
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 对应权限模式
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Mode = 'Mode' in params ? params.Mode : null;

    }
}

/**
 * DescribeDracoEdgeNodeInstaller返回参数结构体
 * @class
 */
class DescribeDracoEdgeNodeInstallerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 在线安装命名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OnlineInstallationCommand = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OnlineInstallationCommand = 'OnlineInstallationCommand' in params ? params.OnlineInstallationCommand : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyEdgeUnitCloudApi请求参数结构体
 * @class
 */
class ModifyEdgeUnitCloudApiRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * 边缘单元名称，64字符内
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 描述，200字符内
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 是否开启监控
         * @type {boolean || null}
         */
        this.OpenCloudMonitor = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.OpenCloudMonitor = 'OpenCloudMonitor' in params ? params.OpenCloudMonitor : null;

    }
}

/**
 * DescribeEdgeUnitDeployGridItem请求参数结构体
 * @class
 */
class DescribeEdgeUnitDeployGridItemRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * Grid名称
         * @type {string || null}
         */
        this.GridName = null;

        /**
         * 负载类型（StatefulSetGrid｜DeploymentGrid）
         * @type {string || null}
         */
        this.WorkloadKind = null;

        /**
         * 命名空间，默认default
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 排序，默认ASC
         * @type {string || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.GridName = 'GridName' in params ? params.GridName : null;
        this.WorkloadKind = 'WorkloadKind' in params ? params.WorkloadKind : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * ModifyEdgeUnit请求参数结构体
 * @class
 */
class ModifyEdgeUnitRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 边缘集群ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * 边缘集群名称，64字符以内
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 集群描述，200字符以内
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
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * 容器状态
 * @class
 */
class ContainerStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 容器ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ID = null;

        /**
         * 镜像
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 重启次数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RestartCount = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.RestartCount = 'RestartCount' in params ? params.RestartCount : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeEdgeUnitCloud返回参数结构体
 * @class
 */
class DescribeEdgeUnitCloudResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 边缘集群名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

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
         * 集群最后探活时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LiveTime = null;

        /**
         * 集群状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MasterStatus = null;

        /**
         * 版本号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.K8sVersion = null;

        /**
         * pod cidr
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PodCIDR = null;

        /**
         * service cidr
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceCIDR = null;

        /**
         * 集群内网访问地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.APIServerAddress = null;

        /**
         * 集群外网访问地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.APIServerExposeAddress = null;

        /**
         * 用户ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UID = null;

        /**
         * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UnitID = null;

        /**
         * 集群标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Cluster = null;

        /**
         * 节点统计
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EdgeUnitStatisticItem || null}
         */
        this.Node = null;

        /**
         * 工作负载统计
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EdgeUnitStatisticItem || null}
         */
        this.Workload = null;

        /**
         * Grid应用统计
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EdgeUnitStatisticItem || null}
         */
        this.Grid = null;

        /**
         * 设备统计
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EdgeUnitStatisticItem || null}
         */
        this.SubDevice = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.LiveTime = 'LiveTime' in params ? params.LiveTime : null;
        this.MasterStatus = 'MasterStatus' in params ? params.MasterStatus : null;
        this.K8sVersion = 'K8sVersion' in params ? params.K8sVersion : null;
        this.PodCIDR = 'PodCIDR' in params ? params.PodCIDR : null;
        this.ServiceCIDR = 'ServiceCIDR' in params ? params.ServiceCIDR : null;
        this.APIServerAddress = 'APIServerAddress' in params ? params.APIServerAddress : null;
        this.APIServerExposeAddress = 'APIServerExposeAddress' in params ? params.APIServerExposeAddress : null;
        this.UID = 'UID' in params ? params.UID : null;
        this.UnitID = 'UnitID' in params ? params.UnitID : null;
        this.Cluster = 'Cluster' in params ? params.Cluster : null;

        if (params.Node) {
            let obj = new EdgeUnitStatisticItem();
            obj.deserialize(params.Node)
            this.Node = obj;
        }

        if (params.Workload) {
            let obj = new EdgeUnitStatisticItem();
            obj.deserialize(params.Workload)
            this.Workload = obj;
        }

        if (params.Grid) {
            let obj = new EdgeUnitStatisticItem();
            obj.deserialize(params.Grid)
            this.Grid = obj;
        }

        if (params.SubDevice) {
            let obj = new EdgeUnitStatisticItem();
            obj.deserialize(params.SubDevice)
            this.SubDevice = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Pod状态信息
 * @class
 */
class PodStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 命名空间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NameSpace = null;

        /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * IP地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IP = null;

        /**
         * 启动时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 运行时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RunSec = null;

        /**
         * 重启次数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RestartCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.NameSpace = 'NameSpace' in params ? params.NameSpace : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.IP = 'IP' in params ? params.IP : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.RunSec = 'RunSec' in params ? params.RunSec : null;
        this.RestartCount = 'RestartCount' in params ? params.RestartCount : null;

    }
}

/**
 * RedeployEdgeUnitApplication请求参数结构体
 * @class
 */
class RedeployEdgeUnitApplicationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * 应用ID
         * @type {number || null}
         */
        this.ApplicationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

    }
}

/**
 * DescribeEdgeNodeRemarkList请求参数结构体
 * @class
 */
class DescribeEdgeNodeRemarkListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;

    }
}

/**
 * DeleteSecret返回参数结构体
 * @class
 */
class DeleteSecretResponse extends  AbstractModel {
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
 * DeleteConfigMap返回参数结构体
 * @class
 */
class DeleteConfigMapResponse extends  AbstractModel {
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
 * DescribeApplications返回参数结构体
 * @class
 */
class DescribeApplicationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 详细列表
         * @type {Array.<ApplicationTemplate> || null}
         */
        this.ApplicationSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ApplicationSet) {
            this.ApplicationSet = new Array();
            for (let z in params.ApplicationSet) {
                let obj = new ApplicationTemplate();
                obj.deserialize(params.ApplicationSet[z]);
                this.ApplicationSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteConfigMap请求参数结构体
 * @class
 */
class DeleteConfigMapRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单元ID
         * @type {number || null}
         */
        this.EdgeUnitID = null;

        /**
         * ConfigMap名
         * @type {string || null}
         */
        this.ConfigMapName = null;

        /**
         * ConfigMap命名空间，默认：default
         * @type {string || null}
         */
        this.ConfigMapNamespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitID = 'EdgeUnitID' in params ? params.EdgeUnitID : null;
        this.ConfigMapName = 'ConfigMapName' in params ? params.ConfigMapName : null;
        this.ConfigMapNamespace = 'ConfigMapNamespace' in params ? params.ConfigMapNamespace : null;

    }
}

/**
 * DescribeEdgeUnitDeployGridItem返回参数结构体
 * @class
 */
class DescribeEdgeUnitDeployGridItemResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Grid部署列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GridItemInfo> || null}
         */
        this.DeploySet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.DeploySet) {
            this.DeploySet = new Array();
            for (let z in params.DeploySet) {
                let obj = new GridItemInfo();
                obj.deserialize(params.DeploySet[z]);
                this.DeploySet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateMessageRoute请求参数结构体
 * @class
 */
class CreateMessageRouteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由名称
         * @type {string || null}
         */
        this.RouteName = null;

        /**
         * 路由备注
         * @type {string || null}
         */
        this.Descript = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteName = 'RouteName' in params ? params.RouteName : null;
        this.Descript = 'Descript' in params ? params.Descript : null;

    }
}

/**
 * DescribeEdgeUnitExtra请求参数结构体
 * @class
 */
class DescribeEdgeUnitExtraRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IECP边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;

    }
}

/**
 * CreateUpdateNodeUnit请求参数结构体
 * @class
 */
class CreateUpdateNodeUnitRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IECP边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * NodeUnit所属的NodeGroup名称
         * @type {string || null}
         */
        this.NodeGroupName = null;

        /**
         * 命名空间，默认为default
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * NodeUnit名称，通过模版创建可不填
         * @type {string || null}
         */
        this.NodeUnitName = null;

        /**
         * NodeUnit包含的节点列表，通过模版创建可不填
         * @type {Array.<string> || null}
         */
        this.Nodes = null;

        /**
         * NodeUnit模版ID列表
         * @type {Array.<number> || null}
         */
        this.NodeUnitTemplateIDs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.NodeGroupName = 'NodeGroupName' in params ? params.NodeGroupName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.NodeUnitName = 'NodeUnitName' in params ? params.NodeUnitName : null;
        this.Nodes = 'Nodes' in params ? params.Nodes : null;
        this.NodeUnitTemplateIDs = 'NodeUnitTemplateIDs' in params ? params.NodeUnitTemplateIDs : null;

    }
}

/**
 * DescribeIotDevice请求参数结构体
 * @class
 */
class DescribeIotDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备id，传0值表示此参数无效
         * @type {number || null}
         */
        this.DeviceId = null;

        /**
         * 无
         * @type {string || null}
         */
        this.ProductID = null;

        /**
         * 无
         * @type {string || null}
         */
        this.DeviceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.ProductID = 'ProductID' in params ? params.ProductID : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;

    }
}

/**
 * CreateConfigMap返回参数结构体
 * @class
 */
class CreateConfigMapResponse extends  AbstractModel {
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
 * DescribeEdgeUnitsCloud请求参数结构体
 * @class
 */
class DescribeEdgeUnitsCloudRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * limit值
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 集群名称模糊匹配
         * @type {string || null}
         */
        this.NamePattern = null;

        /**
         * 排序，ASC/DESC(默认)
         * @type {string || null}
         */
        this.Order = null;

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
        this.NamePattern = 'NamePattern' in params ? params.NamePattern : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * 应用模板列表详情
 * @class
 */
class ApplicationTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 模板名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 来源。1 自定义应用模板 ;  2 官方应用模板
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Source = null;

        /**
         * 应用类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WorkloadKind = null;

        /**
         * 管理地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ManageUrl = null;

        /**
         * 发布时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DistributeTime = null;

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
        this.Source = 'Source' in params ? params.Source : null;
        this.WorkloadKind = 'WorkloadKind' in params ? params.WorkloadKind : null;
        this.ManageUrl = 'ManageUrl' in params ? params.ManageUrl : null;
        this.DistributeTime = 'DistributeTime' in params ? params.DistributeTime : null;

    }
}

/**
 * 应用基本信息
 * @class
 */
class ApplicationBasicInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 管理URL地址
         * @type {string || null}
         */
        this.ManageUrl = null;

        /**
         * 描述信息
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 是否允许可视化修改
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.AllowVisualModify = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ManageUrl = 'ManageUrl' in params ? params.ManageUrl : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.AllowVisualModify = 'AllowVisualModify' in params ? params.AllowVisualModify : null;

    }
}

/**
 * DescribeEdgeDefaultVpc请求参数结构体
 * @class
 */
class DescribeEdgeDefaultVpcRequest extends  AbstractModel {
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
 * DescribeSecrets返回参数结构体
 * @class
 */
class DescribeSecretsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数目
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Secret列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SecretItem> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new SecretItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteEdgeNodeGroup请求参数结构体
 * @class
 */
class DeleteEdgeNodeGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IECP边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * NodeGroup名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 命名空间，默认为default
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
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * DescribeEdgeUnitApplicationYamlError请求参数结构体
 * @class
 */
class DescribeEdgeUnitApplicationYamlErrorRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Yaml配置
         * @type {string || null}
         */
        this.Yaml = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Yaml = 'Yaml' in params ? params.Yaml : null;

    }
}

/**
 * DescribeEdgeNodePods返回参数结构体
 * @class
 */
class DescribeEdgeNodePodsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pod列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<EdgeNodePodInfo> || null}
         */
        this.PodSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PodSet) {
            this.PodSet = new Array();
            for (let z in params.PodSet) {
                let obj = new EdgeNodePodInfo();
                obj.deserialize(params.PodSet[z]);
                this.PodSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEdgePod返回参数结构体
 * @class
 */
class DescribeEdgePodResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pod详情信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EdgeNodePodInfo || null}
         */
        this.Pod = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Pod) {
            let obj = new EdgeNodePodInfo();
            obj.deserialize(params.Pod)
            this.Pod = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateEdgeNodeUnitTemplate返回参数结构体
 * @class
 */
class CreateEdgeNodeUnitTemplateResponse extends  AbstractModel {
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
 * DescribeMonitorMetrics返回参数结构体
 * @class
 */
class DescribeMonitorMetricsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询监控指标结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MonitorMetricsColumn> || null}
         */
        this.Metrics = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Metrics) {
            this.Metrics = new Array();
            for (let z in params.Metrics) {
                let obj = new MonitorMetricsColumn();
                obj.deserialize(params.Metrics[z]);
                this.Metrics.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 环境变量
 * @class
 */
class Env extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 值
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 值引用
         * @type {EnvValueSelector || null}
         */
        this.ValueFrom = null;

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

        if (params.ValueFrom) {
            let obj = new EnvValueSelector();
            obj.deserialize(params.ValueFrom)
            this.ValueFrom = obj;
        }

    }
}

/**
 * DescribeConfigMaps返回参数结构体
 * @class
 */
class DescribeConfigMapsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ConfigMap列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ConfigMapBasicInfo> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ConfigMapBasicInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * NodeGroup信息
 * @class
 */
class NodeGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * NodeGroup名称
         * @type {string || null}
         */
        this.NodeGroupName = null;

        /**
         * DeploymentGrid数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GridDetail> || null}
         */
        this.DeploymentGridList = null;

        /**
         * StatefulSetGrid数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GridDetail> || null}
         */
        this.StatefulSetGridList = null;

        /**
         * 是否平台保护
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Protect = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.NodeGroupName = 'NodeGroupName' in params ? params.NodeGroupName : null;

        if (params.DeploymentGridList) {
            this.DeploymentGridList = new Array();
            for (let z in params.DeploymentGridList) {
                let obj = new GridDetail();
                obj.deserialize(params.DeploymentGridList[z]);
                this.DeploymentGridList.push(obj);
            }
        }

        if (params.StatefulSetGridList) {
            this.StatefulSetGridList = new Array();
            for (let z in params.StatefulSetGridList) {
                let obj = new GridDetail();
                obj.deserialize(params.StatefulSetGridList[z]);
                this.StatefulSetGridList.push(obj);
            }
        }
        this.Protect = 'Protect' in params ? params.Protect : null;

    }
}

/**
 * 操作日志
 * @class
 */
class OperationLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OperateTime = null;

        /**
         * 模块名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作信息
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 用户ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 状态: 1:成功 2:失败
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 操作用户ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OperatorUserID = null;

        /**
         * 操作动作
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Action = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OperateTime = 'OperateTime' in params ? params.OperateTime : null;
        this.Module = 'Module' in params ? params.Module : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OperatorUserID = 'OperatorUserID' in params ? params.OperatorUserID : null;
        this.Action = 'Action' in params ? params.Action : null;

    }
}

/**
 * GetMarketComponentList返回参数结构体
 * @class
 */
class GetMarketComponentListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组件列表
         * @type {Array.<MarketComponentInfo> || null}
         */
        this.ComponentList = null;

        /**
         * 组件总数
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

        if (params.ComponentList) {
            this.ComponentList = new Array();
            for (let z in params.ComponentList) {
                let obj = new MarketComponentInfo();
                obj.deserialize(params.ComponentList[z]);
                this.ComponentList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEdgeNodePodContainers返回参数结构体
 * @class
 */
class DescribeEdgeNodePodContainersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pod容器列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<EdgeNodePodContainerInfo> || null}
         */
        this.ContainerSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ContainerSet) {
            this.ContainerSet = new Array();
            for (let z in params.ContainerSet) {
                let obj = new EdgeNodePodContainerInfo();
                obj.deserialize(params.ContainerSet[z]);
                this.ContainerSet.push(obj);
            }
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
 * DeleteEdgeUnitDevices请求参数结构体
 * @class
 */
class DeleteEdgeUnitDevicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * 无
         * @type {Array.<DeleteEdgeUnitDevicesDevice> || null}
         */
        this.Devices = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;

        if (params.Devices) {
            this.Devices = new Array();
            for (let z in params.Devices) {
                let obj = new DeleteEdgeUnitDevicesDevice();
                obj.deserialize(params.Devices[z]);
                this.Devices.push(obj);
            }
        }

    }
}

/**
 * CronJob配置
 * @class
 */
class CronJob extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调度配置
         * @type {string || null}
         */
        this.Schedule = null;

        /**
         * 运行时间
         * @type {number || null}
         */
        this.StartingDeadlineSeconds = null;

        /**
         * job并行策略(Allow|Forbid|Replace)
         * @type {string || null}
         */
        this.ConcurrencyPolicy = null;

        /**
         * Job配置
         * @type {Job || null}
         */
        this.Job = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Schedule = 'Schedule' in params ? params.Schedule : null;
        this.StartingDeadlineSeconds = 'StartingDeadlineSeconds' in params ? params.StartingDeadlineSeconds : null;
        this.ConcurrencyPolicy = 'ConcurrencyPolicy' in params ? params.ConcurrencyPolicy : null;

        if (params.Job) {
            let obj = new Job();
            obj.deserialize(params.Job)
            this.Job = obj;
        }

    }
}

/**
 * DeleteEdgeUnitPod请求参数结构体
 * @class
 */
class DeleteEdgeUnitPodRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterID = null;

        /**
         * Pod名称
         * @type {string || null}
         */
        this.PodName = null;

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
        this.ClusterID = 'ClusterID' in params ? params.ClusterID : null;
        this.PodName = 'PodName' in params ? params.PodName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * CreateIotDevice请求参数结构体
 * @class
 */
class CreateIotDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 设备所属的产品id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 无
         * @type {number || null}
         */
        this.UnitID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.UnitID = 'UnitID' in params ? params.UnitID : null;

    }
}

/**
 * CreateSecret返回参数结构体
 * @class
 */
class CreateSecretResponse extends  AbstractModel {
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
 * DeleteEdgeNodeUnitTemplates请求参数结构体
 * @class
 */
class DeleteEdgeNodeUnitTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IECP边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * 删除的NodeUnit模板ID列表
         * @type {Array.<number> || null}
         */
        this.NodeUnitTemplateIDs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.NodeUnitTemplateIDs = 'NodeUnitTemplateIDs' in params ? params.NodeUnitTemplateIDs : null;

    }
}

/**
 * ModifyEdgeNodeLabels返回参数结构体
 * @class
 */
class ModifyEdgeNodeLabelsResponse extends  AbstractModel {
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
 * DescribeEdgeUnitNodeGroup请求参数结构体
 * @class
 */
class DescribeEdgeUnitNodeGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IECP边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * 命名空间，默认为default
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 分页offset，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页limit，默认为20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 模糊匹配参数，精确匹配时失效
         * @type {string || null}
         */
        this.NameFilter = null;

        /**
         * 精确匹配参数
         * @type {string || null}
         */
        this.NameMatched = null;

        /**
         * 按时间排序，ASC/DESC，默认为DESC
         * @type {string || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.NameFilter = 'NameFilter' in params ? params.NameFilter : null;
        this.NameMatched = 'NameMatched' in params ? params.NameMatched : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * 单元内的统计信息
 * @class
 */
class EdgeUnitStatisticItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 在线数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Online = null;

        /**
         * 异常数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Abnormal = null;

        /**
         * 离线数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Offline = null;

        /**
         * 未激活
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NotActive = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.Online = 'Online' in params ? params.Online : null;
        this.Abnormal = 'Abnormal' in params ? params.Abnormal : null;
        this.Offline = 'Offline' in params ? params.Offline : null;
        this.NotActive = 'NotActive' in params ? params.NotActive : null;

    }
}

/**
 * DescribeEdgeUnitApplicationPods请求参数结构体
 * @class
 */
class DescribeEdgeUnitApplicationPodsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * 应用ID
         * @type {number || null}
         */
        this.ApplicationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

    }
}

/**
 * Job配置
 * @class
 */
class Job extends  AbstractModel {
    constructor(){
        super();

        /**
         * 并发数
         * @type {number || null}
         */
        this.Parallelism = null;

        /**
         * 完成数
         * @type {number || null}
         */
        this.Completion = null;

        /**
         * 最大运行时间
         * @type {number || null}
         */
        this.ActiveDeadlineSeconds = null;

        /**
         * 失败前重试次数
         * @type {number || null}
         */
        this.BackOffLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Parallelism = 'Parallelism' in params ? params.Parallelism : null;
        this.Completion = 'Completion' in params ? params.Completion : null;
        this.ActiveDeadlineSeconds = 'ActiveDeadlineSeconds' in params ? params.ActiveDeadlineSeconds : null;
        this.BackOffLimit = 'BackOffLimit' in params ? params.BackOffLimit : null;

    }
}

/**
 * DescribeEdgeUnitApplicationLogs返回参数结构体
 * @class
 */
class DescribeEdgeUnitApplicationLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.LogSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogSet = 'LogSet' in params ? params.LogSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyEdgeUnitDeployGridItem返回参数结构体
 * @class
 */
class ModifyEdgeUnitDeployGridItemResponse extends  AbstractModel {
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
 * CreateEdgeNode请求参数结构体
 * @class
 */
class CreateEdgeNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * 节点名称
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
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * BuildMessageRoute返回参数结构体
 * @class
 */
class BuildMessageRouteResponse extends  AbstractModel {
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
 * DescribeEdgeUnitMonitorStatus返回参数结构体
 * @class
 */
class DescribeEdgeUnitMonitorStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监控状态描述：
"running" 单元监控正常运行
"deploying" 单元监控部署中
"norsc" 单元需要可用节点以部署监控
"abnormal" 单元监控异常
"none" 单元监控不可用
         * @type {string || null}
         */
        this.MonitorStatus = null;

        /**
         * 监控是否就绪
         * @type {boolean || null}
         */
        this.IsAvailable = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MonitorStatus = 'MonitorStatus' in params ? params.MonitorStatus : null;
        this.IsAvailable = 'IsAvailable' in params ? params.IsAvailable : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeEdgeUnitExtra返回参数结构体
 * @class
 */
class DescribeEdgeUnitExtraResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * APIServer类型
         * @type {string || null}
         */
        this.APIServerType = null;

        /**
         * 域名URL
         * @type {string || null}
         */
        this.APIServerURL = null;

        /**
         * 域名URL对应的端口
         * @type {string || null}
         */
        this.APIServerURLPort = null;

        /**
         * 域名URL对应的端口
         * @type {string || null}
         */
        this.APIServerResolveIP = null;

        /**
         * 对外可访问的IP
         * @type {string || null}
         */
        this.APIServerExposeAddress = null;

        /**
         * 是否开启监控
         * @type {boolean || null}
         */
        this.IsCreatePrometheus = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.APIServerType = 'APIServerType' in params ? params.APIServerType : null;
        this.APIServerURL = 'APIServerURL' in params ? params.APIServerURL : null;
        this.APIServerURLPort = 'APIServerURLPort' in params ? params.APIServerURLPort : null;
        this.APIServerResolveIP = 'APIServerResolveIP' in params ? params.APIServerResolveIP : null;
        this.APIServerExposeAddress = 'APIServerExposeAddress' in params ? params.APIServerExposeAddress : null;
        this.IsCreatePrometheus = 'IsCreatePrometheus' in params ? params.IsCreatePrometheus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeConfigMaps请求参数结构体
 * @class
 */
class DescribeConfigMapsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单元ID
         * @type {number || null}
         */
        this.EdgeUnitID = null;

        /**
         * 翻页偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页大小(最大100)
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 命名空间
         * @type {string || null}
         */
        this.ConfigMapNamespace = null;

        /**
         * 模糊匹配的名称
         * @type {string || null}
         */
        this.NamePattern = null;

        /**
         * Sort.Fileld填写CreateTime Sort.Order(ASC|DESC) 默认ASC
         * @type {FieldSort || null}
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
        this.EdgeUnitID = 'EdgeUnitID' in params ? params.EdgeUnitID : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ConfigMapNamespace = 'ConfigMapNamespace' in params ? params.ConfigMapNamespace : null;
        this.NamePattern = 'NamePattern' in params ? params.NamePattern : null;

        if (params.Sort) {
            let obj = new FieldSort();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }

    }
}

/**
 * DescribeEdgeUnitNodeUnitTemplates返回参数结构体
 * @class
 */
class DescribeEdgeUnitNodeUnitTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合查询条件的记录总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * NodeUnit模板列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NodeUnitTemplate> || null}
         */
        this.NodeUnitTemplates = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.NodeUnitTemplates) {
            this.NodeUnitTemplates = new Array();
            for (let z in params.NodeUnitTemplates) {
                let obj = new NodeUnitTemplate();
                obj.deserialize(params.NodeUnitTemplates[z]);
                this.NodeUnitTemplates.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ServiceGroup中Grid信息
 * @class
 */
class GridDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Grid名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * GridID
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * ModifyIotDevice返回参数结构体
 * @class
 */
class ModifyIotDeviceResponse extends  AbstractModel {
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
 * ModifyEdgeNodeLabels请求参数结构体
 * @class
 */
class ModifyEdgeNodeLabelsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IECP边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * IECP边缘节点ID
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * 标签列表
         * @type {Array.<KeyValueObj> || null}
         */
        this.Labels = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.NodeId = 'NodeId' in params ? params.NodeId : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new KeyValueObj();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

    }
}

/**
 * DeleteEdgeUnitDevices返回参数结构体
 * @class
 */
class DeleteEdgeUnitDevicesResponse extends  AbstractModel {
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
 * CreateEdgeNodeGroup返回参数结构体
 * @class
 */
class CreateEdgeNodeGroupResponse extends  AbstractModel {
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
 * 边缘节点Pod信息
 * @class
 */
class EdgeNodePodInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pod名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Pod状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 所在节点IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NodeIp = null;

        /**
         * 实例IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * CPU Request
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CpuRequest = null;

        /**
         * Memory Request
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MemoryRequest = null;

        /**
         * 命名空间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 工作负载类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WorkloadType = null;

        /**
         * 工作负载名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WorkloadName = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 重启次数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RestartCount = null;

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterID = null;

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
        this.NodeIp = 'NodeIp' in params ? params.NodeIp : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.CpuRequest = 'CpuRequest' in params ? params.CpuRequest : null;
        this.MemoryRequest = 'MemoryRequest' in params ? params.MemoryRequest : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.WorkloadType = 'WorkloadType' in params ? params.WorkloadType : null;
        this.WorkloadName = 'WorkloadName' in params ? params.WorkloadName : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.RestartCount = 'RestartCount' in params ? params.RestartCount : null;
        this.ClusterID = 'ClusterID' in params ? params.ClusterID : null;

    }
}

/**
 * 消息路由
 * @class
 */
class RouteInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {number || null}
         */
        this.RouteID = null;

        /**
         * 无
         * @type {string || null}
         */
        this.RouteName = null;

        /**
         * 无
         * @type {string || null}
         */
        this.SourceProductID = null;

        /**
         * 无
         * @type {string || null}
         */
        this.TopicFilter = null;

        /**
         * 无
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 无
         * @type {string || null}
         */
        this.TargetOptions = null;

        /**
         * 无
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 无
         * @type {string || null}
         */
        this.Descript = null;

        /**
         * 无
         * @type {string || null}
         */
        this.Healthy = null;

        /**
         * 无
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 无
         * @type {number || null}
         */
        this.MessageCount = null;

        /**
         * 无
         * @type {string || null}
         */
        this.MessageLastTime = null;

        /**
         * 无
         * @type {string || null}
         */
        this.SourceProductName = null;

        /**
         * 无
         * @type {Array.<string> || null}
         */
        this.SourceUnitIDList = null;

        /**
         * 无
         * @type {Array.<string> || null}
         */
        this.SourceUnitNameList = null;

        /**
         * 无
         * @type {Array.<string> || null}
         */
        this.SourceDeviceNameList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteID = 'RouteID' in params ? params.RouteID : null;
        this.RouteName = 'RouteName' in params ? params.RouteName : null;
        this.SourceProductID = 'SourceProductID' in params ? params.SourceProductID : null;
        this.TopicFilter = 'TopicFilter' in params ? params.TopicFilter : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.TargetOptions = 'TargetOptions' in params ? params.TargetOptions : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Descript = 'Descript' in params ? params.Descript : null;
        this.Healthy = 'Healthy' in params ? params.Healthy : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.MessageCount = 'MessageCount' in params ? params.MessageCount : null;
        this.MessageLastTime = 'MessageLastTime' in params ? params.MessageLastTime : null;
        this.SourceProductName = 'SourceProductName' in params ? params.SourceProductName : null;
        this.SourceUnitIDList = 'SourceUnitIDList' in params ? params.SourceUnitIDList : null;
        this.SourceUnitNameList = 'SourceUnitNameList' in params ? params.SourceUnitNameList : null;
        this.SourceDeviceNameList = 'SourceDeviceNameList' in params ? params.SourceDeviceNameList : null;

    }
}

/**
 * CreateEdgeUnitApplicationYaml请求参数结构体
 * @class
 */
class CreateEdgeUnitApplicationYamlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * base64后的Yaml配置
         * @type {string || null}
         */
        this.Yaml = null;

        /**
         * 基本信息
         * @type {ApplicationBasicInfo || null}
         */
        this.BasicInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.Yaml = 'Yaml' in params ? params.Yaml : null;

        if (params.BasicInfo) {
            let obj = new ApplicationBasicInfo();
            obj.deserialize(params.BasicInfo)
            this.BasicInfo = obj;
        }

    }
}

/**
 * Http探测头
 * @class
 */
class HttpHeader extends  AbstractModel {
    constructor(){
        super();

        /**
         * HTTP头的名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * HTTP头的值
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
 * DeleteEdgeUnitApplications返回参数结构体
 * @class
 */
class DeleteEdgeUnitApplicationsResponse extends  AbstractModel {
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
 * DescribeSecret请求参数结构体
 * @class
 */
class DescribeSecretRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitID = null;

        /**
         * secret名
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * 命名空间(默认值:default）
         * @type {string || null}
         */
        this.SecretNamespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitID = 'EdgeUnitID' in params ? params.EdgeUnitID : null;
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.SecretNamespace = 'SecretNamespace' in params ? params.SecretNamespace : null;

    }
}

/**
 * DeleteApplications返回参数结构体
 * @class
 */
class DeleteApplicationsResponse extends  AbstractModel {
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
 * Draco 设备预录入信息
 * @class
 */
class DracoNodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备SN。SN仅支持大写字母、数字，长度限制为1~32个字符
         * @type {string || null}
         */
        this.SN = null;

        /**
         * 节点名称。长度限制为1~63个字符，节点名称只支持小写英文、数字、中横线、英文句号
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 节点备注
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SN = 'SN' in params ? params.SN : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * NodeUnit信息
 * @class
 */
class NodeUnitInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * NodeUnitId
         * @type {number || null}
         */
        this.Id = null;

        /**
         * NodeUnit名称
         * @type {string || null}
         */
        this.NodeUnitName = null;

        /**
         * 包含节点列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NodeUnitNodeInfo> || null}
         */
        this.NodeList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.NodeUnitName = 'NodeUnitName' in params ? params.NodeUnitName : null;

        if (params.NodeList) {
            this.NodeList = new Array();
            for (let z in params.NodeList) {
                let obj = new NodeUnitNodeInfo();
                obj.deserialize(params.NodeList[z]);
                this.NodeList.push(obj);
            }
        }

    }
}

/**
 * docker配置
 * @class
 */
class DockerConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像仓库地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegistryDomain = null;

        /**
         * 用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 密码
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
        this.RegistryDomain = 'RegistryDomain' in params ? params.RegistryDomain : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * DescribeEdgeUnitDeployGridItemYaml请求参数结构体
 * @class
 */
class DescribeEdgeUnitDeployGridItemYamlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IECP边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * 负载类型（StatefulSetGrid｜DeploymentGrid）
         * @type {string || null}
         */
        this.WorkloadKind = null;

        /**
         * Grid部署项名称
         * @type {string || null}
         */
        this.GridItemName = null;

        /**
         * 命名空间，默认default
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
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.WorkloadKind = 'WorkloadKind' in params ? params.WorkloadKind : null;
        this.GridItemName = 'GridItemName' in params ? params.GridItemName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * CreateEdgeNodeBatch请求参数结构体
 * @class
 */
class CreateEdgeNodeBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * 节点信息
         * @type {Array.<DracoNodeInfo> || null}
         */
        this.Nodes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;

        if (params.Nodes) {
            this.Nodes = new Array();
            for (let z in params.Nodes) {
                let obj = new DracoNodeInfo();
                obj.deserialize(params.Nodes[z]);
                this.Nodes.push(obj);
            }
        }

    }
}

/**
 * DescribeNamespace请求参数结构体
 * @class
 */
class DescribeNamespaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单元ID
         * @type {number || null}
         */
        this.EdgeUnitID = null;

        /**
         * 命名空间名
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
        this.EdgeUnitID = 'EdgeUnitID' in params ? params.EdgeUnitID : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * DescribeNamespace返回参数结构体
 * @class
 */
class DescribeNamespaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 状态 (Active|Terminating)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 描述信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 是否保护-不允许删除
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Protected = null;

        /**
         * Yaml文件格式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Yaml = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Protected = 'Protected' in params ? params.Protected : null;
        this.Yaml = 'Yaml' in params ? params.Yaml : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 组件市场的组件描述
 * @class
 */
class MarketComponentInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组件ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 组件名称
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 发布者
         * @type {string || null}
         */
        this.Author = null;

        /**
         * 发布时间
         * @type {string || null}
         */
        this.ReleaseTime = null;

        /**
         * 组件简介
         * @type {string || null}
         */
        this.Outline = null;

        /**
         * 指向详细描述的url
         * @type {string || null}
         */
        this.Detail = null;

        /**
         * 图标链接
         * @type {string || null}
         */
        this.Icon = null;

        /**
         * 组件版本
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 组件可视化信息
         * @type {string || null}
         */
        this.WorkloadVisualConfig = null;

        /**
         * 无
         * @type {string || null}
         */
        this.DetailUrl = null;

        /**
         * 无
         * @type {boolean || null}
         */
        this.Installed = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.Author = 'Author' in params ? params.Author : null;
        this.ReleaseTime = 'ReleaseTime' in params ? params.ReleaseTime : null;
        this.Outline = 'Outline' in params ? params.Outline : null;
        this.Detail = 'Detail' in params ? params.Detail : null;
        this.Icon = 'Icon' in params ? params.Icon : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.WorkloadVisualConfig = 'WorkloadVisualConfig' in params ? params.WorkloadVisualConfig : null;
        this.DetailUrl = 'DetailUrl' in params ? params.DetailUrl : null;
        this.Installed = 'Installed' in params ? params.Installed : null;

    }
}

/**
 * DescribeConfigMap请求参数结构体
 * @class
 */
class DescribeConfigMapRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单元ID
         * @type {number || null}
         */
        this.EdgeUnitID = null;

        /**
         * ConfigMap名称
         * @type {string || null}
         */
        this.ConfigMapName = null;

        /**
         * ConfigMap命名空间
         * @type {string || null}
         */
        this.ConfigMapNamespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitID = 'EdgeUnitID' in params ? params.EdgeUnitID : null;
        this.ConfigMapName = 'ConfigMapName' in params ? params.ConfigMapName : null;
        this.ConfigMapNamespace = 'ConfigMapNamespace' in params ? params.ConfigMapNamespace : null;

    }
}

/**
 * ConfigMap基本信息
 * @class
 */
class ConfigMapBasicInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 命名空间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Namespace = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

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
         * 命名空间名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 状态(Active|Terminating)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 描述信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 是否保护(不允许删除)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Protected = null;

        /**
         * 对应的Yaml配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Yaml = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Protected = 'Protected' in params ? params.Protected : null;
        this.Yaml = 'Yaml' in params ? params.Yaml : null;

    }
}

/**
 * CreateEdgeNodeUnitTemplate请求参数结构体
 * @class
 */
class CreateEdgeNodeUnitTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IECP边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * NodeUnit模板名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 命名空间，默认default
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 包含的节点列表
         * @type {Array.<string> || null}
         */
        this.Nodes = null;

        /**
         * 描述
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
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Nodes = 'Nodes' in params ? params.Nodes : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * Grid信息
 * @class
 */
class GridInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * DeployGridId
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Key
         * @type {string || null}
         */
        this.GridUniqKey = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 工作负载类型
         * @type {string || null}
         */
        this.WorkloadKind = null;

        /**
         * 启动时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 副本数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Replicas = null;

        /**
         * 创建人
         * @type {string || null}
         */
        this.Publisher = null;

        /**
         * 版本信息
         * @type {string || null}
         */
        this.Version = null;

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
        this.GridUniqKey = 'GridUniqKey' in params ? params.GridUniqKey : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.WorkloadKind = 'WorkloadKind' in params ? params.WorkloadKind : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Replicas = 'Replicas' in params ? params.Replicas : null;
        this.Publisher = 'Publisher' in params ? params.Publisher : null;
        this.Version = 'Version' in params ? params.Version : null;

    }
}

/**
 * CreateApplicationVisualization返回参数结构体
 * @class
 */
class CreateApplicationVisualizationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ApplicationId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 事件信息
 * @class
 */
class Event extends  AbstractModel {
    constructor(){
        super();

        /**
         * 第一次出现时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FirstTime = null;

        /**
         * 最后一次出现时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastTime = null;

        /**
         * 事件关联对象类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InvolvedObjectKind = null;

        /**
         * 事件关联对象名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InvolvedObjectName = null;

        /**
         * 事件类型(Normal|Warning)
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * 内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 出现次数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Count = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FirstTime = 'FirstTime' in params ? params.FirstTime : null;
        this.LastTime = 'LastTime' in params ? params.LastTime : null;
        this.InvolvedObjectKind = 'InvolvedObjectKind' in params ? params.InvolvedObjectKind : null;
        this.InvolvedObjectName = 'InvolvedObjectName' in params ? params.InvolvedObjectName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * DescribeEdgeUnitCloud请求参数结构体
 * @class
 */
class DescribeEdgeUnitCloudRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 边缘集群ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;

    }
}

/**
 * CreateEdgeUnitApplicationYaml返回参数结构体
 * @class
 */
class CreateEdgeUnitApplicationYamlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ApplicationId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSecretYamlError请求参数结构体
 * @class
 */
class DescribeSecretYamlErrorRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * yaml文件
         * @type {string || null}
         */
        this.Yaml = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Yaml = 'Yaml' in params ? params.Yaml : null;

    }
}

/**
 * DescribeMessageRouteList返回参数结构体
 * @class
 */
class DescribeMessageRouteListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {Array.<RouteInfo> || null}
         */
        this.RouteList = null;

        /**
         * 无
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

        if (params.RouteList) {
            this.RouteList = new Array();
            for (let z in params.RouteList) {
                let obj = new RouteInfo();
                obj.deserialize(params.RouteList[z]);
                this.RouteList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 字段排序
 * @class
 */
class FieldSort extends  AbstractModel {
    constructor(){
        super();

        /**
         * 字段名
         * @type {string || null}
         */
        this.Field = null;

        /**
         * 排序(ASC:升序 DESC:降序
         * @type {string || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Field = 'Field' in params ? params.Field : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * 获取边缘集群列表
 * @class
 */
class EdgeCloudCluster extends  AbstractModel {
    constructor(){
        super();

        /**
         * IECP侧边缘集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EdgeId = null;

        /**
         * 边缘集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 区域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 集群版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.K8SVersion = null;

        /**
         * 私有网络ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterDesc = null;

        /**
         * 集群状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * pod cidr
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PodCIDR = null;

        /**
         * service cidr
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceCIDR = null;

        /**
         * 边缘版本类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EdgeClusterVersion = null;

        /**
         * 用户ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeId = 'EdgeId' in params ? params.EdgeId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.K8SVersion = 'K8SVersion' in params ? params.K8SVersion : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.ClusterDesc = 'ClusterDesc' in params ? params.ClusterDesc : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.PodCIDR = 'PodCIDR' in params ? params.PodCIDR : null;
        this.ServiceCIDR = 'ServiceCIDR' in params ? params.ServiceCIDR : null;
        this.EdgeClusterVersion = 'EdgeClusterVersion' in params ? params.EdgeClusterVersion : null;
        this.UID = 'UID' in params ? params.UID : null;

    }
}

/**
 * CreateUserToken返回参数结构体
 * @class
 */
class CreateUserTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {string || null}
         */
        this.Token = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSecret请求参数结构体
 * @class
 */
class DeleteSecretRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单元ID
         * @type {number || null}
         */
        this.EdgeUnitID = null;

        /**
         * secret名称
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * secret命名空间（默认:default）
         * @type {string || null}
         */
        this.SecretNamespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitID = 'EdgeUnitID' in params ? params.EdgeUnitID : null;
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.SecretNamespace = 'SecretNamespace' in params ? params.SecretNamespace : null;

    }
}

/**
 * DescribeEdgeUnitApplicationPods返回参数结构体
 * @class
 */
class DescribeEdgeUnitApplicationPodsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pod列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PodStatus> || null}
         */
        this.PodSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PodSet) {
            this.PodSet = new Array();
            for (let z in params.PodSet) {
                let obj = new PodStatus();
                obj.deserialize(params.PodSet[z]);
                this.PodSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 预注册节点的信息
 * @class
 */
class EdgeDracoNodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 节点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 是否已激活
         * @type {boolean || null}
         */
        this.IsUsed = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 备注信息，如批次
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * SN 设备号
         * @type {string || null}
         */
        this.SN = null;

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
        this.IsUsed = 'IsUsed' in params ? params.IsUsed : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.SN = 'SN' in params ? params.SN : null;

    }
}

/**
 * DescribeEdgeUnitApplicationVisualization请求参数结构体
 * @class
 */
class DescribeEdgeUnitApplicationVisualizationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * 应用ID
         * @type {number || null}
         */
        this.ApplicationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

    }
}

/**
 * DescribeEdgeNodes返回参数结构体
 * @class
 */
class DescribeEdgeNodesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 边缘节点数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 节点列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<EdgeNodeInfo> || null}
         */
        this.NodeSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.NodeSet) {
            this.NodeSet = new Array();
            for (let z in params.NodeSet) {
                let obj = new EdgeNodeInfo();
                obj.deserialize(params.NodeSet[z]);
                this.NodeSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyIotDevice请求参数结构体
 * @class
 */
class ModifyIotDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备id
         * @type {number || null}
         */
        this.DeviceId = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 设备是否开启
         * @type {boolean || null}
         */
        this.Disabled = null;

        /**
         * 日志设置
         * @type {number || null}
         */
        this.LogSetting = null;

        /**
         * 日志级别
         * @type {number || null}
         */
        this.LogLevel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Disabled = 'Disabled' in params ? params.Disabled : null;
        this.LogSetting = 'LogSetting' in params ? params.LogSetting : null;
        this.LogLevel = 'LogLevel' in params ? params.LogLevel : null;

    }
}

/**
 * DescribeEdgeUnitGridPods请求参数结构体
 * @class
 */
class DescribeEdgeUnitGridPodsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IECP边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * Grid名称
         * @type {string || null}
         */
        this.GridName = null;

        /**
         * 负载类型（StatefulSetGrid｜DeploymentGrid）
         * @type {string || null}
         */
        this.WorkloadKind = null;

        /**
         * NodeUnit名
         * @type {string || null}
         */
        this.NodeUnit = null;

        /**
         * 命名空间，默认default
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
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.GridName = 'GridName' in params ? params.GridName : null;
        this.WorkloadKind = 'WorkloadKind' in params ? params.WorkloadKind : null;
        this.NodeUnit = 'NodeUnit' in params ? params.NodeUnit : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * ConfigMap挂载卷
 * @class
 */
class VolumeConfigMap extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Key列表配置
         * @type {Array.<VolumeConfigMapKeyToPath> || null}
         */
        this.Items = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new VolumeConfigMapKeyToPath();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

    }
}

/**
 * 从单元批量解绑设备
 * @class
 */
class DeleteEdgeUnitDevicesDevice extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 无
         * @type {string || null}
         */
        this.DeviceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;

    }
}

/**
 * DeleteIotDevice返回参数结构体
 * @class
 */
class DeleteIotDeviceResponse extends  AbstractModel {
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
 * DescribeEdgeDefaultVpc返回参数结构体
 * @class
 */
class DescribeEdgeDefaultVpcResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私有网络ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 网络CIDR
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcCidrBlock = null;

        /**
         * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 子网CIDR
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubnetCidrBlock = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpcCidrBlock = 'VpcCidrBlock' in params ? params.VpcCidrBlock : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.SubnetCidrBlock = 'SubnetCidrBlock' in params ? params.SubnetCidrBlock : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyNodeUnitTemplate请求参数结构体
 * @class
 */
class ModifyNodeUnitTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IECP边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * NodeUnit模板ID
         * @type {number || null}
         */
        this.NodeUnitTemplateID = null;

        /**
         * 包含的节点列表
         * @type {Array.<string> || null}
         */
        this.Nodes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.NodeUnitTemplateID = 'NodeUnitTemplateID' in params ? params.NodeUnitTemplateID : null;
        this.Nodes = 'Nodes' in params ? params.Nodes : null;

    }
}

/**
 * DescribeEdgeNodes请求参数结构体
 * @class
 */
class DescribeEdgeNodesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IECP边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * 边缘节点名称模糊搜索串
         * @type {string || null}
         */
        this.NamePattern = null;

        /**
         * 边缘节点名称列表，支持批量查询 ，优先于模糊查询
         * @type {Array.<string> || null}
         */
        this.NameMatchedList = null;

        /**
         * 排序信息列表
         * @type {Array.<Sort> || null}
         */
        this.Sort = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 页面大小Limit
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 节点类型
         * @type {number || null}
         */
        this.NodeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.NamePattern = 'NamePattern' in params ? params.NamePattern : null;
        this.NameMatchedList = 'NameMatchedList' in params ? params.NameMatchedList : null;

        if (params.Sort) {
            this.Sort = new Array();
            for (let z in params.Sort) {
                let obj = new Sort();
                obj.deserialize(params.Sort[z]);
                this.Sort.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;

    }
}

/**
 * DescribeEdgeUnitApplicationLogs请求参数结构体
 * @class
 */
class DescribeEdgeUnitApplicationLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * 应用ID
         * @type {number || null}
         */
        this.ApplicationId = null;

        /**
         * 最大条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pod名
         * @type {string || null}
         */
        this.PodName = null;

        /**
         * 容器名
         * @type {string || null}
         */
        this.ContainerName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.PodName = 'PodName' in params ? params.PodName : null;
        this.ContainerName = 'ContainerName' in params ? params.ContainerName : null;

    }
}

/**
 * CreateUserToken请求参数结构体
 * @class
 */
class CreateUserTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * token过期时间，有效值是1~300秒
         * @type {number || null}
         */
        this.Second = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Second = 'Second' in params ? params.Second : null;

    }
}

/**
 * DescribeEdgeAgentNodeInstaller返回参数结构体
 * @class
 */
class DescribeEdgeAgentNodeInstallerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点在线安装信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EdgeNodeInstallerOnline || null}
         */
        this.Online = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Online) {
            let obj = new EdgeNodeInstallerOnline();
            obj.deserialize(params.Online)
            this.Online = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyEdgeUnitApplicationVisualization请求参数结构体
 * @class
 */
class ModifyEdgeUnitApplicationVisualizationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * 应用ID
         * @type {number || null}
         */
        this.ApplicationId = null;

        /**
         * 应用配置
         * @type {ApplicationBasicConfig || null}
         */
        this.BasicConfig = null;

        /**
         * 卷配置
         * @type {Array.<Volume> || null}
         */
        this.Volumes = null;

        /**
         * 初始容器列表
         * @type {Array.<Container> || null}
         */
        this.InitContainers = null;

        /**
         * 容器配置
         * @type {Array.<Container> || null}
         */
        this.Containers = null;

        /**
         * 服务配置
         * @type {Service || null}
         */
        this.Service = null;

        /**
         * Job配置
         * @type {Job || null}
         */
        this.Job = null;

        /**
         * CronJob配置
         * @type {CronJob || null}
         */
        this.CronJob = null;

        /**
         * 重启策略
         * @type {string || null}
         */
        this.RestartPolicy = null;

        /**
         * 镜像拉取密钥
         * @type {Array.<string> || null}
         */
        this.ImagePullSecrets = null;

        /**
         * HPA配置
         * @type {HorizontalPodAutoscaler || null}
         */
        this.HorizontalPodAutoscaler = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

        if (params.BasicConfig) {
            let obj = new ApplicationBasicConfig();
            obj.deserialize(params.BasicConfig)
            this.BasicConfig = obj;
        }

        if (params.Volumes) {
            this.Volumes = new Array();
            for (let z in params.Volumes) {
                let obj = new Volume();
                obj.deserialize(params.Volumes[z]);
                this.Volumes.push(obj);
            }
        }

        if (params.InitContainers) {
            this.InitContainers = new Array();
            for (let z in params.InitContainers) {
                let obj = new Container();
                obj.deserialize(params.InitContainers[z]);
                this.InitContainers.push(obj);
            }
        }

        if (params.Containers) {
            this.Containers = new Array();
            for (let z in params.Containers) {
                let obj = new Container();
                obj.deserialize(params.Containers[z]);
                this.Containers.push(obj);
            }
        }

        if (params.Service) {
            let obj = new Service();
            obj.deserialize(params.Service)
            this.Service = obj;
        }

        if (params.Job) {
            let obj = new Job();
            obj.deserialize(params.Job)
            this.Job = obj;
        }

        if (params.CronJob) {
            let obj = new CronJob();
            obj.deserialize(params.CronJob)
            this.CronJob = obj;
        }
        this.RestartPolicy = 'RestartPolicy' in params ? params.RestartPolicy : null;
        this.ImagePullSecrets = 'ImagePullSecrets' in params ? params.ImagePullSecrets : null;

        if (params.HorizontalPodAutoscaler) {
            let obj = new HorizontalPodAutoscaler();
            obj.deserialize(params.HorizontalPodAutoscaler)
            this.HorizontalPodAutoscaler = obj;
        }

    }
}

/**
 * ModifyConfigMap返回参数结构体
 * @class
 */
class ModifyConfigMapResponse extends  AbstractModel {
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
 * ModifyApplicationVisualization返回参数结构体
 * @class
 */
class ModifyApplicationVisualizationResponse extends  AbstractModel {
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
 * DescribeEdgeNodePods请求参数结构体
 * @class
 */
class DescribeEdgeNodePodsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IECP边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * 节点ID
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * 命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Pod名称过滤串
         * @type {string || null}
         */
        this.PodNamePattern = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.PodNamePattern = 'PodNamePattern' in params ? params.PodNamePattern : null;

    }
}

/**
 * DeleteIotDeviceBatch请求参数结构体
 * @class
 */
class DeleteIotDeviceBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {Array.<number> || null}
         */
        this.DeviceIDList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceIDList = 'DeviceIDList' in params ? params.DeviceIDList : null;

    }
}

/**
 * DescribeEdgeAgentNodeInstaller请求参数结构体
 * @class
 */
class DescribeEdgeAgentNodeInstallerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IECP边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * IECP边缘节点ID
         * @type {number || null}
         */
        this.NodeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.NodeId = 'NodeId' in params ? params.NodeId : null;

    }
}

/**
 * DescribeApplicationVisualization返回参数结构体
 * @class
 */
class DescribeApplicationVisualizationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 基本信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ApplicationBasicInfo || null}
         */
        this.BasicInfo = null;

        /**
         * 基本配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ApplicationBasicConfig || null}
         */
        this.BasicConfig = null;

        /**
         * 卷配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Volume> || null}
         */
        this.Volumes = null;

        /**
         * 初始化容器配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Container> || null}
         */
        this.InitContainers = null;

        /**
         * 容器配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Container> || null}
         */
        this.Containers = null;

        /**
         * 服务配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Service || null}
         */
        this.Service = null;

        /**
         * Job配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Job || null}
         */
        this.Job = null;

        /**
         * CronJob配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CronJob || null}
         */
        this.CronJob = null;

        /**
         * 重启策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RestartPolicy = null;

        /**
         * HPA
注意：此字段可能返回 null，表示取不到有效值。
         * @type {HorizontalPodAutoscaler || null}
         */
        this.HorizontalPodAutoscaler = null;

        /**
         * 镜像拉取Secret
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ImagePullSecrets = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BasicInfo) {
            let obj = new ApplicationBasicInfo();
            obj.deserialize(params.BasicInfo)
            this.BasicInfo = obj;
        }

        if (params.BasicConfig) {
            let obj = new ApplicationBasicConfig();
            obj.deserialize(params.BasicConfig)
            this.BasicConfig = obj;
        }

        if (params.Volumes) {
            this.Volumes = new Array();
            for (let z in params.Volumes) {
                let obj = new Volume();
                obj.deserialize(params.Volumes[z]);
                this.Volumes.push(obj);
            }
        }

        if (params.InitContainers) {
            this.InitContainers = new Array();
            for (let z in params.InitContainers) {
                let obj = new Container();
                obj.deserialize(params.InitContainers[z]);
                this.InitContainers.push(obj);
            }
        }

        if (params.Containers) {
            this.Containers = new Array();
            for (let z in params.Containers) {
                let obj = new Container();
                obj.deserialize(params.Containers[z]);
                this.Containers.push(obj);
            }
        }

        if (params.Service) {
            let obj = new Service();
            obj.deserialize(params.Service)
            this.Service = obj;
        }

        if (params.Job) {
            let obj = new Job();
            obj.deserialize(params.Job)
            this.Job = obj;
        }

        if (params.CronJob) {
            let obj = new CronJob();
            obj.deserialize(params.CronJob)
            this.CronJob = obj;
        }
        this.RestartPolicy = 'RestartPolicy' in params ? params.RestartPolicy : null;

        if (params.HorizontalPodAutoscaler) {
            let obj = new HorizontalPodAutoscaler();
            obj.deserialize(params.HorizontalPodAutoscaler)
            this.HorizontalPodAutoscaler = obj;
        }
        this.ImagePullSecrets = 'ImagePullSecrets' in params ? params.ImagePullSecrets : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDracoEdgeNodeInstaller请求参数结构体
 * @class
 */
class DescribeDracoEdgeNodeInstallerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备SN
         * @type {string || null}
         */
        this.SN = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SN = 'SN' in params ? params.SN : null;

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
         * 单元ID
         * @type {number || null}
         */
        this.EdgeUnitID = null;

        /**
         * 命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 描述信息
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
        this.EdgeUnitID = 'EdgeUnitID' in params ? params.EdgeUnitID : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * 数据卷主机路径，取值参考: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
 * @class
 */
class VolumeHostPath extends  AbstractModel {
    constructor(){
        super();

        /**
         * 类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 路径
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Path = 'Path' in params ? params.Path : null;

    }
}

/**
 * DeleteMessageRoute请求参数结构体
 * @class
 */
class DeleteMessageRouteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {number || null}
         */
        this.RouteID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteID = 'RouteID' in params ? params.RouteID : null;

    }
}

/**
 * ApplyMarketComponent请求参数结构体
 * @class
 */
class ApplyMarketComponentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组件ID
         * @type {number || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * 节点基础信息
 * @class
 */
class NodeSimpleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点ID
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 节点名称
         * @type {string || null}
         */
        this.NodeName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;

    }
}

/**
 * 环境变量选择
 * @class
 */
class EnvValueSelector extends  AbstractModel {
    constructor(){
        super();

        /**
         * 健名
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 对象名
         * @type {string || null}
         */
        this.ObjectName = null;

        /**
         * 对象值
         * @type {string || null}
         */
        this.ObjectType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.ObjectName = 'ObjectName' in params ? params.ObjectName : null;
        this.ObjectType = 'ObjectType' in params ? params.ObjectType : null;

    }
}

/**
 * DescribeNamespaceResources返回参数结构体
 * @class
 */
class DescribeNamespaceResourcesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NamespaceResource> || null}
         */
        this.Resources = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Resources) {
            this.Resources = new Array();
            for (let z in params.Resources) {
                let obj = new NamespaceResource();
                obj.deserialize(params.Resources[z]);
                this.Resources.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEdgeUnitGridEvents请求参数结构体
 * @class
 */
class DescribeEdgeUnitGridEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IECP边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * Grid名称
         * @type {string || null}
         */
        this.GridName = null;

        /**
         * 负载类型（StatefulSetGrid｜DeploymentGrid）
         * @type {string || null}
         */
        this.WorkloadKind = null;

        /**
         * 命名空间，默认为default
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * NodeUnit名称
         * @type {string || null}
         */
        this.NodeUnit = null;

        /**
         * Pod名称
         * @type {string || null}
         */
        this.PodName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.GridName = 'GridName' in params ? params.GridName : null;
        this.WorkloadKind = 'WorkloadKind' in params ? params.WorkloadKind : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.NodeUnit = 'NodeUnit' in params ? params.NodeUnit : null;
        this.PodName = 'PodName' in params ? params.PodName : null;

    }
}

/**
 * CreateEdgeUnitDevices返回参数结构体
 * @class
 */
class CreateEdgeUnitDevicesResponse extends  AbstractModel {
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
 * Secret信息
 * @class
 */
class SecretItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Secret名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 命名空间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Secret类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SecretType = null;

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
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.SecretType = 'SecretType' in params ? params.SecretType : null;

    }
}

/**
 * ModifyEdgeDracoNode请求参数结构体
 * @class
 */
class ModifyEdgeDracoNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * 边缘节点ID
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * 节点信息
         * @type {DracoNodeInfo || null}
         */
        this.NodeInfo = null;

        /**
         * 是否重置draco设备
         * @type {boolean || null}
         */
        this.IsReset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.NodeId = 'NodeId' in params ? params.NodeId : null;

        if (params.NodeInfo) {
            let obj = new DracoNodeInfo();
            obj.deserialize(params.NodeInfo)
            this.NodeInfo = obj;
        }
        this.IsReset = 'IsReset' in params ? params.IsReset : null;

    }
}

/**
 * CreateMessageRoute返回参数结构体
 * @class
 */
class CreateMessageRouteResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由id
         * @type {number || null}
         */
        this.RouteID = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteID = 'RouteID' in params ? params.RouteID : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeNodeUnit返回参数结构体
 * @class
 */
class DescribeNodeUnitResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合查询条件的记录总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * NodeUnit信息数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NodeUnitInfo> || null}
         */
        this.NodeGridInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.NodeGridInfo) {
            this.NodeGridInfo = new Array();
            for (let z in params.NodeGridInfo) {
                let obj = new NodeUnitInfo();
                obj.deserialize(params.NodeGridInfo[z]);
                this.NodeGridInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteEdgeNodeGroup返回参数结构体
 * @class
 */
class DeleteEdgeNodeGroupResponse extends  AbstractModel {
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
 * DescribeMessageRouteList请求参数结构体
 * @class
 */
class DescribeMessageRouteListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 无
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 无
         * @type {string || null}
         */
        this.Filter = null;

        /**
         * 无
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 无
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 无
         * @type {string || null}
         */
        this.Order = null;

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
        this.Filter = 'Filter' in params ? params.Filter : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * KeyValue对象
 * @class
 */
class KeyValueObj extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key值
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Value值
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
 * 标签信息
 * @class
 */
class Label extends  AbstractModel {
    constructor(){
        super();

        /**
         * 健名
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 健值
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
 * ModifyEdgeUnit返回参数结构体
 * @class
 */
class ModifyEdgeUnitResponse extends  AbstractModel {
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
 * DescribeYeheResourceLimit返回参数结构体
 * @class
 */
class DescribeYeheResourceLimitResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户父账号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 允许创建的节点数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateNodeLimit = null;

        /**
         * 允许创建的集群数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateClusterLimit = null;

        /**
         * 是否有监控开启权限
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.EnablePermMonitor = null;

        /**
         * 节点是否有admin的所有权限
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.EnablePermAdminNode = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.CreateNodeLimit = 'CreateNodeLimit' in params ? params.CreateNodeLimit : null;
        this.CreateClusterLimit = 'CreateClusterLimit' in params ? params.CreateClusterLimit : null;
        this.EnablePermMonitor = 'EnablePermMonitor' in params ? params.EnablePermMonitor : null;
        this.EnablePermAdminNode = 'EnablePermAdminNode' in params ? params.EnablePermAdminNode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEdgeUnitsCloud返回参数结构体
 * @class
 */
class DescribeEdgeUnitsCloudResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 集群详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<EdgeCloudCluster> || null}
         */
        this.EdgeUnitSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.EdgeUnitSet) {
            this.EdgeUnitSet = new Array();
            for (let z in params.EdgeUnitSet) {
                let obj = new EdgeCloudCluster();
                obj.deserialize(params.EdgeUnitSet[z]);
                this.EdgeUnitSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIotDevices请求参数结构体
 * @class
 */
class DescribeIotDevicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页偏移
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 产品id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称模糊查找
         * @type {string || null}
         */
        this.NamePattern = null;

        /**
         * 版本列表
         * @type {Array.<string> || null}
         */
        this.Versions = null;

        /**
         * ASC 或 DESC
         * @type {string || null}
         */
        this.Order = null;

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
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.NamePattern = 'NamePattern' in params ? params.NamePattern : null;
        this.Versions = 'Versions' in params ? params.Versions : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * CreateConfigMap请求参数结构体
 * @class
 */
class CreateConfigMapRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单元ID
         * @type {number || null}
         */
        this.EdgeUnitID = null;

        /**
         * ConfigMap名称
         * @type {string || null}
         */
        this.ConfigMapName = null;

        /**
         * ConfigMap内容
         * @type {Array.<KeyValueObj> || null}
         */
        this.ConfigMapData = null;

        /**
         * ConfigMap命名空间,默认：default
         * @type {string || null}
         */
        this.ConfigMapNamespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitID = 'EdgeUnitID' in params ? params.EdgeUnitID : null;
        this.ConfigMapName = 'ConfigMapName' in params ? params.ConfigMapName : null;

        if (params.ConfigMapData) {
            this.ConfigMapData = new Array();
            for (let z in params.ConfigMapData) {
                let obj = new KeyValueObj();
                obj.deserialize(params.ConfigMapData[z]);
                this.ConfigMapData.push(obj);
            }
        }
        this.ConfigMapNamespace = 'ConfigMapNamespace' in params ? params.ConfigMapNamespace : null;

    }
}

/**
 * DescribeEdgeUnitDeployGrid返回参数结构体
 * @class
 */
class DescribeEdgeUnitDeployGridResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Grid列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GridInfo> || null}
         */
        this.GridSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.GridSet) {
            this.GridSet = new Array();
            for (let z in params.GridSet) {
                let obj = new GridInfo();
                obj.deserialize(params.GridSet[z]);
                this.GridSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyEdgeUnitCloudApi返回参数结构体
 * @class
 */
class ModifyEdgeUnitCloudApiResponse extends  AbstractModel {
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
 * CreateUpdateNodeUnit返回参数结构体
 * @class
 */
class CreateUpdateNodeUnitResponse extends  AbstractModel {
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
 * ModifyEdgeUnitApplicationVisualization返回参数结构体
 * @class
 */
class ModifyEdgeUnitApplicationVisualizationResponse extends  AbstractModel {
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
 * DeleteEdgeNodes返回参数结构体
 * @class
 */
class DeleteEdgeNodesResponse extends  AbstractModel {
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
 * 边缘节点Pod容器信息
 * @class
 */
class EdgeNodePodContainerInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pod名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 容器ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 镜像（含版本号）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Image = null;

        /**
         * CPU Request
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CpuRequest = null;

        /**
         * CPU Limit
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CpuLimit = null;

        /**
         * Memory Request
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MemoryRequest = null;

        /**
         * Memory Limit
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MemoryLimit = null;

        /**
         * 重启次数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RestartCount = null;

        /**
         * 容器状态
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Image = 'Image' in params ? params.Image : null;
        this.CpuRequest = 'CpuRequest' in params ? params.CpuRequest : null;
        this.CpuLimit = 'CpuLimit' in params ? params.CpuLimit : null;
        this.MemoryRequest = 'MemoryRequest' in params ? params.MemoryRequest : null;
        this.MemoryLimit = 'MemoryLimit' in params ? params.MemoryLimit : null;
        this.RestartCount = 'RestartCount' in params ? params.RestartCount : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * BuildMessageRoute请求参数结构体
 * @class
 */
class BuildMessageRouteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由名字
         * @type {string || null}
         */
        this.RouteName = null;

        /**
         * 源产品id
         * @type {string || null}
         */
        this.SourceProductID = null;

        /**
         * 源设备名列表
         * @type {Array.<string> || null}
         */
        this.SourceDeviceNameList = null;

        /**
         * 第一个字符为 "0"或"1"，"1"表示自定义topic
         * @type {string || null}
         */
        this.TopicFilter = null;

        /**
         * http或mqtt-broker
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 源单元id列表
         * @type {Array.<string> || null}
         */
        this.SourceUnitIDList = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Descript = null;

        /**
         * 无
         * @type {string || null}
         */
        this.TargetOptions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteName = 'RouteName' in params ? params.RouteName : null;
        this.SourceProductID = 'SourceProductID' in params ? params.SourceProductID : null;
        this.SourceDeviceNameList = 'SourceDeviceNameList' in params ? params.SourceDeviceNameList : null;
        this.TopicFilter = 'TopicFilter' in params ? params.TopicFilter : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.SourceUnitIDList = 'SourceUnitIDList' in params ? params.SourceUnitIDList : null;
        this.Descript = 'Descript' in params ? params.Descript : null;
        this.TargetOptions = 'TargetOptions' in params ? params.TargetOptions : null;

    }
}

/**
 * Grid事件信息
 * @class
 */
class GridEventInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 首次出现时间
         * @type {string || null}
         */
        this.FirstTime = null;

        /**
         * 最后出现时间
         * @type {string || null}
         */
        this.LastTime = null;

        /**
         * 对象类型
         * @type {string || null}
         */
        this.InvolvedObjectKind = null;

        /**
         * 对象名称
         * @type {string || null}
         */
        this.InvolvedObjectName = null;

        /**
         * 事件类型(Normal,Warning)
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 事件原因
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * 事件内容
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 次数
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 节点名（Pod事件类型时有值）
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * 节点内部IP（Pod事件类型时有值）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IP = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FirstTime = 'FirstTime' in params ? params.FirstTime : null;
        this.LastTime = 'LastTime' in params ? params.LastTime : null;
        this.InvolvedObjectKind = 'InvolvedObjectKind' in params ? params.InvolvedObjectKind : null;
        this.InvolvedObjectName = 'InvolvedObjectName' in params ? params.InvolvedObjectName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.IP = 'IP' in params ? params.IP : null;

    }
}

/**
 * 资源目标指标
 * @class
 */
class ResourceMetricTarget extends  AbstractModel {
    constructor(){
        super();

        /**
         * 类型(cpu|memory)
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 平均值
         * @type {number || null}
         */
        this.AverageValue = null;

        /**
         * 单位
         * @type {string || null}
         */
        this.Scale = null;

        /**
         * 平均值
         * @type {number || null}
         */
        this.AverageUtilization = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.AverageValue = 'AverageValue' in params ? params.AverageValue : null;
        this.Scale = 'Scale' in params ? params.Scale : null;
        this.AverageUtilization = 'AverageUtilization' in params ? params.AverageUtilization : null;

    }
}

/**
 * DescribeEdgeNodePodContainers请求参数结构体
 * @class
 */
class DescribeEdgeNodePodContainersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IECP边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * 节点ID
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * Pod名称
         * @type {string || null}
         */
        this.PodName = null;

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
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.PodName = 'PodName' in params ? params.PodName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * DescribeEdgeUnitApplicationEvents返回参数结构体
 * @class
 */
class DescribeEdgeUnitApplicationEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Event> || null}
         */
        this.EventSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EventSet) {
            this.EventSet = new Array();
            for (let z in params.EventSet) {
                let obj = new Event();
                obj.deserialize(params.EventSet[z]);
                this.EventSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySecret请求参数结构体
 * @class
 */
class ModifySecretRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitID = null;

        /**
         * Secret名
         * @type {string || null}
         */
        this.SecretName = null;

        /**
         * Secret的Yaml格式
         * @type {string || null}
         */
        this.Yaml = null;

        /**
         * Secret命名空间（默认:default）
         * @type {string || null}
         */
        this.SecretNamespace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitID = 'EdgeUnitID' in params ? params.EdgeUnitID : null;
        this.SecretName = 'SecretName' in params ? params.SecretName : null;
        this.Yaml = 'Yaml' in params ? params.Yaml : null;
        this.SecretNamespace = 'SecretNamespace' in params ? params.SecretNamespace : null;

    }
}

/**
 * DeleteEdgeUnitPod返回参数结构体
 * @class
 */
class DeleteEdgeUnitPodResponse extends  AbstractModel {
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
 * 探针配置
 * @class
 */
class Probe extends  AbstractModel {
    constructor(){
        super();

        /**
         * 启动后，延迟探测时间 单位:秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InitialDelaySeconds = null;

        /**
         * 探测间隔，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PeriodSeconds = null;

        /**
         * 探测超时时间 单位：秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TimeoutSeconds = null;

        /**
         * 失败后检查成功的最小连续成功次数。默认为1.活跃度必须为1。最小值为1
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SuccessThreshold = null;

        /**
         * 当Pod成功启动且检查失败时，放弃之前尝试次数。默认为3.最小值为1
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FailureThreshold = null;

        /**
         * HTTP探测配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {HttpProbe || null}
         */
        this.HttpProbe = null;

        /**
         * TCP探测配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TcpProbe || null}
         */
        this.TcpProbe = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InitialDelaySeconds = 'InitialDelaySeconds' in params ? params.InitialDelaySeconds : null;
        this.PeriodSeconds = 'PeriodSeconds' in params ? params.PeriodSeconds : null;
        this.TimeoutSeconds = 'TimeoutSeconds' in params ? params.TimeoutSeconds : null;
        this.SuccessThreshold = 'SuccessThreshold' in params ? params.SuccessThreshold : null;
        this.FailureThreshold = 'FailureThreshold' in params ? params.FailureThreshold : null;

        if (params.HttpProbe) {
            let obj = new HttpProbe();
            obj.deserialize(params.HttpProbe)
            this.HttpProbe = obj;
        }

        if (params.TcpProbe) {
            let obj = new TcpProbe();
            obj.deserialize(params.TcpProbe)
            this.TcpProbe = obj;
        }

    }
}

/**
 * 容器配置信息
 * @class
 */
class Container extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 镜像名
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 镜像版本
         * @type {string || null}
         */
        this.ImageVersion = null;

        /**
         * 镜像拉取策略(Always|Never|IfNotPresent)
         * @type {string || null}
         */
        this.ImagePullPolicy = null;

        /**
         * 卷挂载配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VolumeMount> || null}
         */
        this.VolumeMounts = null;

        /**
         * cpu最低配置
         * @type {string || null}
         */
        this.CpuRequest = null;

        /**
         * cpu最高限制
         * @type {string || null}
         */
        this.CpuLimit = null;

        /**
         * 内存最低要求
         * @type {string || null}
         */
        this.MemoryRequest = null;

        /**
         * 内存最高要求
         * @type {string || null}
         */
        this.MemoryLimit = null;

        /**
         * 内存单位
         * @type {string || null}
         */
        this.MemoryUnit = null;

        /**
         * gpu最高限制
         * @type {string || null}
         */
        this.GpuLimit = null;

        /**
         * 资源配置
         * @type {Array.<KeyValueObj> || null}
         */
        this.ResourceMapCloud = null;

        /**
         * 环境配置
         * @type {Array.<Env> || null}
         */
        this.Envs = null;

        /**
         * 工作目录
         * @type {string || null}
         */
        this.WorkingDir = null;

        /**
         * 命令
         * @type {Array.<string> || null}
         */
        this.Commands = null;

        /**
         * 参数
         * @type {Array.<string> || null}
         */
        this.Args = null;

        /**
         * 安全配置
         * @type {SecurityContext || null}
         */
        this.SecurityContext = null;

        /**
         * 就绪探针配置
         * @type {Probe || null}
         */
        this.ReadinessProbe = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.ImageVersion = 'ImageVersion' in params ? params.ImageVersion : null;
        this.ImagePullPolicy = 'ImagePullPolicy' in params ? params.ImagePullPolicy : null;

        if (params.VolumeMounts) {
            this.VolumeMounts = new Array();
            for (let z in params.VolumeMounts) {
                let obj = new VolumeMount();
                obj.deserialize(params.VolumeMounts[z]);
                this.VolumeMounts.push(obj);
            }
        }
        this.CpuRequest = 'CpuRequest' in params ? params.CpuRequest : null;
        this.CpuLimit = 'CpuLimit' in params ? params.CpuLimit : null;
        this.MemoryRequest = 'MemoryRequest' in params ? params.MemoryRequest : null;
        this.MemoryLimit = 'MemoryLimit' in params ? params.MemoryLimit : null;
        this.MemoryUnit = 'MemoryUnit' in params ? params.MemoryUnit : null;
        this.GpuLimit = 'GpuLimit' in params ? params.GpuLimit : null;

        if (params.ResourceMapCloud) {
            this.ResourceMapCloud = new Array();
            for (let z in params.ResourceMapCloud) {
                let obj = new KeyValueObj();
                obj.deserialize(params.ResourceMapCloud[z]);
                this.ResourceMapCloud.push(obj);
            }
        }

        if (params.Envs) {
            this.Envs = new Array();
            for (let z in params.Envs) {
                let obj = new Env();
                obj.deserialize(params.Envs[z]);
                this.Envs.push(obj);
            }
        }
        this.WorkingDir = 'WorkingDir' in params ? params.WorkingDir : null;
        this.Commands = 'Commands' in params ? params.Commands : null;
        this.Args = 'Args' in params ? params.Args : null;

        if (params.SecurityContext) {
            let obj = new SecurityContext();
            obj.deserialize(params.SecurityContext)
            this.SecurityContext = obj;
        }

        if (params.ReadinessProbe) {
            let obj = new Probe();
            obj.deserialize(params.ReadinessProbe)
            this.ReadinessProbe = obj;
        }

    }
}

/**
 * DescribeEdgeUnitApplicationEvents请求参数结构体
 * @class
 */
class DescribeEdgeUnitApplicationEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * 应用ID
         * @type {number || null}
         */
        this.ApplicationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

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
         * IECP边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitID = null;

        /**
         * 边缘节点名称模糊搜索串
         * @type {string || null}
         */
        this.NamePattern = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitID = 'EdgeUnitID' in params ? params.EdgeUnitID : null;
        this.NamePattern = 'NamePattern' in params ? params.NamePattern : null;

    }
}

/**
 * DeleteIotDevice请求参数结构体
 * @class
 */
class DeleteIotDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备id
         * @type {number || null}
         */
        this.DeviceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;

    }
}

/**
 * DescribeEdgeNodeRemarkList返回参数结构体
 * @class
 */
class DescribeEdgeNodeRemarkListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 边缘单元内的备注列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Remarks = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Remarks = 'Remarks' in params ? params.Remarks : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * pod水平伸缩配置
 * @class
 */
class HorizontalPodAutoscaler extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 最小实例数
         * @type {number || null}
         */
        this.MinReplicas = null;

        /**
         * 最大实例数
         * @type {number || null}
         */
        this.MaxReplicas = null;

        /**
         * 资源目标指标
         * @type {Array.<ResourceMetricTarget> || null}
         */
        this.ResourceMetricTarget = null;

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
        this.MinReplicas = 'MinReplicas' in params ? params.MinReplicas : null;
        this.MaxReplicas = 'MaxReplicas' in params ? params.MaxReplicas : null;

        if (params.ResourceMetricTarget) {
            this.ResourceMetricTarget = new Array();
            for (let z in params.ResourceMetricTarget) {
                let obj = new ResourceMetricTarget();
                obj.deserialize(params.ResourceMetricTarget[z]);
                this.ResourceMetricTarget.push(obj);
            }
        }

    }
}

/**
 * 命名空间下资源描述
 * @class
 */
class NamespaceResource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 类型(workload|grid|configmap|secret)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 名称(最多返回5个）
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Names = 'Names' in params ? params.Names : null;

    }
}

/**
 * 节点在线安装信息
 * @class
 */
class EdgeNodeInstallerOnline extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点安装脚本名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScriptName = null;

        /**
         * 节点安装脚本下载链接
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScriptDownloadUrl = null;

        /**
         * 节点安装命令
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Guide = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScriptName = 'ScriptName' in params ? params.ScriptName : null;
        this.ScriptDownloadUrl = 'ScriptDownloadUrl' in params ? params.ScriptDownloadUrl : null;
        this.Guide = 'Guide' in params ? params.Guide : null;

    }
}

/**
 * DescribeEdgeUnitApplicationPodContainers返回参数结构体
 * @class
 */
class DescribeEdgeUnitApplicationPodContainersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ContainerStatus> || null}
         */
        this.ContainerSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ContainerSet) {
            this.ContainerSet = new Array();
            for (let z in params.ContainerSet) {
                let obj = new ContainerStatus();
                obj.deserialize(params.ContainerSet[z]);
                this.ContainerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyApplicationBasicInfo请求参数结构体
 * @class
 */
class ModifyApplicationBasicInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用模板ID
         * @type {number || null}
         */
        this.ApplicationId = null;

        /**
         * 应用模板基本信息
         * @type {ApplicationBasicInfo || null}
         */
        this.BasicInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;

        if (params.BasicInfo) {
            let obj = new ApplicationBasicInfo();
            obj.deserialize(params.BasicInfo)
            this.BasicInfo = obj;
        }

    }
}

/**
 * DescribeEdgeUnitNodeGroup返回参数结构体
 * @class
 */
class DescribeEdgeUnitNodeGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * NodeGroup数组
         * @type {Array.<NodeGroupInfo> || null}
         */
        this.NodeGroupInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.NodeGroupInfo) {
            this.NodeGroupInfo = new Array();
            for (let z in params.NodeGroupInfo) {
                let obj = new NodeGroupInfo();
                obj.deserialize(params.NodeGroupInfo[z]);
                this.NodeGroupInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEdgeOperationLogs返回参数结构体
 * @class
 */
class DescribeEdgeOperationLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 操作日志列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OperationLog> || null}
         */
        this.OperationLogSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.OperationLogSet) {
            this.OperationLogSet = new Array();
            for (let z in params.OperationLogSet) {
                let obj = new OperationLog();
                obj.deserialize(params.OperationLogSet[z]);
                this.OperationLogSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEdgeSnNodes请求参数结构体
 * @class
 */
class DescribeEdgeSnNodesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * 根据节点名称模糊匹配
         * @type {string || null}
         */
        this.NamePattern = null;

        /**
         * 根据设备SN模糊匹配
         * @type {string || null}
         */
        this.SNPattern = null;

        /**
         * 根据备注批次信息模糊匹配
         * @type {string || null}
         */
        this.RemarkPattern = null;

        /**
         * 默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 默认20
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
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.NamePattern = 'NamePattern' in params ? params.NamePattern : null;
        this.SNPattern = 'SNPattern' in params ? params.SNPattern : null;
        this.RemarkPattern = 'RemarkPattern' in params ? params.RemarkPattern : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DeleteEdgeUnitDeployGridItem请求参数结构体
 * @class
 */
class DeleteEdgeUnitDeployGridItemRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IECP边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * 负载类型（StatefulSetGrid｜DeploymentGrid）
         * @type {string || null}
         */
        this.WorkloadKind = null;

        /**
         * Grid部署名称
         * @type {string || null}
         */
        this.GridItemName = null;

        /**
         * 命名空间，默认default
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
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.WorkloadKind = 'WorkloadKind' in params ? params.WorkloadKind : null;
        this.GridItemName = 'GridItemName' in params ? params.GridItemName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * 安全上下文
 * @class
 */
class SecurityContext extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启特权模式
         * @type {boolean || null}
         */
        this.Privilege = null;

        /**
         * 目录/Proc挂载方式
         * @type {string || null}
         */
        this.ProcMount = null;

        /**
         * 安全配置
         * @type {SecurityCapabilities || null}
         */
        this.Capabilities = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Privilege = 'Privilege' in params ? params.Privilege : null;
        this.ProcMount = 'ProcMount' in params ? params.ProcMount : null;

        if (params.Capabilities) {
            let obj = new SecurityCapabilities();
            obj.deserialize(params.Capabilities)
            this.Capabilities = obj;
        }

    }
}

/**
 * 应用部署模式
 * @class
 */
class ApplicationDeployMode extends  AbstractModel {
    constructor(){
        super();

        /**
         * 1:指定节点部署 2:单元部署
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 资源ID
         * @type {number || null}
         */
        this.ResourceID = null;

        /**
         * 资源名
         * @type {string || null}
         */
        this.ResourceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.ResourceID = 'ResourceID' in params ? params.ResourceID : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;

    }
}

/**
 * CreateIotDevice返回参数结构体
 * @class
 */
class CreateIotDeviceResponse extends  AbstractModel {
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
 * CreateEdgeUnitDevices请求参数结构体
 * @class
 */
class CreateEdgeUnitDevicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * 无
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 无
         * @type {Array.<string> || null}
         */
        this.DeviceNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceNames = 'DeviceNames' in params ? params.DeviceNames : null;

    }
}

/**
 * ModifySecret返回参数结构体
 * @class
 */
class ModifySecretResponse extends  AbstractModel {
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
 * 查询结果排序条件
 * @class
 */
class Sort extends  AbstractModel {
    constructor(){
        super();

        /**
         * 排序字段
         * @type {string || null}
         */
        this.Field = null;

        /**
         * 排序方式，升序ASC / 降序DESC
         * @type {string || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Field = 'Field' in params ? params.Field : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * DescribeEdgeUnitDeployGridItemYaml返回参数结构体
 * @class
 */
class DescribeEdgeUnitDeployGridItemYamlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * yaml，base64编码字符串
         * @type {string || null}
         */
        this.Yaml = null;

        /**
         * 对应类型的副本数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Replicas = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Yaml = 'Yaml' in params ? params.Yaml : null;
        this.Replicas = 'Replicas' in params ? params.Replicas : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEdgeUnitApplicationVisualization返回参数结构体
 * @class
 */
class DescribeEdgeUnitApplicationVisualizationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 基本信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ApplicationBasicInfo || null}
         */
        this.BasicInfo = null;

        /**
         * 基本配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ApplicationBasicConfig || null}
         */
        this.BasicConfig = null;

        /**
         * 卷配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Volume> || null}
         */
        this.Volumes = null;

        /**
         * 初始化容器配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Container> || null}
         */
        this.InitContainers = null;

        /**
         * 容器配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Container> || null}
         */
        this.Containers = null;

        /**
         * 服务配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Service || null}
         */
        this.Service = null;

        /**
         * Job配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Job || null}
         */
        this.Job = null;

        /**
         * CronJob配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CronJob || null}
         */
        this.CronJob = null;

        /**
         * 重启策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RestartPolicy = null;

        /**
         * HPA
注意：此字段可能返回 null，表示取不到有效值。
         * @type {HorizontalPodAutoscaler || null}
         */
        this.HorizontalPodAutoscaler = null;

        /**
         * 镜像拉取Secret
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ImagePullSecrets = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BasicInfo) {
            let obj = new ApplicationBasicInfo();
            obj.deserialize(params.BasicInfo)
            this.BasicInfo = obj;
        }

        if (params.BasicConfig) {
            let obj = new ApplicationBasicConfig();
            obj.deserialize(params.BasicConfig)
            this.BasicConfig = obj;
        }

        if (params.Volumes) {
            this.Volumes = new Array();
            for (let z in params.Volumes) {
                let obj = new Volume();
                obj.deserialize(params.Volumes[z]);
                this.Volumes.push(obj);
            }
        }

        if (params.InitContainers) {
            this.InitContainers = new Array();
            for (let z in params.InitContainers) {
                let obj = new Container();
                obj.deserialize(params.InitContainers[z]);
                this.InitContainers.push(obj);
            }
        }

        if (params.Containers) {
            this.Containers = new Array();
            for (let z in params.Containers) {
                let obj = new Container();
                obj.deserialize(params.Containers[z]);
                this.Containers.push(obj);
            }
        }

        if (params.Service) {
            let obj = new Service();
            obj.deserialize(params.Service)
            this.Service = obj;
        }

        if (params.Job) {
            let obj = new Job();
            obj.deserialize(params.Job)
            this.Job = obj;
        }

        if (params.CronJob) {
            let obj = new CronJob();
            obj.deserialize(params.CronJob)
            this.CronJob = obj;
        }
        this.RestartPolicy = 'RestartPolicy' in params ? params.RestartPolicy : null;

        if (params.HorizontalPodAutoscaler) {
            let obj = new HorizontalPodAutoscaler();
            obj.deserialize(params.HorizontalPodAutoscaler)
            this.HorizontalPodAutoscaler = obj;
        }
        this.ImagePullSecrets = 'ImagePullSecrets' in params ? params.ImagePullSecrets : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIotDevice返回参数结构体
 * @class
 */
class DescribeIotDeviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备id
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 版本号
         * @type {string || null}
         */
        this.Version = null;

        /**
         * ssl证书
         * @type {string || null}
         */
        this.Cert = null;

        /**
         * ssl私钥
         * @type {string || null}
         */
        this.PrivateKey = null;

        /**
         * psk认证密钥
         * @type {string || null}
         */
        this.Psk = null;

        /**
         * 设备是否打开
         * @type {boolean || null}
         */
        this.Disabled = null;

        /**
         * 设备日志
         * @type {number || null}
         */
        this.LogSetting = null;

        /**
         * 设备日志级别
         * @type {number || null}
         */
        this.LogLevel = null;

        /**
         * mqtt参数
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * mqtt参数
         * @type {string || null}
         */
        this.Password = null;

        /**
         * mqtt参数
         * @type {string || null}
         */
        this.ClientID = null;

        /**
         * 16进制的psk格式
         * @type {string || null}
         */
        this.PskHex = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 设备在线状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 无
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 无
         * @type {number || null}
         */
        this.UnitID = null;

        /**
         * 无
         * @type {string || null}
         */
        this.UnitName = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Version = 'Version' in params ? params.Version : null;
        this.Cert = 'Cert' in params ? params.Cert : null;
        this.PrivateKey = 'PrivateKey' in params ? params.PrivateKey : null;
        this.Psk = 'Psk' in params ? params.Psk : null;
        this.Disabled = 'Disabled' in params ? params.Disabled : null;
        this.LogSetting = 'LogSetting' in params ? params.LogSetting : null;
        this.LogLevel = 'LogLevel' in params ? params.LogLevel : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.ClientID = 'ClientID' in params ? params.ClientID : null;
        this.PskHex = 'PskHex' in params ? params.PskHex : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.UnitID = 'UnitID' in params ? params.UnitID : null;
        this.UnitName = 'UnitName' in params ? params.UnitName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEdgePod请求参数结构体
 * @class
 */
class DescribeEdgePodRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IECP边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * 命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Pod名称
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
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DescribeNamespaceResources请求参数结构体
 * @class
 */
class DescribeNamespaceResourcesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单元ID
         * @type {number || null}
         */
        this.EdgeUnitID = null;

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
        this.EdgeUnitID = 'EdgeUnitID' in params ? params.EdgeUnitID : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * DescribeMonitorMetrics请求参数结构体
 * @class
 */
class DescribeMonitorMetricsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IECP边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * 查询维度
         * @type {string || null}
         */
        this.QueryType = null;

        /**
         * 起始时间Unix秒时间戳
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 终止时间Unix秒时间戳
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 步长（分钟）
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * 节点名称，查询节点监控时必填
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * 命名空间，不填则默认为default
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * Pod名称，查询Pod监控时必填
         * @type {string || null}
         */
        this.PodName = null;

        /**
         * Workload名称，查询Workload监控时必填
         * @type {string || null}
         */
        this.WorkloadName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.QueryType = 'QueryType' in params ? params.QueryType : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.PodName = 'PodName' in params ? params.PodName : null;
        this.WorkloadName = 'WorkloadName' in params ? params.WorkloadName : null;

    }
}

/**
 * ModifyNodeUnitTemplate返回参数结构体
 * @class
 */
class ModifyNodeUnitTemplateResponse extends  AbstractModel {
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
 * 卷
 * @class
 */
class Volume extends  AbstractModel {
    constructor(){
        super();

        /**
         * 来源(emptyDir|hostPath|configMap|secret|nfs)
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Host挂载配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {VolumeHostPath || null}
         */
        this.HostPath = null;

        /**
         * ConfigMap挂载配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {VolumeConfigMap || null}
         */
        this.ConfigMap = null;

        /**
         * Secret挂载配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {VolumeConfigMap || null}
         */
        this.Secret = null;

        /**
         * NFS挂载配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {VolumeNFS || null}
         */
        this.NFS = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Source = 'Source' in params ? params.Source : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.HostPath) {
            let obj = new VolumeHostPath();
            obj.deserialize(params.HostPath)
            this.HostPath = obj;
        }

        if (params.ConfigMap) {
            let obj = new VolumeConfigMap();
            obj.deserialize(params.ConfigMap)
            this.ConfigMap = obj;
        }

        if (params.Secret) {
            let obj = new VolumeConfigMap();
            obj.deserialize(params.Secret)
            this.Secret = obj;
        }

        if (params.NFS) {
            let obj = new VolumeNFS();
            obj.deserialize(params.NFS)
            this.NFS = obj;
        }

    }
}

/**
 * DescribeApplications请求参数结构体
 * @class
 */
class DescribeApplicationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模糊搜索字符串
         * @type {string || null}
         */
        this.NamePattern = null;

        /**
         * 默认 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 默认 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 仅支持对 DistributeTime 字段排序，ASC/DESC
         * @type {Array.<FieldSort> || null}
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
        this.NamePattern = 'NamePattern' in params ? params.NamePattern : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Sort) {
            this.Sort = new Array();
            for (let z in params.Sort) {
                let obj = new FieldSort();
                obj.deserialize(params.Sort[z]);
                this.Sort.push(obj);
            }
        }

    }
}

/**
 * DescribeEdgeOperationLogs请求参数结构体
 * @class
 */
class DescribeEdgeOperationLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 翻页大小
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序字段
         * @type {Array.<FieldSort> || null}
         */
        this.Sort = null;

        /**
         * 模块
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 过滤条件
         * @type {OperationLogsCondition || null}
         */
        this.Condition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Sort) {
            this.Sort = new Array();
            for (let z in params.Sort) {
                let obj = new FieldSort();
                obj.deserialize(params.Sort[z]);
                this.Sort.push(obj);
            }
        }
        this.Module = 'Module' in params ? params.Module : null;

        if (params.Condition) {
            let obj = new OperationLogsCondition();
            obj.deserialize(params.Condition)
            this.Condition = obj;
        }

    }
}

/**
 * Grid部署应用信息
 * @class
 */
class GridItemInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 期望副本数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Replicas = null;

        /**
         * 可用副本数
         * @type {number || null}
         */
        this.AvailableReplicas = null;

        /**
         * 启动时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 工作负载类型
         * @type {string || null}
         */
        this.WorkloadKind = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Replicas = 'Replicas' in params ? params.Replicas : null;
        this.AvailableReplicas = 'AvailableReplicas' in params ? params.AvailableReplicas : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.WorkloadKind = 'WorkloadKind' in params ? params.WorkloadKind : null;

    }
}

/**
 * SetRouteOnOff返回参数结构体
 * @class
 */
class SetRouteOnOffResponse extends  AbstractModel {
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
 * 边缘节点标签
 * @class
 */
class EdgeNodeLabel extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 标签值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 是否受保护
         * @type {boolean || null}
         */
        this.Protected = null;

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
        this.Protected = 'Protected' in params ? params.Protected : null;

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
         * 单元ID
         * @type {number || null}
         */
        this.EdgeUnitID = null;

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
        this.EdgeUnitID = 'EdgeUnitID' in params ? params.EdgeUnitID : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

    }
}

/**
 * 边缘节点信息
 * @class
 */
class EdgeNodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * IECP边缘节点ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 节点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 节点状态 （1健康｜2异常｜3离线｜4未激活）
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 节点资源信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EdgeNodeResourceInfo || null}
         */
        this.Resource = null;

        /**
         * CPU体系结构
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CpuArchitecture = null;

        /**
         * IP地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 操作系统
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OperatingSystem = null;

        /**
         * 节点所属的NodeUnit
key：NodeUnit模版ID，Value：NodeUnit模版名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {KeyValueObj || null}
         */
        this.NodeUnits = null;

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
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.Resource) {
            let obj = new EdgeNodeResourceInfo();
            obj.deserialize(params.Resource)
            this.Resource = obj;
        }
        this.CpuArchitecture = 'CpuArchitecture' in params ? params.CpuArchitecture : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.OperatingSystem = 'OperatingSystem' in params ? params.OperatingSystem : null;

        if (params.NodeUnits) {
            let obj = new KeyValueObj();
            obj.deserialize(params.NodeUnits)
            this.NodeUnits = obj;
        }

    }
}

/**
 * GetMarketComponent请求参数结构体
 * @class
 */
class GetMarketComponentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组件ID
         * @type {number || null}
         */
        this.ID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;

    }
}

/**
 * HTTP探测配置
 * @class
 */
class HttpProbe extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 请求端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 请求地址，默认Pod的IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 请求模式  HTTP|HTTPS，默认HTTP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Scheme = null;

        /**
         * HTTP的请求头
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<HttpHeader> || null}
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
        this.Path = 'Path' in params ? params.Path : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Scheme = 'Scheme' in params ? params.Scheme : null;

        if (params.Headers) {
            this.Headers = new Array();
            for (let z in params.Headers) {
                let obj = new HttpHeader();
                obj.deserialize(params.Headers[z]);
                this.Headers.push(obj);
            }
        }

    }
}

/**
 * DeleteMessageRoute返回参数结构体
 * @class
 */
class DeleteMessageRouteResponse extends  AbstractModel {
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
 * DescribeEdgeUnitDeployGrid请求参数结构体
 * @class
 */
class DescribeEdgeUnitDeployGridRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IECP边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * 命名空间，默认为default
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 模糊匹配
         * @type {string || null}
         */
        this.NamePattern = null;

        /**
         * 分页offset，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页limit，默认为20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序，默认为ASC
         * @type {string || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.NamePattern = 'NamePattern' in params ? params.NamePattern : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * ApplyMarketComponent返回参数结构体
 * @class
 */
class ApplyMarketComponentResponse extends  AbstractModel {
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
 * DescribeApplicationYamlError返回参数结构体
 * @class
 */
class DescribeApplicationYamlErrorResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否通过
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.CheckPass = null;

        /**
         * 错误类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ErrType = null;

        /**
         * 错误信息
         * @type {string || null}
         */
        this.ErrInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CheckPass = 'CheckPass' in params ? params.CheckPass : null;
        this.ErrType = 'ErrType' in params ? params.ErrType : null;
        this.ErrInfo = 'ErrInfo' in params ? params.ErrInfo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteIotDeviceBatch返回参数结构体
 * @class
 */
class DeleteIotDeviceBatchResponse extends  AbstractModel {
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
 * CreateEdgeNode返回参数结构体
 * @class
 */
class CreateEdgeNodeResponse extends  AbstractModel {
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
 * DeleteEdgeNodes请求参数结构体
 * @class
 */
class DeleteEdgeNodesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IECP边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * IECP边缘节点ID列表
         * @type {Array.<number> || null}
         */
        this.NodeIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.NodeIds = 'NodeIds' in params ? params.NodeIds : null;

    }
}

/**
 * DescribeApplicationYamlError请求参数结构体
 * @class
 */
class DescribeApplicationYamlErrorRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Yaml配置
         * @type {string || null}
         */
        this.Yaml = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Yaml = 'Yaml' in params ? params.Yaml : null;

    }
}

/**
 * 端口配置
 * @class
 */
class PortConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 协议类型(tcp|udp)
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 源端口
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 目标端口
         * @type {number || null}
         */
        this.TargetPort = null;

        /**
         * 节点端口
         * @type {number || null}
         */
        this.NodePort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.TargetPort = 'TargetPort' in params ? params.TargetPort : null;
        this.NodePort = 'NodePort' in params ? params.NodePort : null;

    }
}

/**
 * DescribeYeheResourceLimit请求参数结构体
 * @class
 */
class DescribeYeheResourceLimitRequest extends  AbstractModel {
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
 * DescribeIotDevices返回参数结构体
 * @class
 */
class DescribeIotDevicesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合查找条件的总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 设备列表
         * @type {Array.<IotDevicesInfo> || null}
         */
        this.DeviceSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.DeviceSet) {
            this.DeviceSet = new Array();
            for (let z in params.DeviceSet) {
                let obj = new IotDevicesInfo();
                obj.deserialize(params.DeviceSet[z]);
                this.DeviceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSecrets请求参数结构体
 * @class
 */
class DescribeSecretsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitID = null;

        /**
         * 页号
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页数目
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 命名空间
         * @type {string || null}
         */
        this.SecretNamespace = null;

        /**
         * Secret名(模糊匹配)
         * @type {string || null}
         */
        this.NamePattern = null;

        /**
         * Sort.Field:CreateTime Sort.Order:ASC|DESC
         * @type {FieldSort || null}
         */
        this.Sort = null;

        /**
         * Secret类型(DockerConfigJson或Opaque)
         * @type {string || null}
         */
        this.SecretType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitID = 'EdgeUnitID' in params ? params.EdgeUnitID : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SecretNamespace = 'SecretNamespace' in params ? params.SecretNamespace : null;
        this.NamePattern = 'NamePattern' in params ? params.NamePattern : null;

        if (params.Sort) {
            let obj = new FieldSort();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }
        this.SecretType = 'SecretType' in params ? params.SecretType : null;

    }
}

/**
 * DescribeNodeUnitTemplateOnNodeGroup请求参数结构体
 * @class
 */
class DescribeNodeUnitTemplateOnNodeGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IECP边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * NodeGroup名称
         * @type {string || null}
         */
        this.NodeGroupName = null;

        /**
         * 命名空间，默认default
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 名称模糊匹配
         * @type {string || null}
         */
        this.NodeUnitNamePattern = null;

        /**
         * 分页查询offset，默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页查询limit，默认20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序，默认DESC
         * @type {string || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.NodeGroupName = 'NodeGroupName' in params ? params.NodeGroupName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.NodeUnitNamePattern = 'NodeUnitNamePattern' in params ? params.NodeUnitNamePattern : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * 监控数据列
 * @class
 */
class MonitorMetricsColumn extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据名称
         * @type {string || null}
         */
        this.ColumnName = null;

        /**
         * 数据内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ColumnData = null;

        /**
         * 数据所属，查询Workload类型时有值
         * @type {string || null}
         */
        this.ColumnBelong = null;

        /**
         * 最大值
         * @type {number || null}
         */
        this.MaxValue = null;

        /**
         * 最小值
         * @type {number || null}
         */
        this.MinValue = null;

        /**
         * 平均值
         * @type {number || null}
         */
        this.AvgValue = null;

        /**
         * 时间戳数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ColumnTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ColumnName = 'ColumnName' in params ? params.ColumnName : null;
        this.ColumnData = 'ColumnData' in params ? params.ColumnData : null;
        this.ColumnBelong = 'ColumnBelong' in params ? params.ColumnBelong : null;
        this.MaxValue = 'MaxValue' in params ? params.MaxValue : null;
        this.MinValue = 'MinValue' in params ? params.MinValue : null;
        this.AvgValue = 'AvgValue' in params ? params.AvgValue : null;
        this.ColumnTime = 'ColumnTime' in params ? params.ColumnTime : null;

    }
}

/**
 * DescribeEdgeNode请求参数结构体
 * @class
 */
class DescribeEdgeNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IECP边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * IECP边缘节点ID
         * @type {number || null}
         */
        this.NodeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.NodeId = 'NodeId' in params ? params.NodeId : null;

    }
}

/**
 * DescribeNodeUnit请求参数结构体
 * @class
 */
class DescribeNodeUnitRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * NodeUnit所属的NodeGroup名称
         * @type {string || null}
         */
        this.NodeGroupName = null;

        /**
         * 命名空间，默认default
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 分页查询limit，默认20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页查询offset，默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 模糊匹配
         * @type {string || null}
         */
        this.NameFilter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.NodeGroupName = 'NodeGroupName' in params ? params.NodeGroupName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.NameFilter = 'NameFilter' in params ? params.NameFilter : null;

    }
}

/**
 * DeleteNodeUnit请求参数结构体
 * @class
 */
class DeleteNodeUnitRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IECP边缘单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * NodeUnit所属的NodeGroup名称
         * @type {string || null}
         */
        this.NodeGroupName = null;

        /**
         * NodeUnit名称
         * @type {string || null}
         */
        this.NodeUnitName = null;

        /**
         * 命名空间，默认为default
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * NodeUnit包含的节点列表
         * @type {Array.<string> || null}
         */
        this.Nodes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.NodeGroupName = 'NodeGroupName' in params ? params.NodeGroupName : null;
        this.NodeUnitName = 'NodeUnitName' in params ? params.NodeUnitName : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Nodes = 'Nodes' in params ? params.Nodes : null;

    }
}

/**
 * ModifyEdgeUnitApplicationYaml返回参数结构体
 * @class
 */
class ModifyEdgeUnitApplicationYamlResponse extends  AbstractModel {
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
 * 边缘节点资源信息
 * @class
 */
class EdgeNodeResourceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可使用的CPU 单位: m核
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AllocatedCPU = null;

        /**
         * CPU总量 单位:m核
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TotalCPU = null;

        /**
         * 已分配的内存 单位G
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AllocatedMemory = null;

        /**
         * 内存总量 单位G
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TotalMemory = null;

        /**
         * 已分配的GPU资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AllocatedGPU = null;

        /**
         * GPU总量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TotalGPU = null;

        /**
         * 可使用的CPU 单位: m核
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AvailableCPU = null;

        /**
         * 可使用的内存 单位: G
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AvailableMemory = null;

        /**
         * 可使用的GPU资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AvailableGPU = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AllocatedCPU = 'AllocatedCPU' in params ? params.AllocatedCPU : null;
        this.TotalCPU = 'TotalCPU' in params ? params.TotalCPU : null;
        this.AllocatedMemory = 'AllocatedMemory' in params ? params.AllocatedMemory : null;
        this.TotalMemory = 'TotalMemory' in params ? params.TotalMemory : null;
        this.AllocatedGPU = 'AllocatedGPU' in params ? params.AllocatedGPU : null;
        this.TotalGPU = 'TotalGPU' in params ? params.TotalGPU : null;
        this.AvailableCPU = 'AvailableCPU' in params ? params.AvailableCPU : null;
        this.AvailableMemory = 'AvailableMemory' in params ? params.AvailableMemory : null;
        this.AvailableGPU = 'AvailableGPU' in params ? params.AvailableGPU : null;

    }
}

/**
 * 安全能力
 * @class
 */
class SecurityCapabilities extends  AbstractModel {
    constructor(){
        super();

        /**
         * 允许操作列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Add = null;

        /**
         * 禁止操作列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Drop = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Add = 'Add' in params ? params.Add : null;
        this.Drop = 'Drop' in params ? params.Drop : null;

    }
}

/**
 * DeleteEdgeNodeUnitTemplates返回参数结构体
 * @class
 */
class DeleteEdgeNodeUnitTemplatesResponse extends  AbstractModel {
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
 * ModifyEdgeDracoNode返回参数结构体
 * @class
 */
class ModifyEdgeDracoNodeResponse extends  AbstractModel {
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
 * DescribeEdgeNode返回参数结构体
 * @class
 */
class DescribeEdgeNodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 节点类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * 节点名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 节点状态 （1健康｜2异常｜3离线｜4未激活）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * CPU体系结构
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CpuArchitecture = null;

        /**
         * AI处理器体系结构
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AiChipArchitecture = null;

        /**
         * IP地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 节点标签列表
         * @type {Array.<EdgeNodeLabel> || null}
         */
        this.Labels = null;

        /**
         * 节点资源信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EdgeNodeResourceInfo || null}
         */
        this.Resource = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CpuArchitecture = 'CpuArchitecture' in params ? params.CpuArchitecture : null;
        this.AiChipArchitecture = 'AiChipArchitecture' in params ? params.AiChipArchitecture : null;
        this.Ip = 'Ip' in params ? params.Ip : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new EdgeNodeLabel();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.Resource) {
            let obj = new EdgeNodeResourceInfo();
            obj.deserialize(params.Resource)
            this.Resource = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyEdgeUnitApplicationYaml请求参数结构体
 * @class
 */
class ModifyEdgeUnitApplicationYamlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单元ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

        /**
         * 应用ID
         * @type {number || null}
         */
        this.ApplicationId = null;

        /**
         * Yaml配置
         * @type {string || null}
         */
        this.Yaml = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.Yaml = 'Yaml' in params ? params.Yaml : null;

    }
}

/**
 * DeleteEdgeUnitCloud请求参数结构体
 * @class
 */
class DeleteEdgeUnitCloudRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 边缘集群ID
         * @type {number || null}
         */
        this.EdgeUnitId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EdgeUnitId = 'EdgeUnitId' in params ? params.EdgeUnitId : null;

    }
}

/**
 * CreateEdgeUnitCloud请求参数结构体
 * @class
 */
class CreateEdgeUnitCloudRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群名称，长度小于32
         * @type {string || null}
         */
        this.Name = null;

        /**
         * k8s版本，仅支持1.16.7 和 1.18.2
         * @type {string || null}
         */
        this.K8sVersion = null;

        /**
         * 私有网络ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 集群描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 集群pod cidr， 默认  10.1.0.0/16
         * @type {string || null}
         */
        this.PodCIDR = null;

        /**
         * 集群service cidr, 默认 10.2.0.0/16
         * @type {string || null}
         */
        this.ServiceCIDR = null;

        /**
         * 是否开启监控。目前内存中权限开启联系产品开通白名单
         * @type {boolean || null}
         */
        this.OpenCloudMonitor = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.K8sVersion = 'K8sVersion' in params ? params.K8sVersion : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.PodCIDR = 'PodCIDR' in params ? params.PodCIDR : null;
        this.ServiceCIDR = 'ServiceCIDR' in params ? params.ServiceCIDR : null;
        this.OpenCloudMonitor = 'OpenCloudMonitor' in params ? params.OpenCloudMonitor : null;

    }
}

/**
 * DescribeEdgeUnitGridPods返回参数结构体
 * @class
 */
class DescribeEdgeUnitGridPodsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pod列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GridPodInfo> || null}
         */
        this.PodSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PodSet) {
            this.PodSet = new Array();
            for (let z in params.PodSet) {
                let obj = new GridPodInfo();
                obj.deserialize(params.PodSet[z]);
                this.PodSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeConfigMapYamlError请求参数结构体
 * @class
 */
class DescribeConfigMapYamlErrorRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * yaml文件
         * @type {string || null}
         */
        this.Yaml = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Yaml = 'Yaml' in params ? params.Yaml : null;

    }
}

/**
 * ModifyEdgeUnitApplicationBasicInfo返回参数结构体
 * @class
 */
class ModifyEdgeUnitApplicationBasicInfoResponse extends  AbstractModel {
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
 * SetRouteOnOff请求参数结构体
 * @class
 */
class SetRouteOnOffRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {number || null}
         */
        this.RouteID = null;

        /**
         * on 或 off
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
        this.RouteID = 'RouteID' in params ? params.RouteID : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

module.exports = {
    DescribeApplicationYamlResponse: DescribeApplicationYamlResponse,
    OperationLogsCondition: OperationLogsCondition,
    RedeployEdgeUnitApplicationResponse: RedeployEdgeUnitApplicationResponse,
    CreateEdgeUnitCloudResponse: CreateEdgeUnitCloudResponse,
    ModifyEdgeUnitApplicationBasicInfoRequest: ModifyEdgeUnitApplicationBasicInfoRequest,
    CreateEdgeNodeGroupRequest: CreateEdgeNodeGroupRequest,
    CreateEdgeUnitApplicationVisualizationRequest: CreateEdgeUnitApplicationVisualizationRequest,
    GridPodInfo: GridPodInfo,
    CreateSecretRequest: CreateSecretRequest,
    DescribeEdgeUnitApplicationYamlRequest: DescribeEdgeUnitApplicationYamlRequest,
    CreateEdgeUnitApplicationVisualizationResponse: CreateEdgeUnitApplicationVisualizationResponse,
    CreateEdgeNodeBatchResponse: CreateEdgeNodeBatchResponse,
    DescribeNamespacesResponse: DescribeNamespacesResponse,
    DescribeSecretResponse: DescribeSecretResponse,
    NodeUnitTemplate: NodeUnitTemplate,
    DescribeSecretYamlErrorResponse: DescribeSecretYamlErrorResponse,
    ModifyEdgeUnitDeployGridItemRequest: ModifyEdgeUnitDeployGridItemRequest,
    NodeGroupNodeUnitTemplateInfo: NodeGroupNodeUnitTemplateInfo,
    DescribeEdgeUnitMonitorStatusRequest: DescribeEdgeUnitMonitorStatusRequest,
    GetMarketComponentResponse: GetMarketComponentResponse,
    CreateApplicationVisualizationRequest: CreateApplicationVisualizationRequest,
    NodeUnitNodeInfo: NodeUnitNodeInfo,
    DeleteNodeUnitResponse: DeleteNodeUnitResponse,
    VolumeNFS: VolumeNFS,
    Service: Service,
    DescribeEdgeUnitApplicationsResponse: DescribeEdgeUnitApplicationsResponse,
    DescribeNodeUnitTemplateOnNodeGroupResponse: DescribeNodeUnitTemplateOnNodeGroupResponse,
    ApplicationStatusInfo: ApplicationStatusInfo,
    DescribeEdgeUnitGridEventsResponse: DescribeEdgeUnitGridEventsResponse,
    IotDevicesInfo: IotDevicesInfo,
    DescribeEdgeUnitApplicationYamlErrorResponse: DescribeEdgeUnitApplicationYamlErrorResponse,
    DeleteEdgeUnitCloudResponse: DeleteEdgeUnitCloudResponse,
    ModifyConfigMapRequest: ModifyConfigMapRequest,
    ApplicationBasicConfig: ApplicationBasicConfig,
    VolumeMount: VolumeMount,
    ModifyApplicationBasicInfoResponse: ModifyApplicationBasicInfoResponse,
    DeleteEdgeUnitDeployGridItemResponse: DeleteEdgeUnitDeployGridItemResponse,
    DescribeApplicationVisualizationRequest: DescribeApplicationVisualizationRequest,
    DescribeEdgeSnNodesResponse: DescribeEdgeSnNodesResponse,
    DescribeEdgeUnitApplicationsRequest: DescribeEdgeUnitApplicationsRequest,
    DescribeEdgeUnitApplicationYamlResponse: DescribeEdgeUnitApplicationYamlResponse,
    DescribeConfigMapYamlErrorResponse: DescribeConfigMapYamlErrorResponse,
    DescribeConfigMapResponse: DescribeConfigMapResponse,
    GetMarketComponentListRequest: GetMarketComponentListRequest,
    DescribeApplicationYamlRequest: DescribeApplicationYamlRequest,
    ModifyApplicationVisualizationRequest: ModifyApplicationVisualizationRequest,
    DescribeEdgeUnitNodeUnitTemplatesRequest: DescribeEdgeUnitNodeUnitTemplatesRequest,
    DeleteEdgeUnitApplicationsRequest: DeleteEdgeUnitApplicationsRequest,
    DeleteApplicationsRequest: DeleteApplicationsRequest,
    DescribeEdgeUnitApplicationPodContainersRequest: DescribeEdgeUnitApplicationPodContainersRequest,
    TcpProbe: TcpProbe,
    VolumeConfigMapKeyToPath: VolumeConfigMapKeyToPath,
    DescribeDracoEdgeNodeInstallerResponse: DescribeDracoEdgeNodeInstallerResponse,
    ModifyEdgeUnitCloudApiRequest: ModifyEdgeUnitCloudApiRequest,
    DescribeEdgeUnitDeployGridItemRequest: DescribeEdgeUnitDeployGridItemRequest,
    ModifyEdgeUnitRequest: ModifyEdgeUnitRequest,
    ContainerStatus: ContainerStatus,
    DescribeEdgeUnitCloudResponse: DescribeEdgeUnitCloudResponse,
    PodStatus: PodStatus,
    RedeployEdgeUnitApplicationRequest: RedeployEdgeUnitApplicationRequest,
    DescribeEdgeNodeRemarkListRequest: DescribeEdgeNodeRemarkListRequest,
    DeleteSecretResponse: DeleteSecretResponse,
    DeleteConfigMapResponse: DeleteConfigMapResponse,
    DescribeApplicationsResponse: DescribeApplicationsResponse,
    DeleteConfigMapRequest: DeleteConfigMapRequest,
    DescribeEdgeUnitDeployGridItemResponse: DescribeEdgeUnitDeployGridItemResponse,
    CreateMessageRouteRequest: CreateMessageRouteRequest,
    DescribeEdgeUnitExtraRequest: DescribeEdgeUnitExtraRequest,
    CreateUpdateNodeUnitRequest: CreateUpdateNodeUnitRequest,
    DescribeIotDeviceRequest: DescribeIotDeviceRequest,
    CreateConfigMapResponse: CreateConfigMapResponse,
    DescribeEdgeUnitsCloudRequest: DescribeEdgeUnitsCloudRequest,
    ApplicationTemplate: ApplicationTemplate,
    ApplicationBasicInfo: ApplicationBasicInfo,
    DescribeEdgeDefaultVpcRequest: DescribeEdgeDefaultVpcRequest,
    DescribeSecretsResponse: DescribeSecretsResponse,
    DeleteEdgeNodeGroupRequest: DeleteEdgeNodeGroupRequest,
    DescribeEdgeUnitApplicationYamlErrorRequest: DescribeEdgeUnitApplicationYamlErrorRequest,
    DescribeEdgeNodePodsResponse: DescribeEdgeNodePodsResponse,
    DescribeEdgePodResponse: DescribeEdgePodResponse,
    CreateEdgeNodeUnitTemplateResponse: CreateEdgeNodeUnitTemplateResponse,
    DescribeMonitorMetricsResponse: DescribeMonitorMetricsResponse,
    Env: Env,
    DescribeConfigMapsResponse: DescribeConfigMapsResponse,
    NodeGroupInfo: NodeGroupInfo,
    OperationLog: OperationLog,
    GetMarketComponentListResponse: GetMarketComponentListResponse,
    DescribeEdgeNodePodContainersResponse: DescribeEdgeNodePodContainersResponse,
    CreateNamespaceResponse: CreateNamespaceResponse,
    DeleteEdgeUnitDevicesRequest: DeleteEdgeUnitDevicesRequest,
    CronJob: CronJob,
    DeleteEdgeUnitPodRequest: DeleteEdgeUnitPodRequest,
    CreateIotDeviceRequest: CreateIotDeviceRequest,
    CreateSecretResponse: CreateSecretResponse,
    DeleteEdgeNodeUnitTemplatesRequest: DeleteEdgeNodeUnitTemplatesRequest,
    ModifyEdgeNodeLabelsResponse: ModifyEdgeNodeLabelsResponse,
    DescribeEdgeUnitNodeGroupRequest: DescribeEdgeUnitNodeGroupRequest,
    EdgeUnitStatisticItem: EdgeUnitStatisticItem,
    DescribeEdgeUnitApplicationPodsRequest: DescribeEdgeUnitApplicationPodsRequest,
    Job: Job,
    DescribeEdgeUnitApplicationLogsResponse: DescribeEdgeUnitApplicationLogsResponse,
    ModifyEdgeUnitDeployGridItemResponse: ModifyEdgeUnitDeployGridItemResponse,
    CreateEdgeNodeRequest: CreateEdgeNodeRequest,
    BuildMessageRouteResponse: BuildMessageRouteResponse,
    DescribeEdgeUnitMonitorStatusResponse: DescribeEdgeUnitMonitorStatusResponse,
    DeleteNamespaceResponse: DeleteNamespaceResponse,
    DescribeEdgeUnitExtraResponse: DescribeEdgeUnitExtraResponse,
    DescribeConfigMapsRequest: DescribeConfigMapsRequest,
    DescribeEdgeUnitNodeUnitTemplatesResponse: DescribeEdgeUnitNodeUnitTemplatesResponse,
    GridDetail: GridDetail,
    ModifyIotDeviceResponse: ModifyIotDeviceResponse,
    ModifyEdgeNodeLabelsRequest: ModifyEdgeNodeLabelsRequest,
    DeleteEdgeUnitDevicesResponse: DeleteEdgeUnitDevicesResponse,
    CreateEdgeNodeGroupResponse: CreateEdgeNodeGroupResponse,
    EdgeNodePodInfo: EdgeNodePodInfo,
    RouteInfo: RouteInfo,
    CreateEdgeUnitApplicationYamlRequest: CreateEdgeUnitApplicationYamlRequest,
    HttpHeader: HttpHeader,
    DeleteEdgeUnitApplicationsResponse: DeleteEdgeUnitApplicationsResponse,
    DescribeSecretRequest: DescribeSecretRequest,
    DeleteApplicationsResponse: DeleteApplicationsResponse,
    DracoNodeInfo: DracoNodeInfo,
    NodeUnitInfo: NodeUnitInfo,
    DockerConfig: DockerConfig,
    DescribeEdgeUnitDeployGridItemYamlRequest: DescribeEdgeUnitDeployGridItemYamlRequest,
    CreateEdgeNodeBatchRequest: CreateEdgeNodeBatchRequest,
    DescribeNamespaceRequest: DescribeNamespaceRequest,
    DescribeNamespaceResponse: DescribeNamespaceResponse,
    MarketComponentInfo: MarketComponentInfo,
    DescribeConfigMapRequest: DescribeConfigMapRequest,
    ConfigMapBasicInfo: ConfigMapBasicInfo,
    NamespaceInfo: NamespaceInfo,
    CreateEdgeNodeUnitTemplateRequest: CreateEdgeNodeUnitTemplateRequest,
    GridInfo: GridInfo,
    CreateApplicationVisualizationResponse: CreateApplicationVisualizationResponse,
    Event: Event,
    DescribeEdgeUnitCloudRequest: DescribeEdgeUnitCloudRequest,
    CreateEdgeUnitApplicationYamlResponse: CreateEdgeUnitApplicationYamlResponse,
    DescribeSecretYamlErrorRequest: DescribeSecretYamlErrorRequest,
    DescribeMessageRouteListResponse: DescribeMessageRouteListResponse,
    FieldSort: FieldSort,
    EdgeCloudCluster: EdgeCloudCluster,
    CreateUserTokenResponse: CreateUserTokenResponse,
    DeleteSecretRequest: DeleteSecretRequest,
    DescribeEdgeUnitApplicationPodsResponse: DescribeEdgeUnitApplicationPodsResponse,
    EdgeDracoNodeInfo: EdgeDracoNodeInfo,
    DescribeEdgeUnitApplicationVisualizationRequest: DescribeEdgeUnitApplicationVisualizationRequest,
    DescribeEdgeNodesResponse: DescribeEdgeNodesResponse,
    ModifyIotDeviceRequest: ModifyIotDeviceRequest,
    DescribeEdgeUnitGridPodsRequest: DescribeEdgeUnitGridPodsRequest,
    VolumeConfigMap: VolumeConfigMap,
    DeleteEdgeUnitDevicesDevice: DeleteEdgeUnitDevicesDevice,
    DeleteIotDeviceResponse: DeleteIotDeviceResponse,
    DescribeEdgeDefaultVpcResponse: DescribeEdgeDefaultVpcResponse,
    ModifyNodeUnitTemplateRequest: ModifyNodeUnitTemplateRequest,
    DescribeEdgeNodesRequest: DescribeEdgeNodesRequest,
    DescribeEdgeUnitApplicationLogsRequest: DescribeEdgeUnitApplicationLogsRequest,
    CreateUserTokenRequest: CreateUserTokenRequest,
    DescribeEdgeAgentNodeInstallerResponse: DescribeEdgeAgentNodeInstallerResponse,
    ModifyEdgeUnitApplicationVisualizationRequest: ModifyEdgeUnitApplicationVisualizationRequest,
    ModifyConfigMapResponse: ModifyConfigMapResponse,
    ModifyApplicationVisualizationResponse: ModifyApplicationVisualizationResponse,
    DescribeEdgeNodePodsRequest: DescribeEdgeNodePodsRequest,
    DeleteIotDeviceBatchRequest: DeleteIotDeviceBatchRequest,
    DescribeEdgeAgentNodeInstallerRequest: DescribeEdgeAgentNodeInstallerRequest,
    DescribeApplicationVisualizationResponse: DescribeApplicationVisualizationResponse,
    DescribeDracoEdgeNodeInstallerRequest: DescribeDracoEdgeNodeInstallerRequest,
    CreateNamespaceRequest: CreateNamespaceRequest,
    VolumeHostPath: VolumeHostPath,
    DeleteMessageRouteRequest: DeleteMessageRouteRequest,
    ApplyMarketComponentRequest: ApplyMarketComponentRequest,
    NodeSimpleInfo: NodeSimpleInfo,
    EnvValueSelector: EnvValueSelector,
    DescribeNamespaceResourcesResponse: DescribeNamespaceResourcesResponse,
    DescribeEdgeUnitGridEventsRequest: DescribeEdgeUnitGridEventsRequest,
    CreateEdgeUnitDevicesResponse: CreateEdgeUnitDevicesResponse,
    SecretItem: SecretItem,
    ModifyEdgeDracoNodeRequest: ModifyEdgeDracoNodeRequest,
    CreateMessageRouteResponse: CreateMessageRouteResponse,
    DescribeNodeUnitResponse: DescribeNodeUnitResponse,
    DeleteEdgeNodeGroupResponse: DeleteEdgeNodeGroupResponse,
    DescribeMessageRouteListRequest: DescribeMessageRouteListRequest,
    KeyValueObj: KeyValueObj,
    Label: Label,
    ModifyEdgeUnitResponse: ModifyEdgeUnitResponse,
    DescribeYeheResourceLimitResponse: DescribeYeheResourceLimitResponse,
    DescribeEdgeUnitsCloudResponse: DescribeEdgeUnitsCloudResponse,
    DescribeIotDevicesRequest: DescribeIotDevicesRequest,
    CreateConfigMapRequest: CreateConfigMapRequest,
    DescribeEdgeUnitDeployGridResponse: DescribeEdgeUnitDeployGridResponse,
    ModifyEdgeUnitCloudApiResponse: ModifyEdgeUnitCloudApiResponse,
    CreateUpdateNodeUnitResponse: CreateUpdateNodeUnitResponse,
    ModifyEdgeUnitApplicationVisualizationResponse: ModifyEdgeUnitApplicationVisualizationResponse,
    DeleteEdgeNodesResponse: DeleteEdgeNodesResponse,
    EdgeNodePodContainerInfo: EdgeNodePodContainerInfo,
    BuildMessageRouteRequest: BuildMessageRouteRequest,
    GridEventInfo: GridEventInfo,
    ResourceMetricTarget: ResourceMetricTarget,
    DescribeEdgeNodePodContainersRequest: DescribeEdgeNodePodContainersRequest,
    DescribeEdgeUnitApplicationEventsResponse: DescribeEdgeUnitApplicationEventsResponse,
    ModifySecretRequest: ModifySecretRequest,
    DeleteEdgeUnitPodResponse: DeleteEdgeUnitPodResponse,
    Probe: Probe,
    Container: Container,
    DescribeEdgeUnitApplicationEventsRequest: DescribeEdgeUnitApplicationEventsRequest,
    DescribeNamespacesRequest: DescribeNamespacesRequest,
    DeleteIotDeviceRequest: DeleteIotDeviceRequest,
    DescribeEdgeNodeRemarkListResponse: DescribeEdgeNodeRemarkListResponse,
    HorizontalPodAutoscaler: HorizontalPodAutoscaler,
    NamespaceResource: NamespaceResource,
    EdgeNodeInstallerOnline: EdgeNodeInstallerOnline,
    DescribeEdgeUnitApplicationPodContainersResponse: DescribeEdgeUnitApplicationPodContainersResponse,
    ModifyApplicationBasicInfoRequest: ModifyApplicationBasicInfoRequest,
    DescribeEdgeUnitNodeGroupResponse: DescribeEdgeUnitNodeGroupResponse,
    DescribeEdgeOperationLogsResponse: DescribeEdgeOperationLogsResponse,
    DescribeEdgeSnNodesRequest: DescribeEdgeSnNodesRequest,
    DeleteEdgeUnitDeployGridItemRequest: DeleteEdgeUnitDeployGridItemRequest,
    SecurityContext: SecurityContext,
    ApplicationDeployMode: ApplicationDeployMode,
    CreateIotDeviceResponse: CreateIotDeviceResponse,
    CreateEdgeUnitDevicesRequest: CreateEdgeUnitDevicesRequest,
    ModifySecretResponse: ModifySecretResponse,
    Sort: Sort,
    DescribeEdgeUnitDeployGridItemYamlResponse: DescribeEdgeUnitDeployGridItemYamlResponse,
    DescribeEdgeUnitApplicationVisualizationResponse: DescribeEdgeUnitApplicationVisualizationResponse,
    DescribeIotDeviceResponse: DescribeIotDeviceResponse,
    DescribeEdgePodRequest: DescribeEdgePodRequest,
    DescribeNamespaceResourcesRequest: DescribeNamespaceResourcesRequest,
    DescribeMonitorMetricsRequest: DescribeMonitorMetricsRequest,
    ModifyNodeUnitTemplateResponse: ModifyNodeUnitTemplateResponse,
    Volume: Volume,
    DescribeApplicationsRequest: DescribeApplicationsRequest,
    DescribeEdgeOperationLogsRequest: DescribeEdgeOperationLogsRequest,
    GridItemInfo: GridItemInfo,
    SetRouteOnOffResponse: SetRouteOnOffResponse,
    EdgeNodeLabel: EdgeNodeLabel,
    DeleteNamespaceRequest: DeleteNamespaceRequest,
    EdgeNodeInfo: EdgeNodeInfo,
    GetMarketComponentRequest: GetMarketComponentRequest,
    HttpProbe: HttpProbe,
    DeleteMessageRouteResponse: DeleteMessageRouteResponse,
    DescribeEdgeUnitDeployGridRequest: DescribeEdgeUnitDeployGridRequest,
    ApplyMarketComponentResponse: ApplyMarketComponentResponse,
    DescribeApplicationYamlErrorResponse: DescribeApplicationYamlErrorResponse,
    DeleteIotDeviceBatchResponse: DeleteIotDeviceBatchResponse,
    CreateEdgeNodeResponse: CreateEdgeNodeResponse,
    DeleteEdgeNodesRequest: DeleteEdgeNodesRequest,
    DescribeApplicationYamlErrorRequest: DescribeApplicationYamlErrorRequest,
    PortConfig: PortConfig,
    DescribeYeheResourceLimitRequest: DescribeYeheResourceLimitRequest,
    DescribeIotDevicesResponse: DescribeIotDevicesResponse,
    DescribeSecretsRequest: DescribeSecretsRequest,
    DescribeNodeUnitTemplateOnNodeGroupRequest: DescribeNodeUnitTemplateOnNodeGroupRequest,
    MonitorMetricsColumn: MonitorMetricsColumn,
    DescribeEdgeNodeRequest: DescribeEdgeNodeRequest,
    DescribeNodeUnitRequest: DescribeNodeUnitRequest,
    DeleteNodeUnitRequest: DeleteNodeUnitRequest,
    ModifyEdgeUnitApplicationYamlResponse: ModifyEdgeUnitApplicationYamlResponse,
    EdgeNodeResourceInfo: EdgeNodeResourceInfo,
    SecurityCapabilities: SecurityCapabilities,
    DeleteEdgeNodeUnitTemplatesResponse: DeleteEdgeNodeUnitTemplatesResponse,
    ModifyEdgeDracoNodeResponse: ModifyEdgeDracoNodeResponse,
    DescribeEdgeNodeResponse: DescribeEdgeNodeResponse,
    ModifyEdgeUnitApplicationYamlRequest: ModifyEdgeUnitApplicationYamlRequest,
    DeleteEdgeUnitCloudRequest: DeleteEdgeUnitCloudRequest,
    CreateEdgeUnitCloudRequest: CreateEdgeUnitCloudRequest,
    DescribeEdgeUnitGridPodsResponse: DescribeEdgeUnitGridPodsResponse,
    DescribeConfigMapYamlErrorRequest: DescribeConfigMapYamlErrorRequest,
    ModifyEdgeUnitApplicationBasicInfoResponse: ModifyEdgeUnitApplicationBasicInfoResponse,
    SetRouteOnOffRequest: SetRouteOnOffRequest,

}
