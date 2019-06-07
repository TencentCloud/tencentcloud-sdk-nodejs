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
 * SetTrafficMirrorHealthSwitch请求参数结构体
 * @class
 */
class SetTrafficMirrorHealthSwitchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流量镜像实例ID。
         * @type {string || null}
         */
        this.TrafficMirrorId = null;

        /**
         * 健康检查开关，0：关闭，1：打开
         * @type {number || null}
         */
        this.HealthSwitch = null;

        /**
         * 健康检查判断健康的次数，最小值2，最大值10。
         * @type {number || null}
         */
        this.HealthNum = null;

        /**
         * 健康检查判断不健康的次数，最小值2，最大值10。
         * @type {number || null}
         */
        this.UnhealthNum = null;

        /**
         * 健康检查间隔，单位：秒，最小值5，最大值300。
         * @type {number || null}
         */
        this.IntervalTime = null;

        /**
         * 检查的域名配置。
         * @type {string || null}
         */
        this.HttpCheckDomain = null;

        /**
         * 检查的路径配置。
         * @type {string || null}
         */
        this.HttpCheckPath = null;

        /**
         * 健康检查中认为健康的HTTP返回码的组合。可选值为1~5的集合，1表示HTTP返回码为1xx认为健康。2表示HTTP返回码为2xx认为健康。3表示HTTP返回码为3xx认为健康。4表示HTTP返回码为4xx认为健康。5表示HTTP返回码为5xx认为健康。
         * @type {Array.<number> || null}
         */
        this.HttpCodes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrafficMirrorId = 'TrafficMirrorId' in params ? params.TrafficMirrorId : null;
        this.HealthSwitch = 'HealthSwitch' in params ? params.HealthSwitch : null;
        this.HealthNum = 'HealthNum' in params ? params.HealthNum : null;
        this.UnhealthNum = 'UnhealthNum' in params ? params.UnhealthNum : null;
        this.IntervalTime = 'IntervalTime' in params ? params.IntervalTime : null;
        this.HttpCheckDomain = 'HttpCheckDomain' in params ? params.HttpCheckDomain : null;
        this.HttpCheckPath = 'HttpCheckPath' in params ? params.HttpCheckPath : null;
        this.HttpCodes = 'HttpCodes' in params ? params.HttpCodes : null;

    }
}

/**
 * SetTrafficMirrorAlias返回参数结构体
 * @class
 */
class SetTrafficMirrorAliasResponse extends  AbstractModel {
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
 * DeleteL7Rules请求参数结构体
 * @class
 */
class DeleteL7RulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 七层监听器实例ID，可通过接口DescribeL7Listeners查询。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 转发域名实例ID，可通过接口DescribeL7Rules查询。
         * @type {string || null}
         */
        this.DomainId = null;

        /**
         * 转发路径实例ID列表，可通过接口DescribeL7Rules查询。
         * @type {Array.<string> || null}
         */
        this.LocationIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.LocationIds = 'LocationIds' in params ? params.LocationIds : null;

    }
}

/**
 * DeleteTrafficMirror返回参数结构体
 * @class
 */
class DeleteTrafficMirrorResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
         * @type {string || null}
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
 * ModifyL7BackendPort返回参数结构体
 * @class
 */
class ModifyL7BackendPortResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
         * @type {string || null}
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
 * ModifyL4BackendProbePort返回参数结构体
 * @class
 */
class ModifyL4BackendProbePortResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
         * @type {string || null}
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
 * 待与流量镜像绑定的接收机信息。
 * @class
 */
class BindTrafficMirrorReceiver extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待绑定的主机端口，可选值1~65535。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 待绑定的主机实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 待绑定的主机权重，可选值0~100。
         * @type {number || null}
         */
        this.Weight = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Port = 'Port' in params ? params.Port : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

    }
}

/**
 * ModifyL4BackendPort返回参数结构体
 * @class
 */
class ModifyL4BackendPortResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果
         * @type {string || null}
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
 * ModifyL7Locations返回参数结构体
 * @class
 */
class ModifyL7LocationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
         * @type {string || null}
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
 * DescribeTrafficMirrorReceiverHealthStatus请求参数结构体
 * @class
 */
class DescribeTrafficMirrorReceiverHealthStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询所在的流量镜像ID。
         * @type {string || null}
         */
        this.TrafficMirrorId = null;

        /**
         * 流量镜像接收机实例ID和端口数组。
         * @type {Array.<DescribeTrafficMirrorReceiver> || null}
         */
        this.ReceiverSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrafficMirrorId = 'TrafficMirrorId' in params ? params.TrafficMirrorId : null;

        if (params.ReceiverSet) {
            this.ReceiverSet = new Array();
            for (let z in params.ReceiverSet) {
                let obj = new DescribeTrafficMirrorReceiver();
                obj.deserialize(params.ReceiverSet[z]);
                this.ReceiverSet.push(obj);
            }
        }

    }
}

/**
 * 待与四层监听器解绑的物理机主机、虚拟机或半托管主机信息。
 * @class
 */
class UnbindL4Backend extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待解绑的主机端口，可选值1~65535。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 黑石物理机主机ID、虚拟机IP或者是半托管主机ID。
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
        this.Port = 'Port' in params ? params.Port : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * ModifyL4Listener返回参数结构体
 * @class
 */
class ModifyL4ListenerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
         * @type {string || null}
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
 * 获取设备绑定信息时返回的四层监听器信息。
 * @class
 */
class DevicesBindInfoL4Listener extends  AbstractModel {
    constructor(){
        super();

        /**
         * 七层监听器实例ID。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 七层监听器协议类型，可选值：http,https。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 七层监听器的监听端口。
         * @type {number || null}
         */
        this.LoadBalancerPort = null;

        /**
         * 该转发路径所绑定的主机列表。
         * @type {Array.<DevicesBindInfoBackend> || null}
         */
        this.BackendSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.LoadBalancerPort = 'LoadBalancerPort' in params ? params.LoadBalancerPort : null;

        if (params.BackendSet) {
            this.BackendSet = new Array();
            for (let z in params.BackendSet) {
                let obj = new DevicesBindInfoBackend();
                obj.deserialize(params.BackendSet[z]);
                this.BackendSet.push(obj);
            }
        }

    }
}

/**
 * DescribeL4ListenerInfo请求参数结构体
 * @class
 */
class DescribeL4ListenerInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 查找的键值，可用于模糊查找该名称的监听器。
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * 主机ID或虚机IP列表，可用于获取绑定了该主机的监听器。
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * 查询绑定了某主机的四层监听器时返回的四层监听器信息。

 * @class
 */
class L4ListenerInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器ID。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 用户自定义的监听器名称。
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 负载均衡实例监听器协议类型，可选值tcp，udp。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 负载均衡监听器的监听接口，可选值1~65535。
         * @type {number || null}
         */
        this.LoadBalancerPort = null;

        /**
         * 用于计费模式为固定带宽计费，指定监听器最大带宽值，可选值：0-1000，单位：Mbps。
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 监听器的类别：L4Listener（四层监听器），L7Listener（七层监听器）。
         * @type {string || null}
         */
        this.ListenerType = null;

        /**
         * 会话保持时间。单位：秒
         * @type {number || null}
         */
        this.SessionExpire = null;

        /**
         * 是否开启了检查：1（开启）、0（关闭）。
         * @type {number || null}
         */
        this.HealthSwitch = null;

        /**
         * 响应超时时间，单位：秒。
         * @type {number || null}
         */
        this.TimeOut = null;

        /**
         * 检查间隔，单位：秒。
         * @type {number || null}
         */
        this.IntervalTime = null;

        /**
         * 负载均衡监听器健康阈值，默认值：3，表示当连续探测三次健康则表示该转发正常，可选值：2-10，单位：次。
         * @type {number || null}
         */
        this.HealthNum = null;

        /**
         * 负载均衡监听器不健康阈值，默认值：3，表示当连续探测三次不健康则表示该转发不正常，可选值：2-10，单位：次。
         * @type {number || null}
         */
        this.UnhealthNum = null;

        /**
         * 监听器当前状态（0代表创建中，1代表正常运行，2代表创建失败，3代表删除中，4代表删除失败）。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 创建时间戳。
         * @type {string || null}
         */
        this.AddTimestamp = null;

        /**
         * 是否开启自定义健康检查：1（开启）、0（关闭）。默认值0，表示关闭。（该字段在健康检查开启的情况下才生效）
         * @type {number || null}
         */
        this.CustomHealthSwitch = null;

        /**
         * 自定义健康探测内容类型，可选值：text（文本）、hexadecimal（十六进制）。
         * @type {string || null}
         */
        this.InputType = null;

        /**
         * 探测内容类型为文本方式时，针对请求文本中换行替换方式。可选值：1（替换为LF）、2（替换为CR）、3（替换为LF+CR）。
         * @type {number || null}
         */
        this.LineSeparatorType = null;

        /**
         * 自定义探测请求内容。
         * @type {string || null}
         */
        this.HealthRequest = null;

        /**
         * 自定义探测返回内容。
         * @type {string || null}
         */
        this.HealthResponse = null;

        /**
         * 是否开启toa：1（开启）、0（关闭）。
         * @type {number || null}
         */
        this.ToaFlag = null;

        /**
         * 转发后端服务器调度类型。
         * @type {string || null}
         */
        this.BalanceMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.LoadBalancerPort = 'LoadBalancerPort' in params ? params.LoadBalancerPort : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.ListenerType = 'ListenerType' in params ? params.ListenerType : null;
        this.SessionExpire = 'SessionExpire' in params ? params.SessionExpire : null;
        this.HealthSwitch = 'HealthSwitch' in params ? params.HealthSwitch : null;
        this.TimeOut = 'TimeOut' in params ? params.TimeOut : null;
        this.IntervalTime = 'IntervalTime' in params ? params.IntervalTime : null;
        this.HealthNum = 'HealthNum' in params ? params.HealthNum : null;
        this.UnhealthNum = 'UnhealthNum' in params ? params.UnhealthNum : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AddTimestamp = 'AddTimestamp' in params ? params.AddTimestamp : null;
        this.CustomHealthSwitch = 'CustomHealthSwitch' in params ? params.CustomHealthSwitch : null;
        this.InputType = 'InputType' in params ? params.InputType : null;
        this.LineSeparatorType = 'LineSeparatorType' in params ? params.LineSeparatorType : null;
        this.HealthRequest = 'HealthRequest' in params ? params.HealthRequest : null;
        this.HealthResponse = 'HealthResponse' in params ? params.HealthResponse : null;
        this.ToaFlag = 'ToaFlag' in params ? params.ToaFlag : null;
        this.BalanceMode = 'BalanceMode' in params ? params.BalanceMode : null;

    }
}

/**
 * DescribeL7Rules请求参数结构体
 * @class
 */
class DescribeL7RulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 七层监听器ID，可通过接口DescribeL7Listeners查询。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 转发域名ID列表，可通过接口DescribeL7Rules查询。
         * @type {Array.<string> || null}
         */
        this.DomainIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.DomainIds = 'DomainIds' in params ? params.DomainIds : null;

    }
}

/**
 * UnbindL7Backends返回参数结构体
 * @class
 */
class UnbindL7BackendsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
         * @type {string || null}
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
 * ModifyL4BackendWeight返回参数结构体
 * @class
 */
class ModifyL4BackendWeightResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
         * @type {string || null}
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
 * DeleteL7Domains返回参数结构体
 * @class
 */
class DeleteL7DomainsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
         * @type {string || null}
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
 * 获取设备绑定信息时返回的所绑定的主机信息。
 * @class
 */
class DevicesBindInfoBackend extends  AbstractModel {
    constructor(){
        super();

        /**
         * 黑石物理机的主机ID、托管主机ID或虚拟机IP。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 主机端口。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * UnbindL4Backends请求参数结构体
 * @class
 */
class UnbindL4BackendsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡四层监听器ID，可通过接口DescribeL4Listeners查询。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 待解绑的主机信息。可以绑定多个主机端口。目前一个四层监听器下面最多允许绑定255个主机端口。
         * @type {Array.<UnbindL4Backend> || null}
         */
        this.BackendSet = null;

        /**
         * 绑定类型。0：物理机 1：虚拟机 2：半托管机器
         * @type {number || null}
         */
        this.BindType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;

        if (params.BackendSet) {
            this.BackendSet = new Array();
            for (let z in params.BackendSet) {
                let obj = new UnbindL4Backend();
                obj.deserialize(params.BackendSet[z]);
                this.BackendSet.push(obj);
            }
        }
        this.BindType = 'BindType' in params ? params.BindType : null;

    }
}

/**
 * DescribeL7Listeners请求参数结构体
 * @class
 */
class DescribeL7ListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 七层监听器实例ID列表，可通过接口DescribeL7Listeners查询。
         * @type {Array.<string> || null}
         */
        this.ListenerIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerIds = 'ListenerIds' in params ? params.ListenerIds : null;

    }
}

/**
 * DescribeTrafficMirrorListeners请求参数结构体
 * @class
 */
class DescribeTrafficMirrorListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流量镜像实例ID。
         * @type {string || null}
         */
        this.TrafficMirrorId = null;

        /**
         * 分页的偏移量，也即从第几条记录开始查询
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 单次查询返回的条目数，默认值：500。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 待搜索的负载均衡Id。
         * @type {Array.<string> || null}
         */
        this.SearchLoadBalancerIds = null;

        /**
         * 待搜索的负载均衡名称。
         * @type {Array.<string> || null}
         */
        this.SearchLoadBalancerNames = null;

        /**
         * 待搜索的Vip。
         * @type {Array.<string> || null}
         */
        this.SearchVips = null;

        /**
         * 待搜索的监听器ID。
         * @type {Array.<string> || null}
         */
        this.SearchListenerIds = null;

        /**
         * 待搜索的监听器名称。
         * @type {Array.<string> || null}
         */
        this.SearchListenerNames = null;

        /**
         * 待搜索的协议名称。
         * @type {Array.<string> || null}
         */
        this.SearchProtocols = null;

        /**
         * 待搜索的端口。
         * @type {Array.<number> || null}
         */
        this.SearchLoadBalancerPorts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrafficMirrorId = 'TrafficMirrorId' in params ? params.TrafficMirrorId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchLoadBalancerIds = 'SearchLoadBalancerIds' in params ? params.SearchLoadBalancerIds : null;
        this.SearchLoadBalancerNames = 'SearchLoadBalancerNames' in params ? params.SearchLoadBalancerNames : null;
        this.SearchVips = 'SearchVips' in params ? params.SearchVips : null;
        this.SearchListenerIds = 'SearchListenerIds' in params ? params.SearchListenerIds : null;
        this.SearchListenerNames = 'SearchListenerNames' in params ? params.SearchListenerNames : null;
        this.SearchProtocols = 'SearchProtocols' in params ? params.SearchProtocols : null;
        this.SearchLoadBalancerPorts = 'SearchLoadBalancerPorts' in params ? params.SearchLoadBalancerPorts : null;

    }
}

/**
 * 待与七层监听器转发规则绑定的物理机主机、虚拟机或半托管主机信息。目前一个七层转发路径下面最多允许绑定255个主机端口。
 * @class
 */
class BindL7Backend extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待绑定的主机端口，可选值1~65535。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 黑石物理机主机ID、虚拟机IP或者是半托管主机ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 待绑定的主机权重，可选值0~100。
         * @type {number || null}
         */
        this.Weight = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Port = 'Port' in params ? params.Port : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

    }
}

/**
 * ModifyL7Listener返回参数结构体
 * @class
 */
class ModifyL7ListenerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID。该接口为异步任务，可根据本参数调用[DescribeLoadBalancerTaskResult](/document/product/386/9308)接口来查询任务操作结果
         * @type {string || null}
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
 * DescribeLoadBalancerTaskResult请求参数结构体
 * @class
 */
class DescribeLoadBalancerTaskResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID。由具体的异步操作接口提供。
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DescribeL7Rules返回参数结构体
 * @class
 */
class DescribeL7RulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的转发规则列表。
         * @type {Array.<L7Rule> || null}
         */
        this.RuleSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RuleSet) {
            this.RuleSet = new Array();
            for (let z in params.RuleSet) {
                let obj = new L7Rule();
                obj.deserialize(params.RuleSet[z]);
                this.RuleSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTrafficMirror返回参数结构体
 * @class
 */
class CreateTrafficMirrorResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流量镜像实例ID
         * @type {string || null}
         */
        this.TrafficMirrorId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrafficMirrorId = 'TrafficMirrorId' in params ? params.TrafficMirrorId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDevicesBindInfo请求参数结构体
 * @class
 */
class DescribeDevicesBindInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 黑石私有网络唯一ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 主机ID或虚机IP列表，可用于获取绑定了该主机的负载均衡列表。
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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * BindL4Backends返回参数结构体
 * @class
 */
class BindL4BackendsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
         * @type {string || null}
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
 * 获取流量镜像的监听器列表信息时返回的与流量镜像绑定的监听器信息。
 * @class
 */
class TrafficMirrorListener extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器ID。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 监听器名称。
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 七层监听器协议类型，可选值：http,https。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 监听器的监听端口。
         * @type {number || null}
         */
        this.LoadBalancerPort = null;

        /**
         * 当前带宽。
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 带宽上限。
         * @type {number || null}
         */
        this.MaxBandwidth = null;

        /**
         * 监听器类型。
         * @type {string || null}
         */
        this.ListenerType = null;

        /**
         * 认证方式：0（不认证，用于http），1（单向认证，用于https），2（双向认证，用于https）。
         * @type {number || null}
         */
        this.SslMode = null;

        /**
         * 服务端证书ID。
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * 客户端证书ID。
         * @type {string || null}
         */
        this.CertCaId = null;

        /**
         * 添加时间。
         * @type {string || null}
         */
        this.AddTimestamp = null;

        /**
         * 负载均衡ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 私有网络名称。
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * 私有网络Cidr。
         * @type {string || null}
         */
        this.VpcCidrBlock = null;

        /**
         * 负载均衡的VIP。
         * @type {Array.<string> || null}
         */
        this.LoadBalancerVips = null;

        /**
         * 负载均衡名称。
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * 负载均衡的IPV6的VIP。
         * @type {Array.<string> || null}
         */
        this.LoadBalancerVipv6s = null;

        /**
         * 支持的IP协议类型。ipv4或者是ipv6。
         * @type {string || null}
         */
        this.IpProtocolType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.LoadBalancerPort = 'LoadBalancerPort' in params ? params.LoadBalancerPort : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.MaxBandwidth = 'MaxBandwidth' in params ? params.MaxBandwidth : null;
        this.ListenerType = 'ListenerType' in params ? params.ListenerType : null;
        this.SslMode = 'SslMode' in params ? params.SslMode : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertCaId = 'CertCaId' in params ? params.CertCaId : null;
        this.AddTimestamp = 'AddTimestamp' in params ? params.AddTimestamp : null;
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.VpcCidrBlock = 'VpcCidrBlock' in params ? params.VpcCidrBlock : null;
        this.LoadBalancerVips = 'LoadBalancerVips' in params ? params.LoadBalancerVips : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;
        this.LoadBalancerVipv6s = 'LoadBalancerVipv6s' in params ? params.LoadBalancerVipv6s : null;
        this.IpProtocolType = 'IpProtocolType' in params ? params.IpProtocolType : null;

    }
}

/**
 * DescribeL7ListenersEx返回参数结构体
 * @class
 */
class DescribeL7ListenersExResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 此指定VPC中负载均衡的总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 符合条件的监听器。
         * @type {Array.<L7ExListener> || null}
         */
        this.ListenerSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ListenerSet) {
            this.ListenerSet = new Array();
            for (let z in params.ListenerSet) {
                let obj = new L7ExListener();
                obj.deserialize(params.ListenerSet[z]);
                this.ListenerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 待与七层监听器转发规则解绑的物理机主机、虚拟机或半托管主机信息。
 * @class
 */
class UnbindL7Backend extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待解绑的主机端口，可选值1~65535。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 黑石物理机主机ID、虚拟机IP或者是半托管主机ID。
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
        this.Port = 'Port' in params ? params.Port : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * 获取与流量镜像绑定的接收机信息时返回的接收机信息。
 * @class
 */
class TrafficMirrorReceiver extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接收机实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 接收机接收端口。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 接收机权重。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 流量镜像ID。
         * @type {string || null}
         */
        this.TrafficMirrorId = null;

        /**
         * 接收机别名。
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 接收机内网IP地址。
         * @type {string || null}
         */
        this.LanIp = null;

        /**
         * 接收机所在的子网的ID。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 接收机所在的子网的名称。
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * 接收机所在的子网的Cidr。
         * @type {string || null}
         */
        this.SubnetCidrBlock = null;

        /**
         * 接收机所在的私有网络的ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 接收机所在的私有网络的名称。
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * 接收机所在的私有网络的Cidr。
         * @type {string || null}
         */
        this.VpcCidrBlock = null;

        /**
         * 接收机的健康状态。
         * @type {string || null}
         */
        this.HealthStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.TrafficMirrorId = 'TrafficMirrorId' in params ? params.TrafficMirrorId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.LanIp = 'LanIp' in params ? params.LanIp : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.SubnetCidrBlock = 'SubnetCidrBlock' in params ? params.SubnetCidrBlock : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.VpcCidrBlock = 'VpcCidrBlock' in params ? params.VpcCidrBlock : null;
        this.HealthStatus = 'HealthStatus' in params ? params.HealthStatus : null;

    }
}

/**
 * 流量镜像健康检查返回的接收机的端口及状态信息。
 * @class
 */
class TrafficMirrorPortStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接收机端口。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 状态。
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
        this.Port = 'Port' in params ? params.Port : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * UploadCert返回参数结构体
 * @class
 */
class UploadCertResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新建的证书ID。
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTrafficMirrorReceivers返回参数结构体
 * @class
 */
class DescribeTrafficMirrorReceiversResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接收机列表，具体结构描述如data结构所示。
         * @type {Array.<TrafficMirrorReceiver> || null}
         */
        this.ReceiverSet = null;

        /**
         * 接收机总数。
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

        if (params.ReceiverSet) {
            this.ReceiverSet = new Array();
            for (let z in params.ReceiverSet) {
                let obj = new TrafficMirrorReceiver();
                obj.deserialize(params.ReceiverSet[z]);
                this.ReceiverSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteListeners请求参数结构体
 * @class
 */
class DeleteListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 待删除的负载均衡四层和七层监听器ID列表，可通过接口DescribeL4Listeners和DescribeL7Listeners查询。目前同时只能删除一种类型的监听器，并且删除七层监听器的数量上限为一个。
         * @type {Array.<string> || null}
         */
        this.ListenerIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerIds = 'ListenerIds' in params ? params.ListenerIds : null;

    }
}

/**
 * ModifyL4BackendProbePort请求参数结构体
 * @class
 */
class ModifyL4BackendProbePortRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡四层监听器ID，可通过接口DescribeL7Listeners查询。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 黑石物理机主机ID、虚拟机IP或者是半托管主机ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 已绑定的主机端口。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 新的探测端口，可选值1~65535。
         * @type {number || null}
         */
        this.ProbePort = null;

        /**
         * 绑定类型。0：物理机 1：虚拟机IP 2：半托管机器
         * @type {number || null}
         */
        this.BindType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.ProbePort = 'ProbePort' in params ? params.ProbePort : null;
        this.BindType = 'BindType' in params ? params.BindType : null;

    }
}

/**
 * DescribeTrafficMirrors请求参数结构体
 * @class
 */
class DescribeTrafficMirrorsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流量镜像实例ID的数组，支持批量查询
         * @type {Array.<string> || null}
         */
        this.TrafficMirrorIds = null;

        /**
         * 流量镜像实例别名数组。
         * @type {Array.<string> || null}
         */
        this.Aliases = null;

        /**
         * 流量镜像实例所属的私有网络ID数组，形如：vpc-xxx。
         * @type {Array.<string> || null}
         */
        this.VpcIds = null;

        /**
         * 分页的偏移量，也即从第几条记录开始查询
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 单次查询返回的条目数，默认值：500。
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
        this.TrafficMirrorIds = 'TrafficMirrorIds' in params ? params.TrafficMirrorIds : null;
        this.Aliases = 'Aliases' in params ? params.Aliases : null;
        this.VpcIds = 'VpcIds' in params ? params.VpcIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * UploadCert请求参数结构体
 * @class
 */
class UploadCertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书类型，可选值：CA，SVR。
         * @type {string || null}
         */
        this.CertType = null;

        /**
         * 证书内容。
         * @type {string || null}
         */
        this.Cert = null;

        /**
         * 证书别名。
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 私钥内容，证书类型为SVR时不需要传递。
         * @type {string || null}
         */
        this.Key = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.Cert = 'Cert' in params ? params.Cert : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.Key = 'Key' in params ? params.Key : null;

    }
}

/**
 * DescribeL4ListenerInfo返回参数结构体
 * @class
 */
class DescribeL4ListenerInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的四层监听器列表。
         * @type {Array.<L4ListenerInfo> || null}
         */
        this.ListenerSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ListenerSet) {
            this.ListenerSet = new Array();
            for (let z in params.ListenerSet) {
                let obj = new L4ListenerInfo();
                obj.deserialize(params.ListenerSet[z]);
                this.ListenerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindTrafficMirrorListeners请求参数结构体
 * @class
 */
class BindTrafficMirrorListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流量镜像实例ID。
         * @type {string || null}
         */
        this.TrafficMirrorId = null;

        /**
         * 七层监听器实例ID数组，可通过接口DescribeL7Listeners查询。
         * @type {Array.<string> || null}
         */
        this.ListenerIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrafficMirrorId = 'TrafficMirrorId' in params ? params.TrafficMirrorId : null;
        this.ListenerIds = 'ListenerIds' in params ? params.ListenerIds : null;

    }
}

/**
 * ModifyL7BackendPort请求参数结构体
 * @class
 */
class ModifyL7BackendPortRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 七层监听器实例ID，可通过接口DescribeL7Listeners查询。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 转发域名实例ID，可通过接口DescribeL7Rules查询。
         * @type {string || null}
         */
        this.DomainId = null;

        /**
         * 转发路径实例ID，可通过接口DescribeL7Rules查询。
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * 黑石物理机主机ID、虚拟机IP或者是半托管主机ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 已绑定的主机端口。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 新的主机端口，可选值1~65535。
         * @type {number || null}
         */
        this.NewPort = null;

        /**
         * 绑定类型。0：物理机 1：虚拟机 2：半托管机器
         * @type {number || null}
         */
        this.BindType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.NewPort = 'NewPort' in params ? params.NewPort : null;
        this.BindType = 'BindType' in params ? params.BindType : null;

    }
}

/**
 * ModifyL4BackendPort请求参数结构体
 * @class
 */
class ModifyL4BackendPortRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡四层监听器ID，可通过接口DescribeL4Listeners查询。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 黑石物理机主机ID、虚拟机IP或者是半托管主机ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 已绑定的主机端口。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 新的主机端口，可选值1~65535。
         * @type {number || null}
         */
        this.NewPort = null;

        /**
         * 绑定类型。0：物理机  1：虚拟机 2：半托管机器
         * @type {number || null}
         */
        this.BindType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.NewPort = 'NewPort' in params ? params.NewPort : null;
        this.BindType = 'BindType' in params ? params.BindType : null;

    }
}

/**
 * DescribeL4Listeners返回参数结构体
 * @class
 */
class DescribeL4ListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器信息数组。
         * @type {Array.<L4Listener> || null}
         */
        this.ListenerSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ListenerSet) {
            this.ListenerSet = new Array();
            for (let z in params.ListenerSet) {
                let obj = new L4Listener();
                obj.deserialize(params.ListenerSet[z]);
                this.ListenerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyL7Locations请求参数结构体
 * @class
 */
class ModifyL7LocationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 七层监听器实例ID，可通过接口DescribeL7Listeners查询。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 待更新的七层转发规则信息数组。
         * @type {Array.<ModifyL7LocationRule> || null}
         */
        this.RuleSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;

        if (params.RuleSet) {
            this.RuleSet = new Array();
            for (let z in params.RuleSet) {
                let obj = new ModifyL7LocationRule();
                obj.deserialize(params.RuleSet[z]);
                this.RuleSet.push(obj);
            }
        }

    }
}

/**
 * ModifyLoadBalancer返回参数结构体
 * @class
 */
class ModifyLoadBalancerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
         * @type {string || null}
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
 * CreateL4Listeners返回参数结构体
 * @class
 */
class CreateL4ListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果
         * @type {string || null}
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
 * ModifyL7BackendWeight返回参数结构体
 * @class
 */
class ModifyL7BackendWeightResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果
         * @type {string || null}
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
 * DescribeTrafficMirrors返回参数结构体
 * @class
 */
class DescribeTrafficMirrorsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流量镜像总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 对象数组。数组元素为流量镜像信息，具体结构描述如list结构所示。
         * @type {Array.<TrafficMirror> || null}
         */
        this.TrafficMirrorSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.TrafficMirrorSet) {
            this.TrafficMirrorSet = new Array();
            for (let z in params.TrafficMirrorSet) {
                let obj = new TrafficMirror();
                obj.deserialize(params.TrafficMirrorSet[z]);
                this.TrafficMirrorSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeL7Backends请求参数结构体
 * @class
 */
class DescribeL7BackendsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 七层监听器实例ID，可通过接口DescribeL7Listeners查询。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 转发域名实例ID，可通过接口DescribeL7Rules查询。
         * @type {string || null}
         */
        this.DomainId = null;

        /**
         * 转发路径实例ID，可通过接口DescribeL7Rules查询。
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * 查询条件，传'all'则查询所有与规则绑定的主机信息。
         * @type {string || null}
         */
        this.QueryType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.QueryType = 'QueryType' in params ? params.QueryType : null;

    }
}

/**
 * 获取黑石负载均衡七层监听器时返回的七层监听器信息。
 * @class
 */
class L7Listener extends  AbstractModel {
    constructor(){
        super();

        /**
         * 七层监听器实例ID。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 七层监听器名称。
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 七层监听器协议类型，可选值：http,https。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 七层监听器的监听端口。
         * @type {number || null}
         */
        this.LoadBalancerPort = null;

        /**
         * 计费模式为按固定带宽方式时监听器的限速值，单位：Mbps。
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 监听器的类别：L4Listener（四层监听器），L7Listener（七层监听器）。
         * @type {string || null}
         */
        this.ListenerType = null;

        /**
         * 七层监听器的认证方式：0（不认证，用于http），1（单向认证，用于https），2（双向认证，用于https）。
         * @type {number || null}
         */
        this.SslMode = null;

        /**
         * 七层监听器关联的服务端证书ID。
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * 七层监听器关联的客户端证书ID。
         * @type {string || null}
         */
        this.CertCaId = null;

        /**
         * 监听器当前状态（0代表创建中，1代表正常运行，2代表创建失败，3代表删除中，4代表删除失败）。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 创建时间戳。
         * @type {string || null}
         */
        this.AddTimestamp = null;

        /**
         * https转发类型。0：关闭。1：spdy。2：http2。3：spdy+http2。
         * @type {number || null}
         */
        this.ForwardProtocol = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.LoadBalancerPort = 'LoadBalancerPort' in params ? params.LoadBalancerPort : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.ListenerType = 'ListenerType' in params ? params.ListenerType : null;
        this.SslMode = 'SslMode' in params ? params.SslMode : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertCaId = 'CertCaId' in params ? params.CertCaId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AddTimestamp = 'AddTimestamp' in params ? params.AddTimestamp : null;
        this.ForwardProtocol = 'ForwardProtocol' in params ? params.ForwardProtocol : null;

    }
}

/**
 * CreateL7Rules请求参数结构体
 * @class
 */
class CreateL7RulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 七层监听器实例ID，可通过接口DescribeL7Listeners查询。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 七层转发规则信息数组，可以创建多个七层转发规则。目前一个七层监听器下面最多允许创建50个七层转发域名，而每一个转发域名下最多可以创建100个转发规则。目前只能单条创建，不能批量创建。
         * @type {Array.<CreateL7Rule> || null}
         */
        this.RuleSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;

        if (params.RuleSet) {
            this.RuleSet = new Array();
            for (let z in params.RuleSet) {
                let obj = new CreateL7Rule();
                obj.deserialize(params.RuleSet[z]);
                this.RuleSet.push(obj);
            }
        }

    }
}

/**
 * ModifyL7BackendWeight请求参数结构体
 * @class
 */
class ModifyL7BackendWeightRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 七层监听器实例ID，可通过接口DescribeL7Listeners查询。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 转发域名实例ID，可通过接口DescribeL7Rules查询。
         * @type {string || null}
         */
        this.DomainId = null;

        /**
         * 转发路径实例ID，可通过接口DescribeL7Rules查询。
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * 黑石物理机主机ID、虚拟机IP或者是半托管主机ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 权重信息，可选值0~100。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 已绑定的主机端口。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 绑定类型。0：物理机 1：虚拟机 2：半托管机器
         * @type {number || null}
         */
        this.BindType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.BindType = 'BindType' in params ? params.BindType : null;

    }
}

/**
 * CreateL4Listeners请求参数结构体
 * @class
 */
class CreateL4ListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 监听器信息数组，可以创建多个监听器。目前一个负载均衡下面最多允许创建50个监听器
         * @type {Array.<CreateL4Listener> || null}
         */
        this.ListenerSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;

        if (params.ListenerSet) {
            this.ListenerSet = new Array();
            for (let z in params.ListenerSet) {
                let obj = new CreateL4Listener();
                obj.deserialize(params.ListenerSet[z]);
                this.ListenerSet.push(obj);
            }
        }

    }
}

/**
 * ReplaceCert请求参数结构体
 * @class
 */
class ReplaceCertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要被替换的证书ID
         * @type {string || null}
         */
        this.OldCertId = null;

        /**
         * 证书内容
         * @type {string || null}
         */
        this.NewCert = null;

        /**
         * 证书名称
         * @type {string || null}
         */
        this.NewAlias = null;

        /**
         * 私钥内容，证书类型为SVR时不需要传递
         * @type {string || null}
         */
        this.NewKey = null;

        /**
         * 是否删除旧证书，0 表示不删除，1 表示删除
         * @type {number || null}
         */
        this.DeleteOld = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OldCertId = 'OldCertId' in params ? params.OldCertId : null;
        this.NewCert = 'NewCert' in params ? params.NewCert : null;
        this.NewAlias = 'NewAlias' in params ? params.NewAlias : null;
        this.NewKey = 'NewKey' in params ? params.NewKey : null;
        this.DeleteOld = 'DeleteOld' in params ? params.DeleteOld : null;

    }
}

/**
 * BindL7Backends返回参数结构体
 * @class
 */
class BindL7BackendsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
         * @type {string || null}
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
 * 获取七层监听器转发规则时返回的转发规则。
 * @class
 */
class L7Rule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转发域名。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 转发域名实例ID。
         * @type {string || null}
         */
        this.DomainId = null;

        /**
         * 转发路径当前状态（0代表创建中，1代表正常运行，2代表创建失败，3代表删除中，4代表删除失败）。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 创建时间戳。
         * @type {string || null}
         */
        this.AddTimestamp = null;

        /**
         * 该转发域名下面的转发路径列表。
         * @type {Array.<L7RulesLocation> || null}
         */
        this.LocationSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AddTimestamp = 'AddTimestamp' in params ? params.AddTimestamp : null;

        if (params.LocationSet) {
            this.LocationSet = new Array();
            for (let z in params.LocationSet) {
                let obj = new L7RulesLocation();
                obj.deserialize(params.LocationSet[z]);
                this.LocationSet.push(obj);
            }
        }

    }
}

/**
 * UnbindTrafficMirrorReceivers返回参数结构体
 * @class
 */
class UnbindTrafficMirrorReceiversResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
         * @type {string || null}
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
 * DeleteL7Domains请求参数结构体
 * @class
 */
class DeleteL7DomainsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 七层监听器实例ID，可通过接口DescribeL7Listeners查询。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 转发域名实例ID列表，可通过接口DescribeL7Rules查询。
         * @type {Array.<string> || null}
         */
        this.DomainIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.DomainIds = 'DomainIds' in params ? params.DomainIds : null;

    }
}

/**
 * BindTrafficMirrorReceivers请求参数结构体
 * @class
 */
class BindTrafficMirrorReceiversRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流量镜像实例ID。
         * @type {string || null}
         */
        this.TrafficMirrorId = null;

        /**
         * 待绑定的黑石物理机信息数组。
         * @type {Array.<BindTrafficMirrorReceiver> || null}
         */
        this.ReceiverSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrafficMirrorId = 'TrafficMirrorId' in params ? params.TrafficMirrorId : null;

        if (params.ReceiverSet) {
            this.ReceiverSet = new Array();
            for (let z in params.ReceiverSet) {
                let obj = new BindTrafficMirrorReceiver();
                obj.deserialize(params.ReceiverSet[z]);
                this.ReceiverSet.push(obj);
            }
        }

    }
}

/**
 * BindTrafficMirrorListeners返回参数结构体
 * @class
 */
class BindTrafficMirrorListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
         * @type {string || null}
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
 * BindL7Backends请求参数结构体
 * @class
 */
class BindL7BackendsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 七层监听器实例ID，可通过接口DescribeL7Listeners查询。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 转发域名实例ID，可通过接口DescribeL7Rules查询。
         * @type {string || null}
         */
        this.DomainId = null;

        /**
         * 转发路径实例ID，可通过接口DescribeL7Rules查询。
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * 待绑定的主机信息。可以绑定多个主机端口。目前一个七层转发路径下面最多允许绑定255个主机端口。
         * @type {Array.<BindL7Backend> || null}
         */
        this.BackendSet = null;

        /**
         * 绑定类型。0：物理机，1：虚拟机 2：半托管机器。
         * @type {number || null}
         */
        this.BindType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.LocationId = 'LocationId' in params ? params.LocationId : null;

        if (params.BackendSet) {
            this.BackendSet = new Array();
            for (let z in params.BackendSet) {
                let obj = new BindL7Backend();
                obj.deserialize(params.BackendSet[z]);
                this.BackendSet.push(obj);
            }
        }
        this.BindType = 'BindType' in params ? params.BindType : null;

    }
}

/**
 * 待查询四层监听器绑定的主机信息。
 * @class
 */
class DescribeL4Backend extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待绑定的主机端口，可选值1~65535。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 黑石物理机的主机ID。
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
        this.Port = 'Port' in params ? params.Port : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeCertDetail返回参数结构体
 * @class
 */
class DescribeCertDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书ID。
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * 证书名称。
         * @type {string || null}
         */
        this.CertName = null;

        /**
         * 证书类型（SVR=服务器证书，CA=客户端证书）。
         * @type {string || null}
         */
        this.CertType = null;

        /**
         * 证书内容。
         * @type {string || null}
         */
        this.CertContent = null;

        /**
         * 证书主域名。
         * @type {string || null}
         */
        this.CertDomain = null;

        /**
         * 证书子域名列表。
         * @type {Array.<string> || null}
         */
        this.CertSubjectDomain = null;

        /**
         * 证书上传时间。
         * @type {string || null}
         */
        this.CertUploadTime = null;

        /**
         * 证书生效时间。
         * @type {string || null}
         */
        this.CertBeginTime = null;

        /**
         * 证书失效时间。
         * @type {string || null}
         */
        this.CertEndTime = null;

        /**
         * 该证书关联的黑石负载均衡对象列表。
         * @type {Array.<CertDetailLoadBalancer> || null}
         */
        this.CertLoadBalancerSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.CertContent = 'CertContent' in params ? params.CertContent : null;
        this.CertDomain = 'CertDomain' in params ? params.CertDomain : null;
        this.CertSubjectDomain = 'CertSubjectDomain' in params ? params.CertSubjectDomain : null;
        this.CertUploadTime = 'CertUploadTime' in params ? params.CertUploadTime : null;
        this.CertBeginTime = 'CertBeginTime' in params ? params.CertBeginTime : null;
        this.CertEndTime = 'CertEndTime' in params ? params.CertEndTime : null;

        if (params.CertLoadBalancerSet) {
            this.CertLoadBalancerSet = new Array();
            for (let z in params.CertLoadBalancerSet) {
                let obj = new CertDetailLoadBalancer();
                obj.deserialize(params.CertLoadBalancerSet[z]);
                this.CertLoadBalancerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeL4Backends请求参数结构体
 * @class
 */
class DescribeL4BackendsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡四层监听器ID，可通过接口DescribeL4Listeners查询。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 待查询的主机信息。
         * @type {Array.<DescribeL4Backend> || null}
         */
        this.BackendSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;

        if (params.BackendSet) {
            this.BackendSet = new Array();
            for (let z in params.BackendSet) {
                let obj = new DescribeL4Backend();
                obj.deserialize(params.BackendSet[z]);
                this.BackendSet.push(obj);
            }
        }

    }
}

/**
 * DescribeTrafficMirrorReceiverHealthStatus返回参数结构体
 * @class
 */
class DescribeTrafficMirrorReceiverHealthStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内网IP和端口对应的状态。
         * @type {Array.<TrafficMirrorReciversStatus> || null}
         */
        this.ReceiversStatusSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ReceiversStatusSet) {
            this.ReceiversStatusSet = new Array();
            for (let z in params.ReceiversStatusSet) {
                let obj = new TrafficMirrorReciversStatus();
                obj.deserialize(params.ReceiversStatusSet[z]);
                this.ReceiversStatusSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindTrafficMirrorReceivers返回参数结构体
 * @class
 */
class BindTrafficMirrorReceiversResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
         * @type {string || null}
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
 * ReplaceCert返回参数结构体
 * @class
 */
class ReplaceCertResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新证书ID。
         * @type {string || null}
         */
        this.NewCertId = null;

        /**
         * 旧证书ID。
         * @type {string || null}
         */
        this.OldCertId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NewCertId = 'NewCertId' in params ? params.NewCertId : null;
        this.OldCertId = 'OldCertId' in params ? params.OldCertId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLoadBalancerPortInfo请求参数结构体
 * @class
 */
class DescribeLoadBalancerPortInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;

    }
}

/**
 * 获取设备绑定信息时返回的设备所绑定的转发路径信息。
 * @class
 */
class DevicesBindInfoLocation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转发路径。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 转发路径实例ID。
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * 该转发路径所绑定的主机列表。
         * @type {Array.<DevicesBindInfoBackend> || null}
         */
        this.BackendSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.LocationId = 'LocationId' in params ? params.LocationId : null;

        if (params.BackendSet) {
            this.BackendSet = new Array();
            for (let z in params.BackendSet) {
                let obj = new DevicesBindInfoBackend();
                obj.deserialize(params.BackendSet[z]);
                this.BackendSet.push(obj);
            }
        }

    }
}

/**
 * SetTrafficMirrorHealthSwitch返回参数结构体
 * @class
 */
class SetTrafficMirrorHealthSwitchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
         * @type {string || null}
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
 * DeleteLoadBalancer请求参数结构体
 * @class
 */
class DeleteLoadBalancerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;

    }
}

/**
 * UnbindTrafficMirrorListeners返回参数结构体
 * @class
 */
class UnbindTrafficMirrorListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
         * @type {string || null}
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
 * 用于创建七层监听器的转发规则的信息。目前一个七层监听器下面最多允许创建50个七层转发域名，而每一个转发域名下最多可以创建100个转发规则。
 * @class
 */
class CreateL7Rule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 七层转发规则的转发域名。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 七层转发规则的转发路径。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 会话保持时间，单位：秒。可选值：30~3600。默认值0，表示不开启会话保持。
         * @type {number || null}
         */
        this.SessionExpire = null;

        /**
         * 健康检查开关：1（开启）、0（关闭）。默认值0，表示关闭。
         * @type {number || null}
         */
        this.HealthSwitch = null;

        /**
         * 健康检查检查间隔时间，默认值：5，可选值：5-300，单位：秒。
         * @type {number || null}
         */
        this.IntervalTime = null;

        /**
         * 健康检查健康阈值，默认值：3，表示当连续探测三次健康则表示该转发正常，可选值：2-10，单位：次。
         * @type {number || null}
         */
        this.HealthNum = null;

        /**
         * 健康检查不健康阈值，默认值：5，表示当连续探测五次不健康则表示该转发不正常，可选值：2-10，单位：次。
         * @type {number || null}
         */
        this.UnhealthNum = null;

        /**
         * 健康检查中认为健康的HTTP返回码的组合。可选值为1~5的集合，1表示HTTP返回码为1xx认为健康。2表示HTTP返回码为2xx认为健康。3表示HTTP返回码为3xx认为健康。4表示HTTP返回码为4xx认为健康。5表示HTTP返回码为5xx认为健康。
         * @type {Array.<number> || null}
         */
        this.HttpCodes = null;

        /**
         * 健康检查检查路径。
         * @type {string || null}
         */
        this.HttpCheckPath = null;

        /**
         * 健康检查检查域名。如果创建规则的域名使用通配符或正则表达式，则健康检查检查域名可自定义，否则必须跟健康检查检查域名一样。
         * @type {string || null}
         */
        this.HttpCheckDomain = null;

        /**
         * 均衡方式：ip_hash、wrr。默认值wrr。
         * @type {string || null}
         */
        this.BalanceMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.SessionExpire = 'SessionExpire' in params ? params.SessionExpire : null;
        this.HealthSwitch = 'HealthSwitch' in params ? params.HealthSwitch : null;
        this.IntervalTime = 'IntervalTime' in params ? params.IntervalTime : null;
        this.HealthNum = 'HealthNum' in params ? params.HealthNum : null;
        this.UnhealthNum = 'UnhealthNum' in params ? params.UnhealthNum : null;
        this.HttpCodes = 'HttpCodes' in params ? params.HttpCodes : null;
        this.HttpCheckPath = 'HttpCheckPath' in params ? params.HttpCheckPath : null;
        this.HttpCheckDomain = 'HttpCheckDomain' in params ? params.HttpCheckDomain : null;
        this.BalanceMode = 'BalanceMode' in params ? params.BalanceMode : null;

    }
}

/**
 * CreateL7Rules返回参数结构体
 * @class
 */
class CreateL7RulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
         * @type {string || null}
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
 * ModifyL7Listener请求参数结构体
 * @class
 */
class ModifyL7ListenerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 七层监听器实例ID，可通过接口DescribeL7Listeners查询。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 七层监听器名称。
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 认证方式：0（不认证，用于http），1（单向认证，用于https），2（双向认证，用于https）。
         * @type {number || null}
         */
        this.SslMode = null;

        /**
         * 服务端证书ID。
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * 服务端证书名称。
         * @type {string || null}
         */
        this.CertName = null;

        /**
         * 服务端证书内容。
         * @type {string || null}
         */
        this.CertContent = null;

        /**
         * 服务端证书密钥。
         * @type {string || null}
         */
        this.CertKey = null;

        /**
         * 客户端证书ID。
         * @type {string || null}
         */
        this.CertCaId = null;

        /**
         * 客户端证书名称。
         * @type {string || null}
         */
        this.CertCaName = null;

        /**
         * 客户端证书内容。
         * @type {string || null}
         */
        this.CertCaContent = null;

        /**
         * 计费模式为按固定带宽方式时监听器的限速值，可选值：0-1000，单位：Mbps。
         * @type {number || null}
         */
        this.Bandwidth = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.SslMode = 'SslMode' in params ? params.SslMode : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.CertContent = 'CertContent' in params ? params.CertContent : null;
        this.CertKey = 'CertKey' in params ? params.CertKey : null;
        this.CertCaId = 'CertCaId' in params ? params.CertCaId : null;
        this.CertCaName = 'CertCaName' in params ? params.CertCaName : null;
        this.CertCaContent = 'CertCaContent' in params ? params.CertCaContent : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;

    }
}

/**
 * 流量镜像进行健康检查的接收机信息。
 * @class
 */
class DescribeTrafficMirrorReceiver extends  AbstractModel {
    constructor(){
        super();

        /**
         * 物理机实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 物理机绑定的端口。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * 监听器信息。
 * @class
 */
class L7ExListener extends  AbstractModel {
    constructor(){
        super();

        /**
         * 绑定的监听器唯一ID。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 监听器名称。
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 七层监听器协议类型，可选值：http,https。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 监听器的监听端口。
         * @type {number || null}
         */
        this.LoadBalancerPort = null;

        /**
         * 当前带宽。
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 带宽上限。
         * @type {number || null}
         */
        this.MaxBandwidth = null;

        /**
         * 监听器类型。
         * @type {string || null}
         */
        this.ListenerType = null;

        /**
         * 认证方式：0（不认证，用于http），1（单向认证，用于https），2（双向认证，用于https）。
         * @type {number || null}
         */
        this.SslMode = null;

        /**
         * 服务端证书ID。
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * 客户端证书ID。
         * @type {string || null}
         */
        this.CertCaId = null;

        /**
         * 添加时间。
         * @type {string || null}
         */
        this.AddTimestamp = null;

        /**
         * 负载均衡名ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 私有网络名称。
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * 私有网络Cidr。
         * @type {string || null}
         */
        this.VpcCidrBlock = null;

        /**
         * 负载均衡的VIP。
         * @type {Array.<string> || null}
         */
        this.LoadBalancerVips = null;

        /**
         * 负载均衡名称。
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * 负载均衡IPV6的VIP。
         * @type {Array.<string> || null}
         */
        this.LoadBalancerVipv6s = null;

        /**
         * 支持的IP协议类型。ipv4或者是ipv6。
         * @type {string || null}
         */
        this.IpProtocolType = null;

        /**
         * 是否绑定在入参指定的流量镜像中。
         * @type {boolean || null}
         */
        this.BindTrafficMirror = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.LoadBalancerPort = 'LoadBalancerPort' in params ? params.LoadBalancerPort : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.MaxBandwidth = 'MaxBandwidth' in params ? params.MaxBandwidth : null;
        this.ListenerType = 'ListenerType' in params ? params.ListenerType : null;
        this.SslMode = 'SslMode' in params ? params.SslMode : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertCaId = 'CertCaId' in params ? params.CertCaId : null;
        this.AddTimestamp = 'AddTimestamp' in params ? params.AddTimestamp : null;
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.VpcCidrBlock = 'VpcCidrBlock' in params ? params.VpcCidrBlock : null;
        this.LoadBalancerVips = 'LoadBalancerVips' in params ? params.LoadBalancerVips : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;
        this.LoadBalancerVipv6s = 'LoadBalancerVipv6s' in params ? params.LoadBalancerVipv6s : null;
        this.IpProtocolType = 'IpProtocolType' in params ? params.IpProtocolType : null;
        this.BindTrafficMirror = 'BindTrafficMirror' in params ? params.BindTrafficMirror : null;

    }
}

/**
 * 查询绑定了某主机的七层监听器时返回的七层监听器信息。
 * @class
 */
class L7ListenerInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 七层监听器实例ID。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 七层监听器名称。
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 七层监听器协议类型，可选值：http,https。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 七层监听器的监听端口。
         * @type {number || null}
         */
        this.LoadBalancerPort = null;

        /**
         * 计费模式为按固定带宽方式时监听器的限速值，单位：Mbps。
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 监听器的类别：L4Listener（四层监听器），L7Listener（七层监听器）。
         * @type {string || null}
         */
        this.ListenerType = null;

        /**
         * 七层监听器的认证方式：0（不认证，用于http），1（单向认证，用于https），2（双向认证，用于https）。
         * @type {number || null}
         */
        this.SslMode = null;

        /**
         * 七层监听器关联的服务端证书ID。
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * 七层监听器关联的客户端证书ID。
         * @type {string || null}
         */
        this.CertCaId = null;

        /**
         * 当前绑定关系的健康检查状态（Dead代表不健康，Alive代表健康）。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 创建时间戳。
         * @type {string || null}
         */
        this.AddTimestamp = null;

        /**
         * 返回的转发规则列表。
         * @type {Array.<L7ListenerInfoRule> || null}
         */
        this.RuleSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.LoadBalancerPort = 'LoadBalancerPort' in params ? params.LoadBalancerPort : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.ListenerType = 'ListenerType' in params ? params.ListenerType : null;
        this.SslMode = 'SslMode' in params ? params.SslMode : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertCaId = 'CertCaId' in params ? params.CertCaId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AddTimestamp = 'AddTimestamp' in params ? params.AddTimestamp : null;

        if (params.RuleSet) {
            this.RuleSet = new Array();
            for (let z in params.RuleSet) {
                let obj = new L7ListenerInfoRule();
                obj.deserialize(params.RuleSet[z]);
                this.RuleSet.push(obj);
            }
        }

    }
}

/**
 * 查询绑定了某主机的七层监听器时返回的转发规则。
 * @class
 */
class L7ListenerInfoRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转发域名。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 转发域名实例ID。
         * @type {string || null}
         */
        this.DomainId = null;

        /**
         * 当前绑定关系的健康检查状态（Dead代表不健康，Alive代表健康）。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 创建时间戳。
         * @type {string || null}
         */
        this.AddTimestamp = null;

        /**
         * 该转发域名下面的转发路径列表。
         * @type {Array.<L7ListenerInfoLocation> || null}
         */
        this.LocationSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AddTimestamp = 'AddTimestamp' in params ? params.AddTimestamp : null;

        if (params.LocationSet) {
            this.LocationSet = new Array();
            for (let z in params.LocationSet) {
                let obj = new L7ListenerInfoLocation();
                obj.deserialize(params.LocationSet[z]);
                this.LocationSet.push(obj);
            }
        }

    }
}

/**
 * DescribeL7Backends返回参数结构体
 * @class
 */
class DescribeL7BackendsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的绑定关系列表。
         * @type {Array.<L7Backend> || null}
         */
        this.BackendSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BackendSet) {
            this.BackendSet = new Array();
            for (let z in params.BackendSet) {
                let obj = new L7Backend();
                obj.deserialize(params.BackendSet[z]);
                this.BackendSet.push(obj);
            }
        }
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
 * 获取设备绑定信息时返回的设备所绑定的转发规则信息。
 * @class
 */
class DevicesBindInfoRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转发域名。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 转发域名ID。
         * @type {string || null}
         */
        this.DomainId = null;

        /**
         * 转发路径列表。
         * @type {Array.<DevicesBindInfoLocation> || null}
         */
        this.LocationSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;

        if (params.LocationSet) {
            this.LocationSet = new Array();
            for (let z in params.LocationSet) {
                let obj = new DevicesBindInfoLocation();
                obj.deserialize(params.LocationSet[z]);
                this.LocationSet.push(obj);
            }
        }

    }
}

/**
 * 获取流量镜像实例的列表信息时返回的流量镜像信息。
 * @class
 */
class TrafficMirror extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流量镜像ID。
         * @type {string || null}
         */
        this.TrafficMirrorId = null;

        /**
         * 流量镜像名称。
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 流量镜像所在的私有网络ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 接收机负载均衡方式。wrr，ip_hash，wlc。
         * @type {string || null}
         */
        this.LoadBalancerType = null;

        /**
         * 是否开始对接收机的健康检查。0：关闭，非0：开启。
         * @type {number || null}
         */
        this.HealthSwitch = null;

        /**
         * 健康阈值。
         * @type {number || null}
         */
        this.HealthNum = null;

        /**
         * 不健康阈值。
         * @type {number || null}
         */
        this.UnhealthNum = null;

        /**
         * 检查间隔。
         * @type {number || null}
         */
        this.IntervalTime = null;

        /**
         * 检查域名。
         * @type {string || null}
         */
        this.HttpCheckDomain = null;

        /**
         * 检查目录。
         * @type {string || null}
         */
        this.HttpCheckPath = null;

        /**
         * 健康检查返回码。 1：1xx，2：2xx，3：3xx，4：4xx，5：5xx。
         * @type {Array.<number> || null}
         */
        this.HttpCodes = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 流量镜像所在私有网络的Cidr。
         * @type {string || null}
         */
        this.VpcCidrBlock = null;

        /**
         * 流量镜像所在私有网络的名称。
         * @type {string || null}
         */
        this.VpcName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrafficMirrorId = 'TrafficMirrorId' in params ? params.TrafficMirrorId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.LoadBalancerType = 'LoadBalancerType' in params ? params.LoadBalancerType : null;
        this.HealthSwitch = 'HealthSwitch' in params ? params.HealthSwitch : null;
        this.HealthNum = 'HealthNum' in params ? params.HealthNum : null;
        this.UnhealthNum = 'UnhealthNum' in params ? params.UnhealthNum : null;
        this.IntervalTime = 'IntervalTime' in params ? params.IntervalTime : null;
        this.HttpCheckDomain = 'HttpCheckDomain' in params ? params.HttpCheckDomain : null;
        this.HttpCheckPath = 'HttpCheckPath' in params ? params.HttpCheckPath : null;
        this.HttpCodes = 'HttpCodes' in params ? params.HttpCodes : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.VpcCidrBlock = 'VpcCidrBlock' in params ? params.VpcCidrBlock : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;

    }
}

/**
 * DescribeLoadBalancers请求参数结构体
 * @class
 */
class DescribeLoadBalancersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡器ID数组
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

        /**
         * 负载均衡的类型 : open表示公网LB类型，internal表示内网LB类型
         * @type {string || null}
         */
        this.LoadBalancerType = null;

        /**
         * 负载均衡器名称
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * 负载均衡域名。规则：1-60个小写英文字母、数字、点号“.”或连接线“-”。内网类型的负载均衡不能配置该字段
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 负载均衡获得的公网IP地址,支持多个
         * @type {Array.<string> || null}
         */
        this.LoadBalancerVips = null;

        /**
         * 数据偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数据长度，默认为20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 模糊查找名称、域名、VIP
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * 排序字段，支持：loadBalancerName,createTime,domain,loadBalancerType
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 1倒序，0顺序，默认顺序
         * @type {number || null}
         */
        this.OrderType = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 是否筛选独占集群，0表示非独占集群，1表示四层独占集群，2表示七层独占集群，3表示四层和七层独占集群，4表示共享容灾
         * @type {number || null}
         */
        this.Exclusive = null;

        /**
         * 该负载均衡对应的tgw集群（fullnat,tunnel,dnat）
         * @type {string || null}
         */
        this.TgwSetType = null;

        /**
         * 该负载均衡对应的所在的私有网络ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 'CONFLIST' 查询带confId的LB列表，'CONFID' 查询某个confId绑定的LB列表
         * @type {string || null}
         */
        this.QueryType = null;

        /**
         * 个性化配置ID
         * @type {string || null}
         */
        this.ConfId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;
        this.LoadBalancerType = 'LoadBalancerType' in params ? params.LoadBalancerType : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.LoadBalancerVips = 'LoadBalancerVips' in params ? params.LoadBalancerVips : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Exclusive = 'Exclusive' in params ? params.Exclusive : null;
        this.TgwSetType = 'TgwSetType' in params ? params.TgwSetType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.QueryType = 'QueryType' in params ? params.QueryType : null;
        this.ConfId = 'ConfId' in params ? params.ConfId : null;

    }
}

/**
 * 获取设备绑定信息时返回的设备被绑定所在的负载均衡信息。
 * @class
 */
class DevicesBindInfoLoadBalancer extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 开发商AppId。
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 负载均衡所属的项目ID。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 黑石私有网络唯一ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 负载均衡的IP地址。
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 负载均衡对应的TGW集群类别，取值为tunnel或fullnat。tunnel表示隧道集群，fullnat表示FULLNAT集群。
         * @type {string || null}
         */
        this.TgwSetType = null;

        /**
         * 是否独占TGW集群。
         * @type {number || null}
         */
        this.Exclusive = null;

        /**
         * 具有该绑定关系的四层监听器列表。
         * @type {Array.<DevicesBindInfoL4Listener> || null}
         */
        this.L4ListenerSet = null;

        /**
         * 具有该绑定关系的七层监听器列表。
         * @type {Array.<DevicesBindInfoL7Listener> || null}
         */
        this.L7ListenerSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.TgwSetType = 'TgwSetType' in params ? params.TgwSetType : null;
        this.Exclusive = 'Exclusive' in params ? params.Exclusive : null;

        if (params.L4ListenerSet) {
            this.L4ListenerSet = new Array();
            for (let z in params.L4ListenerSet) {
                let obj = new DevicesBindInfoL4Listener();
                obj.deserialize(params.L4ListenerSet[z]);
                this.L4ListenerSet.push(obj);
            }
        }

        if (params.L7ListenerSet) {
            this.L7ListenerSet = new Array();
            for (let z in params.L7ListenerSet) {
                let obj = new DevicesBindInfoL7Listener();
                obj.deserialize(params.L7ListenerSet[z]);
                this.L7ListenerSet.push(obj);
            }
        }

    }
}

/**
 * 查询四层监听器时返回的四层监听器信息。
 * @class
 */
class L4Listener extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器ID。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 用户自定义的监听器名称。
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 负载均衡实例监听器协议类型，可选值tcp，udp。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 负载均衡监听器的监听接口，可选值1~65535。
         * @type {number || null}
         */
        this.LoadBalancerPort = null;

        /**
         * 用于计费模式为固定带宽计费，指定监听器最大带宽值，可选值：0-1000，单位：Mbps。
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 监听器的类别：L4Listener（四层监听器），L7Listener（七层监听器）。
         * @type {string || null}
         */
        this.ListenerType = null;

        /**
         * 会话保持时间。单位：秒
         * @type {number || null}
         */
        this.SessionExpire = null;

        /**
         * 是否开启了检查：1（开启）、0（关闭）。
         * @type {number || null}
         */
        this.HealthSwitch = null;

        /**
         * 响应超时时间，单位：秒。
         * @type {number || null}
         */
        this.TimeOut = null;

        /**
         * 检查间隔，单位：秒。
         * @type {number || null}
         */
        this.IntervalTime = null;

        /**
         * 负载均衡监听器健康阈值，默认值：3，表示当连续探测三次健康则表示该转发正常，可选值：2-10，单位：次。
         * @type {number || null}
         */
        this.HealthNum = null;

        /**
         * 负载均衡监听器不健康阈值，默认值：3，表示当连续探测三次不健康则表示该转发不正常，可选值：2-10，单位：次。
         * @type {number || null}
         */
        this.UnhealthNum = null;

        /**
         * 是否开启自定义健康检查：1（开启）、0（关闭）。默认值0，表示关闭。（该字段在健康检查开启的情况下才生效）
         * @type {number || null}
         */
        this.CustomHealthSwitch = null;

        /**
         * 自定义健康探测内容类型，可选值：text（文本）、hexadecimal（十六进制）。
         * @type {string || null}
         */
        this.InputType = null;

        /**
         * 探测内容类型为文本方式时，针对请求文本中换行替换方式。可选值：1（替换为LF）、2（替换为CR）、3（替换为LF+CR）。
         * @type {number || null}
         */
        this.LineSeparatorType = null;

        /**
         * 自定义探测请求内容。
         * @type {string || null}
         */
        this.HealthRequest = null;

        /**
         * 自定义探测返回内容。
         * @type {string || null}
         */
        this.HealthResponse = null;

        /**
         * 是否开启toa：1（开启）、0（关闭）。
         * @type {number || null}
         */
        this.ToaFlag = null;

        /**
         * 监听器当前状态（0代表创建中，1代表正常运行，2代表创建失败，3代表删除中，4代表删除失败）。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 创建时间戳。
         * @type {string || null}
         */
        this.AddTimestamp = null;

        /**
         * 转发后端服务器调度类型。
         * @type {string || null}
         */
        this.BalanceMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.LoadBalancerPort = 'LoadBalancerPort' in params ? params.LoadBalancerPort : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.ListenerType = 'ListenerType' in params ? params.ListenerType : null;
        this.SessionExpire = 'SessionExpire' in params ? params.SessionExpire : null;
        this.HealthSwitch = 'HealthSwitch' in params ? params.HealthSwitch : null;
        this.TimeOut = 'TimeOut' in params ? params.TimeOut : null;
        this.IntervalTime = 'IntervalTime' in params ? params.IntervalTime : null;
        this.HealthNum = 'HealthNum' in params ? params.HealthNum : null;
        this.UnhealthNum = 'UnhealthNum' in params ? params.UnhealthNum : null;
        this.CustomHealthSwitch = 'CustomHealthSwitch' in params ? params.CustomHealthSwitch : null;
        this.InputType = 'InputType' in params ? params.InputType : null;
        this.LineSeparatorType = 'LineSeparatorType' in params ? params.LineSeparatorType : null;
        this.HealthRequest = 'HealthRequest' in params ? params.HealthRequest : null;
        this.HealthResponse = 'HealthResponse' in params ? params.HealthResponse : null;
        this.ToaFlag = 'ToaFlag' in params ? params.ToaFlag : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AddTimestamp = 'AddTimestamp' in params ? params.AddTimestamp : null;
        this.BalanceMode = 'BalanceMode' in params ? params.BalanceMode : null;

    }
}

/**
 * 用于创建四层监听器的监听器信息。目前一个负载均衡下面最多允许创建50个七层监听器。
 * @class
 */
class CreateL7Listener extends  AbstractModel {
    constructor(){
        super();

        /**
         * 七层监听器端口，可选值1~65535。
         * @type {number || null}
         */
        this.LoadBalancerPort = null;

        /**
         * 七层监听器协议类型，可选值：http,https。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 七层监听器名称。
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 认证方式：0（不认证，用于http），1（单向认证，用于https），2（双向认证，用于https）。当创建的是https类型的监听器时，此值必选。
         * @type {number || null}
         */
        this.SslMode = null;

        /**
         * 服务端证书ID。当创建的是https类型的监听器时，此值必选。
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * 服务端证书名称。
         * @type {string || null}
         */
        this.CertName = null;

        /**
         * 服务端证书内容。
         * @type {string || null}
         */
        this.CertContent = null;

        /**
         * 服务端证书密钥。
         * @type {string || null}
         */
        this.CertKey = null;

        /**
         * 客户端证书ID。
         * @type {string || null}
         */
        this.CertCaId = null;

        /**
         * 客户端证书名称。
         * @type {string || null}
         */
        this.CertCaName = null;

        /**
         * 客户端证书内容。
         * @type {string || null}
         */
        this.CertCaContent = null;

        /**
         * 用于计费模式为固定带宽计费，指定监听器最大带宽值，可选值：0-1000，单位：Mbps。
         * @type {number || null}
         */
        this.Bandwidth = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerPort = 'LoadBalancerPort' in params ? params.LoadBalancerPort : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.SslMode = 'SslMode' in params ? params.SslMode : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.CertContent = 'CertContent' in params ? params.CertContent : null;
        this.CertKey = 'CertKey' in params ? params.CertKey : null;
        this.CertCaId = 'CertCaId' in params ? params.CertCaId : null;
        this.CertCaName = 'CertCaName' in params ? params.CertCaName : null;
        this.CertCaContent = 'CertCaContent' in params ? params.CertCaContent : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;

    }
}

/**
 * DeleteLoadBalancer返回参数结构体
 * @class
 */
class DeleteLoadBalancerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
         * @type {string || null}
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
 * CreateTrafficMirror请求参数结构体
 * @class
 */
class CreateTrafficMirrorRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流量镜像实例别名。
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 流量镜像实例所属的私有网络ID，形如：vpc-xxx。
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
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

    }
}

/**
 * BindL4Backends请求参数结构体
 * @class
 */
class BindL4BackendsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 四层监听器实例ID，可通过接口DescribeL4Listeners查询。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 待绑定的主机信息。可以绑定多个主机端口。目前一个四层监听器下面最多允许绑定255个主机端口。
         * @type {Array.<BindL4Backend> || null}
         */
        this.BackendSet = null;

        /**
         * 绑定类型。0：物理机 1：虚拟机 2：半托管机器
         * @type {number || null}
         */
        this.BindType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;

        if (params.BackendSet) {
            this.BackendSet = new Array();
            for (let z in params.BackendSet) {
                let obj = new BindL4Backend();
                obj.deserialize(params.BackendSet[z]);
                this.BackendSet.push(obj);
            }
        }
        this.BindType = 'BindType' in params ? params.BindType : null;

    }
}

/**
 * DescribeL7ListenerInfo返回参数结构体
 * @class
 */
class DescribeL7ListenerInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的七层监听器列表。
         * @type {Array.<L7ListenerInfo> || null}
         */
        this.ListenerSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ListenerSet) {
            this.ListenerSet = new Array();
            for (let z in params.ListenerSet) {
                let obj = new L7ListenerInfo();
                obj.deserialize(params.ListenerSet[z]);
                this.ListenerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeL7Listeners返回参数结构体
 * @class
 */
class DescribeL7ListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的七层监听器列表。
         * @type {Array.<L7Listener> || null}
         */
        this.ListenerSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ListenerSet) {
            this.ListenerSet = new Array();
            for (let z in params.ListenerSet) {
                let obj = new L7Listener();
                obj.deserialize(params.ListenerSet[z]);
                this.ListenerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteListeners返回参数结构体
 * @class
 */
class DeleteListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
         * @type {string || null}
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
 * CreateLoadBalancers返回参数结构体
 * @class
 */
class CreateLoadBalancersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建的黑石负载均衡实例ID。
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

        /**
         * 创建负载均衡的异步任务ID。
         * @type {string || null}
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
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 待与流量镜像解绑的接收机信息。
 * @class
 */
class UnbindTrafficMirrorReceiver extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待解绑的主机端口，可选值1~65535。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 待解绑的主机实例ID。
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
        this.Port = 'Port' in params ? params.Port : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * ModifyLoadBalancerChargeMode返回参数结构体
 * @class
 */
class ModifyLoadBalancerChargeModeResponse extends  AbstractModel {
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
 * UnbindL7Backends请求参数结构体
 * @class
 */
class UnbindL7BackendsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 七层监听器实例ID，可通过接口DescribeL7Listeners查询。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 转发域名实例ID，可通过接口DescribeL7Rules查询。
         * @type {string || null}
         */
        this.DomainId = null;

        /**
         * 转发路径实例ID，可通过接口DescribeL7Rules查询。
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * 待绑定的主机信息。
         * @type {Array.<UnbindL7Backend> || null}
         */
        this.BackendSet = null;

        /**
         * 绑定类型。0：物理机  1：虚拟机 2：半托管机器
         * @type {number || null}
         */
        this.BindType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.LocationId = 'LocationId' in params ? params.LocationId : null;

        if (params.BackendSet) {
            this.BackendSet = new Array();
            for (let z in params.BackendSet) {
                let obj = new UnbindL7Backend();
                obj.deserialize(params.BackendSet[z]);
                this.BackendSet.push(obj);
            }
        }
        this.BindType = 'BindType' in params ? params.BindType : null;

    }
}

/**
 * 查询绑定了某主机的七层监听器时返回的转发路径。
 * @class
 */
class L7ListenerInfoLocation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转发路径。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 转发路径实例ID。
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * 会话保持时间。
         * @type {number || null}
         */
        this.SessionExpire = null;

        /**
         * 是否开启健康检查。
         * @type {number || null}
         */
        this.HealthSwitch = null;

        /**
         * 健康检查检查路径。
         * @type {string || null}
         */
        this.HttpCheckPath = null;

        /**
         * 健康检查检查域名。
         * @type {string || null}
         */
        this.HttpCheckDomain = null;

        /**
         * 健康检查检查间隔时间。
         * @type {number || null}
         */
        this.IntervalTime = null;

        /**
         * 健康检查健康阈值。
         * @type {number || null}
         */
        this.HealthNum = null;

        /**
         * 健康检查不健康阈值。
         * @type {number || null}
         */
        this.UnhealthNum = null;

        /**
         * 健康检查中认为健康的HTTP返回码的组合。可选值为1~5的集合，1表示HTTP返回码为1xx认为健康。2表示HTTP返回码为2xx认为健康。3表示HTTP返回码为3xx认为健康。4表示HTTP返回码为4xx认为健康。5表示HTTP返回码为5xx认为健康。
         * @type {Array.<number> || null}
         */
        this.HttpCodes = null;

        /**
         * 均衡方式。
         * @type {string || null}
         */
        this.BalanceMode = null;

        /**
         * 当前绑定关系的健康检查状态（Dead代表不健康，Alive代表健康）。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 创建时间戳。
         * @type {string || null}
         */
        this.AddTimestamp = null;

        /**
         * 该转发路径所绑定的主机列表。
         * @type {Array.<L7ListenerInfoBackend> || null}
         */
        this.BackendSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.SessionExpire = 'SessionExpire' in params ? params.SessionExpire : null;
        this.HealthSwitch = 'HealthSwitch' in params ? params.HealthSwitch : null;
        this.HttpCheckPath = 'HttpCheckPath' in params ? params.HttpCheckPath : null;
        this.HttpCheckDomain = 'HttpCheckDomain' in params ? params.HttpCheckDomain : null;
        this.IntervalTime = 'IntervalTime' in params ? params.IntervalTime : null;
        this.HealthNum = 'HealthNum' in params ? params.HealthNum : null;
        this.UnhealthNum = 'UnhealthNum' in params ? params.UnhealthNum : null;
        this.HttpCodes = 'HttpCodes' in params ? params.HttpCodes : null;
        this.BalanceMode = 'BalanceMode' in params ? params.BalanceMode : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AddTimestamp = 'AddTimestamp' in params ? params.AddTimestamp : null;

        if (params.BackendSet) {
            this.BackendSet = new Array();
            for (let z in params.BackendSet) {
                let obj = new L7ListenerInfoBackend();
                obj.deserialize(params.BackendSet[z]);
                this.BackendSet.push(obj);
            }
        }

    }
}

/**
 * 获取七层转发规则时返回的转发域名下面的转发路径。
 * @class
 */
class L7RulesLocation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转发路径。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 转发路径实例ID。
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * 会话保持时间。
         * @type {number || null}
         */
        this.SessionExpire = null;

        /**
         * 是否开启健康检查。
         * @type {number || null}
         */
        this.HealthSwitch = null;

        /**
         * 健康检查检查路径。
         * @type {string || null}
         */
        this.HttpCheckPath = null;

        /**
         * 健康检查检查域名。
         * @type {string || null}
         */
        this.HttpCheckDomain = null;

        /**
         * 健康检查检查间隔时间。
         * @type {number || null}
         */
        this.IntervalTime = null;

        /**
         * 健康检查健康阈值。
         * @type {number || null}
         */
        this.HealthNum = null;

        /**
         * 健康检查不健康阈值。
         * @type {number || null}
         */
        this.UnhealthNum = null;

        /**
         * 健康检查中认为健康的HTTP返回码的组合。可选值为1~5的集合，1表示HTTP返回码为1xx认为健康。2表示HTTP返回码为2xx认为健康。3表示HTTP返回码为3xx认为健康。4表示HTTP返回码为4xx认为健康。5表示HTTP返回码为5xx认为健康。
         * @type {Array.<number> || null}
         */
        this.HttpCodes = null;

        /**
         * 均衡方式。
         * @type {string || null}
         */
        this.BalanceMode = null;

        /**
         * 转发路径当前状态（0代表创建中，1代表正常运行，2代表创建失败，3代表删除中，4代表删除失败）。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 创建时间戳。
         * @type {string || null}
         */
        this.AddTimestamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.SessionExpire = 'SessionExpire' in params ? params.SessionExpire : null;
        this.HealthSwitch = 'HealthSwitch' in params ? params.HealthSwitch : null;
        this.HttpCheckPath = 'HttpCheckPath' in params ? params.HttpCheckPath : null;
        this.HttpCheckDomain = 'HttpCheckDomain' in params ? params.HttpCheckDomain : null;
        this.IntervalTime = 'IntervalTime' in params ? params.IntervalTime : null;
        this.HealthNum = 'HealthNum' in params ? params.HealthNum : null;
        this.UnhealthNum = 'UnhealthNum' in params ? params.UnhealthNum : null;
        this.HttpCodes = 'HttpCodes' in params ? params.HttpCodes : null;
        this.BalanceMode = 'BalanceMode' in params ? params.BalanceMode : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AddTimestamp = 'AddTimestamp' in params ? params.AddTimestamp : null;

    }
}

/**
 * 修改负载均衡计费方式的监听器信息。
 * @class
 */
class ModifyLoadBalancerChargeModeListener extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器ID。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 协议类型。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 带宽。
         * @type {number || null}
         */
        this.Bandwidth = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;

    }
}

/**
 * 流量镜像健康检查返回的接收机状态信息。
 * @class
 */
class TrafficMirrorReciversStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内网IP。
         * @type {string || null}
         */
        this.LanIp = null;

        /**
         * 端口及对应的状态。
         * @type {Array.<TrafficMirrorPortStatus> || null}
         */
        this.ReceiversPortStatusSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LanIp = 'LanIp' in params ? params.LanIp : null;

        if (params.ReceiversPortStatusSet) {
            this.ReceiversPortStatusSet = new Array();
            for (let z in params.ReceiversPortStatusSet) {
                let obj = new TrafficMirrorPortStatus();
                obj.deserialize(params.ReceiversPortStatusSet[z]);
                this.ReceiversPortStatusSet.push(obj);
            }
        }

    }
}

/**
 * CreateLoadBalancers请求参数结构体
 * @class
 */
class CreateLoadBalancersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 黑石负载均衡实例所属的私有网络ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 负载均衡的类型，取值为open或internal。open表示公网(有日租)，internal表示内网。
         * @type {string || null}
         */
        this.LoadBalancerType = null;

        /**
         * 在私有网络内购买内网负载均衡实例的时候需要指定子网ID，内网负载均衡实例的VIP将从这个子网中产生。其他情况不用填写该字段。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 负载均衡所属项目ID。不填则属于默认项目。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 购买黑石负载均衡实例的数量。默认值为1, 最大值为20。
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * 黑石负载均衡的计费模式，取值为flow和bandwidth，其中flow模式表示流量模式，bandwidth表示带宽模式。默认值为flow。
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * 负载均衡对应的TGW集群类别，取值为tunnel、fullnat或dnat。tunnel表示隧道集群，fullnat表示FULLNAT集群，dnat表示DNAT集群。默认值为fullnat。如需获取client IP，可以选择 tunnel 模式，fullnat 模式（tcp 通过toa 获取），dnat 模式。
         * @type {string || null}
         */
        this.TgwSetType = null;

        /**
         * 负载均衡的独占类别，取值为0表示非独占，1表示四层独占，2表示七层独占，3表示四层和七层独占，4表示共享容灾。
         * @type {number || null}
         */
        this.Exclusive = null;

        /**
         * 指定的VIP，如果指定，则数量必须与goodsNum一致。如果不指定，则由后台分配随机VIP。
         * @type {Array.<string> || null}
         */
        this.SpecifiedVips = null;

        /**
         * （未全地域开放）保障型负载均衡设定参数，如果类别选择保障型则需传入此参数。
         * @type {CreateLoadBalancerBzConf || null}
         */
        this.BzConf = null;

        /**
         * IP协议类型。可取的值为“ipv4”或“ipv6”。
         * @type {string || null}
         */
        this.IpProtocolType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.LoadBalancerType = 'LoadBalancerType' in params ? params.LoadBalancerType : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.TgwSetType = 'TgwSetType' in params ? params.TgwSetType : null;
        this.Exclusive = 'Exclusive' in params ? params.Exclusive : null;
        this.SpecifiedVips = 'SpecifiedVips' in params ? params.SpecifiedVips : null;

        if (params.BzConf) {
            let obj = new CreateLoadBalancerBzConf();
            obj.deserialize(params.BzConf)
            this.BzConf = obj;
        }
        this.IpProtocolType = 'IpProtocolType' in params ? params.IpProtocolType : null;

    }
}

/**
 * DescribeLoadBalancerPortInfo返回参数结构体
 * @class
 */
class DescribeLoadBalancerPortInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的监听器列表（四层和七层）。
         * @type {Array.<LoadBalancerPortInfoListener> || null}
         */
        this.ListenerSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ListenerSet) {
            this.ListenerSet = new Array();
            for (let z in params.ListenerSet) {
                let obj = new LoadBalancerPortInfoListener();
                obj.deserialize(params.ListenerSet[z]);
                this.ListenerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeL7ListenerInfo请求参数结构体
 * @class
 */
class DescribeL7ListenerInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 查找的键值，可用于模糊查找有该转发域名的监听器。
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * 主机ID或虚机IP列表，可用于获取绑定了该主机的监听器。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 是否获取转发规则下的主机信息。默认为0，不获取。
         * @type {number || null}
         */
        this.IfGetBackendInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.IfGetBackendInfo = 'IfGetBackendInfo' in params ? params.IfGetBackendInfo : null;

    }
}

/**
 * ModifyL4Listener请求参数结构体
 * @class
 */
class ModifyL4ListenerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 四层监听器ID。可通过接口DescribeL4Listeners查询。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 四层监听器名称。
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 会话保持时间，单位：秒。可选值：900~3600。
         * @type {number || null}
         */
        this.SessionExpire = null;

        /**
         * 是否开启健康检查：1（开启）、0（关闭）。默认值0，表示关闭。
         * @type {number || null}
         */
        this.HealthSwitch = null;

        /**
         * 健康检查的响应超时时间，可选值：2-60，默认值：2，单位:秒。<br><font color="red">响应超时时间要小于检查间隔时间。</font>
         * @type {number || null}
         */
        this.TimeOut = null;

        /**
         * 健康检查间隔，默认值：5，可选值：5-300，单位：秒。
         * @type {number || null}
         */
        this.IntervalTime = null;

        /**
         * 健康阈值，默认值：3，表示当连续探测三次健康则表示该转发正常，可选值：2-10，单位：次。
         * @type {number || null}
         */
        this.HealthNum = null;

        /**
         * 不健康阈值，默认值：3，表示当连续探测三次不健康则表示该转发不正常，可选值：2-10，单位：次。
         * @type {number || null}
         */
        this.UnhealthNum = null;

        /**
         * 监听器最大带宽值，用于计费模式为固定带宽计费。可选值：0-1000，单位：Mbps。
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 是否开启自定义健康检查：1（开启）、0（关闭）。默认值0，表示关闭。（该字段在健康检查开启的情况下才生效）
         * @type {number || null}
         */
        this.CustomHealthSwitch = null;

        /**
         * 自定义健康探测内容类型，可选值：text（文本）、hexadecimal（十六进制）。
         * @type {string || null}
         */
        this.InputType = null;

        /**
         * 探测内容类型为文本方式时，针对请求文本中换行替换方式。可选值：1（替换为LF）、2（替换为CR）、3（替换为LF+CR）。
         * @type {number || null}
         */
        this.LineSeparatorType = null;

        /**
         * 自定义探测请求内容。
         * @type {string || null}
         */
        this.HealthRequest = null;

        /**
         * 自定义探测返回内容。
         * @type {string || null}
         */
        this.HealthResponse = null;

        /**
         * 是否开启toa。可选值：0（关闭）、1（开启），默认关闭。（该字段在负载均衡为fullnat类型下才生效）
         * @type {number || null}
         */
        this.ToaFlag = null;

        /**
         * 四层调度方式。wrr，wlc。
         * @type {string || null}
         */
        this.BalanceMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.SessionExpire = 'SessionExpire' in params ? params.SessionExpire : null;
        this.HealthSwitch = 'HealthSwitch' in params ? params.HealthSwitch : null;
        this.TimeOut = 'TimeOut' in params ? params.TimeOut : null;
        this.IntervalTime = 'IntervalTime' in params ? params.IntervalTime : null;
        this.HealthNum = 'HealthNum' in params ? params.HealthNum : null;
        this.UnhealthNum = 'UnhealthNum' in params ? params.UnhealthNum : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.CustomHealthSwitch = 'CustomHealthSwitch' in params ? params.CustomHealthSwitch : null;
        this.InputType = 'InputType' in params ? params.InputType : null;
        this.LineSeparatorType = 'LineSeparatorType' in params ? params.LineSeparatorType : null;
        this.HealthRequest = 'HealthRequest' in params ? params.HealthRequest : null;
        this.HealthResponse = 'HealthResponse' in params ? params.HealthResponse : null;
        this.ToaFlag = 'ToaFlag' in params ? params.ToaFlag : null;
        this.BalanceMode = 'BalanceMode' in params ? params.BalanceMode : null;

    }
}

/**
 * 查询四层监听器返回的与监听器绑定关系的主机信息。
 * @class
 */
class L4Backend extends  AbstractModel {
    constructor(){
        super();

        /**
         * 绑定类别（0代表黑石物理机，1代表虚拟机IP）。
         * @type {number || null}
         */
        this.BindType = null;

        /**
         * 主机端口。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 权重。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 当前绑定关系的健康检查状态（Dead代表不健康，Alive代表健康）。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 黑石物理机的主机ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 黑石物理机的别名。
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 主机IP。
         * @type {string || null}
         */
        this.LanIp = null;

        /**
         * 黑石物理机当前可以执行的操作。
         * @type {Array.<string> || null}
         */
        this.Operates = null;

        /**
         * 主机探测端口。
         * @type {number || null}
         */
        this.ProbePort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BindType = 'BindType' in params ? params.BindType : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.LanIp = 'LanIp' in params ? params.LanIp : null;
        this.Operates = 'Operates' in params ? params.Operates : null;
        this.ProbePort = 'ProbePort' in params ? params.ProbePort : null;

    }
}

/**
 * 获取七层转发路径绑定的主机列表时返回的主机信息。
 * @class
 */
class L7Backend extends  AbstractModel {
    constructor(){
        super();

        /**
         * 绑定类别（0代表黑石物理机，1代表虚拟机IP）。
         * @type {number || null}
         */
        this.BindType = null;

        /**
         * 主机端口。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 权重。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 当前绑定关系的健康检查状态（Dead代表不健康，Alive代表健康）。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 黑石物理机的主机ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 黑石物理机的别名。
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 主机IP。
         * @type {string || null}
         */
        this.LanIp = null;

        /**
         * 黑石物理机的管理IP。
         * @type {string || null}
         */
        this.MgtIp = null;

        /**
         * 黑石物理机当前可以执行的操作。
         * @type {Array.<string> || null}
         */
        this.Operates = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BindType = 'BindType' in params ? params.BindType : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.LanIp = 'LanIp' in params ? params.LanIp : null;
        this.MgtIp = 'MgtIp' in params ? params.MgtIp : null;
        this.Operates = 'Operates' in params ? params.Operates : null;

    }
}

/**
 * 修改黑石负载均衡七层转发路径时待修改的七层转发规则信息。
 * @class
 */
class ModifyL7LocationRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转发域名实例ID，可通过接口DescribeL7Rules查询。
         * @type {string || null}
         */
        this.DomainId = null;

        /**
         * 转发路径实例ID，可通过接口DescribeL7Rules查询。
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * 转发路径。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 会话保持时间，单位：秒。可选值：30~3600。默认值0，表示不开启会话保持。
         * @type {number || null}
         */
        this.SessionExpire = null;

        /**
         * 健康检查开关：1（开启）、0（关闭）。默认值0，表示关闭。
         * @type {number || null}
         */
        this.HealthSwitch = null;

        /**
         * 健康检查检查间隔时间，默认值：5，可选值：5-300，单位：秒。
         * @type {number || null}
         */
        this.IntervalTime = null;

        /**
         * 健康检查健康阈值，默认值：3，表示当连续探测三次健康则表示该转发正常，可选值：2-10，单位：次。
         * @type {number || null}
         */
        this.HealthNum = null;

        /**
         * 健康检查不健康阈值，默认值：5，表示当连续探测五次不健康则表示该转发不正常，可选值：2-10，单位：次。
         * @type {number || null}
         */
        this.UnhealthNum = null;

        /**
         * 健康检查中认为健康的HTTP返回码的组合。可选值为1~5的集合，1表示HTTP返回码为1xx认为健康。2表示HTTP返回码为2xx认为健康。3表示HTTP返回码为3xx认为健康。4表示HTTP返回码为4xx认为健康。5表示HTTP返回码为5xx认为健康。
         * @type {Array.<number> || null}
         */
        this.HttpCodes = null;

        /**
         * 健康检查检查路径。
         * @type {string || null}
         */
        this.HttpCheckPath = null;

        /**
         * 健康检查检查域名。如果规则的域名使用通配符或正则表达式，则健康检查检查域名可自定义，否则必须跟健康检查检查域名一样。不填表示不修改。
         * @type {string || null}
         */
        this.HttpCheckDomain = null;

        /**
         * 均衡方式：ip_hash、wrr。默认值wrr。
         * @type {string || null}
         */
        this.BalanceMode = null;

        /**
         * 转发域名。
         * @type {string || null}
         */
        this.Domain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainId = 'DomainId' in params ? params.DomainId : null;
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.SessionExpire = 'SessionExpire' in params ? params.SessionExpire : null;
        this.HealthSwitch = 'HealthSwitch' in params ? params.HealthSwitch : null;
        this.IntervalTime = 'IntervalTime' in params ? params.IntervalTime : null;
        this.HealthNum = 'HealthNum' in params ? params.HealthNum : null;
        this.UnhealthNum = 'UnhealthNum' in params ? params.UnhealthNum : null;
        this.HttpCodes = 'HttpCodes' in params ? params.HttpCodes : null;
        this.HttpCheckPath = 'HttpCheckPath' in params ? params.HttpCheckPath : null;
        this.HttpCheckDomain = 'HttpCheckDomain' in params ? params.HttpCheckDomain : null;
        this.BalanceMode = 'BalanceMode' in params ? params.BalanceMode : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * ModifyLoadBalancer请求参数结构体
 * @class
 */
class ModifyLoadBalancerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡器名称，规则：1-20个英文、汉字、数字、连接线“-”或下划线“_”。
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * 域名前缀，负载均衡的域名由用户输入的域名前缀与配置文件中的域名后缀一起组合而成，保证是唯一的域名。规则：1-20个小写英文字母、数字或连接线“-”。内网类型的负载均衡不能配置该字段。
         * @type {string || null}
         */
        this.DomainPrefix = null;

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
        this.DomainPrefix = 'DomainPrefix' in params ? params.DomainPrefix : null;

    }
}

/**
 * 获取设备绑定信息时返回的七层监听器信息。
 * @class
 */
class DevicesBindInfoL7Listener extends  AbstractModel {
    constructor(){
        super();

        /**
         * 七层监听器实例ID。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 七层监听器协议类型，可选值：http,https。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 七层监听器的监听端口。
         * @type {number || null}
         */
        this.LoadBalancerPort = null;

        /**
         * 返回的转发规则列表。
         * @type {Array.<DevicesBindInfoRule> || null}
         */
        this.RuleSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.LoadBalancerPort = 'LoadBalancerPort' in params ? params.LoadBalancerPort : null;

        if (params.RuleSet) {
            this.RuleSet = new Array();
            for (let z in params.RuleSet) {
                let obj = new DevicesBindInfoRule();
                obj.deserialize(params.RuleSet[z]);
                this.RuleSet.push(obj);
            }
        }

    }
}

/**
 * DescribeL4Listeners请求参数结构体
 * @class
 */
class DescribeL4ListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 四层监听器实例ID数组，可通过接口DescribeL4Listeners查询。
         * @type {Array.<string> || null}
         */
        this.ListenerIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerIds = 'ListenerIds' in params ? params.ListenerIds : null;

    }
}

/**
 * CreateL7Listeners返回参数结构体
 * @class
 */
class CreateL7ListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新建的负载均衡七层监听器的唯一ID列表。
         * @type {Array.<string> || null}
         */
        this.ListenerIds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerIds = 'ListenerIds' in params ? params.ListenerIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 用于创建负载均衡的个性化配置。
 * @class
 */
class CreateLoadBalancerBzConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按月/按小时计费。
         * @type {string || null}
         */
        this.BzPayMode = null;

        /**
         * 四层可选按带宽，连接数衡量。
         * @type {string || null}
         */
        this.BzL4Metrics = null;

        /**
         * 七层可选按qps衡量。
         * @type {string || null}
         */
        this.BzL7Metrics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BzPayMode = 'BzPayMode' in params ? params.BzPayMode : null;
        this.BzL4Metrics = 'BzL4Metrics' in params ? params.BzL4Metrics : null;
        this.BzL7Metrics = 'BzL7Metrics' in params ? params.BzL7Metrics : null;

    }
}

/**
 * DeleteTrafficMirror请求参数结构体
 * @class
 */
class DeleteTrafficMirrorRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流量镜像实例ID数组，可以批量删除，每次删除上限为20
         * @type {Array.<string> || null}
         */
        this.TrafficMirrorIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrafficMirrorIds = 'TrafficMirrorIds' in params ? params.TrafficMirrorIds : null;

    }
}

/**
 * CreateL7Listeners请求参数结构体
 * @class
 */
class CreateL7ListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 七层监听器信息数组，可以创建多个七层监听器。目前一个负载均衡下面最多允许创建50个七层监听器。
         * @type {Array.<CreateL7Listener> || null}
         */
        this.ListenerSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;

        if (params.ListenerSet) {
            this.ListenerSet = new Array();
            for (let z in params.ListenerSet) {
                let obj = new CreateL7Listener();
                obj.deserialize(params.ListenerSet[z]);
                this.ListenerSet.push(obj);
            }
        }

    }
}

/**
 * 待与四层监听器绑定的物理机主机、虚拟机或半托管主机信息。目前一个四层监听器下面最多允许绑定255个主机端口。
 * @class
 */
class BindL4Backend extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待绑定的主机端口，可选值1~65535。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 待绑定的黑石物理机主机ID、虚拟机IP或者是半托管主机ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 待绑定的主机权重，可选值0~100。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 自定义探测的主机端口，可选值1~65535。（需要监听器开启自定义健康检查）
         * @type {number || null}
         */
        this.ProbePort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Port = 'Port' in params ? params.Port : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.ProbePort = 'ProbePort' in params ? params.ProbePort : null;

    }
}

/**
 * DescribeL7ListenersEx请求参数结构体
 * @class
 */
class DescribeL7ListenersExRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的监听器中标识是否绑定在此流量镜像中。
         * @type {string || null}
         */
        this.TrafficMirrorId = null;

        /**
         * 待获取监听器所在的VPC的ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 此VPC中获取负载均衡的偏移。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 此VPC中获取负载均衡的数量。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件。
LoadBalancerId - String - （过滤条件）负载均衡ID。
LoadBalancerName - String - （过滤条件）负载均衡名称。
Vip - String - （过滤条件）VIP。
ListenerId - String - （过滤条件）监听器ID。
ListenerName -  String - （过滤条件）监听器名称。
Protocol -  String - （过滤条件）七层协议。
LoadBalancerPort -  String - （过滤条件）监听器端口。
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
        this.TrafficMirrorId = 'TrafficMirrorId' in params ? params.TrafficMirrorId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
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
 * DescribeLoadBalancerTaskResult返回参数结构体
 * @class
 */
class DescribeLoadBalancerTaskResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务当前状态。0：成功，1：失败，2：进行中。
         * @type {number || null}
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
 * UnbindTrafficMirrorReceivers请求参数结构体
 * @class
 */
class UnbindTrafficMirrorReceiversRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流量镜像实例ID。
         * @type {string || null}
         */
        this.TrafficMirrorId = null;

        /**
         * 待绑定的主机实例ID和端口数组。
         * @type {Array.<UnbindTrafficMirrorReceiver> || null}
         */
        this.ReceiverSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrafficMirrorId = 'TrafficMirrorId' in params ? params.TrafficMirrorId : null;

        if (params.ReceiverSet) {
            this.ReceiverSet = new Array();
            for (let z in params.ReceiverSet) {
                let obj = new UnbindTrafficMirrorReceiver();
                obj.deserialize(params.ReceiverSet[z]);
                this.ReceiverSet.push(obj);
            }
        }

    }
}

/**
 * UnbindTrafficMirrorListeners请求参数结构体
 * @class
 */
class UnbindTrafficMirrorListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流量镜像实例ID。
         * @type {string || null}
         */
        this.TrafficMirrorId = null;

        /**
         * 七层监听器实例ID数组，可通过接口DescribeL7Listeners查询。
         * @type {Array.<string> || null}
         */
        this.ListenerIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrafficMirrorId = 'TrafficMirrorId' in params ? params.TrafficMirrorId : null;
        this.ListenerIds = 'ListenerIds' in params ? params.ListenerIds : null;

    }
}

/**
 * DescribeCertDetail请求参数结构体
 * @class
 */
class DescribeCertDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书ID。
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
        this.CertId = 'CertId' in params ? params.CertId : null;

    }
}

/**
 * DescribeDevicesBindInfo返回参数结构体
 * @class
 */
class DescribeDevicesBindInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的负载均衡绑定信息。
         * @type {Array.<DevicesBindInfoLoadBalancer> || null}
         */
        this.LoadBalancerSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LoadBalancerSet) {
            this.LoadBalancerSet = new Array();
            for (let z in params.LoadBalancerSet) {
                let obj = new DevicesBindInfoLoadBalancer();
                obj.deserialize(params.LoadBalancerSet[z]);
                this.LoadBalancerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 获取黑石负载均衡端口相关信息时返回的监听器信息（四层和七层）。
 * @class
 */
class LoadBalancerPortInfoListener extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡监听器ID。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 监听器名称。
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 监听器协议类型，可选值：http，https，tcp，udp。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 监听器的监听端口。
         * @type {number || null}
         */
        this.LoadBalancerPort = null;

        /**
         * 计费模式为按固定带宽方式时监听器的限速值，单位：Mbps。
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 监听器当前状态（0代表创建中，1代表正常运行，2代表创建失败，3代表删除中，4代表删除失败）。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 与监听器绑定的主机端口。
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
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.LoadBalancerPort = 'LoadBalancerPort' in params ? params.LoadBalancerPort : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * DescribeL4Backends返回参数结构体
 * @class
 */
class DescribeL4BackendsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的绑定关系列表。
         * @type {Array.<L4Backend> || null}
         */
        this.BackendSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BackendSet) {
            this.BackendSet = new Array();
            for (let z in params.BackendSet) {
                let obj = new L4Backend();
                obj.deserialize(params.BackendSet[z]);
                this.BackendSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 用于创建四层监听器的监听器信息。目前一个负载均衡下面最多允许创建50个监听器。
 * @class
 */
class CreateL4Listener extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器监听端口，可选值1~65535。
         * @type {number || null}
         */
        this.LoadBalancerPort = null;

        /**
         * 监听器协议类型，可选值tcp，udp。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 监听器名称。
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 监听器的会话保持时间，单位：秒。可选值：900~3600,不传表示不开启会话保持。
         * @type {number || null}
         */
        this.SessionExpire = null;

        /**
         * 是否开启健康检查：1（开启）、0（关闭）。默认值0，表示关闭。
         * @type {number || null}
         */
        this.HealthSwitch = null;

        /**
         * 健康检查的响应超时时间，可选值：2-60，默认值：2，单位:秒。<br><font color="red">响应超时时间要小于检查间隔时间。</font>
         * @type {number || null}
         */
        this.TimeOut = null;

        /**
         * 健康检查检查间隔时间，默认值：5，可选值：5-300，单位：秒。
         * @type {number || null}
         */
        this.IntervalTime = null;

        /**
         * 健康阈值，默认值：3，表示当连续探测三次健康则表示该转发正常，可选值：2-10，单位：次。
         * @type {number || null}
         */
        this.HealthNum = null;

        /**
         * 不健康阈值，默认值：3，表示当连续探测三次不健康则表示该转发不正常，可选值：2-10，单位：次。
         * @type {number || null}
         */
        this.UnhealthNum = null;

        /**
         * 监听器最大带宽值，用于计费模式为固定带宽计费，可选值：0-1000，单位：Mbps。
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 是否开启自定义健康检查：1（开启）、0（关闭）。默认值0，表示关闭。（该字段在健康检查开启的情况下才生效）
         * @type {number || null}
         */
        this.CustomHealthSwitch = null;

        /**
         * 自定义健康探测内容类型，可选值：text（文本）、hexadecimal（十六进制）。
         * @type {string || null}
         */
        this.InputType = null;

        /**
         * 探测内容类型为文本方式时，针对请求文本中换行替换方式。可选值：1（替换为LF）、2（替换为CR）、3（替换为LF+CR）。
         * @type {number || null}
         */
        this.LineSeparatorType = null;

        /**
         * 自定义探测请求内容。
         * @type {string || null}
         */
        this.HealthRequest = null;

        /**
         * 自定义探测返回内容。
         * @type {string || null}
         */
        this.HealthResponse = null;

        /**
         * 是否开启toa。可选值：0（关闭）、1（开启），默认关闭。（该字段在负载均衡为fullnat类型下才生效）
         * @type {number || null}
         */
        this.ToaFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerPort = 'LoadBalancerPort' in params ? params.LoadBalancerPort : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.SessionExpire = 'SessionExpire' in params ? params.SessionExpire : null;
        this.HealthSwitch = 'HealthSwitch' in params ? params.HealthSwitch : null;
        this.TimeOut = 'TimeOut' in params ? params.TimeOut : null;
        this.IntervalTime = 'IntervalTime' in params ? params.IntervalTime : null;
        this.HealthNum = 'HealthNum' in params ? params.HealthNum : null;
        this.UnhealthNum = 'UnhealthNum' in params ? params.UnhealthNum : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.CustomHealthSwitch = 'CustomHealthSwitch' in params ? params.CustomHealthSwitch : null;
        this.InputType = 'InputType' in params ? params.InputType : null;
        this.LineSeparatorType = 'LineSeparatorType' in params ? params.LineSeparatorType : null;
        this.HealthRequest = 'HealthRequest' in params ? params.HealthRequest : null;
        this.HealthResponse = 'HealthResponse' in params ? params.HealthResponse : null;
        this.ToaFlag = 'ToaFlag' in params ? params.ToaFlag : null;

    }
}

/**
 * DescribeTrafficMirrorListeners返回参数结构体
 * @class
 */
class DescribeTrafficMirrorListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器列表。
         * @type {Array.<TrafficMirrorListener> || null}
         */
        this.ListenerSet = null;

        /**
         * 监听器总数。
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

        if (params.ListenerSet) {
            this.ListenerSet = new Array();
            for (let z in params.ListenerSet) {
                let obj = new TrafficMirrorListener();
                obj.deserialize(params.ListenerSet[z]);
                this.ListenerSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLoadBalancers返回参数结构体
 * @class
 */
class DescribeLoadBalancersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回负载均衡信息列表。
         * @type {Array.<LoadBalancer> || null}
         */
        this.LoadBalancerSet = null;

        /**
         * 符合条件的负载均衡总数。
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

        if (params.LoadBalancerSet) {
            this.LoadBalancerSet = new Array();
            for (let z in params.LoadBalancerSet) {
                let obj = new LoadBalancer();
                obj.deserialize(params.LoadBalancerSet[z]);
                this.LoadBalancerSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteL7Rules返回参数结构体
 * @class
 */
class DeleteL7RulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
         * @type {string || null}
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
 * 获取证书信息时返回的所用在的负载均衡信息。
 * @class
 */
class CertDetailLoadBalancer extends  AbstractModel {
    constructor(){
        super();

        /**
         * 黑石负载均衡实例ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 黑石负载均衡实例名称。
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * 该黑石负载均衡所在的VpcId。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 该黑石负载均衡所在的regionId。
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;

    }
}

/**
 * DescribeTrafficMirrorReceivers请求参数结构体
 * @class
 */
class DescribeTrafficMirrorReceiversRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流量镜像实例ID。
         * @type {string || null}
         */
        this.TrafficMirrorId = null;

        /**
         * 接收机黑石物理机实例ID数组。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 接收机接收端口数组。
         * @type {Array.<number> || null}
         */
        this.Ports = null;

        /**
         * 接收机实例权重数组。
         * @type {Array.<number> || null}
         */
        this.Weights = null;

        /**
         * 分页的偏移量，也即从第几条记录开始查询
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 单次查询返回的条目数，默认值：500。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 搜索instance或者alias
         * @type {string || null}
         */
        this.VagueStr = null;

        /**
         * 搜索IP
         * @type {string || null}
         */
        this.VagueIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TrafficMirrorId = 'TrafficMirrorId' in params ? params.TrafficMirrorId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Ports = 'Ports' in params ? params.Ports : null;
        this.Weights = 'Weights' in params ? params.Weights : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.VagueStr = 'VagueStr' in params ? params.VagueStr : null;
        this.VagueIp = 'VagueIp' in params ? params.VagueIp : null;

    }
}

/**
 * SetTrafficMirrorAlias请求参数结构体
 * @class
 */
class SetTrafficMirrorAliasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流量镜像实例ID。
         * @type {string || null}
         */
        this.TrafficMirrorId = null;

        /**
         * 流量镜像实例别名。
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
        this.TrafficMirrorId = 'TrafficMirrorId' in params ? params.TrafficMirrorId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;

    }
}

/**
 * UnbindL4Backends返回参数结构体
 * @class
 */
class UnbindL4BackendsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID。该接口为异步任务，可根据本参数调用DescribeLoadBalancerTaskResult接口来查询任务操作结果。
         * @type {string || null}
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
 * 查询绑定了某主机七层监听器时返回的与转发路径所绑定的主机信息。
 * @class
 */
class L7ListenerInfoBackend extends  AbstractModel {
    constructor(){
        super();

        /**
         * 绑定类别（0代表黑石物理机，1代表虚拟机IP）。
         * @type {number || null}
         */
        this.BindType = null;

        /**
         * 主机端口。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 权重。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 当前绑定关系的健康检查状态（Dead代表不健康，Alive代表健康）。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 黑石物理机的主机ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 黑石物理机的别名。
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 主机IP。
         * @type {string || null}
         */
        this.LanIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BindType = 'BindType' in params ? params.BindType : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.LanIp = 'LanIp' in params ? params.LanIp : null;

    }
}

/**
 * ModifyLoadBalancerChargeMode请求参数结构体
 * @class
 */
class ModifyLoadBalancerChargeModeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 计费方式。flow或bandwidth。
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * 监听器信息，当计费方式选为 bandwidth 且此负载均衡实例下存在监听器时需填入此字段，可以自定义每个监听器带宽上限。
         * @type {Array.<ModifyLoadBalancerChargeModeListener> || null}
         */
        this.ListenerSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;

        if (params.ListenerSet) {
            this.ListenerSet = new Array();
            for (let z in params.ListenerSet) {
                let obj = new ModifyLoadBalancerChargeModeListener();
                obj.deserialize(params.ListenerSet[z]);
                this.ListenerSet.push(obj);
            }
        }

    }
}

/**
 * ModifyL4BackendWeight请求参数结构体
 * @class
 */
class ModifyL4BackendWeightRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID，可通过接口DescribeLoadBalancers查询。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡四层监听器ID，可通过接口DescribeL4Listeners查询。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 黑石物理机主机ID、虚拟机IP或者是半托管主机ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 权重信息，可选值0~100。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 已绑定的主机端口。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 绑定类型。0：物理机 1：虚拟机 2：半托管机器
         * @type {number || null}
         */
        this.BindType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.BindType = 'BindType' in params ? params.BindType : null;

    }
}

/**
 * 获取负载均衡实例列表时返回的负载均衡信息。
 * @class
 */
class LoadBalancer extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡器ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 项目ID，通过v2/DescribeProject 接口获得
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 负载均衡器名称
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * 负载均衡的类型 : open表示公网负载均衡类型，internal表示内网负载均衡类型
         * @type {string || null}
         */
        this.LoadBalancerType = null;

        /**
         * 是否筛选独占集群，0表示非独占集群，1表示四层独占集群，2表示七层独占集群，3表示四层和七层独占集群，4表示共享容灾
         * @type {number || null}
         */
        this.Exclusive = null;

        /**
         * 该负载均衡对应的tgw集群（fullnat,tunnel,dnat）
         * @type {string || null}
         */
        this.TgwSetType = null;

        /**
         * 负载均衡域名。规则：1-60个小写英文字母、数字、点号“.”或连接线“-”。内网类型的负载均衡不能配置该字段
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 该负载均衡对应的所在的VpcId
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 该负载均衡对应的所在的SubnetId
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 无
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 无
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * 无
         * @type {string || null}
         */
        this.LatestPayMode = null;

        /**
         * 无
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 无
         * @type {string || null}
         */
        this.StatusTime = null;

        /**
         * 私有网络名称。
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * 私有网络Cidr。
         * @type {string || null}
         */
        this.VpcCidrBlock = null;

        /**
         * 负载均衡获得的公网IP地址,支持多个
         * @type {Array.<string> || null}
         */
        this.LoadBalancerVips = null;

        /**
         * 无
         * @type {Array.<string> || null}
         */
        this.SupportListenerTypes = null;

        /**
         * 无
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 负载均衡个性化配置ID
         * @type {string || null}
         */
        this.ConfId = null;

        /**
         * 无
         * @type {string || null}
         */
        this.ConfName = null;

        /**
         * 负载均衡的IPV6的VIP。
         * @type {Array.<string> || null}
         */
        this.LoadBalancerVipv6s = null;

        /**
         * 负载均衡IP协议类型。ipv4或者ipv6。
         * @type {string || null}
         */
        this.IpProtocolType = null;

        /**
         * 保障型网关计费形式
         * @type {string || null}
         */
        this.BzPayMode = null;

        /**
         * 保障型网关四层计费指标
         * @type {string || null}
         */
        this.BzL4Metrics = null;

        /**
         * 保障型网关七层计费指标
         * @type {string || null}
         */
        this.BzL7Metrics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;
        this.LoadBalancerType = 'LoadBalancerType' in params ? params.LoadBalancerType : null;
        this.Exclusive = 'Exclusive' in params ? params.Exclusive : null;
        this.TgwSetType = 'TgwSetType' in params ? params.TgwSetType : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.LatestPayMode = 'LatestPayMode' in params ? params.LatestPayMode : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.StatusTime = 'StatusTime' in params ? params.StatusTime : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.VpcCidrBlock = 'VpcCidrBlock' in params ? params.VpcCidrBlock : null;
        this.LoadBalancerVips = 'LoadBalancerVips' in params ? params.LoadBalancerVips : null;
        this.SupportListenerTypes = 'SupportListenerTypes' in params ? params.SupportListenerTypes : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.ConfId = 'ConfId' in params ? params.ConfId : null;
        this.ConfName = 'ConfName' in params ? params.ConfName : null;
        this.LoadBalancerVipv6s = 'LoadBalancerVipv6s' in params ? params.LoadBalancerVipv6s : null;
        this.IpProtocolType = 'IpProtocolType' in params ? params.IpProtocolType : null;
        this.BzPayMode = 'BzPayMode' in params ? params.BzPayMode : null;
        this.BzL4Metrics = 'BzL4Metrics' in params ? params.BzL4Metrics : null;
        this.BzL7Metrics = 'BzL7Metrics' in params ? params.BzL7Metrics : null;

    }
}

module.exports = {
    SetTrafficMirrorHealthSwitchRequest: SetTrafficMirrorHealthSwitchRequest,
    SetTrafficMirrorAliasResponse: SetTrafficMirrorAliasResponse,
    DeleteL7RulesRequest: DeleteL7RulesRequest,
    DeleteTrafficMirrorResponse: DeleteTrafficMirrorResponse,
    ModifyL7BackendPortResponse: ModifyL7BackendPortResponse,
    ModifyL4BackendProbePortResponse: ModifyL4BackendProbePortResponse,
    BindTrafficMirrorReceiver: BindTrafficMirrorReceiver,
    ModifyL4BackendPortResponse: ModifyL4BackendPortResponse,
    ModifyL7LocationsResponse: ModifyL7LocationsResponse,
    DescribeTrafficMirrorReceiverHealthStatusRequest: DescribeTrafficMirrorReceiverHealthStatusRequest,
    UnbindL4Backend: UnbindL4Backend,
    ModifyL4ListenerResponse: ModifyL4ListenerResponse,
    DevicesBindInfoL4Listener: DevicesBindInfoL4Listener,
    DescribeL4ListenerInfoRequest: DescribeL4ListenerInfoRequest,
    L4ListenerInfo: L4ListenerInfo,
    DescribeL7RulesRequest: DescribeL7RulesRequest,
    UnbindL7BackendsResponse: UnbindL7BackendsResponse,
    ModifyL4BackendWeightResponse: ModifyL4BackendWeightResponse,
    DeleteL7DomainsResponse: DeleteL7DomainsResponse,
    DevicesBindInfoBackend: DevicesBindInfoBackend,
    UnbindL4BackendsRequest: UnbindL4BackendsRequest,
    DescribeL7ListenersRequest: DescribeL7ListenersRequest,
    DescribeTrafficMirrorListenersRequest: DescribeTrafficMirrorListenersRequest,
    BindL7Backend: BindL7Backend,
    ModifyL7ListenerResponse: ModifyL7ListenerResponse,
    DescribeLoadBalancerTaskResultRequest: DescribeLoadBalancerTaskResultRequest,
    DescribeL7RulesResponse: DescribeL7RulesResponse,
    CreateTrafficMirrorResponse: CreateTrafficMirrorResponse,
    DescribeDevicesBindInfoRequest: DescribeDevicesBindInfoRequest,
    BindL4BackendsResponse: BindL4BackendsResponse,
    TrafficMirrorListener: TrafficMirrorListener,
    DescribeL7ListenersExResponse: DescribeL7ListenersExResponse,
    UnbindL7Backend: UnbindL7Backend,
    TrafficMirrorReceiver: TrafficMirrorReceiver,
    TrafficMirrorPortStatus: TrafficMirrorPortStatus,
    UploadCertResponse: UploadCertResponse,
    DescribeTrafficMirrorReceiversResponse: DescribeTrafficMirrorReceiversResponse,
    DeleteListenersRequest: DeleteListenersRequest,
    ModifyL4BackendProbePortRequest: ModifyL4BackendProbePortRequest,
    DescribeTrafficMirrorsRequest: DescribeTrafficMirrorsRequest,
    UploadCertRequest: UploadCertRequest,
    DescribeL4ListenerInfoResponse: DescribeL4ListenerInfoResponse,
    BindTrafficMirrorListenersRequest: BindTrafficMirrorListenersRequest,
    ModifyL7BackendPortRequest: ModifyL7BackendPortRequest,
    ModifyL4BackendPortRequest: ModifyL4BackendPortRequest,
    DescribeL4ListenersResponse: DescribeL4ListenersResponse,
    ModifyL7LocationsRequest: ModifyL7LocationsRequest,
    ModifyLoadBalancerResponse: ModifyLoadBalancerResponse,
    CreateL4ListenersResponse: CreateL4ListenersResponse,
    ModifyL7BackendWeightResponse: ModifyL7BackendWeightResponse,
    DescribeTrafficMirrorsResponse: DescribeTrafficMirrorsResponse,
    DescribeL7BackendsRequest: DescribeL7BackendsRequest,
    L7Listener: L7Listener,
    CreateL7RulesRequest: CreateL7RulesRequest,
    ModifyL7BackendWeightRequest: ModifyL7BackendWeightRequest,
    CreateL4ListenersRequest: CreateL4ListenersRequest,
    ReplaceCertRequest: ReplaceCertRequest,
    BindL7BackendsResponse: BindL7BackendsResponse,
    L7Rule: L7Rule,
    UnbindTrafficMirrorReceiversResponse: UnbindTrafficMirrorReceiversResponse,
    DeleteL7DomainsRequest: DeleteL7DomainsRequest,
    BindTrafficMirrorReceiversRequest: BindTrafficMirrorReceiversRequest,
    BindTrafficMirrorListenersResponse: BindTrafficMirrorListenersResponse,
    BindL7BackendsRequest: BindL7BackendsRequest,
    DescribeL4Backend: DescribeL4Backend,
    DescribeCertDetailResponse: DescribeCertDetailResponse,
    DescribeL4BackendsRequest: DescribeL4BackendsRequest,
    DescribeTrafficMirrorReceiverHealthStatusResponse: DescribeTrafficMirrorReceiverHealthStatusResponse,
    BindTrafficMirrorReceiversResponse: BindTrafficMirrorReceiversResponse,
    ReplaceCertResponse: ReplaceCertResponse,
    DescribeLoadBalancerPortInfoRequest: DescribeLoadBalancerPortInfoRequest,
    DevicesBindInfoLocation: DevicesBindInfoLocation,
    SetTrafficMirrorHealthSwitchResponse: SetTrafficMirrorHealthSwitchResponse,
    DeleteLoadBalancerRequest: DeleteLoadBalancerRequest,
    UnbindTrafficMirrorListenersResponse: UnbindTrafficMirrorListenersResponse,
    CreateL7Rule: CreateL7Rule,
    CreateL7RulesResponse: CreateL7RulesResponse,
    ModifyL7ListenerRequest: ModifyL7ListenerRequest,
    DescribeTrafficMirrorReceiver: DescribeTrafficMirrorReceiver,
    L7ExListener: L7ExListener,
    L7ListenerInfo: L7ListenerInfo,
    L7ListenerInfoRule: L7ListenerInfoRule,
    DescribeL7BackendsResponse: DescribeL7BackendsResponse,
    Filter: Filter,
    DevicesBindInfoRule: DevicesBindInfoRule,
    TrafficMirror: TrafficMirror,
    DescribeLoadBalancersRequest: DescribeLoadBalancersRequest,
    DevicesBindInfoLoadBalancer: DevicesBindInfoLoadBalancer,
    L4Listener: L4Listener,
    CreateL7Listener: CreateL7Listener,
    DeleteLoadBalancerResponse: DeleteLoadBalancerResponse,
    CreateTrafficMirrorRequest: CreateTrafficMirrorRequest,
    BindL4BackendsRequest: BindL4BackendsRequest,
    DescribeL7ListenerInfoResponse: DescribeL7ListenerInfoResponse,
    DescribeL7ListenersResponse: DescribeL7ListenersResponse,
    DeleteListenersResponse: DeleteListenersResponse,
    CreateLoadBalancersResponse: CreateLoadBalancersResponse,
    UnbindTrafficMirrorReceiver: UnbindTrafficMirrorReceiver,
    ModifyLoadBalancerChargeModeResponse: ModifyLoadBalancerChargeModeResponse,
    UnbindL7BackendsRequest: UnbindL7BackendsRequest,
    L7ListenerInfoLocation: L7ListenerInfoLocation,
    L7RulesLocation: L7RulesLocation,
    ModifyLoadBalancerChargeModeListener: ModifyLoadBalancerChargeModeListener,
    TrafficMirrorReciversStatus: TrafficMirrorReciversStatus,
    CreateLoadBalancersRequest: CreateLoadBalancersRequest,
    DescribeLoadBalancerPortInfoResponse: DescribeLoadBalancerPortInfoResponse,
    DescribeL7ListenerInfoRequest: DescribeL7ListenerInfoRequest,
    ModifyL4ListenerRequest: ModifyL4ListenerRequest,
    L4Backend: L4Backend,
    L7Backend: L7Backend,
    ModifyL7LocationRule: ModifyL7LocationRule,
    ModifyLoadBalancerRequest: ModifyLoadBalancerRequest,
    DevicesBindInfoL7Listener: DevicesBindInfoL7Listener,
    DescribeL4ListenersRequest: DescribeL4ListenersRequest,
    CreateL7ListenersResponse: CreateL7ListenersResponse,
    CreateLoadBalancerBzConf: CreateLoadBalancerBzConf,
    DeleteTrafficMirrorRequest: DeleteTrafficMirrorRequest,
    CreateL7ListenersRequest: CreateL7ListenersRequest,
    BindL4Backend: BindL4Backend,
    DescribeL7ListenersExRequest: DescribeL7ListenersExRequest,
    DescribeLoadBalancerTaskResultResponse: DescribeLoadBalancerTaskResultResponse,
    UnbindTrafficMirrorReceiversRequest: UnbindTrafficMirrorReceiversRequest,
    UnbindTrafficMirrorListenersRequest: UnbindTrafficMirrorListenersRequest,
    DescribeCertDetailRequest: DescribeCertDetailRequest,
    DescribeDevicesBindInfoResponse: DescribeDevicesBindInfoResponse,
    LoadBalancerPortInfoListener: LoadBalancerPortInfoListener,
    DescribeL4BackendsResponse: DescribeL4BackendsResponse,
    CreateL4Listener: CreateL4Listener,
    DescribeTrafficMirrorListenersResponse: DescribeTrafficMirrorListenersResponse,
    DescribeLoadBalancersResponse: DescribeLoadBalancersResponse,
    DeleteL7RulesResponse: DeleteL7RulesResponse,
    CertDetailLoadBalancer: CertDetailLoadBalancer,
    DescribeTrafficMirrorReceiversRequest: DescribeTrafficMirrorReceiversRequest,
    SetTrafficMirrorAliasRequest: SetTrafficMirrorAliasRequest,
    UnbindL4BackendsResponse: UnbindL4BackendsResponse,
    L7ListenerInfoBackend: L7ListenerInfoBackend,
    ModifyLoadBalancerChargeModeRequest: ModifyLoadBalancerChargeModeRequest,
    ModifyL4BackendWeightRequest: ModifyL4BackendWeightRequest,
    LoadBalancer: LoadBalancer,

}
