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
         * 消息内容
         * @type {string || null}
         */
        this.MsgContent = null;

        /**
         * 消息标签
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
         * 订阅者名称，不支持中字以及除了短线和下划线外的特殊字符且不超过150个字符。
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
 * 生产者
 * @class
 */
class Producer extends  AbstractModel {
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
         * 连接数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CountConnect = null;

        /**
         * 连接集合。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Connection> || null}
         */
        this.ConnectionSets = null;

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
        this.CountConnect = 'CountConnect' in params ? params.CountConnect : null;

        if (params.ConnectionSets) {
            this.ConnectionSets = new Array();
            for (let z in params.ConnectionSets) {
                let obj = new Connection();
                obj.deserialize(params.ConnectionSets[z]);
                this.ConnectionSets.push(obj);
            }
        }

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
         * 未消费消息过期时间，单位：秒，最小60，最大1296000，（15天）。
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
         * 未消费消息过期时间，单位：秒，最大1296000。
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
 * SendMessages请求参数结构体
 * @class
 */
class SendMessagesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Token 是用来做鉴权使用的
         * @type {string || null}
         */
        this.StringToken = null;

        /**
         * 消息要发送的topic的名字
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * 要发送的消息的内容
         * @type {string || null}
         */
        this.Payload = null;

        /**
         * 设置 producer 的名字，要求全局唯一，用户不配置，系统会随机生成
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
        this.StringToken = 'StringToken' in params ? params.StringToken : null;
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.Payload = 'Payload' in params ? params.Payload : null;
        this.ProducerName = 'ProducerName' in params ? params.ProducerName : null;
        this.SendTimeout = 'SendTimeout' in params ? params.SendTimeout : null;
        this.MaxPendingMessages = 'MaxPendingMessages' in params ? params.MaxPendingMessages : null;

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
         * 0：非分区topic，无分区；非0：具体分区topic的分区数，最大不允许超过128。
         * @type {number || null}
         */
        this.Partitions = null;

        /**
         * 0： 普通消息；
1 ：全局顺序消息；
2 ：局部顺序消息；
3 ：重试队列；
4 ：死信队列；
5 ：事务消息。
         * @type {number || null}
         */
        this.TopicType = null;

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
        this.TopicType = 'TopicType' in params ? params.TopicType : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;

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
0：普通消息；
1：全局顺序消息；
2：局部顺序消息；
3：重试队列；
4：死信队列；
5：事务消息。
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
 * DescribeEnvironmentRoles请求参数结构体
 * @class
 */
class DescribeEnvironmentRolesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境（命名空间）名称。
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
         * 角色名称
         * @type {string || null}
         */
        this.RoleName = null;

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
         * 集群的标签列表
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
         * 0：非分区topic，无分区；非0：具体分区topic的分区数。
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
5 ：事务消息。
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
 * 生产者连接实例
 * @class
 */
class Connection extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生产者地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 主题分区。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Partitions = null;

        /**
         * 生产者版本。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClientVersion = null;

        /**
         * 生产者名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProducerName = null;

        /**
         * 生产者ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProducerId = null;

        /**
         * 消息平均大小(byte)。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AverageMsgSize = null;

        /**
         * 生成速率(byte/秒)。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MsgThroughputIn = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Address = 'Address' in params ? params.Address : null;
        this.Partitions = 'Partitions' in params ? params.Partitions : null;
        this.ClientVersion = 'ClientVersion' in params ? params.ClientVersion : null;
        this.ProducerName = 'ProducerName' in params ? params.ProducerName : null;
        this.ProducerId = 'ProducerId' in params ? params.ProducerId : null;
        this.AverageMsgSize = 'AverageMsgSize' in params ? params.AverageMsgSize : null;
        this.MsgThroughputIn = 'MsgThroughputIn' in params ? params.MsgThroughputIn : null;

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
         * 集群状态，0:创建中，1:正常，2:删除中，3:已删除，5:创建失败，6: 删除失败
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
         * 消息保留时间
         * @type {number || null}
         */
        this.MessageRetentionTime = null;

        /**
         * 最大存储容量
         * @type {number || null}
         */
        this.MaxStorageCapacity = null;

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
         * 消息保留周期。取值范围 60-1296000 秒（1min-15天），默认值 345600 (4 天)。
         * @type {number || null}
         */
        this.MsgRetentionSeconds = null;

        /**
         * 队列是否开启回溯消息能力，该参数取值范围0-msgRetentionSeconds,即最大的回溯时间为消息在队列中的保留周期，0表示不开启。
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
 * DescribeProducers请求参数结构体
 * @class
 */
class DescribeProducersRequest extends  AbstractModel {
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
         * 生产者名称，模糊匹配。
         * @type {string || null}
         */
        this.ProducerName = null;

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
        this.ProducerName = 'ProducerName' in params ? params.ProducerName : null;
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
 * DescribeProducers返回参数结构体
 * @class
 */
class DescribeProducersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生产者集合数组。
         * @type {Array.<Producer> || null}
         */
        this.ProducerSets = null;

        /**
         * 记录总数。
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

        if (params.ProducerSets) {
            this.ProducerSets = new Array();
            for (let z in params.ProducerSets) {
                let obj = new Producer();
                obj.deserialize(params.ProducerSets[z]);
                this.ProducerSets.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Topic name
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * 需要发送消息的内容
         * @type {string || null}
         */
        this.Payload = null;

        /**
         * String 类型的 token，用来校验客户端和服务端之间的连接
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
         * 消息最大长度。取值范围 1024-65536 Byte（即1-64K），默认值 65536。
         * @type {number || null}
         */
        this.MaxMsgSize = null;

        /**
         * 消息保留周期。取值范围 60-1296000 秒（1min-15天），默认值 345600 (4 天)。
         * @type {number || null}
         */
        this.MsgRetentionSeconds = null;

        /**
         * 消息最长回溯时间，取值范围0-msgRetentionSeconds，消息的最大回溯之间为消息在队列中的保存周期，0表示不开启消息回溯。
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

module.exports = {
    DescribeBindClustersResponse: DescribeBindClustersResponse,
    CmqDeadLetterPolicy: CmqDeadLetterPolicy,
    DescribeSubscriptionsRequest: DescribeSubscriptionsRequest,
    DeleteClusterResponse: DeleteClusterResponse,
    SendBatchMessagesResponse: SendBatchMessagesResponse,
    DescribeClusterDetailRequest: DescribeClusterDetailRequest,
    CreateCmqTopicRequest: CreateCmqTopicRequest,
    BindCluster: BindCluster,
    ModifyClusterResponse: ModifyClusterResponse,
    DescribeCmqQueuesResponse: DescribeCmqQueuesResponse,
    PublishCmqMsgRequest: PublishCmqMsgRequest,
    CreateCmqSubscribeRequest: CreateCmqSubscribeRequest,
    RewindCmqQueueResponse: RewindCmqQueueResponse,
    DeleteClusterRequest: DeleteClusterRequest,
    CmqSubscription: CmqSubscription,
    DeleteCmqTopicResponse: DeleteCmqTopicResponse,
    CreateSubscriptionRequest: CreateSubscriptionRequest,
    DescribeCmqTopicDetailResponse: DescribeCmqTopicDetailResponse,
    CmqQueue: CmqQueue,
    CreateEnvironmentResponse: CreateEnvironmentResponse,
    Producer: Producer,
    CreateSubscriptionResponse: CreateSubscriptionResponse,
    ModifyCmqTopicAttributeResponse: ModifyCmqTopicAttributeResponse,
    DescribeCmqSubscriptionDetailRequest: DescribeCmqSubscriptionDetailRequest,
    Topic: Topic,
    DescribeEnvironmentsRequest: DescribeEnvironmentsRequest,
    DescribeCmqQueueDetailResponse: DescribeCmqQueueDetailResponse,
    CreateEnvironmentRequest: CreateEnvironmentRequest,
    DeleteTopicsResponse: DeleteTopicsResponse,
    DescribeClustersRequest: DescribeClustersRequest,
    ModifyEnvironmentAttributesRequest: ModifyEnvironmentAttributesRequest,
    DescribeCmqSubscriptionDetailResponse: DescribeCmqSubscriptionDetailResponse,
    VpcBindRecord: VpcBindRecord,
    RewindCmqQueueRequest: RewindCmqQueueRequest,
    ModifyClusterRequest: ModifyClusterRequest,
    DescribeEnvironmentAttributesRequest: DescribeEnvironmentAttributesRequest,
    DescribeTopicsResponse: DescribeTopicsResponse,
    PublishCmqMsgResponse: PublishCmqMsgResponse,
    SendCmqMsgRequest: SendCmqMsgRequest,
    ModifyCmqSubscriptionAttributeResponse: ModifyCmqSubscriptionAttributeResponse,
    Tag: Tag,
    DeleteCmqQueueResponse: DeleteCmqQueueResponse,
    SendMessagesRequest: SendMessagesRequest,
    ModifyCmqTopicAttributeRequest: ModifyCmqTopicAttributeRequest,
    Subscription: Subscription,
    CreateCmqSubscribeResponse: CreateCmqSubscribeResponse,
    DescribeSubscriptionsResponse: DescribeSubscriptionsResponse,
    SendMessagesResponse: SendMessagesResponse,
    CreateTopicRequest: CreateTopicRequest,
    DescribeTopicsRequest: DescribeTopicsRequest,
    DeleteEnvironmentsResponse: DeleteEnvironmentsResponse,
    DescribeEnvironmentRolesResponse: DescribeEnvironmentRolesResponse,
    ClearCmqQueueRequest: ClearCmqQueueRequest,
    FilterSubscription: FilterSubscription,
    DescribeCmqTopicsResponse: DescribeCmqTopicsResponse,
    DescribeCmqTopicDetailRequest: DescribeCmqTopicDetailRequest,
    CmqTopic: CmqTopic,
    UnbindCmqDeadLetterResponse: UnbindCmqDeadLetterResponse,
    DeleteEnvironmentsRequest: DeleteEnvironmentsRequest,
    DescribeBindVpcsRequest: DescribeBindVpcsRequest,
    DescribeClustersResponse: DescribeClustersResponse,
    ClearCmqSubscriptionFilterTagsRequest: ClearCmqSubscriptionFilterTagsRequest,
    TopicRecord: TopicRecord,
    DescribeEnvironmentRolesRequest: DescribeEnvironmentRolesRequest,
    Environment: Environment,
    CreateCmqQueueResponse: CreateCmqQueueResponse,
    PartitionsTopic: PartitionsTopic,
    ResetMsgSubOffsetByTimestampResponse: ResetMsgSubOffsetByTimestampResponse,
    CreateClusterResponse: CreateClusterResponse,
    DescribeCmqDeadLetterSourceQueuesRequest: DescribeCmqDeadLetterSourceQueuesRequest,
    CreateClusterRequest: CreateClusterRequest,
    ModifyCmqQueueAttributeResponse: ModifyCmqQueueAttributeResponse,
    CreateTopicResponse: CreateTopicResponse,
    DescribeCmqQueuesRequest: DescribeCmqQueuesRequest,
    DescribeEnvironmentsResponse: DescribeEnvironmentsResponse,
    ModifyCmqSubscriptionAttributeRequest: ModifyCmqSubscriptionAttributeRequest,
    ModifyTopicResponse: ModifyTopicResponse,
    CreateCmqTopicResponse: CreateCmqTopicResponse,
    CmqDeadLetterSource: CmqDeadLetterSource,
    ClearCmqSubscriptionFilterTagsResponse: ClearCmqSubscriptionFilterTagsResponse,
    DescribeCmqTopicsRequest: DescribeCmqTopicsRequest,
    Filter: Filter,
    Connection: Connection,
    DeleteTopicsRequest: DeleteTopicsRequest,
    CmqTransactionPolicy: CmqTransactionPolicy,
    ModifyTopicRequest: ModifyTopicRequest,
    ResetMsgSubOffsetByTimestampRequest: ResetMsgSubOffsetByTimestampRequest,
    Consumer: Consumer,
    DescribeBindVpcsResponse: DescribeBindVpcsResponse,
    DeleteCmqSubscribeRequest: DeleteCmqSubscribeRequest,
    DescribeCmqDeadLetterSourceQueuesResponse: DescribeCmqDeadLetterSourceQueuesResponse,
    DeleteSubscriptionsResponse: DeleteSubscriptionsResponse,
    ConsumersSchedule: ConsumersSchedule,
    Cluster: Cluster,
    DescribeCmqQueueDetailRequest: DescribeCmqQueueDetailRequest,
    ClearCmqQueueResponse: ClearCmqQueueResponse,
    DescribeBindClustersRequest: DescribeBindClustersRequest,
    DescribeClusterDetailResponse: DescribeClusterDetailResponse,
    CreateCmqQueueRequest: CreateCmqQueueRequest,
    DeleteCmqQueueRequest: DeleteCmqQueueRequest,
    DescribeProducersRequest: DescribeProducersRequest,
    DescribeEnvironmentAttributesResponse: DescribeEnvironmentAttributesResponse,
    SubscriptionTopic: SubscriptionTopic,
    DescribeProducersResponse: DescribeProducersResponse,
    SendBatchMessagesRequest: SendBatchMessagesRequest,
    DeleteCmqTopicRequest: DeleteCmqTopicRequest,
    SendCmqMsgResponse: SendCmqMsgResponse,
    UnbindCmqDeadLetterRequest: UnbindCmqDeadLetterRequest,
    ModifyCmqQueueAttributeRequest: ModifyCmqQueueAttributeRequest,
    DeleteCmqSubscribeResponse: DeleteCmqSubscribeResponse,
    ModifyEnvironmentAttributesResponse: ModifyEnvironmentAttributesResponse,
    DeleteSubscriptionsRequest: DeleteSubscriptionsRequest,
    EnvironmentRole: EnvironmentRole,

}
