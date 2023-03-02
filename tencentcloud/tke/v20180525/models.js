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
 * DescribeClusterEndpointVipStatus请求参数结构体
 * @class
 */
class DescribeClusterEndpointVipStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeClusterSecurity请求参数结构体
 * @class
 */
class DescribeClusterSecurityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群 ID，请填写 查询集群列表 接口中返回的 clusterId 字段
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * EKS Instance Volume,  可选包括CbsVolume和NfsVolume
 * @class
 */
class EksCiVolume extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cbs Volume
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CbsVolume> || null}
         */
        this.CbsVolumes = null;

        /**
         * Nfs Volume
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NfsVolume> || null}
         */
        this.NfsVolumes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CbsVolumes) {
            this.CbsVolumes = new Array();
            for (let z in params.CbsVolumes) {
                let obj = new CbsVolume();
                obj.deserialize(params.CbsVolumes[z]);
                this.CbsVolumes.push(obj);
            }
        }

        if (params.NfsVolumes) {
            this.NfsVolumes = new Array();
            for (let z in params.NfsVolumes) {
                let obj = new NfsVolume();
                obj.deserialize(params.NfsVolumes[z]);
                this.NfsVolumes.push(obj);
            }
        }

    }
}

/**
 * GetTkeAppChartList请求参数结构体
 * @class
 */
class GetTkeAppChartListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * app类型，取值log,scheduler,network,storage,monitor,dns,image,other,invisible
         * @type {string || null}
         */
        this.Kind = null;

        /**
         * app支持的操作系统，取值arm32、arm64、amd64
         * @type {string || null}
         */
        this.Arch = null;

        /**
         * 集群类型，取值tke、eks
         * @type {string || null}
         */
        this.ClusterType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Kind = 'Kind' in params ? params.Kind : null;
        this.Arch = 'Arch' in params ? params.Arch : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;

    }
}

/**
 * DescribeEdgeCVMInstances请求参数结构体
 * @class
 */
class DescribeEdgeCVMInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterID = null;

        /**
         * 过滤条件
仅支持cvm-id过滤
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
        this.ClusterID = 'ClusterID' in params ? params.ClusterID : null;

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
 * InstallLogAgent请求参数结构体
 * @class
 */
class InstallLogAgentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TKE集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * kubelet根目录
         * @type {string || null}
         */
        this.KubeletRootDir = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.KubeletRootDir = 'KubeletRootDir' in params ? params.KubeletRootDir : null;

    }
}

/**
 * DescribeClusterEndpointVipStatus返回参数结构体
 * @class
 */
class DescribeClusterEndpointVipStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 端口操作状态 (Creating 创建中  CreateFailed 创建失败 Created 创建完成 Deleting 删除中 DeletedFailed 删除失败 Deleted 已删除 NotFound 未发现操作 )
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 操作失败的原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCluster返回参数结构体
 * @class
 */
class DeleteClusterResponse extends  AbstractModel {
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
 * 容器状态
 * @class
 */
class ContainerState extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器运行开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 容器状态：created, running, exited, unknown
         * @type {string || null}
         */
        this.State = null;

        /**
         * 容器运行结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FinishTime = null;

        /**
         * 容器运行退出码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ExitCode = null;

        /**
         * 容器状态 Reason
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * 容器状态信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 容器重启次数
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.State = 'State' in params ? params.State : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;
        this.ExitCode = 'ExitCode' in params ? params.ExitCode : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.RestartCount = 'RestartCount' in params ? params.RestartCount : null;

    }
}

/**
 * CreateClusterRouteTable返回参数结构体
 * @class
 */
class CreateClusterRouteTableResponse extends  AbstractModel {
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
 * 子网信息
 * @class
 */
class SubnetInfos extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子网id
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 子网节点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 安全组id
         * @type {Array.<string> || null}
         */
        this.SecurityGroups = null;

        /**
         * 系统
         * @type {string || null}
         */
        this.Os = null;

        /**
         * 硬件架构
         * @type {string || null}
         */
        this.Arch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.SecurityGroups = 'SecurityGroups' in params ? params.SecurityGroups : null;
        this.Os = 'Os' in params ? params.Os : null;
        this.Arch = 'Arch' in params ? params.Arch : null;

    }
}

/**
 * EKS Instnace CBS volume
 * @class
 */
class CbsVolume extends  AbstractModel {
    constructor(){
        super();

        /**
         * cbs volume 数据卷名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 腾讯云cbs盘Id
         * @type {string || null}
         */
        this.CbsDiskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.CbsDiskId = 'CbsDiskId' in params ? params.CbsDiskId : null;

    }
}

/**
 * DescribeEKSClusters请求参数结构体
 * @class
 */
class DescribeEKSClustersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID列表(为空时，
表示获取账号下所有集群)
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

        /**
         * 偏移量,默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 最大输出条数，默认20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件,当前只支持按照单个条件ClusterName进行过滤
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
        this.ClusterIds = 'ClusterIds' in params ? params.ClusterIds : null;
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
 * DescribePrometheusInstancesOverview请求参数结构体
 * @class
 */
class DescribePrometheusInstancesOverviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于分页
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 用于分页
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤实例，目前支持：
ID: 通过实例ID来过滤 
Name: 通过实例名称来过滤
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
 * ServiceAccount认证相关配置
 * @class
 */
class ServiceAccountAuthenticationOptions extends  AbstractModel {
    constructor(){
        super();

        /**
         * service-account-issuer
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Issuer = null;

        /**
         * service-account-jwks-uri
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.JWKSURI = null;

        /**
         * 如果为true，则会自动创建允许匿名用户访问'/.well-known/openid-configuration'和/openid/v1/jwks的rbac规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.AutoCreateDiscoveryAnonymousAuth = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Issuer = 'Issuer' in params ? params.Issuer : null;
        this.JWKSURI = 'JWKSURI' in params ? params.JWKSURI : null;
        this.AutoCreateDiscoveryAnonymousAuth = 'AutoCreateDiscoveryAnonymousAuth' in params ? params.AutoCreateDiscoveryAnonymousAuth : null;

    }
}

/**
 * CreateClusterNodePool请求参数结构体
 * @class
 */
class CreateClusterNodePoolRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * cluster id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * AutoScalingGroupPara AS组参数，参考 https://cloud.tencent.com/document/product/377/20440
         * @type {string || null}
         */
        this.AutoScalingGroupPara = null;

        /**
         * LaunchConfigurePara 运行参数，参考 https://cloud.tencent.com/document/product/377/20447
         * @type {string || null}
         */
        this.LaunchConfigurePara = null;

        /**
         * InstanceAdvancedSettings 示例参数
         * @type {InstanceAdvancedSettings || null}
         */
        this.InstanceAdvancedSettings = null;

        /**
         * 是否启用自动伸缩
         * @type {boolean || null}
         */
        this.EnableAutoscale = null;

        /**
         * 节点池名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Labels标签
         * @type {Array.<Label> || null}
         */
        this.Labels = null;

        /**
         * Taints互斥
         * @type {Array.<Taint> || null}
         */
        this.Taints = null;

        /**
         * 节点池纬度运行时类型及版本
         * @type {string || null}
         */
        this.ContainerRuntime = null;

        /**
         * 运行时版本
         * @type {string || null}
         */
        this.RuntimeVersion = null;

        /**
         * 节点池os，当为自定义镜像时，传镜像id；否则为公共镜像的osName
         * @type {string || null}
         */
        this.NodePoolOs = null;

        /**
         * 容器的镜像版本，"DOCKER_CUSTOMIZE"(容器定制版),"GENERAL"(普通版本，默认值)
         * @type {string || null}
         */
        this.OsCustomizeType = null;

        /**
         * 资源标签
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 删除保护开关
         * @type {boolean || null}
         */
        this.DeletionProtection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.AutoScalingGroupPara = 'AutoScalingGroupPara' in params ? params.AutoScalingGroupPara : null;
        this.LaunchConfigurePara = 'LaunchConfigurePara' in params ? params.LaunchConfigurePara : null;

        if (params.InstanceAdvancedSettings) {
            let obj = new InstanceAdvancedSettings();
            obj.deserialize(params.InstanceAdvancedSettings)
            this.InstanceAdvancedSettings = obj;
        }
        this.EnableAutoscale = 'EnableAutoscale' in params ? params.EnableAutoscale : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new Label();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.Taints) {
            this.Taints = new Array();
            for (let z in params.Taints) {
                let obj = new Taint();
                obj.deserialize(params.Taints[z]);
                this.Taints.push(obj);
            }
        }
        this.ContainerRuntime = 'ContainerRuntime' in params ? params.ContainerRuntime : null;
        this.RuntimeVersion = 'RuntimeVersion' in params ? params.RuntimeVersion : null;
        this.NodePoolOs = 'NodePoolOs' in params ? params.NodePoolOs : null;
        this.OsCustomizeType = 'OsCustomizeType' in params ? params.OsCustomizeType : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.DeletionProtection = 'DeletionProtection' in params ? params.DeletionProtection : null;

    }
}

/**
 * UpgradeClusterRelease请求参数结构体
 * @class
 */
class UpgradeClusterReleaseRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 自定义的应用名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 应用命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 制品名称或从第三方repo 安装chart时，制品压缩包下载地址, 不支持重定向类型chart 地址，结尾为*.tgz
         * @type {string || null}
         */
        this.Chart = null;

        /**
         * 自定义参数，覆盖chart 中values.yaml 中的参数
         * @type {ReleaseValues || null}
         */
        this.Values = null;

        /**
         * 制品来源，范围：tke-market/tcr/other
         * @type {string || null}
         */
        this.ChartFrom = null;

        /**
         * 制品版本( 从第三安装时，不传这个参数）
         * @type {string || null}
         */
        this.ChartVersion = null;

        /**
         * 制品仓库URL地址
         * @type {string || null}
         */
        this.ChartRepoURL = null;

        /**
         * 制品访问用户名
         * @type {string || null}
         */
        this.Username = null;

        /**
         * 制品访问密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 制品命名空间
         * @type {string || null}
         */
        this.ChartNamespace = null;

        /**
         * 集群类型，支持传 tke, eks, tkeedge, exernal(注册集群）
         * @type {string || null}
         */
        this.ClusterType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Chart = 'Chart' in params ? params.Chart : null;

        if (params.Values) {
            let obj = new ReleaseValues();
            obj.deserialize(params.Values)
            this.Values = obj;
        }
        this.ChartFrom = 'ChartFrom' in params ? params.ChartFrom : null;
        this.ChartVersion = 'ChartVersion' in params ? params.ChartVersion : null;
        this.ChartRepoURL = 'ChartRepoURL' in params ? params.ChartRepoURL : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.ChartNamespace = 'ChartNamespace' in params ? params.ChartNamespace : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;

    }
}

/**
 * DescribeEdgeClusterUpgradeInfo请求参数结构体
 * @class
 */
class DescribeEdgeClusterUpgradeInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 要升级到的TKEEdge版本
         * @type {string || null}
         */
        this.EdgeVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.EdgeVersion = 'EdgeVersion' in params ? params.EdgeVersion : null;

    }
}

/**
 * 不同角色的节点配置参数
 * @class
 */
class RunInstancesForNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点角色，取值:MASTER_ETCD, WORKER。MASTER_ETCD只有在创建 INDEPENDENT_CLUSTER 独立集群时需要指定。MASTER_ETCD节点数量为3～7，建议为奇数。MASTER_ETCD节点最小配置为4C8G。
         * @type {string || null}
         */
        this.NodeRole = null;

        /**
         * CVM创建透传参数，json化字符串格式，详见[CVM创建实例](https://cloud.tencent.com/document/product/213/15730)接口，传入公共参数外的其他参数即可，其中ImageId会替换为TKE集群OS对应的镜像。
         * @type {Array.<string> || null}
         */
        this.RunInstancesPara = null;

        /**
         * 节点高级设置，该参数会覆盖集群级别设置的InstanceAdvancedSettings，和上边的RunInstancesPara按照顺序一一对应（当前只对节点自定义参数ExtraArgs生效）。
         * @type {Array.<InstanceAdvancedSettings> || null}
         */
        this.InstanceAdvancedSettingsOverrides = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeRole = 'NodeRole' in params ? params.NodeRole : null;
        this.RunInstancesPara = 'RunInstancesPara' in params ? params.RunInstancesPara : null;

        if (params.InstanceAdvancedSettingsOverrides) {
            this.InstanceAdvancedSettingsOverrides = new Array();
            for (let z in params.InstanceAdvancedSettingsOverrides) {
                let obj = new InstanceAdvancedSettings();
                obj.deserialize(params.InstanceAdvancedSettingsOverrides[z]);
                this.InstanceAdvancedSettingsOverrides.push(obj);
            }
        }

    }
}

/**
 * DisableVpcCniNetworkType返回参数结构体
 * @class
 */
class DisableVpcCniNetworkTypeResponse extends  AbstractModel {
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
 * DescribeClusterControllers返回参数结构体
 * @class
 */
class DescribeClusterControllersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 描述集群中各个控制器的状态
         * @type {Array.<ControllerStatus> || null}
         */
        this.ControllerStatusSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ControllerStatusSet) {
            this.ControllerStatusSet = new Array();
            for (let z in params.ControllerStatusSet) {
                let obj = new ControllerStatus();
                obj.deserialize(params.ControllerStatusSet[z]);
                this.ControllerStatusSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeExistedInstances请求参数结构体
 * @class
 */
class DescribeExistedInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群 ID，请填写查询集群列表 接口中返回的 ClusterId 字段（仅通过ClusterId获取需要过滤条件中的VPCID。节点状态比较时会使用该地域下所有集群中的节点进行比较。参数不支持同时指定InstanceIds和ClusterId。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 按照一个或者多个实例ID查询。实例ID形如：ins-xxxxxxxx。（此参数的具体格式可参考API简介的id.N一节）。每次请求的实例的上限为100。参数不支持同时指定InstanceIds和Filters。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 过滤条件,字段和详见[CVM查询实例](https://cloud.tencent.com/document/api/213/15728)如果设置了ClusterId，会附加集群的VPCID作为查询字段，在此情况下如果在Filter中指定了"vpc-id"作为过滤字段，指定的VPCID必须与集群的VPCID相同。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 实例IP进行过滤(同时支持内网IP和外网IP)
         * @type {string || null}
         */
        this.VagueIpAddress = null;

        /**
         * 实例名称进行过滤
         * @type {string || null}
         */
        this.VagueInstanceName = null;

        /**
         * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 根据多个实例IP进行过滤
         * @type {Array.<string> || null}
         */
        this.IpAddresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.VagueIpAddress = 'VagueIpAddress' in params ? params.VagueIpAddress : null;
        this.VagueInstanceName = 'VagueInstanceName' in params ? params.VagueInstanceName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.IpAddresses = 'IpAddresses' in params ? params.IpAddresses : null;

    }
}

/**
 * DeletePrometheusClusterAgent请求参数结构体
 * @class
 */
class DeletePrometheusClusterAgentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * agent列表
         * @type {Array.<PrometheusAgentInfo> || null}
         */
        this.Agents = null;

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Agents) {
            this.Agents = new Array();
            for (let z in params.Agents) {
                let obj = new PrometheusAgentInfo();
                obj.deserialize(params.Agents[z]);
                this.Agents.push(obj);
            }
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * 集群等级变配记录
 * @class
 */
class ClusterLevelChangeRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录ID
         * @type {string || null}
         */
        this.ID = null;

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterID = null;

        /**
         * 变配状态：trading 发货中,upgrading 变配中,success 变配成功,failed 变配失败。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 状态描述
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 变配前规模
         * @type {string || null}
         */
        this.OldLevel = null;

        /**
         * 变配后规模
         * @type {string || null}
         */
        this.NewLevel = null;

        /**
         * 变配触发类型：manual 手动,auto 自动
         * @type {string || null}
         */
        this.TriggerType = null;

        /**
         * 开始时间
         * @type {string || null}
         */
        this.StartedAt = null;

        /**
         * 结束时间
         * @type {string || null}
         */
        this.EndedAt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.ClusterID = 'ClusterID' in params ? params.ClusterID : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.OldLevel = 'OldLevel' in params ? params.OldLevel : null;
        this.NewLevel = 'NewLevel' in params ? params.NewLevel : null;
        this.TriggerType = 'TriggerType' in params ? params.TriggerType : null;
        this.StartedAt = 'StartedAt' in params ? params.StartedAt : null;
        this.EndedAt = 'EndedAt' in params ? params.EndedAt : null;

    }
}

/**
 * ModifyPrometheusAlertRule返回参数结构体
 * @class
 */
class ModifyPrometheusAlertRuleResponse extends  AbstractModel {
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
 * DescribeEKSContainerInstanceEvent返回参数结构体
 * @class
 */
class DescribeEKSContainerInstanceEventResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件集合
         * @type {Array.<Event> || null}
         */
        this.Events = null;

        /**
         * 容器实例id
         * @type {string || null}
         */
        this.EksCiId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Events) {
            this.Events = new Array();
            for (let z in params.Events) {
                let obj = new Event();
                obj.deserialize(params.Events[z]);
                this.Events.push(obj);
            }
        }
        this.EksCiId = 'EksCiId' in params ? params.EksCiId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 集群路由表对象
 * @class
 */
class RouteTableInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表名称。
         * @type {string || null}
         */
        this.RouteTableName = null;

        /**
         * 路由表CIDR。
         * @type {string || null}
         */
        this.RouteTableCidrBlock = null;

        /**
         * VPC实例ID。
         * @type {string || null}
         */
        this.VpcId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;
        this.RouteTableCidrBlock = 'RouteTableCidrBlock' in params ? params.RouteTableCidrBlock : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

    }
}

/**
 * EnableClusterDeletionProtection返回参数结构体
 * @class
 */
class EnableClusterDeletionProtectionResponse extends  AbstractModel {
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
 * 集群关联的伸缩组信息
 * @class
 */
class ClusterAsGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩组ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * 伸缩组状态(开启 enabled 开启中 enabling 关闭 disabled 关闭中 disabling 更新中 updating 删除中 deleting 开启缩容中 scaleDownEnabling 关闭缩容中 scaleDownDisabling)
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 节点是否设置成不可调度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsUnschedulable = null;

        /**
         * 伸缩组的label列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Label> || null}
         */
        this.Labels = null;

        /**
         * 创建时间
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
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.IsUnschedulable = 'IsUnschedulable' in params ? params.IsUnschedulable : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new Label();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * 云原生Prometheus模板可修改项
 * @class
 */
class PrometheusTempModify extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 修改描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Describe = null;

        /**
         * 当Level为cluster时有效，
模板中的ServiceMonitor规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.ServiceMonitors = null;

        /**
         * 当Level为cluster时有效，
模板中的PodMonitors规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.PodMonitors = null;

        /**
         * 当Level为cluster时有效，
模板中的RawJobs规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.RawJobs = null;

        /**
         * 当Level为instance时有效，
模板中的聚合规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.RecordRules = null;

        /**
         * 修改内容，只有当模板类型是Alert时生效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusAlertPolicyItem> || null}
         */
        this.AlertDetailRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Describe = 'Describe' in params ? params.Describe : null;

        if (params.ServiceMonitors) {
            this.ServiceMonitors = new Array();
            for (let z in params.ServiceMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.ServiceMonitors[z]);
                this.ServiceMonitors.push(obj);
            }
        }

        if (params.PodMonitors) {
            this.PodMonitors = new Array();
            for (let z in params.PodMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.PodMonitors[z]);
                this.PodMonitors.push(obj);
            }
        }

        if (params.RawJobs) {
            this.RawJobs = new Array();
            for (let z in params.RawJobs) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.RawJobs[z]);
                this.RawJobs.push(obj);
            }
        }

        if (params.RecordRules) {
            this.RecordRules = new Array();
            for (let z in params.RecordRules) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.RecordRules[z]);
                this.RecordRules.push(obj);
            }
        }

        if (params.AlertDetailRules) {
            this.AlertDetailRules = new Array();
            for (let z in params.AlertDetailRules) {
                let obj = new PrometheusAlertPolicyItem();
                obj.deserialize(params.AlertDetailRules[z]);
                this.AlertDetailRules.push(obj);
            }
        }

    }
}

/**
 * EnableClusterAudit返回参数结构体
 * @class
 */
class EnableClusterAuditResponse extends  AbstractModel {
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
 * EnvironmentVariable
 * @class
 */
class EnvironmentVariable extends  AbstractModel {
    constructor(){
        super();

        /**
         * key
         * @type {string || null}
         */
        this.Name = null;

        /**
         * val
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
 * UpdateImageCache请求参数结构体
 * @class
 */
class UpdateImageCacheRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像缓存Id
         * @type {string || null}
         */
        this.ImageCacheId = null;

        /**
         * 镜像缓存名称
         * @type {string || null}
         */
        this.ImageCacheName = null;

        /**
         * 镜像仓库凭证数组
         * @type {Array.<ImageRegistryCredential> || null}
         */
        this.ImageRegistryCredentials = null;

        /**
         * 用于制作镜像缓存的容器镜像列表
         * @type {Array.<string> || null}
         */
        this.Images = null;

        /**
         * 镜像缓存的大小。默认为20 GiB。取值范围参考[云硬盘类型](https://cloud.tencent.com/document/product/362/2353)中的高性能云盘类型的大小限制。
         * @type {number || null}
         */
        this.ImageCacheSize = null;

        /**
         * 镜像缓存保留时间天数，过期将会自动清理，默认为0，永不过期。
         * @type {number || null}
         */
        this.RetentionDays = null;

        /**
         * 安全组Id
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageCacheId = 'ImageCacheId' in params ? params.ImageCacheId : null;
        this.ImageCacheName = 'ImageCacheName' in params ? params.ImageCacheName : null;

        if (params.ImageRegistryCredentials) {
            this.ImageRegistryCredentials = new Array();
            for (let z in params.ImageRegistryCredentials) {
                let obj = new ImageRegistryCredential();
                obj.deserialize(params.ImageRegistryCredentials[z]);
                this.ImageRegistryCredentials.push(obj);
            }
        }
        this.Images = 'Images' in params ? params.Images : null;
        this.ImageCacheSize = 'ImageCacheSize' in params ? params.ImageCacheSize : null;
        this.RetentionDays = 'RetentionDays' in params ? params.RetentionDays : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

    }
}

/**
 * 手动加入的节点
 * @class
 */
class ManuallyAdded extends  AbstractModel {
    constructor(){
        super();

        /**
         * 加入中的节点数量
         * @type {number || null}
         */
        this.Joining = null;

        /**
         * 初始化中的节点数量
         * @type {number || null}
         */
        this.Initializing = null;

        /**
         * 正常的节点数量
         * @type {number || null}
         */
        this.Normal = null;

        /**
         * 节点总数
         * @type {number || null}
         */
        this.Total = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Joining = 'Joining' in params ? params.Joining : null;
        this.Initializing = 'Initializing' in params ? params.Initializing : null;
        this.Normal = 'Normal' in params ? params.Normal : null;
        this.Total = 'Total' in params ? params.Total : null;

    }
}

/**
 * 标签绑定的资源类型，当前支持类型："cluster"
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
 * DescribePrometheusAgentInstances请求参数结构体
 * @class
 */
class DescribePrometheusAgentInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
可以是tke, eks, edge的集群id
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * ModifyClusterAttribute请求参数结构体
 * @class
 */
class ModifyClusterAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群所属项目
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 集群名称
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 集群描述
         * @type {string || null}
         */
        this.ClusterDesc = null;

        /**
         * 集群等级
         * @type {string || null}
         */
        this.ClusterLevel = null;

        /**
         * 自动变配集群等级
         * @type {AutoUpgradeClusterLevel || null}
         */
        this.AutoUpgradeClusterLevel = null;

        /**
         * 是否开启QGPU共享
         * @type {boolean || null}
         */
        this.QGPUShareEnable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.ClusterDesc = 'ClusterDesc' in params ? params.ClusterDesc : null;
        this.ClusterLevel = 'ClusterLevel' in params ? params.ClusterLevel : null;

        if (params.AutoUpgradeClusterLevel) {
            let obj = new AutoUpgradeClusterLevel();
            obj.deserialize(params.AutoUpgradeClusterLevel)
            this.AutoUpgradeClusterLevel = obj;
        }
        this.QGPUShareEnable = 'QGPUShareEnable' in params ? params.QGPUShareEnable : null;

    }
}

/**
 * 自动扩所容的节点
 * @class
 */
class AutoscalingAdded extends  AbstractModel {
    constructor(){
        super();

        /**
         * 正在加入中的节点数量
         * @type {number || null}
         */
        this.Joining = null;

        /**
         * 初始化中的节点数量
         * @type {number || null}
         */
        this.Initializing = null;

        /**
         * 正常的节点数量
         * @type {number || null}
         */
        this.Normal = null;

        /**
         * 节点总数
         * @type {number || null}
         */
        this.Total = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Joining = 'Joining' in params ? params.Joining : null;
        this.Initializing = 'Initializing' in params ? params.Initializing : null;
        this.Normal = 'Normal' in params ? params.Normal : null;
        this.Total = 'Total' in params ? params.Total : null;

    }
}

/**
 * DescribeClusters请求参数结构体
 * @class
 */
class DescribeClustersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID列表(为空时，
表示获取账号下所有集群)
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

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
         * ·  ClusterName
    按照【集群名】进行过滤。
    类型：String
    必选：否

·  ClusterType
    按照【集群类型】进行过滤。
    类型：String
    必选：否

·  ClusterStatus
    按照【集群状态】进行过滤。
    类型：String
    必选：否

·  Tags
    按照【标签键值对】进行过滤。
    类型：String
    必选：否

·  vpc-id
    按照【VPC】进行过滤。
    类型：String
    必选：否

·  tag-key
    按照【标签键】进行过滤。
    类型：String
    必选：否

·  tag-value
    按照【标签值】进行过滤。
    类型：String
    必选：否

·  tag:tag-key
    按照【标签键值对】进行过滤。
    类型：String
    必选：否
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 集群类型，例如：MANAGED_CLUSTER
         * @type {string || null}
         */
        this.ClusterType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterIds = 'ClusterIds' in params ? params.ClusterIds : null;
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
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;

    }
}

/**
 * UpgradeClusterInstances请求参数结构体
 * @class
 */
class UpgradeClusterInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * create 表示开始一次升级任务
pause 表示停止任务
resume表示继续任务
abort表示终止任务
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 升级类型，只有Operation是create需要设置
reset 大版本重装升级
hot 小版本热升级
major 大版本原地升级
         * @type {string || null}
         */
        this.UpgradeType = null;

        /**
         * 需要升级的节点列表
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 当节点重新加入集群时候所使用的参数，参考添加已有节点接口
         * @type {UpgradeNodeResetParam || null}
         */
        this.ResetParam = null;

        /**
         * 是否忽略节点升级前检查
         * @type {boolean || null}
         */
        this.SkipPreCheck = null;

        /**
         * 最大可容忍的不可用Pod比例
         * @type {number || null}
         */
        this.MaxNotReadyPercent = null;

        /**
         * 是否升级节点运行时，默认false不升级
         * @type {boolean || null}
         */
        this.UpgradeRunTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.UpgradeType = 'UpgradeType' in params ? params.UpgradeType : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.ResetParam) {
            let obj = new UpgradeNodeResetParam();
            obj.deserialize(params.ResetParam)
            this.ResetParam = obj;
        }
        this.SkipPreCheck = 'SkipPreCheck' in params ? params.SkipPreCheck : null;
        this.MaxNotReadyPercent = 'MaxNotReadyPercent' in params ? params.MaxNotReadyPercent : null;
        this.UpgradeRunTime = 'UpgradeRunTime' in params ? params.UpgradeRunTime : null;

    }
}

/**
 * 创建集群时，选择安装的扩展组件的信息
 * @class
 */
class ExtensionAddon extends  AbstractModel {
    constructor(){
        super();

        /**
         * 扩展组件名称
         * @type {string || null}
         */
        this.AddonName = null;

        /**
         * 扩展组件信息(扩展组件资源对象的json字符串描述)
         * @type {string || null}
         */
        this.AddonParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddonName = 'AddonName' in params ? params.AddonName : null;
        this.AddonParam = 'AddonParam' in params ? params.AddonParam : null;

    }
}

/**
 * DescribeResourceUsage请求参数结构体
 * @class
 */
class DescribeResourceUsageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * prometheus聚合规则实例详情，包含所属集群ID
 * @class
 */
class PrometheusRecordRuleYamlItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 最近更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Yaml内容
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 如果该聚合规则来至模板，则TemplateId为模板id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 该聚合规则如果来源于用户集群crd资源定义，则ClusterId为所属集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * k8s中标签，一般以数组的方式存在
 * @class
 */
class Label extends  AbstractModel {
    constructor(){
        super();

        /**
         * map表中的Name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * map表中的Value
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
 * 某机型可支持的最大 VPC-CNI 模式的 Pod 数量
 * @class
 */
class PodLimitsByType extends  AbstractModel {
    constructor(){
        super();

        /**
         * TKE共享网卡非固定IP模式可支持的Pod数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TKERouteENINonStaticIP = null;

        /**
         * TKE共享网卡固定IP模式可支持的Pod数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TKERouteENIStaticIP = null;

        /**
         * TKE独立网卡模式可支持的Pod数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TKEDirectENI = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TKERouteENINonStaticIP = 'TKERouteENINonStaticIP' in params ? params.TKERouteENINonStaticIP : null;
        this.TKERouteENIStaticIP = 'TKERouteENIStaticIP' in params ? params.TKERouteENIStaticIP : null;
        this.TKEDirectENI = 'TKEDirectENI' in params ? params.TKEDirectENI : null;

    }
}

/**
 * DeletePrometheusTemplateSync请求参数结构体
 * @class
 */
class DeletePrometheusTemplateSyncRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板id
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 取消同步的对象列表
         * @type {Array.<PrometheusTemplateSyncTarget> || null}
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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new PrometheusTemplateSyncTarget();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }

    }
}

/**
 * DisableVpcCniNetworkType请求参数结构体
 * @class
 */
class DisableVpcCniNetworkTypeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeClusterReleaseDetails返回参数结构体
 * @class
 */
class DescribeClusterReleaseDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ReleaseDetails || null}
         */
        this.Release = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Release) {
            let obj = new ReleaseDetails();
            obj.deserialize(params.Release)
            this.Release = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SyncPrometheusTemp返回参数结构体
 * @class
 */
class SyncPrometheusTempResponse extends  AbstractModel {
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
 * CreateEdgeLogConfig请求参数结构体
 * @class
 */
class CreateEdgeLogConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 日志采集配置的json表达
         * @type {string || null}
         */
        this.LogConfig = null;

        /**
         * CLS日志集ID
         * @type {string || null}
         */
        this.LogsetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.LogConfig = 'LogConfig' in params ? params.LogConfig : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;

    }
}

/**
 * CreatePrometheusDashboard返回参数结构体
 * @class
 */
class CreatePrometheusDashboardResponse extends  AbstractModel {
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
 * CancelClusterRelease请求参数结构体
 * @class
 */
class CancelClusterReleaseRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用ID
         * @type {string || null}
         */
        this.ID = null;

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群类型
         * @type {string || null}
         */
        this.ClusterType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ID = 'ID' in params ? params.ID : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;

    }
}

/**
 * DescribeTKEEdgeClusterStatus返回参数结构体
 * @class
 */
class DescribeTKEEdgeClusterStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群当前状态
         * @type {string || null}
         */
        this.Phase = null;

        /**
         * 集群过程数组
         * @type {Array.<ClusterCondition> || null}
         */
        this.Conditions = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Phase = 'Phase' in params ? params.Phase : null;

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new ClusterCondition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyClusterAsGroupOptionAttribute请求参数结构体
 * @class
 */
class ModifyClusterAsGroupOptionAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群弹性伸缩属性
         * @type {ClusterAsGroupOption || null}
         */
        this.ClusterAsGroupOption = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.ClusterAsGroupOption) {
            let obj = new ClusterAsGroupOption();
            obj.deserialize(params.ClusterAsGroupOption)
            this.ClusterAsGroupOption = obj;
        }

    }
}

/**
 * DescribeClusterStatus请求参数结构体
 * @class
 */
class DescribeClusterStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID列表，不传默认拉取所有集群
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterIds = 'ClusterIds' in params ? params.ClusterIds : null;

    }
}

/**
 * prometheus配置
 * @class
 */
class PrometheusConfigItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 配置内容
         * @type {string || null}
         */
        this.Config = null;

        /**
         * 用于出参，如果该配置来至模板，则为模板id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Config = 'Config' in params ? params.Config : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DeleteClusterNodePool请求参数结构体
 * @class
 */
class DeleteClusterNodePoolRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点池对应的 ClusterId
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 需要删除的节点池 Id 列表
         * @type {Array.<string> || null}
         */
        this.NodePoolIds = null;

        /**
         * 删除节点池时是否保留节点池内节点(节点仍然会被移出集群，但对应的实例不会被销毁)
         * @type {boolean || null}
         */
        this.KeepInstance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NodePoolIds = 'NodePoolIds' in params ? params.NodePoolIds : null;
        this.KeepInstance = 'KeepInstance' in params ? params.KeepInstance : null;

    }
}

/**
 * DescribeEKSClusterCredential返回参数结构体
 * @class
 */
class DescribeEKSClusterCredentialResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群的接入地址信息
         * @type {Array.<IPAddress> || null}
         */
        this.Addresses = null;

        /**
         * 集群的认证信息（token只有请求是主账号才返回，子账户请使用返回的kubeconfig）
         * @type {ClusterCredential || null}
         */
        this.Credential = null;

        /**
         * 集群的公网访问信息
         * @type {ClusterPublicLB || null}
         */
        this.PublicLB = null;

        /**
         * 集群的内网访问信息
         * @type {ClusterInternalLB || null}
         */
        this.InternalLB = null;

        /**
         * 标记是否新的内外网功能
         * @type {boolean || null}
         */
        this.ProxyLB = null;

        /**
         * 连接用户集群k8s 的Config
         * @type {string || null}
         */
        this.Kubeconfig = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Addresses) {
            this.Addresses = new Array();
            for (let z in params.Addresses) {
                let obj = new IPAddress();
                obj.deserialize(params.Addresses[z]);
                this.Addresses.push(obj);
            }
        }

        if (params.Credential) {
            let obj = new ClusterCredential();
            obj.deserialize(params.Credential)
            this.Credential = obj;
        }

        if (params.PublicLB) {
            let obj = new ClusterPublicLB();
            obj.deserialize(params.PublicLB)
            this.PublicLB = obj;
        }

        if (params.InternalLB) {
            let obj = new ClusterInternalLB();
            obj.deserialize(params.InternalLB)
            this.InternalLB = obj;
        }
        this.ProxyLB = 'ProxyLB' in params ? params.ProxyLB : null;
        this.Kubeconfig = 'Kubeconfig' in params ? params.Kubeconfig : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckInstancesUpgradeAble请求参数结构体
 * @class
 */
class CheckInstancesUpgradeAbleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 节点列表，空为全部节点
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 升级类型
         * @type {string || null}
         */
        this.UpgradeType = null;

        /**
         * 分页Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页Limit
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤
         * @type {Array.<Filter> || null}
         */
        this.Filter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.UpgradeType = 'UpgradeType' in params ? params.UpgradeType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filter) {
            this.Filter = new Array();
            for (let z in params.Filter) {
                let obj = new Filter();
                obj.deserialize(params.Filter[z]);
                this.Filter.push(obj);
            }
        }

    }
}

/**
 * ModifyPrometheusTemplate请求参数结构体
 * @class
 */
class ModifyPrometheusTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板ID
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 修改内容
         * @type {PrometheusTemplateModify || null}
         */
        this.Template = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

        if (params.Template) {
            let obj = new PrometheusTemplateModify();
            obj.deserialize(params.Template)
            this.Template = obj;
        }

    }
}

/**
 * DeleteClusterVirtualNodePool请求参数结构体
 * @class
 */
class DeleteClusterVirtualNodePoolRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 虚拟节点池ID列表
         * @type {Array.<string> || null}
         */
        this.NodePoolIds = null;

        /**
         * 是否强制删除，在虚拟节点上有pod的情况下，如果选择非强制删除，则删除会失败
         * @type {boolean || null}
         */
        this.Force = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NodePoolIds = 'NodePoolIds' in params ? params.NodePoolIds : null;
        this.Force = 'Force' in params ? params.Force : null;

    }
}

/**
 * DescribeImageCaches请求参数结构体
 * @class
 */
class DescribeImageCachesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像缓存Id数组
         * @type {Array.<string> || null}
         */
        this.ImageCacheIds = null;

        /**
         * 镜像缓存名称数组
         * @type {Array.<string> || null}
         */
        this.ImageCacheNames = null;

        /**
         * 限定此次返回资源的数量。如果不设定，默认返回20，最大不能超过50
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量,默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件，可选条件：
(1)实例名称
KeyName: image-cache-name
类型：String
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
        this.ImageCacheIds = 'ImageCacheIds' in params ? params.ImageCacheIds : null;
        this.ImageCacheNames = 'ImageCacheNames' in params ? params.ImageCacheNames : null;
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
 * DescribePrometheusAlertRule请求参数结构体
 * @class
 */
class DescribePrometheusAlertRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 分页
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤
支持ID，Name
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
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
 * DescribeEdgeAvailableExtraArgs请求参数结构体
 * @class
 */
class DescribeEdgeAvailableExtraArgsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群版本
         * @type {string || null}
         */
        this.ClusterVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterVersion = 'ClusterVersion' in params ? params.ClusterVersion : null;

    }
}

/**
 * 已经存在的实例信息
 * @class
 */
class ExistedInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例是否支持加入集群(TRUE 可以加入 FALSE 不能加入)。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Usable = null;

        /**
         * 实例不支持加入的原因。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UnusableReason = null;

        /**
         * 实例已经所在的集群ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AlreadyInCluster = null;

        /**
         * 实例ID形如：ins-xxxxxxxx。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例主网卡的内网IP列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * 实例主网卡的公网IP列表。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.PublicIpAddresses = null;

        /**
         * 创建时间。按照ISO8601标准表示，并且使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 实例的CPU核数，单位：核。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CPU = null;

        /**
         * 实例内存容量，单位：GB。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 操作系统名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OsName = null;

        /**
         * 实例机型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 伸缩组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AutoscalingGroupId = null;

        /**
         * 实例计费模式。取值范围： PREPAID：表示预付费，即包年包月 POSTPAID_BY_HOUR：表示后付费，即按量计费 CDHPAID：CDH付费，即只对CDH计费，不对CDH上的实例计费。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 实例的IPv6地址。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.IPv6Addresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Usable = 'Usable' in params ? params.Usable : null;
        this.UnusableReason = 'UnusableReason' in params ? params.UnusableReason : null;
        this.AlreadyInCluster = 'AlreadyInCluster' in params ? params.AlreadyInCluster : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.PrivateIpAddresses = 'PrivateIpAddresses' in params ? params.PrivateIpAddresses : null;
        this.PublicIpAddresses = 'PublicIpAddresses' in params ? params.PublicIpAddresses : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.CPU = 'CPU' in params ? params.CPU : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.OsName = 'OsName' in params ? params.OsName : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.AutoscalingGroupId = 'AutoscalingGroupId' in params ? params.AutoscalingGroupId : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.IPv6Addresses = 'IPv6Addresses' in params ? params.IPv6Addresses : null;

    }
}

/**
 * AddNodeToNodePool返回参数结构体
 * @class
 */
class AddNodeToNodePoolResponse extends  AbstractModel {
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
 * 托管prometheusV2实例概览
 * @class
 */
class PrometheusInstancesOverview extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 运行状态（1:正在创建；2:运行中；3:异常；4:重启中；5:销毁中； 6:已停机； 7: 已删除）
         * @type {number || null}
         */
        this.InstanceStatus = null;

        /**
         * 计费状态（1:正常；2:过期; 3:销毁; 4:分配中; 5:分配失败）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ChargeStatus = null;

        /**
         * 是否开启 Grafana（0:不开启，1:开启）
         * @type {number || null}
         */
        this.EnableGrafana = null;

        /**
         * Grafana 面板 URL
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GrafanaURL = null;

        /**
         * 实例付费类型（1:试用版；2:预付费）
         * @type {number || null}
         */
        this.InstanceChargeType = null;

        /**
         * 规格名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SpecName = null;

        /**
         * 存储周期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DataRetentionTime = null;

        /**
         * 购买的实例过期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 自动续费标记(0:不自动续费；1:开启自动续费；2:禁止自动续费；-1:无效)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 绑定集群总数
         * @type {number || null}
         */
        this.BoundTotal = null;

        /**
         * 绑定集群正常状态总数
         * @type {number || null}
         */
        this.BoundNormal = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.InstanceStatus = 'InstanceStatus' in params ? params.InstanceStatus : null;
        this.ChargeStatus = 'ChargeStatus' in params ? params.ChargeStatus : null;
        this.EnableGrafana = 'EnableGrafana' in params ? params.EnableGrafana : null;
        this.GrafanaURL = 'GrafanaURL' in params ? params.GrafanaURL : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.SpecName = 'SpecName' in params ? params.SpecName : null;
        this.DataRetentionTime = 'DataRetentionTime' in params ? params.DataRetentionTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.BoundTotal = 'BoundTotal' in params ? params.BoundTotal : null;
        this.BoundNormal = 'BoundNormal' in params ? params.BoundNormal : null;

    }
}

/**
 * DescribePrometheusInstanceInitStatus返回参数结构体
 * @class
 */
class DescribePrometheusInstanceInitStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例初始化状态，取值：
uninitialized 未初始化 
initializing 初始化中
running 初始化完成，运行中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 初始化任务步骤
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TaskStepInfo> || null}
         */
        this.Steps = null;

        /**
         * 实例eks集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EksClusterId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Steps) {
            this.Steps = new Array();
            for (let z in params.Steps) {
                let obj = new TaskStepInfo();
                obj.deserialize(params.Steps[z]);
                this.Steps.push(obj);
            }
        }
        this.EksClusterId = 'EksClusterId' in params ? params.EksClusterId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisableEventPersistence返回参数结构体
 * @class
 */
class DisableEventPersistenceResponse extends  AbstractModel {
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
 * UpdateEKSContainerInstance请求参数结构体
 * @class
 */
class UpdateEKSContainerInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器实例 ID
         * @type {string || null}
         */
        this.EksCiId = null;

        /**
         * 实例重启策略： Always(总是重启)、Never(从不重启)、OnFailure(失败时重启)
         * @type {string || null}
         */
        this.RestartPolicy = null;

        /**
         * 数据卷，包含NfsVolume数组和CbsVolume数组
         * @type {EksCiVolume || null}
         */
        this.EksCiVolume = null;

        /**
         * 容器组
         * @type {Array.<Container> || null}
         */
        this.Containers = null;

        /**
         * Init 容器组
         * @type {Array.<Container> || null}
         */
        this.InitContainers = null;

        /**
         * 容器实例名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 镜像仓库凭证数组
         * @type {Array.<ImageRegistryCredential> || null}
         */
        this.ImageRegistryCredentials = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EksCiId = 'EksCiId' in params ? params.EksCiId : null;
        this.RestartPolicy = 'RestartPolicy' in params ? params.RestartPolicy : null;

        if (params.EksCiVolume) {
            let obj = new EksCiVolume();
            obj.deserialize(params.EksCiVolume)
            this.EksCiVolume = obj;
        }

        if (params.Containers) {
            this.Containers = new Array();
            for (let z in params.Containers) {
                let obj = new Container();
                obj.deserialize(params.Containers[z]);
                this.Containers.push(obj);
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
        this.Name = 'Name' in params ? params.Name : null;

        if (params.ImageRegistryCredentials) {
            this.ImageRegistryCredentials = new Array();
            for (let z in params.ImageRegistryCredentials) {
                let obj = new ImageRegistryCredential();
                obj.deserialize(params.ImageRegistryCredentials[z]);
                this.ImageRegistryCredentials.push(obj);
            }
        }

    }
}

/**
 * cuDNN的版本信息
 * @class
 */
class CUDNN extends  AbstractModel {
    constructor(){
        super();

        /**
         * cuDNN的版本
         * @type {string || null}
         */
        this.Version = null;

        /**
         * cuDNN的名字
         * @type {string || null}
         */
        this.Name = null;

        /**
         * cuDNN的Doc名字
         * @type {string || null}
         */
        this.DocName = null;

        /**
         * cuDNN的Dev名字
         * @type {string || null}
         */
        this.DevName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Version = 'Version' in params ? params.Version : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.DocName = 'DocName' in params ? params.DocName : null;
        this.DevName = 'DevName' in params ? params.DevName : null;

    }
}

/**
 * GetMostSuitableImageCache返回参数结构体
 * @class
 */
class GetMostSuitableImageCacheResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否有匹配的镜像缓存
         * @type {boolean || null}
         */
        this.Found = null;

        /**
         * 匹配的镜像缓存
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ImageCache || null}
         */
        this.ImageCache = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Found = 'Found' in params ? params.Found : null;

        if (params.ImageCache) {
            let obj = new ImageCache();
            obj.deserialize(params.ImageCache)
            this.ImageCache = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEdgeAvailableExtraArgs返回参数结构体
 * @class
 */
class DescribeEdgeAvailableExtraArgsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterVersion = null;

        /**
         * 可用的自定义参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EdgeAvailableExtraArgs || null}
         */
        this.AvailableExtraArgs = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterVersion = 'ClusterVersion' in params ? params.ClusterVersion : null;

        if (params.AvailableExtraArgs) {
            let obj = new EdgeAvailableExtraArgs();
            obj.deserialize(params.AvailableExtraArgs)
            this.AvailableExtraArgs = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePrometheusRecordRuleYaml请求参数结构体
 * @class
 */
class CreatePrometheusRecordRuleYamlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * yaml的内容
         * @type {string || null}
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * DescribeEnableVpcCniProgress请求参数结构体
 * @class
 */
class DescribeEnableVpcCniProgressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开启vpc-cni的集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * 集群的实例信息
 * @class
 */
class Instance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 节点角色, MASTER, WORKER, ETCD, MASTER_ETCD,ALL, 默认为WORKER
         * @type {string || null}
         */
        this.InstanceRole = null;

        /**
         * 实例异常(或者处于初始化中)的原因
         * @type {string || null}
         */
        this.FailedReason = null;

        /**
         * 实例的状态（running 运行中，initializing 初始化中，failed 异常）
         * @type {string || null}
         */
        this.InstanceState = null;

        /**
         * 实例是否封锁状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DrainStatus = null;

        /**
         * 节点配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {InstanceAdvancedSettings || null}
         */
        this.InstanceAdvancedSettings = null;

        /**
         * 添加时间
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 节点内网IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LanIP = null;

        /**
         * 资源池ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NodePoolId = null;

        /**
         * 自动伸缩组ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AutoscalingGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceRole = 'InstanceRole' in params ? params.InstanceRole : null;
        this.FailedReason = 'FailedReason' in params ? params.FailedReason : null;
        this.InstanceState = 'InstanceState' in params ? params.InstanceState : null;
        this.DrainStatus = 'DrainStatus' in params ? params.DrainStatus : null;

        if (params.InstanceAdvancedSettings) {
            let obj = new InstanceAdvancedSettings();
            obj.deserialize(params.InstanceAdvancedSettings)
            this.InstanceAdvancedSettings = obj;
        }
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.LanIP = 'LanIP' in params ? params.LanIP : null;
        this.NodePoolId = 'NodePoolId' in params ? params.NodePoolId : null;
        this.AutoscalingGroupId = 'AutoscalingGroupId' in params ? params.AutoscalingGroupId : null;

    }
}

/**
 * ModifyClusterAttribute返回参数结构体
 * @class
 */
class ModifyClusterAttributeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群所属项目
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 集群描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterDesc = null;

        /**
         * 集群等级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterLevel = null;

        /**
         * 自动变配集群等级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AutoUpgradeClusterLevel || null}
         */
        this.AutoUpgradeClusterLevel = null;

        /**
         * 是否开启QGPU共享
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.QGPUShareEnable = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.ClusterDesc = 'ClusterDesc' in params ? params.ClusterDesc : null;
        this.ClusterLevel = 'ClusterLevel' in params ? params.ClusterLevel : null;

        if (params.AutoUpgradeClusterLevel) {
            let obj = new AutoUpgradeClusterLevel();
            obj.deserialize(params.AutoUpgradeClusterLevel)
            this.AutoUpgradeClusterLevel = obj;
        }
        this.QGPUShareEnable = 'QGPUShareEnable' in params ? params.QGPUShareEnable : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 描述了 “云自动化助手” 服务相关的信息
 * @class
 */
class RunAutomationServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启云自动化助手。取值范围：<br><li>TRUE：表示开启云自动化助手服务<br><li>FALSE：表示不开启云自动化助手服务<br><br>默认取值：FALSE。
         * @type {boolean || null}
         */
        this.Enabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

/**
 * CreateCluster返回参数结构体
 * @class
 */
class CreateClusterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 关联集群时在集群内部署组件的pod额外配置
 * @class
 */
class PrometheusClusterAgentPodConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否使用HostNetWork
         * @type {boolean || null}
         */
        this.HostNet = null;

        /**
         * 指定pod运行节点
         * @type {Array.<Label> || null}
         */
        this.NodeSelector = null;

        /**
         * 容忍污点
         * @type {Array.<Toleration> || null}
         */
        this.Tolerations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HostNet = 'HostNet' in params ? params.HostNet : null;

        if (params.NodeSelector) {
            this.NodeSelector = new Array();
            for (let z in params.NodeSelector) {
                let obj = new Label();
                obj.deserialize(params.NodeSelector[z]);
                this.NodeSelector.push(obj);
            }
        }

        if (params.Tolerations) {
            this.Tolerations = new Array();
            for (let z in params.Tolerations) {
                let obj = new Toleration();
                obj.deserialize(params.Tolerations[z]);
                this.Tolerations.push(obj);
            }
        }

    }
}

/**
 * 描述了 “云安全” 服务相关的信息
 * @class
 */
class RunSecurityServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启[云安全](/document/product/296)服务。取值范围：<br><li>TRUE：表示开启云安全服务<br><li>FALSE：表示不开启云安全服务<br><br>默认取值：TRUE。
         * @type {boolean || null}
         */
        this.Enabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

/**
 * 镜像缓存的信息
 * @class
 */
class ImageCache extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像缓存Id
         * @type {string || null}
         */
        this.ImageCacheId = null;

        /**
         * 镜像缓存名称
         * @type {string || null}
         */
        this.ImageCacheName = null;

        /**
         * 镜像缓存大小。单位：GiB
         * @type {number || null}
         */
        this.ImageCacheSize = null;

        /**
         * 镜像缓存包含的镜像列表
         * @type {Array.<string> || null}
         */
        this.Images = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * 到期时间
         * @type {string || null}
         */
        this.ExpireDateTime = null;

        /**
         * 镜像缓存事件信息
         * @type {Array.<ImageCacheEvent> || null}
         */
        this.Events = null;

        /**
         * 最新一次匹配到镜像缓存的时间
         * @type {string || null}
         */
        this.LastMatchedTime = null;

        /**
         * 镜像缓存对应的快照Id
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * 镜像缓存状态，可能取值：
Pending：创建中
Ready：创建完成
Failed：创建失败
Updating：更新中
UpdateFailed：更新失败
只有状态为Ready时，才能正常使用镜像缓存
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
        this.ImageCacheId = 'ImageCacheId' in params ? params.ImageCacheId : null;
        this.ImageCacheName = 'ImageCacheName' in params ? params.ImageCacheName : null;
        this.ImageCacheSize = 'ImageCacheSize' in params ? params.ImageCacheSize : null;
        this.Images = 'Images' in params ? params.Images : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.ExpireDateTime = 'ExpireDateTime' in params ? params.ExpireDateTime : null;

        if (params.Events) {
            this.Events = new Array();
            for (let z in params.Events) {
                let obj = new ImageCacheEvent();
                obj.deserialize(params.Events[z]);
                this.Events.push(obj);
            }
        }
        this.LastMatchedTime = 'LastMatchedTime' in params ? params.LastMatchedTime : null;
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DeletePrometheusAlertRule返回参数结构体
 * @class
 */
class DeletePrometheusAlertRuleResponse extends  AbstractModel {
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
 * DescribeClusterPendingReleases请求参数结构体
 * @class
 */
class DescribeClusterPendingReleasesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 返回数量限制，默认20，最大100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 集群类型
         * @type {string || null}
         */
        this.ClusterType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;

    }
}

/**
 * DeletePrometheusConfig返回参数结构体
 * @class
 */
class DeletePrometheusConfigResponse extends  AbstractModel {
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
 * DescribeEksContainerInstanceLog请求参数结构体
 * @class
 */
class DescribeEksContainerInstanceLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Eks Container Instance Id，即容器实例Id
         * @type {string || null}
         */
        this.EksCiId = null;

        /**
         * 容器名称，单容器的实例可选填。如果为多容器实例，请指定容器名称。
         * @type {string || null}
         */
        this.ContainerName = null;

        /**
         * 返回最新日志行数，默认500，最大2000。日志内容最大返回 1M 数据。
         * @type {number || null}
         */
        this.Tail = null;

        /**
         * UTC时间，RFC3339标准
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 是否是查上一个容器（如果容器退出重启了）
         * @type {boolean || null}
         */
        this.Previous = null;

        /**
         * 查询最近多少秒内的日志
         * @type {number || null}
         */
        this.SinceSeconds = null;

        /**
         * 日志总大小限制
         * @type {number || null}
         */
        this.LimitBytes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EksCiId = 'EksCiId' in params ? params.EksCiId : null;
        this.ContainerName = 'ContainerName' in params ? params.ContainerName : null;
        this.Tail = 'Tail' in params ? params.Tail : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Previous = 'Previous' in params ? params.Previous : null;
        this.SinceSeconds = 'SinceSeconds' in params ? params.SinceSeconds : null;
        this.LimitBytes = 'LimitBytes' in params ? params.LimitBytes : null;

    }
}

/**
 * CreatePrometheusRecordRuleYaml返回参数结构体
 * @class
 */
class CreatePrometheusRecordRuleYamlResponse extends  AbstractModel {
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
 * DescribeClusterInstances请求参数结构体
 * @class
 */
class DescribeClusterInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 需要获取的节点实例Id列表。如果为空，表示拉取集群下所有节点实例。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 节点角色, MASTER, WORKER, ETCD, MASTER_ETCD,ALL, 默认为WORKER。默认为WORKER类型。
         * @type {string || null}
         */
        this.InstanceRole = null;

        /**
         * 过滤条件列表；Name的可选值为nodepool-id、nodepool-instance-type；Name为nodepool-id表示根据节点池id过滤机器，Value的值为具体的节点池id，Name为nodepool-instance-type表示节点加入节点池的方式，Value的值为MANUALLY_ADDED（手动加入节点池）、AUTOSCALING_ADDED（伸缩组扩容方式加入节点池）、ALL（手动加入节点池 和 伸缩组扩容方式加入节点池）
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceRole = 'InstanceRole' in params ? params.InstanceRole : null;

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
 * 机型信息和其可支持的最大VPC-CNI模式Pod数量信息
 * @class
 */
class PodLimitsInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机型所在可用区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 机型所属机型族
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceFamily = null;

        /**
         * 实例机型名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 机型可支持的最大VPC-CNI模式Pod数量信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PodLimitsByType || null}
         */
        this.PodLimits = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceFamily = 'InstanceFamily' in params ? params.InstanceFamily : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

        if (params.PodLimits) {
            let obj = new PodLimitsByType();
            obj.deserialize(params.PodLimits)
            this.PodLimits = obj;
        }

    }
}

/**
 * ModifyPrometheusTemp请求参数结构体
 * @class
 */
class ModifyPrometheusTempRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板ID
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 修改内容
         * @type {PrometheusTempModify || null}
         */
        this.Template = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

        if (params.Template) {
            let obj = new PrometheusTempModify();
            obj.deserialize(params.Template)
            this.Template = obj;
        }

    }
}

/**
 * 集群中控制器的状态描述
 * @class
 */
class ControllerStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 控制器的名字
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 控制器是否开启
         * @type {boolean || null}
         */
        this.Enabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

/**
 * DeletePrometheusTempSync返回参数结构体
 * @class
 */
class DeletePrometheusTempSyncResponse extends  AbstractModel {
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
 * DescribePrometheusRecordRules请求参数结构体
 * @class
 */
class DescribePrometheusRecordRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 分页
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
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
 * 虚拟节点池
 * @class
 */
class VirtualNodePool extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点池ID
         * @type {string || null}
         */
        this.NodePoolId = null;

        /**
         * 子网列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * 节点池名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 节点池生命周期
         * @type {string || null}
         */
        this.LifeState = null;

        /**
         * 虚拟节点label
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Label> || null}
         */
        this.Labels = null;

        /**
         * 虚拟节点taint
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Taint> || null}
         */
        this.Taints = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodePoolId = 'NodePoolId' in params ? params.NodePoolId : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.LifeState = 'LifeState' in params ? params.LifeState : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new Label();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.Taints) {
            this.Taints = new Array();
            for (let z in params.Taints) {
                let obj = new Taint();
                obj.deserialize(params.Taints[z]);
                this.Taints.push(obj);
            }
        }

    }
}

/**
 * DescribeTKEEdgeClusterStatus请求参数结构体
 * @class
 */
class DescribeTKEEdgeClusterStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 边缘计算容器集群Id
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * AcquireClusterAdminRole返回参数结构体
 * @class
 */
class AcquireClusterAdminRoleResponse extends  AbstractModel {
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
 * DescribeEdgeClusterInstances返回参数结构体
 * @class
 */
class DescribeEdgeClusterInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该集群总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 节点信息集合
         * @type {string || null}
         */
        this.InstanceInfoSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.InstanceInfoSet = 'InstanceInfoSet' in params ? params.InstanceInfoSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateEdgeClusterVersion请求参数结构体
 * @class
 */
class UpdateEdgeClusterVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群 Id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 需要升级到的版本
         * @type {string || null}
         */
        this.EdgeVersion = null;

        /**
         * 自定义边缘组件镜像仓库前缀
         * @type {string || null}
         */
        this.RegistryPrefix = null;

        /**
         * 是否跳过预检查阶段
         * @type {boolean || null}
         */
        this.SkipPreCheck = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.EdgeVersion = 'EdgeVersion' in params ? params.EdgeVersion : null;
        this.RegistryPrefix = 'RegistryPrefix' in params ? params.RegistryPrefix : null;
        this.SkipPreCheck = 'SkipPreCheck' in params ? params.SkipPreCheck : null;

    }
}

/**
 * GetTkeAppChartList返回参数结构体
 * @class
 */
class GetTkeAppChartListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 所支持的chart列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AppChart> || null}
         */
        this.AppCharts = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AppCharts) {
            this.AppCharts = new Array();
            for (let z in params.AppCharts) {
                let obj = new AppChart();
                obj.deserialize(params.AppCharts[z]);
                this.AppCharts.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePrometheusTemplateSync请求参数结构体
 * @class
 */
class DescribePrometheusTemplateSyncRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板ID
         * @type {string || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * 可升级节点信息
 * @class
 */
class UpgradeAbleInstancesItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 节点的当前版本
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 当前版本的最新小版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LatestVersion = null;

        /**
         * RuntimeVersion
         * @type {string || null}
         */
        this.RuntimeVersion = null;

        /**
         * RuntimeLatestVersion
         * @type {string || null}
         */
        this.RuntimeLatestVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.LatestVersion = 'LatestVersion' in params ? params.LatestVersion : null;
        this.RuntimeVersion = 'RuntimeVersion' in params ? params.RuntimeVersion : null;
        this.RuntimeLatestVersion = 'RuntimeLatestVersion' in params ? params.RuntimeLatestVersion : null;

    }
}

/**
 * UpgradeClusterInstances返回参数结构体
 * @class
 */
class UpgradeClusterInstancesResponse extends  AbstractModel {
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
 * 自定义驱动信息
 * @class
 */
class CustomDriver extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义GPU驱动地址链接
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Address = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Address = 'Address' in params ? params.Address : null;

    }
}

/**
 * DescribeClusterAsGroupOption请求参数结构体
 * @class
 */
class DescribeClusterAsGroupOptionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribePrometheusAgentInstances返回参数结构体
 * @class
 */
class DescribePrometheusAgentInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 关联该集群的实例列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Instances = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Instances = 'Instances' in params ? params.Instances : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddExistedInstances请求参数结构体
 * @class
 */
class AddExistedInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 实例列表，不支持竞价实例
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 实例额外需要设置参数信息(默认值)
         * @type {InstanceAdvancedSettings || null}
         */
        this.InstanceAdvancedSettings = null;

        /**
         * 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认开启云监控、云安全服务。
         * @type {EnhancedService || null}
         */
        this.EnhancedService = null;

        /**
         * 节点登录信息（目前仅支持使用Password或者单个KeyIds）
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * 重装系统时，可以指定修改实例的HostName(集群为HostName模式时，此参数必传，规则名称除不支持大写字符外与[CVM创建实例](https://cloud.tencent.com/document/product/213/15730)接口HostName一致)
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * 实例所属安全组。该参数可以通过调用 DescribeSecurityGroups 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。（目前仅支持设置单个sgId）
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 节点池选项
         * @type {NodePoolOption || null}
         */
        this.NodePool = null;

        /**
         * 校验规则相关选项，可配置跳过某些校验规则。目前支持GlobalRouteCIDRCheck（跳过GlobalRouter的相关校验），VpcCniCIDRCheck（跳过VpcCni相关校验）
         * @type {Array.<string> || null}
         */
        this.SkipValidateOptions = null;

        /**
         * 参数InstanceAdvancedSettingsOverride数组用于定制化地配置各台instance，与InstanceIds顺序对应。当传入InstanceAdvancedSettingsOverrides数组时，将覆盖默认参数InstanceAdvancedSettings；当没有传入参数InstanceAdvancedSettingsOverrides时，InstanceAdvancedSettings参数对每台instance生效。

参数InstanceAdvancedSettingsOverride数组的长度应与InstanceIds数组一致；当长度大于InstanceIds数组长度时将报错；当长度小于InstanceIds数组时，没有对应配置的instace将使用默认配置。
         * @type {Array.<InstanceAdvancedSettings> || null}
         */
        this.InstanceAdvancedSettingsOverrides = null;

        /**
         * 节点镜像（节点选项时，该参数是必传参数）
         * @type {string || null}
         */
        this.ImageId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.InstanceAdvancedSettings) {
            let obj = new InstanceAdvancedSettings();
            obj.deserialize(params.InstanceAdvancedSettings)
            this.InstanceAdvancedSettings = obj;
        }

        if (params.EnhancedService) {
            let obj = new EnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }
        this.HostName = 'HostName' in params ? params.HostName : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.NodePool) {
            let obj = new NodePoolOption();
            obj.deserialize(params.NodePool)
            this.NodePool = obj;
        }
        this.SkipValidateOptions = 'SkipValidateOptions' in params ? params.SkipValidateOptions : null;

        if (params.InstanceAdvancedSettingsOverrides) {
            this.InstanceAdvancedSettingsOverrides = new Array();
            for (let z in params.InstanceAdvancedSettingsOverrides) {
                let obj = new InstanceAdvancedSettings();
                obj.deserialize(params.InstanceAdvancedSettingsOverrides[z]);
                this.InstanceAdvancedSettingsOverrides.push(obj);
            }
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;

    }
}

/**
 * 集群弹性伸缩配置
 * @class
 */
class ClusterAsGroupOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启缩容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsScaleDownEnabled = null;

        /**
         * 多伸缩组情况下扩容选择算法(random 随机选择，most-pods 最多类型的Pod least-waste 最少的资源浪费，默认为random)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Expander = null;

        /**
         * 最大并发缩容数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxEmptyBulkDelete = null;

        /**
         * 集群扩容后多少分钟开始判断缩容（默认为10分钟）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ScaleDownDelay = null;

        /**
         * 节点连续空闲多少分钟后被缩容（默认为 10分钟）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ScaleDownUnneededTime = null;

        /**
         * 节点资源使用量低于多少(百分比)时认为空闲(默认: 50(百分比))
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ScaleDownUtilizationThreshold = null;

        /**
         * 含有本地存储Pod的节点是否不缩容(默认： FALSE)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.SkipNodesWithLocalStorage = null;

        /**
         * 含有kube-system namespace下非DaemonSet管理的Pod的节点是否不缩容 (默认： FALSE)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.SkipNodesWithSystemPods = null;

        /**
         * 计算资源使用量时是否默认忽略DaemonSet的实例(默认值: False，不忽略)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IgnoreDaemonSetsUtilization = null;

        /**
         * CA做健康性判断的个数，默认3，即超过OkTotalUnreadyCount个数后，CA会进行健康性判断。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OkTotalUnreadyCount = null;

        /**
         * 未就绪节点的最大百分比，此后CA会停止操作
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxTotalUnreadyPercentage = null;

        /**
         * 表示未准备就绪的节点在有资格进行缩减之前应该停留多长时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ScaleDownUnreadyTime = null;

        /**
         * CA删除未在Kubernetes中注册的节点之前等待的时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UnregisteredNodeRemovalTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsScaleDownEnabled = 'IsScaleDownEnabled' in params ? params.IsScaleDownEnabled : null;
        this.Expander = 'Expander' in params ? params.Expander : null;
        this.MaxEmptyBulkDelete = 'MaxEmptyBulkDelete' in params ? params.MaxEmptyBulkDelete : null;
        this.ScaleDownDelay = 'ScaleDownDelay' in params ? params.ScaleDownDelay : null;
        this.ScaleDownUnneededTime = 'ScaleDownUnneededTime' in params ? params.ScaleDownUnneededTime : null;
        this.ScaleDownUtilizationThreshold = 'ScaleDownUtilizationThreshold' in params ? params.ScaleDownUtilizationThreshold : null;
        this.SkipNodesWithLocalStorage = 'SkipNodesWithLocalStorage' in params ? params.SkipNodesWithLocalStorage : null;
        this.SkipNodesWithSystemPods = 'SkipNodesWithSystemPods' in params ? params.SkipNodesWithSystemPods : null;
        this.IgnoreDaemonSetsUtilization = 'IgnoreDaemonSetsUtilization' in params ? params.IgnoreDaemonSetsUtilization : null;
        this.OkTotalUnreadyCount = 'OkTotalUnreadyCount' in params ? params.OkTotalUnreadyCount : null;
        this.MaxTotalUnreadyPercentage = 'MaxTotalUnreadyPercentage' in params ? params.MaxTotalUnreadyPercentage : null;
        this.ScaleDownUnreadyTime = 'ScaleDownUnreadyTime' in params ? params.ScaleDownUnreadyTime : null;
        this.UnregisteredNodeRemovalTime = 'UnregisteredNodeRemovalTime' in params ? params.UnregisteredNodeRemovalTime : null;

    }
}

/**
 * DeletePrometheusTemp返回参数结构体
 * @class
 */
class DeletePrometheusTempResponse extends  AbstractModel {
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
 * DescribeClusterNodePools请求参数结构体
 * @class
 */
class DescribeClusterNodePoolsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ClusterId（集群id）
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * ·  NodePoolsName
    按照【节点池名】进行过滤。
    类型：String
    必选：否

·  NodePoolsId
    按照【节点池id】进行过滤。
    类型：String
    必选：否

·  tags
    按照【标签键值对】进行过滤。
    类型：String
    必选：否

·  tag:tag-key
    按照【标签键值对】进行过滤。
    类型：String
    必选：否
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

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
 * DescribeClusterRouteTables请求参数结构体
 * @class
 */
class DescribeClusterRouteTablesRequest extends  AbstractModel {
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
 * DescribeRegions请求参数结构体
 * @class
 */
class DescribeRegionsRequest extends  AbstractModel {
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
 * DeleteClusterRoute请求参数结构体
 * @class
 */
class DeleteClusterRouteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表名称。
         * @type {string || null}
         */
        this.RouteTableName = null;

        /**
         * 下一跳地址。
         * @type {string || null}
         */
        this.GatewayIp = null;

        /**
         * 目的端CIDR。
         * @type {string || null}
         */
        this.DestinationCidrBlock = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;
        this.GatewayIp = 'GatewayIp' in params ? params.GatewayIp : null;
        this.DestinationCidrBlock = 'DestinationCidrBlock' in params ? params.DestinationCidrBlock : null;

    }
}

/**
 * DeleteClusterEndpoint请求参数结构体
 * @class
 */
class DeleteClusterEndpointRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 是否为外网访问（TRUE 外网访问 FALSE 内网访问，默认值： FALSE）
         * @type {boolean || null}
         */
        this.IsExtranet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.IsExtranet = 'IsExtranet' in params ? params.IsExtranet : null;

    }
}

/**
 * DeleteClusterVirtualNode请求参数结构体
 * @class
 */
class DeleteClusterVirtualNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 虚拟节点列表
         * @type {Array.<string> || null}
         */
        this.NodeNames = null;

        /**
         * 是否强制删除：如果虚拟节点上有运行中Pod，则非强制删除状态下不会进行删除
         * @type {boolean || null}
         */
        this.Force = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NodeNames = 'NodeNames' in params ? params.NodeNames : null;
        this.Force = 'Force' in params ? params.Force : null;

    }
}

/**
 * DescribeClusterNodePoolDetail请求参数结构体
 * @class
 */
class DescribeClusterNodePoolDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 节点池id
         * @type {string || null}
         */
        this.NodePoolId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NodePoolId = 'NodePoolId' in params ? params.NodePoolId : null;

    }
}

/**
 * DescribePrometheusTempSync请求参数结构体
 * @class
 */
class DescribePrometheusTempSyncRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板ID
         * @type {string || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DescribePrometheusGlobalConfig返回参数结构体
 * @class
 */
class DescribePrometheusGlobalConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置内容
         * @type {string || null}
         */
        this.Config = null;

        /**
         * ServiceMonitors列表以及对应targets信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.ServiceMonitors = null;

        /**
         * PodMonitors列表以及对应targets信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.PodMonitors = null;

        /**
         * RawJobs列表以及对应targets信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.RawJobs = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Config = 'Config' in params ? params.Config : null;

        if (params.ServiceMonitors) {
            this.ServiceMonitors = new Array();
            for (let z in params.ServiceMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.ServiceMonitors[z]);
                this.ServiceMonitors.push(obj);
            }
        }

        if (params.PodMonitors) {
            this.PodMonitors = new Array();
            for (let z in params.PodMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.PodMonitors[z]);
                this.PodMonitors.push(obj);
            }
        }

        if (params.RawJobs) {
            this.RawJobs = new Array();
            for (let z in params.RawJobs) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.RawJobs[z]);
                this.RawJobs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeClusterReleaseHistory返回参数结构体
 * @class
 */
class DescribeClusterReleaseHistoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 已安装应用版本历史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ReleaseHistory> || null}
         */
        this.ReleaseHistorySet = null;

        /**
         * 总数量
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.ReleaseHistorySet) {
            this.ReleaseHistorySet = new Array();
            for (let z in params.ReleaseHistorySet) {
                let obj = new ReleaseHistory();
                obj.deserialize(params.ReleaseHistorySet[z]);
                this.ReleaseHistorySet.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeImages请求参数结构体
 * @class
 */
class DescribeImagesRequest extends  AbstractModel {
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
 * UninstallEdgeLogAgent返回参数结构体
 * @class
 */
class UninstallEdgeLogAgentResponse extends  AbstractModel {
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
 * AddVpcCniSubnets请求参数结构体
 * @class
 */
class AddVpcCniSubnetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 为集群容器网络增加的子网列表
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * 集群所属的VPC的ID
         * @type {string || null}
         */
        this.VpcId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

    }
}

/**
 * DescribePrometheusAlertHistory返回参数结构体
 * @class
 */
class DescribePrometheusAlertHistoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警历史
         * @type {Array.<PrometheusAlertHistoryItem> || null}
         */
        this.Items = null;

        /**
         * 总数
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new PrometheusAlertHistoryItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 已存在实例的重装参数
 * @class
 */
class ExistedInstancesPara extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 实例额外需要设置参数信息
         * @type {InstanceAdvancedSettings || null}
         */
        this.InstanceAdvancedSettings = null;

        /**
         * 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认开启云监控、云安全服务。
         * @type {EnhancedService || null}
         */
        this.EnhancedService = null;

        /**
         * 节点登录信息（目前仅支持使用Password或者单个KeyIds）
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * 实例所属安全组。该参数可以通过调用 DescribeSecurityGroups 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 重装系统时，可以指定修改实例的HostName(集群为HostName模式时，此参数必传，规则名称除不支持大写字符外与[CVM创建实例](https://cloud.tencent.com/document/product/213/15730)接口HostName一致)
         * @type {string || null}
         */
        this.HostName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.InstanceAdvancedSettings) {
            let obj = new InstanceAdvancedSettings();
            obj.deserialize(params.InstanceAdvancedSettings)
            this.InstanceAdvancedSettings = obj;
        }

        if (params.EnhancedService) {
            let obj = new EnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.HostName = 'HostName' in params ? params.HostName : null;

    }
}

/**
 * DescribeClusterAsGroupOption返回参数结构体
 * @class
 */
class DescribeClusterAsGroupOptionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群弹性伸缩属性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ClusterAsGroupOption || null}
         */
        this.ClusterAsGroupOption = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ClusterAsGroupOption) {
            let obj = new ClusterAsGroupOption();
            obj.deserialize(params.ClusterAsGroupOption)
            this.ClusterAsGroupOption = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTKEEdgeCluster返回参数结构体
 * @class
 */
class CreateTKEEdgeClusterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 边缘计算集群Id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEdgeClusterExtraArgs返回参数结构体
 * @class
 */
class DescribeEdgeClusterExtraArgsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群自定义参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EdgeClusterExtraArgs || null}
         */
        this.ClusterExtraArgs = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ClusterExtraArgs) {
            let obj = new EdgeClusterExtraArgs();
            obj.deserialize(params.ClusterExtraArgs)
            this.ClusterExtraArgs = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 资源删除选项
 * @class
 */
class ResourceDeleteOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源类型，例如CBS
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * 集群删除时资源的删除模式：terminate（销毁），retain （保留）
         * @type {string || null}
         */
        this.DeleteMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.DeleteMode = 'DeleteMode' in params ? params.DeleteMode : null;

    }
}

/**
 * InstallEdgeLogAgent请求参数结构体
 * @class
 */
class InstallEdgeLogAgentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * CheckEdgeClusterCIDR请求参数结构体
 * @class
 */
class CheckEdgeClusterCIDRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群的vpc-id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 集群的pod CIDR
         * @type {string || null}
         */
        this.PodCIDR = null;

        /**
         * 集群的service CIDR
         * @type {string || null}
         */
        this.ServiceCIDR = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.PodCIDR = 'PodCIDR' in params ? params.PodCIDR : null;
        this.ServiceCIDR = 'ServiceCIDR' in params ? params.ServiceCIDR : null;

    }
}

/**
 * CreateImageCache请求参数结构体
 * @class
 */
class CreateImageCacheRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于制作镜像缓存的容器镜像列表
         * @type {Array.<string> || null}
         */
        this.Images = null;

        /**
         * 实例所属子网Id
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 实例所属VPC Id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 镜像缓存名称
         * @type {string || null}
         */
        this.ImageCacheName = null;

        /**
         * 安全组Id
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 镜像仓库凭证数组
         * @type {Array.<ImageRegistryCredential> || null}
         */
        this.ImageRegistryCredentials = null;

        /**
         * 用来绑定容器实例的已有EIP
         * @type {string || null}
         */
        this.ExistedEipId = null;

        /**
         * 是否为容器实例自动创建EIP，默认为false。若传true，则此参数和ExistedEipIds互斥
         * @type {boolean || null}
         */
        this.AutoCreateEip = null;

        /**
         * 自动创建EIP的可选参数。若传此参数，则会自动创建EIP。
另外此参数和ExistedEipIds互斥
         * @type {EipAttribute || null}
         */
        this.AutoCreateEipAttribute = null;

        /**
         * 镜像缓存的大小。默认为20 GiB。取值范围参考[云硬盘类型](https://cloud.tencent.com/document/product/362/2353)中的高性能云盘类型的大小限制。
         * @type {number || null}
         */
        this.ImageCacheSize = null;

        /**
         * 镜像缓存保留时间天数，过期将会自动清理，默认为0，永不过期。
         * @type {number || null}
         */
        this.RetentionDays = null;

        /**
         * 指定拉取镜像仓库的镜像时不校验证书。如["harbor.example.com"]。
         * @type {Array.<string> || null}
         */
        this.RegistrySkipVerifyList = null;

        /**
         * 指定拉取镜像仓库的镜像时使用 HTTP 协议。如["harbor.example.com"]。
         * @type {Array.<string> || null}
         */
        this.RegistryHttpEndPointList = null;

        /**
         * 自定义制作镜像缓存过程中容器实例的宿主机上的 DNS。如：
"nameserver 4.4.4.4\nnameserver 8.8.8.8"
         * @type {string || null}
         */
        this.ResolveConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Images = 'Images' in params ? params.Images : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.ImageCacheName = 'ImageCacheName' in params ? params.ImageCacheName : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.ImageRegistryCredentials) {
            this.ImageRegistryCredentials = new Array();
            for (let z in params.ImageRegistryCredentials) {
                let obj = new ImageRegistryCredential();
                obj.deserialize(params.ImageRegistryCredentials[z]);
                this.ImageRegistryCredentials.push(obj);
            }
        }
        this.ExistedEipId = 'ExistedEipId' in params ? params.ExistedEipId : null;
        this.AutoCreateEip = 'AutoCreateEip' in params ? params.AutoCreateEip : null;

        if (params.AutoCreateEipAttribute) {
            let obj = new EipAttribute();
            obj.deserialize(params.AutoCreateEipAttribute)
            this.AutoCreateEipAttribute = obj;
        }
        this.ImageCacheSize = 'ImageCacheSize' in params ? params.ImageCacheSize : null;
        this.RetentionDays = 'RetentionDays' in params ? params.RetentionDays : null;
        this.RegistrySkipVerifyList = 'RegistrySkipVerifyList' in params ? params.RegistrySkipVerifyList : null;
        this.RegistryHttpEndPointList = 'RegistryHttpEndPointList' in params ? params.RegistryHttpEndPointList : null;
        this.ResolveConfig = 'ResolveConfig' in params ? params.ResolveConfig : null;

    }
}

/**
 * UpdateClusterVersion请求参数结构体
 * @class
 */
class UpdateClusterVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群 Id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 需要升级到的版本
         * @type {string || null}
         */
        this.DstVersion = null;

        /**
         * 集群自定义参数
         * @type {ClusterExtraArgs || null}
         */
        this.ExtraArgs = null;

        /**
         * 可容忍的最大不可用pod数目
         * @type {number || null}
         */
        this.MaxNotReadyPercent = null;

        /**
         * 是否跳过预检查阶段
         * @type {boolean || null}
         */
        this.SkipPreCheck = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.DstVersion = 'DstVersion' in params ? params.DstVersion : null;

        if (params.ExtraArgs) {
            let obj = new ClusterExtraArgs();
            obj.deserialize(params.ExtraArgs)
            this.ExtraArgs = obj;
        }
        this.MaxNotReadyPercent = 'MaxNotReadyPercent' in params ? params.MaxNotReadyPercent : null;
        this.SkipPreCheck = 'SkipPreCheck' in params ? params.SkipPreCheck : null;

    }
}

/**
 * 健康检查探测参数
 * @class
 */
class Probe extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of seconds after the container has started before liveness probes are initiated.
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InitialDelaySeconds = null;

        /**
         * Number of seconds after which the probe times out.
Defaults to 1 second. Minimum value is 1.
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TimeoutSeconds = null;

        /**
         * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PeriodSeconds = null;

        /**
         * Minimum consecutive successes for the probe to be considered successful after having failed.Defaults to 1. Must be 1 for liveness. Minimum value is 1.
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SuccessThreshold = null;

        /**
         * Minimum consecutive failures for the probe to be considered failed after having succeeded.Defaults to 3. Minimum value is 1.
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FailureThreshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InitialDelaySeconds = 'InitialDelaySeconds' in params ? params.InitialDelaySeconds : null;
        this.TimeoutSeconds = 'TimeoutSeconds' in params ? params.TimeoutSeconds : null;
        this.PeriodSeconds = 'PeriodSeconds' in params ? params.PeriodSeconds : null;
        this.SuccessThreshold = 'SuccessThreshold' in params ? params.SuccessThreshold : null;
        this.FailureThreshold = 'FailureThreshold' in params ? params.FailureThreshold : null;

    }
}

/**
 * 节点统计列表
 * @class
 */
class NodeCountSummary extends  AbstractModel {
    constructor(){
        super();

        /**
         * 手动管理的节点
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ManuallyAdded || null}
         */
        this.ManuallyAdded = null;

        /**
         * 自动管理的节点
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AutoscalingAdded || null}
         */
        this.AutoscalingAdded = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ManuallyAdded) {
            let obj = new ManuallyAdded();
            obj.deserialize(params.ManuallyAdded)
            this.ManuallyAdded = obj;
        }

        if (params.AutoscalingAdded) {
            let obj = new AutoscalingAdded();
            obj.deserialize(params.AutoscalingAdded)
            this.AutoscalingAdded = obj;
        }

    }
}

/**
 * 边缘计算集群信息
 * @class
 */
class EdgeCluster extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群Id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群名称
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * Vpc Id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 集群pod cidr
         * @type {string || null}
         */
        this.PodCIDR = null;

        /**
         * 集群 service cidr
         * @type {string || null}
         */
        this.ServiceCIDR = null;

        /**
         * k8s 版本号
         * @type {string || null}
         */
        this.K8SVersion = null;

        /**
         * 集群状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 集群描述信息
         * @type {string || null}
         */
        this.ClusterDesc = null;

        /**
         * 集群创建时间
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 边缘集群版本
         * @type {string || null}
         */
        this.EdgeClusterVersion = null;

        /**
         * 节点最大Pod数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxNodePodNum = null;

        /**
         * 集群高级设置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EdgeClusterAdvancedSettings || null}
         */
        this.ClusterAdvancedSettings = null;

        /**
         * 边缘容器集群级别
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 是否支持自动提升集群配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.AutoUpgradeClusterLevel = null;

        /**
         * 集群付费模式，支持POSTPAID_BY_HOUR或者PREPAID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChargeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.PodCIDR = 'PodCIDR' in params ? params.PodCIDR : null;
        this.ServiceCIDR = 'ServiceCIDR' in params ? params.ServiceCIDR : null;
        this.K8SVersion = 'K8SVersion' in params ? params.K8SVersion : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ClusterDesc = 'ClusterDesc' in params ? params.ClusterDesc : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.EdgeClusterVersion = 'EdgeClusterVersion' in params ? params.EdgeClusterVersion : null;
        this.MaxNodePodNum = 'MaxNodePodNum' in params ? params.MaxNodePodNum : null;

        if (params.ClusterAdvancedSettings) {
            let obj = new EdgeClusterAdvancedSettings();
            obj.deserialize(params.ClusterAdvancedSettings)
            this.ClusterAdvancedSettings = obj;
        }
        this.Level = 'Level' in params ? params.Level : null;
        this.AutoUpgradeClusterLevel = 'AutoUpgradeClusterLevel' in params ? params.AutoUpgradeClusterLevel : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;

    }
}

/**
 * DescribeClusterNodePoolDetail返回参数结构体
 * @class
 */
class DescribeClusterNodePoolDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点池详情
         * @type {NodePool || null}
         */
        this.NodePool = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NodePool) {
            let obj = new NodePool();
            obj.deserialize(params.NodePool)
            this.NodePool = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEKSContainerInstanceEvent请求参数结构体
 * @class
 */
class DescribeEKSContainerInstanceEventRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器实例id
         * @type {string || null}
         */
        this.EksCiId = null;

        /**
         * 最大事件数量。默认为50，最大取值100。
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
        this.EksCiId = 'EksCiId' in params ? params.EksCiId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ScaleOutClusterMaster返回参数结构体
 * @class
 */
class ScaleOutClusterMasterResponse extends  AbstractModel {
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
 * kubernetes Taint
 * @class
 */
class Toleration extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容忍应用到的 taint key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 键与值的关系
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 要匹配的污点效果
         * @type {string || null}
         */
        this.Effect = null;

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
        this.Effect = 'Effect' in params ? params.Effect : null;

    }
}

/**
 * CreateEKSContainerInstances返回参数结构体
 * @class
 */
class CreateEKSContainerInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * EKS Container Instance Id集合，格式为eksci-xxx，是容器实例的唯一标识。
         * @type {Array.<string> || null}
         */
        this.EksCiIds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EksCiIds = 'EksCiIds' in params ? params.EksCiIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteEdgeCVMInstances返回参数结构体
 * @class
 */
class DeleteEdgeCVMInstancesResponse extends  AbstractModel {
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
 * DescribeClusterKubeconfig返回参数结构体
 * @class
 */
class DescribeClusterKubeconfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子账户kubeconfig文件，可用于直接访问集群kube-apiserver
         * @type {string || null}
         */
        this.Kubeconfig = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Kubeconfig = 'Kubeconfig' in params ? params.Kubeconfig : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeClusterCommonNames请求参数结构体
 * @class
 */
class DescribeClusterCommonNamesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 子账户列表，不可超出最大值50
         * @type {Array.<string> || null}
         */
        this.SubaccountUins = null;

        /**
         * 角色ID列表，不可超出最大值50
         * @type {Array.<string> || null}
         */
        this.RoleIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.SubaccountUins = 'SubaccountUins' in params ? params.SubaccountUins : null;
        this.RoleIds = 'RoleIds' in params ? params.RoleIds : null;

    }
}

/**
 * EKS Instance Nfs Volume
 * @class
 */
class NfsVolume extends  AbstractModel {
    constructor(){
        super();

        /**
         * nfs volume 数据卷名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * NFS 服务器地址
         * @type {string || null}
         */
        this.Server = null;

        /**
         * NFS 数据卷路径
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 默认为 False
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
        this.Server = 'Server' in params ? params.Server : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.ReadOnly = 'ReadOnly' in params ? params.ReadOnly : null;

    }
}

/**
 * amp告警渠道配置
 * @class
 */
class PrometheusNotification extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否启用
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * 收敛时间
         * @type {string || null}
         */
        this.RepeatInterval = null;

        /**
         * 生效起始时间
         * @type {string || null}
         */
        this.TimeRangeStart = null;

        /**
         * 生效结束时间
         * @type {string || null}
         */
        this.TimeRangeEnd = null;

        /**
         * 告警通知方式。目前有SMS、EMAIL、CALL、WECHAT方式。
分别代表：短信、邮件、电话、微信
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.NotifyWay = null;

        /**
         * 告警接收组（用户组）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.ReceiverGroups = null;

        /**
         * 电话告警顺序。
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.PhoneNotifyOrder = null;

        /**
         * 电话告警次数。
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PhoneCircleTimes = null;

        /**
         * 电话告警轮内间隔。单位：秒
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PhoneInnerInterval = null;

        /**
         * 电话告警轮外间隔。单位：秒
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PhoneCircleInterval = null;

        /**
         * 电话告警触达通知
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.PhoneArriveNotice = null;

        /**
         * 通道类型，默认为amp，支持以下
amp
webhook
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 如果Type为webhook, 则该字段为必填项
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WebHook = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.RepeatInterval = 'RepeatInterval' in params ? params.RepeatInterval : null;
        this.TimeRangeStart = 'TimeRangeStart' in params ? params.TimeRangeStart : null;
        this.TimeRangeEnd = 'TimeRangeEnd' in params ? params.TimeRangeEnd : null;
        this.NotifyWay = 'NotifyWay' in params ? params.NotifyWay : null;
        this.ReceiverGroups = 'ReceiverGroups' in params ? params.ReceiverGroups : null;
        this.PhoneNotifyOrder = 'PhoneNotifyOrder' in params ? params.PhoneNotifyOrder : null;
        this.PhoneCircleTimes = 'PhoneCircleTimes' in params ? params.PhoneCircleTimes : null;
        this.PhoneInnerInterval = 'PhoneInnerInterval' in params ? params.PhoneInnerInterval : null;
        this.PhoneCircleInterval = 'PhoneCircleInterval' in params ? params.PhoneCircleInterval : null;
        this.PhoneArriveNotice = 'PhoneArriveNotice' in params ? params.PhoneArriveNotice : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.WebHook = 'WebHook' in params ? params.WebHook : null;

    }
}

/**
 * 集群创建过程
 * @class
 */
class ClusterCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群创建过程类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 集群创建过程状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 最后一次探测到该状态的时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastProbeTime = null;

        /**
         * 最后一次转换到该过程的时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastTransitionTime = null;

        /**
         * 转换到该过程的简明原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * 转换到该过程的更多信息
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.LastProbeTime = 'LastProbeTime' in params ? params.LastProbeTime : null;
        this.LastTransitionTime = 'LastTransitionTime' in params ? params.LastTransitionTime : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * 节点池描述
 * @class
 */
class NodePool extends  AbstractModel {
    constructor(){
        super();

        /**
         * NodePoolId 资源池id
         * @type {string || null}
         */
        this.NodePoolId = null;

        /**
         * Name 资源池名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * ClusterInstanceId 集群实例id
         * @type {string || null}
         */
        this.ClusterInstanceId = null;

        /**
         * LifeState 状态，当前节点池生命周期状态包括：creating，normal，updating，deleting，deleted
         * @type {string || null}
         */
        this.LifeState = null;

        /**
         * LaunchConfigurationId 配置
         * @type {string || null}
         */
        this.LaunchConfigurationId = null;

        /**
         * AutoscalingGroupId 分组id
         * @type {string || null}
         */
        this.AutoscalingGroupId = null;

        /**
         * Labels 标签
         * @type {Array.<Label> || null}
         */
        this.Labels = null;

        /**
         * Taints 污点标记
         * @type {Array.<Taint> || null}
         */
        this.Taints = null;

        /**
         * NodeCountSummary 节点列表
         * @type {NodeCountSummary || null}
         */
        this.NodeCountSummary = null;

        /**
         * 状态信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AutoscalingGroupStatus = null;

        /**
         * 最大节点数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxNodesNum = null;

        /**
         * 最小节点数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MinNodesNum = null;

        /**
         * 期望的节点数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DesiredNodesNum = null;

        /**
         * 节点池osName
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NodePoolOs = null;

        /**
         * 容器的镜像版本，"DOCKER_CUSTOMIZE"(容器定制版),"GENERAL"(普通版本，默认值)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OsCustomizeType = null;

        /**
         * 镜像id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 集群属于节点podCIDR大小自定义模式时，节点池需要带上pod数量属性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DesiredPodNum = null;

        /**
         * 用户自定义脚本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserScript = null;

        /**
         * 资源标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 删除保护开关
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.DeletionProtection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodePoolId = 'NodePoolId' in params ? params.NodePoolId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ClusterInstanceId = 'ClusterInstanceId' in params ? params.ClusterInstanceId : null;
        this.LifeState = 'LifeState' in params ? params.LifeState : null;
        this.LaunchConfigurationId = 'LaunchConfigurationId' in params ? params.LaunchConfigurationId : null;
        this.AutoscalingGroupId = 'AutoscalingGroupId' in params ? params.AutoscalingGroupId : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new Label();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.Taints) {
            this.Taints = new Array();
            for (let z in params.Taints) {
                let obj = new Taint();
                obj.deserialize(params.Taints[z]);
                this.Taints.push(obj);
            }
        }

        if (params.NodeCountSummary) {
            let obj = new NodeCountSummary();
            obj.deserialize(params.NodeCountSummary)
            this.NodeCountSummary = obj;
        }
        this.AutoscalingGroupStatus = 'AutoscalingGroupStatus' in params ? params.AutoscalingGroupStatus : null;
        this.MaxNodesNum = 'MaxNodesNum' in params ? params.MaxNodesNum : null;
        this.MinNodesNum = 'MinNodesNum' in params ? params.MinNodesNum : null;
        this.DesiredNodesNum = 'DesiredNodesNum' in params ? params.DesiredNodesNum : null;
        this.NodePoolOs = 'NodePoolOs' in params ? params.NodePoolOs : null;
        this.OsCustomizeType = 'OsCustomizeType' in params ? params.OsCustomizeType : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.DesiredPodNum = 'DesiredPodNum' in params ? params.DesiredPodNum : null;
        this.UserScript = 'UserScript' in params ? params.UserScript : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.DeletionProtection = 'DeletionProtection' in params ? params.DeletionProtection : null;

    }
}

/**
 * DescribeEKSClusters返回参数结构体
 * @class
 */
class DescribeEKSClustersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群总个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 集群信息列表
         * @type {Array.<EksCluster> || null}
         */
        this.Clusters = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Clusters) {
            this.Clusters = new Array();
            for (let z in params.Clusters) {
                let obj = new EksCluster();
                obj.deserialize(params.Clusters[z]);
                this.Clusters.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 数据卷挂载路径信息
 * @class
 */
class VolumeMount extends  AbstractModel {
    constructor(){
        super();

        /**
         * volume名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 挂载路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MountPath = null;

        /**
         * 是否只读
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.ReadOnly = null;

        /**
         * 子路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubPath = null;

        /**
         * 传播挂载方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MountPropagation = null;

        /**
         * 子路径表达式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubPathExpr = null;

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
        this.ReadOnly = 'ReadOnly' in params ? params.ReadOnly : null;
        this.SubPath = 'SubPath' in params ? params.SubPath : null;
        this.MountPropagation = 'MountPropagation' in params ? params.MountPropagation : null;
        this.SubPathExpr = 'SubPathExpr' in params ? params.SubPathExpr : null;

    }
}

/**
 * DeleteCluster请求参数结构体
 * @class
 */
class DeleteClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群实例删除时的策略：terminate（销毁实例，仅支持按量计费云主机实例） retain （仅移除，保留实例）
         * @type {string || null}
         */
        this.InstanceDeleteMode = null;

        /**
         * 集群删除时资源的删除策略，目前支持CBS（默认保留CBS）
         * @type {Array.<ResourceDeleteOption> || null}
         */
        this.ResourceDeleteOptions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceDeleteMode = 'InstanceDeleteMode' in params ? params.InstanceDeleteMode : null;

        if (params.ResourceDeleteOptions) {
            this.ResourceDeleteOptions = new Array();
            for (let z in params.ResourceDeleteOptions) {
                let obj = new ResourceDeleteOption();
                obj.deserialize(params.ResourceDeleteOptions[z]);
                this.ResourceDeleteOptions.push(obj);
            }
        }

    }
}

/**
 * DescribeTKEEdgeClusters返回参数结构体
 * @class
 */
class DescribeTKEEdgeClustersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群总个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 集群信息列表
         * @type {Array.<EdgeCluster> || null}
         */
        this.Clusters = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Clusters) {
            this.Clusters = new Array();
            for (let z in params.Clusters) {
                let obj = new EdgeCluster();
                obj.deserialize(params.Clusters[z]);
                this.Clusters.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAvailableTKEEdgeVersion请求参数结构体
 * @class
 */
class DescribeAvailableTKEEdgeVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 填写ClusterId获取当前集群各个组件版本和最新版本
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DeleteClusterAsGroups请求参数结构体
 * @class
 */
class DeleteClusterAsGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID，通过[DescribeClusters](https://cloud.tencent.com/document/api/457/31862)接口获取。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群伸缩组ID的列表
         * @type {Array.<string> || null}
         */
        this.AutoScalingGroupIds = null;

        /**
         * 是否保留伸缩组中的节点(默认值： false(不保留))
         * @type {boolean || null}
         */
        this.KeepInstance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.AutoScalingGroupIds = 'AutoScalingGroupIds' in params ? params.AutoScalingGroupIds : null;
        this.KeepInstance = 'KeepInstance' in params ? params.KeepInstance : null;

    }
}

/**
 * ModifyPrometheusAlertPolicy请求参数结构体
 * @class
 */
class ModifyPrometheusAlertPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 告警配置
         * @type {PrometheusAlertPolicyItem || null}
         */
        this.AlertRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.AlertRule) {
            let obj = new PrometheusAlertPolicyItem();
            obj.deserialize(params.AlertRule)
            this.AlertRule = obj;
        }

    }
}

/**
 * ForwardApplicationRequestV3请求参数结构体
 * @class
 */
class ForwardApplicationRequestV3Request extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求集群addon的访问
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 请求集群addon的路径
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 请求集群addon后允许接收的数据格式
         * @type {string || null}
         */
        this.Accept = null;

        /**
         * 请求集群addon的数据格式
         * @type {string || null}
         */
        this.ContentType = null;

        /**
         * 请求集群addon的数据
         * @type {string || null}
         */
        this.RequestBody = null;

        /**
         * 集群名称
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 是否编码请求内容
         * @type {string || null}
         */
        this.EncodedBody = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Method = 'Method' in params ? params.Method : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Accept = 'Accept' in params ? params.Accept : null;
        this.ContentType = 'ContentType' in params ? params.ContentType : null;
        this.RequestBody = 'RequestBody' in params ? params.RequestBody : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.EncodedBody = 'EncodedBody' in params ? params.EncodedBody : null;

    }
}

/**
 * prometheus告警历史
 * @class
 */
class PrometheusAlertHistoryItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警名称
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 告警开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 告警内容
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 告警状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.State = null;

        /**
         * 触发的规则名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleItem = null;

        /**
         * 告警渠道的id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 告警渠道的名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TopicName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.State = 'State' in params ? params.State : null;
        this.RuleItem = 'RuleItem' in params ? params.RuleItem : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * 云原生Prometheus模板同步目标
 * @class
 */
class PrometheusTemplateSyncTarget extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标所在地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 目标实例
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 集群id，只有当采集模板的Level为cluster的时候需要
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 最后一次同步时间， 用于出参
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SyncTime = null;

        /**
         * 当前使用的模板版本，用于出参
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 集群类型，只有当采集模板的Level为cluster的时候需要
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * 用于出参，实例名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 用于出参，集群名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.SyncTime = 'SyncTime' in params ? params.SyncTime : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;

    }
}

/**
 * DescribePrometheusTemplates请求参数结构体
 * @class
 */
class DescribePrometheusTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模糊过滤条件，支持
Level 按模板级别过滤
Name 按名称过滤
Describe 按描述过滤
ID 按templateId过滤
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 分页偏移
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 总数限制
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribePrometheusAlertPolicy返回参数结构体
 * @class
 */
class DescribePrometheusAlertPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusAlertPolicyItem> || null}
         */
        this.AlertRules = null;

        /**
         * 总数
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

        if (params.AlertRules) {
            this.AlertRules = new Array();
            for (let z in params.AlertRules) {
                let obj = new PrometheusAlertPolicyItem();
                obj.deserialize(params.AlertRules[z]);
                this.AlertRules.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EnableVpcCniNetworkType返回参数结构体
 * @class
 */
class EnableVpcCniNetworkTypeResponse extends  AbstractModel {
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
 * DescribePrometheusAlertRule返回参数结构体
 * @class
 */
class DescribePrometheusAlertRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警详情
         * @type {Array.<PrometheusAlertRuleDetail> || null}
         */
        this.AlertRules = null;

        /**
         * 总数
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

        if (params.AlertRules) {
            this.AlertRules = new Array();
            for (let z in params.AlertRules) {
                let obj = new PrometheusAlertRuleDetail();
                obj.deserialize(params.AlertRules[z]);
                this.AlertRules.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EksCi地域信息
 * @class
 */
class EksCiRegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域别名，形如gz
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 地域名，形如ap-guangzhou
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 地域ID
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
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;

    }
}

/**
 * DescribeEdgeClusterInstances请求参数结构体
 * @class
 */
class DescribeEdgeClusterInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterID = null;

        /**
         * 查询总数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件，仅支持NodeName过滤
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
        this.ClusterID = 'ClusterID' in params ? params.ClusterID : null;
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
 * DisableClusterAudit请求参数结构体
 * @class
 */
class DisableClusterAuditRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 取值为true代表关闭集群审计时删除默认创建的日志集和主题，false代表不删除
         * @type {boolean || null}
         */
        this.DeleteLogSetAndTopic = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.DeleteLogSetAndTopic = 'DeleteLogSetAndTopic' in params ? params.DeleteLogSetAndTopic : null;

    }
}

/**
 * DescribePrometheusRecordRules返回参数结构体
 * @class
 */
class DescribePrometheusRecordRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 聚合规则
         * @type {Array.<PrometheusRecordRuleYamlItem> || null}
         */
        this.Records = null;

        /**
         * 总数
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

        if (params.Records) {
            this.Records = new Array();
            for (let z in params.Records) {
                let obj = new PrometheusRecordRuleYamlItem();
                obj.deserialize(params.Records[z]);
                this.Records.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePrometheusGlobalNotification返回参数结构体
 * @class
 */
class DescribePrometheusGlobalNotificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 全局告警通知渠道
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PrometheusNotificationItem || null}
         */
        this.Notification = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Notification) {
            let obj = new PrometheusNotificationItem();
            obj.deserialize(params.Notification)
            this.Notification = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Probe中的HttpGet
 * @class
 */
class HttpGet extends  AbstractModel {
    constructor(){
        super();

        /**
         * HttpGet检测的路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Path = null;

        /**
         * HttpGet检测的端口号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * HTTP or HTTPS
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Scheme = null;

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
        this.Scheme = 'Scheme' in params ? params.Scheme : null;

    }
}

/**
 * 集群资源使用量
 * @class
 */
class ResourceUsage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源类型
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 资源使用量
         * @type {number || null}
         */
        this.Usage = null;

        /**
         * 资源使用详情
         * @type {Array.<ResourceUsageDetail> || null}
         */
        this.Details = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Usage = 'Usage' in params ? params.Usage : null;

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new ResourceUsageDetail();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }

    }
}

/**
 * CreateClusterVirtualNode请求参数结构体
 * @class
 */
class CreateClusterVirtualNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 虚拟节点所属节点池
         * @type {string || null}
         */
        this.NodePoolId = null;

        /**
         * 虚拟节点所属子网
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 虚拟节点子网ID列表，和参数SubnetId互斥
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * 虚拟节点列表
         * @type {Array.<VirtualNodeSpec> || null}
         */
        this.VirtualNodes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NodePoolId = 'NodePoolId' in params ? params.NodePoolId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;

        if (params.VirtualNodes) {
            this.VirtualNodes = new Array();
            for (let z in params.VirtualNodes) {
                let obj = new VirtualNodeSpec();
                obj.deserialize(params.VirtualNodes[z]);
                this.VirtualNodes.push(obj);
            }
        }

    }
}

/**
 * DescribeTKEEdgeClusters请求参数结构体
 * @class
 */
class DescribeTKEEdgeClustersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID列表(为空时，
表示获取账号下所有集群)
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

        /**
         * 偏移量,默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 最大输出条数，默认20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件,当前只支持按照单个条件ClusterName进行过滤
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
        this.ClusterIds = 'ClusterIds' in params ? params.ClusterIds : null;
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
 * DescribePrometheusAlertHistory请求参数结构体
 * @class
 */
class DescribePrometheusAlertHistoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 告警名称
         * @type {string || null}
         */
        this.RuleName = null;

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
         * label集合
         * @type {string || null}
         */
        this.Labels = null;

        /**
         * 分片
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分片
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Labels = 'Labels' in params ? params.Labels : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * SetNodePoolNodeProtection返回参数结构体
 * @class
 */
class SetNodePoolNodeProtectionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功设置的节点id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SucceedInstanceIds = null;

        /**
         * 没有成功设置的节点id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.FailedInstanceIds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SucceedInstanceIds = 'SucceedInstanceIds' in params ? params.SucceedInstanceIds : null;
        this.FailedInstanceIds = 'FailedInstanceIds' in params ? params.FailedInstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeletePrometheusAlertPolicy请求参数结构体
 * @class
 */
class DeletePrometheusAlertPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 告警策略id列表
         * @type {Array.<string> || null}
         */
        this.AlertIds = null;

        /**
         * 告警策略名称
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AlertIds = 'AlertIds' in params ? params.AlertIds : null;
        this.Names = 'Names' in params ? params.Names : null;

    }
}

/**
 * ModifyPrometheusAgentExternalLabels返回参数结构体
 * @class
 */
class ModifyPrometheusAgentExternalLabelsResponse extends  AbstractModel {
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
 * RollbackClusterRelease请求参数结构体
 * @class
 */
class RollbackClusterReleaseRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 应用名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 应用命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 回滚版本号
         * @type {number || null}
         */
        this.Revision = null;

        /**
         * 集群类型
         * @type {string || null}
         */
        this.ClusterType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Revision = 'Revision' in params ? params.Revision : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;

    }
}

/**
 * DeleteClusterInstances请求参数结构体
 * @class
 */
class DeleteClusterInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 主机InstanceId列表
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 集群实例删除时的策略：terminate（销毁实例，仅支持按量计费云主机实例） retain （仅移除，保留实例）
         * @type {string || null}
         */
        this.InstanceDeleteMode = null;

        /**
         * 是否强制删除(当节点在初始化时，可以指定参数为TRUE)
         * @type {boolean || null}
         */
        this.ForceDelete = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceDeleteMode = 'InstanceDeleteMode' in params ? params.InstanceDeleteMode : null;
        this.ForceDelete = 'ForceDelete' in params ? params.ForceDelete : null;

    }
}

/**
 * 节点升级重装参数
 * @class
 */
class UpgradeNodeResetParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例额外需要设置参数信息
         * @type {InstanceAdvancedSettings || null}
         */
        this.InstanceAdvancedSettings = null;

        /**
         * 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认开启云监控、云安全服务。
         * @type {EnhancedService || null}
         */
        this.EnhancedService = null;

        /**
         * 节点登录信息（目前仅支持使用Password或者单个KeyIds）
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * 实例所属安全组。该参数可以通过调用 DescribeSecurityGroups 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。（目前仅支持设置单个sgId）
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstanceAdvancedSettings) {
            let obj = new InstanceAdvancedSettings();
            obj.deserialize(params.InstanceAdvancedSettings)
            this.InstanceAdvancedSettings = obj;
        }

        if (params.EnhancedService) {
            let obj = new EnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

    }
}

/**
 * GPU驱动和CUDA的版本信息
 * @class
 */
class DriverVersion extends  AbstractModel {
    constructor(){
        super();

        /**
         * GPU驱动或者CUDA的版本
         * @type {string || null}
         */
        this.Version = null;

        /**
         * GPU驱动或者CUDA的名字
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
        this.Version = 'Version' in params ? params.Version : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * CreateClusterInstances请求参数结构体
 * @class
 */
class CreateClusterInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群 ID，请填写 查询集群列表 接口中返回的 clusterId 字段
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * CVM创建透传参数，json化字符串格式，如需要保证扩展集群节点请求幂等性需要在此参数添加ClientToken字段，详见[CVM创建实例](https://cloud.tencent.com/document/product/213/15730)接口。
         * @type {string || null}
         */
        this.RunInstancePara = null;

        /**
         * 实例额外需要设置参数信息
         * @type {InstanceAdvancedSettings || null}
         */
        this.InstanceAdvancedSettings = null;

        /**
         * 校验规则相关选项，可配置跳过某些校验规则。目前支持GlobalRouteCIDRCheck（跳过GlobalRouter的相关校验），VpcCniCIDRCheck（跳过VpcCni相关校验）
         * @type {Array.<string> || null}
         */
        this.SkipValidateOptions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.RunInstancePara = 'RunInstancePara' in params ? params.RunInstancePara : null;

        if (params.InstanceAdvancedSettings) {
            let obj = new InstanceAdvancedSettings();
            obj.deserialize(params.InstanceAdvancedSettings)
            this.InstanceAdvancedSettings = obj;
        }
        this.SkipValidateOptions = 'SkipValidateOptions' in params ? params.SkipValidateOptions : null;

    }
}

/**
 * 集群容器网络相关参数
 * @class
 */
class ClusterCIDRSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于分配集群容器和服务 IP 的 CIDR，不得与 VPC CIDR 冲突，也不得与同 VPC 内其他集群 CIDR 冲突。且网段范围必须在内网网段内，例如:10.1.0.0/14, 192.168.0.1/18,172.16.0.0/16。
         * @type {string || null}
         */
        this.ClusterCIDR = null;

        /**
         * 是否忽略 ClusterCIDR 冲突错误, 默认不忽略
         * @type {boolean || null}
         */
        this.IgnoreClusterCIDRConflict = null;

        /**
         * 集群中每个Node上最大的Pod数量。取值范围16～256。不为2的幂值时会向上取最接近的2的幂值。
         * @type {number || null}
         */
        this.MaxNodePodNum = null;

        /**
         * 集群最大的service数量。取值范围32～32768，不为2的幂值时会向上取最接近的2的幂值。默认值256
         * @type {number || null}
         */
        this.MaxClusterServiceNum = null;

        /**
         * 用于分配集群服务 IP 的 CIDR，不得与 VPC CIDR 冲突，也不得与同 VPC 内其他集群 CIDR 冲突。且网段范围必须在内网网段内，例如:10.1.0.0/14, 192.168.0.1/18,172.16.0.0/16。
         * @type {string || null}
         */
        this.ServiceCIDR = null;

        /**
         * VPC-CNI网络模式下，弹性网卡的子网Id。
         * @type {Array.<string> || null}
         */
        this.EniSubnetIds = null;

        /**
         * VPC-CNI网络模式下，弹性网卡IP的回收时间，取值范围[300,15768000)
         * @type {number || null}
         */
        this.ClaimExpiredSeconds = null;

        /**
         * 是否忽略 ServiceCIDR 冲突错误, 仅在 VPC-CNI 模式生效，默认不忽略
         * @type {boolean || null}
         */
        this.IgnoreServiceCIDRConflict = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterCIDR = 'ClusterCIDR' in params ? params.ClusterCIDR : null;
        this.IgnoreClusterCIDRConflict = 'IgnoreClusterCIDRConflict' in params ? params.IgnoreClusterCIDRConflict : null;
        this.MaxNodePodNum = 'MaxNodePodNum' in params ? params.MaxNodePodNum : null;
        this.MaxClusterServiceNum = 'MaxClusterServiceNum' in params ? params.MaxClusterServiceNum : null;
        this.ServiceCIDR = 'ServiceCIDR' in params ? params.ServiceCIDR : null;
        this.EniSubnetIds = 'EniSubnetIds' in params ? params.EniSubnetIds : null;
        this.ClaimExpiredSeconds = 'ClaimExpiredSeconds' in params ? params.ClaimExpiredSeconds : null;
        this.IgnoreServiceCIDRConflict = 'IgnoreServiceCIDRConflict' in params ? params.IgnoreServiceCIDRConflict : null;

    }
}

/**
 * kubernetes Taint
 * @class
 */
class Taint extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Value
         * @type {string || null}
         */
        this.Value = null;

        /**
         * Effect
         * @type {string || null}
         */
        this.Effect = null;

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
        this.Effect = 'Effect' in params ? params.Effect : null;

    }
}

/**
 * ModifyNodePoolInstanceTypes请求参数结构体
 * @class
 */
class ModifyNodePoolInstanceTypesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 节点池id
         * @type {string || null}
         */
        this.NodePoolId = null;

        /**
         * 机型列表
         * @type {Array.<string> || null}
         */
        this.InstanceTypes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NodePoolId = 'NodePoolId' in params ? params.NodePoolId : null;
        this.InstanceTypes = 'InstanceTypes' in params ? params.InstanceTypes : null;

    }
}

/**
 * AddClusterCIDR请求参数结构体
 * @class
 */
class AddClusterCIDRRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 增加的ClusterCIDR
         * @type {Array.<string> || null}
         */
        this.ClusterCIDRs = null;

        /**
         * 是否忽略ClusterCIDR与VPC路由表的冲突
         * @type {boolean || null}
         */
        this.IgnoreClusterCIDRConflict = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterCIDRs = 'ClusterCIDRs' in params ? params.ClusterCIDRs : null;
        this.IgnoreClusterCIDRConflict = 'IgnoreClusterCIDRConflict' in params ? params.IgnoreClusterCIDRConflict : null;

    }
}

/**
 * OIDC认证相关配置
 * @class
 */
class OIDCConfigAuthenticationOptions extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建身份提供商
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.AutoCreateOIDCConfig = null;

        /**
         * 创建身份提供商的ClientId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.AutoCreateClientId = null;

        /**
         * 创建PodIdentityWebhook组件
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.AutoInstallPodIdentityWebhookAddon = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoCreateOIDCConfig = 'AutoCreateOIDCConfig' in params ? params.AutoCreateOIDCConfig : null;
        this.AutoCreateClientId = 'AutoCreateClientId' in params ? params.AutoCreateClientId : null;
        this.AutoInstallPodIdentityWebhookAddon = 'AutoInstallPodIdentityWebhookAddon' in params ? params.AutoInstallPodIdentityWebhookAddon : null;

    }
}

/**
 * CreateCluster请求参数结构体
 * @class
 */
class CreateClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群容器网络配置信息
         * @type {ClusterCIDRSettings || null}
         */
        this.ClusterCIDRSettings = null;

        /**
         * 集群类型，托管集群：MANAGED_CLUSTER，独立集群：INDEPENDENT_CLUSTER。
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * CVM创建透传参数，json化字符串格式，详见[CVM创建实例](https://cloud.tencent.com/document/product/213/15730)接口。总机型(包括地域)数量不超过10个，相同机型(地域)购买多台机器可以通过设置参数中RunInstances中InstanceCount来实现。
         * @type {Array.<RunInstancesForNode> || null}
         */
        this.RunInstancesForNode = null;

        /**
         * 集群的基本配置信息
         * @type {ClusterBasicSettings || null}
         */
        this.ClusterBasicSettings = null;

        /**
         * 集群高级配置信息
         * @type {ClusterAdvancedSettings || null}
         */
        this.ClusterAdvancedSettings = null;

        /**
         * 节点高级配置信息
         * @type {InstanceAdvancedSettings || null}
         */
        this.InstanceAdvancedSettings = null;

        /**
         * 已存在实例的配置信息。所有实例必须在同一个VPC中，最大数量不超过100，不支持添加竞价实例。
         * @type {Array.<ExistedInstancesForNode> || null}
         */
        this.ExistedInstancesForNode = null;

        /**
         * CVM类型和其对应的数据盘挂载配置信息
         * @type {Array.<InstanceDataDiskMountSetting> || null}
         */
        this.InstanceDataDiskMountSettings = null;

        /**
         * 需要安装的扩展组件信息
         * @type {Array.<ExtensionAddon> || null}
         */
        this.ExtensionAddons = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ClusterCIDRSettings) {
            let obj = new ClusterCIDRSettings();
            obj.deserialize(params.ClusterCIDRSettings)
            this.ClusterCIDRSettings = obj;
        }
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;

        if (params.RunInstancesForNode) {
            this.RunInstancesForNode = new Array();
            for (let z in params.RunInstancesForNode) {
                let obj = new RunInstancesForNode();
                obj.deserialize(params.RunInstancesForNode[z]);
                this.RunInstancesForNode.push(obj);
            }
        }

        if (params.ClusterBasicSettings) {
            let obj = new ClusterBasicSettings();
            obj.deserialize(params.ClusterBasicSettings)
            this.ClusterBasicSettings = obj;
        }

        if (params.ClusterAdvancedSettings) {
            let obj = new ClusterAdvancedSettings();
            obj.deserialize(params.ClusterAdvancedSettings)
            this.ClusterAdvancedSettings = obj;
        }

        if (params.InstanceAdvancedSettings) {
            let obj = new InstanceAdvancedSettings();
            obj.deserialize(params.InstanceAdvancedSettings)
            this.InstanceAdvancedSettings = obj;
        }

        if (params.ExistedInstancesForNode) {
            this.ExistedInstancesForNode = new Array();
            for (let z in params.ExistedInstancesForNode) {
                let obj = new ExistedInstancesForNode();
                obj.deserialize(params.ExistedInstancesForNode[z]);
                this.ExistedInstancesForNode.push(obj);
            }
        }

        if (params.InstanceDataDiskMountSettings) {
            this.InstanceDataDiskMountSettings = new Array();
            for (let z in params.InstanceDataDiskMountSettings) {
                let obj = new InstanceDataDiskMountSetting();
                obj.deserialize(params.InstanceDataDiskMountSettings[z]);
                this.InstanceDataDiskMountSettings.push(obj);
            }
        }

        if (params.ExtensionAddons) {
            this.ExtensionAddons = new Array();
            for (let z in params.ExtensionAddons) {
                let obj = new ExtensionAddon();
                obj.deserialize(params.ExtensionAddons[z]);
                this.ExtensionAddons.push(obj);
            }
        }

    }
}

/**
 * CreateEdgeCVMInstances请求参数结构体
 * @class
 */
class CreateEdgeCVMInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterID = null;

        /**
         * CVM创建透传参数，json化字符串格式，如需要保证扩展集群节点请求幂等性需要在此参数添加ClientToken字段，详见[CVM创建实例](https://cloud.tencent.com/document/product/213/15730)接口。
         * @type {string || null}
         */
        this.RunInstancePara = null;

        /**
         * CVM所属Region
         * @type {string || null}
         */
        this.CvmRegion = null;

        /**
         * CVM数量
         * @type {number || null}
         */
        this.CvmCount = null;

        /**
         * 实例扩展信息
         * @type {string || null}
         */
        this.External = null;

        /**
         * 用户自定义脚本
         * @type {string || null}
         */
        this.UserScript = null;

        /**
         * 是否开启弹性网卡功能
         * @type {boolean || null}
         */
        this.EnableEni = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterID = 'ClusterID' in params ? params.ClusterID : null;
        this.RunInstancePara = 'RunInstancePara' in params ? params.RunInstancePara : null;
        this.CvmRegion = 'CvmRegion' in params ? params.CvmRegion : null;
        this.CvmCount = 'CvmCount' in params ? params.CvmCount : null;
        this.External = 'External' in params ? params.External : null;
        this.UserScript = 'UserScript' in params ? params.UserScript : null;
        this.EnableEni = 'EnableEni' in params ? params.EnableEni : null;

    }
}

/**
 * DescribeClusterReleaseHistory请求参数结构体
 * @class
 */
class DescribeClusterReleaseHistoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 应用名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 应用所在命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 集群类型
         * @type {string || null}
         */
        this.ClusterType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;

    }
}

/**
 * 加入存量节点时的节点池选项
 * @class
 */
class NodePoolOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否加入节点池
         * @type {boolean || null}
         */
        this.AddToNodePool = null;

        /**
         * 节点池id
         * @type {string || null}
         */
        this.NodePoolId = null;

        /**
         * 是否继承节点池相关配置
         * @type {boolean || null}
         */
        this.InheritConfigurationFromNodePool = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddToNodePool = 'AddToNodePool' in params ? params.AddToNodePool : null;
        this.NodePoolId = 'NodePoolId' in params ? params.NodePoolId : null;
        this.InheritConfigurationFromNodePool = 'InheritConfigurationFromNodePool' in params ? params.InheritConfigurationFromNodePool : null;

    }
}

/**
 * DescribeEdgeClusterExtraArgs请求参数结构体
 * @class
 */
class DescribeEdgeClusterExtraArgsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeClusters返回参数结构体
 * @class
 */
class DescribeClustersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群总个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 集群信息列表
         * @type {Array.<Cluster> || null}
         */
        this.Clusters = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Clusters) {
            this.Clusters = new Array();
            for (let z in params.Clusters) {
                let obj = new Cluster();
                obj.deserialize(params.Clusters[z]);
                this.Clusters.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteClusterVirtualNode返回参数结构体
 * @class
 */
class DeleteClusterVirtualNodeResponse extends  AbstractModel {
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
 * 托管Prometheus agent信息
 * @class
 */
class PrometheusAgentInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群类型
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Describe = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Describe = 'Describe' in params ? params.Describe : null;

    }
}

/**
 * CreateEdgeCVMInstances返回参数结构体
 * @class
 */
class CreateEdgeCVMInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * cvm id 列表
         * @type {Array.<string> || null}
         */
        this.CvmIdSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CvmIdSet = 'CvmIdSet' in params ? params.CvmIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEdgeLogSwitches返回参数结构体
 * @class
 */
class DescribeEdgeLogSwitchesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群日志开关集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SwitchSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SwitchSet = 'SwitchSet' in params ? params.SwitchSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePrometheusClusterAgent返回参数结构体
 * @class
 */
class CreatePrometheusClusterAgentResponse extends  AbstractModel {
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
 * DescribePrometheusTemplates返回参数结构体
 * @class
 */
class DescribePrometheusTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板列表
         * @type {Array.<PrometheusTemplate> || null}
         */
        this.Templates = null;

        /**
         * 总数
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

        if (params.Templates) {
            this.Templates = new Array();
            for (let z in params.Templates) {
                let obj = new PrometheusTemplate();
                obj.deserialize(params.Templates[z]);
                this.Templates.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateEKSContainerInstance返回参数结构体
 * @class
 */
class UpdateEKSContainerInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器实例 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EksCiId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EksCiId = 'EksCiId' in params ? params.EksCiId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Eks 自定义域名服务器 配置
 * @class
 */
class DnsServerConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名。空字符串表示所有域名。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * dns 服务器地址列表。地址格式 ip:port
         * @type {Array.<string> || null}
         */
        this.DnsServers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DnsServers = 'DnsServers' in params ? params.DnsServers : null;

    }
}

/**
 * 弹性集群信息
 * @class
 */
class EksCluster extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群Id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群名称
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * Vpc Id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网列表
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * k8s 版本号
         * @type {string || null}
         */
        this.K8SVersion = null;

        /**
         * 集群状态(running运行中，initializing 初始化中，failed异常)
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 集群描述信息
         * @type {string || null}
         */
        this.ClusterDesc = null;

        /**
         * 集群创建时间
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Service 子网Id
         * @type {string || null}
         */
        this.ServiceSubnetId = null;

        /**
         * 集群的自定义dns 服务器信息
         * @type {Array.<DnsServerConf> || null}
         */
        this.DnsServers = null;

        /**
         * 将来删除集群时是否要删除cbs。默认为 FALSE
         * @type {boolean || null}
         */
        this.NeedDeleteCbs = null;

        /**
         * 是否在用户集群内开启Dns。默认为TRUE
         * @type {boolean || null}
         */
        this.EnableVpcCoreDNS = null;

        /**
         * 标签描述列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TagSpecification> || null}
         */
        this.TagSpecification = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.K8SVersion = 'K8SVersion' in params ? params.K8SVersion : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ClusterDesc = 'ClusterDesc' in params ? params.ClusterDesc : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ServiceSubnetId = 'ServiceSubnetId' in params ? params.ServiceSubnetId : null;

        if (params.DnsServers) {
            this.DnsServers = new Array();
            for (let z in params.DnsServers) {
                let obj = new DnsServerConf();
                obj.deserialize(params.DnsServers[z]);
                this.DnsServers.push(obj);
            }
        }
        this.NeedDeleteCbs = 'NeedDeleteCbs' in params ? params.NeedDeleteCbs : null;
        this.EnableVpcCoreDNS = 'EnableVpcCoreDNS' in params ? params.EnableVpcCoreDNS : null;

        if (params.TagSpecification) {
            this.TagSpecification = new Array();
            for (let z in params.TagSpecification) {
                let obj = new TagSpecification();
                obj.deserialize(params.TagSpecification[z]);
                this.TagSpecification.push(obj);
            }
        }

    }
}

/**
 * ModifyNodePoolInstanceTypes返回参数结构体
 * @class
 */
class ModifyNodePoolInstanceTypesResponse extends  AbstractModel {
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
 * 告警渠道使用自建alertmanager的配置
 * @class
 */
class PrometheusAlertManagerConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * alertmanager url
         * @type {string || null}
         */
        this.Url = null;

        /**
         * alertmanager部署所在集群类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * alertmanager部署所在集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * GetClusterLevelPrice返回参数结构体
 * @class
 */
class GetClusterLevelPriceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 询价结果，单位：分，打折后
         * @type {number || null}
         */
        this.Cost = null;

        /**
         * 询价结果，单位：分，折扣前
         * @type {number || null}
         */
        this.TotalCost = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Cost = 'Cost' in params ? params.Cost : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeResourceUsage返回参数结构体
 * @class
 */
class DescribeResourceUsageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CRD使用量
         * @type {ResourceUsage || null}
         */
        this.CRDUsage = null;

        /**
         * Pod使用量
         * @type {number || null}
         */
        this.PodUsage = null;

        /**
         * ConfigMap使用量
         * @type {number || null}
         */
        this.ConfigMapUsage = null;

        /**
         * 其他资源使用量
         * @type {ResourceUsage || null}
         */
        this.OtherUsage = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CRDUsage) {
            let obj = new ResourceUsage();
            obj.deserialize(params.CRDUsage)
            this.CRDUsage = obj;
        }
        this.PodUsage = 'PodUsage' in params ? params.PodUsage : null;
        this.ConfigMapUsage = 'ConfigMapUsage' in params ? params.ConfigMapUsage : null;

        if (params.OtherUsage) {
            let obj = new ResourceUsage();
            obj.deserialize(params.OtherUsage)
            this.OtherUsage = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 边缘计算集群内网访问LB信息
 * @class
 */
class EdgeClusterInternalLB extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启内网访问LB
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * 内网访问LB关联的子网Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SubnetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * DescribeClusterRoutes返回参数结构体
 * @class
 */
class DescribeClusterRoutesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的实例数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 集群路由对象。
         * @type {Array.<RouteInfo> || null}
         */
        this.RouteSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.RouteSet) {
            this.RouteSet = new Array();
            for (let z in params.RouteSet) {
                let obj = new RouteInfo();
                obj.deserialize(params.RouteSet[z]);
                this.RouteSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAvailableClusterVersion请求参数结构体
 * @class
 */
class DescribeAvailableClusterVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群 Id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群 Id 列表
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterIds = 'ClusterIds' in params ? params.ClusterIds : null;

    }
}

/**
 * UpgradeClusterRelease返回参数结构体
 * @class
 */
class UpgradeClusterReleaseResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PendingRelease || null}
         */
        this.Release = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Release) {
            let obj = new PendingRelease();
            obj.deserialize(params.Release)
            this.Release = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePrometheusAlertPolicy请求参数结构体
 * @class
 */
class DescribePrometheusAlertPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 分页
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤
支持ID，Name
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
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
 * DeleteClusterAsGroups返回参数结构体
 * @class
 */
class DeleteClusterAsGroupsResponse extends  AbstractModel {
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
 * 地域属性信息
 * @class
 */
class RegionInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 地域ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 地域状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 地域特性开关(按照JSON的形式返回所有属性)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FeatureGates = null;

        /**
         * 地域简称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 地域白名单
注意：此字段可能返回 null，表示取不到有效值。
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
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.FeatureGates = 'FeatureGates' in params ? params.FeatureGates : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * DescribePrometheusConfig请求参数结构体
 * @class
 */
class DescribePrometheusConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群类型
         * @type {string || null}
         */
        this.ClusterType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;

    }
}

/**
 * DescribeEdgeLogSwitches请求参数结构体
 * @class
 */
class DescribeEdgeLogSwitchesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID列表
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterIds = 'ClusterIds' in params ? params.ClusterIds : null;

    }
}

/**
 * DeletePrometheusTemplate请求参数结构体
 * @class
 */
class DeletePrometheusTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板id
         * @type {string || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DeletePrometheusRecordRuleYaml返回参数结构体
 * @class
 */
class DeletePrometheusRecordRuleYamlResponse extends  AbstractModel {
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
 * DescribePrometheusTempSync返回参数结构体
 * @class
 */
class DescribePrometheusTempSyncResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 同步目标详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusTemplateSyncTarget> || null}
         */
        this.Targets = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new PrometheusTemplateSyncTarget();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 集群信息结构体
 * @class
 */
class Cluster extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群名称
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 集群描述
         * @type {string || null}
         */
        this.ClusterDescription = null;

        /**
         * 集群版本（默认值为1.10.5）
         * @type {string || null}
         */
        this.ClusterVersion = null;

        /**
         * 集群系统。centos7.2x86_64 或者 ubuntu16.04.1 LTSx86_64，默认取值为ubuntu16.04.1 LTSx86_64
         * @type {string || null}
         */
        this.ClusterOs = null;

        /**
         * 集群类型，托管集群：MANAGED_CLUSTER，独立集群：INDEPENDENT_CLUSTER。
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * 集群网络相关参数
         * @type {ClusterNetworkSettings || null}
         */
        this.ClusterNetworkSettings = null;

        /**
         * 集群当前node数量
         * @type {number || null}
         */
        this.ClusterNodeNum = null;

        /**
         * 集群所属的项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 标签描述列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TagSpecification> || null}
         */
        this.TagSpecification = null;

        /**
         * 集群状态 (Running 运行中  Creating 创建中 Idling 闲置中  Abnormal 异常  )
         * @type {string || null}
         */
        this.ClusterStatus = null;

        /**
         * 集群属性(包括集群不同属性的MAP，属性字段包括NodeNameType (lan-ip模式和hostname 模式，默认无lan-ip模式))
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Property = null;

        /**
         * 集群当前master数量
         * @type {number || null}
         */
        this.ClusterMaterNodeNum = null;

        /**
         * 集群使用镜像id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * OsCustomizeType 系统定制类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OsCustomizeType = null;

        /**
         * 集群运行环境docker或container
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContainerRuntime = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 删除保护开关
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.DeletionProtection = null;

        /**
         * 集群是否开启第三方节点支持
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.EnableExternalNode = null;

        /**
         * 集群等级，针对托管集群生效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterLevel = null;

        /**
         * 自动变配集群等级，针对托管集群生效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.AutoUpgradeClusterLevel = null;

        /**
         * 是否开启QGPU共享
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.QGPUShareEnable = null;

        /**
         * 运行时版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuntimeVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.ClusterDescription = 'ClusterDescription' in params ? params.ClusterDescription : null;
        this.ClusterVersion = 'ClusterVersion' in params ? params.ClusterVersion : null;
        this.ClusterOs = 'ClusterOs' in params ? params.ClusterOs : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;

        if (params.ClusterNetworkSettings) {
            let obj = new ClusterNetworkSettings();
            obj.deserialize(params.ClusterNetworkSettings)
            this.ClusterNetworkSettings = obj;
        }
        this.ClusterNodeNum = 'ClusterNodeNum' in params ? params.ClusterNodeNum : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.TagSpecification) {
            this.TagSpecification = new Array();
            for (let z in params.TagSpecification) {
                let obj = new TagSpecification();
                obj.deserialize(params.TagSpecification[z]);
                this.TagSpecification.push(obj);
            }
        }
        this.ClusterStatus = 'ClusterStatus' in params ? params.ClusterStatus : null;
        this.Property = 'Property' in params ? params.Property : null;
        this.ClusterMaterNodeNum = 'ClusterMaterNodeNum' in params ? params.ClusterMaterNodeNum : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.OsCustomizeType = 'OsCustomizeType' in params ? params.OsCustomizeType : null;
        this.ContainerRuntime = 'ContainerRuntime' in params ? params.ContainerRuntime : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.DeletionProtection = 'DeletionProtection' in params ? params.DeletionProtection : null;
        this.EnableExternalNode = 'EnableExternalNode' in params ? params.EnableExternalNode : null;
        this.ClusterLevel = 'ClusterLevel' in params ? params.ClusterLevel : null;
        this.AutoUpgradeClusterLevel = 'AutoUpgradeClusterLevel' in params ? params.AutoUpgradeClusterLevel : null;
        this.QGPUShareEnable = 'QGPUShareEnable' in params ? params.QGPUShareEnable : null;
        this.RuntimeVersion = 'RuntimeVersion' in params ? params.RuntimeVersion : null;

    }
}

/**
 * DescribeClusterEndpointStatus返回参数结构体
 * @class
 */
class DescribeClusterEndpointStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询集群访问端口状态（Created 开启成功，Creating 开启中，NotFound 未开启）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 开启访问入口失败信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeExternalClusterSpec返回参数结构体
 * @class
 */
class DescribeExternalClusterSpecResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导入第三方集群YAML定义
         * @type {string || null}
         */
        this.Spec = null;

        /**
         * agent.yaml文件过期时间字符串，时区UTC
         * @type {string || null}
         */
        this.Expiration = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Spec = 'Spec' in params ? params.Spec : null;
        this.Expiration = 'Expiration' in params ? params.Expiration : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddExistedInstances返回参数结构体
 * @class
 */
class AddExistedInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 失败的节点ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.FailedInstanceIds = null;

        /**
         * 成功的节点ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SuccInstanceIds = null;

        /**
         * 超时未返回出来节点的ID(可能失败，也可能成功)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.TimeoutInstanceIds = null;

        /**
         * 失败的节点的失败原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.FailedReasons = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FailedInstanceIds = 'FailedInstanceIds' in params ? params.FailedInstanceIds : null;
        this.SuccInstanceIds = 'SuccInstanceIds' in params ? params.SuccInstanceIds : null;
        this.TimeoutInstanceIds = 'TimeoutInstanceIds' in params ? params.TimeoutInstanceIds : null;
        this.FailedReasons = 'FailedReasons' in params ? params.FailedReasons : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RestartEKSContainerInstances返回参数结构体
 * @class
 */
class RestartEKSContainerInstancesResponse extends  AbstractModel {
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
 * DisableClusterDeletionProtection返回参数结构体
 * @class
 */
class DisableClusterDeletionProtectionResponse extends  AbstractModel {
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
 * EnableVpcCniNetworkType请求参数结构体
 * @class
 */
class EnableVpcCniNetworkTypeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 开启vpc-cni的模式，tke-route-eni开启的是策略路由模式，tke-direct-eni开启的是独立网卡模式
         * @type {string || null}
         */
        this.VpcCniType = null;

        /**
         * 是否开启固定IP模式
         * @type {boolean || null}
         */
        this.EnableStaticIp = null;

        /**
         * 使用的容器子网
         * @type {Array.<string> || null}
         */
        this.Subnets = null;

        /**
         * 在固定IP模式下，Pod销毁后退还IP的时间，传参必须大于300；不传默认IP永不销毁。
         * @type {number || null}
         */
        this.ExpiredSeconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.VpcCniType = 'VpcCniType' in params ? params.VpcCniType : null;
        this.EnableStaticIp = 'EnableStaticIp' in params ? params.EnableStaticIp : null;
        this.Subnets = 'Subnets' in params ? params.Subnets : null;
        this.ExpiredSeconds = 'ExpiredSeconds' in params ? params.ExpiredSeconds : null;

    }
}

/**
 * EKS Instance Container容器
 * @class
 */
class Container extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像
         * @type {string || null}
         */
        this.Image = null;

        /**
         * 容器名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 容器启动命令
         * @type {Array.<string> || null}
         */
        this.Commands = null;

        /**
         * 容器启动参数
         * @type {Array.<string> || null}
         */
        this.Args = null;

        /**
         * 容器内操作系统的环境变量
         * @type {Array.<EnvironmentVariable> || null}
         */
        this.EnvironmentVars = null;

        /**
         * CPU，制改容器最多可使用的核数，该值不可超过容器实例的总核数。单位：核。
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 内存，限制该容器最多可使用的内存值，该值不可超过容器实例的总内存值。单位：GiB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 数据卷挂载信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VolumeMount> || null}
         */
        this.VolumeMounts = null;

        /**
         * 当前状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ContainerState || null}
         */
        this.CurrentState = null;

        /**
         * 重启次数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RestartCount = null;

        /**
         * 容器工作目录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WorkingDir = null;

        /**
         * 存活探针
注意：此字段可能返回 null，表示取不到有效值。
         * @type {LivenessOrReadinessProbe || null}
         */
        this.LivenessProbe = null;

        /**
         * 就绪探针
注意：此字段可能返回 null，表示取不到有效值。
         * @type {LivenessOrReadinessProbe || null}
         */
        this.ReadinessProbe = null;

        /**
         * Gpu限制
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.GpuLimit = null;

        /**
         * 容器的安全上下文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SecurityContext || null}
         */
        this.SecurityContext = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Image = 'Image' in params ? params.Image : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Commands = 'Commands' in params ? params.Commands : null;
        this.Args = 'Args' in params ? params.Args : null;

        if (params.EnvironmentVars) {
            this.EnvironmentVars = new Array();
            for (let z in params.EnvironmentVars) {
                let obj = new EnvironmentVariable();
                obj.deserialize(params.EnvironmentVars[z]);
                this.EnvironmentVars.push(obj);
            }
        }
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;

        if (params.VolumeMounts) {
            this.VolumeMounts = new Array();
            for (let z in params.VolumeMounts) {
                let obj = new VolumeMount();
                obj.deserialize(params.VolumeMounts[z]);
                this.VolumeMounts.push(obj);
            }
        }

        if (params.CurrentState) {
            let obj = new ContainerState();
            obj.deserialize(params.CurrentState)
            this.CurrentState = obj;
        }
        this.RestartCount = 'RestartCount' in params ? params.RestartCount : null;
        this.WorkingDir = 'WorkingDir' in params ? params.WorkingDir : null;

        if (params.LivenessProbe) {
            let obj = new LivenessOrReadinessProbe();
            obj.deserialize(params.LivenessProbe)
            this.LivenessProbe = obj;
        }

        if (params.ReadinessProbe) {
            let obj = new LivenessOrReadinessProbe();
            obj.deserialize(params.ReadinessProbe)
            this.ReadinessProbe = obj;
        }
        this.GpuLimit = 'GpuLimit' in params ? params.GpuLimit : null;

        if (params.SecurityContext) {
            let obj = new SecurityContext();
            obj.deserialize(params.SecurityContext)
            this.SecurityContext = obj;
        }

    }
}

/**
 * CreateClusterEndpoint请求参数结构体
 * @class
 */
class CreateClusterEndpointRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群端口所在的子网ID  (仅在开启非外网访问时需要填，必须为集群所在VPC内的子网)
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 是否为外网访问（TRUE 外网访问 FALSE 内网访问，默认值： FALSE）
         * @type {boolean || null}
         */
        this.IsExtranet = null;

        /**
         * 设置域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 使用的安全组，只有外网访问需要传递（开启外网访问时必传）
         * @type {string || null}
         */
        this.SecurityGroup = null;

        /**
         * 创建lb参数，只有外网访问需要设置
         * @type {string || null}
         */
        this.ExtensiveParameters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.IsExtranet = 'IsExtranet' in params ? params.IsExtranet : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.SecurityGroup = 'SecurityGroup' in params ? params.SecurityGroup : null;
        this.ExtensiveParameters = 'ExtensiveParameters' in params ? params.ExtensiveParameters : null;

    }
}

/**
 * 探针在容器内执行检测命令参数类型
 * @class
 */
class Exec extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器内检测的命令
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Commands = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Commands = 'Commands' in params ? params.Commands : null;

    }
}

/**
 * DescribePrometheusInstance返回参数结构体
 * @class
 */
class DescribePrometheusInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 私有网络id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网id
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * cos桶名称
         * @type {string || null}
         */
        this.COSBucket = null;

        /**
         * 数据查询地址
         * @type {string || null}
         */
        this.QueryAddress = null;

        /**
         * 实例中grafana相关的信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PrometheusGrafanaInfo || null}
         */
        this.Grafana = null;

        /**
         * 用户自定义alertmanager
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AlertManagerUrl = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.COSBucket = 'COSBucket' in params ? params.COSBucket : null;
        this.QueryAddress = 'QueryAddress' in params ? params.QueryAddress : null;

        if (params.Grafana) {
            let obj = new PrometheusGrafanaInfo();
            obj.deserialize(params.Grafana)
            this.Grafana = obj;
        }
        this.AlertManagerUrl = 'AlertManagerUrl' in params ? params.AlertManagerUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * cloudrun安全特性能力
 * @class
 */
class Capabilities extends  AbstractModel {
    constructor(){
        super();

        /**
         * 启用安全能力项列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Add = null;

        /**
         * 禁用安全能力向列表
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
 * UpdateTKEEdgeCluster请求参数结构体
 * @class
 */
class UpdateTKEEdgeClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 边缘计算集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 边缘计算集群名称
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 边缘计算集群描述信息
         * @type {string || null}
         */
        this.ClusterDesc = null;

        /**
         * 边缘计算集群的pod cidr
         * @type {string || null}
         */
        this.PodCIDR = null;

        /**
         * 边缘计算集群的service cidr
         * @type {string || null}
         */
        this.ServiceCIDR = null;

        /**
         * 边缘计算集群公网访问LB信息
         * @type {EdgeClusterPublicLB || null}
         */
        this.PublicLB = null;

        /**
         * 边缘计算集群内网访问LB信息
         * @type {EdgeClusterInternalLB || null}
         */
        this.InternalLB = null;

        /**
         * 边缘计算集群的CoreDns部署信息
         * @type {string || null}
         */
        this.CoreDns = null;

        /**
         * 边缘计算集群的健康检查多地域部署信息
         * @type {string || null}
         */
        this.HealthRegion = null;

        /**
         * 边缘计算集群的健康检查部署信息
         * @type {string || null}
         */
        this.Health = null;

        /**
         * 边缘计算集群的GridDaemon部署信息
         * @type {string || null}
         */
        this.GridDaemon = null;

        /**
         * 边缘集群开启自动升配
         * @type {boolean || null}
         */
        this.AutoUpgradeClusterLevel = null;

        /**
         * 边缘集群的集群规模
         * @type {string || null}
         */
        this.ClusterLevel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.ClusterDesc = 'ClusterDesc' in params ? params.ClusterDesc : null;
        this.PodCIDR = 'PodCIDR' in params ? params.PodCIDR : null;
        this.ServiceCIDR = 'ServiceCIDR' in params ? params.ServiceCIDR : null;

        if (params.PublicLB) {
            let obj = new EdgeClusterPublicLB();
            obj.deserialize(params.PublicLB)
            this.PublicLB = obj;
        }

        if (params.InternalLB) {
            let obj = new EdgeClusterInternalLB();
            obj.deserialize(params.InternalLB)
            this.InternalLB = obj;
        }
        this.CoreDns = 'CoreDns' in params ? params.CoreDns : null;
        this.HealthRegion = 'HealthRegion' in params ? params.HealthRegion : null;
        this.Health = 'Health' in params ? params.Health : null;
        this.GridDaemon = 'GridDaemon' in params ? params.GridDaemon : null;
        this.AutoUpgradeClusterLevel = 'AutoUpgradeClusterLevel' in params ? params.AutoUpgradeClusterLevel : null;
        this.ClusterLevel = 'ClusterLevel' in params ? params.ClusterLevel : null;

    }
}

/**
 * DescribeTKEEdgeExternalKubeconfig返回参数结构体
 * @class
 */
class DescribeTKEEdgeExternalKubeconfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * kubeconfig文件内容
         * @type {string || null}
         */
        this.Kubeconfig = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Kubeconfig = 'Kubeconfig' in params ? params.Kubeconfig : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateClusterInstances返回参数结构体
 * @class
 */
class CreateClusterInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点实例ID
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyClusterVirtualNodePool返回参数结构体
 * @class
 */
class ModifyClusterVirtualNodePoolResponse extends  AbstractModel {
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
 * 节点升级过程中集群当前状态
 * @class
 */
class InstanceUpgradeClusterStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * pod总数
         * @type {number || null}
         */
        this.PodTotal = null;

        /**
         * NotReady pod总数
         * @type {number || null}
         */
        this.NotReadyPod = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PodTotal = 'PodTotal' in params ? params.PodTotal : null;
        this.NotReadyPod = 'NotReadyPod' in params ? params.NotReadyPod : null;

    }
}

/**
 * DescribeClusterRoutes请求参数结构体
 * @class
 */
class DescribeClusterRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表名称。
         * @type {string || null}
         */
        this.RouteTableName = null;

        /**
         * 过滤条件,当前只支持按照单个条件GatewayIP进行过滤（可选）
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
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;

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
 * DeleteECMInstances请求参数结构体
 * @class
 */
class DeleteECMInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterID = null;

        /**
         * ecm id集合
         * @type {Array.<string> || null}
         */
        this.EcmIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterID = 'ClusterID' in params ? params.ClusterID : null;
        this.EcmIdSet = 'EcmIdSet' in params ? params.EcmIdSet : null;

    }
}

/**
 * 托管集群等级属性
 * @class
 */
class ClusterLevelAttribute extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群等级
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 等级名称
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 节点数量
         * @type {number || null}
         */
        this.NodeCount = null;

        /**
         * Pod数量
         * @type {number || null}
         */
        this.PodCount = null;

        /**
         * Configmap数量
         * @type {number || null}
         */
        this.ConfigMapCount = null;

        /**
         * CRD数量
         * @type {number || null}
         */
        this.CRDCount = null;

        /**
         * 是否启用
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * 其他资源数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OtherCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.NodeCount = 'NodeCount' in params ? params.NodeCount : null;
        this.PodCount = 'PodCount' in params ? params.PodCount : null;
        this.ConfigMapCount = 'ConfigMapCount' in params ? params.ConfigMapCount : null;
        this.CRDCount = 'CRDCount' in params ? params.CRDCount : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.OtherCount = 'OtherCount' in params ? params.OtherCount : null;

    }
}

/**
 * RemoveNodeFromNodePool返回参数结构体
 * @class
 */
class RemoveNodeFromNodePoolResponse extends  AbstractModel {
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
 * SetNodePoolNodeProtection请求参数结构体
 * @class
 */
class SetNodePoolNodeProtectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 节点池id
         * @type {string || null}
         */
        this.NodePoolId = null;

        /**
         * 节点id
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 节点是否需要移出保护
         * @type {boolean || null}
         */
        this.ProtectedFromScaleIn = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NodePoolId = 'NodePoolId' in params ? params.NodePoolId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.ProtectedFromScaleIn = 'ProtectedFromScaleIn' in params ? params.ProtectedFromScaleIn : null;

    }
}

/**
 * EnableClusterAudit请求参数结构体
 * @class
 */
class EnableClusterAuditRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * CLS日志集ID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * CLS日志主题ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * topic所在region，默认为集群当前region
         * @type {string || null}
         */
        this.TopicRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicRegion = 'TopicRegion' in params ? params.TopicRegion : null;

    }
}

/**
 * CreateClusterRouteTable请求参数结构体
 * @class
 */
class CreateClusterRouteTableRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表名称
         * @type {string || null}
         */
        this.RouteTableName = null;

        /**
         * 路由表CIDR
         * @type {string || null}
         */
        this.RouteTableCidrBlock = null;

        /**
         * 路由表绑定的VPC
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 是否忽略CIDR冲突
         * @type {number || null}
         */
        this.IgnoreClusterCidrConflict = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;
        this.RouteTableCidrBlock = 'RouteTableCidrBlock' in params ? params.RouteTableCidrBlock : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.IgnoreClusterCidrConflict = 'IgnoreClusterCidrConflict' in params ? params.IgnoreClusterCidrConflict : null;

    }
}

/**
 * DisableClusterAudit返回参数结构体
 * @class
 */
class DisableClusterAuditResponse extends  AbstractModel {
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
 * DescribeClusterEndpoints返回参数结构体
 * @class
 */
class DescribeClusterEndpointsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群APIServer的CA证书
         * @type {string || null}
         */
        this.CertificationAuthority = null;

        /**
         * 集群APIServer的外网访问地址
         * @type {string || null}
         */
        this.ClusterExternalEndpoint = null;

        /**
         * 集群APIServer的内网访问地址
         * @type {string || null}
         */
        this.ClusterIntranetEndpoint = null;

        /**
         * 集群APIServer的域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterDomain = null;

        /**
         * 集群APIServer的外网访问ACL列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ClusterExternalACL = null;

        /**
         * 外网域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterExternalDomain = null;

        /**
         * 内网域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterIntranetDomain = null;

        /**
         * 外网安全组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SecurityGroup = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificationAuthority = 'CertificationAuthority' in params ? params.CertificationAuthority : null;
        this.ClusterExternalEndpoint = 'ClusterExternalEndpoint' in params ? params.ClusterExternalEndpoint : null;
        this.ClusterIntranetEndpoint = 'ClusterIntranetEndpoint' in params ? params.ClusterIntranetEndpoint : null;
        this.ClusterDomain = 'ClusterDomain' in params ? params.ClusterDomain : null;
        this.ClusterExternalACL = 'ClusterExternalACL' in params ? params.ClusterExternalACL : null;
        this.ClusterExternalDomain = 'ClusterExternalDomain' in params ? params.ClusterExternalDomain : null;
        this.ClusterIntranetDomain = 'ClusterIntranetDomain' in params ? params.ClusterIntranetDomain : null;
        this.SecurityGroup = 'SecurityGroup' in params ? params.SecurityGroup : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RemoveNodeFromNodePool请求参数结构体
 * @class
 */
class RemoveNodeFromNodePoolRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 节点池id
         * @type {string || null}
         */
        this.NodePoolId = null;

        /**
         * 节点id列表，一次最多支持100台
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NodePoolId = 'NodePoolId' in params ? params.NodePoolId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * UninstallEdgeLogAgent请求参数结构体
 * @class
 */
class UninstallEdgeLogAgentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeClusterLevelChangeRecords请求参数结构体
 * @class
 */
class DescribeClusterLevelChangeRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterID = null;

        /**
         * 开始时间
         * @type {string || null}
         */
        this.StartAt = null;

        /**
         * 结束时间
         * @type {string || null}
         */
        this.EndAt = null;

        /**
         * 偏移量,默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 最大输出条数，默认20
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
        this.ClusterID = 'ClusterID' in params ? params.ClusterID : null;
        this.StartAt = 'StartAt' in params ? params.StartAt : null;
        this.EndAt = 'EndAt' in params ? params.EndAt : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * UpdateClusterVersion返回参数结构体
 * @class
 */
class UpdateClusterVersionResponse extends  AbstractModel {
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
 * 节点升级检查项结果
 * @class
 */
class InstanceUpgradePreCheckResultItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作负载的命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 工作负载类型
         * @type {string || null}
         */
        this.WorkLoadKind = null;

        /**
         * 工作负载名称
         * @type {string || null}
         */
        this.WorkLoadName = null;

        /**
         * 驱逐节点前工作负载running的pod数目
         * @type {number || null}
         */
        this.Before = null;

        /**
         * 驱逐节点后工作负载running的pod数目
         * @type {number || null}
         */
        this.After = null;

        /**
         * 工作负载在本节点上的pod列表
         * @type {Array.<string> || null}
         */
        this.Pods = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.WorkLoadKind = 'WorkLoadKind' in params ? params.WorkLoadKind : null;
        this.WorkLoadName = 'WorkLoadName' in params ? params.WorkLoadName : null;
        this.Before = 'Before' in params ? params.Before : null;
        this.After = 'After' in params ? params.After : null;
        this.Pods = 'Pods' in params ? params.Pods : null;

    }
}

/**
 * DeleteClusterNodePool返回参数结构体
 * @class
 */
class DeleteClusterNodePoolResponse extends  AbstractModel {
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
 * DeleteImageCaches请求参数结构体
 * @class
 */
class DeleteImageCachesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像缓存Id数组
         * @type {Array.<string> || null}
         */
        this.ImageCacheIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageCacheIds = 'ImageCacheIds' in params ? params.ImageCacheIds : null;

    }
}

/**
 * 应用市场自定义参数
 * @class
 */
class ReleaseValues extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义参数原始值
         * @type {string || null}
         */
        this.RawOriginal = null;

        /**
         * 自定义参数值类型
         * @type {string || null}
         */
        this.ValuesType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RawOriginal = 'RawOriginal' in params ? params.RawOriginal : null;
        this.ValuesType = 'ValuesType' in params ? params.ValuesType : null;

    }
}

/**
 * CreateClusterNodePool返回参数结构体
 * @class
 */
class CreateClusterNodePoolResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点池id
         * @type {string || null}
         */
        this.NodePoolId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodePoolId = 'NodePoolId' in params ? params.NodePoolId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * UpdateTKEEdgeCluster返回参数结构体
 * @class
 */
class UpdateTKEEdgeClusterResponse extends  AbstractModel {
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
 * 用以帮助用户自动创建EIP的配置
 * @class
 */
class EipAttribute extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器实例删除后，EIP是否释放。
Never表示不释放，其他任意值（包括空字符串）表示释放。
         * @type {string || null}
         */
        this.DeletePolicy = null;

        /**
         * EIP线路类型。默认值：BGP。
已开通静态单线IP白名单的用户，可选值：
CMCC：中国移动
CTCC：中国电信
CUCC：中国联通
注意：仅部分地域支持静态单线IP。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InternetServiceProvider = null;

        /**
         * EIP出带宽上限，单位：Mbps。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeletePolicy = 'DeletePolicy' in params ? params.DeletePolicy : null;
        this.InternetServiceProvider = 'InternetServiceProvider' in params ? params.InternetServiceProvider : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;

    }
}

/**
 * DescribeEKSContainerInstances请求参数结构体
 * @class
 */
class DescribeEKSContainerInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 限定此次返回资源的数量。如果不设定，默认返回20，最大不能超过100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量,默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件，可条件：
(1)实例名称
KeyName: eks-ci-name
类型：String

(2)实例状态
KeyName: status
类型：String
可选值："Pending", "Running", "Succeeded", "Failed"

(3)内网ip
KeyName: private-ip
类型：String

(4)EIP地址
KeyName: eip-address
类型：String

(5)VpcId
KeyName: vpc-id
类型：String
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 容器实例 ID 数组
         * @type {Array.<string> || null}
         */
        this.EksCiIds = null;

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
        this.EksCiIds = 'EksCiIds' in params ? params.EksCiIds : null;

    }
}

/**
 * DescribeClusterControllers请求参数结构体
 * @class
 */
class DescribeClusterControllersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * ModifyPrometheusAlertRule请求参数结构体
 * @class
 */
class ModifyPrometheusAlertRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 告警配置
         * @type {PrometheusAlertRuleDetail || null}
         */
        this.AlertRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.AlertRule) {
            let obj = new PrometheusAlertRuleDetail();
            obj.deserialize(params.AlertRule)
            this.AlertRule = obj;
        }

    }
}

/**
 * DescribeClusterSecurity返回参数结构体
 * @class
 */
class DescribeClusterSecurityResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群的账号名称
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 集群的访问密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 集群访问CA证书
         * @type {string || null}
         */
        this.CertificationAuthority = null;

        /**
         * 集群访问的地址
         * @type {string || null}
         */
        this.ClusterExternalEndpoint = null;

        /**
         * 集群访问的域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 集群Endpoint地址
         * @type {string || null}
         */
        this.PgwEndpoint = null;

        /**
         * 集群访问策略组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SecurityPolicy = null;

        /**
         * 集群Kubeconfig文件
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Kubeconfig = null;

        /**
         * 集群JnsGw的访问地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.JnsGwEndpoint = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.CertificationAuthority = 'CertificationAuthority' in params ? params.CertificationAuthority : null;
        this.ClusterExternalEndpoint = 'ClusterExternalEndpoint' in params ? params.ClusterExternalEndpoint : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.PgwEndpoint = 'PgwEndpoint' in params ? params.PgwEndpoint : null;
        this.SecurityPolicy = 'SecurityPolicy' in params ? params.SecurityPolicy : null;
        this.Kubeconfig = 'Kubeconfig' in params ? params.Kubeconfig : null;
        this.JnsGwEndpoint = 'JnsGwEndpoint' in params ? params.JnsGwEndpoint : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 集群路由对象
 * @class
 */
class RouteInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表名称。
         * @type {string || null}
         */
        this.RouteTableName = null;

        /**
         * 目的端CIDR。
         * @type {string || null}
         */
        this.DestinationCidrBlock = null;

        /**
         * 下一跳地址。
         * @type {string || null}
         */
        this.GatewayIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;
        this.DestinationCidrBlock = 'DestinationCidrBlock' in params ? params.DestinationCidrBlock : null;
        this.GatewayIp = 'GatewayIp' in params ? params.GatewayIp : null;

    }
}

/**
 * ModifyNodePoolDesiredCapacityAboutAsg返回参数结构体
 * @class
 */
class ModifyNodePoolDesiredCapacityAboutAsgResponse extends  AbstractModel {
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
 * CreateClusterRoute请求参数结构体
 * @class
 */
class CreateClusterRouteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表名称。
         * @type {string || null}
         */
        this.RouteTableName = null;

        /**
         * 目的端CIDR。
         * @type {string || null}
         */
        this.DestinationCidrBlock = null;

        /**
         * 下一跳地址。
         * @type {string || null}
         */
        this.GatewayIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;
        this.DestinationCidrBlock = 'DestinationCidrBlock' in params ? params.DestinationCidrBlock : null;
        this.GatewayIp = 'GatewayIp' in params ? params.GatewayIp : null;

    }
}

/**
 * ModifyClusterEndpointSP请求参数结构体
 * @class
 */
class ModifyClusterEndpointSPRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 安全策略放通单个IP或CIDR(例如: "192.168.1.0/24",默认为拒绝所有)
         * @type {Array.<string> || null}
         */
        this.SecurityPolicies = null;

        /**
         * 修改外网访问安全组
         * @type {string || null}
         */
        this.SecurityGroup = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.SecurityPolicies = 'SecurityPolicies' in params ? params.SecurityPolicies : null;
        this.SecurityGroup = 'SecurityGroup' in params ? params.SecurityGroup : null;

    }
}

/**
 * DeleteClusterEndpoint返回参数结构体
 * @class
 */
class DeleteClusterEndpointResponse extends  AbstractModel {
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
 * 云原生Prometheus模板可修改项
 * @class
 */
class PrometheusTemplateModify extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 修改描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Describe = null;

        /**
         * 修改内容，只有当模板类型是Alert时生效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusAlertRule> || null}
         */
        this.AlertRules = null;

        /**
         * 当Level为instance时有效，
模板中的聚合规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.RecordRules = null;

        /**
         * 当Level为cluster时有效，
模板中的ServiceMonitor规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.ServiceMonitors = null;

        /**
         * 当Level为cluster时有效，
模板中的PodMonitors规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.PodMonitors = null;

        /**
         * 当Level为cluster时有效，
模板中的RawJobs规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.RawJobs = null;

        /**
         * 修改内容，只有当模板类型是Alert时生效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusAlertRuleDetail> || null}
         */
        this.AlertDetailRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Describe = 'Describe' in params ? params.Describe : null;

        if (params.AlertRules) {
            this.AlertRules = new Array();
            for (let z in params.AlertRules) {
                let obj = new PrometheusAlertRule();
                obj.deserialize(params.AlertRules[z]);
                this.AlertRules.push(obj);
            }
        }

        if (params.RecordRules) {
            this.RecordRules = new Array();
            for (let z in params.RecordRules) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.RecordRules[z]);
                this.RecordRules.push(obj);
            }
        }

        if (params.ServiceMonitors) {
            this.ServiceMonitors = new Array();
            for (let z in params.ServiceMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.ServiceMonitors[z]);
                this.ServiceMonitors.push(obj);
            }
        }

        if (params.PodMonitors) {
            this.PodMonitors = new Array();
            for (let z in params.PodMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.PodMonitors[z]);
                this.PodMonitors.push(obj);
            }
        }

        if (params.RawJobs) {
            this.RawJobs = new Array();
            for (let z in params.RawJobs) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.RawJobs[z]);
                this.RawJobs.push(obj);
            }
        }

        if (params.AlertDetailRules) {
            this.AlertDetailRules = new Array();
            for (let z in params.AlertDetailRules) {
                let obj = new PrometheusAlertRuleDetail();
                obj.deserialize(params.AlertDetailRules[z]);
                this.AlertDetailRules.push(obj);
            }
        }

    }
}

/**
 * RollbackClusterRelease返回参数结构体
 * @class
 */
class RollbackClusterReleaseResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PendingRelease || null}
         */
        this.Release = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Release) {
            let obj = new PendingRelease();
            obj.deserialize(params.Release)
            this.Release = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 集群版本信息
 * @class
 */
class ClusterVersion extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群主版本号列表，例如1.18.4
         * @type {Array.<string> || null}
         */
        this.Versions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Versions = 'Versions' in params ? params.Versions : null;

    }
}

/**
 * 某个节点的升级进度
 * @class
 */
class InstanceUpgradeProgressItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点instanceID
         * @type {string || null}
         */
        this.InstanceID = null;

        /**
         * 任务生命周期
process 运行中
paused 已停止
pauing 正在停止
done  已完成
timeout 已超时
aborted 已取消
pending 还未开始
         * @type {string || null}
         */
        this.LifeState = null;

        /**
         * 升级开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartAt = null;

        /**
         * 升级结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndAt = null;

        /**
         * 升级前检查结果
         * @type {InstanceUpgradePreCheckResult || null}
         */
        this.CheckResult = null;

        /**
         * 升级步骤详情
         * @type {Array.<TaskStepInfo> || null}
         */
        this.Detail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;
        this.LifeState = 'LifeState' in params ? params.LifeState : null;
        this.StartAt = 'StartAt' in params ? params.StartAt : null;
        this.EndAt = 'EndAt' in params ? params.EndAt : null;

        if (params.CheckResult) {
            let obj = new InstanceUpgradePreCheckResult();
            obj.deserialize(params.CheckResult)
            this.CheckResult = obj;
        }

        if (params.Detail) {
            this.Detail = new Array();
            for (let z in params.Detail) {
                let obj = new TaskStepInfo();
                obj.deserialize(params.Detail[z]);
                this.Detail.push(obj);
            }
        }

    }
}

/**
 * DescribeClusterVirtualNodePools请求参数结构体
 * @class
 */
class DescribeClusterVirtualNodePoolsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * GetMostSuitableImageCache请求参数结构体
 * @class
 */
class GetMostSuitableImageCacheRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器镜像列表
         * @type {Array.<string> || null}
         */
        this.Images = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Images = 'Images' in params ? params.Images : null;

    }
}

/**
 * cloudrun安全特性
 * @class
 */
class SecurityContext extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全能力清单
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Capabilities || null}
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

        if (params.Capabilities) {
            let obj = new Capabilities();
            obj.deserialize(params.Capabilities)
            this.Capabilities = obj;
        }

    }
}

/**
 * 自定义DNS配置
 * @class
 */
class DNSConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * DNS 服务器IP地址列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Nameservers = null;

        /**
         * DNS搜索域列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Searches = null;

        /**
         * 对象选项列表，每个对象由name和value（可选）构成
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DNSConfigOption> || null}
         */
        this.Options = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Nameservers = 'Nameservers' in params ? params.Nameservers : null;
        this.Searches = 'Searches' in params ? params.Searches : null;

        if (params.Options) {
            this.Options = new Array();
            for (let z in params.Options) {
                let obj = new DNSConfigOption();
                obj.deserialize(params.Options[z]);
                this.Options.push(obj);
            }
        }

    }
}

/**
 * ModifyPrometheusConfig返回参数结构体
 * @class
 */
class ModifyPrometheusConfigResponse extends  AbstractModel {
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
 * DescribeTKEEdgeExternalKubeconfig请求参数结构体
 * @class
 */
class DescribeTKEEdgeExternalKubeconfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * CreatePrometheusAlertPolicy返回参数结构体
 * @class
 */
class CreatePrometheusAlertPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警id
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
 * DNS配置选项
 * @class
 */
class DNSConfigOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置项名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 项值
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
 * DescribeClusterVirtualNode请求参数结构体
 * @class
 */
class DescribeClusterVirtualNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 节点池ID
         * @type {string || null}
         */
        this.NodePoolId = null;

        /**
         * 节点名称
         * @type {Array.<string> || null}
         */
        this.NodeNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NodePoolId = 'NodePoolId' in params ? params.NodePoolId : null;
        this.NodeNames = 'NodeNames' in params ? params.NodeNames : null;

    }
}

/**
 * DescribeClusterReleases返回参数结构体
 * @class
 */
class DescribeClusterReleasesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数量限制
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 已安装应用列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Release> || null}
         */
        this.ReleaseSet = null;

        /**
         * 已安装应用总数量
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.ReleaseSet) {
            this.ReleaseSet = new Array();
            for (let z in params.ReleaseSet) {
                let obj = new Release();
                obj.deserialize(params.ReleaseSet[z]);
                this.ReleaseSet.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddNodeToNodePool请求参数结构体
 * @class
 */
class AddNodeToNodePoolRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 节点池id
         * @type {string || null}
         */
        this.NodePoolId = null;

        /**
         * 节点id
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NodePoolId = 'NodePoolId' in params ? params.NodePoolId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * DescribeExternalClusterSpec请求参数结构体
 * @class
 */
class DescribeExternalClusterSpecRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 注册集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 默认false 获取内网，是否获取外网版注册命令
         * @type {boolean || null}
         */
        this.IsExtranet = null;

        /**
         * 默认false 不刷新有效时间 ，true刷新有效时间
         * @type {boolean || null}
         */
        this.IsRefreshExpirationTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.IsExtranet = 'IsExtranet' in params ? params.IsExtranet : null;
        this.IsRefreshExpirationTime = 'IsRefreshExpirationTime' in params ? params.IsRefreshExpirationTime : null;

    }
}

/**
 * ModifyPrometheusGlobalNotification返回参数结构体
 * @class
 */
class ModifyPrometheusGlobalNotificationResponse extends  AbstractModel {
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
 * UninstallClusterRelease请求参数结构体
 * @class
 */
class UninstallClusterReleaseRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 应用名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 应用命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 集群类型
         * @type {string || null}
         */
        this.ClusterType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;

    }
}

/**
 * 虚拟节点
 * @class
 */
class VirtualNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * 虚拟节点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 虚拟节点所属子网
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 虚拟节点状态
         * @type {string || null}
         */
        this.Phase = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Phase = 'Phase' in params ? params.Phase : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * ForwardTKEEdgeApplicationRequestV3返回参数结构体
 * @class
 */
class ForwardTKEEdgeApplicationRequestV3Response extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求集群addon后返回的数据
         * @type {string || null}
         */
        this.ResponseBody = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResponseBody = 'ResponseBody' in params ? params.ResponseBody : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateClusterVirtualNodePool请求参数结构体
 * @class
 */
class CreateClusterVirtualNodePoolRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群Id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 节点池名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 子网ID列表
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * 安全组ID列表
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 虚拟节点label
         * @type {Array.<Label> || null}
         */
        this.Labels = null;

        /**
         * 虚拟节点taint
         * @type {Array.<Taint> || null}
         */
        this.Taints = null;

        /**
         * 节点列表
         * @type {Array.<VirtualNodeSpec> || null}
         */
        this.VirtualNodes = null;

        /**
         * 删除保护开关
         * @type {boolean || null}
         */
        this.DeletionProtection = null;

        /**
         * 节点池操作系统：
- linux（默认）
- windows
         * @type {string || null}
         */
        this.OS = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new Label();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.Taints) {
            this.Taints = new Array();
            for (let z in params.Taints) {
                let obj = new Taint();
                obj.deserialize(params.Taints[z]);
                this.Taints.push(obj);
            }
        }

        if (params.VirtualNodes) {
            this.VirtualNodes = new Array();
            for (let z in params.VirtualNodes) {
                let obj = new VirtualNodeSpec();
                obj.deserialize(params.VirtualNodes[z]);
                this.VirtualNodes.push(obj);
            }
        }
        this.DeletionProtection = 'DeletionProtection' in params ? params.DeletionProtection : null;
        this.OS = 'OS' in params ? params.OS : null;

    }
}

/**
 * ModifyPrometheusConfig请求参数结构体
 * @class
 */
class ModifyPrometheusConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 集群类型
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * ServiceMonitors配置
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.ServiceMonitors = null;

        /**
         * PodMonitors配置
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.PodMonitors = null;

        /**
         * prometheus原生Job配置
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.RawJobs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.ServiceMonitors) {
            this.ServiceMonitors = new Array();
            for (let z in params.ServiceMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.ServiceMonitors[z]);
                this.ServiceMonitors.push(obj);
            }
        }

        if (params.PodMonitors) {
            this.PodMonitors = new Array();
            for (let z in params.PodMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.PodMonitors[z]);
                this.PodMonitors.push(obj);
            }
        }

        if (params.RawJobs) {
            this.RawJobs = new Array();
            for (let z in params.RawJobs) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.RawJobs[z]);
                this.RawJobs.push(obj);
            }
        }

    }
}

/**
 * 集群关联的伸缩组最大实例数最小值实例数
 * @class
 */
class AutoScalingGroupRange extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩组最小实例数
         * @type {number || null}
         */
        this.MinSize = null;

        /**
         * 伸缩组最大实例数
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
        this.MinSize = 'MinSize' in params ? params.MinSize : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;

    }
}

/**
 * DescribePrometheusGlobalNotification请求参数结构体
 * @class
 */
class DescribePrometheusGlobalNotificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * 弹性容器集群公网访问负载均衡信息
 * @class
 */
class ClusterPublicLB extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启公网访问LB
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * 允许访问的来源CIDR列表
         * @type {Array.<string> || null}
         */
        this.AllowFromCidrs = null;

        /**
         * 安全策略放通单个IP或CIDR(例如: "192.168.1.0/24",默认为拒绝所有)
         * @type {Array.<string> || null}
         */
        this.SecurityPolicies = null;

        /**
         * 外网访问相关的扩展参数，格式为json
         * @type {string || null}
         */
        this.ExtraParam = null;

        /**
         * 新内外网功能，需要传递安全组
         * @type {string || null}
         */
        this.SecurityGroup = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.AllowFromCidrs = 'AllowFromCidrs' in params ? params.AllowFromCidrs : null;
        this.SecurityPolicies = 'SecurityPolicies' in params ? params.SecurityPolicies : null;
        this.ExtraParam = 'ExtraParam' in params ? params.ExtraParam : null;
        this.SecurityGroup = 'SecurityGroup' in params ? params.SecurityGroup : null;

    }
}

/**
 * DescribePrometheusTemplateSync返回参数结构体
 * @class
 */
class DescribePrometheusTemplateSyncResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 同步目标详情
         * @type {Array.<PrometheusTemplateSyncTarget> || null}
         */
        this.Targets = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new PrometheusTemplateSyncTarget();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyPrometheusTemplate返回参数结构体
 * @class
 */
class ModifyPrometheusTemplateResponse extends  AbstractModel {
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
 * ModifyPrometheusAlertPolicy返回参数结构体
 * @class
 */
class ModifyPrometheusAlertPolicyResponse extends  AbstractModel {
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
 * DescribePrometheusClusterAgents返回参数结构体
 * @class
 */
class DescribePrometheusClusterAgentsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 被关联集群信息
         * @type {Array.<PrometheusAgentOverview> || null}
         */
        this.Agents = null;

        /**
         * 被关联集群总量
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

        if (params.Agents) {
            this.Agents = new Array();
            for (let z in params.Agents) {
                let obj = new PrometheusAgentOverview();
                obj.deserialize(params.Agents[z]);
                this.Agents.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePrometheusConfig返回参数结构体
 * @class
 */
class CreatePrometheusConfigResponse extends  AbstractModel {
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
 * DescribeClusterAuthenticationOptions请求参数结构体
 * @class
 */
class DescribeClusterAuthenticationOptionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeEksContainerInstanceLog返回参数结构体
 * @class
 */
class DescribeEksContainerInstanceLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器名称
         * @type {string || null}
         */
        this.ContainerName = null;

        /**
         * 日志内容
         * @type {string || null}
         */
        this.LogContent = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ContainerName = 'ContainerName' in params ? params.ContainerName : null;
        this.LogContent = 'LogContent' in params ? params.LogContent : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteEKSCluster返回参数结构体
 * @class
 */
class DeleteEKSClusterResponse extends  AbstractModel {
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
 * 版本信息
 * @class
 */
class VersionInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 版本名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 版本信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Remark
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * EksContainerInstance实例类型
 * @class
 */
class EksCi extends  AbstractModel {
    constructor(){
        super();

        /**
         * EKS Cotainer Instance Id
         * @type {string || null}
         */
        this.EksCiId = null;

        /**
         * EKS Cotainer Instance Name
         * @type {string || null}
         */
        this.EksCiName = null;

        /**
         * 内存大小
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * CPU大小
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 安全组ID
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 容器组的重启策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RestartPolicy = null;

        /**
         * 返回容器组创建状态：Pending，Running，Succeeded，Failed。其中：
Failed （运行失败）指的容器组退出，RestartPolilcy为Never， 有容器exitCode非0；
Succeeded（运行成功）指的是容器组退出了，RestartPolicy为Never或onFailure，所有容器exitCode都为0；
Failed和Succeeded这两种状态都会停止运行，停止计费。
Pending是创建中，Running是 运行中。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 接到请求后的系统创建时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreationTime = null;

        /**
         * 容器全部成功退出后的时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SucceededTime = null;

        /**
         * 容器列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Container> || null}
         */
        this.Containers = null;

        /**
         * 数据卷信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EksCiVolume || null}
         */
        this.EksCiVolume = null;

        /**
         * 容器组运行的安全上下文
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SecurityContext || null}
         */
        this.SecurityContext = null;

        /**
         * 内网ip地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PrivateIp = null;

        /**
         * 容器实例绑定的Eip地址，注意可能为空
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EipAddress = null;

        /**
         * GPU类型。如无使用GPU则不返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GpuType = null;

        /**
         * CPU类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CpuType = null;

        /**
         * GPU卡数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.GpuCount = null;

        /**
         * 实例所属VPC的Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 实例所属子网Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 初始化容器列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Container> || null}
         */
        this.InitContainers = null;

        /**
         * 为容器实例关联 CAM 角色，value 填写 CAM 角色名称，容器实例可获取该 CAM 角色包含的权限策略，方便 容器实例 内的程序进行如购买资源、读写存储等云资源操作。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CamRoleName = null;

        /**
         * 自动为用户创建的EipId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AutoCreatedEipId = null;

        /**
         * 容器状态是否持久化
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.PersistStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EksCiId = 'EksCiId' in params ? params.EksCiId : null;
        this.EksCiName = 'EksCiName' in params ? params.EksCiName : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.RestartPolicy = 'RestartPolicy' in params ? params.RestartPolicy : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreationTime = 'CreationTime' in params ? params.CreationTime : null;
        this.SucceededTime = 'SucceededTime' in params ? params.SucceededTime : null;

        if (params.Containers) {
            this.Containers = new Array();
            for (let z in params.Containers) {
                let obj = new Container();
                obj.deserialize(params.Containers[z]);
                this.Containers.push(obj);
            }
        }

        if (params.EksCiVolume) {
            let obj = new EksCiVolume();
            obj.deserialize(params.EksCiVolume)
            this.EksCiVolume = obj;
        }

        if (params.SecurityContext) {
            let obj = new SecurityContext();
            obj.deserialize(params.SecurityContext)
            this.SecurityContext = obj;
        }
        this.PrivateIp = 'PrivateIp' in params ? params.PrivateIp : null;
        this.EipAddress = 'EipAddress' in params ? params.EipAddress : null;
        this.GpuType = 'GpuType' in params ? params.GpuType : null;
        this.CpuType = 'CpuType' in params ? params.CpuType : null;
        this.GpuCount = 'GpuCount' in params ? params.GpuCount : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

        if (params.InitContainers) {
            this.InitContainers = new Array();
            for (let z in params.InitContainers) {
                let obj = new Container();
                obj.deserialize(params.InitContainers[z]);
                this.InitContainers.push(obj);
            }
        }
        this.CamRoleName = 'CamRoleName' in params ? params.CamRoleName : null;
        this.AutoCreatedEipId = 'AutoCreatedEipId' in params ? params.AutoCreatedEipId : null;
        this.PersistStatus = 'PersistStatus' in params ? params.PersistStatus : null;

    }
}

/**
 * UpdateImageCache返回参数结构体
 * @class
 */
class UpdateImageCacheResponse extends  AbstractModel {
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
 * CreatePrometheusConfig请求参数结构体
 * @class
 */
class CreatePrometheusConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 集群类型
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * ServiceMonitors配置
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.ServiceMonitors = null;

        /**
         * PodMonitors配置
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.PodMonitors = null;

        /**
         * prometheus原生Job配置
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.RawJobs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.ServiceMonitors) {
            this.ServiceMonitors = new Array();
            for (let z in params.ServiceMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.ServiceMonitors[z]);
                this.ServiceMonitors.push(obj);
            }
        }

        if (params.PodMonitors) {
            this.PodMonitors = new Array();
            for (let z in params.PodMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.PodMonitors[z]);
                this.PodMonitors.push(obj);
            }
        }

        if (params.RawJobs) {
            this.RawJobs = new Array();
            for (let z in params.RawJobs) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.RawJobs[z]);
                this.RawJobs.push(obj);
            }
        }

    }
}

/**
 * CreateClusterVirtualNode返回参数结构体
 * @class
 */
class CreateClusterVirtualNodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 虚拟节点名称
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 镜像缓存的事件
 * @class
 */
class ImageCacheEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像缓存Id
         * @type {string || null}
         */
        this.ImageCacheId = null;

        /**
         * 事件类型, Normal或者Warning
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 事件原因简述
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * 事件原因详述
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 事件第一次出现时间
         * @type {string || null}
         */
        this.FirstTimestamp = null;

        /**
         * 事件最后一次出现时间
         * @type {string || null}
         */
        this.LastTimestamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageCacheId = 'ImageCacheId' in params ? params.ImageCacheId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.FirstTimestamp = 'FirstTimestamp' in params ? params.FirstTimestamp : null;
        this.LastTimestamp = 'LastTimestamp' in params ? params.LastTimestamp : null;

    }
}

/**
 * CreatePrometheusClusterAgent请求参数结构体
 * @class
 */
class CreatePrometheusClusterAgentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * agent列表
         * @type {Array.<PrometheusClusterAgentBasic> || null}
         */
        this.Agents = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Agents) {
            this.Agents = new Array();
            for (let z in params.Agents) {
                let obj = new PrometheusClusterAgentBasic();
                obj.deserialize(params.Agents[z]);
                this.Agents.push(obj);
            }
        }

    }
}

/**
 * DescribeClusterNodePools返回参数结构体
 * @class
 */
class DescribeClusterNodePoolsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * NodePools（节点池列表）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NodePool> || null}
         */
        this.NodePoolSet = null;

        /**
         * 资源总数
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

        if (params.NodePoolSet) {
            this.NodePoolSet = new Array();
            for (let z in params.NodePoolSet) {
                let obj = new NodePool();
                obj.deserialize(params.NodePoolSet[z]);
                this.NodePoolSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePrometheusInstancesOverview返回参数结构体
 * @class
 */
class DescribePrometheusInstancesOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例列表
         * @type {Array.<PrometheusInstancesOverview> || null}
         */
        this.Instances = null;

        /**
         * 实例总数
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new PrometheusInstancesOverview();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEKSClusterCredential请求参数结构体
 * @class
 */
class DescribeEKSClusterCredentialRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群Id
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * EnableClusterDeletionProtection请求参数结构体
 * @class
 */
class EnableClusterDeletionProtectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * RestartEKSContainerInstances请求参数结构体
 * @class
 */
class RestartEKSContainerInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * EKS instance ids
         * @type {Array.<string> || null}
         */
        this.EksCiIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EksCiIds = 'EksCiIds' in params ? params.EksCiIds : null;

    }
}

/**
 * DrainClusterVirtualNode请求参数结构体
 * @class
 */
class DrainClusterVirtualNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 节点名
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;

    }
}

/**
 * DescribeClusterLevelAttribute请求参数结构体
 * @class
 */
class DescribeClusterLevelAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID，变配时使用
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
        this.ClusterID = 'ClusterID' in params ? params.ClusterID : null;

    }
}

/**
 * DescribeClusterReleaseDetails请求参数结构体
 * @class
 */
class DescribeClusterReleaseDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 应用名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 应用所在命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 集群类型
         * @type {string || null}
         */
        this.ClusterType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;

    }
}

/**
 * CreateECMInstances请求参数结构体
 * @class
 */
class CreateECMInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterID = null;

        /**
         * 模块id
         * @type {string || null}
         */
        this.ModuleId = null;

        /**
         * 需要创建实例的可用区及创建数目及运营商的列表
         * @type {Array.<ECMZoneInstanceCountISP> || null}
         */
        this.ZoneInstanceCountISPSet = null;

        /**
         * 密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 公网带宽
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * 镜像id
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 主机名称
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * 增强服务，包括云镜和云监控
         * @type {ECMEnhancedService || null}
         */
        this.EnhancedService = null;

        /**
         * 用户自定义脚本
         * @type {string || null}
         */
        this.UserData = null;

        /**
         * 实例扩展信息
         * @type {string || null}
         */
        this.External = null;

        /**
         * 实例所属安全组
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterID = 'ClusterID' in params ? params.ClusterID : null;
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;

        if (params.ZoneInstanceCountISPSet) {
            this.ZoneInstanceCountISPSet = new Array();
            for (let z in params.ZoneInstanceCountISPSet) {
                let obj = new ECMZoneInstanceCountISP();
                obj.deserialize(params.ZoneInstanceCountISPSet[z]);
                this.ZoneInstanceCountISPSet.push(obj);
            }
        }
        this.Password = 'Password' in params ? params.Password : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.HostName = 'HostName' in params ? params.HostName : null;

        if (params.EnhancedService) {
            let obj = new ECMEnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }
        this.UserData = 'UserData' in params ? params.UserData : null;
        this.External = 'External' in params ? params.External : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

    }
}

/**
 * DescribeClusterReleases请求参数结构体
 * @class
 */
class DescribeClusterReleasesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 每页数量限制
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 页偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * helm Release 安装的namespace
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * helm Release 的名字
         * @type {string || null}
         */
        this.ReleaseName = null;

        /**
         * helm Chart 的名字
         * @type {string || null}
         */
        this.ChartName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.ReleaseName = 'ReleaseName' in params ? params.ReleaseName : null;
        this.ChartName = 'ChartName' in params ? params.ChartName : null;

    }
}

/**
 * 接入k8s 的认证信息
 * @class
 */
class ClusterCredential extends  AbstractModel {
    constructor(){
        super();

        /**
         * CA 根证书
         * @type {string || null}
         */
        this.CACert = null;

        /**
         * 认证用的Token
         * @type {string || null}
         */
        this.Token = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CACert = 'CACert' in params ? params.CACert : null;
        this.Token = 'Token' in params ? params.Token : null;

    }
}

/**
 * DescribePrometheusOverviews请求参数结构体
 * @class
 */
class DescribePrometheusOverviewsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于分页
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 用于分页
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤实例，目前支持：
ID: 通过实例ID来过滤 
Name: 通过实例名称来过滤
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
 * DescribeClusterPendingReleases返回参数结构体
 * @class
 */
class DescribeClusterPendingReleasesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 正在安装中应用列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PendingRelease> || null}
         */
        this.ReleaseSet = null;

        /**
         * 每页返回数量限制
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 页偏移量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 总数量
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.ReleaseSet) {
            this.ReleaseSet = new Array();
            for (let z in params.ReleaseSet) {
                let obj = new PendingRelease();
                obj.deserialize(params.ReleaseSet[z]);
                this.ReleaseSet.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 描述了k8s节点数据盘相关配置与信息。
 * @class
 */
class DataDisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云盘类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 文件系统(ext3/ext4/xfs)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileSystem = null;

        /**
         * 云盘大小(G）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 是否自动化格式盘并挂载
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.AutoFormatAndMount = null;

        /**
         * 挂载目录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MountTarget = null;

        /**
         * 挂载设备名或分区名，当且仅当添加已有节点时需要
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiskPartition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.FileSystem = 'FileSystem' in params ? params.FileSystem : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.AutoFormatAndMount = 'AutoFormatAndMount' in params ? params.AutoFormatAndMount : null;
        this.MountTarget = 'MountTarget' in params ? params.MountTarget : null;
        this.DiskPartition = 'DiskPartition' in params ? params.DiskPartition : null;

    }
}

/**
 * DeleteEKSCluster请求参数结构体
 * @class
 */
class DeleteEKSClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性集群Id
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * GetUpgradeInstanceProgress返回参数结构体
 * @class
 */
class GetUpgradeInstanceProgressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 升级节点总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 已升级节点总数
         * @type {number || null}
         */
        this.Done = null;

        /**
         * 升级任务生命周期
process 运行中
paused 已停止
pauing 正在停止
done  已完成
timeout 已超时
aborted 已取消
         * @type {string || null}
         */
        this.LifeState = null;

        /**
         * 各节点升级进度详情
         * @type {Array.<InstanceUpgradeProgressItem> || null}
         */
        this.Instances = null;

        /**
         * 集群当前状态
         * @type {InstanceUpgradeClusterStatus || null}
         */
        this.ClusterStatus = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Done = 'Done' in params ? params.Done : null;
        this.LifeState = 'LifeState' in params ? params.LifeState : null;

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new InstanceUpgradeProgressItem();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }

        if (params.ClusterStatus) {
            let obj = new InstanceUpgradeClusterStatus();
            obj.deserialize(params.ClusterStatus)
            this.ClusterStatus = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeExistedInstances返回参数结构体
 * @class
 */
class DescribeExistedInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 已经存在的实例信息数组。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ExistedInstance> || null}
         */
        this.ExistedInstanceSet = null;

        /**
         * 符合条件的实例数量。
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

        if (params.ExistedInstanceSet) {
            this.ExistedInstanceSet = new Array();
            for (let z in params.ExistedInstanceSet) {
                let obj = new ExistedInstance();
                obj.deserialize(params.ExistedInstanceSet[z]);
                this.ExistedInstanceSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePrometheusTemplate请求参数结构体
 * @class
 */
class CreatePrometheusTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板设置
         * @type {PrometheusTemplate || null}
         */
        this.Template = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Template) {
            let obj = new PrometheusTemplate();
            obj.deserialize(params.Template)
            this.Template = obj;
        }

    }
}

/**
 * DescribeEKSContainerInstances返回参数结构体
 * @class
 */
class DescribeEKSContainerInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器组总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 容器组列表
         * @type {Array.<EksCi> || null}
         */
        this.EksCis = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.EksCis) {
            this.EksCis = new Array();
            for (let z in params.EksCis) {
                let obj = new EksCi();
                obj.deserialize(params.EksCis[z]);
                this.EksCis.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePrometheusAlertRule返回参数结构体
 * @class
 */
class CreatePrometheusAlertRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警id
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
 * ECM增强服务
 * @class
 */
class ECMEnhancedService extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启云监控服务
         * @type {ECMRunMonitorServiceEnabled || null}
         */
        this.SecurityService = null;

        /**
         * 是否开启云镜服务
         * @type {ECMRunSecurityServiceEnabled || null}
         */
        this.MonitorService = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SecurityService) {
            let obj = new ECMRunMonitorServiceEnabled();
            obj.deserialize(params.SecurityService)
            this.SecurityService = obj;
        }

        if (params.MonitorService) {
            let obj = new ECMRunSecurityServiceEnabled();
            obj.deserialize(params.MonitorService)
            this.MonitorService = obj;
        }

    }
}

/**
 * ModifyClusterAuthenticationOptions返回参数结构体
 * @class
 */
class ModifyClusterAuthenticationOptionsResponse extends  AbstractModel {
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
 * 边缘计算集群公网访问负载均衡信息
 * @class
 */
class EdgeClusterPublicLB extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启公网访问LB
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * 允许访问的公网cidr
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.AllowFromCidrs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.AllowFromCidrs = 'AllowFromCidrs' in params ? params.AllowFromCidrs : null;

    }
}

/**
 * EnableEventPersistence返回参数结构体
 * @class
 */
class EnableEventPersistenceResponse extends  AbstractModel {
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
 * 描述了实例的增强服务启用情况与其设置，如云安全，云监控等实例 Agent
 * @class
 */
class EnhancedService extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开启云安全服务。若不指定该参数，则默认开启云安全服务。
         * @type {RunSecurityServiceEnabled || null}
         */
        this.SecurityService = null;

        /**
         * 开启云监控服务。若不指定该参数，则默认开启云监控服务。
         * @type {RunMonitorServiceEnabled || null}
         */
        this.MonitorService = null;

        /**
         * 开启云自动化助手服务（TencentCloud Automation Tools，TAT）。若不指定该参数，则公共镜像默认开启云自动化助手服务，其他镜像默认不开启云自动化助手服务。
         * @type {RunAutomationServiceEnabled || null}
         */
        this.AutomationService = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SecurityService) {
            let obj = new RunSecurityServiceEnabled();
            obj.deserialize(params.SecurityService)
            this.SecurityService = obj;
        }

        if (params.MonitorService) {
            let obj = new RunMonitorServiceEnabled();
            obj.deserialize(params.MonitorService)
            this.MonitorService = obj;
        }

        if (params.AutomationService) {
            let obj = new RunAutomationServiceEnabled();
            obj.deserialize(params.AutomationService)
            this.AutomationService = obj;
        }

    }
}

/**
 * DeleteEKSContainerInstances返回参数结构体
 * @class
 */
class DeleteEKSContainerInstancesResponse extends  AbstractModel {
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
 * UninstallLogAgent请求参数结构体
 * @class
 */
class UninstallLogAgentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * 探针使用TcpSocket检测容器
 * @class
 */
class TcpSocket extends  AbstractModel {
    constructor(){
        super();

        /**
         * TcpSocket检测的端口
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
 * 标签描述列表。通过指定该参数可以同时绑定标签到相应的资源实例，当前仅支持绑定标签到云主机实例。
 * @class
 */
class TagSpecification extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签绑定的资源类型，当前支持类型："cluster"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * 标签对列表
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
 * 告警通知渠道配置
 * @class
 */
class PrometheusNotificationItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否启用
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * 通道类型，默认为amp，支持以下
amp
webhook
alertmanager
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 如果Type为webhook, 则该字段为必填项
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WebHook = null;

        /**
         * 如果Type为alertmanager, 则该字段为必填项
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PrometheusAlertManagerConfig || null}
         */
        this.AlertManager = null;

        /**
         * 收敛时间
         * @type {string || null}
         */
        this.RepeatInterval = null;

        /**
         * 生效起始时间
         * @type {string || null}
         */
        this.TimeRangeStart = null;

        /**
         * 生效结束时间
         * @type {string || null}
         */
        this.TimeRangeEnd = null;

        /**
         * 告警通知方式。目前有SMS、EMAIL、CALL、WECHAT方式。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.NotifyWay = null;

        /**
         * 告警接收组（用户组）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ReceiverGroups = null;

        /**
         * 电话告警顺序。
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.PhoneNotifyOrder = null;

        /**
         * 电话告警次数。
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PhoneCircleTimes = null;

        /**
         * 电话告警轮内间隔。单位：秒
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PhoneInnerInterval = null;

        /**
         * 电话告警轮外间隔。单位：秒
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PhoneCircleInterval = null;

        /**
         * 电话告警触达通知
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.PhoneArriveNotice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.WebHook = 'WebHook' in params ? params.WebHook : null;

        if (params.AlertManager) {
            let obj = new PrometheusAlertManagerConfig();
            obj.deserialize(params.AlertManager)
            this.AlertManager = obj;
        }
        this.RepeatInterval = 'RepeatInterval' in params ? params.RepeatInterval : null;
        this.TimeRangeStart = 'TimeRangeStart' in params ? params.TimeRangeStart : null;
        this.TimeRangeEnd = 'TimeRangeEnd' in params ? params.TimeRangeEnd : null;
        this.NotifyWay = 'NotifyWay' in params ? params.NotifyWay : null;
        this.ReceiverGroups = 'ReceiverGroups' in params ? params.ReceiverGroups : null;
        this.PhoneNotifyOrder = 'PhoneNotifyOrder' in params ? params.PhoneNotifyOrder : null;
        this.PhoneCircleTimes = 'PhoneCircleTimes' in params ? params.PhoneCircleTimes : null;
        this.PhoneInnerInterval = 'PhoneInnerInterval' in params ? params.PhoneInnerInterval : null;
        this.PhoneCircleInterval = 'PhoneCircleInterval' in params ? params.PhoneCircleInterval : null;
        this.PhoneArriveNotice = 'PhoneArriveNotice' in params ? params.PhoneArriveNotice : null;

    }
}

/**
 * DeleteEdgeClusterInstances返回参数结构体
 * @class
 */
class DeleteEdgeClusterInstancesResponse extends  AbstractModel {
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
 * DeleteTKEEdgeCluster请求参数结构体
 * @class
 */
class DeleteTKEEdgeClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * CreatePrometheusGlobalNotification返回参数结构体
 * @class
 */
class CreatePrometheusGlobalNotificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 全局告警通知渠道ID
注意：此字段可能返回 null，表示取不到有效值。
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
 * DescribeClusterAuthenticationOptions返回参数结构体
 * @class
 */
class DescribeClusterAuthenticationOptionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ServiceAccount认证配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ServiceAccountAuthenticationOptions || null}
         */
        this.ServiceAccounts = null;

        /**
         * 最近一次修改操作结果，返回值可能为：Updating，Success，Failed，TimeOut
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LatestOperationState = null;

        /**
         * OIDC认证配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OIDCConfigAuthenticationOptions || null}
         */
        this.OIDCConfig = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ServiceAccounts) {
            let obj = new ServiceAccountAuthenticationOptions();
            obj.deserialize(params.ServiceAccounts)
            this.ServiceAccounts = obj;
        }
        this.LatestOperationState = 'LatestOperationState' in params ? params.LatestOperationState : null;

        if (params.OIDCConfig) {
            let obj = new OIDCConfigAuthenticationOptions();
            obj.deserialize(params.OIDCConfig)
            this.OIDCConfig = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeletePrometheusClusterAgent返回参数结构体
 * @class
 */
class DeletePrometheusClusterAgentResponse extends  AbstractModel {
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
 * CreateClusterRelease请求参数结构体
 * @class
 */
class CreateClusterReleaseRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 应用名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 应用命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 制品名称或从第三方repo 安装chart时，制品压缩包下载地址, 不支持重定向类型chart 地址，结尾为*.tgz
         * @type {string || null}
         */
        this.Chart = null;

        /**
         * 自定义参数
         * @type {ReleaseValues || null}
         */
        this.Values = null;

        /**
         * 制品来源，范围：tke 应用市场/第三方chart
         * @type {string || null}
         */
        this.ChartFrom = null;

        /**
         * 制品版本
         * @type {string || null}
         */
        this.ChartVersion = null;

        /**
         * 制品仓库URL地址
         * @type {string || null}
         */
        this.ChartRepoURL = null;

        /**
         * 制品访问用户名
         * @type {string || null}
         */
        this.Username = null;

        /**
         * 制品访问密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 制品命名空间
         * @type {string || null}
         */
        this.ChartNamespace = null;

        /**
         * 集群类型，支持传 tke, eks, tkeedge, exernal(注册集群）
         * @type {string || null}
         */
        this.ClusterType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Chart = 'Chart' in params ? params.Chart : null;

        if (params.Values) {
            let obj = new ReleaseValues();
            obj.deserialize(params.Values)
            this.Values = obj;
        }
        this.ChartFrom = 'ChartFrom' in params ? params.ChartFrom : null;
        this.ChartVersion = 'ChartVersion' in params ? params.ChartVersion : null;
        this.ChartRepoURL = 'ChartRepoURL' in params ? params.ChartRepoURL : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.ChartNamespace = 'ChartNamespace' in params ? params.ChartNamespace : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;

    }
}

/**
 * DescribePrometheusAgents请求参数结构体
 * @class
 */
class DescribePrometheusAgentsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 用于分页
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 用于分页
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * AddClusterCIDR返回参数结构体
 * @class
 */
class AddClusterCIDRResponse extends  AbstractModel {
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
 * 应用市场的安装应用详情
 * @class
 */
class ReleaseDetails extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 应用所在命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 应用当前版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Version = null;

        /**
         * 应用状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 应用描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 应用提示
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Notes = null;

        /**
         * 用户自定义参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Config = null;

        /**
         * 应用资源详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Manifest = null;

        /**
         * 应用制品版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChartVersion = null;

        /**
         * 应用制品名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChartName = null;

        /**
         * 应用制品描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChartDescription = null;

        /**
         * 应用制品app版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AppVersion = null;

        /**
         * 应用首次部署时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FirstDeployedTime = null;

        /**
         * 应用最近部署时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastDeployedTime = null;

        /**
         * 应用参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ComputedValues = null;

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
        this.Version = 'Version' in params ? params.Version : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Notes = 'Notes' in params ? params.Notes : null;
        this.Config = 'Config' in params ? params.Config : null;
        this.Manifest = 'Manifest' in params ? params.Manifest : null;
        this.ChartVersion = 'ChartVersion' in params ? params.ChartVersion : null;
        this.ChartName = 'ChartName' in params ? params.ChartName : null;
        this.ChartDescription = 'ChartDescription' in params ? params.ChartDescription : null;
        this.AppVersion = 'AppVersion' in params ? params.AppVersion : null;
        this.FirstDeployedTime = 'FirstDeployedTime' in params ? params.FirstDeployedTime : null;
        this.LastDeployedTime = 'LastDeployedTime' in params ? params.LastDeployedTime : null;
        this.ComputedValues = 'ComputedValues' in params ? params.ComputedValues : null;

    }
}

/**
 * DescribePrometheusInstanceInitStatus请求参数结构体
 * @class
 */
class DescribePrometheusInstanceInitStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeClusterLevelAttribute返回参数结构体
 * @class
 */
class DescribeClusterLevelAttributeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 集群规模
         * @type {Array.<ClusterLevelAttribute> || null}
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
                let obj = new ClusterLevelAttribute();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 托管prometheus中grafana的信息
 * @class
 */
class PrometheusGrafanaInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否启用
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * 域名，只有开启外网访问才有效果
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 内网地址，或者外网地址
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 是否开启了外网访问
close = 未开启外网访问
opening = 正在开启外网访问
open  = 已开启外网访问
         * @type {string || null}
         */
        this.Internet = null;

        /**
         * grafana管理员用户名
         * @type {string || null}
         */
        this.AdminUser = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Internet = 'Internet' in params ? params.Internet : null;
        this.AdminUser = 'AdminUser' in params ? params.AdminUser : null;

    }
}

/**
 * 镜像信息
 * @class
 */
class ImageInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像别名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 操作系统名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OsName = null;

        /**
         * 镜像ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 容器的镜像版本，"DOCKER_CUSTOMIZE"(容器定制版),"GENERAL"(普通版本，默认值)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OsCustomizeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.OsName = 'OsName' in params ? params.OsName : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.OsCustomizeType = 'OsCustomizeType' in params ? params.OsCustomizeType : null;

    }
}

/**
 * CreatePrometheusAlertPolicy请求参数结构体
 * @class
 */
class CreatePrometheusAlertPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 告警配置
         * @type {PrometheusAlertPolicyItem || null}
         */
        this.AlertRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.AlertRule) {
            let obj = new PrometheusAlertPolicyItem();
            obj.deserialize(params.AlertRule)
            this.AlertRule = obj;
        }

    }
}

/**
 * DescribeImageCaches返回参数结构体
 * @class
 */
class DescribeImageCachesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像缓存总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 镜像缓存信息列表
         * @type {Array.<ImageCache> || null}
         */
        this.ImageCaches = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ImageCaches) {
            this.ImageCaches = new Array();
            for (let z in params.ImageCaches) {
                let obj = new ImageCache();
                obj.deserialize(params.ImageCaches[z]);
                this.ImageCaches.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 资源使用明细
 * @class
 */
class ResourceUsageDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 资源使用量
         * @type {number || null}
         */
        this.Usage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Usage = 'Usage' in params ? params.Usage : null;

    }
}

/**
 * DescribeClusterVirtualNodePools返回参数结构体
 * @class
 */
class DescribeClusterVirtualNodePoolsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点池总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 虚拟节点池列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VirtualNodePool> || null}
         */
        this.NodePoolSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.NodePoolSet) {
            this.NodePoolSet = new Array();
            for (let z in params.NodePoolSet) {
                let obj = new VirtualNodePool();
                obj.deserialize(params.NodePoolSet[z]);
                this.NodePoolSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckEdgeClusterCIDR返回参数结构体
 * @class
 */
class CheckEdgeClusterCIDRResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回码，具体如下
-1 内部错误
0 没冲突
1 vpc 和 serviceCIDR 冲突
2 vpc 和 podCIDR 冲突
3 serviceCIDR  和 podCIDR 冲突
         * @type {number || null}
         */
        this.ConflictCode = null;

        /**
         * CIDR冲突描述信息。
         * @type {string || null}
         */
        this.ConflictMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConflictCode = 'ConflictCode' in params ? params.ConflictCode : null;
        this.ConflictMsg = 'ConflictMsg' in params ? params.ConflictMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePrometheusClusterAgents请求参数结构体
 * @class
 */
class DescribePrometheusClusterAgentsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 用于分页
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 用于分页
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 边缘容器参数描述
 * @class
 */
class EdgeArgsFlag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 参数类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 参数描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Usage = null;

        /**
         * 参数默认值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Default = null;

        /**
         * 参数可选范围（目前包含range和in两种，"[]"代表range，如"[1, 5]"表示参数必须>=1且 <=5, "()"代表in， 如"('aa', 'bb')"表示参数只能为字符串'aa'或者'bb'，该参数为空表示不校验）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Constraint = null;

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
        this.Usage = 'Usage' in params ? params.Usage : null;
        this.Default = 'Default' in params ? params.Default : null;
        this.Constraint = 'Constraint' in params ? params.Constraint : null;

    }
}

/**
 * CheckInstancesUpgradeAble返回参数结构体
 * @class
 */
class CheckInstancesUpgradeAbleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群master当前小版本
         * @type {string || null}
         */
        this.ClusterVersion = null;

        /**
         * 集群master对应的大版本目前最新小版本
         * @type {string || null}
         */
        this.LatestVersion = null;

        /**
         * 可升级节点列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UpgradeAbleInstancesItem> || null}
         */
        this.UpgradeAbleInstances = null;

        /**
         * 总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 不可升级原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UnavailableReason> || null}
         */
        this.UnavailableVersionReason = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterVersion = 'ClusterVersion' in params ? params.ClusterVersion : null;
        this.LatestVersion = 'LatestVersion' in params ? params.LatestVersion : null;

        if (params.UpgradeAbleInstances) {
            this.UpgradeAbleInstances = new Array();
            for (let z in params.UpgradeAbleInstances) {
                let obj = new UpgradeAbleInstancesItem();
                obj.deserialize(params.UpgradeAbleInstances[z]);
                this.UpgradeAbleInstances.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.UnavailableVersionReason) {
            this.UnavailableVersionReason = new Array();
            for (let z in params.UnavailableVersionReason) {
                let obj = new UnavailableReason();
                obj.deserialize(params.UnavailableVersionReason[z]);
                this.UnavailableVersionReason.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePrometheusTemp请求参数结构体
 * @class
 */
class CreatePrometheusTempRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板设置
         * @type {PrometheusTemp || null}
         */
        this.Template = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Template) {
            let obj = new PrometheusTemp();
            obj.deserialize(params.Template)
            this.Template = obj;
        }

    }
}

/**
 * CreatePrometheusDashboard请求参数结构体
 * @class
 */
class CreatePrometheusDashboardRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 面板组名称
         * @type {string || null}
         */
        this.DashboardName = null;

        /**
         * 面板列表
每一项是一个grafana dashboard的json定义
         * @type {Array.<string> || null}
         */
        this.Contents = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DashboardName = 'DashboardName' in params ? params.DashboardName : null;
        this.Contents = 'Contents' in params ? params.Contents : null;

    }
}

/**
 * DeleteClusterRouteTable返回参数结构体
 * @class
 */
class DeleteClusterRouteTableResponse extends  AbstractModel {
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
 * DisableClusterDeletionProtection请求参数结构体
 * @class
 */
class DisableClusterDeletionProtectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * prometheus一个job的targets
 * @class
 */
class PrometheusJobTargets extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该Job的targets列表
         * @type {Array.<PrometheusTarget> || null}
         */
        this.Targets = null;

        /**
         * job的名称
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * targets总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 健康的target总数
         * @type {number || null}
         */
        this.Up = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new PrometheusTarget();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }
        this.JobName = 'JobName' in params ? params.JobName : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.Up = 'Up' in params ? params.Up : null;

    }
}

/**
 * ModifyClusterAsGroupOptionAttribute返回参数结构体
 * @class
 */
class ModifyClusterAsGroupOptionAttributeResponse extends  AbstractModel {
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
 * UninstallLogAgent返回参数结构体
 * @class
 */
class UninstallLogAgentResponse extends  AbstractModel {
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
 * 与云监控融合托管prometheus实例，关联集群基础信息
 * @class
 */
class PrometheusClusterAgentBasic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 集群类型
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 是否开启公网CLB
         * @type {boolean || null}
         */
        this.EnableExternal = null;

        /**
         * 集群内部署组件的pod配置
         * @type {PrometheusClusterAgentPodConfig || null}
         */
        this.InClusterPodConfig = null;

        /**
         * 该集群采集的所有指标都会带上这些labels
         * @type {Array.<Label> || null}
         */
        this.ExternalLabels = null;

        /**
         * 是否安装默认采集配置
         * @type {boolean || null}
         */
        this.NotInstallBasicScrape = null;

        /**
         * 是否采集指标，true代表drop所有指标，false代表采集默认指标
         * @type {boolean || null}
         */
        this.NotScrape = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.EnableExternal = 'EnableExternal' in params ? params.EnableExternal : null;

        if (params.InClusterPodConfig) {
            let obj = new PrometheusClusterAgentPodConfig();
            obj.deserialize(params.InClusterPodConfig)
            this.InClusterPodConfig = obj;
        }

        if (params.ExternalLabels) {
            this.ExternalLabels = new Array();
            for (let z in params.ExternalLabels) {
                let obj = new Label();
                obj.deserialize(params.ExternalLabels[z]);
                this.ExternalLabels.push(obj);
            }
        }
        this.NotInstallBasicScrape = 'NotInstallBasicScrape' in params ? params.NotInstallBasicScrape : null;
        this.NotScrape = 'NotScrape' in params ? params.NotScrape : null;

    }
}

/**
 * DeleteTKEEdgeCluster返回参数结构体
 * @class
 */
class DeleteTKEEdgeClusterResponse extends  AbstractModel {
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
 * CreatePrometheusTemp返回参数结构体
 * @class
 */
class CreatePrometheusTempResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板Id
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePrometheusTargets请求参数结构体
 * @class
 */
class DescribePrometheusTargetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 集群类型
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 过滤条件，当前支持
Name=state
Value=up, down, unknown
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

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
 * RunPrometheusInstance返回参数结构体
 * @class
 */
class RunPrometheusInstanceResponse extends  AbstractModel {
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
 * DeletePrometheusTemplateSync返回参数结构体
 * @class
 */
class DeletePrometheusTemplateSyncResponse extends  AbstractModel {
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
 * DescribeClusterAsGroups请求参数结构体
 * @class
 */
class DescribeClusterAsGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 伸缩组ID列表，如果为空，表示拉取集群关联的所有伸缩组。
         * @type {Array.<string> || null}
         */
        this.AutoScalingGroupIds = null;

        /**
         * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.AutoScalingGroupIds = 'AutoScalingGroupIds' in params ? params.AutoScalingGroupIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ECM云监控服务
 * @class
 */
class ECMRunMonitorServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启
         * @type {boolean || null}
         */
        this.Enabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

/**
 * SyncPrometheusTemp请求参数结构体
 * @class
 */
class SyncPrometheusTempRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 同步目标
         * @type {Array.<PrometheusTemplateSyncTarget> || null}
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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new PrometheusTemplateSyncTarget();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }

    }
}

/**
 * ModifyClusterEndpointSP返回参数结构体
 * @class
 */
class ModifyClusterEndpointSPResponse extends  AbstractModel {
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
 * ECM云镜服务
 * @class
 */
class ECMRunSecurityServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * 云镜版本：0 基础版，1 专业版
         * @type {number || null}
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
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.Version = 'Version' in params ? params.Version : null;

    }
}

/**
 * SyncPrometheusTemplate返回参数结构体
 * @class
 */
class SyncPrometheusTemplateResponse extends  AbstractModel {
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
 * UninstallClusterRelease返回参数结构体
 * @class
 */
class UninstallClusterReleaseResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PendingRelease || null}
         */
        this.Release = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Release) {
            let obj = new PendingRelease();
            obj.deserialize(params.Release)
            this.Release = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 集群伸缩组属性
 * @class
 */
class ClusterAsGroupAttribute extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩组ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * 是否开启
         * @type {boolean || null}
         */
        this.AutoScalingGroupEnabled = null;

        /**
         * 伸缩组最大最小实例数
         * @type {AutoScalingGroupRange || null}
         */
        this.AutoScalingGroupRange = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.AutoScalingGroupEnabled = 'AutoScalingGroupEnabled' in params ? params.AutoScalingGroupEnabled : null;

        if (params.AutoScalingGroupRange) {
            let obj = new AutoScalingGroupRange();
            obj.deserialize(params.AutoScalingGroupRange)
            this.AutoScalingGroupRange = obj;
        }

    }
}

/**
 * ForwardTKEEdgeApplicationRequestV3请求参数结构体
 * @class
 */
class ForwardTKEEdgeApplicationRequestV3Request extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求集群addon的访问
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 请求集群addon的路径
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 请求集群addon后允许接收的数据格式
         * @type {string || null}
         */
        this.Accept = null;

        /**
         * 请求集群addon的数据格式
         * @type {string || null}
         */
        this.ContentType = null;

        /**
         * 请求集群addon的数据
         * @type {string || null}
         */
        this.RequestBody = null;

        /**
         * 集群名称，例如cls-1234abcd
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 是否编码请求内容
         * @type {string || null}
         */
        this.EncodedBody = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Method = 'Method' in params ? params.Method : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Accept = 'Accept' in params ? params.Accept : null;
        this.ContentType = 'ContentType' in params ? params.ContentType : null;
        this.RequestBody = 'RequestBody' in params ? params.RequestBody : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.EncodedBody = 'EncodedBody' in params ? params.EncodedBody : null;

    }
}

/**
 * DisableEventPersistence请求参数结构体
 * @class
 */
class DisableEventPersistenceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 取值为true代表关闭集群审计时删除默认创建的日志集和主题，false代表不删除
         * @type {boolean || null}
         */
        this.DeleteLogSetAndTopic = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.DeleteLogSetAndTopic = 'DeleteLogSetAndTopic' in params ? params.DeleteLogSetAndTopic : null;

    }
}

/**
 * 描述了 “云监控” 服务相关的信息
 * @class
 */
class RunMonitorServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启[云监控](/document/product/248)服务。取值范围：<br><li>TRUE：表示开启云监控服务<br><li>FALSE：表示不开启云监控服务<br><br>默认取值：TRUE。
         * @type {boolean || null}
         */
        this.Enabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

/**
 * CreateEKSContainerInstances请求参数结构体
 * @class
 */
class CreateEKSContainerInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 容器组
         * @type {Array.<Container> || null}
         */
        this.Containers = null;

        /**
         * EKS Container Instance容器实例名称
         * @type {string || null}
         */
        this.EksCiName = null;

        /**
         * 指定新创建实例所属于的安全组Id
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 实例所属子网Id
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 实例所属VPC的Id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 内存，单位：GiB。可参考[资源规格](https://cloud.tencent.com/document/product/457/39808)文档
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * CPU，单位：核。可参考[资源规格](https://cloud.tencent.com/document/product/457/39808)文档
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 实例重启策略： Always(总是重启)、Never(从不重启)、OnFailure(失败时重启)，默认：Always。
         * @type {string || null}
         */
        this.RestartPolicy = null;

        /**
         * 镜像仓库凭证数组
         * @type {Array.<ImageRegistryCredential> || null}
         */
        this.ImageRegistryCredentials = null;

        /**
         * 数据卷，包含NfsVolume数组和CbsVolume数组
         * @type {EksCiVolume || null}
         */
        this.EksCiVolume = null;

        /**
         * 实例副本数，默认为1
         * @type {number || null}
         */
        this.Replicas = null;

        /**
         * Init 容器
         * @type {Array.<Container> || null}
         */
        this.InitContainers = null;

        /**
         * 自定义DNS配置
         * @type {DNSConfig || null}
         */
        this.DnsConfig = null;

        /**
         * 用来绑定容器实例的已有EIP的列表。如传值，需要保证数值和Replicas相等。
另外此参数和AutoCreateEipAttribute互斥。
         * @type {Array.<string> || null}
         */
        this.ExistedEipIds = null;

        /**
         * 自动创建EIP的可选参数。若传此参数，则会自动创建EIP。
另外此参数和ExistedEipIds互斥
         * @type {EipAttribute || null}
         */
        this.AutoCreateEipAttribute = null;

        /**
         * 是否为容器实例自动创建EIP，默认为false。若传true，则此参数和ExistedEipIds互斥
         * @type {boolean || null}
         */
        this.AutoCreateEip = null;

        /**
         * Pod 所需的 CPU 资源型号，如果不填写则默认不强制指定 CPU 类型。目前支持型号如下：
intel
amd
- 支持优先级顺序写法，如 “amd,intel” 表示优先创建 amd 资源 Pod，如果所选地域可用区 amd 资源不足，则会创建 intel 资源 Pod。
         * @type {string || null}
         */
        this.CpuType = null;

        /**
         * 容器实例所需的 GPU 资源型号，目前支持型号如下：
1/4\*V100
1/2\*V100
V100
1/4\*T4
1/2\*T4
T4
         * @type {string || null}
         */
        this.GpuType = null;

        /**
         * Pod 所需的 GPU 数量，如填写，请确保为支持的规格。默认单位为卡，无需再次注明。
         * @type {number || null}
         */
        this.GpuCount = null;

        /**
         * 为容器实例关联 CAM 角色，value 填写 CAM 角色名称，容器实例可获取该 CAM 角色包含的权限策略，方便 容器实例 内的程序进行如购买资源、读写存储等云资源操作。
         * @type {string || null}
         */
        this.CamRoleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Containers) {
            this.Containers = new Array();
            for (let z in params.Containers) {
                let obj = new Container();
                obj.deserialize(params.Containers[z]);
                this.Containers.push(obj);
            }
        }
        this.EksCiName = 'EksCiName' in params ? params.EksCiName : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.RestartPolicy = 'RestartPolicy' in params ? params.RestartPolicy : null;

        if (params.ImageRegistryCredentials) {
            this.ImageRegistryCredentials = new Array();
            for (let z in params.ImageRegistryCredentials) {
                let obj = new ImageRegistryCredential();
                obj.deserialize(params.ImageRegistryCredentials[z]);
                this.ImageRegistryCredentials.push(obj);
            }
        }

        if (params.EksCiVolume) {
            let obj = new EksCiVolume();
            obj.deserialize(params.EksCiVolume)
            this.EksCiVolume = obj;
        }
        this.Replicas = 'Replicas' in params ? params.Replicas : null;

        if (params.InitContainers) {
            this.InitContainers = new Array();
            for (let z in params.InitContainers) {
                let obj = new Container();
                obj.deserialize(params.InitContainers[z]);
                this.InitContainers.push(obj);
            }
        }

        if (params.DnsConfig) {
            let obj = new DNSConfig();
            obj.deserialize(params.DnsConfig)
            this.DnsConfig = obj;
        }
        this.ExistedEipIds = 'ExistedEipIds' in params ? params.ExistedEipIds : null;

        if (params.AutoCreateEipAttribute) {
            let obj = new EipAttribute();
            obj.deserialize(params.AutoCreateEipAttribute)
            this.AutoCreateEipAttribute = obj;
        }
        this.AutoCreateEip = 'AutoCreateEip' in params ? params.AutoCreateEip : null;
        this.CpuType = 'CpuType' in params ? params.CpuType : null;
        this.GpuType = 'GpuType' in params ? params.GpuType : null;
        this.GpuCount = 'GpuCount' in params ? params.GpuCount : null;
        this.CamRoleName = 'CamRoleName' in params ? params.CamRoleName : null;

    }
}

/**
 * DescribeTKEEdgeClusterCredential返回参数结构体
 * @class
 */
class DescribeTKEEdgeClusterCredentialResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群的接入地址信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IPAddress> || null}
         */
        this.Addresses = null;

        /**
         * 集群的认证信息
         * @type {ClusterCredential || null}
         */
        this.Credential = null;

        /**
         * 集群的公网访问信息
         * @type {EdgeClusterPublicLB || null}
         */
        this.PublicLB = null;

        /**
         * 集群的内网访问信息
         * @type {EdgeClusterInternalLB || null}
         */
        this.InternalLB = null;

        /**
         * 集群的CoreDns部署信息
         * @type {string || null}
         */
        this.CoreDns = null;

        /**
         * 集群的健康检查多地域部署信息
         * @type {string || null}
         */
        this.HealthRegion = null;

        /**
         * 集群的健康检查部署信息
         * @type {string || null}
         */
        this.Health = null;

        /**
         * 是否部署GridDaemon以支持headless service
         * @type {string || null}
         */
        this.GridDaemon = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Addresses) {
            this.Addresses = new Array();
            for (let z in params.Addresses) {
                let obj = new IPAddress();
                obj.deserialize(params.Addresses[z]);
                this.Addresses.push(obj);
            }
        }

        if (params.Credential) {
            let obj = new ClusterCredential();
            obj.deserialize(params.Credential)
            this.Credential = obj;
        }

        if (params.PublicLB) {
            let obj = new EdgeClusterPublicLB();
            obj.deserialize(params.PublicLB)
            this.PublicLB = obj;
        }

        if (params.InternalLB) {
            let obj = new EdgeClusterInternalLB();
            obj.deserialize(params.InternalLB)
            this.InternalLB = obj;
        }
        this.CoreDns = 'CoreDns' in params ? params.CoreDns : null;
        this.HealthRegion = 'HealthRegion' in params ? params.HealthRegion : null;
        this.Health = 'Health' in params ? params.Health : null;
        this.GridDaemon = 'GridDaemon' in params ? params.GridDaemon : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 描述了k8s集群相关配置与信息。
 * @class
 */
class InstanceAdvancedSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该节点属于podCIDR大小自定义模式时，可指定节点上运行的pod数量上限
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DesiredPodNumber = null;

        /**
         * GPU驱动相关参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {GPUArgs || null}
         */
        this.GPUArgs = null;

        /**
         * base64 编码的用户脚本，在初始化节点之前执行，目前只对添加已有节点生效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PreStartUserScript = null;

        /**
         * 节点污点
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Taint> || null}
         */
        this.Taints = null;

        /**
         * 数据盘挂载点, 默认不挂载数据盘. 已格式化的 ext3，ext4，xfs 文件系统的数据盘将直接挂载，其他文件系统或未格式化的数据盘将自动格式化为ext4 (tlinux系统格式化成xfs)并挂载，请注意备份数据! 无数据盘或有多块数据盘的云主机此设置不生效。
注意，注意，多盘场景请使用下方的DataDisks数据结构，设置对应的云盘类型、云盘大小、挂载路径、是否格式化等信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MountTarget = null;

        /**
         * dockerd --graph 指定值, 默认为 /var/lib/docker
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DockerGraphPath = null;

        /**
         * base64 编码的用户脚本, 此脚本会在 k8s 组件运行后执行, 需要用户保证脚本的可重入及重试逻辑, 脚本及其生成的日志文件可在节点的 /data/ccs_userscript/ 路径查看, 如果要求节点需要在进行初始化完成后才可加入调度, 可配合 unschedulable 参数使用, 在 userScript 最后初始化完成后, 添加 kubectl uncordon nodename --kubeconfig=/root/.kube/config 命令使节点加入调度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserScript = null;

        /**
         * 设置加入的节点是否参与调度，默认值为0，表示参与调度；非0表示不参与调度, 待节点初始化完成之后, 可执行kubectl uncordon nodename使node加入调度.
         * @type {number || null}
         */
        this.Unschedulable = null;

        /**
         * 节点Label数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Label> || null}
         */
        this.Labels = null;

        /**
         * 多盘数据盘挂载信息：新建节点时请确保购买CVM的参数传递了购买多个数据盘的信息，如CreateClusterInstances API的RunInstancesPara下的DataDisks也需要设置购买多个数据盘, 具体可以参考CreateClusterInstances接口的添加集群节点(多块数据盘)样例；添加已有节点时，请确保填写的分区信息在节点上真实存在
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * 节点相关的自定义参数信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {InstanceExtraArgs || null}
         */
        this.ExtraArgs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DesiredPodNumber = 'DesiredPodNumber' in params ? params.DesiredPodNumber : null;

        if (params.GPUArgs) {
            let obj = new GPUArgs();
            obj.deserialize(params.GPUArgs)
            this.GPUArgs = obj;
        }
        this.PreStartUserScript = 'PreStartUserScript' in params ? params.PreStartUserScript : null;

        if (params.Taints) {
            this.Taints = new Array();
            for (let z in params.Taints) {
                let obj = new Taint();
                obj.deserialize(params.Taints[z]);
                this.Taints.push(obj);
            }
        }
        this.MountTarget = 'MountTarget' in params ? params.MountTarget : null;
        this.DockerGraphPath = 'DockerGraphPath' in params ? params.DockerGraphPath : null;
        this.UserScript = 'UserScript' in params ? params.UserScript : null;
        this.Unschedulable = 'Unschedulable' in params ? params.Unschedulable : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new Label();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.DataDisks) {
            this.DataDisks = new Array();
            for (let z in params.DataDisks) {
                let obj = new DataDisk();
                obj.deserialize(params.DataDisks[z]);
                this.DataDisks.push(obj);
            }
        }

        if (params.ExtraArgs) {
            let obj = new InstanceExtraArgs();
            obj.deserialize(params.ExtraArgs)
            this.ExtraArgs = obj;
        }

    }
}

/**
 * CancelClusterRelease返回参数结构体
 * @class
 */
class CancelClusterReleaseResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PendingRelease || null}
         */
        this.Release = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Release) {
            let obj = new PendingRelease();
            obj.deserialize(params.Release)
            this.Release = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateEdgeClusterVersion返回参数结构体
 * @class
 */
class UpdateEdgeClusterVersionResponse extends  AbstractModel {
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
 * ModifyClusterAsGroupAttribute请求参数结构体
 * @class
 */
class ModifyClusterAsGroupAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群关联的伸缩组属性
         * @type {ClusterAsGroupAttribute || null}
         */
        this.ClusterAsGroupAttribute = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.ClusterAsGroupAttribute) {
            let obj = new ClusterAsGroupAttribute();
            obj.deserialize(params.ClusterAsGroupAttribute)
            this.ClusterAsGroupAttribute = obj;
        }

    }
}

/**
 * DescribeClusterAsGroups返回参数结构体
 * @class
 */
class DescribeClusterAsGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群关联的伸缩组总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 集群关联的伸缩组列表
         * @type {Array.<ClusterAsGroup> || null}
         */
        this.ClusterAsGroupSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ClusterAsGroupSet) {
            this.ClusterAsGroupSet = new Array();
            for (let z in params.ClusterAsGroupSet) {
                let obj = new ClusterAsGroup();
                obj.deserialize(params.ClusterAsGroupSet[z]);
                this.ClusterAsGroupSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePrometheusConfig返回参数结构体
 * @class
 */
class DescribePrometheusConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 全局配置
         * @type {string || null}
         */
        this.Config = null;

        /**
         * ServiceMonitor配置
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.ServiceMonitors = null;

        /**
         * PodMonitor配置
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.PodMonitors = null;

        /**
         * 原生Job
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.RawJobs = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Config = 'Config' in params ? params.Config : null;

        if (params.ServiceMonitors) {
            this.ServiceMonitors = new Array();
            for (let z in params.ServiceMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.ServiceMonitors[z]);
                this.ServiceMonitors.push(obj);
            }
        }

        if (params.PodMonitors) {
            this.PodMonitors = new Array();
            for (let z in params.PodMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.PodMonitors[z]);
                this.PodMonitors.push(obj);
            }
        }

        if (params.RawJobs) {
            this.RawJobs = new Array();
            for (let z in params.RawJobs) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.RawJobs[z]);
                this.RawJobs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ScaleOutClusterMaster请求参数结构体
 * @class
 */
class ScaleOutClusterMasterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群实例ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 新建节点参数
         * @type {Array.<RunInstancesForNode> || null}
         */
        this.RunInstancesForNode = null;

        /**
         * 添加已有节点相关参数
         * @type {Array.<ExistedInstancesForNode> || null}
         */
        this.ExistedInstancesForNode = null;

        /**
         * 实例高级设置
         * @type {InstanceAdvancedSettings || null}
         */
        this.InstanceAdvancedSettings = null;

        /**
         * 集群master组件自定义参数
         * @type {ClusterExtraArgs || null}
         */
        this.ExtraArgs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.RunInstancesForNode) {
            this.RunInstancesForNode = new Array();
            for (let z in params.RunInstancesForNode) {
                let obj = new RunInstancesForNode();
                obj.deserialize(params.RunInstancesForNode[z]);
                this.RunInstancesForNode.push(obj);
            }
        }

        if (params.ExistedInstancesForNode) {
            this.ExistedInstancesForNode = new Array();
            for (let z in params.ExistedInstancesForNode) {
                let obj = new ExistedInstancesForNode();
                obj.deserialize(params.ExistedInstancesForNode[z]);
                this.ExistedInstancesForNode.push(obj);
            }
        }

        if (params.InstanceAdvancedSettings) {
            let obj = new InstanceAdvancedSettings();
            obj.deserialize(params.InstanceAdvancedSettings)
            this.InstanceAdvancedSettings = obj;
        }

        if (params.ExtraArgs) {
            let obj = new ClusterExtraArgs();
            obj.deserialize(params.ExtraArgs)
            this.ExtraArgs = obj;
        }

    }
}

/**
 * DeleteClusterInstances返回参数结构体
 * @class
 */
class DeleteClusterInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除成功的实例ID列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SuccInstanceIds = null;

        /**
         * 删除失败的实例ID列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.FailedInstanceIds = null;

        /**
         * 未匹配到的实例ID列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.NotFoundInstanceIds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SuccInstanceIds = 'SuccInstanceIds' in params ? params.SuccInstanceIds : null;
        this.FailedInstanceIds = 'FailedInstanceIds' in params ? params.FailedInstanceIds : null;
        this.NotFoundInstanceIds = 'NotFoundInstanceIds' in params ? params.NotFoundInstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePrometheusGlobalNotification请求参数结构体
 * @class
 */
class CreatePrometheusGlobalNotificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 告警通知渠道
         * @type {PrometheusNotificationItem || null}
         */
        this.Notification = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Notification) {
            let obj = new PrometheusNotificationItem();
            obj.deserialize(params.Notification)
            this.Notification = obj;
        }

    }
}

/**
 * ModifyPrometheusTemp返回参数结构体
 * @class
 */
class ModifyPrometheusTempResponse extends  AbstractModel {
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
 * 托管prometheus告警配置实例
 * @class
 */
class PrometheusAlertRuleDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 规则列表
         * @type {Array.<PrometheusAlertRule> || null}
         */
        this.Rules = null;

        /**
         * 最后修改时间
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * 告警渠道
         * @type {PrometheusNotification || null}
         */
        this.Notification = null;

        /**
         * 告警 id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 如果该告警来至模板下发，则TemplateId为模板id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 计算周期
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new PrometheusAlertRule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;

        if (params.Notification) {
            let obj = new PrometheusNotification();
            obj.deserialize(params.Notification)
            this.Notification = obj;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

    }
}

/**
 * 应用市场中部署的应用版本历史
 * @class
 */
class ReleaseHistory extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 应用命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 应用版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Revision = null;

        /**
         * 应用状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 应用制品名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Chart = null;

        /**
         * 应用制品版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AppVersion = null;

        /**
         * 应用更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedTime = null;

        /**
         * 应用描述
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Revision = 'Revision' in params ? params.Revision : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Chart = 'Chart' in params ? params.Chart : null;
        this.AppVersion = 'AppVersion' in params ? params.AppVersion : null;
        this.UpdatedTime = 'UpdatedTime' in params ? params.UpdatedTime : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeClusterInstances返回参数结构体
 * @class
 */
class DescribeClusterInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群中实例总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 集群中实例列表
         * @type {Array.<Instance> || null}
         */
        this.InstanceSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.InstanceSet) {
            this.InstanceSet = new Array();
            for (let z in params.InstanceSet) {
                let obj = new Instance();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePrometheusAlertRule请求参数结构体
 * @class
 */
class CreatePrometheusAlertRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 告警配置
         * @type {PrometheusAlertRuleDetail || null}
         */
        this.AlertRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.AlertRule) {
            let obj = new PrometheusAlertRuleDetail();
            obj.deserialize(params.AlertRule)
            this.AlertRule = obj;
        }

    }
}

/**
 * UpdateEKSCluster请求参数结构体
 * @class
 */
class UpdateEKSClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性集群Id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 弹性集群名称
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 弹性集群描述信息
         * @type {string || null}
         */
        this.ClusterDesc = null;

        /**
         * 子网Id 列表
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * 弹性容器集群公网访问LB信息
         * @type {ClusterPublicLB || null}
         */
        this.PublicLB = null;

        /**
         * 弹性容器集群内网访问LB信息
         * @type {ClusterInternalLB || null}
         */
        this.InternalLB = null;

        /**
         * Service 子网Id
         * @type {string || null}
         */
        this.ServiceSubnetId = null;

        /**
         * 集群自定义的dns 服务器信息
         * @type {Array.<DnsServerConf> || null}
         */
        this.DnsServers = null;

        /**
         * 是否清空自定义dns 服务器设置。为1 表示 是。其他表示 否。
         * @type {string || null}
         */
        this.ClearDnsServer = null;

        /**
         * 将来删除集群时是否要删除cbs。默认为 FALSE
         * @type {boolean || null}
         */
        this.NeedDeleteCbs = null;

        /**
         * 标记是否是新的内外网。默认为false
         * @type {boolean || null}
         */
        this.ProxyLB = null;

        /**
         * 扩展参数。须是map[string]string 的json 格式。
         * @type {string || null}
         */
        this.ExtraParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.ClusterDesc = 'ClusterDesc' in params ? params.ClusterDesc : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;

        if (params.PublicLB) {
            let obj = new ClusterPublicLB();
            obj.deserialize(params.PublicLB)
            this.PublicLB = obj;
        }

        if (params.InternalLB) {
            let obj = new ClusterInternalLB();
            obj.deserialize(params.InternalLB)
            this.InternalLB = obj;
        }
        this.ServiceSubnetId = 'ServiceSubnetId' in params ? params.ServiceSubnetId : null;

        if (params.DnsServers) {
            this.DnsServers = new Array();
            for (let z in params.DnsServers) {
                let obj = new DnsServerConf();
                obj.deserialize(params.DnsServers[z]);
                this.DnsServers.push(obj);
            }
        }
        this.ClearDnsServer = 'ClearDnsServer' in params ? params.ClearDnsServer : null;
        this.NeedDeleteCbs = 'NeedDeleteCbs' in params ? params.NeedDeleteCbs : null;
        this.ProxyLB = 'ProxyLB' in params ? params.ProxyLB : null;
        this.ExtraParam = 'ExtraParam' in params ? params.ExtraParam : null;

    }
}

/**
 * CreateTKEEdgeCluster请求参数结构体
 * @class
 */
class CreateTKEEdgeClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * k8s版本号
         * @type {string || null}
         */
        this.K8SVersion = null;

        /**
         * vpc 的Id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 集群名称
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 集群pod cidr
         * @type {string || null}
         */
        this.PodCIDR = null;

        /**
         * 集群service cidr
         * @type {string || null}
         */
        this.ServiceCIDR = null;

        /**
         * 集群描述信息
         * @type {string || null}
         */
        this.ClusterDesc = null;

        /**
         * 集群高级设置
         * @type {EdgeClusterAdvancedSettings || null}
         */
        this.ClusterAdvancedSettings = null;

        /**
         * 节点上最大Pod数量
         * @type {number || null}
         */
        this.MaxNodePodNum = null;

        /**
         * 边缘计算集群公网访问LB信息
         * @type {EdgeClusterPublicLB || null}
         */
        this.PublicLB = null;

        /**
         * 集群的级别
         * @type {string || null}
         */
        this.ClusterLevel = null;

        /**
         * 集群是否支持自动升配
         * @type {boolean || null}
         */
        this.AutoUpgradeClusterLevel = null;

        /**
         * 集群计费方式
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * 边缘集群版本，此版本区别于k8s版本，是整个集群各组件版本集合
         * @type {string || null}
         */
        this.EdgeVersion = null;

        /**
         * 边缘组件镜像仓库前缀
         * @type {string || null}
         */
        this.RegistryPrefix = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.K8SVersion = 'K8SVersion' in params ? params.K8SVersion : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.PodCIDR = 'PodCIDR' in params ? params.PodCIDR : null;
        this.ServiceCIDR = 'ServiceCIDR' in params ? params.ServiceCIDR : null;
        this.ClusterDesc = 'ClusterDesc' in params ? params.ClusterDesc : null;

        if (params.ClusterAdvancedSettings) {
            let obj = new EdgeClusterAdvancedSettings();
            obj.deserialize(params.ClusterAdvancedSettings)
            this.ClusterAdvancedSettings = obj;
        }
        this.MaxNodePodNum = 'MaxNodePodNum' in params ? params.MaxNodePodNum : null;

        if (params.PublicLB) {
            let obj = new EdgeClusterPublicLB();
            obj.deserialize(params.PublicLB)
            this.PublicLB = obj;
        }
        this.ClusterLevel = 'ClusterLevel' in params ? params.ClusterLevel : null;
        this.AutoUpgradeClusterLevel = 'AutoUpgradeClusterLevel' in params ? params.AutoUpgradeClusterLevel : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.EdgeVersion = 'EdgeVersion' in params ? params.EdgeVersion : null;
        this.RegistryPrefix = 'RegistryPrefix' in params ? params.RegistryPrefix : null;

    }
}

/**
 * CreateClusterVirtualNodePool返回参数结构体
 * @class
 */
class CreateClusterVirtualNodePoolResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点池ID
         * @type {string || null}
         */
        this.NodePoolId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodePoolId = 'NodePoolId' in params ? params.NodePoolId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateEKSCluster返回参数结构体
 * @class
 */
class CreateEKSClusterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性集群Id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateImageCache返回参数结构体
 * @class
 */
class CreateImageCacheResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像缓存Id
         * @type {string || null}
         */
        this.ImageCacheId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageCacheId = 'ImageCacheId' in params ? params.ImageCacheId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateEdgeLogConfig返回参数结构体
 * @class
 */
class CreateEdgeLogConfigResponse extends  AbstractModel {
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
 * DescribeAvailableTKEEdgeVersion返回参数结构体
 * @class
 */
class DescribeAvailableTKEEdgeVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 版本列表
         * @type {Array.<string> || null}
         */
        this.Versions = null;

        /**
         * 边缘集群最新版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EdgeVersionLatest = null;

        /**
         * 边缘集群当前版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EdgeVersionCurrent = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Versions = 'Versions' in params ? params.Versions : null;
        this.EdgeVersionLatest = 'EdgeVersionLatest' in params ? params.EdgeVersionLatest : null;
        this.EdgeVersionCurrent = 'EdgeVersionCurrent' in params ? params.EdgeVersionCurrent : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyPrometheusRecordRuleYaml请求参数结构体
 * @class
 */
class ModifyPrometheusRecordRuleYamlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 聚合实例名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 新的内容
         * @type {string || null}
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * DeletePrometheusAlertPolicy返回参数结构体
 * @class
 */
class DeletePrometheusAlertPolicyResponse extends  AbstractModel {
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
 * InstallEdgeLogAgent返回参数结构体
 * @class
 */
class InstallEdgeLogAgentResponse extends  AbstractModel {
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
 * 边缘容器集群可用的自定义参数
 * @class
 */
class EdgeAvailableExtraArgs extends  AbstractModel {
    constructor(){
        super();

        /**
         * kube-apiserver可用的自定义参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<EdgeArgsFlag> || null}
         */
        this.KubeAPIServer = null;

        /**
         * kube-controller-manager可用的自定义参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<EdgeArgsFlag> || null}
         */
        this.KubeControllerManager = null;

        /**
         * kube-scheduler可用的自定义参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<EdgeArgsFlag> || null}
         */
        this.KubeScheduler = null;

        /**
         * kubelet可用的自定义参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<EdgeArgsFlag> || null}
         */
        this.Kubelet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.KubeAPIServer) {
            this.KubeAPIServer = new Array();
            for (let z in params.KubeAPIServer) {
                let obj = new EdgeArgsFlag();
                obj.deserialize(params.KubeAPIServer[z]);
                this.KubeAPIServer.push(obj);
            }
        }

        if (params.KubeControllerManager) {
            this.KubeControllerManager = new Array();
            for (let z in params.KubeControllerManager) {
                let obj = new EdgeArgsFlag();
                obj.deserialize(params.KubeControllerManager[z]);
                this.KubeControllerManager.push(obj);
            }
        }

        if (params.KubeScheduler) {
            this.KubeScheduler = new Array();
            for (let z in params.KubeScheduler) {
                let obj = new EdgeArgsFlag();
                obj.deserialize(params.KubeScheduler[z]);
                this.KubeScheduler.push(obj);
            }
        }

        if (params.Kubelet) {
            this.Kubelet = new Array();
            for (let z in params.Kubelet) {
                let obj = new EdgeArgsFlag();
                obj.deserialize(params.Kubelet[z]);
                this.Kubelet.push(obj);
            }
        }

    }
}

/**
 * IP 地址
 * @class
 */
class IPAddress extends  AbstractModel {
    constructor(){
        super();

        /**
         * Ip 地址的类型。可为 advertise, public 等
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Ip 地址
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 网络端口
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * DescribeTKEEdgeClusterCredential请求参数结构体
 * @class
 */
class DescribeTKEEdgeClusterCredentialRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群Id
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * 自动变配集群等级
 * @class
 */
class AutoUpgradeClusterLevel extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启自动变配集群等级
         * @type {boolean || null}
         */
        this.IsAutoUpgrade = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IsAutoUpgrade = 'IsAutoUpgrade' in params ? params.IsAutoUpgrade : null;

    }
}

/**
 * CreateEKSCluster请求参数结构体
 * @class
 */
class CreateEKSClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * k8s版本号。可为1.18.4 1.20.6。
         * @type {string || null}
         */
        this.K8SVersion = null;

        /**
         * vpc 的Id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 集群名称
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 子网Id 列表
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * 集群描述信息
         * @type {string || null}
         */
        this.ClusterDesc = null;

        /**
         * Service CIDR 或 Serivce 所在子网Id
         * @type {string || null}
         */
        this.ServiceSubnetId = null;

        /**
         * 集群自定义的Dns服务器信息
         * @type {Array.<DnsServerConf> || null}
         */
        this.DnsServers = null;

        /**
         * 扩展参数。须是map[string]string 的json 格式。
         * @type {string || null}
         */
        this.ExtraParam = null;

        /**
         * 是否在用户集群内开启Dns。默认为true
         * @type {boolean || null}
         */
        this.EnableVpcCoreDNS = null;

        /**
         * 标签描述列表。通过指定该参数可以同时绑定标签到相应的资源实例，当前仅支持绑定标签到集群实例。
         * @type {Array.<TagSpecification> || null}
         */
        this.TagSpecification = null;

        /**
         * 子网信息列表
         * @type {Array.<SubnetInfos> || null}
         */
        this.SubnetInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.K8SVersion = 'K8SVersion' in params ? params.K8SVersion : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.ClusterDesc = 'ClusterDesc' in params ? params.ClusterDesc : null;
        this.ServiceSubnetId = 'ServiceSubnetId' in params ? params.ServiceSubnetId : null;

        if (params.DnsServers) {
            this.DnsServers = new Array();
            for (let z in params.DnsServers) {
                let obj = new DnsServerConf();
                obj.deserialize(params.DnsServers[z]);
                this.DnsServers.push(obj);
            }
        }
        this.ExtraParam = 'ExtraParam' in params ? params.ExtraParam : null;
        this.EnableVpcCoreDNS = 'EnableVpcCoreDNS' in params ? params.EnableVpcCoreDNS : null;

        if (params.TagSpecification) {
            this.TagSpecification = new Array();
            for (let z in params.TagSpecification) {
                let obj = new TagSpecification();
                obj.deserialize(params.TagSpecification[z]);
                this.TagSpecification.push(obj);
            }
        }

        if (params.SubnetInfos) {
            this.SubnetInfos = new Array();
            for (let z in params.SubnetInfos) {
                let obj = new SubnetInfos();
                obj.deserialize(params.SubnetInfos[z]);
                this.SubnetInfos.push(obj);
            }
        }

    }
}

/**
 * 账户UIN与客户端证书CommonName的映射
 * @class
 */
class CommonName extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子账户UIN
         * @type {string || null}
         */
        this.SubaccountUin = null;

        /**
         * 子账户客户端证书中的CommonName字段
         * @type {string || null}
         */
        this.CN = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubaccountUin = 'SubaccountUin' in params ? params.SubaccountUin : null;
        this.CN = 'CN' in params ? params.CN : null;

    }
}

/**
 * EnableEventPersistence请求参数结构体
 * @class
 */
class EnableEventPersistenceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * cls服务的logsetID
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * cls服务的topicID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * topic所在地域，默认为集群所在地域
         * @type {string || null}
         */
        this.TopicRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicRegion = 'TopicRegion' in params ? params.TopicRegion : null;

    }
}

/**
 * ModifyClusterVirtualNodePool请求参数结构体
 * @class
 */
class ModifyClusterVirtualNodePoolRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 节点池ID
         * @type {string || null}
         */
        this.NodePoolId = null;

        /**
         * 节点池名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 虚拟节点label
         * @type {Array.<Label> || null}
         */
        this.Labels = null;

        /**
         * 虚拟节点taint
         * @type {Array.<Taint> || null}
         */
        this.Taints = null;

        /**
         * 删除保护开关
         * @type {boolean || null}
         */
        this.DeletionProtection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NodePoolId = 'NodePoolId' in params ? params.NodePoolId : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new Label();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.Taints) {
            this.Taints = new Array();
            for (let z in params.Taints) {
                let obj = new Taint();
                obj.deserialize(params.Taints[z]);
                this.Taints.push(obj);
            }
        }
        this.DeletionProtection = 'DeletionProtection' in params ? params.DeletionProtection : null;

    }
}

/**
 * DescribeRegions返回参数结构体
 * @class
 */
class DescribeRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域的数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 地域列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RegionInstance> || null}
         */
        this.RegionInstanceSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.RegionInstanceSet) {
            this.RegionInstanceSet = new Array();
            for (let z in params.RegionInstanceSet) {
                let obj = new RegionInstance();
                obj.deserialize(params.RegionInstanceSet[z]);
                this.RegionInstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateClusterRoute返回参数结构体
 * @class
 */
class CreateClusterRouteResponse extends  AbstractModel {
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
 * 应用市场部署的应用结构
 * @class
 */
class Release extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 应用命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 应用当前版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Revision = null;

        /**
         * 应用状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 制品名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChartName = null;

        /**
         * 制品版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChartVersion = null;

        /**
         * 制品应用版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AppVersion = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedTime = null;

        /**
         * 应用描述
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Revision = 'Revision' in params ? params.Revision : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ChartName = 'ChartName' in params ? params.ChartName : null;
        this.ChartVersion = 'ChartVersion' in params ? params.ChartVersion : null;
        this.AppVersion = 'AppVersion' in params ? params.AppVersion : null;
        this.UpdatedTime = 'UpdatedTime' in params ? params.UpdatedTime : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeEKSContainerInstanceRegions请求参数结构体
 * @class
 */
class DescribeEKSContainerInstanceRegionsRequest extends  AbstractModel {
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
 * DescribeECMInstances请求参数结构体
 * @class
 */
class DescribeECMInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterID = null;

        /**
         * 过滤条件
仅支持ecm-id过滤
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
        this.ClusterID = 'ClusterID' in params ? params.ClusterID : null;

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
 * DrainClusterVirtualNode返回参数结构体
 * @class
 */
class DrainClusterVirtualNodeResponse extends  AbstractModel {
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
 * DescribeVpcCniPodLimits返回参数结构体
 * @class
 */
class DescribeVpcCniPodLimitsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机型数据数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 机型信息及其可支持的最大VPC-CNI模式Pod数量信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PodLimitsInstance> || null}
         */
        this.PodLimitsInstanceSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.PodLimitsInstanceSet) {
            this.PodLimitsInstanceSet = new Array();
            for (let z in params.PodLimitsInstanceSet) {
                let obj = new PodLimitsInstance();
                obj.deserialize(params.PodLimitsInstanceSet[z]);
                this.PodLimitsInstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVersions返回参数结构体
 * @class
 */
class DescribeVersionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 版本数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 版本列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VersionInstance> || null}
         */
        this.VersionInstanceSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.VersionInstanceSet) {
            this.VersionInstanceSet = new Array();
            for (let z in params.VersionInstanceSet) {
                let obj = new VersionInstance();
                obj.deserialize(params.VersionInstanceSet[z]);
                this.VersionInstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ScaleInClusterMaster请求参数结构体
 * @class
 */
class ScaleInClusterMasterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群实例ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * master缩容选项
         * @type {Array.<ScaleInMaster> || null}
         */
        this.ScaleInMasters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.ScaleInMasters) {
            this.ScaleInMasters = new Array();
            for (let z in params.ScaleInMasters) {
                let obj = new ScaleInMaster();
                obj.deserialize(params.ScaleInMasters[z]);
                this.ScaleInMasters.push(obj);
            }
        }

    }
}

/**
 * DeleteEdgeClusterInstances请求参数结构体
 * @class
 */
class DeleteEdgeClusterInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 待删除实例ID数组
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * Prometheus告警规则
 * @class
 */
class PrometheusAlertRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * prometheus语句
         * @type {string || null}
         */
        this.Rule = null;

        /**
         * 额外标签
         * @type {Array.<Label> || null}
         */
        this.Labels = null;

        /**
         * 告警发送模板
         * @type {string || null}
         */
        this.Template = null;

        /**
         * 持续时间
         * @type {string || null}
         */
        this.For = null;

        /**
         * 该条规则的描述信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Describe = null;

        /**
         * 参考prometheus rule中的annotations
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Label> || null}
         */
        this.Annotations = null;

        /**
         * 告警规则状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleState = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Rule = 'Rule' in params ? params.Rule : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new Label();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }
        this.Template = 'Template' in params ? params.Template : null;
        this.For = 'For' in params ? params.For : null;
        this.Describe = 'Describe' in params ? params.Describe : null;

        if (params.Annotations) {
            this.Annotations = new Array();
            for (let z in params.Annotations) {
                let obj = new Label();
                obj.deserialize(params.Annotations[z]);
                this.Annotations.push(obj);
            }
        }
        this.RuleState = 'RuleState' in params ? params.RuleState : null;

    }
}

/**
 * 虚拟节点
 * @class
 */
class VirtualNodeSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点展示名称
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * 子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * 集群网络相关的参数
 * @class
 */
class ClusterNetworkSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用于分配集群容器和服务 IP 的 CIDR，不得与 VPC CIDR 冲突，也不得与同 VPC 内其他集群 CIDR 冲突
         * @type {string || null}
         */
        this.ClusterCIDR = null;

        /**
         * 是否忽略 ClusterCIDR 冲突错误, 默认不忽略
         * @type {boolean || null}
         */
        this.IgnoreClusterCIDRConflict = null;

        /**
         * 集群中每个Node上最大的Pod数量(默认为256)
         * @type {number || null}
         */
        this.MaxNodePodNum = null;

        /**
         * 集群最大的service数量(默认为256)
         * @type {number || null}
         */
        this.MaxClusterServiceNum = null;

        /**
         * 是否启用IPVS(默认不开启)
         * @type {boolean || null}
         */
        this.Ipvs = null;

        /**
         * 集群的VPCID（如果创建空集群，为必传值，否则自动设置为和集群的节点保持一致）
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 网络插件是否启用CNI(默认开启)
         * @type {boolean || null}
         */
        this.Cni = null;

        /**
         * service的网络模式，当前参数只适用于ipvs+bpf模式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.KubeProxyMode = null;

        /**
         * 用于分配service的IP range，不得与 VPC CIDR 冲突，也不得与同 VPC 内其他集群 CIDR 冲突
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceCIDR = null;

        /**
         * 集群关联的容器子网
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Subnets = null;

        /**
         * 是否忽略 ServiceCIDR 冲突错误, 仅在 VPC-CNI 模式生效，默认不忽略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IgnoreServiceCIDRConflict = null;

        /**
         * 集群VPC-CNI模式是否为非双栈集群，默认false，非双栈。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsDualStack = null;

        /**
         * 用于分配service的IP range，由系统自动分配
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Ipv6ServiceCIDR = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterCIDR = 'ClusterCIDR' in params ? params.ClusterCIDR : null;
        this.IgnoreClusterCIDRConflict = 'IgnoreClusterCIDRConflict' in params ? params.IgnoreClusterCIDRConflict : null;
        this.MaxNodePodNum = 'MaxNodePodNum' in params ? params.MaxNodePodNum : null;
        this.MaxClusterServiceNum = 'MaxClusterServiceNum' in params ? params.MaxClusterServiceNum : null;
        this.Ipvs = 'Ipvs' in params ? params.Ipvs : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Cni = 'Cni' in params ? params.Cni : null;
        this.KubeProxyMode = 'KubeProxyMode' in params ? params.KubeProxyMode : null;
        this.ServiceCIDR = 'ServiceCIDR' in params ? params.ServiceCIDR : null;
        this.Subnets = 'Subnets' in params ? params.Subnets : null;
        this.IgnoreServiceCIDRConflict = 'IgnoreServiceCIDRConflict' in params ? params.IgnoreServiceCIDRConflict : null;
        this.IsDualStack = 'IsDualStack' in params ? params.IsDualStack : null;
        this.Ipv6ServiceCIDR = 'Ipv6ServiceCIDR' in params ? params.Ipv6ServiceCIDR : null;

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
         * 镜像数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 镜像信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ImageInstance> || null}
         */
        this.ImageInstanceSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ImageInstanceSet) {
            this.ImageInstanceSet = new Array();
            for (let z in params.ImageInstanceSet) {
                let obj = new ImageInstance();
                obj.deserialize(params.ImageInstanceSet[z]);
                this.ImageInstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 集群master自定义参数
 * @class
 */
class ClusterExtraArgs extends  AbstractModel {
    constructor(){
        super();

        /**
         * kube-apiserver自定义参数，参数格式为["k1=v1", "k1=v2"]， 例如["max-requests-inflight=500","feature-gates=PodShareProcessNamespace=true,DynamicKubeletConfig=true"]
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.KubeAPIServer = null;

        /**
         * kube-controller-manager自定义参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.KubeControllerManager = null;

        /**
         * kube-scheduler自定义参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.KubeScheduler = null;

        /**
         * etcd自定义参数，只支持独立集群
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Etcd = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KubeAPIServer = 'KubeAPIServer' in params ? params.KubeAPIServer : null;
        this.KubeControllerManager = 'KubeControllerManager' in params ? params.KubeControllerManager : null;
        this.KubeScheduler = 'KubeScheduler' in params ? params.KubeScheduler : null;
        this.Etcd = 'Etcd' in params ? params.Etcd : null;

    }
}

/**
 * DeleteClusterVirtualNodePool返回参数结构体
 * @class
 */
class DeleteClusterVirtualNodePoolResponse extends  AbstractModel {
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
 * CreateClusterEndpointVip返回参数结构体
 * @class
 */
class CreateClusterEndpointVipResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求任务的FlowId
         * @type {number || null}
         */
        this.RequestFlowId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestFlowId = 'RequestFlowId' in params ? params.RequestFlowId : null;
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
         * 步骤名称
         * @type {string || null}
         */
        this.Step = null;

        /**
         * 生命周期
pending : 步骤未开始
running: 步骤执行中
success: 步骤成功完成
failed: 步骤失败
         * @type {string || null}
         */
        this.LifeState = null;

        /**
         * 步骤开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartAt = null;

        /**
         * 步骤结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndAt = null;

        /**
         * 若步骤生命周期为failed,则此字段显示错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FailedMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Step = 'Step' in params ? params.Step : null;
        this.LifeState = 'LifeState' in params ? params.LifeState : null;
        this.StartAt = 'StartAt' in params ? params.StartAt : null;
        this.EndAt = 'EndAt' in params ? params.EndAt : null;
        this.FailedMsg = 'FailedMsg' in params ? params.FailedMsg : null;

    }
}

/**
 * ECM实例可用区及对应的实例创建数目及运营商的组合
 * @class
 */
class ECMZoneInstanceCountISP extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建实例的可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 在当前可用区欲创建的实例数目
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * 运营商
         * @type {string || null}
         */
        this.ISP = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.ISP = 'ISP' in params ? params.ISP : null;

    }
}

/**
 * DescribeRouteTableConflicts请求参数结构体
 * @class
 */
class DescribeRouteTableConflictsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表CIDR
         * @type {string || null}
         */
        this.RouteTableCidrBlock = null;

        /**
         * 路由表绑定的VPC
         * @type {string || null}
         */
        this.VpcId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableCidrBlock = 'RouteTableCidrBlock' in params ? params.RouteTableCidrBlock : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

    }
}

/**
 * DeleteClusterEndpointVip返回参数结构体
 * @class
 */
class DeleteClusterEndpointVipResponse extends  AbstractModel {
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
 * 描述集群的基本配置信息
 * @class
 */
class ClusterBasicSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群操作系统，支持设置公共镜像(字段传相应镜像Name)和自定义镜像(字段传相应镜像ID)，详情参考：https://cloud.tencent.com/document/product/457/68289
         * @type {string || null}
         */
        this.ClusterOs = null;

        /**
         * 集群版本,默认值为1.10.5
         * @type {string || null}
         */
        this.ClusterVersion = null;

        /**
         * 集群名称
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 集群描述
         * @type {string || null}
         */
        this.ClusterDescription = null;

        /**
         * 私有网络ID，形如vpc-xxx。创建托管空集群时必传。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 集群内新增资源所属项目ID。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 标签描述列表。通过指定该参数可以同时绑定标签到相应的资源实例，当前仅支持绑定标签到集群实例。
         * @type {Array.<TagSpecification> || null}
         */
        this.TagSpecification = null;

        /**
         * 容器的镜像版本，"DOCKER_CUSTOMIZE"(容器定制版),"GENERAL"(普通版本，默认值)
         * @type {string || null}
         */
        this.OsCustomizeType = null;

        /**
         * 是否开启节点的默认安全组(默认: 否，Alpha特性)
         * @type {boolean || null}
         */
        this.NeedWorkSecurityGroup = null;

        /**
         * 当选择Cilium Overlay网络插件时，TKE会从该子网获取2个IP用来创建内网负载均衡
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 集群等级，针对托管集群生效
         * @type {string || null}
         */
        this.ClusterLevel = null;

        /**
         * 自动变配集群等级，针对托管集群生效
         * @type {AutoUpgradeClusterLevel || null}
         */
        this.AutoUpgradeClusterLevel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterOs = 'ClusterOs' in params ? params.ClusterOs : null;
        this.ClusterVersion = 'ClusterVersion' in params ? params.ClusterVersion : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.ClusterDescription = 'ClusterDescription' in params ? params.ClusterDescription : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.TagSpecification) {
            this.TagSpecification = new Array();
            for (let z in params.TagSpecification) {
                let obj = new TagSpecification();
                obj.deserialize(params.TagSpecification[z]);
                this.TagSpecification.push(obj);
            }
        }
        this.OsCustomizeType = 'OsCustomizeType' in params ? params.OsCustomizeType : null;
        this.NeedWorkSecurityGroup = 'NeedWorkSecurityGroup' in params ? params.NeedWorkSecurityGroup : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ClusterLevel = 'ClusterLevel' in params ? params.ClusterLevel : null;

        if (params.AutoUpgradeClusterLevel) {
            let obj = new AutoUpgradeClusterLevel();
            obj.deserialize(params.AutoUpgradeClusterLevel)
            this.AutoUpgradeClusterLevel = obj;
        }

    }
}

/**
 * 模板实例
 * @class
 */
class PrometheusTemp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 模板维度，支持以下类型
instance 实例级别
cluster 集群级别
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 模板描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Describe = null;

        /**
         * 当Level为instance时有效，
模板中的聚合规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.RecordRules = null;

        /**
         * 当Level为cluster时有效，
模板中的ServiceMonitor规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.ServiceMonitors = null;

        /**
         * 当Level为cluster时有效，
模板中的PodMonitors规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.PodMonitors = null;

        /**
         * 当Level为cluster时有效，
模板中的RawJobs规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.RawJobs = null;

        /**
         * 模板的ID, 用于出参
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 最近更新时间，用于出参
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 当前版本，用于出参
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 是否系统提供的默认模板，用于出参
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsDefault = null;

        /**
         * 当Level为instance时有效，
模板中的告警配置列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusAlertPolicyItem> || null}
         */
        this.AlertDetailRules = null;

        /**
         * 关联实例数目
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TargetsTotal = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Describe = 'Describe' in params ? params.Describe : null;

        if (params.RecordRules) {
            this.RecordRules = new Array();
            for (let z in params.RecordRules) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.RecordRules[z]);
                this.RecordRules.push(obj);
            }
        }

        if (params.ServiceMonitors) {
            this.ServiceMonitors = new Array();
            for (let z in params.ServiceMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.ServiceMonitors[z]);
                this.ServiceMonitors.push(obj);
            }
        }

        if (params.PodMonitors) {
            this.PodMonitors = new Array();
            for (let z in params.PodMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.PodMonitors[z]);
                this.PodMonitors.push(obj);
            }
        }

        if (params.RawJobs) {
            this.RawJobs = new Array();
            for (let z in params.RawJobs) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.RawJobs[z]);
                this.RawJobs.push(obj);
            }
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;

        if (params.AlertDetailRules) {
            this.AlertDetailRules = new Array();
            for (let z in params.AlertDetailRules) {
                let obj = new PrometheusAlertPolicyItem();
                obj.deserialize(params.AlertDetailRules[z]);
                this.AlertDetailRules.push(obj);
            }
        }
        this.TargetsTotal = 'TargetsTotal' in params ? params.TargetsTotal : null;

    }
}

/**
 * CVM实例数据盘挂载配置
 * @class
 */
class InstanceDataDiskMountSetting extends  AbstractModel {
    constructor(){
        super();

        /**
         * CVM实例类型
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 数据盘挂载信息
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * CVM实例所属可用区
         * @type {string || null}
         */
        this.Zone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

        if (params.DataDisks) {
            this.DataDisks = new Array();
            for (let z in params.DataDisks) {
                let obj = new DataDisk();
                obj.deserialize(params.DataDisks[z]);
                this.DataDisks.push(obj);
            }
        }
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * ModifyClusterAsGroupAttribute返回参数结构体
 * @class
 */
class ModifyClusterAsGroupAttributeResponse extends  AbstractModel {
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
 * DeletePrometheusTemp请求参数结构体
 * @class
 */
class DeletePrometheusTempRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板id
         * @type {string || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DescribeTKEEdgeScript返回参数结构体
 * @class
 */
class DescribeTKEEdgeScriptResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 下载链接
         * @type {string || null}
         */
        this.Link = null;

        /**
         * 下载需要的token
         * @type {string || null}
         */
        this.Token = null;

        /**
         * 下载命令
         * @type {string || null}
         */
        this.Command = null;

        /**
         * edgectl脚本版本，默认拉取最新版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ScriptVersion = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Link = 'Link' in params ? params.Link : null;
        this.Token = 'Token' in params ? params.Token : null;
        this.Command = 'Command' in params ? params.Command : null;
        this.ScriptVersion = 'ScriptVersion' in params ? params.ScriptVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeClusterRouteTables返回参数结构体
 * @class
 */
class DescribeClusterRouteTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的实例数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 集群路由表对象。
         * @type {Array.<RouteTableInfo> || null}
         */
        this.RouteTableSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.RouteTableSet) {
            this.RouteTableSet = new Array();
            for (let z in params.RouteTableSet) {
                let obj = new RouteTableInfo();
                obj.deserialize(params.RouteTableSet[z]);
                this.RouteTableSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeClusterKubeconfig请求参数结构体
 * @class
 */
class DescribeClusterKubeconfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 默认false 获取内网，是否获取外网访问的kubeconfig
         * @type {boolean || null}
         */
        this.IsExtranet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.IsExtranet = 'IsExtranet' in params ? params.IsExtranet : null;

    }
}

/**
 * DeletePrometheusTempSync请求参数结构体
 * @class
 */
class DeletePrometheusTempSyncRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板id
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 取消同步的对象列表
         * @type {Array.<PrometheusTemplateSyncTarget> || null}
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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new PrometheusTemplateSyncTarget();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }

    }
}

/**
 * CreatePrometheusTemplate返回参数结构体
 * @class
 */
class CreatePrometheusTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板Id
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateClusterEndpointVip请求参数结构体
 * @class
 */
class CreateClusterEndpointVipRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 安全策略放通单个IP或CIDR(例如: "192.168.1.0/24",默认为拒绝所有)
         * @type {Array.<string> || null}
         */
        this.SecurityPolicies = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.SecurityPolicies = 'SecurityPolicies' in params ? params.SecurityPolicies : null;

    }
}

/**
 * 弹性容器集群内网访问LB信息
 * @class
 */
class ClusterInternalLB extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启内网访问LB
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * 内网访问LB关联的子网Id
         * @type {string || null}
         */
        this.SubnetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * DescribePrometheusGlobalConfig请求参数结构体
 * @class
 */
class DescribePrometheusGlobalConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例级别抓取配置
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 是否禁用统计
         * @type {boolean || null}
         */
        this.DisableStatistics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DisableStatistics = 'DisableStatistics' in params ? params.DisableStatistics : null;

    }
}

/**
 * CreateECMInstances返回参数结构体
 * @class
 */
class CreateECMInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ecm id 列表
         * @type {Array.<string> || null}
         */
        this.EcmIdSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmIdSet = 'EcmIdSet' in params ? params.EcmIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyPrometheusGlobalNotification请求参数结构体
 * @class
 */
class ModifyPrometheusGlobalNotificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 告警通知渠道
         * @type {PrometheusNotificationItem || null}
         */
        this.Notification = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Notification) {
            let obj = new PrometheusNotificationItem();
            obj.deserialize(params.Notification)
            this.Notification = obj;
        }

    }
}

/**
 * 不可用原因
 * @class
 */
class UnavailableReason extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 原因
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Reason = 'Reason' in params ? params.Reason : null;

    }
}

/**
 * GetUpgradeInstanceProgress请求参数结构体
 * @class
 */
class GetUpgradeInstanceProgressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 最多获取多少个节点的进度
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 从第几个节点开始获取进度
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * UpdateEKSCluster返回参数结构体
 * @class
 */
class UpdateEKSClusterResponse extends  AbstractModel {
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
 * DescribeEdgeCVMInstances返回参数结构体
 * @class
 */
class DescribeEdgeCVMInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的实例相关信息列表的长度
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 返回的实例相关信息列表
         * @type {Array.<string> || null}
         */
        this.InstanceInfoSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.InstanceInfoSet = 'InstanceInfoSet' in params ? params.InstanceInfoSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 服务事件
 * @class
 */
class Event extends  AbstractModel {
    constructor(){
        super();

        /**
         * pod名称
         * @type {string || null}
         */
        this.PodName = null;

        /**
         * 事件原因内容
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * 事件类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 事件出现次数
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 事件第一次出现时间
         * @type {string || null}
         */
        this.FirstTimestamp = null;

        /**
         * 事件最后一次出现时间
         * @type {string || null}
         */
        this.LastTimestamp = null;

        /**
         * 事件内容
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
        this.PodName = 'PodName' in params ? params.PodName : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.FirstTimestamp = 'FirstTimestamp' in params ? params.FirstTimestamp : null;
        this.LastTimestamp = 'LastTimestamp' in params ? params.LastTimestamp : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * ModifyNodePoolDesiredCapacityAboutAsg请求参数结构体
 * @class
 */
class ModifyNodePoolDesiredCapacityAboutAsgRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 节点池id
         * @type {string || null}
         */
        this.NodePoolId = null;

        /**
         * 节点池所关联的伸缩组的期望实例数
         * @type {number || null}
         */
        this.DesiredCapacity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NodePoolId = 'NodePoolId' in params ? params.NodePoolId : null;
        this.DesiredCapacity = 'DesiredCapacity' in params ? params.DesiredCapacity : null;

    }
}

/**
 * DeleteClusterRoute返回参数结构体
 * @class
 */
class DeleteClusterRouteResponse extends  AbstractModel {
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
 * DeletePrometheusConfig请求参数结构体
 * @class
 */
class DeletePrometheusConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 集群类型
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 要删除的ServiceMonitor名字列表
         * @type {Array.<string> || null}
         */
        this.ServiceMonitors = null;

        /**
         * 要删除的PodMonitor名字列表
         * @type {Array.<string> || null}
         */
        this.PodMonitors = null;

        /**
         * 要删除的RawJobs名字列表
         * @type {Array.<string> || null}
         */
        this.RawJobs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ServiceMonitors = 'ServiceMonitors' in params ? params.ServiceMonitors : null;
        this.PodMonitors = 'PodMonitors' in params ? params.PodMonitors : null;
        this.RawJobs = 'RawJobs' in params ? params.RawJobs : null;

    }
}

/**
 * DescribeEdgeClusterUpgradeInfo返回参数结构体
 * @class
 */
class DescribeEdgeClusterUpgradeInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可升级的集群组件和
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ComponentVersion = null;

        /**
         * 边缘集群当前版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EdgeVersionCurrent = null;

        /**
         * 边缘组件镜像仓库地址前缀，包含域名和命名空间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegistryPrefix = null;

        /**
         * 集群升级状态，可能值：running、updating、failed
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterUpgradeStatus = null;

        /**
         * 集群升级中状态或者失败原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterUpgradeStatusReason = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ComponentVersion = 'ComponentVersion' in params ? params.ComponentVersion : null;
        this.EdgeVersionCurrent = 'EdgeVersionCurrent' in params ? params.EdgeVersionCurrent : null;
        this.RegistryPrefix = 'RegistryPrefix' in params ? params.RegistryPrefix : null;
        this.ClusterUpgradeStatus = 'ClusterUpgradeStatus' in params ? params.ClusterUpgradeStatus : null;
        this.ClusterUpgradeStatusReason = 'ClusterUpgradeStatusReason' in params ? params.ClusterUpgradeStatusReason : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyClusterNodePool返回参数结构体
 * @class
 */
class ModifyClusterNodePoolResponse extends  AbstractModel {
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
 * 托管prometheus告警策略实例
 * @class
 */
class PrometheusAlertPolicyItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 规则列表
         * @type {Array.<PrometheusAlertRule> || null}
         */
        this.Rules = null;

        /**
         * 告警策略 id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 如果该告警来自模板下发，则TemplateId为模板id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 告警渠道，模板中使用可能返回null
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PrometheusNotificationItem || null}
         */
        this.Notification = null;

        /**
         * 最后修改时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * 如果告警策略来源于用户集群CRD资源定义，则ClusterId为所属集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new PrometheusAlertRule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

        if (params.Notification) {
            let obj = new PrometheusNotificationItem();
            obj.deserialize(params.Notification)
            this.Notification = obj;
        }
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * ModifyPrometheusAgentExternalLabels请求参数结构体
 * @class
 */
class ModifyPrometheusAgentExternalLabelsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 新的external_labels
         * @type {Array.<Label> || null}
         */
        this.ExternalLabels = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.ExternalLabels) {
            this.ExternalLabels = new Array();
            for (let z in params.ExternalLabels) {
                let obj = new Label();
                obj.deserialize(params.ExternalLabels[z]);
                this.ExternalLabels.push(obj);
            }
        }

    }
}

/**
 * 边缘容器集群高级配置
 * @class
 */
class EdgeClusterAdvancedSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群自定义参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EdgeClusterExtraArgs || null}
         */
        this.ExtraArgs = null;

        /**
         * 运行时类型，支持"docker"和"containerd"，默认为docker
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Runtime = null;

        /**
         * 集群kube-proxy转发模式，支持"iptables"和"ipvs"，默认为iptables
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProxyMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ExtraArgs) {
            let obj = new EdgeClusterExtraArgs();
            obj.deserialize(params.ExtraArgs)
            this.ExtraArgs = obj;
        }
        this.Runtime = 'Runtime' in params ? params.Runtime : null;
        this.ProxyMode = 'ProxyMode' in params ? params.ProxyMode : null;

    }
}

/**
 * prometheus一个抓取目标的信息
 * @class
 */
class PrometheusTarget extends  AbstractModel {
    constructor(){
        super();

        /**
         * 抓取目标的URL
         * @type {string || null}
         */
        this.Url = null;

        /**
         * target当前状态,当前支持
up = 健康
down = 不健康
unknown = 未知
         * @type {string || null}
         */
        this.State = null;

        /**
         * target的元label
         * @type {Array.<Label> || null}
         */
        this.Labels = null;

        /**
         * 上一次抓取的时间
         * @type {string || null}
         */
        this.LastScrape = null;

        /**
         * 上一次抓取的耗时，单位是s
         * @type {number || null}
         */
        this.ScrapeDuration = null;

        /**
         * 上一次抓取如果错误，该字段存储错误信息
         * @type {string || null}
         */
        this.Error = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.State = 'State' in params ? params.State : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new Label();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }
        this.LastScrape = 'LastScrape' in params ? params.LastScrape : null;
        this.ScrapeDuration = 'ScrapeDuration' in params ? params.ScrapeDuration : null;
        this.Error = 'Error' in params ? params.Error : null;

    }
}

/**
 * 描述了实例登录相关配置与信息。
 * @class
 */
class LoginSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：<br><li>Linux实例密码必须8到30位，至少包括两项[a-z]，[A-Z]、[0-9] 和 [( ) \` ~ ! @ # $ % ^ & *  - + = | { } [ ] : ; ' , . ? / ]中的特殊符号。<br><li>Windows实例密码必须12到30位，至少包括三项[a-z]，[A-Z]，[0-9] 和 [( ) \` ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ' , . ? /]中的特殊符号。<br><br>若不指定该参数，则由系统随机生成密码，并通过站内信方式通知到用户。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 密钥ID列表。关联密钥后，就可以通过对应的私钥来访问实例；KeyId可通过接口[DescribeKeyPairs](https://cloud.tencent.com/document/api/213/15699)获取，密钥与密码不能同时指定，同时Windows操作系统不支持指定密钥。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

        /**
         * 保持镜像的原始设置。该参数与Password或KeyIds.N不能同时指定。只有使用自定义镜像、共享镜像或外部导入镜像创建实例时才能指定该参数为TRUE。取值范围：<br><li>TRUE：表示保持镜像的登录设置<br><li>FALSE：表示不保持镜像的登录设置<br><br>默认取值：FALSE。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.KeepImageLogin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Password = 'Password' in params ? params.Password : null;
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;
        this.KeepImageLogin = 'KeepImageLogin' in params ? params.KeepImageLogin : null;

    }
}

/**
 * DescribePrometheusTemp返回参数结构体
 * @class
 */
class DescribePrometheusTempResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板列表
         * @type {Array.<PrometheusTemp> || null}
         */
        this.Templates = null;

        /**
         * 总数
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

        if (params.Templates) {
            this.Templates = new Array();
            for (let z in params.Templates) {
                let obj = new PrometheusTemp();
                obj.deserialize(params.Templates[z]);
                this.Templates.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SyncPrometheusTemplate请求参数结构体
 * @class
 */
class SyncPrometheusTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 同步目标
         * @type {Array.<PrometheusTemplateSyncTarget> || null}
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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new PrometheusTemplateSyncTarget();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }

    }
}

/**
 * DescribeClusterEndpointStatus请求参数结构体
 * @class
 */
class DescribeClusterEndpointStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 是否为外网访问（TRUE 外网访问 FALSE 内网访问，默认值： FALSE）
         * @type {boolean || null}
         */
        this.IsExtranet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.IsExtranet = 'IsExtranet' in params ? params.IsExtranet : null;

    }
}

/**
 * DescribeClusterStatus返回参数结构体
 * @class
 */
class DescribeClusterStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群状态列表
         * @type {Array.<ClusterStatus> || null}
         */
        this.ClusterStatusSet = null;

        /**
         * 集群个数
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

        if (params.ClusterStatusSet) {
            this.ClusterStatusSet = new Array();
            for (let z in params.ClusterStatusSet) {
                let obj = new ClusterStatus();
                obj.deserialize(params.ClusterStatusSet[z]);
                this.ClusterStatusSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 从镜像仓库拉取镜像的凭据
 * @class
 */
class ImageRegistryCredential extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像仓库地址
         * @type {string || null}
         */
        this.Server = null;

        /**
         * 用户名
         * @type {string || null}
         */
        this.Username = null;

        /**
         * 密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * ImageRegistryCredential的名字
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
        this.Server = 'Server' in params ? params.Server : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DescribeRouteTableConflicts返回参数结构体
 * @class
 */
class DescribeRouteTableConflictsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表是否冲突。
         * @type {boolean || null}
         */
        this.HasConflict = null;

        /**
         * 路由表冲突列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RouteTableConflict> || null}
         */
        this.RouteTableConflictSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HasConflict = 'HasConflict' in params ? params.HasConflict : null;

        if (params.RouteTableConflictSet) {
            this.RouteTableConflictSet = new Array();
            for (let z in params.RouteTableConflictSet) {
                let obj = new RouteTableConflict();
                obj.deserialize(params.RouteTableConflictSet[z]);
                this.RouteTableConflictSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVersions请求参数结构体
 * @class
 */
class DescribeVersionsRequest extends  AbstractModel {
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
 * DescribePrometheusTemp请求参数结构体
 * @class
 */
class DescribePrometheusTempRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模糊过滤条件，支持
Level 按模板级别过滤
Name 按名称过滤
Describe 按描述过滤
ID 按templateId过滤
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 分页偏移
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 总数限制
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DeleteClusterRouteTable请求参数结构体
 * @class
 */
class DeleteClusterRouteTableRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表名称
         * @type {string || null}
         */
        this.RouteTableName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;

    }
}

/**
 * DescribeClusterEndpoints请求参数结构体
 * @class
 */
class DescribeClusterEndpointsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * 节点自定义参数
 * @class
 */
class InstanceExtraArgs extends  AbstractModel {
    constructor(){
        super();

        /**
         * kubelet自定义参数，参数格式为["k1=v1", "k1=v2"]， 例如["root-dir=/var/lib/kubelet","feature-gates=PodShareProcessNamespace=true,DynamicKubeletConfig=true"]
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Kubelet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Kubelet = 'Kubelet' in params ? params.Kubelet : null;

    }
}

/**
 * AcquireClusterAdminRole请求参数结构体
 * @class
 */
class AcquireClusterAdminRoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DeletePrometheusTemplate返回参数结构体
 * @class
 */
class DeletePrometheusTemplateResponse extends  AbstractModel {
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
 * DescribeECMInstances返回参数结构体
 * @class
 */
class DescribeECMInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的实例相关信息列表的长度
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 返回的实例相关信息列表
         * @type {Array.<string> || null}
         */
        this.InstanceInfoSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.InstanceInfoSet = 'InstanceInfoSet' in params ? params.InstanceInfoSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePrometheusInstance请求参数结构体
 * @class
 */
class DescribePrometheusInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DeletePrometheusAlertRule请求参数结构体
 * @class
 */
class DeletePrometheusAlertRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 告警规则id列表
         * @type {Array.<string> || null}
         */
        this.AlertIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AlertIds = 'AlertIds' in params ? params.AlertIds : null;

    }
}

/**
 * CreateClusterRelease返回参数结构体
 * @class
 */
class CreateClusterReleaseResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PendingRelease || null}
         */
        this.Release = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Release) {
            let obj = new PendingRelease();
            obj.deserialize(params.Release)
            this.Release = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 边缘容器集群master自定义参数
 * @class
 */
class EdgeClusterExtraArgs extends  AbstractModel {
    constructor(){
        super();

        /**
         * kube-apiserver自定义参数，参数格式为["k1=v1", "k1=v2"]， 例如["max-requests-inflight=500","feature-gates=PodShareProcessNamespace=true,DynamicKubeletConfig=true"]
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.KubeAPIServer = null;

        /**
         * kube-controller-manager自定义参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.KubeControllerManager = null;

        /**
         * kube-scheduler自定义参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.KubeScheduler = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KubeAPIServer = 'KubeAPIServer' in params ? params.KubeAPIServer : null;
        this.KubeControllerManager = 'KubeControllerManager' in params ? params.KubeControllerManager : null;
        this.KubeScheduler = 'KubeScheduler' in params ? params.KubeScheduler : null;

    }
}

/**
 * DescribePrometheusTargets返回参数结构体
 * @class
 */
class DescribePrometheusTargetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 所有Job的targets信息
         * @type {Array.<PrometheusJobTargets> || null}
         */
        this.Jobs = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Jobs) {
            this.Jobs = new Array();
            for (let z in params.Jobs) {
                let obj = new PrometheusJobTargets();
                obj.deserialize(params.Jobs[z]);
                this.Jobs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEnableVpcCniProgress返回参数结构体
 * @class
 */
class DescribeEnableVpcCniProgressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务进度的描述：Running/Succeed/Failed
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 当任务进度为Failed时，对任务状态的进一步描述，例如IPAMD组件安装失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorMessage = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 托管prometheus agent概览
 * @class
 */
class PrometheusAgentOverview extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群类型
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * agent状态
normal = 正常
abnormal = 异常
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 集群名称
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 额外labels
本集群的所有指标都会带上这几个label
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Label> || null}
         */
        this.ExternalLabels = null;

        /**
         * 集群所在地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 集群所在VPC ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 记录关联等操作的失败信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FailedReason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;

        if (params.ExternalLabels) {
            this.ExternalLabels = new Array();
            for (let z in params.ExternalLabels) {
                let obj = new Label();
                obj.deserialize(params.ExternalLabels[z]);
                this.ExternalLabels.push(obj);
            }
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.FailedReason = 'FailedReason' in params ? params.FailedReason : null;

    }
}

/**
 * app所支持的chart
 * @class
 */
class AppChart extends  AbstractModel {
    constructor(){
        super();

        /**
         * chart名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * chart的标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * chart的版本
         * @type {string || null}
         */
        this.LatestVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.LatestVersion = 'LatestVersion' in params ? params.LatestVersion : null;

    }
}

/**
 * DeleteEdgeCVMInstances请求参数结构体
 * @class
 */
class DeleteEdgeCVMInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterID = null;

        /**
         * cvm id集合
         * @type {Array.<string> || null}
         */
        this.CvmIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterID = 'ClusterID' in params ? params.ClusterID : null;
        this.CvmIdSet = 'CvmIdSet' in params ? params.CvmIdSet : null;

    }
}

/**
 * ModifyClusterNodePool请求参数结构体
 * @class
 */
class ModifyClusterNodePoolRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 节点池ID
         * @type {string || null}
         */
        this.NodePoolId = null;

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 最大节点数
         * @type {number || null}
         */
        this.MaxNodesNum = null;

        /**
         * 最小节点数
         * @type {number || null}
         */
        this.MinNodesNum = null;

        /**
         * 标签
         * @type {Array.<Label> || null}
         */
        this.Labels = null;

        /**
         * 污点
         * @type {Array.<Taint> || null}
         */
        this.Taints = null;

        /**
         * 是否开启伸缩
         * @type {boolean || null}
         */
        this.EnableAutoscale = null;

        /**
         * 操作系统名称
         * @type {string || null}
         */
        this.OsName = null;

        /**
         * 镜像版本，"DOCKER_CUSTOMIZE"(容器定制版),"GENERAL"(普通版本，默认值)
         * @type {string || null}
         */
        this.OsCustomizeType = null;

        /**
         * GPU驱动版本，CUDA版本，cuDNN版本以及是否启用MIG特性
         * @type {GPUArgs || null}
         */
        this.GPUArgs = null;

        /**
         * base64编码后的自定义脚本
         * @type {string || null}
         */
        this.UserScript = null;

        /**
         * 更新label和taint时忽略存量节点
         * @type {boolean || null}
         */
        this.IgnoreExistedNode = null;

        /**
         * 节点自定义参数
         * @type {InstanceExtraArgs || null}
         */
        this.ExtraArgs = null;

        /**
         * 资源标签
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 设置加入的节点是否参与调度，默认值为0，表示参与调度；非0表示不参与调度, 待节点初始化完成之后, 可执行kubectl uncordon nodename使node加入调度.
         * @type {number || null}
         */
        this.Unschedulable = null;

        /**
         * 删除保护开关
         * @type {boolean || null}
         */
        this.DeletionProtection = null;

        /**
         * dockerd --graph 指定值, 默认为 /var/lib/docker
         * @type {string || null}
         */
        this.DockerGraphPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NodePoolId = 'NodePoolId' in params ? params.NodePoolId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.MaxNodesNum = 'MaxNodesNum' in params ? params.MaxNodesNum : null;
        this.MinNodesNum = 'MinNodesNum' in params ? params.MinNodesNum : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new Label();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

        if (params.Taints) {
            this.Taints = new Array();
            for (let z in params.Taints) {
                let obj = new Taint();
                obj.deserialize(params.Taints[z]);
                this.Taints.push(obj);
            }
        }
        this.EnableAutoscale = 'EnableAutoscale' in params ? params.EnableAutoscale : null;
        this.OsName = 'OsName' in params ? params.OsName : null;
        this.OsCustomizeType = 'OsCustomizeType' in params ? params.OsCustomizeType : null;

        if (params.GPUArgs) {
            let obj = new GPUArgs();
            obj.deserialize(params.GPUArgs)
            this.GPUArgs = obj;
        }
        this.UserScript = 'UserScript' in params ? params.UserScript : null;
        this.IgnoreExistedNode = 'IgnoreExistedNode' in params ? params.IgnoreExistedNode : null;

        if (params.ExtraArgs) {
            let obj = new InstanceExtraArgs();
            obj.deserialize(params.ExtraArgs)
            this.ExtraArgs = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Unschedulable = 'Unschedulable' in params ? params.Unschedulable : null;
        this.DeletionProtection = 'DeletionProtection' in params ? params.DeletionProtection : null;
        this.DockerGraphPath = 'DockerGraphPath' in params ? params.DockerGraphPath : null;

    }
}

/**
 * InstallLogAgent返回参数结构体
 * @class
 */
class InstallLogAgentResponse extends  AbstractModel {
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
 * GetClusterLevelPrice请求参数结构体
 * @class
 */
class GetClusterLevelPriceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群规格，托管集群询价
         * @type {string || null}
         */
        this.ClusterLevel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterLevel = 'ClusterLevel' in params ? params.ClusterLevel : null;

    }
}

/**
 * CreateClusterEndpoint返回参数结构体
 * @class
 */
class CreateClusterEndpointResponse extends  AbstractModel {
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
 * 集群高级配置
 * @class
 */
class ClusterAdvancedSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否启用IPVS
         * @type {boolean || null}
         */
        this.IPVS = null;

        /**
         * 是否启用集群节点自动扩缩容(创建集群流程不支持开启此功能)
         * @type {boolean || null}
         */
        this.AsEnabled = null;

        /**
         * 集群使用的runtime类型，包括"docker"和"containerd"两种类型，默认为"docker"
         * @type {string || null}
         */
        this.ContainerRuntime = null;

        /**
         * 集群中节点NodeName类型（包括 hostname,lan-ip两种形式，默认为lan-ip。如果开启了hostname模式，创建节点时需要设置HostName参数，并且InstanceName需要和HostName一致）
         * @type {string || null}
         */
        this.NodeNameType = null;

        /**
         * 集群自定义参数
         * @type {ClusterExtraArgs || null}
         */
        this.ExtraArgs = null;

        /**
         * 集群网络类型（包括GR(全局路由)和VPC-CNI两种模式，默认为GR。
         * @type {string || null}
         */
        this.NetworkType = null;

        /**
         * 集群VPC-CNI模式是否为非固定IP，默认: FALSE 固定IP。
         * @type {boolean || null}
         */
        this.IsNonStaticIpMode = null;

        /**
         * 是否启用集群删除保护
         * @type {boolean || null}
         */
        this.DeletionProtection = null;

        /**
         * 集群的网络代理模型，目前tke集群支持的网络代理模式有三种：iptables,ipvs,ipvs-bpf，此参数仅在使用ipvs-bpf模式时使用，三种网络模式的参数设置关系如下：
iptables模式：IPVS和KubeProxyMode都不设置
ipvs模式: 设置IPVS为true, KubeProxyMode不设置
ipvs-bpf模式: 设置KubeProxyMode为kube-proxy-bpf
使用ipvs-bpf的网络模式需要满足以下条件：
1. 集群版本必须为1.14及以上；
2. 系统镜像必须是: Tencent Linux 2.4；
         * @type {string || null}
         */
        this.KubeProxyMode = null;

        /**
         * 是否开启审计开关
         * @type {boolean || null}
         */
        this.AuditEnabled = null;

        /**
         * 审计日志上传到的logset日志集
         * @type {string || null}
         */
        this.AuditLogsetId = null;

        /**
         * 审计日志上传到的topic
         * @type {string || null}
         */
        this.AuditLogTopicId = null;

        /**
         * 区分共享网卡多IP模式和独立网卡模式，共享网卡多 IP 模式填写"tke-route-eni"，独立网卡模式填写"tke-direct-eni"，默认为共享网卡模式
         * @type {string || null}
         */
        this.VpcCniType = null;

        /**
         * 运行时版本
         * @type {string || null}
         */
        this.RuntimeVersion = null;

        /**
         * 是否开节点podCIDR大小的自定义模式
         * @type {boolean || null}
         */
        this.EnableCustomizedPodCIDR = null;

        /**
         * 自定义模式下的基础pod数量
         * @type {number || null}
         */
        this.BasePodNumber = null;

        /**
         * 启用 CiliumMode 的模式，空值表示不启用，“clusterIP” 表示启用 Cilium 支持 ClusterIP
         * @type {string || null}
         */
        this.CiliumMode = null;

        /**
         * 集群VPC-CNI模式下是否是双栈集群，默认false，表明非双栈集群。
         * @type {boolean || null}
         */
        this.IsDualStack = null;

        /**
         * 是否开启QGPU共享
         * @type {boolean || null}
         */
        this.QGPUShareEnable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IPVS = 'IPVS' in params ? params.IPVS : null;
        this.AsEnabled = 'AsEnabled' in params ? params.AsEnabled : null;
        this.ContainerRuntime = 'ContainerRuntime' in params ? params.ContainerRuntime : null;
        this.NodeNameType = 'NodeNameType' in params ? params.NodeNameType : null;

        if (params.ExtraArgs) {
            let obj = new ClusterExtraArgs();
            obj.deserialize(params.ExtraArgs)
            this.ExtraArgs = obj;
        }
        this.NetworkType = 'NetworkType' in params ? params.NetworkType : null;
        this.IsNonStaticIpMode = 'IsNonStaticIpMode' in params ? params.IsNonStaticIpMode : null;
        this.DeletionProtection = 'DeletionProtection' in params ? params.DeletionProtection : null;
        this.KubeProxyMode = 'KubeProxyMode' in params ? params.KubeProxyMode : null;
        this.AuditEnabled = 'AuditEnabled' in params ? params.AuditEnabled : null;
        this.AuditLogsetId = 'AuditLogsetId' in params ? params.AuditLogsetId : null;
        this.AuditLogTopicId = 'AuditLogTopicId' in params ? params.AuditLogTopicId : null;
        this.VpcCniType = 'VpcCniType' in params ? params.VpcCniType : null;
        this.RuntimeVersion = 'RuntimeVersion' in params ? params.RuntimeVersion : null;
        this.EnableCustomizedPodCIDR = 'EnableCustomizedPodCIDR' in params ? params.EnableCustomizedPodCIDR : null;
        this.BasePodNumber = 'BasePodNumber' in params ? params.BasePodNumber : null;
        this.CiliumMode = 'CiliumMode' in params ? params.CiliumMode : null;
        this.IsDualStack = 'IsDualStack' in params ? params.IsDualStack : null;
        this.QGPUShareEnable = 'QGPUShareEnable' in params ? params.QGPUShareEnable : null;

    }
}

/**
 * ForwardApplicationRequestV3返回参数结构体
 * @class
 */
class ForwardApplicationRequestV3Response extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求集群addon后返回的数据
         * @type {string || null}
         */
        this.ResponseBody = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResponseBody = 'ResponseBody' in params ? params.ResponseBody : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyClusterAuthenticationOptions请求参数结构体
 * @class
 */
class ModifyClusterAuthenticationOptionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * ServiceAccount认证配置
         * @type {ServiceAccountAuthenticationOptions || null}
         */
        this.ServiceAccounts = null;

        /**
         * OIDC认证配置
         * @type {OIDCConfigAuthenticationOptions || null}
         */
        this.OIDCConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.ServiceAccounts) {
            let obj = new ServiceAccountAuthenticationOptions();
            obj.deserialize(params.ServiceAccounts)
            this.ServiceAccounts = obj;
        }

        if (params.OIDCConfig) {
            let obj = new OIDCConfigAuthenticationOptions();
            obj.deserialize(params.OIDCConfig)
            this.OIDCConfig = obj;
        }

    }
}

/**
 * DeleteClusterEndpointVip请求参数结构体
 * @class
 */
class DeleteClusterEndpointVipRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * 健康探针
 * @class
 */
class LivenessOrReadinessProbe extends  AbstractModel {
    constructor(){
        super();

        /**
         * 探针参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Probe || null}
         */
        this.Probe = null;

        /**
         * HttpGet检测参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {HttpGet || null}
         */
        this.HttpGet = null;

        /**
         * 容器内检测命令参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Exec || null}
         */
        this.Exec = null;

        /**
         * TcpSocket检测的端口参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TcpSocket || null}
         */
        this.TcpSocket = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Probe) {
            let obj = new Probe();
            obj.deserialize(params.Probe)
            this.Probe = obj;
        }

        if (params.HttpGet) {
            let obj = new HttpGet();
            obj.deserialize(params.HttpGet)
            this.HttpGet = obj;
        }

        if (params.Exec) {
            let obj = new Exec();
            obj.deserialize(params.Exec)
            this.Exec = obj;
        }

        if (params.TcpSocket) {
            let obj = new TcpSocket();
            obj.deserialize(params.TcpSocket)
            this.TcpSocket = obj;
        }

    }
}

/**
 * DescribeClusterLevelChangeRecords返回参数结构体
 * @class
 */
class DescribeClusterLevelChangeRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 集群规模
         * @type {Array.<ClusterLevelChangeRecord> || null}
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
                let obj = new ClusterLevelChangeRecord();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 集群状态信息
 * @class
 */
class ClusterStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群Id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群状态
         * @type {string || null}
         */
        this.ClusterState = null;

        /**
         * 集群下机器实例的状态
         * @type {string || null}
         */
        this.ClusterInstanceState = null;

        /**
         * 集群是否开启监控
         * @type {boolean || null}
         */
        this.ClusterBMonitor = null;

        /**
         * 集群创建中的节点数，-1表示获取节点状态超时，-2表示获取节点状态失败
         * @type {number || null}
         */
        this.ClusterInitNodeNum = null;

        /**
         * 集群运行中的节点数，-1表示获取节点状态超时，-2表示获取节点状态失败
         * @type {number || null}
         */
        this.ClusterRunningNodeNum = null;

        /**
         * 集群异常的节点数，-1表示获取节点状态超时，-2表示获取节点状态失败
         * @type {number || null}
         */
        this.ClusterFailedNodeNum = null;

        /**
         * 集群已关机的节点数，-1表示获取节点状态超时，-2表示获取节点状态失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ClusterClosedNodeNum = null;

        /**
         * 集群关机中的节点数，-1表示获取节点状态超时，-2表示获取节点状态失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ClusterClosingNodeNum = null;

        /**
         * 集群是否开启删除保护
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.ClusterDeletionProtection = null;

        /**
         * 集群是否可审计
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.ClusterAuditEnabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterState = 'ClusterState' in params ? params.ClusterState : null;
        this.ClusterInstanceState = 'ClusterInstanceState' in params ? params.ClusterInstanceState : null;
        this.ClusterBMonitor = 'ClusterBMonitor' in params ? params.ClusterBMonitor : null;
        this.ClusterInitNodeNum = 'ClusterInitNodeNum' in params ? params.ClusterInitNodeNum : null;
        this.ClusterRunningNodeNum = 'ClusterRunningNodeNum' in params ? params.ClusterRunningNodeNum : null;
        this.ClusterFailedNodeNum = 'ClusterFailedNodeNum' in params ? params.ClusterFailedNodeNum : null;
        this.ClusterClosedNodeNum = 'ClusterClosedNodeNum' in params ? params.ClusterClosedNodeNum : null;
        this.ClusterClosingNodeNum = 'ClusterClosingNodeNum' in params ? params.ClusterClosingNodeNum : null;
        this.ClusterDeletionProtection = 'ClusterDeletionProtection' in params ? params.ClusterDeletionProtection : null;
        this.ClusterAuditEnabled = 'ClusterAuditEnabled' in params ? params.ClusterAuditEnabled : null;

    }
}

/**
 * DescribePrometheusAgents返回参数结构体
 * @class
 */
class DescribePrometheusAgentsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 被关联集群信息
         * @type {Array.<PrometheusAgentOverview> || null}
         */
        this.Agents = null;

        /**
         * 被关联集群总量
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

        if (params.Agents) {
            this.Agents = new Array();
            for (let z in params.Agents) {
                let obj = new PrometheusAgentOverview();
                obj.deserialize(params.Agents[z]);
                this.Agents.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVpcCniPodLimits请求参数结构体
 * @class
 */
class DescribeVpcCniPodLimitsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询的机型所在可用区，如：ap-guangzhou-3，默认为空，即不按可用区过滤信息
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 查询的实例机型系列信息，如：S5，默认为空，即不按机型系列过滤信息
         * @type {string || null}
         */
        this.InstanceFamily = null;

        /**
         * 查询的实例机型信息，如：S5.LARGE8，默认为空，即不按机型过滤信息
         * @type {string || null}
         */
        this.InstanceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceFamily = 'InstanceFamily' in params ? params.InstanceFamily : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

    }
}

/**
 * DeleteImageCaches返回参数结构体
 * @class
 */
class DeleteImageCachesResponse extends  AbstractModel {
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
 * DescribeEKSContainerInstanceRegions返回参数结构体
 * @class
 */
class DescribeEKSContainerInstanceRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * EKS Container Instance支持的地域信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<EksCiRegionInfo> || null}
         */
        this.Regions = null;

        /**
         * 总数
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

        if (params.Regions) {
            this.Regions = new Array();
            for (let z in params.Regions) {
                let obj = new EksCiRegionInfo();
                obj.deserialize(params.Regions[z]);
                this.Regions.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyPrometheusRecordRuleYaml返回参数结构体
 * @class
 */
class ModifyPrometheusRecordRuleYamlResponse extends  AbstractModel {
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
 * DescribeTKEEdgeScript请求参数结构体
 * @class
 */
class DescribeTKEEdgeScriptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 网卡名
         * @type {string || null}
         */
        this.Interface = null;

        /**
         * 节点名字
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * json格式的节点配置
         * @type {string || null}
         */
        this.Config = null;

        /**
         * 可以下载某个历史版本的edgectl脚本，默认下载最新版本，edgectl版本信息可以在脚本里查看
         * @type {string || null}
         */
        this.ScriptVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Interface = 'Interface' in params ? params.Interface : null;
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.Config = 'Config' in params ? params.Config : null;
        this.ScriptVersion = 'ScriptVersion' in params ? params.ScriptVersion : null;

    }
}

/**
 * AddVpcCniSubnets返回参数结构体
 * @class
 */
class AddVpcCniSubnetsResponse extends  AbstractModel {
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
 * 不同角色的已存在节点配置参数
 * @class
 */
class ExistedInstancesForNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点角色，取值:MASTER_ETCD, WORKER。MASTER_ETCD只有在创建 INDEPENDENT_CLUSTER 独立集群时需要指定。MASTER_ETCD节点数量为3～7，建议为奇数。MASTER_ETCD最小配置为4C8G。
         * @type {string || null}
         */
        this.NodeRole = null;

        /**
         * 已存在实例的重装参数
         * @type {ExistedInstancesPara || null}
         */
        this.ExistedInstancesPara = null;

        /**
         * 节点高级设置，会覆盖集群级别设置的InstanceAdvancedSettings（当前只对节点自定义参数ExtraArgs生效）
         * @type {InstanceAdvancedSettings || null}
         */
        this.InstanceAdvancedSettingsOverride = null;

        /**
         * 自定义模式集群，可指定每个节点的pod数量
         * @type {Array.<number> || null}
         */
        this.DesiredPodNumbers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeRole = 'NodeRole' in params ? params.NodeRole : null;

        if (params.ExistedInstancesPara) {
            let obj = new ExistedInstancesPara();
            obj.deserialize(params.ExistedInstancesPara)
            this.ExistedInstancesPara = obj;
        }

        if (params.InstanceAdvancedSettingsOverride) {
            let obj = new InstanceAdvancedSettings();
            obj.deserialize(params.InstanceAdvancedSettingsOverride)
            this.InstanceAdvancedSettingsOverride = obj;
        }
        this.DesiredPodNumbers = 'DesiredPodNumbers' in params ? params.DesiredPodNumbers : null;

    }
}

/**
 * DescribePrometheusOverviews返回参数结构体
 * @class
 */
class DescribePrometheusOverviewsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例列表
         * @type {Array.<PrometheusInstanceOverview> || null}
         */
        this.Instances = null;

        /**
         * 实例总数
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new PrometheusInstanceOverview();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeletePrometheusRecordRuleYaml请求参数结构体
 * @class
 */
class DeletePrometheusRecordRuleYamlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 聚合规则列表
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Names = 'Names' in params ? params.Names : null;

    }
}

/**
 * 某个节点升级前检查结果
 * @class
 */
class InstanceUpgradePreCheckResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 检查是否通过
         * @type {boolean || null}
         */
        this.CheckPass = null;

        /**
         * 检查项数组
         * @type {Array.<InstanceUpgradePreCheckResultItem> || null}
         */
        this.Items = null;

        /**
         * 本节点独立pod列表
         * @type {Array.<string> || null}
         */
        this.SinglePods = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CheckPass = 'CheckPass' in params ? params.CheckPass : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new InstanceUpgradePreCheckResultItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.SinglePods = 'SinglePods' in params ? params.SinglePods : null;

    }
}

/**
 * ScaleInClusterMaster返回参数结构体
 * @class
 */
class ScaleInClusterMasterResponse extends  AbstractModel {
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
 * DescribeAvailableClusterVersion返回参数结构体
 * @class
 */
class DescribeAvailableClusterVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可升级的集群版本号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Versions = null;

        /**
         * 集群信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ClusterVersion> || null}
         */
        this.Clusters = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Versions = 'Versions' in params ? params.Versions : null;

        if (params.Clusters) {
            this.Clusters = new Array();
            for (let z in params.Clusters) {
                let obj = new ClusterVersion();
                obj.deserialize(params.Clusters[z]);
                this.Clusters.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteEKSContainerInstances请求参数结构体
 * @class
 */
class DeleteEKSContainerInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要删除的EksCi的Id。 最大数量不超过20
         * @type {Array.<string> || null}
         */
        this.EksCiIds = null;

        /**
         * 是否释放为EksCi自动创建的Eip
         * @type {boolean || null}
         */
        this.ReleaseAutoCreatedEip = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EksCiIds = 'EksCiIds' in params ? params.EksCiIds : null;
        this.ReleaseAutoCreatedEip = 'ReleaseAutoCreatedEip' in params ? params.ReleaseAutoCreatedEip : null;

    }
}

/**
 * DescribeClusterCommonNames返回参数结构体
 * @class
 */
class DescribeClusterCommonNamesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子账户Uin与其客户端证书的CN字段映射
         * @type {Array.<CommonName> || null}
         */
        this.CommonNames = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CommonNames) {
            this.CommonNames = new Array();
            for (let z in params.CommonNames) {
                let obj = new CommonName();
                obj.deserialize(params.CommonNames[z]);
                this.CommonNames.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteECMInstances返回参数结构体
 * @class
 */
class DeleteECMInstancesResponse extends  AbstractModel {
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
 * 模板实例
 * @class
 */
class PrometheusTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 模板维度，支持以下类型
instance 实例级别
cluster 集群级别
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 模板描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Describe = null;

        /**
         * 当Level为instance时有效，
模板中的告警配置列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusAlertRule> || null}
         */
        this.AlertRules = null;

        /**
         * 当Level为instance时有效，
模板中的聚合规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.RecordRules = null;

        /**
         * 当Level为cluster时有效，
模板中的ServiceMonitor规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.ServiceMonitors = null;

        /**
         * 当Level为cluster时有效，
模板中的PodMonitors规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.PodMonitors = null;

        /**
         * 当Level为cluster时有效，
模板中的RawJobs规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusConfigItem> || null}
         */
        this.RawJobs = null;

        /**
         * 模板的ID, 用于出参
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 最近更新时间，用于出参
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 当前版本，用于出参
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 是否系统提供的默认模板，用于出参
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsDefault = null;

        /**
         * 当Level为instance时有效，
模板中的告警配置列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusAlertRuleDetail> || null}
         */
        this.AlertDetailRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Describe = 'Describe' in params ? params.Describe : null;

        if (params.AlertRules) {
            this.AlertRules = new Array();
            for (let z in params.AlertRules) {
                let obj = new PrometheusAlertRule();
                obj.deserialize(params.AlertRules[z]);
                this.AlertRules.push(obj);
            }
        }

        if (params.RecordRules) {
            this.RecordRules = new Array();
            for (let z in params.RecordRules) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.RecordRules[z]);
                this.RecordRules.push(obj);
            }
        }

        if (params.ServiceMonitors) {
            this.ServiceMonitors = new Array();
            for (let z in params.ServiceMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.ServiceMonitors[z]);
                this.ServiceMonitors.push(obj);
            }
        }

        if (params.PodMonitors) {
            this.PodMonitors = new Array();
            for (let z in params.PodMonitors) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.PodMonitors[z]);
                this.PodMonitors.push(obj);
            }
        }

        if (params.RawJobs) {
            this.RawJobs = new Array();
            for (let z in params.RawJobs) {
                let obj = new PrometheusConfigItem();
                obj.deserialize(params.RawJobs[z]);
                this.RawJobs.push(obj);
            }
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;

        if (params.AlertDetailRules) {
            this.AlertDetailRules = new Array();
            for (let z in params.AlertDetailRules) {
                let obj = new PrometheusAlertRuleDetail();
                obj.deserialize(params.AlertDetailRules[z]);
                this.AlertDetailRules.push(obj);
            }
        }

    }
}

/**
 * GPU相关的参数，包括驱动版本，CUDA版本，cuDNN版本以及是否开启MIG
 * @class
 */
class GPUArgs extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否启用MIG特性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.MIGEnable = null;

        /**
         * GPU驱动版本信息
         * @type {DriverVersion || null}
         */
        this.Driver = null;

        /**
         * CUDA版本信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DriverVersion || null}
         */
        this.CUDA = null;

        /**
         * cuDNN版本信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CUDNN || null}
         */
        this.CUDNN = null;

        /**
         * 自定义GPU驱动信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CustomDriver || null}
         */
        this.CustomDriver = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MIGEnable = 'MIGEnable' in params ? params.MIGEnable : null;

        if (params.Driver) {
            let obj = new DriverVersion();
            obj.deserialize(params.Driver)
            this.Driver = obj;
        }

        if (params.CUDA) {
            let obj = new DriverVersion();
            obj.deserialize(params.CUDA)
            this.CUDA = obj;
        }

        if (params.CUDNN) {
            let obj = new CUDNN();
            obj.deserialize(params.CUDNN)
            this.CUDNN = obj;
        }

        if (params.CustomDriver) {
            let obj = new CustomDriver();
            obj.deserialize(params.CustomDriver)
            this.CustomDriver = obj;
        }

    }
}

/**
 * 路由表冲突对象
 * @class
 */
class RouteTableConflict extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表类型。
         * @type {string || null}
         */
        this.RouteTableType = null;

        /**
         * 路由表CIDR。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RouteTableCidrBlock = null;

        /**
         * 路由表名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RouteTableName = null;

        /**
         * 路由表ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RouteTableId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableType = 'RouteTableType' in params ? params.RouteTableType : null;
        this.RouteTableCidrBlock = 'RouteTableCidrBlock' in params ? params.RouteTableCidrBlock : null;
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;

    }
}

/**
 * 托管prometheus实例概览
 * @class
 */
class PrometheusInstanceOverview extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 实例vpcId
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 实例子网Id
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 实例当前的状态
prepare_env = 初始化环境
install_suit = 安装组件
running = 运行中
         * @type {string || null}
         */
        this.Status = null;

        /**
         * COS桶存储
         * @type {string || null}
         */
        this.COSBucket = null;

        /**
         * grafana默认地址，如果开启外网访问得为域名，否则为内网地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GrafanaURL = null;

        /**
         * 关联集群总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BoundTotal = null;

        /**
         * 运行正常的集群数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BoundNormal = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.COSBucket = 'COSBucket' in params ? params.COSBucket : null;
        this.GrafanaURL = 'GrafanaURL' in params ? params.GrafanaURL : null;
        this.BoundTotal = 'BoundTotal' in params ? params.BoundTotal : null;
        this.BoundNormal = 'BoundNormal' in params ? params.BoundNormal : null;

    }
}

/**
 * DescribeClusterVirtualNode返回参数结构体
 * @class
 */
class DescribeClusterVirtualNodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VirtualNode> || null}
         */
        this.Nodes = null;

        /**
         * 节点总数
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

        if (params.Nodes) {
            this.Nodes = new Array();
            for (let z in params.Nodes) {
                let obj = new VirtualNode();
                obj.deserialize(params.Nodes[z]);
                this.Nodes.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * master节点缩容参数
 * @class
 */
class ScaleInMaster extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 缩容的实例角色：MASTER,ETCD,MASTER_ETCD
         * @type {string || null}
         */
        this.NodeRole = null;

        /**
         * 实例的保留模式
         * @type {string || null}
         */
        this.InstanceDeleteMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.NodeRole = 'NodeRole' in params ? params.NodeRole : null;
        this.InstanceDeleteMode = 'InstanceDeleteMode' in params ? params.InstanceDeleteMode : null;

    }
}

/**
 * RunPrometheusInstance请求参数结构体
 * @class
 */
class RunPrometheusInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 子网ID，默认使用实例所用子网初始化，也可通过该参数传递新的子网ID初始化
         * @type {string || null}
         */
        this.SubnetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * 应用市场安装的Pending应用
 * @class
 */
class PendingRelease extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用状态详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Condition = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ID = null;

        /**
         * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 应用命名空间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 应用状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Condition = 'Condition' in params ? params.Condition : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.UpdatedTime = 'UpdatedTime' in params ? params.UpdatedTime : null;

    }
}

module.exports = {
    DescribeClusterEndpointVipStatusRequest: DescribeClusterEndpointVipStatusRequest,
    DescribeClusterSecurityRequest: DescribeClusterSecurityRequest,
    EksCiVolume: EksCiVolume,
    GetTkeAppChartListRequest: GetTkeAppChartListRequest,
    DescribeEdgeCVMInstancesRequest: DescribeEdgeCVMInstancesRequest,
    InstallLogAgentRequest: InstallLogAgentRequest,
    DescribeClusterEndpointVipStatusResponse: DescribeClusterEndpointVipStatusResponse,
    DeleteClusterResponse: DeleteClusterResponse,
    ContainerState: ContainerState,
    CreateClusterRouteTableResponse: CreateClusterRouteTableResponse,
    SubnetInfos: SubnetInfos,
    CbsVolume: CbsVolume,
    DescribeEKSClustersRequest: DescribeEKSClustersRequest,
    DescribePrometheusInstancesOverviewRequest: DescribePrometheusInstancesOverviewRequest,
    ServiceAccountAuthenticationOptions: ServiceAccountAuthenticationOptions,
    CreateClusterNodePoolRequest: CreateClusterNodePoolRequest,
    UpgradeClusterReleaseRequest: UpgradeClusterReleaseRequest,
    DescribeEdgeClusterUpgradeInfoRequest: DescribeEdgeClusterUpgradeInfoRequest,
    RunInstancesForNode: RunInstancesForNode,
    DisableVpcCniNetworkTypeResponse: DisableVpcCniNetworkTypeResponse,
    DescribeClusterControllersResponse: DescribeClusterControllersResponse,
    DescribeExistedInstancesRequest: DescribeExistedInstancesRequest,
    DeletePrometheusClusterAgentRequest: DeletePrometheusClusterAgentRequest,
    ClusterLevelChangeRecord: ClusterLevelChangeRecord,
    ModifyPrometheusAlertRuleResponse: ModifyPrometheusAlertRuleResponse,
    DescribeEKSContainerInstanceEventResponse: DescribeEKSContainerInstanceEventResponse,
    RouteTableInfo: RouteTableInfo,
    EnableClusterDeletionProtectionResponse: EnableClusterDeletionProtectionResponse,
    ClusterAsGroup: ClusterAsGroup,
    PrometheusTempModify: PrometheusTempModify,
    EnableClusterAuditResponse: EnableClusterAuditResponse,
    EnvironmentVariable: EnvironmentVariable,
    UpdateImageCacheRequest: UpdateImageCacheRequest,
    ManuallyAdded: ManuallyAdded,
    Tag: Tag,
    DescribePrometheusAgentInstancesRequest: DescribePrometheusAgentInstancesRequest,
    ModifyClusterAttributeRequest: ModifyClusterAttributeRequest,
    AutoscalingAdded: AutoscalingAdded,
    DescribeClustersRequest: DescribeClustersRequest,
    UpgradeClusterInstancesRequest: UpgradeClusterInstancesRequest,
    ExtensionAddon: ExtensionAddon,
    DescribeResourceUsageRequest: DescribeResourceUsageRequest,
    PrometheusRecordRuleYamlItem: PrometheusRecordRuleYamlItem,
    Label: Label,
    PodLimitsByType: PodLimitsByType,
    DeletePrometheusTemplateSyncRequest: DeletePrometheusTemplateSyncRequest,
    DisableVpcCniNetworkTypeRequest: DisableVpcCniNetworkTypeRequest,
    DescribeClusterReleaseDetailsResponse: DescribeClusterReleaseDetailsResponse,
    SyncPrometheusTempResponse: SyncPrometheusTempResponse,
    CreateEdgeLogConfigRequest: CreateEdgeLogConfigRequest,
    CreatePrometheusDashboardResponse: CreatePrometheusDashboardResponse,
    CancelClusterReleaseRequest: CancelClusterReleaseRequest,
    DescribeTKEEdgeClusterStatusResponse: DescribeTKEEdgeClusterStatusResponse,
    ModifyClusterAsGroupOptionAttributeRequest: ModifyClusterAsGroupOptionAttributeRequest,
    DescribeClusterStatusRequest: DescribeClusterStatusRequest,
    PrometheusConfigItem: PrometheusConfigItem,
    DeleteClusterNodePoolRequest: DeleteClusterNodePoolRequest,
    DescribeEKSClusterCredentialResponse: DescribeEKSClusterCredentialResponse,
    CheckInstancesUpgradeAbleRequest: CheckInstancesUpgradeAbleRequest,
    ModifyPrometheusTemplateRequest: ModifyPrometheusTemplateRequest,
    DeleteClusterVirtualNodePoolRequest: DeleteClusterVirtualNodePoolRequest,
    DescribeImageCachesRequest: DescribeImageCachesRequest,
    DescribePrometheusAlertRuleRequest: DescribePrometheusAlertRuleRequest,
    DescribeEdgeAvailableExtraArgsRequest: DescribeEdgeAvailableExtraArgsRequest,
    ExistedInstance: ExistedInstance,
    AddNodeToNodePoolResponse: AddNodeToNodePoolResponse,
    PrometheusInstancesOverview: PrometheusInstancesOverview,
    DescribePrometheusInstanceInitStatusResponse: DescribePrometheusInstanceInitStatusResponse,
    DisableEventPersistenceResponse: DisableEventPersistenceResponse,
    UpdateEKSContainerInstanceRequest: UpdateEKSContainerInstanceRequest,
    CUDNN: CUDNN,
    GetMostSuitableImageCacheResponse: GetMostSuitableImageCacheResponse,
    DescribeEdgeAvailableExtraArgsResponse: DescribeEdgeAvailableExtraArgsResponse,
    CreatePrometheusRecordRuleYamlRequest: CreatePrometheusRecordRuleYamlRequest,
    DescribeEnableVpcCniProgressRequest: DescribeEnableVpcCniProgressRequest,
    Instance: Instance,
    ModifyClusterAttributeResponse: ModifyClusterAttributeResponse,
    RunAutomationServiceEnabled: RunAutomationServiceEnabled,
    CreateClusterResponse: CreateClusterResponse,
    PrometheusClusterAgentPodConfig: PrometheusClusterAgentPodConfig,
    RunSecurityServiceEnabled: RunSecurityServiceEnabled,
    ImageCache: ImageCache,
    DeletePrometheusAlertRuleResponse: DeletePrometheusAlertRuleResponse,
    DescribeClusterPendingReleasesRequest: DescribeClusterPendingReleasesRequest,
    DeletePrometheusConfigResponse: DeletePrometheusConfigResponse,
    DescribeEksContainerInstanceLogRequest: DescribeEksContainerInstanceLogRequest,
    CreatePrometheusRecordRuleYamlResponse: CreatePrometheusRecordRuleYamlResponse,
    DescribeClusterInstancesRequest: DescribeClusterInstancesRequest,
    PodLimitsInstance: PodLimitsInstance,
    ModifyPrometheusTempRequest: ModifyPrometheusTempRequest,
    ControllerStatus: ControllerStatus,
    DeletePrometheusTempSyncResponse: DeletePrometheusTempSyncResponse,
    DescribePrometheusRecordRulesRequest: DescribePrometheusRecordRulesRequest,
    VirtualNodePool: VirtualNodePool,
    DescribeTKEEdgeClusterStatusRequest: DescribeTKEEdgeClusterStatusRequest,
    AcquireClusterAdminRoleResponse: AcquireClusterAdminRoleResponse,
    DescribeEdgeClusterInstancesResponse: DescribeEdgeClusterInstancesResponse,
    UpdateEdgeClusterVersionRequest: UpdateEdgeClusterVersionRequest,
    GetTkeAppChartListResponse: GetTkeAppChartListResponse,
    DescribePrometheusTemplateSyncRequest: DescribePrometheusTemplateSyncRequest,
    UpgradeAbleInstancesItem: UpgradeAbleInstancesItem,
    UpgradeClusterInstancesResponse: UpgradeClusterInstancesResponse,
    CustomDriver: CustomDriver,
    DescribeClusterAsGroupOptionRequest: DescribeClusterAsGroupOptionRequest,
    DescribePrometheusAgentInstancesResponse: DescribePrometheusAgentInstancesResponse,
    AddExistedInstancesRequest: AddExistedInstancesRequest,
    ClusterAsGroupOption: ClusterAsGroupOption,
    DeletePrometheusTempResponse: DeletePrometheusTempResponse,
    DescribeClusterNodePoolsRequest: DescribeClusterNodePoolsRequest,
    DescribeClusterRouteTablesRequest: DescribeClusterRouteTablesRequest,
    DescribeRegionsRequest: DescribeRegionsRequest,
    DeleteClusterRouteRequest: DeleteClusterRouteRequest,
    DeleteClusterEndpointRequest: DeleteClusterEndpointRequest,
    DeleteClusterVirtualNodeRequest: DeleteClusterVirtualNodeRequest,
    DescribeClusterNodePoolDetailRequest: DescribeClusterNodePoolDetailRequest,
    DescribePrometheusTempSyncRequest: DescribePrometheusTempSyncRequest,
    DescribePrometheusGlobalConfigResponse: DescribePrometheusGlobalConfigResponse,
    DescribeClusterReleaseHistoryResponse: DescribeClusterReleaseHistoryResponse,
    DescribeImagesRequest: DescribeImagesRequest,
    UninstallEdgeLogAgentResponse: UninstallEdgeLogAgentResponse,
    AddVpcCniSubnetsRequest: AddVpcCniSubnetsRequest,
    DescribePrometheusAlertHistoryResponse: DescribePrometheusAlertHistoryResponse,
    ExistedInstancesPara: ExistedInstancesPara,
    DescribeClusterAsGroupOptionResponse: DescribeClusterAsGroupOptionResponse,
    CreateTKEEdgeClusterResponse: CreateTKEEdgeClusterResponse,
    DescribeEdgeClusterExtraArgsResponse: DescribeEdgeClusterExtraArgsResponse,
    ResourceDeleteOption: ResourceDeleteOption,
    InstallEdgeLogAgentRequest: InstallEdgeLogAgentRequest,
    CheckEdgeClusterCIDRRequest: CheckEdgeClusterCIDRRequest,
    CreateImageCacheRequest: CreateImageCacheRequest,
    UpdateClusterVersionRequest: UpdateClusterVersionRequest,
    Probe: Probe,
    NodeCountSummary: NodeCountSummary,
    EdgeCluster: EdgeCluster,
    DescribeClusterNodePoolDetailResponse: DescribeClusterNodePoolDetailResponse,
    DescribeEKSContainerInstanceEventRequest: DescribeEKSContainerInstanceEventRequest,
    ScaleOutClusterMasterResponse: ScaleOutClusterMasterResponse,
    Toleration: Toleration,
    CreateEKSContainerInstancesResponse: CreateEKSContainerInstancesResponse,
    DeleteEdgeCVMInstancesResponse: DeleteEdgeCVMInstancesResponse,
    DescribeClusterKubeconfigResponse: DescribeClusterKubeconfigResponse,
    DescribeClusterCommonNamesRequest: DescribeClusterCommonNamesRequest,
    NfsVolume: NfsVolume,
    PrometheusNotification: PrometheusNotification,
    ClusterCondition: ClusterCondition,
    NodePool: NodePool,
    DescribeEKSClustersResponse: DescribeEKSClustersResponse,
    VolumeMount: VolumeMount,
    DeleteClusterRequest: DeleteClusterRequest,
    DescribeTKEEdgeClustersResponse: DescribeTKEEdgeClustersResponse,
    DescribeAvailableTKEEdgeVersionRequest: DescribeAvailableTKEEdgeVersionRequest,
    DeleteClusterAsGroupsRequest: DeleteClusterAsGroupsRequest,
    ModifyPrometheusAlertPolicyRequest: ModifyPrometheusAlertPolicyRequest,
    ForwardApplicationRequestV3Request: ForwardApplicationRequestV3Request,
    PrometheusAlertHistoryItem: PrometheusAlertHistoryItem,
    PrometheusTemplateSyncTarget: PrometheusTemplateSyncTarget,
    DescribePrometheusTemplatesRequest: DescribePrometheusTemplatesRequest,
    DescribePrometheusAlertPolicyResponse: DescribePrometheusAlertPolicyResponse,
    EnableVpcCniNetworkTypeResponse: EnableVpcCniNetworkTypeResponse,
    DescribePrometheusAlertRuleResponse: DescribePrometheusAlertRuleResponse,
    EksCiRegionInfo: EksCiRegionInfo,
    DescribeEdgeClusterInstancesRequest: DescribeEdgeClusterInstancesRequest,
    DisableClusterAuditRequest: DisableClusterAuditRequest,
    DescribePrometheusRecordRulesResponse: DescribePrometheusRecordRulesResponse,
    DescribePrometheusGlobalNotificationResponse: DescribePrometheusGlobalNotificationResponse,
    HttpGet: HttpGet,
    ResourceUsage: ResourceUsage,
    CreateClusterVirtualNodeRequest: CreateClusterVirtualNodeRequest,
    DescribeTKEEdgeClustersRequest: DescribeTKEEdgeClustersRequest,
    DescribePrometheusAlertHistoryRequest: DescribePrometheusAlertHistoryRequest,
    SetNodePoolNodeProtectionResponse: SetNodePoolNodeProtectionResponse,
    DeletePrometheusAlertPolicyRequest: DeletePrometheusAlertPolicyRequest,
    ModifyPrometheusAgentExternalLabelsResponse: ModifyPrometheusAgentExternalLabelsResponse,
    RollbackClusterReleaseRequest: RollbackClusterReleaseRequest,
    DeleteClusterInstancesRequest: DeleteClusterInstancesRequest,
    UpgradeNodeResetParam: UpgradeNodeResetParam,
    DriverVersion: DriverVersion,
    CreateClusterInstancesRequest: CreateClusterInstancesRequest,
    ClusterCIDRSettings: ClusterCIDRSettings,
    Taint: Taint,
    ModifyNodePoolInstanceTypesRequest: ModifyNodePoolInstanceTypesRequest,
    AddClusterCIDRRequest: AddClusterCIDRRequest,
    OIDCConfigAuthenticationOptions: OIDCConfigAuthenticationOptions,
    CreateClusterRequest: CreateClusterRequest,
    CreateEdgeCVMInstancesRequest: CreateEdgeCVMInstancesRequest,
    DescribeClusterReleaseHistoryRequest: DescribeClusterReleaseHistoryRequest,
    NodePoolOption: NodePoolOption,
    DescribeEdgeClusterExtraArgsRequest: DescribeEdgeClusterExtraArgsRequest,
    DescribeClustersResponse: DescribeClustersResponse,
    DeleteClusterVirtualNodeResponse: DeleteClusterVirtualNodeResponse,
    PrometheusAgentInfo: PrometheusAgentInfo,
    CreateEdgeCVMInstancesResponse: CreateEdgeCVMInstancesResponse,
    DescribeEdgeLogSwitchesResponse: DescribeEdgeLogSwitchesResponse,
    CreatePrometheusClusterAgentResponse: CreatePrometheusClusterAgentResponse,
    DescribePrometheusTemplatesResponse: DescribePrometheusTemplatesResponse,
    UpdateEKSContainerInstanceResponse: UpdateEKSContainerInstanceResponse,
    DnsServerConf: DnsServerConf,
    EksCluster: EksCluster,
    ModifyNodePoolInstanceTypesResponse: ModifyNodePoolInstanceTypesResponse,
    PrometheusAlertManagerConfig: PrometheusAlertManagerConfig,
    GetClusterLevelPriceResponse: GetClusterLevelPriceResponse,
    DescribeResourceUsageResponse: DescribeResourceUsageResponse,
    EdgeClusterInternalLB: EdgeClusterInternalLB,
    DescribeClusterRoutesResponse: DescribeClusterRoutesResponse,
    DescribeAvailableClusterVersionRequest: DescribeAvailableClusterVersionRequest,
    UpgradeClusterReleaseResponse: UpgradeClusterReleaseResponse,
    DescribePrometheusAlertPolicyRequest: DescribePrometheusAlertPolicyRequest,
    DeleteClusterAsGroupsResponse: DeleteClusterAsGroupsResponse,
    RegionInstance: RegionInstance,
    DescribePrometheusConfigRequest: DescribePrometheusConfigRequest,
    DescribeEdgeLogSwitchesRequest: DescribeEdgeLogSwitchesRequest,
    DeletePrometheusTemplateRequest: DeletePrometheusTemplateRequest,
    DeletePrometheusRecordRuleYamlResponse: DeletePrometheusRecordRuleYamlResponse,
    DescribePrometheusTempSyncResponse: DescribePrometheusTempSyncResponse,
    Cluster: Cluster,
    DescribeClusterEndpointStatusResponse: DescribeClusterEndpointStatusResponse,
    DescribeExternalClusterSpecResponse: DescribeExternalClusterSpecResponse,
    AddExistedInstancesResponse: AddExistedInstancesResponse,
    RestartEKSContainerInstancesResponse: RestartEKSContainerInstancesResponse,
    DisableClusterDeletionProtectionResponse: DisableClusterDeletionProtectionResponse,
    EnableVpcCniNetworkTypeRequest: EnableVpcCniNetworkTypeRequest,
    Container: Container,
    CreateClusterEndpointRequest: CreateClusterEndpointRequest,
    Exec: Exec,
    DescribePrometheusInstanceResponse: DescribePrometheusInstanceResponse,
    Capabilities: Capabilities,
    UpdateTKEEdgeClusterRequest: UpdateTKEEdgeClusterRequest,
    DescribeTKEEdgeExternalKubeconfigResponse: DescribeTKEEdgeExternalKubeconfigResponse,
    CreateClusterInstancesResponse: CreateClusterInstancesResponse,
    ModifyClusterVirtualNodePoolResponse: ModifyClusterVirtualNodePoolResponse,
    InstanceUpgradeClusterStatus: InstanceUpgradeClusterStatus,
    DescribeClusterRoutesRequest: DescribeClusterRoutesRequest,
    DeleteECMInstancesRequest: DeleteECMInstancesRequest,
    ClusterLevelAttribute: ClusterLevelAttribute,
    RemoveNodeFromNodePoolResponse: RemoveNodeFromNodePoolResponse,
    SetNodePoolNodeProtectionRequest: SetNodePoolNodeProtectionRequest,
    EnableClusterAuditRequest: EnableClusterAuditRequest,
    CreateClusterRouteTableRequest: CreateClusterRouteTableRequest,
    DisableClusterAuditResponse: DisableClusterAuditResponse,
    DescribeClusterEndpointsResponse: DescribeClusterEndpointsResponse,
    RemoveNodeFromNodePoolRequest: RemoveNodeFromNodePoolRequest,
    UninstallEdgeLogAgentRequest: UninstallEdgeLogAgentRequest,
    DescribeClusterLevelChangeRecordsRequest: DescribeClusterLevelChangeRecordsRequest,
    UpdateClusterVersionResponse: UpdateClusterVersionResponse,
    InstanceUpgradePreCheckResultItem: InstanceUpgradePreCheckResultItem,
    DeleteClusterNodePoolResponse: DeleteClusterNodePoolResponse,
    DeleteImageCachesRequest: DeleteImageCachesRequest,
    ReleaseValues: ReleaseValues,
    CreateClusterNodePoolResponse: CreateClusterNodePoolResponse,
    Filter: Filter,
    UpdateTKEEdgeClusterResponse: UpdateTKEEdgeClusterResponse,
    EipAttribute: EipAttribute,
    DescribeEKSContainerInstancesRequest: DescribeEKSContainerInstancesRequest,
    DescribeClusterControllersRequest: DescribeClusterControllersRequest,
    ModifyPrometheusAlertRuleRequest: ModifyPrometheusAlertRuleRequest,
    DescribeClusterSecurityResponse: DescribeClusterSecurityResponse,
    RouteInfo: RouteInfo,
    ModifyNodePoolDesiredCapacityAboutAsgResponse: ModifyNodePoolDesiredCapacityAboutAsgResponse,
    CreateClusterRouteRequest: CreateClusterRouteRequest,
    ModifyClusterEndpointSPRequest: ModifyClusterEndpointSPRequest,
    DeleteClusterEndpointResponse: DeleteClusterEndpointResponse,
    PrometheusTemplateModify: PrometheusTemplateModify,
    RollbackClusterReleaseResponse: RollbackClusterReleaseResponse,
    ClusterVersion: ClusterVersion,
    InstanceUpgradeProgressItem: InstanceUpgradeProgressItem,
    DescribeClusterVirtualNodePoolsRequest: DescribeClusterVirtualNodePoolsRequest,
    GetMostSuitableImageCacheRequest: GetMostSuitableImageCacheRequest,
    SecurityContext: SecurityContext,
    DNSConfig: DNSConfig,
    ModifyPrometheusConfigResponse: ModifyPrometheusConfigResponse,
    DescribeTKEEdgeExternalKubeconfigRequest: DescribeTKEEdgeExternalKubeconfigRequest,
    CreatePrometheusAlertPolicyResponse: CreatePrometheusAlertPolicyResponse,
    DNSConfigOption: DNSConfigOption,
    DescribeClusterVirtualNodeRequest: DescribeClusterVirtualNodeRequest,
    DescribeClusterReleasesResponse: DescribeClusterReleasesResponse,
    AddNodeToNodePoolRequest: AddNodeToNodePoolRequest,
    DescribeExternalClusterSpecRequest: DescribeExternalClusterSpecRequest,
    ModifyPrometheusGlobalNotificationResponse: ModifyPrometheusGlobalNotificationResponse,
    UninstallClusterReleaseRequest: UninstallClusterReleaseRequest,
    VirtualNode: VirtualNode,
    ForwardTKEEdgeApplicationRequestV3Response: ForwardTKEEdgeApplicationRequestV3Response,
    CreateClusterVirtualNodePoolRequest: CreateClusterVirtualNodePoolRequest,
    ModifyPrometheusConfigRequest: ModifyPrometheusConfigRequest,
    AutoScalingGroupRange: AutoScalingGroupRange,
    DescribePrometheusGlobalNotificationRequest: DescribePrometheusGlobalNotificationRequest,
    ClusterPublicLB: ClusterPublicLB,
    DescribePrometheusTemplateSyncResponse: DescribePrometheusTemplateSyncResponse,
    ModifyPrometheusTemplateResponse: ModifyPrometheusTemplateResponse,
    ModifyPrometheusAlertPolicyResponse: ModifyPrometheusAlertPolicyResponse,
    DescribePrometheusClusterAgentsResponse: DescribePrometheusClusterAgentsResponse,
    CreatePrometheusConfigResponse: CreatePrometheusConfigResponse,
    DescribeClusterAuthenticationOptionsRequest: DescribeClusterAuthenticationOptionsRequest,
    DescribeEksContainerInstanceLogResponse: DescribeEksContainerInstanceLogResponse,
    DeleteEKSClusterResponse: DeleteEKSClusterResponse,
    VersionInstance: VersionInstance,
    EksCi: EksCi,
    UpdateImageCacheResponse: UpdateImageCacheResponse,
    CreatePrometheusConfigRequest: CreatePrometheusConfigRequest,
    CreateClusterVirtualNodeResponse: CreateClusterVirtualNodeResponse,
    ImageCacheEvent: ImageCacheEvent,
    CreatePrometheusClusterAgentRequest: CreatePrometheusClusterAgentRequest,
    DescribeClusterNodePoolsResponse: DescribeClusterNodePoolsResponse,
    DescribePrometheusInstancesOverviewResponse: DescribePrometheusInstancesOverviewResponse,
    DescribeEKSClusterCredentialRequest: DescribeEKSClusterCredentialRequest,
    EnableClusterDeletionProtectionRequest: EnableClusterDeletionProtectionRequest,
    RestartEKSContainerInstancesRequest: RestartEKSContainerInstancesRequest,
    DrainClusterVirtualNodeRequest: DrainClusterVirtualNodeRequest,
    DescribeClusterLevelAttributeRequest: DescribeClusterLevelAttributeRequest,
    DescribeClusterReleaseDetailsRequest: DescribeClusterReleaseDetailsRequest,
    CreateECMInstancesRequest: CreateECMInstancesRequest,
    DescribeClusterReleasesRequest: DescribeClusterReleasesRequest,
    ClusterCredential: ClusterCredential,
    DescribePrometheusOverviewsRequest: DescribePrometheusOverviewsRequest,
    DescribeClusterPendingReleasesResponse: DescribeClusterPendingReleasesResponse,
    DataDisk: DataDisk,
    DeleteEKSClusterRequest: DeleteEKSClusterRequest,
    GetUpgradeInstanceProgressResponse: GetUpgradeInstanceProgressResponse,
    DescribeExistedInstancesResponse: DescribeExistedInstancesResponse,
    CreatePrometheusTemplateRequest: CreatePrometheusTemplateRequest,
    DescribeEKSContainerInstancesResponse: DescribeEKSContainerInstancesResponse,
    CreatePrometheusAlertRuleResponse: CreatePrometheusAlertRuleResponse,
    ECMEnhancedService: ECMEnhancedService,
    ModifyClusterAuthenticationOptionsResponse: ModifyClusterAuthenticationOptionsResponse,
    EdgeClusterPublicLB: EdgeClusterPublicLB,
    EnableEventPersistenceResponse: EnableEventPersistenceResponse,
    EnhancedService: EnhancedService,
    DeleteEKSContainerInstancesResponse: DeleteEKSContainerInstancesResponse,
    UninstallLogAgentRequest: UninstallLogAgentRequest,
    TcpSocket: TcpSocket,
    TagSpecification: TagSpecification,
    PrometheusNotificationItem: PrometheusNotificationItem,
    DeleteEdgeClusterInstancesResponse: DeleteEdgeClusterInstancesResponse,
    DeleteTKEEdgeClusterRequest: DeleteTKEEdgeClusterRequest,
    CreatePrometheusGlobalNotificationResponse: CreatePrometheusGlobalNotificationResponse,
    DescribeClusterAuthenticationOptionsResponse: DescribeClusterAuthenticationOptionsResponse,
    DeletePrometheusClusterAgentResponse: DeletePrometheusClusterAgentResponse,
    CreateClusterReleaseRequest: CreateClusterReleaseRequest,
    DescribePrometheusAgentsRequest: DescribePrometheusAgentsRequest,
    AddClusterCIDRResponse: AddClusterCIDRResponse,
    ReleaseDetails: ReleaseDetails,
    DescribePrometheusInstanceInitStatusRequest: DescribePrometheusInstanceInitStatusRequest,
    DescribeClusterLevelAttributeResponse: DescribeClusterLevelAttributeResponse,
    PrometheusGrafanaInfo: PrometheusGrafanaInfo,
    ImageInstance: ImageInstance,
    CreatePrometheusAlertPolicyRequest: CreatePrometheusAlertPolicyRequest,
    DescribeImageCachesResponse: DescribeImageCachesResponse,
    ResourceUsageDetail: ResourceUsageDetail,
    DescribeClusterVirtualNodePoolsResponse: DescribeClusterVirtualNodePoolsResponse,
    CheckEdgeClusterCIDRResponse: CheckEdgeClusterCIDRResponse,
    DescribePrometheusClusterAgentsRequest: DescribePrometheusClusterAgentsRequest,
    EdgeArgsFlag: EdgeArgsFlag,
    CheckInstancesUpgradeAbleResponse: CheckInstancesUpgradeAbleResponse,
    CreatePrometheusTempRequest: CreatePrometheusTempRequest,
    CreatePrometheusDashboardRequest: CreatePrometheusDashboardRequest,
    DeleteClusterRouteTableResponse: DeleteClusterRouteTableResponse,
    DisableClusterDeletionProtectionRequest: DisableClusterDeletionProtectionRequest,
    PrometheusJobTargets: PrometheusJobTargets,
    ModifyClusterAsGroupOptionAttributeResponse: ModifyClusterAsGroupOptionAttributeResponse,
    UninstallLogAgentResponse: UninstallLogAgentResponse,
    PrometheusClusterAgentBasic: PrometheusClusterAgentBasic,
    DeleteTKEEdgeClusterResponse: DeleteTKEEdgeClusterResponse,
    CreatePrometheusTempResponse: CreatePrometheusTempResponse,
    DescribePrometheusTargetsRequest: DescribePrometheusTargetsRequest,
    RunPrometheusInstanceResponse: RunPrometheusInstanceResponse,
    DeletePrometheusTemplateSyncResponse: DeletePrometheusTemplateSyncResponse,
    DescribeClusterAsGroupsRequest: DescribeClusterAsGroupsRequest,
    ECMRunMonitorServiceEnabled: ECMRunMonitorServiceEnabled,
    SyncPrometheusTempRequest: SyncPrometheusTempRequest,
    ModifyClusterEndpointSPResponse: ModifyClusterEndpointSPResponse,
    ECMRunSecurityServiceEnabled: ECMRunSecurityServiceEnabled,
    SyncPrometheusTemplateResponse: SyncPrometheusTemplateResponse,
    UninstallClusterReleaseResponse: UninstallClusterReleaseResponse,
    ClusterAsGroupAttribute: ClusterAsGroupAttribute,
    ForwardTKEEdgeApplicationRequestV3Request: ForwardTKEEdgeApplicationRequestV3Request,
    DisableEventPersistenceRequest: DisableEventPersistenceRequest,
    RunMonitorServiceEnabled: RunMonitorServiceEnabled,
    CreateEKSContainerInstancesRequest: CreateEKSContainerInstancesRequest,
    DescribeTKEEdgeClusterCredentialResponse: DescribeTKEEdgeClusterCredentialResponse,
    InstanceAdvancedSettings: InstanceAdvancedSettings,
    CancelClusterReleaseResponse: CancelClusterReleaseResponse,
    UpdateEdgeClusterVersionResponse: UpdateEdgeClusterVersionResponse,
    ModifyClusterAsGroupAttributeRequest: ModifyClusterAsGroupAttributeRequest,
    DescribeClusterAsGroupsResponse: DescribeClusterAsGroupsResponse,
    DescribePrometheusConfigResponse: DescribePrometheusConfigResponse,
    ScaleOutClusterMasterRequest: ScaleOutClusterMasterRequest,
    DeleteClusterInstancesResponse: DeleteClusterInstancesResponse,
    CreatePrometheusGlobalNotificationRequest: CreatePrometheusGlobalNotificationRequest,
    ModifyPrometheusTempResponse: ModifyPrometheusTempResponse,
    PrometheusAlertRuleDetail: PrometheusAlertRuleDetail,
    ReleaseHistory: ReleaseHistory,
    DescribeClusterInstancesResponse: DescribeClusterInstancesResponse,
    CreatePrometheusAlertRuleRequest: CreatePrometheusAlertRuleRequest,
    UpdateEKSClusterRequest: UpdateEKSClusterRequest,
    CreateTKEEdgeClusterRequest: CreateTKEEdgeClusterRequest,
    CreateClusterVirtualNodePoolResponse: CreateClusterVirtualNodePoolResponse,
    CreateEKSClusterResponse: CreateEKSClusterResponse,
    CreateImageCacheResponse: CreateImageCacheResponse,
    CreateEdgeLogConfigResponse: CreateEdgeLogConfigResponse,
    DescribeAvailableTKEEdgeVersionResponse: DescribeAvailableTKEEdgeVersionResponse,
    ModifyPrometheusRecordRuleYamlRequest: ModifyPrometheusRecordRuleYamlRequest,
    DeletePrometheusAlertPolicyResponse: DeletePrometheusAlertPolicyResponse,
    InstallEdgeLogAgentResponse: InstallEdgeLogAgentResponse,
    EdgeAvailableExtraArgs: EdgeAvailableExtraArgs,
    IPAddress: IPAddress,
    DescribeTKEEdgeClusterCredentialRequest: DescribeTKEEdgeClusterCredentialRequest,
    AutoUpgradeClusterLevel: AutoUpgradeClusterLevel,
    CreateEKSClusterRequest: CreateEKSClusterRequest,
    CommonName: CommonName,
    EnableEventPersistenceRequest: EnableEventPersistenceRequest,
    ModifyClusterVirtualNodePoolRequest: ModifyClusterVirtualNodePoolRequest,
    DescribeRegionsResponse: DescribeRegionsResponse,
    CreateClusterRouteResponse: CreateClusterRouteResponse,
    Release: Release,
    DescribeEKSContainerInstanceRegionsRequest: DescribeEKSContainerInstanceRegionsRequest,
    DescribeECMInstancesRequest: DescribeECMInstancesRequest,
    DrainClusterVirtualNodeResponse: DrainClusterVirtualNodeResponse,
    DescribeVpcCniPodLimitsResponse: DescribeVpcCniPodLimitsResponse,
    DescribeVersionsResponse: DescribeVersionsResponse,
    ScaleInClusterMasterRequest: ScaleInClusterMasterRequest,
    DeleteEdgeClusterInstancesRequest: DeleteEdgeClusterInstancesRequest,
    PrometheusAlertRule: PrometheusAlertRule,
    VirtualNodeSpec: VirtualNodeSpec,
    ClusterNetworkSettings: ClusterNetworkSettings,
    DescribeImagesResponse: DescribeImagesResponse,
    ClusterExtraArgs: ClusterExtraArgs,
    DeleteClusterVirtualNodePoolResponse: DeleteClusterVirtualNodePoolResponse,
    CreateClusterEndpointVipResponse: CreateClusterEndpointVipResponse,
    TaskStepInfo: TaskStepInfo,
    ECMZoneInstanceCountISP: ECMZoneInstanceCountISP,
    DescribeRouteTableConflictsRequest: DescribeRouteTableConflictsRequest,
    DeleteClusterEndpointVipResponse: DeleteClusterEndpointVipResponse,
    ClusterBasicSettings: ClusterBasicSettings,
    PrometheusTemp: PrometheusTemp,
    InstanceDataDiskMountSetting: InstanceDataDiskMountSetting,
    ModifyClusterAsGroupAttributeResponse: ModifyClusterAsGroupAttributeResponse,
    DeletePrometheusTempRequest: DeletePrometheusTempRequest,
    DescribeTKEEdgeScriptResponse: DescribeTKEEdgeScriptResponse,
    DescribeClusterRouteTablesResponse: DescribeClusterRouteTablesResponse,
    DescribeClusterKubeconfigRequest: DescribeClusterKubeconfigRequest,
    DeletePrometheusTempSyncRequest: DeletePrometheusTempSyncRequest,
    CreatePrometheusTemplateResponse: CreatePrometheusTemplateResponse,
    CreateClusterEndpointVipRequest: CreateClusterEndpointVipRequest,
    ClusterInternalLB: ClusterInternalLB,
    DescribePrometheusGlobalConfigRequest: DescribePrometheusGlobalConfigRequest,
    CreateECMInstancesResponse: CreateECMInstancesResponse,
    ModifyPrometheusGlobalNotificationRequest: ModifyPrometheusGlobalNotificationRequest,
    UnavailableReason: UnavailableReason,
    GetUpgradeInstanceProgressRequest: GetUpgradeInstanceProgressRequest,
    UpdateEKSClusterResponse: UpdateEKSClusterResponse,
    DescribeEdgeCVMInstancesResponse: DescribeEdgeCVMInstancesResponse,
    Event: Event,
    ModifyNodePoolDesiredCapacityAboutAsgRequest: ModifyNodePoolDesiredCapacityAboutAsgRequest,
    DeleteClusterRouteResponse: DeleteClusterRouteResponse,
    DeletePrometheusConfigRequest: DeletePrometheusConfigRequest,
    DescribeEdgeClusterUpgradeInfoResponse: DescribeEdgeClusterUpgradeInfoResponse,
    ModifyClusterNodePoolResponse: ModifyClusterNodePoolResponse,
    PrometheusAlertPolicyItem: PrometheusAlertPolicyItem,
    ModifyPrometheusAgentExternalLabelsRequest: ModifyPrometheusAgentExternalLabelsRequest,
    EdgeClusterAdvancedSettings: EdgeClusterAdvancedSettings,
    PrometheusTarget: PrometheusTarget,
    LoginSettings: LoginSettings,
    DescribePrometheusTempResponse: DescribePrometheusTempResponse,
    SyncPrometheusTemplateRequest: SyncPrometheusTemplateRequest,
    DescribeClusterEndpointStatusRequest: DescribeClusterEndpointStatusRequest,
    DescribeClusterStatusResponse: DescribeClusterStatusResponse,
    ImageRegistryCredential: ImageRegistryCredential,
    DescribeRouteTableConflictsResponse: DescribeRouteTableConflictsResponse,
    DescribeVersionsRequest: DescribeVersionsRequest,
    DescribePrometheusTempRequest: DescribePrometheusTempRequest,
    DeleteClusterRouteTableRequest: DeleteClusterRouteTableRequest,
    DescribeClusterEndpointsRequest: DescribeClusterEndpointsRequest,
    InstanceExtraArgs: InstanceExtraArgs,
    AcquireClusterAdminRoleRequest: AcquireClusterAdminRoleRequest,
    DeletePrometheusTemplateResponse: DeletePrometheusTemplateResponse,
    DescribeECMInstancesResponse: DescribeECMInstancesResponse,
    DescribePrometheusInstanceRequest: DescribePrometheusInstanceRequest,
    DeletePrometheusAlertRuleRequest: DeletePrometheusAlertRuleRequest,
    CreateClusterReleaseResponse: CreateClusterReleaseResponse,
    EdgeClusterExtraArgs: EdgeClusterExtraArgs,
    DescribePrometheusTargetsResponse: DescribePrometheusTargetsResponse,
    DescribeEnableVpcCniProgressResponse: DescribeEnableVpcCniProgressResponse,
    PrometheusAgentOverview: PrometheusAgentOverview,
    AppChart: AppChart,
    DeleteEdgeCVMInstancesRequest: DeleteEdgeCVMInstancesRequest,
    ModifyClusterNodePoolRequest: ModifyClusterNodePoolRequest,
    InstallLogAgentResponse: InstallLogAgentResponse,
    GetClusterLevelPriceRequest: GetClusterLevelPriceRequest,
    CreateClusterEndpointResponse: CreateClusterEndpointResponse,
    ClusterAdvancedSettings: ClusterAdvancedSettings,
    ForwardApplicationRequestV3Response: ForwardApplicationRequestV3Response,
    ModifyClusterAuthenticationOptionsRequest: ModifyClusterAuthenticationOptionsRequest,
    DeleteClusterEndpointVipRequest: DeleteClusterEndpointVipRequest,
    LivenessOrReadinessProbe: LivenessOrReadinessProbe,
    DescribeClusterLevelChangeRecordsResponse: DescribeClusterLevelChangeRecordsResponse,
    ClusterStatus: ClusterStatus,
    DescribePrometheusAgentsResponse: DescribePrometheusAgentsResponse,
    DescribeVpcCniPodLimitsRequest: DescribeVpcCniPodLimitsRequest,
    DeleteImageCachesResponse: DeleteImageCachesResponse,
    DescribeEKSContainerInstanceRegionsResponse: DescribeEKSContainerInstanceRegionsResponse,
    ModifyPrometheusRecordRuleYamlResponse: ModifyPrometheusRecordRuleYamlResponse,
    DescribeTKEEdgeScriptRequest: DescribeTKEEdgeScriptRequest,
    AddVpcCniSubnetsResponse: AddVpcCniSubnetsResponse,
    ExistedInstancesForNode: ExistedInstancesForNode,
    DescribePrometheusOverviewsResponse: DescribePrometheusOverviewsResponse,
    DeletePrometheusRecordRuleYamlRequest: DeletePrometheusRecordRuleYamlRequest,
    InstanceUpgradePreCheckResult: InstanceUpgradePreCheckResult,
    ScaleInClusterMasterResponse: ScaleInClusterMasterResponse,
    DescribeAvailableClusterVersionResponse: DescribeAvailableClusterVersionResponse,
    DeleteEKSContainerInstancesRequest: DeleteEKSContainerInstancesRequest,
    DescribeClusterCommonNamesResponse: DescribeClusterCommonNamesResponse,
    DeleteECMInstancesResponse: DeleteECMInstancesResponse,
    PrometheusTemplate: PrometheusTemplate,
    GPUArgs: GPUArgs,
    RouteTableConflict: RouteTableConflict,
    PrometheusInstanceOverview: PrometheusInstanceOverview,
    DescribeClusterVirtualNodeResponse: DescribeClusterVirtualNodeResponse,
    ScaleInMaster: ScaleInMaster,
    RunPrometheusInstanceRequest: RunPrometheusInstanceRequest,
    PendingRelease: PendingRelease,

}
