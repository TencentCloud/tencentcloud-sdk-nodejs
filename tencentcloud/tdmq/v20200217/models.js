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
 * ModifyEnvironmentAttributes请求参数结构体
 * @class
 */
class ModifyEnvironmentAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境（命名空间）名称。
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

    }
}

/**
 * 环境信息
 * @class
 */
class Environment extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境（命名空间）名称
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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;

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
 * DescribeEnvironments返回参数结构体
 * @class
 */
class DescribeEnvironmentsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 环境（命名空间）记录数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 环境（命名空间）集合数组。
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
         * 主题名，不支持中字以及除了短线和下划线外的特殊字符且不超过32个字符。
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
         * 备注，字符串最长不超过128。
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
        this.EnvironmentId = 'EnvironmentId' in params ? params.EnvironmentId : null;
        this.MsgTTL = 'MsgTTL' in params ? params.MsgTTL : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
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
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 订阅者名称。
         * @type {string || null}
         */
        this.Subscription = null;

        /**
         * 时间戳，精确到毫秒。
         * @type {number || null}
         */
        this.ToTimestamp = null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnvironmentIds = 'EnvironmentIds' in params ? params.EnvironmentIds : null;

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
         * 环境（命名空间）名称，模糊搜索。
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

    }
}

module.exports = {
    ModifyEnvironmentAttributesRequest: ModifyEnvironmentAttributesRequest,
    DescribeSubscriptionsRequest: DescribeSubscriptionsRequest,
    Environment: Environment,
    DescribeEnvironmentAttributesRequest: DescribeEnvironmentAttributesRequest,
    PartitionsTopic: PartitionsTopic,
    ResetMsgSubOffsetByTimestampResponse: ResetMsgSubOffsetByTimestampResponse,
    DescribeTopicsResponse: DescribeTopicsResponse,
    CreateTopicResponse: CreateTopicResponse,
    DescribeEnvironmentsResponse: DescribeEnvironmentsResponse,
    ModifyTopicResponse: ModifyTopicResponse,
    DescribeProducersRequest: DescribeProducersRequest,
    DescribeEnvironmentAttributesResponse: DescribeEnvironmentAttributesResponse,
    Subscription: Subscription,
    DeleteTopicsResponse: DeleteTopicsResponse,
    SubscriptionTopic: SubscriptionTopic,
    DescribeSubscriptionsResponse: DescribeSubscriptionsResponse,
    DescribeProducersResponse: DescribeProducersResponse,
    CreateTopicRequest: CreateTopicRequest,
    DescribeTopicsRequest: DescribeTopicsRequest,
    DeleteEnvironmentsResponse: DeleteEnvironmentsResponse,
    Connection: Connection,
    DeleteTopicsRequest: DeleteTopicsRequest,
    CreateSubscriptionRequest: CreateSubscriptionRequest,
    ModifyTopicRequest: ModifyTopicRequest,
    Consumer: Consumer,
    FilterSubscription: FilterSubscription,
    ModifyEnvironmentAttributesResponse: ModifyEnvironmentAttributesResponse,
    DeleteSubscriptionsRequest: DeleteSubscriptionsRequest,
    CreateEnvironmentResponse: CreateEnvironmentResponse,
    ResetMsgSubOffsetByTimestampRequest: ResetMsgSubOffsetByTimestampRequest,
    Producer: Producer,
    DeleteSubscriptionsResponse: DeleteSubscriptionsResponse,
    CreateSubscriptionResponse: CreateSubscriptionResponse,
    ConsumersSchedule: ConsumersSchedule,
    DeleteEnvironmentsRequest: DeleteEnvironmentsRequest,
    Topic: Topic,
    DescribeEnvironmentsRequest: DescribeEnvironmentsRequest,
    TopicRecord: TopicRecord,
    CreateEnvironmentRequest: CreateEnvironmentRequest,

}
