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
 * 主题详情
 * @class
 */
class TopicDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题名称
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 主题ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 分区数
         * @type {number || null}
         */
        this.PartitionNum = null;

        /**
         * 副本数
         * @type {number || null}
         */
        this.ReplicaNum = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Note = null;

        /**
         * 创建时间
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 是否开启ip鉴权白名单，true表示开启，false表示不开启
         * @type {boolean || null}
         */
        this.EnableWhiteList = null;

        /**
         * ip白名单中ip个数
         * @type {number || null}
         */
        this.IpWhiteListCount = null;

        /**
         * 数据备份cos bucket: 转存到cos 的bucket地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ForwardCosBucket = null;

        /**
         * 数据备份cos 状态： 1 不开启数据备份，0 开启数据备份
         * @type {number || null}
         */
        this.ForwardStatus = null;

        /**
         * 数据备份到cos的周期频率
         * @type {number || null}
         */
        this.ForwardInterval = null;

        /**
         * 高级配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Config || null}
         */
        this.Config = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.PartitionNum = 'PartitionNum' in params ? params.PartitionNum : null;
        this.ReplicaNum = 'ReplicaNum' in params ? params.ReplicaNum : null;
        this.Note = 'Note' in params ? params.Note : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.EnableWhiteList = 'EnableWhiteList' in params ? params.EnableWhiteList : null;
        this.IpWhiteListCount = 'IpWhiteListCount' in params ? params.IpWhiteListCount : null;
        this.ForwardCosBucket = 'ForwardCosBucket' in params ? params.ForwardCosBucket : null;
        this.ForwardStatus = 'ForwardStatus' in params ? params.ForwardStatus : null;
        this.ForwardInterval = 'ForwardInterval' in params ? params.ForwardInterval : null;

        if (params.Config) {
            let obj = new Config();
            obj.deserialize(params.Config)
            this.Config = obj;
        }

    }
}

/**
 * DeleteAcl请求参数结构体
 * @class
 */
class DeleteAclRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id信息
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Acl资源类型，(0:UNKNOWN，1:ANY，2:TOPIC，3:GROUP，4:CLUSTER，5:TRANSACTIONAL_ID)，当前只有TOPIC，其它字段用于后续兼容开源kafka的acl时使用
         * @type {number || null}
         */
        this.ResourceType = null;

        /**
         * 资源名称，和resourceType相关，如当resourceType为TOPIC时，则该字段表示topic名称，当resourceType为GROUP时，该字段表示group名称
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * Acl操作方式，(0:UNKNOWN，1:ANY，2:ALL，3:READ，4:WRITE，5:CREATE，6:DELETE，7:ALTER，8:DESCRIBE，9:CLUSTER_ACTION，10:DESCRIBE_CONFIGS，11:ALTER_CONFIGS，12:IDEMPOTEN_WRITE)，当前ckafka只支持READ,WRITE，其它用于后续兼容开源kafka的acl时使用
         * @type {number || null}
         */
        this.Operation = null;

        /**
         * 权限类型，(0:UNKNOWN，1:ANY，2:DENY，3:ALLOW)，当前ckakfa支持ALLOW(相当于白名单)，其它用于后续兼容开源kafka的acl时使用
         * @type {number || null}
         */
        this.PermissionType = null;

        /**
         * 默认为\*，表示任何host都可以访问，当前ckafka不支持host为\*，但是后面开源kafka的产品化会直接支持
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 用户列表，默认为*，表示任何user都可以访问，当前用户只能是用户列表中包含的用户
         * @type {string || null}
         */
        this.Principal = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.PermissionType = 'PermissionType' in params ? params.PermissionType : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Principal = 'Principal' in params ? params.Principal : null;

    }
}

/**
 * consumer信息
 * @class
 */
class GroupInfoMember extends  AbstractModel {
    constructor(){
        super();

        /**
         * coordinator 为消费分组中的消费者生成的唯一 ID
         * @type {string || null}
         */
        this.MemberId = null;

        /**
         * 客户消费者 SDK 自己设置的 client.id 信息
         * @type {string || null}
         */
        this.ClientId = null;

        /**
         * 一般存储客户的 IP 地址
         * @type {string || null}
         */
        this.ClientHost = null;

        /**
         * 存储着分配给该消费者的 partition 信息
         * @type {Assignment || null}
         */
        this.Assignment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MemberId = 'MemberId' in params ? params.MemberId : null;
        this.ClientId = 'ClientId' in params ? params.ClientId : null;
        this.ClientHost = 'ClientHost' in params ? params.ClientHost : null;

        if (params.Assignment) {
            let obj = new Assignment();
            obj.deserialize(params.Assignment)
            this.Assignment = obj;
        }

    }
}

/**
 * DeleteUser请求参数结构体
 * @class
 */
class DeleteUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 用户名称
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * 分区和位移
 * @class
 */
class PartitionOffset extends  AbstractModel {
    constructor(){
        super();

        /**
         * Partition,例如"0"或"1"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Partition = null;

        /**
         * Offset,例如100
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Partition = 'Partition' in params ? params.Partition : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeACL请求参数结构体
 * @class
 */
class DescribeACLRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Acl资源类型，(0:UNKNOWN，1:ANY，2:TOPIC，3:GROUP，4:CLUSTER，5:TRANSACTIONAL_ID)，当前只有TOPIC，其它字段用于后续兼容开源kafka的acl时使用
         * @type {number || null}
         */
        this.ResourceType = null;

        /**
         * 资源名称，和resourceType相关，如当resourceType为TOPIC时，则该字段表示topic名称，当resourceType为GROUP时，该字段表示group名称
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * 偏移位置
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 个数限制
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 关键字匹配
         * @type {string || null}
         */
        this.SearchWord = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;

    }
}

/**
 * DescribeTopicAttributes请求参数结构体
 * @class
 */
class DescribeTopicAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 主题名称
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * DescribeInstanceAttributes请求参数结构体
 * @class
 */
class DescribeInstanceAttributesRequest extends  AbstractModel {
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
 * 用户组实体
 * @class
 */
class ConsumerGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户组名称
         * @type {string || null}
         */
        this.ConsumerGroupName = null;

        /**
         * 订阅信息实体
         * @type {Array.<SubscribedInfo> || null}
         */
        this.SubscribedInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConsumerGroupName = 'ConsumerGroupName' in params ? params.ConsumerGroupName : null;

        if (params.SubscribedInfo) {
            this.SubscribedInfo = new Array();
            for (let z in params.SubscribedInfo) {
                let obj = new SubscribedInfo();
                obj.deserialize(params.SubscribedInfo[z]);
                this.SubscribedInfo.push(obj);
            }
        }

    }
}

/**
 * 存储着分配给该消费者的 partition 信息
 * @class
 */
class Assignment extends  AbstractModel {
    constructor(){
        super();

        /**
         * assingment版本信息
         * @type {number || null}
         */
        this.Version = null;

        /**
         * topic信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GroupInfoTopics> || null}
         */
        this.Topics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Version = 'Version' in params ? params.Version : null;

        if (params.Topics) {
            this.Topics = new Array();
            for (let z in params.Topics) {
                let obj = new GroupInfoTopics();
                obj.deserialize(params.Topics[z]);
                this.Topics.push(obj);
            }
        }

    }
}

/**
 * DescribeConsumerGroup返回参数结构体
 * @class
 */
class DescribeConsumerGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的消费分组信息
         * @type {ConsumerGroupResponse || null}
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

        if (params.Result) {
            let obj = new ConsumerGroupResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTopic请求参数结构体
 * @class
 */
class DeleteTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ckafka 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * ckafka 主题名称
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

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
         * 返回的结果
         * @type {InstanceResponse || null}
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

        if (params.Result) {
            let obj = new InstanceResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GroupInfo内部topic对象
 * @class
 */
class GroupInfoTopics extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分配的 topic 名称
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * 分配的 partition 信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Partitions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.Partitions = 'Partitions' in params ? params.Partitions : null;

    }
}

/**
 * 统一返回的TopicResponse
 * @class
 */
class TopicResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的主题信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Topic> || null}
         */
        this.TopicList = null;

        /**
         * 符合条件的 topic 数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

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
                let obj = new Topic();
                obj.deserialize(params.TopicList[z]);
                this.TopicList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * DescribeInstancesDetail返回参数结构体
 * @class
 */
class DescribeInstancesDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的实例详情结果对象
         * @type {InstanceDetailResponse || null}
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

        if (params.Result) {
            let obj = new InstanceDetailResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 创建预付费接口返回的Data
 * @class
 */
class CreateInstancePreData extends  AbstractModel {
    constructor(){
        super();

        /**
         * CreateInstancePre返回固定为0，不能作为CheckTaskStatus的查询条件。只是为了保证和后台数据结构对齐。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 订单号列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.DealNames = 'DealNames' in params ? params.DealNames : null;

    }
}

/**
 * DescribeACL返回参数结构体
 * @class
 */
class DescribeACLResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的ACL结果集对象
         * @type {AclResponse || null}
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

        if (params.Result) {
            let obj = new AclResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 操作型结果返回值
 * @class
 */
class JgwOperateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的code，0为正常，非0为错误
         * @type {string || null}
         */
        this.ReturnCode = null;

        /**
         * 成功消息
         * @type {string || null}
         */
        this.ReturnMessage = null;

        /**
         * 操作型返回的Data数据,可能有flowId等
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OperateResponseData || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.ReturnMessage = 'ReturnMessage' in params ? params.ReturnMessage : null;

        if (params.Data) {
            let obj = new OperateResponseData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }

    }
}

/**
 * 返回的topic对象
 * @class
 */
class Topic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题的ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 主题的名称
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Note = null;

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
        this.Note = 'Note' in params ? params.Note : null;

    }
}

/**
 * 实例详情中的标签对象
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签的key
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签的值
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
 * DescribeGroup的返回
 * @class
 */
class GroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * GroupList
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DescribeGroup> || null}
         */
        this.GroupList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.GroupList) {
            this.GroupList = new Array();
            for (let z in params.GroupList) {
                let obj = new DescribeGroup();
                obj.deserialize(params.GroupList[z]);
                this.GroupList.push(obj);
            }
        }

    }
}

/**
 * DescribeTopicAttributes返回参数结构体
 * @class
 */
class DescribeTopicAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的结果对象
         * @type {TopicAttributesResponse || null}
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

        if (params.Result) {
            let obj = new TopicAttributesResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 路由信息返回对象
 * @class
 */
class RouteResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Route> || null}
         */
        this.Routers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Routers) {
            this.Routers = new Array();
            for (let z in params.Routers) {
                let obj = new Route();
                obj.deserialize(params.Routers[z]);
                this.Routers.push(obj);
            }
        }

    }
}

/**
 * DescribeGroup返回参数结构体
 * @class
 */
class DescribeGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果集列表
         * @type {GroupResponse || null}
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

        if (params.Result) {
            let obj = new GroupResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 修改实例属性的配置对象
 * @class
 */
class ModifyInstanceAttributesConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自动创建 true 表示开启，false 表示不开启
         * @type {boolean || null}
         */
        this.AutoCreateTopicEnable = null;

        /**
         * 可选，如果auto.create.topic.enable设置为true没有设置该值时，默认设置为3
         * @type {number || null}
         */
        this.DefaultNumPartitions = null;

        /**
         * 如歌auto.create.topic.enable设置为true没有指定该值时默认设置为2
         * @type {number || null}
         */
        this.DefaultReplicationFactor = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoCreateTopicEnable = 'AutoCreateTopicEnable' in params ? params.AutoCreateTopicEnable : null;
        this.DefaultNumPartitions = 'DefaultNumPartitions' in params ? params.DefaultNumPartitions : null;
        this.DefaultReplicationFactor = 'DefaultReplicationFactor' in params ? params.DefaultReplicationFactor : null;

    }
}

/**
 * 操作类型返回的Data结构
 * @class
 */
class OperateResponseData extends  AbstractModel {
    constructor(){
        super();

        /**
         * FlowId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

    }
}

/**
 * CreateUser返回参数结构体
 * @class
 */
class CreateUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的结果
         * @type {JgwOperateResponse || null}
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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 消费分组主题对象
 * @class
 */
class GroupOffsetTopic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题名称
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * 该主题分区数组，其中每个元素为一个 json object
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GroupOffsetPartition> || null}
         */
        this.Partitions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Topic = 'Topic' in params ? params.Topic : null;

        if (params.Partitions) {
            this.Partitions = new Array();
            for (let z in params.Partitions) {
                let obj = new GroupOffsetPartition();
                obj.deserialize(params.Partitions[z]);
                this.Partitions.push(obj);
            }
        }

    }
}

/**
 * CreatePartition返回参数结构体
 * @class
 */
class CreatePartitionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的结果集
         * @type {JgwOperateResponse || null}
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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteUser返回参数结构体
 * @class
 */
class DeleteUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
         * @type {JgwOperateResponse || null}
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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAcl请求参数结构体
 * @class
 */
class CreateAclRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id信息
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Acl资源类型，(0:UNKNOWN，1:ANY，2:TOPIC，3:GROUP，4:CLUSTER，5:TRANSACTIONAL_ID)，当前只有TOPIC，其它字段用于后续兼容开源kafka的acl时使用
         * @type {number || null}
         */
        this.ResourceType = null;

        /**
         * 资源名称，和resourceType相关，如当resourceType为TOPIC时，则该字段表示topic名称，当resourceType为GROUP时，该字段表示group名称
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * Acl操作方式，(0:UNKNOWN，1:ANY，2:ALL，3:READ，4:WRITE，5:CREATE，6:DELETE，7:ALTER，8:DESCRIBE，9:CLUSTER_ACTION，10:DESCRIBE_CONFIGS，11:ALTER_CONFIGS)
         * @type {number || null}
         */
        this.Operation = null;

        /**
         * 权限类型，(0:UNKNOWN，1:ANY，2:DENY，3:ALLOW)，当前ckakfa支持ALLOW(相当于白名单)，其它用于后续兼容开源kafka的acl时使用
         * @type {number || null}
         */
        this.PermissionType = null;

        /**
         * 默认为\*，表示任何host都可以访问，当前ckafka不支持host为\*，但是后面开源kafka的产品化会直接支持
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 用户列表，默认为*，表示任何user都可以访问，当前用户只能是用户列表中包含的用户
         * @type {string || null}
         */
        this.Principal = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.PermissionType = 'PermissionType' in params ? params.PermissionType : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Principal = 'Principal' in params ? params.Principal : null;

    }
}

/**
 * DescribeAppInfo请求参数结构体
 * @class
 */
class DescribeAppInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移位置
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 本次查询用户数目最大数量限制，最大值为50，默认50
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
 * DescribeTopic返回参数结构体
 * @class
 */
class DescribeTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TopicResult || null}
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

        if (params.Result) {
            let obj = new TopicResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 消费组返回结果实体
 * @class
 */
class ConsumerGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的消费组数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 主题列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ConsumerGroupTopic> || null}
         */
        this.TopicList = null;

        /**
         * 消费分组List
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ConsumerGroup> || null}
         */
        this.GroupList = null;

        /**
         * 所有分区数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalPartition = null;

        /**
         * 监控的分区列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Partition> || null}
         */
        this.PartitionListForMonitor = null;

        /**
         * 主题总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalTopic = null;

        /**
         * 监控的主题列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ConsumerGroupTopic> || null}
         */
        this.TopicListForMonitor = null;

        /**
         * 监控的组列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Group> || null}
         */
        this.GroupListForMonitor = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.TopicList) {
            this.TopicList = new Array();
            for (let z in params.TopicList) {
                let obj = new ConsumerGroupTopic();
                obj.deserialize(params.TopicList[z]);
                this.TopicList.push(obj);
            }
        }

        if (params.GroupList) {
            this.GroupList = new Array();
            for (let z in params.GroupList) {
                let obj = new ConsumerGroup();
                obj.deserialize(params.GroupList[z]);
                this.GroupList.push(obj);
            }
        }
        this.TotalPartition = 'TotalPartition' in params ? params.TotalPartition : null;

        if (params.PartitionListForMonitor) {
            this.PartitionListForMonitor = new Array();
            for (let z in params.PartitionListForMonitor) {
                let obj = new Partition();
                obj.deserialize(params.PartitionListForMonitor[z]);
                this.PartitionListForMonitor.push(obj);
            }
        }
        this.TotalTopic = 'TotalTopic' in params ? params.TotalTopic : null;

        if (params.TopicListForMonitor) {
            this.TopicListForMonitor = new Array();
            for (let z in params.TopicListForMonitor) {
                let obj = new ConsumerGroupTopic();
                obj.deserialize(params.TopicListForMonitor[z]);
                this.TopicListForMonitor.push(obj);
            }
        }

        if (params.GroupListForMonitor) {
            this.GroupListForMonitor = new Array();
            for (let z in params.GroupListForMonitor) {
                let obj = new Group();
                obj.deserialize(params.GroupListForMonitor[z]);
                this.GroupListForMonitor.push(obj);
            }
        }

    }
}

/**
 * CreateTopicIpWhiteList返回参数结构体
 * @class
 */
class CreateTopicIpWhiteListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除主题IP白名单结果
         * @type {JgwOperateResponse || null}
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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstanceAttributes返回参数结构体
 * @class
 */
class ModifyInstanceAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
         * @type {JgwOperateResponse || null}
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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyGroupOffsets返回参数结构体
 * @class
 */
class ModifyGroupOffsetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
         * @type {JgwOperateResponse || null}
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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 分区实体
 * @class
 */
class Partition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分区ID
         * @type {number || null}
         */
        this.PartitionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PartitionId = 'PartitionId' in params ? params.PartitionId : null;

    }
}

/**
 * CreateAcl返回参数结构体
 * @class
 */
class CreateAclResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
         * @type {JgwOperateResponse || null}
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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
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
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 主题名称，是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Partition个数，大于0
         * @type {number || null}
         */
        this.PartitionNum = null;

        /**
         * 副本个数，不能多于 broker 数，最大为3
         * @type {number || null}
         */
        this.ReplicaNum = null;

        /**
         * ip白名单开关, 1:打开  0:关闭，默认不打开
         * @type {number || null}
         */
        this.EnableWhiteList = null;

        /**
         * Ip白名单列表，配额限制，enableWhileList=1时必选
         * @type {Array.<string> || null}
         */
        this.IpWhiteList = null;

        /**
         * 清理日志策略，日志清理模式，默认为"delete"。"delete"：日志按保存时间删除，"compact"：日志按 key 压缩，"compact, delete"：日志按 key 压缩且会按保存时间删除。
         * @type {string || null}
         */
        this.CleanUpPolicy = null;

        /**
         * 主题备注，是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)
         * @type {string || null}
         */
        this.Note = null;

        /**
         * 默认为1
         * @type {number || null}
         */
        this.MinInsyncReplicas = null;

        /**
         * 是否允许未同步的副本选为leader，false:不允许，true:允许，默认不允许
         * @type {number || null}
         */
        this.UncleanLeaderElectionEnable = null;

        /**
         * 可消息选。保留时间，单位ms，当前最小值为60000ms
         * @type {number || null}
         */
        this.RetentionMs = null;

        /**
         * Segment分片滚动的时长，单位ms，当前最小为3600000ms
         * @type {number || null}
         */
        this.SegmentMs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.PartitionNum = 'PartitionNum' in params ? params.PartitionNum : null;
        this.ReplicaNum = 'ReplicaNum' in params ? params.ReplicaNum : null;
        this.EnableWhiteList = 'EnableWhiteList' in params ? params.EnableWhiteList : null;
        this.IpWhiteList = 'IpWhiteList' in params ? params.IpWhiteList : null;
        this.CleanUpPolicy = 'CleanUpPolicy' in params ? params.CleanUpPolicy : null;
        this.Note = 'Note' in params ? params.Note : null;
        this.MinInsyncReplicas = 'MinInsyncReplicas' in params ? params.MinInsyncReplicas : null;
        this.UncleanLeaderElectionEnable = 'UncleanLeaderElectionEnable' in params ? params.UncleanLeaderElectionEnable : null;
        this.RetentionMs = 'RetentionMs' in params ? params.RetentionMs : null;
        this.SegmentMs = 'SegmentMs' in params ? params.SegmentMs : null;

    }
}

/**
 * DeleteAcl返回参数结构体
 * @class
 */
class DeleteAclResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
         * @type {JgwOperateResponse || null}
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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRoute请求参数结构体
 * @class
 */
class DescribeRouteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例唯一id
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
 * 实例配置实体
 * @class
 */
class InstanceConfigDO extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否自动创建主题
         * @type {boolean || null}
         */
        this.AutoCreateTopicsEnable = null;

        /**
         * 分区数
         * @type {number || null}
         */
        this.DefaultNumPartitions = null;

        /**
         * 默认的复制Factor
         * @type {number || null}
         */
        this.DefaultReplicationFactor = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoCreateTopicsEnable = 'AutoCreateTopicsEnable' in params ? params.AutoCreateTopicsEnable : null;
        this.DefaultNumPartitions = 'DefaultNumPartitions' in params ? params.DefaultNumPartitions : null;
        this.DefaultReplicationFactor = 'DefaultReplicationFactor' in params ? params.DefaultReplicationFactor : null;

    }
}

/**
 * 用户返回实体
 * @class
 */
class UserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的用户列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<User> || null}
         */
        this.Users = null;

        /**
         * 符合条件的总用户数
         * @type {number || null}
         */
        this.TotalCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Users) {
            this.Users = new Array();
            for (let z in params.Users) {
                let obj = new User();
                obj.deserialize(params.Users[z]);
                this.Users.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * DescribeGroupInfo请求参数结构体
 * @class
 */
class DescribeGroupInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * （过滤条件）按照实例 ID 过滤。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Kafka 消费分组，Consumer-group，这里是数组形式，格式：GroupList.0=xxx&GroupList.1=yyy。
         * @type {Array.<string> || null}
         */
        this.GroupList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.GroupList = 'GroupList' in params ? params.GroupList : null;

    }
}

/**
 * DescribeGroupInfo返回参数结构体
 * @class
 */
class DescribeGroupInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GroupInfoResponse> || null}
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

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new GroupInfoResponse();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUser返回参数结构体
 * @class
 */
class DescribeUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果列表
         * @type {UserResponse || null}
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

        if (params.Result) {
            let obj = new UserResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AppId的查询结果
 * @class
 */
class AppIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合要求的所有AppId数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 符合要求的App Id列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.AppIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.AppIdList = 'AppIdList' in params ? params.AppIdList : null;

    }
}

/**
 * DescribeTopic请求参数结构体
 * @class
 */
class DescribeTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 过滤条件，按照 topicName 过滤，支持模糊查询
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * 偏移量，不填默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，不填则默认为10，最大值为50
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
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * CreatePartition请求参数结构体
 * @class
 */
class CreatePartitionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 主题名称
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 主题分区个数
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.PartitionNum = 'PartitionNum' in params ? params.PartitionNum : null;

    }
}

/**
 * 组实体
 * @class
 */
class Group extends  AbstractModel {
    constructor(){
        super();

        /**
         * 组名称
         * @type {string || null}
         */
        this.GroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupName = 'GroupName' in params ? params.GroupName : null;

    }
}

/**
 * DescribeAppInfo返回参数结构体
 * @class
 */
class DescribeAppInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的符合要求的App Id列表
         * @type {AppIdResponse || null}
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

        if (params.Result) {
            let obj = new AppIdResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ACL返回结果集
 * @class
 */
class AclResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的总数据条数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * ACL列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Acl> || null}
         */
        this.AclList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.AclList) {
            this.AclList = new Array();
            for (let z in params.AclList) {
                let obj = new Acl();
                obj.deserialize(params.AclList[z]);
                this.AclList.push(obj);
            }
        }

    }
}

/**
 * 实例对象
 * @class
 */
class Instance extends  AbstractModel {
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
         * 实例的状态。0：创建中，1：运行中，2：删除中 ， 5 隔离中，-1 创建失败
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 是否开源实例。开源：true，不开源：false
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IfCommunity = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.IfCommunity = 'IfCommunity' in params ? params.IfCommunity : null;

    }
}

/**
 * DescribeInstanceAttributes返回参数结构体
 * @class
 */
class DescribeInstanceAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例属性返回结果对象
         * @type {InstanceAttributesResponse || null}
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

        if (params.Result) {
            let obj = new InstanceAttributesResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 主题详情返回实体
 * @class
 */
class TopicDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的主题详情列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TopicDetail> || null}
         */
        this.TopicList = null;

        /**
         * 符合条件的所有主题详情数量
         * @type {number || null}
         */
        this.TotalCount = null;

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
                let obj = new TopicDetail();
                obj.deserialize(params.TopicList[z]);
                this.TopicList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * 高级配置对象
 * @class
 */
class Config extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消息保留时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Retention = null;

        /**
         * 最小同步复制数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MinInsyncReplicas = null;

        /**
         * 日志清理模式，默认 delete。
delete：日志按保存时间删除；compact：日志按 key 压缩；compact, delete：日志按 key 压缩且会保存时间删除。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CleanUpPolicy = null;

        /**
         * Segment 分片滚动的时长
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SegmentMs = null;

        /**
         * 0表示 false。 1表示 true。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UncleanLeaderElectionEnable = null;

        /**
         * Segment 分片滚动的字节数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SegmentBytes = null;

        /**
         * 最大消息字节数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxMessageBytes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Retention = 'Retention' in params ? params.Retention : null;
        this.MinInsyncReplicas = 'MinInsyncReplicas' in params ? params.MinInsyncReplicas : null;
        this.CleanUpPolicy = 'CleanUpPolicy' in params ? params.CleanUpPolicy : null;
        this.SegmentMs = 'SegmentMs' in params ? params.SegmentMs : null;
        this.UncleanLeaderElectionEnable = 'UncleanLeaderElectionEnable' in params ? params.UncleanLeaderElectionEnable : null;
        this.SegmentBytes = 'SegmentBytes' in params ? params.SegmentBytes : null;
        this.MaxMessageBytes = 'MaxMessageBytes' in params ? params.MaxMessageBytes : null;

    }
}

/**
 * ModifyPassword请求参数结构体
 * @class
 */
class ModifyPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 用户名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 用户当前密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 用户新密码
         * @type {string || null}
         */
        this.PasswordNew = null;

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
        this.Password = 'Password' in params ? params.Password : null;
        this.PasswordNew = 'PasswordNew' in params ? params.PasswordNew : null;

    }
}

/**
 * ModifyInstanceAttributes请求参数结构体
 * @class
 */
class ModifyInstanceAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例日志的最长保留时间，单位分钟，最大30天，0代表不开启日志保留时间回收策略
         * @type {number || null}
         */
        this.MsgRetentionTime = null;

        /**
         * 实例名称，是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例配置
         * @type {ModifyInstanceAttributesConfig || null}
         */
        this.Config = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.MsgRetentionTime = 'MsgRetentionTime' in params ? params.MsgRetentionTime : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

        if (params.Config) {
            let obj = new ModifyInstanceAttributesConfig();
            obj.deserialize(params.Config)
            this.Config = obj;
        }

    }
}

/**
 * ModifyTopicAttributes返回参数结构体
 * @class
 */
class ModifyTopicAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果集
         * @type {JgwOperateResponse || null}
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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeConsumerGroup请求参数结构体
 * @class
 */
class DescribeConsumerGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ckafka实例id。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 可选，用户需要查询的group名称。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 可选，用户需要查询的group中的对应的topic名称，如果指定了该参数，而group又未指定则忽略该参数。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 本次返回个数限制
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移位置
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * 虚拟IP实体
 * @class
 */
class VipEntity extends  AbstractModel {
    constructor(){
        super();

        /**
         * 虚拟IP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 虚拟端口
         * @type {string || null}
         */
        this.Vport = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;

    }
}

/**
 * 消费组主题对象
 * @class
 */
class ConsumerGroupTopic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 主题名称
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * 用户实体
 * @class
 */
class User extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户id
         * @type {number || null}
         */
        this.UserId = null;

        /**
         * 用户名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 最后更新时间
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
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 组偏移量分区对象
 * @class
 */
class GroupOffsetPartition extends  AbstractModel {
    constructor(){
        super();

        /**
         * topic 的 partitionId
         * @type {number || null}
         */
        this.Partition = null;

        /**
         * consumer 提交的 offset 位置
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 支持消费者提交消息时，传入 metadata 作为它用，当前一般为空字符串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Metadata = null;

        /**
         * 错误码
         * @type {number || null}
         */
        this.ErrorCode = null;

        /**
         * 当前 partition 最新的 offset
         * @type {number || null}
         */
        this.LogEndOffset = null;

        /**
         * 未消费的消息个数
         * @type {number || null}
         */
        this.Lag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Partition = 'Partition' in params ? params.Partition : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Metadata = 'Metadata' in params ? params.Metadata : null;
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.LogEndOffset = 'LogEndOffset' in params ? params.LogEndOffset : null;
        this.Lag = 'Lag' in params ? params.Lag : null;

    }
}

/**
 * DeleteTopic返回参数结构体
 * @class
 */
class DeleteTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的结果集
         * @type {JgwOperateResponse || null}
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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * （过滤条件）按照实例ID过滤
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * （过滤条件）按照实例名称过滤，支持模糊查询
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * （过滤条件）实例的状态。0：创建中，1：运行中，2：删除中，不填默认返回全部
         * @type {Array.<number> || null}
         */
        this.Status = null;

        /**
         * 偏移量，不填默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，不填则默认10，最大值100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 匹配标签key值。
         * @type {string || null}
         */
        this.TagKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;

    }
}

/**
 * 实例属性返回结果对象
 * @class
 */
class InstanceAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 接入点 VIP 列表信息
         * @type {Array.<VipEntity> || null}
         */
        this.VipList = null;

        /**
         * 虚拟IP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 虚拟端口
         * @type {string || null}
         */
        this.Vport = null;

        /**
         * 实例的状态。0：创建中，1：运行中，2：删除中
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 实例带宽，单位：Mbps
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 实例的存储大小，单位：GB
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 可用区
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * VPC 的 ID，为空表示是基础网络
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网 ID， 为空表示基础网络
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 实例健康状态， 1：健康，2：告警，3：异常
         * @type {number || null}
         */
        this.Healthy = null;

        /**
         * 实例健康信息，当前会展示磁盘利用率，最大长度为256
         * @type {string || null}
         */
        this.HealthyMessage = null;

        /**
         * 创建时间
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 消息保存时间,单位为分钟
         * @type {number || null}
         */
        this.MsgRetentionTime = null;

        /**
         * 自动创建 Topic 配置， 若该字段为空，则表示未开启自动创建
         * @type {InstanceConfigDO || null}
         */
        this.Config = null;

        /**
         * 剩余创建分区数
         * @type {number || null}
         */
        this.RemainderPartitions = null;

        /**
         * 剩余创建主题数
         * @type {number || null}
         */
        this.RemainderTopics = null;

        /**
         * 当前创建分区数
         * @type {number || null}
         */
        this.CreatedPartitions = null;

        /**
         * 当前创建主题数
         * @type {number || null}
         */
        this.CreatedTopics = null;

        /**
         * 标签数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * 跨可用区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.ZoneIds = null;

        /**
         * kafka版本信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 最大分组数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxGroupNum = null;

        /**
         * 售卖类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Cvm = null;

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

        if (params.VipList) {
            this.VipList = new Array();
            for (let z in params.VipList) {
                let obj = new VipEntity();
                obj.deserialize(params.VipList[z]);
                this.VipList.push(obj);
            }
        }
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Healthy = 'Healthy' in params ? params.Healthy : null;
        this.HealthyMessage = 'HealthyMessage' in params ? params.HealthyMessage : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.MsgRetentionTime = 'MsgRetentionTime' in params ? params.MsgRetentionTime : null;

        if (params.Config) {
            let obj = new InstanceConfigDO();
            obj.deserialize(params.Config)
            this.Config = obj;
        }
        this.RemainderPartitions = 'RemainderPartitions' in params ? params.RemainderPartitions : null;
        this.RemainderTopics = 'RemainderTopics' in params ? params.RemainderTopics : null;
        this.CreatedPartitions = 'CreatedPartitions' in params ? params.CreatedPartitions : null;
        this.CreatedTopics = 'CreatedTopics' in params ? params.CreatedTopics : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.MaxGroupNum = 'MaxGroupNum' in params ? params.MaxGroupNum : null;
        this.Cvm = 'Cvm' in params ? params.Cvm : null;

    }
}

/**
 * DescribeGroup请求参数结构体
 * @class
 */
class DescribeGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 搜索关键字
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 最大返回数量
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
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 查询过滤器
>描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等
> * 若存在多个`Filter`时，`Filter`间的关系为逻辑与（`AND`）关系。
> * 若同一个`Filter`存在多个`Values`，同一`Filter`下`Values`间的关系为逻辑或（`OR`）关系。
>

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
 * 消费组偏移量返回结果
 * @class
 */
class GroupOffsetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合调节的总结果数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 该主题分区数组，其中每个元素为一个 json object
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<GroupOffsetTopic> || null}
         */
        this.TopicList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.TopicList) {
            this.TopicList = new Array();
            for (let z in params.TopicList) {
                let obj = new GroupOffsetTopic();
                obj.deserialize(params.TopicList[z]);
                this.TopicList.push(obj);
            }
        }

    }
}

/**
 * CreateUser请求参数结构体
 * @class
 */
class CreateUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 用户名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 用户密码
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * DeleteTopicIpWhiteList返回参数结构体
 * @class
 */
class DeleteTopicIpWhiteListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除主题IP白名单结果
         * @type {JgwOperateResponse || null}
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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 创建预付费实例返回结构
 * @class
 */
class CreateInstancePreResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的code，0为正常，非0为错误
         * @type {string || null}
         */
        this.ReturnCode = null;

        /**
         * 成功消息
         * @type {string || null}
         */
        this.ReturnMessage = null;

        /**
         * 操作型返回的Data数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CreateInstancePreData || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReturnCode = 'ReturnCode' in params ? params.ReturnCode : null;
        this.ReturnMessage = 'ReturnMessage' in params ? params.ReturnMessage : null;

        if (params.Data) {
            let obj = new CreateInstancePreData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }

    }
}

/**
 * DescribeInstancesDetail请求参数结构体
 * @class
 */
class DescribeInstancesDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * （过滤条件）按照实例ID过滤
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * （过滤条件）按照实例名称过滤，支持模糊查询
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * （过滤条件）实例的状态。0：创建中，1：运行中，2：删除中，不填默认返回全部
         * @type {Array.<number> || null}
         */
        this.Status = null;

        /**
         * 偏移量，不填默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，不填则默认10，最大值20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 匹配标签key值。
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 过滤器
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
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.TagKey = 'TagKey' in params ? params.TagKey : null;

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
 * ModifyPassword返回参数结构体
 * @class
 */
class ModifyPasswordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
         * @type {JgwOperateResponse || null}
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

        if (params.Result) {
            let obj = new JgwOperateResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例详情返回结果
 * @class
 */
class InstanceDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的实例总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 符合条件的实例详情列表
         * @type {Array.<InstanceDetail> || null}
         */
        this.InstanceList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.InstanceList) {
            this.InstanceList = new Array();
            for (let z in params.InstanceList) {
                let obj = new InstanceDetail();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }

    }
}

/**
 * GroupInfo返回数据的实体
 * @class
 */
class GroupInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码，正常为0
         * @type {string || null}
         */
        this.ErrorCode = null;

        /**
         * group 状态描述（常见的为 Empty、Stable、Dead 三种状态）：
Dead：消费分组不存在
Empty：消费分组，当前没有任何消费者订阅
PreparingRebalance：消费分组处于 rebalance 状态
CompletingRebalance：消费分组处于 rebalance 状态
Stable：消费分组中各个消费者已经加入，处于稳定状态
         * @type {string || null}
         */
        this.State = null;

        /**
         * 消费分组选择的协议类型正常的消费者一般为 consumer 但有些系统采用了自己的协议如 kafka-connect 用的就是 connect。只有标准的 consumer 协议，本接口才知道具体的分配方式的格式，才能解析到具体的 partition 的分配情况
         * @type {string || null}
         */
        this.ProtocolType = null;

        /**
         * 消费者 partition 分配算法常见的有如下几种(Kafka 消费者 SDK 默认的选择项为 range)：range、 roundrobin、 sticky
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 仅当 state 为 Stable 且 protocol_type 为 consumer 时， 该数组才包含信息
         * @type {Array.<GroupInfoMember> || null}
         */
        this.Members = null;

        /**
         * Kafka 消费分组
         * @type {string || null}
         */
        this.Group = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.State = 'State' in params ? params.State : null;
        this.ProtocolType = 'ProtocolType' in params ? params.ProtocolType : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

        if (params.Members) {
            this.Members = new Array();
            for (let z in params.Members) {
                let obj = new GroupInfoMember();
                obj.deserialize(params.Members[z]);
                this.Members.push(obj);
            }
        }
        this.Group = 'Group' in params ? params.Group : null;

    }
}

/**
 * 主题属性返回结果实体
 * @class
 */
class TopicAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题 ID
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 创建时间
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 主题备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Note = null;

        /**
         * 分区个数
         * @type {number || null}
         */
        this.PartitionNum = null;

        /**
         * IP 白名单开关，1：打开； 0：关闭
         * @type {number || null}
         */
        this.EnableWhiteList = null;

        /**
         * IP 白名单列表
         * @type {Array.<string> || null}
         */
        this.IpWhiteList = null;

        /**
         * topic 配置数组
         * @type {Config || null}
         */
        this.Config = null;

        /**
         * 分区详情
         * @type {Array.<TopicPartitionDO> || null}
         */
        this.Partitions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Note = 'Note' in params ? params.Note : null;
        this.PartitionNum = 'PartitionNum' in params ? params.PartitionNum : null;
        this.EnableWhiteList = 'EnableWhiteList' in params ? params.EnableWhiteList : null;
        this.IpWhiteList = 'IpWhiteList' in params ? params.IpWhiteList : null;

        if (params.Config) {
            let obj = new Config();
            obj.deserialize(params.Config)
            this.Config = obj;
        }

        if (params.Partitions) {
            this.Partitions = new Array();
            for (let z in params.Partitions) {
                let obj = new TopicPartitionDO();
                obj.deserialize(params.Partitions[z]);
                this.Partitions.push(obj);
            }
        }

    }
}

/**
 * 聚合的实例状态返回结果
 * @class
 */
class InstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的实例列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Instance> || null}
         */
        this.InstanceList = null;

        /**
         * 符合条件的结果总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstanceList) {
            this.InstanceList = new Array();
            for (let z in params.InstanceList) {
                let obj = new Instance();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * DescribeGroup返回实体
 * @class
 */
class DescribeGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * groupId
         * @type {string || null}
         */
        this.Group = null;

        /**
         * 该 group 使用的协议。
         * @type {string || null}
         */
        this.Protocol = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Group = 'Group' in params ? params.Group : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

    }
}

/**
 * 分区详情
 * @class
 */
class TopicPartitionDO extends  AbstractModel {
    constructor(){
        super();

        /**
         * Partition ID
         * @type {number || null}
         */
        this.Partition = null;

        /**
         * Leader 运行状态
         * @type {number || null}
         */
        this.LeaderStatus = null;

        /**
         * ISR 个数
         * @type {number || null}
         */
        this.IsrNum = null;

        /**
         * 副本个数
         * @type {number || null}
         */
        this.ReplicaNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Partition = 'Partition' in params ? params.Partition : null;
        this.LeaderStatus = 'LeaderStatus' in params ? params.LeaderStatus : null;
        this.IsrNum = 'IsrNum' in params ? params.IsrNum : null;
        this.ReplicaNum = 'ReplicaNum' in params ? params.ReplicaNum : null;

    }
}

/**
 * 创建主题返回
 * @class
 */
class CreateTopicResp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主题Id
         * @type {string || null}
         */
        this.TopicId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;

    }
}

/**
 * DescribeRoute返回参数结构体
 * @class
 */
class DescribeRouteResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的路由信息结果集
         * @type {RouteResponse || null}
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

        if (params.Result) {
            let obj = new RouteResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTopicDetail请求参数结构体
 * @class
 */
class DescribeTopicDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * （过滤条件）按照topicName过滤，支持模糊查询
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * 偏移量，不填默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，不填则默认 10，最大值20，取值要大于0
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
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeGroupOffsets返回参数结构体
 * @class
 */
class DescribeGroupOffsetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的结果对象
         * @type {GroupOffsetResponse || null}
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

        if (params.Result) {
            let obj = new GroupOffsetResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyGroupOffsets请求参数结构体
 * @class
 */
class ModifyGroupOffsetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * kafka实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * kafka 消费分组
         * @type {string || null}
         */
        this.Group = null;

        /**
         * 重置offset的策略，入参含义 0. 对齐shift-by参数，代表把offset向前或向后移动shift条 1. 对齐参考(by-duration,to-datetime,to-earliest,to-latest),代表把offset移动到指定timestamp的位置 2. 对齐参考(to-offset)，代表把offset移动到指定的offset位置
         * @type {number || null}
         */
        this.Strategy = null;

        /**
         * 表示需要重置的topics， 不填表示全部
         * @type {Array.<string> || null}
         */
        this.Topics = null;

        /**
         * 当strategy为0时，必须包含该字段，可以大于零代表会把offset向后移动shift条，小于零则将offset向前回溯shift条数。正确重置后新的offset应该是(old_offset + shift)，需要注意的是如果新的offset小于partition的earliest则会设置为earliest，如果大于partition 的latest则会设置为latest
         * @type {number || null}
         */
        this.Shift = null;

        /**
         * 单位ms。当strategy为1时，必须包含该字段，其中-2表示重置offset到最开始的位置，-1表示重置到最新的位置(相当于清空)，其它值则代表指定的时间，会获取topic中指定时间的offset然后进行重置，需要注意的时，如果指定的时间不存在消息，则获取最末尾的offset。
         * @type {number || null}
         */
        this.ShiftTimestamp = null;

        /**
         * 需要重新设置的offset位置。当strategy为2，必须包含该字段。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Group = 'Group' in params ? params.Group : null;
        this.Strategy = 'Strategy' in params ? params.Strategy : null;
        this.Topics = 'Topics' in params ? params.Topics : null;
        this.Shift = 'Shift' in params ? params.Shift : null;
        this.ShiftTimestamp = 'ShiftTimestamp' in params ? params.ShiftTimestamp : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * CreateTopicIpWhiteList请求参数结构体
 * @class
 */
class CreateTopicIpWhiteListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 主题名称
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * ip白名单列表
         * @type {Array.<string> || null}
         */
        this.IpWhiteList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.IpWhiteList = 'IpWhiteList' in params ? params.IpWhiteList : null;

    }
}

/**
 * 路由实体对象
 * @class
 */
class Route extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例接入方式
0：PLAINTEXT (明文方式，没有带用户信息老版本及社区版本都支持)
1：SASL_PLAINTEXT（明文方式，不过在数据开始时，会通过SASL方式登录鉴权，仅社区版本支持）
2：SSL（SSL加密通信，没有带用户信息，老版本及社区版本都支持）
3：SASL_SSL（SSL加密通信，在数据开始时，会通过SASL方式登录鉴权，仅社区版本支持）
         * @type {number || null}
         */
        this.AccessType = null;

        /**
         * 路由ID
         * @type {number || null}
         */
        this.RouteId = null;

        /**
         * vip网络类型（1:外网TGW  2:基础网络 3:VPC网络 4:腾讯云支持环境(一般用于内部实例) 5:SSL外网访问方式访问 6:黑石环境vpc）
         * @type {number || null}
         */
        this.VipType = null;

        /**
         * 虚拟IP列表
         * @type {Array.<VipEntity> || null}
         */
        this.VipList = null;

        /**
         * 域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名port
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DomainPort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessType = 'AccessType' in params ? params.AccessType : null;
        this.RouteId = 'RouteId' in params ? params.RouteId : null;
        this.VipType = 'VipType' in params ? params.VipType : null;

        if (params.VipList) {
            this.VipList = new Array();
            for (let z in params.VipList) {
                let obj = new VipEntity();
                obj.deserialize(params.VipList[z]);
                this.VipList.push(obj);
            }
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DomainPort = 'DomainPort' in params ? params.DomainPort : null;

    }
}

/**
 * ACL对象实体
 * @class
 */
class Acl extends  AbstractModel {
    constructor(){
        super();

        /**
         * Acl资源类型，（0:UNKNOWN，1:ANY，2:TOPIC，3:GROUP，4:CLUSTER，5:TRANSACTIONAL_ID）当前只有TOPIC，
         * @type {number || null}
         */
        this.ResourceType = null;

        /**
         * 资源名称，和resourceType相关如当resourceType为TOPIC时，则该字段表示topic名称，当resourceType为GROUP时，该字段表示group名称
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * 用户列表，默认为User:*，表示任何user都可以访问，当前用户只能是用户列表中包含的用户
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Principal = null;

        /**
         * 默认为*，表示任何host都可以访问，当前ckafka不支持host为*，但是后面开源kafka的产品化会直接支持
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Host = null;

        /**
         * Acl操作方式(0:UNKNOWN，1:ANY，2:ALL，3:READ，4:WRITE，5:CREATE，6:DELETE，7:ALTER，8:DESCRIBE，9:CLUSTER_ACTION，10:DESCRIBE_CONFIGS，11:ALTER_CONFIGS，12:IDEMPOTEN_WRITE)
         * @type {number || null}
         */
        this.Operation = null;

        /**
         * 权限类型(0:UNKNOWN，1:ANY，2:DENY，3:ALLOW)
         * @type {number || null}
         */
        this.PermissionType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.Principal = 'Principal' in params ? params.Principal : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.PermissionType = 'PermissionType' in params ? params.PermissionType : null;

    }
}

/**
 * ModifyTopicAttributes请求参数结构体
 * @class
 */
class ModifyTopicAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 主题名称。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 主题备注，是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线-。
         * @type {string || null}
         */
        this.Note = null;

        /**
         * IP 白名单开关，1：打开；0：关闭。
         * @type {number || null}
         */
        this.EnableWhiteList = null;

        /**
         * 默认为1。
         * @type {number || null}
         */
        this.MinInsyncReplicas = null;

        /**
         * 默认为 0，0：false；1：true。
         * @type {number || null}
         */
        this.UncleanLeaderElectionEnable = null;

        /**
         * 消息保留时间，单位：ms，当前最小值为60000ms。
         * @type {number || null}
         */
        this.RetentionMs = null;

        /**
         * Segment 分片滚动的时长，单位：ms，当前最小为86400000ms。
         * @type {number || null}
         */
        this.SegmentMs = null;

        /**
         * 主题消息最大值，单位为 Byte，最大值为8388608Byte（即8MB）。
         * @type {number || null}
         */
        this.MaxMessageBytes = null;

        /**
         * 消息删除策略，可以选择delete 或者compact
         * @type {string || null}
         */
        this.CleanUpPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Note = 'Note' in params ? params.Note : null;
        this.EnableWhiteList = 'EnableWhiteList' in params ? params.EnableWhiteList : null;
        this.MinInsyncReplicas = 'MinInsyncReplicas' in params ? params.MinInsyncReplicas : null;
        this.UncleanLeaderElectionEnable = 'UncleanLeaderElectionEnable' in params ? params.UncleanLeaderElectionEnable : null;
        this.RetentionMs = 'RetentionMs' in params ? params.RetentionMs : null;
        this.SegmentMs = 'SegmentMs' in params ? params.SegmentMs : null;
        this.MaxMessageBytes = 'MaxMessageBytes' in params ? params.MaxMessageBytes : null;
        this.CleanUpPolicy = 'CleanUpPolicy' in params ? params.CleanUpPolicy : null;

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
         * 返回创建结果
         * @type {CreateTopicResp || null}
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

        if (params.Result) {
            let obj = new CreateTopicResp();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateInstancePre请求参数结构体
 * @class
 */
class CreateInstancePreRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例名称，是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 可用区
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 预付费购买时长，例如 "1m",就是一个月
         * @type {string || null}
         */
        this.Period = null;

        /**
         * 实例规格，1：入门型 ，2： 标准型，3 ：进阶型，4 ：容量型，5： 高阶型1，6：高阶性2, 7： 高阶型3,8： 高阶型4， 9 ：独占型。
         * @type {number || null}
         */
        this.InstanceType = null;

        /**
         * vpcId，不填默认基础网络
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网id，vpc网络需要传该参数，基础网络可以不传
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 可选。实例日志的最长保留时间，单位分钟，默认为10080（7天），最大30天，不填默认0，代表不开启日志保留时间回收策略
         * @type {number || null}
         */
        this.MsgRetentionTime = null;

        /**
         * 创建实例时可以选择集群Id, 该入参表示集群Id
         * @type {number || null}
         */
        this.ClusterId = null;

        /**
         * 预付费自动续费标记，0表示默认状态(用户未设置，即初始状态)， 1表示自动续费，2表示明确不自动续费(用户设置)
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
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.MsgRetentionTime = 'MsgRetentionTime' in params ? params.MsgRetentionTime : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;

    }
}

/**
 * DeleteTopicIpWhiteList请求参数结构体
 * @class
 */
class DeleteTopicIpWhiteListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 主题名称
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * ip白名单列表
         * @type {Array.<string> || null}
         */
        this.IpWhiteList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.IpWhiteList = 'IpWhiteList' in params ? params.IpWhiteList : null;

    }
}

/**
 * DescribeGroupOffsets请求参数结构体
 * @class
 */
class DescribeGroupOffsetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * （过滤条件）按照实例 ID 过滤
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Kafka 消费分组
         * @type {string || null}
         */
        this.Group = null;

        /**
         * group 订阅的主题名称数组，如果没有该数组，则表示指定的 group 下所有 topic 信息
         * @type {Array.<string> || null}
         */
        this.Topics = null;

        /**
         * 模糊匹配 topicName
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * 本次查询的偏移位置，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 本次返回结果的最大个数，默认为50，最大值为50
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
        this.Group = 'Group' in params ? params.Group : null;
        this.Topics = 'Topics' in params ? params.Topics : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeUser请求参数结构体
 * @class
 */
class DescribeUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 按照名称过滤
         * @type {string || null}
         */
        this.SearchWord = null;

        /**
         * 偏移
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 本次返回个数
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
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 实例详情
 * @class
 */
class InstanceDetail extends  AbstractModel {
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
         * 访问实例的vip 信息
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 访问实例的端口信息
         * @type {string || null}
         */
        this.Vport = null;

        /**
         * 虚拟IP列表
         * @type {Array.<VipEntity> || null}
         */
        this.VipList = null;

        /**
         * 实例的状态。0：创建中，1：运行中，2：删除中：5隔离中， -1 创建失败
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 实例带宽，单位Mbps
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 实例的存储大小，单位GB
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 可用区域ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * vpcId，如果为空，说明是基础网络
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网id
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 实例是否续费，int  枚举值：1表示自动续费，2表示明确不自动续费
         * @type {number || null}
         */
        this.RenewFlag = null;

        /**
         * 实例状态 int：0表示健康，1表示告警，2 表示实例状态异常
         * @type {number || null}
         */
        this.Healthy = null;

        /**
         * 实例状态信息
         * @type {string || null}
         */
        this.HealthyMessage = null;

        /**
         * 实例创建时间时间
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 实例过期时间
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * 是否为内部客户。值为1 表示内部客户
         * @type {number || null}
         */
        this.IsInternal = null;

        /**
         * Topic个数
         * @type {number || null}
         */
        this.TopicNum = null;

        /**
         * 标识tag
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * kafka版本信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 跨可用区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.ZoneIds = null;

        /**
         * ckafka售卖类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Cvm = null;

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
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;

        if (params.VipList) {
            this.VipList = new Array();
            for (let z in params.VipList) {
                let obj = new VipEntity();
                obj.deserialize(params.VipList[z]);
                this.VipList.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.Healthy = 'Healthy' in params ? params.Healthy : null;
        this.HealthyMessage = 'HealthyMessage' in params ? params.HealthyMessage : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.IsInternal = 'IsInternal' in params ? params.IsInternal : null;
        this.TopicNum = 'TopicNum' in params ? params.TopicNum : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Version = 'Version' in params ? params.Version : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Cvm = 'Cvm' in params ? params.Cvm : null;

    }
}

/**
 * DescribeTopicDetail返回参数结构体
 * @class
 */
class DescribeTopicDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的主题详情实体
         * @type {TopicDetailResponse || null}
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

        if (params.Result) {
            let obj = new TopicDetailResponse();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 订阅信息实体
 * @class
 */
class SubscribedInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订阅的主题名
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 订阅的分区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Partition = null;

        /**
         * 分区offset信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PartitionOffset> || null}
         */
        this.PartitionOffset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Partition = 'Partition' in params ? params.Partition : null;

        if (params.PartitionOffset) {
            this.PartitionOffset = new Array();
            for (let z in params.PartitionOffset) {
                let obj = new PartitionOffset();
                obj.deserialize(params.PartitionOffset[z]);
                this.PartitionOffset.push(obj);
            }
        }

    }
}

module.exports = {
    TopicDetail: TopicDetail,
    DeleteAclRequest: DeleteAclRequest,
    GroupInfoMember: GroupInfoMember,
    DeleteUserRequest: DeleteUserRequest,
    PartitionOffset: PartitionOffset,
    DescribeACLRequest: DescribeACLRequest,
    DescribeTopicAttributesRequest: DescribeTopicAttributesRequest,
    DescribeInstanceAttributesRequest: DescribeInstanceAttributesRequest,
    ConsumerGroup: ConsumerGroup,
    Assignment: Assignment,
    DescribeConsumerGroupResponse: DescribeConsumerGroupResponse,
    DeleteTopicRequest: DeleteTopicRequest,
    DescribeInstancesResponse: DescribeInstancesResponse,
    GroupInfoTopics: GroupInfoTopics,
    TopicResult: TopicResult,
    DescribeInstancesDetailResponse: DescribeInstancesDetailResponse,
    CreateInstancePreData: CreateInstancePreData,
    DescribeACLResponse: DescribeACLResponse,
    JgwOperateResponse: JgwOperateResponse,
    Topic: Topic,
    Tag: Tag,
    GroupResponse: GroupResponse,
    DescribeTopicAttributesResponse: DescribeTopicAttributesResponse,
    RouteResponse: RouteResponse,
    DescribeGroupResponse: DescribeGroupResponse,
    ModifyInstanceAttributesConfig: ModifyInstanceAttributesConfig,
    OperateResponseData: OperateResponseData,
    CreateUserResponse: CreateUserResponse,
    GroupOffsetTopic: GroupOffsetTopic,
    CreatePartitionResponse: CreatePartitionResponse,
    DeleteUserResponse: DeleteUserResponse,
    CreateAclRequest: CreateAclRequest,
    DescribeAppInfoRequest: DescribeAppInfoRequest,
    DescribeTopicResponse: DescribeTopicResponse,
    ConsumerGroupResponse: ConsumerGroupResponse,
    CreateTopicIpWhiteListResponse: CreateTopicIpWhiteListResponse,
    ModifyInstanceAttributesResponse: ModifyInstanceAttributesResponse,
    ModifyGroupOffsetsResponse: ModifyGroupOffsetsResponse,
    Partition: Partition,
    CreateAclResponse: CreateAclResponse,
    CreateTopicRequest: CreateTopicRequest,
    DeleteAclResponse: DeleteAclResponse,
    DescribeRouteRequest: DescribeRouteRequest,
    InstanceConfigDO: InstanceConfigDO,
    UserResponse: UserResponse,
    DescribeGroupInfoRequest: DescribeGroupInfoRequest,
    DescribeGroupInfoResponse: DescribeGroupInfoResponse,
    DescribeUserResponse: DescribeUserResponse,
    AppIdResponse: AppIdResponse,
    DescribeTopicRequest: DescribeTopicRequest,
    CreatePartitionRequest: CreatePartitionRequest,
    Group: Group,
    DescribeAppInfoResponse: DescribeAppInfoResponse,
    AclResponse: AclResponse,
    Instance: Instance,
    DescribeInstanceAttributesResponse: DescribeInstanceAttributesResponse,
    TopicDetailResponse: TopicDetailResponse,
    Config: Config,
    ModifyPasswordRequest: ModifyPasswordRequest,
    ModifyInstanceAttributesRequest: ModifyInstanceAttributesRequest,
    ModifyTopicAttributesResponse: ModifyTopicAttributesResponse,
    DescribeConsumerGroupRequest: DescribeConsumerGroupRequest,
    VipEntity: VipEntity,
    ConsumerGroupTopic: ConsumerGroupTopic,
    User: User,
    GroupOffsetPartition: GroupOffsetPartition,
    DeleteTopicResponse: DeleteTopicResponse,
    DescribeInstancesRequest: DescribeInstancesRequest,
    InstanceAttributesResponse: InstanceAttributesResponse,
    DescribeGroupRequest: DescribeGroupRequest,
    Filter: Filter,
    GroupOffsetResponse: GroupOffsetResponse,
    CreateUserRequest: CreateUserRequest,
    DeleteTopicIpWhiteListResponse: DeleteTopicIpWhiteListResponse,
    CreateInstancePreResponse: CreateInstancePreResponse,
    DescribeInstancesDetailRequest: DescribeInstancesDetailRequest,
    ModifyPasswordResponse: ModifyPasswordResponse,
    InstanceDetailResponse: InstanceDetailResponse,
    GroupInfoResponse: GroupInfoResponse,
    TopicAttributesResponse: TopicAttributesResponse,
    InstanceResponse: InstanceResponse,
    DescribeGroup: DescribeGroup,
    TopicPartitionDO: TopicPartitionDO,
    CreateTopicResp: CreateTopicResp,
    DescribeRouteResponse: DescribeRouteResponse,
    DescribeTopicDetailRequest: DescribeTopicDetailRequest,
    DescribeGroupOffsetsResponse: DescribeGroupOffsetsResponse,
    ModifyGroupOffsetsRequest: ModifyGroupOffsetsRequest,
    CreateTopicIpWhiteListRequest: CreateTopicIpWhiteListRequest,
    Route: Route,
    Acl: Acl,
    ModifyTopicAttributesRequest: ModifyTopicAttributesRequest,
    CreateTopicResponse: CreateTopicResponse,
    CreateInstancePreRequest: CreateInstancePreRequest,
    DeleteTopicIpWhiteListRequest: DeleteTopicIpWhiteListRequest,
    DescribeGroupOffsetsRequest: DescribeGroupOffsetsRequest,
    DescribeUserRequest: DescribeUserRequest,
    InstanceDetail: InstanceDetail,
    DescribeTopicDetailResponse: DescribeTopicDetailResponse,
    SubscribedInfo: SubscribedInfo,

}
