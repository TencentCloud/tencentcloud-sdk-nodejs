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
         * 集群系统。centos7.2x86_64 或者 ubuntu16.04.1 LTSx86_64，默认取值为ubuntu16.04.1 LTSx86_64
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
         * 是否开启节点的默认安全组(默认: 否，Aphla特性)
         * @type {boolean || null}
         */
        this.NeedWorkSecurityGroup = null;

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
         * CVM创建透传参数，json化字符串格式，详见[CVM创建实例](https://cloud.tencent.com/document/product/213/15730)接口。
         * @type {string || null}
         */
        this.RunInstancePara = null;

        /**
         * 实例额外需要设置参数信息
         * @type {InstanceAdvancedSettings || null}
         */
        this.InstanceAdvancedSettings = null;

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
         * 集群中每个Node上最大的Pod数量。取值范围4～256。不为2的幂值时会向上取最接近的2的幂值。
         * @type {number || null}
         */
        this.MaxNodePodNum = null;

        /**
         * 集群最大的service数量。取值范围32～32768，不为2的幂值时会向上取最接近的2的幂值。
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
 * 集群master自定义参数
 * @class
 */
class ClusterExtraArgs extends  AbstractModel {
    constructor(){
        super();

        /**
         * kube-apiserver自定义参数
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
         * 密钥ID列表。关联密钥后，就可以通过对应的私钥来访问实例；KeyId可通过接口[DescribeKeyPairs](https://cloud.tencent.com/document/api/213/15699)获取，密钥与密码不能同时指定，同时Windows操作系统不支持指定密钥。当前仅支持购买的时候指定一个密钥。
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

    }
}

/**
 * CreateClusterAsGroup请求参数结构体
 * @class
 */
class CreateClusterAsGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 伸缩组创建透传参数，json化字符串格式，详见[伸缩组创建实例](https://cloud.tencent.com/document/api/377/20440)接口。LaunchConfigurationId由LaunchConfigurePara参数创建，不支持填写
         * @type {string || null}
         */
        this.AutoScalingGroupPara = null;

        /**
         * 启动配置创建透传参数，json化字符串格式，详见[创建启动配置](https://cloud.tencent.com/document/api/377/20447)接口。另外ImageId参数由于集群维度已经有的ImageId信息，这个字段不需要填写。UserData字段设置通过UserScript设置，这个字段不需要填写。
         * @type {string || null}
         */
        this.LaunchConfigurePara = null;

        /**
         * 节点高级配置信息
         * @type {InstanceAdvancedSettings || null}
         */
        this.InstanceAdvancedSettings = null;

        /**
         * 节点Label数组
         * @type {Array.<Label> || null}
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.AutoScalingGroupPara = 'AutoScalingGroupPara' in params ? params.AutoScalingGroupPara : null;
        this.LaunchConfigurePara = 'LaunchConfigurePara' in params ? params.LaunchConfigurePara : null;

        if (params.InstanceAdvancedSettings) {
            let obj = new InstanceAdvancedSettings();
            obj.deserialize(params.InstanceAdvancedSettings)
            this.InstanceAdvancedSettings = obj;
        }

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new Label();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }

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
         * 已存在实例的配置信息。所有实例必须在同一个VPC中，最大数量不超过100。
         * @type {Array.<ExistedInstancesForNode> || null}
         */
        this.ExistedInstancesForNode = null;

        /**
         * CVM类型和其对应的数据盘挂载配置信息
         * @type {Array.<InstanceDataDiskMountSetting> || null}
         */
        this.InstanceDataDiskMountSettings = null;

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
         * kubelet自定义参数
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
 * CreateClusterAsGroup返回参数结构体
 * @class
 */
class CreateClusterAsGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 启动配置ID
         * @type {string || null}
         */
        this.LaunchConfigurationId = null;

        /**
         * 伸缩组ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LaunchConfigurationId = 'LaunchConfigurationId' in params ? params.LaunchConfigurationId : null;
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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

    }
}

/**
 * >描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等
> * 若存在多个`Filter`时，`Filter`间的关系为逻辑与（`AND`）关系。
> * 若同一个`Filter`存在多个`Values`，同一`Filter`下`Values`间的关系为逻辑或（`OR`）关系。
>
> 以[DescribeInstances](https://cloud.tencent.com/document/api/213/15728)接口的`Filter`为例。若我们需要查询可用区（`zone`）为广州一区 ***并且*** 实例计费模式（`instance-charge-type`）为包年包月 ***或者*** 按量计费的实例时，可如下实现：
```
Filters.0.Name=zone
&Filters.0.Values.0=ap-guangzhou-1
&Filters.1.Name=instance-charge-type
&Filters.1.Values.0=PREPAID
&Filters.1.Values.1=POSTPAID_BY_HOUR
```
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
         * 集群的网络代理模型
         * @type {string || null}
         */
        this.KubeProxyMode = null;

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
         * 集群状态 (Running 运行中  Creating 创建中 Abnormal 异常  )
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
         * 查询集群访问端口状态（Created 开启成功，Creating 开启中中，NotFound 未开启）
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
        this.Status = 'Status' in params ? params.Status : null;
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
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 实例列表
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
         * 实例所属安全组。该参数可以通过调用 DescribeSecurityGroups 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。（目前仅支持设置单个sgId）
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
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.HostName = 'HostName' in params ? params.HostName : null;

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
 * 描述了k8s集群相关配置与信息。
 * @class
 */
class InstanceAdvancedSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据盘挂载点, 默认不挂载数据盘. 已格式化的 ext3，ext4，xfs 文件系统的数据盘将直接挂载，其他文件系统或未格式化的数据盘将自动格式化为ext4 并挂载，请注意备份数据! 无数据盘或有多块数据盘的云主机此设置不生效。
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
         * 数据盘相关信息
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

module.exports = {
    DescribeClusterEndpointVipStatusRequest: DescribeClusterEndpointVipStatusRequest,
    DescribeClusterSecurityResponse: DescribeClusterSecurityResponse,
    DescribeClusterSecurityRequest: DescribeClusterSecurityRequest,
    DeleteClusterInstancesResponse: DeleteClusterInstancesResponse,
    CreateClusterRouteRequest: CreateClusterRouteRequest,
    DescribeClusterEndpointVipStatusResponse: DescribeClusterEndpointVipStatusResponse,
    ModifyClusterEndpointSPRequest: ModifyClusterEndpointSPRequest,
    DescribeClusterInstancesResponse: DescribeClusterInstancesResponse,
    DeleteClusterResponse: DeleteClusterResponse,
    CreateClusterRouteTableResponse: CreateClusterRouteTableResponse,
    DeleteClusterEndpointResponse: DeleteClusterEndpointResponse,
    RouteInfo: RouteInfo,
    DeleteClusterRequest: DeleteClusterRequest,
    RunInstancesForNode: RunInstancesForNode,
    DeleteClusterAsGroupsRequest: DeleteClusterAsGroupsRequest,
    DescribeExistedInstancesRequest: DescribeExistedInstancesRequest,
    DescribeRegionsResponse: DescribeRegionsResponse,
    CreateClusterRouteResponse: CreateClusterRouteResponse,
    RouteTableInfo: RouteTableInfo,
    ClusterAsGroup: ClusterAsGroup,
    DescribeClusterEndpointStatusRequest: DescribeClusterEndpointStatusRequest,
    Tag: Tag,
    ClusterNetworkSettings: ClusterNetworkSettings,
    DescribeImagesResponse: DescribeImagesResponse,
    AutoScalingGroupRange: AutoScalingGroupRange,
    ModifyClusterAttributeRequest: ModifyClusterAttributeRequest,
    DeleteClusterRouteResponse: DeleteClusterRouteResponse,
    CreateClusterEndpointVipResponse: CreateClusterEndpointVipResponse,
    DescribeClusterRoutesResponse: DescribeClusterRoutesResponse,
    DescribeClustersRequest: DescribeClustersRequest,
    RegionInstance: RegionInstance,
    Label: Label,
    DeleteClusterEndpointVipResponse: DeleteClusterEndpointVipResponse,
    ClusterBasicSettings: ClusterBasicSettings,
    RouteTableConflict: RouteTableConflict,
    DeleteClusterInstancesRequest: DeleteClusterInstancesRequest,
    ModifyClusterAsGroupAttributeResponse: ModifyClusterAsGroupAttributeResponse,
    CreateClusterInstancesRequest: CreateClusterInstancesRequest,
    DescribeClusterRouteTablesResponse: DescribeClusterRouteTablesResponse,
    ClusterCIDRSettings: ClusterCIDRSettings,
    CreateClusterEndpointVipRequest: CreateClusterEndpointVipRequest,
    ExistedInstance: ExistedInstance,
    DescribeRouteTableConflictsResponse: DescribeRouteTableConflictsResponse,
    TagSpecification: TagSpecification,
    DescribeRegionsRequest: DescribeRegionsRequest,
    DescribeClustersResponse: DescribeClustersResponse,
    ClusterExtraArgs: ClusterExtraArgs,
    DataDisk: DataDisk,
    DescribeExistedInstancesResponse: DescribeExistedInstancesResponse,
    ResourceDeleteOption: ResourceDeleteOption,
    LoginSettings: LoginSettings,
    Instance: Instance,
    EnhancedService: EnhancedService,
    CreateClusterAsGroupRequest: CreateClusterAsGroupRequest,
    CreateClusterResponse: CreateClusterResponse,
    RunSecurityServiceEnabled: RunSecurityServiceEnabled,
    DeleteClusterRouteTableRequest: DeleteClusterRouteTableRequest,
    CreateClusterRequest: CreateClusterRequest,
    InstanceExtraArgs: InstanceExtraArgs,
    CreateClusterAsGroupResponse: CreateClusterAsGroupResponse,
    DeleteClusterAsGroupsResponse: DeleteClusterAsGroupsResponse,
    DescribeClusterInstancesRequest: DescribeClusterInstancesRequest,
    Filter: Filter,
    ImageInstance: ImageInstance,
    CreateClusterEndpointResponse: CreateClusterEndpointResponse,
    ClusterAdvancedSettings: ClusterAdvancedSettings,
    DeleteClusterEndpointVipRequest: DeleteClusterEndpointVipRequest,
    Cluster: Cluster,
    DescribeClusterEndpointStatusResponse: DescribeClusterEndpointStatusResponse,
    AddExistedInstancesResponse: AddExistedInstancesResponse,
    DeleteClusterRouteTableResponse: DeleteClusterRouteTableResponse,
    DescribeClusterAsGroupOptionRequest: DescribeClusterAsGroupOptionRequest,
    ModifyClusterAttributeResponse: ModifyClusterAttributeResponse,
    CreateClusterEndpointRequest: CreateClusterEndpointRequest,
    AddExistedInstancesRequest: AddExistedInstancesRequest,
    ClusterAsGroupOption: ClusterAsGroupOption,
    CreateClusterInstancesResponse: CreateClusterInstancesResponse,
    DescribeClusterRouteTablesRequest: DescribeClusterRouteTablesRequest,
    ExistedInstancesForNode: ExistedInstancesForNode,
    DescribeClusterRoutesRequest: DescribeClusterRoutesRequest,
    DeleteClusterRouteRequest: DeleteClusterRouteRequest,
    DeleteClusterEndpointRequest: DeleteClusterEndpointRequest,
    CreateClusterRouteTableRequest: CreateClusterRouteTableRequest,
    DescribeClusterAsGroupsRequest: DescribeClusterAsGroupsRequest,
    DescribeImagesRequest: DescribeImagesRequest,
    ModifyClusterEndpointSPResponse: ModifyClusterEndpointSPResponse,
    DescribeRouteTableConflictsRequest: DescribeRouteTableConflictsRequest,
    ExistedInstancesPara: ExistedInstancesPara,
    DescribeClusterAsGroupOptionResponse: DescribeClusterAsGroupOptionResponse,
    ClusterAsGroupAttribute: ClusterAsGroupAttribute,
    RunMonitorServiceEnabled: RunMonitorServiceEnabled,
    InstanceAdvancedSettings: InstanceAdvancedSettings,
    ModifyClusterAsGroupAttributeRequest: ModifyClusterAsGroupAttributeRequest,
    InstanceDataDiskMountSetting: InstanceDataDiskMountSetting,
    DescribeClusterAsGroupsResponse: DescribeClusterAsGroupsResponse,

}
