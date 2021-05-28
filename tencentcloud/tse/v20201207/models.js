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
 * DescribeSREInstances请求参数结构体
 * @class
 */
class DescribeSREInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求过滤参数
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 翻页单页查询限制数量[0,1000], 默认值0
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 翻页单页偏移量，默认值0
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
 * ManageConfig请求参数结构体
 * @class
 */
class ManageConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 配置中心类型（consul、zookeeper、apollo等）
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 请求命名 PUT GET DELETE
         * @type {string || null}
         */
        this.Command = null;

        /**
         * 配置的Key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 配置的Value
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Command = 'Command' in params ? params.Command : null;
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 微服务注册引擎实例
 * @class
 */
class SREInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 版本号
         * @type {string || null}
         */
        this.Edition = null;

        /**
         * 状态, 枚举值:creating/create_fail/running/updating/update_fail/restarting/restart_fail/destroying/destroy_fail
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 规格ID
         * @type {string || null}
         */
        this.SpecId = null;

        /**
         * 副本数
         * @type {number || null}
         */
        this.Replica = null;

        /**
         * 类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Vpc iD
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * 是否开启持久化存储
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.EnableStorage = null;

        /**
         * 数据存储方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StorageType = null;

        /**
         * 云硬盘容量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StorageCapacity = null;

        /**
         * 计费方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Paymode = null;

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
        this.Edition = 'Edition' in params ? params.Edition : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.SpecId = 'SpecId' in params ? params.SpecId : null;
        this.Replica = 'Replica' in params ? params.Replica : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.EnableStorage = 'EnableStorage' in params ? params.EnableStorage : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.StorageCapacity = 'StorageCapacity' in params ? params.StorageCapacity : null;
        this.Paymode = 'Paymode' in params ? params.Paymode : null;

    }
}

/**
 * DescribeSREInstanceAccessAddress返回参数结构体
 * @class
 */
class DescribeSREInstanceAccessAddressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内网访问地址
         * @type {string || null}
         */
        this.IntranetAddress = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IntranetAddress = 'IntranetAddress' in params ? params.IntranetAddress : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeConfig请求参数结构体
 * @class
 */
class DescribeConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 配置中心类型（consul、zookeeper、apollo等）
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 配置项的节点路径key
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Key = 'Key' in params ? params.Key : null;

    }
}

/**
 * DescribeSREInstances返回参数结构体
 * @class
 */
class DescribeSREInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例记录
         * @type {Array.<SREInstance> || null}
         */
        this.Content = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Content) {
            this.Content = new Array();
            for (let z in params.Content) {
                let obj = new SREInstance();
                obj.deserialize(params.Content[z]);
                this.Content.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeConfig返回参数结构体
 * @class
 */
class DescribeConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置项或路径key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 配置项的值
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 当前key是否为路径
         * @type {boolean || null}
         */
        this.IsDir = null;

        /**
         * 当前key下的子路径
         * @type {Array.<string> || null}
         */
        this.List = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

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
        this.IsDir = 'IsDir' in params ? params.IsDir : null;
        this.List = 'List' in params ? params.List : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 查询过滤通用对象
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤参数名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 过滤参数值
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
 * DescribeSREInstanceAccessAddress请求参数结构体
 * @class
 */
class DescribeSREInstanceAccessAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 注册引擎实例Id
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
 * ManageConfig返回参数结构体
 * @class
 */
class ManageConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对配置中心操作配置之后的返回值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 操作是否成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.OpResult = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.OpResult = 'OpResult' in params ? params.OpResult : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DescribeSREInstancesRequest: DescribeSREInstancesRequest,
    ManageConfigRequest: ManageConfigRequest,
    SREInstance: SREInstance,
    DescribeSREInstanceAccessAddressResponse: DescribeSREInstanceAccessAddressResponse,
    DescribeConfigRequest: DescribeConfigRequest,
    DescribeSREInstancesResponse: DescribeSREInstancesResponse,
    DescribeConfigResponse: DescribeConfigResponse,
    Filter: Filter,
    DescribeSREInstanceAccessAddressRequest: DescribeSREInstanceAccessAddressRequest,
    ManageConfigResponse: ManageConfigResponse,

}
