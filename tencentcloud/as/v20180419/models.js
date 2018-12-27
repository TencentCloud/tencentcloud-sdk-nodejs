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
 * RemoveInstances返回参数结构体
 * @class
 */
class RemoveInstancesResponse extends  AbstractModel {
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
 * DisableAutoScalingGroup返回参数结构体
 * @class
 */
class DisableAutoScalingGroupResponse extends  AbstractModel {
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
 * 启动配置的系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。
 * @class
 */
class SystemDisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * 系统盘类型。系统盘类型限制详见[CVM实例配置](https://cloud.tencent.com/document/product/213/2177)。取值范围：<br><li>LOCAL_BASIC：本地硬盘<br><li>LOCAL_SSD：本地SSD硬盘<br><li>CLOUD_BASIC：普通云硬盘<br><li>CLOUD_PREMIUM：高性能云硬盘<br><li>CLOUD_SSD：SSD云硬盘<br><br>默认取值：LOCAL_BASIC。
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
        this.DiskType = params.DiskType || null;
        this.DiskSize = params.DiskSize || null;

    }
}

/**
 * ModifyLaunchConfigurationAttributes请求参数结构体
 * @class
 */
class ModifyLaunchConfigurationAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 启动配置ID
         * @type {string || null}
         */
        this.LaunchConfigurationId = null;

        /**
         * 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-8toqc6s3`。镜像类型分为四种：<br/><li>公共镜像</li><li>自定义镜像</li><li>共享镜像</li><li>服务市场镜像</li><br/>可通过以下方式获取可用的镜像ID：<br/><li>`公共镜像`、`自定义镜像`、`共享镜像`的镜像ID可通过登录[控制台](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE)查询；`服务镜像市场`的镜像ID可通过[云市场](https://market.cloud.tencent.com/list)查询。</li><li>通过调用接口 [DescribeImages](https://cloud.tencent.com/document/api/213/15715) ，取返回信息中的`ImageId`字段。</li>
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 实例类型列表，不同实例机型指定了不同的资源规格，最多支持5种实例机型。
启动配置，通过 InstanceType 表示单一实例类型，通过 InstanceTypes 表示多实例类型。指定 InstanceTypes 成功启动配置后，原有的 InstanceType 自动失效。
         * @type {Array.<string> || null}
         */
        this.InstanceTypes = null;

        /**
         * 实例类型校验策略，在实际修改 InstanceTypes 时发挥作用，取值包括 ALL 和 ANY，默认取值为ANY。
<br><li> ALL，所有实例类型（InstanceType）都可用则通过校验，否则校验报错。
<br><li> ANY，存在任何一个实例类型（InstanceType）可用则通过校验，否则校验报错。

实例类型不可用的常见原因包括该实例类型售罄、对应云盘售罄等。
如果 InstanceTypes 中一款机型不存在或者已下线，则无论 InstanceTypesCheckPolicy 采用何种取值，都会校验报错。
         * @type {string || null}
         */
        this.InstanceTypesCheckPolicy = null;

        /**
         * 启动配置显示名称。名称仅支持中文、英文、数字、下划线、分隔符"-"、小数点，最大长度不能超60个字节。
         * @type {string || null}
         */
        this.LaunchConfigurationName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LaunchConfigurationId = params.LaunchConfigurationId || null;
        this.ImageId = params.ImageId || null;
        this.InstanceTypes = params.InstanceTypes || null;
        this.InstanceTypesCheckPolicy = params.InstanceTypesCheckPolicy || null;
        this.LaunchConfigurationName = params.LaunchConfigurationName || null;

    }
}

/**
 * DisableAutoScalingGroup请求参数结构体
 * @class
 */
class DisableAutoScalingGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩组ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = params.AutoScalingGroupId || null;

    }
}

/**
 * DeleteAutoScalingGroup返回参数结构体
 * @class
 */
class DeleteAutoScalingGroupResponse extends  AbstractModel {
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
 * 伸缩组简明信息。
 * @class
 */
class AutoScalingGroupAbstract extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩组ID。
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * 伸缩组名称。
         * @type {string || null}
         */
        this.AutoScalingGroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = params.AutoScalingGroupId || null;
        this.AutoScalingGroupName = params.AutoScalingGroupName || null;

    }
}

/**
 * DetachInstances返回参数结构体
 * @class
 */
class DetachInstancesResponse extends  AbstractModel {
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
 * EnableAutoScalingGroup请求参数结构体
 * @class
 */
class EnableAutoScalingGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩组ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = params.AutoScalingGroupId || null;

    }
}

/**
 * ModifyAutoScalingGroup请求参数结构体
 * @class
 */
class ModifyAutoScalingGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩组ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * 伸缩组名称，在您账号中必须唯一。名称仅支持中文、英文、数字、下划线、分隔符"-"、小数点，最大长度不能超55个字节。
         * @type {string || null}
         */
        this.AutoScalingGroupName = null;

        /**
         * 默认冷却时间，单位秒，默认值为300
         * @type {number || null}
         */
        this.DefaultCooldown = null;

        /**
         * 期望实例数，大小介于最小实例数和最大实例数之间
         * @type {number || null}
         */
        this.DesiredCapacity = null;

        /**
         * 启动配置ID
         * @type {string || null}
         */
        this.LaunchConfigurationId = null;

        /**
         * 最大实例数，取值范围为0-2000。
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * 最小实例数，取值范围为0-2000。
         * @type {number || null}
         */
        this.MinSize = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 子网ID列表
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * 销毁策略，目前长度上限为1。取值包括 OLDEST_INSTANCE 和 NEWEST_INSTANCE。
<br><li> OLDEST_INSTANCE 优先销毁伸缩组中最旧的实例。
<br><li> NEWEST_INSTANCE，优先销毁伸缩组中最新的实例。
         * @type {Array.<string> || null}
         */
        this.TerminationPolicies = null;

        /**
         * VPC ID，基础网络则填空字符串。修改为具体VPC ID时，需指定相应的SubnetIds；修改为基础网络时，需指定相应的Zones。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 可用区列表
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * 重试策略，取值包括 IMMEDIATE_RETRY 和 INCREMENTAL_INTERVALS，默认取值为 IMMEDIATE_RETRY。
<br><li> IMMEDIATE_RETRY，立即重试，在较短时间内快速重试，连续失败超过一定次数（5次）后不再重试。
<br><li> INCREMENTAL_INTERVALS，间隔递增重试，随着连续失败次数的增加，重试间隔逐渐增大，重试间隔从秒级到1天不等。
         * @type {string || null}
         */
        this.RetryPolicy = null;

        /**
         * 可用区校验策略，取值包括 ALL 和 ANY，默认取值为ANY。在伸缩组实际变更资源相关字段时（启动配置、可用区、子网）发挥作用。
<br><li> ALL，所有可用区（Zone）或子网（SubnetId）都可用则通过校验，否则校验报错。
<br><li> ANY，存在任何一个可用区（Zone）或子网（SubnetId）可用则通过校验，否则校验报错。

可用区或子网不可用的常见原因包括该可用区CVM实例类型售罄、该可用区CBS云盘售罄、该可用区配额不足、该子网IP不足等。
如果 Zones/SubnetIds 中可用区或者子网不存在，则无论 ZonesCheckPolicy 采用何种取值，都会校验报错。
         * @type {string || null}
         */
        this.ZonesCheckPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = params.AutoScalingGroupId || null;
        this.AutoScalingGroupName = params.AutoScalingGroupName || null;
        this.DefaultCooldown = params.DefaultCooldown || null;
        this.DesiredCapacity = params.DesiredCapacity || null;
        this.LaunchConfigurationId = params.LaunchConfigurationId || null;
        this.MaxSize = params.MaxSize || null;
        this.MinSize = params.MinSize || null;
        this.ProjectId = params.ProjectId || null;
        this.SubnetIds = params.SubnetIds || null;
        this.TerminationPolicies = params.TerminationPolicies || null;
        this.VpcId = params.VpcId || null;
        this.Zones = params.Zones || null;
        this.RetryPolicy = params.RetryPolicy || null;
        this.ZonesCheckPolicy = params.ZonesCheckPolicy || null;

    }
}

/**
 * CreateLaunchConfiguration请求参数结构体
 * @class
 */
class CreateLaunchConfigurationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 启动配置显示名称。名称仅支持中文、英文、数字、下划线、分隔符"-"、小数点，最大长度不能超60个字节。
         * @type {string || null}
         */
        this.LaunchConfigurationName = null;

        /**
         * 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-8toqc6s3`。镜像类型分为四种：<br/><li>公共镜像</li><li>自定义镜像</li><li>共享镜像</li><li>服务市场镜像</li><br/>可通过以下方式获取可用的镜像ID：<br/><li>`公共镜像`、`自定义镜像`、`共享镜像`的镜像ID可通过登录[控制台](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE)查询；`服务镜像市场`的镜像ID可通过[云市场](https://market.cloud.tencent.com/list)查询。</li><li>通过调用接口 [DescribeImages](https://cloud.tencent.com/document/api/213/15715) ，取返回信息中的`ImageId`字段。</li>
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 实例所属项目ID。该参数可以通过调用 [DescribeProject](https://cloud.tencent.com/document/api/378/4400) 的返回值中的`projectId`字段来获取。不填为默认项目。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 实例机型。不同实例机型指定了不同的资源规格，具体取值可通过调用接口 [DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749) 来获得最新的规格表或参见[实例类型](https://cloud.tencent.com/document/product/213/11518)描述。
`InstanceType`和`InstanceTypes`参数互斥，二者必填一个且只能填写一个。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 实例系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。
         * @type {SystemDisk || null}
         */
        this.SystemDisk = null;

        /**
         * 实例数据盘配置信息。若不指定该参数，则默认不购买数据盘，最多支持指定11块数据盘。
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * 实例登录设置。通过该参数可以设置实例的登录方式密码、密钥或保持镜像的原始登录设置。默认情况下会随机生成密码，并以站内信方式知会到用户。
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * 实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的`SecurityGroupId`字段来获取。若不指定该参数，则默认不绑定安全组。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认开启云监控、云安全服务。
         * @type {EnhancedService || null}
         */
        this.EnhancedService = null;

        /**
         * 经过 Base64 编码后的自定义数据，最大长度不超过16KB。
         * @type {string || null}
         */
        this.UserData = null;

        /**
         * 实例计费类型，CVM默认值按照POSTPAID_BY_HOUR处理。
<br><li>POSTPAID_BY_HOUR：按小时后付费
<br><li>SPOTPAID：竞价付费
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 实例的市场相关选项，如竞价实例相关参数，若指定实例的付费模式为竞价付费则该参数必传。
         * @type {InstanceMarketOptionsRequest || null}
         */
        this.InstanceMarketOptions = null;

        /**
         * 实例机型列表，不同实例机型指定了不同的资源规格，最多支持5种实例机型。
`InstanceType`和`InstanceTypes`参数互斥，二者必填一个且只能填写一个。
         * @type {Array.<string> || null}
         */
        this.InstanceTypes = null;

        /**
         * 实例类型校验策略，取值包括 ALL 和 ANY，默认取值为ANY。
<br><li> ALL，所有实例类型（InstanceType）都可用则通过校验，否则校验报错。
<br><li> ANY，存在任何一个实例类型（InstanceType）可用则通过校验，否则校验报错。

实例类型不可用的常见原因包括该实例类型售罄、对应云盘售罄等。
如果 InstanceTypes 中一款机型不存在或者已下线，则无论 InstanceTypesCheckPolicy 采用何种取值，都会校验报错。
         * @type {string || null}
         */
        this.InstanceTypesCheckPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LaunchConfigurationName = params.LaunchConfigurationName || null;
        this.ImageId = params.ImageId || null;
        this.ProjectId = params.ProjectId || null;
        this.InstanceType = params.InstanceType || null;

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

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }
        this.SecurityGroupIds = params.SecurityGroupIds || null;

        if (params.EnhancedService) {
            let obj = new EnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }
        this.UserData = params.UserData || null;
        this.InstanceChargeType = params.InstanceChargeType || null;

        if (params.InstanceMarketOptions) {
            let obj = new InstanceMarketOptionsRequest();
            obj.deserialize(params.InstanceMarketOptions)
            this.InstanceMarketOptions = obj;
        }
        this.InstanceTypes = params.InstanceTypes || null;
        this.InstanceTypesCheckPolicy = params.InstanceTypesCheckPolicy || null;

    }
}

/**
 * 伸缩组
 * @class
 */
class AutoScalingGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩组ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * 伸缩组名称
         * @type {string || null}
         */
        this.AutoScalingGroupName = null;

        /**
         * 伸缩组状态
         * @type {string || null}
         */
        this.AutoScalingGroupStatus = null;

        /**
         * 创建时间，采用UTC标准计时
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 默认冷却时间，单位秒
         * @type {number || null}
         */
        this.DefaultCooldown = null;

        /**
         * 期望实例数
         * @type {number || null}
         */
        this.DesiredCapacity = null;

        /**
         * 启用状态，取值包括`ENABLED`和`DISABLED`
         * @type {string || null}
         */
        this.EnabledStatus = null;

        /**
         * 应用型负载均衡器列表
         * @type {Array.<ForwardLoadBalancer> || null}
         */
        this.ForwardLoadBalancerSet = null;

        /**
         * 实例数量
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * 状态为`IN_SERVICE`实例的数量
         * @type {number || null}
         */
        this.InServiceInstanceCount = null;

        /**
         * 启动配置ID
         * @type {string || null}
         */
        this.LaunchConfigurationId = null;

        /**
         * 启动配置名称
         * @type {string || null}
         */
        this.LaunchConfigurationName = null;

        /**
         * 传统型负载均衡器ID列表
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIdSet = null;

        /**
         * 最大实例数
         * @type {Array.<number> || null}
         */
        this.MaxSize = null;

        /**
         * 最小实例数
         * @type {Array.<number> || null}
         */
        this.MinSize = null;

        /**
         * 项目ID
         * @type {Array.<number> || null}
         */
        this.ProjectId = null;

        /**
         * 子网ID列表
         * @type {Array.<string> || null}
         */
        this.SubnetIdSet = null;

        /**
         * 销毁策略
         * @type {Array.<string> || null}
         */
        this.TerminationPolicySet = null;

        /**
         * VPC标识
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 可用区列表
         * @type {Array.<string> || null}
         */
        this.ZoneSet = null;

        /**
         * 重试策略
         * @type {string || null}
         */
        this.RetryPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = params.AutoScalingGroupId || null;
        this.AutoScalingGroupName = params.AutoScalingGroupName || null;
        this.AutoScalingGroupStatus = params.AutoScalingGroupStatus || null;
        this.CreatedTime = params.CreatedTime || null;
        this.DefaultCooldown = params.DefaultCooldown || null;
        this.DesiredCapacity = params.DesiredCapacity || null;
        this.EnabledStatus = params.EnabledStatus || null;

        if (params.ForwardLoadBalancerSet) {
            this.ForwardLoadBalancerSet = new Array();
            for (let z in params.ForwardLoadBalancerSet) {
                let obj = new ForwardLoadBalancer();
                obj.deserialize(params.ForwardLoadBalancerSet[z]);
                this.ForwardLoadBalancerSet.push(obj);
            }
        }
        this.InstanceCount = params.InstanceCount || null;
        this.InServiceInstanceCount = params.InServiceInstanceCount || null;
        this.LaunchConfigurationId = params.LaunchConfigurationId || null;
        this.LaunchConfigurationName = params.LaunchConfigurationName || null;
        this.LoadBalancerIdSet = params.LoadBalancerIdSet || null;
        this.MaxSize = params.MaxSize || null;
        this.MinSize = params.MinSize || null;
        this.ProjectId = params.ProjectId || null;
        this.SubnetIdSet = params.SubnetIdSet || null;
        this.TerminationPolicySet = params.TerminationPolicySet || null;
        this.VpcId = params.VpcId || null;
        this.ZoneSet = params.ZoneSet || null;
        this.RetryPolicy = params.RetryPolicy || null;

    }
}

/**
 * CreateScheduledAction请求参数结构体
 * @class
 */
class CreateScheduledActionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩组ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * 定时任务名称。名称仅支持中文、英文、数字、下划线、分隔符"-"、小数点，最大长度不能超60个字节。同一伸缩组下必须唯一。
         * @type {string || null}
         */
        this.ScheduledActionName = null;

        /**
         * 当定时任务触发时，设置的伸缩组最大实例数。
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * 当定时任务触发时，设置的伸缩组最小实例数。
         * @type {number || null}
         */
        this.MinSize = null;

        /**
         * 当定时任务触发时，设置的伸缩组期望实例数。
         * @type {number || null}
         */
        this.DesiredCapacity = null;

        /**
         * 定时任务的首次触发时间，取值为`北京时间`（UTC+8），按照`ISO8601`标准，格式：`YYYY-MM-DDThh:mm:ss+08:00`。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 定时任务的结束时间，取值为`北京时间`（UTC+8），按照`ISO8601`标准，格式：`YYYY-MM-DDThh:mm:ss+08:00`。<br><br>此参数与`Recurrence`需要同时指定，到达结束时间之后，定时任务将不再生效。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 定时任务的重复方式。为标准[Cron](https://zh.wikipedia.org/wiki/Cron)格式<br><br>此参数与`EndTime`需要同时指定。
         * @type {string || null}
         */
        this.Recurrence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = params.AutoScalingGroupId || null;
        this.ScheduledActionName = params.ScheduledActionName || null;
        this.MaxSize = params.MaxSize || null;
        this.MinSize = params.MinSize || null;
        this.DesiredCapacity = params.DesiredCapacity || null;
        this.StartTime = params.StartTime || null;
        this.EndTime = params.EndTime || null;
        this.Recurrence = params.Recurrence || null;

    }
}

/**
 * 描述了实例的增强服务启用情况与其设置，如云安全，云监控等实例 Agent。
 * @class
 */
class EnhancedService extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开启云安全服务。若不指定该参数，则默认开启云安全服务。
         * @type {RunSecurityServiceEnabled || null}
         */
        this.SecurityService = null;

        /**
         * 开启云监控服务。若不指定该参数，则默认开启云监控服务。
         * @type {RunMonitorServiceEnabled || null}
         */
        this.MonitorService = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SecurityService) {
            let obj = new RunSecurityServiceEnabled();
            obj.deserialize(params.SecurityService)
            this.SecurityService = obj;
        }

        if (params.MonitorService) {
            let obj = new RunMonitorServiceEnabled();
            obj.deserialize(params.MonitorService)
            this.MonitorService = obj;
        }

    }
}

/**
 * AttachInstances返回参数结构体
 * @class
 */
class AttachInstancesResponse extends  AbstractModel {
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
 * DeleteLaunchConfiguration返回参数结构体
 * @class
 */
class DeleteLaunchConfigurationResponse extends  AbstractModel {
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
 * DescribeAutoScalingGroups请求参数结构体
 * @class
 */
class DescribeAutoScalingGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按照一个或者多个伸缩组ID查询。伸缩组ID形如：`asg-nkdwoui0`。每次请求的上限为100。参数不支持同时指定`AutoScalingGroups`和`Filters`。
         * @type {Array.<string> || null}
         */
        this.AutoScalingGroupIds = null;

        /**
         * 过滤条件。
<li> auto-scaling-group-id - String - 是否必填：否 -（过滤条件）按照伸缩组ID过滤。</li>
<li> auto-scaling-group-name - String - 是否必填：否 -（过滤条件）按照伸缩组名称过滤。</li>
<li> launch-configuration-id - String - 是否必填：否 -（过滤条件）按照启动配置ID过滤。</li>
每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`AutoScalingGroupIds`和`Filters`。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
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
        this.AutoScalingGroupIds = params.AutoScalingGroupIds || null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = params.Limit || null;
        this.Offset = params.Offset || null;

    }
}

/**
 * 符合条件的启动配置信息的集合。
 * @class
 */
class LaunchConfiguration extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例所属项目ID。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 启动配置ID。
         * @type {string || null}
         */
        this.LaunchConfigurationId = null;

        /**
         * 启动配置名称。
         * @type {string || null}
         */
        this.LaunchConfigurationName = null;

        /**
         * 实例机型。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 实例系统盘配置信息。
         * @type {SystemDisk || null}
         */
        this.SystemDisk = null;

        /**
         * 实例数据盘配置信息。
         * @type {Array.<DataDisk> || null}
         */
        this.DataDisks = null;

        /**
         * 实例登录设置。
         * @type {LimitedLoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * 公网带宽相关信息设置。
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * 实例所属安全组。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 启动配置关联的伸缩组。
         * @type {Array.<AutoScalingGroupAbstract> || null}
         */
        this.AutoScalingGroupAbstractSet = null;

        /**
         * 自定义数据。
         * @type {string || null}
         */
        this.UserData = null;

        /**
         * 启动配置创建时间。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 实例的增强服务启用情况与其设置。
         * @type {EnhancedService || null}
         */
        this.EnhancedService = null;

        /**
         * 镜像ID。
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 启动配置当前状态。取值范围：<br><li>NORMAL：正常<br><li>IMAGE_ABNORMAL：启动配置镜像异常<br><li>CBS_SNAP_ABNORMAL：启动配置数据盘快照异常<br><li>SECURITY_GROUP_ABNORMAL：启动配置安全组异常<br>
         * @type {string || null}
         */
        this.LaunchConfigurationStatus = null;

        /**
         * 实例计费类型，CVM默认值按照POSTPAID_BY_HOUR处理。
<br><li>POSTPAID_BY_HOUR：按小时后付费
<br><li>SPOTPAID：竞价付费
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 实例的市场相关选项，如竞价实例相关参数，若指定实例的付费模式为竞价付费则该参数必传。
         * @type {InstanceMarketOptionsRequest || null}
         */
        this.InstanceMarketOptions = null;

        /**
         * 实例机型列表。
         * @type {Array.<string> || null}
         */
        this.InstanceTypes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = params.ProjectId || null;
        this.LaunchConfigurationId = params.LaunchConfigurationId || null;
        this.LaunchConfigurationName = params.LaunchConfigurationName || null;
        this.InstanceType = params.InstanceType || null;

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

        if (params.LoginSettings) {
            let obj = new LimitedLoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }

        if (params.InternetAccessible) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }
        this.SecurityGroupIds = params.SecurityGroupIds || null;

        if (params.AutoScalingGroupAbstractSet) {
            this.AutoScalingGroupAbstractSet = new Array();
            for (let z in params.AutoScalingGroupAbstractSet) {
                let obj = new AutoScalingGroupAbstract();
                obj.deserialize(params.AutoScalingGroupAbstractSet[z]);
                this.AutoScalingGroupAbstractSet.push(obj);
            }
        }
        this.UserData = params.UserData || null;
        this.CreatedTime = params.CreatedTime || null;

        if (params.EnhancedService) {
            let obj = new EnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }
        this.ImageId = params.ImageId || null;
        this.LaunchConfigurationStatus = params.LaunchConfigurationStatus || null;
        this.InstanceChargeType = params.InstanceChargeType || null;

        if (params.InstanceMarketOptions) {
            let obj = new InstanceMarketOptionsRequest();
            obj.deserialize(params.InstanceMarketOptions)
            this.InstanceMarketOptions = obj;
        }
        this.InstanceTypes = params.InstanceTypes || null;

    }
}

/**
 * DescribeAccountLimits请求参数结构体
 * @class
 */
class DescribeAccountLimitsRequest extends  AbstractModel {
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
 * DescribeAccountLimits返回参数结构体
 * @class
 */
class DescribeAccountLimitsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户账户被允许创建的启动配置最大数量
         * @type {number || null}
         */
        this.MaxNumberOfLaunchConfigurations = null;

        /**
         * 用户账户启动配置的当前数量
         * @type {number || null}
         */
        this.NumberOfLaunchConfigurations = null;

        /**
         * 用户账户被允许创建的伸缩组最大数量
         * @type {number || null}
         */
        this.MaxNumberOfAutoScalingGroups = null;

        /**
         * 用户账户伸缩组的当前数量
         * @type {number || null}
         */
        this.NumberOfAutoScalingGroups = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxNumberOfLaunchConfigurations = params.MaxNumberOfLaunchConfigurations || null;
        this.NumberOfLaunchConfigurations = params.NumberOfLaunchConfigurations || null;
        this.MaxNumberOfAutoScalingGroups = params.MaxNumberOfAutoScalingGroups || null;
        this.NumberOfAutoScalingGroups = params.NumberOfAutoScalingGroups || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeLaunchConfigurations返回参数结构体
 * @class
 */
class DescribeLaunchConfigurationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的启动配置数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 启动配置详细信息列表。
         * @type {Array.<LaunchConfiguration> || null}
         */
        this.LaunchConfigurationSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.LaunchConfigurationSet) {
            this.LaunchConfigurationSet = new Array();
            for (let z in params.LaunchConfigurationSet) {
                let obj = new LaunchConfiguration();
                obj.deserialize(params.LaunchConfigurationSet[z]);
                this.LaunchConfigurationSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * CreateLaunchConfiguration返回参数结构体
 * @class
 */
class CreateLaunchConfigurationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当通过本接口来创建启动配置时会返回该参数，表示启动配置ID。
         * @type {string || null}
         */
        this.LaunchConfigurationId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LaunchConfigurationId = params.LaunchConfigurationId || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 应用型负载均衡器
 * @class
 */
class ForwardLoadBalancer extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡器ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 应用型负载均衡监听器 ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 目标规则属性列表
         * @type {Array.<TargetAttribute> || null}
         */
        this.TargetAttributes = null;

        /**
         * 转发规则ID
         * @type {string || null}
         */
        this.LocationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = params.LoadBalancerId || null;
        this.ListenerId = params.ListenerId || null;

        if (params.TargetAttributes) {
            this.TargetAttributes = new Array();
            for (let z in params.TargetAttributes) {
                let obj = new TargetAttribute();
                obj.deserialize(params.TargetAttributes[z]);
                this.TargetAttributes.push(obj);
            }
        }
        this.LocationId = params.LocationId || null;

    }
}

/**
 * DeleteScheduledAction请求参数结构体
 * @class
 */
class DeleteScheduledActionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待删除的定时任务ID。
         * @type {string || null}
         */
        this.ScheduledActionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScheduledActionId = params.ScheduledActionId || null;

    }
}

/**
 * DescribeAutoScalingActivities请求参数结构体
 * @class
 */
class DescribeAutoScalingActivitiesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按照一个或者多个伸缩活动ID查询。伸缩活动ID形如：`asa-5l2ejpfo`。每次请求的上限为100。参数不支持同时指定`ActivityIds`和`Filters`。
         * @type {Array.<string> || null}
         */
        this.ActivityIds = null;

        /**
         * 过滤条件。
<li> auto-scaling-group-id - String - 是否必填：否 -（过滤条件）按照伸缩组ID过滤。</li>
<li> activity-status-code - String - 是否必填：否 -（过滤条件）按照伸缩活动状态过滤。（INIT：初始化中|RUNNING：运行中|SUCCESSFUL：活动成功|PARTIALLY_SUCCESSFUL：活动部分成功|FAILED：活动失败|CANCELLED：活动取消）</li>
<li> activity-type - String - 是否必填：否 -（过滤条件）按照伸缩活动类型过滤。（SCALE_OUT：扩容活动|SCALE_IN：缩容活动|ATTACH_INSTANCES：添加实例|REMOVE_INSTANCES：销毁实例|DETACH_INSTANCES：移出实例|TERMINATE_INSTANCES_UNEXPECTEDLY：实例在CVM控制台被销毁|REPLACE_UNHEALTHY_INSTANCE：替换不健康实例）</li>
<li> activity-id - String - 是否必填：否 -（过滤条件）按照伸缩活动ID过滤。</li>
每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`ActivityIds`和`Filters`。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
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
        this.ActivityIds = params.ActivityIds || null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = params.Limit || null;
        this.Offset = params.Offset || null;

    }
}

/**
 * ModifyDesiredCapacity请求参数结构体
 * @class
 */
class ModifyDesiredCapacityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩组ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * 期望实例数
         * @type {number || null}
         */
        this.DesiredCapacity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = params.AutoScalingGroupId || null;
        this.DesiredCapacity = params.DesiredCapacity || null;

    }
}

/**
 * CVM竞价请求相关选项
 * @class
 */
class InstanceMarketOptionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 竞价相关选项
         * @type {SpotMarketOptions || null}
         */
        this.SpotOptions = null;

        /**
         * 市场选项类型，当前只支持取值：spot
         * @type {string || null}
         */
        this.MarketType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SpotOptions) {
            let obj = new SpotMarketOptions();
            obj.deserialize(params.SpotOptions)
            this.SpotOptions = obj;
        }
        this.MarketType = params.MarketType || null;

    }
}

/**
 * CreateScheduledAction返回参数结构体
 * @class
 */
class CreateScheduledActionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 定时任务ID
         * @type {string || null}
         */
        this.ScheduledActionId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScheduledActionId = params.ScheduledActionId || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeScheduledActions返回参数结构体
 * @class
 */
class DescribeScheduledActionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的定时任务数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 定时任务详细信息列表。
         * @type {Array.<ScheduledAction> || null}
         */
        this.ScheduledActionSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ScheduledActionSet) {
            this.ScheduledActionSet = new Array();
            for (let z in params.ScheduledActionSet) {
                let obj = new ScheduledAction();
                obj.deserialize(params.ScheduledActionSet[z]);
                this.ScheduledActionSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeAutoScalingGroups返回参数结构体
 * @class
 */
class DescribeAutoScalingGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩组详细信息列表。
         * @type {Array.<AutoScalingGroup> || null}
         */
        this.AutoScalingGroupSet = null;

        /**
         * 符合条件的伸缩组数量。
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

        if (params.AutoScalingGroupSet) {
            this.AutoScalingGroupSet = new Array();
            for (let z in params.AutoScalingGroupSet) {
                let obj = new AutoScalingGroup();
                obj.deserialize(params.AutoScalingGroupSet[z]);
                this.AutoScalingGroupSet.push(obj);
            }
        }
        this.TotalCount = params.TotalCount || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DeleteAutoScalingGroup请求参数结构体
 * @class
 */
class DeleteAutoScalingGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩组ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = params.AutoScalingGroupId || null;

    }
}

/**
 * DescribeScheduledActions请求参数结构体
 * @class
 */
class DescribeScheduledActionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按照一个或者多个定时任务ID查询。实例ID形如：asst-am691zxo。每次请求的实例的上限为100。参数不支持同时指定ScheduledActionIds和Filters。
         * @type {Array.<string> || null}
         */
        this.ScheduledActionIds = null;

        /**
         * 过滤条件。
<li> scheduled-action-id - String - 是否必填：否 -（过滤条件）按照定时任务ID过滤。</li>
<li> scheduled-action-name - String - 是否必填：否 - （过滤条件） 按照定时任务名称过滤。</li>
<li> auto-scaling-group-id - String - 是否必填：否 - （过滤条件） 按照伸缩组ID过滤。</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
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
        this.ScheduledActionIds = params.ScheduledActionIds || null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

    }
}

/**
 * 描述定时任务的信息
 * @class
 */
class ScheduledAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * 定时任务ID。
         * @type {string || null}
         */
        this.ScheduledActionId = null;

        /**
         * 定时任务名称。
         * @type {string || null}
         */
        this.ScheduledActionName = null;

        /**
         * 定时任务所在伸缩组ID。
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * 定时任务的开始时间。取值为`北京时间`（UTC+8），按照`ISO8601`标准，格式：`YYYY-MM-DDThh:mm:ss+08:00`。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 定时任务的重复方式。
         * @type {string || null}
         */
        this.Recurrence = null;

        /**
         * 定时任务的结束时间。取值为`北京时间`（UTC+8），按照`ISO8601`标准，格式：`YYYY-MM-DDThh:mm:ss+08:00`。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 定时任务设置的最大实例数。
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * 定时任务设置的期望实例数。
         * @type {number || null}
         */
        this.DesiredCapacity = null;

        /**
         * 定时任务设置的最小实例数。
         * @type {number || null}
         */
        this.MinSize = null;

        /**
         * 定时任务的创建时间。取值为`UTC`时间，按照`ISO8601`标准，格式：`YYYY-MM-DDThh:mm:ssZ`。
         * @type {string || null}
         */
        this.CreatedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScheduledActionId = params.ScheduledActionId || null;
        this.ScheduledActionName = params.ScheduledActionName || null;
        this.AutoScalingGroupId = params.AutoScalingGroupId || null;
        this.StartTime = params.StartTime || null;
        this.Recurrence = params.Recurrence || null;
        this.EndTime = params.EndTime || null;
        this.MaxSize = params.MaxSize || null;
        this.DesiredCapacity = params.DesiredCapacity || null;
        this.MinSize = params.MinSize || null;
        this.CreatedTime = params.CreatedTime || null;

    }
}

/**
 * RemoveInstances请求参数结构体
 * @class
 */
class RemoveInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩组ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * CVM实例ID列表
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
        this.AutoScalingGroupId = params.AutoScalingGroupId || null;
        this.InstanceIds = params.InstanceIds || null;

    }
}

/**
 * ModifyAutoScalingGroup返回参数结构体
 * @class
 */
class ModifyAutoScalingGroupResponse extends  AbstractModel {
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
 * DeleteLaunchConfiguration请求参数结构体
 * @class
 */
class DeleteLaunchConfigurationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要删除的启动配置ID。
         * @type {string || null}
         */
        this.LaunchConfigurationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LaunchConfigurationId = params.LaunchConfigurationId || null;

    }
}

/**
 * AttachInstances请求参数结构体
 * @class
 */
class AttachInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩组ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * CVM实例ID列表
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
        this.AutoScalingGroupId = params.AutoScalingGroupId || null;
        this.InstanceIds = params.InstanceIds || null;

    }
}

/**
 * 竞价相关选项
 * @class
 */
class SpotMarketOptions extends  AbstractModel {
    constructor(){
        super();

        /**
         * 竞价出价，例如“1.05”
         * @type {string || null}
         */
        this.MaxPrice = null;

        /**
         * 竞价请求类型，当前仅支持类型：one-time，默认值为one-time
         * @type {string || null}
         */
        this.SpotInstanceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxPrice = params.MaxPrice || null;
        this.SpotInstanceType = params.SpotInstanceType || null;

    }
}

/**
 * 描述了 “云安全” 服务相关的信息
 * @class
 */
class RunSecurityServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启[云安全](https://cloud.tencent.com/document/product/296)服务。取值范围：<br><li>TRUE：表示开启云安全服务<br><li>FALSE：表示不开启云安全服务<br><br>默认取值：TRUE。
         * @type {boolean || null}
         */
        this.Enabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = params.Enabled || null;

    }
}

/**
 * DescribeAutoScalingInstances返回参数结构体
 * @class
 */
class DescribeAutoScalingInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例详细信息列表。
         * @type {Array.<Instance> || null}
         */
        this.AutoScalingInstanceSet = null;

        /**
         * 符合条件的实例数量。
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

        if (params.AutoScalingInstanceSet) {
            this.AutoScalingInstanceSet = new Array();
            for (let z in params.AutoScalingInstanceSet) {
                let obj = new Instance();
                obj.deserialize(params.AutoScalingInstanceSet[z]);
                this.AutoScalingInstanceSet.push(obj);
            }
        }
        this.TotalCount = params.TotalCount || null;
        this.RequestId = params.RequestId || null;

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
         * 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：<br><li>Linux实例密码必须8到16位，至少包括两项[a-z，A-Z]、[0-9] 和 [( ) ` ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ' , . ? / ]中的特殊符号。<br><li>Windows实例密码必须12到16位，至少包括三项[a-z]，[A-Z]，[0-9] 和 [( ) ` ~ ! @ # $ % ^ & * - + = { } [ ] : ; ' , . ? /]中的特殊符号。<br><br>若不指定该参数，则由系统随机生成密码，并通过站内信方式通知到用户。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 密钥ID列表。关联密钥后，就可以通过对应的私钥来访问实例；KeyId可通过接口DescribeKeyPairs获取，密钥与密码不能同时指定，同时Windows操作系统不支持指定密钥。当前仅支持购买的时候指定一个密钥。
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

        /**
         * 保持镜像的原始设置。该参数与Password或KeyIds.N不能同时指定。只有使用自定义镜像、共享镜像或外部导入镜像创建实例时才能指定该参数为TRUE。取值范围：<br><li>TRUE：表示保持镜像的登录设置<br><li>FALSE：表示不保持镜像的登录设置<br><br>默认取值：FALSE。
         * @type {boolean || null}
         */
        this.KeepImageLogin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Password = params.Password || null;
        this.KeyIds = params.KeyIds || null;
        this.KeepImageLogin = params.KeepImageLogin || null;

    }
}

/**
 * >描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等
> * 若存在多个`Filter`时，`Filter`间的关系为逻辑与（`AND`）关系。
> * 若同一个`Filter`存在多个`Values`，同一`Filter`下`Values`间的关系为逻辑或（`OR`）关系。
>
> 以[DescribeInstances](https://cloud.tencent.com/document/api/213/9388)接口的`Filter`为例。若我们需要查询可用区（`zone`）为广州一区 ***并且*** 实例计费模式（`instance-charge-type`）为包年包月 ***或者*** 按量计费的实例时，可如下实现：
```
Filters.1.Name=zone
&Filters.1.Values.1=ap-guangzhou-1
&Filters.2.Name=instance-charge-type
&Filters.2.Values.1=PREPAID
&Filters.3.Values.2=POSTPAID_BY_HOUR
```
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
        this.Name = params.Name || null;
        this.Values = params.Values || null;

    }
}

/**
 * ModifyScheduledAction返回参数结构体
 * @class
 */
class ModifyScheduledActionResponse extends  AbstractModel {
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
 * EnableAutoScalingGroup返回参数结构体
 * @class
 */
class EnableAutoScalingGroupResponse extends  AbstractModel {
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
 * 符合条件的伸缩活动相关信息。
 * @class
 */
class Activity extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩组ID。
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * 伸缩活动ID。
         * @type {string || null}
         */
        this.ActivityId = null;

        /**
         * 伸缩活动类型。取值如下：<br>
<li>SCALE_OUT：扩容活动<li>SCALE_IN：缩容活动<li>ATTACH_INSTANCES：添加实例<li>REMOVE_INSTANCES：销毁实例<li>DETACH_INSTANCES：移出实例<li>TERMINATE_INSTANCES_UNEXPECTEDLY：实例在CVM控制台被销毁<li>REPLACE_UNHEALTHY_INSTANCE：替换不健康实例）
         * @type {string || null}
         */
        this.ActivityType = null;

        /**
         * 伸缩活动状态。取值如下：<br>
<li>INIT：初始化中
<li>RUNNING：运行中
<li>SUCCESSFUL：活动成功
<li>PARTIALLY_SUCCESSFUL：活动部分成功
<li>FAILED：活动失败
<li>CANCELLED：活动取消
         * @type {string || null}
         */
        this.StatusCode = null;

        /**
         * 伸缩活动状态描述。
         * @type {string || null}
         */
        this.StatusMessage = null;

        /**
         * 伸缩活动起因。
         * @type {string || null}
         */
        this.Cause = null;

        /**
         * 伸缩活动描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 伸缩活动开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 伸缩活动结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 伸缩活动创建时间。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 伸缩活动相关实例信息集合。
         * @type {Array.<ActivtyRelatedInstance> || null}
         */
        this.ActivityRelatedInstanceSet = null;

        /**
         * 伸缩活动状态简要描述。
         * @type {string || null}
         */
        this.StatusMessageSimplified = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = params.AutoScalingGroupId || null;
        this.ActivityId = params.ActivityId || null;
        this.ActivityType = params.ActivityType || null;
        this.StatusCode = params.StatusCode || null;
        this.StatusMessage = params.StatusMessage || null;
        this.Cause = params.Cause || null;
        this.Description = params.Description || null;
        this.StartTime = params.StartTime || null;
        this.EndTime = params.EndTime || null;
        this.CreatedTime = params.CreatedTime || null;

        if (params.ActivityRelatedInstanceSet) {
            this.ActivityRelatedInstanceSet = new Array();
            for (let z in params.ActivityRelatedInstanceSet) {
                let obj = new ActivtyRelatedInstance();
                obj.deserialize(params.ActivityRelatedInstanceSet[z]);
                this.ActivityRelatedInstanceSet.push(obj);
            }
        }
        this.StatusMessageSimplified = params.StatusMessageSimplified || null;

    }
}

/**
 * ModifyDesiredCapacity返回参数结构体
 * @class
 */
class ModifyDesiredCapacityResponse extends  AbstractModel {
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
 * CreateAutoScalingGroup返回参数结构体
 * @class
 */
class CreateAutoScalingGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩组ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupId = params.AutoScalingGroupId || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 描述了 “云监控” 服务相关的信息。
 * @class
 */
class RunMonitorServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启[云监控](https://cloud.tencent.com/document/product/248)服务。取值范围：<br><li>TRUE：表示开启云监控服务<br><li>FALSE：表示不开启云监控服务<br><br>默认取值：TRUE。
         * @type {boolean || null}
         */
        this.Enabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = params.Enabled || null;

    }
}

/**
 * ModifyLaunchConfigurationAttributes返回参数结构体
 * @class
 */
class ModifyLaunchConfigurationAttributesResponse extends  AbstractModel {
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
 * 负载均衡器目标属性
 * @class
 */
class TargetAttribute extends  AbstractModel {
    constructor(){
        super();

        /**
         * 端口
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 权重
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
        this.Port = params.Port || null;
        this.Weight = params.Weight || null;

    }
}

/**
 * DetachInstances请求参数结构体
 * @class
 */
class DetachInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩组ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * CVM实例ID列表
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
        this.AutoScalingGroupId = params.AutoScalingGroupId || null;
        this.InstanceIds = params.InstanceIds || null;

    }
}

/**
 * 实例信息
 * @class
 */
class Instance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 伸缩组ID
         * @type {string || null}
         */
        this.AutoScalingGroupId = null;

        /**
         * 启动配置ID
         * @type {string || null}
         */
        this.LaunchConfigurationId = null;

        /**
         * 启动配置名称
         * @type {string || null}
         */
        this.LaunchConfigurationName = null;

        /**
         * 生命周期状态，取值包括IN_SERVICE, CREATING, TERMINATING, ATTACHING, DETACHING, ATTACHING_LB, DETACHING_LB等
         * @type {string || null}
         */
        this.LifeCycleState = null;

        /**
         * 健康状态，取值包括HEALTHY和UNHEALTHY
         * @type {string || null}
         */
        this.HealthStatus = null;

        /**
         * 是否加入缩容保护
         * @type {boolean || null}
         */
        this.ProtectedFromScaleIn = null;

        /**
         * 可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 创建类型，取值包括AUTO_CREATION, MANUAL_ATTACHING。
         * @type {string || null}
         */
        this.CreationType = null;

        /**
         * 实例加入时间
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * 实例类型
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
        this.InstanceId = params.InstanceId || null;
        this.AutoScalingGroupId = params.AutoScalingGroupId || null;
        this.LaunchConfigurationId = params.LaunchConfigurationId || null;
        this.LaunchConfigurationName = params.LaunchConfigurationName || null;
        this.LifeCycleState = params.LifeCycleState || null;
        this.HealthStatus = params.HealthStatus || null;
        this.ProtectedFromScaleIn = params.ProtectedFromScaleIn || null;
        this.Zone = params.Zone || null;
        this.CreationType = params.CreationType || null;
        this.AddTime = params.AddTime || null;
        this.InstanceType = params.InstanceType || null;

    }
}

/**
 * 与本次伸缩活动相关的实例信息。
 * @class
 */
class ActivtyRelatedInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例在伸缩活动中的状态。取值如下：
<li>SUCCESSFUL：活动成功
<li>FAILED：活动失败
         * @type {string || null}
         */
        this.InstanceStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = params.InstanceId || null;
        this.InstanceStatus = params.InstanceStatus || null;

    }
}

/**
 * CreateAutoScalingGroup请求参数结构体
 * @class
 */
class CreateAutoScalingGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 伸缩组名称，在您账号中必须唯一。名称仅支持中文、英文、数字、下划线、分隔符"-"、小数点，最大长度不能超55个字节。
         * @type {string || null}
         */
        this.AutoScalingGroupName = null;

        /**
         * 启动配置ID
         * @type {string || null}
         */
        this.LaunchConfigurationId = null;

        /**
         * 最大实例数，取值范围为0-2000。
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * 最小实例数，取值范围为0-2000。
         * @type {number || null}
         */
        this.MinSize = null;

        /**
         * VPC ID，基础网络则填空字符串
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 默认冷却时间，单位秒，默认值为300
         * @type {number || null}
         */
        this.DefaultCooldown = null;

        /**
         * 期望实例数，大小介于最小实例数和最大实例数之间
         * @type {number || null}
         */
        this.DesiredCapacity = null;

        /**
         * 传统负载均衡器ID列表，目前长度上限为1，LoadBalancerIds 和 ForwardLoadBalancers 二者同时最多只能指定一个
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 应用型负载均衡器列表，目前长度上限为1，LoadBalancerIds 和 ForwardLoadBalancers 二者同时最多只能指定一个
         * @type {Array.<ForwardLoadBalancer> || null}
         */
        this.ForwardLoadBalancers = null;

        /**
         * 子网ID列表，VPC场景下必须指定子网
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * 销毁策略，目前长度上限为1。取值包括 OLDEST_INSTANCE 和 NEWEST_INSTANCE，默认取值为 OLDEST_INSTANCE。
<br><li> OLDEST_INSTANCE 优先销毁伸缩组中最旧的实例。
<br><li> NEWEST_INSTANCE，优先销毁伸缩组中最新的实例。
         * @type {Array.<string> || null}
         */
        this.TerminationPolicies = null;

        /**
         * 可用区列表，基础网络场景下必须指定可用区
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * 重试策略，取值包括 IMMEDIATE_RETRY 和 INCREMENTAL_INTERVALS，默认取值为 IMMEDIATE_RETRY。
<br><li> IMMEDIATE_RETRY，立即重试，在较短时间内快速重试，连续失败超过一定次数（5次）后不再重试。
<br><li> INCREMENTAL_INTERVALS，间隔递增重试，随着连续失败次数的增加，重试间隔逐渐增大，重试间隔从秒级到1天不等。
         * @type {string || null}
         */
        this.RetryPolicy = null;

        /**
         * 可用区校验策略，取值包括 ALL 和 ANY，默认取值为ANY。
<br><li> ALL，所有可用区（Zone）或子网（SubnetId）都可用则通过校验，否则校验报错。
<br><li> ANY，存在任何一个可用区（Zone）或子网（SubnetId）可用则通过校验，否则校验报错。

可用区或子网不可用的常见原因包括该可用区CVM实例类型售罄、该可用区CBS云盘售罄、该可用区配额不足、该子网IP不足等。
如果 Zones/SubnetIds 中可用区或者子网不存在，则无论 ZonesCheckPolicy 采用何种取值，都会校验报错。
         * @type {string || null}
         */
        this.ZonesCheckPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AutoScalingGroupName = params.AutoScalingGroupName || null;
        this.LaunchConfigurationId = params.LaunchConfigurationId || null;
        this.MaxSize = params.MaxSize || null;
        this.MinSize = params.MinSize || null;
        this.VpcId = params.VpcId || null;
        this.DefaultCooldown = params.DefaultCooldown || null;
        this.DesiredCapacity = params.DesiredCapacity || null;
        this.LoadBalancerIds = params.LoadBalancerIds || null;
        this.ProjectId = params.ProjectId || null;

        if (params.ForwardLoadBalancers) {
            this.ForwardLoadBalancers = new Array();
            for (let z in params.ForwardLoadBalancers) {
                let obj = new ForwardLoadBalancer();
                obj.deserialize(params.ForwardLoadBalancers[z]);
                this.ForwardLoadBalancers.push(obj);
            }
        }
        this.SubnetIds = params.SubnetIds || null;
        this.TerminationPolicies = params.TerminationPolicies || null;
        this.Zones = params.Zones || null;
        this.RetryPolicy = params.RetryPolicy || null;
        this.ZonesCheckPolicy = params.ZonesCheckPolicy || null;

    }
}

/**
 * 描述了启动配置创建实例的公网可访问性，声明了实例的公网使用计费模式，最大带宽等
 * @class
 */
class InternetAccessible extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络计费类型。取值范围：<br><li>BANDWIDTH_PREPAID：预付费按带宽结算<br><li>TRAFFIC_POSTPAID_BY_HOUR：流量按小时后付费<br><li>BANDWIDTH_POSTPAID_BY_HOUR：带宽按小时后付费<br><li>BANDWIDTH_PACKAGE：带宽包用户<br>默认取值：TRAFFIC_POSTPAID_BY_HOUR。
         * @type {string || null}
         */
        this.InternetChargeType = null;

        /**
         * 公网出带宽上限，单位：Mbps。默认值：0Mbps。不同机型带宽上限范围不一致，具体限制详见[购买网络带宽](https://cloud.tencent.com/document/product/213/509)。
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * 是否分配公网IP。取值范围：<br><li>TRUE：表示分配公网IP<br><li>FALSE：表示不分配公网IP<br><br>当公网带宽大于0Mbps时，可自由选择开通与否，默认开通公网IP；当公网带宽为0，则不允许分配公网IP。
         * @type {boolean || null}
         */
        this.PublicIpAssigned = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InternetChargeType = params.InternetChargeType || null;
        this.InternetMaxBandwidthOut = params.InternetMaxBandwidthOut || null;
        this.PublicIpAssigned = params.PublicIpAssigned || null;

    }
}

/**
 * DescribeLaunchConfigurations请求参数结构体
 * @class
 */
class DescribeLaunchConfigurationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按照一个或者多个启动配置ID查询。启动配置ID形如：`asc-ouy1ax38`。每次请求的上限为100。参数不支持同时指定`LaunchConfigurationIds`和`Filters`
         * @type {Array.<string> || null}
         */
        this.LaunchConfigurationIds = null;

        /**
         * 过滤条件。
<li> launch-configuration-id - String - 是否必填：否 -（过滤条件）按照启动配置ID过滤。</li>
<li> launch-configuration-name - String - 是否必填：否 -（过滤条件）按照启动配置名称过滤。</li>
每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`LaunchConfigurationIds`和`Filters`。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
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
        this.LaunchConfigurationIds = params.LaunchConfigurationIds || null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = params.Limit || null;
        this.Offset = params.Offset || null;

    }
}

/**
 * DeleteScheduledAction返回参数结构体
 * @class
 */
class DeleteScheduledActionResponse extends  AbstractModel {
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
 * DescribeAutoScalingInstances请求参数结构体
 * @class
 */
class DescribeAutoScalingInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待查询云服务器（CVM）的实例ID。参数不支持同时指定InstanceIds和Filters。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 过滤条件。
<li> instance-id - String - 是否必填：否 -（过滤条件）按照实例ID过滤。</li>
<li> auto-scaling-group-id - String - 是否必填：否 -（过滤条件）按照伸缩组ID过滤。</li>
每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`InstanceIds`和`Filters`。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

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
        this.InstanceIds = params.InstanceIds || null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

    }
}

/**
 * DescribeAutoScalingActivities返回参数结构体
 * @class
 */
class DescribeAutoScalingActivitiesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的伸缩活动数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 符合条件的伸缩活动信息集合。
         * @type {Array.<Activity> || null}
         */
        this.ActivitySet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ActivitySet) {
            this.ActivitySet = new Array();
            for (let z in params.ActivitySet) {
                let obj = new Activity();
                obj.deserialize(params.ActivitySet[z]);
                this.ActivitySet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 描述了实例登录相关配置与信息，出于安全性考虑，不会描述敏感信息。
 * @class
 */
class LimitedLoginSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * 密钥ID列表。
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyIds = params.KeyIds || null;

    }
}

/**
 * ModifyScheduledAction请求参数结构体
 * @class
 */
class ModifyScheduledActionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待修改的定时任务ID
         * @type {string || null}
         */
        this.ScheduledActionId = null;

        /**
         * 定时任务名称。名称仅支持中文、英文、数字、下划线、分隔符"-"、小数点，最大长度不能超60个字节。同一伸缩组下必须唯一。
         * @type {string || null}
         */
        this.ScheduledActionName = null;

        /**
         * 当定时任务触发时，设置的伸缩组最大实例数。
         * @type {number || null}
         */
        this.MaxSize = null;

        /**
         * 当定时任务触发时，设置的伸缩组最小实例数。
         * @type {number || null}
         */
        this.MinSize = null;

        /**
         * 当定时任务触发时，设置的伸缩组期望实例数。
         * @type {number || null}
         */
        this.DesiredCapacity = null;

        /**
         * 定时任务的首次触发时间，取值为`北京时间`（UTC+8），按照`ISO8601`标准，格式：`YYYY-MM-DDThh:mm:ss+08:00`。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 定时任务的结束时间，取值为`北京时间`（UTC+8），按照`ISO8601`标准，格式：`YYYY-MM-DDThh:mm:ss+08:00`。<br>此参数与`Recurrence`需要同时指定，到达结束时间之后，定时任务将不再生效。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 定时任务的重复方式。为标准[Cron](https://zh.wikipedia.org/wiki/Cron)格式<br>此参数与`EndTime`需要同时指定。
         * @type {string || null}
         */
        this.Recurrence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScheduledActionId = params.ScheduledActionId || null;
        this.ScheduledActionName = params.ScheduledActionName || null;
        this.MaxSize = params.MaxSize || null;
        this.MinSize = params.MinSize || null;
        this.DesiredCapacity = params.DesiredCapacity || null;
        this.StartTime = params.StartTime || null;
        this.EndTime = params.EndTime || null;
        this.Recurrence = params.Recurrence || null;

    }
}

/**
 * 启动配置的数据盘配置信息。若不指定该参数，则默认不购买数据盘，当前仅支持购买的时候指定一个数据盘。
 * @class
 */
class DataDisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据盘类型。数据盘类型限制详见[CVM实例配置](https://cloud.tencent.com/document/product/213/2177)。取值范围：<br><li>LOCAL_BASIC：本地硬盘<br><li>LOCAL_SSD：本地SSD硬盘<br><li>CLOUD_BASIC：普通云硬盘<br><li>CLOUD_PREMIUM：高性能云硬盘<br><li>CLOUD_SSD：SSD云硬盘<br><br>默认取值：LOCAL_BASIC。
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 数据盘大小，单位：GB。最小调整步长为10G，不同数据盘类型取值范围不同，具体限制详见：[CVM实例配置](https://cloud.tencent.com/document/product/213/2177)。默认值为0，表示不购买数据盘。更多限制详见产品文档。
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 数据盘快照 ID，类似 `snap-l8psqwnt`。
         * @type {string || null}
         */
        this.SnapshotId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskType = params.DiskType || null;
        this.DiskSize = params.DiskSize || null;
        this.SnapshotId = params.SnapshotId || null;

    }
}

module.exports = {
    RemoveInstancesResponse: RemoveInstancesResponse,
    DisableAutoScalingGroupResponse: DisableAutoScalingGroupResponse,
    SystemDisk: SystemDisk,
    ModifyLaunchConfigurationAttributesRequest: ModifyLaunchConfigurationAttributesRequest,
    DisableAutoScalingGroupRequest: DisableAutoScalingGroupRequest,
    DeleteAutoScalingGroupResponse: DeleteAutoScalingGroupResponse,
    AutoScalingGroupAbstract: AutoScalingGroupAbstract,
    DetachInstancesResponse: DetachInstancesResponse,
    EnableAutoScalingGroupRequest: EnableAutoScalingGroupRequest,
    ModifyAutoScalingGroupRequest: ModifyAutoScalingGroupRequest,
    CreateLaunchConfigurationRequest: CreateLaunchConfigurationRequest,
    AutoScalingGroup: AutoScalingGroup,
    CreateScheduledActionRequest: CreateScheduledActionRequest,
    EnhancedService: EnhancedService,
    AttachInstancesResponse: AttachInstancesResponse,
    DeleteLaunchConfigurationResponse: DeleteLaunchConfigurationResponse,
    DescribeAutoScalingGroupsRequest: DescribeAutoScalingGroupsRequest,
    LaunchConfiguration: LaunchConfiguration,
    DescribeAccountLimitsRequest: DescribeAccountLimitsRequest,
    DescribeAccountLimitsResponse: DescribeAccountLimitsResponse,
    DescribeLaunchConfigurationsResponse: DescribeLaunchConfigurationsResponse,
    CreateLaunchConfigurationResponse: CreateLaunchConfigurationResponse,
    ForwardLoadBalancer: ForwardLoadBalancer,
    DeleteScheduledActionRequest: DeleteScheduledActionRequest,
    DescribeAutoScalingActivitiesRequest: DescribeAutoScalingActivitiesRequest,
    ModifyDesiredCapacityRequest: ModifyDesiredCapacityRequest,
    InstanceMarketOptionsRequest: InstanceMarketOptionsRequest,
    CreateScheduledActionResponse: CreateScheduledActionResponse,
    DescribeScheduledActionsResponse: DescribeScheduledActionsResponse,
    DescribeAutoScalingGroupsResponse: DescribeAutoScalingGroupsResponse,
    DeleteAutoScalingGroupRequest: DeleteAutoScalingGroupRequest,
    DescribeScheduledActionsRequest: DescribeScheduledActionsRequest,
    ScheduledAction: ScheduledAction,
    RemoveInstancesRequest: RemoveInstancesRequest,
    ModifyAutoScalingGroupResponse: ModifyAutoScalingGroupResponse,
    DeleteLaunchConfigurationRequest: DeleteLaunchConfigurationRequest,
    AttachInstancesRequest: AttachInstancesRequest,
    SpotMarketOptions: SpotMarketOptions,
    RunSecurityServiceEnabled: RunSecurityServiceEnabled,
    DescribeAutoScalingInstancesResponse: DescribeAutoScalingInstancesResponse,
    LoginSettings: LoginSettings,
    Filter: Filter,
    ModifyScheduledActionResponse: ModifyScheduledActionResponse,
    EnableAutoScalingGroupResponse: EnableAutoScalingGroupResponse,
    Activity: Activity,
    ModifyDesiredCapacityResponse: ModifyDesiredCapacityResponse,
    CreateAutoScalingGroupResponse: CreateAutoScalingGroupResponse,
    RunMonitorServiceEnabled: RunMonitorServiceEnabled,
    ModifyLaunchConfigurationAttributesResponse: ModifyLaunchConfigurationAttributesResponse,
    TargetAttribute: TargetAttribute,
    DetachInstancesRequest: DetachInstancesRequest,
    Instance: Instance,
    ActivtyRelatedInstance: ActivtyRelatedInstance,
    CreateAutoScalingGroupRequest: CreateAutoScalingGroupRequest,
    InternetAccessible: InternetAccessible,
    DescribeLaunchConfigurationsRequest: DescribeLaunchConfigurationsRequest,
    DeleteScheduledActionResponse: DeleteScheduledActionResponse,
    DescribeAutoScalingInstancesRequest: DescribeAutoScalingInstancesRequest,
    DescribeAutoScalingActivitiesResponse: DescribeAutoScalingActivitiesResponse,
    LimitedLoginSettings: LimitedLoginSettings,
    ModifyScheduledActionRequest: ModifyScheduledActionRequest,
    DataDisk: DataDisk,

}
