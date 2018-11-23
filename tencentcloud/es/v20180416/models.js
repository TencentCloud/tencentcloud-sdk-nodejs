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
 * 实例专用主节点相关信息
 * @class
 */
class MasterNodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否启用了专用主节点
         * @type {boolean || null}
         */
        this.EnableDedicatedMaster = null;

        /**
         * 专用主节点规格
         * @type {string || null}
         */
        this.MasterNodeType = null;

        /**
         * 专用主节点个数
         * @type {number || null}
         */
        this.MasterNodeNum = null;

        /**
         * 专用主节点CPU核数
         * @type {number || null}
         */
        this.MasterNodeCpuNum = null;

        /**
         * 专用主节点内存大小，单位GB
         * @type {number || null}
         */
        this.MasterNodeMemSize = null;

        /**
         * 专用主节点磁盘大小，单位GB
         * @type {number || null}
         */
        this.MasterNodeDiskSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EnableDedicatedMaster = params.EnableDedicatedMaster || null;
        this.MasterNodeType = params.MasterNodeType || null;
        this.MasterNodeNum = params.MasterNodeNum || null;
        this.MasterNodeCpuNum = params.MasterNodeCpuNum || null;
        this.MasterNodeMemSize = params.MasterNodeMemSize || null;
        this.MasterNodeDiskSize = params.MasterNodeDiskSize || null;

    }
}

/**
 * CreateInstance返回参数结构体
 * @class
 */
class CreateInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = params.InstanceId || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * RestartInstance请求参数结构体
 * @class
 */
class RestartInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要重启的实例ID
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
        this.InstanceId = params.InstanceId || null;

    }
}

/**
 * DeleteInstance请求参数结构体
 * @class
 */
class DeleteInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要销毁的实例ID
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
        this.InstanceId = params.InstanceId || null;

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
         * 集群实例所属可用区，不传则默认所有可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 一个或多个集群实例ID
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 一个或多个集群实例名称
         * @type {Array.<string> || null}
         */
        this.InstanceNames = null;

        /**
         * 分页起始值, 默认值0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页大小，默认值20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序字段：1，实例ID；2，实例名称；3，可用区；4，创建时间，若orderKey未传递则按创建时间降序排序
         * @type {number || null}
         */
        this.OrderByKey = null;

        /**
         * 排序方式：0，升序；1，降序；若传递了orderByKey未传递orderByType, 则默认升序
         * @type {number || null}
         */
        this.OrderByType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = params.Zone || null;
        this.InstanceIds = params.InstanceIds || null;
        this.InstanceNames = params.InstanceNames || null;
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;
        this.OrderByKey = params.OrderByKey || null;
        this.OrderByType = params.OrderByType || null;

    }
}

/**
 * ES IK词库信息
 * @class
 */
class EsDictionaryInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 启用词词典列表
         * @type {Array.<DictInfo> || null}
         */
        this.MainDict = null;

        /**
         * 停用词词典列表
         * @type {Array.<DictInfo> || null}
         */
        this.Stopwords = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MainDict) {
            this.MainDict = new Array();
            for (let z in params.MainDict) {
                let obj = new DictInfo();
                obj.deserialize(params.MainDict[z]);
                this.MainDict.push(obj);
            }
        }

        if (params.Stopwords) {
            this.Stopwords = new Array();
            for (let z in params.Stopwords) {
                let obj = new DictInfo();
                obj.deserialize(params.Stopwords[z]);
                this.Stopwords.push(obj);
            }
        }

    }
}

/**
 * UpdateInstance返回参数结构体
 * @class
 */
class UpdateInstanceResponse extends  AbstractModel {
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
        this.RequestId = params.RequestId || null;

    }
}

/**
 * ES集群配置项
 * @class
 */
class EsAcl extends  AbstractModel {
    constructor(){
        super();

        /**
         * kibana访问黑名单
         * @type {Array.<string> || null}
         */
        this.BlackIpList = null;

        /**
         * kibana访问白名单
         * @type {Array.<string> || null}
         */
        this.WhiteIpList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BlackIpList = params.BlackIpList || null;
        this.WhiteIpList = params.WhiteIpList || null;

    }
}

/**
 * UpdateInstance请求参数结构体
 * @class
 */
class UpdateInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要操作的实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 修改后的实例名称, 1-50 个英文、汉字、数字、连接线-或下划线_
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 横向扩缩容后的节点个数
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * 修改后的配置项, JSON格式字符串
         * @type {string || null}
         */
        this.EsConfig = null;

        /**
         * 重置后的Kibana密码, 8到16位，至少包括两项（[a-z,A-Z],[0-9]和[-!@#$%&^*+=_:;,.?]的特殊符号
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 修改后的访问控制列表
         * @type {EsAcl || null}
         */
        this.EsAcl = null;

        /**
         * 磁盘大小,单位GB
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 节点规格: 
ES.S1.SMALL2: 1 核 2G
ES.S1.MEDIUM4: 2 核 4G 
ES.S1.MEDIUM8: 2 核 8G 
ES.S1.LARGE16: 4 核 16G 
ES.S1.2XLARGE32: 8 核 32G 
ES.S1.4XLARGE64: 16 核 64G
         * @type {string || null}
         */
        this.NodeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = params.InstanceId || null;
        this.InstanceName = params.InstanceName || null;
        this.NodeNum = params.NodeNum || null;
        this.EsConfig = params.EsConfig || null;
        this.Password = params.Password || null;

        if (params.EsAcl) {
            let obj = new EsAcl();
            obj.deserialize(params.EsAcl)
            this.EsAcl = obj;
        }
        this.DiskSize = params.DiskSize || null;
        this.NodeType = params.NodeType || null;

    }
}

/**
 * CreateInstance请求参数结构体
 * @class
 */
class CreateInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 节点数量
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * 实例版本,当前只支持5.6.4
         * @type {string || null}
         */
        this.EsVersion = null;

        /**
         * 节点规格： 
ES.S1.SMALL2: 1核2G
ES.S1.MEDIUM4: 2核4G
ES.S1.MEDIUM8: 2核8G
ES.S1.LARGE16: 4核16G
ES.S1.2XLARGE32: 8核32G
ES.S1.4XLARGE64: 16核64G
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * 节点存储容量，单位GB
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 私有网络ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 访问密码，密码需8到16位，至少包括两项（[a-z,A-Z],[0-9]和[()`~!@#$%^&*-+=_|{}:;' <>,.?/]的特殊符号
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 实例名称，1-50 个英文、汉字、数字、连接线-或下划线_
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 计费类型: 
PREPAID：预付费，即包年包月 
POSTPAID_BY_HOUR：按小时后付费，默认值
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * 包年包月购买时长，单位由TimeUint决定，默认为月
         * @type {number || null}
         */
        this.ChargePeriod = null;

        /**
         * 自动续费标识，取值范围： 
RENEW_FLAG_AUTO：自动续费
RENEW_FLAG_MANUAL：不自动续费，用户手动续费
如不传递该参数，普通用于默认不自动续费，SVIP用户自动续费
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * 节点存储类型,取值范围:  
LOCAL_BASIC: 本地硬盘  
LOCAL_SSD: 本地SSD硬盘，默认值  
CLOUD_BASIC: 普通云硬盘  
CLOUD_PREMIUM: 高硬能云硬盘  
CLOUD_SSD: SSD云硬盘
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 计费时长单位，当前只支持“m”，表示月
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 是否自动使用代金券，1是，0否，默认不使用
         * @type {number || null}
         */
        this.AutoVoucher = null;

        /**
         * 代金券ID列表，目前仅支持指定一张代金券
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = params.Zone || null;
        this.NodeNum = params.NodeNum || null;
        this.EsVersion = params.EsVersion || null;
        this.NodeType = params.NodeType || null;
        this.DiskSize = params.DiskSize || null;
        this.VpcId = params.VpcId || null;
        this.SubnetId = params.SubnetId || null;
        this.Password = params.Password || null;
        this.InstanceName = params.InstanceName || null;
        this.ChargeType = params.ChargeType || null;
        this.ChargePeriod = params.ChargePeriod || null;
        this.RenewFlag = params.RenewFlag || null;
        this.DiskType = params.DiskType || null;
        this.TimeUnit = params.TimeUnit || null;
        this.AutoVoucher = params.AutoVoucher || null;
        this.VoucherIds = params.VoucherIds || null;

    }
}

/**
 * 实例详细信息
 * @class
 */
class InstanceInfo extends  AbstractModel {
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
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 用户ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 用户UIN
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 实例所属VPC的UID
         * @type {string || null}
         */
        this.VpcUid = null;

        /**
         * 实例所属子网的UID
         * @type {string || null}
         */
        this.SubnetUid = null;

        /**
         * 实例状态，0:处理中,1:正常,-1停止,-2:销毁中,-3:已销毁
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 实例计费模式。取值范围：  PREPAID：表示预付费，即包年包月  POSTPAID_BY_HOUR：表示后付费，即按量计费  CDHPAID：CDH付费，即只对CDH计费，不对CDH上的实例计费。
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * 包年包月购买时长,单位:月
         * @type {number || null}
         */
        this.ChargePeriod = null;

        /**
         * 自动续费标识。取值范围：  NOTIFY_AND_AUTO_RENEW：通知过期且自动续费  NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费  DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费  默认取值：NOTIFY_AND_AUTO_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * 节点规格:  ES.S1.SMALL2 : 1核2G  ES.S1.MEDIUM4 : 2核4G  ES.S1.MEDIUM8 : 2核8G  ES.S1.LARGE16 : 4核16G  ES.S1.2XLARGE32 : 8核32G  ES.S1.3XLARGE32 : 12核32G  ES.S1.6XLARGE32 : 24核32G
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * 节点个数
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * 节点CPU核数
         * @type {number || null}
         */
        this.CpuNum = null;

        /**
         * 节点内存大小，单位GB
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * 节点磁盘类型
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 节点磁盘大小，单位GB
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * ES域名
         * @type {string || null}
         */
        this.EsDomain = null;

        /**
         * ES VIP
         * @type {string || null}
         */
        this.EsVip = null;

        /**
         * ES端口
         * @type {number || null}
         */
        this.EsPort = null;

        /**
         * Kibana访问url
         * @type {string || null}
         */
        this.KibanaUrl = null;

        /**
         * ES版本号
         * @type {string || null}
         */
        this.EsVersion = null;

        /**
         * ES配置项
         * @type {string || null}
         */
        this.EsConfig = null;

        /**
         * ES访问控制配置
         * @type {EsAcl || null}
         */
        this.EsAcl = null;

        /**
         * 实例创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 实例最后修改操作时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 实例到期时间
         * @type {string || null}
         */
        this.Deadline = null;

        /**
         * 实例类型（实例类型标识，当前只有1,2两种）
         * @type {number || null}
         */
        this.InstanceType = null;

        /**
         * Ik分词器配置
         * @type {EsDictionaryInfo || null}
         */
        this.IkConfig = null;

        /**
         * 专用主节点配置
         * @type {MasterNodeInfo || null}
         */
        this.MasterNodeInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = params.InstanceId || null;
        this.InstanceName = params.InstanceName || null;
        this.Region = params.Region || null;
        this.Zone = params.Zone || null;
        this.AppId = params.AppId || null;
        this.Uin = params.Uin || null;
        this.VpcUid = params.VpcUid || null;
        this.SubnetUid = params.SubnetUid || null;
        this.Status = params.Status || null;
        this.ChargeType = params.ChargeType || null;
        this.ChargePeriod = params.ChargePeriod || null;
        this.RenewFlag = params.RenewFlag || null;
        this.NodeType = params.NodeType || null;
        this.NodeNum = params.NodeNum || null;
        this.CpuNum = params.CpuNum || null;
        this.MemSize = params.MemSize || null;
        this.DiskType = params.DiskType || null;
        this.DiskSize = params.DiskSize || null;
        this.EsDomain = params.EsDomain || null;
        this.EsVip = params.EsVip || null;
        this.EsPort = params.EsPort || null;
        this.KibanaUrl = params.KibanaUrl || null;
        this.EsVersion = params.EsVersion || null;
        this.EsConfig = params.EsConfig || null;

        if (params.EsAcl) {
            let obj = new EsAcl();
            obj.deserialize(params.EsAcl)
            this.EsAcl = obj;
        }
        this.CreateTime = params.CreateTime || null;
        this.UpdateTime = params.UpdateTime || null;
        this.Deadline = params.Deadline || null;
        this.InstanceType = params.InstanceType || null;

        if (params.IkConfig) {
            let obj = new EsDictionaryInfo();
            obj.deserialize(params.IkConfig)
            this.IkConfig = obj;
        }

        if (params.MasterNodeInfo) {
            let obj = new MasterNodeInfo();
            obj.deserialize(params.MasterNodeInfo)
            this.MasterNodeInfo = obj;
        }

    }
}

/**
 * RestartInstance返回参数结构体
 * @class
 */
class RestartInstanceResponse extends  AbstractModel {
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
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DeleteInstance返回参数结构体
 * @class
 */
class DeleteInstanceResponse extends  AbstractModel {
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
        this.RequestId = params.RequestId || null;

    }
}

/**
 * ik插件词典新
 * @class
 */
class DictInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 词典键值
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 词典名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 词典大小，单位B
         * @type {number || null}
         */
        this.Size = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = params.Key || null;
        this.Name = params.Name || null;
        this.Size = params.Size || null;

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
         * 返回的实例个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例详细信息列表
         * @type {Array.<InstanceInfo> || null}
         */
        this.InstanceList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = params.TotalCount || null;

        if (params.InstanceList) {
            this.InstanceList = new Array();
            for (let z in params.InstanceList) {
                let obj = new InstanceInfo();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

module.exports = {
    MasterNodeInfo: MasterNodeInfo,
    CreateInstanceResponse: CreateInstanceResponse,
    RestartInstanceRequest: RestartInstanceRequest,
    DeleteInstanceRequest: DeleteInstanceRequest,
    DescribeInstancesRequest: DescribeInstancesRequest,
    EsDictionaryInfo: EsDictionaryInfo,
    UpdateInstanceResponse: UpdateInstanceResponse,
    EsAcl: EsAcl,
    UpdateInstanceRequest: UpdateInstanceRequest,
    CreateInstanceRequest: CreateInstanceRequest,
    InstanceInfo: InstanceInfo,
    RestartInstanceResponse: RestartInstanceResponse,
    DeleteInstanceResponse: DeleteInstanceResponse,
    DictInfo: DictInfo,
    DescribeInstancesResponse: DescribeInstancesResponse,

}
