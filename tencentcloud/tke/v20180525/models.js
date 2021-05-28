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
 * CreateEKSCluster请求参数结构体
 * @class
 */
class CreateEKSClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * k8s版本号。可为1.14.4, 1.12.8。
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
         * Serivce 所在子网Id
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

    }
}

/**
 * CreateClusterNodePoolFromExistingAsg请求参数结构体
 * @class
 */
class CreateClusterNodePoolFromExistingAsgRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 伸缩组ID
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.AutoscalingGroupId = 'AutoscalingGroupId' in params ? params.AutoscalingGroupId : null;

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
         * 集群的认证信息
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
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * CreateClusterNodePoolFromExistingAsg返回参数结构体
 * @class
 */
class CreateClusterNodePoolFromExistingAsgResponse extends  AbstractModel {
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
 * 描述了k8s集群相关配置与信息。
 * @class
 */
class InstanceAdvancedSettings extends  AbstractModel {
    constructor(){
        super();

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
         * 多盘数据盘挂载信息，同时请确保购买CVM的参数传递了购买多个数据盘的信息，如添加节点CreateClusterInstances API的RunInstancesPara下的DataDisks也设置了购买多个数据盘, 具体可以参考CreateClusterInstances接口的，添加集群节点(多块数据盘)样例；注意：此参数在调用接口AddExistedInstances时不起作用
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

        /**
         * 该节点属于podCIDR大小自定义模式时，可指定节点上运行的pod数量上限
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DesiredPodNumber = null;

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
        this.DesiredPodNumber = 'DesiredPodNumber' in params ? params.DesiredPodNumber : null;

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
         * AutoScalingGroupPara AS组参数
         * @type {string || null}
         */
        this.AutoScalingGroupPara = null;

        /**
         * LaunchConfigurePara 运行参数
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
         * 节点池os
         * @type {string || null}
         */
        this.NodePoolOs = null;

        /**
         * 容器的镜像版本，"DOCKER_CUSTOMIZE"(容器定制版),"GENERAL"(普通版本，默认值)
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
        this.NodePoolOs = 'NodePoolOs' in params ? params.NodePoolOs : null;
        this.OsCustomizeType = 'OsCustomizeType' in params ? params.OsCustomizeType : null;

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
         * 区分单网卡多IP模式和独立网卡模式
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
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
         * 节点id列表
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

module.exports = {
    EnableVpcCniNetworkTypeRequest: EnableVpcCniNetworkTypeRequest,
    DescribeClusterEndpointVipStatusRequest: DescribeClusterEndpointVipStatusRequest,
    DescribeClusterSecurityResponse: DescribeClusterSecurityResponse,
    DescribeClusterSecurityRequest: DescribeClusterSecurityRequest,
    DeleteClusterInstancesResponse: DeleteClusterInstancesResponse,
    ModifyNodePoolDesiredCapacityAboutAsgResponse: ModifyNodePoolDesiredCapacityAboutAsgResponse,
    ModifyClusterNodePoolResponse: ModifyClusterNodePoolResponse,
    DescribeClusterKubeconfigResponse: DescribeClusterKubeconfigResponse,
    RemoveNodeFromNodePoolResponse: RemoveNodeFromNodePoolResponse,
    CreateClusterRouteRequest: CreateClusterRouteRequest,
    DescribeClusterEndpointVipStatusResponse: DescribeClusterEndpointVipStatusResponse,
    ModifyClusterEndpointSPRequest: ModifyClusterEndpointSPRequest,
    DescribeClusterInstancesResponse: DescribeClusterInstancesResponse,
    DeleteClusterResponse: DeleteClusterResponse,
    AutoscalingAdded: AutoscalingAdded,
    DescribePrometheusTemplateSyncResponse: DescribePrometheusTemplateSyncResponse,
    UpdateEKSClusterRequest: UpdateEKSClusterRequest,
    CreateClusterRouteTableResponse: CreateClusterRouteTableResponse,
    DescribeClusterCommonNamesRequest: DescribeClusterCommonNamesRequest,
    DeleteClusterEndpointResponse: DeleteClusterEndpointResponse,
    PrometheusTemplateModify: PrometheusTemplateModify,
    PrometheusNotification: PrometheusNotification,
    ClusterVersion: ClusterVersion,
    CreatePrometheusTemplateRequest: CreatePrometheusTemplateRequest,
    DeletePrometheusTemplateRequest: DeletePrometheusTemplateRequest,
    InstanceUpgradeProgressItem: InstanceUpgradeProgressItem,
    NodePool: NodePool,
    DescribeEKSClustersResponse: DescribeEKSClustersResponse,
    RouteTableInfo: RouteTableInfo,
    IPAddress: IPAddress,
    DeleteClusterRequest: DeleteClusterRequest,
    PrometheusTarget: PrometheusTarget,
    CreateEKSClusterRequest: CreateEKSClusterRequest,
    DeleteClusterAsGroupsRequest: DeleteClusterAsGroupsRequest,
    DescribeExistedInstancesRequest: DescribeExistedInstancesRequest,
    Tag: Tag,
    DescribeRegionsResponse: DescribeRegionsResponse,
    PrometheusAlertHistoryItem: PrometheusAlertHistoryItem,
    CreateClusterRouteResponse: CreateClusterRouteResponse,
    PrometheusTemplateSyncTarget: PrometheusTemplateSyncTarget,
    DescribePrometheusTemplatesRequest: DescribePrometheusTemplatesRequest,
    AddNodeToNodePoolRequest: AddNodeToNodePoolRequest,
    EnableVpcCniNetworkTypeResponse: EnableVpcCniNetworkTypeResponse,
    DescribePrometheusAlertRuleResponse: DescribePrometheusAlertRuleResponse,
    ClusterAsGroup: ClusterAsGroup,
    Instance: Instance,
    PrometheusAlertRuleDetail: PrometheusAlertRuleDetail,
    UpgradeAbleInstancesItem: UpgradeAbleInstancesItem,
    CreateClusterNodePoolFromExistingAsgRequest: CreateClusterNodePoolFromExistingAsgRequest,
    PrometheusAlertRule: PrometheusAlertRule,
    DescribePrometheusAgentInstancesRequest: DescribePrometheusAgentInstancesRequest,
    ClusterNetworkSettings: ClusterNetworkSettings,
    DescribeImagesResponse: DescribeImagesResponse,
    AutoScalingGroupRange: AutoScalingGroupRange,
    ModifyClusterAttributeRequest: ModifyClusterAttributeRequest,
    DeleteClusterRouteResponse: DeleteClusterRouteResponse,
    ModifyClusterEndpointSPResponse: ModifyClusterEndpointSPResponse,
    CreateClusterEndpointVipResponse: CreateClusterEndpointVipResponse,
    DescribeClusterRoutesResponse: DescribeClusterRoutesResponse,
    DescribeClustersRequest: DescribeClustersRequest,
    UpgradeClusterInstancesRequest: UpgradeClusterInstancesRequest,
    ClusterPublicLB: ClusterPublicLB,
    ExtensionAddon: ExtensionAddon,
    RegionInstance: RegionInstance,
    Label: Label,
    DescribePrometheusAlertHistoryRequest: DescribePrometheusAlertHistoryRequest,
    DeletePrometheusTemplateSyncRequest: DeletePrometheusTemplateSyncRequest,
    SetNodePoolNodeProtectionResponse: SetNodePoolNodeProtectionResponse,
    DescribePrometheusTemplatesResponse: DescribePrometheusTemplatesResponse,
    DeleteClusterEndpointVipResponse: DeleteClusterEndpointVipResponse,
    SyncPrometheusTemplateRequest: SyncPrometheusTemplateRequest,
    ClusterBasicSettings: ClusterBasicSettings,
    CreatePrometheusDashboardResponse: CreatePrometheusDashboardResponse,
    DescribeEKSClusterCredentialResponse: DescribeEKSClusterCredentialResponse,
    DeleteClusterInstancesRequest: DeleteClusterInstancesRequest,
    UpgradeNodeResetParam: UpgradeNodeResetParam,
    ModifyClusterAsGroupAttributeResponse: ModifyClusterAsGroupAttributeResponse,
    CreateClusterInstancesRequest: CreateClusterInstancesRequest,
    ManuallyAdded: ManuallyAdded,
    DeleteEKSClusterResponse: DeleteEKSClusterResponse,
    PrometheusConfigItem: PrometheusConfigItem,
    DeleteClusterNodePoolRequest: DeleteClusterNodePoolRequest,
    DescribeClusterKubeconfigRequest: DescribeClusterKubeconfigRequest,
    ClusterCIDRSettings: ClusterCIDRSettings,
    CreatePrometheusTemplateResponse: CreatePrometheusTemplateResponse,
    CreateClusterEndpointVipRequest: CreateClusterEndpointVipRequest,
    RouteInfo: RouteInfo,
    ClusterInternalLB: ClusterInternalLB,
    Taint: Taint,
    CheckInstancesUpgradeAbleRequest: CheckInstancesUpgradeAbleRequest,
    ExistedInstance: ExistedInstance,
    DescribeClusterNodePoolsResponse: DescribeClusterNodePoolsResponse,
    DescribePrometheusAlertRuleRequest: DescribePrometheusAlertRuleRequest,
    DescribeEKSClusterCredentialRequest: DescribeEKSClusterCredentialRequest,
    GetUpgradeInstanceProgressRequest: GetUpgradeInstanceProgressRequest,
    ModifyPrometheusTemplateRequest: ModifyPrometheusTemplateRequest,
    AddNodeToNodePoolResponse: AddNodeToNodePoolResponse,
    UpdateEKSClusterResponse: UpdateEKSClusterResponse,
    TagSpecification: TagSpecification,
    DescribeRegionsRequest: DescribeRegionsRequest,
    DescribeClustersResponse: DescribeClustersResponse,
    ClusterCredential: ClusterCredential,
    LoginSettings: LoginSettings,
    DescribePrometheusOverviewsRequest: DescribePrometheusOverviewsRequest,
    ClusterExtraArgs: ClusterExtraArgs,
    DescribeRouteTableConflictsRequest: DescribeRouteTableConflictsRequest,
    SyncPrometheusTemplateResponse: SyncPrometheusTemplateResponse,
    DataDisk: DataDisk,
    DeleteEKSClusterRequest: DeleteEKSClusterRequest,
    GetUpgradeInstanceProgressResponse: GetUpgradeInstanceProgressResponse,
    DescribeExistedInstancesResponse: DescribeExistedInstancesResponse,
    CreateEKSClusterResponse: CreateEKSClusterResponse,
    DescribeEKSClustersRequest: DescribeEKSClustersRequest,
    ResourceDeleteOption: ResourceDeleteOption,
    DnsServerConf: DnsServerConf,
    EksCluster: EksCluster,
    CreateClusterNodePoolFromExistingAsgResponse: CreateClusterNodePoolFromExistingAsgResponse,
    DescribeEnableVpcCniProgressRequest: DescribeEnableVpcCniProgressRequest,
    DescribeClusterEndpointStatusRequest: DescribeClusterEndpointStatusRequest,
    ModifyClusterAttributeResponse: ModifyClusterAttributeResponse,
    EnhancedService: EnhancedService,
    CreateClusterAsGroupRequest: CreateClusterAsGroupRequest,
    DescribeRouteTableConflictsResponse: DescribeRouteTableConflictsResponse,
    CreateClusterResponse: CreateClusterResponse,
    TaskStepInfo: TaskStepInfo,
    RunSecurityServiceEnabled: RunSecurityServiceEnabled,
    DeleteClusterRouteTableRequest: DeleteClusterRouteTableRequest,
    DescribeAvailableClusterVersionRequest: DescribeAvailableClusterVersionRequest,
    CreateClusterRequest: CreateClusterRequest,
    InstanceExtraArgs: InstanceExtraArgs,
    AcquireClusterAdminRoleRequest: AcquireClusterAdminRoleRequest,
    CreateClusterAsGroupResponse: CreateClusterAsGroupResponse,
    DeleteClusterAsGroupsResponse: DeleteClusterAsGroupsResponse,
    DescribeClusterInstancesRequest: DescribeClusterInstancesRequest,
    InstanceAdvancedSettings: InstanceAdvancedSettings,
    DescribePrometheusAgentsRequest: DescribePrometheusAgentsRequest,
    DescribeEnableVpcCniProgressResponse: DescribeEnableVpcCniProgressResponse,
    PrometheusAgentOverview: PrometheusAgentOverview,
    Filter: Filter,
    ModifyClusterNodePoolRequest: ModifyClusterNodePoolRequest,
    ImageInstance: ImageInstance,
    CreateClusterEndpointResponse: CreateClusterEndpointResponse,
    CreateClusterNodePoolRequest: CreateClusterNodePoolRequest,
    ClusterAdvancedSettings: ClusterAdvancedSettings,
    AcquireClusterAdminRoleResponse: AcquireClusterAdminRoleResponse,
    ModifyPrometheusTemplateResponse: ModifyPrometheusTemplateResponse,
    DeletePrometheusTemplateResponse: DeletePrometheusTemplateResponse,
    DescribePrometheusTemplateSyncRequest: DescribePrometheusTemplateSyncRequest,
    DeleteClusterEndpointVipRequest: DeleteClusterEndpointVipRequest,
    CheckInstancesUpgradeAbleResponse: CheckInstancesUpgradeAbleResponse,
    Cluster: Cluster,
    DescribeClusterEndpointStatusResponse: DescribeClusterEndpointStatusResponse,
    UpgradeClusterInstancesResponse: UpgradeClusterInstancesResponse,
    CreatePrometheusDashboardRequest: CreatePrometheusDashboardRequest,
    DescribePrometheusAgentsResponse: DescribePrometheusAgentsResponse,
    AddExistedInstancesResponse: AddExistedInstancesResponse,
    DeleteClusterRouteTableResponse: DeleteClusterRouteTableResponse,
    CreateClusterInstancesResponse: CreateClusterInstancesResponse,
    DescribeClusterAsGroupOptionRequest: DescribeClusterAsGroupOptionRequest,
    DescribePrometheusAgentInstancesResponse: DescribePrometheusAgentInstancesResponse,
    CreateClusterEndpointRequest: CreateClusterEndpointRequest,
    PrometheusJobTargets: PrometheusJobTargets,
    ModifyClusterAsGroupOptionAttributeResponse: ModifyClusterAsGroupOptionAttributeResponse,
    AddExistedInstancesRequest: AddExistedInstancesRequest,
    ClusterAsGroupOption: ClusterAsGroupOption,
    AddVpcCniSubnetsResponse: AddVpcCniSubnetsResponse,
    ModifyNodePoolDesiredCapacityAboutAsgRequest: ModifyNodePoolDesiredCapacityAboutAsgRequest,
    DescribeClusterNodePoolsRequest: DescribeClusterNodePoolsRequest,
    DescribeClusterRouteTablesRequest: DescribeClusterRouteTablesRequest,
    ModifyClusterAsGroupOptionAttributeRequest: ModifyClusterAsGroupOptionAttributeRequest,
    ExistedInstancesForNode: ExistedInstancesForNode,
    InstanceUpgradeClusterStatus: InstanceUpgradeClusterStatus,
    RunInstancesForNode: RunInstancesForNode,
    DescribeClusterRoutesRequest: DescribeClusterRoutesRequest,
    DeleteClusterRouteRequest: DeleteClusterRouteRequest,
    DescribePrometheusOverviewsResponse: DescribePrometheusOverviewsResponse,
    DeleteClusterEndpointRequest: DeleteClusterEndpointRequest,
    DescribePrometheusTargetsRequest: DescribePrometheusTargetsRequest,
    DescribePrometheusTargetsResponse: DescribePrometheusTargetsResponse,
    DescribeClusterNodePoolDetailRequest: DescribeClusterNodePoolDetailRequest,
    SetNodePoolNodeProtectionRequest: SetNodePoolNodeProtectionRequest,
    DeletePrometheusTemplateSyncResponse: DeletePrometheusTemplateSyncResponse,
    CreateClusterRouteTableRequest: CreateClusterRouteTableRequest,
    RemoveNodeFromNodePoolRequest: RemoveNodeFromNodePoolRequest,
    DescribeClusterAsGroupsRequest: DescribeClusterAsGroupsRequest,
    DescribeImagesRequest: DescribeImagesRequest,
    DescribeAvailableClusterVersionResponse: DescribeAvailableClusterVersionResponse,
    DescribeClusterRouteTablesResponse: DescribeClusterRouteTablesResponse,
    AddVpcCniSubnetsRequest: AddVpcCniSubnetsRequest,
    InstanceUpgradePreCheckResultItem: InstanceUpgradePreCheckResultItem,
    DescribePrometheusAlertHistoryResponse: DescribePrometheusAlertHistoryResponse,
    DescribeClusterCommonNamesResponse: DescribeClusterCommonNamesResponse,
    ExistedInstancesPara: ExistedInstancesPara,
    CommonName: CommonName,
    DescribeClusterAsGroupOptionResponse: DescribeClusterAsGroupOptionResponse,
    ClusterAsGroupAttribute: ClusterAsGroupAttribute,
    DeleteClusterNodePoolResponse: DeleteClusterNodePoolResponse,
    PrometheusTemplate: PrometheusTemplate,
    RunMonitorServiceEnabled: RunMonitorServiceEnabled,
    UpdateClusterVersionResponse: UpdateClusterVersionResponse,
    RouteTableConflict: RouteTableConflict,
    CreateClusterNodePoolResponse: CreateClusterNodePoolResponse,
    NodePoolOption: NodePoolOption,
    ModifyClusterAsGroupAttributeRequest: ModifyClusterAsGroupAttributeRequest,
    UpdateClusterVersionRequest: UpdateClusterVersionRequest,
    InstanceDataDiskMountSetting: InstanceDataDiskMountSetting,
    PrometheusInstanceOverview: PrometheusInstanceOverview,
    NodeCountSummary: NodeCountSummary,
    DescribeClusterAsGroupsResponse: DescribeClusterAsGroupsResponse,
    InstanceUpgradePreCheckResult: InstanceUpgradePreCheckResult,
    DescribeClusterNodePoolDetailResponse: DescribeClusterNodePoolDetailResponse,

}
