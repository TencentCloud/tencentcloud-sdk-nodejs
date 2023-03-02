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
 * DescribeInstanceShards请求参数结构体
 * @class
 */
class DescribeInstanceShardsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群实例ID
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
 * ScaleOutInstance返回参数结构体
 * @class
 */
class ScaleOutInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 错误信息
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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResizeDisk请求参数结构体
 * @class
 */
class ResizeDiskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例唯一ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 节点类型，DATA：clickhouse节点，COMMON：为zookeeper节点
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 磁盘扩容后容量，不能小于原有用量。clickhouse最小200，且为100的整数倍。 zk最小100，且为10的整数倍；
         * @type {number || null}
         */
        this.DiskSize = null;

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
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;

    }
}

/**
 * DestroyInstance返回参数结构体
 * @class
 */
class DestroyInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作业id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FlowID = null;

        /**
         * 集群id
         * @type {string || null}
         */
        this.InstanceID = null;

        /**
         * 错误信息
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
        this.FlowID = 'FlowID' in params ? params.FlowID : null;
        this.InstanceID = 'InstanceID' in params ? params.InstanceID : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceKeyValConfigs请求参数结构体
 * @class
 */
class DescribeInstanceKeyValConfigsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 搜索的配置项名称
         * @type {string || null}
         */
        this.SearchConfigName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SearchConfigName = 'SearchConfigName' in params ? params.SearchConfigName : null;

    }
}

/**
 * OpenBackUp返回参数结构体
 * @class
 */
class OpenBackUpResponse extends  AbstractModel {
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
 * 集群计费相关信息

 * @class
 */
class Charge extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计费类型，“PREPAID” 预付费，“POSTPAID_BY_HOUR” 后付费
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * PREPAID需要传递，是否自动续费，1表示自动续费开启
         * @type {number || null}
         */
        this.RenewFlag = null;

        /**
         * 预付费需要传递，计费时间长度，多少个月
         * @type {number || null}
         */
        this.TimeSpan = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;

    }
}

/**
 * DescribeClusterConfigs返回参数结构体
 * @class
 */
class DescribeClusterConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回实例的配置文件相关的信息
         * @type {Array.<ClusterConfigsInfoFromEMR> || null}
         */
        this.ClusterConfList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ClusterConfList) {
            this.ClusterConfList = new Array();
            for (let z in params.ClusterConfList) {
                let obj = new ClusterConfigsInfoFromEMR();
                obj.deserialize(params.ClusterConfList[z]);
                this.ClusterConfList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ActionAlterCkUser请求参数结构体
 * @class
 */
class ActionAlterCkUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户信息
         * @type {CkUserAlterInfo || null}
         */
        this.UserInfo = null;

        /**
         * api接口类型，
AddSystemUser新增用户，UpdateSystemUser，修改用户
         * @type {string || null}
         */
        this.ApiType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.UserInfo) {
            let obj = new CkUserAlterInfo();
            obj.deserialize(params.UserInfo)
            this.UserInfo = obj;
        }
        this.ApiType = 'ApiType' in params ? params.ApiType : null;

    }
}

/**
 * DescribeSpec请求参数结构体
 * @class
 */
class DescribeSpecRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域信息，例如"ap-guangzhou-1"
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 计费类型，PREPAID 包年包月，POSTPAID_BY_HOUR 按量计费
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * 是否弹性ck
         * @type {boolean || null}
         */
        this.IsElastic = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.IsElastic = 'IsElastic' in params ? params.IsElastic : null;

    }
}

/**
 * 新增或是修改ck用户
 * @class
 */
class CkUserAlterInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 密码
         * @type {string || null}
         */
        this.PassWord = null;

        /**
         * 描述
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.PassWord = 'PassWord' in params ? params.PassWord : null;
        this.Describe = 'Describe' in params ? params.Describe : null;

    }
}

/**
 * DescribeBackUpSchedule请求参数结构体
 * @class
 */
class DescribeBackUpScheduleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
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
 * DescribeSpec返回参数结构体
 * @class
 */
class DescribeSpecResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * zookeeper节点规格描述
         * @type {Array.<ResourceSpec> || null}
         */
        this.CommonSpec = null;

        /**
         * 数据节点规格描述
         * @type {Array.<ResourceSpec> || null}
         */
        this.DataSpec = null;

        /**
         * 云盘列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DiskSpec> || null}
         */
        this.AttachCBSSpec = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CommonSpec) {
            this.CommonSpec = new Array();
            for (let z in params.CommonSpec) {
                let obj = new ResourceSpec();
                obj.deserialize(params.CommonSpec[z]);
                this.CommonSpec.push(obj);
            }
        }

        if (params.DataSpec) {
            this.DataSpec = new Array();
            for (let z in params.DataSpec) {
                let obj = new ResourceSpec();
                obj.deserialize(params.DataSpec[z]);
                this.DataSpec.push(obj);
            }
        }

        if (params.AttachCBSSpec) {
            this.AttachCBSSpec = new Array();
            for (let z in params.AttachCBSSpec) {
                let obj = new DiskSpec();
                obj.deserialize(params.AttachCBSSpec[z]);
                this.AttachCBSSpec.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstanceKeyValConfigs返回参数结构体
 * @class
 */
class ModifyInstanceKeyValConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrorMsg = null;

        /**
         * ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DestroyInstance请求参数结构体
 * @class
 */
class DestroyInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
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
 * ModifyUserNewPrivilege请求参数结构体
 * @class
 */
class ModifyUserNewPrivilegeRequest extends  AbstractModel {
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
 * DescribeCkSqlApis请求参数结构体
 * @class
 */
class DescribeCkSqlApisRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * api接口名称,GetClusters:获取集群cluster列表
GetSystemUsers:获取系统用户列表
CheckNodeCluster: 检查节点是否隶属一个cluster
GetClusterDatabases: 获取一个cluster下的数据库列表
GetClusterTables: 获取一个cluster下的数据库表列表
GetPrivilegeUsers: 获取授权的用户列表
GET_USER_CLUSTER_PRIVILEGES:获取用户cluster下的权限   
GetUserClusterNewPrivileges:获取用户cluster下的权限 (新版）
RevokeClusterUser:解绑cluster用户
DeleteSystemUser:删除系统用户 —— 必须所有cluster先解绑
GetUserOptionMessages:获取用户配置备注信息
GET_USER_CONFIGS:获取用户配置列表  QUOTA、PROFILE、POLICY
         * @type {string || null}
         */
        this.ApiType = null;

        /**
         * 集群名称，GET_SYSTEM_USERS，GET_PRIVILEGE_USERS，GET_CLUSTER_DATABASES，GET_CLUSTER_TABLES 必填
         * @type {string || null}
         */
        this.Cluster = null;

        /**
         * 用户名称，api与user相关的必填
         * @type {string || null}
         */
        this.UserName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ApiType = 'ApiType' in params ? params.ApiType : null;
        this.Cluster = 'Cluster' in params ? params.Cluster : null;
        this.UserName = 'UserName' in params ? params.UserName : null;

    }
}

/**
 * 用于返回XML格式的配置文件和内容以及其他配置文件有关的信息
 * @class
 */
class ClusterConfigsInfoFromEMR extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置文件名称
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 配置文件对应的相关属性信息
         * @type {string || null}
         */
        this.FileConf = null;

        /**
         * 配置文件对应的其他属性信息
         * @type {string || null}
         */
        this.KeyConf = null;

        /**
         * 配置文件的内容，base64编码
         * @type {string || null}
         */
        this.OriParam = null;

        /**
         * 用于表示当前配置文件是不是有过修改后没有重启，提醒用户需要重启
         * @type {number || null}
         */
        this.NeedRestart = null;

        /**
         * 保存配置文件的路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FilePath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileConf = 'FileConf' in params ? params.FileConf : null;
        this.KeyConf = 'KeyConf' in params ? params.KeyConf : null;
        this.OriParam = 'OriParam' in params ? params.OriParam : null;
        this.NeedRestart = 'NeedRestart' in params ? params.NeedRestart : null;
        this.FilePath = 'FilePath' in params ? params.FilePath : null;

    }
}

/**
 * OpenBackUp请求参数结构体
 * @class
 */
class OpenBackUpRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * OPEN 或者CLOSE
         * @type {string || null}
         */
        this.OperationType = null;

        /**
         * 桶名字
         * @type {string || null}
         */
        this.CosBucketName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.OperationType = 'OperationType' in params ? params.OperationType : null;
        this.CosBucketName = 'CosBucketName' in params ? params.CosBucketName : null;

    }
}

/**
 * 备份表信息
 * @class
 */
class BackupTableContent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库
         * @type {string || null}
         */
        this.Database = null;

        /**
         * 表
         * @type {string || null}
         */
        this.Table = null;

        /**
         * 表总字节数
         * @type {number || null}
         */
        this.TotalBytes = null;

        /**
         * 虚拟cluster
         * @type {string || null}
         */
        this.VCluster = null;

        /**
         * 表ip
         * @type {string || null}
         */
        this.Ips = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Database = 'Database' in params ? params.Database : null;
        this.Table = 'Table' in params ? params.Table : null;
        this.TotalBytes = 'TotalBytes' in params ? params.TotalBytes : null;
        this.VCluster = 'VCluster' in params ? params.VCluster : null;
        this.Ips = 'Ips' in params ? params.Ips : null;

    }
}

/**
 * CreateInstanceNew返回参数结构体
 * @class
 */
class CreateInstanceNewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 错误信息
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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 配置文件修改信息
 * @class
 */
class ConfigSubmitContext extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置文件名称
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 配置文件旧内容，base64编码
         * @type {string || null}
         */
        this.OldConfValue = null;

        /**
         * 配置文件新内容，base64编码
         * @type {string || null}
         */
        this.NewConfValue = null;

        /**
         * 保存配置文件的路径
         * @type {string || null}
         */
        this.FilePath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.OldConfValue = 'OldConfValue' in params ? params.OldConfValue : null;
        this.NewConfValue = 'NewConfValue' in params ? params.NewConfValue : null;
        this.FilePath = 'FilePath' in params ? params.FilePath : null;

    }
}

/**
 * CreateInstanceNew请求参数结构体
 * @class
 */
class CreateInstanceNewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 是否高可用
         * @type {boolean || null}
         */
        this.HaFlag = null;

        /**
         * 私有网络
         * @type {string || null}
         */
        this.UserVPCId = null;

        /**
         * 子网
         * @type {string || null}
         */
        this.UserSubnetId = null;

        /**
         * 版本
         * @type {string || null}
         */
        this.ProductVersion = null;

        /**
         * 计费方式
         * @type {Charge || null}
         */
        this.ChargeProperties = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 数据节点
         * @type {NodeSpec || null}
         */
        this.DataSpec = null;

        /**
         * 标签列表
         * @type {Tag || null}
         */
        this.Tags = null;

        /**
         * 日志主题ID
         * @type {string || null}
         */
        this.ClsLogSetId = null;

        /**
         * COS桶名称
         * @type {string || null}
         */
        this.CosBucketName = null;

        /**
         * 是否是裸盘挂载
         * @type {number || null}
         */
        this.MountDiskType = null;

        /**
         * 是否是ZK高可用
         * @type {boolean || null}
         */
        this.HAZk = null;

        /**
         * ZK节点
         * @type {NodeSpec || null}
         */
        this.CommonSpec = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.HaFlag = 'HaFlag' in params ? params.HaFlag : null;
        this.UserVPCId = 'UserVPCId' in params ? params.UserVPCId : null;
        this.UserSubnetId = 'UserSubnetId' in params ? params.UserSubnetId : null;
        this.ProductVersion = 'ProductVersion' in params ? params.ProductVersion : null;

        if (params.ChargeProperties) {
            let obj = new Charge();
            obj.deserialize(params.ChargeProperties)
            this.ChargeProperties = obj;
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

        if (params.DataSpec) {
            let obj = new NodeSpec();
            obj.deserialize(params.DataSpec)
            this.DataSpec = obj;
        }

        if (params.Tags) {
            let obj = new Tag();
            obj.deserialize(params.Tags)
            this.Tags = obj;
        }
        this.ClsLogSetId = 'ClsLogSetId' in params ? params.ClsLogSetId : null;
        this.CosBucketName = 'CosBucketName' in params ? params.CosBucketName : null;
        this.MountDiskType = 'MountDiskType' in params ? params.MountDiskType : null;
        this.HAZk = 'HAZk' in params ? params.HAZk : null;

        if (params.CommonSpec) {
            let obj = new NodeSpec();
            obj.deserialize(params.CommonSpec)
            this.CommonSpec = obj;
        }

    }
}

/**
 * 实例描述信息
 * @class
 */
class InstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群实例ID, "cdw-xxxx" 字符串类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 集群实例名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 状态,
Init 创建中; Serving 运行中； 
Deleted已销毁；Deleting 销毁中；
Modify 集群变更中；
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 地域, ap-guangzhou
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 可用区， ap-guangzhou-3
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 私有网络名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 付费类型，"hour", "prepay"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 数据节点描述信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {NodesSummary || null}
         */
        this.MasterSummary = null;

        /**
         * zookeeper节点描述信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {NodesSummary || null}
         */
        this.CommonSummary = null;

        /**
         * 高可用，“true" "false"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HA = null;

        /**
         * 访问地址，例如 "10.0.0.1:9000"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccessInfo = null;

        /**
         * 记录ID，数值型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * regionId, 表示地域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 可用区说明，例如 "广州二区"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ZoneDesc = null;

        /**
         * 错误流程说明信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FlowMsg = null;

        /**
         * 状态描述，例如“运行中”等
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * 自动续费标记
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.RenewFlag = null;

        /**
         * 标签列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 监控信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Monitor = null;

        /**
         * 是否开通日志
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.HasClsTopic = null;

        /**
         * 日志主题ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClsTopicId = null;

        /**
         * 日志集ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClsLogSetId = null;

        /**
         * 是否支持xml配置管理
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EnableXMLConfig = null;

        /**
         * 区域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegionDesc = null;

        /**
         * 弹性网卡地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Eip = null;

        /**
         * 冷热分层系数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CosMoveFactor = null;

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
        this.Version = 'Version' in params ? params.Version : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

        if (params.MasterSummary) {
            let obj = new NodesSummary();
            obj.deserialize(params.MasterSummary)
            this.MasterSummary = obj;
        }

        if (params.CommonSummary) {
            let obj = new NodesSummary();
            obj.deserialize(params.CommonSummary)
            this.CommonSummary = obj;
        }
        this.HA = 'HA' in params ? params.HA : null;
        this.AccessInfo = 'AccessInfo' in params ? params.AccessInfo : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.ZoneDesc = 'ZoneDesc' in params ? params.ZoneDesc : null;
        this.FlowMsg = 'FlowMsg' in params ? params.FlowMsg : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Monitor = 'Monitor' in params ? params.Monitor : null;
        this.HasClsTopic = 'HasClsTopic' in params ? params.HasClsTopic : null;
        this.ClsTopicId = 'ClsTopicId' in params ? params.ClsTopicId : null;
        this.ClsLogSetId = 'ClsLogSetId' in params ? params.ClsLogSetId : null;
        this.EnableXMLConfig = 'EnableXMLConfig' in params ? params.EnableXMLConfig : null;
        this.RegionDesc = 'RegionDesc' in params ? params.RegionDesc : null;
        this.Eip = 'Eip' in params ? params.Eip : null;
        this.CosMoveFactor = 'CosMoveFactor' in params ? params.CosMoveFactor : null;

    }
}

/**
 * ModifyClusterConfigs请求参数结构体
 * @class
 */
class ModifyClusterConfigsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID，例如cdwch-xxxx
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 配置文件修改信息
         * @type {Array.<ConfigSubmitContext> || null}
         */
        this.ModifyConfContext = null;

        /**
         * 修改原因
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.ModifyConfContext) {
            this.ModifyConfContext = new Array();
            for (let z in params.ModifyConfContext) {
                let obj = new ConfigSubmitContext();
                obj.deserialize(params.ModifyConfContext[z]);
                this.ModifyConfContext.push(obj);
            }
        }
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * DescribeInstanceKeyValConfigs返回参数结构体
 * @class
 */
class DescribeInstanceKeyValConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数列表
         * @type {Array.<InstanceConfigInfo> || null}
         */
        this.ConfigItems = null;

        /**
         * 未配置的参数列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<InstanceConfigInfo> || null}
         */
        this.UnConfigItems = null;

        /**
         * 配置的多层级参数列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MapConfigItem> || null}
         */
        this.MapConfigItems = null;

        /**
         * 错误信息
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

        if (params.ConfigItems) {
            this.ConfigItems = new Array();
            for (let z in params.ConfigItems) {
                let obj = new InstanceConfigInfo();
                obj.deserialize(params.ConfigItems[z]);
                this.ConfigItems.push(obj);
            }
        }

        if (params.UnConfigItems) {
            this.UnConfigItems = new Array();
            for (let z in params.UnConfigItems) {
                let obj = new InstanceConfigInfo();
                obj.deserialize(params.UnConfigItems[z]);
                this.UnConfigItems.push(obj);
            }
        }

        if (params.MapConfigItems) {
            this.MapConfigItems = new Array();
            for (let z in params.MapConfigItems) {
                let obj = new MapConfigItem();
                obj.deserialize(params.MapConfigItems[z]);
                this.MapConfigItems.push(obj);
            }
        }
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 资源规格描述信息
 * @class
 */
class ResourceSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规格名称，例如“SCH1"
         * @type {string || null}
         */
        this.Name = null;

        /**
         * cpu核数
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 内存大小，单位G
         * @type {number || null}
         */
        this.Mem = null;

        /**
         * 分类标记，STANDARD/BIGDATA/HIGHIO分别表示标准型/大数据型/高IO
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 系统盘描述信息
         * @type {DiskSpec || null}
         */
        this.SystemDisk = null;

        /**
         * 数据盘描述信息
         * @type {DiskSpec || null}
         */
        this.DataDisk = null;

        /**
         * 最大节点数目限制
         * @type {number || null}
         */
        this.MaxNodeSize = null;

        /**
         * 是否可用，false代表售罄
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Available = null;

        /**
         * 规格描述信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ComputeSpecDesc = null;

        /**
         * 规格名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * 库存数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InstanceQuota = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Mem = 'Mem' in params ? params.Mem : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.SystemDisk) {
            let obj = new DiskSpec();
            obj.deserialize(params.SystemDisk)
            this.SystemDisk = obj;
        }

        if (params.DataDisk) {
            let obj = new DiskSpec();
            obj.deserialize(params.DataDisk)
            this.DataDisk = obj;
        }
        this.MaxNodeSize = 'MaxNodeSize' in params ? params.MaxNodeSize : null;
        this.Available = 'Available' in params ? params.Available : null;
        this.ComputeSpecDesc = 'ComputeSpecDesc' in params ? params.ComputeSpecDesc : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.InstanceQuota = 'InstanceQuota' in params ? params.InstanceQuota : null;

    }
}

/**
 * ModifyClusterConfigs返回参数结构体
 * @class
 */
class ModifyClusterConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程相关信息
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 错误信息
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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 磁盘规格描述
 * @class
 */
class DiskSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * 磁盘类型，例如“CLOUD_SSD", "LOCAL_SSD"等
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 磁盘类型说明，例如"云SSD", "本地SSD"等
         * @type {string || null}
         */
        this.DiskDesc = null;

        /**
         * 磁盘最小规格大小，单位G
         * @type {number || null}
         */
        this.MinDiskSize = null;

        /**
         * 磁盘最大规格大小，单位G
         * @type {number || null}
         */
        this.MaxDiskSize = null;

        /**
         * 磁盘数目
         * @type {number || null}
         */
        this.DiskCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskDesc = 'DiskDesc' in params ? params.DiskDesc : null;
        this.MinDiskSize = 'MinDiskSize' in params ? params.MinDiskSize : null;
        this.MaxDiskSize = 'MaxDiskSize' in params ? params.MaxDiskSize : null;
        this.DiskCount = 'DiskCount' in params ? params.DiskCount : null;

    }
}

/**
 * DescribeClusterConfigs请求参数结构体
 * @class
 */
class DescribeClusterConfigsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群实例ID
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
 * ModifyInstanceKeyValConfigs请求参数结构体
 * @class
 */
class ModifyInstanceKeyValConfigsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 新增配置列表
         * @type {Array.<InstanceConfigItem> || null}
         */
        this.AddItems = null;

        /**
         * 更新配置列表
         * @type {Array.<InstanceConfigItem> || null}
         */
        this.UpdateItems = null;

        /**
         * 删除配置列表
         * @type {InstanceConfigItem || null}
         */
        this.DeleteItems = null;

        /**
         * 删除配置列表
         * @type {Array.<InstanceConfigItem> || null}
         */
        this.DelItems = null;

        /**
         * 备注
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.AddItems) {
            this.AddItems = new Array();
            for (let z in params.AddItems) {
                let obj = new InstanceConfigItem();
                obj.deserialize(params.AddItems[z]);
                this.AddItems.push(obj);
            }
        }

        if (params.UpdateItems) {
            this.UpdateItems = new Array();
            for (let z in params.UpdateItems) {
                let obj = new InstanceConfigItem();
                obj.deserialize(params.UpdateItems[z]);
                this.UpdateItems.push(obj);
            }
        }

        if (params.DeleteItems) {
            let obj = new InstanceConfigItem();
            obj.deserialize(params.DeleteItems)
            this.DeleteItems = obj;
        }

        if (params.DelItems) {
            this.DelItems = new Array();
            for (let z in params.DelItems) {
                let obj = new InstanceConfigItem();
                obj.deserialize(params.DelItems[z]);
                this.DelItems.push(obj);
            }
        }
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * kv配置，多层级item
 * @class
 */
class MapConfigItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * key
         * @type {string || null}
         */
        this.ConfKey = null;

        /**
         * 列表
         * @type {Array.<InstanceConfigInfo> || null}
         */
        this.Items = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfKey = 'ConfKey' in params ? params.ConfKey : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new InstanceConfigInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

    }
}

/**
 * ScaleOutInstance请求参数结构体
 * @class
 */
class ScaleOutInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例唯一ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 节点类型，DATA：clickhouse节点，COMMON：为zookeeper节点
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 调整clickhouse节点数量
         * @type {number || null}
         */
        this.NodeCount = null;

        /**
         * v_cluster分组，	
新增扩容节点将加入到已选择的v_cluster分组中，提交同步VIP生效.
         * @type {string || null}
         */
        this.ScaleOutCluster = null;

        /**
         * 子网剩余ip数量，用于判断当前实例子网剩余ip数是否能扩容。需要根据实际填写
         * @type {number || null}
         */
        this.UserSubnetIPNum = null;

        /**
         * 同步元数据节点IP （uip）
         * @type {string || null}
         */
        this.ScaleOutNodeIp = null;

        /**
         * 缩容节点shard的节点IP （uip），其中ha集群需要主副节点ip都传入以逗号分隔
         * @type {Array.<string> || null}
         */
        this.ReduceShardInfo = null;

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
        this.NodeCount = 'NodeCount' in params ? params.NodeCount : null;
        this.ScaleOutCluster = 'ScaleOutCluster' in params ? params.ScaleOutCluster : null;
        this.UserSubnetIPNum = 'UserSubnetIPNum' in params ? params.UserSubnetIPNum : null;
        this.ScaleOutNodeIp = 'ScaleOutNodeIp' in params ? params.ScaleOutNodeIp : null;
        this.ReduceShardInfo = 'ReduceShardInfo' in params ? params.ReduceShardInfo : null;

    }
}

/**
 * CreateBackUpSchedule返回参数结构体
 * @class
 */
class CreateBackUpScheduleResponse extends  AbstractModel {
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
 * KV配置
 * @class
 */
class InstanceConfigItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * key
         * @type {string || null}
         */
        this.ConfKey = null;

        /**
         * value
         * @type {string || null}
         */
        this.ConfValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfKey = 'ConfKey' in params ? params.ConfKey : null;
        this.ConfValue = 'ConfValue' in params ? params.ConfValue : null;

    }
}

/**
 * DescribeInstance返回参数结构体
 * @class
 */
class DescribeInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例描述信息
         * @type {InstanceInfo || null}
         */
        this.InstanceInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstanceInfo) {
            let obj = new InstanceInfo();
            obj.deserialize(params.InstanceInfo)
            this.InstanceInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ScaleUpInstance请求参数结构体
 * @class
 */
class ScaleUpInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例唯一ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 节点类型，DATA：clickhouse节点，COMMON：为zookeeper节点
         * @type {string || null}
         */
        this.Type = null;

        /**
         * clickhouse节点规格。
         * @type {string || null}
         */
        this.SpecName = null;

        /**
         * 是否滚动重启，false为不滚动重启，true为滚动重启
         * @type {boolean || null}
         */
        this.ScaleUpEnableRolling = null;

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
        this.SpecName = 'SpecName' in params ? params.SpecName : null;
        this.ScaleUpEnableRolling = 'ScaleUpEnableRolling' in params ? params.ScaleUpEnableRolling : null;

    }
}

/**
 * 节点角色描述信息
 * @class
 */
class NodesSummary extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机型，如 S1
         * @type {string || null}
         */
        this.Spec = null;

        /**
         * 节点数目
         * @type {number || null}
         */
        this.NodeSize = null;

        /**
         * cpu核数，单位个
         * @type {number || null}
         */
        this.Core = null;

        /**
         * 内存大小，单位G
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 磁盘大小，单位G
         * @type {number || null}
         */
        this.Disk = null;

        /**
         * 磁盘类型
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 磁盘描述
         * @type {string || null}
         */
        this.DiskDesc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Spec = 'Spec' in params ? params.Spec : null;
        this.NodeSize = 'NodeSize' in params ? params.NodeSize : null;
        this.Core = 'Core' in params ? params.Core : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Disk = 'Disk' in params ? params.Disk : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskDesc = 'DiskDesc' in params ? params.DiskDesc : null;

    }
}

/**
 * DescribeInstanceShards返回参数结构体
 * @class
 */
class DescribeInstanceShardsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例shard信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceShardsList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceShardsList = 'InstanceShardsList' in params ? params.InstanceShardsList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 集群配置信息
 * @class
 */
class InstanceConfigInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置项名称
         * @type {string || null}
         */
        this.ConfKey = null;

        /**
         * 配置项内容
         * @type {string || null}
         */
        this.ConfValue = null;

        /**
         * 默认值
         * @type {string || null}
         */
        this.DefaultValue = null;

        /**
         * 是否需要重启
         * @type {boolean || null}
         */
        this.NeedRestart = null;

        /**
         * 是否可编辑
         * @type {boolean || null}
         */
        this.Editable = null;

        /**
         * 配置项解释
         * @type {string || null}
         */
        this.ConfDesc = null;

        /**
         * 文件名称
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 规则名称类型
         * @type {string || null}
         */
        this.ModifyRuleType = null;

        /**
         * 规则名称内容
         * @type {string || null}
         */
        this.ModifyRuleValue = null;

        /**
         * 修改人的uin
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifyTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfKey = 'ConfKey' in params ? params.ConfKey : null;
        this.ConfValue = 'ConfValue' in params ? params.ConfValue : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.NeedRestart = 'NeedRestart' in params ? params.NeedRestart : null;
        this.Editable = 'Editable' in params ? params.Editable : null;
        this.ConfDesc = 'ConfDesc' in params ? params.ConfDesc : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.ModifyRuleType = 'ModifyRuleType' in params ? params.ModifyRuleType : null;
        this.ModifyRuleValue = 'ModifyRuleValue' in params ? params.ModifyRuleValue : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

    }
}

/**
 * CreateBackUpSchedule请求参数结构体
 * @class
 */
class CreateBackUpScheduleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 编辑时需要传
         * @type {number || null}
         */
        this.ScheduleId = null;

        /**
         * 选择的星期 逗号分隔，例如 2 代表周二
         * @type {string || null}
         */
        this.WeekDays = null;

        /**
         * 执行小时
         * @type {number || null}
         */
        this.ExecuteHour = null;

        /**
         * 备份表列表
         * @type {Array.<BackupTableContent> || null}
         */
        this.BackUpTables = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScheduleId = 'ScheduleId' in params ? params.ScheduleId : null;
        this.WeekDays = 'WeekDays' in params ? params.WeekDays : null;
        this.ExecuteHour = 'ExecuteHour' in params ? params.ExecuteHour : null;

        if (params.BackUpTables) {
            this.BackUpTables = new Array();
            for (let z in params.BackUpTables) {
                let obj = new BackupTableContent();
                obj.deserialize(params.BackUpTables[z]);
                this.BackUpTables.push(obj);
            }
        }

    }
}

/**
 * 创建集群时的规格
 * @class
 */
class NodeSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规格名称
         * @type {string || null}
         */
        this.SpecName = null;

        /**
         * 数量
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 云盘大小
         * @type {number || null}
         */
        this.DiskSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SpecName = 'SpecName' in params ? params.SpecName : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;

    }
}

/**
 * DescribeInstance请求参数结构体
 * @class
 */
class DescribeInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群实例ID
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
 * ActionAlterCkUser返回参数结构体
 * @class
 */
class ActionAlterCkUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 标签描述
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签的键
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
 * 策略详情
 * @class
 */
class ScheduleStrategy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 备份桶列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CosBucketName = null;

        /**
         * 备份保留天数
         * @type {number || null}
         */
        this.RetainDays = null;

        /**
         * 备份的天
         * @type {string || null}
         */
        this.WeekDays = null;

        /**
         * 备份小时
         * @type {number || null}
         */
        this.ExecuteHour = null;

        /**
         * 策略id
         * @type {number || null}
         */
        this.ScheduleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CosBucketName = 'CosBucketName' in params ? params.CosBucketName : null;
        this.RetainDays = 'RetainDays' in params ? params.RetainDays : null;
        this.WeekDays = 'WeekDays' in params ? params.WeekDays : null;
        this.ExecuteHour = 'ExecuteHour' in params ? params.ExecuteHour : null;
        this.ScheduleId = 'ScheduleId' in params ? params.ScheduleId : null;

    }
}

/**
 * ResizeDisk返回参数结构体
 * @class
 */
class ResizeDiskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 错误信息
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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBackUpSchedule返回参数结构体
 * @class
 */
class DescribeBackUpScheduleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 备份是否开启
         * @type {boolean || null}
         */
        this.BackUpOpened = null;

        /**
         * 元数据备份策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ScheduleStrategy || null}
         */
        this.MetaStrategy = null;

        /**
         * 表数据备份策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ScheduleStrategy || null}
         */
        this.DataStrategy = null;

        /**
         * 备份表列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BackupTableContent> || null}
         */
        this.BackUpContents = null;

        /**
         * 备份的状态
         * @type {number || null}
         */
        this.BackUpStatus = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BackUpOpened = 'BackUpOpened' in params ? params.BackUpOpened : null;

        if (params.MetaStrategy) {
            let obj = new ScheduleStrategy();
            obj.deserialize(params.MetaStrategy)
            this.MetaStrategy = obj;
        }

        if (params.DataStrategy) {
            let obj = new ScheduleStrategy();
            obj.deserialize(params.DataStrategy)
            this.DataStrategy = obj;
        }

        if (params.BackUpContents) {
            this.BackUpContents = new Array();
            for (let z in params.BackUpContents) {
                let obj = new BackupTableContent();
                obj.deserialize(params.BackUpContents[z]);
                this.BackUpContents.push(obj);
            }
        }
        this.BackUpStatus = 'BackUpStatus' in params ? params.BackUpStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCkSqlApis返回参数结构体
 * @class
 */
class DescribeCkSqlApisResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的查询数据，大部分情况是list，也可能是bool
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReturnData = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReturnData = 'ReturnData' in params ? params.ReturnData : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ScaleUpInstance返回参数结构体
 * @class
 */
class ScaleUpInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FlowId = null;

        /**
         * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 错误信息
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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ErrorMsg = 'ErrorMsg' in params ? params.ErrorMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyUserNewPrivilege返回参数结构体
 * @class
 */
class ModifyUserNewPrivilegeResponse extends  AbstractModel {
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

module.exports = {
    DescribeInstanceShardsRequest: DescribeInstanceShardsRequest,
    ScaleOutInstanceResponse: ScaleOutInstanceResponse,
    ResizeDiskRequest: ResizeDiskRequest,
    DestroyInstanceResponse: DestroyInstanceResponse,
    DescribeInstanceKeyValConfigsRequest: DescribeInstanceKeyValConfigsRequest,
    OpenBackUpResponse: OpenBackUpResponse,
    Charge: Charge,
    DescribeClusterConfigsResponse: DescribeClusterConfigsResponse,
    ActionAlterCkUserRequest: ActionAlterCkUserRequest,
    DescribeSpecRequest: DescribeSpecRequest,
    CkUserAlterInfo: CkUserAlterInfo,
    DescribeBackUpScheduleRequest: DescribeBackUpScheduleRequest,
    DescribeSpecResponse: DescribeSpecResponse,
    ModifyInstanceKeyValConfigsResponse: ModifyInstanceKeyValConfigsResponse,
    DestroyInstanceRequest: DestroyInstanceRequest,
    ModifyUserNewPrivilegeRequest: ModifyUserNewPrivilegeRequest,
    DescribeCkSqlApisRequest: DescribeCkSqlApisRequest,
    ClusterConfigsInfoFromEMR: ClusterConfigsInfoFromEMR,
    OpenBackUpRequest: OpenBackUpRequest,
    BackupTableContent: BackupTableContent,
    CreateInstanceNewResponse: CreateInstanceNewResponse,
    ConfigSubmitContext: ConfigSubmitContext,
    CreateInstanceNewRequest: CreateInstanceNewRequest,
    InstanceInfo: InstanceInfo,
    ModifyClusterConfigsRequest: ModifyClusterConfigsRequest,
    DescribeInstanceKeyValConfigsResponse: DescribeInstanceKeyValConfigsResponse,
    ResourceSpec: ResourceSpec,
    ModifyClusterConfigsResponse: ModifyClusterConfigsResponse,
    DiskSpec: DiskSpec,
    DescribeClusterConfigsRequest: DescribeClusterConfigsRequest,
    ModifyInstanceKeyValConfigsRequest: ModifyInstanceKeyValConfigsRequest,
    MapConfigItem: MapConfigItem,
    ScaleOutInstanceRequest: ScaleOutInstanceRequest,
    CreateBackUpScheduleResponse: CreateBackUpScheduleResponse,
    InstanceConfigItem: InstanceConfigItem,
    DescribeInstanceResponse: DescribeInstanceResponse,
    ScaleUpInstanceRequest: ScaleUpInstanceRequest,
    NodesSummary: NodesSummary,
    DescribeInstanceShardsResponse: DescribeInstanceShardsResponse,
    InstanceConfigInfo: InstanceConfigInfo,
    CreateBackUpScheduleRequest: CreateBackUpScheduleRequest,
    NodeSpec: NodeSpec,
    DescribeInstanceRequest: DescribeInstanceRequest,
    ActionAlterCkUserResponse: ActionAlterCkUserResponse,
    Tag: Tag,
    ScheduleStrategy: ScheduleStrategy,
    ResizeDiskResponse: ResizeDiskResponse,
    DescribeBackUpScheduleResponse: DescribeBackUpScheduleResponse,
    DescribeCkSqlApisResponse: DescribeCkSqlApisResponse,
    ScaleUpInstanceResponse: ScaleUpInstanceResponse,
    ModifyUserNewPrivilegeResponse: ModifyUserNewPrivilegeResponse,

}
