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
 * InquirePriceRenewEmr返回参数结构体
 * @class
 */
class InquirePriceRenewEmrResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原价，单位为元。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OriginalCost = null;

        /**
         * 折扣价，单位为元。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DiscountCost = null;

        /**
         * 实例续费的时间单位。取值范围：
<li>m：表示月份。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 实例续费的时长。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginalCost = 'OriginalCost' in params ? params.OriginalCost : null;
        this.DiscountCost = 'DiscountCost' in params ? params.DiscountCost : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 多云盘参数
 * @class
 */
class MultiDiskMC extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该类型云盘个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 磁盘类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 云盘大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Volume = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Count = 'Count' in params ? params.Count : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Volume = 'Volume' in params ? params.Volume : null;

    }
}

/**
 * 集群配置。
 * @class
 */
class ClusterSetting extends  AbstractModel {
    constructor(){
        super();

        /**
         * 付费方式。
PREPAID 包年包月。
POSTPAID_BY_HOUR 按量计费，默认方式。
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 是否为HA集群。
         * @type {boolean || null}
         */
        this.SupportHA = null;

        /**
         * 集群所使用的安全组，目前仅支持一个。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 实例位置。
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * 实例所在VPC。
         * @type {VPCSettings || null}
         */
        this.VPCSettings = null;

        /**
         * 实例登录配置。
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * 实例标签。
         * @type {Array.<string> || null}
         */
        this.TagSpecification = null;

        /**
         * 元数据库配置。
         * @type {MetaDbInfo || null}
         */
        this.MetaDB = null;

        /**
         * 实例硬件配置。
         * @type {JobFlowResourceSpec || null}
         */
        this.ResourceSpec = null;

        /**
         * 是否申请公网IP，默认为false。
         * @type {boolean || null}
         */
        this.PublicIpAssigned = null;

        /**
         * 包年包月配置，只对包年包月集群生效。
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

        /**
         * 集群置放群组。
         * @type {string || null}
         */
        this.DisasterRecoverGroupIds = null;

        /**
         * 是否使用cbs加密。
         * @type {boolean || null}
         */
        this.CbsEncryptFlag = null;

        /**
         * 是否使用远程登录，默认为false。
         * @type {boolean || null}
         */
        this.RemoteTcpDefaultPort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;
        this.SupportHA = 'SupportHA' in params ? params.SupportHA : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }

        if (params.VPCSettings) {
            let obj = new VPCSettings();
            obj.deserialize(params.VPCSettings)
            this.VPCSettings = obj;
        }

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }
        this.TagSpecification = 'TagSpecification' in params ? params.TagSpecification : null;

        if (params.MetaDB) {
            let obj = new MetaDbInfo();
            obj.deserialize(params.MetaDB)
            this.MetaDB = obj;
        }

        if (params.ResourceSpec) {
            let obj = new JobFlowResourceSpec();
            obj.deserialize(params.ResourceSpec)
            this.ResourceSpec = obj;
        }
        this.PublicIpAssigned = 'PublicIpAssigned' in params ? params.PublicIpAssigned : null;

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }
        this.DisasterRecoverGroupIds = 'DisasterRecoverGroupIds' in params ? params.DisasterRecoverGroupIds : null;
        this.CbsEncryptFlag = 'CbsEncryptFlag' in params ? params.CbsEncryptFlag : null;
        this.RemoteTcpDefaultPort = 'RemoteTcpDefaultPort' in params ? params.RemoteTcpDefaultPort : null;

    }
}

/**
 * 任务步骤结果描述
 * @class
 */
class JobResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务步骤名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 任务步骤失败时的处理策略，可以为以下值：
"CONTINUE"，跳过当前失败步骤，继续后续步骤。
“TERMINATE_CLUSTER”，终止当前及后续步骤，并销毁集群。
“CANCEL_AND_WAIT”，取消当前步骤并阻塞等待处理。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ActionOnFailure = null;

        /**
         * 当前步骤的状态，可以为以下值：
“JobFlowStepStatusInit”，初始化状态，等待执行。
“JobFlowStepStatusRunning”，任务步骤正在执行。
“JobFlowStepStatusFailed”，任务步骤执行失败。
“JobFlowStepStatusSucceed”，任务步骤执行成功。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.JobState = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ActionOnFailure = 'ActionOnFailure' in params ? params.ActionOnFailure : null;
        this.JobState = 'JobState' in params ? params.JobState : null;

    }
}

/**
 * EMR产品配置
 * @class
 */
class EmrProductConfigOutter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 软件信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SoftInfo = null;

        /**
         * Master节点个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MasterNodeSize = null;

        /**
         * Core节点个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CoreNodeSize = null;

        /**
         * Task节点个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TaskNodeSize = null;

        /**
         * Common节点个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ComNodeSize = null;

        /**
         * Master节点资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OutterResource || null}
         */
        this.MasterResource = null;

        /**
         * Core节点资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OutterResource || null}
         */
        this.CoreResource = null;

        /**
         * Task节点资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OutterResource || null}
         */
        this.TaskResource = null;

        /**
         * Common节点资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OutterResource || null}
         */
        this.ComResource = null;

        /**
         * 是否使用COS
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.OnCos = null;

        /**
         * 收费类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ChargeType = null;

        /**
         * Router节点个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RouterNodeSize = null;

        /**
         * 是否支持HA
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.SupportHA = null;

        /**
         * 是否支持安全模式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.SecurityOn = null;

        /**
         * 安全组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SecurityGroup = null;

        /**
         * 是否开启Cbs加密
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CbsEncrypt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SoftInfo = 'SoftInfo' in params ? params.SoftInfo : null;
        this.MasterNodeSize = 'MasterNodeSize' in params ? params.MasterNodeSize : null;
        this.CoreNodeSize = 'CoreNodeSize' in params ? params.CoreNodeSize : null;
        this.TaskNodeSize = 'TaskNodeSize' in params ? params.TaskNodeSize : null;
        this.ComNodeSize = 'ComNodeSize' in params ? params.ComNodeSize : null;

        if (params.MasterResource) {
            let obj = new OutterResource();
            obj.deserialize(params.MasterResource)
            this.MasterResource = obj;
        }

        if (params.CoreResource) {
            let obj = new OutterResource();
            obj.deserialize(params.CoreResource)
            this.CoreResource = obj;
        }

        if (params.TaskResource) {
            let obj = new OutterResource();
            obj.deserialize(params.TaskResource)
            this.TaskResource = obj;
        }

        if (params.ComResource) {
            let obj = new OutterResource();
            obj.deserialize(params.ComResource)
            this.ComResource = obj;
        }
        this.OnCos = 'OnCos' in params ? params.OnCos : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.RouterNodeSize = 'RouterNodeSize' in params ? params.RouterNodeSize : null;
        this.SupportHA = 'SupportHA' in params ? params.SupportHA : null;
        this.SecurityOn = 'SecurityOn' in params ? params.SecurityOn : null;
        this.SecurityGroup = 'SecurityGroup' in params ? params.SecurityGroup : null;
        this.CbsEncrypt = 'CbsEncrypt' in params ? params.CbsEncrypt : null;

    }
}

/**
 * 登录设置
 * @class
 */
class LoginSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Password
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Public Key
         * @type {string || null}
         */
        this.PublicKeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Password = 'Password' in params ? params.Password : null;
        this.PublicKeyId = 'PublicKeyId' in params ? params.PublicKeyId : null;

    }
}

/**
 * RunJobFlow请求参数结构体
 * @class
 */
class RunJobFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作业名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 是否新创建集群。
true，新创建集群，则使用Instance中的参数进行集群创建。
false，使用已有集群，则通过InstanceId传入。
         * @type {boolean || null}
         */
        this.CreateCluster = null;

        /**
         * 作业流程执行步骤。
         * @type {Array.<Step> || null}
         */
        this.Steps = null;

        /**
         * 作业流程正常完成时，集群的处理方式，可选择:
Terminate 销毁集群。
Reserve 保留集群。
         * @type {string || null}
         */
        this.InstancePolicy = null;

        /**
         * 只有CreateCluster为true时生效，目前只支持EMR版本，例如EMR-2.2.0，不支持ClickHouse和Druid版本。
         * @type {string || null}
         */
        this.ProductVersion = null;

        /**
         * 只在CreateCluster为true时生效。
true 表示安装kerberos，false表示不安装kerberos。
         * @type {boolean || null}
         */
        this.SecurityClusterFlag = null;

        /**
         * 只在CreateCluster为true时生效。
新建集群时，要安装的软件列表。
         * @type {Array.<string> || null}
         */
        this.Software = null;

        /**
         * 引导脚本。
         * @type {Array.<BootstrapAction> || null}
         */
        this.BootstrapActions = null;

        /**
         * 指定配置创建集群。
         * @type {Array.<Configuration> || null}
         */
        this.Configurations = null;

        /**
         * 作业日志保存地址。
         * @type {string || null}
         */
        this.LogUri = null;

        /**
         * 只在CreateCluster为false时生效。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 自定义应用角色，大数据应用访问外部服务时使用的角色，默认为"EME_QCSRole"。
         * @type {string || null}
         */
        this.ApplicationRole = null;

        /**
         * 重入标签，用来可重入检查，防止在一段时间内，创建相同的流程作业。
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * 只在CreateCluster为true时生效，使用该配置创建集群。
         * @type {ClusterSetting || null}
         */
        this.Instance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.CreateCluster = 'CreateCluster' in params ? params.CreateCluster : null;

        if (params.Steps) {
            this.Steps = new Array();
            for (let z in params.Steps) {
                let obj = new Step();
                obj.deserialize(params.Steps[z]);
                this.Steps.push(obj);
            }
        }
        this.InstancePolicy = 'InstancePolicy' in params ? params.InstancePolicy : null;
        this.ProductVersion = 'ProductVersion' in params ? params.ProductVersion : null;
        this.SecurityClusterFlag = 'SecurityClusterFlag' in params ? params.SecurityClusterFlag : null;
        this.Software = 'Software' in params ? params.Software : null;

        if (params.BootstrapActions) {
            this.BootstrapActions = new Array();
            for (let z in params.BootstrapActions) {
                let obj = new BootstrapAction();
                obj.deserialize(params.BootstrapActions[z]);
                this.BootstrapActions.push(obj);
            }
        }

        if (params.Configurations) {
            this.Configurations = new Array();
            for (let z in params.Configurations) {
                let obj = new Configuration();
                obj.deserialize(params.Configurations[z]);
                this.Configurations.push(obj);
            }
        }
        this.LogUri = 'LogUri' in params ? params.LogUri : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ApplicationRole = 'ApplicationRole' in params ? params.ApplicationRole : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;

        if (params.Instance) {
            let obj = new ClusterSetting();
            obj.deserialize(params.Instance)
            this.Instance = obj;
        }

    }
}

/**
 * VPC 参数
 * @class
 */
class VPCSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID
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
 * DescribeInstanceRenewNodes请求参数结构体
 * @class
 */
class DescribeInstanceRenewNodesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群实例ID,实例ID形如: emr-xxxxxxxx
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
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 订单号。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

        /**
         * 客户端Token。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * 扩容流程ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 大订单号。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BillId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.BillId = 'BillId' in params ? params.BillId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceCreateInstance请求参数结构体
 * @class
 */
class InquiryPriceCreateInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 购买实例的时间单位。取值范围：
<li>s：表示秒。PayMode取值为0时，TimeUnit只能取值为s。</li>
<li>m：表示月份。PayMode取值为1时，TimeUnit只能取值为m。</li>
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 购买实例的时长。结合TimeUnit一起使用。
<li>TimeUnit为s时，该参数只能填写3600，表示按量计费实例。</li>
<li>TimeUnit为m时，该参数填写的数字表示包年包月实例的购买时长，如1表示购买一个月</li>
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 询价的节点规格。
         * @type {NewResourceSpec || null}
         */
        this.ResourceSpec = null;

        /**
         * 货币种类。取值范围：
<li>CNY：表示人民币。</li>
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * 实例计费模式。取值范围：
<li>0：表示按量计费。</li>
<li>1：表示包年包月。</li>
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 是否开启节点高可用。取值范围：
<li>0：表示不开启节点高可用。</li>
<li>1：表示开启节点高可用。</li>
         * @type {number || null}
         */
        this.SupportHA = null;

        /**
         * 部署的组件列表。不同的EMR产品ID（ProductId：具体含义参考入参ProductId字段）需要选择不同的必选组件：
<li>ProductId为1的时候，必选组件包括：hadoop-2.7.3、knox-1.2.0、zookeeper-3.4.9</li>
<li>ProductId为2的时候，必选组件包括：hadoop-2.7.3、knox-1.2.0、zookeeper-3.4.9</li>
<li>ProductId为4的时候，必选组件包括：hadoop-2.8.4、knox-1.2.0、zookeeper-3.4.9</li>
<li>ProductId为7的时候，必选组件包括：hadoop-3.1.2、knox-1.2.0、zookeeper-3.4.9</li>
         * @type {Array.<string> || null}
         */
        this.Software = null;

        /**
         * 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * 私有网络相关信息配置。通过该参数可以指定私有网络的ID，子网ID等信息。
         * @type {VPCSettings || null}
         */
        this.VPCSettings = null;

        /**
         * hive共享元数据库类型。取值范围：
<li>EMR_NEW_META：表示集群默认创建</li>
<li>EMR_EXIT_METE：表示集群使用指定EMR-MetaDB。</li>
<li>USER_CUSTOM_META：表示集群使用自定义MetaDB。</li>
         * @type {string || null}
         */
        this.MetaType = null;

        /**
         * EMR-MetaDB实例
         * @type {string || null}
         */
        this.UnifyMetaInstanceId = null;

        /**
         * 自定义MetaDB信息
         * @type {CustomMetaInfo || null}
         */
        this.MetaDBInfo = null;

        /**
         * 产品ID，不同产品ID表示不同的EMR产品版本。取值范围：
<li>1：表示EMR-V1.3.1。</li>
<li>2：表示EMR-V2.0.1。</li>
<li>4：表示EMR-V2.1.0。</li>
<li>7：表示EMR-V3.0.0。</li>
         * @type {number || null}
         */
        this.ProductId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;

        if (params.ResourceSpec) {
            let obj = new NewResourceSpec();
            obj.deserialize(params.ResourceSpec)
            this.ResourceSpec = obj;
        }
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.SupportHA = 'SupportHA' in params ? params.SupportHA : null;
        this.Software = 'Software' in params ? params.Software : null;

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }

        if (params.VPCSettings) {
            let obj = new VPCSettings();
            obj.deserialize(params.VPCSettings)
            this.VPCSettings = obj;
        }
        this.MetaType = 'MetaType' in params ? params.MetaType : null;
        this.UnifyMetaInstanceId = 'UnifyMetaInstanceId' in params ? params.UnifyMetaInstanceId : null;

        if (params.MetaDBInfo) {
            let obj = new CustomMetaInfo();
            obj.deserialize(params.MetaDBInfo)
            this.MetaDBInfo = obj;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

    }
}

/**
 * 资源详情
 * @class
 */
class Resource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点规格描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Spec = null;

        /**
         * 存储类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StorageType = null;

        /**
         * 磁盘类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 内存容量,单位为M
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * CPU核数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 数据盘容量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 系统盘容量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RootSize = null;

        /**
         * 云盘列表，当数据盘为一块云盘时，直接使用DiskType和DiskSize参数，超出部分使用MultiDisks
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MultiDisk> || null}
         */
        this.MultiDisks = null;

        /**
         * 需要绑定的标签列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 规格类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 本地盘数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LocalDiskNum = null;

        /**
         * 盘数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DiskNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Spec = 'Spec' in params ? params.Spec : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.RootSize = 'RootSize' in params ? params.RootSize : null;

        if (params.MultiDisks) {
            this.MultiDisks = new Array();
            for (let z in params.MultiDisks) {
                let obj = new MultiDisk();
                obj.deserialize(params.MultiDisks[z]);
                this.MultiDisks.push(obj);
            }
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.LocalDiskNum = 'LocalDiskNum' in params ? params.LocalDiskNum : null;
        this.DiskNum = 'DiskNum' in params ? params.DiskNum : null;

    }
}

/**
 * TerminateInstance请求参数结构体
 * @class
 */
class TerminateInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 销毁节点ID。该参数为预留参数，用户无需配置。
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;

    }
}

/**
 * TerminateTasks请求参数结构体
 * @class
 */
class TerminateTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 待销毁节点的资源ID列表。资源ID形如：emr-vm-xxxxxxxx。有效的资源ID可通过登录[控制台](https://console.cloud.tencent.com/emr/static/hardware)查询。
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;

    }
}

/**
 * Pod的存储设备描述信息。
 * @class
 */
class PodVolume extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存储类型，可为"pvc"，"hostpath"。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VolumeType = null;

        /**
         * 当VolumeType为"pvc"时，该字段生效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PersistentVolumeContext || null}
         */
        this.PVCVolume = null;

        /**
         * 当VolumeType为"hostpath"时，该字段生效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {HostVolumeContext || null}
         */
        this.HostVolume = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VolumeType = 'VolumeType' in params ? params.VolumeType : null;

        if (params.PVCVolume) {
            let obj = new PersistentVolumeContext();
            obj.deserialize(params.PVCVolume)
            this.PVCVolume = obj;
        }

        if (params.HostVolume) {
            let obj = new HostVolumeContext();
            obj.deserialize(params.HostVolume)
            this.HostVolume = obj;
        }

    }
}

/**
 * TerminateInstance返回参数结构体
 * @class
 */
class TerminateInstanceResponse extends  AbstractModel {
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
 * CreateInstance返回参数结构体
 * @class
 */
class CreateInstanceResponse extends  AbstractModel {
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
 * Pod PVC存储方式描述
 * @class
 */
class PersistentVolumeContext extends  AbstractModel {
    constructor(){
        super();

        /**
         * 磁盘大小，单位为GB。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 磁盘类型。CLOUD_PREMIUM;CLOUD_SSD
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 磁盘数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DiskNum = null;

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
        this.DiskNum = 'DiskNum' in params ? params.DiskNum : null;

    }
}

/**
 * InquiryPriceRenewInstance返回参数结构体
 * @class
 */
class InquiryPriceRenewInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原价，单位为元。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OriginalCost = null;

        /**
         * 折扣价，单位为元。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DiscountCost = null;

        /**
         * 实例续费的时间单位。取值范围：
<li>m：表示月份。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 实例续费的时长。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginalCost = 'OriginalCost' in params ? params.OriginalCost : null;
        this.DiscountCost = 'DiscountCost' in params ? params.DiscountCost : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeJobFlow请求参数结构体
 * @class
 */
class DescribeJobFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程任务Id，RunJobFlow接口返回的值。
         * @type {number || null}
         */
        this.JobFlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobFlowId = 'JobFlowId' in params ? params.JobFlowId : null;

    }
}

/**
 * InquiryPriceCreateInstance返回参数结构体
 * @class
 */
class InquiryPriceCreateInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原价，单位为元。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OriginalCost = null;

        /**
         * 折扣价，单位为元。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DiscountCost = null;

        /**
         * 购买实例的时间单位。取值范围：
<li>s：表示秒。</li>
<li>m：表示月份。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 购买实例的时长。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginalCost = 'OriginalCost' in params ? params.OriginalCost : null;
        this.DiscountCost = 'DiscountCost' in params ? params.DiscountCost : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 引导脚本
 * @class
 */
class BootstrapAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * 脚本位置，支持cos上的文件，且只支持https协议。
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 执行时间。
resourceAfter 表示在机器资源申请成功后执行。
clusterBefore 表示在集群初始化前执行。
clusterAfter 表示在集群初始化后执行。
         * @type {string || null}
         */
        this.WhenRun = null;

        /**
         * 脚本参数
         * @type {Array.<string> || null}
         */
        this.Args = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Path = 'Path' in params ? params.Path : null;
        this.WhenRun = 'WhenRun' in params ? params.WhenRun : null;
        this.Args = 'Args' in params ? params.Args : null;

    }
}

/**
 * Pod HostPath挂载方式描述
 * @class
 */
class HostVolumeContext extends  AbstractModel {
    constructor(){
        super();

        /**
         * Pod挂载宿主机的目录。资源对宿主机的挂载点，指定的挂载点对应了宿主机的路径，该挂载点在Pod中作为数据存储目录使用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VolumePath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VolumePath = 'VolumePath' in params ? params.VolumePath : null;

    }
}

/**
 * 执行步骤
 * @class
 */
class Step extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行步骤名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 执行动作。
         * @type {Execution || null}
         */
        this.ExecutionStep = null;

        /**
         * 执行失败策略。
1. TERMINATE_CLUSTER 执行失败时退出并销毁集群。
2. CANCEL_AND_WAIT 执行失败时阻塞等待。
3. CONTINUE 执行失败时跳过并执行后续步骤。
         * @type {string || null}
         */
        this.ActionOnFailure = null;

        /**
         * 指定执行Step时的用户名，非必须，默认为hadoop。
         * @type {string || null}
         */
        this.User = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.ExecutionStep) {
            let obj = new Execution();
            obj.deserialize(params.ExecutionStep)
            this.ExecutionStep = obj;
        }
        this.ActionOnFailure = 'ActionOnFailure' in params ? params.ActionOnFailure : null;
        this.User = 'User' in params ? params.User : null;

    }
}

/**
 * 实例预付费参数，只有在付费类型为PREPAID时生效。

 * @class
 */
class InstanceChargePrepaid extends  AbstractModel {
    constructor(){
        super();

        /**
         * 包年包月时间，默认为1，单位：月。
取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11, 12, 24, 36, 48, 60。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 是否自动续费，默认为否。
         * @type {boolean || null}
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
 * DescribeClusterNodes请求参数结构体
 * @class
 */
class DescribeClusterNodesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群实例ID,实例ID形如: emr-xxxxxxxx
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 节点标识，取值为：
<li>all：表示获取全部类型节点，cdb信息除外。</li>
<li>master：表示获取master节点信息。</li>
<li>core：表示获取core节点信息。</li>
<li>task：表示获取task节点信息。</li>
<li>common：表示获取common节点信息。</li>
<li>router：表示获取router节点信息。</li>
<li>db：表示获取正常状态的cdb信息。</li>
<li>recyle：表示获取回收站隔离中的节点信息，包括cdb信息。</li>
<li>renew：表示获取所有待续费的节点信息，包括cdb信息，自动续费节点不会返回。</li>
注意：现在只支持以上取值，输入其他值会导致错误。
         * @type {string || null}
         */
        this.NodeFlag = null;

        /**
         * 页编号，默认值为0，表示第一页。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页返回数量，默认值为100，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 资源类型:支持all/host/pod，默认为all
         * @type {string || null}
         */
        this.HardwareResourceType = null;

        /**
         * 支持搜索的字段
         * @type {Array.<SearchItem> || null}
         */
        this.SearchFields = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.NodeFlag = 'NodeFlag' in params ? params.NodeFlag : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.HardwareResourceType = 'HardwareResourceType' in params ? params.HardwareResourceType : null;

        if (params.SearchFields) {
            this.SearchFields = new Array();
            for (let z in params.SearchFields) {
                let obj = new SearchItem();
                obj.deserialize(params.SearchFields[z]);
                this.SearchFields.push(obj);
            }
        }

    }
}

/**
 * 预执行脚本配置
 * @class
 */
class PreExecuteFileSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * 脚本在COS上路径，已废弃
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 执行脚本参数
         * @type {Array.<string> || null}
         */
        this.Args = null;

        /**
         * COS的Bucket名称，已废弃
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * COS的Region名称，已废弃
         * @type {string || null}
         */
        this.Region = null;

        /**
         * COS的Domain数据，已废弃
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 执行顺序
         * @type {number || null}
         */
        this.RunOrder = null;

        /**
         * resourceAfter 或 clusterAfter
         * @type {string || null}
         */
        this.WhenRun = null;

        /**
         * 脚本文件名，已废弃
         * @type {string || null}
         */
        this.CosFileName = null;

        /**
         * 脚本的cos地址
         * @type {string || null}
         */
        this.CosFileURI = null;

        /**
         * cos的SecretId
         * @type {string || null}
         */
        this.CosSecretId = null;

        /**
         * Cos的SecretKey
         * @type {string || null}
         */
        this.CosSecretKey = null;

        /**
         * cos的appid，已废弃
         * @type {string || null}
         */
        this.AppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Path = 'Path' in params ? params.Path : null;
        this.Args = 'Args' in params ? params.Args : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.RunOrder = 'RunOrder' in params ? params.RunOrder : null;
        this.WhenRun = 'WhenRun' in params ? params.WhenRun : null;
        this.CosFileName = 'CosFileName' in params ? params.CosFileName : null;
        this.CosFileURI = 'CosFileURI' in params ? params.CosFileURI : null;
        this.CosSecretId = 'CosSecretId' in params ? params.CosSecretId : null;
        this.CosSecretKey = 'CosSecretKey' in params ? params.CosSecretKey : null;
        this.AppId = 'AppId' in params ? params.AppId : null;

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
         * 产品ID，不同产品ID表示不同的EMR产品版本。取值范围：
<li>1：表示EMR-V1.3.1。</li>
<li>2：表示EMR-V2.0.1。</li>
<li>4：表示EMR-V2.1.0。</li>
<li>7：表示EMR-V3.0.0。</li>
         * @type {number || null}
         */
        this.ProductId = null;

        /**
         * 私有网络相关信息配置。通过该参数可以指定私有网络的ID，子网ID等信息。
         * @type {VPCSettings || null}
         */
        this.VPCSettings = null;

        /**
         * 部署的组件列表。不同的EMR产品ID（ProductId：具体含义参考入参ProductId字段）需要选择不同的必选组件：
<li>ProductId为1的时候，必选组件包括：hadoop-2.7.3、knox-1.2.0、zookeeper-3.4.9</li>
<li>ProductId为2的时候，必选组件包括：hadoop-2.7.3、knox-1.2.0、zookeeper-3.4.9</li>
<li>ProductId为4的时候，必选组件包括：hadoop-2.8.4、knox-1.2.0、zookeeper-3.4.9</li>
<li>ProductId为7的时候，必选组件包括：hadoop-3.1.2、knox-1.2.0、zookeeper-3.4.9</li>
         * @type {Array.<string> || null}
         */
        this.Software = null;

        /**
         * 节点资源的规格。
         * @type {NewResourceSpec || null}
         */
        this.ResourceSpec = null;

        /**
         * 是否开启节点高可用。取值范围：
<li>0：表示不开启节点高可用。</li>
<li>1：表示开启节点高可用。</li>
         * @type {number || null}
         */
        this.SupportHA = null;

        /**
         * 实例名称。
<li>长度限制为6-36个字符。</li>
<li>只允许包含中文、字母、数字、-、_。</li>
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例计费模式。取值范围：
<li>0：表示按量计费。</li>
<li>1：表示包年包月。</li>
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * 购买实例的时长。结合TimeUnit一起使用。
<li>TimeUnit为s时，该参数只能填写3600，表示按量计费实例。</li>
<li>TimeUnit为m时，该参数填写的数字表示包年包月实例的购买时长，如1表示购买一个月</li>
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 购买实例的时间单位。取值范围：
<li>s：表示秒。PayMode取值为0时，TimeUnit只能取值为s。</li>
<li>m：表示月份。PayMode取值为1时，TimeUnit只能取值为m。</li>
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 实例登录设置。通过该参数可以设置所购买节点的登录方式密码或者密钥。
<li>设置密钥时，密码仅用于组件原生WebUI快捷入口登录。</li>
<li>未设置密钥时，密码用于登录所购节点以及组件原生WebUI快捷入口登录。</li>
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * 开启COS访问需要设置的参数。
         * @type {COSSettings || null}
         */
        this.COSSettings = null;

        /**
         * 实例所属安全组的ID，形如sg-xxxxxxxx。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的SecurityGroupId字段来获取。
         * @type {string || null}
         */
        this.SgId = null;

        /**
         * 引导操作脚本设置。
         * @type {Array.<PreExecuteFileSettings> || null}
         */
        this.PreExecutedFileSettings = null;

        /**
         * 包年包月实例是否自动续费。取值范围：
<li>0：表示不自动续费。</li>
<li>1：表示自动续费。</li>
         * @type {number || null}
         */
        this.AutoRenew = null;

        /**
         * 客户端Token。
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * 是否开启集群Master节点公网。取值范围：
<li>NEED_MASTER_WAN：表示开启集群Master节点公网。</li>
<li>NOT_NEED_MASTER_WAN：表示不开启。</li>默认开启集群Master节点公网。
         * @type {string || null}
         */
        this.NeedMasterWan = null;

        /**
         * 是否需要开启外网远程登录，即22号端口。在SgId不为空时，该参数无效。
         * @type {number || null}
         */
        this.RemoteLoginAtCreate = null;

        /**
         * 是否开启安全集群。0表示不开启，非0表示开启。
         * @type {number || null}
         */
        this.CheckSecurity = null;

        /**
         * 访问外部文件系统。
         * @type {string || null}
         */
        this.ExtendFsField = null;

        /**
         * 标签描述列表。通过指定该参数可以同时绑定标签到相应的实例。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 分散置放群组ID列表，当前只支持指定一个。
         * @type {Array.<string> || null}
         */
        this.DisasterRecoverGroupIds = null;

        /**
         * 集群维度CBS加密盘，默认0表示不加密，1表示加密
         * @type {number || null}
         */
        this.CbsEncrypt = null;

        /**
         * hive共享元数据库类型。取值范围：
<li>EMR_NEW_META：表示集群默认创建</li>
<li>EMR_EXIT_METE：表示集群使用指定EMR-MetaDB。</li>
<li>USER_CUSTOM_META：表示集群使用自定义MetaDB。</li>
         * @type {string || null}
         */
        this.MetaType = null;

        /**
         * EMR-MetaDB实例
         * @type {string || null}
         */
        this.UnifyMetaInstanceId = null;

        /**
         * 自定义MetaDB信息
         * @type {CustomMetaInfo || null}
         */
        this.MetaDBInfo = null;

        /**
         * 自定义应用角色。
         * @type {string || null}
         */
        this.ApplicationRole = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

        if (params.VPCSettings) {
            let obj = new VPCSettings();
            obj.deserialize(params.VPCSettings)
            this.VPCSettings = obj;
        }
        this.Software = 'Software' in params ? params.Software : null;

        if (params.ResourceSpec) {
            let obj = new NewResourceSpec();
            obj.deserialize(params.ResourceSpec)
            this.ResourceSpec = obj;
        }
        this.SupportHA = 'SupportHA' in params ? params.SupportHA : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }

        if (params.COSSettings) {
            let obj = new COSSettings();
            obj.deserialize(params.COSSettings)
            this.COSSettings = obj;
        }
        this.SgId = 'SgId' in params ? params.SgId : null;

        if (params.PreExecutedFileSettings) {
            this.PreExecutedFileSettings = new Array();
            for (let z in params.PreExecutedFileSettings) {
                let obj = new PreExecuteFileSettings();
                obj.deserialize(params.PreExecutedFileSettings[z]);
                this.PreExecutedFileSettings.push(obj);
            }
        }
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.NeedMasterWan = 'NeedMasterWan' in params ? params.NeedMasterWan : null;
        this.RemoteLoginAtCreate = 'RemoteLoginAtCreate' in params ? params.RemoteLoginAtCreate : null;
        this.CheckSecurity = 'CheckSecurity' in params ? params.CheckSecurity : null;
        this.ExtendFsField = 'ExtendFsField' in params ? params.ExtendFsField : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.DisasterRecoverGroupIds = 'DisasterRecoverGroupIds' in params ? params.DisasterRecoverGroupIds : null;
        this.CbsEncrypt = 'CbsEncrypt' in params ? params.CbsEncrypt : null;
        this.MetaType = 'MetaType' in params ? params.MetaType : null;
        this.UnifyMetaInstanceId = 'UnifyMetaInstanceId' in params ? params.UnifyMetaInstanceId : null;

        if (params.MetaDBInfo) {
            let obj = new CustomMetaInfo();
            obj.deserialize(params.MetaDBInfo)
            this.MetaDBInfo = obj;
        }
        this.ApplicationRole = 'ApplicationRole' in params ? params.ApplicationRole : null;

    }
}

/**
 * InquirePriceRenewEmr请求参数结构体
 * @class
 */
class InquirePriceRenewEmrRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例续费的时长。需要结合TimeUnit一起使用。1表示续费1一个月
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 待续费集群ID列表。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * 实例计费模式。此处只支持取值为1，表示包年包月。
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 实例续费的时间单位。取值范围：
<li>m：表示月份。</li>
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 货币种类。取值范围：
<li>CNY：表示人民币。</li>
         * @type {string || null}
         */
        this.Currency = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.Currency = 'Currency' in params ? params.Currency : null;

    }
}

/**
 * POD自定义权限和自定义参数
 * @class
 */
class PodParameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * TKE或EKS集群ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 自定义权限
         * @type {string || null}
         */
        this.Config = null;

        /**
         * 自定义参数
         * @type {string || null}
         */
        this.Parameter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Config = 'Config' in params ? params.Config : null;
        this.Parameter = 'Parameter' in params ? params.Parameter : null;

    }
}

/**
 * 元数据库信息
 * @class
 */
class MetaDbInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 元数据类型。
         * @type {string || null}
         */
        this.MetaType = null;

        /**
         * 统一元数据库实例ID。
         * @type {string || null}
         */
        this.UnifyMetaInstanceId = null;

        /**
         * 自建元数据库信息。
         * @type {CustomMetaInfo || null}
         */
        this.MetaDBInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MetaType = 'MetaType' in params ? params.MetaType : null;
        this.UnifyMetaInstanceId = 'UnifyMetaInstanceId' in params ? params.UnifyMetaInstanceId : null;

        if (params.MetaDBInfo) {
            let obj = new CustomMetaInfo();
            obj.deserialize(params.MetaDBInfo)
            this.MetaDBInfo = obj;
        }

    }
}

/**
 * 执行动作。
 * @class
 */
class Execution extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务类型，目前支持以下类型。
1. “MR”，将通过hadoop jar的方式提交。
2. "HIVE"，将通过hive -f的方式提交。
3. "SPARK"，将通过spark-submit的方式提交。
         * @type {string || null}
         */
        this.JobType = null;

        /**
         * 任务参数，提供除提交指令以外的参数。
         * @type {Array.<string> || null}
         */
        this.Args = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobType = 'JobType' in params ? params.JobType : null;
        this.Args = 'Args' in params ? params.Args : null;

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
         * 符合条件的实例总数。
         * @type {number || null}
         */
        this.TotalCnt = null;

        /**
         * EMR实例详细信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ClusterInstancesInfo> || null}
         */
        this.ClusterList = null;

        /**
         * 实例关联的标签键列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.TagKeys = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCnt = 'TotalCnt' in params ? params.TotalCnt : null;

        if (params.ClusterList) {
            this.ClusterList = new Array();
            for (let z in params.ClusterList) {
                let obj = new ClusterInstancesInfo();
                obj.deserialize(params.ClusterList[z]);
                this.ClusterList.push(obj);
            }
        }
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceScaleOutInstance请求参数结构体
 * @class
 */
class InquiryPriceScaleOutInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 扩容的时间单位。取值范围：
<li>s：表示秒。PayMode取值为0时，TimeUnit只能取值为s。</li>
<li>m：表示月份。PayMode取值为1时，TimeUnit只能取值为m。</li>
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 扩容的时长。结合TimeUnit一起使用。
<li>TimeUnit为s时，该参数只能填写3600，表示按量计费实例。</li>
<li>TimeUnit为m时，该参数填写的数字表示包年包月实例的购买时长，如1表示购买一个月</li>
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 实例所属的可用区ID，例如100003。该参数可以通过调用 [DescribeZones](https://cloud.tencent.com/document/api/213/15707) 的返回值中的ZoneId字段来获取。
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 实例计费模式。取值范围：
<li>0：表示按量计费。</li>
<li>1：表示包年包月。</li>
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 扩容的Core节点数量。
         * @type {number || null}
         */
        this.CoreCount = null;

        /**
         * 扩容的Task节点数量。
         * @type {number || null}
         */
        this.TaskCount = null;

        /**
         * 货币种类。取值范围：
<li>CNY：表示人民币。</li>
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * 扩容的Router节点数量。
         * @type {number || null}
         */
        this.RouterCount = null;

        /**
         * 扩容的Master节点数量。
         * @type {number || null}
         */
        this.MasterCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.CoreCount = 'CoreCount' in params ? params.CoreCount : null;
        this.TaskCount = 'TaskCount' in params ? params.TaskCount : null;
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.RouterCount = 'RouterCount' in params ? params.RouterCount : null;
        this.MasterCount = 'MasterCount' in params ? params.MasterCount : null;

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
        this.TagKey = null;

        /**
         * 标签值
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
 * 描述集群实例位置信息
 * @class
 */
class Placement extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例所属项目ID。该参数可以通过调用 DescribeProject 的返回值中的 projectId 字段来获取。填0为默认项目。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 实例所属的可用区，例如ap-guangzhou-1。该参数也可以通过调用 DescribeZones 的返回值中的Zone字段来获取。
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * 搜索字段
 * @class
 */
class SearchItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 支持搜索的类型
         * @type {string || null}
         */
        this.SearchType = null;

        /**
         * 支持搜索的值
         * @type {string || null}
         */
        this.SearchValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SearchType = 'SearchType' in params ? params.SearchType : null;
        this.SearchValue = 'SearchValue' in params ? params.SearchValue : null;

    }
}

/**
 * POD浮动规格
 * @class
 */
class DynamicPodSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需求最小cpu核数
         * @type {number || null}
         */
        this.RequestCpu = null;

        /**
         * 需求最大cpu核数
         * @type {number || null}
         */
        this.LimitCpu = null;

        /**
         * 需求最小memory，单位MB
         * @type {number || null}
         */
        this.RequestMemory = null;

        /**
         * 需求最大memory，单位MB
         * @type {number || null}
         */
        this.LimitMemory = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestCpu = 'RequestCpu' in params ? params.RequestCpu : null;
        this.LimitCpu = 'LimitCpu' in params ? params.LimitCpu : null;
        this.RequestMemory = 'RequestMemory' in params ? params.RequestMemory : null;
        this.LimitMemory = 'LimitMemory' in params ? params.LimitMemory : null;

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
         * 集群筛选策略。取值范围：
<li>clusterList：表示查询除了已销毁集群之外的集群列表。</li>
<li>monitorManage：表示查询除了已销毁、创建中以及创建失败的集群之外的集群列表。</li>
<li>cloudHardwareManage/componentManage：目前这两个取值为预留取值，暂时和monitorManage表示同样的含义。</li>
         * @type {string || null}
         */
        this.DisplayStrategy = null;

        /**
         * 按照一个或者多个实例ID查询。实例ID形如: emr-xxxxxxxx 。(此参数的具体格式可参考API[简介](https://cloud.tencent.com/document/api/213/15688)的 Ids.N 一节)。如果不填写实例ID，返回该APPID下所有实例列表。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 页编号，默认值为0，表示第一页。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 每页返回数量，默认值为10，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 建议必填-1，表示拉取所有项目下的集群。
不填默认值为0，表示拉取默认项目下的集群。
实例所属项目ID。该参数可以通过调用 [DescribeProject](https://cloud.tencent.com/document/api/378/4400) 的返回值中的 projectId 字段来获取。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 排序字段。取值范围：
<li>clusterId：表示按照实例ID排序。</li>
<li>addTime：表示按照实例创建时间排序。</li>
<li>status：表示按照实例的状态码排序。</li>
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 按照OrderField升序或者降序进行排序。取值范围：
<li>0：表示降序。</li>
<li>1：表示升序。</li>默认值为0。
         * @type {number || null}
         */
        this.Asc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DisplayStrategy = 'DisplayStrategy' in params ? params.DisplayStrategy : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.Asc = 'Asc' in params ? params.Asc : null;

    }
}

/**
 * 用户自建Hive-MetaDB信息
 * @class
 */
class CustomMetaInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义MetaDB的JDBC连接，请以 jdbc:mysql:// 开头
         * @type {string || null}
         */
        this.MetaDataJdbcUrl = null;

        /**
         * 自定义MetaDB用户名
         * @type {string || null}
         */
        this.MetaDataUser = null;

        /**
         * 自定义MetaDB密码
         * @type {string || null}
         */
        this.MetaDataPass = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MetaDataJdbcUrl = 'MetaDataJdbcUrl' in params ? params.MetaDataJdbcUrl : null;
        this.MetaDataUser = 'MetaDataUser' in params ? params.MetaDataUser : null;
        this.MetaDataPass = 'MetaDataPass' in params ? params.MetaDataPass : null;

    }
}

/**
 * 磁盘描述。
 * @class
 */
class DiskSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * 磁盘类型。
LOCAL_BASIC  本地盘。
CLOUD_BASIC 云硬盘。
LOCAL_SSD 本地SSD。
CLOUD_SSD 云SSD。
CLOUD_PREMIUM 高效云盘。
CLOUD_HSSD 增强型云SSD。
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 磁盘大小，单位GB。
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
 * 流程作业资源描述
 * @class
 */
class JobFlowResourceSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主节点数量。
         * @type {number || null}
         */
        this.MasterCount = null;

        /**
         * 主节点配置。
         * @type {JobFlowResource || null}
         */
        this.MasterResourceSpec = null;

        /**
         * Core节点数量
         * @type {number || null}
         */
        this.CoreCount = null;

        /**
         * Core节点配置。
         * @type {JobFlowResource || null}
         */
        this.CoreResourceSpec = null;

        /**
         * Task节点数量。
         * @type {number || null}
         */
        this.TaskCount = null;

        /**
         * Common节点数量。
         * @type {number || null}
         */
        this.CommonCount = null;

        /**
         * Task节点配置。
         * @type {JobFlowResource || null}
         */
        this.TaskResourceSpec = null;

        /**
         * Common节点配置。
         * @type {JobFlowResource || null}
         */
        this.CommonResourceSpec = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MasterCount = 'MasterCount' in params ? params.MasterCount : null;

        if (params.MasterResourceSpec) {
            let obj = new JobFlowResource();
            obj.deserialize(params.MasterResourceSpec)
            this.MasterResourceSpec = obj;
        }
        this.CoreCount = 'CoreCount' in params ? params.CoreCount : null;

        if (params.CoreResourceSpec) {
            let obj = new JobFlowResource();
            obj.deserialize(params.CoreResourceSpec)
            this.CoreResourceSpec = obj;
        }
        this.TaskCount = 'TaskCount' in params ? params.TaskCount : null;
        this.CommonCount = 'CommonCount' in params ? params.CommonCount : null;

        if (params.TaskResourceSpec) {
            let obj = new JobFlowResource();
            obj.deserialize(params.TaskResourceSpec)
            this.TaskResourceSpec = obj;
        }

        if (params.CommonResourceSpec) {
            let obj = new JobFlowResource();
            obj.deserialize(params.CommonResourceSpec)
            this.CommonResourceSpec = obj;
        }

    }
}

/**
 * InquiryPriceUpdateInstance请求参数结构体
 * @class
 */
class InquiryPriceUpdateInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 变配的时间单位。取值范围：
<li>s：表示秒。PayMode取值为0时，TimeUnit只能取值为s。</li>
<li>m：表示月份。PayMode取值为1时，TimeUnit只能取值为m。</li>
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 变配的时长。结合TimeUnit一起使用。
<li>TimeUnit为s时，该参数只能填写3600，表示按量计费实例。</li>
<li>TimeUnit为m时，该参数填写的数字表示包年包月实例的购买时长，如1表示购买一个月</li>
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 节点变配的目标配置。
         * @type {UpdateInstanceSettings || null}
         */
        this.UpdateSpec = null;

        /**
         * 实例计费模式。取值范围：
<li>0：表示按量计费。</li>
<li>1：表示包年包月。</li>
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * 货币种类。取值范围：
<li>CNY：表示人民币。</li>
         * @type {string || null}
         */
        this.Currency = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;

        if (params.UpdateSpec) {
            let obj = new UpdateInstanceSettings();
            obj.deserialize(params.UpdateSpec)
            this.UpdateSpec = obj;
        }
        this.PayMode = 'PayMode' in params ? params.PayMode : null;

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.Currency = 'Currency' in params ? params.Currency : null;

    }
}

/**
 * DescribeInstanceRenewNodes返回参数结构体
 * @class
 */
class DescribeInstanceRenewNodesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询到的节点总数
         * @type {number || null}
         */
        this.TotalCnt = null;

        /**
         * 节点详细信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RenewInstancesInfo> || null}
         */
        this.NodeList = null;

        /**
         * 用户所有的标签键列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.MetaInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCnt = 'TotalCnt' in params ? params.TotalCnt : null;

        if (params.NodeList) {
            this.NodeList = new Array();
            for (let z in params.NodeList) {
                let obj = new RenewInstancesInfo();
                obj.deserialize(params.NodeList[z]);
                this.NodeList.push(obj);
            }
        }
        this.MetaInfo = 'MetaInfo' in params ? params.MetaInfo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * COS 相关配置
 * @class
 */
class COSSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * COS SecretId
         * @type {string || null}
         */
        this.CosSecretId = null;

        /**
         * COS SecrectKey
         * @type {string || null}
         */
        this.CosSecretKey = null;

        /**
         * 日志存储在COS上的路径
         * @type {string || null}
         */
        this.LogOnCosPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CosSecretId = 'CosSecretId' in params ? params.CosSecretId : null;
        this.CosSecretKey = 'CosSecretKey' in params ? params.CosSecretKey : null;
        this.LogOnCosPath = 'LogOnCosPath' in params ? params.LogOnCosPath : null;

    }
}

/**
 * 集群实例信息
 * @class
 */
class ClusterInstancesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 标题
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Ftitle = null;

        /**
         * 集群名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 地域ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 地区ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 用户APPID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 用户UIN
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 项目Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 集群VPCID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VpcId = null;

        /**
         * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SubnetId = null;

        /**
         * 实例的状态码。取值范围：
<li>2：表示集群运行中。</li>
<li>3：表示集群创建中。</li>
<li>4：表示集群扩容中。</li>
<li>5：表示集群增加router节点中。</li>
<li>6：表示集群安装组件中。</li>
<li>7：表示集群执行命令中。</li>
<li>8：表示重启服务中。</li>
<li>9：表示进入维护中。</li>
<li>10：表示服务暂停中。</li>
<li>11：表示退出维护中。</li>
<li>12：表示退出暂停中。</li>
<li>13：表示配置下发中。</li>
<li>14：表示销毁集群中。</li>
<li>15：表示销毁core节点中。</li>
<li>16：销毁task节点中。</li>
<li>17：表示销毁router节点中。</li>
<li>18：表示更改webproxy密码中。</li>
<li>19：表示集群隔离中。</li>
<li>20：表示集群冲正中。</li>
<li>21：表示集群回收中。</li>
<li>22：表示变配等待中。</li>
<li>23：表示集群已隔离。</li>
<li>24：表示缩容节点中。</li>
<li>33：表示集群等待退费中。</li>
<li>34：表示集群已退费。</li>
<li>301：表示创建失败。</li>
<li>302：表示扩容失败。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 添加时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * 已经运行时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RunTime = null;

        /**
         * 集群产品配置信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EmrProductConfigOutter || null}
         */
        this.Config = null;

        /**
         * 主节点外网IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MasterIp = null;

        /**
         * EMR版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EmrVersion = null;

        /**
         * 收费类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ChargeType = null;

        /**
         * 交易版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TradeVersion = null;

        /**
         * 资源订单ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ResourceOrderId = null;

        /**
         * 是否计费集群
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsTradeCluster = null;

        /**
         * 集群错误状态告警信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AlarmInfo = null;

        /**
         * 是否采用新架构
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsWoodpeckerCluster = null;

        /**
         * 元数据库信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MetaDb = null;

        /**
         * 标签信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * Hive元数据信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HiveMetaDb = null;

        /**
         * 集群类型:EMR,CLICKHOUSE,DRUID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceClass = null;

        /**
         * 集群所有节点的别名序列化
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AliasInfo = null;

        /**
         * 集群版本Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProductId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Ftitle = 'Ftitle' in params ? params.Ftitle : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.RunTime = 'RunTime' in params ? params.RunTime : null;

        if (params.Config) {
            let obj = new EmrProductConfigOutter();
            obj.deserialize(params.Config)
            this.Config = obj;
        }
        this.MasterIp = 'MasterIp' in params ? params.MasterIp : null;
        this.EmrVersion = 'EmrVersion' in params ? params.EmrVersion : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.TradeVersion = 'TradeVersion' in params ? params.TradeVersion : null;
        this.ResourceOrderId = 'ResourceOrderId' in params ? params.ResourceOrderId : null;
        this.IsTradeCluster = 'IsTradeCluster' in params ? params.IsTradeCluster : null;
        this.AlarmInfo = 'AlarmInfo' in params ? params.AlarmInfo : null;
        this.IsWoodpeckerCluster = 'IsWoodpeckerCluster' in params ? params.IsWoodpeckerCluster : null;
        this.MetaDb = 'MetaDb' in params ? params.MetaDb : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.HiveMetaDb = 'HiveMetaDb' in params ? params.HiveMetaDb : null;
        this.ServiceClass = 'ServiceClass' in params ? params.ServiceClass : null;
        this.AliasInfo = 'AliasInfo' in params ? params.AliasInfo : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

    }
}

/**
 * 扩容容器资源时的资源描述
 * @class
 */
class PodSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * 外部资源提供者的标识符，例如"cls-a1cd23fa"。
         * @type {string || null}
         */
        this.ResourceProviderIdentifier = null;

        /**
         * 外部资源提供者类型，例如"tke",当前仅支持"tke"。
         * @type {string || null}
         */
        this.ResourceProviderType = null;

        /**
         * 资源的用途，即节点类型，当前仅支持"TASK"。
         * @type {string || null}
         */
        this.NodeType = null;

        /**
         * CPU核数。
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 内存大小，单位为GB。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 资源对宿主机的挂载点，指定的挂载点对应了宿主机的路径，该挂载点在Pod中作为数据存储目录使用。弃用
         * @type {Array.<string> || null}
         */
        this.DataVolumes = null;

        /**
         * Eks集群-CPU类型，当前支持"intel"和"amd"
         * @type {string || null}
         */
        this.CpuType = null;

        /**
         * Pod节点数据目录挂载信息。
         * @type {Array.<PodVolume> || null}
         */
        this.PodVolumes = null;

        /**
         * 是否浮动规格，1是，0否
         * @type {number || null}
         */
        this.IsDynamicSpec = null;

        /**
         * 浮动规格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DynamicPodSpec || null}
         */
        this.DynamicPodSpec = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceProviderIdentifier = 'ResourceProviderIdentifier' in params ? params.ResourceProviderIdentifier : null;
        this.ResourceProviderType = 'ResourceProviderType' in params ? params.ResourceProviderType : null;
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.DataVolumes = 'DataVolumes' in params ? params.DataVolumes : null;
        this.CpuType = 'CpuType' in params ? params.CpuType : null;

        if (params.PodVolumes) {
            this.PodVolumes = new Array();
            for (let z in params.PodVolumes) {
                let obj = new PodVolume();
                obj.deserialize(params.PodVolumes[z]);
                this.PodVolumes.push(obj);
            }
        }
        this.IsDynamicSpec = 'IsDynamicSpec' in params ? params.IsDynamicSpec : null;

        if (params.DynamicPodSpec) {
            let obj = new DynamicPodSpec();
            obj.deserialize(params.DynamicPodSpec)
            this.DynamicPodSpec = obj;
        }

    }
}

/**
 * 多云盘参数
 * @class
 */
class MultiDisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云盘类型("CLOUD_PREMIUM","CLOUD_SSD","CLOUD_BASIC")的一种
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 云盘大小
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * 该类型云盘个数
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
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * RunJobFlow返回参数结构体
 * @class
 */
class RunJobFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 作业流程ID。
         * @type {number || null}
         */
        this.JobFlowId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobFlowId = 'JobFlowId' in params ? params.JobFlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 集群续费实例信息
 * @class
 */
class RenewInstancesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点资源ID
         * @type {string || null}
         */
        this.EmrResourceId = null;

        /**
         * 节点类型。0:common节点；1:master节点
；2:core节点；3:task节点
         * @type {number || null}
         */
        this.Flag = null;

        /**
         * 内网IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 节点内存描述
         * @type {string || null}
         */
        this.MemDesc = null;

        /**
         * 节点核数
         * @type {number || null}
         */
        this.CpuNum = null;

        /**
         * 硬盘大小
         * @type {string || null}
         */
        this.DiskSize = null;

        /**
         * 过期时间
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 节点规格
         * @type {string || null}
         */
        this.Spec = null;

        /**
         * 磁盘类型
         * @type {number || null}
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
        this.EmrResourceId = 'EmrResourceId' in params ? params.EmrResourceId : null;
        this.Flag = 'Flag' in params ? params.Flag : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.MemDesc = 'MemDesc' in params ? params.MemDesc : null;
        this.CpuNum = 'CpuNum' in params ? params.CpuNum : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.Spec = 'Spec' in params ? params.Spec : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;

    }
}

/**
 * InquiryPriceScaleOutInstance返回参数结构体
 * @class
 */
class InquiryPriceScaleOutInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原价，单位为元。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OriginalCost = null;

        /**
         * 折扣价，单位为元。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiscountCost = null;

        /**
         * 扩容的时间单位。取值范围：
<li>s：表示秒。</li>
<li>m：表示月份。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * 询价的节点规格。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PriceResource || null}
         */
        this.PriceSpec = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginalCost = 'OriginalCost' in params ? params.OriginalCost : null;
        this.DiscountCost = 'DiscountCost' in params ? params.DiscountCost : null;
        this.Unit = 'Unit' in params ? params.Unit : null;

        if (params.PriceSpec) {
            let obj = new PriceResource();
            obj.deserialize(params.PriceSpec)
            this.PriceSpec = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 资源详情
 * @class
 */
class OutterResource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Spec = null;

        /**
         * 规格名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SpecName = null;

        /**
         * 硬盘类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StorageType = null;

        /**
         * 硬盘类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 系统盘大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RootSize = null;

        /**
         * 内存大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * CPU个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 硬盘大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 规格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Spec = 'Spec' in params ? params.Spec : null;
        this.SpecName = 'SpecName' in params ? params.SpecName : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.RootSize = 'RootSize' in params ? params.RootSize : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

    }
}

/**
 * 变配资源规格
 * @class
 */
class UpdateInstanceSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内存容量，单位为G
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * CPU核数
         * @type {number || null}
         */
        this.CPUCores = null;

        /**
         * 机器资源ID（EMR测资源标识）
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 变配机器规格
         * @type {string || null}
         */
        this.InstanceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.CPUCores = 'CPUCores' in params ? params.CPUCores : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

    }
}

/**
 * 自定义配置参数
 * @class
 */
class Configuration extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置文件名，支持SPARK、HIVE、HDFS、YARN的部分配置文件自定义。
         * @type {string || null}
         */
        this.Classification = null;

        /**
         * 配置参数通过KV的形式传入，部分文件支持自定义，可以通过特殊的键"content"传入所有内容。
         * @type {string || null}
         */
        this.Properties = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Classification = 'Classification' in params ? params.Classification : null;
        this.Properties = 'Properties' in params ? params.Properties : null;

    }
}

/**
 * TerminateTasks返回参数结构体
 * @class
 */
class TerminateTasksResponse extends  AbstractModel {
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
 * 询价资源
 * @class
 */
class PriceResource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要的规格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Spec = null;

        /**
         * 硬盘类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StorageType = null;

        /**
         * 硬盘类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 系统盘大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RootSize = null;

        /**
         * 内存大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * 核心数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 硬盘大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 云盘列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MultiDisk> || null}
         */
        this.MultiDisks = null;

        /**
         * 磁盘数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DiskCnt = null;

        /**
         * 规格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 磁盘数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DiskNum = null;

        /**
         * 本地盘的数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LocalDiskNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Spec = 'Spec' in params ? params.Spec : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.RootSize = 'RootSize' in params ? params.RootSize : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;

        if (params.MultiDisks) {
            this.MultiDisks = new Array();
            for (let z in params.MultiDisks) {
                let obj = new MultiDisk();
                obj.deserialize(params.MultiDisks[z]);
                this.MultiDisks.push(obj);
            }
        }
        this.DiskCnt = 'DiskCnt' in params ? params.DiskCnt : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.DiskNum = 'DiskNum' in params ? params.DiskNum : null;
        this.LocalDiskNum = 'LocalDiskNum' in params ? params.LocalDiskNum : null;

    }
}

/**
 * DescribeClusterNodes返回参数结构体
 * @class
 */
class DescribeClusterNodesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询到的节点总数
         * @type {number || null}
         */
        this.TotalCnt = null;

        /**
         * 节点详细信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NodeHardwareInfo> || null}
         */
        this.NodeList = null;

        /**
         * 用户所有的标签键列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.TagKeys = null;

        /**
         * 资源类型列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.HardwareResourceTypeList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCnt = 'TotalCnt' in params ? params.TotalCnt : null;

        if (params.NodeList) {
            this.NodeList = new Array();
            for (let z in params.NodeList) {
                let obj = new NodeHardwareInfo();
                obj.deserialize(params.NodeList[z]);
                this.NodeList.push(obj);
            }
        }
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;
        this.HardwareResourceTypeList = 'HardwareResourceTypeList' in params ? params.HardwareResourceTypeList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 节点硬件信息
 * @class
 */
class NodeHardwareInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户APPID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 序列号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SerialNo = null;

        /**
         * 机器实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrderNo = null;

        /**
         * master节点绑定外网IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WanIp = null;

        /**
         * 节点类型。0:common节点；1:master节点
；2:core节点；3:task节点
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Flag = null;

        /**
         * 节点规格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Spec = null;

        /**
         * 节点核数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CpuNum = null;

        /**
         * 节点内存
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * 节点内存描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MemDesc = null;

        /**
         * 节点所在region
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 节点所在Zone
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 申请时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplyTime = null;

        /**
         * 释放时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FreeTime = null;

        /**
         * 硬盘大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiskSize = null;

        /**
         * 节点描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NameTag = null;

        /**
         * 节点部署服务
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Services = null;

        /**
         * 磁盘类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StorageType = null;

        /**
         * 系统盘大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RootSize = null;

        /**
         * 付费类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ChargeType = null;

        /**
         * 数据库IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CdbIp = null;

        /**
         * 数据库端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CdbPort = null;

        /**
         * 硬盘容量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HwDiskSize = null;

        /**
         * 硬盘容量描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HwDiskSizeDesc = null;

        /**
         * 内存容量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HwMemSize = null;

        /**
         * 内存容量描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HwMemSizeDesc = null;

        /**
         * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 节点资源ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EmrResourceId = null;

        /**
         * 续费标志
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsAutoRenew = null;

        /**
         * 设备标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeviceClass = null;

        /**
         * 支持变配
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Mutable = null;

        /**
         * 多云盘
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MultiDiskMC> || null}
         */
        this.MCMultiDisk = null;

        /**
         * 数据库信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CdbInfo || null}
         */
        this.CdbNodeInfo = null;

        /**
         * 内网IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 此节点是否可销毁，1可销毁，0不可销毁
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Destroyable = null;

        /**
         * 节点绑定的标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 是否是自动扩缩容节点，0为普通节点，1为自动扩缩容节点。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AutoFlag = null;

        /**
         * 资源类型, host/pod
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HardwareResourceType = null;

        /**
         * 是否浮动规格，1是，0否
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsDynamicSpec = null;

        /**
         * 浮动规格值json字符串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DynamicPodSpec = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.SerialNo = 'SerialNo' in params ? params.SerialNo : null;
        this.OrderNo = 'OrderNo' in params ? params.OrderNo : null;
        this.WanIp = 'WanIp' in params ? params.WanIp : null;
        this.Flag = 'Flag' in params ? params.Flag : null;
        this.Spec = 'Spec' in params ? params.Spec : null;
        this.CpuNum = 'CpuNum' in params ? params.CpuNum : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.MemDesc = 'MemDesc' in params ? params.MemDesc : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ApplyTime = 'ApplyTime' in params ? params.ApplyTime : null;
        this.FreeTime = 'FreeTime' in params ? params.FreeTime : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.NameTag = 'NameTag' in params ? params.NameTag : null;
        this.Services = 'Services' in params ? params.Services : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.RootSize = 'RootSize' in params ? params.RootSize : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.CdbIp = 'CdbIp' in params ? params.CdbIp : null;
        this.CdbPort = 'CdbPort' in params ? params.CdbPort : null;
        this.HwDiskSize = 'HwDiskSize' in params ? params.HwDiskSize : null;
        this.HwDiskSizeDesc = 'HwDiskSizeDesc' in params ? params.HwDiskSizeDesc : null;
        this.HwMemSize = 'HwMemSize' in params ? params.HwMemSize : null;
        this.HwMemSizeDesc = 'HwMemSizeDesc' in params ? params.HwMemSizeDesc : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.EmrResourceId = 'EmrResourceId' in params ? params.EmrResourceId : null;
        this.IsAutoRenew = 'IsAutoRenew' in params ? params.IsAutoRenew : null;
        this.DeviceClass = 'DeviceClass' in params ? params.DeviceClass : null;
        this.Mutable = 'Mutable' in params ? params.Mutable : null;

        if (params.MCMultiDisk) {
            this.MCMultiDisk = new Array();
            for (let z in params.MCMultiDisk) {
                let obj = new MultiDiskMC();
                obj.deserialize(params.MCMultiDisk[z]);
                this.MCMultiDisk.push(obj);
            }
        }

        if (params.CdbNodeInfo) {
            let obj = new CdbInfo();
            obj.deserialize(params.CdbNodeInfo)
            this.CdbNodeInfo = obj;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Destroyable = 'Destroyable' in params ? params.Destroyable : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.AutoFlag = 'AutoFlag' in params ? params.AutoFlag : null;
        this.HardwareResourceType = 'HardwareResourceType' in params ? params.HardwareResourceType : null;
        this.IsDynamicSpec = 'IsDynamicSpec' in params ? params.IsDynamicSpec : null;
        this.DynamicPodSpec = 'DynamicPodSpec' in params ? params.DynamicPodSpec : null;

    }
}

/**
 * InquiryPriceUpdateInstance返回参数结构体
 * @class
 */
class InquiryPriceUpdateInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原价，单位为元。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OriginalCost = null;

        /**
         * 折扣价，单位为元。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DiscountCost = null;

        /**
         * 变配的时间单位。取值范围：
<li>s：表示秒。</li>
<li>m：表示月份。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 变配的时长。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginalCost = 'OriginalCost' in params ? params.OriginalCost : null;
        this.DiscountCost = 'DiscountCost' in params ? params.DiscountCost : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 资源描述
 * @class
 */
class NewResourceSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * 描述Master节点资源
         * @type {Resource || null}
         */
        this.MasterResourceSpec = null;

        /**
         * 描述Core节点资源
         * @type {Resource || null}
         */
        this.CoreResourceSpec = null;

        /**
         * 描述Task节点资源
         * @type {Resource || null}
         */
        this.TaskResourceSpec = null;

        /**
         * Master节点数量
         * @type {number || null}
         */
        this.MasterCount = null;

        /**
         * Core节点数量
         * @type {number || null}
         */
        this.CoreCount = null;

        /**
         * Task节点数量
         * @type {number || null}
         */
        this.TaskCount = null;

        /**
         * 描述Common节点资源
         * @type {Resource || null}
         */
        this.CommonResourceSpec = null;

        /**
         * Common节点数量
         * @type {number || null}
         */
        this.CommonCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MasterResourceSpec) {
            let obj = new Resource();
            obj.deserialize(params.MasterResourceSpec)
            this.MasterResourceSpec = obj;
        }

        if (params.CoreResourceSpec) {
            let obj = new Resource();
            obj.deserialize(params.CoreResourceSpec)
            this.CoreResourceSpec = obj;
        }

        if (params.TaskResourceSpec) {
            let obj = new Resource();
            obj.deserialize(params.TaskResourceSpec)
            this.TaskResourceSpec = obj;
        }
        this.MasterCount = 'MasterCount' in params ? params.MasterCount : null;
        this.CoreCount = 'CoreCount' in params ? params.CoreCount : null;
        this.TaskCount = 'TaskCount' in params ? params.TaskCount : null;

        if (params.CommonResourceSpec) {
            let obj = new Resource();
            obj.deserialize(params.CommonResourceSpec)
            this.CommonResourceSpec = obj;
        }
        this.CommonCount = 'CommonCount' in params ? params.CommonCount : null;

    }
}

/**
 * 磁盘组。
 * @class
 */
class DiskGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 磁盘规格。
         * @type {DiskSpec || null}
         */
        this.Spec = null;

        /**
         * 同类型磁盘数量。
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

        if (params.Spec) {
            let obj = new DiskSpec();
            obj.deserialize(params.Spec)
            this.Spec = obj;
        }
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * 机器资源描述。
 * @class
 */
class JobFlowResource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机器类型描述。
         * @type {string || null}
         */
        this.Spec = null;

        /**
         * 机器类型描述，可参考CVM的该含义。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 标签KV对。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 磁盘描述列表。
         * @type {Array.<DiskGroup> || null}
         */
        this.DiskGroups = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Spec = 'Spec' in params ? params.Spec : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.DiskGroups) {
            this.DiskGroups = new Array();
            for (let z in params.DiskGroups) {
                let obj = new DiskGroup();
                obj.deserialize(params.DiskGroups[z]);
                this.DiskGroups.push(obj);
            }
        }

    }
}

/**
 * DescribeJobFlow返回参数结构体
 * @class
 */
class DescribeJobFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程任务状态，可以为以下值：
JobFlowInit，流程任务初始化。
JobFlowResourceApplied，资源申请中，通常为JobFlow需要新建集群时的状态。
JobFlowResourceReady，执行流程任务的资源就绪。
JobFlowStepsRunning，流程任务步骤已提交。
JobFlowStepsComplete，流程任务步骤已完成。
JobFlowTerminating，流程任务所需资源销毁中。
JobFlowFinish，流程任务已完成。
         * @type {string || null}
         */
        this.State = null;

        /**
         * 流程任务步骤结果。
         * @type {Array.<JobResult> || null}
         */
        this.Details = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.State = 'State' in params ? params.State : null;

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new JobResult();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceRenewInstance请求参数结构体
 * @class
 */
class InquiryPriceRenewInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例续费的时长。需要结合TimeUnit一起使用。1表示续费1一个月
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 待续费节点的资源ID列表。资源ID形如：emr-vm-xxxxxxxx。有效的资源ID可通过登录[控制台](https://console.cloud.tencent.com/emr/static/hardware)查询。
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * 实例计费模式。此处只支持取值为1，表示包年包月。
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 实例续费的时间单位。取值范围：
<li>m：表示月份。</li>
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 货币种类。取值范围：
<li>CNY：表示人民币。</li>
         * @type {string || null}
         */
        this.Currency = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.Currency = 'Currency' in params ? params.Currency : null;

    }
}

/**
 * 出参
 * @class
 */
class CdbInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库实例
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 数据库IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 数据库端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 数据库内存规格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * 数据库磁盘规格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * 服务标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Service = null;

        /**
         * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 申请时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplyTime = null;

        /**
         * 付费类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PayType = null;

        /**
         * 过期标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.ExpireFlag = null;

        /**
         * 数据库状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 续费标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsAutoRenew = null;

        /**
         * 数据库字符串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SerialNo = null;

        /**
         * ZoneId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * RegionId
注意：此字段可能返回 null，表示取不到有效值。
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
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.Service = 'Service' in params ? params.Service : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.ApplyTime = 'ApplyTime' in params ? params.ApplyTime : null;
        this.PayType = 'PayType' in params ? params.PayType : null;
        this.ExpireFlag = 'ExpireFlag' in params ? params.ExpireFlag : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.IsAutoRenew = 'IsAutoRenew' in params ? params.IsAutoRenew : null;
        this.SerialNo = 'SerialNo' in params ? params.SerialNo : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;

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
         * 扩容的时间单位。取值范围：
<li>s：表示秒。PayMode取值为0时，TimeUnit只能取值为s。</li>
<li>m：表示月份。PayMode取值为1时，TimeUnit只能取值为m。</li>
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 扩容的时长。结合TimeUnit一起使用。
<li>TimeUnit为s时，该参数只能填写3600，表示按量计费实例。</li>
<li>TimeUnit为m时，该参数填写的数字表示包年包月实例的购买时长，如1表示购买一个月</li>
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例计费模式。取值范围：
<li>0：表示按量计费。</li>
<li>1：表示包年包月。</li>
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 客户端Token。
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * 引导操作脚本设置。
         * @type {Array.<PreExecuteFileSettings> || null}
         */
        this.PreExecutedFileSettings = null;

        /**
         * 扩容的Task节点数量。
         * @type {number || null}
         */
        this.TaskCount = null;

        /**
         * 扩容的Core节点数量。
         * @type {number || null}
         */
        this.CoreCount = null;

        /**
         * 扩容时不需要安装的进程。
         * @type {Array.<number> || null}
         */
        this.UnNecessaryNodeList = null;

        /**
         * 扩容的Router节点数量。
         * @type {number || null}
         */
        this.RouterCount = null;

        /**
         * 部署的服务。
<li>SoftDeployInfo和ServiceNodeInfo是同组参数，和UnNecessaryNodeList参数互斥。</li>
<li>建议使用SoftDeployInfo和ServiceNodeInfo组合。</li>
         * @type {Array.<number> || null}
         */
        this.SoftDeployInfo = null;

        /**
         * 启动的进程。
         * @type {Array.<number> || null}
         */
        this.ServiceNodeInfo = null;

        /**
         * 分散置放群组ID列表，当前仅支持指定一个。
         * @type {Array.<string> || null}
         */
        this.DisasterRecoverGroupIds = null;

        /**
         * 扩容节点绑定标签列表。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 扩容所选资源类型，可选范围为"host","pod"，host为普通的CVM资源，Pod为TKE集群提供的资源
         * @type {string || null}
         */
        this.HardwareResourceType = null;

        /**
         * 使用Pod资源扩容时，指定的Pod规格以及来源等信息
         * @type {PodSpec || null}
         */
        this.PodSpec = null;

        /**
         * 使用clickhouse集群扩容时，选择的机器分组名称
         * @type {string || null}
         */
        this.ClickHouseClusterName = null;

        /**
         * 使用clickhouse集群扩容时，选择的机器分组类型。new为新增，old为选择旧分组
         * @type {string || null}
         */
        this.ClickHouseClusterType = null;

        /**
         * 规则扩容指定 yarn node label
         * @type {string || null}
         */
        this.YarnNodeLabel = null;

        /**
         * POD自定义权限和自定义参数
         * @type {PodParameter || null}
         */
        this.PodParameter = null;

        /**
         * 扩容的Master节点的数量。
         * @type {number || null}
         */
        this.MasterCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;

        if (params.PreExecutedFileSettings) {
            this.PreExecutedFileSettings = new Array();
            for (let z in params.PreExecutedFileSettings) {
                let obj = new PreExecuteFileSettings();
                obj.deserialize(params.PreExecutedFileSettings[z]);
                this.PreExecutedFileSettings.push(obj);
            }
        }
        this.TaskCount = 'TaskCount' in params ? params.TaskCount : null;
        this.CoreCount = 'CoreCount' in params ? params.CoreCount : null;
        this.UnNecessaryNodeList = 'UnNecessaryNodeList' in params ? params.UnNecessaryNodeList : null;
        this.RouterCount = 'RouterCount' in params ? params.RouterCount : null;
        this.SoftDeployInfo = 'SoftDeployInfo' in params ? params.SoftDeployInfo : null;
        this.ServiceNodeInfo = 'ServiceNodeInfo' in params ? params.ServiceNodeInfo : null;
        this.DisasterRecoverGroupIds = 'DisasterRecoverGroupIds' in params ? params.DisasterRecoverGroupIds : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.HardwareResourceType = 'HardwareResourceType' in params ? params.HardwareResourceType : null;

        if (params.PodSpec) {
            let obj = new PodSpec();
            obj.deserialize(params.PodSpec)
            this.PodSpec = obj;
        }
        this.ClickHouseClusterName = 'ClickHouseClusterName' in params ? params.ClickHouseClusterName : null;
        this.ClickHouseClusterType = 'ClickHouseClusterType' in params ? params.ClickHouseClusterType : null;
        this.YarnNodeLabel = 'YarnNodeLabel' in params ? params.YarnNodeLabel : null;

        if (params.PodParameter) {
            let obj = new PodParameter();
            obj.deserialize(params.PodParameter)
            this.PodParameter = obj;
        }
        this.MasterCount = 'MasterCount' in params ? params.MasterCount : null;

    }
}

module.exports = {
    InquirePriceRenewEmrResponse: InquirePriceRenewEmrResponse,
    MultiDiskMC: MultiDiskMC,
    ClusterSetting: ClusterSetting,
    JobResult: JobResult,
    EmrProductConfigOutter: EmrProductConfigOutter,
    LoginSettings: LoginSettings,
    RunJobFlowRequest: RunJobFlowRequest,
    VPCSettings: VPCSettings,
    DescribeInstanceRenewNodesRequest: DescribeInstanceRenewNodesRequest,
    ScaleOutInstanceResponse: ScaleOutInstanceResponse,
    InquiryPriceCreateInstanceRequest: InquiryPriceCreateInstanceRequest,
    Resource: Resource,
    TerminateInstanceRequest: TerminateInstanceRequest,
    TerminateTasksRequest: TerminateTasksRequest,
    PodVolume: PodVolume,
    TerminateInstanceResponse: TerminateInstanceResponse,
    CreateInstanceResponse: CreateInstanceResponse,
    PersistentVolumeContext: PersistentVolumeContext,
    InquiryPriceRenewInstanceResponse: InquiryPriceRenewInstanceResponse,
    DescribeJobFlowRequest: DescribeJobFlowRequest,
    InquiryPriceCreateInstanceResponse: InquiryPriceCreateInstanceResponse,
    BootstrapAction: BootstrapAction,
    HostVolumeContext: HostVolumeContext,
    Step: Step,
    InstanceChargePrepaid: InstanceChargePrepaid,
    DescribeClusterNodesRequest: DescribeClusterNodesRequest,
    PreExecuteFileSettings: PreExecuteFileSettings,
    CreateInstanceRequest: CreateInstanceRequest,
    InquirePriceRenewEmrRequest: InquirePriceRenewEmrRequest,
    PodParameter: PodParameter,
    MetaDbInfo: MetaDbInfo,
    Execution: Execution,
    DescribeInstancesResponse: DescribeInstancesResponse,
    InquiryPriceScaleOutInstanceRequest: InquiryPriceScaleOutInstanceRequest,
    Tag: Tag,
    Placement: Placement,
    SearchItem: SearchItem,
    DynamicPodSpec: DynamicPodSpec,
    DescribeInstancesRequest: DescribeInstancesRequest,
    CustomMetaInfo: CustomMetaInfo,
    DiskSpec: DiskSpec,
    JobFlowResourceSpec: JobFlowResourceSpec,
    InquiryPriceUpdateInstanceRequest: InquiryPriceUpdateInstanceRequest,
    DescribeInstanceRenewNodesResponse: DescribeInstanceRenewNodesResponse,
    COSSettings: COSSettings,
    ClusterInstancesInfo: ClusterInstancesInfo,
    PodSpec: PodSpec,
    MultiDisk: MultiDisk,
    RunJobFlowResponse: RunJobFlowResponse,
    RenewInstancesInfo: RenewInstancesInfo,
    InquiryPriceScaleOutInstanceResponse: InquiryPriceScaleOutInstanceResponse,
    OutterResource: OutterResource,
    UpdateInstanceSettings: UpdateInstanceSettings,
    Configuration: Configuration,
    TerminateTasksResponse: TerminateTasksResponse,
    PriceResource: PriceResource,
    DescribeClusterNodesResponse: DescribeClusterNodesResponse,
    NodeHardwareInfo: NodeHardwareInfo,
    InquiryPriceUpdateInstanceResponse: InquiryPriceUpdateInstanceResponse,
    NewResourceSpec: NewResourceSpec,
    DiskGroup: DiskGroup,
    JobFlowResource: JobFlowResource,
    DescribeJobFlowResponse: DescribeJobFlowResponse,
    InquiryPriceRenewInstanceRequest: InquiryPriceRenewInstanceRequest,
    CdbInfo: CdbInfo,
    ScaleOutInstanceRequest: ScaleOutInstanceRequest,

}
