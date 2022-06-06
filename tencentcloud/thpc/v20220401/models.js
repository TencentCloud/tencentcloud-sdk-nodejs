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
 * 集群概览信息。
 * @class
 */
class ClusterOverview extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群状态。取值范围：<br><li>PENDING：创建中<br><li>INITING：初始化中<br><li>INIT_FAILED：初始化失败<br><li>RUNNING：运行中<br><li>TERMINATING：销毁中
         * @type {string || null}
         */
        this.ClusterStatus = null;

        /**
         * 集群名称。
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 集群位置信息。
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * 集群创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 集群调度器。
         * @type {string || null}
         */
        this.SchedulerType = null;

        /**
         * 计算节点数量。
         * @type {number || null}
         */
        this.ComputeNodeCount = null;

        /**
         * 计算节点概览。
         * @type {Array.<ComputeNodeOverview> || null}
         */
        this.ComputeNodeSet = null;

        /**
         * 管控节点数量。
         * @type {number || null}
         */
        this.ManagerNodeCount = null;

        /**
         * 管控节点概览。
         * @type {Array.<ManagerNodeOverview> || null}
         */
        this.ManagerNodeSet = null;

        /**
         * 登录节点概览。
         * @type {Array.<LoginNodeOverview> || null}
         */
        this.LoginNodeSet = null;

        /**
         * 登录节点数量。
         * @type {number || null}
         */
        this.LoginNodeCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterStatus = 'ClusterStatus' in params ? params.ClusterStatus : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.SchedulerType = 'SchedulerType' in params ? params.SchedulerType : null;
        this.ComputeNodeCount = 'ComputeNodeCount' in params ? params.ComputeNodeCount : null;

        if (params.ComputeNodeSet) {
            this.ComputeNodeSet = new Array();
            for (let z in params.ComputeNodeSet) {
                let obj = new ComputeNodeOverview();
                obj.deserialize(params.ComputeNodeSet[z]);
                this.ComputeNodeSet.push(obj);
            }
        }
        this.ManagerNodeCount = 'ManagerNodeCount' in params ? params.ManagerNodeCount : null;

        if (params.ManagerNodeSet) {
            this.ManagerNodeSet = new Array();
            for (let z in params.ManagerNodeSet) {
                let obj = new ManagerNodeOverview();
                obj.deserialize(params.ManagerNodeSet[z]);
                this.ManagerNodeSet.push(obj);
            }
        }

        if (params.LoginNodeSet) {
            this.LoginNodeSet = new Array();
            for (let z in params.LoginNodeSet) {
                let obj = new LoginNodeOverview();
                obj.deserialize(params.LoginNodeSet[z]);
                this.LoginNodeSet.push(obj);
            }
        }
        this.LoginNodeCount = 'LoginNodeCount' in params ? params.LoginNodeCount : null;

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
         * 集群ID列表。通过该参数可以指定需要查询信息的集群列表。<br>如果您不指定该参数，则返回Limit数量以内的集群信息。
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

        /**
         * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
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
        this.ClusterIds = 'ClusterIds' in params ? params.ClusterIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * DeleteNodes返回参数结构体
 * @class
 */
class DeleteNodesResponse extends  AbstractModel {
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
 * 描述了实例的公网可访问性，声明了实例的公网使用计费模式，最大带宽等
 * @class
 */
class InternetAccessible extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络计费类型。取值范围：
BANDWIDTH_PREPAID：预付费按带宽结算
TRAFFIC_POSTPAID_BY_HOUR：流量按小时后付费
BANDWIDTH_POSTPAID_BY_HOUR：带宽按小时后付费
BANDWIDTH_PACKAGE：带宽包用户
默认取值：非带宽包用户默认与子机付费类型保持一致。
         * @type {string || null}
         */
        this.InternetChargeType = null;

        /**
         * 公网出带宽上限，单位：Mbps。默认值：0Mbps。不同机型带宽上限范围不一致，具体限制详见购买网络带宽。
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InternetChargeType = 'InternetChargeType' in params ? params.InternetChargeType : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;

    }
}

/**
 * 描述CFS文件系统版本和挂载信息
 * @class
 */
class CFSOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统本地挂载路径
         * @type {string || null}
         */
        this.LocalPath = null;

        /**
         * 文件系统远程挂载ip及路径
         * @type {string || null}
         */
        this.RemotePath = null;

        /**
         * 文件系统协议类型，默认值NFS 3.0。
<li>NFS 3.0。
<li>NFS 4.0。
<li>TURBO。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 文件系统存储类型，默认值SD；其中 SD 为通用标准型标准型存储， HP为通用性能型存储， TB为turbo标准型， TP 为turbo性能型。
         * @type {string || null}
         */
        this.StorageType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LocalPath = 'LocalPath' in params ? params.LocalPath : null;
        this.RemotePath = 'RemotePath' in params ? params.RemotePath : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;

    }
}

/**
 * 登录节点信息。
 * @class
 */
class LoginNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点[计费类型](https://cloud.tencent.com/document/product/213/2180)。<br><li>PREPAID：预付费，即包年包月<br><li>POSTPAID_BY_HOUR：按小时后付费<br>默认值：POSTPAID_BY_HOUR。
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月节点的购买时长、是否设置自动续费等属性。若指定节点的付费模式为预付费则该参数必传。
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

        /**
         * 节点机型。不同实例机型指定了不同的资源规格。
<br><li>具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 节点系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。
         * @type {Array.<SystemDisk> || null}
         */
        this.SystemDisk = null;

        /**
         * 节点数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。
         * @type {Array.<InternetAccessible> || null}
         */
        this.InternetAccessible = null;

        /**
         * 节点显示名称。<br><li>
不指定节点显示名称则默认显示‘未命名’。
最多支持60个字符。
         * @type {string || null}
         */
        this.InstanceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

        if (params.SystemDisk) {
            this.SystemDisk = new Array();
            for (let z in params.SystemDisk) {
                let obj = new SystemDisk();
                obj.deserialize(params.SystemDisk[z]);
                this.SystemDisk.push(obj);
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

        if (params.InternetAccessible) {
            this.InternetAccessible = new Array();
            for (let z in params.InternetAccessible) {
                let obj = new InternetAccessible();
                obj.deserialize(params.InternetAccessible[z]);
                this.InternetAccessible.push(obj);
            }
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

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
         * 集群中实例所在的位置。
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * 指定管理节点。
         * @type {ManagerNode || null}
         */
        this.ManagerNode = null;

        /**
         * 指定管理节点的数量。默认取值：1。取值范围：1～2。
         * @type {number || null}
         */
        this.ManagerNodeCount = null;

        /**
         * 指定计算节点。
         * @type {ComputeNode || null}
         */
        this.ComputeNode = null;

        /**
         * 指定计算节点的数量。默认取值：0。
         * @type {number || null}
         */
        this.ComputeNodeCount = null;

        /**
         * 调度器类型。<br><li>SGE：SGE调度器。<br><li>SLURM：SLURM调度器。
         * @type {string || null}
         */
        this.SchedulerType = null;

        /**
         * 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-xxx`。目前仅支持公有镜像。
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 私有网络相关信息配置。
         * @type {VirtualPrivateCloud || null}
         */
        this.VirtualPrivateCloud = null;

        /**
         * 集群登录设置。
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * 集群中实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * 是否只预检此次请求。
true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数，请求格式，业务限制和云服务器库存。
如果检查不通过，则返回对应错误码；
如果检查通过，则返回RequestId.
false（默认）：发送正常请求，通过检查后直接创建实例
         * @type {boolean || null}
         */
        this.DryRun = null;

        /**
         * 域名字服务类型。默认值：NIS
<li>NIS：NIS域名字服务。
         * @type {string || null}
         */
        this.AccountType = null;

        /**
         * 集群显示名称。
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 集群存储选项
         * @type {StorageOption || null}
         */
        this.StorageOption = null;

        /**
         * 指定登录节点。
         * @type {LoginNode || null}
         */
        this.LoginNode = null;

        /**
         * 指定登录节点的数量。默认取值：0。取值范围：0～10。
         * @type {number || null}
         */
        this.LoginNodeCount = null;

        /**
         * 创建集群时同时绑定的标签对说明。
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

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }

        if (params.ManagerNode) {
            let obj = new ManagerNode();
            obj.deserialize(params.ManagerNode)
            this.ManagerNode = obj;
        }
        this.ManagerNodeCount = 'ManagerNodeCount' in params ? params.ManagerNodeCount : null;

        if (params.ComputeNode) {
            let obj = new ComputeNode();
            obj.deserialize(params.ComputeNode)
            this.ComputeNode = obj;
        }
        this.ComputeNodeCount = 'ComputeNodeCount' in params ? params.ComputeNodeCount : null;
        this.SchedulerType = 'SchedulerType' in params ? params.SchedulerType : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;

        if (params.VirtualPrivateCloud) {
            let obj = new VirtualPrivateCloud();
            obj.deserialize(params.VirtualPrivateCloud)
            this.VirtualPrivateCloud = obj;
        }

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;
        this.AccountType = 'AccountType' in params ? params.AccountType : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;

        if (params.StorageOption) {
            let obj = new StorageOption();
            obj.deserialize(params.StorageOption)
            this.StorageOption = obj;
        }

        if (params.LoginNode) {
            let obj = new LoginNode();
            obj.deserialize(params.LoginNode)
            this.LoginNode = obj;
        }
        this.LoginNodeCount = 'LoginNodeCount' in params ? params.LoginNodeCount : null;

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
 * 标签键值对。
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
 * CreateCluster返回参数结构体
 * @class
 */
class CreateClusterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID。
注意：此字段可能返回 null，表示取不到有效值。
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
 * BindAutoScalingGroup返回参数结构体
 * @class
 */
class BindAutoScalingGroupResponse extends  AbstractModel {
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
 * 管控节点概览。
 * @class
 */
class ManagerNodeOverview extends  AbstractModel {
    constructor(){
        super();

        /**
         * 管控节点ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NodeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;

    }
}

/**
 * 管控节点信息
 * @class
 */
class ManagerNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点[计费类型](https://cloud.tencent.com/document/product/213/2180)。<br><li>PREPAID：预付费，即包年包月<br><li>POSTPAID_BY_HOUR：按小时后付费<br>默认值：POSTPAID_BY_HOUR。
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月节点的购买时长、是否设置自动续费等属性。若指定节点的付费模式为预付费则该参数必传。
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

        /**
         * 节点机型。不同实例机型指定了不同的资源规格。
<br><li>对于付费模式为PREPAID或POSTPAID\_BY\_HOUR的实例创建，具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 节点系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。
         * @type {SystemDisk || null}
         */
        this.SystemDisk = null;

        /**
         * 节点数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * 节点显示名称。<br><li>
不指定节点显示名称则默认显示‘未命名’。
</li><li>购买多个节点，如果指定模式串`{R:x}`，表示生成数字[`[x, x+n-1]`，其中`n`表示购买节点的数量，例如`server_{R:3}`，购买1个时，节点显示名称为`server_3`；购买2个时，节点显示名称分别为`server_3`，`server_4`。支持指定多个模式串`{R:x}`。
购买多个节点，如果不指定模式串，则在节点显示名称添加后缀`1、2...n`，其中`n`表示购买节点的数量，例如`server_`，购买2个时，节点显示名称分别为`server_1`，`server_2`。</li><li>
最多支持60个字符（包含模式串）。
         * @type {string || null}
         */
        this.InstanceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

        if (params.SystemDisk) {
            let obj = new SystemDisk();
            obj.deserialize(params.SystemDisk)
            this.SystemDisk = obj;
        }

        if (params.DataDisks) {
            this.DataDisks = new Array();
            for (let z in params.DataDisks) {
                let obj = new DataDisk();
                obj.deserialize(params.DataDisks[z]);
                this.DataDisks.push(obj);
            }
        }

        if (params.InternetAccessible) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

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
         * 集群ID。
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
 * 计算节点概览。
 * @class
 */
class ComputeNodeOverview extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计算节点ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NodeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;

    }
}

/**
 * 描述了操作系统所在块设备即系统盘的信息
 * @class
 */
class SystemDisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * 系统盘类型。系统盘类型限制详见存储概述。取值范围：
LOCAL_BASIC：本地硬盘
LOCAL_SSD：本地SSD硬盘
CLOUD_BASIC：普通云硬盘
CLOUD_SSD：SSD云硬盘
CLOUD_PREMIUM：高性能云硬盘

默认取值：当前有库存的硬盘类型。
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 系统盘大小，单位：GB。默认值为 50
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
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;

    }
}

/**
 * 描述了实例的抽象位置
 * @class
 */
class Placement extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例所属的可用区名称。该参数可以通过调用  [DescribeZones](https://cloud.tencent.com/document/product/213/15707) 的返回值中的Zone字段来获取。
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
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * 描述了数据盘的信息
 * @class
 */
class DataDisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据盘大小，单位：GB。最小调整步长为10G，不同数据盘类型取值范围不同，具体限制详见：[存储概述](https://cloud.tencent.com/document/product/213/4952)。默认值为0，表示不购买数据盘。更多限制详见产品文档。
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 数据盘类型。数据盘类型限制详见[存储概述](https://cloud.tencent.com/document/product/213/4952)。取值范围：<br><li>LOCAL_BASIC：本地硬盘<br><li>LOCAL_SSD：本地SSD硬盘<br><li>LOCAL_NVME：本地NVME硬盘，与InstanceType强相关，不支持指定<br><li>LOCAL_PRO：本地HDD硬盘，与InstanceType强相关，不支持指定<br><li>CLOUD_BASIC：普通云硬盘<br><li>CLOUD_PREMIUM：高性能云硬盘<br><li>CLOUD_SSD：SSD云硬盘<br><li>CLOUD_HSSD：增强型SSD云硬盘<br><li>CLOUD_TSSD：极速型SSD云硬盘<br><br>默认取值：LOCAL_BASIC。
         * @type {string || null}
         */
        this.DiskType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;

    }
}

/**
 * AddNodes请求参数结构体
 * @class
 */
class AddNodesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群中实例所在的位置。
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * 集群ID。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-xxx`。目前仅支持公有镜。
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 私有网络相关信息配置。
         * @type {VirtualPrivateCloud || null}
         */
        this.VirtualPrivateCloud = null;

        /**
         * 添加节点数量。
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 节点[计费类型](https://cloud.tencent.com/document/product/213/2180)。<br><li>PREPAID：预付费，即包年包月<br><li>POSTPAID_BY_HOUR：按小时后付费<br><li>SPOTPAID：竞价付费<br>默认值：POSTPAID_BY_HOUR。
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月节点的购买时长、是否设置自动续费等属性。若指定节点的付费模式为预付费则该参数必传。
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

        /**
         * 节点机型。不同实例机型指定了不同的资源规格。<br><li>具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 节点系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。
         * @type {Array.<SystemDisk> || null}
         */
        this.SystemDisk = null;

        /**
         * 节点数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * 节点显示名称。
不指定节点显示名称则默认显示‘未命名’。
最多支持60个字符。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 集群登录设置。
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * 集群中实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * 队列名称。
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * 添加节点类型。默认值：Compute<br><li>Compute：计算节点。<br><li>Login：登录节点。
         * @type {string || null}
         */
        this.NodeRole = null;

        /**
         * 是否只预检此次请求。
true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数，请求格式，业务限制和云服务器库存。
如果检查不通过，则返回对应错误码；
如果检查通过，则返回RequestId.
false（默认）：发送正常请求，通过检查后直接创建实例
         * @type {boolean || null}
         */
        this.DryRun = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;

        if (params.VirtualPrivateCloud) {
            let obj = new VirtualPrivateCloud();
            obj.deserialize(params.VirtualPrivateCloud)
            this.VirtualPrivateCloud = obj;
        }
        this.Count = 'Count' in params ? params.Count : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

        if (params.SystemDisk) {
            this.SystemDisk = new Array();
            for (let z in params.SystemDisk) {
                let obj = new SystemDisk();
                obj.deserialize(params.SystemDisk[z]);
                this.SystemDisk.push(obj);
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

        if (params.InternetAccessible) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.NodeRole = 'NodeRole' in params ? params.NodeRole : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;

    }
}

/**
 * BindAutoScalingGroup请求参数结构体
 * @class
 */
class BindAutoScalingGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 弹性伸缩启动配置ID。
         * @type {string || null}
         */
        this.LaunchConfigurationId = null;

        /**
         * 弹性伸缩组ID。
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * 队列名称。
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * 任务连续等待时间，队列的任务处于连续等待的时间。单位秒。默认值120。
         * @type {number || null}
         */
        this.ExpansionBusyTime = null;

        /**
         * 节点连续空闲（未运行作业）时间，一个节点连续处于空闲状态时间。单位秒。默认值300。
         * @type {number || null}
         */
        this.ShrinkIdleTime = null;

        /**
         * 是否开启自动扩容，默认值true。
         * @type {boolean || null}
         */
        this.EnableAutoExpansion = null;

        /**
         * 是否开启自动缩容，默认值true。
         * @type {boolean || null}
         */
        this.EnableAutoShrink = null;

        /**
         * 是否只预检此次请求。
true：发送检查请求，不会绑定弹性伸缩组。检查项包括是否填写了必需参数，请求格式，业务限制。
如果检查不通过，则返回对应错误码；
如果检查通过，则返回RequestId。
false（默认）：发送正常请求，通过检查后直接绑定弹性伸缩组。
         * @type {boolean || null}
         */
        this.DryRun = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.LaunchConfigurationId = 'LaunchConfigurationId' in params ? params.LaunchConfigurationId : null;
        this.AutoScalingGroupId = 'AutoScalingGroupId' in params ? params.AutoScalingGroupId : null;
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.ExpansionBusyTime = 'ExpansionBusyTime' in params ? params.ExpansionBusyTime : null;
        this.ShrinkIdleTime = 'ShrinkIdleTime' in params ? params.ShrinkIdleTime : null;
        this.EnableAutoExpansion = 'EnableAutoExpansion' in params ? params.EnableAutoExpansion : null;
        this.EnableAutoShrink = 'EnableAutoShrink' in params ? params.EnableAutoShrink : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;

    }
}

/**
 * 描述了VPC相关信息
 * @class
 */
class VirtualPrivateCloud extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私有网络ID，形如`vpc-xxx`。有效的VpcId可通过登录[控制台](https://console.cloud.tencent.com/vpc/vpc?rid=1)查询；也可以调用接口 [DescribeVpcEx](/document/api/215/1372) ，从接口返回中的`unVpcId`字段获取。若在创建子机时VpcId与SubnetId同时传入`DEFAULT`，则强制使用默认vpc网络。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 私有网络子网ID，形如`subnet-xxx`。有效的私有网络子网ID可通过登录[控制台](https://console.cloud.tencent.com/vpc/subnet?rid=1)查询；也可以调用接口  [DescribeSubnets](/document/api/215/15784) ，从接口返回中的`unSubnetId`字段获取。若在创建子机时SubnetId与VpcId同时传入`DEFAULT`，则强制使用默认vpc网络。
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
 * 描述集群文件系统选项
 * @class
 */
class StorageOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群挂载CFS文件系统选项
         * @type {Array.<CFSOption> || null}
         */
        this.CFSOptions = null;

        /**
         * 集群挂在GooseFS文件系统选项
         * @type {Array.<GooseFSOption> || null}
         */
        this.GooseFSOptions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CFSOptions) {
            this.CFSOptions = new Array();
            for (let z in params.CFSOptions) {
                let obj = new CFSOption();
                obj.deserialize(params.CFSOptions[z]);
                this.CFSOptions.push(obj);
            }
        }

        if (params.GooseFSOptions) {
            this.GooseFSOptions = new Array();
            for (let z in params.GooseFSOptions) {
                let obj = new GooseFSOption();
                obj.deserialize(params.GooseFSOptions[z]);
                this.GooseFSOptions.push(obj);
            }
        }

    }
}

/**
 * 登录节点概览。
 * @class
 */
class LoginNodeOverview extends  AbstractModel {
    constructor(){
        super();

        /**
         * 登录节点ID。
         * @type {string || null}
         */
        this.NodeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;

    }
}

/**
 * 计算节点信息。
 * @class
 */
class ComputeNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点[计费类型](https://cloud.tencent.com/document/product/213/2180)。<br><li>PREPAID：预付费，即包年包月<br><li>POSTPAID_BY_HOUR：按小时后付费<br><li>SPOTPAID：竞价付费<br>默认值：POSTPAID_BY_HOUR。
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月节点的购买时长、是否设置自动续费等属性。若指定节点的付费模式为预付费则该参数必传。
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

        /**
         * 节点机型。不同实例机型指定了不同的资源规格。
<br><li>具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 节点系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。
         * @type {SystemDisk || null}
         */
        this.SystemDisk = null;

        /**
         * 节点数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * 节点显示名称。<br><li>
不指定节点显示名称则默认显示‘未命名’。
最多支持60个字符。
         * @type {string || null}
         */
        this.InstanceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

        if (params.SystemDisk) {
            let obj = new SystemDisk();
            obj.deserialize(params.SystemDisk)
            this.SystemDisk = obj;
        }

        if (params.DataDisks) {
            this.DataDisks = new Array();
            for (let z in params.DataDisks) {
                let obj = new DataDisk();
                obj.deserialize(params.DataDisks[z]);
                this.DataDisks.push(obj);
            }
        }

        if (params.InternetAccessible) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

    }
}

/**
 * DeleteNodes请求参数结构体
 * @class
 */
class DeleteNodesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群ID。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 节点ID。
         * @type {Array.<string> || null}
         */
        this.NodeIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.NodeIds = 'NodeIds' in params ? params.NodeIds : null;

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
         * 集群概览信息列表。
         * @type {Array.<ClusterOverview> || null}
         */
        this.ClusterSet = null;

        /**
         * 集群数量。
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

        if (params.ClusterSet) {
            this.ClusterSet = new Array();
            for (let z in params.ClusterSet) {
                let obj = new ClusterOverview();
                obj.deserialize(params.ClusterSet[z]);
                this.ClusterSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 描述GooseFS挂载信息
 * @class
 */
class GooseFSOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件系统本地挂载路径
         * @type {string || null}
         */
        this.LocalPath = null;

        /**
         * 文件系统远程挂载路径
         * @type {string || null}
         */
        this.RemotePath = null;

        /**
         * 文件系统master的ip和端口
         * @type {Array.<string> || null}
         */
        this.Masters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LocalPath = 'LocalPath' in params ? params.LocalPath : null;
        this.RemotePath = 'RemotePath' in params ? params.RemotePath : null;
        this.Masters = 'Masters' in params ? params.Masters : null;

    }
}

/**
 * 描述了实例的计费模式
 * @class
 */
class InstanceChargePrepaid extends  AbstractModel {
    constructor(){
        super();

        /**
         * 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36, 48, 60。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 自动续费标识。取值范围：
NOTIFY_AND_AUTO_RENEW：通知过期且自动续费
NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费
DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费

默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
         * @type {string || null}
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
        this.Period = 'Period' in params ? params.Period : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;

    }
}

/**
 * AddNodes返回参数结构体
 * @class
 */
class AddNodesResponse extends  AbstractModel {
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
    ClusterOverview: ClusterOverview,
    DescribeClustersRequest: DescribeClustersRequest,
    LoginSettings: LoginSettings,
    DeleteNodesResponse: DeleteNodesResponse,
    DeleteClusterResponse: DeleteClusterResponse,
    InternetAccessible: InternetAccessible,
    CFSOption: CFSOption,
    LoginNode: LoginNode,
    CreateClusterRequest: CreateClusterRequest,
    Tag: Tag,
    CreateClusterResponse: CreateClusterResponse,
    BindAutoScalingGroupResponse: BindAutoScalingGroupResponse,
    ManagerNodeOverview: ManagerNodeOverview,
    ManagerNode: ManagerNode,
    DeleteClusterRequest: DeleteClusterRequest,
    ComputeNodeOverview: ComputeNodeOverview,
    SystemDisk: SystemDisk,
    Placement: Placement,
    DataDisk: DataDisk,
    AddNodesRequest: AddNodesRequest,
    BindAutoScalingGroupRequest: BindAutoScalingGroupRequest,
    VirtualPrivateCloud: VirtualPrivateCloud,
    StorageOption: StorageOption,
    LoginNodeOverview: LoginNodeOverview,
    ComputeNode: ComputeNode,
    DeleteNodesRequest: DeleteNodesRequest,
    DescribeClustersResponse: DescribeClustersResponse,
    GooseFSOption: GooseFSOption,
    InstanceChargePrepaid: InstanceChargePrepaid,
    AddNodesResponse: AddNodesResponse,

}
