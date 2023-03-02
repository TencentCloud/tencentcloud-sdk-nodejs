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
 * DescribeRoles返回参数结构体
 * @class
 */
class DescribeRolesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 角色数组。
         * @type {Array.<Role> || null}
         */
        this.RoleSets = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.RoleSets) {
            this.RoleSets = new Array();
            for (let z in params.RoleSets) {
                let obj = new Role();
                obj.deserialize(params.RoleSets[z]);
                this.RoleSets.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAMQPRouteRelations请求参数结构体
 * @class
 */
class DescribeAMQPRouteRelationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询限制数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Vhost名称
         * @type {string || null}
         */
        this.VHostId = null;

        /**
         * 按源exchange名称过滤查询结果，支持模糊查询
         * @type {string || null}
         */
        this.FilterSourceExchange = null;

        /**
         * 按绑定的目标类型过滤查询结果，可选值:Exchange、Queue
         * @type {string || null}
         */
        this.FilterDestType = null;

        /**
         * 按目标名称过滤查询结果，支持模糊查询
         * @type {string || null}
         */
        this.FilterDestValue = null;

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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.VHostId = 'VHostId' in params ? params.VHostId : null;
        this.FilterSourceExchange = 'FilterSourceExchange' in params ? params.FilterSourceExchange : null;
        this.FilterDestType = 'FilterDestType' in params ? params.FilterDestType : null;
        this.FilterDestValue = 'FilterDestValue' in params ? params.FilterDestValue : null;

    }
}

/**
 * cmq DeadLetterPolicy
 * @class
 */
class CmqDeadLetterPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 死信队列。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeadLetterQueue = null;

        /**
         * 死信队列策略。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Policy = null;

        /**
         * 最大未消费过期时间。Policy为1时必选。范围300-43200，单位秒，需要小于消息最大保留时间MsgRetentionSeconds。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxTimeToLive = null;

        /**
         * 最大接收次数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxReceiveCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeadLetterQueue = 'DeadLetterQueue' in params ? params.DeadLetterQueue : null;
        this.Policy = 'Policy' in params ? params.Policy : null;
        this.MaxTimeToLive = 'MaxTimeToLive' in params ? params.MaxTimeToLive : null;
        this.MaxReceiveCount = 'MaxReceiveCount' in params ? params.MaxReceiveCount : null;

    }
}

/**
 * DescribeNamespaceBundlesOpt请求参数结构体
 * @class
 */
class DescribeNamespaceBundlesOptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 物理集群名
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 虚拟集群（租户）ID
         * @type {string || null}
         */
        this.TenantId = null;

        /**
         * 命名空间名
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 是否需要监控指标，若传false，则不需要传Limit和Offset分页参数
         * @type {boolean || null}
         */
        this.NeedMetrics = null;

        /**
         * 查询限制条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询偏移量
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
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.TenantId = 'TenantId' in params ? params.TenantId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.NeedMetrics = 'NeedMetrics' in params ? params.NeedMetrics : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * RocketMQ命名空间信息
 * @class
 */
class RocketMQNamespace extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间名称，3-64个字符，只能包含字母、数字、“-”及“_”
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 未消费消息的保留时间，以毫秒单位，范围60秒到15天
         * @type {number || null}
         */
        this.Ttl = null;

        /**
         * 消息持久化后保留的时间，以毫秒单位
         * @type {number || null}
         */
        this.RetentionTime = null;

        /**
         * 说明
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 公网接入点地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PublicEndpoint = null;

        /**
         * VPC接入点地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcEndpoint = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.Ttl = 'Ttl' in params ? params.Ttl : null;
        this.RetentionTime = 'RetentionTime' in params ? params.RetentionTime : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.PublicEndpoint = 'PublicEndpoint' in params ? params.PublicEndpoint : null;
        this.VpcEndpoint = 'VpcEndpoint' in params ? params.VpcEndpoint : null;

    }
}

/**
 * DescribeSubscriptions请求参数结构体
 * @class
 */
class DescribeSubscriptionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境（命名空间）名称。
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 主题名称。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 起始下标，不填默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，不填则默认为10，最大值为20。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 订阅者名称，模糊匹配。
         * @type {string || null}
         */
        this.SubscriptionName = null;

        /**
         * 数据过滤条件。
         * @type {Array.<FilterSubscription> || null}
         */
        this.Filters = null;

        /**
         * Pulsar 集群的ID
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
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SubscriptionName = 'SubscriptionName' in params ? params.SubscriptionName : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new FilterSubscription();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * 实例节点分布信息
 * @class
 */
class InstanceNodeDistribution extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 可用区id
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 节点数
         * @type {number || null}
         */
        this.NodeCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.NodeCount = 'NodeCount' in params ? params.NodeCount : null;

    }
}

/**
 * CreateRocketMQGroup请求参数结构体
 * @class
 */
class CreateRocketMQGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Group名称，8~64个字符
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 命名空间，目前只支持单个命名空间
         * @type {Array.<string> || null}
         */
        this.Namespaces = null;

        /**
         * 是否开启消费
         * @type {boolean || null}
         */
        this.ReadEnable = null;

        /**
         * 是否开启广播消费
         * @type {boolean || null}
         */
        this.BroadcastEnable = null;

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 说明信息，最长128个字符
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Group类型（TCP/HTTP）
         * @type {string || null}
         */
        this.GroupType = null;

        /**
         * Group最大重试次数
         * @type {number || null}
         */
        this.RetryMaxTimes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Namespaces = 'Namespaces' in params ? params.Namespaces : null;
        this.ReadEnable = 'ReadEnable' in params ? params.ReadEnable : null;
        this.BroadcastEnable = 'BroadcastEnable' in params ? params.BroadcastEnable : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.GroupType = 'GroupType' in params ? params.GroupType : null;
        this.RetryMaxTimes = 'RetryMaxTimes' in params ? params.RetryMaxTimes : null;

    }
}

/**
 * ModifyEnvironmentAttributes请求参数结构体
 * @class
 */
class ModifyEnvironmentAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间名称。
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 未消费消息过期时间，单位：秒，范围60秒~15天。
         * @type {number || null}
         */
        this.MsgTTL = null;

        /**
         * 备注，字符串最长不超过128。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 消息保留策略
         * @type {RetentionPolicy || null}
         */
        this.RetentionPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.MsgTTL = 'MsgTTL' in params ? params.MsgTTL : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.RetentionPolicy) {
            let obj = new RetentionPolicy();
            obj.deserialize(params.RetentionPolicy)
            this.RetentionPolicy = obj;
        }

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
         * 集群的ID
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
 * SendBatchMessages返回参数结构体
 * @class
 */
class SendBatchMessagesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消息的唯一标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MessageId = null;

        /**
         * 错误消息，返回为 ""，代表没有错误
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
        this.MessageId = 'MessageId' in params ? params.MessageId : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCmqSubscriptionAttribute返回参数结构体
 * @class
 */
class ModifyCmqSubscriptionAttributeResponse extends  AbstractModel {
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
 * CreateCmqTopic请求参数结构体
 * @class
 */
class CreateCmqTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线（-）。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 消息最大长度。取值范围 1024-65536 Byte（即1-64K），默认值 65536。
         * @type {number || null}
         */
        this.MaxMsgSize = null;

        /**
         * 用于指定主题的消息匹配策略。1：表示标签匹配策略；2：表示路由匹配策略，默认值为标签匹配策略。
         * @type {number || null}
         */
        this.FilterType = null;

        /**
         * 消息保存时间。取值范围60 - 86400 s（即1分钟 - 1天），默认值86400。
         * @type {number || null}
         */
        this.MsgRetentionSeconds = null;

        /**
         * 是否开启消息轨迹标识，true表示开启，false表示不开启，不填表示不开启。
         * @type {boolean || null}
         */
        this.Trace = null;

        /**
         * 标签数组
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
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.MaxMsgSize = 'MaxMsgSize' in params ? params.MaxMsgSize : null;
        this.FilterType = 'FilterType' in params ? params.FilterType : null;
        this.MsgRetentionSeconds = 'MsgRetentionSeconds' in params ? params.MsgRetentionSeconds : null;
        this.Trace = 'Trace' in params ? params.Trace : null;

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
 * CreateAMQPExchange请求参数结构体
 * @class
 */
class CreateAMQPExchangeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 交换机名称，3-64个字符，只能包含字母、数字、“-”及“_”
         * @type {string || null}
         */
        this.Exchange = null;

        /**
         * 交换机所在的vhost，目前支持在单个vhost下创建主题
         * @type {Array.<string> || null}
         */
        this.VHosts = null;

        /**
         * 交换机类型，可选值为Direct, Fanout, Topic, x-delayed-message
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 交换机说明，最大128个字符
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 备用交换机名称
         * @type {string || null}
         */
        this.AlternateExchange = null;

        /**
         * 延迟交换机类型，可选值为Direct, Fanout, Topic, 不允许为x-delayed-message
         * @type {string || null}
         */
        this.DelayedType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Exchange = 'Exchange' in params ? params.Exchange : null;
        this.VHosts = 'VHosts' in params ? params.VHosts : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.AlternateExchange = 'AlternateExchange' in params ? params.AlternateExchange : null;
        this.DelayedType = 'DelayedType' in params ? params.DelayedType : null;

    }
}

/**
 * DescribeRocketMQNamespaces返回参数结构体
 * @class
 */
class DescribeRocketMQNamespacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间列表
         * @type {Array.<RocketMQNamespace> || null}
         */
        this.Namespaces = null;

        /**
         * 总条数
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

        if (params.Namespaces) {
            this.Namespaces = new Array();
            for (let z in params.Namespaces) {
                let obj = new RocketMQNamespace();
                obj.deserialize(params.Namespaces[z]);
                this.Namespaces.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResetRocketMQConsumerOffSet返回参数结构体
 * @class
 */
class ResetRocketMQConsumerOffSetResponse extends  AbstractModel {
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
 * DescribeBindClusters返回参数结构体
 * @class
 */
class DescribeBindClustersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 专享集群的数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 专享集群的列表
         * @type {Array.<BindCluster> || null}
         */
        this.ClusterSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ClusterSet) {
            this.ClusterSet = new Array();
            for (let z in params.ClusterSet) {
                let obj = new BindCluster();
                obj.deserialize(params.ClusterSet[z]);
                this.ClusterSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 用户专享集群信息
 * @class
 */
class BindCluster extends  AbstractModel {
    constructor(){
        super();

        /**
         * 物理集群的名称
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
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;

    }
}

/**
 * ModifyCluster返回参数结构体
 * @class
 */
class ModifyClusterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pulsar 集群的ID
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
 * VPC配置信息
 * @class
 */
class VpcConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * vpc的id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网id
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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * RocketMQ近期使用量
 * @class
 */
class RocketMQClusterRecentStats extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic数量
         * @type {number || null}
         */
        this.TopicNum = null;

        /**
         * 消息生产数
         * @type {number || null}
         */
        this.ProducedMsgNum = null;

        /**
         * 消息消费数
         * @type {number || null}
         */
        this.ConsumedMsgNum = null;

        /**
         * 消息堆积数
         * @type {number || null}
         */
        this.AccumulativeMsgNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicNum = 'TopicNum' in params ? params.TopicNum : null;
        this.ProducedMsgNum = 'ProducedMsgNum' in params ? params.ProducedMsgNum : null;
        this.ConsumedMsgNum = 'ConsumedMsgNum' in params ? params.ConsumedMsgNum : null;
        this.AccumulativeMsgNum = 'AccumulativeMsgNum' in params ? params.AccumulativeMsgNum : null;

    }
}

/**
 * RocketMQ专享实例信息
 * @class
 */
class RocketMQVipInstance extends  AbstractModel {
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
        this.InstanceName = null;

        /**
         * 实例版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceVersion = null;

        /**
         * 实例状态，0表示创建中，1表示正常，2表示隔离中，3表示已销毁，4 - 异常, 5 - 发货失败
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 节点数量
         * @type {number || null}
         */
        this.NodeCount = null;

        /**
         * 实例配置规格名称
         * @type {string || null}
         */
        this.ConfigDisplay = null;

        /**
         * 峰值TPS
         * @type {number || null}
         */
        this.MaxTps = null;

        /**
         * 峰值带宽，Mbps为单位
         * @type {number || null}
         */
        this.MaxBandWidth = null;

        /**
         * 存储容量，GB为单位
         * @type {number || null}
         */
        this.MaxStorage = null;

        /**
         * 实例到期时间，毫秒为单位
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * 自动续费标记，0表示默认状态(用户未设置，即初始状态即手动续费)， 1表示自动续费，2表示明确不自动续费(用户设置)
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 0-后付费，1-预付费
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 备注信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 实例配置ID
         * @type {string || null}
         */
        this.SpecName = null;

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
        this.InstanceVersion = 'InstanceVersion' in params ? params.InstanceVersion : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.NodeCount = 'NodeCount' in params ? params.NodeCount : null;
        this.ConfigDisplay = 'ConfigDisplay' in params ? params.ConfigDisplay : null;
        this.MaxTps = 'MaxTps' in params ? params.MaxTps : null;
        this.MaxBandWidth = 'MaxBandWidth' in params ? params.MaxBandWidth : null;
        this.MaxStorage = 'MaxStorage' in params ? params.MaxStorage : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.SpecName = 'SpecName' in params ? params.SpecName : null;

    }
}

/**
 * RabbitMQ专享实例信息
 * @class
 */
class RabbitMQVipInstance extends  AbstractModel {
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
        this.InstanceName = null;

        /**
         * 实例版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceVersion = null;

        /**
         * 实例状态，0表示创建中，1表示正常，2表示隔离中，3表示已销毁，4 - 异常, 5 - 发货失败
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 节点数量
         * @type {number || null}
         */
        this.NodeCount = null;

        /**
         * 实例配置规格名称
         * @type {string || null}
         */
        this.ConfigDisplay = null;

        /**
         * 峰值TPS
         * @type {number || null}
         */
        this.MaxTps = null;

        /**
         * 峰值带宽，Mbps为单位
         * @type {number || null}
         */
        this.MaxBandWidth = null;

        /**
         * 存储容量，GB为单位
         * @type {number || null}
         */
        this.MaxStorage = null;

        /**
         * 实例到期时间，毫秒为单位
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * 自动续费标记，0表示默认状态(用户未设置，即初始状态即手动续费)， 1表示自动续费，2表示明确不自动续费(用户设置)
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 0-后付费，1-预付费
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 备注信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 实例配置ID
         * @type {string || null}
         */
        this.SpecName = null;

        /**
         * 集群异常。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExceptionInformation = null;

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
        this.InstanceVersion = 'InstanceVersion' in params ? params.InstanceVersion : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.NodeCount = 'NodeCount' in params ? params.NodeCount : null;
        this.ConfigDisplay = 'ConfigDisplay' in params ? params.ConfigDisplay : null;
        this.MaxTps = 'MaxTps' in params ? params.MaxTps : null;
        this.MaxBandWidth = 'MaxBandWidth' in params ? params.MaxBandWidth : null;
        this.MaxStorage = 'MaxStorage' in params ? params.MaxStorage : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.SpecName = 'SpecName' in params ? params.SpecName : null;
        this.ExceptionInformation = 'ExceptionInformation' in params ? params.ExceptionInformation : null;

    }
}

/**
 * DescribeCmqQueues返回参数结构体
 * @class
 */
class DescribeCmqQueuesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 队列列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CmqQueue> || null}
         */
        this.QueueList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.QueueList) {
            this.QueueList = new Array();
            for (let z in params.QueueList) {
                let obj = new CmqQueue();
                obj.deserialize(params.QueueList[z]);
                this.QueueList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAllTenants返回参数结构体
 * @class
 */
class DescribeAllTenantsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 虚拟集群列表
         * @type {Array.<InternalTenant> || null}
         */
        this.Tenants = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Tenants) {
            this.Tenants = new Array();
            for (let z in params.Tenants) {
                let obj = new InternalTenant();
                obj.deserialize(params.Tenants[z]);
                this.Tenants.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRabbitMQNodeList请求参数结构体
 * @class
 */
class DescribeRabbitMQNodeListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * rabbitmq集群ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 一页限制
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 模糊搜索节点名字
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * 过滤参数的名字和数值
现在只有一个nodeStatus
running/down
数组类型，兼容后续添加过滤参数

         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 按指定元素排序，现在只有2个
cpuUsage/diskUsage
         * @type {string || null}
         */
        this.SortElement = null;

        /**
         * 升序/降序
ascend/descend
         * @type {string || null}
         */
        this.SortOrder = null;

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
        this.NodeName = 'NodeName' in params ? params.NodeName : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.SortElement = 'SortElement' in params ? params.SortElement : null;
        this.SortOrder = 'SortOrder' in params ? params.SortOrder : null;

    }
}

/**
 * DescribeNamespaceBundlesOpt返回参数结构体
 * @class
 */
class DescribeNamespaceBundlesOptResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录条数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * bundle列表
         * @type {Array.<BundleSetOpt> || null}
         */
        this.BundleSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.BundleSet) {
            this.BundleSet = new Array();
            for (let z in params.BundleSet) {
                let obj = new BundleSetOpt();
                obj.deserialize(params.BundleSet[z]);
                this.BundleSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RocketMQ专享集群实例配置
 * @class
 */
class RocketMQInstanceConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单命名空间TPS上线
         * @type {number || null}
         */
        this.MaxTpsPerNamespace = null;

        /**
         * 最大命名空间数量
         * @type {number || null}
         */
        this.MaxNamespaceNum = null;

        /**
         * 已使用命名空间数量
         * @type {number || null}
         */
        this.UsedNamespaceNum = null;

        /**
         * 最大Topic数量
         * @type {number || null}
         */
        this.MaxTopicNum = null;

        /**
         * 已使用Topic数量
         * @type {number || null}
         */
        this.UsedTopicNum = null;

        /**
         * 最大Group数量
         * @type {number || null}
         */
        this.MaxGroupNum = null;

        /**
         * 已使用Group数量
         * @type {number || null}
         */
        this.UsedGroupNum = null;

        /**
         * 集群类型
         * @type {string || null}
         */
        this.ConfigDisplay = null;

        /**
         * 集群节点数
         * @type {number || null}
         */
        this.NodeCount = null;

        /**
         * 节点分布情况
         * @type {Array.<InstanceNodeDistribution> || null}
         */
        this.NodeDistribution = null;

        /**
         * topic分布情况
         * @type {Array.<RocketMQTopicDistribution> || null}
         */
        this.TopicDistribution = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxTpsPerNamespace = 'MaxTpsPerNamespace' in params ? params.MaxTpsPerNamespace : null;
        this.MaxNamespaceNum = 'MaxNamespaceNum' in params ? params.MaxNamespaceNum : null;
        this.UsedNamespaceNum = 'UsedNamespaceNum' in params ? params.UsedNamespaceNum : null;
        this.MaxTopicNum = 'MaxTopicNum' in params ? params.MaxTopicNum : null;
        this.UsedTopicNum = 'UsedTopicNum' in params ? params.UsedTopicNum : null;
        this.MaxGroupNum = 'MaxGroupNum' in params ? params.MaxGroupNum : null;
        this.UsedGroupNum = 'UsedGroupNum' in params ? params.UsedGroupNum : null;
        this.ConfigDisplay = 'ConfigDisplay' in params ? params.ConfigDisplay : null;
        this.NodeCount = 'NodeCount' in params ? params.NodeCount : null;

        if (params.NodeDistribution) {
            this.NodeDistribution = new Array();
            for (let z in params.NodeDistribution) {
                let obj = new InstanceNodeDistribution();
                obj.deserialize(params.NodeDistribution[z]);
                this.NodeDistribution.push(obj);
            }
        }

        if (params.TopicDistribution) {
            this.TopicDistribution = new Array();
            for (let z in params.TopicDistribution) {
                let obj = new RocketMQTopicDistribution();
                obj.deserialize(params.TopicDistribution[z]);
                this.TopicDistribution.push(obj);
            }
        }

    }
}

/**
 * DescribeBindVpcs返回参数结构体
 * @class
 */
class DescribeBindVpcsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Vpc集合。
         * @type {Array.<VpcBindRecord> || null}
         */
        this.VpcSets = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.VpcSets) {
            this.VpcSets = new Array();
            for (let z in params.VpcSets) {
                let obj = new VpcBindRecord();
                obj.deserialize(params.VpcSets[z]);
                this.VpcSets.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RewindCmqQueue返回参数结构体
 * @class
 */
class RewindCmqQueueResponse extends  AbstractModel {
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
 * DeleteCluster请求参数结构体
 * @class
 */
class DeleteClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群Id，传入需要删除的集群Id。
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
 * cmq订阅返回参数
 * @class
 */
class CmqSubscription extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订阅名字，在单个地域同一帐号的同一主题下唯一。订阅名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubscriptionName = null;

        /**
         * 订阅 ID。订阅 ID 在拉取监控数据时会用到。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubscriptionId = null;

        /**
         * 订阅拥有者的 APPID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TopicOwner = null;

        /**
         * 该订阅待投递的消息数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MsgCount = null;

        /**
         * 最后一次修改订阅属性的时间。返回 Unix 时间戳，精确到毫秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LastModifyTime = null;

        /**
         * 订阅的创建时间。返回 Unix 时间戳，精确到毫秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 表示订阅接收消息的过滤策略。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.BindingKey = null;

        /**
         * 接收通知的 endpoint，根据协议 protocol 区分：对于 HTTP，endpoint 必须以http://开头，host 可以是域名或 IP；对于 queue，则填 queueName。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Endpoint = null;

        /**
         * 描述用户创建订阅时选择的过滤策略：
filterType = 1表示用户使用 filterTag 标签过滤
filterType = 2表示用户使用 bindingKey 过滤。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.FilterTags = null;

        /**
         * 订阅的协议，目前支持两种协议：HTTP、queue。使用 HTTP 协议，用户需自己搭建接受消息的 Web Server。使用 queue，消息会自动推送到 CMQ queue，用户可以并发地拉取消息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 向 endpoint 推送消息出现错误时，CMQ 推送服务器的重试策略。取值有：
（1）BACKOFF_RETRY，退避重试。每隔一定时间重试一次，重试够一定次数后，就把该消息丢弃，继续推送下一条消息；
（2）EXPONENTIAL_DECAY_RETRY，指数衰退重试。每次重试的间隔是指数递增的，例如开始 1s，后面是 2s，4s，8s...由于 Topic 消息的周期是一天，所以最多重试一天就把消息丢弃。默认值是 EXPONENTIAL_DECAY_RETRY。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NotifyStrategy = null;

        /**
         * 推送内容的格式。取值：（1）JSON；（2）SIMPLIFIED，即 raw 格式。如果 protocol 是 queue，则取值必须为 SIMPLIFIED。如果 protocol 是 HTTP，两个值均可以，默认值是 JSON。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NotifyContentFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubscriptionName = 'SubscriptionName' in params ? params.SubscriptionName : null;
        this.SubscriptionId = 'SubscriptionId' in params ? params.SubscriptionId : null;
        this.TopicOwner = 'TopicOwner' in params ? params.TopicOwner : null;
        this.MsgCount = 'MsgCount' in params ? params.MsgCount : null;
        this.LastModifyTime = 'LastModifyTime' in params ? params.LastModifyTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.BindingKey = 'BindingKey' in params ? params.BindingKey : null;
        this.Endpoint = 'Endpoint' in params ? params.Endpoint : null;
        this.FilterTags = 'FilterTags' in params ? params.FilterTags : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.NotifyStrategy = 'NotifyStrategy' in params ? params.NotifyStrategy : null;
        this.NotifyContentFormat = 'NotifyContentFormat' in params ? params.NotifyContentFormat : null;

    }
}

/**
 * ModifyAMQPVHost返回参数结构体
 * @class
 */
class ModifyAMQPVHostResponse extends  AbstractModel {
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
 * DescribeAMQPCluster返回参数结构体
 * @class
 */
class DescribeAMQPClusterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群信息
         * @type {AMQPClusterInfo || null}
         */
        this.ClusterInfo = null;

        /**
         * 集群配置
         * @type {AMQPClusterConfig || null}
         */
        this.ClusterConfig = null;

        /**
         * 集群最近使用量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AMQPClusterRecentStats || null}
         */
        this.ClusterStats = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ClusterInfo) {
            let obj = new AMQPClusterInfo();
            obj.deserialize(params.ClusterInfo)
            this.ClusterInfo = obj;
        }

        if (params.ClusterConfig) {
            let obj = new AMQPClusterConfig();
            obj.deserialize(params.ClusterConfig)
            this.ClusterConfig = obj;
        }

        if (params.ClusterStats) {
            let obj = new AMQPClusterRecentStats();
            obj.deserialize(params.ClusterStats)
            this.ClusterStats = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAMQPCluster请求参数结构体
 * @class
 */
class CreateAMQPClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 3-64个字符，只能包含字母、数字、“-”及“_”
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 集群描述，128个字符以内
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
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * DeleteRocketMQGroup请求参数结构体
 * @class
 */
class DeleteRocketMQGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 命名空间名称
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 消费组名称
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * RocketMQ消费组信息
 * @class
 */
class RocketMQGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消费组名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 在线消费者数量
         * @type {number || null}
         */
        this.ConsumerNum = null;

        /**
         * 消费TPS
         * @type {number || null}
         */
        this.TPS = null;

        /**
         * 总堆积数量
         * @type {number || null}
         */
        this.TotalAccumulative = null;

        /**
         * 0表示集群消费模式，1表示广播消费模式，-1表示未知
         * @type {number || null}
         */
        this.ConsumptionMode = null;

        /**
         * 是否允许消费
         * @type {boolean || null}
         */
        this.ReadEnabled = null;

        /**
         * 重试队列分区数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RetryPartitionNum = null;

        /**
         * 创建时间，以毫秒为单位
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 修改时间，以毫秒为单位
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 客户端协议
         * @type {string || null}
         */
        this.ClientProtocol = null;

        /**
         * 说明信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 消费者类型，枚举值ACTIVELY, PASSIVELY
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConsumerType = null;

        /**
         * 是否开启广播消费
         * @type {boolean || null}
         */
        this.BroadcastEnabled = null;

        /**
         * Group类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupType = null;

        /**
         * 重试次数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RetryMaxTimes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ConsumerNum = 'ConsumerNum' in params ? params.ConsumerNum : null;
        this.TPS = 'TPS' in params ? params.TPS : null;
        this.TotalAccumulative = 'TotalAccumulative' in params ? params.TotalAccumulative : null;
        this.ConsumptionMode = 'ConsumptionMode' in params ? params.ConsumptionMode : null;
        this.ReadEnabled = 'ReadEnabled' in params ? params.ReadEnabled : null;
        this.RetryPartitionNum = 'RetryPartitionNum' in params ? params.RetryPartitionNum : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ClientProtocol = 'ClientProtocol' in params ? params.ClientProtocol : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ConsumerType = 'ConsumerType' in params ? params.ConsumerType : null;
        this.BroadcastEnabled = 'BroadcastEnabled' in params ? params.BroadcastEnabled : null;
        this.GroupType = 'GroupType' in params ? params.GroupType : null;
        this.RetryMaxTimes = 'RetryMaxTimes' in params ? params.RetryMaxTimes : null;

    }
}

/**
 * AMQP集群近期使用量
 * @class
 */
class AMQPClusterRecentStats extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queue数量
         * @type {number || null}
         */
        this.QueueNum = null;

        /**
         * 消息生产数
         * @type {number || null}
         */
        this.ProducedMsgNum = null;

        /**
         * 消息堆积数
         * @type {number || null}
         */
        this.AccumulativeMsgNum = null;

        /**
         * Exchange数量
         * @type {number || null}
         */
        this.ExchangeNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueNum = 'QueueNum' in params ? params.QueueNum : null;
        this.ProducedMsgNum = 'ProducedMsgNum' in params ? params.ProducedMsgNum : null;
        this.AccumulativeMsgNum = 'AccumulativeMsgNum' in params ? params.AccumulativeMsgNum : null;
        this.ExchangeNum = 'ExchangeNum' in params ? params.ExchangeNum : null;

    }
}

/**
 * DescribeRocketMQVipInstanceDetail请求参数结构体
 * @class
 */
class DescribeRocketMQVipInstanceDetailRequest extends  AbstractModel {
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
 * DeleteCmqTopic返回参数结构体
 * @class
 */
class DeleteCmqTopicResponse extends  AbstractModel {
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
 * ModifyAMQPVHost请求参数结构体
 * @class
 */
class ModifyAMQPVHostRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * vhost名称，3-64个字符，只能包含字母、数字、“-”及“_”
         * @type {string || null}
         */
        this.VHostId = null;

        /**
         * 未消费消息的保留时间，以毫秒为单位，60秒-15天
         * @type {number || null}
         */
        this.MsgTtl = null;

        /**
         * 说明，最大128个字符
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.VHostId = 'VHostId' in params ? params.VHostId : null;
        this.MsgTtl = 'MsgTtl' in params ? params.MsgTtl : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * CreateSubscription请求参数结构体
 * @class
 */
class CreateSubscriptionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境（命名空间）名称。
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 主题名称。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 订阅者名称，不超过128个字符。
         * @type {string || null}
         */
        this.SubscriptionName = null;

        /**
         * 是否幂等创建，若否不允许创建同名的订阅关系。
         * @type {boolean || null}
         */
        this.IsIdempotent = null;

        /**
         * 备注，128个字符以内。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Pulsar 集群的ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 是否自动创建死信和重试主题，True 表示创建，False表示不创建，默认自动创建死信和重试主题。
         * @type {boolean || null}
         */
        this.AutoCreatePolicyTopic = null;

        /**
         * 指定死信和重试主题名称规范，LEGACY表示历史命名规则，COMMUNITY表示Pulsar社区命名规范
         * @type {string || null}
         */
        this.PostFixPattern = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.SubscriptionName = 'SubscriptionName' in params ? params.SubscriptionName : null;
        this.IsIdempotent = 'IsIdempotent' in params ? params.IsIdempotent : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.AutoCreatePolicyTopic = 'AutoCreatePolicyTopic' in params ? params.AutoCreatePolicyTopic : null;
        this.PostFixPattern = 'PostFixPattern' in params ? params.PostFixPattern : null;

    }
}

/**
 * CreateRocketMQNamespace请求参数结构体
 * @class
 */
class CreateRocketMQNamespaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 命名空间名称，3-64个字符，只能包含字母、数字、“-”及“_”
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 未消费消息的保留时间，以毫秒为单位，60秒-15天
         * @type {number || null}
         */
        this.Ttl = null;

        /**
         * 消息持久化后保留的时间，以毫秒为单位
         * @type {number || null}
         */
        this.RetentionTime = null;

        /**
         * 说明，最大128个字符
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.Ttl = 'Ttl' in params ? params.Ttl : null;
        this.RetentionTime = 'RetentionTime' in params ? params.RetentionTime : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * 主题实例
 * @class
 */
class Topic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 最后一次间隔内发布消息的平均byte大小。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AverageMsgSize = null;

        /**
         * 消费者数量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConsumerCount = null;

        /**
         * 被记录下来的消息总数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastConfirmedEntry = null;

        /**
         * 最后一个ledger创建的时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastLedgerCreatedTimestamp = null;

        /**
         * 本地和复制的发布者每秒发布消息的速率。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MsgRateIn = null;

        /**
         * 本地和复制的消费者每秒分发消息的数量之和。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MsgRateOut = null;

        /**
         * 本地和复制的发布者每秒发布消息的byte。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MsgThroughputIn = null;

        /**
         * 本地和复制的消费者每秒分发消息的byte。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MsgThroughputOut = null;

        /**
         * 被记录下来的消息总数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NumberOfEntries = null;

        /**
         * 分区数<=0：topic下无子分区。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Partitions = null;

        /**
         * 生产者数量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProducerCount = null;

        /**
         * 以byte计算的所有消息存储总量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TotalSize = null;

        /**
         * 分区topic里面的子分区。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PartitionsTopic> || null}
         */
        this.SubTopicSets = null;

        /**
         * topic类型描述：
0：普通消息；
1：全局顺序消息；
2：局部顺序消息；
3：重试队列；
4：死信队列；
5：事务消息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TopicType = null;

        /**
         * 环境（命名空间）名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 主题名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 说明，128个字符以内。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 最近修改时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 生产者上限。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProducerLimit = null;

        /**
         * 消费者上限。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConsumerLimit = null;

        /**
         * 0: 非持久非分区
1: 非持久分区
2: 持久非分区
3: 持久分区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PulsarTopicType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AverageMsgSize = 'AverageMsgSize' in params ? params.AverageMsgSize : null;
        this.ConsumerCount = 'ConsumerCount' in params ? params.ConsumerCount : null;
        this.LastConfirmedEntry = 'LastConfirmedEntry' in params ? params.LastConfirmedEntry : null;
        this.LastLedgerCreatedTimestamp = 'LastLedgerCreatedTimestamp' in params ? params.LastLedgerCreatedTimestamp : null;
        this.MsgRateIn = 'MsgRateIn' in params ? params.MsgRateIn : null;
        this.MsgRateOut = 'MsgRateOut' in params ? params.MsgRateOut : null;
        this.MsgThroughputIn = 'MsgThroughputIn' in params ? params.MsgThroughputIn : null;
        this.MsgThroughputOut = 'MsgThroughputOut' in params ? params.MsgThroughputOut : null;
        this.NumberOfEntries = 'NumberOfEntries' in params ? params.NumberOfEntries : null;
        this.Partitions = 'Partitions' in params ? params.Partitions : null;
        this.ProducerCount = 'ProducerCount' in params ? params.ProducerCount : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;

        if (params.SubTopicSets) {
            this.SubTopicSets = new Array();
            for (let z in params.SubTopicSets) {
                let obj = new PartitionsTopic();
                obj.deserialize(params.SubTopicSets[z]);
                this.SubTopicSets.push(obj);
            }
        }
        this.TopicType = 'TopicType' in params ? params.TopicType : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ProducerLimit = 'ProducerLimit' in params ? params.ProducerLimit : null;
        this.ConsumerLimit = 'ConsumerLimit' in params ? params.ConsumerLimit : null;
        this.PulsarTopicType = 'PulsarTopicType' in params ? params.PulsarTopicType : null;

    }
}

/**
 * DescribeCmqTopicDetail返回参数结构体
 * @class
 */
class DescribeCmqTopicDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题详情
         * @type {CmqTopic || null}
         */
        this.TopicDescribe = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TopicDescribe) {
            let obj = new CmqTopic();
            obj.deserialize(params.TopicDescribe)
            this.TopicDescribe = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 命名空间信息
 * @class
 */
class Environment extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间名称
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 说明
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 未消费消息过期时间，单位：秒，最大1296000（15天）
         * @type {number || null}
         */
        this.MsgTTL = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 最近修改时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 命名空间ID
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 命名空间名称
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * Topic数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TopicNum = null;

        /**
         * 消息保留策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RetentionPolicy || null}
         */
        this.RetentionPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.MsgTTL = 'MsgTTL' in params ? params.MsgTTL : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.TopicNum = 'TopicNum' in params ? params.TopicNum : null;

        if (params.RetentionPolicy) {
            let obj = new RetentionPolicy();
            obj.deserialize(params.RetentionPolicy)
            this.RetentionPolicy = obj;
        }

    }
}

/**
 * cmq 批量queue属性信息
 * @class
 */
class CmqQueue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消息队列ID。
         * @type {string || null}
         */
        this.QueueId = null;

        /**
         * 消息队列名字。
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * 每秒钟生产消息条数的限制，消费消息的大小是该值的1.1倍。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * 带宽限制。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Bps = null;

        /**
         * 飞行消息最大保留时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxDelaySeconds = null;

        /**
         * 最大堆积消息数。取值范围在公测期间为 1,000,000 - 10,000,000，正式上线后范围可达到 1000,000-1000,000,000。默认取值在公测期间为 10,000,000，正式上线后为 100,000,000。
         * @type {number || null}
         */
        this.MaxMsgHeapNum = null;

        /**
         * 消息接收长轮询等待时间。取值范围0 - 30秒，默认值0。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PollingWaitSeconds = null;

        /**
         * 消息保留周期。取值范围60-1296000秒（1min-15天），默认值345600秒（4 天）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MsgRetentionSeconds = null;

        /**
         * 消息可见性超时。取值范围1 - 43200秒（即12小时内），默认值30。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VisibilityTimeout = null;

        /**
         * 消息最大长度。取值范围1024 - 1048576 Byte（即1K - 1024K），默认值65536。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxMsgSize = null;

        /**
         * 回溯队列的消息回溯时间最大值，取值范围0 - 43200秒，0表示不开启消息回溯。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RewindSeconds = null;

        /**
         * 队列的创建时间。返回 Unix 时间戳，精确到毫秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 最后一次修改队列属性的时间。返回 Unix 时间戳，精确到毫秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LastModifyTime = null;

        /**
         * 在队列中处于 Active 状态（不处于被消费状态）的消息总数，为近似值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ActiveMsgNum = null;

        /**
         * 在队列中处于 Inactive 状态（正处于被消费状态）的消息总数，为近似值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InactiveMsgNum = null;

        /**
         * 延迟消息数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DelayMsgNum = null;

        /**
         * 已调用 DelMsg 接口删除，但还在回溯保留时间内的消息数量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RewindMsgNum = null;

        /**
         * 消息最小未消费时间，单位为秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MinMsgTime = null;

        /**
         * 事务消息队列。true表示是事务消息，false表示不是事务消息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Transaction = null;

        /**
         * 死信队列。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CmqDeadLetterSource> || null}
         */
        this.DeadLetterSource = null;

        /**
         * 死信队列策略。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CmqDeadLetterPolicy || null}
         */
        this.DeadLetterPolicy = null;

        /**
         * 事务消息策略。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CmqTransactionPolicy || null}
         */
        this.TransactionPolicy = null;

        /**
         * 创建者Uin。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateUin = null;

        /**
         * 关联的标签。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 消息轨迹。true表示开启，false表示不开启。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Trace = null;

        /**
         * 租户id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TenantId = null;

        /**
         * 命名空间名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 集群状态，0:创建中，1:正常，2:销毁中，3:已删除，4: 隔离中，5:创建失败，6: 删除失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 最大未确认消息数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxUnackedMsgNum = null;

        /**
         * 最大消息堆积大小（字节）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxMsgBacklogSize = null;

        /**
         * 队列可回溯存储空间，取值范围1024MB - 10240MB，0表示不开启
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RetentionSizeInMB = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueId = 'QueueId' in params ? params.QueueId : null;
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.Bps = 'Bps' in params ? params.Bps : null;
        this.MaxDelaySeconds = 'MaxDelaySeconds' in params ? params.MaxDelaySeconds : null;
        this.MaxMsgHeapNum = 'MaxMsgHeapNum' in params ? params.MaxMsgHeapNum : null;
        this.PollingWaitSeconds = 'PollingWaitSeconds' in params ? params.PollingWaitSeconds : null;
        this.MsgRetentionSeconds = 'MsgRetentionSeconds' in params ? params.MsgRetentionSeconds : null;
        this.VisibilityTimeout = 'VisibilityTimeout' in params ? params.VisibilityTimeout : null;
        this.MaxMsgSize = 'MaxMsgSize' in params ? params.MaxMsgSize : null;
        this.RewindSeconds = 'RewindSeconds' in params ? params.RewindSeconds : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.LastModifyTime = 'LastModifyTime' in params ? params.LastModifyTime : null;
        this.ActiveMsgNum = 'ActiveMsgNum' in params ? params.ActiveMsgNum : null;
        this.InactiveMsgNum = 'InactiveMsgNum' in params ? params.InactiveMsgNum : null;
        this.DelayMsgNum = 'DelayMsgNum' in params ? params.DelayMsgNum : null;
        this.RewindMsgNum = 'RewindMsgNum' in params ? params.RewindMsgNum : null;
        this.MinMsgTime = 'MinMsgTime' in params ? params.MinMsgTime : null;
        this.Transaction = 'Transaction' in params ? params.Transaction : null;

        if (params.DeadLetterSource) {
            this.DeadLetterSource = new Array();
            for (let z in params.DeadLetterSource) {
                let obj = new CmqDeadLetterSource();
                obj.deserialize(params.DeadLetterSource[z]);
                this.DeadLetterSource.push(obj);
            }
        }

        if (params.DeadLetterPolicy) {
            let obj = new CmqDeadLetterPolicy();
            obj.deserialize(params.DeadLetterPolicy)
            this.DeadLetterPolicy = obj;
        }

        if (params.TransactionPolicy) {
            let obj = new CmqTransactionPolicy();
            obj.deserialize(params.TransactionPolicy)
            this.TransactionPolicy = obj;
        }
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Trace = 'Trace' in params ? params.Trace : null;
        this.TenantId = 'TenantId' in params ? params.TenantId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.MaxUnackedMsgNum = 'MaxUnackedMsgNum' in params ? params.MaxUnackedMsgNum : null;
        this.MaxMsgBacklogSize = 'MaxMsgBacklogSize' in params ? params.MaxMsgBacklogSize : null;
        this.RetentionSizeInMB = 'RetentionSizeInMB' in params ? params.RetentionSizeInMB : null;

    }
}

/**
 * CreateEnvironment返回参数结构体
 * @class
 */
class CreateEnvironmentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境（命名空间）名称。
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 未消费消息过期时间，单位：秒。
         * @type {number || null}
         */
        this.MsgTTL = null;

        /**
         * 说明，128个字符以内。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 命名空间ID
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.MsgTTL = 'MsgTTL' in params ? params.MsgTTL : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSubscription返回参数结构体
 * @class
 */
class CreateSubscriptionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建结果。
         * @type {boolean || null}
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
 * DeleteAMQPQueue返回参数结构体
 * @class
 */
class DeleteAMQPQueueResponse extends  AbstractModel {
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
 * ModifyCmqTopicAttribute返回参数结构体
 * @class
 */
class ModifyCmqTopicAttributeResponse extends  AbstractModel {
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
 * DescribeCmqSubscriptionDetail请求参数结构体
 * @class
 */
class DescribeCmqSubscriptionDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线（-）。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 分页时本页获取主题列表的起始位置。如果填写了该值，必须也要填写 limit 。该值缺省时，后台取默认值 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页时本页获取主题的个数，如果不传递该参数，则该参数默认为20，最大值为50。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 根据SubscriptionName进行模糊搜索
         * @type {string || null}
         */
        this.SubscriptionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SubscriptionName = 'SubscriptionName' in params ? params.SubscriptionName : null;

    }
}

/**
 * DescribePublisherSummary返回参数结构体
 * @class
 */
class DescribePublisherSummaryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生产速率（条/秒）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MsgRateIn = null;

        /**
         * 生产速率（字节/秒）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MsgThroughputIn = null;

        /**
         * 生产者数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PublisherCount = null;

        /**
         * 消息存储大小，以字节为单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StorageSize = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MsgRateIn = 'MsgRateIn' in params ? params.MsgRateIn : null;
        this.MsgThroughputIn = 'MsgThroughputIn' in params ? params.MsgThroughputIn : null;
        this.PublisherCount = 'PublisherCount' in params ? params.PublisherCount : null;
        this.StorageSize = 'StorageSize' in params ? params.StorageSize : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAMQPVHosts返回参数结构体
 * @class
 */
class DescribeAMQPVHostsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Vhost 列表
         * @type {Array.<AMQPVHost> || null}
         */
        this.VHosts = null;

        /**
         * 总条数
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

        if (params.VHosts) {
            this.VHosts = new Array();
            for (let z in params.VHosts) {
                let obj = new AMQPVHost();
                obj.deserialize(params.VHosts[z]);
                this.VHosts.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEnvironments请求参数结构体
 * @class
 */
class DescribeEnvironmentsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间名称，模糊搜索。
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 起始下标，不填默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，不填则默认为10，最大值为20。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pulsar 集群的ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * * EnvironmentId
按照名称空间进行过滤，精确查询。
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
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
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
 * DescribeRocketMQNamespaces请求参数结构体
 * @class
 */
class DescribeRocketMQNamespacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制数目
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 按名称搜索
         * @type {string || null}
         */
        this.NameKeyword = null;

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
        this.NameKeyword = 'NameKeyword' in params ? params.NameKeyword : null;

    }
}

/**
 * DeleteAMQPCluster返回参数结构体
 * @class
 */
class DeleteAMQPClusterResponse extends  AbstractModel {
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
 * DescribeAMQPCluster请求参数结构体
 * @class
 */
class DescribeAMQPClusterRequest extends  AbstractModel {
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
 * DescribeRocketMQTopics请求参数结构体
 * @class
 */
class DescribeRocketMQTopicsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询限制数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 命名空间
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 按主题类型过滤查询结果，可选择Normal, GlobalOrder, PartitionedOrder, Transaction
         * @type {Array.<string> || null}
         */
        this.FilterType = null;

        /**
         * 按主题名称搜索，支持模糊查询
         * @type {string || null}
         */
        this.FilterName = null;

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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.FilterType = 'FilterType' in params ? params.FilterType : null;
        this.FilterName = 'FilterName' in params ? params.FilterName : null;

    }
}

/**
 * ModifyRocketMQCluster返回参数结构体
 * @class
 */
class ModifyRocketMQClusterResponse extends  AbstractModel {
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
 * 订阅者
 * @class
 */
class Subscription extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题名称。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 环境（命名空间）名称。
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 消费者开始连接的时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConnectedSince = null;

        /**
         * 消费者地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConsumerAddr = null;

        /**
         * 消费者数量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConsumerCount = null;

        /**
         * 消费者名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConsumerName = null;

        /**
         * 堆积的消息数量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MsgBacklog = null;

        /**
         * 于TTL，此订阅下没有被发送而是被丢弃的比例。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MsgRateExpired = null;

        /**
         * 消费者每秒分发消息的数量之和。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MsgRateOut = null;

        /**
         * 消费者每秒消息的byte。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MsgThroughputOut = null;

        /**
         * 订阅名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubscriptionName = null;

        /**
         * 消费者集合。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Consumer> || null}
         */
        this.ConsumerSets = null;

        /**
         * 是否在线。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsOnline = null;

        /**
         * 消费进度集合。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ConsumersSchedule> || null}
         */
        this.ConsumersScheduleSets = null;

        /**
         * 备注。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 最近修改时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 订阅类型，Exclusive，Shared，Failover， Key_Shared，空或NULL表示未知，
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubType = null;

        /**
         * 是否由于未 ack 数到达上限而被 block
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.BlockedSubscriptionOnUnackedMsgs = null;

        /**
         * 未 ack 消息数上限
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxUnackedMsgNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.ConnectedSince = 'ConnectedSince' in params ? params.ConnectedSince : null;
        this.ConsumerAddr = 'ConsumerAddr' in params ? params.ConsumerAddr : null;
        this.ConsumerCount = 'ConsumerCount' in params ? params.ConsumerCount : null;
        this.ConsumerName = 'ConsumerName' in params ? params.ConsumerName : null;
        this.MsgBacklog = 'MsgBacklog' in params ? params.MsgBacklog : null;
        this.MsgRateExpired = 'MsgRateExpired' in params ? params.MsgRateExpired : null;
        this.MsgRateOut = 'MsgRateOut' in params ? params.MsgRateOut : null;
        this.MsgThroughputOut = 'MsgThroughputOut' in params ? params.MsgThroughputOut : null;
        this.SubscriptionName = 'SubscriptionName' in params ? params.SubscriptionName : null;

        if (params.ConsumerSets) {
            this.ConsumerSets = new Array();
            for (let z in params.ConsumerSets) {
                let obj = new Consumer();
                obj.deserialize(params.ConsumerSets[z]);
                this.ConsumerSets.push(obj);
            }
        }
        this.IsOnline = 'IsOnline' in params ? params.IsOnline : null;

        if (params.ConsumersScheduleSets) {
            this.ConsumersScheduleSets = new Array();
            for (let z in params.ConsumersScheduleSets) {
                let obj = new ConsumersSchedule();
                obj.deserialize(params.ConsumersScheduleSets[z]);
                this.ConsumersScheduleSets.push(obj);
            }
        }
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.SubType = 'SubType' in params ? params.SubType : null;
        this.BlockedSubscriptionOnUnackedMsgs = 'BlockedSubscriptionOnUnackedMsgs' in params ? params.BlockedSubscriptionOnUnackedMsgs : null;
        this.MaxUnackedMsgNum = 'MaxUnackedMsgNum' in params ? params.MaxUnackedMsgNum : null;

    }
}

/**
 * DescribeCmqQueueDetail返回参数结构体
 * @class
 */
class DescribeCmqQueueDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 队列详情列表。
         * @type {CmqQueue || null}
         */
        this.QueueDescribe = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.QueueDescribe) {
            let obj = new CmqQueue();
            obj.deserialize(params.QueueDescribe)
            this.QueueDescribe = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateEnvironment请求参数结构体
 * @class
 */
class CreateEnvironmentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境（命名空间）名称，不支持中字以及除了短线和下划线外的特殊字符且不超过16个字符。
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 未消费消息过期时间，单位：秒，取值范围：60秒~15天。
         * @type {number || null}
         */
        this.MsgTTL = null;

        /**
         * 说明，128个字符以内。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Pulsar 集群的ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 消息保留策略
         * @type {RetentionPolicy || null}
         */
        this.RetentionPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.MsgTTL = 'MsgTTL' in params ? params.MsgTTL : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.RetentionPolicy) {
            let obj = new RetentionPolicy();
            obj.deserialize(params.RetentionPolicy)
            this.RetentionPolicy = obj;
        }

    }
}

/**
 * CreateAMQPQueue请求参数结构体
 * @class
 */
class CreateAMQPQueueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 队列名称，3-64个字符，只能包含字母、数字、“-”及“_”
         * @type {string || null}
         */
        this.Queue = null;

        /**
         * 队列所在的vhost名称
         * @type {string || null}
         */
        this.VHostId = null;

        /**
         * 是否自动清除
         * @type {boolean || null}
         */
        this.AutoDelete = null;

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 队列说明，最大128个字符
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 死信exchange
         * @type {string || null}
         */
        this.DeadLetterExchange = null;

        /**
         * 路由键
         * @type {string || null}
         */
        this.DeadLetterRoutingKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Queue = 'Queue' in params ? params.Queue : null;
        this.VHostId = 'VHostId' in params ? params.VHostId : null;
        this.AutoDelete = 'AutoDelete' in params ? params.AutoDelete : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.DeadLetterExchange = 'DeadLetterExchange' in params ? params.DeadLetterExchange : null;
        this.DeadLetterRoutingKey = 'DeadLetterRoutingKey' in params ? params.DeadLetterRoutingKey : null;

    }
}

/**
 * ClearCmqQueue请求参数结构体
 * @class
 */
class ClearCmqQueueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 队列名字，在单个地域同一帐号下唯一。队列名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
         * @type {string || null}
         */
        this.QueueName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueName = 'QueueName' in params ? params.QueueName : null;

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
         * 起始下标，不填默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，不填则默认为10，最大值为20。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 集群ID列表过滤
         * @type {Array.<string> || null}
         */
        this.ClusterIdList = null;

        /**
         * 是否标签过滤
         * @type {boolean || null}
         */
        this.IsTagFilter = null;

        /**
         * 过滤器。目前支持按标签过滤。
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
        this.ClusterIdList = 'ClusterIdList' in params ? params.ClusterIdList : null;
        this.IsTagFilter = 'IsTagFilter' in params ? params.IsTagFilter : null;

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
 * 生产者信息
 * @class
 */
class Publisher extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生产者id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProducerId = null;

        /**
         * 生产者名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProducerName = null;

        /**
         * 生产者地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 客户端版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClientVersion = null;

        /**
         * 消息生产速率（条/秒）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MsgRateIn = null;

        /**
         * 消息生产吞吐速率（字节/秒）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MsgThroughputIn = null;

        /**
         * 平均消息大小（字节）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AverageMsgSize = null;

        /**
         * 连接时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConnectedSince = null;

        /**
         * 生产者连接的主题分区号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Partition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProducerId = 'ProducerId' in params ? params.ProducerId : null;
        this.ProducerName = 'ProducerName' in params ? params.ProducerName : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.ClientVersion = 'ClientVersion' in params ? params.ClientVersion : null;
        this.MsgRateIn = 'MsgRateIn' in params ? params.MsgRateIn : null;
        this.MsgThroughputIn = 'MsgThroughputIn' in params ? params.MsgThroughputIn : null;
        this.AverageMsgSize = 'AverageMsgSize' in params ? params.AverageMsgSize : null;
        this.ConnectedSince = 'ConnectedSince' in params ? params.ConnectedSince : null;
        this.Partition = 'Partition' in params ? params.Partition : null;

    }
}

/**
 * RocketMQ主题信息
 * @class
 */
class RocketMQTopic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 主题的类别，为枚举类型，Normal，GlobalOrder，PartitionedOrder，Transaction，Retry及DeadLetter
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 订阅组数量
         * @type {number || null}
         */
        this.GroupNum = null;

        /**
         * 说明
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 读写分区数
         * @type {number || null}
         */
        this.PartitionNum = null;

        /**
         * 创建时间，以毫秒为单位
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 创建时间，以毫秒为单位
         * @type {number || null}
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
        this.Type = 'Type' in params ? params.Type : null;
        this.GroupNum = 'GroupNum' in params ? params.GroupNum : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.PartitionNum = 'PartitionNum' in params ? params.PartitionNum : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeRocketMQCluster返回参数结构体
 * @class
 */
class DescribeRocketMQClusterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群信息
         * @type {RocketMQClusterInfo || null}
         */
        this.ClusterInfo = null;

        /**
         * 集群配置
         * @type {RocketMQClusterConfig || null}
         */
        this.ClusterConfig = null;

        /**
         * 集群最近使用量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RocketMQClusterRecentStats || null}
         */
        this.ClusterStats = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ClusterInfo) {
            let obj = new RocketMQClusterInfo();
            obj.deserialize(params.ClusterInfo)
            this.ClusterInfo = obj;
        }

        if (params.ClusterConfig) {
            let obj = new RocketMQClusterConfig();
            obj.deserialize(params.ClusterConfig)
            this.ClusterConfig = obj;
        }

        if (params.ClusterStats) {
            let obj = new RocketMQClusterRecentStats();
            obj.deserialize(params.ClusterStats)
            this.ClusterStats = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAMQPVHost返回参数结构体
 * @class
 */
class CreateAMQPVHostResponse extends  AbstractModel {
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
 * DescribeCmqSubscriptionDetail返回参数结构体
 * @class
 */
class DescribeCmqSubscriptionDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Subscription属性集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CmqSubscription> || null}
         */
        this.SubscriptionSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.SubscriptionSet) {
            this.SubscriptionSet = new Array();
            for (let z in params.SubscriptionSet) {
                let obj = new CmqSubscription();
                obj.deserialize(params.SubscriptionSet[z]);
                this.SubscriptionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * vcp绑定记录
 * @class
 */
class VpcBindRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 租户Vpc Id
         * @type {string || null}
         */
        this.UniqueVpcId = null;

        /**
         * 租户Vpc子网Id
         * @type {string || null}
         */
        this.UniqueSubnetId = null;

        /**
         * 路由Id
         * @type {string || null}
         */
        this.RouterId = null;

        /**
         * Vpc的Id
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Vpc的Port
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 说明，128个字符以内
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
        this.UniqueVpcId = 'UniqueVpcId' in params ? params.UniqueVpcId : null;
        this.UniqueSubnetId = 'UniqueSubnetId' in params ? params.UniqueSubnetId : null;
        this.RouterId = 'RouterId' in params ? params.RouterId : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * RewindCmqQueue请求参数结构体
 * @class
 */
class RewindCmqQueueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 队列名字，在单个地域同一帐号下唯一。队列名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * 设定该时间，则（Batch）receiveMessage接口，会按照生产消息的先后顺序消费该时间戳以后的消息。
         * @type {number || null}
         */
        this.StartConsumeTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.StartConsumeTime = 'StartConsumeTime' in params ? params.StartConsumeTime : null;

    }
}

/**
 * DescribeAMQPVHosts请求参数结构体
 * @class
 */
class DescribeAMQPVHostsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制数目
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 按名称搜索
         * @type {string || null}
         */
        this.NameKeyword = null;

        /**
         * VHostId 列表过滤
         * @type {Array.<string> || null}
         */
        this.VHostIdList = null;

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
        this.NameKeyword = 'NameKeyword' in params ? params.NameKeyword : null;
        this.VHostIdList = 'VHostIdList' in params ? params.VHostIdList : null;

    }
}

/**
 * ModifyCluster请求参数结构体
 * @class
 */
class ModifyClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pulsar 集群的ID，需要更新的集群Id。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 更新后的集群名称。
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 说明信息。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 开启公网访问，只能为true
         * @type {boolean || null}
         */
        this.PublicAccessEnabled = null;

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
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.PublicAccessEnabled = 'PublicAccessEnabled' in params ? params.PublicAccessEnabled : null;

    }
}

/**
 * DescribeAMQPQueues请求参数结构体
 * @class
 */
class DescribeAMQPQueuesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询限制数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Vhost名称
         * @type {string || null}
         */
        this.VHostId = null;

        /**
         * 按队列名称搜索，支持模糊查询
         * @type {string || null}
         */
        this.NameKeyword = null;

        /**
         * 查询结果排序规则，ASC为升序，DESC为降序
         * @type {string || null}
         */
        this.SortOrder = null;

        /**
         * 对查询结果排序，此为排序字段，目前支持Accumulative（消息堆积量）、Tps
         * @type {string || null}
         */
        this.SortedBy = null;

        /**
         * 队列名称，指定此参数后将只返回该队列信息
         * @type {string || null}
         */
        this.FilterOneQueue = null;

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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.VHostId = 'VHostId' in params ? params.VHostId : null;
        this.NameKeyword = 'NameKeyword' in params ? params.NameKeyword : null;
        this.SortOrder = 'SortOrder' in params ? params.SortOrder : null;
        this.SortedBy = 'SortedBy' in params ? params.SortedBy : null;
        this.FilterOneQueue = 'FilterOneQueue' in params ? params.FilterOneQueue : null;

    }
}

/**
 * ModifyRocketMQCluster请求参数结构体
 * @class
 */
class ModifyRocketMQClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * RocketMQ集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 3-64个字符，只能包含字母、数字、“-”及“_”
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 说明信息，不超过128个字符
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * vhostd信息
 * @class
 */
class AMQPVHost extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间名称，3-64个字符，只能包含字母、数字、“-”及“_”
         * @type {string || null}
         */
        this.VHostId = null;

        /**
         * 未消费消息的保留时间，以毫秒单位，范围60秒到15天
         * @type {number || null}
         */
        this.MsgTtl = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 创建时间，以毫秒为单位
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间，以毫秒为单位
         * @type {number || null}
         */
        this.UpdateTime = null;

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
         * 集群状态，0:创建中，1:正常，2:销毁中，3:已删除，4: 隔离中，5:创建失败，6: 删除失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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
        this.VHostId = 'VHostId' in params ? params.VHostId : null;
        this.MsgTtl = 'MsgTtl' in params ? params.MsgTtl : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * ModifyAMQPExchange返回参数结构体
 * @class
 */
class ModifyAMQPExchangeResponse extends  AbstractModel {
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
 * DescribeAMQPExchanges返回参数结构体
 * @class
 */
class DescribeAMQPExchangesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总记录数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 主题信息列表
         * @type {Array.<AMQPExchange> || null}
         */
        this.Exchanges = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Exchanges) {
            this.Exchanges = new Array();
            for (let z in params.Exchanges) {
                let obj = new AMQPExchange();
                obj.deserialize(params.Exchanges[z]);
                this.Exchanges.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AcknowledgeMessage请求参数结构体
 * @class
 */
class AcknowledgeMessageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用作标识消息的唯一的ID（可从 receiveMessage 的返回值中获得）
         * @type {string || null}
         */
        this.MessageId = null;

        /**
         * Topic 名字（可从 receiveMessage 的返回值中获得）这里尽量需要使用topic的全路径，即：tenant/namespace/topic。如果不指定，默认使用的是：public/default
         * @type {string || null}
         */
        this.AckTopic = null;

        /**
         * 订阅者的名字，可以从receiveMessage的返回值中获取到。这里尽量与receiveMessage中的订阅者保持一致，否则没办法正确ack 接收回来的消息。
         * @type {string || null}
         */
        this.SubName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MessageId = 'MessageId' in params ? params.MessageId : null;
        this.AckTopic = 'AckTopic' in params ? params.AckTopic : null;
        this.SubName = 'SubName' in params ? params.SubName : null;

    }
}

/**
 * DeleteAMQPCluster请求参数结构体
 * @class
 */
class DeleteAMQPClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待删除的集群Id。
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
 * DescribeRocketMQVipInstanceDetail返回参数结构体
 * @class
 */
class DescribeRocketMQVipInstanceDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群信息
         * @type {RocketMQClusterInfo || null}
         */
        this.ClusterInfo = null;

        /**
         * 集群配置
         * @type {RocketMQInstanceConfig || null}
         */
        this.InstanceConfig = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ClusterInfo) {
            let obj = new RocketMQClusterInfo();
            obj.deserialize(params.ClusterInfo)
            this.ClusterInfo = obj;
        }

        if (params.InstanceConfig) {
            let obj = new RocketMQInstanceConfig();
            obj.deserialize(params.InstanceConfig)
            this.InstanceConfig = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PublishCmqMsg返回参数结构体
 * @class
 */
class PublishCmqMsgResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * true表示发送成功
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 消息id
         * @type {string || null}
         */
        this.MsgId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.MsgId = 'MsgId' in params ? params.MsgId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePublishers请求参数结构体
 * @class
 */
class DescribePublishersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 命名空间名称
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 主题名称
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * 参数过滤器，支持ProducerName，Address字段
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 查询偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询条数，默认为20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序器
         * @type {Sort || null}
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Topic = 'Topic' in params ? params.Topic : null;

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

        if (params.Sort) {
            let obj = new Sort();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }

    }
}

/**
 * CreateRocketMQCluster请求参数结构体
 * @class
 */
class CreateRocketMQClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群名称，3-64个字符，只能包含字母、数字、“-”及“_”
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 集群描述，128个字符以内
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
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * DeleteAMQPVHost请求参数结构体
 * @class
 */
class DeleteAMQPVHostRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * vhost名称
         * @type {string || null}
         */
        this.VHostId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.VHostId = 'VHostId' in params ? params.VHostId : null;

    }
}

/**
 * AcknowledgeMessage返回参数结构体
 * @class
 */
class AcknowledgeMessageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 如果为“”，则说明没有错误返回
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
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCmqQueueAttribute返回参数结构体
 * @class
 */
class ModifyCmqQueueAttributeResponse extends  AbstractModel {
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
 * DeleteEnvironmentRoles返回参数结构体
 * @class
 */
class DeleteEnvironmentRolesResponse extends  AbstractModel {
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
 * DescribeClusterDetail请求参数结构体
 * @class
 */
class DescribeClusterDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群的ID
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
 * ModifyRole返回参数结构体
 * @class
 */
class ModifyRoleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 角色名称
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * 备注说明
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAMQPQueue请求参数结构体
 * @class
 */
class ModifyAMQPQueueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Vhost名称
         * @type {string || null}
         */
        this.VHostId = null;

        /**
         * 队列名称
         * @type {string || null}
         */
        this.Queue = null;

        /**
         * 是否自动清除
         * @type {boolean || null}
         */
        this.AutoDelete = null;

        /**
         * 说明信息，最大128个字符
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 死信exchange
         * @type {string || null}
         */
        this.DeadLetterExchange = null;

        /**
         * 路由键
         * @type {string || null}
         */
        this.DeadLetterRoutingKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.VHostId = 'VHostId' in params ? params.VHostId : null;
        this.Queue = 'Queue' in params ? params.Queue : null;
        this.AutoDelete = 'AutoDelete' in params ? params.AutoDelete : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.DeadLetterExchange = 'DeadLetterExchange' in params ? params.DeadLetterExchange : null;
        this.DeadLetterRoutingKey = 'DeadLetterRoutingKey' in params ? params.DeadLetterRoutingKey : null;

    }
}

/**
 * 标签的key/value的类型
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签的key的值
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签的Value的值
         * @type {string || null}
         */
        this.TagValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * DeleteCmqQueue返回参数结构体
 * @class
 */
class DeleteCmqQueueResponse extends  AbstractModel {
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
 * DescribeRocketMQCluster请求参数结构体
 * @class
 */
class DescribeRocketMQClusterRequest extends  AbstractModel {
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
 * DeleteRocketMQTopic返回参数结构体
 * @class
 */
class DeleteRocketMQTopicResponse extends  AbstractModel {
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
 * ModifyCmqTopicAttribute请求参数结构体
 * @class
 */
class ModifyCmqTopicAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 消息最大长度。取值范围1024 - 65536 Byte（即1 - 64K），默认值65536。
         * @type {number || null}
         */
        this.MaxMsgSize = null;

        /**
         * 消息保存时间。取值范围60 - 86400 s（即1分钟 - 1天），默认值86400。
         * @type {number || null}
         */
        this.MsgRetentionSeconds = null;

        /**
         * 是否开启消息轨迹标识，true表示开启，false表示不开启，不填表示不开启。
         * @type {boolean || null}
         */
        this.Trace = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.MaxMsgSize = 'MaxMsgSize' in params ? params.MaxMsgSize : null;
        this.MsgRetentionSeconds = 'MsgRetentionSeconds' in params ? params.MsgRetentionSeconds : null;
        this.Trace = 'Trace' in params ? params.Trace : null;

    }
}

/**
 * DescribeRabbitMQVipInstances返回参数结构体
 * @class
 */
class DescribeRabbitMQVipInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 未分页的总数目
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例信息列表
         * @type {Array.<RabbitMQVipInstance> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new RabbitMQVipInstance();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRoles请求参数结构体
 * @class
 */
class DeleteRolesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 角色名称数组。
         * @type {Array.<string> || null}
         */
        this.RoleNames = null;

        /**
         * 必填字段，集群Id
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
        this.RoleNames = 'RoleNames' in params ? params.RoleNames : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * ModifyRocketMQTopic返回参数结构体
 * @class
 */
class ModifyRocketMQTopicResponse extends  AbstractModel {
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
 * CreateCmqSubscribe返回参数结构体
 * @class
 */
class CreateCmqSubscribeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订阅id
         * @type {string || null}
         */
        this.SubscriptionId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubscriptionId = 'SubscriptionId' in params ? params.SubscriptionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCmqDeadLetterSourceQueues请求参数结构体
 * @class
 */
class DescribeCmqDeadLetterSourceQueuesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 死信队列名称
         * @type {string || null}
         */
        this.DeadLetterQueueName = null;

        /**
         * 分页时本页获取主题列表的起始位置。如果填写了该值，必须也要填写 limit 。该值缺省时，后台取默认值 0。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页时本页获取主题的个数，如果不传递该参数，则该参数默认为20，最大值为50。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 根据SourceQueueName过滤
         * @type {string || null}
         */
        this.SourceQueueName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeadLetterQueueName = 'DeadLetterQueueName' in params ? params.DeadLetterQueueName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.SourceQueueName = 'SourceQueueName' in params ? params.SourceQueueName : null;

    }
}

/**
 * DescribeSubscriptions返回参数结构体
 * @class
 */
class DescribeSubscriptionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订阅者集合数组。
         * @type {Array.<Subscription> || null}
         */
        this.SubscriptionSets = null;

        /**
         * 数量。
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

        if (params.SubscriptionSets) {
            this.SubscriptionSets = new Array();
            for (let z in params.SubscriptionSets) {
                let obj = new Subscription();
                obj.deserialize(params.SubscriptionSets[z]);
                this.SubscriptionSets.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyRole请求参数结构体
 * @class
 */
class ModifyRoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 角色名称，不支持中字以及除了短线和下划线外的特殊字符且长度必须大于0且小等于32。
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * 备注说明，长度必须大等于0且小等于128。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 必填字段，集群Id
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
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeRabbitMQNodeList返回参数结构体
 * @class
 */
class DescribeRabbitMQNodeListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群列表数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 集群列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RabbitMQPrivateNode> || null}
         */
        this.NodeList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.NodeList) {
            this.NodeList = new Array();
            for (let z in params.NodeList) {
                let obj = new RabbitMQPrivateNode();
                obj.deserialize(params.NodeList[z]);
                this.NodeList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SendMessages返回参数结构体
 * @class
 */
class SendMessagesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消息的messageID, 是全局唯一的，用来标识消息的元数据信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MessageId = null;

        /**
         * 返回的错误消息，如果返回为 “”，说明没有错误
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
        this.MessageId = 'MessageId' in params ? params.MessageId : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ReceiveMessage请求参数结构体
 * @class
 */
class ReceiveMessageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接收消息的topic的名字, 这里尽量需要使用topic的全路径，如果不指定，即：tenant/namespace/topic。默认使用的是：public/default
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * 订阅者的名字
         * @type {string || null}
         */
        this.SubscriptionName = null;

        /**
         * 默认值为1000，consumer接收的消息会首先存储到receiverQueueSize这个队列中，用作调优接收消息的速率
         * @type {number || null}
         */
        this.ReceiverQueueSize = null;

        /**
         * 默认值为：Earliest。用作判定consumer初始接收消息的位置，可选参数为：Earliest, Latest
         * @type {string || null}
         */
        this.SubInitialPosition = null;

        /**
         * 用于设置BatchReceivePolicy，指在一次batch中最多接收多少条消息，默认是 0。即不开启BatchReceivePolicy
         * @type {number || null}
         */
        this.MaxNumMessages = null;

        /**
         * 用于设置BatchReceivePolicy，指在一次batch中最多接收的消息体有多大，单位是 bytes。默认是 0，即不开启BatchReceivePolicy
         * @type {number || null}
         */
        this.MaxNumBytes = null;

        /**
         * 用于设置BatchReceivePolicy，指在一次batch消息的接收z中最多等待的超时时间，单位是毫秒。默认是 0，即不开启BatchReceivePolicy
         * @type {number || null}
         */
        this.Timeout = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.SubscriptionName = 'SubscriptionName' in params ? params.SubscriptionName : null;
        this.ReceiverQueueSize = 'ReceiverQueueSize' in params ? params.ReceiverQueueSize : null;
        this.SubInitialPosition = 'SubInitialPosition' in params ? params.SubInitialPosition : null;
        this.MaxNumMessages = 'MaxNumMessages' in params ? params.MaxNumMessages : null;
        this.MaxNumBytes = 'MaxNumBytes' in params ? params.MaxNumBytes : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;

    }
}

/**
 * CreateTopic请求参数结构体
 * @class
 */
class CreateTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境（命名空间）名称。
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 主题名，不支持中字以及除了短线和下划线外的特殊字符且不超过64个字符。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 入参为1，即是创建非分区topic，无分区；入参大于1，表示分区topic的分区数，最大不允许超过128。
         * @type {number || null}
         */
        this.Partitions = null;

        /**
         * 备注，128字符以内。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 该入参将逐步弃用，可切换至PulsarTopicType参数
0： 普通消息；
1 ：全局顺序消息；
2 ：局部顺序消息；
3 ：重试队列；
4 ：死信队列。
         * @type {number || null}
         */
        this.TopicType = null;

        /**
         * Pulsar 集群的ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Pulsar 主题类型
0: 非持久非分区
1: 非持久分区
2: 持久非分区
3: 持久分区
         * @type {number || null}
         */
        this.PulsarTopicType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Partitions = 'Partitions' in params ? params.Partitions : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.TopicType = 'TopicType' in params ? params.TopicType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.PulsarTopicType = 'PulsarTopicType' in params ? params.PulsarTopicType : null;

    }
}

/**
 * DescribeTopics请求参数结构体
 * @class
 */
class DescribeTopicsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境（命名空间）名称。
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 主题名模糊匹配。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 起始下标，不填默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，不填则默认为10，最大值为20。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * topic类型描述：
0：非持久非分区主题类型；
1：非持久分区主题类型；
2：持久非分区主题类型；
3：持久分区主题类型；
         * @type {number || null}
         */
        this.TopicType = null;

        /**
         * Pulsar 集群的ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * * TopicName
按照主题名字查询，精确查询。
类型：String
必选：否
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 创建来源：
1：用户创建
2：系统创建
         * @type {number || null}
         */
        this.TopicCreator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.TopicType = 'TopicType' in params ? params.TopicType : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.TopicCreator = 'TopicCreator' in params ? params.TopicCreator : null;

    }
}

/**
 * DeleteEnvironments返回参数结构体
 * @class
 */
class DeleteEnvironmentsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功删除的环境（命名空间）数组。
         * @type {Array.<string> || null}
         */
        this.EnvironmentIds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentIds = 'EnvironmentIds' in params ? params.EnvironmentIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAMQPCluster请求参数结构体
 * @class
 */
class ModifyAMQPClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 3-64个字符，只能包含字母、数字、“-”及“_”
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 说明信息，不超过128个字符
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * DescribeEnvironmentRoles返回参数结构体
 * @class
 */
class DescribeEnvironmentRolesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 命名空间角色集合。
         * @type {Array.<EnvironmentRole> || null}
         */
        this.EnvironmentRoleSets = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.EnvironmentRoleSets) {
            this.EnvironmentRoleSets = new Array();
            for (let z in params.EnvironmentRoleSets) {
                let obj = new EnvironmentRole();
                obj.deserialize(params.EnvironmentRoleSets[z]);
                this.EnvironmentRoleSets.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAMQPCreateQuota返回参数结构体
 * @class
 */
class DescribeAMQPCreateQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 租户总共可使用集群数量
         * @type {number || null}
         */
        this.MaxClusterNum = null;

        /**
         * 租户已创建集群数量
         * @type {number || null}
         */
        this.UsedClusterNum = null;

        /**
         * Exchange容量
         * @type {number || null}
         */
        this.ExchangeCapacity = null;

        /**
         * Queue容量
         * @type {number || null}
         */
        this.QueueCapacity = null;

        /**
         * 单Vhost TPS
         * @type {number || null}
         */
        this.MaxTpsPerVHost = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxClusterNum = 'MaxClusterNum' in params ? params.MaxClusterNum : null;
        this.UsedClusterNum = 'UsedClusterNum' in params ? params.UsedClusterNum : null;
        this.ExchangeCapacity = 'ExchangeCapacity' in params ? params.ExchangeCapacity : null;
        this.QueueCapacity = 'QueueCapacity' in params ? params.QueueCapacity : null;
        this.MaxTpsPerVHost = 'MaxTpsPerVHost' in params ? params.MaxTpsPerVHost : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyRocketMQGroup请求参数结构体
 * @class
 */
class ModifyRocketMQGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 命名空间
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 消费组名称
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 说明信息，最长128个字符
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 是否开启消费
         * @type {boolean || null}
         */
        this.ReadEnable = null;

        /**
         * 是否开启广播消费
         * @type {boolean || null}
         */
        this.BroadcastEnable = null;

        /**
         * 最大重试次数
         * @type {number || null}
         */
        this.RetryMaxTimes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ReadEnable = 'ReadEnable' in params ? params.ReadEnable : null;
        this.BroadcastEnable = 'BroadcastEnable' in params ? params.BroadcastEnable : null;
        this.RetryMaxTimes = 'RetryMaxTimes' in params ? params.RetryMaxTimes : null;

    }
}

/**
 * 过滤订阅列表
 * @class
 */
class FilterSubscription extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否仅展示包含真实消费者的订阅。
         * @type {boolean || null}
         */
        this.ConsumerHasCount = null;

        /**
         * 是否仅展示消息堆积的订阅。
         * @type {boolean || null}
         */
        this.ConsumerHasBacklog = null;

        /**
         * 是否仅展示存在消息超期丢弃的订阅。
         * @type {boolean || null}
         */
        this.ConsumerHasExpired = null;

        /**
         * 按照订阅名过滤，精确查询。
         * @type {Array.<string> || null}
         */
        this.SubscriptionNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConsumerHasCount = 'ConsumerHasCount' in params ? params.ConsumerHasCount : null;
        this.ConsumerHasBacklog = 'ConsumerHasBacklog' in params ? params.ConsumerHasBacklog : null;
        this.ConsumerHasExpired = 'ConsumerHasExpired' in params ? params.ConsumerHasExpired : null;
        this.SubscriptionNames = 'SubscriptionNames' in params ? params.SubscriptionNames : null;

    }
}

/**
 * DescribeCmqTopics返回参数结构体
 * @class
 */
class DescribeCmqTopicsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CmqTopic> || null}
         */
        this.TopicList = null;

        /**
         * 全量主题数量
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

        if (params.TopicList) {
            this.TopicList = new Array();
            for (let z in params.TopicList) {
                let obj = new CmqTopic();
                obj.deserialize(params.TopicList[z]);
                this.TopicList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCmqTopicDetail请求参数结构体
 * @class
 */
class DescribeCmqTopicDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 精确匹配TopicName。
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
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * cmq topic返回信息展示字段
 * @class
 */
class CmqTopic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题的 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 主题名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 消息在主题中最长存活时间，从发送到该主题开始经过此参数指定的时间后，不论消息是否被成功推送给用户都将被删除，单位为秒。固定为一天（86400秒），该属性不能修改。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MsgRetentionSeconds = null;

        /**
         * 消息最大长度。取值范围1024 - 1048576Byte（即1 - 1024K），默认值为65536。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxMsgSize = null;

        /**
         * 每秒钟发布消息的条数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * 描述用户创建订阅时选择的过滤策略：
FilterType = 1表示用户使用 FilterTag 标签过滤;
FilterType = 2表示用户使用 BindingKey 过滤。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FilterType = null;

        /**
         * 主题的创建时间。返回 Unix 时间戳，精确到毫秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 最后一次修改主题属性的时间。返回 Unix 时间戳，精确到毫秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LastModifyTime = null;

        /**
         * 当前该主题中消息数目（消息堆积数）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MsgCount = null;

        /**
         * 创建者 Uin，CAM 鉴权 resource 由该字段组合而成。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateUin = null;

        /**
         * 关联的标签。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 消息轨迹。true表示开启，false表示不开启。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Trace = null;

        /**
         * 租户id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TenantId = null;

        /**
         * 命名空间名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceName = null;

        /**
         * 集群状态，0:创建中，1:正常，2:销毁中，3:已删除，4: 隔离中，5:创建失败，6: 删除失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 0表示pulsar，1表示rocketmq
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BrokerType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.MsgRetentionSeconds = 'MsgRetentionSeconds' in params ? params.MsgRetentionSeconds : null;
        this.MaxMsgSize = 'MaxMsgSize' in params ? params.MaxMsgSize : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.FilterType = 'FilterType' in params ? params.FilterType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.LastModifyTime = 'LastModifyTime' in params ? params.LastModifyTime : null;
        this.MsgCount = 'MsgCount' in params ? params.MsgCount : null;
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Trace = 'Trace' in params ? params.Trace : null;
        this.TenantId = 'TenantId' in params ? params.TenantId : null;
        this.NamespaceName = 'NamespaceName' in params ? params.NamespaceName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.BrokerType = 'BrokerType' in params ? params.BrokerType : null;

    }
}

/**
 * UnbindCmqDeadLetter返回参数结构体
 * @class
 */
class UnbindCmqDeadLetterResponse extends  AbstractModel {
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
 * ModifyRocketMQNamespace返回参数结构体
 * @class
 */
class ModifyRocketMQNamespaceResponse extends  AbstractModel {
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
 * AMQP路由关系
 * @class
 */
class AMQPRouteRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由关系ID
         * @type {string || null}
         */
        this.RouteRelationId = null;

        /**
         * 源Exchange
         * @type {string || null}
         */
        this.SourceExchange = null;

        /**
         * 目标类型:Queue|Exchange
         * @type {string || null}
         */
        this.DestType = null;

        /**
         * 目标值
         * @type {string || null}
         */
        this.DestValue = null;

        /**
         * 绑定key
         * @type {string || null}
         */
        this.RoutingKey = null;

        /**
         * 源路由类型:Direct|Topic|Fanout
         * @type {string || null}
         */
        this.SourceExchangeType = null;

        /**
         * 创建时间，以毫秒为单位
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 修改时间，以毫秒为单位
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 说明信息
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
        this.RouteRelationId = 'RouteRelationId' in params ? params.RouteRelationId : null;
        this.SourceExchange = 'SourceExchange' in params ? params.SourceExchange : null;
        this.DestType = 'DestType' in params ? params.DestType : null;
        this.DestValue = 'DestValue' in params ? params.DestValue : null;
        this.RoutingKey = 'RoutingKey' in params ? params.RoutingKey : null;
        this.SourceExchangeType = 'SourceExchangeType' in params ? params.SourceExchangeType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * DeleteAMQPQueue请求参数结构体
 * @class
 */
class DeleteAMQPQueueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Vhost名称
         * @type {string || null}
         */
        this.VHostId = null;

        /**
         * 队列名称
         * @type {string || null}
         */
        this.Queue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.VHostId = 'VHostId' in params ? params.VHostId : null;
        this.Queue = 'Queue' in params ? params.Queue : null;

    }
}

/**
 * DeleteEnvironments请求参数结构体
 * @class
 */
class DeleteEnvironmentsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境（命名空间）数组，每次最多删除20个。
         * @type {Array.<string> || null}
         */
        this.EnvironmentIds = null;

        /**
         * Pulsar 集群的ID
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
        this.EnvironmentIds = 'EnvironmentIds' in params ? params.EnvironmentIds : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeRocketMQClusters请求参数结构体
 * @class
 */
class DescribeRocketMQClustersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制数目
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 按照集群ID关键字搜索
         * @type {string || null}
         */
        this.IdKeyword = null;

        /**
         * 按照集群名称关键字搜索
         * @type {string || null}
         */
        this.NameKeyword = null;

        /**
         * 集群ID列表过滤
         * @type {Array.<string> || null}
         */
        this.ClusterIdList = null;

        /**
         * 标签过滤查找时，需要设置为true
         * @type {boolean || null}
         */
        this.IsTagFilter = null;

        /**
         * 过滤器。目前支持标签过滤。
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
        this.IdKeyword = 'IdKeyword' in params ? params.IdKeyword : null;
        this.NameKeyword = 'NameKeyword' in params ? params.NameKeyword : null;
        this.ClusterIdList = 'ClusterIdList' in params ? params.ClusterIdList : null;
        this.IsTagFilter = 'IsTagFilter' in params ? params.IsTagFilter : null;

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
 * ReceiveMessage返回参数结构体
 * @class
 */
class ReceiveMessageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用作标识消息的唯一主键
         * @type {string || null}
         */
        this.MessageID = null;

        /**
         * 接收消息的内容
         * @type {string || null}
         */
        this.MessagePayload = null;

        /**
         * 提供给 Ack 接口，用来Ack哪一个topic中的消息
         * @type {string || null}
         */
        this.AckTopic = null;

        /**
         * 返回的错误信息，如果为空，说明没有错误
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorMsg = null;

        /**
         * 返回订阅者的名字，用来创建 ack consumer时使用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubName = null;

        /**
         * BatchReceivePolicy 一次性返回的多条消息的 MessageID，用 ‘###’ 来区分不同的 MessageID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MessageIDList = null;

        /**
         * BatchReceivePolicy 一次性返回的多条消息的消息内容，用 ‘###’ 来区分不同的消息内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MessagesPayload = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MessageID = 'MessageID' in params ? params.MessageID : null;
        this.MessagePayload = 'MessagePayload' in params ? params.MessagePayload : null;
        this.AckTopic = 'AckTopic' in params ? params.AckTopic : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.SubName = 'SubName' in params ? params.SubName : null;
        this.MessageIDList = 'MessageIDList' in params ? params.MessageIDList : null;
        this.MessagesPayload = 'MessagesPayload' in params ? params.MessagesPayload : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBindVpcs请求参数结构体
 * @class
 */
class DescribeBindVpcsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始下标，不填默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，不填则默认为10，最大值为20。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pulsar 集群的ID
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
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
         * 集群列表数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 集群信息列表
         * @type {Array.<Cluster> || null}
         */
        this.ClusterSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ClusterSet) {
            this.ClusterSet = new Array();
            for (let z in params.ClusterSet) {
                let obj = new Cluster();
                obj.deserialize(params.ClusterSet[z]);
                this.ClusterSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRocketMQNamespace返回参数结构体
 * @class
 */
class DeleteRocketMQNamespaceResponse extends  AbstractModel {
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
 * ClearCmqSubscriptionFilterTags请求参数结构体
 * @class
 */
class ClearCmqSubscriptionFilterTagsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线（-）。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 订阅名字，在单个地域同一帐号的同一主题下唯一。订阅名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
         * @type {string || null}
         */
        this.SubscriptionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.SubscriptionName = 'SubscriptionName' in params ? params.SubscriptionName : null;

    }
}

/**
 * 主题关键信息
 * @class
 */
class TopicRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境（命名空间）名称。
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 主题名称。
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
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * CreateRocketMQGroup返回参数结构体
 * @class
 */
class CreateRocketMQGroupResponse extends  AbstractModel {
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
 * CreateEnvironmentRole请求参数结构体
 * @class
 */
class CreateEnvironmentRoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境（命名空间）名称。
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 角色名称。
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * 授权项，最多只能包含produce、consume两项的非空字符串数组。
         * @type {Array.<string> || null}
         */
        this.Permissions = null;

        /**
         * 必填字段，集群的ID
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
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.Permissions = 'Permissions' in params ? params.Permissions : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeEnvironmentRoles请求参数结构体
 * @class
 */
class DescribeEnvironmentRolesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 必填字段，环境（命名空间）名称。
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 起始下标，不填默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，不填则默认为10，最大值为20。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 必填字段，Pulsar 集群的ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 角色名称
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * * RoleName
按照角色名进行过滤，精确查询。
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
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;

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
 * DeleteRoles返回参数结构体
 * @class
 */
class DeleteRolesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功删除的角色名称数组。
         * @type {Array.<string> || null}
         */
        this.RoleNames = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleNames = 'RoleNames' in params ? params.RoleNames : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SendMsg返回参数结构体
 * @class
 */
class SendMsgResponse extends  AbstractModel {
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
 * ModifyRocketMQTopic请求参数结构体
 * @class
 */
class ModifyRocketMQTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 命名空间名称
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 主题名称
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * 说明信息，最大128个字符
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 分区数，全局类型无效，不可小于当前分区数
         * @type {number || null}
         */
        this.PartitionNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.PartitionNum = 'PartitionNum' in params ? params.PartitionNum : null;

    }
}

/**
 * RocketMQ集群基本信息
 * @class
 */
class RocketMQClusterInfo extends  AbstractModel {
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
         * 地域信息
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 创建时间，毫秒为单位
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 集群说明信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 公网接入地址
         * @type {string || null}
         */
        this.PublicEndPoint = null;

        /**
         * VPC接入地址
         * @type {string || null}
         */
        this.VpcEndPoint = null;

        /**
         * 是否支持命名空间接入点
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.SupportNamespaceEndpoint = null;

        /**
         * VPC信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VpcConfig> || null}
         */
        this.Vpcs = null;

        /**
         * 是否为专享实例
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsVip = null;

        /**
         * Rocketmq集群标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.RocketMQFlag = null;

        /**
         * 计费状态，1表示正常，2表示已停服，3表示已销毁
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 欠费停服时间，毫秒为单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsolateTime = null;

        /**
         * HTTP协议公网接入地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HttpPublicEndpoint = null;

        /**
         * HTTP协议VPC接入地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HttpVpcEndpoint = null;

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
        this.Region = 'Region' in params ? params.Region : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.PublicEndPoint = 'PublicEndPoint' in params ? params.PublicEndPoint : null;
        this.VpcEndPoint = 'VpcEndPoint' in params ? params.VpcEndPoint : null;
        this.SupportNamespaceEndpoint = 'SupportNamespaceEndpoint' in params ? params.SupportNamespaceEndpoint : null;

        if (params.Vpcs) {
            this.Vpcs = new Array();
            for (let z in params.Vpcs) {
                let obj = new VpcConfig();
                obj.deserialize(params.Vpcs[z]);
                this.Vpcs.push(obj);
            }
        }
        this.IsVip = 'IsVip' in params ? params.IsVip : null;
        this.RocketMQFlag = 'RocketMQFlag' in params ? params.RocketMQFlag : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.IsolateTime = 'IsolateTime' in params ? params.IsolateTime : null;
        this.HttpPublicEndpoint = 'HttpPublicEndpoint' in params ? params.HttpPublicEndpoint : null;
        this.HttpVpcEndpoint = 'HttpVpcEndpoint' in params ? params.HttpVpcEndpoint : null;

    }
}

/**
 * DescribeRocketMQTopics返回参数结构体
 * @class
 */
class DescribeRocketMQTopicsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总记录数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 主题信息列表
         * @type {Array.<RocketMQTopic> || null}
         */
        this.Topics = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Topics) {
            this.Topics = new Array();
            for (let z in params.Topics) {
                let obj = new RocketMQTopic();
                obj.deserialize(params.Topics[z]);
                this.Topics.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAMQPVHost请求参数结构体
 * @class
 */
class CreateAMQPVHostRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * vhost名称，3-64个字符，只能包含字母、数字、“-”及“_”
         * @type {string || null}
         */
        this.VHostId = null;

        /**
         * 未消费消息的保留时间，以毫秒为单位，60秒-15天
         * @type {number || null}
         */
        this.MsgTtl = null;

        /**
         * 说明，最大128个字符
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.VHostId = 'VHostId' in params ? params.VHostId : null;
        this.MsgTtl = 'MsgTtl' in params ? params.MsgTtl : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * 租户RocketMQ集群详细信息
 * @class
 */
class RocketMQClusterDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群基本信息
         * @type {RocketMQClusterInfo || null}
         */
        this.Info = null;

        /**
         * 集群配置信息
         * @type {RocketMQClusterConfig || null}
         */
        this.Config = null;

        /**
         * 集群状态，0:创建中，1:正常，2:销毁中，3:已删除，4: 隔离中，5:创建失败，6: 删除失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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

        if (params.Info) {
            let obj = new RocketMQClusterInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }

        if (params.Config) {
            let obj = new RocketMQClusterConfig();
            obj.deserialize(params.Config)
            this.Config = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DeleteRocketMQGroup返回参数结构体
 * @class
 */
class DeleteRocketMQGroupResponse extends  AbstractModel {
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
 * CreateCmqQueue返回参数结构体
 * @class
 */
class CreateCmqQueueResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建成功的queueId
         * @type {string || null}
         */
        this.QueueId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueId = 'QueueId' in params ? params.QueueId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 分区topic
 * @class
 */
class PartitionsTopic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 最后一次间隔内发布消息的平均byte大小。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AverageMsgSize = null;

        /**
         * 消费者数量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConsumerCount = null;

        /**
         * 被记录下来的消息总数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastConfirmedEntry = null;

        /**
         * 最后一个ledger创建的时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LastLedgerCreatedTimestamp = null;

        /**
         * 本地和复制的发布者每秒发布消息的速率。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MsgRateIn = null;

        /**
         * 本地和复制的消费者每秒分发消息的数量之和。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MsgRateOut = null;

        /**
         * 本地和复制的发布者每秒发布消息的byte。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MsgThroughputIn = null;

        /**
         * 本地和复制的消费者每秒分发消息的byte。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MsgThroughputOut = null;

        /**
         * 被记录下来的消息总数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NumberOfEntries = null;

        /**
         * 子分区id。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Partitions = null;

        /**
         * 生产者数量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProducerCount = null;

        /**
         * 以byte计算的所有消息存储总量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TotalSize = null;

        /**
         * topic类型描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TopicType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AverageMsgSize = 'AverageMsgSize' in params ? params.AverageMsgSize : null;
        this.ConsumerCount = 'ConsumerCount' in params ? params.ConsumerCount : null;
        this.LastConfirmedEntry = 'LastConfirmedEntry' in params ? params.LastConfirmedEntry : null;
        this.LastLedgerCreatedTimestamp = 'LastLedgerCreatedTimestamp' in params ? params.LastLedgerCreatedTimestamp : null;
        this.MsgRateIn = 'MsgRateIn' in params ? params.MsgRateIn : null;
        this.MsgRateOut = 'MsgRateOut' in params ? params.MsgRateOut : null;
        this.MsgThroughputIn = 'MsgThroughputIn' in params ? params.MsgThroughputIn : null;
        this.MsgThroughputOut = 'MsgThroughputOut' in params ? params.MsgThroughputOut : null;
        this.NumberOfEntries = 'NumberOfEntries' in params ? params.NumberOfEntries : null;
        this.Partitions = 'Partitions' in params ? params.Partitions : null;
        this.ProducerCount = 'ProducerCount' in params ? params.ProducerCount : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;
        this.TopicType = 'TopicType' in params ? params.TopicType : null;

    }
}

/**
 * DescribeRocketMQGroups返回参数结构体
 * @class
 */
class DescribeRocketMQGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 订阅组列表
         * @type {Array.<RocketMQGroup> || null}
         */
        this.Groups = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new RocketMQGroup();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResetMsgSubOffsetByTimestamp返回参数结构体
 * @class
 */
class ResetMsgSubOffsetByTimestampResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
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
 * DeleteAMQPExchange返回参数结构体
 * @class
 */
class DeleteAMQPExchangeResponse extends  AbstractModel {
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
 * DeleteRocketMQNamespace请求参数结构体
 * @class
 */
class DeleteRocketMQNamespaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 命名空间名称
         * @type {string || null}
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;

    }
}

/**
 * DescribeRoles请求参数结构体
 * @class
 */
class DescribeRolesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 角色名称，模糊查询
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * 起始下标，不填默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，不填则默认为10，最大值为20。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 必填字段，集群Id
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * * RoleName
按照角色名进行过滤，精确查询。
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
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
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
 * CreateAMQPQueue返回参数结构体
 * @class
 */
class CreateAMQPQueueResponse extends  AbstractModel {
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
 * CreateCluster请求参数结构体
 * @class
 */
class CreateClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群名称，不支持中字以及除了短线和下划线外的特殊字符且不超过16个字符。
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 用户专享物理集群ID，如果不传，则默认在公共集群上创建用户集群资源。
         * @type {number || null}
         */
        this.BindClusterId = null;

        /**
         * 说明，128个字符以内。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 集群的标签列表(已废弃)
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 是否开启公网访问，不填时默认开启
         * @type {boolean || null}
         */
        this.PublicAccessEnabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.BindClusterId = 'BindClusterId' in params ? params.BindClusterId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.PublicAccessEnabled = 'PublicAccessEnabled' in params ? params.PublicAccessEnabled : null;

    }
}

/**
 * DescribeAMQPClusters请求参数结构体
 * @class
 */
class DescribeAMQPClustersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制数目
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 按照集群ID关键字搜索
         * @type {string || null}
         */
        this.IdKeyword = null;

        /**
         * 按照集群名称关键字搜索
         * @type {string || null}
         */
        this.NameKeyword = null;

        /**
         * 集群ID列表过滤
         * @type {Array.<string> || null}
         */
        this.ClusterIdList = null;

        /**
         * 标签过滤查找时，需要设置为true
         * @type {boolean || null}
         */
        this.IsTagFilter = null;

        /**
         * 过滤器。目前支持按标签过滤。
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
        this.IdKeyword = 'IdKeyword' in params ? params.IdKeyword : null;
        this.NameKeyword = 'NameKeyword' in params ? params.NameKeyword : null;
        this.ClusterIdList = 'ClusterIdList' in params ? params.ClusterIdList : null;
        this.IsTagFilter = 'IsTagFilter' in params ? params.IsTagFilter : null;

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
 * CreateAMQPRouteRelation返回参数结构体
 * @class
 */
class CreateAMQPRouteRelationResponse extends  AbstractModel {
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
 * CreateTopic返回参数结构体
 * @class
 */
class CreateTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境（命名空间）名称。
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 主题名。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 0或1：非分区topic，无分区；大于1：具体分区topic的分区数。（存量非分区主题返回0，增量非分区主题返回1）
         * @type {number || null}
         */
        this.Partitions = null;

        /**
         * 备注，128字符以内。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 0： 普通消息；
1 ：全局顺序消息；
2 ：局部顺序消息；
3 ：重试队列；
4 ：死信队列；
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TopicType = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Partitions = 'Partitions' in params ? params.Partitions : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.TopicType = 'TopicType' in params ? params.TopicType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCmqQueues请求参数结构体
 * @class
 */
class DescribeCmqQueuesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页时本页获取队列列表的起始位置。如果填写了该值，必须也要填写 limit 。该值缺省时，后台取默认值 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页时本页获取队列的个数，如果不传递该参数，则该参数默认为20，最大值为50。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 根据QueueName进行过滤
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * CMQ 队列名称列表过滤
         * @type {Array.<string> || null}
         */
        this.QueueNameList = null;

        /**
         * 标签过滤查找时，需要设置为 true
         * @type {boolean || null}
         */
        this.IsTagFilter = null;

        /**
         * 过滤器。目前支持按标签过滤，标签的Name需要加前缀“tag:”，例如：tag:负责人、tag:环境、tag:业务
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
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.QueueNameList = 'QueueNameList' in params ? params.QueueNameList : null;
        this.IsTagFilter = 'IsTagFilter' in params ? params.IsTagFilter : null;

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
 * DescribeEnvironments返回参数结构体
 * @class
 */
class DescribeEnvironmentsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间记录数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 命名空间集合数组。
         * @type {Array.<Environment> || null}
         */
        this.EnvironmentSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.EnvironmentSet) {
            this.EnvironmentSet = new Array();
            for (let z in params.EnvironmentSet) {
                let obj = new Environment();
                obj.deserialize(params.EnvironmentSet[z]);
                this.EnvironmentSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCmqSubscriptionAttribute请求参数结构体
 * @class
 */
class ModifyCmqSubscriptionAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线（-）。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 订阅名字，在单个地域同一帐号的同一主题下唯一。订阅名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
         * @type {string || null}
         */
        this.SubscriptionName = null;

        /**
         * 向 Endpoint 推送消息出现错误时，CMQ 推送服务器的重试策略。取值如下：
（1）BACKOFF_RETRY，退避重试。每隔一定时间重试一次，重试够一定次数后，就把该消息丢弃，继续推送下一条消息。
（2）EXPONENTIAL_DECAY_RETRY，指数衰退重试。每次重试的间隔是指数递增的，例如开始1s，后面是2s，4s，8s···由于 Topic 消息的周期是一天，所以最多重试一天就把消息丢弃。默认值是 EXPONENTIAL_DECAY_RETRY。
         * @type {string || null}
         */
        this.NotifyStrategy = null;

        /**
         * 推送内容的格式。取值：（1）JSON；（2）SIMPLIFIED，即 raw 格式。如果 Protocol 是 queue，则取值必须为 SIMPLIFIED。如果 Protocol 是 HTTP，两个值均可以，默认值是 JSON。
         * @type {string || null}
         */
        this.NotifyContentFormat = null;

        /**
         * 消息正文。消息标签（用于消息过滤)。标签数量不能超过5个，每个标签不超过16个字符。与(Batch)PublishMessage的MsgTag参数配合使用，规则：1）如果FilterTag没有设置，则无论MsgTag是否有设置，订阅接收所有发布到Topic的消息；2）如果FilterTag数组有值，则只有数组中至少有一个值在MsgTag数组中也存在时（即FilterTag和MsgTag有交集），订阅才接收该发布到Topic的消息；3）如果FilterTag数组有值，但MsgTag没设置，则不接收任何发布到Topic的消息，可以认为是2）的一种特例，此时FilterTag和MsgTag没有交集。规则整体的设计思想是以订阅者的意愿为主。
         * @type {Array.<string> || null}
         */
        this.FilterTags = null;

        /**
         * BindingKey数量不超过5个， 每个BindingKey长度不超过64字节，该字段表示订阅接收消息的过滤策略，每个BindingKey最多含有15个“.”， 即最多16个词组。
         * @type {Array.<string> || null}
         */
        this.BindingKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.SubscriptionName = 'SubscriptionName' in params ? params.SubscriptionName : null;
        this.NotifyStrategy = 'NotifyStrategy' in params ? params.NotifyStrategy : null;
        this.NotifyContentFormat = 'NotifyContentFormat' in params ? params.NotifyContentFormat : null;
        this.FilterTags = 'FilterTags' in params ? params.FilterTags : null;
        this.BindingKey = 'BindingKey' in params ? params.BindingKey : null;

    }
}

/**
 * ModifyTopic返回参数结构体
 * @class
 */
class ModifyTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分区数
         * @type {number || null}
         */
        this.Partitions = null;

        /**
         * 备注，128字符以内。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Partitions = 'Partitions' in params ? params.Partitions : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AMQP集群基本信息
 * @class
 */
class AMQPClusterInfo extends  AbstractModel {
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
         * 地域信息
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 创建时间，毫秒为单位
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 集群说明信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 公网接入地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PublicEndPoint = null;

        /**
         * VPC接入地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcEndPoint = null;

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
        this.Region = 'Region' in params ? params.Region : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.PublicEndPoint = 'PublicEndPoint' in params ? params.PublicEndPoint : null;
        this.VpcEndPoint = 'VpcEndPoint' in params ? params.VpcEndPoint : null;

    }
}

/**
 * DescribeAMQPRouteRelations返回参数结构体
 * @class
 */
class DescribeAMQPRouteRelationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总记录数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 路由关系列表
         * @type {Array.<AMQPRouteRelation> || null}
         */
        this.RouteRelations = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.RouteRelations) {
            this.RouteRelations = new Array();
            for (let z in params.RouteRelations) {
                let obj = new AMQPRouteRelation();
                obj.deserialize(params.RouteRelations[z]);
                this.RouteRelations.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTopics返回参数结构体
 * @class
 */
class DeleteTopicsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 被删除的主题数组。
         * @type {Array.<TopicRecord> || null}
         */
        this.TopicSets = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TopicSets) {
            this.TopicSets = new Array();
            for (let z in params.TopicSets) {
                let obj = new TopicRecord();
                obj.deserialize(params.TopicSets[z]);
                this.TopicSets.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAMQPCluster返回参数结构体
 * @class
 */
class CreateAMQPClusterResponse extends  AbstractModel {
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
 * DescribeRocketMQVipInstances请求参数结构体
 * @class
 */
class DescribeRocketMQVipInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询条件过滤器
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 查询数目上限，默认20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询起始位置
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
 * DeleteAMQPExchange请求参数结构体
 * @class
 */
class DeleteAMQPExchangeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Vhost名称
         * @type {string || null}
         */
        this.VHostId = null;

        /**
         * 交换机名称
         * @type {string || null}
         */
        this.Exchange = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.VHostId = 'VHostId' in params ? params.VHostId : null;
        this.Exchange = 'Exchange' in params ? params.Exchange : null;

    }
}

/**
 * DeleteRocketMQCluster返回参数结构体
 * @class
 */
class DeleteRocketMQClusterResponse extends  AbstractModel {
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
 * CreateCmqTopic返回参数结构体
 * @class
 */
class CreateCmqTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题id
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Cmq DeadLetterSource
 * @class
 */
class CmqDeadLetterSource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消息队列ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.QueueId = null;

        /**
         * 消息队列名字。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.QueueName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueId = 'QueueId' in params ? params.QueueId : null;
        this.QueueName = 'QueueName' in params ? params.QueueName : null;

    }
}

/**
 * ClearCmqSubscriptionFilterTags返回参数结构体
 * @class
 */
class ClearCmqSubscriptionFilterTagsResponse extends  AbstractModel {
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
 * DescribeCmqTopics请求参数结构体
 * @class
 */
class DescribeCmqTopicsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页时本页获取队列列表的起始位置。如果填写了该值，必须也要填写 limit 。该值缺省时，后台取默认值 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页时本页获取队列的个数，如果不传递该参数，则该参数默认为20，最大值为50。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 根据TopicName进行模糊搜索
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * CMQ 主题名称列表过滤
         * @type {Array.<string> || null}
         */
        this.TopicNameList = null;

        /**
         * 标签过滤查找时，需要设置为 true
         * @type {boolean || null}
         */
        this.IsTagFilter = null;

        /**
         * 过滤器。目前支持按标签过滤，标签的Name需要加前缀“tag:”，例如：tag:负责人、tag:环境、tag:业务
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
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.TopicNameList = 'TopicNameList' in params ? params.TopicNameList : null;
        this.IsTagFilter = 'IsTagFilter' in params ? params.IsTagFilter : null;

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
 * 过滤参数
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤参数的名字
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 数值
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
 * AMQP Exchange信息
 * @class
 */
class AMQPExchange extends  AbstractModel {
    constructor(){
        super();

        /**
         * Exchange名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Exchange的类别，为枚举类型:Direct, Fanout, Topic
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 主绑定数
         * @type {number || null}
         */
        this.SourceBindedNum = null;

        /**
         * 说明
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 被绑定数
         * @type {number || null}
         */
        this.DestBindedNum = null;

        /**
         * 创建时间，以毫秒为单位
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 创建时间，以毫秒为单位
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 是否为内部Exchange(以amq.前缀开头的)
         * @type {boolean || null}
         */
        this.Internal = null;

        /**
         * 备用Exchange名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AlternateExchange = null;

        /**
         * 备用Exchange是否删除标识: true(已删除)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.AlternateExchangeDeleteMark = null;

        /**
         * 延迟Exchange的类别，为枚举类型:Direct, Fanout, Topic
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DelayType = null;

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
        this.SourceBindedNum = 'SourceBindedNum' in params ? params.SourceBindedNum : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.DestBindedNum = 'DestBindedNum' in params ? params.DestBindedNum : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Internal = 'Internal' in params ? params.Internal : null;
        this.AlternateExchange = 'AlternateExchange' in params ? params.AlternateExchange : null;
        this.AlternateExchangeDeleteMark = 'AlternateExchangeDeleteMark' in params ? params.AlternateExchangeDeleteMark : null;
        this.DelayType = 'DelayType' in params ? params.DelayType : null;

    }
}

/**
 * DeleteTopics请求参数结构体
 * @class
 */
class DeleteTopicsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题集合，每次最多删除20个。
         * @type {Array.<TopicRecord> || null}
         */
        this.TopicSets = null;

        /**
         * pulsar集群Id。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 环境（命名空间）名称。
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 是否强制删除，默认为false
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

        if (params.TopicSets) {
            this.TopicSets = new Array();
            for (let z in params.TopicSets) {
                let obj = new TopicRecord();
                obj.deserialize(params.TopicSets[z]);
                this.TopicSets.push(obj);
            }
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.Force = 'Force' in params ? params.Force : null;

    }
}

/**
 * cmq TransactionPolicy
 * @class
 */
class CmqTransactionPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 第一次回查时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FirstQueryInterval = null;

        /**
         * 最大查询次数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxQueryCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FirstQueryInterval = 'FirstQueryInterval' in params ? params.FirstQueryInterval : null;
        this.MaxQueryCount = 'MaxQueryCount' in params ? params.MaxQueryCount : null;

    }
}

/**
 * 运营端命名空间bundle实体
 * @class
 */
class BundleSetOpt extends  AbstractModel {
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
 * ModifyTopic请求参数结构体
 * @class
 */
class ModifyTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境（命名空间）名称。
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 主题名。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 分区数，必须大于或者等于原分区数，若想维持原分区数请输入原数目，修改分区数仅对非全局顺序消息起效果，不允许超过128个分区。
         * @type {number || null}
         */
        this.Partitions = null;

        /**
         * 备注，128字符以内。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Pulsar 集群的ID
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
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Partitions = 'Partitions' in params ? params.Partitions : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * ResetMsgSubOffsetByTimestamp请求参数结构体
 * @class
 */
class ResetMsgSubOffsetByTimestampRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间名称。
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 主题名称。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 订阅者名称。
         * @type {string || null}
         */
        this.Subscription = null;

        /**
         * 时间戳，精确到毫秒。
         * @type {number || null}
         */
        this.ToTimestamp = null;

        /**
         * Pulsar 集群的ID
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
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Subscription = 'Subscription' in params ? params.Subscription : null;
        this.ToTimestamp = 'ToTimestamp' in params ? params.ToTimestamp : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * CreateEnvironmentRole返回参数结构体
 * @class
 */
class CreateEnvironmentRoleResponse extends  AbstractModel {
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
 *  消费者
 * @class
 */
class Consumer extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消费者开始连接的时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConnectedSince = null;

        /**
         * 消费者地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConsumerAddr = null;

        /**
         * 消费者名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConsumerName = null;

        /**
         * 消费者版本。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClientVersion = null;

        /**
         * 消费者连接的主题分区号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Partition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConnectedSince = 'ConnectedSince' in params ? params.ConnectedSince : null;
        this.ConsumerAddr = 'ConsumerAddr' in params ? params.ConsumerAddr : null;
        this.ConsumerName = 'ConsumerName' in params ? params.ConsumerName : null;
        this.ClientVersion = 'ClientVersion' in params ? params.ClientVersion : null;
        this.Partition = 'Partition' in params ? params.Partition : null;

    }
}

/**
 * CreateCmqSubscribe请求参数结构体
 * @class
 */
class CreateCmqSubscribeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线（-）。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 订阅名字，在单个地域同一帐号的同一主题下唯一。订阅名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
         * @type {string || null}
         */
        this.SubscriptionName = null;

        /**
         * 订阅的协议，目前支持两种协议：http、queue。使用http协议，用户需自己搭建接受消息的web server。使用queue，消息会自动推送到CMQ queue，用户可以并发地拉取消息。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 接收通知的Endpoint，根据协议Protocol区分：对于http，Endpoint必须以“`http://`”开头，host可以是域名或IP；对于Queue，则填QueueName。 请注意，目前推送服务不能推送到私有网络中，因此Endpoint填写为私有网络域名或地址将接收不到推送的消息，目前支持推送到公网和基础网络。
         * @type {string || null}
         */
        this.Endpoint = null;

        /**
         * 向Endpoint推送消息出现错误时，CMQ推送服务器的重试策略。取值有：1）BACKOFF_RETRY，退避重试。每隔一定时间重试一次，重试够一定次数后，就把该消息丢弃，继续推送下一条消息；2）EXPONENTIAL_DECAY_RETRY，指数衰退重试。每次重试的间隔是指数递增的，例如开始1s，后面是2s，4s，8s...由于Topic消息的周期是一天，所以最多重试一天就把消息丢弃。默认值是EXPONENTIAL_DECAY_RETRY。
         * @type {string || null}
         */
        this.NotifyStrategy = null;

        /**
         * 消息正文。消息标签（用于消息过滤)。标签数量不能超过5个，每个标签不超过16个字符。与(Batch)PublishMessage的MsgTag参数配合使用，规则：1）如果FilterTag没有设置，则无论MsgTag是否有设置，订阅接收所有发布到Topic的消息；2）如果FilterTag数组有值，则只有数组中至少有一个值在MsgTag数组中也存在时（即FilterTag和MsgTag有交集），订阅才接收该发布到Topic的消息；3）如果FilterTag数组有值，但MsgTag没设置，则不接收任何发布到Topic的消息，可以认为是2）的一种特例，此时FilterTag和MsgTag没有交集。规则整体的设计思想是以订阅者的意愿为主。
         * @type {Array.<string> || null}
         */
        this.FilterTag = null;

        /**
         * BindingKey数量不超过5个， 每个BindingKey长度不超过64字节，该字段表示订阅接收消息的过滤策略，每个BindingKey最多含有15个“.”， 即最多16个词组。
         * @type {Array.<string> || null}
         */
        this.BindingKey = null;

        /**
         * 推送内容的格式。取值：1）JSON；2）SIMPLIFIED，即raw格式。如果Protocol是queue，则取值必须为SIMPLIFIED。如果Protocol是http，两个值均可以，默认值是JSON。
         * @type {string || null}
         */
        this.NotifyContentFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.SubscriptionName = 'SubscriptionName' in params ? params.SubscriptionName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Endpoint = 'Endpoint' in params ? params.Endpoint : null;
        this.NotifyStrategy = 'NotifyStrategy' in params ? params.NotifyStrategy : null;
        this.FilterTag = 'FilterTag' in params ? params.FilterTag : null;
        this.BindingKey = 'BindingKey' in params ? params.BindingKey : null;
        this.NotifyContentFormat = 'NotifyContentFormat' in params ? params.NotifyContentFormat : null;

    }
}

/**
 * DeleteCmqSubscribe请求参数结构体
 * @class
 */
class DeleteCmqSubscribeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 订阅名字，在单个地域同一帐号的同一主题下唯一。订阅名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
         * @type {string || null}
         */
        this.SubscriptionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.SubscriptionName = 'SubscriptionName' in params ? params.SubscriptionName : null;

    }
}

/**
 * DescribeAMQPClusters返回参数结构体
 * @class
 */
class DescribeAMQPClustersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AMQPClusterDetail> || null}
         */
        this.ClusterList = null;

        /**
         * 总条数
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

        if (params.ClusterList) {
            this.ClusterList = new Array();
            for (let z in params.ClusterList) {
                let obj = new AMQPClusterDetail();
                obj.deserialize(params.ClusterList[z]);
                this.ClusterList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RocketMQ集群配置
 * @class
 */
class RocketMQClusterConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单命名空间TPS上线
         * @type {number || null}
         */
        this.MaxTpsPerNamespace = null;

        /**
         * 最大命名空间数量
         * @type {number || null}
         */
        this.MaxNamespaceNum = null;

        /**
         * 已使用命名空间数量
         * @type {number || null}
         */
        this.UsedNamespaceNum = null;

        /**
         * 最大Topic数量
         * @type {number || null}
         */
        this.MaxTopicNum = null;

        /**
         * 已使用Topic数量
         * @type {number || null}
         */
        this.UsedTopicNum = null;

        /**
         * 最大Group数量
         * @type {number || null}
         */
        this.MaxGroupNum = null;

        /**
         * 已使用Group数量
         * @type {number || null}
         */
        this.UsedGroupNum = null;

        /**
         * 消息最大保留时间，以毫秒为单位
         * @type {number || null}
         */
        this.MaxRetentionTime = null;

        /**
         * 消息最长延时，以毫秒为单位
         * @type {number || null}
         */
        this.MaxLatencyTime = null;

        /**
         * 单个主题最大队列数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxQueuesPerTopic = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxTpsPerNamespace = 'MaxTpsPerNamespace' in params ? params.MaxTpsPerNamespace : null;
        this.MaxNamespaceNum = 'MaxNamespaceNum' in params ? params.MaxNamespaceNum : null;
        this.UsedNamespaceNum = 'UsedNamespaceNum' in params ? params.UsedNamespaceNum : null;
        this.MaxTopicNum = 'MaxTopicNum' in params ? params.MaxTopicNum : null;
        this.UsedTopicNum = 'UsedTopicNum' in params ? params.UsedTopicNum : null;
        this.MaxGroupNum = 'MaxGroupNum' in params ? params.MaxGroupNum : null;
        this.UsedGroupNum = 'UsedGroupNum' in params ? params.UsedGroupNum : null;
        this.MaxRetentionTime = 'MaxRetentionTime' in params ? params.MaxRetentionTime : null;
        this.MaxLatencyTime = 'MaxLatencyTime' in params ? params.MaxLatencyTime : null;
        this.MaxQueuesPerTopic = 'MaxQueuesPerTopic' in params ? params.MaxQueuesPerTopic : null;

    }
}

/**
 * DescribeCmqDeadLetterSourceQueues返回参数结构体
 * @class
 */
class DescribeCmqDeadLetterSourceQueuesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 满足本次条件的队列个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 死信队列源队列
         * @type {Array.<CmqDeadLetterSource> || null}
         */
        this.QueueSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.QueueSet) {
            this.QueueSet = new Array();
            for (let z in params.QueueSet) {
                let obj = new CmqDeadLetterSource();
                obj.deserialize(params.QueueSet[z]);
                this.QueueSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSubscriptions返回参数结构体
 * @class
 */
class DeleteSubscriptionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功删除的订阅关系数组。
         * @type {Array.<SubscriptionTopic> || null}
         */
        this.SubscriptionTopicSets = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SubscriptionTopicSets) {
            this.SubscriptionTopicSets = new Array();
            for (let z in params.SubscriptionTopicSets) {
                let obj = new SubscriptionTopic();
                obj.deserialize(params.SubscriptionTopicSets[z]);
                this.SubscriptionTopicSets.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRocketMQTopic请求参数结构体
 * @class
 */
class DeleteRocketMQTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 命名空间名称
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 主题名称
         * @type {string || null}
         */
        this.Topic = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.Topic = 'Topic' in params ? params.Topic : null;

    }
}

/**
 * 消费进度详情
 * @class
 */
class ConsumersSchedule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前分区id。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Partitions = null;

        /**
         * 消息数量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NumberOfEntries = null;

        /**
         * 消息积压数量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MsgBacklog = null;

        /**
         * 消费者每秒分发消息的数量之和。
         * @type {string || null}
         */
        this.MsgRateOut = null;

        /**
         * 消费者每秒消息的byte。
         * @type {string || null}
         */
        this.MsgThroughputOut = null;

        /**
         * 超时丢弃比例。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MsgRateExpired = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Partitions = 'Partitions' in params ? params.Partitions : null;
        this.NumberOfEntries = 'NumberOfEntries' in params ? params.NumberOfEntries : null;
        this.MsgBacklog = 'MsgBacklog' in params ? params.MsgBacklog : null;
        this.MsgRateOut = 'MsgRateOut' in params ? params.MsgRateOut : null;
        this.MsgThroughputOut = 'MsgThroughputOut' in params ? params.MsgThroughputOut : null;
        this.MsgRateExpired = 'MsgRateExpired' in params ? params.MsgRateExpired : null;

    }
}

/**
 * 集群信息集合
 * @class
 */
class Cluster extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群Id。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群名称。
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 说明信息。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 接入点数量
         * @type {number || null}
         */
        this.EndPointNum = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 集群是否健康，1表示健康，0表示异常
         * @type {number || null}
         */
        this.Healthy = null;

        /**
         * 集群健康信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HealthyInfo = null;

        /**
         * 集群状态，0:创建中，1:正常，2:销毁中，3:已删除，4: 隔离中，5:创建失败，6: 删除失败
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 最大命名空间数量
         * @type {number || null}
         */
        this.MaxNamespaceNum = null;

        /**
         * 最大Topic数量
         * @type {number || null}
         */
        this.MaxTopicNum = null;

        /**
         * 最大QPS
         * @type {number || null}
         */
        this.MaxQps = null;

        /**
         * 最大消息保留时间，秒为单位
         * @type {number || null}
         */
        this.MessageRetentionTime = null;

        /**
         * 最大存储容量
         * @type {number || null}
         */
        this.MaxStorageCapacity = null;

        /**
         * 集群版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 公网访问接入点
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PublicEndPoint = null;

        /**
         * VPC访问接入点
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcEndPoint = null;

        /**
         * 命名空间数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NamespaceNum = null;

        /**
         * 已使用存储限制，MB为单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UsedStorageBudget = null;

        /**
         * 最大生产消息速率，以条数为单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxPublishRateInMessages = null;

        /**
         * 最大推送消息速率，以条数为单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxDispatchRateInMessages = null;

        /**
         * 最大生产消息速率，以字节为单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxPublishRateInBytes = null;

        /**
         * 最大推送消息速率，以字节为单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxDispatchRateInBytes = null;

        /**
         * 已创建主题数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TopicNum = null;

        /**
         * 最长消息延时，以秒为单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxMessageDelayInSeconds = null;

        /**
         * 是否开启公网访问，不填时默认开启
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.PublicAccessEnabled = null;

        /**
         * 标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 计费模式：
0: 按量计费
1: 包年包月
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.EndPointNum = 'EndPointNum' in params ? params.EndPointNum : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Healthy = 'Healthy' in params ? params.Healthy : null;
        this.HealthyInfo = 'HealthyInfo' in params ? params.HealthyInfo : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.MaxNamespaceNum = 'MaxNamespaceNum' in params ? params.MaxNamespaceNum : null;
        this.MaxTopicNum = 'MaxTopicNum' in params ? params.MaxTopicNum : null;
        this.MaxQps = 'MaxQps' in params ? params.MaxQps : null;
        this.MessageRetentionTime = 'MessageRetentionTime' in params ? params.MessageRetentionTime : null;
        this.MaxStorageCapacity = 'MaxStorageCapacity' in params ? params.MaxStorageCapacity : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.PublicEndPoint = 'PublicEndPoint' in params ? params.PublicEndPoint : null;
        this.VpcEndPoint = 'VpcEndPoint' in params ? params.VpcEndPoint : null;
        this.NamespaceNum = 'NamespaceNum' in params ? params.NamespaceNum : null;
        this.UsedStorageBudget = 'UsedStorageBudget' in params ? params.UsedStorageBudget : null;
        this.MaxPublishRateInMessages = 'MaxPublishRateInMessages' in params ? params.MaxPublishRateInMessages : null;
        this.MaxDispatchRateInMessages = 'MaxDispatchRateInMessages' in params ? params.MaxDispatchRateInMessages : null;
        this.MaxPublishRateInBytes = 'MaxPublishRateInBytes' in params ? params.MaxPublishRateInBytes : null;
        this.MaxDispatchRateInBytes = 'MaxDispatchRateInBytes' in params ? params.MaxDispatchRateInBytes : null;
        this.TopicNum = 'TopicNum' in params ? params.TopicNum : null;
        this.MaxMessageDelayInSeconds = 'MaxMessageDelayInSeconds' in params ? params.MaxMessageDelayInSeconds : null;
        this.PublicAccessEnabled = 'PublicAccessEnabled' in params ? params.PublicAccessEnabled : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.PayMode = 'PayMode' in params ? params.PayMode : null;

    }
}

/**
 * 订阅关系
 * @class
 */
class SubscriptionTopic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境（命名空间）名称。
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 主题名称。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 订阅名称。
         * @type {string || null}
         */
        this.SubscriptionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.SubscriptionName = 'SubscriptionName' in params ? params.SubscriptionName : null;

    }
}

/**
 * 消息保留策略
 * @class
 */
class RetentionPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消息保留时长
         * @type {number || null}
         */
        this.TimeInMinutes = null;

        /**
         * 消息保留大小
         * @type {number || null}
         */
        this.SizeInMB = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeInMinutes = 'TimeInMinutes' in params ? params.TimeInMinutes : null;
        this.SizeInMB = 'SizeInMB' in params ? params.SizeInMB : null;

    }
}

/**
 * CreateRocketMQCluster返回参数结构体
 * @class
 */
class CreateRocketMQClusterResponse extends  AbstractModel {
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
 * DescribeAMQPCreateQuota请求参数结构体
 * @class
 */
class DescribeAMQPCreateQuotaRequest extends  AbstractModel {
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
 * AMQP 队列信息
 * @class
 */
class AMQPQueueDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Queue名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 说明
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 被绑定数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DestBindedNum = null;

        /**
         * 创建时间，以毫秒为单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 创建时间，以毫秒为单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 在线消费者数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OnlineConsumerNum = null;

        /**
         * 每秒钟的事务数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Tps = null;

        /**
         * 消息堆积数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AccumulativeMsgNum = null;

        /**
         * 是否自动删除
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.AutoDelete = null;

        /**
         * 死信交换机
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeadLetterExchange = null;

        /**
         * 死信交换机路由键
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeadLetterRoutingKey = null;

        /**
         * Queue对应的Topic名称
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.DestBindedNum = 'DestBindedNum' in params ? params.DestBindedNum : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.OnlineConsumerNum = 'OnlineConsumerNum' in params ? params.OnlineConsumerNum : null;
        this.Tps = 'Tps' in params ? params.Tps : null;
        this.AccumulativeMsgNum = 'AccumulativeMsgNum' in params ? params.AccumulativeMsgNum : null;
        this.AutoDelete = 'AutoDelete' in params ? params.AutoDelete : null;
        this.DeadLetterExchange = 'DeadLetterExchange' in params ? params.DeadLetterExchange : null;
        this.DeadLetterRoutingKey = 'DeadLetterRoutingKey' in params ? params.DeadLetterRoutingKey : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * DescribePublishers返回参数结构体
 * @class
 */
class DescribePublishersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 生产者信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Publisher> || null}
         */
        this.Publishers = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Publishers) {
            this.Publishers = new Array();
            for (let z in params.Publishers) {
                let obj = new Publisher();
                obj.deserialize(params.Publishers[z]);
                this.Publishers.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAMQPRouteRelation返回参数结构体
 * @class
 */
class DeleteAMQPRouteRelationResponse extends  AbstractModel {
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
 * SendMsg请求参数结构体
 * @class
 */
class SendMsgRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境（命名空间）名称。
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 主题名称，如果是分区topic需要指定具体分区，如果没有指定则默认发到0分区，例如：my_topic-partition-0。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 消息内容，不能为空且大小不得大于5242880个byte。
         * @type {string || null}
         */
        this.MsgContent = null;

        /**
         * Pulsar 集群的ID
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
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.MsgContent = 'MsgContent' in params ? params.MsgContent : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * ResetRocketMQConsumerOffSet请求参数结构体
 * @class
 */
class ResetRocketMQConsumerOffSetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 命名空间名称
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 消费组名称
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 主题名称
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * 重置方式，0表示从最新位点开始，1表示从指定时间点开始
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 重置指定的时间戳，仅在 Type 为1是生效，以毫秒为单位
         * @type {number || null}
         */
        this.ResetTimestamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ResetTimestamp = 'ResetTimestamp' in params ? params.ResetTimestamp : null;

    }
}

/**
 * DescribeCmqQueueDetail请求参数结构体
 * @class
 */
class DescribeCmqQueueDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 精确匹配QueueName
         * @type {string || null}
         */
        this.QueueName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueName = 'QueueName' in params ? params.QueueName : null;

    }
}

/**
 * DescribeAMQPQueues返回参数结构体
 * @class
 */
class DescribeAMQPQueuesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总记录数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 队列信息列表
         * @type {Array.<AMQPQueueDetail> || null}
         */
        this.Queues = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Queues) {
            this.Queues = new Array();
            for (let z in params.Queues) {
                let obj = new AMQPQueueDetail();
                obj.deserialize(params.Queues[z]);
                this.Queues.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateRocketMQTopic请求参数结构体
 * @class
 */
class CreateRocketMQTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题名称，3-64个字符，只能包含字母、数字、“-”及“_”
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * 主题所在的命名空间，目前支持在单个命名空间下创建主题
         * @type {Array.<string> || null}
         */
        this.Namespaces = null;

        /**
         * 主题类型，可选值为Normal, PartitionedOrder, Transaction, DelayScheduled。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 主题说明，最大128个字符
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 分区数，全局顺序无效
         * @type {number || null}
         */
        this.PartitionNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.Namespaces = 'Namespaces' in params ? params.Namespaces : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.PartitionNum = 'PartitionNum' in params ? params.PartitionNum : null;

    }
}

/**
 * CreateRole返回参数结构体
 * @class
 */
class CreateRoleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 角色名称
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * 角色token
         * @type {string || null}
         */
        this.Token = null;

        /**
         * 备注说明
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.Token = 'Token' in params ? params.Token : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRocketMQCluster请求参数结构体
 * @class
 */
class DeleteRocketMQClusterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待删除的集群Id。
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
 * 面向运营端的虚拟集群信息
 * @class
 */
class InternalTenant extends  AbstractModel {
    constructor(){
        super();

        /**
         * 虚拟集群ID
         * @type {string || null}
         */
        this.TenantId = null;

        /**
         * 虚拟集群名称
         * @type {string || null}
         */
        this.TenantName = null;

        /**
         * 客户UIN
         * @type {string || null}
         */
        this.CustomerUin = null;

        /**
         * 客户的APPID
         * @type {string || null}
         */
        this.CustomerAppId = null;

        /**
         * 物理集群名称
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 集群协议类型，支持的值为TDMQ，ROCKETMQ，AMQP，CMQ
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 命名空间配额
         * @type {number || null}
         */
        this.MaxNamespaces = null;

        /**
         * 已使用命名空间配额
         * @type {number || null}
         */
        this.UsedNamespaces = null;

        /**
         * Topic配额
         * @type {number || null}
         */
        this.MaxTopics = null;

        /**
         * 已使用Topic配额
         * @type {number || null}
         */
        this.UsedTopics = null;

        /**
         * Topic分区数配额
         * @type {number || null}
         */
        this.MaxPartitions = null;

        /**
         * 已使用Topic分区数配额
         * @type {number || null}
         */
        this.UsedPartitions = null;

        /**
         * 存储配额, byte为单位
         * @type {number || null}
         */
        this.MaxMsgBacklogSize = null;

        /**
         * 命名空间最大生产TPS
         * @type {number || null}
         */
        this.MaxPublishTps = null;

        /**
         * 消息最大保留时间，秒为单位
         * @type {number || null}
         */
        this.MaxRetention = null;

        /**
         * 创建时间，毫秒为单位
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 修改时间，毫秒为单位
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 命名空间最大消费TPS
         * @type {number || null}
         */
        this.MaxDispatchTps = null;

        /**
         * 命名空间最大消费带宽，byte为单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxDispatchRateInBytes = null;

        /**
         * 命名空间最大生产带宽，byte为单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxPublishRateInBytes = null;

        /**
         * 消息最大保留空间，MB为单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxRetentionSizeInMB = null;

        /**
         * public Access Enabled
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.PublicAccessEnabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TenantId = 'TenantId' in params ? params.TenantId : null;
        this.TenantName = 'TenantName' in params ? params.TenantName : null;
        this.CustomerUin = 'CustomerUin' in params ? params.CustomerUin : null;
        this.CustomerAppId = 'CustomerAppId' in params ? params.CustomerAppId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.MaxNamespaces = 'MaxNamespaces' in params ? params.MaxNamespaces : null;
        this.UsedNamespaces = 'UsedNamespaces' in params ? params.UsedNamespaces : null;
        this.MaxTopics = 'MaxTopics' in params ? params.MaxTopics : null;
        this.UsedTopics = 'UsedTopics' in params ? params.UsedTopics : null;
        this.MaxPartitions = 'MaxPartitions' in params ? params.MaxPartitions : null;
        this.UsedPartitions = 'UsedPartitions' in params ? params.UsedPartitions : null;
        this.MaxMsgBacklogSize = 'MaxMsgBacklogSize' in params ? params.MaxMsgBacklogSize : null;
        this.MaxPublishTps = 'MaxPublishTps' in params ? params.MaxPublishTps : null;
        this.MaxRetention = 'MaxRetention' in params ? params.MaxRetention : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.MaxDispatchTps = 'MaxDispatchTps' in params ? params.MaxDispatchTps : null;
        this.MaxDispatchRateInBytes = 'MaxDispatchRateInBytes' in params ? params.MaxDispatchRateInBytes : null;
        this.MaxPublishRateInBytes = 'MaxPublishRateInBytes' in params ? params.MaxPublishRateInBytes : null;
        this.MaxRetentionSizeInMB = 'MaxRetentionSizeInMB' in params ? params.MaxRetentionSizeInMB : null;
        this.PublicAccessEnabled = 'PublicAccessEnabled' in params ? params.PublicAccessEnabled : null;

    }
}

/**
 * DescribeEnvironmentAttributes请求参数结构体
 * @class
 */
class DescribeEnvironmentAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境（命名空间）名称。
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * Pulsar 集群的ID
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
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DeleteEnvironmentRoles请求参数结构体
 * @class
 */
class DeleteEnvironmentRolesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境（命名空间）名称。
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 角色名称数组。
         * @type {Array.<string> || null}
         */
        this.RoleNames = null;

        /**
         * 必填字段，集群的ID
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
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.RoleNames = 'RoleNames' in params ? params.RoleNames : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * ClearCmqQueue返回参数结构体
 * @class
 */
class ClearCmqQueueResponse extends  AbstractModel {
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
 * CreateAMQPExchange返回参数结构体
 * @class
 */
class CreateAMQPExchangeResponse extends  AbstractModel {
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
 * DescribeNodeHealthOpt请求参数结构体
 * @class
 */
class DescribeNodeHealthOptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点实例ID
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
 * DescribeBindClusters请求参数结构体
 * @class
 */
class DescribeBindClustersRequest extends  AbstractModel {
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
 * CreateRocketMQTopic返回参数结构体
 * @class
 */
class CreateRocketMQTopicResponse extends  AbstractModel {
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
 * ModifyEnvironmentAttributes返回参数结构体
 * @class
 */
class ModifyEnvironmentAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命名空间名称。
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 未消费消息过期时间，单位：秒。
         * @type {number || null}
         */
        this.MsgTTL = null;

        /**
         * 备注，字符串最长不超过128。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 命名空间ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.MsgTTL = 'MsgTTL' in params ? params.MsgTTL : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 环境角色集合
 * @class
 */
class EnvironmentRole extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境（命名空间）。
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 角色名称。
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * 授权项，最多只能包含produce、consume两项的非空字符串数组。
         * @type {Array.<string> || null}
         */
        this.Permissions = null;

        /**
         * 角色描述。
         * @type {string || null}
         */
        this.RoleDescribe = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间。
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
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.Permissions = 'Permissions' in params ? params.Permissions : null;
        this.RoleDescribe = 'RoleDescribe' in params ? params.RoleDescribe : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * ModifyAMQPQueue返回参数结构体
 * @class
 */
class ModifyAMQPQueueResponse extends  AbstractModel {
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
 * CreateCmqQueue请求参数结构体
 * @class
 */
class CreateCmqQueueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 队列名字，在单个地域同一帐号下唯一。队列名称是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * 最大堆积消息数。取值范围在公测期间为 1,000,000 - 10,000,000，正式上线后范围可达到 1000,000-1000,000,000。默认取值在公测期间为 10,000,000，正式上线后为 100,000,000。
         * @type {number || null}
         */
        this.MaxMsgHeapNum = null;

        /**
         * 消息接收长轮询等待时间。取值范围 0-30 秒，默认值 0。
         * @type {number || null}
         */
        this.PollingWaitSeconds = null;

        /**
         * 消息可见性超时。取值范围 1-43200 秒（即12小时内），默认值 30。
         * @type {number || null}
         */
        this.VisibilityTimeout = null;

        /**
         * 消息最大长度。取值范围 1024-65536 Byte（即1-64K），默认值 65536。
         * @type {number || null}
         */
        this.MaxMsgSize = null;

        /**
         * 消息最长未确认时间。取值范围 30-43200 秒（30秒~12小时），默认值 3600 (1 小时)。
         * @type {number || null}
         */
        this.MsgRetentionSeconds = null;

        /**
         * 队列是否开启回溯消息能力，该参数取值范围0-1296000，0表示不开启。
         * @type {number || null}
         */
        this.RewindSeconds = null;

        /**
         * 1 表示事务队列，0 表示普通队列
         * @type {number || null}
         */
        this.Transaction = null;

        /**
         * 第一次回查间隔
         * @type {number || null}
         */
        this.FirstQueryInterval = null;

        /**
         * 最大回查次数
         * @type {number || null}
         */
        this.MaxQueryCount = null;

        /**
         * 死信队列名称
         * @type {string || null}
         */
        this.DeadLetterQueueName = null;

        /**
         * 死信策略。0为消息被多次消费未删除，1为Time-To-Live过期
         * @type {number || null}
         */
        this.Policy = null;

        /**
         * 最大接收次数 1-1000
         * @type {number || null}
         */
        this.MaxReceiveCount = null;

        /**
         * policy为1时必选。最大未消费过期时间。范围300-43200，单位秒，需要小于消息最大保留时间msgRetentionSeconds
         * @type {number || null}
         */
        this.MaxTimeToLive = null;

        /**
         * 是否开启消息轨迹追踪，当不设置字段时，默认为不开启，该字段为true表示开启，为false表示不开启
         * @type {boolean || null}
         */
        this.Trace = null;

        /**
         * 标签数组
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 队列可回溯存储空间：若开启消息回溯，取值范围：10240MB - 512000MB，若不开启消息回溯，取值：0
         * @type {number || null}
         */
        this.RetentionSizeInMB = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.MaxMsgHeapNum = 'MaxMsgHeapNum' in params ? params.MaxMsgHeapNum : null;
        this.PollingWaitSeconds = 'PollingWaitSeconds' in params ? params.PollingWaitSeconds : null;
        this.VisibilityTimeout = 'VisibilityTimeout' in params ? params.VisibilityTimeout : null;
        this.MaxMsgSize = 'MaxMsgSize' in params ? params.MaxMsgSize : null;
        this.MsgRetentionSeconds = 'MsgRetentionSeconds' in params ? params.MsgRetentionSeconds : null;
        this.RewindSeconds = 'RewindSeconds' in params ? params.RewindSeconds : null;
        this.Transaction = 'Transaction' in params ? params.Transaction : null;
        this.FirstQueryInterval = 'FirstQueryInterval' in params ? params.FirstQueryInterval : null;
        this.MaxQueryCount = 'MaxQueryCount' in params ? params.MaxQueryCount : null;
        this.DeadLetterQueueName = 'DeadLetterQueueName' in params ? params.DeadLetterQueueName : null;
        this.Policy = 'Policy' in params ? params.Policy : null;
        this.MaxReceiveCount = 'MaxReceiveCount' in params ? params.MaxReceiveCount : null;
        this.MaxTimeToLive = 'MaxTimeToLive' in params ? params.MaxTimeToLive : null;
        this.Trace = 'Trace' in params ? params.Trace : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.RetentionSizeInMB = 'RetentionSizeInMB' in params ? params.RetentionSizeInMB : null;

    }
}

/**
 * ModifyEnvironmentRole返回参数结构体
 * @class
 */
class ModifyEnvironmentRoleResponse extends  AbstractModel {
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
 * DeleteCmqQueue请求参数结构体
 * @class
 */
class DeleteCmqQueueRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 队列名字，在单个地域同一帐号下唯一。队列名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
         * @type {string || null}
         */
        this.QueueName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueName = 'QueueName' in params ? params.QueueName : null;

    }
}

/**
 * DescribeRocketMQGroups请求参数结构体
 * @class
 */
class DescribeRocketMQGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 命名空间
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 主题名称，输入此参数可查询该主题下所有的订阅组
         * @type {string || null}
         */
        this.FilterTopic = null;

        /**
         * 按消费组名称查询消费组，支持模糊查询
         * @type {string || null}
         */
        this.FilterGroup = null;

        /**
         * 按照指定字段排序，可选值为tps，accumulative
         * @type {string || null}
         */
        this.SortedBy = null;

        /**
         * 按升序或降序排列，可选值为asc，desc
         * @type {string || null}
         */
        this.SortOrder = null;

        /**
         * 订阅组名称，指定此参数后将只返回该订阅组信息
         * @type {string || null}
         */
        this.FilterOneGroup = null;

        /**
         * group类型
         * @type {Array.<string> || null}
         */
        this.Types = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.FilterTopic = 'FilterTopic' in params ? params.FilterTopic : null;
        this.FilterGroup = 'FilterGroup' in params ? params.FilterGroup : null;
        this.SortedBy = 'SortedBy' in params ? params.SortedBy : null;
        this.SortOrder = 'SortOrder' in params ? params.SortOrder : null;
        this.FilterOneGroup = 'FilterOneGroup' in params ? params.FilterOneGroup : null;
        this.Types = 'Types' in params ? params.Types : null;

    }
}

/**
 * DescribeRocketMQClusters返回参数结构体
 * @class
 */
class DescribeRocketMQClustersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RocketMQClusterDetail> || null}
         */
        this.ClusterList = null;

        /**
         * 总条数
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

        if (params.ClusterList) {
            this.ClusterList = new Array();
            for (let z in params.ClusterList) {
                let obj = new RocketMQClusterDetail();
                obj.deserialize(params.ClusterList[z]);
                this.ClusterList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RocketMQtopic分布情况
 * @class
 */
class RocketMQTopicDistribution extends  AbstractModel {
    constructor(){
        super();

        /**
         * topic类型
         * @type {string || null}
         */
        this.TopicType = null;

        /**
         * topic数量
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
        this.TopicType = 'TopicType' in params ? params.TopicType : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * 排序器
 * @class
 */
class Sort extends  AbstractModel {
    constructor(){
        super();

        /**
         * 排序字段
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 升序ASC，降序DESC
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * CreateRole请求参数结构体
 * @class
 */
class CreateRoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 角色名称，不支持中字以及除了短线和下划线外的特殊字符且长度必须大于0且小等于32。
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * 备注说明，长度必须大等于0且小等于128。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 必填字段，集群Id
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
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * ModifyEnvironmentRole请求参数结构体
 * @class
 */
class ModifyEnvironmentRoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境（命名空间）名称。
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 角色名称。
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * 授权项，最多只能包含produce、consume两项的非空字符串数组。
         * @type {Array.<string> || null}
         */
        this.Permissions = null;

        /**
         * 必填字段，集群的ID
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
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.Permissions = 'Permissions' in params ? params.Permissions : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

    }
}

/**
 * DescribeEnvironmentAttributes返回参数结构体
 * @class
 */
class DescribeEnvironmentAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 未消费消息过期时间，单位：秒，最大1296000（15天）。
         * @type {number || null}
         */
        this.MsgTTL = null;

        /**
         * 消费速率限制，单位：byte/秒，0：不限速。
         * @type {number || null}
         */
        this.RateInByte = null;

        /**
         * 消费速率限制，单位：个数/秒，0：不限速。
         * @type {number || null}
         */
        this.RateInSize = null;

        /**
         * 已消费消息保存策略，单位：小时，0：消费完马上删除。
         * @type {number || null}
         */
        this.RetentionHours = null;

        /**
         * 已消费消息保存策略，单位：G，0：消费完马上删除。
         * @type {number || null}
         */
        this.RetentionSize = null;

        /**
         * 环境（命名空间）名称。
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 副本数。
         * @type {number || null}
         */
        this.Replicas = null;

        /**
         * 备注。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MsgTTL = 'MsgTTL' in params ? params.MsgTTL : null;
        this.RateInByte = 'RateInByte' in params ? params.RateInByte : null;
        this.RateInSize = 'RateInSize' in params ? params.RateInSize : null;
        this.RetentionHours = 'RetentionHours' in params ? params.RetentionHours : null;
        this.RetentionSize = 'RetentionSize' in params ? params.RetentionSize : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.Replicas = 'Replicas' in params ? params.Replicas : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 角色实例
 * @class
 */
class Role extends  AbstractModel {
    constructor(){
        super();

        /**
         * 角色名称。
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * 角色token值。
         * @type {string || null}
         */
        this.Token = null;

        /**
         * 备注说明。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间。
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
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.Token = 'Token' in params ? params.Token : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * ModifyAMQPCluster返回参数结构体
 * @class
 */
class ModifyAMQPClusterResponse extends  AbstractModel {
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
 * DescribeTopics返回参数结构体
 * @class
 */
class DescribeTopicsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题集合数组。
         * @type {Array.<Topic> || null}
         */
        this.TopicSets = null;

        /**
         * 主题数量。
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

        if (params.TopicSets) {
            this.TopicSets = new Array();
            for (let z in params.TopicSets) {
                let obj = new Topic();
                obj.deserialize(params.TopicSets[z]);
                this.TopicSets.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AMQP集群配置
 * @class
 */
class AMQPClusterConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单Vhost TPS上限
         * @type {number || null}
         */
        this.MaxTpsPerVHost = null;

        /**
         * 单Vhost客户端连接数上限
         * @type {number || null}
         */
        this.MaxConnNumPerVHost = null;

        /**
         * 最大Vhost数量
         * @type {number || null}
         */
        this.MaxVHostNum = null;

        /**
         * 最大exchange数量
         * @type {number || null}
         */
        this.MaxExchangeNum = null;

        /**
         * 最大Queue数量
         * @type {number || null}
         */
        this.MaxQueueNum = null;

        /**
         * 消息最大保留时间，以毫秒为单位
         * @type {number || null}
         */
        this.MaxRetentionTime = null;

        /**
         * 已使用Vhost数量
         * @type {number || null}
         */
        this.UsedVHostNum = null;

        /**
         * 已使用exchange数量
         * @type {number || null}
         */
        this.UsedExchangeNum = null;

        /**
         * 已使用queue数量
         * @type {number || null}
         */
        this.UsedQueueNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxTpsPerVHost = 'MaxTpsPerVHost' in params ? params.MaxTpsPerVHost : null;
        this.MaxConnNumPerVHost = 'MaxConnNumPerVHost' in params ? params.MaxConnNumPerVHost : null;
        this.MaxVHostNum = 'MaxVHostNum' in params ? params.MaxVHostNum : null;
        this.MaxExchangeNum = 'MaxExchangeNum' in params ? params.MaxExchangeNum : null;
        this.MaxQueueNum = 'MaxQueueNum' in params ? params.MaxQueueNum : null;
        this.MaxRetentionTime = 'MaxRetentionTime' in params ? params.MaxRetentionTime : null;
        this.UsedVHostNum = 'UsedVHostNum' in params ? params.UsedVHostNum : null;
        this.UsedExchangeNum = 'UsedExchangeNum' in params ? params.UsedExchangeNum : null;
        this.UsedQueueNum = 'UsedQueueNum' in params ? params.UsedQueueNum : null;

    }
}

/**
 * DescribeAMQPExchanges请求参数结构体
 * @class
 */
class DescribeAMQPExchangesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询限制数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Vhost ID
         * @type {string || null}
         */
        this.VHostId = null;

        /**
         * 按路由类型过滤查询结果，可选择Direct, Fanout, Topic
         * @type {Array.<string> || null}
         */
        this.FilterType = null;

        /**
         * 按exchange名称搜索，支持模糊查询
         * @type {string || null}
         */
        this.FilterName = null;

        /**
         * 过滤查询内部或者外部exchange
         * @type {boolean || null}
         */
        this.FilterInternal = null;

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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.VHostId = 'VHostId' in params ? params.VHostId : null;
        this.FilterType = 'FilterType' in params ? params.FilterType : null;
        this.FilterName = 'FilterName' in params ? params.FilterName : null;
        this.FilterInternal = 'FilterInternal' in params ? params.FilterInternal : null;

    }
}

/**
 * CreateRocketMQNamespace返回参数结构体
 * @class
 */
class CreateRocketMQNamespaceResponse extends  AbstractModel {
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
 * ModifyAMQPExchange请求参数结构体
 * @class
 */
class ModifyAMQPExchangeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Vhost间名称
         * @type {string || null}
         */
        this.VHostId = null;

        /**
         * 交换机名称
         * @type {string || null}
         */
        this.Exchange = null;

        /**
         * 说明信息，最大128个字符
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.VHostId = 'VHostId' in params ? params.VHostId : null;
        this.Exchange = 'Exchange' in params ? params.Exchange : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * SendBatchMessages请求参数结构体
 * @class
 */
class SendBatchMessagesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消息要发送的topic的名字, 这里尽量需要使用topic的全路径，即：tenant/namespace/topic。如果不指定，默认使用的是：public/default
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * 需要发送消息的内容
         * @type {string || null}
         */
        this.Payload = null;

        /**
         * String 类型的 token，可以不填，系统会自动获取
         * @type {string || null}
         */
        this.StringToken = null;

        /**
         * producer 的名字，要求全局是唯一的，如果不设置，系统会自动生成
         * @type {string || null}
         */
        this.ProducerName = null;

        /**
         * 单位：s。消息发送的超时时间。默认值为：30s
         * @type {number || null}
         */
        this.SendTimeout = null;

        /**
         * 内存中允许缓存的生产消息的最大数量，默认值：1000条
         * @type {number || null}
         */
        this.MaxPendingMessages = null;

        /**
         * 每一个batch中消息的最大数量，默认值：1000条/batch
         * @type {number || null}
         */
        this.BatchingMaxMessages = null;

        /**
         * 每一个batch最大等待的时间，超过这个时间，不管是否达到指定的batch中消息的数量和大小，都会将该batch发送出去，默认：10ms
         * @type {number || null}
         */
        this.BatchingMaxPublishDelay = null;

        /**
         * 每一个batch中最大允许的消息的大小，默认：128KB
         * @type {number || null}
         */
        this.BatchingMaxBytes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.Payload = 'Payload' in params ? params.Payload : null;
        this.StringToken = 'StringToken' in params ? params.StringToken : null;
        this.ProducerName = 'ProducerName' in params ? params.ProducerName : null;
        this.SendTimeout = 'SendTimeout' in params ? params.SendTimeout : null;
        this.MaxPendingMessages = 'MaxPendingMessages' in params ? params.MaxPendingMessages : null;
        this.BatchingMaxMessages = 'BatchingMaxMessages' in params ? params.BatchingMaxMessages : null;
        this.BatchingMaxPublishDelay = 'BatchingMaxPublishDelay' in params ? params.BatchingMaxPublishDelay : null;
        this.BatchingMaxBytes = 'BatchingMaxBytes' in params ? params.BatchingMaxBytes : null;

    }
}

/**
 * DeleteCmqTopic请求参数结构体
 * @class
 */
class DeleteCmqTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题名字，在单个地域同一帐号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
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
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * DeleteAMQPRouteRelation请求参数结构体
 * @class
 */
class DeleteAMQPRouteRelationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * Vhost名称
         * @type {string || null}
         */
        this.VHostId = null;

        /**
         * 路由关系ID
         * @type {string || null}
         */
        this.RouteRelationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.VHostId = 'VHostId' in params ? params.VHostId : null;
        this.RouteRelationId = 'RouteRelationId' in params ? params.RouteRelationId : null;

    }
}

/**
 * SendCmqMsg返回参数结构体
 * @class
 */
class SendCmqMsgResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * true表示发送成功
         * @type {boolean || null}
         */
        this.Result = null;

        /**
         * 消息id
         * @type {string || null}
         */
        this.MsgId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.MsgId = 'MsgId' in params ? params.MsgId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeNodeHealthOpt返回参数结构体
 * @class
 */
class DescribeNodeHealthOptResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0-异常；1-正常
         * @type {number || null}
         */
        this.NodeState = null;

        /**
         * 最近一次健康检查的时间
         * @type {string || null}
         */
        this.LatestHealthCheckTime = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeState = 'NodeState' in params ? params.NodeState : null;
        this.LatestHealthCheckTime = 'LatestHealthCheckTime' in params ? params.LatestHealthCheckTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PublishCmqMsg请求参数结构体
 * @class
 */
class PublishCmqMsgRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题名
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 消息内容，消息总大小需不大于1024K
         * @type {string || null}
         */
        this.MsgContent = null;

        /**
         * 消息标签，支持传递多标签或单路由，单个标签、路由长度不能超过64个字符。
         * @type {Array.<string> || null}
         */
        this.MsgTag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.MsgContent = 'MsgContent' in params ? params.MsgContent : null;
        this.MsgTag = 'MsgTag' in params ? params.MsgTag : null;

    }
}

/**
 * UnbindCmqDeadLetter请求参数结构体
 * @class
 */
class UnbindCmqDeadLetterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 死信策略源队列名称，调用本接口会清空该队列的死信队列策略。
         * @type {string || null}
         */
        this.SourceQueueName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceQueueName = 'SourceQueueName' in params ? params.SourceQueueName : null;

    }
}

/**
 * CreateAMQPRouteRelation请求参数结构体
 * @class
 */
class CreateAMQPRouteRelationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 交换机所在的vhost
         * @type {string || null}
         */
        this.VHostId = null;

        /**
         * 源Exchange名称
         * @type {string || null}
         */
        this.SourceExchange = null;

        /**
         * 目标类型:Queue|Exchange
         * @type {string || null}
         */
        this.DestType = null;

        /**
         * 目标值
         * @type {string || null}
         */
        this.DestValue = null;

        /**
         * 交换机说明，最大128个字符
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 绑定key,缺省值为default
         * @type {string || null}
         */
        this.RoutingKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.VHostId = 'VHostId' in params ? params.VHostId : null;
        this.SourceExchange = 'SourceExchange' in params ? params.SourceExchange : null;
        this.DestType = 'DestType' in params ? params.DestType : null;
        this.DestValue = 'DestValue' in params ? params.DestValue : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.RoutingKey = 'RoutingKey' in params ? params.RoutingKey : null;

    }
}

/**
 * RabbitMQ节点信息
 * @class
 */
class RabbitMQPrivateNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NodeName = null;

        /**
         * 节点状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NodeStatus = null;

        /**
         * CPU使用率
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CPUUsage = null;

        /**
         * 内存使用情况，单位MB
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 磁盘使用率
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiskUsage = null;

        /**
         * Rabbitmq的Erlang进程数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProcessNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeName = 'NodeName' in params ? params.NodeName : null;
        this.NodeStatus = 'NodeStatus' in params ? params.NodeStatus : null;
        this.CPUUsage = 'CPUUsage' in params ? params.CPUUsage : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.DiskUsage = 'DiskUsage' in params ? params.DiskUsage : null;
        this.ProcessNumber = 'ProcessNumber' in params ? params.ProcessNumber : null;

    }
}

/**
 * DeleteCmqSubscribe返回参数结构体
 * @class
 */
class DeleteCmqSubscribeResponse extends  AbstractModel {
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
 * DescribePublisherSummary请求参数结构体
 * @class
 */
class DescribePublisherSummaryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 命名空间名称
         * @type {string || null}
         */
        this.Namespace = null;

        /**
         * 主题名称
         * @type {string || null}
         */
        this.Topic = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Namespace = 'Namespace' in params ? params.Namespace : null;
        this.Topic = 'Topic' in params ? params.Topic : null;

    }
}

/**
 * DeleteSubscriptions请求参数结构体
 * @class
 */
class DeleteSubscriptionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订阅关系集合，每次最多删除20个。
         * @type {Array.<SubscriptionTopic> || null}
         */
        this.SubscriptionTopicSets = null;

        /**
         * pulsar集群Id。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 环境（命名空间）名称。
         * @type {string || null}
         */
        this.EnvironmentId = null;

        /**
         * 是否强制删除，默认为false
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

        if (params.SubscriptionTopicSets) {
            this.SubscriptionTopicSets = new Array();
            for (let z in params.SubscriptionTopicSets) {
                let obj = new SubscriptionTopic();
                obj.deserialize(params.SubscriptionTopicSets[z]);
                this.SubscriptionTopicSets.push(obj);
            }
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.Force = 'Force' in params ? params.Force : null;

    }
}

/**
 * SendCmqMsg请求参数结构体
 * @class
 */
class SendCmqMsgRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 队列名
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * 消息内容
         * @type {string || null}
         */
        this.MsgContent = null;

        /**
         * 延迟时间
         * @type {number || null}
         */
        this.DelaySeconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.MsgContent = 'MsgContent' in params ? params.MsgContent : null;
        this.DelaySeconds = 'DelaySeconds' in params ? params.DelaySeconds : null;

    }
}

/**
 * ModifyCmqQueueAttribute请求参数结构体
 * @class
 */
class ModifyCmqQueueAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 队列名字，在单个地域同一帐号下唯一。队列名称是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * 最大堆积消息数。取值范围在公测期间为 1,000,000 - 10,000,000，正式上线后范围可达到 1000,000-1000,000,000。默认取值在公测期间为 10,000,000，正式上线后为 100,000,000。
         * @type {number || null}
         */
        this.MaxMsgHeapNum = null;

        /**
         * 消息接收长轮询等待时间。取值范围 0-30 秒，默认值 0。
         * @type {number || null}
         */
        this.PollingWaitSeconds = null;

        /**
         * 消息可见性超时。取值范围 1-43200 秒（即12小时内），默认值 30。
         * @type {number || null}
         */
        this.VisibilityTimeout = null;

        /**
         * 消息最大长度，新版CMQ新建的队列默认1024KB，不支持修改
         * @type {number || null}
         */
        this.MaxMsgSize = null;

        /**
         * 消息最长未确认时间。取值范围 30-43200 秒（30秒~12小时），默认值 3600 (1 小时)。
         * @type {number || null}
         */
        this.MsgRetentionSeconds = null;

        /**
         * 队列是否开启回溯消息能力，该参数取值范围0-1296000，0表示不开启。
         * @type {number || null}
         */
        this.RewindSeconds = null;

        /**
         * 第一次查询时间
         * @type {number || null}
         */
        this.FirstQueryInterval = null;

        /**
         * 最大查询次数
         * @type {number || null}
         */
        this.MaxQueryCount = null;

        /**
         * 死信队列名称
         * @type {string || null}
         */
        this.DeadLetterQueueName = null;

        /**
         * MaxTimeToLivepolicy为1时必选。最大未消费过期时间。范围300-43200，单位秒，需要小于消息最大保留时间MsgRetentionSeconds
         * @type {number || null}
         */
        this.MaxTimeToLive = null;

        /**
         * 最大接收次数
         * @type {number || null}
         */
        this.MaxReceiveCount = null;

        /**
         * 死信队列策略
         * @type {number || null}
         */
        this.Policy = null;

        /**
         * 是否开启消息轨迹标识，true表示开启，false表示不开启，不填表示不开启。
         * @type {boolean || null}
         */
        this.Trace = null;

        /**
         * 是否开启事务，1开启，0不开启
         * @type {number || null}
         */
        this.Transaction = null;

        /**
         * 队列可回溯存储空间：若开启消息回溯，取值范围：10240MB - 512000MB，若不开启消息回溯，取值：0
         * @type {number || null}
         */
        this.RetentionSizeInMB = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.MaxMsgHeapNum = 'MaxMsgHeapNum' in params ? params.MaxMsgHeapNum : null;
        this.PollingWaitSeconds = 'PollingWaitSeconds' in params ? params.PollingWaitSeconds : null;
        this.VisibilityTimeout = 'VisibilityTimeout' in params ? params.VisibilityTimeout : null;
        this.MaxMsgSize = 'MaxMsgSize' in params ? params.MaxMsgSize : null;
        this.MsgRetentionSeconds = 'MsgRetentionSeconds' in params ? params.MsgRetentionSeconds : null;
        this.RewindSeconds = 'RewindSeconds' in params ? params.RewindSeconds : null;
        this.FirstQueryInterval = 'FirstQueryInterval' in params ? params.FirstQueryInterval : null;
        this.MaxQueryCount = 'MaxQueryCount' in params ? params.MaxQueryCount : null;
        this.DeadLetterQueueName = 'DeadLetterQueueName' in params ? params.DeadLetterQueueName : null;
        this.MaxTimeToLive = 'MaxTimeToLive' in params ? params.MaxTimeToLive : null;
        this.MaxReceiveCount = 'MaxReceiveCount' in params ? params.MaxReceiveCount : null;
        this.Policy = 'Policy' in params ? params.Policy : null;
        this.Trace = 'Trace' in params ? params.Trace : null;
        this.Transaction = 'Transaction' in params ? params.Transaction : null;
        this.RetentionSizeInMB = 'RetentionSizeInMB' in params ? params.RetentionSizeInMB : null;

    }
}

/**
 * ModifyRocketMQGroup返回参数结构体
 * @class
 */
class ModifyRocketMQGroupResponse extends  AbstractModel {
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
 * DescribeRocketMQVipInstances返回参数结构体
 * @class
 */
class DescribeRocketMQVipInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 未分页的总数目
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例信息列表
         * @type {Array.<RocketMQVipInstance> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new RocketMQVipInstance();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRabbitMQVipInstances请求参数结构体
 * @class
 */
class DescribeRabbitMQVipInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询条件过滤器
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 查询数目上限，默认20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询起始位置
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
 * 租户AMQP集群详细信息
 * @class
 */
class AMQPClusterDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群基本信息
         * @type {AMQPClusterInfo || null}
         */
        this.Info = null;

        /**
         * 集群配置信息
         * @type {AMQPClusterConfig || null}
         */
        this.Config = null;

        /**
         * 标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 集群状态，0:创建中，1:正常，2:销毁中，3:已删除，4: 隔离中，5:创建失败，6: 删除失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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

        if (params.Info) {
            let obj = new AMQPClusterInfo();
            obj.deserialize(params.Info)
            this.Info = obj;
        }

        if (params.Config) {
            let obj = new AMQPClusterConfig();
            obj.deserialize(params.Config)
            this.Config = obj;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeClusterDetail返回参数结构体
 * @class
 */
class DescribeClusterDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群的详细信息
         * @type {Cluster || null}
         */
        this.ClusterSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ClusterSet) {
            let obj = new Cluster();
            obj.deserialize(params.ClusterSet)
            this.ClusterSet = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SendMessages请求参数结构体
 * @class
 */
class SendMessagesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消息要发送的topic的名字, 这里尽量需要使用topic的全路径，即：tenant/namespace/topic。如果不指定，默认使用的是：public/default
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * 要发送的消息的内容
         * @type {string || null}
         */
        this.Payload = null;

        /**
         * Token 是用来做鉴权使用的，可以不填，系统会自动获取
         * @type {string || null}
         */
        this.StringToken = null;

        /**
         * 设置 producer 的名字，要求全局唯一。该参数建议用户无需手动配置，此时系统会随机生成，如果手动设置有可能会造成创建 Producer 失败进而导致消息发送失败。
该参数主要用于某些特定场景下，只允许特定的 Producer 生产消息时设置，用户的大部分场景使用不到该特性。
         * @type {string || null}
         */
        this.ProducerName = null;

        /**
         * 设置消息发送的超时时间，默认为30s
         * @type {number || null}
         */
        this.SendTimeout = null;

        /**
         * 内存中缓存的最大的生产消息的数量，默认为1000条
         * @type {number || null}
         */
        this.MaxPendingMessages = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.Payload = 'Payload' in params ? params.Payload : null;
        this.StringToken = 'StringToken' in params ? params.StringToken : null;
        this.ProducerName = 'ProducerName' in params ? params.ProducerName : null;
        this.SendTimeout = 'SendTimeout' in params ? params.SendTimeout : null;
        this.MaxPendingMessages = 'MaxPendingMessages' in params ? params.MaxPendingMessages : null;

    }
}

/**
 * ModifyRocketMQNamespace请求参数结构体
 * @class
 */
class ModifyRocketMQNamespaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 命名空间名称，3-64个字符，只能包含字母、数字、“-”及“_”
         * @type {string || null}
         */
        this.NamespaceId = null;

        /**
         * 未消费消息的保留时间，以毫秒为单位，60秒-15天
         * @type {number || null}
         */
        this.Ttl = null;

        /**
         * 消息持久化后保留的时间，以毫秒为单位
         * @type {number || null}
         */
        this.RetentionTime = null;

        /**
         * 说明，最大128个字符
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NamespaceId = 'NamespaceId' in params ? params.NamespaceId : null;
        this.Ttl = 'Ttl' in params ? params.Ttl : null;
        this.RetentionTime = 'RetentionTime' in params ? params.RetentionTime : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * DeleteAMQPVHost返回参数结构体
 * @class
 */
class DeleteAMQPVHostResponse extends  AbstractModel {
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
 * DescribeAllTenants请求参数结构体
 * @class
 */
class DescribeAllTenantsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询限制条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 物理集群名称
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 虚拟集群ID
         * @type {string || null}
         */
        this.TenantId = null;

        /**
         * 虚拟集群名称
         * @type {string || null}
         */
        this.TenantName = null;

        /**
         * 协议类型数组
         * @type {Array.<string> || null}
         */
        this.Types = null;

        /**
         * 排序字段名，支持createTime，updateTime
         * @type {string || null}
         */
        this.SortBy = null;

        /**
         * 升序排列ASC，降序排列DESC
         * @type {string || null}
         */
        this.SortOrder = null;

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
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.TenantId = 'TenantId' in params ? params.TenantId : null;
        this.TenantName = 'TenantName' in params ? params.TenantName : null;
        this.Types = 'Types' in params ? params.Types : null;
        this.SortBy = 'SortBy' in params ? params.SortBy : null;
        this.SortOrder = 'SortOrder' in params ? params.SortOrder : null;

    }
}

module.exports = {
    DescribeRolesResponse: DescribeRolesResponse,
    DescribeAMQPRouteRelationsRequest: DescribeAMQPRouteRelationsRequest,
    CmqDeadLetterPolicy: CmqDeadLetterPolicy,
    DescribeNamespaceBundlesOptRequest: DescribeNamespaceBundlesOptRequest,
    RocketMQNamespace: RocketMQNamespace,
    DescribeSubscriptionsRequest: DescribeSubscriptionsRequest,
    InstanceNodeDistribution: InstanceNodeDistribution,
    CreateRocketMQGroupRequest: CreateRocketMQGroupRequest,
    ModifyEnvironmentAttributesRequest: ModifyEnvironmentAttributesRequest,
    DeleteClusterResponse: DeleteClusterResponse,
    SendBatchMessagesResponse: SendBatchMessagesResponse,
    ModifyCmqSubscriptionAttributeResponse: ModifyCmqSubscriptionAttributeResponse,
    CreateCmqTopicRequest: CreateCmqTopicRequest,
    CreateAMQPExchangeRequest: CreateAMQPExchangeRequest,
    DescribeRocketMQNamespacesResponse: DescribeRocketMQNamespacesResponse,
    ResetRocketMQConsumerOffSetResponse: ResetRocketMQConsumerOffSetResponse,
    DescribeBindClustersResponse: DescribeBindClustersResponse,
    BindCluster: BindCluster,
    ModifyClusterResponse: ModifyClusterResponse,
    VpcConfig: VpcConfig,
    RocketMQClusterRecentStats: RocketMQClusterRecentStats,
    RocketMQVipInstance: RocketMQVipInstance,
    RabbitMQVipInstance: RabbitMQVipInstance,
    DescribeCmqQueuesResponse: DescribeCmqQueuesResponse,
    DescribeAllTenantsResponse: DescribeAllTenantsResponse,
    DescribeRabbitMQNodeListRequest: DescribeRabbitMQNodeListRequest,
    DescribeNamespaceBundlesOptResponse: DescribeNamespaceBundlesOptResponse,
    RocketMQInstanceConfig: RocketMQInstanceConfig,
    DescribeBindVpcsResponse: DescribeBindVpcsResponse,
    RewindCmqQueueResponse: RewindCmqQueueResponse,
    DeleteClusterRequest: DeleteClusterRequest,
    CmqSubscription: CmqSubscription,
    ModifyAMQPVHostResponse: ModifyAMQPVHostResponse,
    DescribeAMQPClusterResponse: DescribeAMQPClusterResponse,
    CreateAMQPClusterRequest: CreateAMQPClusterRequest,
    DeleteRocketMQGroupRequest: DeleteRocketMQGroupRequest,
    RocketMQGroup: RocketMQGroup,
    AMQPClusterRecentStats: AMQPClusterRecentStats,
    DescribeRocketMQVipInstanceDetailRequest: DescribeRocketMQVipInstanceDetailRequest,
    DeleteCmqTopicResponse: DeleteCmqTopicResponse,
    ModifyAMQPVHostRequest: ModifyAMQPVHostRequest,
    CreateSubscriptionRequest: CreateSubscriptionRequest,
    CreateRocketMQNamespaceRequest: CreateRocketMQNamespaceRequest,
    Topic: Topic,
    DescribeCmqTopicDetailResponse: DescribeCmqTopicDetailResponse,
    Environment: Environment,
    CmqQueue: CmqQueue,
    CreateEnvironmentResponse: CreateEnvironmentResponse,
    CreateSubscriptionResponse: CreateSubscriptionResponse,
    DeleteAMQPQueueResponse: DeleteAMQPQueueResponse,
    ModifyCmqTopicAttributeResponse: ModifyCmqTopicAttributeResponse,
    DescribeCmqSubscriptionDetailRequest: DescribeCmqSubscriptionDetailRequest,
    DescribePublisherSummaryResponse: DescribePublisherSummaryResponse,
    DescribeAMQPVHostsResponse: DescribeAMQPVHostsResponse,
    DescribeEnvironmentsRequest: DescribeEnvironmentsRequest,
    DescribeRocketMQNamespacesRequest: DescribeRocketMQNamespacesRequest,
    DeleteAMQPClusterResponse: DeleteAMQPClusterResponse,
    DescribeAMQPClusterRequest: DescribeAMQPClusterRequest,
    DescribeRocketMQTopicsRequest: DescribeRocketMQTopicsRequest,
    ModifyRocketMQClusterResponse: ModifyRocketMQClusterResponse,
    Subscription: Subscription,
    DescribeCmqQueueDetailResponse: DescribeCmqQueueDetailResponse,
    CreateEnvironmentRequest: CreateEnvironmentRequest,
    CreateAMQPQueueRequest: CreateAMQPQueueRequest,
    ClearCmqQueueRequest: ClearCmqQueueRequest,
    DescribeClustersRequest: DescribeClustersRequest,
    Publisher: Publisher,
    RocketMQTopic: RocketMQTopic,
    DescribeRocketMQClusterResponse: DescribeRocketMQClusterResponse,
    CreateAMQPVHostResponse: CreateAMQPVHostResponse,
    DescribeCmqSubscriptionDetailResponse: DescribeCmqSubscriptionDetailResponse,
    VpcBindRecord: VpcBindRecord,
    RewindCmqQueueRequest: RewindCmqQueueRequest,
    DescribeAMQPVHostsRequest: DescribeAMQPVHostsRequest,
    ModifyClusterRequest: ModifyClusterRequest,
    DescribeAMQPQueuesRequest: DescribeAMQPQueuesRequest,
    ModifyRocketMQClusterRequest: ModifyRocketMQClusterRequest,
    AMQPVHost: AMQPVHost,
    ModifyAMQPExchangeResponse: ModifyAMQPExchangeResponse,
    DescribeAMQPExchangesResponse: DescribeAMQPExchangesResponse,
    AcknowledgeMessageRequest: AcknowledgeMessageRequest,
    DeleteAMQPClusterRequest: DeleteAMQPClusterRequest,
    DescribeRocketMQVipInstanceDetailResponse: DescribeRocketMQVipInstanceDetailResponse,
    PublishCmqMsgResponse: PublishCmqMsgResponse,
    DescribePublishersRequest: DescribePublishersRequest,
    CreateRocketMQClusterRequest: CreateRocketMQClusterRequest,
    DeleteAMQPVHostRequest: DeleteAMQPVHostRequest,
    AcknowledgeMessageResponse: AcknowledgeMessageResponse,
    ModifyCmqQueueAttributeResponse: ModifyCmqQueueAttributeResponse,
    DeleteEnvironmentRolesResponse: DeleteEnvironmentRolesResponse,
    DescribeClusterDetailRequest: DescribeClusterDetailRequest,
    ModifyRoleResponse: ModifyRoleResponse,
    ModifyAMQPQueueRequest: ModifyAMQPQueueRequest,
    Tag: Tag,
    DeleteCmqQueueResponse: DeleteCmqQueueResponse,
    DescribeRocketMQClusterRequest: DescribeRocketMQClusterRequest,
    DeleteRocketMQTopicResponse: DeleteRocketMQTopicResponse,
    ModifyCmqTopicAttributeRequest: ModifyCmqTopicAttributeRequest,
    DescribeRabbitMQVipInstancesResponse: DescribeRabbitMQVipInstancesResponse,
    DeleteRolesRequest: DeleteRolesRequest,
    ModifyRocketMQTopicResponse: ModifyRocketMQTopicResponse,
    CreateCmqSubscribeResponse: CreateCmqSubscribeResponse,
    DescribeCmqDeadLetterSourceQueuesRequest: DescribeCmqDeadLetterSourceQueuesRequest,
    DescribeSubscriptionsResponse: DescribeSubscriptionsResponse,
    ModifyRoleRequest: ModifyRoleRequest,
    DescribeRabbitMQNodeListResponse: DescribeRabbitMQNodeListResponse,
    SendMessagesResponse: SendMessagesResponse,
    ReceiveMessageRequest: ReceiveMessageRequest,
    CreateTopicRequest: CreateTopicRequest,
    DescribeTopicsRequest: DescribeTopicsRequest,
    DeleteEnvironmentsResponse: DeleteEnvironmentsResponse,
    ModifyAMQPClusterRequest: ModifyAMQPClusterRequest,
    DescribeEnvironmentRolesResponse: DescribeEnvironmentRolesResponse,
    DescribeAMQPCreateQuotaResponse: DescribeAMQPCreateQuotaResponse,
    ModifyRocketMQGroupRequest: ModifyRocketMQGroupRequest,
    FilterSubscription: FilterSubscription,
    DescribeCmqTopicsResponse: DescribeCmqTopicsResponse,
    DescribeCmqTopicDetailRequest: DescribeCmqTopicDetailRequest,
    CmqTopic: CmqTopic,
    UnbindCmqDeadLetterResponse: UnbindCmqDeadLetterResponse,
    ModifyRocketMQNamespaceResponse: ModifyRocketMQNamespaceResponse,
    AMQPRouteRelation: AMQPRouteRelation,
    DeleteAMQPQueueRequest: DeleteAMQPQueueRequest,
    DeleteEnvironmentsRequest: DeleteEnvironmentsRequest,
    DescribeRocketMQClustersRequest: DescribeRocketMQClustersRequest,
    ReceiveMessageResponse: ReceiveMessageResponse,
    DescribeBindVpcsRequest: DescribeBindVpcsRequest,
    DescribeClustersResponse: DescribeClustersResponse,
    DeleteRocketMQNamespaceResponse: DeleteRocketMQNamespaceResponse,
    ClearCmqSubscriptionFilterTagsRequest: ClearCmqSubscriptionFilterTagsRequest,
    TopicRecord: TopicRecord,
    CreateRocketMQGroupResponse: CreateRocketMQGroupResponse,
    CreateEnvironmentRoleRequest: CreateEnvironmentRoleRequest,
    DescribeEnvironmentRolesRequest: DescribeEnvironmentRolesRequest,
    DeleteRolesResponse: DeleteRolesResponse,
    SendMsgResponse: SendMsgResponse,
    ModifyRocketMQTopicRequest: ModifyRocketMQTopicRequest,
    RocketMQClusterInfo: RocketMQClusterInfo,
    DescribeRocketMQTopicsResponse: DescribeRocketMQTopicsResponse,
    CreateAMQPVHostRequest: CreateAMQPVHostRequest,
    RocketMQClusterDetail: RocketMQClusterDetail,
    DeleteRocketMQGroupResponse: DeleteRocketMQGroupResponse,
    CreateCmqQueueResponse: CreateCmqQueueResponse,
    PartitionsTopic: PartitionsTopic,
    DescribeRocketMQGroupsResponse: DescribeRocketMQGroupsResponse,
    ResetMsgSubOffsetByTimestampResponse: ResetMsgSubOffsetByTimestampResponse,
    CreateClusterResponse: CreateClusterResponse,
    DeleteAMQPExchangeResponse: DeleteAMQPExchangeResponse,
    DeleteRocketMQNamespaceRequest: DeleteRocketMQNamespaceRequest,
    DescribeRolesRequest: DescribeRolesRequest,
    CreateAMQPQueueResponse: CreateAMQPQueueResponse,
    CreateClusterRequest: CreateClusterRequest,
    DescribeAMQPClustersRequest: DescribeAMQPClustersRequest,
    CreateAMQPRouteRelationResponse: CreateAMQPRouteRelationResponse,
    CreateTopicResponse: CreateTopicResponse,
    DescribeCmqQueuesRequest: DescribeCmqQueuesRequest,
    DescribeEnvironmentsResponse: DescribeEnvironmentsResponse,
    ModifyCmqSubscriptionAttributeRequest: ModifyCmqSubscriptionAttributeRequest,
    ModifyTopicResponse: ModifyTopicResponse,
    AMQPClusterInfo: AMQPClusterInfo,
    DescribeAMQPRouteRelationsResponse: DescribeAMQPRouteRelationsResponse,
    DeleteTopicsResponse: DeleteTopicsResponse,
    CreateAMQPClusterResponse: CreateAMQPClusterResponse,
    DescribeRocketMQVipInstancesRequest: DescribeRocketMQVipInstancesRequest,
    DeleteAMQPExchangeRequest: DeleteAMQPExchangeRequest,
    DeleteRocketMQClusterResponse: DeleteRocketMQClusterResponse,
    CreateCmqTopicResponse: CreateCmqTopicResponse,
    CmqDeadLetterSource: CmqDeadLetterSource,
    ClearCmqSubscriptionFilterTagsResponse: ClearCmqSubscriptionFilterTagsResponse,
    DescribeCmqTopicsRequest: DescribeCmqTopicsRequest,
    Filter: Filter,
    AMQPExchange: AMQPExchange,
    DeleteTopicsRequest: DeleteTopicsRequest,
    CmqTransactionPolicy: CmqTransactionPolicy,
    BundleSetOpt: BundleSetOpt,
    ModifyTopicRequest: ModifyTopicRequest,
    ResetMsgSubOffsetByTimestampRequest: ResetMsgSubOffsetByTimestampRequest,
    CreateEnvironmentRoleResponse: CreateEnvironmentRoleResponse,
    Consumer: Consumer,
    CreateCmqSubscribeRequest: CreateCmqSubscribeRequest,
    DeleteCmqSubscribeRequest: DeleteCmqSubscribeRequest,
    DescribeAMQPClustersResponse: DescribeAMQPClustersResponse,
    RocketMQClusterConfig: RocketMQClusterConfig,
    DescribeCmqDeadLetterSourceQueuesResponse: DescribeCmqDeadLetterSourceQueuesResponse,
    DeleteSubscriptionsResponse: DeleteSubscriptionsResponse,
    DeleteRocketMQTopicRequest: DeleteRocketMQTopicRequest,
    ConsumersSchedule: ConsumersSchedule,
    Cluster: Cluster,
    SubscriptionTopic: SubscriptionTopic,
    RetentionPolicy: RetentionPolicy,
    CreateRocketMQClusterResponse: CreateRocketMQClusterResponse,
    DescribeAMQPCreateQuotaRequest: DescribeAMQPCreateQuotaRequest,
    AMQPQueueDetail: AMQPQueueDetail,
    DescribePublishersResponse: DescribePublishersResponse,
    DeleteAMQPRouteRelationResponse: DeleteAMQPRouteRelationResponse,
    SendMsgRequest: SendMsgRequest,
    ResetRocketMQConsumerOffSetRequest: ResetRocketMQConsumerOffSetRequest,
    DescribeCmqQueueDetailRequest: DescribeCmqQueueDetailRequest,
    DescribeAMQPQueuesResponse: DescribeAMQPQueuesResponse,
    CreateRocketMQTopicRequest: CreateRocketMQTopicRequest,
    CreateRoleResponse: CreateRoleResponse,
    DeleteRocketMQClusterRequest: DeleteRocketMQClusterRequest,
    InternalTenant: InternalTenant,
    DescribeEnvironmentAttributesRequest: DescribeEnvironmentAttributesRequest,
    DeleteEnvironmentRolesRequest: DeleteEnvironmentRolesRequest,
    ClearCmqQueueResponse: ClearCmqQueueResponse,
    CreateAMQPExchangeResponse: CreateAMQPExchangeResponse,
    DescribeNodeHealthOptRequest: DescribeNodeHealthOptRequest,
    DescribeBindClustersRequest: DescribeBindClustersRequest,
    CreateRocketMQTopicResponse: CreateRocketMQTopicResponse,
    ModifyEnvironmentAttributesResponse: ModifyEnvironmentAttributesResponse,
    EnvironmentRole: EnvironmentRole,
    ModifyAMQPQueueResponse: ModifyAMQPQueueResponse,
    CreateCmqQueueRequest: CreateCmqQueueRequest,
    ModifyEnvironmentRoleResponse: ModifyEnvironmentRoleResponse,
    DeleteCmqQueueRequest: DeleteCmqQueueRequest,
    DescribeRocketMQGroupsRequest: DescribeRocketMQGroupsRequest,
    DescribeRocketMQClustersResponse: DescribeRocketMQClustersResponse,
    RocketMQTopicDistribution: RocketMQTopicDistribution,
    Sort: Sort,
    CreateRoleRequest: CreateRoleRequest,
    ModifyEnvironmentRoleRequest: ModifyEnvironmentRoleRequest,
    DescribeEnvironmentAttributesResponse: DescribeEnvironmentAttributesResponse,
    Role: Role,
    ModifyAMQPClusterResponse: ModifyAMQPClusterResponse,
    DescribeTopicsResponse: DescribeTopicsResponse,
    AMQPClusterConfig: AMQPClusterConfig,
    DescribeAMQPExchangesRequest: DescribeAMQPExchangesRequest,
    CreateRocketMQNamespaceResponse: CreateRocketMQNamespaceResponse,
    ModifyAMQPExchangeRequest: ModifyAMQPExchangeRequest,
    SendBatchMessagesRequest: SendBatchMessagesRequest,
    DeleteCmqTopicRequest: DeleteCmqTopicRequest,
    DeleteAMQPRouteRelationRequest: DeleteAMQPRouteRelationRequest,
    SendCmqMsgResponse: SendCmqMsgResponse,
    DescribeNodeHealthOptResponse: DescribeNodeHealthOptResponse,
    PublishCmqMsgRequest: PublishCmqMsgRequest,
    UnbindCmqDeadLetterRequest: UnbindCmqDeadLetterRequest,
    CreateAMQPRouteRelationRequest: CreateAMQPRouteRelationRequest,
    RabbitMQPrivateNode: RabbitMQPrivateNode,
    DeleteCmqSubscribeResponse: DeleteCmqSubscribeResponse,
    DescribePublisherSummaryRequest: DescribePublisherSummaryRequest,
    DeleteSubscriptionsRequest: DeleteSubscriptionsRequest,
    SendCmqMsgRequest: SendCmqMsgRequest,
    ModifyCmqQueueAttributeRequest: ModifyCmqQueueAttributeRequest,
    ModifyRocketMQGroupResponse: ModifyRocketMQGroupResponse,
    DescribeRocketMQVipInstancesResponse: DescribeRocketMQVipInstancesResponse,
    DescribeRabbitMQVipInstancesRequest: DescribeRabbitMQVipInstancesRequest,
    AMQPClusterDetail: AMQPClusterDetail,
    DescribeClusterDetailResponse: DescribeClusterDetailResponse,
    SendMessagesRequest: SendMessagesRequest,
    ModifyRocketMQNamespaceRequest: ModifyRocketMQNamespaceRequest,
    DeleteAMQPVHostResponse: DeleteAMQPVHostResponse,
    DescribeAllTenantsRequest: DescribeAllTenantsRequest,

}
