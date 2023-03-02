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
 * HPA 配置
 * @class
 */
class HorizontalPodAutoscalerSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * 最小副本数
         * @type {number || null}
         */
        this.MinReplicas = null;

        /**
         * 最大副本数
         * @type {number || null}
         */
        this.MaxReplicas = null;

        /**
         * 用于计算副本数的指标
         * @type {Array.<MetricSpec> || null}
         */
        this.Metrics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MinReplicas = 'MinReplicas' in params ? params.MinReplicas : null;
        this.MaxReplicas = 'MaxReplicas' in params ? params.MaxReplicas : null;

        if (params.Metrics) {
            this.Metrics = new Array();
            for (let z in params.Metrics) {
                let obj = new MetricSpec();
                obj.deserialize(params.Metrics[z]);
                this.Metrics.push(obj);
            }
        }

    }
}

/**
 * 第三方 Prometheus 配置参数
 * @class
 */
class CustomPromConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prometheus 访问地址
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 认证方式
         * @type {string || null}
         */
        this.AuthType = null;

        /**
         * 是否公网地址，缺省为 false
         * @type {boolean || null}
         */
        this.IsPublicAddr = null;

        /**
         * 虚拟网络id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Prometheus 用户名（用于 basic 认证方式）
         * @type {string || null}
         */
        this.Username = null;

        /**
         * Prometheus 密码（用于 basic 认证方式）
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
        this.Url = 'Url' in params ? params.Url : null;
        this.AuthType = 'AuthType' in params ? params.AuthType : null;
        this.IsPublicAddr = 'IsPublicAddr' in params ? params.IsPublicAddr : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * Service信息
 * @class
 */
class Service extends  AbstractModel {
    constructor(){
        super();

        /**
         * ClusterIP/NodePort/LoadBalancer
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 是否开启LB直通Pod
         * @type {boolean || null}
         */
        this.CLBDirectAccess = null;

        /**
         * 服务是否希望将外部流量路由到节点本地或集群范围的端点。 有两个可用选项：Cluster（默认）和 Local。Cluster 隐藏了客户端源 IP，可能导致第二跳到另一个节点；Local 保留客户端源 IP 并避免 LoadBalancer 和 NodePort 类型服务的第二跳。
         * @type {string || null}
         */
        this.ExternalTrafficPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.CLBDirectAccess = 'CLBDirectAccess' in params ? params.CLBDirectAccess : null;
        this.ExternalTrafficPolicy = 'ExternalTrafficPolicy' in params ? params.ExternalTrafficPolicy : null;

    }
}

/**
 * 网格配置项
 * @class
 */
class MeshConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Istio配置
         * @type {IstioConfig || null}
         */
        this.Istio = null;

        /**
         * AccessLog配置
         * @type {AccessLogConfig || null}
         */
        this.AccessLog = null;

        /**
         * Prometheus配置
         * @type {PrometheusConfig || null}
         */
        this.Prometheus = null;

        /**
         * 自动注入配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {InjectConfig || null}
         */
        this.Inject = null;

        /**
         * 调用跟踪配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TracingConfig || null}
         */
        this.Tracing = null;

        /**
         * Sidecar自定义资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ResourceRequirements || null}
         */
        this.SidecarResources = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Istio) {
            let obj = new IstioConfig();
            obj.deserialize(params.Istio)
            this.Istio = obj;
        }

        if (params.AccessLog) {
            let obj = new AccessLogConfig();
            obj.deserialize(params.AccessLog)
            this.AccessLog = obj;
        }

        if (params.Prometheus) {
            let obj = new PrometheusConfig();
            obj.deserialize(params.Prometheus)
            this.Prometheus = obj;
        }

        if (params.Inject) {
            let obj = new InjectConfig();
            obj.deserialize(params.Inject)
            this.Inject = obj;
        }

        if (params.Tracing) {
            let obj = new TracingConfig();
            obj.deserialize(params.Tracing)
            this.Tracing = obj;
        }

        if (params.SidecarResources) {
            let obj = new ResourceRequirements();
            obj.deserialize(params.SidecarResources)
            this.SidecarResources = obj;
        }

    }
}

/**
 * UnlinkPrometheus返回参数结构体
 * @class
 */
class UnlinkPrometheusResponse extends  AbstractModel {
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
 * 负载均衡状态信息
 * @class
 */
class LoadBalancerStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例 ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡实例名字
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * 负载均衡实例 VIP
         * @type {string || null}
         */
        this.LoadBalancerVip = null;

        /**
         * 负载均衡实例 Hostname
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LoadBalancerHostname = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;
        this.LoadBalancerVip = 'LoadBalancerVip' in params ? params.LoadBalancerVip : null;
        this.LoadBalancerHostname = 'LoadBalancerHostname' in params ? params.LoadBalancerHostname : null;

    }
}

/**
 * ModifyTracingConfig返回参数结构体
 * @class
 */
class ModifyTracingConfigResponse extends  AbstractModel {
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
 * PodsMetricSource 定义了如何根据特定指标进行扩缩容
 * @class
 */
class PodsMetricSource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标名
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 目标值
         * @type {string || null}
         */
        this.TargetAverageValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.TargetAverageValue = 'TargetAverageValue' in params ? params.TargetAverageValue : null;

    }
}

/**
 * DescribeMesh返回参数结构体
 * @class
 */
class DescribeMeshResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Mesh详细信息
         * @type {Mesh || null}
         */
        this.Mesh = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Mesh) {
            let obj = new Mesh();
            obj.deserialize(params.Mesh)
            this.Mesh = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAccessLogConfig请求参数结构体
 * @class
 */
class ModifyAccessLogConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * mesh ID
         * @type {string || null}
         */
        this.MeshId = null;

        /**
         * 选中的范围
         * @type {SelectedRange || null}
         */
        this.SelectedRange = null;

        /**
         * 采用的模板，可选值：istio（默认）、trace、custom
         * @type {string || null}
         */
        this.Template = null;

        /**
         * 是否启用
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * 腾讯云日志服务相关参数
         * @type {CLS || null}
         */
        this.CLS = null;

        /**
         * 编码格式，可选值：TEXT、JSON
         * @type {string || null}
         */
        this.Encoding = null;

        /**
         * 日志格式
         * @type {string || null}
         */
        this.Format = null;

        /**
         * 是否启用标准输出
         * @type {boolean || null}
         */
        this.EnableStdout = null;

        /**
         * 是否启动GRPC第三方服务器
         * @type {boolean || null}
         */
        this.EnableServer = null;

        /**
         * GRPC第三方服务器地址
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
        this.MeshId = 'MeshId' in params ? params.MeshId : null;

        if (params.SelectedRange) {
            let obj = new SelectedRange();
            obj.deserialize(params.SelectedRange)
            this.SelectedRange = obj;
        }
        this.Template = 'Template' in params ? params.Template : null;
        this.Enable = 'Enable' in params ? params.Enable : null;

        if (params.CLS) {
            let obj = new CLS();
            obj.deserialize(params.CLS)
            this.CLS = obj;
        }
        this.Encoding = 'Encoding' in params ? params.Encoding : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.EnableStdout = 'EnableStdout' in params ? params.EnableStdout : null;
        this.EnableServer = 'EnableServer' in params ? params.EnableServer : null;
        this.Address = 'Address' in params ? params.Address : null;

    }
}

/**
 * 描述某一网格在特定命名空间下的自动注入状态
 * @class
 */
class AutoInjectionNamespaceState extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间名称
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 注入状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.State = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.State = 'State' in params ? params.State : null;

    }
}

/**
 * UnlinkCluster返回参数结构体
 * @class
 */
class UnlinkClusterResponse extends  AbstractModel {
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
 * LinkClusterList返回参数结构体
 * @class
 */
class LinkClusterListResponse extends  AbstractModel {
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
 * ModifyAccessLogConfig返回参数结构体
 * @class
 */
class ModifyAccessLogConfigResponse extends  AbstractModel {
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
 * IngressGateway状态
 * @class
 */
class IngressGatewayStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例状态
         * @type {LoadBalancerStatus || null}
         */
        this.LoadBalancer = null;

        /**
         * ingress gateway 当前的版本
         * @type {string || null}
         */
        this.CurrentVersion = null;

        /**
         * ingress gateway 目标的版本
         * @type {string || null}
         */
        this.DesiredVersion = null;

        /**
         * ingress gateway的状态，取值running, upgrading, rollbacking
         * @type {string || null}
         */
        this.State = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LoadBalancer) {
            let obj = new LoadBalancerStatus();
            obj.deserialize(params.LoadBalancer)
            this.LoadBalancer = obj;
        }
        this.CurrentVersion = 'CurrentVersion' in params ? params.CurrentVersion : null;
        this.DesiredVersion = 'DesiredVersion' in params ? params.DesiredVersion : null;
        this.State = 'State' in params ? params.State : null;

    }
}

/**
 * ResourceMetricSource 定义了如何根据已知类型的资源指标进行扩缩容
 * @class
 */
class ResourceMetricSource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源名称 cpu/memory
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 目标平均利用率
         * @type {number || null}
         */
        this.TargetAverageUtilization = null;

        /**
         * 目标平均值
         * @type {string || null}
         */
        this.TargetAverageValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.TargetAverageUtilization = 'TargetAverageUtilization' in params ? params.TargetAverageUtilization : null;
        this.TargetAverageValue = 'TargetAverageValue' in params ? params.TargetAverageValue : null;

    }
}

/**
 * CreateMesh返回参数结构体
 * @class
 */
class CreateMeshResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建的Mesh的Id
         * @type {string || null}
         */
        this.MeshId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MeshId = 'MeshId' in params ? params.MeshId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * LinkClusterList请求参数结构体
 * @class
 */
class LinkClusterListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网格Id
         * @type {string || null}
         */
        this.MeshId = null;

        /**
         * 关联集群
         * @type {Array.<Cluster> || null}
         */
        this.ClusterList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MeshId = 'MeshId' in params ? params.MeshId : null;

        if (params.ClusterList) {
            this.ClusterList = new Array();
            for (let z in params.ClusterList) {
                let obj = new Cluster();
                obj.deserialize(params.ClusterList[z]);
                this.ClusterList.push(obj);
            }
        }

    }
}

/**
 * 集群配置
 * @class
 */
class ClusterConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自动注入SideCar的NameSpace
         * @type {Array.<string> || null}
         */
        this.AutoInjectionNamespaceList = null;

        /**
         * Ingress配置列表
         * @type {Array.<IngressGateway> || null}
         */
        this.IngressGatewayList = null;

        /**
         * Egress配置列表
         * @type {Array.<EgressGateway> || null}
         */
        this.EgressGatewayList = null;

        /**
         * Istiod配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IstiodConfig || null}
         */
        this.Istiod = null;

        /**
         * 部署配置
         * @type {DeployConfig || null}
         */
        this.DeployConfig = null;

        /**
         * 自动注入命名空间状态列表
         * @type {Array.<AutoInjectionNamespaceState> || null}
         */
        this.AutoInjectionNamespaceStateList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoInjectionNamespaceList = 'AutoInjectionNamespaceList' in params ? params.AutoInjectionNamespaceList : null;

        if (params.IngressGatewayList) {
            this.IngressGatewayList = new Array();
            for (let z in params.IngressGatewayList) {
                let obj = new IngressGateway();
                obj.deserialize(params.IngressGatewayList[z]);
                this.IngressGatewayList.push(obj);
            }
        }

        if (params.EgressGatewayList) {
            this.EgressGatewayList = new Array();
            for (let z in params.EgressGatewayList) {
                let obj = new EgressGateway();
                obj.deserialize(params.EgressGatewayList[z]);
                this.EgressGatewayList.push(obj);
            }
        }

        if (params.Istiod) {
            let obj = new IstiodConfig();
            obj.deserialize(params.Istiod)
            this.Istiod = obj;
        }

        if (params.DeployConfig) {
            let obj = new DeployConfig();
            obj.deserialize(params.DeployConfig)
            this.DeployConfig = obj;
        }

        if (params.AutoInjectionNamespaceStateList) {
            this.AutoInjectionNamespaceStateList = new Array();
            for (let z in params.AutoInjectionNamespaceStateList) {
                let obj = new AutoInjectionNamespaceState();
                obj.deserialize(params.AutoInjectionNamespaceStateList[z]);
                this.AutoInjectionNamespaceStateList.push(obj);
            }
        }

    }
}

/**
 * UnlinkPrometheus请求参数结构体
 * @class
 */
class UnlinkPrometheusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网格ID
         * @type {string || null}
         */
        this.MeshID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MeshID = 'MeshID' in params ? params.MeshID : null;

    }
}

/**
 * MetricSpec 描述如何通过指定指标进行自动扩缩容
 * @class
 */
class MetricSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标来源类型，支持 Pods/Resource
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 使用自定义指标扩进行自动扩缩容
         * @type {PodsMetricSource || null}
         */
        this.Pods = null;

        /**
         * 使用资源指标扩进行自动扩缩容
         * @type {ResourceMetricSource || null}
         */
        this.Resource = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Pods) {
            let obj = new PodsMetricSource();
            obj.deserialize(params.Pods)
            this.Pods = obj;
        }

        if (params.Resource) {
            let obj = new ResourceMetricSource();
            obj.deserialize(params.Resource)
            this.Resource = obj;
        }

    }
}

/**
 * 工作负载配置
 * @class
 */
class WorkloadConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作副本数
         * @type {number || null}
         */
        this.Replicas = null;

        /**
         * 资源配置
         * @type {ResourceRequirements || null}
         */
        this.Resources = null;

        /**
         * HPA策略
         * @type {HorizontalPodAutoscalerSpec || null}
         */
        this.HorizontalPodAutoscaler = null;

        /**
         * 部署到指定节点
         * @type {Array.<string> || null}
         */
        this.SelectedNodeList = null;

        /**
         * 组件的部署模式，取值说明：
IN_GENERAL_NODE：常规节点
IN_EKLET：eklet 节点
IN_SHARED_NODE_POOL：共享节电池
IN_EXCLUSIVE_NODE_POOL：独占节点池
         * @type {string || null}
         */
        this.DeployMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Replicas = 'Replicas' in params ? params.Replicas : null;

        if (params.Resources) {
            let obj = new ResourceRequirements();
            obj.deserialize(params.Resources)
            this.Resources = obj;
        }

        if (params.HorizontalPodAutoscaler) {
            let obj = new HorizontalPodAutoscalerSpec();
            obj.deserialize(params.HorizontalPodAutoscaler)
            this.HorizontalPodAutoscaler = obj;
        }
        this.SelectedNodeList = 'SelectedNodeList' in params ? params.SelectedNodeList : null;
        this.DeployMode = 'DeployMode' in params ? params.DeployMode : null;

    }
}

/**
 * Egress配置
 * @class
 */
class EgressGateway extends  AbstractModel {
    constructor(){
        super();

        /**
         * Egress名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 所在的Namespace
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 工作负载配置
         * @type {WorkloadConfig || null}
         */
        this.Workload = null;

        /**
         * 工作负载的状态
         * @type {EgressGatewayStatus || null}
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
        this.Namespace = 'Namespace' in params ? params.Namespace : null;

        if (params.Workload) {
            let obj = new WorkloadConfig();
            obj.deserialize(params.Workload)
            this.Workload = obj;
        }

        if (params.Status) {
            let obj = new EgressGatewayStatus();
            obj.deserialize(params.Status)
            this.Status = obj;
        }

    }
}

/**
 * DescribeMesh请求参数结构体
 * @class
 */
class DescribeMeshRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要查询的网格 Id
         * @type {string || null}
         */
        this.MeshId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MeshId = 'MeshId' in params ? params.MeshId : null;

    }
}

/**
 * Istio配置
 * @class
 */
class IstioConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 外部流量策略
         * @type {string || null}
         */
        this.OutboundTrafficPolicy = null;

        /**
         * 调用链配置（Deprecated，请使用 MeshConfig.Tracing 进行配置）
         * @type {TracingConfig || null}
         */
        this.Tracing = null;

        /**
         * 禁用策略检查功能
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.DisablePolicyChecks = null;

        /**
         * 支持HTTP1.0协议
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.EnablePilotHTTP = null;

        /**
         * 禁用HTTP重试策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.DisableHTTPRetry = null;

        /**
         * SmartDNS策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SmartDNSConfig || null}
         */
        this.SmartDNS = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OutboundTrafficPolicy = 'OutboundTrafficPolicy' in params ? params.OutboundTrafficPolicy : null;

        if (params.Tracing) {
            let obj = new TracingConfig();
            obj.deserialize(params.Tracing)
            this.Tracing = obj;
        }
        this.DisablePolicyChecks = 'DisablePolicyChecks' in params ? params.DisablePolicyChecks : null;
        this.EnablePilotHTTP = 'EnablePilotHTTP' in params ? params.EnablePilotHTTP : null;
        this.DisableHTTPRetry = 'DisableHTTPRetry' in params ? params.DisableHTTPRetry : null;

        if (params.SmartDNS) {
            let obj = new SmartDNSConfig();
            obj.deserialize(params.SmartDNS)
            this.SmartDNS = obj;
        }

    }
}

/**
 * Mesh信息
 * @class
 */
class Mesh extends  AbstractModel {
    constructor(){
        super();

        /**
         * Mesh实例Id
         * @type {string || null}
         */
        this.MeshId = null;

        /**
         * Mesh名称
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * Mesh类型，取值范围：
- STANDALONE：独立网格
- HOSTED：托管网格
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 版本
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Mesh状态，取值范围：
- PENDING：等待中
- CREATING：创建中
- RUNNING：运行中
- ABNORMAL：异常
- UPGRADING：升级中
- CANARY_UPGRADED：升级灰度完成
- ROLLBACKING：升级回滚
- DELETING：删除中
- CREATE_FAILED：安装失败
- DELETE_FAILED：删除失败
- UPGRADE_FAILED：升级失败
- ROLLBACK_FAILED：回滚失败
         * @type {string || null}
         */
        this.State = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 修改时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdatedTime = null;

        /**
         * 集群列表
         * @type {Array.<Cluster> || null}
         */
        this.ClusterList = null;

        /**
         * Mesh配置
         * @type {MeshConfig || null}
         */
        this.Config = null;

        /**
         * Mesh详细状态
         * @type {MeshStatus || null}
         */
        this.Status = null;

        /**
         * 标签列表
         * @type {Array.<Tag> || null}
         */
        this.TagList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MeshId = 'MeshId' in params ? params.MeshId : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.State = 'State' in params ? params.State : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.UpdatedTime = 'UpdatedTime' in params ? params.UpdatedTime : null;

        if (params.ClusterList) {
            this.ClusterList = new Array();
            for (let z in params.ClusterList) {
                let obj = new Cluster();
                obj.deserialize(params.ClusterList[z]);
                this.ClusterList.push(obj);
            }
        }

        if (params.Config) {
            let obj = new MeshConfig();
            obj.deserialize(params.Config)
            this.Config = obj;
        }

        if (params.Status) {
            let obj = new MeshStatus();
            obj.deserialize(params.Status)
            this.Status = obj;
        }

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new Tag();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }

    }
}

/**
 * DescribeAccessLogConfig返回参数结构体
 * @class
 */
class DescribeAccessLogConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问日志输出路径。默认 /dev/stdout
         * @type {string || null}
         */
        this.File = null;

        /**
         * 访问日志的格式。
         * @type {string || null}
         */
        this.Format = null;

        /**
         * 访问日志输出编码，可取值为 "TEXT" 或 "JSON"，默认 TEXT"
         * @type {string || null}
         */
        this.Encoding = null;

        /**
         * 选中的范围
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SelectedRange || null}
         */
        this.SelectedRange = null;

        /**
         * 采用的模板，可取值为"istio" 或 "trace"，默认为"istio"
         * @type {string || null}
         */
        this.Template = null;

        /**
         * 腾讯云日志服务相关参数
         * @type {CLS || null}
         */
        this.CLS = null;

        /**
         * GRPC第三方服务器地址
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 是否启用GRPC第三方服务器
         * @type {boolean || null}
         */
        this.EnableServer = null;

        /**
         * 是否启用标准输出
         * @type {boolean || null}
         */
        this.EnableStdout = null;

        /**
         * 是否启用访问日志采集
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.File = 'File' in params ? params.File : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Encoding = 'Encoding' in params ? params.Encoding : null;

        if (params.SelectedRange) {
            let obj = new SelectedRange();
            obj.deserialize(params.SelectedRange)
            this.SelectedRange = obj;
        }
        this.Template = 'Template' in params ? params.Template : null;

        if (params.CLS) {
            let obj = new CLS();
            obj.deserialize(params.CLS)
            this.CLS = obj;
        }
        this.Address = 'Address' in params ? params.Address : null;
        this.EnableServer = 'EnableServer' in params ? params.EnableServer : null;
        this.EnableStdout = 'EnableStdout' in params ? params.EnableStdout : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * LinkPrometheus请求参数结构体
 * @class
 */
class LinkPrometheusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网格ID
         * @type {string || null}
         */
        this.MeshID = null;

        /**
         * 配置
         * @type {PrometheusConfig || null}
         */
        this.Prometheus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MeshID = 'MeshID' in params ? params.MeshID : null;

        if (params.Prometheus) {
            let obj = new PrometheusConfig();
            obj.deserialize(params.Prometheus)
            this.Prometheus = obj;
        }

    }
}

/**
 * Grafana信息
 * @class
 */
class GrafanaInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * 内网地址
         * @type {string || null}
         */
        this.InternalURL = null;

        /**
         * 公网地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PublicURL = null;

        /**
         * 公网失败原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PublicFailedReason = null;

        /**
         * 公网失败详细信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PublicFailedMessage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.InternalURL = 'InternalURL' in params ? params.InternalURL : null;
        this.PublicURL = 'PublicURL' in params ? params.PublicURL : null;
        this.PublicFailedReason = 'PublicFailedReason' in params ? params.PublicFailedReason : null;
        this.PublicFailedMessage = 'PublicFailedMessage' in params ? params.PublicFailedMessage : null;

    }
}

/**
 * DeleteMesh返回参数结构体
 * @class
 */
class DeleteMeshResponse extends  AbstractModel {
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
 * Mesh当前状态
 * @class
 */
class MeshStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务数量
         * @type {number || null}
         */
        this.ServiceCount = null;

        /**
         * 灰度升级的版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CanaryVersion = null;

        /**
         * 已废弃
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrometheusStatus> || null}
         */
        this.Prometheus = null;

        /**
         * 状态附带信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StateMessage = null;

        /**
         * 正在执行的异步操作
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ActiveOperation> || null}
         */
        this.ActiveOperationList = null;

        /**
         * 获取TPS信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PrometheusStatus || null}
         */
        this.TPS = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceCount = 'ServiceCount' in params ? params.ServiceCount : null;
        this.CanaryVersion = 'CanaryVersion' in params ? params.CanaryVersion : null;

        if (params.Prometheus) {
            this.Prometheus = new Array();
            for (let z in params.Prometheus) {
                let obj = new PrometheusStatus();
                obj.deserialize(params.Prometheus[z]);
                this.Prometheus.push(obj);
            }
        }
        this.StateMessage = 'StateMessage' in params ? params.StateMessage : null;

        if (params.ActiveOperationList) {
            this.ActiveOperationList = new Array();
            for (let z in params.ActiveOperationList) {
                let obj = new ActiveOperation();
                obj.deserialize(params.ActiveOperationList[z]);
                this.ActiveOperationList.push(obj);
            }
        }

        if (params.TPS) {
            let obj = new PrometheusStatus();
            obj.deserialize(params.TPS)
            this.TPS = obj;
        }

    }
}

/**
 * Istiod配置
 * @class
 */
class IstiodConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 工作负载配置
         * @type {WorkloadConfig || null}
         */
        this.Workload = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Workload) {
            let obj = new WorkloadConfig();
            obj.deserialize(params.Workload)
            this.Workload = obj;
        }

    }
}

/**
 * 自动注入配置
 * @class
 */
class InjectConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 不需要进行代理的 ip 地址范围
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ExcludeIPRanges = null;

        /**
         * 是否等待sidecar启动
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.HoldApplicationUntilProxyStarts = null;

        /**
         * 是否允许sidecar等待
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.HoldProxyUntilApplicationEnds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExcludeIPRanges = 'ExcludeIPRanges' in params ? params.ExcludeIPRanges : null;
        this.HoldApplicationUntilProxyStarts = 'HoldApplicationUntilProxyStarts' in params ? params.HoldApplicationUntilProxyStarts : null;
        this.HoldProxyUntilApplicationEnds = 'HoldProxyUntilApplicationEnds' in params ? params.HoldProxyUntilApplicationEnds : null;

    }
}

/**
 * DeleteMesh请求参数结构体
 * @class
 */
class DeleteMeshRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要删除的MeshId
         * @type {string || null}
         */
        this.MeshId = null;

        /**
         * CLS组件是否被删除
         * @type {boolean || null}
         */
        this.NeedDeleteCLS = null;

        /**
         * TMP组件是否被删除
         * @type {boolean || null}
         */
        this.NeedDeleteTMP = null;

        /**
         * APM组件是否被删除
         * @type {boolean || null}
         */
        this.NeedDeleteAPM = null;

        /**
         * Grafana组件是否被删除
         * @type {boolean || null}
         */
        this.NeedDeleteGrafana = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MeshId = 'MeshId' in params ? params.MeshId : null;
        this.NeedDeleteCLS = 'NeedDeleteCLS' in params ? params.NeedDeleteCLS : null;
        this.NeedDeleteTMP = 'NeedDeleteTMP' in params ? params.NeedDeleteTMP : null;
        this.NeedDeleteAPM = 'NeedDeleteAPM' in params ? params.NeedDeleteAPM : null;
        this.NeedDeleteGrafana = 'NeedDeleteGrafana' in params ? params.NeedDeleteGrafana : null;

    }
}

/**
 * LinkPrometheus返回参数结构体
 * @class
 */
class LinkPrometheusResponse extends  AbstractModel {
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
 * Resource 定义了资源类型和数量
 * @class
 */
class Resource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源类型 cpu/memory
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 资源数量
         * @type {string || null}
         */
        this.Quantity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Quantity = 'Quantity' in params ? params.Quantity : null;

    }
}

/**
 * 部署配置
 * @class
 */
class DeployConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 部署类型，取值范围：
- SPECIFIC：专有模式
- AUTO：普通模式
         * @type {string || null}
         */
        this.NodeSelectType = null;

        /**
         * 指定的节点
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
        this.NodeSelectType = 'NodeSelectType' in params ? params.NodeSelectType : null;
        this.Nodes = 'Nodes' in params ? params.Nodes : null;

    }
}

/**
 * DescribeAccessLogConfig请求参数结构体
 * @class
 */
class DescribeAccessLogConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * mesh名字
         * @type {string || null}
         */
        this.MeshId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MeshId = 'MeshId' in params ? params.MeshId : null;

    }
}

/**
 * 正在执行的异步操作
 * @class
 */
class ActiveOperation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作Id
         * @type {string || null}
         */
        this.OperationId = null;

        /**
         * 操作类型，取值范围：
- LINK_CLUSTERS: 关联集群
- RELINK_CLUSTERS: 重新关联集群
- UNLINK_CLUSTERS: 解关联集群
- INSTALL_MESH: 安装网格
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OperationId = 'OperationId' in params ? params.OperationId : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * CreateMesh请求参数结构体
 * @class
 */
class CreateMeshRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Mesh名称
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * Mesh版本
         * @type {string || null}
         */
        this.MeshVersion = null;

        /**
         * Mesh类型，取值范围：
- HOSTED：托管网格
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Mesh配置
         * @type {MeshConfig || null}
         */
        this.Config = null;

        /**
         * 关联集群
         * @type {Array.<Cluster> || null}
         */
        this.ClusterList = null;

        /**
         * 标签列表
         * @type {Array.<Tag> || null}
         */
        this.TagList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.MeshVersion = 'MeshVersion' in params ? params.MeshVersion : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Config) {
            let obj = new MeshConfig();
            obj.deserialize(params.Config)
            this.Config = obj;
        }

        if (params.ClusterList) {
            this.ClusterList = new Array();
            for (let z in params.ClusterList) {
                let obj = new Cluster();
                obj.deserialize(params.ClusterList[z]);
                this.ClusterList.push(obj);
            }
        }

        if (params.TagList) {
            this.TagList = new Array();
            for (let z in params.TagList) {
                let obj = new Tag();
                obj.deserialize(params.TagList[z]);
                this.TagList.push(obj);
            }
        }

    }
}

/**
 * Prometheus状态信息
 * @class
 */
class PrometheusStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prometheus Id
         * @type {string || null}
         */
        this.PrometheusId = null;

        /**
         * 展示名称
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 虚拟网络Id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 状态
         * @type {string || null}
         */
        this.State = null;

        /**
         * 地区
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Grafana信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {GrafanaInfo || null}
         */
        this.Grafana = null;

        /**
         * Prometheus 类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PrometheusId = 'PrometheusId' in params ? params.PrometheusId : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.State = 'State' in params ? params.State : null;
        this.Region = 'Region' in params ? params.Region : null;

        if (params.Grafana) {
            let obj = new GrafanaInfo();
            obj.deserialize(params.Grafana)
            this.Grafana = obj;
        }
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * 负载均衡跨域设置
 * @class
 */
class CrossRegionConfig extends  AbstractModel {
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
 * 键值对过滤器，用于条件过滤查询。例如过滤ID、名称等
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
 * Prometheus 配置
 * @class
 */
class PrometheusConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 虚拟网络Id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网Id
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 关联已存在实例Id，不填则默认创建
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 第三方 Prometheus
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CustomPromConfig || null}
         */
        this.CustomProm = null;

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
        this.Region = 'Region' in params ? params.Region : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.CustomProm) {
            let obj = new CustomPromConfig();
            obj.deserialize(params.CustomProm)
            this.CustomProm = obj;
        }

    }
}

/**
 * 内网独占集群配置
 * @class
 */
class ExtensiveCluster extends  AbstractModel {
    constructor(){
        super();

        /**
         * Cluster ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 可用区
注意：此字段可能返回 null，表示取不到有效值。
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * 智能DNS配置
 * @class
 */
class SmartDNSConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开启DNS代理
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IstioMetaDNSCapture = null;

        /**
         * 开启自动地址分配
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IstioMetaDNSAutoAllocate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IstioMetaDNSCapture = 'IstioMetaDNSCapture' in params ? params.IstioMetaDNSCapture : null;
        this.IstioMetaDNSAutoAllocate = 'IstioMetaDNSAutoAllocate' in params ? params.IstioMetaDNSAutoAllocate : null;

    }
}

/**
 * DescribeMeshList请求参数结构体
 * @class
 */
class DescribeMeshListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 分页限制
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * ModifyMesh返回参数结构体
 * @class
 */
class ModifyMeshResponse extends  AbstractModel {
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
 * UnlinkCluster请求参数结构体
 * @class
 */
class UnlinkClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网格Id
         * @type {string || null}
         */
        this.MeshId = null;

        /**
         * 取消关联的集群Id
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
        this.MeshId = 'MeshId' in params ? params.MeshId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * 腾讯云日志服务相关参数
 * @class
 */
class CLS extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否启用
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * 日志集
         * @type {string || null}
         */
        this.LogSet = null;

        /**
         * 日志主题
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * 是否删除
         * @type {boolean || null}
         */
        this.NeedDelete = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.LogSet = 'LogSet' in params ? params.LogSet : null;
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.NeedDelete = 'NeedDelete' in params ? params.NeedDelete : null;

    }
}

/**
 * 调用链配置
 * @class
 */
class TracingConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用链采样率，百分比
         * @type {number || null}
         */
        this.Sampling = null;

        /**
         * 是否启用调用跟踪
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * 腾讯云 APM 服务相关参数
         * @type {APM || null}
         */
        this.APM = null;

        /**
         * 启动第三方服务器的地址
         * @type {TracingZipkin || null}
         */
        this.Zipkin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Sampling = 'Sampling' in params ? params.Sampling : null;
        this.Enable = 'Enable' in params ? params.Enable : null;

        if (params.APM) {
            let obj = new APM();
            obj.deserialize(params.APM)
            this.APM = obj;
        }

        if (params.Zipkin) {
            let obj = new TracingZipkin();
            obj.deserialize(params.Zipkin)
            this.Zipkin = obj;
        }

    }
}

/**
 * IngressGateway 实例信息
 * @class
 */
class IngressGateway extends  AbstractModel {
    constructor(){
        super();

        /**
         * IngressGateway 实例名字
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 集群 ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Service 配置
         * @type {Service || null}
         */
        this.Service = null;

        /**
         * Workload 配置
         * @type {WorkloadConfig || null}
         */
        this.Workload = null;

        /**
         * 负载均衡配置，自动创建 CLB 时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {LoadBalancer || null}
         */
        this.LoadBalancer = null;

        /**
         * IngressGateway 状态信息，只读
         * @type {IngressGatewayStatus || null}
         */
        this.Status = null;

        /**
         * 负载均衡实例ID，使用已有 CLB 时返回
         * @type {string || null}
         */
        this.LoadBalancerId = null;

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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.Service) {
            let obj = new Service();
            obj.deserialize(params.Service)
            this.Service = obj;
        }

        if (params.Workload) {
            let obj = new WorkloadConfig();
            obj.deserialize(params.Workload)
            this.Workload = obj;
        }

        if (params.LoadBalancer) {
            let obj = new LoadBalancer();
            obj.deserialize(params.LoadBalancer)
            this.LoadBalancer = obj;
        }

        if (params.Status) {
            let obj = new IngressGatewayStatus();
            obj.deserialize(params.Status)
            this.Status = obj;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;

    }
}

/**
 * egress gateway 的状态
 * @class
 */
class EgressGatewayStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * egress gateway的当前版本
         * @type {string || null}
         */
        this.CurrentVersion = null;

        /**
         * egress gateway的目标版本
         * @type {string || null}
         */
        this.DesiredVersion = null;

        /**
         * egress gateway的状态，取值：running，upgrading，rollbacking
         * @type {string || null}
         */
        this.State = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CurrentVersion = 'CurrentVersion' in params ? params.CurrentVersion : null;
        this.DesiredVersion = 'DesiredVersion' in params ? params.DesiredVersion : null;
        this.State = 'State' in params ? params.State : null;

    }
}

/**
 * 内网独占集群配置列表
 * @class
 */
class ExtensiveClusters extends  AbstractModel {
    constructor(){
        super();

        /**
         * 4层集群配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ExtensiveCluster> || null}
         */
        this.L4Clusters = null;

        /**
         * 7层集群配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ExtensiveCluster> || null}
         */
        this.L7Clusters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.L4Clusters) {
            this.L4Clusters = new Array();
            for (let z in params.L4Clusters) {
                let obj = new ExtensiveCluster();
                obj.deserialize(params.L4Clusters[z]);
                this.L4Clusters.push(obj);
            }
        }

        if (params.L7Clusters) {
            this.L7Clusters = new Array();
            for (let z in params.L7Clusters) {
                let obj = new ExtensiveCluster();
                obj.deserialize(params.L7Clusters[z]);
                this.L7Clusters.push(obj);
            }
        }

    }
}

/**
 * 选中的项目
 * @class
 */
class SelectedItems extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 集群名称
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 选中项目名字
         * @type {string || null}
         */
        this.ItemName = null;

        /**
         * ingress gw的名称列表
         * @type {Array.<string> || null}
         */
        this.Gateways = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.ItemName = 'ItemName' in params ? params.ItemName : null;
        this.Gateways = 'Gateways' in params ? params.Gateways : null;

    }
}

/**
 * ModifyTracingConfig请求参数结构体
 * @class
 */
class ModifyTracingConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * mesh名字
         * @type {string || null}
         */
        this.MeshId = null;

        /**
         * 是否启用调用跟踪
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * 腾讯云 APM 服务相关参数
         * @type {APM || null}
         */
        this.APM = null;

        /**
         * 调用跟踪采样值
         * @type {number || null}
         */
        this.Sampling = null;

        /**
         * 调用追踪Zipkin相关配置
         * @type {TracingZipkin || null}
         */
        this.Zipkin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MeshId = 'MeshId' in params ? params.MeshId : null;
        this.Enable = 'Enable' in params ? params.Enable : null;

        if (params.APM) {
            let obj = new APM();
            obj.deserialize(params.APM)
            this.APM = obj;
        }
        this.Sampling = 'Sampling' in params ? params.Sampling : null;

        if (params.Zipkin) {
            let obj = new TracingZipkin();
            obj.deserialize(params.Zipkin)
            this.Zipkin = obj;
        }

    }
}

/**
 * ModifyMesh请求参数结构体
 * @class
 */
class ModifyMeshRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要修改的网格Id
         * @type {string || null}
         */
        this.MeshId = null;

        /**
         * 修改的网格名称
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * 修改的网格配置
         * @type {MeshConfig || null}
         */
        this.Config = null;

        /**
         * 修改的集群配置
         * @type {Array.<Cluster> || null}
         */
        this.ClusterList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MeshId = 'MeshId' in params ? params.MeshId : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;

        if (params.Config) {
            let obj = new MeshConfig();
            obj.deserialize(params.Config)
            this.Config = obj;
        }

        if (params.ClusterList) {
            this.ClusterList = new Array();
            for (let z in params.ClusterList) {
                let obj = new Cluster();
                obj.deserialize(params.ClusterList[z]);
                this.ClusterList.push(obj);
            }
        }

    }
}

/**
 * Mesh集群信息
 * @class
 */
class Cluster extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群Id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 集群角色，取值范围：
- MASTER：控制面所在的主集群
- REMOTE：主集群管理的远端集群
         * @type {string || null}
         */
        this.Role = null;

        /**
         * 私有网络Id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网Id
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 名称，只读
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * 状态，只读
         * @type {string || null}
         */
        this.State = null;

        /**
         * 关联时间，只读
         * @type {string || null}
         */
        this.LinkedTime = null;

        /**
         * 集群配置
         * @type {ClusterConfig || null}
         */
        this.Config = null;

        /**
         * 详细状态，只读
         * @type {ClusterStatus || null}
         */
        this.Status = null;

        /**
         * 类型，取值范围：
- TKE
- EKS
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 集群关联的 Namespace 列表
         * @type {Array.<string> || null}
         */
        this.HostedNamespaces = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.State = 'State' in params ? params.State : null;
        this.LinkedTime = 'LinkedTime' in params ? params.LinkedTime : null;

        if (params.Config) {
            let obj = new ClusterConfig();
            obj.deserialize(params.Config)
            this.Config = obj;
        }

        if (params.Status) {
            let obj = new ClusterStatus();
            obj.deserialize(params.Status)
            this.Status = obj;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.HostedNamespaces = 'HostedNamespaces' in params ? params.HostedNamespaces : null;

    }
}

/**
 * 标签
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

        /**
         * 是否透传给其他关联产品
         * @type {boolean || null}
         */
        this.Passthrough = null;

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
        this.Passthrough = 'Passthrough' in params ? params.Passthrough : null;

    }
}

/**
 * DescribeMeshList返回参数结构体
 * @class
 */
class DescribeMeshListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询到的网格信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Mesh> || null}
         */
        this.MeshList = null;

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

        if (params.MeshList) {
            this.MeshList = new Array();
            for (let z in params.MeshList) {
                let obj = new Mesh();
                obj.deserialize(params.MeshList[z]);
                this.MeshList.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 调用追踪的Zipkin设置
 * @class
 */
class TracingZipkin extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zipkin调用地址
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
 * 腾讯云应用性能管理服务参数
 * @class
 */
class APM extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否启用
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * 地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * APM 实例，如果创建时传入的参数为空，则表示自动创建 APM 实例。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * ResourceRequirements 描述了计算资源需求。
 * @class
 */
class ResourceRequirements extends  AbstractModel {
    constructor(){
        super();

        /**
         * Limits 描述了允许的最大计算资源量。
         * @type {Array.<Resource> || null}
         */
        this.Limits = null;

        /**
         * Requests 描述所需的最小计算资源量。
         * @type {Array.<Resource> || null}
         */
        this.Requests = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Limits) {
            this.Limits = new Array();
            for (let z in params.Limits) {
                let obj = new Resource();
                obj.deserialize(params.Limits[z]);
                this.Limits.push(obj);
            }
        }

        if (params.Requests) {
            this.Requests = new Array();
            for (let z in params.Requests) {
                let obj = new Resource();
                obj.deserialize(params.Requests[z]);
                this.Requests.push(obj);
            }
        }

    }
}

/**
 * 集群状态
 * @class
 */
class ClusterStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 关联状态，取值范围：
- LINKING: 关联中
- LINKED: 已关联
- UNLINKING: 解关联中
- LINK_FAILED: 关联失败
- UNLINK_FAILED: 解关联失败
         * @type {string || null}
         */
        this.LinkState = null;

        /**
         * 关联错误详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LinkErrorDetail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LinkState = 'LinkState' in params ? params.LinkState : null;
        this.LinkErrorDetail = 'LinkErrorDetail' in params ? params.LinkErrorDetail : null;

    }
}

/**
 * 被选中的范围
 * @class
 */
class SelectedRange extends  AbstractModel {
    constructor(){
        super();

        /**
         * 选中的项目详细内容
         * @type {Array.<SelectedItems> || null}
         */
        this.Items = null;

        /**
         * 是否全选
         * @type {boolean || null}
         */
        this.All = null;

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
                let obj = new SelectedItems();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.All = 'All' in params ? params.All : null;

    }
}

/**
 * AccessLog 配置
 * @class
 */
class AccessLogConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否启用
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * 采用的模板，可选值：istio（默认）、trace
         * @type {string || null}
         */
        this.Template = null;

        /**
         * 选中的范围
         * @type {SelectedRange || null}
         */
        this.SelectedRange = null;

        /**
         * 腾讯云日志服务相关参数
         * @type {CLS || null}
         */
        this.CLS = null;

        /**
         * 编码格式，可选值：TEXT、JSON
         * @type {string || null}
         */
        this.Encoding = null;

        /**
         * 日志格式
         * @type {string || null}
         */
        this.Format = null;

        /**
         * GRPC第三方服务器地址
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 是否启用GRPC第三方服务器
         * @type {boolean || null}
         */
        this.EnableServer = null;

        /**
         * 是否启用标准输出
         * @type {boolean || null}
         */
        this.EnableStdout = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Template = 'Template' in params ? params.Template : null;

        if (params.SelectedRange) {
            let obj = new SelectedRange();
            obj.deserialize(params.SelectedRange)
            this.SelectedRange = obj;
        }

        if (params.CLS) {
            let obj = new CLS();
            obj.deserialize(params.CLS)
            this.CLS = obj;
        }
        this.Encoding = 'Encoding' in params ? params.Encoding : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.EnableServer = 'EnableServer' in params ? params.EnableServer : null;
        this.EnableStdout = 'EnableStdout' in params ? params.EnableStdout : null;

    }
}

/**
 * 负载均衡配置
 * @class
 */
class LoadBalancer extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例的网络类型：
OPEN：公网属性， INTERNAL：内网属性。
只读。
         * @type {string || null}
         */
        this.LoadBalancerType = null;

        /**
         * 负载均衡实例所在的子网（仅对内网VPC型LB有意义），只读。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * TRAFFIC_POSTPAID_BY_HOUR 按流量按小时后计费 ; BANDWIDTH_POSTPAID_BY_HOUR 按带宽按小时后计费;只读。
         * @type {string || null}
         */
        this.InternetChargeType = null;

        /**
         * 最大出带宽，单位Mbps，仅对公网属性的LB生效，默认值 10
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * 可用区 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ZoneID = null;

        /**
         * 运营商类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VipIsp = null;

        /**
         * TGW Group 名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TgwGroupName = null;

        /**
         * IP 类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AddressIPVersion = null;

        /**
         * 标签列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 内网独占集群配置列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ExtensiveClusters || null}
         */
        this.ExtensiveClusters = null;

        /**
         * 负载均衡跨地域配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CrossRegionConfig || null}
         */
        this.CrossRegionConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerType = 'LoadBalancerType' in params ? params.LoadBalancerType : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.InternetChargeType = 'InternetChargeType' in params ? params.InternetChargeType : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.ZoneID = 'ZoneID' in params ? params.ZoneID : null;
        this.VipIsp = 'VipIsp' in params ? params.VipIsp : null;
        this.TgwGroupName = 'TgwGroupName' in params ? params.TgwGroupName : null;
        this.AddressIPVersion = 'AddressIPVersion' in params ? params.AddressIPVersion : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.ExtensiveClusters) {
            let obj = new ExtensiveClusters();
            obj.deserialize(params.ExtensiveClusters)
            this.ExtensiveClusters = obj;
        }

        if (params.CrossRegionConfig) {
            let obj = new CrossRegionConfig();
            obj.deserialize(params.CrossRegionConfig)
            this.CrossRegionConfig = obj;
        }

    }
}

module.exports = {
    HorizontalPodAutoscalerSpec: HorizontalPodAutoscalerSpec,
    CustomPromConfig: CustomPromConfig,
    Service: Service,
    MeshConfig: MeshConfig,
    UnlinkPrometheusResponse: UnlinkPrometheusResponse,
    LoadBalancerStatus: LoadBalancerStatus,
    ModifyTracingConfigResponse: ModifyTracingConfigResponse,
    PodsMetricSource: PodsMetricSource,
    DescribeMeshResponse: DescribeMeshResponse,
    ModifyAccessLogConfigRequest: ModifyAccessLogConfigRequest,
    AutoInjectionNamespaceState: AutoInjectionNamespaceState,
    UnlinkClusterResponse: UnlinkClusterResponse,
    LinkClusterListResponse: LinkClusterListResponse,
    ModifyAccessLogConfigResponse: ModifyAccessLogConfigResponse,
    IngressGatewayStatus: IngressGatewayStatus,
    ResourceMetricSource: ResourceMetricSource,
    CreateMeshResponse: CreateMeshResponse,
    LinkClusterListRequest: LinkClusterListRequest,
    ClusterConfig: ClusterConfig,
    UnlinkPrometheusRequest: UnlinkPrometheusRequest,
    MetricSpec: MetricSpec,
    WorkloadConfig: WorkloadConfig,
    EgressGateway: EgressGateway,
    DescribeMeshRequest: DescribeMeshRequest,
    IstioConfig: IstioConfig,
    Mesh: Mesh,
    DescribeAccessLogConfigResponse: DescribeAccessLogConfigResponse,
    LinkPrometheusRequest: LinkPrometheusRequest,
    GrafanaInfo: GrafanaInfo,
    DeleteMeshResponse: DeleteMeshResponse,
    MeshStatus: MeshStatus,
    IstiodConfig: IstiodConfig,
    InjectConfig: InjectConfig,
    DeleteMeshRequest: DeleteMeshRequest,
    LinkPrometheusResponse: LinkPrometheusResponse,
    Resource: Resource,
    DeployConfig: DeployConfig,
    DescribeAccessLogConfigRequest: DescribeAccessLogConfigRequest,
    ActiveOperation: ActiveOperation,
    CreateMeshRequest: CreateMeshRequest,
    PrometheusStatus: PrometheusStatus,
    CrossRegionConfig: CrossRegionConfig,
    Filter: Filter,
    PrometheusConfig: PrometheusConfig,
    ExtensiveCluster: ExtensiveCluster,
    SmartDNSConfig: SmartDNSConfig,
    DescribeMeshListRequest: DescribeMeshListRequest,
    ModifyMeshResponse: ModifyMeshResponse,
    UnlinkClusterRequest: UnlinkClusterRequest,
    CLS: CLS,
    TracingConfig: TracingConfig,
    IngressGateway: IngressGateway,
    EgressGatewayStatus: EgressGatewayStatus,
    ExtensiveClusters: ExtensiveClusters,
    SelectedItems: SelectedItems,
    ModifyTracingConfigRequest: ModifyTracingConfigRequest,
    ModifyMeshRequest: ModifyMeshRequest,
    Cluster: Cluster,
    Tag: Tag,
    DescribeMeshListResponse: DescribeMeshListResponse,
    TracingZipkin: TracingZipkin,
    APM: APM,
    ResourceRequirements: ResourceRequirements,
    ClusterStatus: ClusterStatus,
    SelectedRange: SelectedRange,
    AccessLogConfig: AccessLogConfig,
    LoadBalancer: LoadBalancer,

}
